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
    "4X5CvAnZfzkwGoA5qxCUJ1XvXAT9eMavgbK1oiBP1Cd6gRzY5uJR4NyR8ZCB3TNuF2xApVpPErt1wjA8fPMZAtUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AhqyG5BRQ5SJpAxGfF69cg89mMgZEYYWu26GiUDDHrwRTHugvzJh2LkMvNLdMW2gArgLksvaPiuqXpb2bFHDNUH",
  "key1": "3RDuapAeGG8Cu1hP98AsTuAnmpq3PMjLV3mfbNvzVFDzem25NLprGbYLs5NztPy3ZtZVgtwKgjMo5uc4zhYng5bY",
  "key2": "4RjzFfYgyEGP1S81AuHtSisfj8NuLppGz8knvGw8rHfmKQh4KtZYUeavXEoSpSsc8GrWzNknsxNmTgoGKwXuZwL4",
  "key3": "4VtPZWvUM2N2ievLej6cVxiX93CZfZ3qdxEF1Bm2zaLgFLYriKbC6s9fswUvdKNAVkdYnZzQx42tHdrH8myFuZPu",
  "key4": "4nbCu35Z5e7bWF7Fqa5SfFvJwKjNnfbjhi6A1DtgAUftfF866vFVUr4FfbvrDWfa5TPf11X7KrEzZwqwGED9tnNY",
  "key5": "4RLwSxFS15acBcWMojFbuAdvynvzaNZdqGaWbXTpuTHpn9DgG5c39NFCTGm4nuAv1H8JtUEGrwPbAJ2rLsmSP1W9",
  "key6": "2zU3XMk8MCRg45TZmbcewEzhQe6vvUb47a85AbS9z9DnAtVq8mJgGh6epLw4RQhsmnidwTstjfRDBAs7qcBRFdtS",
  "key7": "51oMycd9PkeC6N2EAcnd78wse6sHF1soFkN21BT1ZUSKtioAcTG5agf4DorckcQgNdbBLCh5FCSBRGwiqAonfgLr",
  "key8": "3yWbKbX7xifNn7giSSNqDTUfEHGMx16W2XG2yYnPbWjeKdPC8RdYvPNth3aQLgDosemgmfGMrp92UXRJBSJvZsRu",
  "key9": "5NS5BjDkh7kNiJ9pWMJ2PXumEjVAikuJUAmGQo8x79r6zo4to6AWabea3QnwdS8Peoaii4Spw531M71Y59e31tgt",
  "key10": "AosWXE9fS2nm1rrnJtvgnYTypvxPpC7cxKGF57FdXcT8NTc7HiXvVQexkfu2UNRkexYWvzD765uLTN38DAdq7Xe",
  "key11": "GhK5TL2ag5iYxybbNdaHVjqJtDj2Zaf8C8EWq1kZ6HhEfmmnV1zWxT9LuNgaFUswVActbKFSWQc4PeTBCZRQPzh",
  "key12": "4pnovALCphLRtjnXXG5j5YkA4zXDzXxgoHDAKakBvz14CuKfckpCKVBYjNQ4ctMTsBqfS93NBykH9g92JWoiNDko",
  "key13": "57JfQU9bGfuBd83P11fxBoTu8r4jQrRvKo4FuhuDNgTeDUovEUpehdJ1EiPofp5XwgEgeUL6t3v8sNBWdurhoxVX",
  "key14": "5MEyTa1hNw27WqVuZVgG7TwyYQQQ7gq6beTusM3vjboPb34A1JaXt9py9ynJnZwatL7bkSCctykDoEYozRksm8n1",
  "key15": "4y85g34HhGTyVVJ41HtJDowu1799QEQmzR7z39NoK3yT7vqbK4DyLA5xeR4JBqbQVPCMU1drwJQmEAYBdiUjuEGL",
  "key16": "2T2wLfZZAAdC81iKNaenVVwo5zGDVbhAM5qzMVPSzz9o9eEkKyne4UKRvYE9HQN7FDWbVVzyhRSXxcxz7GzRs8RK",
  "key17": "5WocZF6J5ejbbEv6m7zN5aCVAX9FrJTW6m9k8Sp54cX7BcnxaPwUiXpRKqJFQboSgyMXdBj3xo4AwXCq2yBr8RhN",
  "key18": "jS2d75bVYdf3vz9afWTTLHXsH3b4RX66fZtb23EaLpiH4UhTxJYgfYsjJToF1riZ51375QsifKZ9hgN3psDeTfd",
  "key19": "2QmBhRtk1zrvnfZiVGAYvunWYo1e8ScMVCmwfJiSLFpmd4JiEWP9z9dtafvnGekEg61r9vV1rr99jk6FeGrjx7vv",
  "key20": "2fkWSUpDHYdCjUS94uF3HQiAiHNYPMFdrEkhFTEewakbEaKa7qVPUK6TT7eJKeR9mmhdaZaupdDkLK1Zf2MtqE4V",
  "key21": "LCETt1hPBDMy1hebpmSWayDuW2NLZJZGptxQy9jnLhaLSvAFw75qpXrpjnZcKg5en8cBDtuzZKNZ7Vjjv4m8q3P",
  "key22": "674wquqi1RbmCFDjGv2Fp7aoYEvNwR9U5yanUsLtCJj6QgbLuFSVHEbmQUw6BH1c7sJrky5BfRVdrECYBiASpSMR",
  "key23": "38jQjuYeQxJjtJawnoVCvr1MkRvxDSnivhf4T63E3nDt22wfx2xD8PmJG9QA5KUAjKCxvqwdTBTZWUJxygB9tWLf",
  "key24": "3GRjTJuY9PYEw1bESJrw5LX9E922hivP7uSvqwVXPVs2wBREfb736TQS2oq1fuyLhm4Y14FkJzE5ud6eYVUhyefh",
  "key25": "4AixbEpgBB7sRjRSdBexTu22442nsv8wixzcZtQqnGGM2iCefqYuXwyKFGBoFbY9F3yPFYzq3AUfUUHZLBXjPZ6P",
  "key26": "2AYsarf1cLtqwYXyMYHv6zZNF8drQyjZereyhSgjSwL79JZrcs9BkSbXAZK6gSFV3ZEUTQaeEoepF6gDPuMLVGta",
  "key27": "DBvthxLGQc88dKyKZSaPeJrsCZJCPzpCg58y5HgCHvJFPH8rLGqWEkXxtvWj1yNF7AyxsfHoP4wE1WN8v5gx528",
  "key28": "2vuUCXcAeFTJgcXSSdT3dguv1Epcx4h7PxKtWJeiisfFirq2BEgVawW4nrrveXgaDtynrZpUvBnqdMQT2SXKNSH9",
  "key29": "mDx14Zg5ByojsswaED3YgFMHkZna6pUizdMnkYdieTgNxfF5ggE6HH4vXhZ9oBqnLXkND31Pc2GE15daie7mWJv",
  "key30": "35ainYUcjSGVaA5Y34hgkPzxtcgtEEx6HoWPCpvcg2izySW3ke2rukKFgnh29DcER2vsPBL3XJqKHERMGnkHtZvz",
  "key31": "5LNUmTefBNpJVMQ47A3V16C62xKr3RsdxKCj4e3p9fwd79XhJB1onoECuoL7yatQJBKpYct2wcUbimYYoAgwKrV5"
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
