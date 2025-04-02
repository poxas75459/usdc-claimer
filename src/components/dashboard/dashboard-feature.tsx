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
    "2kfysE1addhwgubusEgZ6FgJPgUTXFne8gHeb54BPpZee4wE24EgS7UtG1ExWViRRuhruGQuU9rDnUaf5n22jCe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d8z8xMMrhFEEPH6uUQ5QpLxopkL1n9H8bK8BjxQ41BZ8GWyRQibCu1j1uwAQ4nMebT3ynpDEsxTzFfcDYbHQ8nu",
  "key1": "n8NHYhhPqi9A5iTG5eN5x8q68eAiD3SxB7tS7WuHKRMaGME2jXZgQMxm3Xjdxmxd5APdw1YEXLeWG4cS6hdmv7X",
  "key2": "28jnosDm7TdVmdGSmQM8fEmhKzz1gG2t2W71sW1zfSM4pBih4xp3CrFBuV5tppUPMj2JR6xrBy68VMbDkvB5gPZM",
  "key3": "5PnJZ25zC6ipJzWPUwb3P1S6AsfbRnZd7Enz5Cvti9hCfsRxrsLQmCxT1heuLnCaRkHoae38qsYJDvGgA4Aq985T",
  "key4": "3FcAkwunMHuhJyFPQdVstemiGNJggbnUEzzu6SAdWZZtnV5Muo4WQ9St891NSiXj6qEqyjoUKBpMa7eetzvuSNji",
  "key5": "3B91D4evEwimbe9EJsJK987ESUsdydcCSPhFnNWt4K7b8YiXr7DU2BsBEPGpi4kSznRowmeLH59yebJL3Uru9xMy",
  "key6": "4vX72rQL8sMfYUd6GRNDdWtroqnnEN7wCYZc9R25m2a267kN9dxRJRCdaXBSSNMrKjZxAHyBbkn53QhCH5T7t9zf",
  "key7": "oqRu6b8PztGDvkCB5e3xXk5gdwagytmHtKfP9PSAEKbRT47HqXoWL2X9YUeNpdvG2JPGPRbTMXbYvKWDSnn2C1B",
  "key8": "44tyTmxBBHkZEyYMB1DZ8iatsejaEpQ6Zc4tgu4n9KaGBBZRg1z2VpwWsRX79AfyKPgb1fxY1apKTm41T8Mi1pXn",
  "key9": "UF6i2eMdfTnChJZ4UEXenPxLjdBGV5wPUQ949esygkynhxK7dWA8SciHcyXA7TAYZCjmu3oHvBWLK3QVQeYfrYV",
  "key10": "4eGxgjeNnQm9TeJkDSauGpUPFME9dmWXSJt5ecyJQeRiSP8mbUN3XqhjgdJnmQmt231yBW3UXqZV61DBMgXdVemP",
  "key11": "2pVEa14mEkWKoY9aG7DfTBtfFM7cVaozdeS3ZEBHrtHdooDeTCWwicCMb33Xkmazo5ychtM8bj19ASi6FzAgMh2W",
  "key12": "5S7uzpNqypqVkjJERUag9mXHYrcDXBiKpwE44wsVd5kedvVxYSfWAwfadMjkg3ZXQm8qQTubPYxceKUHygtvvkM9",
  "key13": "5ybPWcAe7ndKeC28ernHHN2uAdvZLrqqhma1whCr5uTh18fk3XiZWZWK7hWXNG9Dnhb47FmqCQEtEMToRNjQM637",
  "key14": "5sa3Gv3wp4FxAtBT9y7ke4gZ83Gvnu9zfXkK9E89pcG5gj1mhKGWVTezyYn9dEaeLQwQcNqDqULN9TbdAYd5fwPy",
  "key15": "3q7Nzv9kvmJnt6fctkSzowXrSux7V9fFaBGGYw344jtE8LU3fZrTqkkEfSgpSrcaegkwM2cUpHXtkk1WSc9wwmWP",
  "key16": "GdgALPjWAXNkyJtvZZzbN4DEaadmfjYGSyByW2AsCrys56Cu7B6cn5AbTJmLonubtMdsHbqRaagR2FP6fyQXVai",
  "key17": "4wfVvzsfvcf2bZv4NGVc9gCXC9KfJxARFYU5xAWNtjkWSntJBATCjDHwLRJuGdKyMPaanK3cZGacd777bVvbpWrH",
  "key18": "4QmXvW6g4fuf83SEnp22KRKaxD5JwHTuXi5adpmnBoF9G7ogtCfdkajLiFQ9JTUSmSXW5MkWPNA8crr5jeNRCLsW",
  "key19": "4q1wVHAF3fAxDQbrDBeUnBk81SddAp4qLyAV17qt53Rc81VMzoeXzjwMQ2PG5oGmbUygaGeUCrF3w9QJiQp7qq6t",
  "key20": "5iJP1BWPSCVuvecVziDKtC41hiFJ4Ly2517eTauRrZYQDHYoDpHbhjjXLemG4YHo3E1JosXqKunRyoieNqBSiAx2",
  "key21": "3Y462Sw8pexkSjeUcrFa8A8qCVQAC98ie4VG34Wu36aaMggptLMthZtg8Rb8Ah4gVoivRA53YGkfFj88ZYXEf9gb",
  "key22": "5arBjf9ZXXj3P4AqxgqxtQiPUGfmnbws8Ac3M3wZK5w9vpsLeGR2G8oXvCaqSnN3gatpX8pAJUN7MbLjsSaqgwSL",
  "key23": "5CgcjwHeeAHKyXae4xEnhbmiNRbupYvimeoeTXLxrot6q4fgAbp4jgioCZTWn8pxyEdsjAKupk1Wx1zBMmfe66aN",
  "key24": "2g1sEQXDmxpdmx1BDBhzy5KZSkAJdJL216uU6dNwVRw7viDNgHmDwA6p7M4LFrHqemgLLbnnAvLBUGEGek7PbRr3",
  "key25": "3geUSAif9ajbB7gZAJCNenxNnzSLZEZSX5eb17MoeJUQCkxFFWR9XXigEkZf7QSqk93oniLzksxzGvTWYg4ZgrKJ",
  "key26": "53mK133woXjMdnV2LrzTeBEZccqtXyTwBRQqH5VfJTvapKc8w6d3q5PLg61brpXdA1ZwBctaLRMowJMzTqu888jL",
  "key27": "48qJEViqTFyejG4HwX3Qjx9UYdMvXns23HE6T8C8By62L7U45tgaVoaSv1Js7ndtLieEb1BMLTwzYAP5fi4LNZDN",
  "key28": "4x2sfuH23o6g2ZiPoWzWchWedPU1YU7CNTQnyibgeB6Kf7doBJmaAMUhTPJfdh4KvCb2wTWuSwKTdzUuBSw4wLzu",
  "key29": "2LchjajSxjdeGbfuFX6AyUBPDwroyaX6e7f4x4zANyxXV76Ab8ZTsJgrriLATfYKaRdU27wmSntXySp5PisZNJtG",
  "key30": "5twRQWk1mQ7oawRdXengDA8A3ULh2Cxac5Q339jdZLuTpCxYqFFtVc13vLB8emd2h52w69GAxvxG4saBoSk59bRq",
  "key31": "39SEEKKVtY8ku8ftyzrwEsJrZ4UhakErFprVCdvhy97Nag6QuDJbyD2kNWxhw94NBT8UobK5tYfNeGNfndp9VhvH",
  "key32": "3ouHmLL3enX6wHSovv5u1eFZChmh7VVfGPna6mStAUvpR6xm9XMT1Nqr35ZENg5VKuAXZk4A7wzaY2Ymqp4oGvFV",
  "key33": "3cETu17cR6jyzU2zs9PhBFup6QLoX3yrHEijp1i8X5eoRjxUpLLUrFyUxsC9cyyMFnFSUeYW9vTqufxMQDNBsra1",
  "key34": "3rbTdA4Q7FZ9rkwiTsPDU55vrvKK1nPYvqxDtaPWuZTmdXUZrWKS6r1xr4M45y9p7VuQMjx1indp1231NVoTZDt9"
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
