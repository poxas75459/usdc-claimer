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
    "4imJUFZo671U75YYavypTMyk2mmG1RsLXKr9U79PwJe2mV62KmqeBRk3PoQM1R6jZKXhhX7X8JF4dQUpgVGJrVyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57rRiUVALQjY5HjD3BugAG7fnQ9BEq9iE2v3ZwSkAooAYadJFjY493AZn6gvxm8ytvCDyT3JxEssLCabUYYwJ5rV",
  "key1": "TB1qibpDsbNz1irEwJvixotPfw5wnmNtFoKdgnv7D6jgPekA5WHPVqQEhs8ktP4WYXP99sesY8MMZAUxsCJYbwy",
  "key2": "3Tau1wVgd22Ss2EPeJiBDSEjNd6hfHd1QkyCXhb1QAt9BZ6Yk79muH6bYn3khFXbAJvMiCLYCBvv1SqykEkrmuV9",
  "key3": "2Ksno374K3rgbeaYZbJQAtM7nzLXxQLsrkudwiPAC3KomXnHo8bn1iESsZTobmBp4og2UcJcUX4ieVQ6Ug4cGVaG",
  "key4": "jw2ffrbMogWE7VRXpFumh2u4gC3i6U12nTdFdfohafqtCfstKxHujALrR3ve3RguaiW5uJGUFB5qJogys4nABtR",
  "key5": "5F5ULKNwabqKBZQCL1XR5rQ1vzytkk8grkfonU8d1FY1LxL3vKriTPqdtsLds8XhbGDVSFwrMaKfdumz6QL82wPY",
  "key6": "3j9G2F4kTAHqp7SjwmYyzxG4sxvgj3XYuGawb9hc5F4yBV4MEu551ycJgjxstLxaeBsZZ9EqWqwB7pKDEHoaqW3g",
  "key7": "rwF114Nf3J8cRGfHKJJp6HbUY6VKfbKnGn4Cfnmu49GaBGnfXjxSuezE95pFHYXQmeug4shtKHDN742kaSDHMA4",
  "key8": "548aLau5G7e2D8ceg4dy6dppcXoVK53UAJx59BeyJVttgpRFNy4ytJ3E3M88kRM3EfWYANGeyr1aC9aNsorh56YC",
  "key9": "FLPxzq5SZReeUCrQrbugChCxfjiun6SVWn58Ln6Yy7Qon5MDet8QvLXPYZEEh8n29u44YDdhPp5qUP8uFpE4aUG",
  "key10": "2EvNLqJjVMF42R8qCjNzUXBfxhond292ke1Ucc2FnGTFVxdFT5cHQu4WQ7RV3hFBQ67VUasUHrmZMeqiCPWnxhFJ",
  "key11": "3MJYKjZ9BJyzU231sNNVqYNTXeAKxp6GvhoCf3V42yYu2Vy198buBnL53Q6CKRAxrXeqwwa6NEmwdDsB4SCne2mK",
  "key12": "2Mw48HNUCXatjHdmySycrs1U8yTwePyBmP8iqFkN7wSUkncjWtk1syjd7okxJzaTXQf3vxfxn41grSTmZccA3t2",
  "key13": "61pkXcB9hxhuEWk6Y4YB8L6GaHevxQqVBKBUqBL6DzZMHBHbvxA3swgU2tezweL3p4RquB8z7raFzMuVQyFqKZVM",
  "key14": "4g11f2YtNc5yWxbD446qaYB3YMpUTdm6usyVyB5mJ93DcpSwghR1D4jyufGq9H7hA8zEqjvL5XqotatHN1S8Hesm",
  "key15": "3SpJDKCBDfa1X5QwmVgsrS1aSSwX4SQ5paF2R4yVQaNJQyh6cfUUejiAd1ez6X9KB9hfaR2wYPRkSp2okUsH4Jhy",
  "key16": "4BjQnRsh7vwZoCToGgTZCj1ruRCM5QC553uGnB7GDGo8sPq6yqK5m75DeiVkCYnP3fQ55wpgY9rQXpxRbZw6QqEt",
  "key17": "4itwjZdYoWcLqyGz2UL3TwVfDb3bdmmgjxFg6zkPV9jSEPDNWXwJXuU9NdYFwDm1oYCZC2rcaH5oJivoNc35Kthp",
  "key18": "isDEMdBwxvatV8FT3DzMQ4bwhK3MeMKpZYSRV4MfUVeNMhnL9sNPRNJNM7Yfcx33yVZUBQjxQmiHgy8cjbW1SuF",
  "key19": "2SjfzxnKSM7HGbQpK5BvEn8248z1c6SL3vrPx8zZhPbnz7mB1cmyQXeKiTK9Zg9QxZiNBpg6S1zVPkafS6d7CWPv",
  "key20": "VGP39v4sGSFSvg5y2boodcirzMaxuVCKCGpfmdzkPi7dgD7WmxHYzhBVfcuxzYJ1RmTJxoZSD4W3eFzpbXXJjck",
  "key21": "4xYEE4euP4Eo9yvzA8C3eRkfM4jggdVP28c4FD2GeWgnKKA7JsEpcRrxyB6J92eHfACxWVt4VPUV7gY7L9mr4TXB",
  "key22": "xiquSng8MkqbzWuR79RXjEyifFsfLQb44ax1r5dzMbY8rvkmXgW3wLETFQSVftnh9aZPr9qJiRciGfhRB9w1GJ4",
  "key23": "53TCHGLNmb8MuJHB84fzZccWKqywpcLBxP13eWtMU2qAWQoRAhS78fdRs3tiPrahdasJG1EeCe97cHVXe26C3o3d",
  "key24": "2HPSK4EeaRToGNTrHszx2dbKKQ8CRCfSgMHjY56TWH2d7s3mSquvwXiEn9aJVZRjaNqHHUpGnmDx8ya5aY6LeNat",
  "key25": "647QaKca5vyYat39zmyyKrh6yEnAzC6oQraVNH9FMNg3uujWayLPeTid5D4D7CZYmzpFDUhAiBESWCSdxSCfinFa",
  "key26": "33147NNitS8xudfsuvzytmRipJtn3kWo3Lzmn7BDxCWe9o1LnAtp2MQcozhj3caQrMWqGVRMfCBsui3Z5brkQz8f",
  "key27": "52PXe8ePW29CpbvytKfh42gkzzGN4oL93QaZnHZCi9VjkeMoPGB2a5UZhqHsbXpFRdqeTgRJvwfQs2qzdKvkQRho",
  "key28": "5K4Z1K2MsD9Fd9yVseCV5K4o2KwHHzGDfE38gUNN4rtwL9mVjYVy1hhbnsHDQ9waBkATdqMDqmg2p9Cho2gQ3RQj",
  "key29": "4jDoeZxJKSjPvnvW9aWDNuj9brK9uyuCXQfrfqnFumNo3WQ9MPx57hWFcojQmY6ZSjVBWBj56qXaaj6U4VjkaRhw",
  "key30": "j7gp7NBqJqFEYWaAGBmgDVR7sfbtfNTbJq5TkFtBmaGp8MxDK3HBHmDPGfWgAnpKy4cSRzYQ1p8ctsABNtRWC4D",
  "key31": "2S3P5Qw5nT7wtaVAx5wm6F3Q1vj4A5ikQcf9pimW2PaVbX9YtWurT91iuEzR5NDeB3EoSy8whGRRonRXqdLGXvZm",
  "key32": "5FQ2mfWia9kbhKiDni3T6KWvatzMNBeDFxy6gkiiMTQN1wWDDeYUC5BuRqTreepvYLvtWvMuMzifuxovqJVomacD",
  "key33": "5fuDK6baD1ishKb3DdYCbdo4cgfwJqS39gqVmvtA76tazmpzA3DQ7wd7vYyfQWA3UydpwveHb3u21TBcpKHhiMQE",
  "key34": "L68tiFnKdc1NMQJxtmzNsy2DBvMuJDe4CNLo6pWEEv869TX6ZW5itgVoz3RrgXvhroWc3Q7Sq4mHsLUDUVCby3R",
  "key35": "327EZBjZS2rPir52W4EXn5vAMC9XaUEe32WZQzef6e9rrfeBHyo5aWAujqJjhh5myq2t8CSF1xjcC4J9v5BswzeA",
  "key36": "ierjmg984E6sZgqeYP9M3MUkdKa4sw412uKLjn31REqKQLkqp4ka62SdzF6K9wig7f1iNXv8mNUXQYvccqfH3Gu",
  "key37": "35upwjkXy5yLhFzppsLe9GW8WtnQU27ah9BVqUJ3PvjA8tzTmC6YBC8eKwKXyzDM38ickLaqwiSBGHFfcj8pRtxE",
  "key38": "2VG4pVr9R1K6HWMPXwaFZprG7nB5zS2iPT9gY4ZyzjtnKPUpokZJyA9GB9PhatYgrHoG5FRY5EWWARUPSoS7GzWh",
  "key39": "2LAEKMSkTGXNHVbL7VvddK5hdk4dUhwyf7pJxPZ2dwN82SHwq8PybF3df58ZJaf65X93Ce6utWgQNb9qCrSTzsBb",
  "key40": "3Bx6EZYZYJ2fFKPDFZhvZvnVeHFNMP4cSvCRtiFUXyEVg7xQRFna4U7ph3C2xaZAtAuyrRBw7xvMGR76Qt2TtsXA",
  "key41": "42FeBKEQbF1HsFWEtwemMS9BwtRnE5nErm3zFT5H4BHU2jmHFUDp9UZbFDz8CEzZfJTxaE8jdWLLqP4xVVGxXwNM",
  "key42": "dxFoPPYhx5uSR9MENjHwfXZtFwPCs67biiDoJGRZ87Kh7gDAvHRVjeujdNANWqXYkA7BmfVnSqL8UgMWQFYRSLT",
  "key43": "Zz9Zv2DxVf3LT8i6ab6fJrUSDr41DVKLc7vrkjKjzhpTBDqvg6vKKT9S5wMDAP2AD1w8Ejup7P1WNgWrGHXkXmq",
  "key44": "3zzuENdF5r3QVTy3tJjvE3bJzok5SiJFnsc4DzcUxW3SHp5QgcPENDrqqAGLuXG9pYsiwhUrozaZxQcbsWG9Tr35",
  "key45": "F3txJ4KzsEwj63QtSAVsu1rpywwQNHnDjiGmagtkwrfoicdot3UfHFxHriE3syLR9MZzgMEhbuqbrJpgCXc3jRa",
  "key46": "5VtsFD5fNPguHprVAw5zTrUP2KdsWXcQtG93xbktXXGpCcxB7xRty7UU2hhKdxHZzScUwqa5mVycmv8mWZNXhSbb",
  "key47": "4mqdew6CpAcBB7xc8Xaswz2Z2qygTstrgexksFGTg5bh1RViUeESqMSHDAEUVyQUXfi2qiKssrMkfPLKu9QtTaj",
  "key48": "3f5TveZUq6vJUvp8CJ586XcYTVGgz1bpb2rhMuhAmhPcuZ4pKVKTqaLEqseejLyJKG8a1WerDXHXUskCNaxKLVtj",
  "key49": "4bCcj9T3Ze4qLuEnRorDyuaxnRKbAuEfpgACkdRcFdhxXgXFwnPW5S1nNgbNDj4y7T3SxLY3xJsJMi8T1KZW7XsP"
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
