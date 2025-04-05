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
    "38CRapiE16PcPy8APUCa89moZVPpQHL7Ep9JQ5kLjG3zvnLymQa8Huh4fu5j5o5BH6k8GC79T3uLZ8sAkzeevH6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AWJYJskedosLiokv8vtDQqZpNdVmGPQdRzv6TkiRYYyGDbgrPw9eC8N9iuqYKPHm1EvYhUSHsaDzBT4KWx9RqyU",
  "key1": "53RZwwxcn2F7BotbN2RA5r5cKbAck5fyeSNrYBAqL8uN1H8FRSsjjVRt3r2PDcwmfPPS2G3pabG3jj62K8bJjkhd",
  "key2": "4Gus9tXgVFmJMFCrJccm4dqmjdxUDbQWfxUvMBnAoAVDLj5eYkm9YEciJA2tiBUDkP2Vn6nqkS5ysmwV5n2H4QDa",
  "key3": "9817UWY2Mv5Z6VXHMxEYQKvfnbyqrhKGh6VATy3RR9my7oTn5wiDmqRkwNPFKusUbR7XuNPEHEstX7RmX3MSKvr",
  "key4": "2gAe6huAmLcVs2miKmiWxRYbDXJnPkdXBx5ekh7MwxMNfM7hNcS8iDmTeWSHzfw5ioLd75Fz3YyZEbueRqiQUbRQ",
  "key5": "39wn4tFttZUE1bspBc64D4MwhWSauNURmqyXPiGCnswe7GSGpmCohCMBadMusDEjQp2q6ehGpMWnceCyArnKN8Qa",
  "key6": "53XU3WuN8SQvMr8Lf9NLFLxnfs7DmQHM8JujWg8VfJuVtF5rr8sS65wwyXU9jQSydxJ3EAWzkNpJEw27EiJpjJ9Y",
  "key7": "4tRMeVTyMi9CECuhNstZrUMbNk9A8pJvuoqfV3QX84NQ5eqmtjekqAdUBSck6tCxgDh6p1mkHJNpR2co8Kq7bkpY",
  "key8": "8sdSNcqqNAZSRiiP51UrDtcRN4byQCAHZRhKyox7dC6kfuxtqKtXJ3kwm3opnSVhbrB1wrh9hr22XTYALQJaiG9",
  "key9": "3q9SJ2h31MmXWC1GFN2LDF3JWeETG8VsPzKDgQFuAG2x8sJ6YkGQar1okvS2o38yFhB9R6JqwHVPwz1oA5Mi38we",
  "key10": "4toKN4QGrdhhAQMC6ytiYqdBpsuQifeu3kcDSWJyiUC4FSfEMsCB9mfC9aywGtyU78Vp6wVQWFE54RiJRFxBgy9H",
  "key11": "5bTnV4A8rhMVtpLorVRzQwz2T7afDEymFxsHJV1XEMBx3NmWoTkmVMUc7PsYLvo6rQ5tVAhf4qztW5e8pEPTCrq",
  "key12": "5DbrqrZzuSErNb6GU9s4DKnzvH5SoU1Sd5pjchc9kLRnnuFHxKVEYJvobE73zPYyhrBxu4tVYMyyyp6cWhzacyuT",
  "key13": "3Y43fb7jXAHQhMLsvDz3KUTyeejSZK9VFfhowydEZvmw5rwMboh5Rdpt8nMLA5trCBCW7JpodjBFkn5XX8DuAhXr",
  "key14": "3TFk81ffwUNMShkUpEcEtSo4fKSEqtGmgNycBPi7errZhwHEaHx8H3ryfBo97DZdNfe14cePFtLK8t1zxTJXxE9o",
  "key15": "61rNjyJPTaC85j6oC2q2NdV1tQ4oAt4kw5WqeDBadebVGWStAN5xifCnSXp2XzXX59fDqkSuNRWHo8ptGPieRyaB",
  "key16": "5iDeW8CGpogA4jBFNzZd7aiC4u2yA7iTAzDvfLyxoejyecKteAnRs2rtMeFC4749W6G32MQWBcxH7rnhwfutJBzt",
  "key17": "AnBSuMGpCwRNGHZSfxCCT9RT1ymP4mrB63vpQtNcFSw1tqEXzaatZ3rKp8th1bxJ13k4AeQRdWKF8tGALbeqQhd",
  "key18": "4f6g5XFRLhiFm18ADhMtqBbfAUvq6ScjN9gMdnv1k2PsaR1T6fET5KH6ug4fG8C4wP7iJDkhhS35MKsppmVnfxGA",
  "key19": "4jmZizzMUsmndyS96bk1XzpjFzhdtzD6yznkCCh4ct3gozCroWRXJFyYreMFhjamajESQmT3uF5xwrZRysNxJs9A",
  "key20": "aDz5cUJEy7fdVtqhLaA7BwQUri2jZwCZSdSbB5zUX9R8rEyWNapqj5P6SdevwRgkkNExNEmi7nwY452Ze8tBWa3",
  "key21": "3EFko5qhDtcmXoPNaoUxQxtHj43QN1MynTetEoCXvKKswXpr72gNsc5atvjYhA7sdT8MNv1msNoDgoWwr4f5t2kA",
  "key22": "5KeVhjtTuwZfSJhnRR1yfbtGxwFnPED3Ni73anRpdJeQGyWGuPvLHJrqpkFwX9narWgiA185EvmD2bHMNXjb3EGM",
  "key23": "3hz3RHKtCKRaBXXpS5vUBQV8QtPHFw1uEQo7985yke5CUJTSTxtrqtxWFFvRkGoyYQXcDZKwabPvvLB79jUWP9Qp",
  "key24": "3vDngGHkN4V7c18waiUmDe3f7yy3229RgFprBBiyHeRUmY2w4u1CqdZ2djApwUgVrnvhA6tnXZsSA6EhSr8U92NJ",
  "key25": "oLk6uFqhUa1LfS19oynC2jY6zf5HC6F4iems2EBStmBcF7Vjssa3rFYAoviMRTCXKjJRMwfJ9dN66kzY6o3Uada",
  "key26": "YGMCLZBuWcmTmWi1RbTtRdagBXMZac9XUbwYbZarzj5Y1QuDi1XVdQfKUuPZzkUKJjZ8zz4J5vhiWyjjxNr3ToL",
  "key27": "45VWzHqLbRcNzC41ToHVywsSiyja9hqHowic7FpnNWAwewjb5bdj2RU8xpmnEHL4Fgf5potgqf34oEP27qdT1GrA",
  "key28": "32guV3rHtUokzf4HMVtQ9cyptxX9ehDkQaEB7Z9eCybBFmFaQrc5QtJF9WX3n4D3H3hsMkUDosz5LSZ4oFxfHymo",
  "key29": "5tGqLTeWYFbib6BGenxuM6RxrY8XMzqGMhNsDDdNfyoMwoXZc1LaMmDcHDUYf4DZtv72dpNvpq9RhA4jykcekDE9",
  "key30": "c4nZNG2hNYJkNdGzhKgerzqbTcdqkXmuKpVyELNV34bH5GNxHNpK4xBN16GwyhVweKsR2cQkhGyE8K7obWeiw8e",
  "key31": "2BCuvSWuZ5LZxamZAZN7ojumwaQKLWbtnsKGkmAinm34w8WVCEHYBSfmQ3FrmmiYimMJEwf9c4ipLj5ptysTF6dm",
  "key32": "4s6SDbYhe9aVHjD9GvytEh3fA6JNzLYu9P5oSmSeyinfPjUw2P3U7KsCeLrVskfQCPnqLoxAf9TU3nZCBjgFSup9",
  "key33": "2GVkzggRtEqHSK9F35Q17TBy27hnaQHVYkmn7YTq3HSc8EzHtZf1FyUksteBhuYVgPvxuHhdFqyq29aYEQbUGWdN",
  "key34": "4QYMiBhePiXT1es9DyWNJgi6kLh55qXSuqFSZ5vxh5ucUWZwVZaATgub8etf33SWBd14bLe8kybFdWQ51rmup9RX",
  "key35": "VE4TGGpGEkRmmUZ19AC9aPKa3m3czcezkadBYb8NdbykD1B9oD3Ld47wTZCL697Afn1dM8zoVPo6Z4GCwPJe8Ef",
  "key36": "2wjYPt1zzq79gLKKaZq45qKY5STmAXXtRF5EV1oZNKRYWtqx3kUsVU5wDkzY7sTg3YVuMZtnZ4jPAXLsNpDTzeCs",
  "key37": "4GN36JBVVXjTCkHZZDV8ErLySVwBu488BTAJvAdhQD87pkUqpFoDHLgA8xbz2kSTGYZrEe1evMnzuban5GucU6gU",
  "key38": "3x1GbTjDtSGGGiDDt6U9HwgJ6p74x2A3FhKLfKvecGVG7NqXD9Hsbpd2QK4q6odLWLXtnynL31Xky9fwTLjbfX6f",
  "key39": "qEJAgvmgigmT3TcytWPRL56FikUPo8PYmeEbhQboLQMqbnAZAm4FkPz8pkuG5uMAko126Ca2684847kBZDbttkt",
  "key40": "43UJJszX61qgdAiECm1vavVvyhgJ16fkFbSzQfHartgR9w1FGv679EfkLoeoJodSZe8fxTRYFCrTzwQEvddoy6DE",
  "key41": "5CTjEX2K8EogjCeKHfHtSGY1AE2X1wwMMeNng859CSZgwAjqcoKpmPYY1Sn3V9FnG7MUR8imPkAtJRafmAVx9B5r",
  "key42": "3BoTPwUk5N3i4n1bvkpwerPaSXfggPQnJBFFHoSwL6MimhRtbkiWdkMdkPyYDBmydxETR95pXPPLdXghQWGHKNQN",
  "key43": "5qidcdpn1JZ7CwL5C2x6RATxEYnEhtvGshCd6NHVrgi2iGDgPz1GqzGtkZHQ86eEH1U1aVafrA2gJofVyk6TKB5c",
  "key44": "5vHrqWmBTMNaXNNTHxoszberW4MabkoasRY5vwQdZV5rzyjrppJBkG9jP87eGA8n2vhZpwiMAinrtuqsSDEaBGTe",
  "key45": "22mrrfrcuDwUPXMkVK5vkRgp4StTiUN4oSgf95niEv8gqtq85CHfVZwBh6LRQqS8pa5GJLnPjorgaWuX6ivACWRF"
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
