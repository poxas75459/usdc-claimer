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
    "5f3rB3e8Z71ANi4mfaUmjB2CtFYwpJsYueZmvYZFy7NZKAgdAv6htrg5JmsuWACtv4N6a2Be9tTd3z5btCBPLKkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZiU2bWr9suernu8LBASwgdYUTrjxmkVSYFHCTa7JaHUSnKtxjvJ1Tb1m4WcW5SZroDC34WAHXqbC6cE4inSQZHg",
  "key1": "2XwxEeYcPFWZyMqgTaJ82j5uUqzrksP9WEPLUxqnxg7PFFvP6vi5Kz514B3ip77qsjd3z1dQd4ByY9QtNuWmYmoQ",
  "key2": "Aq77iqYpxafX2wY1KWuiGYi1LtfKD8Y2xb6TuEnpWzf7Qv41pHMvhQbBSR8LbtTRsjZiuqZHb5HGwspPsBpy2rh",
  "key3": "65NQUXKjMK1pdydaHFHJsHwVSJzC1VVwYDirB7xyNYfYDjEaoFfsnhNRQzdp54bTTLLywGCeAFGqy8VC7EGi9e4T",
  "key4": "2bEKS8G6MMUZC7RgN8vHTJenBcztpcXgp1N1fCAs5hfxnCzfW2eKAxCVYaSXY9XHm19YDnof1XBr62oq86ZjVKwH",
  "key5": "5VNq1TzLnrRrvsmtTFhiMiPgigPhUBZ9UCtUG9tgyvGJAj2vnLKNhDiASoV3g78s14SSTy2ZGFFPRSp1hLmXnFZq",
  "key6": "bckW9Sfq2KtPyN6kT8ca7taF892NNJDTdTKKS1Frw9TYFjDK98auexcgCxGGZ8kJf9CxDM4kLETWhhrKBiCjhPg",
  "key7": "3zHm5Fj4QTocKmEP8GSjCnYgt22P8qa9wgWSscPDiz5hwtyadxC7Y2QDvtia8ptZ7HCFYTGWF2En7mH5scQrpgtV",
  "key8": "5amiUEVq7xXwajpowKdHxdMvQUnaaF6PUwG7eLrCFZGSdAfEASb6oDg6gDNGDh1QHZJNdhQS2Bar5eQRkfLcnnrn",
  "key9": "5cozZ8anh4S7BSmY2ANeGJNthF9c9TKj9QMfW4EnUuYS3UAAA6vF1q9Vbj52P6mqBXq9wRjS7o1tKRXUCANyHfwU",
  "key10": "MRpoDH6m2ZszC6Vb7uqJkFhQhDY4cLkHnsWH5UFgnhDiPHDNHtQZjgJAALUqbzbXmfVVSjuRtLibGqGq7dnGTUt",
  "key11": "3effnk7WfkNT9hqvzfq6FXpG41SWaKnGdNXEY6rveZcjYdLzY3kmTNCCMpiH7iLivY2t27Dj5Vq2TCJEuWySJcJ8",
  "key12": "5CFaP3PrvH8zboYqBtHzreLvje1efCdMh4wHYHdG271UtnTRyJkGTrpgKCSmUxJYYGX6Wg3pFXjPziT2mdLJgSkG",
  "key13": "2KqvnfFZ3Vsp6bXmyibmctfFUHACvuntFzH5LShVmJgsfDzsgZRxG3SuA3aDu2LV597vP1s64GTt2Jin3iaeEmdw",
  "key14": "3nigFr1pn5BvbESgMBQBBQ2fpKQn6yPq2WoLgXYiuxgqj8YnnMuD4u6bFg5D1LFnvfbnPP1cC8JhXP5ino8fKtah",
  "key15": "4VQTEW3CZz5MPbXrxvWj8ABL9t9y6hRNvCErcZEEMzPX9ouUmdViMeadW8AvZRYDkCXRjX4HWc7cDiJKW3y3HqU3",
  "key16": "4xj4RpxDLHCgjHPJK62SWuq32JndKihipMmFcVocoTajbMX7C1gUwzwYFLroToqzhWrP2JPx5fFpfLKbbEZbNLJJ",
  "key17": "jyiFFCrniiaJ5yrfLis4KJodHSkx1n1RSVp6pkfyhCABC5VHL9vpYJtpS5mUQneryCsHo67tc5kGcsN8M2wiFag",
  "key18": "2L5bLqxfZDY9scYpUiUquLobYoguzSog1hfaEouYKkNXppZR5vytFuMz4HRrNVhHoP4Tk1X63WhQfak2xLQjuphf",
  "key19": "4WNxqQX2ChaRb7qRZTPGBy2J9S7UZk4WgBhttxX1unHAhQLM83T8wcbh4J7EMMi6Vc1uuEjZVmzE7u2KzkT7jiuU",
  "key20": "5fRfRmHGMbAP6AyaWSEx7HCkWw2ikaaYKoFA5Usz3ynMPNGYkSzsngWZ9dEZPCe1dmWAe8UThqSVpGuQNURx7SyE",
  "key21": "4XSsCdQvMjrDPe2uCkMJASr4FC9xKr1mfPuY6B8GLajFqvG6V1T9JX43CyRzmEhXqdsXj9eQeeiEx4mPok4eBmLu",
  "key22": "2b1nNvCeWePp5xbtnC2wFPkLvLSdHqRMoie2WA6d8bTNH7xFkwWutcpvj6rbVVfo1u5EBUxNCNTJGxSCKLKdK8HB",
  "key23": "3XaU2KAvEdySfB7Tjgr1Mewjaqqdx2BQmgKwgMBHS4eX7rq1BxCU3RUyX43N27aCENCzo3kxS4ZMVqVdcxwFsUPC",
  "key24": "3mzPKHmP7iJPmp753BZTENBSGovdXJJjkgr97s6ppGKzRriTpG3AhhpGLoPTKw7pEkhiAGvcDnv6eo5RoM2H57EE",
  "key25": "2AuWiVNCD28KkPzhNvtJsFoHk3wwA3JLtHmeXHqXW9GZ5sLDJdZB6xstN832PF7LBc2fscnjyYiiLpLuNrqh16vF",
  "key26": "5UkPaW1KAaPcE7yyJxnjEAGdkgaaoUGdwrKpSLnhJAuRHZAhCy2eKNam9oyGF3C8LaN9Z4ZuXWQucmjjyxMRyRGh",
  "key27": "3mcjA54YvPXLaWAcSJK4JpHCisy15nja1zE6yCaU9CsCig87Q9FPsn4DGoNFHfvdmxH2swhHgGoFhqebiiCtWjnC",
  "key28": "3pEvBpxYYAdMWpYariAvwikymJJiwkTpQC1vF6XxiGnzNGcMEbzCTWro6PXa5sjwZ4vcf7BTfUK9kmwR3ENhyANi",
  "key29": "5N7haV3VLA7HCKdSEddaVCv2V39jGCXZB1PL5EpAZPXvcUps5ZZ5DmEcxBbWn3PL4VDK8Ayf2cJNvx4SGDDw2MxW",
  "key30": "2zgdgewaPZ5kS8yaQExWjdZAox2JAELc5DeZzUqKKCiRwQPVrzsUhZ1KXy9mRrLg1oda3Wskzyi4dF2se3E4YNAY",
  "key31": "2aBubjjw4dbSbSTNesZ9o55AjNQdjUPWoQJYhBD4fQv2mSDtcseqxoYwuvGuWggzeJmwBwmmk9KrSyKSK4xV2dam",
  "key32": "2m9Y18nUa4onGk7t6eY9nJVgtWu24qzTaxQGrj1i8y3PLvsygHFrFYduwAht9hFjWBySogQUj1zAJXUjwFRdfDjW",
  "key33": "4pdxXQH4Vz4p4bcbmppLZ1GFQrPbJ5ZfNdCFvBs5Q3YErBnGS8Q5MAnigSMCiXZASj6A37koj8yZvs39n8G8MfmQ",
  "key34": "5i6v4yLexoKRXf9hCR7si4dxCi62q7nvz6Fraa11hDch56Cvk36HvAx2Jt3sZ6vca91EdXapGpQ8F7LtUa9wP42u",
  "key35": "48RkX78jaebYE3fdZkrZ3nHp5yWGJRYfUEkkvAgWi2fdziarMZUJ9mqrq8QyaRFPyzg612phc21VBB92VZsZYCY",
  "key36": "4S9ha8TQnEKSfLYizsMwtNv7ZHSCFXqcvpj8LUdSyJ5xS3mNQWzUHA7EnoeKD2oQ23kVtFNEop18jxbMBuLyPenP",
  "key37": "4upmPSAGP9GPLRYhFBKiRwamLuSoAST7JLVd1SRiwLeVi26wiGopUNcVeb8N5KzZJpMKPqR6ar97YgW94gX4KFvi",
  "key38": "2gXpV4Cv86vfLN6RzeNhDBXvauKNSgrTFnWrT8m9Pkw8DAP9mjUJeDENkh3mPopCbrNyfYYfAVqqVqQp8gmu5YRm",
  "key39": "4aLmLRvFZzEKe5mYrXiT9qQFsZoCa5mD29w4RSTvP3Fo55LXk4wqU3M4rcRchihZdKhK76poZxPweCsMXYMFmXbf",
  "key40": "2oECUBWKG93zkD8j9tMvxWr7oBdpakdFRYauDcF7TdW1o4DtuTE6MtGy5gTFoGysMZiuF2gCCdqEuSKrG8gYoCu6"
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
