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
    "67UwP36zxcnKcV4UxTZcz8mxzxkSJXb8y2A8sEzHf8jbbmohEjKQySscX2Jm8YWgXNhSo96MTdrXRf2KsDEB5pxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "78VoLxHCa7Xj68oKoXV61bT7dSLmi2q4NDj5926EhmATHcWEXEjXCd8ytM1NnQNe8WWBaPEu4JqGd3K9mLj1fQk",
  "key1": "2G4g5NKBbrwpPqRdGUraLE7L82Y7V4DNvNYYbYbUWmfwQgGyAhQCL7TrFYw12yq46Ab1pJsFeExP25okjD6SFXrh",
  "key2": "5ZHwit36QRd2yU5V6BFkmJKEfDFovQcCLpvi7P8Puwz6hdMox2vcfAjiUHQtYDgZDvQEA5CcFiwieFJiSBv3fJVu",
  "key3": "2gibjwmh1EvuyhUBSwCQ9F3h3vgRge9X1uQBv61D7CRp1fiAK5KcEmrs7pVChq1QwTavCyTaR4KybuRiaCNV3qCd",
  "key4": "5PftiDcMnYYS3fjMzv6akUGrvqS1N27DPXkbmWmtERsmGBbnUfRBVo7SYxNDKL7tNqL9ik2JQaxht7EnY5uHsNqp",
  "key5": "4w43btc16D6Xqdwc5BrqNFJmw8moiD7r5r7tamzEBqPT2C5deTt44isk7yDSB8togEucLk4AVUdUEcMVTvqb3gyP",
  "key6": "Kx4mYyaWALnYa1ZAQcVuaHVLZJag7EN4DuLNFCDoPHg9cqceUKdmdpC13exweYba996CRoWR5icmuGYB545jiLy",
  "key7": "5Nh1G22q6LvFkgofNnWPqrqhTFd5EUJLmS5KDq6Tp2KuK91ARp4DS6i1yyxGyj1TDoz7zqtTxCWzGLYFRGXCCcKp",
  "key8": "2CkgdvTPLf29uSGjtdFuyikRJxYYiUAo1tvv8jnrt78wtkZAc18y8ZteZgRnZjgE6pEMiAvYMQPVHekG2qevL8Cr",
  "key9": "CfvA1Zd32UsRas9sRvKqZrRfVnVMpiKdJYESsMLekdskbTxajTXWzHf2TBoHjkL8DKJUbgtQk4tpLi3aoSmnNH9",
  "key10": "5aNHzihLVnwDdiJiGmeTtzbMBpiCpeqSD9HuAKYnfmie2h9TDxKdCKQrKmkZZL2ZUpQVhpS9v5r52N8nKZF12hog",
  "key11": "4o4ymu7j9PnT8QyAS5mdfyNi8AJBiipLckBmX1AMvup28NnTyzpaRk6V8TiPBUXoDnoLguFf6EE3cGxpR84pZG7t",
  "key12": "Ac7YMrUATkwX1yyhVDUMEQjyAjs92oVhJ1sAqTfPPquLUskZTkDcbxNZnSN6srXLiUmRLUVUR9fJ1r6H7pNZmye",
  "key13": "4tn7EYNghYeKkmkqinaNjvZtCjZsERTLzqFEjgPNNkZ3yp2rKm9qUsQ3iL7PYSBUeVq2LvX9hbAec48hvS5poTW4",
  "key14": "21fSQ5bJwdNoT68Uq328LyqeF17yX5M5eV5WhxH9HGyEaDGdoXRLAa95qWcGX6EG8n5RKuv5jCB7thkFTTCguZGP",
  "key15": "3nWQd1o1bjiLQa1E3DgWNUALMTR1knKnKjugfgmXD5Hjg9RCAegR8wmipgXRMB6q6sG3c8k2LaDRUYXbLaRxH8rB",
  "key16": "519y8oDJp4zYgGGDduMf61dTS7vBvt2EwFCC8phqWhVyc1UK2Hb42dJyXbD4oqgM6zfp3xLWjKUVEARfW9Cr5X4X",
  "key17": "2rH5FpracBxN8B9oMuwPUfqjtLsfiJSNkTgdaJg7Wn3ic5PbxKda1TgaGVMC7dhL5fGQWSvxkMPEb14crffaFh5v",
  "key18": "47KEgNHhGEVYHCDrfbLRAWTVo6gTujmHY2UVPnshGU9TFo5ySf8wePqckG1st5bhsFKgRteyRKowkBMyLwPeXpsK",
  "key19": "3dn2NTk64qRvj3uAFpyYzJYHQbmCWbsDwcnhLafML379DkLRA7V3j98oqNX5wTTLpCEsaPYR7ZtZ3fnq2p2dtDZw",
  "key20": "aBxe5PNEoz5gkw5ZXLRm37W3PWCgKsaXqT8JZtVVHAYSUAayhJz81kFUDqtZh76bL4XLcpwRXNNbTLtngv5dUCb",
  "key21": "EGQ4qXsxZtgiNE3Hv4Gr4yyMoA5REtc3Ko1m7hNayFQNBf7SGoMoM2Ufo71MFwG8qXTdZEWMkFF9nQB4HfWHW8F",
  "key22": "3GEF3wMfHRkTwzgLTBu9LJdgj11AaC1Kqornphwa4qDffXgsMaHxx5XfBcZHPTE4XJ2axS5qZmvsGqaA1vyDP5sy",
  "key23": "3LhL555DAdywgMhDq8vLChh7jEpPxbUeqgeu3jFBRPLYVMGVS2MWa4BMg5WW6MbtcN1u4x3VraBwybZKUoq4jCEE",
  "key24": "4zawyK5Mb3fFkSBRdTD6sUGzi8Nn5n3Ya2ntKx1YJQK7LRL9bd3Q1bUyzzS6oks9mQ8nSqLpe2ryWtgxyKtpn3EK"
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
