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
    "5kjaariEjZa3NCBuGLgiSWtiTp2h9Z44xbs3WWjC2AuagFV2mQ48GQEy2b1Mds2v1YBTyBQaZMCkc4zfz1LLPGJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vYBYx4vj79KDYmxjpYyYPzYrHg2GXSzT1mwvF9AjpphdnzqS8PYf8RCYmJaRkDMxRLxuX9gVJU6jyXDBNuvVs3L",
  "key1": "5x5DU43EW6bU4hwcgJf11p96DxCBdh5zi5pGxX76x1Ut4nmLmnjRDY2wpjmD3geKioakjNGP74bcTSFT5y8hD9wG",
  "key2": "51tgYREwSAFt3Uyfx2zqc8AhwtND1vKh5G65m73f9bb4bjDS3D7beznZUWq2akCU6MwnKeMhs85yt3pwbgpu6r1q",
  "key3": "5bVLFXisNxK3PLKQaADzfEdNXx3dPze35Rvyx1tgyGQvAB3nhhpHBCLyRkZEvQaJbPQceaJRVG14VntgwcnbHYY8",
  "key4": "ADVkCuhYsdroKpKvPSyg2hvyAhYnvUyM1gjdjg5Nt7Mc6bSpEDSPPPmhmqh7GeG96wATQS7S2gasH5YptmN3AFt",
  "key5": "58PgR7woXbs7NNGbpNSZwUAaA1WS8Ss3rxPQXpmvckRVY3wCvXaGKMjmKGQX5r5MhX6UrpP5F7QDGQNcKdCscBmz",
  "key6": "623M6WGbUa5jUo3WhiAQ673wNySkBiCzBvekxxiYrffGYk8aLudwBSLrzVyG91RjyR6aPfsQ6fALsw2ZvK5X3djo",
  "key7": "4Mwa6uq5FG9ZJUBGgNq6fWdhuVCbmibpfr39UduC4VDzkFhDcQAsUfFAxkbgU8bwEPZ6HcuoGP6DcJirkkf1ZTEv",
  "key8": "3uo39ymBVL251ryH5zrrGes6WjK9j7pmWjwFozsHaGAyibUJ9tW4Bw5Hdh9hQgUezESGMMfaBopkChBNhN9NbPrU",
  "key9": "2KCKFpULeGtaJEbou1ZgDM4b16Lg4Jj9ZxdZMvcEEc4mYeEMrCnvZfpABrNtcbARs29sNxsfjuymES3X5CfjWNc3",
  "key10": "3CAMS47PAynGwatLH9gL7rwNZuoABZpeczgmkQZswAhv393MQJi7Qtv2sdoWpnYL2uwAJYCiSbawHiHi1Te1pjAo",
  "key11": "2baZoz9pG7HAvFgowhQDBeXuARi73XtjMgEXwKk3bffBSwif34JhRY1vEGgGdARNgvdnU1A1wVw5qbeRGfHf85Zr",
  "key12": "5nkPZnnFByTNdL4cvFz93Eqy21XA3FfJ8tsMxN1pdCSWXp5w7m95VX5Ga62dxCzZx7KCJXQiC1JFLxX5NdCj3aTK",
  "key13": "DxsJ7N8fPtetnmG8ihpazfXZ8Wx4VXxCy3iev7ooQUcdAkh9TqP4ikKnb34K66S3WKzPZuXTixuBoUQRjsMqUhx",
  "key14": "62QEKsx3upDgYLUwVwvX6u8T5qXaotXBrcNv7yDHU7FfuDpzsMq5AWarzZfWa9UftAd1MVXWWKGWtbjqLBdhk6jE",
  "key15": "446zoDVm7AMfrNfuDJbd8jee5LZkLyocNjhikZ1sSELh7rBhn2fAqzZK24oP98j9SkvQAh2rgzjwkAYtkzKfaxM6",
  "key16": "sGDQ5b75fxMTEYTgJzBzqJXmbGitkHErytYbtSndddCstEq5HjEDBavuHpzAHm8fwMq6JjXRxA4k8erECPsvcFG",
  "key17": "5PWV3vAfhy3SiEiEPGK5Y7JGXi8JxnuKTkw3REbebPHstrAqPHH6YvuebSDLrBbKyhrYDjMJSwU2kdpPqCzsWUGN",
  "key18": "3Pn2wczmmoJgi85BTbbYzuGtF47ec5AhRVH4JFjz91XtpGMJeeuk6HcScxVdWkpEbPdh38NB5S5XFaY8G5nzgnoJ",
  "key19": "4QTxQAGxDPdfMnuw1oF6uzRYkpfuJup7UBMCw9Y5pXgavNFMhKRruQkDfsfFjLiQ3Cd8HcHnHCDx5u2Jq5RFGmwN",
  "key20": "4xmDxidugGpKpACdkmUsRmU2SjWpKq4kfuw2S2etPzNcuLDXEG7AGj6N6ngvGNF6X977P6tH6Wh2L4K5dYSFZ25Z",
  "key21": "54DRDNT7x7VQZ6zQm4mtjitPtzyihgGgKqGfGkDWvV1xsEppULGRQSdFxDvqwWv74PnszQ1HCr7qTGf1KrGXkE4g",
  "key22": "2sKjcmLE545aeiBzrMrM4CLZod6JJkeAoJaCwqSezCXFcVZukYXNpw4ffvGV8r3bpf37qAuk4Sp1B5FnvTX8T5HF",
  "key23": "3WgZfjyB5mGkdRuMVQGrGdtSVMn9RxADNxSjap7ZB6BVqkMoneqrgPoZWdHPrYUaoN6US4SxYf9yzK7QfN6EVppq",
  "key24": "2gRc76GgZWyejsnnKu6Pc7DLTLG9RZQpqxL3Y2niXvEWfUH9B9QJ3TGLMhg3quN4tBLvee6wxM1Nxrg9iWSy68Fy",
  "key25": "5o28ckiybWo5tq44JHdceAZNaVmgRPT8W3gVGSRdQbRfDG8tf7h4ZG4YRA5AkCwT1Xap5bzKizws2HAk4KBXFXFL",
  "key26": "4jQfmGBppc5JQuE52TEwexFphfJ662pAFTGuwg8ER899P79h6s9yA7DEYqUAbD2naZpMJr2AVS1HXMtTKDKYKxNM",
  "key27": "41xMxYvGJQD3ytBD3mH1DFWp3JUNJMtvTydA2c7qQsZBLReSzQqnQk9PWuQcBR3iLDEThRutRXgmaS87pcCKjDiF",
  "key28": "4YixiGT9vbHjZmQ8ozVNaerSN5RtWYuCRVgARmAM8gpb792uBhE4XQoVBbVdJGySPxjSy1jrQaXBCkXoAQh6T4nL",
  "key29": "3rkLGXhLHBqxNmsqReg79cuj1aqV8bXKj82v8gmQZQ97MhWRQTUpPMdqQ4EKjNbyTagPnaY5UwCnHASktvXgx463",
  "key30": "jZzquPVZ6uDdJ9mhjVQPXgDtzwbi3Bi3dKL81A8yEZ8MQVYndgS4AxtPt1jYNhwFsYtsvcRA2X3fD9kJNSux5MY"
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
