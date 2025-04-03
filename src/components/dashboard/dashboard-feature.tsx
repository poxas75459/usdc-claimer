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
    "3fjTDmGcY76WQHFpypbe1tGHsijNB5VoP82XcAKTwp2N7CcRSUp5GVzxgT9gJFc5xomSUDgEj8t8UCu9j11G9cAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CmunKYu7BXUvg5gWDzf63PC6f4ZpQbYBXLn6Vssm2DtBWU7C9FT1hUkDQFBM5ktYURYQopKJNpfMC4NA9nYDoMz",
  "key1": "2veRLKMM4vt7WqUMvHXnrykbxz3FeuSQjV4AzP2aHysBPkUhwyWQQEhi7PA4TbWexidJPFsSHvDgoCVG31CMa6Tq",
  "key2": "5j9YGUL87qjfD9giTrH1GF55ar7751tX7LDZrgWvirKk8jLDkWi43QKzfFjan1u3hbmWi4gUNwxF5YHFMXvfmY74",
  "key3": "41TcH89w9eFJfWucgVdjmmqfeBDnrf9eom95qrJuJxNzfTfHm7eKHas1kNyCKXuifEfcifdE3816F1bsQcCcBmx8",
  "key4": "4ZnERr9ixSfPBs3mScDEP2kLM9Sgn3khBWqexkK4gHfoyqbjA6qGSWtWrUdhrCRSd9aW3nTqFHX8v2qtNVSYrq42",
  "key5": "31eKUnZDLJtjCTyyCvu7v4NG3rSZ3K5iuLsY4MWGek8oytvzqzy4Q6gxAM8VbEb2jWsunUj9ReewY1Ka2b4hBWYi",
  "key6": "4nshVaRJ1EtyRzDoUdo8HVAMk5Q4SXgC3qMDMfUC1iSfCeATrNydY6D97yQUDERn3MSTVRhExkzPdCQqSZhbekpd",
  "key7": "4PFR58yszU9J8qeR8XER849W9ved7MpeZCr3VQeX9GWX3jagG7viEQjTmTyPgxHhW1PayetZ7dbb6L3F5eZ3ZryY",
  "key8": "3z4Jacp113Pm8hygpz3VusZxDwjFYkcTq2U2KF1Ujh2PuRsMGkRpicrw7CGsGbxfMLRzujKkWoe2cs5VQVMVKK4j",
  "key9": "3XsgPUv3uVoie7Rkb652kiZq6RSAx2SGqjyk4hdJaMdvNxvgarWi5U2BDa4HCuY1hWmXAjVTWMGBPo8XS7m8cZju",
  "key10": "3H1aa4GKsSCXqzTePiratM8tuRQmfAVQoMeHuUWUFrtRtXVd46rLAo8xYWqpeG2wNFrH1agiyYud8hYHaxS42cDQ",
  "key11": "38ppvzL6wZ5ueAsLqhoGfcutfxqRxVzRpNo1aRxN86G7GtryPc74jyMAVYbTDWvHkoNhmw5YAZqfv6EBnztGWdQK",
  "key12": "3kHqWyZBsGpTii5A2oeF3TEmdFSKqVPhXFk22mdLJFDDqsZf8wbKu2Po7PKrWsGBA8daWZY5dR6YUWZmC3tvJwPP",
  "key13": "41UweP3zTNFpuDY5LD7AGJ49h33eDWzuJQ3Bp4KcW1o8iMnj3UPvxejEY8rmwqnSf5iS4f9retFPrcVepMsviRtg",
  "key14": "3iZhXxNt4EtosUPB8Sb46A5No64pvAmwkNPJSsgs5EL87bjoWcaqsvVi75XT2K1YoVBgkc9rRrXgtgbWkjVNLmsf",
  "key15": "5LVjy2eCZ4sebCiW7HpVKoSMjyFrRq6iB2Pbm9qnAN8h1bezJG5wge9hRrzi1bZJUjRQBzGHKsBq3J3o9ALzA3B4",
  "key16": "2pJhFjuoCSDwMTnJ1cjBoykEUopKM7afAQiAw5CLZJrhaR5aoWwH48Bzr5265D4wgsYc3AqXptnmABcmLTJRQeCU",
  "key17": "batP3LpELmYiXx6zroogMKfC2q6zWcroi7R4eF1Yb4WVKBgYWRKeN69i47rZ1kX7moo8J83XB5x1r7DjK5yc7mY",
  "key18": "4FsodVpQuLM39Bfqu8imAKPW7s7xUY4YWuG8ZQJoqBCtfquYrEdAahmhiXyLPhrEMAt5mksUuWUXhY9fUbozr6Go",
  "key19": "NFY3kxQj2m18E21LsdrT7unFWWPtVQJ9uPtFZgXckEnKkyzt2ySBXQGdPjVeLTdhTYYyFLHM67KhJsmvnzX7rbV",
  "key20": "3auSUBJPCCqQ1XeX16aj4LaQLBN3zUVeu3kiER4e94cupT3H6Cho6JaDU8eGJA8JTTrTfjyVLJpEB4wTUSYdbvdD",
  "key21": "4BPZu6Svk5HD8z4iVdtysKjG2KxXMddAnJkAaxfPaQ9yenv9kEuig9byGM3HZ9L4CuWWe6UMHY8UbQANMfPx89R",
  "key22": "5rocrJKTpCSuhxHVcM7XXRp8578VaFpcViuKdyNwpDpiQ2feBjmSuMujerSoTLDZzaxiypU8FAGM9niz5Sh7Whr9",
  "key23": "23E4CBGRb2x2GKXPy4m5FUmSjUWeUhDPXCSJne75S8L21C8XjZMAQ1sF4XrVsL1bApt6mwNsjtyFRHWPrU2n1zs4",
  "key24": "Hh6WAcHgXQ7MsXFC4ABeHsNXCEXbmkBtwUpeHzCV77ZQYAE7HCcwuKSRB71LmvWMDUMHmqNsrJXEEHEn69q93hb",
  "key25": "uYuWBxb5qhKD2dfZDT1Ambk7XiEALw539LFvq2TfXk5fofNaKKatjTYVLnonW1ptKQnqm7N6u7HQA2Z1LkmcYR8",
  "key26": "5CWnwbXjJ18d6jt1NeCLSU6fTpEsLAPfaHtM84irU3qPwSJ9P1xwjnTufDSMrmaBKmS1t64GTVhXkjiErFwsgdM6",
  "key27": "rxwzdCnGWJndttpnvkEWyPGA8iSTmaJ2aTrdVYUrNovTvY7PFgM781MQo1ZWLR5nmF5NTKpZe2bgMXSxkUE2WB7",
  "key28": "2iqocYZdRu3KSt4UwPUvacRD2fhcxYsxDQj75pC6uf4Eah6Rzjy71t6VUaAr5iPD2TCpeMgXYzURfgybEnqqBAW",
  "key29": "26sZx4VgUN548jD9VHAzKTCEXsenrzqKHsbYDiM3FuiYWQD8YUpKYsUXuufJw6r9iEe3Kz89Y1zz3P5NVfXx4Wmi",
  "key30": "2NRLG9ECWSky5KZ823vtfm6Vi2NU8H4b95JCW2ubpuDpad3sfR9rdeiWNkv4Mi27r5yzRRNKWq9nM8doBhgBra9Q",
  "key31": "4Qs5vrQtNCHtRf5MLYkjrHYr4FMzSqu2ba3EuXPSQNjkPztJ5FHacWv7L6D3Hb12xhQdY6dHGUrUyzvhyf6XfutV",
  "key32": "4p8f1XShuo5Xx2qbiq91uyBcUFfxt21JBWuXchTGk9TNpgAmfweTKdDBu36G2xjttYuAyentRDd2g8zDnyW2FhXB",
  "key33": "4koQ5jLkfN32kkfbT7hpXgRGgLb8NjM6qKDAteSAvzNCXnVNfY3Sq7TeEW7SyhozYyZvxkwBKhtueoJ6VsM7txHT",
  "key34": "2giBtbNoZaPs7f6EgEhrJDT4jCr5u7QFfjc71AksxqLDMNe2M7Dk6T61GMTt4qaUktHTYJhnU4XtDsvkgYLAVyas",
  "key35": "3m9ji8dbsNTpZ2fb91pMTc981tgH3iXnGrCR2Xwo3yWfazKNNBy8KjQMWjp8S7hte1MjNPg3EavNcCSbDuRKrxmG",
  "key36": "5995TLVXaGn6LYy5D2kWjum6prG5eE32iXjEJqjiv1hxmQz26nUdLCux9jhrpf7jWFvYu9f86gDh4dP6JHryBYF3",
  "key37": "2DJY5u8C1jXEngYHEimehzsVq1bXtBs7QZEuUbCQ8WzLVxPYwbF6381kzRX3JukoL1zxLrEC9VMhazPmerAsSeqp"
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
