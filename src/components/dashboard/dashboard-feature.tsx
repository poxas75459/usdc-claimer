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
    "5XTf6ioNdZ1iR9gmSFBdMqQgPZQgyqM62zzfqZWokge62fh3KKwtFwC1Zpwms1cbGMdRFzJHsgcyB7jwHsaP7LQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZjdhJzTA5mYKzzwqiEVavdZc8QByzYH3t6yxTGSEB6FDVqVX4gV37KPMi5GaMSRFBwuwA6XPrTJoDT9qzjR7Cy",
  "key1": "5LL6D8yWcEGPgLzLuhQKfbped7mjHjvG5gZRCeZevdoD42Msb1LJNxfPWqakxALHL1txqnECjsgFRaWPyQkX7YAX",
  "key2": "jXcm9UUSkX1coUVqvrbEqL9FvHpAAx8ED8LggoufV97m5PeTZLenc7gh9tzLh699FJ8LDkKVDPZhfkLhYABKu1L",
  "key3": "38keihVTESymSZE3kTVLNLbHkU1XdGyGsSSTPN1UqNmrf5MYSqScVEKXsRAdZEVxqdCr3QS43Z9uXwA7vW3jnS8c",
  "key4": "RGgU1NrhHtxxXvAqjLVUwJpjJYLPjpU4TZReuYnWNvNorXAXnPJqtou4vgheqKQra4YgJNbqfTiQoxBzhoZgo6x",
  "key5": "3k9FCEKR9RE2RyGmfi7BEU4aJazq4pbxNQGgkRnTsRpoULw3YVgzGw5xQYAuaxbBpek8rxJrQHKvAmw6uhdr56G8",
  "key6": "5hge7wyec5Q7joBus8aa9na7mJVZMARcXUG5nA4bkwSTgBNAs5bSt1SWPN1rTMqxEDFSLED6aWiiCYMufJempG3h",
  "key7": "5Go3Xpu9yoXNA3ByvwDiX991FQeN25KvMC3ETBJmkhoDhmvsmLyrFe3WwRC4hiUVd3jQcLS9vEY1R5gUF4oEEuUn",
  "key8": "5LQCLY5m4JyR6BWNPN1MYTkrvERKiGSkrbewiHJBrq8JUhjrucTYXsYQQ4ixyU5Qn9kGGwQERDW7t5N1jRQEXKYS",
  "key9": "FxRXr5yaEnGrKegj2AnHTtDQrYpceRjfgp6WQJqoGXe6va3xjMB9vCoPVWM85wiAfVupJzGTQkG5d3uwk5oXBLC",
  "key10": "67CgKXd53vpwYqi9P4KR4gDoG6BdgjR3dDKimnX6oZcHhRUEypvZg7bP2v2yyUJGwBeMmKz1uA1e9eeirzSW86U7",
  "key11": "5xEeoDCehEDcZkNUKmDbmha6qgm8UDGSLFqz2sYbHkkWXqSQs4jBVMkmVtVu3Gm54qausWta8iX8K9igdgE8rpTG",
  "key12": "41sCq2b277XJA3fwMxi97Hd8UurTC6yAHnhcXi53ufmZ73sfduGyUE7n5A5vR79HDtNrZQ2AukuapCwhDQgenzgX",
  "key13": "5Goi73zxvga2LXytG7v2t8tnwokP2KYHptpR8sJ8aVmbTamW8eZnbVeMFYEW8DQujooF6pgovvhk5VKqfPKjeTHF",
  "key14": "7ABM1HyZesH7CwNWuwpEaLZdNw17bFdrAf86yo4uJdtTY9GCdhtpuBGvJ26hCioi5cm7hZromqbxj7ip21LWy6m",
  "key15": "3Bby1bqeBTKWMzhJ16bhmshbfQvXB1ZUDZuTjhLzpzjrG21itbAzTHV4kC3BCqHfygiGM9Dmz71KYY4yqWdJn2L6",
  "key16": "4hgWh5oB45nXG14ZbHp2Pw6pNhEtVoMv49MzJejqg5NvfRFqFrVWf5hU8KFpzUvrK1oZCjjVCrWVmHfoAPSzCoJG",
  "key17": "4omWny1LWkk9uM16WU1j8WLvqxLWJCbcwCELg8iKPAk7G6aCPar45WeA3YTBCuiF4ebh8xGMyyr6pccNCUCUx4Ca",
  "key18": "4vqJWTLD4zscrbX9YB3wnKy8AWWJUTuWoih3gj573igZETwAuyVgkVNQ2o2iATmvuLXHxxb681gJFM7rqwuqBzCZ",
  "key19": "4MjwNRrGccTm5fvzUikmiNZ6iUexQswCGpk17mZkd5GCSKbwje1EKYafevtUthvbJmzvtxnnvNZaPpK2UcmUyUfN",
  "key20": "5VefgcwrVbDZS4h5n741D8XzoUhQ3s1BbVPxWTVgXRQXW52Gich7k8idmWgn9FvXyfne5oaB16DFnRbVpoMG4WWZ",
  "key21": "3TcyQzn3K8HHkGV1AB9BTFZqA3mtAfLLfa4juNp9ZKqS7hZZ6j6e2BtpFh3P1UQJwvYga4mWcNkVTH1yRYcRNUVz",
  "key22": "49uCkZgkywNHtk357vvbbmAWY9sWtVgrrFZwrbh7uYmn5Lrpgvv97NC9JhkKAWZnZZv9uF4XjyBgAes2CTnkjfyL",
  "key23": "7KuoonLmfkzxxuVQ3B6V5HJnBGzK57ZSeicVi2ftQAFFAHRdw6tVDE44foJmwvXbWmSnZcFgB3WzjiKX8Q5GLMC",
  "key24": "5kaVsNwB9KG1Y7jdZF2HZHweFoLmddwoN1seqVJ1k7MhSrDcE1RHkX8p3J2SE4muBgB6YYchUcYeJTh8rrKt3LZg",
  "key25": "3ttGxt6CURje3QKSSa25SQ4fcARvTBR817gPoVf6RmincxpRYzn7TNLQLyfBm2MKHYb6MRorBSzARuqsngEVButJ",
  "key26": "2XnNMofRYFhqh3E7UBQvfPsAj2QzXEYyt9H6shDtcQUv7jMpVaZ2VZz8VvLFQMP8Q4Jf8TPgdtrf7svVPLTCMNFP",
  "key27": "2hqCr9b4gHpFHpLqieyvPnbxGPu6DDX85t5vfuQHrdc36V6NATvkyGnh6JJKKAFpFFnMGPVntXfSth3sLUjHrEPi",
  "key28": "4w7JBCPnEPE5PfyMkSa46L1nqrPvtfXW7hqT2RjjmDBiXr5wPxkyHev1qXBWztLJo2fdf8HE75U4Hd86iWJKx95C",
  "key29": "4PV7YNogP9snynaXe8UQxciuw1YJEz4LwTF69kuGqjh4c8YPynMFCt2Hd58eGCwtH15j5RM6acwoePQ3Fbin36CU",
  "key30": "5HTRdCueSrBvfoteDGd8XVPesgQFHkV5RGC6te17gMo5B2ZhjjhdxGnwsTXvV1owPZbUnGKHVahznWG82M74wd11",
  "key31": "61wGkYfYiA3AuaPi5cc9q73GEi15Ttv9PPBGyiXnXFW3eu1Xg47DoksWoy4cnjDXGL2xdrjaSGSjmsRo4A35iV7C",
  "key32": "4sAv19UKVQKQVFhNWnW6zWFAwjv9EWqTiGYjC9xLSKjfCwJwafREk1x1NSDYYDhwj2ipbzGsNyiCCaQRRmXSCHd4",
  "key33": "3Y84uzPBcorASMRZajDuEE3tvdotVedzRcKHcpedg5stYzU293259vTEwBUTzf5roLj6UDz4Yd88LzEwoPFFvyrg",
  "key34": "5gMPvvXUMDGW64YgrW3wMZLD6Rhgceqv1ktQUXtRR7Zom9srL8nFaphXn5UQKRBFspb5KCi9WB47joy59zXDH95p",
  "key35": "4G1qtF3NmtwR7ZQ6WjSYZVnd48L5xbPVmvweBphdMMmUzw5opJj93f4nSHzN6tdoBozx8hEcGq3EyoVSdifcjhy2",
  "key36": "4SYvcbNdYX2HC1ikhwUdZaFxr9zypTud8P1FyDeFkdNks1xVwMrPZroPLnvPLEdTqicZrAmyGwyc7kd4KYChiiBz",
  "key37": "3mjtT87mKAhMZjWwrKxrSJqW2cnxxHQgWx7VbSF1omPewowU6nosGyrS4VWiq6dAU3TrTQSeTvtMvSvGxettKUR5",
  "key38": "41F1pwoHkQpj3oKftSs8zLGtTgmmTPhQGWSPnD1t4UbUzkfS3f6RJR17Ytmb8bwxzBYFUJos9eJZys9mkTqY6iEv",
  "key39": "GuaVciTvuXd4WdQiyUC5BAJTbvzpiN5r9ZKjnJG1JmGLp1ERrF9VghD2grdR3je5JjUwnvdrjbqGtUiqKYGxamS"
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
