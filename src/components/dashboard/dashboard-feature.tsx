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
    "CPs3831nAnEJDcPEmd2v5XmR5i5jULZJJD5XM3VsktpftrGrphFFHqXbKiE9rB6gkHbUrqMvRBXCNPkiJ2y7yiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VLLVW9hFTCwTLZVj7UXBb2xLDDAQaCbYDssPEv95V4Cqk1bkbVpth23c9JJUN5PHsTM1kKEggbAnBjFG76Yf9mB",
  "key1": "9PqXahXhuucweFtpj5baBrK5V8bVP9Qb2ibyYP7zpr5i6LASMsLsrT894N1MWskfQqsWg1euYZzVfmK5QejD7ge",
  "key2": "2FSKu4NyCYZpRmoHy3tQsAfveB9DSGN8G1PswrHMKtMHN45ZgJM7tLYgTEbZAJm6nQcjNo8H6Tgi9R9M6iGemTLd",
  "key3": "2Cz4ANMxjX5nyTKiJU5EkDisqZ5BFY3hZskQHowirWNJCrYDCFCzGezsQb5XYqiNvKb2ySg2rwhzaKpAFmY3CdVQ",
  "key4": "cwiZyVdnUksW5zZzkryFKbJYCDL1qN1Xtyugd8tLJUMJxWnDKwVvKgtyf6ukXs3sAEbVPKYBjmSDfMDY6jQcR5r",
  "key5": "27SaksUJyqm61ZED5DVmzMRJs6dJ97N7wyWWrU151Fr2oCqXmtLoWgFuQcB8pphHVXTjVQtkG3xNxA7eSvXMiVne",
  "key6": "52Pf6X82TfnFgMXq24dswQfSTyTnsWQHD7Pv8tA4jh9sjnpBvSGF1TgfjkKWm4K3fRAstLqtAeHBny1SSNoiUdtS",
  "key7": "5cWgkNiiQuPHtauTerfuTDHsKV9B3NYWmpR2JNAGATj9e13TBUrSksaSxDHHWJfJLC6JDoWU3szTC4kdtXpjfeDz",
  "key8": "3nC9AaMJrWrsL6mGpLDPvUspSEgqPhuarTsabF53Kmm4Go7pLQsAXXB8n4EjSePCqvPbDPfaFq18dZPHK6Xs3HnE",
  "key9": "3p93JtWThPXMn3BxfJ1MUKjFq47WFtCh5ERBME7crSLxJNbAm2ZzKwXAb9xkEMreuD4PN4AbuM3FYbbmPUi5wSLz",
  "key10": "P3UvkbLbd2nLPxefUmuFF1HaN5hJDQ4AQTFbSprNTQDzrWK1oyBDKZkv4HV36f22AtZD6YfMBAcDtxdjffay7nw",
  "key11": "3mZyxrD5M1bPiM3VpM6mqyLuDtNQaiPUKcfhqQgNX1UNUu93XwmiC1azAThzY4LzNpWm8XJuZpQMa3d3uJk5qeAT",
  "key12": "2sZcLoj6Q9q6rrz7aYD2dCa4LkzJGBd7WTWW3TRQDY6rf3e5KdXekHKVzaK4rx4YCgrtPzmRKuiQde6JgCmwXgak",
  "key13": "9BzLvzFF1vcinKvhbZxyJR2EUcH8vvCa2nC9eVGXzqnnFGTnZro7AMRq1RnYZh5JWvcQJFXrdczCB8hy7uyqb85",
  "key14": "KerAJUFbR8WXdFWFkCrkNxRNr85AXHL5tUJ1KNLEbSFxrGtxsMUsQrXQUPzTk6wfyUXB9Yi43q7peDH7dSgJ5Fw",
  "key15": "4PrT1NZWtRbdaU37tzjxMA1qNvpw22i2Tr65f66USkjFcbnTZaHZVsLcpB2HwcoUWC53hiKpPgmSd8kiuTjVsoTQ",
  "key16": "4U5VNpp9dkSiQWqGRkKsvXD6iKKMXRwdwTkukKNdJYa9vxREYRsQ4EkDTLt215k7CGNsWehTVtUpJtMDTuZA7BZM",
  "key17": "2poKM9PseT5uFhvWRpAUw5XXD92XZfcJXtmVTDDGHBovj9PR94snWbP4PiBCdwiqbEs6buHg9QGFmic7PVrjuVmo",
  "key18": "4ScA3xnwy8MfxEN4apj3aJXVjZmcJsjhqhTPnSpKJ5uuemRs1P7FJnG6GkbP45zPfJpApY6hYjgiQmRmsjC4EDQL",
  "key19": "3BndXmH4bBSF4vFwAABvgNHUkFvM865tam8avAq8Bc9pzjM1mGRVpkMJJeVbTFySEEvwpmphfV59LnC4EZrn2NVK",
  "key20": "3Ase6FNePTVV3pu9Fz4NdHDVKMjdtM8bVdGY3VeW12KBQVLuouYJYw5Dv5vyEWyJ3FvrHAam2kHGQerc9e1WsiY",
  "key21": "fBWb9MaFHQptsY5zTNTqVCfVrAr12t1SRJdSuGqM5bBwJn9LicxgK48iW7Jn4a75GTLo4sMBVv8Z8b7bMM2sCG8",
  "key22": "3CT9o3YyE2pURyXDvYpBfENb1rA1VzLbmu3teEfnBJbgSizZHckkwquzX3F8ew6AjpSZnY3ai6jCrdm6is5SpEmc",
  "key23": "22gtc2BSuTV4rc7SLXq46ZvtTyNMs8wrbNY8Eui4r3yNKVccnZziN9krdD2kRnRd5B4nsdArN6nmpcHsMiBULSnu",
  "key24": "3sU5DbcSpStyrzxwJF2NDfb3HCA7ZM5JjQNoiFrfMWx9BAVQT45KnCZKF2GuiyPkfeW1rkXiK2KPuk6MrpfJduhM",
  "key25": "7yBkUF2DAnqvyYeg1Mbs2Mba94WkdH5eDFLXDhQSW9bsoLCFqBF1jNzRPhg4exvgS31HYSZgE21hArKumK7ptpj",
  "key26": "2ERUWyAB5DgkUTkAp5VXDEdS2x2pXMD8uPpUoEs68kwyQZtDaE22wCZPrH6yWgSAyVyqgQat9b8AJ2sTKgybSdf3",
  "key27": "zRFTGkmue4YHxnZ11RmCXtxEhCv3uMMyyYm8UaC7ySrkTZCAngUCfh3tzm9MSdcR2B6ePiMVkqCdgVTH4BBzYw5",
  "key28": "qyoCqjzfNu1BBf4vietxVM9yAiiPDYLukDrPWfxReN4xAN3eLXoUPKrAWEF5UdsPxDCwVXSUuLXyRmdjuH49Wgb",
  "key29": "3ynHxu7mK6yqtjk5FDSbA33dWSnHXAU4ak9QcFz8VbeMFGDYfWrDDGjhnqLJ1qA4Q3Pbm4ZqBvfccrSqQADRwkFH",
  "key30": "4rdRo9yAZN4UUavCrsXdF8KBE3hCBBaRJAdBNqL4e5u3yaXjz9fzF5Yn3oQCSQ6rHGX5Ko8EzFEyesA74hvUc7Mb",
  "key31": "4kt5iyBEKerDieJqSYSu1RLBdNYbew13RZYeRyYRV1mDr2XzJT5HvJyz1GmWfqtM6ExoUP8dcFg4dzb7K7ijwW6e",
  "key32": "3jkFVALT4UJKEPqnggibGY9qw2H27bAKYPugcMf6ivRM6crdZv8Jzz8ZFKqbWwuoDMiFBqjaMp1jRtChB17mhycr",
  "key33": "2ZYW4g38BZFwUv4iokZtSxGLzpxUUTS5XA1nMwcBWaeUGLrEsMGTrekeUevhYPSZVdVA7b96iPLSxsBzrvycpY6c",
  "key34": "2VhT5HBbshCuNZmypKwBRKWDrT9Ss5v8H6DzFeg52c7sXx3iRCnAvj3YxjhN6aTBnBRfLbRrTsGdiZoC8sLeqqVh",
  "key35": "LvgGWAS7H7nE8maT1p3FeZPpTpDhdkwtsdxn7AK6DJJZoNwWyoW22PFymyqqjzkooXWjctckM8TSoU9QY445kT7",
  "key36": "2nnFDzGMgAeceCcZpexoqGRH1hiSH4Wfi17CunE56s8H5RyKwbZucadhxSG8xnm2LdPUmm8jHGHegKzwEtAzSTPU",
  "key37": "tDh6kZ8pxrNiXaFgLwBzckTE7RCroR9GRr1vo3ARfxJfrrsajJcKFFViZmwCgib3Hk4ERNMTpPiZzy53vAmZ3ob",
  "key38": "63xx5RSH8qYv5cDmYxJ9CdB67ZPQG3NwrG3vLESigZYgKt5bZoSx68fWg5V5p4SDCyRwbwYGzdTUGiNPdQpyUwSE",
  "key39": "2pgcu9hygbphe79ucVuhxtn8RnjvkY8c2QXvwipS6xwdYHXq3qb54jNxrcNTpgY95JFamReSuu8qFPoDtE8px1Ur",
  "key40": "5EQcsPBRY5MXCPirajEAJg4x6gQgFqQtWjyFqPVUzLWpab6JWGFqkvnaZEBZxE8bFnuYRLG51qo1Ltw5ARht6SPJ",
  "key41": "3fF2JtnWc9kuc1dtn3edkxjMf9SF4jNQdE1tvRWE8i4Hv6RM6dnHEvAvPy6Jn2NX9VgpmJxDbVKsx3TMS3iNFnef",
  "key42": "H3QftGGtd2wzJZUNkDYn5hP2HYw4MDmd23qUs3K9KBCcMvuhcQfHSSEnLSfFo9QV4XwxLxLuFzg1iovVCZidXyU",
  "key43": "5VVmPFNm756Pz6L5UBTNv1YTfUDXVPGdGdqe7TRtXLM6sGi2zrFnZXmdAwV6TLZuoA8SztRwVikDUhR1poeEaGL9",
  "key44": "36CHF7Fhh5861QMamPjJdQ3C4ac13D3Ly8dnM3CTU7boHmtZxu7WiaVLyRynVvEhFhZArSmMBLVUZsrwTs8c832u",
  "key45": "gaBKfuHquxZwixtjocRrzDfgLEXEZwYmntPpHefmAXGDvyySpx83B4awk88g5x181R1g3GMx2nNRVXDGoR9UQWb",
  "key46": "5D4H95uDqpwiNtz75DacLcf2mFQA1Ek9KDs3RnvYfrQHtL4jKcKSeNk9QZTK8WYx1AnK3iYTitVB76wKXQBpd87Q",
  "key47": "3KkzfoJR5XFdVFMfvdV97irgv7a8FjZhzkVDo1zPUAps37tHiTZRFiqjTRKUGZbhyRcQk7kNL1WAy9yDLj4hEhVL",
  "key48": "5Acux6zAh3FJDH7nHmxF32Syp39CfBeL8QDniayqVsES53VE2QeDe9rRcHems5edKoZsk37crrMV6BdzaK8yMKTz",
  "key49": "wXzYyaUZEXVqtcf2DX22cERUhFckUQJCvnZ3hrU9AqLtgc3xQ1pVF3E2sg2nnsf5cw1aiMYxbFvt27eTPFf2WBt"
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
