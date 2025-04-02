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
    "4Uk1q1dkNcrME5TAJRL8oz9bGNqb6yXdm6d8MSz1dWFDnMADrUS6v6PR4Pj9UxoVx7gTgKJNmhVRvG7H5DgXLtWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o3da95dCjh4YAUrzFBaFSfuzQcXoDxcH1LEazezbEwAszDTQnZJoy22TXg6ULmy7Vw7gFXcWM61Mw4pdYS86Wwv",
  "key1": "55Q9Z6xb2gX7wjeU3FNpvC11CVR4E8V79Z8GEWggCfpnFJ5ray6VAQQvpY1mmHKrCfBpchbb8eT7xShP7ReBivXx",
  "key2": "4S7jDNyG6fcr49sNETaxR8aSXKUdhAp4YwSwhFXeW9D3XDJ9541JUTPaAtV5SLdrBYZN6HDGKysjjU5avtJhTdyr",
  "key3": "23ad2iWaEuGpBySk6zaZcNpckLqbKkdG3mcujuUdGUNZxntdvZwQUaDBQSazXbbNawSwViYyRLNuHpVu3ZxaAKEo",
  "key4": "2nzzg7irYq1PYrG4VoapUGywJ16mVomPcinayC6qM4XV869RcS6sk84F5QBa5soq543UB422LpB5xd4uiAZDhKpC",
  "key5": "2MoT8XXNeGqvdRRhvVy1tcQ3KsV7psbipZFoJqHgHiC7YFL7Y8zYx6J1jjmdmZB59jrxdt2Ta5h9UMW1x88UVf6a",
  "key6": "259ZSnXi5oqWx7vVLBo7st7pyZtwjr8eQ87Q4QShVSjt55WqYQA6UhWoA28fc4xbDogyLcZdWtP9nqwqaBURGsZ3",
  "key7": "5bN2MxjGzD7gfgadCwTEhdD1h6xoJfc9Np6Wr1brrHMpBQ56X6d91YARrZodACaVHerZ8NuZ1W13xkjPSHXGAGSh",
  "key8": "3CZAULshTNwVuAuhwjjCbppYuiAZWsGwF1fCWg4188DW1bvRkW7pWhptiKkdZiJLVyMWYAiqqBcmkVRHAJhvDt9g",
  "key9": "5YYeqMs4gruybiLefNTgaEmQoNU8pVAj6AqczpuBCcaqrkCmfAuySeXMcq12xec8AkPTT2xzP3xF4CkDsfYhktPb",
  "key10": "35scZ6btYo7csSfq4zQXcZ4aV4U3tCsFGMt7fVaMsh8jCw3bzSLYTw1FSSfBCWF2wFmjer35Ey3jRSMkqDPM6bqz",
  "key11": "5PXZh8crK4Uj7ukGJZrupy5beJmN5LYv3zFAZYvqnRXYsJDN566LpTsqVxAAHPSkq7QnKzKLoFQUGkzvMyfKsjUm",
  "key12": "5beMSrJfQb7cifwfPFfpx4mSQXTMwCJKNDSXLfCUF3fvRdGXXBPDwfL6BHoTbx2vYfFoWXVvpsq6Xtppb8e9b6bs",
  "key13": "4G6wbXJFgDZUMrCCf33G4XBL61Wa9RBTXU5Pg96vk3bvyG8XgGvdUajUrWoPnEoUWVSAcdD1sMYEdokTvXRJDET8",
  "key14": "2iMsgTAnBZ8hE4QAYgLhqCGoRJJA6XyabQfNUWePNYyouWboaoDc47b2q1H1jgvzX6PNpqEzUWVYwQCmJb5KHgQ",
  "key15": "5ZmUTDoe5vcDqYTh8wguHUVWP67iHtmxyQb7Zktbjwt6FpGyyxaiVmT4DtgaLKeMn7izphcgXb71NoMcXWM4CUca",
  "key16": "27etwELwacRvfPMoaMEhx9V6SK9HVpB9Zckh61DY7daTGpLZa3o6RKbgn9ogx1KYxy1gfwrHop1VVKdwEhsGCeKm",
  "key17": "ekwdhJ65Z1FLcNfkMsEaSkfKSJWmp6Cyh1X788CPnyZfzLAUjfaNB8xjbZwzkQM55sTLmProciNjzrnFz9YM7Ho",
  "key18": "3XCX9AScnm1VmkXgVi2VW9CL7BSpUa18yoBWq3tvz2u9q9PzooSR5R3488nuPA2jq8NRY24b4m7QhSZjv8xAjhvT",
  "key19": "PfJNsTsNeLashn78vqyw4fRbeNFQgsgcRyTuJ7n7YGYMykgPpAGarR4y9Tsf1MX4voeWDKG8Ptc6rsainFeqR1e",
  "key20": "5typ7pXeL2Sb2Qjb2G1HWYvdMaauSfBjCXrftWx8rMGbjapB4eCXcAx6RxY1s3zfvNQ5ckbYAnhUMpq1uqJyupjp",
  "key21": "5AHGwSH8KxNYbm1S9uCBfZeRSy6CznrGAtv8mma2FfreqGaGGTrtuKDsmxv7hcE7CyPjHnr9vmK8t7uZZagAZELs",
  "key22": "2336VUVCwVwUcNLpyocqBDrgJHWahMepVmcVg1J5Bmmz5HhSpw8FJxoCbKAZSRYiz5SWZHVKU9npMkjUxE5WXp94",
  "key23": "2U6QAX9V31wvRkSSbhmZKPRXEoseouYvCca9T3Z5wc5SVy81Lbvn22NXgYfeobGv7H2JMEqjJjyisVAJThLTRPcK",
  "key24": "31rS9vrkCFeZ9a8rYf5jFDgrUGCStyMJk2GMu6APoUWiA1Ku1Hn6Z2rkiQ8gf1coVGRRSqqjW1xbrin8NK9PmM1z",
  "key25": "MFFdMamh1LdsJMrLviJYYYe6a2croaSRVYYdeaofDdp5CCW1Y8wtPaXpUrPiCDTiHqPFfY3uEUrPG2GkykUjXUP",
  "key26": "Rnn52h9prD3f56JYy7PvSuryr5pcaXQ5BiAMyHFkmSDDwbmv1maN76RmzqGhNXRybDZ5hiNAsHSyurzUw3PzXAd",
  "key27": "J5WdwYLSNioH2SADiDEATjNvhty45cXpY5H68UocfrdnGLDLo6sRLM3r43rMtf3LqAV3TX2uicfGNTxmLnLp9T3",
  "key28": "21dzJ4Ned7ZaXUKovVSmVmCnZEXCxZ1KupdmwVCagVXjGidTZpXx826FRzZcK4zgJZJ2EyLAB5YhhCWMcxUJaXBV",
  "key29": "4sgpDYvGWZq7VeHqqQ5DsMyrKKuYeMQGs5Ec6aZYTcFHGHBypQCLNKmqSqUf3tinZNjFRbexkRqe1yy6mjBpNBbz",
  "key30": "4CWXB7oSwsYpX5nyh3X58zsGifijycRPpFP6WcobzvLn4fgARJjLcCL8kNgEbz9vegdXPZYHvwGgyQL8v3tVDQAj",
  "key31": "5KA9X2eckDKmgqKNzYXNUdVAo6oovxuyJrqjTss5Tk6a5JM64EZWP1SHmhQ49yVUaTgVG74mecQm3Ftrj1pAF7e",
  "key32": "24NboAdsXPEczoJw4PHvxhpr8bMLT4zkFbUkQod9L28Hn7cBB3QE18RShySSck3Vc2k3rjoMeSujbcichKuFoHsL",
  "key33": "4shEMhEvQEKxbtZXPJYhLg64VY9ATqPrLRa1FJ41MHVAdLU86KVEoXiKhbwoTpVc6C4HDfvH4s9jRoKVq8wQXMhR",
  "key34": "bwzzBCxqQKSQoGCFxAQb3rafeyGattvtyQbWnrwg674GJZSyDwxRwLTMYpejucxspwqNazeMoeZCvBEEsjkR5jT",
  "key35": "4NuvCtaye2yfcZMP5Rxw6pwnXthHcP9DT5rXorC1PaAjFZ1KS6D31xiLLDSCwi1qgiVStAF1zeW1cAwFxXtn965s",
  "key36": "4Sf339N7193e3kjkfDxwpM2ZzcVCcsbYETRrzaK6KBPUitYz2QCsqMk2nPZrG1jiAvxz3J3p3kz4r1F7sqczkgix"
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
