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
    "5aHrMZpdo6jPySUh4EDMhHxmwNv8rgG21td97xx4y9MKiwxQvmi7M5jHzCBSirSytFM8jDZ4hbz99QnEtjcMFmkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BBGHh7eNB7w8S1zg1mo5ra4D9vm9WGYvE6kquRQuXFmGaCvE4sn3NXYHpUsJ5sjLZFMm1kQ8MocWC2bk5qfwUFT",
  "key1": "4R5gqVMrYyqJdQ6Ez7jKWCLHzx5ukJWBXTTMoMgxxfXTbD3AcXn5dFZQDfhkPikw2bQpALzh5bHv2rNdamfiCWuu",
  "key2": "w9bKoAez7C9Vtd2K6DapP6s5k3smJDZKqgcUTqzqAbQoYJjH5fneKqNdgbhMaCQNreujMFEaiYcia3GFDJPpaii",
  "key3": "5rC4fDvFte6yFPG7WA1Xy7wB9RBPbyhTW92sv8tQ1J4yyKgU1rZCVhYNJLpgT8Bc6z637r1e4RZFkh7SaWwcj3ds",
  "key4": "3wWFkbQEdaq5JvYbTgPun3Ggzji1baEu956Gw3jkBYpDJdnqfsGYKnGgroXbMszSvjCtJnNUcuqvPHqkDENfivGm",
  "key5": "5jG7ioy2AaycgZgMFs1LRGPiePTrJFGn14dchhgEwbaFzSgVnu5JNqcwGbrEynZ2fPeVsA7PJfhts2367LS4ydsT",
  "key6": "4KPJhETmbR2mUsq6bZxjFip5mGBWJPgrh6EvNgqz92FGZbJ7ZvmGSuEBfdy7P2AfmvW3knfrH3T7RuREK1jgdUdb",
  "key7": "2B2g1Q3sjSpH5eoJo5Ss4TGSZCG7i3T8ca8cbsKaPMd4RhJB5vAcWLSNrFuP7uoxUCuqJUHmEKU6h3oK1fxYSyn9",
  "key8": "2dDyL5jQ2S2TKhvVbDo1eVD6JCDKsqQWke4mBzdnwQ6dkU3NHmuRhJr3aMgHTuWEh6wPA1SSRyqm2zxrKdXMthGe",
  "key9": "HY57oU6rEZ92YwKdK53DVGpf3jABUAg4GL6WgF5jMkB14WJpdZjPZneM7UqUsYVv3oYcYWiuzVz1men3oE8noRn",
  "key10": "pbTMZj5wkQh1nCyniTcN4S1MPTCqjs7ykD2175tPv7HhNGTthgjED1LCtG6fH21XuVa2Dviuy16ke2GZc67wUZZ",
  "key11": "2rXyvetRivusjigPZaye6jEK1eRhqZqPcarqrt7JkuRfBHTKMahqeiXKgBR2qNvofXc3DWUwjXpbYvLv7iNJV5fK",
  "key12": "UHjuy4Fe9P4kBF4G3TQjXXGok1owRcHY2achCDTYDPkFHorVzgmhb17L8qxuFQzK6ECx7yUvVri3tpBJnMrrGEw",
  "key13": "2nFsx9Rnjeybfk1dsSGXPSUkAwRmqwa64Ncb6zvX4NTqum6QpirE73gwz6HwQ5BNhFW8vg59VWZtXTHfzvQM2kt5",
  "key14": "3NjVrz5D9eD9kJdVjbMZDt1iyRFHeoNnL5DM8T1Vtm4HZkDdTMi9w9npX2p7dPYHez4taW31GqDo1G7c1qWunEk5",
  "key15": "yFifGDuHQGycYkDgdhXL74xzeF1ts6WgDhbWFjv4tNMNu2PrxDdYqtZR2ALcADnQHQtQ4oHrYdzezdjt18Ytadm",
  "key16": "3rqLHzBzLGmbP8HhDdk2iXfcVsqXiHYgHzZCKCmdcbdrrUTj9tSUEQrjEas64VTQrn31aq2F5NzFKNPWjPox6cat",
  "key17": "crpe8npZi689yohS7iJmuAx7FGYMZGF32f7nAsat2SfgAuqwCbsBCfLybPR4z1Ln96qAskobNL3WiJYkhp6L2dV",
  "key18": "rkPSRKQ6ednYTTxLWmNy9ovox2Yr5LnYAdcVAbBMBBD8HE8MQbmePNodmiiaktE9JimQeFJJwhYrgD7TTZ9Jyo4",
  "key19": "3dWhsQFBurNmCfJDqq3rSKPrxkaLq43pEMxUtDByHB8VPPatoh3LwRM6mrig6zoVZZgE7S9hVVqAzSQSAU5t1DWj",
  "key20": "3Kz6MEH4vW82bKo26UPqzC5hi2AQZA9be9HXEx8g4TzEJeNdH5xVY9RvmsH6DTupDKr9A6H5gogA2DMxiThL6hVp",
  "key21": "65FXicaVEaoMcy7CM6bMSR5tJvyxApvbC6FEdNd5QBLGQasYbpGspAnNStAzEDSBTJxvDdCnbhpLkNcv9pYT3peA",
  "key22": "vhatTffy2DGvLksuTmSWDNKaYfZ2JmnsoGR7FSNd8bFdXREHWkiLuUumvzK8r9WsqhoGMGjPx27Yvj9D5wEk9ni",
  "key23": "2Mh7bixciojbBWDaVPv2eHJrsEXbHxE4fd4UEURx4WuHQpSrWTxBXLQJXpK4nwzmHLiLR8zpCEAHXPj9FMbDciU",
  "key24": "25EKGGZuQtWpWCyXEjQTsqzzudgRpsXPihi4cnxbnBNqPHDKxnWZKoQ6j6aKNhq8LErsnv2X6GB8Q6BDdMBYSiQJ",
  "key25": "4vfJrETG3BaaZcWeXJ5s5ryEYmhhw7iwLd4CiuEzPHQ4uUQjZZgU1482Ns8M4X86ia5CQ3VUtWqi6LcwwfA9gQEN",
  "key26": "ngAjkCcPp2DVo3BMcd4z3waKhacjjTUnRVCA7xiT4JNY4ctHwTc7NWGyxZsGBmEUBPQ2sNGFVzgeKPfdw9EyYYM",
  "key27": "5FryrBFJg1SBqpnxKNdeLHRuHdzQeQH1ib5ZQLpUvE31gyDzZhStiEU6en6to9yge3VXSkeS7rnJv5eupfmbzHvR",
  "key28": "d2bFTM13LoaxCQXyYM2tpxpmnXhMZhAP4bJRXeJpZqA4DM1wtKXEoaNgAgU4pqMDibZLdg56ZSzQcx7FTv8ioyD",
  "key29": "4Db8ZnznSkykgJ9Mo1JNULS1m986tegTRMuKyv3VzSvVp1r83UKLA3FJiPSwejjK1VTojAPzZCv7acnXJVZTNbJy",
  "key30": "3ZomEkrqhPitBbWHHeiuuyhTofbkz88A5JEgtTg5sA7wTJcbrGrPif8LyAp5iiTmxgFLKfqrbPRaSVpXXkrZsGFx",
  "key31": "2mmRfUCYxRFfk8hN9DjcTYnWbze36SjtXGNJpSNsQDaFaDxbLEQJjZri9Zyadj4Yj5TAorixWLpNAfjQESDZZFE7",
  "key32": "3hhJo5AAh2ysHdeNj785RX72deHjzWDEV89ydU7wzpZ4hxcW5daY4uTipWLW8rNdjbEPQQMMCqdez57J7qimJJei",
  "key33": "f9ZTPJjRHVKrjZdbh1oqXTHMAbikYnizytMc5gLB3aLURND6Ly9hyPGpvfx2uXQnfnb7LoXpDLvBCGMzrBEeke2",
  "key34": "4vxntHtLJmfcPMhGHVeeceTkAWFKqxKkc9tThCMrVExCejRUjHAu9dg53Unq8114CQ5CdzNZhzC1jtnLxKJADz5s",
  "key35": "2pky9ZYB7Gi4xJEMFpHTVRpSTtLpCQxCTbv31U1AkZ6P8VcewdLf8jRDVeqxQiYieyuz4mqyZZb6CSG4EhT9GdF4",
  "key36": "216TopfgLZZf4p8mT8aaEgJ6K7sdv6voz8yVTyiRvbr3rkV227s2WVSUho6xmhuZM5tqAPHmbazeS2nKGKJ6Q5We",
  "key37": "pk9N7GHcoGV3U78eBqxJEbBz6zDQjTJsKVFVdJMPDib6HNqsGiBLqYBntsECts9vkLmB6VEdXuq8oS14PnxCY1A",
  "key38": "SxyHKJc8a3CtGqhJwryZMiT8rPm9aw1AcRdVZjbrgribaQHZ7yJCQ9nFvCxbRBcYruPSq3K2VJbEToV3xRaMpLF",
  "key39": "4Y9n51zADCXQNeLPPvAndNtMuev7fpp6Dqu1h8drGAvFtHFc6hmBFGHtSX1fMdGKbxpzmP357UiJ9dyejS49Vk5B",
  "key40": "2x7zzLmXo23mDXpxEt4CHrmQUqRgsdovGz6UmY8jrFh2tR2oMViXAZoG7mVAHEygzSFeWNDHB2UpYjsurZANDmjM",
  "key41": "3pzdn62r92KSG1B9taDQZPBwv6N37S3yCRShCcoXCANbxTBAyzHDEZXE5qCE1XSipbZa5878frrtWkseB68mWFqi",
  "key42": "PbVWnqVVREiR1XTKPZwfou5RU4fvVKUcyCShFfTF5Veq9T1yWUHV7ia7wgE2rmuk5AqDCea13mcFApZAXHQj8xu",
  "key43": "N97ZAoiA9otf5KMGCwUPGWKJqxnPjhiAkomyN5EhCBGYCSQPjaiJtC4rxYkjFhGWSHFhTH32YFj4FihgTMPvcYn",
  "key44": "3CUrpoQJa25G6ozaQVo9Lm8acyoq1WtFxQeWitsKBwU9RQ2sDnyiPt6PMGntoUjyGxPJfJo6LWsZBv1e3YKcxn9g",
  "key45": "3QtzpuqQziAky2CRTKmUnCSkxYGAqBdtVrr1DTbYoZE3GNnWWJnRB4MM971Q8QAtrNaWrJC3shGq6fTF5hpmPkAd"
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
