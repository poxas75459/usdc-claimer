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
    "3UmfVQnjtmuNju3rzsdMyJvPvh9yFRk2HnDopP1dRupHKoyHvR8WMfnEp8Nw1H57JG8rLdUUUtjqFXyMLY8tpiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S91X7AepxQjowrzTZmmozQvKNUHDgVP9azz2wBFaTGC1oApLZDormGVFgxiQGA2iDBinGiJLqhBGfzPG2jyWAo8",
  "key1": "294jyGAhdkE49nzGkaiaZQbRJepKysy3BxpvHddRhZfrdzKUMYdc6Xg1H9aevWbVvogHpzYDxnmHcbXqLb9QsETX",
  "key2": "4jYs3KYctzoUPuuxjEUpLwoe2AdC5dc2uRy1KoGNT4Spr9QS9ikTysmuVUzHAgZoMnjAzDJr8jWRA3FpbrFuZBma",
  "key3": "2ZQXuAwGwusgE76iN6KmDiZxUmUsN79SnKXMkhH7RoR6Wrrhv2kGzFKhe5BiDjBS72316M7rMD37knJo9rNZjpFL",
  "key4": "jz1rk1FSZjS39ToabCe4FFsjRKfUVPBJjTJZ7zHg5DtHUqWrXSAphj9sAwbvLV1s1VGSuRV9pgZk25ktkRJHZyW",
  "key5": "2z6FfrcrDqEXEFqALgzsKgLhtygbE5yWXdb73PUgMm6rxnPMeqvw233xZu3tRvEPYHu7FX2wKPXrmoPdEXGQ9jKr",
  "key6": "34TQfeTt2KzoWfZ82VrwFWUz4drLWk7tVgGmNZ1NxXHTmUkfLasjR5fZrNr9EANkeFRkrxUvhgFLFWtymxQur8K5",
  "key7": "5gh34Deh64uq7a7FnVAh8hcv3s23NgHFQ2ei5jGXayBsQD9ELtxCXTtx7znWvsqUWzmrfyxQPxQdpXdM1zY7Tcpz",
  "key8": "3gEoWNfZMYQubJd8sdxiXdSe1hqBXfEzdv6SKYQU9S6KpRbuLcgyY1eqDMH8yVfCy67R7WRSwHE6W5aSBt4dvtb6",
  "key9": "VT7a3x97GQaVFef17H4p4GjQ6okNBivZsCGR6XQ5u8uFHGrFqsxjQme5cB7SAtRp6mXNuqvP1oKpWx7ACZQzYet",
  "key10": "4Nxadw2BA219CJYUWjnHbibJNAMMcWxRc2daALta525oKY28ms3K35TBQLv3EmUsXHUHaHbJDMWu9LQBFjCQyR7Q",
  "key11": "3qUJepngXXgxerUpbSWPtpJpofqVbcRQ71wvm317KtCgHkGroTZPzeagf547cBeb4GkiZXJNwf9GEhSQZVzE7Doe",
  "key12": "31Zo4u7Xse6tjfsckx7RKehuMr1e6GcTT84CYDgKcY2kduYjXs4MCNWWWotDsmFGXFzjAyjc9NJ8Bj52WaYaSj3j",
  "key13": "2P4th5fBXtMxCaPYe6hV7phk61xhJp7VakRrbaYUdc5pvubnd7bNEMDBMhhjfuhY7eAHAcM2M1a2TER8YXQwuvWw",
  "key14": "jmFyfvjFWuSFtq2PRVVcukg3NdtDb6G7ZMmEZfmo8LNFs6wU4aN7pb8qWX9bgMZUPGe9dm9mfNs1JxsLi3Ysyuc",
  "key15": "48gUGzw6yoCzuiPavM3NsHB2H7XjttXfbCQ5rNTBTkSK6R2grt83saq2exUxbzFKJXQqoxVMKxFRb5DxXpBTCbvN",
  "key16": "3ASfJ9tVPjV257cXgzteGYhgWgQFyAfgd7f4L6FXnLPgDvpEPg7XEoxUcmiCxCGXp7xBFPw1Lv2KowfB7nH3gLrb",
  "key17": "2C1RCw42mG58TrGoSEUewjBNhUDKGKu7XhJPUC9t1iAXTbCLBh8tcWWdVqUNAjz56nVH2VbHvzFWtRntbJq8CjuD",
  "key18": "2Hun3hyejeHCvmV2At5iL5s99UBd1nw5yYgJF4QYqFPBnKuWejeSQMiLoh7QDkia7Vm35RHbPQddLTCnQQ6LU7pd",
  "key19": "2Ph5QoBtMwKwsJMMvXR871qZxbP7fiZ8ZHzZ7CDPSj5kxVwTWp21TJzm4JHoGjyouwf8wPQWM2gEUot8gifzNCFt",
  "key20": "HUYtt6KjHbnMYCKWw27oFnMK77MzLajqcZN3aN8VfxAretzVDmrgt5PJGrgmEhUjJUvrorwGnWYf5i7watC1PNa",
  "key21": "HxDKwQJFxR2iBWhFA5Kci8UG8gy4etLWMvbpUM7aWziGJ9cRwQrAU34x3MMiXCQY1g4MmLssgz98LSM6JPRJy5H",
  "key22": "2kQ9aHavyx7NxwFUsTyUCB2Xg5GifoRMtJE3F5GkLio8R2TCCKNCJW1hhRkSUNzeMDXubbNZPuz7n1WAZWjVvM9T",
  "key23": "4u9HdYzmyGsQKqtriLtVDs1HLwtWwwp2Ei8DeQn4Xu2FaWszUacDeiBCtV9Eck3iSHgPKwG3JAo2CZ7xqxZvRh6g",
  "key24": "4AFu1jSKHUWnuSW9pA4TEaA1K4SUD2rkcyhSR1w3GAmXjeRGeTgjWgdqoDTtpQQ52A514gDZc8xfFjGVDMah3isB"
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
