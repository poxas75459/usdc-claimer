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
    "HpWrF5fD7JoBAtFMCsrKPADZQ5c9Yr3fCd12DU1sSuordf3181dv3rGqae7U7NRNbz2YaT9qag4QLg8JmzA6CBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kXSr3BFXzUePnZbdYxqZnNm8JX5nLKjj6ZP4ux1ouJhorDeSBT6Ekq6zNMrz5BoWgykBVooZ8V7XGiqDt1XrqmA",
  "key1": "31dVdvqLy5k69T1eyQ3rmbgv6eFnR3nmuCLBr11LARLfNFBRGEifFbAHQvd1oC4gMCgWhRFANS3mPfcx1p67d7wt",
  "key2": "4GHu7qRUc11NdpnUVYNWTtMAg8VNni24VoEkaWqT3C4FSz6nqU3kzuy6BjPZHsuYiVQhVtigCWmA83QwLXB621or",
  "key3": "59M2kdiTCWKYqd9LaxZpqVmJjdBaZhsaJv7eNLzVGt8D7bXxKr9YwFGgvh4r2u6LwYi7Udh3JqhMF91kNzXQoqMF",
  "key4": "33uGGhewvehmaqbGVW6jPcR6gUMzoJ9DgyihQ4EQRr2YGuNmZkc4MEWgc15xFtKeuewx7cQGoFFCYwMJQFjJTqFc",
  "key5": "3jZujgxDj1T1sBL3KrFDwaQpJqKetY4Jn8j4opd6YzqBudWf8sKzYb1fVykuPTiPENXbANrMwu66ev8oNsTmnAF3",
  "key6": "4P8GMfR1aYFe2m444CaVhDNQBagYWBNDEbtwKALB9AbHqA3DhMKcixDHmJqdTHart2s3BiVdfA2yxJw9oUDPdTr2",
  "key7": "MjaWPQWSgSxefgNBcHyo2PCpWbKCikyki4xYc7pPMcZU1oi8H6FtDKhjxzTiVPaPBr34WBL8S19KBfpA5NCmp3V",
  "key8": "3qBofRuifhCya8AapKNaRxBXGKWWw9qDSxk5ZTBLyDC4F8YPLEoTGQgB3imcqj4q7wbVgKipAQZcNvVQUEfYpnC5",
  "key9": "QmAtp3h9sPxgNkUGpNT1j12WG7sKHaW5QviA64nHyuFCQj6esRJioKXuK3Wk1wVxRUN8RXJybkxDGTCx8mPzyLv",
  "key10": "5iBr8tSrTnY6K87ZeHR6CUzPwiijpWfLJVP6QkAiRZcbWeWDUn76Qid8x3KDXGUKsg2G86yVDc2fLpUTUWskqyEs",
  "key11": "3jbbzSMUa5zpL395abFxbXGsRYcQb6TshG2HNMBrLCx6Dk9yFR28NfH9AC9QFcurANZYL21Z3S3nV5J14GJRhEeq",
  "key12": "2oi36pF3qBvLDSFHvNfHsieFnLt6N2aFXUnV5fnuCXLMxbiVLVjsciZ2Ct5J7onkBqdiWVAePYSCcu31oA76yubj",
  "key13": "4qT7zExyZxhKroySSdLKyLG3DeCwF88GBLmSo9mGNGc9MMZzdvkFhiri6nhANfr76rf5NvmYy7uV1cLPt9mUHS85",
  "key14": "2yWKGGKc8epiC2ASGGfx4ovHugnXra8xmukLgbC9cm4jLumbA1ksbzAuQb2xQB9Zwp3cX9T76PwxAGeAeasaWpuk",
  "key15": "58n8yFCPoFemKGYo42513YZpEXJZY8atNSS8iMNeFv3pYS9BEQkKu96uHKGPmAEgG848wVhL3GGxS1UPpwXPayf1",
  "key16": "3LJzBEmquFFyMc2YzCEb6SBSQFYTFg5PwzctjzYT9T3ThsyhUjDoh9gjwVBSKkwy3Ve3wwm2E6hrMCBx7MfMkTDb",
  "key17": "2MvZQM5Q8C43nxvFZewL5AvGNs1xBoDNzpLvjtm4fHRywboE5YiTkXxQR8sqBMezG7m1wAC29Y5pLCXAq7D5SDTp",
  "key18": "5z8EJb45yx7jJtvNhu8xreVTXP7TzQSim4zGYnTYviUDvENSMwg4DCLSbreSbqTiGbEuM4ksiQ34yzK3uwH95i2g",
  "key19": "SaPWnLJuMcFYhUYrj3exsMLWfUTsnLoW5FkQArxPvzwxgFpSmKymWE7qR4VUrRcNGv9aJgQ9Dk27mJEQje4Vwjk",
  "key20": "icauf7qDCGD799zS9gUiuamMiGhH1fRZdnyKc386ojUrxyizuQ2iVm6RYdGZJeCun7qmWQUSaLdJW2xTMM11xYq",
  "key21": "5x2T2UTWCp37KN9LMCgKDWQsBpbGPMLmgcpHkBsTofr2h9Kb2KJe5w1vXW979eLuzK34eqojtSsjSJFpYv3fcbu1",
  "key22": "HEE9XPzHujw9wofnBY7iwaV1mvzvAqxzUAnQJCrQhRTyjnN5Az7CaCLEELXTGoK39m85ugKRZzzQYoBzoChCoJS",
  "key23": "vLF8kLs9vcewHmKTw2dnCrhjA6FUyHhnvy9xxsgFgrdy4JqspBv7tMfRA7wTKi72eyPfjW1L2HPeHNhhdRd4Y42",
  "key24": "558nWnhnXsTjQYk5BpPwApQ4uDNumM4PFjxE4R9dyjfrZXNJdxMGQHXjHn1b4NkhVDmfQru22P9EWrPJUmHJTSPu",
  "key25": "29sZoiPqejyqqGuryyvhf1MuT21sCjcdMFcTt242q6hjvqVsLoNkznLGZwQPa9nx4qC54hyXcMfAMPbj1eMW7Nq5"
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
