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
    "VmSZtEBZTK5jsDp8CSMxx6owLcLAYXPiejUWZXD4zPvG4HmcRBuVx6dUFUoaU5zYDaaL7tBuu5wcNdBovT5dpbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QAo3k7fFQBvaXV2ihrgQXi4qzuzT8j7qtqtKxTPoUteVciPwo9JX14K3XJrGo1jPhPxHnzDe863HoXC4Dotocdz",
  "key1": "3csVbP6apqMr3CPVNxxJAZX4KgWdkFDadivCfdhrKFHKFLQeCenSrGNRycr3vmxx86MXpZZqctuYqxaQzG49dLst",
  "key2": "3SWxYTt19yqzSXHqiPLuWoseNZng9iHXYkLxDnggGfETbvyXKpNnAKE8CUhdQHneXEtnyjFHRYrcaw2Cn63UcuKx",
  "key3": "sM5fHh9aaJL5sfpTkWxzxQDTJm8V288GPJUhY8ARTX7AKHCHUqE67FdNLWHV4JoofNEiFDe4eq93uSAP95PBS1i",
  "key4": "bo22dfcuNZRNgC3q33Z5G3JURBoUByEkBtxxmPYFDt4rq6rNh9Gf3mn5iJHHZzJiXYH9E3GfDUkfWgVTmBgKfJw",
  "key5": "42o1oGcj7Tdm8UDSs8N2n7BAkHtgKFCWnFYYmmJKLsxHZwK9iGoTwpKcwoM94fgkAhMycA41P8Zcxq2Ab2chM8Ws",
  "key6": "4vm3nDpcqPFhuEuQEJo5DqiYb3WCXDnkinVXkqpbBFUi99GsS6oQBZWdbvJbQ8YqBn6W8QmCYBz1Ufzx6kpEDJdr",
  "key7": "4n6NkQh9RvmhKyPq2YooSz89KcMAQ6r8298c4V4XekPdhhW7uxn9zf2s1odvJPtv84yHcZyfsZeb5L5perc3mrSh",
  "key8": "3zkVKsTZwVoECWCL57v9qrfs3v1hrCUqX9WYbJNjKx69cAWQgcCZfwrRaEEDssYksPCyZFF4UYeLcs8BKof8ttT7",
  "key9": "3XD89vTPboqQ8Tijwob8NSNwoz8WLfc4jDbjpC3X39ChGLtjBiGcrpqMWu3pMgoqq7iaJYSf6nhjfa4P8QUYma4Z",
  "key10": "9vnL8QST81bsxcZ5oYF69MYr3hSnnuD4ungVzUT1LDQx9YnzpYqgSrSY1zZy5eL4H54ouoJiKG56T8kgBhFzLDY",
  "key11": "qpF1W2ZJ7VrJhnB6X3idUkA3vMoEEBNoN76gAwNLkbgFgqgBgJAshAzfp66K9kzm97ytktmb5U6CTZXkHNNw2Hm",
  "key12": "JFdWVANUf9mdrSGtYqShdCTFy7H5QjeXPwyrR1LtadMRJ14kC8M1Dh7RtBVz6FZc3KL9eihN2U3kKz8btZsTBqW",
  "key13": "3XgKVMmxGpi6PVezywXMPRhvri4G4dQTStour2D86QjrFPJtBPy6VejTwk217HcGRZnfssrxCWkpd8RMmPtWrrPs",
  "key14": "5cD3T23sxfGcZkdaNoji3ddaLQkVzagerdJjWiFAMkKUWWQ92pr9PX8QLbTECA1wtYn9EPkoN2KS4BgwtFrxh1z4",
  "key15": "4kWuDWkxBD194N8eLhUBswB5QvoYyBX23yo6sSbUTmLWLg4aRN5GpVZ4ERM4WA6EACpwLhs3nk18fpoJ6CVGoFsN",
  "key16": "3TtweMVHKUegJgSpei51XRcQhxs17DuLB981AWePioEYFRKPK34YBC9ABDuSf8tyHbhjLg9fNf8Fm2GFHBm9ZDN6",
  "key17": "5BBqdhuCQhhJHS3qGGWDkZKR6C2anrk128azT4ns7nwywTyXRwA9xGEaPqFmrxpEZ8eYZyCgbQtcAkeSKUjifYjT",
  "key18": "3haZrZVUDD8cRT6fnWV3z2xCSkx6BbDtPEnTZvZXWAsESAn3TYAqRkWf4ABJGqvimZJT9Vy26Fi6Akq2G2oo5sbD",
  "key19": "2moH7ojq4mFeZUryoDncNdyUaJUk2SUwU56FNZE9UHbN7w155jUN9Qrmz4nUwP2nSKPWguqeoKtMTnqw44PKpxw",
  "key20": "2SLeSb8pZURneXYLe7MYczco1a49qFwCsjKKxiBhAgFsKJQoi14p7WA9hboPm8ztBrbypyW5jhYdLvynQvEn82a1",
  "key21": "5tvFkw2nxAAdMaukN9zaaZLVM8vacu5moyDzttQWEnqBQskK5MEAUhPsTbv6KttGcvqbW4eJtkLjKN9rX9En6oFT",
  "key22": "3xQNct23gEfYXPB5eesigfE3pfSqchv23RtbrtC4nVYT8dWTBV7AVaSNocifZnxjB6G9Yi2GaS5KYpfcqLP99wr8",
  "key23": "3u7GJV3C5Aw4UvejQ6rHekT2RECfEj3yKgucBf8xgbafuekuUjCwfuXmE3qqUB67cjcC6zg2dHNTRqQw14F1pnCe",
  "key24": "2Mp4vsGWm2tKufU3xzso6sR1LQ5NrD1BYrDdGd8qE3B5azBRnLq1EvVk3n1bYwrBMfcQrBP9X8KWs9rLQcqdLxPJ",
  "key25": "32NvFYixaXTWqyGathFLKMM4nEeDmFKqeTY9E7RNzstpMuaV5hToxC6hmDUgF4sQDbQJDqLVqtiWrE8wu4TpovCS",
  "key26": "51RxFeUARn6YcuvUi8wqMRhMcRm75aGZssTNnDbHx3LXSfGBFAdenshxTuFWvzavEdqRE6gZ5CDf2qQccY4B47kh",
  "key27": "3axRNoNvKQGuX8no4P869nSRPSiWu2722G34fJ8pAG9qNR6CpiNr7RcWvGnrVKRbrQ7TMY4YfP9oFwBE35uQdHEG",
  "key28": "2uYpwzVRNhoPEAGppSuTihnLevWtDJ9Ry8x9rtoxAzcqzPauqGpJWDhqvcTLRfPHb8VLfMAC6ApNS56Xgs8WsiWi",
  "key29": "4kLivXXA5B7TuvQ1fEGERnL7AM1GBWPw6gcerYB66T4cm42fJm6GGL32aAeTDw47ELeVD47Gwuy6BiZaZB7wrf8X"
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
