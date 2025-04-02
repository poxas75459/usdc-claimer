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
    "58bBupDNCMxk2T5rrWh2J1BS52f78C4YjcAS1qevYgYQoo98Rr6sYRVBAuZmfFeERT6BerJ9zvtqsH4DuX8SCVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iPHbNECQfEQrqd8uk7ss2YRp573X4ZU7kW6oSYXyxsTUJAvWuWTAikBqfeNo4oDHZh3fxCrmi7dLwYHQmDQHEu8",
  "key1": "wF83yKy7s3nuH1cK8EGKVECdXz16geVd9yywXkfjdTEGnaLvNrtWMANnoQ97Ct1x7oMekQmNnXgYwNjGTNzy9yR",
  "key2": "qfeicTQzFZZhs5N4zT8oehCDxDDhgDSK1e5GSG3WhtH7yhcxVd6QV9Fyq9WsSYhzNemkfyQCH5jduZJ2KzYK2Cz",
  "key3": "57aGkZz6rfgJCDYECoYcvPdBg8fSckj58aJUDgzAZzeejq7M8WckfNQ3MFrWy1sjpn3VEzaFnM6FFE8SSDoBBptJ",
  "key4": "21C6iw8fB1yL5CkmSHK9GYusRVW46Lr9AK5NuKjSU1ezaAcHZYE9MNb3Jq2qUkmi3Jkh1JPfFzNk4addEWCGEenJ",
  "key5": "2m6Wum33qspmPkroSY53MmpYMbhcRyQWM9xBVR3FYLHZpKbeSA2UNsQJ3RedaKNcfzFydtsbk6wE5oh35aQfgLRa",
  "key6": "5rSbKiPiPeXGGEhprT3JGAZnwWMb2FKcdgc117XL7HL6iowBhpWvYRhSCyRoLUbQdq61ANmyjQuC87rqwNzi6aK6",
  "key7": "3XbzV467aSrfeXpFHQrgeH89DLKgSabDQKaeiU1Ch5bdcW63PZUQQc5T48dEXUzhE1Uokd6Cxw3z4eEasN6SzzuU",
  "key8": "2SvR6kiDM5fzMhfZYSecRgjbtF8jPbhUwxJHnH9vTUi1NnKmRhBELMLPAKCPdVK88szYLVseDenwmEQACTKNYitG",
  "key9": "477MejEpuHYQdrCXPwoyBNMdhZYuGnGsG3Ed2NRYvjSLfkb1ktxZscqM1zosLTzYNvTPQqC1CKzUmBtgmHuniw8Q",
  "key10": "3AvnWtDTxxbmauzwAFmf95FvyRefZBksDSpH6SwsM4UQ5TcDjso54YCWJGj57WipMzwwqMgivMurk2dJy2vQxc23",
  "key11": "4wqF4gggkAYyUKWMAgLpL9NaiRA87defo51EYpLMGM8fZrckiKSN9cQ5BCA43eLMLLjs84USDGpzjvNpy72PfGVF",
  "key12": "315SoezJ7YH4eo395whZyvsNS4Twk62sit7wC94Vm6Tu7v9A8aZgEz6Tv8TiGfStFYEmR2xy2w6cKKWQpUQZUBhW",
  "key13": "JHJRoDNmzMZsuyZceAKU2RzKqaTCTbGJup4wSTDmhrof8hc7a8sHejiarr6ZT8ZiSJ8hUt2Zo44pnSjH5EdQhw9",
  "key14": "5Hr16AYahz9UhfwiY9FuUqwYXhY3PCnPVWT5Cf65MEv93NzDjk4D3oYcVc3SAXKgLhBmMhySkedetnGN2HusHRPS",
  "key15": "125xfeBNA2fzKw34fYTWGq4gBD17xuagk8vviK8tWaniAJcsAWPuBPpm2sm72AJ71aBaNpK2QeTB48ztjijsgJcJ",
  "key16": "3TnAwyZ8Bbba7KoKjBmGmCfDBiMQTfh3FKCwnuPkw1FH31fwkNtoRcVpVVbKeux7aW9ZfzcgbBzhuBgeoaf3kwtr",
  "key17": "3aa7UyvUXEtdbXSEq7qf3QCAGbGYdwtnU7jBfjquG4W1Lpw58pYDQWS31roDrTbqH2cesgbekCXFgdakiDDqznWR",
  "key18": "56c55FtkqFRwMSH3HBKpkT8HdP5XDKWHKMgA5sHwFPJefXWkejFoGHC2Zu7SQwht8iQsqjcED74hpEtdebeVPB26",
  "key19": "5vfVGpGyeKD3QdRUUE53u7UQU1wxfarbaHSw6nadp4iVna3z6YLAG76E2Pri2seFebftW5HnG9Qt7nhxUFPtifCA",
  "key20": "42H33V7PTnVg3h7wvchy9qpmbttwtynLrozTXPWKueFuwg8KzjfNoTvCjwkVwgYCe83zgPQ9p1f8ccw4KpXYdvZ8",
  "key21": "2vCfy7JG8f3pHvNFtvEadCA4kyJP9T7YhYXwZiRubP7ix5rvxi1PhM4pWjXZjEy5ZwnsTkpdNYe2aPqugbaZw9Eq",
  "key22": "2BYoLNTaCVnUFGNSB4wJJqmvKqJucAPDqkLJTWhJ7zT9TyPxLeshj9GkLMftc3AkydtwBbh4z669Pcq5BZLMXupf",
  "key23": "67UFdPzU6tMS2w9xVx1ZaYDMkqWPBawxapJK9Ki9d48KMoJz11damyeZLZ8y2Fu933VFkPSW37cLz9X8obQ7SLTA",
  "key24": "VvW7PDhs6pfewzoXn3zZ8AWSxKvBed1GBHhexPQT7ms6yxsPgoipACqejDyVgmMBgiefiaJ7w49J9bbHS4BBALp",
  "key25": "hbicT2Jw5LaUFgD7yMVDduCgqGBQAyYzLkAokuHJ9V6pnHipTppSFKnbZPCYr9BbULvEksbCnbbt1vfPGHYB8vH",
  "key26": "1fjCWiSc2j5GDQBywWm7BNFBiwDPRsj3TKovgagAfpXBh3888vQocTreNXkEtRzAejnPGUTZvagDissW1sFStTQ",
  "key27": "2kZhuH38HDKkuGKaKaxnuQqr2kQ2m3WdoKjtsvzACfoFucdo38ExASvuNDJFD5RTahHB1YXfshnc3ZKJHM1iGEGd",
  "key28": "5dYbMreSjyZAgUQNktSj3gca6MamiqmjMSPUisGLAvfAqpXJPwUQ2kVDJKD2cvoaLALp3bWcLrxJ8X41AmPynNQW",
  "key29": "2TeckWRGVqvK2RiNsDUsqsbJvbQVKt6u9nqBsD87gH2KNxooe6aQUuFtq2nmaHgskA82HQ9gRvz2hUWGPCQxHSCX",
  "key30": "ziAGE6tsdhUCHZMLcidSSeX1ohVZb25vf5JgQLecnAtsd9yrjw92DM99fXExbZczJU91fKEBqvjyXpkx5hpppXw",
  "key31": "4sS2zgLxMw5w5YeWv741dqMDzT15nZNvCKEpVQ3zJG3jEqRkioF17i2xNvoxH2QG7KRMHURLxghdtogVgjzeC6ye",
  "key32": "58KJGsukLC8zZpXSxAwRQAca4Kh6pZKTk9VNPLZidHh3JWZizaJYuWyNPiQXd3xdChYFsdVUxH1DRe4AzLLdLNo5",
  "key33": "3UVWDUwSGLhMRWs7ZigqnrvTLWZ4tBtbYCenpUs7BgkunLvT71CESHe91HjjyHu54ZQf4LJaaCBUBg7uZjWcHF6k"
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
