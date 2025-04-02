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
    "4KmjBdtkrPMwMUEg5vehvkikMkXErTTneGyxgnRY1YPT6HqFJbMY1ss3N7UbggD8AW7F91iasJYg1ogyvvV4aWQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EyfUoLHwh1RN6EoUENRXNuXTnVCTeadm2WWu3PmV1u5nfTBvLeDQ6KuuX6MfE7UVAsJSs2i8TRyPWTZpBDftYbU",
  "key1": "2WFaogReZWYuiDZAz7xkVuQW2KTtzwdczivm4s1BNLxLhm1cxP7tsiTb8dFUvtB2pNWRtkRr1ha86wL6JTcaPmr8",
  "key2": "4iDFnGj9N3sNzE9tWvjxTm5ujybW8PJ41ryA4DAiqewwkREqskCvJxYrhPR1WNDCDoSAJBGK8MQUCrjZRp9ikBH2",
  "key3": "29dbGHamoZV82qZDAQJ8UbkbLihstQaAWc5WmvqVXpB8nDAQ8jWUuNG257LW9qZf7tzSahbimx8qSVtobHYjfEEo",
  "key4": "3SDYp5iGYDbpbkxgNzNJXzV4zxFcZdPf1nCXCoKQtTnnpWQZ46Mhh1txPm7gES6BZ7vKe59RY56rTA6DM3egCBvo",
  "key5": "4jfigt1ozbaGMWj8uN8kKfejGd7g6R7AAtx4a1utQ6Yi28C6PBitNw6jkkenjzpqh3HQB7ToSyHrjkncnCH2zLec",
  "key6": "4GsaDz3Tq5xBrvhTwsrbB99mxNpDeGijdgjLx6L8ZVsFmtGBk7L7A5NDnjkNKCGnSfEKp3Q1phxs3JHq6KxwfWaV",
  "key7": "97JjHUCtFZcZkRdEXEjgmvRxbzQ8L9c9xw5x4QQYEkRuPaNAAEVqcFKuoTHUFryZDxijf3E3Qswdtzan9YMj9vr",
  "key8": "5qkNDVkGW7ceHyc95ZDmum5aZTCBRkAZgVhsG7QqErYNvuknBv6EhzP4VEZZTYyyk4VNhu6yQWSq22wqJovmo2JV",
  "key9": "Hw3LNtVGe7BDAuiGUjGr5sLbKVQysZbD6rzDJ8RUGDuXvxBCwLXJkueZAdKjumDgSokefVDqBeZPaye3eju9WRw",
  "key10": "38HbS6CnGHDUbCgdp6QL7Jc3hy76gtAmiX8bDPFNy95g2RYBSL7k6p2VER9csMJUdPLPb9gmckFpvDFMHq4ft91L",
  "key11": "5SmHssVb2yRWiVKkNJY6jUs8CnEy3NnsSi1tzHi2YmqkK7ddLxzA43VdpDn85rSB9angevLkGY3UHDAS1UxV7WMc",
  "key12": "QDca3pjLBrJR13RBtgFxd62iRN1D1RLyQmRxwojsAttjq7MeekWje8PSichtafzpq2NoL1ErMRtdP4yERgQ2pQK",
  "key13": "5vAUotQnKckMTp8HTkzwCbi1tuQGkcpnH48vt6aL2JNnvFmA8ULccxqgTdXNMwdsa2tYd5kDHRYDuRuDRdZEfhzm",
  "key14": "4LRmuxjPZ5yMoDKHsEHGQsqonBSQzEcgeav8WEBs8c3FxBpDri11NLRjDCcBtQwpQnLMWAFEuSPfMCQKvAXCjBXm",
  "key15": "5zDLvbqPV6oDZi4FsdGix3UEZs2QwyDZt51FbkxEmTPyaXGqEemm5d9vhpMm59cerci1F2b2oazNYHJ7RopbLyNm",
  "key16": "3u2tAM9Jrvx1jzGytjeqSpA5RFnY1t4yqXudk1DbPEe1rwBj3sr97HSgFRq95oDN31D1hHt52K9AzuDgfDWZfEYt",
  "key17": "4MiQywndsra42veYvU1LDTEem7S2gjBway91GSdqSzjL1H9dTPn3fMD3TAJZ1MEMhsQkMUT42QNmHRD2jc3w2F75",
  "key18": "4Vncw2LizERJGTZqP5MLHXmgQ8Suq52JQs9s99dj4aDKj7hNZUfPgxnjEXqTUEvaS6Pn7eD6kezc42NQV2xvUhLZ",
  "key19": "HKs4KJ1uKqQcwM32yyJWGbSDdZToN5rEFTgpZRt5VV62rFdncJc4M1can8oL1fDVbExgKoikvgw8NvRp54U4cwq",
  "key20": "5x9V8EKGD3bceZRmM5ytsPKRqfAmKPzMozTmLYqGLCbpNJhB6FHAoERK8zjq6icXijGeMwc3QVBQPjDhDX8KrnX2",
  "key21": "4uvaVR4XMoSQoUGst99QLiJiakUVqfsg56tbH3XRMSNNaB76TfLzCifxAPtLbWvqvqgqF2Crckz8ZWC2w9t4ffZj",
  "key22": "jhj8a1bSMDrHGx63nviBZr3Wcs2NVFEUVz3kN3wPEXNBWqtf6SHX4B9iEqtaJWqZnNaWJ2HghLhb1BxohAr44QY",
  "key23": "6v2vSeWU3PWfDokQkihbAC6MGb3TN7Q91nJcpSZVQt5f6b7nmqLiAiGHeUvLLDobvqPLBd1hxMyVSSns5EhWjAR",
  "key24": "oGArF5h1tyJ1XaiQWcizeAfpST9gBSoSZHeEkDcLVS5JBh5AB29D8GygFQ6x3qkws5pTXEKyAwXjhuoVHJ8LEVh",
  "key25": "2kBWvm382Q1ka9H8kHUXQxw6cznokioUHwwZtS9YtZSiSXvvUrWVFfB9KUezLih1H9a2WkUnAYBKeXJsYrsAtyZf",
  "key26": "5fKtEHwYu3nJmo4v3Gb7SPLcLD3e4ekoPQsEMiknQ1WkxDko8RmSKXLKY2CtRLjSQUK1zW4oV7p9xmvMXWYiDWvL",
  "key27": "JPS1ozPYuhdFL4eHwcEm1rEwhofYyYvWuAtVZChbgK8zJL9eh22Usg2X74254AkdGDfUco6uHZAyZKYGbLVf2kp",
  "key28": "nT1ZpAf8cK8g1mSqrwrjKsPDGFEYqWZVtHSXevNr626CnrChfPmDDX7DYhFyQABxx9rS31657vnUUSRbFyfBtdu",
  "key29": "5pCMBAd8BWPKz3YBnSfqg7Wkj5VfkxxrCsFbHEdQUGfAQ1RxaaHizmpVyQoVX1qpC58n17oHnpSAp4dtnAKPiuLC",
  "key30": "2QCf83j9k7RC7enyChAMKMVEe48EfqDnUypgw4rXR79RU6nVatkuRQwp1Kj91BR3nhWGebgHtqfLdPka1tKk9Agf",
  "key31": "2e4rVL7pnM3wb7xec69v2VogMqpSrnADJmW4C2Nim8QwC4xk7HGirsvdAcKvY883RXKCATh1euZPKH42b8Ld2TNY",
  "key32": "2Rb4fpDkJhrH2Ws3XResRnBujquatJSavD9ewcVPxCVzs3SMapJyoLoHbj4WnBMo9NRqqjzAp2JJWJgTBUGPZMpZ",
  "key33": "5TrSuVbmdSy3gLtNBLc4TzvnAWuqQZN6jZNpYvgagrSLhkj63UdL7GJ454XSWvo5Myz5KFZVj84WZ8cLrzDDRv59",
  "key34": "5YQ8v46ZLkf6oi5SNHY75hvH7L8ktwmD93ayr1k4kCqwjESmuMmaKqEZtLfFrZzY4Nxe6oR2PPjrMxEMizjLvVxC",
  "key35": "5s9h6ZWCpGGLzAKrgBzaPnZhm85YAMUauWJT7Wff5sb8KCa4Mh9oCFWphx5HZ52VErc4UBsTYrSkB9CGZVJxz5hJ",
  "key36": "12otpqrUPLTjfxN1eFnGeZZ4f6tevgRggcCQruMHFFuhR2T5Pr4gbiHpGWDnp2Ete2wxyop8oDP3NiDG67aCADQ",
  "key37": "4xcxWZunc2fPdTQBUVg6tXWHssLnXr4QXU1nm6h4v919PXKmQMTrweWY9YViZ4SpSHDTbZWvh8bfeiozuCNjVexS",
  "key38": "4AwckP1CkL8R8xAYfzenGbWDKSZq2qbiorphZXWJTDYGbLWSyLhXdEQtgjU61K4mMKgtkNLdb5NUZGiqSboAqk15",
  "key39": "3igZ5erUbuQ7YdXvquVrxr8AxkdsfM5tWPa6w22gvThvj64iDPqksVYfyCTKYdBKbhgefb7WoVMYr7bESvRd7KAb"
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
