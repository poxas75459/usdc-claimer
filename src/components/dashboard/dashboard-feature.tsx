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
    "2vFrJxD4m48HBdtTai89XKwgYqyqfZZyrXsj2nnHhjKiP84ehDMWdBtm2wp8wqTA6Dsc6WHJNw7hhLnQiC7MUuqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3huWz8xRTMooCcr4hyftpzSercpmFvSxTwkxPJE4qDZoNDU8hknsAybuic2FTSAvYgKk6s5VPemb4RSaL4hDo27k",
  "key1": "5UdB6o1991zEaxTLZUecQvYTP9WSrqBRKhTWETtvN9ASkBNnH2mr5R5UFQcM6YzwQKw6rn719E5PoPoiWPSgTG7d",
  "key2": "4nKiYNnEqgjMUZLwn6gmyWn8qP22vVzkgekNUgQGRcXJd6195rfe3qvawgxnmh5NpmdKKQVQjmC8wNiME9XTYvvL",
  "key3": "5KNqMnACAdZFepqirjNe5FxSzMHzSniik93r4YQMndkuHbs9zqNTKBWmRHc5Fjja293hECvKezoYUqU7ifoM95sw",
  "key4": "2gfKskGKYrutbvN2BfWyohp6JcCjLxjTfjC4bb7c4aTvEuy7yR1bsEKX1c2fLK1Hf8r1TsCnKwu3EQjN9VEePj46",
  "key5": "26X48TqCqRPqkvZPdwigiV9SeWnRkQLCigTorgWJFco4wjiimV7o2L8HJP4NCrahNCeWbkFvWcXwvUY54yJTp8RF",
  "key6": "42NKrh4GcmxB8ngCmb2HFGBwVde8YRPEp5YEWCLfHJq6pndtPZAHr1To3Fhz3spwz9qjaJFvK8q8kPR4zk7p4iWj",
  "key7": "4AtazCLoPLEy8W5bBoH5nD1yvfb36kcwkaPnkR8rrZqfLUm958kqmnCHsjeHMHsSaUNoSBpYogVH8z5RSD2awgMj",
  "key8": "4pfDQKt4mriW3TFegLH1NYdMJDNPhGfoTK2SQQwhhLj9ke1ekitbrMxTfG2UkjkLGaW4NM9vp71daNfWMuUeUu1j",
  "key9": "2hDVxNWZr7nYpHMfNjFTgq3MXh28bmbeeiw6cVBwyCPb7nxGa3az6CfVzxvb9hiMBbfPfXjTRHkhBWSbtX2eNy74",
  "key10": "ygdJwLpE6su65T1AS8aLsvQcjeZoH44PWRf3dCVqzbAkrBSmEBQP8apGeScxwyDzXDe2rSjnPtQp4WG3A8XBBnB",
  "key11": "62FCB59StbNwCaNFESrPVpgKAC1uZ2TzYAzC2JMmZymEMnvTt99Ttw3DgKQHxuwfrKdDkvj3acu3BFigHmpe5eGe",
  "key12": "2V4rSQryYg5LmupQ5JPwsYvsmkrmXWZiL5b8MsHwvnSNbspfomHftEn64cU6Y6evnhYQQmFpfso3LfBTDJfS9Qms",
  "key13": "2UEbh9RoSoqQLkybhcZgaDxw1TpsjDY4Sf8TeGqcH3MtwrQWHqU8ZY1puW8okcpP2TGbVfFHnVSE43dt6S14zfu1",
  "key14": "4i43To4j19oKxnVd5YzXa1W466xcJj89mgXZzobYkCP8MkRMnG3Bus8ybYz3MBapzt7osj9h2SvEAJw2kTJMMWqP",
  "key15": "2j4GAEY31cPAnCwsGqyguWVjMyZG4fkd1h1gBvkZiBKrPSsApqLiB5DyYQhhNZzDutPdcWrsrJ7tDcwJ7h6iFQsw",
  "key16": "QJnkhJvVXRti5r8i3PwhjzFReCdc6zz21Fnw6SbF2fau4wh6KpR2t4NJj7Qj36eSf6AvhvE2iBrg8Vje83VMu84",
  "key17": "2jXBSzkwFdexM3GncJQ5BrgdycSJ1VKn47yHq5d7feJx3dxk91YFUHdfUFVvQPCcV82f6239cRvJL61wszBFWsHn",
  "key18": "529CCtn9mSV56ymNCXgdSgFyYUPsC11UuAzup5ii3BgvqjaGFDTxQGkuz5N1c5UJg35H8w8nPELgmMV43owGtUn8",
  "key19": "5drM19kTSvgTPX9CZ3ADk3QG3dU8zMDTe3hw5Zvw4mW5KVsDLqWACK7aUTrpdfnN3HuZVFxLwxDamZjkMnUPmScC",
  "key20": "4bNj7xbuZXNZQERf99MdGyKU22cmAkwjdYGQ8o6TnrB6CTZjAZigQjcTDN5aaAn8dHuYMtgkhHVJtH9mEVGARJo7",
  "key21": "fbn4d1QY9E8VN7NUUVs3Qg8u8VG9uenAgGLnZMfoQfwAdPvQNvc2Zjhy6p3mRQxVK7efmVtCVzp33NSsurftFpL",
  "key22": "nV4z2urmddhKAbV6T3vXi8SXDVTDAfXfsAEPY7yMCKyxZmh8PWUNBMavKFS9YAUbXZdeiE9EEJU3j7GWSV8y73k",
  "key23": "5xwyzwRYihfWWX9bEpViaJHpYsdAzija1gJJVre6GDXbpQ81vjE1nbbHAhgXiUh1Bv7iHQm5oZqqYSYAm7Hk9cjg",
  "key24": "63o4UdiyY6HZTF3tKXg86eSURt1dUG68rP5bQVCJHSQm9fGqq6AYzhcmUfrZ9e1D4QC7P1AnH5oiB7CvuLZMsFuR",
  "key25": "4Ec281pCtFZ2wkx7CfsJUc4jngf6ETpWbWZU5u1cT81nPDJaDiLvhtbEP9SBUuqRqFXarmdezFKk7EpHoMmFmvAf",
  "key26": "9s99AkZkJnvW5sJzbZkktd6jB9VVPGSb2JB7EifnQuf5zQkNGUxhgwwUyW7LTnvphfmdekF5HMjvkvBH4BwnDCY",
  "key27": "8mcD26WfZGFyZWiDymGaRXeUzyY6P6bAGdCeFswuW8QJBMTcceMo7EneQKbxGneGhsDEy1ZNvVtKna5MurJtRUn",
  "key28": "4JBn1gNstfesd7mg2MJ2JemsncySxnZx1yffLUk4J2HPj5F15FA5UP5oiB6LBLqMkhhFcgYPE7zoMMudhutWUV8Y",
  "key29": "3FHrDFgaUXuRCKAjRvqM1ZKxGf1Pw7EeeRDz6kUXNYHaUjqDBhEheTgpVkEUmtdkB9octMSizyBM7Epp2sS1hJj6",
  "key30": "5HYaNGbyeaYhiVisbNeqCphDKPaUsL1im2KdhQLTY8JfusVwj2QxD3ryYYcpjdfMSEDuwBpukYyLK3CoYMron4ow",
  "key31": "555EvuRV6jj6PP6HNMVydPxxi8fGKcHzSn4JV9ZPK13ihctKo88HQB65xagwm696UAHNu8bSNQjfjudC2dh7op5N",
  "key32": "5FLFNNvjJdXXWyduUqM42BEu98Amc4vwjkKt41Q1Z6p5nWxo9UT4d8cDkhH71h5sXzg11XFqUUPSxoin1JbHxPrz",
  "key33": "1zpBbkUAfqzJ6HXsBWs7ZHQNm8cknJqhsYKpxffLiNX8SNup6mCTzf6osRPGqN3RXRLkxkN1bnHYHz39GgE7jKD"
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
