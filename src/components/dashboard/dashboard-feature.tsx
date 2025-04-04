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
    "5FLX8Bmr4f7sBoGiPV22bHk12x8pUgsbUJCDvM2ivsWkRtgy5pvHTSwFaM7ZAhwdWVM9xq87aqwbtAQ5WNTnw9u3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ex8gd4kip7WErtQJCFZY2LQjiLU2rADo6VCfWwb7vcRfG3gxC5qZYtVY7kGxvUu3GpodJMcgoRwGg6L2iGUVLbq",
  "key1": "3gyw5DHT3sRNSBEFcA5VadXs5F3VDzvaxpdEZGdmm9nbebzUFpC9nyMYNqUcnrZAw9maXRj2pZvjpHstQJ51XiKJ",
  "key2": "5KoYse2kjCgfxgbH1bcKJ2HctGgqRbEvbkUErsYJViyW9nwp5z9Uzn9THZ1Jn2LXjfsEWqBkUnvUMp3Y7Bt7BY7H",
  "key3": "2jcCr2fkAjrirwPsBVGwZ8BY4xMBveLVQRqqhkicirgRuxP5FLo5CfRhcrSWJGqQN9PSQnbX3ur6z2PjdX5bSU9A",
  "key4": "8PriLLWBHhDaHuwGpv9chEj3JZArdRgEJqA54vqrY4paonVoyew1zpcoavJGfhcFpW8C54fYe3yyGHvJQqdqwDS",
  "key5": "5uz5wFYWb8nTJbDhXxnQ2RK2E7jiWJQLDohZrkgcThSkAKwWQaGEn9sshSminbkhVEBoiiSQXmC6oxYBx7zPkLBm",
  "key6": "3vs87iN5RYQeHh4hfaBk38WXXyMzRUiVw9wV6C5xXeTGYuaXqGiWSjynTyoEx1roBLejFzfG5vsoo55VQvntt5j3",
  "key7": "3pVrF3xzuzxWZS2hXYj59u5hiydSQnrJr1DiGCK7WamBL1wyY53fmhiGGWVctozBEKBuWogKGShinyEahbZcY878",
  "key8": "4bwg2D8ioxMCeHGVzH8PkU6qZK1n5vPHEP7QHXP5sQ5hf5Y9QcnuZfxXbodc8vG8ghDPViWDMp8rwHWoobNjBKnB",
  "key9": "4UYCys2uhfDpw77NdS7p6jrQX9yaEtjAjZ4etMMiFBuzjPSXDhdUd33NPZRrLmTprZ6GUSXABLUr8N6f1apyAXSm",
  "key10": "2fJQvtH3wWuwKSprQiDwYUVbS8UW4HFbXVswmKJuTf9mQJMVXRCKCpiFj7CjVuhgufEM7qLEibxFiDj5RFUFE2Qt",
  "key11": "4Cz4Zv1S4dQbwjqdh8eocMPMTZtX6BMbA6yEGLqhNT8jhvugAHLdctqGYG6iLdiewuNmjJf53t67Y1SWUAmRndkB",
  "key12": "3jM543xzefpFzpbXSjt7GrQ2YNexiHzN9oGUhVRevcodKVCHNxNUoq8hcjB3hjwvsxqvxhfk3YWrSR55i7FxahQs",
  "key13": "5yEG8euXqg3G1Y3RjCz6rWJB9wScaxmfzZaoLyEcpSQADdx8dYxx6RuwcWZCFHBTmiq9tbeJwHmrRGzRojDB2JdK",
  "key14": "2dvPPip4GAnrULLhQf7eaXB5wsVQUBhpCr7uPZxTH6MEGGonULRofLEdCGGAQHvzh7M56tAmAqkp3aXydH5Gdeut",
  "key15": "4UDvKJRSYVcUZkWL1Z3wxNXZR9nJCir1qd7HwZXkXNMhAjDw5kAjJy3h9F8Ui96UtEtdNdiBiA4fmnyrDSNrK3Mn",
  "key16": "3B3WajDe5Pi7Y4xruJSfmPSiU4v7r2kwcU6VHMEZiQVwTbzFSVuTT8Z7UagXaWHzeeBfRvikkfNoHnKNABmvwrzU",
  "key17": "4JXRhWhqhR6VT63qweERcdCznm9d6nVAZPhxEC6adq9wQsixT4US46fQ5ecRLaNbcwemtfvmbk5FXRPq73ScQZ62",
  "key18": "x1wrLjwX1E2jn429TEq29fpiFTXb4at3r4TiUNZSmWfuFuoajUn9EaqpsCNtxZUf7TWLi18K1o8aFfKnVYzorpg",
  "key19": "59NtrWDimjkj9wF7pQjkZoN6SAP79fV22rGfJS9oYzg63L6QGPxEaMTX4tXzJx2kbRpj8aTrdP8Wfwwt7PdB3jZu",
  "key20": "5Ch9GBKqxQy8GuzsD6s26tQWNQLQa3uBcV5Jwcbp6ngXRpPb9UnqL27ptMx4eXyzbaCaTJymn7YUCriXb2qqAy5z",
  "key21": "jEm6u3U5suYgQvwjPW1CALZXTkEnxRLMGcjXsd4MBBQKUz3eCjPpdUmhpSu5VumTZn5HgVsGuTFP8MvJMRyn3kU",
  "key22": "324LNqMSfUFnKj6aUUb7G1rtoCumJ9784283FRYbgqyQPNaZhcjJDoqjsjckGHEy98t5Kurn4imU6dtAfgdXa3qz",
  "key23": "3naWVd5Z9epLRXf3JVnQ5Qm1hi5DKXQRfvcXVyGKkZvUMziQ2fzww83PDyqnJodmvp3e1f3gAzz71GnFgyfpRawb",
  "key24": "3S9LSVitho5u47o4vAj5HqDnrPTb4m5cMBKWJs7kV6fzJsQzUvZjRdbczGtjm4jTfFZy6SoMWwGiKSrD7hL6B8gV",
  "key25": "476tVW2VSJDvB1apKfDGwe8Xcod2rFAvayqjmpKij5GbAmLL8YtBNAzWX7u1LToDxKJ3MxDKwjh3FS7SDJWmHqoq",
  "key26": "4h9FVisLvzYGW12BdvQQ8ay8AkszPEt69uS2Cx4TyzonS5iuWwN4AUA134HTLogKo19xXnMsAaNZYxA4i1oYcGpM",
  "key27": "4N49Xh2cDXENHqPj1uNYSikbrML699nEZ32QcTzyVZ2MydLJ7hnK9J7ZmfxmKga9yRrjE4Z456jHBaXxS22vbMXw",
  "key28": "5t9zbNjBfNgVGGAyy3Ytf2Tjv3Z9afVEdp8ksyeZ1sartzLr7yRoVxeakeTRD3UrRqb6S42uYAbtzCwcvAK8rfy7",
  "key29": "3roCYVG4zx4T5fpJmKZ97edCNMDqX9NSC1to3s7EEpFH2jbDjd4SUpEHXTqgPv18XaAgwN7zPWKibCxyp4prMYNF",
  "key30": "2NyEzDJZE15ZdzvLhMU5QQLPwsGYf4buG4CNbaDe5qJw2HuEqZhZuHhZEdKuwihaQSh4p5uAvpM5i5J7LatyhNFZ"
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
