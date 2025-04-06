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
    "2AwH6Br6bfHCmWm9GYHrPB3GVavMkg2YRhWncDUZNZpi9a59a6Zb1nXy8AM31XgQu6dKfYKAcyF1z9zUQjjCpewz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FJpZni99aB1gPya66KRJvXpRMnhjpbKJyGBUbTyiKhFJb1vkySWXaWY3XBDxfn6MjDuQ6oE7ULnWWMCHbmH7wwY",
  "key1": "2MRpW39Z9PwKAqbavwMxPVbkzNUuyttaeVLJAdCD6S91Vk9PsyCdeo1FXTPb1A9DiAP3iMsRhisyk9kjkRyMzmw",
  "key2": "2so9EDbc8SVdnJcDNh7wqbAHuuWQiWgN6Ui6CM9AZXqevKdoawyh1RSk7PTuyixMhMNZfnQxqi9K7MfrUSdyC5qe",
  "key3": "LaUYewqo9KeYYxt7RNDpEVYG3UEKLEDTuTXux8EZAA1vMEHc4kMruvURxhHrSYz1yNUX4rVM8FW7AaGXPotE5ry",
  "key4": "429gTwk9vqj7YyTfExmAoXJLoGXKfyi8RbRxnFmFzfGenJwkTfvqbwRNZRn7eZF1yQErGPHsW9svdaxCU9SzepxH",
  "key5": "dAxTts2P9rgsqSRud8S8LHE2sgrSA16CVVrJAFJc71m7Wb3A6RzHyURhkig6cQV7C8HhGPe7BkCpiyjAp4LhCZ9",
  "key6": "5Z1YuW4WvVkCc7AYG8Vj18SdiZUHmFygx3LSdGqMJ33AYUHpn1x7g48RhYXp9aFUoAwU67K6cVsSfrkn8Y7JwweX",
  "key7": "5XKvgADzQ11LD6iezLcFFB82zzidEqLr5qXr2GK9uqArQaRbzW79uPT2LQ8xnouCe8PdKE1LiCX7g6FgCvDXyAhF",
  "key8": "5RFyWR7z2w2pdfeSEyGHPY8YN4dDfwfP6vg84JjXpVnqKRzQMgfcPXtg1fu7vqGhgzrrUvRZh3wAVPnsyqyn39aa",
  "key9": "ERQrD5uWyUZLQETqniybtewmWwS3YEdVCnxkJFGJeegc8opqeN4m9b5VHMt2YBuZkr6WKBu3YUBUebY3yad8nTa",
  "key10": "2EyhU34RnNfocmhRxopSDqbvX3GpEsHrH3PgjAmeUy8JURdUD7BYefjJBoC89E1eL3hs2gT1reLvxCQHf9HQd6Ds",
  "key11": "5J9BM6gSQ42jU6P561kkg61MSmqaUqrjNgqYB9sQ8uSPA4VQPJ7kNJMoxhdSTarwsAs5NTBRNiqtxTi5Z4ckKPzH",
  "key12": "5Vh9nSirFcMA3YAQUVHqtqKv1sz3ydZUh5KFKXbj97tRCsGbVuMeera8CTMsV8djnHrffLjxfNxma376BLn3ePGE",
  "key13": "4XGZoSitBwvMg2pLCJyfFz8oHDGrfKUifHkLstWj9DznF7jRG4gV7xbZS5kNSncA95swUmdLj86SzPWhG7ZP5YNG",
  "key14": "3aapXyi8V3qF3LMCqZWrBVqmFDJgB4kTMGHmFrmms9rndp6bNr1L7BtLVUnUXqB2agut5mQNfREDBRhvxNJLpfgg",
  "key15": "QK2XhoGNTwNeswNSHm55AQdxAFuLBGtruLThu2jdH7p1M13aGEbp1wW78NQwkDpYZhKonFVf7HevCsUD7Hpi7eK",
  "key16": "4ZagL42ypoWjFuRrZfpYcD8s2KCgLYzixEWSqUtn474JieN2aUMwoX4H3dfTVXeZPQgoEF8WXPpgKYtkFXpgZFYp",
  "key17": "4MsDiDR54ZTd6yEyNzN9FjrUTVyNLPSJmbndb5E7MWN6P6niy48XZcUAkssQ1tU5Akq7ap7V2QK2NPnXRcUnJuax",
  "key18": "2tedRw3wkTFbZ79yab99fPt1GYvFWp3BADsbTCwpLgisD6BAxzyJ9KRXAvXysS3VmtwcW1hwAZXzHn6137GJtoRv",
  "key19": "3zYuS1dHRkivy3ktL4zzinpWcPL9NWSz7YLnoyc84xottzUjcaGp8xATTUsCmNFiCYaDBHLXiDQUhBk6pfRLm3bB",
  "key20": "2MiVi7ut9fhfXcwzXa9QBdsRvf1WzKND6xASouhxrAWGeh5iuFrVsf4YREzshPx3VbTgtu6YYo1Cpfx8D2Y3K7VP",
  "key21": "3CGUfnCJv3JJzkycs3w1bSokx9ybU5cknZsAaJDXoxSMr5CXgtLdJfYtQNNwKVrEYDw7qwmSDkHB4NaX3G8ZXY3s",
  "key22": "4ZcnwuGskmSd3vwmhzC9mqSmhZKTDHYBCrHL9DdaZPRNFV5Te2Zj24qfCGh6MstANYwjWt5JnuTt3v2ugf1UAu5E",
  "key23": "2jCu9n2YpFiimMWS6McumWucLDKm5noPNzSQq4HTvuZYgJoPRNzdXUteZGsdmfFM6ukxuqTTG3AtbaeHZjJ8w1AN",
  "key24": "5UBbEt5ZrL9pSkWiKtujseQunLxfKeN6xgefyQgB2zEYTSkYaxoa5qa9f3KPGwkitpY8myYcExi69wXgdwJjVems",
  "key25": "1SP4UQ2SSG22JfTdceLyik7Q4uWq1zu5YzTME5DdbafNGKEZTec6dACkMdf5RNMHsW3yM4epJDyXDdCFhxv7CTq",
  "key26": "XhMNhifWhTn49GPdfASLgAzg1FKPeW9MGgu9BZYfdfdaLDnUgNYKzV2CXiJBV4YgMg4MwViRD6ARwDC2Ng5yYPZ",
  "key27": "t5rAbMVm4JXEXXxBgFWoEMw98pCNfnHyDWXKpLW7J79QtVQaRFdY1sXgYG5WKFtFezvYRqAG4rdWJaBVmBz8Sk9",
  "key28": "4qVHQQ86ByB4Bd341JADShKqKd3dv6cHuPJth4PNdrWy5kpZRrBLkLkfhP11aJxt9PdHKyX2inrZQCdgBQLCn8Y7",
  "key29": "3tRNtcx53JkcRBrdsg91ALuaxLKi2X6meCmcjgYS9uN7xQdxfhAM6jcsqxawY68rXFygV89ropw38GjZrG5YmMJA",
  "key30": "2xav7oc29B7iihAnH11J2snvpJ9uih7mxqXMWtfN6Qh1wXfe4QRBkmotFfQrkd2AUcddGEMQD4DuNYyLU6DNgp3f",
  "key31": "3bEJFmPwjrYWgj5XAjCSa4fFFVL1vuouRtFCRYgRqFaU96FLcBJkE14aRSJsFmQHQsPb4bnTz1HTM5F7CmcuGSDB",
  "key32": "3jnGy8qJuNLHRjeeCFJwDzSdNJKQR5DY8g54d9ZprsqucLqZPy4F1oGXn2Zrq9zHPdeK8xLx3nhAGSBpYabqyU1Q",
  "key33": "4d3u73RhxmAKZg1xyCcp6DsXdt8AmWU8U4K65Yiu6pUhL3LvzcCtEx8c5c9UBtjX79F4LXCKQ8GjBPvwLxN1ZGMg",
  "key34": "5E7bGrY4x6RLB3CBFkTcVmMv1gvDRUEEFXrTG7pu5LnvN5C5JD5c8fhRT5K1dwU2nGEa2K22P331Xdj6PWcHAmsD",
  "key35": "5HPJfdmow1YVKpj1toVvEpWQLRK9r9oMA3SJipkt6K2hPUvJDaMenW87xvLGFx8SMXKgeovT7j9sum6pyPCsS8b2",
  "key36": "3yPVjDLnjhiB5qB6qxACqW9SEkdVSZR9omYdARBknzVqJhECQbxG8s11oyCwuGw1ZZUh7suUdB75Exsf6dkSQCjj"
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
