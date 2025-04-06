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
    "5CA3GuioPHHNPJQfRbwUCwKsz29RVwwMS4Ye6pNYuK54DJR5SieWb6sditjKQ8MDtiKpfE2bDWWcAHdTDoC4HLpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38LJ55DD5vk9bkV6HMkfcEk2c32N1cczYcHfX1oz7ErehT1qKrYG5zN6k31WqW8K7Bffyo8ji3Qyv4cMuvZtTsWb",
  "key1": "akCFUPgFPn4gNeJ8dicGQS4ZTVLWxKC5JQVqPqP2iNEmGhLqiK2pKcyH1Ev36Fd8V8x4wThpYd99GXWtbbC4QBN",
  "key2": "2qVWGVQQ5qsoGk6m7c2aYh7tnyMj3a2teM4oG7DusADJum8YHqbwnTMFEkFaXXXKvVNXN6nQsdd8DCX4CuNoaELq",
  "key3": "2yxJ3B41kar88cEVSiPrjxooQ4dVQTg7Q6mZP3fQB9hfbJycMUauy7KKpWGv6VXTmRnGh8GWyMJ46hA2WPTdvBEP",
  "key4": "2ppX9q1yyved9LpK18PRusdMAsBu6hMYMCJoWp1yuxvgjCJmUVUbphvKEGg8QQrkt6iS6Btxd6sbrjipiLDmnnCN",
  "key5": "45gwemAqpzK1vYViddWMn77HqUavohVwEDKBbLfw38fQrtdTwGbM4snLmu2hjneUXW1hLjdyNY3MpQUScdkYVDFn",
  "key6": "5ASqxAMQhtbP9SF5RwwxZ1bvw2iFAuSjagfPNbqd3uUnwXTz9LUDZ5Rs1ZrxzGzRq7pJE1QFShPWYeTpTwpWJXDe",
  "key7": "5QxFivUpVP4g8VmBN9EowkeJ5fHWpfK2eu67A4fLoW963boYErRz1m4vEJTDMAVien8exDMvDEiKCdfJSeUbvBdR",
  "key8": "3etSDNGoASa4KcSC1YcrBuzYJfo7GcJSpZv7wB4Tq5AYcRYvrLBQvt2kjaNXTJMPTZMjNrCvPDktmXkpRCTnoF9j",
  "key9": "5LDV8g6dzKzTVkqqTVqpw4oz3rEh2ZkfrHoYvXoyXpRm7SZPSXhZYcLZdqnmAAZ8dsdxWdHJZnvU1kLj2pdZbboE",
  "key10": "4Tee7WZtXE612PnXSosGvvhiSK21aUq2ThjU2Akh1YRTjLvgvaMaqeToHvSjrh7uCE7rfGvUQy4NpmLKFgGBqYNJ",
  "key11": "3tahdkZ3nTj6eRzkdLRrQV72KcoBFGWBq4BAET7myFdHfHSaHbtu5MUkg8MtcAUg6jfLvyNhBMsUR3UUHiCfewAS",
  "key12": "2Lohbo1sMHzFWd2HxSVpfnGYdZAzD9gBCNJuWdqW73egwbULAJ8Uyt39G1oJrhuYUMWsNXydYesJ2LF8Z5i2YCjr",
  "key13": "28RrsgaAJBY44JVfPtbS3GMv3dVg7RG8aWjrP6SttBv8PhnbfchgKRDbEXnN2ViAWPfBUuepf94s7mMYWZNpST6q",
  "key14": "3tJhNsNC4oAaz3moCPquR3WWhrNAgejYgurjTbPxcgtE3G2A99ojt2fM9ALvtmdh4uEjTm8e5XR4Vh3FMsAQfj7D",
  "key15": "2DHoCQxNmJLMJkGfCqN91hXqjkfFpQfAnzeZ1tad8fhiGp24oJXb3Ho71jrgi2wXra7Kvxuv6d8DYs6P8ZHgMe1r",
  "key16": "GuXxay3ZZHqJdg86ZSWmVpL7ZMjNwcasUnNKFAPGWoFtveAphw17AXjqx2bjuQAQ93pquWnaj6FkkXUBp9JFfaJ",
  "key17": "39EKHR7nbmivF3yn5hj52ceHQ54xW6FLv3zxf3ciMDftz5qLf5z8TXdWmsL1BtLAxkQU3UZc22679VipDmVFZauw",
  "key18": "5pT5Bi88snEAK7QfZxrutMBsgoNvVPq1wnVftuXK6MC9a2h9htRBnDAyZ5zXJUFyVfnTSpxgB1XSr4GbSGVrvTDQ",
  "key19": "52SKBqvNzvW1GqwUmUFC9yztR3YjCJ5cpzkCKkoz9tAq4AyzriCFoWBCmfUV3SAyAH4vxpV4XKuQzts1E87VSRvK",
  "key20": "5EdgYPc8XDa8J3iVAnp1XzciCUpGMYPQErLeWTNrz3LVi9gemEA9s8pCrW9h2XLycs3eeLwMYfDk8kkR5vybEdsU",
  "key21": "3bHtGQYSNz34Rq2eFYr8kocsdRhR2Q5mscsb6NAimDnzC2PsvX2kJJJg7Rx2Bd5ri9tCfu8iqPsNpNfAVWoAc1Ye",
  "key22": "2aUjVifsJdDUFVSxZQoQx6rvsJxuGdsN1Wt1HpzH5J9oicRTY32GPLPyAvYPtkAuRx1tT5TVGgjjbV3Ag4himcUT",
  "key23": "3j4xHSqpFa2CuQSA21rVir6h9RJxQqyB6DL3xjheDsHvqBmqDTa2QkhFG5oXbu7fdqSvUMkdhWsY4KiFuMArBpWZ",
  "key24": "xsYNcYq7DxQLnwfXntQhhSzjppFSebTVbkbzdTsh7wRSrHAzxuh9Tr3u9PyEEVE93U9R4FXWRo1hRR2UHBQdoug",
  "key25": "51yoVW4nHnikgpXVNbMM4BMHGp1meHWwunWQFaR4YJnrb9zSCyFNQGbh4Lq9v5Vm3TAmCu8ZA4i1uA2GbPkUyiy8",
  "key26": "5J2eAWpmxD6THdW6pwLtA8bkdkKqcfMsAkLLSXhnAmgQdU34tGj3GAZfrK1yw7KovyuquwR72e6FvRCme6p2PfMF"
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
