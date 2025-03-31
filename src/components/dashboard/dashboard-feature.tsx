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
    "3tWehywTcZq3Y6w9JgSdLzGs5Fiqa2VGUb8iRfCeA23nYNtPiLPvhUTT4XzkhUQ1zMyvCFXuUYay6Cgk7b7GR69r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aAkznVKX1ekP2PcG6WTSoNrskk1u2cpppzWENwvTDn7FmQanaHVEeoZkpc5cXcZ2Ak1ry18aSD3nNn4ra95he7s",
  "key1": "5QL1rzJuLo7iQvAgfakGAnRnoosM1KsDCypfD5iZ4xTnBNB7mftoRJ7Ntj73TMezRc3yFYJxsjh6qHksB6Usu3xp",
  "key2": "34rrstn2BzRDvtcda6Nwpg6c7fQAG2g1cHss5NS2mufHyoaTJ9XpYuWqFPL8Rx3EeaLKXVoZQXWdczF8CFpWP5vJ",
  "key3": "33SYTnJ7G8owtZmaCPQp2fzNtxxwWGzDNFmGsiMx7KJs8NqNJF6J2ysyHPxGMnJyZtScvQvQngZRMnHjs8GRcesi",
  "key4": "5KG32STAyFJ49BrvLVv6DeQcHatTB5NWbaa7UNRYct3GsoQsZAmsqF2y476TEycPDv5Hz2Cm4thryg2Lzm9QwjaC",
  "key5": "3ZHV837sYR5o7XmZuHRobr9BCUqhDNWN1g7qF8fmgE9kZcjfN3wBxwnf9Z4rV9eBd2Jjw8gswnaVrSTxfNytfmQ5",
  "key6": "49YJ5XaGAZCJUe2q2fF7kFdbi5baTcYi861E98GcwXfyYfCsBEnjWrqQ9iVzRN4j9g6QfTFzWQMsvLqZHLksY6kL",
  "key7": "47rcgr923E6sAFESaXHhQw23uowELs5UWUsYXBVBFj9TAZrKg273qjG33uJGHka8pifPPr3yic1RjMqv4cDTWjNU",
  "key8": "kwSJsEc2uRLkDEe64ixxtbMTWpXW3zvpnWmLHfQgwbKFNipaGwBo7F4c3f1zkHmYjFD7sfyrUbNcVXHPCE9gwuz",
  "key9": "53T1BTsNfMWvMzy3kexazkU1h6bJhSMYV469DJYY3N8fnYaZFcLKu497UcwLaW28KYKM4dLUhYNyH4iokxkuPedX",
  "key10": "weZMTdzrzxjpy51yXoqQEZdBZRwhJvwGkHhv4RYHXKyY5mZXXSJ7uMdUQvdedc3qF6ruVh2fPA3UM3qkMep9ATG",
  "key11": "23Fen58h9iou5uj1AJWVhPRzhnZfbWadRBQ4REaSnAf1j549TUgstrjRrXVRpYTBZtCAkKd6zGUSqSpBdgJG4g7s",
  "key12": "2jJQHAj3uRZc5ZGNGfWQAupqxzvaNSZdMEGXwdLf6TiDagxgTWrzk3WVAnpbrBazWJeQA6AqVR1d3xvEh8vZrHx6",
  "key13": "4qtcvUVk6GaXtTNY69bf58vzxVg3YSFCcs5BiLEX4UNw4kkzTjfP8twxFECMz25fteQ2mP6uBDEs5rGyo7mQredy",
  "key14": "24KbJRih9x66pXyiQmXHuvPszYF7iHSD2uh43TuVABbUtY3F3V2VWjsJpQQnGZ1rZ2GJXktddnoS9D6EM7TD7fN7",
  "key15": "2PpiHPKuv8BSUrwPKaQuX1D5SF6vTGmMgrpZUqXFwjcmCddXik4a1sPZaAwxHpNxPsnD2UyrAK6kjtrCDweTuP59",
  "key16": "2PccNoQmMoVZKaaEsbS73YGz6BzCEpvFyQawRbEvTdfvrL2cxhqsDtvz5e8bA5c5jyCBH88pBPDVPsHXxHsiSwzC",
  "key17": "58b756z4fp3DGv9YkKpe3q2STDxWBpkaEXpwFqRbuHnXSNMnYkodYBwURtL4hbsUa2GMLocJwNjfEP74UfhA2TeZ",
  "key18": "vDQfLaQPL5BZ1TfR3n4WEerzZsBjfqR3Juv8rjhX9LgAF2SKTvBLn4dDnzQCaPfmv7jDbocx967kVgoQu8sMC5p",
  "key19": "4gTsw1TKF7CiP4zxsQTBh5npty7KU3bzfZPdeZfouz1Z4hn5Kax93SPcZ7Q1nU6mcPZV3hyV9VAELCP8sC3YFD7A",
  "key20": "2JGnGwxR4eZAnZD4yyEBd291u2eyRrfaK49RtkqWy6hEgZ212XdcEfugQR92pfcafVULi6JDgzkcgtFTqhuYx9TY",
  "key21": "5dC5FdvDF3Eqgvq6H7VgEEARVTdLaTk2NKU3UPH2s8oU6S768VvSJmy6cBtHkPSyjUiDSaoimA9QEXW5ue7rWiwq",
  "key22": "qs43FNU75P9Q61DCCuGXxW3kMNpB51oXXum264c6MnvtwpBY2d3YMbdpULXLfcMCet9zNgB2gAa7Enifym1gBSQ",
  "key23": "4uqenzZkEVUY8T8sF42zL4K5AJqiM66M8e1HRqxozb9HFByiU81SDbw3BKbx4Fd64DQs5GKNyvbWLvQvAuSW3PWj",
  "key24": "5Skq8xczqPU4iTu4wwd4xXPUgd9HzCs62VD8R66oKfHzz2T7s7DTyiGipbPJSXRQQG8XdpnBEwWKbqhxKQwHT6BY",
  "key25": "4APtJRPjzsRMk24eCD8AmZFWzFWjzSqfz2xTsfijY7gAwtZPoQ6sUntpeFyyBHwvnSqEmcVdjhioqu2FB4M3zX6b",
  "key26": "P8Cbd5A843oT9EUJCvLwVQy5D536XFdqMtXesiV6TFR8WX8mEBwAjr8ZcqJeFjj2EcLk63sKaZEB5NYprmuM4UN",
  "key27": "LVkFZuvWsYwZ63JZDELCnFNbezwmQWy5DAaW48AFoWGBd4B7S1ffHg92GEFsER2LnLHHZZEQbChjp8aiWF3K71t",
  "key28": "xNKKNqW5JiJkdsuwHQB8EzEGn71pFDGr1pjYF4kcLhFh3WxwarBRY8M9cun7c8eSa63Sx8PkUzYQCRxRqdNrAgV",
  "key29": "2w49fcuZTjkPo8QLX53o84n4DpbV8HowuvTxEXkQDjbawoKMrMfMgzovDFLg3z1EN1Lrs7234FbjfUhYVLnSVMA3",
  "key30": "5Q2UzwSYwxyYLLKqqnMeXR55DDPMVqYfUE1ri93QXzUMcnQCjkszCpsMfrW2eFzsNfZTv3F8rwizTfkDMSvRxuu3",
  "key31": "Jhbw57d62LSCux5zKZvCDgRzpvgT2GAzgt8Xom6HtpJeCA7FJHbtkSwJq17qgZ7RaeTyTCpcx6fn8RCX3YscsW9",
  "key32": "gFNDNmzJFJoixa277L9Pq3fDZiNnHwb2W7c7NqxzWUUt6Qu8cHcnHHuwYkgy8Zse3v3SVVZDyLM2aRWMus1Ja7S",
  "key33": "454zPw4AzrYENSmdD24VjKA5pwpJJyR8uF9zYdqdmpja8i85EsL1JQrDqTA8NdoVsnUPSSYVXR4d45kYp14ioyxD",
  "key34": "kuRXsPhQmPgPianNJyxCdvU4nuXokvvrU1Eh5oTLUx22t3MHUXiGa2XUXLiRreC434iyGiqofRxYPKVPDk7edA8",
  "key35": "5V1DCdm36j2WsLwpr9Fu9Hud9fxhRwv6N7hrt7RXKTZv8ijPEgGEvLE3Kchp9vKfgb7HVhjQ47HyxGqcbveqSgQM",
  "key36": "5NKLof5EmxrpGzr4q5u4YWzoKV25TRiMLsGcy8mSgCNUuNAsVARsGD2h3KKtrSNEmgGFzSPB1jj4oeeYwEVuNyCc",
  "key37": "3nCbVxQqtwxoijE9MsL97pGPN8mGCqeyUSQib7YBzHWNeRfytUKpCChfAH6RrFdoSAk7GGUeLizekwGSvvmo12aF"
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
