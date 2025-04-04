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
    "5msDDyrNrS1JRV5iVsBX2tSRRwjr9XQyRjyMzswtzfJ31HpBGKXWY7xRZWocoAnWHx7KTjNbQZX1nYSJ5sno2bhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HBBGxnddfXPTJp1dDXmpWHbpSMqA8g1NtUHSPHd7oHs1x65Kr8Sm1ssp1pUbLVZeC43FoNhJKnMHpiqEX2cb8tF",
  "key1": "2tLovrkKWMPDnxpk3yhocsgFN7hKFkFW4m1JvoJSZbZ3SHoU268ryCr6hLwwSVCENPEZthNHZ1WHS1E5fqHVazYF",
  "key2": "46XANGhdw5XDo8tYotjiHqT5vPMMHJNhcHjrYSTgMoiPStMzCnwDefUaqoPzoJXUpSLnrPzT6AxZtMMPCRwtBrjk",
  "key3": "2mqx3hPuFktG1A9SxwSLTE6FirZ1562mpDDXcCjLk8R1esXLiGwgiwdDwjn6pXfWfm8psCP1MiG3wvhpvsHLSwr5",
  "key4": "2AUBBTdc92KiQXFMzdkNUqAT8E2sRpMxZH9FByiDWeLmXtNC6d35E4tPuht7AwXiUfqpDddcevZgsCdQWBPXhEBw",
  "key5": "5JZiWwzJ6mFwnJ4GpAH8qD9wFeYxihzde6PPH1zNMUBYLw1pfRgqyejtfy4U289ddnjeeV2Zvq6RzH7Uwfvdina6",
  "key6": "2Yrkqo3nCZ71o6Ze8JmoeKAUEJQ9aNYZWbJ6JqMnXWW7WUcLqDcDNQz1EhpnLzfH1T4jCdE1FSpsv4oYJQ6tBkvx",
  "key7": "3MrC2opuxXZXNWTAUo9D6DLG19x7ZaKVQstLbaKWUn69DrXR8snDNS11Ym6rvYG1LMusB39xAnf5x414W7dGq5S3",
  "key8": "2GBjVGaTeyakz83UHZxhpiYD4t8Cq3dduxanSFsHP2aySpE8dZ6m4NhJirUoJPcnBHGFCsemCFu8SCB6hxrBb7Qh",
  "key9": "3gaUzGMpMvHTL2nSxTtcoTASirfy9e2aXyghe2YAfmd99JKx9c7KkNiUwkPeyjJEmrq8dD9WTNNH9LcFRi9p8W3o",
  "key10": "u4DLr98RP6mHsBAEmqCGdKBev3C6m452WLWWTAkXwb8w55Wci1o9RavkH65JEeAe9jfofFTqJzgyUmt9b2y73T7",
  "key11": "5Hpf4bzN41yN8G5ZmVouZf8TxsN9zrhuwXqqWnyia9bPVtznjN6Jayfgv4UjD8cKVgoZhxQH9arAirw1P4KcXk28",
  "key12": "4TFWRDEQmXGaEj86fvx8Nb6iJAiZFqEsh3FvWmWY4iqqusNctEyduwxGmydC2GTbcKk8TEhmawcKpsBjEuuKgq82",
  "key13": "46TkD69zky9cUoiLMyaHvRUeK2DHf3rKUZUGkgettpi5AxyB3eZbVzGrwDP2Acv5xL4YJXzddFZ1HQFcX56fb7mB",
  "key14": "3NBiHFe5e6NPCtFmRfhL4DUjVvyxZ81ZGyaYSWQ4B9ZQ4LNktzYM8C9Vd25Rhq5VUW5Fv1gci3VRA4hTbQCoXWdc",
  "key15": "3ziFTuxwj2d7qZaNQRhoGpXiyxpyRUAjoNYvpYPzzBqKgZwqVGZYL3EGzWjZsswL94uUU6r5ACLvTDVYh5ykfw4t",
  "key16": "5k2dpQt5RB3f5CgpE9chTsh6MwGW3b5UUmyCv5vsr3zrC4QJDPkHUNjjSGepQbAqEr45yPmZFq2k2fEvBjFDUQsX",
  "key17": "5yaCcrDtwdkVgn96qbPhzfkGK6b88ATvvfXovtGVEd1NFtCK1wkiRZG9MRtujCNPBqGMjBHmYCQuCAbLwxS6vKBq",
  "key18": "5x6bL1qNPTGW7gB8KRGy8rk7gjXiUQ5hqkv5qhLnVjVfbWR9QhqEH4VfKh8uCSvMq7iZwpuAy79Aku3EuWhzdnMs",
  "key19": "3SskiMxCbubEAL4uNWCGehGbXvUs1WCqgnwQbXpahm1bggLVcMs3vZpvAquk4VWUtM5gFL2HHspaaHYboaoaXN1P",
  "key20": "2nfRSbep9kN3ZpygwKH4PpcTVuk6PRzrpoyLM7CGWnJPFGMDbJEk35ky3XF2AwtbifDKJaQTHgqQtBGiqcoyhK3F",
  "key21": "3qXhvvB3enddGRcGEX4z8fcrdmvNz83QSZ8ShZSHme7o3p2hQd18UGm9RGjApzeqbJGinfdoHiWGXbGaYnpBghBA",
  "key22": "2SY8crZZotMZyhoyQbeU5NqNYdLBGYeakgvzWXTzW4JYaKomrMCf5H4FhBLmEGLpVje1o2tZhMDyCWQfSwrPnbT1",
  "key23": "FnSrSH2EmWQ7G5k4WxZkutsyPNsh3Ugwd8ZeBdvxsKyq1w5EBXdjnJPTbk1ErJGe246ndBsKt3A63LaDjo4PPjw",
  "key24": "2STyL27teTESzviiU8pTKRhPajPMcim2bZzDjCw6S7Q1k128LAE72xwkyKk6cgXfvewrD7o8X8NtoJ5ER8PEMtYX",
  "key25": "GNG7fQb2WhXDdEoSrjifdnVqDxAXoZ3wishUqhZjCmuAqwCN4xikJfkt9wJzSjuQYLhgJwYzgC8QLyCxKFFKD5D",
  "key26": "49S2uRnaXB6b4QghfasR5RedYiFYqge9yA31CRfJGWsXBNzcYdF6KGpqfq9Ebsb7EW4ef58Po5JUkPKoDshdu1xf"
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
