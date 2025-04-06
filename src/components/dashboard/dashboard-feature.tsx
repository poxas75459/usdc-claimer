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
    "2AjheUangDk3QsCPPbmNUrNBjsT2MoQEYyFjkGskATziafFoD55Mh2V1VUY6n3KeBjJSR3ANaGc9wipiVz8vbN8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MsDki7kTMcw6xDzdBk8Q43GwVkTAQGttHfhVHTLmQEtjCmby1Ru2h1A1Wx2KFzu4a1imZ41c6sDimW4Mj2xbU3s",
  "key1": "5i7kxaRjYwBgXG4viZYFNUzUmzF5qsXqF6xJ8bbN19MhUR6kXaVFgtyNy8RjU2rZ6p755xjeevYXH5rT1o5cJFia",
  "key2": "1tabcFZZrjB4Pf3cPaWaUiDrBtG2ysxJQ3iUowPEtDPZdTYb1KCBoK7g3t6CGYT7Hfocioe5yCcc87djmrMUqM5",
  "key3": "uvLjY6MqHG6GpodVJyHxx1PyyjDRSUHB9Kh8FwtWifshEv4oqs5SpH8Hyy2DvJJy7t36QvpxKcUHd4oxJ7cwHKB",
  "key4": "rDQyfbmQt2uz5wAYhbZJqTfnKeGYpPuoDpabjGp5ChbbFxwGriWZSuADiCg4XB7tRCUGSAkFQwMKWj2ApTNXLhY",
  "key5": "2SPGrQwfgFgDk5denK7FhQhBzgQkEL3nhZpzz6f7SuU23otuaf4mtr9XjBgchvAhtA78eYvfmSZ94sFLB5bx26Cu",
  "key6": "3EfVXHftf3QvqqC92EUE21mitoLY6CBFexRA5Ph5qUfdW79p5TacMakueLb7YPHboZQDW8uiTJYak4GnTdcResVC",
  "key7": "5B1xzbn9NbgWu9H3DqZsaeP2zsMw9cG2DwX7KE8YLZSCLfwYVxhjN7ywhneaEJiRStwUPN25JjsaFudRfDqKfQag",
  "key8": "4Lnk2u8ULPnhNKVWiLdTK4rFx9wNmoKZ59bJsxtWKJQDFrMGBKHhQLhx8P6DdzX8QkyFo7bL2rHM9yW5HgLFtgBb",
  "key9": "5M51v98o4syrLiiNy86oG1sMxZ2iFeLmWTmw1AxnShc7pJmDXDJMrotS2H4zvMcddHV9aiZE3ZqK71kUoWTAooQs",
  "key10": "5gANWakSKmGsSL4scPoJ6zdk19Swj4aT2FaEBaJLagpqdsvhF6wQHW2XNRsXnj2ntagz394T9KPgBwycseCYQUfx",
  "key11": "3dv5FyvpcMR5wpzC4bsUMu7sTFigK2kBU1LZ2RYW5zJgec8d7RbjhaWQVBqFQ6Ks1kSukkmWUwff1WYKa9mY97Vt",
  "key12": "3tgUgQCCaUEuMnyA7JN4PyHqRdihHbxNUTv7V1TzdvvH97fKixBCqH8yAZhS2PGZ2q1TmHzUc1vFmvv1Y9cBizio",
  "key13": "4xf4gZHbJg4CPi4XAfH5MiTs1NNsHxzm8Ka5HEV2VuoiBdo1nreAqEsrTBCmKkEhat2L2BiBwcXpi8axWxkyFhav",
  "key14": "2Hp45krRX33p4aghC2XkQ4RUBpnKFrLm6Hn4zszV52D7QywJYYsos3v1FwVp6dmv8AuujxTC8exdSLWTAnutAczb",
  "key15": "BywE9CUS2M4pni256QiAwERw6qCbBjAcUjY5kazBNS9gGqbsmuEhHjQQTvBi96TvVm5Qcbx5Gfs4BNnQYyHu6RS",
  "key16": "W8gzuUbXHA1ms5g6T9eh3dp6Gpcu5p3SNj4VaMkoKZM5upeKpfdBBV6C2BttMVyTib2CdJz4qfj3XTjdpSNxHyN",
  "key17": "r7uAASZc5haYeVRW4cjgqXpkxpdFedNccQhdrbTLv4nMWYTdB8BCZMivMoZx9YKQiFQ6AwkkYbyEc7J9fBG18qL",
  "key18": "3mDwCunj9YwUkQk6atvhsxXqfbJKTzZLEUkBDCxD1haHMhYf1Sucu2W32B7qw7NNmQDGzpe7KdqN78jWFs3yPpLG",
  "key19": "47rc6WJ2kuh74kgWGZVkZmiTDNXmwRXAPEqmpa5i1Rf1PtRSArDuMF2KQkmGEyQBsEsW4WQ3SKgkrkWayLQFSvyH",
  "key20": "3XaAJ1KqwJxPR7sa1cYCBzj5MVmgayWo5MbkXW67uK5mUhwj8PitzsQh7A8eK1LmwByv1AJ3mYfXhSbYzL9HBw2b",
  "key21": "2GL1bcpYJ8214m5zaoSDqqVrZjSANza4Bk8rSKM4Ue2h95KBG7NjX5SnjW7pbAkmsX6wyf4ytjAbQKamanWBy35e",
  "key22": "2AsSnBfNfKuCTDEWo8AbkotGNH8VqrsfBj5Nd8AsBHiG5rtRdUFsHFiWqjhRqWErbYFWNdcxtCJoqKfvMT8ZaLC1",
  "key23": "FpefYuLVLxnQRWdpwziXo6EZicyMXwdnHjitx5CFwWST5NSJaQHmWo3gHuw2jT9mFUBLk2Jou52aa9iUKhKimHJ",
  "key24": "3ViCLUTjk5x5j5mTyeWa5xUECQ3cJomQcLJ1wAKhZ2MKFVEaSx3LjHZcTred7swqLz9r5KWGAzkyGVU7LHYGLRVD",
  "key25": "4p1bYzx2vArfLcgsTKuS5cEMou5nMpdiS6QDgM7FDXwYmDKcw6XfF6oyLcpg6k9t737kvTbPKZZKCsLzPtwccvZt",
  "key26": "4rH4qXZ5waMw6Q69xMakMjT5ZmBh6zQfge1QrpKoHUnKViiDCmizmX3s31eQHiF4VcP2rvJLjNN6ezSbY8aQehTw",
  "key27": "3UuL1DU9tQvYnUYfw7W8E181dvBNgUEKR1zf37BwuUXRWbQb6ZiCBfdPWNcNZJhWaHnLx9VexA7Fqne8jHfZDxZP",
  "key28": "27hTgfZFsUxiYFRBCYJEhQezMf35Skmn27CGHe7xy9HCQJzxjotJfXtK7GX8r8oTqKAtVcrb96yWXdFHRXRWiv2U"
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
