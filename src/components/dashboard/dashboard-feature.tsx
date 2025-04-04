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
    "3hhhaPNDgsGzyYXkvuwATcLmhNoMKgboEc3mDqCjgBprVtNzzbFqj63LZX34DV2ZowZ53zEenkNHpScdVCSqZNbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YaJCod7kpMSW8fxNNYRTpdjdtRr6Y7NuaoyCpZNVhBVPiUwPMQhSuf8gYsAzgLSqECafuXUcZniLd7Y2tYyV6M5",
  "key1": "4YhkvjQLiU9Ygkhq53dbH76vLStNNC2gH5qUEPKwkvcCRMCYywAebJ5YWssG1Jo3qhjWm4RFk2sYaKd788FcuyUE",
  "key2": "5KrbrDshBJjdvbxLNhvTbdQEpLS4aXkiec9FMvaSrskArApLSvzc6ojVacGsHWhYW1TAfxqq9Jv3WsJWkiXVjDdL",
  "key3": "tDfzWcW6eLHa9UAmZzCVMLYRdHyD1SEyAEhkuVLzZNe8jEHGJFy76jwSYa6VUzyincCpsu8SKEFh4ybaGvevfsb",
  "key4": "5uEzBJLGLiRKSyUfcfxpidVzFaKVS7GSsu99phRxwyvafPqgHY2mzKubMsvfMDnYEiW3BqgM7juKTuRuXoKZ9Enq",
  "key5": "259Y3h78bUw1WcDMmF3Eb2gbgdHgASMzbiiyVFJhcBSh3QXv13a5nToigYsP1AuHCWJGbw9hkQ3QoWrD2JWadq5c",
  "key6": "3DSVDMhaJqNWPv9xET9vUtcJLgAZxy56ijtcLDkRYvAKULZQLiLrG3hx4d7ak8NwdDJfiA7LzGeGZtx3zmSE2oJx",
  "key7": "28CV1d6iiMbPaGEkRqHnb8JkCF1JyF5pqae6JJfZXBypeMJzsB87EDwn1FxoA5G8h2n3GHe8zFoRySHtyd8YHxdG",
  "key8": "2o9QQ4n63LT8cEanGL3ZoP8NvnVQARctXbckTm48KLCSmuLEzj2HQMNd5wtgQ9xCT73YDCE8axdWLRNtAZxgskkW",
  "key9": "4JiBKGLqeob8Xm2tHpCe71GEAYSTt9fMfFgU9SLeC4emKP65JVgYcmYxNUgXPafthfgobH2EkyZgcMqV6seMRaMi",
  "key10": "3sXVxiUSJStdiKUWxKKgnqf5V64Mqhom7F3jhABzmpgipBn1ARD6VNnPmzXHGDwkSCMG23GaobPexJWfhXaGpjmH",
  "key11": "3qSYFziMY5ApdqUStvYgm9vTVrTw4USQDCHp9V4cJTKKAjQtu5VCA9MW5zrRqjMHa6MD5qwryjRUhkg18jaUBUXZ",
  "key12": "Yz8AVKBwBpg4X9S3UdSbB6kvzxF7K76sHJBqp9rNhtpSRv6vMdd14EFhQ257iAKwkGhFsoxjUFq8fZ1vv6z9AH3",
  "key13": "2bBTUf2M4zqkVxvpSxsw7GzTgk9xR6gjsSiExZJ8sXiiT6SgMZ66bJ6sUL3MttifHJQQEkkdQJQdDJCny4v9eTaQ",
  "key14": "3hQBPZwKu7R2see9Ur3X53mZ3Bkjg9kSVQSrr69J6acTVVc8Dca5piyvTmpz5q4RxtK3vu8Kzd36FFPMLYFvhMwy",
  "key15": "3PdEt24s9xqFZu5vWvqoMuduJ3JvyfQ5RMt4WFmMZQenF4YkpGz2ytdYJD1jZ9uAXGw5miLx8xojMJwGtDHqdpzh",
  "key16": "2sGNqYr3V3TSrwj1DFa9Cajf1eMNrrGaEKUkbeJCDqSchn2Nsb2YUeBPWihg1N5GbBGr49KY9kE8mhZEJQcU1YJg",
  "key17": "4t48E1pDpxX4MPh2TMjkvbB5CBhhdxfiAAVHaYuKZxWySfTkwTVyobSPL5ebck3Yyyrg4L3EKmgbD6XpstpTYinr",
  "key18": "3mea9SkxoahW8F5umNY4zq8yXP4uyGFRA1eMmC185LeFf2PenMWToasy65D1SUp5td2Vv3hyExmGBBz6wgCJLckK",
  "key19": "4JBNMV8ATjHGFyYrCYe5DCFqo4d1Vk4kJ8UT9Sv7ZiuMRrkSonrgyVfDjhLoTpZkBQztd5rdzUSVYrKxVgSdh34M",
  "key20": "2ZDdLWq1VbNwTKHQ1FSDSbYUnAyJAfC47aLY7MhCPHa6XSaGRRnzchFEgiLgJ4jzzGeJCwgsQbhem9t5UULtJxDe",
  "key21": "HPVoYEm9jLBH54UVH5gnB341K38w6ap7Giyh7U34oBU3bRRYNZ6wgVSFkgdVXTQUws7Th2FWEtGFV69ny9B4iVX",
  "key22": "4CYH86NFdnhGuUxJeE8i9Rn24WyoUS67FoYwsZNDoJgj5TMkTmcuVCRe7TtyRqixZWpvAb3xy1sDYx3RMejM6cuT",
  "key23": "5HsG4LPRzoCBczrHkV5AmGzxwTx4kWwHocw91fMVTZP21S89uPfpjGoCE2CWo42x5o6w4wgotbSPYa2RR2PCsVVy",
  "key24": "advGiwRGtsruSDa2NVTa3wbrsbRSh7BEXwNJREXF92MLM6tDPkXKghVTSkJZMcQE1BFvDKCCnwn74FBQj4HsuWo"
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
