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
    "Sog5oZFSYPoLw5jevabaZ1pG9h9LztP3J5y8PcKvZeb32nxU4Vqa5XS4nqjnmuX5qdq25kBdv1DA3Zd2LTTFS7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hw9LJZgb3R66DGEJKyDXTfVsveNdv4XB49o2NMDdVPhJPgJgLjMLgZmQ2M7PdfiErSuotdA1rZh8uKZ48mZN1N2",
  "key1": "59RkjTyxLFBkP8FevFTCcW6qyAzd1c35w5URHSvmA3W9ark6pe96Gc73tMXwQxqk1Kumamfe9BW2JcbzAjdbd3Gc",
  "key2": "t8XJ3LHdZueE3v6csvRAkHAU2NhWqH2mcqwhLgfjbLWVEhFu5mU4eQoM5b46nUkBz8JPbjDZQWnecCSyr4BSAFS",
  "key3": "4dWMRpNtwsJsTqCcJ5RaNvH64kQxgGefTzVfj5c13dYrMPqJrij94NNwRbDjSDQFMHJgG1u5J9QEXGj4ZRfGSPe2",
  "key4": "2vHW29J6i1qFY75LJJSWkstQqUxTasKXLKu5LifT56gcYsJ1ukQJCHrkYiaQmPwNwLeK4xyv8TLcPZ9NWGsBBR2C",
  "key5": "2USPcyLuH8Q3vbKXebmiBYJgB9nMoRWsaMAJsKnrV9KM3q59wJeCr7f73szMeWCQQKPRJQVuYK3oH4MciTJkZvCG",
  "key6": "3tANdycfKMy9E5DNzLCC5y8WXg4gSHsUMJBZMQMFYFz6U8nZ9mPow2AsJyjWEb7Dg6BGUQ5U4tHVo6rYGTdyA63w",
  "key7": "3h6M6R9NJvFqk3QUNRtuZiCqZQ4UtBShNYD9oL2asTTTStbcv3891oHrrKHjR37BmF2uUno2kkzKSYMkc5jTkeDt",
  "key8": "45QvfDL2KDZAP7dZFLjoR9u32ZA1LCvRdTReRHEXFrtAbZMS2jWifT5VKGkRAGiLzmbALKaaMbrT7b8G9gJTVFmw",
  "key9": "3Ge232rMnuETrzaqXortLuBf5bDvaJEEE1BHya7pXpencTz351PiyokzAZScMEDCfxTHvrnGN6YUZJJC7jWWMSvm",
  "key10": "2Ngrmnd6ofacKxWXrFFXTHBDNf9Byo9yeb42k9wb36PKeiPG1M9waiXM5zwbhgZ4ktxhTWuzHsdbW14RM5iTabrV",
  "key11": "2ZNyJJYGYsgSnsCxpce3ayZMXAbhmGyJwDQ3fYomwN2STsmagnUEkTVYfnRwaTZ5af42Hqf8kXwAaEQJdF65LeXs",
  "key12": "S6XGRxqK3M7sBGsfSCLbBGudk9R52suWVvC8F8PFmJiPFwPPAqj1bXgi4CLPecqjm2uY5ao8B3RiQE7Ctcx4Pde",
  "key13": "4dAocgaHmkqcHmEJUMmqnWf2u3o3mUFmv1E9mQFwwfr9M2XykmLrK6wJarSmro87GVYMqAnzdiMeCPas5RjGy9r4",
  "key14": "63oe6zyy6V2X9nMT3KEw96YADAA7nwhCpRhL379CQApwuh3FbMWg4DtZqfVBJQ92s7JoEy9Y3fxoLZzWW6TzDxV3",
  "key15": "3aEcwUqwBFuAkpn2rVVBGhH2KnWywRivQqMicjuCkJAru1rbVmYLkvuVcahwVDpvSD4WGUcdykHc47YpMxrJVe3x",
  "key16": "5rNxAtT2JAR4N2aNz2KkUoycLwF9nwjqxKooLYH9xCwxn1bPU8tazicqCW8eEE1pH2PNLiC4osxVEFypxrXuVdT4",
  "key17": "hc8FvmWgnn28ykk5EhdpGx5JAY357pPTJYFbvZsW6DQpCCaj3Ma7jXibXfVujEcBcqFDvauhYT5hrokHehkrSEW",
  "key18": "5XdBWRFbPUwycov3xr9d3i9Fg1nWrUuzoCwbKzA21opyJYHBcHjjhuj95p5GvVBdgzKGMUt5MsTKWDxSNcNyxqtV",
  "key19": "kKQGU5cTtKVLg1G2a5oCDba864nR9Vqpep6ogHaoyvjatPS8oDkpY1tjgNbaMcmeXzGBe9pV2erbDpoAnXdDMGj",
  "key20": "5ds3W8SMWS6Yx9gqtRSdSrif5ecdgYZeKFipRSJQ6vAn1dYCbs3d1EemBJTKwzbEqZ2ePskBP52vXdvtWYB4zZ6s",
  "key21": "4drEUdwQNdsRKQ9R8fL8A8FyP3SDYc1j2asJzsmvoH4Zydbrz1ofrcAhXxWg3DR4R74KJxHeW2CG3SwgA28CpodW",
  "key22": "5mys4Ra8xeAjnnWtHgyEHnN1qJWqKA6rsWEzLYXsSZ6mWFjdjgG831S4yQi8yxTaA3Cb7Ci88TbiRVy6KkzofCY4",
  "key23": "5L1LYYqpS4wNm3f2YhxVewApt3j7DXTqZNJ1Y5w2Q3F5tg23xLEVrCMdP7FNCkpDmydRkpCwZGf3FtVD2XidTRJF",
  "key24": "4tvK3QSkDe8xzPKrzuZKWJHMZujhpQ8HEqZsPgMA84iFPi88WSJgTxZdFiTb7t9UsH17tJUifgKgxCvedF37FpXX",
  "key25": "mTka1ACftUsbP4kZTBYcCgPkNn43X6h9GfDtX5D3fiGvoxgHFhcUxcritGVMqjBBYNo23knbb4iAQ3qYirHMFkx",
  "key26": "4FFnES9EAueZBUSg9diSFzDxyjedye7Q4Mb87W9wuSJmwPPMHSxmQnZa47itzhrAYKhdU1sTCXAk5EWRg8nzucTB",
  "key27": "5qQmKFuJpGdDwWwLaYSMdao9CJoZdW6VwvhEpJoV172syZy3fNEdbE7DW95TXCmzXSReWVguBKjpD21JsP58N8rs",
  "key28": "4mpUw7xktLM1avkaBok2y1zWJESWg5N8v6TbvGqRRs5viEm8bK1yzYrLPVEDLkCDThbgHYKUGJwgtRCaQ9Ztd2Gx",
  "key29": "5DtRokSNQK3DCaUU9E2QJt4QqRWQ85UjtaHYby5xFFjsdCGorgGe256o6o3j3f2B6k8ySPmYQAsPLGLWC7Yc5R6Y",
  "key30": "2hnoF6JNe5mmjEfWvvTH8ACAD1DHg4ZrvLDssCvcbcFK2KC27U1s28oWAJ3SHox8Wt8AF3x4Yiisj6udDtgEMGwS",
  "key31": "5k9MgvzjgJ7g6P7ftn16uxn1viMyByN31jyJjCDtBW6uYM1hYzUSkob3b524M5tfbpZHY7qNrhfp7M8wkfPxMqLF",
  "key32": "55VGmUUyvgL6jtDdYj5p7YDEEBtb8tHpiRz5fcexst62xx5DW6r82hYpobCacdke3bXpLZNd3YBZ3cWaK9F5V4sn",
  "key33": "3xvhgQYgYCPn8qTbKUFd8ghkwb9iB1W5z1S9Y6khjq8kVwyKKKPLrFJmjZhFvCwe5W5XeSEv6nC5ywizSEbvSt4s",
  "key34": "hzkLqgh3MZG7sxa7jnucZ7Eeto9wu9bUopWoq7UynhQwvUcYRzNDuKTx7zaJWSugHGGYned5gyLj1QEBkf3B3pg",
  "key35": "2H4pVF9oBd4JemJ8kjSPia3UfGLoho1QFfGCLKA945ReKg5wM3asGJWsbVSvzgqHZeUMwEPpJkbZZiKyBACd5J5N",
  "key36": "2yMSKEQbo1W66uFVBhGLp8ixGoQvGDP8LDtcuvrGb8rtiUyVBWk2qVsAmsaz2cxabPPLmNn7fuJBNdjgfpXZzTJm",
  "key37": "45o3B6ZtfHYjKrapBqwY7JBvvfu8QvV5r8ULjc84uGA7cEmQ1N11zvptAcgoGdNXeH1R6zTFcxVCAMAUN7stm5Hs",
  "key38": "CKiUrWwgsPH2Ee2RzdFFizLExyMouGCDfAL4P395HNLWi9GF5bnVytfe3SE8sYF87F2eY7hFq2XaZf7i8X6c4XG",
  "key39": "5ypNyL5pxJeUYVeaDnmY9GCmqGimrEyS232KhW2z8mra2ZSD9GwKDgTd6PQ1dDDfdFXeGUEQrnj3RjbK4MbDWGjN",
  "key40": "63BHHR4bwmbMNuyP95hMTiEZsYo4ytvP5yaJyLJRBoausWdKPMSXSscZR9Sst958LoF4uDuziZVm39shcWrnYLVD",
  "key41": "NcPx8FL9gJV2dJXK6EpJkLTBrhNzcoGM3yVWDsHbbBt1duELgVb7T15NyQyzwHafCYnV28HvpyxVU2HJd4xWVhg",
  "key42": "3J3tGvBaHU5wRSV2nJCZWzxFgBeXQQxcPvinVk98z9q5fLCBCcV9SpypqwUd2rvAi93rfjgfaV13mTfDFfQYK8CK",
  "key43": "3VcfSe8ZxGFs49NgQ2bN4BA8Uud3rTdw1Bu5BcQefArtpyeN67ZSqZv1q8dybTeLAeZUtSEpgSwaE4ZjBRvssE3q",
  "key44": "5X9QZVEzzNawoGsnrAyQ4doiArWk66Ttoq2aSgFfpZygjF8HrjTehGVdRMkGJCiLs1FibLRwpmoKmbojATXQYDtQ",
  "key45": "b7wzJYmuKuXkSMicrufNN3cvMPaL5aR5KUBrJvwQaPJFZAZifmY8csbqdJnDAYhefxuvTz2HpDe86ugy6kAdB1g"
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
