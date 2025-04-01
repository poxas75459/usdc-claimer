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
    "5cBYhjTLqvfbqs2dQhgdDjbqCfUzbDJLUpREibTkrQRTJ6NSPSCC7hWwV538bXZaWL9zzbYmkpCcx1uGwFDuQj2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J8TFNq9FDMWj744bqddR9KsX1PuU2eX3qUu7mp3fypTxjJ4BKYpTNZxXDp2NGvFoSk25vpS1KHGnaNV9jV6rjmB",
  "key1": "2d51heifzdxsCpHFe6C9UcSFHthmJd2ZrmtdJPCPeWkQJQcsMjasSKJsHb9vsS4gSnTXsXDtsqoRo5RG6uW5g49Q",
  "key2": "dttPbovuqYGVbvFRL3HsejTDEVodPJrAZBUzLW3f3HJu7jL21v1RphvFgLB4LM6q95w86dTFrHWWNYxnndTBxgg",
  "key3": "4coXvVv5UmhKKSmZuWWVRHFjVFoB2edVLCe2ioku5ij8ud1JEoBBkFXeV9mPboVaXkywHBoQoU8o7R2tqkqgRWmu",
  "key4": "5Mpeqf4qxDFCA6HUzaNjpCoLrQUMNGDyjzeYb95wkd1iwnefFk516VNxCr4Py9oHwVaWz7z9o91j5T9zgwQKwrLK",
  "key5": "51BUJafFqBxBU5DXUMtWM1dV1BQcSF494PurTeUq2N1H6VZ5rjQ6RMLmbbBRUHuFwhdwe5S4CZYLcjvn3XUmzsZd",
  "key6": "2T9r8GHypFWVGWR1e5h6SwLNDV8GJ4f7CS2MjHgkYhpj44MmGq3XbpSnbgfbAyx8TSUrPrK9dgS2FpCSCG711oXm",
  "key7": "4GBMciMtrTxkGoh5DtYUpn15AbJRnjj7bBjYMWKN4fUJdZ22DqhRKkGFrksNASM7D6m9RmgcNH83Y9W3bCVvukM",
  "key8": "56n3Z7UUEwYya4D4Nu5K7EJm5MBVbV2UWLTz4gnDa3Rinkzst8oLmHnotTBc7eYRPZQ1LG7VBZUU1mSBVXEUfJVP",
  "key9": "BVbixVrSCM4iiiJ8iHA1mQ7Ey2LZL1YU8SNURoBrArLJUKJRnfyHdSzsB45Cgwq8AfjDHnBr65QVoVsLWDWtFW8",
  "key10": "9L91KzUkYYqnSczUAepJGTRS8R1uboa4851jFLCqQdnHJ5FSY3PVnDGSNMMQjFLkY5DRa7XsFTkkY6LpLTXAvHX",
  "key11": "2xiHa4mrPNQVJqn9WS6wDZRRQJ9UwrQ2tpMrHHRm1G15sZ9uF8UTEvoyYCirFHdFD4TeiGsE8GaukcaCE5JKeyLt",
  "key12": "5FPV8emTDy7ZR4mHygv7wGAr3EeTBq27axyfg2sccmFcPwgqKEdRK2THRbTVuKRSutqwGZum6kCndcbw9vLdFd2z",
  "key13": "5StgoXCSV5rmRzvM5fG1a6Q6B2fEkkmgZCHDRDEppFoLWmjT8WYPWZhoXPM8FeT8eWpdMT3nqGwQWqNwaDsChEAk",
  "key14": "4tYc2N2EUpkcVSVdyxR1vSZhRA3npSN4wBeBakPrJBPzJgaUfuVXj4RgrKjJqzBNqcGA8yBJ8HEM6Fxq8SUScfNV",
  "key15": "5WWtsuDyYbgYH1qTERx4r3dje3PUewzh88DzPjcfigDvSBNGQFLN3afGBeX8XwXZm1wBQmi8CLSzo4MgxD66Eq8c",
  "key16": "4UntPJ3eDJWok7CubdYgQbqrSiPmK4EZygoo1VDLJUCX1ZT37jo9vgzJwWksVc2iTBEivUhBD5dYj2132BHqjTWQ",
  "key17": "43EPY8aM2cZGbqJmbFb28q4nC1jnyEWvPLSSnxnz1AfebHdZLXt89bWNpKCmqBRmQ4Eo2ikPiyE25Q2coseQvwCM",
  "key18": "528efkzm8NDuEEyHgkpF3uPLakVab6BDk4bWMBe8fE48vZ8Biyk1MzuGkxfVTUv6cN7ZdNA41VfTngK9dTunGEWr",
  "key19": "3aXspR93vMaDHajjBx36i6G2NVECULaFTaccCKUBSYZknWpSnYCeN5HnaYuLqg2qdZT1xSQTqVWsVaQzdQ517rrF",
  "key20": "3ySJ28qxfMunjE43t2g2nQZ3YCvPaAFGsev5EnmQsdXKbAh3XZjfgXj7hN39zA2s73dsFmF7ZZJAegqEmJV6SxUW",
  "key21": "4RGvR4p37xBuMNmX3G668w1fZ4LrsxfEXGJhYU5ctPR1TondMoRGuX5fnyfkHJtbYhmRZzRcma3GXwm8zQGjWHB7",
  "key22": "5W7NXT8buDbSZH711FsxpqqhrCLKKHKR7Q4nf5Lz7Fbs25NsgnKnUaPqp7uMd4xb2gvCwcYQXKExKhk1KqPoxL61",
  "key23": "3SdDsc8t6repAdg3jZ9sjYovTEguSNiXnUQM12hq3cQag5oESgb1UKvjrp74EifmoMC9wuMPggK2PXAC3bL7WZLJ",
  "key24": "5hpmBfSv7zybdASgVtyQgQVuUuG6Gyn3gs9eN8QQLi8vn8anmVgBsX3i6EMw9bVLhZfKSxCEGZZNW6ear1CzAuBn",
  "key25": "4JhruRRx7NY1FKJS9VNmbKLkdYVXu8smcGJvezRLLz62rGicdUtSWkWusBjZN6kzJP1Nof3uK8tZmEJrspk1yRyn",
  "key26": "5ky2ip4B6smvxoQdGW6s5fjqkpFYmE2ExDJ5BSBqKZmnHgdHYUzfoy5rfmZwYiEiqE9wL5heTJpTQRmiyfXmy2LJ",
  "key27": "25CSBQk26yWoznm7utaNtrcazFG8EH6neEBRM82L3xWKw2iBBoKGXoozLTRdxdkakcaJX4PB32n5XPzqkpDck121",
  "key28": "WrXX61oouJPPLXPsPDi5yVvcM142J2guqZ9brJPmW5YNvHbEpSQHcSsDSc4PVsEDYNvmSWeGbDR4koMFHkj87TV"
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
