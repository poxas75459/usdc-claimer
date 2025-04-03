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
    "3cytAqUXzrFnUNC6E298jULdpHu7J2mKdxo1NmfZbGsE1XjPrNeKcot4ExnKqURDAzumPp1Z7oS4qWgLG65TrFyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3geZqjvT3DjYApUJxwCdrYaBRN8pnE5nc6JU82qxqCjLHkAibRoq5tebTFNC2R5QFnxFd26A6nZa8FMzdaugf8aH",
  "key1": "57dDns91LKD4aqSjX2LYDWjuKybJhNBKTz2EgBdRsJ4YJPgviKYoV5zbXUyLGDVeaVgeXB2tqvbZxvYQ8jNvzhFD",
  "key2": "4sJ7X3kN78jtXdHQn2ZeVCL7QUMQecGj7k6Vk1B8c4spHBGSErpDZASVkaarXT5kTcuR3LxRtvM3KNpnKWmQFz4f",
  "key3": "zLQe9mPRUcJM9SfpkKNW3545TTxWRigdmJ2b1nDM2k9f9tU3ATUFugAwB9UXqLQQqqMRP3JeYCbDDH6oQNVCq99",
  "key4": "4UDv7k25K7niw39wZaAKpuewwRGGvU4uUhxaw9H1JmwxK11hdzhVBMoBthYDGfwoYjwbjwyjvFcsimEiSLZfpR44",
  "key5": "3RT9kqwxEbXUe5aViR62BmSVsVDVCnvd8s4DFcjtfM8ghBAE4CtocP7NdETnCbW1RkobmMVhf8JNFhEmJGPnsiA6",
  "key6": "43MKSBAB4cxfyg67sM5PcfoCBqBGiApbUeZ4nDqG4GsXha6MEiwjfFMSA9d9hUKzBz3tgfUKS61EqUhz8mYKys76",
  "key7": "ugivxvyPZsSnLcM3t28dzwYpZzLCzPf6xotXToeNzk8dS537ZpeMAYXUJXyinRpJgKNbYpWexRmxoBsYHrqMGCq",
  "key8": "2v2SjKKYfTB3MXTGArrhR8hKkpijY3CqA6uDBrXoVznZxCaHEPk9Ni4ySu51bNvXtKpZNc2GR1inW7UNp7wu6C8H",
  "key9": "4cmViMeU1UbUBz5FasyaYHKy57kiSZydx7c4S6LuBjP89q2J8evTyc2XDZt7fjRGNBmuY49e3Rcwu7rwU5NrA9Jx",
  "key10": "sNQy2ctct8MGKsJXL6gQd5khyiwZ1cLHaQeyowYyaPaxo6v6WeDC2mqf6R9xYwvVeWRt4fWYHqfDE1BXLoz1KZF",
  "key11": "661Hb4rkebh8HbBGEDHwkjhJffggpgEMjgJFokdAYPao5u323iX2x4FPki3unZS5FjSaqpAKGBvaZtFZmMDatPWA",
  "key12": "26jWRWTBMNvJCiciuseZTU4zYTK68FQid5V1gsGndtA3stCRoiLPtGZ1vhkPzGkubFQFfHdLJq26mcekHFMMoara",
  "key13": "RorewmTNVNNqbQcfmsu6AgBt17yqxmbsjg7g4zcqJZMYWAceRFn6EKviTNNoG1JJWU5Yzo84VXU19Jqr7889MYH",
  "key14": "4kRog3gVanPJsdCeoPQiLQitcQoiHeLdehpZfU9pha6xvurRzauhx4c7h6CuRU7u8bFd4V2wmxcid7fjEoPpzxHm",
  "key15": "5fgmzoCVWdegccE1oHwDjkDknH9xgynqL5eMvBjssqZKr5LXxqDZ9ity4SJmroWUJSuiKczsu9oR4iv8JBKDaqDg",
  "key16": "3hr6mt5wpKrCPs6ee1XVuEgNPve1pBMrPUe2ZC34pzqjnfpQgHWc96uvtcUk7LYcWtGDiHEjxcHS1eq3xh8vB1Ny",
  "key17": "3hFkAxFzPbpYEEveVm1cf97phZKM41R6Zx91Aj4A7cjrTwPWNSsWo8dahG1Badm8qaBxrB26ZywAccVp3tkS6cYF",
  "key18": "4gMyTJBHSDoBSUQM4oPB73HuayGvcBEmLXCi5nPcJ48FgdH8ahL1S5YrcMPJiTVa9nWWDrdZtqWEKpRD3yfQbmND",
  "key19": "PgJC5W9MQwdGuj5BXHdBd9tM5a6yPGWvkWYKFYMwa7ohZtdRPzPkUr6VRpsAwKrecv2ovAVMfHdJ65KLD36CPjw",
  "key20": "38BzuZJ7D8sbc6BfxGrZJpidqzZWNvcfEoUvWRz8f449pBCzKcRFyZSnFFdtCdfe38JdVS17JLqhm4oJHHDRoHoG",
  "key21": "3huBipSUA5iQJHwUzBw4PPXaKQ1hgAHcocVo7HBjJZnkVMsZ2xKRaCS1GskoDwMwr8nAL9ZyteEycqGri4e3bDWq",
  "key22": "2v5bpY2rSaz83xc33SEVWVLxkS64bGSDXZsTfxvURQPQ9ZmgPDnsBZfCGYhfBydyPV1YwEJb4es1fByMYockw5PZ",
  "key23": "286huksjsoR98NXuk7fSrLmbuNswQss1ELcfFgM77k77CdaQU5Be5CdXf1DUbJaV6MYmefGDYzJnyt5uRmSvmzVh",
  "key24": "2AvWKU71ptYLtqaBdhzYJPMe9DMUVVhevy4AeqC5LxnLJUVWTLyFBjdHWyCeFSvebiGSw7VvvoJuPoFLTo9PibgB",
  "key25": "2qdN1iS8bbg3BG3EDWng9hG2M7it8akp2FkATwHnjFLXQtsQKyR2YSbRyZ6snrjhzCqZBsud1vGcZ3NTQtzzzEqA"
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
