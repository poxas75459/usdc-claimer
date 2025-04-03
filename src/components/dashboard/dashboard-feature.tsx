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
    "3cXYHvXnNeCMbK662uhzSxdJBgDxwnDaZGi3rLRwVPiQRiHSRH1fRwv9mfm7gbgEwhDDtyF8VTH1GDCCab49nDYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28qM9izWjsn5HqqQvdbjqxFzMHiyEdP7TwSDDEaT2FtQjqpyTV3Uvf6v134m8QzxXYXp8Ct2Eq5R68YK6XjcTf2Z",
  "key1": "Ym9hhwSb5YKZM82Kgn3C1hLULBBMGxV9BMNzTheGkQtCtM3nJWFuxtHXTQtaDm476YfEfQd2H5cbj1uydVWTegG",
  "key2": "4shv1QnVZaqSesuY7xurNRzUmEBNZGzCA1U65k2TaNq99PyM3bJnPQ8hpW5LTmUh6ysHRsfW9CFvjtfCKN7rXn5p",
  "key3": "3HFUbxoVCJeYeCQ3KKCUYZutkgVYJyRqK2RuRsTdiRJ4hMRTbTSHE55b6GuzmBdmdcHDFwFjwTVSyS94rutD5ytQ",
  "key4": "535ZFahUHbdPPmPnKputoXTnNvW3ZTxoV947RgkAq4G8Wn81ZbssZW3Vm2H1Z7EffHWjXfdBcQVs6JgYkkrBCLDD",
  "key5": "EhfjeFzmAyTBUs3wmwqU2rk8SP3SxZesmNcJ571Q3w3ecj2YUhZZpePEArTq38MBCDu59RLzkLgaj94er1h2P3i",
  "key6": "9TzmBy6t9iEGmXQJNdmgo7wJ47bcZaFjBe6A5k2GdebPnHQcdwfXB2mcyaxb6MCVrPpVzPN5DD6S2AN6NfQhMh3",
  "key7": "44kuRmXSVwfz3eyYb9ToKVTiWbWWwHeEebe1zjWQuQLD3HBKJCcwYsYPS3jMrviLRaST7UBuJeq2bSqE2zz3dUyw",
  "key8": "5Dym8r3kFQXjbL65EWr4dbjJvdkMzj4xQto6HaCLuJ43q4r8gKQUwoKWQQsNKyzV7QXJAyRk4AFNhZUnzvgPA4gM",
  "key9": "66wt5fXVCKaxQzG77pUg5r78UCTTYkqHRXWCqSp21A1kBNr28mPj8BfefTFMFhwbQ35zgZgYgJmhMXYwV42rgjfE",
  "key10": "5mhkLKbvfsQBnf7nzTeMrQJ4hk4MtfAoqMGLcS1X5g9rEBANRh7n5V2kUtFTSUfitXacHNNQ7UA2jgSoj7QWbZZT",
  "key11": "5GCCmnqoVVFe12xRYA25M1ZsUjyUu81nW3jpCaXXGsCUk9XuCspbfrbNhdALb3dtYNK622913Wz55PZA4wGBbDQ6",
  "key12": "5vcCzggvv54fb2VFLcSs3x9vpLovwPts26awok1aR13kTthNPuA2B1wTNYEEiLrZfQgg5Zm9XLupWkyo8dNjefEZ",
  "key13": "3SjnB2RMZCUyTAbNHLe4mAyW2FfGUKVbpS92CD1zw8reteS4T7tmypig6DpgbutTaPn28DpnqPkLhHP9SXLJDE2d",
  "key14": "7AGgCsw8jmVF5V3TLKs3K4HCpaykjqNVLR26KLstV4y9yyrHXjqMM7PP4WAT4NKGJNxt1BXjZhWAqH6GSvc6U1E",
  "key15": "5iUiJiwsCxvUjqQtXmFhj52iDVyyYUVMt1vo2ZPBMU1tWFX1yVREkDKPbF7xu7AEnG52s3e34MweDCLPd9baQ4FD",
  "key16": "2tm56WrcDK23UmR6rToSvnCmxBiKwuA9VpwRZJ9tfesTyWruG6cjrsCg8YHBqfFiSxECFbwo6w1ijJ8KSYfLa5V",
  "key17": "3DoJ3VjbP9A3C9wt7ZbjKGL7dozKnsAjspHG59CgkHkPQTRXmP5fP9BxkFDwvMNqRu5tSUbkQLJ7fMkMFkNE2JDT",
  "key18": "4eDHeJezaPszwFLAeSqbhKUPJkstqC644ef1a6jGrLUYNUXPe5NT5kjQNYhgHGGSA8eM9T2RqGxgM6nQS8UbiLnp",
  "key19": "4B1JcT6UNJomXj2MT6ovUUQ5ZwNXVogHkdBEik2FpZnX7eGgQRUP4k2oi6eYs3wKwzgxTtnivga8Y4pf5tDnJEDn",
  "key20": "2WPUCEvaYuN157aEpmZyDuKMxTZo9Jure3chEcyzgq3Tc8tB4Ra5gpEThjMpPTEHDq4nuhReBNxMEWHJL3URbVig",
  "key21": "NfjyyQQDa8puQ2ESkzK937vBKTpvBjqcBD1t2jvGCGqYkgvxbFTtFXihqtoTbKLSxgHtvwyQyRuNe9XXWWExxda",
  "key22": "5gDv38nyiqXLpfkxfW7nobv3JHnXF6cCqqDS7YtkfHJtcjqRetrjmHus1mPpmXZbYSCLWg62PvnsSPRaPExWax3q",
  "key23": "5hKHPoj3xT8a4YAGGt22PCAYTbc9E7r2LTKT3wZYZNYtDorq7wUXgxNJBvPxBqbgkaQAjdmgjHAXpajrx6jDRpEJ",
  "key24": "5byYpk7Pgfyar14ZRUuRhpPnMoxLVZYtJf5aDhizaD3Z9Gb9wKbSFeSbBFyRcQggJsxbKWn4zSXi1rC7hDB8Eyjw",
  "key25": "3nZQVcRwGwnh7BkPWo16H1Mv8P4HnEMCqEJcwZWx8rcrK15QpRQjjdq8FP3wqedfQk5V1ZLaq88V5JfJyLcBJiJL",
  "key26": "3oRRMn71sLzJR1aL2tEtpESSuLTzj6iHSricud1UhXaDNpNecovt17enAvrRa84ddakvdZ2xSDJTT6L8yG9SXxUg",
  "key27": "5waZGNxEJQv9TguLWYiJSa9rcJWbuG6tk7fBAWU9P8YD5Sxa1tBh9iLxDjmrAMP5uXALkzzmKkvzrXjtxWJbQrpB",
  "key28": "2FFxJJSFnbRjkptU3zJgJsMHJ7qgQ7iTHgzQBZ3F7X1H79WtfcLVJs1efi7G3DBUGKg7L62mSLzQDN2bERFrRfii",
  "key29": "2GUiKcykrNEQotdyn9g71RsZgFvtNXGVkgRGEDts876sBovy714Xb9BpcCWjzuyQ6Tc8pQyyoxg7dkA9zDfaRuH2",
  "key30": "3pHGq56aZMHuH36M1he2Kc7UPiK9xfhJTNsJGEU43xJeA6YLHX5ZF8QDvEziBqwEmkDnm4AuDZtEdiypRnTGwkiu",
  "key31": "2dtF4c2SRce2HbxwEgLPRhi69PMm8hBtDoH9ZLrWU4TUnanTKbeRFnCBWD9WdUJN3T29DrgdnYQ627uBq2MePdZ5",
  "key32": "3nmWorPx9HrDY6FRw3cCrFpNNpRFeXsgg5psqNwePFJf86VrcrBycTgtGLPJ5rjNW5nd2MvEesyhM5kSTAJTy94T",
  "key33": "Qyr6yXmxHKVrRVRLwZcTyb3eeLnsjHTSTSDDxxpJq8AoZnfUG64By18GBUJtiMLFLPbFiZ6QQZAAWuzgQ5VB6PT",
  "key34": "4uzyuRQ9m27Hvsbjj1XYeJgrUpmhfmVA424Nq3PkXZrZsxtMUi4R6mWdQ7kVBtbt1wznfS3KS1TuEvgWyheKFxHH"
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
