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
    "GbtL34HXkSwEbBDNJqWRFbskjYGxfVc6Td9ALW7JwmdBsXeXfQr7aiMgBb2F1DNp9fxn6TsQfp7bTysLrDbx1hN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kG4RLmGhhXAxTg9r4Fv1wCKeYyemhunYiiE4krdu7k8QT64sDgewcui9YR1iAhczxPVvGzkQGAupenkmBqVPgvv",
  "key1": "cPWntRmw6UpNi3wryUVvKrM4z1hecqXcC5NFZzNeyH92ZfzA6w3JXCt2TkKMVCMiLM2qwcfmEuoiUD7eLBLTP5x",
  "key2": "3cTtJKZXoho1w3yc4L4xgGDLf4c8acJvQgw9WaScLX9zFjqcCCqYvnM1vkxf4TD8Zeb4F1tPb1w4o5gf6JZYuDLd",
  "key3": "4JXAX5nWb44Lhw2WVtmAYxoj9qxzybzjhryAGQnsDz44futUVoNhMa9kEo7hs4eL2fFxEkmxoweixkp998eK6kBG",
  "key4": "531RxtJz1sqsrEvHUjuof3rLMP5CRiDCKjcXB2nmuAgyxyWgZzhphHNdB4MdC8RkiSLDCm3KtUBetwSN9SmnjYgY",
  "key5": "4aFuUx4rWesuHxKzr2UNYgHMUy4cvGYamYkgMfpP7xjE6b3JGJ3j2yLAki3bAxkX3xogRQQeXEfzUVEQDMWDenPH",
  "key6": "2DyWcecMWWsJZ1V6tp8LqnAT8rtUZyNc2QoUnjBW3rQpYMUTDC75uKftEYsXdko2mUkfaRczWA5b3q4JmCMvtWFM",
  "key7": "gjUXcggkmJeHJDMBA95L2fNy8fEsi8pBTCj3M1WgfGB7oFDPMviD7sS4MMZTtCguLkypujMTPGXiek1iA1tTn57",
  "key8": "2L3vWWB5idhGRia1NL67JH91Hw2a6z2G9msbuunvqFf8oBwyHRBy2YtxC4yaHhcFTts63Y1hFumokY3Dcrd6wgY2",
  "key9": "4LWKE1GZjNew5xwsWfcRNy4JYcM24rC64mqX567SR1jB2dHThrGhGMWjNHFaJFAfunA8GVmm9SRBBoGjLwvQGfob",
  "key10": "26UBPU2MjJxqukeUo1xZux3Qra2uKcW8xmzHaLjfjUwzm9rLF2yrhrsmiH38BdLD9AcMjT4kpXm9WJKqdCAmM37A",
  "key11": "3TNSraTSxcod5JMpuSWUXpJNM62Vw9UbCKBkxZMAR7HMwX3cXubks3hrhYXpeZQnugC9rR8GtojQuxntusyGXZ4G",
  "key12": "2UWjBEbrcEhRd2gqxu51Mtm7exnnThnmjzuK8ReXAm2TPwupYUsz6JK8tE8pvHBkhQCqKHuDjZbJ5Vt86HL8CA8t",
  "key13": "65NaZJ8Ey85fvBzE3NUPmVJ9CbUNfPFDQuEhw8YfhhWXdG8cZcznZbuTtTNB6ncUjSjedk4cCk8Pmj6XZiZ8Yo1C",
  "key14": "3wTne64wQwrqHzsKhqBTm2EJcXGeG5SsJfFVoFffTp2TLmyfgokURq6ZHTMMPY38YcSu65M6Y9aE89nuGShoWKPX",
  "key15": "5BsLcsTZwbCz7wUVo2HGgTf1Vvpb5RSxNZZe764As4vy89zkbrdMR1PvsF5mbveqXm2b4QoVN6czrPa8MB7DSR81",
  "key16": "2HssH4N4rSYCa6pTKy3UrMRgPod1SiDDAUXXxxxqYFs9mYjZixqVuUE4TjgrDLRvPWV5Qi7vADtYdtrX9vPAkGPY",
  "key17": "4byDAY9xpnabVr7ufbWEewU2YZyqi8CJpEoQLxbUBnE9rPFSmftd2eGD8euaAkbCKt2RAojwo9qwgTMG8VSgLsGc",
  "key18": "2ZAyCR2N7dgYmKuEWextHZ8zHnDnxAHqmwHFwTAYPbUxihCqjJMNJRZDPcSNN7QeYgFm1tRMpExXk71ZoS1m4ZHg",
  "key19": "3ywdRLVQjYij8xfncHwBPCMufL4aNcLh1cgGQYmB1y8CfdH3qbUFzoDQXcjP81gJ7Zw4mskNxRXHxg2BicN24CRW",
  "key20": "4JxGBU7u1aYMyCaWv6BNHXQ5R9Sy77VbkcdN3crf2SAS2Lds1S5g4WiiBkiw8WLRw4epGzczhtfi7Tmg4Mccyogu",
  "key21": "33itax7sEBzwSHTsSPh7eQ96KUhdPWQGVa4dF8EFJhrufr5gMZc3Fc8tJnaMSaHNwCBnHnE8dseDGH3mtQpDqAe1",
  "key22": "4koH7XZRDBTnGPEFmD83ZE7N85RVw2ExAbnkxyeCQyX8ix2a8SH7LLPSRJvribmZz5H4FTUmBtWn8Wu567fJiMRN",
  "key23": "2a9WQrRKMRKgkBqwYLPraUe8iSuA2duUeRZLYZ7Hnnta9eD6L98Mc2gKpdWh14P8JyH5k5Ejps7bQANtxoo7txpz",
  "key24": "458n9imeayEi32vxnyjPU9TQ7W9ETZkEjayPgp9JVVL98PA9ru59ghcpo2a6QJnZs1onvJ6it6m5gT8UVaEaDuy3",
  "key25": "3HHwhZHx5cFaqBYVgY8Xv2R8WCmcZLkyMAsrL5THPVTzsCZmpczZGjXzdMefc8VNVsMYZf1dR57vFmnW4bQAmQ77",
  "key26": "4yAJRqtMunzFz5NvzguSbSgnr6dhcssYEqKhjYfGvntLLoSJSUFcjveU4UtZsEc5JuAyCaQQEmvyeu24QhKPLn8X",
  "key27": "VPdfAYZwZgKKGT2z3pCoFGqdkXtagJQT4x464BBf7ZEf4frY9ktdnBzsfpw3ApUaDFrSAyjKH4h69Y6KhjWogun",
  "key28": "2zW2z8sinKPCNUnKCNYBZ2uRqqjYyv5Nbt1Go34xRiesWMgWyZFMxYBxUacKQ7S6rp1GYuf4z1LSZFHoY7TieSfZ",
  "key29": "3GrDiR1xHrJd59A5a888oAd3MxkRAxByJT8arNcLX8Z4Hww6pQ4nUx7YS236d86oAy7RvGrfcCGKyo1CpL3wbKHf",
  "key30": "341MMuWx3qkaJw5yMChqCv3K4qGs8JDbFPuwfKMAEUB7nRSou7joMAGy6FaUVLzzrGWgLNf4t7UQ2XGGwur5GykS",
  "key31": "KGrJm4z9cj6gw8hmKnLPf2LuycoJaLYUYsRTB27JYWzNQdMpe8Jm7EN8Q5QqHNJjqBXbF8z4spiaCxTu7jR4Taz",
  "key32": "4bPSmWXYk3s4ywP4Ehk4GeRK5XaH7akL1pvysr2MZC78vc6ymsPcuqPFt5XsBXsuymsQswmnC138SXdEYoFWhSxc",
  "key33": "r3J6twnNiXD41m7KuEpH9ZMLJVMgD5vLQz7TwyuwQK4YQdR33oxJuR9p9rRcbZWQyQ3Np5t4vEmr8Zj3qTbqAx8",
  "key34": "bubuBQWPDSjm5jRHrXQt2QDLUMGtDcDhgYSBmAvUmVFwygeeKZczH6nrMj27SFjJmGAbJ6QwjpaYb7VbDYKt2wZ",
  "key35": "5vMKk2uiAKVirPW7iKqaAsDhG3UxNoCqbpiHLcQU58Kof93yp8XDxFssap6Muir8jwZYq3EgDWnJcdyewViC2DyL",
  "key36": "ijAqRuxpBGiw5FaghEexGNwRG42C5o9MJKcsnNA6XJxwkNPZEmWXEnDvnfb1JqRomJ1byCKfhMW9XBNWfSETLAM",
  "key37": "126SbsD46P9pA7AN7TWKdH4Nxz2X4ZGn6Bu8wErQLZxdhCqSGGVMH5v8pxUZ7N6juHqaT2WspXjTrD18jm7xRuoT",
  "key38": "5qZPeUSkNSBZWvobx3MpMjYpKcCjYpdTUgZNqKfBuNjS3U4oB5n4dDTt9RMo7J917X7n3tesecThPSChNm5Krrf9",
  "key39": "5JSD1i7vFnAce7PtkUs9VCmovBhFiGwsSFnKeshSjgkXmWc4FTwqW2vUmQK56hqoBbABYrJtq9EQeALBWEYzCA8o",
  "key40": "4FEXTgkpXcoWV2dp3J792tXAkU9uoVoTEEGcjgk8g8HNNbbHhes1tzHa1PLv6hSmuoKzH3Vh9zeAYbHcW8ejuFVW",
  "key41": "29d2BDMyCsoEnow437CyrN7HdX5G9xGp51YLx2Hq4YDWRraKDZiDrHi9bVCmURW6diQ8VSyX8oN7d2VWCeZ6psyE",
  "key42": "5Y7c4zXenujaf9wY2hmt4Hspqp4AUdAgew6PzJmDAmCFsGQUek4XDz88UJTH9gJ4TXzpKS8YWdEXXU8Q49uHJAy7",
  "key43": "LJfztaDSXGkPar3K6FtXLiEZVAcbkpaoS26GZtwQd4hpGB3fNriqyV8BMu82JxDgDajLqYCAD23uLRWPnExR7om"
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
