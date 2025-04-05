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
    "3h7G2hNp68LimAiFqzqR67pzKa9PAfq9dLjsEyz7Qk3rDrB79FkPB9LKaVWEeXCck4roSUgQcBhnnPWWaYjYfU2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UqA6PVX9v6iz1AU1ogmUn7dj6XxS17F3kHS3ZKSsQDYfoNp7YjP4oFuQuXt8hdcggC1a5k6AJ65E3f7kT74sCMA",
  "key1": "664x8JC3WNb75LsVkinEuqkd8y8o5fi28TritcbTF5xg7rskm8WjmuUrbKexgWXHoQK5tD2fXUYsa3y85YT7V4dN",
  "key2": "2DgdXp3s43e1eQfneDrnP3D5FYahkqNHjqLoGdcNaQ7b1o97M3jtVYJ8iRkCmyoBaMPu5pTp46sSJjQZfv53jALE",
  "key3": "5V5pmxVeuReHbjVsdHqWPPs41oZZAxLcTHbtYFjg1FByas5FvgaP2no6e3aLP9oin6W2HPYFeV1XoDuCQW4QHAh7",
  "key4": "4oiZhGLm4pj6dTVZnxix3myipEqeKUHxhNoDPn5mje8RndBUqXYFiYsR6cDP9YCLgTFThymvMgtwTFGPz998Vb22",
  "key5": "5mKapALA8L15JetxeBXVzPtKdN2zvng5iyK8rpk3LbmJnzeJvk1bsKPPQeSyXJRk1QTZHiYThJjgwxZteMpsfSeY",
  "key6": "5K2sbiZQNJ2SMDTNX7nk4bJ4FRgNLmRuMbdsNKn9P3BuRd7BvhTRJFZ4y9H2M9uZMp5XSsMCURTVB85WbsPzPinK",
  "key7": "4nZznvzyscBeYT3EtSJywWnzXnkRZiT1gXH2JwtKxt5uVGmSzxzyzg2neKheZSG4HPmYdMSTebXuksrxpcBs5ren",
  "key8": "NjDNXFLSU1kucwqyocYWXxEpXVocoVbacrq9hvV8cJbQw8NDbcHeS4tS9ytEoVKQeW9EeKYdLwGFUYybBtKKXLL",
  "key9": "2mmLPGjDEG314weg1sxBm97vk8GxWVxt7uHRW8Y9XyGYiKzHGb4ZWEwGD116bSr1SKCt99fHihr9vjXPrS2UDpvF",
  "key10": "ojqKVvDhZ1pqDYLs3NNuE5uTFD7uFuEs9F9BTMRaQXrty52M2xr6QBqsAMk9KSssyoGtbG5UbuNFhyDNFEwstuq",
  "key11": "5wUH3nTEtWkBD5aMWgyjhou8UGesUDai7crC7LVhnd6yerYwJVyT942sC668HMTXLna4YFfH9UQM5JN9ReXdR7eH",
  "key12": "cBiHphNAEmHtJdc1FUwKmvQTSNv3tA8i9a2xLweakGVbwnjnBhe59TxuuQxob3pBcUdGTU68oz2Fsbp4WFtcJJK",
  "key13": "2ps84BCHqpCJ9LHS9UxegA6yP9SYnpTts4LJxZ9JsdMEwPK6JKB3ZxMJ75PbqSFCqPm1Muyuz3t2ktpFyijRQSua",
  "key14": "53pDs5Xe1EpYfUMo1f9LBvQNkvs7FFytBPEq4FYsYoKUmHpbbmiT4S4NUrbc138Hox2WFrRj5ukf4U8LTGHGcPAz",
  "key15": "3HpYLz3S6mtGwBZ1AK8MrFZRxYGtfPevvkaxkTe7aPpeoovJEsXd25ar2vFpnNyoLQW4uuG1qwAqaR9cYRyufAQu",
  "key16": "3DGo3AggyLeyFoefnAkJXBLhPSvntjXaZNLBWKXUp5pJmGrQRJZz4JA83dd3LjwjS6Wyw4NzReKtBRZebtucaVWR",
  "key17": "2bEQbSpH9FcEuqCQc5mpUzfZb5KT9Mi3nsacTmKxDdF9Qm82mattARzHGAVH15Kprnxvd9DFA136hfv5bsJ8pWhx",
  "key18": "E3BFfLpHdkiej8X3dGQEDqwsKbAMSDX2kmMqfGeoAFQxM2PiAMJTSXU2NCZ1S2KuVKJ5B8aGB18ty96tTeD6QCv",
  "key19": "3McsdS1sj9GR9nDnvHy2bAZs7HNjrZe9qDuN2Fb9ycWb6kuyqRYXN9JsFBkW5r7EdnoRWi1jzVYUef8E8E6oozyB",
  "key20": "5tYapD7aixgjNTHFKKANuPkyJoi6tXBiuDUfrjVuB11pLSJPwPpAGCV91bhCeNZ6RjPRQTueyy51CqrbWzdekb3T",
  "key21": "3qjRseWPHgWzYv5yLaqg9daZ1AKUZ8c47vkYS8b3k8Gw1899thJp37Av8drGy7g5b4PTBHMy2tSa6pEEvXT6MtKn",
  "key22": "2rtxJvwSC85qeTjeDjpDa7eNhLgT1JhRDnLGt1wHGWSqqepNyQsepXLrsHQV6tBCH8bAodtbs9p1DJSKLAzSMBgQ",
  "key23": "3KfEaKsnfJyjh928Y7AnoXWh2RYRcmUc9AaRFtchsdxPh5JofoDUEUJq1KabM1zx5zz7p8W6XGYsDbRhs3rBmMui",
  "key24": "3gbjcW9Hz7oESjz24GFeNHAQFe1nNEvNZZJwfR6hP3zMnYYA1xdLjEbRPknVSVdjgpD3whQhQqxQ8e775MCzByPh",
  "key25": "WgipEdMwnLVgAtH27iJTcEYH9yRPGJpn6sSJvcM4ZZiKScQ6iRwpedNVBFRVnJY77j2kbauu7pmWWESbZp8cmnC",
  "key26": "3en5L7ro82L3XJLEsb7ADkjYWwZ7EMYxtEAscpy6njsayM88eWUXPraHDQ5tMPvKgD5dyApqD8NrhDg73AmeYocj",
  "key27": "3Th6JqXj7FuorfpbNLGHKeMEf8p5ixhzngd2NruhA2GKMuKKC2ECvUyzUYnK5TzE3BGAMFqLvZmuVLiSkAx4qAWi",
  "key28": "o7Lh68fxHfCCDbFqdUTZ5gqKFGWKusaksUnSKsCQGTb6pkFJfbJALzzSG1ee1VCL9urLPXKH2qu64kGRbbGRNcc",
  "key29": "3g6EcWM2fUe6LPeRw1jeprXCsoSbbZvFJ2jXMZZeFCShDGni341pND9HwL8LKErSDnr7tCXGm6BoepPSesK8V2kF",
  "key30": "2DnjVCTfkt8vcq28WhxuvjMMkD49FLE5RmToS29WpKFvBCdrNG7rZJZ3eLDxQgFhHATS1WpNUHBgRWyAxXpFpjE2",
  "key31": "66PJCCn7q9BKcraHcdnVhgWUzgHcuXKynwtFQngLRNvHFYkkiGdxcsFarHHahUpuEv2fNguyz4TFmc9m4o7Msx1b",
  "key32": "3GQUorTZi5L644nV85s1ysk7vuYC4bK9vBd34XC1Mksv91wKD5iQS8PN7JYS2STiqsWzeaRHFdsr45jEM8XzpnQ9",
  "key33": "3f1bCcf1iVxHRWFt25V9XepC6SNtbrFEpt2arXubYm3pPJvtB5ZXUswfoLdQ9VhZFiWapUkv8b5zSTsoLuYVaGQy",
  "key34": "4v77kPjPqE8VyPDw3s66zJKJc369ZNKVAdVwG4CkW2grwmwhPMuFpSokP248sgZkHEgMtvVf5cJzWk77cQw8y5pz",
  "key35": "2gvEfsSYUuyNt4N3kvBeNrKfP6rGSndxTKaR7xajP9gRLRcPe5f8q14ewF5k5L1jePhWkS3KmwVALAfqoPxkWCkg",
  "key36": "4wTXvM5xi6NvHfX1GxQznUVYmUZ8mhCqsNmmGr6ZKYp1eiX654m13EEQebhae4iBb1VTBhuSxVxA5gy7Nrb9q3Nx",
  "key37": "2kJbhZZf1akmaDAUthM2gUj32BucXDZizg6TvgWGg83gy6njSPeKjb1HfyF2ELpB3veeS4cSs8feEhNTLA1fMCrj",
  "key38": "oeHRGQhGMBqfjmnivZ9iWeHmH3Xud25XN1JYGm1yuNqmyKqxVHsTegT4FiFjpN5jUf472YsNQcXLace2gxYc2jV",
  "key39": "pEHMdrUk6tNJPmx6F1xKyETvwksx91ZoindVzfR1Ga6pFkDsDHB7yXGR2TK7k9AoPyHscARBAYsxLZZySnTYeSK",
  "key40": "3MgVyWaXbEHPtuDVaF113ytRgLjLcus165RLShzeMVdtmXABR1gcefgxc1QLbe3EjqVBREBL4HUqtn4rTYXEP9YU",
  "key41": "4zXR4cJrxUhJwHWhmTKBiNTVz3eZwwyVkkW5bitbyY3NVDaB6ADvcbvkon2sZE6yGR5Xi1fkvctxVLSfcuDo13zc",
  "key42": "4CM2BMrvdmB54YL3pv9VRDekYkvb3jF6BoDrN9eiV2DitEQ6HyzEfejUHqsW55mbXvhhzP9ZES41od3cuBCYrutW",
  "key43": "2ZNTbPPkxyjUHQfqTBQ3qvq9FnVGTBha8c6faoTmiEs18uBD9cdzg1oi91bkbrpgSKfLvJiwi9VDUcD8FpBFr6zw",
  "key44": "2sp285k44VsaAymT6KekmSw3ZzpbYkKtwKEXrnUwrWGBzKuNEyzKRg3LHHsUcPCkUJyK8XWdZaa5yyrQaYmhFjBa",
  "key45": "2K2Xomujy4tLRffzuFuAoNLdUJeQAUEiUQvD4iFxW1BkWWSSJ9TbbWUrDvocqspeXqqU6qVr75HnbFn5HVCt7xwL"
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
