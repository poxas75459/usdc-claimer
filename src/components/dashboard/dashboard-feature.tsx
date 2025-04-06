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
    "5tDju9SPKqFJdpZdHQ8qu5dA3qrxxY8QGosjmxgX6AU6UZJe3pML3DLtBnoYQBx9fBQEujfvGc3xXzrzkQVMFgV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GJzrEKdGpFTvhQRHEwxkPBwMK5KWtCGKV6Vw3n5TCqiRpCXdkB6i5a4FerfuBbk6a4w77rRBTYbzen89PjEfUBT",
  "key1": "81LpAnsrQgXqzLL6MsWjAZEkAsvEHVoaubZqv6PtJocNyM5ES9g7UMKgrHCgDVR9CXdRAyh4Lxrgz8VpNyQumcK",
  "key2": "2pJ1crhrYSgVd1K4xiq7ypBKvr7VReHwLQm7AndoDmFY9uQoZcUoCroEGDTUN2M59tLsS3BrSVUE38dx72Nxfxyt",
  "key3": "m4JgdfwdA8JVYm5KUBKQt3apR8WEj6zU8YjbuT8Y2T5GQXpTB2Zs1goETe3kKiJWWgWmJ6HWwTJznZmnPqeks3q",
  "key4": "zZ2aK5aWVvGWHSnzSsoc8kXJy1VjDfax8wz7bVDBEX3QWKFJ8GNFAhm9Q43rhognSsw6BwbdboRwKwL7otUk931",
  "key5": "2Mpi51T88pzUbkHkwHr2TkQsT1vNbhcdzwWb7vR6RZ8XDduj3zbsP7SESSgJDgYGNpAxxRjw1Y2Ca5doyxnHJRMv",
  "key6": "CWimFAk7Cgmhg4sMBWdFtDZrjUxJcqX5JZUnCwHtmNtc4JXcg7i11AiszHMChmAAkpUygcA9YTPcdNUTstq2auJ",
  "key7": "28gU2URoizMk7X1Ga8i2k7X69YZUp45hr6gekVdqnEr5NfvW8egXJuPAEnyd9KhRjoeDGNoRMJNLS6gHn4eCVhud",
  "key8": "5kExuya2YKaarwCQqQrsNM3u63X4yR3Puks75Ck9VqV434YDxBkhNMprN5bkaq7V7nqrMFWDUwPue6BxEWu4qQhX",
  "key9": "2P7yaEq9VHhWDF6nWDmvGhVzEDoSnFwt63usHAnRwUa6UUbXgnARAz1fdMmDBoojDFwPB5YUTGFjLkWoPxbGiu7z",
  "key10": "1aqErniEmKT3tuzmfD17iGgkp5oNKFKQ5jwYtQSB3bbjShLgkKM1ULnQvjmzBfxz9jDxbTv27QafJMryrvRFkUw",
  "key11": "3aRQE8dfQXnG7vMiotFPMUk4H9h8MQcS8VrEfpBb6hhUGpjFw893pSRzoueMioxHtWejsKU67oJpitLBPgR1xwTz",
  "key12": "4cQdFXdSrVdDnKQ6MGSwnrLQDw5c7PBbqGVdRoL1ZS4CrjnNsCpi4XT1SvSkrmHGggEcirpcM2CAEqyq2yqqM5m",
  "key13": "4HonGFYHSTbCLKaqY3QvAQKaGonVYbedukEmej3FHFDS6U8HbT6ZGyEW3geuQA2L3nJ65gEa1kQSVT2ksMJqczb6",
  "key14": "5hYq5rkDtKJd4ryqFqnybbSEDHzMYx5xxLKAntLtg6Tm22iidMPf8eGzTKLAPP2ALgxEXwSVHfu8QCGZ1QpDaKFJ",
  "key15": "5ZVkJAz1Mk96xYhLaHPCLPeikzpAhW2PLs9TuTK9jxkPeMndRiC72nUNwSk7tdX5tJpfdzVLoALqX4eZTNY5Lvpe",
  "key16": "5eCaF5MSECyyDvsG9tbycSoApSUpTuJWcFZ3qjMdks6j4h6X5ddkttqVKEF8hHuZqe1vVTA2HworM9PDA6KQV3G4",
  "key17": "3hdDAxdUnXx7oPhWZ9VBAd4cZ3NkXkkMTVLwS91dbVwMAUkmSynN6cBpYmg2yFUELsRs1fx1kNzDz8vuMRUQ7DQE",
  "key18": "5P8o6bJyF54R1C9e2ADkZaT3cyNQnpVe1nSTyFzW7UHg9bQKS9vGfEuo3hftiDF21fYJh4J6DKptFrYsCqEjKagr",
  "key19": "wpdq39FajaeGUL3C2kAkPMKiXAzDTNQFQzcjUkw68b8WsHkFpfWmyCzCJEfV2xvqYi4V3JfHA92aJfpAxArvwij",
  "key20": "523MALYMQE9NScj87ivr5VKsWQFVuoEgbYiDLSw9F1fUJ13kviRwWjBAZP47BPRwHphFrGX35mwyS6dCc7ewYdUe",
  "key21": "583Y9vBfZQ1W9cBnSzVQLnEzTJzH5W421rR82hqCRcYDoeQzHGVVVw92AGqS2nPAjh3uVBcPgGEU9hMzEcPVVFGR",
  "key22": "4qnvR152vc2PuL1jcECTfRPPvh1pzLcA2UEQygBm7nCBDW9hoHsYJ3cxX44s6DvPZWpSdBujrceVe8D8bjJgQcgL",
  "key23": "1dCkEDaNXgDbn1rUT7qphRAtqbEucoGLAXSoCikKCk7XfHUxEpmxJD4i7CKAaVF2x1JDmc7rwaV3jfEgvZLry9R",
  "key24": "2r37BuTeiaG6BRDuPhhSPgmC3YBrRKnAWuroRKSEjMoWpV1kA4PhY9n1QLAePwoA965jtfha4pnLCkSrmkokHBtz",
  "key25": "dcRo7FWtpJJ34AXyhRkXATUzzdDBsWm98Ljk4s4FDSkW8Q9Damg5TbSTpxtfKhh3YKrcyXryDZRYVfswY3hbwDA",
  "key26": "XoEvEs1UTifJojJSuJ2rugAP4VZCmWhVoWQQZV7ddN1LSUVjp62fR6qDk5UAuSeqiutjGKMuUY1fXCpV8QD93nB",
  "key27": "3QS5yVtH5jWZhEqBGFMUiJSXZi8xnSxyBc64a7j2wL9KNLzaXQ2pvUysyTBgExTmR1kfGkNtdUA3sn7nFSnXwh21",
  "key28": "4g4AHEMN2PVcxXQkTJQJz9kc1KKhhjdekfLJSoJ8Sm7Wizsp2nsBPbRzMm5mESPcVKBGcT4LRRzYgCMeKf1MsFoN",
  "key29": "Y1s2q26DS76iAWLFEq7Enwt4dLmsT1nynhUGa1zSpPTxL7uD9huPuFFcNC7zY7Gzr6aDKtkdqgWaBjUTq3mWFtv",
  "key30": "4nq7wabzKo7uEDwz5wejoJ6CHGJwako3ieLPfQbN8wicS9DdaGBQ8e7srC4HCa6zDYdt8qi2HmvPtCiXYSCwRygj",
  "key31": "2mbQtWE8nnEYYuAQKqVGCpUWEyokLCmZfw3iK4zgE1m9sGvFdv2XmxqV4NVPXsJ8gmhSWWZNRRAgB8iZJAiTEm2o",
  "key32": "3PpybHCESyg97QmDNdCpaxTpHmrKZQsao5jndUt4QSkhjPzkhbJgU6B4MkjAfEqgvUCMWGN7aTKgS96JetUFnEC7"
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
