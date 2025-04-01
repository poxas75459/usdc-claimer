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
    "2cZXBTujktGGksTr4RAiMTsJn8m9DSAGphLFtdyzPLw5jPFzNpbFCBmeamGMF2D3hEtMqo7qEqzTkmW3ZfNchorD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s8Xkg8uTF2FcSx2TpGXXoaUVG3U4tcYjNCzVaaNyfmXnLp2UnemTR2SvA6Z7An59Wme4bvazcBKnNmAVh6qdUXZ",
  "key1": "64nqPPJ95y5NEQftc9WhoNCosADgcyEamoDwoyJk6Jz67AQ7xmh6h9e32gsfndsGBvyWi8UPiXxCZNhuE6YXK7U6",
  "key2": "39VXokxmkERsKwZYnyULLKgQj9iCcBJ9J9WPAC4VhV7i4uhLbVTVntuqZ8ZSMLrvnRJWqTgyibGa4pSRhQ9XhkrB",
  "key3": "5ZSYwtk1tmcE5aQhogEoympSYqH5iSGXmzfZnF5vcZpseXfpRNHUp4xPFngWTUw7Jx49TGaQMVFtw4QfP996Xhw7",
  "key4": "3rYvkEs69p8hSPz7y4vkyKDyPz7hrkRGf4w4t5EYbfW6UcfZHmKQZzNWPkrHBEi2k5ArsZtrby6pLHxQmby8dJn7",
  "key5": "3QgkUZGZg7no3Gv2aTf81f3Qv5kEA32iCe5m5kRwdcDe9jPd2sDk3tjFrJvNge125rLjYAYw2F5MqMc8i23GHQiS",
  "key6": "3wQZUhaqnTcharbAd8Qjne8eQ6eWitdaHWn6KD8o2MnyE9c6X8BK8HBC5Lp7gZK856PzseiHwurJGL8is62L492p",
  "key7": "5K1NJFQLayhukCk9YSvC9PimCBHijnV98BjHSJUeUwSrAXxAWB3EukPMet4EBxJdpCQNkWwJRCeXKbVrsyqAzev2",
  "key8": "4iRJs64qxF6mygtGpD9g7t3h98NYCBJqRPfHdk9bTqQWUttZ8S3G77ePr9LdGV9kij6x2mQpBrbSkzcpSwGPZ6X4",
  "key9": "3A4EK9LzJBKS1pqbnZuqJEVzyAXdtaGWrawHRyXUL4a7fECPxCXQXE3yD8FGSZhbk8bRtyJcYJKXmZaMUujFEYXy",
  "key10": "24i38ZQnw5mAh1aLRqXA39K2thcroKA2nvGH17gghUK83Qi8bxCg3VZKDj6cQut3sSTLZSiutZGETcYxS1R9xoqV",
  "key11": "4wXkqp1PMJN1XzdTHmcQzMuKBu2mKvti6waSxcFcg5tBqn1nAABQXgJR29ZGERgx9C6byNbb64cSyGHmw6of1yg9",
  "key12": "VR1tFAAimZec51wanfV4ptbG4VPujtrrEJuQEF57K5VCaj5TcofVSru6SzncHLnR4UGmseuNrLEf5mYixRcPgqU",
  "key13": "3N2UGr8B831cB2JvXSSteUN76N94Ve7XXkszH6NRUTf74moigFiUTwbA4wwyjCBDWhNjfoKthnoAhKs2jJENosgD",
  "key14": "5VvQXNKHakwtrbVy3p1ea9PZsd8ypu8onFQiFHYbiMdbvmKnPk1FbcYZKZV6kd4M2X8rPMTWcKJTHGFFjWabf6Hy",
  "key15": "3wDtzFothboKiYHWWbhoEhhXi4E6D3cykwbnU8hSf8ZC7yvRn8u7ET1hsbZkPXXZza2RHCVYfcSHyiaAeKg8TPnr",
  "key16": "3P7wYHEi7kG5DTigy21P3Pxa6Fjc7545RaMoNePfNXDiABVMvNLsnAYiGnxEUFomKH3CSkuYfKX4mKZST7xCLWkQ",
  "key17": "4GZWTbN9ZmR6VxsAnex67SemcWhWRPh7wk9SNNYDoA3BsWF8vgc8tqRZERxr3Eegis8LYfvASmv5Tu1kFRAqRAB5",
  "key18": "3ZCa5pEomZ66efwmPk8hqrYkM7jSi8H4wq45cHQDYCmC5g8Z5FHuC7u7vVyQSthKfC33DoiPXXGons7NFy3Ms8FE",
  "key19": "2sS894VUCwN73CNXLHoqqcAiZuw6BSNscYCArjYsb8zqMXBvvkdKoXA8QxDJaAbbg96upvyRTUiCiJPaB2H9CpR8",
  "key20": "4iSxzaNmDkyW5L7WsVzvJH5EgaRFS5d21XZKs8uWxGShbqimF4rjc4gAHmxQ2fqPEnioMGuULNbuxMR3peiQ7j89",
  "key21": "3JjiK8UqP2TPSHUd6Zyfe9CYihbyeUQhKaPw3DYPLjW2Yoa1oKxWixHDNSNLLDnsuyaEwNjYvXRGybYi1kkmar1C",
  "key22": "4xBAqFzYjxjtmnorTMPX4aYKV9Hqtk3dp56Db9uJppCYo68TPKEcZVro2xCR2obgAhUsAggpqMoW34XC2Fp8GRmr",
  "key23": "4GTJpzr1RTbERPAox1gs8EZMXHG4fsJ94S3xnV7siz5DCg6VsWJpjT4kn4LevuGsN58BMXE3N8t8kGRacmA9snuQ",
  "key24": "2GXn7YjYLNfKrJSfDEcCME3B5jGqyF3AQDihqQX9NjxAr23mLtUWLF7QH42vww6QEEdwMk862wCeL3xpKeDfgjM9",
  "key25": "5orSpnXq9zWswExLAhsvAb2LGDuSCwy2pnx9VSu6av2aXQtWJjzSeSDLLYHMYCUyP1qZTBRhnbFSK2XdcUe7nDJj",
  "key26": "AaUgDgTbyftzJPb7ivqHssXkXwxs8SMX5HzwAP457oHgVPx6CeEzuiXQ7yN7fDt7xMQvMndPZYjoEAskDTNSP4Z",
  "key27": "3LGxEebyMuLcNpQ7KED5yn1oXJF2qabFTxMHEZ9CBRfFT7K9sjJNQ3pWcz74QrMrze1YhkY4wd76LE3ZYR1VF3mU",
  "key28": "5GxzkPPnbhDqHZo6oZaS45cXaynqYZksdZPT343oofJRPRSwZiie2npUH8zyAPZVuDy1C6KGptaMYUthtyK1xZ8w",
  "key29": "3uqjzHXvyuXCWYY7QybAhE3mGdtCrxu8VNSYCEhGsEZv9FGnGFiiX1hKfHaifudc69VQpmnUH8Aqd6xNxNeKWhGT",
  "key30": "NZRuB5ys95SeWuvs7KmfN35quW4r8U6TuJxuj1V17aKWdc9D4Y2ZWiziad2eKZcBjfQ6SSPuLzM1nPuJ5JS7ZTS",
  "key31": "5yZWUX2T28ycrDHYefFy1eGmgEuVTWayrzZXc7pSk6HirJjAB741Vo1EfTEvTWTL2Dqa1WguEx3bHNAButUtGGL3",
  "key32": "5aQxn379Rg75ehVCbYwYJQHX3ssKwWsmfGv8CbGhS7PZekJF7oBb6CYwzTm97yqgfnzKXN8ij7xqDqAg9ED6TP8a",
  "key33": "38JGFd8Y1jheKnVxn2nnr6FMz3mi87MJKNwZ4bXkQHFpNNBrWGdyeqC1qknJ3DsixSTXvwezCSWd2SWTJawDRaAt",
  "key34": "2iQKkP1i4pQWep9Jo84fjZ8f4Wv3U3jS2hxGiyUjZE3Bc7GW1SpXUP7VUQu9iKEjRp2BfLSza2AYwbsTJCqbQvSa",
  "key35": "Vuji2wWiXMt473Rny7YNwzmCoMfjxTno3bvGjV5DcRwdBiPHNQR3FSPPhxh66xmd6t3GWXmo7cQuyo8LBGTfgWN",
  "key36": "2nXxGM3CYZeAsMHu2CGaN3wxjcRUp41qaqX2w4k4bcVA4DfwKzukDpY6Rb8XyePqGFFAWtsSTC1B4cWAvaXgeL9w"
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
