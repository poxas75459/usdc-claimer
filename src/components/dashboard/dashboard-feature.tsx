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
    "3mbFC3T3ECKtA5z71CBr5deK2GmDrmbLkcbR9qSMNgZCbVMqMa7tmanhrHZAiXXMwatYRFDhBzUaZFzFtR5rLpwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "516jY7RtEPDbtbnB9MgsSSAWy6UiT9ZUTCWY7sT9t2FmvKauvDbN9os6KEVAxontNpcaztihnrYu2bmDboUhsJcz",
  "key1": "2v9ANLa6uaH7NBGp5NU733EaVT5YQu6tpNTgm9y13qJd4EzdPq8Qs3EAVmFYhXSsff6CwkdaJFdtfb36int4Kukt",
  "key2": "3UAnzXhgSfNFdvzH56CqvW7qHcGoocPvQ12mpaf8wNMG9PY38AXYVQWhdR1Eg5GbSBTKJ8aLFYdx1uhxCEV6ALpS",
  "key3": "28cYWvfsTMXixwNmeQ6gTgQygsbEeJoQVdFERttCQHwU1vYjdcsrPPdfksSU8wqm7nTY4UoeKJvFa2ZVpjzCD6Fq",
  "key4": "55ytindCLEs1TELE57HhuNSejvKLEfgWDgYJBSYiig8pTTPui5NWmo3V4A67N6EcMbA1psFgC2hLAwWBwcdrVVd5",
  "key5": "5tNN6ynDrjpzxRKin2TAAKDu1z81Xb7LLth2RUS7CnMeYcAbDgeACPTHz4YXNrLbbYF4Ydp1coUbu6v2ukaYLJ6g",
  "key6": "4TLJcGm1GU71n36qUkHmtyGRXPJiHh5XTZ3mziZRFh1GFy3ZEapuhcHKjFgUru31Fv5B4bJDKXMqyZydDrys8hoW",
  "key7": "xgVLC1AMeGeFK8iCxdvVMrGDKKdA7qQqz6GAhgGavLKMcfPpfxte8gdjuYHamiYCckTEAUc6CwQ4pxUSqNkww2f",
  "key8": "574AuSHfCGfRQqXiAp2dV23AVnMz3asrDMAfJYLfYGkZQHKFSod6arXZFG4LKdXzJxBEjjmYbwC4qjfwvT9DfrEo",
  "key9": "3VxYdNYXN37s6nZveStdoHmYsdZrZEzzQvrQUSn5y3AzVydepqWVGMHFk9fuLHpFh2636e2Jiby3zpXomJmVsu4f",
  "key10": "498bdFF86XRfqCHz74H6KDxCVZnD9StFVG87TmzHiZgx5H9t3YHQZTeXmrnArahAJW46SYGQ5nYPv35pgyYGn8H4",
  "key11": "3AjdoJjoqf2dVFF6co1pY74mT3e7vP3B6rJVrmeZcTwex6YuhVMEdwDcmvDAPZkEpj7xHx25CfNoSWkKgZBdzR6S",
  "key12": "4FVDJ9PVYxvL2VjmEwTaN6MmzEjS4TnU8Z8sdHSv5MdgCeu8WGX1zHbnKALxXBRCN1Rx8Ma248jq5NceBcZQDh2e",
  "key13": "2era1GRo1KdEUm8u4iUDEJkhZftnQYsYkGosNdvXgdzQKC2BzRZwDrT6F7gXCP3vL7fGvYzRDtV8af7FTsMeAQ7",
  "key14": "5h25kS49WNYwmULeUckiVRjUBW3shLJ5YyiVxwvsc2uotAxsFG1WNuHkZZnfjf4JZnpX9nyir72bzzJ4wVBRJWye",
  "key15": "4Fhm16SppUoLJWmtmyH3rUSXKiurR3cHPJFEPLzwz6uL97MAjugRrUSHpeP3SqygAHSd4pyoVnaySUKZZQLJGMqq",
  "key16": "3JmS2hXvWjXrbfjNtSXM1c3Qto6Dr4Dae7KuMY12CGVbTXpcMwEeVnJy39cPfKcaH6vDkizZyb8agK2oduQyyY74",
  "key17": "61x8T27XcPf4ziDngpbyh81TnSEJgWuCdP21Wx1YUJAPoHg66YtHfuDJRBzKT62X2EdeJeaEo3tThb1oEoP9SXdp",
  "key18": "5JbCF2ADbPbDaNJrtzKfrhUdFYaoTVDtprjfBALjfAzLRdZq8kRkABNX17WUSw7DEdq6nH6PPhp3CExbTzR56tvL",
  "key19": "5zLGHx2ahS8Hb3nYd2SgX4Th9u9vqy9QnLSS1JGtMGnqgj7nDe4WUMWfLV5hFbuKyqoov4gf4MGRvTNKboPwbV1R",
  "key20": "3Venj3pPWTAC6SFDJ9bTkSGLqPQY4R5ChXMfCpABdgZm3U96KdtomtiErfkUym4bvi6ra7a85LtNcYE2XqkdMgzG",
  "key21": "52c2G8AmmVPkhcyYUmkruU1uG2YMCt7LT7wnee9k17NDd2kLbbSJxCZiyFCPwAneC2s7fyiYRh64idhUSY6w5b7B",
  "key22": "sD4hPTKE6hHg8fNsyjugUcwoivfgmxjhqFFwzuqbx92dqkCZtGLmhcmyaKCjC2gTAjjanzshew2vUEkUfknd6cL",
  "key23": "4RRCKU1yzQxaVoBt5JCjRJjqy1MH5cC9dbipU61uZasarmr5jVYXvw6vDDMAb4diZjiK2rtytCbxELDeopxiGHtX",
  "key24": "4xzyqeAJXcfdWZo9auyzmm7poiPuss6EnET9WxAKG3NnYbzom2KSd6MupTXzJ9sM6SsdLvfena7cpLC15a9J52oj",
  "key25": "3H92s8yTep6dYvobGuPyMrQCWBrhYbDJUeJPkrcwM3US6p5nMDExB8zmUKuSXqpUtaUwXJXHhzdUSKmJeKewKUGY",
  "key26": "5uBTR9r15Nfpo5mL9GmepSH54fyCKwgeDWYQkXpdmygqL5eQWHjV4HEV1cxsk9VnTfjcsyVXzkiwgdqBEsZVsFXt",
  "key27": "51c1NEA3m3RiZHQn3jEEeGDZKJ7xpVbDD5eBzJPdXsXCrFHF72F8JKb7v2tFgDj6mCBeTYUE5W23k6E4FfqXSHTW",
  "key28": "5fuDdFcggCKKNntXsx7H7kkaGn2NJXQNVLNLBfqiunHnwMNqUpzLMGQ8cvcYomtWsVuEQ4J5t4Be7NsaNVHUtzVa",
  "key29": "4EKmPyCX3H6QyQ3qApiQnW8mnC2QgeCywBQWHVJ6UKSM4LdRjRQNDU2Ko4RFSukYPszBNdBtYRV92tfk7VKT7AiF",
  "key30": "3fWzejfywDTGYubRQGoS6B2g4RSwxZ7HRkKtEybqaYjuGjcUBUoyR5Y7Q9gRwbtzjbcM5pAmEXcMykJS4VKgEreR",
  "key31": "4143APLLgGMwsa5Pmx1oQRA8xSckcKZzFYapvCQ7W4mkaiG22JVL14q4ZiT54NmUreBLBdZvr3bUv7fBiVYAYSG2",
  "key32": "31i1csaa5hmyJsaGhYrkmRMBiBPsypZdtJSzBPdhK9eqWsJ9BkjMSXsWGv6g6GfEzXALiR4qPtDE52a8Jpx2kbq2",
  "key33": "XNgnMPkeh6QZE38vstafnVWmxKrLc4EFGvNVbPonyaVoR3MZV96QUjuWCKbVcCziRHu3YgVnVDCoRvuzaENFAYf",
  "key34": "41yvJ7VAMsczBcqKLhUU2idpfnAERfjfvfYc1N1MScu4HC4J5s8WVvyZCm9ch5UJowKrjwFqGUzGcKB2W1vWJAhs",
  "key35": "39rDswquvN7dQnhJBP6LG2LG9o5ru61vZ1WPFMUKnkkjJNMnK1r3qhtuJjLSYQNssPSXoZafcnyY2sA9Wx8kq4ot",
  "key36": "5yBzJmtwCCDGvBkcWvruAVQ33nKCCYdZFE5PWKH9K2MwJ3Yz1NRDvPMsYGmp6CeVxQ9awyKRDsUwh2foNUzqWaLt",
  "key37": "58zVcbjPPsYnM2GzB8kB8QPBAPTMrieciKWr1HBH52uxCb7RPJPHmLuAeNFnGqH44h8DCnDfHQZD85spCFK4tMea",
  "key38": "Vzknqe7Jb94XDvFBkNCEDhcFs225GRtwgkS9RQR95wRcHejkGMrFPc8DMvLhS5YUiECd11hXURncUTXGzuTf8mb",
  "key39": "4MDMoQwhcueRzwnuWjQ7yqA4CzUwqD9cTziEcCVoz4Azv5hJZFNRBfJhDify2aM23TR5FGGHbJ9XetAF6JDfMcD2",
  "key40": "3kCeQQJfnz4c9Vi8pQZfYCgTSgijXD85GMapZVQDbBvSXnPa9xuqtUanq7ViXWDHKrTVqK6fdjHqEFdKEYuETxjU",
  "key41": "5CaVZt5Epqck2VVX3YZnmvAcPHn9phqJJTFsjDp5sJuYPKyQFqBvoc3hzHHsm6be2wtkJc83ra2HaLhzfHtu1DdB",
  "key42": "4d8n53ktmsboVhifshU19EZGQQNNttHMeqHn6Db7dEj2EXk28S5N6KuU9QWThV36BJHKLcCpLSgeq5qccJqi2di8",
  "key43": "5UpC37U8WN9CEKpCsPCmBziS5ZS1rEeADXxcYjvPqwTQoKyDj4PEEhDwDSJQearqLKqMsqHi2SNsu5WD8MUgNQyL",
  "key44": "5ZiTwKieE7H3BPqga6ND1Yh65MG2KSy48R6QMLsqGAbyQMfxdNotQksTuxJEZZkzB419H9z7od3GGXB5BsU6GmDo"
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
