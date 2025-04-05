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
    "2e9cgLzx7gWHyQLNgaithEftSfkDmdA56vaQoFbC7p5yQCyvQ1iHXdGmHtcgDTtKD4uELgYUc5jCHJmiMQwqupeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QDgmsNRaQ2qTJQaJY4MpiwUYaWwk2Q7D8yt4TRxCguBkzQnCe3dhsxBPPihYBq34BFDbKurMPckvMstUjW8rGVX",
  "key1": "4FC9oYEJnzu9zSxaZ12ce3VsV9TwYkmZuSYMniXVKN7DsuhkKQKKF1q6iJWX2TzC2FZB8zYrqhVuzAaZfp61e9Vu",
  "key2": "4BevtZFpagcKA3kMQWwo5WVcj9BAZzTxBWEBgKXxTjuacZXHnfNLS6EyNZsZB3QpVJ6KyynXvLdRHEVBrCLXPHdU",
  "key3": "5yRgNwQMd55AVqqJtWUBhU8A6HhNU1M8CdgP4nDbFJZKu4LAi6iiGCsmpEUza3V8H2pSioob81NuRewiujpF99wb",
  "key4": "2Bm7BjaFibygQRVxkmXN6PjyujruSYEAg9M5M4akmyBWJZUUjN2R1JnSP39q7xHmLY5gCTpbQUNnLXYb9tDrmxrh",
  "key5": "4gn7sBiQqaRQk28ug1pBmef9RQ72MwCmutVbeuPe4o6WnaqC4EoowfqJacNLwtxyHBZivBrJ33CSRjgQMdYh2JbP",
  "key6": "2RJC1zDLUqEooxmSeiQSKTXHnQiwfkTAPR5vBsZgFWegTxzfJtPXJ9mLB9W11beqYHXutX5cyEVNhbU7AJBwtB2k",
  "key7": "4SCBYKYx5CCxMyzmTUcjDncRo7EeZJXgqRnSmH64EHDGQbb25JhJR4Jj6634NDkb874aMeTRih2eJJyQkNtSNhwQ",
  "key8": "EkAHhTXifcmxh2TUG9XeUApLWL2BN6gBbSoAvj2ShtSaJi5V963R2tfAfWuh5nzmyu1DHDmP4Y8sFQ5aeCZXU6g",
  "key9": "2hiDgcBWGafJqVKoGRdchtUWJ4vBe7p1gLAqfbRBFAbjcoSGBpEFG9QSy6d9gcSuUjzQuPVoEGsTNDzFXmKX57go",
  "key10": "QtJgn5Pc3rEHj4hEjSKqqxKhKbiShsDedLQ1kNMoc7qxoEYkcito7iXyNECyoYACBZU9j9KGuYvLJGPi3gP8XFz",
  "key11": "22iKfw5QVjkBQs1fFQqQdCkq1CvSYixXuDLohaKuBt9nZbVD44isHKesbEobbMf5RzQGnmtUd1zSSXHYoVhGS3d5",
  "key12": "Zi33UkK8NrptWBuNEfGNfinLyZ7wcgscNucerkFHCBm9k7q5ejyZCMPRDQCCn5Mwv9u8txHVqjGmncQRtg4nM3W",
  "key13": "5rXnMq6WYMAgYE2mYthddsvvZPr7peqZM1FirHBNvYGdWQhezXv6EHCNY5s314R34TtFn6FBUi2zoj6N8AXDzgMP",
  "key14": "2VAD9hNMFmeoJiNccx9YsyaR1DWZhHF2jhv4zjHmAnrxCx6akf4EDKPQy3H3Tk7qUYw6XspA9LgMtHQqEcCZa37R",
  "key15": "2t8916oCXhXNAqVukxnxFmnj7Uzm6bgnhfDcUdDrKucekQujLEjpPzxbL9RBam41UcgDb4esPi438xax3rt5fs56",
  "key16": "5Pc2gRbA41UgdpsThxZx6MKEFXkyYhdDaog1gcwYXQW3VJPGm2Fwk6NQZEmqNg1BvQZ41daL8WGohGy1gjWLhS1i",
  "key17": "2Ksw6JkpzWFDoKqqzPMkp6YNcG4C73CtKEfNj39ScS5LCX8YyjeDWopvA8wovUF399jKAypLioUdmWkk75zA2xPL",
  "key18": "2iE6bkUo9SGA27Kpjw9mNKgu6CrqJ5Bk16s51BepmqzQEfGt55z2FhUwaojxc5eh5u9HeQBGurypDpjzHuyUezva",
  "key19": "4nAABg83Rnaqw2hNGdAQa132LLQJYtYE6ALkZyu3rSNgtg5ESrnTAQWKTZBGpAZnShKcaDeJxnZc58orevsvScHw",
  "key20": "4VYfPTfc6esfhY7kBeyXNs2yHVFewtGJMt8dWkb26gySx8h6zcPciTx85h1Z6qGV9FCkNcYp8vneEqCHfYZJtArY",
  "key21": "42tzpkMckJJZqSCwyNTUBj5SqZxsQ9baJ5NFGXXuCUyso8eoewPawW9gDkokYCHFRew9PUt1Br3oTDbv3ruzPwXF",
  "key22": "5tssUrGDwfUvVxet6QSGDttJGiP3ap9CPN1LnXNGHAMfUuBrBJ6G55Sc4CmwwBBKd7UYAdJnKrV7TecMH6TmfJ1d",
  "key23": "2BMyahvuq9NNuRRP48EXuMJRGxaw6SZukVyLpmWbtdaaCR6q4pi33b8XvC9Lf91VL1pibqAv8YeuaS58USU1uk7h",
  "key24": "2yk7H2BoXreDpMfhHjno63frsaFrkoBEan3JHCqbGG7c8GmRwxTtyGFhwTGXMRfk7nefPVCX6iEJ7tPbCyYn4Cqg",
  "key25": "2492NciWV8PjtoYzfYwEPLPvDAAQHDxi8v2mNKfkqfvFrmEt8UGP23TEyPYdmFoPPxnkeBoZpKKwujtUtrTHWa1n",
  "key26": "2N1Cpvs5cUszxXbyicD54D1qzdrLwfvFuQm9xjoVbxSdUerTnKGAQZmHyNWWkqVKuvtSRPkJyznQEtRK3Fz65gkx",
  "key27": "2wEDCHvJGUv3cAcJ5XSuu6gyhcmvzWYYpjZx2wFdMLg4PzvauW9tPt92A7yzH5JwgVWonxiNAJC81BRgojbsDj3e",
  "key28": "4HP6v27xiwWRHBmXiuvvAiHkCh2Qzz2K5wRT8t3cJD26HpkWJ6e5t4JvDq7yLqEkyXJPga8pzfVmwHbuWmRYJza3",
  "key29": "3f99JEcd847hWW68NcgWXduBSPK83zXro8EZyLBPuodVCM2BoprXWemhDr6bqVTjZmjJcCqqhjRbrX17kE2wkQdX",
  "key30": "44oEf8Uv4xP5ev8aybF3XgEPzeF8qX84mJNN9w2bm3Y4ECh5DakwMuDYjBNg5X5Eff6HCUDmfKr5cs3BHyxB4ii",
  "key31": "3kj3uCaZR74MJNq9idWj6qwGRrSA7gKvvxxbHvEMHs4gcgAhbnLk53oA83GNchmwDXrytirHSDH7AagjCQGaKYF5",
  "key32": "4utdmXmiSVoXvdCWSNm7muEvH9661pdEifDVbfKpEFwTXk495S7yieqtHdNCfL6DYhhVmFYbyJYXHKV8RtxAdHq9",
  "key33": "3oBNwxJ16N6UrSdSCG2g7fNhFnaU36tMmN29UF2cDzKyJqGMDuxehy8NcQ8WeEqFR3LzL4hososzQEzLvoTLAxBD",
  "key34": "EbEsuLBp6ebHhJ2oQpi9P38xUVHEHXy69h4NRKk44C7WNw9QqhSsnC7z15RgcoUGQrfJ6hojuiHunar9PSWUe3Q",
  "key35": "2vsVFXSwFrroKp4qT3D7XL4h6dexkmHYGTqFkXPrH4ZnGX4YmGPhufLHLZ2mknEJusqhGf32a8iP2juoQCW6LoST",
  "key36": "wJAgsRC9zjo78zfTsBykwzgkWoDeUueuXAf7rCyEFBkQ6Qj42YRJKuBSfzDRWL8zQ4smvMfyXKHjBw36ExpN9nT",
  "key37": "2TeEiptEJz5YjQisRp3RaCGYTc2emDtMNnkqKfu2AGhyXNwLFJRUj36WaewerC2DEZoGpcgTADzjYVsn8PiKKcAd",
  "key38": "rj6f6zWjiHRDWYZpEqwyQjxNQBVBNBfwPyYWPgxaz1zKxF4mRSNuYTqFgyvJ4NoMyuxW2N2dgcbaZxxkQRWvX44",
  "key39": "YQmaytpWRDBbvTk29NShrMCD3DzAPXf6D6Dp16WH7jeLpYzRjUVBYzyNkEFg8dSfW8R1aW8YrtfymeLan2ASUgH"
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
