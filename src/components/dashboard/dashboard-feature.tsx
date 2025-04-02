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
    "4m8kHsSpuDE2cRKhB4ZHMVL2sS8gdYnAmZTJ7kSXsgPp7VuaJnBNj7ydrAc8PJmJUGC7GJXyD7QPNKTMeNbQTFEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ojbJsZz4reijDfb9BX4MivsyQQ4u93wvbSLscB5ehbKzmqTcdt76jyNxD2ajNANgJJaNgxXbW76z7Wru2d5nzu7",
  "key1": "3N27L4AKK6eRg5MSCxc9YthrU5N4hQJaQjxfWmj2R9JSQLtDtUgaDxvgtKDnAkRspTDUdiKSq6NPnXCfDo2EV5Xu",
  "key2": "2LEsjiZBMdGNpe2VTPwMSuCsQME4DHTu4UVSmbhYMhRKHGZxVHoUD2spEvNx26nLawXmiMDKBKNnmZgGVQycg5ZT",
  "key3": "5Fe25hxwkdrA3aMk48kSEzsCpbhwW34bR6k3RtW73w5tH7EYX8PxYpPGTgCY82oqTxGMrNov3k8TNtAj52q3RVAo",
  "key4": "3WJDzSGGfpr7ZNbgMFk5gJgoQY7PSobLeeJJ9qdufJnz3UJ4kcJycJnyyJPuaxmewAHYHQtGVH1z6EhynLJ4eNNN",
  "key5": "CrwGwKWcMV9Eee7Be7eqQdq3fpDoKVfsXaZ9LKeh3wRWJTHrRtUaiu9XrYBf6VXtu44BH8ebtvVdXAhgfvZf5Us",
  "key6": "DFKB4NkzjuZ43YpMtsaJN7tMRWNsqqMYkqp62PVoe4mUK67jao7Ah6E8Dp1QV9JqcJb82tFK1ogpnZ4XEHhHM5y",
  "key7": "eKfMt4ro6SqrML2xDYWEgP5bBGawM2M2nY6cRr45EUQY214HPHdXf5b9Gvr2gkzwqBci4vuhiDCWkcwNVKEM6zt",
  "key8": "4fRgvYKxg7R6UCrdTRiXSGDHa9P2x1zyYSLQbddsHgwxtoSLUyCu2BgoJ61N1qEDqHXYeDSHS9wY8mCxJTii7QjR",
  "key9": "5Zh4PisdoRyTkiiks1jxfSTe9hQ1YLCYgkHxshyZbCkoxrYE7oL7YzBdqDvjQx5bmqJphfAYEgEg1Wqma9fBzVMG",
  "key10": "5tdwhxQN9UGWQ8SeXTCUMvgGwS1jyZ42QPJ9e2u2zTQUkQnQgSbyhZchhaEbUjgy91Cf222HByBaFmnS8eM8SjaB",
  "key11": "4ePxH9V6KwMNM2RDTdCCj8QssoQcBAMQ8X5JHub8gCk36b9Htn4MDegpiBX9anoDu7ScZiVFMU7FFYe76vUimVuk",
  "key12": "5MHiUUGVkWaFz5QjSD6pRxtJGDYZgtF1pu34JQNZXVUNZmc66iZssYzHDLdSvB3G926Ty8jTpGCMWKaxn7GY6dzY",
  "key13": "3bzL1zW2pkGUuh11cTjrrU9UcNxqPbkDhvr4WWspL1ZHw2rkePhsKq6ZfRwf7dpbC6sS87VYgJrNS4TkgvRt6kJs",
  "key14": "4btZfmecke5Qg51RGw9A1UAMvQR12Tw4goyQU73LE3daHWWB1T1qZXti8sfWwB4BhYwLxfVDEJ4H7F5hUNPV361P",
  "key15": "2TRgntaGpKCBpC1puS2NU7RjaoYKgmSqgE32VA7ELDjwC7TnKrgqcByCL91NDEvJQffdzoPPyCCMJLqnknhNw2qh",
  "key16": "3tuxCx21n5CzFME5LS66oUdmWjnyLPH1AjBqUwTNTJm2SF5HYzDZYFHHYXpjEXxDGqXDzmbgwwSpaa2EiQsMkAZC",
  "key17": "3iJ2QVsLuL1WpkiNjcpsfFvDqTJhpUkGLeaQZ8Gm5PBjieVN9SxnH9RaejFygjzya87AdR1hj28MCyFdDE8LpTNu",
  "key18": "ZzrAhVToMo7oDpXSces54BxfqfTumDU83nEwCGzkb9jUi3U1gsPHgMdzSFXRXb38VsS1NaUNVcAeSiU58kAfyoL",
  "key19": "4gFE4etCgKT32dPAVcE4aMunuVqVTLR8fD3P29ZgBM4tzs3EsPj7UTEpcdjRiKhsnW6p199SkJr8PHRLFJAAUY4E",
  "key20": "32EMJnXAzppCPpjyjwwod43ZZYdvSmNeYrESWtcZxUcBs4kMsCm5MwSiasv3jfG4gPrcy2nwBbhSnAXTAxYfxc3Q",
  "key21": "TdrUTVnZFFPiy8W8aqhrsd4q18uB624PuLus5SvXjbrw7ZKbBnmqHgEMXfxPBQtvaYsv66ZahLpVwqaVtzhAXVr",
  "key22": "2B52fx9GbFiucBUxcaAMZj6cunRVrLe8u1X3qgpNdBstZ3NL4z6qsmqEjd3mqRGmF7rpkHU3E26sXdM6Mqx5LPod",
  "key23": "21vhBqTPYyEYrPirdFoMAsbiQBh2h7CQMx4ZR4gZSp4w35scdTK4G7ymNXVnorckpMn1ndAFEDWUf9fXwKpyn9Sk",
  "key24": "52MEHPADLmWv5CY8tQVsZtM9RoZbDEsz1rLGq1e7XPVY1xZtkM1rNo34KLAKbQzuzZTAp6tDyP6xBqdBBGmdSkpf",
  "key25": "2Ms4GzQinLBnWUDA4vvMq3Bc76YkSkdNUaBuLyATEpsB445oq4hpFetPeaBt8ivZWKjReuPGLPguPL9SSVtkJ82r",
  "key26": "3Z6UuBX6uzK3i4UbqkpPfbrSPYFRnupmBN3AnAPZwfm5pika41oaeQXsaxgEEhtR1qmRVHyES3MKjeGfrPgFJNKj",
  "key27": "4QpV7wXy7FLLirof4LHtGHveitHHJcmUmGawcyhCVgpUNndSH5bCwhdL72igw5jRhwHHxo2NqPcawU4XErnRUh5o",
  "key28": "3kZ2dP6BqeEwhj7vFzMo8x3qkS1DfhDZCZY7aw4HrdQZkQNp84Qb1ibW9fQjgBvtrQEueLV9C1i9fP6eWCwZortk",
  "key29": "ozxyLFDVbGUp2E4tKHbC4E4ov25HMBQWbcMSbaGLTyrsR4V7xQLjCFjD3FGHVsqaoLkLViyB6W7hwaHQCnkMvYp",
  "key30": "673YQheLrHknCiMKNEg7mbYdJWy9dHeQKpBZyk8Jtir7rZho6FbrQqC7JvbSDeEfi9yL6FUThA6V8gE7PpzUki1Q",
  "key31": "4ANT8pfGs92Sq7Knm5Aqqsi7LhQfX7DVJ9YQdtF5wpCZzpaCXme5aYjZjg1nsi65Pfz3D9pjs9VKC19SkuW8dK6M",
  "key32": "5BpKtKCfQpkHD1gYSAD4sR4PqmWgQ4MtGYMbo4CX7JF3Lu9v4MGoJksGzUb3q4xwt8dwzf4yAin8xzNDVaWNbzVT",
  "key33": "3eRYrakQXKnUb8RSvaPbyuTczxK96KSLtTMCvYneSXrVZMTUfWX4rVSiyKxpG7k1RVRNqNai9Jm2siepVvjKg24E",
  "key34": "Acx5g28S4ruUvA7omPhuqUckd7izXjB7yr3Ua2SeurGGWJu2SJ4QRF9zpUTnPYTiCcRxgvTpVFCstL7SCfZXfux",
  "key35": "JfrS1gMtkHphePtNDwyArJMAmozbde4P5s4tWVetGCJFE1pHxnaoUT5rDXN9hNtPZnGBm7FvYDPZRbvSitW5HCX",
  "key36": "4pgLkyhCbgh6XFGCvvnxvfGn6wZbJWbyfGzWTA9MgbsiVLT5wSDKWDKmq8Wbur6e8hn66NrqFkZGcQqPUYm5EmoM"
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
