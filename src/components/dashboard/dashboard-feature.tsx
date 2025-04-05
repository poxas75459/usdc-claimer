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
    "2ZJEF5V16LiEEgVSP9MypnxJeZctVTxxuS7xMWLHKP6mPcZGCJ2aXFAyiZag2woXFn7HEknQP6WkBneyxjey3wND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WQpFDyeGj62TvzHbo8sCw6nyhmoonKbgvHzWLnxZdQxheG3XmmrLN5w8ACAHmPZTqP3D8ff3mHbkeqjEKsr1irq",
  "key1": "1fgEccMRHpge3t4dgvMyNwwcmaBGanemmHjSDs48ttAi6VDzuAWK9EEx39mEtEmu2oRkQ8eYKu6v5zSuUyqSCLB",
  "key2": "56k4rRoKzus53BFVdChygLZHdZfTFXngR7dqzLSFFWpYckbWp9kSrfEEh7cLqqcMRJ8aNTxpesz1SEpZy64TAMTe",
  "key3": "2amgS62dUuLewPBG2u3M5DtN2shXR94JFMoD9aYBc4SXeLgLVFXYP3WR9prYUcRXtHGmWXFFycjk3S2LRetiXcnX",
  "key4": "2dR7vMBksophbZZuotMYEpVSZBkjafJM7J5dDPhV7qCSFiR877ZB7Y7Tq3RcbKAFFB77Ye7xvkySYuDYLwfvKYQC",
  "key5": "2SQM5JyTwpHvfxcCUXE6fx9NLApEKnb3xGtL4TUvJM8a4iwsJrBsTsENhJumHQx9LWWVpNmeYfexESxBQvkoXgPN",
  "key6": "2zoer5q4tDM6aFebdigCDMvrn8yo2BqRTugvwiaUxewvgaBUh8E6dQMS8cM7Q8EzGuifLbaCc1KrfQjbU6DQxuwg",
  "key7": "FFhRFnb7SZx349uf96s6fxPeSkjRKXe2wEq1TkR1pzNxsoHjK2stFrmzqU3bQEwvYEEucc3wBFWVp4mP3wQ4azP",
  "key8": "2zTWJzQWNiBQx6L8HBsgNJapQabmTqMQEcNEFWgw5J3m9XDh6LxtrUT6aKMXMfR8inmMZ1nuUakG1guKBAiUJ2p2",
  "key9": "iSXLbzQHVSGYpjQkuLTNUbCcMap3yE3yGcCPxMLpTAWZCPL5EsB1qrDQtwsoADQWwdUX4fjtYDdi3bNQRnJ8yJ7",
  "key10": "vcw2C1yJstSYjFvKPszAi4CktjqoH1DnY3aAq9Q5HVc2zFsku2ZfAFkhCxY6jFcLMCwrbqwtCLuzM6Likooz3y6",
  "key11": "4fLH2wDinMhY5Aw5PH3cqMzBwAVHnYwFuh5iR5k9TkhpjT4VGjMLefyshwaKyfyEX7iRnmLeuoJsP3bK8F4MQM2P",
  "key12": "5no2YjW6W4pmtvMudDyErPYqZrkjLy63Mha1W574L3uWmmgXPERUViowPTTfuALg8U1pR7ez2WivYrrFk6A1zWDv",
  "key13": "38Q83KCfTkPTK7XTHNwonkD3pRca7w5FrLZ4F5iNvQ3SsBGgdDHb4knQecaGNUd8EJS8qsLxRDZgfnSzuFRw6jWN",
  "key14": "2Br1dDJNLNf1fKDmVR6vTc3VUByeAiHATHePGVwUETX7SZRcssfQ8FfPsrYfoojHSD1GyqZ8mqsEBVNFHmvrCWfF",
  "key15": "v728oN4hEW27zfkfb3LfvCaMSYpFtBinqNNh2KkbvfqLvApH7ubhJX2yRKRojj71eDoZdJ9dgE7DELdTXfGCTvz",
  "key16": "3crJgXt3d4ByvjbPnwhY3MX3CrnJvg2CyWV61ZhSjWFPpoKkjJaZpCNuCUEgY7JhMzWAmiMhW3wDaKYQcdocyFVp",
  "key17": "5HP2RzNWDdaCciWhNfs9iikSuESAsAaDB7yLnMNbDgCke4e3hmf9hhMf7ZfJxv1fUaGCPiCEeidPV7XN1EYSZy8P",
  "key18": "4RGm18s8dVVXvkrHDBqvxocxcbgGGagmxDqZguRyKAEB5pe2AjZJBDqTPgdMpwuvwXkN2Nv6a1aqkTzL5Bb9sJcW",
  "key19": "3LCXSjZjRZfYK2kd6aoZQrz1j9nbvHP2ZPJW7PfW72fcFLQLPxp8f7L4ULtpfFP7nVeKHFRn56X9ikyq9G6vsUAK",
  "key20": "25ZZzxauT7Cnn1fHntgbgPWvAm75SgJWPh9gf9kZSKJFMgdZxkTqaGQdsR5hKsK71JXBkXPQJks58rkbtrC4rnnt",
  "key21": "2DVkVD12ugDePgaCoAV4HERVh3zzxkAfXjYpWavhU8hrLS7tSMu7Wq75GRtHkoMHXEnYSy3TR4RYF5ip5cV6VK1o",
  "key22": "3uXtdTx43VqF1trJpyWzDc8GMKET1VjQbM1eABqSEvy4EpCHkxAvik8XtezHnu9sYYLU8Zrwmgj43v6L8QbRYhoi",
  "key23": "2CJvYmokKnhKZFkR1EytNBsW7Namf6eg2cSYb9uDpcPFyXgAnaYbTYFR19u5uG21C3wUvPLQRxe9EfePJwZ86jqh",
  "key24": "QexDgpv6obYLxfw3hnMuw5Dz32Nq6sGLB5qXKMHWD1pEHH61yqiMdgojfPmfesc4kcjgDQF8vfw5haAPonP3fip",
  "key25": "39ZGdyhoVBEyKAwNtTFi858zvo6U52fQ2PuPTijAtfvCD6viQqnKxe3dvH1eFsArs8QbJysrBqfw81eMe1QC9xpJ",
  "key26": "4X73T6n4omTKJPBqe4f12abCiSVdfbbn6miJQsRBNHWUXTkDvowKgnDGzSkKiLbjRGDGMc52UtFsEfvcGh3HoCYj",
  "key27": "5UdgBnobv7zZMLRFspdQxrjPdFQJXZeeqzP9RP4BCin3T1drWz2gaN2L32oJJKosu979b79ggSTdSsutXKa7Qeyv"
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
