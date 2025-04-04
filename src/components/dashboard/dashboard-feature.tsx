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
    "3o9RmiRaUMmA6NyKirUyQXSaqqCDbKdfKN9oz5VEeDgLLzQNghw5hmDJ9xDWxJvYYqLkLsjW3n6aQU9wwtTwGmJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X7Ti1uZXhNKAKLKshabMMYFxQCRUG2DVnZmGH2rfxYQKzp6qYfpV2A1nSqDCxPD6HjcQKbAyd9EhBb4LqfeSKZB",
  "key1": "59ay8bZFssjZsgWGyVfhoLg2anVh13NmNFe8G4pCEttFu3jyBnnPHDmxer2CQnRXZy4oM6wSmFAzydG84QN8UQVn",
  "key2": "4Di84uChcnBrrTTFtJu3dUP9nNCwEpNRgJv8V4zTLDYmMjrHR7PnYj87oRQ1fvSad7kkzL4znNJgh35VoaQYNhZ2",
  "key3": "5nyeYXykc6JkynCQ1Hdhe31o8T6bww8gLeriPmwZgip9785ugHasZWA64J3DoNSxUYy2HUjda3URcX1Rbc6HRXfX",
  "key4": "5HSkquujvapxNHdfszuRZzVxScbwsZfQHfDFJVfs3KqThqyBGzD1giHdAreCFuDxT9VeHWzzCuweXBJG65cBnQQA",
  "key5": "2yaYa7Lgtm1ot3mAVtNtXNKYH26RBPJAMh555rNyZ3vheFP3kBjuTojqJxdAZ81ZtzDbifK1efbQP7nws5XFBuug",
  "key6": "3QFiwaHK6X2diwsEspdRCwbsCyNNiraeTt2vdzsJoEZ4oW7YZYD3TLNztmeXPiY5TAfUS6uaCXPA6BsEVRtF7RgL",
  "key7": "5nnobkT6YZ3mgHwRX1LxFitktomnswg1uEASrTrABjaKp5zna7JERQejUBu16ShQfHSenZyDHRxuTRDukjCFRYBk",
  "key8": "5a514g3NJq7bmipEvnFZyPU5pX9U4oPEpNRqz13fADjZD51U37YFrAsmkGJGrRioLxtKexUoY7W1sEJcTcqggVp6",
  "key9": "1ZkkLurSrbXQCYF9XdFDN3r7CSeoWsDcd6iWLw71k7AbCz3xUsaMLRToEJvazh7AA47MgvgAtiuZnEGtShdSCSJ",
  "key10": "5pJJWudmvMQPWcGbGuc9bJRkyGcrMovA3AkF1SBCKBUc1EXNUVzYMWpdei6y2ZitupS4EZDbT1ShY68raQVuYiSt",
  "key11": "2xborRt4fRUWZsy7kxHQzrmqdb2uJrEj9edxpfv3VqjaYaVjqtyqKTq83368oj4RBLH6ydwkNURH2pVtZsedLhUq",
  "key12": "4rCLiaSJWj5jbr5nm5Ra9strcUuzFNjo4LD1QVkQwNzakewUizRRH5yXdKkjbBQbw7LYdnnbG4v5HsehvK1TsU8N",
  "key13": "cjrqQom6wuic2sJKJMnnVC4dPPNHYtxJDY6RJ1a6tFfPB57MtUUstkz1SYRquSqWUtU6FySk7QoQ3VwfFKrMkPh",
  "key14": "3wrU6mbW2xKXJVydWJNE89N5zK6LRj38q2wNgNY3fUXG9EnqEAFoa7P9ck8yCRSECssm6KBqVk1o5ZfUBH8E8ymk",
  "key15": "4gfBKHB2UfJUNqsWJkd8qY1R62yvdJzmCyKiLF7pYQsgNC7ieQeP7iJHUwncN1rm3EuPiwDySUCQybd2eRAVmLa4",
  "key16": "3ddLftgRUiCrbZmFGqmLUZ9svofy5kaZMKmg3eNnKcgDBqfChUzsPJWA4xLPRAvA91TbiecMWmoTd13SSYksRuAL",
  "key17": "269aMWrMYm1B1Vb1iAgoR38BckjCyCLWdQVGYEvfvpSZXxnUhPHn7mj5LChfaggWiBZeg7fuSYY8m3FUQpnZhzEF",
  "key18": "RVmjAHk3T2CGpUhx9qsyKVkpbL2gdSxEGQKq8VSKF8xsPB2M2mjQpEhMZANMTcDYdcbXYGH5k9AYwu6FR7oCacN",
  "key19": "3ikymC1oTryTMQKkHCxPBSWAG7fXznPypLZbqiCThGN6KQ2j7ijHqpATGShL12B47SMGjENdDupgd1FiZCGojfxT",
  "key20": "3Rpe3XPtgscuEyQCwqDyUMQzQyR4o14YsA5mV92UZrXEGDSkYqv4VTPc6E1ZenW5cnB7tWoTgZCoWB6VScyhKbwZ",
  "key21": "3sPq7iapGnZHvYHSACjXaFUL1wSg6Sf6RyuzV7RQy2EBsEWYPserFeHDF6Qm2m2QS8mJeHuPUzDdKrsgqWBhauSp",
  "key22": "3LjVzjcEut1xe2341acojdTWQS39FVThF1DboDRR8Rx82nYMSdxi4DEmMpzG7JTaJrLpctos5PYsWsPzQMBn1hjx",
  "key23": "36vX35yvigBKpfRztWVKm6Ag3ko2w3cKw6ud4ou9fus3FL7SLXZiCNr3eJvvubQ4wAPdQwHRwuVKgJ6HV8rtSy6e",
  "key24": "2rj8ogDTeMQyzJQEyjC8hnv6ihwLmPS34WG37rYPfakcHU3mDUyCGK42Sez9iUyTVyH3HNCK4D8FCQKzETftust3",
  "key25": "2tFBppxmsVudoyWMNTVvEEdwMWgsaty8wWt53uRvWQxMmTHkvUbtSs5tiCFKe8XDYnjoPRm5EyWjpjZUPf75mEbF",
  "key26": "cu3V4cnZ7kRoVPQA595ucjoGMn14434rpBtJnGywjxdoCBFxTf4gvyeKhVTHcBnRFpnw4NAtcAUSSJum1yBdyqk",
  "key27": "iy7AAM3Zo7oCpFJFbGUeDbP9vL3vToFoyoy36P36XAq2Wjq8NrxMAgrsp6yb56GQLwdvHUoGcQsL7S3Z3QLjb2S",
  "key28": "3JWFmXcQdewKw3KdiM51k56U6GkgZnKgzmbTm2EGApaZ6MBc9ajh3fswJad3jNxacpUnagCKBLiEo4F3cK9Jyb6C",
  "key29": "3tW54FZwf2VErvsHeSucQ1VXBpSnoCPaLqB9H53Vma2ZwAfowgG4izRYkXkBQCTrXnoDvhWQWHgMRdcgdXAVf645"
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
