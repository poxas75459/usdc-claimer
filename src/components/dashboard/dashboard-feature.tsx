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
    "3VZSXKAA4jztGP4cyKMext2rjcijoLcyWAWtoPE5tM5sstobx6SErcr8xyzFwJiHScm5zpNQy9PinpQATux98QSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i9TsxRxT5vhzhXLQeMH5KWY41iuzkuwVpX57BQ2Euqn7MbPGCoxQa7AcLUcd9sQaZYGxXwobiqbE3ZGcTtrHZpE",
  "key1": "3X4NtYzxinAKYBz4cSFCpoagH4FtbttFqs2xFGy2zaj6XBP1D2Cz9XBPKyAzor9HFfJq1Xpw7LUguvsZzsH4gUFB",
  "key2": "3pYmVixcuU1PmSm59vrTu8DZEJ4KHuEaaiKFvTKN9W3GR81auyR7s5bMhkfHd9DXWCK8RSk2RpF7LnSd9HsF19Yo",
  "key3": "4m1996seGqf5UmPEYxTS1noXogh21S7kXnQtgtLPoFxnWA8UK2eEaqoJtb3BDERGepoEjpFoKD9vFDbi9cncAfYc",
  "key4": "4PUHr8NNwhL35V1APqeaoTtP4YjcppopVyND52Nofd8rftxcN1gbKGofbnMNWE4H25LskxYDDW9ohpSDHXSJT8pU",
  "key5": "seWaJJHSDTNfP2mrZTT27RDHKkQ6YUWWMRMjy5Cn6TCRnSSw2mg6akrr3x8Dj5JjnKZa37fwLoGsE5YbqCM7A3Z",
  "key6": "62AqHfkXodjrxdZQt3K2GZJ2PELybP3TgcDFpMxq6NspDtK7aayzkPjdZNrpnSFNfCAnoxNE5ukB3VEFc9j5q1Xk",
  "key7": "53ef1EixqUEyEJcf67T98GMfxFuKmxNBYqHxiJVueNwK1RRiDo9op7ZCCKdMjJ9ysPgUBq8pBan5i4Vvgw94KotE",
  "key8": "5z4GEm6uPQK3veFqqh9NSqXz3SDsD1XtVY7scepKb1ykRLthNCv3XetRGhxAR8qvwcL82QGVeT5J8UC9PxUY8Est",
  "key9": "4VngSWsCC2n3rVPZzWvYdfeh384UcSXfp7gkPgNHjEEAurzDHtguisuQxq7etGR69x4588v45QrEjCZtzvn6GJEv",
  "key10": "5c8CEJVZybTv5qYiASSrMvYRXbq4eRn6GFF7NodVUJQX9uBWiVg1uF7sShQrQFDv5LfSG3rgjyFmwSNqLgySZXgn",
  "key11": "2gFtpYEAjFq3tFp8pBmFTUjcQrovWmzNRQA96v7xTaZs1i3JGENfhw6Px93EEARo73y1kX2uDePt6ABC8jmorXp2",
  "key12": "3u7LRinUEPFt2GYz8t6EKLdohMW3VE2nvAEUoX6rEVycVvRVZqoy7AU2wgZu8RDih8oFED8SLBAH3ve6qrDg9v5w",
  "key13": "2X23G9foTK1KCiRHDLoUvcJnSAKkQx4Gi9eFgAQaHiXxyNyPs36YdGvFCH97RD85noR47MQCQMMCvfiP9sEaDCBJ",
  "key14": "5L8bXhtdVWVpFsnCKr8gQZcps1z6fUxTuggkbP1QVV6rpiqTGcZV7HwH4mYnrrJkP1yeNf8YWrgzpAYaEqmVzmVi",
  "key15": "Mt96JVxgdBfVWWTDnCDH7XV7dBTBUdogRfuSRZbHHJUF9CzCZjUSKBrvLogBLxnNuMQrngdsGdkKDDc289XMhsW",
  "key16": "2uBb9u32cS5yLuMDjAmv5Tu2DtvGjiDXr8nFXPijS1Z4LRRgUeyn4jEut1ZZt6kgc17zJ21PYgy3JeCe4vsgt4xD",
  "key17": "3GkueyvXEmHcCuZ9SuqMYYc3Tn6hFeheYdPMgHrdQ6TQdAZr6Y5bCUQj5MQHJC35da8CZM1Xg3czjwB9S84x9kbg",
  "key18": "TYZ4okwYwJCcu4mq2phedqLZfBUMDKpRk5H8NUCPFwV23gKyEPnL4JL7wLMGBC4VxUkd3LjduU4kKbNhTdmg6qa",
  "key19": "5ohtgMEePpUsnwuYD5eHQCpnDLT5aE7S6EtYceApGcCotpjqdgJjVKyv3Z4pnWXcYTuM2YYffbmTcJca8k8jEMMd",
  "key20": "2UUJJw4daX1z1gFBDY2duE3mtiXRecxJRyxu3otnUy9Vx2PrEi9ZQ12wKsRkUJHjSDnTUUj1bfLNFmSAUPugKLV7",
  "key21": "5vxezUaEryctLKfMYqFBiAmcUHRwXxy8ucofHV9FXWKwpMrUN5uF8hUUdEdP8URjBpuPCSqF8v8VXLgHAcZVBDtE",
  "key22": "5MxTvomvsA1FdnJ7ahTyVvnUj2N3ZpvfqkKTLFAER3rSJx2fWQbck9ByceWDtB8dfkXWEkLJFmGKhMbZoWm9AhVG",
  "key23": "3GU1hJ3Yb8hiR1rdcwihCvabwXam4Hy4rt9rqoFuxAUSUjBqEFUdcjbRGCec5yuyUfnEwVBpymZDTkgfMTEnztqL",
  "key24": "5DPfqiYMdmWAHqzLqcRVaWz6vRgzHzN5P2maHXhoRpLPbMRedhbnQeiNuZT4EfdU6sVZquTv15XSMrU1TVS5igKE",
  "key25": "3ieot2Tsomjr6Sqb4CCwzXCUpUiPRgdwyPyuWBZFceGTTYirr1nWxq6S5kbuBn2T76JbUJzU9vgYEvX3m46qZQMZ",
  "key26": "384yq93ufF5tQ333L7JJ3dyDNEKmtSzKRnY495sTVsyHhhHvgqikPxSyiztkFwnjnvPHNX2rYxJWpgYMCCd8qjDv",
  "key27": "2DDEkzDteZpHiY2RdfPwkBc3DdH2M4a8Rc5EJ4sNvJ5Kg6h4bx822eLZfJmHDRHDPxVNCLSLGxPqyXu1YYzSnvjc",
  "key28": "YtgB7zzrUbvoTkq5yGh1uaZvMiS8zcGwaekzVcSjfu1eSJ5eYRH7Qvvp1GayfNVAkgREPsn44iVph2BnaJYLukn",
  "key29": "5Hin2EEPDSWmpQDRAcYr5CrEPEZofk76icjrDd8uEctxbeNRdDKF7Y8jhMdbnfDiCgNzrqH3rNuqdfnDtSrwdTDW",
  "key30": "5USVQ5Vowb2auw4g6fLF4ANSyCLEzoWSZQnLSyZDM4HPvKk1zFQNpYwD4tY89rTfrbJszrcFohg61NExtosJ3qyG",
  "key31": "2rzuhj2y51yZMW2g2rF1p35RdfvLJRXd1MbMTiQXqQv4CFy9NfEhHHYGHrSrXqWxGRN1EF9jinRBbLb19vnvePPN",
  "key32": "4K8g94whGeeTRQXB8Sc8kYnrLRzDohvdwm2xazddjdtnirCe2xYEgp84d69M2eP9SmkmUq9SmmT57sJz93u36tDT",
  "key33": "2fjHggfKaRUNCCQfW8rAEGjLKi2asHBATkgzBaUJRkZcEqFiHCUNsWYraDrNr7yVTL2tPESBPpE4k8PJkoCs31Qf",
  "key34": "2DDoqQFymxh65EMZ52unAteyLCEQpoo81PptxrHavH8rEtb6PEY5mFBJ1DpEbgsjwubFfSzRbPJopD5afp1P13Zu",
  "key35": "2pRuGhv68XCWuuc3Hcbrhn9RsnTkX29f45tTBN61zFwGDLYZDnSqsNS8ThusuH8bgM71ZMLMGL4VrC63rYkEKnGC",
  "key36": "2CxroFjquU2k5AZTd4o7Rki6oYVpNVgJgg5baMgQvidFa8GSyaEgcEBYtu96nGcnCNbXSNgazNePzABGimQDJjKE",
  "key37": "3LkvBiiLBxctoNRcGqnuwJopbHThkMWKEMNEJqrCQLJ8pQR96jpfBvG6jgWzkp6YGVv4ECHB1zPeyfNvJbBcbBJg",
  "key38": "2LkdNVHtb3JFQhuAz1pcu2Ks7K4RAMZ4MKzMAXW83Zgg4p7s8H1HegvcJCDWuvhLuBoEUK454btmVHSS3PWPMDLD",
  "key39": "5NGFFdUXAeeNmjXfV597gvDZFXuNwN2Z2SXVHPRAbu93cm24j5N33Xb3xjDaGYvjkrdbvcc4wMxSsvsbAbdcdJG7",
  "key40": "Q2qgP4iwopkimAs4a4VrLHPjmF7XLiWRf1TZ5Egom85k8d1Avj8Mc2cX9fVW7La1hsKgknbKeJZkHZJcg4NjpHs",
  "key41": "eDv5jZgATz4ceVqMtFkvUAFAZYmYAX6bwTLoro917spdNwWCqfniKKGM1Em7nNLX2seKrRi1U8fLe4eUUU1XxuC",
  "key42": "214svDrUrf6EW7XbqPgoEvtUdgCd1bzSHcBRDBjjQyN29USYXQehcBwKAAbvJ9xG5U3yaF3EGvHN7sXZZwTuagCh",
  "key43": "3mFZqQyHFjCkM2y8KXteM9EE4GqXxdh5HyNFdzKjrbwXicTzX7Jw2JrhPqaiqXRTdcaSXmsBJLVuJB4aUtUJxe3i",
  "key44": "3vCektr7bANyuAwXUkN693Varzi6PVjZdC1UsqV3WWQTKpBsAdYdc78Pqk34qbe8gPx5SiDwDHAdaMq6niBnmxrg"
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
