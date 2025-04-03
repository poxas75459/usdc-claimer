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
    "CLVo1DyHGiiNsJ6mPKZ1ght8nLiFZcCfJYa7jf4KXKpDJtShNCvnDjVeacJFuGmDaLqvRnLfM2AiuhCk98w1DZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28HwqBadNHeSRgF2p5SrnTVd9hQyzSLUG8gae6WxKUsaN5KUTrBNeCqSu3dqgFeiCfRtvEPqrep4caotLapgGr7E",
  "key1": "3mCqwQMWqAZHiuFcshMC2JNuEwVmjgPGGB7wEJmMJD8xMasxVz5qe92iUVeDZViRo65iwKv2MvLASvZWfuSyoyMN",
  "key2": "3Jkh3LjCb1MdiFojk9pfqSmJbQmym2kjRGEBHJWZQMehmzbJ92LhfzxUdcMb3JccZNPLwBRWEaYa6odEL4cJjfdZ",
  "key3": "2gS1J7YdH4EJjTYMBsPYEWgxqxFByEuc19pKNiysXKrXaMbD7L4Y1eeGBMLmHjfsACWcj8aH6tyrZiooY7M9aA3J",
  "key4": "5R8Hi5TM2WLAhq5psYLt4ah4Qf4hF3D7EUrXbdqkGdtsFFJfGgHeABKrKBvijBMPo5SwAyo5J6FaxcuavYigfm1Z",
  "key5": "4hp6qFZ4Cqp18ikX1g4Qu6Mjg6CmB4aesywdUn92qhdEuqGiyYqYuXXuvL7ycGxgm6FqtFbL3w649q7t7LQfsUAh",
  "key6": "4jAD4PpoV7rkpBygDA7bvTPNKNtM8XMdh43QPHNMobZrZox1u82tcxdkimid6rAFh5LFKZ7hfhtjL9nR8R9bDDSy",
  "key7": "3bqicpmc2GYqreBbRApp68EVGjDDjBDBBuDLHkQGT2YEVxGzN6uA2corDz1fRx17HJxUnjhWVZ1437n1zGTHQ4bB",
  "key8": "4JeTXBHeaqGikSeFgWJna8FmUU5kGvYtY5741dLpYvzetwV5qtqnxbrKbjoQiAaQMvNNtWUUoSPEUBs6r3vVqChK",
  "key9": "4wN5PUu8Cjb5w7YeJ9LCVAmPnD6ap4qYMyV9ixJmTMdNjHKnvfFHdHgCdz9CPsc9t5skxyRAyhap6Hvx6SvGXcpK",
  "key10": "zbiftG9CL5xessXvFyE48mFM648SqBJkxGAjQiN2SZXt15oeTUowZ4NppEPkvo9XVnGimFRxKni8M9pAgZZojwZ",
  "key11": "3BJZYQGxHyNbCrq9NCqdJvpydP3XzN2fAN9o7cMKFRFGKJRXb8nQqDvTXVX3bCCidEK6XTgydzstRr46GcTnqMJQ",
  "key12": "3UQ1PMQF7tnXbbj3AgyasfpBWUPwrC7Fi7FHExYK1deLdjaq4dnyzJXKLC6PZiW6nWPAm5ZCc9PtN4d7UMBtNkQr",
  "key13": "2EfBZD53xgeiBiK7KLXR8ocwo7p2KrCEesJB3WES6uRP5oSfbAVTjcwM1wexYSFCrnSSnhXmBYtLbVNMxcQYuQGd",
  "key14": "4MYZeLxtQug1wP2KeyJ8obsuVHmLbzrXYmZ9nmN35UEFD743Dotnf2TsDHeU7vqDFwDZvJjLjKsHFjrJTpx4sfcq",
  "key15": "47PLyCcycFWUBhGZwyKuqGJdGvudrtD8HSqBwGffWMQ86Q7e1986aJkrM9YMEir2GXeuVGKCnMKRxVichXcVCHoL",
  "key16": "3et5moh96QjsrHsLr7jFZmpDZ6wnWtFH6ZNXBMa2BYPLvCwbA4xPtuZnYGyPU2KCyKEJCBaC6ZDY5AbLVAmACHZR",
  "key17": "RJm9ucwoHS61qqDiLoyz4N8JmaEhJJUXcbjBkp3Shk4euCW6BbzWQiBxSoazkoxRHZt1PNGjdnAy6ed9MxaNQt1",
  "key18": "qHBce7Ujag7iNt6qJLkHK9UGD74veXokFwx6jFudQ1hKoBFvVLEn64f4JDnJDr4oTetDjyJhLHDUJpdBQRtbin5",
  "key19": "3zmqbG5EPanbzYGNYRw7p6xLa5vSW8YyUjEcWTovewGRYEcyHjZBpTebpTjEL2JJXXppVibMRCgMzju68Cvja9mT",
  "key20": "5ZPaYs9SyQQJL8TrxDRoAUgNVUS38zkhwL6K4gpJXWRBVTP4wdGDQcwa6qRdpdFtvwWS5fYdehsZ1dJkkYmVeDE4",
  "key21": "3uN8JfvnhrjEQAGj9JUHPryAMmMTrCzadqMPRuSsQ5st28juWZs1cSRwdvhke6S1z6io51X8FPZz3NUk5hCnpdnL",
  "key22": "PVXx5Cm2oovaBYYh4XGqGhqYFS1Pwk7xP3AdmR1ExxpRtj8xd5DbVxK4Ho6u1CU8FRfH9TJJ6PzY8YvLRruWdRN",
  "key23": "r3Uoe2Nu9cE5BAaN9JWJwyrfbuPgbPyjBcthkm7qYgVawGpGyPgo9S2rPvgaRBvjz6ao9PtP7fa8nM3d29GKTvo",
  "key24": "2KS3PRcCZYMLTFpEQJvFdPAGf5uLX31GcinVX3vPXBk3wGo7GiWGnepoeaEq372PZsdLCqYFrKYzguWCY66niR2M",
  "key25": "5kSiAa5nkvUbJpoCHKysbXAt7thQsrMEQnBwrfWV1Wvi4wBM6MtMNGZkFTiPcsmTd85hn4wuQy58qh83sGfdKJqQ",
  "key26": "4PB6wSPvSaruxxyk25XRQ2uU5EpoGR2c2FBfjXsHVSy4s1CdJHofNLvuuwHrnf2hNgyNoD9w6wABMmAN67fLCAmq",
  "key27": "XE5oBwZLhxWDbgJNic5XSam9CmDyytqtL9fGVYtCPBQJwJZ7boJubQMsg4gNCx2iUrjCaor9XVSRNMKuUH7fovk",
  "key28": "sx9MzDi2BKrnd7q1w35o1Ed6cBrbLdrKmhthr2HeCxyYZWqPK3sJd49wLhPuyEjJgQHnGUVoWJP5y6kqURJt7HV"
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
