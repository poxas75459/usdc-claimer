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
    "5RiGxAgK2Swyj3ZsdVPd2jPLVku2UK3gwcoUUEBN5hPXBs1BbdvwTsJNpSBy3hVCAHHdWZfoAQJ2T33ounCCFtMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61TqjfAecTdkodAsXcxjpNxUusCTQ3gAyfwJ87VdnBZZSjM8dFYVGztgQPrXtxh9GeBLmmeqXzuJ7PF3dmXuo7U5",
  "key1": "4egnrnfo9oiAiwyeVZUj8LiPskHB56mvMPXAVPPqdZDRAwM8Tqempc4rjCAeuF5kjuS5QTG4PXV8Wmq6QR3DriSf",
  "key2": "3pmDeFgF1E2UVzt8bWbgN4FrUMJChRntxomBfiA3389wNMKgRrc1KWKompHGX57y8WRAdTx75N6HogDNgkRMwp5a",
  "key3": "34UqRm1eV5KUWdugwMM2fhkW52YmEh8tnWa3eCEoLknxAmuPbvjDmFStTdsGdNYXk6yQyxigbkDiimymUxmVf9uX",
  "key4": "FsRtaYEM5EwBTNpYFgBi7fQsi2rTd3uTUfBYYcM6y1ixRqGmEupiY9w1kv6iTYsRt9d6TTF4gvyN2Xx2rRQgsDC",
  "key5": "2LsUbQaSqG3tJsgXfSFCPeNEJ8YwiDP436e76fJciJSUjhQ3ppMaJLwuuoh1uGqw14qKo4MXVDeg1VVuhT3Rqgef",
  "key6": "4ppZPM8KaE6auBRfDKabpTdxnH3wRhBr4ajLL7ZCEkKQ5e9u9QurGUvyxenxc4o7yMwjBsZL6F1grBA1EUqjEESB",
  "key7": "21mtToGV3PMCX6d8sTAVcLAEnf3DgVoPgZZtrJd6m66oCarJxfFcuqsYqRpdeFGRhSXoejMHFwCCjpXfvhDRYVQ9",
  "key8": "2skDcgyVAtbUV4krU2gkkhZ9mJsyvmYT3ro1uqr791YSb5DkBYVcRr8qEXoy3W5MZL3yPsLC14AxVdRFbCDWxrC9",
  "key9": "51GWJAoSfMonxNw97PxYx2Bs8jW97XfnEwdjfYhr4i2E5eq358F2veFvrSavSwXt12mcQvgnYGyPUBMTTaMWGCnj",
  "key10": "2Vvpc7LuHAYhN8K5evty3pMw46Nx3CRFW1Ldb1jJGKf3d7hBixZfNWp9JsfZzh52S8CfP8DuvbcD4dZMKeQ8sFVc",
  "key11": "3oMq8qG1sbjzhG4du7YBjDD5dSWeshgj41fXneyoAfYh8oZ2QiXGpgCERWVzgsWFVpmd8ZP37JYCbFtEtTm366D6",
  "key12": "4RQDsNT4coFRnwovLfMV5wTbFkpD6oVWJULRhvopie8HMH87AVUwemeMeYtVr1KLtYYEtdpE5oCggbwJUbS7DmaG",
  "key13": "5QeECrkuRXksuS68hXVp8Y7e9iU6L8R8BrH94e4eEngVyUGnEaJmrrD76ihGrdGdjs5uN1V2qRm1hPiC7SqoD3Cj",
  "key14": "R5AqgAqzJvUtYj1Qzkc1UJ2eHdQ4Qj6U7VMFW34cst4jMi35jweagvhTWq43UftRtyvPMxp7QH5U9b6CkJMnoVo",
  "key15": "61VcHrNpomS8HH9aoboc2k11a1fREnWSx2cz1qqpLgksk4Srk4fVFdMWFDdbrUQhCrq4DftYCpXLuT2xwZqN84x2",
  "key16": "4NAXEYnVFhM1WDbCprhyPNKTALtYgHr6dmk3JnxmKzfPDYMvCX5QQQaeWc4HUU954KdnsipURJ2PxCC91vLicqbR",
  "key17": "3To2fMWnyWsS5zpmcqmMEXpMNTHMePp8iVGNQaMoU2RRgS7LhTTtVUQLFhduN5t6G5hxKqRhQaZMPp7oDdzaJaqQ",
  "key18": "4rMt11nDcyTxe3icmxWz6sYpwXT8kiGfM5PbUCLkKWeEVL1EnHEHgyCqL3U6uYqfTz9fVkNDeFUGM9FbpgeSGFZM",
  "key19": "xdWjpB6X4VuirCbHhPVuqQUh9REk6uatFMDWMc9jhPF8jsYY8ZGvUKdZAgqiWhabEXgeWbnXY3wdc52QZi4hctU",
  "key20": "22JVUmKKc6nFcnsLvGFKeBy5iHUC8aFVzqATuv6MLdSqvxehhz5fjpSmArLJYPB6nNZuPjgZUpZH3vztpmxvivwA",
  "key21": "5FvhxcvwrbGnjXrZKiZgnGsgxCMRDRd38KzJjNknkGf9uWQRh1JvHVZYkoKVhgtLog8QHZST1xaEdj1rU8GrxY9m",
  "key22": "2BGTqhAZmoJoTUjPTsKW4ACi5JxG96ZzyMfdMwV7nhgBvvKXDQve8ZsZJwv8UrRdfpchLfXepJRjEVzskpm23Efp",
  "key23": "52m1TGnptc2JXFJmKDMzHbyDQvKC83KwGxGFg9WEHesm9NecQjLLa7f8dBXYyDho8qscNGpQYxnqwLTdLntRUKQj",
  "key24": "2NtyQBRBfWZUK9U7XCKPtNh1346ur9KsEnKkGmT348NLym9ugEFxN4fK1xZijnFKNgcdw1zqFtkBTZJeHAqzidcy",
  "key25": "4bjajfJhG3iZTM2fWp34mX6soJWeCzVcvhePweH968g9sWWpt2HFFiqvB1rM3pwWddsZ9WEo71Mj2uhg79zKCnQT",
  "key26": "4YMNoYNM6jKxYudTkwgphDyS3nsBbmtbC8mFJDvnReLGH2SFTsqeBAG7K2GvHTQJZohrAnqxMeK2CtAFQ2qK5gFC",
  "key27": "3KQgfxqCP49oG5mbpHm2X9LTq6VFRSdwQwtfTeEVKywtpi2fBTUBWWbMZDQWW6RHBqzYRpoxjUkZ4benUJbNNAHk",
  "key28": "3YJkjgfVWnakEMn6Sy28DZAeojo8TzwYsQXj7AEcZqWsUNFnRQf1m2F6gsh5DMmiGAPvfSkseDzARxPNAYHkMXBr",
  "key29": "5WqGPHU7eu3iRfEUnGqWM78wedR6C5WbXAY25n3xoxzqj8pd7V4kkmWTkRd2HaKAoZR171mfHtkzXM6HTaA4yguV",
  "key30": "4AAvGRMsqdUaCY23W4GJedhX1LEAgjqEPpGCDxhvGhGf5dQi9321ftuLxryCgLR1f6fgVZEA6m6oqjhxLjxtbV4N",
  "key31": "4MQvC5ZmUJfDC5efYSHbwSnn5Pdw1C6FNMg1fNj22nXibsRBhNUewvT7aXxJSg8V3xuDfvamychjW3LjcLYVtfMF",
  "key32": "25eU5dbtSS6c4NLqG6gKXy68FktoGEZyuM1FuQ7XZ8GGctrBcnj5ogtP167zZ1KbqaAjM9xakh5TJFrPmpYbPnRg",
  "key33": "3jwadAjxz25ZFfauX8yXZbPH7Rw5dnBY5392G2Dz5g6Ezh6PtRq6saT2YQBWWwiWMyM9s2DUt8QrfocZiG6d7SVq",
  "key34": "4KZJgZg59thoqsmYwYtgSpnvva4hhRfWnCGAfRNWpauTvhfnbFecUkXX1gdyt1HE41ff8GCRNCpHMHZufEwFvVaF",
  "key35": "5qVizGR9cJbJksQV4LPBXFHkB31jVLd9DrmpxiAzAFe7Kf6oQEm1zDD1R7bGq3mMHXMu5WZwCh2z8UnPY9e3rD6e",
  "key36": "2RtAq1ThMAbp2hvXaJUfNedGx8mNqYRR1Qv8kwPTnXeQFjaom7eZ2uAMn1YVzUwNyBGMMfvHsccZqfTi1PvWUqGB",
  "key37": "Qs3rYnYEpHSDYwGTSY8aEhJrS3gJcdztJUXS5QJ3XcCLbgGxhMDbU6fFvDqstTGvyz9CHvFEtjQ64SQymTmTyhr",
  "key38": "5VdtHCqpgQ5mc1vSboGePaYyY89p3bFjefBFhc5Sm7YbZNEUkPBUYgv4XntXz2JDJMBx7s6TgHTJ9hf35BxLVjA5",
  "key39": "3CAiDVHLNu5m7hQW4Lnmw4ykM2zu1ZrEuqyGDCdKiwDi9eKEqQURSpZAuXNyh9CraTPgKrJzVZNEYJ6kfcMLzibF",
  "key40": "2TfbnEkQ6NNKUgPULY24AzwfMt4dxYcEEpXGyY9kNcdpAhKx6GQ1JpXqurPD4QmnWFyric6dVpEXYfhpMaFoDnp9",
  "key41": "5mqpm9gaRiyNy3kKpzR7CcoTWX96BpyVe3ZW3a2ebaaGnGRjNJN441dNbBVLticKDFL3y3fGzDf5yuE1aiE1o23n",
  "key42": "5ktUfNxaskktH3kTAPbuZ52ogFmrsRcyR3iTSjDkgcpYrbLELeAkWwCzQNuSZ8NuSSJCNduaZdJkaK29R18hs78v",
  "key43": "3hza2odMgiCHjzpYKYVaaY7bupzmLjX1uFjeD4TSuCXYNEirzFgJym2dJpgExMDQV7yQrJUJvg62Gu6NGmDPBV92",
  "key44": "3afmugmwCcDbqimgPpfxywXfzasm5UpHjWNb3uLEK28BxspEBUCyhj8Cu2hxoxYgAxGDxpqFcSnKnJVwzyCYDH7",
  "key45": "2wnHbnbspHPyqbw5aS7emQNE1P7YB7iz9cUxgHxR1jbnZgCatbwMGSK5RtevAWVqciCHJNn4P6iKi7zApyhQSyyX"
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
