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
    "2yJXx7397ZcKnB69FJrgQ89wUQyvHNJ8BoFt1jVnzivR6kMyE4pGWJ2zWoSrpxUDQcg42HjacKDENz1duZPUHyXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "121urz1LwBMwbJSd6L3nJyasAT5bsKLMkhv7XrPTg27XrnhXAQf7xUkAdqYqhEgE4DTTr5UUMtmR2ety3gn2ULSf",
  "key1": "5xyMv4Qwj2ymVGYsscGYiQEDeKKfpTTvWLhkuw9LWP6bNtT3hfR4KSy5zCfCxNRy2rSysoewfmCYV2avc76b6cd4",
  "key2": "3ti1oaqyvgjqnev1fux9gxnHzt5pUqFDA9iGsh2Wzzyqao3c3koPwm6A3LiQv36LuycneW3BQtYGDk4wAzvXGVx5",
  "key3": "36xCyP4aiB9b1GJ3qYWKsdvRtCoPtDsobN5fGEujCof5YYKvutmQMM4Qg123t3hFFbBT54qsiHkE93rZYLWYR6rn",
  "key4": "4WbBwSF8ppSLnUBz8DQHrZd9YFgFvK4orbWvAy6Mo7uJhEy46KjKrGChwr5xT36Kte39UHYQuwaUFKeRR1WCXNw7",
  "key5": "4yC1eHVrG1bMzf5S5iH6b5FcnyLyVGHmLDiUz1dDd1qWb2r35U4LNCRuruYJLVVQJsSgNZTu3sz99NU1cT2FHd12",
  "key6": "58MniPMh9FKYr1K3q6F1LFF9Eq6STKb5gXdzBsK7zapGXn72CxRrFSHE1UUu5ZWAY67phucJqeF7FLrnVjnNmTT7",
  "key7": "3tQbeUpwC4sVa8uyQMVoDT3rta8y5TEvqrzAgKgr4BaAAGFWizfejVxnGfw38Nd5bQcoho3HsgUrLKCjediR7BFe",
  "key8": "ujroAxXC4wMg8KZjiRo5GHsGqTgpGebMH1QCF3cnSgsvgvVNVynAbBLJDC19KerQVh7nrY5PXj9SFs76kGkSoiV",
  "key9": "57AMNpjXewP9HHsyRVSp2JPbMJ5mQULHhswYsuozo5aMbxoUD8TtU7R8T4WFqNt5RBTd7UE2idTmQp7Fa7ojs4b9",
  "key10": "3B3UuYz2wEtnErpMoa7TF11KNsezFeoTWYkShQNYCBonuUkCB3wGzR3qx5Vmc3Px74TE1rxeBsMRw4tP65mpmtN9",
  "key11": "Q5ho6QYWCEStY9vZKMyfRrPNqzmwFbt6XfRMP772kQJXVAa5mBcJ68zPfxquRNktKSHNrtu51sgnDDb26inzFh2",
  "key12": "5p6dskYW44Nt7fqtpNvWpeQx3wB1huuRMhsxx4vu9eCCfo4idzneR8tQhT5KrBDHr8A1AZjPBcaDef35cynUAVhw",
  "key13": "ZUDPucLFY3DfgqPHpUQP4p8ZLUEyhCcm2yAQDorCjRvBKhSRDGMUiZp4k44bxKeq5hqPyNVatpARzzBETZQetUq",
  "key14": "5UbESpWZA5UhWZqzGf9iEveUxs3TPdychssWF4s7LpWnHcSubKfZu4tdN3HSsZGNoURFyEeRiGzU7a5n4Fw9tbu8",
  "key15": "2miw4jqXPo5uMzjWcGbLaJKuqQL5cqNwgnW85HYz3fCR7AreLcsKv4aZhYi89gy36Y9ArHQevhd9fohGfSF7ZB53",
  "key16": "3QgJvJqrUZsaDoba1GzWZakfxEakH7UVMVLbEVF57J6D8GUYWGZXAeiVWZyKfoT2BAupu5WZLSs3jz9Q5r9oYeye",
  "key17": "2ZqZtwgFAxyCrzjyggMytjHgQN6sqwRGMn4Xp6j6oHdgRJM8YZZS8KCstz8kPtMJj1vRqJ34YhzNBMuS3yZv1Wsq",
  "key18": "47Vf9cqroGmMxoS9txXeHzmx3AckhaUqA3x9xwcBSyLX9MgHweoFrPQDyyrtStQQiXZj11kJP5EyZyTFFSwiMcv9",
  "key19": "25Wqe3SvVgyP4pd8A5xcWk8gfqzffzoEW8MzKVePoDirvn6GoRngEgyHWb8b6NCwWXjwQq4CExF8x5HCFee7FFBY",
  "key20": "5hSwqsXC5sLEmT3gdrihMGpzk8x2nmkEvjXU9ubQJUU2BX9nKeWp6fQkNGgkKMsgRUUtAqUnjCovgGFL1J8zmoDN",
  "key21": "xX3pyj4A8CJETLRP9HMZa6VwRnPEKCtVpy5kjuMSDvn3FC1Typ5keoCFzMCnaXJM2PMSEZuVMtE9vAKKFLhdRsv",
  "key22": "ygox8iNEQY5XGr1bFuzSM55vGxgdrh9JVn4SQjE9LvQU5WPCxUtwMFWFCBmAyk4wiE738PweFZjWdqxro8ftBVi",
  "key23": "1SPcUp2Zkk1jKUb7f93d4TKFdVEiHRCh1Bm5x2XdcMb7cpaSkk6pPV2ar7oN9otqVqzsbFATbcwue4meuSPsY5L",
  "key24": "2uGs78WauwNGG2Ersvo5rqC4jqSGgLizeV7AgAHcx5szyEmoSZcfAoasrQefYa99XcSf2FdZmgAC1uFyYYeA8PB2",
  "key25": "oBmfaGfbAEbvmi8cTVQjsae94ijKJ2Mv7BiTYjTYn4FUQhP1kAwrL2VVN1Ym9FNuEPufaPJqhSuNN3r85rECNGC",
  "key26": "5pXyVfPvzBe66de42WDd8es25GCNwZHc7M7gaUkbX4SD4XPzqgtCH3ZafcKYb9oDVapkViFFzFCJcoESPJnmHgnT",
  "key27": "4B8jMw1QndxQgmgkuT8F8PVTrEWnhRaq3V6A1kiAKSXr2nQtAgFi1xHWoWYYefNVa5x5cgQKrGzqgBQ4vMvEyYhK",
  "key28": "46BMp2mMaYbs8j35VmiU2NCWW27Vi2wECidGms7A112suW2KkfjDan9wb1zv8ximbkhcEqzLEs82gb3BNCa5iwXo",
  "key29": "2uWpvPyrvhyVEBK1TueVPixSmQMQ8MpwzBKeJkvTNy4MKoV9r1EywwaReRCyPXk69GVkrSk899pUpSdAhFiftsgs",
  "key30": "3vXxGf8rUxqa8LvqJ4wtpUF9SVXdGT71NyYTij93q7vKwoYoz65r1AR2QELUfbLdSwRBmRiE6ebravWvUxvvGSN5",
  "key31": "53LB2QQ2xWVdm9a3o7qtHykxUBWHNNbSrUXFrX4Zrb3MFxAduRSKGabwxiRZVrGTxYaBKZY7QDbNg8V6wpXca8o",
  "key32": "4gp5gGW782GmCwtb2vK9knBPxZzFu2S46fDk2bdLM8HMhB46sE8tTHmEwmfvKaxVKmmgSqPR3AXh1fq1wTiDyu6p",
  "key33": "3poDDR5cVDXEv5Crn4dwjDU2TS2TLrFXBppSjZ9fUc87YUJXPAJY2B6ciZ1C3JmPwT9SKnVQR5EMwKEzNutTQwP3",
  "key34": "ZRkQGj5NNeH1rMcTvs1g9ogUvTdXons1jD7zVm5sB3BUMeqpvHo8pw1yPXzKDp5pqBy4NSR2NcxDshy2bstPmjD",
  "key35": "5V99BGwjackABrrqjzJHFLLpmVPYRg84p1oruBr1Jvi3Q1z9YNqWvkmApGoGkoJtQgyTqJGheNgjLTACEaaJM1XC",
  "key36": "5wTVUGZSyF6AJL3U15tmAEgRxSJYQZe7y1pEfHGZWTQU9yXjimAcsyo9Up8gUkfxc8TMJGBun5dteK1ogANuDgEK",
  "key37": "1W3JCGkjiMvbY4pJ43uXfsz8KjJCtsbYA72jv8245P7ghaeFrUHS2VmQ5SFKRg4bZK6NHNka2htfjVb2ZC9119g",
  "key38": "5L2yWDoGSo6xcBReZKu38bTmSr3ps2TaXP2Jm3SuuNNjuJE7zJkNtkUVRqkXpJhZ9tJHuAa1z6194uTL8jJgRRQe",
  "key39": "2P43is49pEVJix1nHEbVJnzpuTg3h392NqLA2Jd2ScbshVvQQ9Vn8pezzU43KeziRa1FWF1cWEuzw4JrRrvUg97j",
  "key40": "4mzaE3TurKxGgxfUDVVinhTDJ8FZnEcmPsP3A3Vxn31XzMhjGAAga8HgotfrR5nng3mbLPjZGWHo8Cd333LCKtmw",
  "key41": "37MWYc7JUrPykJ5cXV39gpQCdDWY2nG1DqEexB414zGrem9TTfYinCVCGEvnPm4ha2XP5NKXzk7oDPF9tRuMoT3U",
  "key42": "2RN9Xrid842qHpw2mQXTt6irRRChGGeYB9uUQtXHCVkLmEzQDyJqPf8QKxiHPSGeoNwB6oNrzrvcZJ47NPjxoGHf",
  "key43": "4VvP1wZZuMWgd7MoDfaTvaYKTijBrXimxTjr5NxSfS4NqVrK8EfXRfWGFSEq7YbYWZTYbihrV3MVbHYi3BYFKnGX",
  "key44": "2F7KnLBYJ4toNvHwQ7q82LQe6rLYh6uPZK3DinxNkSvAcQMpkipxrKcWbeD83H5XtkdptsvKdQ9TF6aysrkCryL7",
  "key45": "3Tz98zjtP1UyvgpJTFqEUvrm1zxcNGzVeeEkpG3gNRbAFw3P1qpGwfva59bcA6PgHiJc3f5e4q9ftPCobU1u6hAr",
  "key46": "4mpicDHWY2KJtVXHBE83nmki9uDmytz8LXB3Hs4qGp1o6MG8L4wP2NxuqW48DULC7JBVE7U2Z6G6k4JLNR3b14tm",
  "key47": "4hu37eDrMMJKDAUWYFcCYQCwfwbZEWsVfuk19Q2Xh2uSC8tq92tWZWKCWjqFHfkDRBTorF24FzM53J91LVPR9hQ7",
  "key48": "CcFCDokPytZvFiPhdqMK4PLbHJ1trpuwv8Ttq7wu5UU7KjfTHjVCkJBmLgnkxF6HYqt869HBHEVLj3GQxtp58Eg",
  "key49": "3bF3K33zaurfV5rTqWUyHE5H57ipyBXVdSaYY4pwCsfz6bi1BxUmtr66Y1ECQR1XrqKLEgEv3PyLzJpcH8u1h5U7"
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
