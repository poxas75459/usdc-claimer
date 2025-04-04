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
    "zqd9sEmpETAN3jPStVG4onULT8s97TR8yGNga9mEFvsqWjiiLi9ohkMxmE6CxenpVXViXF5zbYFzvzGxx6e18NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qEEedvMYTPgRHHWDDnuxpDzeXjUXTAdqfjdbiyEyWrqdKDW7tEkHcpZnarxKFgfhEU3o44svweJHDsk9qh1ZerU",
  "key1": "5rV5RhWtCihgRHb1h2c5gbUViHumA62yWbZ5Y5ZJdS3gXreH1bGHDT5NhNo8uyY82GmjjsXCWXcvYge2racpCtEd",
  "key2": "3U7Q2okAmPHs4aCVJ1pE6Tdsg7M7zXWaQu9Z7LYqs3yyCJN57YQDFsB6pmXVVX2grhm5Q3noGJNNMuRRt7mjh5fr",
  "key3": "3XqQNAzKbSEGWCb6ANCYMWx2MWJPnBXPivAJ3zghxv2tv6TVn8YtukdvweR2GCbZkU9SqHXoqFYSqqa5VGMeM1d3",
  "key4": "2KJMv2KqkdhdfMByhkRxjjZe8RMejbq4cTahY9k7yYx7LtsqV2Z3Et157TdYmyVgQEa7cDHHgTRLu5RqwaxzhCBo",
  "key5": "5pociK9KkXq3LgCj84xwmt7tBTmi3KNfk9jvn5EnNa8KFYutUSFDgGbiLSRZfcZiNXmVanAXK2NnjBuToT3Af7vC",
  "key6": "K6y8i3V7wk8u93am74CsWwNwGWLfHXiH8YSZbinNyHUAJqWQwaZRRuWr3g5NiKy49468Y2BZAg69kyAaLxDxM9N",
  "key7": "22y97oWm61FFqqkoy6AJ5dNzcEr3GsB5AqSApcuW4BC3eGCT4HCAx6WeW4mXftTkBjaGpWvkiDWU9t2t2A7Feu6f",
  "key8": "tX2m5yJTMSpMjzGFFnn4u2bhCCrPLPvbWxAo91cGWCLhb3jqLvfWB9GHDn5QZxmJJ2zrCLoguwHthxq2rHKCP2g",
  "key9": "PM4WNPDs9GdmNQBJJhJ6QQdky43zB8cHmFqZznnL5v8n2uhGRnRv5a7gLdxxrVd823JdDsufDKFSuN4fWjUQzJ1",
  "key10": "4zqvKfVpMN7BLduN617FkAqvyFd5pAeLRhHLQPFz8QUs16cQvhYKJspj3NzuVrPCxjQFhNu4A6o3cTwHGwZuu4qr",
  "key11": "5fSd1a3Fr7rG7tcZvf7nZ8k9CbSiUPNevbbvR91oh36z21LeQSL5PqFiFgxKU1Q7kutV2KMNs3dwwjvdNMrDiEQ4",
  "key12": "36brrSbxK76FXFQyrxfTozB9jjyJfBC8JXCLVX9MvzqUgmrzJYnj3NAYPoJbUjAnAHKSHApc9Fi8mdWRbojv3Kra",
  "key13": "9WJz6bAkSb2qMhpVCbEGojJSELrgTLdHgwE3G15zdxYDCsNfszvGC1nzMnUNHR1zGSCkTpr4ojFRiQBPWHSpV2q",
  "key14": "2FgWCK5WrPHnQGPeQDkP6yVzvAtzeeBqY93EM9ERj98qrUUx4SD5pceYVvnqe7RYm3XPEN9uqe7sBDmfVVqKzsej",
  "key15": "9qCBkykBiSuxTvX9M8qnWXLDX4yfjPv5wfP8qWouMw7esbDmxT6JeoaRTGpAPY35Lj3WF75o5U3GS137riVGBpm",
  "key16": "3486jFHVtgkFMAqLjMRibcaLvFWwijbPffBTeL4sQGfMc2e1wbpH6iUC9NX8pH62DaAYrgm6JYAKzFXgvuFyABDz",
  "key17": "4kGkn7znQVXkNgFjSwGvE3VE4LuyDZrYHprCzQpb213SomDtKL1wnnSZyAFnnRdG3MXf2H9YbHqcHMzkCCfX23X4",
  "key18": "2NBXHDMhifAiFA2BX37fDSbviyXkUXrji3GqoEC37cbeqStq5bt1wvu7Sd9PxHkbXxyUrfnwBcT1ZzRVVLbtC3cv",
  "key19": "28VMiuTHQLSy3Hk4Y5dwyLi5ZdxsTB33aYPfVQ9piGogEM1zg5oUGTaJsQFWkLJcLMWzFyGgZXj6yoxjD6KpnmLw",
  "key20": "2bYjkwPcDMKhDewRMuXXbz3csi681CsesZdJCVqmyjsE1P2GEU4bytpALxYdDmB1npU2TZXFUANXbvgEmFjCsiz3",
  "key21": "5ACv5w7bgEW1i3GikUtfXiqHuayWX4knELotEeAArLJKWuxjtHHY58NiqadThaWyCihgu3vDzBumNcnbtoYmjnnL",
  "key22": "4N31y2VoHadi2Yh9TmtegUYWbE2ZugQKyeGa5VRfy4HkN6hJX7JZyke4VLQKyb7jkCj2HTnb6V42YKkZ1qh4a4UF",
  "key23": "5fX5MM1TDLwzVNmKCUPxYGgrU2ie8WVa4wiCeLpjDmCMF5PwvsQsPcpYZjqAp6rkjt3Wsq99VACyADmaxW9jGCFP",
  "key24": "2TakvyFZEyFn2Xiw8h92vNPQCBeuwD64ZeMJmteyWB22bmHXhahwmHDjjjZ7yaK5P2ukyPcdCS53bgqQ98agBhig",
  "key25": "5pD9YtaM617woZDRkwjuEAggGWWpQKNbr4468xruUZM7b6ZDkbknyQkiKNBfcppDgCdirhxRyiB4kQJojbrhYXbL",
  "key26": "2GzdWFLFwrSCNFn59Btiyw1i4MJXqQydRA3Gn3j2FVmQjifUpTgwTXR3hxBjYv1TyhFoDkXcQsD3TQguJ6FvfHLc",
  "key27": "5ihzm9wndHh1BqYeXvEk2xU8qGvAbkx4irLPzRZweJ2f9ZFxfZWjmqDkPUm3AvG9PVCqzvDtkiD5MHe8XYqqyb7d",
  "key28": "5dvvkbHHCMi2mrZNfacpc8pCrkdQoCub2LQry7aeb5Y7pUANTrYdC77g3AZjCzb2anGeXgN4XCbWfvGRVK6YhdWf",
  "key29": "34NVwSbCRiHpdUy4eDexTZBVMnR5yJTrciyEZWNE4Lr3ecFGma7F9uxfTWop7M6QpFBaPdpJeKGj4uLvGqwbTvrr",
  "key30": "2SK9voL9nytCBW2abnmp66bW2QPp9sKGSyXAH7zYYAtMvEPk4poxhojAqPWX3sQoKZw2tHj2g4qJ3FYCUojGpHzC",
  "key31": "5wCAz3Vr9EmZdUzdMiLhByg7smpTnWvshgXkSjLFM9dLEriQPM3yQf5aKb5sVn9PBAQq7tmzj3uHV5jW7bqAVUwg"
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
