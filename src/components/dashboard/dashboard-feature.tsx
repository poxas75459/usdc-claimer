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
    "44kSXPPgZHavH4hJqXPfwvBUefvhoGWQ8pGheKLZYNWw78kTFtXDnj23kbLBaLFok3TTfS5dyqyoU9hgEcCbhKcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49m3JujyvH4r7Nfqb9bWBkF55VWPvhANhoqHQMBfQ2hFQvWgQYVm2vV6LtEGNUCjvVz8vj8sgSdzX7xsdUfuoXNd",
  "key1": "3wGMtwmnVCsYjm2dmEnD5gxRbTqKXqptZ8JrqGFYj7a1QqqTRYUWutZUFbVstmzHRfM3nqPnbGiN1Tczyn3r8xeb",
  "key2": "3Sieq97nCkHvAzud23pHAufnkfNz29XARv7dnRhPThLGQ57Qu46X9gNXQoDQ8eQTMELbeF6mSjpeiMJqHSKM4v1E",
  "key3": "GfaT35Q1rirQwePJAn6Go9oHXQwhi6BCSpudajfoxbu2jcNYgZ4pYbp7pd9zpaH3Kvcva1LGCWYHRwkbTuNkdLh",
  "key4": "3CWzchgyeBj9r3syD6C66TsdRqjuWYHd5tajwpUxe14p9L6M2WWqei5TZHWi3zUgpGmz5oxrht8vqY3qRHyzhGk8",
  "key5": "3wuf9jecrcbwqZrK9ccB8Amfa8wqTMtxPNr1tGgdBTpaaY25xRywyXfmNeExKiWAwoMTmpYKhpYwxkgsa2a3E5V1",
  "key6": "zLQXfeqG6Mqkmku7dbrThUN9ybymz62vBtXkzy7JSLEnbhbtY76o4NyMb1o9PT7YC1HXYvTfoNH6sTgm6bRwAAK",
  "key7": "3G5Pp7dEaYF5WBDEe3ZwLTMQcmcg6C8zT31Z3t3RYvyiXN3LZDVx3qQRa933Vtf8XEU6xTeBm3MfQEGNRqcA48Zi",
  "key8": "56GcufQqtw2peyhsTSihMWFDAzsJk83vAckNCUwr8B3JBapt1Ls4L7NjnNwVHGkk3gsqDXCCKMWw1cbFDwNjyreb",
  "key9": "59War5e2Dfb535y5opKSYng4k6KvojhS1NWgXjvR4pZ8MpNL7UK343WoTjiFKYfaBMLpZYGsLZjN4o3RuagjfPrs",
  "key10": "2pp3UbGrbv3i391bYmWpKkm64U2GamQe8mTWESmqjkvwBTKua1bvmEk5GsqeQLkq6QE9dqjVv4gRJEuv4A8keWs",
  "key11": "4z8UidC35q7kaqFVjqzsdJCkMXJzoqDyUWNjuNKp22QpTx1adzi4gD8PtdPQHTTRAR4gQT1zW8U2ovY62i39f6ED",
  "key12": "5BAmP4vnvN8wU25mhjvXUEmMyeDPJeLtCRHCAiUm3AfVEJo6vZAw3QziFARa7XwaSmmytDDa5Sx3MoSexncocTKG",
  "key13": "4XqLbXVyxH1u7MjH5hfmh4cjpEvckFKBNTn5Xfts6jwgFy4iVpTmuCAjAG8DJ5qmAyNTx2xouJCQ7Cqv116ETvMv",
  "key14": "2FFWH8JPWLk1nktKQBxSkjVDPAQnnxZNbukyJqvj5GBRDZpALxXDRXTvhxHWRgK5cYZPfWuDGntVvg3s53ZSt2ph",
  "key15": "4keSfDE1TYuyzA3po1hnpk1nbFFc6E2o1bY75LefrXdVahwNrV5oQsqk8FQ2po115cQxLwVwRuXtaiUWJuu8XUGB",
  "key16": "rRH4JU9JSX51JRcAMcgaXCdYAw69bc6b98QetF8N3YcSrUKrEJA1zPvADbc1YNh8t2HZExdMRrFKxnU19snasLq",
  "key17": "2CYAkeVsS2a6w9VLrCbp19VJGFfHiFRewEkMv5bpV7r8cb8DiGjgmVziRgHF7QKCg7dKWtcUYz8snXduJ1hd3oQF",
  "key18": "4DPVMCopHWLXMptGKD4mTbGSNXr7cza9NBnkEzdVjAVMWr1ZxqyLkgPQ1wsWZ4TMn4cANcE2tTB6R8T6wDRn2fjN",
  "key19": "5bSfDSUQijREVGUSJCG9AQxr2RDF4nbHzD1wgsBMdtCwikRSmpn7AHtqvHbSAazEkVNaiPzLyHuHs8FzkkuRDhDq",
  "key20": "59JeGv3TJh8bBcfBZHW2DuGZMPNMQYRzxcYXNVQWd6oABucGjTeCSeYmZaPkwNKoBhEkkSw4zFBJNGV88428jkv",
  "key21": "3MnTT1pop4Qy1zbgJkHJjUbKAg3A91z8sSKrHES3cNNsvwHwpwzjZVf2vs5sjdC6XMXghjD5tRECQxU5P4uwiYGP",
  "key22": "63pazpcrkwbxk7XweiWRLi1dfoVfPW5QRrKH2e1XLrVzaBBUfJkWZzLFbjimZXSrYm5zQqbEc3nHryoS6XLncdc5",
  "key23": "4F8Mxf1kar2m4oxCAi2U9egof4aBf21is7yLCyf3iPnDKYUpr7eDWZ7KAaaCajJR6ZFFBjcXpuSwuXfPwV2z9gBP",
  "key24": "5oxi1ZWjraqv5Qmux3X5huR4BH8RPpwkScVBNQoN2K363sJKBe3Sq1WceoySRYoA6eGSvFHEiwLvfPTF5bfbpxaC"
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
