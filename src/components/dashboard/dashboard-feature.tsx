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
    "4ovp2d1m5srLihDNR1WUG2udYKaLmQbBDzKbFbZSzN6DwZkQrDrSLnrPXcRPtbTkmtwzHTsmgHcAkhhb6zvKAcwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XqRM2P6B9efoiscub8ZnjuQhY33gVfLkAa395F9UQJT4sbSbxRBK1DTDWUrkWVdBx1W9BC5dfEvTJyUasvEJ4Hw",
  "key1": "5AMbEYWWQtU3CZ9c181jqoJTA3jk6NASb47v1qmUJHkGgASR4q9gJzCKpjYY2DUrNTa3PSHxRwLX4Spw9zZ8eavM",
  "key2": "5XVHg6McMNdBa5PsmequnPgTBM5ae8XzL2DHeSsz4sNNPot8wkEZe3GrC1mpF5ydxPp5Sbw4WN3DdLCAvNNjaaWJ",
  "key3": "3JrieT7wXyYL5pF8wRKeGzLaFtZCm5y4FMXzkcFDJhox27BWgbJxV3co43LKx5Z64vEizPR9VmjBYgqjJpwxwL8c",
  "key4": "8g1Wr3LiTm1A8mjoMFHs6F58g3ZxPcWGrjUMG6NZ1CRapWeRdH7KCx5sKfWnVRiqCn8MhoHSHpzKhpdoxcuXeoW",
  "key5": "4o1RMCbCX5XE65s2e2a246W5SqjqtoHBso7cpY869gW3qTVG2oaMCC2GXRHm2sgeXhAU7MbrZdfR8bw7vHxgNDEX",
  "key6": "2T92LYWg5DNH8z5T8pkjaFVAb441kVQ9qFmfgsXgQ2mprpyDvCC4iY2QjEv55sb67UxVqjq1qY3mrgTT5bP4pzT1",
  "key7": "BMj7iUBTTi7x8VsnarsFGzG7h1HN8USVNMZih4EGpXmjYwXUGzsVeLBV8m6HPCHp9KDuduVF4kxPxgy6Duhk1fD",
  "key8": "4RAZUgNeANbVtJRonJEPdduhUDqgoEqvKNQfW4BXHdcmDR62xk4ePg6J2WwUrfqH5PcgFJZNy5G1DgER9wYmzVq9",
  "key9": "3dWUUi5Qbj2C8rMqdfAp6Y2CX4NS5rmUPkKYkLkDcZLDmyxSrQueCgiJ1eUH222yo31A8eT4G8Eh2A8zZqHYBiAF",
  "key10": "67HCf4r2CarLjXbpF4niMD9HN1uncsfNnhcPEEXb3sjXM1qXV8xfXBp7QbcFB8wBESHbLx1sC2zQ1CsPKdfP5XyJ",
  "key11": "2Br2rcxwk9M9Jw69zEHKYhRk9Dxo78tGhDm6v2UpWGZTszMWu7bVrwXD5avRiguw76vzd4s7ic1PMsxcvowYXnVS",
  "key12": "2mJDsV2yPSJ9kyLUM1f71nRet9pwNSEqjGHEy3kVsZRUZ4sMG9uX4yXeRExVvj6SVL6D1DGWN6TdvDNVPx3s7DTe",
  "key13": "56ggjm1nRF7xBF2uYej4pydW3EVZPPi1ULdmhamzqf58KyehZHYoMyVELscNLp6qXcwwMwX513a8eherKvcEn4qy",
  "key14": "GSbgXgNXRgEcoZFiRZP66u9yg3WoL53n3fVV1PgxPoAG1vMKFfkDXF5CeDQdw9NgZ16VY13jRWGZToJr2sZKCXq",
  "key15": "3NzgzpDxrBcqttz9xHSGLPbsHYj9e6PdbKXNGiTVSjGa9PHGJJA9G9Hy32AnoRwa4XYKdFU1BTPtZSywzjqZwdWw",
  "key16": "4kigxBQd3K6QQETkvTZDceyWbZEyVFAmCkUfEseUKJFZZyT3PRALahpen5ym8ug1Br6eQJV7WuCSXqj86KxS1ZeL",
  "key17": "4afjvfm1oMLMHqvo5je922S1xd4Unhg51ULYP7VmAhsHmWfE2UE2SrkytpYwGRP9jZE3asAR97EftC9feqnquymu",
  "key18": "5VGr1NXnLisoe9z8xFuTrDgiVuwSyntUZKBVAbKuUr4pFeKTwm5MeJNWiifXHu3YivgstQEbJVVDQxW7Mgf31c2s",
  "key19": "5bXz16NZrAfBBkgr4tneQqq7qhFyKpt5eeJndEb5PKBLUW16etRvfzaGmLZYgCh2fSYvMCaPjadnk3ZfsMi4qLj",
  "key20": "56wcnbxRQFF8fpebegvWa3CTgQAYPak8VJbqFX1MVnHKhtS86pfjtnQNtBBBLhkr9jJTVREoqkZsMf25RQKxAXx8",
  "key21": "2rJ2kHgfN5Edom6iZX8MQbkD5oiqxLkSbxRkAYqgdPd9Pr43NGi8J6AfjVo6x37H86sFrEmCkJMBZp3p79ZQEYKt",
  "key22": "2ddPFDh8uZoVWQxWVQetvUv7Mnf8iLzWDrsrWw4wkqM9snPKWEXmr1Qw2zfWAnkxCxJtGr2KQF2ir8LZecwUaWCQ",
  "key23": "sBLtxW7vpygbLxggqQAmL7HERe4C2dWtkd2WPKvDLr9NY8ZWPWr5eBum3CZRfHkxEkBzAkp5ZQPjdp4g97v2ky1",
  "key24": "5avdDPGmS3CaTaUuSnWeoGXvx9ZwBHVmqwjs7EWUh5nKq22gTwxo6ceLQ3qXX8qLaPGh5wEQCiLoeoCTzQ3XHQCn",
  "key25": "4YYMDgEqKzZyypMMbwVBScLNva2GV1HVtMnvFiKRH7pqQRSf1ijxfHDDdcB8gmcCBn2VSRttzx47cuAYF41MLrHW"
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
