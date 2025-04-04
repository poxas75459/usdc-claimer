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
    "2XAzmPJQf91hboNr1UV1HnSNWCtuN3MZZg9A8y1rXcqcRStGP2h24tTLCogyWzG5ZJUEZXaV1upFCxLJV43dYQWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28VYpkS3MyDpfh3Mb31QGJhy6GGSM6XsQ8XqHuBtsHihowoduDMimMD1WutjgvZiMuP4ScKPu5atqvpgdzcwgQhf",
  "key1": "4N4ev16s3nks4tzf9CmS3x1hbhh2VHJrp16PmZ5VirU1tfkUdEW6WpmfFcVL3q7vt8UgvmGiNo5dqDAFjEk7ekun",
  "key2": "4R9DNRQf9GntkxUsUdu1LK9xCaNFV1iJX7ZgFRvPv2WStUm4Lo9Vh5K1WR4EzouLxC3wwafMo9VKK5t69TdTTWV1",
  "key3": "b4qbyhH39rPueHuyzjqT4eTHPrVgHNWUFj3Kv8dqYnk5cLcJZZkfGRc9v4JjBHzNVy25jQ7gPiZ4aXX2P5mjSQ5",
  "key4": "58fdoK5GMFhsarsBepvQdVciA9uPXAgDXBtmnC4uhtvp5PtmpNnbCe4GoWdjshYZhdg7SQPJ11rfg6ofHFFQUkP",
  "key5": "TdGxLX1NJZBE3ugt9WPejc6F1Ys3PM4ZetrvwFHDahMYhHvkvnyZcp4VprNLAC2ZfxQqygDroJydV4MwSPsEPMc",
  "key6": "SaWZExT8NrzFPwPTSpnneciUtN8EtTc1GX1DmU81vBn6L5rYrEbmCAgEGsfMfVtbqKDRkU8SA4YFx5L7WvoCrxD",
  "key7": "Bg6eHADnq6s57Fbj8GZEou5YaxkvDwFA5kVEBuWY4L6cRECm9d7WZJwb8R3oirJy6EEudY69xWxp9h8EeFkNi9N",
  "key8": "4iYgkbS4AvuTvyJDteKAZsvjq2FBZ5xm28xiekXwf8oggmq2RzoQrpio74jq5RE1A7WAeZ59XuvmnRWRJ7uArh16",
  "key9": "5NuXqvm4Nx9fPFxA8HXb1rNwvp9RxSja6GvKjV4U1fkweTvPGsAdDwKaFNE8ikR6YuvcExLuDH2yduEPRTemL14s",
  "key10": "5qF5uF6c8zYWragJEaxtF6GTsRExxFN5pKuHhMt2HAaBCnNNPsfEPJGjRjF2JugChXTg5iXn6Am7j21S8duqpehN",
  "key11": "2hdr55gE6mixAikWVeRqJ4KP9Ty3VLRzcKABmndzEcTFm9cXxizFRNbaaYZndFaSXN5ppKiNdKaa77cNo4mzMTRu",
  "key12": "47rtpaDDAy4ebHNx4ZM9kh5UGHNH7saXyCeGi9TJegkz4vQ9TebhmBfyCA2s8tUdPSVNfFUB3mJ9wY3UM3pDrkQk",
  "key13": "rdTziRB1KvFEWWA1SXApuxfjmM892vUevWZwhLr2ZegZQWfgTCqse3uvfJmLQoT6VpZ1To9PfEUofFcPiVHAEQS",
  "key14": "jhbjegBK6YUwyHS35KQvmMtcqZQajyU6vBEwGTT6Hj2Ci7dEEVukcvs8EALQPNLQrg6HF39PGUhc37r7VzdR4hn",
  "key15": "2DzucWJuMvJS7sEmLQfr7vtztrzeN2C9TQkt66DqiYeQhHSFYqXXbVpEwJHgZC13rMgzmd53zwJzMYTNZ5vJprCJ",
  "key16": "5qYVkDDAX1oLNiPcLsnrajwvJr1isn9bx3ZbJEi8bDcXPe7MPkRymKzX9bGDUkzvTE7tyzP7QUCnZgq8iphszLJB",
  "key17": "47HrPG2F2LFRyiQZYFoKHUDFyuP53QFGrNot7m3JVpuMct3NESL1nLh4R8jP2eWrdTSQt4byEomXceRkFaGsAt62",
  "key18": "yXT12gogRcs6emisyTm6Efj8P72xuM7CYhm5Ziw6BPF5vCNrEuivWHr5Q9oQHDucnRR5GRoBopGThMnqU2oxrYg",
  "key19": "ufDjx4fsCdHZb9ksHGtwW2ZRfouj39v4gP6VtWjZ5r2Zq9q3PhiTdJAcBYWjRSHK6z2FU2oSjQkvUxdvEDumc2r",
  "key20": "2cg6TkHdsbiZWFytd4smPJGj2pGXiKvtcTzv1uPc1tPj3W2wTSU5dHS2VbmhG98hXtbFmfamzKzEG8xSDRhDHA2Z",
  "key21": "4uV5ovvEVQNDCVG5K5fcjBC7CXg4r5NS73uZxmGLUhBsZ97RhaitxDVGjaeg1KpJLbeUAHyLcmQ63R7iRHoMujt1",
  "key22": "4hkg6fgzy6vVZcxMC6hrRA1fEmm7EhPDMoY2wZdabDL2SyHczAhBmqHidpCF96GQDWshGFV7UaBz7N5Frp4LJPLa",
  "key23": "48kk4gx1xxFZV4gUZwLkTzbv6W5SzFRatm3dRts64CvthG9b15mwnj2Hk4P8ZLznaQBzgkLThhx74qbE6kpREXMx",
  "key24": "4KNM6gpsL1VkpcF28uVQkTZ3sdhvcxCDDowmTh2EqNfEUsypdew1LTdtzN5DBbwRn4cKikJP69HbaNQVSFVNr7VT",
  "key25": "6xxEijLquEbPv7ixCWBy5hcx9qUy3pvXsjFGVmCRBS6RihsjVdh5NxahRho3LStSuwqmW38NhMNntvYcY9DJ23F",
  "key26": "2LTwQSCN29ntQrDTCeKdPioZVjQx4LKeuLL2ZwPcZLSrkpfMjopUqvtT3ievDG6cnknkibUgg2obYzncLq4AhpbM",
  "key27": "4fhErWjh4jQ9DWD9GJ7wmo77yrqqUweRWWHwZgLiV1uEXT6qygPbFxxuWS8DvF8MirqRv66XVFKtM2Eq8V7UShCT",
  "key28": "4FTAcXVKK3mXegi7XmK26Dcrv8te57LrXutCMBZD7jd9sMvPx1xtsvTBpAMrw4CwSW3HonJT2zNaCmic8p89JMzd",
  "key29": "4HXb6SsLVkk41gWYvwi86SordFoACP2e9kWp5qX3jfvQdteu39pEYrNYdZK1AvLF32TR1jLVUK1iwhVfTQKV8rrR",
  "key30": "2fkpmZFTbgCkPJBRkJpi3oQbFgSXBuhgqKF9ZJDWsfMcF5Jzg2KuT9T4bVJ12km5vymhAVdnqm2zaWTuZ968mVo4",
  "key31": "4ifnyCHp9zmoEJeQMWUCo5DJzgtZjtNc9GsdVXNUZKhmYE7J5xMP2URgf5mD9nNdD9E7GjtmSXBJ3JhBZQPz5zK7",
  "key32": "4rF42Ta6h5sU2izoyFxTFrEd7YwZBsGWdcmhLquVC4HgK8GtvW7bfpzAnkJ65qkDbLjnrirKuYKFqMyCaKhcFEhG",
  "key33": "52K8NVz9T8SK96wSQT6p2J5N8huwmmWmCRtDpqaVfgG4zxiffD1CRGkNBLaWJjCJ6qQjxvzLAmdMxZwUSQuKAXtV",
  "key34": "Vo4CD9Zdg386iE3rXQdivjFjSLS8sFBDqdYLUXDn8u2yNcd9QH5XXZQxFebyXbMV1Tgioxz936Y8yKTXLSytuAm",
  "key35": "4GoLJpzBRPpo8BWRJAG2tmVGj4yeTC8X4nZAPW7kgMTdx5UdK3RALyP9wcyP6TmrcPhRz86zAxEXMX3TdWkWazT6",
  "key36": "7r3S4q1DH6gjz9yM6ANwoFjK96nb8QiUpPKmqLVAkd4ndMroW3uWnFNfnL2xhfGwxDTvec2aNwzafKQzbF3XtGX",
  "key37": "Y5CMG9qay6hxTLnqB26KV1qti8GpevUZ52vKdkRx7hEhaEGdJ5PsHxnbpPmHYPinE7ZNKbd7KBMfSkA2RMJEzeS",
  "key38": "PzTBN9HQKjvVHQuXhVY9s9pf1Jnt1124HUx2cXzjqVF5mmGDCwA2z2kbvg2vpoz4SU8dpiEvui1z7FDZGgBHVBn",
  "key39": "6hwyPN6iTk8XYcBMbPXEzseCUi3Ey7Jon67b7Dqy1cX2SSxqmoNUEwQ5RtjhFhBVtUbJZsPCxfiZFtef7Dod1vN",
  "key40": "4VeDzoCtr4n5ohLgRN9bD6JKgzuGo5TJ4Ebj1J71K38puKJ2nZPpuqaBXsy9t3Lg2brHZogroA1AeRGB51s3qvda",
  "key41": "4mpExQQ4trKUqjJSGMJwFtji3Uj4MNY9hVhUCkEJT3Rk2PRz4nzPhFjkrBg9oJSxgTJMWdbkZg4u9GnBohKQiqVS",
  "key42": "39PwhiAkp225QayZnYWD7vy53BE6WrcGGDoiFqSj6HpmFptmU1CAGNdaAqLkx7cmioyySsQyoELhnByd51vDfDpp"
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
