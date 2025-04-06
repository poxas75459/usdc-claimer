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
    "3NaSybpsXdPXhGsyv3sSrWt8Su7NeAy4B6VeFdHsNMDaW5zUwqLkxVFcomHuqXHzu9ua3aCBtVr3bJLgm9SmgUeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FK7wi49n2goNTj4vH2Kk4ZpjuYB1ECiV6eVomGAtnTSQ6J2FTKhePWSuCP4GDw9d2xbCtcS31MT2sEeVqkEe2Pw",
  "key1": "32B99sM7cA9EZPZRkNWNpHP3BkhpbgtPGbXvxVe7b1v3XmW21CNaXBvrhcYtZ7NTwBHogsvoVUuPgs2JAPvi95gZ",
  "key2": "2yaGWFjBLHPywGtAYmbeAso5eMynfibAXTNHyYn4ygTmJAXxjUz4qZp3wb8HnkdB3JTTVfMTfNkStbzPG996hDW7",
  "key3": "4H1cNDAUzfQRGcCDHZQuZc7QYLCYEDuDfoiYqKy4kXtHHpqJsazW5Cm1PP7N2ytzeEPpnnrAiVg9gFYSmUA3PHD2",
  "key4": "64v1VNcCNKU9mVEjPNtMhTf7PPmPGYgoQ6A46r2WvtQMw93oFj6M5GWgb6NhFtY9PCwk6G5w76Ge3GMzDyc8Yxgq",
  "key5": "56Swpc1aFtJnc8736JuXwyXJZdu2o4ySGukksFgZEQvq2XhXJwH2SsyU2CjY1G9H5vFho93uqY3WQcimogMouBeb",
  "key6": "3AoGg6UMbW23TWvZvCwjS4GuRwrcqsWsJ4d8Pe3yZ4DkRPNtVphEGMikSYPA9k4YZuHDLhrm9CYKBwNGuw3CGrnG",
  "key7": "ym8CCszHCAQgEuy563vrpjRaK51M249U4659sfJ8DPQjzTw17nxEjU6Keysi8Y2MdXdKUkt6zhwSmtzWUw4ZbZc",
  "key8": "3qq8nWYpXtc1cMzoUs5vB7f2Sn3PLtioiohZ5zv4gRnLKqLt5TWYoNYBQr6Kzu7SrTCaxpWDDqezrikHxco3VsKQ",
  "key9": "5VQgwfajoa3p28vBo1bThwAzLxEkbchJEWQP5G7vC3tv4VDgJgVANiWsCSkX1GRVm2E6EjT9fviTTi6gpKuBimi8",
  "key10": "3XoBEtLDJY81vjxx6PVhJsD3kVu4ib9MfWuzF9QUAZQV4vfv8b2wf8tobuRKJZQazXu1WfCQLUFkwKb3yGDHsk8h",
  "key11": "2swbjJWwW32WGqtmvE5WwFu1DCBTB5HzYvAgFz7YhRE3K8VMPE7z15LJQztQf6z7ydxj3V1KmXFaDLcEEjoF3f8P",
  "key12": "29Ty9otnxw34sbqotyv8vjGNENFTULst7DN1hbgaqJvTHCTWxtBj9ThScPqH2Ho5VeiEbHVDmEBEPk7jJ56dprCg",
  "key13": "Tun2M84g11m89FqaoePGXYR6ycHFvcV6veqUJL9hJDXihLqo6hqweB4u47x3pSyMc3jz9BeMLg7q1HHFtuZjTkS",
  "key14": "2kkXXC5uthNvCfiUtErH2vDjX3B5WY5F8QJyVAo2mVXhfDjsxXUAqLcf4c1iYd3ZqSLfUeVcteAG6RDVc6YcmNhd",
  "key15": "2J7kWhLLMWqRGgfjxjZxUcMCsFJVmTPe8AkGevXrD5ZhjJiYbTjwKiXmCXZQ1ca8p4xRZBFwzWkR3bEBPLZTokKX",
  "key16": "5QU6YmY4WU2GVaP8XA6S8NdcSM7rAXMRCTTWyzkhtUUNK43JygYqGvMwNz8BGvQSjopPC4TTV5iFGVnCkg5kekSa",
  "key17": "5y92zxCkMEhLV48SUxck5MLpH22bF76ccfsmfLq8FMYASzUDvgGDEx1bT99xkH1b63g8w3LQJ94N3wRrVeKNh1UT",
  "key18": "4xioqXTDWaAEQXdmqYkZbLN682doyUMtb6Hi9UdUtYxfjesHn8eg86BqCMaWbxfpfALUpaQAJwjp7wkbFPkp5RDR",
  "key19": "DBXqidAvKo4gsx5medWxdR7oBzZPFYvVawjeU456h214SzPkbNLJVC1mYvQGpLnzVjfL2yGGvaPzKoVQPTS9jFE",
  "key20": "gWTyNjVUwnz3p1KzcpqhLXHAyxrtFaVApFun4tJJLxa1RzsndNsMVQEriJqYj9hSAY63ea3sr5m3GN2WhNSQbWH",
  "key21": "2T9L5GGXB6zBmUUB6fQPcEaGuXAyp66hWEsmWqrkmYXFwKyWmSkRrqHSxNpE3mLpZ69QJPyhoASj6j9cvkkaSR9Y",
  "key22": "3Rtqa6qJWfy9A8o5N89n5jYgZbsSX96nGBwsCULeVg2MWN4p2zV2y1piz3ThUjg69qo38RwYV6Hc1FDkdQCnVmkk",
  "key23": "3RcKqf9BBTr686uauLt24wcMGsPx7L1rSdncvVZtj4Ls1J9thqXkeXHMWUbYuXzbHr97zQV5tqRYYYTBBH1JYuTS",
  "key24": "3SSZt1pF8euM7p3TAjF9uX9ADGHckKXHMC3PnHE7z8C4MmpQo6eGufADqi3r5kmqUFZkhvz7VDA9yWKh7jBNZZqr",
  "key25": "YJvitBPfByJ4JpRBcXmZ9ahX2kc97o8XyomVyzVVBwYteyYGkh6k82FWf7KU98BHykpge49FkraXXvWCQAg7Fk2",
  "key26": "3ZvZcddcChTqer2cCHeY9XksADSLSgfym2fQgQJtHEHhJ2oyHrNzSHVfi8rHNyu4G635pV5P1XFSFZionpTbGb9J",
  "key27": "5v31h7Kj6z4G5VYwW1GAQdw1DCxm7tw7LdA1bcChCjCrivQZiXVNEVV4SwXHfA4wi6iUwzQM7bhcnvLduswsdWWK",
  "key28": "2JJVrsFKrNT8B8qYj1DX9pvkhW83G7wy7QWKKBpB1xsA7BAgW56zaSRLVT1yLM3BGawoY8Rg3ZmEMuTbysiLfJ5E",
  "key29": "4NR5MDeESa8Qe5a6m4cQ5vySLsvBSa1ju34T8ngAPAJ49sm6t8EvHt7ugaJk1WT7TEU6cFigpn51cEoceR9GtTtK",
  "key30": "4w7zyv3Sz77zy62VsfRVbFq5toP5MpAnuEzqaCukigZ2QPyrd6EvSmXL4u3J3FdDP3gHjLoSDz7Vc5QzGoa6M9Gr",
  "key31": "3rLK4aQ4WnKLhckhFJvY3Kt7JUU6bmW7PLA1oXkcfR3RyJMPfgtt6udQygeKLDndw1JMRg9fDLaFP3YUaUdBbdxw",
  "key32": "2z2FKZztcr6NgbN9R7aE3hYVE12oUwwG3fekHDx3ZaYAEQtZUXR15CKXXygVYiyJpzwZrUKd9UfxoCA5kredhwkj",
  "key33": "FCiFhZ5ejR5QSn61ePUmTJoKUmkPSxW3VB7twirRyD2GSc4R6MhzTA2cXpLFBC3LQkq6EKwECv18JyBGT3QCw2z",
  "key34": "GrAdCW6f9K7vHF2orvbcivdKcF7TYwYL4nZyNHYLrGTRahGVcL6ZEuxxmJBDsSM9NhC9m91Q2e2Gz9hRVmrtaC1",
  "key35": "56pEt1c5qUxzvXmB95AKeB6ak4ZpEc66Q2upQByuhXotwjYMb6kyuQeTSrcBGXVe8UUyqDiconzfAZkTbvjyh5Dk",
  "key36": "4TRGuoF6Wo8yNnyqDCmWWEZAo6XYGXLq9a1kN6qbL2KbAgnAeKvie6a9z63iU8YM1Bzhr5NSVNoyUu4uinBiDqed",
  "key37": "5wjAdBcYWzLCEDNdXMU5o1yzQ4KSphYTpurZ3hj6wuxSMQNjUq5BmG4hCDx63RknSxu1b8mKKqetcv8o9k3t7P43",
  "key38": "5UQfr9QsjTADEaWrnm6HGcCfRsqkCqNa5d1Q5mJVc5xsyHeuy13fgyz8ongy9E2QnYTbL2iAaBGG5zYdJgCncZHY",
  "key39": "3tVbuunWkCNH62TUdhqmad1jSJ2qUWf951jixYT3EvGDKYsA8ZGkKqCyasgDfRF5Yu4JazZTVPpaKE5p1BqTJReX",
  "key40": "5cjefkSkHREy6sqr56VgKM5WN5ywkp2xYj94acqmSfK3pcKAndZ5xyNncXwcsbtHDCi3pFnRr2uxFW5vSAnRP5kn",
  "key41": "5HYB9bphCTatJHnqHr1xdgFi4QLb4JAF9g77wuzJUvHo65frA8zZkK3bq371PDxvrYo6hFZdg95rBJB57B21YfMq",
  "key42": "2cVqaPQBzKjThw3QAKc9YV8t5FnhNJfKcUNz1MpRaznR8fNhtBgZTECAkPnqasDDm3Nr3v4uvRwTyc6Bv1bEVb2g",
  "key43": "3HBZXFBpjN2eaLULMPgMdv1taVbLb4EaNP47TYUnenKXhCGoAqLTtUgwdSVaiADscYEiFSfECUd23vqW8TdMWuUA",
  "key44": "2w9bAjdmizg7HjHoURpvEEmNrnnHmWAvS6PCd2C5oKhLdKDxCYSboRNCvLzL9vos6BtLKPW6a6ucGvp9MdupYg1C",
  "key45": "5mLSXFqwdMq3r92Gt1U9D2Gvd4TwKQzmMyYvF4i9Qob8jFuR5f6LWBA7W1BX2btfzT5kauzC21c88TiLUXehGh4D",
  "key46": "2rcoqxmKbpsxomtakXauCizELNA3Ya7wMP2TSkwXC42qQ7Ysvgn5G2wqiDVyNvk9ENcjxLJb8wvJhUfNcS9xeazj"
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
