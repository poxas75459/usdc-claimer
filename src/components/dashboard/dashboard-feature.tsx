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
    "2cZEP8s5KLJFYqZXFKTryyGLjRJgR6D57pktpdtwnqK6FRLN7vNkALNxdLhWfWRuwzcYz5bdPZDfneAQa16ZztM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e2XUfq4kwJGGTxPgdHiqWoMrfK8rAdqCPntjkJhVb5nDShv4inqG2aKff9PUQo99AGNy2L8QRPKArB2oYLuai86",
  "key1": "3CxmqnETruTfMZsF1tvxzNG7p2SHBX2ymaFJgrzPHbbHHhzfADwk2g9QGqP1qTaSvN2RdhKgQ7DT8fA6ejBzG34V",
  "key2": "5Zv5S8mUP7DQdNKqfL4gnMLDNAnDxwZZucVkoM6eQ4pzURWqXntgre5SZcVCcFBmH4vGwdo79My6gQztYE6tP2jY",
  "key3": "2i6tZDy5tJeRTenkF4fzY1XFrD5samzJmXZ5EpuAuiZHayiHbTPxiqj12J9w3zMVGgTxAprBD2hzGAuD6wf9BZ5Y",
  "key4": "42jwmxujgcbNdSRaPQHkNgR5JPdPVk3bZP4AMfYRyibCRfLofnHyfAhsRZ6uqZYr5Jd67HZoimzG6De4LxWwWjxe",
  "key5": "2reLLpcFfPJfcPnM5KmscJTBqmt9VpFHWzadZYs3CYnnyFwDY4QqebVtRWuz7TwejWgLzy1Vokd5ngeEWgZSnXBk",
  "key6": "2DnczN1DzTkFXrCH3RsW8dYb2NuZPnKjyiSRxZLQL5T5rnKQxPq1xX3Wgz2813Pryzghesj6Uu3jZQcLKXipRZnq",
  "key7": "m5DUywrDdoVnALpqj8CdXZLr9izXhXxusFn1qbNviRmT7h6zEQx1sHBsS5D7BAoyCbp4h3KSnbXyVRzFtMHSEfT",
  "key8": "4EwLFtAyd5JZ1PMuzJ14j9g3FhdHzufeaKVAEZ4REz3nqMNekFWL43bxV2mSN19L1pNAoN19fW5n71TBpjTfFbBc",
  "key9": "3FVxZecZJAqXkQwU4GHUBxPMyAgB4CH8CTUiGXH64aQ6DzQKoitgB61VaBMG6sWVQfP6qmoH4gpBZkQv2tp7FFYs",
  "key10": "2XCEykUBS94R5UuSQ9w3UzZ11XT96tpkehHnkEPLVcXoWafidSu8w35294SMViUst12bpmsm4CZoqJN1L5NMziWN",
  "key11": "usJJ5L3M5trwSe1vq7QUggyN4R5cDjFknVDcGnLKGsyVovzhdhgtGWMUFpAimGtBacw4fBTUv8aJqLsg6h6TEvJ",
  "key12": "5BDpHAuySXiWwEQ6K3a5qNWhy8EK6cqKsYSDpJrVQPUJPZfd9mwMo1dDhThXboiT2xY82oWiCewHjwq2oP9Gr5dR",
  "key13": "4KM7cBXgw1hvRyjgDZjtoj4hjJC5DjDgp32FEbqMMyc9p4f5vCfVifeYr4znZhs5FWVst2qZ487pw3ps5VVkfBdf",
  "key14": "5QrFE7Ay2aaTFQQJi2wp1kKxpeJ58kdVrpNCEJyTc9yvW2wdMqLqwmFgEW5uCkU1tM6xRv4iho5EZJkYCc9nJoS3",
  "key15": "DjbywgUzWiqtj1AWwfjvfydvN998w54p6JjZvyDPi1WdbNyq8fNLvfAnjXF7NTGfunFZzY8fAWXkhKoa3f7vLor",
  "key16": "3tTbSGUyKqA6v4pCV62TDnEZjV3ahmF7h33NorAUwtwMS9E2oh3xyVqGBYdi36hwUoWAad9wQYKB4SehXsZNqNxS",
  "key17": "4stnFCEaJmbKS1gMcJLzhLQWNs1S9VLtp1nEECMj2TfBFmEPJ64XPTrMoXudwi44vjKyx7NQvfTP6M5UFJBKdPJU",
  "key18": "4vZAU9Fwfy9xzhf71BXLjnsUeJ1LUQqWRFcW6q6yGjdAXp85wQqqqokKmhAAEaAF32fKezKoXfGzQ7AU5K9HvZEk",
  "key19": "1EVefzqN2FRasFenLP38ZoMmKmS2t51vvZL3VNFbrJ5sbbkA378fjVqwe4aMcZ6cynZA7LsN4MdbXjBjSqBQnQq",
  "key20": "4fjJiT4w638ireMzGR3txwCwkCCmkC2aPbvvk3LucsSjgHtWX46W3sTjdXKsyN78DSf3xkADhXjAaJuB3yaveyhw",
  "key21": "4o19LDX3gGAEXrE9ZKsYaSP9k9Mm4JSD23mZ5nvxinQyNni8Y7sarS8WSLhXvCKvmKMrGFy2V6FAiUDHJcH5uSq1",
  "key22": "4DgbiU9ZjHhdFGyBEtkjs8VLgzkLvS1rZY5F2Pg4vjxTRqaG1dnUKQQ8zd9EAZrbhXvR3ERwgtESFwsvp4MTEfeX",
  "key23": "5k2jLwDSmjdyT9saZQC9rLAEPB5famfSjDKQZkzAbZgADyxFVsmfs1shpsYpR8kU6wRyKYz4YRWek2kPJQB5fBem",
  "key24": "3XkJVunHeAWGtNa7veV9nWHE8fvsLYHmug9WSFQEvxTk1DtKMMk5ThLQMSiebgmkt5FEtGfQbPqYzEUdVjCb7BFE",
  "key25": "bccvFoB6QN6hxkPwqeT98V9j2wZRq5hN6u2nBHrh9zvGysthu6WijCPDMAGL82xhnqsCdfQ6FDMZ3neRtgQTPnh",
  "key26": "487ZytLHBbqs7RikLXa19t4k2ngeNqUyqeaCXprC8RjzWMpa2b1U7MBScWU4jQMSc6qo38pZBmqYVi9QS95qPYQf",
  "key27": "47T5cQwGyDvKouCSjp4qB1EytLwgQwKRg1Sq5fwPYFk7gT1FTSpgVGpTeZvoiw2MhK1Ss2qhxFtvAeoCvUqBRqVY"
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
