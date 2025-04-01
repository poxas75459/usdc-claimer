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
    "hzuVqpGxH27Ej6u91XWpDajonVNK1bkjDVKHWvAu3uXoqLZahRnEoCEY1cQBFJ3hmrQ4gc5zGgWSyoKesM9TxMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58UgWYg8cUbzkZCtHg2CTk5HWYsviwswFVRWPi5AXxGaPjG6r4j7nXfjokkn3QryZ4x7XnpArdwJE14DLT4kbFKh",
  "key1": "3ZcanpSVHT2q63abPF1RBbJJYfkme7SwjFBhGGvMsZZ5Ci1LoR8DWCQw3hBEQW2DJ3gTUQU3f93BdsFWt5QMfEB5",
  "key2": "64orAbSjnaRVDjhuyQBiB54JNfUdLp8q5TVKW2rpbdvYtvP9rRiFMVewAPjZqrXWid21k2A3wQUsRNJMkHD2JQR8",
  "key3": "24yf6eEUJAsWFZ6ro5H461h2uBfyKBc7j26xbigQWBxCm1HJmonKS5r1LDF7gmsyPYEjeSigMhYNBbSvTNB2irZi",
  "key4": "5dBBm8J9U2vKdnbzyuqywYD7fPQJrqNTJEdTpji1dnP8tRfzYcdEFMPHKaLm7YV99N3fNcY63z7EqB4iMKf2bg5u",
  "key5": "gHAn9N4rKeN1uebp7eQiomzPTZPQbF7pibg1sTz8rXbWo4PkWTSaxbFN6PdAByULe6xKrK33kcn5JzYWmZB47sj",
  "key6": "5iR3cssqfAJ5bKWyokEJ9pToTfbxbfNwivW8q694t3Pkkq1RneZcHZNfEy11uASiiThZcNTDEFggXnpNt5t2uDTP",
  "key7": "2DHifZzKMhkiBNRisTdYqPCJh55a6rNWsxES37dEEyufUkaqr8VYspfZXikYFRcgrTZeVfnd79X1fdq8wcqd4AnP",
  "key8": "2YXg9DwYCSL8rLsqy11aXjkrGNxRDiZL6nb3souDJD2WTV95qL2nUaHPXhMjPz3QNDRHEZvazdFMUwgo62xxG8Rc",
  "key9": "2aWdpBzFnN3BoiXcx5ktGitogvtcs3bYiKBxVaKTst77HqPSimB2UYrVMhpcZustFZQCwyYngazhu3EFZWu9ncgp",
  "key10": "4kFgEhj33iEuaYhqgBks4SXxqBWAof1x59ecU1NvvWaN6QKntZczZPu52QYTKGUgoRBnCg6VC2wWqhzwopXukhPX",
  "key11": "4pMk5mcGCVxsK7d9YFfEaWpvB4xSEtN9BVNqPCEwPpy3b73HqiyArdYhECY8Q1YGTTdzdcBQnjQEsurT3cbKejhL",
  "key12": "5eoswuqw9fJX3zMK6ALsAb9SPbeNMDmUdS1YzXwzt3ZCs37E1bbPvgr1drk4TYBgzmTwKoTakwnymZJe9LHqdNzq",
  "key13": "3PFa6yvwP3rvDxCibQ9W4i4F7W4YoR6kQLAnQMX3sq51hMvCiCtQzDmbY6RxeSmyomR2qB3Ui2zB6NX59XUKsZNe",
  "key14": "2rBDag1wQ9Rxj7c5Qtk59pZG2WMcxhaPDDmx4grtQdgnZuhKYCAKRYwGi8EuGHY9sfh6RB4mH68rkBxH4KQ6xMDR",
  "key15": "5rbpmMwsXtccYhGtEKQbpG9EA8Ddq5uCPdCr9T7RDXDnqinmvXWe2w5vMbJNPYrShS4zev7QgLkMPBcT3D3WNCpR",
  "key16": "5pGWqV173A3ecx7BTBi3D2xXXvpawGKtHifGVrtwrjnS97wpAofX4Zw4C7qauYiXAqGfSKTdqYzbV9XtPg1GZ2bS",
  "key17": "62P1eGidSRYgFkhVESigcPtqo3fa6oexpNcwBxuURDtS9eTyDCWjS6ZHF45KaiXagNVQCeVUbu3UQFEeuJQRzGNd",
  "key18": "4Bow9fbAo8KNDQAVPgJzvvUDthsjCfXPzMBJftR3oiCEALhDXWFE8PhDvjfwC4Z3zKxWmqFLn139o1b33qmeDeGd",
  "key19": "5W1tjtqZ2AuSH34Nt11ziTRymuZUuECybYtwBFrFaJY747tjNSspvUHV7JtLrquFUUCcqSuyiRBXAAKxtcj6HtpE",
  "key20": "5fEpTupLaV21a9wwBC3Gazdzyp2t582eQuCSQt3ZzAx6sHFGyUJHGpcngVBa71jQKVTgPaytBHhcLARb99SHGzaG",
  "key21": "2T54BboPeHdVQHkgujU7MJL1z4ps3CFBaPdtXe6YNZYM2pfGCgFXXLZAP9RhYrS7hrEH6c6gjLz2Ve3zKbf8tKqo",
  "key22": "7evwBvzoNci1RngirnApP2bRCud3PBVB6u7fico6K49cqNbQ6XWQRrFbLzw9AsrA9N5ZjpWTGKKy9rePEnneeYx",
  "key23": "2G7tvXin2s2a3ZSHZZwiRB8bLRK9Wqs6r8JTDbqk7kgXF2eLVxu3YgDt5qL9u9ScxgF9Pjz5Zoh5JGSntxoW2YRr",
  "key24": "5iwjnVgoS4FBp6tZDEWsFstDiekkZokQf2KcurQKn4uFhWK3oidgQ17XznbfGQA3gH99e1QoGBkW5vAJrvGzkDzM"
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
