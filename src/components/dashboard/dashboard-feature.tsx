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
    "2aSKNKDst8z643zohSfbGDTYGmFzJiC9kE4L1JZh5s11gQT7B21ddbyPzb9vFWwQ66q2cBVf4XZMS6F9cSDxtiMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qf4oZ4rQ8aikLrNyEaGiEDdmqboaCSeikoTtyp8ydmYoUogVmiwLHuEcBaCtDGtGNT9xZrkNqi6Nmb3co7o3bgs",
  "key1": "2LvqyVatcgvQENGpS2YYnJPiszSQDR1ExEE9Wx9GriyghUYpZrW41TqA6AMERLa6LdFqm8S4oA8dMAk8ZcSaqsu9",
  "key2": "4UME2XEdVqL3PSZoQ3SGUY7XztmhjMEtea5XWKjCATWKoRa4fSBjFLT38Hmj1icEPUmom5U6qT9JKXJS8eTEBK6V",
  "key3": "3CBopXBwxGEjF3AJpZhhytY1TgdNJ1BU46Gp2ARZN4piCsuf64VmH1CP9nGSt2uBpayJK9BdH5UFV1rruUK8nnDV",
  "key4": "3hTiWcABY4imDQpGiGVt8fkH2m26wtMgVr61So5aRbKhbfngJ7hpe3ZYch4Mj9v36EXw7K7ArMxi5CL2c5Nnio2c",
  "key5": "2BrwYyBcpqBMzn5yWtjACSsyNWuyXka8y9Sy6aFedsY5EuqNRjztQMiM14eEr8vkXzC4nw5PJchx5PrsTuhq5AEr",
  "key6": "43Apig9BWabKZxobCs6nRjNXhxXgdsSC99WdXqCGr5C6SH6eqt6SSUQEKAbwEjxK1vdTYcjNwQLP8vzkeGBKxXg5",
  "key7": "mNSUb5o9UGMsGeDV1U92s4ACAGQyd2MZYi52hLS6GiQMjdQHsh7d7PWSxAMriWaBHmVUZt5z2H1qv4y9omeqvXn",
  "key8": "4N7eKZgQMqVuTZsCNWVrKueSU13HktsoDo1DvcLTgLsB27R2a6SHNAHfBiBmt9VhJtLNn18Wo2iaM1ziaoY3kkaa",
  "key9": "3QGwm7s99RzvCEmoRXCtrpP38tBXtxRxNgMYYPFkvEmW4oWzpQdNx5UhR9UfqEajMimEpeGic35ifa1qFPnLsyv",
  "key10": "48oc45yF1yjy1xAz23QzsaxiFJyjEd8HBEi16ZQtqvEVUJTCTDnzqpcVt4oXhAHF4Pa4TcHKok7LHhHfDEB1WQZq",
  "key11": "23vsuVBfFWfWgQBMYc3NUiXXgqr5wqdhQtJtAKS87q3zs4fNeaiJo9FfrLwFdEjTgDZfyC3Eb6p7hZ3o32Pigc7W",
  "key12": "24BgDR7uma5gKwwpDYDGCBgtqcyenVAJXx7qnNvCyvCC9ARuNuse85y2AoJov6xg2h82inXqduvh6FbAWqWvTFbU",
  "key13": "35TyLBPzD3gEKPES8hhQx4hkBhTE5Ti9nXchAhHKCcBMnkHfwymHrKEeJem4NJDf2WjWvp5cwbNPkrBBKmvBPx3p",
  "key14": "3TGm93FdPGi5KRHUDqseDJYNp1RtuMHLWSPUYAixfTmfqZFqvjnASj23Xko5RYCQgQFuA6C59KnJpJE2jhxo4cGg",
  "key15": "4jTDNX3M48Q44as4f2Lk8rArG7J4RUvitMkrqzbxWCnDgjKXh1CbwCZ5bx4ZpAadjEBKPgDb7XMpGxDuNYTtJr9L",
  "key16": "4XP4RipCyMBfhcV9eyyV7JMdPsGLdFcyDQQKNVCTsjARxscVZGPWkoUnt81TeivAftRWbEejnUBYrEH3Y3tkULQZ",
  "key17": "voP2hUMrn1ZeDsSpp2onFRAT85K52iM3sH946Z5tDZ38SpXn2pFL2LM9jsDsQUa21hFywdH5T4zFKycmVwgjKKP",
  "key18": "3QfDVcqNUcS2cMW6EFz1WJGasqejXkmE47NvKLZv1z7b9dkarrVyFNBGSswWiXgkntbMAo7Ed4nvoZVwVGLsvnNu",
  "key19": "2HKUNDBDqdoqphCU4w6ysiJudTHyT92QipQtAGkPaShXneztiGtDQNprLAsbCELCuhGPXjLPYeVrjxm22ZWLEUvw",
  "key20": "7nRfAr58h16bjzQCVaiXTE8hfabMR7oxLA5CU5iKM1vGNkqqNWENzg47Dc4CuJ1Lt9ZXD2ZDwPe2HX26LkXLU1x",
  "key21": "5997kGwPYi644DDTbPhNnT7thz4qB6yDXp2Kx5xFCwQETjA2wP6A1J7LbB7cPR7iRHmoFjPU52x2PXfLxzWbb5rm",
  "key22": "ZgfLDfxGGUp4LP3595Ezud6esggby2TRDRkRzGwiiivJmnwMACFXv6MsA8wNj6XpsvtM6JUZyRqTjWvufLreuvg",
  "key23": "33NeVPHoH828pzccqJDpF8qKsgeUgVnjrpFawFNGEjcpHvRqwFSdjsQkczyJBcj9c9XJ2F49uXE4nYuwkVF7U5SL",
  "key24": "63pqXjbbGkjkwN87DQGiiKNTUiuAHv3QubmTKC9fWr25DA2zWyNbLg2f4VrEnyAe98HCM5mCLbQtBAKoB4dWU4v1",
  "key25": "wovxoh5TsKRnhyRZ2q2opML8yCcM1MB8Pg7W4zvoLw1tkKyf79QMewwy91dhxNW2hPPysJvAyuC5u4dmWg1a5xu",
  "key26": "2oSL91EFXebqijKW5frA88pJ9pmiqoGR9RuzbzicxUfAX8nDnjZunviePoY4U56taBMwqgi82k8xsmSMEJP5yXTN",
  "key27": "2c8QnnhXBkCia1apjZHpYYBh5S5FU6v8EDdpw2UEMuiFxWhjgxvpfp6FVNCfRMcmLggxqLBqzvXnrzqc8Ps6hV2h",
  "key28": "5Dx27u42vyGFmhNc7fWamTW5cMHBSQyUreQvinh8R1Lwc32Jpg5Q2kxjjHhQdMzZsMynHMFsQ6Rf1vS12dtxRJHM",
  "key29": "5bxSpbp1Xbf2rMSq1H11Jmq816wJnDj86v2YFMJmBJeGt3r11AWyaShkc6jLPbixuCy835d4N8XabbUHhdsfmKyU",
  "key30": "5PreUDBcvWwmxeJWM5om1rR283F9gM3dGykHmdv2PirRUabdz57d5figMzjFGVPkhEJdLK6K7Fm2aaFSHkLLx1Vw",
  "key31": "21RxtbsJKJgssXk7eBzKDaosi9kakmJi9UzoXCsXyZmgA8dqdaX7wDZMJ8EhqC3QSqpN7v4CdjRDJ87f6fUe5h2A",
  "key32": "3FqrDrWzvG2SU4BcXi8mPRkHjZuJ5YSuY1LoHy1KQjQYEhzoHCZrTQvx1U9qCgq845n51vsqnmu897ud3ZWDH2PA",
  "key33": "2jRHhpfCTdC8qDcoz9RtaB2kd3qo6KtNjTjRFBbXrgWJFdGKgSViN8sqDXsM7WoYw6YdcxBARH5pCAuM8jCzAZYW",
  "key34": "5oFm5Fo5eB52ky1fjoV9monsSGBN2WKpUSzjGZa84HYF4k2dyDuHRL2EGL5TDiANrZSQt2ucRk8apv3SaeoK9yDC",
  "key35": "2jUMr9t4T8z2Wr1QMDBXHitwowhxyngtFuTJUdG9Fyoac9SeS78agYyhxEAmXcybHe74AQ89sBxzucEUM5wrP1RC",
  "key36": "62bdsYyqvUnKaHDzH9wZ6GrYV6i5Kg3oZ88Qt9HPXukborSidmwmQT9QP6TGHKNSHdwbu24QNuxEoWKFXz7SykP9",
  "key37": "4vHvw7xDGG4WPVASfAxwmY6JyYaftGnZXELPL5QpmEfcxTUEFkFvB6NDkycxT1Qztz9XCW4vhF6A4Wa9kKoazm75",
  "key38": "3Jhtq2GzUiuDQMNCGPscorN8iLrZz53heF1Yc5FvoqWfNSR5YwaK9RSf416wxa5PqykJooUKZ8LmuyA74CgT5Xpt"
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
