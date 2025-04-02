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
    "czwCZ6AbQHCZzMx4UjUzApKsVdgV3UyAbyG7gxyaPTykTrPCgEbXnHU1mJsvf1o5QQK1nKWjZL1DHjrcvqNVQKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HowsB3SdSX67jaFVnhttPYgaiLdMaj3E4F8AJunaC5vaCBjQq8GMETo9mcAqNBqmP98jN2Q5pnQY7kG8FM8wMzH",
  "key1": "a8WBxAtearFDi6qnNaUYpNv35VU11WUvPQvcZLN1hri9JHaDJsgWBuQonxieEpMNspDhzBVUvvZc6qLgGPGLSDY",
  "key2": "62NrxpL4ou8Xs2bbSPpk24K2MZksCeTuaoUmEpkwPdhdYEazdk6u3nkiaRcjpH1uzTe9q5V5roTZJRN1yZ2CJF9t",
  "key3": "4K4xGEmjkGF6sBbTwDs3QPk7srg33i2xX2BDEAscb9eYzdzhipfBPvfm5KbUKU6cqJxq7x5rg3NRsxGapsb6F5gG",
  "key4": "2qqRAFfTFymVo4qquEntpCZoB8RiRusJp1id6EfPNGWj5TZJV38FAphBWZqC4336S5Xsq9Sp7ugbxdLdZsUt1rqt",
  "key5": "4FDEpz9CqvzzyP2bRg2mCc23tMJW8Wzxprq9PXzTyAcBa2g5NCHyrqcgYGr3CPne6mZUmSCdAvAz1PANUg3aZ8Vw",
  "key6": "2VHRnu3itmfQUVasGAPqVzsmvx5NTDNes6wuMy1eNhSTF2R1PEwAxMy8XmxE4n9J9xfSqpNDhzB2VqFo2qxM6vdS",
  "key7": "51r8HCoW7JnMokRe9YBgMKthKzHnXHbAnoFjzhD7JJ28a252GyQYphHK23BHsSwwAJtbJ5YgkAcTCt9FxLNQg5RV",
  "key8": "3AHZFuDTAkcVBRrqqBEqdG6K2KPbpm2hNFwkgX54Fj3gKFPyd9NiEh5rbsiRWP1JgEAedLFKdVQrZrXH7DD1Qoas",
  "key9": "2aRf4DQAHd6HwviytC9BNWfBEP5tJMM2HbhKJKKinuVZg5bsRvzd2Whgawt2rYT9hwFzdHyjRW9dV5FpBSA1Ujwk",
  "key10": "2c3Rs4mZCxFQ9JSVNGHXpadwfNsvqhj3uBmKwmabduUa6C3rZTsgCN6X3HrJFjD6XXHRUEEUxeSMzqzcEcSxZZqp",
  "key11": "3cS5UJ2trF2mHgiaiZMyK9EVkaDBLkRgfcDWv6V5mQXDriBghtvdWtzjpLizqmNtsTQSKoVQi3T5G7pWgtJRViBw",
  "key12": "5NgsVWCbTuHZzFStbTSQPdiDog8nUmWncmu2QPjteHvgbAAVYi8amdJAormd4UC5Mscak7XoW1TkZksfrznKoGMt",
  "key13": "3pcRwLqk2Cs44ZftjBGJVtSbi9vu2JhQ2jdaU4aR4RE57MWDJDfck1cd3iHaGiqGfZtgUJwAucovGZgVi4ZwmxrC",
  "key14": "2PyE2bBeEFS2LJzUjJgnavjhTxX318WmTh4o3b4g8WgEczu1XCYvY1f8FLPdmczUFV5wDj9FcVPp1UUwqMZEom7p",
  "key15": "22NZdb35YdDbWcY4FKV78YegLGnhnfPDxCkDWJsLGZiDbsXWJ3MaV3AgRvfLEgjP7eERRG8RSheSC6Jm4FCoCbd3",
  "key16": "4zaQERPpwuPhK2oupp54LRGG1A7ccwbNQMDfw1m1uUjQWKbta6ZefMoaWUnqWgcdigR5DLn88xSM74G3rqUb76AF",
  "key17": "5zA5MvaR12CgTGgqUTEw3mES2zk8nXZMSmMjAkVJ4EaJmDV6ofALLKzHJfBdYNfhr5WNwZifGVdZA66Qk3gUiU73",
  "key18": "2XGWKXtemzVWuEpHx3YU1qgRXuePitGUmYtVUf8KhVdtQoASYj2TLBJ5hZ3Zvn9DPywJn6AW9jea5nAfEiVRWkp6",
  "key19": "3wFJo32CsdTSyA8BRHPYehYQ3MJPL8wtuJy812EarbBx69QN5GLdV1WxVKgzxkXPZWcXyLuFrG23tP7ricAPqAQc",
  "key20": "yqtGE3Ntxcm2xKLEG5h4iam7egYZoXy8UL5PociGdMhhvTohaxckZvAS4s1qKk5pguF1PRSeZJTv4g8yT65WqSY",
  "key21": "7obZYi3U5By6p7ZXQT3y3M97eCtrEosEFc2y4QvFE25QzDjYcddFT8RC1LwqNQ1C4NTWE9HJQrVbf2YSm81qASn",
  "key22": "QgKhYSCxHY4Tws4EGQSdrFKpaSGL1en7fPf5xsngvJcdcxCZq9iJR8p3xGaDDrRP9imEMidiZE9jJeykJH4ixaa",
  "key23": "2ynNB9GR8oU6dgdHZxvPrj9Rczu49MLsbmL7otczAh3jHFRz922Gowv2Bj2fdvZQZcPKSA43WpAwpfowSzLjv5q",
  "key24": "qCTAimddCouPK1ptfg8e7paf41ft28ALtPz5XpC9YLrrzrzj4hZfTNixcGp8adVZWxdJncBFJEwSx91WKuRLhcW",
  "key25": "2BdTJBcF7yF65ov2kX7YS3kdMNeAU7tNCV7NJxe9MSC1BhKDf2bcFA26d8R894w5EHA1QXFgWoRpmEpGS1VfvgWp",
  "key26": "Y2DcpHD2TE6mJpWxqvQvo4Q3awBhSNYvNZiyJ8oLSbWX58MjbiBhTdQboDZ8cok7LWU8AnJn4oJNofacWSAaGcZ",
  "key27": "45Y5HkHFgFBY7RWWKTgZ4q3q9tj2hSceCD1tdEm7eBA5CJbzcFkGMb2UZ7iwFPBi3uhhRcJatQZxTF4xpEDtWi4t"
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
