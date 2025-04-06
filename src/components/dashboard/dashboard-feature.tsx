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
    "3t8B6b7WpaLrLNXFkdecX7GTD2c4p2G1SLG5V3MZmF6jRnQicLTHeiAF7jT1H6aiKxfk5oTo2dMeeHeLZ286PjGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a5zqDHPrqaZk73Cf2vpgCajJ8Sw1EcKvonMDQg7YuqKd2fq9DEXsc5h1fbPQMRgYd21zLKkpSDGQunXuDKMoxK8",
  "key1": "44uUDEPxqcVS8yMQkeG1xvVrxA7YoqMdLdZJe78wm1jPqYEUYZkyCit3EoZDQgtdKgmxv6JkjG49YjFE3CSdTHsT",
  "key2": "5AHZRtU43gL4Y83i4Uo9e27MkoPM8QduiBLAgmEyfXXpBuJzGrWNf5RTGTiqLK3mahtkJCPozN7V9UigvzSpx8iz",
  "key3": "4Pyj34AX3GjfmmL5mdedWKNhSWGmhiD2fmK6jdF6GkMmLZF4gbPivzidYGmBpq4DxjHYj7p5d1TqWhkeWoA1QijN",
  "key4": "5ymSsJTW8CrAkg9m1jZGnz88RMuvC9ooom1zRRa1LS53DoJy98tnRJmWKwwmb3T8ggpwg6D5zH8LoZALTT3ZxMnR",
  "key5": "4iR3Yn6Nyecbo3m1X2pTMQxqBN6vnCHTdfGFc7W8MemGcY3MtjkeB7VZcw26VW7kyHKao2wogs7CDnD9AZNB1ZXF",
  "key6": "5cn3ppt46DvCBUucyxXxSAeqLtNUVgH9LCzG1CVjQZK5prf1qjoTn2nAHzYcJuUFETUr4jbUeSnNnxbFo3fB6vtT",
  "key7": "TR1iWPim7QxXVXDN2g9oqNbuFefeEaR6xSzmvEvXTJVjcYPscYtj96jdo8spyWmJqZUWPR8RHmp6HyQTw1HatTJ",
  "key8": "gnyWPewKujx2rhJmNfWvSY4GMK8e7zUMqKHM7kMs1AoTeSEfEJWDvEp9BnQHCnt9EBEYnAsXtAzfrfqsVckmQ8Y",
  "key9": "4frhEbqq3w8evZfCMBFUJFiFcqCm4i4SHRjdCpNDG32bMmQqSUweJTCadHVwaZEqtzFwSaUTE4ZrjXi2qK33NvrM",
  "key10": "39tdGxBXqgo4bV6X9peUJD28uNFQxabcdr6cFhbQbVmgvcMULWMEMofuA8Xtp1oU5UbU59EZXFaGLzn9BfjAw2nX",
  "key11": "5SNF8CPVZ2YcUThfRsn6pkTctKSyKHwQKaHhkin4ghkkZWsYaTaEWEdKETHaje5FGvFg6EsYRdrDJ3LRdAFJcAoF",
  "key12": "4BjJfrBsUvq4qw4uL8XSBffVgP7TbpLshp1cr3rKgbGvty3brdoQZv1GmGfdJdL7db9nC9DW7ucnzhaKWA4khVi6",
  "key13": "2JAzd6KqLkpg2NTukaKiSwfojgBvmrW78kCYUnvz1qRKZ9nngrDqEcqbknuaQNqKJdHKy4CFRTyA1JnSPT9EiJZz",
  "key14": "3UgZTyQbjob86Q6b3AySYm5aUDZUd3ombceJvxfJsC57ay67vj1AVVXCg1bKqggZqeh5UPszY6TRqpWsmh7UiHKS",
  "key15": "2zLbWG6wfHVuoJrkQmzLNF11ax4r9eizUf5xy4Ttawv8RVvfZA2X2E5KvQvBnLgCHwv3auhBW8gpvJRwLbJcFbnU",
  "key16": "46uSwiKeueLU9wYrQK8jmk8vMHYx6x49Wg1JuJVpELn3maTD1PQPVy2wbHtE2HFfgDb8CGAQLif1t1bRek6oTEo1",
  "key17": "5aCTHSzroHBNDoaZfgypi2XnK4FZfmHxuigjNVEusjXJw34VELHFy4EaA47CgnWo2DDwNhS42nDTzFoFo8z23fUV",
  "key18": "5z9kVspub8V9nhQUBJUvDaVPFLFQLoDCeup46ae8bH3ieRcceGzUQEXysQUA13uVy672BUNycWcvQYuUsFset1BD",
  "key19": "5k8NbJ3gEAnbjTj1bZWonSyzcbS9j3Eb4bVRQ5mrbKVBf4bLj6PgJGCmrUK9BmGDfhAnmFuBamiodkf3ZDsvyFQv",
  "key20": "3H6sdriQnJatEXrB1Ep2pPZzaUku5QBSH8PJHyozJ7E8wyyExPZEsdvrN4ZnDTJM2k8dvoeg7e8uqYZQ8Rjd8ydn",
  "key21": "4RLwLTiFA8ZTwi3egAuUfvNQWTSXULMqPJ9GzyUgej9gHRqHiWKKbFZB4UBkaPcXAwHPWt9sHDnYuhuRXQqCy1iq",
  "key22": "2ZR5fhC13hreFraokpGb2ERzjb8Y1sbw6A8NoYJNKPmtThd1kfeGHw4hbvbVa9Q7rJ5czBmKzm2wf5ka5StL6Hbe",
  "key23": "4wnJPWdFAU1DEJ5UCcnKKo3Nxbsyrvo25CcZMc4ZzwGnEGLCQK6XmFsMMr2v8nBkKgM4syLJbSKgMiELyekt1KGK",
  "key24": "XPKc6fSCuMVY3XLKqg5TqqYuHyrqpoBHMLpVeQCd6YxuG6Vj79B6krMKnJzuLMwS9yrRD535vG3m6KMkkUBi9hV",
  "key25": "AdG8Whu16stJwwEXxDg4AndL6KQMgCioBiGtE8zHSqWtPf8QnukuYLXbP71oisFCMBn2CbPfZtjecCrgPrVpKZx",
  "key26": "2RrNPzdxUi2vJsbzPYikYLbpUFcUQAb8GjsdPwCxFms56xNhdX6HhsM7kvmtd621a7hPpbtLS4Rv9GSpaCXaRiBA",
  "key27": "AfRbf5w6SoAP1u9p9sB3n1zPeVUohS8vniqUCMSjk2hnqqhTr3CV6mQaQcXdQjqTFemdo9ttcLa4epQW3Wp1Aqu",
  "key28": "2evaBhuykNAaaHa7k2JPEefJZcokBzJrjECGzJzPcxkAdZUPcG54uTwhj7HF9ZBnTyR5zpGnrHReFuPEjz64Pn9y",
  "key29": "2yp1yGBZL8vE4YnoX3N7rQkncDc9Md6TdNJ2thxJmy2vjN8YMYTQzxGb77n7UwdNr3sgtS7W77RwN1hfqoTcN59D",
  "key30": "FUQDPyv31hnnCpceVoyYNFJTnfT8aeoLKBST1FiRvNFiSADMLwza7fUpU36PQB3kt6Cq1VhCb8Bk77rUN5Ewik7",
  "key31": "3GPjKBfrqNb7jZxmHYcBXzxMxvrhpGbBzKKMgmLhdxHCuwiCk7T8MdRzjMR7xJFEa8iiRNaRjreuMrnLu6QYNMy2",
  "key32": "5ZXJbnncq2izAoB9rCdm1naLtrSxsRP7J2yxNk9s1aDTNGgDdefNQiC55YsJ6vh4L5iynzDm4veTDRCbX3PoLx6h",
  "key33": "32bFaNPbVVSK3Z5VZcKtNug7ssq6DiEZScLSgG9zvbgNcBoNSgxDGdcLtXzKZZDDS3P8rw7Y9CqiAJDJZSWJjJxw",
  "key34": "5KwJeStTLvaw5KcZXLHtzb9fHZcCxVkX1qtkQojTKeMzWL3NPZkfDjWv2ArzgDbA7xbiXksqR4K7NYrfEuuTAbKt",
  "key35": "2rm7NHQ6HcMwoaUHTLygx1QQRJDWKSGCUGaM4DzfZ1Q2Y9ybujvXMZbvisHSYGzSDNuLFpHyLdWKbeGZd7nZEnzy",
  "key36": "5Uj7HJeAVy2tSPVnVGYpLnriJ3Ty8g2MLESoViNp69NyqRoHxmUm8oUHK9JNE3wbY9ZniYqGjaW8L1FMTpGmxPdG"
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
