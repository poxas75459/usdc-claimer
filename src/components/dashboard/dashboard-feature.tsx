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
    "4z33gePcRkVknjSRDPw8nQYNGvgnRkaDmKbi9HhdY8cwWMeXEoGUrLLzbj16t2YMkUw2MPceij76Uh1Hmv6vLDGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PcMbxNVM31E38EMpY9anyJWi4xvAFnVrSuNqBLst1T2sG6rQySACjfmjkumsb6acc3uMjtcz6M3SuZ2ihLQ9Xhs",
  "key1": "3ipKZim9EtQdcXCjiVVgVeeECUB1q3NgCJUGNKwjUFTmpvqwM3uAu6bgcTkPpjBsDi1w55WtAEe1ebmtRzdGmVQ9",
  "key2": "v2cupiDdC19Wg6wbkhet4v3oETAUh6JJhXpSanBdUDTer1e4Nm5eCJjDWGNt6yMjoSTv5fERuggfYpfwLF3VhB7",
  "key3": "2Lu5VBy5zNZSzohUq3J2sf9UBYZhBNnpk6pxEcbQ19n7ySgt8i3MmvmuFJnMRsdgKjPVd3JqaWNhLUt2wReUsRVA",
  "key4": "3Htd5vJZWbbWrPqc3Szh8ezCv9xSECnGyUMJ7hmCAvGVaormsmWgqUgnyj85GKbteLzMukn4ugvayrHQWE95GMcz",
  "key5": "62n3YBcdoCWKiBEMcbP1TBEg2jPGjtL8FA925PotqtV2vfVWpa38yi6U1iVA6zrUCMPCPJsa3TLmZWL8Ln6G1EJH",
  "key6": "4jWhaN2K3jLYWSCx2wAshemgScx27S7GRGRKvHx8WqvqAc9KNmpoZooYHRFyW99f2K5rfcDRkJkDBX7LnmYgP9Uo",
  "key7": "5k7w25RByPHABWTC6DpNDXChmKmw8cUrWy2Z9unv1aUt32i8TdDxbNAvwCgm2dq4rBQR4sZKqHb2PAtDy4c7qXUf",
  "key8": "31VpBQ6brQUF94sCgbMoU4D5EdeAHiijyGYECdz8w6RAru3tNYwKQEFvBsCLwSq4vje55TMvyMC2bQnavGyUyjGF",
  "key9": "5yYVc9PEtrofiNUJRLRQ8pvFSLp5wa6LXc56uciFMWgtc358npPxNi3kNCUzRZBAj2VwWaXe7x2hXn7znZBYeLz4",
  "key10": "2mHTgxEjf95PgHmNLQCm9hyioHPY4LDvonNhMLRvUbErDHAcWt38iAXe2yXRnKBGkemZeFZDYSwrXPL8XQNsByBi",
  "key11": "3PE2y3yBMwUR9hYQy4fcK3G8dqA67PHcppmTRkqZmNDrK4VHMYSXGCsFXJeAQ2ggJzSFGGK8p2gnoGRx8JvtXxbE",
  "key12": "4sfMnMA45zmegceSe8dbWaKmQhGzmbymNCXpEeGPS3s7X2pT3yeCLXMkfnRuNuBrKhVot6TdMqpXJrHSoz7mRoF2",
  "key13": "4Y6CuxwJ4u2tiPUQRDbhdaD21xtWTeQbCm3CztyULHmfKW4D4NRyixF1hSX2ELt7wFxWbU8WQEXkKV69DRA1VfrC",
  "key14": "5GbGk7Gors2voZbF7KRMPsDjaDBj5imzRzuFbatT5Gm65cV21yiazXspmAboFM4txmLywQtnsD8tFqmiViHFHEmF",
  "key15": "5vt6ykUBxoAp51BjMEHWxKHyuXdpB1DGKXkTDY9xer7evp97R5CdTz4rzi8aKNsMPV4322cYN1YpiQv5yqP6PdHk",
  "key16": "3i4eReN55WHAsi3kbTwghD3cjmaS4Mump241vsetQWA95rk3HBFSnVgGd4oPiFuXm5Uue8CqRxCKBFrBdYmW2Q6r",
  "key17": "3R1mzmgfGRL1M6vzZXDRbXuKEGTqMamyLEYqkdgAoMthhB8rT7A8bia2MokEqfY6r1i4qqnjZYuC54ogYZnHWQ8B",
  "key18": "1ce7CUofjH14F8QCJiFSRRrK8rJLgGid85rVDtMcFJAyJXbjkAk8f7BuSjTgUPf5hkir1L3eT4Qan4a3my7q1fo",
  "key19": "5FU2HDTYZXvHCopNi9Yn7YW5u2YeN9mHCRVYestet67VythR4cBUxgfmnBwa9ejqjYi2yzcxVF7B5ks4u7jiVeZD",
  "key20": "5e5Um57qLtAmyKgHZoLGmep7wJVMuBSWo3ajt9BXuoxvdeyY5Ej6Lb9T13HWMUypHpGWgCSrXxXZqF4HDbgNP5Qp",
  "key21": "CC5fsQpFdWe2z2SScpfZhTCvPEebGxa6LffRXbKhHErjYzPvmaP9wxZrpsYStJ6V5FvbZMzsDgxtLAjwc7hp7LY",
  "key22": "56cx3LRdup5DaeqYn3woZ8aLisrezkvbGgJzLePT5i6LPgX4TtJZ3WsjSbptebAn6VCauxnsyoANJR8uUPDbWQa8",
  "key23": "2XAzNDEC12vLtQacVPSYMiEPeDk8jRXbLJWvYkzeWcx47GufNG5vZHgh5Xb7bLw39RGUjW8iAYN2N1GrLkfVjZBu",
  "key24": "3Pi9JEA69KM6dfgPxH8tcv7kXveEKHcUuZWFk8dzeaQvY4nKCoGnmrTtHpAWBbpT2g5KwNugBhCdYPT1WrF8XDvb",
  "key25": "2aQYzz7BRss9AMfkvJC5SuVJuYBfJiCeUWkNpR3Rs7WYcLeLQNNaPTSmRUo5H58cfCjAZkqVYeDwgc13WuF1g7Pc",
  "key26": "dFb6UA8TLSFztMH98oBLLuxLj1ZeSdsjKmemMCMDuJiNCmi8EsUbKmMxa5BUgNgbwBTLUfG2AVDzhnw8FqWc7vY",
  "key27": "ENybXgu2p5WtZEs1pQAMyar2EWBBSQnxBVoRefvTby7geVpCVa7qqgSSRDoE9641fZkzGHiYtkCszDu34rqnb9q",
  "key28": "64rcy3XW5Cy1f63VNq4rzy9ybiDR5h5y4uCorXw2d27Lxy5j21nNZFGVCVrfwVYqc4FDwRx1vghtJfoKtDBUz57K",
  "key29": "53D3ktTqJ9A5ss1j58EeFxboeA2B6nn6N35su8CuvPJj6UiWtMKhCzHyeHv7bd5vnzfVuekgJxcVtJKwYbnAmqM6",
  "key30": "2AUBKJfcxyrBUFfYkMvjW6xnbtVVHB5d6EQ6huL5jDCZmz8bDiBkj49XJdcHpL2umdtWrYkN1kka5vtkvr3hx6NW",
  "key31": "2KJ3izPf7Eskj9M7SJ3gc732wxPgCPFwyTqZxVzjEiF5v1TgKbdrhf6z9iVJxbfV4ZBjfmzvz7TBhxd1wtrREMkq"
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
