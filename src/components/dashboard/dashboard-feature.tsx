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
    "3Rdadapg5QvKPD7nUppeVgtceHpxkr9L7M54BERtqHqdiDQb9B1D9eYir8dEaQTEATRzBavqb827KWbLL3znQkyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FXePZ26FUevUuzSidJH7XR6i2ed4LzyQVd2tDJpttKjGrnqhdG4Gq1kA6z5d97khUQ741m2WrVTzLHgzSo8GB4f",
  "key1": "G9BAg7wHP61ZAoSTmYeJ4LPjG8XkWtS3ZPGq7dN4zgKM8eL7pPYyfXyLxdLhcfZW3CcAevJkDRvWJzmUrv88QJc",
  "key2": "3dBELTjWTdd4ZiBdJn9EVPpYuF5NHfbtynXaYLuoRFBbjafsXZNeLXtjBLh9WZSQ7UpRTKi56ck4ZcQ8vhayGjWK",
  "key3": "3x36xdNZR29yDPmsj9R4R4oGyo1v9WZvhu3NiwjcLxuETpG6s59ptbzbjsh3oA6CXbiNCcq3b1TqHsQxzTbYeW19",
  "key4": "5EfT1jm7k19H61qaFZwcZkdPKXdcQazymM9kj95qQRuTEyZKXzrnfugy8wGeWjgwRTAXGu2t8dVg4Bo9H3hHRCZS",
  "key5": "2LK9jovYMHYmisbsVhpWhLwnHxHHSXAEaDb2GE9FBqR8SfMb9bFFxRnGTgnJnDeYNJs2umNokRRtYcA9XkEFzNSu",
  "key6": "GfGVKFpZRYkBeqV1ZfQvnGxXKSn1t52SoubE7pwVKXNjB9oHmsFk7ciuKH4vr34UiNAyQnBhHgL3QLVDYszTSvQ",
  "key7": "5XBVzJUpAoByHd6k41QiYsFj1hC8nxoFcpLcneXBix9P51Dnz6iTcvh4DHso2xWpfF738V8PA9vG18FYApisWFmU",
  "key8": "3zgZbKpFQ7Rmd1MP2UVmkFEhhwm5nU3umk77YPJvyRcNpR4qAPqy5vE6nKCjxy1iYuMBxv1gyTGqNKfXJmxs3Ueb",
  "key9": "2tWUUDDx9fhVZHeQmiMqKAi6mLyGMVFrwTg9xdgBrUHAG2234KgSHTdeF9r9u6kWwAk4RQptBcT5ZMedHrhxjHGX",
  "key10": "2UL2gAGVAA54StWekCtmLrAmfi1mxXK2XNFA2rk9dq2ohiyLwGb3xsWpFSZr4foDK79tjgkyMdeZwNCr7PLfBTRi",
  "key11": "33bU434BpnDTY8xYjVH39QxBHGWdNbGs7yTkNScy2cWXRjv9PNVHvmL67pdRDWiTk4ZeS3qnHxg29AqmyaEm9w5o",
  "key12": "3t3CvZyE6Gqdof2qrNS5czKGxxSnPCcp1FUKHPbnTNbdaPHvb5SunXdCM17e2pMsQDYKRoRPwKyopzSpjfkGkpvY",
  "key13": "5yYhzt4KoFnGJTvBi9f2X7fx4XxGhLPPuhFpY21TMnTozTUTiKqkyb8ov7s2pMakqMCgnLXsGCjp5RLFj2PfCWLa",
  "key14": "4CSfSX4vMet8qzbg7QJ9sP162oLV1LZcRrZHfk3ZmrVcRJwkVdYkembdrfdUKeys3jSA2VRnAX6UTtD4CQTBGsky",
  "key15": "5W2mQ5imZS9f8d7dZWCpd4MdtTUcRhy4gKWBg8CvtXna7SNhpqSwoiExhbAeh18WZZ2vy4jBePkPNibxqpyMfJXX",
  "key16": "2YqkXJPeNCQaKWVV6U8zMxgpdTxGedkXgDLZKwtK1qFmJ9G4aUoZxrF64TUxGpKYcPvHUP1tHnszMe5b26sVTLce",
  "key17": "2bupLs2HiKe7HVGjsd1XsoDnsknMZmLNs8Zd9jNN9cUsHeYg9fFGLwtFxr9SntGYh4CFYFFYiW7d7fmRArGXzMNn",
  "key18": "3Hia8gkySgmgWWSGbhTAavmSFUZQqh4tH81vydxheHiSH5p7sHhikeTbk2JboVeFWTdZSJJrerb6UQFSjHr68wvp",
  "key19": "3HxXpfFw47y5DcjTMhBqEcwDmQCAFFeACCyVZUTAuWRSU7PreUN6UP9yT89MrEZNsvxCE63dxFFMzwLt19fHsPix",
  "key20": "66ndSfJN3RTbwSSYBb4W5LC7wipsP3tUMaR9eKannTzVc4xk9NRxRErhehAhxYi19Tbp5NmqeB5d8b8xVgLYg7DW",
  "key21": "38mtKK7roPHG9jZtfS7sjEvL69Bq3EfPNZ6E8typPHpvP8RTYsEfz2xo4PTJuPjFHf3EvCiNu1ykgMLwL4F6TRAF",
  "key22": "2zbST2VECVjEVrifahqmWmxThUJNH85M5VUmAZRMVhypJPySzBn5MBKXUM3qqT6vMZzDaKGd2X4EEcoEw8LVYbPp",
  "key23": "25dsiRgx2AKcC18NwFDBe2upDRQbW65EXD17rr5GeH5Uun8sMVExq1Gwi7rN7xfax7Yu41gzbnoQkBkh94XxuYPD",
  "key24": "4rrrtqA5L3hH7TSrVL9WbmffCcMmYSo4qVS1wqPGvajgHNfQX5cVw8e1ocwmnen9PHUj7RTCEAas7S1sTEMqdXb7",
  "key25": "265fMFLJdRzEeN1PuyfLKoLx6bhUM6Qg62dnxhNhNZrhYKGcQJM3XprZqYCo4JkcFuEuT52nFpAebPvFA5LU7PFj",
  "key26": "3HvgZ64VzS2NdVDJ1zChDLwRtFZJRsxPofhWVXf1fDfirgyCjWX8wyunsGN6ZebEMrPaKMFvgZ7JX4pdhjhjc3hR"
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
