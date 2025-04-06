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
    "FyC2QxiusnuWvZsNuWuXMnCq1mY4aCSdU64MgqGCYZF5stnydcAJp5RQgvYKH8M4WA71mGknnAWS56XBXwZCtu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1QNyixV5EU6zpdLBh7YGUd37HjYoV8p7oUA8ZujRrPWq5u4ySeSGZJbRFLCf8j9FaziQME4nBLKgEYvUq17CZr4",
  "key1": "5tJD57xvhhQ4B6nvx5JSH5eGeRDy22Xy3v3Rr51VKyxsTYp67tW5QDvCay1zfMKz1bG2vibiUatVNbpw9vyHCEUH",
  "key2": "2nzn41odMxjUfLnqXsZYBUqtZYdxZRo5pomH1DRcUUAfcVgqmGWdH9zAdJ7f8J2s9KHKCBtK791LhPo8CTxktnUk",
  "key3": "2pCW3J2MdubbFmGJfuAG2tecMweJptugc3JUoYNRiVWCPuvpqQk8dnZgSUJKEwYhsNNTU8RmqJuHWpRnz7udg5QM",
  "key4": "hAMn56igmjUCba2BjUoHY7QmtVvLRhmDyYBaZXpHttRfubxv6NtgWMwQVLRfADuNxLPtSXQNQjqxkUojNuRqgFX",
  "key5": "4atrMNb3Mt1MFPZe72539ECzjX23gQg8A9yUYptnjGppn2LYk4RsZoMTkPXppsH5v4oDpWbAaG5voiKsA1NZUrDD",
  "key6": "1TsTH7HbXP6VzykJrNZ21BGCiYPzSgAf1XddpYsZXz3ZvxvP1Stfaxj3BgjLamGMA4uDiU1pqTYsG1zNVjGJyna",
  "key7": "3DmrDX3zFKYyEk2143GXstK9FxN4Fa5ccDjxDQQMBPyUA3WBbq8DsV6HPaX73iEgTFSXbEYtAnJBuV35gWppvjZv",
  "key8": "3MS5XrCuE9se89dsKZbDEr2qn7QEgHmE6wAzyUyyknwUJPuNrgDNJkZ98g66cVQnvNgp62caatWszRr9Xu7vp11q",
  "key9": "3cL5wBgcCuQozjej7tmht6Ff3PCkEYwtX8TwHJjdR2hzxcSe3KxwM9TC1hJZgPdy2FEr83JKNEKkQxqVwp1EFPo",
  "key10": "5z7DpzsnD8g45XfNaLmF8omo55u8Znq6zxCdv31XKBdLgaPdue2vdqfeqErGsk6iMZek8F8rsFJzGN3faV2RZ2iU",
  "key11": "26h8NekEz4pgLArbHPAgbXvhqVuq8v2XnUamkrH1hbyT6k9FFcSorQKTDiHcQJv2oV6XsDQQ9QdVEipefbCT4weg",
  "key12": "3vdK52rUicB7jTpNsgfJxHavgCFbnn4wobyqo6URHfMehXYsJQMkPSPozH8R3SybWznvaSYLCALK4zkW3y4zT1kr",
  "key13": "x4kBP1vryNagEWcDzoo3A3vEVK7vTPvn7MqW75wq2D21PLB9DMFNs7jiRhUrKHU6S1dYhm4Qr5qtdfNYYDTc48e",
  "key14": "HKtWRWni2XV2pCdWTBsHJW2G7fYiALhNKdM38mxTNCx2BHXdVGvrmFPUYRbMsSKHXnpJbQ31XCKmUE27Gp6MmkK",
  "key15": "TAzyCrUU9i2DgysZQdyzpTrs6khWr5TV3B9jezCSnaBLPihk6JjvT7RDXBcvNbggxbiVhv8iLXkJWEHyq5ijyrP",
  "key16": "Z1qWnoKRk2WrNTy8AhN6DpsLZqDQdQooAVh1ZhJE1w9UaT6ihBB74eojgYBgPhLADyennQAFNtqB7gbvnNV3N6a",
  "key17": "62dVFQ4joN8vJ7RCg9R6cXBT5FXCJ9VNNytd68nPp2Kte8eV6KbRNj9WnousejuhrivhVG1C7Wk92gzTwt8KrThk",
  "key18": "2U6M8yQRfhGFR4q8wVHCaPyURS1Cz8guTstpWkfgjoKEpMqAr8qEgbhT6VxmgKQStHTNPzwmqSjDz3B7EMRUQUe2",
  "key19": "3mUegPXtVrFMBknX9cSB4aX8tYHfY1it9Xgsm4f4MojRLGLDeZ1pc79gfcfCPkaLBPxS1KZtRUTXfY4aut95mm3j",
  "key20": "CMw1gUG1VPCZKDMNhQTiUQDQ6ssHnKbSSXdzRcnWoCLYVdQjwYK8Kk46emDMQG8MWbkiGbk6h8VromHj1RdiidS",
  "key21": "ccsxdxV85QzpyKFY9Y8ERSUzneGMoAjGPTGH6wcWywMataGVrRKLx1cmwKi4Y2Lvwr1nvrNQAPuVi2pdmitJRdZ",
  "key22": "3t1ykw7gcRQxfgATeePmuCQgipYTubS2pUc776LMGfoRa4ULx1F54n7hdsfdN8bAKwJvFhqdwZ4EJymq6HYsHtnr",
  "key23": "5mGxUf6hWeEa4WTw4Ku6qpLHEaj3Rm2LEKXTmJjiUVe7szXVaYB54kcUFpinwvq9N1HC2kwgo25wFW3XbCgno1ge",
  "key24": "5WbFxrWwhVEx32tW1Xco3BVwf2AtT5aMj6AYNCSLtsxoJdTvPjTFpMwxaPRJ4CU4zt6b9Rq1bi4Spads2bc6sX4G",
  "key25": "2Ji6kRm2F7ApQAFoEKSW8CwCwTezBwA3X2NswgmZgsoy7W3KVekrTViV635CmHKZenCh2VSHF5Z5ii2KP7FqEZ3o",
  "key26": "3KpotJym9kDxvF8VTHegqLHPpPyGwgQkA8zw7RkwcxnEnuizyRgrucVSjnFLZ9TRgKomfpgV66ahFshoyPbyWzSv",
  "key27": "qMiZvRnLREYvyhtQG6GMPTTd7ktCq9TQnWFfarMdMKF9ggBJzPCLdFjQvyTQ9hGPhbcZdSZi8KhGgEWHU7qutFy"
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
