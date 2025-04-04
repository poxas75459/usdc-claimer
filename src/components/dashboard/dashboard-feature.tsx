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
    "5fvWaTDc5zvZRTCy7srtrNYz7dsQdX145hguL3Etf8XqthBf9cUxALPD6bEU9XTFvkA5R93cvezfbaFiWKCD44rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gk3fZDEpicFuuM2hxLu3g35dFi6Axyy4hsT5ZK6Vkc3a5dxPMghpZ5fdu5dG2GgbkqZ3qfnnnL3sB8FhWTsFAro",
  "key1": "zAJZks2KignvYs4WHZn43enYouCxErAnzNcVrphTAVAAAxUxCJVeFZB6sRittJPtqhq7sJg7Xnc3ABjfM1vpgvZ",
  "key2": "2aztN9PsTNiHyqSzdC8DmqwGBdMbTRCzQpziTAQ6ks1qkiBSDyrPmH1JMwNQQmuFHjVunujNMvnfu9EPXy29wvTc",
  "key3": "tnAjVtQrXumnHttCFYfs8igwWs2Fj2y3GMzrcEQ5i6AcUmtRi3kKHDECgzvpHV7rDSaCBHyzz3jqzLufWi5e5Jf",
  "key4": "65abRY6cWD9g24ZHEW7xu2Nh5MZrFvfTzvVsfjo1YvNtJUEDxt2udGwaCJqAKvx9a4GUXZVNUFtfgu3yZ9mBV2tH",
  "key5": "3Qgq6kEb8JSrHi1mzduF2kL25FNCd7hpoxH4wKQM7a2cyAXmDnLvn5rvY9Z8B1wvdiRhZWh8BVeDuHVs3MU1SDNt",
  "key6": "3XkaG8LQadr8zXMPt7raLNtviEnLbSRcAfwk2opKGG8ct2tqxiWT2BrHdbLtsWdfADS5pMXne6JHF5vgjPfdfSsD",
  "key7": "2fN9GBEhNzX62DmJXcVsyt6qtydw26iFUmWyLXoz6GnsKA9GEUt83wFoCWoxLdr5CTND4VhE4ecv9wD9aBhbPkYC",
  "key8": "52b8bDaA3zGjm1CEzDuvf21dSN1WRqjotNNoiMkLoQbvZpJCL6CP2T84RQz5hdZjXUv3zfJfDSmg78QEvtrifSrq",
  "key9": "5dew57zZnTMtnEngyQ2NmZRs6dhtBzDVZiMR3KhFUXvWb9QnGp6jEGihmAjAqj9P3AC9bF6Uwvrd2kjEN9BAc16e",
  "key10": "6RKu7QGQiNjtrYs59Sr3aGLM5JGsEZK9egQzdNNzVtATVHBdAtdbEhSqApfPgVDFswuipb6pwYNVZgCvjp7orUd",
  "key11": "4PqUfJgBKUis8VjTj38yEERRvwHAwCwUxGjraWLxaPf8LvdrMPFNRwPu47MNveWnVrSnYVN3MveDkxdgNHCLXrDk",
  "key12": "3L98X2VcrxoLjhNxxsvRSctQv6nisXftGayXvVBq6sBaXkcw8G8F8SLWcgyYSYQPZHHg4or4QipSDK7QLKeAEUuH",
  "key13": "2sum4SbRhCd6RG3uBqnnodWY2MCNgoH3amfLfxFDxeR6E7qG3aFcCEjv8E2i8CDzQZ5rfdeNtFPQW1LqQcWhgoR2",
  "key14": "g1iizd9yB757XdNb9TL4QbJzsqiEQzNko83X3pxC7eNE6W1geH9X1uXsuWmRG9JU9VRMySqKDKSai3MdSejrAJz",
  "key15": "2mvV9dL48m9o5okBmDdGcnVHp1j4rNyaVRyQ6YYT58ZXQppfuy5t6sm9bmJ742kyTsiuGZVgqbxbqBDptW7Nj839",
  "key16": "2hRrN4x4rmJHr2sZXRB1D86UQt1R4GUpjDyWKKJXcdkfi53VCqpzg2FpUC64s1veVi1PiVdD2DgCCmwi1xnMUysX",
  "key17": "4JQYt2hVdMcJvxQZZBQuyEoe9bw8AF2BFURnSimCM2WtDdN9i5zhLy45gQWMCP8ELD3CS57qF2Gyu8hoZjhNHwpA",
  "key18": "DdWRwnFxwGa5dAPuktZD5zof97xjcSwBgZ8DtUjekFPtE72RwRQj75u8HmvLecLgQsh5DPaM1J1dzZFvwg7bc7g",
  "key19": "5DroX6F3SpPdY5wJp1BQ4VNExgDxQerdLSeGUmG5Md61Dwa8jEhmZ8XrYEc3KBQg4u5mbCtsogKRor1XirDiLGBE",
  "key20": "4BYv2qR1LWtmMViUjrtVnvGEd3kKSeNummXkfBoUTWnxrHQAWcQLBjeJT79jQmcrmzxSD59XVh5Vfy7bhtfmvSSv",
  "key21": "2eYkRexDwcaMNw2ZDvo5PjxLoRd4cVVbcPiou1mdufbg5zuuBMj3p6sSMX8xM2MoV16qUcaWdnv8k2yUxW3zTqWM",
  "key22": "4A9ZWz23hqYMKpVKN5WmNrbu9tUQhXtMhfK82snAkM3PL8TQ8mmRsnY5EhDhx4n1p6sfNaunZ26ZLif6ShFFdmSy",
  "key23": "25j1tQaUSyoeTHocwqhKjp8xKwdZ4hF7ZKYUfSZgyy2TucN672NGSFc28xmDEckcRzpe4BTNs32EH4Gc4fZtSpbg",
  "key24": "2XXe7PYYaiFRWytZgfHETdkEKo35b459FxuDzyizEr2dvMD11VPyTjZfFDVgiN2yctALF85wu4Tjx3zoLyTy9P2u",
  "key25": "4i39Q4HWX12ci373FofARvPxqdUQqABDZWwkQjozuwAcpqT9xZyyGrxCyNGNRGnc4pZUvfCeS5Xxk3CwiXefDAjH",
  "key26": "2mu4H8Dab3kvpQbrGawV5EjyhCbuSp34YHqvjTNzoKb6EiDBXwhbqXuRzDieC3DtZ6Lvq47c5EqsdNhGTaadFknK",
  "key27": "5zX6Dv3b41Jmd14jxJEmXUubU3hEyUo7GCmw5F651VhH14UQdFbDn7ZGEWr5eamdvyiDiBq4JfrEapXP67ria7wA",
  "key28": "yzk5S7awYwj2TTWSGqVmhh26pqCm4GxssSY68dbvNaWRrzvtjWjsBFBec2kv4Fi9f9hCfUDFFmPp49XThY2qbUu",
  "key29": "4P6cMEAa974XHKTRXxnRpDnMJMM7RSJVmMH8ATmxfbRCeiqjyoSjerqGJWQPWS5U8pvLnK3eTSyR15XSQBGWgkWX",
  "key30": "isBYvoFg1RBBCEWxerSWq1PURhQ5uRpdSBdvaTEuUfu2MoYv8ESKjqUFuErJ8SmqJu316dsPA6kcswSWyYyj8kx",
  "key31": "2UacASMC3vaib3aBu5WXtgbxmm9zXVR1Y4usH394f7ZvXkzmTsaAHMbimRGMLU74TURW4biPJedSvhG6VovAkUun",
  "key32": "4xZ9s9daoWmUFor93VxmfzgTghXGKMjcJBePUZNWXvJXfccEHtgpKfqEB3et3mndw8JmNK8cu94TLyF1ViP4LMfP",
  "key33": "24Nw6UFTk5GTa6t883Pkgei1uBn2npt4YRqeCnyRWQyaJdouRQXjWB2oLtMW6D3Lt29eS3hdDCSpYnACPdry2Syb",
  "key34": "2d5U8KHZyetAUX13Wcsqcmt4CvBwZ4Rw3CmQJLBD3gE3nccZvgmyZBtNhx8uV6yakY4F89DusUE3ANzwy7okNzLz",
  "key35": "4pPwuNA1FkcgXNXLuATErGuNF1kJ21mhq1TKp9pHbqxLwZ7bG8H4PmAAW7Csspe4s9Lx9wsFKjMDfDdR3vTkwbZz",
  "key36": "5LN9CZthnfULjErBrm2FtB32NjzbwfSkHS97RsVFBQQ89cKYt93YqVPJnTWwqcGQkGXVbP4yc9xcJGDrRPmAbpmi",
  "key37": "PzGYVrXC2TFDot5r8txk5qT5dCwCqg6tA7LnPZWPDpysZPzFrVNLHy4qPTxjfAsa5MkpHPHX5yCwFRXUpbEEwLt",
  "key38": "2kEiTWMnXNdH8YBsuK9iPJdqWC9vCDXZDx9MNe59PNh42HNDaFgLhDg3mGe2nCpxHeukprWNhZLmcXcLEt5LJJ1N",
  "key39": "NyxsPNYqwMEzo6sXYDpDJ4CLQQPM3JpPBmVPfe2aswe6b7njR2WmgukSRHJmygAGTKHArZYY5iJdYdEEgY5qTdW",
  "key40": "4aqmivRNCEYhK7nfGjhvptnD4har9s3qEZAW57SgF8HUnUbBGos3Htv3uGPa42kVTNbmrkPXiQhKBp1s36vU7mop",
  "key41": "5fkuMketYkcAFyKwKA573pByJtH1RpSWiYew2HXnXuCboihb964hUVqeXjuXwiUvCZGva7Q9HxBSyE416N12ak9z",
  "key42": "LA7hRVzbBcSgvMGcc2Mxb4CD3D2e4LutLb4qbi7FWWdCsHaxqAbV9ptQ1eKytwuNeZd8nB3maHK1YeUBqRiMngi",
  "key43": "2w4FvTs6kCu43dA9P2tpH8uox6nCpvJAAqPpW25vEBpJe3FPABWDWXcb3UGrf4zdksjHKGFD8qQTPWGz8AiRCayE",
  "key44": "2fdgHfZuymcVzjvYDKkTPqujWpEzS3aB15ymYMbTvChEATttfAANRhjZYvEzPa3BWFGQKx7jNvSFtGBEmATJdTEn",
  "key45": "4ZZYEFKouKQNkPE3Pqv3pERSLcTK61qFZcWF8LXdNNPUyYh4DGVxWreK3TVG8byrBPzktsnhXVPAwjkxQ8zM82q5",
  "key46": "2A3DXeExWLrXSNGibg1XfWRqFjhGS9y9PRwgDG5pVCpBtNBtQqYRBBogsdhtMQF9cDqnnQNf4i1Yaw63bnAknQRZ"
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
