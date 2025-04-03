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
    "2ueLYC3axWo7htc1DwzT2rXevtsmhh4hfkWAJnq9zVdKpkK8z92zW3QpifWtoJs4WFqV3ccV8n2pzupJKUjgpzs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51BbfMhYLV2wRJiJPJ2mcYzCGyCQhkLTcLo46XJDCVLsUXjXoiaZhcnU1J7bciPhx3VMBrnucCN9gCisFrqG8BGv",
  "key1": "FbCjJukdgH8FMMdKfgBJDCw3iTyPrAgFoNXewrGrh4pPs2nqAtSB8mg8m4GJ5XTnfsyQmTvM4Pt1eoYEN5cvbJL",
  "key2": "3QmNoGWnrpTrUWtZK3CxU78dsknq5FwvkVrJQnQu566HGgTo7rUqsTvGPrRhQYZ1eE4jegy3Y9QGAHf7WGbzZX3X",
  "key3": "3vBSgTj3ARmJDkErtJuHzrDW6Vz2uBeTKwEHxshkvKtGX6mJAxN69DV4JGCPfzYfFb5ZpfkXDxXaXYNGFSbCmVGm",
  "key4": "xBsZW3CsYyawMyE1UUHYb4KAB7uKDYHGVRKs9FxNXHzwrVVt5MuuW3A9wZRXPtADMJ5NNkwKT7AhgnHdWGx8GPu",
  "key5": "3GRsGZREYjq4WNa3aBJZGbCN3QjMYH2LpNM5hsrKP81Zsv1yoHqfaVBRYENAi1mqp127VWGGFESDkDomnAVJ64yk",
  "key6": "5raahfaMywQLkU7Rw8Jizotn2TJXEhTL8ktqY7rFrgP5MieEKHw5c7KiMJu7jRui2VruXa54UJyCGTA9dytbzEFM",
  "key7": "jYdKEuReF1ARrdqR73XcsdcNAF3aUqqNFr3HNgJ1gVh15VkZyjLasMBoTJHXxkPc1WtvhjgMAr6ZrVhUhWSqRMh",
  "key8": "3g57eBozizBQxMDJ1y6BtCxHorb9ETgKGp7SvvCwmJafR38u1mLu4qrFww7KpMNZTMhMVJbujEtJtC1YxGMpjqqY",
  "key9": "3GDcwLNqpc5d2N5UPb7uQws6236LCSiKTDWFnZEpxsERVhhPFdjYozJAS6UtBmzvbao1u6xeV9CHd74YsW5miS1A",
  "key10": "2Kd5UeZn367Kf9YTmogXaMZ4HH5e9TsgXDcyjrRtrjTMuNa4dA9fCwvCS7Tc9BdEQSm97DMpTEtfvuDymze2hSgF",
  "key11": "5jh5uWJb424GUwUs7aPKrKg5vVJyS3mWcQNAUT1Jaw2mDnQ2PbXwKqHKdtWmMeHukbpKUW6ofEbwYLdsTnWUxLrS",
  "key12": "2shHXZEZ9Zd5KMhHTtMYXkNMousvH5xSR7C6Rn83m1eBQVLvQbf2qistyoRpQZ4TKWzaZgZEYNzBKm6GDGM9VEW3",
  "key13": "4pWnpDSPptqfof6zioYnzMDdUTEUaNnhT8dfJLyRhy6QLq4KUt1PrcRGdz9amFsQnn8qbifmQMdL6oY7yWW5Hxeu",
  "key14": "4uQ5GdBmv5QVZbCimXhdZKoCwzcFZBBEgbJcnaGSRsEbZJqTQHghBLdE73LpvMrKVMuajTfyJDMHfAcitbvoz3Zc",
  "key15": "3dqvAADjXJJbCFFKq68iqpTQqdDHYsggcoZa8mssoRYpAmdN3jLG4Wocs29serRg8ztctTuqvbi5714aPKVSDkxL",
  "key16": "2eChcUp4bSfANFdxMeMLiDqbjhREr151sGptunoaBhwY42bjHAXndLhr4k1o4i4TAo28cFd6rQXRTRZoeVG8HaYZ",
  "key17": "33qynH7YH5ZGMskPNmz3YtSY4v85TPEbW2FWdR7cVdFHmEKY88JNXhrKyxsidFJecuWjMk44eRNaVatSD7wqU7nn",
  "key18": "5hXjKYd6UQrSjdm8o992TvYZyhSECuNFfDRQXndiNS8wEdQnanAYKDinzdbTAS9ecCYT2pEETKfYMUbgMyfPmoyL",
  "key19": "2BpFwaVTowY31qvJbRfRcbLqejssS1tjD8XKu3xYvJ2FdMnbzowz2kGHjSoiBnxhxj3bjnEZsXDH9RAfHqhWQB9b",
  "key20": "3Wfg6KH1DwN9cVm8FCxL9vxEt4EABKVvaXetREskwJ1UWQAZyDxX2g18ZnYbCdhMvPLJk5TLqAyfpsWczduVJ5JX",
  "key21": "3JWdtp1wNseu1nWUkPmLVhaV7zmnpsEvFcY8wcwmXUGTmDViGsUTyjpDif5hnFze78bSvvakuzENhDuZ5bKdtzZz",
  "key22": "7QmGWEGVVWtM1uuxfqc7MGsYooxyFFZESXK2qrHDjGxFRwsZNPwQu4XBqK2pzFsRUwk5B6EhasVFY6w1ju3e7R1",
  "key23": "4Efzznb94hsAjkzeQfb7soEERyLoyCdFo6GTcikKqYZ6xNZhLmAHfE9A8SiWndznQXY3rqv3wPnQyUgXWe6zNXBk",
  "key24": "2JXC2AbMto1p3KzuvwrQdT5NEDh5U1ibL32L7ghqixvHai1Z9BcdD8UkgdCywK6PbTf9BvZPsQxNAjdiYKu98D9J",
  "key25": "9CDn9oA44dZ5B8iLxf3i663TDPaVsR6ocnHbkWZBwn4p24MBzZ3PEPnaXjE81sL7weuDWFapptxqw9AJZ5mA12X",
  "key26": "5tvDBBxPBRYSBmk33Q8DC51MR52JfGHLD3DU3UJTNXTkuBTmLeLrYfvgw7ycRoKMm1wrP96AGME3qpJx2rPYMCXm",
  "key27": "4Wp4vBM6WYcsPqW4ur6d6SPZPmTHAouAPHV7tBZPZr2AicGRWbtzuRTF5PaXspfmpZQgouvjU48cZ9oHCH9SQfp9",
  "key28": "3gCELGfiGtDg51umJQTUFwDMDi5SJrXKWCuigXgiqEgr6AAGq867ZYKfd2f4XFNVwQopKMw4u7M3sQf8WGdT9tmp",
  "key29": "3U4suUAmjsBjmDXNkJvi6jPK87bPpuspanrC5STnPxdm8b1CYUTNr1et5iWGPq1JYeRYCdRMs6VML3vngDk1K7GQ"
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
