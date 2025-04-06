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
    "4zYSHbj3yc2eA9FgVvyh9eZwtUFdNh42hp1QzEGuP5cr3mNG14pvqAMYkrirheexjrwznSzXtbcwyzwviV43Ts3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZUzQnrs6oiKPxRjmzYkz6iRVyoBh2MzmAnjFT1N9LGRfaBVBmjZDrXAGwu3suERgwgWruN5a13tjdwi5LZJv6bo",
  "key1": "44xyv2767FMHsJUJwyUYvvnceRrbvNDRQ9VQehjAAAjNZvSX9wGXCuCDVVjegNWd5WxcbqSACEWCHncE1vGUNm4B",
  "key2": "5YZuYjGEzs4fGLbS5vTrNCbayk2xzvHhvuRc241kRyD1H3TFNVDy26JyjWC1K9fmT74b4SaeDPB3f23r13d62Pas",
  "key3": "2JxX6nNwpLHmjwR5EVgkCptHYz6icciY2vpzPboEgk5h97PYFYMPsiydfPB9ERnrbAfnNRCXGrJnXL5GtpHLXmnV",
  "key4": "4MPsRx6fA3d3gp2E2wCdpZo2EsoVtUZ7cCsUKMQba1W9g2VD3bKBxHqDN8kuMUsCkSbMQ2L34kemXXxLK1T3XFy6",
  "key5": "3eXh1ua59kY4bQ59r1oc9n6114SbTgyskNLaP1GRrshLa9S331R9kuAPC1JwRskRR98ECsmf1KXW1gKewFYfTmtc",
  "key6": "5WVS445AqraaVYQ3Ymiw9zpk4pdKsGFo7VGXyXGHqNCtbUpG1HUrR99r4E1FvzCSHroR4xkhcNLF5eNE7Efq7Bd3",
  "key7": "5xGR3zgvx147dUrfPSRvRmqjmfUBmCuqmLCF3MEHTQNYrZhBmiFCmcxu5gXPrPUh2UsNiAAUfM6X6zFKBb88D8qC",
  "key8": "5C46ZiW1cJR4EjMBBZKSZGqnzvKqkXdQabBso6jGG7w7KF4RaTBsUsEsqaAgyfufCxCB18pbfLSPbLWxjK1H3iUV",
  "key9": "4Lrpos9LPFuDqnhuZbU5CfJA6ZH4rKAJXdk8dJKz6J6Qfb1DwCaA4yyTEiV2Tne3KedPzurJBCQz4f3rqLgZg2Gs",
  "key10": "5QvJwGbdcZcCG2FhL5i5cGPvzpkfW3dWp1gEcGQkvJkSLkeWwga9qrfMmreGqLwZxEQyMHw1heXyqVFxJq5Y8CtK",
  "key11": "2FbGwZNG5Qp3PhBJNefV3WiWxBMq3sShLMrBdoYDUV7vDrojjX7ADJp4rtqz1BPv5CmZJPZVWdhFWR81axsnCimh",
  "key12": "3p5nYGpMwsgVpmi8VPPYaJTafSC8dJLbgPGiziQ3SvDxswQMNvGuZAecVNYdRhHoNTPXyTSekuEHtMNWTLtX3GmK",
  "key13": "4FpvEXnv4aWPukTkdeddLAByw43NkyGmejQ6rSkdpi1sFCYVC66xGmDFdavYHasm3K6sHDGTmS8zitHJFm4xZaxz",
  "key14": "3aiBi24APHeXVXGxk8M7tmoyPcKreHTTTcdAeBdHCh3L7Y2H9Au87rfZKFEx9GXu1TdQq6eDrWVhz3sjd5MxruF5",
  "key15": "238NBzSDNRLeaHEVXpFikod2q8AsG6USd86TSmzTVak7YcLxQVe6rM2DswUi4AyPiXSH67udqqUKgzgt4TVcKKSc",
  "key16": "3yb8eXiWDwb482hJmPRjgaDLcTkNrKj4eAheXCtg28uANesgw6gMJdk5xjiEtZjgkbtAZsakKyPd6xTjAvnJx3MU",
  "key17": "4nT4UZHTbMZ2tnC6rKToyyih56ZGVAjwYRptgAbZyx3C69e5oZ6THMUp5sr8tYz53UrEpjwkLNbpXc8vYf2D6GxN",
  "key18": "5MJrkCnb2VjuwkCy37PMwreFhjnE5vtMzQNxjjF8NymwUaekc8kYNZ8S5SQaPiM2ZDczwSzdGZE2V1VysrVfDRvY",
  "key19": "hJR2njg8Bv5o7SP8Lb4aHi8qFwL6MNTDC7HrgTnLUCcxN5Th1DHRjRdYjdvuzknAJocRE1PnFAWYB6NQeEkDrPp",
  "key20": "4qwbvnJG8Y14tEJcBbadAAKkCPXN4axR485pV6xrMpa2PgdkWdPWJDMF8SdYH4XspX7HACLw9WXDBxNTNHECZwGQ",
  "key21": "3WBwQ8V8QjQQPSCEizRzyFxaf8VhFcSRQhzTivZSw52duwVv1ZE8n9mAFPzW7qAstopC5yPSD9CJic1KwT4MxkxV",
  "key22": "4bJhGx2osQGTVap12aafzSCYCicZaXpiMcqm19rxug6PcWGdFPVoeYD1vQNz7gr4EGhUKuVEcfEDa2cYRR1pgg3Z",
  "key23": "2g1tY8zkPFavkFmY7j3VVvspA3G4psxJZ68hYQMHnZZzoDMb7qe5KP2vUvizQ9sEqAXgSRpNQ4vxCSk9M72TBDYJ",
  "key24": "uiZF6F112AnhMuaMiY7CtcUAqjys1WHkxLpfXoTX5m2hCCj9BoTZ8H5npNma4Np4ZYMGDEUjn1mL97N9eek3giE",
  "key25": "3AbL87zfSuxdc83vEakdjAbKiZiydeBgfjmxax3nT2A3BPMznHLuySEUGtQh4CnVHjCKTT5LDojXwZoHMJ5utcRM",
  "key26": "8HBrTdJMCNmsGWhWqRA8d7XjU7L1e9tdRhyW94qkgvjWpLAq9ofFrQm5BQaW4D4JCQwKasC58bKNqGAePTCapPf",
  "key27": "2cTEsp5X4srJeNuVmgvMpah4gwHzcSRPEoheJGejGxJYJnPJy65oRUp74fJn1LQNrDiEeUXJXGr1z6mLEcShYgAQ",
  "key28": "5MRv3DLjAyyWwZqAGoa36C68xPyeatnDovAvzRatbdvChLvG5dVCi3Uy1Ghmyj4DrKBPngQ4UbYbpVcLXUfzKrwQ",
  "key29": "5YhvqV7xGP5CuWQxdJhV6GYPM7mGDG28ssut5uLwmeT7cDTyNLMpurmxHzDHkuE6GZh7G83yDpmb1uMT5CkTEHCr",
  "key30": "4B1fvnpe7nMcgDcQxd4GjNGZnNvhiuesicFH8Wf8uHZfMtsabrSY7JyMYLDqdGGaL5miqovjHRJDSGryH4WpwZt5",
  "key31": "33gdpy3gUwXbYc72cjALEi6w8vFDfkFYh6ZdQj8bXf97fUGWacicVoB6FkcE5nP3GSxAGsvJ7SQDWMSsDPpEJggU",
  "key32": "22jSBQUJcAhjBQ8GqHqypQ48YZatVfmmEwndiPHYMNFczJGgB1maWqw7qTjZ1StWYmEWSG5QBUFPYJd9CrfRgq3Y",
  "key33": "2W5pYSLcMyxJAddLpv9E8jq8LrPPsNvC4SesvefnMVDSKXRX9LSnVGwop7ercHqkvmXvyyLuLa3bHgwdtgMmdeJH",
  "key34": "2yudQSLmQjFkLpTS4WaYe1NHVWdS7GbGcKe4n7x1tgxd3hQ67uhtk7AJvjmWPAVPzxgFpXMHgXt2KaaLPnesigQ7",
  "key35": "5fD33hUniFKAPTubjzdiQfa1tRWrP41xW9XRQYRDccrMqNY2tBNqffDQqvRpH27pxUqGJvkbLUJjCYRufGsxV2xr",
  "key36": "4vna8A1yjYugipqjXDzSVfVmqTMX3GLu2WQ9quxKDU8pMFuYs7zLDTzVuoWgQhCQAgWWcGGoxDF7TxTSxD9zPx3i",
  "key37": "3gU43oYwxch67AiiWxDjAMJGReoxjzhVD4N6bQgtpRgJYxKvybFb78broE41pzwM4eqHXPiPG8UGePgW79AnHjXF",
  "key38": "3vwRpo9kVVbNduhg1y7kwvH5xozXR9mhSZFj5xpFSJMVQu3B44T1Vgv2aSyxVpZcD3usTMCBm9UnyypYzr54ipcr",
  "key39": "4uAyqkqoCapUFaeFXb9vDJPEe9aMKqLJzZ7FJBfhSnArKELLmhWqREaExvtAuXdZZSmg83dAusoMyG9YAaY3x1JP",
  "key40": "3XowMkiGbZrFYhGK5qCeNqENXMuTVTi6Pni7GPpyvxMbYdnoJ9zJtaV7RQh5iqi9H8dfChCTttkKpii3yaLmKMZf",
  "key41": "Q8iytrZPCkB7MDvvc8xuUwqy2jgwREw4XBbANiNvH7wtgrkF7dPj5qKNhQ2uUNMLYBFLYSaLHkYf331UXD6cAXM",
  "key42": "3bAfaR8KaZEgfByLfuyWBeZVoiijeq3MfmJWhzNeCN4xfP7QLmotrC1UZST4fCi3Zc1siYcznWapnUCFowcqGkAr",
  "key43": "2WnyJ7JsgkLrSyW8DGJHRoCFBb1JE7WsP6eq85fUwbkKoygpPwvWUr3mtYy6ftxAvLAwwy3W9mco7jcuRfyRPkBR",
  "key44": "53Fgu4irUGgErPf4ke8htNmdWLtwf5ZxEKw6JxXXBq6zwvbt7pjdYFm6qdg3KnxJ98kVM8DhhB5qPAQSDwevKrq4",
  "key45": "3AY7w38qLkyugbvqWe3aAhwrkiyh52P6Txz8oBpwnukyWD5X9GNxAMFJkYQppy5ozDPYKnYLSjmMS1zWr5A2n5jR",
  "key46": "4JUTAbGXZyFTyZL3MN2AVHJ2GoPse18A73oX7UpEmobtJwQh3QLE4GtRjJvf6d5m9DhX8XUv8bPFpiZAHokwpkEr"
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
