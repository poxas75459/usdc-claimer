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
    "2K7hTo1ftBQev9MtzMA4metep1yGuNjWyK3wafjm6vSNnAmNDKRS1YZjU63eVKCVs2T8vnRLgWCoGYmXiY8zg4ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eF1UG4KYoSEAKmGKQ2RBfgoALECUcJ5DcjaWHwqBn2kbZrucw4fVbEMWYuQquGAkQh9cdvWYapuk9Ge6SyYDniJ",
  "key1": "5fZD5N4wMHNs3i8EwL8rb7ryLqjGaQ7uxoTUJmjaWb55KigerY6xgdC8kTMUzUyNcU5uL4cihZ67Rbwm3EbtZBhb",
  "key2": "2daQ2D4JStTn7Gxvt1gwTY1XyJ4CzJTvM9bgBM4VH1CfKte4s8opGvbyHENdkhoEveZVahpbQ91twpWxhWJoGAFM",
  "key3": "5EAzfcSdMUKkBHU2FCWGrNDtik1PgqmLW8R5WnRZfJVnU2StPZSZCWbY7AgWGPY7t5a3toHNHkM1q7DC6VCRM8eY",
  "key4": "5UCPkM88ryCbAa2QREarrRtzxEyogKNUrWdw1MXkDN6p8zn9s5iitEQ2eDjEL7Y29utvnQPAWpALRT8P6bq5Su8M",
  "key5": "oqR9NK1Wykx77MB7QgMFgQe3TisYj5ENi8uZrBGmJHwUYhPTgy74AdMsmX5zLMDSRwVynVWyNoQsJhe9GiSpCpz",
  "key6": "5j3t2xSacS3aczLkWnhw6h2EnE1tDTsvZuKKaeG7FnHYj2kPPGHFwi9MZnUGHmHrN7Kv2KGdZxUFRNWbUfysJX51",
  "key7": "64BMtewNEtMW6cRNRuBaaURSXCboZgyJqivSuVYSM4GP7PCTi2N6UNkquNBXyFaff1WgVdHw9T7h6TgtFSpNzcJS",
  "key8": "ak9uNH22Mu8e84cD2VzBSyY41FXLnE3soQTnMn5fCWMUQPHqr4F1KJPxkFkUoGMUBz2WU3K8ADKCrftA7R6dVxL",
  "key9": "oGnvp9CmrYJE7L8neU3yhG5pRvUnkqJTAgepx7VPjiR5emCYvkUnquWQB8neuc35oxTbAmE7gnHUZk1u5anggNc",
  "key10": "2Gdo7bJPmaS1iyVy55zsPPVwxQMS9SxJ3BNp7miqV3r6ge3fnQMp6iN3YmBnGNsVRiCqKJ3kMCkZykECUAxsB2qf",
  "key11": "2Lg5EuqRvk6hycUXrJ9xuPpUZ4ZKua5kv8sxBUhjRL6thiFb6heT3dgwQiJZ6sJ6FGbUEdsJUFUymPPqUYzgVkad",
  "key12": "2DEyVY6YT1U4eBqSpJr2VV4YhdPbkG6JRTJUHroUN7BKFcUuzMS7WFKaNbhbNf2rcCXGBpK6uEqzgh8Mbb76Cisg",
  "key13": "484NHEn6QfE8BZHPeGnWALXfszk3ASxFP84EuSCrxWQaE1KPCK9gMSgdLsBc1HwhPWsCwn9gDY5f1vZ5aiWXXng6",
  "key14": "4ALjkv3reimCwCWpnXYy93C7m3kqUMsLU3s5stDLWi5mj8Bu7EBye2CTT2dkvzCynXj823BSSoLMnpeFUoABtphW",
  "key15": "Deddhc8pNraCwVSNn3pfyZhEKEJ1BeySXbyFrZKYi6EzQa6FMbSP8hUCBjM4zD77GRskeENjGyShKMWVpriytq7",
  "key16": "44dngi6Js8K3BWmcPASvfLa2KJKL8NLuMmUKqsikHH6SHD4ExuiUCMNrhP492XdAzpciLEQzUJ1ZiLmyiWdqKTYx",
  "key17": "2kteQM4SHZ8dafgJD8iz24919Pjrb6QpcpiCHAGCb2TedoH2KnXuuLuTXUaV37Er1eMuH6e6mtYfTUnh48MBT9xq",
  "key18": "2hs4VLiqe5gbgBbmLmDBkchq9bCsjqjx58N4VRNuJxmcNxFsvfAjqVLy65kf3fDbmPvCPT2RwTiyTE9LF1MmYGUd",
  "key19": "54QEpJSjBZT81cPAgaPQaQ4N8UXRNQMS2aPzMG7Z6oidhp5BtHFDhUK6gHsWwnDutoFQvPJPNzEXq3XUt5SXuszz",
  "key20": "51DFxFeYP1DDCczRvEySkoa72XGhHwCqxYygcHrJtbowC6oiNU3NaLQcMPzo89RKyfJZeSbtDGd6LxpskmXmDma2",
  "key21": "4dE4LUVbteg5egB38eXJTEHNVu65TBDQ94CeWZo88GfaNCqVfzaQySF9wzj3ihkY2rkqAurCQeLMSsxPiBKRDENC",
  "key22": "3DdBZkxEcMoCXV7v6VSq7RioCRRibd3AcPvQLKNGEXpu113rxTUv7vLxL4zUycfdQSvVgGZyLVmBSJr4rU9izpCR",
  "key23": "3rwXtGy6t4R4Q4AkU4ydeDPFgf2K1Aic31YsRCLGAhszChJkXBiwZRL4Z5ng2HS2iYqUN3wFQyRY8Cf8UnzwFZYT",
  "key24": "4eJuoNANtdC5epz6okbPAknQJz8SeuBvfLMXQPa5Eyjwk1E6kjamck2G12Gsd4UUB6gZUXeqaixxnaxpwjuz2CyF",
  "key25": "3aRWsniKFn8fvTzdwgS6D8qAPnMbs2V4ftfWWsBD1MVJTNdY31JVdLtGwj2BQoramxxP8Vmm1wYzp2Ewhnzj49D1",
  "key26": "wbbwtvKBouD28grQZRie1Batybw3mfWARXkGqx5Du1dY26LLWPiLMQses4cbGaskQNk7RnkTx5dRPyznzGXpeQE",
  "key27": "4nMFPpDLDw4HTvu3NxVNtUsBdojFU7JomTGqT62seDXT5VJFyrs9Z1arV1RvCCzF5JfRjgxjRT9Epg9THvzQQcri",
  "key28": "EMy5rXj9eVwiKm2w1PDpKLEvfnyLE9f9r8UWJ7VfeqrzDvbyVscJUUqCjTtybNUDiTFrGMPUNpgcRnCQTafnew3",
  "key29": "nvzMdTyeYTe3PCc9Toy2AatJBAJbnfhdvD8Bjm9aVzgPK2FKQNCsy2mLSysRwrRpPZiQTvPod5PebKfVq2tyvXe",
  "key30": "tVrYqh2qPsiC8B3GZynwicCeMgLcREH6K9GCGt6hYKdYpzShqYJgzEU2QYw1YaTEia52TbE9J3oNTWzbdxDE5wn",
  "key31": "nr5q1R7432oyQWLceKwLJB6weWSPPm8NMPzjRsMWHtJDGLdpD8FumSqMHEpBXJqXNoV6JPYPvVntM7cQSv1bHBb",
  "key32": "2HjHe8WoTNXpyt3LXBnZv51xBNV8KWHeHWVfjBUydWK17e4C6cGG8jA5ido4XxdKoxxLr3vrqbpocx9NZ1f8atGt",
  "key33": "yMWAjXwNUcKXpYqLffQoCmKQTpXfPQjKUAyvnonSH1zTKAC6NBVCETPeJhmNaFUxszJAsNd5WjaAEV5jpAYQxsM"
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
