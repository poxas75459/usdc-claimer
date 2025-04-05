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
    "129DeBae43TV4EEVuEThJY3NgRJoWDTGXWXq4gN2SPFf7fuBLp84u9y3qsbJegc4jCt9MczzJVrVNsFMnbpM4cgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vmjGTLLuiW9NjAPcgxz56z9vWB6AGygvLnEi3Af7nNHcGqy813FbLkNsdj7E6Rt7v6yJRrFwsjvDn97mMHaS1FH",
  "key1": "2BoMn996LAHEEUJGmA2jbsxyYKcrEpbBTeoMcVUX7HC77bV3BJjWqdM8SRTkcc4ZUG9j5RJRsTeGYKgZ9zfk9JgS",
  "key2": "2VvybKM2G9bYQrscKTBJjuMxuBu8xh1FV8nFC3x5TwmXkYnXZpghuwouwjdDTbs1S1e8nnT73RwB9DEoMSVf8DsV",
  "key3": "WMYhKfhg5nKS2Fs6VRWUxfWCrUCELyjug4NBYP4mf7YHiUdJhgjZzjEMfrtv7KjhcMk3TeAXkqowyXpoCqb3Tgv",
  "key4": "4qYbbTjZwoCzyvDG3UcTJXMrGFKQzfExDQdaiYbUbDAX6tEYQRDfGq3qXpSff1oeduqnjjAy3MGxVWmFd9piY7WW",
  "key5": "64azsEeNNKm3T5Bjh5KYy44ZBSMnBy5Pb1E9jEzhNSFDaa4DRjkDGo5MKWKALMT32ooMd8VDV6XUwLrSAG2F8tG6",
  "key6": "PwvfET1x2oCFdhV14y8oswSfMcb4FXgpcWQzhp6AbtydTcZSDEXAnh1YQNsJS7JJp6WrHnxjEeJG92DyEZQfjGv",
  "key7": "5WLP5KS2FMfioRtXawgY45N9qTttaCTYzibcSCj6G1kxCbL4XCjkiaNJ7qrzsuEsuLz6E7YhbeQRkGvxTmP6GpC4",
  "key8": "4Nw9u7Wh9X4tpnNHZmP8iqqpmgrsan3xZASHLPLmKxZ565PbicxbTRnLL4tVj75PqSjXWwRcmEcS1nAWYY8BCtnD",
  "key9": "sDctXzKY32132VXsKp2KupM3yAgBP7G39GndpQskHPLrKziue9t3AguU5xkz5Zbv5UU4ZqAXorLaqyaJ5JffUng",
  "key10": "3XNwxZ9uJngSYyhK6BjfW4s4NKDMm3afyeUzpocEhhhSVHkLyUDm7TeYm82av3haVaDQS2NwacRQQx5meGFjdMrP",
  "key11": "5Er1ySVRn64ysbpmr2754zDA4RrCfzpY7nE2hNsMeHRMioYP3ngNaKrAV7iSwddPiGAhGzbouWjVa5FiNQfgX2UJ",
  "key12": "4v5DgNk946eMNC5GN6PfqakgsyrYGB1MKEcMh2vZs4N7H66zrnPKQCi6QEKa38ogDQ4b6tYVPzRYvgfrNBU976ii",
  "key13": "88akG89rWxwnX3NVSnpYiWVeAL8aNeeHcvaeHKG13SkxzAaG3u2wVi94YHrq6A13XFaHMuHq1mCi35ETWfkxo1r",
  "key14": "3kYAMeyJjErB5yjrXycJdJb6NkfmvqCihDsJPfEFaomRyRqJzv9Q9KWjkAU3rDd6fWf6z4z5MSQ3GUGVchgMbtHR",
  "key15": "27pFpVtPahwywc2nqzfEWuGCJGRvZJLyakrXHCXVbgVRELi1HjDFmUzYDrJCavf7QdB4ZuWS4Wcko5eMDyY2YNwM",
  "key16": "3ocTsXyVSch9L6hKtsKys1DMGHeR1EDG3h5KE4mhvGFm46Zr9apbZQunMvmS4Z2cZNNcKLywuhj7AAsaTF3LvWv6",
  "key17": "3CFYwH3yhsFkaomVd8ZmxzT3A95xBjvovu1fXyBHWB4Zev37e3o1Tm1HGqWvk3sXhk8F6XvPDefwotjZnVszPaAz",
  "key18": "4Bv4d24YaE253idncMJ6rQfLKrCHgcF5iMzoe55cdidPaJRAU2L6jaM1vmiRgUorJb8q8gyhHBXH3LhgHHdCQDcQ",
  "key19": "4bsThqzrrZU9UZa7CFY6MKJ5xXav7SqUUAKE7G78sacTXTF6E1XUJAj4AWUuSBzZ9eDvmb1YN7Aghyu3t2Korj7g",
  "key20": "63JSQKYJRbj14wg6YXGz6efqGKATX2F1XEpb9RxJpYCscoobdKHjgmUuuGNHaz694AaKqRXW4Z4qrbrwsbw6mXxC",
  "key21": "3CKzVEm7tou8FZLSveKTWX7gSZkZMdoAn5n8Vsf4wvA4v2ATfy1T3qGoiXqrqhWodixisibLZBVT3Wm3LDBmfNbo",
  "key22": "4mdzAD1Dz9HX4ZVCEEmSyEJp8XN9asXUax7hgVFBd2eWjNRe9iPgNUksxVayDnENrCxF8ypAkBtXrnCpKNW4hV2d",
  "key23": "2X1REvHVG9ZMzGFsaV4SQGXZTpZfFhYV92mT6mAu8QoZZcvQoBXrVX16pp7YWjt1gmcQK1vGAPvHUJUUGm5RkvP8",
  "key24": "4cwGfgCKWePP2oWfuyYyPeMrsCHnbSUUVpfKuW5vGQsAWxJji38RCNUngj3k983111iW4j8AcXMqriNHEDgoTw8Y",
  "key25": "5Z7pRngbiZAtkqqMx8psdjX6dRZRJh5KwEU4vgw14QKPfUoACEa3HBm8DpAW74iGLDre1KbCUmA4n3tfbZpA7foC",
  "key26": "3Gf6GEUb34zZ6GQ9jGKDb1f42JviScYxMeaNa9yWsgtqJuKUM7QU161jmzgjy5WeSUgzNFEtK5MXSNLDDtZpbZHB",
  "key27": "32BSmD6u2weXE6fkQQtwH1xbiJt89WaDAbUUs592dRL6mjrpJ2rsYyFQaHD95vNa1qMD8Upjg2bzUMkjUTiWDWGM",
  "key28": "5yNJgem9cHknUi4dRsToJzujoDB9UJxfg1vNo7mmh8VBzXZ1qVfGzDPEA8KmnwsaQHgQ9ts8izCoRNSfq72Nu9rK",
  "key29": "t382WH83J7HdinPxG8LcphrfCsTJ99pNJE5oMcBmXwKhpty6wcxFETTm4KQCPVwPgZp8zPnheyB3xZc2kBbhz6G",
  "key30": "3zBbat6dPFmyY5WG3dbw2XzkXSN5V2VsdvijSGRFTHrTVTjYMaG7kkQHu9j8fdRwDvh7Wbsx8zfX2yHC5VA66pij",
  "key31": "4VUP2psYQsaHivuG25H8nEEh9Bj8Ft6mui2pZxiMzGhczED1DJrPitsidnMCSj7J1gZmtYgHGmsQLySrGH2KiFBk",
  "key32": "2mBFKrbamtMCji3wqPjf6D8NU5bNMAvxvSBwGkiiPgySSrHdUqWaH9ZKydWSUDyBhNKtfEcfXK8VVvFXtvPbsbLk",
  "key33": "3Ryb45r2atxCVDgDowgNPcivcazQfYfXCRosNedjivwtoYxYtBhCDq75ircXqFwGmVBxDWmirxg7s4H3Pv1rkp4n",
  "key34": "2oDgycLdiJcr6nPMPR8wPVGwq7Px2DjqLYthYRjDMr87oTe6J2YSM5swVQsTPF86qpaMWgaW1Ru2XhWgdX5AMcQo"
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
