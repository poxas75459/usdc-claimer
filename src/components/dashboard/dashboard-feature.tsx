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
    "4zvjE2Uz88YCMcYxxCnNhJaVC9uD54c4gtspEx1f8TE9uBQKBGVpqMos3kHMTUUVqX2E9TTEi3yScf5MUH7ZrxKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gRQ58JkLJQE5ZytG6Zxgq8mhufrN5kV77iYTMYdRc6xWjmZJdaQo4gghzpE5E6seS3rJdW79uxbaRtF1tcdhYCX",
  "key1": "24fwFfqrioUWWUNaD7PU6jTCgqbjrW8TmocjfXiLVu9jDiLyVnbGmpeEhG1T2SVFgyKwwnyfZ7eYMyzUMoDCQKQQ",
  "key2": "4X2MRRytvWYaJEERdJkoFH3vmsMerZT8fNocapMz5f5Yafdi4YxCjWgH16Zq6L5jNbdmDpMBpJFXasmR35f3DCos",
  "key3": "67qxVqFjrTtd85NRmEv632wjbyXYXMH2Ehf18d6hJ3n3pP15kUDH3qSR3F4MYeWE1QtRqRaPaD5YGKvBSBtWsvcs",
  "key4": "CaPgMTHXYWuPb9JvEarNR1pBT2hSCCAwCesMPTXhgsgr63wVPgUJshT4KkpNFUo5bVGP6csaF7PXCyaUY3or8Hs",
  "key5": "5hdde832DsXHJMT9F4vCXEfUvHhj21NBoJEAgH4j6bGCWdQEYvfJZsKWSXNA5apT3BRb8sA9w9RvvJMdqAQevmZn",
  "key6": "4QNKLJMArxThGq4WVCLDkUEEGTVbxEUo33sGszNbeyPHGHvWSUQNSNBVqy9DF8CafEUipSpspZ6qG2rAAkYjiB5b",
  "key7": "5VvWESCy54qwyJR1QJp5YHsREnZXdWF9QquDz9nVstr4VWfgCYgSvsACaxJH1wv3kyQA5nECiiYevUtSRyJJz1Mf",
  "key8": "4ZNwBZ9UYnr9Df4PuGEUHT1xRzUouGe25YqXkfKbzTrbpFisc5Dt8CB4D7Qau6xtoVRkd1CaoSoGnwC4opfH5Eeb",
  "key9": "fBVaJcDM5EreAZWMmSFYfmxm5egWeS6XsUaCmQq4g7K7Ybq7JvDghjTaN2qQb3xMMU3arG24MvyW5SU6o6StHKx",
  "key10": "4wYQDPDyyk5kiFej447e1BFaPMso2CTdS77uCLDkhuuEiXVUeJsNocYiZfHByjieChtMAE1moPZrhKJ8bHvUUtUg",
  "key11": "2N7nr5n8qci9jtZFJ4WGzQiYVpK2tBQwk8f25GrMJczar3FY6Got4w8D5FRmrzBLZdnCNPgai9rvDxuqqgVfxZf3",
  "key12": "5MSUqqRZh9oWz1YZK71ct8vnGJhwFTuBebMmZF9PWfJDpJu86CctutWuf3w47UyDup9QW3ySebQSrxMPBuXTS2x8",
  "key13": "2VNft8Z8XDAvMfNUYh1jHmKudZDR3p1xjfgtHHsgYUB8NHjR3jKgHzyKWFnHg2W7BT4Kq716cNER4urvHrexKg26",
  "key14": "4y6oT3raqSq375fsobPkhJaYnQKCyX2pPJXQUwVqysm3VsdPBpNEuEAXZqnYJBv6K128Y6RsVjxgwwpW6RvfbnPB",
  "key15": "3asCovLiCRgGJLuUDy1cKSbJcryg5Afnjnc36buYFqS86m34vpeRZo3shqjpEjZVT9beHcJc4S9UrqYqxc4RAixe",
  "key16": "5RCPTiy9CxyyFwQvgd7Qiz59xs5usowHsa3CX7ZB957PvpSce22LcgzrwoiZQMF668etxGMYGEjsoFcGEbM7ejbV",
  "key17": "3SMybFQpZ7NpqKkspV24MQZCtWhKiwswpiuiaer5NqfRGrLDdhaxYsn1tpiiFKdHhEUKxEQ4uARFbGtv5aXc827m",
  "key18": "55QNijXNruMskuWU3eUHC1PHYQf58vRh8TwehCiVDPUhbJgobEtvH2Tbda5S2h4FM9reRxbKt21kCUvQZd7aTSZ1",
  "key19": "5rsXDmRUwnQrt8BV7mpdBPD8R5TV4HJ9bWpcmM45w8CDRHWfnhucfvPLFjYjRkinSnkLhzHT4bq3qDa6TeuSg5d",
  "key20": "3gGom5E1LRY2EnrxWTfEiHqhPJYcQLkeQb2r1e6vXVJCNG6tHcoU62SydLPFaodDapsA7cVd9KZEUZY5Um62zDza",
  "key21": "4iaii7XeJjghahgsd2sZBQgVWroQHp6j29Ytx2n6Lee9ZxPpirRg4ocyWrnEB8p6XF3gaFEXiHL2QywTcUwgFDxW",
  "key22": "3M3fvdEde2vJbkDh4trKzyQhtrYxgmyzgFVgmPSQNxLfHnUyBrPUKUiDEHoTVbbeNeLYAEqA39arNisGVyvj6Seg",
  "key23": "5z9K5oJnhWF3fjJG86fH61sLSTnbVcha3iPiH7RNKzw88hgR28k8yJ2XU2HsE88jDej1nVgoeFyXTUkVfkBqVGka",
  "key24": "3LN2fWYnbDtJBmQBJZCgacwsUNQPq6BoQECcfud8Y4LxBmf846eqK6UvUaKrmRF9wxYAnfJTwF8iLRLCq3siVStP",
  "key25": "276LWimN5CbbQuThSXjiQQFDxVwLL6Wsz53zW3tWowPsXQnKGRcZsE5cfN83hXdGCE7Tt5SbZy7SJNiyp8Da3R7J",
  "key26": "aMPCyJ4PVuoh1CG3NJWyqTjz1RgfiSaq1eNsFZeXzVAg7BNBvmavhvGpDdzHNRfr2SFDgbuho3WGFcGzn3sRTqq",
  "key27": "435hAeX8zHw2YRYBh17eQNhEZM5Stqu8yDRAshEyPUXRWeCkAMq447CQq2ZZDKYPwyRcVakK57tLPwoyiPNBkPST",
  "key28": "txnmXLazcKTspWN2uqec7fxesoffRiksoQh8aH5gfZ1aRny11xPYnjUuNGk6JQ1ZbPjmnBy9XpnFWXykggqmD3t",
  "key29": "2bW3VcLVMUcCU1aAbNT9DMcsG2gMaoTEbfxzm94KWaMKo7wZ678p9zXj67Hh8cbsseDee7CkFQac7JCgpKegi39Q",
  "key30": "3NEMVnok5AkAfztxrQ4GpbEwvdBeZ1QnygV5YzaFpHULiPwSCFe5PXZZmw49hhAPpD2YwPfW7jNAdjTMk76quVhC",
  "key31": "33s3XVUENFZrgCTNELJWa4JmTv6NrQjdeqai6ghgHVGovgV7vYfvm9nP21bvvBSbh6DHrPEpsgtN5A9zyqxL3Sui",
  "key32": "5G89fWtgwLnZHythjjRSc59T4CMuaNbGW3HYq8J2zmEFqeGWXhaVbRi1YyZXEMWU9T7KkdZb8LsPU3BQB5p5Xhs",
  "key33": "28S28B87A4YHjvAAHwmZ9schpuv7hprzr9AFN2Rgist7YUsGqTaDHetskwzmQ6GauY7eBmyuvqMWtuZpW6R7LqXf"
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
