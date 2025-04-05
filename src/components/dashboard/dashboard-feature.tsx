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
    "nmCSEDGCeDJX7Xd7W4y1JXiWyY1DQNLdUGumf8AjXEaBCYgfyCSmNhjteFnvpwqRfFNFihn4v5GunKyrx5URLRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ErBdS7naWSsEqDHgac4BL6w9wtEQ9UggAyMjAUvBzBHhmLkpEbtiwGCUUr5JquWjmvYcpemu9V6hw4NDaLev4uM",
  "key1": "2PCKDubGbrkbY9zazYQJCaXAkP2Lwyf7GZeZ9xMCYRsnvYAuJtMAgqYmjEGrtpeFaPhGM3oY3BaB6qYiRhdrwuEQ",
  "key2": "4aj7bFJv7AW1NKMphMaERfrSv3Mizu7EWwKm5qiyEPgzkfAxZw58zsfitPyWwZzTbhWCvdyhq5tS2oivyMMtx2oA",
  "key3": "hVbyw29zdXBfKQ2nQGZT3mACJAvPitPLSEHiLJuSFbK46pFbfr2gLVNEECyh8LPzdxA5hhbjeyBibHbx67Eghtb",
  "key4": "3iu2A3wPXpgzYKA6FcY5DHprET8sALunghQCqrcDiZbBySTLioWfjZZSp22mLEZVxmbAGW5SBpJhEoB966adSYiY",
  "key5": "4BKMKqAxCmtJcesu5TYbvtGehMw4nwvPCa8QDEcXXGcNwGZGmhMw1Xvbvk8RsgeJYtF8M36u4VoupHpGUuPWi3PK",
  "key6": "3wEEJNLVnb52thHqMMspNcqRXZ1nTQYmHNJ3nEY6nGEMEUkAQbrRYiqrXnG3q59X3jCTpZoHASpqdPWiXVtkVz6X",
  "key7": "2NkZ1Vu1b6dqtWR8JjSe3kDxa6e4FMuCozShBJrx8ozGubi2ox1YQZ4DoGYWsYG6LftNDvQh4a5RrbtNrBWqzGt9",
  "key8": "4aiboYJ7G6xzYotKaPB4w5crR8AALo2vkjtKE8wdzvNkFvkR7hHtcrFZxUxshLFBq6aqBRFu7odbYGpquT2QiFHT",
  "key9": "sAERX3FQWnbh2Xvcx3fa7KKdk9LZXTeRWGZxNFm9jgPSQSyhLkMKSVyKSEXzSUuWsVuhfS2GD4a3qQDsP1KSxft",
  "key10": "4kBnRGfZSeSwugsFoR1uKfcAX2GRSjs1CxefMsmWQumUoXjJM98HYAsapy8MYvCrQrK1HFP36Rm7RngwA1v8UF7F",
  "key11": "XRkv2jJMjhCedx2eber8tSu3NFcEGZBASkwxBtbdT2VBH3QAwZmZKSRWcvau52LfdKMacDpQ4kt6zMcVN3CU22q",
  "key12": "3yJVNtsBtoZtwpNfLsy9hSiyuqyVqXC7TofyDyU7Qo9tHfxMi7xZj3fdSG8bmQA6FDir26Wg5JGx3RfLy92221XU",
  "key13": "4wEmKEg7mmNcbgTmmFjV9ipNe1HaZDtyWEfNGic4oJJaUGavuUboFkD5sX6drNhMA3npQeY6wdn2GjQN1SKQSLJ2",
  "key14": "NJp3okZwfCjCYZAaKgbhEkTYnwmEvm8qLphzbQk4PuMN9zWyxaTEKbZbTrtszUzbumr2XpKBn52HmPHmpobAXYf",
  "key15": "5kaeoZBW1dvosZa6Q13AcPsDtvVRywMGu3sAbRYuqQu13EK2VREvFtyahjMyqzwabzrkLRyf79f2H7Uj4bMTDX4j",
  "key16": "3PPhW4bPLvgbD742sqp1EgeV5NQGkoqaLcboZ8U58R2ESsGod7mAVnTnivwPtexGncahoVqtXDLFtBw3JY7yu1tF",
  "key17": "FF5iCfXgH7xrtv6GHQgLwKiiqU1mhAmpFTw2mXeBYSELC12PW5ubGjrzGmto9o2J64TF47JdJyoFrwC2ukmqU65",
  "key18": "5jdCEWndwpigXqeNvRQg7S1WTonjPRgkXqDdwcNdPoM6bkZcgVCQKjmH2obSoMs77YyMEXQ5ZorXWCyum783bpmN",
  "key19": "52H14zXNVwXmp9EmDTYtLRtFbGqJ8CLFZH6d83RXGPjjBqnseA2HMaDEZNyiQgPhRatDbHQieZrsWAAut6qUR6T4",
  "key20": "5Vk8LT6Ltnq2xGCmeCLYFtTx9snPivrxhv86BpvA6HCzjk3TQuQHGFohD8VhPsCRzBHhaNUsU6mZAooZdU5C7uaq",
  "key21": "5QfUPxpW3V5SAEwZZMW1v3uiW6QJ2Dw2D4fAnRNkkCYx2yguV2Z2MiMCXzEYP2D4ssQQMz19XhCUGYbtN7Yfdgnt",
  "key22": "43PoY1qrpy4Es9VxGuZZDERC9uo2ACZpzMppZPyiZezxJJgCozQwjEYh1e9sfzhAoSLLh8Gyqf8uJfUuRZ6XaKNY",
  "key23": "5eVeNM8Z9MSu8HwQdHofCSqeYb5WD8rBKvbdookn8GYXbhpmtrppFQTP3oBXYZs61L7kBvDh4CsBzqyvoWZntukn",
  "key24": "28VAidYqVQQd3bm51PatFVUzuRQy3n4AWemsE6Kh3RExnc5Q9A1NN5ZcXQ4Ky7cSNVaY7rm6XJmW7BVRZK7udhQY",
  "key25": "5J6nCkA13oqrejw8teYfHgYfWiWXWS4LhEQSbnbHqAHj8tVg8zg4GKipqRbY8HdYgzib8wo4tuaGue4XVjXfPHUF",
  "key26": "4VzmA6FeFrMi7QchnwX8Vm6iam2rQYJh4ztBPyiroB1WxGJ5iUuCjTWRq5nou6E58bcpnC3ZCRNJewpmvY13GpbK",
  "key27": "4ZcmvyrY6NAD4dLYN3E2dQrnHmxy2JJ58tEg48WBX3hCK8iFn4xXejhJMBKBakELKopSMzKvS4zUMBbPyiNC8c4p",
  "key28": "rr9fJ2hyY6LBoMaaQh3qHv9bZpsoRvH8zRkY9Hdxe9Aey1e9pG4Di6aLi6K8HsHtP6xZqga2uaL1TExML3GbA9M",
  "key29": "343zBPkFAUnUs7wpeAJsyBr75bTPi4Dwq1qJGCHfkwthem82hJUjrGwwEyLhYHxKZX3Eg857gVW1nH67qmUedDTx",
  "key30": "26ZSDAZbCwG7UFGe19JSXjGV95L9bqMuJUJv8HB1CotA9qrdGgb7LPJm8XEsTrbXic6dCpf3EZWZWMJZw6JXHWZi",
  "key31": "4KHZFfXipVaLTcPkoKNoTpecbJDsw6c7ArS6TZNeBTQGFDDyBFvpFMHrBwPxZrbt3WApY6iHSQxTYCBbRXqtdJY2",
  "key32": "31KomqJ7UqX4XsoVhtzbX2C95wQeDYFwnDByoa4dzFuDWSKMhM6STyz485aq58tmj2t1wR7Cy3JxUVwdSAvF642J",
  "key33": "TAyiiT4EBVsJvzegny2eVx3Dj2DZxGRMy1fuSiNgJigSocGnz2ivABXa54aXVTkjdHWVrJmMFvjWfac7hFy2zoa",
  "key34": "ySTwRAc1z2tTSmZUFBqfPKK14UYZrGNqW4P8zzrmacFhvoMR2qRZtFqxBLhi1sx87oGeTgSbvBsJAH2xBoKmpKu",
  "key35": "2xzn4qCJsraHDCPCMrMgZErR2jPsBa8KvotkZCsSSH6sXQ12A1f6YmEFtYFrMW7uLBPa3wTWafkYBqPX4SMCE6v2",
  "key36": "4QboSNBFQEZwUVPKGoF4TPQMcyMwiJspXL88HtvBMXDrXztLgeR2v9JmXLdU1YYaqe5UAujzn8nCRJ9VZeQgkLcc"
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
