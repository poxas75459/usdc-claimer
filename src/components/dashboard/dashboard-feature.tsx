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
    "4nnsJBCbGj8XY8FfxafePxvnWtwW5waUgkcVe8Q9BBfStPaJYhksTHk4g3MKJhngay48qbKbevbpquskR2WKCg59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24WTTXgPBkJmx2UFvgdqNQ9Q6VP8L6vr41eTXQDhDnuXGvqrdX7t11GT6GsYTQ4Lcwu2V4hdanmQXZJgF6Nsuiw5",
  "key1": "356d8t18Y2R2TEkWyZtqJm8u7vq9SjrmeJ1G5CrQzSHaGiVyU8UxFs24oYgy5sXS4nTtUta7Xcp69d5vx5D767DH",
  "key2": "2dxdddmRyDLaugXErWX6a5XwXZzXoDQpXD3KD59x1ogvyj76FCZdPeo1RFmFAHpbin4qi1RU1hSMURTK9udGNyVU",
  "key3": "3EEfH5fPLpijFwUubXJYWyc5RRDpEVMaNPtM97UT5dodCqtke5dG7jVFqCA3ScT2WMdFqjdH1kbzGfz4GBTNq9SQ",
  "key4": "552bcxD1NjbMqhCT8d3Aq7CofDC8KNdrwxYc9PyUos96nMS8zeLBBQUQFeTGDpgpsDobAYtH4zcN9YTrY5z6wWbu",
  "key5": "4F5g9FW2KYqY4Bh1ranqcpBrX6qGNAinGg64Pv9c9CDeNegEw7nfPZLqPK5FyfLbbQQje4gvbpnRxMicA2s9haUf",
  "key6": "2sTjWvxjPDgqfKA9vZwT7qfs91K6Hw1GAZVJkCUmfqVoGVEkkaN5tE6ARFLExEnTCp6hsHLZdx9H3ijkM7J7umBa",
  "key7": "2q2tfoXeXimNrh45bP2CmyrWYtNKEbWsuZaQCDMzbvNpHqc65ZFyHypuLrEE7RtRxG5a84oQkGpfBLiqJcAMx4wQ",
  "key8": "n2AqrfA3ATNY1sxnrXS4hosSeq81GNfogsk5XBmbpXhyGDapbFunshJCrhgpcSxwFZxpZnHUQATWHi4aV9N4AP3",
  "key9": "37AgNhSoVhT5Lfh9UZcBzhweQRV2cohnyXP5W951N5do7MPncx4iqE6QSmLmEFPhZDp4QHoW6PpikipDrD4uJj1N",
  "key10": "44mhGKjGoQKpe8kQYSTxyAA5WPSDDgiW7kvuZ5qJPLfNRP6xxkS886ygcFVkE3o2j15kGMh2V5Kf2nBkqSUt8maE",
  "key11": "4PWF2saYJUXSJP4sJUi2YCFcPtqxotoPJx7RCfHoUmaJwnwsyV1dSpcM4vymx69abjVN5n9UmTzFN25W3pJ4NidF",
  "key12": "4AwYVbHEEj5bf4d6AwKzr2PRgAmkgVQk1SWsJoxfHmqciNKdmUU2aX9rkAucziqZMbE7LPJuFYGX8b4EPzRjWZqa",
  "key13": "3y4SH52KDyDMH1ucFN5y5jdn834cbGNyqUC4RFzagRs9kkdNPrMBWbjnD7Kn2ofFKYdiRekvforW9bYtPRkThkUZ",
  "key14": "5VRoxbENZEdEfRukiNkU51HcZY3YjxocJBy9aVxhtPLv23tKZB8vionwTqrPLo8pmCV8HfLxM26ePP3wsRU8EFWx",
  "key15": "5yeCMi98DCPbu8gNg9cncQWSxu2AwaLefHXfhYfdWB792jgQk9LbJPkM85rTU3y1AbnGafaFBfHWPAzhoKo8n1z8",
  "key16": "3zTZaG7bBBuoBU2x5L5ffuYM51ME6nY4kRsjdUhvQWzXJVK8YBB7DhPR74dAWmFLvv1P1xR1qtGRV9nFQwBes6zb",
  "key17": "26Aq4BrpdePYN7yykjMHK8YUN6vtKL2nbXagwkRkT919KxvyhpLtLb9HPmcm6WMPsfV98GmgJod8t1Tz6kUfdLAQ",
  "key18": "2j8S1NMR6NBppF9Ff2sHzCen6LiBssiZW6munFbvcZdzeEE9qAfRZvZ1111oXATjNxWtWW683A3HhUNWWisAww5P",
  "key19": "2LHcVKY5U3FLCushPtHEn1i9mUjtt3FKnm7VzPpPJd5mvzBspGyY9ihBxH1yjui6YRWkcW6a6t6L9Yr8v1JEbT7q",
  "key20": "46VP3mCMWnrVY5ZBFWZ6nD9urm9T4XfzFW9vLm7GJEJ9L2AQhE9VVwKHtFUvMRA27MsB8nKuDDGhgisjrU84435F",
  "key21": "21bUdFzdnSCwpbZYHiLee6DNjzG7Z1eyqrTpUp5RyzuD5QEaTbr6h4w25MyvLb2kaMCGnpF9yrBEN1yw9W43qgEc",
  "key22": "2ZNQzaKsFxkzFy3ejc9jVeXtrjvZMMQZNsvVTNYo3cRqWx63jSiUUoWDPYoo7M3DCykYvTjAhrBgkYFFhAY55VWx",
  "key23": "4Sb5jMBV8xZbVMqGZvmjPXQZa2vJZ6QyZTesFLVgaU1UEaKVwzZ3A1x3F7KQQorR71L16q6T5YYTaJkkWhvcRGMc",
  "key24": "5dhohYA6za26LbsPukmnVSheWhb9WihHkiJ3GStGKcxx85vckFAJz4wBe72whYuK5Avm7KS3imrmfFWTaYnpx7wL",
  "key25": "5mi32NEUWByDUZbWjvMJGL3pRxubb3Uybtmh8HsEUsjSEqa6DU2KvdHRoonWM5LW5KnFZiLjyUPXGUJS62EJSYRX",
  "key26": "zGHq8H2mmraDLmo9mgjoLixM58CGrQZ1fwfxkF6eJPhY2k1fgGpf3JCjQPwUrNBNpKpQn5RhYSDBiV7LjF9M24n",
  "key27": "3i2Smt511d2yVS9VGeQvejFu35Swqfk96DToK8VCCUYUAHyhNru4BkFT8pBzCiinmzQJ6oW4qMbCDVSmxcYNgZCu",
  "key28": "4KrrABA4oKznC3RW7cSSPzxAQ4SUfUoE43UX1BLJ9nAx6ViXACGQyaQh6JZpn4SMro9Q1SmchvKkEb9nvbZZp1Yy",
  "key29": "3QER479fKUDMGcqf8ocN3wpooQAL9J1uNRSWPgJhpb5oL7cb1pcgdAdfeQVvSkjnfNnxrbj8kwrDZFxbRfakZWDj",
  "key30": "6pVhndw9Z8dLTTLYgp7katY7fSJB5kqgzxCwAxxeq9zgPA4hhSjQSMJkBpxD78vF9Jwt3Ufat7ag2QU4tMg5vi9",
  "key31": "4LMMqYmb7C1hkmCu1Mfcc1hkQgff2BsBkH7kBtExmg1XVYUNT6J8yDtrcVY8C3zjgFUPhcydo3iZN7oMf8ZTJb9x",
  "key32": "dy9ALSbkgfNmpE4Hk3QN3xGqtCwpJyMpS2duKWAgJCikYYdVuNmcCwfdTb2RbmQ14AsBduV3CMrKChRrH6F4G85",
  "key33": "5ExyVhB81Abxwz41pRKKTYgKpwDsTKsyiAXwBbjza4YniAEdgPhuViCP1t55b8W6pTQ9wzyg9b821EGN5qQrnd2a",
  "key34": "TRcsSThoD423g1jKGa6sB5VcsqdoPD7xuNiSH2t9gdtV5x8Fnu5jf1kMz5uSLwgt9kwDHSGWe194DQBwE3XoqNx",
  "key35": "2RRUc1Xno6i3Fnsky5bEtLogRYGnEjkEqUNzpGbpgTwrLYXocThgGj8679KeddQeJnqsuXon5TZrX3HBoxK8zVLj"
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
