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
    "5hk2sDQQMcP46yfzYXMBzXmNMBhwLejv4M3fEwUhJxb9uW5PTh2NqnTKbPz5NrCa3ym9PdEvRM4VzwFaEkEc3Lhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5joNVvkStfVHEuB4KeZXeCJEcTo67GkYhNTMgsFyEmJHvf35cTpmUA19RBk2QYqFtkNNqgatKPXtpuQ3SGY5sFqa",
  "key1": "5dbjkEwdmcxvnK4qcyktS2RW4KckLPiAi8wg1m6k7P54vCKzAhy25jRYpqssBdV2GyN8ke54Ri3EqkvTEQzkrnuf",
  "key2": "4a6Y57gefYbDSvqeR5fY8yMpYUWQ6L8u6ciJrMsmsAS6adfc2KeNFGmgCcq1AFA4W3xfoVtrPZtf1rmWhYh7mbgK",
  "key3": "31NCd8nNMJpBvJL3G9mNkkoapod5HouPXz5VZPFBHEoo8mUpmLDTWdYmdoWhtU2QgjYDXhnmHcdgSjynw98Gdnqd",
  "key4": "5DVGkiYQNCrbFA6GYGKssDzAsTKQdT6BrmvhhWVpAet6WqkZ584EpbC9JQYms54uhErysL651jM5CfSAXs5ySTD6",
  "key5": "33fZ6i3YY2muuYtAM2ehxFNNqya5dkd4TBx42m3vhYsfiydQX3Sf2tLmfdfV8d7a2Y2buKNcV42qVsrrYLfQ4WDm",
  "key6": "2TRZe7tW79YjhhFiPzSPbS5u14iZwwKPAN2TV5XxCWJ7zMAWK3ert7Vfg77ShAFGxVYM38V4jxhmCCqPnYsrr4HD",
  "key7": "5nxRpYLhGXnDcXRffDDmtcmTwxX4CCPubTVJhGWhK84Z9SQRQ2RqJSeKWF7XiBAP4WZSHYNoEzmsyGxdeixdMLD1",
  "key8": "4FgeNY4ThniDp76BQSiv19xZFnNZgr8XjsFnPmUhqGQnP4mVHcTW5iTEgDS3KNHHji2kusAHNUPnMdxf1jJqeerA",
  "key9": "366MKrrUTrE4aYwCwa5pwXKVS9H3NSaqVHWAcn1tWWX2XxRkzusghMZNcMpiAhkY8UPWSKnbbXC7DEXNgew2kPpP",
  "key10": "5k4wqvmU3k5gnsDAb1fxkwGiorFbqHBAxAq3jMQdeEz1jMD3Ekq7tJ5Cri74UqnYQgrae11hGCSwDhjZ3kbuoNgm",
  "key11": "2pmGPKbLKhTefcCxrA3fQjfV8uAfCtFksZft3aXbEtqZ6YYfCN8di9JBy1VQabRDmDsPwdpxYUw7aZUB1mGSrHck",
  "key12": "75QMRyna6HmyhGP1L7ieX34BU51unVP39fJkK1S4Hoaxk5gWaSc8JSksXAUhd6Kn4RXE7AXJm3fF2PNsGGojVir",
  "key13": "4BMjAoZjDBRp7geGr34fQJHStkJ84bii3yEKYncEn5asaNXGwQAhweuGTvKxKiZKWjRhjH1aEkkrLHx4YcGRMkU1",
  "key14": "46zdeb7C6vX1Wq1zQ7K23oXMTTzEXoNDerprtoW6GCJVpFbCa64skYT6xVw5JiqPk64j6UqaFKaSY2rv5oshGo5K",
  "key15": "5kng1FTXb87Z23JVJwTVZcarKo9knmg8vmqhA9XDKjfoRaDRtZ73YTJLRxAZNyJaRbBfCmosTgkaAENGCQAY2QKy",
  "key16": "4KCHCtxQx7juXPr2JEy257KzFdfN6byqYYiW1CPux3wvX799bmrWR4htxcE8HLRHJxJWGu1y6Jn4tYGkQfKs5PwK",
  "key17": "3xpjKeyj19weTyTsgQcGo4Mcdjbv54BKfEDcBaH76CtREUs5Numx4benc2pWUGPNz5faA9vEM6Vcu5gi7Ze2SCd9",
  "key18": "4R4CqquFXMhx69tV8YGGYJJXPeirvbWFTn1LUqnPb18PxjgDTqcHi6HRQFaXxfEiffrmJn182SBkJ7st56qsEYh3",
  "key19": "2UH7k7rbSwbFRgsFfTfXWahwqs4zqueP2bb1gfcUFjpViVvbzcghAZ4imJR2sd3HWvuiFr5gDsL75xkzGwwWSrxG",
  "key20": "3hJEJogPPdTukfFE4cokzwU1EEL1564iAQ1iQCr2nodYrypeY9KnrXCszrTXPCQR4DLYa3RkyteeGa7gb3g1MQMp",
  "key21": "3H96ro4bxAi2ToMNxdUEjbXLXrfwBAFj8SFX8Zh4QonELGDybSQHorz9Dk1UWsu3ruf1JuaWBSGXVN3coeatgfi1",
  "key22": "3HELTgwhjS41dTgVsbEPQw8QB39N38T5ykE96k1ov297WidmZoU5Ts4njG2optVr7mJpHZ1nTb734EkBJspMaVWN",
  "key23": "2zDPpdTBGLXusRVukrx1PfL5PXoikrvCK3vwknt4zsVQjyv7bv3e65KjLPj2x2XZyDgfAy7c1SZEdwE331qfjMfq",
  "key24": "KkitnukUc2QWDctiBjvvv42Ka1EGyT6jmhk1MoqVi8tDQkDPnFaDfXFA2QE8Awu446nRNqXs6EwF2Ni87omUUWd",
  "key25": "3hj2AxoEx5fo1bPRbcoFnRd4wSmr6YK2C3k1cuBJoidEgBBwAQYK7xAURDgDsaoVGm3ZsFuKvuBPsGjtjrSqDPwk",
  "key26": "24RGRmXuXWvq1NfrAaw7Kaq1DUNjbr7YPe7E2agS9SQMGwRx8VhuVhgenTAajLgauEMsUFLuGgiy6cVWSoxwZ2LE",
  "key27": "39nw3DNL8qqeKQ3RqpHDamLTJUfdKX34fsjdGLvzwBAprMEy4MBtf7uuLZpXusKZm21diEek6dZ5ukAaspbPmSm3",
  "key28": "2KJXaiv3fHNMmHnFBX29L9CcKGA1oTppgXsC3AZTNqa4dDgEGnwMWp9Kh7BWPWTez3S2VosPcJP7WrNNG84L1sf6",
  "key29": "46NhD97AfnNBzmCYHDyT2ukExuMGUwDt4peZsh6VxC9xA1QzTRmSSNBPVmrf3xWTEk8kj6wNhvY3Sga8pT8voT1q",
  "key30": "4TTzJV3sHY4E2BCy7EwKYSNfUYDAwoiQsXM9t9LAMwMfH7SWANypL6sUZGKXUcCnoMkUKUvap6Qm4fhxV51CxFzn",
  "key31": "5SmiCDPeRT3n2v3hLzVqmFW3FaAuCSfKdpsECjEu4SJHdRWcyLqSnqMV2xQuzYZHPdNj4h4g8MSQtkMPzoKERMnT",
  "key32": "4KApc4NHQk4QSovh5h9BGtTThJiuRDsAdvA6fkSzjgdmf2cNfyUFGzZUb37hLT6LHw8ExHcJoCev8EUHJ9Z5EJU7",
  "key33": "366zVgBqPob5RdA1CPVLVHCEVHzC1z342LckoC4M8FLSQ3pgFGWb2WAFAa1Q5kYXQXZKFueKGvfNJQajWGKFdQJE",
  "key34": "27HXoyYrEGvpfz7EPqqr9wSStUxZwKdTBDoaKs4bQt9Ymd5Ns6DjRz8PuWZPHMB5dgN7wyQAU9ZSwuF9YcHLpfQE",
  "key35": "3x6RQEWEQXi8nS4YFeZqtt7M4tT2Xwpdz8SJr4cA2Z1QiyBvdLpu7LgXCqhyPa5bkc6kLZr2Z4GJwPSeMgCqPEc5",
  "key36": "4yiJCRwyRzpkxhMzUi2FmoPJDSv4B5XCNq9NCJAXncnFF5V18eykvyMjMHAjfA757goq8eDM4cVY46eFqSBzRpsS",
  "key37": "5ZGt7agmoWMkHLdupJGfiJLop8nsp7o3NFzpHsaLMQDsu3MrzeYoyxdi75TgmEyNQPGENLJ6jM2w6MBqjA3fPHgd",
  "key38": "3Vn1fCCwtYsa3DJNJ5ST3Rzs9gPz1ofUZDs4kD6DkPbanE9VQuFj5gCQUaHy21xEjkyUfhcFeayLqA1xkSqf1vui",
  "key39": "47GP2DVr5wA6yg7uAeqEL4FXfpSSu4J1GNZwRMNSVsbt5pANKMXvhS8vq96kTdPBcLHu5ChhpRL75rdXKmSGGa4L",
  "key40": "NQpefvVMsA7ev9ALnKipkxDKGKNyidqxVg7xiSCjmeuu4P9abx2vknCS9LwkfR4e2ie4VEcqvEjxUUxQcYhEp2w",
  "key41": "owoJJXBFueoeRPFt4vTNjQRxsZ2Dkrd54US3GbBbL6jPtUg4eovd41GBEvdCt4ZxgvcMq3wqXBx6HGgdgocKqFK",
  "key42": "2DY6WYUFoXs55BNATxteRkd8gPHPW8TS2aSgMyhy17mQP5oEobfyqRXpd6K9DRdLYs9ouMTdBMiyp6zKoqooXbk1",
  "key43": "2e6wYxNKTMakcJUDRuYuXL22Y4J8DkWaNTLX77qschqx211FKq6hJht3sVhJUbWjGEb85hnUQXQ8jwcroAjq16By",
  "key44": "5hsBYkfaMkZgipK7KFZru1MZCNgnSWieqyuTmYi3d6YKsJZDQUtGrov1zpoizN9nVE6vPA4U6p9gxymxnxqXJLi5",
  "key45": "48S9pPM6dn9n9cZM2EXKj1WXTFF9WyxF2qbsMeokW7qXbq6KBCcJFTaoVXhuczK8yAJBgpkJ6XGM8rqMeoJ3xpAs",
  "key46": "36SdzhWFr9aSnMrdg9VWGG4guXHkPZehzVPYjQ2gNWAw7z2dscfP1QC44nKepcTkkL8ghomY5BZvkRLTPotcsA1H",
  "key47": "2iRJ17uXDX3RTGZFyW2HeaeMFcfgP9pmsKGtHZuiHdW23GYR59GoWBCtjdt5c3UXM9WRQ11ddVouvUXJBZ7645G2"
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
