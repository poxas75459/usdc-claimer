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
    "h5DjxexWtFasc7g1M6jh9HQYW2XzjHiZuRgbMZ9AshkZNSbKy1ZtiBE5DMAtb5TUACsqnwvVEkpWSA1fpjKWcxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5muwivBHCr8MudWtPTtqYXBES6vQFR8iYj4iZgsgd4kk8VxAjvAadp2WXbVo9tKExJ7En1d5aWosPUcPXLfqTfAA",
  "key1": "41kL82EG2jJGDrVMQ3xEFpzqReWVyGT6wRstCDeVgtqkYzivKDNtjSK8dM6AdaWMAqWLAmdHvWKhqEviRp13JHYm",
  "key2": "eBZo7PuBm1NNT6xwdiD4SnoVNZYCUum4g6ijF5wZhDVKjDjP28VXVuu4mi4fHGEJNw8dE4oXjN12mdpYSz755nE",
  "key3": "bwoUCNonVkaptFVoHabt5qtrNcNfLtxVv3UzToi8MSwcfGci17AyYsNyjgqEL8i2Ey3mULbAJkmNW57wiV2LJet",
  "key4": "3ApbabKtazWGGR4S5UMjQbBaXx1QVGFaCHyfz6k8oUCWbqpC9NH4VCzHAka4imTpXtKxZdqdAmZzNi3rEgVMNite",
  "key5": "27kJMvtTttqQeA4pv2eaWUDMyKHKUaps4cT51mHzV7F71R2P2PrNCGasTjeTqj1F3g4WrNDpUj8WGHHAjrsTPrcF",
  "key6": "2jyinrvBko7JLFEUYZWTjEACXwgkNq7mNTuJwuSsYcYYKg1qAEQkt5fy8ehk51ZSypFMsBFfGvVfaDmmRmhedHDY",
  "key7": "4NwAhNuXn6Ef44qV7FPRxAQAW9gjod8i84bztcwmm7J6C5WY6izseh9FggXTVNMqmJV1djxAXx5nUDkh1t9Jumaa",
  "key8": "eshMD3CFwsD6yGfooJfuQHKPqXY1R8BZmgAc3BtxSEec4qPseUYfGsUR5bHAhT2M8WUTgrRrDxjop56F43Ljapo",
  "key9": "2u3UAsY8kFA2BJ8eVTgCed6R5e8gNG9CEnHFqk7pbM9KeimwQ1eRiV4Xapuj1LLDxuGygp6fmwVB8hmqb69fFcye",
  "key10": "2sJGdLdPXtP137nAdtrGXSCnX6DS32JgjhwGnG3ogA4ncG76C3vhFRDhrG4rquCzwmH7puvV2vQGkAYMkqEj4Q2i",
  "key11": "4U1onKzcQ1nfcFH3c1wpVJoUAuZRZyht7ZuXwwmPD41R75DPWPZ38FkNjPH76dGR39hjoUtKCD3LpsFKm3VBz3jX",
  "key12": "yyESAaabxnVPQdRWmUbNVpTHuCbepR4yqSDx9bvFGVYgRTktQ77aKya5BsHaNj51LriSVwjne9yTqTqgdv1K1mj",
  "key13": "4Zj5FYec9ADYSiHfiKvnAC8gUDs4QcxkgbGyE162mXk9cUiZ4DsaJXDM4XU6thN1gQbdDwewEY746pizbnZhPFXn",
  "key14": "VAhcn7mchUsvL7URxX6ct7er5XFo9z31Lj2GETf4FiJys5brheKBXf3EJ8JeXzRi6uVrzhdBedttrWApjGpSSPT",
  "key15": "V9rafTq3QZrRvCQAmnosCfFSVBZuGUC8s6BEM9Fkj3S13Jj6tvStTvH6M33GeFdJDhW8KqVW5AwfNPgUG8tZt4E",
  "key16": "5acyBdrjeeNmtTjddbGMpVBDsT3pUb2ftNjCv9mdTixhPeb8BCKHjV3JAAdoyKTb5MoaTUjziG88bLmKy4QQ158e",
  "key17": "41q19CwZZzeEiJvYQ7K5rbadv1ihAie1YSeELyaCAmYg9MBYmJmZCBj1SKUGEyB4PAVj1YHAQhKk7UXLsvtfKRQB",
  "key18": "2HYEjZLzM5BUk1KSDGko2W242krUqBnhdvQzKf9oon6penWYJ81tyC6NruDpWSZmA4n88YMyrUbo8au1BpzgpbPT",
  "key19": "24iHgHENHxscqpWzAopAf6SGzYemcKfwT1cm2fjseuRawhYK3gkUXP2xV7ksRTFrUoMEPmCYt5aXfX36A3EfzMkx",
  "key20": "zTirXmj3KsJKA6jeAThwajfcd8YdHg2GgCGG2NKYAPWSExHkkVVXSBuascnApkUTRD8pFwE8mYmEF9a7nptjNbA",
  "key21": "2odvAA4qnGKEcm1MLc7njL7HP6d8P9TRaoZr6M4PwWnNKQBJW1qSgCoUiQtHe3wAjoAtUgSQtu9ETVKmQpnyHJcb",
  "key22": "1NA8H5UdQFp7dk7GHUGafXKNVm7UBZsbjv1Vm5s14DGbfKid5iTiLGDoF8PxtT9eRnY3eRzzW7o9eSU119qQ9wo",
  "key23": "3X9HHHQn1uNCXrphpw7B2pENMcG8AwqwVy5PV9sDjTwNGsnMYxNwJCHtBVA9iTgoqxQz7VXLfVnvv3sx7xqje16G",
  "key24": "ZedDySqMxcMKymYKMVoco2BZqLU3otpSggBfm5UMh9kEjpN4QYGNMh7XFwSyotX9JTehSyjLd1GXN9hxTSAPMTp",
  "key25": "4or1Ad22jsShuyxe82K7XQFN822Y4nCXoC4JK7GoSTN57yvTxGZhwd5chJXFZgH1ndovE47d2UcrbB7ZvhjdpAPe",
  "key26": "3MwFGoYbHWD9NGYbFEgpdJft1W3LHJWNypPRoeqETpdCegGikdFStRf5KWsxLZiy5GJn4oYAPyDB8XiRvistnTnK",
  "key27": "33JrU3V11n6CVhU63oP6NwfS7gtV8vj4fH5VhLKfoR1FKQywN8111Mp7GrQyRZDw3Z8gUhTKtM9dsfbtjTQaG7rW",
  "key28": "2oZ6mZ1gpUJZ1Y4zuFzjZEafhfwVQxvLm74m6rqkKn4iRDUVFjcaJUbrmJVod4LyS5kyiP7U2k5dnQ2hV2kLi3Ln",
  "key29": "3uhS4fRtJMYQ7u71E6bAY7Kdc18UaDbUwpj8gnhmfsko2PRDkUtN5GeY9Fjk5Cz9mBRhfnj9kW9iYHFv93w6s2Qd",
  "key30": "2KhuY3rJxBc8a43n1Bf5JPJDaeYGnm9V5MTBrgrfrf1fpWhDC4nQ5EKMT5Dp2rVMy4v8pv7gJ9xgiQoXUjeHR3aT",
  "key31": "3EPKPnridNQQrKk9hPF3YvgKpJLpgihKhJGUuXLurK8J1pFQPAdXwwyv5m9rksJ4vuqPCWK3UVWaF5gn2iuG2adq",
  "key32": "54TH7JycvW6HdwxrhipCzU61gxSwga1ZG1WiqwJ7Y5VjAca1i2UuUM8Me7YLEUFhYNHZmMbpAyPZdmqu73MPQvVL",
  "key33": "2kaaDHeaK91XFPNFqtcrCzWi8rxSF67oeJe4LBaN47m5VyuscoTV4HjcGdEfDjV4V6WZo5sjySHWpqvG4LVauRHC",
  "key34": "5RRLgZuKPu2vrrkhjmbybScDx8LMdy3apGB5ZAZLNVVmi2KYdLyQ5tYt8jeDj61b17m973rTvSdzP6BmhyFwq51k",
  "key35": "5c4o5GaZanvkh2drmMA7HcAnhKhvSV2UhAoCeCBrb2QuHQK7paNDo24PPZqMpB41MUmh3ZJ8Zr44yGuUai6rd3Gj",
  "key36": "3Kc9nJTURacKgdKEnSZ5aprdgcT8u241VCaaSy4y5YTfmuhtnA68Hge5AKNHiuqz1bqwgzycUhGCnpXB6vJvjRV4",
  "key37": "3PAhWkwrTSfSNdr22swUtpm3fCyTZ54KEvDnfSPgwrzk2fbinjymwGGYtnrpWwr97YMHwLSstF7QvUi5JhD2kSa9",
  "key38": "5YAMzohjrgbLecJSYUr83sV3iwss7wTsNbiHbQ8WSF6rFn7Vx478pCNPHSerhc5wXUQrducdmrucxMYSmHcPJs5w",
  "key39": "3webxwE58EMcznfMVnthg6t1Uum48JgWvKrsXVTuXBb261NWJf6sVPUxdRn4uN7kGwrXraMAiTQXWPRoJLkzgE3h",
  "key40": "i5ixHgjWRKKTSmzCmvbRzJXCponDWWPFkUL9MbtXiEyYrGyAzFuvfDEqLwrPs67CEgSBJHcMJ7RYMKXVsQcRHRF",
  "key41": "2Eu5R3UAwUW3ZJjicUwco6h9RkauwmeuuNyr6rJSvu6k4J99HPumrZV3Y2VcUejsLVEiNGojVG2kCPJygcHuZHBY",
  "key42": "129TaPJ83eGfo7pY3sv6w85rw4sgmsSKCgnQtReKnnzr2gBUVgGBdvGuevExWduJwBLicdGJ1StT99qUWRmLQfkd"
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
