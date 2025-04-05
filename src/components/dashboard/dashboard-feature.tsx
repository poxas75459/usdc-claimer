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
    "g5S7iTUCFyktenocWTpA5WyhfirgskQTTE9yzdXBEw9tigfPR1ikm3Gqep7UKGhRDEuXRHREmxSfoU68bvj4imj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RKNpCMdJES3wCDu889qtHNbYcvX3Ar9hs37sgBCVMbxCBEYHrJMDS1YxC3TdC3ChZ56t38AD2n4RK3kXnyZ2bQ8",
  "key1": "Dyu5F5DjYbFvBKgiuNLhoXBEGyNRuHka8F4ohxY9Jpf79VayDr4FAEU4CBiVCDzZnMN7kQCK2qoiyKzAoHUdm9Q",
  "key2": "UJ2f5gy9ReXgGRaFpP3hCdsdZYjbNCaCHpSWKX538YmBSTre8iUDL7WPUyQP7cHELSa8nvU1Ck25y6TTFyFwzhJ",
  "key3": "9cnqkcLSvZqwmgLt8apFwMG4hbjseRBbxcvqboRJqA2VPw65mg3QTLf3F6WPCQrzQLfYWaj2VTUB3fMzCH2dbxr",
  "key4": "5dprVp2HQgMKjfCvgmwP6kb2gqk6EnuWQ4JFwmUkdF56kovGbUxgo39icGV5oVKR4HmkbzGuGiph6epjt2EH1uCx",
  "key5": "eozR1zRphmQgjo5vwhqYjsBT8JNVtqaCbeGMSoxFdaDS3AJEVi1VY4UxwAoDYoGR6gnBPBNcumLzq3SRWvyWsCo",
  "key6": "2bta7r25LpJ42m5mgKpME2xU89GjhzVroM8tMUf5mqcSZuaHLmnbwkB74AeVSzJxGJYQP2t4DknTjkGnrcHY5Fu6",
  "key7": "3kvXdREUC3qFomddZsD8Y6f9tg1QmgPBRVKjCACAEfUufboRQGqoRcoyAkkjJMPm4T1dKcLgoNqijMRtnonbk8Ti",
  "key8": "V5b8QWiTkYyTAweU1SXtN1U5UDNUpu3nNHkdHsoZDD4dQfYdXvqNAx6V8tdddAK7TuoqZTPagKWeyYGWAcBkzif",
  "key9": "2oDhntrGkcsZWTt8DWxYor1bLny3zzPknBty45z73wUzRcCpzcdmQQnABH5rPKDPS6NniKVBbRgs5YFDGYkQKJt8",
  "key10": "3eWKD163JVivP14GJtkqzJYZBQSpct8LSbCFvzizzdGjpAbdCFYkraTCsnKvYLhfxejZ1mRZB3Aofrp9F1rn2F2Z",
  "key11": "4TCAPLytDm4o4gP1cbWtVGuXq1QGTvyDjtMS1y7kmndScj4ZZEo2S9kYKG6KZBJwohWvMbCd8pj8MwCJuKHAM47m",
  "key12": "3j7Na4V2J3FUy2BAFg1spUafEtYcdwExQuyhT4Tzcrew2voLjDj3HRJ3D3dVch5MbA91kBzz6UjKD1XefRod9L43",
  "key13": "2xCN22gHicCT89oNZMc9FcAGmqDt7x3RhzRPo2H8sWMywj9HbM9Eg2uux4qMXRjBGxkCDpnfnB29wim1Mx69uDEm",
  "key14": "5PSowpqDHGCQ2pY48LA1sVtSf2aJJzxPCWNs9px4B3i3qFPcZVsRmWfoajWAHPLtvYZVYHVYHCmWDVENgUtjNfVn",
  "key15": "4AvkC1mJNo1xvswb697miCeFxR3qgMVrNEB5TJZgC4Aisx8NmyUg3NTv9R19AKxJuTJNQu3Vd5WWm7yvETRYa7wd",
  "key16": "2vrg7KevyKLN7ZMwWM32FYNEi3Vo1H58UdGDZ77WiRvEsHAtayzMD8FpFRXJikjmjCWbSSqqsu4k5ShdFZAK98SK",
  "key17": "YnchXYeXdqRx33WGJZjZwkyCqqCXP3pdvMdfmvnbZNAX9RQJYd7GF1gdDdDNUnARmj6CNZtFuoxfuvMkDAZa118",
  "key18": "2RkgzGtwkJHR36oiXCzJb38tGyhqRk1pY5UvLTXhnxBik5szag9pBA3ixWi5fLy344RjCQn6XHmUSyK5mZ9sVBAU",
  "key19": "3eu2QYbDfAU5sQnqfoA6RhVnWUhF7bnhhcQwPRazjFXnV7PhGb2fRoaA2ck6K5SrfAiim4bbHvPcNv7UJjDHqZZo",
  "key20": "5YFsf4mBff6PfSwKdRmmtDMqBHdawqRWCXpFcRY37KeKi3x3xpDqpsSK66fvwH5MADMvwghQW3VAmPhxz7girSxm",
  "key21": "4LzfU89ipnWVesfWNxdwYrs34Er9VDK8nthVLUJHjbts8Hcrf4SHW4WqJzkvJMkSoVDHYN2Ak5bGEMPJQNJEwgrj",
  "key22": "4QX6AHHVikGsoDQyk6uWeTJcJ2dTgYDzBzbBjjYfUak8pNuayTSYx7eC62AKbpZ9ACp2MhrRAMstNSkFryF7vnBY",
  "key23": "kTmb9cu4ekR7gJb8wMeHABtyan26nYWG7UXmR2khEekaUSbfesjxNxj9rZs8fBXyaMEjkcnMDnpSyyEfuMPLVcQ",
  "key24": "4ih8LqKrH8VaTPTAw6eytVkH7XsWnqiCFw25FnP1jEZ2ZZKMfGbmzhaHXvgQuFgukLAto22bCv3fwjxwckDBJyLW",
  "key25": "3HjYdu7wuCHFY1cmdEDDG4CscVkExqMamTUMdkyPYiGHSkb7p4otsZG3GEQraf7kXXrD5BPyE1WMxneyi99kq1JH",
  "key26": "4KFNRM6iX8ABMYy9qRmXx2tNzHcfHPUzjJ3m7tPhAUdKz4R9DdP8TfZHQNyEXKZYDvxW8hCZrfhtni1n5mA7De2A",
  "key27": "UQN4zXFFJoaGG3fSf3586aornFJcqfgMsFqGH9qvcJQyoUEd84iwnnB169R9C439i3qntZcdbRbsfSBbGo4Cxe7",
  "key28": "4qvATft2L6tyaNeNnpVrknwSSGojZEZiFghyvNjzAQEfREco3mGENv6nRAo7tGXKZdpvB6AtwuSaePgEctgUDMKo",
  "key29": "3t6RY5nVfoRcy7trak6MTbKV2N8XVNBKxbJdK8hJUeBvepX8W4hCegVzh1gbstiRdjfihXg9GMAkQ33qVGNbzg4W",
  "key30": "2Am7huWxKoTCGgcEjwzRaBgvenAHGhhiy5VN8rcEEyCRhAfiGDTc6QryGZPbSdLKkBpZ9fRvcvqbGUFnWTVCH7Vf",
  "key31": "5vyQMVRkbq6guHo7hNhp94Tx5fYu1b1QqgAeyVuuFJMzRb3TvSyGbh7YDR5tVuDLSiLKvRFfacQfjkvifAJc5WU4",
  "key32": "psfwdk7fhv6JgAo2i2QBrGrq6CA6TxRbobXqvQG4tyHPLPPAZrCeUbi1FMJ2QA5S65NqPooUz6wzcNZfVAwPpyM",
  "key33": "498gF7ypt1xRh8eECQtduWGdsU38apULpHcZTnJoHx1Q82zJDgp5rH13QTqZr2LknKQbamQyPQCTtYYcotiq7hhR",
  "key34": "aqRxrtKH8YpdV7N9zYmqTCAtG1dn2pK5eCFuXmNZLwZMcRbbLkpZzsCqZeHzQYFhY126JhdEe2jFfJALqHvuKdi",
  "key35": "NXFrjMRxxYLaSGqtuoXXw8GFjZMATuRhbvyif8wu9VLL3p2NQvQzxTLSb1rKeCRsXSW1WrYZmdfqta6GvwvTdqq",
  "key36": "5WYZdp361HFvgdh4b4jygd2EbQXDB7LRYyyqk5sp5HQrdPXXB2xhKQRnPoDMpzjK7zhErgqMo7hNrzM8WabnjRvR"
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
