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
    "45iWA9pdqxPTwAVBCWFprbzaHLf1BMinkes35pC5WAHTTkS8HVJ34YF8gySh2b5fHSUpm8DB64DhLKXqJbu51aQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xi5bVPxvhH1T9CF3uU75t2h3UaqSxBCNSwEhJ2tCKn3W3g7qH1foBHKen2urQYqMoKKMwJkc9w3TKW8KSN3SfWm",
  "key1": "41N1nF231HwVsZ96kGADdC4JcFPvyQpky8fLBQJ7ueuHriiBbxGKxtjamKXzjJDFqGW5YfUSLdWf4AQwCcUNqniE",
  "key2": "bY7uM7txTc9QZ7sTEEao6q2qFmcagiTUAVA45GyDsZEdKNAv3kwXaFDfW6yZfpp1SnGHLPmZaytt4WH9PNHb23E",
  "key3": "3xsBskmL8j7teynZWP96TGdmzReBys6fvCVpwmFKz6ENcpjEAQCXG7QqRpLT1wQQk9xw4TdtLoixKYzePyYA62q7",
  "key4": "5ZpGQ6sK37mPDvGdDyvRB8hz4gD1KXP7cZhuDApMVbFUEj3hGraXmfy6tDsvMqwSxxscNMTqSoS5aTG3Kjuq8Rp4",
  "key5": "41eu8ssjEZVgQcDhHfY7JNbes8AT1kHSg5xGgNVoCxUTNqaSLz9Qm3fPgvbgc7JK14ErTY3bXcy3dbNQ5HtXR3iE",
  "key6": "u2X4bbyEqKqU9rupprs3pDkQ8xTR6S7NeBrG8x2r7Ho5gJh7u1ZvyEqGtcmBRNxBGCzXViZ4tcLkfUiXEWYSxw6",
  "key7": "322gmnesBEmVhxQ7rtvwSa43SQyCBJzS2wkxxR2KKq6UNJdgbag3dRdAJmhh7WQgb8XXgy3h6Z6WdUBfw8YTdxxb",
  "key8": "YnQNUg6onzpCsyLGhaiDEQ3JAfQCt1qbXTS4J6bYggCNZSD83HseEH7CWgJ3aLF62U1TdFVomV9QnDi3rjpvMZx",
  "key9": "2zYiwdMHmYVdEDSisCikXnyvMGqSvTMvspqxiEf2FC8QJPffq8R7HYewo6SFggRQjUvmym2utH3BjqSas8jLRDuk",
  "key10": "2N7efVcVn2CEQH4DXQUHREDU4vF5martjcKvThE7cwKFcNKTUyeHWG4camw3z7Ut5eWwaxJVqMiyrmWXFHC4ix6J",
  "key11": "3gykoYPMcz3wnRx2wVqecuLLUJksYZB24aNzbygW5pR4nGmWK24ChRMk3iLxoatxmtSkLcXUFpb6ZCQc4bbDYyvW",
  "key12": "3ARdmp1iJofBgxHwoxBhbXxAwmRsnUUB6hx1w9rg65oRAVLrBdUYfXPFpAYsgWu97eeMLGh8GBLDQxx9gxLkVMzN",
  "key13": "2PrxituSwxEzcpk86PBK2YubQKUc9rCo4ZV8xQW7JJZbRKfuJkDC1VbuDFrpnf2aBjWavFrpaVvLhS19wBSt61t5",
  "key14": "3BHbVbfEHaPsB3Byrsr8QcPVoDtYuhVhpAuHVAtAesC3HwvamhFk7wpY473G3suQgCbdnXgG6d6DaVF9Y6Lwrdzz",
  "key15": "3DueEUyJgvKt7C4fmjK8FQGVXwbJUiAxaS4a5LyJnF8ip6i1S4TLMHpb43om3WjZq5JkaytaJeeKKgeQuiVFQEKe",
  "key16": "LSFMijqSso3BnFyxxwZCsYiJp5X8TJxY5Hk7B633hBKKpGF53QNCa22TC3DGqmpZ1bAQc6G82pe7jE5dVCbqD35",
  "key17": "7nSVKjVbY9dLoD7urAWGvh3kV4M6NeU7sWHe2o5DCT7mcSVo3kbJsvcukhhRwT3qqxiJsD1tSdaoYNWrsDjFBoM",
  "key18": "5Gu4ZttRrw5bhYHn9Z5qDqih4QcjQRCoMb15PCuNGvDTtJazoj5t1GdostAnqkUMveib4gGH1Qcqk9Xxm9r6QECS",
  "key19": "T5aRzhsaWbGontJw2WDRkUWkQuoTLbWBzZLMvjQtsWTfadmmvRxHeTWpATksDcnNiYZX3CLZRDdueumF3MLNu6w",
  "key20": "2UoWyLNjdUkcCQANVkwvFR9kXpBB9jMFSE8L5da9CLAJuiLRG2ZTaheTVKKSixx8DUGGvLGjXWVv1rYf4tqXsFfL",
  "key21": "4MmjbTFrF1iGj654a3rf9QZ4Cj4RSDUMu782riWb3gcnLg26KRaj2LkAMAjpTgYAYUzmvotBuzL6wBsYqMYExPpL",
  "key22": "unSSvaes5gG1cgfQ4omCHccnk9qkNutQiAeUL4E7gxPBgCkCkRCQX9U4yeEu2JVz87Rne2yuYPgVYtcj8vY557d",
  "key23": "3CMNcZQQ8Vm9KZGPA3VSuCxvofj6J6oC2Z5EkthXAughXHXsaacuxifPyV7eLSRVfjergjSvmXnFpSAnss9Hh7w5",
  "key24": "3x2zkHCWrGLu7vCCV8nLxG18DqHVgWLDoxv1PEGD1phKYNfnF6h3bu6GNRq1KPcMB74Hf2iG9ubNkomrcxXT33vg",
  "key25": "tKtKi4ckSewjbvBRQDhonMksTenLdt69LHSqa74DopsZjo3RaEAJkA9Cwr9h6WsdwiKtgtGqqaRP9DKkmiZaGZz",
  "key26": "5k2ccQSJej9sKZXkeEKSK9jijo2ywABgpDHE7s5XYg4idWDAJcve1921XCPGfYEh7L36NjQCyDG7ow3qzryryueg",
  "key27": "2VRS117NB2TFh6DufFvRmHayhzVo4Ro3uBqvKdfGmy4HpZaCPeEKE3qtecMrCcjz4Lj1FyZ5tc2waLjwCEzvswG6",
  "key28": "63cb38h1vuBytFZ8iXHjhUtkHEG3NobRP1aJgtJpB114fGS929kJpQpNjMCQ89q4BnAqDGqgrS69UxMVvDAMFjWz"
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
