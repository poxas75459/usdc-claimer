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
    "4kG1wpnNVJ7NmMee2EM2bKGhXYFDfavde1nADT46j21LV7MaMSopW1NZDGGokw6PhBKPXWDhYDRYbJjEpdvsHmDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22DCrp7fGx366tSkdFQVvUxRS6QrBnCUceFFp5YTrj2kLH99LPQDCZSdAD52qmj1m9khVYhYFrmett8nXHCSEa3z",
  "key1": "5juWWc1qvoLMBxYiaxb9mdyiGTtnKjxVM5FWiPJ9hZJb6dLUhmmt2TSPWEt5oM177vxyWE1MmxDjKZkcTqc2mPDd",
  "key2": "27Z1BueDtc2PwXAWVTe9KShmWJ138wcb62Gpod1tZzBKpGeBX2riFZLuLMtTPboyS9ZobTYwVUwJ3cKaoWuZb7Ai",
  "key3": "3TomB3pEhCxvyyGa4HKPRD6MjdQvzMVUphkpJ6AcnPKRCJwjcFLvBY3MAhEh66D4hxGSWadmG7Uro88miGCoykSc",
  "key4": "3Yv9Z9iHAHGzy1AP52emv237ruVXT3z85vAoTieYAHWciiZZ4N9nywtsGc19E6RBiUM6TJSE8qvXrJEeMWeU1NfS",
  "key5": "4FAkGcVh6jCJTvQDPUSveN4rpTTjH8YbJimwLJa1nfJex6pDozkpyYF7RtJyv2j4UPqMy7Z7fJoPyAhUhwmoQ79e",
  "key6": "41d8h1ZctHiE3kUL9Ln9odreDWzVE7nNrroj6vaXk4jauMkjTLhXUrk5pyrayTHgn8KLzAvMkuiPzsfypt4KGTzL",
  "key7": "4EHUFKAuWezjVJSkDkQMGUmPPMqTAP8BTjUz2rvGLJnTuqyCgt2yGwpT8y4H7Cz1jBt4ZirEYxWCxkYg1FWki1Jw",
  "key8": "4KBBRTUou84Ff4B5qBnhJuU2dJdQ84U8spPnfXeY8DxpD94oW4RyuU786w6RMPuMxoMjKtaQpa7J7J7MLWj8Aiih",
  "key9": "Am67s68G5tB3yhBX2FKCcgXNMjAV9tCDeQjrVfKwrosM9NquNtTCuX3kMWxXQycnmaQj7qup6Z48BBBtpGfxPQ4",
  "key10": "2aoPMgYGvunYCSuL5nCQbKVdEWxs6iewy2ufy45QfqfWMpqXb72QegiEbEecMeGhy6fiLKSAFbkLowbQVgTEe426",
  "key11": "5ocD6vDSrMuTarK2DnAw7pUrRQmLYACpusfyXuKBByBecTzhDY7yugYA3fgTok73Yirb7WiZTMHcxb2k2UUdAYom",
  "key12": "3oJ1qoGhWfKv7vt1QMQDLS599uTRGvLtKtD67Bne9WrrXySHhmLP83cWCq6qjndSAjBf4kkRmh5h65moLdzpXTUZ",
  "key13": "2HGRbQhq1oDG7cvqbvH5dhmLtXUDq5gf2XG49NCvLuAoTH95Weh1nCE2wnE5rA2ex5cJ52Gcsz18wTE9iJhsZU2m",
  "key14": "4mZ28P2HSkomRmcKCNtLFrFFk6gppW4nsPT58T9DwhbKEQGtVV2ZUWyXZ2PJq1Gf6za1J1aYPwMTc89dwxeLn1bu",
  "key15": "2MmLBbzAcsaBUT7VLnFSqERQE7NYzcDsXHrjridAvE988KwD6eQE8p7YwwUdjFsH9YDHdHWM9pMS2w6Ybe5i5RaP",
  "key16": "62AvXuHQ8nJTxrKK3fs9NtAmSgCFBdgYJz2CXtheqpSVAKBbsa5cKjejCJHGDBna2uPhkh4jt7v2eSFov9jcJpVj",
  "key17": "AX6Brgmxa6hp4sZMX3ECNq9Ym8BG2yMEybYYhso2DHe8Ru3ruDejFupVjb5kn6k2a8Tf7taKXgpcaP9sJyT7JXE",
  "key18": "2gTCF3kzARAQvgzttfeAFqhhRF1A2Xzh3JwFz9TeUky9XzjNvMn1ttVRkndK9rbkJMZdi3GVP1maktd5JTyP9N9f",
  "key19": "4zUEEqi1sszVnUZGMn9qKCXYRdvkjm9vWspdoyjgxdqpVSQb3mYWKivL3mEQxULPRoStxp3G7Y1mpd7WDQKJBBDf",
  "key20": "Xj1nXbzqbDNA98WWwN1tdF5966sSp8HYERF44JicRmWjKB6btk8Gvg9EoQW3HpzKSj2XNCjh1uHJzkmnfVrrRry",
  "key21": "3z1AuCVrykmGTuU1fTKB3woouPumon22MksZRTJzSJNf7PT4viWbajXBv2CGyKxzSoAczSnffZNmK6zUtpcoqiq3",
  "key22": "2iCR4aDwm4JKWEz7jzGYd1rFMWgP4uoLkSmsXq5GfFSU8nx7KP1Bzo5HjfdjqZCUWdVApXFV23iyPp6fD7dYxsqQ",
  "key23": "4pDNePYNjS76pS1GHhryuvQpcvHR7RPu2c3WoZd9V4uLRHrdXbNmXd48KFuzba8eWKrqLGZS89J3LxJyiKM24PwK",
  "key24": "3xJnUz6wPHnF6iG5HkxmDQB2ozAP7m9inzbQhmRTKJ1haH212NYLSpeFkuEPs9qmo3vXicERXebGKGrnU7eZyLwS",
  "key25": "4pxb9oexMZLWen3rSMDEzm8anYWZtGSQrD914XmUU6DAVN8McwvA6LekMfQ53aMEMgFsz7YJjGm9cXXgTVMbe8Va",
  "key26": "26b2F3kG3fe87iyJZyBMUf28S91tnda6uPD8ryLikBGMoe7FYCGbpnS8PZVACih3T8rP5GwxZtPsKPqeYsqTxpN6"
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
