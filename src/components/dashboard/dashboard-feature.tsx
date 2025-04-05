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
    "2ycRMNJwFnjGsioqQRMCpcLxt6FYptiGEA9uFtPpnmgtc9858t8Bp5bW27Y6QHUe7f9SVSt9pYeGBB9DrQukVCMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TZJPajvmtu1M8tQoUFTJLo1DYqSWYrs7cDXDWd1Q52RgmBwMhBYMcvRaMMbHHA3HrMorsTMw9WcECWDFWMrK2VV",
  "key1": "3dR6nrw9ShJd77PYYBJCNSt2Gb9z53wbebLT2wRMcbRYfvcFqGtjxWNaMqN6VmVcSMGWHDKs2xJ7DFe5oXNAnFLV",
  "key2": "2NueaYPd2D4LmMZ9NZhH6f2329JbxtYm4HpiVdJz37vnMD4gUC7P4oiTbjYd6ixCvGdPxdT656V1gPrTjSHGPEVb",
  "key3": "3NeWreCs6yj79LKrXpeJoQshj1C8h7amJ6yLyNhMNPN4kgLro3w4Qt2H2aURp9e8oVPVYWtCQc41vBFxo1V6xQED",
  "key4": "3n8hdGhvWxjsmLDNF19p4QjabUcCfa9pLaJHHkmzCvfkbkGiCCqBkDH9kgsv2BHAogcm5n2UpraK7xWZ64xtMD6T",
  "key5": "2gZ5161M9dAQah6LgicpYw4tmrfo8zNNmEvimGk7ssFfn6B87osPdtCsiUPc9i3fQhWy5kAZUiaS72vWRfy59eR5",
  "key6": "3psdagadSjmQQRbvKzKFuwQdh43mWCepQUdB31XvfqW4vkeBBBRJCW9cWK9fCV31qqM1WTGtmWTj1Xfn7oTsLLga",
  "key7": "42qV2rufycbTb1PBVtUpS3fxuqvYd37E3K7ErT1vQWPEUdaEzyaEsACN3rf61HTSDDVRaAdebn4fYyPTD2eVY2Tb",
  "key8": "3nG5666M6JxmMPiBMwdygEmnbKLCKXquLeX8qCKS8i4WZ5Y792FsvErfPVPXGofRsjccMEiJ93rPFRhmrdDpwsjA",
  "key9": "3kQG2JboCksG3gCfDxDht1mQiMCCfvrTrfhJ5n3ny96ACfnqQVxDuhpojFNi3zLYrJnoeuixNx2JtZonckVH2H9k",
  "key10": "5N1ufB8tXMz4ZcLyjB24AQaZiWHW3masggqvLnVC6hp3npiDCP5p45JEww5UZbPynTbMr1WQLgBhCNNxeXbjGLWa",
  "key11": "2XRN55d6SpgYdoSCjnh7uuV36EoNkZyi9s37GcszBKaxHyQ9WiHCVvoEYRx6k6rFq8MEtt6eLwYezrkLwDcj9opp",
  "key12": "ES9ebZHpakGWWjDzz8azkgZkm3jWkiHqKSMQVeiZQdNTVfYDGTNiwSHV4dF3mAD4WqJqjrQhZK5xhGobSsutLHY",
  "key13": "d8gCFm7C6SYSxMmb76M4vKAgMDE4D9VRe49pUg6yGYCzKfnXEESwBPisKk8B5Dax1v6om55urFnc4GLsyQvNAkM",
  "key14": "TrNaCkMizWSehTVgAsvVsNmDAGP3Cc49pSMhZQkEzXxUKu6oNox39xzCwpq3GvDZCoTANW4Z7CD1wnS3YkJvoDZ",
  "key15": "29mhYKDfWoyNxk1c6E3xYdeMoSe31NnwTQxaeXMyxpcNZRV3P9EUNQp7Fbo1VU6zWYw9DPghj3jq6QoaEgAiGRKE",
  "key16": "5bjFLFhmJcNjo2rwAYAqwnQQnTKVWNPUKyfdMyGF31JnDmszmAtz85WgPmFD89rG84e4SrN39tmaEa3nsZtWFRLs",
  "key17": "BcaGKjRPcsRucjikxX1iEdhhBCYC3X4hqa2ULez3cbBVpoiJoy3ngH9rdajrKduHk64DwYxMGruF3KCQeZnnNFC",
  "key18": "37hbFpXKNQGM1xkGBtAugBDmf7e8NXp1P4FHDDft8u7WfnQ2kk67rHCvQdV1C6gutLTa8EXFtfBKxpqPeiM1cqAy",
  "key19": "4rDnit9NKSqpfgK1ovqUjSSAESJp4C3heFSxSAoVnMZUbYfPRJPF34DAPC6jMYS8nJyoYw6WANV5aTQnCw2mAH84",
  "key20": "5yzzETFaPqSp6ZB5ng2U1FatiMpnpT4zmTVr2n1b6ywNg3wLtyMTwExLNqmZQsRfqHDF2bYSKPxjQ4BHpvjoaEeM",
  "key21": "R73CkTNoVF5xAxiMLp2k9BrGVRiixfpvoD6wsuCYd9BzrSo7JGBBy5usHcqBp7TxSzhffGk43CnFCznF7X9uxHR",
  "key22": "2wwxzz8BB57WqLpsjZkPxP5YHNNKjoGKQhrjS6fRm1Dmpg9rJX3TVnpoyfz3mxjZ6UKkKNKuhghLHwUVyE6h1GRG",
  "key23": "6mqhGX36V35Goqmnmis6BAtrSm9iboWAXBqzZuG76FJCZaoNcgpSA2hn9DojNRL4RZNqUNAMwcSkRaBBh3aFZuL",
  "key24": "4Qca3De2isjYdemqz5zQFqmuL52xAPjHLEUUEhTMDNrGx4F27uMG3pJkavjUixrwWCsiBUGLJkAPhhJwPZySZLpL",
  "key25": "3JFHpRMghYQjP5DZJaWke64jDuBFNCbEpavcxULxtq4hHgePPZCMPhHtBeCAzLD5mepDAY63BmMFMxZuAX66cwg2",
  "key26": "5GgzfwnEJsMQzAahEdg1d5LqCz8pm4xXhxufiNBiwU6QvBtaeJFq8BvVqZ5a1QeSNtx7j2wPmixVpHCZS9wX6jt2",
  "key27": "U78y2rVfPo54wKXpxHfYZZGJ6HYwn48AYB6PcCiv7YLztX6GafNDT28Q7cipHL6d7nV2udndHYWUTpFoNGuy7Xe",
  "key28": "3wG1QmeTrVThDfFo6VQg74wm3vNMm6P7erTagmqodKntZb3EcrmVmxR3y2BizkpNpCBf4F5Fwyugyi91u982MFMT",
  "key29": "2QzVwGxDvqGdaPaWkWiC9Kyda2J613TEJVu7GbvUA8n3K6F18xcCzd9i7JYjKuDMRbZrV6MmjPVsXP9GrPnS6Ezx",
  "key30": "35jR1C3TbiTUnv4gK2s5wUWtv1aR5YZzVSxixvuXzgkVookbv8h4hAy6YDwgdV9fWkKuRKSUdwNdBZpr1T1bWmPi",
  "key31": "4CpWPYXYmeALAuLUvk5mKMwdkEdNAHoy5HM98QMyZmL4m6Wu42ffwkeq63AeKeABEvzkkNEbruJb81hdhJQLonEz",
  "key32": "5VdXWPiSTZEKHnvNhtiLmyqnERR9rSXFHPU2gUCXAPgvGd7h3YScZYVLU39RujDVL5ZMcv9316dz2Mh4UiEfau2K",
  "key33": "644gG1WLrytojvKgSfKfPS1mrfDNzaMp6LSmb97QTQ5VuGWxcWqRiassk4eoQFUwDE1KQ2stCuh1DDsSJova8L4o",
  "key34": "4Se2BB5D5qTsQgLuAkCiDrVn637Vg3qrpjyRxY15DumV5GvWAmknWAA1grpoDG8jnrQ8PeKzTp9u8CeXdXSdLTkT",
  "key35": "2cMocgg3g1XouAaXoQHGHamD8H6iqcW1TsU3BAMKrav9hSNj7qzL53ZywtWvWvTki9VCTjpfuEpphV4ri3qhSZCC",
  "key36": "5j9fHgKdhRg2B4jiEiCoFjajTyuuyB7gJSFJTC9dbmMqEtWGPMqryQufX8qyt3zp6pjPNXHHg4NtnY9NAL1DWnGq",
  "key37": "26ztEv5bQESM8JFuWhKSKTzVbmmQuhHF3uxQiekCYF1bGQJdHN2S2ajPY3C6FJGQDq8Dni21CZzuV9DHLSvT5aak",
  "key38": "4pR4i9W4xwAZqxSLtAn3AKZ8xdoR6C5PM3w8P1RnzXpT9CBChAn4bgqEZLY4N3qzSRmijoRBZqsAHNrsVa7zd2AS",
  "key39": "27nxd3NRsL2S1rDhdpRNSQK67c8kpbspUtD3bzkujHc24C2ThsKyPm4WGwwemw38YFdcc5QukGaNL78fRi4JG4ug",
  "key40": "26MD7q7gbi6zRHSAySKxJJ3yXyGCDEyZVSt6xWPuX5rkJVxuNJLq5p69CsN4CqLQ94HyKAsB6YcHSwq3B552ovzz",
  "key41": "4C763wKvWfM8MTrEYdAa7fzrdaqTG7PsD76zXiVWgV8ZVMVm91svsMQBFLZX5xHYqCZsmY7zqoYL2czbhdPTFH75",
  "key42": "4QwnAabKK1fd9UNc7ifN4WM16uK1f69gwVJiFsbcsbW3mPfXm4D72XMLMu47Cz5R766TNFZvxqq3k8PJ1ZuoZraH",
  "key43": "7c3Vdityzoq3sh4uwaEw4j2MbGBDqXS3Fg7tqEq5BhyPYVGurkrUdg27gG3ZUcWL3phQ41hzebPvvomHh3i9nm1",
  "key44": "2mYRLnvErXdgX4BH7cwoi7M6XSEYhJRpM7FRqj56vWmDWtjjCYqmpLdpiB1oa1Bt24BTAamMMhJ6Q3Mvy9Q5Paad",
  "key45": "peQZmQKLosjmJrxk2unZGgFbis42BTeNNyjMA9twTR2XcshvYKpbCH6jporYjUdYJNFyebkUi21YQBnhZZeeq2B",
  "key46": "EDryZxzbWfkZGMFfKZgVsaxUbZx6gEkKU8mSxrZLSAR6H13k6DpbdQTAdFV6btTZzHVAsQLJgb6tDLmfqpz9wZM",
  "key47": "4Ro7S1uhu686tzeXYBgsNczSit1GYaCBeQCuKhN9REzqdBV7PY52tRJ9XdZrHR211hggxtKqac25FSopPrzY7TTF",
  "key48": "Q8vZmBRbbKM98NkQ3nZkCvRXWZSewWHcojDTSHgioFYTZW1b5krB95NDGXQLNWkePmn3jPYmoWuXvtYwdzqE1Jz",
  "key49": "32LNprGf5krNprbtWDr1MjYudeAxKKgjbgzZRj7QUznnRiobe4inWxpYVP5mEn7EbdwHf2nAKnSNLkSwxyNskZ5N"
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
