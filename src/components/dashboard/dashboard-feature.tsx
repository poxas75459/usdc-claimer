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
    "2ps7WN5yhszEYrEqGp6EQSf8dnuppjWpjHAwDk6DBEJsxEuhTYi2JH43ghkzSczWRYAudtopF98z7HAxeeyqm3je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66sQG4mvrSsQT8eiJvnY2gLzTK5Kdp4hbzCdACpaBFcZxjzAe5CrhU7Vr9KhumELSU3Xj7Ho1rdSrDci1FSVf9ip",
  "key1": "3dqS7qfj9FLCrbHUwwuvXFDnid75cgxBp3aqNHWMwaUcgvitJCxEPwDrqS7jH7Db1xgdou5qfmVHe3qevFp3i8KK",
  "key2": "4uGm8XQS25fGBpjEHL3N5VK7yBdSCntiwFn2S4Li7FgmJu1YgE9CfQwp5L9bHkzFWzppY8aLdgA8NirXofLKvJ6P",
  "key3": "4hrtawie2qCesm8HGW8mn6TcT1u5CT2Ffimjxwm4eNWCvwaP73gwBHqp7FBAouDRtSc4Q3PobV6ur1EcuAyHpbc4",
  "key4": "5mAfiyrttUvBbAUmNCuJqrKqTavRzDgwwSHRuuMMo1hZnBsWDcWuuD9xfPfgzre17dXz7riLeU9fo1Vsaht7LRn4",
  "key5": "3jYher2xegAFJe5d8TN11Mu7syFQqqu7ZgvyAfNWwbzSsi5zirSvTG76CcspURFkBa5CKs8kD1683c5fHQXR86gY",
  "key6": "4MEGcHFDUBdHVzn5ZDATRvpW1iSqGVUX8CqrTjzBGnn788jTgt4VfXV1UraSVxnLvCep2KeRhgAM8mjUAwNdedh4",
  "key7": "3HBtiwmNNAyjd3f439SV75xdy8eBaUk8gMnNxdeYhpCAc4HtyvTZznmxDdWbT9v2XDkkcZ2esq1erYh66SrZ6rXe",
  "key8": "2rQH7dux2CnJgeHjYZ3YgzFwEPtTxUzh8VowcrPTgcdgBH8WY71LeQc29zmyRwc9cGsvGkCKfgQZAtzYHLe567nW",
  "key9": "8rxeeAp7sK8wZBSMSef5xpMZxwBu8TeLMQFRP2JPp3WX3jGCySB96NbRKbrtqacMUktC18o1KF5PwqstHGpRp1w",
  "key10": "R14rXxZgxLWnPZV6YRWhmTnK3Ead2MCQZ6kGy35VBWhVW2Eu6rB28iuFognjNwCJsrUaqDRHg4vKtMNHFSPuCQ4",
  "key11": "wZ3rjZqFcAAadH1ad6skC46UwYRURZK5itGV9NKXKtXYb42sSmoBVq8KVdA72WYuYshdfLPCgRJhqBAcfKJjkGJ",
  "key12": "2U9QhdY9sk94PokjRcrVQH5ncq49NC4F4P3NHoUvDr8vGNHFi6un9k2yAFXd8S7ZEsFuDaD9BTGosbhMUV6vNeTe",
  "key13": "5ZrYHxqYW3ekSHHQZSxoahSDzcnF8vBdV9Y6aQbj8NQv28YtYruZtaGoLMX39pvErR24YgCavpN1nS3pohZqXphb",
  "key14": "2CFnNq8mXXoxkgwTmYKQyYQUCbS6oC3HtvX2SjxMxPaiP5Aim2s3aMisYwp1a2b6Ptn2ByNLS6sqzqcNntStYKGy",
  "key15": "41gEya6SsMT2pKo3uX4h8KvGfC4iQBUywvJkJeyVWxsdAPLAmDe3QfruAFoGGzitKNuFjtU6LoRLbCjw8M2bqDwT",
  "key16": "54tzp8o5Aa5a5UKGCPSsAniLQGkKAXJvZ8k6M82HW3NymP7159f8QyWizaxyMDgsh36qYoqoCNbYiEasXPZuF3BC",
  "key17": "2ZVcdyjAF5db2c3xTQtmgedYeeEoasHWGoB3SQhMxkCqnn3YcfoSc8sRbUJ8BH8Gh3jeCWwp37MF5FumFUDtVjCx",
  "key18": "5RHingorsokizi64NQeqG3Gk8Pp9m9V6CDKudwmqoAvgZWnUW4pcFFtspCDPwDG7j8Z2JsfMu7ro4afwau6AwyY9",
  "key19": "2413XiFZr2iT8kutySkz1jAJnGfu5tkG8sm7XSUs3674kcL8WC97zeMirjw8YJu72Rvt1PJDWM6Z7j4rt77zfBUT",
  "key20": "3VXWDaRt1CJfHgknT6uSjbifH2fmF3z4EP8dfLh12muKiPunGzTs6Hoh9A7snQxQwH3oBFtVLbKeEsSPvuYJfbQg",
  "key21": "2Wm57B36a5uzzzEGah6VCj4vMjSTfTnJd64iq8FweAYUrpK6LvAmYt26nyyjBzy5MkGSqUY7PcJox1bmZp9bbkoh",
  "key22": "A8YBXc4caJuZyb68wLwZGgWm1pS52iVqR8NqHnB148A9uMapRHtPN2LkQTtYCEjX4EDMdmw5atuYzQnL59gt6Uw",
  "key23": "4p8jJHGNgaoDNrhuVkfq1U33ForNfHGEpLVMPJqPSEF49gYMAtPn1nWc8fYpa1afvTGTbBnLKGsVMWJDZEYnwsNk",
  "key24": "23Cyxn9nRgA1VPhtrJKxe7L1mBHK4GKnZNNxs6tLsUTxuVPwe2DU6NgxD6dc92nVwGxFbDyzuGEsRbEh2d9m1x2a",
  "key25": "2CsrXr9hBnSpoePr1R8RPFtKsjENZCmaya8g5qTbYqUwLTs4cgU3ht4FPCkQ8NA3W3PvEapH2z2Yw8hfi3nYDQzp",
  "key26": "23zCBuSosFHB4yQ6H5HayyuT7ExtVv5oD6jiaBTgATbYgcF776RodMr418AksENf78J4DRtV3trpZp48Xh78AU8s",
  "key27": "4MeLW38fjKEjtqGP41DWX6U3pLSwaCc4QVywR5TKnfLGgw1w5cNTwLgWepYiLF7r95rTqvFwY3yfmirFEbjBmK1R",
  "key28": "MfbwkhgNLSirFv8q9tbwMYzQwG5ieRd1T3bEm2i6iSYUif81nAV8zdLMhnxKAnofoxnQ1AVmSeS3bBjJ954fhz8",
  "key29": "KaZdUwmei7mWmXsLkzAn3Bfn3YJqNQb4UNxnrPYqddDfMzph8vcT7sDQqD94uwC2UeC99UKAn9rmvW1DgdW8FnT"
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
