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
    "5WwA5EHp4tnt9WEXX5VN2X7ApWDBXxjE6pdKJ2rxRzhMoUE9wycV25nPDVNNy1Ac1iLYVCiWwxGzoZycb9Yby1Ft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ypsq2CoqTYFPhxkJdtcGF8fwTG8VurWTPWR13j9qzG8eobq56ugCwZpJwCENbWLNRmRizMUjYZc1xmurXaQY1f",
  "key1": "5yXcHregjgTtc6kN9uxKSdHHsWugEQJurQNL3m4RvVQM7mveyKhdVzQcCVbuqmk6okYR5S6k7rVRveJfRT7FGCcC",
  "key2": "5QPtXSWgcyph7Zi7uxXVRaG5AVMNrRvM1TByMn4WXDhqiQg3TCnjRnPJFk7o9R5uxETSshw3EqJj3bVsHwrDWNiz",
  "key3": "33JDJUkubNoqm7rDVEUN2kTFgZMzpD669c7wohBrHgBQFUtwHVg3frkEepPenMNFzjYPYYaSFSyStq5AheDHwci4",
  "key4": "MXvoJx8CFMH2eaKP5L9mSjVPa5oGecWzdioFRnCaVdCPPgwSRBjy8PpDEPu7SeA3ywiNnRVT5mm53QKFppXNQBR",
  "key5": "3XTV3CLW7FyYVT9djvdsYxN3b8rMMaa5zTB4cqoRXBcqQVZm2c5nUZ5MKUyZ9i4QfWryrG6tDf2qrx5KQKjpswRZ",
  "key6": "72JX5BcVa4DB9Ysa36iAbmtKDLPBdbX5YtqTCf3ecozFa24efCd8CqGSiCeM19DgypNkTdExnyupAQYzxrLiS3y",
  "key7": "PduEmfqHJRWz1XjPLfp6C9a2mribNZ1GFxoSdnhMz6RL2NuUX1qR9c5ByhbV9BU8tVppnXSCvR4cPoFwEMhFVei",
  "key8": "5kU3T58BsciVeD9nYsTB1KWkFkBqQrLNt7fzyCXuE52ceAkfiXP6wVAoFD7VP3MsMAhdXPU7taX63ECUtVuJn3Rq",
  "key9": "2svhZv5LHLMGLUd3zifoHxwK9WHbfZNkbrhbmxD3rzFhg937gHZAAKAzzf3iahX8fHnU43NfBCMnKjAgdR5pUijr",
  "key10": "5zxvb6hG6oxXAQzsJfYtr394PQNRf1j9i3Af4v1nvkL1ZUvXb6HsdS2GnbiUHjAmrYXYqAb2JrEMaKZvhw1xVL7C",
  "key11": "2YyXvU5kVtJvHKsrfSHK58B2J2hKpyXDoAQ9ArpMsKgmtU2XBht73BcoD7yHUiAuMzx2YVt3M2zcL7mk2EjL2CCf",
  "key12": "4xJyNTSXvDTn7fkGktqvtGij3rJmu4uaPDBQiMGtVcYxbUQpJENm4LcqdyvzVpCQaf9ES7b1sbrZe9bMk8juCsSV",
  "key13": "36ZQNfwRccJvY8JaMofZMRKLBFtPZtgQJVKyK4gCffT22Zqf9wzXZ7jSD2J4nhDTTsezYpfpyRr6u1n7bnWzrnBR",
  "key14": "3S2rf1nDmiiU7GEp9PXy2p55QbimxGYpmjTjWQJZkQ19HNcgzsqRgAgkLUDRUD6fG57Sp3BeiC3oAfSkKru6itnp",
  "key15": "3rmpv8A2uXUmQ2Qr6JQY6zUmg8MpqduQVWAUprvmxa5uFHa9vepPF3achpkyFZXgMCmjnv6dVZcURSmNPSAJHtga",
  "key16": "thLurfQUyyiULfLARdWMbxBbhJ5R5yTwhsvBSJn4DXUoQBCBh7y97JwQtH5kN5ez7avXYhPRuv7GBYmK8rD73CZ",
  "key17": "5djx8tpmvfQ6SEMSmKGvTziUpCh13LcBsF37emUjcVqmcDJMWHRhWpTHVN5vGD5EjwRxdeP2wBznjdUjPXJHa8ds",
  "key18": "4Y4X2jDNpCo1ZbBkzDZX38c7uKYL9UN5A6YsLshwx8K2SLqWf8PUxL9WGHCdn6ch7PvzW8xDqFbd3dw5V73jPmAn",
  "key19": "5jKc51aZQkLq6RRtADLEHZAWGV6nAyyhLNR1pKuA5JVN58iACjiTMwv5eMgND8vz2SGDxUkQ3TscrwsybVy3gXpY",
  "key20": "3SPxk2muw7gtDnpXY8WqCbXccXr4oFqscS4wLXbM2b9LYh42ziCtxoJMGvc5acjbD3djJBmZh1jfp74cEsSKCKFE",
  "key21": "3wVKBX337sFogirGU8fo69jqRBZGv9FfXagvsJtYjZr3aLSaXDtd6tUueVS4Jyq9E6P8DHDEYPQdU1H6UAnnbARa",
  "key22": "3oAMDQdzn6q2M9e1v45FeRDpgxZquBa16ufpNuSgS7t1ACvwhvP24reXU2UnyoWUknWGkFdSbASenEuivBmtoDng",
  "key23": "3e13pq1yBCbakq43psQ41oTaeYAfxtPH4V3Ppt5iuwwxu7vft9yZGhtz7DE1hEaMhsMa6nxCZ8xUnp43AdJ4EYMy",
  "key24": "4DHFvJa8aryKmgJD4o17n87NaFbNJF356668jdzpdbM9vzmY9iUzh7EksVd5yRf3GDS8HjpcitjR9bQjghZh5aKk",
  "key25": "2SHbt1dCEaHt2FhsB4K3Yh9pGmbD5euizPAo3NNL7nsW1aG14G1vGYAPxBmTZM2LDdkNg4g8D7PSCV7rZZwf49gV",
  "key26": "3UvUbfAYuVgWwTuaCrsuQ7ruh3xPAEgvEe3qisS24Au2iCp63L4heANKCW7Nru5e7NWffn9ZV5wWHNy7zkZukJ8p"
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
