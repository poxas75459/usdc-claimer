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
    "4HhcJjoppRbh3Xetv6pdZHnz2RZ5MCFYtXiy4CxrCPoybLqNYdKXFTPtgNU7xJo1GHGe4w7fNmhdiMJJNGMpBUCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "657P464aTy8giAdeKc9HtvqLQkez5XhtTMP8RwrF6zD72ge24javHDfPaqeg31ssX1ckVrv5PfxRbWuLbncfxxGZ",
  "key1": "57wNYwShNXAUYWfvhLtEmnRfvdNiPHvWTELJueHmaQsCUJPGNair6LDMgbeNbw58x5hpvYZgoqPGnJ1uVRTLDPo9",
  "key2": "2SK7dssNXioAvMbPpiCXZTCbV1WW5HpjMqY8hz84UUABH7s6jKJGPDNdZrg4KdbREJ5cU2hxNPxDC7jNmeJcjYFN",
  "key3": "2AN9h1Lk5541XNdKenBtrHtX6m4RV6dm5mJaytYfEdx2NGpRX8HxnnhMEvVs9y6m8rLCdragt8m2ySMqeEExP3He",
  "key4": "3tNyBD9HYcw2jtaBfftctLJJfu7zfycASDA5AKiyiqqdT13U4d4YMhcgXVK17N318EwfxJHJBaKKe7WRY4LHbVN6",
  "key5": "y7zcUB47Gk8jMx595P2raaWGDG1xgdmn2SmVpMGPxtWtJW3Naq8sPzBPDcsV9F45MjeU2Bu4n2D8u12R5MfeTdU",
  "key6": "3VatCoZ5zWZmRwXeNpXhiNNCqENW9PrnymPAnX1DYh9QnibjoGDAWESbuDvkvKcuSKcChDu3267eTv3LEWJgtPVS",
  "key7": "2rBt22xXomQcJT9oGRDPcUFzV9UZFb7GZNtesWFef9oZpvE1JTe9umxuHbr3wDVnPt3sHEdzJE6TVbuBpAEDVM3d",
  "key8": "Z7FyF9FMfhkxfMryQrZe5NRVxmhg4ppBHf6rk9qeCrYuAx5SAJFEDWt3aH14rKTtmFpPZa4iWBNwV64LNLRyb9F",
  "key9": "3izMMtuMXb5Q7mRA6s2DH2AEHptcUD9AbPjzR89LenD36DvKgdmZaWk8viPuYBzg6fRGMffjQMHKrzVH1qiCZogV",
  "key10": "5eEETGoT1eAuf2LcELPw6uyaZszMsfwmVtjW9UEDMmE6Uvswvf6v2XQtgm17izcoh6Fd4Lb58CRoV7YXZJjqncn4",
  "key11": "2WHGzAbFpEu4WEQVAsxkmjQZ3Snij3rhXDpSqoavj9HJgfZAF8A1EHGPGPjMjBEWNYjGvcfwogTsTam5YEMK9NGG",
  "key12": "2zouhFeEw1mjwQouMCmUXQ6aeWMU8mQUptwoAwezQixqa2patnvtyXTSTiduUkMG3nor9gg8NLUmH7SMkq65UZHh",
  "key13": "sqCeG5t6y6GeqTi7jhVExRpwGF5MLcJ9BjhL3aq7Ry2YX8oLZgpNThNE2N6SUtLcpT5xLkMLxxQGYbmT9qcxCfC",
  "key14": "4UA2hEXFhtsptSgwaRE8fx1yQaYgoq6not8V1U4XG5FMD6SE4S4X77CoNfksvvW1G4LPfxU6X46w76X52NzRdWZu",
  "key15": "2psqT3awJC5tHm4tKSvSjAqdnFZQijPcLodr8YZfGpEiX2pYQNfHNYMrJMogZSkGwhWYWd25DjQjtK4mELmWjCNd",
  "key16": "4CDoRgksTS5PNCp84wpUsWYaoTrPcVw9NTdPpZjeWzNaSf23ySq3otDqmeqaQJ6CcLLRrorhT1t9qTHAeJZpdyP8",
  "key17": "kmwpfg3pCq1DpKbphcANZQUnxLVRGqsYLeBAfcudrUe8Gx5hXKSmG419PLd6F7KDNnZ9W4EMQykYmy9mCEm3h48",
  "key18": "4ybryWz5sK7KKPcQB9e3N82KAmQPrhLSYt9Nb7NUFAQh4Trn6vhTVsUY7J89APN2c9tXsBwUSjcdcVGaGJx3Y35D",
  "key19": "62TRq873oVTSRJrVSXWSbj21nDqh2imGe4PqAABDDETLurnpyD8U4Vzij8DkcVvW6zUBVf1GodLmN851H2S7SWxU",
  "key20": "8NU44UBMCLeHpPq5w4NzXCbiEHyzc6T29qeCQKq1EuWfB48daEJ8NZUe2CxjHy3eRPjmzAxWoJFHCGaoP1gPVwU",
  "key21": "3JpkK2axtN2UL4fv6YvDaQPDHA9n9BV7egGcA7uNog5c67AN5qntSSszm1YTSkzb6JVfKjqw9kZJ6VzYXhatzZY7",
  "key22": "VYtCeofFAB5qt9MEoJkwkFYugEdGRvChyvxgSueeKa3HgGeVHrsAR2B4orFPbvgoSBAV98WseTvinHfoBs22Vzc",
  "key23": "39Xf51DTKhveeFxw9eqnPNWrtwh7e8dHify2ESdA8N8nJQ7EhB7mf6RBxhJgT9vqwt3bFyzbzHjdy82aDY5MAivA",
  "key24": "1tLRx9qCdon7YAXEjG6SCVgoxSPGaAgbChokise2yBwx1uBoa25QtFLFLWjX6mFvt9c7FyYdA7rHASdGEb8eAFo",
  "key25": "5nyipRQJiN6EQDQ2qyjhaSyv737CcSsrKvdJGefsDN3GTZtci2upaTx81oVweqgrdTXKMqinsNnq9GJrXr6i6vFQ",
  "key26": "5h5cerRu2dodR4n2qmi72FgkWUpcges4zVmbGyKVCtTnEPAnnUJA8bRpu4SFb78qgG2PwquuYeNQWnigLL76Dri4",
  "key27": "2CNffCSn1RanTtsQQPDJU926FK7Gw94KfXmeyx5a3WNLZ4TwQuKH7R2Dx2Ptra98ayGPpMGiFbF1Zsf1TsNWCaWL",
  "key28": "4UPibWrrUfmobSmsoGb5aqNSwJtHoZ5hpRiV7wtKt8dTCg2BQWtqGgH242dKDSo5LD9nSmu6MJEPzA2h7Mk2THLQ",
  "key29": "4USWgrrqw4jAAqnnj2ZAVCLEKxEfdLB5CK5dG1Umpr93xNPpVMY4GDdXX5wbSXUPgDDahp4XmHR2BAkY3EhFqP4F",
  "key30": "46z9B4sDEcF6YJdNbdLH5RX6smhfjP2WyBybgwtm1wFEWFoTmW92BZFg2ytbU9xfrrUXBkCUGDwHpY3LeWNBRAr8",
  "key31": "fFRe3mVWZ2XGbAiVP5NEGSUscUPB8F8eQdDdFU1hFcuUsSVKioqaN8SG1BKNvoCEarWv2L66mujRn7aPLAiKMBA",
  "key32": "wmt4Boh52CS9ynueFJ1ciqtkd5se6pzfH1qWoxVe9RpfwbJsWx4KecLAySaocSh1sHQ5R8nKCWPa3LRqYVfU7xW",
  "key33": "5CEiR5QaUKPMUdLYdUHUdbU5yAwz3P947i1DNro5i94mHTw75n7G5X7SAe6YPgcBVwkYZ17Zsr5398EuFLAQPWTh",
  "key34": "4opeSEuiWZWTzJSAcQx7Qg1uby2tEwtjaDSVvHdzUAK83fYXnpM14iq9tmT5QrFtRBc9eVNvqierycaQ5zryFiFu",
  "key35": "3QMqzNBCpPBhEwoBaKRkrFuvGjcSpDb2BbiKckp36SbQut2zxPCpyaSWk4MioKMaVaELnbVmMfHEdg3ZDYbRgngp",
  "key36": "5CJWMUXgY2TM58gSdonxBGXSmFZwYkyPQdsirtiGj5W9gPyYTdNPKBuzbWHTaxcsGkeo47BBJ3PgN3gUfApMnPAG",
  "key37": "44tDCNnSMRy5JiFFKRDiA3KSDxj3oAdsY7zRdgDyP2HSE2Tgs6G5p7qM9PXuEU8m7hecjcNyFLL9YgXWpg4dSMDH"
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
