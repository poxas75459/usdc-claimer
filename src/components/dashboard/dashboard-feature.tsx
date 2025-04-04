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
    "3u9yWhkbfJ1R4RDocWisw1zRb6eMWYc52MRQUCkrnN4mD5YVYJmBZ1YxCh1ggrErEBBnbiSegfTtUXgeTQeHBLQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ASJgZ1rfi7jwmpvDfcwnEpN856q95TU5S3of7uiXMbWiFCFavaevrq79fqdhbgJz4G8aJ5d2BGR48CdEXqH5nT",
  "key1": "62MfhRcjovyxP6haXqqx6aiVE3y3mMKN6U78zKJeGnyPADEb5jcgj8sFZEJnqXf6bMVBCuCzcJwdYKCiyQbFbFJZ",
  "key2": "iBiwVQAdSGiSdvoqzCb4H7QMAkPSAfjK7gqJhXgN53gao5vBMrVFfAqx4QD5xwHS7NcdTBirxZppjDtnrY7jxwj",
  "key3": "7sDDmdc6YMsq5kM2TWZAdDoHPZmiv6xxsdzezgSXGnUa1dBHWYKLVYu3hwqK95ND5vFSwSYVAWLS8pF6Fcs7TKu",
  "key4": "4N5rmQXh5LdKgwNmEJxHBKSY6fT748oGNRMept8QZWPdCdKCKzVeizQU7ReeYaeihFdTKkBm3XnbF79Dc53UjkQJ",
  "key5": "uT4gDKEx7vr5DUJ1HHeJjzZHu48ArB3u6HA5dqtSzDTFstrr23HGEevB2jupKHbpgh75c2Y7bzoJyJQD2GCDzpg",
  "key6": "613T8Pp12CZ1zFwW1A7Wxc7HHcG6FqFYV65hWQsG3YhkQ8kwe342HTQZXSKx8JxnVPFQPtX7mZAJUnZmkDgFftXR",
  "key7": "4HLTQeMoWFczDYNqRuscPf38VzRRCmJdsPb33QjAPcwJkBGSraNKsyy3p3eFBs5xfS2MyiXfRQV766wLkAvfawXF",
  "key8": "ksVvvVus6PouETXUaUAN3G6iVTMX4kPMko2QPAMhGBqjNV4anJqya4zJJnH3ZmuDf8vtJASreqdB4JqqZhyDPTu",
  "key9": "3AkQTGsi57g8ZBdgRfAjXyZndvVydEBrSGsjU8932SrdnLTVZvf5oSA4ceCVNe7xyQfDxh5bne4VW8tPRf6Qeh9N",
  "key10": "3ggzE65wF4evSuymTqGWDFFw3WJto9iKb8uAzCHsGc1EwiZh7NM4t1r1sFxLb2DCtaQdPhwQcD7BAo97L9isMvH3",
  "key11": "5WbvFqTsnjcFoY2uUGUsoS486s5QC4V6yxk3JYHKYE3RF585DqAG4C73kZRGUJTFh5vjrNoPPVpaikr4PD8e7fcm",
  "key12": "69ob6xFkBoVhArXFXATkkKfJCPpXdrHusKp16ntwMKTkjE8rJhcEomb1RjJ9f61j8cjFHDfprEsi1yWASYErb4u",
  "key13": "jm5mpSL62jvudJAEnGB6nuFNk5SJtbj1NDTQRLTALPWwV4ijNnm46uarWq8rPqeQz5dUjNDXRAus4mvT1M4Lu9x",
  "key14": "yW1S2EMkZn8FEPVbctC7VnjXzr4xxkw7D2UV6igxuPXtQ2kkFXFn3FnxqhS2hZAwukGiga51wW6GWxwwmdQtB4u",
  "key15": "2TpBCC2fjLgjexXNw5ReDnQkv97WNnQJ4d676xKqhpCGcGgb7KWEVokyJTXDxR6XX2Udvt3SKYRkgvyjChzM2Pc",
  "key16": "vW9cDouPuhxmpcqfsvjkqvDejTUDJmTLkjZSByQ5jczihHYSyq2RhqLkXnJHYNdsH626Brad4TUNrxRSUAVBDY5",
  "key17": "2yeEXpj9DEX5TpyA3G4tk3QpuPwZ6AKRKTetBuLgEqG9M1ktPUfLK6neVpGnVrdhnznpAYQFXDQ7Lwnry7XFM6aE",
  "key18": "3ZRKvbNr5SKXmozNru9XRFBPp42mRZT15qajQSdNzUVxoj6bqR2guwK8UDt4kgR5qTvx7Q8NS8tDgeuaJDHTiifn",
  "key19": "4K9Ypt91H2awbseYunHHPmg8V4zQAFxNkTpxYrFbnyu1DUD89mTKRAQJa4fXfMRVAbkDzLSTdeCKe4HGM2zmcZ8W",
  "key20": "4L9ja2VwfCaVWyYHTvX3P2H6NFA6k3yWrBHAo9o259sc4CzweWuvhvSEnr3MpeU2DbJwSQsBtViSHsaRapSjM4Ah",
  "key21": "5ymRuZh1Sw72v4TavxjFh2vvXhqaLJqNtKrEtZYVd4q1ewfxa934yfn6bHb9JHaSPhyZu2Yr7Z1gay9KEzwkaZTt",
  "key22": "5xfzePcjSd6P4FogJEWkzE6F3aHox5MDMSh8A5KCw9WexgRDzYGvojSvW8G24QVc6jYWGmAVkj5PjocaZok6SNv6",
  "key23": "4m3583zZxD9ZzVWagrdeFRnx568tmBkyfP59kw8WxmD4w9Evs9xjMYciaLe4zp1BRuKEtQ12E4kyZpqi2aBVYyrH",
  "key24": "2Krvk5wsZKNUpWvEqsXWPJgfu4VfsHouUXnbmXUukRgf8hFnfnLqoQcKQiQDt7ybj635vqkA56cPpb6skQ22taTZ",
  "key25": "2MVZq2U6i9juCh62ZP3kavrapErFFZ14QKS8R1dfRrHa6zzNUYPGEDD9fBDFD7WX1hjbd3DePLcdSV8t7dGst5rh",
  "key26": "2oPvWNfMrmyQru7AA1uwMiemNTcHAtUFhyzEHuQLr5z77uhU5PDEr9FiGYSMPyRH6ya9xTHtB5fvczZ3KAQ2Gamr",
  "key27": "3Ly2ith9HtBb481NeDdqo1GCowMjoG8MgMVvrRH48WBdLWaGzoaf1DVrwtKT4xRjRtL8f6KRR7K8NFbxjy6faXUA"
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
