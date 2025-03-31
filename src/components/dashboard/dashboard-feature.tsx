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
    "3nQrep7A2jsRm6WA8ocfFkDP5eHNtW64VS6A78dvUKCxE4Ut9KmZMFCFQdFJ2Tb8G6bniB4xP3gmz6S6A9byjvf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36aH9cR4gGJseJCapm3RvJiChQM8wiErn8wsWbkyLaNAaob2TbJGRSLY3sj8hf5R8jKYod2c5FnAM22W2is4g36B",
  "key1": "41wYJ1m96VKuAyHSMQpn8TPbGpd6vz8YtSbTFCQT2GmVdrwNg2soYPSeAqtNBFE8XK9vZrsFNv4WAZqeG43R9k3P",
  "key2": "63iBBvkUDMJiCHLKeuJpwta1y5mmnqVyWcF28ch2CnsRQ6iJNnKXhJtFSFGo7Pn3GMMPSmJbhRLgBdpdbv6mFuQ2",
  "key3": "3Lp5KfAQhdhkv7B3pi9jLHWQe7C8U4ze682MspScq8ChYGPHnA3a17EJMLQZyEapgZJiwX86YoAGhcu4tL3e5NWj",
  "key4": "3MTDMvGtnU5LKpMdjVG2JYYof2cbtDvT4r4K13kwzQwb2NyY3pXJ6UQB9NFNDNpcahcsUXmMdcpWMxww2fTr7Riq",
  "key5": "4dVouEppMaGBGnYgdYaqfy2jwREbgrmtBb8sD74qpYbMe43Fon78R75dT3S5AKmBZPPNYHEgCVkSMSyhB8rVseDm",
  "key6": "4obp3a1nbSAn7Bx18DE7EtC7VZp9oeiVdSdW2LdKUrjPueQuDNKBHWXBin4RDnPqdJt2zdgmxh9zvvo5sRhQKSaC",
  "key7": "2wPuPBZ7n9mdMEkpVVZhTm2r9pq5tVQs3rDWLKUs3aF4PdcYUFoocTXsxVpuZYHSA3RV7xAN4YbnYW8mBHu6ef8y",
  "key8": "2qXL6wz5KN1zcPNcA1dC2yTGcN1NK7JoYBuXqrUZ6459WNzpDQqnobpPRNTz7GDRdBZ2pvJGLcAaBtNAJHzF4rpX",
  "key9": "2kJSW4fgiDaz3KxfXTpmkSsG31skaYkzL48pQbA1SWHo8LNYu1wkiTHMW1UuGHoHJ81T7kk4fMH1jq4Ta2Jkmdmt",
  "key10": "57LdYMadcpHXwh6UCV4Qhsmjdr77LWmd484Ce7EeG84FPz4Kmu7NV1EhGER2rGxh38MCqLPFCnacJFPro3PJCZ7W",
  "key11": "nVEN7BmsZW8So6xJCmvjtreisuiFEy3nU9mFPUacRzW8tEoDJSzdqNJ2aQoQ71yMTKn5fQEgQFksLgf13cScNJZ",
  "key12": "dPTnoU1LftmbNBCrCHZqHALJH3ccmvFDrQK3j1r3wyusdmqmYWTbA9exB6Kvb4CN8YPQbpFRGFyNXyGfpwT1c3f",
  "key13": "5N2kEHTeriVQKgzxE1ZDgkXdrWu97xD1vvtaXH9iL4mVj8FBexjw6snqi3m9aWUPayN7i5d9yHXa8ir41zwF1EVM",
  "key14": "41mXUNwg9LBQzYgBYi7oD8W8ix94sN773mZfVL6Vwrz79LTQxYBG5QNyM52qfNtTHGQuwzanUJ2owKY7UXCFMkDs",
  "key15": "2b1xhq8q7GCs8HLCo7Nta73MTvEySuYX8h8e6FBfKVih8stnncrFB79sVwdLUym2CgMF7w1sfmAAfptY6Us6BVFE",
  "key16": "2GLTeb2RmD2NiVtiZKCFSDRXX2Vk9C9ZC8R4Yk37jfvFZi5JZQujqSLrWzhUnxCqiKpe5nph3jvtf8Q74LBpJoPf",
  "key17": "46HRYSzveXqzqnCmUF1n9Lf8npYXiXnXSAw2zDeve3RoaZR7j8prfEVK7U2ayPQ9cs4uzMML4Y6rhj223vPtU7Lk",
  "key18": "375zhzkUNSGjayK965KtKHajyMUsTtCzKUuWrjVPT8frpkYtbVt471HNkHwMjA8sPZC6E3pKjLaoCmfWeJJ9Zq5D",
  "key19": "41NXPfGGrWsJShN4sm7yRtbBoLQbqk2zEHwEwozengCC87yAtuGBnUhuvUu6mekdCPaA1SL4s843K3gYnQ1nDd45",
  "key20": "5nHSr2q86D7a2oZfRTesPjwfq6ZXG4n1bVwDbyMD2fpaDeLUPb6K1RWLzkV9QenKPa3NmDvoJwcT3qaSmj4h1VFy",
  "key21": "bupoW8bTsJuA33NpWvfkkKkr6PgmTAkKVL99cucQkrMypfXbKCn9xx95dKMd1bkZGcUsS2DxK4LQPrMxzAv7RQ4",
  "key22": "waqaUUhcLPh1Q6Q3jj1htvo2c8d663qDTU6Apxpx7mKZNSdSi7WFLXW5a91vw2QRByHmMYoA2w4dRSt4Td6Nbng",
  "key23": "4YJWgFKPh8eFHC2qv8RCajbgFmjyFvyngxNSkzR87YsgdHdA1HLUkqFS3EacUGGRyt4vWakqBYDtV9GFjsK1LL9i",
  "key24": "5s9EPdFgUgxt5JRJZufQV3DohnTGenCQmPzrwLB616r1XQu45D1v9diUcaH2uWEbsNE8QXwSqmiJz4T1NRyffHzh",
  "key25": "4g2A4wLW3afQy76Uk7JnctHYn5cEneHV5nsuiUmHxpnVSsybNkLPoXj9qFaamyY4zpioz7sv373Qy6PzvrCuZ5BW",
  "key26": "4Dd4PrGnAs9HRpE4KPfuP3bTRZe6mKrZHL2YWJJGc16XqGoX32oEEzWN2usbEhPwUK78D22Uvpvdgxea1NvDmX6R",
  "key27": "5HWEcvC4vJrYo6hUAzkvvRg2E2Xz6EwyPfA6AqmfysBfpkn6XNnHsEA9v6mqmXnCjFmU3oqc6pB9v2hkFNpdVadr",
  "key28": "37PcdLHhBk796iX99LofnbcwvMPwovbqQrEMp8FkrFEkoEsrKQFaTDFbha2CcohvHWszQq3nhovHL2yYeqS4ver8",
  "key29": "3SzeLPB7UkoLQHdEX6GJeWXx4k17uwsMmEtfWPtTksbQV8uM26Txv3JYQkybb79RfUwzVGNwLqr9p69m5KJ5ziyv",
  "key30": "15jTjN7q6VdGEUGH6TE1BHck8coGdG2hrnRGwf1bqK93YHhdWFApz6RWkh7THnUBrrFUwdePhJMx54JbGMTQmgw"
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
