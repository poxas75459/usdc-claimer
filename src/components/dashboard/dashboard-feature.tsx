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
    "2ysydRAj2yey7yNdPh4RYuDaqRjxNt8tjaPgFrtCoQPhUYhwwfntHbmR5hcT2QU4djyygPYs9yuiCV1QA9ZE1jhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kqG2eALjh8RMXogEhtk7cXupdM4RaponayU5K7AataEtUa5fQtexwE4GPkqTM2f9xKbTqh4DF5eWLUCGCy7WKHZ",
  "key1": "661QeQycdJnWeYYpjeyyVnGj8vjPLcfGHiUYr5kHPWANQkL8dYrCUef4Xc7vXKKVPaE7oXVtKnSUaQwAAFyJNpiM",
  "key2": "2YLhusydmxd3GpfkUb5oUYPLHySTDGe6eC1djEUu2vTq1trf7Q7541WXmwD1bQ1rAZbyMhJthGRbWokNUxvMch6V",
  "key3": "5G1zwLqCPKaSPaqa3aDduGhvDnuLQgHVZxTTEnYQqz4CFRVFULJ6mfkEju3XhQRFE2sV1VxnFSLSysT9FLBcL23n",
  "key4": "y8XgsTc2ri3uniH9aAjFrawXUv6N3uQsozYjPeKEyaeWhHwtuDjF4bfw6z9UEFrizE2wAmS5SWQKagBiZqHB79h",
  "key5": "2Ysxo1YDzum58FLJ9uS2nDutiuv4JrYcWxzzFVoeBRiT9doPU3PGMbjVF51ig1yLGjAsdBDdFwBGFYjnDxWWLf32",
  "key6": "3JW7USJhgwSvaXMbC5E6pvmZUcutTaiFfn5Gp8EgxShtV3GdKjR2bAnY5BuC2JLfG8JBWyhm2toeGVj2dX3a92C2",
  "key7": "5r4f6KFZbj4W1B15qWCieX8cKLd3LntuyQokS6oCfjYFtuEBnJmHPAuYxLgZG9fMkJqQzdGYoTCdcM2nDBDYJm7U",
  "key8": "3GswBtePrwDzuLbsQSGbioR32vmye6hQsK5UNVp1LuyLRhwVAzPw4MkyzG82UmkZxnmnSXj37UbH7QcmRv7BF9Z8",
  "key9": "iWYj5nDXVozAMLxuNo97FCi8nydVnGZGeFRGaRXUtfp1w4HF3dfqa1sN1jsWJuAtZzPx3Cc6yWjy99zGBRJ46Mm",
  "key10": "5cnCQkjn4a3g21DpfAoU52qzdX5Hax6S4nFAPCU4DDyiS9p1UcmL3GCGz8DFuJd72FbwhTDJQsG3i1D4DsNZKoWv",
  "key11": "2LRUoPYCcP4m24WMh4JFDkAvqrPYQfAYveY4vmHvJTi9Vg8mzvTVqjcQ1oaE4UfRRfcH27k4pRL1x4BQYvXL1rZA",
  "key12": "3fkmdJXjb66qHncPb4buuPAENSm7wbWsW8Roo7fKoEBxhH7KqNQKsVztSmdBAe3tSpNQe7Y1XVAifGoZ7Hc2EbxV",
  "key13": "3Pnt7P3TNwaDhJzmKrKJcA3xJpvybCD8QLmWB1AyY3Fvo4PVk92cQxnKfLWLJ99VnhqSZvU6as5mhi9hW44GCfKZ",
  "key14": "2iUWvbezMUSwLCRcqBBQSueP24CYbGg8aVFpUTtGCZ74JVe9MQvd8wBczA258JgKwyQwwD253no3FCkrraaXJqap",
  "key15": "45Kgr9KXCe6DEHP1yEiK7VBH344nvx39ZBMoTVbZaKcMnrxiMSsWhnH5M3NHQ35T5Zia3xehkF1gRyWuTCVFbGWp",
  "key16": "4p5nYBKH9jQ354kuy4srBy4gF5CsgAqJZK39urzywQjYiftnPEUDuEQ8GvdrPKHr4QetyYBV4E7Ad7PDPif7MYzK",
  "key17": "4cXy3e7CPSKRSsrMEcZ9eSy51RCe44aoWmzfgUkLbPmDVuL1iUrMN85my6uu8d1YbMaTmHqy1f4drUJGeqdfYJCw",
  "key18": "vm7RpvdzD1LPpruZNMpeSH4DZTG3mPCjh8hAuCPSE7swoHfSWcEguKPcX8vXFLBE9Spt3sY7njPKgHqQiLgJN6M",
  "key19": "3PtPTua8KgsaeEwob6LMvSj9DadRk6fbJszLHuz1QDmSfhZ2PpKUrUKVWbpKF1WnaEucTLNirxu5TN9CfST7zN16",
  "key20": "2E8EsvDWuBD6v1zPHurDzR5DWaSztFBZmrRdaWQk7bSV4W49vdwoepEadcgSychTHnBjUkNhtP645oWf4LvhF3Bq",
  "key21": "27ELCpj1hkEndXrsPzbpdoqfjQonvH84PbEuzXWuRRavWA7V7G2XiaSPEbV8tURd5JJXcFxkZHsL4Q48mkG3SG8x",
  "key22": "4UYpWEPkxb99NEb6joLR3KEyJVspr6gKrMCvj34m3iMdWRdmwxPCRtjkpxZnfa2gUxo1fEAE26FjiEW6cARSdgKE",
  "key23": "5xvjLNJL19H1n3yMeVZKRgHzdKk8nwPtGQpbwCht5NCYz6PZQFdhtN4xm24tZAXUuKNkG9ptH9vjGjZ9p4siHp6U",
  "key24": "3kXjCqJq3k7t5TqgBsj3e2NR8XJtTLgvmAmok9LCs6MoPanEiwFtWrXFZ8hp8ADewo85yu65oewJNNj6DBEiQETh",
  "key25": "4xhiGMd8Pfqg3XDG4xvYoNxSE7DRWqureGyMuc9BohhL9Ujc88Qb5xLuUdC31iYrsb4hhDg1FHc3KyUg3u6W8fwh",
  "key26": "54pGN5yPWUsAdN619veDihkbxLTcnvpzXkMSKyoMh2p7REYrXTLsufcrkQt75rQkcvvBoSRax3nKEzmcnqTfSW65",
  "key27": "4JhymEomX1cBzhbzdVbYy8uJwUdxEbEzCuYAe9VDdTp1pKhFvsfYPVuTXnx6A1EF394hwK8R4d98HcQidDLPaXXJ",
  "key28": "3aXtPhvEMpg4i9FhByViM1MFsvNhfDKdnCPXjUXSVwrWhwz1acu4rGGoKHhknc7e7kypecwv5dWBKkhDnLW2XNrm"
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
