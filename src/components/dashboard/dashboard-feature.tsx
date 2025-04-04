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
    "38M6Qn9Hgmrvw6PyonhchPc2ARp1cpSrdjGArPTJegGDn1kVMCasJyfrGpf9fL5devt2hXP84avUXwg89EgqgtyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vryn7tLquu9nmrNtWPYmK2Pu1CYnmFBghwLJXftjGX7UGnPDbkRvCVUiM8QiWurrWna33gqcb6yd9tpgf7NrQs7",
  "key1": "4724LkH4K6mRyw1d4ymNwusunrsxWXtyqLa3inWFGivBe1KA7WFtgmw586gEMt353eKd4Hd9CTSLkQiym35P2uzU",
  "key2": "hVx9QRLnMuh9Ds4oNkbWVwwzhb2Z7wxrnK6jfSJMPReohDD7By1p2QNS4NRvHUeFLKvLVdqMJ3yepVUopv23DGN",
  "key3": "47kS2VUkhZLQAeyZ1nCMT7B7rLykfQayHQLYc1jBCrNEbRPBLCcKBAQuY2QgJuWdWJCJVTdA4QzaypczeYS6EQ8H",
  "key4": "DGiRNnX89vQ2NDHW5oWVKotrNFdVkA3FApGiRsiADQnBTuxpKN2mEqzkYqDGfkbPgLNjEw4R4iaSbKw7XXxYsnb",
  "key5": "2cEKAHJXyQy5EagPoDdFcHmEVCNAXx2sejsjDzTTEJoGyDbxBVSmduJxNLnU3LLbQtYvnTPvirLCTuHvp6nwVEUa",
  "key6": "2UnGZMyjz6Uu2Nmnrv2yiqv63tbbVbwmfgEEqWoStyAunyT44KKtrtvBjEjGJJnNMFdvuYiJBtZ2BQcM4FAFHea5",
  "key7": "3chKHa4YE23A8h8X1bvX4GN2TXdz9LPWvtz74zSeWTTgZ9UzQoAR2fgbDbREySg6HSaorYPzTbbVP3r3Kt2SDyc8",
  "key8": "5kp2wUVAvZqAXQVyyKPxB7pe6SYeshMSka2o5DpU2ZYqGLFZBbDerJAvVQtYQ8VkQCsPdLankoWJ88AyUPyARaZ9",
  "key9": "5YY6nqajqpg4d67qJGsWNH7yVZedD1E5LUeNsEMVUeFmxtoNumoGvbFzCMgKdBZivsy4KQ4ffU5HS2DjWKPKhJte",
  "key10": "kGNvz1Kcwprji791nKAr8kiCuxT9LPYgrV2bUSzHhsdpzosc9rb8hRtX3xTMTab1rP6Srats1NhY6GiGedbgwea",
  "key11": "4QwKNuAccQLhLQAgRuCyqtW78ne4FyvCJkobCYp5uKsZLNuxxGw9j88Z66975Qoa8xXJj9WgB3PC3o3f5ryhS4Y9",
  "key12": "Z9sQLpXqSX8RnBb6xinQvcuW3ZVJZq5MrvUuX9UTt9rDzSZHKEMuYWbZL2YQizaUoHqmW4QQ7gjXrE5P7wdZmV4",
  "key13": "29Cz6fBPSHaYjpVfmzgbjE6FRV3hRqf3qjbqSHZEkU6Lp84kAsZELaQRSWn9L47wwMQJCnPkBT1wyhpCcmDdvSJK",
  "key14": "3LCdJrRDaWLDR5GgyypAwBusWSPqVB315ouZoJbpYGLbSaqi5roQ3p7PLd8EEBg96AQwt7CfReSp9VUBXm1tMLKn",
  "key15": "5JLwjN7v3WhVCU9qGwEaCEoA5w3m6iHBszd7ut2r9Xq5wspr1WR3oLMvfjpGhHPc9RfhuAn4NSAW4AxKBo2JGBab",
  "key16": "5doG6XcRbHN49WPCzzbdz8MEZ2dyAEtSJWA8V78M412nD5qZuTDN4NfReTGLc73EeP884L6SZyYgnFrk9j9Fv1aX",
  "key17": "G2uUNc4xeKG3QsPAqqi35bNWZ2ErQ9PabwWdk5mZvqQE292hAGD8eyz4HA1yCKE2rMMZDivty1JuLvnGpfSp4nv",
  "key18": "4YeKL5RXk1wAUeVeJRc1q6s8KeRDYYyCwh9SUWdB37qsYZBLpKrA6XcbkmZpMthPm2Tb6Dg1Hj72XVDusFXyd1B",
  "key19": "kQM186fVbqd8ZYNXCExrg5vMRgNtHJFbTi2snopP87bJSWg2cuJprjxpvmH4giU8Hkq8qDkWPiRsuGETJUcuRdQ",
  "key20": "2hbaXVsyWy1bpsnxCMEVkGrVTzVxZgzbHZN8xkTGBPARcE2uPTydYNG8AVpi9FvmAfGawTMyaWUunfJWeryKCBs3",
  "key21": "5MWRDByDvGadj2vKEJAmiRqeGWhCpXi359huGdtRFghMEe2t9M6XM5MA6piQ9NHYLW2y61f8DscAmKL9NdbyM884",
  "key22": "svDMM1DyW1yFe69Sp5EH2NfRf1r56RYdYhpvnWfmngXGj1Rzaus7B7SNF1gJYTnzxvB2BZuwjZsyJpSjz4b4kyF",
  "key23": "5cxy4qw8oncKkazPNViFsqTvotdm2Dxrr3JKGrnbSwpygmtASYREe3FEBN1an4FGmwrm9t8C3Vj4eFtz2sAvGz9N",
  "key24": "5ATzHVj7xD4A2bgpjVXvsQh2A6oKA8wikwg7DEkfRkCm9s1u1rzzRTdrcZMBMFkmwB1ZZoTrUdRYkBZUkKDMqp4r",
  "key25": "4hC4sHEWKgPKPfRK7v1Ry32s9pd6XoZGtgyz6NzqCWGkRcP8TtFWrKMSrQ1Jr7gxAfzAeKQ69BYm81zrfuig8XqQ",
  "key26": "4S38sUmzSTtJiyPB5fAMsRZnVa4nvijA4Q7Lqh23vvRT9H3PfqtZwpezhnzPzonm8AJbg4B4BJum3PbJQqFmCPmn",
  "key27": "41cbaNqZA96fPLr5VsyFJaWXdEUZbryHBEapwqpuyapz1YNdJJgTrSiyzR91rmQD9zuHGK4VvLZuqGqUhnpo8KQd",
  "key28": "5feMUQZviPzR3gUsh7aDJPGvGNbDVZg5n79u5tHiqsnvCPsNYibsrSSC8ngjA1RFbcnwjnEhxzbGPMi7nz9pjKmE",
  "key29": "gyXBNF7HdBvhKaLuud1xbCCeCrDTxcui7tHWHTjcqVfCY3ZVgiPtqUKL3brsLqsLKkxectEGwboG5rXy3CyhLA2",
  "key30": "542vKZAipe8h3of8Y1GpyVStDWME97aMFuN6qMQwMmmV6c6AEa22eMG8NC3k3aY5DeUc6p2Jo2HjWRDDHsJStFDn",
  "key31": "ra6zzT5ZTr9BAhESf2nPefLeupxsP7LU2fouAVRwL6Jhry1Gxjf2zEc2bDyvE4CGL3bDUginVMSmAwFdTE5AZPH",
  "key32": "51sqq7ySuJ9v4pdZVLnsSY58nZzhoqtegttp3v1Ksxo4aJ6ajdz2wXxyTTgxaL7qXQG9VXS9yrsRmsqQGCh8YUNt",
  "key33": "2K9tXSEEE3wkvkd3QpJy2BSR5pxUCLtqX3yoDgPayb3Xm1N7k2Myp6Yf8iXeH7bSKnEdwsgJjC4DpHT8fK8a1Pvd",
  "key34": "3pc6eNhYG99i9WRTX5cpNQrJb5vkzgjZRdE4TEQCZadnVFRBBBfefRRTRJFHecDHHfXcSpSFuRMuScQShWn1a7KB",
  "key35": "5hzt4rmMMeZHjPdbjcoRo7totDApW7NE5Xr91rVicp1uvHryG2JFxpBRhChquVkJSLcmLdBTFLtvUgNFtAgSBgJE",
  "key36": "2vfQZ7EPqvuFdyGz3sgf8kK4yHNLwsNk2M4X4Z4h7jNwWpX8qqxb83Qp86g5HhYMzUUhzfRaXqKgXDBMnnxar29A",
  "key37": "2PEL3HZeqST9iaaAk2UJ91EkeQnvVZ6X86QA16xtCdMe2mLSZupJwtREm9RUffLbkp3sduM7qd7CTumD3rzdq7Us",
  "key38": "U9dfnArV8sL8tJZ9Q8bUeguLdnoSQDH6wHoZpuQisabWaRgFiee5GgrGfYN8SKW3j2epcE2A8dmBPrSizAdwWzq",
  "key39": "Mq4dAbQC6XABkJyCKgTxQ1ps4mS2V17T2cf13JsTr7GMLUXvZnJe95FT1gH9uDAewAMxWxD9sWTVSRDgMvbXHKZ",
  "key40": "4U1kG7Fn1xg1fZAch7ytLxdCnLWvnTd7dfanC2uBgBhrQrGxQ2azCEH7pc1KC3eXbrpaiDDkEHZeZ5rR3R5wixMw",
  "key41": "2iFx8TDteQRHsud4B9WfQwjkwM5GDopcrahVT4H2AGYMh3r3UK3qajcGZCw8mtrirZ9ppA492Cgp9e8A9AmR88FH",
  "key42": "23jkmfom6ZmbNJ6fEmSVppJthkChiXq4avpGwLHPjBHz9HY1RYfzkEEoGbPVVqMtqCJjV86AYFhnhZAaN2za37s2",
  "key43": "482zFcB5LH7vmSqh6rT5JhvBDxxT7Mkv4eZc4mUejXrY6rw84kybUyb2jWZu9frkujdeTzra4HXp4cFfaP3PFiqT",
  "key44": "21NdgHLXURNxe1wJqcwpu5PPqSjPTVK2t55R8pB54XUpaGdPWELaF7PXJFxYMWGRUEre1R8b6t6cEnCEXUNugtPz",
  "key45": "3eH5BoHzchpAgVC9JTZfnNaYKTxBUXnFrqPf2a9Ko8kxjXcUXmqcytado8v3SSE5oJPfYsjLAxQtVfFi4xfBH43s",
  "key46": "3FJYcjN5WhfCNpvTmTikBa2xvkfdERWZNeTM51KW1WiV9t8ptdF56WtuaMUWZVJSPE5aytTWEABfHF7WZBJJiEoG",
  "key47": "mFHh2LQ3brzE9NTRQQXFgoJfdQ6dYsSDBPeo5DbhhDrzzJHkt5yQPiJY2791n3bjiX6DXQKpJLfB9yNF5ruvBRj",
  "key48": "eWkJCQXuDEQvoPCjYeLyUx2xYLjZiFT12VmKdmthsARQHmPva32sS9HiT9iCukZEKbQjifYpS8a57WmKtnZqAUF"
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
