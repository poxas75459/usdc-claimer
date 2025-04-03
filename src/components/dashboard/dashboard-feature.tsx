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
    "4sMdj76aapj96HxeggFt2Ufm74B5Z6fMpgBBBwCjW1EmDdZVCppDqRjRXVEgMeeAk8Jv5Q3rcQWAHC3y22aBV11x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FRQUHZFwvE4f5vk2baqWDoqc48PaF2q76y9XxFnm1T6dqLXCpLmKLbMaWeoFRMMVNTFZrtiqyKexVkv592ABAov",
  "key1": "2jBPUzoxx4CCiZfTVpqs6YmrrzocwPjY67vCeu7R9X3Rrr7eTbGxe9QMcJJbREu8bgcL7fLgzWGymzUNSEJTGmmS",
  "key2": "3VLqmt1H2pyRiR2Bc3dixx2uK7BPiMWVHevbx4GGNWHwXQjWQSxtSGnL5hpcegoqGNh5rj5kzVR8ePgArxKLiRUN",
  "key3": "RUPT3qVCfJLHJnKzb177Sfafr6SHVrtWzsbUPXm6Acbu6rZzmGKfxHnWi5LBuopk8h43hHrCXvmKPBHeM7cVGot",
  "key4": "QB5DcAdZdMxErgi6YAR4a1EPCjUDP1DWTfaEGBrg3sAiqGjTstNAioB3EQwzE3UALfk5tZ9Y8wLxmH6b6MUr8mq",
  "key5": "65nUjC67P9hK9MqmpLe6C93a9hJe189NdiWigMb6tf48ikNLtmiWeXtpDxG3ndYFE3Fx299VTumjSnrH6XyPsJvz",
  "key6": "5y1HMeBFLoAgsVmLHXXsi9K6L3QLQXuPbdw7jMKXLhfuJ3XjeGxamaARUvgDKaN6BhQJtNjdikt2SQzdxQ6pptUg",
  "key7": "9toHkvDTqAbifqukDxHMvrJfjUu5fWwpeq3Q3TGh1t6B6MpypApiRTWZkqEp1xAexaUNZCfzW8dkgpA6QLxEpJZ",
  "key8": "3xWVNef48aHVbUgswqiwSsKzrStHmeCUvkeru2Yeu1nEZ9QnaiLEd73SCq5vZvhFpdxWeqSnzVbHow3XBq2AqoVB",
  "key9": "4BTxt2s4gYD3SaRZdGSfSMzotvf5kr4uF5QmoKeucoaxkdQ3C5DHhbQMApp7roHxZX7JoKamSTJzKXRp7Rja9Aid",
  "key10": "4nigA2exV6KHH2Ck3zLorA9RhJGYU9UL8qaYw2tihgMDDxEiBBp3BfgJqEVyBkDeXigJ2re4AdA9jeuP12B9mxxH",
  "key11": "5g7XUXdKMMNZVgjNaCpvtn98gJvZ7T4ynqxtY5gbfBCZy6Yxu69sXdEaWVJsxeoUBvqCMyZaFxhHcnrddFuvQRFi",
  "key12": "5XbtbW88HbMLp8xL3urDZiZJJkZncVSR9vRFhQyAJnNyfbn4cZtsN8yEjC6kADr7ytuMYuDr9mviHEGmAUEwQzHK",
  "key13": "2c9jmUtsNYCfiZsmr49yYrGPG8y5EAQ1H8UsmB1uf97r4KnjPdtesjxULdEMUDW22p7aBKpEc4kXqtpa7jYgND1V",
  "key14": "dVJvHPGSvNjurKkJFqKuKZvCYAURP7Dh3pCzfTagpqC7LPA1MypepmA45Y1aBYMzm1zHTumEvjrYRRb7evLQH3W",
  "key15": "58Lq5F3taT9b3K1c9UigqEK8ZK517qbcpoGZxNPUgCpTW7zWqLfkbmyZX1pqvDoYBe11r8T6jWidasTneWi1CVA9",
  "key16": "5R9DRq7nxgHWonJQM8T2ubNWxbJByiR4zB91DNzrTVTwecLjJsjyAhAGNsePRcbbLeXojMBjydQ9K4tr56xRyLV5",
  "key17": "5oegRujQazJmqDYRcu9jczHYdVrJnaoz8cHigUNwhQHQiDvU6TWUPQTFRc8UohZ5NuCzbFCVzVRGZ7B4Co6UEZAh",
  "key18": "2ALnEbKkZheRPdmVVac28uC987NBdnqKZ4P4aqp4bD7FvXvm8mdnzAwCCcyDFSKcRSMpRLFPMTrXDEjMJdULsMYS",
  "key19": "Lm9s48kttg5JkkjHe6EakWcWk5WXFmwqh3p3ZcduKABqYj3NpTDsmymLQN5Qm7s64AbxYHU5Go1c3jo8dzT5Lin",
  "key20": "5E4hjZjoJcvBRwsVzhAvpWiR915PaoMMdzw3Gm95opoAAQkSW3K7AzvvUgVr5JqFvJ6haQHQgKWHDTz9vL6ae58t",
  "key21": "SvttwWwMC3LetKpeoisspUg6SyB6pNr5nQLuiyX12SdA326sgEdgV2gh1Ab6zehF6PVJAJtNimNximdMfVYUJEd",
  "key22": "2Fm3aTHWHuH94r3mNWBJ82j7scJCrDynQfEwD96np3zNBPZTUtGWzWmLZkv12BrRBcWA88SoWxoJqKUzXu74FjqB",
  "key23": "2ZaFDE5xSCQPUB3G493xvXu2Z4QwBdRSZ4eywwZMKzem3ZkqugC6bXKWT2N2yXDPbT1qdWBra6v8A36rsKw48vG3",
  "key24": "4XuronuYifQfNGy7SrtVzVRHNezCnrSJuZwaqqYA1pwU9S6zGKKYHNqfiL3CoHDHazY3ke85HHhiV4z2PE8w8arC",
  "key25": "VsUmhrEFp4GVmwikBJ9SJgoQhdPitQt1r83DEyGLcnBAd41YppPRhrS6wu5dN5kpTVWAZfGcJe2pXvK5Xun2HtC",
  "key26": "2nQzUXpT2io1n5KY8RitC3YGKtaM6ayqjiJACQsGDvmPBACxJkNAjf57DCnqgNRZcfp85wcnevZmZhhUNeTB3iXs",
  "key27": "sB4Ea7SQExppgWXCxWynwnRkY2QpmaTu7FdEzFNT4MWvV1V9GCn3zTzZNcjcLA3d1DmUeLqtHXSiziddU1YrrA7",
  "key28": "2hv2PnWQY57JB4rsWtenCWbDqCzpDYPG3PpW2Ae1rNjdrZhmYB6AZ6tdgxxxf1RLLziSXfcS2bkq9xsCu4fzsX3f",
  "key29": "YMp3vFzeQ8RqEYRcf3t27ENum4E83kG7ryTQCciWM4s5Qozvc2QYYpnbsPWq34x4GhTCqZibGShX8t9obrSsUHe"
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
