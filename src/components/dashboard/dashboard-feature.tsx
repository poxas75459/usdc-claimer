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
    "5gmiXyTwyvdAMJxyiLiQbqPg6c4aHHkmCggNWXUn5PWMsBYGGDtYo4uUQHgFLhQR6P2HtH84jkJPzkGJnbaC62jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMeBc3siPFFFWZG5fBK2GEhWV84HfFQ3qxQq89SgFmYnWUZTFZtr4giemXnBbc8tcMZeTrzmi77gPDMr44Gc8CM",
  "key1": "5VC8n9yX4jj6SRG62ANi1RgRTUz3JfQAt4tMWMt63phPPtfHmFvadrpmJWjyeBydJygXeVz3jC5MA53CFtKNgA3E",
  "key2": "4p7qCJ6Ga9rQNXAN77Fzo27wpYdfz2YcqLZAJwf3afCDaiTEkxgtmxKiyEbRGhfTs2ifveHtRU54bZt8RmGUbc1o",
  "key3": "3fwGEkHjAssmQn7psqCnbEDmXoTVx49vz4LXUvnfu5vbw7by1hHoWBMqgpVk39pLW6Qpx3yYmofin3aucKftQgzp",
  "key4": "55mYdc1NGpPbcFLXTcA8oQn2uYnQL9nSyzBCw2S4PWe8i5sH1cWbP71hVvuzweVztBwRgazgurmQbwsiFBXBPDMe",
  "key5": "2NS81Ti1zV1uv52VHCreB7CiviVPs81GruzhBcwUeh53Udeq36oeLsZuT9mV1rmGaXaFdr9xA4FP6mRxovGvUuDF",
  "key6": "2hJqRWH6WKknqvs5gwn4JgUozKU9LkETKxZ6N3v4iUJUURP4vLrY9oghp299c3cTSWzj1pwxTF7z3MUm5YK3auW6",
  "key7": "27FrzyeD4hSiSpZ5xdUhvG7rpJdekXCcryWM26FJADamUatAv4Hwny9aw7NBio9ff812cinKBsLuxZqep2LF3MGj",
  "key8": "2DivMGgjBWL9jq6QmJ91BFdek9bC7FSH9vyjCjo3h3Rq9kiyKtdfWPMoZXMysdT2Ba2wB5k8ztr1J7qyvbz8PAXY",
  "key9": "v3zh4dPmRtpYL5gWksHkenpSEqxTueSCamx1rRg6V8TE4yck11AVuvMHVcSPY2TzaPHrXCjSi51zVUHXwz2yf4t",
  "key10": "oCnmEKoTFudcCmdaFFZstPUinRUKnjonWsLvGzxtsAzpD6QzAKRgpAf7AjVwNAkhsE1SrGScXtmeQsLtetKbYa8",
  "key11": "2Cug1L2hpzSHsRyPZ2H1FURGcGTJtYfgM4qnAKjRttfUDQhAb1gLfECEm7U6WzykZdVgxcH3ud3BShnGrGLApCPy",
  "key12": "5vmv2ftjuG4usxQXUPEiHmngL2hnTyP8CCsYB7ipGK2PjYANSr6SuZeFavwduL2zd1SSs16BLfDZtvjVTUKMnZjQ",
  "key13": "3ESSWjueMdnB1RtRLN84JFdaCoSrAqVom813XA4PFHiRVfLcCoNoxKQbBc5eGNxJQvbTWGy9ScaDaQ9bsxZEwSdR",
  "key14": "2KghNypuyTnkyR4fqqkvqMWxWEjNyS4ZYFus2EnCKqxXLbJgvFTPHyPZ5YyDvpC6sVCZA2Tx3rNj9iUhYF5Kt3Sj",
  "key15": "3BMguysyg3j8tjLEjp2MHSJMoNyvfwZueMZLKcrhWWfmFMUFbn1uwWmTqHYDoM5znSBv3dCewtwmRVVK9gXPNJoB",
  "key16": "5kzS1Ju3YNnRmqNKHFstrQLLgUTkqQouoguQtyxwN4Se81QNj5xcaVY7Q6oCecQAtd6bjSzpKXrDUvZ7QRFRsaqz",
  "key17": "58XvKnd3z5hSrMZ8B66Pi22nc15eQHn6zG5bFfMrQQLH8HKDqFSDdhZkJtQUEDfQRpQQPGes5m9CH8xMjYYQJZpp",
  "key18": "57BoKHosnB2DKBxY5c8h1eWRnNcztfkyqXGRn98YSo13kSxSSPeBeQyorwxUKxAve5GeZM4fmiixSus6MVUVUwLh",
  "key19": "F67j4PPpzbEGA5EotWpWrH7vyCqQUo4hcrgqAqQr4onEgTgfeVPxCdvocC7pM8CbDqG6GGk73mesPiwKdweL8ba",
  "key20": "4BhCwV68JtqFF5JAi1dVpqw5JewiFQRbwWPUd1ikZ1e3CA8qjHGVeHt6C64XNKvzpS4b9dRt6LCtGaRskW1bwS3h",
  "key21": "4r56zHqj3EPEhZxovgNrxp85MLxiG1k35Br8sx6XFnZRdWD4WjEzaam5Gwo7pFejbxkcKVspEzswTvXFH2A3mCzc",
  "key22": "5cQDB3iMnvDTCQetLDoVevHzPAB9SDTKzuubpwpcPG37YsoTiBNjx8vje4H6CWsATUQ8iYChTJE4wNCmMCt7G9mG",
  "key23": "nqpMJxUyaA6H614aq43bq8L1Tv4r9V5Enw15kPPDu18go2vH7DF9UaRVJU7dedb1D3nx7aL7cNGSiuE1Bq8oevQ",
  "key24": "C4NqXgQEbGhrhMurDZJ9QA7cuaMpdaGxSEEB8tAJvfLAEziZPYRKTp6vkkuzgPwDTLMkV2s7CcmvVSTEzqkEnMh",
  "key25": "3VY4A7T7zkNGNVPv596e78niG8mmgKBf3LC1g5v5PzeStZLf74BDyYwBTZDwHFTurzbSccUJ9CHf3AxXVC5LL3h2",
  "key26": "XsGkD8b3XgFwitL7VFw4mNpSBCf5er17PWybgRgdSrveQsDSSd7vMuCgkfYGakHae2cSR1S85rTXhEws6rzskzi",
  "key27": "3WrmJWhGbm7TSyi7cwjZLKQeDTpMAiagSpXWQX6NNNrj4ngfCY4vdJwoSBW2m9s9mXyN9Md8zvTwiMbpTYiXhnt5",
  "key28": "3frdXqzmbZu9nNa6qf7CkU1JyQqeCDpsn4Jabmi46qPS1RZFnULo2NX1dQyRayY6zXSDAEgV4cRQW5a8ZUW7N64S",
  "key29": "27Aurvagnhqbt6pqtCYtXZgWd39LKkijxHJpw3TSmQCVcm1WnAmoqqsF7phdJnYN9XPVVoZDjJuUcf7QGPGLkvcG",
  "key30": "PhXi5sBqSCiqKrLrpHqxKrG7Qsj4revHnTep4AKLRy36ydqK8iqZaFozDmoPSxnzisg4yhKVzHRQ6GJHppGutPK",
  "key31": "2PQbFsaxWD9Cci7QnvyKRSVDx6GFC7PyYCEKd6ppKXxcQP4HkFQidg2oFT1obSTaHwuqtdFXVfhpDKoPDBnCCUB7",
  "key32": "47UoEP3JicE4fA2q7kwKgKLF69oYhFpS2iGFZCgaoqL6nFj8j7kd6SABpcwEQBKVUidqnNSVD2AZ3CzivRbL65vb",
  "key33": "4HdGZByYwymrrD3Az1Tp2m9vCKAPPc6Z1UF6h8DDxtFFZeX89juDxRUuFFYR9J4iJ6fone3wnWpZqhWyUTYg5ezd",
  "key34": "47QvuLmePmAAyBsRp8i61tu8KFWZTxjJFoc5FiFhViaRsi4neh67txHvpW239qC2jfZVDQdvCSiP9Fh51oYmqAEF",
  "key35": "2TthioMUie2nPKMzi1mELgPHj7Cndxw7vA7MXJPNcPjaxZyPwG6wLbtzdqiLjoHcMhu1FYW9h1MWDwsvx2FDPXB",
  "key36": "4CNSAns1BnrE42i1xhB5FHx2vFdRrVmyPRfpmgoMUBBPynrnqn2fufVsMPHFSoiAnqX1VgBduCKn8GRa6jNAPGvr",
  "key37": "4PJmb77KWZhC6NxyF9GQKSr4dg76FQMA3DFhd8ZRQNDmVvpLTDTGGcJenSjmpFxMkEP3Dzw6HRT25ooHxZHVho1K",
  "key38": "HuCMrsvs6nkYiHny1AFGWyWH79BtXkpU8BtpTn6icebTNMCwXzJUTzhxbzh7HSNW3aWjnM19qTo1CNJzuBt2o1L"
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
