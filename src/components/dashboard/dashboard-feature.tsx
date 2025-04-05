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
    "4Ee7VD3BUQWErkmPQcyZACq4gjyFHx4DckxRH4TjwTn3vRhNw8gDxQcckHVwnxs6titLGhnbpkTnQd2XK665jkGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P3bJ5LzMycgAYDUcffTX2pGvXZsWsQYGucyEhtqivZqKqsQKuxFZdGmJeV1jj5r7aTF7SHgPP47k6Uwp3M3iubk",
  "key1": "5xo8YWxdU9QDpYnzVE1TBwuBG46tP3cmGbrzELuwYMm6ZGjenEn8Gg571EJtxh5Zzun5etfMN4Y7pw2mPpM8Ly7s",
  "key2": "5GudY4JcD9Ux1Wh1m9gPnTijGySuS8chZintDpmaT7KTF6wmW8s28D4vNfkkXXP4o2cHW1wsmGaU84k2FGsPjqg4",
  "key3": "p6S1AaUr9c7SRmdcVonTDUQe76Pmio9LMQbj9Q2uFE6PivR8HZbDe5Ftyz2z7JBFd9NEAqbZ3SiNG6Q3cMKZ83h",
  "key4": "2zJVz5o6fnsTCkGnzX9HQeFq5K5cebFNirxGeEGYuS3Nc8ufdt9HrSFf9p4gWxqMRdXex9aaGuP4AeNPCuCmvBhx",
  "key5": "28Dw2UTF2xr4SmhgoN6vzwdKdiQnushnaxS5n21GdB14Z47sP6AZTRMxR42BS1xvAYpc35dcC9Wms1Qynrp2CDHm",
  "key6": "348oLjcqvAM38FWAGGqh76641pktttPbyVkob6LubYH2Pm491ixgkqrcS9kVsD8YtGJSyJsJT6xFE19CTqpVX38Z",
  "key7": "4MvSaxpXtfXLeRqfeK55Rcjx4vPH8dweUH4sKTQ1k2pFrUU9ZE9KbsUjc22C8tAevBf6WwcGE72A3UXkyH61NKYo",
  "key8": "RKaBk4cbgU1WycvRvic2fUxKMUMTJcYaeJDvfQ7U95y8HhZdBfVEy7DaHJvw4xRcYDrq4deFvDJAQ3TUeVkSow8",
  "key9": "24YAstHNzdxQvFZ5Uy1aH6ZJMFu5y86Zp7vGBEG2aj9koj1hYWPiKU1iKGiwrfFWJPQyC4YLgDjwTvUNn8fVuzXY",
  "key10": "czRjd8ZJwm4AutByJxut6cQodAAHQpPvkM7r5knEFZuvWrXMh56m7RosyLVVGWAgJ9Nqh1JfEPfJ95YoGJeUe1f",
  "key11": "3xxvYmMfDYMF4ieQx9Lvfm6mZWLRdgwPBRDSYAptqqMCHAhxN9276AXPryKLNY5SJfmCrXK3nysTLwzbwcn1kRdM",
  "key12": "2Q46kH5Wx8VJnV5j5BcmJnfJPFAc5Goroc8dZLGVeTNqmcLjXyNm1TuBpJxWL1CvgiGzfKGw99bmpqRqUd3o8b83",
  "key13": "2cUFqKJrSpqZJrRHVfi8TNeGFsmLbByZ7v1CU4AbBdykEdyZ4vXYpLK4Vr1Xwr4zexPsbxDHxK4VEZ5B4udCmKV4",
  "key14": "2TuFmWi4zgrwJUSa1n7paRUX93W5QHuQWBsX1DBxkdetr2rPbnmgAjj8uP4taBetg8o4eYKUDrFhfqsP1aBHAceo",
  "key15": "24RM7kgsLhrZWDS3tPicPX4KQBHcRi4Ng9hEMKQ6NgHnfsWqDqPHyUTDDXXdtFXRxvGXhRSQGXbhNLrhs3BqaQ7j",
  "key16": "3NQLutiBeeaEoy8NUQisU3V7sewFtw5cCVVtBu9pf48ZhQm716gmPXkAtVZYHSNF9M166NqbbH5KZFUL7gvJfoW6",
  "key17": "3iJuqLdJgAgeoFozeqABKctqxmK1WUFUijhjTWTVWLZ9uJy2Pw3txDvWxsCAP9mjjcfjUqoTd5vgwkF7274eMUme",
  "key18": "363WRmsyvEGKedeKwXRDDPQkNuWXdCt43osJmnEzeSLeGYakk3e97LLGoWdjwkoNpyABSeXK3jQgeeghTEH4CxWX",
  "key19": "26jabDqBNRpFBqG9xABuFs8fXhPy3HrGKD8yeM9ctKmnctGbHzeEW45j2u5bABcNFz4pc73xisoMzFimGmD3CmGK",
  "key20": "5QZ25H6oELgkqWX4syHVpU5ngZpCBhNgrafpzdCKZgoJSSWG6bSxsd5S8v5ckoUNTXrqr6d5vJFsxfoLcHJYCiMD",
  "key21": "3E7T1nvhzHgYMvqkKoECwyRENHKtkYWM29szVWPbPMiCQAgTPdntQNrDRHV5bm1CqHoJbZQfYumv9VMy5mCMKEDo",
  "key22": "3uNjMZcT3MchN78aPu54wRqMoYnxZYWdjHbEVnJukdECASHRbdCqmiHBCB2qRAo36t3fqePRXPMXNv4spcf9gkYC",
  "key23": "2mTu6WmiWiFP1Nw23wWYebBwDFTLAborpabmLMkMP25Pz2LrkUMcckzHozUynzURSeq3i8ByaPQxQg3Tsbta3ie",
  "key24": "2ep6F7RxtboLAjaSxcx1SgFNTqWeMTaA58sJRuHTSWeY637fpxAQ3QXJsk3yPSRk7scH5asLDo6nxYNHTpsU3w53",
  "key25": "2x7SW2RfhsXoL3ShfNPNUKwAfYSDt6w5Wv5wbco4hKSsFXoQmPerBFSGya2LBs9CPyjCETRJpxpsuLjyichMs2yV",
  "key26": "45cXYFLBpVj5cqcuBtseH7VBKASjvb6T73Pd8FFMNX85NfNwz1S2f1nTBueuoGRHE1uVbAhhB3XJniBRrYhVAmTx",
  "key27": "23pu9Xij1M66ytT7Qpe7854M6kohYtFut1YYv49XvaV7piUtfHfjyy6DebdQ7cdYrm49FL2spszjXsyhzLDxq91E",
  "key28": "x9TWKyVUuJr8vTiVhxRKzPXpQ36bP7jKGoMjXtvpNRTtyRSSvnzpv8VSbecTJU3wUMFJFoToXdTEfeYZ7koNebs",
  "key29": "63vzd6YKtybJHJX6zrR7ZYL4dduMLMW458URMvFJwhCZiT56c9dGozTSpuKA4eboUmPQAsTZJuCoCyUnxVApk543",
  "key30": "3MG1rNX64NH52rMUnagp3B4ahYTgVF5vp9Bkc41nn5onfvcUKKMoqZGqFa5bFwmA5n1r1TUzAxrsKFgSVj1uJBte",
  "key31": "4muDjcBtmLUXvziMU3eiD2NR7RUF5b61bzDDdMA3CLdQraygfoUqcdKTtnHJvivvZAyMGFfpVDXk36xP8KxzLKqW",
  "key32": "3DZnLyNKvZcxMm3butJKbKQMXf3hLRE6fV5r8wRa4UPKWmTSyfxTSUuQ6XHNv7Sg9KC6B129AQDm66ZWLhzkRDYQ",
  "key33": "2piY87Xk9csBSfGdihSCv9cdrbM12wQ6gnKvdeG9nygT55vkx45xZzFuuiffsjFa1iCfnUiJYRCjMCFa2ykituC1",
  "key34": "2s96wu3kW7fpeu1Xiym6FnPN1JAMurCCW834REefH3jwaUvxa5nsA6KhtmVr2ksEPHWUpsPHFWeVnVVCVirkUZtL",
  "key35": "W97fW9iQoUSzmnCAhR666yUbErPHsBBb6D2p51kQ5T2CqhoUKwiJ5GcYEj6bUjAVLs8bSbHnN7wyTX3B8JHqArZ",
  "key36": "4a9EFyFxfbrxUo5MLSoVBSFz54v6tGZBuxHmbPn8PrvPiTboPra9KAqfJNRn6jozoXzmEZvTuNwHikU9e7j8kY8S",
  "key37": "3cH9cDWWeBnrjuYkFnRwupG5vBE9Bn3MXgMjyA7c7GLfxM2SQ4Qm6LRb9ta7oEmdTbjjx2136GRfpNJSFQAz9p3x",
  "key38": "24W7uHUFUjT1uPPxrNaAzVPAy3EyRoH7JsFbp2KcDaeYXh2DSt4zFn7xvxQJLL5f1DnC75a4XweNnWjEza993K5B",
  "key39": "2pkZrMgeiTA1jJEDkmchU2pcawUtsrBfFUJfEnjTP6qAehAwiY6XKKKArcByjsfMh9vGfCPidSdJMY2HNYgcQgAp",
  "key40": "4wTRoYmiUrH7T9srhrTz8Jnvjhhyxd9eB2bbNfUUjRw7jGyzkDy2L5bsV5Xf6NAW9sEV75eiZoqPtve1mLMZUY5w",
  "key41": "3B7JfQthA3o8e8cHnmhi47czjX262BTgEPB3bjbSFdJTamf6Xdf5888hYnBHv9H9sZnj7kRhbHYCSK9vkpT6Cfca",
  "key42": "416ntJu3KESHUttA47rdRvcMtCoTcBXQCPX7HUXLU9dENpQ8yTQnt1E8vYS6eUAoqz6PLJCsHKCc87JAjxUBb5Xd",
  "key43": "2cpV6afxa13qXUm8H8intyncykKJzYBD43ohGgsRcTbdLR5jGBR5rLzJ9pihxGx1hzs7GkcrJJVBGpyebKXj7yQc",
  "key44": "3n6NFwFEYqGaAxnkFJrJNgeAgSyZPpz8UbL43aEzfsMSXF9fFGRZozUZwVt3N4tEicAN2uBynFDwUFXnjnxDRB5B",
  "key45": "5NKSSmX1E9LBhg2MiSRxk1gqptuH9U1nHu9vVXJ9kMmntttrLdcb3ta9RveWSeoKa678R2xm1E45Uj4huGg3ihhc",
  "key46": "pYjMpCE83PKAoYPuTDiE5cMZqh5BiW86NqSU6CJY7P112XJyvbzVwTAmjayk57qS4qDTCEny2AyV2jJkSqN8VYT"
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
