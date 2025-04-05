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
    "3unPgkjEMvDBW1AQDSh3r3ohtfzvzdzRntwDAZE4ikNCXTw9WePgmayGbzePJkgR8dHWsqtVVsqsBgZystWZejcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KZs3b9Nq2DUVQMUJv2LhmkpeK9JeK7LQwaL4oT3Hv9VQ53nHs8Q5e96ESgyEw8WdwkncZeabG9q7ggmVATqP6Gh",
  "key1": "39ZyzySCfZwTJQiHoDC5tJP31k8dbwf5AHPHBSzMcB8C6w8pshLGMLxWPKZPwz4HqJRuFDB1YFq1PNzuQvnZM3cV",
  "key2": "oxspUeLWzuoYGFBQpLccMFnhbm8tQhU3SqQf3j5VNc5D9YA8MCNyZAf8qDx34ZtPD5TthpBg3UDLfbjjTRxbGVz",
  "key3": "37zPwmBnjxmLowh9y37Ek9o8RdMkRfMVBukviHsLaok5xM1TUDKNWoREee4zL8osWjrFpM97hyVmHmZk1WpCRdx4",
  "key4": "594PJcwQbcQbK3TVtZcku9UBxTamTM8E7vqqc5XEGpA4i6515CdcCHuXAt2zhYypP1D41c2ghWBJTSSkustjzmhz",
  "key5": "5hWVPMe1NbCfcq5F2ifCbVFJJvJWAHqvo13DHwKgUVj9znNwgqSEVC7cHWKZGuJHiwYg7SSNZ7bnFQbhWuNvEspB",
  "key6": "4qbZpAACa5R5nKBm17EK7pc2VUfp8Je4aG1efPJPxc9omYbAW7c3DfKAV7TATYAtkQqjkyYkVc9RuWdzYcWNcZ8W",
  "key7": "zKFhG598o5w3v2s9bZ2HqjHe8Lg3qgKdXCEqtNQLYxbqdc9fXeipKoCJDq4jfeXtbiEYEHbghGkVP9MVPgWHV6V",
  "key8": "4vpvrzLsoX4eU3tQTTo8ruXZU8mYyDTVquMXZRAYKexJC9ViLrykGUt8Ktke1YxhuPZX4NfdxgR3CiJzuQsCnUXe",
  "key9": "5DQSmLRL4twQwjuHTfd1zRhvng3idtBfoMiyuNaxtgzTDDzZq9hR1aTENiY92koVFykWUofHwnb325dbQDDKYDrt",
  "key10": "1Vzw2gzKsZbL8x4swaBhqxq59zuXbTfqJ9FaFapq1xEW8qSDn38fqKwWCUoCKwtw6GxcbZD9aX5enz9SQCKkG9n",
  "key11": "4Q5czvNsQVm3bJuc8GhbknVStGNdAam575FPUaZKPANXLw64pfpfhQJereVF8A3rFNAoDscd3dH2tHJy8B12rE58",
  "key12": "41AniGV36anMd9jtZGFU2zvcbXAmMPmTiePhVv76KGm89eRDQCB7giDZYZGaabLshnhNB3BZvPjJZqtDWR2b3Quh",
  "key13": "3srn1jVCnXZSCR8z7nQpYHbu1Gx3YG4f1XYRPqpGdtHm3ymwzsPm12yYBq4dvifrn2HJazGcN1GVzNm4ocmTAKoD",
  "key14": "5YgRqEcCGjfYFn7w6xPtBRoy8ZVvF3kzQjv52WtfWwNZcrQERbWBpgzWU9zQw4231TVx3PTrpyLunHfFWXN6Jxpd",
  "key15": "4hc7Mw5e13gRW4SJwpm358pjz9RULFv9AwPYFXHyHTnig7xj7cTYJgUqjoAXnrY489Z5qpEa63P8ALhA3hUQSbNk",
  "key16": "3jUhcWsvrooun4AeW6zM7w3AmMoPk5FWtg6SiZiXECXy6yuu4b9VzZmQHMBbnPrH8n5bHDeDawsurncNPGJgGd1o",
  "key17": "3kgAwzn5RCFhEmhUnQ1DXTQ83qEqam5q6BHZWr62FdsTrjHHCX9rJgjPGM1Q4sRCpP6m74bn6UvTnubFZhwdVgVy",
  "key18": "26NEqkoxRWPy7gQkLAUYV8AQrqEzK2SGdo3XmxCTMpXkPxoB2mVGziM2n5jcEimGvZEEpQB4yacZ27TiCRddYwWS",
  "key19": "5P75TvBdttuK1gpVE4Gy5do13x2xrCCNccDmcBYv3nifgtSDEA8AC54wn9Wdy2hRSpar5oS2Fbefi4ndLndyoCL2",
  "key20": "2iq4bSNuR6RZ9bH8NVJvVU6R9KoNAbKDbRM1yz46sQd6xb3hYiMBDfPiuiH5WmWLxFyj9uyAGJDVJAkXR7wxgWpi",
  "key21": "3kQSwG9dRyfNQmbTZryW96oH3YfoQ7FXaJodtQjGJPRFbCEJYEKDu5sngxtQUGf7dWW7B6YvVUKfFVF6tR8ZbSgY",
  "key22": "2jNzHGSFNfrVmUzjJbpNRufMwgPodvWQRJ9DmnYJJm5wfw4gJeUJoVqKxuujcWuFMUTeigFH59T2psebyFv1ZWEd",
  "key23": "1291PxR8B1wktaWoUqeXCyEovM63V2woHZh7eyicEgJ3ykssgfsYatuFd11qejwkqdfBns2JoaaKMPxCzQUp6CG3",
  "key24": "XjS5TWAE2T5wGHgpLdX7VqVSC5ZFrbvcL8BMDPct2skLG4HTuvMEBUZwmLApM8VX7ZKXWK1Ah8TyuG4bzi581Qa",
  "key25": "65bJ9bUqMrFAS2rABhkw7c8T4D3xArsAibCfyzNu9dJ326BSBC9k5F9fm8zL547qo3ueYmMkhc597DZfTs17yHaz",
  "key26": "uRmrGBTxQi8Eh5m3DhZupSXXmJDKwXJaCowLeC5Sd8nQCdEtgrnELDSWKHYq9By239f2bcGwApDH9iMVANe57uY",
  "key27": "4G1pgZzGi6HqW6w4pUM6CszB4JWgVBSesbgPb8EPLrr3C58NjAMroQuCahyEGZDurnFdkg1zD77erCxtjqkDemg",
  "key28": "3BvwG222CFL82HnaDoPCPCTV6Dqwzgpke2ZTrHyVBBSp2NEykWJkkgTNk3Z5frfcPieM77et1Ev5tn88hPbgS2c7",
  "key29": "2STUm3sf38FWnY5BnCEGATaFfHJoArFkLLN7CeHfpjadj215PZUiqbdGBbLZqxNysv8pd23RZ54DDkexVj1Psfh4",
  "key30": "4GZdLxmh39jbc7ieWshifwfG1XB7TiZs8yo4twAyxgJVY4QGZ3U5t2HQYFRekzfc1n6sm3M2c7211uVP8fR2PZh7",
  "key31": "5HTusYCqoWasCXGv4QJoYNpREXmmpx96EnZhdnv3joULBaSm8Fq8AsE5KWQpXQ6tSNuLpqmhgsTBbp2F3NWLrNHs",
  "key32": "vDjwXUKzfpXtDhxoKd522UUCHmXDCryNLCiFJsko9znjHThzh91sxok9sPQY9oiZjjsTasNDgEEg1bAnXbv42zQ",
  "key33": "5fJ3KgnS4VL1TA9yUGHfCUWdD8Wk6TD3iENMS2gdJwUQLyU2DZKWvBL9C3o6PjmkxqriZqLvHWSTougwCwyi5Wd4",
  "key34": "gnDGhGQHQkjm3viSaRQfwMz8v3A1UqZxagWAvx8HmDfJSi2HtnfDU2Pd3UTbf9JCPv3YX8o3RVukLZM7DGAi3dX"
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
