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
    "5x3GvVfJ88dH12QhotAusxprZj5QSvjuNKToBNbv5mMX9Txk1LCtRf2g1E1MGXyom9XJFepTrwwYAyUUgZoZDcF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9gzEkMV2RVShPQ4rfpZgt2GwdMtoc7GQoBjhhLMWfXMU9bk21JU2XS4ir6NYqzAuawXHZjk1DrCqrvHWCPKCLsW",
  "key1": "2uom9VHYRWwco3jJGSoKA9jRYmQ295xbQQtgyTPSzgHBESYCMYVsN4DJgkJn9eRce2UCwnbQea48wmeVEnijPvEH",
  "key2": "4CVSN9FBMJwgnM6BMAkneq3GmAeFWFnG7QpLTJqAVABWuXJvVneN6R7HCtWc4opPr7xJU7VpcaqgXhwkBXHGLFbY",
  "key3": "2xTSK5tyeCKYJHwCcPXqBL2CeWLpMii4E7owDwfXbVQy7vNrwz3C5PgXBnLjrQ4e3hRtyG7meFTiXXbE4gq2vfE8",
  "key4": "1H1KkyBTexXEDxC9J7VjaQFc5AE1gKgV3D4t8nf7EYQPWnWXpYf38Apmr5c2TFFTncb7ogsNA2Ni8GFXwZEKgAP",
  "key5": "2yy5WPu41EjuZo2vxR1CnpgH2zpXUP32xxFzxBUPjtu9oXv4kNKRrCDcGw4E3FU6brTPpXYgq4SMb3pguf8oPg6j",
  "key6": "4zx1AZdfezq6L6A2Wu42ABZxG5tgtuw1xN5Lz12UTUqxnrhhp62FRSzk7qrBiGUGgGnKKUvdFyUFVEyc1XYAKMjP",
  "key7": "4tk6ti5htrg6s9LnFKc3A64hxxtcod2F2johK9a7Er3PyJG9UmV5DA1CkLd4yDjK1SdvtnYBkC1KruyfkvyCcYgr",
  "key8": "4ye5haY2Tkv8hB7zNR9rqUBFYs6rLQ3Rc437QAmgCdkaRPcstJxKWsfATFuZWhorN8Wp92PhMzcYQ49S9NibBfhE",
  "key9": "2BDDh42qTzU956tfeSBUPd7LUzyDVSkmu5kXR91CSiAAwGaS9Vr7orMpBk6111FwaRLZj2mm4b7xiCDJ1ZcC3WUd",
  "key10": "4HUixznUk1Ktux4SVsUtXYTuuowVaZRLaQZDeREyqtdTSTK4NZ118fbGXuxb8hsjt5EFz6XUcZXdhTexzmxuNyS1",
  "key11": "2boioLtTfoDEmwMaQjWFoXPAoVD2W47baymakuES17gbwPEdzC3jaJxRG5KWv6SvJcfJ9cQt7fGgTrAJjdHqnbLP",
  "key12": "4tm1wBH4q5xMwzAsLAMi5erCWCrAg39z3dsi18v2KZJFRFAN8S3hdG2Nj4igDk66czxh6UxcR86oPi41kuqxfq5g",
  "key13": "2dC6NHtanum3XWMGeKkSnMzbbjyiMCmMV4xGVg9Bk89Ln8cz3DZy4mppcaPg52fHYMrdzZSQcHdNjfXP9U3mdFR8",
  "key14": "6i96LeRwccZ2NbAcWdGN73PtRruoKb9d53nfU6gAfEEkVxfkBsF1ekx95Y2gbqqajBdje2pJZBmxcxw739fGSCK",
  "key15": "54kx4JiKUEeKgGSeySWugNP8bpQYtje5YdV9kz1GNMBWT1RyAfSQiCuW5YZwS8xNjNKehSLZ23tSeVFw79XFrdTV",
  "key16": "2mvh7hBkTfLXFRD64e7np1k159ymp7cYjwNU8VQs7xfmMs5KxDCR5aUuojeNKY169ona8jXezqy2QW3A9AcqYuvy",
  "key17": "3MmFbLij7W7SRMZEH4PCf45iucji9R3X3uxgGJ6x9aNUtqVPB6gAh5zVkVRGZ7pAStW7qJPewkxnE9RyXgktUj71",
  "key18": "62yZMpU4fQpa49eqkXLLZ5pPJUxxfaCsj7fUFZ58hYkVNVLnWLn6pqCnGKh2SmkTNiEW1hSbDAFvvFPpPuPWvuwo",
  "key19": "3wsuESrcRBgCnk6nNnkPFrAXesMB7K2BT59xB2Ydn2c8DRgtLi9Cb2R3YwhQXeTZSjySMRuuT2pPE5RyZQqkLiCX",
  "key20": "EpnHQxZAo2DfQe2qWAfmv49QvAgCSxockJu2M971LeQx4U4HYoDS2Ug8fqpV6v3Y6YzC8P3dhkoog823me8CSnw",
  "key21": "oeBACi1XUbhZp357ru8erYSBjiBaArngNTx3Lhcca3C15NMD1EUaetrNEtH4Wf64YegAYoxFbx2MdgGkSqouLZg",
  "key22": "5dJxWzMh81gGy9UXuJEQQARUEnZHkowkyvNxAnGDYervyGwVMW8CkC6NsFJpV6FVzNq4srGAuBB47ZJtPsyDzy1E",
  "key23": "H1Cz8RHW2Av54x1Jw3G8SaRPEWcZMDCYvVh4kFqJNoGdLRdRQp3QifNHLkHMcWWSGQE5XHevTSxiaEDToA6PMUj",
  "key24": "26zegMAyAbbw8RNA2jQxDQfV6fLZqr3ZWJp6D54cwfERAKVfAQzqMpZ496jjZpG3jStRpeFmKwxaTfbL352s5YNo",
  "key25": "2TnnCPFD42PQ51siCHj3vkjQ1cX4fL8pHA41HCxeYDqRPT2Vne667V7ePMSxn4XAFDzLUC6ZZKadFfYyX44wE35f",
  "key26": "3avvMPKkBQopfeVWStaPREXbW4zFXYs8h6gYX5upQskCAAZEFuZ6xe8kN5KZNqpMKjLYehcc1q1G9n662L8KCSMi",
  "key27": "5wiEqz1wZS7grq1E6vu8zA24CygP5onLmCBRBEdG63YgqjEJgU5x47CHCoeoE3MGF2scLKSSJqpEe6m7bAy5wJqh",
  "key28": "24TewvmGNPn9cFoAxAPPTeWzLuPavfuVcoXbrtNdR3AnMNQ6AprMUJT5ExezGZwxjEHutpGEbqmKVHHrwjTzYuHh"
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
