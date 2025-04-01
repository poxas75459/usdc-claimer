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
    "5hHxYgDpBL6XYgvceH62SyYDDthFGoi7dtBWLpdQWzt7uXNPi4AJUdzr2x6LDuHgsBTGdXLpviX3VmVRNR174Ub9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ntnJJQ4Eo43uznFdULWeLfqKbY8xxEZhKGsS5mQhiykVNeRBRYRpYE2gnLiNwFzxGHD9V1gkZ1sVeFyPAxpvTYP",
  "key1": "2LRXNvKbSpxSCT5BBSPggmZ6p644DqntFSbi8EZcgnkpWuwiWxe1Da4AcktMwGy9uAYcqJ1Trs9igDGSdj2HbeeD",
  "key2": "23HrsWtCTKmsxvvQzNeAcdHWwiPGZWnT19sni3oPGE2uhHX8vtXzsGDpXAa6op2fnDrm8HXMo9e9RTHDDV8SxbYJ",
  "key3": "XxocgHEgbYyJg9ivNH7qcjuLGVanYUMuX9unLxuSPNqK1DEu9Mw2nFf7wTvJDcz34XL1Yh4BdYH4d7Z6XYVUnpe",
  "key4": "3SJCNHmMpKiMbSDECLo6Nj5YmG41Rw1WrQh1HgEcNzQhedpf8q1oqWDFNtjqsSvfpe6oPGANGHdYpBn5AMmEmkHX",
  "key5": "3m2LArpqQEKRtZtM5Rt3FQwVVJGserBnJu353tiStEFGsiTD6ZN4jdia2sp6jqHPJezJGautG2fKLvgEKkLTaefJ",
  "key6": "63poRxQSm4md9bZr28wJHauwpfPNwL2XdpWdZvZJZwqtWxeLx8iNxXRa5JrX1cJYFdUiKHhTq5BPUKWQKGemcofe",
  "key7": "4ov5Ak7S9vwxQcJGn1z2CCa7duMCEXHj4yJShhPnzMv9c6a2k2FPPu96e6npP1oxs7JjbgH37Z3eAhPRCCdGWJUr",
  "key8": "3Mue8CTcGB8rLiTL3V87acaCmPZdZQYP8GG8EDvdjtjvUuhmgqcmr6Mjij8a7AVUQySwsoaAySjXMAXWojYsBCvF",
  "key9": "5iUBikQeBTsFYBzo2YiyrdZifbsTA5PWi86mE7kMyTS4RMNniFr6qvqUN4PG32f9A9KgH9DmgTifWdVX9GejrNZC",
  "key10": "4PASujMeq8gLjX4kN8xFTZjHQiBbapUCTvR2zGqomZknStFw5doAN1gKJZ8Poso5Nqz5KyV6QC2JsL32vvWiyhHN",
  "key11": "2AfAVp7QP6RoLUxWAvont2MD69TTKzGQUceuXRvUPWGve89S6WjM6RD2yuXvoDDTyNqCtuap9u9QwMEGSfVkiGeD",
  "key12": "4MAbZMTseX7iZX4mkvTAomKhMqc56q9g3GS4pp33MKMeCbKpNCUpADtyziiMG92TNxtjTPFswiBzfEYRnvU5izZc",
  "key13": "5FnpyxKmjG7Wx53vdLct1V5fgb8ZPasf9eWVhDaZYHdwpkyvVS4trC1kMZuwcq7X2hLSEpAmyjPqD2x7MHmc37rt",
  "key14": "463ycwuTnKCijP9ZZXJJ8vkqitUE5guwVK7yoRQnipezUMaRdjhmG9z6xRs6PVpBnJaQPaSa5J47QqHQixjdUfLa",
  "key15": "4zm2gno3Hjj5BtvycND2e9i5uen9sVQRm6KpKKe2YVjqse7tbp885dYD8bawXbaZSetQNykCoiYwiCgCuj8Pk1NV",
  "key16": "4JhJTQGoJd45NaXYWXL4oSz2ASwNAgJXtg1ixSPGbiXmYf3oHeDAHRLU9aMiXLaQthWKNrSXvLpxbfsHdBrNcZY5",
  "key17": "39D2ugYK6ZVvGo2oAEEWF2yuKENQiLgu7roYqGqx5bQVvcXA8XD9T1V3GLkCP4orCaH81XJyKfMQKZy6Hfe3rnQ1",
  "key18": "5BzSN2mfp8FUwYJ8fb2gmCfD42wCfDRi1pRrPSyMciBv5kmC6cHAaRtCfVLieLM2f3fcmzgL7aWH2J1SgLxPigkk",
  "key19": "zDvUSra4wkd2VEiCxMx9aEM9V4C556NYgWsq6vFhUTcVBBoLV2AMeGYtAhBpuqSPmfenk2t3zC8ecVcLQofMJYF",
  "key20": "23Zo3tYxbH8C48bhu3npcDoJT2dFvEEV4s9e4zejaBmfUPLdDLgW63ABEJGSxFBjL2EfUuSCo9GJw6JEX71Dg8Ey",
  "key21": "3ecsr2qisN2ih7AdQaTroH7tyMcUSqqBq7jkFvnhUMf6GbTycUNWFpWqmsJ3aovUvEz5yBg3GF8FLof4Edik9ppz",
  "key22": "2KzTNeJZbmMBGVAvAAer3L2UAYw6wDM9GMf1B4qDvzaSuEVGtVxt6TzhPoaBUXDq1vwXsKgzu7vx4e7CRFKAcvg9",
  "key23": "43nxLGXfnm7iqVvqoWw2jxjmApEdXbCVjRj12xog1gdjm377T5FvMRAuzP4ssXTcbcXidHsHMZMxgimSEkSoQ45e",
  "key24": "4ksrnG7DefgCvcPVjR1fiTJPhrBn6C6SNgnE6GDifGcxmaoJGTkFBdgvw9YioPEStxqxHZW4RMy5LUMWkHY3eFYf",
  "key25": "5c91PoNDJDJRR42ZwvAyTgYymPQEaf4dZwCUFcTYWFkvZJmzPokoDKK3vunbxSbXSaSAiRT27SXrEmdtg5wLg1hG",
  "key26": "2EgB5XXo9MER6DP8GUm9m5XusoZyTM3UwxJSmzgRqDTHqL9VnBc487XRSYKWyTnCMxRMbnJxbhhN8EHPoLEtHKuP",
  "key27": "5SKZrGXDLMnT2jEcyCAarNeeQTV5SFEm6jxcnWvXHTA1k7uFGvfpyKX25KpC2rrrqoXQvAdPgYCaR6A7XVMtC9bk",
  "key28": "aZjSfvEyvxBKqJP5QnsCMPXTaniZNDjr8nUmtKsChZFAsrpKiJfQburCSBEUJCceGvfKgG9vCL1czjpjGFDhoLY",
  "key29": "35fNtoX7PsJJbUj6GtJUd4XJVRTxWL63RawWsrR5Jd3CsPH9QFY4a29zDbaXJjGCZUDFfymAy2x9aeFi3whSNJkF",
  "key30": "3uSkQm73nEUApCDsSthrEkxi39MhhNWJacdRZMS1LjmqTNh9j1EysFDLyvuRsN2SrmdbhzwcQXHkFoJbo4PuXLGe",
  "key31": "3iGaJmX6Sx5amyRASXEmKB7ukNK3gwaiSF6WiLp7nPhA2mJ22Pp8j5JUP25XUe6NGRLHDgGaVtjfv6rafCowfNqk",
  "key32": "2u2L2oGy6eRs837j3Hm1wA7hWYertMsUmkcNKTQCgxQPeYPzvv6RHxoHdhduhXtTPWLjaXY6ARpGgGfsSxEBR9y9",
  "key33": "YMkTyGvmXTucFeiV1cNLBP3JJUeKkhMtS6D5MfQtFUsMqP7c2BPFjRyRQdpAmWvzeJvzX3HXzQyKa57WBGjBM6Q",
  "key34": "23WTkHBSTE3RpvsW1E92GdyeBtP4RzUfTgJgh5cvykXkbxf5ZKDKDD9cnhzCfEMUoo2d3RCRgYmJrtXRUnq7n2P6",
  "key35": "3TqkwTYBoDuVAi9WTkv1HCFmS995X3EDfAQbUXb3JyjXE239Cc7AFWpFkbgphrxNfF2bPmsw6VpgtHewqdcSKQrN",
  "key36": "27DLzZbsEGik4NroGouPDyDkbK94x6HaASAxe1JJTDriTLXXvvYeUAwJvtayuLF6kqhPFuckiUc751g8zHkZXFDE",
  "key37": "ZvNRAQCowBUJeGN7ESJ6aJg8urSVSMgAj9b1edb356iTPWBiUqz8WfYwiah3HdYYh1aLQtx2k1LJW7bPYSGu1zs",
  "key38": "24JPidr7H8J714WBgwAXSjZUjhkdHrMZkypJfrgqdkzqQNFfFELkKKMrQXzWmwcoYGiARC3QHcgCH4Ffg62Tju89",
  "key39": "3FgJiXA7iyZRyntwzFaopuLJFHZKqR1CsndhJeMyXHQqn2gEkryTYZ8nsABqFe8hFu3m7BVX4ihR3tL2aPn6aM7T",
  "key40": "2XLeo1Z91KLkM3cqJrX9Wx8XqnoSu7KbqdsfPzfs5Y754SgtBKmCk8MdJD3WoRWFJQ4sQgTeRk32TVqUVJdh3Kw9",
  "key41": "2hDSoKLNcMgtF4bonbW7xo7kqKuzjQWkLBv4Jo3qMA3nEdFe8qZneojEzA24tCN1M68YVuvRniCyqTgnf2bJvmet",
  "key42": "3Lpzy5HtQGk3f9SxoRLy22mVFF5a8oXtxQ2MyLdkhmmSar7mVCLAcpwLyNVHgvnM8TKrR1NtgZJKe53AfT3eHGaG"
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
