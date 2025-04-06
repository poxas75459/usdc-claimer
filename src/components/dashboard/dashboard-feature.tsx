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
    "5cHMcXnapacX33u8QoModrfd31nssxUHYjkTB7MSirfWY5hjALEPfxQKXfh5nae3McX7tAiot5jUuAckF7oTqFZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sdf5emBzBgsCtgmYeQeyUAUT6ghYr782E2WPm3Vb9u74nNVPwREwVsyncxvCHVEY2PreP8XS8KH31wYw2cBKcUA",
  "key1": "5YvPi45BLgSfP78uGRGZXkAfFfbmEKMshgFjcwcd2Z7VbW89brZTX2djpSnFzgT5dFqsR5LNsy19fv3KmYaVMeD3",
  "key2": "3vGZkHB6XGCccbGqoSvrdR9VJ9jJzh9Un2ww7dAefxmTSTwJ52qmqf8dgEsTgA9TgYBURXiejuQq7EpL1VtjRRRZ",
  "key3": "5ETAWAKL2BAC2iMgMFwrdBYYjeoMmfhhvt3QihbEZZY1F92U4idgmYuPmm2RLJU6GAGhC2fW2pEPzCefni8inKTq",
  "key4": "3FHZuxHP3XR7oecrQgEMLfBNphhd7hiqKFUUUNjezJBgqSpVsM2prXkDg52TTUM5Q6wwEKEFwzui1VPPwkqjXLC5",
  "key5": "3EpJcfe5yyFehn8n4N4UDrkVwSD1HJQhbD9FjscoTwuD95tnxYVBDJjZXcsr7r28b7xTgts43EQoJd9LAiDx81fc",
  "key6": "3ne1Bb71Tb8RDBWGN1FhpCXtws9kQ7p8dYqLuDF8xnomre4hbp9sRD1r3J75rCaGR3FkKiGRKjyNPKsKUi7GAqK8",
  "key7": "4JazW4rRZghm2ZaTWK3EYt7n5gN5VYor76F6kwGeVDWqzXUg75ngLWoCcgLeCqSbUqNRev9kjJcFa8y3fBS4cmg6",
  "key8": "HYxeY94yignxd2xZiSx92BgFoK1wd7WpBa2Mn4buP7fJFvsejmx8UHm2QzcYgQ7s9Zg166HhSJdUi83qt2VXGJQ",
  "key9": "4EBxYRiPuwQNBGU3rH8pUZgGzKMUwkfBXbZbrjqiPAozwT9jnMNTtCbbMzYTAg7o1hwuBATowXqtNyrCBEUspG2F",
  "key10": "5PLkiRPm5ytb4eab3sQPcLekKiHZpQKm35QWcKUjPAgXPP5EbBPDuyq91to3T2LWsHzUQ4TFN4vkME6i82D3wMo8",
  "key11": "5bpgH64puHNgda82MwUuLUpj47UddyuxcxJA7iXJLrVv4iUVp6iKKmMnsF92MBer2feD24z5xw5nbpTeYVBBPvMC",
  "key12": "mFqojK6KrHVm3MiHHUXyVuaL7tshWRTRbLHbsTGdMDVHbKJPuaox5vgoxHM3MG3su2ExqSjTjAhBHMEVJe4uLU2",
  "key13": "244T676gRmY4fhkdhLARqLzK7tni7Jez1cKJAjQntKCdridwLJ4j4vLdGrzJDhz4p3BxZfXrEKZVtPjMVYkGTaJX",
  "key14": "EGSBewTP5TVo3RzjRHmjxNFLiEafA21ULYoYqzAbq7vepUQmUwgQrjAxbvMx2HXnSunWdQyyG2cNptXm1UzTWEt",
  "key15": "3yHB1K6aj9RXzGrx3qd9Ne7Pzbqt8gWC5EeYh6AtoZWWUVBFteXBdjkhXy44pT8dyJgG3xGB7drb4iYfwjq2JD9m",
  "key16": "5Tydao14f8Xdf7BAFd37jq4sStcWnSQf1Lvhm9Nw2e6epqRe4nFRgfUfB9uVhtAvD5RzqiePXYNVB6zpyWxcmDNm",
  "key17": "4WJ1vYf3sogRZm3wiPGd7G6z728tEY5pefEhJEDMjpaEJ2CGQ7cBGWRyEUAJcBWB9XEZBSXUjT1WsCUEnDJpnRUL",
  "key18": "b1tKxG5BaHGGPUwZSZMaJyyL2vZ55FFtQvxqBQSXydBqLEFdzHZkSexnWq6pcAtTgSkMMgCeQWB7BQwtzoPTMg6",
  "key19": "46n92Veuw7afQVTkVjboa1cKq8ZYYMiUJo5HK1GDG1ceSYmchobtgDFHD7SVJTDrVgMPqCNpAZj2MTKgXs4EbdMA",
  "key20": "zc67QPJAkfoLpnigVfBoDaiwE6QhBJa3kzwd3BWmiNg6tMs7xevwGRauRySjh6KEr23qohBgthLhabEgK9sWjFF",
  "key21": "3ZgLYrFpWSQQvv9H3PYCDhTcoGwMuXEGU4iYpzs5F5vkwUWCrgSYZZQe1TzgtukTvyjdHBshy9NhjgDuJ4maZwD7",
  "key22": "5vEA14VMbJPDNvJKV3EDVjFB3owSRRr4h4SZyuAsuyHXJUWhgV28qxcdzWMrfQ6ETCNXqCJ7U196CRYRUqPQn3eV",
  "key23": "5BPeeKFY9C3JaQcwV2JsxuQzSdgjV7bjwrEBb3enBoqzfMTi3o2KqYd64mK7nYVCNS2jpRwHvH12H7nPvpxtawHJ",
  "key24": "5kYJergMEayhM6Q6SjmfEBWXJRJaWjYYDcjXgun5ZUneLbegT12h8Y3dEdsh2YUEKuaXjCoJNqKc1LNwHBBTxSkw",
  "key25": "4sqwGh5WLHz1ZGFfHst2pJD25buJtSnXbPrfSW6v2hTuM7NTHrCmaEbwKFkBzbH87TAGK4meaEQvrZzZgWyuWgC3",
  "key26": "2Mmfcp8anydKheRpYp39qZMK7GQtxyEWviewXxVxWktoYjMYR52p7cStrabhLgW62FhVSiLUgvr5QQ4u1oAgomiT"
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
