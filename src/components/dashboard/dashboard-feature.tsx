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
    "3ouEd5jjMeJs7yNSBQz1iUmY5tb3fAMGx7EDTxKLxTwEM2tbgyzDBVfqh5QWzRFeekmoHd3oFw6aVfmJW982YASe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LnzZhR4UNVLUgmmJkLAvi5zHdxJxJHDPD12TJfmhCa6MZkGMz3h5WmqUEB6au1EgGFCEU2673qQ4xZq71whLTR5",
  "key1": "3BVdKcSzBhgTDe2ZZ5RybZoKqSFMakj5mDSwnbq6vWzhHfX4kN7tfYqfsp2HuzsVsD9YPmTyJ4tk5mUxh311GrmG",
  "key2": "24WfEDZ2zQPiFh2PXbuSpzCjcRsp5q1RTY8HR8fEjwA933yjZ3VKNmToNof9X9k4tzMCJ5fUe5RWDWWx2Fc6cBRp",
  "key3": "58b4tmkVnVZni5QeEvYpyqBgspcR6Ysy8JDvNpu3vWFDkrHfEBN8aRbzhjxnjvQ1ViGsbbhtVqZaoBB8gWXATc7X",
  "key4": "3ZJdJQK9fLwRxgGJjT8eMbVDbj32iprNKoWVtMi5MyjsSYQopg2zEqWx15eY9jqAnUHiPkksfvSm8XSfhxDXbp19",
  "key5": "2u19BjMN4CJAx7EXCSRYE52GXSesyUzCT7jYzWGoxYJdLd1XXVgg37WCbAmxf3mzV1mdgmvzkLcANjHatLHyqGfw",
  "key6": "2vwjQWLkB8b28C8Q1JJ5cnsJjQZHNnQ8oySc62r6bNFzQz73XNm6WmWhvjG1vahTxv77dT4Zo5ztqmah2JvjFtPK",
  "key7": "3rA6grp8xWkSpofJUDSuM4dVMkdVEKveAFbNiyndb3th9eSCaWpDoJatK6mgeJzHafC7zhpYYPVEiHFHyBKgiSWP",
  "key8": "2abjrPyDZrgaswVuVMRnKyWFbVsEoBQ7k2k7MwZb4NqVsbG41Xc9ZaLKnYBVwWzzknewT6FifjgibqB3T7S1nDQQ",
  "key9": "NEwJchv3PkrST5GiNeRkNKdBAqbSAcKVe6aLdUNMF1zEVJwCmBbvcVV5oM8rehGAqWC1fVb4Yyht23F5ZyjywPn",
  "key10": "4LmALkx7mMkLm9F4XCh6sEzfgQGehqADLwWvzZLRD5baGrg67ZgiBxjYJoYgKYdzJb99fZKP5fsTYDbvhJ85cjQF",
  "key11": "2mctULJHYVKFiL5NCSNhgBgBNB4V57s6gUh5piNbAwZ1HQD39qQ7VRUx1YF7kfDggpGYar6Jnbyw5LYrtmigKGVR",
  "key12": "3zsqtr8TZ6haE6bms4inBcZR5jM4G9ydpzR2fRHCQ6GxE6Ti5gynq14xy8yuFEwomEpDECXkQhik3VRxZHND5AbZ",
  "key13": "2YnGypvZCmoWEfCcu3bABAf4rK1Xsjd825iL6RsLX7YcxqXY9CXVeiZ5x36wkkjideyetrj53J8xekN7WsKjPWTC",
  "key14": "2c3ihv64C9no7cvsypwbcVrojYWVumqefjBTi4fDLYtH6BN6Js7rXF38oJt1dMLGLRzyHr2a5oFeaNe7JfkuFbsx",
  "key15": "29aL2ZikwZxTD3D1P5XzPyccCadPzjsZYUTP3oqmuQ96jSYtwViJH6DMEMgx5kt7BppwjxWfiLmaFvp2nizrTz4A",
  "key16": "23xPe9jzgwxFYRczSb4ZGzgf1f2SXH7WtaETmopFp9Q1F4Vm99jxNHqSDSW4q5dqqYfUy7bnb2gATEQNto2YVxpz",
  "key17": "2QPxew3pTm1E1zYkKPjpoFx71dGutcemNp3ySVLnxJow1X4TmKXmEhHNL4KsUUhbHczhFzyvzYDgdx4MMuXiqRst",
  "key18": "qYwwveTBHhKqrtAySAqdFuEYaJ7eE6W3qf5MY85KnUCZ7Ntmj4YuaR1LFRMpyFUbJjAw1We8zgpaiWixN4Ku2vz",
  "key19": "5Us5jKW27tmYWhLHtgVRdmmSPVQSems5sndKr5DYgeaqk3hhYMPRDAePvMa6dKYhLpxfYo1ReJnEwy8ALEbNxqrX",
  "key20": "U9EdJoaBkUD5vzMyH29SpWEjsoo64FJUAUKkZjHyox5ZorEkw6kDL9Yw7uqLtQxHx11vNbyjTF8PsC4dfvFXu2S",
  "key21": "38PG6oh5F88kR9mySKYJNPxe2Q5BP7Xq3ZHNUwvxsFVifprPq1tJathHFBTf51ybzNhS6cqyWxgapqLWnFsWGEpj",
  "key22": "2v4JddgzntQugPo3sbhbeNgsZPKMXaD5ogyjcS4MCdnPian9VMY97pTx6oquU7AyvepdWpAse7pF8bCPKr6gyw6",
  "key23": "3qWzoDEsRThbUm813fMYUa56Z5prWDMYUm9BSDnYdmzn7V1BZxdyvj3hQKecvdvKHEV62pDXBqQ8T9yYEkkDKwae",
  "key24": "5fhQspzWNHEkH7mUidtFxMbWEXmFJ2E9BReV5bw2CXvNcNQkicPmgu8Wo3xieiDLcN5cDPjxpwK3fz1m2bWFiRcS",
  "key25": "2Vb47CVA81jkNAUcsp51B1UJ639A4qvTa46c53dypEq36Nb1ivrBuYJDcVFKURCyVLxNyj6YST2b8TVGzssjsXUq",
  "key26": "5pkwjHEhK4DhPLdx29sFKSYuqtgF6n4sNDugruYT5pW4k4cLsaSixWDqpPzSf7xnzgpy16fcoFwcCtYrXqQEtqHT",
  "key27": "3Uzkgc4bwDPqsHYvfB15YSHZf6X4VNc85ZibSyuUyuEZzUja9awDSbfdy8NHBV7sN32AE4EhZghYu8Xeas78i9Y3",
  "key28": "3uX5eBmnEef4R3ghYdFUL2vfwDfSMfJKB2LvE9kket7DekkN4csbhR1S4MrbHUZyQCDB4RZ3QLkmfmk8Gi7teXEJ",
  "key29": "5ttmUAi4Pmp6KY2hqfrdcz5Esfyp9rMivuU6RQmQrUQW4q1WpVsUfo6dkYGvhDswoLCqTNb2XM37rx6AKdMv9YuP",
  "key30": "3cnpdiBCV87CAH9Jrtjnr2N5Gh5SPydeCsxpZfukAnEPUYsESyiFvAi4MFvzC5by8HCWoXwWy9uQy6tX7u5ywqDr"
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
