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
    "4s5CJYyoP7kqrMxGypEzatSb6bYA1tWcHNa5bDKVEoXqtA6gCtfW41Li3Kq7HZ6hqo1xND7mtLMqeRdcekYXn5bU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BfGuFdeagEf2VgWbhP5N5CVq6G4QHvSbJrnXzSQsGtJZ9Sa4VSo4CUmY4oC15C1zKQnyXmf1mY8NCfabmpum36U",
  "key1": "45qhDpBbW3bEpjxrUKc9jUtne1BtAkiXmyJh3zGJyMns7zP1LrS2wZhnzbSXnGR4h8MQxQypnhNJi2pavURdM3iX",
  "key2": "2dv3PPUeXYnu23qyjWkvptzGEuHKFxZ5DvSPu5QRviLCz9kUXg6pCUUJjf2XGh66b2X3BiS4d2HQYDCeM9LY8pmo",
  "key3": "3gZdQYyGv3n8mzXNtFphPNqDyr4G5PuBdYNWb4TW9akvXAQQpPXGeRTNt9U9qPxxEhzFDt8QGnkaNQfjH6zuRBs5",
  "key4": "5pXVKcx4A6aFpepGhEq1v9iVd2FkNHSeVgZZaBHz1Q82JYvopFemx1XQJxA1TYg4sosvsT6DQfymAPKdqZBpHCSs",
  "key5": "4apbrxy1kS7qoM5wFbqMuBuGtwtg7JWC4pWj8APz8ENFEickvaHnDAxSMyj2EjjNy2ZkkxkW9aKRQxdkj3ffyHxP",
  "key6": "3omZWvYoJGPUo5fGHVe1dE4LqJBLJ4rY8gjqmp1kSm8Rt5JfCfh8DNYU88p6kVC1ujTaNqCdppP92HT4cvHota9E",
  "key7": "4q6ca9h3Sq53qhQuH7vraPbmctpx4FAqsCgdcDQ6SfQpXjgNp8bdoZPa6JLEQY1Kk6jNGe4uMQWun8Y96Asmaqt4",
  "key8": "K2BV2yfh1Tfz7qoEtfXVQcPUmDwnT1Z5vRxqv7wqofb5eP45fiMnWxTuJujAwypEs1MKLHbFcZheAfMbanmXtoG",
  "key9": "5WLXq5d8RrKnHsaJjEB16V5i562noe42sJoqW44mGCWAhGS1VFVUNMPg1wF8ve72Zt3PSeUxxE73bBRQVkG1df6z",
  "key10": "2ywwzSaoghadnDeDygiuqcgeKyAMtNNqrxNUsjpyJBoyRoN2sfBhd2Zg2LVR3qKd1rcxHQqo9hqzGffQYb5oESxH",
  "key11": "5idhkWuedX1X3vTmhWmDiR8nMHF6m55FZ6TiZJ73Yerf8Qi9ERjEb4Q7pyibXeKfRngsihi7G9pynJCg2tAAHV46",
  "key12": "3fygBcwi2CZCSBkEFz44juJyRRgcV289KPiLNrhTuHx5uFz9PGLQpTKpHnjK6eYJZSCdXv8uvaSmJuExfW7tyCny",
  "key13": "i785NVRcZVcx7D4MPXxckV27MBD7UQteSQCsVvzCoT1RLkiVkRwVsLeAzAWmKF6odMRYecRhAdSy9DVkzd2MV8c",
  "key14": "473C6dLc3KJnKRZG3j5QeGgbBAWZQjqf72XQoAxXyUrbETJQEmWpdtmb9rjrryect1dGS8qFc1xuiUMU8JNs7pmj",
  "key15": "2xdt9sXukGrjNnEAq6X22TEndh1wTtATTG33PdCNXnJmtC672EfkG4MVkFCtPw4ChMw5qYA49qBV3XsXRhL39MCM",
  "key16": "3R6D8mxcfEz7QwEV4KAm675ey8wbhBVtnCvKhxAMDJkDCDUPHfPiKxjPKDpJ5uB9VcGetMzmskq4DFkafsi9APN9",
  "key17": "2uDTsbyrthU6nzqboGPave6PRmve3KLwbv1vLbwK1WyzPbrJxzbg76LPecJrJN16TKGawBuixxJ5uzMd3rKFfT1R",
  "key18": "2z3WxaWiX54cyFUWX2Mvn6St81HeyHbkL2tjCgFqgrcPKm8qEkVu9rbaGA8cMrTz58taoaED1UNCswGuxWxFUVQq",
  "key19": "2AnmrGznbVZuJsAh729zBbcoAW4U3n2CW9Q4beCqUM87ZDCy1Kt3JEH3n78pG2J9aNvF11qjqptVEERFWdcKmNtC",
  "key20": "aFrcNH9Bjn3QeDw4XN4QFJt5xh1whDdjSfPhyNHXeaUqsUWVeQQgKdHGwJDAdfVkK92udAChoFENB5WziS8Qrya",
  "key21": "3hB1NjUAVSksXhSkQRHHBYfGp4LQ5H79qtussDW21kHxYzdZHL4AucRT35D5nLkv561Rp8evSZVBJ6BSG688SsoD",
  "key22": "LEzEMzj8XSDArEB9dWN4DLeKB9f5RBu4CHdaJax1jqufQcRr55dhELCYbFU9iF4HpiSrm6xFdCjmNWEkAm6uRZc",
  "key23": "4TfJgxyctRyYJYcPHhJnUbEb4Umt1ffAtEvmau3vRpqwRb2B7e2LXquCD8MDdVBUTFrPQuTdCPdAaqiNHjgaVs37",
  "key24": "4pXc8GepCV4w2gaG6hMDD6wYGXbmRav1VdFoLHFe9cua2CRKFWyNE1iDYou9w6dh8sswXnPPsf9391JKyTTs8KTS",
  "key25": "3zqGdmfMiBhVzNCMkNWYjXjFEUXGVpGnpRf137hMLYrvSXhLke9ciqUgxY8c45sLQPsBBsFxiA7ECKfPvqnWm8AJ",
  "key26": "2ByrZPDicEQb79QWBVK9pB5YorAD7Xx4v6Ugjq5XJ1LNG3RRAQxg1UGoi49Bk9ngeJEhu8Sf9N7mqqF9oJdYMsW7",
  "key27": "4HsQEy2MeeGvRahHeKKdQXGNDSZDxKkRMhZNYHCtCKuzCCP3ev4tXTcrGxaa95CXB8GVsVLciW8enxkuPgBcLZTU",
  "key28": "5F6R1ueFg5FDeDSmaQMhcTAtBRymXbRrx3zPdWGRw5tS7cpPbnW3HAWZunngi3mDz7PJuSyWoT6K8uhXSYZCEiFk",
  "key29": "5p8hEwXHjx4c8DkwuQPqaVdgRzxctHXGdWrJtkQpLiFbLinMa79fBDrG1Y4Es4zzuciSV7cmcpgqdP94LSmLfsHk",
  "key30": "67Az1gQSjf52uDPsJEiQHiLf8TU3Etgff6qSYEaZpxgRQh8aCyNcCbYMgPuznLRP2KzYcPbu6i5QnSKJgoDhRmez",
  "key31": "2VkjggBeRMA4xRXRgBNXejbftTUQfYWbBte5Fwixth3k2XqsyVwvaJruvMuCAGQUvFdCFjwXmsX2eeQSoEuMyj2J",
  "key32": "td3gLewTVJE61wPMsg29VPD3KudE74tYHqAL2GE1STLwza5tXE4KcXXtYRg3QC3Rw67of5kvS8VNgRnEemTpYFd",
  "key33": "CrniMzjDbj1msfbqyyFwaPmdtbWdh7ouAqsFzZUvxnBTQS9JQ6oYNCtfFe662hPsKZEfoZM7AaZDvV8G84LFKJ1",
  "key34": "4W9japAZv1ZnFcemWkGmFttNzNiNw96AoBkBqP7C1N9UuoxpRY2AiEeuJsNfix93nsM6wLG7ixEpn8jmv4h2rKQ2",
  "key35": "2aXwDv447DxvG8e9ytxPCksAVG7exqzk26BTH2sVqiuTLxjoN4WBaSNQqUZW3njJXGHrNLGC1M37CJuZG4BXwbPr",
  "key36": "ESu4wdpofLpAuXZHJRCALDBv8TjTZ82oN9odXes6vESQ4LWmhWezf1Fsnws5ZjEQRRmkGohusYXRaDcdxfAVx6x",
  "key37": "55iyusJC7Yn4dHLKWezQ3dqn8MPwqGPxXaW6siFJCyUF8ACpDpiaRmPq2J3SmMnXi4rmZjsj9Tem8sEknZ2DM2N8",
  "key38": "295bxqBnE1mBADK2ecU4Gz68CfXfqPp34B2qMWKWLaRFpYLSpptihAg5sejAL1JxiSyMLDd9jJSRrvQyzR4ToLJT",
  "key39": "4TtzNQqGs1LxfsePBHksGkeic45xcoEYU8i62XrtQdyKAVtX3V9pa4SFkYBg4sJRkvJk3AbnVdMyov9Dz49aytzN",
  "key40": "3cDQqaCtJV7PHEn8PmziABNkGxFNeXJDAUMrpWLgajhnwoBJszzQvJuKhVVSPqYYWzuadrdzxhftZSyCoub3uRAJ",
  "key41": "5MEBPtL74PWzNqSgkjmbdSXdBD6CVkUxhQCKK8QitVqUb53KYJGDGtVDQjNqZGQgne23ML8rT7mhA8bZ3UAd86TW",
  "key42": "3pZT1Fr1FTJhfoMXcweKuveqUwpCqYCrNXoC5h79pZKjdME2LNahAxPPpf7YrVRWmxGENomKkRk7zRkmG3WkfhCe",
  "key43": "4T2e41dcWBQeX46hrMsSv6Go1PNsYHy7TL2a6mA8XxwihWfWiMkfQeQmVfz4VhkdY8D9qMsbXXTeiE3SM9e3nuwW",
  "key44": "3beS9U5ECVZx23hTHQbwUc6y3GMSzhBYZW9s2tqKNLTR2hvCy58VfVQFPorDFQdApbPFcBAjEE33z9hjGsRyeLwk"
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
