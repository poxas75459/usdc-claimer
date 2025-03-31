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
    "3kt2aqXmfM86i9So2SrhNUwr27FfPaZk8NVieM4ESgpAhrCsspraMzfkHt2bFUwzDqp211nRc2aWA8Nffs283Ge2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sanhiXo6QxF9rnYxz6Y6wBbNdKXVm1SNTyyA3CNzinoigp8PbiXA6sXjg65AAof82ZXZNif8Ghzvaq2mV4MaJDp",
  "key1": "2HtqwXKNvaDvJkEG5da8akLyUrfLfpjW7eBgwerZAW6rketdxYQQ8D7saX13WYMtsaBwsqgNiPdCAfGuk2MTjty5",
  "key2": "8ktGVH7rgwaf9KL9LwK1n2oTzvjmbaTDaSh2Bars2p9rWdLkvrHskgsKXw1GLondiswMhNKDUs7dZwzzz1gQEN6",
  "key3": "2d4ThWqzjCSCsCfd8dqrzro3ZfHJdstvRHQLchkp9Ya35jjkucJ6oWKYQBS48A4f122EwJjzCDdxGe9cSVw8ybHp",
  "key4": "3Qswcb8K7E6orHs6aqbof87tLrzfSyRa4ZffWavxrW5DBAHzHNFwrFLj8iFtsFszCJSBQFXFCG6X21VBeou7m5dH",
  "key5": "4iQf25CZCxoVEALdwBZUUhhZXBa9gk2KyRZ6HB8A2DNRNCev3QkLhEiVtBMXnviQZmUtWFWfrhLsENvWsTUkPcQg",
  "key6": "44tmKqCeho6HxysTn4x28hZyR6FooW6G9AY2QqghoRQQ5YeTrusPB1E1882ikCoq77sCsVLtQW8Hg6ZrbRVQTNqp",
  "key7": "5QJRcRz1i8jhy7Uh9H5rJjj48unQ2LJoE5qvtX3oFp9RNjhoXGBbjjCL5JEiEhWqHZAhymadg9AdGYnshTKE9iGB",
  "key8": "4EEtaYprnyXPKZLBqLoQn1qZSvTKvjitFusJpHRkS9d8bWBrqizBLYscL8e9pXc7DHVgtwSSFCC6LeiyvSP9mRQW",
  "key9": "5BJyygbywhjg5qYm9wzPccn6pAmVcBUx4hb9uN5iwkcZYsJGUk4mNVZzkdJ9sHA5RAPinQPm3TQ3hVbV5NEjpD6Q",
  "key10": "2cPEGDkaLCtKxcEbw8BVFFYYnGG8iz7S7n9qaSBDKQqf3CKx5QS7quhEgPxHDNT7YKfNadJ9o1HPmUG2Cx1s7rxx",
  "key11": "3wv5GBGgPQ3eACxLBbA7PXLaC89VQspAP79UXAhjjpq3qHFu5F5YCNKYGREeexPeyCTWNyhmJ5V4m5838hAnA2hz",
  "key12": "GBNroaRHRq9dgUzxh3HKqvhYaD1izPXwc5eBToqPZMVDsTeqXZNDAu9JPj3xSoPkrHqdx59WXDP5mDkbZhWtvLR",
  "key13": "4bzLtNWHu8Nvx97118BzKdrjpd5NLn755N6c4aWR1VFCHFN8VbPgGVU3HHgEgeyPvz4irDkZMrXLyZFq5X3QvFrs",
  "key14": "nb8pjhBEx5wYjiRBdzpACiELEH9qsxhdtroFg61zNb6kzjN85posVeey9jK1jeKsmHoma1UBX91zmAhEQz8onif",
  "key15": "3YzHYR6Ty7M4YWxktpspXa6pfUE3itL2hLpDmhVRZmahJPJbxi9HouwMbrHXrDE9ra4PZW3ppkpYvJDzm3Jfo7jv",
  "key16": "2tuYAYw2Fx4qFQgVLPiDsUeWhX5jnTjEWBJrvpwArsuSSmPeucLu5e7AXQAc8Ydjq9P1UDAPvfPYxdm8ZZxKGyeR",
  "key17": "5U2SarCzpuqrGpxv5E8Hn5ZbvLYaohRdLk7TEPXrrwehcDHFCpWg2Z899NxojdJp8rdtMWhaEHdUka9iSGcFTLJP",
  "key18": "62EZ4g2xFKVX95PzKTWEzjDWH2zH36ZkSbxFerNnzA7Zx7cVc7a1WFzXnjQKQwDx9YH2FuWniRS1CzkXSPW8QJdA",
  "key19": "4PNFvhGaRxJ57sGZL8r7z5GKvEfTc4HvsRGpVaEds7V9PmhX9v7djpD799ePgRrxs99W2wWCRF3sVt2vCDFBKW3t",
  "key20": "5BRdaUeDRXPH8ZgJLbXDqqtqfUvhrFZSEBoeexmruELn3grxTf8vPjrRnDu4g9pj38roqvgyGcj34tgdgrXL2dcD",
  "key21": "48xrmcGvKfkNwuTmQ7A9GVNoiTiuEoMDK3dWv6KNL6qzEQv6dpbjxUwiF1wHnJyRXwHjdSuvV4HoUgGLChV54RFm",
  "key22": "2Shk6y5EXdsbyDCSdiBgYTsneDsyozFiZdcihotiDB44z4xugahUgeahc3xyEErbghcHecCmFN47aZKf4vFYyuon",
  "key23": "4ygCKFKx86QhLUzp2UUXdJeZ4mNkb12tN2gMpUwwHh7ahAxSmxXWdU9XmXd8zWFYQU4GgYD6CJfKCFbUhS3vSY3d",
  "key24": "Yq5cBKhbVU2LHYzvxGhsw191t4grfsGtxzEpWJSsPdGdwq2nfDJjqncM9xXiQ4vhihJ8iXiDbtL47sHBdmvmpcS",
  "key25": "2iSpW9Uz8Xuat78H5VgVzVmnuz14miSXQwDNaXRSo96KMkArvhduaxu1Ky9UXbE6oiUDijBt93YWtAfnqPjh2het",
  "key26": "53XZeHcUtdDtHkc5PuUpDpCJuGsYs36FfGK4KSotmsxYLTHh5D7KtGGkgcZfgFocteGw83p4zLV5d5ZbA13YPXdB",
  "key27": "3oCzvFsExrNAq2KxfsgCPbx1QnnqHEMwRDvXX6a8yKL23vzoRMmKshF7ghvgCZWaq3tMypXS4Foz6Atetv2UtfNB",
  "key28": "2RAzNheNTRLYK8GWkbWifKXduWZa3DhtmbuRaZtcm6dDiY8rbaSRRTnHpqKYiUPraSRzw1ZncRrgiKHrXUWiydfe",
  "key29": "5ZJZPTKcYw3AXsCG6C2cABNeqHbvDT1WsS9tm6HZqsc4fmQi7CZAiRgi4GVJKAEXmaGTevbx2i8aBppFEBRFKYPB",
  "key30": "LhyEJ4LGeCT456N6iq4a36drtHg2JpeAWu1yMUcSGPs6sMLFCtCLKZ5SRF5K4zYWf5iWidDNSrTveZBAii58xST",
  "key31": "3C3ypVim3cpzLLt4yBsiVs774KCFZXm3NJnwPN3N5xoM4NphzeFgf2gftfJPSnVDa3WZCuxvBS7pdphh7azSrm8g",
  "key32": "3wpeuop84NAQqYH68LPoXuENanX5LJsKFLknZPWGqVtJDmpU2HdErXbjxuG2LjFpKqJBq5uKmcwur4cRdiWUrYXq"
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
