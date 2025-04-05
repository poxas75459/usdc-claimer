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
    "2fwHEpfwDHM6ZgZUiqhnMBXVHksD28jzfzvhYpRsCVQBq5qWT43Z8jzZdiDfPVp1Z4UMxDvDc3WmoyPgSZSZYoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4en7rixfMERYYYt2F7RXxqTrehsxXec6qeaF6fxpWFnG1UE2AABZoxKFySswjnF5NJETFQ56GmgqTNHWK9Qe7wt4",
  "key1": "2zNtBmWMVYdf995DUi9WBCr8M2L4LovsCjNB1GbbA57zn5CfneS4ZyUKEdMTUadqrVmCdsF1xwniJK2t5udyEUiL",
  "key2": "4x6N6sqVT6AuGn9XmTQHScwEjuYS4KBncKyJXTkn8PS83qpnj6RMd4PwGFnAnR8deUvwPvqiBU3d5b51rRceiygA",
  "key3": "4sU3gPqt2xJ46q9Xo1VYQzSozaFfQuV9CyJdd6ASkcW3BvgoZVbMqC2CZfkGJh9fj2duS6cbnD2j6nrs4XNkWB8C",
  "key4": "4E1WGeRJkBuQwQLRDug2my1o24qN7ACcgHgebYs6ty5NKWwayS6V3pAhk5cGzcNRaNb2ThQq36w8UrVaX5wXT78Z",
  "key5": "2BiH8fA4bfsEagi2qdUYyjjp9Ss4JNjPvqXn7gxH5DrzhvhBzgugKE9f8JMRXjhJsfSGgTFGjKusX7UTC7cgtN9s",
  "key6": "MaTFQDWCHPod7QWunxrreexV4tpVenw59SFrMeNHmyUiURjEEpx3oQzSG58r8k1BoNfmz3EeFAizpPD1jAhGPBp",
  "key7": "4iMLhs3Ghhmr9J8vPP2MJyMoGWRdGotxuNPRSbh7oEk2pxPdQjynmyrgJ1TRnag6sQgSo6hExkvGE1LATYHr2osx",
  "key8": "3c3vTu9r67tybqb1VQrL3uCnV949B83cZGuXSxnBEHXeBTi5JxSKxvB2DED4fzWCYSK8apuQSYw2otavZGhahdjR",
  "key9": "7cyPMZdmJf8MQeWzinJyV9xV5YHkJ5MWK2fg65keYhF5kq83e8BNbozp2BWz5irxjd2gWteK8TRijqgyDpqeBSy",
  "key10": "2uzoMAxAVZwbHyHH2zinnafkKTzqUv3cKEexxCazRMXMcgz76jbQ9LcZe5dKCf4RVvAZ8trGJwHBmxmXPbUB3hcP",
  "key11": "2FyiRJkvyFG9M6te8ADYAipbPU8iMVVCRUFMhE7g4XAmwwwfpcxR6JQcoNReEDwNwe1GcPTkQpsykwHkZdr3zVSw",
  "key12": "5VEMfN85v5rU2gxsyN6KxJsDwtLB2TTHwZiTzTns6mMgNcPHx3VGmg3UPH5HBD1oCio3LwiMrmcNuhyjuXheMqTW",
  "key13": "pAPAYtaQ9bbGVfvuRkTVVrZJk3wGJzFgrXiVSSDP7gSDMyVSGn3H2jeYmwnSFrtJhqCV5kqmSx4P5JhSK1qHUc3",
  "key14": "28ARVsGdy2fWw9LvcuGS24qVwc8nKU5vgxb4sp9JDumpsWNLNynQzzfjXoBVf2tWYkTBE87H41E7o7XYKrUPK7Pj",
  "key15": "2VmtP9ZrmB4TzKxuFprMC5F8AY9e9N2Z2B5DV4tpSSaN24fvh7HUNEFSZ91bPXqKJNS18zvntjPfmkCei7yCJmom",
  "key16": "4ZB1LY7KyVKY8nATk5f1kW1dagErNNei4k3druipy39yQdejpNW7iJykkiB3YgfAorssbvdA8y3Rsnny444zA4WD",
  "key17": "5cngaQU6FiSRF61cNrNdAS3cYjd2jfmmhYTkYJUAYjKpe9u9HyhLXZbvW8hoGh4jhJuSZVYbbfZjXwnHXzTRMEWu",
  "key18": "36K11r2X1tf3SuBS6EjSxcCtkBCsHEMxsE48Gt84mAjm6T8soy3inbS4AEdFEdTmR2bMaBhkrc8psxDL7GXxCY3H",
  "key19": "oCRs8J2ToUrZaXT4GbJpNVngJcD5F3PxzfjEWLXvAptiZvdogy1h1L1kj7g6RE4Naps13ZwxtdPQ4CCr3475RdS",
  "key20": "5JdC6MaMtAciexdhb2G6ZzY3m1Fu26eEYFq43g6h1xNuomMnLCUh6RFMnBY9c9ijdLK2tVFymXrJwVc1Afmpra3G",
  "key21": "4TB4sVyK8L8iD6UqcCjFXcEJemgi8rP2WK5aHsoJJjEiiRmcVMNcntkFxTtHnpHZVsXj6oLSNtJ8nP5FXu2ynU6d",
  "key22": "2ggvcZwA1jNUeNBcGmdN5ccab2WrjemqU5LdMhWkvC1Dq6xXmqaUbaGRSrWjaBtqQx1byUAcPynPbSEjC43LyYZL",
  "key23": "5EJ8YzH5jwKcTo7JhYyp3RaFjQJVngyhsDE9CJUkaKoayBMvTYdXGzXGiUxZ1qyJapJdmUR25GVjtijB6Bjz31vz",
  "key24": "oqjd1xkwWRt61HbyCNmGZ4qauH6HdXGPpcMmd9BNZXuzmwocQ65DWGgfAXGBrnEw89nzCH3d1LZPRtFgJyMmUhw",
  "key25": "5xEFyCZYEDBVpesQVf69x7Ko2PCeSBq53uor7Ju4ATtWP7J4XWZZf9pSQXovicWm4VVHBhscsEDaUnXfxCWCAwcW",
  "key26": "2QnPt5x1ED3aEB3vbSC3SP9kaMigGMR673opEBtg9zpYt9TRQQfXyzZg2LiPXfUuVTihxQp1VJv36Gk1rWdERMdU",
  "key27": "3BKPAGFASemjkERcs1WR9Zhn3SLqBrGw7V6VPd3WkmCBAedsHyX956ieu8msokwWxnmRhJ5xST3qNz27GtoGdtiU",
  "key28": "5hHt21EdtWLCjiHtsi8dguNEutrd7eQXTfbxg1Bj7MdxQLDwicrCnr5Rq73q7NCducD1rfQ6brdQ2fkoiBMgm33g",
  "key29": "3Ly7ZnCimo3YPvfuzbeXW6duYuUs6QMewpmFTFmqZwNQrHjrrU1wrLUP1NSmXkCUWVphGJvhkJtPK8zN3zndGR7v",
  "key30": "3djeGqryEWRe5ZPJCRa3fGrCXhVLP47XC3m2HJxerreZhJvyDgyjy4RZibr8g8jP3ezYf9ZV1hg3WNumXv2jVmbX",
  "key31": "4qFrQW6Y31mhCmZwCJ7WxjxyXrMVaCoBDq9uKnJ3pG2nf1Zms63w2xJgpjN335aafUZCSKbNSFJP1FAhBGkJatuE",
  "key32": "3kKKrFm5Yq5rQjrqGZWfxk7nFBSZsNH1jNorLcpMkU6r5r6m7ZArp1Aba7uqxWRJzYsUW3tqeSzRkDnJ5sCWrLGq",
  "key33": "3XpUJXYvj3KmpzkNuvA2B2ZLQdxeCZgU4HCekq7Kgk6ngvgWmZaZ9uAYatjqN4VBKQXt4EVTZ3j2dj37RKjE1Jbo",
  "key34": "5kvcLSFstGAugaMEXGTjt88WNR4SRbAZbXLF4NdU5jL4zD1hu8kMURUQK8eSE6G2Qqk4ZKDjWnk96SMprpPXNrR6",
  "key35": "ByRNpciNiaxrxQfXJ3zkBJqLTsBmxoihx6Stu4AE6gC96QSDcMwBcmk9EvsMqBst23Hd1yJN3ahhV6YHCk5vUfL",
  "key36": "4Cw5kGb39Yhx7XyXWYxb7KQWDfXNEbnhkubHnpzUaiPgQZARBmbeDtvD52nyZqRXB7A2SLEsuUASL69fsJ4x5zKs",
  "key37": "36Av9MHocqHdo94uTRvxcrrV3j88whKAMuKARpX2Hv4GT2LKcjRBeyvP3MZPGFLb8eSeDD6fyEdUURV7X1smRZ8B",
  "key38": "zxYyVyx9DFYbuQdVSH8CypTd236NnzT2Fe4sSH7dR6Bjc4st1dbqTmPvEBfZgP8Uk6YX1N1VeDq2zJz6Enz12ZZ",
  "key39": "4XHBTy2z1mj74TwcR6aYm2FfzTyYtrFbmV6VW9wKjJwMUXe7iWuJMCPiZ17gCw6jhybTJvhMYWwUs6Tw3S3BJcPS",
  "key40": "27uvNBAisdmsgEeM2B2BtQDHV4PUCuHSmJhqtW39cJyRu1Jt4ntn4jVhdsg6TLoCh8gGzU1Qn6EmaMuwQwhNBr3X",
  "key41": "2gcJ99ox42RcMZoWHNkL3hvbyE64Qaw5c4CgU3h872a36hHPMzSRJhM8gBWMPQKBrECXao12vqpTd8kLPVA3Wno7",
  "key42": "2d87pz6qKruYE938Nq8FjXg2MxtGzSy9u8A6vGPRGK8L9vCGYouQ1PPkZYsTu8VDvx8tRJzx9PspArtJPc5aRs6s"
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
