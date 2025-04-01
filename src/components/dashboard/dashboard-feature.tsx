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
    "4gNR9skVHoHn88ApTtSUf1aCQueLLQkkgNsEceTVBh5iT2f68FVuGKrjH56Vg9rjH5U7TPjhG1wwB2UH39aFBopv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EHpBfgWDySj4YDzXXToigykEcB2HqzPfcfaVocaXX86tgHUEK4xeXWG4rqMasUKYauLYcdBrG7kGHPwPP2ndQMN",
  "key1": "2zYdN7SPgEuY4h6K1N8uds11RwkcH64PgKv6HH25jJHvc8eF9pdEPczdv6BMCtZtxgNHGfzowWJYdL6BUk7iC5xD",
  "key2": "VdEKWuYAvTj7EgVngGTfjVcpqJJKHFJi2XGhUHo6HUBxY65H5AbQL7g9Koojy13Fxd3nPLaXFmzaetUEpM3tMmq",
  "key3": "28V9r61JsVmY8Y1pwQExv6mLqqLawRjkuFepnJz7SXkAxS6rFUGPpfnV8TxXxczzoj5ZtMyn3JToT9JuKKJjiuqK",
  "key4": "23hJExibjb1vARwBUWfv5i8UUKd6619DMgSJK6ZcqM3EtgWgW1TY99bpwtmBinpUSNsHGdDXHnNsHia4cNkyPJND",
  "key5": "3XhmiWbhTV9Yqv9PQWCYyaCfn7H11QDHavnAoMpGbMAYWAzNqgMURft1v7EoxpLx35cZDL5yHgzm6GGJGKwy8Cta",
  "key6": "vqLjwFjqwgKYSvzuFsH7kV2u5HnJsu2pXWkcmTZJbECVZPXMBw3rL72Z43R9vVFx7aWk5fMgQGRYegv7gtwKKkb",
  "key7": "5rkntQCekshKQTHRKz2sqPEQZRAzqwpar4p9qsAmZBZGpwwBWKgcrHHT9z8UJQEJBfH5vG6zPKTezUizsQAqPzBP",
  "key8": "5sZPzZtsNjbdWRDjmtFcX8aBkNdrxgDRhnYVNwomCYTGE6FxsE6aDGb2AQ4YeEq7JNbREKyNvc963QZAgKEU3J2f",
  "key9": "3Bpfvo74dku647oMyipeWnRUF7yHLcbCV5ssFEVRf8oJbTJpt93kcXGFNWZFgUBdf13J3EDfZXnwUACf7LNPLz83",
  "key10": "3zYzc3kNhmn7Vv2hfdmNJe5HqVqhWXT1xkA9ABqdvXqkFqcSHd6jTbUUBDhVaGzfQH4opsBBePUYg6XPyqLknuY1",
  "key11": "67Pp7uRS9NMwzdmdLiCenRNPuwXSqtkvUzsA3ehDLhaKGPJUASGcTGyLKBJx52SWfNmcWWoHteFzowTUid4Xv63t",
  "key12": "5R8KHSZ9a7fj6L9ddVyd1LvdxHhtc4boFjJCHygEXcMnd4qKyyf5TQtPSoczzX1QbFvtmZvdUvhqKmhW1CiQ1Bh3",
  "key13": "3rRPjX4UPGmvU3LuXQDTS92NuZfAow4PKrRtk5xWHAmi6JCJBNoD3yAy6ssJGYLTZgQPJU9PkjRXGYpSP2m5zQy3",
  "key14": "unXDdNdxEAXjjn13Jw1HK7bXxDBKPV5LMDGZ2Kos47XfJXLbueYoJGvSssjiJ1FG9xDUK9vKCyiVmWDSUViANE1",
  "key15": "4onTv6Yu5GAt6duyNfzeYhtUxDWhWBr5zUnEq65TKcYyLvRqmo5kjyvBi3msyRN1jVJvB7YNeJCAzyuD7CRbVoWi",
  "key16": "MGc4swBu48yGb9kfoZxuxUsn4aB33891Bs6Y7zNrxpanTJjTDBYL59UxxvUdF2DTKCrQv8uXHWv3coFDAcD9fEW",
  "key17": "sw32cJC2Mtwn81icMRNnxCMs3Df64xX551fpUYEcMZCBLizozhFpGgwiVhoPaFc2SEnhkohoNxMVfmdWSHj8q4T",
  "key18": "3U7DmZrYponmGpFvqcFbCRu9brtMcKRX2fQySM5WnvqTVnwUJkDPLa8kNAXw63cTuDJnu1NWivN5PedfWSLkAEou",
  "key19": "3XufXr1YARk7bxRnqXUXVbne3GJxiWqwy7GPfwPND9TMdMKfy1Zvhb6xwuGcH3uQiKJx38GnXeZshdtkogdY1bhB",
  "key20": "2Xo5oM7R9AvwuXtTM3E88NJXBEQ2EpJkbZKpgeWgCMgYAM5VWNrAnp8tkmUyLwmbMvkfCMMNfa49G5Ke52PhJzbE",
  "key21": "4RdtGYW2BZeU4T8WxUPHSPrm6shGD3nzubLPVrpjDWMgGVMigsnLNFqZSKwMxESwxWBtm96okF78bVUfRMVKAieU",
  "key22": "hWP261m2sEctVANKCZrXYnJcGBKF2UdJMMmoXc8LhC2T8aydTQEaPSRJTr5PqZh1iZiXuFgzQdmuKFEqqUkyhnR",
  "key23": "5DgvUZwAn26ZhYxTB9K93b58vegRWCVHNZAjMgaeF4J5giAU5yQaBpsKDSv6M8sDHsQQbMxfH9R3C75xZomF2M88",
  "key24": "2kXTvAjCx45KfJEuNQ7ghN74C3f5rjbuM11MzMAZbTbpd5Mgx75jYShjfuFkitF6ezwufwpRRnRyrpx1zYPR1EqE",
  "key25": "q19AGhusSeg13wTrfTRCvzGv5nsxhQksxmqsS3V62aqvzFfM4JVdVCWFSNSGgSt17bv8RnCH9Twf3KBJpQANPnW",
  "key26": "38H5pz2PKysczQW1yCjTTXVSHoxDVy7t92LrBZpqiLhUjggGzhpdDrvZx47i52otAVdYT9mk93SB5fiY8J1tPUgq",
  "key27": "5vaP6HpFyPFnCFBsSsBDi8uvBBaYjgm16GnDQU79zr9v2oGahzzJzQCzjq76LjbCzQt3yrK8B7uwGaghfaUs4JwB",
  "key28": "2tWhePABpSSoCpgw5h8uhEsiAEMyeyNDbiBxCikHo66nUkTJY5sFkEPggKYcwyN6wTJuWPaejFLCTrzXEuCYimnp",
  "key29": "J8EHpGB8L4E8ZbXEwwW7MFvUAAiatz8ACX5N4LhQdfFy79bd8FRH5EskBMUfdJG6fU74hm3z7SNcwkDi2xnLStQ",
  "key30": "5uBNb44f16HqE58jBC3uZXkX1zrfUUCwXFaJ8Fbb7tVTRh4U7vbNVpSuLNmz6mpQccwpf8ocA855DdxFZNVLCP9n",
  "key31": "GGGKmEVmG22SHF6nHPL5MqgzkLSdgpC1Pq6UDwrAMCNgZsgB5EJfbMQL7NseVuVUyWcqhGWL8RHaP7LqouFw2v6",
  "key32": "487zTmPTJJqz47nS5x9jLD43Uqvk6hfoAdxuXq3bc329oc26ezSR6wUbQXop3uBhnugpdamtfpaB6z1hHXwXvPa2"
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
