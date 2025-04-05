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
    "4SHEC9huXDvdexAiWwtSDGR6TmxbVb2dX2tNXTXyPt6Bj6V96VTXNKxykgMQZGFSUSrqYAaqbJPfkAdbY6MjXMjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R9QT8Y798Gc3BtTGzfqLMtNvxYtpP2YNCj16PXxy7nBiLaA1ciZNHZkTJdDyJX5rdxDt6NPCEBPxF9BU8zXVHkz",
  "key1": "52Go7dAJ5DsFXq25RQ4MQLR8mZyqR7AAF2CYXSsgJL6hLmwgSagkXbNnBuX1KZChQHokHvK9Jn1q8RmDvtzg6qwU",
  "key2": "55NhuWBehd67XiMm7L73rshDBFuuwAUG4kcU2ZbGhbBW7CVzrddcBL6pKzeh1HEuoK2H8SLLMjVqKKwZMRwWZd9Q",
  "key3": "C2MFzv3Jcr36DxVUpjnLDph9qc6N4QVxq71nMwzUgvxQim5Yr1UjGLEFbixuXgvey7bUr6E9yR38P85dNUUjtxA",
  "key4": "38QRXf14STcv4XFt2WKu7tvDLhdCaPsBtRG3tkEmWnzCSoycrnRArrSDfp2vjzqbizwXVDEokiJmc2v5dRWzs5zH",
  "key5": "2JGaFxjrCEJkM9pirR6GM5nVrcUsvXKT7FtFt24eksjEJWm21mRABh7GPQnKo8L6kYHUxs7jjFMWV53GgE6dLN95",
  "key6": "4wgLNVTEWtNr6yrfdtA8aLbhJePmxJpPRSmorzCz7UaYwv8aWNPCxHC233KMZqqjPHfQx2PLHAbMpHCrFHkt9LfV",
  "key7": "2crRvgBkLugzLj8o68ubf5Njv8GKM8RpJJPj56MsejptoYehDMWCsEEzLBG9LLd7j5qB6bjDUzHc22xgVSyyG3Ur",
  "key8": "58AamSdgo23ScJQZrcbrqurRGpxgA3ZD3RwcXvnkpTTFek2774TdeAXz7zVUUtuHQJ3gRUkvj2dAVdNqnw5yUiLZ",
  "key9": "8D3TVihcqZJbgmjXcy61HU2gu4SqoFdDw5wELiYQvTJqyZXWPn51WVwzDupaKwWXFLJHYhMe7Yuwxv2P3MbHpz7",
  "key10": "5cGZZNbtCwbcic2W2nKNiJVy56mFFQj8GXYchPFPQ9BAJmM9gzFSkdP4PVMTk9Mwxa1tbva3knTQh7oADfBsHBmP",
  "key11": "5fyt4kVsf5doAdM7ReJshKRGG22HqticjV2Hh4itZhNJ4mpMgeyfyWA27ZMdhg8oErxFwLFvPV3GwsvxJAk9votp",
  "key12": "2yywFjcXq1sgEo3o8vXawFkBsFq9LDSPDyEAhkAfLZ7dL7SHzz6rXW3bQW4EtNJZH3F3NjFN29FYtSGQ6LuEQTMd",
  "key13": "2L1LMfHzHcht5F5j8ZmF6o4Ej7QCE476eGLCq67tkhrwyo66x187UmSA9yp6KH3RNwwDmkuJ27EFkqNakKyAXiM7",
  "key14": "4rqJRsK5fxtxdL32G49uzMrhtvkCBBm7MFXjb74vuKz7JL84v5EBbnSxw6hJWE6Ywv4DUoDvMm6YsZT8P6wUknHo",
  "key15": "3E4yn5o1k678beCp8VRxkTDxouNMKsYcaGE7KcwsxBJ5YDnx3YJS2DpLwTRbuaJaUFv9X5xyvNFVoJD24gzT3gM6",
  "key16": "RezZmpmFZe4zrWqS3iZMMwUPzrqzqDXutkGWxiA4DboNmECqnUP3EDCNMRwrDzX428KGZKCiPUjtGNuiEcMnWGT",
  "key17": "2u6jcmS6wjpco27NUM3cym5HTCg5WacWAk6y3rKcpHkyyTsJoRpzjzMygemPyjUFd8DUbXqd5ucLH3mKxRUuYKwt",
  "key18": "4sHaMVgqeNN2AuYqyHkkagb2HWJbk6YoUxvKBVyRpSYoYAFcVPedfm4EkSymGpQ94ibP6zs7ptiMsfpRvv1mh7XV",
  "key19": "5gsHXc6cCX28KYardh7tnww1cFfgYKkntVVfLdpTutZFJQ5RKkhWH9Dy7cEgC3zgP9h923A5TQkegsrekJRAnEdR",
  "key20": "5yfEAZ9BfR3bJhW6HVL5gZJQ7KFz8V58ThduY7sx5dmddtXWzuZXZDyAkJcmEf5XieGTowiuvN4nrfTFHLAnF71Z",
  "key21": "4ezgXstHwzU1eAJJKrZu7XhNNXbrCVAztx5Zdxy1rpyk28u9yFhRjvekB94XCksRsn1sKcgfMYBL1oTnvVQn428B",
  "key22": "3zwPvTVL9fV3RQX1FYMcUVEP2Cep8T5x2rrPEmDWFrBFNAY4Ux8pLGpFB8cQ84deJaVTxfhuNrBfA4r7rDeoCUMS",
  "key23": "2UgCP3a3dwRrNJNNRgCFezR7mR8tJ6MdEXuhsKAc2xm5Htdu1cpR9cTBcWDetF5SHPp9ygSdc4WZDyTFXgzYct1v",
  "key24": "4jsTNoKsUXmRKd2xv3LknZvs3XHAAo4HyGH1F6uGQtxTAG4LovNWrfA3y5z96LWswhvuH1JSGDuiV1jVZqNf7aN4",
  "key25": "5thFp4WHMU6Ux6JdiFZnRHgt7kQd9LTTAsvXfXVFdCeKULGU4v3fejDxg2DqCX1GhGSLX3n3RemzUCuGizg6yfPC",
  "key26": "54koWijoeFjM4XxKYyc6kcmixH9BSa1xgqvk5vV4De8xzVBLcWASFddZPDifhShtcXtAaGLkPoD9TFTrghyd6jMd",
  "key27": "55CmokeskCP4R6SYjyxUEHUsnWG2KQNBjVmADTfcn6sSijuXJ2Le4sPgXttPTyYvbsnGDPqV3vaoEiVVB6XsHQti",
  "key28": "49Q4NPYpzuyNEJV5WggpMjYNDbAQszbdqZ1EcPmtdbz2D6d4sUQ5i7vXTcz1BgeAzQwEXES8sJcUQXaiCv61Y71k",
  "key29": "3KK42CXpEskQUK98oE24UYRkVda2LVBBGAk5KcGp2fHm5bDaaBdp8F1Yzm8Z9rK9yP5EsEbF37LLkxaW5P1jxjCD",
  "key30": "2SMpD84L9PwMprBWbEQX2cWcPWRXZMAKLD5B38VJHQKpneoD4RV6bY41kMKCRdjaXAHXg35FXkVwEorfxKErd8Uf",
  "key31": "4tZkuuz1YHgF5kLJPL2ixauSdpnBi7A4uTMMztmFXAbApS3B8VmkSL2VLXVUcuWqXzVD8U7B5JP7sKZ4NqodkMZx",
  "key32": "4gXuCJsqDQhnmjr49nLWiQT1PVFdM8GfVgi3QYewF1VwQbBrYbp6g5jUd3mDSJR7cEHUSK6i5FEe1hRbGfDdRDgK",
  "key33": "5EBRY1JQpxV5ZgggcXTJcQVaWK3uw7JkcFq1iNWAm5o6wPPYCn4HQTqGvbMEHn7qs2n6HC5ov1H92eSHpTXwS9jh",
  "key34": "2MM7q7YJsQjDfVZiAgzLan33pgVztLdQ7cVRcpyRaMAqRhJXwFPVjsXCGSkbR2odnYsdjUK1WEfpGme1ANuK7BMt",
  "key35": "A58W9EFrompz44N4pxBW2nSrtptDSmFzBnks8nYsjcbPrgXaiv4k6UQ1VJV9HUK6MfWz5mRL9xQkJHS5PcNo2co",
  "key36": "WyYS8R19Wc7yNCDuBCnA3tfF5oY7TNFkAUqXgvB111g24JaLsdnUAcYLqG4EHyo1juUzp6T7bDyFm8qJS5RyHYR",
  "key37": "5MLfR4HFb5DTkyc6yHzNpcQ4FAPnhtRmoe4DAZKNhBzJ2U1LzhiCZMEheYLkENrcHzjFVKRzFwFSDfrEB4uDePJe",
  "key38": "3uftSP8s37P8CKb8pruLhcCDXqAeaRVwruquKy4ktmj8e2KqgqWAkJiEiLJTYJe3ez3fFqM62Qn45VWW2roS3Cmp",
  "key39": "58QRqbLddDxxYiHhEdbzWWKkCzrSMPFeUXk7afmb4SRJDGiDEvTw7MUbmoSt8udAw53LzDRWw7ijEVrxpeZ8NoXm",
  "key40": "4ZFKgUC75qe8fYYCbb11dhg8k4zYnvHVzfWJL9Qnwz2tatnGr2uUb3G1ZHEKhkaGcSD7QTBn9MmxmpL15zWFYvFs",
  "key41": "2fKovpY1GMMGetE94iFymt1KWhNvM2AMScPojvRHuiCuvRjcxVRk57r4E8S2mEQMWgZGMtPJQXUWiKTWZ1ACwwgs",
  "key42": "xYrMxMtjYcuury9F6UwWUE9bBectXr57gcMQ4DL6cZykSWNwdwtnn2Mg3MpgBJEJeuXJp5PMAy6xTEnUahnrAnm",
  "key43": "2rjaM4k84caSzcbHjcNfSEdPt7wQnWPTTxqxYgAshApgRhUaPQ8yxSVyZaDfSvkfZbiBt3QfnJtQwhoEAjXskMLP",
  "key44": "2ApGy93A5tc3iphn3uFU9gWZ54CpnT1Cja2uqLzapB2Ay6X8EtoxkMtd5zY26CtTc3AR8Wqn2uxxCRwH6bEdpuzx",
  "key45": "5BMBJwyrRs3uhJMsZPiAV8GdNYMNpt7S9CxNDDZDcj1NhUDFXBH9d94AtDYWUHvkypVocn8u7o61f6axtotNDLx5",
  "key46": "WiwXEYX8ADyGRHdqCDJxqrCXGUzHtucDnTDxPxDY8rekjDW6qTYwdX9mufQSqFzzYrx3RTW9f3Tows5PSpHxeJV",
  "key47": "3jJNvmopUvUNQ55XsnMmSShdVTTqhrwwzWGxDv6hX7gMyZ99xARi65xAiymwSEcEaWoBgLWfgGABTwbmBpJy9j4A",
  "key48": "3KAs7TMJxiTX118tC9avKV1Q23NjcqSkcXfQgAb6jaryJkAnfhdN2mvqoyEtCYhtAhUUdYMYgArwxzaZrw4Vj1Pi",
  "key49": "4N1hKgU55A2Xbv2ZjFsQ21sGn7FbGUZNb36Twc1ff64Aavgm1UDsnuTXxaxRqsFxgZmq7CTeHWd456RAXpJX1oN9"
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
