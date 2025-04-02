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
    "2DeyNaQWJ2UeDUXrRm9FXZHk2dK768xtEFaY2D8RcD2npH5C78M5QnQMafJrHijfv4aqpTJfDPbJL8cskq3U5wsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xfiHnRnYkrrek52vU3kdmxoox3wuGNrpk3S6G3reuiZoAniaApen6j5ozEAjj4nSiKpvpmDRgPW24mm1utT36p1",
  "key1": "katkYGkGTGggSLQDvB2MdbxyMs8mQzoKBsX7fCBFJzowdig48xYG7GGEx2r4d5qXVhqr6NGUHxqkErN7nPJT2Wd",
  "key2": "5vA7Ap6zN6yfzGNRV6H5g2jnGLoahA71ynC9QcAwJJEM3vfCFZnLcVax8hALiPh3AxqkigttKNqV7x8nGxwqwMHv",
  "key3": "p2hvDCxrkVARrytaPnoaHpnUsghEgKvQXQ9susyLjog8ehS4FuYgWJEnByZaPW1JBCTiSRz3MQnvxt8djXPez1t",
  "key4": "5qyAG5Xkq3xPdLrgFvH1tsKbf9eZczpNhT8A3RrpCChb2VGpgRX8sZdQCf75z3Nf7bhozzJG4tjJ2QACfZEXCodP",
  "key5": "Pg2L3ViFg2K4Kh9V3mUT9cm1qJ7usC9knjYjEY28KtEyLg9CoCpvCAVbi79Gv9tdpHRPxagc2vjtXdfezXUF1xd",
  "key6": "2XUuRYk49FnYH4i1ta6X4Hi4xVSF53d1C6CfvYdosHUtuYGUC47jDTWSJvaszGNCrRC5TqGHDqBUNvGA7diDmVeL",
  "key7": "2eMTkSHrfwXAst31YHjLMN2t5yVFAfRRV8qxipZZKoJE6Tho8hH7yv9xjZYpYtyKRXnRHEeoKEPjnsBzi4i7vrTu",
  "key8": "WULAKCtJiavgRwiCocBSsiV6w2rX6KX2fXH17XNFSePVegmZHDhrVpxam8HZARf28WNUr9EHKXK4M1TbqhibSQ2",
  "key9": "KmhxXzLSZNBi3dVMYHYzLegawCpRC5TbqKtRdN4jyit7AvZB76fY7Yz7Gvijg1bCF2gbNDW3HDmscborvF5LvuE",
  "key10": "4kakctnuuLryTw2jC6fL1PLEf2bameDkqgY6BG3o2oF6ed7RA2rCPHxtyeNJ5HM45rJAcg5WnrecS471Sha9aPbL",
  "key11": "4WREyyCJFFWi7SsikfvYiim3ZLD45X5xW2uaN2JbfQvRyfJPSTgAQHtXjEYAga9P8T8cEkc3xQH5M6TbuwSmFNq1",
  "key12": "2Y1y4z8n8KGRwYUukwTe6CvBCosrZuvgB7wEMcmSdHMD7cMyuXHQLG2HWQ5vjp7AW3CPmSmiPP7UvK9pBBRxb1EV",
  "key13": "2fWjexv1wfDE9a1BRpUNEGMyNMCpDjtCkp16Qo5v2E7cW4mF6V2N7vXdME9sMDuRcvgaRrtjno9mTTfkp1UuhUqb",
  "key14": "4puWd5LUJx3Gz3fA8WQC1BYBnFiPgwvjyUH2ZMR7jXPstGKGBNgLBnr9kpvrREyHKMy56mXKZTKA8CStxkjqkB2o",
  "key15": "56Kpt7v6dtxUAg31msZqWKAQkFjmogx5V1RHZS32Gtvij89NP7ThSq1zUxJ52x8T9wnZZXJ2fquJ2A8DWT8kxfws",
  "key16": "5gtFPZE1sETf9dsoNoMT9wA2opnxbKtTjA49s63ZtihekWxpuefqyVCtAtNKLJa1defXt4Xhdio7ENBYge4wMati",
  "key17": "62jzqZDryX4Y7FopJJaDpRCu8HNDZkJsstphCLiiKi6gDb6gdDC9ui669SGV5dexCaSyUeuqeeaT1cxyqgh3afkY",
  "key18": "4R5SwqCGjmvonF52YmZJgbUPr2nLmtVuNytNJpE9FwCHNz5ZP69BiuuT7ygZ2bYtEgxDdeptSTJkMeT64Eri9aU1",
  "key19": "4RjpvAeVe5kDUzmn7yiwty7tMKBQ5DbYYs3tt1ZWZAYThUc3B1JVBZtoCyyJzbxeK1aSniyEo7vsneJexthN6hST",
  "key20": "3NUTQ5Q4eJFcpQMmuQHcyUMb4wigxzip9mVQNK8ZZCPH7xs9kg4MGLWWbUG4dJEujk6Av96DEYpHzW14B5zpvjkK",
  "key21": "vDBvMWiCo7Ku9S5ASx2qy1gQFKEC2pxy7qyzLMimRiVnnXL9vsJZFD4k2jVcXmcch1wpZ8N5EM2eqcAy9eprdY1",
  "key22": "5FYa4QW2MpjtpmBQU6CkLJbCDqyZaYKzfHEsFN7AgVixQbjXfjN1HryfsrWAfXrgJpwMFVaqPLAtocMBSWunUuxp",
  "key23": "5q7hSwVYRci4tW27pbhVwAEn2rKeEF15qugeScupc4esfBvRvXyXMxgPSxq15eibakCzPoMvneGDhoxmuFxUESot",
  "key24": "5FZwa3X1osfLhYGxkfT7i6Hbx8FnUbFDRe25WQ5ghsYtBJ2guxAXvQch17DLTTUzNzsG5xEsdjDmKao5FPWdD8K9",
  "key25": "4SQoRgAqcFZbR9aYfDN46WYFuCMxPwxhaWZFpWM1aFTmBfizdZys8eWEgwwkD9pU1xU8rhpCG4SUitN9ESRENLCS",
  "key26": "NVdKCnjf1wnNjA3Ybpo1BUHYQ2rvuwHGf8VEdN92Rux48ntcw4twPt77rQBfbzrE8x5MfKemjHEY5ksLd5786mJ",
  "key27": "2ptoW9HVkVVaWwjvQR4xjmQFY8Zfqds95Gt6YUC7SBFrojTXpJ3xgQaxRBhuhDtecSVHhfdyqh4mPRagEKPE2yVR",
  "key28": "4cjKdyjZ3tNp8vgdhGYed7S4MPGqwwByHRW45NiekSaiNf2V6QiKAPt5PEV5cUZzz3DnzRRvcywUP6FpoCG1m42m",
  "key29": "4ZQBWsYGP7Qokf7SPdnU7P6KzEvgCULPRiBY7Ak6aYLJaNysK8TroccMDdR9e5N63xXWqw75BBGtSkJGBUhqLS4W",
  "key30": "2THJ7iPjrvH4SVEuwoe9N8LKb1vcmS5xf5bEfPCbfaytdkLLGV327o27gcAabPCbLsawy7JRCcwpB2yEeYm9VxV8",
  "key31": "2K8BCf7bwLCVmtQuAfMVTr66pGYrCHHq9RbFb5nCcAf74bNDX1YUn7xA8uYsNUPuiS2FRFaADdUEqtmMWsGqgaw5",
  "key32": "LgJ1QNKagtewhuCGUNL4ExtrXvFvatkqFSdgjejrjVyes3GpAqxe11HajVCrbKrLYnsDMWMJmbDdkdpomEkjA7v",
  "key33": "NNkBGXkLQts6PLnVbaCYmFDopYg9vdhEkBf6UbhpHs7N5FR3q8vvcRuXeJu6iP5uwLHgBY1ePJxkp3dsSxQPvTH",
  "key34": "j95s84MkNUtexy4KhnD33TsrSPFi6zetanN99VDs9KTWuJXh85xDDc9sQzzGVAjq6vgXPjBLnL7b9D6S8v7Ttdz",
  "key35": "FdTzbvphrthaw9sVFtZBumYnnXpNmYCRihxLEiCwTdH2Rs11hcKZXU8At5bGA7bQSrYJ6oseXwGzj9yxXgLBXap",
  "key36": "22MAxEZ6wkAxzzhHyW7ExxZcmvfKaLu4UQcqzM6iaQhydiS3PPZWnhQdRVkLG5JgDsUpi6qddVxUxE7oeBLKJnCc",
  "key37": "4i93vPhieUbPLBSrhkPtXSWNxGjeP1LJ4K2pBai1Vajb19bpafeMit33uAr2hnjQk6N1FsqFqUbVRXtmUJHrcqjE",
  "key38": "2QgBrmBhKJEFFZaJ6LwPkkFXksfrDUDuHeQyPXFUkaJCdvwZBXKhj6Cn9iVxxo2qy14jD66d1vNXtJGGJda6CNEm",
  "key39": "2SGU8K7XA52NMjzgZjaVEvg2m4Nuy2kJqUS5qJmNuLja8NRvW4J7HWF17nPv65h1U39jfdZ7Nk4gaxgiV3w21YAk",
  "key40": "5e8KepeqesGovCr6z2seBVyENraHdyvKjTc5TDTMc887BKKZ3XszmyVLt1em614u7UJhkpUBppxPB2KuSm3FDXrn"
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
