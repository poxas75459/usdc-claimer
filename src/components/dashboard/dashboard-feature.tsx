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
    "2K2k2GgQqXG1H3RYyQXZuGQyBy9Tq5Hwsx42pvoLUdQQ5vbk6GZPRxEyZ2XpeEJMgLR4zRzvTnxZrHcy9Npqs3dK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DEwnF3Nh21xgopxbCSRRBQGVd8RAsenP6qZEjXLWU7RWdwM6JHbUmft5Df31eeuTM8kET1NLc2APke9B9Vpze4p",
  "key1": "3t4nPcLRZwrNmfbea9KJAQTCZrr5FMxyLpuxZoWAFNJNthpYALDBEjKyw5EjuVTnY9m1PnA81z6Zd5tHVZzG4QyB",
  "key2": "12MBnXgXR2qQQqd4oDqMCcVEnxsgBg8RQx68jhWfwe2pcgza3ZwCwQVxZDn7MEUZcxmYifV8yj24YyeRVN7arhH",
  "key3": "4t8sQeN9Ry5P8brBGZ4QieKuFRYQvowifZjU3VVFLTJEdX4StX7sFzKdjwaAZuTYdCUxBBcvXu7dbMJeZDwy3mXj",
  "key4": "EZ4eGGL8uhqB4J9XdBXw4B63cRzmQnrqHoboKcmm1eFbXFgyXnNXhGUXi9gdEp4894CVVevkGcocbXd6QVfRRHJ",
  "key5": "iqJkJ6nFzQWbGHrxw6G8iCcemZRDiNygAAkbQpda2VYNN1jUYShiPNbgLEzvEtpgjai5ZGnyn16cz9jSQi7NFpp",
  "key6": "42zfeBDevTfKpQGveSFpQbs8xjYiPoC56PQdUNSDsQ5G6ESgKyetaS8wLr1Ebxsno3Zt832XBdqxgRSnYtXP49vd",
  "key7": "2UapVdETQCXH6j3HR4TRMYFaE8GoQBfsPqaqkBMrAN8MDiUni5eSPFM5og1ZemRsHs2mj7kBNr4Auiazh9PJH2PK",
  "key8": "5Mt2uqunzoDWQPzaLyBxDxXTCsBgWRL4G66ozeeaz8Wj7rhmabFgoz6KNuvNzTxpE3RR5Ji9LfKdUKLCSgQtdJm7",
  "key9": "58yuP4F9gsqihrnsoGrtG5kMepsDAuZp6iQxcxe1MZijuPVxRqxWtU5xULhjS4cj5uf1HVUdgHA8ZjJpe2ei8qHY",
  "key10": "2VNy9EmVaTZTuk51Ljs2W4yumVa15BXjSrTKyc3RDJeVkDoXLKiLfJLajFe5cDxqVfVtGf7GZrkW9X581UrC2wam",
  "key11": "32iWcdKtcShaqa19wspA7YpwgckJAsxhv1gVVa9RUofCt5wUuGnC7XJGUMrfU5y71k4joB1uY2FebwEc7mwHwSvo",
  "key12": "weVGmCxg921JmhiZPHD8wrYKSisYX7eE8G3Ldn4FYgwbsu8ToXwm8CSxiFs6J4wBVKDLhqvZQzQffocDT1msFFj",
  "key13": "2fgJunpJTxmA17YRY86FeryVgXvEgxFH8pznCi3KwdXhTWCpxRRd1wwP4zgybY9cEhHr2nh3DARpL5yToUwt4Km7",
  "key14": "STV3LiEFzo5GWB7Nx9HrdXacpZ2JVq6EjwasfWSk9xBGraKehJwaQ4YGbUkR63GEvQv1oRpnJdLet1w6jbb4L8q",
  "key15": "3EhPHsftYPGJc8R8KTVmcJfaWtvhKUXm5zFHd798d4QXR23t5XYtGtRkpxFfDguBj1pzvmeMkAmRpW7zRgSCZia7",
  "key16": "2MzV7vM9efLvVnm9HMqgy8XEEVf87GGyESvBGkYfPYDTTbBw2tX7bXGSgMpJ4VVuqL56LfhQxgtAxUKtBZ1jmpwg",
  "key17": "62shNxqQpNaAr4ohaAFVDGUsSsxvat9qs5uCDT2zhnxCpEEeRm5Ff9Xrhngt1xc7RpX5Ax7zdZDMZVvZ8wopL894",
  "key18": "5mwkJewnbq1WG3xgWk1VAi3qBkQ2AzBwmbfxb6aW5jcbRbf5nEYBc83hfPLo3yDbKLBSECqCMBxaLeBMvsv8V6jJ",
  "key19": "aY4od5UDA8gdot1BPfki4wU2sWC3jxEg5sXEavBJmYrNRUpLN4uCNJwY6y22nZPTxpZumaojzHQ7qFMaSxWEsDD",
  "key20": "eoybrrjWnNs8KyxktzETycgehpL1sVKksVrb1Q3DGe5m85xpUJqN9bw7uLz7QH8McXcT9BJeK6k7gqzieDE7oKT",
  "key21": "j4Tf17UBmrRsnisd8ZpzvvvvNNydE13aBhDiC6zeFBLwQdoTijQzdDShZ7fQprNX9968bpvbDybXfUxNWn2i2mM",
  "key22": "66ECdtKCMhLzqYm41KLcaUnh62jvCQPQKNWg6oovTumHiXeAJ6gTpZTwSMiza6gPDuto4nPnnjzttcsVDEFc7H1Q",
  "key23": "2X8GJKL4FbaL5PBbPEvGdNXt9Z2MMosBPy3baSvPsqyoYxx8nD5Z3sat3vXRf21Rz62YzqJpy2q7wijULexZQXPf",
  "key24": "TXnnpgLvY77AkRN5e5atkd2WPRTCJGmWV9iSPZSKB7wbVqbPC5e95cUU7r3Wrp4KKRPcYjHaY1AW3uBc9QkxaJ5",
  "key25": "5Au2PyWFJjoNsHYtXjdvyUwL7tjggEtV4az4yjopUhM6cKcRXwV6MtD1Tg1arCJh2oqGhu3mVmm5LWDkM9z45qzQ",
  "key26": "4Qku6EwgsWc2h1sqK5gZ9AwbiseTHJU5S6hQukdoVfsHd8GzhoTnqExcCZ2msgkY2dXQ1pekYoPCDCSHqERdwGD3",
  "key27": "4UwfefvJbMRaMMyat43eMJGpmBNnrBNk96RveiHTenbnCtne5La7RYwhrecxTy3LzUe7FUvqm3Er1F4bqHRjxmcA",
  "key28": "5CW5pLz5KmBP6VDu3Tcc6m26xK1Xi1a2vvMt2NVQfxtKiSrB4RK5mhmFfgN4mH8te1uFRUhxEXoiBv4uYebDtdDh",
  "key29": "2MrCF1wjuv9Q37vjRPd8ARRnRsZqftGSTjxKMY1762k9jVvAAoRv2h6WFvRyu2MbziC3GHb2qcozvJpk69Ss63L3",
  "key30": "v4Cy1TR9ZQiwGQfTmeoT7yQtjCWzHBiAUHgokMxaRFpPbDgmiNtDEzStYYy5wphdeYGWNefmYGjvrdMzdy1DStF",
  "key31": "5qWe9JuvjygnTLvtZGJUMwPVBaqW3aguc8j176EgYRvpfx5Er6HUbNAxg7ftjexGcsyc93bL23fnhCweXJJLTpCp",
  "key32": "2Sy5we5nDJW17svaSQNPCrvkPDFkQtD81b6woDK4VbNFfWDSY6sQWYQV1KHTUD15KjgYLYZ4FJmsnXu5TEEw481Y",
  "key33": "26AbUthfrwr49bHwK3gdgJyJyrZZ61qJdnHkkNJ45ub2fVChCQEZvVqHKGryLUCZeZQ78A6kKhRnjXMCd3e1joE7",
  "key34": "45SNcm25R5EnevGQ5Ed4L8Q23gGmFbpfoaZeiFGuPYHKcUTBp1Ypzeb67pxzwNekmXVLftRLUNTKbAbvoqcdxFuN",
  "key35": "2mc62FkM9yDBCsqEiVRwZGG9AWqVVxH26BCXXD2QB5NJUE8mk9AZ7kbJTAxjamidBKfSbsdUJzNYMrqzRVjKozos",
  "key36": "Yq9QYuyX65DA1Efsm3oPUpbQqH8rbtLwm5Kwy8RLNEQKVmRHZkGLx66DK47qYP94FZCPmGPE2nn23sC4xPrmfd9",
  "key37": "2b5nxCoPoVGabM491VL5wwqJKUwt4gd6bewYjiMmDaHNnJdBjHVgfr6YXebTUx1GTZTUGCftgkFjovYDD54eyHsy",
  "key38": "3QnAc28jZJywppJD8q3JwBEpe7RBvvRb48fSBZ32Uub2dpFfwzfwBNy3McxaXaqmt1WzfA6qWe9BjTfzdWEjhqGH",
  "key39": "3tGvqna5juRVpcPewovVm5vJ8wb99UCHKmeJ3UzfAKm2kYW5pLtu2NpwhDSjFs3DUkiR7EAEJThRgtPi3YY1YCeR",
  "key40": "3tj3bhpNmcVG6hFYh86y36g3mcuNkgLwGdA71KJx455jv6Mwn6hR5vf2dvXDPdbngAa9mtw3oGhrSHHhLiZGQ3Mr",
  "key41": "4b3wYkrnUwwG4fJrtoVgvKMLZQi4bMUyGTGcScnRtL87AHiPZVJSGJBDAVnqbRA2tDFxyXbYYVxhgDXVj3EJmtVE",
  "key42": "65sS3mBbqqoqhaYmQrKtf51SUdo7gifdmxUgHhHYE32pKYUVEukk9rngzsodPPmsjVLkzQGaZLEx5eB7FRa1rA2C",
  "key43": "xwY8Axt8gihuSueyFfFXcvR9uaHcs7bk9NYYXBVQJzxtGoTUaL7kwzW6wtk2QhPrvg4AgTdhqkH3RoQG1FVr78N",
  "key44": "4K3RXhBcJ6JjNut5jxPJAwFPpeerrhDBurV3T2W95cAhJxTBQeWyZV9Cygzy3huJxmjBMN7Se7YRX7ZumCJ3HHHc"
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
