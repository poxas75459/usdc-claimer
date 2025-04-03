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
    "TWcscopysRFF7DhsYW5Egf7oGNkSeUx7i5Y685cPwbw7poCrNC3oeZ847CWq3KcbyMkdiVcfzRNHh8FFz51ZYhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38RwSEFRaaWxJiZkhYrBPZTzRTSJiWE1SoVJQduAw8gKN6NwPLoNPo9ZYpxdfBWSzEkoBZSJt39fABGDTPSTVZes",
  "key1": "49fY7Ed52zuyvBbqKcDi36Cz73VPD2MWibUi8KhpKgBhmrxAdiQtXjxX8RTAnqTw8HFx2b5z3FQ7qwMv8pmegRiJ",
  "key2": "3zrPU1phL7sTfWkgF7ycMKZfHkAPKdPVvCYyx3xgYad12jdbmrorN5vw6nCQV9cdWmM4ynSHUHVF2tM8qsw8HQoy",
  "key3": "4Q3C5xbruo9SPcY7bXMdUCsdKYjQFBWnxTPYgnANPrGUJWnKmzKe8pE5MFHJ7EyuXYkU1dTx3irxiYY77BB8MTUX",
  "key4": "4HRLM1hRH39f6SfuK4fpT2YwSBzreQkdkXUJcU8hLfhxUY7nmaQG7uiBkUGH4TSn58Xe1uJPhjyM3x7BxgGCUiwv",
  "key5": "5JiFM25bEg1Kc31yA8SmqnMmfb5ivseVFatoFk5S36NWBY7Vh9WzKvj7puTbq3GGaUQ9PgGb3EBun6FbjPRbp7iM",
  "key6": "2LHMSiLg1oBo3dkwCY86GFew3kRzPSCKkhEW1detcbfPnQi4HFELyTbS9PzYqTG5kdxWNCaDGfGC2fmMwXp5f2Ay",
  "key7": "362E5rS6o3NAQTRnXAvUbRtBDepmpvSo8D2y3EjL1usrGVsrSt5SZaJHv5TXkZrAVhxqmkUbGgp8r2LoSrDDCrHJ",
  "key8": "3PTj6B3YSq7MzxswkBWM8pGmJpW5SUtSipTK4bjs6XXB9Q8YB9CRidq8hAMjNZ2TA32SYmaqyXaykZN3Kdc33G36",
  "key9": "4ihvcaRNofCjYLiLR4RBDuBpW7oreXiapatoJqTwpNzSgs5RJSqdwBZw2LDtNLEK1a2eDXZ2ZjmWudKhUqeQRZ2K",
  "key10": "rCPTudvp8bng5MnsBek6dCMTVE6oxJ7E15vkP1PRNovLs8ooAijRFcaPSo9ZGmVqeP7yhynZgrR3YYU2qJMqGJr",
  "key11": "54L4LB2zYHp2VDKyqSZBqncsE6NHTxSwMcu15FoeJ2NhE1KHGNAJJ8ikyLRjMgJXoiRMZqYBwhLRccbKR8Qw2SQ8",
  "key12": "4guQTLkPJEteGTyGBVxkSf5uNQooXRRfDySb5xPN7FkT1PBqSzJ4NMkrAjpwZo71apQnjiLwfzX4V4EKuFHNg65k",
  "key13": "3qw9s3XQ3Ba3uoG8zZg91xsb96JUQKxGt7Fhprp9fQmwxQ3kxMov8oY23YGAmG5h2CwYVVJdart19QNFZwqawUyC",
  "key14": "sG2DQsjXPrjibgyMvRjvSFYaZcoAtUp6PoT7FNE3NnZAJ2wVhSENqS6tSSTpMRUjHiQMViNLA9d7R8r4DT3GgFu",
  "key15": "1sjYz339kjDiappv5FA1VSsWoDoUmS27MrXWBkghqY9x8AWgzaeGcC6PJiedMofs7ByBKXhooUJju6kCo3jJCmR",
  "key16": "4MqvsPqHcjfY6y8Vz6W7123m4R6jG7WMBUSfHHkXADps6rKrWuo5hwhMfMYF3wM1QrcG4gQBkggTbVdAKomCG36j",
  "key17": "3Ty8hAMdzTuEauy8jbhNi5HRauskmgQr7GV2HqUGTJi79RvQpFDBNd7QFQEPuFWA5HzvGK2EDwGU8W9hLUSZQWEC",
  "key18": "8cU95XxTJHBargb4VAFXToNZLnKLNK9Jo23Dm4ydXALS3NRLYdUx4wkB1ZQfqme9VgNUHTPsSX7FzCKD8rdRTU9",
  "key19": "4cdJfrNxmeN2q488SKJvHQjabjTanGmdntQ6Fzm7r2jGWbrH1bQAVvVje4iSV6k8LYVgAurJanVbeWL9EV4jkdH2",
  "key20": "kduu53V2xoqyB2zy3qyaej7UMhUyeTu7HSUh2xJ89o4fU9EueSLMRPnH825oTScxC5tgJRurrVfvAdR9MqyLBJC",
  "key21": "36es6SfJZ7gqFrpbY9i5cQJ5gENz5BvyJ6E8CRRRESDJrgQL6TSVs6mJ1MKE18fUPjMZTwPfSJz7qGnn4W8pTNaJ",
  "key22": "5zRG5Ghq45J96csXdwPpadp4NDFVStgQSBqWisHq59hEdptH6sSZ33HmziU6isEPhS1b9PX6uGEwfMkPHRR3hMs4",
  "key23": "GMbnEvxAFmmxuEpjrVHi5mw4UJ4v2SFfSGAVXjRfspXN9nRdHayr14W6CkvRu2xQaNpuEAuLxdtmMjXnvfmTvcU",
  "key24": "kVdiP5stfScqKEPNctXqhhy7yzwf6pqoKCdbXVrAw9k2oimL7XTtvYauHSDenJ5Xn2fy5H5wHguKgUJF9dYAb8a",
  "key25": "4oDtMhdCw4BWwC9BRqCs2nvQ1seC6VNR5XTCCv6ZtU3yh1jQ2eKcgcvszN87Dy18GbBcLPh9SuDSH5mUMxhjkqxv",
  "key26": "3CoEwy9ZuJ8SqZoAts3wk24psxafYzwvJHpAN177D2odej3GZUgKzjKC35zdzd1o9trvZtguPd6JKh4NYY22T7jU",
  "key27": "4e5rvjMMQBdpN7qo5D9rbZBY2JGsMCVYHpt53bhF7LQ5LRo2PP9F2JeQ544vtQUXsGMDykf8uYbGkP8V4gui7AYL",
  "key28": "2DpZUsSHYDreJjeL5Exh273TEvi5JqUuffQnmy7N4EDyL6iMayES6MNz8FANiR9ahjuUPvCHbrcktqBVvBdt7RQc",
  "key29": "3RQNTuGZbEhVmDed9aXjkG1EfdfXRafKysbjuyUwCYpVma1S63i9QpDdmXsaC7rAvqd7j4Kdjm8QZxY2ADoZoWqk",
  "key30": "23467zoqxbf4pvgJdohrFit8BSZNLyR5HaESaav1KYo57dtopKMRSUwzgFA4xh478mLFo8YdLARcP9renquTce8b",
  "key31": "LSaehr7RdHZ5nL3nnK9bjCyNGFmGbFd4bEJd87S5fQ4Xhp2dKuVZf65EJRFyzxu63TveMyNbVHaxWzDHRLyZrKx",
  "key32": "23j27zYxvQocWZWmDHXddoGNKFS1JLVa47W5J2h9JabSiK1SC9695Wv9x6hhCQDg7W81CEXeiqsu83d2rpWwot2v",
  "key33": "3qZJFXzqwmapUsmCHo9oyeoTfGa35Ae478jDaFSoV5j7nRYeRzd4LmcfwZ4ktAHguxAASqqqfFLFnL3s1WyATWyh",
  "key34": "2QKMUHtGDrkG5uz24sK5tQKtLzn2Ke7kQeNWyFqio9ejn5eig55xZN9tTwsqGosXHvHwU4fWWMW48RSRXH5ZcLNu",
  "key35": "4XhmsS7PdKtNwoscZMMLabjVVJpjbdR1HSsp9zdNQH3nZgZ1FmVKanh3eYkDMh12EDqv7zSMRsiuLhrRMAm13GTL",
  "key36": "55Evzghja84rDQ1zJRqpqUSYW9VaZT8WSffJwRoaJf8sK2BsbejXgump4NzQpQwk7ymRJjh3gpP82HBT5UwNRUdJ",
  "key37": "5ixBzDTQkTcxwTcFRuC9nzBdpUVs3qyc6UDHw2v1ZXpqLLS3s77oC2VaryppYNgD7uAbMhjHRTcRjo4SeU4cdLCW"
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
