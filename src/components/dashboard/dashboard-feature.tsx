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
    "5hSGvVg9G8r3A2LLEmKaiBRNL2wRXqV6Qho4PkEqusJnMghaGhnSzP2UsSwdLYYf9go8aQt5GG5NpVpvw4MPp1QS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48NYL7AvyDDwfLq9qTwqqrjAKC13Yn3LLLm72RvdYoXw71SFTauhtRzUxUjXH7kNzoxCEr3SW8SZ9Qq3S8m9fk6z",
  "key1": "4SFmStmLGuTk49uEKMsgqgbqCQG3KawkdqHJjgLjK9g7NGFpgH5rG6MHosENT6qGM1vAaR1pUa3pXJZ75sEafZXV",
  "key2": "37oo6vYWpGDtjEPMHDDCGxpAE9sKyAtBWryeEn9Y65emKpBRKkkLwKgbk8jRNbpZZGmJzb5CNd1ijeLnz3AL8Abc",
  "key3": "WhYRbPjyZoiNHt737VrMK87oFsrnggoj7vJUeoxagv2VyyGymjpcCs9D6zTvQMCYEAdeY7cMT2BEo5xc6brFQrg",
  "key4": "kdkDNLLrYUMRwKMhjmyeEj1mB9crFBKZPHftfFVjPVqgtocZ4HYkrKHNHvJRd783BT1BiEmdoGx3gfrmVbH1yKo",
  "key5": "AkiWN1ouwFrAQVxK8bdag7jU52bKNtxQrfjGCCkp3QUsLGKzNEBG5JfSuPgzucKfQbBpiLzUwPsiWjygCs2S3XL",
  "key6": "3JUZdtno4XrisdwKsfbPhJu4crNHN4M9DADjY28qAjgYARTEXxGaPWCp4ePoGuVB9WafxEV7Vshxc9QtnbEScj7T",
  "key7": "3hyDKgk5ceFj9VB6CeaL1XYQECUufGzmJWhiLsP3FpmtSzNrKyHmwiza4XRtcC1c5A2zMfJgpmSK8G24WmhPHYXG",
  "key8": "3AoRnLgYFf5e1y6Kc5y7WkBV1XiJi39qivntHBxAaUFWcfAZg3VHUqc4YqWCPhcApyHHZEx9omXQxE9jme2YTbHr",
  "key9": "5NM7otNQuEma9HZbe5DfDWhBYbM1YDUKjP6u3TQagUd6rmcBY7C5FQqdd5Hprxd9aZsfiwbUYbYGv6q5PmSSnY7D",
  "key10": "3dRxGG8i7e4gk8ZWny2zLjRm1e9ZvTH846AiJ1EPabYwycH9atSKvocR36U6d1BZANfC53zHYqSJuSZRnBGprDzx",
  "key11": "34gWBsnELjELKBJbb4KA9PZfVwPemrGYNEokhFk2DHjw58f2SR3HmTyu3LNvHEGZx3BNPKqVANivGKXr1a1JQnoP",
  "key12": "thRVy6jgTKxrPBciPGr2mbfxxiUwjUhznhEyxdh7Bt91e2htz3fyQkrXPTZRH6f4WPDutJeqCssGvBNtbG7B4m7",
  "key13": "5gfMguAXqKswxBftk2oRuX15JrJPLAXhYFfCwMJVqVPLkk6AnjoJgTqCL7oD1TsWdmu2m2dvE2DV8WfNjTZDpY7q",
  "key14": "57jyaWGKLNGJmNM1SjrdjAH5VDfpyiZpMfDcR3Suvo3AaZaJqECu6mBGsqXhrRfnfNQQqBmnsGdwRWcWnutMzBpT",
  "key15": "28W5WiWkdsNsfMAScZeh2CticRVPdLtroqqtqGM9ias9fToyhkK5kqm5uztgHgKdrdv7PQpwfRRKLNDrg1AhAyvu",
  "key16": "gEgmJdY168XrbxfxQGUKd7gsko1PrMcu8HDit6mZqZ4YypCG1u9BQtzBdSHYw6zXwjSva5mGsontoCtx4hNDN3o",
  "key17": "3YLBEL927DdA6BauzEdF9Bjk35Fy8n2hGMV1Gi16CKEwg5TcYoSHZxmigAy1fMufs8W7MadQ1GoZzcw1eR8aeC4H",
  "key18": "4VENBZjoGMMcRp5gvGx4EpGb1bc4cfsJoDwb8UTUPzF9qfYRU6XUpH1tz3b7gvawg6awGjL93dLjJbddsns4YmVS",
  "key19": "5gE3YRPxEkQGUAr14nc3idABDAR2soZvcX7Q951gNuhCZkZPxFPvX6fBV2Ns9gDZwuPisMm6g2F5h5pYmpobL5pg",
  "key20": "5jjnau26RreAETtCKfFK6kwhYinGveRcpP6SPJiCDvJRdX8X72pyc5sLpCKLZcL1gWKUKc34s3XZrnMhu1qwnx3g",
  "key21": "3RKKqqqkTA3bnqE9huBU4QEHyakssQcLFehNSeEfq4ND83N8gnKcupNZZ7Yk79qcNfZLp4T8NRihgfaLifJjuHSx",
  "key22": "5YFBS5ATH9HoXmifxdVZnEzoZ8YULTC9drrVfHz2jnMCFhPWsvkS7VAduwKqEYkNf9H2sdnzNQPSZitKePpSGcBs",
  "key23": "5GoMWL9wp2HScAJpo5TLpzd7sk9XmzGnbGVTkxSv7dNYWfjgp5A3ozGrkkU9WbZGRBEDLVod2SDtV3GuqB1rrBSM",
  "key24": "sJuHjxV4F7VnqF4iUm8cT7mmgkpREkVxavBmArdusvm8bUF1AQwd1VnieUCkzBCAcDy5nRUkudzenUS7iygHX8D",
  "key25": "4MQbZ7exdGpQDDQmEk9PjG5YxgKbvLYbozfBQKrFYi92RmD6zpKY8nMKtzUN6yuwhaTraVux56SniCnpF8qscNhe",
  "key26": "3qjv5tTeJf9TrrFUvgCHFtwuHjLyAXMBFFWquCYKrBkG6GiMi5WsmSFaa5SUSpQMniUSyBvp1KimsBLpFd2fjPeR",
  "key27": "3mt9wuwkW758YhX49LW74Lz4qZbP46xvjBvSX8SKqPLWjg46V2VvxbjRCsmgrRQumsTCe7twc15KB6GYSag6EocW",
  "key28": "2dx7k6RoRaBy8kUDWYitkjzBAbCDBqYhSAJ5AJBUHyrqSSBgq5RSeMKJuJe5YxJwABnhUmPSe4hYjKZFvpn9sXpM",
  "key29": "2UF7zBParbi8hg5QW3De48RmpvyDBbnLkjb4ThUz4zSvwscKobYFHoRsR7LETUcsg3budxTNsD5oc99Z1UXYAH7B",
  "key30": "5RB1r95UZMvuZJFxH6wSxpRV63vjLooqMgykMoLMsrWTK4JkjCuDYbJm3XeyfndC1jDcgtuQtfe56B4BCq2jBxM4",
  "key31": "2cziFGYW92mMq8eFQRU6gUpwYnKJRWYvhu757vNdPG865wmvxrL7L7AsibanRRUao3ZjSCKgMBKN381vmfpymue5",
  "key32": "22CcWaAnUkfgCoGrpRbrdqCLhTfxZ9YaRpHSqDzxPdwb9bbCya3i91okAt11s5GQUg3oYS44fm3p2kAqQM4jeLLq",
  "key33": "4YyL3edVHbkdLUhAh72n5mgRQX33ZuQf5HodzMAD5JFLyhkav8h5imKsjogRQQAA4bMH9sTi5EWZBwDBqKJPSuJu",
  "key34": "5xYoS69iHYehirRwjdGZkNXPKiNJk6WQAMD6GcrF2WwPrKoXHosvKiBnUBqVVnoBFudwe1uNSj1Bah34WpSYYE97",
  "key35": "kEwPc75p6xZY5R4WDjNZ9yhc8Vj7ADV6nG2mSv53mgtDKidAngwi4xTVCkQGhNbGjcfcSHf8rhx6KVC9LP1fFUY",
  "key36": "3k1HE9zFMH63VZnxafZ9yci9nFnuU1AapJbcmYMiaU98B9QBiobsEBW6bdK3XB27L4SeqC1eBBzfP1xj11jBVcq7",
  "key37": "2gwbrv5dCEf4CXPiXmCoAqu7m1sp8wcwD1JTEfZyQW5A9brXMNYuT2EHj6snW9mvFr2GPdN39VKsyDF1oD1X33sr",
  "key38": "3J9GnkwjanYUVxfVNzTvSL3fS2prydA93cEdR7fEAgqNSGtiuq3GD4xSXKStyMfqPVC7CLSDBTD82q1jF8Wqdqzz",
  "key39": "481rJo9N181kCQC52ZN9ASA6K9oYG4be9hNzYFpVa8X5mqiz1wWXazDYAKkoG5z6TTMowSXCwpUc1aSW6PUBF8i2",
  "key40": "jNcQjncju5TA6VdoMmxMyqSw76Py1zDL1ab8eaWoLiFLxyWzbB9hoMg8KP1Ph1KGdbEniFy2ybgG7SFT1C9bpcL",
  "key41": "57fA7m1daGo7ZXCcoSaBMG4hKsUCXvKTbdJfdXLhb1MZspMcBam7q2nyBGabTSWyA4nyDu8ieSquQSzuprvuu45K",
  "key42": "4UBQ4g5m7VWNYQNmwAP2a3WXRNs5eK6KRZ1Fuc1KUUoqoxjbpTYDkUKrdBjf5g81CF4xkf1R73YVrdTZZCSwAyoL",
  "key43": "tWmEBx5jY6misdE3hqurZ9y1GN2KMxDXwfMFuFdcoVQCa7qqVmRSPzKEpRmvxp7svznbxxN5hs8cxAJjX5qCzLo",
  "key44": "2oAd6k4ePCJV8nv334Gjhdg3wJQFDoWkiyMbot7ubULeAWd4xKpdBMEAxKab9RNrYptHYzUQ7XEvzGNTbUrAZweF",
  "key45": "5fspFYcMaH1mLzoHSogwDsNmcRs2fe3a1z5FhwkZ2iR6HN9as5MBBRnFA9few5SHeMaFvkFJuNxNDPQzbnuuL2ue"
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
