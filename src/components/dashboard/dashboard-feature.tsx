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
    "27KCU667BUg4WnM5xMWG5MtqV9jz95z9BUNii5jHs4UedHx5EhyGCn8jzrzwGwEJo4gSP8nuXRzWznfG6HfTCs3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NoVUnXf2eX38VEgcSuciRwJZUM8QmVJBmF8SiVFhYoq4KZ5ZDgAq7Zz1Nby52Gxu2a738SEpZrd6Dt5fz9r4xyP",
  "key1": "1pwNviVKCeEBsTFnkKfNxWksMPuK7KAXJfZ7WhmoVVWVNohRuFtXj8a1FuXd6dD8tShj5qotNB51bCDAVvTkgUd",
  "key2": "reZxdo4q8iLXfW6HToNZ599f2XZddSvUqJ48Sdpd42LDJ4JpofR7UHwJwS53HsZ73JCiEqDpzYpVL1nWdkLRAWg",
  "key3": "2LoBU36Y7TzjpXJuWxrndib5xikhMxqxtaEFinSobfHPZhMTU8sGvNTEsCMb9noU3dcnnA4H7to76wwWYMmBqUSR",
  "key4": "5U8PXzh4cvB4gKa9CxBjtYZWnm9NWmwAHXzYinAzyCR4GRPvrEDEpZyV5D5Zco89UYcFUufcp9E5GEtT5wyvs3Fc",
  "key5": "3toq1JVdwgVxDMJrNaKqZjV3wqccMmrt5NgL8yJCHfihvHsQPSLG5tvZKEMJ353BUmjHtHsNA36ozZFz59mYuEaX",
  "key6": "581v8kuN4Dyzb3Wsto6xV6gfjFN6qdaVFjvGPAohieZk5iAaiUVjGjngnupd9b5JzZBGAcR1EUHXKqogaMrE8Cfh",
  "key7": "4PkWJH7QefFieyUqMM6nxT8mSM7XggC4VoxWecko6PLUe89FgNWUL1guhmCHLJ6u9Nf7RU2iBys9YwDcFP1GNwLb",
  "key8": "44t1cHyzhVQhZQisQYaZJoc9CjHsndVdVj4kBhwfFTK8qbvWMVovZDiq8GMA77mUrue7Bp6uSFt9LYChWascgFSz",
  "key9": "5kgagFFL65XBkKe72E2Nd13RhPRoqfexKebYZSeuBRRkoha16YaH6XyfDTLEY1xEGBtNeBWK8i5XhuRaifrub72a",
  "key10": "252vizSEX5YWiT64zRskMjVxUZ7E16pzT9bLYQ6FXfiwmKmf3VhXJr51bCzZ72AzEiUU9NBhdQR3YkfqStrBrf6i",
  "key11": "3V6yjoqFyCR5VWcnRzgL4AfN3wpuAH484DVtqKndzAXmKcMSipFz3GhypnxkdFaJRaDvGY2bqERL2Yb3YPMXknNS",
  "key12": "3fo2VL136soJFxWT6ELHf4ga6Jy7aUYR2ooTjNAL3VoiEfTdPTC7xiCbFYfA3Phx23W9zMARFdqG8gi3jTZJBese",
  "key13": "5uEd2gA5oewTzv16H3aoU3jXp89moCumaGKiss5YAMVNSqusw81HxmWPJkbK9x7F4LXyZ9X3SBa2MDA2H5zVr15q",
  "key14": "H9D1zSEnP235hrAdWDVZMt9zShd3tmcrs1hAPh241ykX8igNeU8Csp2GQUmFvFT6oMxWsuByxJbmNot7JpodHyz",
  "key15": "KzmDsiK3WpftobQTBtpEeLnBNzj5mwoN5nonx1xXDFpdQ37Wi23cwR9u53H14ENkEi2zs8DrSwb9821srSF4gs6",
  "key16": "wNL61uZKRRoLpR3a48peg3LnZ7Df4z9BLUozVzbwrXQP1jS86eSc3BTXr94BpWaBVyb9xcDPjeMcNMj4KjaSUwP",
  "key17": "e8Fgg2SXCkg48NipBmsqFp72q4jRixrv2mBi8v2Q54v4TSDt6pqS9UKPYNBwNTHsLLGsJ3htP5JHy3T1m7reVgG",
  "key18": "5dWkdfJqEvWzdeahwepfLU5e5ptGLRtFBcwfh6qwG1QeDGK2QxXUqFyzGj2HdMBZPSzinFSajsKv2Rs6TjW1wa2T",
  "key19": "L8R77tyeUYd4hGLRh9DjWi15nq4YzTVcXn9fhL9CUvtaVdaZ58yrGAGCGwdXQtyA1yv7wycc3jmDqVRD7rH4oRQ",
  "key20": "3rvTrDgChCLTNkH47VBDa36mvAPzqdzRerLkBzPPhpSUFLatMypes37mQVYhchdfbXEXcPEhQA1CscDhmkMSFQma",
  "key21": "JDC8CjEhcjdTopvx9GqXbBfnKKZEQ5u7WZDP5hRV5xw3mz2NfPkyPH19mH99sJ9LZ8JJijH1HyuZeP246FzwVdG",
  "key22": "RnVzjDrGKd6fkaP9xrK2o2FnhAg2ww8uMgbYguUJkV7M9MLfec9XH983SGVqu3kEipaeFinNKqkaaHQMU8HBhbZ",
  "key23": "49CDVKPDVF9CjKGRwFcsBsHyeSWSYHUFhP7ePtSYSpDyW6mpCEmLUtDdfckWnYww9bcgA1UyzytM2TtXvBLdTJuR",
  "key24": "5zCejdpAuT2JfTQdQqxUV8AeJJv1NzBSq2TBhL8QRr1jDyrF22kixn7C6uZpoSEnxdtxn3p3eerJyFFKKa6DJrfs",
  "key25": "3WmY46nqqSsu9nQB8Mkj1rDj9AzrLf6nu1ay2q2HBG4cwCtsrXsEivpDYKYHkqbdwUZXrd1w5YYnzsTP9F3senFD",
  "key26": "4BJeT7EdSR9PKVY3Qrfs8bbWDBmMtbCARKrSz56Nutbw48Lcf8w1MP1mMGsuSmChtgqETGg8Gay66z4ybxGp1jSD",
  "key27": "5XiB8NboJUXcHB7fJ2oYw4m6mRDv5MjkPmpu76jRqdyHpGD7LeviRWHDw44FHJ2wVbse4WAe8jmQnujodoaKkwFC",
  "key28": "4oRp5xkvxMjaW89Azi7Rf9FeQCWFiV5Tvx36yjorcqGZQJMTMn2Svf58tLYcUJfexapJZGWRCktJVA6qwGJLS3pM",
  "key29": "4aB2eze6cMsxhrLF83KRn4Eh9iN8Ysentzn1mtaxt6yMusE7X4NTNLQSzm2zAiqzaSgQNgqgzdVqPKHxJsAWfQsB"
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
