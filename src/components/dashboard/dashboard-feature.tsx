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
    "JEtiYNgESPZfxqWULH9roxjDmoj4eJ8PaVfKxgAmkxDrD8nYW9bZhGNdqUTSPbmuboQHny3oPfybyqVWhHFnoyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UPWoniqpopanL9cLTudqgGRwXDLZMqkxY5u776Mx2bXxjUpECTcph1KD44MDmNttSKwCJTeWoyehsEyYYmpgtgV",
  "key1": "53hi4C9pG4koCGoxdpvJ6AHYf5hLrojLgE34znv4dPe33rfPN3PP3g93n9dQydLmxyACT8imta6tnnpcCfyzYA23",
  "key2": "3PAW2uEuVBQvbz11LGWmVwhxBhYwRLSFfe5ZxQayR8cWNYBCJc8CmNMBYjDt1jkhDFQCuB4yanNtBoX28aPhU5pR",
  "key3": "4oKD4VkT5uuVqUbgTA1ZfS94UpjiAdgSwi6dEgCWFkPN9HFn7dNGqW4jf7LQuxQzg7UnidDL3JnA4KZyeskiXgC",
  "key4": "5xfpk27tarY9xRqMDm3BzpkodFdwHRYuuBtHZ12um7vo1Wv4uU1ddYc1w7UTPRdH27wH83a5Zu8AdG4N2zZQKF6n",
  "key5": "DCLZ1iEg7SEoRr2qvDAyD9xB5Lob2jGi8pT1WxoCnCczhd7AY5ma78fR3mvjYJc2mufZxNLxqfBuWBM12r1GDsm",
  "key6": "3eym7oeUWJz5ySKggnevbYLwnp7Lewnx32qiZVAYoA3GKQPacDqT3qVMieEm6GuhotULsZhRjUfknuaRSe5yGb7N",
  "key7": "47GtoeqFNFkSq4fv35Wu7WQatomP1LiZmhqYSNXvdAhk1uh2JUoeE8hmmLMBJmmFcbCWajTHxS73ExCjs9tJMGjB",
  "key8": "5rTiCxmXivizyFts8K4tTtCgyMnTD6gGaDVVu1dUKgtpBHMaxQtLfLpFPhyZyL7XgZoofsZ98aSgNHhfrbCoJ426",
  "key9": "uXArn84dmM9SBAvFUA1kBArZm7QfcHQ52XGkq6SGmX3SSfPnvQXc5CfX7MBYZNzyGn6bb9oQ15ijuVEHBT1bd3b",
  "key10": "23m8ecit4bYNpo1LcnhAsGPZrRNBPtDYGp7kGQ5qpu1hRmRv82L2gwrnQAr38pvvPrhD49Y5rKnkomAzVZr9bvVE",
  "key11": "4wegLaJbdLHstE25yrQHT3Gyn7X1pEtoRhtGszDG4g71QKg8qNyvWFdvKVca3DpSvqjMDn4oM7CE8ZhcdqD2NRvg",
  "key12": "3FrcXr4RmGrp741otKZoiEStiwhCgdjCKMVZgYzX7vxrxxtGBCJz9Ug1Pu4mnmzi7AbrA3HA25rrS3sQFQK9jRzK",
  "key13": "Et5Uhv3VchfCTucyJ6NgcVVni1Pa1oC2YEAoRc3qqAPsgu32UdgbA4bQ95PXE3CG69nvH6z2meta6XEP8w3yBhR",
  "key14": "65kCUnveXBBzmFnNmFVeyovR2wpehzdWH9dG5XZM7G7RTTrg5Nh7BEecCkiMbsfSn4YwKN1Zt9DRb4JQK8uE2yDg",
  "key15": "49PeuoQfhHog4s2fxzmJ4zqZUB4CZhCwjsrqNDtU1DbNRLtEypMde7anw8bDkdBB9noC9PYQtvd14TUm9fM4LGib",
  "key16": "3HRZWrFYoDvyWy1yaTdXAmqUaKFKZ6f9VCADa1ZukF9kgoC9Qkr3otbL9ioYs5wPkXPm9oS9dgWRHaktcgTUuJTg",
  "key17": "5HGid9ZMefGaHhoPVTasgRwnLrkMMXQ2mvZREvpskXuZe8V1vsswjytDQcQjtkSJkBDQWvNHSqceAy2cxv9cg6ow",
  "key18": "d7uR5yu6pUzE6cRizWobhbRCrnua3e9EpUVf7vnnEP7ewFomVaXec3uy4pn3rhYw8PD7sVDsENyVWts1SmRPZcW",
  "key19": "5ZbVE9JhWtg4RtBLrGFpbEaDdpVphEcsxwrMfCxLfSpRGtGjDfNDNNPexeqdGjCpvJmvVSwyaNtpwnBNVKjZ3X9S",
  "key20": "5VF5bDKHq2qQQvE1UwvYGMw76LBvQQGii4sJhdQrGxGY8Mm52juxGPiiwStVka74QsFK9Lf96b5z7RRNRhNiaHYM",
  "key21": "2pSR5XnaT4BvidhXK85SKDDNVxjUA2UiMPjexvHSQe8EpeWhS9zrWKRqkJerMobc5yMoyciHRewWQfrj5nRknmR2",
  "key22": "58njgpKzHy8d28QaTd9LBTVSNe2C1ej9Yk5qKGVT8zKzKju9op6FkvfZZWiwNxcDMdbVMkR8cp2Qi5PsX7pgEkVM",
  "key23": "2RqaG7e4JtD3bWY67P3kRd2e5XdUzQrCFDmFNAbXaXhsNpVm25De3A5Gr3rVa5UxPAM7Ycktwc5qjCye9HQEuyDF",
  "key24": "Eq1uza5HJPzdeu1KLPSFPymrddozRExQrZSx5RSYZGma17zF4JVEapHBiXvtQrc69sDKZHuRudeAiyTyFvts8vr",
  "key25": "4cAnM68SwrEqLxzjemTr1Q5yuyPjaSYuq9DSB3EcYX4RAW1wPbiUQ9CZ7EynBut1zcfmqV2TDHGyrDJmwedBTmCz",
  "key26": "4AAVY4QVi5JsgFCQfFcQJtKcXXFcPPJFb6UXwbcUiPodrqZ3jFyW6B5BEP1tJxJXDUHbw1nx73SQpfL3rxWRFC5h",
  "key27": "4zX6tLkni98JAkvWFscaCjP7Xnxtw2na7k7RwevTdcjxcDcKWaNdGyvFo9txaC724zCpfwirZ1gVpX8oxoBN1wGd",
  "key28": "2LFezNg54JCPyVhLkFEeRakxWL2iBzViLwhuYsj64zNdZnek2kbcKoJUmaHtVymu4HHKreQZtCMgdTjMNH5GNgbZ"
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
