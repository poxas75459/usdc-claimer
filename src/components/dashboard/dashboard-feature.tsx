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
    "iRmcAsijXPYssszpDeWjatWaf62BnThE32gCSj5AWJVkfJA3kmQ35Bw4vmKmbCHYQcFFhbMtXMimoGTh7GGPBrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "grJtyxbY9VcN68RuCu5gQRESVUmJZEA3E75PNzRpKwgV2WkbVi5DdML2LajrfGfkvd6r2wERDxTvzJXDxCWPwnQ",
  "key1": "3uTwbvKNXk2mYaJ5aeeBcsrjX24GCpe5oaCVr8gAFfehrLTGkuHHbPDjBTGwoHgBRrKeFUfWjynpEAnAtYur3fTJ",
  "key2": "2o41Z4wWKajQHfCjhBgBJD1Sqgvt4hns5SeNWeaNTKtf8oYgsUVhFyQXAwn1MYUQszkJAoLS5TAJt8tS4wZDXU63",
  "key3": "nnd9nbkxw9o19deda3cHFh3VYturrfb6fZVLBkQWJGhfcqV228w4p5mGwcShLbMfaxjFGdZ2koYCx4Az92g9pJ1",
  "key4": "u5tMVBAoaSK6vMr7aV2DjyTrDAWaRnz2WwibLdoSiCicgmLCwjJ2u1ZdBitV1sfvKG7jDaQhLK98Q5GTxb4r2tz",
  "key5": "2uTphgsqynvWeK5g6jHkX7GUqFGcaXn3WPfNYSGSe5ZxWxWsvuCmJzDS98inq6LQXzQk7TbhSXNQPs2vSrFAyeYh",
  "key6": "57GxAVXQFo7uHLEQ2s4tVn19AAPRusJtsmVh6f2o69ynPZZnxed93eZF6SZn3W5UVgNsZiAHsb7TQzmBAzcLzqyQ",
  "key7": "4LfwBviq3QX9MTwExBAW8m9oJvAqbpGWuCzoWavwTKdfoateu63dR2iWP5nSCZb7jFWrZJHFSMV3yNzLp6KGhggC",
  "key8": "5hBhUu6QfZNdkEAVFkSx8RbYBNcuB3ZeiiEKALGbqUt9rd3FD75GsRuMfmNTrfKZ6NDM6WHmj6yqiT6C1s9pfGEe",
  "key9": "3CnxmMmEBt8TkdgpwoDborxTtaU7yhBauHrGWcmyRKLMKXU14ro5uA1kWA3WkTjADwWbY2ufNEpGTCzG1fddyeCS",
  "key10": "2q7HFGezzKVpnXTWnQqZRqYKnV2EBTqo6gEDHKDEVVfzrbTNGDaeA3LVWyxvTfALGptPvFVk4Y4trET8xGkVyWz5",
  "key11": "3hBE6Jf98vxKCzkoTEw9ecL3ekWpyqyUpW1eBk9yWQ7BXBtzbbqxyDGeEdjfxq98D796X4pNBMBu8Bt416VWkiZN",
  "key12": "5f9GH2DXzCghSVGmngTb9etyDpyPtXomRMqZKsYqueQovngg1L2sbHX5GKfMvLCmnQtG8x3TCJU4UsTiYwkdXrw9",
  "key13": "24bYgVsraLhcnZwa2F7q7bSxN1pVyNpNPhYvQzGtQn9aBPFyLm93L2GnbvJQX11tE38h7zH8Xe9AGhs8QoMLVzqW",
  "key14": "4oDgtfdjQVphg9sUkLqs8dZYmv33QRToWCAwDeYUkQeSoP2DK2CRzULr9zrDVCDbQUgKEQDC5dFeT7AaPJuNAS4M",
  "key15": "58PJ78yLzqf83hedEpivc94FzVt5WzHGBsxqzRo5yrkJe2mX6AaRYLNhR5Dx2JUeLAYJeHQwWp4x5C2zWeHmKtNW",
  "key16": "2o5Kcesdui9Zu3BBV9Ay13XZDium63GTaawnrPJgb8APkztekN8GrBFNGYFxamrSc8xZkHsApXGHrkhFrCNa6ZJE",
  "key17": "48tUJ1rSGhZGjVJ9muSNAht3Sqp9GQCgyw68QzNQwNTxvZQp4ME6idtV15bSXcS7JLoCMkMVxNuwFxzDpf4RgWps",
  "key18": "tgE2rA16mUk62TyFwueZ6pGnp1hGii6vCkfmYL4caX1mborjSrbLYokXxPFHVM1hT6CYK1SmHcfXtkhNAy4uQaj",
  "key19": "3k5iSdfJMB7UvJEeA1qMAmd7K7RW75ePBWvms2qwRCAchACLBVCC32RDZaWz1V9DoZw55hnheFCQYmsRrqBsLJ4L",
  "key20": "jx2as3z8VZFnxeaMNQQjj6kED7wjH3PecgP7g5cXmgGBjk7cWfp1J2M2jqibHorvqyCQxoS7fruvPkEkrVqvP9y",
  "key21": "3LMg9qmM6w4vAE53z6sfKcYGs5jsEsULUSc7nHQYdtW8REqrv4QqFPhpfntwS2hSaJ8X2dL3CqiL8g6EfJn9ZEM5",
  "key22": "7vbCZTjoxRoT8FSPdNY3wRPbAozGTFSGmyBio5sVmjtqKHzEMRamh6y5j8rgEW9wGaj4298HWB6G2BAd6KkajRR",
  "key23": "2SHuS6yv1a1uEPbyPWSmPMN2i3tXZhkUE7LB7ZrvMamd7nNK9g4owFCTA149MYVxiLfHwgHKqxJTTACLSZTxbo4X",
  "key24": "2MHU1ws8KCmmipaB7rPgREVc628C4D8eHRjH9S1zvaxdmbXAKYS8Hh9LYsJaku11j7FmxuCbM5PqV8YFiepf9bqd",
  "key25": "2hGdzQZC28LmkPEpDauWPi5QzFmZqtVhVP3YVVm7UuLguznBoXJzKb2fSKjbkGuyiymbYzhxZiG2MmW2VzYowLCb",
  "key26": "3QVu8miasxY4iSTNH1thxBTg6gQ6v2S9co6SPo27SGnX7fYUw1bqjyMRzEsQJxWxFZAefupM6Tngk3QgY2kCTwGH",
  "key27": "5vH1ydjRVGkVCxQnGNsDu3UcdrfxGJoxFQ5JxN9kbiHWRbeQ2MYEyGan3VyZi7iiAik45JtDbbduyuYZ8sZ9TwPC",
  "key28": "558aHSMHMaMYo44L4yVihNryBvMFU2oaE9xjQ8t4MNRpKEMySVesrBfY9mJM5pZsMeQ2oHu9LhEU229FUCivCYip",
  "key29": "3YUiqLR6RB3B6cHFsQru36UWWtE3eBD5Ux46iwMNDqt9pT6bzeaGQBYJ8ZppCzawKPqSw2bfN1cNTkFw8ZHQ8iXF"
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
