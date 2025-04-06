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
    "3CVEVFtN2jCjojdhZAy1Ke7HraVue8wc7uuk4K7LcTkK8cZgY3hSi2sveFJKkb7D7RarbA9QW8yqsYdmVchp5t52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W2s158Vpv5PGFioJetSM1wNdnTQBPJNNG3GmMpAPNV8RG5RAc3NRa6ZSC17byLiDZ5hYra3paxZ4efB2XNbDAPF",
  "key1": "4kahFmDkXwW1zjhRo7CH75tG232SZagYtoCY7yKAo7imQsKe3bgzVgnTMyNCLBjxfKxfoUVzL3RAT9iJ6jtpRubP",
  "key2": "2whvujLaoXBGQtP7oTHSFL9SnTMg2A7SJkJnYPZryWCWAbqDnUD36pgD1vu98FUhQGLx8gNSXUN8ou7ScBk823CL",
  "key3": "3Hd39czY8xxyeGvf14NkqaETRmPymHKhgXZNDA2Uavz98cVVdbZCGdi2qt5n4xj6BLBhM5p7qWZoJCQvZot16hQX",
  "key4": "3ANp3BCbdZD4CSwgrgvBexD6C6vyPePfPHTddyeGQ73kcT9fzHqqQKn4cc4xdWULHCguBv4EjVx3fJHQy4X8eL8Q",
  "key5": "2FvxdTu8xt9f161pTZMCkcLnAXAzoXcj2uXsSk1vmrFoFqoTnL3c6EcLQgpriLyYtRwuHTErm2dQmYHanP3t71vq",
  "key6": "5oc7TS6TzZH1qq9He9hyEi993N5RoFYLXcSLQv9qZ1V9EU54jrFKXaFk8DvDsq8YYCwidSwBHcCTzXYooqKwrNAQ",
  "key7": "5fHYdM4ToujGWvPKJdGE3UjYWVPmtng2d7bpcv8YGZXhdDWUgxWCASrV9tgS25krgsqqyrgE74Nun1aw9ijnLagH",
  "key8": "RPDCzvoQa9Qc2CfqPEVZ4wvXhBpeQuf8C9MgYwbfrmmvheFYoVUpQwv2Hgwf2eHpTrMfUG6P11ZpuBr7GfUBdWf",
  "key9": "2oyGE5dKqnW9bhuYoJudmdZwuJxGCDVYEmoodDBtFeYoyfxqi4FfA2jk28Z8VHEZn5C9qvGoaBreGoW3XH84fNjF",
  "key10": "4gWFMbDtLwu2HEbLm4D1P8kFiJxhqta9szUYzp8EdgSufA9FvxL8FvkfsMNX4LGzo376JfE2sKbVY4v77p7hep9B",
  "key11": "56tuGWxQeS75aD6yWqPfg6xdc3Pc8yZrA5wcbrVTPtsbFwEidH7gf5f83Uz6vYMePzKLQb4wZtvobQhQ198BnmGc",
  "key12": "TeYgs7syKnHTn88DF6KF8nWtHmGg9usvhpWvAhgzUqkyu3HzfDy5NaAchMzwbJGKpBqVVGGFFBL8UMU6Tr8HabZ",
  "key13": "5vs9RMEyveuCH3qoN61w5xxBn7Fd4uje7yrS9ihxVcHTaqZk3pRAf12VwJoUySb4ouHAjFYpFas79sg1NkbzyKPG",
  "key14": "4HoAJiLiNfSnYYrcgEdp1hJ6QVDmrtP4LpdnLaqGK18emYMcMZRrNm7RJHHKjDK6cegETsDvjkhf7RDZzsPdxe1Z",
  "key15": "3iqtRQdm3Ro6gcTm5vbDNgtkbVQATThVoY2xv7zkxtVPEjRLNja4qySPZXsnjTXjsE83Lq2wL5LmcEV65TkuJYfk",
  "key16": "45uPPZKxFJRj4TUH3A2zFbSJbNx7QNYJxRbBfQpnaK3KdxqfuR2k3oV88UiBoscyZUmtdiqDmhi8VApRSQp4RBnr",
  "key17": "2Mj1gMGyuPx8SQ4deNVMZsKmtDdU5GvskHZ2QGkKT3dgqJT5fyMwq25ko8ZF6tcFbaeFE85UFRTHxHDkKCYEVjSQ",
  "key18": "4zDyHja5N5YBbgfMm4XHHW3YiLYp64AAGaUweJumcsUMQVENugFcu1FRn8RDPaZHyjMHEkEBPUpjF9m3JBKFfmGx",
  "key19": "3aAZemiCw6M6hu1ttuwumR9XV143qWacKmnd5zhAGdv84wUxdrLp6tiFhLvzbmMsgqdyd9AC9SjjaZueipLBPtV7",
  "key20": "3gJxWcqW7bgqJpVRpctcwsjNxmYmHxqYgTLA52pZoyMoQsdZmt4pDrkkxwVLwYA8FzA7WxWkWFQGCoqv78eSs2cm",
  "key21": "583DFhx4WdQsxEsUFxFHWEEjEKmWgWBE7uPqaDbDSeb7vxqykDNynHjoqsFQxekyxHH7iD9GWQwYGLBnc4kTTp1d",
  "key22": "Gd5g5u8iYPtKoi6tejo2vBbWES3K3aeuvUFEp3vvTtmukV9VT2KfZ9CNx6si6qQWLSoH3Yct9E95cb2npJNVvg2",
  "key23": "3kAyozpMSVUiEzkHVdGQehqg9N5j2H5GK6gBKe8ap9Sg6MApNZF3anArAkGjBGJDfoRqz2F5NcT1te2mjrDUGz2z",
  "key24": "2YGB6bF3miXExagCMLG3Ae5d6bpax31N9Y11iZLHtXWCwgsUbbPft8sjRqmDLKxvQcz9gaYDQxX6ANC4qmggHqnQ",
  "key25": "4ad9sTA3y1mR49kx9v8WvLPwaTAzXLwXNGgT1bdFz1mFq1NneYikaUkGSrrhz4qhmL37XCZEVYp8psRLAyrdNTZ3"
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
