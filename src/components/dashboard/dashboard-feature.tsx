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
    "5xVj8AvDGSo7TSyo35EmznHq3fQwyNhCvmU7MehvF4ohumrYgp8G4Q7UvGbNXSFWud235hv6VHtU2JSg1ZxStGtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oKTS2vwYM2FuBqM4ob8Q76r353PgNrVuW9xbmTDxBqZPWsNoP7MvrHq1rDZFcqEVbeEKiFxXv6mS1ScuxVsaNHx",
  "key1": "5ZZNPLB8jwGfHecVbetuwppSQJWKtRGxExyiy53LkgFqNbMSTqVh2b1pDDYUtrxB6vnv4NSz6KZh1WvK65qCpXFV",
  "key2": "2VA25cdoyZj7VFgUCvZREEUhfzQcwC2uyUuV8jbyXKp8TRFbXRNqBB1Uhqus98x2246448jUjJXDKdNGJmVB9rSq",
  "key3": "2PSDSTzkssEpqc6SSr1y2QtAhthXPFcRnZcNieBcuRQtTrNdDUCkqo8hshm8AQf7tiYXVUhj9WUsLFPCYoZ7w4sR",
  "key4": "2TnW8zj5NZBm8BuswTgUZEwR37ucM5T94NLfSfVNzowsJN6qFiHATNDFutRD3h6nThuG1PNW1ojUmhTzqTJ6va8N",
  "key5": "42msjk48gckHDtaZhuj1GuxEZbp16biaonXQ513pZ3x9NwG9ptquHMpm9arm3YpRtBaCmpYVfyxSxqzCvekE7NU4",
  "key6": "Z1zZU4vHoMZQ4ZGFK2TestyNsSk7EDPsmCVxXFB4gj9Vbc1NSckquJ9a26nhdTXwkQdZk5umVzWv5mo9LsUfeqq",
  "key7": "5ckvWct87Dn1xDqtptiw2doAkhmvqSNbLwHxGVNH91pUyGhBVF3Yox11gcN4wHq5ZeruPtSHqxXuVeayvpceEtzG",
  "key8": "5RtPV8GwpoVLvWuaEVksUxTifNn3HkNFpbCTfBkanoXAN9NfpfrSfUMyDscYi3WSqkHfpbaG8gGqFrS6G4eMUZew",
  "key9": "2d3Lw3cvLC2SCpcD5SfWadhF13LSxQymS8kPXm6weQnKmDZFiztGMv8gFG65C4QnQvhhn9p7haJzZq6EfTp5Njub",
  "key10": "2a677QYtTmUMJSo6x6BSPR58krhmSMCeGD8JG8K44yG2vbm9t19eiUkd3CkqQzJZwtBVihcK4aj7geUARQxQKa8a",
  "key11": "ykTpgf2MbWX1gEuigtKXPnqybiwVh3G2uD1KZtkD8PZyqtZJupW83JGwHJRAtjjkQv6pE2uNfugPUyNNXGZxZxm",
  "key12": "4KgQACWBHUxXUHEcWb5kZZJp3evAA634hUUodnMdsF1MFHABBCE4yeNaQnzoCt1gidpTfBh9hmi8FSjEvtfnRzCF",
  "key13": "5TDMFGGsFpPzufzhZuGmzGxqQBjEvLNBS2AT6JeabNVXwCWn12nvLzXWQp58A2iwLi3rVcuf5N9mt8nVh4aJ7P4J",
  "key14": "4diHCvTGDSRSFNiAf1EjQrk11tekicdKLNmdEuGCYLNoKPB1MqffoYSEe7cCFXuoFFFk13b8hvLfDicTZWQKCZyq",
  "key15": "4a8CmKzhMUHKPiQUTMZcPNeu1HjEANnxDcKnP7so1rdbismGr4rvG2jrFew6mXfBZ4BDqCx2Bf4v8GWnu3f3JQk2",
  "key16": "4XsbwvLndnCfwybeyMi3NHDeg4Le8EQmowbFYVVfBY9nyFCtsPa8xdCieiHzSXqhV35stCAXnaDmmcgnMXiwJR17",
  "key17": "5ZTywvdDDPu47GPmLveuHtZVndEVGiMVDK6qyCLppbmezURyQc5J5qYkWk9mVXRCiUXyzzDdZP6qbG79etw2s7d2",
  "key18": "3Q87UfJ6rg66qdqH1rfMDNRcv3EgxNR1e9eKGbZVjD3QPozcvFbYj6SD1vfk9knCbYWJF68gCf9714NWcrnf6vFj",
  "key19": "5hzHMVKAjNVuh6oaPoPNd4Sf1XkLqf26ejXhQPBouvyrbcWhvLMfw3SB9mBz3KYRahakWu8PyPzz1vSZvEcJD9KC",
  "key20": "3VonXKBC36PxcAMomqMVpz3G2LVM8kQuEBLoLL5y7HszeCQhyfKX1CUWDNLtTUn4Ru6XhtbP6fK3WTP5CPZDsLaZ",
  "key21": "3PjfERbNiynoyKGBsHqCn2kBC1dN6c8xAnqSJ2NM6TCFicoVd3ByZ7Nj9UpZG3fTRrNQCKRmR5ebkiC75Tob2CYr",
  "key22": "5z2gcZdQdi9S4RWzHWNPcUfZiZVL8w76v9KyxbgfJqKd2G1WKfe76sCmWZCGbAs4FVekwjXGKMTiTbHEW5RBecek",
  "key23": "4K3PQ9eNR2jhVsmmfVknXV3GVf5BuhFZAvw7kQQjQmLExaqbyT2hbhqt5H84Fy5qPw63VXMwESc6yDeWNCHUr38D",
  "key24": "qwZrohHBHAcrQozUXC6KjVHBGWXB9M3ypButcfWvRsk3yNAg4Hxh8VS22adHGZVMwSUezKwSg251v11nKGRbmjr",
  "key25": "BvMVtWD7RPNR8RXaBcCD5Gv2HwpCZGV2EheNNJE1aqjwnfvG74KQ5jErPodHPbazcg4LFs3ydsNfdENpQ6NRzCq",
  "key26": "5keHfBhmBeaadeJJD2gNFTQjazxFnozCZS1nU2kMFyFnZCVESgNSF4kdNAAp8GvYfircvymdtBWJYVi5bwac6Fvf",
  "key27": "2icMhQinEYUQV2xwEBGxpU2XBH3G83jhpkqwgKCKSTPh9KcqZwSvfG5kA8WLWaPXTr7ZLjT2shcA1wDLD8ozyXjq"
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
