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
    "4TafNYJmEBBy4srP2CSzcueSVejvNgKcSLmVbxaSrq3arQUFvXidXB1B3qtELcz17g8fheVu8cqQL1B1Z8mZF2Qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TnSoq1H9ZGjdmqrU51j9wRaKY27GJCyY2eqxTLCZ3nPUUitvBjZ7MeuNfBrdhDrzh4u7Y2HnTFRpWMnBhy7AKh3",
  "key1": "vyu67aXDg7hNoj3BkmWP4YoJhxzra7XM2skSNf8L3GkEhXaJgDxoofDXR1Zeqm2AvKpbQRif7HhQ2gcRBmxANHe",
  "key2": "4eHK1vbubVWWxwFWT4TrCM7RayVUcrXwQ2TaTapsogzuLxTmNLHLMvjgosAm5m7g1VBCfjBDHkBUQDUwrqmTyzTZ",
  "key3": "36UoVnteuN2rVfX85iMP6kHpgNzixqtCL5j6T4Dn591YDTjnbkF6gm53UCYUMSvBfnFSG8SnFxZ5LCSehHSpRuy3",
  "key4": "5Qv6k4uCRXkwNfsPY6bY8ZM283kHfa5gZsswxHHgmLmxfutRDKzweXRGtc8kKyTtoUBjSDX293hDjGusGPM6Qwrp",
  "key5": "3ivK2tnArxhv4AKGSpvWajnQEkptaAkCTxV3tSXm6UNsMofP1z3YPFvCR8DGnYQFhnhXbgWTSf75ihvVc3HJqQob",
  "key6": "46hpUe9FjQzUT6y8fAn8HPFoRd4wgjGLYkKRGnurZmA5CKvZbCKAH3oeeHS3cz8oZoyX9Hys1LWhZLGSwLT7Kdm",
  "key7": "3iUNhYeU8Xt9meLYmXymrqhzkLQqvLorJBXgZNevNhx5uQdQpbzNPoZdQPQC94miRiX5gWxCEC5X3TeAHdzmTNVV",
  "key8": "38Pu3JLuqtqdhuWhAE9UUuZ413nqDD6z89DihVAKtCZ8irS1UBbCF6z7tqSBx2NiVKgcBWyUXuQu2jcm7cFv1TXx",
  "key9": "4LjHytFuBjaKn7sNJ9LUEUxxLRdqPgAAwWKQyGeP745xgZi1aEcUhzRHECaiLGGKTP1Ji3auoeypQu4rMXo1aWnH",
  "key10": "5drF2QpTmqXpwxB96ApTbanCLCo4Dd3jbTuVbEgfBgU65UMWQRRd7zBGR1fjuaiLP98K79eu8LZSYvF1GdwF1dkg",
  "key11": "3Uq48kEg9sw4UfPuQ2t4uGcn9a7KWdQgKZzFu3pSxSf5xTKYi3PAq7xyZQxAg2Lg9tNRx89o9ghiCTHWLmdDPqZw",
  "key12": "4KZbGcjPfCY7jhBBZdtU7raxcLGfXyqimxJFYWLFC93K3w1Mve29inSXbAoTQ17TSqBa9ncVzJDsvN9VQDhmvLzD",
  "key13": "38eSvKLhniP5yjcbkKzZFfxwUNrCHxMnKGCHiFWQihYSo2QD4a4MDxvoFm4To7JQ2dPsbPdXGL2BsmJxaLLoLbXZ",
  "key14": "3NVx59Me3QhqQTM9qsdX2FfmU88XTSyps9YY2o5zwsTohw7P6YwD7AaKRX6dz3rH7A9rtEBUuxi9Cx7cH9ofC2kj",
  "key15": "eksP3EMjSH8Ju63wMcoYXmwSMJM4KBCDtKyZpUgHxztLQetaoN9h9iwd42NGpd9LuVfbtqYrmjfGxFbY7U2sRYH",
  "key16": "3LZ8MQootGUkKgEEwifZHsodnk6RrFPdzFkkypMokcmsFcsNtWo3L12GgiuEEG3nfoKYjsuzigPuS3poaoaehsSF",
  "key17": "3dP7xux4jFZdWtkSD5qmGEtTe8MU2BdUkukyiKhcajVz2QJcEVs6rRgcwJH8CkaiMxDmwXsSkeAkQsHw25pQ1sat",
  "key18": "3eAWJ4bu1FdbGCHNxsgsjiwepU6KVeUiDQjE9Ph5c6k5LQFRMuYgePBkg874BnCaK6gq44DfGENvHAqBVSr3osCV",
  "key19": "RujshAKAZVpQv8yj7JNa6Z1WNZ8FjgcYs9dezqPwGGEBnUp77XLtvRqujXXNU5mabXwHpNwJUJuxbJUb3CuxHB9",
  "key20": "5ycZ1ioaVf2Vi4dKwckBpqyUR8ee5uFpvnz7hJAM9StfDxNQAj3RDLbSnYs79e8UAhmQmisrNDnf1BJed3q9i8yA",
  "key21": "pMd3nqpk6SmmrDyRhyoXnKeErtUeLkHi7jModGCjYsgVwhYjMgKEwY7yGKDBMZneTXw3hbTuYAz718wTurgME8a",
  "key22": "5x38e5g7hw9z1n9FTiPUJmfjoqhZNcu7MCE1pMWuTBW5bMZ7MzLajY1C5N77q5q5v4W5VTf6jRHKy2gjF1ErujRm",
  "key23": "654f4WAFTPxabbcYFEprAhN9gTrxLRQZ1VMgzmricdjH8Pz865V1gSG3pxRzP9jn5VupmkBZaNdn5VtMqDsY9eNT",
  "key24": "61uxd43gTesFtZr94yPtBjoLuAjFoci76Nq2AzKzzJGx5xNSFB3HKFGwyFjGzXqPJyXxiEFbQjmgYg5fCrHqPDBh",
  "key25": "4iJUfpu1deR5NRPhRk19Dzj9dqMmuRV8RaS36FEiXdpwrqcjoSzPnuR1HuHsy8LR8J9hEmhFqodKNLWKEQpYaEBf",
  "key26": "4QooPCwPwjG2qY1nMXRmG83H4wudSu9mrJZa1Wdr1woPKVVvRAuG35SWdcN6JhWZ9v4GeHFm8b5qmJEpTR1d4oLh",
  "key27": "uTw3ZU2bumhVw5JWBPjDEe6zEBkg2K17iupiwwW8qL3HZYkjQBbKh4vgKgASLjygt1uPMHKcM26uE7txQuDpjDa",
  "key28": "fmwA9jY3WrwtVFG9t2hao8MnetM4tVWwtZ4B36BDBk6RC2qN3WWaaGGNzrvYEpToDCrUrzGNmVm7iVJ7pW4tq6Q",
  "key29": "BUgvfRumXobVkGxesoqS4D8HGuH7fwrbzWUYQbtrpF2esv5bsoPyYMnEHz2RNcYQAqQwRf7vBi3QUEsZHwWxDRy",
  "key30": "3CK1qKRivUZH5AGbxVGvbhGPcd3afiTUfBzrNovFKjHzvTXEnTkx4pYL9DJ8TxtaXocg6tnyz4QqJ1tarwptNiag",
  "key31": "3bHYDE7E4mHggqeACu6BWBq1JFe6MDC4Snx8EqLT2x2Rf16mh2raSrvkdE2kmULeMsNpoM7tCzHkeHfGzhk4Bgo",
  "key32": "bRCLpVBQMRxQuo22Ssi3TuuN99v5LY35cFhHnQU76Q2StGwfHJ1XFJ8CKF348AELag7EvhQ9xjBGycuDng47sMj",
  "key33": "2XaSjqYKfiCXSx1Npop9semCcQrN5jtzamSkYA9cpi7CCDN7GEhaAE8jTwiqCexgFXXzGXujfGLAgSJhj7V3Kyib",
  "key34": "2cfKvKc97P3kp8zsZ77EE3usRPKhT5BZEUfsnm9LsYZYTYuWyPrQveqpPWjXbTQyMyX3c3ZFEtZ2iL7tjrCkT9gm",
  "key35": "RT37GCPhz2YVMYRMSNecXRk9gPMKG76XkpARcdEWxDEpzb1RvFgX2VEUYoC6o6HirDLykxU1gjgjekkWJBzLy2U",
  "key36": "kZMC1CE6mnW3jLpJDWE4dK18wnihc9q1dLKwqfFPStv5fMq3RZAZymFEUicg5xQfJYqbPvnmMM5cVfMVtSkUFnh",
  "key37": "QpiLSK6QG9kL2VSTjtCDot6Nbod8agQiiqT4huKgJocJTgR6SK1SR2sJ8fZjNm7t2DRiEiVSjhfxWVvLcjDPDbG",
  "key38": "4nNGcoLE8CPkWmRrrPDAojcwKCCif53xaFt9M98gYSgsCUFNDRExu6DMSRZhok4KhH2pUsgnyBMRyknJzA8ruBrT",
  "key39": "53KMYnEASAjoq9RkMVs5n6LTq4355PstP9Yrz7c6psDTmnpHEkfK9vpEmMa7yJcFMFBcEEvYnggCAv48XVm4k45D",
  "key40": "5ZPkpKoskBTSuSw1NEpQxDo1GyyHh4UYjd5dZ1K8jLMnb2RggUj8aT5jiG5DNQjcgAtQPmdQimj7mah2zsSEbnAV",
  "key41": "2kDckpRvZp2vsBhSKHnABwMGy1PZaJastFSMLhV9u3J1k36TzWEfsAfZoBY3zJ5iEvxTCtXDZFBU8s9SsCiiGQp1",
  "key42": "3wQa1gBXCHGhWcEMP8nqJpP9nRgdmhxgyyXLkL54AV8ijMPbbwm98eGGd4eaJsRXumEFoGHKwyRtRSrz8duDRTf8",
  "key43": "4APporyYCnSmn9wGMEW9uU9L56cGjqpD2WGS3zzkFaMKWsYCnSHZ8iU8C5ze5vNe9EiQtqWvc85oBNMyWae6g5DM",
  "key44": "4ZQV8mfvXJLFvhcyqvA66C1pWjYzhBvSWLuytdPK4Je8qyrSsVAbSY6RsckiAjMynDPiwpiqZvcJSQa6sk7J3sCn"
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
