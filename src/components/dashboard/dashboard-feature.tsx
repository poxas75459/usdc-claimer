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
    "2Ae5qgRN1WPMkxvgxuMLfSgxQCAVaURJyUijkzkJo9FfZmPcuBkRdz8c41pZYzQaRXrcXvzzrWHWZQYBNp926ciq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f1RRU4EZh81m2m3xzbgNrf5KjSkDgQZshsyir4BcLCH1vDmr8pKJ2K2pMU3gLziQKtrBD18pQVYxmbKhcDbYAYn",
  "key1": "5TNTtRxMWXkP7wcSJeGoqURf4XNbazqS6pmkFBTsJBv6YtUFn1TW8nsMAXUAaAEHTDfHJwTtyVYVQcYRfXPnYxt",
  "key2": "3e5Es6bw3oP1FZMKxNdAEAxrF6tFHyjQrcBtkV2A28U7TJorBbL6PvtYsYX1oqEXUHkQJL51vHU4Z9TrY11iKKPr",
  "key3": "2ctuvJd3AiRyhSrZepmv8jFTwkq1TBv4bcHfebyv5Nuj2hGThdWEkoT3ZdoTtHhnUecXJK2Ab7TP1pGL23Hqojtg",
  "key4": "5RjLTX9X8128VyMfbwuuw8K4a6xWmwQ4Kyg3MUm5RSuXJLkkBoaEhcsmKiHmjajFnWoDQSGeSFAcjbCT6gKLNwUQ",
  "key5": "2i3AKjwS8ZB1nUQiRRuwsTNLKLQjeGpH39qzmprXC62sXPiLDUKbJ5c8nKWoDny4emSX4BQ7zmsR1T1CnqJmkdoY",
  "key6": "4oKhPqYRFEoJvGdYjoTHbbtiVwjcxDyNtKuXA8axW8qUH2gKaSyNzvT4vgmwSCgEMuHtgL7UmP5RmoNRRx6i3inq",
  "key7": "61gdXJiTyNnrNTidyUoRmGSY4dSEXTfwTKEmKvqjUuHXZifz2o5w8Xs8bH7WJkG2HKQo8vtLvkMPS9vJanCNgNm1",
  "key8": "4z7thrHNRSs9GbzwF6BUodZTcWHf8EYpLz1TJTbJBPDkpQ4QLDLvxwwzMHcT9aiyEr5uxNSgkshAcbfDeu8MeBAf",
  "key9": "61uWq5e6gbMfzRScZMmwygHAmnWmEBX58HJyHmfCGnSrA4TrkdjwN7v1symocGvRGpzMYWxsNW5H3d1yAMxd4qC3",
  "key10": "48QmSrDS9CvDiR2titxyhqk9W3uVQNoWqTzfcidV6bwbWX62qD3yx9CxgkeaDcit7fy1FYkHfJrqHra648NEtSgj",
  "key11": "5R3prL4HysArHeXe3i8LCuJpDTg38FgX45arpwbSawfSLu936D9L57gZ9LFDbb545rRiVzFqRjMrgN26GznPioAG",
  "key12": "2wTZUYAWdKfMqwBvYVRLwci6kyuSUPqrr4TrCnZG9qbDbmV3WiLzyP6qU4u3F8X9PZBSDsoC3EVCYZDNADCPN821",
  "key13": "38NjuwSpqFj5ZcL5uY6AzR5xSEVYZWikDLWGiFGWcASiETEhbwgRXmdzE94t18WvBe3h8fFRup8BWqhik272cSED",
  "key14": "3FavUe1b1TPc2L4YRuCa2WzKYFteZ54d4m7w1rSUCwBjfKKYvm5NMyTLbGZEVMbWnyuFw2nsf1MzxJuKfcCNdJcC",
  "key15": "4udpVkewhJjAeNSwSV723wThtksWQyojXb7spkjWfd14XgRuUmvsWAQpFpbMjPppawzB7xdZRMqwZre6qz5DzUqq",
  "key16": "67QFT8rjrNFLvfiU5mKoGrVC5GvmXWuYW63aqXhn43HNdRLwmajB7TLGTjJCf4qwyAxCAZ7WJVNnvRjZLL8emye9",
  "key17": "37aZn4MD4W4MtnMkyBKe2EAJEwYo67XDDJJrxQp1CT88SMncRcwkKsFnL6uUWE1r699p8pzZrgTkxPoFmjfeyLYr",
  "key18": "5mu7zZgdrDLHDHi69KajFDCNpaJTcxjzpJECHKoeUKbSkHW6a68rYuJE43yMWfToUCXggaNJVd6fJwR1vw6ycVgN",
  "key19": "447YKbqb3XxokfvbrGcP2yD3DmAvfYd68TTVvFBxyw8p4bi5ifPqWE58ASNrVrjwe1vycniz43XoQzXiTVoG9cEf",
  "key20": "3x79kZVCvv2ovKQDStunmwJc3bUWZvJFXtQtWrrTUosmL2j8FX7kUFdYTNMytW3MHB5uS5YR33QUG8wsog2R4EEE",
  "key21": "oBf6NiUNyNnqB5KkNgBTcqb4zrXoZvpXmsUQdRiPijzNAB7LbTVt1yatGZrQPGMdA4sdWRciJDnMixYiEnznEEo",
  "key22": "3zxGrLAnX68PA7guRbhV9UzyuTxcyDyffoeoRHA5S1ADf3DsChGGaD81zq7YioYhZnM8SQ7hgszj4Z5uWA1iEat",
  "key23": "2VEdyTooXVNAKqppBnToiiFX9zPECCwVS899Kn45Hr5Rcab9fEpFbtgZh8EPauU8kozqqBfXHAPmTqYBzmxXGVMD",
  "key24": "44ksAHy9pgtRLbGSGYaKWM2cDRcieap2oRxKp6zm2yCARkH6oXEpAV96qNcCB1Y3GK3EfHPTRRHDBSphcue8Pxa",
  "key25": "2yTBvrNTvsnTV37GKCjWNA1iBMAHaKXtiTGYA8hdGQc1aXt3b5Ubov584uuPks5vSArgighCMGF76F8zqManN9xQ"
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
