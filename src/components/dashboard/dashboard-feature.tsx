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
    "9LmS6iscmyQC2BvJ6jrrF8K2uo3ScAQoQPhKg26ufYGG3koXe9hSJtKCG55mc1JzLPa2mHUamZwCa9SU5wEP1rj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n9Ywd2bs2eYhRuEawsXzQxtuUunuURYNm988DZGJWDgmugtfWVo6tSLXYXja6yo3z6Anscs6PB7MH2qUfoynTwg",
  "key1": "2iZZTneSi9bTvNeEeWiHti89vYC3rMSZWG3m3NafzAjnDuGWn97pRfwH7XwWSFtJbYLSsZ4fbJxoyooqxezRJfnX",
  "key2": "3eXdG4fUUURMyf7DzDpPcLiFjjpMG4RxJHkqXxEFjiQDQuAttXioDypmYK5u3BfUZJhUqDLwBn1jcCh3P4EgJ5WT",
  "key3": "5Q3gA5DGaroE88HihbnpQ9oxLkEohhdtrowaSWD6pAY4ZfPVqP8oUJxdqG7d4LS6j6Ev279RndBhrjJ85A2yHNrp",
  "key4": "Mywxh9cJPFUHheoEXTkYJwM56eeDmDRqzYz9d8VuphiJBzVYg2yeEbXK9jSyAguNprwyvWWMtwC8N7MW9kmaU88",
  "key5": "3Cnk1AmXgEBHAdiiDeXeGuV2zasH26RVYLUi5FqfAankN5jWQQxzFXBDXyXAXSdduhYmZCwVKLgepkBxaSG8uLME",
  "key6": "5LGYCPKSaZq6GBFpTKGZEkQfDSTNK3CEePox2uPMMR3gHTmgxyj6sCiVegvdXDbzqN6z1ZMyZd4d3rR8DVsrxzcC",
  "key7": "5FLuTacmdECTGbtVfL37DbGwoUCrbhZ8ccfReU7vGehq9FmfCBioCnYSGAbnFfeCNKsN1e8WvA31oTs1Zj1fTMHc",
  "key8": "5GJ4Erwe8t8gUEyrnF3ged1MwSRjFAS5NsiE1Wtksn8vahz9n8raZFXM8HkBoTLKsrNNLX311vgLZ4uatjXEAr6v",
  "key9": "3K2JfgdR33JA3PiAdEjReASFwV8CHPeYfQtKpnYpUsMk7YLjgMgV8yvaA2Kvv42tpLiboewtiKK7tDPdAUWbjVCP",
  "key10": "NttZ64S5LXHwAjFtFowZPFk6t2LPrpDu4BB6Za6FNB1PWV2qbG5w6q53DJMxUMS1uE4mvjZzvbPkMCKxshVbQrK",
  "key11": "8k47Vjm31QMP48jRzjPRcahRHULeevdSBHaWx9mJUjXPsiQzFBDCXknmiL3j38LGGhRXyFEmtn2k84bkg2Q5AC6",
  "key12": "2tpXwH5grWDjHcjCV1XTezm7Kb3HEx7AqaJa1YWyBPbgo951dAbxsjrUupFp1sbcWjs91rmnYd7rcfKzCGxBwaHF",
  "key13": "5sLJBQq8TWifBwXY2KYQ1n1dVGErrxqG7tc2eXqXuqUYLV3wyTxYL8vz4Quo1ZyrwXoD1G1rpkXA55RtgCHFQyQb",
  "key14": "3iBqAEJox1kHD8X1xVyZDkakBrgPXcpXYZTktTfirgFSrjwuihvSs1njXsmMRXLTve1QQZ3ub2PZXoGaVFFu9vtf",
  "key15": "U2oR7TVeMABNruJvn1mjsdKTjgZYAjSeKSgvPi4Pmi2NPmu8aC9SR8fBnUmt6TdZywjPbnMad7whAvqwErkMNKv",
  "key16": "4dRdw22jq8BiAjEmtHpoVnMLTwpmpieA9gir6QNnUByH8ZtzpqKj9ZdNkLSfiTmvcjKfB5wMvCc3GkdeCwYKQcPL",
  "key17": "5z3JnwZfWFyG69oaWGDk34UbcuuMPyL31taNdy4QKt7xKPYrFRo3PYGJfMTGkMpj2LbuQgDzhNH9kSKi6tWXvXCf",
  "key18": "39UxFESydnYHxkgLXbHYmQvW2WfkBZAYUUUzcnQMJVWbiAE47jGqSoSdWLXJqswfUCysW1VrEdA9tKdEC8jhha4",
  "key19": "CsaSV62EiBUBd7zcm7vW3QW5Dk1gYifKMkSVF7prcC3quBsPBjKWz3nxsJQfAxYQuEmYf7Wxg3uFPHNxgBq7qVk",
  "key20": "3HRze4baq8oB7cvDpEpV94EzLEjrvtkrUqzdZH69L6HPQHhFXh37wvfj7pToE5A6jKC9V5gMPZToGxL7PkzHHqPQ",
  "key21": "4L4CzU7223MBAa1BLqZPpx59Jf4Tox1evchWUCo4393kNQpZfA6j8X5DvKfiBqFdWqj6ApYqigUYjH7dKirJtRQM",
  "key22": "39tPVbYM7TZEBhTDrt3t4KCm9ZS41kRWzPyPvV6XFzWfyoqQCmAvxNbcjSn9uhyDmv1H7EzVD598cmndbzVMZ75X",
  "key23": "5nEBrEehg5VnrqppzurD3gzyBPWy13rnJcVNGzv832oU7zQmGKMSv4XMN4iEUNSgs52DYHCnEXku1rxQkrFmPgrB",
  "key24": "2qk2c8GM83PJMjxEKqmZuH2xYxKvKTmuKdYxdqkTaFauuZWu39BVTZch6ypybeTbvG2XqZeVYRZ6mEaRwWrSHAQG"
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
