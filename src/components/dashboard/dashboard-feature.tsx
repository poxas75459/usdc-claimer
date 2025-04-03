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
    "FJKwPhP25Eqk476koaH4nYFVyvRpWhrbaq1XGmn1DvWhUDuiVsNPHoUzEzV3ngX5GChdw7xAqJL8D5EV23qPYdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EJeEoj28tj5oHwgCppu9puNBErjLj4wWsQWZs2nktEgNaKmmf2vHSKAzQJeViDsB57fPh8gqtbDZGroiYGoiHeA",
  "key1": "3XSJKoGjkXCeJXh7fL8C53a1rZj2vSzoEw1E4VygpNH6bQg7ZbCZnUVHToc2MbUBumEemv87rPt5KYYXVFn6Abvz",
  "key2": "3Q8f9vcdTzCjb4JWc5heXNTcktQGM8S6EjJcRY9oNwUzUjnza3jac8dn6hC2FxMufwx4Ns1UtsijgXAz1S5B5iq1",
  "key3": "5KDs8WvQ3VLoN7bgLJhHQo5JGEKwQxp7Zqq9hYBDuCWAEfBau5nYL5Ax1hbufyuSjuK8EkDbWszDwe1akPcCsLqR",
  "key4": "54vL598KaaYmoMDZHB1B1VXZzzBxtKaNNfGXhqWmc1DUonsrHJq3k7JPqY8nnoY6dk9QnTawXD4FJfeweWTyT29c",
  "key5": "3vztoYPg1seXZKTVvG9Z23M1bu7hH22BPZXWLHF9fy3pDZYeZPyECbRTCXVRrSpeq2poEsGqywqsBMiDE4heF1fs",
  "key6": "4AAFkJ6VogDMTt9SrdRfDJ1kopcHCVLwyXKRnuwdA2MV4uLFqrJTXs82WBmkL9bx9dg5aZwcfJfhcsz6Kuz7i9XU",
  "key7": "2rcMwCXrPCwHgKPPqRSf6mL9CqGhT6cawbBhmrtK2DPLLibsCC871Aijp1Yyw55ab5gqpTHg8cBy3t6UkW1cSACa",
  "key8": "3bm8LGmDwHD1G3LbtUPSC9RD875RUQuth4WTmFVTnfTb9s2qGjRDcaFMo43TUXjid8oTtKmsMAXSMPbmeEuq8hZd",
  "key9": "5hEKNjFQejR2SLS3gaobgvskGDBWk7XjYnMcqkKcxUw3t2qKZQpS5uA1TLgscCAYJttohVPQLyLLruzbX7SPziP6",
  "key10": "2dWuw5BiDCPsfcJXwiKcQQcJwQT5GN7HJbdYRSZBc6CaTVmR4bzaYGceSRBnxnVLk6ieJ18sk1pGKATW142zfeS7",
  "key11": "RhFYwPXawgxBTUGYikjgh2j2tuURKTzxETNue1ZSvRM3JBixbWrSDJRbChMzzp1eHN5G6oxTNfTMhaX4GRh5px6",
  "key12": "2HHRF2iVsn6dN2PPfpPmRRXeHBPs49TD1GqFAXq3Pkxeh7kPfgg66UhEAiugSjg6ZKUpnJJJs9EbSKBpvTWztfnR",
  "key13": "5mT6oyGna5BjTauQwcbYnEyYnoom4X3Xgmpm7c6S9QxFuXCreuMRiSBiJC8U5Hc552rF12WzPHZMX7LXcLWBhCWk",
  "key14": "5TsSzmnMbQewWGAMWxanLCnXnxzKyFbNNGBNcJUayvipoNozmXsprznQ1bEM2QoQSdZKyX5YgMuaZWW5qRwyWvTb",
  "key15": "4TPULHbhUXqEEmo2a6e25VcnvpdWCuR6s2tEHRjboY5WTfwrPDBdXXjm734dvrtge7q5Vi8WWfyRjNeVQXgKW9qJ",
  "key16": "mwMpD2Vh6DaRdrUchuSEmPJZBr66BrKyaBNhGRW3GLRNwgETn66zjKGQevC4GxhzWE53q6FVLkVaUkfknLmQ7mv",
  "key17": "R1MRwwwhYCRXkpUhS4z5bPp9t1v1jX6qSmDkKik9Hakz5ujk4bC9ZijVrgL1CJyq1X3S3Rn4EgAxbth6YLLnFTK",
  "key18": "54aJ4aD7PQD2vs1pjCderqnuYm1nBWWUyvMT9iG7GseZfeXFdcBRRF78idaEczV8v9herHqs6FTHS4gjBeT2WcJZ",
  "key19": "5gdbs8JmuUXxgjHxKC54Bmoa645JG2FqNHLWZb8SNdordkYB3vbGRVGFWfvimGC3ZMQu1VdTAHMgkw7YEw5E8QMw",
  "key20": "32W3FsN35ggLYT6JYnj3AhbAqkvLmTCsJVzhc1SpBonpsx8KgyCvxgXabY4EHBaKtzd7ZrhjiaVpTzv99VBs6BjP",
  "key21": "2WWA8GvQE3e3XgJKaRKMUxBghBVgB9ZZGFZvcjCGrG9mnj8jaao8dLDZevpf9cPTzoZWYBYhqT3mV38NU64DFKZt",
  "key22": "4c8VKmdqFWaieZ4YzqCMt23yr9bF8hPtA97e8YUeP6gEamEgwmmAnQPVGeLRiG8KzYQf847QAs2TTCYYZYsex8Na",
  "key23": "4huWLghfnbnyAiaUYREZWp4p8fpGxREf3eoPtm7L1jpgTSMpU7evQMzC8Pzi8ZpG36HeQ4xuHB5D5PqU9ppx7EdC",
  "key24": "3WJZxXigo9zRfQqdfvAaD28z9ePGLFG28mvpWUToY4NFnwe8K5xzY5BRuFyPoLzUN1v1w7H2aj6tCwo76kDXa8QA",
  "key25": "2rAhZ4yRKbjDTmxKguWo4p7zGxVaakPef8UZBjotPRHRGDeo9p6V6WiHxz41vjC3c9ch98sRvgWijqosq6uLAH1p",
  "key26": "5mMkyXAG2sksJ5HCRDQtZ2yxT6gCAaLDkteWQdkY22BkuVFtDbuxcGcsNzmKzsjvpQZFt623vhGpK1GEA4kXbMGT",
  "key27": "3tqJ4rbSNs8kCSK3tLPrqsg3GctZqex76rJtp4eh2nt6ppuuJ6FmorS2WcpNfxJSdhv3Aojo1mtc3MLBdz6AvSgw",
  "key28": "3GSz29cbUKSqdrz4en3e18TFHN34KYGrBJePEMY6DTVtgqWi3UvUhSeMW8K1whj6xEBbnUtYnLWvUwfVueXnrMr1"
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
