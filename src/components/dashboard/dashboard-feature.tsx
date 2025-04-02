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
    "3zaf5dssf8UZtmVzhrHpsS1Nw8kKBQ7WEqaG99hYVZ2xmbXoqdvMPrxpS7aPM2LcNZ7xoRL2Lz27ZSSsxKCeoAnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3PQjQKmngUZBrGqJkUQ3kGw52moGh4iX6QzCU5rziN6ALYtTApgL69RDwghJa3b8EcTpNim2pFK1NeRGhM6rCC",
  "key1": "3mkX6QEbeuXEAvmLFdD589iHE9hd1NJuyWdSUqyCi2oFEEjJNYccz4Z3p2FVq5gzssMoiSoArT5JeXUKyparZt4q",
  "key2": "2mmD3TYUY8LGRj35gu4ND6nw3ZxidQQyUQWnrv6Fz2XK7a6LHBMJ69kuv1Yt6DZ6kFcLVvjxPtdwaRrrgzeDGPfK",
  "key3": "4ywGtwE1QgBC1nR6Vqhc6GqdHgyUTS1vxs41zHNURkuxLwAaTHKtYj57L8pNjKg7eP1imjCDb8BHxNbPLFfVT29K",
  "key4": "4BRUAJZY4Emkm2e1vFouofQcKCAexGcP5ug8ZekDBCj2dBvmxovPf3rPnE1EW7JxNUaiGH6AG1s6QEohtZNo9LvP",
  "key5": "5j3LQtWVSeqDdtPwA5FaabeaEHyx2Vj4LvCL9C8zBtB4zepRHYG8xyS3ADzbicYkLBwwwikMTkNC6o3FFzPD79Yy",
  "key6": "2KimoV7hr6xnLmtr8SRmussRD3sfu89KpqpcKASia3FwXhnw2ewuzNCcAmkhSZB5UrykY1o1v3EgKqXrRRrxdQti",
  "key7": "3ZvdxLQE6piQ34QC18JU69Tyv4qSmqMURd2rSMzPaiUx3968CjQPk6U7u8LY2B3oi5fRnerUqGhDcfmtsHG6ybRo",
  "key8": "pok3hK3K1Dp1rHgof2vPMqHXw4ATHRMTRqmB8XimCEZNaxSFTgw3XMC9iUaB711rdVRVGhhu7RyqnTxkjvLmAGy",
  "key9": "3KTXLLJ6K3ShKgdY9d62G2KHzL6sPETucFC8ymESdN9CNniB82DxQHHZdHcJPWgS3avcE4T2A2kKbSaciLf67u3E",
  "key10": "3doS42hnLtQePAPeyvxXNoDZ4D9eHKvU1wtSfwoMMXakUHKFJhB6KnLjKvNJbqHNVk58jJc4nHCGUUjWc4JCx8sF",
  "key11": "2dpEfFssNmtGmaw4CC2i1xJJTR5RrtibmjZn7Gr3jiawm6hKom64f2gXrVjBXypBaAXZA2ZSviCsHhWaaG1HCPg3",
  "key12": "ujDNb6Nt1kC1S6sUZSs61gYHZNvabgphHnjFyXgPr9tZc26r8m7JZvg3kKJh7YHkGAt67RVisxchfUJRKDgRe1E",
  "key13": "2sFaoGVMhQkNa9KgGUShj5ZKDwEYJUEAV2WzJYQg6ZyrXTtQwC5HLJoAMM8hWwBPSxqV3DRebyijBjexqQamrTDE",
  "key14": "2GRiZPxs6vFLAP47aqeZGXuYnfh76rjupzgzmvV5L2ct5dHc9f17zr6ZHC2du9Y2faxfpaXxLZ12na4ZXKiff8Rj",
  "key15": "5XMFVChXS4UkVXsad9VueB94Eyt5cSvBLkbCnXkUv7XHbbWACFhRif7mrDqdEUmpqihQ61t6fKwyyVi5VKXTYL5n",
  "key16": "35qcWcBanitQx53B5NZ9CJDARpCsSckrh5inMsvrre3xQHx9pqRTEp9eKxn3A5idLbwPucxjCoZitj7QtuSLzs5H",
  "key17": "5jQ676qJVRAsocYgEg1UTnj4jpTZMH63SSK5h9mmq2oVr18nb1AFfcJS1zkJMbdurgFweeJWapyLVZcARJ4fDmMK",
  "key18": "5G76in53wFdLhQxeeHYY28LXb6goPofbFZJGtKaNbb9VMJKp2KR8mHiJk32MW8GcGaE54FRgyztQK2Mtge5GqK23",
  "key19": "5tPpUBJAtV8brYVNgQhNHdfPRPe4wsBHZQqT3zmMTy7sUSiwEaYgTgykGgz413oteovh72Cc3fKavHPQCvmbo5mL",
  "key20": "58WfnLfhGskZw28bJKB4WF1q79rFY3fAvcQP3xM2JcmHK5fcnmjPL3AMvy64gRZRENcoM3cHwet3mR12cpfQoscj",
  "key21": "1Jbqmx4G8cFYsQ9rWXQuqVAngXiwGVe4d95T1rEP44fDKag4RDFmuizgkC3W11AhYkGndJuwWoGu9axCCEfK5YA",
  "key22": "4uwNvw2FnHHwT94iEjbSrzXdNRxUrUBU6zn8pufnf5XpcZ5kjKWjiSr5SsSw1vdKnEbbYsV74KhQmqjKC2RPY5t1",
  "key23": "2B5V6haHEU1wDzhRsJqKDgjPPMpWMkfxxpHLTGA7QH32EkYeXLie46aTvmV5yqE1U3Hpd8gX6131V4TvQFfpzG3d",
  "key24": "2tbcZz5wiDduSFbEqgVgJ56vYXdQK8VKpQAVKt2Z3RfL3mcUdcaMxay5gNjvDzWz8ZpVbAHEtcWRnMCdZ5tEZXqv",
  "key25": "3bMX38DTwXATJY73nVZd1tPRbbiNqhDf6KjYS4CczEpc5FKzmpdSADZAiAVWzoRGa8ZNRF6XSSnZMTVUYt8u2LkX",
  "key26": "3uCH11EbLXbsmNr1YHWqjQmCJpyajnkhpTPwUN4WKjDSgJzctJB6aZ7TCfyMPkadWh3f912SnKgpqEJUgCarthMw",
  "key27": "31KJJeSBTwQD6Bc6YfjY3xA9jzwG2kRvEfzcmZp27tyVJMPpXfSZT3EUNCDj5tBEasmKdR2NarHPBYt5cnKB2y5e",
  "key28": "3deyzBxRGoS5DaNC8LQZnk9pzAVinkqkfun5wyPsPmi4NPHTDBvHTaEUDMiTEuu8c1tQtXSPcJCoLLWQQnaiSSmh",
  "key29": "4Kibr2T6pUzuVbx6XLvv2HXsfG6KqCz61dQKAvgsdboBTRVierASq12b2ucJ6vr1MYNaEoubm831MEXu4ZHJ5qDL",
  "key30": "3F6FRyVFWntt76BRCXGBgxizbtAtECESNxFrZtuctWT5hfskBtERuQ1nHh6adLyEFjHwrzdxeRbX7HcjCEb3TY4e",
  "key31": "5Y5CuTLMjfE3dMQFe6ad7ur9xsWXeaWuHGB5BBf8kYTF3XTajKeSynPyntzgAsDkuc5gAnV4kgbDjCdtA1u37JjN",
  "key32": "YzXZRW7jRMnPmeeo9jYy3KtAERLDrChFeyoecJRwnp5Qem4pvKdKabL8pXj6NLp8M6eEenGhrivtcf5nwktzcy1"
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
