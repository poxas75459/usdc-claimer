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
    "4ZR2M7t5e7D3XSeua7k7tpAiX1aTiX6J2pBfunneQTreAeKCktLfSRDwbsdCYgVQ2UFVM5HVWfdi4oheuL7w5rTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q8nbeqYivLtdQUK45hT4yaePR2ugmET44kdphWsL28H4nFsbMRqApVSSkyjJipcD97fYESwUCMSBuMDedfv2Unf",
  "key1": "5keAscCULULRjYFctwRMmVDJupkMhzUghc2kkmi1iJLnevJRh4DM2uvTAvwzcZPBiitNkJesBaLnewRbPJLczPBh",
  "key2": "2E7ZWaTnra6YnzUNDeYWLFFZudZhHTqzqQUsrmJcUd2p2rsZwtihtnNb1nJzcNWBfqSihBvEiLsSY3c9MUnXnEEq",
  "key3": "5qm9F6srHUNg4GeoabhKbW2oWipt97NCXLoPSYyhPZpaHr1SPPCgF5ZjapWHegx7wwZpwjeGV1MrzQizje8PYyLT",
  "key4": "5gJgSAS7akYU178kQscUdpS9q8LxYkVKBKuHxmuUs6m4tnbJe8pCKJH5Cs6keysPe7dxn3AmW52JHg9Dwfcgu59M",
  "key5": "2uf5asJzDhcSxjKUi7KZAgqS1wXR2K4Zc17kZUFFWuTsovxqevcQXLhEWg8UhM5B9LotpRiaHVmVsHYSjByLpua4",
  "key6": "2BtG4ENv6ztFZ7jR7v8aAbPqEiGoshwwzfcYk2rTDUWMVYMz6ieieDyNhBRh8Z2hfSEzcakPPwPH96Sp3fhJQUx1",
  "key7": "3cuRKgXSBf4ZHtrfyQz5CDfZ6CPAG7nyY12mdapKMDHpEafVJt3WkmsQo9ntFpbbT39fy4oAonPM2518tFDcECEu",
  "key8": "334gcwzQHvjFJ61dn4GemVTHoueCBojcpRuvdLPyPMr26vADWaadTLnjCdWHun9FSCRvzhByu8kTVZqSPRRBGVZ6",
  "key9": "gaTHM8tuAJwHMNUU1S1VUWbvcMTqH3Rh6fiRT7Gpmsu3zU6YjkZdkKpYfzy4hKiAVw1tUJcGUNoYNQnnMTesZtz",
  "key10": "5nmGzT1e49JcYdM2ovcseeQjiG2BSXKiAs7XVau2KAk8RqpgUKnoN4TB9SxyZjFZBekVF9nkXc44pr2Z8BMv5HEa",
  "key11": "4NgW6uQjSS15JWuFQye4iKcKCDadR3WmfE8yn4ZrqiG5dCyoiCuAMJbEtd1wsgak7g62xYbtzd1vPhtuK16uRrM7",
  "key12": "3R84W5C7jdkkkBcKiMQvU7k8ECS9zM5B8bFHuJ7M37yX4iHVENDZHFDMgyASi4pNRLiWJwBhtJMoEioG1DPYBJzp",
  "key13": "5bvBRHQhxG8VAGKFAQS9a7y3tuwrtS57d1gkNdm8K61tdPgiKcVBAb7qRL8P4Q6mbSqhWx8uPrwwhDh9EBeZpcmK",
  "key14": "5RMG1N1xwy3Y9mu8PQmpNvcayBXubMwW4duuhQKDthc7zBTX2QFBrPovLksKq243t4LMhfZaZD9PeAvxXzbJDgpX",
  "key15": "D16SUHMV38XFcqRZDpUb2AM7UgJbnHcmkPtc5JczhsQyXbDvsBoWS2M6Lfh2uXE15RBnjoCWmdUGur7eKBtt4H8",
  "key16": "3Sko7KodJ6bV15Um9tJgYcTuzBHW96VYoWotr1FUkPKLh7HaCDe935TyZM9UG21WsoVPKY9dv8f9cXr9CEqrGqRB",
  "key17": "3TRNLCFNkCJ9pTV314LNYCRJSRk7G1NGZkbzMi2wQzqWocvJY7vCLv3eE7CFNA89gJ8t3PiT3xjGZCUHuseGvuRv",
  "key18": "wqdqt1WBWKFbEN2Am2kqTnRpSrUzHJbacydwj9pqNN92Jf3UCZGKBPJD12SkyAVjKtgGBassVjxqX4wHhs7MgiQ",
  "key19": "4H4EgHN74xQvHp7UZ6T8uN9DeMwAwmiUJ6rQHVRFNuth8Kt6tYXsLULRHi6eCLPJtSovT6exsyvPoVZzYZvyy72V",
  "key20": "5hg3xzhTZ2inky1JHr8ncDgGwPzoQiVBpYNeG7dVz16mDuREFuGdq2EBGyQGkExcfQTDV5mB2d9SHZnmJKRZar5g",
  "key21": "5UN1EXa5exu5JN8XGNtJJb9b2cYTDpVVy63XG2Thqgbm7mzUS4wV5kChx9KwWGajb5sSKhVodrhbtXcwng7nTYzS",
  "key22": "51jVYz8UMaV6UHAo5JoTp23ytHGMS6e1Vn7mPrM8goPG4qAY1ME3RGi194i2yKds6UEpzaG4WJH7Wjps2gpjy5YQ",
  "key23": "2E4fdKNU3tfBWgQdiTBWqJYZFxKH6kbVUxRKGLVeMEnczzfW2u3Li7vSGZM3yfjpQN4BQ1Wy5eEymvyhaszvLGif",
  "key24": "5aAz9mBFqnz2uKzfgNeSLs68EJVwWCHghK5Nu43htYfqoA7L28YWB8dy2FH56hW6681JJvT6s9xcjBfDngDhmAz3",
  "key25": "4mzFbBy6xNqjciLCrWyugKetuAykYztuWjg3dZkqG2MeFTZ52BFFTxHheaU3UJkzYew2sRKm4Ynp34MKhLyqx6xK",
  "key26": "59EzR6jja9cn5AzRjoStm9ouWJSFuQz3NNJePhY6eNiBtNK557PKJMGPExvFbaYfFvQGc4yhPtP5uSqtH17xi3Xu",
  "key27": "3pVJBmKkhv36pF71wu58K4qk4pAZu8adahtmRcjWphfyXyVTxyie7t7oGuT3kTdwAAFgy9vRkbWagxs8RkdmCZyp",
  "key28": "2vS83kaposjX7kWSrPnWNyqrqc7dumNgp6Tu28ZANN2e93LRMpBM3nM2X7f5oQbR7KJ7A5tz67hfZUTzXyuWr4HD"
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
