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
    "2hi2E71Lzs9qhU2ZcdGwnZefLyLDY7bPeXPqLHW24RfKeGjZ3BFsmTNYnSrESENrHtETgHeMri8JuKmwBPSnbyuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i7pc2Mn8hD83HXQ4h8MeTTZz5nYaGfatuudB3WKkFPoQLEtbT6XrU4iqFTm2RZ48Ldvup6BwBT26RvzAChzpSJy",
  "key1": "5bgaLs8i8ZvQRetqnsweHwMKTEEDGpNfGyVkLjhGWAqGCDGVY5HyjsAnGTqW6JjnMJjp4wsmiQaXyFhDFt5Gd1Ue",
  "key2": "4r7pBEp2VmiQzopReJfjvASM4Pv1KuAAwN9CkgJDmU7btrwBPCg4mabCa4KEPD8GDpaQVD7WQFkEhrHjUPrkxiLP",
  "key3": "32GZZRW62CCDLwY5a8vRLwHGSL4FC1B6YQoqYpD64dpyxrL5xHE2Zc7RVyC4jRDiD4bsiixbkiPLu8LCLrEgD7Vs",
  "key4": "3zRSxTtRXj14SCqGjUnQQbChhaoVjAJcabQGMhdVEvD1A6gcnzt5wWVYwNrSj6UvHPrDtz6b1DrfDn45o6qYdcL8",
  "key5": "3N2fbiXi4HcntTYabv7YHEYGogQ4ZD2HsmrqMT4mZcDnVmdqUenn1zieeNe9BvBjXgugvHRBZcEb2fSbJcg1cqFA",
  "key6": "4nyFRsqTruh1xZeauQLDxqWnMv5p4LjMcRpPLUTA3QJXezz6o5r21rwBwm4NsrFr8mbJNdb4Q1ui1kxirQQew3NQ",
  "key7": "4zonFzf3sBTEQAdVjqmWGkuTEwJdC62AjRK7zE3gEnAF8M3HxqDqLH6c3nyG5XcdepseM27uBFrxjSn5PMRYBBKw",
  "key8": "4HMf35hHQUfus5vLquckFvfbcHLng2ZqQYdw5XM9HBFgnVipyau2Hv99DVAhKpjVhgCzdVL96gJTxVEu8XduyTbx",
  "key9": "5QFEaC2fy6K6vTamffStVu4BDS8dmSrqPiB7qPfkSbC8ZoRoLRzJEJMJKXtidZLWLRUKxGuJpDwGLBs2XCnrg6aV",
  "key10": "2M734TcD4nVwSsmj72wjyModHTaDXP7t6aJ1AG4VurrPaYgkYdqRgzFojTgjqGg2PvC9gEk8ZCPZJJctKsj1XHgh",
  "key11": "4psMWF4He264TzdkHfMDmpe7Qui2HtmvxDuh7L7sDLUSgAyqCskEfFEuYcRbU4b7vDLJWsHeAwYN3aSMAkwtDSQp",
  "key12": "5mf9nkUs658J9S9m4URUicy778Do4CmKHuf2Eynm8tbMpapuptEwGc2M16Lcg9xdF2X78ycTbhUZ66GXQtdEyQFP",
  "key13": "6jQqHuuf6nJjSqfiLtTgeZeAn3Txqx3NQnSNsZTJxMswzgk6w1sSvMXVqEXsqQSz81RyeBVMn4BgBF4N1od7k9F",
  "key14": "5otLoeUJvgcexSHw4x31NbjGUhnzqrSyHCiQJhuXc9bY9TtiKbFQndqZs99X5ZGRGnG9jw7s1ptGkkYRwWp87dYd",
  "key15": "2eN3ENTXhFhSG5c212NKDhgtboYUxYWCkUvKSsvgUz3ENa6VjoH7QxA3J1xkB6nJivhMvujxuwhEjYfoNf3U8Fd5",
  "key16": "25vQV5dHjrngjtuxnMdNjcMbTX9MjSMxUpyX6oYuwHW8tH7NG1uBUn468HivGHvVjpgt29kig1yjzEhExb2UVJZ9",
  "key17": "3KZoYHHaFtNBkzatQTnF8cArpEtuxs1LAmMxx1sSRDWzTXUotCWJTBE63ofxbXGUBoEhJ1H5JNy3T2TZP2YRtvt6",
  "key18": "EyrQiynfpMV1gkGm83qcwVUU847LdDCNpi4KPt4TLKxyYTuTKSZSjDbjKqVoh6r21LJD9Lxif5qTdFogEHTg5kN",
  "key19": "3Lpog3MjDWfayaxcVuUHLFRaRmhm4LGKgatBMWi1d33fhRB5LUXSeN3RPZ9jT93BnNY2p3riwefyBSLcmsvsxQuZ",
  "key20": "4UYn4rDYdqAVqUKtGNjCCjza2BwF7uEJR64PQbhiJD9YqW1fMKdoQkD6aAZcj537F7rzWuCbu2GStPcxKdxoKHnb",
  "key21": "3tpbN9BewcC3MNuL5psCMj59MxGdE95L1aT1jJ6WxHrCTiQxYyWdC8iu7jHvhyi5A7cFuzaiW88B1MjWEWXC7m98",
  "key22": "7k91UTGm57uKGvbdH7tDWNqcgK2arGE3PBDgTiz3o7BR9k5UjRnpMkK9HKcx4LmaDoo164b6svuormeJrmWXLeo",
  "key23": "5jJMsWbvM1MgFarA48LMxhjX8f46KeMmS5oiDravM5fL1ject56N7U2p2xLJx3YPUckFFQSKyNhP95QKqxMYmYB7",
  "key24": "4vuxXFAXxVijqNhxf28uLPXGjLYK3qKk4mibEpHBFUngnGwoU8v9YB1y6SQytyJ9pRvDgeYuUsotZXx3E2pu7XNf",
  "key25": "44rnqqa9V81rq4qgkJMcSe99JkMDobM1pWted6E2h67CDDCzX8ZrxHph5AT5pZhNZ1EA1jsCwVPE4UwPzNW8AR6P"
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
