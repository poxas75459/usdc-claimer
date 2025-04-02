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
    "zvYyZi7JtA2SHNLGrUr5g3ndf5G5k5wYsZ8v69fvb2xeDmYw9E4VEWp2t2jAJQSUjo2TNSE5px82MpwHm83cmRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yBrKCBpwexUYABfs6zjot2duof5UoyMkFcTFjFj3vaG5a3omduEQN5kiVg8VFABqih7Mv1DeWdyqGFif4Veeb48",
  "key1": "43sdF1yngtPeVHn7NvCAcxc51jPZSKXqUg3ty8yiRGWYdMTKfUuNpGVVWbkQHcexCmdjWQy6aHGWprpgKsnFX7pf",
  "key2": "5EYcGW6um3ggLmApjWGqNsvdKS2gDvkWFEA338ccVnz1mn39QViJPGg5BH5Aq6WgaXy4k47TyCkJwDYChPaUKwUj",
  "key3": "5GBampo5UavX2Ak6abHnLxLLUNYnZnyVYu93ZmqZ7H6afiQfzARxJ43qniTJ39m51wmRu29VNzfv83QAbb5LmVZ4",
  "key4": "2Yuow46g8KyqNmTETmbhnx1NLsekNCia3ayRCWoXg6gccLC4KwHQPK9UJc8kSNM2z9WB5qzAqnSjp52XWoZmAQrU",
  "key5": "5j1Y977WnJqnvwqNQ31EBgbYehSzjpBK7rZQfs4SNQ9nrp8EmgRiXpqX77iBPy24YiKUzcG3v1KSkEnLtKWFE5aj",
  "key6": "5NV1gWNpNhUeui8wZZD56eT45kijhMaGx5Pzo7uw2SqD9yvJEpuZq3BhzTAnBF6jvR59Ju4oeSxoDdhXVHRyTddV",
  "key7": "a7iQFmT3pdQmVyQuC8eSEdihFcy7z5R1jXQA3gRQRmR9KcxszBJ9kCYKzJQroJgCceDGrxNEPfQEVJFxCtBU7WZ",
  "key8": "3g2tGW4Jfj7vBsiBpQdGHRncujtZ3wnNwt4u8GQ9ayK9GqtMu7w4mu93BtndJLWXikMgyNmihw1mZQJMP5EZohDy",
  "key9": "4wxMvFuApHPmZJNMT79Sq4WhEXRUJSYvbKiY6dRWcGL3gDtyMo3BYajjhLDybvS5F3raD6AEN84FxfrQcQ2FSWsB",
  "key10": "2HajFSBhDZaf8YjB68omXD91BnobV7DASC7sUZDoucyY7cD2sWFg7UGyAkKDsMHDGLBcPTcrxyYYgX3rZksQTrbq",
  "key11": "qyyapHV2vq1CFkxb6Vvh4miLWVF74euKPGQLSYsq2M99sjEdygZjNJuQN2sWAeVFmdt5atHwGuzoxiUHPGdYgm7",
  "key12": "hh5SZiT9wqRB8yn15rDPn9SWbY9GqGeDaaxZ9vN7334DcnMswzygUHoXKPGjYBvuFk4gsvBWZ36dC4oMU6H7rKA",
  "key13": "2tV5NCk8n5dyoe2L32Fbx1PsZdxEcj6JfWzREw7eC4faB6xgi711NbKzSsZATjDoeUD3Ck3ZwTKHycYQTsoo29nN",
  "key14": "3PPGr8TjmqNmqowVbTkTPYVfCTBhxFTRvXyGkhysCz3rNtWHdHYecUHP6XG2R8o3XF8b8fjifZdhSSNcmMVxV4Jd",
  "key15": "2Xy5c5EuQGrQsPKkSmhqUFxLNE23i2pYJgm4Lqs7DRaVdqCJTdchcWKbkBRr3u8dB7BTgUfzxWVSUSWPKsheHBSX",
  "key16": "JpnWLjMSJbQVBh1uYPDAQuW1vxuLieS7VYi2czoZ1Mq93fxpBUrn5HBybqXvfScjc4PkBuf429iD2qe2cfbDZfj",
  "key17": "L7mtrHshTWp8amF9kqV67FeCCtexPo3m8s1GmkegYPxSGPAHc5nw1KmTubcKFb5YbQrJr322UVFMazUiKSVPR9S",
  "key18": "3B6YVbjUwuu1u3gDC2Nr3veJ34EaPD3ttDnU5TD1eV6UEqkWZXSsqooad4eE61A3C7jNFYLNJvCsYh27VQH5ho6n",
  "key19": "qDAo9PJKWshGy9f7uMpwxYct8tBhMbi629KJj4aAU7cwjG4cFpxTAFv6r3yV2zexgCYMbLgGfWHf4wANpt9Mvhn",
  "key20": "3Ze7iviBjQwkZ43iGyWC2wFjSzcnE4PKsC1xtxagp6Cw6uxTnjUHuBK9GNnvFAmXQ5mfesH4jedPDGUT88viHkXG",
  "key21": "5149LBq8aCccxUVyupFkgnu7HtfNeXZos2K9t982NnBCWBwqezrZV2LGBk3unrTjvt83U6jVC6MHQaXC5oSs46yi",
  "key22": "5sH12tnsngd1R6d1P9AM9NwJv1ExHoeLwGA9KrBCKHwaqccSNKPBsEURSfRhQReqTeSLeeQxj1qLKVuk6SyNp5sy",
  "key23": "3wSmeLaeXHgsyEmr2Y54HTkJHbXYRbwg2pZGjyYBAwhMokQdRx4zNuAxetisY5wbMtcy7bMHQT75dU7JzfLErS29",
  "key24": "21ESQ3gy9UpFDbcYrzvPU322DMSya8w5jKd6qnN4VfVtzCMnDkEPrVepojxunsZZTiNWBE3wjZ6NMsEf6PsnyzJX",
  "key25": "4riWTyGNNFk3ZxKFEH2u1CfcugtnkFCAVrVPHiLvBf13qqaTz6PmsKw8EgSxpDsg6j6v4yLi4HYoxQDY5JWFFXM",
  "key26": "5zu5mHe9SAM7cyLX6wYTmqrBksiEsM87RncWUKnJqhzdeo9382v1Vos1cHopju4LBy5g6DNNUCChK2gH3mY2SJEE",
  "key27": "2y84CzRx1tQtxyZ3CJVXQaoCbXWsY8ZGygr2L7Z5tgQ4UASLAanow5ETCvkw4uGiiH63ZNRHJ8g9xc8s1q4doRnk",
  "key28": "4ve6dxTknkEENteTMMgGziyxzmmgHFMZXu4yxAMV4yB3GN6YmzdEXd2y7ty2woX1NqiEvwanm1pMshjKLQdJ8hjd"
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
