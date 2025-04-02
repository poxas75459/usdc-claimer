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
    "9JifuuqVmQRHWeMp1KnPvMRLP1mhAH7FmDvuFdsq5uvCL7MTd5XQdk1D7ht26cmk9T8ssznuV7rMhYSsQmpn2Vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g49tsX6G9VWJsjSaDaxP7R32bcL5DN3xJhi3GcZVsMijjbSU1Fr9DS6ckG7NK7qk9UXGXQDNPp89zhdvmv9GePu",
  "key1": "44treVb9d7i9HqfmKqoGfH1mdvvYTuaWPyTFoiri465YthguiHg9TEuhmRVV6XqmToJf5hv5LKKKqK1PXk6joQtM",
  "key2": "5D7cYbwgctPxFmqtY9NcZvjRDtdARhVDBRPv8Go9NkyoLgkcgAUFtCMziRq9HVEg5NB99QcqyfQSryUxbzLmje47",
  "key3": "5CCa1uNSiaftga5Z6gQQ7EnLjtatZJbRGcos61PgiGD8cGgx5DWWQLWN9SN2PDiD794u56kxcqAUiCp5nsqyZvs7",
  "key4": "9z6wx6ZXema2aJs35cmLzbv6KVrp2AL85JPeXsTHruk6SgMaphNKuCip8Et1ZYHoKZpgKx9mZdvViEvxYaQCsMZ",
  "key5": "4JuX15fDFxUgHKiMGRR7ttuHLeHaoEFuwfAwiBRFiNnpAkza7aWu2Dd8EQo6tBfqq3ei5A341t6Z1UK2Jy3cHbun",
  "key6": "2MqGNRGcufyvXWMMZmzSBTFTmrKxNDfCwa5XdF9FZtQgUZbKudYkikoqqKjzfoeVEKeaM16Ky2NihvFR8irX3wRp",
  "key7": "4UcDG44VgYPc4nNve8BfhRPKzeLWs7KGBeRjuZNm3kk13fyMz7Sga8Cbe5Uvjk5iiQxiBDS2rzQMpNP8pMBJe9b",
  "key8": "43P7XHWAPHQkXbXmTTA7fuq1rT5noAiCRJTsrc6ctBqS6C5Ufgq7dUtLxJR3vSfA1LnVNLwyREPZNkpuY8XaHUjZ",
  "key9": "2VmNNdt3JCAAg8os5yajyPo8BByenVj6jYa7hPGxATH7E7gperEV11tKRHzxQiL9tdWiZDGp532jA41ghWvaz9Kx",
  "key10": "33ZK6e85V8N9TNuunXHcC9ghHAsG4QDJp29C9T9hKinxPJ9ZMQTq5VS4hHnGwBZWWBCGqFgrF8EmyCcMa6JaeejT",
  "key11": "3u96jtB5KCtuzH4qXfPeL62awdMytcfC2RWbwPXFJjayTseeTwPEgYqJBqtmQytwB29GWry8dh2nKJi1ENwJdgho",
  "key12": "xrMhxigx88vioYMSmp9PebqAVyUG4NznB4CHMbkZQNGCW1HmgRbqzkhfEEdssuSVvQfYSVTEwr7kMCtL8gkCrME",
  "key13": "5kDfmSzVEftoJH4ekCmqmEjaJAVqfmWHG7xW3VFvXnV8exAfARsxLghY5Z8LWS5w11t3LcfnNdy6kFW587icm2qb",
  "key14": "4eF2dvoULbWc4w1xvdH588a5qrnkudcphrPHHSYUaFL69CQRSWbyXcS3YS8TSbxnZXMYLupZCrSBt3GPuYtryrSr",
  "key15": "5qYFEmahs3Gap7H23vNXuAvPBf7HqwXCvbcm5Prz54wWCGgXhNYoGNNWTAhJAucLABu8PsXEYG1LP64KUoGUC6TN",
  "key16": "4bsADn9JYzq5aT7aVCAX9JufRzJ2z2vLMwQoZWUE55Ku7fiRVeYdLny4MCvLbHsPHEbXDrC8bw4KGayTszw12yXP",
  "key17": "4yBgTVHQuEA2RuCnMgErKut3zvTLAfREhLDtdYrXNhLjtF6BoiUhWJjM2qCosmbJ8YKi54MzT4v7aFbYkKcVTE7E",
  "key18": "4EGMgFafM4Zu51wN7gwXFsfLnFojaQWivoJLddzBRzXK2mJkt4j6QC59pHE334T6fTjuGaohLakiUhieTiBzeDzW",
  "key19": "4gx9n4xCjWZVYEWBWqMeMeBoU3xJsJt6Lm8wmjd1453DJ7oX2m3ymCV2TgdWfd3RrwrA8w3wdUyVXgAmR3EaZnw5",
  "key20": "AYPjDpFhN7ek3HPGmTceGNu8ETSs9XhRAVx56wE8PX5q7yt66fssWEVQVujgMMa6MGvXYGA7n5WzAg5RYadgumo",
  "key21": "3ugSEvfKHpUA4u18KBiLjnojVT2eAk7zWEWK6sVa4uFKbDdmQoQ15JttUYBdpZRoKCq2LTfp1ZYAemLRF4u4pAdf",
  "key22": "4RFXnRgsXJJuj2JiEYW2xNXkxXFvnk1zE48t72ASeBbCVmUCqQ2cpcA45eBKJhZ8hmR8docfFEa3CFBmeGJieEKu",
  "key23": "5VwujaJNazquqU3ToD7Zi6NPXWkZpquSmkzSXSJv9UibWdpmjDhKc81YWp9ZTKnxKjSNBwLfHv6naMZmhqnbL3dP",
  "key24": "29GsgxEqLGKR6FbmcHoT3RptHQmRodNqiYeLefNwstAk3Knhyu7QuiYAe2mqptTQTSMxPvsG9TjjLYM4TmKxCkMr",
  "key25": "fBn3BayFk4qrayqGoi6JWiy2Fn8MEEPfGUnGuaWKmC4d31cvRGZGF1d3JgYit74GmXagXYgfSnPaPqLRhuAZM1v",
  "key26": "4Dc1FCThdaRSRbFMa52kYHeUbRuQpsAtCwxRvXTX4MxMWLFLJLo4U6PsNqgbhsmXpv7hB1vr9NAHyC8rBVwkfLZ1",
  "key27": "3UttZ4MbLhN128hLGbkDDQ67L3WCUmwhuooP2sTcC4Kbjt56q4pMoH7MHUKS7JRzMofruEu3Ew3CqatoqDK7s5gr",
  "key28": "32fHoGnKT9PLmGjqjXUXx7XRN5CB4pN3saEHoXCbK5fMtX9Vc26aJK4kLJkQX7veS3Q1AEVRNn9pwX2ud4zcpgYp",
  "key29": "4XsyPiHPudkDp5oTBAc3EpbbTACS8LxrbxnhVkMyGAmDHayxLDNh4ZaNA9apXJEBg2mq2NddJ55CCNQK4XCU5Hkj",
  "key30": "4ZKe3pyQBFSKXFy9dScArZqavRrSfD3ABnpiJTsz4H4snhBdvdS4TKTd7ZAtJw8yT6W7yLjkZmPXtDFNBkHV1B9r",
  "key31": "3x9cZEikznxV5pLhYbWUZpbiaCpvmToTFuELeZoEcptyqywbCB1U922KF7hYNq1Q5LBbCbr7A5n6ucuuGoKg8wvv",
  "key32": "Jj6menpFBMzjmEWfzeT4uzz55f6SLxq2THDbZjGmcHScHnGffoAt6gDwWzYEvUvqtxrAJLGmso1ahbmEBbieLPz",
  "key33": "2ZTdkxQmsTchzghSDpGZQbA2UJPfmRZjznUDbvUrLE4GSa7NCpfnnK5bGsK4avyLsjKnpWm81GcqWHy7vUnkkksB",
  "key34": "56LZf6FayUiqMCwrHjDwjTffEVkc9vzEcmUZoHpiVkpsDDp5Xy7CNE48uvEP9dBFn2DUgqekP5CaGnwftH7WWgh4",
  "key35": "2iubhLusmTqfagCwo7YR2StSesFNsfFaEkTCdN6m3rvVNJiXyAb6kAkLR9Tbg6USah8VTzJnyqQbDBCLxEhT2GfH",
  "key36": "3hqQuNLJSyh3WLQqGQw6Vi5ahSbA5iGWhKPtzQqzcLKhk1EQTKnPbnzrsbUPCVfZqkGWdzDxnM6AG8ys4tnCVV5s",
  "key37": "bfdZiFCzBfkTgFDrT8Y5XxDb4ZaFR3iEmGmZ542JhGWVbX54NpsFse234vTgxWy9QBqVKHeKvdsML8KphvfsNaf",
  "key38": "3Tkm1oFj8NZn8c2kipQuuyRXupLCbZkQcMVR2JyjafN4gS89mh1rYhXfgqgf2AjKuX3b2WJwKd4dsWuQJj8gKB7u"
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
