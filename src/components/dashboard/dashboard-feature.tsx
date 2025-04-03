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
    "2HhC23JsqH8bsgW5Hyu378hpB8MgRkYsqaGYPhpzVHev2CavUnGVYvK13GP3sMKM3CeBnW4FZnhnPkew8TP4NzpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gSPwHq5kLFbo8L5yRPNc6AisLKMtHgd2gMXwQ3nqwSTUTMuQc4wGFcjq3S3Pq1WdTkmRntttYSR1eWGgPk24qZL",
  "key1": "4wh6p6bCshkaqTCLdrSdAj4LZM4mmSbjfhcyTnpEFWUwPsHnVbqkA7oEPQxYqA78MQmq9HU6a947SzwcSAmYSpoR",
  "key2": "5k6KniaHZVpUxANZBpobxrUzn6zaf16je2qp5WgCitbsDG7UrvajPegQuAq5mi1JVHuPGU1EmZgN6crXZWojHVMV",
  "key3": "4dqfnEgVLNiu64Jc5AzES2ab7Rqrcz91foD3Qw3sXUugtKayccjfQNkNXRTjpiY72hTHmyy962S78wzkzRJ8MNZd",
  "key4": "4LzrGjSo9jehQESEVKoSWw26DfhZTFotNGLie69o1CtXtaVkazj3EbR61YKMyJjJXFjUphjM1ujFDPRZQCsq4WxL",
  "key5": "ZWW7hdMaVJdFGTocNZgnjebzrQUxJhKTvLbW7Vr215z8qvcSqNMkkGnUWiJHVh5ohrzCuAC9NUYrJE7Qn6yK3cM",
  "key6": "2rqW67WPRk4rfaAvsZFM5jE6z3ns7S4ZkHW4f2UK1YcC3MM3QGo8TSNmzwpDhrM2ahTP71XvqhvcX43zMi5iX4KK",
  "key7": "4FwsWX35r1yFBLsni6JEJsbgkSTXzDUv3J4hug6UPUhs1s7itBZNUYYXgsurYCosH48YbiDKpTpUJgsLURRmHnA",
  "key8": "4iXPY2JkvnwBPsVoNp5Vk6Rv3c4GJo5b6NR4WGmZwwWiSgT3ENkSwBjg5KwwroXXkQ1FzRaeiKPQrsVJhFgivKKx",
  "key9": "FYbAjECLU65bndCFVUcLMfDPzEi4Smb7ra5uD3DDUBtD5dcocCLSafG6jL2QzfrhoSoeGPNNw8Nug9rDqVGZVhR",
  "key10": "4aJd5S9d1bJwUusoN9WeNPs4RKjCSgY4BQm4Fj6RipJwArw5tyHVv4Rv4AYDJRkP3he49X4kaG5aFkMjEvH4Vm4Q",
  "key11": "wjCfDNkN94NwDPfN6r2wicYQ6KqwRmipR9LW7YnanBJnoraAC6FNo58E1pFb1XMn8Ut4xwmhFhT5iJmnJEM49Em",
  "key12": "5bHX6eRqraQRH6w6g8QYXBFeYTDMDyS9ZybotxYkaoS1aMWhRBnzpAyrUkYnzGessVPXiQ7Khs6hcPB2CVmRNLCj",
  "key13": "4cog1JVowP4rtyGFqntT4yjwA7nzrxfCsiNW4vVYc9poPzZ3YKirtTV9JMX2EFfWutLccWYD2BwvawpTuYLBfHwR",
  "key14": "4xC6aSD35N2VwMSg1WL1vQPami71m7B1mpY9jXNQWyTxn1kUdSaP2RvvcAiBaxQF9vRZ2zVn5ZrcK7PTx6zTfYPQ",
  "key15": "DSv4zcMC7q6xDiMhGFCVSqu8HmZpsraM1EDd2zydWdjMHAmKMd5p7Ghcow18uFhDT28UYc7AAcVYoU1KhmXek1J",
  "key16": "2yadoa8RvgpasujvtWuZXAHr6CBR9TgM15AwSdTNnxDr2HZARimXd3irG28yFoWwJxYyLqk181LgptCYXHaF4Kv6",
  "key17": "4L65U9ygVkUqtDgf5seZqJ3cVa1dTsYJXQy91VbjPMkW9utxu5LtGsWNZR4m4iVNyBUm3yPwLA4cZHCyPpJVHAta",
  "key18": "57XbT7QTY3CYuYw566CRoKGtcG2R8TNfocguPLST4FrdPiJ2D8qRVRb8NvWy6oMFH7yMbLhirGAodCzvGdhun17E",
  "key19": "4z1xKnDeRRKS3kzCGwp4NsE3CVxPXcmnNhqwGhzQBR3DGW34V2iu4nosvAcDm3i6bgE7CvLAiVKY64jVXDPa9h4B",
  "key20": "5xUTvjE7igXyoi8TUgEXcqWoxR9ZhiqDQTsbis2ptcrLyrqwzzwxqGr3rp7Tt5A1GUPNZ4ceNzh6pmnYedA49gB3",
  "key21": "2G7G7fQL7tAxVAJToabirE1JoUcivV2Vo2dePGfq1EQPCTp9C7CmGhaHQXTdkZfNJiFhT8rrooyrRURXaVrkP8en",
  "key22": "LQ1BAB83LgqsjYS3NHVoaWVtjsorSMLhwMAU8eMnwYPpc3iskMi4VgEU7VzL2pmaPdFW1FfzBPU9oLBkSM3rKNN",
  "key23": "2jrFq7awUdbaTz81L82UKZRTqyDoj89p8BvcNV4bUMVZfAvmXSemQFJqo96TtwHNXkq272tv25oNNyN65o1SsMwh",
  "key24": "5uoe59JnBWcBhVJU3NmQsMkRDpYDdvX2sYGX54wJ2dC9tE6cTpw2xGnhia8Wv99x4wcEg2YXwQ5yTLsrv8Bah6qc",
  "key25": "2QAHmzWDBM9k8Kv4823amMceFHgNJkiXxXciTzpsPkx8tAnvh26rYuEjoDT27yNixgFTQWzjBWVa4rVVeczhF3Vj",
  "key26": "53SQZZXdaiPtYg2kVAXKSsqZiRGaRfYxwdf4FLXWxp47cEgCLTUvGLZnpGPHGqhcmCiN4kiBoYta26yigQCqtonP",
  "key27": "3o9eRNhvt24LUVktvig9piGHgmK4E7igitnZ6Dmaw2N4Z92GYGg2thq7pmtFAZFeDp3MY2oCZkk4g2yE3Jhyw8xx",
  "key28": "34EwopzvgKpfSUcAUKF8DPEUfHyoZFCFEWDuBxQg9nFR3kd8ogRWCBFVdkcrnvtUFFhBWed9PFzMS3wUMPwxANQt",
  "key29": "9PkyD2oyUNzZxWn6gxL44RkvpMkBqnRvt1LN62qzzBmpJxJ69JfZiDWAj3TWfjpiyg5GkvwRHi3Qjpotxhs3EZc"
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
