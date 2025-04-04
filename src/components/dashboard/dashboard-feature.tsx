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
    "5eWsDchd4KvFAFmB8f45ZxVD3kxcWuie61mk8qpduC6Arj7MovTC5EUPKdNiADSV7tZvVNZh4R74Y5UVPRkkMekJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qmE8Kurgi1vW3rLFUhYqyU5WJxAVQvQosZF5AVxebz4Qi425Kn9xDwm8pvDtEtpUaWBqLcVTmSzJLhH2U2Yg2ty",
  "key1": "3X4ocQk4j9V9s522vaD2amzyV62FRbCHiD1uin3dyDGvMiCsQK1EgrrpiRYKhJaC6QBY3VkHAUyhgWsb88G7iXEN",
  "key2": "FVj8Mn3vkTWqfN8uK9ghkWjp394H6QnYxZPXySwYs5qzNMdBMHs8iozm6WwYiFBDZfRsdp7qSd5dZZywquh7eqz",
  "key3": "Ubj7BBmsZsxYDXkpJeE9YBHALwdwzHgTRB59WpM2mxaHC2RxvvtVwE2iGpzFptWn54SpTgrDZ7TYzhKMsC8kDEW",
  "key4": "37i8pQFn1fCv6uDJLiBy1CPTpSDdgNsgWpjzqrkVB5rpK6vy4qGMFSJ9yEPLtuTPTwzEBXuWL5nWNKyrSEzn7kRS",
  "key5": "qdh9wS3d3aZMeE3Q48QwgLg7579uqq498pRoqxfQgCmpmu3d2jfHiU78PXsEGeEVZkKga6RwK4z7FeWbF8SqhQu",
  "key6": "DiaQSUPhkHvjd4GFy9tcSqaNFQzT1jAsCzvXbG3KFwU8cpW8JcLbzYLFoFcHPNVpudVqhaeC4sMBkSW4GWUgmNg",
  "key7": "45dPAm7VLpyqLkSeQu17ofGqLc9qyajPqteCyfofsREAoSq5icA7WEVXmYP8bdpWSx7JHDmd8JoW6Xr6CSa491Tb",
  "key8": "3fpAJybZ3aNX7xVZeH5cc7aJZcA9g49UhkJsMfcCSAssSgWRodTG7e1y7DtaC8Hj76TTAHpqo7sZbtS9u7NBnTSS",
  "key9": "4UKcTPgSfy6tBMAKYbGg6zSm9BA71xEmNMCnDXcAYPVfS9UtcnsbqvNSMdG3wcduc6DmEsxvK3CPoAyN6Dyv4LGb",
  "key10": "23MQDhmBTUzTehN8dK2e5udjdCVgidBTVq8gD2rbpVYnWLoc3VoWZiHzvVniw8zjrBKuZHfLvVuqYvcKyXf51BY7",
  "key11": "2i1hSPxCpEUz1yzkVpGc28NFLfvcCcN5RpC17toukC74gyzghz4vTwhPgMgnF218K7io9L8eRBqHs8RBkTX4RvsG",
  "key12": "zHcB49QnLRVrrQpH6ypq3u1TwRkSVxyWhHtwiszzqvCNV7afWLjka8wSfi2DFa7QSLwsDAmEdWWMafhzM8dUYAx",
  "key13": "2dxUj8LrqDkJFmsQtgLhYGRUYvJdPnf5chs8ed1sRXXPLY8vdAVmDUGazzhmUbExvjoMNNRhthucFPgdESr1vGcE",
  "key14": "ZcdskP2ju3TyYWcVcaaq1xKCXawY5TT51QjQ7X4UxHwU5GBoPJympsvrnRXuF2n9KCGqk5UzPGnSZxBimy2wydN",
  "key15": "xZogfEjPYRzLKvmVCM4XNPAM1D9ef5VjZt1BCBzMeygHPKHftHdr3wgpWQi2KWFKrA8bLJpZfZN1rRbEYZmqD9Q",
  "key16": "4MhEFkiFFin8X3YEncHsWeBioyuHCtbwNbgV7Lxfg86ubfMsAV1vWBhHTnZ71h9tiMubtDtcGhesALM5brS1HXoW",
  "key17": "d1fpwX68S1KVimPngKTprcjtsY1Rtbe9B5rUVanj4YfigWmrTMDCzSXKmJnWizaQStH1QKqPpfBECx5Qv2dmEkZ",
  "key18": "4nECm1JoxNv9F2LhSEa559PFTkUUUCd7VYA8tmxC8e1RupFctQNfikDXYacWMLk27qVRpxWQEVCnfTSZsbWsgRrx",
  "key19": "phwQbRwsVqcrmxeoKobmtgTGj9oyk5hHXMznMaxG5tHTu3ojmA94vcSBUKSigqsZtfuA81wQPbzxEsAfz3nNNnq",
  "key20": "63NPE8USQ1TiAx9jH6nH4y5mrhU1RM8tUmikr7va29iKDHxSMiX1CNfV6Ym6VCPZ6e7EWp1EytXXPqU89rhWcw6B",
  "key21": "2pcqCBubEtPUG5aNjouSxbN8si8AywRvGTWh2EDpe4zmriPA5G9mPjQTJxBr9qvmzQDRVxkjGjr57KjYp7cwV6Xv",
  "key22": "4SiyTmyitHYt5Xz7x5hdyxfv6Er4WnTZqA5MimVEbCemifkdASReVa5u8wvkY8X7PQ2sZen43TCNSNSvZGVFwpCe",
  "key23": "Ljvz9nP5rLJ1YxcXNPyHYY4sgGQ1SJK8VqLg8wEWyxppnQAwUtGp36HTa5xX98rzsyiiZfG6xVencT5A7L6cd71",
  "key24": "4DP7ZjWfLxEXb3mV8SEz1sZDZUiZ9iunbC1nBsLvAK859NvKsa8j71qNC7jfgcbg1iLH9WXHQRhVen9uujcReeiV",
  "key25": "4vAcHzEKtXggWeZRsXZf26bqatyyNWYWKKRzyeN9DkhaYqjcqf6EH4sBKLabYfyneUETMn6iiUANZvzJyYGGs8fY",
  "key26": "5BhNnJGsnk93fqvcauGDtKsRqqDA9Nj2wRbgmMLLmiFpyrRSK177LMEY1w2iEWsajix1QWFLbbmRFahcDwFQgXmN",
  "key27": "5hH9E3Z4esYEkP5maXgMp9PSQhbB9xti8QVf86V3hBCireVM5zXzG2AFj1jXtnpzhaSJewsFpJrMeAw3H1i88M6J",
  "key28": "5vpQVNmFUfCwpLWR5NfZ6DsttLqiPRYoT778U1FmVBTiQwXcmMsA2asXpQErTpVYfUGwsyRcPq777HR8ykwSzQYW",
  "key29": "2zL9GEJWH9NYKKo5x288FmT6tnhPNs7ck615rrSWZGiGUZydn2pgUWiCYpeQuvBC1LswqdSemh7erd55qAFg77bU",
  "key30": "423hHY8enELVY7vuNbbePgsrPQ6gX9dKMiXzDhFdq7PAsPsgiFfeEUD2e95CsSCH9qeRp2wt7oybq2DgHnj6Dfav",
  "key31": "4x6siSTfYPFyzPn8iatkMTFfPzCMP3M8Lvyop2UEHDwMfbcQVfpZnvSVZTsFNsghf6UUDk3WpGbZFSpHFYFjC2PZ",
  "key32": "2gkghP9sqFthHTMP73ocM2cjjybJpoShEh6pSVGcoiVMo76DZDoUWygkfE8P53hCBugQtcBiQEKpB3SynJChn1Pi",
  "key33": "5n3QZ5tJphopSvPocY7hZcTNbVa7D9VaN2Fs3eBrbE9KQwrNjekFG96ae43gBn53bKn1kA3jxga1Z576XaAzdjWx",
  "key34": "3Yh7SGifFyHeySFTyzo35u2q4ASJbbwdE1JFKyw2Fg1nVg74tqmDrzeLRXqDQYH2TJJ4c6MRo9q3ZncXVdMct5QS",
  "key35": "4forNP7p8vCRDZnoPGQcSBvyp3DkNzydE7q3aXFHpMCybAMx6bw8vNz77PiXTjPyvjjifcwMjc5ryU2NHZEunHAc",
  "key36": "2MdW5xJ6qZbWgX7gGzJtKjsPzGFUi4VouTiN1hZ3e877V7dbdga6z1Nak69qd12t5L6tgXJKbuEs7JaJ4LmKHMUt",
  "key37": "5CQehnsbCZb59p3Q6QfUHHr6L3rmosRDyWNMH9Yu7ec26E4r4X2ezangdLvSRi31a8Gg7Hkb8HnSfM32QQbwCB6R",
  "key38": "ohQ4mqyejDE1P8yMVjmyCPN8RehrrJ9AiMmWwzEBtvFuyXvbLbbKhzd3ZKPnEhXHojrS8E2qT8RnMGang26T82p",
  "key39": "4SnFpJ9dTerL4GyCxxzUcZSJMnigeUvCN7sRHR7bZ9KsqksxmkkhwrQFTE7Y99TGvXhazRrJaBWRdnktEurZYcxE",
  "key40": "EfS1Bopn1Pmw1rj9K2T3ptdMGLP4YtKDLvpunxiWUJj4TdrwcABZVDcpTLNpTzbjyrd8FqewjDrzyPWaKqRN4DP",
  "key41": "3wwNdtro1xqokUcYkwc87v9EeEU8G2QRAdq2oNFxQAuXjuJP4qmYqLba2n9c8q3c8BoB3RUAPiPjQ8TG7VkehuPB"
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
