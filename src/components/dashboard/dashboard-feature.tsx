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
    "5KhfDiGzW2R5oUREBYXUnaW1kzf253AMyf9HBe8ekQcvnt6UqfCLxxdvZ7Qj8esw8BMvj9SD7LPqUipoSZYFGrNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PGHCsTGzdKrBeQ6fGTUHaSNU2gEY6JdyRf4mbhsHJUEsmLGfN9jsS3sFmoaKFQR7AYRQkJvXvKfYZAMQnmy4ume",
  "key1": "3S31vxjaA7vtwTVG1aXBQfEdHJntXtmAjuwrehGkKde6YDcnTXW2PuivPphsYMcTXUVbZGee1k8irRihUQawdmMA",
  "key2": "3Rae6ivSZDZ4WXnFewTCXyq7crxnoJk94kXCFhoDcARcM9Q2JJftxh6tfQeyjRsRsGPgvfWnETQCw9bnpqqfaGAR",
  "key3": "3pQNujdnzZHCJUHZtiojof9NQRo84bp4ebTCwxGcNNGZ63BN12AqD2cPEQC4MGho4LXFit2w3i1ZcXhUgo7vJYMc",
  "key4": "6pQWBGPQd8A6byL9BGZxBp3rBsoKPjRK2RcKyLYK9YfTW9AJZfyRKKnyiEShabBpMZev7erFq1z8BDVLm2HPjTt",
  "key5": "3YDteMemMDHKsYawxwNWGssJaSKbAX4phjLdaH13U9yzrWQiGfCtpvmdxBA1DmGxdYhmRLANLz1As1qYyTNhqFS3",
  "key6": "3yFrY42sHtmH8iNGbB1qdLvn7pNtJCG73iKv8eLpvgVE89f1v94UvoZQiX3GgsTdBUfeF6xeNh5ENZ5Dz4F8KhqE",
  "key7": "QtbSQqYEAWTA3m2F1bBen5JTY5gYek92hVegqNM4d1UCN8EqFQkUdMJkLQnckzi2RbEExApqCwHTSKLqHp8eRsb",
  "key8": "2F6j5KwnGBWaqXhuKbrybQRtPLLqRmEP3PywBe9yVGHJVYdT1jgwrAvstFuXw3ggNH2D3MEUe5HyW1GMK3Gw5wMW",
  "key9": "CD4QgDgLMkgLZk2ium23fMEoZrNgRq9QrjwjTFfyhLeWJjngCJ6BSVT1GUVeJeRApzjaUrpfkD3toCvcq8a4zNM",
  "key10": "4DajNS2HPEnkgTYoJpCXjSA1udSpTJgtb15TY3ph8uqYZKkqZNWWxmsMRe2ZoeL271vAmK26DmVP39D46pUGXgps",
  "key11": "4FtT66KybMLxJ2c11RtiCH7Yu5uKWEDtXWifn95PzwFPs3N8P7JGVeZcqAAUCTS77KT9idQA2eyLp3gHXSaUK8C1",
  "key12": "5Uwu5nQ74ZpLBmVTeBs22NxagQBqfwzMdjMsSDab3MrcEcAnjEvcsBcJgRCfQjWhp5MNNw8DCYU6qvtNaqzMCoPP",
  "key13": "3v7fMTkEe1n1bE29Cc7EFJwG7EWPB4VFUEKnKBPRCS1jcZtv939Ne4PveqpuZjrt9QTCBfhAzoga6pKHXJq1TaKR",
  "key14": "5LYtdM73RFeNb787ZCnRH92k36At2Dmibbnno4mFswf2RFi94knfgYcXUC56QMJqMzpKjhU78T3ACDZB44aDY6JB",
  "key15": "5a3Q68EDeE5jc3DwMyKg55FeL8Qn3kp8SqEEMEWQC2AETsmySAGTS54evuHH91WuzKhkzmpHWHGNPyacDHuyrD8t",
  "key16": "3N1Ji1FZ2m6599ALxQ6kFKWQqR7vRM4LNcpm1PoxnBVmQ5jJntkaqsc8dS4xZrq88ZGe7cYmpNrSMSchLFbAksGa",
  "key17": "339eu9rRN5bt2E2wWRyUxcvHLfyhSiEKFxXJ8nCurHRzY1WXYcM4mu5NXoBdiUfgPPCNbzw3FoWxpprCnSLNY4Pr",
  "key18": "4qCYzFBb4GDdfTc7QivznyeBpynFqkSm8RpwYcHjrHR1yk5nfoW8iU1uWDRJkojP7V7QfPWck3CXMiT39npGxX5f",
  "key19": "3eyhY9ztuhCVnYzbxRkEU4dwTE7MaD2SnMiEbapUwqALpwxYHTGWKibQcM9bqYs8Cym3o92aF7BSHrU745JbbDai",
  "key20": "2FZPHM8C8RT8rnoZissyagTmaaVzJ7HwmZhwaTcQD7uFoPpBuTbSrV8rnWEhPgTJAPPDC2XogTj3gPizxWBy4yn2",
  "key21": "2tYUxpQg9pxVKgH7VAnMUFpL5XD4rozSrb2q7MpkWPg9VxBpxM2utdMVnGRjBoQSh7Q57wYRPL6gYT2ZgbHjgWiZ",
  "key22": "pmQPowaFKfECavZZCFwwFFWGZDsuF7SvDebkGHhS5Mt2GmFqhL3opN6oRUVY1wnDREBpAGG32pbgs2ArBveCBSN",
  "key23": "uAnwn7NGpBF5AvUvH3Y6ksGKATFZtgvHLRR7Q9QmwrBwRk16k44acmz3HC2iQBAbV6MHMmXHgnJ6wct9YmWReCp",
  "key24": "4Nf3UQmJxN4Fx38jDgTp2XiXq3uJFSDJcdtk1AneDWXcPX25huArZARtERBiVWTgAozWbWFoM37CVaSki35FXMi4",
  "key25": "39A659XenaNSMXDjTgExM49LWs7Wm1XV6gobjuMKoUBN2rkqUNVdy6HEXMgZP5vqtX7t9mG9nVao4nrvUcuNiZUu",
  "key26": "14woyTSY8Cahhi3bQd7gc9txeesEg6PVMG9sJScVoyau47nYFBo9RymN6LYCzeGQtreEMoyPhaVy2WYc986Zy6W",
  "key27": "25tX2vMjDb1BSMj9fXbRaoYVf8do8znFxYbxunU1xiTBPFCsLC1MRApeBEuterW6Xww4XVZ86ctbhPe7bJeP617X",
  "key28": "323skUnx6T2UyhFgHjh5de5xv25njoYwGzuDgqbex9pSdxcCTpJXVAgeJyfi3NQ3m6rpDWhYH1j9cWskCuRiE6k7",
  "key29": "2tBqqzg1sgH1Bu2Buv2qTS2crVMN9XR7RFAYKkH2U9ufiPuMnSWQycdbFRCv5XFfhswttMEu4Uoh3MN3GFiAbTAg"
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
