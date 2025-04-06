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
    "4nxTFcFg63hxUEJhHtK8XoDpQ4ouw3h95jPpTowWz9xTRgdesaqwncjrEcW4fYZZA9wq57BHrxrQX74DFdB3w96m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41pNfutGJGowo3d8y9rm2qjhAFhDFhLYRndvkzq8zpEYkf3Ns55CnVEwTNCsQvZ94dF7BDCMekqvVzFJEZoZwtZB",
  "key1": "3vEe7CAB2RzsivZ6AACCmX6to6CzResG71vEHqzFt2g36uniD85jdD6uhrjKXShQ68MSU4UY5yzVQPp3pMidxCVq",
  "key2": "5a7stx9gwqXySSJfNrA4eTL45YC2BoZYDZTivGi3JikEBbB1GkptWoYAsmfBJpMiqQf8imSyTv8Qqh3AANXYXRTX",
  "key3": "J68hoLGbtkdrwB4XwmRYxNv17aPCEgM8MMTjffT1eX4tMsiTAJQkgXRjiEAfcYNNVmWyk4sywDtFKamGTb7hor6",
  "key4": "PafFbZFpaWAEAHyd1NU3Z2Nsf52wx8aAHcqtosSqae2DQ8wziMQorSwpsCALujGbY5QetLoafoZ4CjjCL4E5JzA",
  "key5": "LeTEiGgDti8Je54LX8QPnCbLu1o7eVhhyqkDqL96rEjF8CBrVTKAxTxEz1yHjYugBV3hFaTFRqz46njvJY21iZV",
  "key6": "3abHygQ13bf5tWoQm5NZLRprXxUwBDQy8LK9JCZvymrMrG9M3pkeuGLWJeMVpVezg5kXUmFx2qRbGqFUrMZU6awd",
  "key7": "4neSrdREwxsUeQo2YzSXHtNDAM5g5VABfb6E7RNnUT7siYdStgth8LoKyFX5MJ3KgqG7zRjGoSq61z1rZTjLk9tZ",
  "key8": "4eCuk6h8SfAb5cdEV2cBbbV68ihKKucMbtfkywDPbyxZ7RmhcvYYgvdMX5GA8rbVkyXiujzeLNCUf7fZ48chyRSu",
  "key9": "38QivdSPKbNPGRM8oujE1skr7TwGYMRDkJRLEuJ9AEfbvc29bDTouma5Bd3bycH8516aNPud8DARDTnPsFHHX12i",
  "key10": "2Xk3uYoLNzEDs76o1A7aobbN8ux1hDUGAKnAJn6WTeNzQR5cJp33B5qiKzWy9ZdT4afcuQQqebot5sEppZBtGx2",
  "key11": "5hrzmrMLwrhT3kxNhnHz7eztdUixDarjXGPrzw8pe6JUshUzdspQpZe6g4hRxzy7LPBxuCdtg99184cwAS34AR72",
  "key12": "oHUmbxEtAsJDGgp2XbpxK9cdingDhc5nCzAZCLUuCMG14AQLp1dt7cT7FML8DKnBuCsPVH77WxuNfT2mxNQyR9C",
  "key13": "3634gkNxTBmfh8HS8NxSVP7aow1VpJXVFDHoXvQrzB1rQ9QsVE27QgiR2mXmzppXtyXaYBDaHRLQfa4V1is32yYL",
  "key14": "3n4tHtMG1QRzPrvAVsVJ1dPTzKUaytZ4tFj6LUJrpYQoGNh9tEpTKGZch8DoBWiaR1EjEBtd4CR8FoQUU4sXr3Sn",
  "key15": "5FUGyNHFVqDLaXvMqvnPXfh1JFyr72weAL7XvchesZaCVAxYYc6abkZ1tgEheiT5hP9sUmADU7NCWGJBM2jXqvo4",
  "key16": "3c7j6KDFpALNdBiW3gGi1SmD4gTVzMVrPdD3JJkoLyuC6oKvWFof1SapLxTsXsZF7KffboqNWo8iis7g4yAJfGZm",
  "key17": "oRwNeeRnqR48GJGrWjATCa4uUTZSxHh9HUZjVxm4T7TYdacrT7J9KyUcftrVbTT9xkVhpZLL3zBqzStpXxEWdFt",
  "key18": "3r2Vomi9Kx5U1VYbhsA5JKNXWEGtWPiHF1cFsJtZ94La2QHjAYdMFKfwCjchMjfasChanEzMQVJXT2GrZqbN1p3a",
  "key19": "5VJzohGHiZqAkc9asQoypYxXKhEwwGXAXeCJxA9XzN5sXU6KxB2f1eTRH5kbAsUwwY4Bta2uXVSPbhxcdbXJqi8E",
  "key20": "MgqUjA2k2noKTJdJGTVJmHYUKizmzX7N3hENT2FstghgDBmSbQ7tauS2rfEMniwkFpqLuZLsyFSdCr4dFX7Mqmr",
  "key21": "4kh3xQPUroRVqrVLbZ1eRSgv6M5M6pJGvw52j9S6sLRATej6pd5PMsQmy9H9pbhQcUbU1gwtyYEanwksV1mnZgf2",
  "key22": "5Wbc9c2wvxFLwcfsLEVZJuHHTiU1W5WftQDGH9A2PbZiB7a1mVzTUNCVaRpL9E8eUHgPw2x6rLoqKTD32WnLn2k2",
  "key23": "34v8MRE1SF8TxuZBmDUQ3iKuws2Sk22mveopkxj3R92twncsAnQxAqMpDyom9JVRmoBLCr7TYRnbGuMDCkBNxKR2",
  "key24": "4C7Er9zsWHEVKM9zezBdmgjPTy48NuLMEDNWbCBgefvEJVQqgcYA3ayqEoryQCYkYdWM6GgWw2tkbyNMWpQNrPgM",
  "key25": "4Wr7LpKxwUuYyVe1cxgLnwNnFnpvwQL4cwXNaVfRivEMRLuWnrvbZofPBXcYyfunQWUsVbBdttFS2hpGVtJCaNLS",
  "key26": "3oWEjLS6jdXXjJtoRhZrCocBfibMNvc6wa8RLXJeJGHBQWdtNfzG4Lhk6zrSNDxjGnxEUavyndmjEQwcfXW4pVYA",
  "key27": "4sigpwtEFgVU7phvKoQ98ETRKr4qX9NfJuQTuXnQULXHgCbeNyQd9JidtLGxdLxa5BPHCWZiYBEBi3qhRaihYhjw",
  "key28": "2tPiziv6pNXPzFqKXPxLBEQSrYeXSdHnnCJ1Q6YqnkTZYP4tV3Gfay4TDQobAPZguBrjTpdmafTktuDs9FC28uPs",
  "key29": "2tZxq7pLrw3pRuH6xpF2r8UgWECLXHCjsesCyK5H7Gf5ZaDzSoTcseLiQvZPnmg2v5fh8YeVSwg4UW6Y8QemLbmh",
  "key30": "62Rkao23atV8EBUtzWuqnv8TvaDhGtZcr2YHSCf12RBWZEjBaPGXVJFPznvk6nWEzTNrNC9quDV73HgJQ4hhqYTM",
  "key31": "2YJNGVJLa7ymqA8hvqKKwWh458h8u8YeexXQViMrHqxpaRbLzJyZsExunXTV7KFiEdvskPDVJijFfdcnQYwguXYs",
  "key32": "28NEupWQTtAgB8ho8stMgz6ZoZLUWmfQjVpS4AdZtb756CBXcE5yuBm9gTq5z3PonpKsdqHk2LAK2MmDJggiVB2t"
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
