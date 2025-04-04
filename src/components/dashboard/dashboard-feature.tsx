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
    "Z2yiU2h4uLHwr82dwbvctHQryWRtBDRaEF3FTfAgS6B6qnbMbdffYX4PBZzEL3CpgpJWMMh4HmwcejTJvYAEzdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R46u1gSjc1EhGgK2agxLv6XL2JeRR9ZFKsc6fWeR8E1kEAGphXcsyV3yDVPHuzhZWUrc6tSUorgtmUSwWgiUpog",
  "key1": "2WaQVMtrzug5KZCjZ7XQTMV6QhXQmVh35AamZVHUcEVkqJGsph9uFSo2HESCLBCCSDCzRbQifNgyzMWDCbwpNnBC",
  "key2": "5H5Djp1cBoiTjkESyaWQk1jPgVb8d5o8enHixWp2a3Z8y76p4BMPg9FeRu7LnT7jGr6p78nF5Es73Pd9ciCxcVnF",
  "key3": "uPAW5S13VCq75d7YHk271aMB2zoDiaEBt6hmN4JhkyNL1st5cwuvMbuzRBZc1f79veJgsGSrVcGK3DRKwWpd38E",
  "key4": "4j57bBAMRJ9Xc53tduhVvYsBaonQKdkoWDdQzo6E4uqLAaAGob6ubDMKE3RDfmEVyQSB7ZRhmv1BwmVBnTeV1QAt",
  "key5": "knPT2FZxk7Qufqg9GHBHzaEXVvhWz1q8Eu1gpUhtAd3T3WYqjCBXuB9xu4fKtstkVTJxoJvcMgpkpokr2UV92CU",
  "key6": "5DUuWGtAruEaQV2oyNP16b77cfyPEJE1RmzwFjwKMjMWU4doWSM8aVj8gHyRM5pu2dJadGuKcTE64ya2Ey4rLTWt",
  "key7": "43qGYUVFRnJ2zh4NU2yxFkx8w1MfSEqakuSfccZ5Th5waFuZmMskL1hrZdNfUq95HuK3HiWmWpFektSn1snyNL6n",
  "key8": "48RSmQmWdoPpjbyRyY48CESCtFvELTGoFin4MrHkeEF5s2j6GcpKE8MPgkv6S1N93gtAMQ3TKVhGM8McnwTcMx3z",
  "key9": "5GZbCEuMjPpShThWshELBmrsRqYS8LtCPiQjoeLU6P9A7s3foG7YF7WMuGRy9Gv9MJjgeodcbVKiZ2DEdBWhXPVu",
  "key10": "zPPBKAzNDWD4bcDwHzBQUArjZ757oWukbZR5p8Q7gStErku932vNm63EAGA2m89E3ugJtMtx45Xsfrg6sou9c9C",
  "key11": "2px9LRvMDibok4AmQNHgC7QFSBtXRdPV4CS6QcyhbuNmXaACEoondjKfhx1uMrqXUzP9bFpuk3XtX1vMHq2HnGzg",
  "key12": "44TagGgHkz6G5K7nLjm2jL7wSYMKyrnk4yQi8Z5rCJQEXFtPQUazh5TaUnLz9CFBPiu4CYsXJGEGAjKXMSKrLRqW",
  "key13": "2RnfXp9raUop3rd1cTZxMhhRQxyqMS4SJqrrNXYqN3QY8AnyfEAsKEvRpFoNdVFRiqVWi91MH3nT69Nj113VWcMR",
  "key14": "H2ULwNsGHaTDovbKVtLg8gm8bBx4fWCFCQYrec8mkFrutwoL8BhYM6E5wJa2FwSpt2aBFfGJhY6amgkXmGF8SjS",
  "key15": "5soF15DdKsRjwvfSG3Z7DJ56KFp7ADjS2prhgXjqDgRPdGwgHaaEJeF13EsVLNQBSy9CLMNggzU9bUTUZqUmRRo6",
  "key16": "3uDR6qm7LGdiBJGkrwHvw7J3DiwyTmPoSsMKouxurHrGaYWDuvduW2znPFuAUoJFEB7ZqjjUT4ZtmqktoS3ndKdW",
  "key17": "5wjLEpoAdzL7VoJEVYC1Y6yQ1LyJi3VX8Fu3fZzpSQJmE6PkFJZ2v6EAsneWtX8Y88hU7TCf2BbVKg7z1PwqZ9QV",
  "key18": "42NPcQUP1ERQmdYERNqJLuWjesKrRKP6h2CyqSL79Yd4V1pHE5oUCVmLKUY7v2io4a4BH5qWyZZDW3SuVM9k5Uw1",
  "key19": "4L2Ke8cMPQXwxe651E6mP5fiDTy7zif6th7bhNcp24rRB14QF9p9pyUAGu34DraH1r2LoEuK4qzUpXeAN2DqtBVQ",
  "key20": "Y14wdvexCD5sn8YsMCxCnq8hrBV149FQ8toNAqRYiXp7by44WJi2WoLeV8FK1HP7g1FnFWLivv4K9N4VcbEQX98",
  "key21": "3Rz2xEQdeJHPw8ttDYx2NsNtZWYh64y2U4Upc1FPWrqGVCvU1W6v1ELXmeJifEEyh2MxuVWuWsgkJRpsaxZ8UV72",
  "key22": "2ibU6Yv86AzaxUEyGErqfSojqvJbBc3uLVsupx3s79j952ZBxGsmNFLyftGQxse4BLSvsveYnYR8tJM8BVmsGQnm",
  "key23": "61VZzi7nuxAozGXBLmUSUnWbHjiUNTWNTiFqEYXXrQzvPmJmxAdbK7bFvTeCUkF38By8DnFBPbteccXgj6gU2uj7",
  "key24": "3DzoL6UadxfrTZ4d3QZojvWYL7Zfc21fFDHWaJFWDUXtQBatrVvt9eAp3YRRP7S9qrvz1zyLi9KsTcnRcTMBXibK",
  "key25": "VEVANBEZ7xRB5T53WuwTygGNSoa1oKkQfyMgJWcvmRi6AweqSw91SVpzuAqrpNbaHjQW2qAvrbdfrNAYVV2khQd",
  "key26": "FZssvJZYwAAdviTeS1bt5KHHjo4byoZCe1LWWAatWUi6bS3t4aeHaW16eco6W1j61Fa88i2Hjvuf2N3jExX7Piw",
  "key27": "4fp54kEJvY5qsbi9XEcX5RDHrQ8zX7fh7eUaQYHDYh6eNasNMKx2aUnLmN6xD6JK8JocHwukkspC6cBugwWTuVpN",
  "key28": "4a5qckjGeZeNGT1JChN6CS783vcAnsnjM3f5GUtKjprr8MEbmgep7QTptjMCocqqXuzreRih217pBcYCrQkh74Go",
  "key29": "4E8Vk8Anexc85jWShtLVLcPccnUaPk5V53jr2bqrFvgTU9CMEJNGEB3rZDtSEWPowguiAst2S3pEsisr97jeSR9F",
  "key30": "27usPkVfogDTBDG8P9tAAYqPuQUePRB8xH9sdXQ5zVwkpv8pQP4qtHRgGM48Kb1dT753TMtjzFgjjak5pLesz4Sk",
  "key31": "4kM9sqESmzgC5F6h6nnRCyK1DMmaMsrpqNLa7dyJXtieYsDS8mCPmqqi7xCr47zxt33EWGJ4Q2GHqu1Xp8MwCp9y",
  "key32": "9ZpzN3zR3Vw5VgrSByW4VU3qR8kYzaop3wihSdxPFgKMChGScNnD5JbgPCtApn3resWpuQvuUgbGTBPXGJLy7cU",
  "key33": "2VLG3LqFwXhSuzQbsuM72SGb4DhaKHX7wS375zBjC6Yi9kzG4jbnHrBujdohRoeYLmeD3Wye3kxsVcRePUauzWBD",
  "key34": "4N7eoNG5BWKFQyJk9zebwQrPPxy2Mfjgw9VKMk6ZXn2bq359USNTfxiRYn127AVHM4Z133nBgZAjSLdF38oVyPDV",
  "key35": "44yYTaY1H5kDbtk2poLoH3vPnZhLnXNq7q8TvxBhyPoQaY6XpcfbxkehdFCM7WAXxDxkqXkiw9b56wydUuzU1Guz",
  "key36": "3rfzGPhdG9Hv8vhK7Arnu9LTT2iFzKYmqm6uoNVLnzJojCP82vq7oRJJcvZGws5xvrrauhoo2smBVyxCKUgcue1q",
  "key37": "5cniH9Upda3NbPj3ReNmK6XPdCS54zHAyBu3t4nYgX6JeY9B9tc7dQyWHLRYHnCroN3eaXiY21FRXJ6qUUsRKiQg",
  "key38": "5YhLaV6xXSmKVj8Q9gWHjf2crW6at2ohsc69EeqkNEQgHAGGzT8hSKCHBArKR5u7jmQddmqfhTQxwm8uTPFfjLNa",
  "key39": "2SGTQ7GWVaxdoWYZyMGP7L2GppWVQbAcXAg2xRVpgKLLm1SPyjnH34QWzQdZe9kYQDe7RP3qf43qvaRtBHfSaGFP",
  "key40": "3AzjYhZPjcEqPZTPifoVw9vzuSxTDosjcGU96ozS2BD7TY7uhk5WrBEGmaWCZhDg3xDvb78aEMEVvp5ZJGK6HK4B"
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
