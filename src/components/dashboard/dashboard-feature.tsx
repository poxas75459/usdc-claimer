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
    "5ZoStr8u328JnCmFiNvuHfDdrT4LcY2cNWSBYnDJHKYFnZNsxEcTN5e7GzQsKmqefM884xDcNmeDyS29H7TQfwM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ksLKxRpUVLJ7ZSF5A4oNE5HugWan22E8Tga6ymJV4HzNQ1fAvnqTwFsjzmtSigTGf95wYKLMjWhSy27rCyxPj9",
  "key1": "b51mwZ21S4p7dW2ReUgbwJ7GJECmSwaZEfrNeW1yFnT7d4NUDeV26RS9fzMxJi4XkGrUP2kb3sse7sSsjsey1U1",
  "key2": "2ey8YqEriQacaPej3eDcysaErQXT8j761u8FpC17Wo2fxsza9gjb5FhZUsmCLY78e1RL72EJKz43PH9SjjWZyutA",
  "key3": "3Va2SX5hN7jFGapsvWvhK7pB9aw7mtzZs6hXKTUS92rdhMfyd1REY2Lw1VHDQs5YvjzLE4P5ZQuozEQWfx3hYp8x",
  "key4": "52ys14SaSqDVFCq4WysUVB3d15EMCFugJn2XTfEJBrC2T2Dj5jVfM2dnDrTBKsKyW8rP5WzwQF6htgAokfQGUMnd",
  "key5": "qrwLCVmcMhoWYyLFA6zZpqYZK1HkB2zzmwRNVrBnXLf6k7ZFGxMPUBAkCNL6omZ5BD96o4VmWQMLFnQ42XdsszW",
  "key6": "4t3i9JzsNWKrqW3CHkmXSgmXCnTEiJdgY7FNzed8hp9frwJ1utXm6AjMmc1Rhbp6rodjmArm65xqo63Z3XEvj9Y",
  "key7": "2KqxcsLiS6EFiQ1wJrwJw157eaUSf22QFib4FWtGuDy8TZpXP3RkxiJ22gWenF2M4wtuQyLfXPjAsncYzTbPFXDS",
  "key8": "5k8dP8cFfJRW82RVHaBvgAcmkQPyu9tyi3wJHyG3iqQN3LCvJKqCN2VtwkJAjXjvzc23L5qqnU5k4n7GCHrVhdZd",
  "key9": "2RQXgxBX4z649sWoqUya2P3r5g8qXSYbTaGfG8YZAWep9jKGD2YCGGhdY5GnXBATDDgEmKiDYrGs9WzuwFxkZxkU",
  "key10": "Uf1gxqNByzc8a7Qwq7VBfhdMu2Vwtm1Hbp9ThEKsz865vWp37dPjqTwdzckzBRHR4ZckUzGFfrfFKqeq5Nrzjsx",
  "key11": "24ADcj9SKAmnjyQFfbCk8fJ8soN3jXeUVrJrWrkpenMk1uip1W7EBkS91dXsavC2ktQXFZR3TkNR2ADB465JmSQj",
  "key12": "4dtjJF6C2nf8muJYfUM2nJ8aqdiy3yDmrzqcVAiPQDHPoP5y6sNwBbLZMS63qTN4r52gWdCHkDMhvDRK4r5a3yT6",
  "key13": "23kTVjGwLkpYiop674V2EReLnXD3JhwpqYFDMdWtPNiTzrnhoafaysNQ7yML2KcGyd2sEFUzSAJaJ5hRW6cbuE27",
  "key14": "5VCat6BDnwET2UouGEpuP6nbMQx5nN3JT1u6u3HvLGHcZJBo2KKjMCW9hdmy599Evt7fzbcsr8Eeriy8VZ6oh7NS",
  "key15": "2dVxFoyUKd4WbXvnwErpXJCBWZMMFRyPvepngBDDTTtTAujgQ7ABXPJWEd227j9Z2vA57pVBHLxsfbPuuhvDZx65",
  "key16": "3ZgiovMFTYMHU37mNUZpfxixGbaqniH7GusAVhYP8RQjycuD92d8a3GnVpHbK5GgMxDtBCAEQs2RpJrTpijWAf5i",
  "key17": "3uK3SHoUxipRQSSHsGhuSdGnUgbeh7DJFu5g3abfphkj48gpdhL3QChEovGARRk6DYShYyoXLetcdZUC3MaxykCY",
  "key18": "3xuhPvAKga5FiwvV2HM4mo6S6XCpL77W2Bd98zsJBZp7e74UcrZTtSAsinhQFCCeRPjJTV2sj64xVqYTPgk5dQm8",
  "key19": "4AwdamgMzefK9oB4EyDQvnoJ3BicLbvRrJnufghm7VCWjF5Pyjj4TqXDxERruHzDRy3zwygwhsdqxiR122vEnjjg",
  "key20": "62RcvChnqqXh88Z2NPhDedniDc2NZmCQ3vPpYeTHpMLF6JTtN21HS37ipxkE5uJ17akUx6638ZShnox51i28bpox",
  "key21": "4xiqxcUeShgjZ211wNkBbb2X3kLYMGYHjBNUWVbjXPG6vcY8hmhKLxeewTjtVACPf77xxodVZj7H4Vd9H95LjWv",
  "key22": "2inkqQfi1QkZKreuZoUkurZq6mVWxoy8UeLZQcbapFXav6TsQ868DZSMrD57uKZGfaRxbW9HwBJnxNSZDX9pZeDq",
  "key23": "d7tgT5PkohToHjdPgTHUu7PH9MargtHqZyUGGKVVpGF7ZS7VHBsKt1gGB8f8SN2QE3RXQFr5UdM9ETsYsq8LsXa",
  "key24": "5xNu34e1FT5QyqfY6EhEjLPxkfQBYdgGR4JRRBEiKgiPntaEPe1zvwQ71pSSb3UoHeaMEn4zkcghf7A1ZYsFLe6F",
  "key25": "2pubrxsawFbdVvYYdTpFVJMZ7PqRUeA6pNwg1rRqJtB7EnsMhHGGht29GSmRkhuGBFRc2e5PXQfL2cG5x2PqmDKs",
  "key26": "zaRYQwCvyuvw1gUkAwUn6L3tPscAibBg4E7kAmnYoPMq3XJqa9VuEm4MG4EBY686UTn7NMWCXq5qJqdBHLmDrqq",
  "key27": "2Lj8b7aySZXQrNgJVzU8u9psiSt4K8eHi4wyU2Ds8tYT8ywboms3LQECpFnsEepJ9dR8EJxu8srdD6MQg32gYpJF",
  "key28": "2t2NnydrT3VFoKZB27wFBZphNshkybKipBLfQnjw1dcqmtmZP7GCQyCn91ykSrpwW2C32gRtcPbNV27qVyofAMAc",
  "key29": "5gV5YgX2qsD6yt4RWZ5gQj4njcChDz42m1JGFgtZZjVfAHffwsrN7Z4hR1qMZ6twTvoYASfgg37KuijEBdhzECtK",
  "key30": "3TahXTW4CdjXWUujMjzugTC33EsGnU6bHZjt4LAcB3TxWDVYdQ1Xt3XwMLB8Yqz3enoRT2vVdHJ23AAvbWwGwJ4z",
  "key31": "3jNSTAgXLfUHPwn1obihecVjQS1jxtXMfaL5NpVrzR6GvhYDjwYYnDaXYgQzp85U8ncXB1ejhBGjRYuDZSvuuWUG",
  "key32": "3CUDNxyoV32XbitqTjb9wBKWNxVd6TFFAUo2qjppyZwhF1UDh1N7jpAQuQDw91i3e6um8tDjEFaW4NzZYgJicbxs",
  "key33": "5yWASLPRMGn5ZTeeKUNFt2NrbipdRkSGyyFxnaRYAShwZHbqVuYrrRP7yefTw1LaTDaW4AbHsB4Ca8Nk7FE7cife",
  "key34": "4DwtLFrjA3Gs3cX9rux6T2aoDiG8iY9sLJ5z3pJR1Vhp4cNXkoeckb7ZRD6bg3V7xc51QEL7NLyZwy2qim37jcT7",
  "key35": "dp2d6zE4QqRx73RQo72MXZsADhoZCLziTTHfonhwR6bAzkMBySHSxcy4DTyMExpFzMnvu5vSoRrRNXj1cwvRnBE",
  "key36": "2QmuZfywhAkBEdkjV4dw4pBsQWqu57hK97PrgZ9HYNjL3irweNvnA4jJ22TNGVJ7o4Ze3wEocSmmy7iQgntWY13h"
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
