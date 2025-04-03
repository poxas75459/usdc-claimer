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
    "4VotC6dbfmjej4bPF2ptWKR8MDX48tjoBVfcKdrHzh5drHycaAopbBgNobgb79TshCrFVmDjsxSMRSenuBx8LyoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ASdywggWcbFSoV5KKaNb9jdvnVP9tpGrbKoJSSgPKGJGE3KLzm35qLnigtDGPXyTyL6CsHr2u2VdivpRpGeJVnQ",
  "key1": "27rN3bHuTRsUWNFwcvihB4BjmGuxzui3duEnZ5aHBfMggQ4QiY5THrsJJzejXyLpd7U7tDr9Py57TD5YoqoJzgUv",
  "key2": "r4ZUq76t9HzWp37rAmnjW2vZs9hZUneV9QJt8zi5aNLJJjKYFEXoa11HnojpRwZsdijAXUFrdKNrTu2f4BgGBQu",
  "key3": "PZkg3AhdvGRWeLNfdwK4GKWosnpD6Q4Mf2hnuDzdnxDAMmYPCscPLBC8DmBT4DJkt1UM8MpCbeB4miX7fHmcwFu",
  "key4": "PFcqzBZS6adJwPwsYznW6M6vgtMEzqJzR5VvXoUkn2RDGJKaSHZLBsUXzQRCFg5H2EMd9i9STgEbu6z7BSpKpWm",
  "key5": "21JHi2wouC2Uf39fYHc9nfNiQyXZmfmQmyD8U8MrQuNJkAQAVrdgidKJabDRPGFdKgTdUZy7hxWMm2usyUk2NU96",
  "key6": "38yVn1qLzbz3d9u6wN1cs1CxR7taY6kUMLCCjHpFGoDa41F9Mde7xjebwJaMZSCM56Zb2tb4DVYzKyLbZCoui6v6",
  "key7": "2E6vdUjSfGD8WGPJ6npmXX1BigVAxnN1qGM3ubb6efzTx92kyeHg1CLTDWCPMTriLHkdmuBjwVUZsg29RyuAmWM2",
  "key8": "R1ajB4x71XWdy4PiD9Xk3Y48PtN8e7oosoT9YPzogGqvVjuU4aCceppgNhV5AKBuaC8TECymfYhWYgbLxLRv49d",
  "key9": "2WfXkeVXeTeRUfBnSurhiq263xLfRQ4eLYtRY7f9S6x2dRGQ8eEMQMu7JvzcHDvHjfbYg1BGeca53jpd8xsbgwon",
  "key10": "5snF6TigUZtbDvnd8RavPgnCsN1iyJBLXVzoEMnH7EGUjTupg3SRZUtoyzJ5AkB8i3eo8AUvXh1b2pZBtZvRtpe9",
  "key11": "2LGAiRw9h9YVStMj447cCvRUz87PGAUAHwTPbwZ8r6wtNhLXhyCTGWrH76sWzRDfPJ6CXaaFbkU6URBB1k5Lsev6",
  "key12": "34A7fPbdK6MXFiui2DP83TwHVZftJ3RYKn2otE1HEYokEYJgsnhfAPWV9afpVsvCtcBfLXEgp1BYPPryoY92d3FQ",
  "key13": "4x6upjDW8NJnwVMoYxDPYirueKcRHNTsJpjy924c1x8BoxGAAqtKdmj1M1Q3hmfFnrq21XPwttXaNJznM1WWZ7eN",
  "key14": "3kwerrLp3hGYgkNUimLobifj2HJsAEyUk9wpSTu9yczWmMzk5nz7TGCvtUvd9A5qiFjeU2HJHjgBrWs8hHeGBeuY",
  "key15": "CPYohu7p9ed2MMmKwVDMcBeXr71rZ8rGt3rDAuTYqsiZQkSv8xtjeyeoaLpeJkbKeGWSaM1i2ARwXVzqc1tW2Ar",
  "key16": "4oBPdXy3iF4y7dswwXtS9GBWo3XE1rcSSrfv1rwVVvV472RWFfvYAMcmkJXk9ojgEjKzhykJdwk7Bed7xmEXHvXc",
  "key17": "2bAV81g652rv74yEprmRf2BDaWBtazSYqd9JzoeedRVw9XM1LLujFYLtF6gChgV4ZP8LcPn6oooBoQZEZMEE7FCu",
  "key18": "jh913Xd9rS3m67ya7cJcJiyXjR2KorxzBNrxLZJ2CfnR44CZB35ZMm9pm3nHyKoxFYti8gtt1okSP6WSuBQK4Y3",
  "key19": "4BXuPJWm5WuKjzfpKB99p7Ds3Df4YLVubEZWjvFQofWAGF31cq2wSg9MjXagXsfDetZUfA9U4Y56A5fd4Hw7Hq8H",
  "key20": "5Ep1hzEztqVw3o3dBzsatg6WtdY6QzqE4UoLUv7bNPc7CJSRd6W11qQtBzFehdrVMFrExhMoYG8f8xUagFCZkmB5",
  "key21": "64sg44SgmVBGGqACh5YDCdSaB3mi4C5wVQQJdRgfrtfMEM537H5ZkU8cSP8TLfyUpTP9zhUQgxa93KA8cbDYSYxR",
  "key22": "4UQ3LxjZTh2w3R2gtACd8nC7zdY6iir5p9C5XzXeKgx3u7D5keZg6vzZQqmAyAnaWX21VnUiTeReS9t2yUuo36Hz",
  "key23": "2PXhRvxbKsKb713LLJhAj2uSyNb2cRKGX7YsYnC9Zum6hX7v9pjMG5obQbGSXrBZAcmdEXFfytTGPtaJfAUokLmB",
  "key24": "4NqKt3DZCNMsfhVTSsNtTtquRboTnQGjWzFyvzwe2LyAnbLvBXs8CkFJ6kXHUwMS7JiYRTX5fw2HvUu1h3Q4gLte",
  "key25": "2LMS3JBA3iHsNVSmhhPnC8tckrCp1QxPVUTeNXPv4XarFct29dBx42V2QfXskkk7RikHeNktWYjCt8eAVqFzx8N4",
  "key26": "4ciiWyLeD5L6mqQ4vkYNXN5QMCsYEX7zx1LzEJivaD8xNaT35fvzcJ5gR1GMQKHfCSkWkVAs7iH2LYSVoBB4qXBb",
  "key27": "5nbjZNrd3YprHZjVHHeFZwa1GMEfESm2krdPDtA9gYmkwXHXrdVfAjad7h3E2YeLvadtQchtPJ7ZeQs6c9JcMGnM",
  "key28": "2iNgFzQvYNajPAAdCi1VzKJ9KTooVj2EZLn6cJM3YQdHRZV9tyvtwftULkCaXUC9LfMnLReG2CVCQVB2bdBvcHtR",
  "key29": "2meEeLHoRaVoZAYg8RCSu8HsT3YTRhyKbfLesZC8UqCR8giT5upPQbDnZt1PcwNyskT6fNPkEB1WCQaVqAxTGBbj",
  "key30": "5SSAMAsMjjSn3TguWXfuBpAaLWVzYZMgrEBLQtE9MgJXp6j68nr6aZEC7W2fMsF1f3j8Y7viHGJQxEin9dKPHKNh",
  "key31": "525hFXeEwbySFRosNahNdJfR5SVj4Zj7MqQhinjt5nHyfq2rZWGnFQ5KpZevohNrMKqSjFnSQQ4jhoF4crESxwU9",
  "key32": "4n3B1wvEC57bJLK4htdYG6TSj5bH2hkxotY2kszrVkak6FFYVTH89spVfHvM3Np3m4PPkHEaCzd3zZb83BdJgqpU",
  "key33": "3qGv4PQwvsazAGg6rZ7GVxmHxbQiiPHaam6uvdGmf7zc2ESwgfA9t6cW5NHttrUzRZike68am1NjqC61Nxt91Awj",
  "key34": "ZKAu5axNjqMuSDcQveYxUWgE2ynFmZBMcuBWKSWEQVjAvCTr2Z9iDyfNbXc7Giq3zg2vCKbEdVhs9aJebmCR6gG",
  "key35": "5zuwVNVXGnpDq1UUX669YLcrTXhqgzTs4f7z8eVQcJnq9dJXoBRgGUvsDTLbEV2H8drossWJucULNyWNTDt4wQQ9",
  "key36": "3cF3y5s9PBTrAJWs9Fqjod9eTsTJE2oEcjST7K3SX4LdzgiDjXnX5ScEJVAKifjHdYT14y6B6ey66SZjsHi58PkZ",
  "key37": "45kM5ZD49zpeUx58SbJPb6zrc7GyvAHCrFay5EUyu8228pCayoNWhfrxE8y7yNysNB5pnRphbLdg1dUzkKVo581r",
  "key38": "4GJ6D5b6D15uukivfqxZDDrdbweeBKVHhBUo68jWveDL2qEK2pQvJ48PnJ8mdNsa5896Q4BZ1pf8eyzSXqDUEBmy",
  "key39": "5Thmei6a5kuWiKq588r7DXkatkxyNZgTxnKWDc5yvd7bkUnEtWDxy2HpXTKcFC8tCyNfL1ANTtJBNmSK8TWuHvQd",
  "key40": "tgtHtcQYJ45t8y58dCBD17wMr1uugsvEM8E1xDb6HvceQkYHGGrtdeSQtKTXrDin5K7c37apr577WNc24FEiRFo"
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
