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
    "ySeYsgqSTwTsgb8rrCFeYu2csa4ER67X2aPyAp5Aoyq8rQcMWL1dCrsqtwJkBLneveyHDfqNHYW1HSYQcA1qPfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "662uAVRsQn7jxbePHsJoUvZGzCwUGwDXr9JogaZaxd4i58VHA6ufn11HESDRXNrYFcz29QD1UTHwvxwFeUgsAHB5",
  "key1": "CRuF56EdGoDfcFV8bhNWUizWwsFjFbpdAB4eNccapK5GewUF4E7pWZYWab9dBwEMwMn4yLpsQSXwyooKasEbdeW",
  "key2": "2EG7fiEDtoCD3PiFfbrrjGkn4veYdywTk7nYPXd9U2aGGBMZEjAFnkMeDsnHaxBcYrD1MkCqvqhnvsuFGGyCu6MS",
  "key3": "4WobyxuWLEcRU9KMMy9mnTUfxYk1F47SEeUma8V1Yu6NVDd5yp1sHvk6zdWrQF7hftqX2eTTXFWznVsCJcUc3bGt",
  "key4": "XhNPh2RaaFGxoEjoTx5VgAMXb5F1KsiPettvkPGgw45jvhSehCSNefqDXdy5JSKpwC48SbmrmxgcjcAfJeWMote",
  "key5": "2it4z38d4LFsfbjLg8vAyPK8KDW1TdcZbdtzRiHKjypK75k9hN4KATtCJXa4PgFHPPgW2eKQpSwQ2UWHNvMm3WAP",
  "key6": "4yvte4zjv8xBKmU8QnthSPE7cmLpkt7E3cXdCkEnMv74Yd1pJE8J4jDZLP3sBVbnzhmnA35a3rhCFgin7gshnA1C",
  "key7": "3tQ6yhDdQ4N5bbfFEmBraHXxu9jCATvfcJniJf9CTsiNCxGDfHUqtCtF74qr3mcBii99yjMJy12C51zugNK37rS1",
  "key8": "4FtrKTQPhPZyHDbkUbf6PAFtwCdxkYm7rC2dmHvxK42LsUgDUYaXwc7Zrh2bvNCGVmiNNCE3BZGEsc9NfyjiHpf4",
  "key9": "1NvT65E6cArHmdrp9e1cMvQCcHJBWt4UKMjeY6mjc5Z9XqjYUDrkgnFt4gc6RyDFYnHYe9gEP7N2tbLMiejcFiH",
  "key10": "427YxU4hfAoAxbhEX1Bs1qn8vSFtxRhWy5uDgdB1T89mLnckW2ezK58v14rg8Ji3NEwLLMGTZD4BDKogzDP4JU77",
  "key11": "4ZwmuDRsqSoKPGTiMq4kU8HtX7WDkiwPKxKpqFBMP59y8JnrGZj3ydp615yjzcZwshpnhpomddrt9XhwvNueN6ZK",
  "key12": "4pPZEPZ5uqT8t1PL4yK15UffMkptVQhBGrokhQcWd8pMHSKjQzW7noyGRJLQmWRosW7gxCp3x4t5EvyygSsuJFFV",
  "key13": "4FjxV2JzwXvMNMQBda9Bf3SEPHAEXj7JbGzKFQeMt8U6xrUsihCbRwz4V9hezCXTXsjGBqeVzfT94DxEAqF8JiRn",
  "key14": "4ze129D3Juyd7z1Dj6CQXbHjbeDUh4CUVJKqtqhZVn6Q1MiZQEKhGBL8cfJhdw8vbNtKBSTVDynmhJSo8zcNq6UR",
  "key15": "UkfaskhPbni7HNE3rSFaKsaGzoD85zHJULBFWuMYtXHvdREdk9E1kuzWPnpdfcNzJTBpkRNtA8Xwzuhzft5TQ2N",
  "key16": "55jbLatHeLMAU4sMjXSwrC94LtSf31AzrvJQiVZX6YFTEDfaYnDGFs7YRKox5xW19rrVRqM5iGMCYNe8eF8ftFZp",
  "key17": "3qAMWDU5WmiNsxDbVwNcTbUGnv9TQvQUvFzdjBGZiiZ6sqHr67AvSabyTRVjFKsttCcrKd44Trcndve1EW9BQ39F",
  "key18": "rH2hPohutGocbKEv5ix3odoK4RTkV3Dsq7ssuPELTHjvciuuaSNT7iDUxPyFiaPeah9LwVo8enctzPRWWLNwJfX",
  "key19": "2bwLX6UP6JY9BozLtBM6koVgJRroxgVgqHmWdzBAArzkhXiLNU6Gwo32MLRPHxQhiKVHeccJBJHPRwnJgWDmjWS1",
  "key20": "3WsyD71mrcvAoYrjTHeeNdSeyPqj1dHbfRuwb3WwWFKbz86Px8aqzNRfHbyQ4qksQ5j7zFakAmM4YG6iaLsVnQyN",
  "key21": "EctXkVsbxkkbZ9AaSUBjW8o2Kr6QXX58SggQBmjxuaBuNMRKHRa1A3SxzMdWcteLpKxmZDJy17785D72eG4nyE5",
  "key22": "3XqB5x4JRiFALaYK5dG55cdWsEgmPBo3f1E5CgnbC6TEe9mCjbQYRV1MruwoWZ8b9v2P7TeoLiZgPegZHzkqxbUn",
  "key23": "p1YmvrRsog3H6ke3XiH5CtiwAVdY1L3o9X7Qkend6nHhmRyGnRT6aXwVBNQdrm7XbFEsZ1Vv94tBfgogdSmoZpS",
  "key24": "4MkJ6oSsWC1AV4N8zSD4rjo5guVQMPpdmJFwm8Q4y2fejkfHpHwsZTDLiHFmb3JJBTVBeWQgi81e7FHh8wvwNUfV",
  "key25": "22NEdWU7eAmYUcbrje4jFW1QzUqkGQEE6FK4YUyArYF1KiEfSRd7bUPxKV29mnb7U17MFkoZoetpQxeqro5cKodM",
  "key26": "ieUHuqkeZteETP1fhpMXScXC9YXco9fQmfphJcZ4wcDtXawML1yxqZqzhxjefkhm7PgmspFmja3AsKb899pPzEU",
  "key27": "57d4Tm99ndCB9NGqrKNnKxqtacmGqhWfwvByCPX8TZt3VRRPxPERqMntfiUffLL2QE2svcrPosyvWeCXp9hKqZrf",
  "key28": "4GaWD8AM8BBDipj18CdPDMT6vEcUTPQjj24tT2fta8i6ydNqBWD2Xfiwvi1jwAgwF5a3MLHwfpM9vEAtzT3RhU9T",
  "key29": "1EAdA9gad1wsMZ6K9SaFUdjXfwAuJoYn8rKbgSqwong49Wh4MAQoxEBSsoouN4oRm3t8Tv4hHQVbvktVcdQz4Z2",
  "key30": "2qbrJaQJUuUtFYn1pbRaNtMbroaGEcxbNfFmgFpT5BXXPSnySExNS9VLxVjnkNadwzA7HYihyDeNRaoTrK7wEBkT",
  "key31": "53NntCTV8C1vZ2Gp8fLTVQgspEHDRWQdzvn8hHuCppPmuX4jguftbsENL22iToH67qcQQ4muLhRaWDrDYw35qsHb",
  "key32": "2xZCmGBE7FZADW9oaBYq55FrZ8UwEKiSEkdJRXLmUpzmXxNjFvSVy5X8WoFC3yPxA58vjAXrSZo6FsUCAGYzFaP1",
  "key33": "4KioDV9ckzTdV2vsWEvz8H3Zd15WUjG9tkWhsZgFKycm7UVExHSwkA1bJx6rquh2bvjNLMDuWhud5xRTkQntRKB7",
  "key34": "5dM2jQ1myY5nB3nr3ky6roz3C7pYfuwnujLnT7vbwqfRvU9Bowr8suEmvqmjThjTwfDZqqiLhrtthQ4avwFZHqtK",
  "key35": "368fbdeXVMVwKCKNwCPL6KgBhbSDMgAbwws2x52VLScaHfcrsWySrZLHw7bXnfC4btxc5MyiscrkZ7D19KyHeoEQ",
  "key36": "ZGrqxnd4r64VdDe9DKAkzUppFDDub1npsodqjgh4c8hh3PyswrtRaSET72s3JtVuEr3zWBbvNyF2BZSLkvFF7y7",
  "key37": "58uWcXzpqzAG6va6Lsf3NjJ9G3TC6A6391wexgdyTTM2NoKvZWHfXRu6oFgkXcpmdHZwr4USaRoXiHWhgfZcYyk5",
  "key38": "3EuXuX6QVDAMs3dm3uNgNxKySSMm5Lfw9LYwiWK7ukLcuBMEFsRDpxoiyQJeXU7uSmqkcurgwATNJEqtAQLVWGsu",
  "key39": "2Xx7sv9HwmAk7ouR3H24ZZRoBADeJmR65xohoPjegU6ozqbYwQF1wZTi7nd9JoNoW71RDDnnKNAj1pVTRX1YrDxD",
  "key40": "5yvsUmZ5TmurN14CXqGM5UJfpVWsaLKKyPKqzE3vVTMN8F8qKpfhSR3KxnbgqFSPV3BHmkUvDd9v8vQMnPgtDQcy",
  "key41": "4vxZu94HhyWPAvw62vCW2GbgwMp4cgi4JHrvUDFWS4fQCUNHVwAyGSrL4mUnQP1jVh6e1dgQm6jbeFxWrkEWQ291",
  "key42": "29HZinFwm7vsSZL93AqBMztH6aMr3qh6tXvVqe2o3NUXZVnU663gGTxRd1HjT44M3JgmzmygrRJug6R57MvwV562",
  "key43": "4nXTRkTszeghu9qDj7sEohKRYu12b7mJcXoNJN5SUXmgpuJT3QnGJzjLC6tjGKHqPdbjf6Ya6dM3qViugqjLMhw6",
  "key44": "5ePpaM8kXNRj35jvpaHBwT42TN7w7PvRFEx4XkypGWghXikGr8eXGnxdtPmQh6shLrgXNW4ze9jWVfJWZ9uBwn8Z",
  "key45": "65tN5w2Kh4yfHqniWoeojvxvBgQAY4LEou5Mp9UrMAZgwigsPg6A37LmXdDrtjMwycebL4GbiTBbtRmy1mBqWRdo",
  "key46": "22sJRjxbFRzRyM464GZJyc6hvtcBvbS8XaBNNehyYfrDgpMTjaGLS1M34exBL7w3U5V1gLb8ikCGSR8FVM79Gyb8",
  "key47": "5VKyakzkoqWj7bZAt7S2apgoGXsT4JQSJ6LXytWEWMehLcFEWFGi11g4jRfzqaTKsrwxnwSqwK7StT2TZPfxind6",
  "key48": "4KbBJ2i3oUz7RuTF1wTZTL8APZVufQfvcrZsPvEG1eugeTzgVHxvyvvG28h2oZNzgeuLzPxcyj6G5KMYWZDreBTg"
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
