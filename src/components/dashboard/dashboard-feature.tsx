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
    "5gLUszYCKdtsYxUuJetcKVpAbhJSR41GYu5pqvb4RnKfK1qbTs1DLsd7SJii8DDxxhCxPGi82LxWLHZk8Q6dE4Cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h3iKH1h2KWy9hfWy5uH2wwQK4YbPZiPhJW8hxXu8eJHeeTAmhygm96LUqg8YFKB4yY9wN67somdbNNz5ESwPzb3",
  "key1": "2YmEE6DucGJpFYkXSrpAnKfxTdA6CaDCdGSnQaRhnQPbB9k1FtqdpT88vgtZn3ZiTx6pE8S79fiN6QP8VgxoEk5q",
  "key2": "2GDQeaP987g7JU1BiBYndkAdgitRrvaCkxFhgLrJ9Nk2zFCyVCb3NzvexjU1bxzrQxQG1ZZeYHtQbhw8mRZFJb7L",
  "key3": "eRE99Rs6Vn3FcpYNQzi97Acn1WDT6pZAvG4Rq8MYXJFBUda2AdNvF35uxZweADEEKR6vwGjfJKD7n8xNrz4iQEe",
  "key4": "5HhVkmqCwQxCJ4eby9dCJNe5hX7Cf6xbZbdMEWT8j8NudeDNxY3n4iV2YTBLjKUaBWSZU9g52vm3Rq374pvzM54Q",
  "key5": "51T5HzNc8PYWZwb2AhCVmMeHuincW7Dq2s5z94T25SVTF79LPVUn1AqyX9HPTWDXFektR9vWseGAg5DUeGXd4D4H",
  "key6": "3rW3dBDhig38bPjhLBtLYVatuSWbPu59hDnxdFsEcRN641zSzaniFyucTfJmQYnCedvzsb3MV8wcP19gvQ7pg8we",
  "key7": "3MN59NzkrdCG8s9FgUi726G4yWEXSAhrrTpqCBfcz3Y1UyeT1t4ZLXXzgSdW1Z6y7xSLeYGMbPkvBocnuXPCSZis",
  "key8": "51XojGNFCqeL9WntW9j7Rkie8mhDed5VWBcvawPNpmTXsirsFCpAQg5Nm1Nm55aY3SxsXBDahdiFJ41dADQrDPyj",
  "key9": "2cGtrUNBYxVPdfG3R6YQ2EzNqBjPsHhUa5wff6m8ekDnWrD7N2TPbMQ5gDwk8JAaShegXXX3xLmthcx8BaWCqqd3",
  "key10": "5nCZo6uBn2iqdxXGmyYVKXgQpNhvJ6K3ir91C2aaBGgvpdYFbZQ4GojNPeDvECY9RnzXoRzkQbJNGHrX5xX3wYy",
  "key11": "5guvLhjiWgJopKsQ8jJXp7vyyXWD9NwVtThv4vu6x6vNZfZezxVAybzfh5tA4CEBSokqn2wNJkxEbaroqNnvSYMP",
  "key12": "2zqVkaeLKupcNottjtGxe7B2paSBMjn87StjFBXqQvqsHqAW6rKHPo1pPMjUbZhrHUKpipqL9EHJ8UsfVorjebbh",
  "key13": "5yW2Ymyzaw7RSMZLYeAnVnpcJ4MQGx6pquMc1hUdy4CbbM4SYifhhyR65ZNcNiLaJRUqL7SdKCR8BCiNmNuhyJPk",
  "key14": "4u1NEVjxLpKaSwpKK6dbEiEKYHqLTs7n9X8PVi4wxGaamey9TkUj6N5BYjcUzSKCr5shwU3ptx1GWmxJAi2Jpu1C",
  "key15": "4ETL95v2sQQCPw84D82P2WEjsHhWomoFsPkp2N1fia5sRnWABy164oxYKtic75sK4h3taQhWqTXdN6BGveqt4rpT",
  "key16": "4kHEjMZW88wUnNrGrfXsoj2qTYyK732UcSvyH4ef7qcv71X8pAoKkGrSDU63UAsiHBGrvmSriSGBqUTDME3RwYsQ",
  "key17": "3xZ2v67ZYY5mEtRniTMziAuW3mXndqCJ4ZaYaVVi3LTxgwpeqJGMcahSeyCyvVdnL1AVxzKfiAXYGPuNDTQPzRwY",
  "key18": "2NwwZMF9JV4MVPxDCU3EmbeL7QkxRzryF26iiP8YKsowTF7o5gvbyftQri3Yg3xnYhHK3GJKuZxKYgwm9gqdvw8M",
  "key19": "3iZAx1Et1TEfjCHJDw3xchLyeHX1ztXU93PvPWKBAuG6Vnogcw2nuMfcxddXSdbEuMBkNekF3CRvaPiidUBWgagJ",
  "key20": "582qJgxj5KV7AtczVsxfhh8iJCRtsTdTQCG9L9YDavbTHUdBCpYdNTciJPrgMsBWU1ey7xTL3XEN9iTWJKovHrXS",
  "key21": "51cLVK9qFMM9sCd84tBS8KdaZeTAdwz5mQ18thvMs3PHxiTULKCzeBTsd5H5RKhvu1t2uPm9i2WqXTXRQSU4McDk",
  "key22": "41QezTsZ4Fq9eVH9b6QZPyT4THRnZFUm3QcPD1F7kpiwymggx7w2wC6csB5AAZ5uUN4YgDa82K56VuXDGbxQRuAj",
  "key23": "3QFkXPoirmaXf1pxmnbwwbMWazJjByALHEyCKwMfvFaU87x6wjWCT7W6v5impTY5FabSWVk7cB7XaEKv1BAg33Q3",
  "key24": "2tHWrw5uEQRARSAgzx8NBX7DE9FmZHmMTCLK7Sncqqg7qNd6jMAvhZJALmzHzjt7Xe4do7hP32LtbWCbEkNdCV5C",
  "key25": "66pbBoSmieQ5JEoWuKyCWmn7oNN9U53a1wwuKcXpkeyFV9HRPPttGXoGVMZn3efgHiumCD4CpuJBxKs5Mz4SvgN2",
  "key26": "eYYPgrgVLkozhkNZwjzkQ1j7b1qg5eES9udUEfaFtMypwscYDb24CwonNYWcAurCMcRU4neG1baicgDNwxMovSe",
  "key27": "4HARcjcrS1rUb4uAVJ2bPC9yPwZKCX5WD8BsdhKe9peY3bMjRUCjEpnYVqcNq6mDAu8x3vnr9F4oHBQuz5LrrefS",
  "key28": "31ePCsxhGrJMgKascFUwQcpPVWVEBoicoEBHDCMNVN9C4kuanUpQFUiYd9usEi8kihv7hCBjNGw7Zt7Aeop1AxVP",
  "key29": "5JxqvHnuFfSQUChJEHvAr9PhesRcnPoSY1HPZ9kCATRPM4TuHjjc6PfgTKBmQeC61Uj9ejqGfAgpzJxof9pGkL7V",
  "key30": "33Vev2Q7v5PBU25Qv2DkdQB9DWGBHU6YvzpnCEevXxhDxggvC251rzHrhcsAneVAKQzQ5aQxmVMcuyoao879h46o",
  "key31": "2WgbNJC3VYzYmf2bQpwsouUbBu4tFM2jRD4Q61E8q5t2ZFPU9rhoaoXiJ7zjdRjKFDDi6VEMxfMqRe6m6Db5FwED",
  "key32": "2NS86QNCvHucG5BoH17U6sWczcB2WAP2QLbyh8qZMXqoXE677p1fzHVBZbxfPCKKmmiudRRQRyYuS3zitYysyFtS",
  "key33": "3NGb7L3CPfAgv533LnT3FXSooHxsLvqto4XCpCvxxAuFf6sgdUx95eG2b6tZ2YArwC1LTBWDivTy8W4NFDnsiJSN",
  "key34": "NbFpM5vaDEoVkbpwwveZimoSd5YKtH2EmbeMAxXpDzUJwWrUS7ynecVnevaPycrwSk4LyjPTqgR64TQTxEDAfKX",
  "key35": "5CSaWYRPuKiu5YgP4LXhXVMp2jakzVMSqAtuyTRRpEfGZby6S6s2TDs3qTcc3QU7W8oF82PmeCtExnuFfakx2MwD",
  "key36": "3wEz1KgAJDmY6w58xXxKXhdsdFouWtenhniGSnzcXek2cxSrirA4S67yDUCd4TdWg7Q4qcc2wAF8GAK3A4fLuGgf",
  "key37": "5UPGCshFWvc78zHzeT6F4cP2DSh7wiGxVEWqKNjfAxb9yCf1FpcTaJ4bsStU2fb2ayyUxL5GEenwQ9JVZUn21722",
  "key38": "vzuif8PxnDnv1Ez54iGtZ6aLgcmCQtXh5p7hgNhGtvUD15bZQe5DS2erXUgBRExYXQuZMthws8H8aKDVEQwQ8Ao",
  "key39": "4aSmqDH9VymV5UEP5Wug17WXpKEX7LSgcG6Pd5h6wZ4feMWfv829BXATyWZdJtAZsuK251KwtDHgspdmGeaNSACs",
  "key40": "2JukrYkhsLCb9bFiEphR4zAL7nZ7iYLxE86e1Vh8Kipd77mwBhHGTUB7KLTrA9H7GsB2tFYzr4qnh8hTsgArEfB4",
  "key41": "ctKKUyoqnPqHuXuGqJcc8EAc5thHxwTGZ4RamccjPDdUAFQzjtbygGQqYVci3KFzkvDoNDQ2WuVj9hPFnrtgRs7",
  "key42": "4xHLz6kGRcgN6QSxCdztsa4dzADUUpy1GpyVW3HsFxK7tavacxiCcviQKV3JiqXcAyNyWDi5YEwojLuNEqXzVHAA"
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
