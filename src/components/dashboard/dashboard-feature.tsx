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
    "VTBfAVjeN18muXy7PkGKm3kaviG5PDc8iLnpNRiRnjeMijD2WTJHopApro1jnZ7UYGFXc35Qqsq6EVs1z3j392C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52oA8pjfMmb8c6XvncUwrj11Lt8bW3MH5sKXZHGKCTzgDhHK5zbnyYTEVSyKEopEGhmpqNxmdhnzLSKpndbxprG",
  "key1": "2dtCWWLEEaJmZdRo6wQtrMDiTw3w739vX4x6P517vwJtGKgfTU5j4jCM5aBqLreB7njFpJ2dHAupm3JW76gGkzWf",
  "key2": "4aqo7k1yvea5htBYBNnic4x9V5EC4dW8gCouxZmV8L3TQ37CKCp8FVNkay9LhYiimEUTRzwkF3rbQ642dvdU5hjP",
  "key3": "5Xtir29uNKMbeDfS18X55BdEaHGckMF3bLeP6D4hDtUpQre4bE3da5Uw9ZXxNGraARoFtDJf7twxDdX2W8qy3j1X",
  "key4": "5GE5LDR3BJErX6oaAvH3Z69cCaBvpMJX1888XzcGbuNRaRoeTuT2FJ5JdvA9KKaoVcMFm57iR4moyxP5XVy9cUME",
  "key5": "44Dk16qnb6gNNbfrKqa78w9x68oz2hRpAv3N5fSbVBbnx9w8xL2qMaGnxcoQE3oTyUVyRSKitjmN493pSyU7C9sB",
  "key6": "2yvfxBNKgbJwuSQUAFDpgA9UReDHVjNFRcjMjXuLdinVchqahHo8rLMtJifqYDKdbFMw7aXRdkME48RtCCvga4sN",
  "key7": "3M82D4SCwqQNt6z7c1wrY1qEbhdaVWBQLUj1qxzeYcAb5SGXcuA3rKTaMNikeg7dAzDufukjtCYKnwu2Xot9nXwL",
  "key8": "64aRSm6xXoDBhZkeqyMY9jMCtXtfjiqjCW2erkN6g2pfo2Cz6FRb5vNt3WxAWDqp8NLpNWsVejpBg4UjZky5GRZV",
  "key9": "2HVoEJ67spjwLEKmkP1EjDwAiBFVGqLjd6dTj3VoZQbD8szTstysx2gBVxMnbqqRVavs3LWiyzePZiWorVvpiVSm",
  "key10": "crAZsCGByRKzufz9EtLSVMBY4mX1oGQ62B7txiqzrFXuHz1naL5XuX17trdZDpC5bfSAxF3kD1HkNrgHnAiSnRh",
  "key11": "2bZCFmjf5GvXDiQzREv2FRUJBXo4wegSwRPw7knR19m8qwX7kpY38EZsNvd87tFAQGRQgq97Z91pSVtYhSiq4Vtj",
  "key12": "62heBiBWW4yCXgYmwFREcvEAiw36kRrrKi2eXXNn3SicixtkHG8mMq6VVGyUV8Gn3vdgptvV3957fSj6fmdb9VJb",
  "key13": "3NuhiXFfExogapeVf6niPARBfyGdSsJWWV6U8R4B7ueVtdRQFjC1DZrpEu2d3QfGeKVdStDwEKGP9dFdBjXHYQFg",
  "key14": "3SekBsCxkt4FqhdS2iRrAbRuXKvXfriBALQX9fcfNyh7SkGncYXqYUEmBUFpTah8s5Sa4gYSJnu4FofbRZWDq9wN",
  "key15": "3ceaeTNZsqVzohRTJVsnV2wYj9KRnf9mhzG3Rjm9BdPfBZYB7ATc4kw124hefNY5hEQZuqYRNMqFzQGRmhpk725S",
  "key16": "2TVztTkHCsfj9V2F2Z2szwcmqcaXyTThqUXdm1Q9MKhrsZrb34yDDbpvZnhazfhBeZWvsJHXrT6QpR5VZrVxjRiC",
  "key17": "2vhXboxiZnUf8SrZ8X9MsmLBoHiuzVMHv28urvkmbxWpPiMRi1ytEQVnyfKe4UPcB2mxFxZUDheYEbQZ9GngXaHA",
  "key18": "5eL6U5BM4epz8RKkXLXb9rerSF697sxK72M7mUsz29hDmXYtGi8sBfceVrPFb8SYb8ar8SQdsFdzNFFrLMUE2sCn",
  "key19": "3un9FVh43mdi8BfTjAwZwEXcNmtgotJVfsuNnMKzdwzoKtffbPFSdqZ9nbnmHHYM5ho3QDd4uzNoN6Ffnx1XVrB6",
  "key20": "ZfkmqrRGK3VwarxGcMixi38WtonH98vqtqLvzm5XCHgkgvkEwWt2BQJwvoRubZvvkCfeDuYPH5AEKTDoveErar7",
  "key21": "2Wf7RWujVw8s9T8JFtNAtyS1oDadG99XvewHpa1SQnoZCMQkjCYfvJ1iEXJR8wEg7gyAzz3tYnxJ3rspXpE7aMvb",
  "key22": "5Lnc1fb96yTVVZ2Xp79auyWCWp36v6qSgnhAstCrU5aSHizeQGPoEkpssMGgQ5W99BmKBWoUkbJcvak3Ar6w8aCn",
  "key23": "5bEKwkd5VAaxDqW2hEULP9gkXB9oS5eabsK6ba6VjjSSqSnZMBrgkLTWorrXMzbFb5Lq1Tt4Eq2duStLBSLoVt2f",
  "key24": "4yHbNHjnHPZomAYyXp7W3KEcxfvH9pQcEWZsLmykWe4BwPH4W46X7FWT3hFQ1mmSHN7RKv9h12bMGpXEHwXAiNhL",
  "key25": "5CA44VK2yYoMbkwvBU12iB9ZnQHiqRKpzckPZwLwqDPcoCxm1rfU2R9RxnCLX4deVo4x2rSTM5qUiq4CW1opYCdZ",
  "key26": "37iPuqkseKpHkxsqG3NmzwAPBV76qzWDZGWiab71Mfn2zfx1JLDrxtDHKaWhrfgmZzwwan7EQyq48za6iNLJEJdp",
  "key27": "5D7dVTRFe5hPw56yZLHaVFV4g2wAsYWovEwshZUWnLtvAeBB2stVgH9ucnndsVQRNjYu9bBHaByNYkEzXKemsk5n",
  "key28": "5kBS8Q74BEvUHwuJ1rCqx4AvNin5Nu1iaoRoHkA8nT7N3AkeR8cpoBUtGZUFc5XqsmCN1TEypyrCxytmiQ5w8S3U",
  "key29": "4R7ASkFxMh9XQByvtxRQGEkLhcGQt2uskk3fS7X4htqeRdyNXMEZa5Bv2BEVcXpYbYDCPY6WeisEwjxca3XpoTBt",
  "key30": "3N2gPpRbKMwpEmLonPVGjwV7WV6ibRHx1oh2pJ6sYVhBhSXkQq5djj6uPAoCmP1ynKQhyBEEz2AiCiqyTE65bE7U",
  "key31": "2otR2e6SL5phWfVhLdSLRqgGWYC3NDidy82CPkLQhgNDFMPMkJvQi3PvFPoxG1r3Nk7aWiXNaKeLCaQwwDPhLBer",
  "key32": "4QjydiZfcfsJMmnYTVMXTsBL9UBP6KJGLnnG3TALrwudbZqc1QCwcvY66QBzoXvnHiFPLqtpPaQeD9DBMYttPyhi",
  "key33": "keamED14WzCyrgWvQhEozXTuF1RPPrbVE1TFqUZ6bPf98sCmJdsHPhKPLSp8JyYQSRXh7X7yX1VrMU17XrF9uu5",
  "key34": "4TfaESjw9Q9Bavijv5gicAQ8EqQMhSLy6CATPFyrhfiVxWAap4Qy8mSGhdcZLoW463c4NSDdV3VZmC7KHoeWW8G9"
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
