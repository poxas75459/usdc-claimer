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
    "4JkRaTLC5AaDg6BS4tGMWayQPK3PHgmqjUm2FeuDTCYXMz1sFqEesmWnHLUdvg7PvPPqCJE7iHNowWk5ZWvkoDCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ehZcd2e7P9YSwb3CRNWwGciB3J645Rc91pLB3YB41gY1DRe52ZBYo2dEVyi9YUVZhtzeaSrHYRdXMoLGbm79ke",
  "key1": "45dvSmB5Uqb4z2HT1GVQvWaxRLdGDmJDxwuuELro8Ya1bve5iC5ZhwHBmSXf6agEnNMZN2Ffka9v3LKZwcPWsRQa",
  "key2": "5K874Mi6TqpQA36rs4N6crPace8XXcbRcJbx56mXjVyJpTn5BHYRp3d9tL2MgnfRZsC42JQgPZz3p8nh66daH3yj",
  "key3": "2zByKkq33a2cawG8dyor9FBeQeYho9mEdsUNmBiafsfs4wJXVkYuxEBb6gdKLt7sDnLUqUmWmmBMoYQgiZvKUCJa",
  "key4": "4g624SSwMfjj6j2Hq83WwpcuyxRbdAKRR97EXwnMdH33ovhEtktEPwfM5DuUu8sp5L57cg3H5DbjUzV3sXQrjoHc",
  "key5": "2n2HhxbUoYZkdfsjQLsAsLJcmKkLhhpbc37m1pL2M1UQj25BtoPncovsKeoqxoSDbtBRkNKXR8ba485dUKWAZd4j",
  "key6": "CAP9UNvGbKpfmVjXJ6qAZAxSgUfkatwHSx8tz5RPpU3yXj3Ti31b9ZwrD6inrG6pxrwJUuodAHz8Rpko2TjFa7N",
  "key7": "RhL2em7faZNgHnYt5ZKr3QgCWfEr8U1UL9ZNZgjZMk5XoNMBUTnFxp9K5FCf4gpLXFXHNp2fwiN19JXBzxrV3as",
  "key8": "5BDw7tgfgKr6B7KLZ1hNk4jnSYakuq6p8Ls5Qdrm8xkqGP9eagW1pmP4fHCfuzYr6zQNdxxeRZ6izedj7L8wy8bd",
  "key9": "2MWCmiggjPe4T1ZagLRNY7ouZ85bVs8iypBjEWAaeLSBxUXTuSyKLfYHc5uKWFFJbfZmcapgWMKvWWTBwTXj3WPE",
  "key10": "3qL2XKaWQoSwrvdFDz9dVAZQewvLmTa2EABW43LLa3g9VZn39vPipkUX4a95BCn2pRah8krdvbzwBJ6t6iV94z1Z",
  "key11": "GKXrTKmh98zHXQ6b8FB4ANDuYXivfw8g3zVrMQAaH5CBgUr2TseVVdomVy4WC2GDmNhmRkJAxNuecX7v8Va4mJB",
  "key12": "3aPwtnUbUvsBDr332cHagMhajUAvbd8Zk7WgdrKGutXU1TZRue1cntspnhJqpifKi21rAjCwfoCCqrUYjB8DEgo8",
  "key13": "5cSyYCau3MLZMzukb234iMFZMcZwmdrLJkwk41bBs2RFAxmuDeXfMxC89eLYPEMTYjydmZXEA5Q597TNzPXorVGK",
  "key14": "5SFzs4YQJT1xdRXUSYJXJAj7NUwa5kECvj8AAJh2pVAQ9dYLZZxLRskxFHTbbQbVbnCfnGs6TxZpnRLx3YRxNZNB",
  "key15": "5WuwL9gqbPBqAUSy7g3SeyLDyYgXKgKFm8uGF8Uw7yqHZitVqKBsmQFeVDWPaHcZjbb2GDTp6ALWg1iZMQkLPgzg",
  "key16": "5fMqPvzUyY1MphhmBUCurchy8S9pcNGDgQoMnfJfbg6ShRc8si62i7vk3waqwLoKnQWHygM2fwu61gfqWA3KcDE3",
  "key17": "4vNsJZcKxLvyyxCigQQRk32qG5dsQqCSogcxYFTf3bpRGYp8Rnh2DecVqJ3J6f7pxH9wVBTsB6XaETDyV3kGnHSR",
  "key18": "9NpJnKzdXdC64dKfEmzicHqxgZ4idGJP8B4pWBkhxxQaj8dxMRU13v9wYf9GbUpdrmajBjAkXzfmH4hEwJH624k",
  "key19": "2hn8DNqLEzY7D88gv65DqyLqG1nq3hpJRmVLnT3PaZJrTF4PgUnmdXpGoVTQKhd8DQ3jrbUNZgypLm6BFpP5RiZQ",
  "key20": "28FcwVm4NUcLRUxNmH5CwFrj6WXpJxKpKrbatbs8k75VHrfNncYf9Ktsa4qjeP86fmCknC7GLhxuTtDURVY7t1Q3",
  "key21": "53yEwetznZHzeep4LnyarBeWK1xcPr6jqTUYTqmubXGHbKnbPTGGrfGfz2apfNMdrrjpW8UF22jm8r1hmU5aXv8t",
  "key22": "3MXXHbYdgH8UEsz2pEfyhLRTsEi7PTGekqMpBohemhbYsMHVDoRtyNyMBCQ9Wsjt11Cjh7KbHwdE4GGfjqbigWQv",
  "key23": "5HbfnDx7KvjD8MaMbETRf3mQ3yaPus2uUgWj2AstsxY9RTPT5nXChyTLf7AqosJNramgJeoMp4T3tfwsc8zxF8VU",
  "key24": "3JRNuBHG3SfGxYLMc2wonmCCJ1yQwAWAiizfrDZj8qpmWKXap2mf8BJG6DzGVyC3bpKM1b9F55QBNgRVmqo4fzLe",
  "key25": "5unog8T8X6gTzy3fPMqVCGgQAfDZ8394kPCwTUGQg5BwHrDbsnk2aFiPpKVcu7bZTrsSGi8rHooX24muXNVUjTyh",
  "key26": "2cvGSZL3gJP8U5pErR9PbACwYbQpqVjzD4kMNVVqCBTHKZ5VpgRbQCdNUbshArtXisDXJ3Xn9zSKQqVKZdv2FzAz",
  "key27": "67rDDfZVDEbmvkYFpGV89w1Vkj6EKwLg8yM4B1pszxZ94b7AgSJ9DaLebV4wZDuj2hX4UTgPg3NaDFrWP2ctJXQn"
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
