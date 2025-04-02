/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4gAcyFwGvEdiTjiWGLba3XYpFmi1CiGBkr7ESSdpsEN3D6mwa8qqxTBSA1a5RaV4PobZ1s9Pvhy4jw9tTFVpDXMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5De4A2tRAKw57aeEdxmL95BoyhDZLdQ8CXz3x3bkfWbAh2eJSn7t3r7Rq87hkAnf6fTBEabxDmXfotkqe8ZKBcP2",
  "key1": "2LirorUkXBVdJYaDnbqr3yoHwPUeiEcGo3fd1Ky8Ubg5RBNxdtAuNqQgekMFRLmGSn79f28ESFWCWcCcPN58pH7f",
  "key2": "463eSfYjawqFqcTWLT1LpnVe6BigoXm9xs2C3tYtVCBC8tmz3zSWKEWV7k7F8KkhJpWw2j2p2rQhwGPV9qeDoBnF",
  "key3": "mTo5pjxRCv9qFtuywuFUkMmYoc3MNwFZEKbbZ4kJaWCNYnBzZUGa7RMcNjUG3VDwR36bGu62GXuQMUTkdEBfYJJ",
  "key4": "3caHqtRZhJhAKnpxdgBGH4vawSX1Li9p3Eh4XbGcY9aWNUzcsQC68f8Ww1Ldw7m26cFjdhADZ9jYhSv8bh4NBT9W",
  "key5": "5kvMZ8sCWoLae6FkekaVecMKw6E6ereGzCxBnh14v9CrzVnEfM9AL6uN8t8jTixh6SDosTYtczd7KLHeeMiV1oQh",
  "key6": "55RT4jPWht3P8xDaLWpu5zCPZwAeqBNJG7vd6xWXom7Mk2VVuq8J4mHyz9NERTtzBUxVNZhM5cdFC8c63FRBavBD",
  "key7": "TvZ4dVnaBosUBqFozvLGwx8nBnL7a529d6N5ESpHiTGEwUGZryskEsJhtxMGGNemRTdJPhSnc5FDQmpTWAF535M",
  "key8": "89QjT4vE8Z57jQZdNQWUNugxLa32tQ1WUN1d7CZguQfP2PbG2ucxsZ12xE8BvDkHaXqD3L6chBeGaq7BhiQSJDD",
  "key9": "59VK1vpgwhC722aJqWCzs3DhRgZYQYerWArCLTUd5o2F6FC1aNaRfv5YVrFr2PgyvzUCcaE7D5RRP1C7HRaMpJDS",
  "key10": "3vSUsfk14u9w1HjVAX31zGPT1unXEyB8GQViA2xRMkqQa8wRdU34CRCeBu79KteRijDBHXsyLXMHH8WhbyvtCfyk",
  "key11": "2f6XTLvuoH6kMW7PhnN12duyTyhHkJGzGDfuBVDx1xVFXkznbc6Au3wwejmEnqFn4Fw2Ahw5mz7APKYoSbcWSXmk",
  "key12": "2zdzggXAnYjPGN6K7vuDWA6f5o5bbRnofHuQvdjczi3Ft6wM4AvKUe1UQTjsuTkEgVpAha8TsZdwcH9C1jJCiBYL",
  "key13": "2trgx7gEgmDF59fuqRNQNSt9WeTBbipmNBxbFHt82TejwZR5S8aab94YxDV5VEL6cGTVRx9zFjiCtS7NeH8Sz3Uh",
  "key14": "48Q4LcnReo7YDCSHQvdMuPiMbzc9UCtGh5r3995GFVho6BrdLcUYePbNDVhypYq4NynqPqyorkiFVGwwugk1KHcX",
  "key15": "3mu8s2xsiofxwMXdYNDebuZhDWxWfthcPZZhrVp1ywFgZCAq39qVgfbujR3ajhX6ftWTWy9qti1SKuvkz1a3KEn5",
  "key16": "4V2dLSBdGEnJTbeibWthXekn1o7kvZdE167Xm7W5YSqMSiyELMCn4t2MFtfqonhrSwVuJHfYcyYNNMYUUdQiska7",
  "key17": "P78G6k2Vd3b6wZMnXsdXWL8bUN5VaXTa1YveU3a6gQNqAHyMFjPw4Xt3zRuHEbEH54irxhARa5aigR95yaNhx2V",
  "key18": "3krhc7ZCisW2aD9cW1SMN4sLPBzZjR8EphuxDqJAzMeSVgXN1ovq5Rxv4JRpkmYmYWCheudjmmvTfbY7s2UJtZ16",
  "key19": "57u3LWj2co6oftGyTWqKAv7rpaQGjSbZCwCYUaqskv4Ez8k5bZ6pxpJXXFdBLmVGyezXZWKWLQX3yXBxfeafYwzY",
  "key20": "UZ3YTN7rda69CFzCAmUtKWP3goF8L1WHfLFnaLC5DFCu3jaYHzcBbhKnL8o34tsvtPqKSJzug34x8yrkSxF3DWm",
  "key21": "5q1TWqTyZHXV5JSJhqDvafYTjCnfidMakfy71U2kQ1EAsGWDtDMfbYXJDKYVC6LZhfTNEehDd3QDpkQT7dHkksuG",
  "key22": "3veoHSmDab37QcToD2M4FJkFtmaGBmAHvccDAHjEj65dUm4NmmFJ1fEh5mEwaGdRQQXYUshsYxUANiBFQYbomVUS",
  "key23": "3Yu3uebyb4NRyWs5mvH8S6iTiWVCDnGbhxVArsWRQyqZYhhXt5TEuZanhXPKm9kEr3RpVZyMgfyJxNFdWkoWrSu5",
  "key24": "26SDPzSLxyFNc5hxngPigHXCw565LeM1SW5LZeiaNcSMLonMUid7SmvQEJKrsiDhyq1EeRPuGkSvNCLssMpZnWSw",
  "key25": "5ScSaJ22JpRx4ZtGa2Ui3knxTht9c6TeviTPYVTkbJeSdtLgiaqcevCzmdSTiiL8hd1gTRXvsBkNL5hyZUmkgC3E",
  "key26": "561HfjUoPmfAUoCeuiUoNJ28CsLDu7v3gDX76kafAPV1PkzSB8DgXCqNHabVHU3cC2HA6pBsyuaLRwNQy2JirRAB",
  "key27": "2n5NyMLH1XVAPU41xV4jCTh3vdWkuuCdvRXRmgvcP8mtSAW18RsXQWmeyyzvTddhCe5iKd4JHJ981w3xrnBDJ2cy",
  "key28": "2QubF8PTEoXKvf8F9gTP7xKF3hbRGR6RZsBnng5fF1xoKzBfedZCxWqXNascgGnCbSezrVjawkZzQsuDpc2rheMJ",
  "key29": "3XSCAUeE1s3RjeVfiJy3LkdsQoenZvXCuL7hHoeQJVcNkXXPHHTqERbuD6KtyGNq61XVqxxkCAoJMNowAkjELtQS",
  "key30": "3GWZpHXHg2HcNtAUkNHbtFFrpJAT4gzmFSQAvSUJAGCeVXRDXqhcnNcBbeYT4NuLZWi7h8Xu2jMhzhM5qgTaTJdD",
  "key31": "35ZXQeeyJqdMBPfBECfHnswWCm86ZcnPvNEXwuDqUztsBVzffG3qTSksrZG6D6Uys69njHiaaBX2BXFWdt8NANUZ",
  "key32": "4MGDQYenvY56tDVTgJv7kMH6xwi3kBdgorBdvKEUyonySd6CEksrbWLPwXRn94kDTgg8gYrJ4FDYdX4887LZipQF",
  "key33": "2V4TVPhX5WFHgjLitufaDxwLSUR4YEu9f1JjD4MfbqmzWx7ASPQCBjeiATBHve1Mqcvci1Ft481Lqbs11RHEk8TR",
  "key34": "Nyqoe1MG9gh8B28HaNwqCgMubpacBQRiRgaE3QZxk46onT5hNySDYMT154yMkfEqZGtbAjRem5bhPy4nSHa518s",
  "key35": "5MGUo2WDpX7ESA1AcCZHA9xuiJpZjhFEKB4nNKRNyb8kotFNacxP98JX5JwvwCgAidXj5NMpCgsThdBhQhq1LgMo",
  "key36": "3r9j2fVJZNvcksJVG9RjLquZUGBZQwMx5gZp2UP2v57Rq2DguNzSETx7A1rYNoKWzQEb7z8CcyxNgVjhhn4j3feb",
  "key37": "2WkVBkUmzni5qr8Li1C8rDpWsrZGA4gndnDnVPa1PXGDfL8EEbyRUMArGPX4MjR3deFW7bzqTzSXDz94QB6ASdWQ",
  "key38": "3Aifc4TuaFqhnaEBvoPKmnEJ7JsDNiUbLRqAQQG6s92Ay7JYXzzpBNv6BrgniqWNdWDEz2xtG4mnrKz2vGTpBMJD",
  "key39": "BNeESdWBVY1x468gwNnYoJEmtW6fad7YsnFywk8JAnxj29Tw6PEDJ7XauPRhKEMEudtxtdG4xS9NjrpUmpiZD5y",
  "key40": "4UZQ5yvY2tHtWXjWarLyeHTFPAwpYGG2q4Yk9jBdHfEPo8peAA6kQU9azr4E6LuXQRNyTMYirRZEUoCgAz5Poua8",
  "key41": "5BbZ5u2axtkk92VjccE7x1udPQx7VTnFuA94JZvnoLTrb9iirCDq8L563c4PTBBg3uEL3UpRQZQhoowRK2ENViZo"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
