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
    "5Q3dBbzdshaQKb5yXdrYnJz2VTZ8zrsGPgFV76vsP94s6jd5gcYhcRacD2BERDwWA7mBbx1me1KKZCT9x9Df3uBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25JUdmgo1rwXHaPuHbEU1AjmvEfxRQ5yxxEoAv6KE6eBnjWwZfEMci3TG6UUHRSPMMTc73Vef5JrwYjagPu6ZTVi",
  "key1": "P6pMzkhrbRBNaiagTqTRxusS3Y5MoNJCrrPMqiwYuyBmzkYj8hSfb9uwQ8XHf1d3Tp6e52k6m61anK49L6tjwoh",
  "key2": "2KpMFXS9o1HRLdCsQRZbaZFrcNLWPqbQErG28nXEjfpcFhjA2JPKQoaRxfu173fih4RnkFteXiiLaKFiQV2p3YEU",
  "key3": "wrgKbdDbCT2oL1HhShQB3tf7hJJayCG3sHWZqbJmMKSB5UchaddgwgtRBGiXmQQtUhjQu8XhTL2zqxHgkPv2WC8",
  "key4": "26Ed5WWzYQzNvTWJkjPhwkQKy2cdJDEfP1LTQGGmrNFjuY3PsMTPnALznpePjhHt3KZZw1RUP7wYB8gxQ9L7qy5U",
  "key5": "2bWUnYa3m5kVX8fudtZzg4FhysJCsYo5VqUiSnnPRmed2j3Y2ocREMRQoQRtNmkboMvEA6WMx25nBLKzd2bFtPYu",
  "key6": "4XnGo6JkAEB3NbW2uetLUAXAw5pDxLoMZFkMNw7x1BXKrBXbhV6Jgf2t4pepHWbStvCYkQrYSm1tnXzKLkJSd77Q",
  "key7": "4vqMa5xHbuakE6xGXHGnoQYniso5At8qnB4kvJ1P1FgKrxP9NPUfGWMMMYefwsqqztS3Ytj6aE7q5NbmGVQP9fm3",
  "key8": "54qao9YA4oewyrwaKFDQP7VGgWTnUZ9Bw187UVHsL9uG7jPTw2tTmc2qbgwzdBJTWp3Kxvk5kjq3WdVZUaF7pmeQ",
  "key9": "48WYDRNgnM6RCDrPEtLzzStGG683rbuPoZKnwB12k1J3gjJSHP6NPfeYnrapWyzpJWoDXqLMcGZGZ2woNq1EobYz",
  "key10": "27WEdxRw5Ux6c98Ny98AAXja56XBE17wjsug2PZC8yn4NqvTGnCTZhABLqBc4p3a7FLKYF6t72fPxC9rpYn4t3Wt",
  "key11": "5fjz48o9Gxv8CKnUqqCxkLq2bHsaSgTDVn1gPENzrWp7EvyKBJzRMS3CPvsiffRrGjkrQPLZYivegFYFBf9BPvy7",
  "key12": "5vPBZ1kSc6Bg1nfU9LY4RJzNAo78Te1jH9AQYKqWpsn36bEf9DPJVx3SNztMZkNSn6nuSSax1iHFM5D16gHGvdX5",
  "key13": "3jhxhgkRESFgJA1USN3GNAp7QJNTTXZFvuMJngeZx7wMYX3MoYuHJVnGedYHZEDGAYVdZZ1cWwy6PcS72zwqAyZb",
  "key14": "4Goh6d3Gchua6yGYLPKRzYWCVCA8KVT8KU7hKef9NPU7SoctpZxtyAmafnACrF1FKfsE9mymL6LNAu9bbZisPFdn",
  "key15": "2RxY2piNZeAKZFTp74315hNmjeN55SGPCWpKoQKruwvYvHKKUNkvxL5UZFCMyRANn9HxV3azhA1heb2beGqktCsD",
  "key16": "2EyLNWsf2wqBdjvvSDMgno8Um2BZ9RJ8nXB12jf2ucSqtiujBVfMngE89JBrfTxwK4UVrVdKfu73ZKKDKJF1J9WV",
  "key17": "5ZSVV2owHYYti7Y8NQ411k6qkkWg37BSVH7dnL9nFj26HJf3p97H4zNo3s69a8ZoCxSvVNiT9C7UFeVgDJE4aKGv",
  "key18": "3sgFTrtkqBpukmwNMbfqG6rsMfEAnTRJ9pyPeBNgHU4vYv5i1BGJAwirm8sjSK9mxVwV9q9eXAPCUwDhqFZw5ZEM",
  "key19": "2n9CwELQUye9jZ3sDNJ1RqtGD1WYPdC2pmnsF5YHp3tVtnPoqwTS1poGJYoUqUEaueqRHmt8yYAP9HKaErjnCbge",
  "key20": "5Yz8RQtxaJH8WfgGW7LmFo7CZWDNKMncRSQbKoZD8sX7Hv4jTruq3JWrE4hLu5bQfhBkQMW8NraGmRCtTk5FryJP",
  "key21": "5YCxy6Ue68h48vmPLNJu2MgfAWHZSQZKFxZmD14aKKYJoGwwFfpXNupD3Eet3g4eyskZPjRqY6yisaRG8DTxbo11",
  "key22": "5fWcQAU3HRLUSoN5eLhSYW7wayvqs7ktS54DuCjMycSSggAJ6UBXtawruWkkR4Z76t7ttC35754a6fHP1ce8DdhJ",
  "key23": "3FyHyr62u6kbs3ELQPKP1nhzPqzMKRCAQuCyiH4RroAdNy2rehosdFhqu14LfCNpK8M2Q5YBGspdGoMcNat6mwSi",
  "key24": "44vwTMuMaCnsxZ8rSgoD6q5KhmAyKKqMceg8kn8T1kW3gv96ecNE8J3HWTowFWKUxnSFhGD5GaSM2moi5hNndN5D",
  "key25": "3XUMYBrEgJZg1Y83oWzFF9QDmyYF8ZvkBF9v2LzJRrd7e3xxH12Swn2LiDYE7uzwKn2h1yYZ1Rz2pTJ8cKARMC4e",
  "key26": "4jyXQBv5FAmAFqhp8kwHMkTXBE5geTYTCUJMxuidwsP1wnj6e4qDN6ghy5GToZtFtbUo791p9KDc7a9YhEN3T1Cv",
  "key27": "3wevYbVEqdQfcKWwZDAj23u6H8mXbuDjzcEiafwTRXDMgRPkVdxLxhjbyDpTngfpBmxgVX7bRQmEJpwTcrWoh88U",
  "key28": "3exEDiDJv7mBhJ3kZbde5kXyk74iNZbTx36r26PWgS3zThwcDCzGrUJzbSucN2H91HAzbUMDznwXbDmfLkrRHh1J",
  "key29": "5G2r8JYBvwi79yw55PoEJA8DGAQxR4TKmhy9hQiGxqfkLBPXLop5MTLcYknLCQxAZzi6tqvgYGtQK9NDcyFGAMCv",
  "key30": "2vizWjdqvxZHjBQiJdmxmLjEyfKRrMkV6kgMr9s4XdcdVRfVjsjGKpdBmVrZVFtnaQVoxFpa1jSE6FqA2cqLomDz",
  "key31": "zqUSrtZcUj3aoMm8DqrS9ofbP9wri8VZYZ4ebkJiBpjDbk8FpyfQSF9kYvmSXNhYu6Kee8rZY9XrL3xUuJsekLF",
  "key32": "2Rj64AM9zi71sqS1rXzhozv7jKdgVNS21Zt4ZHcfiUbvD5RGiH1Lmif4onuhC4h3VvkghzwjUC5WYEtc4rqj3EgP",
  "key33": "3p49kKcRZ14TonESun1aFLtKcUoAAc3rctU3nhSaLfJ1cSxJmT79ExJR5nQPkJZuNwjE9EHp6jQdR8SuR46DA4sw",
  "key34": "5yShfoa793URQiRoAzs6mY3a8V3kwnYLbW7gTXPBZijwzpDAKJFxHUSKNMgzruiABdJ6hJ4pPFLG9Gw3rwcS2ehN",
  "key35": "4WVBuuMXXoZ9HdiRbkDAJSD6ZUMFLft7wCma31xZp7VFW1uSBjkXCNzAeCV9NTQqV8ZvJpvD3CrrgANUDX9e22RE",
  "key36": "5X1t3oogfGmkkJ18o3Rt9BNyDgDQg2uQP3m9Yo6B1m3N4tGqDh7KQUkfdjF4xgczQYU8cckKnZF4qiMzpS2zBhyr",
  "key37": "4dpF6W2bRCVF2bEqKq4yHY7mjYZUJqpiHZ8mC2XgpKFSZwJCmkX75ebhX4jrcDhZxWu8C7ognCUCJZwPBopT9HCY",
  "key38": "4YhDBZQCauooTaHE8zMNY1Jy122mMhG9PVn9QpnfQb9FL72sKJ7SeWyGaFNwgRpmUP2ALW68F5EFh6c1bNbjAMAZ",
  "key39": "smCPmdCcCCwp8u97M3xryqZwTqCacpt3RmEzAXkJVrR8mRwrxiFGKYMw9tc2HKEU9gENyNvC5st4ayhR7TBA7Vo",
  "key40": "5uc5MWZ8Jh1mfYoacTM11wsGC6xYKJFqXjBMCjFENbTVh9SewAPMW4Wv8LYJNNEdz3rcwtj875uv7K3srWPtdgc9",
  "key41": "46vUzptF9S9Po9wHjAjgcWFM3jBdRomLd3qwJFSb1b9DN2aULopuipSG13g7ivprWLam72UGKr5pm8xBAEK5vvCD",
  "key42": "TmWRCmnprsqaXzs4UhXd95uSfzCNHT8fEAhviQutb1vhAnicBKWjWwkdMGTrvmWm4xJsZ8PL1as9g622F8JHFYd",
  "key43": "r86s5McqjXgccLUkFR13aJ3Z2VBQJnbgPPQG3Y3CgZMw7vLip1YQQJHppZ8rvF3k4JrfNLVvkPbzLF7TKBDhZew",
  "key44": "63jVWk714UwKtn5qekauigP4GQ3qQuaEyFutF3pBrpvF4pP1rv9TeC3hJ1TUJ88jWXwAbLGxPBS1tjEhykrR3cyU",
  "key45": "2PQyK7Lz42uPGwvAsKKzLmZbMTUxjjvZPDm5geFotB6okHGMeyQejyJnRbd8jf5DzVWutdx68DtY897Jkqg7bG2g",
  "key46": "2NNsh9PDfQXVpKZPgVcUg9gb6yt2uv9wkKkeV5u4YmrHtgmCsotJ4GJKCeFncvrpVmefW74VfkdAgHsNgD5JmzU4"
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
