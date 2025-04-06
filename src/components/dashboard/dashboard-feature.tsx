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
    "bxbkLxpUvrc7RvNgd74aQkHnA6U6WDwBJTXTVbuG32MPc1pPFPDiTdRtwunUmiVgQ3drJjhf8nQKa5McpBo8Bsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iPjKiZarZfiWBqSoB33scwwzgapyAgdEPTLQGqtU4cCU8hF3pjyxTF54QfkC6K65s8g53jgEeJtttw746jLB6R1",
  "key1": "47foNhikhz77bNyNFQhZRcdjBGzpFA9QzrzTABuhexMHg4fgMRf1qK2VuBUWFuULstHDz1mFZAgPyDVgjLgn9d84",
  "key2": "53ZiKkMF1N5wZVdfFGTmVR6NE9ms1LcodgSyQjhr5tHWi8qkgmn4B98WAwMqaQFM7xq34nubvWzpNiv19VJcN4gz",
  "key3": "4hsc4hsSFQjXHcC1SMApEQn5xttdV2WUzSLpuzcyYpsAAnTtxhLDMvFch9Tax7zUuVHLsd4vqeRD2ce67Ut5Ztsu",
  "key4": "3EYU7wtgw4JzZRrzq6eJbbNpP4kyTQ9nUueWPk1rqNVpLaDCq6fL7RqyApCSch7jQTLWfBfMRpUK6mT7ZW9odrp3",
  "key5": "2MDUGnWyMwqozM8MFtjErgYzDQodRz8i7z2x4WYWkLp4H31h9Uvptb7xgSLHARVfzT9h3jA71fe3ricjX7275uZB",
  "key6": "5SvbPNH1y41KJMVbQktNjUVtbuEUsurTHY5nnPZDHZrwqFS1hya5pizLe8K68Jc8CcHg6c8qsu2fC3Mj8cWPWEKP",
  "key7": "3wMaviVrjTaVHaEWtFhRkTHUhDm63hB69p3WWdNs4nWnknDG2Ja9Gfh2cuEfGUZe47toUJXsMFypcbVgU3vfSBn6",
  "key8": "646vj8hcUVwPw61tbeBk1mXGNrTtWk4tRe8QnN6SvgNPqHpd5WA3gn2NfcioFUMwQQ6etTsziCznQDSrHnmXNQCK",
  "key9": "GskZvqmZSytNuWvNW6jW4wjyoexnVGpbeio26rUchRpj7vKBFK8KhXPJcYje3dZRBEbEXtSMxkio2xpFrmip7rV",
  "key10": "2UfYjwrpbzRHg8WNUy3AjPArpuLEQveCUdbjHq6W8jAWnu18x1gEzEJNKBbBpYduagKPQrUGEkrS81FiD3NphkNF",
  "key11": "7i49Gwx5GJJuFH4q9RaKNkPnnu7THsUR8jJu4q6EP4DhhMw264G2236gmXDCv3jBGaFWYMGf5bwcPPU7779gmsW",
  "key12": "5t6iGfourep98p94X6nZwwGFLpTd3pM1PzgnPjFdtQwQSGdNp2VdbPg7Jbz1VuBFMff3AZo5ueHwd4mbw9hP5cSa",
  "key13": "4taNYGctfQ8TeYjpGhLe3uSY2cZHbvTMFe4K56PE18Aua8rJTzvgZCDPvve691kgraQFzzD6ZBYNezaXQgnEVf22",
  "key14": "pdAECtsd5JtcvNaZ7QkZQXMZg8pfY8LLbyKbZ8cs7gn3EBUrtLxGimTaq4hmRFt7DCxNqAxse2GmFdaCajyNX7G",
  "key15": "2H6wbe2Jb4AuDdcFJ5HsLSsxgFXjynAUSNULkF8U4ibRNazaZsoZjR5KcaW7yeif1k5yLHjy4Uqqqftn5gxSe23A",
  "key16": "5ND6pbXeVVn1CPYrN2oP5VjAvSucuTe881jK1vxTDSizFs6ScqomBppxuKxY255W9DowYfpXDxkDAtSV1dQELYUS",
  "key17": "2Xs37R9wMCHCMp6GxvbD29uWuntraw22iFgiBr2JHzDoYYHJcgannbjLWEjFX7Ft4aMK9VRjb4MoxAX2N96XBpsq",
  "key18": "2Kae3H68MSEoVwxhoKsc4B53Vbztw9RpuYPbAw9ydpnxB8qmiMVhWdu7hcR6BKny3NfaV9XVpsXymbfNPXdLFxVQ",
  "key19": "2z3aAQ37uEK7M2Bjb5F242MtgtvQGAjMQnmTg7mpJ8s1UMfdBHcQ5z4W7kT9jvvtL6kmNpAAfzTQRf4YgjcNgUUa",
  "key20": "HYYtJgEUg8nTUEBRecLGrje3T9xHJZVPoBfwVij47KZz4c5cidwtuzKRuXf18AutuSScKKmQMLroo2aVGozUiRk",
  "key21": "ux6a6KgZLbAfVca19YhDCGiQBTx5vdTPUUdd7LgoZzUKz3qpRNN8z8FXzdSpuF4z4AU4mugcZKMA2hxU83aaSyL",
  "key22": "2avubdLBMyyULDuD62ZcBMe7dx55ELGGp5jqef5CjGgQ1Ehz5JfeqH3aK4s7eCBHpW7mvgeJFpj2WNQGx11BvMaw",
  "key23": "2m8t3NpMTeGZHv96pTBHXoh5RcKGaDjqYN2hX6AApeRrWe1WAPdKpdMdGH2THyGRUgeoXr4avpjdy1tAuBqyvyQu",
  "key24": "sgDovP1kCfcUTa8WjkMzrWLGVSUvotSJtGaJb3naeM7qaWHK6CrjcfCTdvwQMRMhAZfmxG1ZZcqRbrypxGjeeR5",
  "key25": "4mAxnET6VM2kQxiszWa4kH4Rfnomp95ejTLaVe621waHEEVv6Q3C9fCcCebU3grhwq8BAyeuRuWQXdaanhEGvmhE",
  "key26": "673QntgYH4hdfj77naWBkYmtvsLfAGi1WbJNoJPaCc2nfM6obQ5b7T25v9qDWUbmsiuCniDzrji8ipZiuxxG6VLb",
  "key27": "4RbX3M3nv7kPCYBKymjQSVPreShGz79fXNV4yqnNxubJdRtX2eQporkuj6DpmyfvrATtGPvZazuWBcwWLdaWMK7L",
  "key28": "39qM4wpZ95NQC1aDjh2ToRVMcc5AfvvwbD7ozvgVxWLEc7DL6e3jLU5Z43Cfs493MQcYNmr9PJNLyPxKdMkmfmcS",
  "key29": "Jg7Yhbwa89sirczTnQcWoVHjrSo7zWcyZ362cwbLXRcKBvSDZCmuYLt6NtVMriYNta5iMw8LuQM4uk3yX4AVsf5",
  "key30": "txFE3T8ZB5GkZy59V3HQEZNNX2WDn2J19h5bYBAgmYXrQH3WAjumMfKEGh36ZfyT7cuTAa5nLxTFds8LUf4rtsr",
  "key31": "3YyvSWKRfkncnAE7AbULDtuFHdZtR6dS834YcoNyqLCbkVFHXXBcfuVKfcEK8yzNm9CakRXXewrTWLmCHiT5Bjkb",
  "key32": "Ma2mdDoBE9NH6Rh2bhDnYbGFk3J1p8RBhiWLvKcGBuZQNuxSMehGWkDWGG5dJTiBm1gdY2uLd2QiWswevjq3U2Y",
  "key33": "3yotDnyHt2u9D3kixLUhjdriLq4LoxF2hDWLdjmQB97ougdTxqMRTzwDhTWbB3h7b1bzpELyheVH45YFu2mrr6LB",
  "key34": "4tYXSK4h6gAkwBNWKpmDT3nqWSnWdgBsnEfs2YvTD1e3hmPLhC9iQWyDChYNrcPSDJE4BzHiGUvjGskPiXXh1CCF",
  "key35": "4WDyJ2ShqEbzdMcP3ksSzywKE6KQ1nLsUQSfamiP5WQ9Gy9negFAwfCKC5rYcwr58BbJtCznGdRSADg8UqioemBF",
  "key36": "3ME2wqw6HihdqqtG8GvqU1Xb5WGjpDhX6X4DhJF5DzwWuTUiDfP6FqFyQBQRDR1zyuQBcLTayuxSwCQ5k6rBopf3",
  "key37": "2xJb5D84HdD1u8B2L2P7hd4dwEKdXtFCvm3hoc1Uvkaf1iMzidGNN3x1whvQXpkYdzUadQq8zk4dKy4KNiH4QVj7",
  "key38": "58aX2RnW24nTwcLdNidJeKq4hmBkEAHoBuHk8JqMoYht6MyaBcwr3vaxxjJLqhX8TjcTRDZS76N9GKdodnQ7fjsD",
  "key39": "2BCx4CWsYj4TQsUzMC3NQ3JbFeUk1W3VBNJhbrKrYuBUMDLKMd4tj4bwy9455JQZp6ktTe2MfMHyXA1Ex3RQfReT",
  "key40": "NW5cFp3R3jHs4Q8GXXhEHyjfC1qdE3UXy8QvEaYxRfNF77wQeG8yGzoCjhQNxiTcEj5T9Djn8z1i1Gtb38uRyxg",
  "key41": "5V2uxs7Wt4SrETrn8Kfjh96UTm2ERDebB7e5GqnbjBMCfvVRQA1WPM5dNmZhnXRtouBiXffAkCMCr3KbTwQBAqAU",
  "key42": "5QuM5Wr4kK2MyPSSFEAA5bBSP4EwC5SuuPsK9JKeKQZBYn2zptrmfBtUUyj5bkj3GRWuDRfydGVEmcBWVgkd3hFp",
  "key43": "5Na82kEKubuz1NNHjrmKVpRbTUwfGirq9gdmruogEzgNg8bSENq5F1oo6qZT84NbawtvzCXDj4PZ9sKsDe3ZWr6F",
  "key44": "QWHZU3Zu43QPtw7rExj2uKp7aiAnYDwLxNDqNb7ciD9ZaLZAV11YoMN5GCykCgY2HfnvCjEFK8tAdXoumPPsjVf",
  "key45": "5D1YLD7XSktNmBJQCtevhK8GNNGVjGRvNsDUivNtEUyePbzGitXWwULyRoiHPKdGyMtsArkDCK6DMbXVaoheoGoT",
  "key46": "3UpdHcp9nTTnFtJ1UjUL24Ph9iCUR2cGXfas4NFbLmHcmwTZ38kom9TyH2C9XVE8N2ZkL6zdP5ojFVAqzPrXWvSK",
  "key47": "9kTLZK9bufkgMkWi6CTGPZfaAvT56YEgW3oJQvGMx8iR8bGFDRQ3EaJjACR2okbVp5cAKU8TSMndJZ9D9DbeFa7",
  "key48": "rG7Rvpgq8es3o9GgKYUvu5agpNZ9fuy7puzB84teWEA7DgMzuoyVeJpKucCVxZTwazHLYhKfaRKEKTELUovgjBG",
  "key49": "3yktJbq7rqJPje7ZYd5iZN6Y9nwpDGChVsa3E9DTWRPkQ1i6y9URH65bPxf3DoNjgoEYjkLKR6UPtg4dXuywxjVk"
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
