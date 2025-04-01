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
    "2Wayj8GymiVgEwEFTkFFdSxQGetR66JcdZnQt2VL5DYniBk9UBXsEA2x2ZZS4vqyeUhGQtb7YvqNmAYnUre1XPZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FLoooFHxRXHnBAA1hMFSzejPg2rki3L3qkdKZMeaSb8YwP2bthmyjoTxQmnohN4m9g5P84XbmTDmo75NddFvg1P",
  "key1": "4eZ9qwXoLi8XDEfozw1zrYZFPUR62992DfpdSsD9cpB8W1Yk2th3tyNQRdwuErQCkZQhWQJYC1nAMLRhBPWr1bq",
  "key2": "49jDiFZBnkyGpi2ywkr7ytEsaN7eVLasKe8xBA2h6nRr6b4YmyMuwpSfbwux2BGLhpjzX5HtwSqbys92aWkVkof1",
  "key3": "2aUQAD73UbYEE23ehmUdJ6FjN93dnQa9RLPinSJgkBMoqfA2zrMBAbQUVrjh4ZhwdfZ8w1eC2kB7VnTMvvu9JxhY",
  "key4": "26HBc8nf3DkFgVJs5Bd2fsiQEEmbkGK5eHNMYZWo3PnFqwiCG3TBPj31b8TeChS4Fc7LWU1KYpkTcu6ensm5oVeS",
  "key5": "62TkuSx1J6jMg3AsvCTsKuzURyhbvfAtNRChW9f1Fcg2qddfXyfRVoZSvciaKzoGAY3q23YvnyCGagFuofHVLSF",
  "key6": "Yd4kMUPJ621fPekf7gcMHthY1n6wd2xQXpZNunZ2T2exK4o1KnejhWwRfo76NDuJArEm63NXKJDLW1aYDjRHCoR",
  "key7": "4oGRX8WsKwmGWzaoNvizW3uSPjzFtL2F8EErVKjh9eh4BtxzRRF5WMYBW2yttFZB4XfNk2Bc4Zr2dZt4wsubgEir",
  "key8": "5y8ZWPX4cGznUgFEv5uuXFbACZ1Qcock45dk6kfVDr925PQMyRqnQt3QdkgdPCc7GPZ2Z3pKwVrpCaScRDgKG68N",
  "key9": "2HCkt99dABBP1my9mMezUhkiEEAucJN2ZRz6ycRN649k7Rm3ToUHL5YYpesriSqhKrdMKCJW1J7qSNCAAetdCS3v",
  "key10": "DfHGxwax4mgbFoagv1Y9dF7xEoWszWLjp9fpXAv9AsFRxe3fMJxp1tnDvCGzm4t1g7ybzc4sQHV9DSyBycUYVpB",
  "key11": "2WU4h16fQjEEaYwRdfJo62vefEe467mBjBmabqP8fhxRHE8drqd1qsRz2GGnQ2oVKKEYsauk358Qtw49SwSQaK5",
  "key12": "55sH1onKmrRsCsPaFUZNSqEYdjdFNycPgcjFJWF4EeHodQPzymHSQfRCGK4B9HXwwxp5AhgKbYCkr6X4fWn2zEzV",
  "key13": "38fSu5rYw31cuojXQtdfSF5dwMiZso7PibpLuaY5gdGQ3myD4ohjC6XBaAELb5HHExrXSRHnBaWiUop7h2pt42Ht",
  "key14": "2CYipDmo3Kwrh5xacFpwCh8PBjEGBeDbUJYSXo55D1UPrP3zy2nXUdWyar5PCDkxzW1SoA1rmUvVabWujcBEhysq",
  "key15": "2bk4Rpd42efVM4Jw71RK25dr1WGHXaAwWHW4oVcAehCJEYGxoH21ACPtaKMEU8Jsagr7UhuRuM4tUMaFD64qkBmS",
  "key16": "3sE4bF8qe5TJnp2SrRiPEKi3WNmgAVQoK3XmdXED6zrviSueCjLUmMtH7Cn8bK8jNpvg1VyCZ6RfHvwrFnoZTgpq",
  "key17": "3KCwVGfAaUBDzhyGAzqHMnqwcYWwxBPqQRp6SrPThNg2tkCMJ5i6jYtKx9Gnta3qjWibBEo11wMqUzRRVYJMrKJ4",
  "key18": "5VqqpEaZ11DnjzUXrziM8PN9G13XDfU7qUgyTFwRafscfsvDhpfdzM2fJCZVyryAsDJgsN87khnPUuCanC1MQyBm",
  "key19": "2h6m5noF5m7FPCwoQ8kvUFfjvNQYdBGZpbdSY99TMJ6DJWg5oH4gdrMWCd2k6XSDa4Mnpmxomc9VPwvyhDnaHJCo",
  "key20": "2ZKt8AwWr43NYhkREBhR5oawmpzUVeuK8XqEYGCAeKdr7tPhceMUqSgvfGkzmTGZwbCVqTws7jZLKtu41k4LK5MT",
  "key21": "62RkGdRZPbmBLVXXqhybCS5U8pA8HUcAYgtnbG3rAcLpmkLZSY7hhb5K3gj1QjzxPXso5hsU1tjkLJ4W6S1CFyhV",
  "key22": "5jY8g6inV7aS184oE2JNHKutPgj4Tk73zTcNPbnVAkrZRv9zaF5ap1pC4Kbj8v39ygoaUHwJHYDYBBqxhMBKF7BC",
  "key23": "48YY54zYjd4o8FySDWMb1yAQatSWwY67ismSfQSgYQbq2RSr2qp5Saip2vSmhFaTew1P2Fc51e4Foob3dVx7xVYK",
  "key24": "azEXE4bDyukSqad4Qxp82jVfc8aP4RrNDm2JjtLqnS9LLXCEWhv9fgz9WscR3qtfBsuezNzt8Wt2Jgx3cdGuXYN",
  "key25": "5oTezgx1vbzexpdLpVDbDX7zvkXvyDU1pR1Mnyf5HcgJ2oTz8J8KgKXMeuaeXdDKW6wmaBRWzzDv7JCodAZDjEpS",
  "key26": "5bfhSMD632DfyjieaR47RtNKT6o986V2XFwmNMh7ieypeRCYZXQdp955Th9XWJB6TQRFFPMV3i1UnBocpznVtxwx",
  "key27": "55QJ8w4QYHEgeTmxmgsaqjDEg9ndJZ92oKTJXg1TcPFFp48v5qDkuZ9L7WjgPADvPmSs3VP6RxW18cgPCdo89S1L",
  "key28": "4S66CPAWdkkCCaFyx6Mp9RT1KXx3UnjGgRqdV4ZoAwaYgoZCZc1x6rfmSmV2XYBrYSnGdxVVKnW8GFSrC1DbZTJg",
  "key29": "3VTpboeFyzhxBcvDebd2Wc5EbGVzu8TYkhTzP1PxTyHEsz8ejqZjMQ8xq2evM9p4Wn7bKuvionJ9caYb2ywm4QBG",
  "key30": "2WdU6KVUic7azQh5CcT2kb2MddfDaJhZwZc8kD9mKM3Teu8Apo7ixE28QaEjVRFFKpoAC5yC8LURAzvUb7TaSpuY",
  "key31": "656gwUWqTqx4VDjTsRjwU2n9ULZzcUkU81cp2DC6oveDi1JboyGXp2xko5mNuG35ERgLSpHWqGbtY2uHpqSujG5X",
  "key32": "66FTURrSebfiK4pN74cCdNSvGTPjrKBpG3BxhetoBjJKC2ELgbAGiDjY47VkjTNCifAU9e84SRbD2Xy8oTH4nGkN",
  "key33": "Vqum8PsDf2jxZKkf1kXP1NqJuRNM1Y7h3H7E3FiSVsdmWbWi7sGxuS9PV1cTcTKuvLaZaAaqLKMh6HR6DrUgb5J",
  "key34": "L4hQsay4PwAbXnJS5k288kukLwqh64AKvfwYwzwAkmmSVBpn3GRTyjVWfiyRjuaUEMMNvceSUKxZxuR5gmWBGNZ",
  "key35": "5Ku4pkuMZ2ZaURdM4oE99cskV1SRYTaekAkLDwQ28fUzzL9dUos1udPw7a4rKxUN1xATmsyRc9NT1XLJhtgufz3Y",
  "key36": "5vk3uCy3aqh5Vnjfh7b4LQtm2FtnADRuQk31QDhbbC6GzCVRH4DP4G9djhy2TPm6M6wvmiqNrcb7UmWqBHRoKVpX",
  "key37": "63DKqhRVe3jwwrkUoQdAtj1VMfRsGa3ym9WnYcJGkVz3JhBvdw2KQkiK2XcX4STR8phgMTNKGpN9zedBhXv67VYw",
  "key38": "3q1iWqncFuGv49xsXpEeMsmoyVMm6ayhwoLr5tCBtGWe1THercCheJBc4Xv3XLKsXL9g8JAqJqp7qD7nRi96NsjD",
  "key39": "3T5DqvBHvV9TrPkuXo3j5oj4Nng3X3gxCZK3tCr8vrpJwsNKEFp4PnQDWzecJ2BizXkGVwAimWvmdAEUEq8vdFkx",
  "key40": "4XWMTy6qevxWLSJmy4aJwZYJBjUasZ3JBaxBG3GPzYJ9HEC6dpn3yScrQF53woh4vF6G8Bbb5En19h8sw8uvUjkd",
  "key41": "22ydksXmZS8umE6uz6BAugHGEY4u1GuNbP4zHTMTp1mRXXLnqUw11gb4wC754LpRp9ARezXH5GU41j1HcJDxvaZ7",
  "key42": "368LSs641vvReNcNDiCKKouv18bf8CXncxpjNeFo9MhdE5CZDXXrCaU7pq8zr9NByF18EAdpLtJJJtAJeM4XoYHP"
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
