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
    "48hCsZ3mkosY4WcbDZtKEXFHDXxyo8UuTQiWkWfEoT2g6MKYtVrNLwUP6HyXDsB2sxnsr8NE85kqeJBf9K67Poux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ivhKai6LHYHVTtRVexgZ3qNzhBCd6dWP5UTTyQbbE7YPgFZKg8YoxowistSTj1rbPN6PPjVZs4yGZoXmCT2t7fT",
  "key1": "3fPYkfyK55px8WeiqojzJHvssAtmK8GUGWEpWBP9RpqN6HKtPVwb9btfsFNxZEFLyNUz6yP9hsA5L4SjqrcxSiTx",
  "key2": "44SWSTQ6mL9p2Z3iDPyZ4PrDZfKXYTjp5dPwPrp182i6PnVKZ1TPuXyAAX3WcdmhcaQJK23ASfvQv3w4Dj14HLuU",
  "key3": "tZBPqkyBGSfnJH4b5b496apijuzxW6ju8UTq2gin5NxBeU9ByxzWXzQWWpYwK8fmURQDdBUzeughKxFYrcTTgNv",
  "key4": "s3YvPiC5Lf1mRM3Lp716QXiqskQhsvFC3xmawKbj1io84RdC6MGQHynhSgRZgxeExpP5xcMEHh6f5usQDwQBY1R",
  "key5": "2ZkeNRak4s5FDfJeUsHC5Rs7aSCoNcHUeXTjbcHTqijNAMgPPTpp3d6WzuYeA14pubAeykKt3HSX7PtEPCxeqBeL",
  "key6": "3vefEX2ZC7bXkxuy454qJLZXR9c3ybqZ3DQDGS1iH69jtLowqrfhFrvsxJD3xDSyuRFP8Hz1hbdCH52XqjENn6y1",
  "key7": "4AYDisDtJuMSNgVyAf8QBAf4QhAkNVnAHdwbRu45YJLfkFj2gEVaJDaJjYoe6nas7rTuZyz3SMMeivrnFBSQjz25",
  "key8": "5fNmTAfy6FhRgu5qMGrArqJC4xFNJaa7FNtEqE1TL7BTH3k6KuKGtDX51V3zovz3qrSxihRBR4hRdWPV3hR86PAd",
  "key9": "4cJtjYPZfYXaYqZQLG4tp8yVXoW9PP54j9AzdYWNVtNsiUzzUkBuV4MWDjREBML8iv5aWZtSpCVoJG7zZnFnXkm9",
  "key10": "4pSmSMviRr3f6gLPj8ybVqhTEG5BorqNryoh4AVPZq73YMDwHmm26fJ3BGBxH7PasNyPeqGCu5japuajUGEELqQr",
  "key11": "4CTKwYJPPYuGEWXDD4C33Ux53Hdg6YsfmzHchs2ijjiwKU9SNCBSZucJNwLsYyvhnM1FzLjsJfqpUMF3LJjDyw4z",
  "key12": "fYX3BSbroeD7h46BbgCFqEGYf75VWoaRM1F5Ywvss4daBULVoJQWefgyNhWiQTtRyPVUHSBTwXjqMEraTpZNehx",
  "key13": "YxLVLHvm7uGDjdqiMiiG2iChK3LMpcN84dTdQj6yucDhZpU6ZKnnW31uLbGWWRJU3pnzsbw5qR4Go6qtJi44nuu",
  "key14": "4iwgm86WbkbUW4F5YfYZCsdJSfWhJu8oeBjqRUnJ5Fd8govtvkxjzPJ4KRoGpGhayxLskwG4em9V2LwTEkhXebUb",
  "key15": "5LTj5YzyLnXsp5HTWE1pFctyBJg4AVPvML4MReqW1S2HzgAMU9B388j2ca6KaP4nMvwyAZ9dPMoM4axwfskqoxxh",
  "key16": "VN8LyEXWHnCXJ8iwrxSK3oBxsZ9nVgp2rAv22PiWyQ1GCASFQCMpLBBBNDupy5ipzTcVwR8CpMw21h4JqJGSAJ1",
  "key17": "2drcJQwetLiui91UqTmh2kN2tWrFj4b71RaWKR8i97yrauvrG664JMfvrnTmfjDUZf9po4sWXimYutKgAY2Sc4pn",
  "key18": "4zaegCQ25ufa983t7naNiRHEgYqKQcjj4Fdn5RybqwzPum4oeCEKSXHNqRnp3TGpdjNgP4zxhqCAph21jeDp6WAK",
  "key19": "4d7pAUqP7ngU1WzrMUB5gH6htBETwRTrPohanNAtycKmsA8nEDfqvr3uLWYdPfUjAx7HsEUr5tvixGWQ563HWVyE",
  "key20": "3rxY8dvyNtVaZtQfCL3zZzRmagXpQpfTEJubMMea723eE4m82pTsdoymAhfMWzTrBwDMfhdoBdiZDYRqi6QS3xED",
  "key21": "2PkmFjTgjS8Y8c4UmtFjsragzNtW6VXt1UEHcG1feXz7u9PCmJucCE4ivXh8ZJoe9aJkdJ946oGWrUBh1uVNaeu1",
  "key22": "3YTs9G7dLi2DHdfCNNg1bJeN2NPvcAABWrpV8YdETtZz3uCi7UsweWuVGa1S1FCQfexsG6jQpUiap6Mccn6AtZ4L",
  "key23": "SA3kdMqZNmkkgVEXQRZbxcy2PAHStaKP3G6VQhKJvFUqn8fvAYHUetqt1FPwCNuM4cSTi8hnCspUJaEx5QwreAC",
  "key24": "4tceHHaFo6tybmrhriQ6qN7W5svniPR82PUCDsjk2UEv3agm3YJYX9yvTP1u7zDnecXRwadP5Y14ycZwF6EmS8ui",
  "key25": "BWBfbYuS9ahJewWLisDezS7XXeoETdBJsch35tE9Ksg1vKENweBuZAjPLq8HrFckcbkFf7b4PR9Qb73BPLFBfeM",
  "key26": "3L8BK5aty7KhEMQv1ouv67hkDqpfQny38NDmqjmjD7ft9f7ys1VxCZzQT5aooYjECcuo8bXoayCGGKsu3FVSv77e",
  "key27": "fezqNP39i1kCvbQHduZNXrU2NF54nJwBKDmTAiJWsWp4tJP8jiJ5vt8rxWMdtzQJXnemMgJd7BmXxSvutz2YUEQ",
  "key28": "5WMy9aSKsYjMcgYk9s2SdTGxNYYpq8Vm2EMcEeNkhsiHSNEdVasDsT1dULTdUrC3rr1aJd7V7C4Z4jPXESRFZWhp",
  "key29": "5em8fYHgUARDYBLnadUgQ9XUaxJUGpurAqP4aadTwo3G3pbvqvsuetgFtQM11EZXKQnaWcbRUctn1oJFZouuqmNT",
  "key30": "5gZwSy9ygxnosPtAVmr5C1mgeoQ6GYS6FpZKTCxKR42PSFwkwjei3PCs4p72AGZAgJU24zfsg8mDWJAdfP644oA8",
  "key31": "4zxKHjw9FMcAkoVpd5t3orPkLGWSPC5G7sLjwW9BSqsxMLHX8S4KmmQxFEi7gD2y4QGJjskDvcahEKR6Vm3ZBChm",
  "key32": "66J5vqPost9cYmR5kAM6bwcT2Ts6SxiR61Gba3FnVSfWmgxwkocPxoR2iPxEGpgUaxYWX76RGDr4WoZfN95z5aSL",
  "key33": "2Cp8Xay7skbZZhNE3nYTjtYPCtvAyfasdFNjR4LGeSVW2MacQp6RSnYoMY9d8hTKYWXdwhDwosXGVp7ADn1q8HYa",
  "key34": "5auCE4Tas1Ay1avV2ZS7VKNYneDn6eVUiDDPTWcpifkp88TRc35yE6LMa4f2na6GsMRozytdy4adQpVvce6TuSjX",
  "key35": "5UP4aV3pgzz1SoQPhuvbqepBLZTvpotZAczyE4MFcqFG8pJmVM7KN7HMLwMvZR3CiMzpoZNGc4fZnmCuNWSCUx8x",
  "key36": "43H3dtVhcwizmSAnPRg8wSvYaZDbxKNEGs3GEQNg975vbkzh2LLQQnAUxhi9BZTbNbav8HrpXViHiV465ZXvDEK9",
  "key37": "5SZSg1Qbeo4KVZhmWRjU4VRn19uqaXq7UnjLQ274rpLjf2zBE7BsbYHse1FgCcdAMkYnVee7KfuV6nqtJjuCxaZV",
  "key38": "44B7qf4RjxFRqztWnoqKEb4Uw3QFJN4Vig7VZ3nzoRqK65NM4yRFiXJLuh2ohUXP4953naaKsWNiu9bagny8otX2",
  "key39": "2SpzrYefabNqQagSP8Ls95yPbgmovjEPpidfdCPjwVjyVEAyV2KGvT78Y5qUXHd4m8zxfwsrexenrKPLf5p6mzQF",
  "key40": "54S1nAEofqH5KbJAdPEGS19gx2RzLd2yHnEYqYKnwXYJyBtuJzmxduAsgoyQgK73QFbr2MHGFMmBDfAGCLTiA2sJ",
  "key41": "46gjaLA1V9rx2VS9h7TGLxJgUwEc4y8Qnn43PFBJ97QFVun322sr6E6Y2Ko6KnfjXuAzeHUJwcGR6SxhtgJ8d6kJ",
  "key42": "2JADQ331KnWgegDidVGCaDXrKk1MkiHATk7iQrmZyZA92pksYR5ZTwFppT23ubyEZpFsGsrMHHuTHxKbvNhqgFtY",
  "key43": "39hJZe76Zwq3ZsqixfNpkpE1hYvRiMCTRtFFi5T6vzsgvX6RsfqBoUMPHLKsiduTJYonKzMB7Yb7KnnfCHzTdMnD",
  "key44": "3eYp5jSguxm1Rrs9d7Hv2a9mrr3DZP4GC9rRk6ryfsL1hEhqRurxhWy8Y4ELe7YDJjnNRT9Eh4qPUT3dC6jXwLtb"
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
