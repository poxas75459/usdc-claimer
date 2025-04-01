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
    "4QMwgSkVxS9SCsFiXmvBWAKGd3JhgSorBBS4NdbanizhtoW6n1AZyBPC6DQqYQ7j2J8fFLYMHqRDWZaKd8GpSfGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jugzWqVKPKDBZWLaHxkbbwdE4cHvscGarSRrQixonmvsiNFeVdRsu4rKK1TgFa7hvaQ2F1ZEfwo7R1Zg9K4g93v",
  "key1": "5hRoRkHVx69UojJnLrcAqJEXhGj5KQYbNaMdiAuXKxs5zCco4Tj6gzbX7azZQKZEb8drUwq1WAcitftBEjDYVauJ",
  "key2": "CGivLfqCffqqQzmCnWNbKfGdVK4wJaiHNmT7s6umyw3XKjwQAjQXxrHVwCmjJ5knzi9iA8GPfX69MfAY2vNhrjc",
  "key3": "5tZub2jyUscLhAkUSC5GoiKM5UjrFgWK2J7TUdffC3kHpqZZ1QarYcmJk2EbTZtcKPw8xVhSr3CshoesGE7H2atg",
  "key4": "5Ub2F8ZRS6ECbmWtceVST4orJBEyPZE4FNaAW4wpokByU1x72CuxYy7W2iTgkA5ppKNckVYgXwmJ3HfxasoXY2U3",
  "key5": "NTFXA5yPqhQ9nnLCqDxEs93stvmsHk8Qbu4NAcemmdRQx6kvQcG2xpBGAQyWrvMuyuHksH7kVpxpJK2zkf2rEBd",
  "key6": "2VanESXnZFN16K7ZhFkBh2q24fxSfx2k8ebT3RR6f1RF4pmy5zApzUFJBUxdzo3DggJm1vWLYrsaDJJPqAoNCcza",
  "key7": "b5khThrgnSqG2LAhJ9JSWYLhKHTMCGWmzePaYB863qmT2Dn1Tapkph9cwpGZ4Cy5j6C2nnFcQH2oqphL42TLBdr",
  "key8": "5j8TyhzEELhmHAebyGqk9s3fUYTj9RgjPmkHM94Lu86rETVYyNTo3QqgWi7KAUjsUgdBdVf4UEYMFo3EfDAh3nf9",
  "key9": "5BzKJnMdGtAfXuUn7Fg28qT21NqBsrL5F66XM3exVyKWADuW3coi4oXcEEWS2Z8334sRdLwn35JxPSNDZvhwW1Dq",
  "key10": "4SHjye2kvmM2xQjMpS3om7hucUZKpQF9awsm9ZHEr5z1uQ2ZKQu8kCe3EmVty6mBNfnNniwzeu86WnW5ScMG9CRp",
  "key11": "64dABH4KRF9uEbkAszmCZeTm3hgXHN1xBaruhEcrvHp2mRtPVid1GeL1AHBgux6TZBsbLXSqT7NkNrNbN4GWbu59",
  "key12": "67FQwrcGv3xjwah8izkWsGSwEEyZoaywv8atbNoCC4MXHai9rBMhehmYQcnP8oLStbuHyq7asrG4h8Zq1wEJrZUU",
  "key13": "4MSPsSV88TfU7gZtzUYT7c4d5Tc25prm38EgMfVBn8RPGtTMHnuWvzeKcHZ2n1U7Bv9ndr9T8K6SBh3zJzEN7vwQ",
  "key14": "2eDjHcXtsQR1F7xP3CEkCj6bwgdhajYQFHnibABXCJkQDZw5n2tGuNbHrSqFHNJiCChXSsS1tXRCYN684KF3LXD3",
  "key15": "3EdE3XYM6qWRVXdox5iHZRmHBkEEpAFTb1QXG8C7Cx3NkzWcvMjFU2krzxZuKuotCpT6mrPo76QkMc4VM7bmjePB",
  "key16": "4vDjM7LGzEDn9XXLiQTYC3k1YEoJoLTxmzDB36BD4UtaFd5PP3tNBkbnwaUdFTeut2JaDBP13sD9ydcwfGZu1vWX",
  "key17": "5Ud6DjZEyqiRtAWkRUko9ay4PRQJRXZDXDS7ZcYqeqamuc5Y25K4wLZ6NCm5Wnzk48r78nYjq3QLtUvq2ZDaotJH",
  "key18": "5jG4mEqzwr6wgr8wgMKjGH2ytFkURxi42HwoEQSKk3HYbdz8FtfvZwDW2Aw4bw9kspHQfurXgVjRG6sVMDJ9fLDv",
  "key19": "21aGnCeBvLB3MeP8qCKRqx2tLQrLiowUU46cLqc88yxikoswEBtdqubrsCygrBqvFJswAfA377SyhwbRPojDAVYM",
  "key20": "TXfH7nRk2uhXqKCbuvkTkpBEFiK6S95T4uYWwEuwwSV4vFs8twPj6BcVHxv4NN3ns6mqz8nxZwJE2MBEAi83uCa",
  "key21": "masWAoMtw2cUSPDpxFxfU5KDCM9SvQAtiLuJP8LbqmR8FNfzmyE24NEKCN3Qg2VeZy6X6dsKSZUwwW7aDjCBD7Q",
  "key22": "2ATAUp1nPqXCvVLjt6e9xQCBnULs43LMzP8n6hu4BhjMecf4QtuVFUBbHZWSqX2ChwFZzNT18E6b8NoRYj7xxZvo",
  "key23": "EMWq4PPfo91QD6kY4kj45q9CX9gVdTbVA3enmUK7XQ35MvExA1pk5cGkHLFZ3JuRn5QV6Lb8vJxB68sG9cKJ4Ai",
  "key24": "2SiL1AjJdPFFQkyoyjv3XxRM3LEyevLZjAWn5wejLfHfp6oqs3pcRBX3ePLDc8S4oNXHzBXp2gZBTLQSLQXaV91E"
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
