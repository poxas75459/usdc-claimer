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
    "5DAfk3EQ1j5MVFHUj2vFHz6esZPrXu7NHbMGiBhrybBrfY6PN9UmYzyKRqDqZMEG3igEdxwBg12cak8rUKdeUCBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ihgRf86cRX23uWui5MBdTdkfGYtepncgKp198ryfkzqkBD52x4HnrvBsBLrVfZ7NgH6fvkcC3Sx3UmF8dazY7wx",
  "key1": "5xKBbf5WC8vHHsfi7QamPnGjz3KERM9JfMzvr3goU55U5KciFRuoTFc9iYFpNMY7tTo2fqqyzu6wssC74xiepCEJ",
  "key2": "Zr18MhFtYpQMv6SypYvFtXoJkwV7dnynrp435DhUDbdumxG2BLfB5AJGcvArTGeCx438q2CP5xscEXJnaVxs5f2",
  "key3": "67aeNCrPS66DG6QzSbwGMiEshjthqphAE6AtakH1CCRFptmQCp2R3WjTT8jkMGVt8NwcrhKyt1NsmSC397nqWzBC",
  "key4": "3MRE42MU92ur2GNVfmY9mHdVDTeMy8PosreJB8LbecuuSTmPf2NpZFCMEZSDqcRV8dWv4MJ4YxUUZ9WXZCrppVt6",
  "key5": "1voDpicY5dSxQHVW6d2WYCxegkKoPhtFf7GanverhYhpdmdGY2Vwakx8BsNJ5DergmZL5XENXHQRCySXN7g9fji",
  "key6": "5ddhYixTHZkThGjnJ1jbx8LXQoZp4G81pVouvaKSh9fMKaFknuE4jK9w4VEgZA4s6L5EXHJWfoPmRab3suhJXMYS",
  "key7": "5NCdwW4XBAPpLXeyiYHHmyg7mVt1asYyCwEaeWcXQsMJK1K3DGeJpFDfdqF6RAYZzSq7AYRnf1Z2YJqu2c9EvVXv",
  "key8": "2SDNcwScJG13NrrbfstmQWzzx2SCt5HPnDozfzmCj3PfQkeiHij3FQZ7cQvUarT8XmTkaNvMDNTLioqpmpZUhPvw",
  "key9": "3qoo4oJDzAa2kobAMcVBk14zrnuy4XHPK6qA6LcaDsmyiAqEiHzVXYS149svMBhYkNodtFaphw9EiBtNv3mEymE",
  "key10": "2dDKhrfwbuDrLs4nxhtTbozGSoywwg7hdz8pjHXoLAk7UT3daFeKN4kBeSMJZpdMPqYCYCL5FEdPTwXfsSSmTPK9",
  "key11": "P51kQ1oCdG927jYcs6PqnGiwxxniGT3uFu37PdXp7ZxjvmttYpVx9hTqH7VLHP9mV9cFhossw4ht7fpWqyaPbnu",
  "key12": "4ZSWv87U1ydcxpzAkmBuaLVuqoFb1GRGvPnQHHJxsrqYFnM1TzPTzbuTB5VNBQJN8jh4E3kmoE7a9ViVkc9uiF7d",
  "key13": "655qt4ubcV7FtgxErKoCFm8pysHZbUvH7VxZ5V7Gj5JTBHd4ngoyPrgcVVNEL3VEF7zcCDRzswQnCXZqJSqrtVG9",
  "key14": "3i7ifqemgsPYey6GF8sKJpqHNq8fTeACYqF9SCMfZP8nFAARpQM4bQg7721aeFghGJm1xFLJUJUpe7dL6WLqn9eo",
  "key15": "DHdF78tWCjYz2MaMR63yk6vVxFzcCgVhoM6319uJ8pnH8VQKQfFiqSJ2cfcBYmAP5oCimmyeTyEEu3KaJrimcjH",
  "key16": "hExdWMwRQPmCiyfNk9AexQHci6WmyUK5NwqWha9eYjbimcYjvBCqj2zBTXLeQ7QDZiKdtoMVFHmX4wXANfWVktJ",
  "key17": "4yycNkgpfLXHnSJ4P2ZM3tDTj3E6FPYcS13Z51xvgKs4ocBgP9Lrq5fN5VHU61hhE4xC73RZ8dfEQ1UK2Yg7P27C",
  "key18": "3bdvJRJiAWGUTfKKJjPnhy9zRBjbFm3XmgvAzHs9548uRvwgeCbpt8jsShyaGLvds6c5vWF3yun2PxF1TG8rgk6n",
  "key19": "AZ6Nt6kQytTjdkv4e289TgH2VeP2YkV8zS7JtZWiXhxmbux3xgFJ2XFwqwZ5Jp1vjDmVbzgs6ev4PaKzZSmjKn5",
  "key20": "5Sv3f49Uf5bG9u96Ci1EDCwjaHTg89ADhwHqAGuEdzYvEVoQzLiJ38J9cXqSsi4p3iBiBvqmapz8yD1suxafxXYA",
  "key21": "4URkzkncmRs9n6wDWSPzNDe8A5Qfj4c9t2rSxntNTUeLjniRfR2VtdUkHoTHyKF5kXchJP3CfvvwT7VM9LFYrBei",
  "key22": "4dxSbofv87g8mQrS8ZYssCKNT6CegyG3TQjPSpBKETX4q35ATYZq9oDtJt3fEHfgFSJm5jXbASG8RkA7HCbjVjqr",
  "key23": "4h9BWpaK2oq3N3gQzmFXamvJ3qQbx3ctKEAmiXdzHwavPto5dtCK2L29p83AYWcfB1MVQJGpKABJ6nuuUUpwwMCY",
  "key24": "3aQ8763L9k8d4JAQuXxxAS8q8s93b7Y7TNyRXBaxHCDbFBKufTp3omFf8CtnDTCQ5crH2LbtFpcxRUQBeHPmcmam",
  "key25": "2bD8WSCfa2jaYDksRTotXACzYYpzmPKSiT8V9gz4YSxBwNwQFHY8fAFtxCaTa5xNaTdx9pStrFzG2wXEzRRRKKRD",
  "key26": "24J3mGeMBxmiUpSWJbwMsfKQBmR8F3Nyv5oJrUyTjr64tu2BhAns7cyAXxBnwc1GWtGjiJpyKFBpNP36nUYBGzhc",
  "key27": "5hYqVq6oys9gKdBRpvrK5yfXRoboKaknLLBJtLeiX5KLXWbs1SbYSWiGaYn4vd7od6KAyD2CDA3HBRmdJwSQWsVp",
  "key28": "4iRpwU1v4Cp7TYjMJ2pvB684iQRCBuk13goRpwQ5qmDGL2UUgioVt2i96xVn1c1XKSdzTCZiyiWEkdPeewW5rHGB"
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
