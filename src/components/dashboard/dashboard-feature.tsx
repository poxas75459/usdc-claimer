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
    "43geKJqUjG8DwHFds2yzoqTuWvMN9n574cb7yqaqgkEMTGkff2i9F3Sj5kyTP2xn2rqYTnH9ZJ7MmKc4Pi5xLBvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42WYKcCMdKN8gyqqFcUwefw9Uu2HKrKXX2HSoeRQeHbddwAYk3nA4WWAH7T6qLtCqC3hLP8cuCKB6WuER3zF1DpF",
  "key1": "4k39CQW6U3t73jmDeNaAkxmMJbPaQLiHwC4J5ENW5HrbFrh8HqwoJyGPPoL1TMVaJJwV2F2VF4AHocZBEFfFbwXG",
  "key2": "fTXKBQybQRpb2yEJM2AnSJ5SxDqEAurFGWHhqAAak2sVvL7c5R8WRypcWW4CDpnsFmojn8yAv8QTyfLTvNwG4YL",
  "key3": "2r8tjtknHzgMKomS5DQiVsBjgqUEVPHzeeLrJJXtHDRspfwSCPe9JvxQv6VfhSmcMN3dwuYrNWp4x1MNbLEAsHUj",
  "key4": "jdvFTfH3QXyqtzUkTJYYujRkQvN8YnqRNumJeXk9BomE7wvhCg69ngMzVKfXWFBhNLuJa5DiyRvARwb5UZGvFFx",
  "key5": "3ipUBR63CE6FRQTydzCWjNm5xPYbc2hKJaq8nXovQxgXHu2CJBpp7kn8GmKjXef9D6qR17aV4goCZBfDmiNbrZkW",
  "key6": "635VcqTSX5FTeLa5nBQQXe793A3t4AFVpck9QuMkmaLdAANwcDARAK5AxuB5DsT9d8tK1CE3cQRiJPbao9LDhtYj",
  "key7": "5bGR2szMC98e5CXcHCtDscSPvrWbKeRRHTGKoNFhf8twjcD8GZx5agonSH7no8HdwAwhRoVEZJyMxaBehKKBVnsb",
  "key8": "4tsyTu5Zdm4uChjvE8WcSASfQTPz1QS4QQtMktyQogexrTpDtDeXfzrHdFYwjehM2gE8dwe27b77sXTrByMjQwry",
  "key9": "3rkyGzDr7zZ1vDYjkuKF4XDmbMZ6w8zSyt1CaPq4dtqoDp3bQ5GJ8DSH7kpexb3SaidjYybZCNNsdeQ6PgNF2SS",
  "key10": "2rHkKb4Uuc5LoTN7CzFh6PhwKXURpdHY7Z7WSPMPQ6BtbFKmZ1ww1C1nrFMRiHZpGFGZVrA1JAB7rsvsRAch2hnF",
  "key11": "NiFdULAdFXM6yaoE2JoJTpg7SmE3g24Y3UZ1Rt7BzAjWUbiALK6GhiS82pci86pxAxhfeaYLzRFpX1gieXtySkp",
  "key12": "5qfpJzDrRSvgt7aTzCgQN94PqmqpDx3153m7CdmrqzJAaXBKKEjv8VPaYRhHiuTvjvWDwmXkLAp8uHC74LJ936Gw",
  "key13": "4KfwXAqUCYnXTUwG5eb1KUmnueLpE7yC669oz11TtG6FKS7nyanAEHS4BwmN3S8b8b9oGvKW4JpHyWhnpFdyQ7mo",
  "key14": "4wh8j9e965Mnrf6KBkMZvYJ4NNtLRJBPBFVDArig9U4mLsykiGxECV2bZyyBkkr53kyQDFA8Xbnnh2pnBearcENE",
  "key15": "2baeZJ6B7EBpFtZDJBYfvpc7CcbgApCuatEFxgBx4xAXtxMsiVP96hE4i3KcUGaLLpjbERESHbPTCt1QZ9LHoGyq",
  "key16": "5vSGMJaVN7u5sGB2F1Yq7eFs7QX6kcZLZGrrsoB8QnN7nwP6DeyYTVc5h4FP4nHZrgrdE1ASxiNs3RXvZjdSwGt4",
  "key17": "4NuhqqypqKRfeowKgFsAhpHWX8SH6RWqdtYUCQab64XfksnNp19xYKwZP6jjQaQ2Hjt8yVmt12HavXvdKc4EpbQX",
  "key18": "4yXZ6i2bTaAmsr9bZuXH4iw5iHEdCFxAyUQKwZchNm5MULYXDjqTEWuLbZFk3TJCibGQgP285MJakwhEXGJoQbm4",
  "key19": "4ujvjvvxL24ARNQ8LuWRvREVPGvzEJegALgJnV5vno9jB1Bq8etbe53UpKYYVXSwxKA5khdiS8TmJ4AuVBpYgwea",
  "key20": "3RkEQ8Ey9aBf8X4jC2cE8Vx6ZaKvRYKX5hHLJd12jXbMfU4dpNLJ87hHGVR7ZHnSURA2zKeAauE83SDkiRo23JwE",
  "key21": "3THVSRsM3beYfFARqitiMmkXBGkbC6cA7sACrSng5HPgHJ6yZQcUDGEsyPv3wC4AXx7VDqjHCdp9Vmt9QizpkcnH",
  "key22": "2NGEEgFdFNjwygwjkK5TDkUdWExYM4JYv3h6UXFz3WCPVPsw2Q9QC9uBd9NMsQcDmfWiLqC7De4xeaB3gA6nuGY2",
  "key23": "5uByt9EBrtfVNFdcoZerVWyZWo442SnYeFAhnoVTcMXungyjgEwcrLonYvDby2AwSGFcsnWBS51xdbdbXEb2MuaZ",
  "key24": "667F8D5KE7AwdPLFaTeAprjTcoj2UtKRY9mCG2PFBH5UV5YyBaV8Zspov8AakfNrubpnGVX4Mjt8E6ghpu7WV79t",
  "key25": "4ws3YeMqANKBYJ3R7W8mBCD3gyMDhVB3WjkEQyt14BZBWsCCXhFzXQnSj53GgEaRn7pbZJqT4VEwM3NAY9e2k81x",
  "key26": "5nesoNW9drTjE1MkiEwzMHTGhyaFm3q65PS8ykLtSJZdZS9PGR7g2qx5geVDLtc8XgzEw9YiJoeJfzuiiuzLxT5C",
  "key27": "44vDF1KgUvawf38DD84KLuaffnzjG8Mm37xA9cHdoLvMEut5rXMPj2sMTcjdYkFksgdB84MEos4LFPx4j6ANtV3U",
  "key28": "5x8w1NeuuV5F2mxCGaQrkRA9TKfgvwwJoc7UASonwKaBpfMZdzHmW5sNcjJx3M27Lh9CpBCwdPYGXwgAwpFWyCzy",
  "key29": "SSP6ZvhA5R8EigfASuX9DQMBizowMktre8VHLm21Ed3z52osWZq3JukrVZm9pnhKwNFcD6Bb6sRcLemkYSdCeYH",
  "key30": "35wrjSFtAiXr2pKWoCgJKSAnzkjFQM7u7mx6VQ4KeqJMmLoSZwHYHDtpZ9BoVevKCU8FKToqDZfMYjSGVPHtTmp1"
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
