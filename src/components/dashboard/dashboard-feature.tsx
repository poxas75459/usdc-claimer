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
    "2sMUunktPfU66tHExSMotbKUmKjomzj3ETfNHPrz4XmmuUcPeGaoEHXP48KarbJHfMnPn9DmbukzWVwQiD5xiNie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K2CnthTWWfAdH13wjeJp9eU6RpmZgV1mCPzKXU19bHiw1Cjum2tuJ1s2DcgjUWMjspUDer9Ji9xHrZ1nUa7GWXo",
  "key1": "4v8yUasRCQLAsBThf4EHiCqNN55gEwkKyKHGR9q3ap9JPaeA5Zpzh2tvbLsQofGQiUK8wutN3EDhhHDyh5tQ4P8z",
  "key2": "2cALPLFXCm8Rp7z8xAX8ZSXZJoR4kcXJvNeSL5KK3QL9RBFmS9gvFZCngBm75E35rZ4bqfy8WtNsPHvkcqvnJ8ha",
  "key3": "5bNtoTo7UXBMtX6NyJ5FkYseNtbktBR8DqP8CtRP82zxSHPfN6tNvB6LS8teCUQfhJD2YsvyHDpkggoE2vT123rm",
  "key4": "fKHJd3PaMinCcm8dPmwMtCkNcM28zRyoFJ6WtkQiFxJ6oo9cySMYdihyg3FPzMeV2y7M2GySD4VDmE5KZqVqsQX",
  "key5": "66nF65z7z61G3cYi1FWm3hwmzLuB6sbNKvD28sSrxNi8u7EZr2rKu4tgu3cey1RBtdvdLYWPan7eYQRRfhGsocbo",
  "key6": "dviTvtcCp6d14NFxrmmZSeCei7st5sid9KssUhzebpcPSmVBFMtydXqmkJLV9wfmd2i4RmLhEx5tQehoZYPgwDJ",
  "key7": "4VvehLo2uDfT59hvZYh57HpQFdUemYaYKf6bbQbjXWAfyd4H5vbxc3sVi9ebscJxegnDiybg4Lh1VmSqZwssJydj",
  "key8": "5wHJSEYvoSZsP1BmDaQbDHa3kBphvvsgK4f79SsKJQPuTyN8y6NPp3mqnnfwaWUxDKEVuaS2hhfFQkz8sb14YTRS",
  "key9": "27tkqCXHSo1ExxJgi8gG8bSNoEFJogCuWtpUPhGY8ARf2wgTfp2632E2XSFrRuMDLEbxnva15H1EfcepsjfxJyDd",
  "key10": "4xobwAv392A6qBNhithbhRk1w9RFzAYYQKLu4JMD7wZu8yyuARHxySooBeguHbZnGSDR54a85wuR8vg8eFGfywB7",
  "key11": "2reQ9nyeJfpVC3byEipnyCBwcvRKfZ3wX59EswkvzPDNjFrhQDbuYW1NP8Bg2EyXVM8B8GMTLh8aWFoA5hdomKDj",
  "key12": "2ehVPBkfSrnnXJsuyRBAsX2nYhCt3k92nZTN6FtKJ5ha1irkqd2gVJgXs5DiiS6QfEVHRVKKS43nDuvKPM59UUfa",
  "key13": "4UW9HdKUzeU9kgWDCVSSGUctVADq6nSTacxBTCz178iGfhrJYS4MG8Qk8hsmJNCr9CGR7LXr6xAA7zXnVQFPZhRg",
  "key14": "2MnFySusnT7xmwui4vXS1zkrVq41Rs5rC39zyRMwFwoNVTSi8i6XH6PDFNryjXycJLg7HarD6kP9dnCr8VSntQcV",
  "key15": "57AXnU8iQwPAU6DyCjc71XbYPRfzHSVNMTi6qVpxMd4oSaFwdZ4vdM7E9zZYCjkSFhQauybxtK6eJjQPLFwX53aw",
  "key16": "3NhXMC73kHur2VyMjx1YGS2tYZsSBfhpkkXyn75CPxXvGmEFh8zhbMVrTfQaJrzmGmuaFRGhor5cFLexApLWEV5H",
  "key17": "449QWK55EFSi7LVFiga3rPAzr1GDk7s3Ju3MmjYZkfWyiFjon2TuaynuM3jmZ6atiJ8NqyRNBVaxjwWNuQXsJHX",
  "key18": "Ft3mrMpKHRNcK9Y9wXd4d8qNGruoMNR9TAhtvUSGYRTQ6QSvcw5oqkimZEXR6BmhQPX6bPMFuwb6AmjC4JeLKsz",
  "key19": "LRnxjsSp5rdHBwbpNa8Nr7rqrsyPoY88yw5zw71S315f9ix38t5hfkKsm12ryyCtdVerzuLXVJWG1mSnN6uNEn1",
  "key20": "3JyWLMowvKMpt1AuRDyLTm5CkLm87egdaA6yCY9w7njPN6vpWBmP81wqkciTvhLG6BQdUjndzWrwoCBtGauXST7C",
  "key21": "2AYnxcPaw91LZERY5ahvMqRCUms6MLQ6HKCms3XCVX7vi2WhBKGxqXQ2pEygD2Rt532urK8WhwRr8LQtNeSN3BZa",
  "key22": "4u9V2cQmML2RmrkrY64rebMkTgF51ziaZJbZYHVqhN6Rg54vqCjcKMSM1ZBXYFY3nMXMtU3ERh2rS8GVRevYex52",
  "key23": "3CuE5W84yybRc1irjt5q4Zeq2PEDF1nSW6VDMdUkBwnULXErpfrJo4A22yC83X75hwEQdwGNpQfUFoDyNDJwov98",
  "key24": "2Z7jSJJCk8Fb1Ghu11nkmu5XyzwjbwNccGqqSEFymSs7fa5f7gECk3CjMoC9fqgSW9xssrifdUegDkwzYJLGQ2Ap",
  "key25": "5MWNZvCL4fj7AvrBvS4ZU4xJ8igbjoaJLVo2mmHsNab7RfcojnoL6G25kWsS8WoLdpNDQGhbSSdF2q7QUsygM3cD"
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
