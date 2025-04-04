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
    "2Mc4iPMKu4egCtafZWEk4ek9c6nrwxCNDFz3cfD8218Nq53NWvmpCZ6K3iNcr5cA76ZPN1G6cASpZcLizoh7NwwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5okFgopYfGArZ9x1394qy7eUNe8p2UpvFeDVVNeG8wQxBsETd4RWuXcd1MUgUuKSeSLkrQh2kdCJWifkE2znNRds",
  "key1": "5ns57w4TLYGadjY4AF5LfVCjvB4mmnPoRdYYs27YqZnWTsYTviAa4uNSUmpLWKxAQ2NVuE68FGdhitaEBbqtHxre",
  "key2": "Ns1D8aeui8Qrc2SM7diYnwxonZsgAFoPy9Re3oKQzRbcnBqfbb9TaPxVFeiUz3X4pApy4BDAi4Fg5gnJoAijCfa",
  "key3": "EfMouKdaFE9ipw4hzbDnhkGUB3MBnMNHqxEGeXjqPPnUdpPAsmzCcW3PMfBAfCoJ3E9MyMnfUKLvELjeXkFSiwZ",
  "key4": "4iqxBxfPy59te2jze3AS8ixQ8gohVykoAQ2oKxz15C9vofW4G6fwBwN2LE5NdsKNiyHp8K9hw895UeNsh5jjZvpW",
  "key5": "2Z2fvBj4z2v3vEmzwdfzHhLLfPpg1aLzitLh62YWhqU73V3V6fZ2RxQhHMza2uMeFYpNQdpocrgUrFGADmGf1XiY",
  "key6": "57R5g8q7NmmLQrMRVjrPEQcofwAXXGtbgtjqAitqTRKtsXp6SVgNTf9Mta5nXR6pTiQZ8S1GaVHDKSut6TBRdFL7",
  "key7": "5ERPxqvbrGcefVMLyGwVCzKjAWwhWVDvCdTRmXNUi9GWT9L1NiwAWKmST177vcjrKFN39zPPC4GHMH6XeJ3uy5Mr",
  "key8": "5tuqvBwoSXRskqkxJNgUVXnNj2vkNkXGrsayNjXNWFXNy5rtzHxNPaSKi9aaES9LVAZeygthjUfQNjPWFSrBJ3kL",
  "key9": "5HJDoBr5mhtzm81rqjHUr81zkN6ovXPsczHW1BzPwa9ZkRp2FnTWRMqRFFKDM5zpiNpJB9MFTwexJTSLh7NXsqvx",
  "key10": "4hrVY5rhuvhkGSoecigXNGS2bzawMAEFf2TpeYcBh4asrh8U8BstpPZJUybEAVdXbpG6MKeKLvnrEywTGFFPtHi8",
  "key11": "Bzp15ofnXNtUACsyUubB2Yayyu5odZWUjpNBjLvaBJoMNA25PHzEo5ZamiLZaLvhDX7etKSsriTx6AH4H95ryPL",
  "key12": "4drFZzaRY9rCtWmhVZ7tX7FpdHLAxS62bRkTH5H9RdWNUZ3XU48s6Q1eHiqhMa6vG2KWvQUUnmoLMvmRNQLTTuw3",
  "key13": "42WkeRo9hmUxzWsCaU8L6mv4SFionywJnjebz4hTwGLiw1FQSLo8q8n1zmvQkft8LK7t5h4VkQ6P7mpqV6ysmGtY",
  "key14": "5wUmbguHNMkf6ZqWDMeqvSVLoPR7chUACtwSe1Kji7vkR3t7LLsxXhcr7jTdyiCRSiXGZ5V4RxdMz83WpmYTdvVX",
  "key15": "2x3JkWhNcGYX712CFsboavJbjhuFXj7DLWVVCzfyiYGVGjd2PJrLyzqHAp6Y8ywJuG1gAMPKRtLU2xHAsvWyn4ML",
  "key16": "3XumAMz5wTVm6Y2XULHycoiwGjCHTDUyMtjA31H9H31QhKmmxwqD3FzypEtArAvYNNRAuYyssnjbTnUCzTiNDnJ6",
  "key17": "4KY4rtycotswTjFuM3H2nfZRNpkNrRtdCzYvD917X4KEWXZ4CrHePp5aY3FAMw5m5Auw3t575Nchs8fUo5y4stL4",
  "key18": "5Upu1kwAdMXjYdhndL86zRMjEhdfcyDDvcephpVTaQqVTJMn3t5j6ptJGLJnmHJsiK6nVd8SUxJ3xoAhfmPSAjSL",
  "key19": "VYkUD1Nnv5775yyewv642jqcNrEnBUBSbPhW9sqaaZWTq926Moq6R54KDCn5hKHx7tKBCYbhnfMLZn7X7A8v8Dq",
  "key20": "Nc2Npko5jxYUvZTEr8pN8YRJ7YuXchc4utVVTC8h3tJ4pEmmUVizYTU81yP8hQY9gaRbmcQGxS8zSdZyVc4RJJH",
  "key21": "5gToVBLPt5qgusMSbrQm1zsiEfqyUvvwiTjegBhVWrPaqWffiLbXt4JURiAqYDAbwK3XsCpwfcvLR4bGweGj1QZe",
  "key22": "3LAgECxB5wiUvkQZVt9xnxzLsFVf1Mkpcr7kXV1xabfrHkvbmtq9EHie2Tp1G1gsZ5iWnBxFg1EXuYHiv1q7hKi7",
  "key23": "4vpreAPZzJNfqHg8GcBWgrbs5rerANyUbZLmNUfYmdXBHGknqECrUBHHq6Mb1YEXMpkCBzf2ezpSRS2hjrzN7xqa",
  "key24": "5qXR4DkQWv4J2v2gKkeqfpQNqD1iViasUkySdhGdyntkJt7YJygcmyzWM1RSbjxdKBo6Gbn4jK9kNtVnSQ3yYhf6",
  "key25": "w89jdXpPcTH3c6c6cXHSEkL8Bo9yDfDESKfLgSCgXYMkVv7cYCqauVJucENX7C9CAbx8np8PYUAG3Pd5Vmsa1Ey",
  "key26": "2fitNJTgncn7dTZ8U2M9aW4rk4L7QcsdiZVseXt2AqM2pWhUck9xxCHZ9SuUBzjFXTi1cC33h4rY9yqT9JgMEBt",
  "key27": "ePcK7cFwocpEywgG4qrFFXQfmu7WaXvcai4B9v95kYbw3wSibrQ6L57FrjbeLDXLfxfCjipN5s8x83xfRWL8JbE",
  "key28": "2Ua1v1wZacqboH1z9CtDhgpeRcuk3zWFnBB1u17SLfweUertJuCkQVAjLN22nSKFfN8LCzECtKhKEVddMFpD9x9y",
  "key29": "mLdZfcQYpuxqxy5nfpoV3PaCsRbzuw6iLMmutrFTsk9fbjsFG9B2nbZmScgpo7Fd2pxSVjT62ziP2Y72PLpbuxM",
  "key30": "mHQz94ehs1s44ET4AQPTTEhiaV7okuEnXfWpuNUCQKHsn5vTLw4yGonD4ePNAt6nHFNNTR13RSsyQtest6cQpuT",
  "key31": "3Dq5XqYQf7TJNGasFaqdaEZkDLP9BmNXDDtLBnijhNzFc4PR4dmqVNyUMQS6dfdtvoYoE5aMt55DDXZeB8vYXhFc",
  "key32": "2gkbokrwgUwAKGLap8R3HS6oo1qkPHuEXminkU131mbuEdUtiBWx42WJTVWcHa7GUWbRVVQdh6peESHAAKY8Meh9",
  "key33": "3Lvy3C6e7nLCpmdcrn8khvwzvk9aNVA3zdQutX6xuqnB8kG3rqzUaMnrEohDHNNaA5Pb8Z2mmH4mX36EzwPEKMrB",
  "key34": "4ESKEEaxvDXiTxRUYDakFF6ERMgs7fpdgcWULyQJ5nD6jnzXjD4FXp64UfHNoTfg1B5kyvQifBbMCdzBoVM93ycs"
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
