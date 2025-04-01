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
    "479v5qxH1eLj1x4XjGDGbvmXtB4Jpt6QCyfnfoBm44aoR66ww2y8FR9o7oEb5RdMUH2xw7wo7AyMiAkWbGNwSjwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e9vBZ96AeC3ghTtnMkKeeM1hmMWfHxnPYfwnYJeZTb3ayPgmXGVAe96UzsfeR9cSG1fjjmQnCkHkbFztn6QUjvq",
  "key1": "2nZSRF56ynZZ8rky24WeKQoBCTfh5M1xcbbBcK4euQ5weSyyYNfj22YTeCaTwKkomFuQmAXyyqnai2612s4Y1npZ",
  "key2": "63nCWeNc71HFsLDi8EFtJfk4rGF1Sz5QYL2KGjLQMpUcs8JFr7WpSshGLWFZyq3QR65EoRDyh8QHpDA9YgTeGFdP",
  "key3": "4PYPKtshLWjjjqKbQRhsCruBS54PBWYDDJnZ5guvg4XFHWe1pLhFcLjAYpd21cMGZVtbXWxysZKA2Nohe6nXPSae",
  "key4": "2YYdJ5KeawgM3d5BMbFFUA9yBw1ce1Kfyi3v1mPcL8AZVMx82Esfrwid9XdnkZvPi45u4A1F3Yao8JYBgKA8px1P",
  "key5": "3wKvE9zBt1WLo1Cm4qjw5R2xyaUL1JqxVjeAoDBi4U5NtZ8hdu746mh2gveYHyNMUGFqa2R5wpwBsxftF63vBy9t",
  "key6": "2ANHTJwFru8msDY1zu7ZuEL5Q1m2L9chxie92hRkSjV2LeBpWqv6JrAKijfCb3Wy1E4yJbPd2p4jzMaChNZAUto5",
  "key7": "2zsoeJDgVbbNkwGFtFNZa9GC9FLfLZKnmYPSwnaTRQ86yNQecdrYkTawwUZCsz7P9gnTMZVUtVwzhkRKjCN3KBue",
  "key8": "3TmMYGdCgmxYr5UYFFbwFrbN3fYcJDERLpuUqKib71TE24iVtuaq6zahqLC7VekJb66mzBmB1AYvrXCR5zrv4eem",
  "key9": "2mVY9ZPBqbbRFSi4uYMTSCqfNFvcYZzKryaRibxHbNm3xPHusMvYbNzd47kiuY2VRnYKjr3NTRghU3iR2qnJnhKs",
  "key10": "5fofz6tEPp1245k8KgS2FW8JaTfqsUQwbJo38c4T3gD3mMNdrErX5u3HjJTfaCUp1qLciYLQKTu9P1VFmbrTqFyn",
  "key11": "3GVndpChKDbtHN5D3HvxHaTe1zjNQ6X6WB9CXqE9J6JCd4AU9QYjybcDAts27vwJd8UcEzwQz5osq6shSUSMLWCT",
  "key12": "86ymX9EgCc1eEniovjANSP7NtJMWUKTBR2LcTqNfQeUNu8pcaraxSRr7yNXDt97MHuCSJuKA98NP5Q3FJxBYQVf",
  "key13": "2xXgt7gZjr8WRUtZ7gfYo4oiTiZV4cPmqmXuc9Qf7B8rRvnFiw5YrkwbvuFRK41rYKrvrUVPM1kurpcb9iY4VJAo",
  "key14": "4yXVeFeRgwiG9gC5fdpLegjcjh8fJPDVJL3GDES1j5krUo27CqbkEyAmJebwtAiyC4jHuzjEgBaCYm5NsTqPFAv8",
  "key15": "2qKLKHYpg1cnW9drusRNcRupfFVEwTKTkd2aBA1cjnNLdcjqWiycsME36Hxye7E9XWgD8zCwwrjsjGABxo1tb8BS",
  "key16": "2zgqhn23NKDUCGqpPFUoPt11uaf53goC4dduvR9stQhiQQceg5RBk6HLtBcRZUabWNtzJUAGCtWsXzhCJpyLmPFm",
  "key17": "3AmPC4soA2exJ9ZJRD164jebPrM43PxpzJxZhY3fe6rg6hLhASczX7B2gSc8V6cYiFVwXDpfCh9xu6XQdkUizRwE",
  "key18": "5xheV4ZAju4kTZ18KukSoto99dQ7UEQpLT66kQnc8n98y9LrFV8nXaG9WJp3KHem7wWiP7cVeSKCxpXUSvurKBJB",
  "key19": "5uj4FQzxrurS6nJEjv2RExq5aYZetJyaSScJq3JzGuSjzC9R5JYXo96pKtK7GLvpZsLaBvdPrmftNrEerFQBtZUH",
  "key20": "39qTYHgDsTLVWAJZ8PzeRGrxuGoZCgYv4P6aZz7JerZ78h3B6M6zQXumpxVHtSq5M9dNzL4BMSc5YEQodo1Dju4Z",
  "key21": "3aYLUWaaNuCET9UQM6UqSdax5ZxrDdVnzFMbvDWz9gq3YsdAcVfwNwmReNG7LrXjg53niCwxMdSLFKNC92axhobb",
  "key22": "3akewR5cdrdKPnyTE9EKHik4CTf5uthYnoTdm1r2txgnzfmXxfPdyFsFP9Hm4vt8GxK2EiPtQFmgDU7tVvXDgsSy",
  "key23": "RDckEMk8xre74vEXu2ewp9UxKe5P7S7eUffqMv3MiaoLG4tTxY5Ms7SEkKgoZcPPEK3ueYQrs3m6YtYGBDfSJ6w",
  "key24": "5Ge5WyzQGogMPZEfHEttAdsnyJvHqzbJH7u6mKAxB1e4Pa4U2SLNjvcoT9RCBBCEbn9jnBrsTgkoaG2k1FXgU9H7",
  "key25": "3ttGrh5q9dvz2RsjbAhzxgbczrYjtV4tJZNWYZUuUvQRXLTS8ji19q2QKgSG2meAZ4RzUMypXnqvNNKQAc6DQgP1",
  "key26": "3DbHhHbjJZbjPen9SLgN9hDZURkEEWPhKkfPjakTqiU9i2Q1hT582kDgNvynoqgQZfgNFa2rv1aJcCKeorYFm3o1",
  "key27": "4hySQaL9WJkeL7dDwYEKSsq5owXLreNnuJDypfSThDmuiBjyy2rzdnyKdctmJD4rQniNfzmh9zrrfESjXxvk8n7v",
  "key28": "66cvzSJo9CHNiqw3jsHkuuVTVUJHofCkzByW3HKxqH11cGrGqGd7ytL5LF1U5dePgYvmNof56stCMShSzCoTFWZt",
  "key29": "3TurhzhHAZtTuRrYdaf9iiv8Y5Jtoro5CZYbgdfwzzDhE8gvnJopgUAsgBDWW3P2fJbiwzxdXcXdws6Wxe9Nv2ge",
  "key30": "TrxYpyn47XbA6Ha5F8Sw7catPaEorHtMfgo1gwdeLFN4siVuzYxwAa6oJrGbTqAxYrBo4Tn2sFus2Via81aRAp2",
  "key31": "31chYGskvpW6tzpXAhETjb8MduEMNUdSDug1xf3v9nFML5fXvrPA1ZCiHWjWPWefGyqCX2rUwqycEyfpXeYLVXBj",
  "key32": "4B2CK3qGvKWzxDB19QTCgi7izQDttwvDi5JuoDdHfYxHoYZkjb3WiDKKRi8zevRGivuXjd3Biiqy25xrDr7donYJ",
  "key33": "31AGFs22eS2JNMpu5Chm4MCV1Ji5cN9cTXPcYPHZutphPG7xCcR8hAvWo3LASs3BwynwpmHe4V4Qfy8YPdsHwG2N",
  "key34": "22Z2GG3r7q4kUo548RBmUpHyhP93MGRMsbpNVTQU3tk3bzAErvkBAaCPk15BfAxmZQY4B5eGEXxb1kMe2h7mg1XR",
  "key35": "JvDzmb8CreicQhuWqApLLEaLYeAWjQTaYTXQN5ughpgbkR3rmvksPzhCVHb8unCy2dyQ2uQyzkt3g484hts6V6s",
  "key36": "tdTQ3yKS2Kz5kWcnDdXtmBCofCxhQkSaXKrBVwXgXDiYrFsFMiq3YYHDmEjdMkpzyNR19nwz2fjqDVb347oDeCj"
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
