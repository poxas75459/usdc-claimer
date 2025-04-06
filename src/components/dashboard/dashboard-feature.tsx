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
    "5pSKBrcyq9PSsb1pyRSMj5295BgCdFPohWecre7ys4v2D5TQmeKMDSA3gGCNpX3EUdNiSMTKEd3EgYvv8tCUwY5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D9NjJFwrbjMxMeuFb1p7f2ubDrZUPAfvc49ApdyG3BwzJGczy5Pj2GdLY1MGKAAQhWeTSmzsPEody3eMGAP4QUQ",
  "key1": "oHwcbk5xd6TZoHSywNYt47m8TWwRDFUekkJC1DpUWTJ9SvGT2CK2jxBz2qNFyXfALpFm4ZXVCe3kFUKYh9XH7sm",
  "key2": "kvhnjw84RwuiWhr8bqELYwfm3afE2tmbcvfmBXf3PDRVgKUMjYMLWomfaFSjUEpAQdXyzR93CMY3A44MxCHJnfB",
  "key3": "4dNW27y6N46bY6PYcydXeGZUjuL2A9egp2gaeQ7rzAwthYjQWTpzhzyZHouFbr2atdCDXgzwzTSoE7ZZ2yG3p36H",
  "key4": "65nK1HVdzF8edPbrNhr4s23aHtHv6PcYRczo8RabfMvR9qHfMJxyJqWnhKKCnXN3sXWbF5rjhZVvH1LQaeX3mf46",
  "key5": "22zHajF8v6i1BVnUdD62L2Kmvc21mcC5ucr2ReiiCmQPvkRmUSTwHARmGDt7wNpxJBmTH8q2zVpYASALVP5jWe9Y",
  "key6": "52F4yWnJLGY7PW5gz6AARQXTxew8X4re7RTusCxuftd9UDAYCHgjF1T7jcHg65o4zhydj6mWBCWUkykrYFQ4AhuV",
  "key7": "2i92t6qFm1ja3jUqsy4J8tSMCHZTdv6dtAD6hEgwhZ9RX4v2vqKDQU7xFxgwta3hLKApqKhxNyBdSnbjXg4vFqAa",
  "key8": "352eTVGF9YiaBqihzCVRPc4HMFF7tWgYF9d78GVrzCFRSYrn91RTaBgzL7Y4h7mTDRgwgTSpLB5un1qxjPeZAt3p",
  "key9": "3DUCrkMTePaAaXLTFZa1hiH1DQsjoMACs5LuTYuMakYmfJ9PwmPesytY4rHZUUPmqSMaN37ogJ8aEfTtBk2WdXUy",
  "key10": "4UR7m94NePKyNavNhWD58t1bqM8n4e4fFLaThzHrAwV3EFN7TLRXQY3dSCzNRcMgCuvLi2fNPjjaFK2axX3p7cFc",
  "key11": "3cdUqtCsWdoULYssXwrYMufwuyZPen2GEitT1sytoaZQKFMeyhZ51mF4gz5dSo84UqH7YfwTsGkx19UmqPbUVvEa",
  "key12": "5nfjyHG9iD8iTd4UM9GHnJcAsekoDvxV9WRRkhmWkuuawgz5KfExnxPbbqVeBMpc2HRGGdCv8AVUBaBZ2VKUVAWh",
  "key13": "3WWGwEMikgDh8jWuzXMrVHmw1Ad4UNmytXtGJmUTgVGqTkx8rCxRCYoqknCnYwK7Kej4yMvDRoyDqiNmSM6maKQ5",
  "key14": "VaBxSny5pDe9KySDUwFQgXwZT9vHVGa3a88i8TkywcpRzE8Un1dq1Xfwue9d4pkmL5A4cwqF7DTyenAyPzgQrH2",
  "key15": "2W94WbUBNaTDZeP3XnBM1giaBLSLoHXmAd879E1xt4igoa4rBoFYyW3H6ikJn9dRcMHWPgkiPEkEZxX1ePwYghkw",
  "key16": "5d5sFbw2sNoEv7NyTo69Cjmp64BHtPHgVJhKypGtKLy79Eh8nuBQtsPrFjhF1TEENFQ3TvZgkqvqRPkGUFPYWBiK",
  "key17": "3LJUbdi7qbBsYN11yGaCq1mvqFUwRq1WKfRQGXrNy56JstgDmJjV3kYr3HDZNgcBZzcko9LTYTGHbcs9yhVYPx8g",
  "key18": "41YJZRWWMcNWs2tXNe9vtU924NLTMKxWiB8SHficrhvYaP2hcLbSqENak8Hz6PuyqhxUMU7ikwrtX5z4pg6iFYgy",
  "key19": "5uGdSBrAeS6gzquxKBWx7vbvHz6i98M6BYuavDajXLRFpGrRmWhEn8Tb4sRp5qkLsdTv84s6jw1pV7dXNXT1KGfh",
  "key20": "4JcU2atJqy8ic1TuhoiCAyetZUkVSShfnJhrp8ub9oRviQCkVENoT6nrmZ4PnmVHa5GR5GMRGjDmxHzNjcHehpAx",
  "key21": "mXUX7gfK5nA4kJNWfwz16KVN77XKAyxh3rARRQrnKTdRdD78YqN6fq6LHPoFg786xPB43bgBDZTwojytoKeWVqE",
  "key22": "3LFgoTwm8TVZNTKkpq49SJuQ8PhezJuh1c3Ca6MzYwrMJYrYcEF8ipanopU4JY23BpXsrs92T2uRD4uZiAq8KRcb",
  "key23": "4f5fjBj56tpjEWCyrRJhyDgqYyeSSXZfU71r84Xs5PPDZZadUENvpjiyHuRTJKnQa6jGvXAGVFbWnEXi6WffHLU4",
  "key24": "3FiXj2bPKLVeYZUS84g5rKEYwWozei2wCqvbLL1mxiB2jQhZkX6BfYiDfzYUzpJyd2vVa89g8Dgfb1s8fQ3GRpfU"
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
