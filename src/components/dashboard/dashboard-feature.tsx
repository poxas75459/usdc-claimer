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
    "5igFP7exxPyBoAtzeGtwjojx5VRiPnUFczevQjhJx4SvKonyKacKXZH4Ys9pmT5nkziUnzSqx6Vo1JDu7StwtLZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rD73HWQ99anNxH21HkKuCx2xteRCqJRWQTHrAAk8Eh8vfugmfedLwRp5wotd6jFzD6NwU4fVWhzcZ81HFyiY4q5",
  "key1": "5shBViUpQinHvhqYXd2gfxjP6BWUcqxahKWbMwxLLxcuyWvSFLGVjmTRv95JQc392ppP9H68DcawdcXtKsCQvbRJ",
  "key2": "3cVBNFd9GrAzgiqVqjxdS3SD4m13UZMXViK7UznjoVeAGxyjfFANM8uUirAF5ekFxKomyrQYnYD372mpoALEhNKe",
  "key3": "4PcbUEBzRF6JZNu7Q4CBfc4FS21tqX7Qq9tGUdFZ1D5iQ9iEZoAhjfM2xJwCY4A2dStUKWu44hXvxezjHGE1qG69",
  "key4": "51NT5vGLVPsSWJTXtgU42MtfA3J8uFVobLKYWhff5jXv1b3BgJ23RmvxYgmRyk3ti3eb3WMZPpPmYM8hf6CHXMQp",
  "key5": "4kjLpyGjE3gbCFZUxZ54JwABaNZZyitJ9ZbVGMFwDCqiqRHJJ2m7X823WTyCCr8MsfSeL6BeBoWwD5kC4C9jbCun",
  "key6": "3vFX1kEznjQFti7rbHg45zBDQiKEtbchvK8nTaBMqsapQ5hge5M9itmZysnvLRAS3wf7Gc2uFKXPQXaPaQ9qBq85",
  "key7": "X8xVrmoEuMUyQe4DXFrSuHTohgENbDzueXSYoBg7Q7c22Wb5twdbzWAitvkaMiLNnw49H1oVT2V3g5uBP151Bra",
  "key8": "Lj6i4KAzgWGrgu6U5YZdQA2p57rWVvC5ijMtq21b92Gpid6EP5pYpESNH157tVqyQbMCHJXdfVioEgsTgSyuxs8",
  "key9": "3avmNRBvQkWBPgq6fdjyuNmg9sp7Dr4TTrK2ndoMsMgGcV4QzhdCKNCDbMWWTakZB8jLXxF96rifdeCrtNoXwoGp",
  "key10": "3YaqoWQqnwK8eLuR7NjtygGMsVvzGAjsk3e6M3CLUnjNePjEdyWRh4vA5GUEQ6Jfu5CNivsSwe2aHHTvNFrxph2v",
  "key11": "LYGDc2ei8VyTpYUj24kqaYALUweXKNRPnyghZTkBJ294oHzgzMKjFYVeCFZkFp4Ea19PXr6QZFRNntBeiKJqmzi",
  "key12": "4W5Ska2fATBeLmsscQU4tMQvK1MtdakKjKeR9XEGe1qWL2Nd4UZCfMwg8J5KWx8rwSRMwMfEC9pDQaYcEww5XBkY",
  "key13": "3SGuqwa4T4cFmxivXmDQQBVAhnUhwJZjicE2m9BcvSBysffbJ7Zy4BgQiXpttTKPJC27HYwp1q3znycgdFU5skeq",
  "key14": "3PcHbw8pHsodhUstr5xn67kJh6by4mDfpqRZJXucvLJDzDSALvbjVTwzfgGR1qy8ebHZ49NZvvywBvYtkGhUK611",
  "key15": "8mxFMQif5dF22jgNMHSfKp7RhMvo1LDi69cW7RXHVeTevNV6X3MVPUsjcdCYJaUm4nXyVAzPb7wC28vBKjFBM3W",
  "key16": "phegbYYFDxtYWxBxZEHJEXSWg8GVndSbXnNUU8KEH4xVEfuq7Rp1PHKq75DDJFjPwj9gFnsDjzpqT3XQtKBo2mL",
  "key17": "4woPyYK7miW3PBjUmdnieRCA5367eNktdjM7kG8BYu9gRtt9SsnmedXcyWTvGYmnE6EaFJ92T7cErNhNBn2Qt6TC",
  "key18": "v9LENWRnz7YxPKwfjqd4f68MXaQpLxowAorE8NURnhibvRUCAfqegkUSPshgT3BykM7ePaxJPuhntX7tdu5ZYJf",
  "key19": "38HNqeDNqgNAvPZkbY9HZ7GVFuK1GWGNd2pqhzcYbS5K4R5hTzye5qXAQNMK6zGnikyKk59fxK5mz9HxREZwnzt3",
  "key20": "4ESBe1p18HiRZ2eMuMajQy6Xvz47wvx7mTX5XqmMmM7myCVizqvg1T2vxgsQFxUrEZYkcnsYCD8fchKrJChb9nKg",
  "key21": "5edZE5UywNRsVdLNFhu9CSX78ukYko4J6Wncw9woJb89DHtTV3RvBQKi47RGy693787NDYVw24mnsPRXB1HUKDrb",
  "key22": "3gZZGGkB2t4nP1ytDDm2fKCtRV6xHj1Eg4grxEDbZy8rHyCD82BJSWgeSvh3bkZZp29X2VURcrw6EgxHWqyVk7By",
  "key23": "33sfCfmkVymPiRueM27B4zVRzKSz38uWjonijzQP61B8B8YR2BJ92irAXhk7Xwe2i39KRUbCY2eGvAeZEwLn3Ai5",
  "key24": "3PsYLpiQXQqyQc79Tc4Tfet3a8oCfkfxE4UooYttDa53V6j2pEXSSoc9jvmUEKTDdsyhZ1BL3ikNFDqKXCDceczk",
  "key25": "3fqVQotQ1VqrqmSvKTbkmTQraUKxMuqsysbBA2Fv8nN85fXZ6YL6qnbPsauGv1bmojYsNsYyp5rTgX2wJRKTmgUk",
  "key26": "5AkkUP7233HPeewCn6TBePn1DiebDVx17JXTAHtysCVSqyRJtBZvsfXz41264J3QYC8ZCzVtXQ1dArJHjp87z8FR",
  "key27": "qwdEH1cf8tPtsqK1aD7Bze7oqbGdmeNKqbFS2MvDoWs19eEQazoiz1ougM3nSeH2EH1FDFbCyZTzRbneHUdpW5d",
  "key28": "2PR3WxNB5nJHbH26kRuxugHH1QtcgiyFbX1NWuv5ftdfuaafeYxpsNijDgnPmXRX2SmrR9gx5Mr6Z7SDSmRbzJCX",
  "key29": "GeH4zEbyUbgpVCyestVTXA1osNAM3cEQbNYWrEJmwrF6oz3D6jcoRSgQMoqS4ZtaA94PWq47dD85WeDbuYJswL3",
  "key30": "2EWThh5SB3t3EmjMuo6beZGPKTsQL3wXNypDveuKG2PhdDh52NxWyhDj8f1FdKwTCaUieGJrWTg5RyPaZcAHTgWH",
  "key31": "ZwcUM4HQa1jgbvW5EfSoTujtPun6Hm76rbyrGJJHp5ShWs1yVwGkk9V7S911B86n6aDVLHSfXFJuqJAZr5XXhJZ",
  "key32": "4FCRtRf4hhC5RvAQX8RBdUNMsGRz3TRXTt2JuJ8pPbU8EqpwyUbcS2bXeM9gjApLxXS12TS4vqFZ3DUEnS1ALTji",
  "key33": "5phaSeiaHd2pTEjNE7mkEppFV9ANBkWyjYEstXQoVUUeyQk2m2xsXPw7r3kTQT7LgCnU1MgeMc8WCuwcs9CzXCzt",
  "key34": "KBM4zSsEt95dC4bsfDvpxJ8efHbBavBwoX4ykM3mQeCWHvejAcKg87HoxFWpGsnXNJawbVcBVUdswAyj8KhLZqE",
  "key35": "9Xa8bC3c7SDgmNi8PCBxqiq4383B5bL5U3tQ31oghhNJmNVyKSVKnXFbLWoBVwGp9rmHUCBB5v852ZgRaBbBEq5",
  "key36": "3ExCQPuW1rRSs7vkHkfcrzrxgeAcifCWEaBH75pBk239N5wDBg6brcRfE4N4uv1mEN7cpdtsMGWzbmwMij2zrHU8",
  "key37": "4VGAZ1pATbckkaQ8sukr51gWzurwbeGv6xb5NM9e85EbiwrHsvQQfmim42KLKex7suiSGB77dZHLzELcW73Nm9hi",
  "key38": "2zAhAaQeV7fnF4KMJittqDyrVJnz3ZNJzpnRz6oCrqwAcgRzYdFcks45N324KTdzJ282hMFpBDbqDi1R61g6Ueyz",
  "key39": "4qo5Wq2YcSjvJtpkcExXP1mqdx1SY2jF4qkBAhSAyRQNGB1hUQhD95cmashm7VdJe2eiepEPN3HVm35FHLr77bi2",
  "key40": "4FwpDiAhfKYcGrZrws4tT14ZSTGLTSh4smAodpCcPAKLCsL9BArxP5dFSybCPrTgeLvE7wekuNyiHd1BXUqkYeNM",
  "key41": "uSRYfNwCnth4cRXEmWD8qnceRwNAJ9jLJjRbWtcp9KyFQs6Jv9jGBeBo8HLtPH6kWpXNStinaavhwiq1gtbivmS",
  "key42": "5kAxtSJX8JddnBptLKP5rjVqnh2JFbR7uWANasKXSqCvXYUJGvs1DZLWLjMLTmYngKia8eZLf4UruFskqxHqjcTi",
  "key43": "4JkAXbuW9v4XkGTSBzh3ZGNHw2rBLdVib5uQSqo3H2brsBD1Ji3UKvHTwtHXzsejrQcFWqmJiiCAnoPHTaw7szzR",
  "key44": "2j8StmFhbJnntiwwaNrmBnqUnsBGzACpRmEna21qbm9rjQuuti6LYirzLVzEvhWccBSHrBrWVQ71tznVaWuqaMMp"
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
