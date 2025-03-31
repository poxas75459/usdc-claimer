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
    "qWmTEkcZo6KxT2XNxiCAc6X9EdH1zWsW2buaRvm8ND6uKW5iPixuXBxpYwCoJR2WhtPMpdBdWP3MvsZ4qjBodSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ftXp7Yqr3t1zFbvLAvUCrQrKb3Ehj5QPF9XW3W4dfaV17bxnKfLgYopBXi9zQdVJuj1LuAX36e6bHYZQZAzErRk",
  "key1": "2Cci8j23rnkUffX4kVVWDui1VZGXYGkfE8DXAWuFhNZnr1iZcPJGPTz5H2yBJwdtxLUJ1ELq5Dgtdzmw3uDQuyD2",
  "key2": "56duMsaRxkBKeQQzAGTM8DHeMFjhQoyB4YHNK18DkqohoxCKksZznAtko3iNc1sGmQE3qX51yBAZfyjsGT1AehZn",
  "key3": "4CFiVxPNAi394db1ojH4ZT42ex1zNaEV6jdiFHEE9ZMKfnUPEjP1aGYeXqF9i1mcPTVopVrRV3iajiUWaALALfoF",
  "key4": "5RUUFGcBUNVVTisjNQajMRaFm5nsJWnbH4CjnRoGQvooUmePiLCV1899FfvZMRtfoD2AURyaM2zqJaZX6WLW7uS9",
  "key5": "4xg9hew9trk2XLAyh5VkJsC7ekmchqHgNBfSLPewig8EswQk7FcbmWkUjqDMXmkokc7x26mz2PvHAXBTTvgRiTvK",
  "key6": "4iMi9TRJN1JyEogwPWJGErf9pc8SZwNWGMD4ELnW6bTeKzAE2vajBs5NR5STnH1ah3meXJNzztLMm14AeDt6E6qL",
  "key7": "5D7RFfxy8izDB5UQigtB6X4LYbs9DYqkAFSHczoGMcm9rUUxR2pqzzu2eLNRNxzWbCoWZKes1rCJHAcxdcVrmDp1",
  "key8": "3g4YwddAaunnxiH5dBT6UqDnMVSHW9DM41sfw9LZZ639swQCyAmqEeui8xhh7jvpxyBaqQb21qEdKgf9vbH6EEPt",
  "key9": "2KsZi4Xq2TW4iTZXoH79wH2R3aAPi1kZhtfbMiWJUUpnr6WvTya6tu97cjGukSZhjAZ4MBzKDkNRGnPwdHsZ3oGc",
  "key10": "5p8PpXBfyLZnsGhiqTNNStzN8guc1U94rGiHQ1hW8V4hDgbkExKnLRTyvqmqKfbRFoeRLGG1tiT6vVUUMcMyz4DK",
  "key11": "HwVF847saZQKoeVrkLHrBWNtAXE41Un7kYDvPPC8fUJeyrZq2Bx9LwDoBFZtZXQJwJggcKTvywGMUMGoTS7vrQB",
  "key12": "SyyhXtTtN2JgR6bh8KdrdaMTkmSmeikKd5tkn5Jr3PPvFdBpjff8z6Z9vTVTWYZaMW86qezQc2nuyw1zZ4sepsP",
  "key13": "3EPAoWNhQEGtwTDrpvoe8ZEjapRdKzn1g8taw6iBz1YNeQP28ntmBTJGxBkKzGwLKfXGhUNyaqWMv3uPJvJ1Se2",
  "key14": "2Fd1Xa5ckKxL8sx3rJh1uiFMaRKUxoRvxnhCuT3ZG9JBnQShjxef4DKtSRobniwwYHdnhAhpH4XfZxVY9Mc3jats",
  "key15": "5cjKNnbRX8jKTgVH7AfKcRizxfEshWztntbcqnmUEHaT2KDJe9xzD7KZVxTirScjWNAbN7P6yTNucmHvrMYBkZrc",
  "key16": "33GUSbc6gAN9LingVyXTcc5rpKtLFmS6RU1Md8fo3LJfTGe89Qf1oWHeJAJe4D7fk4BhQzZXmN41Apg6gj1AMWLS",
  "key17": "5bTdyDJwGfupZmnhSKgh9msGYVd9WVcB71UZDZB2cb8XDuFtUya49MdkXtZ1xL4bU7ywFLxFt2gCF3vsSQoBvR99",
  "key18": "2euj8e3YJvC5aEU5pUoyjHSsks9Xwv28o5nUbi1p8mJPzYQBFejmyYqfSXpztaYxknWqg1tZX2AimX5CnQEt31hp",
  "key19": "2HV1PCMSdRecRptt5JeF2SiuzhTjvR8Yxwotp5aBEgRiFNrFP3BnZJ93mdZgGsPvS4nskrXi4P4QPyrwbLyXDPVU",
  "key20": "2Ad1otQmHCidT7HsCHQdDWPfnjHBUkA4HFmFnUUN4XWTCTNAZRGXdUY7ECN3xFDMKo88NZWGvSUpU5wjp3nNizzV",
  "key21": "2CPovfQVb2pjNeUvHxfHj49ENemEzTKunMwMkGLWnEhzYKW2WKGQC9EwdDGV8rsVqpcbm54yAQmJnBJpgSEjWWzQ",
  "key22": "4eoySkQMTDtPp9H5acHoDxMzzzbf9M49MdKVyEjkVvSRjkN8XZD5CBZUr1xdMjjJ1YERSBNt2Xqo11HtmAKHUcTQ",
  "key23": "6mU7H1uCaqq7iveCowuPuR5ie8emV7jFEgbSv7o2Vr8ZnWTrmQ2nbNoYzCk3rfrX9HrQTbL3JH8FijYbHT2Sbcw",
  "key24": "5Wn66H11W3PvGp18gFDriHskMsmzCNK8zZ3tw2JcuWJKJkZ8aGbQ59xfvP3qvUAPrmyRRAbbQd3UbMtUuH1gDjHY",
  "key25": "3n5k435zDiNev1YazoJ9x72gTDB2Gb6BCS3EFTjsCixg8EQs95cQPC2CqJQpjE3a3soAJNE4G4MU88cjmah368UZ",
  "key26": "4kgysgdGtk6qp6Sm1f83EXRCfWpEuJpwYAKx2kk7nZuPkF49X3CKet6CPmZabUQsA3wdeeHkw7RjkjjyRRAo1Zib",
  "key27": "2W9WVpwzzA2GUAVifGCmiSDphTy7w4VKfCtmqcST8pvqfQGARd2ecEYHouYfbhsSriUGp9FZuCUYGGLhhgT9nN2Z",
  "key28": "4DEo3dwqUhGDpaS1y2qhZAQbZxGrXCxdPtoJyySt497UeqZpBofbcNYw8foTQbMVy2fA9n9yrCwaaoF3CUohS6ZD",
  "key29": "597CZV3PLQ3SgPVdTTwTcgmYg1hp6ZXfJRRyonBKZy8M59bSWHwFhtQuTkFqC3GzzEsSqXxxppU2zBYtTnJZxdnY",
  "key30": "27TMEesTXNooa8WVCf52VpedXBTCZHgkmsN9tDBgf8quYhiQV2mXxXKCcniib9bZFkKefba9BH7QiRFmxy112GkM"
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
