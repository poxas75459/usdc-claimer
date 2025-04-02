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
    "d4QSC6XYuEYFf2n1NV3ZuM9JYVnrdePGRQAYUh5a3FX67qKyBntVzdqiwneW3kGWnV7cjKfbw8ERwhjE2pE5dX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FVs9CKcpRg9pAzvrKfpYnusMR1ZyTxXFA4sHMEfAWApVDPq374Ad2SxKarUHvMJiiKcqGjvQvSNEoEEqB6DU2Wo",
  "key1": "3BnhcrSqcszzF5LyjihiaHneLcgwayVyZ4wpBc4AcgphHpGwqvRznuSZB5i1UqFkqZrxKpvBaDKyEWrZVFaNaK7Y",
  "key2": "2qivw9GLX62XHVVw6cGzAXaaHVKwqAFRDaVdbYuFPxi3Q6TK5zsjh87AwwsX8tS3t5Kk6iZWQcZ3AYrJtJeEtUhe",
  "key3": "4n9ovqdgtXqbN7p6ZszXGXG69BRB7DhBKaZv5MRkyysdhXZZpaHPsj8EH95trtH3YXyHJSQZAmjXP6caaicbfsUv",
  "key4": "XEbPRzesWuxeUn7oSpkL8Smu4wcHMuSiR1DKN2yP28ipb5WupMtgmeCtDzosSFctpvNRZUcpURDRawnCocM6kt3",
  "key5": "4KmqWgNWR31HRfA6Lu8r6TLxCq3FLLnDWErneSbEPZHV4wZJjJSdvWnSUk85rs9iiYVr5myVLzuAm7NhtJkCrC4L",
  "key6": "5DUxykAsb9grVSgnMgL8QjthJbYPGzQGyYEVnTczwYbTBTxsmhGexQdKca2KkTKrimrGpbp96WLNMaNfq3xNmqYt",
  "key7": "5Z13rmJd6118wNq4Y6efarMBsVuMKH1HTjVQrCD6RFmXsUJE3v8cdE5hTYvuDyj4bCK8psg165GfoxB7RMzxzfM7",
  "key8": "4AuVS98hVgTuymuJWGyvpv2ygqEvCwMYh36cxmpPZALfj8XizEdMFoSYdiXs9QWsPZZriFnbNKyokyEiczXPNVPw",
  "key9": "3JU9fczhqf5BCUPDgnKQ969RX4xVhGur7RPh6qoA7nxxmfsBU6qgXweVzb6uqqcfZpNS2hkcmVTFGSaYZv8K3ogi",
  "key10": "3cB8nuwuD9xXvmaAUDYg4NdAnU13eg9WMJDAWMYRFQ5iwLiqLPjrm7ye98CJnubxBdsDnqmFYYxoG6sgzt9B1kjS",
  "key11": "2cL195Rqgh9qxULfUC7JGyxCXaZkvsvaV158s6Fi7YwMvn92m9vWc4Lpf7azQWdp7Ewzq44y7TF1HTphCJGZiE5U",
  "key12": "y6H8Fm83tZgNcAFGmqGpCCappLvY3Bet2pQ8aANwvcBahWpyLf2VRtKyUsmLX5KqiyZHdyZxB1YMkAmh44ikaRo",
  "key13": "5nDCMECt7uuod23uextwuiznsUaHA7hWWARqJHxM2c4JmmCDLnKujLqrrisnp1eRAJ8VPnLJiVUoGGQzh7Cq8uLG",
  "key14": "2Yb51wp6Gd85hEMFsQ58FZDJU5X7QdXBG8tXmBG3eC5WsSdaJQpfPmB2dVEkgFYzfzjkkgRjeyqSZMqQJMwkoeiY",
  "key15": "2WbXaTcnZRvm1pRBc8HVhRoATPxU5xu6cgNgAY8o22aCdVoXGC3EkdNNGkq335KkA18juLZVaGmevnrdtN4fcRyQ",
  "key16": "63VWZkPNMNUnk4FMew9NkMqsQf8NAGyCzbZwmJq8bg7cXiTge9KSrNFaTNARJoRRXHmVs6mbrzhv2y7vHhvg8WHE",
  "key17": "52MvaPxEhS9XMLF5D47q9fyMytoSPtcFnoUE7i7Bm62HRWCYUaMKjZgKL3dK6UHMRWqqcdfW3fimF2VHVUEubsN8",
  "key18": "4CVHqZaFENPAC5XTRaiHhN3xDSG7aB9BJA8bd1KupX66xurRg9XJU17ryJ46KdQQ2iGnbA13dLmSRvg8zCboL1MJ",
  "key19": "2UzEuKanBNs13Qrw2jbtAaRwMgvXgcqitBC69gLMxsJqosqu8AAFZCTb5AcnPsgtmiFs8nwpULkkadV73QHKAUp",
  "key20": "5XKFUBdUbs4g4zXwd2DtihyrY4jSnxhCepsS87tzp8aJTbK5PiG5uQrFS5XmhFk53NgYW7AUkoAbDdSPnW77xKvf",
  "key21": "2WCQPTKWctmCAJ7R6CS5LVe4vBoMx6Dor3Rm8nT7AfV1RWZJ3zyYnbemFcTP3omVjfKysAyhFnAdZ4cWw7id8iwW",
  "key22": "5vP1Q3eS8DbHYikUoyAz1UPpfoETgqzRpYsmqfStkNWgjmuvpEc6Nv16VA5vbVz93U5aWJjB6D2wBkSNVi7JyZoK",
  "key23": "2xSTeVrZmhSpGGA9bdXVePeByHJoqkTtKYh45FgcznS8jdZLcsq1jwvd9h1U9Qiq41AThV9NWEug3AbyZwhZSag6",
  "key24": "32g2QgfcR6tu3UAkCAB6sHmYgPLrCYkE6VG63h1TNpaNzUKzEktf2oM5ChfaXLzqLhCiDZatgrg6tq8FpsKkfDJY",
  "key25": "28m6sxw3Thd9u9gjyfa9ffwCz9D4VvLA32dYeo3kLKzeGnm8ZKMfWrCA7AND55VQ2M4GXfUB2sKj3iSBQuJkYUe3",
  "key26": "31P5zXzhvkPzy239Ffp1nxM9RNQwAv5SaVaknv37cQmEvAztWgeXX6zfGCCwS81fHWtX8X5eotTZYdU7mSyuLCC2",
  "key27": "3amsoHwvmfvdsSPoaH1QimzbzXgRaDC7cYzVuBWpdWiZJPZuJa5qUXe8bwMVZNYnNLPXNCjxTzDuG6qiDJGv6FvL",
  "key28": "4nEK4igozzQK83jRYr8v9LhfvyHUU7KvHVxaqiMZd3CY3Hrkn9J9WUeqGjHpwNqxRSBiTsVxzXnDM1k5UAQYg5D5",
  "key29": "38NenzByDix3BGTjA9ByMDjsBRopLkE5TtXrY2oMfBkbMXa5RNDKkWpWE4XErdZ1off4KFiZTo3T4S6sTTx2NyJY",
  "key30": "3fRh21oRM7cGbbWhccBm3LA2spgLVqeAUSxedpQqfpbzhu9Wj26qEXTE63LqnnpSHLEyefYQSET7NVXiz8DESwa5",
  "key31": "3uiFx8xLjU6GmWmsVsVeqFBTHhNeHCcLXjjaXbbQ4xbnN99xdYSA9rtk2MhHzWEqJQQSwYDhGDH8gqQs5RKMTYeq",
  "key32": "47a5cUAHJnjTua9Jku8d1swCdyQjxv4AYunAiGzqjFefuHiqPxD8zkmZRpAr27JH2AW2QXXpeRc268XMNmHea5Pk",
  "key33": "5rrs3zHDJw81K9foadLvZ5GqofpukRgJTyNJACpZXuQrA5gS4C6JsM883xiAtc55ujNFNRP1qAw4NDGXJr2aSD2L",
  "key34": "d4Y365QZEs6cQxdxZ6ZJeALdz3M4oWeaM9GL6EuegoDgZVUpT6CZ7imZuf8GeuxMahtw3MTRL7i3dLbjRUWzSWG",
  "key35": "5EfaKRqBQEutx4MbWnrCxZi1bxi7exSRzxAwR5qs97THsTRPNnJYi3jeyWVCSUaNGdVobeq16CLSVUgPv8vBuptE"
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
