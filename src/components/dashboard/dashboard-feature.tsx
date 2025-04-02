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
    "2tX7BK76pNAzkoaKS9opujiucQWawAqCdZpsxGwQdQRz7pP3GsP1j6mZESr7k54cKB2GtmzXKPNMAPFKcq9zVLh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PTYoVZQu4s46stczfeeYxiqHTmiWuViLK3A3Tvp9pqdbvgHTEujwdeUPmdNdhXP1qvanyJD4ZWrvXTv1zXKgkP5",
  "key1": "oZv7pc2jpsayQBL9DPwfpv71rEmjciCr7LdDfHc7mDfq9fovcXjqLosPS41rg4BMfWgseNNLZGa8xtLJr6rzyAd",
  "key2": "39q6cLhejrBYMfvZemkqj54V4NZhZHHg6qDYLygHHqZEcmQmC6QajyMo2chNXgHmGhf654SKXLYjEm4c1J3X5sS9",
  "key3": "4sCDa1iSJbLYTYEmaP3A3Fuv67qnNqWqHfbN7tQub8AvksuTgBA6X6bi5tA8PHToUhaDhZeGEgGzy8JX7FkoNZo8",
  "key4": "2cHCF6TcjrzNMkUDxDLTsVdXwS7M7SWQAqiMd41GxZHKNXqwFJwFmwmCAxYiRvSpgeRd16exCCQUw3fWfqmuaNtc",
  "key5": "56w9XyFztfhCc1TeGvrYutYLzY1QrgPhEwHpqzijmXk4bCDkhNhXCDn9EKqfSMK9EBAR3L45mNueqvXY25yiGWqL",
  "key6": "J6VCdFxtV4Wt8MdL2dG9Yw9E4xGLyhc1DzyvBJVDHfv5tPefXS7gkBqVzYBGTT83yVLuJ2Zs7JUGfapAuQba4mV",
  "key7": "5Tq32rhfPzpNNUwfRMMLQTAYxdm9CWJn8Zy4saGksc3taXjaY8kXoNHYVq434Pbo3Xtc5htDDu8pXPb2hkTqVUCk",
  "key8": "n6rUeBeT2B2na4DUzBfaDQdanr3H5uLKTgVzPSyrshkzaK8dha7tnAr8mBKmT7NnAUjo7Yn7Vomou2EuATAH7Xr",
  "key9": "Eg9cKzPG64KoDmqNU8mWP38QwsqmndKkmJNryK1kkCLkSaQxb4LxQcNRyWDXb6o6RYAyHo9nKi6L4Jjqvqgr4ac",
  "key10": "GjPJA5ohd3jvCLt7DssPRhQBZbwQzMaX8sY9ABEmsxzA7mdMZZssTExJY2N63vb2i9R4vNnzGm3wG19kRxd5McE",
  "key11": "4WUvcVwck6bsBAThDQAUsYsekvdAWeHfGCLqNWxBVouuGtA7W4W5XPnKWk6kFwXduAwfRSUdYYbMRuBoQjv9G1vc",
  "key12": "225KLNVDgJhDNaja67J6ViBuTWrSPuGVS11D7EohjyjJP9sC2p2DEufbyUNxew3Lmn1TWkBVrtzfK51iAg4Tb4pV",
  "key13": "4PiypDsBSXCrBxMd4wABnLCJcfypA9GJvZ6S7Sjdde554L2NsrUm3Lj3Nzq89ukTSM66nbX3eb1sjQz6Ab4sSo61",
  "key14": "4EMHHUnRDATB95BAVvacF4M3CGbqwwTYpKCy69UnXJQf193qdgtbrJg9cS5mp1sfua7Jrf9h9rQhduT7mNT57zgj",
  "key15": "5qAgSvPQYvyKrp2ttqdivW2WH8zDnyM7Fx6muRfL8nj9kKz1B6RiY6UuTy9Zd5QWLyfJiwVc3Mf2FdhDeWh1hC5X",
  "key16": "d4eQHsQdjMMnv411Vu3MmSwz55acTzYGR1YR7mJy9CbAaJYpeQJCFkA2mPx3Ag4usi8NBLq12eVjyicwAHE3US7",
  "key17": "46YBZjxYGxZ6S2MYVqkg6wehEwAA5U5XSWrZp2rzWQ2Q7JntdWsVdgSTZixSnJbVh7NN4eoryFsuMkbUB7tEM1k5",
  "key18": "4TTT3tTR2PL5XQUcWJDnfL9GfThg5ktSDgAhiNeiUq4oGVMadCZHZdh3umiDRe23xBTPKi6jQMYSaZF9kL3qw6gk",
  "key19": "5QNiSceoXJRVKZUc22KivBeB9DPxLkB7VKtdjqfo9ccm1ghYKCeEQqtWnEU8kyteoVejpT9L1sw8B5gDAMMeMo99",
  "key20": "42oBkMxPZMjsJuK8LmAPYBHufitjZBjWP39SXn6TuJTekpzaPdc5GYfLy2NHGHCnVaP4pdY5mun1JUJnoBhpX39z",
  "key21": "5nWFTLTdn5xaWgx3cYnmLhVH6wKBADyhHQsF9LsHyKX84svzMXyMJvgpyDLDobZdVJgwxJ85TG6HMybXConHF9n7",
  "key22": "2rLR1oWTyy3A6yBJJM15A75vJvZFriUkQmVJHWazwrSQLByhVbSqjVpYpekzMw8X32PdXVqaDMMBUbFXDAuwpqxP",
  "key23": "3dVxt6Kts9TnVykRjys96KK7STkDfpnfCtmshxGCWG1aKSUgGeHTDVXnEQjaSbX8MoZrBmiZ5bZw9QsoD9uDm8Cu",
  "key24": "4qg3rbu8RPJZedC9czpS2BqHs18vKRkykhA5SQjoFGPZVyDVss2cHnDSYmANj3FvsnxEosDeAwSg1qWKBwRW3c9a",
  "key25": "4b8zcV2vxNQ89NRcBbea3MSNCutXJMoN5zgmDxQz892dL4VYNg7imQHmqhmE6QHfLVtNMXjEgM4tjnhcEi2EJWqA",
  "key26": "2WMfWuLgA8nrQituiRV1mWt4nEX6B8gwshaDo6fz8tQrvs9u4zAjb3x1UwZeF39CoSWn46m6L3mbkPup7ZZgeMVp",
  "key27": "8Pk3BAKrWmGEyY2My2uT5BtKj3WrdHhpzxr9hQqQGzC4uG7hWY5as9ZWBKKyT9qMAn6LWMNefA17pYHhLSnMbNX",
  "key28": "2odLxP1SCfoDLaD6SMvXCC7uc4pD2kqTUroasqL3ET4iEFUzSq9ebDN2KHkwYJUGXcracdLPu3S6fXzCuz5sFabN",
  "key29": "5ZQMzNTYM3ybV43GMMVPSwiPkdiek8wHbzqVnaCmLV4MrjxwtsSHNrXsnkx9on487NUg8baMxSZ9tnbQxE5gY2Z2",
  "key30": "33SAWkxvi5w7vvv2U2AvwshcZYC386zAmyVqoDbQKacjj6SFdUmu2oFJSoeyJatsmaqmLAGhRvDsBavaToGwk8pV",
  "key31": "3gWZFNLhuFL9dYBHJ2og4fxJrrD91HvCusLbSyrnMGrajQatRUye2urz11hwk1VyLrVq6GcifHsjopYWdvjH1Wqt",
  "key32": "66Sj577FYismdhLqyeA2hK2VMAbcnvTTwqwCNLXm6ZELrMfwaWAeQJV38fwapCcHS2M6NYR7zEEzLTpzF4tTqJNB",
  "key33": "3sxUcvt1XW9UZecxNkZ4tmbugRi5YadcUQ9aPAGsrcDXBnui6pkKhDYjGNs7ZnB9RpDLgfMuftaQ2sDqwekaEBeG"
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
