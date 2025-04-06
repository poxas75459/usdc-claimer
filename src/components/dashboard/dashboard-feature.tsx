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
    "2PmLBoA5ZAzyLkjrUgKX5GobBdrYcrKFjyCfrXWdNWdpnePrqR4GyQ4pUmnVaUNaMASsfRKRsW5fi5uVPdkMszWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rumdoLooVe7VYSXYY71tRYwsHFyppQdLNjpFdcr5aY4Cg1YAgcmocAygkusyucL8mvQ3TnJCrsRZigzutsn4rcc",
  "key1": "Sfj58kWNhtK9n1MYAV5TMcqX5PCowGFrr8S4BxJaWpgCeikdTtcaQDyRDeP5Ajot5QHE3rKDqD7PG86kHgxYMJ8",
  "key2": "29svHzpzxXV7vaMsErtMJq9QjARFDJrLEE6BB88XuxjCdpGaLaYgU6Me6EEUmXD31qzPtBZrYy7nJmLtWGUBcCb4",
  "key3": "3qx7umm2cD7Ju5iW6zZ9TnJZnNCogYYntGmpaP9k5A6KaQNKGXafshHrBm3wmBXgfPS9vD3KnRgnwNwXH87M1rDn",
  "key4": "YZhVscEPyQCR9NLoDSt6Nt7wzn8kvZAtcj7tth69vK5PVJ9QSDBo3EYqwPGG8ezXA1NGkw6wQnezwCTjfLqLbBy",
  "key5": "3j2iy5XZpiv1eSavaufEwiJ9XpPpKrEwytKvFJnJcf2N5MtMaLWyuPGKga1miiVyy4WU9TNX6a2f7FT3YQ4a8qMC",
  "key6": "3uEVnvYBkGLcHgCL6PbmnBKw2r4tPZf4NqdpPocfKXvQx1ZQFi6E9v35ExiUGWJnZCA1e2qWLTRdBEDJHBz555QR",
  "key7": "2KT2a9ziX5shymiSEoAGm4TZjupxoa11nEq9jsraLupf6Z8suTY3JD3YMBpnAALsJ5CcYE1jVfpvjkqPNjyBkK8D",
  "key8": "5cvnLVgvD9j6y452jKJN4Qd5DSe5AxxN1A1vfZRxqZWfcwT9Upqf33nfQQD63KYJWA1EGKZjgihNwuGLdiuj1vjr",
  "key9": "6bbSuyBDTDXfaukquMQSnGpL5qBD88tU3JTKuuJeBuJtKX65A4KxkJKA5TZXETpJiKeybBqqLqWTcq7g71nXpgc",
  "key10": "3fwbUgb8Tr5UBjQ1yjEdr2KnGr1w6ZzUnTZX2dqwbvC6ATFhTrSvbzS5xuopiPjQj5ARpBbVKgKG1Qw9J1ipxumy",
  "key11": "n7zfayukL7uriQr9qU5qGFviY49ZKapQtjA6AkS4HEw59AqiBo6CjBHrRzwPe7sZQUdwqPu4RaNUimZTgX8gCwM",
  "key12": "3nAVoMKMz9UutfLc65fo285Ltmwu2p1hJF2femDMZVRzHKhjUTDP6rdYfMc8HuKFDXMpKxsAQWsqfkUrSzQJBBj",
  "key13": "rxjKud7nQQnXS41V77TUFh3zcKuZiJVSpecZamzx2jxAMwBPcg47GCAR4LctZTdxTWHeCquFZeJktpmK7wS6TBZ",
  "key14": "4BbeQ1UUeEm5M7Ctwdw7D9BcKtY3fvpqhDX7bdeKUfBjASsyjqihPdJFzoVgr4iGz46DTdh4PSAGa9zNSXZa79Fk",
  "key15": "492r5zx8nvTPFUQcE1V9uciiHXJbpyyTg2DqMUB894F2kxKrkiZXeQPy4DP32MhFubSRK2oLCeD3Ez4Pk6STpMYx",
  "key16": "5viwwcUmqbwJytALt7JyprDrJaNTx7FuVzyMvCCpGzd4ft6THnpuriuLDdn9PSatdKhtAVGzrwyu58TnLGqyjWYo",
  "key17": "46zm6UG8mJ4uuk95om4bm3zKNksxDvLaAUZKVweU2NswAEzqa7JvQYiWmGpAUa1JzNRoC6qkzVdV1XDjRHom2MSa",
  "key18": "zFV7RW4TV4hVS67oji2riGDAwzmEMMXMn6zZST5PE1fFezyFPnmAcRjkUY9q4KZp1izESiQbkbDRHYvzeVcxi2q",
  "key19": "4v43hfZUVX5JKiUAcCAeoBtQ9fDxDx6PQF9NWzCSVEzaZw7Qt7w1aiwGGv4WcfRxA5nFwsMo5WgZaYHMmn34HucU",
  "key20": "123o8RdzTuKZuS7WY3MuBzrH7zaVnfF1BQVmzudj92qvp1TrGtaB53eSMPtSRNCGD4VW4MXRgTWvRM4w6Hyq3Hwr",
  "key21": "5q1hMQ7mZmGrQfqqVoMQVxqaUebwMXzEAk3afet77ZHbukybdhWP58sL3bHCK5L5pDttQ7KUfjh8nJLXjJAjYgCn",
  "key22": "5EE6g3Zm2ZfeRjdS4HZnreQ1MTv14rX4LQpHuhJN3TempjsEKrAqYYbQ14o7nPCuRwdPdzPiJJz7QVSLFSff1rB5",
  "key23": "3qonmSEVL3YiDhnC7Miemio5oeK7iVbqE3qg3H6u48VHfRtiKLwnHcccZW9tvP6MmUrsvvj89GJLxU6TCsv2xZ7G",
  "key24": "BhqKGyZx8UAJ72v35AppamepQZiHPtMq5iLniq7SLdUTGX8hCM3Mci8GQcqh9716wDD9gmCpC2yzBHhQuHp1Uh9",
  "key25": "4aCAygDTkwj3CJBH6TgKWJg4Vnf7YNZCYc1YvrrXr1S1dtkaW3ko723pinKFMjauhzp7U13YmUfNsaFHe5aDq86n",
  "key26": "5gtAe5a8myL8cyzxNAytXSpbLo5sAQTvvb2LZrghnuNXrTXNUPP7JPVb6gy1BdMG1V2nANFtNqqJ3WEDBvaoV1xG",
  "key27": "4xZPmXdEKjzRTrAY7pppRtoXjUStfiBBEnsCowNPGET4RSaCDWj4vMGeZ2tmCFPB7tjzayyYGcQArjia36HCkFCr",
  "key28": "2gstfpzLd72i2HwGntB3UbSML4edrFWFQ4gd9mREvNSAVkjCdeW1AQpdCmTuqDX5So1MC9v1xhMCyNDYqokNogtT",
  "key29": "356vDZcceuv11rprkPLY5HYtPyWxpdbcn2oXMdnfTwrBKSC5sFSJSTvBqR6jeJyxLi4K4xERiZoeQrUTmh4hMmGE",
  "key30": "2N3Xm1qdw4kvjJSJn9S8munDwjTxXgxZNu8YSeT2JtDVfaiJMcopveCEVpGz7JYeVjB3gceSuwqPJFYeHFjBHGpn",
  "key31": "4Uwq2VYZQvdsKhrRdrsNYUWdYMEk9N7pqfLqkrHEeYGcytqnfzASQA8BfShnykygaseqg6yRZcmXWB3f54oXpijU",
  "key32": "3S6BrKzfcKuBEYuQ9pAUM6BK7BMb4xrRCCKMQrMCRGzoPwCJjhydx2ZoLvK8buDRdSqYLLhHm9yfewWbXWMQQwzd",
  "key33": "5YhZP25vSHrhxGC5SJaKe9dmJQ4A53PW4U5qAZSfNab3TELvkhTyQxsgsBqWdhqp4pcvPDeNDxTKGeLsxzdof2fM",
  "key34": "62ZtmR8ppoirw9qD4SbCXGW9VEtPLFpmMow6tt3Jrn9uapbNB2tae4qBjKqfwRcyAsGqjfNmrWx58kAwanjFAptz",
  "key35": "426dFuQDeM5Eg584Pz5EpH7CBDSFy68V6gEyZzHc44j7b4ZoC8bmwynD7j6yW8bVha5duBEjQ5zh5HAGjVmk7Ugo",
  "key36": "4t2UC6Q6Hu3vRMQMybF9xdfzcm22WPWDivcodkgN2gTsxSa8yaw7qqzE6ZyTxJbvwJQD6EFwWAedUG94URYskLBC",
  "key37": "24ezN5aNm436MipTVoW9K5zj8S3tjVhYvxjqY8qaGaNfhd2kNUima39TdBPKxzCiUY9QrL1MGvT1vKYPD4GEhcjg",
  "key38": "226PN8o42gWJze429HKibKa1SFWgGGcWzq8chk13wzfhkkjNJdysqtRzeNyojHoA6eH4fM95SujvKGhsc4ruZPrK",
  "key39": "5qE6SSWJTGwueV1qdFRNaCNhACwTayL3Dytw3LgCySqGyrELptb1sZUikihPMwEnCCRzLg8tK2gwo4cq6y6fWHs8",
  "key40": "3m3KRpbrvyk4Fq4huk6KXvVcropEJLVwNhjYPrFGLToPGS9TXGRfwDg7oZxikKwjw6wS4gHnmKnNhkUXc3yJCWeE",
  "key41": "4DWHdaUG7Wo38h62KMQHKXDWE6wGeSZUV5yy8RR8aUZHen1rVh4wuuXvKJMqNvoNb4fKqyn6Km6MfEHaMfc8RzxU"
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
