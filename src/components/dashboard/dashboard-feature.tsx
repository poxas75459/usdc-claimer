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
    "kG6PxHi6hkFxZJHmaQHYvycx2jbb66ciSTWZrPiUWTM333uJ8nDi1wKwtPA2f9NkBbxZfRBYPEWe3y9wVbQYZ8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SYSxCpe8Sk7MvN1wvG8htP3iQevDrKVrRg1SzAEwAaPDacVhkR4pTdKKbVGggdPSDJjyRDnNdWhM9ogoTYzKprP",
  "key1": "iqJ5WuKV9TtHET9TMZK2T7CNEvQDu49N2Rv712azM7auEgREEZESsyTvmh8Vjmwcq3gKS8sS2xrceiRLBF5G3hL",
  "key2": "4Cpp1YZ9t5ib4kNfySC5Qt3xM6XiQYVB2D1GuTX7mQkGrV54Afmbii8cgyTJTG4pjoNMct8hKm9ugyBPMegQSH1o",
  "key3": "59dsdwS9YthLX3mayV2JpV7wYNf2Z9Q76xXaiyWeBvY2Qsa7jfLhWkC22FVo4Zt83eELv81u2QJ4z7jNehqySQ5X",
  "key4": "4Ue79Xn3CXWG6QrSW2a4J5gmrXBia5Wk6dBNYMUMfFtwxHKTEizSmxaaMy5w6p1aJaNxRucgauuQGVqpKEWcJ1Pd",
  "key5": "3tuGz4znQkoFj214gnsMxTRqoCs2pp8raVnUaiHd4KrVydDX9syzfb9j3iq4iPuRr5dce9ZPr2UZWHtrnwSLu3JF",
  "key6": "ozZ1fWmKpnapP9usDp6G8ywKZMrR4vDZCn9AaVFZQtMoyZfcYXhYSKssEKGik9EMcS3AFEv6FyA7feMfMyaej78",
  "key7": "2J7fvvdxQ5ZEuyyH5nR43sMdgaGkFYVmtzBDs3Qdq7uFhBR6Zrc9HkGVSvmU31JyhMwBdkSYhtCiXAGqGTWvPRXV",
  "key8": "31zntETrpAUuWJmVLS9EQWyw8TKAL6qf1p6L4LML3HW9HoPVefoKkC84pGHQs9APMY1A11D9CtDAgDzm2GcfFTy",
  "key9": "9SQXpm14LfkhQHesGw18WXUhmk8QHr4VeGzuYgkrb4FesViSV7ieFqMujeBXPkVz6n7Z9JgHQ8hqpFUhX6z217T",
  "key10": "3gy9Koh5wE533q49vV7jP1b9nEp3kRPAhN8GNM61FCDEGhk53wy2WaaEHPB76WTLnps6xKFYrGKgmrduSXSSngqi",
  "key11": "4wjp268qrr5W9C2Tzrj3iRKvHRy3bdhqXCvFbxudha4QPGSwRZKW4SdyqXKb4VsW5RmiMiJV8jCakzC3wC35sBr5",
  "key12": "2uHPeskmZAmspDZVH9iGonVfooR1VourSZwVfivPJNxZDPKz2A4fbmEPbMjcq2VCAA2RmTREi5hzQfjAzryzW5jY",
  "key13": "1xxVs87848G77jmXoiSWA4dFcfo29jxFfGaHLtDcVZCMJESucgs8nVtNQGDHo4shL95PxETCS6MHdbhcrsQroFz",
  "key14": "tFRmwkCBCvxwscEpi6Uq9NazfS7k2QfDfAHEVZNdJe3vnpXhfsRKaRDTn7znh38BtXVBcfXaHgQgd1idAft13pL",
  "key15": "5io1WryRYnWgnyxmgACDVqmsiFip6cA6ctQRnyKAWw9Y9LQeKBSpRJZnZZ7SbQXjzHLT9oU7yoNWrvgk5rsBdcJx",
  "key16": "2vaKE3TAPwy6earg196oZWassVmJWVUatjWkhWyiApFk9WPUshjwEPbLYCRRiHPmczekiN4We9Y6ndoZTiSrK242",
  "key17": "5GSSAdopqATmFMoHCx5ecX8nEbphiKmt1CT4zDNvHRLfJ1dQp6NsNupy2RJ19wmZKo3Jm5idb82xUFmBrN9Tb4GX",
  "key18": "XZFs6H6oBP6pNkEDamfCd2MqZ7S9Z2MbQ3Vy4A4RcUyCCp24DWAXxGmontnbYYkJNQapC98hPrScWJpPaDvH3HE",
  "key19": "EXSjeikdEQmpus6jRnE8566JVAJdzMt9WZG6HUpkMVKTmNrvhtiP7xKh7RYaQd7bxGZdNaAJV1AwXr4nrDzJ3Nw",
  "key20": "2KkdTK6DoMiGMPAE45ZKkEyt5eVTyQGhH7vaLNyLkj9P6uymmAxKChKLTLgbRKvBGA8EaLzMPUx4TUtbUSjijCvS",
  "key21": "aZKFtBDx6k9E9Mc9GFY3fENMwAnV96UfiJmAxw8HGwtiEy2TigUawtHL2JZF7f6Dkv6EcuYaHDEfGsUx3dA4tnD",
  "key22": "4GR4THTTP3t3uTB5TvSWPZhPVkTAFnFpzrBDnoKN85qSCWBUo7vK6zaN3xxm4CRRowaBjw5ZXsEhiHbNjBbWBxfi",
  "key23": "5ySjiEDJinQsCMNsrZRuPtjcf1n6v5HqwtkymhyFuprwFAcJPqgBmhXaU2Ytw2Ajtvb53J7mCeeCwnCYcTmxF2TD",
  "key24": "kTkVDamKALsQucoSHXfDowiTGCTdhh3VQxFeBY5E9DbrmGhbkhcQqpssqnpxYdSzQMVtemT233w6pNnzKCTZgLj",
  "key25": "28UHuY3hdh5AwTkewnrTTMycffZt3Yr1KcvGN6aMWA6vX5CWGiZYMDCBFjugQXMTmqLfE5nEydJtib9gpptBK9Gc",
  "key26": "k9TujiVMm7v42Qvp9cTFgG3yLA3JPMpcxHnXXob4njZgXc5k3cSNBpVx8MuXjUfWRJUZs95UDgRXt4g4m7oJbHA",
  "key27": "4kgJAsAMMTrjBFZbFKujoCLeux63Rfj18xbsrKpLLLntT1rh4sPZKwK4Hn4HWkPabKMSqf8rWPUnr771KwPowVB1",
  "key28": "3Lyj9jErt7FwxQZMvw1pA8PuPJngrW4imsDFtdwPnXAmdCiGjDV829L5u5Rt2oWzyYWTedxSAgmdokUKitd2LRri",
  "key29": "3SNiAHR7CB6qwRSxYSVTZDiFFCjJJRo6rDoSK2S5NVus7V7EBveyzkMzABmCEUMsePQQk3pSaKH2tgCrAf2DyztW",
  "key30": "5MJXB8aiAysbxqyyi4UpSnLTNidi6tbLNKtVdoyd2QuF3okramkzoM7XdXnfmFxRfnu7owaB8n8vPGyYCu5Ba6GN",
  "key31": "2uxjobZRLAkkUyVbvMPLrgjwLuAiXXMxDWRhrAvGJoKH4G1wMQt4tJ4ewHyXARRvNmeFLsHWXGTdnJRQhhiEHCUn",
  "key32": "2CzRNrnTWmJngGVMFV98wye4o3RXnpCBUKGNgERSzymehRrCwhXAHTjq6F6U3Yj4X3YdU9HTrQ9nkjzEVJ63d6xL",
  "key33": "51pkSwt3zg69yNHrTb7rfAYScNgzPxprxEqE4Eg6Ne7zRt2DdPzfLmkJXdFpwtkCth8RZiNwmQUyPt2YP8cRiEe8",
  "key34": "5gtefna3x9SQcrRc8ucxajk5rEiXUomWoKgyKGRd5pT7L9cGAggSKA9otzkvyS68qzKUwJU8pLiZvqhy7UFhh7uq",
  "key35": "2QJ2wa7RMFrzGFMMcjPyreRM647Dwdg1u9upSEevGdSNc6ufqvqMgfZMVRDFwMDL7Mkx9fpdS8DkmsDpqxky1gRE",
  "key36": "bjD3txi2PGpBFM7ud9E1qyoHGGYARJRPeoNJFDoHTzUzKCDKxJVXTQefmT58YZidUnfXCnyhUpFk6NWzGb3ngWk",
  "key37": "4xQufL2PSURorxFKrhmZwtTvL6sctQtUvMAdUAaapAswL1hjWiMKK2vGKT2yQUTPbV8GJjrGcZBqKvoLAemW2gfH",
  "key38": "3X9voAZ4pYuDuiQUwZS62L9gTZ72b5uxXPXTvK63XK85n4wN64NqSCtTEMjfryR8smo58r7nv6WGoCyJcTQCwBjr",
  "key39": "5YYWQLdrnWyMMSKqZcano11YtyCx3zwLpf2W15ZCHbhcUVStvp5GB21uxJSCCqmthb6HNwx8coGyEdFeCKevG713",
  "key40": "4Buzv8dXzaGJQrYdmTJB8AZJmeCHn8k9gvkb9Xh7wkUp5vdvQcejzCLp2SXfLZP1VDTEFNaFGWrXqz7DFv9hFZV2",
  "key41": "4QjF7eeXYxM9yFxXnYVc34RrzBZ3ru9BePfQn1WhVzaPQNJRnUCcshe7sioh97T8cPAdiohU2BBuCKW7hcfhY3T9",
  "key42": "2rFBFon4SttLKd5JgwdaZbkkntYPkw9CckXsqhTec3PaTnJKkiYPnfCPnL2h3LGXRU4AvBCpdHSkZgEEsrWh674C",
  "key43": "67mMXgNpjX3NrQ7jo7sZwUfdUUd8zxfQQXiVG3LphySButyAh1MyR8ycPnwAdjnNmbPugBkLqAznA1MbdJyLreq9",
  "key44": "ZmtzoTutQY8PcnF8diFGCgV4WSUKYMtA8wSafsw9eLDDiwkJG1VrzL1q4eh93tngYqdbtYDnzWsDgBG7qUATo3j",
  "key45": "wxKKMviV8PdhmbyxedUxYuVr4nJJuTYzkdu3CsSGrVocQogdfThsL3ox4jfc3M5SDtnRxz9ergjGb2Z8C7bLMys"
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
