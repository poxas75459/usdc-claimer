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
    "5P69Y22P2hAwyzqZJa5CpZeLHaHToCU3bRHqWaGYWMrBCNRCzbud6Nv4vK8a6KagZKioMTRrrHLwtcSaiNkCA3Fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b1vfrZcfXSkhxnYAd3BQjJdKperz5kV267rUqwqVkecA1pR9kAhiLvdvVdALQ1CN74GT32bWZ9MorM77WcK6UUg",
  "key1": "2JWF91UxKKeK4aeZ7L8fvb5uQHW7d5mbvtgT6ZMacdza8tS5ZEXhvyud7TCAv1phjKWfdXbEA25Mvfm1ycfUacWp",
  "key2": "ibRsD8FmkkVRvgQ1nXLRfD64YVAfWRobxNoGqgMvSuCxi2aH2daMvMoHWDsng6ZuYnR5dXvr3yij18xwJdd5EGQ",
  "key3": "chFudvbACqfjRfY1UM5CEC6QcBjqUbzptDoTx5vkWKcjGLT2LbdyAbC6EKfuZ1z4qVzr98vEv3vasWmrbrBqHDK",
  "key4": "9GsMk1z4e7jSEP5qoRLcUbGX486RmFaQvxcyLvJcNqdvThEfKwR4oJENQVDDzgw8oGFqqVxexQTNLSQGA1uvok6",
  "key5": "41QY1fL3RBRQrB675cv2NwfaBaFcf68vKjpannbeN4ytaW2Uf6cdwA3hfrvQdSFaR8YSaSTpUsPaS3uEK2putUpt",
  "key6": "2TvuDYz2ya6TVSYSCLgRD74LCH7MuPuXaRV2GLeg6bMcUec1BR1UeoXuTp8VhuAxC3dk3Hz9S8H3S8KWRanXCZnz",
  "key7": "2W2QZ4Ky7QPbTkL28SiEpKYxZkqNFC9BQDRSAWma6r2jqSBpCfVBMyaER6mr7cY4F17Fnqi2esswLtXqLv89NJmi",
  "key8": "2dA8CzJbmMXReMhMJ5c6HhVW2ELLVm1BdRFNb6VZfZYdCBFafB2aS6o7vC4rbyN8rBu8agtTU3DAmSXnpcm7FKrU",
  "key9": "3a1VtsAAkoXFnfJ4Gu1rJdTMor7UoDaSqq9hsm4TiG8vr2nhSofowkGheFeE9piyfGW8BnaBchLuD9k2AMdgJz3D",
  "key10": "8M46VQiZRzmhhH4p71UWPs2erXb9vzkcShjAi9L4bKEx91Gwvk8UnvdVoza63SvAssAscKqe9yuUpVy7TWkNYsK",
  "key11": "3tGHRbURErKQwzTMPwgbHPD2x3ywwjj99DvpVjU5MM2G514HUY7Dq3J4TtihSBABQqb1J1SPCfcUtgEG2JKrSZ9w",
  "key12": "3fV29ZxJEiNd88vW6sfpf2J61wLLM9jYXp7Hx1mLuv7A8m9s7KGwuqZ8biUT5vvCXPHocjSUizjY7JvrJyKULBah",
  "key13": "4E95dUphjvHrGSijAZjdGKoeH8qjDdRmJkUZ8FxrVzMKeaFqwutPSxjuXYhpgJESefPZ41rZZVkXekvyMJzTV1FA",
  "key14": "2HSJLUci9pcwCccRyBPJt4pChhgVWv6p6ukUayN8jpabRzPcMFqcK2eWztb6rhkSTqAg7B4KVkcJF8kapYxJ4L6J",
  "key15": "4kdPYXo566F1e5Zbv8nDbXBorVHamYyPYgMKgzjtF89QhGZyDMndXNN88Z59eehrkhEhJgKxuDs9oHhuwHnSDpNK",
  "key16": "2WA2wx7Q1CcWcWbf58sJkVAtmJwWXVFWEyBxWQ1JSQYdMyeUKD9sqq7PBQadxgRpAvwARRCckPeWrakx1QyKAvzL",
  "key17": "3WDFBBbC92a8inoqAvNSYawky4rcsD4Z25pmZ5pMFRWr1QGQWKSjuq6jFkhpf6a2JkR6EZxF3bV3cbjAZX9VXUA5",
  "key18": "5tcEvQXf1yh54Gfhq7A1coKqyxdNug9HLkku3VZMWt5Prrf7qySQ6QUDeFFV2keFTKvgqDjkv4xpGEdRRND6PNHJ",
  "key19": "5c7367xWgxHDejQUr7EeNobVueaLRiysznvEN1WweH8jVqp71ByXNk2Km1oMvtRKJ7bSRzR4KueYrPrbL3DeNdYP",
  "key20": "3peaVWcDU9c87qKEsgEqDtUQ62cMJqwCEhQ8MSiAdAJCTs4TCfv7d5fRmxqfkkgPMuDR3VsFXcVbzhE9QPhEgDmr",
  "key21": "24q1nVXsK3Z2MEyeaTFMu5NpTpGfhafh2Y5Uhjg8ypfdh3xqM9ppiRyA9mq7z6vbi6b3ithaybsuthaLzxv4fptP",
  "key22": "4uyDvgYzCprFu4deP8uanszgWpJaMKVL12HDSJafLkcNkx3DBwCaNtRgafd5uvuJNdsW4rVGWHQLkM5SyASmJHMu",
  "key23": "5Bc9wXN3qcQm42cCjtAtu8NAuso49iT8EegFymVqREG8nhrkkK8VaYVExfVianpFEivjj1A7djc4zyBh7c2gTNVV",
  "key24": "2NiJqPWgznFCfUGwFL64ueRYKbqRXY9KtFRUghcE4ZotryEK1XMv6Qz2sZ6WkJupYjBiugX7z49zCVFds3mABS1A",
  "key25": "5ZVBuXD4BtMe7ywCSzUgud5MmNZLXgBEWMRgNCeoCLMbq1Zf75F4n1rAjBfW3N1SgY9GP74cgMKU5sQugS8fUeri",
  "key26": "5gEr866ke8f67kD43Z1HABZs8CHsF3bW5Qz64XKmmQRG7hAHPJKvK6ZzUwdKh69Rb4T1H9BtAgtCWfWQ5TS1JRWJ",
  "key27": "4igR2YMdCPv69wC1DkomtYPPA54vKcGbHU3ox4TvhyBHqKpApN7Q7MDozRZ3PJWKsTdYuQ3eQzcXBaVyREMkqBT",
  "key28": "25MM5ZqCyxpNkAzsUqueLPTVmyF3pYidNBpnmUTr3LwzzqW6Q719u1ZciSnH8Vt2tSu9EbhZMchvBGAqHBEv6fLf"
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
