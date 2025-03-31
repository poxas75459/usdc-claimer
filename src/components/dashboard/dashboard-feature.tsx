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
    "4fiamqVgKQVscVTrWyoEKKGh9ixtznxUksfqSHnJfUyg6Sy3EaHUVBn2y3zSL1fxcCkRDJgx62X11sqSgv1fV4m8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b7h2gJvJm9ptAD9Tbc8MnDzpcFoEvjpotcx7ZjLGLrTc7TAQkWqH2TXCTkGkTMW8HTTMSbFyWhKbbP2kd4qZ8EC",
  "key1": "4k1oyStmVaZGKy4DubNvwyng5X8SXvDrgCxRZywqb5SBxxTd1t6uN3tVP5sLLvHZN68WjHvm2EZvbMvjrSnG73nU",
  "key2": "4d9fvVeouyoLvK1iynANoWnoR687XvTtiN2gr3xBWzi23Ekqtqdmn9M3UQLXjbHqy8bYLQKSMJJ2in1mJQHniXKM",
  "key3": "5HRK2m1iFVCyN4kEzXwoMd11b97CB1Ur1c1YHmgcNRxTeJwo8QrEGcBw765RZvTLsRbEpt9biYyGwSAad9PmqA27",
  "key4": "53EAVSfW1DMcXHApUxSvtpqq127unpd8KJn2j4HSJrviGURiAvnUKfMzJrBV2vRrLENDG1TVFKhGPiKn6sMA6Fxg",
  "key5": "2F2zv9TJQ8xg7QPwzpTtTcspBRXUnnks4R5PaqseMCT96K7VX2g614APAJwYqdThH7EaQEwsiEAmoqKqWX71gkfr",
  "key6": "2KBCHRixMK6c8uNiiiztiE57ekgTf1wVu46r6TYpxZ3UH3P9xqBLzLKZjYKMtt6EjNwPUgFwGVvCd7Y2UCqU1F6o",
  "key7": "4fWNw6bXNUHQ64RX7vEhV6nK1h8YVfMyDbWPiNQhwCcGuU8rxXNbXTnagX9H4CtYCfEwtWrucfQHiSLN1e5c2ydc",
  "key8": "2KcEA3mD1N72DDGxcxkQcCZTjTeHVJRTXxPkeEVHP2xwdp1FGdeuRe2MgK7Jj3bLZJB43iK52NsNj9LcfvmyUNeK",
  "key9": "2zVHqP3GiA1YfbP9dFfX38NYKU6iA3PggTJNwbozpax4iToPfnmFE9pWjnY3RY7pUPdBtwFiGf8MmBBEW5oifmC2",
  "key10": "3dRn1RtUd9QMpobzmW93jb52aMYedBXwVnqMHMWCK79b1V8DQ9Ugr65Q2yFG3ntifHWV17gpFxhHAU1ds2DqGNWK",
  "key11": "4WWMp88CJn9KFoTaZZKGqAxSHVoba1C4HWzVAYr1dKG9V5BmCRfkRCYeepiQukq4HPtaLYPaeTk6CTPj7TbSdaKg",
  "key12": "2t19TPaFrK4Zpovwvma3bp3KTdtD3jA6ksGvCjm9rYauSgHhdrNcsbepu918jixNa9zopejSM9j5uhw1cUGYnVvd",
  "key13": "2NVp8ELLWkEuouSpAJn6LutuSp16J7xRUt6n2whW6VSU28UqyQ8P3tYe1P9q5RA4LKeaaBQii9kdBdfiomCkFVpJ",
  "key14": "4VoMD7HCdL4cBHaDi6cJE8vqfP6F6LWbe8R2BcaXTiGTG98HLpf7UmfMtLTpYUCnyybbkftYeCqP5pdhaMcftqgY",
  "key15": "5wFivBTcaKP16eAdtAjPiCNfrrHQSRyCHnMW3WeQQgvncwdmsL6gneQHR3miiexjJNB1QLemfVD39MpRv1WWwucb",
  "key16": "5yzZGNDENgkzW3W5uNseYtdYdqt6m3xkcDoAjFB9zaUEmUCgvzwg35raGEF3unMUXtJRhzxawJkR9fBoQ1HEkpf9",
  "key17": "5P11JaDjbv732DYVz678H2ERSJiLCL9XbRWf3LxFDPRokZKqCGpr7pPDCGrnxCWsgFBv4eQEWvrbSNxkM6AJoe1N",
  "key18": "2VDt6MQ1GyD7sSjurJ1oSQbx1Z3xEtsBuGxGhsnzyJy2gNbworYH9xjbusDEt7R1eBWoTSAw2S7gTwxxizagV92E",
  "key19": "2mPaXucjT1mi2mmfJhKPQRCCWK2ZGbRbzrC4J9ea6WCbLYSg2mkL7ksxudfEfbjDDEyC5bYFP9fV5WCMrEAQZJdN",
  "key20": "4jhKPy3HJQWk9irHTR44fVUU32jpWg5bugM1a4te9bqmjeJWNjdDAPrJRgtHatWj23wSzytTGubwQvok6dyJWLYW",
  "key21": "iQDsbtiTqiMAK68twmoAHYxp2ixwash2F2XuQytQtPXM56VP3g6S5mjZeB8EGcyCetziLrzyqqpGjt6cNcvG4Pj",
  "key22": "3WBZfxDMwhWfWiCP4PnPeHuJqyR3G7EmFuQQSCMAfiSbydSeh6ercYk7SuLBvTeKrvvK66esWf8B2yoJEezmtMAr",
  "key23": "3SmamtnptjDUKSaoXfHVtZF8j771U7PB4CKVDB7ridv8uVC68CmA5fBvhbqKJWJys6Yfz21PKcJ2cezXXzfX9cZu",
  "key24": "5gonmccwockWsXew29Efdh8FvWtUoSfRnwPLbWc9h5JDXZRsVTrAUUXySfHx8uKUcBqubcncLiEiU4R1G1pA6Ubi",
  "key25": "2aT42i8sgoDCRLsuwXz6bGx9gjJsZyEBMWqZSdJVugWvHTTBcCXzEfNSk5dN6nuXopB5NXXkitn8RnXxBt62HBMv",
  "key26": "2GxfdGJNDAwbWVCR3rGXy8bXk8G1odExwwtC4UXfsoHLBGxaCnZcVJk3wv6myL8XGhRzpyUj7tn4dGFymAhhd23q",
  "key27": "2nBojhCnX54cYZVnToQ6wLQEydfRNTiVL29KUa7swzgp8MSADzsgFc6nvQPmxrmWX4FBPKdhnhYsnb19x38gb1y9"
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
