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
    "3XaGJn6UUgzeYuuJX8rgULAPBQpNLY1MWz9ro9vGrUm4fPs7TeioE7fPbsvkXwScm9uK6tEEry1geCQaMcHUoTzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sXFFoRpdN9C6BdS2ZrSqGWX7cC16RuEctJK74aWckFfBrQbwanxUfUu4tmob4esRpd7YURurQGigmGEbHnQzyPe",
  "key1": "5hkHh4UF2PtDvsrKqAQ5imRtWZ3tFThkdikku7cpucg7JpvBAuF4YFUHWZ2fuRwt5pjouvjJsJ5WXgsUwqZcXJQA",
  "key2": "57nrrfQS3LwxgitKRfeoD78ZnP7mh4wN2cqSmHg9PmffKctbpA47wLfNC5Kh5rjRJpWR3iJvymZTKfkYjBxdZH1H",
  "key3": "42oXn6erRBsDJA7SVvDSfjXfyaq789Jnqu2tMVwjfLNmbXnEAsHQY6B6BJiGz97onwXQn6dxv6Cm3M7i5bzxkAog",
  "key4": "zPYGFAEjMbjHpnuu9yNL1PTS3L16N55Gg7c9SkM9Xk8tTwMxJ434h6uV4WtF5rtAtyYMeNwTv9UfVwWjVpswUFg",
  "key5": "NPxc9qzJg58UfgxUr71wVESbWUUgcJ1M98cwewvyfs8n73D8VixAgxsNV21B1LN5pWc3rHz7psiRYMTN1hEm93n",
  "key6": "2NCBiwt9CivSiE1ekfcHyixMVpVHgRt41S76ZvFUKFc5Z5MRsEM7YaEqmsAAySmxxV9ENbVvrom7QCtEjoY6bxmi",
  "key7": "4g2fn7jVTVpD3k2hE9Ci6JCYo2JsqbBZ9MuDRramwGgU1UAvyxcvFkZgTTxPXEqJHnUny24QQxi1RucyuFesKqf4",
  "key8": "5iqM5sJSHjFXr4eq2UHEQGoHdiqqjZckie56iSpUU7JJkSFjfJWN7Eng8UkPTHpXxgLqwdJgKvuzn9ex3LQNqU9i",
  "key9": "3teRqgXmLkGxQBvq2q1PSS4LiK1HKMHTSmjvg2soyknWtwg7nkZN3AU2rNu8dxCcYGLzyikRvdMJhT6x4XD4EMty",
  "key10": "2XBbZCQ1WtVXWDEugy7TmwasCwFoceV5AnQLCt4YEhv1BXWbMz7wAd11X4Ge4D2fVC6MVxbeLPfa8THNwze6ZpZy",
  "key11": "3ii5AC7QBckfDXQUS4AWqy5cVhQiamqdsanYEBGJpAUKcoZYeVHHqBAQEfPQJGZUBhu6266ytQNiP5XY3SyqLqtZ",
  "key12": "2oyWKL86yfgv2F5wGh7a1mpPgSL5VRtBotGEKxaYyw4xM5Z1dUtQ86SNeHgnZezTERJFQT1GQGEQKAUGoTPdQ5n5",
  "key13": "4RCDUiER419f1ykHHpNHkTAcgfe9hf7vfPDfHLbtU6mLDLe84Lwcbz7mwvXwzEA7jxdEcy1Ho1Sh4tXhK1i3Y38w",
  "key14": "CNqJh5FqSyBpXFkJEsRiSXhQoC2GJn6hssSQBQr5QpxZEdwNMcmA5Gdtb2YA5RYeXBQxnH3Nr4SPnkZT68qvVGz",
  "key15": "64f5mnzkwn6ZUWWEnPaicdZKGbzWjNdwwoE5WvLtqEUJvzZSmW2qbndLG2DEGcWDwgWiNEmeSaujffUysoVXVWRf",
  "key16": "3DM7ConSippbf3QpfGv3DuoXe9peZnAz45fXALJhpghcWQxyuzYzTziVVoiWxZ9VBjMHoV9zxR44XXjTaQspzWhV",
  "key17": "4PdtcvhLZfdM7Vjo18fHTzeaKFEG5xiJqUeJj3Eue4poZVozDKM5FUnM9xK5H6icQdPHPaNisg5iiGV1LnQTBPqv",
  "key18": "66gg1J3rmQrtvXxqfX5ib9NcJ3XanQdPe9MafXWSSK9CaQHc6MjhAS87B89GKKUgfrceAAjZ6bKEhP6Pwg7Qsy9Z",
  "key19": "5kWP5foR3MQNdtk3vNyxGCRagt36Xiccq7ETEwhB87P2Zmexye32MdWvZutMVBNyvvWDQBmd5kP9rpWfK4LpRvb1",
  "key20": "3qvwrwkUXnHsQxAk1AnXHsamsd5vrWKMNXgaFNnfk3sbVMvTJD9U2mtZFarLEb6L9Uk61AwcZNVdmnAtTeoExoGY",
  "key21": "2F6xtNuCVVv1g5tarpYsX1JyNhcVzd1c5vYMBwJ2QPHMscXn7xaLakR7BZ7Kr96kKpzeSSnK34KtgNnHBoTRdHfg",
  "key22": "5CznEYGuNnfPQQHjqLrdcfQmiL7uDu9PFhgdxCT2WdZC3urS733rVXSEkmFG3y5oAiZ4wAg9LP1hJnMrZ5w8JVz8",
  "key23": "ZSRpd2C2W3tPSbZZZDfr7rjKvVDAN2dLJ7XDLxgra5SAgD3eDgLtxB7hzxQGKwJSHVNLJrK1tNyiDHgNSyX1Uas",
  "key24": "2fXCMAPLPrhsmLsytxzQ6XdiyHHGoqYxF4Dro5PXNLHFwjaYyBfU55HLrM9w3VvJpUZXcnxKPZft8vCBsbd9bBBT",
  "key25": "62kG28FodcsAXSea4F8NzsE4XPjctbTsP6sJJseacCaePLc5PQSybAn2SrqeixJLBnUWtH8jVv3hK9c7bVmUt9Mw",
  "key26": "2TUpQqsDZ5XJKzcAc2j2fHqxJKx75PSM59wjmrmJmixi88LSzcj1jQpSxxYQtpArNFC5SSo28GjRohWjPyNAGKPm",
  "key27": "2SBRzxfkXRpNyrQBbGGsndW3veU7bjQVVzxGgqQfWUpLWtdJANPBBRBTymPnxVuz5rGV3HuaB99v3TYWTQTqDmGr"
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
