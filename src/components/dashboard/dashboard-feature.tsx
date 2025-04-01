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
    "3pebn3RBhbXmHuZoTyyhEy2MaknmztpkkcV6m7EWJgWXG6Ep5J8NB1R3CvFcaqrHFx6AUSQxo4a652Wj6wq6Dgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UgMqHJsSWi6eJ2To9pFdXRUKaVZkVCYui9febrDaotg4Xq99LKfT5VG6AdUaYnU86VA5m8LfWMyvGuG2Ny5k9Ap",
  "key1": "3UxeBG4tB9BNKTr2eTW8WpCHp9fkUKm14g3GVegpuaxToUG7GDx15DghbV62pEsS6pZbfY2JVpiv1T9nRvZ8zPDA",
  "key2": "5gQEmoJbiRk6w3ZWgsBc69NLfNnZs2Brjvsah4Eyjakr1dseLGXEkom1Wnp1qiGWNDt9zUDvNbxLwJS2ZuLpLPW6",
  "key3": "4f7H265PeREN1h7zssEX1gCdNw8Wi8rr4XhVn1MunzPaozEQStWATg6zYKfEU6oatWkXUE3EET52uezFjJRq2PVR",
  "key4": "3xXBhb3sG2oJ9XCZAFmSSA23yFDDYHpfVNybHmeyf9JGNXQXY8kqo7xemiLdxyLoXBzLBTR6KMR7vGYaYH19PWBA",
  "key5": "3MUhsXYVtSJ7upWt7FHDukaWocT6CcgSyJ9iJAbX3j5iCVc168UXi7dCHKpGihWSVZY94hvff5jZGBj8WfkciphS",
  "key6": "3hgQ1TGiY9DiR1UC7A9FaDRznYJ56W6VAq7qwJcjmWDkotBSRE5BBVF4yAUr1xsfaHU1TcCPT2rLK6DBPSDs1HhH",
  "key7": "5LYvLfN2oCrBAEjGZyLQe73XhK8HN8v6pvu5onKzvZSr71Q35DXMJUmmgWqR7nkLMkuakrTFTqJSGzsDNbshqT1V",
  "key8": "drVywARKwNqUkUwe3HD8DQjyc6bErcvWvpctu8LhAXiKAXENzWKEAVLBDp11mrdbq9cj9ihqgRsKKuMTy4a5wea",
  "key9": "43wEuZmQb7THiKxdgyMGyMmiiQFnqbzWtfixpzaBgoEbkGPSDXeZBHqmcFZtzqRaVJBSJ3ZX2HSACxXLkUekT9sn",
  "key10": "3eouZwJrUwChGhD5h2eBxS42f7o79W7xHgSkLeZLnNZHCHYU3mZdt6pYWHFjsmSq8m9Rejdu8KkS2FDGXLrPgn1d",
  "key11": "TsydTaXiVbyo2rysaEPvvSA4FSYA7NrwQediuFwyAfchFDFCf8bLteVtFGhnuDAF2JcQC77MaBkV9KWEtN5x47H",
  "key12": "4cWdziJGpajEghaChULjtFNa4HkgNGyHZjLnQKoEsvxHmq51Dx4xAi7wqTn3esQPaaydiyUyWS2q5WeaNppuAKPw",
  "key13": "3ey5UzGft1bxSBRgMyosFvz8LMjxnjWHMksbMCfzEPJrMXTM21G1nrsNnKWyHcRbhV2oShUrAZ9Q3yvp7bmoCjB6",
  "key14": "2niRXJkF5Udqrisu9afhSYUMwFyCwxN5mvfkFkPxKtBepzpbcWwp6J5rd1fnMx4y5MTM1YWNc6cTqPhp2R6GnYqR",
  "key15": "2m2herynmutEGeUbBBkX2ysEbTxXmY22z1LbUr15Ku96JG6iKdJ6sBUsJgrHNcEZfwymtVxzrDgro3PKbZooDgom",
  "key16": "4zbi4b3TbGYei9A1VGhkhBxiz7HahZrtJQvfxGyRD2i1JyPytG4kgq14XoR7nx9dvPLoyJi3Z8phjF9BiAdDvxtt",
  "key17": "2VyKzyttoxHm5UuvsTb9oBnjfL9XVbsabpFX5q6xx6ZdNdMmkMuYwAh4f7f4vTmbbxXoCYMD1bGLMYD6fBqGDbCZ",
  "key18": "647cC9yKkHwd7ETkPT8tvV65qZwqPSXy1BccnbQDDphLtfDqqwmbz6tj4A995dCNWMGwH2tnsrkhikpxhZvKjiMq",
  "key19": "5qAWjzkcFrKiSzqLNUFgJvGSjGZzRUNvMi1xRtgcLcfSeGMToePAEpAmHYdS2LRNWbY6ninwNF6Tt5VHnn3XA4JC",
  "key20": "qhWGzygp1BpbTen7XDJUPGJwoJkkQs7VXvgeaRoJ3qi2bUMd1ERTa59VM19yqtJF98a3KBuXPa9mKCehVfzm7W9",
  "key21": "5w5Mee3YVtdSLsy9WopNiRuSb8inwpeGtZrVSTGveYhu1SFQt5wm85VRQtjnGK5C9bVFjxyfS96EWskosgoQXLmW",
  "key22": "2HvqNfVKEiNjV1wRujscVJiejsX7g5GPoNp9PQVyej4Q8X3LwvegR9ag2BLRw8Dihj44g89VbVbPCsaV4eoMQcDL",
  "key23": "25v59dXA2SRcHPyuZn3gFwsKgKHG9BsCCibfTngrecXrkXXiDJYSowcH7Jepeqqpowf21mUYs8FoyNcKeeiZ7Xru",
  "key24": "677HFTqQF6NccN4kT9yomXngFQtMj485PQiXhFst6g38uSSPNbQGTGwPnQbFdM1X36CyyzTDPxom71hnNGR75UA6",
  "key25": "Ezx6yomBLvCZ4Pqi57Hw5R6BESz1gbXkD7o2c17gDzXf8nUfBY8yH9ipdDQrvBqHR5LrTcDHCFV2NdW1EJaWsxe",
  "key26": "3sSAzqiB1uCPsEZzk9n5eiqZVixggbFBSejtVg63PgXMz6ZURh2A9nz339wkCXeFPggHhr7ZXg3j2SZbm42ThBzA",
  "key27": "3P97cipCQ8B2GNwRu4o282aKNhfVr9dHrJawAgMQoipLC3hG3kjex2eqeYiqNsQrpwgRaP3voYPnuVvSKmKHErfs",
  "key28": "4qwhtVeCfCbUyCCLtFNZDbT8GeEPb1ZuMGKRZYbb31yXegYBV7TLbV7LHkpca9Eav6fM8bP1QfkKJDHfMfuCGkgr",
  "key29": "3gxuuQ7FvkXdAoZDUw85Vx1fdhaCDW9Lhw2R4FTSYqpjratUsMhN8mW4ewRig4uf9ZFB6t6ivpiAChq53nLrEskd"
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
