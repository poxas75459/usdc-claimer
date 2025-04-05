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
    "3a1WxpYGPrddFQW2YM9VRLxJicPFDHqZsi71C2k6NeSzzjk1YEywkM3HKAn8CRihgv2E1SmSUWkDgUx6Wb8ggcnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xKobyVuELY6xHNw8TZgzc5gC9TCaTxBLNb2UpKpsMQivQmw4EwoTrmDFE9EgYmtPtLxFDG1vxH7qzx6WoTFTdMR",
  "key1": "3qHNGewDqsTXGvi7yEEffKhs79TY7CXayAzw8jEageYZVSVAuqfhhAYwvFXV8v9vWwRAD2hf3uiD276hyNBz4qaY",
  "key2": "34DBzLo6s5s1Z4xDXW3no9BxM6q7T7uNsSs1npxiozeMUFe7gUiPUqm2GFyHXM5Q8i2QU8A9SfVSYE25URQFe3UZ",
  "key3": "9TsFuaAD9qSGw53G4peeTqZs39aAHHSW1WHj18ecnCe7wAvKDHgvErCarLaMn26qJWNJG7cFxfqaG5jzF4TKBrC",
  "key4": "ueyJcBrUpaQB2PM4Q8Q6qESaAwzVaZJrf2a3kZaNYFDaSpk5YHK2JMH7xedSRQHqNhG7nPPtPctKSE1mtkFKxXR",
  "key5": "4Fwf52SjgxM4kmEgc58a9MFs6iY1FHXuEEdRmcYCQECHcFUoFviEukEkrSddMeT4NN6QkQQBjbXmPRnLpZCJ9bbY",
  "key6": "xZENPaii8isA3qcthBi2yDqDPbaWxqhu1fBTmF77Ff7spSWK4C1aTBpoScABRiJCA4qkeQjKh8wzWDJ85SMbAF5",
  "key7": "45Pbn81dwSJFBRYre4vJh3kX9xGp4SQiXoD1t2xC4jqBNzG42E9Pp61NuHr3maeaU6oxQryN5aFoAxpitLQt6iB6",
  "key8": "TgdddypqWZTr9HNAx3JfvzRgCFCw3xZUdmDwctVfpynFk6oyNSuvdrTrwPwSt3oj27YVRyBqMAa62sH2UEHP4Gy",
  "key9": "2TjZGqyiT5SqamivcZpGNk1M1q19xmvvQYEyA4vc5g3MJ3iuCJYQPndDXbY3ET6TnPe2LZEeXY1NJRfWpG8412sX",
  "key10": "7Th5PQVKfz6DME87jH8rvLGnBbLKsbb1fxuJkwqsMzjFSvdyZUNUm48kkmfPanYx38SoprbQ7RrBkHu6dBYaFrV",
  "key11": "4S56xqB1TaBWvEeDpye3bYSbbd1Crw1jYUj6ZfVfh58KGknX1x4N7cSfmiMjWDGLxnKe5XdmYcxh7rG3KkUcVNmj",
  "key12": "3Lad5U4GQ7MP8kmgCnXgqEv2Kzn9HvXxT74V2HbCLaaZCpAqWKRC7M7v3ZHhEDiey1JvNY6A8WrozScxWQ8nN7uE",
  "key13": "5QecDneaoN15YaKaZBivU9y4tiYSkSC2i7JSnZESbgeLnk2oq2S2US8E1Q3mVjh53hM4PBhRK1K6WQVjCYC3uaUQ",
  "key14": "3ViYYW3VyL9ntu2vxRRKPfEeb9opsWuwBgBN3YHg71Eyse1QP8PnpBkvFrCofN3vnX6GzWCfsxkty8y6dRAhdBPG",
  "key15": "YYcvavQKsUQEFvcmyWHCr5gzDRDRDH4c8osVHK7jMrFaficSqxDjk2xygcrCjEPj2cgAgpMtBuMdVm7nDbTb1wk",
  "key16": "611YtkaEcqv2CmECN9btgYeoarBnCtBF3GJ52SzKsjM5W5ca4ceBDjbRLdNSpEnYwciGk9HXgPbLkznvLukFEBqT",
  "key17": "66LVCLGGPS2i6AXbCyXCDxuEAjrdtrwXvvc5o3Djh3KjbyqndD7iywm6a2GGxQ1CTpQAMByJZh1TtxNKZahj2TFQ",
  "key18": "5XmTWU8KxDcfWNdo7KiLpa32PQ4yad7hVtBy3aWx5M9sAS9R6rQqY4MwNgTaazn6u6XjUg3bY8XubJpeMGHtYgfr",
  "key19": "5JuS6ziDkLPYJCb4t8Vxn1kBUCcx7h74Nu2HbWRUVT5kZxZMaM8Y6MrT9zazDa9wvkwvGc5aCXq4Jd68VpiCa59d",
  "key20": "2oc9C1SudyxbGa5UxcnpdNNaA5bsj8ZbkRLTpSwiUHH4ySCyNCF8VHTiDcainUveLFTzoUrXXuhj6oFwFAH1UPZT",
  "key21": "3DX6y8jPfHaPe7dprcM2oHjoacwuoF5N6C8euPBc8By77krzBVc9N4bm4C3QBsMgm56csEX4qhM94HzYsTjU2wai",
  "key22": "mD4Nf7mk4m4twxuNJH1noXqM9N5DgK9ogzWvfESU4jf8qRuEX1LPms7mNDwxJJwxnAfDG7aTdqyYf1JyNCSur5f",
  "key23": "3Gm25SZLnf7WbffTMvx78nj8FLKKwGyAQ8GhwDs7mKNvtZ8d4kwzVzELDixrj8gdmTJNpSidK8WJaAq8Tv6XLsHy",
  "key24": "3Y8jAJ1atppVfsVGeo5ZJvQJXcFScn1bjQQYYQQgzYdQT9mrBMNN6xTa6VoxcJ78Q4aLyanZVFF4N9XdqsE6Qbhy",
  "key25": "4Hfqh6ZDf7ox4UJcfkPaVAtgHCcJgKhGdQAUo5XbHbcYGq4uHFPHBLhbECJ862EDifQNUcVD9nfWU9MvKJ74433J",
  "key26": "2Nt4FLcJkYN564Bt5bv6RBfATpMTALxFxPU9XGnupEgPpj2rDtyjoFtvFpZspnTAX6cESbHv7PaoSDW4Bx5U6vEJ",
  "key27": "6KfWw9L75T1LwU17DsT1CHNTn2wicULh4FJhFDMUZSdsu24xuDC5ZS6MAwFLKmEZVNvsQs5u3nXhDKCNbdHsHDq"
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
