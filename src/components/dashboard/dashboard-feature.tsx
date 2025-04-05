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
    "5AFRrMYpsdZtTbB76PSwRU7EP1APLLxuSywav4QzpTfTQ9LZB3tLfgJ4KabKGsW1mUpt9U6iXhbyYuQ8VuD1wAQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LwASKc3Tg8N24YbvcWK9MQYbdHxf5JMfURB2S4eJxNpcWzdJVBb9YvCQJtmkMHw3ntj5QnqF9DqfXao7huCDKGz",
  "key1": "3eB9wPn47e6YdVtFVUfyw2UKdH9qJCTwV2zJfw3T24L6duvsuGE6HgQNw94XUSrQuFbTfh8CYe5tLYWxqGT19BxK",
  "key2": "Ut18k21rvAybEoasHpxgqF85uuytjMKe6mpy5CiYtHsYU2b7b9Hr85RK6rFTnW5UYFuKZkG5Xa6hEGdD61gXcLv",
  "key3": "5svEm79pdzicYTcydbXGio31av48xKVGRub7dd8FrxVqf94Fg6Kdc9ScYPFSLgCTDMW83GSnAynyRiTiSgJ7xzvy",
  "key4": "61ft33ho7Juj7v8fLFSPVA2dG18Jv9A5ca3yDDzeY6b4HbxyyEnwDxzUvjkLrAMTNPd3X48sWZhGsM6PLvPKDRaW",
  "key5": "ejM5sG23UbkmjhLgZ8iYHrPxvMx4u7qkxwrCGr575KWX5fsMAE7b73QcfjqBpiWXjS6HAFq1TTBUwnVaFezC8ex",
  "key6": "22tDSrUFMfCJCsaWdUk2Gt8epaFmDgF6oJkkVjxUXFmMikwNTCMTjAWC6rgH7Q82zUQpoLuLiNAUvk4EHvH8bEuY",
  "key7": "j33FmH56Sohb4iQGm76HjTjTzRJ8uqGDVLwi7p8NhfLctbVsTD2GkCC4dEFyDoNPkUH8oQbqq2Eumc8dNybxzct",
  "key8": "3CHLbj5kMbydasHJA1bY6oVY7p7NqjCmHRY6TnhN8zjZypufsA4eZqynWSnbV7wDvDEHSqaZJS6r6rnZKBDgKngL",
  "key9": "4ymub97Bvt6BHzmZYU4zMuqn9ZTnRqkticAw9f1EFm6FZEjGAAR6kUX5hKmjgTuQUvMX1n2cVttAwKouB82ts7kP",
  "key10": "4LanGHnNX8BbhbnHqBJg4UpxTR5P4kyvtaf851QofKQLY1oUVEq1xQYKCjNh8S83LjqzV69MFQXaagH414enyLTQ",
  "key11": "2pSGAZ1etdVwA9qHvbxpx9JrqBL9goVSxvh5cYbaKuPWy4cizPp2p4z4Q6NQZ8PpLUNPotK3Mc7v5nDVYJiKY2FR",
  "key12": "enh3Mqq8WnwrrrdTqn2C3jMwPi4M14NTqd9MVU4GmjTHsimp1rQuhM75Mws8nucLrvcwRNaEVapcaRBK31UTsa7",
  "key13": "57nvL74hn3XVmjkTZ1g8PDEjHGq3gTav6Wdyb8hsmPekAHuQK59vWL3Yw8hznJgxgWVfw4UFPEHVx72EdL8XvTro",
  "key14": "4SMiq3VRs5Uvqro73u5KfaERpnGWxyftRNkoqHWktWn64BECbc9FL9eSSw6tJnXCHqpL2Jwq5QLnPhSCH2Z4QXaH",
  "key15": "5LjGDG4y5STxTVxYGZYNhfQGhD4RtAGPkFi19jc8wv83NZTkwxDBhtzufq3nPoxuywqNgzbdR2NEcKZWZgEvevCs",
  "key16": "62P8hLeh6NgrGw8MMSTzazbRwehTyBYhmjUqGhfAiJhykaRzxspv4GBJcmxJBzGbrQz7WzT3qSwpSesSF82NA1Yo",
  "key17": "4NZF1RJ7e9LdP2Tj1ebDd1yKbYnG36qSdvAZnvFNMbZFQaqGNiDyWqFk8TPZ9cMRDP1WdPwvzxxkcfPEcXwmHVvE",
  "key18": "3GmNCqD5VS2SVaLrcLYjAn4ozoyxaWZ2k5Lf2jLhqsW6hGbUr4AW621hHqNfJ7JF3ZqABHzx92SAekPidRXnP3Jz",
  "key19": "w4wJLmYfEDj6NJGogrQBkgWeAuqdNwVkoegctMm1zjfbbiso5RtzQsnJJ1qENWsNDCRqa9wFopWMxrcvvBzg8Ef",
  "key20": "3tM6WQvvKEj4N3qSiT7Rd2dW1zeV9HLoeZ7qXTAYXLDr1oGVoEeWfftMNGw7aipKy4haELw7pCSybAwcePACNoTV",
  "key21": "4nh9qsVRJnJZ7AdPJkaE8m94UbHXrHHx6kXBnXNZGNFL11dpgo24HXe4YaT7C65Nyvg1tscHzuUArzAaXRUJjKpy",
  "key22": "66v4hyYXo6cEXtJPN94YnxqTZ1AVLgV9MD3jvkbTCRaLTVkqWzgKVubNubEWKApJ1MCF2YDqbQ4xEZMpXDnNYnRM",
  "key23": "3uLNkAPskLBT5k1d2XuV9vGVcgps1DawJdXr9DBefSCFyCr7j66moDwL1PxveAGEfkUhHtvtBWkYasHPaPd95QiY",
  "key24": "5zAbcPFPRVbowLex2VdTz8FrXoa3LYa1iMk5cx7cVGu3G91GmrWwNiiCY3QZpPYcY6JioJCBhbGwT5wfdEcXKN6n",
  "key25": "5Aok6CMcmbbLwbzhBJZBWLuUSeuiLMd6FE31ovScd4iqRKJYsHWfP5mcvrxymanZ4stnj2TEjCTtrsH8n93UMqqx",
  "key26": "4yM1YYZ2qAa7eyBs39xRJ6iPZJbJnVBY3maXKrrioqghcXN7NoKjPD2ma73JKXh299YfY9uJSe5g4HxCo3upHLbo",
  "key27": "5c7G5JhAxa8cWH7tnuUCTFwnaPowFX4ca8dTB8xuAesnxjPksjv6aSVwKvWuFfXgG716uMkYw6BBsxDh4FU3bYCs",
  "key28": "5dZYt1zAMLBMLSMoQxp13bpcvGJbYUaHaB99e1iwbz7jTVeQQ3KNeVVfE43APcUiRWsp8hb5N4EiSukeECX9Yn7w",
  "key29": "2JGPNCzKYTJMbJQhN8fAmkK314NH1vHBnGf3UUR34AUutMbu1ASyc1v13EX37bdZ267Ef7Zz57u4y4Y8dcEwd26h",
  "key30": "2zYfSbukM5PXuisAfzZASAnWvSJeG2sMdSNJNQtJjsQwzGwT9zijUPCDof7kcMs9nzEn3jWCcgspnkRG1TwpzkT6",
  "key31": "4az4xQXvRXw4WD5gY3fosCUvCrrchDkRJiGY4cBckSfPEhmiECpovEbDaP4DsB5DtfzcU7VAr7uXCvapz7a7VAK2",
  "key32": "M978iB7dgj3KeTMf8wZat3EALbs9pgNU9WBtDKC1nBhDVvab4Cuperu1LtuB9jZBEBiiDFX3qws3gSDbmfsQV2d",
  "key33": "2VjMG21pkaQoVAgsvka8MxGXtio2znJjb2hnbFE2rY38NoUKUmZMgoiV5MHBF8yKYEYty3edyFLFbCzFqcbjgV5E",
  "key34": "2mCfZhQuvaRp8hWfZPD3ougG8KjdN1NqR1wZEstETJDyndexXMRDFJPakKWXXhPRYiRHAZbRrpUKkKYebcND4wd5",
  "key35": "7KKkA7vENB9Jo6JySRboPapfGdyQStSkdESSpAhsgo36S2DvzPY51y8aTDLjnMPYZ9RUmqS9AaQkqF65RWTsXi2",
  "key36": "pf4KHEpfLaRZQPbnaFWnk3KdSnNDRaMSR1XshDERuyKwnUhgFpe2nzCK6ntB2aQqNQiJ8MdUcf4ADQRA5uEZajv",
  "key37": "5hZMwrNV5NMnWxTXUDKB6g9WMjwyoWHDPveF1BXudKt9hvMAUcp7Tx9FpegJvPK99ajTy2CLyWVh2gyn4WHV4J7d",
  "key38": "5hQ8mhhTJdh2EfgkCaMU74fcYTtUNxrfawq8Rodabf6v74H2zXvMU5o7d7DJQyuEAH56ef9jB8i1W6jkJ7EwDM68",
  "key39": "ZAGnRRuuk7EMJUMeeiQWkeWmGdoRpY7AeWe7nEkESEPdqKnx952htGhzX6agPHG7FUPMzBGqtnXXZdwrTSBAWHi",
  "key40": "38Mrtczn8eYzDrjEB3j6t7nbiXYBULFDB7NtDMrZRD5HuErMB19rwikCjn8dceuJ2YcYtumGzqejcRRHKRDSUeHT",
  "key41": "46wNQXemBMWqXHD1oknyAm7X2ndcTi695a8FYGU4tB7u3C6yBR11WiSbYg2zx7EJxwdf51WxSKZ8cJdgWgR9sdd9",
  "key42": "gQLemgPsospgsjZwG3wAkTJ9dXoZKQa4ebAq8oUvmAsS9rh2Tyr5SXwBE92CrDP6EaS1n9nzP4dKyCyABwMnsRd",
  "key43": "2V4oGhsYqJUQWssFjVb9GajbUHvWkTaQFmcJVE6uW6DCbmPJfniFhhcYRz6AAmaQ8HZ2t5LoQNWmVBv8LMoBHDUA",
  "key44": "5jfvaQC1URTE53ZktQdoF9MowemuY2iKYM9aPCuu4RfbkCGVUqFecrgvMYokTK1C3Cv9YeTM7gGE9n89B6iTLJuz",
  "key45": "2qTww16n7AJ2C9xDQyMQzhTKFL53Fe4uykE53vjmc3x5ZHf8cZztZTBnkCmJMqoMg43vAuVj96espPTVvWcWZ5GL",
  "key46": "GBzMiyysdVisj3UXySfjWRiLrUFevLZ59dige6GiUbknxiatYXvV3zDQ3oii7tCh3LfL24Cpt6jt1G3kmFBKKEe",
  "key47": "2JrGr58aTyRMJ18rULqBmTc1br9VYoEPP3kmpbPpbECxfX9DJPR6fK52A5Vc2VPyy1uvqXgRMy9BWFtqsKoXDaqm",
  "key48": "5uDmRHdVi7CWQNt6gWC2XW8iR2mbpGSspmYqHJSqmzqyjkGFppQtdZhPvq7bYBZQ7PWivGdfRqFyW533u62wWT94"
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
