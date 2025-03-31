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
    "2t6Ep2f8hQB48TjUPu6bYu7qUEtUrqW1XhQ7idxDGeYoTCsMfCyZHoJmGXpYpzUNL6TpiwavxxLRbB98aAdb9Ysa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mXrQ8ERJUU5FHCtLiGjQqqaVc9J6yzPpLwRdxW3WtU3t9Lhhz3quTCvhE759T4XBPYo4gKcT3Ng2hbgicSeRQ59",
  "key1": "3pEPttRcSgbWAF5ZA3PYfuc8E1WcVs2D3fmXXaB4xea2J1kN47xksDYqQHBPgTWXJr845ZZsddmJsQig3E4C4bRs",
  "key2": "5XqbZnV2nJf6ZDhihquZEFth87MjWU2WbJsA56ocTGP6SB73AVKymF6R7eK8mW5oBCLNPEBfi5tcNCHm2v6WEbxA",
  "key3": "2VupXe3XyMuKBa9DqmsC8Gp1nDF7Fm48M2418bdHf8L7WDxhF91QLYFJuB2WRfzvyiVPmwfCMf1cPaeDdgkUwsy4",
  "key4": "95r6UeZeYhattNB2oB36E2zo92RgS4o5nZDnN3vXLJMjvwLzfhzS9xnvqMqizfAVzWgFV9fAqMEDtuQNW4oc9xc",
  "key5": "5SGXvJghw16YrD6gKWbocJyDbovNgZsqr9GH6zT1cKLp4SDCcHUW8frACvKSZk7Ufxz8m1xQz9p1HtQwgTMcDneL",
  "key6": "2bn5C2NFjfp4pUuKi25nZ1wq1rqysjFyXuZ3XkDPrgEsq9NeUFYMS6cV3JkPVqccoUmMe7BksMD3m3oXWJtXwM3o",
  "key7": "415mMCsPSyPKK5ih6cPHZ9iXyZtdnmNu39GT9uyiG8bCQtzXiL8bfUYD5eHBF9yXUPu3GUawfKncKaopwRLHhnw1",
  "key8": "2L1JjRJwMhY4ggqsdFJZp7yLCav6MA9ZimjEjUie9kDThJzRpQrEkSbZojSyVzQ7KYrUb7tT2Jwb3XbUuRSb8vxN",
  "key9": "4oCvuMWurrVELCGwZwNBioJmePkztD4mx5rbbCtXPgS4jMBSE5SHfMahTL57u7op34zH9m44H167aiShL4zBLAQc",
  "key10": "3ucujrozos6eRoW6BmvWxexooSZRJP815WospnSv1uiq2Dr7qiZqj4XQULTMpxnK45yTcEDdFr2URiPbYnPKxmFm",
  "key11": "4xCtcTa2c3sCVJiAoYqzJRPsyH5CkuZoMDxbw9rmFDKu46SNHwk2b9dybd2K9HPz9THpfL73gnZZ4TefN7hQsE7a",
  "key12": "3hJXksTCHezkDEjeMny66wpGDMq6t8hUNA4aVVe3PHdJgJsdSBNJexFojYZQLJzbVwgF9HBSzFYww2qWaW28mSeq",
  "key13": "4RE1vBpMwL5ah2AF2quLgUi4LBaf64EoJyThhKgvmPKHpwnAAsTFen8surNoYA4RHSMK9AeiwsuwghixehSZm7rA",
  "key14": "4SLaVYV1keFRwEqB54NdtrYHB9MxK4djTjP26FKC1wSmcKyiYtbX1zqGyhPjqPLTU9m8KnsmXeYdZGttNN7twioD",
  "key15": "MTFBa4Bwtk2q9qg2C1HLjdw5E63dWRcKTJkWHeA4NLbPGn1hnrFrayVko5ijyqAja7e2LbgGobyoqaL7hQmLYkZ",
  "key16": "8iuW3tkkHzeYAHr7BjZvUuDDdbLdRnxHrzWfrU13Qvy32d5p2QCfcbmTtQnajJb2Mj5MsKP7FAmvNfe7pNU28BC",
  "key17": "6689E6bQZdcTiZ5pugSpba6PbNkWxoMVKtWzwkXHnm8ehWC7hDLTs73QdPukfCMLqaygTWUZXe3LsqUPp2LkAusZ",
  "key18": "47fazFZCRybEiRSJuwExSbQrrxuQ82EzwdVcGfTJB3E48SUG5ErZvGxZa68E9fUBysCnNT3iC4xkzW4gzhHWEgFd",
  "key19": "65Vy3WPReDX9JC2bweUomos7Fq5YEVPe4yza8ajM5ZHQJtR7eSA2WhqVvvu9wRCsZrkLv3FKxetHUfsDWvz1Juvc",
  "key20": "3m5vmrAVSzLRGJF6dVUEu3bVjw3p5dwuWguFrEBkbvy3zG3NM434SQXVirht4r84GV556Rj7K5kTUzebd74wJKtL",
  "key21": "3w3L2bsycnTjmEASZw4k8RTwTWSDpGXX4B8GmcCrFmPqxNw41nGBtt1ECUkGqbHQL2wVmTv86M1NpeKw3zUuYyVd",
  "key22": "2FNsC8yRgDSAArWWykTJ2NWUgYdijUUAQYp3e6FuNb37j4WB43536NiBHpp14St6LLuHh3CXPffCYUYmYpyRPSLh",
  "key23": "4npSSdHuQwhBzEPgga8xmb4btnbZsyAnYAvzL6DCYoFie7TfyRT6niL3yb5CszfpLcAdt2245v2uKNqRxSP3Pmo",
  "key24": "4d4NxtvhLSv1mU2KA41GMocGe1NEgk69k1atsyZgVAM8MExegqE27SKZjrMWLUZNTdg2NfbT4TEstofdwHkAdT3s",
  "key25": "5nie7DTsP7nAiNKbgBndCduBLgybP11LSoZn8o92bS9ez4HbfMEoyt3bcngEQsP7aiJNRgtefkaiuqTsfeEQcefF"
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
