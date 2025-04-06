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
    "3PntfxCNgs7ehoFptGcyLG87xd2AsiWoCJ5s9wNWiXnU3wogaaor5TZj9fPFRn41XZUqG6a55shjbXsJbg4jQqaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2715rvy58PgPHwyxuBvuBERumK6JT2ghQDRi4ijNxUNqokFQ93cxzHomSfhBNhw1W6ByrZvLyqsa4uxQuX1CRgSa",
  "key1": "5wXC1kc9HihSHGTGsJs9XoYJLEVkNMuLNPTYcANYs8NEgsxx1kngD9PDAHHzfb5aFobYmw7KdzEV8oCYzmih6vfz",
  "key2": "4DnqbnxsVdVzHt5SrtXiS1kdr8sCYFZynU1hpQ4xgVVD2sQjtBXWeYE8Q7qJ7eiuRJ8TGmchVjvcULeiLZQwxmuw",
  "key3": "4P2SBdwZUAnx9Q1NZ5fuhjk6nCRL77JDABtvoKxQTeK3T82muLT1EW2hNv7r7R7TEyZYrVk8CWCXAfRvEmkGBe3g",
  "key4": "5kG9oNsWGhMZuSt77hQnatVmrENkJXTLJHsCjg4YX6TacVC8xcG61Qn6D3ha2uUUfk3g8NYJe1Vf5uKXBCRGtg4R",
  "key5": "5cRbHXSsBXeLK9kExrH4kpNhzv4ZHqbGpR2eKZYAw33hxUd8hDPcogLDdWQGSZBn47aTvBFL6EyPuxgmWv9efVuB",
  "key6": "5qrtZ9JMXFCwF8ik6iLjf3jBmZ1zMC4X8CMvbZvMBNMft3qAvSRZARaRkNTLEXbDErBH8zgnLeiPsx2fPMQWk32b",
  "key7": "24gFurLRhfE9prAY8FX4s5EXN2BvDu38X4ZpKmversUF7cQj4391Vt4Fi93gNVpWJ8w8WME3CjzMHDcxtXtZjUcu",
  "key8": "MX7pwzm8xUCHE4jYC9DbNvCexubGKtnNoicNQAeP2oPJqv7m8ttPrc7JDYdSDvCQcQd3SaQLcr5UqfXqeGtxnYr",
  "key9": "4vfJGHxkj2eg47KMvZerwjE5ngZRUPnnXWsKWKBzLpBCnED1vcJB9qFomXtNbmMHVaRbQLRRJzQ6WfyYxmrAzfae",
  "key10": "2Ssz3GNzwUEoZppYVKvwdeKZMhXvyFPxGTEj92fKckGnKj6Eaqd3Ht11H8ieNuMiayfaUYrSKhzQUDhCk9VrsECQ",
  "key11": "uT4swunAJqrJVD3dWin9Ttqp8SCiiRK24NCWEQAfD5iGFZqJFxBFJnyYD2v5YRnnmk1CASpgQjWkUjFUAqyNANv",
  "key12": "9yL3qdtxC1Ri7hbeGNFiR2crHKdWoz2samet1gXUjnNcqku9v6xWacij3SGKZqtFxPKqJY52ifVUoqH1LHgY22C",
  "key13": "2UMAArEn1q4XuTt2uXnboHFHrhUnjwG2KXCmRfoQ7HGWrKpHfu8MYuBtuqFx3t1MJ3MoMrZs3R7vHkQpVKxrmLrE",
  "key14": "zFTLzyZNEJFXtaZZ6MEbj3C3BsXBqMGoC6cQfLQE8BgeAohrVs9eqgm6ewS1aHFAo7VWJAkrzX9jxELQrmYrBB3",
  "key15": "w2NvQiWdAZMy4hdfMD5AKn7NnyUaVJdU6488QnN2zwFLfwkYEdtAwB2oV6dUxBfWYDWNDKHTerfy4VVTwse5HsF",
  "key16": "2yWKjPY9q8aFv1m1622wzQmJcWCqC5AxZbgNaUhzCHtgnTiRmDYxuML1Z6CBaiuPao48TLg9ApLGXFkXtL9AQRWc",
  "key17": "3WvTs5aQT7jcAF3v2siepYsD3fwAEjWQ4TCfogMFhBrjLjnsaxovQt8RKRz69dhaFKPPYubYNh9G16U8Be5oMRw2",
  "key18": "4UXohV2BtysrRgHyyEnxCzwFBddtfz4aqd6qaqcdBmFa8VeB3cNW1LJ1ZhhbxwD219M39TeT8Q2vh6NbYGRcPNJ5",
  "key19": "5xsweuQgxwoJNaJGyucpTfDnT6oVaa6zFTAkwDouqcL1JvKUrN9AyPSQk8Equ3AGfd8rzBvTLzE7y66FTguK9wY7",
  "key20": "5rjkyyoEZQJpKnoP5CLF8VyTPs4L3AfUezwahhXoKjY1ScqBeoMTzshcN1AinHyd5rFDBFoHUiSAg9GkPb2SzB9W",
  "key21": "2UBdVtaG3dEL7yvJQHCaakS1Zh7Egkuxvx9iYsZqTtAjDyFoWqxJ7DnngPUtXGQC5uNewdWyuqPVsd3ErEWpa64Q",
  "key22": "2RGKVxvVE2XHQh6DcxCeRtJtJfgmEmrbQ3fuZeKtEWFugKV2bxVC25H5wVR4tGyWGFbCLAgtk4izG2tLHYRxK8eR",
  "key23": "3GEg8r1jSmtE8cxutMrS5DRujfLWbUsed8RCV7MPKp5ReNhJZUvhUfCcMNEjePeY8bn1x3ML9dUZMoh6Z6DHuKif",
  "key24": "42yS58a4yvD5wTmtkXN3c1m9GcaNKodSQk5rmzBS7pNJ8qJeaDACABTRLgKwNdnYo1bHmc5uZE5Q1V7EdbsSxbLp",
  "key25": "4sUv8FHY51ztK6z6PAVRtz7D2VVypyTvgZrAh863XKX9EfgUkW5M98dp2MtFnQMjahEWymt5XP86ZhiH9tM1yeYq",
  "key26": "3uuaRvQpScxrMvNha2Sbx9U5jqzt4sgDWGnhYeT7JW4GpS9LPGoECrek8BhoWuQ378frN5TYXkzgdP1dAWskVKAg",
  "key27": "57im6B7BihADwx6Vi64GMP1eCjVRh1xEEmQqmxU37fBD4fFeVGyMXQLshrq4NGQpWs3buvi7zvgQggXLqjejbEaq",
  "key28": "92g1MThgrLWhBaf2WPjtnhb8U1z89EbpZuWCsCv4ELQ8T5FdV9mBLW3AjKfwVGRaMCk2oZfeNE6fkTHs7Er2XoX",
  "key29": "rodPU3BW5sx3sektyKrdFBrb84pb1NsLgAR2vnhZ6qtUxjdvp5q2Aoryw7fP9RdkcLHhHRzSDUnbasSbELcxB7p",
  "key30": "3y7i8FWSo1M5TSeorZ5cqYpQJXtGRGE9zWwYyKYpw18uTz9eYspfDyT6E7GeV4riwbQFdDNqpBqK8ajk55Xaag2X",
  "key31": "3NNHPzPkkffHPP1zr4qDjKJmLhonrjLbwXCfx63EAxvEeXycpFWps5kvh3QeTGxqmcuoKoTjiYTHFFXrztR57L5c",
  "key32": "3iKeAZtq8H6QtfyfZ7DsVP5YySpvkGPgHoixfE6cQvz82o2vnxtgPTw5fuZ9cJJxNuNwqr5oWaKqsgSSvDURyN2k",
  "key33": "5ZVWt522f8ywd9d367EjpHZpRr32xJtacAf9MRzAQpYeewseqqRuNyzMx9dXtdZBx1634kH29GKxR9im3FDuEdmG",
  "key34": "618SGrg56KHkbndumAHZx4eXESaGvVPpBCxXpTc3Wn1VUCsYGZzCFRh4WJpx5Yf3LNaM4J5XdVzrjGM24Go6W6HQ",
  "key35": "33dunFpJgUU5dZBteQTMewJbNG5Q5rMi57pJPu3mgMnFHzRRpE1J5K6Rv6QzxuDZoV2Ch8MZQQYdc5RhZzcVkT6A",
  "key36": "2nbZLgwse4TQaeDC5YmYo4DQxsC1cBi89HRTot4RGfkZGJFmf5WiBXi1trXDqfHX27n8e4qgAutinuvyehJKjdWS",
  "key37": "49m47kvUMdtgFn2bGtbkKJQczegUb662p2AYN8yrwJ8ziZfi6MXwd61q7w8UcjkiEVr7sTXJN4TAa6xkzSQnY5U3",
  "key38": "5b3TkaqiVNLLCzR6vsxGannt4zpNT3tgouw9Tz59qrPAJ1QxXSbWY3NgfGTTrykTF45LdTGCt5p8AygdKc6nomwg",
  "key39": "4ShTREABLQRWBcHvzR8wEGhxJX6wzCx99JPufqUimJSHy88igNz2cBGjxgY1upLDHpC2QZVpsRUfMF41DhLrvWLg",
  "key40": "3zmsgTKHthjzDmgDUw1A5so7hRqreccMoJB1rDK9yMPXiSiC7uSqtdRE4MCNs3P7YyKcza3zuwXkHWTu1GMktoDb",
  "key41": "61ARV43bi68URPaaz1DbSB2ECjHnhRb2vJQErLWGY313DKSGUoZwyogZQHwdsCQzpMGJoVsy3EVVgs4LScq5qsxK",
  "key42": "3DADZvkEE5uwppWXQFBRzzXTEG1PZKJau6AXPmmfBPyFirhvV58NMY5biBWppMuT3sKYdK4jdC7CwiDYpPQqUd2q",
  "key43": "34M4xesJxjmjL167NyHLeqsWNLon7aPGGtrWqNottHkzQgtKQ8zjqJg5TtXVAwh2KGsAHUYFEhLrgQanKUaofaHj",
  "key44": "5wL4YqUEJwsBZqGRXXCwQKdtedLhAMtDm3v53EPLbsRbUSxNegZvDXoPTawXKHWc1N2yAvMjGywbYoaTHwxYuXZo",
  "key45": "4quxhSsNwzL7oJeFDN66Vg7i2Q9WRAdJFCg4Tjc6eCfkCL7fEUvWq93BvBhDaqSYspmC3uZ2eYqeqhWkGUKaJntq",
  "key46": "2PQeMizmjvzw2NfKPxJEtdGKmRJX3d1DEmxwMCVeP6D8dKbxWbfHXbjGQgRm52dAjisJoxtr7BxpyevPkpydUoEw",
  "key47": "4Y72cnSuMots5cHZd482D7Pg2gND83uV5y5pH5AzRhh8dseVjkjYzLiLeCK4JwqzVJHRUZLp5JejZGjgDMzMxuvu",
  "key48": "5ACMdVKRiDbyrnYGqZJ92w726qQ6tPURXtpQCqM4fFmse3qrxUCPjx2zENejTndrKLh5CphUhsBbinRGBqRH8rN8"
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
