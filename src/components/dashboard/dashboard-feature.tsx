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
    "3fLo6GZ6FfDZbY3ApjMv9uVW4Y9rJaNP9T9r3MmYycKJsc5QtD1Q9VkTs6pgd7Qbb6AMT5w8uBFSmHabpBRYk5Xo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pNzXaE964np75Q9ugsCqKW71PsCs9HRXn8CUF4ZUg4jFu5WN1Pta2qFriGFgoMsULMXmcFyTfZEMNxKTHmnPmbR",
  "key1": "2TAZ4GUR2tdJZagS6c3GUvdRm1qErP8mrKDdFJzebgbwobkgnZnSuaKYeXWw7ui4guLTQipSopFeP1Efm3pH9Rhr",
  "key2": "3gH1uDuJ3NCFbSNSREf8DqSRjGj3qce3aRfjuWtj4MENZ75kH9ycB9xs122t3v3Ws9CP1zJ4RNQrjkzUxjJc9FtA",
  "key3": "3AavQDn3HnRyE4PteZzQDrc9hJm6DQENUzMZQBKk2v9UeJnaMQoSV2EDoy1t2W4JjhdvyDJMASvDaqCo1cSHbXAP",
  "key4": "42ct2dFn8ik3WcLwrnNFovuKHp4sKwY17V74JcQLxkRqwk5yr2ev7R9pwhaTjz9ji8nSUmxjvFaMndtXSBB2CSF1",
  "key5": "i2PMaPnX6QmFn4TBdf3voX1WL9not2cSykUuH56wq1Vqs154cCz51sCe5zfd1rSohx3sVzgBihkjQXrxrtF1eF3",
  "key6": "46LtTgHdpikSHJ5qP94K1KWLZviL7BtPRro3PMdp9HEAFohzkfw8ktGq198PzMbxDm8oEcBJ85t64g4UxqyMz1UR",
  "key7": "2Hrid4gqAjvGAwogw4ujF6sQKghmGXEfL7W1reYioQmzffaJdj6a2RzWCcMARrBgcnYgq1vZDyWeMC4wVVDNJhb2",
  "key8": "3xxx2QxtGQAr9qw5EdBpwP7HfbWDe9nqt9it4htqVvAntua6x56h85aQxYpZLyYU4mB4kswzi5PxqgTKz6wpQTuQ",
  "key9": "4JcZ3osGTBURKsZGWEyjyhSCtPRg66ogAcjZn8ANfhYvr972mCH4ZDQgyuC2y8jYJhmarFnVDTeTGaDu7vFXnEXY",
  "key10": "2Jb1pHuS31TuMT8jzxH26nbZG3SCDjWEgmPpCEKTLmYKzHNojdTjtpbg34wQhLj6hgBnZDPYumMTNFUX6t3iqY3q",
  "key11": "4kPXJ4Gi2D1QQZW9rqtuzUjzzHW9FPgY9Wi5r8T46aTBHqZDJbBAA9gkNB3EcMp6EUBQDHxER28EeJyCAsa42uHZ",
  "key12": "3XfpboVU9FXpBtgGv1SpyrRvob58MYqKDkRUN5TxwEGhscZ758XkE7YzVZFTnoWrBnTYVdLdRZCGDaGptkzss38y",
  "key13": "cZuPLiSTKxFy896ZFCPBrD8YEzCX4GDVzgPuc6tXQr3FarVGa47nrVV2v4zM9k9FevEg8oZc2CQ5yhGPEGeHdf2",
  "key14": "5Cn2KW6VXYuz2BnunwFgA8Dq6QTHmAasSgWYYJbp7Exz329MJy3vYaJc63YikV5sATXZoHtA5aoJQUf82zDJgo8Z",
  "key15": "4RMT1LBaZ8faw9k9PoDnyrGxr6JZn6wF3FZpe6rz7dKSUEeRw6Ku869VeqFXz9f84cPd1wBbPpnBx9ZKoQMD6HV9",
  "key16": "5XgVJ3g9WV8t3QBqKu4qdh5w4ngZV6Y9PLfUgzwb2DXS37dgKwfYFTK3G93yqRYHgjNySGZMUx4nbDxDF5JA7YiU",
  "key17": "3taY2hcTEMZXTUofNvSjFkugZyvRrzJwaKSNUWcrc7dKP58iFG7jWopja7m6beXUbZ9R8oBZjGmg2B417m4jVmMs",
  "key18": "56gU2kfXAy1j8XNYNNorvHU1PBgTehi5o8WATTuxQZVPPGtj7rBtgEvw7RdjkCpzmxaAUjLqN8nwkDW7Tm1ZGFHg",
  "key19": "2XmpMGU6hgLG7aNZRjsqFSVAuzurcLPTYbw1e3yJAHE8dUyhLKagdjAs6DecJZqGjgvzCm7a6HxbyDbJKAMn8KYV",
  "key20": "48wRTTv27iPxAFAy2SrzcvzvoE4nNqS1c9UhfEvX8qpKeyZpA3f6BbUevGtpT9eJVRtM5VTdH3TMMPtFBaGSYPjM",
  "key21": "2zrwz6vYBvsNzFpscZya2HKPyNsMZ3QMPoqRfSgER6P1menTZBvNi7MzQ5SC6x3TseBS4YckVD9aLzRDzc4AMJQG",
  "key22": "4au2QDBsW6hWXiY5g6qPmbebwwdUXXWhZSuYruLLAPZjA14nnVwkNrGL762bDy7shLqxfN4fWozJ4X8Gn2UJHmYj",
  "key23": "4aHjDk4ggVuCSdoNpwZgPTQSwZp8aZvPgbyAqhtUPGkmGcFKS56ewH28RuFpWzS7v7bnxFhSuu219xftz7rQRyDs",
  "key24": "2L15YhYMF86KDmP78rnLbnGEMXQgLzhkCBhp2FBTjLPwcf7no7obs166xbfepPNwJ4mhjfYZViQMB6oMoTXReTLe"
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
