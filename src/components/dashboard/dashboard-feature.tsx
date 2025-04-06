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
    "2wqbNVYrHrHAcxS1NSTbZYMJJRTT4NEnDc3NUdtkjGCS9cCpGTFiXLE3TXigYt7sdSH7kihbs55t5NeoK29pViJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j9r2isLJm9Y7VCJmeRoRQSH7REnzGb5YjTd8nou25V7uVw3BF2NeUrYAr2vRsKfjLi2hhL9NWhDVPEPt719gR99",
  "key1": "4Qc8Ree5QdRS9yEX9PhJ3s1JrijzUR9YAUbxY98R6iLWDiwv5q2nthEaF9ZvtZfCgo8bH58tpPcK6Ncnp1cNXR6V",
  "key2": "3SA5sdp6aqS7LsLS2dNak5ZZhj4bGEdkj7oX8EVedWVzXbFJnCc5FuCfAy4uEECoCVjkV5vk4VuW1e19gJ6HDdMU",
  "key3": "4GmVnKo8Kea9tpMDRmVTQrx5trbJuMN69gjN6zts21Q8Gi4cj7QEhmLQ1yJqLHVcQ3s4cFqDSjuFDJzGEhq8r1cA",
  "key4": "3Eg6R2R197YFWfArzHcE5YWbVHAT6D54CRbkzrF2UEKmxyqpZTtQ4Jozi6CMG6hdB4Tan1tzzNVhGDDB3hATFv1i",
  "key5": "E81qyEjp9Bs5umzk5XQFuovJBYRhiu1f7Rk2s4aPdAPmFfbVUYBCLF6VJjUftegxuJho9mtNCnmmtgewBXnL5fM",
  "key6": "4WUhW7jJGhG2ED3C3tJEYXS1Z1jzqCCCmebuv8JNd11sHwCjLFWpinKjrG24DtCaxG99wsw85QKQbvU9MupUkdiS",
  "key7": "yEjRda7bzhGB8cFiH3ZLgBMRq2ovzMhfUGX7S6vTkGnGucSg9Qbp7c5UZSvxGAkb2SXvK5xPsrof17RemcXP9xE",
  "key8": "51gRSWaz762PjQDdnCa1MycVMjMzNCF1yVjB5TGNeLgJnviTBTtoWfxU7gXgSQd1zDjoMdqHMjtzwUzmh5eX6Hdr",
  "key9": "49QF5EdypnNeQu4YW5sTpEoEZPhAKem73RQpz6ivJC3g47vDP3tFFv893h6G6Yx6maAcKKX2SGiUJHGwDzM9evr6",
  "key10": "2NaWELJ35Xb12Eejywy3TfP52A4UQsHJnshysVGeAbtKyMvwEVVmaK4U7z7D3NtvG3abH8DnZhnLL7yWmUQjNVJd",
  "key11": "58iwMPEYSBxmpPPg8Vmetrd1hCiffhhW79e8hyD6K27ZJxPV56on8BsbDNDEpbWjN1hCEumxpJHcfWa6VZ7wSUoh",
  "key12": "4QmtxL3WRLot7JLjqRv4otYCFrbV8Sc62GoSEH3Y9MJKJeBVfKVswshpXK6RSv2Xx3f4vD7mRgMVaEJ22S5kUFKp",
  "key13": "2RsE3FEsCdueoiNNark76v4PFUJVeqpW6DvMQbkX6ayrDTgPa5JoVDUxo38h1zxk2Di3K6RStXmXnqcj8U4B3Hgy",
  "key14": "9KYZCTbC8c4X5gU4eVW7z3e8pHu6qL8gDRLjkGRU1naxvqaB55gZWXqhV7mt6LgKcFDyGJMLfopneM4rMqfyYrD",
  "key15": "2qJVTQ5iwXr5mGZUnWtYxsiPvU2MzqXs4w1Drfa4HmSdHL24j7iuwx4gBiyphdnC4wtkK7XMbCUPcw8JQcgZUvsU",
  "key16": "3b2r6JJyPm6P5sUMuyU4NCtT1EjPBYWfkejBhoS6ZgsMvoMJWZ9z9Jgf7iuyAcbVRTZhjoydocBncV1nqKKF3swr",
  "key17": "5F5Tb7shD7BQQdJjnt6qpRJf1Qn841PVhB4TKP8abv7muACVyvkEKmxa4P5ts4GoN9Nm88yCk2wroqwZj2mQedeB",
  "key18": "iC3bbLVfSQHmCQkWujLMBdaKcMLDhihHLPwcM9ZYhyhVdptHhyYuxBGKuemSSJ8vKBf5MTkUYPAZb1x8ggdQBxo",
  "key19": "2eAqRvMersHcgn7H5PMwSjk54TDED7cBuEwxtfzTCG3LCLupXVxrAVTCcqNmkwPSmNPCKDvins7ARs7U2P56USix",
  "key20": "5kwGFXhCJ73abeHenJ1esMXegtTbfWnBF4UCB79j9FHwgs31mU2yEE3rshvCyzKsj6P29q4eYKeHoK5apr6PB9HA",
  "key21": "4uwmYgViXMtJDCrERV7DuPDXTC1CdMkSeStMHGrjaWfnBpEdKLa7t89kQBm9m4vcZ3H3mJDk66i63LEKd2T7TJMT",
  "key22": "2j1wmV48WWE7Ge54nguCgjdEPTsQbWj9E9ybeLCSZS9RWV7eWgQA41mANbvPjzY1fWTZcs1bTtSSnEiMfzcNNwvM",
  "key23": "3YGa4518WbqEACXENWeMVDbintvcNfCyvWsXkanJsQh8pXdHNFmaprGupW9Bvits8K5ZcptbYmojgg8vQhoVEDUq",
  "key24": "2Am1Xv26w2FzuEkjLEHSBY4KbWccxiCyJzv89G1d637GY8SV3f1tus3m2LiebNaF9hNmunBhzzMzkxndBz4u8DxE",
  "key25": "2Zh6uGtDztNk17gKgq6uJHEsQxRbwFexbiQ5PKYG4nohYm27JKhL1VoADhekvRT8FvqcvWhLDg8wvVjfn6FbtBbA",
  "key26": "54eyayHTZBki6B4kmZBDya57o9zMhPS3UL5p2gGQYkn6AwQTHGoFxEnjx7jZ13nVCUwj3Fd8BxKJNER4zxYWtdRs",
  "key27": "4VSCiCf3o1XHgiVcrya62SFqcjX7fhg5JKinBhannvRs71rQVsqx3z6PwEUGxYZpr2FyTd7Gz388V9C35jvWsGCE",
  "key28": "56f4bS25VpTFrhgWo7D6cTwYd7aUZAsrupK7aAEFZMmPEwfRgYXedrDsCevRmaoprJ5k8BCsMMcS3b1p5x8VCcyG",
  "key29": "2d5n3z9nDG7jue3LXAy5utkgqHXfpX31qiu7CytPz8xh9AdQ27yyj2RRQmVcyqKddXbNF4DwSjctxGoYfw2LXRYj",
  "key30": "4Bh9naewFXgXWupA6oJGnWjaqakYQRtpxNoA9MfPDD61PD1LNvtipq6yoob15VuLEufZMRpBwnjLwuAHSH35z6Dm",
  "key31": "3bG4a2Ur3nPbQqs61HrF1AsET3NZK9gB5jVy4RxqDGP174DekR3AyaCWYkRKoqVX91DQ9L5HxzC6KAjS5Bj9J89c",
  "key32": "5gVDriDa4DujGLZZv3fZDvU1AB6D9bn5gQDw2h9m5yQEAJRPHB9gphQu28mmSG2s1R2mRv9Agb6m7kzyvukPF94r",
  "key33": "5EdW3f9NBmNvUi96Rh967T7RjXJvFjLaBigUoea4ek398CA2ejh4p56LCfcBR51HDfxmS4gKrMUZpyfNTprXWe6z"
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
