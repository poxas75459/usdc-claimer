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
    "eCmkfagdLt7WKN5xrKW9sMLtQHx5oMEps6Yr4Ev8orgCh2xiDuYntqfRjLZuERH9p6FwUUmSnd3W2D1jeqwRmWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B6pBYpARoVTR45pHwYzFjLWcvn81zozRAd26oYSbypL2bDLiZKPwm8GnUvWbRkbjMjLpt3Hi6iQch4ChR8Mhovt",
  "key1": "4Es36JogP6ZkKySStMnC8QJVUHkN8tK2LLi2YmYqDrgHF8pwxySvhV4PHC64378TaG1y6yWPxGd1bgCYELPz8ysV",
  "key2": "2Y9TnRoDozoY4WiG3Ki1hEegfAUvfsWjywjKJYbK27nXoCrNmoa8zEXkAbbk5JZKkfSPzpphQVVWtHzfEAuLEcJg",
  "key3": "2HYVnYw5z1zuk92tXGc1V9ujyFCY1XD2CwJGTB5wRCpUGo1R1qtVEDhSNf1knLtddBtpJ8nM3hLyVsP8pVythaY4",
  "key4": "2mxDf6QKEWwmAemZuxJc1W9KY9TE1TFmt71Jbr7WNNGPxxfwf8shEuHedZkw5V2KqKYY82ARFXokN2jNmqUcexv8",
  "key5": "4PuY2wJox1o9LAvhGVdCf4H4EpB2U6NBdX9AugmcUEqR6eWhAempDrfdmuyRksXJEiDzAhayj2ZDa3uaaELyp8jN",
  "key6": "28M8hSkeX74gPQVyGjKRBXWBTSxdviDFaGt4cqPsWmfRf8nv1So6ggRisXa6TbdhEtdQkXGc728ur2BamckC75ML",
  "key7": "ieaw2GtwhDahy3VcFkwCN9aD5KkrsdDYD6AfqeWZAxsQpYRCqhrAQ8GUHeVyjf1rNggPwmkjCGT4pJnt7SFvJa3",
  "key8": "cyTzHhd7yyHEtfLNY6drJYMMdgtsLTLs24hVPWkB72eK752Cb5a3Y39tCzmN6MF8gry9Q8b55M7UjfXXV8KAkpp",
  "key9": "2MSM5CvjDnv2GXJHwjU2y7WDB8bs6oMBBYDQpMKtinMccNiEhGLnyCri4qcSenDURVLmvaafNLwSPxabrgnpBm4U",
  "key10": "ZVQcsgESaFFjCgmRvAJXQt4jJSL3Tj8D7gWWALv9KkXSwfPP7pg35eg9yYbC8i5qyi3bCw69XjT4EF7AZvvppmN",
  "key11": "2VVXxdmDzVV5D74a8MrGVtaMN3dJmS3vvvzkbmE3kfa2iKZnaJPEUyZBEsiYdroaXxuRYRkzbNTdE6U6fNNmjAme",
  "key12": "38pP3jFojTcAUgTE9sQXUE13Vfh4FVANNdG5Am5wDKxqkFaAF8suvtDUNrJhNzdJdjxCXFJN7a3LWGhgMETYNhEB",
  "key13": "3HJDNyX24jH1oYUicjwvdezWUxHUp8wSQuddzs9R7QStrZJC8foPs3Z3VonJgzfa3W8XE7RDZ58tTk8bqMcSkVtV",
  "key14": "5geMLkTb9kHmySiHJx2M4rLPXUYMAYtJVkmZkM1MTvMQKjNHRbw6zP3iRPtRwxfzzPKCJv1YUqCPGhkxft3Xrdd2",
  "key15": "2ETXhP4aTjFtBnn8zPPrpfDvWSwuUqyuxawJiDA4BBqbsxowCPEsVWmBCLN3bHjci9ZZozV7YQecbzjL1GJaXuvo",
  "key16": "2Hmd1j3vhLDziUZWEvFSHTW1WNv9fnsr8iuqFWFqJrtGVt2UgVP8B65h5inqVkJKGDimFbN3zz1vtV8F9k8ykS57",
  "key17": "271oirCuhF4PAuVGadwVzoNkC8kyZp6Juk7anAi93sVyAm1tAEyhpv1UkNbdkGKuxGVoxvH1eqA38ZjqBFFv1joq",
  "key18": "3EjRjsiE1TS9e8ARQghF848yhiCiVt85qJTkMyQkb1zLwUef2QAFwHSg8YvqtELWMtJBh7VoepieKtLFEtsFTdqf",
  "key19": "2uDcjt5f5MPzSoZQGXKCyY4xwKjtrZZzjrvfvxRjQ33FpkAQEC6r2SYh71Q2gvUHJZFZkB2d9NG8uFvEKtVwP2qK",
  "key20": "GV7PSpwqv8AHdFjWbRDbpxgeCbbU1onqTpBXccnVBCfhy1t6ZqdHc1yuTyjp3KCckkYQfgJd5BCkMcs4dqnG7ct",
  "key21": "3FxLb98Ko8dK2AyevDw6sYA99B51tD4EEd2LYCF2emmn5pwX8gAHdWdu61HeoWcCSMAv995WWcZmt5GnGgWoyk7b",
  "key22": "4ThegE5qMXpT7C1DKRDnJNV9o6CvYeWEwqZVzQWs11S42k12j4jWbFKdpoXtEGfSqsh9A95xymFNd3in3KxVZwy2",
  "key23": "4MZjiy68YLZpLB6r3cujEeHyiGfpefnr8Pz2VXmaAPRt28eh849cJ6kQbP7qnPuMxWEAbMrqMuwsqSF1mZS1jNu7",
  "key24": "3gvFJAA3VdDf3zd43r73JHmjw3o62iAsU74QtFQqyC6Aa2mNSewPQSf5xSQuGcbHTHunTRBiFFo6Ri93RPMgaBYR",
  "key25": "2joeegeemUiBN4w4hGUADqmZL9SbY1zZiqYfwum7R277H2RauxCuw24trbGhSsFWZ9zKQJ2NQ2iH8XUz5pifJFNu",
  "key26": "36pxSxgFc1UsUQPEqSuxXbBeBUkwxp8baNDGZZPtfdFy8hnyd2zDHChd2qgeY6PpMvq77gmCFNyeHti2GA7G8Px6",
  "key27": "azeTsihQ8iTX2vWCzzphYMLx7aG3yFMSrfcfPb81gRtuns1Dx6DW5mPFDurf7ysPX1NCp3UsGmuy24ZpMVTJ7ZP"
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
