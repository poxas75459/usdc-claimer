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
    "3wSfDddLyVKnvrc4dnwfjv8ZGRLBVmiaeJXFRvG99Ks6xmUrySELGCzrUduFFz9ojr9TXLCZ28DkwrDkGFGTbmip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QJyEb71wRDFe3i6FQRJYpz5kH22nQ3iVohYWLWbXPxTXkPjsW3xLcaHEDGPHURXhimX6tudSqJiSiFNhPeACXPE",
  "key1": "4yW4Pg8Azam5RTHhT1Yp9UBaaoNGiCGYPonYZYiCBizKN6K3mJNrJvP3DtjJcHRa7YrJSp61LJwnwAY9oAkBz4wc",
  "key2": "5Yr7SiWVN88dCBs3tgjz7Vz2egUeCohRFiAyfnbR4q6qY3aGoVUbmiiXFVqhum91Pq9gJgkaC7iwLCaGggsZhdfS",
  "key3": "5ewqdY8BAoMnG2vCKTRchN5WRwGm7QngmJVBBkV8CceM9dd5me9F2e1ooCWBRk87rBrtsMJ1cR2ew6Y3pVEjTttJ",
  "key4": "5ZrpUhqoSQZJfUyKLq6pLXmzcUWNK95oP9MkrfZNHW1RDruF2uDJvtivEKFXoLpciiuWeBnt2s7pj5bj7SWpbRq8",
  "key5": "wkvWJrs9Giq42yey8HxdRmY4o6j2FoD1U9oR2nfBEQFxu29Q3Nb5NERkxXe7U8iQZgnfgkE334qbtwgXkWKDQ7F",
  "key6": "qc1aCss9Be5SXcdcMFKjerTFbmU2e1LYipUp2wifaforiapHAMFpnX2QRprQZyuYGA6eAwJ5nxnqBuZetTqNKBY",
  "key7": "5mwzeZsGSWVZQYxH8Gzfskx628wXQZgbbsZTpvQRwVrocXugxmGyAMkfT2rHtkjNQ6SqxXFGwhdxa8ZPHRWxGMa2",
  "key8": "5U4ScXBiYFqqM86MAaWPzp5WfR5wcj9Ds33t2QqxJvRfYBp1hZdjLmxNn1eeAtEWyo9Dk47iCGH1yePEQpZXGmDv",
  "key9": "2Kqg7tiS88rVN6XLmCXr6ZRD6jcYLrfVXehYH73x7Lw7otrBKcBiCozucodRsyb6x6XEUBJAn4m9Rboid9XteR5M",
  "key10": "5zjdagq9aFuPGTsvpK9RbTbKFgKX8A8nrG4K5DuArqHeJXhpWsEPyY2sph1ekVgYk8LMMpfmsqRa5CSoy3mTHc1D",
  "key11": "5fV2UjuT8VqqckozLMZdbaxGubsSzZRLdmGBkrJZh5RxAno54gSgPghbXyHpVah8pQSSVhqsZJbsuKEPtpk3KuAT",
  "key12": "5CrwV2gCA1yUVDumiGiQZEQNDeE8aNrFTDNASotMKDBCVbdyzRybhpJWAcbzhYU3rspaSqmLB4YMG6S8b9H1Nnk9",
  "key13": "4z9zJGq3vmPp2JkHSXaddpvsEBazdA6Mtqjdey587Dy41iCAgDBTWHXxhTEQLPF6WuPQpdYJ3SV1D4H4xQRBm9by",
  "key14": "59p2bMdnqnY9tqNddThm8UZJwFsLLMj2JCqQV7DocFkopfsnu37Agwk7t3i7Q7MCD8GbLApFMTxHKYuqSwZWdoGf",
  "key15": "2ctEXUKJ7SZoTfD2VVrXxrfaTPZByyQK1xaFVZ3XKdSnEB2ExzugD3wci6M7hNegQsJRBTD8GPZq4iqd25WM5KSR",
  "key16": "2tf1eFZRNuvcmT7x2RLMAQTFuGcLATNUYY5ryMER6TnVDNaGjnMhZ7wZ64jpVyNgTBfNHLB3YN7B9kejsshdr6eT",
  "key17": "xvjG1SqHzuJCqnjLfu6qa6LCmY64R6CoryR7XJgtkX7A2K7j5yM5sD3qwDN1Zqo3yXJQsbBp8FKobhM1uScrCgw",
  "key18": "2V7bBrA9abzZAWeabsLWLjwFqDpB636TJus8zNcQycozrCS7JdevX8xCJhA93qpPpJVcwxHhVi8eQj7Zitk8zggD",
  "key19": "2bq3MxZNM6UtQJCGeuMCvxd9KAqmsUDX38hZWYZEwuaHm6nACwn32szPYrQkj3JBJiuTYUM3vtPvW11oPC5yGxxq",
  "key20": "48p54msoM8JnRwMvYc1T4YrZxVBZ2ops7WdcvuKD8GXELyhu5yJ35sRhXQeADJzCYQLRWWNW5XCgiAnPVWWTWwL2",
  "key21": "4uo8Ns8Pgmvx5LrcjgDraYVZvUahXyGRAxS6FhWb6VGnybPCK4Dt38ZGYygoGzSVVza2nrf6KWK1iimZxZwZzq7t",
  "key22": "3qZY9zjtATgWuNUCFqQHE9Ytr1FtEt7C7ZjTPBaopnGCd1ucnx6RQEQf4TxjNqTY9QVQRH9PwSUCvjEqrumqdb8N",
  "key23": "5Sg3ZZ5BK6ZT2GuBR83bjqE1Jzo26tZTzP3NPrKBLuoMy9iA8u4qh5MuPWdC6Si99JsGGiot8ZVaVmpMjLdNmqpL",
  "key24": "4aJ5bj9VtCkbL7yKc5DWNTwq55H5uhZBLwmUhiQE9pw8EUvAS3KQKfZPBDboUs9p6WygMh8X8srv9AB7i64bHea9",
  "key25": "ono97m69bjjaE2bUSQCirhF4JWuupHEeKHSUqY8kqryUvWJVanx93TQ2jgRhGMBbMgTm3eH5Sfejt9mRKgVc84D",
  "key26": "5jNDBFyLK6Mm64PEJAsjot6fXPZh6VivatFhKfdCqZuT4rrHHmPSENQ4LrzH4FQKgGfXv5Q8a1gGajkaJrzzKAw5",
  "key27": "JiNgN6bYgy4Mk7vB2s4wbP1VySn1b94KH7VCHpEUicHNZU6r6UHaswshRTA2LjXSkqtxtT2DKXHBsGe9eps4Nqy",
  "key28": "4SujEMQE8ULPm4NkqsymWLUb5tuE6vTfpvyweF24rGqbzRYZKbmdjUeLassXg3HMbkYqRQP1jRwioaY7eLTr6FuF",
  "key29": "cBfdYW7krKSPUNU4JFjoA8QKdP47swF4hiYr28zGQSkk9s9pdwNAXWAwdwp2d39sd54paHcHK2K4hvmDGxgKibR",
  "key30": "5jimYj2B4rFnRBUsXQ5XYGP5nATZ2FxkveviMM5UhoTpyQ79WB8jhsb3e94ZvKexdkx4aJtJEYiE9WcmRp3PeLEk",
  "key31": "4JDeZ8j8G2uF384ibeJHtfP1V79WSUj65mbLBnijLTYLbxswuJUbQD53fpUNPqTPs58J5LJtri8bnSdN7fsrW9eo",
  "key32": "2nFiVSW4PHnpeeFBHpK4YyjeCebMxQH2d29HNqHduVNZqiacs1yVCJY7XdNCoVZFuRFr9UcFYtEy9TR7sHLkdN6P",
  "key33": "4JuFHBBrJB9E52fJCQjo1T1XuXHgJ86oryhoUKE6CHAUFT4McnRynCMfoMng1vTeEU1Y44SbQtkchF5Xrm82vufu",
  "key34": "29EG5PHV4adizK4DXZ42gBabt66B6VZioQ7g6Q3PECwrr4F1zvxJP3vXzguxSNLSxZuc2r62jTknzcQ9XHXHeNbQ",
  "key35": "3d1rcifnKTsS5rQCErN2iukkouY4GUTTtJjsUoCcduP1WJyY7bsBFUKHvSVJZJkAwBsZV7knxDUML3Yyxa9XuM34",
  "key36": "2agFTWUzRmQMUP1euv43sPMje1kBo4HaywqevkJ8ZiKYV4DEEtiJvvKRWU9tAJRLDZskenjJTweA9JJXbA3gvXQv",
  "key37": "251wvE5Vpov2STf75bmmTEPkQhBRb6hNYzqLtMG3cMABHiyCbKG1TpXezftSEsQmTHnt9pDytZAWiRqR4jFDd1fX",
  "key38": "5QXaxfLmFkHxTDYRnM9bjG5NpVrPDfqeWpSE2y9m7unKbUQ2u3mi54LhavS4FGNTwbsPW2QwfbjZcGayamgGz2HJ",
  "key39": "2GjeCv6tXpowFKGfzYvjEkdEJNfAm38fWmoPjKd32p6ro2XGpFoVj5Fo5WUFy2ZcZd2DYTmP5WqgJLQBRjh4JdQK"
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
