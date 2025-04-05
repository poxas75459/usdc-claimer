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
    "2PfaDwpuqhyRmsN9Bkn5LVrUnPzdrQ86WeicZRh5kv1EnaGQnpxidVVCE1xvwxAiN1rmS6wExr4XyeHBWL4wiQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z5QkUPYDcn6nSvqAGZLE3McZvGSnRysgUd2WNB7m4vsNf2LvwJw3BsY4RtJPdjrLtYG9Yr6vk4uzjhsKpEfogxW",
  "key1": "3D6HF4uobXwSNZC8jyVPRETc9FV6LSwDKAvV1shT11FPECKLAphXB7EJRuvXV1UbZf9BkbADHeX6NRjASJnbPcN9",
  "key2": "4MY3NgrvigTWCcGHhux5fwrqzYo8CafP4HXceCrRVhMNXUDRkWgQW2TLTam2fds741jNUVqL48iYZyQCEe3Kstbh",
  "key3": "3Aajo26RVFTQFZM84qFNW5Uu7XTyy5xsCkW9MKbNjogGKyRBtmDMd5fH8xeASoMxJXBre3aeGQDV2jJqU2653gAq",
  "key4": "2xG4EpVvva7pme4U1joXxJqshEYUh3Y9Zb7LdQ5uG7whY5MBtPDPm9HAKZhPdBBHAKNUHhXziBuN5qYANA7igBKs",
  "key5": "2uRn6tAfqJgRZ9BgFiMXNcNSz4W1uDyCEPDWecGgciphsyDmHQBGL28vMtqSW8yU34vCDRn1m3f9YqhiaVgAfhgL",
  "key6": "57RKXHZHeTVAmN7R9Fp2EnQaN6Z8UqA4T2sShP25Ms3SycBvDBgNKaqNAarv3pfwBduLQWLLkFAfgXBWmFLYpNkC",
  "key7": "4HxqJhFqmn1HBQHduSCiwSbTeHbiJUvheGqvGhdEJx4zA8eNGmjNjEUctXBUDpAQTC1fei3L9LxYqRDLo5qqKvK9",
  "key8": "5jZwwuXqA3HepNwtde78CZ95S6oHPi2Ap36Vybm5E1uX94Z2W2qv7JyX2ThUrN1JDF8Smyog4DWWL2eKpySYosEF",
  "key9": "3UNrKVRcCJ516Cww2TceBEsWAujyqvRRS3QXzB2UWRzVMZLWudSoic8AHf46qqCPmyqJSSLb68HQ6RHXHr8gZ96a",
  "key10": "4ViFr74TNrUEWEuZxxKVCqJmquUvGfLxqrCnFT3orWtWJ6PJtLsTzHzuZf9MNZS873xGrE5oAw3YKkZycWxG9twA",
  "key11": "xYDiBG9rFdmg4K7HWZcb2o3ggZcG2MGvFgNrGgRekhpd7JqYQSR75EVJHSPiqLsLDCrFbw1XVR79zk3anRBRAvc",
  "key12": "pwi1GhArc1y7gAWD38pPLnkwQo5q5q2ztBVimp3e6av4exFEhLEC4vzhh43MjQdNyhhHNGcg3N6SWiiLCyr6EJz",
  "key13": "4tgF54PooY5h2kNtDk6oWYSruVTmMgHxCoKbRPm4dSS32SnPCC5RagvG7uYLkDWYi1RG8Qhdu8fbauVXZpyrkbMk",
  "key14": "4SRNMsNR8bWRBv1VJSBp8RppdPTNxFPa2WQVrux4gyTpzAmjCfrmHqh7eQLywmNn7JuYVCayNTSKh7Y4GgNQpQND",
  "key15": "4Eozr6isEHSKs9S9U6cBcvEM9JDUPtfwcJnBGkJYVCxZmj3WubHPp3ZWS8czzNheUC88SpS9LrcTnvCjdWscRN5H",
  "key16": "38k7dTpPwJ2MsmVYQzFKpouNMb7Bi2UtVoaUzTNnKWuSanNhf9xBDYuC1ZZ1fYMdULTGdbk5h5AuDeNqG1CgjYew",
  "key17": "2gtabn37Ys4PjXFUSVGGCwBGhBx3yb4rhFy9fWtrX6wkJLxBXGqeWF9nUqb3gcJu42r1WA38aXUZjmhpdjv8AcTW",
  "key18": "25SZAsP28QwYWEPPgmejrvxn7DtrUkSMiT7rXGiq2xw25ke9npZnpF85P5AKec494Jtmtrv1W86719Pc7tYTedjY",
  "key19": "Yqa4g1wzPAjRcLrZrMawyG8qo1kJRL58K8oM9iD9LEt8M687B9whrffAthM5YtNWkVLGxoRsvahvySfjzJe5x9c",
  "key20": "2q5Ztki7yhsrRDLkrZFPyCLr8nVBGURkCNLMNEZiVYrXxXRzhAGiy6wDu6LyxZtwBCtBwS4HRkhdJdwXgnGfydt6",
  "key21": "5yJ5ZLJN7uaqQ4tqab5jHx5D3YMuuakUWKaHkwuDu8TjgfB6V1Ja1KiQGVutH7o2P2VBxPpJ4ESLSJ37wnPpWMkJ",
  "key22": "59uW87BufFbfXhekGg9Jwge1ixm1XJAeKCdUBhqF9CdVnaPCJkbD5q56L73yeKxGFASLDx2XfiBbgzEWVUmjetDw",
  "key23": "4PKRjhTEAPVF3a4cSxcDGLe2BzJwWB1TyJtSykK7b9TrPeBq3WtqNq6bNZcyxxN6tXm7U5uSKyibyZwEkP4j7amA",
  "key24": "2wXdYzGQtuHuFwZ8d7xmF1Kx9gKgNSpXnyANhZf5Q7j4XGWSgDKAVeAPSVsZxKcH2qeaz6vfmvJswLXxtVPnVy8v",
  "key25": "Njd6Z5HwHTDsXfDJk8sLRTj5E1s3JviSTn4sfrrq52N8aZZUA5aiAoMBDQz3YXQQfjRjGcqGCHLYJRJm6ojkeeq",
  "key26": "5AKS21ryaX3cQ929MXSaYJ2EVtfDLo5Kxo8HECsk399AxuN21gNnfResEGY4a4N3uRBLKjXZnLhxRvCCQqkHoni2",
  "key27": "4TsMhvy2fT237HFVfDhkJ1N6eWudEPXXDq2hsy3HnBpD9iruVtqZm8dH3RWAj2YJtmN5DyKwofj6wXKgtppG87CE",
  "key28": "5mN3z5WLEMkJ6EWxqWKMkiaLouisEwtBPicBYoNkg28JjZu1AT1SvirmgRij4TL19VauQbbsrfyxiyF5L8KqQfKF",
  "key29": "2DABDLRyiPCpvMGrTeAAYE5BmLtUbWXo4RTTWzz2C5uP8nRJzgQ5w1D45ponSw89uJDAsFGfEVDQ3j9ByJLCSBJs",
  "key30": "26ap4TjwXzLmA4BgbwhGbXqxLtS1FnDMVrtJDCqrRMohUYGweMLHquiPK8TUVhnHEZqhrVhFo9cZ1vSWD6XabY8k",
  "key31": "3njYkuCMw3SNYKCN7RD2aGrwMCBx6KXsLo41vNy1yB6hwqDtgNYdDc6PSLqH1Ex2ZgbiJeRFv2xAMiQ1NuFCDcsq"
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
