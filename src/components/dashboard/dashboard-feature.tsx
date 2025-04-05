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
    "5w7PuiSeLdox6PmRJGnW9XLPBVwNfWaJuSrUdA1PH6TNSgrEuLce3pKCvnMQjZpaf9HjT1gYpk4UwKEfsXkptJSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rSPchLMmZSYe3X5TVj6WGd1XCcCuesgqAx4SJLhh4dEeKLQdCWUnTaBo54p1uVJvFZNYzxNKFvksxvh79cL8Ejf",
  "key1": "2w5ErkNpGn3qGTxPgvLSX1dfTfvWqtFRKyfxVCYGipiN3iDABChHu4uC1W4s7bvCn5LAKuRZqPdAyuGU2xTQ4ZPw",
  "key2": "2PZ72eSVLWQC7DrpKvwx4jJYJzfJ5AFCHXJ4u1MvQcYikYWQamdXLUZXTBKMfKR7HzgoJStBndkwWZSsWkNbYFSK",
  "key3": "53kbJWHfYzGwuMusxNC9RcwnnMyRsWzwFTJ2kTb7RnkP3E65i6NqWBKnFypqooLYYUFnU4XfEBoVw1jcNLTtwThF",
  "key4": "nZEjQ2Hp6D6aL5SKqnDYjogYvtGC36KPVUpvT42X6fFoeTWYZYnmzeHHbDqSwEJFQRQuNURKq1fvd332Cf52Ayw",
  "key5": "3v88Y2iQUcGyvEAMrDuBAvtWx6hjUEp3cY52s8XpoipqVJX11AsWgFqpP6Tzq82sN6iUXHeswafnLxX3xLkvbZPB",
  "key6": "3coBdwKHQ7fKM3eSEDkr7QhgzAVYJcswPqqo9jQ8qaa965KfKXr1pYifGfnKgpBWiJNnPUC2URmo2FYzEWW173UA",
  "key7": "2oCMRoeemmeQSCfxo6qvEYHTwYqWd2dJPbd8izQ8u7i9q8MTKE4Zh8eJEsz4y5eQxn4UeuASFUhaKJ5MGEtMP2jZ",
  "key8": "LhBfZjrS1sDAKf7YxRHmxyBSjiUngCD3YXvUo4z6s5CWrDUtYK2hbn4SrxrewzrZyqQ9DgWtqcmiXW7nCfBVeqH",
  "key9": "5Ff2Jxo18GbfdaECyxNHEiwJfW7mhgVzt6hvFn37CGiH3w6VnNzfrzR1KumdiD4qmxgZ9aomyTTqSuyVpmmQrnWe",
  "key10": "2xdezZFNAu6yDAw8v8977UTwSypRDT6wR8RaG1Yhda6egMYaWEqCsekm1iaxGPSjehZhxWL89CiQS4FZqwDBcoo1",
  "key11": "XRfVUkftDvWpwshPdc9TxhGoKmcsqhJDXeTDMZ6GPRBT825QcvrHVQn8xhtp7YfcYPsUGs6hzxJJLYWZP1UhtV5",
  "key12": "4Q7ZZ5ai9E18PezHQrC4ibThohkXdxHn9x2SKjAZKz1FfVZVPBpzJdb2yuMMSGyVkDyEsrTVd83mZoyE7uEQKgaa",
  "key13": "49FpZ7KMkWTTvGD83RiucTHucP9SnzWNMjX8XyVV1u9YKyb1XpaUTh98N9zvTqdtfqizrMcCwJb9XuymZmcd2nHS",
  "key14": "66pwuwJRXVEs6zaTCXDAgF6zUsR1JwCx5hk5cZJs53dMxDA58FsthDYXawU2TyWniuphCay7ydzgiQWGaa9RSeNB",
  "key15": "58jk9SsxyzJ6r3iQb1QBPzB2PEmY8Zu9fyxs2ooEwBYEUzk7agwHEoFhD75iv4pRwZrPcz4M1uaow8aDJpfeSQAL",
  "key16": "4EzRMM6PCxQnUFHavjfJp98bfYFz6AsN3TTNecUFUvNccZrvjzWKZ92ekG4EbhUnCt9p7inoiYAHt97fFwtQbh4",
  "key17": "3yAdVz6WsnZxjGgR7PtYYAeaYEs7aRRGb2yFUtUV9Fuz5exPNMSzZGBdRDm25JErbVZHRQRNZhUiQ4nphLJ2Ka8L",
  "key18": "3TKiNCFg4MH2n46Z8MgmACapbg61gZm8UKPXVPyyNqnf5uTuUVoNeTkS4MT7GxuAZuLSfk2buizcTKrLHJZykFde",
  "key19": "5yvupoMfWEFJtMMJ69DYoxdqeXjWQVn7Kv7Pwgegi69KVTqS3vTzEW8DMJ6YyH4z6Wa8QzYzJCUz5ubc24v4fjjs",
  "key20": "2LobDhXN6tRJqnx9N8MRxodJCtxMHWiQGGpxcbqy1i7B5nkeVP6FxrxdUpqo9XZfG3zPZpiT78TLSuDDTi2yAKaq",
  "key21": "4knJVRZ8qpc12tk8JmeqPmmGC3D5LcHyBEC1YG7r8McyfH66NJiEuoMRXWzzqNcKJtCTeY4Q8sq3rd5vJrMdv1pX",
  "key22": "5DSbzPeCYomNERYjfChpJLu8XhFjKW7hpEoTq2oAjV7kjaEYZh61ZpvXMnfs4QhUvke7CjVdkpvRBUBAAB2W3cv2",
  "key23": "2WuHUvodP8EjR8vspVRKAFxupEyUXTkuopgpGeVtyQDLCMWXW351Wmr41sGp7Q32UAm1fFvcHDGPNz14csWB6EyN",
  "key24": "4g4Pe184eXXtZPWi9Kao4uatQ7XswRoJxmgNbp1Hxm21mbyteuB18u62joarq7ipD1cjuBvxf3RsTDhX2Aud7LNX",
  "key25": "2Mzt5tJZaC4f6erTHYzs1uhtHESBiPyByesdPCXrmFd2DbJmr28zQf126qtG9T84yn5uimwKjVLXEoG5WxR5kAyX",
  "key26": "3cuJERnbE5qEuoCkEt1fRoaga7Zxfbkcf5aqtcL12PqUAtBJY1MUF4SvJ4KEeQfm8DewohLaX1K2FsC59M6ubcWW",
  "key27": "2YbUQxjNiMieqzLkh3sZxP2D1vAy5uf1g157sBWK2g5ppBVdzJXytemzDVVs6Jskvy2nC3oMVADeRtcgpBxBZqgz",
  "key28": "5SYCXpcsUNqv4R5muw9g7XtnuZKSxvGbWTuawNUV2AuNrzCYMif4kaKKdZgGXhLvoCibZEQTTUuvw8NXo8mvnxkR",
  "key29": "VMWUUijayBdDua3rL3fHHWSwaEEUBL94MQDuptuaG1CAfzpJQ9Sgwwi1cmrivfj9e2t7AhEeZr9qeLH9FPdU9No",
  "key30": "4CrY1UaNmwfmzzByeYKcCCcMM8HUGu68w1iMT761fH5YbdqNbQHnv3LzV1H2ycKkJK7qKp9RZ8r5JpEKRKGY9nPc",
  "key31": "3wv2oVUu81qKN9bCJLh6dPKm15mqFKCq9MnWvoVnYG9pemfUTszp5qHQefaV1dZpPa2EjUaSdcdbRkfANKftr3Qa",
  "key32": "5mqoL334MB4ANscyN3DRyjQTux1EPjntgrdvZ6yXWuFdejs6hQkkkYZSy7yznTFgaTCwcgtH8cVZwcwSP836gzc7",
  "key33": "47bbixrofLMFFUA3Ewp4Y3tjNjLNEvdyBiH9MHkRQUtynCKKE9sh3PvbR427pnk7yCrAWjUW69nRkUhMZ3q6TSNs",
  "key34": "XPms9t6VjhVNMCz6zpTfdwpNqzXHmMLD4UFCxddouxPCmhQ73pkjgyFMnn3CrA7Pyi4CBEuS9t8nAuv7LEbA9kL",
  "key35": "5fgPs41cBLezmSym5bePn3BRdFUeDkkXSRfvkqK1MUW43PpBAncYiRPdPgKFUWsBDgogJuTzbJ3T35877pE5ysN9",
  "key36": "5qGBQAGwQUKVLbrNNwC6gSfwYjPKrRPoFx79pWrh5rhLefRuQbwKNfkfxKMkjPPzaW9wgCUpk4P5nqvJL7XSh4Un",
  "key37": "3BTfYtPT5b5CP2BucrgAU2B76ErPWcZ1GVJE8SwfVYNDPM6w33TudvPkGnaWLR612NHuPX7YXYeFbPhiet68QaUd",
  "key38": "5AiWpGFc89LQTmJ99mq6SpbVQFXEYpfeKCqFhhAJ5HcSTFsJqcm3gPSK9d2S1NA3geK7UVAwggJJvBTKqJbMR5cf",
  "key39": "44E49DbaH9tGEXDZ9usTUWgU53mCaVnyLHw5DeH3X3QjbzmRNGzS38SGJycUU69jW8WFojrGJBujuU1qu46PUUe4",
  "key40": "5Ym8zG7LtHSyLA3B231QmtDMykcg6mjD39oum4BMJNbzu1u14YzoUxjerAX6dHiaLgTDHHAzgMFG5TxSPbpPSBVk",
  "key41": "48Xg9y9bEYtcM4Zhd93f7xc68LGd5Q697HBfainiNs2GKfP2imGWGPmUBbdAfovrXxLarBim7ZUawq9J8mVvTED8"
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
