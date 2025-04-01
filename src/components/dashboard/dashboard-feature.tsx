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
    "2txGiF7r7khMhCZcej1PzN9bhoEDxMpcXT3zKcz6DnaCJWy4NwaM2Fk7hRPAK3LGsJsiuMSp6adPywkSYpGzCmFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uHCi2obgZy6snY3CsXZ9grdzPqVN7Lp1YcM3CcHUwJuu2Bfuhpry3kkugiwEGBycEHhGDzVX9RwTsCRJMyxrDYG",
  "key1": "4YCmDT135qWVCp17BMrXhpwj9yx2cXduM9dxkGvY986AHAvNRfbkD9JXgEtAMkdA8qNGyMaQQsAHk3UoC4EvvthC",
  "key2": "4wS22JvmAkqLTrzkezDjK2YgUS1NeJk5HTnDWSxAQCDEfs5YWQ3XVEufmwwKQNrKrPW91nCydKFhGKitEqJKprRw",
  "key3": "54EzHmB9BeY7WjEqJQ8sf4WZKTgL6Lss2hSxWPgU4H3Mfxm49gn7vseSsJLDPJk1jtDbk475m31YnvZ4vwcRHDBR",
  "key4": "4xN9nwEHHbztCuEaHoSgLdwTbiaQMR87gqc16YrTW5iEkaCSxA3vgnJhRuYtG6gnk1nCccUXcAuQQNi2z4xRFfxK",
  "key5": "5RNXhRdrKAFKxj2htcoBW72SvBcyr8hHn8FvJrcWwP6KgdRo4vimd87LqYQ9wvYrB2D9pEYCEox3CNyzvuNibSSF",
  "key6": "59mbiyCNs7cKijzAzmsUAh92JBK8U8KhRmsbc18qpbLosamgvtHFtJgoGvF7sM3aUsrSPHtvMfA8dcgrEK36w3MT",
  "key7": "5MAU9wDe8uoKKr1sbJoRkbm11hh2LMRwUQZGN1m6VP8Vh11cNYArjnkRKKJnqehRp3SVEq5dnbigRUBM3vxUxBB1",
  "key8": "2CWpwhbsTetRYgknAJVYukyZTE3dViYiuKwYhLudQVkk4hWAUpHMF6RoBJkZChdnrumGcreYNDdLASdCzuALVrpn",
  "key9": "3uAQDTWBjmmf2QHA4cRN48rR1Q1A5eFoyUSXeR8MRStervKU91pxfj8fWDJAbet4RHz4nFgy5rFReZ2Fc8uA4LCk",
  "key10": "mQXrxfyN442S8x13x2axDfF8V8JWDtUVf3dEK2toRJmrTQCDMsvTX9Xru5wSgEYi3tacVv27opy2qvweaTZByZf",
  "key11": "4ozBAKzyu4i6NbtbjC8NS8yQxpmhcRThThrbUCvRfioHKTmaa9yTGjN4W8mmaKZFUxuHffYZjVMQmZRwbvh7nPnm",
  "key12": "4NDAM8dju7oQmNqCd8HuZLxPSjA2EboFDps2TqeM8N7hAtQHbLY8gcVjR4maX2ptUAA4txbpQFPKNpaw6DzqFwfB",
  "key13": "43GfgSgx6yMdmMFiBH6FPiPkhrJr2BPFd7zJuCdvzRvnZ34eSHW6g5PZbUGcWJ8sX82ongKHzSpQx2hc93GJf2CD",
  "key14": "5Rij1WfbzGt4t712uTu1XFqNm3CXiqpE7vqb8rzdfSo9BVutWvC6i7YA2CejkBr7mUrLmaXXY3Nnxp7vEnRJB7dg",
  "key15": "3yEff3VUQ2Er16zo2rLfCdqUTZSKEuHgfzc8ZhqmVQqS2mBe2UuuqxXY2F95924CUSFDRX7XBpkkBfsstTnSQPsf",
  "key16": "672du7Vn94pE9QirBjk2tWsKNoYdLPyWGGAfoGvsbwY8CQWFSPkdZQ2Tv9nm1FLJVsS3TVFNwhqtux7cL4suv6Gj",
  "key17": "54LkVGdNWcWSrv2zKq6Gdczb2GvV4MqvkmJ33Q5Ypqssga4k6tEX613FD18LodcuiGP2pjhXpK8Wr1PMExE8BiDy",
  "key18": "sNR3obhCcYHEk1nHdy7U2owXjv4terxJRKc7EBc43o1ojakTgeSbqjMxYTYkEDjcP7zo3u8rVhMRv2aq2RJMtHb",
  "key19": "5Lfh14dNSoUmdb3uccegXSqfHVdhBos9j9mSom4LaJtU3tRNhAvjjRi9HGqbLa9rRo2E3tCNCU5PT1AsoaAz4ffW",
  "key20": "zY82uBVLvvvEtwFCLzv21oHiuZtGTK6v8fvR9j85chQ1BkoMPYtZL23PJ9mV7Ke2wHdgVruJ4mDvcoRzMdi2AJT",
  "key21": "4XSVSe4wDPmr2aCd247WxGhW6y1DYfMt5NcWF4chXJ3Tf7eiFpB7bHBeLSxzYnmgqQW18SdikTKwtwdTweKdVfMF",
  "key22": "Jx4chLug5YM7hUYPWJCd92rkeHvaPtosoYCMxTa48MZMYK7PisyXZYp5FWKAwzkTL2JpoTLc9fhsxbwcUxh9cVq",
  "key23": "54edWDGeed8B7FdxLQ9ar9vuCbsDDy7XrqYyeYmmdz71CnFiWhcMsEyd9VjLoPfR4nkSK5oeXUMC5R48tDBVzp4s",
  "key24": "3K3CZMAckkE1Vcuqxw7zfbUThrxU2kPeG91GgAKDSuMgYmFucYDHdsGq4nY5SRce2UYr8oM7975SHcbraVcPmnmN",
  "key25": "4PndgmwNCu6vkFPhGums5Aujvx8T9juCUCRAbm2xtEr3uTi2kMMmnV1wGhA8j8Xi9eTkKsCGiehUCQk69hpzRVaS",
  "key26": "3jK8vs15GVZg4UfSLGezXtrnhf7RfJxhgjVL5Ym9eCtbtPVyDdvuBkqQtpFEBqZaRJFRPUyNe1ddJLLUBHsR5DtV",
  "key27": "5g2ij9arZ2ir6CuTtL1CeHjWtqZ2Mka18v7L7R37wYbpAG6mXEFe7afEkVyT1fMkkiFvdx2w4Lm47oS2fhJE4bt3",
  "key28": "44CJVy46Q2X89TAzL2MXhv1YCRvj1aYk3KjmpsLDAjFprh8bFxAGXY1eHMS9fZ2xTfLh8Q1eu5iW9GBYqmTHxJwR",
  "key29": "4Nmg9SzK4Fo9aZ5kAKiMqjPmcBaMoWdCWxq15n29Wkgxmcfzgah3z9nSW4VAPqPYSn9URv4XZYG8WPPkcVb4VBAK",
  "key30": "Bwc48xZngzW6vG4VSLKW69EtmNwPbgQdECKnJ42k8ug47rFE3r128tTbcoS39CiS3AcBNJdqreM1LfL5EgK2NqA",
  "key31": "4Ga5N5RyzL6HDwi4Wi82sBLp6rmGXRhTVhgYoK1L7uJPHpWHq8aYxmNGuwpCMLgtTb4odF4fPr8rtxBVV4ArQH4A",
  "key32": "2B66VnhFP92EEiTY4nktAXi81T83EtLq38vLWBLA21jEUyXFgPv3ThCnkcXsbNHgxYaG19YGQ9a8i4sP6h26xGgy",
  "key33": "5raoLXDg31V39HwSNaAE7L41AGjFaxCpWQsd2DxDsuRcjexFtYz5XDyU1NAf4iNzQM1KnJuh4Wqqst69MQsPsUE7",
  "key34": "2bnJ1rv2eWrySATypYKB8QNrgaTpLCc1pY1DvwtczZveVf1dEssnM6JzUkaVFuSDiRudEee6v8MEojftEarEKooy",
  "key35": "4e2R7zd5yHK5MwiJg5iVQYEueJtLd5kun2HmQxaqiPgcREqdK9EorT5W9ffwXrsyq4iFxQPdZHYXKegZwHzcEfTZ",
  "key36": "566Wn14L7Qp45pTcM3q1MpXKy8WEj681yWQYEmApGEJPtVANb313vruRz1NMa2U8EGkGXBLtgz6FXYu1MPfX1TA7",
  "key37": "5tm3bMysyzvWS7VgdpBHSkfxFGpX23KACLKWsws6XCpmYt9WVcMxXBQ7tbMHus9xUwCSL6icA9xHcprwxyVDitv",
  "key38": "5aBpbZPnvJx65Vp9m5Axitay24YyokzRnoDuL4GQfQ43gaUA4JkqvVotsJkHhzuz9K8MGqHz21icUT9DzgZTLnL1",
  "key39": "5AHsxmCXm3i9zFHSZroiVCV2o9Yush6ss9TxdyVJAw2iwCNA7dA9SSsH8CsEEi37CeF24qn97Pt5RsnWLPJEiSAZ",
  "key40": "2YY8LepmWNyEjMYBN9eWE8nhwXwMZZEcWqXdzeZyFjRS1aGFd9mCobJc4ea39Wmhj8zVA4bRGsggmqNXfZ1endjC"
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
