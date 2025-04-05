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
    "42oE7JJCnTrPvE3NP1qpdmFjA2miguEFnEYvdFM5C77dzh5EKU8RG9oiCQSw3jgwjNxkbQJJZRzxNvyrdLmx92aQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xBL8hodCz3CUmeAJmx9Y7uBSciPDPaWHind3jUYXSWJi5PzjWUqmtrhJJXEq2L9hPX5FMzs38J8qq4a96rWPV4V",
  "key1": "37jpbb9qZ29Eb15g5gFqHPrsCtauNxNERbDwFHZK3oK62BA6LKoxr6yjEaWiLs8cGzak6AX9s5WhqXxwuwVCRgLV",
  "key2": "3jQWbP5jJJ7bpnDHshuXEkKTuDB9RJSpod8SH292MDrP6mPuMaVG8AjGaHjmghamrzyrnFtmRhdTbbKcnuagSvt2",
  "key3": "2UUdsKppVxJT8VzkzQfcW4n4PmUJAsXmGy4a5Xchnqda57FpkaiJEXCEdyn7ugxT5USZyAy6s6HS7HJSWQVu8JPo",
  "key4": "2eZ9UfmbtAUHZLtP75oURnj8njdj7LFqkV6vL2AHfyDbi36tKv3p9Pg8KioPVw6u9PxiQh8jHFPz48SeL4EWMQBJ",
  "key5": "3XEK6XZ35paSea6GRQU6eQaS6VwAekSikHy9piam3vEzgvFFxCsK5LhYhDAxeFTXN9aaAcEk2YCe8LHf8Qrpf6w6",
  "key6": "5XWsibi4khCQEXFHS8P5K9CsRYe9XvuH1hATszYxm45h7wBLEtwmHGtrhMeWLppnJoU7uBB3Qdc14pfa1qbxQXpd",
  "key7": "xR6NT6HrhtntoNkQxQL2VUfnHdGHgWJYWTB5KJNxS8jaVFviin1NLQ7YdoQPWcUMppzFvTUGyqzAh95o1xx7Syg",
  "key8": "2vPpbHz4qWRd8xQFjyuPm8qPob4mvmo37e8L1Ejyb68U2gxxGhB8WCwV9CaEz4fZD4aS87xC9j5WrWDMk5LZrVF3",
  "key9": "59CFc6UX7Mv1ZPEaVp8og27ffKNRaRvyP8tueg2uxEK278uUjsS5CXoDmBVJSajTBqaHrKx5UQLj3JSiRxcqrhyZ",
  "key10": "2cX5nG6AFzRAiLFsK1bGyptvFJjCJqNJ9TYVXxYVjCgbnRGFfsmtBECyjA4BULh8eeRcaQJYQjp9pmxfq4ubqSMF",
  "key11": "2TuAF1b85f3xyjbr55f2vvvX76gZWKgxjrkMBDv3s7hZxDnu9C4d3NGquDQJpvn3V7xB7sW3bxTibrygZtGr4Krc",
  "key12": "3H9YgQjT9yVC4S7VQqPtLDiZJZFrJ18xPNELnui725Uortt2BBnZD6FCFtRUX8ff7upTcVLbxVyJQTXb1igz61mM",
  "key13": "xfmHvXxBkwv1BUeWDy5911YrAemqsvcTEe4gHrzakSozSHKPKPbsi7s2fpgmZoHcfzoniEHULH39a4NjMEwyL6x",
  "key14": "2mw9MhKP9rM3VAW71A3QhmxJ7smbXWcnoRWuHiWEn6vozkjLZ2G6wSwam7QJ2j39f5H9GrG52picGkbtKK2Agxsg",
  "key15": "3HdH1mZv7j5Rdc23rNoZhRtMG7LXXcmpR61J1H5w2WMxZRw6FApqmLLz1Y8UJgp6ZVFB3M6UND4EtRUmUCkmv2Vf",
  "key16": "nxbke3i5n1uWgecMYEzZA3v7RD3QjM2L7vGqtvWxBcWwQqJEKB5QKGcubUt3PWffgEjdUN6zqXd5f22TW3EJKsU",
  "key17": "4yJA4fWXPCNWgv7djWMBHXSB9ZXdFoB4PGdA26678TLm5DmMrXhUxx2F3XqwSAruYaGhMw969SvEg5Tqd2XN9Bqh",
  "key18": "21rSewXvJXUu2AvknbuA7NC9ScPpVNjAEGmR6UHkoQ562AiWCQeSkpMspCqnyNu7bUXDQ2xd9KrBQLJ22hbVzHDm",
  "key19": "64Ypp83HuesYYs8VhuZ5NBTf6GCrYriXENZtcnpGfojWyQ9quEf3VEdKYVbqiWvGqrjtCzTQT8ft3YvBwDbHp945",
  "key20": "4XNHxeEvuEd22ENSrpgwxEKcTsEgsUCKuq8A26sPJBhBmmbqximem2PCzPJJFPZWESyR5R5ZLsNaRW19Auohd4Xh",
  "key21": "26n69cbwZkRLFGDryM4xsfawiZv3S3aEtjreRggoK35YRFb1BQMW9xRKfQWP1Vp6yTCbp2L7o4yUk8upfqRcomkj",
  "key22": "ApPKTDQzJ3fHRfrFeGQQaPghHv6DCR2dCusayaNeJyGG5Hy4DL62jE9355cRM8ZYqGG6AR52ohNmZnXr6Wg3FBS",
  "key23": "4t1VoQb3BreG5zLGzaaer9o7PiSdn3kJXKEYzQkg9KaRHfeYp6xCjycX8Yuphjp7n3TbtM1gqKMxiK74YSusu9SP",
  "key24": "3eDYYTtssUpHkn7sLF5PdrUTqBWpaoaHxiqiUXmzDR3yihonYnut7mZDxsr91hRUBsH29bkDvAFwv3ESM3bbmdqp"
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
