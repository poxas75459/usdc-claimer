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
    "3YU1HuH5cQVjJS2Hayjcc31d4v6oRoTBpY1VzLrmXV1wXK6uKkT3GR2WC24sPDXWxop2VKSynA8q2dVCiExo98Td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R8nkuASeWi7qLxCPgGvY1P69F4SxbEotrE8Y212Yj1yx7xEanHVBJPu61pnyqe8AcTbvos7CJd7JvViKRhohxWt",
  "key1": "4ApFLt4tfBSSfJv27W2hqQ951DC597soTnD7cLSuPLPfu9SsvyQ7rHxrRb5C72aUoex74jqPJXhQqy5dFzVak5CG",
  "key2": "3TKthPSemd5bBp9UU3s5gamyYou7mAMEU7wtFXj5KTJu1N6m2k97PGcnbnVVDPAE5Dae8JmB4jFeaXNMJd54nQJo",
  "key3": "4LUe4AU3NpweW9sZVsG8ki7a9hkxFPWhveTPQ7e4tV3mNNt3dMK6pDNFp3WvF5k35iBN6rTFgfpY3zn4coxqw6W9",
  "key4": "4xJw91CQmL4Y5V2yjTQEAqn8boQBfZ8Yy8B9Dt3KsKSixYKEPLkQQuszzFjF41GtTswhWzcgERHWTcmA18FMtKuy",
  "key5": "37j23H3gZ9dpyBmQbNnfny4VzYM8RRAUWgq5YYV3PkwfQSP5VkdHV2Xt8BJ4xKJ7yQJMBVW78GXEnsSoKR6HXtC2",
  "key6": "3GybQAPbF6g8D8V1dkkAkje2KmDBdtWwsYgmxBr89dUZE7KiSGByaYrjLJPt4nJStaAhAT5AC99zPLzDk4WMeZtS",
  "key7": "2qCM8tXNJDUoU5ufEdwUevg9MabqCPPHcaua4SHkArJtrPA4TMCWuhQwigwkaeWt9NQv3LQsvy9SQBHmRP7cTKSx",
  "key8": "3NVc3ncGMLTrpAg6q1sMw4SBGq7h1CETRvk6wXNNFM33AueQvbCdjpf5GJoQGbAL6RZFbcrtmvgriTWxPma9xR31",
  "key9": "2unvAemURMyiNoUEHLfKhWBgdZsLxEjfThXHHxrZeAAVMD8Pi9TNC3BDMyPUh5fbnX3n6R8RJFtPVeZ34vWBW8fJ",
  "key10": "2TTnddgQqMFJjG4VWcHaebv2ecZjUaMKjKNPSYofKcLJtaVxmEs3Rj1qkTyReT3vW3oksB2frZRE6Q6pk8pVcpRQ",
  "key11": "3PCuouoYeTL8i39QMkvHRZ2XPLHNhZKyW7najJqLEuLLHYsWfzJ8GVo8r4LkNVzwnkjSVQsU2biPs37L4LsL4PdC",
  "key12": "4gX2LTjgGDPL552gox5gxYH5VsxkWratFxs4egfei4PWgPHHRJs8kBJEz1F6ZkPDU7pidPifebm3u42kmDsFhY9F",
  "key13": "5cHUxCBDJuas6wyB2fZRNRkQiTVu3GbigejLp3h6JDtfDGdmzbAnfFWwmJbranMhnek454M3BTjEpowBggqpbRFg",
  "key14": "4vTBb9s4ntkboXBxtmaqb4YDWNefkyPKTXkWnEkCoWkJQ31QxrYnUviW2upnmtAxdpvKDMC8gZB2UXCSMFJ2t2AT",
  "key15": "4cTSSzpHHHetgGs9W2GHxyEWRz18dqhrJa5p7WcMFi4aWyLKsfYuMbjzLZeXUwdhzvqDP5cT22H9AnqisGDoBtJ1",
  "key16": "UaWC3d8oAavZmtiuzrsBoshfR7aT8wRB39qHfeiHv4gp2GgG7Cshc91kgyF9wMxNhnHzMthz6zkppp5wS3w1BUR",
  "key17": "S7iipTdd8XKE9FoV6gtiZa1XHKanyKjcABvRbhxw1abfBNeARR4EmxxT42E9kFAjkrU2QWfzMZ1CDR4rxS5YLwN",
  "key18": "3xfbyCFMUZptuYSCqdLwc2qDbtEFyqQKKU6Zm2Wu2nHymVS1rvq6PpUsbxq2HBKsPxeing6daPiijxyi7QoeCVtu",
  "key19": "MKZbBAJQ826ynVuetxh4fYunJCSh1JhJYteLg11JZ8EpJ7hoY6ZEdWvfiqvQCiqpmvAm2oCX4zhxNCNBf3wpQvY",
  "key20": "4fboQYEb1jUHXA3rHsDK5DRVo8J6dh6wdsNXkLJW2KeMvCyeFGBtMJ9Ez8pAgc8iU8P6FLMYECBHB7G1NUjNo7iU",
  "key21": "4HA22FuvjzjG7gyjeFXuCYdR1eXWM6ZZeahqQpQnknqfFB7ComiGuA4uKf3Zn1ryDXEvjFPrKAUj5JNsNmnocVbq",
  "key22": "2FC58WiwebNk6crs2pBUCuDVUTQWb1wLrbbszpgm342g5wf1Ddq76TeHZVG4QNa7VMuhqCSPH886r4GyEcu5AeYV",
  "key23": "3HUqCDnB9EmQVf8et8Gzntn4sthPqXKaHVfAaTyMkuuEj1Qr46ZEnB6F5VYxSBneGEk5t1fbHK7cHiu5zou7JYqi",
  "key24": "u6uJPhS1F3vEpqwxk4kJaWd4SFjEXKAbqbYvS9DV7a4jh14isUfZZW15cB6rdkrYbexTW1262wTCfo5x6T8yoos",
  "key25": "1FPwDbrrX1TThgtddr8Xop77Y4yC3iLJWs6UgdE5aSXRLX6CUicf4P4epeMfanjmQiaywTmEXHmpwUgzbkfNh7E",
  "key26": "49XYbaDVise4Ye3HyNbLYSX1R3j46J9cpoaj62eYVU1BQc4qVqjiz1kBWgd1aYrP3fotmychy7CuGL3fpTZem3Xx",
  "key27": "jr8cjjWuZJNs6drwSQpYyFec8dZy3VndLXsqRTdhK9jytf2LTJAZmcGkA99ZCS6va6WrmPPCB45BtkZh6ic2uzo",
  "key28": "mQgv93U3jucZKAN3rU5HC96gpgbEkLdEWYP2wdcPJvp73mhoU6vJg3pnMFbsbzgtUTjJmb6aPRuYHbv8TrWjbG9",
  "key29": "22JTwDyRaFoL5miV4JesURErrq3YBW2xHdvdPi9SQ1AX97J3kAPM3SAcAfJqz5KTGs4BjX14vMmJYsLEbjhJEmTU",
  "key30": "465t86zvkRRLrKLhqpYUvj7CEREeeUPehDgKkABvFHuDkymHS5uP3PSs5cZojKioYJQfvRudvEEdfDDBU5Fybq8R",
  "key31": "5V2KP1NKa6LtTifhyGmbJazykkjoBtY16R6LUo6gSvoEEimvQLToacyMHkAYAoSZ9eeFdGUC6vrvWYEzwHfQFFDH",
  "key32": "3PqbQiWm9nZHE3BDRZxVo62icV9TsBdbbXDDwLq6NppTuhBrZH1C2i4XNZ7TVQsAbjt6HmPnngpeC3QDGkgA5abx",
  "key33": "4JRjrn3amDfiGZg1Ft9GgvrFWHfvn8J4kEAJbvUyJ6BTmeRfACaEF3UjPYKbC6DrATH5GJMveVS7gt7RBjs9nE1i",
  "key34": "jf5CnEV5dMWMG7kHqrvqQUQTVCPnLLgsvsmD3RzfJxNmV1rHpPf4Wo57VUAWbUkHkuPodYrG6ZXSfhq3qmowdKx",
  "key35": "4rYhU1PGFUzgSa4yWLdtp24HzexgC4R8teoi34d9dzi6ms5UgUuPUBbQNNDREKunEHXciyrC5ZmaZArwu8zWP3Qy",
  "key36": "43zo4eXvFkMFx7JjNNTMTgP8D7dgJocLxBbfUb3xJErkXNCCdfQNWS1dJWi7p56kbPkVtByEf6DcohJ4NJGnt3rV",
  "key37": "uyYD7HFiQgBfy7PS9Cd5CmjftASCA1vfX4Z4PJ6MQpzd8SEAajk6hZ881NgqCqCNgaAy4X78WkC71sFtxCujEyu",
  "key38": "4c2rdVdYdsHz4QBnEe5Y68vT4ZYjug7RJNauzuxQw7fstX45w8ej2FoFZsHtN49muLJ8AmTZpEGBBMo4rSkLxpwF"
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
