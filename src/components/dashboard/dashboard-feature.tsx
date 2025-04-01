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
    "3y7R6ZgQWpk15x8mkAanxkok1JiKHu9QrwxkSKsUxRverNaS9PETH2k6t8MFkU2GvRPcRUbc8yUjtnPUGiyjZNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YhnXEXJi15eqkHGpuA2cmkbe6c7LhX1B53B8bUTceDGMruztcpSWdPaE7cyNjG1z7EuRdMmbm74zrDiVvemXAzt",
  "key1": "44ozWYRWBPMbXM4CgdiqSG3TgAQk7SKJ624NjKyWLkLGJwuPgSuP1VRZMzETh7XmJfdB2CTQuK1DEVQtY59vkYbW",
  "key2": "3rvvr7yNZ9nUUxEpaM5CF5bGFjwgbuwnvKAAaobiTMDwgaboWMUvafb7Fsbuc5YxduJaV7JBiB4m9AUvkGsoXyhL",
  "key3": "2C3CWKKH8Vs9dngu4cmeruoW7hjmgkw91mydT3j6sZuGsac1pdgW2CtB5ohjsAVdhncrB6kBt8hUyEjN44aQeWgK",
  "key4": "4Kf8NXFBq8YpcHbekH2KFAWgxtGE8oZsUJMNYzyRGmtZuDkYiLBLcpfvmkt2vzzGhQa6UKP7xkaBpchpqJCN1oQH",
  "key5": "56PJdkVk9uHeEw86YzK63PU8fpNHe4uUbqu1L2SGxsSxvqC9jRNQeFjiRWD6QHSxnWqeZHSVk3CeC25jBk1m3Cbc",
  "key6": "42taz6gBcVx87ohcP9AsLQmQZC2HoxYnYRr1aXK8VogpN5BMK1cbeVFkUfQaXVHwvtpQSDehz3MsX57zUgRgx4ce",
  "key7": "41Pgg4nmFJDtdNgUMwtq5zr9Uo3uBCqonwFMWTQ5rbrdsaUewzxTJZD4WnpER8121bERC9WHoZjCthLBv3rNmpUn",
  "key8": "5jpCNdMBJHjhjAKnAU6UaP6vRwHCXEKQyhiqKMJh3SHpjxzb8664ehGCdXGzRWB3ExAjPZ5vxAY7wRnXAPDgjmWu",
  "key9": "3uFBafMjYbKPcXLB7JSWdfN6BUaPmmjAXY9N2fBYwpNMbnxSw1Y8cvEwgPhUH8uFNemYzQapNZc4y9FcfbxMdEQH",
  "key10": "5mkLG5e15ZYMc645NhskPD391Ak3xeDh5FXBho7FQ4Xur7RhKtwVmZcu1XZqwKzfBLRDK1QECrsHTMG27mckte7H",
  "key11": "3orHLuQm9j8ByMZcKMsPA3rdysxyUnYbMsrs3t1y7DnSANMsvYoPYJNWkBpzaBSGTgQ87VWK7aTYKfRENAYWJ9dP",
  "key12": "2riCEQuhjcBFt7oqDZevmXjDPcoHQMdeRhqgDUqGJWchALjyR8Eien5Jb7BbeoHe8fRsqtvNwKATMkDLHppHQ3T3",
  "key13": "UM3iAiCHJP6eeWhRoh3PjN1QDctQSVT3fqMtcsmNdo56W6LRx1KM6mWWbqt7WSzvK9Puk3TReBydtM5JYrkHXKp",
  "key14": "br7BZXQwRQH7qSerJw9UDRdFC6kPqy5wm5UmxPGF7mTJrEwTySA1T28YgDUgSFahzmdW3YpMFQD6ZDgGdakspvf",
  "key15": "5Q9V2x2DZXVyoy9TggScUnUsAW5Uy6pmbofNcviTwA8FThzP13fxYWAujZpyvdqEce2RADeiYEitoA49TFRkEY5G",
  "key16": "3NikuVPK36VQeLMnr6CxeeLBf6FytsmsAKH51ZfoYZbMjdLY61Zr23dweBHz74zVVt9xpLLLkUZu1gWxSh25gqS1",
  "key17": "5RF4gnso1rC3gQkJTYvhEWiJbB14Wd8jydJfggx2mqXuqwdBr3q8JBwT2Q4WwgwhLuWBHjT7CrLMh89bZLtNFsbo",
  "key18": "56GbvzkQj4nVsfcT6c1u8cyh3ycKwvwXqYHQddffbJLStA6KghLSW5iqNzcbbkYNUznfEBdftiBd2jVnNX3CsjUX",
  "key19": "4bPDugPxqseQXJGnXPmGxVt1bNwaYt4uMQ1a4FpgYQJnFLgh1qG8FWJLsxfCUPzgtbBGkEgZhmHP4QhB6hvW8PCt",
  "key20": "43A84hpLmSgTgesevXA9oU3NrrNgnVfpZ5Zw43T2HovdmEeSSN6vqdaVkUm9y4hLy6oGkuC9ooeK39Km4tiXXww8",
  "key21": "2bgvMoRgK4xEaKXmsWtRBJAadw8LZvX178PuWcD2bdNy3SuB6BN91MmxtQXH7ENgE1ptgAqKRURNR3KBwEAj4jxK",
  "key22": "5d94zRZsqBwpsS5a94j12KbaxNTQyErgQkmQS4JYvjLPfF78EcyxxnRMS23YEzLdFsbhpXcGggiHXx6im2miCLff",
  "key23": "5abPj4uP7igHnHytF63Z2wKgaFDk8fcwoKHqU6Xcwcrf3utLzG8iXL3vjrNo5Y2zeutS6tJQKRdZp3kMRboZbN5f",
  "key24": "ALadidA8Szfma6ofDBVN9UXFPKVPKVp353jFJUC7ycHfUY8aPayUqG69j3N85914jKUU1K7XeBwUtrzh4myGLEd",
  "key25": "26teiVVRRvoinjKGfMxNJHfiGJNXotazexuC4XpVKz5FmUCSBLR3nEbyMica55SaeRu1R5vw2GFYfFDNeP5tAEm8",
  "key26": "3jnWjfNqVym5xDxo8GiY5CvBHEmVrjuLsBeU9xYZUnL35yXzppuCwSTEsTamEnuKkV3MdScxSxAqspXN5rZXGmcH"
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
