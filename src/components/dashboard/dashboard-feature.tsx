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
    "4u4YiCtoCRZXRLrdpJ9NF2whveBZ4zUmBgRRQoqZCXqMph52kXw1bqe1M4g9CmJrmNyxxUm5TTipiGpYLjKdRRGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iGyfdrwTtqtzkGehPbnGFVeMQRF4t1XfLtty4tZhzMmTitotYTsQVCDXNypxJLTutxJn3JskoR2ryg7dfGCfZ7m",
  "key1": "5JhURg1yKMbsfheiuyPoZhqr8v15deMKFpzwwsWGPMtu4JrebMMzNv5SZRY9dN8nUTpXWJEaSMRv6tBCvEFVMuzX",
  "key2": "5VpFQxEnBFbe78tXFZuZWByF3kjEinAZSvVmbyPh6UEezVLiHpNxpwQofiK2NcttyX6G8GLfiWQuGDNhB7bfq5Ee",
  "key3": "5D1jjRqnbfeQD55k2YTqycwn1idcZDrTMzNkNgB9Bm4nE4xZHZRzGLhrW1zENs4fKKp9jbyBdfuGffzLnAzgKnQV",
  "key4": "27R91NYSHZ4yYn2QhuRoqXa1iFDY75uh44gZo3fgcC2Mhq3d3QHxBhPBcNEXAznxvfqHWWkDqxaawD4UMZGqwmGK",
  "key5": "51wZ2NmZViN3RaGrcLukon1RPgwP6uqVfZp9woeed7swPNmLr8ssPu5qrSqTAypHrdMXpabE2Kp1QhG57SdAkEM1",
  "key6": "aBrmxUzBgTdKyCMovUxDzWX4agLcj6sFr5ro2y5twy73TYdppBrEwehHHkVPhejzzYjbWK1k1V2XVVxA9cey3hh",
  "key7": "3ynHnkf2vxHmbvqWjpVAaPveYztfxCSJHp7vFJMMiU1udsTD2YhcZwc7NXNwPePDMzAuUP5Uhdjuq8mCFsdLYrPT",
  "key8": "5SRn5ksmashqmwwKnvEeRfzhbSPgU4wxbK5aw4ippe4WjemSa8SNDhx32wEvCKPJyJ6EwxgyNQbmqQd8x4TCvmHf",
  "key9": "4gP1R7Cj7hY79oypWC8kje6NDuXYcqniNYxP7rPpCEPPG8RbUYnQnNXiKJoFNwgwi3zyFdn5mCaK1JWSGGqREbHf",
  "key10": "2EDBykam2FvzTix8kvLfNJfJXiPZeZwsQN8b55kbLoxHAGzYwFKoQRq35nzqiAgSX5asoShsNpD9cBy1yAofrP8Y",
  "key11": "2rx8KTFrhEtiUxy9oNvxtgPBTvxEjT4uc4QvgJCmFcDWPzkQSrMHZAA1EyZ5Yc4M2RvFRcC3LNv65WFWQZ2e936a",
  "key12": "2iLePoa9rxkCyg3k7eno51uqCs24NAzTzbhwsH6PLxMdotr17inMz82JAriF999uc7K1BHgyqakEBm6P2eJDMnwf",
  "key13": "8xJA1vPnxaJu3CsXsvvDdcSqwU1W7XtASXAVsKcxjoGo8LBum2qFXBdcYKT9PMUNozYnMQQgNQEYd8HJH4t16wW",
  "key14": "5H8xhCGA7pERwZCUp7LrHe5P2ttjtFc8PEimFBwAwuqe1Zg5WehNmGgCB6p8LZV5jEQh6pj3aMdZs9fPwhw2usrT",
  "key15": "4HFpoiCdQiVFwKzLFTMRW8yub7btYpYfGKqE3kHgbWUn8jeGbKA9wgZMUzDZDE6tbe3Xk66CyAZwLcy1i7hLmFGT",
  "key16": "3Mk1DzeS6UcUQ1cFSTx6Jssgc2xS8WGmw2wQvBS2tsJ4a1vB2U6Serq65s1Htp3r7yxFxdTqZCTSebRWQEPiRuPc",
  "key17": "5jcFvJuAiB2Cv99samWHYQAmV2qMWRbqneWEPDK3HjM5jsYn2rE1XsKqnmaWjmq3o53URdTXqvqJfVZSBhs25gzw",
  "key18": "5NBK1JCwh63Jcw6vb4K17h3Dp4wx9NZwoTmLz77XTdy3rjoniqVK938XDiL4bmU3Vf2pc2sLk7GtzuFyWzKUvZhM",
  "key19": "ZqSTEBC6xRayRMdhJ2FAD47U5bk7mAteMrUYCKPzxsdqdn5ixNHLurJ1SYrsAWwGyn9bDkwjARWvcBi1ck6bVk2",
  "key20": "H8npVXmmPgZPfaYWoYU8WtZejJFLQrMf6qzk6eDGMoos24BX9s29V1SntPgrP5sqSFSLiPETQesxUYXdZ3KS11o",
  "key21": "3odSJDg9wtzQhDpWrtcG1XeTrgeMDhGUWVY2GiyN1KhTEf1T1WULJaRPpwikEvxXKMNFgihxZjFBVNWdbRQ6frEj",
  "key22": "4xkoYc63prvdqCPCzvE6wrHmuhkNcdbSqfNaAmq6e9CwLbv7XndsaUsPxboT2wKtxsLtRD5eQjirkhP4Ko4aehBe",
  "key23": "4UCBfVakXo1tMAaQKYpP8KWVYdyfLYmW1uibNh1L7hxVyJXyA6vc44T5Htpv1Y49bQhJRFsTgruLmnovfhENUWr3",
  "key24": "29oN1U8GrQAm4fA1uGAZxyjtYV5UaH4kYVau4dfVABJUpjwC3mGFBiUK4PyXL9m6MCX6MGxWRKhhu6FVxs3gHB6c",
  "key25": "2jAcLRP5vAygNNJQryiuBKpv8J9tTrZKacY8KoDn57ftsKjrCCA88YddVFGYGi6zFNEMEnguB3XKNyhd69KgqT6W",
  "key26": "3xxFL1ZX2SBPaZHawWJ8fbMivdzcNkR9wcwNjamwv9ExRhuidNpVhRLRGATDQd3EzsGbGgmyVVHQJfqfowPcUZAz",
  "key27": "N255EhwGfD3RscgFrw9vajxDh1Px4kDwTwb23Gcyr9t1VcAKqqiN7QNogZ2rX6ga2hyrvmniSBMV3cu2dzNhqAA",
  "key28": "yoXvRPyTyXkxL5opDfUpGi9tjRqfemHRnf9JZvKMUX4sXctKfuDsEEzqXor7TEnrdnSUdonoszuAHerY3yU4kZt",
  "key29": "67YX9iiQmNsQ3rn8x1xVhpTsKBwSmQhUKNPK2G5MQM2uC4K1wk9JukLPUudstiDAZnUqgZCRWKXuStozp53T67T6"
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
