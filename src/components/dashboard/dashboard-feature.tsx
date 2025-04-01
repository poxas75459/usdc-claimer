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
    "8kmuBDz1V659r8Eub4Ne4RnfjLKRVXTDZQDjg99F63TunaNrzuiPUS1Z1sdtyrAckkynvSwr4dqeHZiZ86d3dAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35eJTyM3LrVrkakg1rZcNSjqu6tkVuifJHBXfygDASmwHUzCaRHNR7iSzQjtHAfRBbmQnXnJj1pTEd8xAc32h47u",
  "key1": "5BAe3n49nXEuiuaB9cq9Z17jaMyiz9zhsFr6V8PPSDP7hMP4KmX3Wp3Udsv2mG43XFCEXt2WRk3MrpVuqPFki2YE",
  "key2": "3A8BhH1hAneu2hFEyuD4GP2h1yfdUMyf922D5ud19Y5hVc6EaGpLZeHCve8m6WpQyxYehq2umpSvvuXVXwZjad5j",
  "key3": "2pDVFLTb8SGNRX9DLnEU5aMUi9nCTpKT3zQhRTT6KgJCKfT2zf6kT8uzjvNKJRzdLSzUWCPqAu1YCxmhKF3nT6N4",
  "key4": "48LxaKRHiNKmvLSjWCWRQoaW4MZbMdugBcud2VZ72ysUFLtCeFq2WzrDscDfTmKdt572ABXVffvHbDxngVpFWdKR",
  "key5": "2BZB8annx1znjpVNEBYqcgWA6xyW3KzaZjhBkrmfwA4W1MviH523H4odHo88wCDKZaLfJ6Kw6fZ2LF1YeQRucvEU",
  "key6": "5Kn9YV7gf9iaC5KUzXihNgbri83vHMXTtJkG8q2eCD24sxZm2W8hdPbq7LwKzBTJPtfnY9EH6dd8oswgtM9Pxo8m",
  "key7": "mM8d5psw2LGUjJiMRSV8tm5BXSqpZcoH1fwpMpZUaLvpWFaxaqThY6sSkE9B4yW4UqAqWMG565RRvsCApXSyDxE",
  "key8": "2S5X4Zm6S27UumQ816AkJ6E3RmBDBnxyccpMuxhGb94czCXxmBneZkbu2SErziriRoqc8GjxFmqL4H1Z9tAFLnnV",
  "key9": "cWTGbWfccbxw7NsfspNtEG7D2MVwoL1hu8yTg5xHDGdGvivygV4WM6FGGr5UovfxK11sgzc9qTXoZmfd8SMJF3C",
  "key10": "5HuTknB4poizFHrWrFPAvsnZmjrgXu5AJgGETytTqursaTJ8vYULJyDbGLAmgsQiT75ffsPxQKAXbYb5Yx7WggkV",
  "key11": "sQi6y83i6a2TvnP9YAFahUnKJFwnWWdXHQtSRoWaoaYLvbjuWfWYJGD4sc4StMym3pdaq7CJQGKoYgsURrMxTET",
  "key12": "3iKAArsg79juXT5pRmkFbeG4tYRthLHGN7DKF8tMK4DngEvDueKQYNqYFSFbUWhQqmXucAvCmmLyCGdLxBLNrAdF",
  "key13": "3VSZ1iUkFYiPGPgEYfab2tE25W1qdAnsoc43fouy2Fj3XGvWxqQ4ESoRViU52SWCQDdn73LCHt69N2gTEJboFn4r",
  "key14": "4Wsv8NLQR9fBpke8Ppj8Va5yp2vP8mRmtLbVPf4mr3qi3Y3j1FFNGm1oMe7EjQK7YwBo9m2fhapTvDuRjPUMhoj6",
  "key15": "2QshJazWACVr5RtAkdcUDztTYJZVAQmPodewbfygnNgNBQKoEwPcEt1fRm7po3A9uLMTDSficoXxkz6KKeAVhb7U",
  "key16": "3obVSpB4HsnAGmJKG8YcH8hLENqAGyqsQMabmQRmv6Mr9UQQrFv99MhdfjhK9CXcnpXgBSx4tvm6215XHudkbZmu",
  "key17": "4w6aYehLMCbHoffGXV8V6oLZdfLv7iqDefyDJERo82kZYA7NEpp4RVRtcE9AcbRJ1TEcr1Md6KZP4uxJsyYgCbXY",
  "key18": "GTgz8Q85kkAnwx63Q8bFsVk4E3UW1JGhvkLcN254scyq2qCUZLuNZvf18DDVeinmqfXNUE5j96ss8jSUrDnykt2",
  "key19": "5tgb62Ynns9zgBNYWRYhosX4vzxBVFLCwt6DLoTp2LB5tRMQ54q7udhJS8kiuXauq8rZuWm52uNhYsWWD1J8xwf8",
  "key20": "3EzPvfhxEMuYs9vu78cx58tDLTaxYr4rdosZUsDHw8Df26ssNvUzXSUxJqsCV4oProew3fVkgTAMJ3n9S1Zucs8G",
  "key21": "FgFzdWYGaRVgeHVq3FLkyacftG2difanMkLMgsmj8sqmkTzJeKYp1DxEVo3qE9mmE382MqfPBFdgcoKeSeuXiPc",
  "key22": "4Wi9VqBxdzyHGyxqHAjN39MTQcCjKaJ1cjdXX9KU1H4hAvvnGrQLDb45i9xLvPNYVMwKswiTNuQWdmpcgQ6QjGYK",
  "key23": "3HNwH5ApXPK5fvbZv3hLyoTF245h9KJV1FAn9yLRbUyaydCwKQ22MUDinZvt1Pueatuf4QG9Kk8isdrhTdCMEU6q",
  "key24": "ppWWmucM4pmr2RNmB4uLDFmh1uB5AT5wQ3KLyFgpbBpJ3KPNCAGks8qsDPysCMAkyGeZPmMu9HfEpngmiexkSHw",
  "key25": "41AyvzeEht3VaFpcNybuRBtVRvifQj2CDey4MFMzHwxiqhnsdpnLzF2AJQjKrcUEVVUFWKQnxUzpb61PFEK1Go1k",
  "key26": "3pErYXvCA1mpHFijoQ84dPqCm8mJzzQqyu4m9cd9GcEMQ2XWDyyJgUMaVNC6Bm1cRXSQ3kerhZQuQLbnNBbn8E8f",
  "key27": "2BsA9dnEdvPrKnbvv25v879cmyB9krR7x6KHMmNU3jJGJcmzbWJaFdWjRoedN7BzFvxfbHYm2AMbtF4CnBaeqLBv",
  "key28": "29GPABQKHTnEprmPFXTT8M418p6GbfhH8Toe4XuLcXYfumL5vBwXrkv8HLKhiwFqnvx21BK1FdCqY5GF9ywe1DGa",
  "key29": "3GRmcLjiLpDVqq4R4w3jFK7xuHEgHSdq8WDa5DrdaD6Vj2BdtAdEucEeGbBJskrgzebYGCZ6CerdsZwKNPXavpn5",
  "key30": "21uiQay2PFfG3ZxNesgzc4KeVTJUnkJYRVHmu7QbR88GuaaDVEJDhKgJzAqq4j4i5ioGPrwwsFM2PBQc3xpqwgct",
  "key31": "4CarnaBRJjvBBh11kY3iP4eW4BD34zFn5vBRNse3p5xERp5aRtf8Dnbhj5EzuDC46dywTHDttQDbTeTTPMyMedz1",
  "key32": "S2RZDYj1dEkrWMFaxpvpWH1VhZpF4eXMrtNMdAraApebK3EvFutuw6pk68ksxnbBqoKhxh81r45skQ55CoY9vkz",
  "key33": "2ttNE9Ko1VUxid1W7nRvEACz43YVy5dWs97zTaEXpGuwvkXL7r3cgdsTHr1Auy7H8Dy6NUEq9CVCSxQsj7TbG6Vb",
  "key34": "3UiUuroNdwtW5vDxtBLDhD2Be2kRDNbegp3y3WD55aoiL5L9fMhZ8T7NgDqgBA3aXh1pdwQ9z2S2JpfAkRbHcisZ"
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
