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
    "hwEznXFp4WYZd8RPg6q2ggeR3dLC8GgsdoGygYMaQ7A7FsJpP6x2mtRvgkCsYd3BCrCLtFofWFfbMJQcLaz1wAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vjR3TBN3nKRF2vYSUPitub8ina1xAWVGKm87RrejYVCfWcJAj2MWs4GGG23dzhtdU9enCQtJenMSuvP3mwQRT5u",
  "key1": "21S48SLkWwEFpT2hcctn4FY8EZCfaT7Ss4NcqwUpszStQaUU6chgBuW8AV8MHqqep1Jtwy2s9A5NRnFxjaYUieSz",
  "key2": "2aNY4HVzcHRBv9Mjv4PXre1ETHAUpLftpRCaAyuuK1R9ZaoAi9DY3xytbSaF4Yt7WKLb11dLf6MsauhBSvC2Xzsd",
  "key3": "2GtdQTdxQLXeCMp32QMCPPthg7Qa7fmzZ3qin6Pfnd7rE5BgVYMKvj9xDGYEauMi2xR7yru39zAbkY3coRiCVjsd",
  "key4": "2WBkXjEQUFHVLyUV3sY8dVwr2arvWbmsJU6Sz2rdyzPHM9VX6CLjJxPYKoBkq8PzY8ve8VezzY57wqNpiFWTHNTU",
  "key5": "2q89sEY2LR4Ys7T6JRbERL6nzkvuEAtzodEz6cTdymqLPKapgBpM6Eue2PXkdthcfpJ38Xi5zCZEnzgEGtbkFeMk",
  "key6": "2tDVsM5CX7Xu8FCbGTsVD5hWY79rSkf77J7jSJJG9sGq3vHfbD8mh8xPp7crWDmjwMBkLXXhMd6z4h4bAVPqU9hx",
  "key7": "31xAAC5Lxohjweh1ixPfNwgRd7FQTqnt2w4L8tgSZduWuEBejcEobjt5xWFnH23wrdv4aq55gHArZ4XmWBSCVWjM",
  "key8": "5mUtVX2cHvokY5caHUgwkfZ7WJvuNjW1AN55scWiZkASCbaHsoXTY5ko1ZgdL9byv7bc1C3sTbSW5U9kmP24gYVy",
  "key9": "3cFWQ7nrm4zNFWybvaNh3Sum78MJX28otbkgancbxThsUt3k8ZyMHZkzJ5Av2X3Sq6gPLx9uefddBJopM3zNHuBD",
  "key10": "3cNJwQccpEbQJkEfoEX4KXh7aSPCH8bdXd3goMoN1FY89osCFKfh6ahgD5UawajP73oF9nwdVStCJDCRXwm7DNqf",
  "key11": "5iENZx22jaFunArLnrQ8yw8EQPGgwX1dHSxQhwirVRYWMKQhsYMhMd4kZrAqSP2geydegJ1R7PFGE8KKq2WyiPLJ",
  "key12": "TNuF3aN9LmovSZ8Mcvec5cj6YmYftv2CNcRbCDBVWYdgh9VUsvHGUYhkpAzibQgx9Aju35FHBWBJ1Mon96E13j8",
  "key13": "4dEPBJtTP86S4YsGjBuRukNJM1WRHhc4J5CYypHya7QQLc9D6KaEamTnB14zED7JVo3zs2zgiYpbm3xC9R9W8M6X",
  "key14": "62PRK3hZrbtyX36Z31X44H25jXzNs82pZwAAQKbLKBi8UFXN51wJ2Xj4XC2UMRXUvsVNXiUVCoRHDcexzjdXVTaD",
  "key15": "4hDC4wdsyq8FbNb7p2W5PBbekW7sjX18kYiye2MQMWa8PtJLYLQEKGJeYqYRiLvPKHAxCQBtDeZy8U1XjSkk28yJ",
  "key16": "23reXhKcCHWZRMw26stEaJQecWub4ZRhkK8ruyxg7vfEJNoFcs6cC3V6GTRFDqJA153HphhvhdDCXB8KHgLPmQED",
  "key17": "Kz9ByWSJMmVD8ZNT7QRwDHRA2RsQXUEU6tEwyY2N2BRhk3Rofnm7vxCfRdHMF5qNpYFMVVWSSgTMe45GfGrWxB9",
  "key18": "66Uz7M757Edb7UwEi2sicFor42ggxxrzFipTRrpb7Wtx6ZZ6ygBVKQy6SyzQQ4MkXj46NpRJAQZQX7A1G8PNjpfH",
  "key19": "4KEyzBXW51BUoWiPV9EWAv4amCxtiXtpvJ3E186kjv7HRhCUEMFnGHa9bUZ4e319pWXQRhFMiUdAcULmaLXtNzuq",
  "key20": "3VmdR2v8J4juxDxguFNn7EshcQpm4a35Y7DxWRjDSTNAZnTGiUbFZG4v7jgVEoztyLfh29J5VKKF3WD9mESaLemh",
  "key21": "QV3p5xTy3Kt1ZGYzxxVXPEeKYPnnpKkNVxYj6ipbLsndkCVELEb1uMaSYoPofkPpZ9Usi4uaTF5TZ8ocMrLyBJr",
  "key22": "4eeGKj8zvoeEc8kAGgbDtZjZVSyqYrJzghCbu2C5sCbGiiC74sLaGBUYkcZptde8qt8r7hSxomvvui4H9fTC8HsV",
  "key23": "28na83E4UEM8uGZ3fEyJExqVhSm8bfTKxxyVsEkosgurAPgWbMpFhfCfUAvpfEwYv5Dpe91ko6iKQoLXkhRSKsbk",
  "key24": "2fCta5LTc8T4GLCE6ViQU2bPAkvALw71LhPxmehfCjdB6w7R6r1MNbnGgtqKNpSrCXQDzgCTLGiwz52xqKMtxWR9",
  "key25": "5eGvgBXaDAXbjAmSTYwYaHdCYc4EjWLKRfk4fSW4dFZM1zoSwL3w9qpqBcSFiBABQ5VQsTcU5UXnrc9w2U1sn7gb",
  "key26": "5MMcm8im6EvhRB8danbuJDkn7GKXiDdGEuhRnFM65qsTKY7DbAitEnUhbPcyYnd5ceDpaNifBRQSKfyZceU3SzPp",
  "key27": "2Yp6SiBzmCRuweGshdDdkxXetGjPtW2WD1mmE3sF1VUqEJnop2mT8wA8ghY68vXh8sSgfX8NxUsCujtirSSeEobF",
  "key28": "2YKbVrbAiuPzgh1o6q9Vne2NVRzkNChmtWFHcpioT8FCZA2SJgzqcjVoqjn1hvWTyHyawpeErvcjyc1KRoWs1rTT",
  "key29": "5oUmvAhsjBWSExJQJ3SDWyod5CQCn4fCNd5fR2zv8xU94pRGg6DHhyEwCrJzCcZzBivCfBYywzepaH1BGCCnKa6K",
  "key30": "4LbL4x3FUxSohombg3TNVim6ZhQKf7TaxiN5gBry8JQjsx5LXcXDWuNJvAYnU1DZhQVReq8UeUphbxQU8mwBt6rp",
  "key31": "4qg4wwUh9ATCDY52e2bTDuanHkLBaAxdcAndd2rfcZsRnDVTTVWMsMaRi5JyP2epatMQf9RPFpGhaWPSqb1iqDms",
  "key32": "a9SCVWrYrY69X3aXAWAiKUFKmQV3Tcw3vu3RTJz6RsrTfZBhBtYG7ZreujHjFtKuauJJ2KcQX3HyK28RnciXmjg",
  "key33": "nfi7QdG2Qvt2hm29FxyrTmH29Qt3mUEgfrgCmpL3hCP75UqL54LjDQXxtfcmEF7dri9d1paDVtnfqSqqTUQZEgP",
  "key34": "3XjxhYhPkY1yhbmwiX56DDHRrcgEQh8LCqp4Co24oi9SpDYSfgs9Ak8R36p6eUtvG83duY22KdbPKXLyexDb2Ef3",
  "key35": "5J6Fh4Ld2g7TvmAGcoshsmMyJ29gQa2swAUQzSWs7ejrczPjQBpCR7JzRxRydCyuZ5Y4bAXVfJZK3kWhCDmauixp",
  "key36": "3H6pEraFeoEwEx1ajcesN3P33arXGVBmSZEVhZibWCpXaBf9ZE2xTC4A4tEBxDK1NgCUcajryMc6sA7ptgEuniPi",
  "key37": "2L7uskAM8M1CohewmeWwxPpo67o7cQMyuLmLjgDAdXReoPoiyBfGVq9gsQg5zpkgThEN4oeQLXSNq3JMpCgRJDrq",
  "key38": "34WiJAC2WsDKKAcY6jrCM95bQf3HPUWLw7uVDf3p87XiEF5wzacmYj61D7E8uUbmjBB69GxyRdx6i9K1WUacNkLm",
  "key39": "3GBQfjMj28CuwerKz5o3QgMUjKan3U9CauzwgEvgrbRkZvRGUVDdYJv34REVf6eDWGgAB2aE1uS5QshtBbSiyYE9",
  "key40": "4p2TNfJhVEZbvx5923iX6tbW7B2GkJ22q9Z1bnouaxHoMQ32sJrBdytH1PbqWm4fP2RZAC4Vtzo2fCRNAaKujaeW",
  "key41": "2cmNDPLrs8U5ZvMJDSFXFFJ2JSUzRQ6zoah2TTG8PiUtAuBYEDY7L8APzZg4rucdKnEpMH3atFxd9hYuLWkybe46",
  "key42": "66i995pxZMtT1FJUyf3hDqigXDPAxZbRBjqSMKDiA7yVRkdo1zzvoLgVwaoP3RQhFcseGaxSppty3DHZTrWcRbTk",
  "key43": "5Y2HASK1JY6Zax5iHakgGbL7EffAyvumFogRGbLWNHzzJzw5zaxtFhhphKHp2iCrqCyPno34xU42zhgrU4jkx1hQ",
  "key44": "3codudBvQ99NWzCsu62jaRMnFRKfJngFv2uJgduXFZDiarGYDvSd6Vsze3KJjvKfVDMFSroPqoPKmboFrk2Cc64c"
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
