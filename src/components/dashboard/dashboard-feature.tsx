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
    "2wJtkrDbhsLcVyDGtiiKzMMjoX4u3sRT9TEcp93VGzf1P3BNopm8CEa9SEGits6sTzxrm6YiMDZe6Y3EdrcQCfAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BGuqXgb81ZDqRnM67CDyGL9L5KRp8jMxohCXoNkBjU68pJQpqZeC9YTxiBWMsBVGHG8eJoLswhSe8J24dja2yDi",
  "key1": "5T6EFcj8GHHTb83Am6KehnYaYVBnHVhaYVTsMBBdL25RDzMc18GAxEa99VRyueFPisWcwnS5Lyqk2FRpgzH9PNHH",
  "key2": "2V28JsFjxXfG9fahHfYRCdvSjBxxbqMCCAuYknKCVawPPtDxK84SAxFDzaRGs6QRegHcDDruDva69NUba3SdpqBN",
  "key3": "552Qw61VD5YacahjZXD6btSpquLjbWJmgWjwsJFfY9PCQW8iMsaviAkeYvtDSdbo5qY9eniAkMNf3vzmCj4E5tbL",
  "key4": "2t5qPX4jAd6SBm6LAvUmsawKnFMb1naex8kU1XMPgNg7rxLTG83LtRFhLPftEW2aDP5QEN3RrWdZYCLPHSmkALsE",
  "key5": "5o8hrSqi1JWsZSmo3VawRkujgtEcScWj4VLFTk3kMWn7ZCqCyopoCdRArfSRUh6dhacJcb6kPRqnBknP1phWysCQ",
  "key6": "585Vg657eMqemykfqQVs9xSENU1fcy1RkLFgp2PPeP61gL8qDnXvo3h9mkwtr9UxVYJcTd6Kpigdfpe3JiVHXCZg",
  "key7": "3xQFSAW4YqLFg4awjimH8tKj8nXKaffZNpowQsoaf9CLJLH3vQJFnqQLwdppaFVhsM5srJHcjykTeWWvScG2SgPa",
  "key8": "2cwSdAXiP1qxwpurypzYz8NroW4b98WFJ2w7EnBUiS7hcYjFAX43uYwGDFDAv9HjPpTQgv9y5y6jH4StDjv1cBao",
  "key9": "5fN1E5YG2yFpG9imzbN62NsCGXXavtDDH2e7VDHhMAUBWuU7nfNx3yGCZyY4WGGGwgru7gtXiYXP97PCk67UiBZa",
  "key10": "4EmKFHJrPVMBrCNtAoJoZeYH4qKAwre7uQso5vuELJ9PByyVS7QgBtko6dw6L1uXSqj94BDKAXhGs2EtvT5kBLEk",
  "key11": "2qLidzdXciWHn4MHLP7LEJwboUenqWY3gWR9hka6i3QVhU1rMSmzyhhH1S7hbL9RPASgsMYFFV7xLesQXk5raQyf",
  "key12": "5WVXx6S49PN9sFptRSLqUsVzXBsZBywaLoJwxvC77bq1zr4rqjPWYyULfoGkVPU8gPKkRN8iBACDzHanMXwdvUMK",
  "key13": "fV2tB36Tcj97Yr6LZv8dSEuFfvPGJJ9RGcWenFpnztUNeqPckRh3DAfrFgNwy4BtCmWdoRjjEqjYtiUCzeBGASx",
  "key14": "2jq56sj8N1Y5G1wU2yf5Sq84fAQv8WYYnx2vaBUZHLwRM9g2NH5GEFYoF5TAS7GUKiAUAWiTh2FnCKgUnB3pMSfm",
  "key15": "3hAUuUsw6Qzvi5TGim3CTiC9FZRc6trkLaC1JPv8y46rb4E4hKjU1CrxfJqR3p82pnv7uJqAzq9s5648KabrRRUT",
  "key16": "hbFLTScNxsGkTb3k76HsjtupcdVZysw8teTza5pWrFdstL74b1DPr3gcQgJatCiCr8epRm1yR2sV13txU58Ze7J",
  "key17": "j4oPBwmTeVBxkiRS8A8vDpwRAVdSjggdNEzK15k4J4Nc2GkzBNFzDmkawHFdu9finsg28fKbUYxCfJpNsWWMjxi",
  "key18": "54KW2HRacdBxvb1pkidz7Ww69KHEbC4MHSGh3UqspSQnYzGad7KzWGVFxKb8ZX9EyWsG7Y1ih57CZtiAQwBPA6LC",
  "key19": "3jUC1mYiFfS7VPDApEREV2ppio4xx7fGjK7NwovNv2YCEKyUsU8NXfyqRJbzF8sH6enfuSpx96JriVeuospZPZG2",
  "key20": "2ecxxDmxF87uT9Ybpj3wWhC9g3kg9ss73BeEvwX1cgMiKY9hCiHmjUqdmj8EginaeGnpTafh42jDpnG8GKWTDgYi",
  "key21": "42wqrSKcWxRkZ7kzWhBwMwkZZAMcoauYUjHSWyDAZFghHhdH1MMjZpZ2drHdBoqkEWE3sABPPdpZjGKTdLCyEo4h",
  "key22": "pvfWEnwiMXJGcD1sSqNw2YHz2YerfJqRkWEh2Khzs7V4yyNxrf6Yzv9pNoGa9Xa3sXwcEtCQ2549vESWyLNGE42",
  "key23": "5d5vESm7LvBPUhhWxPVmtikT1oHwE8212iMGWeaY38K1W3z8MD2MBNPKiM5C79s6dbiDm9ehkg7QnyXwZCVseyFs",
  "key24": "3cYadVp6sGavR2F11JnDNTxzbxe4GJJnkUN7ZZuU2Fb5kpwY1WxiQpNm9GXpiTFhu5zVu7uzZ65qhmPCV4jLS7yF",
  "key25": "4KGpahrm4ppfmu6pqFU2nUcXbFp2BHazUMChV7Zn6HaKZXqpt2n4WKYkbG9wGfuj7zf3euLzDPrVXMmHgLa4Dp5h",
  "key26": "3JTSEATeBrZDT4v4ajEB1pyfwb7TDjLA9LvY6CpukpAh6ip4vx5yNfCxfmPrSrHPdYQMuf9wtdUUAjX7J23rPmxq",
  "key27": "sphdGe4Jxyk5oF8M2ujV6pS5e96VLo3FGtfTHpFDLjhFPMeYVAwDCRj5tgq3nn2PdudcNzd6so1AWvUuYQ38QQt",
  "key28": "QDMPCfPyCRJHmPeHr1aKQvmC4shoiV4D5mZUC2vJjDyf4kgaxkhSdcmoCygrTD2qRRfnpLxosKzQ4Ld6Qap6wL9",
  "key29": "5wo6n2uc4vLyLzJvn7KSZmtRsdjyR4r3vAvXTBvSJeu9tn5S9q1nDrFYADXyMywnxsurWeHpeuTJzmyNAxC6mQkH",
  "key30": "3eoPBTR8mTbJqzhub2Em5voyAVebp2ZYvzV3aKszd2cif3BunBUMaU21VnXrqy38d91LHsUeiqJo23NQTQWqWCNn",
  "key31": "ZvXVuS92JvEj5m6fvFF7DfzZh4DrYDTjP6v8WTMoM3m9vppusRk4u46BDg5bVC4M8EY6ZRMB2qJhRKVearUN3nh",
  "key32": "4aZkP32LFz1mRhCT9Jxbhv15v19s9PohCJMFVd1mZ4PXD5PaWgTAnhZdrPPzzrXZGuVQZybWHH2Y5PiATnMa13QL",
  "key33": "33kYTtqvTj3YWFxMnAmss4Kap5JFDe3CKf87uhHzAd13hhbTz7MxHKaDfv3LWfAMSSmfbH2TxuibrQHj7Cv6FA1y",
  "key34": "5kS37Z3BBMijQkuGMJPnoaydoWRVBBCTKijDunt1NU5kC5fykVJeNf5ekA2kYN3xumtyiJFPeR4z7Y9dPQRFVTHn",
  "key35": "3BbCzkAsKvpE7DUxX2RCSDQ9oWbFBfDmH5HdZnAAgCb2KqWfEsCnYSujkfuN3gN9fqGZfVLfaFaZgjCstD3usZHd",
  "key36": "2dBF1TYCyGs4KqNZE54wDccUZxvDgZKtvGKCoFBA3Q6AZgdM7rU1VDFLYMbkEJ8tRNRFe9NDHRECiB5W11eXpyys",
  "key37": "4eU8oZ1eonk5TBRsifMjaCbCc3GsVC3TwZ2ArSQzCJmDyVZX3NYSGquCHU4BAY8Qf52GfZZYpotqWbZBabeCs2LU"
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
