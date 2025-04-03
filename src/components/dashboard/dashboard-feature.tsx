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
    "4G91ZUR9rYuugfwWjMTVbTyEAzEq7jtXkc4YQd2RNCfaoLMWX3DcyvCtoBTezWyAHYXS9QqJ1pJABkHd5Qe8Wxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WdgBimQNMVyRjCWShJb9eL6SsHXWAudFdKeehi2Ud9ksP4LezWi3wfGW7wR8WaLi3vncL4s2XFneFTriQY6Zek3",
  "key1": "2mw3jXk3uf3a8xinnKj9CUJt4Lo54MLqusW1JwjaM2bP7zXwaqf5QKrRqbT3d7E32TfxwdVqu3oJS57P9iU65Crw",
  "key2": "3Z59WcRghda3ekANF2o4i1QKBfM3AT5sScyheqjNnVvgScdGojCRmHH1JZGf6JygLdnhNu6VPuB65KjDDXA3ALis",
  "key3": "4Z9aWBC1Nf5umsA74u3PKemY24MMTf7jfy7NV46npVsG66dUKEnnL33TtAHhLyFhskdjsVfnFXbz6AajuuKdB365",
  "key4": "B6S6NcBF1YGgoWJayYRRWxDGp2XRPYFiZ46TJJ8J8jbWoD9b4pPGq1rswboGitCLViFT7C7kXpSyvezZCby3zhR",
  "key5": "sUvVCCDzot1a4BERvJGyr6NsWjhVeGgfKd735yqADkMpK9TF2nwif6GZEkoe1BJmwLuqBBThPAtht3djcDhDKjL",
  "key6": "4Xfa4NXLFPQD9yZBbmcxx5wiEBe1nBA2XijtE1CR4eiDv6JowXfDeoffhNkHJ7MN14sws334c8uAxvGnBYkuMetY",
  "key7": "26yDds8dkn7XGkNDiv4tCML7zERLnTe9zLcWrp6aNvBEbLbuF3NQ9U3W1ACQZAU8xZmqcGTzxUeNDRxbo69ztCD1",
  "key8": "46SAf861XwgbYJCfegfJ1fMn4CSwTeHghFogx1NuBQBftbdGwtPRLj5nGLwpHfgSqVDU4Jc2iW9ZTjzNw8SkKrPM",
  "key9": "5TdoD9bQp25GdAYBiqgfWuFnipq8FB3WjuuCVYzBNDFvchznAtdMCETBLBKGVvbY3pTzvQiCckqL1qYFMikEdUVf",
  "key10": "5tGogGL62ktWmhrgBaCyLTwPATrSwjFyVJdz3UWt1BnpfCaWf2BkfqFn672qcpEG3FbXS5pc2QSfZJJBVpJFbhjE",
  "key11": "YjaaBpH5U4Vk7EDpau6D988HLAbxRUJfR2MWKGJMcZBTeZNKPiMxk9i9xAhoRLAMLJ75ZSBZC46a7odRsrgPSvJ",
  "key12": "3E8qjWWzkHT9QvhbxYdmz7ybZ3a3GgfEL2eA6tKo4EVVLqThrLSEWm9RUazc24u5EhW5SoJqiexn6fLttAwUx1V2",
  "key13": "4Pv4rHBqLZTvrmsc8HUFUExkq2DExhFwXQ7mthdqjBrZdfMhbtYrXYFdjQh2nbZvdS694oNS3mKH6wSPKvH9rwYa",
  "key14": "3pqhaWGoqFnHYDga9MzE4uBdEfmHPJKg2wc8s9VoX5kb9i54ZZ8jmYEfz37fNkhmpKggQbccFgjYY5EyB7QQJpfQ",
  "key15": "5Y18NG2jjKSBYUTQhsYKXVGrtCZE7DbvEumsApBdnHqXinz3RuNVNbGYHcibdFEDRmdcrSLoMvyJPePXkM8MXfty",
  "key16": "85rJcrV847D7GPGMwQ8cn2rESYfXiV2cPRHC3ZzFKMBYd54Bz6Pgak5MfyPyV417MmPKufLWDLmgMCXMja8tUA1",
  "key17": "64p3NigM55qcD9gQet6WxxvXyjsbCLED3ZaNSXCfU5nn9rC6vwWwJ4CHsr1XoDL733tw5ChAC47EUxMXxd73oHLQ",
  "key18": "248W3hm3jvyE1XGTSs3f718kPLWBEMo579zeqt6xHiyEKC3CCNxqw6TWguvt4LXsUBsLVwtuGQsFb2o5N4XTGp6B",
  "key19": "5KEzFjVwA2qDZVtqNVfEcvqb8oUcMePvASCaPDLBkqrNNktFc7pvxaQS1kdgE8br5rzf9UwZuDybNakMR1KhUYC2",
  "key20": "2ERw2Vbhn9ATVSoPKsd5MacWAras9qZw1EE6XJN3qtLnjKiQBbFt8i5yHGdCYk5ks67VDY89VwJoJurCkad1xPVF",
  "key21": "5Wk3fVvVzHK56yoZhQGDH8BBEr53EwwQQM5e6NVrbgqxtY63necZC2J6RwZatXCtBPcZWeXkVdyoHKj9tDnsLG8Z",
  "key22": "3Xe3Cr5sQeF4c5yFGEy6iaCzSLCL381cpZfiWHLtG6zRQkTghCz3GAurrcGuSrHN9tsEeRGQD68cgLProu6wHvNU",
  "key23": "3efQeHDr39wggXc6at7daHKu15hwcdfWMv8DCK1rTFHEuZZ3PEKQQ6NvvQ5gRCjRrymX7jpWXdqUKuzABn5jzwWM",
  "key24": "3PyoWFczgCctwerdbDin1pUGXqv5U9VMCnjRyx8hP1CtarUfa7Cm37yYb4mptrMUUwUhSWBiJEv9EQDHTCoQTF6Z",
  "key25": "34qSNaLXJrQsDroWVFnPi1kWDXSHc9ugdkNUgRGByuhiKJPB5QWPeTWhP49qW4M4WzcPpDRq3VVe3e82okN8og7Z",
  "key26": "5CfcfCpjXnowNjFpo2g6JrAshNX9g4PkeEGD5cy1yko6VHbcsYdjdPijB2xwLKx6kByXoviLMRAeZkzXnUrVF24s",
  "key27": "CadQDYXMquYyM3Ck7uW3gg526XvbF3UH49ZxbYy4ot3y8D3HSJWbC4pERgPWRUJnXfi9RGgFMgX32bf28FX2MP1",
  "key28": "2JwnYKrM4yDc5dGJQnjTJgTszckSLWu2m71Bbj6GyZQWvRYtMogsnCLntBLtqeo2ewxnyG52AsPKXT7oz6ZBURKh",
  "key29": "3QGGAHGY86ACJbpPjaJ4yofEZoRTkJCph9iX7psFkhShV3g54odsooS6c81sPeuuxQXSY5LBVnX91aGVnfSGsCGU",
  "key30": "238ArRXfPgQjvbXm3Z3VVzHdWGkWbiuq2yjGLF4DZVe6LVPt5SWs4Vb8FHCrcG9dBwXJRN9XQyrizMp9RRPYM659",
  "key31": "5x4SNtDYaBxWepAfsXUYQRs9H3BD5j91kcrm1vWJHZkUbD95QHapVCcNELGjaZFkuSW2Z5Tj3uvXpgsLHSosAn8c",
  "key32": "615JiHnWyVJfZgAud9z6as1ppaKv3v1yw2Mn9Z6EavwmXdzUtmq4ETMR7TbBibkDNkPvscqzrkmQF6apn1dxGFmf",
  "key33": "X9P4VGq2R1hE3ACrVCwgCtVCFSnQR5N46GVTzEEvLpHn8WPvwkZZThh8gb2S55AjSkx57vdXgNhFA4oSjFMU42a",
  "key34": "2czUNJTGydrej2okTUtUNavfS3452Gj3oHN6D5vLChxPCCTCbaVqCHuK8ujuTBEVB3M8zgPsRoaVUkPeTt3TbfKF",
  "key35": "Yi9htN4HF3q8jh7uMwkd2UP7cgWuFyoxUj749Zj49G6EiWG2V3n9jwuwoBwARneo46dvZubhGwxp6LyXYENbzEX",
  "key36": "64TBTfy4wvTjLruckzsHAPZTzK2zG1SRBVGp3DqHJM1PhT5tfa58R4ibgNosd558d6W6VnRHtmzJhnKhqetdGQfB",
  "key37": "33jcpLFukSVmRwNV3LVcxkQpHdsCAmEpGtimMmRvzXDDDYSU9PLdJhAcHH6xPMLQsjqr5kmRrHQwWDXuGmNj99hs",
  "key38": "fja9npVA1WPmk9zZyqcJ9LUP8HVxuxe3qSCHHjyzD7hctvQSKwQDpcdECzLEXB5QHBB2rcSx4bVAbwtDMMGeUw2",
  "key39": "4tTBEHWJesZ2HG7ZWGbd2gDRLxTnU3MrFXPdZ55ZeVH9j6N2sQn4YarPonY3zGYrVCGR1UfwmCcH2ph6kRHpE3c5",
  "key40": "dU6TDJVLgPrZSSeXnhpuJ2VaBegFoJvs3SxhTooxNYbtipoGzWrkBeEzK2Gq37TX6Gt4Ypzz4LANMjYUDYKWDZx",
  "key41": "5GY1N7LqWxFs2cZgnrfGSm5et2FD818y9s2FYYH9NoPXFvfN2PcWphCF4WTdoLMPcRier4ZbEL5vRMuVoihu4kSp",
  "key42": "z5342S9gSBSKyKm28utYzcsKDZWQi7JpBbTUdhaMjNqxyQphN27isKt2PjTmL5vK5MUY27HPB9UDtH6bRcTRY4f",
  "key43": "95bdZjsHt7QFCfagpSw5VsUativFPirMasEKBpD8eyqNh9Z18b2zfRVGNc16n5CCLQHGFQfbsqrrbCXGaWMBG3i"
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
