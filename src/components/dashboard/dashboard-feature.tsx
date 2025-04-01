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
    "TECxMD48etnsXHJL6WQfxUwvod1LWfWd8joAmvnhgzbF8mqPxypgDpHnPYbx2heQo2EDtdVuCwCdwydmnnyun6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ke9Pz4BuUTzbNsRg31iJoAhwBeKGFPz8RtSS2cq6UFJvDdj4LEQ7AUFqG9oPqDXwWXecGYPBzAUsTiBadhDayx",
  "key1": "3G51DtdTeRQumhmgggCX6DXFP6i9esS55H5kU16FgN5fXvpkgrEUqLwepdjKrpq5xYmkmqj37dvnLPUVqhLAyZtB",
  "key2": "5ZFKk5juH5oXntbXmNH65EYcvYUhxJCYmmumFE4atgifdebZKGPWHcanEz22zKFMDWtzmbTwpraeXXkBkga62Rmv",
  "key3": "iUHLQmLhZPB9Qe7NWgwDMw3CpYKjpQjdsUUTfY7Y4NAERmDUKBgkg9dNmTc6MTrkj5wTwBfnXtNgr6dsH7igAQY",
  "key4": "2bRiMTLaZbmFADMmSyFtxpecPrxxJU7LqwBKGxKD3EkHsBps81kgX9u6ud2wXMwT6m4QCtYG2CFvQrnSZrPuZ7oR",
  "key5": "5hSNUoguCxpeMCAKPE2UKCEntANFGbr1gNHszZvLZPa1mYTsNstHR9grXtvBGfv2TgyGzgTgawg4MFmWfBi6wWDf",
  "key6": "iqWS1ZLL1xWmvvYhowvaDkBKP6MwJtzsE3xz7iU4qGQ3if6LTpMcEbe2i11R5fVaXWZ3k35SZGWZMN8m2Xt8FLJ",
  "key7": "3c98BbiFoMNd6LRgRXZWKdonYUTjFk58h2eiPajARphb56hnhsTMo3fDjrYHeX42zTbAKHx7kJDWuWtASLCA9Soe",
  "key8": "4MeDD9jkdVdvaoecjyHJcGo6f6e2xGGMx6FY6nheuBpVbwgnZ6HHp2nZQAKduq1TBdT5XzWqnNMBKUAsGnWhQ4J5",
  "key9": "31Dveu4nqfTRUyVcJxyJwu722iVYGRFdQ6pUF4agTG5ecNg39FBCHF4tmRGojzcYoQLiShf6aFyMgW3EqHvzzCNu",
  "key10": "2UsNcVdXFLCYYFvr69p6s47ogpT4bz6oDTRnQdSnxM1qN85ESVLWyt7yUu5mW9D8611FZNvzVyREDpCLQ1PwHuMx",
  "key11": "5s4vxEeWKMUaA2HoMpnH5tCW4gDDaeTDnckPrvGzKm5eJqQice4s86mNfJRiubGNjMQMnoQH3kzquuaSbyNS1A76",
  "key12": "PpZfunHnJYQde2tWbqgGnLNTXVPdhMB4ZScmBSd7fEryRcJTU9ZmSCzNKWu5snNVnLCdhw49eUQpyaNwjsUto4H",
  "key13": "ddRCB1orWbRFXFTtPQUpTgiewbpy1py9GzuwnrjMJpTDZTMbyLnfxoidvsDS6v6zPxFohBZFHXiEnt46BvWCmqo",
  "key14": "2rBuyx3yT1HApdp4hFctr6ae5W66WNRoTvesp3g7UVDZyJtAyAjytPnW2Y1MCR2dVDYFDwnv19GQwzxrBojBBLcH",
  "key15": "5oFKqSXj4Rb3YuMoPNBq1euQLbK8xFLvXPn9Gt36b63gTSekMJhA1muqDoM8y2RFZcEGbPTgpXWBf2WQ2brMAu4d",
  "key16": "APMnkF1SCoNCoUtVtfDF8x1PzFTCLHgc9GocjdaXw3g8tPHeizJ5ZpwEeb2CgJ6AbqKYAs4VaewuFxaJHAv725h",
  "key17": "39NJXVuBQwQKhbn3oeH3fQWk5uwtWBVREVcYhu5mBtG9KTNvSUUEJWqLP41UNz38pQa2yiMYhmmGQqSVhnGx6aXv",
  "key18": "3tQe2UbHVoAX4f3zAtshu9437X4DjhCKELgyRJBbTU6jRJaPBWhqHnk238P6F6LrhLzDsWUkMqdkJ5duDhAroJPJ",
  "key19": "3j5HHG6RFd1i5xxz9L7bZspN4qZ6t8dQaGVVaoY8RUN6egjesNvcxH5nUkxeNTRJCk3pQTJ1NVeSe4xYpJNoRL4r",
  "key20": "4FyZiHTi6h7KCQkRLVUk5raqAbP3QoFJCEqf9SUTjxcfLRi9NZace2XbXxDGmJAb4BdfaX2jkyQzBJovx3GcUBAv",
  "key21": "3Tk441ZRRgy6XcoKdfMYBq68ZYgPLHVJDpcHbK7z5HFLYxPRjiTWfPKKP2qjVwFtwsCBQxzhRELatZtwX7dKenbY",
  "key22": "2XFSTDszSSUmY5JvrSWHqUve3fdEYbbJLc7syXyYaj2ZnpyZVKVTxtHQD4vMTyQ1Jcs6VQPhUu8JAXgoFkXZqBs5",
  "key23": "RY7LFKyxK1tX7ZUHHWM4fsuRjXr6sCJrQAJVbTN5cicE2fGPTauRgZpmPTPiMrDmXqVLi8LTQoAiFudFBVdGeLG",
  "key24": "4A1SiyTGiEf5op4nXGtDbUrogmP5Uoy5nHiAzoLCSbkEbSFrKB796m8QtGE4MAzkagvB3BdEvQqdRaGgWCf5d2Ur",
  "key25": "2WLrh4wtnaH3ZsrbCUUZboLLEtzq4gCRVR5s8aisiEiphCvwZmZ4BLrymnyxrrbhRbabN26521p2dVwG1n5N1KYY",
  "key26": "3D71ATchMASDMmNymuvQ96rb1SepMY7qA7imr7NtSKm4k4WhFsXz1kSJLSmd8P6j8Kqr2xxv26bGZUQtbUuTZA7w",
  "key27": "fg9j3KcG3GDsBeVu2VWShc5fK2MmVZmYxxXoTPETcube5dMYpJwuu9KwWGp2FkUq9LNQaVv9ipSXh2akCSQFgR2",
  "key28": "5QEonWBAADGDH7SFt4jjrFn5we8aAoMLyFRrvTeAsXyTxaLw4XLsiPXdsr5TiXuHQW3wyMamgsRx1yBK1FuFzXdB"
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
