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
    "44zKEXzwS1rWFDLHCCjXB4gpUEf9NMBCu2JhJAiLV3VkASXswLyhf5sVjRYe97GWmBUMLHYYcAwSF36Sx9ZHbE8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YGEekWo9dbLYavzzgDo1wizGmwYnugBZBf43v1mWrsPsRe3fTnE9ircXKWaBx4Gv5G3BH6xaigygRGTwXUaPJV3",
  "key1": "h8JyY7ZPXvg58fBz1SiTHa2WtDwLwmKx4MBjqpetAZqWKQpHdLgea6PRWBnBw15biFgypNY745ZNkEfqKsPeyXX",
  "key2": "4eB2sAkNkhanomgJSCdgqHg2ga7dG7L6pQuQkStQebAVJk5S58HCP5J7hz9EkboUxDWskAJLhpAM3zAGFRJnhBmK",
  "key3": "5rscQyttbJMZDcLTxiU8LYBieGVTJqRKbkVgqfZE5zLUoLC8mJoTJ6ZUDxqML18AM4s4PFh3wdP9z4y2sKAnSL7m",
  "key4": "4eFva8Xc1katGNmJMQUDoPzTiYAzqYn3b9XmmefFhaUpogmR968aRSGrkHhq9QfDjJSf5ndNjieevMNkvTR54S8M",
  "key5": "4M2Mcy2uaEXBYwtUyeW88FDYBofp6JSs9JWB6xc8U7PdodMovqHQuF5gqN8bwK82ob6pFQY1sA6uMgG3RupkbNJR",
  "key6": "2K4X9eSpt55bvAMjCRpyNuzKBaH3KHRyJumG6RAocDFAzctbM6vxtkBNm2ER1QK8qoSp1g4vFHbM3u4XsqdMLEgB",
  "key7": "4x8VvhBq4b9RPHa7R7vEZMRUhC75qonJrUBjyQF8s1HPZAshLKBJev9R9dMYC24oX98K8XjJ5wBLABX2fhQCKRvT",
  "key8": "Q2ccpcawUH8NHrAcdoGqpFEWmAgTzHxraT9YJy9FdByvdkiSJC8Uk6mEN2qRyvKhipaAtwUHq8PdDZQFzUjjrUh",
  "key9": "5wiH7U1y7gVgvW2ophsGDzYWNMmpgr6HG5gVCCTQBZg55XSUMgFm7qudHhA2JHrJzLiZQLCqYzRdFraW7LYHmVX5",
  "key10": "4NAWBLwwpnEgMLHCMrQiwc4c5CPdw6RhsdruCBpyVR2WZMUjXcMskjK4VWEDmmo7enMmhwYEVE99qrJFLCM8SJXR",
  "key11": "2ZXeKNwUKgy2xbQwdWDBsSryR7vj9iraknGD6qg93jnkS2ZzR3UdvRWrL7dDjV1LkgW9Kyc8HwggZN7HkUeNo5bN",
  "key12": "28CJSmXC2NNvbVEzrHwtogM88K6MrYr4xxjtbS5c5HyZei4RjFB4Gr1WJmETkPEwt8uUtr8YzWY36PgwPVHsEpMP",
  "key13": "3FtEu98RRHKVSBiqjMXuSnegwivNP6TuEA3eyGw8sxnXVSBFyBDRqq65sx7A2DytqeZC2swVmnnzcSSvzgQqhoXC",
  "key14": "4FFwtT448Zhsa4gcjXZhYdvStxnUewoTiRiexBn7LiWAHUcVguS1Nrzoofyb7WQEieHAnkCJpukcE8zkztmwGBHK",
  "key15": "G81BfwSYtvpfh2UuE5aUrgMcT3yo9JDwDqb625ka1GqWVSR3CJ2muRia6p3dEu26WPzSC2zsZbZftNxzJXnkbH5",
  "key16": "2awHxq3j5n9WGvMsMA2iREnMSQ5EpUBfF5FmYJVKer77bDRXKRBzVcXwBkWAuY2Ly5pBgmSQvbDJafZmpmSPA1Zt",
  "key17": "38RTip7RoqphzijTy7jh4DtmXR5PdsXfpV4UfdwYRz2ssJqiHtQgz8bRHHRirkYDYM7jWJSAK8F3nib7D1baFRtc",
  "key18": "3aJAVNoWWkvXSTtEg1k9u9mfyFqsqgpnsxXLev2r3cdUXh5uYBb2PnAkBp931G5EbjRuoE8oY5bVfVZ9FT2M3o4Y",
  "key19": "5g5kvoFiFz7vsQf4KmQ96psiesxu82Mgz5mV9N6XAXdWyCrXjc3sUkh9hL1MeUL2jhSGw9CDEuzUssVTfm6eyZ8w",
  "key20": "4BtUU9qihqZDVxryuc1pGbP3TBXdkeLYG5WgXNKxbovMY88pwqaQERkn9XWQrazmX2j1BmDCDp9aj9netKawy35A",
  "key21": "3dncJkw7r4XSVQBf1sM2kYGwkMGdL19JPgCWCfMdmLnvgU2LATsdWhr3YzMXBpNcoQQ8Ybu7iK5BYuN8WTr121nP",
  "key22": "4CSXAQDxUsNPCx3e9kqdJLoKEav9efEAsBoCoRW3B3pEiadojWd6Sn5w3tabgc1gfMGm2RpRK2zX4HhBTk563Mu",
  "key23": "4UQCrqSLzps6RXtNmCQFF27HfM7vX5PwgfJHBuKRi1fPXSP7b4yuGF86ACAhb6cpaghLdUGDvrEoQZXdc6KJRinc",
  "key24": "36zYL24fPwE2vdjXVut1b9NqNqFYwek9y7LkBKVVaK1yUVUu7UN8KjEtKsiLZnWwo6WkFais4KodoyuZdjiW5c16",
  "key25": "2anfQV8v3XXZNmuSMbwzCqTkJ5PLHL8Ao73cAy6sDvE3CbUMLqViwXDKPuBUT3C7UaJzxwpnXVz3AyAFwatJp5mn",
  "key26": "8Ud15RCqYnUgX5MCBTX6majY8w1kumGTKbYcTwS7NK7bULyHcLfyrxh65JU5Ns4rHs56tCfqUyAScjQPh9n4cPV",
  "key27": "4XX7nQJuynPXrNtgDgxAS3Ss6mP2DEBfyvTJoim6qZ8aXv12ifcvXVZxMvAN5t7FhRnD1sUzpsHGAwisKAdnkCAj",
  "key28": "5ud4VU9o3A8w4bFKw3m9vvogB3p6SwaV4mwU29Cd8GxKzYupk1SviRk8pESyzPLdabUPU9obh6wV1JHxDhJqSvyM",
  "key29": "P3hS9Knmc1Pamvfku9WafvyxrUnEsxorRDUNUCMR8vMfvaNFTBFDSvApeAfSfxQ3jHDK6wcf1FePAoxNCfF8zcy",
  "key30": "4DyYgv7NC3poWBwE6pLyqxTLskp7cnbugCJZbfwV3T5o5QzqrfpLnD6kXYp2gYvEEc8houoGjTDDFdhuHguavE5H",
  "key31": "5xr1XEQsTYWHrFb6Fhs2yZS2bNGXafhcnFQmJirSXB2MRwVELXh4z8FEgfV5qjSCoAkTWmfJicdTGjDgVLSEUkG",
  "key32": "5MLvVPvRdrx6RtfVPRx9fWj5cF8CYwF1c3T5ZEYYxnMfH5J2Ng2hucq9FoYNhFdU9ttspcJEYpsbVTME93xcCWvf",
  "key33": "2mfnXhVzyiF3PEze8hsii7fKvN1YUrHzMVuMwrEDYnr8u85GJEf5vAKGwGc62yHRgiRn28QgVgVFxiCWYJNvQCrL",
  "key34": "5oBUthNtcrTtWo7GeJUpeTUNmKjVPVWx3ph9UTYbU9QC47ut1B7WKpPm6L9qB8exoFVhnUanTBcyXoP2PDEznXgc",
  "key35": "46ZBeAPd5YwpgbupuvRXoqX2XhxdAN1xSAt698TWw5Dr5K7mF3z4WYCDs4mNQfCvXU5168SPveEUhJhEbhN1v2m",
  "key36": "4j7PUoNViVuA6v2oWMb2m8YoptysPQ9FGAL9NAAmrVPA5txFs3LLoSDo1pCeDkp3qDQV48cinLAHoWF1CDx24HWk",
  "key37": "2bqJeMRuTFWXU8dQ8BbUUznZp2HoxDcC5McYN5iD5t3sEQeM7ZcvApo63p7Hc44T2gUv2HLUaXH6pjS3BjP4Pop4",
  "key38": "gNDwGFDrTowj2DZRXmAmjPtdfxeaHu4PJ3GNyqtEHw3yvVhF97drTzr1cvGeXJa5MANHqRoTHkLaw3PuMQ1RgXC",
  "key39": "3fuhpTtm4XLVP9mnzG2tYif1p57xescRWgxUNjG5vNEV7AMpjU7y56ivfe6UaCHRYsxMKQ91xs2kGzhpegyKf9bd",
  "key40": "1HSJUuQzBzHpLfaHxhjUDpcEerQiyAqEKsS7XR8vn7TotC8yJLEieFHDMGVg1CdsiLbwPCcjbP8qmq97uTqcGsb",
  "key41": "4mBnWLTFMwJTgPfKYPdnPkuu5z2yfYhbdRaB8yKH8A4Q8Z3jTHULDhAYDEZm5AWnni3by111opZkzamohm8hXWro",
  "key42": "4VncSf88WqonNNVgx7fxVUCWXordhV5GaVrrBNvibHqe9CDbuxQZmzJmQWGAMKaqwTbrYp1eG5sD3RP1u1W5buSM",
  "key43": "HTYu8CG1KWvGCXKuhBWS65dZmdnt3Vb7UKsfVEN6dTJeQm5SuWryeQM95UreTWsbGZ31TCfxpUTH9mv6hpgoyN1",
  "key44": "5S8MqMZvSQ4BqxnbKayE1YDaUqsnbFZHsKcnR8XaiaM9g1YQg6DDxfhkhUL59xmzHDx8dSsjscihLG61dEDsS82f",
  "key45": "39nAic6fhxkzT9Sz2Drj3xVSP74jDTbDJtjYynmaqUfzikwjnPTHzKoM9MsUuRLqSb5DkHsTLAuKRMhbUwPQa2K1",
  "key46": "3uynUGsWocTqGr4Q4fgQjkcTwiF4EmsQNCpXxqnfGSR3ZpsXKKtc92Vu7DsgprgwbcTrp8outMMeoy8L3FLQzNGY",
  "key47": "3SWs8hv9GT3xxiY2koXWFppZXHmtzeBTasiwo4v8fmVE5soD2UxEBA84jEaNdDaAoSxaLrQyzgV7bhegustCvNBF",
  "key48": "3JukJNrrsmhhEB446yYTrTJYfQR75S5o47V8PXBnwq3RRVThYBzshsCpdBzUbVdsTzxxoEAftEWx5ey9Xr2U3oqe"
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
