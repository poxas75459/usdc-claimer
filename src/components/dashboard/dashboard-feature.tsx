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
    "3JozP2BuofnhnM6kAQE255X37F8ajr6d959egLgj1eoM4L4uKKyvtKEbdF6fm5W9cQoyKcMHagyPgPNmaRzXG18v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZmQuK6MTPjVEHhUYeZkeTN7xN5BrJXXjE3siBfVThaKnaAazb3iptzRhHRk9dPfEEomBrJPYXcBfhLHyfzFzMpL",
  "key1": "4T1fRWbwWqJrfGixemEDd5vDo8wYGAwjoN3X2DqJ5EzGaxLD2puSG7CzGMJeEPQdZ7JQSzzLtL1eexpu6pAzNeYF",
  "key2": "23DjJm3ySvDfidgikpJjnGUn5zQ1kTY8hZvHCfKsQQGoSGeerDdwSR7urpbxCv3hadjeSLDuG1Hp9fETWsYMGPRN",
  "key3": "3Yj3jcd2fJ7qDpTo8qsR2keR9uuMu9TScvMrrxatXWKmCCyFh5vF3tgBxxR24nTGphfvmoWas2Pg1wYuiJEWS3pe",
  "key4": "3gyt9KCkLAFf7jjydmxABK1imHmEQimeNjdt1Na2HQW5xzR93w5pGGD4wij8GcM1JRLJW2rHzq7o1RQRbmtQeUgr",
  "key5": "31Nj8aoNqzgc3LUGVM5LfmnLe8zd6cGJM6qtiV74GDibLBXSSoLApkqW5bQFnVNQScHxT2TdMQcAL3waXJgJKZw2",
  "key6": "4rkuW4vGrBQZU4CUuNNFewwUmdkveCmBNBnFxvr8RMYSH3g67ETLbSv6i53WDVgKuEuYwkNoaegURBmtVdQEEPZB",
  "key7": "QSpDwNSUM2MEo5JNgsHrRnMMRHUysZgVUANrHBfHi5MoDunNaNk3mKCNb8NfbnVndiFJG2qZdVC4WEDc857Fwji",
  "key8": "5S1GEoUDjtnwQo755e4S75Ho4YzNH6U6FkWcPnZznrpQ1v5xcFuQZjGewvVRLVNdhmwsjXUjT38dGMPGin6dd78J",
  "key9": "5M2nVJTfEtpWQB71pGh3fnLBAn1u4NVFWNu2KSJStbsQjRrksR79vUgopPa9P9QRqsm6gU25APSipcWUPJsqFFHM",
  "key10": "5Gr7VtWjW7qunfhMEuC63kzzc2JWj8Ac32nF4t63ukA2W63G77yqRpgDV5vr1rpHhxsT3AcQ6zdDus5S1ZqBFYr7",
  "key11": "46UCPcRpPdfNHoECPMWXL5TnHQxPhc81CyxpXxsuNVzPVM4SFDdbeh2ED9yUnCEz9xYVTwpoczaYVrbg7KdcjMLT",
  "key12": "4jaZ8ECQa1rYHUWDH5oBpVsNpxj7CF1uHj4s6cSriPXprHRXhy8o2ptL2YLsDtX5LZxULsjFZKMuM6eXLJrZqVVB",
  "key13": "58DVYsu8rFiozuUQmruxnJ72bZt1ZSDChRiJnmakkYkLoWRWjbi5nf1UK6PYajcQ23AXrro3PXJRby6taqtapzP8",
  "key14": "2cyJevg7kTJaAGrwRaEYdUm9Nz2y9f2GbVULYQwtuiPd7ufK4XvYyWmppaugufZA9q1BHJiXEe8qSd2oN5ottwXn",
  "key15": "5QfhXmJJJFjTYaGVzjFwzRp39U9fCTT9728dDyzMr9Gofb9txb3BZdU7WpanpcHEx2hpGnenKiDPt6oND2GR42Ua",
  "key16": "278stmKigSVrR8XHYrgyjGwHySQECQrpAhT6pj1Z2Wz6bKX73dk1GKg31Br7eEQ4fUacA6X2KMV2w8nxSQJh1Ybo",
  "key17": "5EKvpHn3q8JmbBfTZrVE5JJR7nMnUUmTkHE7dRapsfE3kS8MgQj91PwaDQp7Zdsrz6ZL7qeyPdsK5axPwZMnX6BD",
  "key18": "PRzeXEYngaXsSAAvXf4UjkFn5vRoJ2ZSyrAL6abJBVbZfoks8GS2ctbJzt2K5rDKv7q6MPLemisPEKd5cNFnq9t",
  "key19": "3s2UmvdVVZ1t16DoS3LVuC5put785dquoFGR2nqEmj4WsHD9yRWizUMEbnoV9BWBQaoU3RkzjyncwLB4fkFJrUJ4",
  "key20": "kNxK3AgssmZLfHE2eU1a93q3XcT9AULan2fsQynZN7vTFSakTJ2GNkRjscdqoTWcAWu3XBnESDf9i69UZp9QKpV",
  "key21": "imeLTah9Ro6oqPE9b4cTyukKMBdw8U1D1EhkzFUR2zNov5mTDQxS7gi4ej3Wp48UZJmUD231J5RXqx2VtG82fhY",
  "key22": "41gKX7UGWS3CTsZv7uiTM2d3Qr1YwQx36d7QWBXWwQKCzp9fsdmkdKbTPeHCWLRbwZ4qtgYT1t15E75eVy6WG3x6",
  "key23": "32NWJ2fRWtDrwZSjrxUNmmeaFrKMqxApqk3V9HiN9LjGtEfStZh1VgiSqW6prW4zw9VYTQKEchjPigxsGyUqV7mh",
  "key24": "2dZeD8pvQpJBhmNFZX5W27x2WuMS8z3ejT8xRk4yR3T23jwXS7C1fuXwy7crkLdeTnKH7hoEvWgAmxjKSR2LpbRU",
  "key25": "2cmDrKhPTuHVFm9QhaxahR8UHo5yWvnNCrafYaTEvjDoFrz9Px6geAYj9oCADs5bsqfZ7LkfpCq6Pvsvr1NAsQur",
  "key26": "43qfSm3i2fUAnfYjeEsJvnwQY6hwaVBTXS36aGGM97EB3FtGLgEtjX1xgN5BY7v9Rxr7DFnU6dzS6bSTVAwPkwNY",
  "key27": "5eDsVADjeztHyKUiqVXotrZkRCkL6k4pZYm3AXDKAxK5AbAr4fXmmBD8KxQtfV4F6CasxKkAjd3KggrFcVmsbXX2",
  "key28": "5wWgDCoNnRcD3ugr4rg9tLGjEjjpwYgqKipWr5hcRbgf68sDHPwd7jK8kr5h4WWHnaMM8R3QQQ9GK8b5AQRaqXkW",
  "key29": "4bUVTNWokw62KnAa9SjAe39hA5b4PSbMmv92DXchz89dudYYuiTxduhG9Eb622RTQyGjUUANM8TNV4feLP1rNKma",
  "key30": "JuDihXys9brWfzukrdHFY4nZuStYFN7nVCF2b3SnmiX6ZvXGPPVR46ZHxpWXAg9ptAWAZnfumFo34ZfKgke8w9a",
  "key31": "55X1z6128nr1knNWhZ6rsrfsXBpRpETMt634nV3HhNEKMpAQnw8knnLheGS2z4U6Zz9io5cXZoUX82HWvRff8uCr",
  "key32": "4TBcW2b1M6t7mBGjdoN5PTH3PBigphhSsUWHakfSPLWXhiA6K2PsGE2RvjF6fHiA6mnfZKqKsgTBqTFXP6VcbC3j",
  "key33": "5azUYyBGpwfyeqRbPu2Po3hzGbLrzFepeTuyPUykQ5Q8WUqqmymxmFN879pP3DNApSxJEj6cH37B1CxNTaZBuFEq",
  "key34": "DjdfLH7VNgpJ7rrowJX4PYAi7q44GAMKzLFDL5T6YCb7V1FBLBGu6aN88vTocEBq7zT5jW5fTXFZsQQvdzPSe9r",
  "key35": "aNLnwUm4f1n54EToaLaRPcXNikvK1YvoGZKvWr85au1fQqWQnr6u3GMDk7gtH8BTgrD32Eyi3Z4zfvGuHaebJLs",
  "key36": "3sfZuAGdd1qjvERuq3rs1RmJFT856UAp6F5JXo2DvhNYUrcRRLnyLJAY46mXg67o9VDtzD7JcUkV6aCojia77wPS",
  "key37": "2VqHPcbAq2yy3JF594W8QPKXr5hrd23VmqbDnAbpj47GXPp1qTji9CNEtpsAXiZ2r8CaiCKmmLrpak3dSDaHLCyw"
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
