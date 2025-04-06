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
    "4Tk7jYSsVZGW8rCPy2scDPZ3P4wQmut4Q8HWtYyWcG8nhwWgpPe5jFCKrPicit3DCirnyQoLqLVycKjTWg7hKEZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53FJxMwDD4mr9T2pd2ys8EohCyLRM45e9yVNiz6K3EwQ8W89NSSuGWuPKtfN5o2gXq4pkCP6b67ucASAM2Wnqa99",
  "key1": "5RFL7oPwHW4Zv5sVJN3V42qoLWPzYMR5bxYXFxvGh4JR3j86yRVm5g88XgGJvjqDvNWTpp5vB94nySZGWy41iQre",
  "key2": "4KS366JTCbu8ZQhk4VsyTNbpy1jjPX1CNpT1Y7JMkewFSNVaagRGisnhRhjKSozJktUTuTEyuuousk1n4Q1f8asF",
  "key3": "5Ejb1CVL3UJyfhCxxfpe2WDrNkYmXs5LVKtdA7kBrgufLfzJLo3uRAzDjshLxwQgACnfCBFwKxiSekQtc8qjFQJ7",
  "key4": "4gWHTvVtK3vF2uRYemsoKJ1BxgX1kBc23SSEYS1oa6zHd92WTNXXoYBoRrWx8c1ygzKqDc8Q7sPTmCMCrxnk1NdZ",
  "key5": "5DgLMowyJHKqKXHTu65pQKC53yG7RscGbcd8iqfNPpHpig6QAVv5SXbKQRAJTaLXWe6R1YXdMUSLPsbN1gGM6pDb",
  "key6": "vowRd5Pv7Vjs1msBJE111Taj3Z4qc2pzaAXLSBrPnWsAJL2nQ1E5aYuN5isXm51Se9pZsMHgXccoDrynDfD1QuA",
  "key7": "58eNjqXdF8cfugYtFecXBBcAp18Yw21Zdc8Yyf8DC2GD9xeWZpT7bxRtbUFadztPGFLHPxmowWYvgFoeD9rmrL5b",
  "key8": "3B7aRXDzXe2ZQZKLBBKFDQo9yJ8CJzYAxMP5Rm57khxCELW9C5u6EhzcCyLp69DgXG5xafgxunUtcxwkrRUH7PRA",
  "key9": "5ro67VQYQmZkcD1KdJofd2ETFbvVB9py3Dwaof9KQaYzj5jzL92Yce8jBvgv7JLAH1mPs5wXwq8AxkpA31yTMKkN",
  "key10": "3C682ugk4LneE96fWXaSA7jV3R4F6Cj6Th9ZjRrf8qYBEB35rnnsymVCihjvAid477KCiB11YXXXhUY1dgwM4oeo",
  "key11": "pqeKV2Yatx3tFt5Rg8TFS17HPNsep3o7QkUp3wGV8i1FjBPjB3iZodWzziZd6jBEqFf9VB5NqFkm1eiHhiMiYHe",
  "key12": "56uh3PfHVCvBkmRFThgPEvMm79BYvs1nqVXSGiYcbGa9fSswgBqK2gu3w98XrrUiXu2AiVG5c57M4kSD6yNdmGzr",
  "key13": "29FQSVYvALgBsWCXPssEu9c6kDJ31zAxAdiucJGrPGqbsKH5TCbYwfLPaHQg7uk2tYzx14FpBhoeRZj6zbQif1mA",
  "key14": "4dVXNpY2fwkCmW1DZbBPt3JSg8zxQrMRMdhVdEDkNfpFt3Kmcw7QwcsFHJbrAfoVFdJrRpP9c3PwoSEsEX2wdYh3",
  "key15": "ZTQT7AjUrtAU16WjY34EMd5JtvjAdQMMcWfA6snWq6pRj5Jg3fgexqhFgeVJk351Yzr4xpPKyaA4wzppzEyapqx",
  "key16": "3Cdo6QktF6aTZGJfXTLuH9LcM7EeyhnMzFdHduKxcBPjMEvtDmVfnSkUbEX7Nd1hyj2r7tRbuP6nwrTtFzvdt1Wt",
  "key17": "2eEyhgXH3WanzdDiPigUZQ76RxJX41GyH51rH3xC3bAUm6WbYTiR4rDP7Mkmeq8QLFD4XEtAYSZC5SUvy9bCnw8c",
  "key18": "2ismAWmHKyvSXtotiqi8538ckLsKBrQCyWtjM1U6h3hVFbhhQNQH8rWKFGyRBUFDSMEcuhqNYy6qXi18HFtHpFhp",
  "key19": "3WJFKPPxEH74zwZqgGT9Uo7nPmYCX71oQkicTk6m58Dn5gaBz2zp1ey4P3h8wxAWtSNAYvzvUoyu7vjquEKTdVoz",
  "key20": "2BhGffKU7buJeZKJptcScPEHq9CpM8EqYdWREp9bXEL8xurC2odVDgGcFKXRoP5XzAi3sc1zPpaHv4bwZiR7MGoZ",
  "key21": "4F4huZPfHGkdGGZfBPprEPmmoTV3jmm2JW85WFSzkjsKfXSuYZay235AW3mGUFEFTcBDVRpWyuznCtpNNWtq5VMW",
  "key22": "4wBGYNnKvdhKDDiYCW39h2cGy5ZdzCUNxGj6K8FBKjDJYWB6vtU3t6T3jBiVdSdc4teZZ3YjP7Y2qds6RmQ3zwLx",
  "key23": "4WdrwCbz5QAsmNtU536Dp3feao9CxoAmAfXhdkrEn3TqnQqnVDu7yohtFz6KnG96CjzSKiZPrfovB9fBTJMGeh9R",
  "key24": "42GrYskfJzo1vyR1Ky38boR6Yzr7YrNE3k6J6w12NzMRct3FRGecSes6d7aKkHtQuW949qmNPqSqyKtcS1eKfXcR",
  "key25": "2ZitGnGF1zybp7LFZkPieMcJTiMdi4cAQKEoNqs5P6o9Yq8dewZD1RxPD9qXCPQ7Kw4GwdUVL2Nm2QgHmcQEjA8T",
  "key26": "Pc4jC1TJBQmg5LFPrB7pxWU4gF3KvzwydnzZynR18RasJQb6fUULg7bSHVh2kLG5qHsdQAzEUdReiRs4Z6erfyt",
  "key27": "4DcyMmWgqoDm28RoDXEo81iRWaTzj93yaDiU1MzxzwUj7oqrXXWY92mSuUP5m5eeSKw2RZ4vA2yGnSYyzN1PsMgQ",
  "key28": "4jC6VSZYizSjvCfYLrmiXpFWewbZ4DACPru1ENApBmKj34Md17baS6U7pWF5K3Wd4BmfgEo2XMxxmoGvYq7n1uKt",
  "key29": "3LGdzZfihHZ99n4U1UAyXfsodWPnrtWhiv1Yffqckbs9yy97VDQohMrj5EZXfwMXfwFevxWY629gZfWhAagCnBn1",
  "key30": "388qiHJg84LJBmpjAqLBfgyXtKTH1V6zWthqphpDHPzucA1jyvGFk3XMbHgGZ2dkvCoVfDe34J9k47uLissXiT2t",
  "key31": "3FDE1ooo6nQqqhTkewiC3iJuspx6z1keMVu98z9jHJ897VgmyXtxey5cQLXZWULgio5gv4mRB1yRfSUBVSBBUNZS",
  "key32": "5JRTvXBcBzFUfGpFou4wGCWxzkXUXyMYTj5mx3gCWbNAmcoCEwnRgjCmjFrA2F26Ldvtz3uLbiZ7Rvzn7xaitLwV",
  "key33": "R5rMGCqmnwcLTW961qdJ6hsxrZWrDF23LrAbMagqUWjtEDZcfHT9haU7hmo6fDdqMDnp3uhDXMPJuXePoF5n6wB",
  "key34": "kw7bsdHGUvmgNsgkgpu52cRxUaMcEUkdfTNpKrqFDRNaBZ34RhQSUR2vTiwako3a2EgnkD9w95sum9a8t1uXReT"
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
