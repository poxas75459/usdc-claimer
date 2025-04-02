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
    "5cErtKG9RyRwNcqHXcmaWAafjgSaHo56PZ51DnZcmcH6MmKZAYKFKPsZxqooJtHNJBv76XWtqTc2GnXZTKqW9wyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uNFSqNv3gQAWBB5QGbhNxcTq6dLBBH8MdfzUL5Du6LhUH1P5sRYbe1VtWm9XtSLHoKa6zTsDw1XRHyPPJNbbFho",
  "key1": "3dtcuGWoM2n3KpiLivqKw4Ca5jWiAQzwsADxxbMJ6iAYbYMvGo6SeNUhdKtHkURBBW3bGGrM3wzHZwPK9KAPEhq7",
  "key2": "6mP4MrbhxZYMraJLYShorvmhGdYzAunyYfCLfJoevDKjPKJTrUyAnT99DkvmndWZaCxhYaxLRx1oC9d7iXUe1KZ",
  "key3": "4fBkjguj84UnVXvMPd9CJx9Ntt7Rqezm6TKxc4hEtSVJtnaF9Dfy1VdE73bXFjXhhnnAxGcDMP9kcFiagseCP8pT",
  "key4": "4LiE58K6xVXS94hqEag3L1bZAaU1yh5xnuypVLnaG3mRLZdBtRs3DkvHo1nkhxMYe3F1AYFqJJMQ4TrA5vqsq6Db",
  "key5": "orDckS8wu6FuhTFi43TNEk3B4PUd8x2QELhRfTCw6XsWPXyqtzangp8dSKDquvoKfhxwbtnGrZUigKer9MXohZs",
  "key6": "8HEw36rKrA5VJkBHMsZqtFzP4SRDF2movu4ZVbewvmkEbT4jVDkbvsy3qLrXXEMkVvWzb4T5BDvaxDQGBRYguR6",
  "key7": "5eR315ctEM2eJJTR9eq6okLudoR7GHz3hbsjuTQCoiHyq9NGMU9KoKKGKmGuAPWP3PYQ36w8YSvSBH898AJhvXwV",
  "key8": "3J1qGaJ98tATFRZzcJWqt5mabYJMrsoT6BooVdY1tnVt3JFj4hNiKTwCwNvH2X6jSw6dYxpDRohZHok93idHdQ9D",
  "key9": "4pWMuJaB6KWkGsmjz7YishxuQcrpnRAcBZqH3tNxWCDMxKsR4S2VYY2exMSmUtMKnJ7RKPKSGwYQXEnnQwq2F4Fb",
  "key10": "5Uiwk8mEFenk7bG5qUjFmJtefScucJ6XZQQM1KNfQyi6zoCkjeZXPpfmUmFahSRaE2kFMMMVbDmhYpYcfGF1Ysbf",
  "key11": "2jkqCGRhzKnLSNdGbGGA5Y7LTJyHa11yZqQyzdF7qw5vDz1FrFCWscihbBSsRj3hUtA2SUTTs2j7vG5AkTuWhMJc",
  "key12": "i9LZzLyfCHZycm5JcwehTj5kupvEKXaWcmg4joM94JAAMJZQpREjx65rt7U5Q3zrv6f8cTpmjqN9xDWackX2o7Q",
  "key13": "5CXQDNCRiryfXr6vJxNakmh4j7rgLje7BpXGH7JSFZTdrAZXRBNxfSQzb8KLPgFso2SvU8h7f5GpVdQFvUZeZZAw",
  "key14": "jAHZYFanqyNGnfm9DSSznyEZR7XCDonYALY2VRR5bTJtnZPeD37Q1heDg2Cra2pkc2d8Z6H2zcHNT7S1kSZmhyx",
  "key15": "3P8ujbygtCNWTSJyzXn9ZjFebZ3njP7ppzjDdLmzNcyeFZDBAUr1pG2K1XcAQVtDvJdyRYfhvF6oWkVWFLkWSrwA",
  "key16": "2qGCnuNmMawNeUMHVcy9CamsSxU9sDmWyNdeZhMU6DKUtMddX4i4x1xmezCoeNsDK5DX3WUpSDmiiz6kSmMrBQin",
  "key17": "21WG32mcRsLjkaXmx8aFrDE71Li5oY1ToQkBnWr6sz9Gp4HuCK6e7drsEmpFsSDAzQzCKty9yhKypGk3KD8EAF6E",
  "key18": "2LXwinvsEz9xdn9HakAAaAVB31ShtRwnhaZbo3tSzyDzEiFK8SkZJzonjWFrTwyAZCRfdHSy3aH8mqzn4NcQ1HyK",
  "key19": "3JCa8j2pTk3CRpneoiwtR2jiaYkjrrZWTaR4M5S1MuhhDiZgbnWhX8MENgPGaNL8LoduyuCGQPqcPbq5c9MvwP1g",
  "key20": "4hU1TfNM2oqqpe6TMiAdhE2Qnmz91ycMLyYMLGCdDP2PAq6Zvm6dGvRPChPYy27ooZgrevKoNH5Bzg6oSsH9ZaVD",
  "key21": "3Tp5krcjrx41LJoXrBR33Nt51U5yvcpgrXvrbnZyxPpD2UeV5d3HR7j9XqHDK1ohvpAVttE7n7K1SXNhozYRf5Ly",
  "key22": "fdvpprTRQ57AMuPQCSyXCjbpqadVKdF7tEuuKi64pQeKKhFu15RPL7ZDSdNzUWcBJ5R9JGehDbkU9TurhNBnxpM",
  "key23": "GpNHBmybUGk1YD2MunLaaVygp8bWQHJVAfvsPPzQjd3juT9pgdX4bUBXU2NedGL2W4sRqFePq5xyvTLqPAtBTgF",
  "key24": "5cCL1quGNPJ3u52SFr1aL6AGNGXKesJ2raCyjDuEP3yoJrFhMzyCHCzZUfVt4WmwY8vwPgQjZvKv3rkV7WzpSpcL",
  "key25": "4Mot3tj4AnsJERRFSGtFNmN2v8fL8pA5gP6aMjXardN6kLHXi2Hvk2W86eZPRqtzGXZSXgZQwdZEjUnFBJ5HmsVj",
  "key26": "5wVHX3QRmNHKgS69BWfq9hagbnPGERcjoqc7AfywpGhA8u8UYEUhXQH2SX6AaEA2eiBAUe97jAhY1fDAoKVYNfcW",
  "key27": "5E8oADe37dXTe2KiJn6MsKT6aN3aLarsHaNLWtnQwBdUemT9ZG94N4nbE5nGFhdm51xGoPzpCcJAWVXtzPFzXdGy",
  "key28": "4CThrKBK4E2orHpkSftU5WhtX97L5Zgqf7yWDV8pwrm72FoKJuM3WqymDVRFajnWGGVoDNp4cbVobpZ7MR2cfkYm"
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
