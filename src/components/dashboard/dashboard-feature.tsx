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
    "3d9BqEkMFV6tiHePQ63xKc8n3b5xcxW4khoXeWsKzXXYwMNrKTLATZLDvWdPsvfT6byknBvpLbzZrNrrwbaXYY7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mio6iGjxuEi6LXJJxguKBu9i6sYM3tXdZqut8c6Rxhzwn1mT9NturpsAdnekBBfPaKs3PQh9kBiYKL3y65s66T6",
  "key1": "qabVu6iytQwyYwjTHPmePGg4KfSiy4zPooNdsfPcjJ77uYynpmxtsoypTwMRxPpzwLM7Umzo126hDQs7r3eiNDD",
  "key2": "2zNFbMT4jKfM9HuHL2rgmCduFJ7P9r8KVu9upDgif4UP6BNzVYgaBYQ2GenQresGHECEG2qxsBNLBXcybg9sXxKZ",
  "key3": "Dci3c5nnNoabGfxyKJ3Cc1KGdxncoLNifXVYYNv4ve2CWkf2LQRg39PoZEQ4etcpFUTuV8JWtRbYoG6FtyXz4PE",
  "key4": "5qJQ27gbrqots3TgPw68xW3UCGGskv2wTYeqwaPoiAefKvmWYbyDj61PXnk4Qszg7Qqw441ELfywCi99sQbs7VPX",
  "key5": "3a3ujzdCbkYaqRqKr3ajBuAByM7nge9B5kNss5H3wqebo49Jy4YzkDkDiLneP9kvumL8xpXbkbbaEAU1hHvZZ2Y6",
  "key6": "5iwykZrS9jeVa1CgmfkuMQz5VAM2ZKfYiwSMXqd95wfetmmnRKTd2dGEVjwjW72atugn8FNitACg5iXFwhR5CChP",
  "key7": "62xqr78Znr7KYqQ2pptZFGRxWjyQRHcxQa5UpCtC9R224eeGddA6umB32qgNhRMZ9G8vCqhaByDpZuhunT2NCBzu",
  "key8": "3gFT4pLnziQEfVmg6oCEkRf3DHJnqCdbMHLLYC3gPofmWFnbPkmP5ZbiRXedsxtcZcnjyNHD6KhtCHqzCxFy7mxN",
  "key9": "5Zz4HoE8sGunc96i9LqBP1aE6drZmFBWD51i9vS4FVbU5cFVuxUZVDtLf6DYE1bda1YDjB2xetcP3zBKsEVD7Kmr",
  "key10": "3MFx41MR9dJLmTvHK2J78gzeJ9cmhi1LdKaAo6o9ryMnHBhStcusWc42vqnMDvZkbvDrD4E2WZQqRiGaURqvt7LM",
  "key11": "235YyYL6XNEaNTsfMPWEJw7BFr3wDeCUdDL4yXWxjewUaipoGnPoCJLucbVHNqFBUChA6BaZdSwznmqBgkJyVAo2",
  "key12": "4VzoAiYRKJ4RFvPoYQ2ff5uZStTzPLY12hpYc2cbVyseM1atmA3CaZH4A8fa1FQtAKsPDqb4wQHQRUUm7kWefpnQ",
  "key13": "4TryxiVM8BdFZCkHpr5h4Qq9ZZG49NeGaEGtPkHqPWrj2WLcL3s7yZM4HwvaDdGAfp3n9KVZpESvZEGMaxHj8V8U",
  "key14": "41ioLoAQi3F9y6NyEBfByAFHpvoM9N3xefdRqziEpncBM7VdvF7gnfwHv5GwK9o4nKkh2QWvBVA3QMTTxjeGyoS3",
  "key15": "3UFENnP6yh4ujWrE9r3UrQ4aeMMTocJdgHSHEq9nYPw9f48fT19KeEU5zGuNA4UAAE6nybdji7pCL6EptX4SsYpo",
  "key16": "5c8TkjAyZ5Knxm5bNUx5CcTTpBPWezGiFmDuUZ7fcdMWYzmwjFSUWUUtjL9TseaFgNkRyWxKwVWpazZQYNXhi2Tt",
  "key17": "3MMBqq5bd4XxRvdmwNMiDV7WDbobzSkFDm2R7aVL6SsLiL28K9KuRuyvpEm5VrU6phkdr8rGkjKizZmy4S4DSJru",
  "key18": "5uHvpd1Mupzts9SzroDk8dsh5VxJo7sj1bjoZg12RjFfSSVgZ8HyQbsz9iCiTnwGzRqMyxfXPSbFC1dzgUX69EaU",
  "key19": "uQMosVqV7NgRMinBUPY4fG7UHhD75iL5tUmkVgN4Lkk38MFRXS6768gRJx3nEHNmkH2XGkBtnA7PXCLQmRqNZoJ",
  "key20": "WTRRYhuzaoaFV3p4WxNYMRF5jkskDKK8Ny7adNcgGK4MxwCdP82FKEPnLTbrLHwwy3YmCiGanvZ52TyGhUZAby7",
  "key21": "3QfZ56C1uJCG4LJYxbD2hEaae54gvcvKmabVeWfw2TdSZi3J1bpvze8ToUU5T6LrntfWDjHU18MGYaEQrDpXix6T",
  "key22": "41RAqGosop9ZXNN6jHRGy4V56trgYfUGSBpkMJSzhK58HVTHKbDd56q4okhzMNGWDHhd2etuznMkQnbgRn2Lytwo",
  "key23": "YE2tVJ8CwWfZMPqWKWoE5LrqEw6pdoQFp4z5hQBLh5KkEc2d6JVaHWDpQHp7Xzyd9dHoUhDbYcqAitX7VA2MzGa",
  "key24": "438bztwrhxQXDcabLwRDpF2zoEdkQtez74hhZDi8FJvFSZ2VGtD2s6B26kHLq4kVYR3pRo3MpTvrYxNui7qVeoq3",
  "key25": "5qwTpjRwUpLVFFW2HAGV5Ap2DdQmjh4pkzYQhsBmabj3Wf4juCsort4WvwnFUBHZpP7reWX8rjhpZNRRP8Pg6phA",
  "key26": "aEDwwwRqYn3wcZP4humVBZTF5Z4pTfbfSdKJyKmsb3sU1jEDDM8Wpw6H3cLspDrw1gA7p9XEgkbgXnUXPj7EjZB",
  "key27": "DKax9xwjqFWvDKcgr1rKj3tde5QsZF3sc62BYB7nbFL161hfFBn59ABrYJScmnYgTXwoxisHjXzfegPkYNLaixn",
  "key28": "3mHYeekRpyugeYd4rfCwjx2nZWgYTJHHJaatUcPZQG7LbcBnpXNBbMpCdjfK4EyJCyDFNEANK2QM2v1bD687cjnd"
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
