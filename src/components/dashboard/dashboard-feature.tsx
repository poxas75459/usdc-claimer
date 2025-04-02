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
    "3sLbLjKtXFWQWhJgTgJtYperWrGAhzS4YRgnDUYMzXUd8JVLB6yCVmfqvdcsEPSAyPi6pExwy7UvVTXYjnRt3qZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zMjVPReZ1Y1cWchwPG6ok3DTXWY7ezHbKEpcgkDPwzCgjb2a5MqCcjddYVDg6Bo9o7K89ydKkHyZUWuvucLZUeR",
  "key1": "2yAZwj8xxBqTj9Ps5hBgi4jseCKvCvKh6ubNa2cEV9zbFVh45BbPQcwTopz5Zio8VmDGKLqbbhgadzkEPySgt416",
  "key2": "5Eq6JfMRKD6rBkmUaBosqCcMJPDeHRevp2V5NZecDPDFXbeJbNvq7RGvSo6tyWUH249CFXM4A1GUaCdH2CadPpZQ",
  "key3": "47t46pVXNNnjcKiDfAmHVx7QnRH2GLkxuR8UG5kudoY3mBd6k69fWJzv2xkUCnz8U8nWg5ubUq572UTpDTMwt1AL",
  "key4": "5bTpNPFZSSTcCPcV1B3gKhoQ2y9Nbau9YbuWPFjBKs4sRKKKFrFrd5HsTtqdtgG4Fgbvi7bLVhmrrgotBTq3PVd2",
  "key5": "kNCPq2ev5s3UKfFhuWo77AouxvqabfvjueTpzHY6dJ5WUZirCudysYxVB6TAWPAPu6Moq7Dhxva3A6in9dhdi6J",
  "key6": "2VvBGVXGNqo7de3uWvBEUwjcbKxBsXodh1gju6L3VsP1QEMUgPfitaTATZ44Gm4vbgu7pvibWTiQZ5TfH1BQgYMZ",
  "key7": "4VkKeskGQ1sTw42ohfDQ45ontdkdDMGcj2pauTg2MJ22spyzyj9oHT4w849TSY6MkoUFdv7esoK4Jj1FFQJfbBaU",
  "key8": "T2pyP7KVWWJXPW55xSevrwdkzutrqa1RDZAy7nN4cyR7sLFSQtCgEbtkoy5VcwVjzUyfqCkh6UjPVrQzS2oX1nL",
  "key9": "37qN2NnDr5gXrdtXu521PvpXHBP5kjj8uL2uRaCD7ux6G6YZk72BEEAPXbP2JxsxdPgp4y4kABUmpmkXiU8QWmYz",
  "key10": "2VsgVqdvUXHP2Bxxr5ozqh7KkbhVkrramJzGCrptwarjKXi8Kst1eLQrX6cBYSHZZXCn2Z6FLFevQoQ9TuxXqoEC",
  "key11": "9R8fRnhYaEDah9eXBaDE5TcDKbWzRoDDekP8Jx56tfpNGbu9QhG76D1acMMDVdyaKyj84dPq6G1yVuedqb4xm8E",
  "key12": "5D7dMSvSBmUK8AHoNLbTREz7gfFtmtzj786FsnurAJtb1isCpYCybEyKCDxaLFowyCfMmamg3fAC45TkFextcnnJ",
  "key13": "5wCfcMbaNeaonXmPXyas51kXUSBEmdpFrg7HoNEtzp3wcgxGR6BN6CFn9VqbGAoWpXC2m4YDo8qhBC5koPb4vXYt",
  "key14": "36Dg2gmaCHuqZk7hGmcmE9Hzq7sCmJx8LGHgu8Zj1WBDqLACC3hrio7hsNarq67RwuwPB34UhrbbAV55pyWASmkv",
  "key15": "2VYNbSE8T82m4GHQtuxTAC58qDnenJYne21eDSftG9fpxgjAsupwKeGihndEQ1nFaocEtkQboArCh9LZugMoaf57",
  "key16": "AuJuLffcywYUAm6WHnRBrtg9kB4vNRpvtN1aoLHAyCjDPpmVhLBRdxF5RdTFkkpmLkKajh8BowxNWkhw7nTBzfp",
  "key17": "54CX75c6FmgWu3cv56cqjbGCJZkW87fiEyFbqihJTDFhFgifbm73ohfpJ2SAkd8RybbiGG7zHZR1kgJT8MxXbRrq",
  "key18": "KXe2MuPxem8p7CkMaqebMQtSemuVR93oZYmyrfz43Dn6Ked5E9ySg7Xw1BEN9REBN8AfxQx9kjtCmmibZw1SFkn",
  "key19": "2VSgsqDyYoTPCUqWh6cv99UzAtDt1HCozbywWxuVM11J5UjUXK4rmoPigxmm8V7K1QqpMJj1DMSLrNGQtfqh1qcr",
  "key20": "4UQ1Qw91pwNxjhsbkd4YFdjVukpRAKxL25WHnA2MJziwQdqpBY2q7pfRv1H2Xa12HKovGWGQjqQPocGupAiiXLBH",
  "key21": "L6ndF7hQVtcWhnmpGVR8fvgmMVxYxQo6Kkp7pc4BgGZytJHgqjoDRjtR2BJsxvVRnkpPktmifeETtFSiC5J8EhD",
  "key22": "fJv2gvXhWGpCNRRFYPbrm7cAAQzE4vkpV44DN5sT3Xdm27HzGjoJfqAoSgzWHzsRSE2HFpKwNdyrbPVCqX29SD3",
  "key23": "2GDw6dzBNVCHPWVoNPChQaQEEif5Qb7iCkcjrmnDHbdz7oWJYg5ZxGeXscbRwy5DCGVn6QWRjjzot7siHZDvWTqE",
  "key24": "4yJTVNNq4Pkg8upgCKjXcbT2uxRqcHapd7mGmn5J7TpDGyChgLg8Un97PeqPJ1NF3a5Yu5r6hehfmwBKyUaH4op1",
  "key25": "3rvxqtqv1TfHUbsSjNp3eoqDM2YbaFJwgfPgF1Ev5Fk7DUCHS4ctbj2RU7FjnAvYddCVL2G4YX5q3qbpigRbBmND",
  "key26": "5imeV31VejtY6cY5V69RaArz1RsVP6obRjnhJNrrY9nAkn3w1DcVjuAPF6k6zrHTNgHN4DUqTqmp1yvfvmoDS8xH",
  "key27": "U2TW4nLmojL1KyyocaSAdYwBSSTq79pDDhT5KpY7reBfYJRgQZEdVKyssb8wsQVnztroDrDPYiYjNGk2qPGLgmm",
  "key28": "5id5gaJx3RQuxdWwc9eyeDh6Hm8o1SnRu1zTriLNKsfo8YTwPY7Tra85U2bvCtjJCmCyP3q8szUpM3hF9uDCsDTW",
  "key29": "mHm64AQyvXwjChLPrnBSjJWjCnncXqZvy1CvxR8KJcw5uSmQPF4KYhVeaa1GB4hZH1AemfGusNLd8tMR2rXvtfC",
  "key30": "5x48dtEAtyuE5ivH9hKbtjqwRNpMHjKqTA9YZ3rVzybDwG5PHTBDU59VLtDfh7Y4622xzU3zRzKLRkAQ8sDgsJpg",
  "key31": "xMpTZQF8aCbfDRLN1QJejyPDQ4L5e9ju3Ds9JYTshm7Txx2x2H1he5fN8Eh2yaKpXdrE4SMrU2q97cSMctVNhQS",
  "key32": "3XbVoSdHGccqsprmUWaqZyxJyijPyqrV5Ud4D59cXf3hxCcdyudCLXVtdh33sNQvmmZNUV6Z4T8ay7tMLycVt32D",
  "key33": "5CTHKkimaiv392Pp2KN7SxxiSZWEyPMA2CZM3SZtPzYUhC1qm5F1TxXpPMHH3tNR1gv3CJkcGPfzn1FAG9XuEM55",
  "key34": "5En7hb5K26ZjuYKce91UqcGfmmSxRhLrbmZ2z1z7TGGwPVSgtB4nYadXdgXFP7UzRQEyTa2GBXgcNG61ayBLwi1a",
  "key35": "5s3Kk3utnfQpAXTUbwAdgDXGsMkLY6NVqnEcXNNeCcGg5bgUuzRHBHAFXpYN9i1fW3HWzvx8DtWf7zkFbEXYvRw7",
  "key36": "XZXZJjAgdztzHYTmfDvSembg5ditSXxDuWPoyxwcxomm6FhUt78qqmNBLtvVPvrX87KtG1ZYXix6vgjbALLaWsJ",
  "key37": "3fDht1xUUCbxcZ3TtSs5Miv6tW8N9p5wZikcjBHw7w11vauvyd2Ay2W5q8oKNE6wNQ2PhJ6VPnKPRCT9P5T2Kr8w",
  "key38": "Kbp4MSD9Wm23A9VGsBKLbhvbHugv8JJC7mhWicieavq3QfiKYWLSHxZV1ZSBDDs3DQoz4GPhnMJgAxtBjo5pTRM",
  "key39": "GWTAWf9xrc19KHZZCVK6KrgRRKP3aC9xcYhor4YaSxR9MJxY8gcVkvyiQhPmCzx4DM8aLUuEuXYatFAHTsVHLVw",
  "key40": "2s8PZf8PQB34W8FFGvQcZcfccjHcgamR5SPwH7LPzteVNVLQq8WroA11qcczEJs2a8ZuPhEbj9ChjiG7fmdZETGD",
  "key41": "2yRdM8Wf8yVdX9aqVTMtGzajrAPKLWRZ4Yq9rTRJKEuUjeUqyUVoj8cDFP7yHysGSVjArzgRVSnRYcQPVaFCBZSB",
  "key42": "2HQQ97RaDW3ZxBX3GEV3KXChvTpRBgYgc6EDQoc6n18NLVnRqNcvGXfe5Ed9nQBSYUbJWdp9fseBWPo68wMKXcUJ",
  "key43": "2b2R9Fk5LJpKDTr9LepGs55qkdUhCybWSPaHnBmgiTqRHDA2r9CLRnUEwKsNAnFBj2dppQ1sgRAPiHBfas48dSbL",
  "key44": "4YxygjSzjBMB3dFsKR5UxftUbxSCqLNKNhLnHDgfCLzUZrrdKvRfMjAkSStmRkZ6uebdco1ZZToTHuuBJuGZr7WT",
  "key45": "5xn6icKYw19ikKMrynggtKj6ArcqYu16yKLaxFZ11JpAxDUoqk8coFWTeaMZ8itLKs3KdX8LLfE6YgQWfXbVkqnE",
  "key46": "4tm4d6LMKzxwnQdJT7vsUqfPgLUuhg3kRMPPfAQvMA3M9jhQPRNdmJ3zjmBmny2eeaEsGyC1UHcHbrbnBRrrFh3k",
  "key47": "5VfKZEWCPsCgNk9oAs8sJgGXQn6NAAWMbgZfoUZTCSa8jpjgXSPagQiAzwFCpoPx73EDgzC8XrkuF4xf9y9SM792",
  "key48": "4RFTEWamgQi7LKkKutNZoNopsopd43GTpv9XNwCrAjQYnWBTHdPmrduBF28NTvqm4MvGmMP72LK3wMxjbVLzvPEj"
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
