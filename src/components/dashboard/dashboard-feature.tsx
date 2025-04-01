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
    "3aEqKn9ejhpT8URXB5zrBkNYaAn24xM9zHFVUm6heDMJMKCdrvEhdVKg5S5wbMod6zpLbuxi1LvZDP7YTNwRX2Np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TrkwQgJCEpzC691zNPUht8HwZo3wdyW99Bk9DfGMVTGmwGPtpKy4a9qkLYN46QdJX8wPZ5vkx2tW4mWfKPM2hRY",
  "key1": "C9MqrQH2SSBcWu1HrwpzrdbMjjt1nDZJZzRDTWVzq25epDGbJ4Dhm5vc9PitaieqRHfL347WnHd8BMSG1kNQTWt",
  "key2": "2D9EpXD9xQUZzujNiNneoCBi9ypxs7gXez5spJPFS8rqjEhKZNaj7aXTPrpvAEC6rp8hHETJmPeUnTQ2FKnS15j5",
  "key3": "APM8XMJE2qc16z6gGs3doZTXc6zGpEBND3ajKjYfhR4NzRzCi3mU23enorMk3aB3zkP9EJjQvQhfWk3hArt8MBU",
  "key4": "5N3uRK9N9oynLK1ceK2uwCtwWQKK9zi4S5v62uw16qyMi6q7ZgpyKFBTTNxoub3qMJ8cMhyj8ZbSZeGwiGhA3wmo",
  "key5": "3uyJE7MrnkyZzWRXLBkYHWFoWE1dcbtiNUA2UHTbntqnods4cZYFzWqtMCKJeTkZeS7zfzKs7ykq7PRWqfEYzTdV",
  "key6": "5CzA3UbVqBAfsJWPvDLyRXFrinFf3EsmV4NYtBhQm3yDqmm9wQuBxvFDHRxaSnNcUaSdGsJ1B1ez7BY4n34G2FXp",
  "key7": "nRXfwCfE34V1QLnfQ5AKWtQoR5djnhs6BqCJkj8frDCJ3ky1FFrNy4CznJwXGcBvd8xnptuP17KZ6PSuQxqLCqG",
  "key8": "2urrbfjfw3Z1UAYKC6ySAwoZ1PBe9ajceTw6Y4NV77TmZx3kY3p7bCZ6W9RZdxeDcYZpAhMirz2ToNhD1sPLR5A1",
  "key9": "5dUikMxMZXYbKvX88XkMuMZ54mk3ievvrFg16TBxFisS9CGHbdjwBHGCiRdhoWkZMUGHUkVU85LVbWhWefGaKL3q",
  "key10": "2beAzZMosKMeTTdGVm3hDWG6emefftZBunxcs243TazUTM3BzZLthkbJ9BLwbfMP9jwKDDt3SjY1zfeduKJNE5Sz",
  "key11": "5QQBriEVXU29vett4Vfqmc1M1qjhQBSbYPZRDQnipSb1rM7jwZJYsVMXKa5uEFCaH8bWsVjjc4u1AUTXLZKQEWZT",
  "key12": "thiJq2vBaTTDb1B7yPn7XGyZ23g3PpK8csDK9mXmRCDptqMLutx6S2hYQ2d2bjVTqTYRfZUcCxTTB3zXGktEi8L",
  "key13": "7StiwQU8b3hr4wNiYihsojTHgUbFRfCaeZZ5sjq2yU8xYZuYMjWa115QC1KiWur2AQBxwDhV7gMq7Nvhf5BUypp",
  "key14": "2fwLxgCKrRvEL1JH6KNTAnmzrcB8vpQSK9aLbiWiyaZDUnCCzM8F7ovKdH5JzEMFqkbApDAuLBkN3j4wZ6XjyiPK",
  "key15": "3aNQf1F1VVmrQSek3fHw5zVb9StkeamY6Kukb963g11Z3FDK2tKayVkWtXEVc4xsHWNKHWxmEfKaMFbgJpFEzP4b",
  "key16": "2ZbvEwsywC24qkzi3HVTJqRxCcJ2SP3bdSrQfFBcXVsbbrXYV6KtZttXVVM6gUToEmveiHLpXtTRQTn8s7tZdkXC",
  "key17": "2mntomxC1LofVxwSRVRos4inT1iUyYqJnDCeGFvqJYDFBqae89gkzCFRv4NoGGGRVaoPfevV854jCGFo9cY7qQGp",
  "key18": "3SuqyFiQ2p5SAnfVqznRExdNaQcVrbeBGu3XPx8uDjX5hvgpip3e8QweEC6nF1zmbxDpgr4MM58Wk6ne1TTBj8ce",
  "key19": "5bPgqMyv483qR7HGdqdj3jPK6wHNALWJqkA1zxQYxZ5ACYzP177BAja7K9TJBX6y4jaA5fcFP6XaZUw8F8cEQF8B",
  "key20": "4u77Z512stTSJc8rk3a26QUibjF2nzxAJaTfqNge83gGnMBmkqJ3c57nUzn4XpoTMQSuB3qVxWzM8oZCaaxe2GF1",
  "key21": "b7gEUa1ZRpArUkRWJbZuvMqiXKBvr8PLt9VhWaYbP6XRuNAfrSKq43y63rwwQdq8RGE45iJtQ47srKAusgdgomU",
  "key22": "ZgWG4c7PrbQ9Xsxv3bt3UZyhRELHmDxLBF1RnCgCaGX6KPYUNdfScpNmYzwXTALDDV7gjctynTsSYTU6qzE7KxS",
  "key23": "gTuUikVtt2or6BUFXp4oW3Wu2tKcc1VFRt1x1kYDT78bDAnMjy4c7ZoGmbRx4uutpaJ4hMGY42DbKWLtPQiwZos",
  "key24": "3ziCw3md3rFGaeJUfuuKfVQpmBpAN6p5Ne2dZspYqAuo69dePMXi1x8B1MxbxX44UFo8ysqgh3qfRPsiPNZuP5Sx",
  "key25": "2Rok9Fsq5PGgvWp2YauX2U4RttRAoDAZRrjaai2Mek54niKaptc3bhcEG18UnkqoUBAwei6hkKvYos95gDoKtN6N",
  "key26": "BFCPhCKELJgjEC3JbnyEQDkRh59uk2Jq5ArmCG4WCfKCsxbjR4vRodrvKWKsg8vbUQMz8ovCHLXJBnNntqR4y5Z",
  "key27": "5i8jqJ3M4pGdG3RNdc42aGgQWxcnnxCHdGBFRqkKoz3tqLdhVv9jb1av16kC8mLQJq2hndRdTP6rJERMt65bhBaX",
  "key28": "2tkCvPkD9mcA5HibjSqRASnqHHiBUZSU5tmYeJAwXaKTt9tQYpHR8hj3KE5cnt8W7kPbsQAQCTJMpuiby1gcCKYW",
  "key29": "dg58U7bg156cKZ1qgXnTHThq4xfpxbHqimmCa5epUwKwBgVb2A48V3odnxAqXxFW5hxpCXZCjAxQmvve74N8utN",
  "key30": "2YErRfzfuZcx4VouQkELQft4HMgGqvvDcRxpX9UZLtivpy26aGiB6W2JvkybC7aGSqzAeWcQhPHwYLzvC9gkvqN4",
  "key31": "3FLfjEbRj5WxFLSWYLUsDk6DpBEpvnqy6WLpiBqGPj1XBmJ1xJc97hPf3vdxUK8vDgve2fnP3dGa5CHxNcQrZbEN",
  "key32": "28GYC8CWfL3fLitrmVPHqrXTntpmbPJQZ2yuEg5dBbeGfvDenmXeyeyExwhYV92AhVmfWi7AfzAEZtmRS7a8sSAA",
  "key33": "4EZgSgrVo2MbByPesXn9qkA5TTDaBmS6cNchJGSQig8WQ23AsDKjK5yXzbSXaQ2GAEkKq56T8usssNaNVQaYEQBs",
  "key34": "4tjeCwm2DhhsVtx5PPFxrvgBp9CrKtrb78ihdmrfA3CzFjyb9BS9nJCSV8kKk1s9GMnWxkvoaoUpMJvbQWGdid5W",
  "key35": "2vbV9nsMpfUWtT8uXMWPhENaWzihyE912cqtuRyYrXwqEaVQWLVhsrWSvW88PQsSaCF9sLDLJFp23uhQaSGA9Th6"
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
