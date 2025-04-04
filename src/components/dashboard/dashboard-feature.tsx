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
    "4k7ss68P2V96phALGUDAhfhzKaub88G5a1kLZSfWZRT4WjzkXb76HqbWE9VHSaoSwRTBVQuoQpBMFvi1rzA8nsKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ogmL93jEBcE21pBAA65ZGZJS2CEyV9pbhr75QG62F2869JQeec38wGVgXh9J9vq9he8oVC8sboS5hoPF1V2G7ZD",
  "key1": "4aYLfeNrfDZkfTRRg8WSdPQtgf9SwnSE8mvEVdzsDSTMsNktDusBCuqknVXUSoRS9C2GVyjr1FYzhfXhH8rgUVat",
  "key2": "3MpQ5x2ZXSuZxHb2vA3stJcGqK7mnpg5ZdXtce65WQ6VPSSkuG9GEGoezjS64Vj1bpRpRDSxdsnWdmorWDeV5mrW",
  "key3": "5REQjMaEoi7PeQZs5KYMoSQi5qgFXjMWntaHc7jgXpzJUDqkc2wHHneaxbghgASNV5NSLpBTEEXB5VmDJrd1hcqB",
  "key4": "2fAtoTpKDxyA5qzzuedpww5PqtNTGg2e3scCeUiRpyGrkmaH56F9EA3PXJma4pojpGJSWgsADM5ZzZfBTy43yzyP",
  "key5": "36zjU5xpcSZ44ouyyD11btQu8M1gBUZa6sHPEJR8AjSnbbku38c8Y3TisYxrrddhzQ546vUd6FLL6SunZanuWSKj",
  "key6": "56cLDfCyGLR2AbyGKNdhK96cKei4aEUGu3hjphasfsdahvHp7bFp2yyZoHz12cnPczAZGpfDHdb3sazGw1RiuYra",
  "key7": "5uKWD7uPDFKojbVnm38AKEaPi9YVk6jddeFkiLwfgUK8aErdo2BNpyBe3KzBZBTwT87AKj34fqijdZiprfGMt93M",
  "key8": "2NKVz6XXD1Gt5fEZR5zGj21XtxR8fkPVF28JwRwyotHdhsaDUwPLwdsLYot7xsDtTF3L7i1b8KinXjR7XUCNd3kR",
  "key9": "5CeYeasN4UfUiGQdJX5PSHRAsKtcd9etLJxP8hhxqaxyGkTTpR7aHfUDa2mdNy1q5yxrDhyZcaFyJubR4ygAnSKa",
  "key10": "4wLwuKPpD3GjuDssmhjw3AX1gt2wAnNoqcK7JF1QtFGVmBr42TmhKmA42MvGVixZ1GkiTZkuVbRWQ6YZUsXVWdGS",
  "key11": "2216PQNib1LyepXWuk8FQ33EHQDcL9X1EMdnRJkoE3Kt2LV7vCaUPie6HVTUvzSmfa5yWHWegtpmRuDbwtrUVppq",
  "key12": "Cbiw9bbATRCZZtbHaJnGhA6Ax8yCmpVkFxpmnEJ35cA2MZrkZQ6faFGjAK71sytANf6veEsDc9KwY8rSLiGN2PY",
  "key13": "53WNkxcQFud3L3qLRxBU5JEmfcDYZwvtRfxPpEQNcbimJus47RXz8bQzEDScmoG41N9Vp4MpZPi3YrmDepJ3eHWi",
  "key14": "5g1t5YqGe5C8kbqawKT1EW6pr7L2F2jd7UvckWYbpoV1FF9WdqYunhWfVga1mvFe1XErNybDpZmpWJp4GE2tD7Pd",
  "key15": "3t6GJu3Zs8omTwH9Z7vwDu6XfpVuKDiaG46RgbHMgaNZ5mBKdDfHSEMnono5ZzbehCbVa94KBQLU9YrNdELdshiE",
  "key16": "dFj4J6dwKpiMZNheBKoCW2kUjupG7XjRsyc5Z5wscfeXrrLxWcKU1HDJfiTeXnagc228uyzRYJLJCWBhx7w1BTq",
  "key17": "qBReJfxDjByPmC7d6etVeXGWPLfZmXrnweapppeT4RuR1aTDtbyseMRfDujYe6zTWnWEqa5p689BcwM5gFLuu2Z",
  "key18": "2MatoTby3wy2BkdZwqgvUEbX6JWWoi4ZKRohSNauxvU7zPsbPzmp4L7RB8f9iums7Qo6cdgKS78Jit1TwimNr6NL",
  "key19": "ypwZcq8soFZ3jEXysPnyK4UTEr6GgBLHTdZKCGhVGrbkPUKCKGYH4NEc3FRzdi6JgubCv9rnJPi4ciFor7cm2Ev",
  "key20": "Tkg17gjG2ceKPKUugenqNSAaNPPATspM1ivvdRH9JtoNHvrWttRXoCwNaeG2yjkmcz6DC3QQbqRHWrGNCQ9c4Ny",
  "key21": "5hcpo6H1ZPjjW98xYwMst6F2CsMcxzaNcqjjPm3ggHbMazNxAVC8JKEd4NPNNHibHRNEiBNWgHdGycT9fjn1UPSA",
  "key22": "5gDM3bu2DHuKuERMLhr8XrwAsBk1zQtYuSTYRvH6axyuWrfUqymAH6BNWiZz5Vsow3w89fkZj7ZjZcsZ8XFxj1Zy",
  "key23": "657gDSmBwm32apL3nNi6kbFjcSL4WYbbN72ezPoPQudznuzCH2uFYjFeQxiz2GFSrQyETWcSode9ASHCsRHooRt6",
  "key24": "5fQXCFXVwckEjZCkqEMGtctuLC5PDtYwHor5xc5n6qf2NGndHvAzoQHFS4aBr6HvV7uCECzyUiA4trFk2TLke2SD",
  "key25": "huAvrXPfgfdoFuf4T42oTQ75pRnnjWsarUP11Umm2xdHFv7WAtVtE6E1DwLcT3yA7NoHCy4u6whxUF3woMJSV4B",
  "key26": "464g8kqUFogEfAta8RyCNKQfdsFUwLPHJwC2a9qt4RQgPWJJF6VaErcAEhgBzsQJmxRrkUy1MS5qFMTot2ttcVEp",
  "key27": "UauAKYZpPTAVLp5FnRCJgYqYkwtHVrrwF2GdAyCJsCyoZKRJ8upZFxCBn2Hu44qfvVfka1o2bw17vMPZbL2oCdb",
  "key28": "28VT6rchhmjvqdBKfX8apnuEFY5QnS6jk1PCo2MwtzSf77MnE3a6fVJRjfX5AqhAFjHJ3x5NfEoR6441EcqZyjQP",
  "key29": "4fk9R89oEHxpEYeBmb52rydQ1yPQwDKaxhNMRH4KNBjaJo7vyHUDteiqmSGf2CGm4R7zUcDzWFRqLLUMjSpfeoPy",
  "key30": "5hwLq1iVFywR1YRUAFH2iknh1waaNsfQAvyog8cUu9k373LGmgUQiJdMQhZs5NCJpD1oJqbAtiytEGNNKa3CPCmA",
  "key31": "4qikGntqvkhGDGzxp1fcdzneDi7WtSiqz8R5ofLeNKkuy9X7Ya8qvvSGGfb1M22CJQrkjNrkPWF3er864MZJ59mA",
  "key32": "3Ci4s52U5jCVV9sRqEvRXusp5hfRR9seBv9rTGav3PpnTbFqzc3PjmajG7GF2qkj8VNhFNfxMyRwKqFq4p6dzgDE",
  "key33": "2Jag1TbCA2SnLo48vySB81ophEsPkN8p4uxCKcjPM7FjZF7NVoq9LXsbtgJjQ1o8WsgfcM7Popo7Z6kPybbcQQgq",
  "key34": "2cPhaHRad3Tt8htPqMq7XszLYBY19QspnYSwdaEMX64wF8G9KyvHPzY3bgehRkdWh4xtvfJx29zJ6n1XhVwhxt78",
  "key35": "4jRyn65yRcX6X3Yk4JrcY25KhwBZFsN1Rfh3CPGqvz7jgAV8JQimMvwD3cuAUM8Qt97xM5BBrKeAAH1NYugvMZUH",
  "key36": "4TewU5nL9aEtkDAanc379Nsm2BbZFCjd5tYXH7yG7phWAPvjD3h4qsQV5uLWdPhz4vVcB7aGmFo2NTs4VApPqu5C",
  "key37": "5a3DeugBiNQJyndNSLVLdJQEkCx4x7WFJBXuMtkpfWpnYfxS32SL9oyahgarPa44mcGcfo9g8x7rFSpcJTEg3gKN",
  "key38": "2CTGeafo2598xvFPU9WSGYyjvUfM7u611Ed4HdHfyruMGjw4sMTxZFgP5FhHMYc6reXQNXysWm9YRCAyz1geSvtn",
  "key39": "4RveGNA4KYJ44Fi72KuDoTg51EyCCdSCieExNh8jDPjWcHfQuMoLt9L2GeX5HR7ug3yn2baWkoB5YpCEDkL44NZA"
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
