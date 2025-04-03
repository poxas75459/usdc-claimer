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
    "3zskEz9hBmxrxnGWFc1qj2uGWoAZkpsUSYEBsSrG9o9ULLbGSHudmNYCTjjCCCcs9bL4LindTQxvEShtpihxXABT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zoqSqu2jmpqDrfJzsSP4LQZRmahPLrFA9xVEycB9FZS3j9aFFjJwv3wtKrJ3m6q73fvxwF4wtmLfzHya5RzVBUx",
  "key1": "4DMT9zYQqDKtgXRy4rkFZGhJBHy5HLQezQJtpakJBaqCP3q27r9FapmiKwzJ9cQCHirzkdJUnmqXoezVa3vVdAmy",
  "key2": "4XfEiSvvWnN6QJt69gaFXocAVXh4H3yXJD53L61EjA3fMCUJ9fekBaxP69Skx4KkScDkLSuF23MazVkBhsymF77N",
  "key3": "71CRqjC7ScrLb5yMigMqxz1xUY2LyA7gynPTFLrGMTB3bm3GCFCbnJ4AVVtXiioMEjCJi496EMYtWCosb3hsCbR",
  "key4": "2YBfNWfk3uoDkRjPrXYg9xzbrsX868T4LXdZkbsZ2YVoxe1W2yY7QgaBFeyASToGgsabeZtXqSufZgBPPLGTEtCq",
  "key5": "EkaBgpVpLnJ3NXMNjEUhxe7QfqsLGPdFv24JqvZHwcLfUAjKiBxRE1GANMoogQ5WAwDsayugj5CC2ohejhDecZF",
  "key6": "2M7koSk6v8e6JJVwpkqtWH5efHkMaP1cqU9kzuwDUUFdKQV9fwyoRdUR7f7hXJpp7yTY5cE7MEfgqF4WoExJ3XQo",
  "key7": "4Ed9gpdGkZ1kWHDVw9FWedAddXEJb6AT5kVDnJihj7YFwUbzRtoNsipfVyDBGNRVb1nwb5T2fWkxFbNwsNqsCFsq",
  "key8": "31b1z2bKQsGDpcLhaQPKwpoK1aU3RVe7sWMpdpbBWAxnGez998h75UgwEyqSTiBVmZLiFTw8JbdhCo2VD8bjoWYG",
  "key9": "2fGBaaQHQ6FP8HYtwK9udpDnGdxwSvdSCGLAe7PiY4N83wTYH85xE6mLjim9AGvMHu71uEhn621K8hCTESb8kPeg",
  "key10": "5JZryjCeaBaks7E6ntezwFKpnS3HpFtZ8xVSoVwbP8oNcoVh1uAyv1ra8N3jxamSZuw1sNGFDUSktUShmx89Ggz4",
  "key11": "nS55rg2m8Gyheak2AuNyc6bX737RYjvniZ21u1AtYtRDPmBarzMVKt9ZACAzoPRSA6KsGsRnz9hBuXSkrVPP57L",
  "key12": "2siPFX6drAZd1jLopn9rZvTaedUrz89B4UtHEMKJ4YYCvxfU8QkBuoK8P42NveqAgxiWPR6rAVoMb1Bg9X18nNNL",
  "key13": "629vRMS5MinMsBMexbn83fgbN7rjkugrY2RkYtTdWMZ6q4YuY6THiuAEM9EzuMTQeghVhvgWgNDrSrBR8twZ2BmD",
  "key14": "5pfPPuAUQVVnRsvHPsZm2rJge6hz64zCsbofU9gkmgpgtsuQVEs2NVYT6zFjrQSSmRJm6W4BCkfR7BjyyFVh3wvZ",
  "key15": "2BcphH9PEsPaZj4CDYLAUSbjmyd1Uqa4G4zRdCkJau6MPrUCyZRMceUViqayHCMD7yQ5bLd6VYPV9LRW2vdi4zhp",
  "key16": "37VoFWLSK1rEjcxax7buibNkkP3kxQjmZtutycrPJkHFZApvYe582PjLm9FUhFJnUPbS2vSwhXXE2wSYHpFxDi9S",
  "key17": "4VF8PvHS7ndEacweFGPkeD6c1bjyJZF7aJ9b5zzRfEtC57A1CGm1XVaDik4PybEnUrKfEYpQpXtvtqQNWiM4r1V2",
  "key18": "2eEDydTsJ3khax7eLrn1mv8oQUeLg4kupJhQADMQSCVBMrLZG4cuJWC5Qzchzqret7iUh5KoEd38F5TWGZ3Co1pw",
  "key19": "eSg5ZSsr3XVkGmuwm4cufy6q3pGYoSoWHKw4YGj4MzVmZz1BQkUbbvWe7MJpgvt2p5cMVnRrVzduihzfZ2CbAFZ",
  "key20": "61Mq1a5V6rYrLfFsiCYr6r5JnKkPjz5gKw7oNeYZrgrrAoR4htDmrzYM16zyKhojjWWMhXJgQzRSrDes6Yq23uzZ",
  "key21": "2jhf2af5eNRjV8V1CjVvAcDpLpiJ9ErwhwS2T4L5k2VKZ7UQhj3suin9E4xiWnhYYTAvvzm6bVEzQa3y5P6qLWUJ",
  "key22": "3iNHRKduzEJTfRoWjD86RyQ5VfoNQ7VJQwBQHp3sT6MJUQKKgzrayrrpsnc96FS3E1oMkf34UpYB8yPCkf2pKiAo",
  "key23": "2v7RjjwwrwEn4uwQQHFhFetGVdkqV5df968xQXr1WLBe1NbeevsPW9JACb2vq6obviY17RTevieRyZiv8jwXddzf",
  "key24": "8Eb5MS6Q17xr52NTPaP5wnQ2Dyv8MfHBhpS9MSaJaUUhMoGBdf43g3BWXbGo44ZAqk7eAiW7AVSRAYJBtYBbtU6",
  "key25": "2sv9KDvnhH9Vyi7rCHe5ptBnQhHiT4ue5VtdJxhDNRFfieKZxMGk2RyqV6F5v3dPDeatht6CFiaxGP1hAiEXAQVM",
  "key26": "3Ac26XKk1iVT3P32CJs9SYRpqwwJhiS3ADHmPbz4d6GXs27KPpFeW8xKGXvqGMJBZHeKggTxZociNpxkdtANjNCs",
  "key27": "r7xX5kXa8Rpv3Fh8tciGWzpCiBK8a1NEa62vpGviUdLsjoEb3xUj57rPkTSVDxR8kP2SusoPkdx9FahYu36PW7Z",
  "key28": "4WueYtFhKCWLPqxs35JeRBuf1VUmpjJRHvBSKZ9NkuNp8CmskcLdZ2roc2bfcbCtZqtBDy8sGvCeoeXEBi46k4ND",
  "key29": "4yiMVaJ2tqV72jpFSX2EiWjBa8UqUbxAE3poXfgmvea3yhXv3X87B7HJmgKPbRzx1YVRSWYeykpwwD8hMRqDkDEu",
  "key30": "3m86cAQnAxih69dyTmHEKGZ6pqg2hocaV9GWBhqEzFMBX2zuGtP2xf99dcLVgvnZaTzRxwTSbTQZHBiFFgxczEGF",
  "key31": "5K7EpheHPao1LpKSb6dJCkyNq51d8oHS3KBcA4AnNaPszShm5qGFJeGkLcy8i8jL2c4ZEhH6NtmpdYy1YWG9Q6im",
  "key32": "2RtD4urxmuh4tvUaYWbg3SAT41MmfaAfgMM5w1RGZMdzMCCMqRXfbVwVPgkxPbRjn7apJdjscWQdKqhcRBRi76KY",
  "key33": "2CCGCBsA5y2TBDmCvUpCPgEv153W63igyXo1DzfecCp5dSxJE9Z1gLb4GTMTTkKdF2szTAhQJjHNt7Z6u3k2RmFL",
  "key34": "28una5dTgRz4qj4jRhfPMoToeZpXXZnMGUgbdEWeY4US1BHsZb4ZR8tB1UEzHnZU8zPpBcfLocngAh26QSv6aeTf",
  "key35": "9fhHVNbMW7yWWomR3bRwGt3YyES7kcQCgrXz4hV7XEUqExxsPbL2LLZembfsAihnvCzyKw4FxM8LWVoEHS8u65h",
  "key36": "4RLzx5uUjA68TdeYuKeTKGSitN5XSBq5BDXH5SDxc3rEE7ae9YYi1kK76EgtRgiPUTSCKjE6Nai2kyGFcdakzUPc",
  "key37": "tF5tDzL7mwp99Ain9hX5ENVg8GG5Bq8XotK84zYSFhhqBoh4R34ZvgTGhB2N5xZXMaLYL9Niomg43eXYePGXmBk",
  "key38": "3UV7nzNtvfD8pRb8MRzWLyW23ceA7AzTf6L5NiHopigN1xfnFSQcAXKxZiZqhmgU247tMDm6SU4hBvj6Ym7i8c1g",
  "key39": "tUers5W5T6gpENfxFjo3TFW1nGZcibvq3fczce977NnCwtjdAiEPLmRFBqURmUP5BkyXS4GvBbuo1atubXZDTzd",
  "key40": "4uZ8HcpjpASX71aRPz57PQuntoBFNbmFYepguf7qDFgpvhR1BBqgdTBhYS4Kfu9C5tzcxkXrTJdXrun6nf28CuWU",
  "key41": "uKP6dJgCqfAZdxUQWki7eNnsLXZjEBVMxGptZbvH3WpguZMkyzRywzqyhqZBaNX53Qusc4UUexRAWjaeZkYibtr",
  "key42": "27VAkiqPwv7fLM69cjVSiiwQaGM2HgMxkWLvYBQcHH2qnrWkjN9FjikM7nzg4GvMcYGc82bkK83pw6o9GSjEPtg5"
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
