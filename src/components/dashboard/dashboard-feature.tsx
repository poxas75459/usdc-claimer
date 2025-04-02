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
    "3mt7cUK5okLYScrBnMHFjpwoJfiWgq2RAxNezQ5nNxdPoiPMZLTVb7zUxztdLUo5CxNkkjfRYtVtvYP9sSWBVn54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U2bizPcnsXtQfKbYMcWapKNrfJsX1uoBAtiPNVhMMnnn8gBz78nN6BxmhomYptsHrRFrVPSmbVTB5seKiEbdUcu",
  "key1": "5kzGUK5L8sx3GzD9cYPrEHMEMewh7YmSEkmh7QL1hUXRRT25HeydP7fN3ViJMNbmc9U3ihRXfoRXB6DAZaTkriJP",
  "key2": "UaKVm6dWeqZ9eLJbTBUghUErV7hnawMy9JwjxbBHhzbuvA1565HPVNwmMCRJm1GSEc4T92SbeVvnwuSeMeWCEnU",
  "key3": "4o59TPwmwYwQtTL91nKEJzdbeTZmwtTxkT9YRhj4bE6Qu9hKuszH78yXxtiNP1rg1cLf2MeiuhYFLuCvXeqFQVQd",
  "key4": "4mnmrhR7WwPQ67YurJ7DTqCL7mACjMEMt9TTixcEG31qaTtrRfM3fxuZTArh8WXpKnrCFwXwhS1ohkdwmyHCauJL",
  "key5": "kLypBgyfXju4GG6dXix45KxYvCKyAP3hDRXCd2bQBQYDjyeXpw2rwcebW3LLiKVKxW32bZCgK3SrsuCXzjaz2A4",
  "key6": "23xjhWLaQsn263Ara9fZUqzttTcbQRiuuNfKPN1Wdyec4QX7YdxugvCaoC6NkGqfqXXUE7PkBonefmkdk7VrZ6Lu",
  "key7": "46P3vCZ9GfQE8AHiuCdejt2KGJVcdpjXt3jMha3ie54rWuJxivSaZkRbvJe3rV4BrJk2rGsqqLBJE1DYJqgwbAm6",
  "key8": "33Bn4uEJJdW8DiYRD8UrSEHL42Wrjk8kzShjLmULNEAaxM55FqTGCnhYYYq4VpLZRUbEKRkg2ZvJ5PhJy4CHAM51",
  "key9": "4QPwn2t4uCms24Do4wUyxyFTeZwV72nobq2M78dvgk5CYWNLDqCJ1xt58r8pFg1n3pDsYWoGLit34g3VvW6MscjX",
  "key10": "5Gv2o8hCwJGVVgMrBXd71ytYvH1vGyunu6GiCajKyFkDknqWLegaugrdWd3tRLZHu3wqPVyM6KektV9exJVrVAHL",
  "key11": "5y8XHHrEowZvxYyCpBbYqRTLJD83Az2QjSWz8vMW5X88CR9q5uHFFNWLskwN4UWMdcdXrgffTKJqcorfZad8sJV5",
  "key12": "5SGBcZvN2RjywWosxTe1xFkWubkBeZGQKWD12dHR4bZivjCuwEgNvyptq14voDVTH2WJuvjNcNAcPSpqGyv5hGZE",
  "key13": "48k8X1jappw9dWX2dBuvVTUQf9a8Ck9hhs8ExWohe86ebmpsF9fJpZNtXSSsxyX9BHorBamna4e4teKmKeVn46TZ",
  "key14": "5XYUE9qyVCmiH4FU3mVYFWfZDWFfyoJPfnZzJSBXZxJnjFxCjiqWSFLcAPy1ExPxs3x4i76GNU5msxmDA1Af2GXV",
  "key15": "4B3gNrVwwoy72xmigLPLasoCwbN9QxxbRatdCJBBLWZHdYVfs6vxP6K9C5rj799pVHbbxz2pCkYYfb5gpc7gufG8",
  "key16": "55EgcPTpUNKM48kGpWhiJW7uh3CBVuydCEYS7CC9uUeZZDrwnYEpUnguh6cZDhVWN3WVTjp4xQp9aKcgVbQ9ZWMN",
  "key17": "iTeSycDMqERvoqNKKuihuFxWnViJbh2AEMpvJRvHQdXZW3gTzWNF5NVsgwofYdv6uvaegcijxLzSet48R4P51AG",
  "key18": "5szKVf2v8GYP7cz5EzR3yXjU6ae8b6raGbPoDq8CM6JtA9Uq9PtJUbhzDXDzjiCvBxnPKD13EhCYEz9pqcSi4Cwq",
  "key19": "4Ke8ymaNrpVMFtr4Uxn3bQUjfcg7JtmR2VkMkTLi84c28P7ssnNsQgrdTqZeqzy4S2CFGwKUtEL6MpMqNa6DEFDt",
  "key20": "5y5nYitHoo55XYbhZAFjvyvUHH3hS4fJFNgA1oayTfQ66ZwJHCjE4dumtHZkSDDYxp2Kj6UfTgLuNpPpR84Q2Srj",
  "key21": "4HouB7eqRJkp3txqvex7XzWvJTCYTafHcwhyRZfMgn1s8jsrHKBT2Yif7Zd1nzsDTmtm3YEQk9zwF5pS1XWFQpat",
  "key22": "51otdjbUJQ2ot66xdoqCC85sji3CEMcp4ybARfWiTZQvEvKRYWm4X7r8BtTrSxWMJw6BtwBB2QLpNEmhwBLBdJhj",
  "key23": "5H13PTntWiNH2Ad4xG8vUeKuNqS2HsMFt3TngEnTHPxiqPT3WJdR8W7JYbPGFeP9C6ACEwXEAihNBMVf3TH83nK",
  "key24": "5PB2Txiz3wxNN5Cqb89kS7SccDKkdHcS2phJSVjkGntHpjbv2H5ohFgc2dSHxMzhsYeM7URrZXCCsqbje1tNijiV",
  "key25": "2GKt25A55GZnU9VTF6LDxxyeecSam3dV7hRexu78dg6gdZMCirJpXfz2sVQYDLGHJU25XtSojmUZJhnEMptft9vi",
  "key26": "5yUxxPARyqKBDsMp82D7tmjTxtPRq9MnAVyj1zJJXFMxvQCrsGTWjL8uVpVD5JyLHbz8vUbqDEUcPNeUFtJct5de",
  "key27": "59uNvP5JT7ePo7TmtLd7PzPZQY9xm7QNkbC4rS5cJntvpcQCxsSN9NkvNKF3RLXYzLYKxjc75u8gHXXerVyimaPX",
  "key28": "2wRKj5TA8gbasHJrRRgzpqCtXsbKuR6AmBgjTYPtRafZ6xe2Hi1XHqpThckRVSfuz3DxEthn65eK4SYA8NC9uiF8",
  "key29": "3hc6YKdfMtufzz2ehxqwRmimSAsPTTP976aPZxzFFh7nCztR8wg8qFVNkGM9BEjFmP63WVkXVLQ9An9XxUXJeXEs",
  "key30": "5zawz52ggQP2a1UcseqzUNqLJc6X7PzKS9dUZxTeGEtQoYTMRpqvP46vg9TU8kvcb8LHB9jFhUSqkEbNDVdRm53h",
  "key31": "4a7G9s3VX3yEUW4kVUQkkxmgUxvGKfBYgRDNTpvU1pGwiWA7Vx9eMbNKSeR7TTbKQRVcR936QAibgy4CX5vJE85e",
  "key32": "4vqgqZpfMact4ZdqGtSWaaGRVwzLYNhJJSySysUjpQF3rXUQgHz2sCEj2hUqzVs4ChvdfnXNCbvgEdNHX5NmFG4m",
  "key33": "3aw94AEgYeeZ2HFnoMRd5D7UjCU5LKUJLLrBYTSVBd2EjnyQXcn261oDnyWNuQFxC5K5QQFGcNkK5PUvRuoMu8wE",
  "key34": "2t4ypNDhP1A57iys1CknW2aQeoGgC3TdgiqtKgFFJcGsRWXTTxHwCCPFYTnU6k2MZzJ2QVTChjR2nBCuzhRvCMmn"
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
