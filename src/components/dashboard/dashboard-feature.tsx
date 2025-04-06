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
    "5kgRuSeNpsigBL8fZ6VA2Qtb2hcHr3Qk4H3edR4FaRFkQ1jGgnGoYvhxKZ5E2Yi2mMbzbCW7xC5LVadBGUop8TNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yz31AQ2y6eN2ihShhCxBWcmNtBrz1ebFwTUab3WG234bLQT276DPNMLTQh4qRCpeHThscZmDtwMmNjRQ27sJu1S",
  "key1": "66EriQMVLbqi4kPV7fZ3D5GJGdb3N3Uf99NoBjXNyMVVX3TabWx8CGYb7YAgjeRsTiezWpFudndngudUmiXSzDGF",
  "key2": "gNHsavkPKo4WqYFjMNXDdWiyxu56js2obdgdwNbZc1bhg9CPzgWPHT3BGAykW6CFFJDsQVR2mcLj5jy8vhT2CVY",
  "key3": "4nKEb5XWXArgbn1KdXy3Qtvhc9UbPmDsyuRyccNHBt8bMsr8Ziq1A58KDVnBe9aB8KmbQsbnAHqEjR6Q5Vsu1beC",
  "key4": "4AW43fMZfEYeggkkzjcVNEHPZLyptsp66UQg8LzQeJoJaYfj92rFLx6UgW6R6rKA7SB6nWkrWMUhfZfwuFnWPCFW",
  "key5": "5GM99gt3NSDY2eVwNsPYTPYh6ihpgEYRYtNwFMJX7oxMRCm42Y3cQuNo3aYEfJM7YHp2Zis3jBWaaStNk6oScBD2",
  "key6": "24QMq5W2VnTmdpRePaAE5QqjP4YdEaV5V4BUqeZ3jWzsP4KgDMjTy1iFJPeRjxs2Rye31Yyk6UY4DUZsshqRwWzt",
  "key7": "5G1NMCeSKatyzUWiNZhNxJZC3vRyXTX33WVTF8hwkpe1fphRhwfwkMVUXjFz57zhbFiE97QvMyiwBF4LfgFrfeVB",
  "key8": "3WmJYvWSU1ebJ2qQ7kXedSPn55gDCn1zEzNTpfzn11a9mz9ncskUEPGQ1tXQYTo4ejghAGPxhZbY837tFhKUbyvX",
  "key9": "fkaEqqCfwhBjdSfDQJqMV1LLFgj669g9tqm1SKNA8TVxmQGCgnMGhz5WbwVtmRxKuv7tWfKXhp82qXngkcqtd1z",
  "key10": "4xEvKQm3WiKdBix2VooqUX7YWaRchfxwRwkvHYhMbz8fQz3ANJurrH2HhvvwDN2wjsCumSAGdkhMryXMJCJx4TYC",
  "key11": "3BQkQUEKWNtccRYq3zAwMzEdABKa5Pg55GwnjeHEryhJfb3f1JDHy3dQAKoLnV9BzQyxRV4TaauC1KTA3sQVC98X",
  "key12": "3i4yT82qYLXCVQFdowC5YtNutZ7QBBpLJWEuBUXHWKTR581nN86ATXC8gyWYokSZmne8sbwqEcGJ7rV7WSGd5K4i",
  "key13": "3pQFXpzh8uiYxCDJc6nQjRVQuXhqLMHXdkxnatdrXruVVUU1wEpoawR2nzUD43Y4MwQRgqC9VkvP5KccrmT5zfa5",
  "key14": "64u55BpJGaG8vj8DWvbMU6okGvdkPMBaXYVeiHRuor56QTY1NwHyhEizECGfqVRzVX4AZmb8Ncoh9ShTesRUVbu2",
  "key15": "65koXe4arHiBa6fxpLnbsxybqMCjp3pwDmo5MGNheZYTmvYWWtwnodRUmk9Rbk2YmpJJDFrk1UCenDL677p22Mr8",
  "key16": "Y5EJDo3dRuyS7TGa12Eu165JeQb4RpMCFvYyxCG7Du1bxE1RJr6hHYizBo3VFMyXHaaWD6gvec3seBwLuY65Seb",
  "key17": "4mgZg5jEiXJaPYc6ZmGzdiK2NZEuMVJazzkpcUuUtZs94NrmE7xHWF4HALYBaQQjWBmDi4k33Us1AurqbyfX3YeG",
  "key18": "4C3rw7TDJJKJbcMthmB57LBhCxFyAB4CYdko3xmpbfDCh2RQBF2HAnwYwZc7UJztn4HDU13LjkWadepByVWgPZmA",
  "key19": "KzuY2qT6jB3hQqL4akf7fcr9Hh6w6zYfaJ1fhJDrE7fcJYv98K5A2C15NTwfd1pFGGU2XL4PJKd34r3uvJqkud6",
  "key20": "3bJiZd4ykp7G3vCYAYzvquBCMhDGBZYP6dsBCgPJ2SvAJR3rW96cbWmKYPUFMTmntN79uPVeKvMf54ML9zt6mrDu",
  "key21": "49fJQiTbfaxiWwhPQT2nmX6EHYUbqDPCXp6JUSwhE4BujEW5VG48SiLxByJ9sJVnsKBRx8kWfDWFxmSXGsuqrfy9",
  "key22": "Hqp69a1p2W4i9PUkEwpWH2n4PPARMc7LVDZRybhwwFCboYSFsWLRBfaARPy64dBF8CnKfwGSfVgTX6bhqjypisP",
  "key23": "2TZq4bkjt2so5Fwe4161vegDQT8GozbCgHMYGxTWuf9caoJzChutrx7rnay2SZWkgZTWjVH9K5ikviCKYbQVxkUz",
  "key24": "5FXdcWokG1iMTuWEBC7ZZEqPDWYDxB7g22L9Kkh1xfqdAxCurW2DtenwChLffJJuvb6BStopbDrvC2AkawC27KPU",
  "key25": "2X8D5P7awHuYeW9CH4CcCS8f3gN1N4Gk3NJ1nkHSiY2N2cUrntSdUHGQus5yqQ1VEkb8RFFwUQMmDJEGKRcrPBWU",
  "key26": "4sfMopNgdZ4LqoEPTd62GJjpoN1YaTwCBuSeutfUe1wVJgZj5GKd35VyfuK7Fb1C4RGiWnHfRchrccJptUkUo5E9",
  "key27": "4HuSiFLoJpDf8T6buUsXp2qmYLHywmHpoJYzYKdpbjc91qpJ9QqffU1RbKC2xcdykTcdSiuCMswcGzt5jw6MXSkE",
  "key28": "2FmhATtkjWDp9YJ1w5tJPppqKNVjEroS6Pzmx4EtyqDmDndSELW3hBCKKga2mb6ww2HCg56KNtUFSG9ZG4RaoEvV",
  "key29": "4r4NfWLs1XUHfNt5Gix7BFCv54r5B1QUqhBjApyK4YzoBwomaJKRvFDKcBrHDxEunnQwuAUDaF8ySdXASCF5AaY3",
  "key30": "WXA881DVC2boYSbQhMYPF152pJfQZ971mm6vrJkwY1ppwYmCtEBHbsdsDDR16LRVtAZEYAAejKBHXfAC1TwGLEY",
  "key31": "A3LPdKV3mFQ4CvjygsWBjSopbdzZpGU29xMyi2VRrBoyyPxpx4eP8wNBrTYfYNwQXnyfVacurY9R1p6LkKWw82Y",
  "key32": "3SQvT7KSfyJkRV3hTyoNpQpYXVrDXPjvUo8vQYzxuVgeA658s41Tgy91nEkE6BmwSzoQaGc9g3DA4TjGBvMwMpGS",
  "key33": "UJy3gXX2boMs1KWUmjHj1i8Yb518ujSVbBSfV5SuYVh3ZEMw5bQT1MGaxpZa3dgDCCXsSpy3wUCfEurcBbzZ365",
  "key34": "2f3ADDhxGiDfvAz4rUZ86US8sGQBKD4fz8GJME8BkpojF2gLqJqkQh6tCZjvS6CHCLYgdt8F7fuuVv7o7etqJbFw",
  "key35": "2fvxcrNATgS11Q74meUgTdcVvuhkR51MP88RLXcfhNusXXVnEZkZhK2xWPRxn9JAFiJjiKSEeErrkM2CwAqaiHxa",
  "key36": "5e7UAsK1DzUqKNYMgyE5EaxMrY5zsY64UTMT99SxHtmus5csgvvVayjxtTJJWBNkdPy2Y1gpvmmd2fDUXFczSh7x",
  "key37": "3ryDzte38Y33T3CFp2Qv8MTpCzE2s3w441McgXvSuY7Lt6q9rL5ieaTPm7CAS8SzZrGCPXz7NkiKs2UyJU9UG1WV",
  "key38": "3fWXeAHfm7RqKPpSGrEokYuw9iwUnVpcqnsDpY8nzkw7YhaBg63uQh9daXvu1zjLUZsSAGFhqzyhQUhhQMhtd27",
  "key39": "gai2xycTEpmR9q7MeTx1p3bUav5c5obNTXpdhD9pE19T6fV5Pmvhj5M3iuHYYNGn14J9jCqcXuhzqbuawZz2MV3",
  "key40": "2u6ND5KpesfSNoAZdL2BrF2etf2CtgLYQUqjAHCtdzun1CWoyCsqDnQrpUnvjd1zTKAYiPq7cNdhNbzo1vMp3QoT",
  "key41": "2NUT3h5UmmAameS34WepP3bDFXnxu4MY5ywBzJWjURjuEt9nY4KoapVrYYNSPEU9UXaToFmSBe2oJ1QRJjipJTas",
  "key42": "X2ZDeoWL9dN14XAvhnGo3FuzRFww6Ccbcy7gF8ZTSxAcj6W4QfGyQc2828FV3i9uSrfVdUjcmVZJsubDQgUy8Ga",
  "key43": "5SAcBsieXanhT1bHTvJQ84MB6GP8RdLNpGH3irQX9CPFPbyTZATuqdYoBTs9S2Hbx4Jc4cb8dSAjEQp7EjSgpnfS",
  "key44": "3vawZiNPMA1QFQqVq1diJWnLDf54tjVsCiVhMHdby3GazkCytfmhEvarocfmpnFnr9YFUH5amTCnST1zt5GMydZ2",
  "key45": "3wdkMdpGh46UbQ7cGp5iv2FVqWrbxdu2JGTDybEEEAmsNarRYLjJeHXhUXh6PhLPadcjE4S1ocTD2VGLFHiyi6uq"
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
