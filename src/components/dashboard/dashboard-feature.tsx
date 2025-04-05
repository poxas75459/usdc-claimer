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
    "5KugeSL2tDWk6MriE3Qiy8Dr9gQA9kyCMg9AyfhDEKR8TDzqakkZPk9f4k9tP4CSYuVYFBcGEmQqwPkuZytDbJjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sAbCiGRJL1XhxCnKg2K2rJna3FdmVDEyEAHjJ3F5gZQWzQto5R4HhxF9qoRY387XCDzCneWJEjSbGxbM2Dpujr7",
  "key1": "2Qb1F1gzXJPwXW6B2fT3zMoeiikQegcKrXo7YewyPqKno2xWpevikbNx3XEUuGiC8Tu3FVMZsFBHn5QVrzZ5x6eU",
  "key2": "3wNbYkhEBW4Q2gpuxi8ZVeRqD8mZGqbrHfzRhsMyorT11JixVYBtaT7aceeT9BQgn1HU4mFdZomaX9Kfg8BLhMk3",
  "key3": "5PgBhLVzFKUV6d7r9KHFwXg339s5w7Z8TKNfE4qs3tAJzvgPuGzya3emAkeCi5fKUzTQXqAnjDoAgsFbLFrn4cqG",
  "key4": "2f1cp3gc449zYFAbqdJKPSfaEvvZG6GXLsJcgq8Nftn3nLEzLFZNM5U5zUo6auNYgEr1KP29Qf8zknakfeWc8k1W",
  "key5": "4ckbHexuvd56g3L6YqFymrM2R1icDJEbS5R6KQHJiLUvXd7HoaqaTkb9TxEJ9QTxKdKt9P5ArsXwtSX36vEbWtGN",
  "key6": "4PDups1KUaaVWufiVg1vigfw4Lic7yaFA9z13e2qq3NaGsygJ6SJ378oQkvfjc2jGDggCZft6CVwQgRnposPQLst",
  "key7": "73TxRk7jWU2hxn4F64z68S4iBEvKYk3mkugJ5Ngyw4teQsgKbXpFs9jSn59HvnvRFNcQpD8gWdWggFqNiD4JAno",
  "key8": "3bRQXYDYaRxjNYp98wwVrHARfyu6wNi2Hw6rCd9yU3KKmnv7Gny7jcmHXDH5jmtNDvCm5hupX1J19FmqwbkFzsrd",
  "key9": "dbZ275CNa8TFpxqSKRF8PgieZC2a5Lbgxg3TknRydA9KMofAShCJ6WJ95zcVq6MXdfCoM1XaWhwCaPdxLLweLMo",
  "key10": "61QMRVsxh3M2RC2izUxSZj9XTNLDjApP2ofiruN64mhfidhHVwVLa3zyUFz19ywX5HvQgdMgrjy9tNcLeqPgn3eu",
  "key11": "qba8fuLNknFTVXkRmpJoNDqZ9t7scvW4rM6iiCgbxkFioRthKQwu6KTeESs3E5Hod9ukuQhb2HdiXy2aSQ5Soee",
  "key12": "2GGcipg8YPqQpXFwXo313gAjoWK1dHPnDTRnYEguTEkn59WCmxW1WsiFrR4yL5RpFfuctGb6A4adkSSKZWGkMfyg",
  "key13": "Z22PGbkxU5DjbjPHd3WJVnqzCoJr2qpejCdFcNnFsmkzwfP4pQ4TG3m2PgTpxU3XVKNc2m45pAoVsDicXXeU1cp",
  "key14": "3gxWRcio5i19WN3VBE46kVbhMmJfZxhGSsTQ6pf3QBrPG5bPsU5dNzRe1uaeB69XKefe3NbDtA5gCDLH7J43MbJm",
  "key15": "vSPby1DX65UDHSqxMUF6tCt9XnQyQRbGBgtktxTFTA7UkPr9MjSqmj3aGJLpqfhV9hvTGYwVYoaLtWktBFfGKwA",
  "key16": "3KoRKy4CPkDHpTo4pn2VNoMDECjZ8twtNGn6iQxRFPsv4wiUvJsov6qZ443jSk784p9EwFg4Ze2awaikbFzLk9J6",
  "key17": "cau4yuEJ5byhUs3DPZycEZHR8npVoh6e7P4sB7UxRosJAsPtj8AbCMGASa5mPgovFfEvgBduQf3ybN9m7AKZ56Z",
  "key18": "Q4gWPzEs53k4EMNjm5nh7xNzkanbZbexudd5skXGLk6kZubHG4QvZqcmq34vSUxSC5Eyzo2QaAcGCgGCNWNCEbu",
  "key19": "23DwxqNHnj8GGN8vStyd4mRP8yJz3nbE9dqUD2cbw7GSasGTHVJaVpnWrXGFDYNLfXPUHEcsojpfTyckrhaEqhen",
  "key20": "E8f44Feois9yGiaZSxCugkbRRa4gycnXueEQDsEA9zXbLrYAASs9d6uTHGZyFuozCsx2c7NUhwKGaJdNGF1hH65",
  "key21": "55ZbTtuUFfQ3T3hWDq44FpyXqskWPaZRF9jaUzvfdD7QgKeHMWb8yH78oq9R27qia7m5WneB6Jctjc9Hoi8RKfjj",
  "key22": "66zoi884J6bFkBANpkZqsDZgnfPGz5udMqhKRbsvJJ4V2difBLvZehwCiU5ox3gVg595JYPFkFNmfWqqa1SXY6wr",
  "key23": "2e32wirNXJn1jrs2DnqqFHwGjmqYzomr5yfdXSwx9JHznzPU49jTaRohTzXTVfLNXNK1ATPQLfXsACbkzrAVeKFy",
  "key24": "4Uc6aK6XG6Q1roF9gkeYbxN4f61miyndhWEKpiv1ZUGhHuTexWxAYRMYFJ6SeKiDPcvjHTtNdR4pxLPBKNz6urXd",
  "key25": "JKxXtazz5a6tvyHyCmKVHVa2R8Udw8uTEQqAxfsnw4Mw2gu7vR1MSi4QK5usCMvFK5L4XytwqQ6hWsd34R5aqTi"
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
