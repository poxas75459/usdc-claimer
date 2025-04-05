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
    "2EqpHF3Tj2sDyqL4M6Yc1kxH4BEY9LX6cnScf4kxSPjz2XccyQqNKKHk9jhxLzcNyN5XgphqK2XVi54fSVJsx997"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BD8E3sHz8kHLYXrFyx2feXVTER33FEfDC6R7DPgaEomrTvkE1FgPUjn5jVk6gpwtmJtYHeKBautePyH1GLgva4f",
  "key1": "fi5tqXkpo39FhbAdrtdCe7hEqpmMA8PiEKYnZdJug1bCg1Hmtu1KQSnj9P48v2CkG4cJQ1NwnRcJGtP8LvMULho",
  "key2": "38AS5dcfgj8sz9UTHhtAhkevTUbNxW8YJifwUSDdYQEs4HptPHEMVmc28jQctHN85CoHc7Qa2Fqmqkf5cMWBs31J",
  "key3": "2u8hyPsB4VfKoY53J1kMNZah1io6FrZbWZheEk3qQyixga3aV7TbfusL22pcXZZSNtZDLLJQg4hCCqPyeh4yQ7J9",
  "key4": "KoUmjLNvFrRcbMngH6vLazoTq75X4xZkrmeUcnKPtAS3h2whb851VrCcM3iRQH8NVcmZPfGzcUs9zFzjj216Pty",
  "key5": "49d42mvUWyx4pE32Gogjjnvb2ipZuZR88P5wRhBHQk8MkB5zEqEM8b42e6fUyPtm7EfdazoWiz5enBLP4iNjHgLB",
  "key6": "4WR2xyVZ9E3uQhVoJiD2BmQ1idAxwrGdn1yszm2dPo3x6y4Cu1bMxWLuwvPHMwM3HbgMMbVedAK61epj6Aw9Wmr6",
  "key7": "3tpFRE1wmjj8LALMLHBFnYTKfaKgzwYZvyzb1D1GYZWkdAx5KnKVn4nz29YK3dAf72PPtbYDKsQdfN4Jbqov6HQ8",
  "key8": "2nTaY7aDwHfd8w55CmK1pkaHZiWrJ7HabPrCaRdFFZjbcJXTc5cDZi1DiC5Vr7kE1MtSrrsJbsn8dEpLNawKEwbN",
  "key9": "M3nfB2XVsaVMHj78mz49EKXNvtc3AXEvdN9wCEgSbr2Xwd62jMSQEXFiMyr6TpV7SeaLWzB24kWKMTKqx2DT3ig",
  "key10": "4a8wR2Q4MwPDtHvcrZNLHi2cRgeaGfJ3BJakBcpiaLwoEfmqUBqCZV3mtDAXPdvrA3wqneVceMzhbUx4koNRueMQ",
  "key11": "2HUv7ZXgy5htwjiwymkn1t9WFiwrXYdPL8apfM37nnj8QdepiXcvbnuaTP1WDCV127aRJLrvp1nsEqsyHHyA8XFR",
  "key12": "3UPbYzy5uvG5wWp6kigJcBAWtcD9iHRjmGNwZqb98mX5Qsk8gmAZrhsmBcRzWKZ9VEKTf8WoLvSVX1QPELrNUnbe",
  "key13": "3tGQ43wQGxfWjsTpPWRydSGvzbUEX5Rsa7ANUSuB8Cz2CXQP4ehXBPr6a7wNaoASDA3v8UcjoDxFLhH6a5SNXPUX",
  "key14": "5U6LF8kbPwP3gwjiL3j4Mk5CQCR3KTYQj98QvurMuikvsSN1gRzA2kF7qnWGZxpjLkPqoyXTguHAtH8QnnGbMACL",
  "key15": "33ceBqiXucFBA8t4E6YVFmh7b6kRg5LBct9cM7YSNBnVnz24yoG1zVgjuoJaojwMoeihMAkoeqx4QuiZEzimsHPE",
  "key16": "cfNbf3zPjGtsn2ZapnAn7EUQDsVHGF5ZrPd5DbRNeXbz1EDemhszuSfvEi6XYeCZurTiePkiQx7BLjEZj82QBeD",
  "key17": "481pDn4N6rzQNNhHLwb99smAHRMm6kb2A2xXDnr2Z8sgpfkdXqSEp2wfkCeccRQxrAHUpXUvfWXNM4gJSrDCmUVz",
  "key18": "gruU41RLU6JC3UZusqbEdbnWrqRRCQT9yXLtVUZEBwfiu3zVVhzyK4L63Qc74Hw7aEccXb8Ais3W1fY71M7UFc4",
  "key19": "5W8gkjG6gvGP5TyiPjRmYL7o3j8b1SmXwNC5LVvxtfNK1swxNunSrs79QJFTWvzGBDHnXB3cAjonvHYZvxgeG7mt",
  "key20": "3veLMiqV7UkRE1qmMgFUjjQHsCoh8ErwGqDhEFaCdgykE3B5vDDowa3RXtBR4SWR8T58g8R5orG7sG3uyvbDbSnM",
  "key21": "NCySyybX6uH7E1E7WrxwXdHaLDSL2ZePP41EUNbnvP7BY9pLKnzjfSBmMUiGMnnJRMrBzzNTYqCTTtUqQArqpLa",
  "key22": "52BvkhMcTjoQk46VYFUccyvNGcm6KpWiGJgoDdkNFUDsTAsGpHVcPEmWMZFtJE241nn3tqdsQSpn3BHuf59jDCSP",
  "key23": "2mvq5kBHSohZjZzGBL3xXCSmEU52xbC3PTH8yF7C4BM6jouGvUcWX3sS3RrndnqdTrtY7AgrKUmVU4WQGtFMXp4a",
  "key24": "4yimbZJHKH8jWMDCh6pCT5gF7ds7DyVwkPn8cDcuKsPXAZVjiwMBeoExcdWWiYekmxWJfGmhTsBJXPzZFvf2V85p",
  "key25": "2njgDhSuUcQSBhRkUX61nSLZrcSd45d4xj9UxKkDZa4P6UyYtXHjPZf3fG56vXyh7coexAK4BzyUjjYYJa64yCBC",
  "key26": "3CHbsHhdnE7PShaDLV8NcxQas64S7Af1LvjAAw3Vh52xKeXkwQ2dYE2CSzBkjAMwonRjKRYPJPwdxdxA6Nyk2YuT",
  "key27": "VWfRW8WgGow8c5QMhnNvRaXno7CgbwwrD2jZarP4vtnSzMyoDW1TGARNUNAmx9wkR8XvTVqth1x3BRXeY5zojM7",
  "key28": "K9muRx1JpLCsFuMAV7TQcK521NoXFavKcZ6FzwoaScSDb1x8Dcg6fqAKMiWVDAgMHuGFZGLqenbcha19gnfxwGd",
  "key29": "4zW8hRYgV7AWFSXTdNX4V6wsW2i8HgDDWTLkefxC2jZUU5QtUn5Y61CSYrRKRFRENyZAXSxAZdwwdrEkytrsbNfT",
  "key30": "LEtobMJce3CvQkmhDDgdfMHnE7g9i4VfJhVjSespHzH2yf75aipLWN5U2Kd84fkbzMZ9AG6BWcckP1oJ6oNwURV",
  "key31": "3877Az5gcDHLrDcD3QV4iCCpZfWCatJCdYigzdR5y9V146LVEVtKess9Eoyi4CcVoFJUQkAE7YpPEspyes4yJwLh",
  "key32": "kX11uJzcURL93hfx3tNaVb8HT7GBaqpGonB2DKMiZdDfjeH65fXJREsbtJuodRy5iPZjr3ok4dJdjgrfZCwzNbB",
  "key33": "4KyqtPZ5SmGfzvTJ85SMij7UedQ9nW959DzHgSGnssMMKuMfgmogJgfx3Vw5LvR28KEtVUbAWYzZNTdZVEV9poYc",
  "key34": "4aXSWcgc7DyYz8ZD3w3gkyqidZx4u2aSdaLTDHCPSRahUFfkgEGtAWB92RWf9UPZyY4ZoogWUwntY397eGP32rmq",
  "key35": "4vqzgTeA9C8oQ31jH4cxuqzmnUPLbLNz6g2zy5VuEGzZbYC6KWCJi5c5eT4Dfm2e2K7PKaw39rsD7oWp4ewQBC1A",
  "key36": "ydZcJqTx784EYVf8ummLoS7cH9JScJfSL23LWrkztbWhRkGDGsm5mvAoG2FxXWhw6fXptoWTRvpfKbHn2WehfdJ",
  "key37": "6Zgo8yQNhv13tbFBexRRM1CKFfp8bChFdVeuiKNMWQVG58KqVVXFKmrC4mRTVnhmWKn4NF7GQSWxjbV5NZiD6Pw",
  "key38": "5Wm5uCMHkQk2L92KMydM6iqNU6Q7fyNdrRzxiqXbbPQqz68HbikCdnLu8oBPJuRMcPZpXjRUZWrw5YVKSt9JcVtM",
  "key39": "5dfuXCp7BbUPzG8XydkGsHDAvp6ecXJcA7i4X8u4ip7tnZdTWb79vaRZJoUuCMHGzbkkRjvp5nQfXEJtuEXmEVkQ",
  "key40": "2DNqLw5LipqTae3fXxq2qZ2z3ksZttAsT9Xo4yW9CNXLPw97nfhBsADSncnWNGRnJ53Zoa9dqhrrq4HL21KwP9S9",
  "key41": "3HuKSA1EWxeu6N1Zq2Yn8LdZmnMf5uZYpJTxneBVKwoimvRZrn6dNQkssKvYQ1ZnkTunJs7FXptZ8BDAsTbW3f9T",
  "key42": "53a8YfeY6BkiysnpgkJCdUpk2wLxEz2Wr1kFTQnFbEinhdnJN8QHr58iocSx85jjUcbNP4f2RQdzaWvprbxkaHyL",
  "key43": "29VZByRyjohmP8ibCfxGud5pRCB2s93QcSNa7GrrpXMxC4Aops37AyCbyAiMpfmLzYnpxgsU3UpEG5kqmBDms2VY",
  "key44": "4CcXRTs6LMuRKfXrjCKGK5RPHkr4wNkMDwAMLFYTj1tQ5Ez21971wgTJ4R2KVQpg1k8wQt1tcQJaVM5WJHgR48jg",
  "key45": "5K6aGBieorGfnvzZPq9qJ2q3tM9LvQU2C4HMnMbUKAP4wXaZgqBwYWiZu942mNdofuPfEaNPdfzhP6Qpz39TedRV",
  "key46": "YcUe6rvphNgipra2mAGZEkTVKRmYoMJ5KfvFDXeHBBXumn8Nyf7yzFTJ78c1UvS2jQcrWWik5PYSC2gWbjYn4VG",
  "key47": "64aNh3NHyhJsezkBeXbq1ftfcrXywKSK7uN214LpjLeiPpwVZoBiReiVYUFuk2FEaU3boSpnBL8Czyuqs9kyugzJ",
  "key48": "24o4HL2VuM4XoouZsYxXUrtbumcV6euB81WqrHhrSzL4b5TKgNPqs4MGxhUuxYfmHPMiPvuDkBcQe4SVk1up8Y4L"
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
