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
    "3kYxy52LiMvshBh4ZmrYWK1ozAbyU74EK5vGeywrbasfXpoRvjFLgVRiMsBNHtWW4ZGviFjV3WHQ1XLP4fGFfwqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Yx7hpN3wvHZVBzSWh2hgUAz7CUhjMuAJPWEy7GNdczWDEquwJwRB2mrLrpePty97nphyx5RPkv3h18oaYRd6R2",
  "key1": "5GhK95zRMQUhpgEBxTtrxFvUMsG8qfu76NHYH4JpXwSydt2H1TUpsTc8vD3vQbXn9WzQ28sd2tPEnJGpRzHCm7eb",
  "key2": "34BuEH5eeUrytiYKWviFsym6odHCYEy8UMBXM95DbL2B9NdG8FigJ9781Y29UHGWmLy937qKwLiopqCX2znYq4ER",
  "key3": "5WP7gcr2bnyW3qFXjm41pXnVCmsH1urSqjKnRs3B9CbeuD6BiedB7DQtFWz7A5Cyv2HdqLFrmJVKoQtDYAzd917g",
  "key4": "39wj2wGP94rjeVhNSFoM9dsNpFf8p6b33uoxLqykxd6jqvJ35hfudhopGYz636q48ea78MuLdMDJuLEtrB7vzKmU",
  "key5": "5ggphdTG7tR4v3jSr2JHf8BHGB6wVLYkWUaRAL3HRK2xA6mA9Wved8YrhN6GDxSi1LsS3YzzL87NVtyVE1qPV4j7",
  "key6": "5KFpZnfm6FgtZTHTYL2dbUrMyvHdNkuWSY5jwBBkbptdGgxyPmdoyFvkKTxGdovf34FXbEnUAtpEKHfhS1aqTeh9",
  "key7": "2Ex6TjVtdXoZDUh73PFUKcryZCMVbTrAxvitJzSAjhnGHE1KQAmL1b65x9uM1WgRdQCcSN7qSdYib5SyFJc1o5bH",
  "key8": "3ra1yu7JWr8A7k76LC4mUbj7ei1Qo9hi6JUqaC5gVoQWfdSyfGoEqoHh9XGqBR8CSjNjAB5WcnCuxyfn8TRSUTQx",
  "key9": "5UjXsoM7STJvNCq4LMnSsSZqshtwh4m8UPrCY4idW62NVmxGTnF4wJaAM6W5HNVxiGW824y6Hev5bW6DupgstYmB",
  "key10": "5Mf77QT3yH3PwZnuQXiXihazZ8ecGLaH7QdATZuwgpguNNCugtyE49WKMaUvUq8GEoc6xC172tTm931QcnvYvtGh",
  "key11": "5VdEZpA8bS3tmhsZ99mZ8WLF9ExunZDfc45koViPi3CGHKckmTN5BaqbBKzbx2GN9JBxxSTVtVYHunkMzdTPZxLq",
  "key12": "5kAv7ysXXW8CxPX68VL5Cgw8EMpSME7UQ4ddH7Rshc84JAPPecxAXNnnH2RF9d6SnRJjKNCyMzqwreAzB3wfUXLR",
  "key13": "4orzuX32jfAntSAkBv2wxDm62ZCD1kA9zoy9T2hC36YAebsNGsF5F7x7tw2HRG7bNE6niLgwER2YFrTpd5CS4Nzo",
  "key14": "5xwAJc2YZqt9k65STx32xeUcP5wRaf9EDvLxbr4dfKg8Lymtx8cs2UwDicvntJuShHEcUKjhtF9w1GfJ4ASEphPW",
  "key15": "4sRqfkDY2G6fX78m53RLM4kmVCev4TSX3YrjsuCvdTc5nZBCNgZEgrU4DvAS2db1pQdnMHu5mpPsexTYpShSZCVo",
  "key16": "38RBke7aB4xX9BSbSmUHb6LQV9ZfprWrtbCDaCS5HfopKRhAPvN5BzDU9R7CnSfvbfJf6eiG6YnvKFCmYR1dUAiW",
  "key17": "4P8xfwvaVdfW2oiHe14Pcea2fG9ULWhESfaxiyCdzzRNDUzM3vi1LcHjMZtiG9TKJ9eS8iijgPaCcN6mEQSZsZwv",
  "key18": "4KLXZTJBBMCHoDtsxNxJycPpiXU4Ntfiovrdcs28gA47UWjCXiEFknQtTX6NWPG99TAquW3UEfJ5ukYRQPk4YaNj",
  "key19": "4CWU4tQco9nrEw4XBuiHnu5ejSxR7uieKDXFWnZe9kEHTF18SHp1rabvDhdanhb3oU6jGvhmGkZB7jrP1FjQsRSm",
  "key20": "5LC5EGhSNz65r3qpNsmJhyvZdDHTttCsscsnpCLMMNfYAetdLumXv1gQ1MyNwFkDnKoqw7co322CKAeVHFpK9m9K",
  "key21": "5kN9uaTJvu1J9BaVCfAWQmTTRRKjQDCTu5q7ZhGKxEkYab4GBBCSSkpqAawQ1r83xgtp3hfJN1qekNWegFY3wkyN",
  "key22": "3VYQdAoThqQoUSx4ZXZfyAyaF2HWL7DYv5M1UVT4WPm4cbJXo9WFmDgU5FP6ZMVjyvzMs3DDx1NWU5KiuzcU9PW3",
  "key23": "5sYjGzWgXfyo4tFEEH91owp3pbzPer4xzSZQb5XfQiUqZzx8cuahDaMckWc5B6n9Y7WsjR6GLqXDfRYF8DwJs25W",
  "key24": "5bhB1iY81DyKpm9UcphcZf2p8FWeTEEQpKQ1ZQTyKxUmLiURHiqPGgFjsxY8DQeQsZPgDfnvwxSNNtNgDALihZcV",
  "key25": "5pCh3JEYSuyarVruDr8v2xJNezgjNBqAbQwFwkLDhd6RSvTpivGnmmFspZrQHCNSNWwZ2PKxM725kCxQGZwXnKCR"
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
