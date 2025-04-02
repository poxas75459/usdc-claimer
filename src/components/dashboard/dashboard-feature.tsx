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
    "2vEf56uRBKhseU2Sa6zctPtVMLdqNLFgGGTKQp9ZVVH2Ryu5wgKqbUKMc7ZE8u8mFFkBuqnCDRDRxAqNiNgdDRHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LJvaFQAsRHJA4HGA2z4SMddexyQbZXsJbydWtvVfsPYpHmqN83QzV7uJo6d71hcCNhnvFb9WG1AxDYXT6T44p7R",
  "key1": "2vhW5eHiivWVRucEEdidy8GRVsiDufMUnoegm9mjXXu7jgiJuzAt6kcyempP6gh5DZ9kGeQj8yraa3nVVfu9vLiD",
  "key2": "5JrYSJQofJfk8Uf5Z98PRytqMHxfK5EGjZZNWGwuvBxNcDjSjkAQ5WeBVTNigqYRyAU5qPYEWiSkbUAZR2HdupLV",
  "key3": "494ZRTw6ZwY5doZkLQG5NWDCXqzABpxcx4H6D4w7EzVVpSsJxy26fyP8CJGhxymywQrfRvNG7cNmfmDgz19tBo3s",
  "key4": "5hjYUqVugn5drGYomgiSsjdPFTAh16wJxU91LYSKopxDDHKakT2rXqHVqoQJX1yPHRR3iaWC14AwchVfnMShcatD",
  "key5": "2fVeoEdpCbtfuwUuBphkJ8Facm9eL44ibZV4gf3W2yjtzbUkSL4jFBTfuaKpNaeDqAE5TJ6UvcJrMU5LCrHweH64",
  "key6": "2GH4zwt4dhYm2AtpjerMEzxqM4sdisYyqjvbKfCAtkKLVfLhWwAQMRuPhnKmiZaatNXfPDK2ytue8p2atNgM2K8W",
  "key7": "44B9rTixbbWkk2r3ev3C1Hkcbf38TpMMFhbv8CMzHeg8ifzJQt1VV9c6tKZAWE7dRxoaqREYmsMivNmNV9XFXxWr",
  "key8": "288NyizFZw4f837SYr4xRdxK2e65tDVf72B4YtbwHP6xKHj39jQZjf726BwFvvD4m8TiaKfggsZHF5bKkaBvskUr",
  "key9": "4Hzz8sYGfxp5655n66EvPApneRmQw1238dbqvUGqPwnMYaQx72aprB2VYpn8RJdDdSVptENzcxJZJXGfsE1cTRTq",
  "key10": "66dZCQbezY775gVZ2485QLCyuheDG1Mht55Yg4srAVeZrVv25iLFAoDpfYJz2dDX1YUFuWmhZ26AYAzynFraR5Xo",
  "key11": "2xKwZnark5S9F2CQKah8J2mUobHhWgbf6pE5UBJyygPwnRJ6JNYmmRbM3p2SvyDLp8x67pzTYn4iNiCGprnovQ3",
  "key12": "5sXepqYviXg9tadFG1n3mNCCPqkcnHqgzGVT6gcm7kS9WbPAHGZJdUNUWRk9BoAhiexY66G2nnoSdbjZ34BptXSU",
  "key13": "2zsjYfF83vGDmBAKcskUos6knJ7t99JCzHk1PP7PsiMTuk23iM1V1vkBkSZTSd1maJZGXKDaMuXT2zP22SqmpPtp",
  "key14": "338bAfiJ9C8TuzkcWTEYhe1ZirmsyGs9ZyTXtXyDYhbZQ3GQuXd9HPFHgXdJVHJqHJQdCCmnBjnMhTdJaFZh9AHX",
  "key15": "44VK37rKS43nBCYJ9TsvkcCVEkfxyUMq1TPpGySTaUJeNd2ZX9MgJpkVWhfCUtQ9qHCnvmu8hAM1Dt2SBAJQCmZc",
  "key16": "2Q5hU53QiNnpkr9bLwG6iyRKoUeGkaKv6wnBRcHZHjjb1UjLV9xt1yVnhZPwYRQhESXP5nFPnebjYnJboqLvw5Y2",
  "key17": "3H9En2BxqdV1jfX1fGDafngsze2pNXBBJ7VjjR9t7fU4HKKbc9gXmJ2TuCh8sHCYhsDTLEoE8qiuYZQYVs5DdHWc",
  "key18": "8ph1hhb1d2YzbZ7uiKAiVB9iKmH6qYJHUGtChejuGKWUzy25wsBrJSciADYMNvfty5XG9tJiVswQUfjfnvsZuXv",
  "key19": "2d6NEH4sM5sXMN4bbY1998vqx2rJX6BwaVErbWf2Y7r4SrNBB1bNzQReNdseKpXg3C33GRkRPey2Xkvg1xADC2s9",
  "key20": "5K5ic7jyeKiK7HkC5j94V7c34k1RoB3xJ9Y55oMcfweKxda12pXnkRj2iqwK5zGNw7ZyaosDfBPf2YtJyd4BDhtZ",
  "key21": "5dPJQAmxotS6fxYRUxsayJE98NdAYBbcV839cDrmCkm8qanJpvqHhBM6c9RgWttNcrzVdo2gWWQbm5JyJJZX9hKX",
  "key22": "va9Cw7Xj9YmUoMmgm6ZstoLJRq4gupPDUpg3QRhhFQ9GgQSnGpZYU4bgcYMjd13Rku5tjuw5ZUaLPNMMzMztw1U",
  "key23": "4RMZ56PXB8uW89LTkfuZkUcfUwjSFjSXky65fqsHn6KXxawEDuK9GwDPvTfoagT5F4T9VhWoT6xQiVGe1aowF8WF",
  "key24": "DbAsrrd6WYGhuZA3eWttpYiuQJGEUay9HkfTC43N5TxNHnrcGuZPULYmfBCtNMMBmfaeASHf71jwdXsxySSHucC",
  "key25": "5knXjgtqvsohzHDCjGvs5KzoS7R5JPwa4A48waAYso7UfHTCRBGHTLtqaw8xUtnYXUcUMNWXh6SkPzu4fmT4eZz7",
  "key26": "4NKHgQPt7eaC8sWDkj7uqZzg3phwCKsw7aekGFTykeKCkW8L2YTb2HbGBwZsPoMkrGDaiNaDon7EfrvrQbVK8YjJ",
  "key27": "3RVcStrSQFk4wFbrewLDmtPNii3yJWDrBkeHMP7p2BzuzceD67mfEtxReYZDjkwYGX1YjQSN6KFc2sReEAbLpEvv",
  "key28": "32pNQYHiZhxRRRg4dkGuCMt8SJX4nQN2GPMwAFCfvK6h2P3QnUUzWdrVDwDri1oMDdpRgAFRBpKBHXW2dcZyMgUL",
  "key29": "9fgHWLfAFdauWrDnsSPqcd822wEEEsvB4uHEFR5uVzyhMmZnQvA3c2WuVRyhjW4UWsyosu5mHvZMaFSfEhPzwi9",
  "key30": "4bJ7iqKjrfxxgRUJJSCo3n9bFySZcUXEjvGoenTupVMLagugev5earQcfj1ZXnRRvNaZYHoccJQyXjLPFfKGeMq3",
  "key31": "2fS32KCzjdS47md7ZcCCqJYc4Czg7RvT9vCTZQV9cS4EzVLqTiQbN7vBWEfha7KF5yuPR9KZzL7WbRDnyNStVjih",
  "key32": "p9qrhLsgwHEr7mhK4SqYP1RP2PAvNJZQ3ooswLnozjChdqK7joozZMa2GcXz7VRYVnJiWGCrLAbo76Hk7t8cRfP",
  "key33": "B7wmmym5uDyz5J2BRFvwtViG1tdNv6a3TBWBE8h6w7Nj8db8GizMSCc8MjGEtVRswJWnmQwP4HNydg6X4BkBeUp",
  "key34": "5X95RyDyBBt1kJk4PVWza7kMGjnbr3aZTao3oemM7fUs5qWxFfjiRdkNgZGGCqCAxHZx5sDaoeqoKueXLSouL7rd",
  "key35": "4FujMmWtWMcYgqE7nxPo8YcCAWFw2MyLV28X7jNMHKqW4gkBAJbuzkewhSJR2ce3WF1d6zRbPyACS7pUohVdLvxd"
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
