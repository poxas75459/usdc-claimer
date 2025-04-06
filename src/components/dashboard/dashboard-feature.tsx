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
    "4BAqVviqBUHXHDQryP7oxvUiYqNBhKCpPcn6ARC4n3yM5F2BNe4SBEnWKpJMZEt4E4Z8hJXc6hp485nEsm3H6fR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47G5JvzpjUFCk5G1w7NSo5NLJ4YzpsiLTNMvsLV5XuBDXugTBzsJ7oD7aLVQPAMJhMq18EtfNmSgYqLeimP8U6Yu",
  "key1": "4hUyfsPMyoC7C5UxDz5VV78bbhCBnKL4ygjnyjsjEuY6tcKNog44siSDRgi2CrsUS6JUx1HoDSzmeCeVEP7S5TDy",
  "key2": "2ZfNsNHJgqkLEDfAUH7G5NG1142YXRwyukfmA68tJWzjQjxBGV4mm9Lt9g7HxH1PHemTzkjc5ymiYMseUeZSZ73m",
  "key3": "4deXXoKP3JMWYWki6HQDzFnhn4EkQcw5jz6ovsfatAu1RM3akovLe8JdH3iLAbETWFRG8csYPXyMdbHpLJr7w54P",
  "key4": "4AHoQpsSYK5hJSeb1TSh3GZfrpF4dvB9GuHfPDe1nHkVQjmLLn1Sh5ybuP8XTdZbDpJ1W6GADP9eRHMs275uVwg8",
  "key5": "67XqkkCs79kjXof7pkxaFBHDBnqcdjEhsRK7xvSti7d5VkHQTVBJnd5DgZyYJmey3o8Uo6s2U4N9ekgrAovqZt5b",
  "key6": "5Rgph4XVUV44paZk9BAC1jEpDb7ERdNsK5Qpbhj1cGAyFjZGEhcCsqtPfYKSf3QXtRcTjheWjV6ajAJ1b7uBpuat",
  "key7": "4z3QP5rfKkXcaQtMs8wCLhKEPG22kCHeiXQ9iszQwZswzbKmXceYG5ea1rFHnP3sLwP7C6gE53bLV9DwPx77xnxR",
  "key8": "3JvnHA2gXcutRNZ7xRgKMoYog9uuRXc65UkiW5WQVaqheV7uZx2K4bihDcwvW2HjauHC1MbqVFWbXk1BV5A4gqxD",
  "key9": "2MDXHh6voGbs13MUCeScy5FM99zYnme6ZUEdYeRpiBminhy43sSTDF3JVbZfAvU1ZisoDkJjGG7cBLR1BDGpj2oW",
  "key10": "4W9m7mqFK5G6e12UmNNEbrXanxdrLaqMDpiDddaMYG3EAmUhgHNieftcKv2mcibgh8SF6zroKTeywBTiJX8PWzg7",
  "key11": "48C6wuVvWYNpZetHQ2Y1vYrbKqdV4vfY5ea3WXCYHBF9zULhQkCW1pFDNxH8mRg13aQT1iZb7ZhsiudfJZCGTXok",
  "key12": "5TiV3QoHrwPXP3FsuyCiiJsAbgrecoHFRJfjzD7zoypYfQDdpYYsua58vsm91mKP4a919Tb4scu4Y67SviLpVcQa",
  "key13": "5AknvWTwjJ3iHyBzbceGrnQvfV5LUyuDDRfbPoJWhaxVft78bWfXiLg5VGUsSQghrqfPp84g4DUVjfG6hcc1dPbZ",
  "key14": "4dzprwhNQDPzWRNQtB2wqzKKLu4EXXjpjP5dKKXP6M4CaCKDUALPzF5NvQUgZpZwMVJgSYzbayKiAgQhSteAsVWy",
  "key15": "3tQsmzHsqkHG5WZSvF6ivopsXaLHKzaFGHC6SeYvPcv62MeRwRo4jhWZGWbBDuQRSNWCgsNrNu9apwX4EgBdCYw1",
  "key16": "9iuyZjrqTnumHyhekCEZLiBh64PrtZ2vZGuydwJaM2LGeyxMf9ihNabzBYCE2EJs1yXpiNzR56d6sc5EW8mdYhZ",
  "key17": "3ZiYX2GTxzh5ng85E2xzLArU39nyDsGJqz2RS59JM4V9y5ctBe1ZQ2C6G3yX3SgEZMRgXRei6CPcVPsfBSpwNHK9",
  "key18": "3qUZTvS7UjhBBeTcWVHUwqyFxwEYWX5K8FMhB3QffoS2P1gLciMa8DJTnof8rqq9ouUsBCBb4Xgx3UDvtv8SPZZR",
  "key19": "yviEZBgGJs7vnhoWwXkcEJMxncLs7pENo27e1CvjnZjDokMcpx33eEYQEQN9mfLFageYtjwBpPdy7tAmUbbjcfc",
  "key20": "4zsLbZN2PZ24JxDDvbe1f1VZNNVyEvbHBo5jRQs45bBrr52e88aJumgMDTHrxhyWELHxSV9FEr6Rsb2Hc6H7vtXb",
  "key21": "dCa5kNWYSPY6GUJAqTxdUFmBWXcJcJXskjax5M4a3wY9mmhtfXeuP4FxwsZJym2kQtDtwAye3RLjCchjHAZ28sc",
  "key22": "5yzgm6XS1jUA7w4hGdSY3T2Jkxs1SSMQhzebRM4vzT5oc2zgnqiaQEfex5E92YbLHYDFCEz9yq89wJ7Mnftjr1P5",
  "key23": "5fmGmaKDTHnpdyYyUprVEvUpUeP5Hfn7MjQwKUGDEi9RENnvHBJAQCFKatv3VaeRKSNVHnXG4rMZTUGLLnbVUdyt",
  "key24": "5CEHZCspbyYd17XuMd5uEpMNjZB5W6zeSPpzdLbM84Vw2HRdRCReWem39ccYPX4QciZC7beac7mf7EMfdjxAxFWM",
  "key25": "3mRFMwZZ6E1s1nvZ4K2oRXkbKMuU3eiHmqWMecgLriZVKNTsbg3MRL9JwYfmgpz4fvHJ97pgBd926qyqRDc5xpB7",
  "key26": "3icBkieSpLquUBfzvXYdbT8paWSy7cUgRgggWcm6ip79ju1pzf35BEABi1PpvCRN9Zxhnvj7F8RYFUoGjUtvvyJw",
  "key27": "3P1iVVFawenJrHf7CxQ8XNnWVttw1kMKvg2gXphjL6aLbXvty4BoyhNFLtfmURua8PTGPTxF7PAMjQ88esshhG6g",
  "key28": "5npT5gTQ7QsAPvjfwuBcUsvo37oqyUxykQ3cXqMej7tkhtDzk3YkEXGPxh33ydThKM2kBTgLJtKxZqAEUzCVAX6R",
  "key29": "2Uco7TubLxVNkw2SmduEuW2Buh3g41mYBbWShL9tXWehKtf3GkWV7J3v9MgQBwR5u3yToce8SH5ZW8fvqZw6zba4",
  "key30": "5aD7VzBb9vKJe9hZfe8zCcXdQxr1WmYymvxeRd6HHB1ntS7FZ8xAhAcJ4nWMEPByj97H2W527EVqofZM1NvErwG6",
  "key31": "2ALbmott58cr5dNyVyi9Rj4EEwY67NSHhaAa8oj984LzCRt82hCoLB5MChZRbHNoQZ8P2aWKdHYVT5BEGqSzH3d8",
  "key32": "2dKBwz3kBikBF67KvjZh3TrB2Mj9u2qVYNz1ugFLoup4jwxUHsHfKfAqXWkkNTkufBURaL7LNECD3qdRvv2RoZPJ",
  "key33": "4c7aqpaq2zKhtuNzDqRHMWM5dsMebUbqSiQhbz2g1WBr7HeNkQtrzzVv4mEJwgAoH8Zy8KZYXoGx5GLhxh4Co88U",
  "key34": "3KjTkdm4waehLQSUXCs6SKK782v2PUqA7ErAubno4gzpYiSA3QKEP1yVf3amuWy3jbN72Eoe9sRMMfGTYZ3nyGUS",
  "key35": "5hsQjXRHqd7PbANBZjThMzkUqvr8eqfr92uSS4t4eSWDNBrFFF3LHk6TRyhrw9Wugw2gSsSBLtNc2sNLA3kj7muH",
  "key36": "4ys6UVhPkVoYpF9XfahwkXvadkW74jruGrNjx7RKQGpTDfS94suQniRsZH5pX8oWCUULBgDxMrs1YLFyGiCTX4Uy",
  "key37": "29NV4nvfAZ4iPkm3MWsj5j3tVfdBUf6nzaoeVhLsMMaCLF8m1viPbNCqAoVmZuDRBVfGDJwoZ7CtwHz1hZbyZ5WD",
  "key38": "49JpyiLyB4Rr3bk8HZfTHQQAQtQNYrfe5GdsMLHHoCiJa82Q7XhFcRSFonmGXhpvghRaEAcY3S8biCJLD8KnjCtQ",
  "key39": "pmRmL5Fs8Aow9Geqzjnn6mSQL6T881vx8pfigV1f22eU5PmrKQhJtjX7EUECRK6SRjPY2ZPsXAbSsbnpfyMU4QB",
  "key40": "3wk4eua7A5bhvMhEcjsryhQuasF6oYouKznZ2BcGu6i1bCASSh73sNxijkAQBUdK78Pim3Fybgv7S1kSC9bp5peK",
  "key41": "5P9iaf2k3aEoAbke1m79wsKQL8kTxWCKPG3jW6bGM2ktn4GyNuV4bDmtrof2Nd6Htn32XA6NQpiVVws6XXiBRCAF",
  "key42": "2L2wQC2EqaPfUoiqCSg785qHUEmizBbeRwFDEqEEdvztz7ThubHFVVF2SQLAbLk3h2SeUDsgAZpoo1DjocJH5f4D",
  "key43": "4vjRaqcfRDgFCVgmoVJxYV18MApMcxiA1ZaobBod2cdCJDrs4ScJSasSJupaVWRxEqQypPvdkwCiNcajeNK1vsLw",
  "key44": "3AK8QR9yJUArrQe3tWCyDE66Z4SHXXPpabVWW5EF7ceXTdtPkKs2LnCfLd82B5GWspNiNZbi74ny1pdWtpppy9Nn",
  "key45": "5jx69mNAgkHLUrtwsVSUnj11EFRhZyi4KB4krxbMVKYzncykJtjvLEw3wHHTC13gvHrVp94mirbnrN8z9AWkvAdX",
  "key46": "5dqBrxqU2ty7zgfQzfWu58UxmUfSHQ2wiHJzAnXBSLVBEtM82VYaUE6HZ5GvRfokXDs5ros2sqR3qiPTP2MkfHcF",
  "key47": "3VCNgvDSbibbouXaED4yrMAk82mQgHpVnVvy8nDUfXYYEFDXJK8SqjdAGjBJU16nCsBdZY9BCcc5gyihb6BjitFE"
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
