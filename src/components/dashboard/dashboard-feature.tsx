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
    "3A2Kehx2cDQqn6phFTk3NDALDH4S7KWRknjEgLrBiTfDppDAHDnZiXn372eV85r5Mxx2g2HKSe32C3Wrs41uPxiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "368ADTEmXFigBZXedi2iwbnb5BvMtKU5qnahhxd5PFN8ShhofhC4mDZ3XeM4MU3gBhfSM1qcWLXtZLa99k5vpkTZ",
  "key1": "57CcXt3jukR3b8nXHhSTcYz2KBg2WNbfubd1GcwPA3dzmZEFAM3dyiENxH6VtRuMo3k7WcMcQhDhj7a7HoEnq48Q",
  "key2": "2MMAdcroPrX7y5VndFT4eqS2i5ib82iG3VgyYziMkvBLQiEUVe8ha6WyPjnUpoAs5gSwoFav4izmtrgXHyYV749K",
  "key3": "4nzpkwGWQg5JKFabzjFnDhAMcKNzvjGmTHGHcWkBqXNMghccuQXsHQyS7f9sAzqjs9MDjqYr3nUQntHeZE41WJCT",
  "key4": "5tQ6QTRKgfCYX5WnsvHC7iNVbQ9ysbVfS3vZrnJt9RbD8nQDUhUYyzyZVvZ5Nxm3sna5PDfm69sEmN55jZ4mn8o2",
  "key5": "5nfrFmpWCkaraCdKGuhYvjGv6BivvXYzPpgdGkCx5C7PuEHVvuTg6tUa1ZpsKVKYwMLPw7HDJT7YKPTmPpKb5MgA",
  "key6": "pEkP8n5SsgWbwTUfVGjgfFNhXwe1GsoFfFFs1eDNSqB6LdKbkbE1hXyQA4HuMGXKubNaGcdc7thY8i5u8KNbBoj",
  "key7": "4wFxoG2foKCLKSMwvCjwGXLSjvu4yjPL5zeXuRRXNyWT6ftPsBEzsxYYashAUnaMuZB8KPhnM9T7zhTWNQh1ZQCm",
  "key8": "4MmqEBCXjU4Beoxv25EQjgNFW3cMUwvZ9w4i6j6Zt5hc5QwULWdTqjKEdHB3KhdBzNWuFA5MFrZdiM2tqztADtdC",
  "key9": "ye2wfHijLB35S2PCgd1LtXfzRj9xhpZ8WoGvCFaDFHY9i7DT8Kb2HC3Paftk7nnoSkq8ZCBWGnp9aMzNmVo1jGi",
  "key10": "MXDVhUkEfmqZqhncHjUARAPajnVyKx4kC4LpoAVCYzHy3fwhaWhbBoBmMETm7NVabcBC8JHWvpiseC4fBPUtsXX",
  "key11": "5LfpJtQS5Y6rBnhmDms1mpseazZiEZdQYtpmhn9w3SuGkB8GiNPDx2vha8MktM3tPc5NRKQ3uAPhyS5vGRABeipr",
  "key12": "28r431EimzQ4x8yUeD62jYzjpb8iKmrTnWw1crznWiyqARLfc9F9BZhduz2B7QXva5oRm8RGjiCDuCcyfzhMcaCf",
  "key13": "5TDJLnvsdKbbRbfJJheQuDEWbPEZx5BsoxNqUJ5hhBoW4UgXGpguq85YXRnZ5WaLNNy5ukvMSde1HFyg85aTrX3E",
  "key14": "4cMH5v8zyUBA2d5QgKBWmt6J7mpMuDt1LusEdr5M7wwv2tBiL4CZdfYgd8MaQ1wZ4GTUb4A5HsgKz36hcY69dW2G",
  "key15": "4FvUM629JFYZyZmhx9YJ3atcTQE5i1v56gwYs8SEYoMw49qJcFtwy14meN1vGwjHZR9neTBVSZ4jBP5n2PmyLg9L",
  "key16": "296te3hu8fBL9PcLzVFphd3fnrunaZUGF46zUqzYUxLgUVEh8nH6Jq6pNYLy2zejMGAm8jx6xZqguSfSd4gJj6pK",
  "key17": "3kUdyeQEbPi7UZYb6Zq3QBELJZGE1GSHDKyg4zu7ENeSMKEzCQ1GmxB8a22Mf7wBuASNt13ifNq2AuBK66SGh9Po",
  "key18": "2YqpkpDypc1UoMrLUW7KsiRpzHw43c9tTukf3a4SkoJaM978KLTcmZjx3Q5J1i7xto8vcdgKkUcBY9NC5XuENuYn",
  "key19": "vDFC9FEZh5yv394UKiBkMrag9GihkU1rpnn5FetzRi76wNS8YKSx9jGVZ6Vu8ZKzLAzc4LGkup4EX66cjaQzwW7",
  "key20": "2Ln3dhTamSvokoDqR6FFary2oa19jEwspmJJf2e7MxyAYNJ7LeC4CAL5WEZHVx74KnUrgTrB3DLC2XezqjgNc1NR",
  "key21": "ZRDngeTcMSN5k9GUZG22UkLq9HxBxDgCALMheYcGmUPVbnLZhneo9LNfbtNgNK3CbmdNUjY4ruqHej7WkGR3T4Z",
  "key22": "4d2UtWEKRL33KM55zqW5ZLxM1WxbXVkcXHqb4QwwBdjsaEtAGxrx9zRbqg3YtSe8LYxfPiWkECqEidCyzA7A9Pyj",
  "key23": "2CJiyJkdsJMRz3ufe6wKoqzsQ1sxJWYNt4nTCbUXpZRmBC9mWVDXPjDhMosPUkR3qR4S3mWdhEd5KCgqtW9BQNEa",
  "key24": "tUMwUxcZddiZCgHBLdJpbJaPfXiXTGgkcE4AoEcCBEuSGG7112Yu9AVHiwFtrL1jHxk4tHxiYcn8m7dcYiK7YrY",
  "key25": "54YnTL6tKV2kKD6cTFWY4tDsxuijJeKm9SNXKwCgcAAwnH2PK1HekPd8h8KCZHg9kJ99FXYt61PMfPgygz7MSvC8",
  "key26": "2FAPH9iYUqihYsMS96bLKAhEm9cnZ6skX8xLPEMsMotLuK7r9KpHx8hfQmkH8ESK1pZoQnxyHWxob1HauLVXgVeC",
  "key27": "35R9JpQKyuvkbu8J1wNK5pWTQBcun9z6sDxQqYMwG1x964hLS8pMbAZ73sdUZh2MQBKuAzRmEUmitsvUDPp4RAQW",
  "key28": "3mLFYMGPPwiQbbm6nFDGy6Udb6Z7cEsm6cJDxbfJPh4Qqpy3oRT4JdWoPbtMjrzbHL8tvJZcBXwajTFdsVY4Yx3L",
  "key29": "2cafpqPB89HjEMfRokm9jLYFq9aEHBfjg7G8RckD5UPVPv1dW6nAbekfnwVYSGDJARniTWSprrznrwjDH3AQfCcm",
  "key30": "26iWzknip65uHBe92fSQfUjndE8xq5Q4yrJ7ap5RMJ74V6oqj3hvA7txcarKpRDxxkXdeEtv7kfCYjq1WtijCHmM",
  "key31": "5EmgDQqDyM9CqLe9b2kPBa5FfdYdVgBdEG2e3o3akxepZAuoHTmJMyGn9QqWthmatJPtDfoW3infwNY81KKcsZpv",
  "key32": "4bdsjRJ2uwLtfWMyofA5s8PqdGakcKMChoaky2UfyT4KLhQJmewEoJ6ETWsFyovUwmuCAYGAwWGwBD2JUMGKumXh",
  "key33": "4Sx93yFwJbjQju1v3ueg7ituWKWA22gxnYp2YHnDa3x5oKHWHR6U3Mst65YYKAQB9NbwtUq72Z2EokeFk1947Crv",
  "key34": "4wjqinfWwzHJLh3oXTsUPf2QQ9VpyxMsmE69S6gmb7agh5EHZRMwifBEgaax6Tqi2CPea8THYhpgNNRFP1GoYYEh",
  "key35": "2MpXwGFUYwEuXSDiNmqTQyqXjkGAHVk6PZBEweXGSZWh57NzbdZgBDe5pqidZ9if2ZoMvkSF15JXx9jkk8XUSdbN",
  "key36": "2Hx9gDHRT4by4hMaJPRrDtvsQdiR9CvwZnDUPAJHy6QhoiLySSGVQTLFqekzFrAPZ1jctpMkaQEvBvxBJggv8THU",
  "key37": "2kHZ1upcQiyaA5AA974uwP6atnB34KK4DzceMKniwdA1dJBcDMUw4yGjD8XtKJqXLeab1zo45JYvT7DYiGqupALz",
  "key38": "3rAYsJeRzhLt3CCMXkCARjEjpcJXz6gEm9DMa6ffoLFFysENtYvtmwkHTTPof9hY5F8WmSLPyGawmLiEiu4Q9MGp",
  "key39": "2oNNkaHCHu2UyThWMTbdtbjfABRjxVmRAPdZd54EnzQhsnzs6foLPGbyRPFhUTV8YcALHoUYwMrjEHeKNhEeMt1u",
  "key40": "2dUBxCs9Yg6ZazXjdtwREic9duMXot8uNirJ1Kp5fcQQBjGb8XzqET2qSvJbV5HEviWEosJJV9Fi71Q2Bx8ckmLE",
  "key41": "4yuZF6PQMQ9q4xU7RN6XJi9g3nyRbivjzsZJfaUH95KxKKQwsZUCQZQXbHUP8maAtF9RJyHPtjV7JYLUiu5WtAV7",
  "key42": "p1mW96xHrkkrtkaDRcihJvqK5FPgAaaB7XzEjxJ7yiUFDeRVyUfa6dBKpUBuz9uNL9ggLjjLFARSiBHPfqdRpsQ",
  "key43": "V8tpyKAWQ4VNvRzbgxvf7VcHqjLis5XYAk1ondzNe7X4Qs6mf8pEcDgx9qdFM8cExXiMERxbHtethi1nWTGJ1jm",
  "key44": "PvCGLHRAh8XuV9mKu3qv16ZVwrgo7BLajqLszw1ULW13GfWqzR2MEDezHMqC8reLD4vYayZwNUknwP3V8X1eUzf",
  "key45": "5TpS89yRtk7onvw4TS9vqTNJAUte55duqkshaCbAHMPXhPavWJVxqNtCJy5QUbiwHHzwjRR2TXp3XZxDwsyVPYHm",
  "key46": "LCRFLFGE9Q7KGrcbW4hm1dEypXjDiLRd2mg29qbQW27tDJiWVYMsrepp1BHm3ngBUpZkGks41SwbiYdpnBYXprj"
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
