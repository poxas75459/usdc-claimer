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
    "5KAuuzK6XjvAbhibRLBSqYggc9nepbSCLsJ6d1ez4sZgNQLK748i2sz64uFmRs9Jinsmady3i59uJpVtcZvxeCLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sGxnz2msTuiq8DhEF1WA1LFeWZeqwweEUsoo9bF6XtVyoNrPt3oVWfbv7A4r4ERXixq2uCgCbJLkuPcFa8Pdc6u",
  "key1": "34mRW5BaVcKm7sVocREyU2jFVvdMsCeFMSo99JTKfr7iNeudWmgu4VqJxsiX3V3c9VdTT9E8sWxszoCKLh6nWwcL",
  "key2": "3SHphuZr14P1EpfyvW6H6xh8k1PcJ5x4zRW9GKPnPa3Qfn4FVoWz4GHH2zHSQoqwfmuU9zj4xVC155BtbCv9fWBH",
  "key3": "H1XBzDqthefViDYUf3QJxjea14Scs258XjUMivk6VJcTUNSKfeTHrUjPyixyEx5NbjujL6qa8CeXhc7MydLT5uR",
  "key4": "4nVTBoXPVAXXFTcXyP3TRfX8RGWXrYCfjdRVPpMuSMWRtNjBoxZPXu4HQMxC4nR7THtuqMycQ3357LfLp48i3wwb",
  "key5": "33EiGmhzn8MqWdr8jv4SDwc6PiaGy3AfC54zVNERMRwYDsddYJmqu3DDym7ngSMceDsQCjbqWADzJnaTmL9QVTYb",
  "key6": "2pEf3fiZrTojvf2orWL2jfkPP1rFq4zy4a65MVD1aZkd4AAPCDt6zCX1jSrz4ebCMxD2ZbUaoFWSdWYkRzsqQxFd",
  "key7": "581C3FTUEsuHzRcRQ2Xm8MGkDBkgpzMpWs9tfLrgUTrUwz5anacr5WGxGwns7dL2VnhcRXJYfzEfsKbuffTbrQHY",
  "key8": "5GAeqts8DZJQkUSVsQZVx15FMXJna3aDfXUwn29aXHngVY7W73T9sN9rDj264KT4K2FmiBfn66FQb65naT2cTDHU",
  "key9": "5EphHPmqgsQAQpyg7ii877P5gQJiq5vJoTX38Es1SiC58egL2mr2FVq8FvekxpdgoZ864zTpigpxDE5auxPJKJXU",
  "key10": "2DzJp4A8LcMvkrjcckT2JzccrccPyDK8V3NLT3cFfAyV995NZ9VhMNvCFDaSXmGke7o3D4o4hNfhtFTDqBHH9viE",
  "key11": "4WSsay8ucsMhgJPiPnaCjBYrVuRhx5ocUByjxrPW5fKrKqdDueDmMUe2DZbbRPXw9y311da6enM9QKDHJGeTXv2b",
  "key12": "5xiWuqGeFBKVGSBQN4WWQ1F1RT3GuMkzoH383BceQfAbe1F6eAJ4pkvehtodzUxqZaJ9EqDaXNCgD8aGQXDaHbR2",
  "key13": "21onQaJNocNMY6EhEctP4FtuRjQs6ZyiCGFZnY3DQdae2c7nv3PxhmFXcf3sH9PcvvnBf1Ss1e4Hn9rwgjQ6oZtd",
  "key14": "2k7c4RGWEKgC7vJVZPQJ1ZGjQXrTSJjgbNj8Po2jgz5ywb3B4iPyytC1QYaYA9bZ2KBppGkAY3NgpNrZfGgjLLeQ",
  "key15": "2cDitGUmp2vGHoqW1AXBEAg5PBYoqYyXVbSp965s6hDR3xei7gbcQybPR3UHWEMp2SUVt63gEizUvjfPhDws5VQ1",
  "key16": "5JXJRhrJZZgT2D8Wh6GnNgFz9LGHQnSPz4yia8JdrNZbws1Gv2fwEpftsHfA46775RNmmDhECHv1EVce2qpPDu5m",
  "key17": "4praSY4nM4gZ26UpRmJovrDyutYYPu2WmcxM9XpijMejv2isGH6Xcofk2bcfyoLjGnxFj8Txk1ZQhAevPwajLoHd",
  "key18": "5VEB89JvEWHRCm9bfqQ78ZVysKKPgG4pmX7NCLnxgW8h6Zbxf8X2rgjQC8jdzktgFHjtuw3BLNFjcsRcC1K4Mfoc",
  "key19": "TsxAdqoLy5jt8azzeHfpguFxZtJm5rUA9XoEGhDj33RWNZdmsCwckpQVR5EVaVB48Uagb2uFEGrXr6m723SRVFN",
  "key20": "5PaV79Mzapm4HMpoRSkjBMyd3VL68ALTMSTYiQBakTsmMNjauzn4icjyZjnP8bEqVDFu5rZgCSzTr9ZRPaAL15W2",
  "key21": "2kPXBBh7o7SYgm2DVPPzXbUtwgaChm9h148AXqaEZjpP5ymTq7BNmBdFnU8Rg1aSCtnTfaoViPFZMALsDQvfP4jL",
  "key22": "2swxtmXHYRxgbFmZM4T3iMtt5vVhGzyYwFdxHHFs4b9GehnLTU9cqbgVhtNpxhWhhUVrq99fiDk8ZRyGRPh4QkJy",
  "key23": "3EmWGtkrzCBaY5qLCS52vNL2CUZWtPbXYayKrF9cuuq8xNMm7D2K58Vmcvh1eH3fgdXqXdXmdJvpyDQcjJiMc68X",
  "key24": "3YEorEiHM9pv3Efw2DBLPMqLjJ2e9fUa9jXrSxTC6JCNiMq2iwY2QQUGmsgG5RcaAuu6n8uUQvq966Qh4HpMiuGM",
  "key25": "2TkdBHCmZt3xewaqfYbVY8ChFQ9q4Ls35eCgJfZgrmnEDe9S4LpQ9bVo1feyuw32ugPAKSUUiKpKGKVpxYBYtUSs",
  "key26": "5rrqLX4RcTX7sa2UqjfyTgtv1vF9VHYjBgsD9CqBH3nkqGQ9ACG2NaGXaekKid5yagx7MubWQf9fUfrFnCGwmUZL",
  "key27": "45mWGtrCwLUgChgauxynizkqrTW337g5TN9EdKbSUAd6k742dsD4TRYmBNVQdkxTM8F6EDiHiGNvL3NXQrYKo2Sy",
  "key28": "uHtsJmVSLdMngXZuKvSh4emo5PUvTQApe8vLvwwKK3J4DrguzQLuCT9o76fQEMdM4wSbWeEujExcQxM1nDWxkJh",
  "key29": "4nLkZm2D1HSCi1okLypestVugzRafuZF7hWSf7v1Dd6RTX5QcmywuVC8d3MqmhxXUYJnLdqvASX27MM8mgEB7TCp",
  "key30": "4hXvajssqy5wYt2wxf4xVTdXYxFeS3mSXBvui5k4nrNeUQGyiVNG183WXHgJWQkp9at8DvtfW9uPzgbhV1j85wQ3",
  "key31": "3ibjMpCGbKaoWPes1biDSVpecXJRJHNLXdLu2aHpjjTT6vrcxeha5QUQDAMKsJUqes2LwDrGC7zZdc82WSbRXpBh"
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
