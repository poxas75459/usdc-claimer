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
    "5KmBGUNZ2fyoYE1q8B3z93HxfVapoMaWyAZaWJ6dGhUR1rBV3zYktxtKFNbwnajYM4rmcS2mMPBRVVfCAfyLXtXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49JJpDowrceXmPBWR7ePoxHcCQCnfBQZ5xqPYiffLHwAYdLh3EsGojrbF9K1cq7FxnLxAMFTKyC8uHzzSHkHMxog",
  "key1": "5AhQxti57A4kn1zGVqbfgCYJL9PY8L1B8UmJZyWEtQ8EANTeEfkLf1GNyHzQkHy2KCkHT8cw8tHoTaa8ZfHr4kEH",
  "key2": "3dRhN5k9LaVud1yjcMYea6JG8wwz9asavMDzBg6urFSTrBmNNemzChpvSBGzueog7GwVS42wwgWCnMGJSeF5BsmK",
  "key3": "2Mkmq1WDup4TCE65rL1NMjukbPre3GyQgh9yXYNHBTCLZGGyQPANZ36wDntyBTLxgbQBWHoFDPb4gHgiXLGwFhZf",
  "key4": "4woPvVQGQnzkRVbz5rxDL33Mw8L4cZdnNHXzdQHiCDpoDVo9Xb95fzRV7fu2BAs1xfbeuPPatLYC83kisGJseXxP",
  "key5": "126HpPCYjJW2QZMstCytnoh2CnmoTUqJTupPQHQR4NJBtW5sYxxhRWYkszdVeKkV32ZCTntRDTsS6MgNgsHLFCfa",
  "key6": "4fpZT5P5mT7VMF9V4RonmKBhtrEf7F1EYFMctrwfi4gHKHWngBaaaQzmpheYnUW1pUteoiBmasG97ycgvpuGKqP6",
  "key7": "32AAsmARdBYtbziqQcqzttjZV73jc5GgipaSSZStvJLyaAyvGakTAra4NphXuAdxeMGsVZivRuXEXaAzq1aPCT2R",
  "key8": "3D9FErefRqVNDydnVk2mvm1K5dW1uvJVkx5c85xuZSaT4bJKzKNvHKW8UVWQ2C1Z4qDkLZGnUJ4WLQeRFmfA5G6E",
  "key9": "ewHUFiHzYJDufDULedPhyQxn7x7LCkAN9GFfwiUPhzP3uMjNmMLCyYs27kB7RJ57rnjfaZaXuqmqhjbbAC5nhEf",
  "key10": "aNDGhTcugEqQ7vGmY4tN1RNYdmaj2anVUE4BBHw9erXsPyYoC2sHRxesRAuKc5uUjS5TaVYrFFEfkS3DzxKr5vp",
  "key11": "3FiMSWWF8zxUhMfTqnskqGewnuHXrPssUTnLskU6EpkfddrEhbVCWPksp6RwHmQb9eB6AGL2E4s24Z3j2kKwRYTG",
  "key12": "45eMaXH7vobTq2dEcUNyBvbYRnedrdP8vx6yp2tfQzMZEtxR4hRw3exRRraAZF1AFupV7ph2hACJuJCrBUB4PUGk",
  "key13": "5yUD5YQjmQrefa8idDQVtnkMEq8sVkLWLqe1hFDApexWHWnVinMNQDFWbJmHKvDRBeew3zfo6ridAMEfFaKo8YsY",
  "key14": "4aogR9dRpqxPvktNsShK33kbWMRtkyPSFKKY3HvJhSsQHF2qWALQ4Y7LxZQYKmofNAnjWFDUTEWXJZ1cshWVBeCs",
  "key15": "2UZ4n5N6bAcPRB72jSXYLTELSkgt8pjRP5foofSsbrCwR29bUQXerJMSxKjSNKKXti3mHsdJ4KAGeL2jFj5vVtiE",
  "key16": "21vavbc2XgzQgdtV5qVKyiPQ8gafG19ngC72uf9gDwxt1iMmfHdGqquxNyYv9WwTa9J2XUtMRj8vzDWE1gVL1xNp",
  "key17": "5yyiGiKHZN71EdjQyDhZMq5RcVzfsmKFVVKJ79S9yNhodwggRhRR9rxz1oz8LNndjyrHq4kw6K22DdNY4JsQFUbL",
  "key18": "2s3e8WgDAJ4YWBAeSi22h2JogH9r8Wuf6J7v9o4duVfRudywQZ87wriEVoGouB6A9dVyKt612H3H3ZdF5yrLwp3Y",
  "key19": "UAgwyKrJpuNdc6z31LVxXKaCY6PJECKfFbuLT1QCJCcMZsHZepuDyc6JTnnEGqdPPAN8Coy3UqfSwcpHbxzAjV1",
  "key20": "58sw9dxRnoUX3m8aXoSnwdy58GinXQRDns9jfNwiMyxfGXViYPWNwn17ewSTm1ew36Xsk7ZGsifeYkurBkWUCgtc",
  "key21": "5ab7Q32ZLNjGDkn4VeWmzviXgDEfK1hc5MgnZxU3DUQtqoPg8AuT4c1LFunsnb9HUWeUY5vLuaHC2EPLoVuAFqDd",
  "key22": "2UnnQSPS8P6N9ktVF7ZJM29ZnKdgyUf2bVPpp9Ty6SnumJqFVcNezRKxMRyYBDquTPE6BRNvtgcU6Aof31utGhxw",
  "key23": "5x9Nh6DD2FsZWKFptzWRiAcUJMTzRnzcmJ5gGiPgBJwNSH6rdFfGK6y8x1eLtji8Yp4KdwSTVN6mTRqspUkyaMzx",
  "key24": "2yoyx49rnNTqwshn89GmCEhnGAfCcgXSYyiGskv6mJof7jeoBvHtYuS6R1Xff5SaxmHrpz6tC467YvfrdNu52gRo",
  "key25": "3ZSUH2tGg5kJrFyP5dXNbq3JwD1vpF7BJZQh8QBaosccTetxyN4jQjFPjcZUThmra8KEhxG2vg1c4PudL9YcrDq1",
  "key26": "4spVspDKd5NnUuGRjjCW57ZXZmrrM76JbemwJ9QL6YZQ2vN6CZNgd2yS5YBiz8y625tEYBATwtz5kBwoceUE66Cd",
  "key27": "JoRZwWFxPibha4u1QT9yGPPXeMJXLHwjHCSMF9KvaSrSXXqv2B7HEprtC9NcEbjyJgNpYLUaCDgSBq85VTCajig",
  "key28": "1Nzt9yDxwk7cSmKCrC3PC2bL47wcjo4QzAroXC7Req8N6b2MRxkhLUYpi2G9JSf58Jrbm3EpBU2y1V6pa9X1qn5",
  "key29": "2NymmVLTgW1T7t3YymZWFKtNh6GjVyymGyxohjgzPW2JxGyAL69CFDNkmKCHoPVH7yQ94Sj3pgTJhTq7yRQjcy2f",
  "key30": "2F5MTmF21yVvDuYiCyLThQMNy3ZMcweJXQvJPmNcuD6TWsa7o76Yg5KuCAuNo9rmP1FbCZoX5FE4tfjzB1ZSksKT",
  "key31": "2uNzPYiX1ryb8eMkj8fFPYPTptJhrbQHMPAk4CyRZCXdq8TX9RXv3C3PWKZFQUDBmt7q925w8qwGEcKfkmZaQCEW",
  "key32": "gFLdL8zU5EH2PTJrmpKCW3821MEFgvCJhZo4msHZ3We3MmW5NhLXAh5JpvY47kuE3CMsNZ4YZQjzi5VuRhpPXP7",
  "key33": "3Y9BPdznrf5X3nSDex8kqmJ8oUBo18djeKu9cpdjnV1ucqW9TmuaGvBqaKdnJ3yyoiR1JXUxwWWXJsvjhxT5yJBQ",
  "key34": "5mYHEuUUFGg9c9RexThwDUPti5h6ofA2RTEqbB3xQ9eUyjL81dBEUAPnt52ugtxNK2MAeMaEjMbUY1inXdUAQ4so",
  "key35": "2DWhk4d3iMSaTzZXbDPGqenk4BmQJzcvTQqyxiNNQFbLgbPkcXMG3FQHgt3NYJQvF4zdpX9hZMTKeULh5FcApADf",
  "key36": "5VJ13ga3UELvcMbGW67kXcccjfq3zUQD1qxbPkTciEVQ2vLtiTfWv1rQiVzD76sv6b9M9VhYyBw4WNoEFosy6yyg",
  "key37": "3GsLnXWND4Dfq8NUFbiwm2CJxVXVQYzBY6E1cCqVEZxT3XMBVwfj5Dn5sKAvWwbYCaUMUzkv9suEc43iWbUHcaUN",
  "key38": "2e67UDy6fdGCwdXLQWSACotb19oER4PJ1YVj8nJfb9o3oeuD9XpbmZ1csGBiLjLPuB3TK3iAGyLmJRjr2CfcFN6Z",
  "key39": "42mmFijJ6VizQQXSxDDUoiHRbxYBgiMiBBkcCY7ZvR2yd36KPjBLp1p3CmgJ4LK7hsQZTq8XfsHqBDqbn6cLL9Hh",
  "key40": "4DdEQEcNLDcgdSFVvEbU6BvaKXwJ2mLTFJLLuuGoi6KeKjBmTFheRAqHL6D3X3ASTiYS2rVJoPURT9xYBpSoRrbL",
  "key41": "5y17WbmJDtK1WBzxYUh242vbm5HpvokQQ1tKHCRv4XU4qtB2aPmrHxxky1MjocvhBv9eeHxeXKDz3WDWsmyJyYVe",
  "key42": "4VzmpCrc5gY6fm4VEYeLtFgxnmUz8w1aAHqwQjWv8anjo4snkS9AoJGYt5rNEkbYe9JffC7SFnku15juYxzm8E2A",
  "key43": "5B1nXovGxa3ANk1eEPEu6oo6WimPf6b9MvXfqMbewGbM2z5LBJHaqg5hHKjoGkphqFNtMjSrXfJRQgMVjTC5Wx6F",
  "key44": "4sMNgA2RftGKfCUFmBiQKBXs7dJZhWhaSSXFwtpVScQ6CiRWUxHPAgdScn66BecdraR2RJWMYmmWpufmtvs1B1ao"
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
