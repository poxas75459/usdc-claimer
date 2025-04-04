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
    "55hKqksUDhG1Yvayq1rC2u8UxZX9ihizVYWKfxVYpBGx2Hnwds59ApuPjutoqHFBwN5BAutjvbcQsm5zbY33oGhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mEkuXqFKu5JyAKLSzRaFV4uZ1yvAWevkM5KXGuuKBcFy2dW8YidoUShCkm78XQcqnoN6XYzah74i7raW9MYoJ4X",
  "key1": "39JN1nbeBbLGUyqw6PV6DSSHy4XGrKFSppnsr7AETdBF2tohtZrz2GtcqP1S2D6LyyRuZepmLKaSoD6L8L6A3QPX",
  "key2": "5McgADLpJkbRVYvJL1XjwFZS3mGUGWFw8AyAdL1KvS25m9ynerngjxTSiLfvFiFkLx4hk7vY5qfN6vcDWGECLHfu",
  "key3": "2GyJJUV9SeAbuDgLxDmxbnivXuZQffKmK5uHNdJaw6nymNSGDtiwqibnxjbhgqDvNZzn4h5nfACaqF964wbxES7N",
  "key4": "3VpftuPHS4nDE11LDg122kugGvYxgRJr6jcPaEWmhsoq89NiwaSCeHf7oFn8a1kaSNYHXYzW1MnoVWZWnxRMaoef",
  "key5": "6GFGzSs6fS6m5zY7Rx1x9uHGjsgiVKRoLqs4ucu4cy6854kcADVqPTxTjG9QEerw9wv7XXM1w9QLe1gppvjVwDN",
  "key6": "4Do9G6AoMiSJuEawbAazn9MqTAnVpRJJL5Q6e9798UfQePyuF14cjdahGg3z456n9BGkvvvkf8pEzk7owDrHzhxC",
  "key7": "4aesXzbACKxno37bFEGwTXg54fm6UBKyqKY1rG5B68FZ1E7g5fDis4CLfooX53E5Ps97HMMHgPBETPn2uVZve85b",
  "key8": "4YfSJ5RaMuM16sJLduXryP5nN7DUHZHUMTG2D2ARgUN2j6HnCqhNwuTSg9qXHRq4cmcihbwJQX6AfxqWY9tiJxLW",
  "key9": "457WKCT1yLcyo1odWauFwSGEdW9gMQL1JgTVFGTogTribm8JzjqKtPFUZEVqvb9qof5DcBPTs1eW1S6FiW7AN3Vo",
  "key10": "449UJk9xa7mA1UVtuXpVAFCerisapurHtTVen7DG17oGHxeh2bQ4momDJcqfoHo4AfJ2yzVSBUdhF6SXeUnfsHui",
  "key11": "4MHaqiYbRtNPti5zv9U5aqVEmSenzAf9FJFAViTm49i8J6jQax8iz498CypCPV7vm1k3UJePAphsVFKw7wkbWA1",
  "key12": "6csBBeFWs8kZ6UyckQGwgrCGGjAnXLXkjjzHyZ37A6tkWHdW7EnCQwezdTRyTRZMSFkVvM2xEdJirnwJgNvWk9L",
  "key13": "4H9ba7e2p8vkBzsmVYtKK1A9C5rXDZt1B34sStuDAUccGPgyNSnqFEPN1jK7oMhSXEUHmr829sgsSbJCmYoYNW2N",
  "key14": "4YeLW3WxsPXTFREzKGbQVoymcFtmMWgQT3QVdFnYMibrWE1pGe8Yb24GWJtmYdCuixA66ZLZL1GhakQK6WiM8G9c",
  "key15": "2Caf5QfzWSuoDMUcw3wNFyorL5B2xCjDhxZgCJh3XPaH6Vv4MwVMTRfFy9ySVdG6tzm7NUAu6LRyyYpuNNwm9uay",
  "key16": "22oHqmfFu7HYMvvPfNUwmEYrkH9iEmmn7Da1rCGEKYe23cqsDDA6gt1qXeuA5QHfY9WQX2Ue3Ee9oNqCcdDRRpLp",
  "key17": "2kEeNUtkkuXvEFf9BQpkZ4P8eSN67z6CL4hEza8f56wGs2kjf8RG3UNy5rmgFJ6Qyg94NiMQurUyJ3nHu3u8yHcr",
  "key18": "4e14bxMvRd55E693efJe4axBwNfmWSzmWVn7Co6k4mNpCPCNZinTgi3BzC7TbmnUu8NC9j3dK9pPA1p8prvftRhN",
  "key19": "41bz1WsubY7kCt7KcTvzX3BBunPQJ4qJ4tEGCsrxEkPkDsQggNZkgBbbPrxyQjGdqH16HJpjnFbMPogxtz5JFeyn",
  "key20": "5sdwqGX7KCo3csdbvDG7RsiNi9J7WQJ1Rver8d6i5kZwsz2US22c6NCB1p9JH1xoZBRBGg7XLhSLLhRy2psJeU6w",
  "key21": "3iLfKobiDuvF7HEnhyfdT3TeWnsRtGqs71gXstsNBw8wb4Ph6RNRurCqxVhahgSciitAqUwic2HJQ7nzhxkyKzUb",
  "key22": "5c2ZodGYtJfRg6bxCRf1caaHpz6Wiz4T1r8Rx2QzYY9AWVtoXDvjVeMXPbvQLuBV1jGM5heMv6vFTspbUYxMdwWS",
  "key23": "5cYGRFCLdLJLha1SLYfdy5g1Svh8TFnm9mpUsYwaqzYZpb2HvkW8SDkMV3hK3jmhydBJTpPsfgCSxsb1APxCKFbG",
  "key24": "488EZtp1sYiGiQU7BD6vt2t2hVkDWmg56h7ENDT47YawavuovgkwhTmneese5GGNAFuLUHEaqsyGcXxV45E8CYZT",
  "key25": "4HMv9DtKjBNbBFehKFgwivwfVuHQDgvanLW8h45w9Sz1hoyiefPuC6F97kzK48Z2fQgJzEZCvZVmsh3xqd2oPtFt",
  "key26": "pgd6n3HyK8EcDZHmajRFCd23W36fixqkvojmr9jewtWXT9v6XP4hqjyBw2rETfiLV5wHNzjDyK89Q5UiGaQAEvd",
  "key27": "4F2G8LvpFD1ajn92uuPyWT4ReVArSrktBeBB5MroEdahZLDtY9YYDb2vNxZ1dQsDLoHMwgs35jBMjB25LNURPLK1",
  "key28": "5dsiLRjznpktEgLM2RkeZ9RGxo51iHvekBVZ3gXTnAspqBXR6AaHK53Gw8e23wVKKnz4QCnfmsDnYjtCbieECELF",
  "key29": "r3knFYuV47dHYBh6fFmJbZAyDYMk3ETAHrPVvUE9pAfZ89DSMNtZ8yeEnqG1nk9adJNTjQ7Bp97dpMEKXWLXQDM",
  "key30": "2arGawbG3HmoEFQWGwoF6m2XjTLwN4YJN65wnY9Zb7V7Fxo9AFZfeCGVrfqrNptqoAc9akSmDUMjEimpVAKYwxoH",
  "key31": "32KxiMdqUb1AGoaUzsqKcxYkivjJzTDEJfohBDZEvuY8ZHi4zxRyGc9SVbosYtNjXooBvc6kuUUtTWZVWjbWZz2y",
  "key32": "58VJLELfwMDdkcN6dAa2mS1GzHkoGM1LJrCwa2FXx5No9dRfqT5QvaDcjF9nXq4EReYLRiZ5K4yaZSmT9r54WNCD",
  "key33": "qjYNu3Fg8UJwxJ8mXz2UabqjhJ6dHsTFna1bA9tsB7GufbNfdPuyBEWvFjHM4xtqMBDf7bc1ikM4FABpgPKSwRU",
  "key34": "gZnQJAqzqgWv74CYvmyNgTSTk2jPfA2CWDtq1efKe2vwP3ohJzu7vSWx2Vj8zhzNpzPfjxkS2hzKjKSpxWXhvYn",
  "key35": "4dt7f6iYsAwAB7uHD8RcLkbEDTtGBjwuntKn52T4i5EcQptrFEhEfP7Ty4N6RpMzySLs4i7ohtiXDiXCaK8L11tK"
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
