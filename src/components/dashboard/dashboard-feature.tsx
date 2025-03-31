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
    "2mce6h1sTopmjHNxEzLUQsDxNK7uoJezoKRmVnUpT2kRmoRTSjbn7K31MKp6Ue2jUYcLsJTkL4a58fbhKtgBdVxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8c8Wi4sP9R57A99CGWnwaNgLkCVjyJVLtd6AAjVNTjHPpEoWGDqwLUptT56TNDyaXMLbvq6tfmCXFwXPKbJU8As",
  "key1": "2K7L8AoFTFCK6vTci2obJtgPzzEBYZDB4MBg9MNEi3wDCEUcRNicK7Hvc5ZYT35dC79GrQvByEmk8mwuCjsgwp2g",
  "key2": "axMJFhfUJT5yEsEjXoq9FCFpgdKBeXB5U8XoJUmdtwxgWxMsAUA23tfX9XhkdxjKEEye7c9pbn3Mhn5PGEDkcrt",
  "key3": "4crSqgQyuqQgYP1FikxzgMBQtCryLEFpxxB6XLSvEsW6V4Mc3HAzhDWtKMKQGY5Fw68KEi9bHZp5amSFq1zuV1wz",
  "key4": "4UUTd4vTsJ84x2WfBUQDvEKYfSU9RPphvfjzkoQdyhKQkT6eZ4ANULpHxiHB9c4g38oFUQghzHFD6fo2x4aqJSqt",
  "key5": "5cEfncJnh6JzMvkm42mXCxRUuj3SXMh1se8ZutSvoHcE2qQgkAwpLicpz5ATDNw2MFpnW2yhqmk9buoXeWBRCrmt",
  "key6": "3hbEpgFNCwZvz3dBJHXQDQMPznkA67WmHkNwQRepUgEKnND5MmNPjw5s5mGd8ELd48yw2Pv9kJqKSgtrN6sCaoZ6",
  "key7": "2YnDmjtAutR4TQuMrjUVSc4SxNSLNbvXZiv6wEq6VxMxHzDr64swsR7kdPjsecUi2zmsfNRHnBvqLxJoZpQVY1XZ",
  "key8": "3GN7FFPtYfhKxgCbfKePG2pEyDTNmcFd49hyjvqC3opmEckL4jrApUCutccRSCFipVvvDhwpbPryZkXDZJsfmKcN",
  "key9": "5A8AHcPPMhsa6n4kXWg7wB8jnCWdS11sCtbXpJE6Dn7UkmuJtkwRuie5Sof5GYmRa4JYnL8gtNbpwN4XE3Sx1Pwu",
  "key10": "2oFuoWGXatfTj9BuZntkHJbE2iNXGS1qVVNqKVqRukUXqHze2MTnHVARt1Bu86A9CzS39hXXVVk8fwKNoBVTgutg",
  "key11": "4H5NzZnMZrhqsKYXmnR5xwwAyU127Pz1ftJA6CbBQnwqSpN4nvESmmY2qu3kzWYUNXH7GWaFhmymnRmS858PQYH5",
  "key12": "3ZM59GcSzhMfwdnAAv9mRHYJrkiYdpoKuj96jpDxF6dsSZ75x9L9Gf9vzmVC6TSGABMrDkzkcd5UFa7x4X7Ht4pf",
  "key13": "5edbocLQEjrLB8kBwkBvPj4DE35t5R99ctAcEF3pTY7mnJmW9wdZpHnFtyCo61uuJN3ceLF9Wgo9XvtyxwkF1RR8",
  "key14": "49o15yWysnXf9dX2ZyarKCERJa1GPvQNVV9DHp4rUhJWCDiVEWLaKWVAQUXw3pn7ew4oQZDnFLC27yz9woDjJCFa",
  "key15": "3F3H7YRscFwDfWM4hrLFBpBmjiWCTJVb9bUagimvoCEJD2zDuLYeCRCNANT43wyrYRJfEXHqpKgS7ZcAy4v2U22G",
  "key16": "2LBk32UBL8JvaoFxSNhW1F6CLR3NhySYNPu73LX8fj5TYqbdsDT2H1Tc2voDgbtKu4Eb3rLxfTUmDbBbBs92rdqJ",
  "key17": "66MXQQaMA8hdccRKtZmgjzSVWdybopHG2eFSbcBghzG2prgFffSfqMnf4E52HQHqBfVsvMiW9y7h1d9nMpBdmfNa",
  "key18": "2kFP4TxfeKJqWejA2DDKc9ygkWqhnruDYLASARCFbsQ2HSrDB1pmYWcLjnge4qdjrq6JUifG53qVfgvdqQWovWXH",
  "key19": "bTyT2vJyuUDCn7YgfW6qvcAvYf327dVry2n7nWRLbwHCk7eA1MsvPCKUEgXHH8JE9fZEzjqxNffzCv84ZXzA7e3",
  "key20": "4ShBFiKWcr8JrRFU456rhzLRyRaBFucxyT2UGxqtpN9GGKLuSai1BuGRdCmie125TMKtBL9jqHREEPobUK9RQrCj",
  "key21": "3zpgyGh95kJUmZznZPxCftpAELPM9wJCV9HLNfadHQQzvJQnNW37j5bgwz23kLiYK4rQ4F4h6ZNTTAAUKUnLp7Df",
  "key22": "4o7Bif3kPZiz5ZFVCYFJD4GyK8QGKzUwhFhC7pZyvqyhN48X2hbaxn9WZyUYkU716qNZP6zVpah1q7yh4XY28cR6",
  "key23": "4s6fGkYNBbeUoyhR3Vdht9AjPXLamxVeoghzGqGfiRXmVDaUwhJRtuG4DmvQRjzUZf5CvQTgttu6UxCSypHQcU3b",
  "key24": "5kbGSjDs6Lb9XZeiPwJMHGbeWK9JskJU9Shh3tiYrKcwssNVxcz27hjU2BauWpSVVV11AvnS7nnAZikQgvFc8PsE",
  "key25": "5L7yBrSqTaWhvnvPMWmG2MvgKyXTLpbNGgQCLWPFbWAdpqhPdoaAaAG2PH7ckwMS4m48UN5nR8vUGnpoYo4CpGrX",
  "key26": "4D3Z8sbwMuPhsSnHXjMxYR515nKB6mV4D6us3unH4tv5UY7vewH2aDX4fQCWVaWL1REXAvuEW5ZToJfu1CRPQFHj",
  "key27": "3UYVzSH38DXtyxR8xz1pFqV4X9rA8qstrYQ5A5J3tNQmJcu9byLhVxW7cRoWCaGzzaKR1f1zMVh1KgKa2yhkrUb9",
  "key28": "3dwXpirXZ92uGbaocUB27LyygdoUovfewLoRnTjuVjdUmpmWgHgJFsmF8yBVcPFkhXY4pbLVZ7r1ZG4ffRQc1gry",
  "key29": "2K3Jf4RvfnfpAaEuerjfMBdo46ZKmAiTSFNKndodBz9X1QMhSaHejyrDCp2JPCjb8URnRw56eCkvHzB569KpGfb3",
  "key30": "6RoHTCzpEqVaswJsSvRcChyJ4wrMwE6GUpesy6skLq8E5a8qRPVAeCHp5J9ivDvSYQLrXxw9znDd8M2WUU3GNEF",
  "key31": "n8SiEbTgNCecAV5Y3FsX74KV8pA4BVeXzyDQz2gMP7yPFMQZxre7qb9EvQJdS5wvTRNnUnVPvd9yCA8DYa9rWTA",
  "key32": "5WwAdDTg7wPEsbPg3WHzVVfT9MQ8DbKUAKKTCp7thhejXg5grmd6Q3VJgsognQk5GwxnfHoHyceWg6KsydCvitMg",
  "key33": "38d7FoEo4PApGXx3GZWLCT4hBcgDuKKfpeWtmcT14qaaKaPX5Rpn8vtE6Q3AhQkKfQeVWAzdDyHHwK5wCnG5LdPn",
  "key34": "3V5twNsvBtQpmqSqMggGZ5FomEyFZrUGsrHkvSzdidcd6oKikyLcSDQtwaxyq3gpWkAm6jRENUpm8JoD7LYSg2pH",
  "key35": "YcUNJCFtjimJ3vTwtAjva3Y6jozjsRW1PBon2UAqusJPH8AFyonckMw9QM62sRsB4GoHNEB5r7wEj3XCxwxDnvH",
  "key36": "27u77NcSdkSkjR75TjLanQjGpfCGANeMiyeY2WKvgKmUceRYzF2ankKxV8jKy53owHc3zjqqBwf3pH92QSrkbsFo",
  "key37": "4aqmhStr7EXqCmzJ5MDoVKeMPaXyXM9ReSGBxcYzxUKqNbDTLRFqqRxkYkbzfHjn1uPmjcNSz4wqhEVsYp2QJFfW",
  "key38": "5QAbvgkmbF9xpQpQi1Q9o8e8vv5nUhfjytKnpj1gTdRPXnDkJAbd7oZ8EbzwqqxHPd8Q9HmVT2hDsXoNFg4eQcFd",
  "key39": "3DByN7WwUC6YVWeiY37GsKZmr28nRwxw7yQ3yLqdyZzu7CBY5RNU5JZpBMPFN2J93TV2fZoyQSwUWSqvL2V6CbzC",
  "key40": "21rNZ7WbhwgePwbuBp9T15qdjDj2V2s2KdUJ3poEZN2mQdchPEigAS71er3Z5H6NW1YXjcv3d4gAA513Hu5hQHEw",
  "key41": "5jX552EfPtfLUjS9Pa8m6oYaEMUthwEXuDPUirxCX5KEUaYU4ySftcfxAXs6miLpRmJcss4Vb9WeDtzVyKvL6EjU",
  "key42": "63di9ALaWD2LPdGMy8TQrKXR57vsUfp5LWcQeQJogGfKdyxTT7hhWrgBJoZ3RNEJL3ngcwb349qGYpp85znccV7d"
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
