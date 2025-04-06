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
    "4Jp5RvhqeX5bA1s7w979h7NkcWatnSouvMv7zkbpoAUvXJzRAqb5T4YQUSFRrtWpsEcX8yiNwNXJkZ5ZN59CSRxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uqPNPKrqLjm8UQag2fEiY8b3vyackog5KNqJgC3dpLbc5VDNPxjRNWyrELQqGAu8Mn55zFfEucecNGwDtXqXNVw",
  "key1": "25qgiBi1Fq52aumKSjfwRv7jGajWxnc6GaCuCoCB4n3NcyxcbNENQfERHaNQdAwADsBkYEC8EBvGJfhhWGG983qr",
  "key2": "53jyaqBSaGd37TKNLsYKTf1SmnmVYZRqFjPHVyYakCmwUmSWDhCB7rwBMNCNCTtAqEczpeXD1sbRKhJJmgWL813k",
  "key3": "4JoojVsvgf6tGPR2PsjqnYggGEAMcqb27fLqYThz4zP8shBYvFPMrTyfCwE8XJtbCA2MHidwkFbTHrzCtSu5HQLC",
  "key4": "4AyRSPcaDhd1VzE6iicULPVZgEbod7nWMxD7igJ8jCGVE9EjBjFFdEPFzvZ5JDezLGL5nBsE8tqcUeF3YpfCeSuq",
  "key5": "4aL6GD3vW5ETa8hdR4MUxXoVDVK7NerSeG9finbmKY8qv5NAjNxrc9UwLjFkft9k556gFAeCF5QcirXunLJxv8L1",
  "key6": "vZNwSP3QEiHM7UBxGz8WK3Afvq65sCJcp8c3TDfkzo2XmrMCBbSsJWg3vktBSih4J6zY4Jqod3AG5AaWCPjkUuY",
  "key7": "56p1Nap4XdvMyvVyMuceNwh8vmXmrdfApLmHpZKLpaWjCyiac2wieb5wRtg4LMTKPMWytyRSa6so4KHTMcQ1dkSH",
  "key8": "5kPAbXuxJyKzuQXP5wHvLSxjV9UbWJYa88cejmXs11ocmJC9n2SjotCYjuPWUTEJ7qirKvMcfiw8u49tsTYsihBj",
  "key9": "4hQBa5xvdLMFVbuHcbbnikQFWMWoRg759MZdKRRHgxypLqfq1BXx1ufLo6zuzYbqAuhMn2edurrMyh7kCMzjDM8S",
  "key10": "46gM2WpFcMBorZWknypJYbbE8rPzdQ1vBybmrUJfZkUQp9xaT3BDbb8AaGmSFg4vYYHNy2mSTs5yc23fBzWhjW3J",
  "key11": "2wpXdGMHoXQwXGxWaLq6RqGsfvXBTM2gebCDacHB6akbgiKmX8hZLUs9HztJLz1sq6dyFL32a2xcFJKmGhWTWgUP",
  "key12": "4qbznipDe3hm5KXFubGZ5mq5EAn1GESJCMjeRNHmGN7Foo2Dvfz4TBc8ZgVc1tYtMnJYGUNe4DdsbBVsVtQCgT9r",
  "key13": "5QELZGSu2TMv7Z6on86VWhZj21LkuUrJT2pSNnkMkicZntzrxzKpiKn5pXwSF6T2schiRCBtGFvHxhAVVC6UMrh1",
  "key14": "WuEGMvrK3ufvjEmL5FfRAWS8o1CPVDkKT1AiBHSLDpujsxRVKvTBrJKacJBL29y8dhAbwV7Qi84dUYR12NWqUq5",
  "key15": "LpFq82HXh9GwL6d27mGfmwW1VMUhSBSnVj9bp15DHAa2Nf7ntgq3vvSwNUvJveots7QrjnpfstQbutpA2iDKMQ2",
  "key16": "3R6szoWZqdq5AU7u85cAN7mMU38darzthwDxTsx96jVnYv6HWMCqwtiYSXWLtTfW9yPUJ46jac5aXkQzXT7rmJva",
  "key17": "5xTsyBr31TkYEw5cK9DLrjWZko3reBVeSGZtUkynZMSAGne4T4ypcTz3p1p4k2wCc8GYedCkuY57NQsgaiM8GnSZ",
  "key18": "4qpNzT9VBHfAqyjsQtS3Sc5Ppq7FB9BjrprecC7pvdb6qTvgmF4hkidLed9vNPvq5eF4iopnPPw2miSqwj3J7LVh",
  "key19": "tg8vzBXMMrFYfJuPapcESwvWtWDPZ1rrZ1EkGCm1YsAStHo4j7yERTjXmkX6CdJFAGzDr5r7baR3ipahANZZzb4",
  "key20": "2q1vc9JX8kFXSeHTqg4uCcUGXVewi1Crf1g7MjUJ4xJwAnqUZqJ1aPcadReaouwBFuWTPsjnr2WipJxdtF1AR3SR",
  "key21": "2A4BjMHPQx83YEgc39r1DXShrgM2XeuSXsZpdzqfukwpSXwm48aqnR7cUTTWPG1mNDUsSgjbPNjaaZqDxH2BHH8U",
  "key22": "3aumqtfBPWQc8PfZiKKp4wY3HC4MQb8DbVmVbzLCzmF81KDDWaRJrhZ2yREoRga1rNE9QawLdkHX93m2j2rCd55d",
  "key23": "5x7EedhoT8z9YpvBXCDRJip1pBtY9mR1wGES47yeuQrdwKKf7EXdaz2PQVKZSFzsx8FoYJXQVRWSx3M1SHCq5oVU",
  "key24": "3Upo2o7mGuAx7fBPTey8iFqJoJgnXSeQPpAoj8gxEFHJdcdGR51HwLRoEQjcpwHHbccXjbRAfjx5KanL2zT6LpuR",
  "key25": "3p47YbnW9yx7xYc1S3EMX2Fy9VctL97UFCs9DfNzEvVZJB5zuAcrzq7puhavvDkXm4fht1Gc76rXKq4VAsH9abvb",
  "key26": "4sZpMZFCAaZxEkVRw76qCDhk8ysuvZ5R5LvNVojueJmkyK1vFTec3kvBoTt9ghWTfiFPFV5TJvt7q6pYGf7accNE",
  "key27": "2AtDRZJvceXCNyEy2HqCaWAwmgzfUvwbi5rph46bdjVdjZoSyW6V5YTWWoZ3Wb1bPxVsPq5HQKqWzZgiWNwBt1y5",
  "key28": "NaupBGD38dzmZesMwhEUhzRD5PrMB2RvmedjGED5uRxCgqPBUsihjSNuySdw54udK1yqCmtRxXBqQBCLT9f9i7t",
  "key29": "3RHJt3s7Fb2FU8eq2XpURoiBDsNESKKFm4uenKtoFdRQDVSZfD2RjbVuMDyLjfDtCW5fUxg5Xsz9a9eZ9c5mbVMe",
  "key30": "4G3Q4bYC7W8aZL3BRweVZ3Gv2S22wkMuUtC9BUBd5HfKV5icwhPSJV1qghkQtanMkJkJrPyLHaJwo4adyhRkjpPK"
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
