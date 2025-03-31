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
    "2RT7Sdo45UhG5rs4MkAt3LAtmyoQFKnKiFWP6j9psx4ue6R3L9Kavvc6y4yLHyAWvmZiZnFUEY24TLZvwsSW5qcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gu8YMCMSL9AfyTM5fD1e1sJguKTKv1rHKRHFVD3vPUyAZAWozo3JH5C9RbnwfD1FiMm3YFRQ2HXbQVyxJue3pSr",
  "key1": "4nTVe7HWV4u2jfJaJUwnpRS7SisVBmnR9SS5poaB6PHBWb9XUbUvnfKXd8DoT3xiTheyU9CdNLzd4HQ1Em3A2sue",
  "key2": "4StatAKpFZkm2XRDEhEBn3DwwztR3uZtFJzMdY8JGUap1TPs2WGghWB5tYEhDhEbvYE21LbCRZo1hJne2KVCoiZ4",
  "key3": "5SPNzV7Xs286sv9CZo8ykqEpH8xMyYUosgud1iAvuyW3Esr9WKBG5zNB5suMZQBjhs9k243UjV582QrAg9pMfu4j",
  "key4": "3jzivBThKDeczAkrxNymrMNVYLPAY34b4u8DxZHqiXEoGUFD1wXsReUFvVPr5JJ1qTs27LuxdLLxj4VNkf3vN95j",
  "key5": "tBPpiFheY4htSrBhNw6ywGMox3zSikZiKkUy6V2pefFzaaDjDoiEPWQHD4skpYDp31zLVx4YuWXeHBf5SSjCtG6",
  "key6": "561cUA5sSMVvS5uLT4YkxY5MjWvme1xzbA6TDNW1JCzndbzHsh5W6xx6dSwZ6i1iVyLW64CiBELkoUVWNjVJBe3H",
  "key7": "5nhGy9XjpvMjwaUAvstAyAThSPXewMasc9kvr5Gso5hkN7apexdtnrg8s9caXin3rkRs8iHVusdCzt8wB9ZFx4Tr",
  "key8": "3tEaXCVHUZVYzaysvQQYfqcWNnikkMQD37inGdy5nsRyQvwXqCQdokMXCHojmAVwatXVwK5ENbT1JgFs12W6U9T4",
  "key9": "Wx66P7jaGqbUYZ4LtHvTCQ1NH1TNykSQzYfEPJf24mK6oBg2XoQ4s99wreT8MUHg3KpEJ93P2yBCG4azcHvuENH",
  "key10": "4yKycYwvWfaerLWVng89oxZdRTyFJ7MHvFRzFw8oD5Vq16ou5nZ9HdNbz1DN5qY3tTVc3CkujzMW3MxNKbRkaBcA",
  "key11": "5gHepVMWjh5Nov1CseChtVwxzuzdrBxEQoTY8Bg8tmFdhfWxL7awFg1BLVW8V1dtHxQChCEV9myG2Wk437wNwVeP",
  "key12": "gfoR6VbgCk549EvS8BJpaTNoguD3Rgr5bK67sucVb8kCpUCRzyosipXLzS8iY36ud8byyEhm2kp4zJ9VN41JKCo",
  "key13": "2aC2bRikyhebGeQ2WHkQYTfzg9QLzrqWceKL3MzaDfRA5dg64faLTSPcAZjA5hJC1nPsvBiRMtpLChkgKtBBiDY",
  "key14": "247dGq8RhpHy8GxXy1YPvrxQKpChNBVQaP3EiAP5qmtsizjzH25s85buvzi7GKoYoP2P4VxKAQhwmAZTu6QJWeH5",
  "key15": "35t8NbodyzY5MUJLYfLUi9QH3UeTVoER1MbT84S6nrxzAaGsqShLosED48o9zXzZM3463UE87MZHCUZULYPSdLRX",
  "key16": "3otD7ur8TcBGWhXuG68to6RDwxrKgisETotVZTVPYUNVUfKogNKkcfpdu233c2iKz4RTfeAQHDSipmem8bPghfXF",
  "key17": "4nwk8E2pp44un9ttC5UUWibE98h1c3zpzQxg127nty7hxwEhmWk2SDNC5QTBWXobF9Wr5cA2v7KSt1EVntZ3qNAt",
  "key18": "24JnrKo1GkoJFoqHsd8AXA98XDkvKdZhGPS41JWvfaXpwzpMQjoKDkZXCGqdtxZCwdDc8PoPM585Gs4dcuYknYAr",
  "key19": "49uN3TLEPMcvsvPsiecybj9P8YZr34ErTzGmpmCdSjA1kwzYD9nPkBgADW3A9FQawr6uFn8j1AAHCaDx1cbPUh4C",
  "key20": "2HTLSjsmkUXxJLeqTWQJheX3WQZnyUa1ZLvUCJrZM8jY9foo4jofms5ynrVMHSMd7GJW9oW2e3XotTcPKmooRYQv",
  "key21": "5feBkiPtbSrcwqmdEgeMjpmYUY71FmEU9YNHyBpGo5ePEWgaiD8uDUPRzzp4ryhoPgjyfW2R9cT5yt7W41fPmV3k",
  "key22": "xjwYZ83FWFZ1ym16nJ8HqAwg2BZveTJMsW9TS4ZBfG3R3nrj7WDd7k91bPBjJ4N3pjd19H7ErYVE6LnvhR7rgVR",
  "key23": "54WSc4f9ejMuhiZjS7havZXWt36H3diHNyewZ6ppSpt7SWES56ZYavMVmmKPrzNjs7YsLYHXfx36sFbHM3uijbgw",
  "key24": "4fKagabTWQZ21jHKEemUFhLCwaQuaAbRJTdyfgVnYrkPmNnD8JAD8feroHmF3uZA52Dx54McychPfS2DucPBrnHb",
  "key25": "3VLE52RvKWj3tW47srf4198XTxzrDu9jZQVEFq7Zt9G3DXNhTT19h8tsxWaMdEy9bDCdeiaVNjZiwyDBg8BWc8X3",
  "key26": "5HVfeWqMsRtk4jpZwXXeCr1E1YS1z8HmwumtcvBn8WdxM5hEkC4g4s5hLVCY8R9Y7XaNUyweC3MdvhJmySEQ13to",
  "key27": "9B2DW4b8kqduxTEgerD5ur88b63Fp2fXRH4xNiojC3fWH2NshWqZgkomquW79rVSwVRJNgWyECWhYCu7RBvrRcv",
  "key28": "5Qv8heVxxFS36dBHuQGxnchbe7cr8h8kBvLn3E9tAy4vS14YNquGTNfpVFhqxu7aRzZeM3SUmvTrf9kwtT5HmTwa",
  "key29": "3YLpcP2krwgyfRVQhxnSrzXYuYsraFq5dMzq2Uccbxj48adJV4NrH7HKAoZmnacfiY8cThAvZ9YPkZEVAixHcV1h",
  "key30": "53eck2tZmxJ7q5qbcHQH1sSTcRjecs8WRR5LHEFhx1du6YCvxNMeHt8MwRxe2feb8MXkxCtjQUWrutrfCdeBSuND",
  "key31": "2LceWdAtLfhFQ2sMhqABnew2S17JS7Q1BcSjqGfvx775V77iGgbMb1z2stPXSkLf8tbdhp1N2DX9FtPzffcLDSUK",
  "key32": "47EisY3ziorejWX9wQW1WLVBGV4A2LUxBTBookaMowTjL2h5re8vBAyssSqmraim5yKuy2wWzmSroF1Wzu84DxsQ",
  "key33": "2M5DYR1V2piWswqrDkxEk3hhNGtaFXuYKNyRbtvQZy9JSFhN26f9bfQgbayUdE3nAT1f24c58sAmUMKCzm83FcXJ",
  "key34": "2DyEE1gcrHZQs5KVTTg4sXbX5pNtWKV1RMGdEhuymqHBdLc8eKWeaDGKsUgz9FbxJkyoQ5JwabJ4nMfTTMqokwvN",
  "key35": "64bsZbB2hj5UcGCZr1oXhVbTQtebu8j3NmbHnr8wzCcKJCpjmUZHdFpF8xRdFSugwUf7tvZzxW5Nc7W5SE67n12y",
  "key36": "W3Dko2bhHfZd5bj6vAbBzsfBmsQau6MZnkVd8tFuna73921z7BnQX1JmxWZJDH37mGT3avcgsEJZuhpdiwvh2B2",
  "key37": "5vUoGkYPjDy8EA6zg2XgnXgr8SSS785K1LnVzCUxNZeH9dmN3nCUquwdCMTz9hVVvxTAqzNNJjNhvqNeBpDBnSAr",
  "key38": "2GtymYpvSbk3ffbqwtk27S1PubxqgousaKonQ9qL7KmZWqsB7TCcFsshCW3Ww2wyV7B3Gybyivzjs79jwcYd33U",
  "key39": "4yvstMaK84SqspUXC3vEHf1ww3Mae6TeERC5ipN3RaLfcg4FYVaJkEgi7AyRdYBnAxVrFsrcpKchGgZxWcq1fT6h",
  "key40": "37fiubNxtPSMG4XrtPGRHgr3DSaZ2jnNEqhMJtSFLKqMngyWGZ8VaoCuuCqWPm6jNS6GBjBRuYLEa6wGvgjqn2XA",
  "key41": "2yZCQKgDaHjCJhjGjbfFoR9jLXZiWw7m1H5mhWJr6eiaBwPsa9UkgBmHvQWYBDPrm5LHBjGB2yZXruEdTR1jAo2P",
  "key42": "3rRdAViQ7Rj811Pc1bbviGqaitUnW3n3fWQJkHdGdQ4fkf6Bkd8wQ2GfN8QdE2Vr9yNz6YTe666mV9y8pA2jzHNZ",
  "key43": "26BsSyWv72ZDuxdYyHs9qtNCHmtjXsbyJ5uea2pbddW1AuN6UpU5fq6zfx5eXaX6Cc7uDRZh37UykEk4xm9Zxg1o",
  "key44": "527ev68uzH5ddsGVfrYaWFNbXhfHY4hfMFuzZ3FAGSCtexPYH9S1eNdVLBcu8coZUSFQHiLGF1EMp7ebHsHpk54G",
  "key45": "4ryGejazCzk4D7D4WTDBBPPH9GCoSBdLDiNSXsmrhtVtz1oz2ZdgACQNVTPYnyH8b1RyxjtQRNtke1UcXwease7L",
  "key46": "2SyhKXRMwZDZbmvSqmLqSAy8kT96ULU5xgRR6dtR2DwwbJiULWKrBJd2ijygeuZNpLzjygdSqP8WrajERQRyBNob",
  "key47": "3GKbNNHgwpcmKNkZACCzRhM8ntayu8rFJmbFGJFAH8QPt9k7Tbyhjg1LUMLqFGZrUN36UMAEfXdFXGMpTdAdWygk",
  "key48": "5AmC6bmdUKs4E93Zuccisid8kgqBhCDH8CAYCJncEoETAKAvXJPPpeskuHbD43SmbDAEpFUoJXFgrRSskYEpGWtM"
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
