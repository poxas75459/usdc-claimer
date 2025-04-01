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
    "35C5zXfAYR6Uk8kQdqETY6qfiSBBYAb8bX1sBC9Y7LdRfFMQ6aHsdi8edbUt4hAxiEo8Jkzb3CHEeeANeTtVwjKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HWdCfPc3mbEmVuAWv3ePHxBGfWiw1KeY1GRTfk9E9QNsuabohbTTmmg9AxSVd6Ke7nhDEcFeiPQt2cYaU45Jsid",
  "key1": "z7aCiQZKkNdgpPfDLHUB95PcEVdV4XERgjtpr7tmg6L1CiUmzYb9opfcnzWGCQtiWp6iEd5LTHAwu7E7WG17biF",
  "key2": "4sPvVhh86zMUXtuGV7yAhJEvXQnPnssVCod61tRsoYLVALcwPJ9LDoLGr6ub6AL2VTsSLXWUeoyMEGCERUEC3qP5",
  "key3": "48n865PdeVK2U6vsv3dgwbVV6ZoqpyvBAae3YQFdE63QoaaAt6ihyi47YDfrr2XpT5NmiAsBbCntPUpuWK8ghoPf",
  "key4": "4cUGSybrvBPEX5tYkoFo7evUfTjmXReAWUdZ7BWRErj5nQupkkxmYbs9KgpynZitnNQ3NyPQ84EMSQ2CHptuVG61",
  "key5": "3jcq8jqWkgntuH8oEvCnz3NBKpbvbyDkDBzw9rkaammDbazLMUZM6u6kRmJ8rBYDgoK4E2rJciBigUddruN2k9sT",
  "key6": "52sF1pWGv1P8QojbTUVt3RstCxZsGEyDt9Rs78xsXopSPpqjaEp5zfFeukQxgzz4M4eWo9RGDX83Regfm8xd3KnJ",
  "key7": "277xBrFgjeFh7aKcjK1j4fYWVVqVLDG2ACeMASp6sU6wMzKLtYMFmoEH7XPSWc3rHYFknjtSh7aE9GqaPozvgXks",
  "key8": "3oXnh5sp64AEn2mb7FGnZuDruVPhBpEGkZMC46a32zvXz32rC1vTMQtVNx7vZkLwc1izV3dT9gawcXxvkU9XBbWz",
  "key9": "2UVeyGyuozNa7PwZoo1k2TVb1M2gMU76XiEp3wA4PVgZZaLZWDcGCY9gyf5ET7ja6jTrZ7AkCDeZhQNCYgWhx4j4",
  "key10": "DHwHmHQi8zbBCPCceDMUMzpjxHeGYVm8e5kss3aiK9c54pNDNpR3PwvjncqjKFekrZArvoRaN27SPDAoBhzrJot",
  "key11": "fAbXySeS2rAPrHUZYpjFqs8B6hTHZsxdWjCLrvtXA5M6XKh9vbMP3QAUbawif1dfwRYMrSGUfG1oDxoxmg5m45b",
  "key12": "4zu6davwZgFqypfJJ1JTm7PBdUJK7Z2oKMp172DJazpCzYRera3ogEiyM44AwmDhZvgq8saDQmDD3Lpi61uwjNuo",
  "key13": "ExdP6UUVqyNxFxBAaGiZXens5N2Bsc9ry4TypAYgfLNLNWiPEPsWWrq8QAwDTXMsRDUbXTAhoCdrHxqEzQq4zMH",
  "key14": "4M7Ev2Zt4EF9MYSMK2ufAtiSHkYLpfA9iJQuKVdDnCcxCiGMSZQDepgNR43nE8GAxPV7F5Jzx3oWCdLVDmrcswsq",
  "key15": "2cMU8vh2heEXLccX9jmvA2Cu36pkEAjebjiMqXHGsoEpvzaGrGBWcJLzq2D7QENBwKVC8QvzbiMUweG5bfBgUyV4",
  "key16": "5u5ck2ruetL9suH37PMvTA9ZwwRTiis5SjqvKskrD8SBHMiz7gKWSF6v3pMMuFwzLKj1jymj5r7xehL34Y12bEL6",
  "key17": "4SmxEHayZ2dSvyQDSYQk7ZRdnYYGonTCBNRSqcurg5sM1xfpPbPva8wZeaiEcS7gfRFHbosCDP4kkLpTrijDowqb",
  "key18": "3tzuuVTkVw15HHps8bY1vt5zzHjDuDgPoznvdcYjZHpQL2u8cD1i9dbdSJPqhmtCUYkpagShGw2TyteUwLU238P7",
  "key19": "4sNHJz3uRyQVCzcbgz2t4U8BnqWb8s9J1opDjPvY5q91c9UZf2XCga1LrcV3Y2Vuj5XBVKk2jCZvZVVcjL8BCfmQ",
  "key20": "4NSVifzBEhxXRRGkUm6uy6qkvJ9A6P2jhuwpB6BHgo7mr8NqfqmByAQnvdMMDqfxWqVGHJ5PjJTgWr7BLJYNCyyW",
  "key21": "J8mup2CQnGPo4v6AYAzgSk7PTXKBySGzqY6k645ojde39bgzSXteLfSauFHK9gdJ5uQk58ns9ACkGMWwaMunCJT",
  "key22": "41cDE21MwtAJeiCjm7EcBQy3nh1yMTZLoqTeMXGCQUCRjVw9j7Jyyou8pSp4WwGqLZCVmoyvEccJXjy2Lf4JQpYJ",
  "key23": "4G9mscGAn9RfCv44rYTnVjFa3pLat68XAqthHm5apfRTgXEnAGXu3cTVqwGUzjAEqknLiMendXzqh1BJZbeFuL3F",
  "key24": "3Gxzwx969iuB3Nsx7N5Ut1ZhUxMLxiUcur1E87FJGxpSZypJZaTBSTQNFsPFSB9S2hoRyfX8qqfw61FtNwGztKKn",
  "key25": "4DdnWRzA5qThaTzk8ug6ETf9gY7MnQRUhrYgScBp1ks83RFfukuVt37zJhhJJFssBgzQQQTPxdHHmGys6NDA7qP",
  "key26": "9k1MLSzR53XkNzWmGKMJFtzdk3gE8LUoMzgy9cYDFz78zBVHM1n8hRUNyu8nbht3jpMVhoMvchuWRA3dttbPrpm",
  "key27": "38MGKG2vL1HuW4UbQrGDUHCrrtXUhRUri1tNpNe4AKuzEFMqhnz13Y8ThffG3WNb8wrGZ99knj4Mq46QMXXk1bHz",
  "key28": "39tK29SJwLnTUJhcJJrPrwuQeurAjaDwaL9LYT7WmsDXZ578Xgn46ctcyyAf2xpqiQ2ZPLwG1CHV64LJbwW4rw29",
  "key29": "3LCN5cH1Ktucqw826ThSJdHiLoe7otUH2jy4T2tT9zAc49LDrCPpZz2KFgVguF77j6yisuJhiRujBno5JbEy9Pwm",
  "key30": "5rfUkpwd7unggLpJWqLDkhNeYHavMNRLFwpezZmLgdZKRrgxrtXYtgkiVZicepGXYapWBbyj869vpNe6WLmCp2wy",
  "key31": "VrYrrZp3DRp8RW8Wb8tr9YsU8vWE4xcXcKm2LzJCJcuN3mtWv7tkDijMQ3SaU1SQPixhUxuCu9MwGgQY2KgXtis",
  "key32": "5ofyriApCWLW1pGgZDcaD9udwCfQarQwZcShtsYdoiqpNvnp9Js6dirr8UDoekwW4Gsm6E7pM1YqZqSTfFY1Mhc6",
  "key33": "6FviEKL2Wujg4xHyfg6WBfDrL5RxVRdqoSU8iDHddLi8Xmo4mfD82TDsRnfeFPA6jfbyNzX6GUnkJesHDaMEKsD",
  "key34": "35AbcWEDqAXpVecUhFjyMgH3XJuC3nG9qcX3g27SQshSQ1v1sh7gZT2hCvffjGXiYv6iV2zGfEdgfyKXEsqSzxDb",
  "key35": "2GhZ4CQSowgEwTGgvRxNAi5xz9m3nixLXhFQZYJtCcXgiCibrcynHrimQKVnzQZhM7uEm4X7vmEiGxXrpGGL96FC",
  "key36": "5LjmnJ1PeDcr4DN7kVex9n69QjPCBEVc3bdiKjeXjY4HkDc5VANuhKUsFzndrzKCx8E3BZWujWCZXhDGbiiLmi8A",
  "key37": "52Suy5mn4tMSYEDfSyZEWMDYdd5nnUB1ESBD3rmbvdjNJLrR8sxXmEwG14YHnJ8dKGBaHoWsaoM4veLFiVJ1AXfr",
  "key38": "5CqPduCdKSQzvuWY4W77L2buLGybKYumA5dnb4HY2VpELo2dxHAp1vmpYYviEHdd5iQjiKokyPqmQnyXqVmqbCvF",
  "key39": "5CAtKubHN2xejbpZm4jXH5LcmNyUC6wYiDyPLvBBPGdsFj8VYrtxTiS4dRdv7NyRDpwUkBk6znnfxJrNWz75TqEc",
  "key40": "2hiQLgYaaKNYUWnPMwXdbMPkpyT8EDYen69pXfXeNXUC3Y22RvqT9YmY5HYGAwrJEGi7LY9wavBWwgRTXsRt4Mz8",
  "key41": "5Mrnrpk1fTKUcrx3K19rUYxrzbvYjiGnXuKnMQgAvnhEzZCMdHNbT1keu4fRXZxzGcr3ZfAMsCccRwSGVjTbqXW6",
  "key42": "Ceo6htM8p35eiUSAGFaC5cKEmvvmkCKVSdRnJV4rHKJpNEWn191SHTomSAK6LBvBcRd1rNWCQqh98oC5DWVxK86",
  "key43": "5tgeaYD1sueo6nFgHKjL5weipcc5NJmSVLjbpwdK3YNxcs6xRoYzudMu1QqUgXxxbHcTVckarvqxzwfB4QxBvZZM",
  "key44": "4B47dHvGH4KLzW39MvVMMqV1Asz2DGmpPDaw5x3uU82tw57cPpjhcG7TTb7hoBJXNm6kxPRmA45wWzCWSvMUFD9Z",
  "key45": "5tmu1eXpjex59Up8agnTcRzDMpNXmnEngwgEk4mTr6FT6kGTkoSwZF7SCXDRJHqxDgqvsEvxaPr4JR6bWBR9TMZR",
  "key46": "5nH6rWWDYXtGiMrgcwKoxcAHYHA1JN6JD79nh5NKzYjCJkR3xYTzK5CDK8FTjWdMMavoUBgwpHpDe4s3cTikkex9",
  "key47": "4sX9iQKCViyR2Pm3dSbFrYdFtUULiuCRVvhMRcd1G6empWpiiAeQceJzYMEVRZioyvXYrgKZn1XfqRdhcmPNAmsW"
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
