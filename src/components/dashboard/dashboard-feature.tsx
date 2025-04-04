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
    "2KMR6ivRpA3vQeDvDd7S9LQGFUMcpSVTQuEM4zLjyED1Wn2gTg1s2kENxxbQ7zHKDnnFj4581udtSAw4tQR9HHD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m9xKPd97PQd8MHZzLS1ZRGvf1tQC3N2Pj8BtK6BkZbjkfaeeBcQogXYAkR1TaTVrZy3ELKx9UXktGFR4JzuFDCv",
  "key1": "22y9upCPqE9C9hMFboWKEZXZLaoiBgBBijJagrRtG3MfdHyHswJ733hzMDrd31xxoH2e8wrT8QfxibHo2F1W6n4N",
  "key2": "2FzMZebKWrNTcuxG3kTyatEMk5JhsoimAajznuZ1cLGSiwC1pv1FX5MSsPxJVL1Ra3v7pTxyJTM7JyyX8J1RRA8o",
  "key3": "3za2H738kQF9v2EhXwmg8YXoFjo68EgWrSfjtywEPt1tngzGb4idyytD5t3hvXRtjpmQPmfVdef27mJyze4Ebsy2",
  "key4": "naHofH1BJiQQX8AY9FJhtS49vyednpQ6XAViNY2gewaxGAGWEkdbwfqfYfJaa25PC6EybjVprWeqNevChrU2STN",
  "key5": "2BTRZzZA4exTuoxn2NXuAQ732Bxr9pq35EZnAmrsqfwvFM5jD9Lqt4HzBTyjMqVjfSQgvvinHLKNpR4GjTsAveLU",
  "key6": "3Uf9cVohLJGVQteuUitpRssU8Vtig9A4LpowgkJem5m8s2vRergZDmehK7PGHHJsDayDRXbbV8ic49fxD7KA3hPr",
  "key7": "58chpmGREjHU8EFfR2KgERnTHDjJcpCFREHCcMpCBnYkarYueCumkGTJYGxL8b2GTWcD9moiU6DjonqwJk6XXhuJ",
  "key8": "5YVn1mu7MXFeebxVvu2MrgDYf2zhiiLT3takyGsqWeYZUZ91UvZ74HSPPVgb4kyP6HiMsp8ymiZXwKhZVgmUe1RU",
  "key9": "5s87NtqdHBBs4MRZknTUmgaMoRmeFYLSjoGXWh3oeipxXSr37VX4YNxFQ8qzShPJ5qBSv8G4sCngpKTDCr7Ymxow",
  "key10": "jKWVYtFxeMK1Lq9eSAKKZ7HF6m1nF9bt9PS6tf8JRjvRVgLXjQcxruEu6c6qctNWP2zpNXjhScqqSViG81WT7Qr",
  "key11": "2L3xgLEhpSSc16iSbRLyExK1LQbD1Vuf7z6tYD31XEQjMx5UfsaNXcfTR28M8uEmh5SJh85JdJjivSuPe9pd7sNT",
  "key12": "28fRy4fUUbZbdHNQvd6s2bgCVW4pdzo5HosBdTkgVXmnaSktDhZ4ioVgX8SN7jyNN4tM6vh47RR3rqmmXpbVfnuT",
  "key13": "2ccApVyTbg5RAnLis5RQjZnPq31fYcGYSVkkVvPRoWY9BsY1BgjhPxzbbs7XE8e7xGK1XTLdv6HmtzLZ3Dj1WnBe",
  "key14": "VFAowG1NqEcxECUhMjd2bFhbNGQhpMmin6sJxDFHEWQyKx2taUNeaqUki5Z5GbGZcKQXqTQxZoHrXF4FYzXiSFh",
  "key15": "49YQj1usQjeJxd7BkX9ccMsFnqXjKm1XQSzVEALX4oPUBmUqbSTEMgBDBdMWTor2YBNJDoTcoHQ4QE6SpVAPvoSd",
  "key16": "5pX3JsLkpw7tU8WCqHEBXRfmb1FVY996QN4ELoxt4fgRvXTpV4qWQLfuUCgG2q4xuNfo8qMaUDGnFSygAxCY9w1F",
  "key17": "bjywHzZfZLhrGtjUi7fGZ99EhzDhUMrbkroRcstf9sVYxowE6TRZwWdZJxJEzxXdnv5Rta6LgY21R9F8jdCUtAb",
  "key18": "2nAhteCTm5HTebnDNrEbqimMJqpMfUuYMhGxEhfTEhMfwBkGEo2V7aTqFVfaGvoYNjAcwXY5jpzd1iXBARGVEWj1",
  "key19": "3KkznyEX75MU49QtQQtifGasDhNqaoWxDTpd13iKPfnwa31MNssPMH3kXJgcxVWChgKczHys5UoVK2vGYvwraXtS",
  "key20": "4h5gB68sPAKKcQjMjj866Pom9GpzMAPfMQ94QWLdYqkxCuazGNbJFxpcDSBnuAc9ptqKcRbSDwc54Bs1Rn4F2fFq",
  "key21": "4ydNCqeetFVkYfK6n6X8ukX8EBm5g34GFSDFRAb3dchrEiajguPAhKY6Uso8kkWXG5opTtFW4ddbjwcUp7jF3y3D",
  "key22": "4v9fk5tGP3L7SUjnnwuF4PvWAxLRzqPTGyPXh1PRbfttwqswvCEz22AGbuiuR3FtWDFgrHDw1LKv6RSJML6u7rfJ",
  "key23": "28ch6zxx4Jm9UaGsXd66NR4K3Co9nuK6wmynpRRh8U96Ho2oXci5z63Lx5oEhFw3iW5yhmMPHQZLBugK3rgkvVT3",
  "key24": "KDH3S4TChX2BvGN8hgiitN67n8Ppf1nskJeiVF1jLHWupC69ZFyXd3sqfpzMuAKFHrUFFC3SydxEpzHH3qiBK3H",
  "key25": "2f5nqGFfj4RBVHL4DUQBdDAAE8iSg34b8LqvTS8EWrMPKgBvfuMApdnmnFaJzZZATk16USeD67VSCGz5H3QzJqS6",
  "key26": "4RJQ3LZzhkviAbWPMfcW2QtCHuPJUVU38eoch35aH6qGLy3SpBcEJG79qaPYKnEeteFeteFSfNu1xf7uXPDj3JL3",
  "key27": "3zqBrW8zn35vRH14tqFEUoxp8bHL1fsVV1nSeLS681MTJQuq9AAo9Uf99qjaDRhzeVAbi5Ck7iMweWrBU9AVoo9G",
  "key28": "487gbvFZCFZCtQ8uhkpqVEHbKghLGTpqVZja3DGFdXdHrfgicf8wEsbSysVgx8G2tHrP25TbTCUpUCD3NooWqHLK",
  "key29": "5uNwpvJnhM5mCWLe8C6fdXCHnZeuw4u4BRu6piA3nygFupPrvvMXUs1tsUV22yJ9fToHFco22LCFdJ8QrVbbE7sz",
  "key30": "52LmmurCM2rsbp1qEtTRR1YmKAE2U3hkC6mucizQkrJ4heuErSQM3JNHUFCV7RGd6CLDAGEPXQZYcEekqkkXVMZD",
  "key31": "3L3j739wVwj7nCPCXB92D8tANMGAUVp5WEA2V8yK6hVenErwzTgidaLXdHH3wS28sFhEMzrVz5EyWUHo1DgQmQps"
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
