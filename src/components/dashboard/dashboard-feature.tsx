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
    "4cPUgrHXGYMxTZbEAu1PtnX7TBn6zwaMob4HLaHc3Bbm8miEjN1LubMGgrUnQELJ5P7Lb4N7YzGPDvgZhiZRur53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZrcRWeUWNd16jWCqHjmTChNMKUkArqK1ex5E828VxMkmEpAhPRWycxaZ41cNrff77Cvp89srcXYFdhUYKrfa1Hj",
  "key1": "5anFF4nPfyujbNgAb6sP9XVoqNePHc4i75VTgDxKM6p531hDV5239KXpurL5duPHdYWg8mGSryYv2ZjsPJakPbBW",
  "key2": "7rGuEJjf6zb8yGdBJgPCnLMH68WioYJESnzQNqSSkax6piKEYWKT9CEZM1KKuGL8YeGenLWRjuCv1Ake1cACpq3",
  "key3": "4P6YuRi2bDnRen2brrR9gq2g3Eqd62t3u19YwA4kejEkwaKYNwxHF8fuDjFTGgMKvWRh23rRjoiAHJuT79HBij6M",
  "key4": "2DTas7L4yqHpDn28WFoGZi8Fj9GuCDwuXA1q1jM4DUUk8dStMd8fdZ18fsV7H5StdmhRSsXhUDtr4FFgWPqwqV6Y",
  "key5": "xbXvBz5TaPjsGxtWZhpcekQNpCBKRY4AZVJ5oTkuYEWp2299KwKqCrUj9uDCze22ccoNnp4dSyM7GsqbzPpVcnd",
  "key6": "4PfxBN6MCQnEsWnTxahMCXw6EunyvUNRWeEuHJnr7hU6JEPTKaKWLK4dXoewkcPXsifXo5m4FfgKPSNr9uUa7KAP",
  "key7": "YVSeobuhZDtUVc8ZCq1WDPgW8str9eqgmze6NK9S2s1PbhRG8YFVFBQNjJEdNrHAsJSG7YFBDakNVEctswwJHtQ",
  "key8": "GiVpdzHWayxehSpyquPG3YRe1vAhkVGd1Rqv5ggp4RXik6HVLbqLhMrsQQrFZk8kDCZBA7nFwEki5j9oY4YgmLq",
  "key9": "3JWbnoq3KVXNAKZsueQRQ1LFbErbiQTTpsYALUKU1Lppgs6kkNgz1sZSjbSfp9RP27bU7FeG3pii3hUmEqVzp4tL",
  "key10": "3DGpHrwPFr7WoaKvMKGBncN8EYtk1Zy3dE2tWzfDaXLQj2dAsFWGKMcGiUdJNWJZhgzA98a6C63ELAvD1Hoxaevq",
  "key11": "3sP2Zpyopt38BmkkM6mo8mPonNDTnsiBR7fichfDXuAtawyWDSV3t9Gwk6byTYNXBqGtguGMbvyCLRqfY9wBWa8T",
  "key12": "2VXVBX4TRCUeFDbEGjgApm9p6uXKVeMh5sRXRpArHr6QATgxyx3CYa3gD5UwjFX4uersJHs1mYyzQzyENLeyxH21",
  "key13": "5dvykZRCmmvP3AFt8AQmb28TXK44GUdUXfRmK2XWL8MipfE49JG8ahsdXHfBP3Pjj4kgRH2PkxrSYMnB85Kitaj9",
  "key14": "4dH2hq7h3CPwTkCi6FusWpQQBzRGZC2peBsjbkQkRfaxPhiU94VHHvEfFf6uWfydLcFUjYpUk4YYqsFj6TBVDjeS",
  "key15": "35ALzt5dThQF7dPiVAbXKire7ukgorx2KgUNwuW3MiBUAx435TF58jmoZtLNqCY4D5PNWdQFYwGV6vGcKSScv84g",
  "key16": "3oYYBiqpBtmXLUT8np4mp8SJS1cm2k957mRkaXpJ2XGkvioaFDrzyi1qYkzCqdwWZzrLVe36TMoxcUesrXdU2PJV",
  "key17": "4Nm2dTX2ZexrMuy32shbCYAx7xeZ6NvLaAQAAPFXmykdxJD59rcF1JxZ8Yue7arr1JbAKBudvj3XcpF7cYGCeADc",
  "key18": "2bixCt1ndJHibkWMrny1CfwjBrS3nTxz8UJgvuXfxewpAGG8MnGFVVEbeAGFwNv2awR8xfMiKdrc18fHBF6VYoCc",
  "key19": "3bNbcha71VhXVP4sdpMxSH95Dc5XsYuEmVDZKwxv9fXGqBkmWZm9mC4f7FPFhPUrXGCctxSkC8wtLpm7meN9vHDF",
  "key20": "awCCsXyfvinuYM4tEN5aphHHuigGcZuuct1ZYzYNkngp2TT8kszLZdAckFAHZsqCALNx1to4XqFaRqTW5onM1wm",
  "key21": "5hs1vd2r9bVJ6PkreDSJwenMk9ewayvBpiaHrp1EaqT5Ka51Z3cvyQhK1qwRnbjyqSFKpdgpC4egnAtfFUmQ7rrd",
  "key22": "44uav576DgeMe2YUec2NDdENKH8i6GCzUB4JgsN28vFgNt4jNmbUMGgjHvo3v5VVKh9bh1JV6xoAaCgxzAcpr6H4",
  "key23": "5kDvd5Kw2W6wcqKMSquoTJX4cBTN2Fb1YixcZWRwMRjJejEaFCN7h6BdQDtBNZ4RwPi383qK7LRJ8QUyjP7QEsRU",
  "key24": "mrJ41KQY18m4rS729Bue2MaEkDTec5iv1iBEDqd7GAhPo3MffQ1cjEf33y2kUNxUoKWqWyc7kz2ZbJ6zzxM94N7",
  "key25": "4pgAGyYr62ShrwbgnXeULMobJv1yivkTqiSMBjVuSXDhuRWyuZq3xVJGXmax2U24tVCkMKThvN8HfDi8Vqv59qa",
  "key26": "4jHZQ69EyTJ6g5YkJbXaCZw3Cijg9dxmPtakRk6bLtFmAP2HcTSADZL18q1SeTRt3KhqAY8RW2ENKi7xJe84Ey9w",
  "key27": "3dSHnxKoTeZ72scCc6a6ubkM3c4dgSYR5YVkwHr3f7bffkiFExjzTepxTKcfBk75n7hZ8Cub2KRRAbkhkeNiPPKM",
  "key28": "3xHK8YBtCaL2FkvgTcRTG6Uq6tUvQFodwWiLxLGnc8KkiY2ts4C3ZfATN3gxuaxju58RS27675gut5YJiKbWD9Z2"
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
