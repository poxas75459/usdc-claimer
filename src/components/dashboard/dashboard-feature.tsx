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
    "656TowWnNeo7TaGpqL1aSmmDmZcDDewhFUFsDigpzXYTnA4pf97ZD7XRUSExLdMo5XqTkUmHesofX8gpcuUEv1Zk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z4unq5WGgLZk2LZZY6YYmSv4bNFNaXDVuA8Md1zNfUtAGXFZ8kiUCsoTELRLgTjy87uGfcrBtB2SXi6ACHq1FFq",
  "key1": "5tUVBQd1trNnpenDZACvraLDbD4xXMnRnsKtZSpE8s4wxjfxRbnktCx13awCfLABZbtdMMxPBnvfz7jReu8HAdCw",
  "key2": "5UJcmDeLwgpAfvjjxqHH9De48Z46yVMNezGEA6RBHEorECYWK6YDnrDqzpiy3R4sKzxcz11Xktk1Yvsa8TT3oDHy",
  "key3": "3GvXg78juEKqs5ALvSY41t8Eky3vUmyeA9bjum6VVE6Kur3QqHEe2w8zjjYi6Rv2v7snKSgcA3nc4yJST6kRicnx",
  "key4": "U1UvniS9piYXm81NHUJNXsbA1nDtrh5SfmazL656sfc6FUuKr3s6Qp7b83E4mzWhTqzyJhRDGvijF1yFziqrgaz",
  "key5": "52ED9UoRMte3H4WkgZw8j2TWkVS8r2CtTdvbxLWsyDR8W6Hr49oHwLv7kyzQCiPzLpRw5aEok4iGRoKtSRVjfmD7",
  "key6": "3NYu4v96gJQ1sJnhaDgvwCHTW8KdDqbSsiHguLFwAgcpAF62uaUrnLvAmWeVC4BNiznGGKoAwZysAyAFVjnoqhmr",
  "key7": "2yQdZCFga5pd3sTWLUwLgnhTTjgjoLFLyvNzNhtofD2vQf2msBPdCW187apyraxpGsi8EoyPBQiTGH4XsnG3qigy",
  "key8": "4mVTy1EHhX8HCbngPGm5bgJtGCSQjLZ5uQiEHNpgEmCCf7Vc7df4J7tG72QHms7BLk6snR3AvFAzKLdHo72LWeWG",
  "key9": "4mbPHpHsmB7HcEbBvx9MahhWVG6h66yL8DAVeESxKKHPoZt3aTWVNaJfzwcwwLyt1TCuvPhcHCP2uj7vWXEYMzNL",
  "key10": "4NTK6xXhNu5kGRVWeuAERmECvK2dKepFuJ7aEXicvBJjfhzejL1fqd2pA4mFHhJkKV6nqZqUqZMu1qdUfrxz7QUt",
  "key11": "4b1f3j9JxaRZu1QxwYvdqLztkdZhLgStYwuCTHk6YCmbPrSGAshx1h8aCkwtE8T5eY7cEKYLZmyufaD3fAenVWJA",
  "key12": "2hw9h9o8WFNS5cRypr2cJthP822cVuZxJGQh7GBfgdnUsiNJymuELJWGgpaDqYWYZQDtkLSeqH1N1qNB1mXwHj4w",
  "key13": "5TaTGpPy5RBuS4RufUSr2269KsinuLz2afAxw6WmLYECUybDd7SKKbwqPczeRkD1M9s6ke1C6Lgpiz8yMaK1GRSp",
  "key14": "2YMSAf7yx2eVqMwgY2jar2foGd3priMYxPoX4U6Sg2saVTP3ghefQLpAZDtPNbfoGHysDqi27SDr6gSitV36dhgX",
  "key15": "4jukQvLef7KnHVpQ2mfAEDcdavwfXdbQyANrffhv4vdw2TSjf78nshRGB2Mtf2JhnUMkFSwRULKztXvjqB4x3Jxc",
  "key16": "pwEvLdPgcYCvrJ8DGCpCTrNjnySCm3HhL5zeg9ZpzDm1LayWmMuzRfBErngGmZyAukxgZqUQA4TptJUZzqevSRY",
  "key17": "4r9yeHtBQ9uUxJ3BCpFd6PcaFjeu4oKiJKDvpBCwWm7sh5PFqb5EEN2stqRvhuHAi4jj2AAS1sf7E4T1b2XasW2c",
  "key18": "5vkhAGoRpYLKse6FKBZr2m9F83f417opRjFTWgkxEu6s5Ag7aEgZMiT1f7ZhPmsCRA4eL2LEJ9NRFA9AarRwLhCw",
  "key19": "5WDEZed22FKxrfCNmQ566Wxw7WMqKNRRrsDs4UnCj8p9EooYdK7AwJ5VnaLNwv5UyGUwMiemkWnietFJzMjtTR9v",
  "key20": "ntSHpVEwmiKNYraRTf1nSq2iKsDQq7Vsuxv5WAFfSxbDMjz49F7Wr8bCwRMgQELzJkwVkEgkPHomPjgUCFw4eo6",
  "key21": "79iPVWpF4QEZ7tgf5kZ28g8cVaDBHNJahs5LbTie7HnWKBv6aCfPCVJtCntBJMtmHrsQQzDu7pzkoPVe5W5TemZ",
  "key22": "41edQPtvqsXZK2hZL7qEr6Wqh6yJT3k6TwT6eXHE7Eb3vqZnqERaoAs9pypaZDzzyTGwttfeCVNNDGzMEJbWRMNA",
  "key23": "2L4MdjmRaggMpbo3NP49mtsofyZxLSbMQSszR8DYEmeSy4AutuWChFENpT83VWjCxSPjXV86aukquT6ynAXYpEuu",
  "key24": "5FQhUtexVK1ncMmHXm6NhYCpvLUprEHCJKKBxfDNWqGebTM7Rkd4S9wjRHY77hbWFMsqNtq2jquJY3s9dqmUUMry",
  "key25": "zQAv1QB1k9CbFiiwvMLNDqZYThdXc5L3jcn9Fa2yzxY9gcTrtzomGoTbH4fgHrAoznKPAV4vmY2rBE95CpmfN1h",
  "key26": "4EkFVEJjAaKPJ6Ywyo3M8K8hjQSqoAWu4UiMA5buCXCJn4WKoAhxz2DGxSK5wSS5H7XvUsaYjhCvGqrTfxUmK5Zp",
  "key27": "28z3Wch2q7eoMoANAMdfsGdv4gm6XHSjJwyVbNbBP7z8rBQvMgFiyn8MRrJxPm8nCZffo9WPWDKVvbNdYwvVUtXy"
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
