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
    "4833KccYWGH5EKxyDXJxg3gQtX5EMFgPGX6KVatf35YVbU4WAzqVmSY2dY5YeihLpQqBzJzrdGeUvNRGgJ1sx6NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UKPsYi7v4xxg3ydwfC21ZuiLQtrka9i3FdMpF7euXfhxmZ11kfSe9texV9LaLDAPgX6m7KHRaTDzMEWjmmUAgc3",
  "key1": "4vEPaq5aEmmpd3KDGsQ8bQaGR2yXwHo5f3tNLd798dEuo4RrJcoR5b2UMXrkDbp34L83VaqRRkfRKzrBEKtAXuhE",
  "key2": "DDfZqcBQ2h6Td6PmFq2ts2bDzjvXabhjZyvAPBiA6S2Tu71AEYR8yqpNZuX3guKd1QyCFrpdN1AvzSWturteEdm",
  "key3": "2sNAyzhmFcXXjqrujhC1SqtymVUh3gb86Xkg9L1P61RNc7JnnBWdq4iBAJqoRxvQzLv22bFuksYVnq5BRxbeCW3H",
  "key4": "2mKPk2NMdJvpWPNhXqwTeHDJqELCAmAXu4fPseoXdfAix9D7T11reVB7rNa5kuCJWJxv6vyiWYvKJhaPsZAs8eU7",
  "key5": "4Pi3RGxqhTcZ83gMEWKCrhHqRm3cc8KwYjywDkaV3bCbos1pFRcmoHiyAXq8BJCLjVrXdsyaLXEgBZZ48hSNPPAx",
  "key6": "4skYbmGC9N8gBQXJczXU8RbYXSAkRBfAgTGLLMj5h5z42ZwNZzTBFwp3fEsVfjXDJoDVPUZyStGxds48Hoz6Z2BT",
  "key7": "22SU3vnBmRgUUBMpj2so8jQgnWshHdv7SCqmUeEFRyVq2cLo7Jy3jEz8K2Z5xT6D8Zev2t9S4Fb5GdthUBwTmv3F",
  "key8": "63WNtPRfBxmaEUK8ikEhX1kGJ4tjD6uRY2a7dDkwiPtCP1cCgQHwyDMVBy6HkePU8UrqVG9azwLbSnVju9RrUqxK",
  "key9": "23v8o3WhEs3RJZhqt6aEDbwCJae36PTqA4D2UqtaCCfNf9wof67EH8isTB9fT3PTeCxuvdLv4epnBXEAw74cYkVx",
  "key10": "4gF7Qi81RCsqoy9rQd3ZKWSrBMmq8jPhwJZNhCLKe6DyixzYYUGDs1UMDxLZo4EdHgRFQ8ZSq4fGgiBeqT1oTFkZ",
  "key11": "2UNC9vxbGBoKizjutG6MgooTkYdpv5ZM5TUrnoVRPFLqaSw5xCNtbYFzgEzgrWGcXGCHYxPy1Pju9RccCoC9rPve",
  "key12": "GdgtMwKNz2KL2Yq5SRn27wpdm9F2gYryvBS9XsSjhoFvD1nGuwBVW1DABNkYDTxLvLBkzBTyGPWL6VVXUWivXKo",
  "key13": "2JkGcqpHBWJVyX9wFGxjvMQiXUDWRoan9jhVq5pkycZz4U6zF4y4oT8VDr3ERsfgPmefVJzHmweav1Wp8xST2F2d",
  "key14": "wreAnQTYsGiX5Go1Dm7o3p9Z713Uq9F8EWeRrz7e5VsCNn2PK7gSPYszSxuncvUU1cUi82cMy6q9dPF2rCQqkJf",
  "key15": "2tgmE2zaztspF4bZq5GTA9S4M1g41t5aUWLFvCfT9pTGzvnjkmppd2fNFcfpWsMvBzwv8Hm7ztahDjCy9cM8TkwD",
  "key16": "4iTorejmsExQebKaeriaDqedjqe33ozmhwpcLnUvBeoyyfLHaPQ3Q1MYpo6GGdXfTm5zCetiSWSNQ3TBsD5TytJR",
  "key17": "KVfdACpDSSpokCLt7s8SpjJZMXvEAHFALNYrRm71aSCGHzJk1Diuhg3bHFTa2RSjYYMQBswDuND56KHyZ1RrXdy",
  "key18": "238Ydbu5VEg5sY7ouMjsdrtq23qfkXVpYroBJcfyJHr3gd3ShPt1SBJsxtpFX7AjnTeRTCmDJuL1kbZtKPN8DNu9",
  "key19": "4t2cT7npk1R7YwbCeLuz2TCcQJsyjHayJNYGffyuRz4qLw9dy3jWxMFau8UaMWa8AbnBozco7S8MfPxentrbJbaT",
  "key20": "65fodQsr3MeNV9QcXMNfohXY4DLKLuPxKdKV56LmteHwaFtL925srzcACXzrSRJa9uJo2jeSpWuwVB9sZEJyNtmG",
  "key21": "4HFFoe8hJgXsVxMNb7Hv1isEzXtpcJqeLt6WBxCmMsx28vDHx83H9VBKVftu1vS5HEzSyd5DzN4eZMJLtD1zf7UU",
  "key22": "4PY56PDR8s3TDWZrmDHGVKG4vtzVwo4aHwXwqqZXYDUkoMHj2rcBoNqswkUK9SWnk8gUfS8nR9Qh8VLyX9jK6ADF",
  "key23": "57xzZnRdraPxCKZ21magf8vUZm7TQXFriEu599a76pYuEUqYTEhNJUSKn3U9t9rDaJfRqKvrHQyaUySe6DHq9mye",
  "key24": "3p1qGA9Jh3LnzukVwzVPKobd2gnkmFbMqAFrxHXDjYkswJB2bpxA7uRJ48wpYRdVdMYpcTm8RTUvkQMbcddTsGcP",
  "key25": "6uVNvqnpxZhuYfqqaB4Hg9xprqM2H84Nxw6BF8PsCF2UepLGbgRj5g5eaw1A5KxkjfEd954PLNxZkKCvfDHk2Dm",
  "key26": "316LsLzHXNQKRdRe41wcz4L2g4Vwr2PpdAc61moAzcSz5p3KZFipaqkexsTYTc3pcZVQ7etAqtyxdzyaB3d41zUu",
  "key27": "341mHJfzAfTS4P9L3p5RMisRYyDowq978hXXC7B3zjkYZGdbx2XCBHryi3jR6arpU4nhjhr4aMUemcDBv94dtMR6",
  "key28": "4XyCLmhe8pmnQ5z4SmFPu7griGnRHh46UTZaJ5qQWmKGYRiqTh4BiL2VQ186M5xf5KWoNamJbza2TwbWdgUNZzrp",
  "key29": "5bVGWH9ymMJYErq6KC4sexkgAM3ZaNc4fe7DPb1eRLrsdT1WiMG4KFLG5EsmmUr4zYswpKXxkHkNfpBUc9hbZaDo",
  "key30": "Fv1PkdK7NDBGyvA5Z6TfP6QxeB2JXoZsUwvX2WGspKjcLNGgjcmNtRSz3aWTJ2QTSwcRCZ3m47i8WUiFFN82dqz",
  "key31": "2RudbrLg3aLiWA7DKYjx3eHdUMsvJiVYaG22HWH2Hb3tu1xtPcDsSFH5e1QJeiW5b7zUKaSZEy2S7hv1CDKZ4P2E",
  "key32": "43v3vfTvLhU3NbqDdfQMisHnrxq2poftyTWJm47uTTeYBL9LGVTdKuRWJvAvWa1eMsEfUKCYPKA6cJLrduDzRbq7",
  "key33": "4nWvCxna2bquoBTHfGV9Np3dzRbBEL9c38YWTJoumfQV38DbNJ7BfZCBm5noFghUcNqJ5yizbDmWWgb3rBzkDJc2"
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
