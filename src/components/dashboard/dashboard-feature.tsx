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
    "JCA3rc1jMp3RaN5HpU5nkn3ue3G4syAidwZnVMCP9qAcKKtoRqhpaXv5x3Qyqt6ZrvfW439yZ7sDVJSBwu4nPdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FaoGSC4b3fg4fRSiTv1fMVRsgxdscEfCTc9rCEYqQECR5oNdS7gAPXhg6K44qAxqwbAXZoQrLJrYZ7KvzNqqCXN",
  "key1": "5f9U45BZhveN9pi3TyH6CHAb2qEHwQHgdLZ8YBpyGe1sgRZ7m6DJwozB7bBrrGz8ZxEAf8bTi79MquH5wmyC1QF6",
  "key2": "2UKzLfPtxz2h4y6sFKkGPrdk9MSVJUAcVH4YoMubG4cMoUj71zYpd45TDc2BPiWNp7et9PHjRpszeKLr7QyaQoYF",
  "key3": "5wYFBg6ZRehLivbhZynboHKLwmaB1j7UKWoefnxXSpdrbhuw26kzUv5Gww35yKP6fZ7GRcrqr6QBrTgjPJj6r1Wn",
  "key4": "2UGzbNFNDSg2sXcHsgHmvqjMhuxGMwsZ8K3CDJ2HJQiA6aLYSuFB4hTXJijZ6YZt7HTLNArkoNn63frj2vjQxpkR",
  "key5": "67KfVgQoFYJxdEyoA824BymEeGrmKdsskTQvefoZMB5xEY6WYJmhNAutuL9fiWXmRazt5v9s1o1fYQHRXcxYDT9F",
  "key6": "3eQhA8x35yRBWqJjKjvbUxVk4Dum1MUVeHWJ9FwcKeq8VtbsCBnHyGxn1Q9K22qaEYKJtqxoBM6TZuGRssTi99JU",
  "key7": "5ZbVEeEkuqp4JzxyTbrp1ReqtMPiiHCM7MFNRN49TxDCpKYW7LTMC1UB3CikLMm1nnTcw5mWeRLNFi33ZAidH4hs",
  "key8": "2K6L5EctxJK5aDjCg6whrLsYnkUq9KAx6PcTts6vxJ1G3MRZ6VC1V8byst8aUk2taLv6WSN5ihrceFx6Gyf86m4X",
  "key9": "3xoF4U78cQTtcuye35qy86HuNL5L7k3woGzHNoaXAcvz6Pvu9VyHLmDfFsDu6GCBcMo3q3ZQQ1NmSyPRZ5pWqJ5A",
  "key10": "3Xxb4fCqZaUJUkcExUAoxheCoMBGCf29akR4HXU2aY2Z1GaRwyHKDmtg8kw3XLbbpUmRFSb19exhZDD56CJihAx1",
  "key11": "ezxhKBdqCBSLDNrZAQCrHsRoVUbk37UTnQqHQFJzSdfY7zG3yQREwaPsGQ8n1pxWHW7dZJAGwdS6dZhJ5MY55PL",
  "key12": "fbCNfpH6ujzpFybg4MLGkKxSVkDFA7sVdfnAjDRapgEtm3ecdm2MsrhmtRNsCLnnsvufrCmncTaVDn5FvKHwtkn",
  "key13": "2fm5LFEVianeT9KS8pa3T6pgHz7UJwvg9SUCTWUi77ooX1gYNwXzYUDy4H8gGnHhdbjZX7rVMtsjDiaFqNo3H2sw",
  "key14": "3SvD4XkCxfqWnhxYWiCmdCQF2XknzdeUz1QyvmnZJzg7b6bNr1CunaboSTnhoSRxY1sapNWeKxgKF6EfMZjUjJ3r",
  "key15": "3LxeXQKd1MR61buyzVKtWBBW1EU6Z582QBVknEFRkrtEzn731jCJRdGRh91hhCWGWkSRUPqjjGbvxgFSuT4TZWQr",
  "key16": "2cgmYXUyQMXWuhezkoJmQPRZLjfFXps7UGdXNU39oD8WdBn6RSxkcTxCYgpHRiRFYu5vQkQCJdACxKZVqUNU6D1q",
  "key17": "2wVhUqChnE3awMa7frJKVtpetT3wc9nkbb4twmCCMVdDc9Bmzfk4U13ax8gR9AUd9A1mBnq9XaDBK9ALBBbYbvdN",
  "key18": "5in9nkQHJCZbwZ6P9xJPUrzFdrc7hnrdTX6BhDePuzHWnB8P3VtdSgVCEts2GVoQT2PGYumbDPkaNTK6P3gHr52D",
  "key19": "2462Ze9YqbkCT8941n5rXWnf1Cn1K7GLUPviTK3BzMt6ujZoDym8oyqCKuUvF8M3bBcm2s7cpauBGMGeNYgTf9YM",
  "key20": "4Ln3M7nT11tFBWFCn4sg9bUUG3UYcfFW7jeU3H4rSg21JdVmMwp19Cd68PLtKYdHTZycGNiiaezji7cRHoHiPZZm",
  "key21": "2NufzRYbc6R8vEsrKimU3BeKaRMkxwAdGkjafegG84zMnd1RnugrU8jdhimK7a8JBSBQNjwg2HpMUd3NkkmvrPz2",
  "key22": "PfHu2rg48AMQrCHKH4Lfmyby2co1GRmiRKzrZyxHYhGrY1tTpoqgoAGC96rv5TYHeVvLfAMQpKPEzkksY18RUwY",
  "key23": "4V1RJseDKdwCYRn5xHwr55Dh5fRomwkaufYYjYRJvnxLaeEmFAcmD7P1EgqDGHfZjX6AjeSF3DGk1EyQu6bpTya6",
  "key24": "3ohoUQQgywVEHoNqNjRVC9uGXa3VNvUVM3Vt6SEJ5hRQFjtPPq6vGADwhtpZkKL6Fzr17nksjYn2AGuynXZQ1StM",
  "key25": "4NYtTYGHQEyK5bx15aQT4att9XRVVcUtGQKsfBrJLLX6u6nxANUGRRewjQVSAjcaWYaE2YHRrQRGDM2F1HKaxDM7",
  "key26": "4d5seaBj8bGxYH4JqVwDLEE1RxsY4EMJoNY15XXcC2K1byrK4EV28yg4Do5bMy1xVAZG62c3qfxZztWHtPo1rrB9",
  "key27": "4WeATKW73pmsEvxd95aMD8hGs6vP893dCmAbyC3myiUH3xEgbyebYwHt9Vram3G8yt3Hvi3dN6GEnAM44CkqKEMh",
  "key28": "5E5NZ9uPVuSKuFCwoTy6cDjYFFVrsHn9KqtW5KQDywiVMvMkdgqxscSiWpUseReJYkCxKBM57U9BSenATbyJiM81",
  "key29": "4V4Ak971RNBR47W6HPsxnbayVHVeGCPgXYR75VAUkdGHhLQEAmzVkGKCt1DmVekS1xdD992Z9APQ4zW9ZKtJzWJX",
  "key30": "MAKGkHrHDoqSKjhh6uANsN7ST8JU1HtMs5mNSajAoM5StpfALymhhgxiJt65bSsdT9xCprKLty7iDCLKDPrqaFh",
  "key31": "4UUaWB1BNnyjj6srLmaydiPBHagqidJU5uBye3DTTwRoubDbUHJe2UUBWcDNrN9YzHmBEJmWKhzXvRDm2qWMCUo9"
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
