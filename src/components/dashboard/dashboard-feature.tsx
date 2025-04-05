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
    "3x38UAg8V95bBnhvMKuL2bqj9zETrVcu9zXW4S6g2CiEJDAsZNMeSqM1FUhzmf8h2D5cz2wYvGSBoPN2KCjYhsS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HggypohqEnRA7brJDPny15pZ3MiGtxF4Ynr74Fww7miiBCZKjELti33zS1FvhGqqH8hipMfnZs2tnGNSaY8cpUy",
  "key1": "2tEBVGHw1ZVFkxEX58zXwDUp1rmvtzqgVu3aN3p8gX4Ad4gSF5JC9xG9GP85hkcgH1K4H2sTz7FtW1t7cssjo4Es",
  "key2": "47tkgFVgcyWvgQHZhnBesenA1LPdCiMMXfydHi2PuKvY3xbrqsLVnGn7MpoW7vrdSTGK3H5osVA8ifQSYqVtaTPX",
  "key3": "3Vcmq4H9mDzeJmnGY2HJe9VADwpffmSJWK7UnW3vSwq2ohTxJCGYpRKtEu3eZpwULyAKWqdPDyqF3jbuvFMd6x3y",
  "key4": "EvoKzmUuZCUQHb8nBKa9satRwAs1ahU9mQse5okKBtC5qosxcC6xqibn2kYfAfDW1Eusn9qmFWvv3ZwSQwDeGF6",
  "key5": "4urgShkrNeZN8Pk8xtDDaqbiptV3J6fiMHfVcn6J3nkiALdwfqpdsSc8uzwbUAFpnUqSPL6JMzgQ1scCDvU3fh5x",
  "key6": "2nSq2DP4Tox9HEiDKXtyMqs2bqsUSyYfE4PWy1PWQuLZTeXoNwWs4xgTtyxELRh6X44twLRjoqmvdweVAwvoRp6z",
  "key7": "34QXLYoSuNCP7ZGJqeNPt5KdQeVYc7uARbjTpWe4DX6BHZ8j8fAiv8htw6sbCpLkmVcmPf9Doqa8U1fxVFrW5eqt",
  "key8": "3nnQYtcBPT2VRrVpm3FnHsurbDtJak4aAHVgFH4Fg68MuBgCzUKJkkxBBFoGpA4qc3X5dGEHL6y1tiRMMkt3aGEd",
  "key9": "376aTMLyaEMRLzU79ND6q9SZMFkW2nQt2STDnk35vivTZtrAS6JgwpyBo4FXmtzegxxftPwZNYMPqJt7JZhphyxn",
  "key10": "4SZyXugsZpV5Wqk1VhccTqQ8BLX2S4i6ryFdhthJ4NuQb2k3XsGu75XL9NxF6oWN2VYo5ci7ZKtNzBPxfk27mENg",
  "key11": "4VEV5cJ1NT4fe4oQsPhkc92WxfqUp1d3ky8D4k66TCtCWPoxj2qEFzxUmwdMh2PKBjaXJpa9Lvzz1kCEHd8oWfJp",
  "key12": "2xJesjyHZmhMcCzF2NhThwrBJrejcp5A1sWCbmdry9o5dZLfsJ6wpLAbpmBBWoTVTMWWFE6nrN1rydNwxR2qr984",
  "key13": "4FynsfBuuy7gYv7qH666kzAhcBtANLfDh1N8q5V8fjb5KxZ6Ks5UiSYcVbFTzn2yw7kCfGRZnCyUJd7K8zrHHGcV",
  "key14": "S1inuf1SVDELmVMdZxN9h5CnDSEvKqXfoseAXYUyddJ8KV9Xg78oiC9iz3iVuzfhAuSazFYyDg4wbEo7BDDptJy",
  "key15": "597ek75ieLtGuD13VbMjbJZtu8cSLpefkRCkkMM1gaWRYMQiLiY8GEgQwwPVUBQ2YAtzKYV8txkwVsjF7Qewb8fL",
  "key16": "5EeskCdgBKYrZVtvHPgcifLod9TheyfkJH1ZGp3CVhx9UWYQyxDPZ3VfcKDWbD6dSLAS59mUMp9wRFcbMUVCjSZk",
  "key17": "21KPZHCZSKTNavJVYkxLiaFQ8gGVC9XAY9Hxs3REThDCth59ACqXhqgabcq2yam5Vyofrqo9i3xHMrs2ZdBfNSzD",
  "key18": "2rH3TAqAqkUVkNA4up1oPn3azqANBshqUgdHsxXXvSzj3y9GsieEx2CMHrEJqUWe6FuM5pNo8ymuFctd6eBAi4CP",
  "key19": "3AG1QBf5HKVnHNreRuQrcJ1JhF9hf4tQ1iN6LhS9wUGahzRhkZd9dkEg6aUFayqdmYpR5BLhxSuW8cquP5D3iGT8",
  "key20": "pstdvmZ3SEi392nM5yCAN1XjLiwZGJWdwBeX2p98NPcNPjPzy38dP95698JmYJDrU1HKMgDDNobcDNGmDdB4Eja",
  "key21": "3S5BXbPn1wuaXYNSxjKBmiKxKNGJpCvRVQv7dH9XAWgBZXzNnW3e4qgM4xcYLfjS6ekvHXhQRoCUocqeS55ajuU3",
  "key22": "3pYyQYxZexPv9LECnQd32D8h8C7VVvrgh3GwiB7e8DpefidzirAHBemKzpg4WGCZD8a28MYkd6Mf4c5YkMYyNDaq",
  "key23": "4acVdhpJySZMSq8mGtto5dayc7DBFtndoRz3RuN3mZa8ZxBzB356dSjoL8tc2i5GPvTGGSbCN6MvaYTshuevJoA3",
  "key24": "4ZyLwNhobZRniX6tGAcASgQmWzgneiBwawNP37s2Joq7y8U36fME8KgUQbzweUZE5o4YqbU2iJguUxnbSt6azAkg",
  "key25": "62rEzXCGhuHjE7rW7YytABbS31mseBvHkumcjxBoMDQUefzHv1DupPnjxjFA3aZgjwsPuV72GYMn2s8PAjEiCnNb",
  "key26": "3V5zxpWFmX1J2GqNvK6mpayBaEbspj16TrFf6qVHZdAH6hwd7vuehTQn8cyPJcp5NSzieKW7o3sKBVEHmbZV9AoZ",
  "key27": "3uT8kwwvsbMryiE8QSeTahG5zNwEafamPSmtgANn9oYaV5gmDmUTquidZXruDgM8RiHyc8bnk41fm91b2u1tM4Wb",
  "key28": "5k9NBwb8QZ22915seYZ9T5ttncdUx43PD8J1fFZ5N2Q8cmf8EMtXunTC7CJVZ4JJnTgeqCsqewZznAwhpUFvkD2C",
  "key29": "4CbLZF3LSKxPWPoiwVAa2SAeYu4mXTbqFDz2dpPkFj5v51PTxVQgiz3qzARb1JzwwdTLPHCrEKoc931CrB7YnD4T",
  "key30": "45fbsNqte4kkj5LovhBDRutXhR7jWg4aCDoNXeW8ZMV8npJbM1cN6RVJTnefX5qbQiime6KY2e5SJSyqrRAD9pGd",
  "key31": "2Jf1sQkHat3gB69dM9mbmuXUB5HQUnhcSm7CCQhPubM3bbmiZattJzeq3PzEZw29MDWPFB5YvvDiRFHnxLRiQZTG",
  "key32": "7GJWEwM9hkhm79rYU1etfTkF4HFcyiBD9fdi7fMUUbVnoTMADvBZZBk9oeYpYB2wuqvvJd6vyiLdD1zTuCu2Erd",
  "key33": "daNcj3RrYj2rGFPu6H5hwiNMnK6PdwAfqyD73VqySmYXVDmuz7X6bEVc9Wwi2Jh6MbXzkxrPNZd184uCaatMvsX",
  "key34": "5XmiZDx9L3AVKd3TrXKM1CXSbg4tCrpcMfMmzXZfHN1sKkJLUt9eQh6RPWG7pxcrFGJUpUhonVmcnVnT2d4SdH6X",
  "key35": "55LNiL58sEWHrxrvAUfd4UK7vACXR6kCjeYVA35kUK2e7aMeaMk5hnFs8LrLHkP6YePPb4Y7q2WhPagGiRmFmvFQ",
  "key36": "5q7gTgRdw9DRfubVhowAZF2Zo7byMLJVXEn9tmSdPxKVF9h4LXs55Je8muTKmJnBRyFi3icUvVTzKf6ZJdCww13Z",
  "key37": "3t8KsihZUhX6cKChQoPGKovCXxp7jubghrj4eRopE7rcymBHPGzqn4wgiekzCXthak5pvqZjkQHZLypp1cn3xesz",
  "key38": "d1aX6DmFqeC4Yarrij2N5WUpNGYPpKupirWQx1SX26JZSPFhaXBqScuKWi9SDaZWostFTn4mMcGiQudcX9W9nap",
  "key39": "3AAYoE68Tg2YHJjHzZTEeAZpLAoWq1dHsyxMthR7oTsvi6bf6HNVc4MJyomZo4P7xMDRLUXEsv776aTad5q2Bhhy",
  "key40": "XACh4sruojbVF2fe2PUmo2899DZ3mcZTpauef2ha6dTRQSPfrzu3ZNxuagjDMX5Rm8La9kGoBG97Txwt9wMJEYu",
  "key41": "2HZsVmD4dBPenK9h9ULq3v8sXpL2CxZBfXbaNK9uD359DfSJkDLFFcXZkhw6BC3nwtn882yGf3qSHAQgoR8K429d",
  "key42": "2fBi6rH5NLxRLZzXHjbezPNLBuWFaV2ohoc4M5w86WHvzWQFqkBR89NjauoeqSWhjcyY8h5gYs9iANktiWkwkwAx",
  "key43": "WrGBjoQFPMHqyQYCuwjdu4AsRT62oQCJjZtp1Y2kyUcGcZnZPAvvqhuZNy9YvZgDrGWeJodydZPqXtW3tqj7m7u",
  "key44": "3rh32SDdFpMtttaSyMzcwxUY1BnyLkn3Uk1Br6R5aNgkJJ4hRBje3TyneiKUBrWXCQUPwT7XFqZd4Hgc42yW4amj",
  "key45": "2CPG4tHv735iKdWU2YbcyagNHWew7jjXSiZPCjbNu62h69zexaCF9HprU9Xpz8E5JYGgb1JJ31QAed8dPZUHLWHN",
  "key46": "4ic6y6xnQqknH96mJdw8tFPLZu6EAgDDqJzZy5e2iSm276dCZHhUhL8os3qGJU7ArxWHegrRcULae97HVraKn7aJ",
  "key47": "5gSszURhL6LeJnHkdBAk4UAZnbr3fJKqasYFF8UWHVTxubjF1L2imJfdh1U3WSCHLtwMCLbQCHk6F87gTF2xa4aj"
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
