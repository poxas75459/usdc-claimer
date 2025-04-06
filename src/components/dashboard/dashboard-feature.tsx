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
    "5ey1VgrtoM6nGSjYqHgyyij8QC9u5CofziDM9QLFc9suH3k9X9kDgUfkwGi9KGTiwFbqwwJW3qR6YgZUSJUXeam8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3avxF3wM49f8mxqfw7Hy6oZGiRxPyPSsz34XxkccsizC4v2skJHc6DmsMFwPKGWoLYX4zMrAfSWwseX67csDx139",
  "key1": "5pucjRRhuy18wVKSAVjd5NaHKS6dujtA8g6bqCn6di8qUAijLqCSKMNSEtXzR81QgxqNoXBNTTBx1Dfo6GhWzULd",
  "key2": "45NzJ6cKD4AJt6ARGgUfS62DwgBjST5RcpY5c89keVcWptjhFKFieiiSf5WHH7dFWe3PauKFLwqoLYTx85Ngzy1M",
  "key3": "65pHu8HuHurNsW5gL24j6Jw8nVL4uPWnCpdaCwd4qNVkksATDvDcoQaRbny14eE7HCXQK1SgrewuvxqdTGSuoouU",
  "key4": "31Bb9jfBgoFKhskUFBQRzcsNiJfqy8P36Z7u86yhejcUkxQebHaJrgU7LasaUMPQf3bvYL2Vd16zqAzVAHjBs3oV",
  "key5": "J14R4DahsJZpjaDDxR5EE4T4R8rm8R1nXHdGuc37W5xXVEotXGnqbSPjwcHmLHQWGSLqwNAytvEHs7UFTUkTwVP",
  "key6": "4Pr3H4f6EvjQgQ6vP9aFVgFTqWJqxL7WoRzgSpZuaSHAGPkJA76GSEtJ3jNfZLwZMb7yhwNjxPduE51gCFym3xYj",
  "key7": "535ifXYwGZxfj122t11y7rKe3USN5hzTdCF9C91YndeAk8QYjnNNbeXHamu6Q8uLeBZpjkLA6Aj1Mkj4HAq6ZpXX",
  "key8": "345tihWKLD4dR98gRu9W434vnLZX26DLvxr5D5quvHaypH76yPVP4x6JiHMSF1apLQniJHB3wUmavaVDMUUCNTG8",
  "key9": "4rZAzwXpFxHCK8dETSKxQDT6GNN7ZhoN8QgRGXheVBvnMP4CcxAquaSxWytKyWKqoH6d5wfUzJRSDcW3F3knj7LF",
  "key10": "42mAh7yWvpgDBUn3on1m5ZGH4sJEka4K78WcpSewD95GpyhJfAxz3D5MfWbPq37iPou2thYbuVrGX8USKiaT91TP",
  "key11": "35BomL3fp3df9MfLAVHb9EPeg6r5NScf3eB5bqwzdc48eusSDUcwX3VDs8F9jA2Er56qoQEG4MXdD9xYKWjcZwBr",
  "key12": "35kywE3Tc8ovgpspUthxNoN88gpDnGfjj19K1WqjN8QtHQZtF6roRAezomjkiU3e5HzFHHF9vno727zfbYQqNUsT",
  "key13": "nYxiR8GpAxXXVLV52rQp42YxsPNduBjGY2vWUiTFcM1K3tFeVrFFDNuGQ4vC2FLuXuEmernziaoBqvShJdMUh4x",
  "key14": "W5RWvUJqREQMQK531Faw6eC8Q4iZ4TM7LNbNj5vVsDJJ55PFozJhZZY8x9wa5hGAa4QFuezWZsbxTfPJ2Bx7aWS",
  "key15": "2t7MGnhKQfFsdygBGPgPj6drjEcEhe6b96Cgf4vyaaUPwabozQ4UYQTxZ39EGSDF3eGmYWsZJzJ4kvZsk2tE7Dmi",
  "key16": "xM13QfXiW4HsomUmdL4b1HQ6hssTdudNtthbiioyRPuKHUvWGcREkdyeMqymr6ucK6XmRkTrLj1C7BFiTQKK312",
  "key17": "5MSH6mQziUsLYnYQqDTxEQyvTM6Z6uSxZxuJBufUvxC4StEdiSo5vSRsVMLGaPfjBxWKut6MQttQbSofFExks59Z",
  "key18": "N3qyf8A8JChcjA9on6soUKq7imHVQNqdwM5UufXoFSCAS4gEbaCSUEcaoBHpkfMem8zPzYaPcwfNks8VGHb2dqY",
  "key19": "5nga8eD2cqY7nW3bscaYsZbGQfkxBvbiUBkDK8FNaQRkQUcLWXUdhYAk7XpxQMdbVsKF135c5UUQn5jepBiNyUGS",
  "key20": "4vkmJngjTBKdwsuaUzYTtScL17YSM2FdvCBgmkXsLeT7z22y4My3uVUar3GyKjt1YnAfGmfdXGwXRrMRw2bkw3zh",
  "key21": "5MdCwTuhrUPHS1m8hgKir8r1Z91duru3qjZQCrXHHukoEmpaQ2miGYJJG45P3btYksWtejrnCuHbuygBhS1Cv3g6",
  "key22": "enARLjkvwzHy8NtNhngi6Bgo27qaeSP7nmBxTBBn17K6FX1BW4U6EV1VvuGAUkn4Vgs3pbubbbNFLbK3N6aWpXG",
  "key23": "4B6EeSEVq1nJH7SzvYDaGydu3WkY1mt4PqEghfLEBvKD4PpbtkqzVhWpfCERkcVi7FLWafzLK4Ra6iAyBC1GRrMg",
  "key24": "4tjZftsyJmCv7VZbv3cr9Mn1nhHzjByiySktPnCuYct2z9zhaoVN5AG9NWikA9zpFUikc6iMcDL1TsojpVUhkVQf",
  "key25": "4q9o6vYAmK7wvdt9bSA3w3qsbvner4Baszeo4QEuuh8NbexLVXjSF9hrz2bp672CVnrpuiHH5HkaZ18MNacj8TFu",
  "key26": "2tpt4jbRL3zHK8Wirn6henLXL667qW7E4symg3GbFg6yD7bp54bvDoxHqwPSgLt2iFt7WoYWyDsGdbbceQfCGa5k",
  "key27": "2564k48oQcCuhCXhR336n4TovwW7ESQEUoH3neJuAbEP1BfV4KtsB7ZE2t2j71xh2cdwD7ETbFMNgLJKkAhJvyk8",
  "key28": "2CCJpfmjy1hGg1A8kNAALcgjszxVtTJrhQkhtfLzUGerAWyQGz5T1XggpSb2mtDqaB4c6Pb1VeUxAtHUh7qok2i3"
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
