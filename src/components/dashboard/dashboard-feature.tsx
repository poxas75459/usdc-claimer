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
    "2sg1ZZ2PC69ycRSsCtgEQvj34HLGGwCtRqEz7eKtGWAhkp23q9sSGqSV8aUZkLtfVM8X2CRDyHMA1CAcwsFndZuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NAckYtrDJ44S4mpzyc6aMFosdQXLw5AxYuAR5DkzCMnNomoDMCg6mWcvM1NBUDmAP5bub83FRLX4bu5wfiRkMDQ",
  "key1": "3KDbL3iLFkgpcM4ZoJE1hBxD4ihf9UAjR7iuBwTTBXMDQTevZMxmooGiRDPywo5sKJK37V1hBnW3PHUmuVqDoGvq",
  "key2": "2daoERUNhSPapgkqxz61yNVnDpNddjPEu95YVRHwKac1rt1SPE2VoxmfUs3AZcvpn8N5jsRHFaNQumxezzCEJhLy",
  "key3": "4iQB1uns1WvqSP1Pt92dRtPkvAE6NSBdoWE4qvx2DGP7GSYvxDRhWCfijVCms8EtUJoNcdfgFSC3bn787fzi6EUS",
  "key4": "XTRo8Gyw6NhoYhPLo5Ms9TgvKWazBZ9FioLeX4ugdUhwKqNiDUEMaw8NcQnWfSLDaoXN1EMTBT4cP57aiyH3hdY",
  "key5": "5beopZqwkD88mycFHa1KzE5hRWxz3H3Zvo91TkoS1owYsJ5B7NDJd1YW79Q5maxyoDVPG8vZirV9BK99zXmSMKWN",
  "key6": "CJmr2ZiGTR318Bf7GbkP36xyrgHoiSLzSgENTEBMa9AVPAzmtqratSMWEbreen5KRg4HtM45YTkuJrhkATAinPv",
  "key7": "4rrfrit4qmBxdEuRFS66X7TAzxNXvtsQMEKDDVQ5SM6vwTukLexynRxJJPunVBJzhYUD8gZHLyp6fRULXMdRRcD",
  "key8": "4ZSZhnsKKSmkcWJdjzqUUVY32S9TGg72xuEdDP2Py9U68GvTH1zwbn6DBuk3roesouqjwmWJY6kqN9V7WCLvajUv",
  "key9": "3MzzTnc6f5gCygnAdKEtNEgv3QRkjik7NC3eX8BaaR39m7wq3CTJs1qGew8EZcyqqNbbEfLASEFfT9X2eVkz69V6",
  "key10": "5ZWveB5TJ2deooQRzSbLoyGRSwuFqYne4mMgEwyu5Sj8xC14khUP8QLZdZc2gCSGTvqMLbeijD35pnxbcnLwZJQN",
  "key11": "2LRjn79hHsUDvEFafkqsBhJuHELNkK2rG7EFLbNqKDE2o2keF7mw9JRvcrVzsUpfrunLgkPjY73d3sKGQbkqAZEE",
  "key12": "4QY1cuDMTVseSi8LojZJiefcrLbfjsVKKacAvpiaRQ6j2pb69umJ5YCwTTagvo1mPiy8Zm7XbZ47Uv67EbkPkdLv",
  "key13": "2VkFQZkcebxa22FdYAtXx6RNDEit8MV5zjuVYZPCw6RpdR1YNB7BQFsU7Y5JoujQPJrD72SQRfmpBwGpcoHxEgLk",
  "key14": "4TcjYQvDqProUTpoDNoahi3UQAtqoFbgyiXTP3Z5CT3oLog6JQoeDdHKGaC2LuQ8pGff5XdxcPsYREus2niyfNMG",
  "key15": "c2MWomrjAUUwBcFPo3u2cpS9gYPujzENyzCcnPRoyphM4dpRhWSSJgsaiWE1xYYtf2X35QyyrqVRseos6EkBbaj",
  "key16": "5VFRaKzkWxN4qyvfnZ6aq1GJRy9FZHJy3Gsyndk5gtovgwRSeUzK1t4UJAZRRy6uzE8nSVK6krVkqgcnnn11wcei",
  "key17": "3vDiuPAbkzUW1cQcxEYfEw3o9wJ2LJqqKVfWYwEMkgTELSy8TT5ah6zW8MwvkvgJ55rB21gx4ZT9h3v5VnH2wZaz",
  "key18": "fwRbtStz4WbkcvGV5jNzWdsCuCFYHGeiKijV6Fxf3TkmHmCViswJX5ERZMp6uHXf3aZv7nmrRnd9Bw623TmFbip",
  "key19": "w9CnwfBit9RWyDqSoyX8d52QfkRMfZaF8XiqiXX6Uq114oaxHzfcTeRtktea5PuAhhhZbTGyjULQvkKMoRyYF6E",
  "key20": "6jwkDrRKq6ZhKqKbpdCmgVkYkjD6ziyfno5CTu5rfAxPsxARgGbGvzSusUTVqzEYEPREYkxdcwxQL7B8sbBJCcR",
  "key21": "26QN1NXGxreoKYk9RGnxjfTiATqD418BocvhyHsMbX4Zznf7Go14HhQE1VopgSidEMHDWLLx6S5cVyBCtnm1zXWR",
  "key22": "9puaFFvq7P9fbQAFFv6Mi7aiiBtfDQtczFfi8oeZDibUiqmXNsGYibM3hoi6PuL3ab93nPAz1xod63k8ENzKmLn",
  "key23": "2RZRUEWSSavuG82eVed24xQPovedojJSuPYUir1RaXszbaDDChLGNB9NEdUV2NJzYrNEcseXkTh31YRn942YL1vr",
  "key24": "2N8JyS2pBrVQbxxfdKZby482afFw18hN3VB4FXfnpEy8p9FLHJyW9EHpJyGAhTSiPgA4YKRS9x5ecboNcYT8dQAY",
  "key25": "4MArks6Jx6jKR1TY182vULkHVzzZV5vmb8yAQkcqUdXkHEaos2o21W8Gefwt698cDxhZhnUJgk5vNVTe362wp55E",
  "key26": "3kevapRx9oYVfq3mBM2QuvNusbLZ4r9yexrRb5FRGihZhw9wVc7PMf3SqYgeRHuaKfq3PdBesXH5wbWBARjKnZhJ",
  "key27": "4jAuoqw5wZG35RQ13bbxWbddvNknxDkLaT7EiSFgopi2Ciy7SEDwqQzcAo5y5MZvRzRsffjYyEW34F6qSA7Ucm9j",
  "key28": "3WsiCuBvicLCa5riPApwqEC2hqxqbQDwCe3tUMFaojHaDciG8UdL53kjzvCaf6VMQuJLir5xprzGvwXQ9g2CLbuV",
  "key29": "JevyDFAGNS6td4FFTqQu1xXJghLfyZMftJ9jD3nSYtJZNR75FxpVHKNV84tHEg5ezNECZm3YoYreURTxdENNDRt"
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
