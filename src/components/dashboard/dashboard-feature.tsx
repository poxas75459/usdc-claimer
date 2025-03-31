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
    "Fs9HPs6urehuRyFjGzSYVSqVg3WN3YNHFDZVvNL9SKLpH2JgGz73i6JwfJEocmBzWMCrbacvQymr6VLCTjfnSJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xnTHGUFgCa8Eh6sdmp2HgMgaASWPhj6qJMTjBHhtNpqQj1PGr3f67mVXMbYGo93HhckgQ24QT4FgZ119wn1gSiP",
  "key1": "2L961dzEvDE9W5T5KNEHPG75coKCVgbUXwukQF5Sbr3jqkt6ujA2pnZj7xyDkSPjE8NPgkYcX4sdLDqvMp9YNwkh",
  "key2": "2eDuAi1drcndQ7VCJpGsqa9QuquJi6pbtiYiEGc6CNE6cUCqysK2bMvK5JZc9JHnZX6PVMmGHBUdoxf925jLkxja",
  "key3": "2JeR6342P7xS1YEdsU9qxJ2vh1JK2YRbsGWrwa5o7jy6ov4ary5Vq35JWJrUwHzKagMdN2X3FPSjucTiU4HfwNoE",
  "key4": "65kzyquFYZdoV9JEUfWQ1AcTxXEzAYPnZkiiiMCnJcGW1kjHvtbP1a1bn4yubtBu1DANqysd2CNKZawMGPBCnyHA",
  "key5": "3TULitKJiBJq4TnDDGLbnJHryu1jenEmuwunZgsQykYEuL2bkduAq7rV7x7tF6HNN7u6jWrixZsnPcK44Y3yWGt2",
  "key6": "5arKzowYUpz11AWgcJqFgRzDZn2iWdWLxbxrUAFkfVKEKCKFHT5qu72ixHpxdampKSSp3xXmmizQ4kxX46DeiiE2",
  "key7": "uAYauCzpSMSTcSvrTFfeJPBXEVJZNdfHbqunC72EozK6LeYN2UVbczPDVg73Y3dsHZRri7KL5mq9WcRMMBFzrib",
  "key8": "2ci7adTQEQ4pBZ37js7oyYvL9stLKN5dE8RRCmEMH6Ptke3vdTbSU5DT8rijk4ZK2cYFD8meZA5gKLxJ7uA8XABd",
  "key9": "2uygaj2E1Yp6hVhEZ2bVaARWBrhPADEm9ehgmdg1pgPLf9XMd5uvLuTLiChiz5XK17P3rP5oqX8GTixb3JXiJZrD",
  "key10": "5aNeHyzp796ajapZR5Wi8zZXm5RTaX2r9mWZigqBVVptHLcbhksoBjDbtyqbbKC3RAX9ZpnKrbNfeSS8zzehqPNs",
  "key11": "AruVuen1TR4jD1c8nqEEBT3nLgN4VKX5C97fAJQnMUPGprnUc9Wzp6c4Wr8wb3j5nN7KXaN5jCnNCnNkksC87oM",
  "key12": "Df7KH5typAMLehHmQ3m3fh9tUKZeE2mLzPNrcWv6ucVGKpC3y7sAzzkspANn8ar2ZdcyJ4nK3EdryDrxC8DzwLx",
  "key13": "FHV3YdPEjRGJgg9PAZY8gAGMtZoYNpvsxwQXtrwWu3AnpNZhYGbNnnM9BnKTUpmejxsRVWDjR7PUHvNqgFAAqGa",
  "key14": "2ueqorFRGSp3WwmiH7ZrZY4TuCAxspo9LXJUey5aSamfedYNpeXULuDfaRe2WCofgeDTxtWwqXYNpXtUaq1ZHKkw",
  "key15": "4eiCFe2GCuvMLpVzrtCnCLXL7Rkb5UybGHjoox8gEZ293xy9imqXoJoxAsjAeaYPTeHP42Fai5xHvRU4FCYLjaK2",
  "key16": "24qz6sQCBSMwuvEacVcschDL7W8k3AhgfjBAz2HtAVj43nJPTeKtfCdaUSYUr4gFf58AYk7r2bCqkAU2AS3edQbp",
  "key17": "VgNPbyUmHDs1ikEuS9wzgEaoYgQP6iG5VKtDUE8Zg6ht7LuPZX9pbQmaxshiHhaxK1btTyhEWZQ11LJJjt8ebbt",
  "key18": "4JM9Q5e118BFpCUyPWLxESPSUUMsv8aLf3ZbrVXkK79hi485CQZEkUHfXuQHh5waqmoAAwhvicb6SGejiMF6fDaT",
  "key19": "24pGgi5g66okHWvqLPoE7tZdCQwHp1AYJL4ZFZUz67xo3i9BNb3LHVYh1GT3Zit4w7dFq5wxT1j75HrRc79euNBP",
  "key20": "f4EvkVdN5F6TKcs5s6SsEzFk2EXLTynArKqgX9tgsmJVp2sRebG2ACQPF5caLz9PpjxF3VkNK1JKHoqjRVmxEwL",
  "key21": "2RzxBgogwY5YWhxdUZK3vqFQqstWU2VVPmPkSYnECKTP5jmZ6hj1Z5vx4LJqsBjMk92As5nmAwZvrfbrxsUG94Wt",
  "key22": "36A6KKGdw4YdPHjW4bAptcox5CRqw6UUac8gr5kbUqpDHat18PGPha91fRBp2mRquAXTbDpgSgudjhifYqW6v2r6",
  "key23": "3GohNF7TVRFuQQhqtrUJdrYwNurhjvGkuvsQBr6neoku9gGBBdUdjapco3WHV6frpXHVtf96kWC2AQf54MBmNJsf",
  "key24": "5hBCJyQz4F3fDMttZPTukpDpSXLQfmiZPaCkJe4f784yoP7kSWCx1HHdpF1aKpqESwvod5xkGQsKY2FnBsiaJN1B",
  "key25": "4ADgLR8ufu8GYKQvrSopimxWjdEFJXh3Zt2JxknLf8YAYo7hiMRpeu7GKpuKKmp7DzQEJz3W5bo4VnVdwXqcKTnR"
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
