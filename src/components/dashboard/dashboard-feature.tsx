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
    "5RNDQM91EWeBpXaLxkFuYogDHpGG2Bu5VwhTKb3Row6MojWPssGDMvDm1FpWYjvxHhsX2Eggx2FZrNyqyJCsaaU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45vkpUJJKnWcBLa2o59yaYSLSpA62dG3DmEptvWCN2GXRAcfVzc39cTmRpGmSmD2rpWGZ5HwhjMRw5U7o5HxVSXc",
  "key1": "Vyn2GNjEQQKqmiBS15FjSiNWcwB6x2kADMQ3aQ6PTCN6Jf4DSzb4JSRbjvZgvsCbUHnwTSre26akbVaKWWHtNpi",
  "key2": "3i6BeziSkgnN2Syn2ytKiMsGMFV5KxwQiDB5VQczJPTM2L8rWCsbQtZLu5HFPS9a5cnN1RmhLT4sa7HqAJHm1gm2",
  "key3": "4VFm76ZrWMny6eknsajbhTYug9PK31LdVVPZY9WQ7NfsCoP4p4bM5UTPYqSgdFnbbaUJbuP7bb1EKrFZtEaKVJhY",
  "key4": "fEKH4R1wS6HzJ4eJEmkiZ3LPbDRdY5UauPV3qTCgnQ9FGpTTbwx1qmtBGmiURH6x9tZExh1pGiaS7ZAi4dweQ42",
  "key5": "YUc97onJvnf2oMzx7qwypSvRbtezPGwRJX8g9TPwzEwBiDnKWnxfg9Jp85QuB9kekP7CAL5sJFVgxGQMjzTXaBX",
  "key6": "34KMY1PZ1Y9YobNuFNPWqg5ALFmBQ6Zo6fSFKGKUDH7Vi6qAg5LQ7brFfwPmAwtjwN31xkbgzGtm96CAfz59fZhB",
  "key7": "5c14W4U29HJMnYEMDBS1XhH5Na7MABDjceeSoezpFH2xZEbLMgvkM8JnusvdQzFAViCbT6vxWyKhX95XM4WWH21U",
  "key8": "bpqtYfx1aant9bHjearc96o6Y5ALFLiyjBPaMgEDDiqkMsKfVGDQ6aXsk1qJeTUww4vggsajZe21cKBz3AaAzFX",
  "key9": "2SK2b1MHJXMTeDATEBcAVzawFbZ5WA5Ff6Jmo8Assxz83KhG6pwLs6xbutNDaiWY5Lh1uTdejyMHJzBe1fuuQbxs",
  "key10": "HZ2F6pJPk2SxKiGh7gKmdVgznggw3d3NdSV7Ux2SE3wpLH5uqiurUGkogtFsDVeFUcnQUAkzHZVS4k1FCCY9jAM",
  "key11": "5v7Cqyn1RcVspnJ31VRbqasLQKumkHrD5ezR7MR1CuzmsziVnh1HfcWmiLHhTXLheJdeyZ8zcoeTHoyXvXdFjgBw",
  "key12": "5b2VKoPaNUixsxRZDQbEb5FYJ2DQxRzScd9oEMMNrzsLcPw5V54HgLTFvXhMcS63aS2GNfPRoEME1dTH1mnBTU9z",
  "key13": "2w4qcossXz68xikVG2HLgdMaSvgzFsT1C6MTUrU7fKuJ4TQHx4NQxjEKFE9zfRxFfoEDwjFM8pw991dEDBF4mB4D",
  "key14": "4uauRM5ghfXroBLXTMnLe6cHPzaJkivLaH16xFS7HcAKsvoJXco2e9Qs5LPcEx66FPUmP1XUkyTxyHbej4h29zhi",
  "key15": "5mLYXKFsid8TNGx6KVdiSjb5mph3STQJBJiQfuTsbuJMdwkazfoq885oUxgtqqDWi55qzrxbHrtT34nm7hdDQAmn",
  "key16": "2NjGTWitWb5uj7shzcxWNVoNyV4imHcJvb3SssUgMyjZnwZWoPdx7bTVRbcLveCPGkNds75pvjQSJ8Wj1qCyE6mY",
  "key17": "3QuGq53Y9jXJHojUXCBzHABfXZvXR4TJemiLvRqszS3mCGcrSaQkWga7LLSXvMyZiowAKu3kWBuSX24CsBPuAFRc",
  "key18": "2Ff6MQnuqNJ3uG5JBDcXWsx1PTKyxESNeJ7KhwStLm7humNLmosm97NbUBfbUp2DGW6N8kaaPfGLyML6UUZQEZNf",
  "key19": "3JTX1mpDpygWCU9qMPaGm8JDfDquya4NGdvGnxUaBee1kKpHDPu88KbniRvH6ZJpqqrf9Dj5MQDeJVHWX3VXaV6D",
  "key20": "2VqQQ9gsCVpiugXEH5aqs6N78pxGMcb1MvhK1kTaHysYc7kLHGq9bVxiWfy3LeLkiSAnnv1oHfv6C1jDTdGA9gSe",
  "key21": "2xt8SPw2TLi3NJF78kMa9azdQceybT17SzkP641d2BeeTh1ap5fEHsBjg1j6XgpYny2buhnEMnVkayG8j53CgVwr",
  "key22": "3xkzQrdABioCcsvG6z4dReTtRBMAJYu3pnst9Xqnh7MnQg8pubHUyJY2Lv2bEutsYDadmwFxhQ2BzQZsuLghBBb7",
  "key23": "4nYtDMbCQbpk7YAMXu5NVNN5x9EkKkg2kz1uWqVHjqFg21NjeQRUrSBHmwD8mMsZFHPMYmrooZeYiyaGwdSY9JCY",
  "key24": "2hQ8DwVRL2nNY7whxxM7v9Jwh7HcYGU452J6adXEhhAv9EreFy8MSf5qcrAotkhcjohWwZz194DyU3hcztXKuxTA",
  "key25": "2D7obdxRbM6Ntkwv2DMB8fMY2gGuyRtAsJdyma5e1BXDbb8DhFC5GppaGPRda41YREKSDNKG3SgjDD7M4obGm5Dd",
  "key26": "yd4E1cJonsHBkLvh4Eo1PpZWKm32HcWXYKjXz1PkyErwk3w94j88Lyro2Q74e6nJSMKwtYC6wVh9tKNte7UKq61",
  "key27": "2PmuEao57TWEAjmeym8dwU2bKyhPYe1LPe8EctJK8VBEDgdDvb35sDUdS6Cy3Y9ReJF1mYLpU8LEUZJBLuvCh7n6",
  "key28": "5ePFaC57B6JEZQbnwepJ7hUKGJSKbmEyMLh95KsNjJPUgTFGfiAuUY7scYJu9or4u6uSGboCqKNgKUZY9uhcbkm7",
  "key29": "2Gkgnu8AQEfbJCDdSHCrTFRvfGKtTrH5gaf573fFMRwQakQHgo3q1dicswScM65eP1Uxt3vdv6MnFY7QmrjxnyGh",
  "key30": "5gknJPBssmWdkKjfXhz7MfUZZkpf88vCVJBCnJsR5CWwJzTjyE2wSTCcryt6pEDUn6MQ2FgzKQ3cpZDCaBfgkqkk",
  "key31": "47DcBYqnpkejjeKcZ15N2jRP25s3viq9nmV2MHyJDMTKM3FwYHuddzVPqVgve4YkpATVP8YEzjdnvJrUe6Rtprqa",
  "key32": "5nA4cRR9rhpH9WUwuqGBut5xJ91fp4mWnKohEsg818nMELg7UZmZ8L8rGBuNPLLvJACjGvJD5UY5qNdRCUEAwc1P",
  "key33": "5HR8QDmvfvxtE7TSCsmpCr4vzbJLH6iQnvrjWJu2riAw3YK1nVSHox2DTbu4rf2xqomLBfDLrhxCNtHcy8Q1TGj"
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
