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
    "542hUyMAxv8bJN1KoX9yt7jng39WUwdLB1bqJtJ7ouShKSRU2tSk957y8qcE1T8MxHQwTgWcV3Btc9LFBSpgaMej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fu5bB2J6GVGCprwk1qcAhMD4G4qwenJkFZ8TftmDs6aVkPus7qmJsLW9gqGjQPrDqGznqB28Kt9z83WaaKfDvDH",
  "key1": "2EVjLs9Vtc2mTxxEDDZE4aV3vk6izADaZLLsgDzzbnEqQ3rjt7quK4CcBVYDUsqTkCU18XfAsQjXb6t8c5iQAgET",
  "key2": "3zqL7aCx5XTtWnGYfezjaGnLhP6QDjgHqvvcpqsCLVxf3ZpYZfJCGrnoyDGkYYH4osQkLv6zKBDux68NxBCfNme5",
  "key3": "33QFh5c8hVT34R2oUrs3hDViX4SxVixQ5NWQFhgoScG3mJGJEA7xVqF7zX2ahwBSmEui7ZfatEKotiCb6rAExEpK",
  "key4": "4JoTJ7UTdKsCzZ2qrUTeLqeBahT5a3y7SYe2EeoxCkYLqErk6khyUo2hBqoy7qAZrT5AxcZFBASkCLA7id1bm9gM",
  "key5": "hFhoYgSvuqbwM4KLkdoyCMrq9PuBhGiyPuLjFofoFyGkHw7ZyLvbhmz8upEKz3nNHRkz1JJZkUyk8yBMNqA7Yxg",
  "key6": "4nwk72T9citExLDRf1r1rkcWZ1rJFbkwbbhPPHa8V9dBcWzB5TvygqfwAtH1wHtZxySp9gffznEdiZ5rbdttq1jQ",
  "key7": "3JU7KnTzjYwFiwRgyX32yNDGDrgh1sVD2rYvdXN4pBSqULBR17T8eMcvZQbC3KTxmXszpX967iabKoe6bFeZ2PfQ",
  "key8": "4hQ4pHZ1Z97WPu8xERigtfY4Xx3nskirARjdVX6hni1TZ4xkvzr2sb1ULHn1W4A42YDiQkb5TyW7MCKhp2rdaohW",
  "key9": "4RCNkEjn6zMBv9Krwq7AWoWUDnLyqzHfcnNRLbEwrHU7YbFeQieXbVrR6LxbL65GGZbjq9ZoUofGNwpWvNcRTNwH",
  "key10": "5FkFijcd3KnFrzFkcdZYVn7FoU8CGTyqBLr1C1dzYGswQATJciWv9QCngX7DCNodAG47CgUNxX3fk7CimwzcmwbC",
  "key11": "3NLBnZntcSAdns9FBBCiAyxKPhEyRudHbTdo1y79qywpkdySfPbVdsyHRPRQj9uJwa6TWeg9UqtMmg24pPaW9dav",
  "key12": "zyqsFbSAwWXZSeJXb4TyJuTn57pnNmVbpf434kfHeCVhDvvrYEQtN6cipWw4woMZfQUdRjEBpSwviHyzAfCzyjC",
  "key13": "3Puwmz2XXVGtk86acJ1XZc17BhaRCvKxHewsmig1VvS3BUFYbh1DZS6ED8egHJZfFaj4SaeEehjZsKEp4zuKALjk",
  "key14": "4A1graMRiANH63nGTZQUgeiXUFdp2MFQYZYAABw2LQ9p5AaN5PUbqAu7SsWPE1Pq4frDwt2DCinmohz3Hg6XaNDo",
  "key15": "51bQAvHwoWExAb7mbp9Z4f9dLRa6uMXMs2kpWY6erf6AwFAhrmnMfHNLCPLEQ9Y7i98V4qmPgr1ewyWJsbutpqbg",
  "key16": "4RzogFzMoWzon8xE4Eie8BPvRzwX9rW9WVxoyS5h8L1DNL8MvBKvv73161DJaG5SemJ69jdi6qyK7u8Ai3yzRcL9",
  "key17": "55aWzLmn5hqcbhpb5EJvYdCisoU2nCeJptxxhmtPftBMTPRUnhoE12WhsnDPQbD7evBH6hVxZhsyXneJzseHrXq1",
  "key18": "3mks9sm6wrHQ5mD8cpvpDGFf4caMEvjztxq2AFR2x17iZAMQGnkDoRQoWFwASZQc8uchmmEmrR4Cd4mxQZ9bwDw1",
  "key19": "5MYGeAbzR4EMirfWrmkhvauP9zcVLh1aBx1yezu8As3NEnQHgyb5atJ9eNwAJTDzLat9z4xuqZnwrtRakgB1ad5S",
  "key20": "3t1DqYeHFA3vUkMtSsu7D6Xu2TTXPGtMZvBw3vZZvnfTSEUQu7tf6mn5ERRp8gsPY6az3M4o56r6FuxXPmwvbshj",
  "key21": "3NToJGWLNJyHgt6Fj3sJ38XJ5rvpotB1QzwqTyozE9kdrHVMbBWD3mN6xQKLFRyTELwenBwXBkFJWw9qsnx9oFa8",
  "key22": "qnezh1z3PNg91qzj5jpzQwQaPrwrriYXASVwGapyaDG5kw3NrHCt8AhBUppdaxddV88NYmb4Lz6XhvFYngwPUJU",
  "key23": "5Q2bBQuHMszi5BaV3cCbduABJkVznQEPcxNnposKHmNKNheEEtLTQ2NDobigY3ZK4iGG1QKj9twT5ntFQKJqqQty",
  "key24": "5kb4BxCFSqFQ6aJz74MtHfYN8SjjcswHiWnw9XGAEMnBDgAdw5Tq6cLeP9ssbwiuhp2kbC2AC82sYBr83DQCwUaN",
  "key25": "4PAkWEJkkrzLS5zmKiLUaW2pkgK8vzh7cDWrXztpXQgmWisGK15fdaxxswnv9HAeXNy1d77ixWjwyXmcdyyxS9cL",
  "key26": "UmDKtjicTpY3BBZhEyQgBtu5YWunF3G2N3B2x1gaC2vBAJ2AHP8FpMgoFoRVLZtZy72HD3pibSY776a4F8CUThz",
  "key27": "4MnqUUgds5jVJiXR4KJqci2dFEhvAtxwBGJu5HiSMJxZcNf44ZEaDMLm48Qx4Bh2QL5pkXWWJBF2J6jxPC9txtFm",
  "key28": "pg56MamcBaRjeAegEjwuRVjRXMRZboS6Dp1E4mucX5NQisKy3bHHKBhCkDDypkEZwx9LVw5VhUb3pQFwQPVCadu",
  "key29": "2dybBQK3SmKGSkYU1vTuZehPGX7C7GkB7egZDxusoLEDkbyhj4o2wPSNevi9TUAH9Kyv5MpWaooNCM2mH3DgpWLx",
  "key30": "3CpaATUcKYw19qxbDu9SjeBMumWwLWX7eVb7SU8aNbPMDrK1SXr2T8dfWyUzAhqaCzZxBFbZteFfGfVqpshLGxvQ",
  "key31": "wK2WRC6RFhgzPhmeGh2PW4pkKEQvwN4roYtHoX6awE5crtYHZYxBK5DPvAddvNmByEPbWktsXMyGPxamxrf1wXt",
  "key32": "4QJS8UtoR3nk2hjHYGutbDZ12KHYfGbPWRV6bUNHC8udrRxQdphm3VDwEmaeA8bUChr6TxNm58q3fnmKYgGKXALZ",
  "key33": "3EnLh624G8CQJd65ecb9zjbAXS3cm2Fp927mEcyspepeevof4PkDyK2SfLPBk9VGqqg2jbbFuaNUrcLK27P1JA7B",
  "key34": "5ohSnHpUmsnEB3TLeAsoELP2wXyczrRRomCmN5ni7d36ySBc2qM6vr1wzH3w4vVUcXQtpLZps5TMSQ3rXdERRnhj",
  "key35": "4VeacAhPhGaMwyyKWJyQGR4SDzk3pq7Fb1eKR2yx2cWMbAAQefzuuy7SN5L2U41yENW1v6W275n5h7XxDfKWggtM",
  "key36": "2o7nvUt9HKNUyJ9j6BN9DYNrfiWg1wZbCCey1T46ELKDd9URNMfVYEWoquYx7r7oroK51WcRDmqxgq8LrEau15gY",
  "key37": "4iDc3LxwkSbrqaPqr1Rv7q1UJSjDFQ51wupCdAq2t7WJhFgv6ut1dJnyRA7USmcPaZhb7UNdyATTcCduhAKadGVi",
  "key38": "LrkMPvuKJkTV3hiLX7rXphP5f4xf2KfhsCUrtjhYcfYDScXAWgQZFaD6PePpL4GuiSvGLkKpGNF1wmCcbb66exg",
  "key39": "3o3nD1Zq7gCBrP7196QG1eCsS1ujvu6gS3JL4XzgijEzSE8uKjfAD17tDqSKmHzMZomsArrCCwNhFrg3zotnHFGk",
  "key40": "3n83Ag9n8PdkEnEepFpqaxECdVTUm28rqoDNUUFnhsD377MNQr7ekn1sTESYj4Hk3dFv4FA8tvcXjTbhjaSBsoA6",
  "key41": "2oRD9LPWQ8RJd6f6TpuoyXwX9NeyCv3w51XiRxAVCE2pveRQba2CYrw2n9mwWPEX6HnykjoppuXrMfe6b3ffgXn8",
  "key42": "5FoaYvx31kTtRt6AAEB7PLUMGjEPkRxR21F5cDiSVtMyvcJeNKcVapC4WyV5UBzRJsvnXSeZN8HSypEscMiAozxf",
  "key43": "128eioE66g1PW6pecik2mK5iwjWJT9mo6oBLUCo9isUEZQ8Yrrv7PadyqQGtqSU1YVWDaYNCjuLrGXntctofBwet",
  "key44": "39bMsnhYrnkVTA5NFaHbhbYmfZi3mDr9YJLn32yLWfxppCvMq7panZ93ttojfB4ro9XShFzygMPKxveoNDxnXZeV",
  "key45": "3NtX6VFgxiS5WDyqbvo8GgnkWXjyYGE2D4i9cZAiSg724e2zKizWCYqpJoZCBKdG9Yk1iyhEmfWfkuUrSgVvyaqd"
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
