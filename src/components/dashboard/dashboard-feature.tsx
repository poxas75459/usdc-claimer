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
    "37DMWBw2RrtPfYv4LPDvZouSoz5UcKv6axc1sNuQkvQM5gRnuEg3coVeaP1oBDVmCWtw6ojV3YitUWkarUn1XXSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7sokyJbbNHkhHUfpxJbfXtHKRW92yNuU6CMnL6x956yfsnybKjeXZZKEX713giZyMfLqmLchVmmBizcCpeL8V9",
  "key1": "83KjW5JH7crY82zKV7ssYVEPM4CyULbwVcd2HUBu52r56uzCw7YcFN7NiiDGEzj6qq8ZFHgdguM7kCesGYfC7G3",
  "key2": "3TFXpajni8oVA5CAqMPGP5GUqdPsaYMskiwL5NgSBm2LwDkWofycw388uxszBKiLjvdpQejLWoVcn6MusKKqgR1M",
  "key3": "2SPWo1LhRbyQRJnSPCKZCu748so6YGm2UcSWsZGPfQqwTEnoNMAT98T7DBtks7R8xyt4JgEikdiRwQvwQsMwKeHJ",
  "key4": "5rQCEYcvCXpLG6HsKPQj47iraCp9qiTEquTGBEEBxSLUiEFArDeNHeq53FEGce8cufLcSwVzzuJC9X3WcnvGYkd9",
  "key5": "4fwpbi8aGdWsN9M9XsjUWzqcPbhEVd7AhmfVZayo3399HXFyg99CMYuQ1x2pSWHc2sGmfv5uKU9JgJRuM2hBm6Rb",
  "key6": "63zjnKWzN4eQxBfNNFpJjMWdAQGBFjV8fq4mt2WUKPj2fruqCxz6tmsxxpeReNK3SjkZKdaxRcU6PohQ73adc2nW",
  "key7": "4KwJvBehV5Gp3K2UixU8CiJa8KzyPobm3t9jXdteTat2oqZN258vVLhMRBB18Xcwhbo741Sa68szvsJ2o4FauGZ2",
  "key8": "2AP3p3wk4nSGxx6Cb343dPicbEhAJs8DvjHkemD79G56Ef6HFnyrD3NkGUf2dgou38N1yigocfyJHiMkwRG8iXdZ",
  "key9": "EfJBnaHuyH5k81swko7GQ4cUpVH9QSUwT584uPSrgsUGhbsdj8aWpaSPPoFCrNaFpN4AxFy2CDQNyXt8pKTWxUV",
  "key10": "4BX8PYPyhAzbQzaBCt1GdjRb4QEorGAirMzcwhQSZzcuBJt8nQZ128fq3XLHonmohbn2goSS9fdwQ339ge5vMc45",
  "key11": "4hTBSN6jJ1YRWY6UEryjjdBPXNyaZFpkwqCgPMfFimCZdT3i9CrnMmDKb1vT38Mzdc6f2httTW94FsLTjVtVf4pJ",
  "key12": "2tJPWyc6tAg2MthvvGSvYwXHJ5rCt7xgaeKRVt1FRpnvNZfQUXL1UvFVb7SQkTqJwnV2FCMcsY8rkP7w1oLUZ7Hn",
  "key13": "3szzX13gVxpY9XwaTFUW8waGc9TaPi11mEWJCY1mtxuz1vyghBwYWMKVyT1J95kBqrNum8vn1EYAp9vVFY8aPdFs",
  "key14": "3ecUM5axry3qqur82eZMin11yAmURYKGJ8effV98tsVU6VdobCMmUDWBaoKhTpwLFv5HCiF8eXmj6moWTADHXtEp",
  "key15": "5B6ecFMtCg49KS1ZgfoAyY4HRMipfiKdJ9FpE3VPEsh3KSnAHpyYV6gxh3QRV5NjJYeuvdGNKh2bDcnKdR9DKraR",
  "key16": "2EHUku5ZfD99L5YeRacg6M4WYgcngKZRvxgQpEDgGnwiT8ktQZqZJcoF8EF8ztn6224wAsyyGrckoytvJpK298UM",
  "key17": "3UxWuzpfeabohhK1my4swSCqM3DhaLEJ2HVDu4JsYg8RKCb5ZWAPeACrpc9aStKxdT3biYAgGh6pbwghnmYNVLrQ",
  "key18": "3wJCPu9eGSnQrgy59aJyvi3trEn6YGjaRFiaCDiUJjHQoCaU5b5Pb6F7w8LoqncqEzFyDM4MQjzRz5DWVzRXFdpJ",
  "key19": "2ufVwudKopyJm3hFn55JSWmUTRgqkcajkRNNW9GdUsP9kWf5uwBK74wuR16ugNfaZL4wJnz6WZfmttGHpgBQeQLU",
  "key20": "R8JYtpCxWJFypRXhqEstLCCeokXq6Qu3f2tMQKHo8qhbXHstKeJxDQsCiHiRpn9FmLsVAbv8QbvP8GFDqFv1C3w",
  "key21": "pXzxdzdxvHHYAKBPGgVVBruQjHwr1gtsqCkFPs7p4Zw9SjwhK7K1ozjRiM8Qgcdx79zx7QrXTeksceSS4utsqrx",
  "key22": "GPPTbSEXaqv6PNnCbGupH2XYiKhhAbJQ7XF1y3fKN8ZBtySJwpVm3QqmG5TSMgWdjSnhHskJyFBP9mG56yy296e",
  "key23": "nUfTbDG6WhrTmU6Xn4vWFoGnUz2ALwwWPpa3vcCVCRhk2PrEJdvfvZprCkqU8q4FaTmxYeqphMN5CErTiBgJxcQ",
  "key24": "5myeonNcZgtDdeJenKuPLgLedwWg3ZuJQc8GHa5g5QuTZSBZWo3KEDG3RuDTchpiGJr8Fna313NeYw9ponfvHep6",
  "key25": "5xJfw1cq3S3o3RfD3BrfYkhMhgh6Z5xRjJridrjrTG1C7YP3nHD9ja6hHKxubi3Fw6itBWnts8ZKHvMpqLLmY2AJ"
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
