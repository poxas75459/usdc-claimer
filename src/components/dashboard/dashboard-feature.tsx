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
    "5xX39cQkcn2f4aDRjweoHS7Qw6H83MZPAXTwECSDvXFS6WjNsaKaWWMuv3zNNuwsGD6ZTRhvzhXNAPjToqihDgFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26NdyvG9t6XPAXdbt3a7dE42vVTcoB5z2ndq6xCtYx2dBf3F3HCohatpU3eqnW4rS1GjfkZEWh99waftfMuZtGqr",
  "key1": "3i1QZnjHd14cSAdkxnqmAL27M4hpfStMKxYExTbQFpNs5ZHMzK9Mv841P7Fw5TYz17NHZF9i9gdpwcdrrKUkXAMo",
  "key2": "5s37jhCS36kjfQSbiPZsomLeB9KazvGDCpoMfsz8QiJ3Rm88ccPxxBWNKGyiZhoYcpSaDL8R8CgDo8kc6We7M5gC",
  "key3": "3Zp7kgNPdzRqdcoup6BdcoVbEvGUghcYdJCw4V6qjiWcZ2rm3QTi5CQVg5qdsd13ueWgwQPERwC7xhy4d3L4TQuW",
  "key4": "4okxwJdA6PU6vQoh2drpzbNeBdZqgC734v914v4KmEnBTwPQdpaPn3Bt9DdZdgbRoSrNSVEMCfcuD7WXknuXZZLM",
  "key5": "4HLfsnARa6DK34MzscvgVMMnYqHZavF68VnBYQivorn9ZZNuvQZZLKCMUoCxfMda79Rt6TQp5Zdn9qhSbbwqeeQY",
  "key6": "3Xisyc6pW8fy4DMefFMHbWJ3bvZE96tGpNr2GE2AG5JsQPDsMLzzYm5tW2u83zo9QAghQ7xb2nCYksZkrUTDye5y",
  "key7": "5awvR64NQ7kzVHxo97YDeP8ED9XMKcanBELYJJQvXe9HL7dJjSaKbyY1XqzUSonJNsHJZ1i9yzGF6NHcdZ52TxXv",
  "key8": "XH3jmzN1dVyvzK9PNHd6HdeiQTnaDWBgUPqg1v9YM352BESbo4dPw8HtGbD6pm3i1iefsNEqdifgNXhURyxugSW",
  "key9": "3y2dJRfW9KYkBp4P34Eu7SVXAsHVw6Wx3cfMbZPPA9Voq57bxVCZXWxU7SX5fmmJdAHGsjP7FNencg3V4QaLBtFd",
  "key10": "2nhEsyprMUSUSjkE9CYRep2LcreHUadHoozp2Y8cJ2kv3JQU9pvFuLZHVtpVWkmWdgbaz1ztrsKyRDDm7sVWY659",
  "key11": "44Ratq5VDdnc3rSvFjVaWDE1R4t5znksgMKdz1b4C3eccKSF9Arjq9ssL1FqHindc1G7vGrBkcG2ct414wy6czK",
  "key12": "4qGpPu2aozQH7NfLg345zdPHzK8c8iRq7MKTKG6GywuyPbqyJc9wn1EHxiNoBEBh83AQ7mnBHE3QTdpeZpakTxkw",
  "key13": "2HkBCpU3Q1XmXMWmDp5gKFTkiSa7U1r533y5s1ChvSUVUH6XTLgf31Kjs6ERvr2xMU56tb6py8gTAEEdkqRSkaMX",
  "key14": "t5wiv7tDcSBVgHVR5LqhRFCEbum6VZrFG21QW7YWAQHHGN35BGMnKX1hWYGrqZkwpTp6xkcS8fvJJjPFUUyBv2t",
  "key15": "dPcaqSo2HfevoUqZWFwWKJnxfL46cV9qNTTG6LnwfzbxzsrKjEw7ZKcGwTNDE3FrxqkgxwskGAXHakiv5bBybia",
  "key16": "3ShTK7w5mK5FomZa6fyCPYTuH1NgvVga4ionSj6wXiYJtgYWDPk2r3myyq4i9tsRZMnMzGcNP1VkP1NuEDwa2buk",
  "key17": "2gKaWZuCePnmG1jHojumEmv5Xb4NThb9cyrHGh8Nf5YJB3j7Vy6Fp8S3SWS5cBSFykKSoVFnDMCpFHd9UNxTEQ7L",
  "key18": "t1VaZFnWJJ49WshsqfPJG9WfA97YyARKCKENou8gQH7WK7KWgghRfLGGi3zQunV1UbWneQCbCCHrhKzD14GKpMu",
  "key19": "5TThB5C1X1rBPpzhb25P5sF1GhnqTDZVNZZ3ZMY9jTEbrvGauWBNrHKB52zzezJ7xSx7bFBfvoHpKf5xrDWcq3kF",
  "key20": "NfqGqmwNoMrJds15awuPd27U6iQQhwnPDzrjdixNTFgLjGhgA9Nm4pwZriVK3n7M2v24qgn5aNonytpFpdgn6ME",
  "key21": "3wheRdhQqDiyCokUqqQTuuo4m91nf8zvp3sjEVcPzQkcK9oTEcEZSNc4LJseSQRibUMpiayZRhabce34JbmiYgog",
  "key22": "3w1MeHDctRZxcNBR5tV28sopL2dFtaEMVV6yzkXMZZnCGQBmocChqpyYKhRP4Pj1WtmUiqbqfGZV8CuVjMAiea6B",
  "key23": "3aneCPugq4cXsnZ939ULaPSjgaH7LR5MqPSvp6fzQMzjQqRWswV2bs4947ZeM5Vrg4wvEYLobM4bWveEYdTubwL1",
  "key24": "4ByHnPafVC79mbd1UG9CPDAhLwASePufZRYVBUf6Gr3q1yK7zdWrGVxqK4XTuFBJ4yM93fdVqjkCNhvbnMZbchu6",
  "key25": "65zGEyJdFnxjFaNSiZGm3AhWmhndcpskbKyPXa4uTFX6sBtavT6djeq7ffRGwkPcPukUGFWyfCi1VJD3qiBbp1u",
  "key26": "2nSv4Q2AP4fb31xVr8eBmaSWSeG1ryUYdTMn1L8pTnqmkpXGjJmkFPRYWqnoE7X4wjmogvvXb98m32aEQE2PuDsr",
  "key27": "2MvjiPgqNxbAA9Jy4eR5i3gcMUfZxsMccZzknwnipCCxUExSMTGBDgPGU963deSpf81CWPgJmHhKFQHUHGXY5AXy",
  "key28": "ds6VNzmikPi6C8s8gteArbuHmwHYvMPbXhgcncmPyvEPfmsJJR8umcorSEKdDF21P3z5zfqeLhfTXdiVCNrnY4d",
  "key29": "3Gro6CBn3j6aGhDndXZK4B3gdSY4LimNbZG7vCweoWy2uueHiXe2jpNeZYj3AY5eSwfiUrhSQmg3LCGW1z9Ycz9G",
  "key30": "Esgf2XdhkgF8Hex8K1UgQG7oueMhRgu1mdk8c1Cp1JTSGETegvHTxcHvgkTuJxF3FABDCfcpeVtz1r3Qn4QKB87",
  "key31": "3j8edXgLW9xJRq31kHtb5QDoa2vJmWUApPgVvgioYNU9hTk84B4heBggUZzKHJ4HhXn9q8UTLTrrTUUfqnv2xwmn",
  "key32": "2XV7DJ9wbtg3RjYDRVLm5obtF9Xj5H6tEzCY6jXPK1ptxS5ARiPudCeEA1Tu6U3zNnDDrVB8yKUJ28RHZSyvx8ve",
  "key33": "HDPSsePWTAixvBdEd5Y75GPRr7gJsaiX91cunrinVXayZvCp6YQsRR4dzanoFUDvMcXNzV72Y7meTf3f2nvbFMG",
  "key34": "3YYrjqekL5usa84eyj67oajDZz1rVJB8zsYd8WAqc6891RQ7HFmQcRAEn39QXVvAnQLStEdMakS4KuC9VG56Bmha",
  "key35": "45PtLXuAFezK582HLP3GcQwfzMK7zLcyCJfHz22SWWhtp2TDpUvYqzK74P9b26PmXTLaYTkebp61sVtJ48LQ7Lkm",
  "key36": "5ZCn5DzAJ8M2wVMxJaEqPHW1EMLToUHawPQDraimB7SQwLoXJy857JaKUY2SzCE6QHzpQAefjEafYP7o2iHP4VSs",
  "key37": "EJWpQ1iAivej35RhU8A2AwSutq4CPHM7QkhMUTW58qL5mKS4wCfggugr5WEpGLtqe41huGNCBo359QJRXXEFWmx"
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
