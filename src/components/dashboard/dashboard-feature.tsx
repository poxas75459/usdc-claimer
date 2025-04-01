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
    "4FJmv7fMSiDZU9JAtZXT1gjENUaj27H782kFgPtehMzSTXQtyKN4K6icuhMyQJ2oA9N54JL7DQVXojuUaRNPQuko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GBsMqWGSyzH8BK2krjSCnk5LqSbJUrbjv7stb5aghKK8vP7dSMafTfimpzRtzDPJtnRZ8WYoqJfqvzhdi1XsrMA",
  "key1": "qDrcp7cLgv6rFndkwTYqkTu4J9Aas1aNq2WXoGDtuJa9L9Ydc28uHsaMwGLDm7RyC9YQAK9aCGgqrwgnH7APsE2",
  "key2": "4He9KM7j94TY8cn4XSKU67RgX98mEh4sQkqMbon6bx3agE256E91FPo83SAX4tLhEJ8zDszPga9GC5RxVvp3hW77",
  "key3": "2n63VepvmkkgSgN9Zje9bB2cMjjsVXwiGcS6RNyrT7NcsjYxKv871HdphJBQXgJ6ncJuZpuRgDFgshs6fxdA8s2S",
  "key4": "DS1YVcFWuMWaWwEQNBP2L2nZeCx7R71sfdqPxQjgLj1EV3rDAdGXVAW4nN8WAREmQsEXYrGERmmRuVCNGdpaWX2",
  "key5": "2PQWixLeinqksBT8cHN7iX7s7p1AAFwJDjuba5P8AyECsZUxxj6QpRMbsob4o9eckFUc2p4sJSTdLs8TMuhHzetK",
  "key6": "32NvGgFayYvzzrUyE7syxCb17EZTZLJ4wvT8G7RbKF42UbvBZkhTbjwwvbdGxQepXh5vDJxZLQapaCNGg458P1EA",
  "key7": "rNGUxzz9u9AKdgYhyHy4DVjN8ZMXLf8ynES4S1K3TBFokyNJ4TxMCLf29fTwA1iEyL2DS9smnQsfyLcLZTRi7JC",
  "key8": "5AipcQZJeaBigDQrRmnF5wc3rWJfmv3aL2Qihe3CHUS3qzwdxaYFDd2NWz1ouasp35CuAhVG1xWSpJmLhJbrHdDz",
  "key9": "3eyr28o1cadgJdmC1DvWt58qSEYWqHx7V1TjyheAnTPv9itPT1qJK9KcNpW7KswxuCjFgid1fC1Cic14YERM5EgR",
  "key10": "51buhmx3quM9NdgKb3Zenjw1vTknrfxU3Bpspn7vUe2VnxaM4R4Y4ywA8tTTLBjEgW1pbVnZPm3g6nyDPW3ARdbF",
  "key11": "429vjdDJnnvnp5eYEgty9B1ABBzqdxN5tHsNa9YMu4GCuTnxurytVhYUoPaLFeq6ofMM5h668hsAbzkW9fG1BmFk",
  "key12": "5mzoftDBypvnfzgZ8cTw4GyDhnEcmXw75rSgr5ra3qch1iWzzFQRu7qTu6F7eNRNJxoKWGaC1uJs64bi5yAtG4d7",
  "key13": "667JHySh9aAJMjNNoK7aM1xcQuvknb7J9UxPDqHA7Xk3vS3Hycp94aiZtTyMJq4L5gFWdFMsPQyoQyvAbr7qCznN",
  "key14": "3SDyUXdiP8z2LPb2NcMauxY37hh3b8gL6hFC4JVmnKUZvTNsVvsPFnWSfHuM1HAXmK5HZWhfFS46DkPN3n1cD5xx",
  "key15": "5EbYR4rwtjg1Rq21meNnTdFqkjh4Jpwv2S3RS8XjY8cbdDMpEnsrQjeZ7W3CYUAAeW66aXAYG1QhmL8UwNdsfk4f",
  "key16": "4arWqBGNqcRuWeQTpucqFMPDzKc2ZmiTS8V8RUkcN2byF1K1eqXKi8S7FbjsYjRPFfxAZDpyG6pMw2gYBPNHQdyE",
  "key17": "5vuCx1eJzwar1DQbLczKtfVRW5FeCqXqg7hPGewDSo5REine5nV5md2j93V2twthMhqZeBV318ofD5d9nXVVYHms",
  "key18": "8Pdvs2RRZmkMGrYob2bYz3ooYsctvXWJsqj1VCUiErniNY8E5CnByK9Td1me8DGrWTBZcwBFFXt8DebAq2RiKys",
  "key19": "46deytUb5QRrcSevB4APpUe1RkqGoGUPXzadaoo2sZ2PeiebK2KyqwDX99iXCyPWyBmNmDfTwu1q3zDRYsbzNYbT",
  "key20": "4L8jRZr4XBzHqgn6A5fsjtkq9v7PmGNvjJ4sAiyy6q4YapfPAPcpVchdvXqSgY5UUWNCgs6v4hQhq8TxRjspPe6u",
  "key21": "4cv6djXBzthJfWK6Qt2Z1dRHse9irzAThZZ1enE63DGfcfbzU29dhoHV2SeH9HgtSx4oLDFHgdwJVHY4LXF8NFrF",
  "key22": "5B1UfN4K8Bv2ZUYYackkiuBXLUnbBaeVgHCQ2giiMVeX7ZGKZ3foHAvy2VoPZsVM8vhUM97vGdAMqi2S3wgrrLuv",
  "key23": "NthGwnbqYVtyzbw2KCDDzfN7z3wmHHJgWzGV2rmPTShmH9jdKJ13amTcnQ8cDG3hM5xUfE5dFdrGVCsTEk2Zn4o",
  "key24": "52mjvCnSUNZNz4ME2FUoL9mBQE6djeBnDjN28BF459rz833pccH1vA9oxpkUHpt88iqC3XxfobgWMWE6cL6aLfPC",
  "key25": "2cVf4fZ3HM4BGam3cr2g9YUneWQfHjbJtD4NmXpK53jzpBb73sBiSvvRLzU6vGoyR4UZA8ipQfcUo5WusBbovDJ1",
  "key26": "2oPX2ZnD76NBeJdS41KbojXYXDTNSqfaL5RezaJ53ZVg9auC8cxDvLonMNistJeUVicpayecGUYWY2XRyoJ7PcAr",
  "key27": "5XPa3oNVoiy9zdhHixdyVNrZ3LthRMm2PrXxyNKR8vcHwE585wjn8YsNG7ZZyZvrQ1e61SEQw57Hqaqj9DtiggAC",
  "key28": "2YTKa3Umwyyh9E6LbDexDPi7na9AhofcSPxwpFUF5oY2szDExZYJRyxDj3XDVXymfVomqptgT2e19QynBWvFDWwK",
  "key29": "4UPL6vcv7cjAjctZtbLdf6M5HbhUHicq4AHqLPjGz7Z7KUbC5EfvFA9JF4QhVerxWiW1JyMtXketUEdNvqdHa5jN",
  "key30": "UBt7Z4LaDQ9tEBpeWGGxxir6ZiGSCfxHHdQfPMhTC3B6GniZWYhs289JVdf8GCSbagVWn89m3c4VkqhPBjNtmew",
  "key31": "4cH6fqA5rqaXZEDqxWqtQXVF6f9uphn3VcRYZwqTtDBHtdcnVKVy628RHHybcYsMmB1pgqfxKRfTDYeRsboRhyTG",
  "key32": "2wMGd9A6ZbVoU7kfUCt5SH7KxEwSneYWg5fY6juHhoHqvFfYvcY6gUhVXCL1eCmJoiHyi45ud5mC1nqjNQFAARZC",
  "key33": "2w2vYtx7RMQYzbyqPyHizL4P2dV6w3swg52tfrMGPAS2W8wPQxtCWzWe5qGYyvx9MpoAVLje1bqYxNap25cbqEjQ",
  "key34": "3iPSuH9JyMUNBjk1fRDq6tjSZ4ocbWxyD6TGPVVY3LnBZ8yYBkTcHJ8qmrNGCPBVueALixabqfNfbduCvrZUHqZ6",
  "key35": "4G56VDrx2ybcm78XtCSq7xkijDu5uWawAoqg6mMmBn9awqctMtmztrEpZiHzijXbFWFypSmj5umkunLYn6WeWCFV",
  "key36": "WKSX6NBYxDeJCXfLH5Ehix5HQZeFnGiiJjKvmcDFYwzdGcUpHYAK37tPE4ex339BmCwCYB7gX73ewE2WQv8AKT7"
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
