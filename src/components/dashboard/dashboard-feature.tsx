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
    "2UAArUcTytYSLth9LyWVHEaVNBHdTCW3YAGtew4aCH7i91igDjUkn5N6o5t7gnRqZtiL2Yqzvtweiz2Ma599XqpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "547T9mdndKp1eCYG6RaFQZuXVfbKhBbAUvYvcgHaMp5w4nUEeqgFTFWZDjXK3XDPgoyjKcxMJziue8z91yLZhuBL",
  "key1": "32XhfSUKFDhFG9zReTjYXpR1xdU26GuYg6Kev5yhdj79gu4LkAWMJotr2Wi2HUEwiVJYZCTUYPFNSCzMk1UmXLKR",
  "key2": "dW52H1deeNaG5Qcfr1BZV7RQkHhP4AhjEiqQAbRW5DfYR117gmcYQAzrH6XaAPSaeBYro12ob4Roznm1ohqm8Jp",
  "key3": "3P3vTATFcD5wDKjoR8KNtwtjgXwgGQjysDDjrqowKhUf2RKJGGfhnEUPt3L2buNPT7RbP2iA8gy8FE35WcvxrPw1",
  "key4": "3nRTLfcv3RuNdRBibNXbhnDf4nTmsygR7kYvZJzNXDDLL5b17pZUmfewjicuxR2g5X86KW5j2td38FVA6PMMDtPg",
  "key5": "pfcB25wZe58bYghzy1knJakhwTDQyUpZpPuyou7Kdzrg7yLqmoivLCEmyqmVGeTSYiiyXD7FocZ9h9ecQ27QwHc",
  "key6": "ZNJZ1rFopnK4VaYXRoanUgZXJEzSwffHyMzCZ5h8pECdJ5CnXnw5oJ4KEyYyMiec6kGLMAS1SYH6tENBpLV5KvK",
  "key7": "2ek26jrQvZJPw94TheXYSXLT1gsV93orcd9tRTuHeKmeyCKPTBj6dw6UUkr2wSRnhNzZxkNJPanKmYW5SHVZVp5u",
  "key8": "of2Qfgcxw8Eof5t1SLmRch1BEV9J2267LrETciGPrdF1SEErHccUYPwYMHfjaHpPdiu9DizwPCXTQusJChQQVHm",
  "key9": "4oMXiEUmPuhSEoQarLS7jD8ZSVBrMhNkd6S3UqiHtchDJaqMskXEpGUN9gyFVK8emamTjPo3ciYJBmzZkxFS3NLJ",
  "key10": "2r7T9QBEn3KS1hywyhzjuVEB9qNho6wbmBpi7gSMYCKj6U8fTFUevghK3EC4f8TKrdekxPJq1wi6mY33rGyPX3i8",
  "key11": "5EV6BupK9YMeUS8fWsphzVVeEijeEE9LKJeXhPMW18etbDK44fSLzyS263cTjzymiF3jHYeXFLseVGgdWzSHdmuS",
  "key12": "37JwVarNuApt4Qkk99y7LtDehusPC41EoD5VkQMQ7fXiQtphJtsSKQtXgEJnQAkU6PQLddaP36rkxrRwZH5KKf8d",
  "key13": "5mpcX664g1Ba9e5KksHnueBU5phvGZop4y6svoCJvpifXqjK566qhciDwWUdyRf8a56WzrijhigD953g9afbvoHj",
  "key14": "3de2wuiigZYpLdrQrddbqB83NWBacop3raXnBjvFSATYxj5cmjz7rsmkhep87AbhTiwoUMsD911HS8tXZjSR24xK",
  "key15": "2akgFQLJm54CU5YMVHNDKj6tMyPBcsiZ7w2nhAPHyJJDRk44GKTs5z1KCunNN2o1xJVPPatxVfpuoNA9GtDsVoMj",
  "key16": "4HxWQtAxyRa9xsfgVWuWJCBPrwbbtSQpK1PubBJvDhQo5oJxX8Bd3eEsEZt7hCo8CYwKSq5GaDMWvq93y4XCkCvW",
  "key17": "2K9v5Aa3zx58bYWf3br6S2tuDk8Z9mkG7Y1AVnqxizTTKC8GWkjLBYGgaTk8havdojxPTFkFatWLScU1oW9wyX1n",
  "key18": "3wKrcnoGCPD8gpVWYuUyMZLDztW9qXNxPmwgbAvXeffiUF2P5qRZsDyV7ME2gEKCFg7Q3KPyjXUS9QmVukVNxnGJ",
  "key19": "2DpLZoTqFanG7tib8RhvmpyZtvVWQCvW5zmcsHMmtm37cVq5YU5cLBoj3d5Gsvi6dUqwAjsVjCsLX3r11Nzn72eW",
  "key20": "5qXxGLLJeWkcQyGnfj7CKhQrdZQ6TLTN3GxBNeHYs4YUG92rdBfbTCd2ZwuaEwXRWxSm2MaEAxNFwA2eaUfCS1Hq",
  "key21": "ed8V5Bp2ekcTJwAfjc72rhPyHVuiNfxtgGkweJN9kJCXgcamYk2Swntww6fPjppNxcD8m9CxfYssucaBdtTRGfJ",
  "key22": "63eLZkmTW9Exeh5UsvoUwYEZFDcJZ2fa3JcLreBH124oZTRghSoSNa1PCSqQnv7xX1yXtpUMLg2WPTppKszZdSdF",
  "key23": "kqZYLLJqdsPkv5Uwj5QCTtfVty9aY7kmHhfX59qg2BD53WVD6DRkXH9UsnsRtrW4NdeXc8s5RWz1SszRWtTgrPs",
  "key24": "5CM4pyULHwA7LYvLBxkmitVNUG11tb5ecGTkGVmADc9ruifwZdW9sykDWRhKUWZnm76BQ2rk2B3Kfp4xXKwTxsQx",
  "key25": "27DzAVwsZpye5SesKqpqJh9u9z6a7yy1zf4iKVADbByDCiMuNRaHx5jcFMYxTJCfx1MqQywJM1FFfws9g5rWcGoT",
  "key26": "53H3QKxLT89JfrF79AKd1JhpvCT2CayUf1EcsC3FzFK5eB3RBFsnNWccaVpkwAuRQjaFVr2pe73ti7E1rU7EEXKo",
  "key27": "p2kD88SWEEuavBA1UmTxKb7Nm8ap2TkYT3f6pogiJnxrj3gbgJwSEqFsaxTHofMKgMjNqbzBmEDDC9kh2iwzfLG",
  "key28": "GVgShvfaJKs8H1s1aEwWhBJjjGWwGumtte8SshZJVwSZ8eNKxvii2J1LQu82hgLs2AFNUFamKmRYguABqKBzwb4",
  "key29": "4BqECwyK6C4p8UgmY8aSgEQLnn9YfTNLF1ZdRgNxHRH8XosVxk8x6Rk8qvdggQSRFeByjLER29p9TYnajf8uUDwT",
  "key30": "K66Zavc74FUQ6dw31Kd6hWvmXjhQN8ccYoXLynaVDpW5MCwcoXT4ZC6bADhmT939urdvkqs8v8WSqaGuvpxGHzp",
  "key31": "R9VtkJYzxn1D52GrkJ8U2TTVpS4GH4YfPHqq2XupgNKTRjRYPFwRDPexSCCNKunqsmPYwVzm14rJjYCPbhK9u9b",
  "key32": "28V8S2q1CZB1rTU1pBr8r4Sgr1sWuVF6tTU7BdNhvaMPE1U4CF3GPNutAyuESuMFZkCqKZhnreeeX78q8UY5jCnP",
  "key33": "27MEXhSsYCvruAUaW6wQPSQLsfNL4BxC3iyBP86VACbhdE9ewR6ZEQQmGCZKZfgJgxrwyqnoLDPrsERLMLXuYTMZ",
  "key34": "4ZbRYmyL1AE7zYKtdkExH7DjyF3tPhSmxivn9nxgxQVbd4v2tU6KRnYkkZ9xuJX9tBJKEQ7DbBmHeJXiBWBwbnQy"
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
