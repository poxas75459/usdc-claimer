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
    "4pMmfnpm9LMbsWCdcAuEfeoaaHsqFrCFJgLikwSvuHrV6YAWjHr7daAAwEJvmzUGxzqH4efAPXYUay5C9j6ciC6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x2bK7r1HuAtbZUTawVv7mTJ59gGvkVhNMg62Cjpa1UjtfkTnKSsth5ABrv6JtKA8veraYZ5kZy6G3UPqmLNMho2",
  "key1": "4kVyUNGmP7yqjcznF4Gg9w5dQtsBiRZ88T1PbFJCwoMcdZjX8hpkT8y9s9fZwJLNhhCW4Zu3JARV7Ude3Q5KSqFn",
  "key2": "3PeF6tfJuHuLLvAFtG45vLhbaGdFSHMatrBWWDbTqr5nTAWebHtrm43ye2ZaLbkidK6RZQCaqp1vV2nNzFaGLvBg",
  "key3": "299ZTggpJGoNAGw1vpyUC95PrWBCYUgyd4HsdamkL7XoMZ7Kt3rVa5Kzt7MYwuf6S4HfgfLsuezcwsuL7pmT7d3t",
  "key4": "28qg7vBPS5EDKt7hnGAaGzUGe9NSF4maFdUEvpuRCUk4DGpZSQPGsm5A6jJNbqiwFxSRK3yeoU8yPRBZSYSzkoCg",
  "key5": "3upegD85g13oiaKdaaatRf5HqnpGNC5R2qofscJL1g1D2LL7BAWGemBGAPqprRokXN4G9zifY6B6NTK5GwRontFD",
  "key6": "27BTHsc9zVdQ9fegmXGBbzZoiEqkxWJAyubo91mygVHKVc4uAjNJ2JShtNPCYxzAkCWCMrh3kvfZ13ouj8Zr4LUd",
  "key7": "3pVmYsiWMLUVtAgHoyiFaz4hQLiQeC1hefU5qErabp1pbkhbtnPC12n52AxqCByE3tgQWbq1NqddLqrySu7vQ8PL",
  "key8": "5N8fDvVrDnDW85KkdJbQVsqvruFsGRvD1zYjtvJDktbr7trVbSg7RSx92ECxQ3eCPPKzLBPNQZoCJnQL7FzwadQm",
  "key9": "5ZDUwCkXRoom2ZtEmjiRraeHe2m6MTyKvVD4WojGDKHsCxzRBdMYFvfUBcaBYbjUqxsSioQ3bzn83bvbHn7k2udX",
  "key10": "4nxwtxNa39dK9xiak2WJa7sWrtvHHGKPmTfsFgetekM7JY3vhQuquggF1y7mvmXsSDVC5535R5i1fF4xCUB4AVE3",
  "key11": "4Wxh1Lfc3Y6STovAXuPavp1ARVGSgaUkcEhtWSQWti4B8jYSasCH7nUV5EU1atr3tCKCFqdvumRFuXUJAGSjXyQQ",
  "key12": "54fL4A3PzzdyNRr3U5j21JLY5tKwrcJyVyjmNw1En7TkYzUkQyRdvcXvTL9mtQTUBZMJedXvsAKhcGiWPnfVxs94",
  "key13": "ghMM7B4JATUGfkaGqbDamJTb8bh1ySScg7fGeeCa6MeJUmU16VBkKUVnKHsUyjMqWW63CRRkzLpAoYLd1RPPnnb",
  "key14": "5vKj74TmvVzXQnP4CRtXBiMhq9PD1bXPwtNDXpJHbHBkGe7h15ZGtA2rE44YwZSNx5GX5kzEJSAPP2seAQBU2Yva",
  "key15": "4BiKU7deRr3fHQ3oAFGF2Ujw9NyodNdB45Gdbhw7514CJA9m4bWDZnmizEcDR59p1MBYykPH6kkTYjptmMN9at7N",
  "key16": "5zZku4mzG8U9hJhQxHvbq1Zwna5cmGV9gDobHCGETZEpgFayzbqBJyxqdB6HqsC51BFXwTAC3qhZwfqjvv7kCay2",
  "key17": "2jSK9rqLbi4qGswD1ZgnHRAH4dXcr9jwXHBcUFJR2gpYZ4C9v82SfUWAjgMiyrchqsp7SqTgg8B4UwKbSX9PpqFU",
  "key18": "2kFAZCoQdQi5jben5tAGqr3NN8t5cQsp44U1AYjLr4YaTj9ExrR2zkETSWUFpbYXgRhCPxWVBem5oFB2uyWZadzA",
  "key19": "3NYbxw5gemyvre9ohCbDLahzy6ZKip6xcPeFDgSRuR1UgtU2V4Fpo7S5ZZAxhGoqfY8iPXNGM8aWTfTWzKxSZSpW",
  "key20": "5ebrwakTm8k52Yis87cCjswhzNCE2ax6GExbGAzKNfG3iZYmyy4TKxAqukVJx2AcBrnCiZvUVCTevgBxzanLWqk3",
  "key21": "3M5iqg5BEhRgureY6hv1GE9vjLQe7VcYMe11ZAkNkmAkGm9K3HJdfB4pN81PSdEE4HRDyrEGhbUQxJCzATxHMr2V",
  "key22": "keK718VCUCypgsY55sg93wkfh3skzeyJJSrdvBDXqq7Ak5heCVv2Hsnu2vaDswrUdiqrJ91tRUKsFvioxurKjWh",
  "key23": "2e3Xf7UB8aCeM3bjSrWc3VV5Tb8QzZPQPpLJyeHkY8S3e3Sf2qHHv9YtnhTfvwG55xuuneXFz5ppKhdXSapi5os7",
  "key24": "XB6yko16tLjNFDFbs7yKNEfuKtqHRC4Sf8uv5NhzTC7Rk3iwKLhyyq5cZgsMEFGxHxekYzdFMnFaQsNFczJktdV",
  "key25": "3STaVmqYpLiK7ZBFiHEGg1teNRCmMQc6c3VPTBRcZBP4dJemhrFEGScaVPAmXzkAd5ANnpveqH5SW1Wg7rP87XUR",
  "key26": "27yrmzSBrSxxALGGjnNzomTCAF6p9YkUssyKWptezvxswmkLxWvRbP8tgyWBwDjKKGZnHhfNL1i7vvETqUoBG6SE",
  "key27": "3R1U4x9eZ8fjdsjR8J7bazgJXXYkgyGHRh9bjRPGAMMtTtWfEfXj6VR5ZfkXupeXDhDaj4PDjnVnR9HE3kbu3exi",
  "key28": "4ZLrjhWeRBBe9jMGXajuKnhNUhbgQ116uHw7vBBduaB6bRkLm6dqrEMCWEutRxvU7aWeDgtz6XM7WdVwiBkhKDR5",
  "key29": "5p7uLoRHxoMVrUg3VsehPtrSMFmsWa1bxjVUuxS1Nog1yhrYHjP9TFpDZFbcUoeYWQ1S3ZeLqBdmE8oNssdbGmxs",
  "key30": "2WSdDu3eZ55J1YJ1Qznha5PPvsZV2cQW4UYSK3Rr8WWP3cR46ebB2y6XeJb7pGCJQGGPQf625bvH9ySupjk96tz4",
  "key31": "3oqdKdPxpyrwiiypAuAjFosJtTe1r9z8ptMuU2qUb4hb6HbEscbBxNQqZRNe7TtPZjQXENcT8J3QRQoR9j9pRpVt"
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
