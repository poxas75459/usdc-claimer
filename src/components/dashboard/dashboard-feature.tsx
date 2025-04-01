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
    "5Ne8PHh2hvci7oVSW2FwaKThk51CyMQ1PmLe3kwMvg4Xce1e3e8YQn3fvAmccqrBcC4bu8nxHQy9oJdtRuZPcLgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XDqcMesP23FrFp7BwbN5b5aCaFGBNg8ejPFnpruQaqUgUcJM9rEb8A1hZ5S66puQhsEPdpXj6iDQNucPXeHnqT8",
  "key1": "4Z1k9dyJAwtBzVaYBLVQfQ7KvtToa1wp6hsxb4hL6pTigaGwEvF6GFfwpbPifz4vkJ4iuZ4aJ3Yz7p1u1ymkYAkf",
  "key2": "2BLBSN3Rti1J8444HzUrWEFe77SbvFo3KAiYFujLBF51RzkGPe7B2sHnhjtgzgHw4Uz4yDDzjWh2vfGVBebnr3bG",
  "key3": "5Pa6zmfwjHD8rSR7sFqZL9Tin6QFqn32XVrTaeKAtErZ3vo2QS6iN2225kmPnVAjWaaFsDmEqpTMRXriNV7egVt4",
  "key4": "2UcAxh4hAYUmfr9B7NMVd4uh5cNc8voeyRLAbBRmqQCBphFZVGJRpeonc4XaM8HfPdFy2aYM5d8tjZfT94LSp2r4",
  "key5": "4fxeXTBVm6jAuZjRWcHMCsNxnugDUjTVwck5ZHgajikNAoR8wGGkp65Vy6QvgszbNr4qvDvH1KMU17x2CBXW2Qpc",
  "key6": "2v5AQQqLqmXCBZdU5VBP8Voqm3VoR3fShWEim3pVQSHvVNjrdZbgzhWc34YkLcG6qvrqeLa6uBbFURCxLh94sJCm",
  "key7": "3vyayaRdbZaJqyagHyhkv3sfC1EiyixSDWJ3LyWmygZPez4VGmFTXrxEUg4SKeqnr92DYnHVX7appZFb3MFd1ZvD",
  "key8": "4WZSn4es4q6PN6hk8RhNMj4HuLaapLASendjXgxYnGCHj2wc6BKneEe7R5bry9ZNLQhDAidg1p7GgPDR4KdKgnSQ",
  "key9": "ExuWguGxdpu96kJ51qChHQUHEy5KvZ1RGEd9nB2CVk3Rn7NdtMRNK8x9LjRKuAxv3jcDoZorXLcF6S6a1gq3GJd",
  "key10": "2mWDGngakewbZT3wUXUJ69MpzhDxD2wHsBkPeJHuzXworZhpn7otUacRYG9gNVdTK8YxuwuRQEp6Ug4jAyoqK7dS",
  "key11": "3rRJp69SQNW3PPF8trgcoy1AnCjCQbfPGAQpHtrk3cVHQ5fjZ2yvtpxDepqNwmaeiJzrXX5N3zDtLnqLaDqfqjjj",
  "key12": "51y7ECbCznS1LhHssVdHs5c8mEy1xTXmU8pyw1FMsKW86F5w1rjqgPh5foMoCpLa9xrjUH2rYHzeEgk5iHYC9uC2",
  "key13": "2GeV8SjitqqpVETQSGvNw6mBtd5w7LEY8MGJS1d4cCqjF7duEZ68DgQo5S4tBYLnZcfVUrkvPRmX8V3gmDBfi5sp",
  "key14": "3Rbxci43fd64fT9tzWXNXGDouAudWJ9LFYjYciQPgUYvqjwBqGQ4EN5YHQba19QFKSK28zdJEDynrXW25C6fLYec",
  "key15": "5j8yyvkHW9ytasKDJReUN3q7XF1DtsVcdMUrgn8KThPS6uwwagzXPES1ZhFqpqGdKWijfDymnpsT5z6Gfa3MpFAm",
  "key16": "3KabUBi1mXxPv674E48JTdGE7azr7CPSomqNBxVvuwg5ZWFcBieD4UgRzBV4cs6ZJ3SgZaDXiNgfA5hozuTHs4tR",
  "key17": "gPDS5xAhK9D1uTDraSUBxtCaFfWLPqxKfhFqzPBhCfnv6gKGHYP5tAG1YmdEw7QvLVda3imRkJjYJ2gHggKS3gr",
  "key18": "4GFDYuncxEqczEA4W4jAjyJZiyzVLfuZdXnbAooMyMx5wPpTH8YzGWfjydxN4ht6vGVCGT5fy1Yo8UmMCT66EwJt",
  "key19": "3cuqXLowzFtRfTAU1ssv5fbDeDyv6EZKsyfg6h6NoEtHZiPSCvmQRahyq86Su9zAyJP4upk9e5kjNWPfDo6stzii",
  "key20": "2KyyqAfVhGjzHJBP91CuAxr7yshXtZXigAydomDBEodf77CLarnC8FovCrAqjWeVjVSQLepH2Z4U8PcEriQrC6c8",
  "key21": "41a5hyTvLj23Xwu2mZpwKtnxxgo44VGzyXF4tq2nZ2ZzndZyH9TYgbjbBqESTR1U6iRoxq97gZaziEtSzDzyq37h",
  "key22": "2jxVpLm9AQg55JMz52ymtGE7TtC3KphKGJkfhW2QfwhDdHytv1MDmhLiSskzsZDs9q3PPtgB6Q5nqPYjsHf2jA6B",
  "key23": "5ZiADFAKLHo7cK7XdmNrLf98fFNzB8ZN7fC2VumhjDQ4kaVxbLjdc6db81Z9anSaUjWgbNYLogw2XGZZe3vuuSSN",
  "key24": "3XNTu1mtk7zBWwBanxG9TeUzCPZrhs12xe2wzZsec5q8bnVdJX7iGSXRtfDoHQuESGEFcy1oULcammwakGge6F8E",
  "key25": "4LjZkLQsBifpNpEvGg9oAYJ8n3fnxETz5LwoxUv1KVHCK81H2oJiJxqApuuHNer3R8z3fYE6ryn7BmG2Mmm6xF3J",
  "key26": "4APEDC3tANhg6GVgafF1mb6nvBNhuu9rTnb45YpjdecvhEFGKY13u7tnqPYSdmZoRHhxX8Nqcrq3QC5vAdJX75kz",
  "key27": "8giBNqC3wKodCD29vEm5U717ZMbu3KuMYx5H6gVctm7wy5wMXK93qE1hY9hVnsTuGRvs4YBpkS4KydiuATNMRMa",
  "key28": "2rnLUJmBY9x1Yuv7gYcb8vVT3ug6McYBaZKmGEkSZBoZ6pCW86bjYTHeKXsk4rUh8aNT5pFLoaDakUPWpGPTJNgv",
  "key29": "2w5o5fJsUpRTDNAYHToxjQmYaS3iUPm2Zq978759qUQ8rGsxxXz3tsLb3Nt91gJKh63u8FUtWUH5T32fhLJwPXWg",
  "key30": "5JRHu2Xe8cjVPN8o9K2yUT3wHwFzbteZUmR3hGKw9Q3K5JuAQenRu7nDye5fGJUDLEjs6xtGoVMRCaqF7GNftQyP",
  "key31": "4B2VESsK2LteyD5fW3LXfKvDXpzJmkcXJsc7q2ZQa12PHefpKFHYoUXkHDDpVN4X37gNdLkaLmsA75kcPzu4ZNnS"
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
