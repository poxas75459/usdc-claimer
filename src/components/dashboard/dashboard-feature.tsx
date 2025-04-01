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
    "3dbMnFkype7PGXuuw87oeM5BR9k2dRGYq6S3SKnxE1qr1QpTVsr28qH214SnDwtp5xzKFnbv1vnQFKCvcoX6xu1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sicoi9HHLpdEqmfECs5Vnr1SeHgJU2Pd4Ggm4TgNaEtVdisMygEQwykvwVv6s8UqgChwKYASFiqww9MCmcmE1QX",
  "key1": "4Q96vfAE1vvDuevdHB4pxHmLo1yLLKvSHdKv4qLoGen1meMCRZAUXJ4ZxecMGa6JF1KkmWuTx6wrcNWKjSprbu1A",
  "key2": "iy2SDEogets3A9SZ77gBGakzR9sXc8WmoK5VWTWdFaKCwNNe5YhKQdbcT7bgmR9CiQPYKFYz6JfTMvA9N3aJqQz",
  "key3": "4RTK32zrngkRAhfdNU44uNrtb4JNASAqN4HuxGy8ReZC1Jsuja4x7GcypSRktmzeE8kMtgVC27ZF7etMf7VZVDgQ",
  "key4": "S2KBZuyYkhcHu2AW9YJpUoAQYLfaCk6w5e1GUvtcchXZqZwMC2zvnbHvc1evM3qnk1MEKrXufbj88WjJUY2kJMp",
  "key5": "x9hESygrCMJMPqv3Zj26J6hesh2NEHG9mV12XgVBVvP9amacxwQJjgtdfZLk6APnc7Yw5t359igf5GX1w4uJATp",
  "key6": "5Ks6wjsSqVAxSLWnhVL1r4wM6fJYFS17n6jaTCk7xMayG1wiwCHat822S1wYcvv6WHE7rJYsu4fBoZieGGJw6Apx",
  "key7": "4HNHBEWPXj8amx1SLxcSdoMwZ8Mcf7xfdquKWMtyEezFicyxyCfip4YhnvnFCEKeH1wLyCmBApvL3s3KB3JhVHDr",
  "key8": "2GTXF53JB4vnbsB572h8kh75DojZ4rZDjbu5rwiG5KNT8K4P9HitSgqnfdDyFSMLM5fP1dbGFxXkSGWu5NXTpCkw",
  "key9": "3rozAXmQCafDU2DwvQ3cExfh3bZXBwjdY1vSRT8ZJ2dwgQdCtjr2iEHitidvDtP4TwmFcYCRuw1pXytCdGo7Zymv",
  "key10": "2FG5JEEJYWMDhjLdcBNqWr6BdVFiThHmKeBj3jAqCbowDd2HKMMNXN1UUGp9fWUcp71p4VzNowzfPBLT2EFKKxXP",
  "key11": "2nw4PXFPmm2DfdXHbmpfZPcqXhPJX8ECU8z4JfsCNFniekhqiFTZeJ9fHe1yTMR7q4USWQMMp1khGtUBtZqjD6hJ",
  "key12": "65Ao5ubVETnt1j1nbV7762Vs6cLQsu2tiNBri4tJbVY1bDLqF2S9FbtZVL2SDorNnX5xwxvjctQWNNjbnhDTPBVH",
  "key13": "5GdaDRd2pd6ZWTfnQ4aMsgU53Qc1orTBGTVtH3cjvAFkH5Sb39BQ67AM9w8BneTSkbwdK9zkZfSSPBAuHTe8MQS9",
  "key14": "4ijcmFcaKbibVPXdRacKjWKnxYJHcWbyxrX39ePyVktuiv7eWqudSxQK273UoT2CfeHMwVrrkknWPQbtRa1Wd9oQ",
  "key15": "pKsZVNngccieyYrs7K1L1gJ79m9QaSCNRuR7VqHXR7aQKbY6NM1icR1EiegfiQmnEGr4jW6j3bjrQREJu9QeCqu",
  "key16": "3GdfrK4hFhgSGRuKsvnW8se9uwv144P3jTNsZwduujwr2zhPhQCW92KwEH9m5GtU3gAKU8QjPjVJKPvr41U1ncxp",
  "key17": "4sRhwLwoSprNGS7Gqme288GJhSediy4oNeZD3wm4WmRyahigaVbtDj7AveYxJXGTG7TKz7AV7kLrKUSprLe7Wktb",
  "key18": "5CxGW2NQw6yvHv9BtxU9pJMyHhrDYGPWXbf56ihGvx1WL8WrunADKSkBAk4mb5WXgYp7J44HMdekTgcBChMXZ22n",
  "key19": "5poD6zNJqvMxVZAHT8v3qTXTLvnLhzF2erxpwP6G8bphvzZDS4suAwLUe9g4eX8EgqVK3PN5qkZTSWmBEMibpzNS",
  "key20": "5CA1q2sMb8hampTtgw6rJ1QAviB7y9GJk7PArdHe7xuatKo5h73CcotkHvYyFPThRX5VLXuHRnxfqtMR8p8842Qk",
  "key21": "4xa7LHCYV92qWD4cTH5Z7SaBfuPa8P6XRSRgbpXpgNZzzrcmkTZ34FuyFZ8tPUDnV5QrBy6PzM6C1GyxEG2t4Yco",
  "key22": "2mHz4YEPf6tC3RSypsJQTEAvX5QoLWmS5Lb2chcA3eQEoMHd4VWLDCuGBMrSurrPVN6wEYg6v7QBbY23EeHYK2HB",
  "key23": "5Xxq3HY8xggrd9QqkUYVjXtLJX6hAh1YEzaRaxsHk26Fj9hYHXErvheM1DiJ4Usq1H3Tdj6kWP1Sgfpfcgg4a8LE",
  "key24": "4YgSEfbvaiLqA85YC3nSmCFTNtuP1cEXTBeP7YJvvUyeMZ4WruqCacxd9q28LuqzYshXvZA5S9ZPwnkqUyzuwoQg",
  "key25": "33GqDhtyr838Tt3CEWqsAXEnAwbHSXSgvM3BgBENjMjQXZ5MYn5gdsgTgHmrndfYXqoUdiWzZHC8b9doTmFtv6D1",
  "key26": "4WY94ky8X2c3CbMxNHqPpC1ZFd4ncdCpcKbPRrzLgaqqesesF2D1jYWQodbT8ZXMVuj92K7cu7yeirPtQhna1n17",
  "key27": "66fHGKs1eeKAxAajp96vymcCeH8oENkwPWqwn8X8pGLExouYzKnvBzyWxPSMxQmS9LFoEvYggBcviWHJigtJ3mc1"
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
