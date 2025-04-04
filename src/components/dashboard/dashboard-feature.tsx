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
    "6FM4mBz55h5URoDYvKdK1K2QfNq4CYkJUw1qsVYcAiQVnTqbP1x6nYWnWG2aV5RMzZTKgfP3zcvsB4EbpL4oViY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kmcckKowzecZJ9hAJwrvmNwBcMwmAooUo4NCW89TLqNJW739ap6pzWqR1bqv46g7dKhHMmksJbqh8Lcfs2kMr6D",
  "key1": "4vYhaUFXCUJarfeVw6ptdsDqk12J61nBgfafNau2bvyojWpVr1gv6Xrf1vJEEnBLWiRCUDrUfanGE3toZuYR5b5r",
  "key2": "Ahhoayj93pPEV9M2NUG6KxTDA9YpakxynQ72XQVbFdWbn7fETFvqtTsfisbXj6xtKjYVtLdr5ReuJDRukNV36zJ",
  "key3": "cu6yaSyKTk2qQjLAo8T8dztHW7zvjLbvzcMgwN9NYPcodZCtMoRGX1g728FqCWNnBiXem2pkY2v7FNCHTtULver",
  "key4": "5XYg3GYTxJNgs8XocqYm8WyAQombnmrRRdL6xV7aUM4wwSPGekqeaNVZC7PKpdyATVMPgPdc2DMQ3wj9C2E98o7R",
  "key5": "4rzK6neEMRs1gW779rM8wJtY5fXwhfXYN4Px4DwjtkzrGTAE16bTHRiQ2B8eygkcVMBipbzzr4aV87grZJLbxHRL",
  "key6": "GxBucf2dqfVoy57jhQtA8mya5LxuPkHTr3rQFb92un5BFHqKrYmsuSFFyihp9tVG8gfCiFzq7Ha44fgaDYqkTZM",
  "key7": "31MJNijU4LJZNjHF3d8swG2TVVPmxqUGJpWkwkJAtbuPXUoe9Z6giy3jiDc3iR1otUixnPpGrvFm3BJK8Jw4RbbQ",
  "key8": "6UgpN5ZXpUdfzLZbM9Q1G4R9dgnaHUBZFZ7sas7DiQhZRsYbpSBPoHPr2cDwHE5gVN13u8nRMpUwGgTBtgvdc93",
  "key9": "3pG6LPqcQip275pvaF3QTQcsQv1q9EFjV8BKtaxQWQ14Brb8U5bmgbdNqGCiicgMvXLNG2oX71wh58uHw8RxVcbn",
  "key10": "3wYACc8SVMNBMuyoqcL8cnPJopARfagMPqqK21LHgfCT6m3udQibCAXWkk9kscJ262eWN8kkrTJgAYuiHo36H7nw",
  "key11": "4ik4Pdy6p2iqMWYdHgs17ob3GvccDVPHmCJt7MR98FiWDDYE4afZXFQd7yrScaoitQCmdLVWuSxf8mrNPoc5RDao",
  "key12": "3sRMm4eNfxwMiuogeKb28Pq7xh9d7QNx3iWmCspANrqGGMkpCEjKBpkBCuxheJxD2dL4THxzT52ckq3Xzcygx165",
  "key13": "5UFqE9onaxwdaGQH1ofzFHfu6zYfCSYGSN4SnFAQxnMQRFHMHLJLuw8wHwQfU1DKbvev9b35pe4FFG5CHNqgn6VG",
  "key14": "4VvHMbymQvj9m9iuimPVXYoR72H2hKzv6Xcvbx6UMxzhsi8sMvb6VNkZ8Fcoy8BHuUJpyDtcb1UEcQpgS8Dgpprw",
  "key15": "4H6oeAebaXDMkCkX2isoQ8kZX62cxdeE7p79JGMDPApwxo4RRCuBXVUfSZkWwyfB7mn3gTXLJhFwbWVtvtTG9Gwh",
  "key16": "2iRScWwpfVFf511KbvMVW25jubp8TFmwnjnEW7R2eEjZxUCxtcdMnyTLuC78dMiPpWBpU4PD6RPeKnVkFHiZqaGG",
  "key17": "5gjoUWR7dX6m3Kda6vAD3FtmDbMVdM8q6MTnbHavC6aP2vH68wD6GqSTKy7TWDsjnsBxKwrkCxpnEQhdHJGU5gLp",
  "key18": "2hgZB5yxipwLNsSz99kPvYMj96zjeHPnAwzuRHeS8F8G4kMwu9T3Ydd3jiuf53qFvyZfiStGgvdWAyXX7BHSvR6o",
  "key19": "3ydYrLN34iegZ5rGriW23kT5Y6LRit21J9RZ1gqHGVHjQQ38yrxHfFKhuURGT5Lfs5NjHCWcogitjiq2po8JX9fV",
  "key20": "289HDDWStC2MX4jPqL9cDbx1xCEFeveJj3zHN3xCPBVuBVrfL4tCK74nn94dqZMaY9dvnp5sfdUhDK7srwo3P1xN",
  "key21": "5b3Smz78KokNVpdVnd87CgRKVyosZcAHyGWNqGdPCwQMgFXErJmc2KBuzdQVDDKnsWMjhZgqRWb5oEndeiXjzPyH",
  "key22": "3DJWTLfa6daKB7BMEtUCAdrTA7y3Pm9cmijbrDxpwUZzCmQKSxJYRH4PohY9iJtHXgZix3U3rVfsGfALqcXLw5dg",
  "key23": "22jCQcAESFcfCeSpXveGdLD3PhtPLpjytweGLD1X1d6ckm6ZKnFJ1PRbsZr9nEaruaXJZthyH5FtXu6KcqdSaT44",
  "key24": "LurdXRfvbckFeKdSSt3SvKoN8aDsD7cjYua2mhiw5E5LEnctoQ8mcArf3GpjJPFRhA9uz6hCByQgwSMka8A4LeW",
  "key25": "32PiV5uQJAy46St7z4hY3jJyizskpzGQMppTnL7C9SAtk8r9bJZYb4mf4CiiHDCqqYN8hQCm4Ce4MeQP1zRGjGVB",
  "key26": "3Y39ksg1kLKA3fHMtPrk88aqUFLkYEMvBcGQ9hkUjmAhAZQfYnetaBLDUqi1wSL5V9KypVhCUXeWNFsiXNEhVBQK",
  "key27": "5tTYKvZbykvTJmbAdsNiTjsQATfhxzLNwSzXBs3v4CWvagotwGwTpRz13M8jkXbUCrWY4JHZkr9t99MLPs3okZ93",
  "key28": "5T1FQqxs8ELuy9gXV3dLDCUWMk7q2rhe7yNHfs9U7s2j4GCDa4Mwstg35B9T6J68vLutyoxwa2JGrWZ5TzbH38R8",
  "key29": "22hFSaLYGi5P8Z6t77ZLtGBm3kooxvWjx1Uc5b1i2nEMEaPeWtnFX5fc9Y3ssWBeXu5gTX6xbBDWbUBMamuyPmmj",
  "key30": "4tsyNroNizri7Z2wNj3fbos3SBfwnZLzWVqTh8AAyXofxEejU7FniZQeEAQevdNimKeKCZBHUcoFoAkfCd6awAQ9",
  "key31": "42L587KBwyj3eeMPmqHrBGUh9yYYMEJTH9Gjjb8uuS3CHbHjDguas3Lb3gnz8nPjiESQqTHPqA1j3u1WonjYnzB9",
  "key32": "3hhhvjyTBs9j52c9tDXFgJiJXrByUpEaqi4FuKCEKrPC8W9Ai4J9d4VBMjW6tjKFTW7dsgBxqrgzjkcjshHUkdZL",
  "key33": "stXUdmAV1uAQKQmLUiXnyyKqFf4pfMTDqJhwzqGpDunZPbBhL7GCHFxKmA1LS7URCcREkECG7dbhRXKNqdCpiH5",
  "key34": "rgvNbaq6avTonDgvFwf2oWXEK9i1i3i5QskKRWmdnuSw83E5wALTTvAZwV6RmGnCokT7gvbNjV4HaUqgu9Vn9tw",
  "key35": "3uam9naVU942yuLts8BXmst1hmNqxCyHotrkTBXd924XZ8R8ou483BSkeqPmBVEVo7omToQ1osyMeLZcbhArkfU6",
  "key36": "5ivJzShn94vichpihercinfEZQMtewHs3P8ZuTnHtftgwzQ8RV9AXBRteeqxnxtnmfyeXSwUV4fm95ivxDHMJzAX"
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
