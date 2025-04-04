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
    "2GqmkVPCr2bsaHG7oGhhC5BnGeEQDHTvJhYYEWSDL37jtFhDkdHSi5p32bdcG7cQtVdVSeHLgrMn8EZXXuHK3MpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mzvjzHCWi5uFmRtuyJKnG9wb7vvS3WdNSgKs4dDgMMrY2cbLq1ZEi6zwg5doWZhJc1FY2GNcT6Njyc1Jki5J2sb",
  "key1": "5jbDhAvj3sbGwE2yQwt2KLpAxGPykzCa5ucS6wxzL1c4GC57NX8jYa2wkR9fxALprBjthMqg9GDBMihYg3YgBT5Z",
  "key2": "4WafYjnrH8Q12w4CUi4GoNDET5y85c3UoE4dzVBFWd2eUBRnL7YpgjE9HgERHpsuGznBzYA6kNZr3uDw2irUNgYV",
  "key3": "eCctaRYMF5CRgfBB1XW6C7aXKqaupSQ9J3goDgS8cSiHGq5r5z9SKmZHgk3mELEhUP9g56Hz2LSPuvCFX2mKRRz",
  "key4": "2AcTgZ4jyMUSqV7D5VGhX5fQtUzdLfMg1zCGCtKMia5tGjLVCfytcvi6nxjyjWveAC95APFsUkjzgucJBuqPhyA9",
  "key5": "4Qk6f6FFm7oySbde4T3qMpXqEpU7fKJ3m3uSQG65UAAfd2J6u9JTD8FsNXD6HEP6pjNkRsM2r5UeELk9HN7R6nqg",
  "key6": "2jXXZkuTg9LKnDUH2jbK8JPEvqwQUrWSviJp7rGmbhdJh8QJZt2pYc5vKQnch3BD6yUREcYf2K9doweXcuJF6qLD",
  "key7": "5nXrW7RGTQfXaZ8dpeWJDczGcKM7wt2BHazP3UuWQmy2wStX7MqXp5gwCrqt5hrR6pLzX6hWzPSaTrL3kDMCruBj",
  "key8": "21YNeXFoDohtfsn6jSLQS5mrRGCaY3mKdLkgNkMdfsjnKbZ2AyLjUqvPZoBcnofoQQ9FQPoc4oJkimjXb7bjuwGg",
  "key9": "4YmdvbdCshLy9Wz4SHc7pEZSzwXbav1GXG6DQwRgmoJ7PymHrVjiH6gG8Zs4iSKWfqBxskX5hGYn7Z7fkyfCq1kU",
  "key10": "4iw8KEJX7X4B88ryBEYkevzW82u7rs8WyKAGMhvNgyKuRAan4N5ZK9nrw7EZTPbNn8z8yH5DJKMFTheuTE155rzu",
  "key11": "671BW27myzs8igqZw6Pex97upQNbRWCvkxzMNHVnpfncuHobKx65W5ixczGzXGLEwHJjsEmCvu17npomeYHwYVc4",
  "key12": "31Q6t154deuicUjXEVp2P8R8t6UkuQgX34Z4FdmF9vXwcRHt5huRTV9iygnKjCfHVeqsn9rz26mLwVL2tGMfw9am",
  "key13": "25bKMAQpA11EFgL5v61H8BwJP33wgvpvB1y2gdb9Zwa5fgVFvjkfX6cCbVsocycwCQUe1zJBqFVz8NM5V3iqaesZ",
  "key14": "48nevZjP5VXYzYfQwPhFJWs4d6rDd1AvLDWEg7uoiRk6NenYi7qRUc8dGzjz63up3Biv1nSiyoAYrKE986TuTMUs",
  "key15": "2s7N5iaXwWMunY3sYvqsbzzDWUDA3UX2jZKiPDyRizMdadRNLfuy17SBiXwPUCU1NZ1zpafGgx8TcTaTEdh2jEeJ",
  "key16": "4darNdHNhhrvMKBRcD8RmuCHmPFW59hpkdprZ3axxPjov6YZDTWJ4A7nErdJgPX3Y4zLQjpomxuEdPu9LYwS4eLt",
  "key17": "4wr6GHaKTbStZ1UuxcC461ibpytGWKc7tjRq4UrSKcGNn5vLzv393wWiMK3iPFmnPYbMkTNY47zzE5TzAJxmyZSt",
  "key18": "JJvsG4uomHdnn56Bo2ffcx6yNkxGM3GbymFBVRBye2jEe3Km45uzfphTMm88MAGVejnMB8ReWtBT6rAnF6CzNh1",
  "key19": "5J3hwCFxnsQYo1QBV85vwcewuLfKuFd2ScyAkSLvbsYmQJFWD3USPs1eiGsACPWwL7PDmje4sAcuH3spk5sUxw6e",
  "key20": "4b8drwqS1zHugQ6gUeLDVu95zfhkvpQTUJ8KW5MC3uDFhHD8a9UvwJ1yX45bAY7vws4HaizWb9esmntpxACTLuzc",
  "key21": "5kUCdRmvdPoR5LfUS9Hgw5qe4Hor7BSLJMoJZywzutf66yaTr9NiqeeFxyKufVW4GkWWDmn8XwZQt2Zna7s4L9mp",
  "key22": "2mYVmsnBot4yrVJrrYvwzk8PFVTusFgPGHfuHLdLRJ7exFgsDJDLehKoqNCx8ai1a2P1zHp457Bv6sGgiYrYihQv",
  "key23": "43dGN9k5hpbifFSVy8v8CirprtNv5fvJ1PSAkejuv6uZ8ShfFP6Cb3Q9gayvTWhs5hh3egDEbAt6YJpQ4Ae8swpQ",
  "key24": "4kcLH5uXBCgWJV6bt29xdfBjBEBS6G488N5oJUhpEXfryUHjYNp3bjMksZ1AmmT8sPaBPM5X7UU1WaMsZi7wmT1v",
  "key25": "fyy69E8heZFwMzHDVpDgZfV5KN3z4GaHfix6i1bDHXFXCfDW9DGSAA3XfE5wU14to2QBSeCWEBjt5zqFFUW4x4S",
  "key26": "5Db84J8UyW4rX38RAiDjtGocrYP4SfSXL1btaGYFNAV5x8X4kuqQ4JN2tAuKhDQBRsvf3PV8vMZA8zRseow8ckbc",
  "key27": "4qw4aRku4x91V5JFgBg7v5dBtxR2w2tr8CLZ1SfNcwYiqGnpTPLaTvP51vXLq3PTk6KW17d8VwcRJeyUVwEQvhvz"
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
