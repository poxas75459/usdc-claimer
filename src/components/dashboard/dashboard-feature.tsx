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
    "4HfdNhzN3RRrYv7zJWxWk2ZETAW61U84d9FjDPAR32sAWN6g835zoJWfxbjWoyqcZzeypyPnctBi6ML425ENAMEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t7jf5ofxBcoGuNyCR497NLGK4jii9U9ub6ERyEjJadS1Q8jjQVX5dVUsajR69YL24U7ptesNk16pD1sjvnkjyyC",
  "key1": "3RnzNuU9fi2BfT3bxMjemFuuC2YN9gANfaUfD9zWJccoyRWjdsuaBRfCB7kNWxnNZB6WXR2mSFqn1zR2c6s1EL8m",
  "key2": "2CiZWB8HKU2Q9LX3pc5P3ygjCHvELRHNyiCHHw6gEW3tTiGBYzLTBxrNRds7pAm2L88S9ou7eCCTZxYKHwdbvb9U",
  "key3": "5douzZgu3x7hzw8AARMYPqojSP4bM8WAWK2sELCkxscmyFww7aoaKNAbqY6kpZvhRgERMTmGvTycfoJHgRJrFzKN",
  "key4": "3BRrFZhaddg4N5CiRbwrvvFU2W5Phq5S4MPDnPebBY8faGnsw1Ffpx6hDcy9L9evCr677eM47DfCQG87zwcGfNJy",
  "key5": "4R13swYKPoH7JQM3FWLZuMxZ9Apd7s1GvDZhNeSF1d1uoSdnM7kTAZcoq6faGM97VSQ7kXHJqZ2hnnWSHwkAfiWc",
  "key6": "DQEVH2t3yrN3avXaD5PNhyXVm7a93i7SKd3sfTSsmpbD73cLmPWi9xX7SyZJBNRzBMX3Kwvno77BGGGFTQiFr2L",
  "key7": "3ViZuGGRdtAUn8ppCBkjjGdQy1CxrmBcmsVwcvwttL7AZ5etbvYFVUvpdtSeh1RLBtKyGbvNmxfHn759huosk4st",
  "key8": "42j89AsRgTqFiHV9fQf9RZdf4R3ePcrTtDm6Dw55eTnYPUjC6V8a5d1ohKLCQybdLHFg7B7LcHRwEPNwfxdLMkmr",
  "key9": "FGFAK93ez3SD5YZEU93vbzdcqwnFWVhKYeitKMDonSfNE35YmVkJPLyooTN9T3KWHeHmQTyCf53KPLsXM1bhWyQ",
  "key10": "D5LKArZtmV5u579P4BDqFmaAFBWxoxU8ZMhBNLaKSyySQLqACZFTHAkKGiygJe1JY41L77fo2k57FYKX23tdFcS",
  "key11": "27cKTsrhoMzLPgrZ9UqNsGRaFQpcnPe1x8tJWxVtkZfa2wJCJf3UZisDqHwJ7sPFLHXcaqSDkgrMcNcUzkz8YDYb",
  "key12": "3PBs4Yn5RXxLbYoN1QMPWaW256sCcfb8bRmpcGnUc2dKYUtyu96LCuRN3RueDv3sGU73SmUCTG5ncsYhX5ZcShUT",
  "key13": "315XsdKUtdDPzutVd4cfXgPK7BYkNJw767HTwHrVcQBYAbq5fF5GkYapJCzA2D5eR2oUWkTY6yL2wJQEKjnPxu3A",
  "key14": "4HeXE3rsDqFgLDE2bcN3kekbkLzG9UxjStEiRC2FTdBugoAqMbwc9TbjJoo2T9vP7bRJd9bFb9Tkg4SnxQWGERF3",
  "key15": "5SC78TF2kG6ZSwzNh2vfhBtKbbb899dEUnzHyWpsQiionr5bCRSnx2TQogU1KavCA5j8zt5Uht2Dt2yzC9sWq1Ro",
  "key16": "u7R6CEK1iDDLM4qQmhx13nrVofhr5tDYEvFPnGgix1w9j96xAe1Uu4FuUAS8vQSCBvLvymLbiDhNTasbf1H3Mko",
  "key17": "4ZiZVtwbtu3HjcGYHPvmDgj1RCCZcc7qy6yaaw6Zec8NobUdc8jJauWWuMdSueGsixLAoLCrW2RPUSu3eUDD2jVP",
  "key18": "X1syyYE5ET5PUK9UvrybUn7av2xSH38jT34NarVUoqapXcBuPNwnCnTfn9smHqj33yVkay2jpZCrjNDtfHFpdMm",
  "key19": "2sCSoRqxbrL9iPyymAzcVYCQy1dE57kpiuwAAgDjj9Ygffq2D9CdAT5eaVSM2MSwfUnpAj5xUotHDqBXodabfXGP",
  "key20": "4jMAQmucffSL97MSKqH5GSFivevAeJEjkS1ZDtpM65Cev4gMyyon31zRLk6SPzQiNG3Zpd1dwrEJHFv1Dq34s4Zi",
  "key21": "5YcdorhxBWvcUnVbHs3upe79ZE7M9ZZ5LWg5nP4CMy1dHPNkCneubs43U48KEvQ5vh8395DSZAMV8zr1rxWS6Z9X",
  "key22": "5BkMtSWxummTD1KavrZf7w8NFdV5ZjBnYZ8CKz6RGqVuDUUTqYHPnC6Z7nUg4ZVXPDJ1h39HZbrghynpffgka3Zm",
  "key23": "53PJ9XCZcWymXV5WCAxjpEmwzyv2Zvnr9AXBEftP1egnfTYXowWaNiM9YbbLfRd4RqxQ1EtYw4PCdmxSC1B1d5p9",
  "key24": "59mSckty6EusrRgfwW7av9KPVj2dyWPC5eXvtQNh6xSHxeweYkmobG9e426QznfGgJHCPZcESzHYYXkZF8WC37rL",
  "key25": "41pB9ubMfHEZMxxxTkP6Pb7wSiRhsabSQ3xKXGybVUciYiytnV6VTmbdhrC9QLyjWiPmrA6G2Ja1PkuhQKubLPWn",
  "key26": "oyocaAUrwmavpnw8ajthUTKJvvEhHcHMtWR792QXFA1L5v5a18x1uChvBX39exrp5xVXWm8xGojfMZ4vByLoX8z",
  "key27": "3RW6ghkKqpY2u72t8RzfJETFTpNoim38rRVBNqWUcKQo9ZnEvwTiRzVTh5hSZG68QXsfZQLbx4mstafkjy3WBphK",
  "key28": "3KkW24Z5g2cVxjewKW3FDTnhFNqMfzFALbbnVygK3g36XgC9nA4Mig2o7q3QeN4PW99evkQXBuxyRDMnM2KSbjMk",
  "key29": "25J64t2EhiMw4ftMCoX9Us1jRSM4xDqEV5Fbfz9EkiZvmPa2eBbSCNscAJmptLp3T92vsajGm7XRF53xv6kMoNXo",
  "key30": "3SBymNQ2uUvx4VbA2sd2SZxxFunqsAccBMP8tqGt5rvbF3azqerXBQFf5Y4t9PZmw97VVAPZ8qNHyWCkdSjcvsJp",
  "key31": "5pjir1kvDxwkeQ8J145JGVcdzq4zrWJHxHYmLcXS2NgVpb3JAyXJxwhJMBsMxNrm6LN4nv76vmtrdgbgQwqBLTcS",
  "key32": "5TPR5ntEyTATi626kyccVLf3mzXxkSaZVGjcm3iKPP4hWM56oUNrcdUVMye7sbSC84NCpMkf2ksicsb5Fj2MtikC",
  "key33": "48o2mVVmJ4matw8igdWyV7EHeU8J5udc4HfDKMSrCXhL111youXacZdCSrQ7ReCAptjYjg7w2QpgWwHcB1adTUpM",
  "key34": "3VjZVn6RspxbZKoH1t1X7TdtwbR9uDPqh9FXbdZ1wB23zM8ANaW4fXzyNpGyX57ZxcbAN3LX2f91Uikh9APHKi4T"
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
