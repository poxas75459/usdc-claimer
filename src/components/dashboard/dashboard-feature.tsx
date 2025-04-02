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
    "2NCemXj2vh1gNWJan6BywBgjRd6A1K4HrsP72mPDd5Hf64Qnf66FAHs95zNhVfsjKLUmshkCjpufQJiZ6LGhPfKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "434xWUfj7H56eUBm8mvvSj46NTo1g5NXYEeSY8TpKZdc4sPJAyDycy6dvQqGv3xgvFUkBVyvftnZhXzspGj29ir7",
  "key1": "8Ubxgtk2TRe3DeeM7ij94UiMKQNVkx8eUthipYyAkpk2WChmfbG8kZm24vS8zJSfvmVe1h6WrsyEqaaHgU7YLbz",
  "key2": "5etRf7ifFyEEuxTpjUUKCjfZHwSUbXpqEaCT7ekahAH7u3tYnq8EvqYCHiA6HUFUVUqXPTQK52HsGJrctZqz3eqv",
  "key3": "2hMWWv3FLjRDZFXeGP438gDT3soJ8U2pPiS1dmnkZRY6tmBk6WCc7NX5jXwhxv64YRNfXk8PcLYZcSFCwHZN2Jwo",
  "key4": "5iTwLwTR8NFkvZxCez29wx7jKKdppkpMXKSTEQVxurDS8TuLwXi6xBdoCxGo6Qxxaj1v7YpSQH5TCVar6xBoparG",
  "key5": "3xVYCi8ERPybwFHvcu1nPv3wvfnYBZakiYopTodtExSP6ERWB49YHRxVe9MYMDeFhhGVYivcChorR4bNjqmNxMwH",
  "key6": "2X7Qr5wWt4uXRzKw3dmfYGk1yR5RmJzu4jJpnro995oy7BqCgrCC6cwD852fQ3G1wXVHpKd1hw85e5PacSrSLwK1",
  "key7": "17Ujom49XYsoZ4Rjy8wxbPE5LE7amjaef3ttrmr4sqmpwoDMkJmgNLfVGFDW5k73wSZrqTgpPvCPT41piWcMWdE",
  "key8": "4zwhvRdvA9cqtZz1kGTZWXMvkmhA8NTrzZgB76xwrcENamrwQydXP5ZXyXsQmaD4ovmNnCiFLkH58MKBjkK2bMmc",
  "key9": "4jSNic5LsuU2MuPzwms5VK2uGynAAo7bjGy45X5bJXGvUUnqvvCoXWxhuQYkodjpiVbpwtTJzjqzXvBGi4NBgSSL",
  "key10": "5hznwMtPBhCpBQpTuwpf69d3KDxvm3AjpJjEYppProZYFVEkNtNS5udCiqsxGpUeEmQztPsUXU69D2yT9HhDnAjE",
  "key11": "5aRxcRHiJ7RMQexAPF3X9RNeZgta3RAZTxeSSkaA8N2oAcknGX2Q2f3W6EXGwiDzp8tUtBecEU7mWUrYqMHtPT9t",
  "key12": "VhATqtewQ4hA6pgdMiCPqLN52AUub3TyCAZpc86yvD9ZVu3UgFXjZtA2wBy6cYrfbV6yXYvsnZzhWRdgvh2VWug",
  "key13": "4wxsg3hwoW24hdUPAWnfCSjeSUdJTCo7uUsAN23b1WgP3sjJy2dVAv54cDWaosmrmA8skg7vVFxD6EcGUmDwkUTK",
  "key14": "3He4YygA3dmKYB62SHfL8izsPqCLR6gxSeruEzZdPwmWeqwGovzk63epuz7AjbbU8ZXqriva8zySDcv9kcAteNxV",
  "key15": "46cY6WSanWhNFd2nTeVbBPpPwVBJpfqXUKN7KGF8hSp3DCeDZhUd5sD9q48RG76Q9mPtM38z9StepvCZuEJnR5ja",
  "key16": "54K8KUgMBJ2zcsaTcXjqKnnFYe9FLSYBuvWHJE9kaFDMdK5QvwEAoQGZH5Kiv344ZVUeJoVwuTB7ZRSrFhuxMCWo",
  "key17": "56L9dPh9FxGAET8srXyUVhTkEWvnrbEDbpZ4ggzZdG5KvmDJgjXb4qm3xUurcWADmRaxZ71CPSAMoapC2G2niniu",
  "key18": "2s4kuEmHxXA7rAnHXmvTbpeR7dP6sRmuhHgtMYickikULjgCjBE6TkRxo2oCsGGSY2ePELrmdbztb5b5dWnhwi5M",
  "key19": "4cr5KfEKYuyao2gkb2VDPU11XXbSfkuLFryk2AGUAEejFTNP4f7vevWTDciReJPoT1eaiaRMzBGBk3ddQeqb3wm3",
  "key20": "4vr88QJTKkkrvDE5q8jgKbJS8ZFX7ejHCdfq3XqwuoUZtoyjxfgKPJeJDrqdnsm48sm9vcYfQskM43ZVKuHfBwEh",
  "key21": "3o6xkiVwXbALNPQdU4AT9H2FW18tmFmC1CJkTUZ2zz6DoZQ4YEwsrfD14yvX6kuPbaPXdNy1yMEurnQdJEpmhMFu",
  "key22": "64yPivsaAPWikwoNAtC8kHo7MB7dB8zKTtQU2bE3TVT8soQkuMzKob4mC8Agfau7NjmZpVU8Wgx73tcGxa6D5S9w",
  "key23": "n3TtoLutt4YVVwU3nKqAPRAt5Vx9Za5SAGYjbTHC9ENH9RWVeGyzPBSAgHxhFCwu3W8yiY6wW5Abn4rkF3HgHvM",
  "key24": "2A765m2x53dC1FAqb7azueNXcyKeaAd2zBXJvduLrLyEgW7W2YVbrp1z2JriuPvL4Bpa1zsaTBQmqCHRYPRWig9X",
  "key25": "4PRY7fEE8xzkniGpMdAjpR4sKtSc891tfYSHF6qqM6QSq49rHv9ox99RYShsxE2kD8TE3jBQD25RA7STBcbR98v5",
  "key26": "2QqreA8cC8J6xapxxuK7o9fZuqJzDY3nHTXtSdJHP83FDqkC1AXiU7H2XVQCA7h2P96g5MHGdmpas3ajvxvyHgPq",
  "key27": "4Uyu4w1aTXHsdK5n4mhBicWr1Q9EY9NLmLUEciTtTeJDiW9255K9xUcnwNearnyCpm8G9wH2h9PDy1KgCsjzQMHr",
  "key28": "KdnaqYLyPLuRWM5mKXQ1rQPMyV1rQcYPMkKiGU5XtApPJNshWgRbJRB7hFjo3brUC43e6LxrmV6eiqZPWaBnb2J",
  "key29": "3sHVVCEgBJyife461H2WJsfhukvDZChkvcX4rycfiAyNY1pJyWsmVpv3eRxeif5Zcq1bzhSwCXD2WJCHQNXZe29q",
  "key30": "3AEAPkRNQtykfgNTVeZ9jZJWtgBW6EufbAsoNin8rcEoXBUtz5QFCzsnehqXLakXJ8WrJMFoDJzRz1v4sqj3xEYD",
  "key31": "DcdtX8m8qExbp4XtGn1ZHvs3BmRMDpAGdHyDo4haj3tspCTmGVQPfaycMotH7GvrJUxBAA79qbM11w8qTXnZMyM",
  "key32": "2JKxaHDEnKn8ft97iSY5bpzdQgRZrktY6tQNuCeRtaFh2HyFmrVW4zgAbcZYBM48HqcmnXQxom4rrqnrabBv6PT9",
  "key33": "2wp3QKSKQ9QdhrwwhN9eY1eUsznkjF3KeZefvnSLx4mSf8tbtqpxMFN9xxktqtLzzj7cUjeP65qjKDytC4aBJz5D",
  "key34": "3kzgafbgTKSQDhvKyqFSKfr5aWnZpJVbp6kbeyUD7bn95Bb9YtjpJoprsdUBvcXZJUQUtah6DVNb5fBMMerEU1Q2",
  "key35": "2AYnfzedwqCDoY9gckaHHszEwL1RXwHr5NJiKU2xsSJ5JnGRhUWfksMdwTuYhLJ7uiP7QTqz54rNo8no1rQgXM1h",
  "key36": "3vyuyXE6hteb7m7mhzxAa2aZfUVcNU8noMGHR1kpyMyH4GiXbHcQmEHdtpwKmSrkVsi2BArLd5FLG8Bma9vJqjav",
  "key37": "QDyH4iBumR8YuS2FnQv5w6Qe1xQDFTT9qndkV5MXheBdpMP8j9RxdBswYsiE1U8MEZA6e8yYKhqhRSSoS2qJEos",
  "key38": "tZnZcXp4WFFRurRApX6sadhsDr4jyFJ1igqcWAyBvVvuSe9fu38kZdTgxpkKD1YFKj7BYA37xV87hJc6SSZ7hUV",
  "key39": "3XprsPNgpj7gYeCJyXP7iJQRQxRSWKfFAi4zzV81nJ89RrXN4mUkSV2dfcuBfaLyEgw3amyVWm6T5dFX3H9oXssV",
  "key40": "5HwjeVa3dxgFFhVv2E3yySfdg9YjZH1boH6W2t2ACZNupsQDSMicaFogtx9tqJZGaesv4jsn8HuoAhXvNbzcTSaP",
  "key41": "FpqnQmFA6j5FJEtMiBa61bmEcXVCiNcPkXqrPoSLa3Xior5MnwVYJNm6JW3H8ABHtPUf5PR7akmDJDy8hJNFvUH",
  "key42": "2HmJZekGZZY9GdQmGQXnqGhAmZyqavUToP4farV8nNCntFs1h3LKeQKNL4Rfzn4eLzRwuWhbVj28wwTqFG915vk3"
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
