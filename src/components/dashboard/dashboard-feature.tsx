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
    "52j9iCRd7G3xsDGqkTSiSW3WwdEPiytba8Yao3WtHqo9kSokpk92C47spJqmEWfrXruX9KLNTWW8vvwgEWxH9sAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Atmx8QtuHcZVF9rzB67AkTwWFsMVBW7MTretQGwBS4ZwUUqdJAfCDjFVBHA8RQu859ojMM3uNS9Uu9NuY6BSh4P",
  "key1": "353DTaUjydrWShyQ3ZuvwF2ESxFqTP2HkHYcaP1z7dU4LdkbPZQ3gkPKR8Knw2a2QtjqExXzB2mfDoRZdUhV8JYc",
  "key2": "kWgQuJGEsEeomf6cxhRELFBWNghemu3L5F6YMUt2TvtAmRaUGCnXzhXZac4mpFQEWqGmm4vACWsH3PqwgUR7XXw",
  "key3": "3UsVbhszevjjpriMMaWKBLGyPGWbJhdiMGr6pfkzDpFKMJnBP4VQxH3rfu82PBcNmD9JqSG7ZZFnA9dzf4XK5ntA",
  "key4": "2UfsNPeSEqLNKwFKuvsghdPQwBncgrMXZZt7zNFi7KE2QZjd71XfuxBsZrUVReDqw9hYrZkuHHqES28pp9EPXfUj",
  "key5": "5fbyarWVUaoFMCsf3X5KGRUJrDrFiSWCypAunEkTwaVtwGMepEHx7od1qGZHc5ruaDW1wSQ9ZtgiwydpfkVkRYw5",
  "key6": "25Sm3YL1B1Q3zG3Kr6s3Pc55Um4mXVrMWuEVzc7v7Cos1BbuZmUuSv8nxSMgxZdB9vQMD9EKVm9v36rE1sUJHBcY",
  "key7": "4hgW6gsq4tcdAcEFs1Uw7utVnDB8taGBg4HYcJMvHwGxJBmWpRh15oX6dF4duE1xDjKJFuyP5TChTw7PWGJKsXXG",
  "key8": "2Bwnka8PXxMDq99MdX4PaPxRTBdqLgdt2Cs4e4C3HTiTAsDtywGLFVEGvF6TJycKyEczDNuXz71UeKcvLvMm2rg5",
  "key9": "4PPV2jSgNHPHdYSQA6RQFVNmMKL8hnkLGR5ucsueMfMLZDeaAMg7zwf9aNfQtzbpp1wweVXZHJFYCeqfB5LQ4TD8",
  "key10": "4VNSYSw9ouciWA3N8XfifcpDsaxvDdrdunkdh19Gk6pWZNF3gvgDqCaUCwVFsaKgz8CvaDzHYf4hFhx6nsWTMXHo",
  "key11": "5U8i4E9qFAzEtpZxzwpkp7vimir3Wr3G3nfmdmpGLCBTbQGufcv62kCxHBgYm6nv9xBirRWgggsVae2XigPUaGpo",
  "key12": "4aLdrUUM3pULKVZ4VP9QMTdQCr4EaNFEs7X7a8fnNKbceYTLSD9QMk533TUV73kL8wvZeqXcez3eb3AiDf6ThGog",
  "key13": "P6azQy6N9yWtaEAFfuXfhH31Cwbhj6tzmmBHw2YLe2JbH4Rc9XZPoLvQtFpQGyvUUtwMnzrUsMhv3oA8Mg8JbTF",
  "key14": "29DpnMs8EkEMWYRPuXPsH9zGXSqQvtRHuQVfnEQ8wcfSJJo7HRAxkQudtprmbTjCNFrYnZp6pkKbhvGGeWKmXVgd",
  "key15": "3FWBUmhTJBpCNe34UEPTSfu3YPGFZSJX8JXKVcozEKS7gJqKBFQqLoULrvDgQ32vJGd774hAZTQGuAcco55QYqz1",
  "key16": "5y6AkYxRFZkapuiYD4X7NXjj7nGPnCAtdQDL4g7oFWB9G58aDPjbxJ7SCjUutFLp1ATbwWqwuzFZjdjs2K91wSyZ",
  "key17": "5cWR7ELPCBz21Et6ce7cA4ZMCEuzC5zF6416PqRzEG7MvJxniH7ivPqi7qLi6tq3byHxqMfStaCvmtN8q4dtMJKV",
  "key18": "2MDNpey5ikhtQr5U2zH3DegxW8Z8YwYXTPb7wmDBwmZDghF55perKtCnPtBzmr4sdXjcRUDCEjC4NgXeE8F8Gifn",
  "key19": "p4ysCbH4N4xKTyFdLXe4NKoinv6X3HDv7wG2PRZkvZxCu3RqHsUUV1em9D5EesTJGmBGvCGEtgDaAEXxCTXctbZ",
  "key20": "4pV1YGwjnfLhg8WJCwKq8fboKMVgQYbjc2GCCHgrxFHkcfpwstxzQ95HGbEHNUpUYspBiZfq3g1N3czneeVbcFet",
  "key21": "1hjv21u5jmTCA4PJJnGJQRMDseKo8H9rrmBrkMjiCf51nPQkz6wFZxnsgozzyfkc4Kqdv4deMaGwaRCnkXnum5r",
  "key22": "2GWY8LQeb5MaksYyR9VXMrnEcaw8X1z6ZXVNQHRbGrBWuvpY56ExXExrjeFF6kMmmBAUMann6ZRGg7JovtX4WQ5D",
  "key23": "5Py5URx8h2VFT6nqUVVx51giTPtcsz5Q3LnxrYGZR4o6xr7LoSivPjFD5kP6NRndERqpv5aTfFfTsQHjFTJcg8HT",
  "key24": "r7h1kGaYYrAXa7FYDWeVCrthAMD14CfTA2WGPEmknmiaxYDmXz9whqbB2XwK48jPcfWJfjMDx33TNiqpaUgtKxN",
  "key25": "4WhvCykqKuxM2YuLbUx1nz5qk4VgdDhJE7yiCH681vwmJDBK3DKCsqnuM4yjGeBnnsZ5edHt9imBxS7uPdJtHxFz",
  "key26": "275kjqfUgHPVngy3xvweKbQ49jebsN7Fsqigq3ajUePoasDo5RS3CTKNtp74YjUoH3cYVnZA6tBu8EawbagsPdVE"
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
