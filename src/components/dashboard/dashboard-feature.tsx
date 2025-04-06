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
    "23ELQyuVpiFLDWsW9TrNtBcxCrM2sD4SdNFqEvasfhSdCkg6Chmh7z9M3FmSEXm1t91ndj9Yb1NZ1Rx3Z3mCmvTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5THxuq3Wji9pxauBwYReThVzauhevXmddkTgbZXpqYYMhxQo4zyrBHq84LsnQwKrDW5ukaDWRLfVoLbaFRHygiW4",
  "key1": "58tzuZdPZFN8tupUQ2v6v42Fdp2ggZxBDKxW5bh57GUeRD396T9Xxqgvqi5S6aB7mRjrgYLjPuLyfv4o3zzQZrGa",
  "key2": "53whkz51HyQoDeHatdmySufs79Tb1mx435xA9hVfFiSPqcE2foqbjrRPf2DCdF2Zd83j5VDLrGFA7BYr8vn17bBr",
  "key3": "4XW9BhLnWHWzDBUpd1m31byWDa5Vct1zywHyVD2jqvg3VwaXZNPSnNrw7LAbThifhn6r7QDahdo32jjwti2HEaJ4",
  "key4": "4thFJzrFfeqwgGB5XteGCLxxDG3chDvS3SE8cJpYxdwC3FndtuMkJAfJHXDDyP6pdxYJzf6nCqnCN3LpEKQRHw57",
  "key5": "4fvaphpeeWvWyVGw4KoCfaB4m9uZaqZoY4x6WLw3JE2aRgo5MH9rjSSX8tZL6uajTwHcZHfwjYyyYBUb1kftzPB1",
  "key6": "4JxQNMPqbB4vkB3nEUEHwRGT22vgR6SCU4UWRvV3H84tGk99uZUfZG99Dj5Lsxg9iKuM7FfQc2KENgHQKYRE3own",
  "key7": "2zhgfyzd3q22sbgkpQ4EjDrgkygAQfp3HowbF4LopGkxG3zxGEN6JHAfrJnNJPAXta6hXG2XXEa1Nx5brD7ivqpe",
  "key8": "3QLgCU1BqQfRBWGCp7EVtKKoyEAVSeMVZ938aMYo5G5CAxKaHvghvv4gCTEFT9S96mBzMMratEu3LLkRatAvg3W8",
  "key9": "2c6zLivGGsfCW5NPjKsqQ7zvY7X8ygU2a7xn376U45gHeanyYbUwUxuZsZxiYhJg3KW2b6kSEuWVHYkpdzJK18Ko",
  "key10": "2p25pKgVYw92QTSxQQ1ZEGfbzWRZzHCjGJTFBQKo4X7xKB8nhotD4TJCvnePdpG8aKpf8Rmq1RrKqakQ1hDPLGE1",
  "key11": "5ZgbLNNzNyLQtyXedgUjwEa2awrQKVoPFnYRNXNV7JeXgoBjVkAUdUqQjuUEXDbbCERDHGfenfowHfd7gEM8Tnfv",
  "key12": "5oiBXWxmVVS43e61U8WJpFLatdfZw9otjgB999AghX2BCMpEx8XTuTQXfLfXnoDsnpcFdKCKCkUfybDVS6ZqLVjx",
  "key13": "mSRTz1GiiojahG3nJGkUwPWdAgjT9uHjguY4y8oNacY1KUcuvwZ2gCyYEcfRsdHk6yNLF23YjXjesAkm3uSj3Fw",
  "key14": "2yzcSa9XkoGiNyBRKdHUH9vpwZWY3u5sVXqe13SLtKo4LQd8dFAyCoBvsNPZohaNAXgBPfRcFQ3WdKCDJaVhx92N",
  "key15": "2uKAo79Q5KcEVy8pWqXfvVjw5YRsfCiYU714FNT27hhASY3odKAxv6razwJ7u2P6EZcvRZ5VdbZEG4voxaeHU7fw",
  "key16": "5G5u4TfQ47B5J1HDNbouhFm3RrxXscFM1Nq2PHzueTcNzWuYcQXFEc4N56j6hsCgC7uGC43BmxwpHuUZPj9Mn23e",
  "key17": "57jejJq6nCgeHCXSL59F8G2MFCCw8u1SQBexvG4QyBtZka4DCzbhmmCDxCAL6n7oNNtGLFjfBEqSrbZAF7R1EQ2r",
  "key18": "34QVuSmTdTtBeL429JN3xSpg34LZUwf6CxrFvg5ukPZ8Cd4di2hskxioF5dMro1GmvWKzwuyiQgpbAD5YZcSfukb",
  "key19": "45jYvNUYGF7aDQaQoATgCZqm5RbbBnSw144y9omhaVbqoh9oapXryujRHE14xvS9PDjtVhdC7VJ9pmP6kCA3QKcm",
  "key20": "5VyLpYLxLdjpENGVcifobfswTdnvFkCAf9PiiLuLMYBaod7VJw1CLj3AWcwNRrQBu1CsTMuuQs7mw21sRhKTgdAm",
  "key21": "HwiDMdpyd5ScwP8TkThr1hk1CbBaFkPK7L65KHEDYjbk6miYqkXSnNYdsVUChJYhZio2emNV2Br6py7g8teSh5N",
  "key22": "5xhY78dzmQYhcniwEbBGKp5TFZsEhvJucFHtFRurGft6d4EBtsrTDBGRNKiNEmiJLopjXS4bDrV3QaiXq7sPrsF9",
  "key23": "3afJ82nrTViKyc3fHYdzvTVxfswv4gnnQP15KYPadUz3YTbpYCRBnJQoDL1JgRwyT8z5TnepdUbctAkvyuVryi83",
  "key24": "2MtgCEvo4Q37StniixnRGswXELpjatu78hrC6mU2VmeQ9pk3hShA4kbPm2ySDj26YuSQsCGEHNXPnZpLXSyCCjk8",
  "key25": "26eBNaEEdoMmZeBnWczgDrnGi6WG1WWWdJQ5jWg43RNjua7NH2zy3B5r3xufLSF9URqMB3nAHA29KKyeTomp8hpM",
  "key26": "s8emLng4EdcB3gcp48Axhf6VWk8B2u2YgNH4jyLhsvvszRYPygNHzuJAnTcC9su3tBK3DNRhn7QU5niK2ZtuPBu",
  "key27": "4bSbm2JR12NnQKpQ92qvgd8HxjEyZvAVeN1Dma14abMscJV6ZdNR84erBzE2QeSzaGogApo7NaLfh7eeJeWuWYxV"
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
