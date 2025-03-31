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
    "34pPzUucfyeLpC3A7yvuLHqQJXtin4c9rUevdvzm31zncbn12SPXNmY4dGwYi99V2qkKffsdDBbbKp9moofyCdrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ApFhewicEYwgqehx7cdM88HNFEeAF6iaRFeaxpUsn5fXqejPbR5Ak58VVH3g5bjrTm88oXiGcyGVYhvVr6pLc4G",
  "key1": "2vwGw5QhhnXAkJSfHiLRS9RAGZEPKe7vTybXRZao4bQFjpGSeMVrPEJjyrTgcnp7nftxSYuuKMU6QH8kSkUcZtwa",
  "key2": "3AeNX5m1hifgZQJK714AFk1Y2RbuV3BAmy3qDG725PduX6L8xsALq6V2bCAGFAQCMaUcnfTUnriNqwx6vwgrmhBo",
  "key3": "QXFtw8WNcMWYBBqaXBMYtoxmPaSZnJqPXofmxHGYPQqxE6JC93HZXxRuDxmc3sHzDeJkgef8hLUs68RTcD2mwNv",
  "key4": "3ZK7sMhfFJT3jibeoVYgzsQkjEK5ZK2PxxFNY161r98iWZjAxtGB52hpe5XtuxCYo26dunZgq9QyG4p9wExTEciu",
  "key5": "5Dk9rbVVS2w3LnqmDAZ4ic8AHn3WXkBerdtDEBSxhNyDMdW294UYL5p8jP18onH25vcWGaFH619XQZprqvYECM2A",
  "key6": "2bqvx5sjnZYyRzYWmCVYX9iEPUmNKAVASdyBp983uaJwRnbGFo6rrFdZ3EymY65V1QCN1aHPhtqnaLxsnkkaZW5Z",
  "key7": "2adzMVsu5VKVQSMLv7fFU4KWE7U8rFdzUDmfPqLWKheMrFzokgtniNxdY3ya1UqXiNWozBi8MLh4opoaJoY2Vbec",
  "key8": "3NgkHayi8QASDVqyTXw4YYJadJMmHSh4UShtU8afURTdMHEhWdFDpfKdSuggz6mSKJRuwev3k4ZU5t1qQEq8WFP9",
  "key9": "3jUaQBxHd6UQPFn6c2eo63mGW7ByHbZCmm2BumX5vyyHDkW7iFeYRXqbqHeJNxpZiq9UHepTBJBEnoZb6Y84YyGy",
  "key10": "3keJDkMePkAiDt8AQVpC2wjxBb5ThQrxmFHHKcdgx1jvoFmDhE4Q2SejMDbgCqSbiBKAkpeFJy2CnVcpMfxNUp2z",
  "key11": "2zv44BMnhsihYtUpmMR5b5FFVM7ScZ2Ucy51V8S8f1toXYzm7tWQguW1EWJxRfMx2yzkwPgRD41pX4pbRbudi5rV",
  "key12": "2TJK7Y9xC7AZZVZs4U7SCVqyNCYXngp9Q2B4Hh5Boa7T5rW6Vi6MhvNR5Gm8qJJqBGnvsswLk5xZKepTEt7EaHkr",
  "key13": "3TtLjV7QJURPfPLd4xLvLFbq7pcm9QgRGbUciFp8oNm4usmcaUJMhcPsQiBF4UvvfBRnLZY4G9x4BtqoaKY5cg9L",
  "key14": "4nwAb5xA9p33m5CVG5JGpeVT8N6VR6ii5ejgkhS2df22QH3bpVfizJY12MLXtGTEcc3gknB2ZiGpeeyzwetjQfCi",
  "key15": "9A3M36xD5ZEWGtKrDkwLadzBKoZdoa95WdGZma2UcZFGBGHFivNVUS5VTiKHtsJxoTh2ttVc9QeJpqPbftXfyJV",
  "key16": "ZWU9JJQpJNAaMyxA39F1uYsYY9BnSThBJpt4d64PHzNRd97kK76375egGhQphtuiv1Ne8w7rb8ZPax61H6fyWNg",
  "key17": "MyxkNU6gMnczav4RKoB3iopxdTSrGKj7WDZnBUqQy6fVFEgJw1PGcMNwinzoHg1icSYp22e5azEnaQg6dd8nVji",
  "key18": "3CFAAbEgxahRoXoRGN9LptUgzVn8p932LPAK1rFaAMfnCgsCtFDurKFsfsU7w63UxwGh5LdXwV65jtwW3QVrgS2W",
  "key19": "56pfX8GxrHoEiN5vbcUsnqEFchRjXAJzPbLNcMDZzSJznupgqq8S8oVUE7awPGHz86MuinU9L6D153cb3FZGG3fh",
  "key20": "3dxP2ryCQWBEhKRexZ7KXZ2eZLC3f5Pt1eRnWHBj6LKy7HpQVHW9qYhaXcAbTy9rjPBRnsBcfzDeBW8cd6TnVH5p",
  "key21": "29tBWK24HrPoGebmu8sK9cJQfgf5mzY34WfAisDtxwH9eu6yQqogmy3oE1mbZ4Gi32iPuifpHySFvcX96NaHyTUe",
  "key22": "4J5gXKyfqnc3WHYm4aAu5yt3wei3ub7oxxMwpszcp2hYVjQNEbCX1eo338tBDCsFropJFjXPf8bAgH2h214qkksP",
  "key23": "5bTm95MYftS79LctQjNbkrUXMTPbQrnJUcSb2wDdbXYprcCUp9RAi57Q6AdvWKv7SvLWDGwbgt3RrJEeusg5Aq7",
  "key24": "2C2asqxkghyULMG3imiFATZnJFwSec3fx25bHpsXjX7dDW3ocwwAftTfJs4Lgi8QLhqeyH3iu9ESbeNxCBHKk8z1",
  "key25": "EhYCWqSrmynnuV7prjcLyTC3ZjwQxAKmEGgsTnrWiLDTcX5rNVBYzi7j6JjXfAP4JEjhBKBcUyNMMDp4pJSKahR",
  "key26": "3h9vWSYS7reieBskr8Kuwphwa5C394jZU5jg7D6PZ47vx11qTJfA5Ei6AQEomkA3kiSqToZtRaXDzZf1FxpBPCcR",
  "key27": "pAn3uhbQPrtuaSL8DTuzkMZSzpEtBwT42fjjaFwWgD8Lx7fZoh12M4XqRv2LwMuaoZMqCWPdGDVevL1tMwnuXTK",
  "key28": "5SMN534s5tYs6r5iCfgVvsSGNACRjD3yfi5dvPtzaoN8HupfGdPXz2SyWjMJRU7r23BzN5fxEmUgbPmYhmG2bWVf",
  "key29": "5f4f2Q4sXYXjDyWRzX97v9W8aGkGJuhg6EQTvv94nxZbgycxmRvwZmuKCnxnFM2bh3hMvT9CYVXZyybMnDPVYtfR",
  "key30": "3GGaoxh9ceSeTxJGYTkWQXr2AJJGE4WXhifdx6ceCPouszX9XFRJGtTM2uVkfZuuW1LbzSBkE7pofq8keWLsxGXz",
  "key31": "8aveK2CD6VpWtjTb5kEzq59BgjnH8tQwaan6U7x64rqmjByxFTrdjVdjQwavr3Gv2GKyvANuBeEXMskiCJhsHEb",
  "key32": "4hVeKRJu16Y3prLQSwuoQ4oZ1YuuexcGDpgo2o1R2AchNCZvpvGVCeSUaee6gZdnehw84d1N37TcH8Q81h7kitBa",
  "key33": "5Psk78G8wyEgrzKpwTJtWFGrApw8bFzY9kSo7Z9hdSsqfCe6VPv1yY1ywQQZeEcPVypjcJYX5QWiXKJoDtuDLfTZ",
  "key34": "4E8nEeCy5ckeoZbEE8NxgqC8Yh83A3Vdb8WVNbF4Ev357i5wioeG1GWF17pWYjQ3WczLkzh1oQMWsmWK3cdBbznp",
  "key35": "2xE4rrSX6irL7RfYGbQvsD8bp15vcmHrM4nHRQ2PZU41fTRGX3iMfygsbMWKd7Zm4q3DaHAseXZLYLNcTF9oCMGZ",
  "key36": "3fFDKGGrxE3vWNFKd7DTtPx7Pv1uRDniSt21p5DiF8zrGUadsPvshMGTLkduhyJdAQfH7Cyjqu18otdnoUjheav",
  "key37": "7w6PJoR5QdYE44HTZwxCH5MDvCfiEDcjFJExXEfj6KpNqCbJV52rxB7Uedp8McUvpKq79SVT49CC3xMohs6sr6G",
  "key38": "5byfTaLngadvYDVSsQViwUvDYn5BSJxVF6zG9JPFNAGzHEM8yowrTftzyw2Te7XF8dn9JocTnGfu3zb2moJhYMYV",
  "key39": "3MVN3TKti8wLXBnKaonou85nacxMtjBtgWoH3H94WviCLd1xrQgjVDZiJJ6uNFHhD7cBjyao9dSA8LUgWFYAhvZN",
  "key40": "2SuDfKVNAAM7B8Steud9E7iK13gkz6wMo2RJy9ZUu5rQXs5QLbUq4YvdaTa7GV3CD3JXf1c2m9WrbYV2ah2r9aj7",
  "key41": "48NmvDhwzkdpVgQYqEm9471Q9MGJ1eewS2PcQnFPH31aNmwMUZJvr7aHz6RcaTpboWHGjTCGn9Z6HWZwoQhnBexG"
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
