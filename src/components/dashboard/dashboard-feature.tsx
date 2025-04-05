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
    "3DjcLEAAgdfvUoLavyBXyDmfvGuDK4KuhRZu4Hos25uV3BZBd8Ko7Hq4WWMaBuaisvLwAHB6nKnhg1KczE17VvwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wu3S85XJCCQ3CCfQtg7YSGxqmktW1JoccvSroszhkyQaBGBRvpkuczaQUfgh42uv6b1GFy5yPZq8A6kTKFuPLZL",
  "key1": "28uZBeBd4QEDgktr7fRgHScAdqqC6gVw9vcLQmDWeD4guvHdYjgTr5fUMkSxZbPeueiwFJ9CTT4PAbngNVdjNsnX",
  "key2": "5UubJrysD63tKXWiBX8792AjkrQYqpN1N5cyizjuz54qt4y6o1GoCEnxXiGJEj1xdYSmkDuVsDCyPDyya5G5SG3L",
  "key3": "4xA63cofuK7d8hU3woq5UDuhmrnaVXwKTgRhsmhYfiHqMv7RPQ2uyQi7oSFcJ72vcGLuUha7YDsJSsPHWB2YgtQh",
  "key4": "65QF2cbbuhspBkQu58AtYoBReg7hCXJhngDqBD2WGRy4qfvzomaVRVxEF4uiCY2sXpmi74MkRSJPm8Frt99Yx6Ci",
  "key5": "53ojJXA7xNoNipYNL6oid47zT3QiiSA8m618m8b2bTP7R47wz2nAo4nZoKniBbuXv9bFiBkHpJkKU5ACYdQhjsMc",
  "key6": "51V2tLwsfspTteijGsCrGMyuUoRgY5n9KAtR4m4K55PU4RZmG3TXwLjQkxRdpFQiq9SGmo9DAuag3jJbUVgCBNir",
  "key7": "5q2m6pMTC9R8FTtKdgso9CJvfQjtE59j9FfaCL5MdFe55wUqh4UAxHDbHFpdembTmsBTWSLXPA8mfwfHgLp86SQ5",
  "key8": "61SdTyervbYSyQ9qb1At4s7oC6WYH6K8Ez83nB1ogpq8pRpx1Nd29YN1dbW83n6xgjvJX4tiWX7iVRyz6FpUJKTq",
  "key9": "3tEm2r5QcRY4ky6aToVm4kvwthqghxuU428dwsL5BvZkwmJ6JUQpy8nP5ZWpHygYCXU2A8HPUSAXASVrf2PRk9GC",
  "key10": "675xGFdrpb9HwhKa3wE6zt7aUWpthVky2tHxLV2v5MDPo3RG8SjSG89f16F7p4NnGswuVvRcJn52yNABqUzJ3QN8",
  "key11": "4zZK98A2xXJUfCij52Tv5SSKrqFFsaWLcVjj26mbH52cPdXT1oK9h4BiXmW5JBDxBCL8f5XBF7yCR3JcZ2RbHj5",
  "key12": "5LQn8FasbY3HGRwHR2fZCMSjuATKt75MXEjgUfXbnMeMq2dVPkpoNB2LasXa5SSyhyeEc2NspsnFa3hkvvEX1XNd",
  "key13": "5RnVoWGBdMBCZSzeJtpFJrMEmpe6fJ1PR1HS6ZggmwM9z4VZvjrLPBiwNsSbq3kYSRgBeY1kt22fnd1LHKBBWCqZ",
  "key14": "3Nq8k5wHTd612HreQY7XVhkkoUQG5MM6Cu6VgiyaBiB9uPQVF3Y4qRYmTxYWFGbUDyze5HYhhjpP31hnFsqgKPY4",
  "key15": "4FsMtT4wZ5w1QK3HJysuGwLgh7EdosdXshHWz6gKxT7G8NvMqFVPCH1GhaiVAbChjZVEgxZ45cYxZoKoJg7ozjy6",
  "key16": "27cFAKGhGjm4CMnbcniomvFhYgrpA7Nkyx2vVBurmsSiXbburbNwBTXJZmmndrVi1P7WLYr5ZDHP9H4rh6DgvkdJ",
  "key17": "56wBftq2pQyzS6UAXhLmG72cfiXaQf7jckyeQBx4QVkd9Vmvcibw1ZMZfj9sYj2D3ufD1dv3sGtcQBkUCk2a7Wce",
  "key18": "5JbUY87BXjTK4Ng5yEvYt6GMfE9EfoPzFG1F5TgcZcAWyxHngkkPmGe9mVFbkBnT9GWxy83zNokEMUg3fmWT3ZzF",
  "key19": "5Dadk6QuHNbsA7fyTB4UigoYHufksep9rMBmfzhm3HaSWUphw3mcwQk3rurUQkUWy4gt4tDxcZtUX3ETLbs9NsUm",
  "key20": "29ogE98xB1n6w41gkGS1JHxUYZ2Xh5oDKjEHd7hiGhPobKVU2JSEmyDZ1avHw3fGnttqTTkMGENdBasuLEqWeCqs",
  "key21": "2Sv4sRrnR2Jw2ctUccYW3CtjG2UBNcFD9mbKfsxTxpcwSfuYa5Lg23aAXeBpygaBPYjqJveY5K4gn71sr3eKTTPk",
  "key22": "49GEQhK9ziQLeeyQb18rzxrcAHajprPkjDSRphH6NzvjW6jHsvETeQqcSGWXnsyM9uVZaUJADnzngttYrEmoUFkV",
  "key23": "5CGntUPSrgMEsWRThq9EehTW6MQBJ83FrdH3rN6yBVjvYFVHwHLFi2cimey4bdi8Twbkus2RfgQ1hdutLLiDy2ty",
  "key24": "XvbzV9g5EY6BqFJ718nExf4NVMa7qtdRyvPyiYTPELgaUE3SuGceJTAUesgXD5sQPMa9pNPfUnTtyhNuoF84WXH",
  "key25": "oHjpRuwttEJxkwMxV4Cs8ETTW41LGihTN93TrwGf4kU2R3Q5vMUkYDHscykZ1Lrq43Q8YtPgZPiw2qyLuh9YNH7",
  "key26": "2GoSs3Nx6zqzx2zq5YdWgeuRFQJsBbkcDwLYhuMw2T96csAJGbjfuc7mNQrmaS29bEmpqubBq761uibVkJC2AQew",
  "key27": "4LceUBEex3AZSRym5eGVnyUwZYTdov9pQTaB6LZXM1NRbbD5anv4A1p7B31KeMt7Sdi3BgtxgkcP3qfP6N4624UF",
  "key28": "5XmwPLHkwxejdYgin9aJxMsdxcnHXXfsnZFJ47tgMKPQY9k4wUckFEX5JJrJZLThgo39edrSaNBM6x2nvFjKgquK",
  "key29": "5w9SqSnJrh6gH7krM4yXrPV9XxLFbJYuu65avRd9ERAjTJq7djnzELe1phuawnLx2ncECDfLKNXpMkPgMVC4LtVk",
  "key30": "4UVARYdvXHXfG2JYgAnXgXtqmMAEcreCgyuPqzRXd5NKn5fJDVE3YDGaKDWPUqGBEkTzUAmnKtYLuqtpKFNNoMvQ",
  "key31": "5wp3MjgyHrKFgrwcjgwFxM1q9AfS8zjjZxYcZRkMhRQ1YJS35eohsbFY9PVnbBruZq9EyUiMGdkvbstXUy6QQMaC",
  "key32": "5cndBtLy6aLRtoJKpZufgYTsuuEcATjjzU6cgDj5P6sSgQk5vaCk65u64kKNJKdiLRN9dgaNNNeQzfNWNUQGrC1F",
  "key33": "488zU1ahmZeR5tsp9NJz1egqeN8ntXHLD9KSv5K8Ka24MqcBqBnAuAVSuvFgpi29SKpBDigtEPdSc7KpA3jfTJdr",
  "key34": "2EcffUM5FSxrAnYfJ9Lj7cjTq86BP6fDKXZJWLNeAjUMnscTmS7FBoShqdSDcAQyWspZo4V7RSWKETKRFHkTFKYs",
  "key35": "39CnsRBeeZEpE6WBd3n5ejTeQqLsnprcFMW4auZ1aXuh2AC9vUjg4FU4gigBZuFXC8nURTpGc3dXGTKfT3XULxjL",
  "key36": "NFpCkVj7c8V2ChpZa7ZDxVx4wk1iJAPTd9GMX6Tn9H3GMP53LeKnX7J7H7hJ55J287y7rMmdqyRTHHyLezmWboU",
  "key37": "5rbtLjgJeq98GDBn6BAFUqt78QquoYS7RwKabXF9pShNxNJN8oa86Kp5DEFzavUUD7KfvxTWdAtqELTVX7UYBvAA",
  "key38": "4ETQcPCPei4d6a1JpycnQyTobzgZfHnCTAyxogkjFzDoaFjgSt5WXSfGzDCxrijgfxRq5HzHyyGcmS1nBwj6ne34",
  "key39": "4y4xKYJYHsomtHJMyuL6VrRjwKPuHEnA11p7xjMJMZSKvrsvLGUbEsjf8v1PKPEQXL1jpUronwW1zaoRvjWyGQh3",
  "key40": "5VtHQ9uw7T5DuiNGyf9owngtQobYfsgeHuQpnHPu1jCJAJM6erhgCqwcRdBCX61s2ugLJT3dkbSEkMXdxBzh3S8w",
  "key41": "3VdL4NuRmATB4BCZKRgY8VyWVv1zVDwxpk1xPUXPrRppMUdCo7WRS2wwFqcnvFyhxL9Z1Z5GB3zq9NuXHk8xg9VK",
  "key42": "3MTdxbqaoy8vstbPUqkYY74M8nCqaQ5uoj4jPwMBL6SU9Kfe6KJHYanGWxgo45oNvQTEn8RGLicocHNA8y7oyPu9",
  "key43": "5DACLXHt8hTVSEf5e1oUGmCLKqRwh6ocB4xKF6FkFGRaowmS9VgdQahRztUQ4Eg8HPCHdqu5gDJ7V9QncNLiWMnN",
  "key44": "3WbodAL4froNeZCzSUDbb9pFTyyGaLd4k5my5uhBVsjzTpXPseFhLVEo84tGz9a3tdW1wkZiMTbqPbNHvHYwMqmb",
  "key45": "5Y8oHnDpUtjwhjnjSaPjDTLbXQWX7YDY8CQrBwnbxMJ17Pq9R6He9uU9bPpr3pvHGEHGs5ip2RPQJL1aGX6bZcL8",
  "key46": "yThLyTAM4X29GZXYeSfZuQTcfo7qKeWhdRkHQoWVydjCiCXeS7GNS2JNVy3DJbwskBmTzJWc7BwmgViTgUWsXvi",
  "key47": "5qjJbWAFyxNeuRYdJeDLKmYSEQdvm66x3zEUBVfGUc4XkgnaB271omVmvvAXzxdivvhkNZZ2ma9XoeSYugeTkiz6",
  "key48": "4Np3698Tr8VzVDJmX1mJVwvp9EFCJcYf7duBJuBAAD6cocFzkQj6is2zYEueeXGJiQCBrV7NEuJV5FHtavZshAdz"
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
