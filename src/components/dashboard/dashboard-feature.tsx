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
    "2vhFg2fqB77XNP5XHZdTBj1DpGAWErPBmWLCz8TbSM6mD56A4EssAYKNycNVwE7PjsEKz5nQZnvrmyZKFemjwdcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ADWkyzLuX9ufRY4ujyCZyn9PgkYDNQkMLAe2sENXSe3L7LYN2oBdZQQHK7XKeJGp4Da86UsLQCKsSNHcrrg37JX",
  "key1": "35ugx5M6L4LfmGNYGLidui3gcPFrMwsy4fXNF2xnAWWukqMQNQ93cCjf6qco87MfqRKBTtQL4KfQy7u6pGSunqcF",
  "key2": "2WKSocULmWPmRwqgYwT65z4JLnhTY8ft9b6fDq3fnZ8mGD5zjrrz92Ta5BPfqzxXxdw28aBvJysTDABN7ictWA9p",
  "key3": "TeYUF7eECsWjo6CavRxeDizss951SJSFmcH2SVY1Y7PnyXWqVMaDfah2jD4Y62T6QHSuqyxWGbfMFyoTWBSN5on",
  "key4": "5ZLLEke3qwK6genPkUdA3RTBicaWCqKsUjD2N3zUHdZps9hB2XoRd29mYYQYPb5ZMgMQNce7rKWb4fwmAz1YPJGE",
  "key5": "21si35c5BM16dFy4dWAPJC2yKQKGoikq3kyZ5xS133sWh2uFVrVeEiDAsc4RaYf9uapfkhcqrzjh8vtMiWVN5PxW",
  "key6": "2PTgsTeYBGmgno8i1HQ1PtaWYm9JgRumxTkPUPEUMHwck5FJa2KcdSMvXram5nm8eLPETRANQREj7AQzLiCCqZuC",
  "key7": "4nfu1EXsHDpBzXqMgv9oUZWVzL1dT23yqmDbJJnoAgXRLiTRYd8vxWpdnckowQcn4xSza7MFDtKygR7TFfppxMg6",
  "key8": "5Ho5hSKhKkxN3wzVbJWkQbYbrEHMqt3PWELhXinBW3LggSwtVayGQEUdZKUewgeWXyyDaSLCrLxhSqpa1dZcLNi6",
  "key9": "E7ifwQ5tkWsENM6BuRz2UfTgt1er8VDtdtJBPrqkZvL6p5LYQmQ2hmWGWmvJmTvh4dHAMoFeQ5C2wUNAnPzYxo4",
  "key10": "5iyahWfGXGY1Lp1p6oXq7Na8TUTwpQenBr7eXoj3eWsG4sm6zcrKZkFPYHozcTCt1sUzAMHUJxVraq9RKRii1vam",
  "key11": "5qtfnepFahun6XrCgQLxzC7bYkEstcCdDqcTvMzGVv7VcDqbtNZ1C1HrmqKmJh1SryPer6HGe6X8NYwSQMKQGD1K",
  "key12": "LSXyTCDCcfB7WYn5sgsP8Rfv8MvZwUMvcyCQ4Q3ScgwekrKrYWiheVfen3wRB8qnX6o562KQ5m15ZJ72nFdhwMA",
  "key13": "3JsQbJKYi9xGr622D2mVaMcR8oSNf6H4rhkZMV8Pg1SpNT4UvCziFEnAu18VftAiH6HjsW857PV9SBz28m97hawB",
  "key14": "5ofCrgtC3rm2XopqhRHAym3WjekzGzdoPLFSZcJjApZ7Md2tyeArFaCndbpdUWVd88BwFogpoP7tFQGharnJ29z2",
  "key15": "zprSEEqMFWpKqYSNmMoBRrDspxuwUzdPpK6h9ts1ULGdh7Z4JEGUdjYSRkJUvtLSTySQChHTrydguDNfymxhR2r",
  "key16": "2agYJeZVdFa1V9ucpU82jePGjjAPpcFM87ds3ckLLBSVYT6vLqj2omVqnEU3k8soCZFRPUswi8FVR5TKMS6oKRGK",
  "key17": "4xoLvQ9x1AQByzDZKMrYkGe4YTCj52a6uazwHRK6Yjv57YqEypEJCS8Tm9bKvsmowaHfsv2bxKyMbNUbnL3xZzCk",
  "key18": "5f2wqJvnpVQEzi7Sii2QP5HkxApHfoit1MuN8kRi76zqFk5QArwWBTsCjfvy7dh7YPLThciURiPuMvaX5EihUbqR",
  "key19": "3YScvJ9M9aKeJhFMH2SWuMXK9F6dM9zoABYwv3LX8WC3GGTPvbXXVii4XaSxEn9G88Kq2RSLyhB3z424sCG4YMBG",
  "key20": "4EERys2StrjY4GiZpU6RyhsufrF7zb7wcWQq8C1567rApZtFCW1FTJWdSnTkavfDQyWfdp7kzsyeBSeEr2H26fAG",
  "key21": "56AbontiuFxhtEdDng5etJQ7igArkUvqeNc5QD9Dy4D9oqUgMHDYPR71eiPskf5BSZNtRouQXPPjmuCqNz744AUT",
  "key22": "2woBGWSKFaz2P7q1Bbct51z2kv2Aa4Veeia8CmK3dWrbJZuUFhNLRyjKDoVJMcTAy9i2WnKHqNJajWuMwdgCHSCY",
  "key23": "3iH83YPGFU6n8ALiWAp82SL5TDWqippTJieERLs35QRFiu23uECmDorzLeQK1KfebsQAosFEShbgesQWQHU8VwaE",
  "key24": "5LKCrG5tGYNAhwvBMsDhCA584K9oy7XGr7W6cb5gNFZUTw7Q1DPuSTJLsdWDbQVsmwUc42Wik1iuyJXnhCmsR7gZ",
  "key25": "5k6S8uyyVUkBJStCLyfz7ZGNF7T6ww6PhuhYErFMz2jbFVA88XRw1suQodUzTbx1geQ3uaBx7EzMPDcDAquQQfVL",
  "key26": "61FVpuvXqZ2twzek1EUNZYnPyx26Uem8G4ynJPwbFNjLD5k27FqnQxxFU2zgWoqPyrw2mD5rjk8NFgG7VFa7Csy3",
  "key27": "4FQHnMebPpfrPfQmeSP9r5fFXDdfWFNd6jvRbBDSM2e8bb47fuRLksti2hG2D2zWEJPjgwJSho9p1KHKYKAxsvz8",
  "key28": "NAsMEgJC6STM15cNQGskBcasXUj2C725BLv3yz92RDHWHPUjVApNp7exZdovLgg113kps7VoEWVtEJqwP7r97UR",
  "key29": "uuTAG9W9MrNE71MYqG1UQgT4X57u4TqHS6LWff2A8SYJCfQ9qRuejLKa4dhxagRuh8eqbjMgfRsoUTMXt5ShmWR"
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
