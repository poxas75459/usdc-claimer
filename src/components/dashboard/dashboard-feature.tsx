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
    "5DFGtNdgxSKr3BckkSscdpKko9CjT6TPfCWTLNtjtUXCSm3iDBwBTSJ1BPSNViwawPo2bNvd8DLNVCbDLsmASxuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ucwkxsUAMDz37kFjULu2bWw7fQuuBqqV1M6pVKuAuRFeNAqiduanC7cEvUH8g4Pf57FNauGGAFvYVE7qcAWQPCs",
  "key1": "2Vd7JDgNTyjimgMGTnWw7BVKWf19U61jV9MMkP6mXoqNB5CtKuNmdPEdVoawMKkqDchwMV2pTMGQCyUCzBHKxtU",
  "key2": "3J8jUna1YbFxkRdLpik4DXSPSE4E8Vy6kYNCYLi2eE9CWfH5k2ZyRjh43f5vvmYTQDgC8dMHe5HmypC7LP1s7stv",
  "key3": "5DqN6SLaGoGt52zJw9oGzG7NLD78rDhsKS2g8TuYZLcRpuXac8JXAP9pFUP6fw2DQHP2FMhjFC94hb9QwCSLou3M",
  "key4": "2toce4rM8SC5iYLAVHvRTydiZjyWhhGteTQb7YQDDT9foeHHuSDFEaFwfG9j5Tph2eg8TMw8xbLc9SD4KZScksoj",
  "key5": "3JtAycKMjiJf7m3Vhefjx2KFres7VLPv8FCsHgy9FWRAAkn4rgRFHRaPHK9ThCGND8o1rW9vUbZzuixYLrrFUMjR",
  "key6": "3KDwcJvpe6mVeNyuHjrdrRj3aECty1NYZziTEi3BqRERRi5HGRrSR1YARWSkaQoW5cy6ri3MQnmWA4yEn7CJyPbS",
  "key7": "45AqghA1JqxNUNRQigKvRp56wdErU9Sphm9qBuHo3VtvGe4jcGtPfNcD3ucLpoFWtcuoqcXPgX9ZdUmBZWLd7Dxb",
  "key8": "35KkdUBLsnwuKfacSscjdUgwX8aWSNKux7sYKqD9ZxZeeT6NQmyLCPSp6exbKMy3515vqfybhxsY1djdqqQ9UbP",
  "key9": "9dL1nwJAj2fUd5X1sYo2CFnDj1TneSxhaKFUAY7e87c3TLcb7mjxeQTyUMw8GsenpxtfmJqMWUzQBqPox96Y12J",
  "key10": "2bNCNM1xHBsnfYai4vT88vKetHTzs7iWgdFpRRibNzQmCh2EoH8HP1zX79DgAnq5ymNhyaijEb2nV9ixbgC9rbTa",
  "key11": "4c9URJYEWM8aSjuaT6h7n66VPzY8SJvz99xgmpfCmzeQRR4pGdAkbRsRDWTYCJ53KmcHdWsZonQ4QkSTP7DNm4u2",
  "key12": "5qhj1Bp3CRL8hh6fsMbQDWZ7KGcZgCz3hgExYmBZQvviuehJ7FxWPA33u9RnwfStBENkscFWUCDprCMS6FzygVqB",
  "key13": "5u2KagF6YVrhLfkjXSoSWjuNdSgScSzzcid7GHq5xgcc3yYmoT7i8qLdTcRF1pBWaZfCnKqY1aWWsbZavwoMYXfW",
  "key14": "HK9zobE2t39x6nhfy8421cXg1gZEjmmLA5CjywMQ9VWciyqdh4nWq64HcgpEqMMQJ9oebYuu8fPQgCHTeQA8SPf",
  "key15": "4VgP1Bg4VznyVJoL4zHmEocpDkmi32ftg5VpwjiF4qpw4pFa4apD2gHMJvsh1ERS1BjMCuGWZoAaThb9WLwhpoqQ",
  "key16": "3eU4zS6T9a4BDhruiatQeZTN9AMWLSRKQHxWEQSFPiJKcbbETFU8RnUAnhTNhTzPaUEVrUCtYjFzqNhQb7JPJkMV",
  "key17": "4K1HNjtkZyjRPbcjyQe3FqYaeL83yy6WXb3CcWYzZE584eN2W5F5i5W1m31iAfmywJMwuavfhWAakACvY1bPD7o3",
  "key18": "2Pj3L99ueKu4WZkkQ1qpyWYSmFz6fG9ecNJkbPLdfc2VCCARP6gnPjCVvGnYysjMohMwD9yKYGwRDXt8aA3M9v8y",
  "key19": "43CuruYXEAVCv3Fkcw1Yt1H8B3k1UTYi79QkGx6PpJRigqPz3JypyV6Uf1mJ94sEgD5HH2PDzaMcAHXL6BM54MDt",
  "key20": "25X4pJgJPhFmzsSBaYE4bBa1GNE4hM2ns7b2wsDaeDaEYTDZYiYYCqcMBCcZKB5FniEpixmpSo77XRRSQugiTd16",
  "key21": "5cAU9PrVi9SV3Ucdif6hAJxE831UJqrgXEMnT5Lb9VQGbyvoddbkUvucdqhogq34CAiMNaJhaV5rLMJpNoRDXwG1",
  "key22": "2eEm8i8gacRQAXhvdtNs6ZdUKxtANGcdWFMkyemvgxVpQSHdhNyXWtYQSRtvSPAT1pbJht1FezYKn9j7crQHFoz6",
  "key23": "4qRYe8r6R3kJMRVrroXek9ESE9DNTNbCN3BA8b14Ryak9YgxEKY3mMCMiRHmJawV6Q9xKvBzLzbLNEQW9FSwtaJY",
  "key24": "3dYWXY22UCbGGfr2QwgjX8pSLDTyekH6L3NmksLJrsegxyghV9CwguGdp2pRTpSTjfTa5KGvaiPaUgwJBUE2Wzwj",
  "key25": "3JVmoeJgySQhG9uEaXUnK6w6VFkhSrWHcUuaCd6bUHsq8GV9jCGyamLJqpJdg2cyma9yFS3CZTfk3BczGuQ9iunj",
  "key26": "2WSBT9Eed4meE3BPPLhSU3bBtszwcpDm6EkSqpVA5zxLB7AdiiNKAEfzBBZ6sKMnmZGpoXqvcm6EYbjqnf36nK7U",
  "key27": "3mrR6rAPbLcU2zKatRKKWDK1gw5Pj3a3EjP45BCqaGfqJwdPTW94Y6ZJnQGkSrd3X3T891VA474SthBiqLoVMPRK",
  "key28": "4nY3J2UEr6fsEdVDcaRUp8PWTwMoQsFcuSbszAyC1nNNH1cDV3pYRh7t8wmZu717KA5zicuzub2FcHcrFo3t4YdF",
  "key29": "66USqjLWQu5q4qW9V21VHKaHJNVmEMZ4RPhNurzitSEXudynwVxjJzkAjyphKnJ5Pm7oPA1ZuByexVxd3aiUKCuW",
  "key30": "G12CprmuPCrQsQXsyvRbPdLuwjke4R6P6R637pC8TvuEL1dn2ixsayuszwkpeMRSe97xd1UEmB4Rqga1gK6BqGs",
  "key31": "564vjor5VyJYBXDaps1Kcm5nkjHQi6qiJQvu5xTCqXFH5zfwruG4r7MboMGQLS7cBPskdEDJn9STnTUiH45tYDu1",
  "key32": "2aaBg22bAfPu9gp1T5LjwKceQwNyBTs3hi1qZBxj1WDKRxj9i8MMw2uVxsmczUBpLzQLMJsrMmAfVmxPr3mQeP6f",
  "key33": "2Ke7tmJPcCdhY2EEva2Ejo5yEGUwGsygAisQ6PCEv7Ct1nWorBoyxZpWfX5VMc3qEfUUtGM9aiyU2FfaqkZD7Rkj",
  "key34": "29V51Zj3gqax751B5EaEm6pMebXgbn4jthggTF8MU87Tbu55CFurAE5PKtd11DWnaMqkwBVFnzaKHWzPxWSc5NfP",
  "key35": "6v64gntzAEuBwWizgWSS5UmU59nDY3CSjZbdcfiqv5RSLgNzdk3fdLR7WoDXndrDvnnLfqiWpzbRD9yxdk9GerP"
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
