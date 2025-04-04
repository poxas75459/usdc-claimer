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
    "wVkFgWkuEaaBw8HVdKAQXKhD4eGCax3r87KFV3rjYXQ4BeuFpy9PG6DoP8wzQnCbxufBRkufgRpdJz8fkAeK9fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VScWkg3k1x9NsgBdozghNNR4Kqt8xvWgNdXcVSd4X7vnCMBJuadSRy1Q8wBj9uCGwK3A1rkoC1NzCDpzJthi3oF",
  "key1": "251jcDxPpjdamDAG7dhJERHHLk8EJcpHYe7KtJYEEn6WhBvfsu25fhqqRazWjqsnByNRrsTJ1Nskps8J6U9icQbc",
  "key2": "5AkB2T1JKS2RdPbMQhAM3rKsD17TUPL7KKEkcGUb7RwNws1Rae8qw9NHDmwfnHHNRHTkRAf7ezwSbAjsuzkb8Vxj",
  "key3": "2sApvabVcj5amp2BkiBRmZKotRnRgJGJH86ufbjYzDvoZ5TiYA3oDvKE6riMV9pyC6bPwVyKDr8dQGCcYixLLQDS",
  "key4": "4odMi8ohZKCZP3oMg8bvqwmfSyqsCK2BvHoiwx8XwMTNQJiw9MiT8N6YdHMFTJrH2P1nfnVJfFi4m4S7QsPd39P1",
  "key5": "3KwcRztBmMxkSKruhkryAtEn8kTMRhJKyTwTNLH28xEF2u88bGpC2nhHYR8VjcNxy69kJGN9ARhppLFjLZZu5fPF",
  "key6": "5nfoYGgN1mC5DsuxdFUVfZAZjyapND99eyXiqinKLnDwS2BBZPMNpj1ssfAeZGnA1qjuoYHuJBdSUr2bHwnVTUcx",
  "key7": "2RAiAxz3zgLMuHmMQdYwEeb4Lm4zN988ZihiiCzvaMYP7hy8hASaLTD4K4CX8zq5qyKUsXoRyMPfqUiKY72wDyEC",
  "key8": "6ZCtJckWB7EEeTzQXwZasioKSeZYgAH9XMc2CLXc9jdzyKzSDeQitKoJGySqRNan8HGduK8ffusnhnJEywY3YKp",
  "key9": "2zfGpj8ow9qRSUvieoPRjF8ChwC8M2rkUuDXvgWEZriZwhfWuzcjacjZiUXethTKckvbkLuBmc2DaHGu7272wtrE",
  "key10": "5YgEb3PktjBSi7DjUiRcMaUu88jy1xWGWYrJnqEmy3MHyu8SaYTQfp8oZ5V8ke2Nd5obqiHFsxRYQWphbosK2GLz",
  "key11": "3je16HvcMAAywd1o9LvsQXFQwFUNprZTwM1oZfvkg6LzjoL7AgGiRLEB6uxh6oY3PRgmPZQyRSeahtHZfg6EKTWp",
  "key12": "3PjpdKc8t25PUCCuvRXBT4oB12VBThim31GZHgvP2Yd9FsAJDLWutCWF3Jn9uqufmVxPfUyMSAyAuu8impX8aBj8",
  "key13": "5Wedp4NYFZ4i3iYYWEiUUTkSKNUVnEVwCsY7fxZ1TebrTVinZuhJYLJNCsZrja5M1yLCntoyZnCJFPSzmpPzv6r2",
  "key14": "5cmeULTpMkh3m1BKsz1S2wF1FPuenAWLHpBDzmehc1BTvdKvYkUXwnXU6GP4BQFDzTrm1yfNYV6D8aidtCnZLNwT",
  "key15": "4JcxSiNhbvvpFEYSsnuoHTpVQtfkjFsM34fk9JK6K23RexGjmvNXLfNv5yLm9ZDCGUJRX6GQy2SiyUYw6DFwYFvN",
  "key16": "2PA6SNp7kAto7Y5JMLb1juZLEBpRPoZaWCEf6bMdnDm3cWkmrQngnZhJRne3a3VyTPUxxPHVgRqDJWpPJ1tvvPrv",
  "key17": "2wQ7CEdYprjZGeeMKiZfrKJEfKVg4MNY9dmkvbEPZA4LDe5skptx2edVsWYbXgkyyhF1pX5otSQhUepce5Sx4ejc",
  "key18": "3i3yJmcYYRKiCMzFydQEu8pJi4abbToJw1fo2gFyCtqVorJDg5UbiCwiikTQ2cpXhbPTk3CHpe5FPp1rWEeeraDR",
  "key19": "2mppf66EJ7jpKkY3U1Um9qVGrW8WvHPWJMpLCkx7cHh8gDpaBekiV7Mz73acPyx5WAbuRB5VyAv4mMxL3iLECgi",
  "key20": "3bcFvHu6JPda6GS5tUXr2k9PCtyByse6Wmy7r6Wd4Lcm9tia5LafFDeQrNqGD1jtVfS3XvcV5yF3jeqSNzuUh4n5",
  "key21": "2L29isQsCHQzvyvGnPzq8MBhRY9wm3BRR7QUfmU64TorAyTvb1XmVLTTrTodXuwB8JeZtrSTRW55XHC7nCa5Cksh",
  "key22": "3sXYDv8upYP43NtyJKyyS9XSy9Yhi8XvNT1wkKwJNgB8Uw4c4BApHHWUGfRb4jKedwxMDkL83xj8bi7RPHU8AaL4",
  "key23": "5G4xe3WPPKndE2yUXkQ82P5HT8w21bXd7dhNHauLvSEknY7d22fYLk7A6RsWCgQYEcyK95XQFzQh41rjhGYM6g9J",
  "key24": "2yrxef8Kosh7QwrGbG2J98CsyFzjKRR8xaCHBCyBPsahRvwrkoXc3BUVGEihymbnKGpoPYjZBitdsetiXQhwQNKR",
  "key25": "XYfPjdr9iezMPPYKqWhfVHBGWKJ2iyMju76cx5UuttQSCBTf6Pet9W9tT6WFrgP9XwxWeogdfjH5HrFc6LtATWA",
  "key26": "42jyjgkr7k4DGuXeB4xtofQkce2ETwXqWrUegCjd675idVh9sQei4MtZqsjEshtks699bv3P36HLsX1T2naDH8Et",
  "key27": "4bhGz6T5tUEz13JvCXeq98DFmDQ9suYs4TxfEEzDBSLhneToSWJwERiqYADVzk7As5XSzQjjz6PCwBvPWVznMCrn",
  "key28": "2eYethDAgyTjZbzbGwoTuKHSCSrqmNWwNeJoDQ196WtfA1cC2ChirtDwSmzCSZNbRWzD7rZnSfCCcPkc6jpyAAbo",
  "key29": "49jg2UJrZ3EUee5qGHnMwKhsSbQPSo1ZeAaTa3D3jpi7SfCz4Jq63wftGEVskXujP8A1crVmZF8uG5AhrEGcUUiB"
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
