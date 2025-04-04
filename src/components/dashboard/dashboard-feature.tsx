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
    "4aDVYkEt3AjyRDA7fgSa5u7rYXerYkAGNyNESSTgwm8iDsZHq9HTAQHhm5XeBvRuFGj5hvMfhJg2HEWnRVydLkqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MNNK2giVozHE3gBD98EYV9bH9GoNrhP9ddAZ77iBabHvN1zdXKR5qTWbT7kPzNj4wLNHAdjAXYBfhevz1wdnzKW",
  "key1": "UoP9ZjnLJfNv7vto3si1nBmijrQVwX2tjREvXVgGq3Xqr2mmbcTSKzTL8YdqRiBfcH4vvEnyjZh5kUNyqncSCKW",
  "key2": "4Gc7UZh5BUD9886Gm5rntyz4aF2wVHMxa6REQwX3gW7X2zCSLPeT5c4KqU9oMe1yiN6Nod3ZwYAz5E1ru24MSpNR",
  "key3": "3xwLCeRD7MqtGMNTiLMzNQQjYh9dzZyUKuVHqZk3fj18M4UhfFDvXKHWEfdr4TWJyVj9EE7WA5aC2VE42PwtBg7d",
  "key4": "5eSADFqxnyfvk4EWxw8LWNe4LdaqP9xb32nfvLkmTFBLUcLTaFCT7Tagk7XWftVPnizKtnm73bAKi7xcuS5dfKFF",
  "key5": "3vke4hKYNm3S2QSiSGqYnzmekwu2EqBtV6CyAo5z2YQ2epAcR6UKWPGEPXnXehJG81zAbjJzUCRKaAThHuE8BYGM",
  "key6": "dVopnj8tsXTef8gvyUab64ksTc9dxxZ2fFjPFVqkTzB8JDAj69EMMebuNBtA5KTHTJrVAXCSaNgB1Ygp88QxS1W",
  "key7": "UZpvuBs5KWFnDRhHAVyt73MstoXYqNdgWgMoL5nqnaVEgj6jTpya2ThGrrPJ4ArHsDZL2JjU31pQjjGX62VEgZp",
  "key8": "5SXUcck271MXeHRRa8KNuxYjJttwvyActpU1BLXhPYt9TqdC3g9AJ8X86WUMp46FzQSPWZE84UtQYBM7VeSnmMWp",
  "key9": "58CCDNHrYfBjCUUaECdnoh8RyWTeZikK84apnssrAyv7ruTzgERKm3Map6aL6wTkUaAqDHB1ZwwsDVYZGsCY2EPB",
  "key10": "2FikgUQhLATyyCbVnRg2HTHDC8WT3NsKjRKJjhm3D2GR6k9HnFwuy593djTez1NrUN5ysVoe86c9we3jZrBBEgHn",
  "key11": "5ZFNosXLc7nfgARqDaqf7Q346R6Gd2YcBFxnGzcBHAbyzEGNJcWvEG2z4KhV1UWYWnnVKu3mrkk4SiKohMnSeVbV",
  "key12": "3gGodFtwXye2bXz5Pb5RfxcfELEM9gqfrjoJR9zwV8LoZFe4DV5rq5NTKNcdDXvrgm8nYJs9tJjCTnzh4eEu9nNr",
  "key13": "u84NmPJnP93fgxon4g2ioYBGsmWNbKpg2VxrYYKQAU862FSHFjgNLP2TwYdJ3sMLQKRhnUcUKz1hUDp6W5yyK9U",
  "key14": "iSQhfLag7LuZGkmCJYtNPcgRCyHQvhA8ohwrzZ3vDLgg7fBRScQf7LBp5Df9BYtcbRqaEjvgRn8s1kKzVivAs41",
  "key15": "2unacCWPjbcsmJLBheRy4HpmotBMSdQP6gNBAnquwQqARPjJMFGbscSQ2GFHLRDEiFNYp6H9rDVvKJFwjXgWgE5Q",
  "key16": "w3kPhzLKmQwnQSZZtuGDebaXUtx7fU55ckSxE5pEZDTKz79JGuQHFzXVTWujritMeeK4QHsq2SbRPc5xTCMAG27",
  "key17": "59wionKDVzPJ242oWZz9Wq17WEAUcfa3YXyVGibMPbYMWGRjV1VoYEgCJNghp5TMDX4Uv6MU87Xrf4UynFafaUU8",
  "key18": "2tQ35iNmTXGfr5ZGowcHi2TQpbzKv4VvX4XMF87N4A4iYcDLvcNnmpSqAzw8E3HdWkdxF6YHxvTdrjdMxLba9NgH",
  "key19": "4FXJeG7939Y6dHtvAVcLHY1F6TXm8iTm4fCvDTv51FLQ8wJRYPUwLZb4Ltq5A2uWkJS4gz1uKXgnbiBKu6KC1s2z",
  "key20": "6SqV6uSrpXnhT8q1GXPh3TmeKHcWfGa4P5DBFjRdh4CgFuTKR2gfyXYzJj1nN2biuNUypvzkg6fZZQTbsVRTCkt",
  "key21": "5tpZqEnNLDtnuyDVrvLsMPZWWwvxPNzcJbxUGkBtcMy98aVAjAfiRTdTgwYJ8sgBzbSSQ6BjKUPDpoMtA7xRmks6",
  "key22": "65QBpN9SBxiY9TBeYXDLXgThUn3VAXSTt3TCqr16X2LeKi7UPPhAj9sWS3mLhVTxCtD5vhQTa6pdNUHRr6C3wi2k",
  "key23": "3mtYDVA3vbw2VVjdhC58WuuMNducAUG43pqXd4W9GX2PmdJXWaHYWurmT2JQJGs3T4xcZz2qsaEC5JkbaSQkQbpz",
  "key24": "391JcHfhHb3iREPEuVTuhwu7w2N7bV21feujFEJUjq7w3SseN6fzb2RRwg7ABjFdifhxqEgQczYycJkh6HtpSqii",
  "key25": "YerQNFN1PXkjkeor38VLVP3K1u8d8dLkGrp33sero2igP2EymQxLmbadwb1ZEs544nrnRazQMTyG5EbJhtb52WK",
  "key26": "2P7X2B1wZQw2AmpWvYqH2oaAVwfEpAs8a9HW8r6wRiSLLFaGeRe171MZkMH5SbwEHwiXRYQnjh2zCDmJUVdpRJpy",
  "key27": "39Wf9eXucAJDt5Em9qyX4SRgv6D65FuFiH8UzTdrjGxdHcGKfNU8qiBZHSuzXhZfczxPSuo9PK1LJk94Wsm7ZtTc",
  "key28": "267byRatct1XNyxLZDnapEvzy9jF7uvWkF4Ab6T7tByqbnmwNgZ9Dj5DBG9U2mFRgwmrZax79xiU4MoLtLNSUefN",
  "key29": "54vJ8RGSeCULrGHjyb6SHMz33A5yXaU87MJut5VMtqgaazkAS7d4oVfv4FBoXP3pgHbfGiV3qmWNuxnajZm2DLNg",
  "key30": "4VYX68ixiJz6f3USiNQkkDrUXMasZorw7y8foogVnfoM2ervKX2m6zycxnESbMjLuWCCiEvuqZ4cukUx9kK63UB2",
  "key31": "23YfwaoRcWH6VWP4ZZHPohUmpGTNyi4JG8huS7vWNMCtsGtxsHQgJHrbkBvzfj1Hc7FQRrrPxgVjPr2fv4bmwtBW",
  "key32": "3tHFJE8Lg48vxht9aWS6waFNhiKhCn1uVMEEDB9HfkCut9RevPCsEHbf2sfBefiAK37M7jFaxUVfD7beTFhQCAxw",
  "key33": "4sG8isJrxsbD69neDZZwY1BpWTUfPnJ4oiV65j4kV2TQqRtpppSyEkHjXG6iioK9Lq1ifFSEUdxUCUxvgBb6v5jb",
  "key34": "2WeLbRvYu7CzNubMEV4pP9TLNYDUFLBES3WtmwjkiJr7Sa1NBepiuoMCTp4ZtBhq4PT7YXYuxdKjDKLFbC9JrK8Z",
  "key35": "3rfr7urXyWqz8RsRCNCLXyRZnu9KQ3Zd2HZUTtn5LoPhM7ZP3rXaNGZr9VEAemDW5kZZQFkEsNmywUTc2ecd5HpK",
  "key36": "iXH8JSuGaJmVeLrttZjB4hkAoh5jp3tTK5yi32U3WQeuo4dZvK8eybwdLHJiyTQWtLwMkCuMUKao7Mdw9nXBY9y",
  "key37": "67h8h2JGSzKvPBJDVWNNj5GwLGH7HBjKmNo8g1VPJZyf2aDLkpzmgr6NnYxyk64SgUwcE11eoAQ8vUK4RaKcgxZG",
  "key38": "48QuBgVQmAaM4f6P7uwZBMZarVUSmMuGFBTquMVZyicognaaRVDRpearP5VQNuQtB4FZJgVBm9MtK8oHPDxw1WC3",
  "key39": "2HuxJ9KwyKxpkHMU8PBgBSK6eHpqQd96FkajtWTBDQdjCWVgMD88GjT59xeNkHCVPkutNzSodNELtTRYQtCbdxpt",
  "key40": "55giosCNP6Jooip22MqChd4qDFNY3rg1xcLgrC7buMEFXNxeATWMCJ2MyVqJ5KXmRAsrF6ZgT1fjYV7U2H2mErup",
  "key41": "4Dg8sGAir5pUCS4dHjamdu9tMAK1qKz5CoRZUfQ33iGUVkqLaMBsiGoqDfGJ5jwm1HEnfYqvtQvti758ydZz1cox",
  "key42": "4JSapG4nF2pn7rdceCCzS3ntSAbtReJ6RaRrf6bd6iqnnLXJvEgmFWYcpYnq2hYNU9a2MrTa2DPveGZ7mSGuBQTP",
  "key43": "UEUZ5TUDcnWXJ96MWmvZmHyEEPLuNgXb6Z7w4UZ7icG3spSg3JVYZwoz8bDc5FnsK6ybPTdc7pzBbJYGUGhQS2S",
  "key44": "3ni2PeoeLaoBPVYfEmou9dcWkrYjgVSVEwYnjVA2yUBeYiHRxQwEZNpiwLu6WFetHw84m75hm69H5Sn8vcoj4aXj",
  "key45": "5v7MRULybywB8x7xY6mvntZ7nc7nbDVGTwowphF1znzkkJJBtkY4pJQsHsujCqyjTe7xDnzrrXKNsFP46ksgd31L",
  "key46": "5uumvwfcAAsB31hrHYERNftpTX88ehLeKfcHnA2dMofkqdZgt37kcz8PfVDvGmQhszkqascHZrMvBCxNzdGydAAH",
  "key47": "395uxXp11sLFB7ynwkf43qBNSbyHQyN94aNNEyQH74e5ZiLpWKWrkeL3rx3qzG6EdGHX3PikD3LqC81ovBZXEtkC",
  "key48": "4j4nSj395yKGuSFjKWeQTMnbjAm559qEZw8oBTNDzsA94kjXAtELpE4ea9Mqm6KDzVZppG42v9ccz7qbsixyviLi",
  "key49": "zzYyYirUSDQyT4CpxxW3LLSQe3b2XjGWsLKDbUXj8Wd3BxymjYzkcPbRJQBYnNcF4H6gLSMD4DUoTBQbp5RU2S7"
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
