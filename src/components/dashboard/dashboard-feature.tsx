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
    "4Z1cbnX3nfEi7kPKWNu1sF9WFXKFZ6wyK8XYC4ZWD5ZwrZYiFcfoed59twDYsym5y2sMUiQMbjmLChxNBrNhPLNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N8CQNauUr9CRDPdcnuQKu6uN3Z3nSZTUhM56xqYgXmpJs9YFrr3RxRDRojWiyaQBzyaKRNfB51tzfwEwMtm3aJk",
  "key1": "4sDRK4ERUwSSWvL1wiQENxwxJWXSB4jW5cJuTuLSY643EqQYvdrYkNNdSEtBXPEqQUqrUkKJ3eRfxmSi4WAFjhXQ",
  "key2": "4VHoZagNrwuZJA8oRBQNFuajFRd39jjZB2M6MEPz8CR5VkhKG9P646knoBh61S1sg5Qyi3QhAeoVGJC5ch6cb99T",
  "key3": "2N5kTLccKKJUQfzqEdZJgbMincD7q4NA3TeoNAzfyARJRVJjN1ohcJYbMeHycTaCei7ix6iZPKSNmbfzAfi6Ed7",
  "key4": "dLCFn8fRcgW77YmG945Md2TDqh9L9YM9Vg8kcoVajFhDFseBDosidZ2QacRyfeobNsSMbBfpLGysFzpqPQ9YhEy",
  "key5": "47n9DsFwpni3z1T2XAQKwo31c55P8PSKhs8LBaRyVfKoQrmkk8sU3eV9VnxgMrD4eLahY8KYo1sUSFkrRpj2cGxX",
  "key6": "2JNezP1ddbwf7wTBnzdtcBTLHd7HJx5expXdR3rH7YUsxuiafK1tfrYjeUBcap9uehna6KfKhi7GtEQgsN1LTNQC",
  "key7": "4rBJQ63Z8mgssSUQCxLwoCfkaQDvsrGVxGAEJM5QgtGnKiCBi3mSRu5pcGYFMcLLvfmybjvPuJfoFuXDTadUtCRy",
  "key8": "3xtMu2acqsDnAAFHorx37wXzuxTpfrhoEwAEosd9P66XJwTt82WLci2TDrFHDSxKPr47JYNiZuNKmM7kvBwWbwZP",
  "key9": "g56fqTgp3h9bPAGmXZWXY2UAh2jCs3ptPmz5h8qkZGbyasPsv72mpWKkdVwxwa7pRs9m42ih2UUbmmRZ21YjQRJ",
  "key10": "4E9ENotJ7xiUgQjSqCMJkhM1fPkePXhH8crVFn22HvMUtmenzGStA8tGHrPqszJehnwQhbnTAPokErrWexkYDBLT",
  "key11": "4LbRnkvgwPA6MtLAPotHsrbETYXdcgNiniAdCtacwnJxB4i1PzpaBxuV3bPUyFMcPNmztxSwbS71jLDpX9hQRCiw",
  "key12": "3WgZfyL39Kir9odgFnCv31GzLhVxsZ8nZ1YNCygnvVFrPrvaa4qSGhmapRh3i47vA4oBVGXLNo7w22d5Ls7RskQJ",
  "key13": "3E8EvoZD7CTu2aYFMiTxz7adjE228jDbMJVuyN3Avy9hEJ8XWmoiZqmGVTRbnQT4W3CTWAmUTnhbtTCcwfmAiLAo",
  "key14": "51KvC9rjFvpAWCWJzSDMGwHwDe2uGYBVApU5XLuicMSeRVHeQRm62Q9n5R3aHiKdKk2r74NBGQiqFdC2GAHmEjRs",
  "key15": "2VT3PX7sqA94Wu6RY8wyxXC87tppQo6iYiTXaEaeMFAZ8hC8gUJvyuxBgcYxassBeuaTiAwUzfLuukBUhrKMdiqw",
  "key16": "3NxSs3ucEAUtdw99D6UefQQkTYuERh5pbAxGb7mYuudEW3QBL1AedXh1z4dLLwLxoxQCSGMGFoQq25wi3w68cn1S",
  "key17": "8B5GLrkVo2FnWrMSQqpmEC1xn7Xbkr3f8jPz5nVcDbXJUXDEGwNgZcxw1cm5B6yXMcMo68vGSTQ58z2ywCwhhh3",
  "key18": "qjbkjpjnPUw55peh3T8E3NWiCCsXL1TM4oZa5TCruhBP98DRur2xPi7e9S6kMhmpQJDNniJABGktvTYGBpRjHJr",
  "key19": "4EDfEBWMy9VtjnJiDtYh97V29qZyMkdqUv2n9F77GdmVwrCiDXRxRh5LVX13JJcMvnbEFmkEGqNLcMahve3YUwit",
  "key20": "62gTzxUdhjZATymavZTRwLjwnGRwtkdeP86MfFfejBHrQ6TkMAgsH74YNPP55fLTyMKKYX95aeue1nEfDGcnJ8RN",
  "key21": "4EDZYSjxy98NTswr46uf7iR5qKma5Y6ty3HW5Ktg6AyGW191xxUcExBJQGyKiETmJegG4qcXommuKm71cKjJCDUs",
  "key22": "2z1dL1teFKANK5j7nHLab6JH4UKCs2gAfeWerZms5gmoZaYV4oUY5xHBRVFfJZN3zhBkwfZoQNEinrw15wwcaMGC",
  "key23": "5qZycq3eLh2HQDgEYdfRPz1h92ZuXAvAz6EY83n8U45fFPCYRBc334ZFANck3hBG2wNUVhAzYKG1Pz4gvSyCqaB2",
  "key24": "3WnvgTKyxTgykat1LgJ9XjhEQG18fQPmUDzQ2t8XGNrrZxoSrfatMpM4hjubs8HUMuYDsM65yjcG3oFp4b6ZmZV6",
  "key25": "4KAbZXxqPDFHohW2rDnszdrnHQnQCFjHrzDjkaLLnGjRvayiXwyJJUzp6AJhxGUmGVr4dFr7XNZriqe5k5jffW9N",
  "key26": "4kV5YTcQZ6eupckWiV62y3U6BDZuihzz1RFuFcRW4EF7xiFggQ4zQ9FXDnPGu6JvWKkkuZvaenVTj1toArFu3SXQ",
  "key27": "sf7y75F6FADG5vHsbro3P4PFtQRV7vePGG9tDi8wsF1PTS3CX6VTGra4tfL4PU5gd8DguzAQZ96pwzZFgBMjsx7",
  "key28": "4WqvqawafW4jKVM7M4mNbx75f7rX9DFfHo1JH2UUtraH6JUaYNsYrwZK4XQYcULT39v4QhX9Cp7TpPTUkxemd1an",
  "key29": "zc7EncdpZ9TYh49DXUYszoB2J8Bo1UPjPuuc1Wx6rMnvvnesXiKcqbmy1ZFqwEuqqtfUEhfTFduGaUh8AVfC3y6",
  "key30": "2AWzam6jdcW3VXUtvKGzBNWahZLLBY5JpsG13MzLaZdpfkV36jWm3SYGTTZWeBrJ4BZtQrEp37suRpGh4L1PVNKL",
  "key31": "3YgCbSR2Pfn6JQfp5jvZ5B2DTTriXm6o6mv5iKaodwtVDzkVdwNfneAvS5suUJky2d7s4Lk3gWzyqyQWyEbMpBiB",
  "key32": "44SmbwyEBB7eNrnCsdZG7Dj1s8sWxacgq869vFKPA58kbKMevf8z4w1zAfH6W5kTwUcBwNA1RG7VRrSnF58PLURA",
  "key33": "42vhXCQqHLRUp2VS6uUMMhyQJbB9MEWjr8zAMKtG2XLjsR39Tm6h6GqEMmrqoxga2qHYez9xT5p2YGHsKHjB5P4S",
  "key34": "3Hxb987VfXAJGdPE5MtTrBSkALThtwiXbLmjBzoURrU6NEELvBFd5ek4x1XdiV56x826xLNqsZK67J71ipZPawgz",
  "key35": "QyH5495Wx6pNfbAGUsHG62bWq2UsMNjAjkUSKiY51ejdaQfriDiSRkYjFSAuxNfxdMbikM2ijY6duHHd1YiMSQF",
  "key36": "5E7bFZzjBP8ZA2rBr7u6vXerayne5VPUZjbVQgPSDFLS77GVAnjuAhFoVophjzfGmykajhuecBeYXrGPNFS7NSfc",
  "key37": "3sRhpkyDELK5aQWAsmKMLUXvKbta6s212qB3J9SC7wbx1qZpGAQqszboEY3wethg6bJzCHHeTdn5dFityCgmATpD",
  "key38": "UyxzPUjsKvYxbqrE4hs92MoytbPGgeseGNnb2FHh18d1653gXmH92SdESoffzjCFYy6x37n1g5wySxYsRacJyN9",
  "key39": "4gdUgc9GZDcpj6dz6npBCFuMi66MxCEm9vB3ydGy2QPaBQ9m39mFeNGCmuTTRHnyyxqyYvyknqVTenaCdEzhbTSx",
  "key40": "45Soo1TeE9JjEHpayQyREvWdTquNPTdghx6i5wzvsPRm7GBQ3ayvEtWm1vnejfT4gkUXowNNm6zyHop6iRe37A6e",
  "key41": "2EHQWqYZeTnrwgJ9NDTCixpQcAg6VvTbCmGTEroLbatSRRdGpQUc8ohyg9WrR1GPAgQui1bs6XGjD6EEhDC3PPPF",
  "key42": "38ormAtebFo8F3XWPjaTEXr9FCWsBs84RWZmpHwj6AcGHJPEMaHdBmt7nChRXk53HLeot9VWXHEaK3JFer4v13ah"
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
