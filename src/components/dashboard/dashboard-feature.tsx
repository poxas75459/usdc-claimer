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
    "4MK95DKP46iaQitkB94Ei4LCvjckK65hHnyWFKGrudjkK16Gs3r4kt2noLP8pt6oYcYoA3tJdouZuXuTiNN69MkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gKTwyankmu7v2YJgb7nGECbViLhKrdiYQNwb4EbW5tXjCMQqhuiwbuQRvqFNBST7MDYARTPhPzNLGHejoC2p8jc",
  "key1": "RPjciDtrZLQK8NLKXx9LjjvXKEgg1pwEK63bHh2qqbsmj1hKSsmXw7ZZkKBe6oUGXwko5STnxJVqbVhgUEWreyy",
  "key2": "4VKJJwAk9djYcUEP9b4vBN4jZE4Tb3CtjpHofSK4CYDXmwSkwA5yNEysskknF3P3NkZGwawqyyWUq9TURJ4d553q",
  "key3": "3e8WBVsSjLSVZV1FdsMR78XmTLYh4szyNhxgskMonG6iMAcQpNyQhnikj5QFqSJ2z8oUadkFy9uaQ2uTeYCMY8FV",
  "key4": "2fq2scybkKoXfQtYBz9DuX6m9uJ2codKdWa74oRvwqVNcB5NhyvBFtTH9WK3CDuSDCaXiKEKKpRwRHHJsYzCF2Jq",
  "key5": "615e9uUtkyQA8Gmx2ZUsjxDePLjgH3p3MS8MYM2tvtm5RL91q5n19KYMABLaGJZhLHsT3cqvT1QCdLT3noUrfz4g",
  "key6": "2JdWxi4vwFZZsvGWLJvf9rqQpGFHDYui9AT3UcmMoToT54NdnPXtRSvd61qjLaefgCREbpKJp2dUi5tLvUnzT7yg",
  "key7": "2yrzrTLGqpgM7ddXNBeT5cJKooQxzfpoqzMdHDTeJqwYtzeoT6SfiXSP24xNDQ97GmSjH52MYxikRmra8CDgXqDt",
  "key8": "BJ3RMnxuvyQ7dpmsZt35V7dxxf9vaPLFv7a2hJ9j67M4oQ9RDN2dGziPcFwBnt7YfVBoPNcyPyGkmEdjDH8WNGw",
  "key9": "4A9QrH1uvaGxYHLVxPvSSpxz9zVmpSBrpRyQe6SwvSEMbk3QhjfrhKLE8NqEjLu4cYM47oLzdaASpaYonzsyTcxi",
  "key10": "M7UyGLpQmumsBLANkBxXe4hPeb92pF7qmRxx2aKxSqyXgyVujpDrPsBxaZiQtDtcUXSCsVzKKnm3GSPqxGawLUS",
  "key11": "5hTP3d7WTfeVmkgZNftJe3UqHq6XM6dBQ1yQxtK6GNCqJPx3uipu5qYXUsdAUQcMdmQLUUj32FCNAiKY3XTcyVE5",
  "key12": "121dDxyRTK3JY7s5TATU7yrCQhPmx7M5ujKxXmV7Q3wPz5mZvbk3Pne6aHYJ5FyLMTpqFwPWBUXjgHBmH1JaFErr",
  "key13": "37BQS3vS2TcottV8SPLZC17t5suhymbTz6FpoEGeDXZXr1pXs1dwaaEbUdmWfuozCjPTKN3kjiQwAanP8vyXeGVD",
  "key14": "5hr7rKSWRhynxCtNjkpMbYERr5RifJ7ZY8ZWYCniMxvtjv83Y9QeD5u3sHaCC29AKnaJ28r9TwDquqDPCtn79szo",
  "key15": "SpztjzMUtkkBM3jdWueWWSdcNmPXqheD9dCJS3S8WKz3v1zVm66r6FE3rU563P8XbcR228ZfdSjNQHhYfrXeNGw",
  "key16": "55ydFA4QmBFi7Ek947zSd2BqmfYubuKtfA2NH5f24X6bDPcnzu2BwZWtTTHJp3Ge2NtvqTK7dCcoQ6wiqt1xkEhP",
  "key17": "2LY3Cvvnf7E7kuwnR6TBHa8UA3Nr8UrfTU4k4FLpHRxoeRxezwwtfX48B5y3PHpPvn3oZCZsnstL7m1ekBXzRVG9",
  "key18": "3HzmCefCeN65YHheH4pWj2fYTVqG2cgk6in2XewVYLCz33EtauaELZ2jDKGAiSrY3yTRP3JKqSUb4wP6PtC3Jhz9",
  "key19": "595LR2ctxVq3aVJh7wsr1oYjWNCpPja59tKgpkkLP3d8VQYtCBzv2P4AC4qn7kfZCEeNiE9sxVKPjcnzCvbAv2Eq",
  "key20": "4iRaZGn4cPpsatmVVJ98ubMPmXaZX1RuUTxmTLuQYJu9SsQ7r8QQCCCbgSvMa2o21EJqmWTG15XAgGaZW8SvUThJ",
  "key21": "6PUYKmrYFGj4GyMzGMjQ84oGmvTec9RSKqeKSstPrr5RcWMaM4KeV8pQiZhnxiAjgB1mUK7wts4pRpw7iGKN5Xh",
  "key22": "TYwVSDpWtdooHFSVUJ1fmChAcQ3UyAK5CVtnoPA1cXMkYd6GbhYJ8CzKGr275YahjsDM2wBGdKVS1GBbMbytVnb",
  "key23": "Rkkm4A39jZBrKYBQ9BUcYEaWkVqP26MFdGB52V64Nny2qJPCNniMwyD2YQaWhWUxJsx98Pfd3i4qLyAoNWYpqcX",
  "key24": "4TF7zT6wNCNUp7wh8yYrJzCg9bA3ACLZzP47d3kV7iK7PoqP2AHb1CTnzFwNvYQrf4sMJUV38t9rHrqptD3XjYqz",
  "key25": "3fx2oqntAEts4vNs71ub7vEYHPZaq6Rev4wsNgVjBQCB4poB3tTzn3mND1rvMSB2AkVU8QdHuEVHgaMZivq3iPv9",
  "key26": "2MdzZV4nvpJKJA4T1oHJx1SEDaHVAPLBoJDbHLdHzp8XbY8EBbi6DZE3Agik1Ga5xDivKG9baBroMBEv3BFcusBd"
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
