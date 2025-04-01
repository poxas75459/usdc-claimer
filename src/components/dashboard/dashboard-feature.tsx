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
    "5djSuurDzmP16zaUkwjAYJ2RQ7a9EcquLPkVS67C6mLrpYHWcVR9kDAgWVSax9KEFksXEatagzMmod7DCoohcpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MhUPH3BPpwfV3Tbou1jRCWGfbj42XgWFDeXdZKETxcUxPDrUaasVGdbkN5KTN8v2gyBLfXfY69ayfzmw4XA4UcL",
  "key1": "5hdk3a9DKyvNmkccsMCWu3C43TtDJAKxPFUYegWE4A9NaB1LVpraNGkJjTFXtiabFz6S2VJjsUbQEYhG7EmZbWJC",
  "key2": "HVNq4B95SXSbpsXdjL1DrVrUVrYPHEB16xthDMByhb8Fm5Voc2xS2Q6hN9zPVJMP9QTT7y8XMGsH7kwvWD8UQxd",
  "key3": "33GjSZ7aBjYpLPMMgft3L7ZATkJFUmHqYYH8kw2YXu5g23jKXS5D9j2qhHkjpvbHGt6tUhw7D2PvB3BW8bGQ59Nb",
  "key4": "3JCztA4dWastu2V4DHsMHCxu8quNoCXQju2FsfFXokYCUDKqeJwp4n3Hha2uaw1BZTvdYfY4zN9ZkfiJyoAmRSFv",
  "key5": "2RobxZdDHu3fBf9K9tUMAM7VJeev74CyY84ZMMzJTtRETbnMzBGWZnMhBJVqKy7UQSb8W97gGSc4vY7tjnRBBesT",
  "key6": "25EK2ujncUfwwnLNrz57bmGqDxzJirPcLuafbo3a5CcX3UTqTMTSJL4HF74LYD653crAo1h55rimUXGokLjtbukj",
  "key7": "3vB7J2cxxdz4LvkpEMHRsMwhnJXva6VrinNhjEps3HMcLRpFkukoJ4UcCp4Eixhwduq3JZrf1BDiruiNtFatTzMT",
  "key8": "4Y6hy3Tq9EkMyZmeGQWvEa9emHjDq1b5F1pPFnKettSMYmZZ5pQ6RiReJTWwmeZ35jUzPhr78LigUfWxR7htUPHz",
  "key9": "Q7tRHZ43XWCHHAVL5HrCTcWnzfrwtMNXbiP4HGA5FuqDcNgxkbneDGFo9d7ciRWKFC3Km2pFgHzjVTQe3BUp8bQ",
  "key10": "3s4vnzddhXi9TNrT7oM518zmQWvmTMdk1XXeayDcKRyKmL8pYSPC86JnJGoF8AEzorNS9fojXoV3GznaZfu6wfpr",
  "key11": "4oGf3oWwooqvUDJQqv8Xb5aAZ1cC3vivaHkcuoQrBAtmASK99MNgwjAttDpAs8sFBxWDTXBmYbfzX9bbFTWwyTsC",
  "key12": "3f7RSyh8BxHPTxWTpa61EmNj6E18hxNSn7QDBuoSwCW9z1DU1WFDLgPtBMW6tEFSbdPGz7N8vfmAgxqMxvULYQxa",
  "key13": "3gjHK8ibF3SsMrmfoDdj4xs26uvDcLbfsQYn9VALSUnFxnnqjHV86GGyWVQgUYhUrHDuFH7QXFzhbjocHgkKVk5y",
  "key14": "3SkURCQNFp5bnzkUYfzd4Np9MpxUffXq3DLQMe6fiQBLVuqdN3dQSJefFq3kyGmWz8JiobocQCErXbThDiD1SuUh",
  "key15": "36ZscNiyiGMYS23YQ6NeqmejpAzWgo16xkihaj3VSTsTbBg3csAERs8pBZYmXQEUbbqKs4nhstDQwCJtvwp2tguv",
  "key16": "Sp1CkKz6efZ5tCt7HcXTLB4DcNfy8kwCiG8yxNhQ2ye2WuoUD9Z959ATncKsv1HcTExBzPgDruojdiMP8NKyaqh",
  "key17": "55zFXg1hs1uYx3VWqYA4X9nEnVue16NBpq3pEC4BnsdeJst1YoFP34ECkwoLmrkXaA44ev74YNEmAmNbyrMXwuL8",
  "key18": "5eJLhjZHSEVhGyx6zQ3zL26pSzAAKSixqt3HTbLgRE9p1NpSWA9XPfyACNXo5zusY4jVqhnrFApMjTPNXWHK4Mq8",
  "key19": "4kKfAdqegZeRbzRwXXwdapyJMqof8Pk2csHvS8DnTDJ6BdCFSuake63YLn9pCg1CSuFycDrwEDdKLix2hyKd63Uw",
  "key20": "52NEnAzNw8CLD2FdeZnpsCKFA4Vjfyjk1VSf5SGQ7ZrGqMeq8VGDnHYk1uiU49GyiNM68TgsWW1xGw4pQ1RHWwkB",
  "key21": "2Q21zYJbzcnPN1wCTeQGPzs5XuorpVzrTQbTzBeJGz61HWiiAu9nVTk2SVNjQjSH5baGKZx4WQ7ke9oxQ4A95PT7",
  "key22": "3W4wP2ZdainbcfJzDxPwWM3QC6FxpKkkrCQS4gcGA28u9urUHdG8hnbRQGrmSH6fmy4pLvygykm2p2ZMop9K6Fye",
  "key23": "3NaP5rrQt2ZLqbE6rNa9dgXv8cK14dbbbbjR2SRmxsC5hRetrRnQ1fNQUA7UgKiRd4G4ajtDnAGWR5mA7YGKwC2h",
  "key24": "4FfzpZgzu4f5qHq2apYnaxDXR4BYR5t47gC9BcSuZAMLkrn6bJSKc4Tn72VuN3mZ2pw4SdENskmrSvTJM5JuqTJL",
  "key25": "3zJEgGyEBVQ5zNdqhizj8FDbrKqe3GDsgaUMmTZiYCcYFtYc3h16DMjPbiDHNJgMHos6nP5Z9gQfybSgCiL66xBV",
  "key26": "4K1amMekHWpqYqitukeRyAGefLWY1sjEK2vdgNYYvKW3S8QHb475iaQpwcniAukohAhhEWymHsZBeRdy5GXtmU8M",
  "key27": "5fHhyaurx5T3GTythns6zTXDAuTBNEwzxTD2QiSmuhn654HpDgQNXVxgGu9xcvcGyEZxDUCwfp1KeerxuEHWhWsA",
  "key28": "4N7Gnw65qp1oHAbb7R49jN43dgJUjQ3SAGZTP5e3QdMpDVEzvHzXxGM7cj9p9Yd45i3oC9kE4rrkF9kHGyY9h3Tk",
  "key29": "5DZEJxRQ8BDs5Pf35a4AfE57UB3CaiGYEnuHS6qtXpiwRHFpKELbtLkYtMKg8oeV1d2ach8wt2oovDwAFkmJrXQY",
  "key30": "63qDD7uuFbwSN8iAWjXai34j9t16S4ddztomMpRQc5uoK2rFmfSCerReJjsqaCwG9kws76Q6bGasmQYmVJH2UHLJ",
  "key31": "aVittNktWUHUaBjvVjzLQzhvxichUzpU3b7XQ8uNMREdR5YuZNu9sf2wvzEkw4NbAtG4eHj6TF6Y8ruWkigsvBk",
  "key32": "VkJzoa5HZxLXXAtm29BCcoxQ46jJEKiGVkkV122gxsk1LNPjtGqHNJAuPuj6jBKNzaJ24u6zqVEHiqpYhCT8zwB",
  "key33": "5uBWe8LHpycesJwoZ3kjP6fL3JQhaPYKoYWS1oMvMSxQLdNM31XDMKynf7nZFNy498UNPusf2jxjeZ8GSrQzZdmG",
  "key34": "i8BjFysnaw7YpGDqWxEvo88JNqToYAXKThEpQZYdZmHjrf6ZbxxHPfmxj8UMNCbfFuTDUKBm73nxWkVp9HvE8VA",
  "key35": "3RdHzBBuetiN3ZRLFDM8sKB55U3Z2aS8bnuk79ZE69pbDy72aTMwHy5JhmvP7aUPWAYKsuXazvChAy1oFkFkdHEG",
  "key36": "5mt8R3Ra5rEVykRmvZNV2swHqsqSTjcrtG2g6EY11SmcKvGTTWHKJFPXpgZnfxQZ8J2huM3eNu7yCQz8LCzfZkCP",
  "key37": "3bU3F8ygV8UyVicg8Zzs8SLDE7WvvMybfdft6z2Fv6JNAsSZj97N6vBfNBFD9BHuVmZMjriUH84ieVhxHAGyMrPf",
  "key38": "oaHZ56cBtNaDjUzfXj33ci1Y4yJJnzFpgBpXDgEXF6MDpaZXBqXBpGmPHibz8cPyzrjidbMgzs5mhX2ye8maCyX",
  "key39": "3NBDZ7Dhvsy2XAD6JPeUzKGXUYSai257QTPPoS9bG7k3YQftj7VqhDEzvtwqwWY795xKhoHauC4uXXC3LHekLmCE",
  "key40": "2Dwb85x38HvLTjSWPkvLrRnjX78MCjdaQ9dLmpo2iPnAhNtnmangpnRQcexhNgd7RQMj8CbARvgCijQcbd3FfBFA",
  "key41": "2xZ8bKHjQKRJszEBX2kFkzF23knCrHznuYHkHhzV9aZTayZ3mHwbBrAYQqEBVEffJYkS6RR54cTfM3GBmdJS6W9B",
  "key42": "53ZFn6oWSDKEejvGm7hZVwRGvPMtizf56vScdzdToBPRsXfqKqmBrbWFchDc6ZXS299mM1zXg1ayMdSJVCmvDeEw"
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
