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
    "5tyg22vDtjdTDVFNKNzJM2wzD3BkHc3BkNCy4WuNCiWV1qRPsVZQoLf3PXL758Pu2xSv8Le6dY9bKkoKipqXuroj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kz3Pue8npUPd9kixDTJ9ZuoY7oyGgmEm2ADPRDjE3LkmnTcHJgpphKR5J3w6TTWNmvnonogVJu1xxZHip4xBHRn",
  "key1": "4X5YGGsoEgSnrZDiT4zPL9WZQ9sdnbeDffzHoueWMTcTrzMzt8Vn6CqXLf75yxM261BY7qqJamjF7o7ATXQvRTFr",
  "key2": "5anQBkiMMwAiAGJ3ZUQtmTL7NiFJoxtcoZo1rU48bjmcyUVDpE83cY7PaCaivT3Py6ZraPFz3zw9JJ1WxtNe7mp9",
  "key3": "49gst1QPihG5Y7P5MTi4eUsAKeWQpiSCetEvuDr9E3gL5kd25aUYdsSBm3UhkMA8FSZwc3V1sazvNKJLwJZK2HY3",
  "key4": "642SrLgQLkbUJ5dtvAA571a5PEu4N5DF48fsxdB5uRvzy9SVnpx9hqHSoDe73EWoPRu4AoN6Z6syuHeTnfTDe6z6",
  "key5": "3JzKrMYt4tLjFt1qfzV7SpVSYYKMsLDHSyJiyZQpcDLwwXceqXkWMwVsHSqKcz1zLznwofB1x3ziUd75EywMx14J",
  "key6": "54QgV8J4PoNsbCCrSYo7yCmiFFE9QLrexrP4rwqSkVdqWD21Hti9TcyTPpDGz4UtehyoyL1Aq66obdMu8Zcogg72",
  "key7": "3XFQCVtcfP4yM5dCis5aadpFsHPsLhQLMeeiiL8EXCdkpmD1cQqMUpMKRScTMBcTQHXVrn4MCsbqNRXWKKKoGtpL",
  "key8": "bNaZ8QeQNqN95xHc7W6t7R2C4DqiCQRt2PzCYXwSJAxtPxUxWjuTtR17Y6LmUoBjUBL8hUy6Jks1tqZr16iBEDD",
  "key9": "66wXN9SnACtDdeJd25ms7tAnppizTQSxsBHzWS4ryXMgazwLbXECGXx6jqEx3k2a9XMPRQeGAG4m84vUoptaGoJB",
  "key10": "2YeRtmifBHv9AoARJgMHaiXNnqR2od36paAQJQDkTRYPXeR1ru81YsRZi9GwpLH4zxKxLoUA6cmtU13cdsbAakX5",
  "key11": "4MjuM1spSpPRRYKrCfB7wQwn5AfoW3fYwRTaGFLn5sD2pbMPZHJZQMGCbHNW3NBC2xE4vz5hJiX9ZRTgjNHS2HfC",
  "key12": "2z2JhzfJU3WM8cEPEo3xWmzNDyJZCMqEq4qUJtqHG3pLEaLdA2fG3XDmHqnReK4arain2JCRZ3J8Hm2kLbb2Rs6y",
  "key13": "5KW45iD89J8EhvTMhtBBqbYQLrzYTWbqFom9CbKSgy1Hp6RcKbAyRUqvKA389bH2U5aq4kFSthsXbx23nfKpM8NQ",
  "key14": "2CRtcNgH3apqy3MrsEtc9J5UiHDBkHVu7J3W8JLowi6kEBa9vwXERhKRa8CiT4XUVDfodYsKxEkDsTyHYNTnf9Kq",
  "key15": "64TxEAaWuD4A4Zc7gnN87WeMaEsG71K1boTXuL7xDuAwQ5D6KB6wVtoMZ7d9MxzjkaHQFrBhMCbqRN4kLmmgRWGX",
  "key16": "2DKvRPb2NPprWazVszZdQLAvXc6CJ1k9nSwTXnhcnFExgU3rQZSCiwkgwwHheBVA93iG42UDCxUduCFP4Xsw5PRP",
  "key17": "3jeG8AFHWLCDkueokMMo6LUZudBZMZzwL4Kwh6tYPCQbzCayJ3UaF1J33WxxUVMvwQDP2Ty3rc7mE5KnqRrBcrQr",
  "key18": "4mjGYUYPhxN3G9kPCMQEXpp1NvLPLKPvAxvZjDaVij2HwSs7iZgdbzfFVqMG86i5Cvp1MsyyckJRVF6XnsZvDUyS",
  "key19": "2ThTpoh89RTrcnMxnqU12WVu8RBbDqDezo43WZ5PbfBsVS8nTNGQkyxyxiCniNMrZkTC7rMAeJrb7JJ7St6R1YDS",
  "key20": "3Pre5rjS9zwzNoyeDTyGLrmRogKA18jWcTwJMwtCgUZDRM7SYRQMtXThZG6j7H94xnXumt7TNC8mas1mvkyXXac7",
  "key21": "2nYnAwTGL5X2fBrMi5ZyYfDNeuy8vnexcLivACrbAZfsq84KDCSMon3KNPaqTGkR42GbeQKrWzH3PDXqW7sMZziU",
  "key22": "38nM7tBR4xHXoWF5MTsmiScWHqEWDgrPWRsvSsDwtMJokpqXV4Gh5eHkW4viHRC44pEtQGne7x9fbtJQYJ4Hi2FN",
  "key23": "2dsefqS1r6JxQQr1SokfascixyFTfFNm33bQRpm5yNa7Xn1Aazj8ZN39eTHc9xdC78jbB4P5AgYMHU4MupiPTe7S",
  "key24": "e7q6EpWCHDL6Tt2bQxFJqAJUwUFQAHLy1kbJjfWuuqnUJzhJN1jbAJWNzCcjNhfXSmP9zh7TSWbDaCbge7UW4xY",
  "key25": "m3rnjYNo2A4aJUq1SZFKYTi1kiMhHXgyepZL6tnR1LnzeY8hJHY4QyFzqVR9D66ek1tZ4pJaTpiSBhBZAdMH3vk",
  "key26": "4D3wQn25NVsWGaKCmwfBLZsbKCVUg7H9USRD6SQCdiUvoHWUCwN1v3tNXj2cnshiGXKdh9M2wutoSJWJrjuvbEUo",
  "key27": "67kRyxiSP94x8biej5QwEGXwQj5XkoNzRvRNGoZiASXwhZEEjBU2TTjZefz8UWasPRAGdvgaopKh2qGAvo33AnHe",
  "key28": "n7CTVEws9UcR8HgVtLA23Dh5McVap1j9hhJ4JuuLyCNaVAbF28ny5ZDs4pMcQBADVbv15akwYMvn8HZs9Yzctx5",
  "key29": "2zjcqJQXnMfp4fKfXrCNtCdcifWtbgmbTswFFdRzLCxKL5DzFkHoYehapJ44BBVqzC3KTFo1Jd5g1pcKEFwFKb3c",
  "key30": "3jJqZ3yFpXTiGgUTwAcipiLcexW8uM4Tj25NTWtnXnotgTcfFUzhc9qKJrBBAfWYAP4sboeYhsKyoUC6nVcyaJ3m",
  "key31": "QJmRvPsJu1qRm9vGHEfwoCjwGm9YzDcryKTPEoEwDXt6FXjpsGVKyr5MZRLWhgwsGWLA1GLt9fDde2AkLGKinUA",
  "key32": "5Bg6s8VE5WxqjxRuk9f12xurxmXwVRgw4JLt2o58ZGN76eq99dUbjqgmx1VLNcduaqm8hagFg4vSeFZJfhYnJ1Ut",
  "key33": "2gVX6kZ1MJhXMQoMPErg4kxgWj19DMXK3NHYaRMKyLaEa4t6ncMCadsijd5fjbTZYHXyc53tvsGj61r5xMdZLKUP",
  "key34": "3mbzgmZCaGTdaApTmVU2fyjGAp97iErozbNqJqmTupqfyD1C3dDJzPxhRbheLVYoCFM9jy3BH4zmEWv4cUSdbtMd"
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
