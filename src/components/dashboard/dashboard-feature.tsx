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
    "45nViugJ5DYjj5DcKn1XphBwp6SLrZqLqm6bzJeU3GU8DrnPfB1xpp7HcgzL5nMjk1k5gWzQxe6Ej4FUUuwF2Vbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23xWR1wjxERB4q8DtRhDDtJCTKwwLcYAEcmxmxpJx3XhcfASuxTRMKWPaCd5mrmADVkrk2gP4LVkzwTT49hnA2hA",
  "key1": "2EshULr3FK2gJXzgqNd5w9H7sHwE4ioHpJZU3nvZvAx423jGrt79u4gz4TCBV8K6LGsgs5P7DgEB45LjLT8TNsip",
  "key2": "2gxduojj793ckrmyZBkxNbqtDxZ2UorqqSioKypSYc1vWgKRzUyCes1tbwmRhoa2ctK7FUGRkPQVhQHzHH5hnbU",
  "key3": "4YahevJb5WKDd7uziC421iw6wbz6FH35JNw7aHhJ6F9apC6ZpVLAo25WK2yfYuNbkvd2teQCH6pekXVTpgHpdsWW",
  "key4": "25mWAsfpLieCrxQQCUccn7sPyc2ReoEh1E3Ppb8LotSKgktVeHMQiQH9DGo9qNdJaNjVfm1vkDKaAQu6wqrJcPBA",
  "key5": "2CA2BRZn1ixtTA5chaoFhYJzLdo2U9TNBvYmA7x9114znEUXHELPQS4QBKVpeK1WR52VFzeZw4e2GWCUYsTiFzG4",
  "key6": "i9p2sArKvEfWYNzMbaM5ywGK2ZmvnjU3yZk7JiERnwJRLa58xaddUPqqV2ou8oCAnQsxE1gY1iTvCbfumBJdAhZ",
  "key7": "2KPF6FPYDwV61NMEivJzmf1p3tEtTNagaD8ZNoqJcKtnJEam4efd7Jx4LLUj9eNDxhyMQQhEDZy6mf7rce5rL11",
  "key8": "2doisatVpYDYpAJSfqQkcn4Q8u67Q4qpmRAU4CBoL3qJCsRVPwVCe4sDjJXBV5vQTHJXPBDaMcF7AKMXADjYomxS",
  "key9": "HgFaW5WqdTDHnz7XhauL6wCaPCrkRfiHYKZNj3Rsx13PNR9TKtm5ZZPMgUkRtmgDijmgX1Yq8Rm1US3PEhbw2nv",
  "key10": "511zVPQzX4QpmNKCQQEPsVAw73yLbNpo4Z4ohN4hLCiAwrFkU8tMGNHgpCeJsurdJbmzZuwc3yuYjPbLt7HxsbTa",
  "key11": "2qMv9xxQ72fMe6cQ9fcdZ4n62Q2uuisCQZTovUEerZw9oSpAnPbxYtK25mZmFS94rZV6SKB9nZKkQpZu47UDSu9A",
  "key12": "4iJ35WX4wQaiU7gyAr2QWeK3QUhxCqE17UBCsCPdFXrNEe49xh8cNS2qYKLGhPvrz64t4nTCNQfPd6Kgdy2RHLpd",
  "key13": "5pZpwyD4FuBAMCgfzk29n3dWLkxfDh6x5EkLrM1tcSC12MbaToUK8D1qVD4edQWTUKXv75P8AjBTW9J3Tv916mAK",
  "key14": "3D4rSnBpo6vMx7R9hAbDg3nVgooaHqQ4rd4Dj372G1zXyHqKpXa1UdHfuDppiEXJ77m9a7fj49Jnmj2iV3TR7bQ2",
  "key15": "83N5nHkvP3F9k6c6RFsKxeWScXHk7YvcZBQA2Zj5HT2iUs44Ho3B38NrR82YFviCJxgqyNBE7rdJJqBJaiNUcAm",
  "key16": "iewnx8Wiy5hzXrJX86AXoKKWowdpT25zFKZKAaik4GW5YZ6YebTamjPjYFX1iuU5DCNqLyfCsdjA4SD1QTfU2RZ",
  "key17": "2XQRL6jQBYTvbJtvNk4SgVavu18XdF468mGeizF13TtKFm3bNXJSvoQDuSu84TrrjDR3tttMiXaRJJ2vm3saMspL",
  "key18": "5jLrvPa9UbiThZWwHHCQT7PThoAbp6dfXs6A22b2xh3VTYw6f4nLHZaCKfv8XTYap9UFVP9JBBR4iax1cU4fE1G6",
  "key19": "3qXzweVAwWHXLmSumDP5b13Z1EqPTm6mSkB8K4Kv9pM1znMcGBvXNjpf7ajcsPj6NpKwfyjoVNtFTcwtYSBxewir",
  "key20": "3zNhF9Z6zWZAHvTnKm4ojmouEqb3GQ1dfzbjpvaQY8V9uS36PamoeAvtNC2jY4nx7SX9Pe4r8Z2mLkZAxKR1JE9j",
  "key21": "3HeP5mqGng9w6kVhjnLrNVPvgjuvqJcb2AHi6XyE8N6D3aeeRkTov4DYWrzsy7Lq1ok8HvQ952ifXtUmDy4Q3pXG",
  "key22": "3rdzBcX7sWGC1SZZmUZKxcAM4YyW3Ewf3m5VvcJFh8GcdpE5pPrf81XBY8MNCtSMVQ5j78JWpcncnkYGYYLhUff1",
  "key23": "3kdUAxbXgAhTm8huCdEUCAivRrMXRfGLbY2Ede5rLPJcabrrb4qQi3yaQZ4QjNYfg9x2BbNKAiAmBgMGXVu2XD1K",
  "key24": "63zmPoUmBneVrbzoLBop6NGELCTR9rqmT96VSRZet7Kwdr8i76JgaGR8A26obxZoahyeVisUuDYToK87x91AMH5E",
  "key25": "24b6sQf4iTbWXsaroTRfNmSrpvk7oZcr6pJyWo8qYLoNx3sBhECesThTzUHSPoz6HBUVN8sUy1vXd5Xph795ybNT",
  "key26": "61VGVSxqdVeKSCqMHopbLmjzXF1d8qjf6H4Myez1QJKtqD2ufwD9dULNpm7xCEvURusvQwTUTyfGXKoznDLJaPxC",
  "key27": "5pD3wn239hcVzQ72pyjwRKoaVVmEwFxdiJrriEREWtFUpBoKcpXpyf7Z7CapfDmhSbZZDDxMQeBfDmoTUhXSFAMf",
  "key28": "43kRbinB9sYNRKMgLc9xY2jJDcJWC2yY5P9pbRhF4s3TZ3FCkfNN652skm8vAc3RGL125rmd51ZZsLFpY5LBmPVR",
  "key29": "byYjdEK8akbBoRUWnBAFq2iAm8ULe4C4dJYbGL3RkoGFYo7KgE9fpr33YPLG9W1fKAq69v8ajCjTBLELA3jQhtN",
  "key30": "5fxJoyBDZ5LsCDy1wB3p9yTijK2wgqKk1yFGaTMYunJUfWecj3dfMpBwVbTkSibjpV1QLxNSQgfyMkjSrR7RXpRM",
  "key31": "Y7jZqtF1fBV6DPD3x9QnXFbpyegRXPhgHW7UoSAhMeJ8ma45Rwxhxsk2t3C8xQGHhRuiiQXTbtw36RP4cs6bRGG",
  "key32": "298xoJCst15bPUHHTT3RCQvyEowSP7Miz7Bvrgeumu797yeqBSt5NAtusJd6S1f2TFnx8243FXYQV8WjfcRKRXFt",
  "key33": "4Z5KNMACgrQGaBqhysn7Cg5Y3XXV8QEJEBTdzPNMrvGMRfjNfKL1erGE4imNwqX733VNgoEX5idJLK5dbK4JS7kZ"
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
