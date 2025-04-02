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
    "2QsLD2ybgLcHB8uTr3j61txpKsGm2PcfX7mcUBTti9kw1cuncEZiWVq6X9srP5GYEcZssHYMt5C1tHjRDF6zVvyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D8ST5sSz7F9gsH3eN8ukFYx3eXruoMM3FfG4aJUVUjBSyo89JBczaPnJkwBQX1H4iipt6X9pGE6eixekm4E2zHM",
  "key1": "5etwt8xCB8P8Kanifa25rgUuqaj7Hioiaoovzq11qT7L2vRivSioUSBVc1VqopWrWH3mesChqqy3ZXniFqHEuWtt",
  "key2": "4HxCeLRRkQMna4F3nyaReyywcR2A2FiME4moE8BHdyqHgj82xASWVQVLNdbpiBWv6oDeA3woc851Dz4BVnj9BYo3",
  "key3": "29BfuUTs4tiuBCaSkj4FiMk5BbN4rfcLJemhR4riU2CuPUpDjhAavdaB4L4mqxfMxJ7EVqosGL7P1ZuB7jHgdxt9",
  "key4": "2bw3zbXZLWy4WpbbDP52AuFZ74g2usD6bfv7Kk7bkJcMeDkvepaAfSb3X9cmXa1GnzgvfRzSr3zXqEgRZZpekAfo",
  "key5": "4egVpHKaExWC1ojgrdoEgc5tSz662tm5UFmkyaHmTVvanbQnEPbsNwohx3srtAnav4HjcthaJEQJ68iNtR1KGbpW",
  "key6": "fAFUfVndjii7PpFzZf1AZtEixRuvdCBPRsrygajd5fAMKBxU8jHNvwnG6nyDmyBJ11fkGNNheQmoPf6NAXMcMEn",
  "key7": "5FEyLCKwnMveMYyJf39keY2sK2QFqCEgJgFcUWYyC8DbesgRiCxoL9GePhkb5r3p6TtLpZHWR7NC5xa3MaGXAsDv",
  "key8": "2UsPTumnTtYnUDPwtxJBHxkqeu4FCZSTKChNnnMvdy8sAyYtgGyzhu54GqpvQeasRcoS8LgAPdDEt5qCiyVnGLpX",
  "key9": "5rZEosKV8cVNEyDVWXn8wLWhgygsbhPwfNsCcUrSJoDFkHtknSwznAdqM32xps2HZyucSCKgjAmFZMLMfAyAf231",
  "key10": "3kzf5u3k5vQG9u9C9Jn2d9kHCvi4eiVRR17veeVvxqUYdXPEuBhNLifmCqjFKt4PhspvWRpD5hhemVQ7CDBPH9rq",
  "key11": "3m43bDZfdpmG8Bb46ckrHo56GmqhdM9n7qY1Yvw7PeMKbwBFDYvJ5FruzA9Y1WbMRjSpDA4iroKKckC7V16NHVeC",
  "key12": "41SFsMbtA15Jsw9djXm2gsE6humgztE1Pd7mR664cAoRQgorkysGxBpdd1uZR5f91PkmzsKr6MrdjGdLmdmUwpjz",
  "key13": "2XWLGktsL4u11Kz1pSPRJPCopBdLGWGre3LqzpBhodxDQUvq2MbAFJphAkc2eqV2QakAf3toHkUNt1EugKrWTANk",
  "key14": "4goakgpMVfrWBtKaBmoV6yrCCd15UHYipk4v6dBaSUXo9w5UoEdY3i8o9RGqMUj93uGuknrNkuvEmA5UiiyUYH7p",
  "key15": "3dL1mwy9mXhHD92VEsBS7dV4Ffpgta1ncCLLQXT2VeVVQKhB4GjZeiKaa143L9Fu898scstD9nwvMCajharR8seA",
  "key16": "3tL4UzyLXCWt3hFv2rqLjmouREj7cgTSTwDrkhwEaJPMRkCfb8Zjyb1HGfw1kcueHapu7BTDW3pWKtAWTCTyCBkv",
  "key17": "65Rq9DZzvsetL9HHkaT82UFYnv1Sj33Pq7gPoRGrms3cPtXUonKpLBed1gvS8r4zHivKz1AT2qAaK43msB8JTttr",
  "key18": "5Gk3ukfU4f9o9C9FXGzB33bHafg1ebtD5S7PsyBKi89bHBviegjwqjZME4wfWL8asHxH3VFkf3q3GWTTSPMLUpPR",
  "key19": "NysdLJAdNSohCypeKenMc29NeNtW1uPaGqy45fEGDkV2bvUvEAv5opAkXaJJerfYCRL5sgEdeGEVBmfcAmrKPwN",
  "key20": "5BdyvCcLMMAfXg8Zh9UkpbwgUFZFdrJmNowPbsDWsSJNpCnNtKVS3V9mCbQGXyungkxBDVm4hSXZgw9tsQmeTMzp",
  "key21": "2yP4aQ3No7tHYCsq5KrN9vcDVfipbcM8TLoaZkXQGpnKTTm5tBj1zKc8xxuyxG98GcLNm3dx48mc69eyYdePvLjo",
  "key22": "5CSJQ9LYzrXR5gFXa6YKAKcGTefqJRnz83ZYFJtwwrFhTe2cG82jVvK6faBBBaT77AHY4njdqDW5EiMz61ERcHBb",
  "key23": "D32QGSu167QzwauU4fhM754U8UfPx6qdafQffWVkDYX1df5Ysy1injaFFT6FzyXsAAYbKXeNWpBQ5PrzJHf7f63",
  "key24": "3H2eFUgpef6ScYsq2oXzdutVzRnCZn2ohKaaguxLbnNhpwXezvQHFJH6uGdZ4unuEfKMCmXuocvDuh9HAK6QEWUY",
  "key25": "2Dq9xb5Yoou5MAQB5Z9VVs82UqE9RogH5PPxK7fTeBSknR2rvaR6o9FqkNR15usVGrZcWdKstfbzTpK7S3i5HseQ",
  "key26": "4po9UY36cCWEUMxRQ6Yr2caZdcs5TrBKenYizqtBhbuqwfa6j9Tr4W8SCEjEkYwdQbsxiyqraRtuNd3BDU9yqRpr",
  "key27": "eeDjE6MsE2vR728v9zYK8mwgCDLG1AsCm5591n58zZyQz8ddxZm5Q1iXNLBzGmT9iaB99WTig2fTUDeEm8wfdHJ",
  "key28": "wTba2jCXhRVS6bcxyJf4zoBKsNRodk6CqQT6APZkiC63MmGWmgdkZ5orsY1VBKGKkiGFhkG4c1z4hTTCnPCiwP1",
  "key29": "4kHnsWEobTq246HndyvZDJFE6wTVjt7LGQZP5DvBQVez5s1FJgyb78PBeoGVg7KME3Nsu425YN5BdNZHXCkM2Sjy",
  "key30": "2k5BpEc6ET9GBK1VXBsp5zDgTuKqccA26tp2PbhXLqcY1kxUkimXpuhTfCa7QLu3ib2uB9FvBS5pfJ5RZmvc97m5",
  "key31": "2UgAp2t5Eh634toZV3xASQBciFij1jNejBBGWLfQn2XsywrRYYdzcVfRqrmHcGHRfzYKSC5C1sPiLoRePX4rSCcY",
  "key32": "4XjCWBsQdjimvhJP6HmZAvGaTj3ZpLubu9WvJHnHzfbLFsoLZ8zUAfNAW3hGRsA81hibAcxGSkFvL3XgMmAuqfrq",
  "key33": "ys5mrdCmMHe82Sph7eVRiAW5qJQTLbBat4Z6Nfo9xMhtn3fo3x332xuEpW1f4Cfu2HodQXwbangjA3dETnBC6b7",
  "key34": "3BpTUHyd3n8NJ3G1UeqCfJz3aodtyRR118Rt27K1G4fFfGhvqZZzMbRkei9jbADhH3otRJqTHsMRYeTZGfRN6sTd",
  "key35": "q277R6hWHTGEvF9Zv4yn5UWwnSHnrTZtZoByh6MK5qJs8c4ZFjGZcc2U5FyKjCCQrFnYuFrvwa5N7cobRxk2aNQ",
  "key36": "5kP76sinVPv8ZmqPd54ppUh4JZTiQTS1kqKeQyigvkuPxd3gufweeHdCKHNZH91ko7onAGTefMBC6uQD8gh1e94q",
  "key37": "3gKmu1z15ezjmjweN3gUmHpiSM4bJ5wN4ZFjgu2GA8Uc5s1j8rJiLXAvfDgKxyTdchNhFnsuwjaf1DhDVEssqjiG",
  "key38": "5CtRKyD1XbYiVopgsgasbJe7q2XKrhso7PnVFQFtSy4Arff62kk6doAHnwJrfxxnrn1EydCUJxHTxDrmCRpn83bB",
  "key39": "4jGa8vNZTEXZBbtZUC4tNjBdS4ZJZ9x7qJuABb1cDibcB2sMg5Si8mq8HTcDCaZygQvBhU46mYTpa9nicaNqBW4X"
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
