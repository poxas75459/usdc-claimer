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
    "5uTdqkh6dvsPq5FqcV3duWGCQyKb8gwrW4N6kUgkm5acAGpoy6BcRdAMXtJPyadbNyMqeBeisTWKQJfJVNMciW17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PWfY3jRVy1Vu2P5JnwVmNQFLdo3L1VRLVa4XEV6NyAVGSnH6ivt2fKmVJxMkV9gNxjaKwXAjzkgSyq2SgoRDVXH",
  "key1": "duL2d52v4hzachyFKxfytkP3vWMGqvWsvgi8JGobiTwkfk4eDmEaEvRVCUtGX8igtMLUR8JtZebw6BoDKKjXsLM",
  "key2": "3FMgB6Z868TGaiBDv3cDFxocfpqBpabMgTTEKxeE6tiLYFfR2jGf4Vvgza1dkchqs4yuEnddvhVuawXXe3as8Mn7",
  "key3": "44xThTHKbszStdfkFuRNZeUnojoxFG4MNRRBPh1mrPELN2UrRcdeqD3yWHzrFf7xKtqjeqCmC4VmvEuuvtcPiBit",
  "key4": "28dEyMXrDLuyYRgrD151aJjNdUyXVnS9iYTveoLhabX2tYrwRedrveZwvgLMo5bazFDmGac9f1FvHZo4WTJgjahS",
  "key5": "3vhCVzbG2dUnvzhDhgs4qMSAJQGivZy48QBZJnNnH2WCNBC2CJKkQu9u9HMQike7ySmwedHuKcpUjBVF18QZWmuX",
  "key6": "5D2SBm4aD9t3qhvjKLoXeeGfxfdVoq36umRV4yag8zf4vA5GETKkDwbV4gzF8eFpLuPrTpssSCU8K8KRhtEs8vba",
  "key7": "3hpXycWS2z5MNzsievtR2h6xJkVWChL2am8pZd1RQ6HaXdwtPLhaRJyRRD1ShTTVS4eEmzd5yVTeGE2xcnREqWHx",
  "key8": "4phzzfQZADVFA1ZF4GoYjdmbmENfuxMnzMq7i3uFge6dWxKbd7863h7agpcHqJNHcwX9uG7RnC8nboWpjXvRqQNf",
  "key9": "5fYjAsgUqEt97ttvNyLsNVSwhQscmjL2uHeZqaM4Ks8YJgGsxDmpu22CT2ZMCiebmkhENXy61EEw9xbCF37kcp8c",
  "key10": "2ZjDCNfpmsRMq6Sj2mYrmRuFrLSniNKY7EmCJpxnDApenifeBmVpU6bScE3591t2toG7yYbNbgBcaVUpq58acWek",
  "key11": "65EbGzak6J8jfvbpu2rFaSCQzeH5MMXvPEiuPkX3and5zSNAWkxx4UraLmVshiCeunteEK1JzYER1zvY1wKcUYSW",
  "key12": "2ZGYxEKX74tDjz8uxx5j4GQJs5HWX8f6zkGLwY8xzXRZ5usiZ1iCJPeCgsT464Jpg2sZFCXJZkGsDHvBqHSaZH2G",
  "key13": "557aTH6VKhN1tZdhWuFAFnxRooGnQqgHWNBiJdLLZFEkgPhY9R7n2QyfNxCuCrov72awzyr8rGxquDUDfqE5z59o",
  "key14": "4DBoresy82oxDrU3WxKBoNQPRxacP5LMbi7AccbZ8ykw2Ef4htFdife8ByGRp6Us6zody7xyjWfr6EWWeiVGAUyN",
  "key15": "34VWqo39xDF2qTcGoxveM33C37BQYGvFRncCBD4aCD3VMEDnU9kiamXvFQ4GsiGhKrZa9uYtQCuy3UoJ2moMwyYH",
  "key16": "2vRRS43Ht8ai6LqLPChwqrb6GTLnCLsaMQ3mPZq2vJHbCQSYAtkQai3b3pZALt4bc1YyKNpofSofeVQUPB9rTVTk",
  "key17": "378zYcph6Q4aE458S3cLCriU2okTDv9imNWS7ueArbAjyEGSoKpNx73yEX5uY2Ndi46DrzSxeV869GFYzpmMTtuP",
  "key18": "QfHyX7Ugj1HUBjveNAQbRR5RwXGMyYPM4eCp4RrfBwj8GKU4iA78WcxtgLUjRVZg6drZQwmPGbKKJTAMNmT8U6b",
  "key19": "2AvuJuojqT6BhZgncp65sQbTebxqUKCY8i6cwKMPMmU9rRzPiRtZay3CcP7npGxsaQ252zVXTSLmSie3DZ9znaXV",
  "key20": "431VpsGEP1eZXrRFoVrwMCCtmeRkwgKtfrE2W5fWyVzsZiHVy8427oHk3AcbroamTPSrzLmZoLewdUrAKijsgbJP",
  "key21": "5YhwGF4vhEmK7yWoLG2kUrdocLBWsSmYLpPfX43BFdbqMTXec7egFyemevCuQMN5sbAvvkKdiXdtU6YVp77cybEQ",
  "key22": "4ZbWu9uL5HCM5HvMDUuRk8h6XKGt7AfzRN9HvXEryysVRSFLE366Es6aar9ke6f119FpWyGHr2nM4GgY5tLqDZeT",
  "key23": "4nd5hV7kz72JK3CoV8NEPwGVwNNGNicRduzudgwFnBkckPXjASZSSovNuHKuuKnkmUeH8Ns9EyX6Um9N5sNHjK26",
  "key24": "XpXPJRMLMJ8RxmBWxNNnprSoEnbmUxMfY1BvMB8SxJ5euMxZFEdcyuEEbcaFsvi4UeYJNg6kfFFLoBz6tfCi5rt",
  "key25": "4nBebFK55grMJ1Ena81yeomBtxeSQY9hZ3ztkShQN38DPQtq9WZJfCkfyvowhK2sLRK1qYWvmAJiH5LbAYSpnD1j",
  "key26": "2aqUQ79jLRkiZERHgVJqgghPCuYQo5QPNGYEL6XCetzNdqiHyhCQx1UqNqTXpirGjFbp36ZBogm9TETQLQ8huKUs",
  "key27": "2CCcXGqYV8gVu5ov9w7z8iW99ZGceVBWyaAka7f1poEadPD4ubYp5YFJXtNNTGeGipJU47qFHwUPT5p4vbM9hbxt",
  "key28": "5cRQmJXxXXUisJWznYbV7z6KsX2CkTbqV9o6AikT4p1LooDszMin6Hzk45N5yRycLgR3yYRFURw8MUp16kqzjT4i",
  "key29": "42nY24pP5AdMcyer3f2g9RZYLu4pwsTnPMfDcgYzPLKBKrwyaTFSsRtN4g2Ss74B12q35CHQPXQTEAW988ydVQpQ",
  "key30": "4sSC55xrGDvzbaBQQRD7QZXjTSJ14F7nmaPhRMGn9L4tDQDLTg3SYpUT3KnqyWe1KnCLnKAiM43vBAr8aRMB9PSt",
  "key31": "3zs8rgVScpzeKFxheNRem7KLcMz1qc5EzeAZUV96coWapCmU5co3pm4VpajVP5WhQqfcjG1jwqwC1kMPq1qYak8z",
  "key32": "5jv32m3RKg51S5xhZFvNQrVKoL22z1pxtKeNEVTyh43iM1d6zocpK3VWaFesM2LhacNZmumNh4ayJchFZRGNCGdb",
  "key33": "3LGfavXuP3u6Z1gMdrhjQCD7esRyg5kAdimecKqJYbrozLjRYeYkAJGheMNMe6Cqq9uyRWZXUmWtxdgms5qQ7YgK",
  "key34": "46g2opyF57iKY5zJJtRh87AZ7XyfX9BKaVkniWg3w4UjN61wJsyTqD2TsTXunCgSBAZV46ji6yfsu5MXRKKKq5om",
  "key35": "5ufvPYUC9hCo9guB5mwHxUCVe87CtBHk37FEaAGSFQSw8Yr49uXF7cVWxpftetVx7RRz3gMQY89XDHCci2AwRows",
  "key36": "sJbyZEYYGVUVk5N5zkRCFXpzZp3ZknKoo2ZLZ92RJiEUge12KPG7NcoFosUp5EwBwXkjQSoF18MoBXHoURnKGXh",
  "key37": "3LyTVTztJrtiuS7goBnBNJUxDAcbpZkitsq3w5UVAuJw3DxYF7zsZABTt8bk8g1ELFptngrrybvbrbijXrhq4wYV",
  "key38": "2zogKUf439kzG4DEUsaVgwAkvFQSkNA92hGovL4WUgzzE7jR74My31SgeFnnZiarNx6cgNwM4h2hS9fmSNjgHNR3",
  "key39": "4NN9azUqVFroDBNw33LFEgHdoRT37xX4ZZZ37eT2c9odRZ7uoCdvguKDFKo4iK2MXCJRSPegjrnh1vTDUG4kDu8",
  "key40": "3FWSbspqWx2PNXS8G9DVSxfJPDG6igAXPpj9484KVheXWrsYS8N6PmN7sDpyuBJPivGRhBTAwSvxdRg3YS2xH6BR",
  "key41": "2V7aSgQ7ZK5rDXrxvtsq2rmm4LaoannXAqSyi1njF61mtQpraUe37tv7ozJnm8NufczhxD143RmUJn5C6BdrRQ8a",
  "key42": "PtwyntCvQBBz2Yu55gbh3UUhaQjz18x21ctvAdC1rxpcXSwvtGR39RHcQbqq3jXD38ugR2M5v1XWk2TPdnvKJJh",
  "key43": "4TPZ1tiGFBLZ9ugzqoqk8nYMs2vP2woUG9Ep1PaPBvag6m5P8GuWPvXxDcAN2fYbytgBgQcQnGh8CGG3xUCuvV9S",
  "key44": "2nR5njDaz3qLP6FijhRqUFBwmSqZMkPH7XVKedNowWJjoJ6ppDcJ8TAmsqyzYpdw9FujZXRxvwFCkyGWrHfHcrcm",
  "key45": "2qBajr1XR4LZdhYudLahriwffnJqotfETcWLEZK4Up6F8gpACCouoJdUivEmkmkTVaCHnwiV1RRVMAhsoW7PrxF6",
  "key46": "471qfHYgVwianMVxU5UX4roeLFmSawdbKdzCYixQWw6aSBAwmAzPUUfzzv1EDd5LPeQScKTD2K7SBtkhbRBRqB4H",
  "key47": "3L3DyPzMZwmd6shveu1AsDgbQfGsoo3P7EV9AMH9AKKdPCWwdzDKJXXecqEM8jw2nx92cwbGAhYx5y65Twz1KsHK",
  "key48": "31AiMrq3MaVsfiYpv1kfqRdtrVvMEkWPstdEszg1NGaZZLvupBL3143EpnbK3iNAj7yAxKV3cadwxRBqmjB6NMEf"
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
