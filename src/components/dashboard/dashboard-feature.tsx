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
    "3k5Nd4KGS1YiboERSYBEp338SEH9zkZAJ9XLBYTiEqL6wc3wRsXdr62ptGo8kL8JUma5fzet2S2Rr39nE6S9H1zP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Eza3Uufy6jp2Wmu3Q5aDjJnriH9cG9jd1K4qqoio5qMJpENPqDjUPiXukfs2uFUwBUzrh5FXUNDtp1QqarqZTTu",
  "key1": "d2gnnoqextFe8sPt2aretNtGSp3A51KpcNDPgRpLrSz6GoukNXJ9oR153EQHh7zMWANRm5QhKMEu3DzpaDne6oU",
  "key2": "67M2JhWJFJj9U2G3VH6N9497KVHenKDcVHFaMzqJDQuEC3on3PvJMk7qFta6UtGkugiV1CPcwWtWmP7meWagKure",
  "key3": "4CngJUFRaxTvwKt5ahEnAbFB6H7jvQS1UYEqiE5nEC1tGzJzs4uREXYXMUPx2G2n5fTd7rJznyRKDXWJqW46E51s",
  "key4": "5wgqRMbZ1cFteGRbWLW7Asrif5FZtBGJuRGhAK88y5nMARE8Rt5ddFwE3KoydSsbMTY1btgLVvtx8EEZ1gnPmKJW",
  "key5": "3b2rYWvcSvfbGwoV7n2HxgsooXe4gvATdzT893aB5q8QoCHmi2H6vyEH6wVigCeMHdrtwuUPvGMKeiszethhufZ2",
  "key6": "42wQd5pZPXSNyZgBBj5khPssP7tD5q8dfKZ3oQu5wQpssDUfkyUevkC1EpjMaftQDCyaUWNQCcPeRHQtgW5vvpPr",
  "key7": "55pm7NK5sBnJBMj8YwV42XqoAvLWpvwMQR2Hp8tWUSeDUaH4ZhCxxZKFaV32HyRjePjweMQNiKWWjpTaVJZeV3X6",
  "key8": "VbwACFuFy6S56EfUT3KtUTqM69xPMepgtqrGX81gG4ke6ye5Sz2QmNrhEcAMquz4ttQrj96CdUhhUgwJFuqhAKi",
  "key9": "JaanfyJucpszfo3fSEmmu84W4mrnrrK1rgriDknKrCzxq4yvD5jKyxHrBf8Ld1SFhrh69jAihpG8nmL27oHBLWp",
  "key10": "3aMnKm6TsE7bAgqQwmEDv4Pwy8RjEEbYWieDSEhTcfZA9VRbAqGi54kNBR1yd6Z2KKe8ubS1AJDu7JPThTzWUcf8",
  "key11": "61KbTASE9vcusVTT8gnDP5rco4rcLeoyxkGZRnhBQ5QzpC5VVavPkm7QjNjYJonnV5d2ejJuVV6ZaHZa7FD1GfnE",
  "key12": "V932Fb5FzTbBLHfpNfqHpiygZ15xCj7aY1nZXDAPFSTVzwnVULnQ1njouseDkhJ9jbfADo83iwJ7HrV9NMF1jJK",
  "key13": "2C8BgC1xG8piMza9qxDzPu6hCxvtR2j56kvSzpHdjGL2yYk84241eKQWWNTfyhhCckHhd2dnZcY5fH4BraSrVUpF",
  "key14": "2Rg3grxdPrqxtYAWMRozRSvjBEj1QageUz9kobficum5vD2kxgmHnjigPxXqgALvxCsbRkwpE3Wo1rSrBhXJddvC",
  "key15": "2HzRBMrAsWNWctfLGU6acrN8N1582eByFW82yEEmMLrdkMDX7uaRMp7rr2Kwmd56S5VavQKKjMxXR2QwBawKU3Jg",
  "key16": "AKnMquZBABL16RBa7BbF4VX7macuwf7HMHt6VVCiJCbUauGAU6Pr8jnbYpv4MpYEsg13Zb49Ug9xxviy6nGVnLn",
  "key17": "5PeYgTMPx5iMVN1EC2P8WAz8AgUMUgtwKRhm6cxyWJmGhCtd58J3LuMk4pjEDKLSF6xTUWZnLzToia1fSqHV4jbU",
  "key18": "JoLkd16Xqxrjgfdk21SkksnaibXqYpDbrkaxhJxhutirU4qrwQteqBZ78u5ppS7SLHkDoZw4bKNKGuZ7s2dJ2JA",
  "key19": "63P9dM4EGZYYawHtqaGzDiioxoCypkY44c2wBWsKkytu4BgAPzAT98mHxd2WxdbnnUjCTx53JBcJV73PuCRrv46v",
  "key20": "4A6mBrukBCZ4Qcey8L842A5dVknYYJn7RTquwT4ueccc1VEgZNSiTkcKfEKEVxPJtRritJsSM2seXvTeU356cr4e",
  "key21": "yqE7EKKTgtr74KDopsLXKEBZTjWGTd5BDMcVUhn745gZKmByqU3N5hBw1TYeFqC1uDiQNXm4DRm9ww9pcNvhgus",
  "key22": "L9CV7QtAqKGpjcTgVybAKinvRig4qoSAP2qFi1FVWCAJpQSonUk4wkHqMLCbt1cxjpVrawiAGhD9764VyEPHjQ7",
  "key23": "2mh97CqWXEU32cqLu1xyjZ39GDk5iBrsYMiFz6ZVenyPfanBrzx3efvQnvMmAnCysk9UBzvK2Ac1ys3SbV3jidz7",
  "key24": "5mbUEYAVMq1uSsCtyy4eX3xnbdg7ybinU6nUYBHW1D7MK8bJ5grdwF25x4v2a2taCYrNFPtfCdAse51fRqbvP3Ep",
  "key25": "3gqC86x2kWSjLZdKAMZkTP8HRVtk3iwUhCy8qBfF8EV6JodiNBakgzkS8q88rQBnphudBnDrN1Puxxxdco3Ab6Nj"
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
