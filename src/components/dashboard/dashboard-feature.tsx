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
    "4t8A174CTtHmYaLGgdCVHWLHGivoPSbs366UPLQbXKarRm1CcYuZfDkSctR7BJaduzPMBqniwS316SkoDm12esYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wjT96gQ6qhvofYYKisDB2Jg4Rjqukmekh7k6xwt2o677b2nVL9PwBnCt9yuryTiZWhSadGFcEBwEMjhjaRC8Nv1",
  "key1": "2ZvLn9UDBenEn7B2ywFxcx8JWEWfhUvsunwkQwEeoabK1g3fPVixYZFkjuyj4zWR4p3cjqbLWabBdBRy9AQEuPGT",
  "key2": "36hnr3FLWRFCKJZrtJpgfqZaFMSBzWzBNw6pYBMVUCUdh3N93ZQ7xiVWsoJqnF6fFdssw7yGRCLk4DgprBMcDJDt",
  "key3": "42gfYpjfinT4QTbBCSfeva3bDdrUgW4vSoJspbMTJoR1jvN1Wd7FQVJSUxanRibEVYfZFGifgjF2n3gedru5WCyF",
  "key4": "21XkyPvX8DJkMQnRbziuRH9H8gH6PcSjg8zVENTBnNQz2Gt28CeNoeRiEZDBiJxBEwzbKr1pnbXFrTGjTGkQREyB",
  "key5": "41SjcsG9C5i8uEDasCSLWkWjZa2ZQjq9yQKLoKZxfnxYwcEMFSNAzbyGqupvCBsq6vmDov8zRLKNSvuoi6p4Lb3u",
  "key6": "4wbGBhdudbixtAhYbJ3VUvgGzNt14C6yWN4rTg3LPuoYcc1XoErATTia1zgyh5mTGRvHYVRfnFvMUBF8xhHfa3aU",
  "key7": "44soyxVhZZz9S1wU8ZY85TwSiBdnPTeoSCmQn47wT1dBPGowCDdpK4Zj3Uf2g6RcGEHay3pBnRB4zQ7Ys7tPa2XV",
  "key8": "4hBDC4vzapMZFaAwSi5WzegNf5hWZEcnMvPVT1n9CwXimx28gXafa62MTZbPu4X7o5ZMR12gw5xqkGeC7znFCWfH",
  "key9": "52BSH7Z5EQTpssT7J9HZYSMNex86MUHJPTptWRUaHnobopthAmQccpCiuVxDN9y6VhKe8eFRuBaMfrAFBUHzL4m6",
  "key10": "3mheJjGbYpk5QsRMgz4gwCcqFsFzEGfQ2ngWpB2jAYvx6rs3JecqxWQthWmUtRduaCgnMvP2anoMccuy81AoDTbk",
  "key11": "4MG1H4kujgBAAT773MHQL8XGVuvaGhVScDEMM5pdvgmzo8xdevAmEzBAt1zw5hb8TB4TLStCLX7opMr11fYR5tpk",
  "key12": "49QwtWaZr9E3u7UFCLvKXNtkF469bKoqzSAAWADrQqNqhJEQLH6iNHW3T4dj66XqtPsT5YRhr479ebfi24sJepor",
  "key13": "56jqrmsjCkHAd8NbWithD8qQrPvprDKgbKRCdbzyDKUdqndRwtjEkVWSVCmd38oqQWpVi3RivRFZcxBpNiAuJ1xd",
  "key14": "5CcxdbbJBfYyWtSQGTTsy5WVwrDhppZSqJ5LtqbY5NMfKChW23c9rXzqiEEyg66PTmUQLZgU9gQ1bNeQr3kEQXnL",
  "key15": "2RsEaHX4h68seA9L7vkzWw8sfFTSjN4zDVntqWQpsoAozdJEgQS4VJeL8VYZozwfKfNchDiWuTcXasg1oawyWhxo",
  "key16": "49AsnkSwWRMmGGV574ypbuxY8rjWmY5CsNMreqqkMQ4e9uHBtkzmYqZPEew5PZEkJKcJjpVsqTNNahW2o75TwGJA",
  "key17": "CvpXkpHcJKotw52ggnmX6xLB9wGZZj9DRdzRDkYkx3o1Gdjy7h9AN3ttgMyV738rvCX5uKqqTtWVZm2wS4kCFGh",
  "key18": "3CD3unpepheskbNUsGVV2YYEHqwyffM2Cp1ZT3sHtD3ad31ANHo44EPK4EYuJEhgdFHc2HMDHpewkBKqqgC65zJ9",
  "key19": "24pRet2hBiDpLrypGR1tNYZB3jUjX7Bw31HTfQMhvdeHz5ijqEwo7b2zqov2A6uBoqwT2dgmtGkNLXrNwuv65fYb",
  "key20": "5WZhBpCcDXpx1mVY5oeo7kdb81HBp4hGEFYBUJ9nBvAP5YFgjybkfiCz2TrKDp181TVDbHgsrpHdBFqW9C9khRSB",
  "key21": "2jdKGmY729ga14Tzezv4KDSXXGz2B3NWMkJumFGyPCc1ooPgN4v6wVmj358CKKAeHYCEkt9qb7rXSS4zVmHaFHoK",
  "key22": "2e8tBE2fsZ62MMwjHia7LQC42yc3Lxmw5HsyC74sA5Nr8pKx65cYjYtHp7M8tXNTQYzXp69mL6wJLRdQ9eAL7xUz",
  "key23": "5ER1yx5KFbNPJhDbiocPn3gPoXDGchrasvwWAqQejrw2iLLTofABwJJLfrwzLHiKmXNzMjGNDjzgcNGfBeHSnHda",
  "key24": "nP2gi2G8k571B152iin17bPFV47oj5p46pGaMTiV7gBo9RL5UTRQvB73RAkh2xX5mrzo1Y6TFSVHX6T24qJnKPZ",
  "key25": "5c53EQZdLi7kjq5qSNVq4KEviJB8kv4xQp9jU2hkG9XTriTT5khuqDkQTs4WVWSxRwNE3K9Lzr1vWKbP1WdEWztJ",
  "key26": "a3toDXYQxLo5P5pHBeA2iP7jd1uCTx6cqUnATfz8Ltw5G3bu9pE5Umxb5apE76FLfUFwvRyP3si2b1N38VX8p29",
  "key27": "2yLhZex7rWhaCW8GcBV5RRdojzo7itekhjwixVpdTkepBYNQgfeM48ePtRpzVZ9n2yyZ8Xj7CKV9DTvrkcASzy7H",
  "key28": "3RmYTuYcoKQFadYLFDboMjQ31Ahx48CEo5r9Y7JStGEFV4A6pPxmNKCGQgNaLeEuMUeu3uWXBRFkPtFfSfPD4Dg",
  "key29": "k5ncWqx1LZw15N5pHoDr3J9oc7P3T1KPXLefqPAuBx2PJ94FNPLAqB8U8cFhTPtWd1GxT2cN1vJu5qkR1BBXjiE",
  "key30": "2HbDrKtbRTFkxsF6M4o1pLxsfFyj9KAx7pc6Sphkp8GusGKPhJTLoZr7apc8itxTPEiA1wKRzYZg3Gt3Dn8ke2EL",
  "key31": "3dW3F1p5oabNfGGDva9fKxJNQDeafGvqTuoCibev53HE8gSgj2fcBJWePy1ycZ1nW4PaXET7sPoJpSrGT3cHSeSm",
  "key32": "Qc4GomfaCqcqY2yGmWirfAvjJ9UtisNCHPvuAxPfazchgH38XFBjwrPgvqeCCJv9Z8bj9BVQZsrjov8P5gt74Jx"
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
