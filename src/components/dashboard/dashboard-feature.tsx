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
    "3KGXrv1jYhMXZrNv7hMqFUZ96ptG4znQCMR7NpDuLySK7WH4jWvnf8r9H1vVAPL1RRFoWkmQx46jZTJyfxAbvyPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZmgXD2wgLcD5htWwoA2Rh11zrrbT1p9jpkeGzpQrFz3bnF73wLA49rtctvL7qbQ5H7qMqt83nvsE5GEyq6jrDkn",
  "key1": "3GZVBpzZcA4DF5Zu2hWspYETCspeA62nUU2zJxNeqKRycpEpRjeK4qAKrizWvzbTpLmX7inCrfKEEgSEC1v7wYqy",
  "key2": "5Mmi21fLnwjm2erZhG2wtVDnNF8YHVKAHKPNy9sXJCnZtRdP4ZMfWgRhQM2U4yknhzf7din4sLh6Dye7KZBoWkC6",
  "key3": "2spHgAAjZJUv5ssTEzTu1UuP6VLMYXjgLCku3dHDie7CNzW3weHu4JSJq6mLuKFN44fSRRu8aU7guit2xbiykdAi",
  "key4": "4ASatR6raN6GxZgX1t9hrMkjpCAy3m9cQnJXukJdYgp44JCV3vk3wjRRvPoQXoA8TTDMGt42FfB4sw2xjwLVfbwz",
  "key5": "2wkakqRjeRMWjxTCRTAVii2noBntWtXXHQHB6hKdzpp5cVVL5vfrLayfmzr5qKdyzjsxi8J37s2Ustd82ZArYeXL",
  "key6": "2CLr27bqZxJ36xd4L6mEcJGeJDr9Z3cZhji3bxdtqboN8A3vunb64rbLWj1pmGYnJaYqTjKWDamcD1WgPYiT18jU",
  "key7": "C3QMWWFZUyoUJqBnC11T77uaTwH6j8MzJmmCgFroLghj1j8QwCKxwffbNxfW7W8DgRNjPLNZH6wGwrs77hC8sb5",
  "key8": "2G5inL1Q4AyED1XrUZNHX3ovXmC2def5MzUQKvRN4uDrEiYNMeRu3P4PZWmqqNEhSbdpztPzqZoUpDme1t9ykr8d",
  "key9": "4c3pBybnA7Y4tfNLwbUi2nddLSTzK6YTdbs7dmpzShCyoJqoEf94pYJyui3kHQ7qMCKixKZgKTPCvueNUTQQaHeD",
  "key10": "3jrRJLP8TKiv5ZUXYgXjx2sBFkXS2xPCWE26YkK5o6VrBpU8PNZfmPsCfEyTM5MR2LMgCv88KNc4PK1tKkXxQszK",
  "key11": "3AUoYt8gEPZ7SAS7uaRnC7yKEofYHvFdkvhbj92Wsx6K8WiMrbeBgdTN3qYLbxATX7ZYzD5qTGvVYWjGEr79qQZh",
  "key12": "59nRqk8XV5fKenLaC9RoRrmY2Bwth9Ze8vktGqkDAunuo9hQqhGyWX6XHjoki26Ha36N5r8jkcjKk8NfKr1DAQDt",
  "key13": "3sDMB2edFAjx2Qd5HEZmubyLPpqx7k1U6EGvjPqvqc1qXGq72yG2gRRgRvuAWNGoX4vqbN1BXXX8nubeqVGH44bb",
  "key14": "4xnaEJxwdnibERwk4sQ7Ztc66xeqkV41LtVJcTiW8V7Sip7mfDpqHAQsANWT8igPg4DeUHXZdWruH1mTHhhcmXY3",
  "key15": "66ouZzu32NeL89doCM2rQL4kb6zPSN644yJSzmpRxiUxDosXNgU31uJ3ZSRRR6QshVN2LGRb44zKqoJxkVX3N4v5",
  "key16": "5V7wbTBnQ3cQN86Zebd6MGwVuZLELdnSiVR12qEQ8eiixPyD5zrur6Sf6fktvrmBWdn7KswDojudqikm5VztrBX2",
  "key17": "2ZaViPQ7jUmFT1B4MJ4cHFdfMUrzXkopqrpBjdMxxiqK9kUoJYg4DVyzYEGKPurxQmYyZVGTPGcsCxsCazVugaPk",
  "key18": "5pFQtcBmTeN9iDuz7VoLjRpKTtHsZQ89cG2GuwQpNR5tPXmMXdhy3WfqrogLZXUDZX2NA8K7tCmDpShDLEhKo2zN",
  "key19": "55sLBVVfyp28Yuba8Vki1TunHDfJgxgqUuyVcsGyNeRqYc4ayGGu3N18cpXgvarEb6EjPArUXQWpGW4z4qaeXsUP",
  "key20": "2d6Sm1zN5K7VWFo7ZdCWSAVzbE4zuJz7PtMrvu8LYCjrVDxopdUmY8WunX8NSSw34CwdDDNCTuFME7eQpUKA43ho",
  "key21": "5GGGmMxyuyM5dsveM6xMFAHPjaqsKd38SKazA24CVdgwy2RKYG2XGyqzxu8UDUKyTFP7xW552uAtAtYCfAAJE5i9",
  "key22": "2iBDiYWNvzQrLNg4R67RnbwyUYKUfrPcifES9cT6zu5eReBGbk9x9bfP3fLQGeJLFWUKNLUrVFsuWKWJ16NuMhKh",
  "key23": "56SMmsoBg279fxhUbJEpPgXeBxKZcUwkReEp1tTy2BVR1h7gbCxaJxCHnozsw2HmS5NkFNk95fthVtGt5FEPtJjr",
  "key24": "53fKcVQ1svqoNew9fUhMtE8CnuAppqgTQHiqoJSXhdzt2WcVUHdiocfGNK3AGEpkmMs3thcorzKEGjXrC5z4Nu7W",
  "key25": "2AuxWom5AGWnoFgNTyDNwHZ7qjDzE1D3WrVJvxEKtxiLdNigTqwUgwMqA4Epi3ovW1Dpdkj2utA9d6qtavXEC9it",
  "key26": "DVhMKj1U5iAyJNXYzyWdJNPEEvGA1RbDoJZnAjnY6LtndJLffo1ghXn54XqEJcX7V57ssyMzoeqURNiECmpQeeP",
  "key27": "5BdQujVk4BvUKbjSUw6p5EXBJw8xFBS7jYJ2HW3BfbmGDn7jJHqEQRndSkAoUgYGfYhWuNkdJajHTqDMtDSeXXkS",
  "key28": "2LrC11rsw9zZ8gTJk4BCtFbfbH5wxPYyEsz78YSRwQGcbm5kz3csrAX1CPuupeJeLid9hp3H1cRtGn3Ph3ws4Go2",
  "key29": "4BBNW1xcmHYjcummk7KCX8hM4bhzZMR8mXMwX1YQEKZ57xFQtu2L93RAR7ZoaZKEimhJ5ZNGemZ1ckAkRMAWV9Y3",
  "key30": "ne4PceP4JfdmhaD1Nu6QZMkqWZ9z9BV5AtJGufWuZgmL2SCk6amkLoAkVGrQgF8rJsfJFcTTZQeC1iCVVvTrvCd",
  "key31": "415JgK2SrAxFumFEvhxWiTivAq6KDm3h669cZAaeTkb16EqhDL4ZxrvMsdhunuEddMx3JQxeK67ZrMUYh3JQzWVY",
  "key32": "39EYQ9PbPmY9J3ymvZsLDx8EtR3DqgaRqyhaFtK7LFW5LQUSxDSxhAkvsJnJKyDcHhJxepTzXfXNAjLZwXZDka2v",
  "key33": "2H19dc6MAoABWo5MiBbX5d9vukiadwxjoLjPnGJDn5RPp5bZ6MEVkkm7hjYM97gaufQw5zKP6DfDixhJAD7jKMAJ",
  "key34": "2fhw36NQngjbenDXe2WeFBnRsDa52ZJWFqsi2bBqNdaMCAyhEBSB7JyaRAVsbYsWkfuXfoVcYTTUMDJfdkhJ8J5a",
  "key35": "333J7pRsENfGMvAkMsy6YG2haqVZPWbECzJzCH3qutm8CnPQK7AUaGpeGzuQ6AEa8nuGpKs5PtGrzPW2gzpD8fUx",
  "key36": "yy8NsHv5LYQfXKfxGntV5rUS1nRvC9xUCppa5KhewRFRAcUXvhCqQTwbSiSRViu1G76jwaZoy74E5mEZMWrB4Ce",
  "key37": "4doVMH5ihwvKgAVa1ahjrNSNBToo2Qx8sdT5tiL85q2j1avPHyW7RbiFAtL4BaQGPrjksyyhXNwbRfHScsZ45fDK",
  "key38": "5EADEZSjxFoJJ86cyahWgHe1oRUU3thoWsHKUXM14VjQKJdhCaLbGeGkhxR3RboHgdFiHmPSS5jCrgrkMcZm1V8i",
  "key39": "5i2gxeaZa3fD3k9bx4okk17RRjRVBrNCDW87yj3VVsSXMJwKwftXhEvGC9WN4KWV6TF4YSFdkT4pwUyKwX8evqBH",
  "key40": "5vzCas1Cp9qbFL3EM8jzdEX6qWJkUA6pqcTc2XqRx2YNbKNk5mACpmEddimvjhsccKLURbbte6F4oC1eMLWFPkf7",
  "key41": "3ZKW1yLrwESSSU7HBiYtPhA3v8WeMy7pgDJmS3xY49fMUNS7bhwfxRg18GzGdi9bWx5JugYeNvjLHBYrNZaR973d",
  "key42": "2vVt1nYzBUinCAFajVqzXgWEjBe6n6ptTLzM1Whi5vZbu8TmieMdKRvduCahNDtJwsw2frP6psshKf1oCmeoRCu8",
  "key43": "98KuynsgEPFopt9XF4vf4Jvvge1N4iBNEsxGXWwAD4YK6oW7Hvr5SUAZ6zVTQqvrxHxeT3Vuq3L3y4QNFrhrdWZ",
  "key44": "2xwvuEL6bnSsgnnNt5W1MA3uHkyYy6bL71RbhMfr7tPpLyVHFt1XP2N8xbftAKc9ohBUCBxnjJsQyNpqe1Wvgjb9",
  "key45": "5MXyM4u5fNpMnKVGm4WGvNoUUBQsf6hZ8EVCtmrQtXuQwYn4S2Hr1E8H8wCUJ3XMeRgGxweLpyGzJfnrnfU8oQxZ",
  "key46": "434AM1HJqNzdoSmpmZbsug2Axn6EGnzYwEV4tS2HkTpv8un7KGrg2JRcA3pdz8HE1dHzQUNVPhidy6GLgn8PRGw",
  "key47": "5dmKCDZf1NeeFCZqkcFaKocVynen6SJrKGonUKwzQ1xrk4B5hyL7A6cPJQ4ZVsfpQX4JrX9cpZ7CZcpvsDmizyWy",
  "key48": "3911ycemcBjbNiSwX6r7wPnfxpvVLy1Yn2KtyCvHRrLjHz6qcXYmueE2QMSJL2ELyH9oqQMNCUnQeWzxeVRSBWmD",
  "key49": "a9f47v9i3Fzd7wWWvzqXX5Eb7MYHYtkmuaej4WB9PZbAAsTyZPaYVqh3KXJZvomU2Yrrb1W5ULTCaZmP6o4aUNh"
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
