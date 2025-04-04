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
    "3iFeAMC5g3cAXdzLHAQZSQjn2HkcghmTvQ2xuiEa8KeRbQxkDbrnweVTvHLdyQwRVCKvaKhdXt3xY4KGPR2WQgxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49UChC5QUNN6kK5dpv9nFEHut23xSHH7ss7f15jCMwWbfmuFo1yWHPtwDZaX7CTbQLtyWqxDA2HDhK2kS3qW5Gj2",
  "key1": "4NZaGo89DtTLvzAwcc6NWq7ixj9GeWLjcRNKUSs3VrrzUjoeHttY7ZDo1nbxMAMZvEv8kWmsxwgU4trJm8omu9T8",
  "key2": "23EU5NsrLmTMp7RjcHD7pYLdLBFqwtsHLDkRjHL5ibMMvUSWXSd8eaxo9ofZDt1N2mJA3og2s1dHG5jry8ta3xLh",
  "key3": "5DVB2AVRVLe6VcAFeizY13km6GP6oC54cAsqEmZPrZbC8gtNyUTeLcCJo7mzWkVMJvyqQGLpqV7xGTb4YkkznJST",
  "key4": "4k5bz9YHcqaHxekSUg2omy8Bed56RG7LoUXrAoEbyuai9iX79yFkYRCKwkEzBAXZUBPbajU5jChDUbmMcVrSkrqN",
  "key5": "zB9Q9m1nU21SUw5h27iWnHPJM4Nx5Ebepm8ihnj4ynH2XSXjaVmC6y5h8eiKrF5BDXiBKcV63j8a9LJeXkdxAz9",
  "key6": "3Fci1PoRgrBQWaMdHcavNMZ2tHPD7Q78RSJSwA5xPvexQXw9YG7Zc7NYeCrBUsu4zzqtC1zfTEToeFjHwBDaCyoX",
  "key7": "2UFWPUcqpmJeuNZu9W6ZuSXqN8BZWrcgx24YhSms9EPj4i37ZSMo1h3Hqjf4hgzqPc3wq2TM2oWBdvSkiE7H4Qsc",
  "key8": "4dFzkkTxM5fcTajNQviPJB3UDkVSoBDXg6b2VV9WWX7aedfG53fL3Uw4NmFTKtXpZ17Q9SnL65zhSU5dbgEZ8hVs",
  "key9": "mcxM5VBikeaDwRCNXLtGbidLjgHPUPk29upmmAfFj1bjnKMp1YWYTYjHumDqgG1DKxoFjeydLXwVKCWDZ1FwdTg",
  "key10": "4ZCJNaf3HUEQsFC7BFXJa3vouyScMZbpcYnmv2yQZP1VPazTkJqaKmRM4UUA1aaE5UTqeod4e1dGxWTw1GJ1uiyU",
  "key11": "j124juiFPS2ENJKxJZEtiCrqaUhHDdby2GgLyMbNPrPgDiKUDermRjZHpp4MZxFoG2qwrQzVk137Jdim9oFdyj9",
  "key12": "5Qck6BnJ7PXbmRzsn5LSwcAmjKX5dgwo3hBFAoPrHbXNRvFdEbcdhvTy7X8P4hddj4dBhBtcAy2f7j53rM2n9My2",
  "key13": "4esxUjuUeKsFwLLED1AoxdBKbZqQgLpQAcGzkGTWr2vu9YnJgsGgLgxLPow2kLJNwPiyipZRCVxW7dpQPuLimr5h",
  "key14": "4ZsTKmG1g5Lk17cE1k3iZqDd2sa6NwuEgMGigaw78McyJpJs3NWhWtHsKEZL1sVw1a9hLPxV3EnJPnoSeQfL583r",
  "key15": "QnZY8vaF8zLsCad9eRpjmKrjBSYoNV2BmkDgn9BgC4P1iMSUZpQGGaGd3PMiFcm96dYvYk5kk2fKcJwkm5wZW6F",
  "key16": "vzLisMLwNEQJosQF46RGLPsFw2uE9oEQVk1B3UBnGJsc7cWdWgjF9G7UBn3aBsVDoLjNQg3kNTAa7UH8tXS9tDE",
  "key17": "9bEkm2zGzSv8Gf2E9KXFkh6WWkZcJaFYbnsHjwZsyaLXrEPqjM7tRYbuz7GeTCC2sHXP2g3FJxsRnXNHG54gj62",
  "key18": "3cU6Dr8QsusRWGVEYrQE7o2ZJDH1XwrwD4wHPaYFX6YJiJSpfgYRdRgYFHwF59B9f7VtrJMZZu9dK42XdJY7qjyL",
  "key19": "rAm5h9CuYVLtmyaN3B1rev5eJhfbQ6tB2iEdE8vZULjfAoyV5pQQN3kNo1wJYy9D1XUDmrpsE71zVF3vUKT18ek",
  "key20": "2e3meiiKEUX1DJLdzU2NR8KXfNNzyHH3oCHf7yUeUERSwFNvU4L1AX2dpqU96NCHEyhGZd65hC5bRN73r1TFcgft",
  "key21": "3AwNMt3GWvSvsnu6WsiW7T5FP487yFY7B36nBaYU8D1cEkR2fW2K8asepuPHMUMHsoiYLqHJiAhh7jFWB8JasVeJ",
  "key22": "2gjtFguJ7CMrjWzLi1YJj6M99e8XjSJzxLYZHgH6HuosNdGieBvkbMgadCnmN8Yr1FUY2UvQpGSAZ1WefdDeS18M",
  "key23": "44XyKJQKnPs1ePsWf82oz2ZSwYnomtt1NRKQxvnvtXJSsENqi9RET3SdSFBTdTdpmtRJZFVSnDXGJ54XgQiuo9dt",
  "key24": "3bEgCsZL3Dce9mmnmjgtvF61xoACZNZihFQjSnyxBk5MYSL2y8sHHEihU1d4zAvpdngDfM7kLKsPRUSJGqA5fYBL"
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
