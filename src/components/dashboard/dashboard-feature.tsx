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
    "WfXtxQvHmLCKzaweBEGw84Sb3mRX3ubQwefqouUN9zNH1o5LfgbvQe8PboYfzFq7XWwxZ1MmvCqtJ6zkRAgh8m2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41uJDTwpE2ysGn6jvQqa1yqyuUAxAncPUqs4aSxWcnF75jMWXpMuNNADtPHxN8rPVNniUuyKYTaee9SCWL54Xsvt",
  "key1": "59WTTZzxDrDdv9qYKRJhGThrkjSJsv9eP8U61fTaFEkEgNvQ3fG4KyfLCpBc9yGiZLrbLu3RVMt3CfvcXtkZmbSk",
  "key2": "4gJ5EKvZcMd7eLxVnJCqsozSLp5ztEDx3Ktog6hoKtq298xgrNXPCD7gY8Wsh8Myk2BwvB33PPZyspAXwmDCdng9",
  "key3": "3vuEk4m1JDJU25dQpasrwJiDaW5HF8XREy8gEer6Av1ZHJaS9fUmYse7Ha763G2yHXUkXDDkPJ7tFmwSu1gFEB1T",
  "key4": "4L625EpMxupwEWy2iyjuAM4mqXZp2Aujk2EXhJnwHWF8CrXr6cSdvAcW5rNJsKhH3scBRAyS2LyCMLK5stvcuGUP",
  "key5": "3xosmEgR34JKr5c8zJi5pLzs2USuCNEzNGnsLaxic7YAeCzBpC3J2wS3ftpdBnUhzinoFDvTYKhoxyhz39fiXW6a",
  "key6": "3fSYWaFPLMTiZtPv3L3xvJceSvdu2mwYKh4uYnkHaxWcMqC4Z2hAi6LoJbdFekf1dXSWTNHzk2XvD3HfWb4YC6G5",
  "key7": "57HMa4jvyJm4xtgYncS2txUtwfLa4NnezrW5WrxYMPzp9MtArCexGAyEhGrncR6UauCS8RiTVntwHc1yNnMALk8S",
  "key8": "2KaDwf1o5Ag5KBzsncSCAC5AaVbq6FrdZbB8jYQ6xFWkF6h8AwdWyexqrQa4Hnon9wmM3fZgkujbPEUFgLHCmih2",
  "key9": "5AQmLckR2WutnU1s4kHLxRzV7PdzVtVAZNvdWUrY5Boum2sRgrWqgsFnvCbvkfV6Cb3wbEfo5wzegumTsqn8TX8e",
  "key10": "3tbuMECZtMgvP6GQwx5mkDNke8fPXXo2CY1WHDjLBUKtKBdUcW4NzVoja2u9jjo5RXKzHsTCbMFqknLuTJXMRZ1c",
  "key11": "yAuaojGRVKtTyRH5nU4kqAww52Gb2XKCwBdpBcdxo5RsRLC2E2iTifE8MjagYHWPYNBsqA8665Rce2UJf4eXb8Y",
  "key12": "qAKRPhgMzP7aqtdJ15nP2oJ4rxSNZKbbg3aozpTWANXYUqmofDNopBryL5GN8emhSvffgSwnZaaDnZREnfTTRrF",
  "key13": "3FzooyNfgxXUogY9EyAPbqcpi2y9aLHeCdCuH6dKJ2hooJWYWgZtYMuQefjEyi3Y6Q7E9DHCKEfQTdiL4tiy5nbY",
  "key14": "3XtehWwBNiKxLJ45EZ1P15zH62LXDumrS7ioZXfxsgWGK7y3HrqbLyP8CL461bfMLxZ447nqcGudXi5SNrBZcZdE",
  "key15": "3fHauWKU4us9PtXHXKCRaGwtHJA7VNcdcaDej4j4BeHM88hDcSpRb4b7xPbXE8bQGL1EsvbsLSjuVuHkrsZTmcUQ",
  "key16": "3YHQncLrnXabaLQGBfdQEY3SFwZEgGn9RnAcqRUuSLiYramHDfyR4VTpXadf2Egp1wMS3E1muZP5LcsgCmGHZ6YN",
  "key17": "47sZtmSh9mdxBqzEcyhZjxMLTHc3R6Q2cUjQVy5pPeRaFAKQFUnRZerS7sCprs6gS5Qyh8FxtrCZUFcetvP3kNzT",
  "key18": "MGtVHcCMy3jHhdYfyc3AdCjF5NeiaAqy4bYDS4JpULM7EsKUUcTp7pTUjao88SLRCxaUwNFPnBXPHHPDZuhuRVU",
  "key19": "2qWKbMbgFs3snfPoin8raPP87xHWMFyiFm9t59A359NNihXE7zgxLiddWWRnV8xFd8tnJb3onWTEfGmubRDSaJaC",
  "key20": "hQ4Kv9z1hRBsqMAU798D4A7Ye78n6H1QRfbWmZr7hLcZknwY1i2PqzJ4xkjjLzpV7ivq21j29zSddXi2dNKhiti",
  "key21": "4HgGjknWeXCRWp255WKoZButw4BiKyXptjesde7jGC5a13VnhSKZqg7qCvcsJs4fpqEToF71BJPPTt7qa6tnoSJK",
  "key22": "2KqFvUffjNN7uv8i4DLKBprC8x5hYXMXA7QkUkafPhYCnNwGULCjKvy4gciTbyySnYVkXLNsgGDhZEJSHhMk9pDt",
  "key23": "3DhmQbCFK34fQZGg93aac7xNPakNHJgWP4r7iu6vJnzmzzMrvTrn4M9KnbLd42zwAD8Cb8wXxUyL2iDAypkiYC2F",
  "key24": "2VkeHGxberSZZoVL6JfAbWggjWjUd8PCXavZkEvRF7CvE7hBTuMS8d2fj52tVGxy1ZzqQRREorQKDLYGFrFhwhHF",
  "key25": "4pBXNiQCVuN7LmWyup5jLMCM3Pu9DkRmMs9AEYhgy72ATjqC2C9YX9HjnKc97GEZVa8CEWBG7eXVGk43dE5RdTQ1"
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
