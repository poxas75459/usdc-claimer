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
    "3Yk87pAXewxTNscVBsKDw3uhYz7D7zLEf4uWYfP4gbSu8diUgVeGwWUu2ydnYUBCkv17N1oaVDphXAReYgLXenmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tGxiKaPXhU7eqPnLKCq2ebnr7y8K9JBt47dENNqdi6meajSnBCjRq2dks8FDevzYd9zX5fyfLjcrguMtTYcsJNy",
  "key1": "2kYzTyQX9mKipCTM27vXN2j25H9MM2zHaJTz71G2nKYA6pFJnf5W6sGE3SrsRtEDopiZ3FFJmQ4n91vLXEJHovFE",
  "key2": "3sDydgf6q6GHDNVs3X25miuc6jMtp66Pc1MeNzXv3Xsfq68Gx786yNdbKq2g66me5sJSyyNi4T7BwcEt7WGAECtg",
  "key3": "2nvB1DiyeAGEiPgmkKarHfoQyhtkKmAYf8L4V2VvV8V4zVTiBQKSo1yE3B7tWZUnfmymAb8XsWeBTJmP9LqkbRaW",
  "key4": "fzUwhiC4fp3NHJhzjrn8JmSbTEkk2iBqxh7XoL4bV26pteKawDzBK2DNd8RWpvpKKvEw5FVmqM4bMTzcns57P6j",
  "key5": "4o7z9D3zaarkAYncdrs2cRbb6exDD4tczWua26uRPGeaTD9ppvZ33yaBxDiqbA8rAZfjstsuyamD3Ys2fjGLVTEc",
  "key6": "5iVRGnApXvSYeBZ4Amodwvd9FmrX5zEX7vsQLvucNV3XczhSifJ3BU6yztvFmaoLvcaqsN17vEeSa4Hp1gKkinqp",
  "key7": "5wF31iNmLCyPFWsuitt6s3sRhG4iJCukgZds5V47mApNxhJwQbZxi9UQDbxUEnCkL9WpvxH4hbJkLL5mYhE3Drrh",
  "key8": "4d6g5i1f2FVAZFEwUXmC4M1wgTtmqRxqnnRMfcYwseCznxRGY23iNiq2YXoCaQdNuSmPaiPxZFEZZibt1aWJXm76",
  "key9": "G6hi5rh6CVypt7fFYJqpXb1Up3CbMB1aNXiaaJ12wFeSGgdQYz9cJDd8whUruVmaf2R3YLPdLeykcMGooAHrRwb",
  "key10": "nvK7kRQgukQdLgr3tY9uC1qb1ncoroYPH3F4KFBRpPAXzkcLZ5DHhPQo7zm3wd5YrmkRoW8WSaZrbA18qSKHhUk",
  "key11": "3LYUtHy67xsSC6AZmCWptqeks23nC5Af6Hr8oGXh5UWfvfKsdsDV9nuY8yoxVs2L4z9mvUNr6p8FbCxunYMsLN1m",
  "key12": "4GJPep3GCwDZAvRU48QC4CfByqXnfg5eGJszxLAoXbXqvh869AtTb53FgZxAmp9BEMFibJztS9cCMDfJEhHkoeQm",
  "key13": "4Cq3tMeJCAYcUBuv2VgvuxzdHr67184TdkNC9PgGE9bUvbSwdezrJrsMDh7ri4NmFXEbymCxXe117on8AUso7t9N",
  "key14": "jZLgZC7MPK8FhsEKAupKFw1xD97twTuFHpTeMya4u6X1jYcnVyzndP4FXdWnL8FP3gDGQbFYriuBYiRzxkzJoey",
  "key15": "59vG1o5a3HsrDJnBMPTZbvFD3Qu7pr6DLQmzcRTBXEStxfBNbyQnfYmDGfboCRF6G24tf8iDgmHgsyMdDXP3jP96",
  "key16": "pcLgKMSJBCAov5YsLGWwhf2S4YbTe66sZy2cieDxwVTRr3bMPWh6EGh7JQB1hb61DCy36Yaiwo8NjKjmp4ahLK7",
  "key17": "cffJVLNyHqRkNyn7oCQjTvtGikVMtKkJt87gECNAwgNpgJRbuzP8KiCeEy19LaiHRBQSU9zj39Vw53Y9LcpxLp9",
  "key18": "3kDfZMo1PTzwYxBngpbbAr6pTJ7ZUDgRP3GiRZzT8zn6esMyLPG8ARhACix4zjTkePrURf5wDF7PeGrXqawd4zeM",
  "key19": "yr9T9LxFiudEFruJvXgxd7WSBjpPRfyfdApX1VfWsDT55KNUjeafHCDyz2PRijdA8qd2X5GhBtt1eS63sW4Q3fc",
  "key20": "2rsUQTFHoew3CwS6hLiRRcz41XHmLUiNjjaMtLdVW51vjifm1D74XuGKsMJJ5wtyN8jctSfpqSETxaRTdVvtzKtH",
  "key21": "2aBjerUVtD6BYGDszM9jLSF6pXdNNXEXddcZ8XTRj1c8VT963ojA3HJp3LHH9EuagansNhhBTpEJ6ZdSGu2Bwp5H",
  "key22": "4CmmUtS4EtT8Lai1s2QXddC2PXCWetFuaPx6g1YLJQkWBqZf1DA3NiQ3H8L9Xk16hfeL2YstymnTauvkvVfiBgmm",
  "key23": "2rkXP4Aga9KDmAkbSzGi8PxA9Vnr8jTmBR7gKELZQexJYc4xLUD9tGHt6pVJbcvuyiwh5nR9WVNjr49kc44hQ9Kv",
  "key24": "3b4zf8wpeZpjst431H2FDXQByaCqGN9D6GnmH6mZyYdY85GNAUond2tJrc1JutcyphCNx7M1oUnQjbreB77DXLWa",
  "key25": "4R6ppruGHp3KbAXW1A2Y7ZzuFnJHVYfnhsftTExLSaAXME4txeLm8boymbthKoggdKVKsSQ8dZbCtv1ogDy7csMS",
  "key26": "UxZVvtvH6DKZ2PsKEsXRjWQJSy47PNpMdAYAWq8dDvDMRm8YfDugsUVvrb74Zo96Sq6kA2W3WoJ5bTQ9mijE4B5",
  "key27": "2jJqWRbjB74YFMB6S1xpwZdMbi53hg3exur59cnK8A6681Xx3Hcw9HQUcMLgMxVetDR1HjQYpV24nbqvP4KtU7j9"
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
