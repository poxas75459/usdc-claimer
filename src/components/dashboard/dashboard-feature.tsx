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
    "3RLQS1CBKybUgr4h1pUbRV2pe61Evweqg3i4uDUtjmNzh7JD3Z7JrZ1HNGgu131my3Cg4WyVpgr3Lr9AtXyGwfLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bU4MQrfRT9RuinZKisf72Azxg4F2bAo2vGALMrVXf1Gf33oHyrx4hZdcdvvTNddD4u1PVHU4wAEwHoSCmCYTgj",
  "key1": "2kSv4QR71MsyHg4NjDRsKuktNsvm1PQxfSLyWYweEexdU8Bht52Q6BM11EFj1wzXhAhzTT5XeRecdtmYvcr5mpip",
  "key2": "547PayQSdwENPBP6644ap9DXEwSdEMGDATk5yY1wLe8Kot1rBeFc3fc91jtoP5sAuRdjUSNUioVpTMTL6LVattCW",
  "key3": "5NUo9vj4iyn33ha4Kz9ACj1wANqr1kZAGgX7H1BUWS87mb7RcsczaeAeyqbiASBUXExhcjF3VnsZHFTGMJ21gA1t",
  "key4": "5j4qSimz3Z15h9qpVyKhLqxoGvftq64ZPvZGth2p1Q6u9jB7FT8MSFVx2vmigepJtW2ZFqRnWPZ1JnmK43SWost7",
  "key5": "5e4iE3tJTG3VEXb2UMVsSfibFmbKU3RvG7HnuYCyjHm3yA4YihK1xSWtEP3CVWrkKmJH5wjmgnNMXxysTtPdPWt3",
  "key6": "3BV9WhLpYjxtFZgzeqe1gEJch6neazjWbpGREPEGcxH31peU66DrtTGGrrPbcBcVoCz5CzAX7ZFmCrHk21D6Dx6R",
  "key7": "33FVWxyecD9CreLKVX4FF9YKu52txZ9xUQ8mmeixFnkTDCCgyTBu1qMB9WTnqP2vFwHne61sV58AnGaDCVVnDFnd",
  "key8": "4SLDTmBgXQTE4tna1SKpw16xnyCWvXn2HfagzoQEobPuPNHRP7E8i2iqp6eWCq3cqUCHQEZ4bijZRfmMok7t5c5G",
  "key9": "HxBesJA2rSeg5ucAGmThVtjCDkvXU7KbG9ikcEHLJDuHzqw4CvvbihXdftDUNDWqJ4cbkhE6Q5mdqysNfLE1Ffy",
  "key10": "3qqxZzxcW8DYRrMtds1Z3VfUNgZAvRqKtASxs4Gs7NEP2Bokr1U43P81qeKjUHcANxAMkB57jF9tugEtnmYqomur",
  "key11": "3ddFSRytJyA3FQp72A2L2iD75Uw7312uLavpQskHudpVCzENVeabB8ZiFR9C2qhBpcMg376oMLMX2oDqi3m8DimF",
  "key12": "334hotN4ifM1b812RWny7Wu73wQTUZjmR7xPrRfmv3Z9FXYqNaS9kCy5LbvksyyVZjKptUa4wWdm4ns9EFcTWNJN",
  "key13": "4gmYqMz6auc2GJugofUFPV3CT9FnqSnvPWebA7L5NgKA2AVqxYj38kBTWNs3bmVsne9FJwytPSmc4tycCby4AprD",
  "key14": "4ow8teKHUBa6H9dvttD5yGwXSz2Q6jB73JQzhpMa88MJSmrb8nzsBSmDPRocmkfthPbACzNgm8Mrg1ucjvxAZ3Wb",
  "key15": "2UxavQJxxhsFY7kKQjrvaRgjS51Fr8nF8Y2MJB6Mcqhxt7zUJGxRrZXPAWsvHgKSb8RWBmEEbCF9WGaUJT5R5wAB",
  "key16": "UoBF73NzUS8qzQFH7WVMNZLxEgJsWUzauKjWkRiPLugqNABoawTQwY8Ln8yPzSxTDwF8YoEvBb7tVVCf56xAyE6",
  "key17": "47m1bGN8woBnR73dLfH9psbxhct3QA1beuPjRi16Y4NNSrpFHfxDC2cyE4cMRC9xDQyd2GKWu54fVEkocoE8Kumt",
  "key18": "5ZCYoVu7g9oLWha33bqv45HRJPn44sZXVurGpcHQD2UgWuN4WgbgrrNnfNTS73XifvuZKg2dpMNSpEqgjWL1Gmfk",
  "key19": "3htB9Du2n7EN1JND8JsvkUQpBWwBsxjf72PS1TF9MPTuim9J9aoTfFVdHhMGRmJgWT21cJFxyQPFZrVPfPuRGTm7",
  "key20": "4cfqrnYco3xoAbFzR9j1263QAvJ7xgipTxWwfhRKNMnRHcDDPbuCVJLLobMC8DPm85uXi6BNA2edWjPy8pSYQMmP",
  "key21": "qrGxBADKbyTkALcRa5oBbFGCb3VnLc7qfuQXmefgn5mXRscxuWXBM5zBPFmW4sJKmCVJdNBDiuCs3cZfPxjbPgE",
  "key22": "56PvKRQf3z38gvqKHGUii4byyVtvoVMAK3JUfiVrppotj18BoFsGC1v1i24Hph6eV36dPpa9knn9TZfon3CHzSqY",
  "key23": "4Qp51LGySHV6FLx9s6MtXr9dnM5UeX45HLFEypgpfArCn8oJUYjy4b2ijPCF79TTNFo1McJMSpjcbvzQGGDVbAZn",
  "key24": "LVYn8DYxxos2CwZRymEtu1N8t9mzW19JY4YLFCNh1TRZ16gcX5tyCEwJi3MoqBj8AtLeuEdckropRdQ59tAeuVY",
  "key25": "3nn1bqYqZQnzzRDdibU38C9jTAtPpvHEQGBWg2ZUREWF6cnDij2dpXN9T8osqYZhR381saPJny7X8gYeweiYx9a2",
  "key26": "3q7HD6GKXmxVAhs5DcAKgFBh7qX4oynMzVZkDoDhApGMQLG6krEJgxwGdzWi7kc4FQMkEfe8YW5VF4Zo77o3ymba",
  "key27": "2YvoLnunWvTPBe6ri4r5NEMyun9WVaBEof4uxDxWKLfhmWkv1S9gn6X3v1yf7F2BiknwvPcv1xX7oKPKia1YFYC",
  "key28": "2cx13NNkmWpc1qchzBESj1amXMZypgHBrfTU4xXtpgkW4i3uiAbSCPynJ1H8MA6WSqA6xiAuKdAWbRA53yKz56hD",
  "key29": "661FmKuLsFKUN4od7345pXf6V4kzFg9VTj73PPieCePgV7jLe2b63Uci5wefZzPyYUzHKVhjwJtwqfqEJWphNFxh",
  "key30": "4oRLbECPbpwRZfSDpcm7aTDtMQNqXfK7hX9dDGRJyHrgmTR6v5r3urdVrpsXLJpFYcRuKgNuRFzH4hksV6ttVNPm"
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
