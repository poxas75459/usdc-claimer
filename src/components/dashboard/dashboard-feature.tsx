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
    "3DJKg2uPMsgpoAULj6x9YHpcuaY2hCbKLbL4YeEUn6Tu9ydtra1iHZ4tpaQKRBicq37ZrT5vETrKQj2uwWuip8LU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YCo7Wy1sERNTqZbG7Wp8tAiYmF5C1Q8tfGqKatFbzgXQKDPxDHjdr1CK3x33dHjAt6VhNHFuDVa68xjrtyYgkvu",
  "key1": "wnUpMhs1YaN2RNmAocii8pqrG24gLNwCtHVL3zjM7z7yczjMxo39uZjYzmKxh1QYBQSrGBy833veosYcBgKF1Ue",
  "key2": "4KXkA9ubLRW7gTqhJNjCsicJoCUiEHYByrWbG8U74n3pMRVfZDdqAsvZZrGZiv69exvBYNwjjfdW5qon5swzcJBz",
  "key3": "4Bv59QmsFh4PG48LGtABkqF9Cn8wY2JeUAzcEsfeWiC8w7hcFFEFvbg498vPY8Wbmq6hbk46iEQigJWNkjpGmATZ",
  "key4": "Z6ARWnpoCsyh4ywmfynpeCG1GDzV96jifemLedgx5VNsEPPXoMro9UWd1udFtxV8wjHjHHuWgqH8LDn2AQNTTmj",
  "key5": "3qzDrYYdE9CqpbnPYopCpARXtGAsazsoaM8k1epkP5Aey7x63NnzZE4vp26gEFgsJwzszvEZQZfszoBp53hxmJg4",
  "key6": "31DjS8v88mrwjEMHYHkHuxm6RLv3RLFYCyVcrEQBbnQJ2DPEGaUJ2NGvQ4Zpe8wQKXq3YGE2QNR36zfQt9tvdsmW",
  "key7": "4zt4trVCTaH7A7Ajg4sfBNqtUtRjGMa7AfdTzh6Fj1ScFKXCJq6LckDoFuoJ1fuWkZnGMoADNrJATJR5j3Ci1hgu",
  "key8": "2FDpSyTAMu3JtZjm7zEkubSjXTQjGppMbEukAb8nnd2XuVStdgmG5gpaTQAKjxKtaaUcYVvEjC8mswdeYxqTSAAH",
  "key9": "2aZr3yTKxbfsLqPSqjDCbTG6LGQZUUhESxFLTvYXcU42QCmk63hxVDaFd2t64uS1WcoHw9CaUPgeseXQZmFAoUoY",
  "key10": "444NLnGAfACuPgQwLmPPu5Wm6rY4DmGK2u14jeztq8iqFJcZk3DdZ98WdUZUiNVxCGPWoMPTdBDUaJQTJyLz51L4",
  "key11": "5kdXczqv3QEhLm5CdgEsmN1pT97x9ZKyXUQytYCUAqZQ4nabwMTHhMvH9ZNNDYKzgshHPruHA2GKAtHr1xxiTC4G",
  "key12": "2dSUQmVLXXA9rNFVzdAZcdqKSiurPcagdDqbXkHzYadZrKXuKZVaiMwdR8ccaDcaVb1pCu3c1sxeTbYd3Z117HKx",
  "key13": "2tnFER8myCyjVEadCTrt6P299JEXJDxzvVFCfueNR8nn2s9xJAA2RfQN9eTpB7KErZjkhcJq9f8bRS1yNZWkWMuk",
  "key14": "4RCC1ufj1UbisxWyKHWcJNdupvokpH1QzwHRJDb8oTdsQVe3cNNqcAjLogg1AjgUyoQXyYtHpjSdgrrnnF2jscBv",
  "key15": "4FCrZYtJDNU37UTgNkExSXPpQeS5eeHKdsbpWu3ur7BMCTgecjxjTF4Nu21QfVc2i6LtuGhGkDYqbwd8BDHZeGah",
  "key16": "qzA2KckPrBEFBJph6MPSe3bM3usSgePpKdBm4e13qjE7J9LxE793nQgxbCqcNcQ2xef21NP4SJ9eRni84s2D5os",
  "key17": "5wQCHENs2bDq6gA1P21rnQcJQL5RhECRbQqY7YY88PYbsLeMuVeZxBqnZW4iP695pB156VBhMm9YtvsDGhQvM2oX",
  "key18": "5wFfXxuB3Aq84hyrDYUxiJHMwg7bm216WbBaePJuegiYX46YiH59yYnwReVsjjr1woyaQ97j8rP7i1ckRSR7WNW5",
  "key19": "5LSZGqgWQSqN1qtUKauqRsh6vfQRK5zpt3omezBof2EKKovqHaaX6zR1kySbEudeA2yKytTg9dSGwRehguz1stdP",
  "key20": "3GwAu62v7JXRf7VzdCVkcanamxmDFMYcPzFmkBu9ttQn9zz6NweEGGyfsBj9bWDkEaQ555u94cbWZ1jBgYJbvzyf",
  "key21": "51tNqeRzrv6SwcnVPguv5bGUAuefmzmVSv67Gd7kUGoSd59vptNiwcn1T4WFgW9xAyen4j3nsafQnMABTcSfMeGA",
  "key22": "3bCoJb3DTm4nMyiShrhHBLZ3AgKvaA6TCdMxpqaZucuuGYb4tzcxAQneRoTejZRvjek6SewjgqXHmVELrpWMYfN3",
  "key23": "4DitQSpEJYCixUgMwGufKTTBgS9tjwgzrUx31HVyefvv9wvkPGLGuFb8MWaEmQbuopDUrS5LBL3u1Devkmhck2oW",
  "key24": "4EtwezVR1Ygv7RuLnfhC1HeEfALxznyx65P3sGN334nCEfJbUgcd7cqiFWk92oBXrRTgz6iezHZeuSiBaEJE9A8s",
  "key25": "2QCuvxhnnSpyuz16zhGkobmQ5FMuJ6caL2a8kGFDCY78xx2AXyLMjmD9fKiY5utGvG7CcvHFH8DGzfVSMh5dDE3U",
  "key26": "4JU2QJmAuczBm2e6EJjQyUz8NdHr4xZPUDg8dTuF88NYmzMGEuDVHJ4KNwJYhhD1KPwTkmrZt2RfgC5v5umyzn6r",
  "key27": "2goS7XJH29fwTDUJ5qH3LcPRH9cyvkytVXbzVSdD3KkCatvEXh78MyLhmrxe6zFcZEP5NiJ8vJTvgypEPZ6foUjW",
  "key28": "64SxcM3Lh11fazR2tLu3VLfrxRnbnBrQ8H3dvfDdwtwcvaKT7anbLQ458ruqdyvkimAnZr1z3engvqpeZUcokAgK",
  "key29": "sS2V7pvziwgp5soPQRTjErhjwcQnGfLaAZag6qnyZi7b4UvCGq2fsg12YnbFjXFdUGTfS7NzuAF5v1dbo9bTQAc",
  "key30": "3GsrDoG4jjRtAjiAJKBLH58E8ZkQ5JZhCMAXjX9dsmGSp34VAAsCRkY3HNmf7kyWKPZ7aSyusjUxVVXTV1pp6Bcc",
  "key31": "3oA2xpYoxZKczP5ER6U5hmi3anC6zpbUWnGpukdBQfpT1RtxWzi4okfQcyCvGHjBqJuTwrwyCoefRQRvhekBspVL",
  "key32": "4QzBJTvbLzU7YVqTcSj3wqS5eo9DaZkRykmgYKcUiKq7H6Jzfge5TngduhHHN41KwgdDYSjzpM7PzxxXY3nqe7bb",
  "key33": "CuiBMXYMu2BCRNJ8r5Rq5bvMmydBsp98ptMJqoQ1qv7WaCMZ6Hu8EUwBHAxVVyZWkeUCK6aucJrX3ehy6p5y514",
  "key34": "2ioVopKivpmbhdFq1FQNhWENb7La1nxbH5C9LktqTFAejztkYxNES2LB525yt9rLb83CR4QRRUGn5UPG9KPgs9v4",
  "key35": "ivtv36jBkMEBwWgSu8PRmUXieC2bFXyNxgL7d2faJe2RqbyvEWdqQnBvbkVqdSsubycmfep6UvttBeGGpFmMyEv",
  "key36": "ZVpn62eCYxFtBSrw9RV1NpLBDCNCNEWLuxUb7WGNQaHdzubCf3c6iVcMNoV2ob7AkHgF3DrNVJiouVGpkEgNTc4",
  "key37": "4GFybvDYb7XwfWNSMRd2vc4KaqmP7NaqgJzBDSAg3kdTNqAQ2dDdBbmGE4fJsW2eopcR6CLX71WgyzDVWoiJw3Zy",
  "key38": "63DbxZgyvojb8NWjepYj4EkxLUQb7p7Bnx62sjX9Pbnc9DwWSwVz6wm4xTuNR8GjGsbge4mMyaNtRkCTjdC7dpMt",
  "key39": "4XbWHZQxP1YgAAVnMPuF2VwmdPC47US2RfXJR2mnfxfxBZ4QzXt5yDz5TgLJNACUmX1fhPKzD2U1r16DQzxyG7mk",
  "key40": "5jgcMdXBjUnNqDD75JgX3rmuUoK4Pjzkw5Hg1DQn5oRiACk3dqkaBqrP7Seh4s4rAwFa1HjQ1mfnbaPjf9rz4GGm",
  "key41": "UR6p3tzuaJKJy491Lcrq9jE88GFP8QkzyiVyNSbuGpMfBbRyoJUwQm44L3TQkPUzvNe9vtSYsUTT2qTw2S12psZ",
  "key42": "Rx2yb4e7bBdrYRN9gWqczdahamvAE2qCU8F9JbTh9zCGtQ6grdHi19FiqcGvBrWpgmesca2U4QCa42fERKdxncM",
  "key43": "36H4kGNmr6fvaVoxCnnid4kH3pDehvAPnZWzatGhM5sWjmSRdM9gSJtAACmzAVi45HyVV8axwxEtdwhmcD4MeLpS",
  "key44": "MkKd23P7evH9es7hxhQUWAHFFBeMim4DZdR47HCxnQoWUyLRGjDda8JuCd6iXNks4VPB6BaL2Tbb8eZB9EHwrAA",
  "key45": "64Erp1P14GHefxCRgQC3v1eRatKf9SnU9boTYbUEHjEJ5jH3a9XwR6q4gifDqEZPRhjowYakw6dKGQeBfmCek1D3",
  "key46": "3azCs5TKncAYkx1f4o9VFMfTDi3jeQr6bFaD9ZiViTot53Q1o2T7yx78GgDona2GX9FTZkNmooivDsy7FCatzCWf",
  "key47": "e7hdvKr8JMFbueV4CNhPxLTbRgjArSFm78cArU2NbJYvq9oqXtMLJCNErQjdpSWM2SsPFQJ7p9EBeDTwCac8kC3",
  "key48": "5Kfw2C1Qyk3UuNXtuyoNygQgjVXSWqHkVTR3Qwm6kwktpys6Rrb9McvbnPWs96RuNkSzpMoZEQ4PpRmXzWJ3oTgG",
  "key49": "3pKFgWftxJJ2S2doSN1Gn3CLYFbiTFkKCwN4r43XEoEXV2s46SpDDW9z2Qqy49c1jHPzL7J7ssVwFe4wdAAJwLPz"
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
