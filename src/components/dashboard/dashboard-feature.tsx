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
    "3HWuXtRqr3aJL5FMkT1WdVn1wxAkzE527SSEeiSmtoqDEy6tnNMbxAyqfYHKaMCTurycaAz9e7ge8HQycBc5PsDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nkpTDpAJxWUjX9X4TJhTqSV2qZPemn7tDM32ZQJRVcPqj5G6S5QaUW471GdJ1NrJiKnNUiBcfaSTfqWmUoDo5UB",
  "key1": "4aaVbe95XfDCNxwe7cFFxenKcBrAmfUVV8h2NDunF48Zh3cMzqQb4QhcDG6oMDWTtCTtHZWrn2iwCsssd47MhhTw",
  "key2": "4HXTdbt9YTBazR93otA2So8xLNbxc47BhswgpF9dh8kiAWp4Q14o1zew71ruKJ2iZWZuC7azTwY7XwHyfDFJM5Td",
  "key3": "5P5CR3muofzE2JKmGNTyAnVPofzeR6dhCbFZ5waopqxwFuJ9Nc1s3yT5uuB9zBGwuNtYndvop8oGkEo9BhhSbnCY",
  "key4": "5xufzjYTWUQVUnZYR2UmFoNhg8KDZZDsQscvochWLJkKg5HyARfmGW5mAZUufr1G3sBTd9q1LG5gzX5J9NkeMZNm",
  "key5": "5LfvfcNQpDyb24WZ1rvTXx9fFg3q74Z6W5DJzA5LpjfEVdhyHZq7fzyysDhBEdjZDLHGf3Yn7VnUfycwjxPRWBac",
  "key6": "2ffk8yE2Q7NWsRxTam6XXA2zLCQP1Za1gF9tdKgJfSouTbwZTcMmbm8VFkFefd1c3VX13VkEAwDYdd14M68CaBQD",
  "key7": "43NPu8jpTbKBFrBfRAkiB34NCnYXiB7eZiUjJUBfFbbJfFx4m5WButbJB5memu1pZU947ZzLUxGHhbEBUDF4MejZ",
  "key8": "5h97Pqy8sH5CVzVnYdvUjcY1Kyu4zDE7CJHzu2pi5G4iWuZyX3rW9G6i56bctbq9AaMNU7ixCo9QgtDCCMMuosCS",
  "key9": "c9h6PXnZHbYzi74ergoghkUjc4ia4tkEr9QXBrpwQzxkUrgT3LTdZk3PPGTSsHAD7K8oXCXjWkVRDZzec28D7hp",
  "key10": "bhPEiLNYqFoxFnWFAKyszi2w1FVr1anPVuqwhrZ9fpj93h62sxmVudYg6dvLp7JRRx9yQGkNFK1LawJpKjtMNub",
  "key11": "2cqwZRLRytx42qM4BBz1QpFfasCTFKYd9UHBKaHZfk8XxmzXEmPJKUFaSYb8TbBuZCUnzzLxVyFQ8fg1ay8uZrSD",
  "key12": "41HKsQumeksE2d3SihN64Jj8kTarJFVm2BGQFLwqnsfAn73R3jqd87o9QKNPpnebRWi2Z9Bdmg6837Jv1ojpv25E",
  "key13": "5kyeDpuu4dWnRq7n8dHZgCCxsD2vdiXkhsb8zsjuQyQbgSRSpNd3EJjoCR8X7DenkvWX9kqecDNmbmrQTcneV7WF",
  "key14": "65g82FLgrZRp6VfHmvJSXtaTBAm11jwy9sb86oKknDUz56uLzNF1Qec7Ey3qy8CDHTKZxUL1VVv7jvQtJnwPwHG",
  "key15": "4rdA8hSzEsj23xiUPXbMX7C8BviBYEvdx9LDfUwgEfHfKA1wXLg6SA3V8fWLzk3Cxrv7CAueN91EwXnY3UWQW3Py",
  "key16": "4s44LQx2A1XKn2XXqTEG6yREMm63sLNfQAhE66BQCg4h9vvpa3ww5U6tPwfSJZxa1kqSBTEJAAcFaiHps9XN7Gms",
  "key17": "45f8H8pfzhuKGFXHnHAgszaymdYBuPNYiyTmUwB7xtaqxhMBjips3zeakqm7rWG2SDSDQiQaZVVHRSRDBViJSxm4",
  "key18": "2CovyQUCUGrdEeUPa2q6aqhHyAbWLbfv9bFk9KW9DBF7AzWRRQRu8RHRnx85GdBCF9JQ1qTzzknNJHrJuurxTqiM",
  "key19": "659XjJBdLrG5biq5ZKe82gV7r3C2Jyk8WhdARnGka3H9DC48rBQvDDH1k4pxvdtDh5TC1UaTbMRaJrqgzPpP7B5W",
  "key20": "4sYPnbdJ3X4Jzb8X4gJEiaQPG9qSnRkHSWZ5WoM5W5LNSiJdeozNhoNtPDsv6EphZofWb88pNjHSMpZDGc8Qj9XZ",
  "key21": "P8LEFA5AJtLXa4SyMisog5NvLfuhGGriA5vQgvcWH5UQZMdFHPgkjvr5RJ2Wt3D56sw2XBmo9k9nZ6wt2d3amxT",
  "key22": "3iQfekN9AvNmCGTdMvR7JkAkWuyTsemzynYWbu7XipZ2ApjoDgTpb5QNZYBSXunFJyhiZCYHugQCC7KpzPqv7zt3",
  "key23": "5UWgjwS85f6ye1SqRb5p6EbEbQZpEKAXtxtjy7HpVaZq3p75iZfK4iSQMMcDw491ypt13vh5UxabDMeDqNAwFY48",
  "key24": "5kZMZFvvjxch8PoXGyyFXvhDnMLtiRUMdgYjD6V1ZGX22RSkuRa4jBDWdv7mio1hSG1ywctnEY4fqzjPaaZMhCiv",
  "key25": "3SaC3hddX6aWyKAWAXuRvTdLSXxxUyzuZHG3PEdiijbfx9CiE7PoUfoHzdUfvK3dsznctSdvFApWaFsUK8SPTXnj",
  "key26": "5rN7pKMhxp36sD2Swr8yBfgBFz7cXSCMLbWgRQcuS1bpiugt8aEoRYCZ8DfuDhf13UuSKLbkUXqRh9nztghuezd3",
  "key27": "45buzwCaAYChbCctb6G3YpHUQ6P4JtM5W12S2JTSQgNCNbkMBsdhDb6C2U7cB9TNmEFNEf1UPW4NQ7B1vv2pTTGy",
  "key28": "Fv12WfXus1UJUjupBksk4y3eCy4YLzpbCuNntFw3mcaLS5fAieP7wfgdHRswJmkRWgxNMRpHTEfrBaDpXDaTjy3",
  "key29": "2CD8Gr3npsqSZSbTdpcyytmpGZMKzu2uJP7znaRzFu8v8hChiyRXsbJJPBSApVviSa7H6rAeAgHLR4LtnTTyqiEW",
  "key30": "5XDnP8Lnu7u1hjkabXNjce8neftFYCAoysyk7cspn3MYPeNKJhvyYyEjFizrbZ8WWGgwxL67D7xD9uLEcPKd1BE6",
  "key31": "4aRXz4NNZG2Un5ZijCB5jk7yer2WNQJMmHpC758QKJkfgnkVPFUEiHCPYmnWwfkTAPbMZRzCm7SYbocwYGBYgKub",
  "key32": "4Pf9hTd9QR7Fypg8Xxc2douNZvdtaSRnRzkLp2biue3f5oNuUnnESfTwz2A7Pq6xi1yXCzbETbmgFVpTzDCMKUPE",
  "key33": "4peW1hWpBe5RWHMWM1BZPqdMyVnRynyn3aD5QTuB7sc1nfF6C69CXRo2ZFsiBL5dhMF2DiTYusvsojjuTD9nVUH9",
  "key34": "wkhdHTFJtxUny8pFweez227UCmTFPDvFPvCfQNpg7qZiTTFg7QubAZ2EyBoZVMcK4Mh5tr1Sgg6fhAcBkyChjTz",
  "key35": "M2JQvdt8QgmyBBXrVngPsp4rWMqX2JjbQR72H5ozwqmwq9BJvigyEcYQ8kL7bxHYhdy4LoSGmxvf4BQVbdC5aGc",
  "key36": "3hpWiQk22uGdn3s5c67AcdSA4ZRt4WpoTE6FVHcTcAp2Jr2B9qg3kc1GTWA72ozqxFKU7m2k8y1HsCWA6tWXeyvJ",
  "key37": "35USTHHAGaiBrxHSwsAPKunCUN3gp3pubwtJoWhAdWvgZJifGCTf5o7J3zkT5LvL4KciPvMorLH4z2ihaXxA5oJw",
  "key38": "4EiLxouencULYfbTDTRbntFooWmHeeUhApQe4XyeTnC3aZyH8bzcZrwXSGgceJoUAexcNtkWcF49FwZdDmvAi5Zd",
  "key39": "2CKVAULDiZvxNZuspcoCqQPxY3NUWUSZYjRzCpWempMTBYrzRf8PNhKU7qvat677HwtrbacyULWeM33Xk5QeubPk",
  "key40": "3ZypPHGZRrxg6ve5KTPEbeFNhZqeMiTcCMZBFDSFhtGytbbLNhzQQ2BDh9d8YKvbKDKQHhVQtvS6JwrsyDpKXhZz",
  "key41": "3K43qLqdQ5F2ibnzowYHVhZWhDaqHEpiT6fgcs7pD8ZiLPoTMbuzGAbbEPvVgrtBab9qZs5kvcCvjpGUabW2pDoH"
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
