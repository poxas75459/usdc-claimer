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
    "29N5sFeGvcU3abtmoWUyYkjUws3tceqchdWU2tMYzhSNPcJzjWEkgRHWLfCLjDGUcaEZZzmMs3XAbGHHPkHKtfTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SMdY98kXAvWskFrRcMd6wM7DzUn577FECgf8xo3nFkiqYD6BE6X2xgjoNJZ81W8ikwbzp7Fwah8ct4LZ4akjw1L",
  "key1": "5hSV83GaMtkFCrCBZFrEE1RXUAsUJwXr9K9vFuvSM59THEaB9sVPxTZ3YbgKoTcn6rtJknqorEDWmPG4c2HsrfCJ",
  "key2": "62zX5PHDY4Abv5Wk8eFCrbXujYiuiDUx1wSg88z6LBBsjPsPBU6ersafjFGYbg13h2JC8U7D4yyDwDXGrkhqT6XN",
  "key3": "58a6As3CwGgcz8grHHpToAGt5iNAapTY1JCTQsVuAj7KYfmQkMZjCEkZz3qn1h2HBwPeiNgWkbbEJN6UaGG1VR7J",
  "key4": "gtBhk45tGyD6dx57o3uC3dPvqr6hLGz3YyUhhXGc1V22TLvdywRkuGhNfVVAeLKffZCKuaWfUTBCTWkeq74TrBw",
  "key5": "3NEddG8V3bJwN6vSEaDX2MynMSKG6APwap3Xn4JBHjjwoYLP47ur5U6mCkGMAfwyrHMzTKuRTmu7rrMdbo1KXRuF",
  "key6": "5dnBF3WPyfKjQ9Jb1hPEwCNx22V2WGQfaJyRg5S43RfjwWT6FeSJQRsq2cktTPEfBf4P6Xc3M6hxfegGyLYRtwRt",
  "key7": "5pqk5AxBVY5KfdPP8BqVJ1HKA2MXXR9TkgEYwLZEpbnFtzyZT28KF49rkdS6Dn8W62PnKoc9YfRdVRLdug3TyWqk",
  "key8": "3GK68PebQ6Nn5Npzr3P1KLfULbEZV3mHW3czb4NsK3kDnMpJpuvUYkEJhNsyhCa1rJd6ZmYwv7yBUb83oJ3dXZ4b",
  "key9": "52hMwfsBEW9TAGtiGKx7jXvfNPcYKy7VXcWhCxmfKMUD7giaF2bD3GLm7rG14CNeBxJLjcvMVwNiBouMgceuH7jn",
  "key10": "62yfCUApv4fkwcDmZM1DsVEr1Urhb8w1hCHFEA42Ri3ABM55RyGcZURz9sxnPDAC94GYCJKeBMHivGmjmj2QMvhW",
  "key11": "Ex76eZR2F5GqGsLHfPqn19K1Ux9Dq1cYKTRQMNa2gUeGvdgVkgLE6M89wUA2CeKk4MBUnnwMJC7nLyQu5tHe2kY",
  "key12": "4hYBnxLKGzRC9CSL5Tfid8PAvdzUXkJxu1cMu8Qztm5EY53BS2zqZsGRX2nrjfqC4VhW3ccJhuAb5fB3T8aQBhbK",
  "key13": "4ru9SFSenT6WxEAfWzj5ENtT8L6ikJYEAj9rDBrdav1uxYNjnWaCtZagPRYkHEFegzLEZvpGr8qgjfNQbxVPVcK5",
  "key14": "2X8nJg6g4gNgRcJp8rcixFSZNvZpiLGSmRTjWUVQbXKQm6SzUKEkjdEdBn4sEJjXh7dnLDTrr9Q5f4iED6cyUYVk",
  "key15": "38wszve5TXkrjSwncMbdWJanB7HHVsEbFXepUtUfWzaneS1ad1uvDyqzqK2cw6pVSWFAaZ6H5ZzTwb1yXEFqM4nN",
  "key16": "2q1r5bpcQMv8Z3YuywJarqeQAx8nDUPRCPJFJNVDfJGeYvfXhm8cdyeaj7dssMDdSCDfSXuxZoRXdPBNd7JHZJYb",
  "key17": "YDzGmKLnr5BMgK3gCeFBPWiYS5z4m4oVb6xD9KWQ12VrCaycAhNH8CDuYKNRrTyLkxLEV6nki8WyYZRTmysKzJA",
  "key18": "QFtvMvRUdHrXh7napMkvh9tZEcCxT837g4hhrV4hZgVKWNC8imPEG7d9YZCfsyYPqx6isrCgkp6VpNESoyFfxo3",
  "key19": "26EgX5jUFfwU4g5wJ6yM9fmQAmiYcbrYFFiYpCgHVmpZr7hnsKVWdpX3UAuSqbVmS9db2u9xgM92PVmkLjAcKfzb",
  "key20": "X9VBKS4r14YBYvhm9zxQMKx3eARVRrY5dJodWCNTizHeHoR8mUjcxp2EJDDc2eDyYpFf1L5bfNQaaNcN1dBv6Pj",
  "key21": "4kqRQUyoUkswf1mXzL8tjnUM2aKTzZjvhUx5LJMR3sNdiCuC4aU1BoP29SvES1h3vysUbvdECuTSXhKbZPfbdVZa",
  "key22": "2b9PHvbH67uAfeWSC549jrotJqbHLkxYgnD8cYBasYQMA1PSkPKRjoUchM2kuVTfQZcBVJwX5cRRytn8521hvWhr",
  "key23": "5qK5PRnuhTcXf2AfTNXY5h3K7pt9EUe8DM4RxjyTr2SkS5iWkNhjsgJKMmA1vVuUotCRUrywPbVPMGAYmUjDKBgH",
  "key24": "LwJ9pvr4e5FDW4JCNrgdHErzBj5CPB3jP2z6L3jQ5TGD9jXtmTp57WDvMyKD5c9vcdyCYwtQRqYTt7YMyyJs85D",
  "key25": "5SUEq8pizQJjBHeEZX8gTFVjmpw13kG9xiey3Zmmk1y6DjNBU9Dho2UXXCLUZQPinwvhC447pGMYzXEeBB8smzFu",
  "key26": "4vDjKvfK6XjQKGQC3hjwB9yFSSPkDtAnGNeGKaRNSxvXEVv9WLkgmEzffpcJHAvWWvDxrvfiyN4w3oAkM5a2naYm",
  "key27": "5h8yTRh3E5MLG3SZKvNdnGQD8CeGmofFWJUAGb74Rh5mALE1wdfcqEgm8sXEXZs5UPMug7wYMjTt1iggbYdNVhyh",
  "key28": "2H2SGQVMux9GZeeN8YWJumYFNo7a2owmLjmL4sHQxt2KzZzYFjnaSA1kvGW2myKeUKu7wa8KDrYJMK7L6JLHFWMx",
  "key29": "46PxTK9RoDUvTmQDgJCNtpKzNK9qDeETgH8mj7aTVFFLE8jrfahkcfY5595rQq59jbmzkT3PQj8uCF5bmPKbK6vt",
  "key30": "4DUsGE9Q2uuF1PhJ4ZN9bPct6yMiMaVfN1crTAvsNT39QxJqUDe8c6BGgXrwCoAbNEfJwRoz9Xf52rBGQyGvgsxn",
  "key31": "4BWf7vHMRq2PMYiw6BpxZ1B337F76FX1L5a4CotHnvnHaDmQPxvnsqKQiqbuTw4Wx3NRaHH9kRazqGRwwhXEAQFQ",
  "key32": "Zdma4QqcgTHcvvWn7Cd6AUiYTEQXRPkpGGUwac1Nq3bWnqmT5zGtKeWF8TXf7kXbynParhXTAWWmjTi7C4VdtmK",
  "key33": "4jiQMm5ST8CadoWtKxp9YdpvJchkh29Jhm6tvG8e2jTSMbtVBt5cNQmkvAw65SBSHdj9RkZdLyccsZN4hbjUaiDR",
  "key34": "eyNkFj6ghwFRYhsA8ZijxJqgQrfryb2Jid1Z9JXPvjYtuzVuo3HwRjrifkwA7BsCma1o2AX2NjSTpTE9A56WHXW",
  "key35": "zVJPZ9d7vreKaqqNjS6p3nv13bL2PeBNi9syuP4duQSUpKaTVAdQzEMbDM6CrPJUJCKQLn96xjDRthSPJJ8qmPB",
  "key36": "63BwnSnLowZjmHr7ZAiAfsBV9rTJNZgzuWyHhgyTVSgtFjVhNqyhWDRXuNrpexPQQAZz3EbTXbw9yfWzSs7eDw4z",
  "key37": "5cKKUjCfQdikRKaUpas5D2HmxH19eL9hfmnv9cA18tMsdTyweXWxc95jhutXoXxHpYcvjHPTSkH4hUaqXnszvbj5",
  "key38": "2L5pZf1GefxSmMTXHQvDsZie8Jei2omxx3BKAk34EAfwYhUqgRoLGBgGktwnRwECCe9Bq6NSLfN2FjGXTyB2Zfkn",
  "key39": "3wNqvqYi7jPDKvCAziVF5DhUJDKehNPSkFqDom1RdZ5W5yYnnBA8W86pSh2L3hrsAqkeuwWdQS265NniJfKVpgkH"
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
