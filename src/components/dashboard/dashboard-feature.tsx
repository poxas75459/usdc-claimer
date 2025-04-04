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
    "2cak1XnE3mvAtZ7mv31Y3BFRy3UgCzRbqmFVovPvJRLrXGyMWSs7oKaGuxRtY6swKyx19XLZnW6z1eTUh3B7Ljfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x7P6Sv7TkUHDE3dNXcYgS2nDMBGWpp5775QULDdJn7cJxdv1L5bbLGwFe5DBELkQnSxNiKmGsiCuhTrcZj4jzMe",
  "key1": "5QhyPtNmKBR2j6TMk3ddzA5qgWxtFsZo7uJDnt3iaT6dt5MBaw1UkbYTkcX9UHBFB43kBVK6XRJrBEySKFwbg1Ch",
  "key2": "5eNnWqfqQctqFVk2qsN66vX3Zbx7Hfk76qFo9wrNoUx913sKY3BEpgK8wqfyJdBpRrHVNPCMNLiLN7NCbp4uZNYY",
  "key3": "kEe8zf1KkcdfX4go4t3VTxNvLo35NXjiwBuULhk5h2XuQ53QSWgwYUfkeR8YjYYzxi6EWq9LKEXwtnciVyX5Wqw",
  "key4": "3xxd6po9Qg5pPZsQKR27ymPA76gCFfZ4tPVwmGjokZAjdQaYJahGRUEbm57Fun2gG1rjngG8RWgRWnc5DUEtJ8EH",
  "key5": "4LJ1cTBmgB4FdBMAH84mEXcFuniF1xwvV8eaxkKCMcFrWJdKq2v3NPb53K3KCzxsAqJ1ugz78ChwTWs9XH8zmpwf",
  "key6": "4JpbvbLTkTYJVWmAT752hL8MaWbNqnMop45GYxUeu6J4CE9S4FFC9pYXLWwsUZp7SouF7JZwQSjmNwUxvCfdWTS6",
  "key7": "4aPYr7VCWV9Pe7WWZEowVozYMitbd2nsu8h5XYZKAbn3pGSefEno7tfjxH6p1qUfnKWD5S6RZSdEezhsm2QA7BXT",
  "key8": "2YpV7svvNGQHkct3qtCyKkEEJSdvgt3WUcxXH6tXt4VyYLCPqzW97TmJz3ysrRBQvWYRHH7eW2rpUsHMs3tsx44W",
  "key9": "5uFNfurYKLxhvpLyVoEgTy78fkKHGmmDDSeWu5HDk9eWfwQA7gf7PQGbzVgsBmSc5CaiSMpX2zipVXYzPyWh8qLs",
  "key10": "4hKCiQCDhKC2D13ogwMT5cNnmbNHmfQnRL3npW1khX6W7H5qc7GuowsMmHCqRUTXfjVUsTXeap4tFgQU3aGhKh4N",
  "key11": "2USx4pwLeuXWM1e9j7r2qfDAH9XJX6UdZZtwSkik6cAA9ScgPyEkJeFK4N5NuVny8LD8f2qiS4D4T1jtUbcxBXKy",
  "key12": "2fJAGsiuhqXNJXpB8ZkNBk8qWJGdugp7GrhQ7Jsh17XZVRrN8MQbDLcnHNPxcNeaeePVXqEK85YHHVMQUrxHnpJD",
  "key13": "3DTu4YjRyVWMsCnATQNoenMQzL9bA6UdWKT3eBDbAe7aDC2giJL8Zgk9pMik6VANJFQpguv3A5rGEQnzQESsgCkq",
  "key14": "5CNf3F11zeu5XrW6ZFrm5jNAUnr4NdC1Jc94inLB7gwEURNCXi31RbTLMKd4bH8755vfbYU9vo8ZRtk2KDJTPve1",
  "key15": "SWEL8brurEJSFBtzdvtCAVivVrFCK6qmnNMZ5qdeXBtvAJpTkWUHCfmRyX65hcp8dJCsTsRVaFCSmJPdpMiCVpA",
  "key16": "4sj4CUDvW1DJP3mo886aD3iQj6gnqAXoVG2dhK6wizmZ3j4c7MpV7YLqRWNzLaMEondDaPxTZafuaZcHtsJq3pGK",
  "key17": "3Ti9SuQtraaV2x8vsDLR3bYvcU96C1BoR1bXibHod5Nu5a7QNP7Xisvoyxqk4Lqxp24DFx8aKDQ75ndHtptxCEgE",
  "key18": "3ZoQzudWMPv2EM8eUXWd2GszgpryyvMYcqZATJ7z8cSYkruB7cSbjt5zGPUNGi7PX9Hnx484gF29ygzaP4mRNWY5",
  "key19": "5Xb8eRX21jVGb4Wd9Tv9vKP1SqB4r1mjtcwMHuDcRwLGRRouMyUnVDDr43d7v5QtBEbDX68yHy37caD1gaFZspyy",
  "key20": "3pvTS6HighDyo5YxX4Wxkrs7ohopP6b4HvDGK7PEL5N3qWjS8GZKM58WdXJdHwinyLoPGLGLex9UKrbGeVuhPQ8X",
  "key21": "4GKTfkX9WS5cSXaFdD1y45SHopGveMTDNWhWifUxkzGdGGMPwxADD9zT6sVZFzwCQ2WxaJewwcCzEGFWZymfinoG",
  "key22": "4hQE9EK7rticJdDJE7DQbpxgVTfCTcLvLBYgmgLY7EiLiYmXoz88wq6ozhxY5HAkJ8Cy6Rr94DoBGENZ9NaaJA4x",
  "key23": "2mQ4YXa911pDsXfEfuRM7crDLvgH5MRkpnfRQmnpVUe4p36PXTzjJB2e1rZQSGsugux58dNFV7wDDbtW2cFDrLGv",
  "key24": "55fHNYqC6wkcn8uVwuz25zoWsEZtWXfjcraHqKCYFe84qNWsHhF9W4dbVFiMbKRkzRTNS5EK6dJWxzt1Ru5tPbrk"
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
