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
    "5wrtgGE86fCsczjN9nYLBPSFxq3gSFHeQRzKpo1aD4bEekj8y2BRQgh9VWgTcpMyhse7baUATcXNzKAidtUjMuZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YngWWrZLX9fwTnvNZYziFxyFvND4eF99sHqNBKcwaWc6R3DMsGqimb8ppyUQ6nkB6hqRRsyvg1VVZnXBsvhEgjU",
  "key1": "hq9uDytpB9E6MUvuxsPkQ7cYEkrHjRHwDGmQnU3deAeVZXtPquxidfoQHSUshj8qP9iDC2EHKhCNMsePtutV1za",
  "key2": "3tch2bpYsMaD92XZy3QkPMtpV5ZWSHN8AWVe96QN47iUFauyq2XVcmL3pcDKvaPEFFGR6nKn89cW323N9RRqp37",
  "key3": "5HV6vRVBeBgFTkKpXEKMXAzi2muSVzD6gGjvkn3hzDkooMD4BNppe63vTzD2vqou1HZcxLLdXQECUgeyuUycuMji",
  "key4": "2MdEGtbWGUXxktfPg3QcNArUVt6SKp1GF6bkiCszN4spWFJvEiMqHnBV94RUaJFfSe1NvDamPN3Ks2EqiYGWkdhM",
  "key5": "4JuKLdQXyw35cpFCNnZpdfw9EGrXYRfA7Qxn75NosC48SFbBrxv9JZ4PAEEoMgzCQucY6Z7DJyBdAy3UbNnBG8qq",
  "key6": "3roCwBEUBBi6EKQQsPFFdKzJbTPX6YKC47cDpXDoixjyLFq7KwyczQyFAHVNWQaBu4Qs6J6wUpyRmA78nw65qeRQ",
  "key7": "5B7Zwf4bQDWXGMufeuiW2cCYrw2a5Kyt1vog9NBAPevzfAMFnanNsYW92JF9676EG66C8AtmP2JUkdsLFd8hrewQ",
  "key8": "bsMxbKyjApKGVg8w93xGzEPYoyh3Tm9oCkg8GaW5qaB7WDyq1BFzTQ9TG2zLLKFibscBmMgSY1qBnUhww8GkxjS",
  "key9": "2DfybowPK9Bj95kgGXeujJK9kssTHcYRGnEvnMvKVEr3YEFuNFuwRs2a7JnHp7mhuFjcXQEvkh8N8LWnJZWSvpDz",
  "key10": "3oTa84RCrsVKV1xMVKtbsiEAfLWFUAs6r9vkDqMyJJdt7ZHcpZtuM7xRnxqAvHjBeM5FrfB294QVhTt94vmdXDXG",
  "key11": "2hMkmLTvXSZECnjbY15fqFf6D6TFkNwkyB13Ndt65PZPdqKm8Goa1TnFfS911fSeWJ58AzRoMrdmYhRFMRXUfmaC",
  "key12": "5M1H8u3QgJhSeym12YjZ5VBGfU1NiP8bAs3ucVgcZDKXqJBDtYESwoZCUEnNAVMPz1tsB66AfbkMFBQPvEDGLKXc",
  "key13": "3L8SShn6hnk1MU2FZ3Eh2CntBjyDdhHKC8zhqbssDeWotwLSesijEXRJtXdXGWeKuG5Ze87vbBzpp22w9QDBH3Nz",
  "key14": "3EkCFxrmd7A9RTEP69Wz42py44NcnoYX4k4qnfoujLJr6vVXaU9fHEGdzempocqecBC51pxD2D5jdpwcPNFuWipE",
  "key15": "635Su6vLbTQAmjHuDHWPQsfFUoXhvpVWq8PUdZvr9qBEJVWhWCDbudvJvARLvB2qd3rsFXL3BTTHCZi8qaC3MN2d",
  "key16": "4aZLRK8DqGkJ6FvzsGiLagqKVSCZA5VMyiEz7jj2SkvK6piaj9spc4LdqnezY7HfdPgyLzFy4y6Y4jVmfwsZZbk4",
  "key17": "4ZAT3Vgrd8rVYVCJDdfANFiTvtKcbdzUQbkoYBJEd4sPw8hcUGekCdGscLJPBv8PNbAaManykjqFUAM15akUzUfb",
  "key18": "MYkG4x4MoXFWArCXBH2w9rpLWrTmf3UQ8s3YyGMvabwAyRSdwFUZMZNgxFvjaEtNEwLS6Ja2jUFzE3rjJEDWA8u",
  "key19": "4KyM2i4AA4yBsJtWdPw3bWH73WaKsXmTso2GoAFxk9DYa5ccUtek27vYGDfM8Mtm6ykKi863hJk6etTw14TGceAA",
  "key20": "56XVqUd2d4xfX6kYss4zvbq2HUD9gPDVdedoaSCXgyeELZ6UuXxaumh3DEYzvRBjdvUJpAWEsjDFHG2MkbEJrFAP",
  "key21": "hsSyMUbUNJ5jk6GokNS4UFXD9kY7p3mFRRUgf9jKjDf137AvgTPQK6DMvCDJXYd5YfEfXDqLKpgBTU67cGvJN98",
  "key22": "42Kenkz95Zy333Jx2SQk5cCtNNHMDgacJj2rp2yhHTFLNBsFaAp4vd3Ly9PTR5GLGxBeNDMuRjQ9yL73MLgTifNK",
  "key23": "3Qfrm2aPrJfLxHR6NodeKFQejjrASW6AnXQguMjoH6CTwnYCdsnohrSEStNTfzvFXHrZURQ5Zezv3tNfJQr75d48",
  "key24": "sSBEYZ7MCtuacEseegELQQCZJJcPpRAkMNQfcwEVRmDnayXhcYju67F5wfUPju8FU4tDmZFgcGs6nzdwj7WK43c",
  "key25": "3tgE4E7iSdHrPYTMhRm6Bet4ah8TNGBq3VcrM3ZmzviQzVKghR18HCs8CsaorRLb6zWCfbqmxnSpw8g2owprGt85",
  "key26": "2nnoGYNLhFPZBVMHysC6bk3YNA7P39WrBMp7b9Tx2qFNmBLwyiEjhX67pCjRE4b84pegSmPac8Kb26jW9Vc6ySj3",
  "key27": "C95DY1VD4idFSHqrZyh5DWNz8GKiQr27mnB6tqd8U8JDhVAFzWerN4NKawEQwsrZUE1L4SSQLqY5QSc8R11VxuU",
  "key28": "3x9pqTWvcUUWN13VKfdzq4PCQ2HsJiw1fLuYL6dH4zeBG8hm53PQ5Q74Xi1rq4dV6ADEescLvuRUMqrQicoG3Jep",
  "key29": "CETHx86XCQHypTxhjVjM2F2rmLMQEg23uHcHApjJGank8GPz7QsqZ5HV87WYjfBZrp6TmaBT5J3SE93qvi95i9d",
  "key30": "3DUe2FNRuygfDTsX7JXPfi79PiByS4xq4VLpexEmV99fdK2gVVgVp3nVJEbXDKxnoBArC3g1KacvRm15Xc7fHcws",
  "key31": "2k7F8pEZRNmsVhjCVHNZhWHKcPqjNFQBCR21fW3D6vdEzDJCMG6NuC1hKDbzjYNWnGmXRpJR8aoSxKbhMZ7nGoDT",
  "key32": "2MNcsGGYFMZPFAbHpb4pfcB3k5tqJHWa6RRzGC2YQNRi51SnpNVZwPZLhjEjSpxZoNWVhqr9oN58o5LK7ToX8Bc2",
  "key33": "3cFL5r4GbphanTL2tMfxa6VXLG7iZoVRa2L1ykDFPjSrfkAsZKV4Cw63HaV9LHFxcwX8NfKNPUhGvs7RpZM32sa2",
  "key34": "2ZUmA9A8ExfUE5nfQpcWNbK3sa7gw69K3tpHizqLMHbyuwMvgp4mA2aBv1j3enUGM4FDRm1ezDRY1U32rs6BW8o2",
  "key35": "2mwQ5hgQddFCqiiGcDR47mH7utnh7KoYarJVi6w76ZQ2MsNMiFDzhZbRkk6VsafJtZDzdio4U12Lqbcrz7jo4RyV",
  "key36": "gEUgxe7Xm2LrFgHFredTAkMAUoFuAMcybU839F3jPSCmWPCscDLupPC9X2vaLeXU7Qz7H7UcitS1kuHYjZeM75q",
  "key37": "VeiZWdkxtaPxM2S4TMMP1r1Pg3ceQ65RrjPGHwe77ktz9K3BCW6kpuYt3HBovQEwxy7btzFfiRmaWksTjgXKpUS",
  "key38": "wMtaqrbqVepbB3PYHRbi7MapvdurWcbBSckm6XPoZiogEYCwxdWd6CJ4tKJdhxTtb1aNPkE16rNNzo3SiPQ8sW5",
  "key39": "3jXzXsxsHFXiHBLsk4wsCy2M1u7utk89dCHhoYmpFDduqoNuP3iyRQAmb7xNrjQ5iVpPPXt6fFsKt5ZasH6VubGS",
  "key40": "3GmjmWAQNX56NhuuWzRG9zVUePfK3vaHUazCzWh66NxUePgYiXnyCgwFGhCMzx3h5mGPKctKEN9tS132n9dqj319",
  "key41": "2mYGwJLM24D8qToezVmoB3ntn6gmQSeMU4DWFYs2gvuRpUxmP2YyL8FY7zfZVNhX1HEhxWwcxrfdXe4ePAXQv1Gw",
  "key42": "4GMi97cJJxr6xX1RGCpVkDJmYSaotZW3Bik2dQdZnzkeit6QXFHMn71o3cv1wtcvMW1reVoiKoSDGiWLCMMRBzAr",
  "key43": "2yLotEEPMXxXUKB4jhrkU3bPxWuDdJabrgKWkmnF6F2eUCYw9xnXFDXxPpjxfVAFZaMTEzajQoTboizzsTBYDv3K"
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
