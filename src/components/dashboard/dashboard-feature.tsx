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
    "4V7DpSRqbPMzE8Djcuyj9as9t3Mc6BHXxSCZhsMcTGRrdgqiGovzDSfibDgrt593iBq9p42BVgxBgFWssqDY1Gf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NwScdmDXLZKYEFrnZUnvAZrDHE913NMbc58Joqwxwt9AQ69QeQcHkBFfUg8n4nEb1pz9YPyJk8o4Z5gMi1Mago2",
  "key1": "2g58ea3UFyZSP7GbMCABqfQCrtSigY9astCbG9wcwabYrqMid2zLhZLiu73fRMjA3r9aiRUxZLX7QPH9pigVLB6J",
  "key2": "3CSn3B6D6Qha7WeoNx9U7mPCTbVuhaT5LA2gT7xm47Em8RZex39Pi42XSNnPngeyB7idY366TmwUzb1eFCf5qp2i",
  "key3": "5iBjLuzSCnFWTz4KGhew6UVQ1ys25jAB7Bozsmv3a4pFNVzf1kJrc8mR6XEAmPSCaVoAfGXNax5SjrLWtQSon6VK",
  "key4": "5baMEr2wWjLkn2mBoCEp7MmhyUEFENad3LK182ay79gAE9D47YDKjagLoLa9tribCXHmEvZ1zhoEWd6u8CtbN16u",
  "key5": "55s3DzMRUysaehNxSqRchnyR3X9SjKbj9de2aUNGx3kNYc8GJcQjTL5RBu3Vvz2CRETGR7dSi4VGZYAmRYgBiUaf",
  "key6": "2Fhrq3JuFAifjHWmq9N1iLZV4BzDpP5K5VNbQZybdcVyvBr99WHyYvHoGvaTMoDntchfnKtDPsGnsom1Lc6teUD4",
  "key7": "cvR2yGCzdN62AaUWGLSF7QyNrWmSBSpRkfNPqybr5U9D84kvyAXbRquVcpYhE9VpAAseZutpVBHDizBYsbrcJMq",
  "key8": "5Bg3R89di8pFc8H37aCFiN6uHPfjtXAiWndcY1jgu5hJKRTZ36nf3XetjP65i9rcmBtBiis98JvZi2K6TuKXidnN",
  "key9": "2GPUiZwvawuHK3LxrXySEA3mCwN8UAFHNJ8fMSi9WCkBZd7TzVRtkPLqJW4bm6pKGa39ffpmCLVtascBKeKADyM8",
  "key10": "5HzRSw8uT4XLi3KeFUSJ7mi9jD1P3qz57hUuXr9MKF9RDXX2CyDRLZh6saPpQBTVc8gd5H14bajyHvnvzjctASH5",
  "key11": "3yACdvYz5LtKZdurMJjEofMTkmv9tnrzkqMa75KmXkL86vkPQ4vAg31QbD2tKSdC1tE3pj2WhTbaPc8JZN1nt2YR",
  "key12": "4qK5oxpMSPsXr3cKZyVqArwWa5Gct8Zb1MvQP3x3DkLRLKtqHEQ8ncMFfbo5xWyePq7joGQTMpdQfPuG9CqDY6C2",
  "key13": "5G3brRT21QUYZH6r8TpePj7SDXUvt61uQmvPSEhnK5MVLPQpc9Mpb1B3Uu3dkWNtRKxVzeqqKyHCBrb3ThU6pX5y",
  "key14": "58i5XkVL827C6QMJTCfhiutCSGZaozVPVL43j17KiwquqDLXGzmLx7ame9PkMhsMLc67ipt2ipDP7hyJYi82jDuF",
  "key15": "5AzfNuZDxEdXiEPtCFWS2gyTey46BvABdSarVzeMMWYDqj7PMeujmpY39v8XF2ECYaknzWEVxe3zG68NqvwRQ2ez",
  "key16": "3Ea9UKFpAEC8dYMPFbXVDAocLaJfx8BN54bhsEU89KdkGt81LNCYapNbXXzrWUCnnecUuXNRSBvaH4DagqARN9bW",
  "key17": "3stfXSSntVAbmWks3U8ifP9yhjGuaSvVP1azU8cqkaZUvckPARvXn2bJPhF8Nj33jesrfNKssckiTRvnXtgEK6Sb",
  "key18": "3eTLzT2aypchChhX4L9MFXpPipg4zp4AH2QHBuogcXPvmWGuhbu5BE2rKsyRedmvzSHPjyNRrDEioXiRDP6CNp8u",
  "key19": "66LMUiBano4k1nREpVEW67fVA3KSEKEbizeqbyVps8xva6Fe7fGzrdzj7iJpVwn61n47eS9TiwBjbz4qxv9u7Kuw",
  "key20": "5XB9oU3sfa1ui2UUKmycepHTtvYXLaZDCLtKPj5x4RQwQyTh39MimEwvSRhoVWiJkEwkmpNPvyJEiJibe3FBYYPP",
  "key21": "4WnKKdRAViwG3caGFWnaHqNQbVdYjm1xg5weyDriZWbbNEHhJFcEBmPmjmijZa1NDbXZuUfme4h9ArMmvTcJShFj",
  "key22": "4tKTFFPrEb7tT9KxkJXszNYLZfvDmQH5yCKVpsLN8yFhxpjxeWTod5BBKYyX4ptSYEe4R5bFsZxDdfuAtBLfkSUR",
  "key23": "4sXRPhnt8Gac9p9d16wh3uwzDKcG95pirqP9PhbA5atioRpLjuyL1CpfUZtdXDF4xG9fwR2xiGBMVCpMcNaMx8mc",
  "key24": "2YgYKBvDz2ooaYmqekNZ2mXdbxcAmTVwvybJY2oVpr3qjhw4oHAyVRM6b9PNtvkZyWPde1CbsMzEWJgfniayYLwL",
  "key25": "43oNbrrVEPGJYpn2VcKxXh7bv9DwoYrNgnDdbKwKmZvZ4T775sjbLpbJwCZnUdNiwYv982cfrwDo6odG9vmMk5r7",
  "key26": "25vLXq6vxmVK5pgDATQsfHbGjJXuajRLSbLNoYCNJ7S7C9MwS58peiRDud7QgCa1zdgWDcGjtmK8zBoUW2GSEdxR",
  "key27": "4AbgUJNhkZehYwdc3Xgzj4j8BTemiXsDm6FTyADmfgknAZrcmpzv2yzD3a1A3f9EbruXFXLWTZLywxcRPjc5vSXm",
  "key28": "5B7cs6Tg8tJvFyc7kDw12N3tnJNC2EUBmDwCUXHbiP4WNGjo2xPuYbeH5iQhU33bTZRaT69rmPjPmMdZZDgNYZn6",
  "key29": "3UbQ2odaeKBjFjDUa7vJox9Z4L2twU58aXqBB182a1hVQydje3FqWvCNKmvTrQmWkCW6c371JWFUh7Wo2QcXpYAJ",
  "key30": "3hwuRiHHwknP7vmhSwQaYgXixvbpiwKbxmFuW982EKsjTCfk4mh2wcc7dHCrbrHCRLVS6C79jhfwAi2BBnSJLoV8",
  "key31": "3V4F9zC87gLZAxBMyQGtDaHis22iDKxPBW3xvEzpkEAjRTdKAXFgzkSWqat8d3CvRKs7cVKoUEgX5pCfzHKYJt3z",
  "key32": "4F1ATARvFvw5UECUAnoreMDScemUmGzMztFt1r5J3t8Sd6ACZKzp3kXdkRMZHnb1iovk4Gqjjbguz6UPLyFTU4uA",
  "key33": "662pfzBrPQXNgEAjJ2iAexVf2DrNEd12xNrPuYdk8ijEUzdXpG5wURdQ5j3KQWosjuZVTL5f9ac3pPy5e681JEfz",
  "key34": "3u8tRodNso3vBx4mCi2KU64sriUwGfEKe2ywsZ897qnbkxmNrE5ksbwrqKD8vrfoW6M8RZjHMBe1gnxM83tDJ6vw",
  "key35": "49zosckGpxn5sjkY6RxQZ8xDxu5nLXAncUxz7zpn2PTHTFcjU9avYPFmFhQHwBkeUdiGE9ef3Q76MPMF1ucwnCEQ",
  "key36": "FqzJyyZyEoVj2JLCys9rFWm6ikJTVP1vLS5n4B8Wirfy5pZ9C5yRSGRAkwxG2DFMzBoujrEffqK36uMdYX27cbM",
  "key37": "5YmGBSFQeWmDmmW9mkdVE1cs8TqBsSoYfeCYjfEbPqxszX9bbGvWFdv7MochG6V1KRD9jkWbRsFcF7yAiPNqDbgp",
  "key38": "5KD8X2wL5Ug7sSoeMSj74DygP7DcPRQwYTJKU9tqgJdY1UF7e5wD5rEH8VzpGdik6qCyZcfTB1WQpfRphWTG4ii2",
  "key39": "3KWng3ZkKi19FHJW9Km7Ro6rhCieAHau4x3SmWW8N7kn2irHr2RPNHkjymYHVheaDZcxPUx1XeMmcTk4afx12n9i",
  "key40": "2tbvaDie78BJXJsrrKo9MGdL1JASVa91gfGxcCau7aLAWt4CGy5FUQqVR1zdHrdKWJNPzfQpwAXX3KmASwZAyNGP",
  "key41": "5aCbjHgiqqzgQKUe2XpYyckerKMB4eQStujwpaLpwQL2hp8zCFQ8NU86F33AcnGHGuvKLhDnQR1QHmBNZZ9SGJjf",
  "key42": "41Phf23weQ3pbjGvoPH9BcneiGoJzAw3xYU2wQdDvKZ2u3ChXZe4LwZAp7g5gymEK9Ys4jfyJDv6MkERPcJkU54s",
  "key43": "2bHGcfsUgKdFLUgRuSVgn127HcvQ6T2mpGDrb6LpAnNn4UGoWrUbaC9beJNJiE8nWuRSTng1itAMKtwhXUJk7TQG",
  "key44": "4eMjjFQQHoHabLsL9JyvzXRDjbVgDvNycmnr8RHE5TziVYQJexRN2fKUUpJaPYGRzpPdB4P7LpdLquCXnryMGs7P",
  "key45": "66Sj1rcakgyDU4xL9FMwnMT9Bksu7pC3F2WuWQgAUqLytPN9ag93ssejq8xxRgNvrpCTLGTE4E7oqA1AXsXcwtaQ",
  "key46": "3vTfZgTFATkBGovPvXFXA79Ume99KWN5rPop5WHtqiBcRGQA2gckc1YkqfnxiATq2qc3GsdAU7WXAegurhKUzcHZ"
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
