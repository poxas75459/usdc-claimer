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
    "mij1rDxDVc2M7VMyHi3bYNxb39g1poj1oEoHp9jPgrvT5N27AiKTWp5rsn5QDKDzkEsBBcfQksuoPsiXkFdK8iT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MssFU8VJYdr9TtGCfCwSAbZUjPDbuk6pB7XGHYJyaP6PjjFnaka4QorAcg4M4dGn6PpLKn34CF1Bp42sFDTKs4E",
  "key1": "5pvnHCWyaUtPRzx4D46p9i7yugoWws9QeNhBWSbN4CEhgu5CxE8K3rBEBrXdy5cWKyAxJjd15vVk3U53beSjVGFC",
  "key2": "JaW3aR4C2xNX4rdNghcxMeKm7cXozZxqnw7o55Nvxu4kh9yiGLDEFCDu8kFk5gKDXNZNiLytvdifDdh2T8Ndh5u",
  "key3": "5cAMDVEDz2xreZJLrCLw3zvxVYv1jV2DRnnodbUjMQvpe1GRTo9ZL2BpynvRh3bHhYvpGnBvfJJrPKB36xVNGwwR",
  "key4": "3pzhrwd6bgKWSRfRiuvkiPtae2BbzoyiqR7SByBsTXPPtHyZmt7yxs4bSfNtecAA5ch1DZnAvSvrTYWAY9qBQmeq",
  "key5": "4TVYTJW82VKfWqDeToWdWcjdYcCTGctKBrMz9ZpYeY8vPkyb92RkspKqWyUWtfT4iFe8iA9JccR8S9RferpL1gB8",
  "key6": "xiwNSh7STSrGhk8tV9CKkAamgZQ2HDvJJMUdjy5eNfuMGvyTwTNLhnWMQ2ieuAgr6QcoJH3eY1y24SimCN4Hdh8",
  "key7": "6uTSKMxg7ZW5jUAcQTaLfjWqNFsfGb4h9gPDGdRmUNS9D8BVawnkWKPwecif26wG3mtQDxCsKFTxacXPHjdXvvD",
  "key8": "4zxvek4M9ZKqyMUoGbRVQ5dxvDEcFrznDguQADFNKDZwkZYMGFnXnpztpcsjTHUgSmCHusdntizxNA5wVWADbpB6",
  "key9": "7EzNms3R3Nif4DvtxgEvcVQoKGKLre1u9QZ6W2G8CMfoHtvy5yKWgoVpz1Vk7q2h1BrspkQNVnykJxt9M7BbNM5",
  "key10": "EU86nxjSS4MNejTEcmeCPVibf3BKakVTYoQ7nw4We9icvAweYck83E4Sk8EWVMXiEjjc6FrPVUb7j9Lx3ntPL8u",
  "key11": "2SWoeekkyEPkTUpZwXPgMN7UWX2xzLf7WJqN47SgFhZp3yyxkPGxNiG7RpzjhFDanQRYmruFb58c1owf84Gqdy8f",
  "key12": "2iL6FYCsF5jgnrkrhDgXeA8cXY9Wg43A6sBCwimre7SfamBLkXLwXpyyNQUyN7bVjKSp234bLkK36cRwNULVWKTV",
  "key13": "e5uSBMBESMGxoaEXNfxDNcdnmWFbQrbXWJjMqvNRaNRrHE8fWz1Huybo9HUk9goZr1HPdHkK4CQ1oaYfUs3o37i",
  "key14": "5gET452CMbPV45azt1qUTqDZYVdLaS7woLnrgrjdAKhCwwEm4myh4p6ozxVTrhEKLQHn3zvmvW8gZcxJNz4Jkj8Z",
  "key15": "5VrNVYKbhqtjTPEGTsrhvLF6LyPikceTwhAnGcmxDH3vYQsyh8UFku7oD4LqnVqdqL7dw1gwMvNNbJa9wSHqfC8C",
  "key16": "274E5xm1JoAYHoxTbarJTeBncg6gjhUQ9i3iyLQatJRtojQnuJ9guegoiQ6ZgWji98BtyFTETVwmbn7DtGnbhyXE",
  "key17": "4Q7wWntryKpHAkt2xFyEUvMLs2tGC2r9yeHDdNDYs5q7t2Rtor2eUgLa4megDcxECEcXbN6BkvjHV3BzrJ1mTYmJ",
  "key18": "55ZUTW8nxqrZwi13Gs75fWHwkUAeWUnyaEt9tqKiC5gmTGStBYy8GsTBfxAN3qoYBy9hnHURgx1E4roYL35XWGAi",
  "key19": "4ZdKPxRNVUgm7Mgg7UqrtHLnwAu9qx6cPMw6C9SAKZMimET2mnvMEtfqoGeBXtnnZ4dX6pWJ8KdmmVRDxGgHwe4J",
  "key20": "2dbtpZGN2tNGY1LHuhcMQdGn87r5TAcguceXoGuquzHvrawfon9KQgNRnnbXMr8EXHQM4oZXQeVQbftaXfFSdGb2",
  "key21": "2evt6xcPKEYJ4NBZCYp1Qqzsqpw41kGvnvtsizZmx5dYappLp7TQXAQegED3FXoD5uJEu6QcWP5orkKdqJAEJ86S",
  "key22": "E4ff5G4zY9nkKBH72eFQ9kZee4GCuQMn4GWereZDpAzDRx6oFhtC2fhnwjEhi8AZiHHV6Kmpu9AXPv43mztd1md",
  "key23": "5DAcucWorgE1uDtF2UL3xd81kKTR3HTCdcH2dSYcmPQNV7RWhyM8XyKN6ECHTxxm5WuxRffyuSH2evXC2cGed4mJ",
  "key24": "5QxN6L6LJfyBGXXsKVR9xejDABDckr3qNWpowvR8oj2qFtzR7YGvtAPGWXwo1H3GRrEwXkrfZ4e3ssNPyrbCeHQz",
  "key25": "59DW13pxJAchySihzqPQPmNyeokPu6MVR4w9X6gZMwFgVh1eBDzky1aeyubQVu2tBpsHXDhwtRBbSafjdxWGxh48",
  "key26": "DNPBehUuro9WeTVSgqrjpJCmhjqAJRNuwh1LxUnxQ91DVLK76KnWByRa5kHPu9zEYjQkTmeECx13Qsf9ff4HabQ",
  "key27": "2jWcxUvyVr33giQhryLeEy1PkvpWcnVacPBhS45h6LBDV7oghnqLAF8dKnDsngv3tTP37uq5XzktL7GvW4wDanHy",
  "key28": "2MNVZNWPpfMaMRfQqmwSxmxnYgw1KLmEn37quDZB37PxiSUbbiFYbV35r8AbibQmBcEkFLqEH6rNwfUCnSMADDK",
  "key29": "4vvYf7MFWZLb5mm1pP2A1tDEmbnmCVZwtHYng7L32cFmMLmKc7zPhDVxa9LrrbBACC1TxT5fyCL9De99mNN1dGsj",
  "key30": "2x46q31ptpTcze5RkeF2zrBsPZndu6w5VoCNo76vJKoYiH4zSykzzX4ntmUXypxXCNNeAwwF1WuWedPx4VgxahLQ"
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
