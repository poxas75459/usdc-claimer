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
    "4ui6Bo95YoH4iVNRQwCxS47Dc2JY9bKkYZHqhoPivTUbyhqS4jRuwyHcYJNrbhxe57B3MZRQva4qQgfPX7XRppr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T9vFfCpggsBWtmRjt3AgXJezwb9hFfZRAZd2DPbdd8AHGEUqYwmQv47sp8p9LDbzJvGP5M6svmK3CwiF8piKRFU",
  "key1": "5DvLiBK5ofyR5brEmmRzDhxNSWCBmFtasWTztv5FRRnNRPHZhyMwQ1u2MyhrdSqRXjUz2RFG9aJf7x2NMDRgycnM",
  "key2": "3dd4k3Qsg7J3YULepKTT8njBS3Tbh963npnqvfDFqgRaB9mQjfLNwDYzkvFiLxj6EKEVBz1atNNikeCYMDApuM68",
  "key3": "4S52DvU7Dg168EKfZDnYPHa6eMsqV8Wcv9wprSMh4yp2H7XsvbnWgwq3zAddR8yT6rssVh7v2s5M5K2nAkAfCgTj",
  "key4": "3iRCsiv6ynQRPan97m62ziot4iHKJxRyFRAdDpg2k9BcVSvgTdX61bdTqLBWpp7hJHTLm2qdVjhyEcZosnRNQEWf",
  "key5": "2eLkmqFL4Ey2UC8NW3uSnHH2thcjW5V9F1a7jRtbeF2eh74fF7PoaEUbZpnRxNE9Sh4oHShb5qjizMmWpa1TQrFP",
  "key6": "3NDMG9sHaQokhkcsSEAnUWknt8VbLvJgU5eJ6af7qbLYDwLEkdhZwgaggJhFMMSyhaj9WVTMahAGGhsBQPmMdZG5",
  "key7": "3CPy4TsEcxfLDsKh16yDCjA4cRBKzWPsxxwfxeCrudjps4mnToT4ic5cBGRSecLSxFeEC6fDmtkhMFt2yaK5CNEN",
  "key8": "4STX7wBCRa7WexLqK8AhTujScvbUZrbkXBKKsRuenb1E4BvAoatM28d4L6ZKUmnrYxeihFAtgtjxG8vFQRqBc3px",
  "key9": "5jrNFPzkPSuD4wqiY7db8uyPFK46Vz3xjDTzrcQCVigohWZjZot9GthfSNVcGz6q7MRjBKPm8jYh7RhJbV14UBkU",
  "key10": "3ELs4KJ7wNLBdaVopzV74JNzveVV7BM7n1j5tYrgxQBhDGMH2UnuJunvjauSzBDkwQWAnUnm1Apd4G8FhgkVG56r",
  "key11": "3y6tYBG2JDpTgmyptciwjNEtpFqvM1rWWpsgkJ5vQWRrYzGJr5WcX3zFjwyjrTCyxkTpp3WtVQo7gERABkUhaMLn",
  "key12": "6Wb749iMbmVKaRzgVL67wCVNSHpRUReJ6Zbz97dZ9M4tXxPAA6gxksn2TH5tD6EtNPxU7LK8p955EbyNC9vzgeT",
  "key13": "3sgZHmRjJxrrpxMNmhYYfEncHfUHYrkCktfZ2oUfVRzgJzC4XcJCrabVQrWC2ck6xGusYB4mCN6BM3xVEPyELoE8",
  "key14": "38iQDgCGzHEyMgmpwfp7kRqBuf8QPEtnCnp2CPr8xoKzVH1zi1kZanR9Vt6KzyPJ85mhJGGchJsaKyN411WTKnvM",
  "key15": "4wyhLANrBeaZ9Bozaizcx6kxUJDY8B3UJR3STsLt5amQ1mfJjTS6LssoX6QDyADwALYwfuw6fVPse7vQMMMTT6Nd",
  "key16": "hjKDcW4XFdgnD8hR4gizcxJErZwH55gc8vBT4TDUTLhkhE6PmU3jTZRBEGcri29LjgjaC3331HptLtzydo5Mm4A",
  "key17": "3aDRaUTc2dpeZvGiFoPEnkZh4aFWh5GCtCYrf9XBfq8VNGtSMXmPVEYBueHbeeeL9nJ9wBXZWNvftyxW4F9LLB9M",
  "key18": "66XjhKJJSo226qMFrZuVgENhVjDRLrbyEndMDVsZS9ixSeymV74uLoPe1FCBmF4XoP5V6AbGW5HjRw3eK5Sn8k7P",
  "key19": "CQeuybF99N2kMH3J68bt5NkEXV4enWJXSuzuB2TsdWEKHjroZeLx1MRwvLPpzL5o25iEfWirAHerYXVkuiTVLZL",
  "key20": "3xkqTwyioEqUncU4H2QU2gfgRpUBuH9ktNMv9q5kAqDhkwLCx3Cd6JZnPT9TmjUosHbY6436oaM2Ub4KPzJic6x",
  "key21": "2zEDoEF26RDNNcNrhu3FwB3DnWCtJhdBTgsYc4Xx8msytq4iCcmdfoP2PsZvh7LGXziLRzjC5xovkqxHabuVpwF8",
  "key22": "5ihdcygiXMKMjjtadBDEVeFysmYW3oueJPbe795F5JidFYjxAq6dX8YJGaJK1CfCfaVEv5wbvu4KeFjTEiTe6xnz",
  "key23": "2H6D3hQr7EHTdjQdgbW8MtWsziY6q1nJw4AwiwsKgEyvtk5dzEBmrGxGdV7jDaGbfd3jpvGUnTjkMuAgeHVuZxGz",
  "key24": "2wZeR7jB5cZjcya3CheazSmMWpBjGaEimu1RqwUAJ7YXY63HFPZNYLt1uquZaoKB7KasEi38sWfUaiDGqmSeqmfh",
  "key25": "57qjeKTAoMFkyFZhiqSjdQGMJyeUgAAMYwmhrkaJZW88giHNKdz6NfagH9LDgJxSaJgd79V6BKsE5xnNiCrbMyZ6"
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
