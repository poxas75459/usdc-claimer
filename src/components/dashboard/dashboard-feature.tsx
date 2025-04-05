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
    "3BZUGD8WwfynaWbHj879Uj7zHXnDeM1Lk1mKzrG2a1LeE5unGtmScAnXoMVLxwenCDjMQKHXZAc6Zgqmr3Yfzf2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E7NQNEgaygSfkoxPVuEo7q6pSbqyHRNpY69SXocYA4pv23fBCHQp5ozZAHU8Fgzcn4XWcbMrnFeFvTJU2kxntXj",
  "key1": "3HBpztPqVobppVwC5WP6MxwPTauVRGkvEv6Y1JYDHDeDuBhyi4Q5VZX8gYe4fqseXB1nGxruxe73MyLWHf5Fqr62",
  "key2": "5wq4NXR1GAFgQKidMUAvHPPAht9pjgg3Mi4THtMFXwRzJ9F9vSab664x1MyeQzhdvBZrfz2gdTU3HUcA5rYRFyxw",
  "key3": "3NwFWqMucG9qHpJkwM935vfFwzc1hgzNVUayfby85GuUjswzQpbJRbkfxudJhVc8BwiXRue1Qse6QTxJ12sNTXvj",
  "key4": "4ZPDWqMyFnzpwRBTPCsB6AVSEz2bKRtYC4FcCkizHcgW8KYPReLF4bkGfxdiKfWFECtMfr7UP9DAznQdUjfT5ac",
  "key5": "5qeWBYPRBpCrzCdhFWbdoCXbnBKoaG8t4ubof1URKqJwXQFFVs2CdvtgLaNhn2zR2uDJkcAbxwftCeQJFtGqCSQq",
  "key6": "3LZRSUpWGbUZmaLfAjB3Bx2cK8kZhGHDjt7PR4aS6S4qrR9Au8sBMRVrgqtPFg7VuKtwXWqXSmJBPHvDptqaDKpL",
  "key7": "UmEr9bwuTHDHimR8iQ5uVbFxWke96Emd1gnWDGotWqoh2nhCQ9xjHzx2Y68cLYeW2T6uZxAxuJT7pBLCyuKyEgU",
  "key8": "5odSCyg8idZ293xy7uJdsTsYZxwbVxN7V2YbyUzsico5vfvSpq2uC99DmqP89vCBZ8MQqvsL6uzAQ3YjyyUF4CHx",
  "key9": "ukaUbVsMBNdG5ARaHRZYVttrKk3FDN1urFFwbhN47ic1rWDQ4jiLqVoFmqLDTzKJSU8Y4Cj3unjwF4wirhnKPa9",
  "key10": "ZLcBTdimWm5KYjasPiDNKjTK2TAc7AQQbsHsfRDEcGKPp4uJSKCekFdpJhz4hVa1ujgR9yN1PmiwzRLZVZi7pza",
  "key11": "3GqbHgnrDRpHN4u8JRMvgosbEXKhqK4KQy7ShNya4cSCUXW1GwnVcPqwuBBhcdMJM1KzZADBMEzeby8w79guETe8",
  "key12": "5Nd2pjEHjDsA3qjRrNcCqjQVePqZfufggasqvkN4RjX4Fsed7zRtawUDYBDpaLAz96KxF1vVd7aNPVhs7PGYeYAa",
  "key13": "fwrkMtbFszN8DBCq5oqcd7dYRaCAWsimgF4zyipYhbUZ5sFNwqgNNyttY9nwGn9eE81geG54jCF74yRvTDsviAH",
  "key14": "5s9s5o2i3KqApNwNzkghrWFPmtudM8NSn6ZPtmCKCmkUuqMwjUXm8aB7NchsE2Mr2mNvNKKLgKnG4kyb83dTXrCa",
  "key15": "4dKK91bD7ERaGDM5rM3byUAYxRXRYFUqEAB91cksoFZcKUoT1Kf8oocSNSWp4KtyeA3i7AvdsTSg1yAmNr8VVKKL",
  "key16": "4PMdaKo92NC4zzJK8EFaxUjY2gf9SaQftwSdgaPdbut4gSm7EG7PgLYxZtBsp5iLJqnKxiainSDTA8ZFJR56m8sa",
  "key17": "3hEac7xJk6f41qaee7afTkK9JdqaEFUPGHDBEMaSEq5dMJxrYuAB9URmR7aWrK1vNEvrfaiCAz5jqWjzvTDsnhwT",
  "key18": "5TNGHEY5ZvWhDeDgJfEVpXETtUmRxrCRXiD7mXLUrWdK6fkkWfLhVeLMGfDpMHtV2P2j6FSJp7RipJVjDTb9NuPK",
  "key19": "4m3QXn8gafhk1hedLSgyFbnJCawHbGEUZ6Kw4GnyYQaHDcQdN7YSpFmjY14vPe2w1AQAi44D6cR3NrDXYPUbUN1s",
  "key20": "5oExN2poQNZGy36wbqjh8JsjUhJPUVh5J7T5LEqGSAnU8nKnxpLfSMovD6S16DgchGfgrafZRcJ6z3QHkXhB8FWi",
  "key21": "4EYkMy2hgDVjDXVzHJ29wwP6cprBvkhUvEbM6GA2ohazVEHkTj3ebQFm287JDBt7UQKG6THKwzrYoLfTQmPHQCEd",
  "key22": "4G4VXXPed4au88Qu4YxV5QgxQiy5ZrkWFF7qSFs3XfHvkLaemMiu5qGk1ioet5zJZJHub364RbcBngHr92P8iN2G",
  "key23": "2ejV2LZAYbR4iyaPUR933Fiixk7MBUmmpK2n1cChwWoNKrNATYocJYETe8sMWC7nF3SdCt7BGeKreDuKVp6KHp7H",
  "key24": "38JcspvCis4AzUJMWcQFqoYdS6vySP1bfAiHdCTizNXuB1aB3iKpf1jAuVbyihoZPpoisGpvNBmV8PputLG7vJt4"
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
