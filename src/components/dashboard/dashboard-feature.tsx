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
    "399xiUevkaQzHpBHN8CgRugeHrznausfRtNwqSdNWGrZgaUzqfnL8kbCNduMDggLGu8YomRs61iqyt4xRWTV9CAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34KUGPBmoSxjBes4WkpHidFvLcbuLjTcE66SCnvcS27Ks21npzJD9wyVa4TcUd9LzWkU4dzWhQZFuuUPHtFLSdfT",
  "key1": "2ueJQoE1TPU1kKszcCyqBQPLUhUGwjo2duHJkZa8jKWVwXXYeJPPG1RQfFaSe34kCiw3DSVGFboeziyzKpwGGi32",
  "key2": "2ch1vqXAPgyTvHGqFby5qziCy8yLsGX4aEbiGGpvBoVFcKM83B4Q3WxibgxBXnS5jvmeHoS1meJjg1iuxM2UwVHw",
  "key3": "4ZsrUmHxcRmpX9cpm9xNLqUNjKjb8xHRVHiGBvW351TF7xBFody1NVz1Ue5y9VkUThUhNA4JwPS51gGxocc9cYYW",
  "key4": "r7JfRqHMBV2rkLG214vZoaJiLs4Cwkn63BtKtxAtbMMgmkNJqudiJVz7pLcvPdxPjjZYBEfDcf45puR4UK4CcEW",
  "key5": "2e1H1Daw9gZ2NqLjTgehegMJxeZh7mTpnrZieGvxw99X5X7S3kjqMXM31RNBSAnuJNySjXbZgT9yzZV4dbrfC7qM",
  "key6": "62MRFjM66bsLryNrQpqrfFdKET5qrXd65NebbH6eYwWa6cAtWcBWgSoQFrUuHnuC8rY6pRQWXugSgMnXkVdScKiY",
  "key7": "2jCL5SpvCjYM22cEMX4XvXJFyjoMSiBv2UFaR2tshhTnn3Y4uoby6YVHg4RJ9bejw4kLyTjgoLgstRL7Xa6Av5qm",
  "key8": "URSB9L3rp6j8QcBAXKMHcyqCWEHsZPMfpG4mMEkmRSU5LxPmmBrjT3SZYsNZxuaUEqr76YLXhb74FwVZh3grSje",
  "key9": "27eRr6vYWv7iZ6H2xN6GZSnamNffgF6Cs78UdNDfKaQM3h7HRv3gAuZsspRhVXNfc8bri7R7VYS6PJJqooCrEWXx",
  "key10": "124dNqR3369z3nw8Eo59NiZFH7XUXBYFAqQxzkgLm8rXNfg5qFdSHonJAxnoxefhW17wZdqjEkzhJH7otoYbpUKS",
  "key11": "5eWzmAF8ThGPaUwUD7WiKmm985NGWvtUHkh9iFF7HCLKSpkPyqNXJq2q412r5dGXrfXRdrd5tHZ5tSxNvicQA5Cp",
  "key12": "34p725kqBM3vWAGvnYcRFUKvGLcwL5t1CsdSTAyhqjSC5pDKQ83TPPYKFVreoPkHEkuiz84LvfDKPArLYRibkgFD",
  "key13": "4RcqjfWJHVpcBHKMqdqk7mQFzb5PDn2Ha8QPnCySfMHvqqiJurmv8nXjuJ4CvW6QSzS8tHfHdUWYxeWH9Mbg2Bhu",
  "key14": "4S5YgP7Jb1S6e5X6MJXiEumLoRQb1w1rQy2fMn6M1SwedwnQTMXFd362cZE9Hf2oWeXByXioBGSFxYf5MonPJUra",
  "key15": "5zbkWmpzsdShUQPgqW8rvzqMTa6ckmX4kPaCEABnMFMjJVw93mqFYspuiY9kTG9Vr6WKkpvnRUPWHmwqgmisZYpX",
  "key16": "cmSXs7PCnyXJfg46wFcwnbu1CUTJMYNB2TUE9YK3c6yKUYvxf5atbV5gfYb7UST6Es1dvHVTbivjSgcyk9TdJx8",
  "key17": "4ZdZCvExNjPX6MCfBLn67cXAx7wMZm1T3JG2cNVrwVer3kvKrJu3rssBQTMkaygN5MYUce1X3zfz6idgdS5kKQ1z",
  "key18": "4pmfdFkjWCijvji15ZWpsrjubiLW9KrQ25XYgYyHSZadDTf2R2S4dw7jAbJxsPD5pH38YL15Y66pSXKxo25AMKzr",
  "key19": "5igEqb8Za92CXjJ488NNeHn7UdjpZgqpGM6Bncgfy4DykwtdYRPctyZwA8M356bgH884jzsUaRjdB2FCiWaafvWd",
  "key20": "67gmnwQ57ktzm4HJjeFaUucX3UmzoHoTy7a96qyhuBKWdZhe8UVdzL2M76YLV6mxa7iH5upHEXxqzoZqkir25XrN",
  "key21": "4hwoBxSMJLMsEQ6Xjg5BomxhL7H8qg6AgciWeMJa6n9hqyDpNvqir8BcFSqw1ptQWcsHhgbo2ai3y2MxMCTzA8fG",
  "key22": "3G1neBttDc3mJLYi7npU3SgifwEdT31QeuAxrKsvs5PR8mzqgswqatmDTh3iiWQsjcHeMBsHQSERmZtKHQJUTDv5",
  "key23": "3zMg9Uik89sk74mTsot1AbSqTFZGnSqYKDVJ9ZPfE4Q7vDP7v9GQ378c91b3PUfphhU1B9bT6FDmt87dWkghAHrN",
  "key24": "55UgvN14CUphwzEzesLNQnLJDjL12bKwSDyJq4K1qMrrSpwJWJ5FcFi8VknpzYQNogkRZXqoeaz1XhW7rVVHKGaf",
  "key25": "2bpBmZEwKJmdUpRt6z3DzTbXjQzYm83UU4mebCy4X9LDRV7MJcy6wMFJCuATfshzWkCBcSvid2cGH242Ahp7DtMx",
  "key26": "2W8xrFt5crVaoPLoPiDbkJCZjVZWDC4QQWtEKYbkQVjmN932bLGEBEDn64Q13mBaYW1rrkMEBZJahaFKcFRRqQDo",
  "key27": "5eePEZaHJzrdK2Pkj4fnpgfqZx5Ci3n8FSUoh9Ae5p2rBCCS9r6bDWdMZhay58oY2GP3VzBqiij1b23bMYSvnSgc",
  "key28": "2FrCrztjEWrQeQRnnBrta6SXpByhDmjH1VdyFynMgZ2kJ47XojnJGNtdbnfig6CDZxHAp61EpvTpQLNmSsJ3hcVC",
  "key29": "4E712wYj4r4WzFYuANihZNGZevAceRoDPBB3WGHKf3dSV2a1XLuCBdwbbirF9WwZEnx3A83dTJjdLTGMbYHBbpjh",
  "key30": "8LTmGeMxsrq1SGBVDd5k9X2dJSegpL8DsMijCSjpY96DJ8RwzzRcawT5xRGMxnioB5c9LdWcgj2oh2Kg3Fxb2iD",
  "key31": "41B4ZXPMbdCaZRHXuWHMUUAxBZde8AvDwjGLpgv14A8ddVi71Z1RpSjpTWnDqHnvHbpMBiiqQWNTbbqoUBJ4URtK",
  "key32": "5KqHQqQyfLPWTzfJJr39mk7rxvU6spm7z3Vyt4Sv7vB3SaCSHbpWB8TjxQVofdoUyQiRoWGnbafCuAiGAUTRyzSh",
  "key33": "2eBZfzXfyCr3avXy7Fa1pGPjNHwdvgPeimZM1Nyto6RqosHR3HFhjsDVWaN9hH39MEGgUnhZkpZDAfwv4H9wE6p8",
  "key34": "FVBvYwahsWrdYujFUJs2U2F3DRB38fisep9n6iPuYSuEuRoNE8EA3uetyhdYtShT1Vs5wWEKERhsShbgVtt4eCs",
  "key35": "2gGeoNHKDHh9HhcPYKXysKVbqSwf32gqzHdoCH8dRg7prd37D2QMNzsBLQY2L9Xs6iQhaomVRprPVWW9TfSKnGCT",
  "key36": "5wNgmZSrDttAdTi9iSPn32KwBvc8hbcp9JiRX4CSkJJuT26pfLoMyaUqcspEt6LKvt2SzA4gA7Fth67V1YpHiBBM",
  "key37": "4w8ECJZJWcgxrBXqPYg7oSNfjCE3j1t4amZPdBS1jkJ3rscg6dbSFNPC4f6EFVmQgiVkc9Mu4u8Tef9Z2GL3wBQv",
  "key38": "5NqAPxF4eAEV3wLPJHFYLVVYSc7Ly7twXv4b18oVHmwUx5uirEypeUVyYgitskEyqvVLu6MPQLsPApPY5ms4WPyA",
  "key39": "2a5a43T89aEWScQGWizVkCNgzxYVkYfA8UTrwDpL2KgH7uBytTLdwzUSe1z5gauSQbzEoa7AuygkvMHNZat1EDY5",
  "key40": "3ihJcrW3K4yimHynUnwAsyFCxJPfrtnTV5ACMPFHAqwX9GWaRsXmDME5M97PU9gJFUx5mZ4R1aVbg7RRN951mPCH",
  "key41": "3yauU6EuSa3vjZsugB1knWhWVNiyrVD5w6jLJyhfgy3iWZphfKG9X56i2PgTT1u9Nvym4dHM4Nh5A3vhh8KGN2jN",
  "key42": "5BMWsXeo7EszL9sNzE1JJ5P1fSw4r7iYxDuAFAe1ik7jMR8YhhbcxqztsM3kGap5JveYicqbWiqUTnAKSLD5YwXF",
  "key43": "4mLdtkio9vucAiTeUdc9zXDkYpseaNhGkES3z1wkgMkjH2nr84WNeMWWYJVYWQJkPJCsNTJVbr4bBxouXKUD26nn",
  "key44": "2n3M2aD4M1JkdginfE4tcPjbxigcGnM4bZLDsU5dubYC4eei2V1CvNg2Vd1vG3SgDgTgEbm5fM48ommq33qKW9Jb",
  "key45": "4pX9DSpEng1mDFyXzSAq6EiYDjVg6EWXnCgNwnPvgXivUASPhqeEMdW8MbYLaqdU1H5bURYBgCAA5B8v4YvzQYFj",
  "key46": "a47jfTK46rX4mik7FfCSzj8rdEDV6ajZJTj9evjwQaqpDuC6LbsySKx7Mcj4wkBribdmtjujwhL5bLKWrKG7TVi",
  "key47": "49NFRjfLj4BeYv4tdVcvyywvt2ZTMENpXuRqEJr5ghn3pbBa6LPpYe1PHjDxZM6FkJiESDNcyzoqSUz96H6JqnVZ",
  "key48": "veCGN5oxno6VeT6qrpsTy8uT55YQ4DPXYUW2bLjStHNT29h4feoNTGf85KMv6mzvPZjt2GswHX3PLXfc86Jxbkn",
  "key49": "9GDWiNQDBsLP6Xc3yQYkaQRcbnMuyaLSBZPs1tnbYUv9eAjxsdF4ewPq8xPkmdpag5H6YhqKGAJP5gQ3bWv8y9g"
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
