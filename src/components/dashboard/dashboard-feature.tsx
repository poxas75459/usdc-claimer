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
    "25yakJjpziEyTNbFGG7mpEjaUWtKnwJQvCEadyBnYNjhJvKf8dPzmDTnEqm4ZnJvirrnkXosMPMnuLCLgrN54sqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FWXgko7TCMdoFBLHxe9ieqSY67St5HfWnEJB7TV3GJQimavKrVJys24aXkxZEnvkUF6o3nT3svfNHcpnwrj56jV",
  "key1": "3Yft5z6488T5tgxzUGmguvBbcMKTGeRf1zjirbzKaGM4iAq6VL99n8yoVoDUNsjEg327Q3DnorLNQd7QHYXXEvH1",
  "key2": "37ukeoZHBMi7HBJhqoKX8bf69Wi2x9T5BvMRtZApJsXwLvzGins4qDbvt3xRxPcNUKP8gxGEtyw8LYZrGjtFL1fN",
  "key3": "2xvv2zdfLsNZF14TZyqqBGuA5fYXHzncW9sFBfYZ8sAGv1rwvgAHPQxaXzcTzkLy2Z58UpXyuv5DXrdTxDAjLYQV",
  "key4": "2MPL76PtiU2axUwNbNPnUBynuduk5V3qXWbtmDGTcAWmammFji1NfwTeDY16TDc6DvSUjimG59abUXUzuTAiUFS5",
  "key5": "3jHJH4EaCx5gax6nbSw4iQZ2tMVDPJsjm1PWz1FTqVDKAhacVc4DM64j8JVmcwiAG8MTFwuqwUEDqEKxHMPr1G5V",
  "key6": "4jdddGiWnztKqbstbZCVmoLtvC2mFxB3LnoxkujF6d5mbQJLJAppsLBhQAjcFZx6KRwTyaNohHowmmxa6u5LpbA5",
  "key7": "57Jv9zr3f38DRND3C9H3sRkwWXxd6DcNb7jxps2KjzEBEPpbaHkeX1QbzEQ42NvMLDXgyvDREqFLATQtpgjtDKsk",
  "key8": "5BD62zf8ixCaKk9pRDXjeoBK1f2GYcg8fcbvnCtt9wc1GvsD81wbkigdK6CcdZsc9NAVnALRyKY29XznmXa9fcuz",
  "key9": "4Q5F6774P4UE4A37m5jHDYruiDnuxU6oBUe4i1rVMmAWkZt7DU6azKMYFWdo3ACqPMTPC3GEH9B6d23v2Np12Sjj",
  "key10": "4TCuho5bYreDn1ipztsM94vNk1XnKS18PpN9zNGMS4VDfvziwdWEYzLA5i2mdWa8Y8pkRnERXej65R7q5ffGTwy1",
  "key11": "2qF4qvyeKNk6Zphv9bRaFkjugoBET28ZDTva3rpPr2wfVxwB9bQnTepRix59FKivi6M6ZMyBk73sJdjAWWNZkMAk",
  "key12": "3vFkjvw8GxqBHVWBJCCcx5AsoCmExNfddBqeUiJKihod97ZqvhbtprKoXCoRrjskasYVnWtybgLX5ziqFRcAVVBp",
  "key13": "3DruxXYVvypmcWiD3NXybQ14zHAj7uMVEkieewVWHYmuBt4Gg25zPLjBqCHPgyHXHSYt7AdKrkMm5XJmbK2SGZak",
  "key14": "2xVngBQ86JtSFLHsDtohTbVjFLfEm4BYkL1wiC1oBT5JD7AwmbbEi7EvXXJERRCRWTJRMhAUVV4diFwhyuqPwKBa",
  "key15": "2PwfE9bjW9oZ8AJMC3rR8sTws3o7wstytghc881bPXQFc7edNgA1iEMtDW2yEG2wr9N2L7ecAHMXFB5ECtWEsffW",
  "key16": "3jh3BUq3nNc3KBJ3tq2teVpZ28TXfaHUnMirpjoWVVhL7qbJYDU45ihR3Sfae1qKwUij9As1HCTNoprXwE1arb9J",
  "key17": "5LyY4bUWYa9RJt8oqm8rqw4i7NzngixMdhuvRdgnw1m9iWWuW1LtChh8Q2TTeDLPVP1AFhLow5tEUPc7DEu64Ek3",
  "key18": "5szJpAB5fAJ5fZkqr3DyMJcQvxLbcZsAzPDopH1XnySsuoWKCnGFFzjPy1QM5meN1gY4ZPJRdKBgjYSZS5hrUE8z",
  "key19": "kgaEy7e4XKGQrxZ6r9UwUWd14mgJpNWe9RciyQSqB9puuoc3e2CNju4TognVg8tdqgmBvNHWwqtKmyYtVCBp33W",
  "key20": "YFdGXeczuq4RUr3GVyGUs5VQoNbtheNTpmZZfhymTSWDxvRMgZJjgbq7r8BBXEvugrvFz8VUsbVSd9zwtcoqeYt",
  "key21": "sMAPA2EhdsQAut1YnUicR9U1FZXGkyCvRMThTFBjd6sKkvf13YYMf5cZwQ9snTTLxKKt619H52Kk5ohsg7Rws9K",
  "key22": "2rRaDy9H7b6nDFCWAxkqDXLxuiNm2UpajwSytzMzf4KrEEYbbFpXLvNRdtXLCrrPPqtA6cq1R68LQmmnCArngg53",
  "key23": "3Pftb3HkhDAvaP8Qgd4TLjc2nvSvtgdkEec4zgj5fnU6QMBWpoha5hqw2GgfB8L2ByLQWXdLiHpnTqVTHMK8iP9u",
  "key24": "56wpWt6x3jTVjjKx1hsryTVPdmE4hBGM4L1ZmPNLgL5TENyRnSmFYAfieG45jxX1VxqXzxfoNiTQar1vcGnXD1Kk",
  "key25": "5f1nR76Ki9yYAX4q7w5ZXWugwdyjVEwVCVH2skEzAJbNzmy4cNNSJ86iZ9Fcw64yNDVJNhf34fSDm6LA3uA1HdY8",
  "key26": "4r95uQTZtUw18Rp1uJuAa8ig9LqDhbJjsSbd1UgUsUtSQxyoRMVUJ48XxioiMv87FkdTnepFskC1ToXpqehaRtsu",
  "key27": "3G7YGagLU85XrQxAvP5xHeuPWNppn8pZRgq4Q6jg815Mo6tThWJ4JXprp9CDXfMsKUy9BtV6qKpyHdmXZRqGxuZo",
  "key28": "3GypJ23q14JRdYUrcCRoTLGA1NXbHsqDudKxmHbZDHC9NPKbqu8zYzK8uu1qhxosyZ2uwZN7LbnVtC3oxUqB8dtY",
  "key29": "gqtCU7sq5sDmTxwsjsB72dvhYVpmpzitdbpQUfp7vHHaMKiywhLE37i7ADdMt44YTvFwziq6bfPoXr27cTk7rQ8",
  "key30": "4jcUDYjhAezxGB2vs9QUZu9oEssbdgAmsXsPLJjzt65FaswtTsFPaJPF5TyYqspCuQknpcCUtA714qFf2t8pncvx",
  "key31": "2hWYb1hE7cZUEGF96B6LDg8MvPW9Sj2C5GJagnBMFxYyPwt9tj5M9uroQcstuoX61c6fiNPe97DkoEzL9rsGNxhA",
  "key32": "2kminfotwY66nLZDi6THnYZhTsS3nmkcnv5Yyse3GMPBE74RDtBizY1Uw6sgu8CT1ZezxHRc5GwBQnHbLWqVcVHV",
  "key33": "4WjVuSubFsZEZHbAui7Jy7jZVUeQUZZXG3TtAt2sTzZtngnFpNxrp7akyDJmd5xnBL9Sbs8PGwr9YxQ1tBhiiraJ",
  "key34": "5Bhq81r3Uc9rQYtfayKPVmnzuvxfCS1jmANCndKjEWmzziyAwR8G2yGw2UdyBpHkjnMR2cTjLKhsCcpuhuCoWFj2",
  "key35": "3Fz53ECcCJEUpuMXf9Te7X563j5eGw1FL5LzgPstcmEtoKCMwMYC7ubPzvYCcCjguWNFNNU4yugKEGeFW2xBLCpu",
  "key36": "S5dg8pWDaTeUUebirKUu9p2Np7WF6sGv12e3DGbEfCSH3YFdMYzw92FVJjEp6NFNuTBr4KyevqY2uC7ucMWcoW3",
  "key37": "5XfxGmdRW5crXrjvgsSqS6GCR5fKsWT3h5yukrS1UehtNdBRzrqxGKdJASWLfXA56o45tDtF7DBKcdFX7PKrjmxo",
  "key38": "5SF1hopcAhZ2hXcYAfxnC6NM3HKojfqLhckqBkMcoThcEpPVYvchjn6exAC7d6hJesQdyAmVUMst7YWf5KxRLDDR",
  "key39": "2P1XTgetfU5Wqc2DeWT1Jxnmk8hxnAtPm1yr7W3yPhjG7fBwCgsVUwUtdH77BvtCHgGYwK6wXcFjM6Gt2fpQG6av",
  "key40": "4zoUmRfdKsfeuLx5acujCRUHwXqFobyrUWVxiQphgHNb1CcJNyjFeRU37y9aVP1qj9urjxiK2p44Rk3vK8x6fdtK",
  "key41": "Bemw8GeqyR9PZv42V75Es34f3BsDdNj7k6F8LqvNrBXkBF1HYTKq6LKk4kZ8ZZzd7uKCpLd3wsCTJc4tg14pHME",
  "key42": "4MC7b1cKU9a8CSf1G23Sut7bhg7GC26UigxsCurJLSj8j5kz5pgJuELr1fMKd47KUXG3TC5Q4PFv7c8bP3ww9eX7",
  "key43": "31t8WEaYCn6BFtukbbbdcTgs2h44LYv3EkUh1qS61Dfix273VqkS6HMfA9LHCynA1Z3wVc3mxc5JiVgvAr2CfEfh"
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
