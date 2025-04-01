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
    "4yKErW3F3G6VtuBreKNdVnRmzs8AmaSuGVTFg5s1pVu465sLWT1rxp3rpiQa3nVrhG7QjeakcyvAfzT2HtZW9WrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wtEDbd7wZqk56mCZX34VoUsmhREaRb2Au1PVtCBk1LnpZeLwaKoqKHgXi7PdNtcpPnzrsQJWTCDVUvnK6A6jtbH",
  "key1": "3GB23qrpRM2WdLpwjNkMssFCoodjdnKumE7UQyCpTReWBD7jNbtkdBwxqYYDcCxJnRkmv9wKbRug4TjgYNsGYatw",
  "key2": "67adcNrYP7Bm2zbKGTFbNY1orV8yUTheM4ebnqAoj99iQMV6BtbS6AnTKuNZLrbi5BJMHSbHed9fTf4WzxwgC7FK",
  "key3": "5F8k9Kybrbbbqhuhn31P2LWz9BRiaoTPLVje5zDsNYaNQeJahdXg9NdGySyzw22dpDnqnXt4ZK4JCDbewtNvR9oc",
  "key4": "2Vy18mneoVK5vwaARajaVVVNWRqRc7kJGRUqCPe2k5zUCyeUjaP7frz8jBzkvTXhKGzbCe8gEMFggk6prZpcQqtY",
  "key5": "2d5ZWX7XbQhHswbckEfmPFwRS3HuWHm6xxEMy2BbakB6A8orGYNJXRki7b2hAFSAYPErh5YQvVAqk78L6WnCpM2W",
  "key6": "46bp9rJ1sX1vw9TsfGxjkHWf6xcnDsBfsw2ZP2PyqT4nc8n7C1Z2oYyEkJZ5uRgu5xCkdgd5SRLcXXhvp1H71tsM",
  "key7": "ZbJb7PEDFUuSPwpd1agWriyvR4xQ1QbdyyjzgpBxe1XfyAmJqszVugTTGTGaMaizwGAr5FGSNFtTtrhL8P7psy2",
  "key8": "o5vNEW2EShEtRckx52ACPrgMrx1Y8EFCDi99wp3ddHMdySkjJuEUhV4ijhWwp1UcLZyL45nqxRGfSfCqKCyK76B",
  "key9": "7kLb6UthQMTHgrsRz6JKyRVdU5aD4RTj9ZcmKsDA5yytWz9QX5ftSmKF7wRNEZqhpomdCrxo7UcvEseKJnCJmMJ",
  "key10": "41R33HxP7qrKH4WYhMyi2n8Bfmjv72nSqdMpNQdvEufSYieLT7ToJqG2BX6fAqoQiFNWKg79WHE1pqeSdBiKYjUA",
  "key11": "2ESsNZkRNwyL5LQm4ji35ftetRtWusFTS1mzrzBWjysSSZqzFxDtprbGF5RPWafdHswPVzqSpLT6CQ5dorD1yygT",
  "key12": "2f8NWuaWbCkkpYLyQq2sVmdFfKw93pS7DCPYntPe1fzSyMWdR93BYYunKcd4c2kv4p5S5mXhiSBb4sfgQx9yqNYd",
  "key13": "2L9FRetewjkudNsSbpf2DnuKTC6k24V5gLNaRbVFZSmvjHJf8uL3f3wefUfnvHorP5BRQr9bHjP5WnXWoFfsjfm3",
  "key14": "qCTkz5iejT3ow5r8i3MtQDSngjQiQwxvRkzwPe3GDmPWpUBDheWL2LMUfA1m8CivdojeSiMGHyzauNqFe1ko9ff",
  "key15": "33BCXCTstxg59Fipf6wABR39XvvatEmL6zPG8AzW2RXMRgnbuBq1Wnn8jTHVHS9WJe29KXbg9DFEQUM6FHDRqaNT",
  "key16": "4FAUiyyHS6tGJwVHmUvJdAVSneRRZxc2n6zzELqYF4euSVFgE7fRj3c8wz2h3Gw4QKuhVb87RwPe2xu8XdRHrJPZ",
  "key17": "2xoWyGd4WLWeDt7AwM5qFoANXQvgcCedkUM5TrzCwbg4rKa7DQxfG1fZFrbFJNQKm4v8NMLUhCehJVRdCF2kW1CB",
  "key18": "4XVR3cv2jjKYroha22jBfBaZL9rntrVzr5fDvr66soKmVFU7NqMYeVYJyDp4KpmSkDEEnqUs4vb8E5XZAqrq9T46",
  "key19": "4DYva7pT122VRLKXofJMcNwMWkGhnWuBipGnY8FwbpiUwufbkSr6t5nFvCy9LLBkir8k9zW4EyfdYkh34SCX7btm",
  "key20": "B6qxGuULkvmfjU9D9yVLcVHku46Q6vCfjtmAoviXYmChPWRjMn98teDWr9DXfDw3y4EHxk2eSTsoAGQkz2MFtbN",
  "key21": "3Qt4iwvHMfWjuf9ueJjdyMHJGJrQHQXsyCNuuZmdnnTbyXbqX1AJkr6UeWVoqGfLxvT43CHC3FFZK3GXjgDcqmd6",
  "key22": "2bn9UfutCUWxqpurBPF6nnDv4CveNQKVbeMbBJFtwSadqRfFoPdLTZTPM9YUYHvwpbmFuCengjqxFVaxg5wwvHUH",
  "key23": "3ARiNdg9jPsD3Sh7Lve6UJQWAF9AK4tTZKfLCA1vU8ZyebBdJJHgWM1jUV1qYX9HtzkZXGPz8NFcnU1BhotXtAWo",
  "key24": "BsdYsGa3avqYc41NTU3wZNbfyWycSpjUMYrAtcZr4XqxgBSxEGRcfyR9bAGEdwBzXpkxJZPACHJwyV6hXHgnrYk",
  "key25": "R2FKBtx9SzV82i76qJtD5jJFew7GuNQKLZ4URqayJhW9tDfS7PFeoBrGjXuGWprRFRrkjVy3bUqfjFzzCdTUGmM",
  "key26": "5BTx3Cjs2ZEBYHbgqoPG2BMxmGULjhQTiwH82UMFfkhVqE5Q1mxoK4LxFTDQEHXNmMD25J9QKwm6MzF1Lkz1xYKQ",
  "key27": "3g6ZcebKW1ZDFLyQA6vnuYb9m7xNdy1w33EYGmpMmqUVfMbBuaMYsNxWjmwt4AwHcVyH9DLRyq82rkePTQwL8sD7",
  "key28": "9iXAR1PaZWpf5952EPQYVnHZPdCPKjf9HwGTuL9a5UXSJuuPpj9CF3EZVvWEzWqNHACNT9Q52QkdnxFD55S5fD1"
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
