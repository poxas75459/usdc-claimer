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
    "4rTMXHtvjTgHiLHesVrbcR2nH63KG3wLRhe22A9SripVfpn7BGccJ8vQHKnnVaw7QS5hycZUK9sRHcr7sdCnt33x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eK1cFi5H4rw4ZhBV2QUaiU8oRcPmJet4dSy1Aw4dgjMW1qPndhMiVbSawjDSZS1UHfmJSWHD1MZsgnTXAJHoaTV",
  "key1": "3vvkqrMEe6LVcG2EosPQgdrppA7o4FcguphCSaePXqPJn64gBQQb1qymk6jvWybySh18Th5C68ogbMy4CCiayELp",
  "key2": "2f3epqvix2GgBxSAZxE1FfXWEqnQ86Himb62qZbRvk8jnsUjtXDgf6jMeTt1wgtkWysA1x9ucQFbNSztMdgZHF7p",
  "key3": "5sL56ythXz8kugYUz7yKFnfNkMfstXbV8MLFs7Mc3gpgRx9vpyRk3snpc8npjhEzhTsg6j1PbeBJd6LJ9ABU3hgN",
  "key4": "4p5wtNATU3niKkCQVtgv1DY6Nss6hh69x2yAzFnLAwHgiXuS4WTrb6qniAu4fg8yvirkx47DNsJyyCskRQmd5Y9n",
  "key5": "2kGDBHrCyBPmw4ZSvvoTmGp3MfM16e5YLymbXeC7fh5cyAqBve65wKMYkrgYC9bfzu4MxaMYkhohNJk4RmBxcT6A",
  "key6": "QV3q33WHNxgjdSCBxSWCTqz2S5EKmMnExY72MVpqEexA6nJSrroXBiR6y8g9kaHvMUcsKhky2JTZryHwbebzTat",
  "key7": "4qDmCxG5mk9rM94ssdEeDmn7boGUrgaRNcTohDjc8oBddzVBMBGF7qvAgunyr77VhnJ6B5FJvKP7QxxafuoYZyn2",
  "key8": "3wLPi7MZwtVSEdt8Rv4HmcKu6N5a7YECrRA5LdBGWFDuPKdA1CBVz6K2Dc4XYBnPKQnmRQqZv4BtgxeGHjc7o8of",
  "key9": "5GC36ZmqfsV8eScqLyMMwEoHMiBCfiWbBGBMsNvc3S7Fe56MsuQpUkrMD4mzYTDsRPgzmUfU47t5SnRDqfPZZyFG",
  "key10": "63qMbiXf4c36TXJYfBMs1fdMRGseXGYQArFFvdvRNQPNaNJSRoyyuzR8Xf6grarkENZhPSXjRvGdRfqVnQArsBpV",
  "key11": "5eBMBWRt6BesePdrHowQqDZ8WqL6oNoytentLDEdW6ZLSnB6aFmMoDzhnBFsPcy9HLbqvpuGQZmWNMzCX4p5QBxm",
  "key12": "NHkbihBzn1Lxdzr2HpY6GXksNvimSKqCMcT9FByGrwqt2PGN3u1fX595KiFtA3NzMeKXmT4PrPtqo9R4KwXrWod",
  "key13": "47aibdqZ2G3baJvtZPBT8VJYQJULFka7Nnomc5fq3fM9akuf3efNpn7RedbkYCgyLn75wt45wnRXoTJrEjf1HnHH",
  "key14": "2g5QvdfqjMd6p4e998L8aKPcrt1tGqf6KrUjrQQooXEJ7cmNjdnkpgpD3q1eRz8bF9BY1XPYR13Fd6yPDUNFT9by",
  "key15": "UHXmuC2RAg4yhVADkybL74md8z3FtgZ3uYuWDzm7dYmrhuSs4H9su5mti5QKmXtdeDcQhocL59ugKCNdnGXSGKA",
  "key16": "54gKbADwwCGsvSQsrZfcWVFsyEYANc76vQi8ZsRYxEJ9idD9LTo6j43nZijwgFXrCQiDcjSL7ee7pGTQvjwAEdAF",
  "key17": "5FNBbuDYF192Ph4fdHEB5UpFFXkQSA6AGmPo9KTzzbbrVpHRYWWFn9SiD6uTGvGEL2x8BtyZ4SqXxH6UgxfXYCHX",
  "key18": "2L3ATgwojx1VShjpzafmB1BdAkHmZ7ck3wi8yag9kosCDbghbFLVUy2uCeuuHcSRiFetGZXYdp7ELvkJTSiygASM",
  "key19": "5xrjXRhanhCduwNVyLDKBEF3V3mKAwoTuNCpGCkG2cKfT1ghBVR5pHSoEd1mrVz2Fk9sEwCyy1SChsW9ChYth7o6",
  "key20": "ns1vF5tyMkUf6WspY9wQ9jY6ZaMwGPqxAEMQwKHhWtjQQfQES1u9esmTcQXUYHLKmBsbAqKmPZZLPiJQQ7a2bR9",
  "key21": "pdFR8DAjGBQFcTTTLvyJTYLVxEGnjQuZ3oRrGJQQSPi2UuArfTqiz3hE42SkXWdLxa4FAtXDPkYcF4paEvoJWsA",
  "key22": "38jfBGmNKt6EEvNNE9JUX29hTzCPwJcWPYHaMPANZWsu6JdvR6e5nZSzgNw9C5Pehn29HbUEwtWcu1wXmPo1M632",
  "key23": "2eGR7RXtGiLgETds5UuaTwBCxAmXgTDhtu3dY7MseRYcWJp1r5MfLQZMH8zZkntvDTHprR3tdnPqgZdPZD6bdtvi",
  "key24": "ykLv56uApLjfgERNedoaHo8CrG5r9TfoMG3HdKovDbF8mjYmbJMtoLeArC2D8XBFanNLkfq2sGNnVZXvZaUEay8",
  "key25": "2gMYUjYDZXo593JNSpg8v6wKreAs1eU1suSgr7bMqbdDYLPUChPoJ96BiwMdG5AqSifYC3Ybsjd7xR1osoEzmPrn",
  "key26": "43jY7WZdGxuTRZircZ3D2EHDHk1zZRF5Fk7wu9hknWqHBKRP3AVUfWP4soRc1AktrEA1ZnqjyeVQrfQFsFP97975",
  "key27": "AoJssz6sbxR361unAc9g2poPnmzBo3d3L3L6HbjxcsWYpxmiLyNtPBhXSnBSwJFDZrS4ExAx4SrQWZq3AzpAiwV",
  "key28": "LpUpGywbPr7N3N5D35hRQ7tK2LNdrBoedmibwdfkaW6EcY7QdRM2woz51fQKUoXzRrB9QfZLq8b6soBidDivgt8",
  "key29": "4XR6mnoRmaWaWXTqCqsHPpeMuJ3wArsiVWFvn74kW986LaN7k4PZKy7hChHV4o2NHPYhkoXHdMzipuQKXXsswNyk",
  "key30": "Dm6bwmJPEpKFQhuHTkumAyQcwaPvEw78qJS19nU9HnGs695jDGJgni9x9QkQ94HJmB4BUZHUnA31jVbK2atWS44"
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
