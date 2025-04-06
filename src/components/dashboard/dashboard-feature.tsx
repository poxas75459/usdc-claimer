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
    "5HumULUbWRfiN57KpRCpQ1qagNuWxpbUiHEwjCLfwVSEV3poUXDzK4JF6EiwzwoAUj2ditDz3U7AwYSNmT9R2KfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KxxgJQtTLywdfzWBKX2CQcnzv7ZqpMSjtpvDHvF6FtjnGBEBTBaXS4V3nC5PvNkMR559cyAcUMCsu97uoTk3jbx",
  "key1": "2zMujmM463xdUUyB8oDsi2ZHeXdvHDbcpEfoFQ28ExJaLkx5pEPTBvTCkf1JRBgynQ4XcrqYEjcM1sxVM5D16ukz",
  "key2": "66gDgsFqpuwtHt3uRS3ajCRbcvkkjffDP1LEWNVnVzbpHcPQhkSzKtrqQubpT6iTrmthPfu6pmraHDfqNgQ3uUjH",
  "key3": "3Jd7QeqPeoLsNX8FV2Pqngk978XvsP1YjTnhL362dTQB1SB1ps7878UhSZt8LgJydszhDBBbrUzAgqAxa2k2NBgq",
  "key4": "31sGNiUfGZ7VspXwq63fvE6Nngiatq5yGzBhf6HsQcQh3REKemKxq54eE7cZfPxabm1cZFbWsUSJUZQsGD97pDL6",
  "key5": "63UeDqV8jEHgRcjxgtX1kHuJL9VTYWUrfnaYAaBkhCN8uy3ksrKXAgdDJCximaqi7Nj2MnVo3J7yMtq1bmtKrd9F",
  "key6": "d2ZCAGP29cUrirtRg2uXBahikNgLkMMCM4LC5sWn5iQwebhThvsX87sBHR25dbVJmDzstnHRGjGwjHgWt221r8H",
  "key7": "4GFHC5YVKn9V3QQevLdxU7tu9a3viiRLjtjuF66A6Su1AQNPuxXYWp1xM9fCvqAbzHfiTwkknngE5DPKkXJNvQEN",
  "key8": "2YHrnQ4Tcf9RpWgXkeHFdqJQoenG5JDv1mwazj5ic7LK559NZDXpMpJcRYKnKzFxGYE4DVaQKQwNWoqDGYVpHTXB",
  "key9": "2TgT1Rkwk8DTwoV5CZxZvEfWNuaCFThoCxXi96ic1fSvTkyo77HE8fHcY4U51t7gdRYFeWCXLnzVMzHZZLy2t4Lr",
  "key10": "4zi2we78fyWvaiuVYgJwcBQTLGgBug6siNJjszFZECALqwzUt4mrHkEpCXLRMk2uf5tswSssQ2kWEyUC1k8RkCP7",
  "key11": "5Deo9mYF5YfgSAtFiErvXeUJDdfHwEZoVUUL2cnmSLgSo5vbvXts412nvfWmgAvgt39c4CSKPq34kojCbgAPebDP",
  "key12": "NwL7GTmk7NormEYYzTka3y1678KN4DGZvxj8BWBXXnCKuddVWTcYjeSZPuaXHeid6iPJEc5QXhcN5jHmv7h8fqA",
  "key13": "36JXSQQUmNYZAeVshMS7aqKK2ihSTnCERVkHt7R9Sd3YLVskyiHRABZk5GWiNLY1zJ8WV5yCvH6Nd6psezqkjWCB",
  "key14": "4B3ufwJ3MsLeSmXcWAXU76yDTtuWVZ6ysCSsFnTqLiJsLGrNaGXC6MqijYEM7FxT1QwqSLbnTPYTJfS2xutbV5so",
  "key15": "3dCgTnajjmv1uDsAh8aDF15zjVRmJ3GnDPVQxTvWi75hsCXC5zcCn6RW6ipEDU4vDcpZCA9hp35Tyx9dAEh4cmy5",
  "key16": "36WDgch87ARsoiBjNVvS96f5LqGFFaMmM4eRbVNx3wLxegGLEUtKNWHxDHy1oDFxk7ZLbjRkJ3Z6PGV2kAugaY1o",
  "key17": "rbdC6So8RnS9GPTyrbeB5q1NSKNMmmQrN8bindSS5R1BxKEJaXoUdZKvki2XnTtKJsaaU13cNy2GCbypmBAWMLU",
  "key18": "3LVW6g3YKGhTjg8p3dzR35a1kP6PzJeReEybBFCuPAraW3LqNCX3gZXjtgaCBSzyJv8wHUtMNgMUWGWc9a1PHfiz",
  "key19": "5vQd5FJ8eK7jaHTBtZ3WBdJgQ62M8FTeL3j4tx3TBrGuXgfgqHrJJ12p7f4Bz7BBx37yGeMWYvqpEAa4SnzULni5",
  "key20": "2AjZpA776nYNSCVHJoT2migbyAWXuF4LQYaMoFvEienT7vd9m8h4hdYpoNFgYw6rdMA5QdQUNXz2HCEZaxSdsqXs",
  "key21": "4XiYrhtNyutcwa1HaRq1UrT6VikTmkFAFjrz5JbE6kfpqQu7NXr5ugA63NESgsj94m8rFWvMQbpSJQsdhnm9UkdC",
  "key22": "4dNSSxLrRi5YWupM44rQhmfzgCJJ2hS71UCJuwjCDA8U6UZao5g26KiodEAJHHvxbycGp2v3iggEo47dUidNWv2k",
  "key23": "2Vp88a4PNb1eWBQ28cBJQUeDMK6Q2eB27cNuZgkzihWZ9e566pymzSQGKdJhx9yoqqsy6EbkWpoqWzcuBZf8YBvh",
  "key24": "jaC5qQfDkMoEZ5HuXxcNb1Xjv9AA5ovefYKLDxkVfwDPHmncHuuGLeoP7yKpqnNEPhroV24kQdXNnLP5fc5NRuT",
  "key25": "334b73axr5tHjSJggH1NbDXYXsTszYvZBRdPdtLjpt1DMwhbXMDn7rQyNxneUvdYsAt3wuxFLddLfrABsUqxh9GX",
  "key26": "rTGJcrHhUQTqmpQYhQ35VrFNNQqsvLddNcCa1pEZnPWrZ4e3JgYPwdFjNxWpMFU9awcLSpBHhtENdX7DuibaWhC",
  "key27": "5oeV6orQSh2L3pcWprCahWpBDFMDY3fF6YL9QFKanVgPrCjFB5kbUJPia95HjHPSEyFqqXSLaVhHAkNrVZztCVnS",
  "key28": "3SRi6D8kf9vNacrG9dzbwhG86gRKEneL1AEx5TLGiT9cgkMQuYun1gKhcAmDXieLPLxX7Vs9o7AAN66Eky6CshxC",
  "key29": "2GE5BPeHQ9DFfsuuXFNwEp2XXHUozcsW5UDM6bHvuBg1YT6bfHV8ZKK9ZZi73kSyEni8G96QfwmVQEuh6gxJLzP9",
  "key30": "4KUSTuwHJ7m2gGkfZ1nw7MqjmMoKzyE43XcXfe6Nw3YDAU6xgcBAhwbvJyaRhPWvJ8jT5qoTg6CXo6xaq1RdNZGm",
  "key31": "3Cu1x5Tqe5CwspsvaFDUj5mJV8uQDDpVhXT9uTR1Bjw2SiUApAYEHY33b9VarHvj6wdwxeKV99iEyY3Gnmo74Jws",
  "key32": "4Dk8UbzHfTQh7xPDxcwZhi9AkY4YvGg2AYPEuGoe1HzsnfqiNBtobmRErb9iVSrXsNR18HiVbtEjBAJ2c2EhCjKM",
  "key33": "5y7WoeYXN9zYjtyPjBYX11tKMnTXeSbNWDCJ52bQXdCgkjNRAof3Yj9ce3VRSDRt1ZRQQNBw8jwxAKiatfhrzHZi",
  "key34": "biomjw6Gzo4bbdMSfPWQ39F7uY5ChL2aMTRxoRj3JVF3ve3ShqdsVUKtvcgZc5CcuaQdDBDHdsFRBgw6i3CtdaN",
  "key35": "4d1iVyWBzPzX87dTGPewYD9KLfmfNAKx3kvGKbTBnu5EpjbijuFd8inPAMwr1YYLpcS7bqmaPi2sHudhC7vGPzjT",
  "key36": "3qttXgVeqMqXgybaChQ9HWjx2729hCyzBGeAW3t27Ddo7RDmQq4FHF3P6u35SDL4jdUmAkQ4sw2eXKox4SRbJ42w",
  "key37": "2LNnBbBYQyRzkzBko1i4XFScQi94Eg22pCHT4ueFfSTdphV9pB3GqnLhtHepdE5N78jZaJ2eUdmLJeUtUKvQDDUw"
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
