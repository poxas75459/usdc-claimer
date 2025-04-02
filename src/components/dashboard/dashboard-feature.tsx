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
    "4fosfNuW4HCxT8wytMHsDUEfCnrjHXVbdHbcseKYmVE8xnggz5LDDdVSJcY9R3HqUsHpTjsRhx8Jzh9RqjojBDV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NAgGCS9FXoR1xx15L7jFwsdXkCXjjk7WgRx4PJ1hR2X45a6uzWzmxUqgJt43citSs9rWGtWzsyd795Ykqy4kbHL",
  "key1": "5kmCBGPPog98xKg5S5DyjDbmQ5C4gm2MYunj9s4Rz6eUHUzDNQTHxeFaGntJXv89uNnmH5gRC1ht82SSjG32AQ64",
  "key2": "4RWYgW4yQ6jhjwMuwddnRANwxzogoM7F765eDp3xiWtDm5iqsJu4ge8ZVaE1vj8a92dQSa2rLMR9SPGjY8Wng6qj",
  "key3": "3QTYSygvik2MP5BxFv3p61r6XvToY6u19t4nKTWhvsgvQUmhaMHDtsNSHyVqiwQ914uVQknFySKFWQnsMurS9ymm",
  "key4": "5es4mRPzvoEHy56wwvWHMgWdU7zBdWVPHUp8W2nurNiFnJ33xPgL1twFvt1oX6Mp6hcvZPNPrbVQdgEgqcruh4kf",
  "key5": "37gF6AaqjijvcUWsct4dQ1uzGyuBQxNc9HavtYiBeNXfanf8Lf2AbRbjbwzDZoWcGjN1JDsQyR3igJcBe9vCCHLn",
  "key6": "4SwtcvKyyfRY7KZn4D5HxZEAxbAoFtutsyVagQqY8TQVTCbm5CcJy8fcCVCL5p2tDmNtfnNiN8CwEasfVQ5cA5HB",
  "key7": "E9Go1XYsZ6yoL6QhcvfG3b35KDiqqvfcDTTW18cjf5zKRhgGKfjMQugYck8gg4SpXdvLFsHzJdfZQNA1oKTpQTU",
  "key8": "3BDumpvSJSrii9TuxN3is39D81GvbAqBbGzmuoqDFK3Q7SwnAo9ZGpoqDAbLSfY1a68t9HXEARS7yyzb4mjNvXdh",
  "key9": "5SokcfA8L7cwtCpy2Xqd6aoNhTmNGkoMPwPbN3fRdB5FbqATAHqJvfueci7KtiyDuLXVmYLHhxukRv18g6E2i5W7",
  "key10": "Fc5Yc9sz6aPichU694fV41JNte9wkqaSeLDMWruiWqboSWanjR8gE66M96Y3XZh8zuE61KQm6ujcjdtsuPhHmcT",
  "key11": "3BmCxoJfc5Ujsozt9YijHCxucLNe7pogjWtAGM3g1K3c8fW2Wkb67krrC2dcinSDHBQcNAJcDJqbBzGVbey21DGM",
  "key12": "3ysUhsYktsKDb1Uztonz42cbJk33nUWkd8Ju3orGD4ULLfNjdYMNhRbxs5yqNdgnsNXs4FYLYMikKNPWaXYdznYg",
  "key13": "3WsoN9wvMCyQitTXF4j2EjVXcLPLZAqSvUGsnU1geSm864soqwrgscx5hn9QS38vBjy7Eb2BACYof6YiCAJVg6xk",
  "key14": "3kr5WiwdiEAqgVGPatcWB9rgyy6XfB3nw7UXZuNMYrNh6WYsmd7viK85qK15HJM6YqsggPm6bw7KVs57723AjhE4",
  "key15": "4dKcpPiL2rQ4esvaFsfVhuBxhtUDQFeyiUNLLDRi2QRvN6q32KKbmFQdn28Cz7ZRSYvf7d1gw8vh5DHRpEfWr8KV",
  "key16": "3G8oScmTG9JEAAo1Jxq3cZMgRRduqchxPGP9SjhCKzeqDafb2UKQrQ2cS5ZjG2Qo3Jrv89rTuBbacELve8PwELPp",
  "key17": "65Ma7xczaf4Rh6FmBAqAXjmknoVoTY6hez7SFY4FxUtyksXZd5CysREBYNzWzXxL5ZQiP42ArFZQCajkPmqB95o3",
  "key18": "5LqD3gTCC7N7WThwixsmCnDpW6MZ5agLdwGNedZ6ZUYiptCQ2J4xMYTkbwjHMDzYMqZthPonRaajo7rTxh4iEtK9",
  "key19": "2dH8CppgKu7hg5jBbhe3UEUPwrWpFiu6h2qxUhDPCD3uCh4XErGCGZfmcDYSgmfDMXsNc4uUKNj3ZDVELM3UEiXN",
  "key20": "31VC7x6gXe9Vbjn6RcsZgty1Zh2tpC3uEGtDCNgnRdmrLghuPS5d1QjwK1t94K78zsj2Ux5ffdskduakhDRoQzqR",
  "key21": "43UaJqz7E5rWXq7WhhyfAehzwe8S5vc2Vvyd3Cr3zs2pVDCVdQG2LSunjp9WERuruhPxDpgHWAonPj4qVFTTwASN",
  "key22": "2eUWhRWnrGce9YJ8whBN2tQZqiAi1RvfvZHHQ2bhCrauS71dyRAqgmAfBXV5H7EwUeqrRjdwnav5arKzFuBNT2e",
  "key23": "4U5oipJEvMG6FTKfTPPHgVZgB9ycopC5hmHSeua9Xho4LdUvxJ23GAX9kuXf6nBcPi5ZKrSuFkkjeNBms7AxajXH",
  "key24": "414436katt4GzGwRhmHukAZHTF3ZkufksHKQeedHHD8esgodC1z4MHD4Q7EvPvbNuH7wZUt4K9DP7nN2ArAsC4Sp",
  "key25": "4rUiAyr4cCxj9XvZKXC7DDo5NnXxzp6mD2JeuQBrLYXid1geEimWGZZ89RFQwitf9pLEVEt6QvWLr61xEPjtnAi6",
  "key26": "2d1hbDM8YKSdfBusSdZQVQDiJxPWBkC6geB68krzsWhU6FKK6eGdi9Sg5YGibKbU7iHA99z4G8uNu8aW4yVu3rV6",
  "key27": "2dJeLHxT7ijwgN8ShKhSu1FdwNKbHjXG1vEBHV3xMVPyYxqf9ENBNrTHh8tMVhGB1zjCxNzwH4n9TzWCzBGNckjQ",
  "key28": "wjrCTr1CH1NDVEqu9ucAesmrAmt2zYviqiFuoK8iyWzS1wP4f6MFYEi4ECmXVCbfUAfR4eiJvvUgnF8Qxju7RpA",
  "key29": "iDrqDwagB5nsoEqoRpZXS2XKJzgtngcRcMFEHiAxJJvPB1VCV2LX8FyDdU2kFBZj9rQxHz2MAeyd3npgNm6eMje",
  "key30": "41yZcp1ooA3qRzEKmz2rYqPQ7scW4uCZVqLz6m4bCMCf9kW6z1T6NdZSNMQJmJ3dxo8iX7HbFzXyTATG69S8ijfP",
  "key31": "41zYuVbhv3S5WZKKqE2yvjj7a9EpvuQVkXC9acAiLUCdb7n3F2iCFCN2Aggtxw2xda5cpvqp6ijTs1iW1QVnp6nM",
  "key32": "2HQUamYLTDbBXnpRVz68kZeFDvawjgxoL3VYZ39w4Gq1p6FmuvpWomBDBmvybvBqvthLXqnv5SV2TGiAo7pyxPHu",
  "key33": "4Sf42TC77wtbpKrpDvSbV5naVD1Gav3i6AShxBuBByVWbxkVAf6d21RYvh3v1t2uKCoCpDQdH3Lr3ffAbhVMtPJc",
  "key34": "5yqJf7xNu4mXomFeabHgfFD2czZ5MC29SFdsegc5s3TsCzuKyjwUAe7JfHd6pxQ37HNYnqobjnoGf6feBru2Yoe5",
  "key35": "4btTc7x2VYru5gJDtei1Cu66EvfhE1ghWgJntgtPCB6Js6rQLdin3DASrL7XaJ3Q4dsArVzW9PvK4sKEPKwrQcy1",
  "key36": "57qxNaANHuVCvwjJFY6ahqdWxiRmh7VDf2tx3AwHXWPCSutovXgZuiDD5X4y6BAaqdm41EGAk8ArfjpBnsbEddfc",
  "key37": "22ojJYjG1BLGFdVTV8DkeyMzmquo6hVav6rDN5tRhmrti9bTA7jD2zeVYwjCLJzZkyvk72qFJbisda92uutwB66Y",
  "key38": "2UjuRHvuYUQMB94t29dXCDjXWEUL1Fjd7xn16tK1ne87AREh88hAykSMx1GV81dYxjUnpcv6kC9irEZqys3pMjZB",
  "key39": "gvvWSEYNw8eFdHroiPWADvnVyxLbNrn9EgCkZFrrrixMEvwiMdChz7mB6aVxyxEyLf4CRqtBCD4229AzbQT2PKa",
  "key40": "3nLorzmHF115iBKV85pJMJZieE9DRS6ewYdKYjoFiGE4TDsCYsH6qCHKtV1EG4URsUDpX5X7m3DBR2gKeuk5sJEF",
  "key41": "56BQ9siwUQhvddoux2riBtXk4DeWmMHQwjVryRcncKBeUABhnGoLJYba91oufWhCnzmwpUwnre8R2oQwkbjX8iyS",
  "key42": "3UG1NmNN3Ceuf1GUUxNR8ekWkkGiXejK5EEzgiBJTzMRGV3GUJ8kJuwwr1Hrvxh4Ac9BpM1m1ota1DKEksbxicfA"
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
