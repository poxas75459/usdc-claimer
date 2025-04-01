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
    "3guureJn2P5nX3dfosgegUjsTFREJTjdNuLvnKp9qLhJ8fkBx7ZaH7Uwyn4PCnA8m9sRmQLLgvbAqjCK3KmntcQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n6cmdF519wXRnc2Sp83qXhdNp8CCCpehhqQSdRhvQyVXFYVgcWP6mqqmq55ZvqDij4TWitZinVwkJBxYJo1Rk7f",
  "key1": "BS8YNoJUEFbVVLRc5LpPkqzG2CswZy7QeF7d6hjuUigwQidmV2YyAoa1ZK5adKTkGRHDwiwHYRF7WpQBUQSEwW2",
  "key2": "2wm2gA9pakU7eqqdG7XwA3bPEKxcHMvWv49144MvqGzf74aMgEwvdewtctEDs8YvbjJ7mNbTRmjpjLQpZPeYvhsx",
  "key3": "VMqWd9Kb8HWvrBXoVYyusoWXkkzrT2Ri4VT1WExgC8h3D633aL1gjR59ntsR3saUWw7qwKvLDo5CzyytWo1TWha",
  "key4": "4gphb45sNGVYWVqSE71aE3E3hPXDLN1aYUdhDzSN8R9Ube3RrfDtKoZbHJZmgvtaNGVp2GZ6sYqhaoiedTsW39ZY",
  "key5": "4E7UcmffZc6iftbBpNnT3zAd2a8mQGfzXyiM8X7zDrsVccFsDrzxw84aZwnvdPx46yhEftuG9B8jrQjnSFc1oYuG",
  "key6": "2Ubf8R9vHd1x18ritRCbSU9ezp2gAZN2DXSbHrJKcmnAKrnDoJVyDxXbiLeJMSKYLpwY31nPMxUp55TDSCZZdR14",
  "key7": "2FAS1URSunLQ6Y6NfK3efU8h97rajLAcYDQRNDKfgJXFMGwx92jXxeRvh25VLHfqTmSTnvXSaN5EiX6Gy1CjwNHg",
  "key8": "35Q3Lxpd8oLsK3EsaJzPJ4sNPQThJn7qyzUEzbzsF8J4EENrDXq9Ckq6CLqWGWVPTHYn7gyQLtRQvuGhuUMcua2T",
  "key9": "53pUmPYsCDEJyszWps1w8dgxRUZEx4mLy2YdZwBBAEZn1cz3Fn6xV7hgpH3nPVj2J5yS2hhmnKvRUELP4nbKaLdV",
  "key10": "2VUqnQzRP91GHY1fgnLgb63gBqN4Qm5g3CySfonis5jcTqBcfREPjXpwzWLnP7E5GMFZZrbtUp1AEcMxLHgYuxrj",
  "key11": "2nM8Tig5ykNzpUGhw6wmd31yCEPUn6FpL1kkyqJCDjaZApRHLGLWjuCMdoA6TdjmyoUHpVVX63ST8vxRJZGQs88Q",
  "key12": "DY7P5JxDwA7JEbRv9RtJUi7vS3eknTVqpFcdxsnXemv89jVeG2RPMmB9ZhxPGyqrVtmSng4dgUc31KJ3kwsDzR6",
  "key13": "5gWKFw6MqzBJtW65quit47mFFxPCLSaa27qA4YNtv31fcoNBU41tBxAi8Ez4QBeuXzS5wYf11o9QKX4oo1ckxAxV",
  "key14": "5vb9hYcQ2UX5ipcTsJQKDHqHLZwdmrDkPMfzZA2hnDczZGanbeWcE7YhXzSb7F8qHNRuSX7drEqMXCFS6EBkk6de",
  "key15": "26rSjc6z4qgUdjYeh52cmTMX1C7FuZRE7bV9bSTQUd3rR82E3sAwbGxuvr8EzaHRi6NzZfvPyVcftfDrKLJSLuT4",
  "key16": "4GS1nw1vkPC7HvBG3QVqErq5K5pAdnjB6MdLV2dAds1NWKY13aUjgwiKpN6Gkg6f2mDbU71m9GjEP17EEV4rJePg",
  "key17": "4JnYeVzFPZVgLsyeWEQoCYUd8Q64HrcUp8gXKs38YxH7YgiaUuV6jjW261Le8LhFssS1HK8Z5psFXyAstmibqNGa",
  "key18": "2cgQ3CNucM5nvqrTjqAypifxTFt2ynaB8PLAue2NRQJxyEFH88YyTP93uYiUgQmwA4XSSjVpgb74S3gYDjeMMe1N",
  "key19": "2mJP7JN7rxFDvQp6X7S7Q5JFEZEXjZKB7m8GEMA5d4NAyKzaXEh8SbjNTuD4DBvPRNLuAmFLi1wSa1ESwDrxYYQG",
  "key20": "4y5wN9U6Gqa7iSfcWfLWR2n5dft5V8u2mhFoNt5iKPD2wFFNgoAjzTmd35WS8zQuKwffa1LV8nN6xBuxewkrmKZW",
  "key21": "3vyndnEXuN7Xu3Ngh8X2KWSt9Q9iUuEyso9GSG7AewFvCkG127WPDaCoJ5WJBjiGT61UfmZfmwLwwpydjAAzU7Yc",
  "key22": "AXdkxWqkjkz1oZ8cz963q93yp79ZsGdTkc99aFvzSiidjP8kiGpjaA1Dk4T8AACZTvAssovrbV1sina7uhNGQHB",
  "key23": "2dfQhAgds2WSfdM4HaWeucYtpvTZHBxeWyguPMppqWB73BEaxH4pSj1Zca7Cv3kUdJ1g47XbwUJxC6SRaRuQ8oeu",
  "key24": "2jUevmxXQKSybAtFbeUeUYjhKcfaHrZRmqc7x1nracjsjvunorF5UUTyUHGYgM9FL2YGxW16Zs9v8hGqtTpRi2Hb",
  "key25": "3U41g6oZyZU4QeQJoxFjxvBhC8GqY2Foj3R7U7PNeGrbhqfPDbHwoUDc1dEjD3DtNWAArtceTNki29N26f9sYLK2",
  "key26": "4YR52ptq9S579kbC5rQ9ioD9TcTYUvDZbqX8nmfyXbE81YQQF2uGZM1GT4hhS2JtRjjum9Tq11UcpxJmCLSTMQjS",
  "key27": "5zn4QViZMZWVWStkJudWBJowpKf7aq7QC3sRMY88JYcyFE4bG4YAiaKprKSZKfESEpWyeaV4F49VN6uHqRRzkXPs",
  "key28": "5H82Ea8HBRXZRkHd5kk9mb6XFa5dDZoQCTjshTygZh3U6Q9zAFk7meo6HPHQCdhGo7Yt24bQm7h41KoQj6XagzYm",
  "key29": "3B4J3SojdV3wtx8sRSwLngaPvPwijJ94EZWLdcseXm4VRm8TZR2ZdtkLuWtK1eawTHeRpPCffGTUR4WsgAS8DBLb",
  "key30": "2zxy9hQvKSVC46U6C6RRp99kNH32CxSnCg1VL7dG9hCLaL8oEYfvPFEWJQinKv81QMTHQehPKNiSd7PqghMEZtVU",
  "key31": "3T2dsoJ7aN6QfzABL4TArtEuSyiHs3cdwGZkt31skyRisNaGxoiBMdNrrqhX8FzuYiGd4kA5hJnEe2KY6XZjwKWr",
  "key32": "29RGBpjPboBkZu3aUSvM8wgYWEZkLa51wXn52YWehzBKL6dSNw9sE4HensQZX3MsGsD2nuy3jBvu8cvLamue66i2",
  "key33": "5as9NXtD6KGQub7g4yvQbrBCACR2yq7paJwah39gBXpHd8K7XpqKgfAuY3g3W7bD55hY5LPUxfqBk3RBVB51LhsE",
  "key34": "NL4pDodXM6PyNNgugdrVjqFf4Hz5qhnNnKLt6aND6YSUjQ1rwU66PrMAMTd1bkmruaC9kHYe5VTjJ8VkftPFn3N",
  "key35": "2CKhEPBGdtd7dCCvxWVVjiwxYWEGfTETkCHGatH3x2WVReYV8JzFQLZH25HKeou5qRvg84wi2QYXV9QrrhmYixxb"
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
