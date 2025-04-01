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
    "121kv4rxmT1n5EYgyr8p3CbhCRzYjUDHqGRDfHWq73sczVbJE6tJU3xomqsJVeqbn7aKCD1G3jWazy2BghmkjMY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WPYbwY7ni5Hbsmd6SKBRcEfgVtkPq9sDtnpb5Y7q7pfqxPsa52BYEGqWb3pgHHoafLrhyz8e6DGyiNBtbvnyarE",
  "key1": "446LANmUgg2rwKg3DaMDfEwoGXtp1HUfLXB3Qq4NJ2WEDs6tta6xMiR6NqEgX3x22m6dvgTL1MiNrDpePNWJzTdK",
  "key2": "4oMrFdGfNQtK5MehQVkJ66s9pH2978pXsQc8WSoqUyqvF6hkrLb7P4KPZ6sXk5YwoGrogfc3kSdxVJsPPAnX98fM",
  "key3": "GeLpSA8eiZAitkUhrJHf9jvk8Hi6iaHEfVCMAT1QrS6LuWNwMTEt6vdH1dc7GHLMwFHS48DxpMNa9xgJybf5nmV",
  "key4": "5SgqCfxUMhcuVxnaoaZqHwY25sFySvgkmsEUYaapZvPSeUva7Lm1wyUV2q7QSeGx5s2dJLeGzCmTby7Li7i1hJEM",
  "key5": "TaruamVAaTyzYuFkVBBtwh17V7qGpMmnSSNrX1UDCYixso3HxdtYgnb2SQiFqnta1Pht9Ysk3f1tLeH7QMkB42w",
  "key6": "wce53nVeFmFYUohiJQYhEPjL3uiGLjUme4sF4qzziz1sUq94rr2PA7XeEGd5SzVdywieSqLpuKmCC4vHmSynt27",
  "key7": "66CSgup3D3LKNo9yx7iCCJhEAPYUajgmt5DgwwhoTHYPi1uhr918bFCUDGFG8wwjefzmBLBG9TZctJcfaQ9t34B8",
  "key8": "3YwiMXFKVHpNXj7ZE5SeLq8qoLi1LLhVRafN3gNJGXZWUhj6RLM5iMR3w1JxwQusSms8FzEaf5y3ACRwyRN3o1od",
  "key9": "3D8MGsT7F963L2pX6RQ9cBwGxKPUeHEG6LuZAu4t9ZAMbTKDkigMxPuMThNKJoZYkdoMMY6jYGNhuCA2wb8WnQdQ",
  "key10": "5NXtR7cYTnt6LjYgd8EG4JE29LAHHzN4TgL9BzDqXQgJ4MJvCCWJBggsdfyTKUDJQYS9nzgKG13cQMHJFjyigjxL",
  "key11": "UkppSB5a7KBQz8wkS1VTnVZUtdzuecLD4gmN612Dy74y9BtUqbKwFVDpNGEbAn2YpPcBoMm5okyf3kUjYbrufmS",
  "key12": "2dvTRBxkasEGdbSM2CzF9wZPdcCceZgm3K1oqsZcTpXgP67a6dQSD3tg3ARjd2gcdvppvAmdPqv7ZC8QzTHt5BS5",
  "key13": "2icrEiUWi9iFeWK8bzJTjKcbrntxDhnJTKJtuWDeJqA6EavsP7u7YecEXu7usWefDqon22cQnmad1CDmJUXtkF1v",
  "key14": "4fxPvXiZMaFsuVCKzKd9QvzgHGoVsofiebsxooPKaLHcirAu4bypGTsjxanaEyq85JvEoqDBJaxp4CjDg4cPNDvp",
  "key15": "5zgT7e2ao4nRJcVkU3Xy9FDmY4azDuXapCFDqLL8oUxKqYboGGLMyF5NDjH9CB7e4D7n4ChnnkDKC3EZ9fmooC3b",
  "key16": "zJV4FChc1EYwini2ztd1g5H5GzVbeGaCW2hNqxTmKR2hy911Dg9UeAPvSw5itecrs83mCGhADDaMRmJ3ehszu1Q",
  "key17": "5Dja8x13Dr9Gr9nYDF1pYihvNreN8EhniQA3PpLEETimuiGWvHkX1u9i7GP9m9LyZqKFiV2rPCGEWLAi2N8bNrr6",
  "key18": "5BWVzXm2gupKuB7j2bup1hB4KaSPFr8ZPBBRqdNWzGHXDVoKnwTtAuHcnw7eCXARpMRKb25e5U4PEetMpnHTtJT9",
  "key19": "5su7Bg2eQ9togF7MJaqrVY15rW9Lhye1jQSNUDZmRGB6Wjuo4N9KfYqD7jWNLsFW1S4ADKaCaDQX2gv74Jeg9quP",
  "key20": "4tCZsjXf7C2QPCZjKe2Yik38q2MbD1531rZcbKxDGy23xHsP1SPzuyV3947MTPZrmbxuYoqRFVpkRzeHdkoVVAX8",
  "key21": "5Z4zHdVTG5LYdMnRPq2C4LdojFgiPdK16yE4aou8QGkCJMFRjdzg4ua95gP8NWo48JecuiDBqC1zLnMqqK3uxcuh",
  "key22": "HcQWxusZJLDXtFm3Z8HAgMWcRdTEgAPm59qw8bFqvsoUP8dfRUtoGqkMpAVuWC1Xn4XCeb5Lj2TSzDY3e6Xt9gV",
  "key23": "2h2CXtPx3HegVrSuTrzGv94UhVjejSNfVqVPAQBS1C46NaUPErW4i2XqEJJpmx5fQk51cJoZE5roAFcXKySANTyp",
  "key24": "Ra9YBmqTpLLoUDeBhYrFjZYpTxgVtP65xqyf9sKsmrSfSqn9T21YGGdALKf5H4C1GELsVcYNHcDK3ML4M8Rqreg",
  "key25": "558BFi7KjkRNT7dTc8WDYKtL7VmbqNXtTxMCAYFf9nxFy8iTZYv7BSYtxNauACYBJGA9WdVb9fCbTDhPXZ5ym8Aa",
  "key26": "4vWBdfi2ASdc1u85sQq62UKKjLQVhKhp98oV8VxwjZ2njpvg5YyWJ79SYeyAEcCo8a4ixcuMoD5bx5Q1Ub5FecJ9",
  "key27": "2KCoQzaXvCuFyzjhog4uRUhQiMiavcLR7PRkmKP5hrzq2CtgP8D8aFqpJ2qd8yLcfn1vcCbmrPWre7ubg1iYkGfb",
  "key28": "57s2UEybBPdkDEY2hsJcWeyPkspYD51zkN963x7LUFXrCF9tHWseTpVMNeNpwkfP7Uy4FoaDLg4ob2TpAXekeEMU",
  "key29": "277fh64jEaof4VGbn692i7cCeX4Jnm1QL27rnNegUoGAyHXCko1JuF2Qfjmp8R3iHZoy4V5jCdr9dhrxBgoYFSHJ"
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
