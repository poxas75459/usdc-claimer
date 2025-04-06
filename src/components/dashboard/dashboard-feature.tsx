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
    "xH7axENNdeAL629xzB8DNLKhpumqm8XmEQG6jVa3W8cZBkrbjVbtPhyZn2kgy3r5FvtwQtKQDL2mjQZjFDeGCMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y5F6BshtJ3TrDJxGcqp8Se8w1cns5UtVqk9G2PDHGXKEyp8kAskxjobTQE19JHEg7UGrnYfKARY6D5HegyVb7Sj",
  "key1": "4SWCpQ45iUt8GEJbuoz4A7HaZ8EypJfezG6b5JGgb1LzdqgEEU72ANwhfEN7ZjAxNbG7pgYvcvNcw8VS9pGn9zqz",
  "key2": "3rAezQBbmmwGHCARZKGsrfoCaMuuRxQeegwciS9Duqn5j2oifBYkxwrC46SaCJfhtCD3XayJdynxLy38qXYF7tKY",
  "key3": "2MSSgRvdyrYBUQVxXiqBfgyRuidYtzCPrvBX5Lf1DsLojDzQDnvAdC6qxPtuaCxgHYuYgJwSWCAkA9x8H5D53Sef",
  "key4": "5AYL4hGDj9JmS38fXNK2YahoJuMWaddYMEBnN87JRGr2XyEYawaGmcHSbgoVChksrFMcGyS6iLWsNAtV1Wg3EVoM",
  "key5": "474W4AZh78avbZjc36vEVrZkQ7RNos1p2VTfwSuXwt5B7ytnatpQdVesuLDf87DMKLa5iHkM6WssQJfKE7iipfVY",
  "key6": "2HJXXL1EdvLpHC3NCeWUPkHzhMNPTxQmzWky9v9PYZ5B9nMhNf3H5ataGbKomRGDtNyQojn1mEhsgwA4QyPAQASC",
  "key7": "5rc1Q351fQPmqpxXA5VbqtQMhDp7Tir5oY4CX1dBy6nPVXNd554yxRkzT3gdSPQWFNecgHKkfWsHwcnUVsrEsebH",
  "key8": "2AkQAXxL1iLfasur6PQ6EcKogKMsXZiY3mSpcxyB1HVRMwNbr9wjv4ywJddRZTTKB995fX9XmhAXbgkgzFa2okYY",
  "key9": "CFmin4NxkUVz78m4J4qFc8vc4p1MjnRSVkioUDEfktFKJ8PsELxurURNwYZDbUBaRx4582Q2PrJtFtacZpdS2tH",
  "key10": "243ZykgeK6t81t8nQi4uAVMRzSaN4hpa2UZqCfDmoeHcxVBQrdhTzWJm1oyxt2ggk31pRGHjSKj6tfGCf9wgRVGy",
  "key11": "8hBqCxNAsBYzuwDhYGsAeL6VV47RiMFjS8AmAyHXHrvij9DeErkAmPLCibFP21fVpsF9Nt74xn5NrgPnA7cRAeM",
  "key12": "4XQd9ZoTapWtb7GLkjCvHEWFSbGWnQUSP7Wz9jCnBowsm7P7SYkJcBCjoapySuTjtthacpBi1ZmUChueGzGP9oim",
  "key13": "5z7QrjFG6M4s17kKARHuMh7xymrsDwWYJCWhXtN2wWTPfPABRrDBTMnXRyyRuqwE962gdc3pK1Yod63xByoxDmxa",
  "key14": "vcNuxNkjmfgDtCrrraRQBHVj2JdZjivXtSAMkNcxEn5hf1eSg3YfHcJUinLfEsvdmbCfrhyPoUdZWrsT5uspC3P",
  "key15": "3efP432nUKayMQmAo29CXLKqaLk8r1fLtVsz8B54krJRagSeHwy7Pki3ejTMVV7k8LBgyA819oWr59oiPdDanNDV",
  "key16": "3NpCitPyeej3p6W1fqrwfTe9HkA3Vro8fiTxVAq2Z16XHJfRE8D1YazQooBFueDzxLM5bh6f71bkUD8stog1paiA",
  "key17": "ACFvvy5D8RSrKFcQFBzKW18ZBZqQUpvLeaByvKxgVECbnUZk1t6zT12Bo7BpLA8wwqch9RWxVoqUazwU4SZJEGr",
  "key18": "5Z5YhYpxSacdSDXY9WRU8bHKrWbwvcVzERn3cwwXHXghw1TWGkMbcoDZnw2AcG5fGUTsywpv78r6WZgM5zybwpz3",
  "key19": "5oM83FnUv5gYmWr1qUVKSo3Ug9vbwz83XotAmLBrsrg8wb4dLRDCqvFvrboHgzFxNvEbt4CqgpDAQgVFPZWzQt7M",
  "key20": "3pyXezSUqJLY8HDjAZb5QaFLuVXWoRKDZrGeAG1bhkepKrHM4AcJfkkQ9eibKjj8ktbxVePDJrzUuveybQauw61v",
  "key21": "5nBzG2sDQRnq7brtqru5WRn3d9mTmkdQDod1V2ycSy2MCjGXd8dFECZSjaNE7ZsovyCvaGeRUjSaBbe256Hm8GiF",
  "key22": "P2Z6B9cDc8yLVibQeKFXfRjkFwwgS8zsWxCEt8ycsiFwhXX4Aij9YegX3WG3xNQLtxg7rc4TS8K3Nf7fZRdWoGv",
  "key23": "2QaW1gQ6bg21P4Sv1yGwjjceHGYKXmyQmUCw9riL2Uj7mDMYbwUvTdQz5k26h1CiChpW8TNrzQJqi7FRRYgPnDhj",
  "key24": "FPX7U5n4VTkteEFa4tkffScUoYLVkygMZFdGFKtdaqLTgKZHMdM95NWggx5YYweeVd2ehCL7k2FUaJmbbTGQpvg",
  "key25": "4NH7YWyV1x1LAAcSZarrvFFk5hPJuz6yEVpeiSRZKqcywRmPn6J3ZZ5xpLCovieyeuwP7r5yFLfZeMoMgXgdM1sw",
  "key26": "2BqmUL66CLAv64vh3MJLTgpZPhfgxQAR2HsCQRTcongiqNEcrQ6Y1saURBPcuWmYCPC3qTdDtsGx9ubJY8XERtAv",
  "key27": "3z17YZ7Tz1gfvf5o47MeGkArhGcxUB9ZJcZjh2gTCkBpzVNB3pzQPEXTRrSxCvQiZDqPB9LYqBZQgLmKrUB17i1c",
  "key28": "4peupD1dHReoLAtoFvE8HEbCiwxcPAbBSXdeSWWronq8A3zKt1jUfhcn2tBsciyU37BDbn4Pm34guqbFMhvt8qKS",
  "key29": "3iavrJsvycm4jWTwzZqYd4hbTDSi5XadYCjNjrURfU8KWuXebUB8xEKojLYvqrqrcPM3oY3RDh3nAfXoYDKKBeXW",
  "key30": "5uvnjaCWME18YT5inpPCExWuWJnC5C2t4NokuPtrnp2249yXRApPty7wjSccV6wNf6gGMq4s2fNYWU9TgAx5rXbA",
  "key31": "2rhYqhAEdkXJLqecbdRvyZWycp8VqjioahYg6eb4PgKArEBzG1GW5N6U49YstHtswVaQnkpmFA9mnqZj4ZSENZJg",
  "key32": "5KNLTqW3dNg1cMmQDJ6S4prZjJBiaadw2xDjmT2oPbmSNfLQRnD9o8pgeHMdo9QMPofZD6871EhX5MGEbn17Z9t4",
  "key33": "KwxrJvxS9B1Gk36P4AZksR5t47qZRrnhm3DK3e2BHWv2agn9jdyDx3aopC8DGW84t1gnu7VuUDp1ZRVhD5WXsg2",
  "key34": "3A6iRAxBhLnKXwMu6MbdVGN57kY46jUQ4azqLiJ6nJiGn2KNFyahRRnCjisqjhoFJfFGSmYvXZtzYT8GAzTFA2ab",
  "key35": "3QTXMg4b95WxRh2xgYdKzso8ZN1GDBFG9tAvpc2Va4qqVK9WQuQnAnEBivi4AP6JcVLRCyZJ8tFWR7iAcnEsZR4X",
  "key36": "pRAQAe7DvDNNZjtgwxBJqzawtFMVeiB9C9BVP9amgNvUN8FUZf9Pnyr7eJHLXkRiLqddMLH7KhShfTEzn8Ff7aE",
  "key37": "24MdQMbtj53ZY34SiiSdGw5yeCBuYw87XfGEmRJqie6H39nz9fKsMJCbaXNyUgpX53YLHdjKcJJwPGiJEfDZACEv",
  "key38": "5172a1hbKUqCpYkbQQggg42ScxooM8FU85vmmow6AqykgoH1XKsHovhrriYuyR3F79puwwfVJSTdiCJywbWSJM4J",
  "key39": "4HKM4gYNcUsdsspWW78zUnjbh8er1RQ99DRyoCBRL65LVoeezU7EbqfYeSaa5pJsAmke7NprNBzTkAgbGehhNj5N"
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
