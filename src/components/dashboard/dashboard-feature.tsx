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
    "9mxyyk31SsAJwFQK6SaYLLTa6WnhJdfsNPvSn8x9XV5baUNXuV6fV3CYa6m4cWSGrjXS47oixv7vko312wCd6KA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j1ZMqazaFG9X2Qkg9HGKmEiKfC5EQC5svesShvkxH9eQJvkdCqs2uDYr5kFoi11Uv1kmVFJa31h1NB8WSUMTsBm",
  "key1": "25BLqooXgnMf6RtMnehHTSotekZFaNuFhVLWBKWFCoLNxnbcwVvseqLo5t8YgHYgjp9bQHKwsobPtYgV9FQyi7us",
  "key2": "4GzdpdDeeswotyeKis36r9HQqSYwzCN4DWbNyp1rHcFDzbRuRM2JeNLBs13DkwSAY6heL7CteGPnmgyg3CUnxAu9",
  "key3": "3fE29ZJR9CX2ZBbx5uTdn6HVjJ6rAfTJvaZ8H6KafigVbULT9xUMu9eq2uQXf3RAL2uPjwx3MnbhXhQc6jkjDB8L",
  "key4": "2xcJAkqFCq3ffa7kiiB6JRopuGrZXjRyFav64oeDfkbuLfVB2q9bZuq8vPgPU4jQA9zGtHpEU1cnxtoKfxFNBnB5",
  "key5": "oRjDR4WBqsbYvHzw17bQPT3d8hswBdT1EJdp3RtKK8v2pGSwNkVL6SKZvLiKGbHwq1XPvwt1FnLwqBBTuauzimy",
  "key6": "28Z3gzhP1j8158892ggtjhWAY5F3snHQ12g7Kv14dtbNsXaujud3r2pssCkCpKknGkK1bftyjrJCu9D7GePyLTzU",
  "key7": "4VFdzDftznP2SnK8TeDZuvjLMoawuvUh63rcRKMpgBMi8hvYTHu6RHrX7A2XQNLbvDtfPMkvWox47bgJzeY6wsPg",
  "key8": "3pPbmxRzbLsAJG7goJNaUMTM58o5jryw6WHBjnUseGVqGw4o5a6HLryVJwshKKnDyZHThvousZ7bztiJpvWFHWqe",
  "key9": "5Czt3yKvdNaWa8xNZY8LsjNzHFpZ7jXttFTsZY4WXoQwsp4CMXfnMhtLjjLPgigV7czzQ8P4ZPecvR9Et397JdWR",
  "key10": "3md1qUVB4JrhjPdHM2MCJizqVofq7HUiqnEhEZwXhu5dWeQxvCH4mVoMjHjAerYioxkY8JS1gaQGNySmomTo6URf",
  "key11": "RZEuiKJSAaHsBC7w7pRNUNX2J6cfzxnNhj72shMUznQ5ZvTkyYKfwPfGTrTUaRBZ7xmi783JPW9A5aCqYPQ2xqu",
  "key12": "3jPwHZvB6Wy7M8NHRScAo8FsW7S4UAp4MLkm7nPBk43toQQf66K4c6dgCEfyGJxL3jDpQVQq6Dfh6KMd5TxZ8ZYr",
  "key13": "43tzqtrmJ1oaoUhKqXJPoiCdLJpX4rQA74sfGsGe1QHBK84ufwxV54v2CLUFmbeSRYUGgDtf6MorSiHN1rKkTuaQ",
  "key14": "CesPL8FKt8UTJxSLHvdeNsCAt2hFVqDsPeYug9gxijxQPxdbwXBs5pysyuWdSo3F3j6apXTC6CzuzkDLvXweFGS",
  "key15": "2PRwFavfRaRc4VdxPtfvauQBvgQA3Bf58CxAoJzbd9m9ZpsQhSYRayQFbxMPBgLMpacHkabi4BpXUb4ebigDuWq5",
  "key16": "GqUzwHekKHXyTvbNaeVqLt47XChuPypYn6vRzXfgnGkricCcZ94hyfUrEjkP1MZrPehfp6jw6yGYnZDu2uaKh9x",
  "key17": "3BL4pHejTht2p5FS31TheYy5o3mXE7Eixz73XLLNGh5V3YMUdNW9GLjpVDvhNuy5HRgdgYBnzsfFNaZa9dGCyfm",
  "key18": "2GTnwMz5yLFumJQciHPoS71ZWuXzouE1B7F6pQwJfjVDgiBjyNude7yZHUkeUqrpHyGCQspuATgdp9w63DvRbSdv",
  "key19": "4Mjc3HLNP77vuhiWtHofcyXCuHWbj6XRukLKzvBp3B3F6K1x6QYqv7cfcSg92CcCiYodpU27odiYuD6Kx9gGEJw7",
  "key20": "3vzeD7XAwxhsKeENou2SqZvY9p57kEpmXb9xJadkPp1Fitb1bhtZqxecM9Tn4LkFXBUyu3fVyTkWW1gbepvT4TgQ",
  "key21": "65fr9GNhbqe1PAxNsm3xKwo42DKQT4BcpuoiQhaiJPFmMnh49rZZ9rwdfsx5hY89Ct79N66DbRfTRDKXaYhVxmeN",
  "key22": "3rSm2aLhAbvhKFA1FQ3MGPAKQwZcdMa9mursJPRaLsZQ84iWtR7A4wUTqFsVdF7eBz5ZQFDSTSmxqtN6TomG5pyo",
  "key23": "5TC7PPNXoevzzedq54j3KSe6aDAPvVghFiotTqRFeeMxZih65rvDRHuo93ucax9ZA2kkj2sZF7s9M9kBb6GnYHHs",
  "key24": "5wvXx8jeFcbZnLnZB8ZpskBwtRDUYjzDyqxmVS2Dd1yxMoQe24eWetYj2C1PEeArx91JvrF8taRRgHQWGhFy4ZY9",
  "key25": "3LQR4yVnX6nTTgqjSRiQNVZqR7sTGpYwyKaNyb6VPzG1LuSC9psgXTEEuLDYzvVut4Xssu32z9idEVMQG3hrzj7x",
  "key26": "5m77YaHi3mGDAXqXW4zW6nRJjfWrHRqrSwQWUftAynUQv7xYyK9F3vLSdkwnScvyxjR7gELP8JbSLiBzEuLnTDG4",
  "key27": "uPiku9tcuJBkEGVXpQueQs25MJqLGcGr84ewPZ6kifMFdzvb9sSWjHkK2KzueNrHG9mTmbA9mA3d8JemCxfwjyF",
  "key28": "3eBKnyNK5cV55Je493u7p4QWpyNQZrF448aMYMGSQmunTX8x9dEvYy6W6yVkY14WVQg2dXLsZRmWzg44LokfisLy",
  "key29": "5uQ2Qmp4P6Cnh4cmBxXmPeNXvZr8KAqb15ttcukg6VKSBbPWGZdof3SaeMUQtHckGN6j7c8DzJ4RWMe2DAJbAjqx",
  "key30": "4ZE6SksdLVtKjRVHAjCjf4VBJGTy6vh3KvvV26DdeXLeLGEXH7x72xSr96AyngcpNo63NTeCADJ9ReNuuv8NuVeS"
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
