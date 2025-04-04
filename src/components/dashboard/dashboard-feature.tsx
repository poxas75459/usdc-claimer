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
    "31UiYrRDFWUUEAKN6UJwdj5vKYWnFnGpuNeVnhmt6LvitLaphWmoo2nQJejEeytDnkMeugYsofEABJrvLr7Em9GC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oTcLE73QcZRne6jvJCWPH2EFAGLi3X6NEn2FKLXuWdBfWccpWmxCDJZHutKWRnNkfZtD2s1VBqGAot2ewv73HzR",
  "key1": "3mPXm3JwJBpc48fLtwGYbKNvxaKNt8hkw24GWs4ezmJMcDXuZ6hzzFZXWbpmuWLadXjd6RtuSn72LLo2ZX5rgg9k",
  "key2": "9wwBFrBHMwc7kHwA4MKyyFTXCDFKziDAp8YdrtdxVnnWwWc8MV6KJUFiGBigyqEZrmAFTJc3SyddqBPowTPhabm",
  "key3": "5WPqjzit992UZL3G3s7ekbdidbxZb7cW5YoBAhvBJ4WatCfJgGaL8tHBCwsNBFGxPPvFboqCoUscUzEb79xkepRp",
  "key4": "4ZdRaHviU8SmeKxUf7WXCjFcvveao4zwLe988mx86vWuZ9Wv941j83GgNGSTw6hfyqphvD2g8soPTE8QHrRck7qJ",
  "key5": "3UyhbDH1uz9bQhK8ZLuDWR8cjg6iaChvwz9YDUGTPkQrVwawkBGcgtBP7eCxVN66U5Ps9ctLEXzhMK8AszEW8VLv",
  "key6": "4pWftZxYDD1ivfHLKrR2QV7pMTsMbS6riKPczX7MWnQrGn49CjKwErFd1sGjVGpVdMDqc6m3SEcy9NA5sVmyXmx3",
  "key7": "uZYQ69MNCd5zohM4FC4GdTcJQsfR1P47u4c1W74cfjooo31edvVWrsHLhG8a3haMF7LbjHPS1xrG9sPbNP6sYZP",
  "key8": "3qKzt75e3jCjUpZHo6UZfWSG2vQsamZkCi3aGWPcxanLZkAwBjr5xzQr7nr5snyRZREHUcYwTeDUYYjvrzGr26Xg",
  "key9": "5AeWNJgwMtxC7KZi5RdqUiB3WxK5Capuq6GexBtDue5X3So1UkBu7iHG1teh51785LsKWnoBrzyVX5vGvEJwuBv9",
  "key10": "3zhP8VBJS7iytzufVsQQVJYsnzdKy54s2ZQTUResEokYWGy6vFqRiFHVpJM6LDihy8QRGWrPifgibfsTEBuoeR5n",
  "key11": "LWK9qaxDPV15ewTt4W4MKAMaTvujndmmUAcEADeKcMEcoAJ5dAVwMnurTRiatdKhBR3gSNsGDKQHDh4kBncqS9R",
  "key12": "3TYWpyTFxQqwqHgtTJFxwXQ147Gmef4yMyaqXVFJmsiHtSYUGWW9myttudEqQUnn67RzhTBJTYK8uFu5m3PgWSEj",
  "key13": "4MrahREEZJXnUB1L33zwUMrRxgPPghKfFDpBAfgtg4kEUww1acfo234VkknmsDY57qzCWV8snDiXbHJaZjAEq9yA",
  "key14": "3AFUXgGXVE1Qzaf5Lcpb686fKqZY3Fxrej8poTmrggafJF8HUxYefKk5cLm4c4DXh9ydYck12RC9eajaiqoaGKiT",
  "key15": "67QC7mkf1EAncpsWjoGE2rvatyFraGbaZchXM3TmxcmeSDuj7aFafCVRCGZopoAv2UXtjzCf7eof8X9LkSH79qFJ",
  "key16": "uQx9AKHS2qVLodcWoyYN4ghssSsqpB8HwZ2xh17jxmn9h3rLWp6sURqQ2Rd3KNYyKYV6DedQwx2ZFsu415w7PC2",
  "key17": "2Hdhi3bBoC6pgTE9EcdxBKsSYyNFp7ghF5rzerGTTfW4QM52Nxpav4mnGpmS5cmfhFZgxGmdYRuRnSn9wRXSSP4y",
  "key18": "xfNtm2jdPXLbxGx77murTDd1PPyD7gCJRSWG5bCiJHAxL2V3BPnV3y7UvKeabZWeQrWP2WdayEngdMX53wuhJRP",
  "key19": "3BNUs5W24531gaUzmtrgskZni8qZehKnK2vvERASaujw2NcvWx9nzQGCpMa6ybopG6DJ1G2jz7EPhzoTw3kcBArT",
  "key20": "41Dh9jtq73r1u5beNN5oqWSvRgRX3y7xDcQgkobZXXh2K4JzMFQTSm9CPRbDZozYa4h7ncvKBfQb5CdcvBAkHpJC",
  "key21": "4tSZBPADiTTrDFmjWfJUrwrp7DmKEmjd475PFwpLxa65d2aTWAXzdnP1vJbWJA8XCRLGiF95TkfibFjFngryiksS",
  "key22": "Jaya9BUzNjqEBx2bSiKsn8ow7UeYoConCwWWys1nichwJ9LkqhLWhirpcdpE3HbnknB8JJn9UFqDoM546jx6wja",
  "key23": "xpxx5W1FK4fJQCuKdeEZZ1iQgSLMov3inLrvzj1x2GjMk6d9BiqSiY9GtdGm8jH3XT8H1jpgZbftHb71zZz4XBi",
  "key24": "2fSB1Pdbh352xe793w2dZw53E6qjqQhehaCK4Bq8FyoK3hspJHny3CuapYVDgfLisW3sQteopHsKaY6LUi9sYpyr",
  "key25": "2K6cp6u1EYiTjsYH3BAxA1RNRai59hT5tYHqfJ8ud22fPVrhhtafGiTZ3SHm4WTKTRZuc9BddCw4Q69EW1MkHnR3",
  "key26": "2P6cpZ67Nk8ZdrS89hAhxu4mhCQiU5TTSrYaUcgKEC9ZSu32DwtvC9RpPh5iSyVFAEMbfJQwCeQXoVgZVKBYh7Bh",
  "key27": "2YPLHXyzqnC5pY8UHogPdWfcnLrnUNpfgj8wTXZkVafaAcX1fMZRTeCYgzksLPPR3qhZe7oLshb2gYqrpsUqQ9pt",
  "key28": "DGYzzQUsWRmT3prL3DSUyQTLraS5hnPV3iCeRfdyZu7j93czkJjfduoMN63PT3GyRjMGcy8KfQfEs1fzMZ4PNBT"
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
