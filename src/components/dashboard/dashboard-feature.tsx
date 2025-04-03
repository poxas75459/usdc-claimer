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
    "myG94XkX3Uoa8Tvk2AYAcSBpccQooA7pmwzTdxM6hy39MtuyHqp7rQEQ9Lzs6aPbP33ezV6Vagk8aj1Kv3wwcX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dV8cgQzDWob5BxTj6SUW2Qv6pfw9NZDRkbV3xZ1Anxg9voZ81MgasQSbkfvCuXwnL2zDP6bfAMNGA9eTCoUvy6p",
  "key1": "2E9zkMzDagPssVk3QraCAZD8d4QJr7FqtTs87KZjSfmizoQVkh7breZQtMuw9vB9X3WcngBuMFwckSLC3EgBPfAA",
  "key2": "ze4rWtrdgdFFr6UtUPXLwPrtJf9YCddctxzRF3F147nB8xucVVDP9HHwBzbQdP4HtyuQGx137cM7CQap8GPKt3S",
  "key3": "ZsT2qQtX8zpEvKHGZQ64DpT1pankQVT5W7CGbWSdXycRCK2GP5tTLF5rzpoGgjWzVYUhh1cJven21eHSQC5MKdH",
  "key4": "5LaCRtB2dkbsupKUKUUWxztK9XxhAALoQbmTHLRsy4ncVMYgu7Y7AHTmwjY1AnmdLNT8MvmULcDwphgVniaySnEF",
  "key5": "4uL8yrHbpgHvsN76bXfsxUtpoPJUvtHEqEmP6VT6phtkoX5CwSbSLDsq5ydsDJbZHpQACtu8rjHG5RJZ5FcZP6Xu",
  "key6": "5f4M6AxgQVrjUWdkrrK5R59t8hSzztcZ69MH6dUw5QUcrzvcH6FbQVWzE3nPSfJKqpzgHpeCTktBLXFDHs7dP8oh",
  "key7": "SBiwCKrjV6VT1YGpwHUG9vfYXFXgojKQskWdCCTqH8SnjBxdTwKMWJCUKPGWjjhBivj2i6jDA3QDiWW5gk4s3tc",
  "key8": "4qkhyaPGomekZgEWML3yYgm9jAmmpZ1W2TjMB3kFpAoTDw2xLqgttNFmh9ckdasbC3zgURVEvvcS6f4Wbe2deB8u",
  "key9": "2cpYZkCjxdVBu7xDpugzPsJ69LR4uHXEGUMe7YhYy7G1B1772xMF8J5AW2jDNhxU7vANiVu8XCNU7yry3QdvDCAY",
  "key10": "3VuGjdsz9PExBoDU1uLN6NwzYqu5NY5t24yvmABGE3Wyf3QsCx5vhsf7jXT5tU8111CyU7UQoUssDCkQhw94GPM3",
  "key11": "4FSw2MwAUYBxsa7PuwVTzw74ivgJLKAa4YDAUiB5JzwMg6wyVvXf2bTWmMJjDZWCaqGmRnb8AyzY2qxAaxTnjrJv",
  "key12": "43DREA7ZD6yozxbriUJkL36pBcp6Sk5h8V9pEsSEou71iyqxwhae6RgKDQ6ZZAXQkjijGvgdeJDuy4o5co7RJiwf",
  "key13": "3CkEv3saVHHajmk7ZE1mb7Q3mVJ5uuYZu5EGxVx4cANJ23YVdYa5qBjtxyJ8KPK3A9U1u5MkNshxp3RQiLjh1CvS",
  "key14": "56JZbbBzZtHM7j46SrmonrC98d8m9JyR224qkTiwAH1KkPQUgm64s27hwSpxRL6kh7PejTGW5dxEWAR3YTgs3y6K",
  "key15": "46ukHyfwBkaSC9NHEq2kVysZXJhk98x3AxvXecQF2rWor3mB8j8mUgn5AcdgxYK7MB1YgdPKLiWik5ox2M26X8MF",
  "key16": "3moqbihjd5drJArepWrkvX9dPFkfEMpCt5dz1bX26QLXYKh4LgWUdQ28CHGqVutqoEPoKXrKBvSr9eXVmM8AwqRU",
  "key17": "2w3Wq2WAh4wswErUbZ14vvzwH6s2nPb38xqcPbmP9suuux7fonFwR2TiAi4JdJhbNXgDA9qFZdoGVbGYf99ZpG9g",
  "key18": "e2gkA43hyEWBRCsBbtSHUT8AbSo7gZPcRQwKcAsp2hvbh1Qa8v2DifkuVb8Sk6BnFx71SycgJSvxefiFea4bpMA",
  "key19": "nBHW1agZqdyL2BePVaEycQvs56mQojNHwn97eoiPLPg2Rs3uYPRYi2s3vPEBfyx4BtMBbQ9u2ksFRhdL5vTRofv",
  "key20": "5E9P6EFukib5ovoy8NC7RwsxyBFbYv6sQTBLuDfLBqBapxpXN56u19egdiHPnTp2WeWheMqb8dx8XQZuWL2ttqr6",
  "key21": "3FixbgDVRf3PVGQzBngxyxsVGzej1879EnhP8Dg1m9nR7mKng2cSvtTfxaLRKrdcjfnuobrEcLrkN3inodZkeQKr",
  "key22": "5epbWswTZonY2evoFe3ZjQE32EcYkHwKx7McvbRDpwnyXTy367Cmu7EY3eBkjPfYN3VgBzn21W4XaQ2Ma4WQAo9s",
  "key23": "Unv1af3FGxn9tBEFsMy7Nkg3Wtm8Bps4bmJFJ7JwFxzbYE77zWw5pYbVVBBMVsWkyk1RPgbrtJhBjEfHAQg1tcr",
  "key24": "2BqymZ56NkXusbDCH5kvkgb2Am5knHaftcVszPtwMsbCbPEZ8CXnUuPEpngGZ7VSGn2mtasNWp2WVAsJLXos4k2R",
  "key25": "4XMVzHVvMgAnKLX4Rt5rEHLbphMZ8WnhgGtzQFscFUpAqVeLSkoUNXQZU1UEzkcHmdQLjeg7fPB9Fao3zF9CLSsH",
  "key26": "sHFxnRGPNJfwyrKXpQ8ZEchbHhCghHPY64WyG7idatUbgheziadyoXoGJWoNC1BKaWPhMMc1MKrAgkHpUu8pQ8A",
  "key27": "5pS1Pqx5jLGxXs7SSYR29fpa6cJfmCZWxJZVMQisi3Zb3mvZ2Lc7KmUywzYUk1uiUN2me8XcxZuVcmFh4EpBnuM",
  "key28": "W8j5wYetVEdiboFUrakRpBsn4S7aJbu3SgpNyBDg719hXkDkBvkGzULuheWPeu8nGsjGJQi71gFjTKfp4B3C2QK",
  "key29": "tWoW9Jsq4WTQ7C8rdC2Cp8r3obEAg7eftf34QQMfuaKrbptHGCEQYEgCPMUZoYttxG5cjVbt7HAPtzRP4aJqpuw",
  "key30": "mXyAV9FC7VBFCVTmd8sMeWpBTzYw7rbPayzqPMd71sRXj2mpFcASq5J8gZ6B3V6R2rHxwtSfSwLYsY5QfTz3ezW",
  "key31": "4x14qCSb1srpzAwNbNHLki5k2T14CHKt63ETnkBXDHfdK17L23YEbGVVk6sAcwcVon3EyAiW2e2PmtEg4Twq9sud",
  "key32": "4Qg2nsKPs9PXZonKrznbS3JgiyY3AYEMBJbvz5DstaaQNyy7uw5k2z7YWKXXYYJH6CubwWixkPzZsnDSS5V59nSX",
  "key33": "WUJM6CrGLouoVNjAruCC3BVDcUCo4HJtEyv87eHAeuFt8ZWN2CoAAEXuHsmQRHH2UB8J6mweLU5E5tNmGu3GMhB",
  "key34": "2Z8ep5NMVtJde8fKqPYo19gVVeQxK4KLVBToCusKad6aayGy8ArYMRWKoAnoTgFRNjcGg4h5SqdPJNbF9Frr1HcG",
  "key35": "2frAaTf8JrMsM4aecCX1279ykrtxCpQbpkGY5F9GvirPp4Zm8d8bSikiGUxRGmY1jzY9osWSo3jkBWAuHAogBFLR",
  "key36": "QzBupBcLYhRkpcxU6kCzA7kTwo1d1jbik1YqfBTaBkTdhDRKRb2Tn4XX7DtbikLmA42fbkdNW8JKtJgykfFd75E",
  "key37": "5VUzeTF4QKehaE6uQJpMB2Gyn2vTK7nhLedhB1EvmfdLE9L5mSfzKLpigiRJw1sikeq42SvvPosBg5PNcbLMRdSE"
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
