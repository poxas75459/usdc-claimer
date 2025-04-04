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
    "4EFXHP7CrRyA1ZG1xGeBuU7bmjG87fbiVbmbFjtqDesWfWNfTiZE8ELpzxehDZKuuroR5PiLcLeBCJf82aRMXpB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jnXvMATeTSCNiTLMUZtHvCESdd1yN9A6FD5pduDvjZ5JEfUBy3y7zqfC95maUUSVWCFMEJMeZP5TDwuiCWT3UJR",
  "key1": "ENNeGvaayUhnfvCSBWng1rMk8qVCKegLw2ThuNj97ANW666ipPqpoQox9GFy4ytkhoVbhSqsPpqD46xUf59jG2p",
  "key2": "2AsMXT1XgEzHBChzafvR8ek4DE6YoMovSU23ZcYnGPbSYMhCAWzQ7ionSQeGLusaX5WNBndAQFFiJdRNeGVwPTYo",
  "key3": "kgvL2MpfYWipdHDfYZTW2QDxziy2syrWsQGxqWRHikjZkmdz44tCLZwrXuVw4qvRxdaBpARgSmHCFkyVorXhLHY",
  "key4": "3YfRGuMYhhGmLZQdtmbk7pqXm3UGn29pHPvaNQrbUBbDxw2Wwtr3WdxN8uHEDPkK3eKuT866GSkFF1BG6Yrjrgko",
  "key5": "3ZMsa6RirFuQKMx9Kpvtn1uMoNWoei99BQNh86VeGMeCjWmv9Y9BghDn8CCUHLthE5m3yEzaGxMoYsEEQGpi5gn5",
  "key6": "27c2fJSmAn4Nsw6avM2S22HcRvhJkJgEYbgcnygHfXKLCgccKVrWSxCpVURqfFa67FgyYocdJDnPHBSELS6St4Jt",
  "key7": "4yzZEFtTdfCNc7EbfNz768R2w8fJJLtvTxcVDDgZietZUZXM8dfiBH4HTJ5accWtvKrMJMVyjDMSZCeGPR81sLfy",
  "key8": "2BKubjrP5uVWkeMYFAaaj4YcPqUaBvRqXxVeNneSDQ7tR5DXQWyqpTZbALP6ZpN2zVib1oZ7CNHAfn1bu2oAFV4Y",
  "key9": "V2foN6pMSsw7dHPBSqQwo3aKH8WNd8YHaRbu4UUB3ggAd3VgohCK4th4igprLpeqCppv7DbSGiXF327z83ayJbA",
  "key10": "3sKRAfkTxzkAHMBB52xbfgR96SRX6okVgMmPR5V3Mr3joTSa3axZ4a9HQsaEdcDcztVxRv1GCm6qfKD4Ksm7XBHN",
  "key11": "3UcU4b6Jf5zt3muBMbxbx9N2hKBiqQzESizUUVJBtWuNigC9HW92HJ7CQMxk63WjHZQRPvPRfRBjcL8c981Hsggm",
  "key12": "5HnwZGAaW9KvYTqzMFwvF66tnDZLLa7nhCzLNqzrTpxcgpp22kZbrchvhJd2PFB66G65vrLKgFUPQdApWfFMX1KE",
  "key13": "4U3n7r6LEZLQ8HCReWRcfPQZiSNJzPM8xvbQ5UjN9wv6CsWRaFbPaSAUvCLQuQsV5hCnKmHmbrDPABB9b4agMwb6",
  "key14": "539xkvtKTwJfrXbZxftu5thu6g53zVWWunMb68kZoj19JLEyWCtGFXnKzVuYWNvq4kBkqE2LTjBTCbx8t2gUU2GS",
  "key15": "C6h2rJoXQFkgnDtbwBvC8L1LD5iUsih8hf5kMZvP7B2SbW1tgudS9eL5W1uBYg17zFQGQhKLUhnB46mAqfW8KYq",
  "key16": "5P9jJiMajXA2bmzF3KNwUovCz98wbp7zYoTRC6P6uBy1AcsuGCgXPKJt78PYnSHZNMnMyDmGMhEQEorBAHkdy5N5",
  "key17": "3qp44FrG3aMr3u8iem4Bc1yVF9zzpYnvxC2APnWcTJLXnHbHH7azxmhTNfVnp51v7W9j2k2ZDAVe75KUUaK4PSsm",
  "key18": "4CiMCDzvSTKaZFgMougzdbJRW4sxAArxZXjPoGPGxrLs7kx1LuvDTZRKGjwmLbUBA7SNVHYdSUrNyqkFKoeA2BHv",
  "key19": "23pgkivtRFU5KJ2RK1mWL1RhW3Ftgen7Lfz6dQgtETLDQsxdRpNGArxvedNyrXXQd6ExP1EyNhtkF2FeZ3VVLaPS",
  "key20": "44daWHgNjdFhgmGyh7Jm3k9MxDWmjusLEZiKG8cqVpU1s64fpUzpC95VHkkuwHfeXmj4womh2T5VtPeRHT1pSYgG",
  "key21": "5SfQmcysF7cVtvhEhCJrHYQ9UyQYPjdSLfvZi8VtmHR7eYjLSMWmCKgKx4pzmib8KYogdjHKBRQ8xKW6pfSqmwME",
  "key22": "T4a57LxtbMZGy3xKRzQfoGktiiq5cEzjW4KRue3NKpJFYnRZbBndG7NsysrRfH7JBAvsJGSdGjw6hd4UEy2dqhk",
  "key23": "58foMfsreKMfzH5KXAPEknjnoDgXM4JbAVJkzTRMg9yZQLnwc29FmwEYvkiUzDgvhWYotMQhAed16uABRfKhqrHx",
  "key24": "2eRyiewR4GVs5Cw2QNdjmxKLphz2HUf539FgEWvtEjajzjaSV7SULg9b4X6ryaJpYXjNcoLxKVTkz8PywoUNu4S7",
  "key25": "2wYMeoiBQiXQvJLc1g2W5PBqRDW39BZF8LNaE2mUKpmEYYM4aS9QzFkZLfirKLYBXinRFBvG5oi2kdUnvZEvs14n",
  "key26": "wrM7ExNjHV7n7XYUwjGhnt3fhZE7xtoD4nRiEaM7gGN68uJ4vUfSWU9QK1AKRQv8U6TjRoFgWUyyfcQq5AMrGmS",
  "key27": "3FT2wHXS1g5eY12MHYdtDreadVaJ4pkcYy3hh4kZjJ2SQSLWxG1uUGtxVyLuo1pDxrUFz9yvax6WNAkjwtz5Ww4j",
  "key28": "2RX7RWB4Zr2ut8yA7GCEwF1PMfGsSbWZsrUJ7vkaWWP6SZHVC1zMQwqLogaGychSBpB4RU97e8vCuhwJvWCY4Rxz",
  "key29": "2PueioLCQqBQjfgWYQCfouwX1jD3HidV5jJCHFRPLKh1BJTRZCE8n639xu1dwDahRtp7v3n91NRAKQ8WRJBifoTQ",
  "key30": "4BTtQa1yoqh444JpwPM3CuLRJ1QzAQJHH8uaXRF1Raw6y1tKi8pfwaKP3a1jDHMvoQUgC9s7yFyUYyT2WrfMt2So",
  "key31": "466Z4t2njiwUVuUs7WUqEm8yJhh98HfMDDyVsNDk9YRtqhh86VvWtG2sVgLrsaw6EoqhHFj5dyHfXPSmV4FwDp4K",
  "key32": "4SzMhoPXKCGu1QXzdhNDwFE3Y33rR9FcriU2xNNkajoB568ZHYs6WJBK9g5Zn7gMkt3E5bUXsrqpwEpCRNKJbvt1",
  "key33": "5siXaJTwqX5otTpArbXLNBw3Y87WRBUu5keRmqQUAU7eDnJ75p487mgXv4ppQmt8HoARcEkYrRmpArrRqqkW1hPr"
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
