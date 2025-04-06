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
    "2h6FyX2r5kt8WEbZMr7tdkxiipoxvRHigGDUNTagiG6w2B4yKofsnKX4M99NWnUAgNjfMaXbENTmB6koYYcF9jQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MaCKTY4fGZnkvikz8UR6WKU58MsFqRcstKAXkYMCcpjwXjpePWGtxqrf5BjsDNqz3v7QVDGDmjQ6NRn2AyT1S8P",
  "key1": "43pCJsx8AB9TxZav7RiEzB2kYFEFe3yRQaXjaCEuJX2YrPu7KqEUrFX5wStHio43dYQbt1aVhYKTQk94NeT8SPHV",
  "key2": "HzxXJGm2MPhEHrVZdiMMMN9P8fXhfheHTHDbj6EFCZU6ipeNCdNY5iKE9yEJ3uizTVEqTpTfhQja7MvU7UqDEFH",
  "key3": "4SXHDoew6yvnM1x58jN9yma6aJBJj1QZ848485GrkPd32sTg2oGNiQqwU9sCzGg71oQK1aCPJHntVbXUFMqAwz3T",
  "key4": "58qt2ugeH3adUHwX2p8yJtrXKF4PRr5uNycR5Gf8qzvihtHUeK633cKokrUxc1suv7BKmkAtLPjCWxSxfJfgWBBM",
  "key5": "2VQxnL7P6UnZWSzAsW6soxxtbazchgwzbYYihsxQi2Pu4DLiC2X8nC5N9Xc37Jkdz94pJagPwJWQVr46VjovuVkr",
  "key6": "5u5my3UjD46RiwJwVAc2MX97rNsDwZyTMP3mH53Tp4xsvScJ9H26R2xh8skPprpQwisykmZxaa7wfzzx1LvLYaND",
  "key7": "3di6BvRFezC6KwVbMUhTASfv6JrM6AoqC4aEX59Py9UakfN7cdnBF3C8hKqZqrgn82YDP8DFAbMVTM3fsFRwsMaq",
  "key8": "45RB41MHJXUDcbmHZnWzJZKUoGgE33bzfgZ2PKnV8smPJpoXpM3XspEDqBYQCiYuomg4Ry9TPF6zgd1BDAfyj6L8",
  "key9": "2deyxALgs58LagN9m5XqHqfpxHiuCZxmkjUtrwnJsFXYbKe5T1c4Mu9LKn9skaqCG7CHWHLAbZwP6yJp7CsRHNhP",
  "key10": "3eigsREGAw1ixiBTjbd8besFYRSYChiFszYemAZQcasrNcm9tRycaCqSUaKMJas1gyyhYxaN5JPDDVdYvV8SPzrh",
  "key11": "3J3d7ut4gGxnqMBbpEG2H2iPNLHqQXp12PD9gPfR3VScBXScRZgmhakbMYpDRtDXos9gjzqHZ3DPUyBGppe7wAUs",
  "key12": "4FAcmKyfULZaMemfoyaFbo8cyyDL42oar7JupNDK4FJgcigrHAWhbsmh1svHSHjJS4BhwG2EKUQ3XPcxineYUv2d",
  "key13": "4gNxfrwFcdgQuPWMKV56J31stW7V9jX1UkFsHRUUu2TNtDGZsTJ5viPL9FVEGbA8JmnRG7kySPuVvnkuoQTKsfci",
  "key14": "2iwNLnQittw6EUW1BEFXtgHNi5u6tmDwEY7NZXKtusY5EBARuGsmaUbBZUZEXAjM8zTWtC9VVHuV8nmYR9eCdqbm",
  "key15": "5vLDpJXPJfQGP1ciWUPZTiEjN8if9Qd2gwY7P7goo5qSEpTq1gjT5Wc8hMNp5W3wGb3yLhn2LsX6aRSgabrzHmcp",
  "key16": "5bJvjY7KE5CzbuU7H5mmtdEACgL445htpdHU3hc7ppzvUVecN1np62af6CtD6CTMuouVSqUCdKwnJdfteEZTv2D2",
  "key17": "2YAbeJ7g5GGMJyHgxye3xFE1YJWKTfxz249A9apKZDCKDyo9osuKFxuYvi5H8rHYnw1zkxUGfjwWPFUqFzLDXe8f",
  "key18": "3wprgmpRQ3zBdmi42RFTXWKn4wUhQvPwspTaWgpkFSpgw8YTeRr1TCPWST6AEintNrBneiKTwoL5cttg2YJjphFk",
  "key19": "46zA6SsxN9UrsEJMyzFPVBNBbiQpDVqmhG81DRGAE1SrgRZKFCAkULNodzbSWAsdcKiSmQvQRzoniMuAKVrHJaM3",
  "key20": "416G25JwYrgETC9Tpzszj3q6RzXkrHu3MJiB6Sb2ubNdCCtsnc9HbN9gcBqzyEH7RyZnXttgaFHoetpGypMhARaN",
  "key21": "3TtkiBBZHGu1BrsesA6jb8DFSRbV2gZDUKUJfZRQyPWhzrZx1QNVom1NCkcVvyPCMpzAN5w8ceCZz7qQbzUShbU7",
  "key22": "2msR2Amfxw5aqanYwtSucR6pV7S3HyjaK4Y77KnqE8efy3KrG1DdkaCU5hQirEGg8CTv7dwMKVTJJPWh23t9nqz2",
  "key23": "2TePeQGENitV7J88ci1mZ4RixVujZmgizc3UkH2HK58yhy1pzwWXmzKQtK7sXmVqFAaVGXMJZC3r3WUcxbdGMG7J",
  "key24": "yAbhgCHjX2r4QRFRKCjHTCC2VoNTUTwr56tkWGSWunGFmm7GbxBwtRoKq87urytk1K3PX3vcYCydkNUdf6cnBLd",
  "key25": "4KA6nLZ3XPmhk9Hj77bx28eZAtSsTQZMjtPAhv8Az1LYcsqh7bCmfut4pC5Lx8wTUpeVwjSb1rCn8WKVjaBckeTn",
  "key26": "3kSziMNJv1Hu1HWvBnz9BW4pY6PpGCCspuNdrdyLcPM3qDndPfUF4b6tXwwGuedeHs8ihMi4fRiXqqoNDBVtiGyu",
  "key27": "5yXnb4uAoTMc2GpcqBqJ8jQbDB6zExMKzaru2Esmna5euU2z9FnPTRGB2EVVVTq83VmH6HsGYZ6bZC7FALP8tFV9",
  "key28": "28pJ8mXmka6NzWfBdZzC4q9VyC44DTvbt3Y7NH1QhWBib5TBQcf123ZToc2D4NhfnCqpajYk9eSE3yEDr96SGNWz",
  "key29": "2QVKwBDke1bBsz6FRdnuujwWXDgYZTQXYTx7Ppn1aWgL3BKoNQBnBbUSy8JbMfQTFeRcaaW7wicgvdw7zYm5HXJ7",
  "key30": "3Rv5C3yLNdQYXgieP3ERinhJWz2jMLoQxdaVsJ7ecJtZu6s9QaxRCwoYtSXgdDXkWvdEVWzTxZK6PoKSmaVtELw4",
  "key31": "3HmRcsfYwz2pKKj37SjegnzFpjZJDtFYR4Ch8tpC4qE3n1UcKyimtfRoharWJhNs1JGBzLfNb6vZaUXpW2qWEy6Z",
  "key32": "yr63gRCJEJP3FUH1aK7UfBS2J1VrZg4nq4XnfdNkkTLXwMx1X6b6FVGNotUVHxyEAjaKoymr4iwhU5GWrob53r4"
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
