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
    "h7pUViFfXi47RB4gHEa1vUpMRHrrooLapvhSn9jBjdeBJAgDg4f23qjg6PysXfXiyaPRrfkYDHVgAwRf1tMh3qH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YjssXfp4C5v3r6714tHuiEGv189ByqRPQF3PauCHHPf95HTp8Uu1vE7JurngiPxvrHHYhKeU3VnckCsLftypcN1",
  "key1": "21ubBFEcZufxXRCbqLC9XvL2JbCdEKga1jsnqBoerBeYvgB7X2Q34kEe91hjSVXeF9ywVJuqP4m4F3WmFhcFudw6",
  "key2": "346QHrfzx4MJPpXxiMGoeeudAiQeyH83L1R3UBMdQTyHmbpfhbisfM1wVKKqCnQQ7jY7ZtdzczCR4gpRsbx4bMjX",
  "key3": "2kdcCfn6yHUWonfbB5BL4TN8YnBV4XaVffwpHfPC9iaAN7pRQau1AtbkSnu1re1Ng2KnPCeFjbCZ63ALueJ4oCog",
  "key4": "5frPvVRY5whgYXctzJsmubxgGduHpFdadWTpkf6Q5CsETMAwGg4FDEYCrQVm8XEaR3HqTN5ZdGQraaqDXaYYWoD1",
  "key5": "i5kTvpxeFCVPqRaUW6FdRkPGTP8yVAjA1UaFfZmiGFHqRfyK3nMZuiUcYcjutn1NNRJyiSRpp27rXWSdqJATrYM",
  "key6": "2H2E1Q3eFNeozHh64QwSA6TZ3dAtWt77rNQmUbGe2UmQR9McFQ38u8Xv7VD5t7oz8iiU95go4wPExkLnpdHxoH9k",
  "key7": "2jBQNjSAxxWmGbLUN18dQ2SRgq2tappYdxq7H1ecLKgmsKmnRQ5zTsqeWMe4JQNazD1f6BWgMzoyUQfFXdGG6oEM",
  "key8": "2FwL4qcWtpquPrvS3mVjxv9zteyMEG9TedMvcQKiXJSj78CxxKKy7opacQ9oWUUQX9A4z7ArfyZkjyyZPpSobCjH",
  "key9": "484vrp9QTb4TCdDoZgn4rB9EwFmZbFHJjdc7N91Dr75q7qfSPnyczyZY9294C4HtcJSyoUQGKriw2WEAsNer9AuB",
  "key10": "Gp2PzcggJv4YpmB9uZV5Y1eBfazVcHL27SREpzDAZdCsZewJoUknYnkQ2HHQ8Fg4YEMNMeNdvLMA9RKDh9fPEBV",
  "key11": "4SUhv1j5trNX16GRbzaecj2hYccbHUfQczgDy2C2u8vGK1TVU5KYrMD7qyge64kkHpaStkFanagAqP7ACbgtGKpY",
  "key12": "owbFCXHtAQ7E3nsBVJLq7kkKc6LQCfJ4BoVC4AAYmpGNN36x5Acxwcj9M464TbZhRMmpxGjP7NWEnvASR55F925",
  "key13": "4ZPfUjQ8G6UzAWZDZHzsnEtnBwfMVqF5Eqb11XHGZrukwAUN7EGE9TXDa1E77oyfjy4zDEzLJgCNNJA1bpbkyLJp",
  "key14": "2XRon15BYry6ZDvToBTm41yDPJ6GuRfJZDJ1w1JPe9oSnWFhvtyfrz1H8SXMnqQ9dpfX2z1KT3b98swK7YJ6FEDP",
  "key15": "UF4dKQvmmeFV7AXBHxKcAWzGXJ8j1uhBoDXWzF2CiVPS1xRk6ujmn3o2e7wV26eMWoHgJ9B7Z5V8xdxmB8tDnhP",
  "key16": "VEkwHT8h7nWcYC2Qy3mjEjbMHQbMqtAfoEqNFyXDHy3ANwLQqrPg8gYzCzopkFJxzmEvYo4fLjFfoQ3bogdzATK",
  "key17": "5XTFaxUJQpP99tRLZvBJJ4BxeuRHjz2J3MLHBiVGpNuqDJoVZFnnc3CD8po9VtdCrMweGUfu93g4f26rh4A8yjkv",
  "key18": "5dxEagb449k3x1MSExACwY2AFHJAHGgTZBfVXTnHKaAbZe2sqNFivhrd8fkuKF84Zq9j9Hq87DAD3TdqqdrnKvGR",
  "key19": "3BHwJpMZ3C2r2sh9CtzN2RJRxoHQVEuSsBmV8riMJwTfxKuTHgNQyuf7rtK5pgEbA4oyUU77TiGiDqmkeB9z5oMk",
  "key20": "2y91uFvUu54o4Ug8F29RGt9JJjMBBJMTdtsYRARcVZegMgTCSdDKP9WbVetX5fyVoentmKnyJdZ5kZoHDz3nJjug",
  "key21": "2tKMHkqfA6oogyDc9gUwA8sAHuWJbwKcW1VC1reqYrffZd7V1zr6HLgSFw5PmFCzVRwRzzYEzz2sBr1iuL1g3e8F",
  "key22": "5LV8NpFyj7Wf9NBpdB6PJSUDStQGw3SVNFPV31ZkRHjzkumphpLYEJ7E5GLpJmemM1ZdtMK3UiqWG7KSmvUzbV6d",
  "key23": "5BQB2J5j2hoMta5sSiFocyEG4WwvExH4dYGbSP2TPpAeqMzFeuGfeftm65AxfZ4ViXPNsEig5qwaDfEkrq9s9XK7",
  "key24": "mZfRaSCQSYh8hdytGzDD2nTCGZHYvnABr5JAqzCae2yWHgoe6orJtdfmc9TnNNnFG8pyWjVJtqn5doHB94WaPbL",
  "key25": "41DqQ1VR21NsR9t4GFvEztepJYwNyP1r9uguuSS7LULGXU5Bdm7i4rrt2K375fJR4ks3yYjmGWT7HwRMyDEWRTeo",
  "key26": "55K4Q4UxLqG7HS2A9ng1wFT44zX8tLCN7sRY2FgiZcxjRTnRKs46uJUZa5fS64hGRPPne9isKfbgFrFzT1hAzdU7",
  "key27": "234PJHTMHnyCfqApw6yQ3pChqV4whixcCk83quRBPrbz2nkzYWXAetArbGjiNf9cYXCcuPt3ijM6JRBZPAN2WM2f",
  "key28": "5X2Qts9B99ZirXL5KrEwgVg4gnwM8n828MDQ8Lo7Guu7FVi4muNvrvYA5HDtDyGWBvvfNQbF8QCXAkr9F8AG3BiQ",
  "key29": "MUGfFeYY2d1igUNfpVgzfkdV7FSTpVqGxX5N6soVMcq5Pftd2XDBu8mqPgyMZzmqR8eWWMJciDpLPghrsT4WqQ6",
  "key30": "35RcP8Sg3gWcEATdVXTLayYKNf7mxrMLJ4naC269R9gnqkh9tigzS9nFCtnavs5oC9GzWJvEAAwVs5h7sA8gawTs",
  "key31": "v4vsG8nEyPKcDDFjyMKRDKcmMzRA6BAZZUJdRAsCcoc3sJZ5x8S4YRxChNB1R5L2pgLRaUYLSQk7pk8gb5beJER",
  "key32": "3vM9vs5spXzTGtbsm6QRiQH6KF7Az44yh5XVzyujS2m7pJniwEUqjFiM6hpXVWxGe9PARDaLQdHXGPzEpzbnRTmR",
  "key33": "3N4VuiFQM9Lz3okQZa84LjUvNkM7ghGNT55jAjqEcXPeapP8e7xT6Y5njotQcz2spENs4BFt8aoMPtVb9SyW5AMD",
  "key34": "urAU7jeteHaqMC6U5Cwh9wnrnrHaNioYNcZK1bctFQzNFQSLpm26jSCCjTdSMqW7A185LRVJwtWQRh3UoXFkU2f",
  "key35": "2sCdfj2xf1n9F8kgY2VeGfvXEj8nCTbuc4Wsxdmcj2PqWLk3cjmG6yz4wTixAq34t4M8oJN1f6pzBGTnquVYWSy4",
  "key36": "4FbErjjbFs2vvfTRGU99MQzBty4JebuM3Gb4pcgbd3PPi4ZwcAcez8mak6yboAZBWneAbaeUUpk4CCAammbWE8yy",
  "key37": "5vCTGND7D7ZK8odeYB5V6BxZVe74GoXiGFNn3ao4XQw9ND53sPgFLEXsdAacH8UYsXi6CBo9EXGA5bd1yvjufrot"
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
