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
    "3HkmmSa3Mo16fDqJEAbY64VNTjr6ekTtmPpguM2PZHWpJCFvME722CM44GU4G5wLEs2eXQWno6wucNU2ga3psEPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42P6R47urPh3qSDjSqeT74Vp7sTCPPZGD4KBSdtPvNQwptvUPfoMSuETVhWDdbJK65S9fFBr4qb4VPt4GdDcRVdy",
  "key1": "hGVhU49t4HMZp4Vk7J7rZSQtMCBbD2wgRwwssLLePk4oDvq5334HrNm32ukWN5jUpPKMuhTr236LAyN84J9JYSY",
  "key2": "2bkW5SigrMy53G3tWudF3Ah8dsirbtE7FdwdYkpK8FPzS92WR5FWgCZjuC7jXg7bYPzBNETz3bLnAPjWFyqcdMLA",
  "key3": "4CRRAhzQPZEaxp9QgjLShiZwcyxSQz4YMew2JzHFKeo1yvvn2FqZCFUbrkScUhSA9esCzBT4Gy4b1xrpeADtjUbv",
  "key4": "5K555qikBZR17VeQ7UKpBcaSLPEvq8jWMbX4vEHX4XkvU7JKUcY5mjQK8f452jh6gtZ1gmX2qDatM6cUnthmxmJw",
  "key5": "5xQTRAjx3mirh5zExXuWhNfWGb6LkZqWoRdMRqEb2umYbCVDujwWDGLhBca1Liz2kTB24x75UWyQjjpXkudnNzwC",
  "key6": "475uXz9snCaLutx9ypeKA3YhGF3yDPryxxY3Pxy4UARhejsCNsuhMGVcZsdqr1QhheSSsfTKkciMETrRcYRnteY1",
  "key7": "365UZQejWY5HzKNc95BHYna1gK69jC3jXJ2tXT1t9VuC5yqWZ5XHSkE44sbHVqw6sb2JZXfzoXGknYbqW4ijw16K",
  "key8": "pqDTGku3ZKXNypudfBYypPCD7VjAxvCVLjZRVDHqnS6tbATzf5A7C2C9kimQ2NBCTUnMVNpHJo9Z9Ws1WsNfL7b",
  "key9": "1J95k5fNqdGFrV2ZK2pM41QsE89ufR23NquWnCpV3K5sKVGd95VjqgYSsErtdKXLSHb1Asy6jeXZFFSJRVfXWhK",
  "key10": "5nZXxa8KQD7mdoJPLz7kRSKbgJspHP6T3M4wqUGpGxXhGxGoyXG393jzsjnGPH3GFsd42qcz9EwCLiaDcHaer8SB",
  "key11": "2AbJ3akzNqfhVpAxAkTiW4vZiqfwVexRqpN6GKKyHE8aNSpEa6nRH7A14KLARoUyyyr394my1PiHUTmRN9xLoojh",
  "key12": "4aJ62cqu6kDq6hq1GMAE1x8HxvwqSnpAtscRwbttFb4Fea3LvV483rZWayu3bXa7EDA8ikvSLTHyGVKZ6fofyaDt",
  "key13": "5z9cgwkPwts6yngW2fmySzrQGHtC4QonjnD8c5xgHiSfjJUkYDXFm92gis69KAN5Mih3fggfsPHA6aAwd4Zzdik3",
  "key14": "2n77EEJGp5Vmaez6H6PQumRyrkg7bi4ZzAj99cSVb1h4SSqjJwCdXHNUFzwfcaBWh2byuN2MS84D9znkn8DxycSA",
  "key15": "4d7jaxQ7jh4A8ZuP29k6VxRbGH2DZ398p1HeqEx3epeHKiVvKbA4VoLZkBuqdXXdu8RcgB4S2EEDVyuvkXX53St5",
  "key16": "35sS9Trp64EUax9RyuH8wbSoX7oNSngae2eQfHY5ZKy9PHrHHyQRYpB9mvSiK6kEbiNdtFPPmeHiUPv8pbt1Bs5W",
  "key17": "4xKpeZBWZtbzfWM3ru86RmzeBn5GDZ2z6S2LKKZEQH5BNbyg4e7k7buQa8f8Xzjd25cem8FuAwcf4PsKxPyjHH2f",
  "key18": "4EQf3SfsREjRiEzRGxg4xpwB1Q5ZdNugkXH1CuFZaKnL9TcdnC8JDq1y45ineccGr19gEL9WqugqMkGnYieYCkMn",
  "key19": "5EQwLHekP76aTqaXfSxftaiYviKvuD2FuEijySGj9Zdwf6rKeCsqBca1PQojfoz2XUZ72xEtEWGTSaYKkKKqbGp4",
  "key20": "4iegVkh4nZZzVJrKpnpJkALEy41tGq7TeSmCYpPUEBXCpZEnkQtzQE5odH5md6dy7YfKguiGo1fizqM1DxVmuH5T",
  "key21": "wZGuznF6P7fA5rvdq4ZVxP7QFet7u3a7gUnsBjHCiy2Cg9W8ieCoCaNPyQTKU2g7N5TGM7YKy1YsCaXtcxPXTi9",
  "key22": "2XVa4P5gzbsr7SvHnpDTYj2QSeXvqRbi6aTo9Fj7PLUy4iXLxpDYzy8VaksTa1mNWdh1xkPLCjVYCqo6Nf1DnVfR",
  "key23": "2YKQpVFXsnmC9pQYdhojEBWxdUaA5Sru7dZ7uA5h2HfDjqBYr7pAnKuGeGSc4sYnBXuEmQUemfmk4umjpYkAuJWd",
  "key24": "3GxcUCTZ5wDaRkJ9tCVMTPV4kgv6k9xT8AkidHVMnAq9MmFbFeiuRxS8z5qgB4JP9iucGiJFtVBab8vJRcMBReUk",
  "key25": "5mDFeGdS3EwnAczhzvgHQ4JbMWdNmkQKnLgfKG6aQPpcH57RpFBQQjudagBx3PTeYk7rnK882dbDimGSPBLZvzmu",
  "key26": "2WS286FD4LRw3cA7z4TJ6tWBdTMejhKy5Tc2zGwMbnzjKLa5ZyeS8w4zJ6krif2edSN9Wb8RxQbVathZR6eTHunM",
  "key27": "47uyYMdSagq6NnELt4rrCPXpJXRYTwYpa7uExNzZuFWfWkCPuXpEszvxgZwpQmBxtRxyiE51HZXfGZW75FfDMwj5",
  "key28": "3jRjWCVJCFnZsuaFbS9UNnhS36QEgYzmYAqs8pzmZvkBZ1zgWd3hcLSf6Necemj2QSL4gUjLb6gtWWt6YVD9DGWV",
  "key29": "2cAFMP4L1a7EodEUvBR7n1t4XFDKYdzwCXac8zqFUt3FyLoW6rYxJCvKxJc5sUrZW33EV77y47fJ7HWSZhJ9cmfs",
  "key30": "52Pktdt3U7xsdGaQBUDEAL9nRV2dy8peUtqwSRk2bCiXhZM9QxXigXaCbE62AmG535tBhA3gYh7khjnLRs8pM3iw",
  "key31": "5kcjCoWg2mhqWc555T41shYuQrFtWbFVnjYnc59uYcRD4CzDHPYN4PFw2CycG91RgefEKXZKe49vPunKQH4C6Bf3",
  "key32": "4H4ugeVSmrcoYP8LtjsgiSDTEWNBLZ7FzTpRXasGEqfgzbShdchYjnmFU99o2QT5bijbf4jSdmLQWKkemgh7tMBT",
  "key33": "26j5jrXc6uJFLPFdfDCpKzeCS8DiXPBA2fdPSeCD4zNMdCyS9vr17MNdBQVkMmE4ZpMEoHfJ76c48HNpSFqZWLfw",
  "key34": "4EUPtEnDr9cjuQbLMaEZ4nmgYnLvn66Nyj95Ls2BKH9fJyGKTJ55eMkmSC25fSzodd882VteLq22n7hdYCX1gobw",
  "key35": "2kXxzdBgKwCtnTfsKoNy9fGJmtRWQmnrp56c94miKpnqoEDghiBZcApNda4HFxjnD21uD95U11TUoSqNVevoPVUZ",
  "key36": "5EGJpdGaGRKiH6oS9pwaNPsJXvHtwbqorkLqB9xY9KE9v8t6Gd9ynV3SQgZmd7fcEvdpyuyUkbVwUT8C65kKk2St",
  "key37": "5vU2CunccxwKzJoFvNZaGV2XvaEWyJjcJVkdUtrBBwPint6L8aAzAAvV9Es4iPmohG1pcqQBF5u1kZ2DZJJ28Jba",
  "key38": "4n5mwSejDfaU6RxL4KFBAddVWZLTemgrh4XbJFpCyRNF3ekMpvAQ4qHydyji3AVs4FpNX7TVk8ZKp3pK7EhyscZp",
  "key39": "5apC1AwR27iCZhpkikhMNCsi84u7UBkSYNmSZZkXdsDXD3XxWgLjUkaemBYfC24k4yGSVP2GNjm26SQnCZrBuFX9",
  "key40": "33qP6Pes6ZLNzUZWHWiYXTmKGtJ6habYN74Nk3Zpcd6jC3uc6S2Rr6WjQXVQrfpaDUFa9Cs3AT4VM68zr364T3Cx",
  "key41": "36AujjTMwZQimGKhrJzefdf7j47gbsYCJwrptPmao4GiJeeuAdNeBLrkR2nMn6tNP49U3R1HidG9yjCRNx4xmnZV",
  "key42": "5aS3giNrmfH6K2AuJqk3ZxDABudJCnqPiaTLXghh2sstcSnNN8U7jXhsB1EHrqUsYVCL6iFVu1kYFZgSxZ9EpHWa",
  "key43": "4WaQSGhWJpYJB2Qz12ngEPyedqzYzo18nskAKMru25wDSUBp7KciqbCAAF2T5cZNmxWPdjG3HXAgBTLMniTYp3tv",
  "key44": "3acQ91zvMhSenekqRGrCU16XvLhLrDKvyF3nEDDQBwy4iaYDjUpXsXwUtFmdajhW66kwYj1x3EnLDjXYSiGGtTP5",
  "key45": "5WRNzDems2pjy5t2fxMDEebXZftv9dpcUCgftLovRkr7Uze6zsJ36XF9jk6wjrrxparNai5VBBuoGTzeDzAj34i6"
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
