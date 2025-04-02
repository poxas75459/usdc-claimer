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
    "4EhN4GAH6qsBmd2oYAmG1dX1y2T2739LFViqDQKCASkpnLJimPiyed2xBm31Z5pUfKapDBhNag7KbnbdzDjV2exr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zb2x1FwYYiBcX2SiTmSW9dWz4y2jtzoHGKoSnGN4qq8pJuKiwix6SV2niHJuezwScoS5ruyhUz1ueCk3aSZFfuG",
  "key1": "5r5rardCiApbaaBhzKj2rNByRnwwRAvagc1rUw3kTJHJRUxsa5Uib5UVzrouqd22qKGEz6fqc9Kd248wuNKbk1ZU",
  "key2": "4VtaHvEnJdXUuxRTHQvqdBta3KMMyz8x1oU7W4K3Bjji8dv6ro5vLDQZz6dnKtY5SAwVZtKQsxqLzGt4STJ29ddY",
  "key3": "3K4gPemJACCqvSu9sfxvkPCfGB6nAgNMhcxeKZwXMos6nSh5P9X59WkVRPmroA2bARoTnUEf8VYuPdUPjM35wdWK",
  "key4": "5eioNjVLhMuXaBz2vpiJwyqacYuLkk3hqALZCQ5BGT4uYAeSrPU5vvNDrr4VYgh29orUz6Txi6k9124DQCaRiCRy",
  "key5": "5YQzgrQ65QQ6QXQ7yYyjp7jrH67W14X7TFbsbn7EczEjRVLL9bYXF5oXo9FtgYWgdiP6J8eCQb8FeWHBtxkjsGJb",
  "key6": "51eN1tcoMM3KWNpMqgbu28Uu2iycKX3VUMcKaWsgCaEh7gBW1pK4byC7w4nVYCQ3ZHhCQ9sx3cbgXo9uRL4Fe4Ha",
  "key7": "pLCwgCkxWiyC5R1nJQvH6AJDdYvfDUG6BZJVDyf4qZgZ29cii2zuUE9j2wGgheG2SpwNmBUJsPVuzD8RpZz58dq",
  "key8": "3UrBS71CkfEzpueFk6SWvXypBuhVGHE6c4sRkUsZwcoM8CdE5vnGfxcbVNTVGzNEWkQzFLAP19EQ6Q794jhLA9jY",
  "key9": "5DCo1kw4cAyAcCBHsPwEjq9uWSxLgjAHnccQyJkU13owPjmiRa8k6Adod7vBuV6ErchjZVN8dueUXA61hSAEgwrs",
  "key10": "2qGmKWCZkfYnruzwxUf8mdfuBQfZnMJQQWkqmuh6QNecGwhJazgx4LuSwiopxKZehF4SxxhsUZePVzuuW4bh6yRb",
  "key11": "5nHz6QQZdFzfGGsje9KfYj85wGr7uXVzoumZxG7DvXKpyrAvA9uq9qGZW12khHp592Tq1yZLYQ9S3dWcacfs6tri",
  "key12": "5LC8f9MmMnKTHYGVuDG3ziteDEyNRBeC5kCJfzQTjZWrFn93YNJ3DmcrwvtqHik3K3zztVdGLxL2BcTeMa9CLyAp",
  "key13": "ajtnuh2bYbsL4XKwqbtcw3Fx2gCQrjf41FXcSJfZjkuoZyVuuJq7ABqnJjMbVA39hhFxvHEVgsafzV3A3en1YRf",
  "key14": "23tEFhHkz6UB6ynr87QuV73k8XbfRpPEkR9k8xZdsbGz9PJJRA1yoAw84tZCh4FzVsMu4aYji6S2nFXfp14FuMoU",
  "key15": "3fumhC9P8ykyE25Z6TvBmnkrwTuuhrBhbWrQSoWoDgviSA4GwUMgLoddTa5gHXtdLPPg2vU4EiAXWHHaJpCAsc1u",
  "key16": "27McuPZEkXW5FHB41GHdEfZmZ9fLgMu5befseEcbhiqtcqX8DFuG7NZTUBZP9M7C73ZovwZ9NFTBw6CfvWAm5ore",
  "key17": "5K7onw2jkJisAqkr499HEERJdm8LTRNoEeNsN6sbFXiFm4yssSgibMtkPHPAbf6fLeY85ZRSB69DGJDX7o9TVsH8",
  "key18": "3kGexzzrjYNzfsz92BqguMsyDDgfJ7f1jDePHFwVKttByBBp19hQyn3JeKpJ6cvoFuCEzcTjuPvEN8bWreo9THdk",
  "key19": "4NeRv3FCSxptuyUR8gpeD7geVJt7VHgWK1XiTC1sYhAVQKu779PrpM2xAdeLy47Lx5eAwaUP5qbzAVN5aAYdDjcL",
  "key20": "477QVdj81CmsFXECMdoR4zKra6GUe4fqKosW7bDTTJv419UbzPDFBWF6X22uDyg7LXbKL1YoywEHe6eiEF81XBep",
  "key21": "3spAsu1NSh7ZDfdzfcfCHEStr8GaM3r7KciKLXgAWtxwKhPWBMYLnkx22wsAG5TymfoSWmvNsdTXWVLWeKfnHHav",
  "key22": "5KxS8cX5QnDFYdwxsmJ4dhBz9aZ48ntw35EeSMRxwmZHrFrkWJH5vpdvKjjYcYWjCQfk8J6j6mbsZD2v4jihbYAS",
  "key23": "3vW6W65Y3r28GvscfhjV7w8h8nXcq4ayW5FjF26GraApaYQTVZdngKF1a6ZpngqvnsVvy8BpqzgMu2AmJJp48psd",
  "key24": "4CFCHmkunJMQyADn2ukWVWh37kbmuXjLoy4dTVSJmWd5Avvh7ZGqLVMUbPaBqwaancui8H53rWHyX6vCx1vDL54Z",
  "key25": "3buH2d7k6LP3DWQRTQKQ56HW2Q3pc4NGbvf3NWZe5xPggGpzviCBmMB6s5PghYMDYEWPevW96aFX3C7fESbgioTy"
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
