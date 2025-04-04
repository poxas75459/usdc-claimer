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
    "4qPEqLgznaib74p2hZ2vpargcZDhRsbZ3xBHmw29ddcpSKX8vuALGPBBLWuY6d5Ukhem6NmtSKeincTRKDAbkHNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xhGq7S8zjyykM3oFsBvPpqWtQ7qaodAZyjLZKgiE9hxS2tyV4qK9sph7MaNwMpWUkqDZk12yghoW3oidVWzMm4k",
  "key1": "5zJBqeHaLJQwk282JvEaESUNPfgbvPr5LjRAVAFuZCGJHVVRdL1f9nAShGXGjyDgeCbLHZatKZwocPMeKuW4mikD",
  "key2": "5tzWJCSCr6wtVxnQVGPdRbAceWvHLCiQcnNDAWcayZcmTsDMa1wVoM4wRT9WV7R2c2FXj1pgyK2tQRD8FAK5tohd",
  "key3": "5qSPM51hF7q63CdepxkusibjA9v1qtJkQbGGBQq4XKhJLxG9MxgUCa4JkinWHiQPzN7LuYVSZDg42beBpJ2icACn",
  "key4": "yiPDiw4xEhAzAX4xa5ryz8H43UhdnfTbdrm5kbs8aCJjGYRYxoApVhpLAsD7bTVAugEKiEhttnGQTbuZqiXs4Mu",
  "key5": "DVVouVDBtbJfCEpAmWCkFmUHZBUb8MMXkrnQJTbNqNDB3w9XLy8oLdiWgg8BS7muCMsApumyHquYYJR4dsGR6vK",
  "key6": "4ibkX3F29CudA4PT59Ze5bM45wRpFCQv9sWrteGeNxHnWzMfvatgMamNhivwi2bNm7wPzUsDYCU2bDyWQvwpAftS",
  "key7": "5Q67g4pxPF6XwXntDbbna9kkk7RN5FDcTDnuPCxV4h16u6iiHVGW2tXWrpMaRUf2xXsq7HYmVw6iEGLTv1tV1pZW",
  "key8": "2CWouvobEagxg3tQKWS1Jg3pXqxA7CwSVMqKw7dD23Awv8pgwS8HMeYh5F8Jywn1uuDwSjBCWgDWHMExyPHashZG",
  "key9": "4cPq44T1howEC78WuVSKPDnTQYtRxnqpzsWbZJM2KjwznR9pHMFwXwBVLfd9RK87mbuZeYdzW6feFfQfTUdUNJ7v",
  "key10": "4GtGQ2XCCMC6hy2AT7gYys5DPgzGWNBtZfiB8fHiUMwFuHjDnaZCRw9a23k4Ajz3LU6fnXMwMDc8ChP4EKdBYtEA",
  "key11": "hvYHxVMkDXHq4ts4jaAMtWmaYETFvmyhY7Qr2agheL6AwFQ4YPbYBqN1BbELtsKZs8EzaTXYGJikBAo6wwenE8N",
  "key12": "37bY3crXE8Ah9FfbKrbzbGgs849tsu1KewTEiyWphuauo8rUsA7ggjD9pPBqmx4pN268W9UNbZP6hrCTV2LciZHY",
  "key13": "5eKUBh7nDQBWJPbW3ADuPCmTeihQoG2nwAmkbLGsfxUKcFTnfu1DEhhpDodz8XoboZKDs1zQCN5sxbJzpxihqnHt",
  "key14": "4iRjSDSPov44axuANWaryBA4Kns371tWD5zHs8zVfdJBzWdifEiAgwTsSKHs9YJAH4qT7NY55rRGLAVKAM9zMnYX",
  "key15": "8ZBU81Gzrkkj6cfQ8iWwUuEjsSXjrT9rsmmEVTi7zFrJKkkQhhFtTHGifEe7cT982gLYhug8QGzt34Wcvh5NoZr",
  "key16": "31EqYSi2KcWsuyoK3UD6yhorHd9PSBkrKzc9LmNJZ6iSM4rG4FGRdZMZgWKwh2tGNrXZyHYgywAyXRCNSXMtJQxS",
  "key17": "5rkSpMkcjgMM1z9sVj7gtpXHGepexLV22TN33M9meoT7ZTRiUBuvtHqzo7unbf48LS1oYsFQBA5MwfxmKpX16C2T",
  "key18": "4Jbjh8wEW6p6MQ12gxdwwVmdbXzaE77iw7xGhJiUKTuLbDYBBqf1nRQQMBWVt18U27Q4m7WfSczy7MpRUTHNMapZ",
  "key19": "5GxehH5xx8zT5ipzaCV2j6Ny6QR6ybFwpsQXoGgcrVVQWPjKqJc1cCS4RA7HYzoNZBDu3RmEyBrjyE9TidntXP9H",
  "key20": "8Z9TRv7rrufAk6EdkcRzBzhjL9WjAuP4ef6bQn1BBjmqupkfcDU3q5Brz1ktxFH1WRXUxfHTjGxFZP7LoKNu8PK",
  "key21": "Dk5pbSRDDv2pUVDLw7bzbaMKiUrvoZau1T1NadZXTQ3iGcEXTeQnWrJaCEwkJYXKBPHShnw1fgURp457e4USBNx",
  "key22": "oXbsEuZgjivdW4Smn8iGwBzS4i4H4NykTN3cZGDKZNoHSeQ1R4vdaX6sPESZ4Fp2cXmwYsn5i1JJUa33Fw6Z5o2",
  "key23": "5QYsmHn9EdAYfRuxveLwpspXC7jQwe5sLyCxdxFJecSn65AKc1aMimkL6DG3cfHhb4PbLyFA6vvj6gftqCsc6Xo3",
  "key24": "4MoebmACu3MNgzWCm5SzYGdrPzr3o5LoT9qN3Q3jWawzCPTUauwAVCfGCdJmFQjSW8NvoYBjM8p6wcyUcYFb88Jn",
  "key25": "2oeR9VRmMQZDfmWvSXNqfWSfGo5XTPC4QYYdSccHNDFKTj6hWARY1HpQeCAVKB9eAFRqbtdMg92VXhm4G2KREuVT",
  "key26": "2P2Um4ovXExt4SuXSwowrm7k1FKvkMRHxFyMxYwcmf7AjhHeQkr7CLodysMRKXxPRwQBFTYiRrJNukvC2Bd9AMPN",
  "key27": "F3zydmzueinXgNLzcz5tXkbZbvUB9UqSMXp2HMLZbua2F9rK5biewNQdJ9A1LsN52eZyTvaQ7q9NgnhfKTKxxbs",
  "key28": "3YAeenLxaS2MMqxZipd1aZ8dqYXbnAaXViZnyiQ8ribCnDm4uXi6o4yNhj58HaVYKgEWwEKwD3bxCEMoBStzgA1f",
  "key29": "4MSnxSd2AK3g7pifokDxETkLjuAtWh2KAzZFpJ4EW5Usmo8VQ9V9oqhpjX8q1di2L4w92GXddN7XHNRyWY8Nd5ze",
  "key30": "5E3AGjXRHtG86YE4Y45janQcTJ1pdEFCXPncMCLb6uM8qEujpgYMeHvmaSqikTcbEF2RJqqzYenqMt3QJurzssHW",
  "key31": "4VNnRbdkKsvBn7ipbDoMZSoiuhMMAPHupiczEWjwaEQDWbEHhnFhR3ipeCrbPKt4REmbMfRCm2UZp5PawrrTjRWe",
  "key32": "a1rQG5odV6Xwsp3s4RqDW6ouuHrybWE2dr3c7C7RBJeTPCPxdp21pCGEXtSstQjrfeZf8Vh9PMBCCVnBihNQbyp",
  "key33": "YGoYYozTwheYA9ZAzhrSaMV4YnVtyUziy61ncKSeo9LfnFXcB3tFubRBRuRjo7wwX67X6LZCxcGkCbgL5CXgDcJ",
  "key34": "5FFwhf7QfQGM1T3LTch7K63cxfvAoBcSyPAvHeXHuGoEpP54awxhd2JYgHGUe8x9QMtRtYSx7WZ91KvpuWSihnMj",
  "key35": "2tegY5pAsN2hd65Xy2T2ueeZZwhmazM3Brbqyt5NjAGFW3v1dS1cxLRs59LfoTCMhkartLmHvWLWHL44RLLzhXUu",
  "key36": "5bwU2TZSkn4CFu9WUSK3NZUrGMAaGCnBN7DdRXuNEgCf9uZJEtTt6WrgwkqyFdSss8UpvFcrh1DVd1MTaZcUxYH9",
  "key37": "4UZz8YT9pw9m2yGTf2Fsxp9wVm5PtKW2L4rr5B4ywyWhUBRehBJuw1WqsiTAmvZi91151NiLQzasuzrLj7KTRPZH",
  "key38": "QcKqmjitqk5cGxb19x3Vjq4DVThviDY9fMrhhtHwKT841kCczotuBr988UAowfR2HqTFrXyaDE48yZqp8HF1hcS",
  "key39": "4k6HbBn1yLQ7t3x9vsg6wt3VjXS2LS6RCNE5mi3JkVrJGq7LW1jztb55CpjxoMcrNY55Lju8mjJXihuMw83fMVeX",
  "key40": "4meGwfQUZNcirVp8W9dmYTLT6F3swSsqoAJWcJSzeCcc1KKVDE74YQZWc3GEZDVHwwpRoS1H2eh9LHtcxBya9oDm",
  "key41": "34dkmmCwerTeMaNQqRTpXiru1bg6ZNabBXManDaCJ2gwXWRDg4DPPrtyBQRqkXVGow1quZ7fDRDq53Pz2Tawfr5v",
  "key42": "5NJpLiKCKZtgWuKMR4dHYZRGjeQq9JWFR2AWESTaEdoSSi9E7N8VMw1T9DAbo9EhdVNZKRABXMM5cYav24Enqq9S",
  "key43": "38ManNTgaThoVzny8ZYTyEJEH72vjqNzoAjEcq4bdmKXjskq8eHPJfGaiz4VVmKj4EqwdD3qLCPyoJgdbMxetLPB",
  "key44": "VtfYSeVLy5QxhD2g3ws64mg55JatxQR8WXbrHMRo3UQ8xrSiT1M6ec9tLAvahqmUi224Ew7A3Jj5bNNtTP4jYwz",
  "key45": "uEAcsf5XKDdteV3CKjxqtAZ4KGj79ApKFpeFooUnTomftzPJBDDBAw5U617hYsMrPKwrg2cDqrfURwCPZRKjJVh",
  "key46": "3fgueQjfWQjbr1ZzrhQ1sEevH1K6s3JcbNwqoivAEByWazhJAna8CrVA1dW7XyzprMbAXa9GeSzNMokq3hMobLtX",
  "key47": "4R3fcxobHYb8uk7PFABTvia9rMRCVLmMDnDvJrA5HQtdtAj8gjBrFZQJfF8dNzBao5KmU5e7eoivP3qhNMixt6mA",
  "key48": "PfCqQEySEwFDzyAnxvF3ALTodgytMaXLA1wvmZjVv6UQFHsSbF9zHvyFdpwz7h68SLFjMS9QWWyeFzdVAjgDW5j",
  "key49": "HtCnxqarG7BLMP7PRiuC6n1UEpGBJoqa9XicEJmZKCfBsu9x71qnFGaSYbV4Rj8ULXqEPtQi2tF7EDiBSMmGWMH"
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
