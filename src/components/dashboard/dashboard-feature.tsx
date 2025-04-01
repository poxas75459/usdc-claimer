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
    "3Jh9uD6wdv7d1XXAMDmBfBqzj1owG3T311p2Rh1CgPDjaGhfpNZ6TUmw32HF5opi11upj51cLsWnTLekX1FSJSo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YxzhuNDKwFzBzmKyYJsCgmKrCB1szXTkSzkTvadui9Mr6Kpk3K6hrmjtskjiBfrf2GNwQkTRJkPWGJNszv9Lsn",
  "key1": "2tXSXaWYCLnhwbYMNo8GKQJ7vYwhJPWU75iMZ33D33BzDNY83EoGeqgPv4NUJdb6UsXvzX2PzENsGDHk2nmHMNhe",
  "key2": "5hbQZYTKnQXJGg4EZTDCLd8fJ1YaAg4N5DuhdUsf4UJvEyjdLMW8s3ubsT11Z3mS7gvhfJhegPCyzyXsbEcAt66h",
  "key3": "yEeanM67ZW7Y1Pg2mvj5wu2qDJzohKjiQ5Zvmqwdg6skdHmWrHPauLG5W4mTRGbEKofv2XCVBPTfZbqoAMV88sZ",
  "key4": "2A1fyLdwX4PdrZ2ncJUv3M2jqEf3fn31oZhzFiYL8HH7pQsPggLsXdcunp4eBPp6De5LF7rdMcn4XzeDoUfE8wfU",
  "key5": "4VjnpXozkh8JjPzqDc4JhvJqYyLgr1ucs1Cz5RHwMeM4i6eorBZFBnbVemNUfSJ6MUXxt16Dk8uFWZZDJfViwe2f",
  "key6": "3gr7wu2yqqojZdrahx4Xs2SDK3Gd3mKP9Z2KGRexawDbmuaJyP3ezueGZVNdyathx9DMaPsxuGsEc8BmKZNQTtbu",
  "key7": "2mgRBhSyJD7a3223B7Sum7BkDedSqugGyygeUNu29J2KPDdwHY9kZrCxB38AJ1qZKc7dvNVBaF4WFjoE1oVo5Gh6",
  "key8": "oHjsSiNb3GSEvDqzMVGq358KyMBi4ZV9oni5cGvhsVRQSWJiCvfpMjMRMgeZCLL1Hn4cCgWc2Rt1EGGn1SGzzfe",
  "key9": "5qgV4YFexniAvhgr3SRfsM2NpnkCmZnDM9LmCf4GpNnjjNwF8xJyarJywics1FeUMRW1wYK7MeWkWzk3ckhnc4iK",
  "key10": "vwxASqjxBxGebTCoFGy9j5KKUPQBSUdyc4cscwZRqaD5uoDf4vxD2U8RXRjto3x1ZC69T6d1q7vcVrJum4H6nRR",
  "key11": "vH2Rs5QjPa98C7WZAcPcuK7y47G5xjdjQaCsGaTJaN61tK7UhqkGy8U3LTSMHDwH6DMzdwaZfYcs3YLffQ4r7k7",
  "key12": "3K8PcvFXA6WZ9DRrtSBuV3m7tAPzDJvNQSDTnLDZM2b76uhaUpBBXUcksH3AVH8ezCuenrjpwMyft3rRsKzLhyjg",
  "key13": "8FBph92z2FhKLkfn8yGFLfDLvixadGPcDgDeWyonpKwjdtJqU9hqDC53TnGzWKEbGnhv9UnJcitpMLwsoueeN6F",
  "key14": "67btK27y2VCXsiLdzm96L78NARpcaRBo3ozq1n1nB46WaAL4pWdaAi3Lp7ko9wnAwkDM8MDvbCP9DTGKZZxa4JAJ",
  "key15": "4XSd4S6Wbq9Z7LhG6hX2eJb17dpS3JuKe7TqWgFDfDm8wCpZinWfB66HYFa9s5UwsahBQGEzSjoVJ7t2KyDbzuUH",
  "key16": "2Z7XF8fFFAauUqrtCo8KedT9gLSacmsYpgmb7zJgvufcQVvRstURWnGfG2F3cNNvJbKW62vMH4T9zaBMVGHPhY9J",
  "key17": "3BL22uUwpJLATF5gqoccPUiPVA1Ap21KyhQqmXabzouc8arJKKGbJ1Tx4kQmGMLQmAK2YGfMKnmLPe4T3ascMibx",
  "key18": "3rBs6SjYUPPunB7jyChdczrBbNFkypwzeShYxNSD7vRgnnEBLfae5uzArAfRZRYjthF6PYJUihgzwfVZE93txyqb",
  "key19": "4FeH7AbAyqYjdUgVXtddC2vhXhgmMkaS8q3zGnxyoTdvxgvdM8w1AqVSC7BLq9cu6GqHDygYNZeVSYFaMYUGxymh",
  "key20": "bFHyKdpCADxY2arffqSi2q9WcH67Lw8G8V1HJ1k7DMcTELQjDVduPVtnNnuXzDFiBJYy4yWzEdTZHsp9kobvcdq",
  "key21": "978x9amAnvuMYLDFtZ1RE1amdiHhAZB1ezGGFmeHYCzXe5CYBMowRMKEFSnE1tbi3qQVLRAikQ7eK9iS2BjqVd3",
  "key22": "33QS2mxvy6Jr9PFF3CZxCVRa5VmtYPhyJ32UoetqZpQBfoqgQKENug8oG6JnPF3dQit3xcjdTeMDc1MNFs82n556",
  "key23": "385Fx1quhuP8XPu4UtbE3D9CuZhY46giuAVYbQv3rJLT4dZYgKn1PRsUeZ6HtjfveFYP4ve5QiJ8Sae1gcUZ1Ti3",
  "key24": "5a8HmesRf8ceR3UTwCssZiAHY6cVZm2wEJTc35yG24xdozFa55s2CcdWxfjNEaUGpetV6YFDcNeYHiUfksU6yWDA",
  "key25": "5Ah1HZBAJQJCyAAufg78oEibP2z2QFqSu2WXszhopgWNBTh24n1fytvdqJWLtEyFtuyQJPZdqWdS9GHWqsdWWL34",
  "key26": "3ZhHdi1SXyN1498RKUoAQqzNozYaz8gpJwSMuTRBkCjBiyZ9y4tk5MKjgkYNtQ5kQzuhzn8xD5eH2xn6UJzGqHan",
  "key27": "5NzR9wuGtF2DXbVsykeFAD7hQRXEqfV5KwNZ2Cb88Dpz43QS862BC3HHtucaDLVCf2mW7JayADbeYzSAQphSHc8o",
  "key28": "ZZsFshSHiHysjKYWa9zAaax5tjgkJfjK71Be4Yg1Nuu1Fg7tcgUnq2A7oHxRFMfHGD1NPZQSXrqHnDQsjeT1u34",
  "key29": "KgScimrFusxtdp6HQviFXUaahvzGhZpKvmHqx6aV9aw2r68wAfmqpCX8cbcUc9PNV3QcENJAaCTNDVuBZZaQbkz",
  "key30": "5wky97vryLDBfVyapgd64Yuad8TY9nMBsUNiHzXPseF3PPiPxq86W8QXmo7RzGHcHGvjaQkSgj6wTHs1HNM8pWsJ",
  "key31": "47xhpVoMkH2hzVJRfSZdTqdFPehVxvLM798YykcBo5z5XBMQmWAVFRjHcHEENfdpTjSKDpXVTLeM6cD8hNa4ig2A",
  "key32": "uavDQtt3fniarxWMtxisdv1ALsd3vKuqgFj8Pyh81miEEZzbuudSoMQscQhd1t4jbiwV6DWabYhgrKP8yUzT19L",
  "key33": "4ui7GHMhAeiH6VhPr8MijSNKcRVGh1vgwofo1zxiTXkDY3q5VsVwotbyLCzrcPj1jtZCJ4hiuqNJt38W8EwMuEmq",
  "key34": "5TjAEqYpSocXWxWZUNAQAbK7g1sCzhD9PnL1q1cmzRts9V6KdpyrMxdw74VR71PbznLC9BJdiVVKYJwsf877fUDi",
  "key35": "3xK5ByA4K6GsXdatuwXGfJotzESbTeTGwJdAD1oVPD8VtQ6w1hVeMoCzbScoxZ24HBQjcDtc1f9XYK1E781Wsycy",
  "key36": "28ZM1ygvdmmFGEiMao3Uo49KaLA4fnbaLYPBeQw1w1vs7bDpkCReJnNAPxqEzfCgxv1xSMiR4J534cKDduwicn6y",
  "key37": "35bmVLSgRUqKL7yDi3fGMH5rebEnPxbkxrT5bRuYEA56LxFUwgPp15eBZ2UULdqYsCVtRyCzr9eupZsdMcZyow4p",
  "key38": "F6ifFCV9kavw5LhN8tZGHTHd7MZBqvKo7axftrcaNuP7TVitmmeqtaSRKEz7QdjLreSiwJPdo2nqX14cEFqfjPp"
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
