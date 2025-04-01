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
    "4iyvnH54mi5tL7omGzRFzqkE4qvRnbUm56jpSxvFe1rhx4G5xiRfXdiC5GBLwsctVYmsfiBk7sEwmYEYGDUFHMXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "veXvhyf1FXhsPti4d42fS5ZFmqWyZoBTz3TxycmMWZ7pjikDwNVYX5E7Nv79XiFSbkMvi6wdMBybYuKZg68cAK7",
  "key1": "yv6y4DnZtoBSRABLVuQGubfhwt35Gw8VKE9TWXaTkEGBJ661ZrzbCEXwKpVDUzhR7hfutZWCcCQt2qD2bKPLHBe",
  "key2": "376C4DJUABW8N2jbEJpe88S8946Hw3deJSishskPXybJzDRxpnXQ5U9Yzk5hYPuJDMCtXNr47JmquUR6drkbWZvn",
  "key3": "M29mnZ1KeF4iQgqmXT3YHT4MvWXccfTgUSvKHxA5yDjDxP5LCSwnQWZNnyXjxUDamjStX46BTAxJY48FoPwJGfV",
  "key4": "53YkdsfV8J6yvY8bDeDM54r6MkMqhAy8oPry4jpXfYq9JE6XQgzgvLwEVSk1agyhAJ96b5mrSMqgFwVkh2ENBvN5",
  "key5": "2jDSYRCxtnDrTonKLKZLtUVvGmC57KDsoV1qYGN3J3AAmep6NnTyHcPoNfi1JxNqCThsuQsDd5rnAqCtKB5ULwVo",
  "key6": "5pdo4xRXHf8LWqQxHKiA5HT1j2ShaS5dqSGwCvoxvWLtkbRgmPr994e82a1uFqVkf5KJexsimmJrRKhJ5ZtALh7j",
  "key7": "5P7nRRZfiqQiPD92EEP1Q5S1qaC9Gdw2ghQnq9ETHNZTkKh8N3U6LBenEaUh2rTqDbUEJSQG9yRrjekXAAgPvo5U",
  "key8": "48tJCXeRQGBLQLzuSrsFh54uJh6qYZNJB34M2eA22oyuW9ETK4zxMFfg479HC98MDSAWKdS56v7EdhUroqcK6V2b",
  "key9": "3FLjPgxgjVAuV51txZKfMT9RNgp4eK1NK92U9TPJ6dCbycRmPbsdbRZdHgadDCLnWjfhnGasD5otwM7zNTzSvMpG",
  "key10": "3rmBszfPap1quXqrVUDd9Ajd5a76X27zQrvV5VyVa2peVp8ZHMULXARhbjrmRCKL1mid4a58tU5hNBcwR1ErA8Ye",
  "key11": "4TG2Ezmq9TDhEyQMfFKhdeeb98oC7gHkJZM63nSuYzw3hUxYyf5vdR2f2qdoFBPELQTPR4apjP23WQFf2VVEGLK",
  "key12": "XDqjB1a5nbUHFBr667KQyuK9sfeYsJxnj2taNPEUYCpmnQ61JxtnWdMiKtGHTxzWjKz33CJRixZMvhi7SBeAFvj",
  "key13": "3i33GXfxe56rDzqrRJ123uHn34WNXLwtsvpyJdJGetGsXqjMGSyzkMiECyyFJm6saQRt1Sg4u15cWsUQEyrgGEFN",
  "key14": "3ih6J5AENJsMn6MBgcMrpWxmBoPw75Lupq9qxtxhVkML3zi24s6TGpo7QFNPSavdG1YNHwyMkL4d843GQ4Yop3yq",
  "key15": "62oxqdAYzchZtBjE4du1VPHVbhLPR9LpXXr8grbasBesbT5M4Cix6wYKx2sbUnPiWjCNP2QDqFkqiCyvohTW2trE",
  "key16": "5hQKc74ps77NtknrXnqi32ZZb1pmhBQe6wPHvWRD3NCKoj7XY85b21XVyHnZjvP9xyX7yuqsLevPUzmBnonpbEx1",
  "key17": "2KrL5PtGQEUZWCM7qjx8oQ9CHtEHnmuKHpBZaPcGpxBmx5fV5BrRa1demWEDvLdxEdqz67g3PiLUxMpMasRdYKnL",
  "key18": "R6bR4yZ79KUhaHfSTyYu9niovqqPvdG37sPKXi1riQF8c2A7JuL557GYYKuYyhpHk3A5W2T1Xm8qkaMVjx1ENgA",
  "key19": "4vCyk4CbGRZ1rhV3pFJ4jSkp4dqaWD89Jznyfe3f5RPJ4TnsubmvDijF6TNRx1LKPc9BAfWG2xkuiTNEb7puN6S4",
  "key20": "2raREmv1xGmv2VhG4hkoaNBb2yDcvvsqHymXe61pxsWwQrNYEGXzjbitULLCZ9V4M3hEjQaKphJtjwGg2ks3hUsf",
  "key21": "HEwdwuzJAx2Zep8P54VZxw3fj3aDX9JxCPD85qnEHtiRpCZDMTa188PKwZjVJxgW1vH85N155TRQY2qYNq64fJV",
  "key22": "4u12B3Bn6arcH4ysab4FwA17d8yf2ewR6zjaHBp7muPC6yWNPpg3mu2zFCCkbEbYrMjvqVjUaFBSLTAVEJoVZDw",
  "key23": "4GEt3PTHRSMwet4dSYt1eu5zUs8gsbY2YQqPbFdpw6qs1Lb7hmq2CkAZLUho1owqex4udwoz9sQm9W1c1rXm2SU6",
  "key24": "3N1qxH9ts2Q613drqKvrntwaubtHau2QDojKYHjqvVNzPZKd2KY16MBVx5Lqbm5z2d51G2wsJFkhTGYf9Mj8kM55"
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
