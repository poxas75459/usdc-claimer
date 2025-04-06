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
    "46YeHCuLpc3prdzth6DQjFrrpxBnCnRaJttHYRjRFWHUvc9wQma7aEUUPC14UYFkR7ktgdMpaF9XKDj2wcrGiKDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZkQZ5qihHHjWaHe5hzxfwgEYM2t4X7HshoRBfRGZHV6xi4Ce5cWzAR4A77S6sbgKyuR2PoMNHhGRTMDFU5VuiJU",
  "key1": "2y1XZhmMyGixNPveNmyT3VJ4mqZKjAZpXUUnKpsmHa9oK7YcSpDbSKhZCgLbppmWa2wUbDLJczL2LEty9qVCztdb",
  "key2": "j4tZACBg7VmK8BC5Qq4ouFnGy7xC2GWcL2QPHzDymSntv4TV6gVP2K5cKNrSpFESNz5qQcQLiQyuMKB4hMsVrMt",
  "key3": "4RWmvfUdadbRj6XXBn8o3JyvQwxNxFexiDfJ3q8YN5VJAhXR5mZimXz9bhTngywFTdC8F4Q4jxpMBCnSA4XpvC7s",
  "key4": "5ZPAXyAufEs9kahgiNSV7kyaPmbApiyqwFtNJ9jkVaWvY5eErtfqrZf3rzU6ueu56DgCZjB3grixEEuVJzbdPe6n",
  "key5": "3SxEruj1EgZ8jLhSc9fnP2qmggZnU7XoVu94HuL4D3Aa3dd1q97dyPk4Hd9NLxadeHTw5KPPBmKFhRbkv3iB4XzE",
  "key6": "38PCSgvE8Sx2SZcH71K8XRjRkLiMWReBGSGGoV4YapHffF6nLJYg4uoDCGmgDu6raASPccW3m9MPCmaZ4yKXrZXt",
  "key7": "nUpgbtQVjHbqKKFs2NgW9T4AiZjXeBX9emriBAWVB7KYzQAY6Br6EAeT2mtVXbqKhnB3gL4Xg6A58Q8fTdnYbnr",
  "key8": "3FQ8RZWPedYV2QpGts2KnPJDJd1TWnBmHhnJL9mcvP92NFwawqZb82LVQZ2nCLG6CBgwR6FnAiGJcHnceh9nVXUx",
  "key9": "3cTNrqHU8RF6kdNJ7Di1jfxoQFUqaMfaAVScgf4Q8c5mgAS3GsuT7yGxUunCJqfJDk9kY7MYLx4mWkEypB4hAuer",
  "key10": "5tBDHrmZDKoUrrXBNoruyCeUnvqBYRwfr31ENqDr5b9fmMxRmkc59sbMUtLsKe4en6byn2Rcxc4TzdjPzSTD3QW1",
  "key11": "4CR1hpwFjJurym4jwBdZPsVS7SgAY9ue8BaQmv7aTFv1FBkrEDkRTAY38hrQzhrGwmVexB69TDW1haTNjJfEyA21",
  "key12": "3DGpvKrmcd79y5TxGNZeEcKpw1hk91SFLAkVjedDnxH9gUsC1RbsAVTqjwGShZrwsTM4BkH4ua49bxCwArqUWHmN",
  "key13": "2Lv72Du8PLQZhQMKVmXBYHb9F1GF93rXufgbCJpadaEvcn63CnmL5dW1YjPesU8MjDMTwMPpbZKKXUpNQddTW1Mw",
  "key14": "5TB8gKTdxpADePWDu1xf796ZnFvFYBpQQHMbVxK5xncA6w2FPffEXPdABvY4bSWXUESQ1uQyRhNwFdowrWoko71P",
  "key15": "YrgoHXCMLgSMd7pAhWnW2fhjM66dRz89wruvMr8uSpiqgnVf4PvvFLjGzbQc5cnSHDD3QQA8KnqHCaW2NYCwPPt",
  "key16": "4KrzyWuJNemBvZd7Cu2Wk23FvLGBgYxHsRcYt9wSDM4w6NJjPQ2HhbYNPdvPcKiBFXvek9wLtVEDFT7v4PTF9xYg",
  "key17": "5kHWFDfxbYbPhP6efL5FFRR5UKcGotsHTX9dNRZr3em3mDG7ecc5w74NBaZW58UF6gMKLFfb5azvr3AmKZzueKsc",
  "key18": "3No5dCJ2yDUMgHa1F4R8AjHUDdaP6R816hHVVfvTmJ89VUrG1xLzpYo7SfvA4cfAYXeWcUWiFo8myWrWHapgbjaz",
  "key19": "CyTg4PtYoVVKY5CpZaxUV1AMf8YikaFFKBYDxVi7gUbd1UkW3r5ALU4YtrLRrzvBujVvtGyWFCKnaTb2NvwyyAP",
  "key20": "4YdbetmmMYLb71G4paHjCXBzWHUtppLXzdZs725ibRUh98bYSJzDPutRBzyTa3YHs49hX8BW79gKCiLQWKsk4wSY",
  "key21": "57Kmpbwm6gCJAEqyk4Sevp9uG4foZA8fXB53nEfCmYChKEoWmvDLEtEZXv1NkYZpzivUAWqw5z3Ps3thoA3RRkNz",
  "key22": "4PjJhuC28mfeuspAMqXXU4PFDWiDViDeAQoSUVv5aqH6Qx19BmUDwtBMfM96UvdAGhku5jeKWHSA7Zz5TMfphoU8",
  "key23": "rMo2WBFECk8XYd8UVQMU5rm3XiJrzkqSynHzpDVyLAR8q2eiVGaTeqYRZxMqyQQjnBEnUg4mQuQ8fDKGq72fwuB",
  "key24": "P8S364Fb9K1LU8dv8GmChAQ7DnnBUaVFiMiJ7iCc7kA2d5ovYjhwkUfXJBnvLbNZy41twTWtjUySgLU1LHtmbq6",
  "key25": "nKNbbAJLfUXePX3Ft8vPdPgknoqGgeRvbbGMCmbrzzqdkxMmjczPrrPWzrHqUKLXfnuQ129etqDqgxWZtVASeAr",
  "key26": "59aHom6xJ7Uaw1rPC51QMtpe47Njg85hRwpJS6UZwpWK8ZDBaH5g9TQDMaairHxmAaVui7iPTYRBYeUxAXa7UuHB",
  "key27": "K3M4ELjJdkEnGpkpxHzEVNsvLKyKKZaNsRqWAwagnnJsyB3nQsBPp2mAgijhHxR2swrtxnMLRPr8W3sFYAhtj2U",
  "key28": "4FNwhFtxGj4FqbhjcXS9TvGLgH2rVgZawtv7QrZQraar5imummuZVJWAFKaN7YtQDhkHwoUPXuCBjCXkeLzzuiAg",
  "key29": "5WkVgGJneVQhXAq8DozZdyFLc1cmrqpwiDACQG3qgnh56WyMfQBC4rsz5A75KZL5MFBznWLHZeodKTk75CDnUCt7",
  "key30": "55gh5cjUcmMQjgg6PmsrHBL3DfxhCe2Wbrj8EvHoZTbv8QytWtj4rtrhJhZSkHt4Ww9PM5PEhThHhmyRdvZ7rL44",
  "key31": "4EJ479vn7Gmavsbh7LeWner2vTAaN1SJCjaFDj6PdZ7Ve1kXMwkYmjoLcLqYHBdQRnRxEBhKJG1127HL8fpXz488",
  "key32": "5NCkapFFPVkHs1R7LFzYDu8kMWcUN2vtqJWnqovo6WqhyvxGPepKvkh2symsDHUb7WVbQAvUDQVzx1mRpvYdwwD6",
  "key33": "316AqLL3Lb3MEa8NyB83dV5hGbNCHakVUo9y3gaqj4kEB6DXmWL6AoHpxCWhf1q1FHUDyVHMbtumE3y9dCMFvFQE",
  "key34": "2r5zQAGMhXQxC7xNRM8BH7fiERbMrik5RDEUJkAppgad4Bm6wvqwoZFeerCdUvDdjZg6oxG6Ux1sFctDtaLth2gL",
  "key35": "3jMYvLQHqYm1yazFHkNfABmhNjAboVVUXYx6R9zqcinEFsnGoEfm74ztsEHcT2PAzmxUT2DeMvrJCscbQTtHuVVp",
  "key36": "3Jg4uwxpuMTZTpraNY9ujFZa85XLGw1bR82G3QtGbY4Eksd1c3ciqQqMpLwk6S2gWsVmwqQY56A7evffCLgEgrYw",
  "key37": "4jQ8irk9wiGDxwzWiwcBTUcFjjGGzxHuWWNERfECr2wEQayxXYUZX8Ds6YPnExAQ8BHbUrXEPSY3QYHjvgLrqBgK",
  "key38": "idDybq7i6wq5MVo8tiGev6JnyHvYbGGvUYThRUvzDLgPgeJc8iEeDYxgQqHJDXRhyUzZA793zsSWL5Mdb5kJ1gt",
  "key39": "32sKvDCBYk1r6Ht3MkkfNobJCK1bXiQ6BjCJ2viqDGhjC2vprJfqeHwP31LNrScuWRPvM8D7nbkt7jQFrTtDuAiU",
  "key40": "5XSuoVwCjg26ob5FD6ipJEAttT5P8zoW5CLo4MVMXt5mr1XZZHa9V3R6GyhozaugmU68oBdGrYdunmnB8qPYFa8b",
  "key41": "5hFktfoy3G7PfahzXHrCe8srSTujVATABwmSshYD5RXLikRgiTvKMy8mfVQcgEPTU6FY6y6CpeVK2vvW5T7PpLbJ",
  "key42": "3XEJ44rSDMRXqvUatiEyfrTyXMZue1h27tMrqXLUkE5B2UahRkmnanQr5AyGgZUAM18D34Gh4cCKzNwUZDDwEZ2P",
  "key43": "5cWFBFQj1PHTSnLuWmz223Xxf6MTbQVXKr4DCEKVZQFJSRi6WXorRFexS8KFN7tpXqZQxNBDogunszdFjK1baPP3",
  "key44": "67MpgqyUkCRABRKZGZoxMfi9serhbymKejQCmhQN7etygNyzEkrZSYbyZTxrHFyWbc4GmiXWa36rjKeTxFKxVe7R",
  "key45": "bs2JXXmApSZgWsz5BDFyJYUXHpaZtoMFvaCvC4zDzBMyrogSQoek3sPgn8jYJ32wJDagRtE8ZwFAzmZMLpXc1et",
  "key46": "pwY7cwyEtXnN3zWDhtMGrePakb37xULtbQC1toNckR4xPsBgih3TmjfnaVsBkaH7hRN2KfYN8L78fDwvsgYPkX7",
  "key47": "5XFniJxmJ7kskkRwyFKVZZtcMQcr3kCyCFEzS8wzKRygm6kht5Z3epaNP8uPtZEhAn7uT7F72Ee4ucBwXhBCRVRv",
  "key48": "5TEtd1NT8rEVkVRNVMPZ4tgrUEkwGscgH16jvW4p2uBQuB6FzktmUD27uULwvkbwBXJJBhJD8xrBfMqYdQRW292Y"
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
