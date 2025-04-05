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
    "5YPrRAvMXwqTbj2tzcN8MrhUFPkLA2rjZuEmBvRsqP8qfbA3suJmcwX8J1qn91vCGBPHtohTGvH8LqXH3U25giyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ibAAQF7UTnwkq1JfsfGFgtCDggyqsnxF3Jhw5PRmVjekRxb1ZNwPUtVHM5tyLP1nBdr8NcqbnRH9U8Sjdr19w2Z",
  "key1": "5LNFju7X1ooqLJQ27WsKVSiscwqSdkZC5f9CngRbFW9mtAEQnC7BDWSF3xwiCZGgWWjtGs3mksfYyqB2xc4R8oEi",
  "key2": "4mXzLVAjrpALAv3aTGQe3gZkLgD28xSNRLMPUBa2uXzbcWraqpZoY5NwwuQZTZvc5iKjKkuLRti5zyfhxrxDzpVR",
  "key3": "3uS9FmCKy7Jzzd7rDqEvQcEkHCM7niQGNfTXBWsEf2xnDEaaPoVg7Wd3WKFHs2pZzdJKhUuDsUJxtN7dVGeupd3V",
  "key4": "2vqjSk1vhmUxetUpzJ91ii5zK8UeEcuAFL8bfKxm1oosSpuJenHcSfX3RzspsUjoJdcHwGKYTPsayLLMfnbmXHa5",
  "key5": "uCrjrsQ1GVu785u7tMuWWN2ZygFf2HHqxa9ZuSevwYNpvrBB4JWsXASukZ422muxkynjY6RjstzMBkeihDB1j9q",
  "key6": "59DNK3arST1UGW2F4BKAbpkgaViYh8DXM6bjUk4nWn8FXdD4H6qirpRXVZTQPjEcAosbiXKSMV5uVjYo3go1K5YS",
  "key7": "2DYCCqxzauTk2GTDG5PXWua4pMuLM6CfY1uLVxkUhox8MXVXMEAbCN5BcP3AKCB8jDXMgbW8HCyQj5cJwYiLAcFk",
  "key8": "2GMNLL6dC1cteV9MBn64eN3ZxDTrWoDKH9N9pMTv4GJSGEo6vUxjjpq3GLY5Ppn86yyhfNe2nYhmN8pZ5UcNWpiT",
  "key9": "23EjBZJ7JEvRTWPbGy8unxwzTHeDnXVQZhAaWNBn6K7rZpt3gq9zwN51CNKU5ysfgsUGoBCZmMi7faCoHXEJZQRV",
  "key10": "Hp2mqbjRgE2PX3Jjn8CPE1ojkBDkEtdkKFCCoDnZ9ERoVkVGedw7MWvuKe6JZfUNH9gXki6vgy4DerM2mRJcTyH",
  "key11": "3Am9kxnpdaWAurFFpQBd7dcCGCMcXsCDJBis2JhZxqywMi3mhgXZruGDFzqXs1hbt9P6wCBdnC7tHg8XcBSY84FA",
  "key12": "VG71KUUEZ78c9xX65o8QzAzEaWTSFkgbKwTsEWN9N3o6dBmMtRnGYitL1MVH4VCpZ28B9dnW1FvpiQeUzW4nr2M",
  "key13": "32Tiun28NpJq83ovkKeH6koKij7oAAazBEQqwTBthL6YDc81Kw9mfpriwc88tZPFqFqjSqynqNXE7QSmVqfwyQun",
  "key14": "3EbjWBU3CLAh5727pYtJRmmtMHSv4DXuMpfv43j5v3wwTBpJfgke25tui86gQ3SuXgev47sFHEAbGN1MnrcoEvdZ",
  "key15": "3V7EEtm3AzshCi2rt6p4gXAboJ65Q7U2j6XdTtRz4EoqXa3Rw35UTNUwJiBdrWy4G1cN6WCJUurE2BKYtsJmyrcN",
  "key16": "2Mip6EWzymkcbHAdBS9DAGV7bc3uSZrnrwuW4uPDN32oNZVf8VZ5kxitddaBursCzP9a3zRE5T69dViMWVcCPkQs",
  "key17": "d54GwMarcPA6zBm5UfU5Bo4J4Xwqr4RxJkAQJgnzBx4Kott6zXP5DaNaR9gEEpXFDtShLP1peTmMXxE8cJVXTn3",
  "key18": "2YiHe8E1yL15kDV225ogdKdnLTC2eQ8JxmR29jjx8qvXsFzFKTcr2iZstE7kfzfU1BZ38b2DPbpUZa59TZyP9jkg",
  "key19": "K1YqubmnjE3DCuHNJh3dDG6cCXrdLBWkm9UkTL4M57YvcR9FRdFjG33uEyeeQhw6miNrJWnTXnKYq59CmD5JRT2",
  "key20": "2vLtRLjguUoW2K7Jz3oZsdcbePwM8BJVmGNhLzpCqv2JCf7qwwNGdZR9TpvDdv4taJHWQfWuWAJ7bqDKurBjGngG",
  "key21": "4uKRkkuUSXWX12HuaiJFbpaNkJwXbXDqYh1Co2sLR5B6FgttWdumpwnCyhj7mUpUYf7VMRJPYcij6GkEvxpH7JSF",
  "key22": "Vf5PmCKF63hoyAhBpp2DndfcBF2GykVVPYz7PvDue5eDYe91eZ4mNaBqVSXWqmY83Zi1TZW8irBzKNGRFAad1KQ",
  "key23": "uExRkXSmNb8APbgczhgPT3TgYcZwDcekkkdUeFWA1kH3TZ7aLbTmJ8jemSCc4HuC5tgLFNas32WvED4V4L8aMXX",
  "key24": "2j4NYuws68EHDjJdkPBrvrzbaZXwcaGqErfjFReBsFW8i6sfkc7TUeDHqaycuZaq5zERNmFnnPHHD9XXZHUuiyNd",
  "key25": "4iXnTDd6CHaT8ekbUyBemFktvrVHZ3ZkGc88r3FS2VNE5krRQyYeFdEnwkxiRCMeLTf85teDkfHQf1teWkZu9L85"
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
