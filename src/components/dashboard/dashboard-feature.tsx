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
    "4r2ZpirJ6q4sTnqG8mKqjChGXDe2M7M3oXz7LH5uagQCpMnxNJHRmn6ztpCHeuQJWgst2FGVegVErjnQ2DDKAyt4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fJeDo4QystNhipSypXqX3gCz2JmdQ4it7yBf2cn3Md2cXpE1FW5Jqk9EWRDcC8yRyfTHft4S1zJXSMC3MgU4yMt",
  "key1": "5xNAcb4zLciuiyuqsb66dvb3TdDQpsMWm1ymABvzAyvKutz4azrK8CB3PYSjXd1yWWTadYWxdujtNApkoBGfMxPv",
  "key2": "5m6MuXUmNeMQk3YzgkSKtCdtnvihqMpW7jGXG8vaTzqGSphJb3Pd6GKFApxq7jrGGR2ufApiZSaidnTMqJUxYLJe",
  "key3": "4bXaM3svyDS6iT6sVt8TCkuRBt2WTRghUvKbneCNjei8hENf6cPCuSEK2dVVr7w9CTukENJDcsWXENvNJUtzcy5V",
  "key4": "5gULZN8pXLGRuqJoa82qfhzYvNMxSa8Ex2gtP1ebEezYEKnxSSLLALvEBhka1cy1vNjUsmEbJtZDFZ5pHawGARW1",
  "key5": "PQYvAk4yLonCx39h4dJcs8bcphGBHxy3vSmx1fY5sBMzBp3pWysBw6Df9SPoREbX3ZBDo6nthNPEyf8RL1sGzqg",
  "key6": "7wyBbYvyRNWSrZyp6vy9e3g5zt49Xs8kSsAtvD2gbGTKMzNU1hSMWtFJprzit1ahGsrkma9M8hZqkkHeVMCrcZ2",
  "key7": "RRCq2NjG7YJ742XCZfrB8WRB6wGYSXhMegJVa6vhJTvxa75BEUzrGcAg1EWSUt5aDkaBhHHYfWgGNQSBqY8WaB7",
  "key8": "49cFqZfQ9UuDBSwxFeZr4oLf8jnaVQacyip1fBnEsNL8Gmf8JejnH99jzSCSJ5r9AwikESXPb5enSPsA6bv2iq8m",
  "key9": "2yX196FM1JfgDmVtmiRMCEVkjTdEUuVWbnXaastAVJtXgUFHUv9ySbFwwjCMeEj8eXuQkBuyanB6yeAJD35uFhNT",
  "key10": "3TDMjQmgd5SqNpvhmwAWTqAYDgcvzY4CjN72t4jhaXTzgoRxt5eXMrujUZdso7khysDZiFx6pbPGwWQNf4aKubqz",
  "key11": "2BAaQbhhSX9Hj4gBQ816wmRRi9GhjqWim6xXscL5JEnuBpyUMQyeCyBPGwzm3Mh6WR1ZDv1dCXDR7YK9RoQiFHhJ",
  "key12": "4RC4CVYCdyprtq4aoEz4bS9nszG4nQiSKLphLLZ6MkN2vr491pBNGc1iodC4B3ue7T49XcZAb612GSg9UaxNERMJ",
  "key13": "5SRo5D4QT1cyXbdCVsnSWgAXsmAmHLGKeo5PrbXbB4S35mxibjmHmhVwzUZq9DLxVihwwVA1VQAGfJnbe4P8mPUd",
  "key14": "5eRYEJLo2s8FeDYAwDmDaKhX448mgpj9mnGFcVKV7G2F8GsQRBuoTBggcVBjugPUNksHPdz8D39VSxqz8fueBTj7",
  "key15": "5jFzwBRJwmF7dwXQCx21ZW7tpMsod3QWzdcnBbRu5HohphiDRu69BgvmWY6vL3REiwhfewYv6FQiJvCQoZ7P2XHG",
  "key16": "5Y3U7zWZuuJnsehUE776Lvy9LnPXLZfz1zTKRE1tM48JEibP2fTjJrY37jkdaTYz6AY7RPiek4R1PEijxzQy57dv",
  "key17": "2NMpnVBZ7gcc5zgHtDxnKAhwZNJP7zCq4RBxnuSm74DbLjQ29se37fgGKCGcMR2MwMwa9JirBS2qhoRvmiDmKCLS",
  "key18": "4EQCAyLDLo3CB1TP8hyYksyZTYoDVBLNmmQvRWjDwPdayMLaFzfbHCWjMU52rPw5odMZp3FpJS1QfLbps2RnHcZ",
  "key19": "wAPAwuhWNZ2CuqatviHvfM8Kf4R7HELWrsMxneD7sReTeyCNXhh3feFbBKyuR9zwZ2Lwek2bFtGGFjmhGttuxep",
  "key20": "NjBpY62W84gCueEGjcAJZuS8n1nUB78QfmvptRvQoEr29rHRNqcq2z2fY4JE1LVLtAJRmSa9pCkaKGugnHfFe6F",
  "key21": "msbjSPoJs6c72MrgUt6wK68UENYnpfifYpm71BkSQAw7SyESAgAoFh62cR15YQLoJpCrQ7zWPpPDAo3rYCpNPnn",
  "key22": "5398oUZktYwzRbiv23f8Rw5MpkUTpH1PbJ8Uk1iZPPqrSLgBxu5gKxgh5JjvPffzPWL9CanGFWMWvRta4RAkRcj4",
  "key23": "4nJKmVey4b3q7z2Wv5EDYqqua8RMnEUBEMXZQudn8MF4Vp1yufdLioEGqeJmXNDARxxaob8oUtsuKafbG6NwiREF",
  "key24": "4yR7cUdHpNnS3FDWRqvqLdjvCChBhn9LrQh6i7NiryzWxTL8pK5BbeGpUzHELv6ZVq6wQrYSj7AHHfBRfE4asg78",
  "key25": "4noZS2Kg7mN51PBhMQhic76MJY9dgPhCpw9vbwbZzdgGZJhqhLZvJWeJtoHbwY2Xi3FqPncHBcdGGF6fUgb8HnmE",
  "key26": "5i9WsWNV1JKahyeD6ygVkFgWPCRUaYK72aKYmAggHNNNfdYRHQUWvXQtTkfzr2eZqbxN7qaPghrrhBQDoMjkaDQi",
  "key27": "5X1AaSeN2wtY7JxdWBgLU4Jd5T6q2aGNuPK2aYUu1i1kC6HVzx7inRDiaqrMJEgtoJRGRjGWH4qDfQ6opuUpP3k1",
  "key28": "3Qmn2WYv2f49tYzwr5AYRRe7EkFEm9giWWAJsf5ijmJGmjLZRj2xz6WCPKiKmBisGu3U46zamJdSoAB9NjgzufxM",
  "key29": "2Skg69zEinUNXYedkComny9jHFv1f5XhTmEnGAnFBjg3CKrtUQsCxoc3YG7PPo3BnDk2hmLRgrkR7MXfvUtiHH53"
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
