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
    "5MwGpR6PXJnjGd1iTxuYSjWTMBnkSG8nZWmsAUcKR2NdUhB5hfZjPV6BspfhhGgfb9RLKcEhNCnsUWC3BzAcp45d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UP5r6aBKg3TV3Lg3TtuSjp7KQCRE5kcCmqgUFLV6LKS1JAZAMVd6ttpRS51cvCyP11Nv7Ma48xDfqcPXqPMpQhB",
  "key1": "4BxgDGBeA47S8ZzoWhHTvpLvJ3xRtgFDUQn93TQvczTXG7U1vMCLD8bdf3vPrkeXBYgQDD8yDdbv5eksXwke8uKB",
  "key2": "Gg22QaaAvsZJkWzWMuXqJdbBbpjCmhn3SnRDXEf47kkijXE823cNoPsMewiZKHjgHkTnxJZqrWjLEeVaZkBUXSt",
  "key3": "4rTBqy18kZHTosL3gsNhqfxs3pXA9YuvXHB3MrzUmfqCMFW4RHaS4CB67EnsztV8bNm8Y1u82vfMcbFknUMZ8PEt",
  "key4": "3XbgztyTpw8wLqW1MGw4xjzkVSXNumLVmHc7RbYiTFSB6NQ94GWXcpVkmpJ5DdnRFpKLMgw3iJfR4EdGkP34KKA2",
  "key5": "2jiJvEeVY14roaFQREHLknhMcT2VYvNyMBSmxnoeAgPy29VchyLAeBcd3wgD9cLa1brkexqWgiAvYACmwYvwv7vZ",
  "key6": "2aCFfiQPXDFbwMGBYFckiugreRXYigcqmqqBgGYYHi7VHEBby1gGjH5BSeFPRQGUsW5ibuzvawS1igVzZM8c18TT",
  "key7": "3BrfwpWjyc5mWqBm2kqTZiKyUsB1ZMKZASEo7Qga2aHDXPQN5SZo8jbt1aziN76MaTWVX4VkLWTozfSk5q7eGgXq",
  "key8": "3zc4MzcyfajE3wZ494YEYifs31YvDLhtuW4zVjtHvgNwTJPttYm7a7uXggzMyr4Hg7rMJY9M5SKoXQy3PWeCmyHS",
  "key9": "4W75zXmFSTf9rozxDV3CfxmwbFKh4ejiCwKG5KRL6JY4oaCgyRn2kWFNY5te84tjYDqv7wLpYdEY4TVEMYjUxo9j",
  "key10": "2dXBtqobjcDAQcmcxLLHTJhGTa8do2sUrafdyeewCHmpajbcz6dhw1ny3pRQiZ5hmZrwstfK55nTBNUo2JE2T5yw",
  "key11": "FttPjRty92eSS7XyhPCSoV2NYY92X1Qk45VJzGn9E3UNHSbURYKkUmxoADvQvHwu699KZe7szQhC6Vo8ehK24jR",
  "key12": "4Tbm7hk2RdWyhV1LxhAXWKH1qoz69nwu4FmFruESp3np3rv5L5aSJsjU1KaJkm9iSYCsyWb948T9GLtW5HLCZZ8",
  "key13": "345A3jV9c71mGjhGq9d6BMqeWySAFkao5kqum9yMyzwrpM9gZ91kfYoKC5porL5eyyXdpv63YqV989xAhVvadvFn",
  "key14": "4KL6WutG9AgFUE8Vd14XNnuBCpYqBBFf8xG2ZTtgXHgmfm2EtBBAJiYotikkC6z7y84AwFJsdv7BMCyh2A5riQyH",
  "key15": "TeNQsbemaRf4sH1b3zj5ctJHjCjBzXaWekpoVvi3mdD8iqPUj27B1Vk7iuXC9xhHTY2HQ959yu25igemoUmohM7",
  "key16": "45dhUT2mgRbNEPqnivFrfcFVDe8JPx91g3jbdxFYmh8C74tYPauYHVK6uYNPJRTi9SaxD8aiac76uTyntgkrWCso",
  "key17": "5rew5rTJsmhPyHxwAhtosrMz9J13Go6dbx4MG8ERnVKeMVnHujSf2Eu5gTaNjAewR6zt5d5i89qgfpcfv5uBX6Wt",
  "key18": "29dC7i6dMpCoE6YhR7W7LSYiLxVwqBoK8wiFi7vkdrnifGizvQVrYSBvcBkgXiZnHiePppE4sWtPnaXnpbXZA1pr",
  "key19": "5PNiXt5p3rj9QuzwQvFgryAmTo3TTVfzpDrpM2MizmKvmztbk7tApufiHikn2scaFfsdjxVpfqM4mrZwcCqxHVgb",
  "key20": "39JPzWFQTH4wHzzoaVRVfXFUUUiuzTVQcmcAGjdHFPRFn4AiPrpTwff3t9ZW5s8oj3Y877vaKihT4rQLSMf4WWBr",
  "key21": "5vUGSk742rzQzx1Rk1xeC8rE9Wo6sXBVJeEBgmoXZ6SBADf8Uok1d2AcuRZLA7feM9EXMX6Bhv9PAD5uu6VSGRPf",
  "key22": "4wfuRGc5WfBsJCeF7xEx1fTUr8Mmmo7zVtL5VJQFaceqCucqKginQ7Dwxw6Dxy1FQKViJRrZTxVkJ6v5sT1JhDfa",
  "key23": "o9T6t4ZzXxWNJasSCUi5XJivTRHG8HdJw2q9WVBTzK9trVnNy7JA7nEqQ6nc9cDEBArbo9bdq8C2thwGyjL5Kxe",
  "key24": "3GXJCzJZ9gwwbkBQWc2HeoKwatKDgh1TRSgcH7RN71VZT1SropBZficFXyC1fs3gTTEeUCff3fyM61n74CuMyB2C",
  "key25": "3yYmvEPKjw5teSp2WKK2pg17kk6eibdo4dc4ExNuBzh5BrGPsH8TBCFajezE1NEHiPbtBpzajghsjbuo2ENTjri4"
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
