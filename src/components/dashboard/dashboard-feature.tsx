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
    "y16ArPk1ogoa8rT1Kn9V2yvwqfW5PUT2cRLK7KNDkk1sre9LnEjnasW3WmP4crTcjGt3beAXFWmgiD4ZpWNbRmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SSRsxhdGeUSBrgagYD2ZfUWptDrAJGiBvnu2woNvUfYu27yJTFPsY4J7EF4mg7a5nwiLtBsaJSzCmLv7GMZTH89",
  "key1": "4ug3KP7fZSjz3ioK85q6av2hJScReMfh36WDSbLyPArciQKbMgFGDAN8mDxpoS9myKHayaBcALGwLe5VZ27k4ZiK",
  "key2": "5KF8QTrKGHKXRJZk1gADskXDR6AKoiH2mpP4x3q19RVgU32Qzv5HtSc8NjVDXex6GiqDxZJULUuGS6GD6AH9Xw2R",
  "key3": "JgusMjMQ1JmgAx8naFoUHkMhV2gwHAWaGRFgRDykgNQgfrb5QF5jgrUY1xNqcVUAHJ2fGsLCqNnEptZ6bo7LiuQ",
  "key4": "3vt5UvucMM7DLzkmAX8siwqToioGTJjbGTi8P8GDr2x874HqrujWo25appaSgVr2DzZEsXGtQ3zdW8sM3bCobLkU",
  "key5": "nB4tyxpHM8XhBY2riVXU4zdh1cvcoXxLYgjjMDJjoghw4cZdtBn2UrG6bzPCTfPTh2tZV9qQJ6vg1E9wHL33aJQ",
  "key6": "2PEM9s4hfmHXUeuMQyjiMyybcZ5Fo4pPVtfH6TsLUAvAYvZTiWBsHnnG6wRrjiGvw8bHJu8KTH468S8RTz5uySVz",
  "key7": "kxk1boG2b8FgbDsYTcde6Xm58JxxDpx8dfLGg1LAKpc1REPB3NQPfAR9Fg1R3jnBqK4ko5wcpyae5e9NuQ2RgRC",
  "key8": "5bUmuCTuwpGBZdHnYQEEZ2q8qM1W7BQFokm7zDZZLd6KkU41An6T7BsfAzNCAAGPAUPZ3ppDEwRVbGbDBfJ27xXv",
  "key9": "42am8DSbGhWHCsM6bEZbQavCz2QcR4HEbY1Cydj9zEC2CbbehfLx5GBhgyHLwrkARSqjVpRX2WaQjeaeMXbZrg7H",
  "key10": "3wp4sdbrFghahn8xGC2z71nBWfMH2gxPJ2scExVekYexL85DkUw1eWL8B3MgGBPZ7KWJ6RWoUZGM1LK5GUyHtPZb",
  "key11": "F8vNJJLNbicsTmGLnw9URDQDHQqAJRSuqzRCjGPqeN3xC29fWMzZ13HdbxCJ5eym7dmK2zmYzJiN8JLUnaZEGzn",
  "key12": "L3zqfXx4ZRLHjztwvupLtpnSfZ77C4RaZKLgiR6G1Eomr72k7xfLvZQJWgWiiJH3muT9K2Ui1EPWpzLF3t5mCQg",
  "key13": "3ggeDkTR6tpgroKEipck25kvEeE6Nzv2VwbjBrzHGVRsgXHxHBpJNpCi7Cr6Suxv4scFkk4gJePUA1abWk7ijz6M",
  "key14": "3nTd6hrW235Yx2BNxT44QtfcUX7YUUnM3EZqhGXWNFYUiukj5pdUtRGpXxzBCBeUJZsuWZkH3FgJqjD4czLYzj1b",
  "key15": "3YyMoKMFewKBA9shBgFmJUvo9RoC56UsDN2JRLzYz6xMvdP3jJ5rhD9exc6xYCqbyD6rNaGWYEjFia2L7CrRaNZR",
  "key16": "5RoWb2579FBD2cPUpPPAtyVGcSTHc4n1sQSnbFwvrF4LdCNUCt9Eyu8fPkoGt3SoBymp56Tesm55Ch3kQWKbZspW",
  "key17": "4yE6VwjibhYSXyHkcxELMuxigN7TShDReUv8Wy4mSpWwgPzQwze2oZ4hk5hGgdxMiFgspHbxZLzNzpmjp8q7a2bq",
  "key18": "4EAofRogGfwuMLnLaRFyGB9s4iQbcajrqXRyocbMuU7R1n42qwyjjTmdgegVTAvcLcZfn2tbnDzj1EVxWV8jzfcN",
  "key19": "4suaRFJ6jNVjXmk5yXFWzvyqHH9RH3NGkNXvR38ucuvrNHdme8Bxvzvb9Yqk6j3NgLqQPNcwueN8hp4wHwDD3tUU",
  "key20": "5ZqwGFebUXCFKGVDR3E1ez2ZwottBLR5gUaDh6Er1bbqo6ovcGyn2HpfmhTh27AiiCLJcyuifGWqqtQvWb7THF6M",
  "key21": "3vDSMfoqLTFZRs1CnWMrUcfCUybHGQr428vZ9jzjbfGaFgmvnWnngqCaFJYKwG17Vru9gLXo82vBgNoeXxLjDwcE",
  "key22": "3rRS9aZwTCT8UFEen8ffxMErF6uJeaw7YQ3GPs6ny9TWgEt8WTe4cQPQhLmsshVSdb7qjFoZLMjzQjfu4RBEU6aY",
  "key23": "2jbshUVfUoZkYgFvS7dz67zxptTcBEfJeMv5zb1RcN6ovfkjNmTYHWHn4fkvaUG4Q6FZeqHzditMHhgwjaioMYaX",
  "key24": "3kZTe6gr6g64gqggjns7LAtTKbnSSfNTSPnNc7xbKox8SYmMpZTc5UWVMbyx2fxb5qYQQEtYYqqTNf9pyVGHt7b6",
  "key25": "5Pp1AAMcLFjBoTetMykFCemAbFRHsPrmPcnGDzK4nN2Wp6YFpTdNLNHjrcY87TkpqogMRHZYGWefuSVxMcqgQv3D",
  "key26": "3ZkmCq8PTUCNvsTKQb16B6AqPQqdHDoBXi2jDEUEUyTQ69CL8d3t8VgE2sQXZAY2JrzSpWW8NZUhDCkdi61DXScg",
  "key27": "2Nz6b8dWxirBJsFuCF924ZW2nNRx3bMXnTvBf4gZpkhjN74F7PB5rGgfQhL9yxeBpfAgzwkKMbu4jN85WPChpA3J",
  "key28": "s5gLH8GbDL5CHoLbH7wUasWZCoFj1AYrph1DFEEabVaGCw1wikTnRhBSuWTJRiBjeNtrikE9xSTdeGmJHkCzxfV",
  "key29": "4Ao7qKsmLqeFa6ESvJzFQbP3k1CbWoc343oHQvWJUojGouezXjSzEng2aEehfTXZxd5eer45dgrZSuVtej6U1d9C",
  "key30": "55dfUTJEif2tzriVPmzbwgK2N9m65o4ZaXoYNp5T67TZauSE7q7dj2CKzkXra4KWX3b2QvjouQgRzcGUoZCPChHL",
  "key31": "4FR1YjqVbHnFeMSGNwj5ZvsHiY5anK7vQodZMcdH81PBouwubKhpKc4HwkpMiGE13435sseAhsiQ1eXkANtB6g62",
  "key32": "2xxNwoFCH8kWjWPpQ9ns8AgeGmjqquyYnhPNDeiVoYcqB5Tn6ySi1BdnPkMw7V8n5tJZcogqMHDaQNf1SSwQi6oj",
  "key33": "6c7sX9dNQGeA9p29uWP22Ne2FeXENX5b66DvGSY8khTajXeYv6cPANMA87mZESkD5zoRs3Dk6x4Yvhkh334MyhM",
  "key34": "vyLa1Lh7rjaMgZTJzNXv9YuxJqzNhsnVBGX5mXkyDjWyQgsDNjkiKLHWTJi41Ajcs9rKpzftpHx1rdWGUg7wPzq",
  "key35": "5jWJG6Z5VJX9z9UZyNHZPBCJM9Hc9yVUtkqw8TUmg7LnxWQaXHrGcR5NeZzTRrtFiJzBtYeZjYEgM1eReWDp9a6p"
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
