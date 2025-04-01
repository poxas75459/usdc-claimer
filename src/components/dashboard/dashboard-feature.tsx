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
    "3QZfRB2xWfBSWgcKE9sik8RfN8wYtn9TU3AVqrpkSiaz5KorgbVuVnbKC4mk2TXTqDtsduUeJQdwyUDmJRM32nYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21GupVz5GavtaC3ERMonuQws2ACcQpGuGJQEnqdczd7u1aFAUpLJFgWkAXkYEjxZkPmG1MpdjUxKmUSqydeYBxS3",
  "key1": "2XmFZsppHFRJB7CDsaCBCa33GY7YdLvaiZK8MQ1HtQFR2crXUgWhRuv9KQX4xQi3gdkgWcFKvB5LAbEhUaSZLvn5",
  "key2": "xnhzS8v9pxdu6G7nBR4xQj7cbNEsxrh7P6AbSmESwXEQk3SuH7jJgT5EEX2tCwFWUVbD79Smw6okwFmYrUBpJKC",
  "key3": "4r1kUXkhiv2RoGS3XiTNZZTrFwJbX1AeJ4GApk7LFQdCs7irYTiS4yWMHmfzsnEoNske5gfLwHjXHFgXU24TwoRb",
  "key4": "3g5a6tT8mTrtUbRzJ2RX3WhmfxnEBDbfUo7qmj3bgn6DMJnNh3vPuRHJPQUjYn9bd3k6cY5X4ruZJL1rNKEFtz32",
  "key5": "n9sZPGVwTiUubFfRHJV5JvfdjmcKqPSFGxdz4rZRtmVaoTZKZpcJzBYuiQLVgiaSoY8HKRWjkdJTqXuXGCzA97z",
  "key6": "3iXqSzz72t2mRa487fpmQr61Vz84Tnxt43jdyxWnbDUKsvANmcJCKQaFNoiNfXbXVg1k6NTJCFbukt4RUNCPNafM",
  "key7": "3skUkPoT2YSyymSXTaKTV2vLiknzJckXb546ZZ2ok6CuMSZwwffeJWsuPEKCwuQXiSG576La1Yw2Ksv6NKimk3qB",
  "key8": "qc7zwMAGSGjmGhiP4F8gWCV3g5U4bvZWUaempmxP51NiVjbEYTZeJgmWvL3wSEwcTGBme6A6p7qJbto8kiNQzhL",
  "key9": "5YcPGqG6dvSVknpKn5gkeXYnD3LoepK6ZrV9aKfnH8Ns5eoZy7zRTnz9sGW7AcupwW2JtKR6xxooY3MCAharYy6s",
  "key10": "2NPJhWtxVnH7x3yZcx3FvHwu1quwA8vG7XAfSC77yxpeLftqtyAtmeEdvQ4L386PMvgamTbjsFzA5S5NiFqVz6kZ",
  "key11": "S76iU2QE7uUFqLVzr71qnAik7JCrD73FRYG9B4twd3kbEmSqCearDv4GLYPZvzwqKuQ74VBrymG6gNoXhk9bhw8",
  "key12": "2tK6iq7ZtB7rHTjMHz14QpivyK317Av83v5N7gzb6fWqkSBbmJwqbkvNyZhihfiAHauvYtGPcNUji6vqhiq5jDwq",
  "key13": "Xor4Xqs53U87gHuKngmS1qdYFJBpmVvPMijekhuR7UiyGaKjoTShrW6MZ62Wa84TQG1Zw4Bri8iyHA4NycmgdaD",
  "key14": "2qMnSCzwn4Zikwviivi2XZFX6cC1gKLVxZffbm1PdDTPtnRsNAfnUV7iD2JXG9siwzMHVwZne5yUzQdnxgqx4NNd",
  "key15": "iZqE1ZcUdE14P2Ujc3o3XpdQ5Vou31pYHj3jh7Ak3wP45Lry96UcFBQ6yjxQ7zfbbyU6VpTkwcHSdV4SktZJ7m6",
  "key16": "3dMwuCwHRo1akJrB7SiFVM2X4g1NNQBgxpdzzrkD8hcWMPi2N1zD9dHkvoJ5GY2e66CupDhXLDdPL8ej9dBv5KQ4",
  "key17": "4Pb8x4nkocyJtxw3KZVe4dLExaLKMAp2StjUh491Q4ffpZDhEWjUBDaVR5RvDcv34TL5PciVjLJpBFtPTvKnXLyB",
  "key18": "3gYeaDGb6GqXPmuwqUuDNh7rAmzak3aWvmdW7JZKWHz3Avs4rLmM4UwMef13iuphYQDA8fRHZy8SgcX15j47Awv8",
  "key19": "ZaJjkVkLtvZFhpuBNkYPrHFHJ3FnYaKzkNiNKcEytEzFPN2fvtXm5bqrteZzjpcZUZEDaCMsnMD7peDWvwnCLhe",
  "key20": "5szZs8mV9WUfWRvtcSXhjBhTq7QzoWnHpTLVpeJxBtZCxTXw7Cqy6AkYnxg7xuw5w57T69bQ9spR7J5Fg25fKA25",
  "key21": "5ra7JLVi1xeo4NTwUkWv23XP3PZvA6Xt782JnpuSNxZyzfLJqqxieATfCemvAQFLCZoxRum1HqMUaCfFwii1EuSD",
  "key22": "2FLwDe79zbTh1qapoL1dr5a3Peo1pcoYfUhtZfrxdxD4SaFGZyg9tKzMpmdQ9De4MzB3nHWdQ5cy3tdfhv6EPeYa",
  "key23": "5TCUwfvLJ7ihgiVJGyXLFiQZMbeHTEuRm9BZoVf2QvnNHfPRUdANeDpkhFVv1zPsDmY9FnvHbiqquZckyUHUJtsM",
  "key24": "3TLhWxh65q1ZLZeBXarW339xiqHVZ5AfHcnMFumiHjevDj8qbA6hE7zxPHJzfqeAEvYdB8c6AFNpoErYSfKNHRCW",
  "key25": "5rwQwJnEXTJXN2tC5Egij4HZCPtmX6UHXas7XNGBy8wFh1PtLhnS1MfpKmBb8vqDjKxZobqE2fLMCM9JVCBME3cD",
  "key26": "5mMkMNTRsDn9igy3EU26S37xhyMgSyiMrekZKUgSwMqFvYS87qPTatiHGzYAnzKmrHccasx4Luy86zxUAp5oifNK",
  "key27": "5MWTnycLbGH6ERLxQhN7Z1zZrvnTzmMYxbuK681Z5ocoKTDaHCbn86PWjCDeAaVAZn7hQQK47mZygMkAUc3kRwqC",
  "key28": "5KtXjeiY9cZN2JNPfJFEKPEmxFPwXm3FZzuSwXzDs1Q6VEwomYu466TLiwQjFdBE7bif75ugnBYoLMptX5YqHuJp",
  "key29": "66jxJoJ7TJ4f1UbFCGqTvLx8JwqyDtjpYgVCt42QToh9USwf9QyuASPprgJ8DHpbvDW5vUFmZhgo231napfAKV3C",
  "key30": "gFyKM4niXveiDCLu36K529j4CU6ZBjvbqbWoxf2GGPbCE2FZ5ZWZSMSaE8hsSvkZ4bKKNt3Cc28wH7ApAr4PKw6",
  "key31": "3TsX7hHCf41k2nohthaPBFq5SS4caqqHDtuPzex88So6ejZRsKWmh1xjbuYiC7aEuGrFhLGTCKjXQ3SsqQuZBUZS",
  "key32": "Liu8cjFhiiBoXTTi3V2SfPGqVW1NKU7Qr9fHDKXutAwaLDYZawQ4TrddGyWQPVxVqzHi7qH9oNqFVZZ6e6NKZsy",
  "key33": "46mLw2CoyGD8gHfWrHTZcjdsoFNBr4sXV2KTJjFnsY8WZNotLQsRxn2DMTwXiZzkdmXPPvu5A1mKaxK7DABTVXBR",
  "key34": "4W4ZdM87vtS2VcPSRfRi5Sqc7joc3Yja7hLrrVN8BBHmqQUe5tzAvipeo3D2sGDEmoCEN6nxWsuyoT1m67gdN1DS",
  "key35": "46FgVTnx2EUjeMRLMyhERCiYAbS8GcNhKTjNUdga3QrsUPqtsHJirowJsXs3rC86LH5RaRVuSZv3p2L81Qjyg3Gw",
  "key36": "1qnYhEPNUSqYPEwXPKJ8oD2g68xidD8CDV9aUpKKCT8Q3yvc3vXvcaeWQWMxvU4AzBHr1TEv4nUf41h2Ky1Dw7V",
  "key37": "2wayyMBNCkHZFDFh8SUwuvojP7NyYqHNnLgCxinRxpUhgmoQM9g2uUJsAqoQnN5jV6cfAmMvg47Acah3Fd5VEUyz",
  "key38": "PAmF5wiXxHTTdab9NsU9mka2PaTh5oCZJzqRcko5kSoavWxCynK2q6n48Ms2cZkvmTdf521uA6w8A8zBp9hcc9x",
  "key39": "hFiWr1Zsto8WdpapX6p7WNangJqvfABr793SVRi6TY8Jim9UiNouMQCPPxcLJNJKwJAAfsrfSbMniYiNs2CLcM3",
  "key40": "4jWzCGkAUK1Q8reDhz8sQmhPwDcsmTP7YJqYeYwU2qFwKNND5MyaYv1Pyk2xWkK1mRU2c15jB9KtiXjVJhSuXdy1"
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
