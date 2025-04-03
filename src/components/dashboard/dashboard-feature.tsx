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
    "67D3mgBc5sAsgxA7q5mWkbbEwMVdvY7yfs2dZ4HtBb1m5AhjiiHAedYhKLsuwwJXpQiJtKymtZQwwxtVk94GnQsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nzTQevJHbG9dLM7NSa84XH9c59PksTeAir9nkur6fHgKDhktQF9G9N9KbVkmQz7Mn12ksupyXkwVMuQE1AG9W2b",
  "key1": "2x26sXEJx3sKRP35HXGk9RzFkNxowHgAuNWevemfTKJiF8uncKCLk7McA94n4N3onFZiNV4cq2t4SXvQfgFrPhfo",
  "key2": "FmFs5ju72zxAGm9zYHQyKLjLPrqxVLus7f39yMpWxFdoLySxHqyoQ9J9FHiheza6rEPkGbY3LFRJEczeUnH9qaa",
  "key3": "wwFKsuKerxb1QaQ88mcvDKFB1n6gEB1BaoGiUC5CJJpft3Q6RPCV9hNk1scnmsg2RmGWXbX7zJ5ssqnrWbbRC8M",
  "key4": "5Ab8joYcKys5GUx4D6RrPiBubRpgCA2iVR1VJuTgTuF2jvz8QjWgVmFpoaCfF3SUEn8TytukAZPbZvvNii3mRBzu",
  "key5": "5DvhfKv6BJEpXyjvszJnkH49fMzv82xaSzV3DRD5Va92wDvsx2v5pht1fpkxLNfwDFbZvdh6q5qZmHnMzX8oksb7",
  "key6": "3JhkPTTeKdGroPD2xQnFx2WgiznjuSWYbR9feGt8Gp7HwJhDARTknWaZkfex8BFzq9SYrn3YFAsZPPPLAXHnzdrG",
  "key7": "4NnD1M3f27hZiYRpYLmmg7FbLVjrJdtYPyESV48Hro8HuU4SVNo2qFBbCwawFbFqXRWpyrtCt6fWDpj89uxyxm7i",
  "key8": "5xnf72HvnyciQfGdpTiru2Su44BZdw7mhi6SCmd1UirKNu81yBV4WJTeaSaw7fuvd8RiQcSm42fKVRPoK6xsiqzo",
  "key9": "2GWjXTiEw1X6uZAwMx2ZFbh3oMyegWDXdgZHwBDu9im5ib1tfYZMAFVJarngm9Po6dT1zrhjx3RtpZGtSwquVsoT",
  "key10": "JSEgHRbdK35dXz4L6i4JaJXrtuwUzmDzQNxmZyzPjza2am5uLCfh1pNb1GZFJ4Zi2gcHqAqMAXTgH7Jgm1gCQfv",
  "key11": "4poBfRYReyx3VNbaBTHjjht84ncJ9QobWgh8BuBUB46rB1Tt9TSjXbPH4VCbRmyHCNZPEtSVoEXX6waMmSy6Mhuz",
  "key12": "64fowHgxMc3cUmDrCWfBVHGiJm8rEdnE3LRnf93rvxAhM49XTi9xUfWZt825k1iwTKuoPWZfYjCMg1bvuMnDWTVg",
  "key13": "4YX4jV1NGpbbYiPC7ctUCByWzTGPencKiVSZr8UZZvH3atcPDvudbL6cnRg9i15HGrK5LPnsMesX2Akja4AUb1bJ",
  "key14": "5PJNtGbKEWKEnUGjpqMztfNuS41d7NcMSysKUwUCm32tvyBrHyvtWXy2uVrYXwZGgqMdFJCHYndaaprQZLRz4Fyj",
  "key15": "2ABCPpQKGMGWHtkENWCrKBGRGEGjRVrQ6uH1LrN8fHFjZber1qWQeMZTBqJg63AZq5HySv4pzce7Zf1PqSKg58tc",
  "key16": "5fLgLtjQ5yHPph92PuwAmku8zCE4c7P5TT53z4tEuHs9zC3bRAwGzeKb6BFpCdYudnH2eyqfc27WEsjSYBagMiqG",
  "key17": "5kzM7CbkkShiLm1aH6Cq92n2MMWo22LXkRYDnSsZHchXYLnKcc7eRqg3nGuRSrzpppPMB2xdnxhGtX3WDp2WrabA",
  "key18": "5MGzwga966uu82kywzAjLrsCE3ZnwgKEc5rVnEqAscGXsgVoWpCjecoAVboB9MjcS7CzX4SgfV9sHkpC3ZUrC1Zc",
  "key19": "2J2RdL2xMUyvTgcE1QQjxyvmXqz5jWrMwToFr99XxjXPvjXQMzmiudwMoNovEa71tQCGaM77npzKRt4jrmqQau4y",
  "key20": "366m865gLpM8VGQpHTixJtqTbqGiJSPQGboGx3Q6LNncgUdMk9QLexqFKYEtfaH64huSh5dQBTJrTj29HPsgNpjd",
  "key21": "46mmNA8xNQs6XUNuvrGCUAzYGyvDcd89A6cHJHGUJHvsgKKQCxBHXvrL2UnAzFGPVPchtPG2MPUhXLaDJG7rqdSi",
  "key22": "24p68Hig2M21ENcBbPWFZrAVYHyXsgiZKHyszyXgMeeLac9sL4ptSGk8ZejnMds5Ny93qEGAQfHVoY4KJVomAqBa",
  "key23": "3v62eX55v9ynxaNK43BEJAa2nnhTfp1XRD63Mg6ZUEykptzjy2Kdcu2CUkbpEfjd1qstB8mLhyS6948AVpVXR2yJ",
  "key24": "3ZjV3am3U2iCv3iWMCC8CjK7C3bTqWYMoWCb7PnXji2TCCKbb2qVv5Frpzotoq94fWVspwk7ehmRQMvVSJu5Hsp7",
  "key25": "5TfUWANaBrnv47doBUnwcAXk2Pi7D8g9XLJB5EkwFFb9Y87u45mkev38R5mkofXn25z9oHepyfYJd6W2qAHoTSy5",
  "key26": "4R1ebt7zUvMRXz3tkiLWrgQ6jbBM5gLNht7cxHw6Kd9HwxDRxDcGwFQf84ep1uXsYezfb9UXjvybvc2o6S3VCP6m"
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
