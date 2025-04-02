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
    "a3xbA7AEW5uTWQUDkZmMTUn1Tpbf6pi3oXN1JrBBV2xHkFHMZUfGUz2wtC5K1w4KNFADqnHqeArGRNE8jfvsmo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xLe4jDTXYYr8jq4P7miMS8eLA19LU8JMT48BZrVvb3kW95KG2v9rhzpr9tStqmLdS7M2tiai1gqT6jGpXWk6yHm",
  "key1": "4Sz41gjyUpcoAXcLQqwaWfqgK1eVXoN7MV931jmMRBoNHjkhrrSnausT3idzJRH6q13Rt3xb57F7a8t4GxfjfAmh",
  "key2": "3wouos3835AB3MdZX7vreHzx5YiZ6s1GJg1Yi6jQ2RjYCBRSsRuTwbZfMjWwEfh1AUpAsMhz84DQs9GhMWouAGUF",
  "key3": "5YAU69BcGsDE8eisiFQpkB3UmHxpxahnY282b8BiV97b4EDoEjpCgNHM7QnPHUK5DuC7fhuAAhJfN9r4ZKUWVcRb",
  "key4": "2JyZRaVMVyiUAW2khxysWnqkcaPkwb3vo31ZKrNkKJR9J8xL88Gfz123pb3BfbDhKkCymBwVmL9daCgNZ2dxSKNi",
  "key5": "65WEMa47DtFDtzRKJNX87LR9v6Z2E1pmaMoyMhepHFHKtrUKsSA34pSVsiijEeUMqsH4wZvH1JHD4WXhuo6LXJ94",
  "key6": "34ZKEMR1XhkPmXzkhdFVbtEFPXL2aAtWRd36wUp2Dgm3HPTDHEYnhaHpQ7y6VH6YDLAVsQjWAjP6iDaGu3QZxkbo",
  "key7": "2ogLJi1DGmau88dw9d8JCyKEjAWTMWzcL2a2b5wW6sSk9wU5omfCtm5j2P77waizWqyY9y8v5Yvfja74FSmEcrF3",
  "key8": "4qhPbG2vr9PhbnNcEEr4wgqKbSVCUN82CfeLY61YFG16AShympjQyEaTUA5qJmTj5jjA88wyqzYQ9d8TxgMuWS2Z",
  "key9": "4xoU7GYg4KsDZjw3rs5X3WZSZCMGVhUnfVjfpyfEYuSzWpCG9gByDjECfRzLmg3b6pfH5PuRisDSv79ojGLXwwtS",
  "key10": "4c477pR3SpRT2RN64YqtaowbNB1yBnzo1UyxAXfTHbZNhvDUQfHgjNHC9g7jdUvs7MsLv8dZqYREpK8Q6rgTm2u2",
  "key11": "2oYzi2Nw42AEBEP896MSHcUPFgmWoYZBsHbqKTkCvC34dizCL9La3vyGqVWbGpFTDiPQzyL8Pz6KXNoGryurR26w",
  "key12": "5UemRvLVvZD7gSebhmLuY7sPTu4PRwGEm1dWdTuS4MwULk26mWJxUjGHXNN6ppshQmfSFFPUdVEMrdtNXSMMhDPP",
  "key13": "5ndpnDNBee83aWSpNEmoCnvcjjFnvdkRoRv9dLc6gWXCX5bzQGbXCQrAd35RpXPEqEmUYNXr1vaBLzh73XsDbAm8",
  "key14": "5g9ZTeQdSCA5ntFRtiGF4yKiK8yzDK24CTs6shFteziwUBnaAcY5a4pCUMrvja5pXbyxDPxkaVJG4QtZFL2oBCxG",
  "key15": "4MZM1Qg39RdW6QYHCeYVCiX61c17brLuu95SFW2HmxvdVpf7oD45emNDyAeicQ5G4MLshCWYg9TFdwEuZN3dWcZ4",
  "key16": "3Cj97JQxhhU7wk7ABMbmNSsjxrJcTxPFr1ZKtezNq17T5mHbtWpjFk1hEGiSxvRAeuCsgYym39tVtEbsPmUNfpqX",
  "key17": "4nb7c3mWTJ6pFcbQMNR8ZtSUtWW5TeHBsUpRKw1joanKifQFZyo5rzLWxCg7ERTFtdLyNWTFgoQ6f9kDdjRgXCn2",
  "key18": "46Ye7G5fzE5vXzf2U5k3MrYrkCpHPkV2grjnzxxAfjiRpW9mpaFEtxxy8AGckNJvCTMzYmpyxAuNcwu2J3GS9D7F",
  "key19": "uD64S3e2cyY5j3BMRgHiBGkmmsF8TNcuBLSp4um6ZVZnZEgBDpizG2YmyH8FHwqgnHSkpcQ122B8r6iYDo7D9DN",
  "key20": "62wifzbLYSf65nsE9v32uxejjeVR46L7YqcJmEVgzmR3gPx6jsQaaAi4mLTBfrKLyTP2u6PSH5TE9nBTm2pjVPmg",
  "key21": "jaedXe7Y2jCMsL4xX8RYRJ5SXWS4y9ZepRnX44V8EguWfsQrCeo8qkQ2hEcCkYMJri6aa8cNgMtUEWQQtn4d45a",
  "key22": "ttkxTh4Vru7qa2yrnfqf3LyJzGqVYjT83x8ABpeJWo9kagZUGoRY1uptTpcoSbaaFTZ74dyVDftxuBUAhKRPJj1",
  "key23": "4a5BNhDNebpyhyVBfCSmBp9T1ivxhcggAvB3CuVnrCt4PMz6MMmwNHzApJcuCcQSL5QttjnatbCVLMEZvd1Zp7SJ",
  "key24": "2N7Cy4DeKuFkip34ufpkZsixs1vmVqdZDsu2sJSBfqfwejSCr9RsyWqsZ8Ga9RyEBvKa4M5N4T8b8mviV46zmqyK",
  "key25": "2LM9Wab53mS2zMEFQMX2q6UyrNhJTFuWUEYCY5XLkN31geN2NdeBv2rLkBaGB2eh4vXUC1rZzaDVo6Fs6DHheqex",
  "key26": "5NMtakTW8yARVFbvCR2cWHisjNYDaNA5PdNStp1UtGa3z1E7tGxSkC9aSnesXCT5vCCs7oiMsvZ8ftWXZjAD87RC",
  "key27": "5cC5Q2cTKsahgeqfPZTxFFWhhv252CyV4N3NpssKU87sCMddfkT3GNPyHNd5HUVhCKfsAzvFxBHBV2aDimiAFQKa",
  "key28": "3u9CjMrUoMAWmYHnhd6x8zGGVrGtdwQftj3PFdTH5Z5feTMWJA8gbFErH8pYD2wBntRpYvjdwGA3CipYmx8TpD3s",
  "key29": "3HvY37UXSTyfs4pexPyepJufQP4MhgzHUENQ7UY1oGkJEYWAqHsFZED5ombq8cfi9PiMtyvRq1cDDoffLnCANSR5",
  "key30": "2No3gUhB5B8FhBEJEpXoDZKhXpUrWcDd7aY7LnVFqvn6BEj3jQnPC3gR81fKhwRnDs48M3EixHNzBbteh8EVrHka",
  "key31": "5TNSRub6FcWF6ACLf2qFdNFnQoh2vsfAYEHbDJQ8jCpdSSxr9wRcnSw5d4K6t3wnbdGRP2G9zXLegod3McTChAck",
  "key32": "2NzcMTVGxno9mEEvww7FANd3E2ve1DPVLvwQM9NqVVrCNQ9wyTVjZ8QYgGbnvaDrvLsUS9rL9D2ZmeHkszV1Rjjd",
  "key33": "2T7rpV1w7Ar6JGgB7xwCkjY13zKNmk11ryhrDzMmhYnkrx39vAC5UR6oGPRrS72BhiHG9kG91bQK435xAQfX3CD8",
  "key34": "26F2fBukh1kF4CKBCbsfcNwyzUrZT8n6xcynNeqDnr7uDHjDV8ZyvqByNTy2dU8rh3emQ4Eih7tvBjmVZGjsCJA9",
  "key35": "3o129GRjUq8UZyf7uwRcNWSaSCGByqW37fEa7frAUNTQLzmAM87icf88RuJA1Rp9WGXKDikii9xRSxcStu8tUDvn",
  "key36": "46f4udZoTkP4Xeoqynmq5hYtoAU1XtrM2LG3vF5cBRKyZa3kmwB6ohQhv43oxZ5QFXu5tULePBg7xcZe2nMRPdaj",
  "key37": "QSA3V7538eF94ZYZKKwQFCouskBVgjR3qm2TT8vWSJaEJV52ey9YNwq9emZ6jnvgudBbsUVJS76STfFcMmt5PrL",
  "key38": "5wwZCmgKkqxKuWeuzS26YkSpWxgZNVNewCmDhivd9JEx5DiWCbVJo9g5dFL9B4Aq11A9bNLCtboJTZaqwNz8Vv7B",
  "key39": "47ELoMw2v8yCmzzztoE8ciPGSdjqcesCGWeHL8RkQDtCmX2cjDFV71tHZT9JTKid5HSAmGk6F9ufcdHQqESyyx3H"
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
