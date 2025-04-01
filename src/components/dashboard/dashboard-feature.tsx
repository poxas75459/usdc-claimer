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
    "4hBnCYkzjwKgq97QHNVp2t9YebG7ELafhLdnSkV4ApjtB8FdSDHw2DJjc93aBrHKgC9UQVJAHoMDCKhcBxSetyNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QqtvXu8UZ6wi1ruVmSgySLvHo5xAUg8f3j6oqLB5wa1Mhck23bQyR2TrhKdzhKoRHPkgGMECJeiN8FjxJdeC6K8",
  "key1": "3ZyQ9aqdydTtPgQRp1HNGLPfw9tpELi2bbVYN9Z1hKjMD18hVgP4ZfVHMyXBR41KHCNS9Az3DLMZm8m5mnYFreXJ",
  "key2": "4HFg78FMmBJ55z1ebWpUV32JD26mzYfF1Gf6XrXLw2YkUMEHtBTaqi2M2N1gx6DkkkiY4khDzgcvSR1z2wgCd8hF",
  "key3": "26XG673MDyZirYfRcMoqw8KfhQb3B5nWMnMN6wRRYh6eUve9B68kgJ2JHyidjgodqVia3JiveKU9Pr3ZDqb3PLSR",
  "key4": "mTz25CXPkDi72FdTMSw4VbdmMdzgHRTKhJSnHe11edEGkMgPmPQst1KAt15QVp6wS3EQBvVYuTceeN5J8NsGMTL",
  "key5": "3hw8yyWbviA7h4EBpgdLjRxEDM7TzoT5kZCJovYYHAhb2w9GQ2dtKa6fe1Da9Bv7q5Gw6gCWZcTnmaPwhjFbxikc",
  "key6": "387Q81c9wGPMK8oq3cMKNa5bX3c7Za1pgx4o4RxE9egaEYq7CeAkQvE8YvSn8ksuExd3wwnKSreK7jcJRxAyjpu4",
  "key7": "5FW9fNQbg5SLyXwytLFdYRw7xopaeJ7Hnp5fuNZ63zUrMQubrrKuBdsqF9Mkw3jSR661TydGcrKzh6zLTHZ5ampf",
  "key8": "2qCCrpJrJUa5bAHihkNLiDohMoiLubCSR4cT5uRTwBVFfbV8HRk83oaHUnc4bKFNpMfziSULRLZB7so6SFnDx4bM",
  "key9": "2FZrfSUpfHEDU9QqattXm7cbeVbbzTYBqsYAWTc8AbXrAY7YbZg47faearDTYgSGHDEAneQqsDvENkjNV2Yg4K9f",
  "key10": "2x1N9DgyaVAooRoRoWnSwE8fed4hM6WKke8v3NT4hcJNNAFj6hb1se63LvodgC95bpeD1RxTQRsY6r4p6HJPe1QJ",
  "key11": "3aptVVjnieG6tZQpRxknrL7JHuSp8YgonTKf3woizf5o8McXy8cAKzKXmzKCtR55venvfTCDCFvNvgknX4Fy2MFn",
  "key12": "654XdG9K5EDMLyJFdbEChAn99jKGtfk4kSEcXgYYdeFoZVX7yanBUEY7Y2sEMZ1EdsFRgTEjSoLQncTmmmsgtXvx",
  "key13": "5ZBhikwEBMNxAL2TkwJ1S9PBzyPykrioysqPbzv6SNC2YVBJeVHDVkWxiJhWXwWLQd2Pfx35ZbNH2DvCVDQ7r3pF",
  "key14": "2pAhf8Tvnfro58gx47rg2sM8xndZ38w3aU6kiYQGSurv6Z2bvdwsqtzGEwpPVXMFqQMuSy1p9dmppnUUbtQq54db",
  "key15": "3RZqtHkPbQss4Mb3a3nbFXPvVia3DFJfSkJZyQpJYRGuQAXchfWDoUZSRDLBj3v6KJbjtMukBv8ppnwK6yoNSrXZ",
  "key16": "5WU8oWnSPt1XBV9XRrLMFetJTBPMNEog3KSw7Fgeb8GiJYVAVdhSjoihXz42VT5azoVFrzmM4GyEVvy4bj99Vfgd",
  "key17": "3JDb4w8RWJBuLfqiXggWiXdWHhAYx2wH3VjxZgB5rvkkGF1D8d1QBRZC5i5JxBNW1xjfpmkEE7aXjo9hw1eHkgHb",
  "key18": "5p7hEygw8YH31mq293PTaSFmT3QcfXoXexBr8nGGW8HGGfbt11zPsHdqK857Kb3wdXiu13EtBSEe68JBSMqAKzSx",
  "key19": "36iphWUoPP23WgCaJcsBnwYUi3YKjcbhTtN9gG6d1uykJZFrHHxxisQFEDjhKHJT9BRNX2vnz6sP6Qr3Ds8wGxh5",
  "key20": "3fgnah6QiT3etPqy8LSXQTSo9HSUEQP5Qw6pSRghoxSFGZBZmzzJXp5JXTXw54JJua2sdbXozXQVu27UU5Uemhgb",
  "key21": "3NVqVD1HTWod1y6zGgW1fwqLdiFMRGzPke6g15arsp2Z58fb4JwRW3eU2oZuE9UeG5PNombrRxGsAZd3VpZPUWHX",
  "key22": "4MtaYjw3YJYxFJTRQqM8FCXv75aJvXwt46kkZsKgKTTXJfZyDG76g7Ki8xivYDYqb15emRtwgztYqaR77tQ6CjV9",
  "key23": "f6eZTucgmkcycvbFANWWXZpNBQLjxq5rat8HVJsqCz9LwbdGmoReffJk1eh8K5moMc9diCzYPxywJRTZjFMiNNc",
  "key24": "5YENP7qmkcGb83r7Tz5MJ8LZfsV3Fuvfvdx6ZUtjnL2RZQ7xLDazNS264KxZCPxupVePt5epwvf7XHp3HLfWnbCQ",
  "key25": "5q39v8KDbnh7hTzutL4BKU8V7SB3SMq1zraQkPEzFSFzRbiu3NfAoBV6UYHpL6RCKJfXpeCd5qCzukhfLcfwPXGw",
  "key26": "5KUrVZLayECHJejAT2sirXynnA9mDcZqbDZL2afTEn8qVC3F7A3Np88VKg6nux3wtzUYQwBeZgVrz5PKQFiEzFqf",
  "key27": "4Fw36FADtR8hYmEojrmCqTaqoB4euocJVbYcFqmPzqfzgcm3p9sDVEsQkxedw4QCbPuH7rPZwvYirh8wrzC2ytuq"
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
