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
    "4qMbojfbpnaLAPPb8K4wFq9AQnVBxNaKp5GcCNjn8SJUkoC2zUFJr93mTS6BaB13nXYuDwvqeuPyotQyqgmgfLU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z25raENh3amMpZ4MqtLPuju6AFrXFA5KKSAk6ZZDZ1B5jzmeWTK5av4cMg8L8DeqHoNtw8U7kpwwZGejC5QGYrA",
  "key1": "63XFAskqVLmLbt3RfSAZxMMuruqXMZ7qxiBWmUUqVkCnAoy75eHsyKvhYhCGeSHTr15CmyU4fvM7AZm9nF4f1MgR",
  "key2": "3CQMVwSFsZEwaPi6FHteTf2kiJaZTEX2vTgxYCrsdmfe3H6uvgicxict3Cam3KrmmjDpFe5toG9GnKM7XcQEjJCY",
  "key3": "2SR4SZoAPLxT3kYB9zX4x6TLdWM5hMETnJdPTv3QKKVwZkq5cZtEYW8duYWTRyaAdPokNRL3QRhnCQqnMfUHEMqC",
  "key4": "63oA2p17SxoD9eegVeJRhQ9DAtS8qUrxsiueMwuJC5qpbwufrq6qRcKucmjSsrkvcGNd9L87xNAs6AWVkjF9Xoto",
  "key5": "2AWXT737B8htyfSP2mYVhk71mGM8WnvUzAXZNzTeXZYWJCUVR2t5X1v3141CPuAfyXD4Qs9sJLTvbq6vmXAzKbwg",
  "key6": "4nGDumEXk6RCaDTgEyUB41xpfkDAymBzxa1Fmk3N7LvTVQAT2XkWNbucuUuaMJNW7Kos3xgbMwaeNS5oezo3maRZ",
  "key7": "22jtJFEhHLxQCyARXBT32731cssJK77FvTgGD6REfDHWWPsB1eJgG18R5DtpMzSYKN7LzsYE3yMbDqSPhKovqyLA",
  "key8": "4rzghmqfjPzRvTkbMV5LRuev2MqT1P4wihk2fh9huhLSVdJFVDa57wN7QLiZaENPzVYuST2PcBDu1vDgpv7G8ZSZ",
  "key9": "2jETMyQ6fMWDRa78Nc2aiMgLJ87nnEhH4sDBvYbMpEeZLkWhWXaNRvjXgqftVH8vSjUxpmd4RZNZDoxE3QoFVhnJ",
  "key10": "5aPWMu8yQRYK881WD3BaD5Euth2iQ3GVQhMdSVDm7SWdtTwfK2DAHFkqfhSM3dDNodwm5ge1yANgChziQ7AtYoGp",
  "key11": "5akVJbScNVBMkJ4cyw9EPkyqHJpsirbzAavcY3W1MMFBApKMqBRXGPtyGXWGeoBaarYkb2pmhUNahhnzPqYJTSWP",
  "key12": "4yibZTNCtyiyoEtTwVRtDwJxMu1eRMVeYpzQt9EUA4tvGoQPZLmGJgjSMKPjgXa9kxKBVDUWjyqfZKmG8dLPPKgG",
  "key13": "3FPpknqpCLVtuMhGmA3ZjuigieTHRdjak4mkqDxjkuDftt7EjvzmReYzACtW5aVXV5fn4crb8dea87rPsJFgtwT",
  "key14": "5MNvEDcxR7oC93mpKNnvexH95WHR96DcTuf8CqoHUzaq3S79xYJjzScZGy4QRYsSP7aX7ZuAVsaezwtq2N6vtmMh",
  "key15": "s4fDTMeySU8Kqu1XoKAS6eiL2mseHMg4Z4VxnFj49GboazqJambzQev72Zy1AaUpuz8qhxoyebcB5dYVPukZcxP",
  "key16": "4dFbxXFcbbSnehWBHZKxgtQZFCR1CmLz2SXPprgB9v36zfNKveHbPsk5HkGAvWyns7iRJ4ehYrjuwJKeb1a7LTTp",
  "key17": "3UwAdSdc45zHkEeZ3XJ2NL9wX5Z13mnQdBR1XFRqFfT2Uhjc92XW18xxgJbjvdVYbHA3on5gaoGUbiQFc64nnDaU",
  "key18": "49cSNu432QbZZzcjgiqwjgZrNVm9qUEYYDeLztFoKnZhLgLKcVQQdGqRgE6HKZ11fPBHMvRXTEQLUkj1pwKaFJrM",
  "key19": "3YtLRnDx2DC372AdRft3CP1Tj89vYM6imeHGd57DJUMxfCTSBvdXeKwrCgYutHHbQbXvmBWa6a2f9vWCbCzzqy6U",
  "key20": "RueAvJG2jZMpoH4G32HtsPQvuJNBFVNpLFBCfGNZqt3gYmHNky6UjGjd5y16JReAhBFWcC1Tajq2eCpftkvstyN",
  "key21": "3UUS3CDUgyDbJXKLXaqibqSXuQT7mtYeMDUDijrN67eoAt1N2nmix1czX9M7dSGJTCP4opWWXGrS9y6AdgNz4fJb",
  "key22": "5bfZ6vJin6ZZ4rghq3FjjFDdfdTTJ5r8tGBUzxdDFCZM8xjrPJvgA8FWAPvbggsTDMkdnBcsZAFR6JM1rAwmvyaH",
  "key23": "53PzLBkBxXP8y6rYp726dHFWTJLHWWW4rrEmBQ1R8KSwFyGHbe9vUpo3bQsa5P9eHbnig2Z4u6FNcLkyHH2nyeaT",
  "key24": "gkGSpbPV84ZkJWH7647eMbhZFg5eKFndNeqvPTzZeAveijZungzfUyac2rzDg47L5Bkv8wKcTLB9JqmLkYarREe",
  "key25": "5iaddi2T62VFtV4x6MdWZ3uwpjY76sjP8HVi7w1AmDx7cnaDZguCof8s4y2e8xcg9hQZ2L3Lj56VXebR1FNTV3XS",
  "key26": "2SeJhZPbrua1Jnk2aT4Y7RLGVjzyr6K5DR8eW99wyXrNdx6j5j4DVttBtRVL1bBsyGg88AWrhhRvRLy8Sm5p1o2S",
  "key27": "4gxbT28kFAz9xDGJjHtnSDMgEJXaU1pc8AKLb2TkvsMTXsT3AwsHiNWWfk7cSHhBc8R3wr8x7XS3ursK4hLZxkmL",
  "key28": "2KJMDm8XcVgqWqZtJemuzfw2rcN1RApBrULZHS6SwEkihVuCHtuS4RnBsLAwaf7GUo17aqWH65CKuV5LcbwhzDQP",
  "key29": "48pdyBMzkbTPDchoLtPwHNM4j7FK9QknpUNGzehDHf2zuBgoNAdV3GXgmKPFbZtzksFaQE8GdidKpvrS6Eb2RkfT",
  "key30": "ytA5oE38aUAS84n9FejHRgs8QrcXFCuizoLDFXfanDmogc2LhMPXkTeDd4yrnYBbreNLaX5WY9HHCCi3R4Pdgqh",
  "key31": "S46E7aM39B7ZctVTvTm5BcQFUH9XdQJ1iqRZzp8NZs8RpBEMQMJaWNdjmrQoLWwd4C74L6fUbYnJ4vLSD7wnbCt",
  "key32": "3tt8nGvWihUkCaE4cGQb14nPq9J9FQenULhqif9aq4pzDcNqcL7521msPLegvZMTEd8UjoWSDfrGwvzcoHSrxeeR",
  "key33": "3Zd3FeKDjgLW1W4Q85kCigJ8r5VRuTQU2CozEuoXRAkYqn9Vp2NYfTjTpienEGvpTWWJw2EHDmBKQgKjLaWH1hFh",
  "key34": "4AqKZpQ4LK3QkfSAddLEnj5LPqm4pDBjUwhhpt9aoRpRQnVKV1H7vjXZUgYRPk7FnfaLSdafjXkH36t1DDB5AZY3",
  "key35": "2T8Dgrv3hvBNRWqmEZoJdJmskq8KQPW94LAJxCyLiQF6N7D2wkvFgoxpXZucEj2ke7bCShNJNyHuUsJybQXVphWD",
  "key36": "5dHBTE1xPouaJt78R6zTt6FYPDd539vVhjzp3J3guQetRvLAz9dGtCfq3V8mCN5tq1Mr3x7hmwGCkyK1WyGRSZwU",
  "key37": "2xt8cAxd7m9F6otstGaDuXX6uwMBnbimn44PvDtMCgsY4eWdg7uLvbwcn86hnh5jmRcJbCG8nrenBjHrimioctpv"
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
