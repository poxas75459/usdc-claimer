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
    "3wXKRx5PUpvwVSpAK9PQTs9QUW7k3eGoVnriMTKnFVuhf6u6sWMdyAaFQiuzTz5NZ7bjXPng6k4zwv34aPGmMJNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HAg6p1Pv3KWomK8VCWzD1ndKRbipybVQRV6kbzbuq2VhAobs6eD6ozaewusFmb3W5PrPP4T58tUQRBTfxb1rQsp",
  "key1": "ybaxvtKvdQurtmzBw1vhgo38tVY2C4fsf7UjhZf6nZvyDUJUFWisRsf8FMdrypcvDizM8LGQkp95x1hTc9qern2",
  "key2": "3GNRFCLZefEuVT37ZM711Qdc7W3nyygCFp79cFQSUfoGGHrdGMN9EwcPs3jpK1NWV3Uw4kZQUtNuwCF4uEtwc4Z7",
  "key3": "53EThMdHwbPsyiYzrxravEFsK3zEeLXaM7PdFLWC5sHoaHju9Vi2j4EXbnQEyBDaMKRnFq7w7trwJ8k4G4gpFKU6",
  "key4": "3ou1A74t7LUuiaXkE3DPg8wLAeq8iN47bDZkmRxjNwed6d9PoMU7omFAGW5e2mC9yaLwkVF92M14qgRYLk9kNr8a",
  "key5": "2vSJdAHrYtUoufbPZ4zMpJGff61AUKcTprmyEeBP2MPSAnjtna4dfdJDcAYSdUFdsxjeYWJkYZNsgjpcqgoZoMme",
  "key6": "5G1C1EwzJGwnBDmSBXNwxqAUKSciMWC1Ew5EUxAdLE9jVQEzXCbTfPgTesjTJtKNhwPv1negaV7F9xF1LNipmY8e",
  "key7": "XNPiJrKYzBoQDQyNWrisGJVmkN8PcoaW6TUgWQwUPHhRkzz8Dq7VZhVeabvXQEPgmcBWU5Er4kuZ33WcMEiuTqA",
  "key8": "3SaVRVnpPwtjdUobhWBgzkEwAcifeosjaXUREgyX1QByvZd2YUzqAneQdpms13TieorLkfbHqY6htH7JqFA4Kw3",
  "key9": "3iG1Q98aeYawVon8wucsfokQLSgyW1CvKahAQXVqcoBv7uiKr6yUKMWr41AZjv3WNgWyhmcSMC8pozxy84DM42qR",
  "key10": "2wb5HxPhWfNreA8ZeiAmLoxGBUHptiePLhQ3KcWmQK9Yh4jsazHkeFzinpjnt9beFcaWPawaAsVwiVLgShy5dkzu",
  "key11": "3syEcTusYsbExo6N6SxQmQMKbNJnmYLqzVUP7nsucJ2Ht4GkU2Wjn3H5UWgeqZVERbEStSzAQJNYvMsKJnrKktpu",
  "key12": "5tszeodTjqtsTRNRZnbvEnbxR8QinPcCJtBY6bECExzibf8gty1BJpqzzukrbP8bWeoYQvWEnMMsjyF6b5i2USbh",
  "key13": "27thWqZmBTSKeChin89M1DFgUCSNsGUxNLoMd7Fk6dm6vgYssWB6RQdwuQ9WsWfGWAhmCDnCCeaM4YRK9xV2LUkL",
  "key14": "4UngzEeCZEJwTVFxfVMxjXk2n2UG3NxsUFJxTKEQwZpk7PFW6D6w3Vn9bL1iwMJxuYxnyo9ggvDQzMLYGNGxd8vR",
  "key15": "3RdWNT5Wtw7jsRMXgXobGaEVsAFxfo33Pzq8SN3jYBwXe9H4wTCBpLYqAw67HZkRDHXFqnjbgWFd16gV1FiLgT7f",
  "key16": "2eJFip1t86bNjmk1f45Leiw2hYUvEJSSudhp8LUEBjTHcf782QKT9CV7LfdUrD22Yf7Yq2SuCt9igMBPWVues2mH",
  "key17": "riTQHj6XNzi2QswUpP5y29UhxKMPHZDzB3E3c5dwB3UBKSEVqioUHit3xYUdznbrht9fe86oJ5NVjB9kegytR8B",
  "key18": "ziMxy5c7sb3RkCwDEKGTwfQZ4qAcf81sCyiDTR6cUifwFampvywkMMtqqxaX5Qz9hDzzgs35HRGDorZDqFj2dwg",
  "key19": "3C2gVDprMTR4HKKFu2G7KJfa6hhByTrL7CdCb3HpBBRmqFE29oXPv7wUEiXMpqA2jGs2qAyuxpaeUsfjxytqtn3s",
  "key20": "Rm2LXMuWcgomj4H1FEdyCmCbqRY9odBhCrYUf828uzM1pSPHg4LxCMohJG3SpZU3eu9Fh1WH7GxQzeF3GZTAqf8",
  "key21": "3wve7XuyLPXR9v7Gy5G3y2FSibXaNwf4pHozugRJPnZ7Uov3YnoXYNTx6kEXbvPzCmXpjP5ntMiQmhdmekEpFNvz",
  "key22": "3jNBARcYje8Ajg5WVENyD4mFKLxdoWTyr9ySEL25WnUsBjco8Bjq8opCnT5i3XHEG9EWvYDGYER4mFM3kF7mSnAX",
  "key23": "4ebYAAuUMFB31AZkcUcKbCLJhT1X9ALNWpDhkvZsrPKQQGXCZZ9Z42oEErMvtPsn9kqej5CXCD2LUYtuL9e62D85",
  "key24": "3jbuCYKUGP4MEjEAjaiKA5a8PYH5jkUh1BcEy8THhipPUDgq6cQicTLWj6rLGPE1nZVsNXsbUruqwZ2eQ2X6oYpP"
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
