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
    "4Wsx8rzQj49ADEzJzeB6nCc9Kezcv19hkjQL3PR5pYNg53Jq1Y1SyF2eTwFSBnzAwoL2Zj1qHrEVuw7cY8LsJiVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TXADxjewa1RaQtPwq1wqoi3KqhP1ALFrL9o8rs47AiZG8T19uzcHqLAHtESQTws1nMdtvqi3RgjhgfzL11uSfDQ",
  "key1": "3K5RNVSzJQZwomb3xgTNB44vTovEQZxcMY8RLuhcapTYyFkxr8YhzB9Awkq5jD4CS8R8xzJu4UFNyf38fy92rLL4",
  "key2": "3ihj5CQJzKWE4KFG5pkFEvRMy4HgTtfP7NJbepJdTXqsiEZZSPReky3Fx4bAdH5qjYP1ZVfQ7xJBbA877eKJLp4s",
  "key3": "4MA7TvEXfZdZvbcRhExsGXzKsqwSJyH7FC54cCCpphnB6s4ET2Kgv9B2HecBWU3TJSQZ8b2AVdZKxxYQsKBavPsC",
  "key4": "2eurL9Rqj1oN9FirACXjaezeKvmsdJ2TSyxy8QK9JWjnk3if4pXbP4Ja9cnoKj4fuJM6Ly3VsZC7beTj1Xn4JAq4",
  "key5": "2tt5EjNktvRQ5tgDXxM32ubcxe9BXKaWnMqyEeh5ZYbkoG149eQ9z5zBf4T9zB6FTjX59KnZhSE8nzrbjb4miVBL",
  "key6": "3DGSJyu67VFdxgUfAqmgryd6hUi4L88xPmX93Xn6snHG4EQgkA2tpu5bRdoYgyX1dMPF4fs4vDwq7DvMPHmvkfhp",
  "key7": "HDj9FzfXY81LkTcm3intsGj9ieY4qCr84NzoSz7cCj11pQv26juaTHXbc3KTqgM3YSeoxKSwJccMJi3NisVhxx1",
  "key8": "3wtrXGyHqdVCpC6GodkDbbu8PAiiavDcNi8iapkxGEVNUWwdmirwtaUi4ZMymFbzGVPNojz5zzvEJMt748eeHhp2",
  "key9": "46eMJYXebHLFCi7ZyXkgnXuLBGCQCybhwbo93U8rYvybJXzEjNNEc1kXMFXjRFdi5FkzoyyXqSasnnoTW4x22LEn",
  "key10": "4Pe3BB4hbRfQvZjkgc6ag3Xw11SF4p9HzgcMCVLdPSHcqYXPqQZMcMHypSRQSdd3ZkdRubw6M1gPjjkAkui6RsmC",
  "key11": "3s1iN2y3SzpcFv6aF5HYaespSrBSmR9U3ZEPV86cgzqEf6dG6D3xPoJVuGnojyxfu6xFKaxofjycugyQ8JAbhQZr",
  "key12": "23HsDSaW92LRb49uaSWjZvVWvzk6LXykm1r5P2xuvyR6eBhTbVMgtNL51GEx4S2qkehPsG5KQa1Lz8QwcLz8TkE4",
  "key13": "NekyqzCCN7gEE6dVrEWfApLnyywUUxeYT8f8mFJrnzJPV66P2jKnQ4NhvjQGd3g5Kzy1DLat4MYVoz9aitu8taE",
  "key14": "2q3Wa289SY6xgqPh56P8rMaUV6ak1sHyj12A4EUyV5Ui9svWn5XghfbPFUzy2otDrXA91gRtkzpdEKfFKEAkqc9f",
  "key15": "fr21HbGMtwrw5p8QXg3YsAAwQmazwgqe5pKf9htxXKwTjrqeRFqq7jNcrETSe1SnstedPexdpmCrtRAC1CheRfc",
  "key16": "4C5aBhK91QShank3vSbM5ehAMYQVZ2EyrjPZqTfU9GMmhWer6QoTZBccrnW178ah9a5aE2FkPJcCAcY44vUJxozr",
  "key17": "3EX2yu5gjw5jQrEYqBpEn42pqynowD3Psqse4GT61YUqywwS1PeVdj6CKJn5m41DK3TP3CjMSSSb4omEJGsMUV9L",
  "key18": "5mcyb16teFhx8FLQ56gqreWbXQDi5cwJgghh9gawdns89aTbCQdBSv98pNwLRWWbFFjRkaGwxgM3XY6K6bcb9Gce",
  "key19": "3f6A7DwkHLWLrYnXGjkbkFnc454vMXLH6GRi9VqpReXpzsQASfxxvBrzgcVaHn9HhzrWtvghQE8hkiGp1YEdC87J",
  "key20": "qqbznmdEpGvUB3cUCX9hJ7jc86RuJPx78AD4AwLv19Se87gaRNZVyHBDJF1WJAck8f3fknGhWpRrFvBxqRPWFgA",
  "key21": "4AEFRL3eQ9oAjjjDkZDa92fNTN4Bxy4s7jhttv74f9TVp6nsbj3BDRenaqZR3uwDssPB1kWgJ36g28SULMnDko2u",
  "key22": "4kbBQpvpqK5h6JqAkLy9nHjJA9BMADze22179sfwd2wYbsH4S7pkypoz85Cz8mumfzapHxjnKC9b1zN5ZhdbdErg",
  "key23": "54WkJ3Z1vrho87yfd5MLeqH9sqU9NtjzYLYc1kRt93tfYThUatUUtrbXcMRceQcMu449FBqwGi2mosm615Q2LqbV",
  "key24": "2aZpp5eSz1Mcmm1tx3U2jEuBSdNAyTuUQvHBb3LSeLYUk6qorsHSU3CoqE1GXgtAjfzppsaBzTsXirMFgVfqsjgj",
  "key25": "2R6shRFoHzuAv4CRkYepmac7jaN7PvvrsT9GRuRzPfwjsUvt8Aej21wGcuunbi9xtaWiTXj3rhyyyEosjfGuZvkF",
  "key26": "GwpAs4VXWLmmwRXRkCp9hd3diizhZ8zJdPPwxhoz6sxCKajTxr78js4B9423mZX6iuwRS92AWKWdS3KwEaa2YdN",
  "key27": "2VWHp8MdXXLEhAgQUM7ngkWBRJLq5ujWRPtjgRxzYqYZPdn4yQuAiJSVZyYDr8yPrY2DjwEehqRFWEufx15ihavt",
  "key28": "5visVdiFeTVgow9M2ZR4kpDAFPoGrQmbfPoyoMYD5FQDs9CnyUsHzi4FvEtHqEWmguDh1dSHTUmK21epgpHoGgKv",
  "key29": "3r7ZghUsoS17iVvJg38U5w74ARajD2b1TzxuZKPyfKRHpT89afdC1FjewMNxdc5aCNu2jd3srXEkHqErnbqji16s",
  "key30": "35g5NjjpgP4vPu89jCDW9cE4z9CDELcFysQStNTmmeuxN3FaetoKBeXDvvb1NtLzPiv1CsW2o4bPSJLt4iSWujv7",
  "key31": "5SJhmSUuptB45vxQuawRFy8YqE7SdKu5NAaTKrUT1EGKDPXLB7E7PjSD1GxAoyC6vUvACAuHPycjp2B6YTSnffH9",
  "key32": "3yW6PzdmL7aVagME3bKqtUJ1X9MwPtzHxgEnwtb4WJ1yGVBiMKL33DVMZX4o9mPkwVr8YaDZVw1Qa9QohwQMjrnJ",
  "key33": "hRBgYfT9zYKrpSyxPrRQC9WiWeWmazRQn4U3MEwWj7dwvARkXnW8kKij1gqW4WLk3LzTqpyyRy5Zqax23jkuSZB",
  "key34": "57WTCYE4qLyKKXVtwCF9t6XuMkdxz5hjQ9JkMpcq65dudRQ3X1kXuErzjcTo3WgBzCuriM5Thgt6S8jQvpuhuLds",
  "key35": "3M1dPfqTpswEsye6AfDFgfF9gp1evop1p5n5jzXMQVXRmcoQRiN9r4FGGBtSNoqB99Dk1ZoRvKDCEY2zYuKeLxub",
  "key36": "4awWeKSzPAKMse7EN82gieGHQW8dNKLeNHpb7bmpjjPwUxYFodbo1HzULVPGVZWtZwePjCTk3BEQK179aRgEpaTd",
  "key37": "4PrXWbyuRzowyawFFWWoJFUh4PUyLKBWvpLtRnqBQUjDgTE8Gf85Hr6yZZeUCiJyEzSCmXkTgVxYaqsS9mS8uuiz",
  "key38": "3zc7vLLi3XRTT2ATRruP47giJuVg6eexvUGsws9KKfuoKgYh6c8YFvYWvPsV6caPjzaFvoeVp4rGC6n1FbxhXnor",
  "key39": "4ovWk5g6GHXGE7kfSsFXDWRRbNwHKz2HbuLgHASiu96jDM1FY5phmrRRkm5bdcBsSe78MmNEpvRtj5MT5UuXx1sr",
  "key40": "HBShdbE4SiQCS4VHce1pW7e9JYeG9VCNWkceh7FYgEJYvmDDda3V4tZMssELup2TeaQVrtvFv7qQFQDAz9E8XyC"
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
