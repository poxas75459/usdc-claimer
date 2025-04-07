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
    "3wWzwegUxTX2r4pJwNX8dt3QQSxaVMcTq9XMectxBtjz5c9mT2Nointq5AcjdA6rg352NRYde82ZXzxLifDdyJNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jGfKBB1nJHVpvr6AnKmp5TrqrxMJVLUV3MQYPsSjxehAnAbGxxw52vY7BovBNUUyPMvpcEtnea4Qzi5w2AtoH6f",
  "key1": "fP4fw7fMi37mkTYDHXNoJ2ronYdM5EiznkX391M7BaPjGqQCaon9vuBVhtupiSvV5ZQEnpW447jaLXRwL6WFQxD",
  "key2": "q6Zca3NBcDUwvBe2SviDQHyMv2VdD42VDt2dHJEv96jxdeuv2aFDz5bwEPnMYyxkmGdLSfoyPJrJLJYAEP1JADw",
  "key3": "4qGg5u6VoT9tktp8TuW4LbpLyQZ8FDqKCbynYkexd5X67tWZbKeuKisgGTLTUADLv5wjrErUujQNaevCuXywsDE4",
  "key4": "4NF31w886S1JYnMCWFBfB3vhwpbWGyfQoherb1SDXUgbCEicaVkRY5uenwbDrAUe9JMmnm3XVcRrxTE3aksmScTh",
  "key5": "4sL1VCViNW1Pta1LYgDTyXbjz2gfGWNSeNJQ31hJDGAgTtth4GxMU4a2ipt4L1cEmKGNdV4dEh8zeKz8LBq7NUof",
  "key6": "5Qn2nnFH28zkGLuCHdANbQVLs27r91qPamdRHZtdWPxdYJnKLwXLUefNDFm2stRcd9WkTz1CUiAvioTTKBv2WJes",
  "key7": "kcJohC5oUb1UgbHHYt1R1Y3p63J1PZbtdNPyxb4eGEvsn4YiQbzuVLxgBuCLbyi8uJC4RRMEtDTbZrAjAL9ixqA",
  "key8": "pJGgSDEZZkZjyR2VkRHV8rS85u6HhrYr25D9vLQ8RApVHAH7m5u3e5LKkoaK43MCZaU7Ybs5g9Z4pC6GPotpdg7",
  "key9": "39yw1gTj3Y9a9ic2TNZJMuUsTRxAFyQ7EQUcSaaWpscC23RB6xb4y7aEToqFRHN9fVYLKeHnDYtFvYteTSYpEQRm",
  "key10": "3QH1NUgLWqw25s1s4zcaRpp1RanBLPeWNzyYDBBfwiT5dRR3u5yQgcVHbubkvjS7GS6KRcnAJDKTiDY3AXHJWsAY",
  "key11": "5BAyPBKBsQRU5Ctq2rwVVQiQ9YZuDUDmqy3n22eu5B25q85UypSXHarGg7eVEMM7fM2hsNiNR9uePjMxHE11pvAm",
  "key12": "4MDqbTHV61aNVrWTq4CwuvCX79fmjW3Efdi6tGc3dsKtUpSTQcW6BYVVwBn6tf24qwrZjKxj4vUakgxYPkE8NDnq",
  "key13": "2GrujdtkkeMEPnD8D3PPk8tAFtkVQu1WmWrEpzmLt4ooowASTN5tzYEmRVcx88R1Eh3A3sFUdXURXsmAJNQXchA3",
  "key14": "46wj2Biy89eVm81ZWnX5qnpEHXBnndhtQGf43Vdh1Gvcetyrdbj84ghvpKdUJN3uLegxNTsKRPo3mpovBRsQ8oH6",
  "key15": "4Rara2N2AqwZnjCRzaJkAgAc8q2LjesY7sM4C4bj7zLEkMYyc7bNmCAgBSrA5shYSc87ie6Ph94n1W93RRm3yw3R",
  "key16": "5XAqz6k6HQbMHFsGMmBoMY1kCap8vjyHxFF2kXZHHAxAz1gskysNgjRbDLNrYbjujx7gejHhN3ggKdsnpBSdogdb",
  "key17": "29DHjQCzNKaxeueXh8aU5XzURh6NYMn7ZDPnrJQQxpCuHWrGaaX2TnY1jxNE6R95sDxFgRbdSnz2Po5ReE9HKE1P",
  "key18": "2WPvpcsMxzpw8Fu1xJKWZVzU6ZFgTbMTfJ86RLRwS4xpQa7uZQanvJRbE2yvJGJnY2nrTyACtwTCd1pTHTrwCvCM",
  "key19": "4YBtivC8CgdKn35FbwvqBX1Y6KJvshdAfTiTTvb9xLcrsDkkLypUYZMeSqb5BumF9q2uv98XVDjCDgiCq8RRMxaj",
  "key20": "3A2b77BmJTshtNbQCatrnveQDTUd9YqpZpc72VV5wkqNhJXhR7WwA8G15gP5nyoFNj5iyVEiggx2c5f2U1YTKskK",
  "key21": "W1zHDAPjtt7At1LvnC6J8pheEEXqY1P4Hycbfe4a8WJaz4ReDtJdPqtgUS6URTBCKhZYYFqKUjnFMK8JqyzNSQf",
  "key22": "2srZgQQeiD7sLmnDfTjEkiEsbLLp3J1xHnSEVUmFmDBbTnmoZyTK7HvZJCMGhWS7ssNhfxHi5fqz2kur3Fyj5m2c",
  "key23": "2XQBUCUGHRkqW43XR387YHPsKGPawJcT1C7EMMTr4gFYo35EMbWPiJriScezsShy177NA28hrtNCop21RdanxtkL",
  "key24": "4CwEKkvAsRrdUvYsA7m46WWyPHBdFdUCk9227Q9EA1vHucKAZxhGrbfZvHJymNgYKesamkeWLCvGBX6E6L3GEeaw",
  "key25": "VJoALygFsYTVjWXA84MNaCUqXwmtDhkakzgtfV9HQieo3ERxoX5xbbsAtZcjAKB1rYSZNajG5DyuJpqSBWDKHnu",
  "key26": "2vCoJXAr1JgbFSBE3GhGtvARzNdTuXVWLdtTQtfsCtTCS8ZywVDq15xKhMnGAzFz7oAAT3hW3E3kzABuVCmqeJsV",
  "key27": "4zovajRTzP6hFeBys4Sjm3q4da6dz7WoYw2oUDMUxrihMeuyd3a3NhKLrChGSgtYBdBrBeTBjUBzz1NfJyw4Mpzr",
  "key28": "2qWTD1qYRnx98fSKfNFHpJBr7jT38SLLph83zDS4shTyqLZGKacTiKY5EXbzrWm61AVPGrJb9Dhut9BiueWb6KoC",
  "key29": "5VfMGPwu3m9s5GEbCjfYYm2so6qDvMxzWVfVHYZhEHaMFb59goKed32kurh8kmHTmu2v5bvXR8AMgNYFrDxRhxyh",
  "key30": "5ANdNoMxsAqVtcE1CRsesJd6TmFHX5JJxRJrQhSdvEcvfC9wNZ4wo8Js6rBzn72pmCGabmRGSGkfuvPiQGw7tL32",
  "key31": "3X2ec5DgQxyW1xWaA12VVLmLs1q4z3kCH5hqcTzKT3uHjdz1AG4KT4sw5yR1cXMaR8qDwCBMVKLnkKFVgjSBaPxG",
  "key32": "YhUEiSE6SC4WFXUgsoR3hSRGNobJTtua4KnUAmxbAVUzjKupUmDdNoEKPWDKWaCAyxf3WN3h7TG4K3RW46e8f3z",
  "key33": "4HXZmA2AoQ9FuG4KXtQCMWnbM6FUEqAMdV96TMx8bwfpxGLp1eiRh8pRiAZDWZfB8nZBL5FJnAyaUrr5cUneKTob",
  "key34": "v58K1xA5PRNXZDr1TksuoM3n56Guft7a7fujn87CtvBoREa4qkhDkDmdoGcUzbwKYc8Pqm63hUk8rdkjuuAJ7jU",
  "key35": "2SMtRGxp84ZTMmjJpvDiDnCM9scUqYCmgmrM5uJH8tdw2gf7HNKCgb1SEShuf6QjYPYw2kDCik9hE9gT8FjgW1rn"
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
