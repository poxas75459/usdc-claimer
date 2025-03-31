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
    "cYuDiS2N7RUu8izhaShA9Fj3GM4Ujgeo5n95t6XzxDkqD9KSHP1k7WwRSYGw7FfTectovB8FfvRB7aG3We7kJSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SSwDTyQGnXdUtrV8VR8oTakQsWeZZ51xrSaBWgwnjUZLcD51HRAnTZDbc3zXmodMBqY3aQDWXMX39btVaYGsum1",
  "key1": "THChDDtLkukQg9RhfpACq6fMPjsErVQ5LrChj6hfVM5DT8JgzhncQR5AceX3UfZze7q5XYE2cfRbYxfrJitGUwf",
  "key2": "29iZHJVGsdy1cGct3NKbTjKZX5pFQnJsmnzYjSZMsYYNXEtrdeTR6fRDq3fChuqEfjPs6ZyDwMReV3UwJ6BA27DQ",
  "key3": "5uLtHPkGWLGcUZYXQmcp8ZniBkHhYyMQ7ZTWLBdRDNy8QxKGSqaSQ6ZW3KD8Eb1DMB8nRotDe8Qf5n4aA9fUeJau",
  "key4": "4t7sDc6jWsfmjcRvxkmiu5GR67EJrRHWaYARy1d5Yubt6uoN1wSqTsxKecDVbKVEjhNn6oKq35A98egZ1phpfNo",
  "key5": "41G1mHm2dCprJYrxu6c32yR67aWBcxAiCE83mVQE4Aog8d5pbonWDA9uBJ2GzmTQEZHepRFJKfAa25xspkbBk7Ea",
  "key6": "375wyNSfHZpnXFREHme3U4cJBZxDhSYnJmQ1WyUYfesnfP9uUsbYbQa2PwT9adNzsemDyf2Eed3fm56JQeEJurqE",
  "key7": "4omL2K7NKDwTPWdv2NV41dMJt8M2MFiQKnZVP8rf6iBcbQTyz7tRz1J5M3AdBoJgs5cT9U5cmgTLGdXBvoDM3LnL",
  "key8": "28VSaQYZAw1w4qUtaBFPEpciEFLQhqav387J7toqy57naQ9cLT5MuF2ow4mtYpb7RMA2axf5wrHVyApCScc6RFAS",
  "key9": "T34C8oqLUpjmUSFnAgV5ABHNtkdYeoW8irvSyu6cT2vRXgf6kJm6VTsrEmFMnovf2uAoULe7FDU6kWNAoEgR2Pp",
  "key10": "2zQUBysTVrP8xXtJVpxKfZ3aFxdnC281D5tyiAnZMs6kLeoKy3kBADLQoPyDMMXg4DD67okttD34fuLnUxYkNXVo",
  "key11": "4WwV5qjgBo6ARQdhbRM6Ma6dYMrMrGzZrr5KDexe9f5jNzQCxqoqTp8o4x35TeDHZxFdJzKwHTTknaUztdJZrPfy",
  "key12": "FSAWato9BiLJmMn32QRTrJJ28ZFquAjP3AwRdcmcNzDhVm6P3W3Kiv1SZFb3PtciLFqaVRJgzNSjgZS2hciWic5",
  "key13": "3KoqfyrRXxmpRsUA5yqGjyUbnouXXjy96DFpaxRGqmjMPzY6CNs1ycrDmxb2GWZxsrwrNB8D4AL7SL6uChyT1FTV",
  "key14": "hcrZvDbdcw6eau7CH8WUhL1b8u1hKaagwGfb3VMPnNtuZkPLDaf7LZYcFGBM9sZxWwj9oa1RkDL3b6Jpw8sypga",
  "key15": "5Y84znFbX5WnaeWQeet9eKDZKUbThc1WDC2MH3sA69MLireZ7TCt7ns54BQubRV7HQXVZtAH5YmKi53dXKsEGTug",
  "key16": "4cgUXYyZdv1Bput3tuGKKXtvWBmeWxnxbBbJ8obhfpHLC9pUfWzVk9vFUmSb6AHUCgv1NTLkWfqTJ2bNzfR8d2Yc",
  "key17": "3R7TbEwyEjsJjwKUiJPkysRcCNAR7oeG7mrRnZj54ZWG6BqcUBjNhPjXwBtcuropqubc27NaLGsYT8tKR7zBkcs3",
  "key18": "4vr9PuAwD1KcTqVytwvk6UVPjLzVhhjXPUt5nVWM55aP8m9dapPMgEn3nfSqhdztpnHgDdgQdyeP5JGt7w5MESnW",
  "key19": "3vUXChLPm7ENpuEbLakVAzfi7d3aJDUM5Xhik3rSDDckEsjL3L3ttmK7LLFZSaZumFGsj4CoMNBqn3h6TAdXfS3x",
  "key20": "2p2bmGUbkijryLZXG5NqqUb6R6Lg4oRDDWoSRgEGvpwaAFwbrfWhhfJ3tVAJym8NLcshfibN1Yyt1Tb1jnmyBBXE",
  "key21": "2mjeEfLvjjpN8BJuoMHdBP4bsMmUfx98tWmJLGnPeJYym1cPFrije7sB9BeXffzVSV5D7SbhEprwzACSEgaLXabM",
  "key22": "5nRhnrjdrwkH44a5WUtALx9kes4rkn7FSxjgmEwrr3LkoG92S6QV233gLpZytMcNsnjUxJxekNB92waxpFn6bAYn",
  "key23": "2x7tn4oVHun1Mky3KHANpSMq1n3p7pkN6a8ezRRQhe6q1KyZhR7PbC5sgCynZaKmwVRNzF3KSwBM8FUjFgfs9RFk",
  "key24": "5ELCUSa7ovMHpmZwvBwit6zZQkX4i4K8zyYE9gqPupM6fMcbNxiwWKAVTsCo86KcPsPHBgzoUhzS7LiVdHvjJxj4",
  "key25": "5s1JB87SSaBhz3cWXEP6h5pjG7B2Pt2uNhN2T9aME6hDKHQxNQXDJ8cuKwhCTBHPsDezaSYRsa13THgAqvbeitDt",
  "key26": "5ymANynrSnMMFHWN1ZTP8avQ34ZDQWoh4y7dNzqi2Jn5xjtPqo5HK5NcmibS8EWpswy86twtH2NspbrNE2ei4wL9",
  "key27": "sude4VteEfrTr8aakkGMqiEmqy55XX1F1HFPKfMn9Px9bmSZZWz9GBWoK2Cu4zUpuVrQP3ynQFhALpatNCXej8C"
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
