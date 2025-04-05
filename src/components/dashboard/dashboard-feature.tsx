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
    "4L2E1Yw2BoYx2Ji11xAhwdgD7u9NJDtbT1uGb7tiNgcUAMwa7aLKPhbBQfAUQUK6M7jHMAj1EeFph9PkCdFSbvyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5StC3pDCzhP5kCjLP9RbQzm2yRsAHD5RNmqAASmX6C2gNHXURkxuWRMgNkRRv48AMjWhvMAgiwEQ3nVgLsYgTBcc",
  "key1": "JVoDYRMBUSb9Nvrii5hzxtXKXs2nLNMqJ3LR87Jx9eH9YwYVeTzuK7X7MZZHukC3d5JyejgSsCNgWZn3DYMrANT",
  "key2": "2pPBKkNLiPpDBHArE9kax96CJuLd34p1HD1YrR9bwe5BKjdvCbNm2yporMcHK8a3xLuyc2PYqRZna6QJoqmmHgJC",
  "key3": "5kHyxBb9dhAQsjqscjf6k3uFrfKXEokTYTDA6GwUKHvqcHfx3igUoxSgiq3WbStd5u4Ti8ChMKBXb6NeNhacfcd3",
  "key4": "P82o8kb8phYETbVRk5iN7Knq4WxMxFUrxLBHUrcjntqMBEgpWseftS1S97b2gXLtoj9JYyp47MGWdhHUHmmj8pR",
  "key5": "3Xzdk8hs8EQqNwZHFzyGe1X98KjvkW6ktRusYEkogoGtyGRi7AzBZnKXNXGhepmVzJFu5BgipKbgbJLeXXHDxz3x",
  "key6": "kzz27kL7EZVycVNuGrAnogRDPd9c55vwFRsEZeX8vARagLYX8aeVGx4ajBWvb1sdMJ5bt31TWCtCQ1Egvk2cF68",
  "key7": "zf9Pgns9K9VUc9jKou5RMTCCg499VJpf3hJYkhyn8S2aZYRJm1KKctKyWXfYoPUjt8AVNsAZDgM6mna1snbvw6g",
  "key8": "4RYqdJxZ5u7KrRrZXF6tdqTU2gxG8chAqXAZT1F46W1YuZgAio6LahqTrr9P95Ruk9XHyPS2fd1NtQPR8n8ED9GW",
  "key9": "4HExoeMNhNT4Fj27k66jbUXQ5L4ZUks1VYohuj3pE1Z49C5GRx6KVvr1Dq5GNGRrPG2NpGLxemYR2WspEPdpmRom",
  "key10": "vBAP83z7XTD5YEe79GuhLZmo2Nc6vMNQ3S3xgKE2AH7qgfyKg5o7t5vhRjfqbvkxLJiYbGrXK76YGBeeaZGE54N",
  "key11": "5w4zXL3ta85omrhKfjdZX2Cqr2QyksMEmy4zr3a9GPHm93AoDZpPXBHHTkukcNnHMUSGuDEJPxRYgynRojFPSkLU",
  "key12": "v245ervnAgmZ76JhiP7882BQfhfJAhohJvR21t1Uk9rMys6nz3Y6T6jvF93v45sLBJwKG8bJvPSMUYnpQk6yfSc",
  "key13": "2mtuzrGx2Uu6uHgC3wPMgzrPJpsyZAgLA1hYy1qMH8uKn49JouR2DqAhXzBTzCUpfn9CepD5mNjfkgjP7kBxafsV",
  "key14": "T4uHZZu7fUTW2xe4LpdaDbKhhKxpuDpQrkVCo1dnrZ2UGxGqGJ5UiHhtjy3LGQtPbJq9tyifX8WSTznptYM7er8",
  "key15": "29WaeZL2xNLiwDuxsRGjaNTbZ8JNi3pSqtDamyJNj1L367DyYdMHmxeiAYnHf7kUodsT9pnmkpATYXMrhJT2HVaC",
  "key16": "5E5dPRDtrcTH9cnwmoAunHaCycyRgvxwutbDdJFbaMxbdyURPDWfNaGLEADCmUiFFS5cxq9JWY9j7xkVyDhdjbgc",
  "key17": "2zyf37eEmr4fkBTbbYRQkjixjvXC5zZwQ9iAmBFPgHtSrcRvoLdZhMnnbtn7AzRqJK3kPNNdtmAUEDGEPVNsWMFJ",
  "key18": "55GTmkd1Ks35jC5BK2Gt533KDfJURYNGTQ13wgC15qVZtZVayptVQeg4mw4RCG7gaRes1n4EHEYRioL1X6x4R5fN",
  "key19": "2Gf2ZpTxGPvNTQNgjKiAMcDwkZVaTZXFJzY2dxipbchcDispMbWcrwwVS9A1hT78LLwyb5nGsjLLvvaPLktFpe6f",
  "key20": "5y5z6qFnrZz6dpSMt8umjDtaPFDj2GQvTRbMCsBdcm94bKsH5kEjpALykGt2aFD6o22uxmpdpaLxUPoGQenG5tzn",
  "key21": "27od763cvuA3vTospjU46Bdom3BbDmmZkZMFw19zHqdWLNgWcZqjgXcUefjDx3kGbdcJ2FoVvvKPdn4ucvimm1DZ",
  "key22": "5L8uKJDFHuMNJUq9oBc2aSqssuGTj1cgQYAtXouMtbGffSuYpkBceDMzqNz2hvAFSs9XDigUFF6SMHPji7skhfxC",
  "key23": "4Pkt996x3Eh8bnQ2g2qQ6iuDQvU7QpkkDPNWjgqcXt74EGTcdzWUDHFcWfqkwJXGPYxBNAdeMMJyrYb5NeLDVQpq",
  "key24": "5HtCB6hDJxvyUpRL9jSEyHFed1KvjfgdupmvgpNyG1eHVW3N4wcYhHdqXjnyWTtddtCqAKaXsCMgPdhY2jm7eMRR",
  "key25": "45iANjfBTcN7Te35WyyNGwZceNSeaLPpoNsFWg5PDUhsxPEA79mzcdu8t54d82BDv7Rp6aihdnB2XuSH9RfvHREn",
  "key26": "4j4zntgTgctb72St2cJEt4i3dkvAXe14SvX3pczWBgiMhuJt4WXVeY9pbKiWtW5LSGNXGxW9yeHCjX4Ng9PfcwQ4",
  "key27": "3ocK3Pftdv9FeqQcBubFG4epUH6rbZvBrndSgBsHnYCY9ddp87Q7rVp6s2VuZs4dpt6DhD5e8rEFcVA4tzMD4ZgT",
  "key28": "5MpKVjaNta3nT2BJhT31C54bMfbVFiLpC49zvzWxGGRaHHx6c1AKD7zTBSpAug2iBe4ETZBtAe7WCcsCXe3sYC4F",
  "key29": "3D5LQKEoY9SPchAjMkSbhgjNw7vaEVbvutdeNKyKhWixNrF5vwQztWuE9mKhWTeK7Uxo31pTJ2ynqe7b1fj4Mp9B",
  "key30": "2AjxBmXyuwrcJ5Qn6j3JDsSZKw3VGLoznhbFZwCrUujfmCa8VS8bxX9341voBDZjmLRhb7WYqhkZCa2M2i41xQvm"
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
