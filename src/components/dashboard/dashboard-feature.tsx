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
    "1fLDAX49gDjGfB66jYoPdi5PsybeLdq3h8thTCsD6wYvHyDiYYdwQTFy4GtidM6Kvt4q9t2jRsY3cUgN51U3PoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q9LCKuQf86uBEDAGGQ1FNt7JNCjcT6fuGxkGuX8sceLkFbczi7NArToAz9Wiih7kgtzyG4fmDeSMrxr7v7pQGTn",
  "key1": "4qE8ugbiuzZfLiXkC6M5sGkvtyXMhUE7mu46LNy4zkc2JphN8xgTPLm51vhGxbazBa6AcL4hP9VwTqKbdGuy6Em",
  "key2": "5AcMrpAzxCttmxFb2jBC67PGKXCp9ZQeMvwrxVUGT1PninioGbvtayYSuUf6wV5pxoYm2oC1WgEcLn4e9vrxAGfw",
  "key3": "X1WrMDBmudSetxcGQ9Nh1x3xmvWB6RAEkmAukvtqvH7ymKxi3Ae4frMeBsf3mstZ1FGkDQihXDwEQVkvmcbw8sc",
  "key4": "423b2AsNrvnW7mYBsHcd5rYkH6uomebNphVpKDqJHbUn4avAyxoMQQcKZKF3xTUsaLvJ8bX8uahPUSVCfcKymhPj",
  "key5": "3GdZTsBgQJtxdSAhNZc1E3XgBfcZPL3B9JpE4gNoJ3a9WCwyzixGXdkzHJQdXpCUR5JfSnsTSzqp5dowyarcZWqc",
  "key6": "3xNFmTJ449g97bCsPT32R7yQY1MtHijh8o1THxX6g1DDpocdE8bYhjEnTZ2Ma1MZuwbTZrK2b6Wpjt9Zx6DyTeR3",
  "key7": "3G88WDcXQ5nWNVLFpUKcJNGRvbnb9xMwVrUEpQDfzZXebzcY3hPDT64s5LtBey6suusju6vwnZtEbu5nvoghpeFM",
  "key8": "5sLNQWEKSLC6xBdoMAhUdBtmxhbEG7G7shoUVaqyBFZFid3WboSKTG6Db6o6fh66uP6H3LH57QqSBxG7qJ71oGkH",
  "key9": "4CzJQpsKnyUss6sbnyNkDNzGfF3xmvgcpEoNoSX3JoufgccLRo7eRffm16GVkuKJi43zf9ZLGvgMjy73uBivyzAj",
  "key10": "3WpApuPceEeqBsEAHUY1kq5JcYrwBCfR1W4jQDFQQzVcRsT52bjcDimdiQr4uz6iHc69UUFbwDQnGiztsdvUa9ap",
  "key11": "zh3RNQrEq2omwVJdhYGnQKMC6ZdR55Ue4WDanPxdmjUvhr5A6SuRJ9XpkGAYJna4dWNjunwHbtpjhTGr53xHdRX",
  "key12": "g5xg5rkuu94QgoM4jtPvaJQ4ZjxEwujfTPXFDrjLXFExKaCmKzK9oREoEKo6Y84z9bjVKrw3mpHhmmtbeQnksxp",
  "key13": "2WvzfURqzWYiCs5oRLMB8zpogTFkXRw4dV7UnXnFpmoGENBPfu3B6JH2HjdT9do2zRszG7ZaPFN4gvuSiZe2NJuF",
  "key14": "4FwYE1v2xtQXF3s49PLt9xHBse62Mo9qPuAceJp1a7ZNV6X2gUUQLTfEEmq4rGsQVV1a2ntRaNXURhJYgZpptPQy",
  "key15": "2zCf6MTPQojFt7HgU3SJk1iDEJvB1gJyrzvHzJHgoqPJkh8jBSmekTNzmwrFx2PaAswAsQ6MjM2goqxeNvG1Rkvv",
  "key16": "QKT88G4VpZsjBrrZtB5mpBKwPgfPL9azbJhce1r8yKoCbfgxJJj5AC1rUPfmtn3SH1Q3oLTYzKcpsbRSh7KvYCL",
  "key17": "4QdgygewDLbmM2HS3T3MrFbc4ZwA2yboTJku8KCLUSzbruB7yG6K32XV1GM4Kd3t7WfEm9v3xt8Lnhs7dMi6pxnx",
  "key18": "2EUpY4uaiRBBsxEQCQ2S21W9i5oDBH7KHU84a5X7DUpct37AmagvsjB2JmfpPbPzz2CeAk1ztxVuxXQxJkpn5Ecb",
  "key19": "3HZede822r7nPyMr3LKUvMSneRdYL1yrY8Gm4T6HcBKFXiUptWhJzoDSa7Kd2j4D9TADuEGVdFE6Bfj2mb8oFytB",
  "key20": "1QmTpbqUmjVqn4MSRMQGGndfa3Cect8XaKwiXwsqkQQYE4pQSoGfM9KaiVBEJJnwzVqf2av3MFzcLmREwTvQfMp",
  "key21": "22CnYcKCe71BGxuJvB13oS2Kr5wQ7eFRfRWzt6ovmXEnF18d3Y9LU5KBhPGPj2hTUgmJ9VZANyTJnbDM1tNrWEAU",
  "key22": "4UdxH2LYrLZK5XqNPVMTyJgszmkknJRok3YfghHeeP9p4fZUp9HbkJSih6FEN8rpXoQ2G4NbMT68z1t9yM3x3wDx",
  "key23": "iCqgxP7iZdBnwcfM4SvW3k1pkUK3wqBhWvWcu3Qwj3rXPbx6HjfLPprTrMwGVZz6cd9VncWfdUD5w4k79upwFsK",
  "key24": "47KhtRhivuBFqRAHWzPKduo6uf7PDQospK17VhZQNfTmE3iVffatLX6VNAcj1YEvTb3NypBEtoM8PynrG1VkMdEa",
  "key25": "23x737pvaesBisYYPLxtTxkd4czCdk49XW28a4ewfzLQrsGsL2vAK2fnWPJjsFNTFVLZv7NmNEWFNvC5HhfHR6MG",
  "key26": "47jSoXUgCzbV2eu1xcBor9BNSt2QcL8Hw27PvAZR2u4JYwktYzHd14WE9BKBPQKNWYa7dM8eGbu2BEhmTmzAP6YQ",
  "key27": "2qkYE9Kiw5EXmj1fXskMRQ4YfbcpQUCqtzemF6chG1LhdSmFuR8cLRqHR5ZSsPU9Yw5szuRfiMVz2T2vRvovi3x"
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
