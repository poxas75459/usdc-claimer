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
    "5BDya3oR6vFfRG63vESXDh4XFcj3xd2EMYjv8s8aftxe7FhzcMEYNXFCgjjJVKf4hVTwetSe5JVL6sJPKR4kFJaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wsXjdq4QheM8V8hZzbsZatdGBkcaQPwjKkoE4WX2o5m68aup7GSFqNYebJbk9HLXj1zc4ASuTt3ANaBdNpVR61G",
  "key1": "2Czn2LX46ofTgYRNsBnZ7jYMN6ejFTxJh8J2bAgwB1xNHt2Gr7DEasxsnjPj3YwjYYH9Yn858Hj42jzKzjcAtkpM",
  "key2": "eWPheTEjyM2vqaLpqexT8ggjzFXsqUsiq4D2mj8X9NjQfrjddzp6SdRGLsdDTnggxptqf7nG6rem8GXEFiVcUdn",
  "key3": "3PmB5qMof9pDfED9UUv8MCjw1QLCvC5GGpU8W88RnMDBxCDNykuwoX83KhdVq2Hwc67qKEytcGoUUogAgb5NXV1S",
  "key4": "2LJQik4hy6Aa15tbPnYaW2SSe2noCgXd944ebm8qjmkCyggyd2evNT8pn6CM8sat8EZdwkH2VKfKwWgGhwkciVdu",
  "key5": "4FrxCeRwqzP7WHQZjEJmWzWHtecLnXaNgeCVco1E7wu7X1Q1cUVmtAHJNzZyHbR6QMVeJ2L7LrbkcW7tFWVH5tKg",
  "key6": "2AoL3sACy8NsypxWqQWciVziKjzX7enj1qwpopQ2LNPrPpEPHaEZUGvSQN1haitsQQjMcyWL9B3NKofazZN4CQ7y",
  "key7": "4HjL9VymmogVcS9oDEeF4rfhiiJoevZX2q18JrvdgwgVBW4ivi4GsBfBsYUATdW9j7F3ntqyBeMKerzxC4y5NTJZ",
  "key8": "5jyj6QdWKjQ1pTLryWuq7KSMa4Lp3pG25h2NGrvjHKj3aeTVfxXays21w42TAGGmAi1NQXZEcuHxu7HBFjqUHaT3",
  "key9": "2octa8bNFkdFkKFnfdZgJiuBXe41dW43NATXMMLyNigUb67cjCZtDC28m2ZJLi8z4Xepr7wWWhUtDoYcThg2CpKA",
  "key10": "5cWAzVTbwBBE2KMih3LtcVs7SbDVWhT3h9DPmm4gf6y5XP9G5KPQZXCy5CubT57w26XpebYEADHXRUynPKnNobf6",
  "key11": "3HRwoeP87fSJDjjsJYpuhkGxtPuzWDLLauMacdZiYafYH7D5DBMwqmFrQcGW3B6drRKN43CDJySP2icSGZgJc6ky",
  "key12": "57AeM7xR5TFdkMwBxvPx9wNYiTgjGxN4fvqvywfE6TN5YfbDnWWdPQCC1p7KESzBQgCQ5sh65yQ95t85kirgM9ar",
  "key13": "yBfBqNsgConBkv6fSUFgtzYqtWnDHr86pGy7wspL5SxxvcGvRcaHLoXCRAhmeLm21hFHQ96wmMjBibK1RB7T1gr",
  "key14": "3qm6M5oYAGPz26pQFvpq3XHcULAwqHgnfTkmZp4rcHwTciZMiCVWWEmpRdvXoiXYBpgvYxNXsMDLLfwCga1iXjrX",
  "key15": "5HemShWPpWQSV7F8fxusrrNv6WWXddHniMpugvFUBMM2wLyfheYQA3PAhXPF2AAYkuZxF7xb9QJXMsxNLbhYnKcf",
  "key16": "43TnqTJANC1Zaxz8okWkNTD4f7Ly4C2sjqrqpzr95u2oukPCsDZpwMR7oomRq2Np1TvKfzkoYpgLhjyQzA5Qikz9",
  "key17": "4bQCm6YTDDYxq77adtQkwzvf6aNUt8msa2vM7VGTqnJs5g1aLYXBTqs1N99DfuqTrdEjTPnrWv647dKA4RUYAbJV",
  "key18": "5jVwiWov3Mg2Vz9WELyseyd9cKBFCjasZ2ro9xTieA96gkadtCfUMSYkqYjF1vNKNPW3Cp9KnHek6kWExmpsidFG",
  "key19": "kb28woKDGPrCfJ2dsAToWrDYBm6vmbT7vksztdCQ6R4c9KGAqDUPRKELUc49rNkdqPFKowSHB5FhX7UK7r7tBM8",
  "key20": "5yhpY4dvsS6sjKNYr3VPNf8FxXGGmmEkGfRUifzoidpVQNZYqhS4tVCbJ1u7uQh6p9XzChsAonFaFTGqdK3AEroY",
  "key21": "35cMuViP9Z6MTK3uftmuAbBFXSV11M62H6bqwwnsYbXeeMddV1i6Vdm1ZgewhwzZr1YMoZvP6V7uoADXm99CvoSU",
  "key22": "L8ZvxdP3BrtfrRaVLGKjaXHRHBuJPcVNopVe4fZXRxJppSbDSjhwM2dgE6DKngiyrA5b2okmhjR7LmygFZ4H9yw",
  "key23": "4mj3HXgq8UgTeCqUuRaqTmFAEeg83C5oV7H7iPXcGfb4X7RgtQjHwWkYiXqQAbQUZjQCHLK5fWpTFC9Fif94Yg9t",
  "key24": "ndbDU9f1dNESd6PrsvxiHudHgS7VZaiKzDeY18A9FMrNM1g2CmAHaHPGmip6RCnHzkGPEwn1YR8hm7jNRUQBfST",
  "key25": "Cbx8rypXtftzV1FF18yD9JjFzAhgwSMN8vFcWrnm14VVz3LZfc7CjwwMzwH3MZHFdrfbGyr6tVWA3YUdyfvZsNQ",
  "key26": "4TbWKVk9JSw73Ns23xaZaVJvndxddQW8MZY3gAZd1HTg5hh9ToeKASbJE7Gx5XZpNxbSdBQ9uBTC6EYF2ZTSZHfb",
  "key27": "4AyS4gzzFBbMdHVv4fRMuSergXSN2G5EQZjxeb9a3n5FFX5te9YZoRUYt7bN6BkEcfo5zQS2gSLSL6xJkGVErEgg",
  "key28": "4oV6zhWfdSoktN43HEM7TtAfm3VYUAG48q6kcWDghH66Ei9XQZeZfHE4P3Yj7xmgWa1zqH7XPEo4rKvSm3aPe9jc",
  "key29": "x2i5NMnYLX512SNgqVbDPXCR5t297f7qYCqJjSdVhkGTbTLyLbi1r8mAB4QSxD6mNUQPbHsauJQBJcbhnteypVV",
  "key30": "5XWRNCDk2cWQ9hhchL8mtdSmL6oS9L1P6iBu4uRX3rUPa4oEmVc6JQWp1fZXB1g9CKydTXiVkjVbz58aHKkZrmj1"
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
