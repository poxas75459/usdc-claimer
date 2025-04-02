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
    "LHDVgBJbnBuwwFjKxBb95qPftENhmMnQVkaW6Wqo8DWjgKe5rVzNhEGC2MUAHsBVHc6q19NEov86jXpCMAW72Yd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qGvBKvzaJ3EwsBdN8CQojgsA7VLLhegLvANctyH4DyccRZEppocnrhSUKWf4sk4fBx4oxWQPv4X3xmxcQSGrBa9",
  "key1": "sahayiLjo2Z4ZHy5fk4YPTXGoQ8oBc2C5tkdqj1e9Xk9rvZg6pp2SMgJdGugV7WRq3dp3HWsM79xvzSuUM6qSqH",
  "key2": "56NL6Ry9Kx7cgmi7Xy4rEZiL4BKgCgR9RuWRneTJWjFSz43gum2LTr4UyowCG3Wco4wgY3TiH7zEDtN6reiiNPML",
  "key3": "3CR5yCVN6vtXfdqiyhTQR15qZu95oiVuQe7pCUz7g94h7oHu28JBz96D9pea8Ad1xqv7qWfFT5tagERjdteawX5u",
  "key4": "49cX2nb7PrCUDaRqoTRDba4ks4UcYPJUUmgT8csmKR9SjE1Vhg6GehRKWqtCo2R8iPpkQsWj2e2Cn6VitRSeRnfH",
  "key5": "2TLukyHW8V78bbn8LC1L7y9RiLnqEHSStbHEXWoB7fDJitqkKFghrqCtVPbU9AU6w8V6huGVAgLEbqdcPzYVQP9A",
  "key6": "5w2EU23E5RiwmvC98gCeDw7FKY82Xssy6wLb4hD6PuJuvAu1bB6Un23vVkfSRazgi1T2SXBrqW53ewmYMRRndMUJ",
  "key7": "zZ9Q5uutWsAnCeKkTjSR5HqNawp4YKPwZ5fTdgBTKW493yXsGqL2aKsehh7guRFnR5XpHHeVuonmBLPfkPJagVg",
  "key8": "4SxzvAa5J65rjKAiT6UizGkz6rQckUrXKHXqTmHi9gKguFR9ACRExbc9rQHDPCwzMmT7rGyHZwMWFWZBEMTnfAhY",
  "key9": "25ArYR3tXm6nS3PauoYeCWmhBEarDMwu1Aau6ZCL5hYGwa6qGadyUYVk38aNgjVz6TKBLE4ypqMCBAyPYPqvSeTo",
  "key10": "4YjBJW483SkkYWeWAsxtXxajxnM61qm5ZHEBaGSwUeHn2Ro2DU283KdEe2rsXFyM78NwY4hD5ywxDm66BUbA3fYW",
  "key11": "3ugyuacBwJFckDD8GVqnKXZWhqiyZcMuDP5Ce9QgmJy8ipTTdFehLdPgeKZyFLNxYVzJBAQxq6F433zViVDAe52k",
  "key12": "4p9uVe1BHRGZ4JV91ULnD2BYYQZBg6yTXcHTTggoCCrGcfZH31aoKXgWCJnRYznRKBPT2dffEuHNdQM1g1Z352i9",
  "key13": "3r8hA1H7avzB97DaFmDNRbKkJFcoX5Bm1NBGNvSAKZkXmohtkzzKBNPZ1kaa1MpaZc48yD9d1usRrKGFepbU1cGq",
  "key14": "5EiwJbBrJdZZgWQXMTiCv8CKNPtbi8wc58QoYKMdXRDWFNVsgHUnEPrJaT6yqKXBG8XTWzqtoib7wniewszwPA47",
  "key15": "3BQJ5TRkmaB4UiFFXkUK6yyywnnkDjzv6PDJQ9kyqgWhvctc1YPffQUQdYYUeDX7JiDPSZTBtNduBn1nFSbFxYuT",
  "key16": "GrhBJ3xyVWZnbXtEa4wNAfnTezAKPTjUuRZZwAohMAaz6DoDszD2yBmYtXMJPELhzfYLm5WUjCXPDv2DnstuF1m",
  "key17": "27SWrvdGmav7GNyvwW6raZJJ1Cv6AT3s6EQf6iWXeUkwH3htjQpp19SYqk8inz4DGHyaCkqedVx4GGmmhLVqzpdw",
  "key18": "KgrssVVKBDHr7SZ1D5uRyfPceR2mrjbZEoqcbQKKURimRqmjztmDrbqkhz5xGd5JsdQexvwCd6FerXSk7yyBz4j",
  "key19": "5YjaAjLun7CBTZGZxx5vkDvypUmm8MdmshguSAJwoTf2g9znmGuXBkQThU6gZugeCdnSLz4Le9KyVtWaX8oqkdJH",
  "key20": "2a3VJUHarenPdbR6SKnft9rveYMegsL135xgAbhDnzVJxwQR6R8iFQAruPkcY1vPPSzASc6oTx8bYuxkAKqu1LvP",
  "key21": "3FJWm16FdnaTZmg26qLjYzuCp8xetSZrbqvWECiV3HpYD6Ycs4vJNRQWgJcQq4VPytkMjd2EG3CuGzEEL9PMnFmY",
  "key22": "3jZ9ZybZDghY5wtcHDjGUgjKXaB8QCcN5wwf4K5t4yQtRtdU28Y2r373Kn9ZenrB9wYiGpyi9dsXCscVub2ey8e1",
  "key23": "29ufQxks8MG6StzPjNr8ZuTk7jLKjHWz9FfX9rFL4DCoaGCx5iMpLBCBaPDjPy3eCTHmYGNB1bBnrp5rpXGib6zM",
  "key24": "5SLJ5CNvmENN1qDR7iJf69S1VW9Fcx4sqm1aHRbWmg1p8mkeYWgipzWNGqd7vZnuLc7oES6sZjE9zSmJyRvAwPke",
  "key25": "FoUVPSuypB2NF32tZrmJ15pVZmhE8ZVkxqKbGCt5rrp7AobHuETQ1SwG2EWJEb758A2u1DaE9VbxgQePEbxX3Mk",
  "key26": "2hq76Rs45ekUK7TtV12Qpgd5WS85zQej7PDjccdP3io6vEBeb2De8SieFjqGCxTFizP3RCA4YAWJG6fGNU3pgXgM",
  "key27": "4hes2GPkidinHGFadDqKa18Fz7p7iQAWGvcAxVxS1c6WWD94RSRjU6VH5CMLBTCa2JSQbmJTcLqZiBqoAhMwjYCU",
  "key28": "3jdbaeZciEEpjYyuHP9uZtueeKh2fPUgumg5ppFgAsm1a5EoTuaS5SaLoa2eGafXhatJN5feKKeHazJtELybUdE4",
  "key29": "4Ks9ym9Wc1YU8Rdi9btNWY5w4KtFFcPYusABw4rMzzUiCqkBSLMg1WekDxG9N33sHVF5A5t1ZNA8uusREuTbGtf8"
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
