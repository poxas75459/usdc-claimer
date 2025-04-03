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
    "4eor2wegDfgCATrBkHwn5psZa2Z6KCowF4fjRsxbpRnZEyizMHPWUAAXg4WWspuvCKpMn5wZJupNpPi9dTyEJ9kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J2z7aFYQD2Eiy1wsNjpoKQoW8ckN7U53QgyvAJ3sZxKWQpgQMWYdz1s6rZVi8uWkGge92kKZE5hiGgD7YaWqJGA",
  "key1": "4jnHkJQMrC2osk5ZVDt77W1Nr1iQL4wcV9hi2YRqf5vw1TRmr3DNhCfjKfYBQgmhizfWxqnDauNgMDoBTM8Qsdgo",
  "key2": "67LE68DLBWmr9ww3EqSec8ir366Woinv98KdW1Cpv3RrGSwMzdrTXqca3EyrJ1DBySDcRTqDU4BfeAsX1MruNufC",
  "key3": "3FEKk9vk7cWCpdGRRNsoXjH4kq9kEDrocAZao1XpbyvPjHBe4c2psWoSHXSsFECDbV1SyBX2fwnzvKtSWrpFJ37w",
  "key4": "3BPki3sFXyMnFsYgjzsnfgHCB6iNCj1hfWnN3soegueVmhxymMi4F3B5EAW3FiZh9pWnLXJcaZhxm2v7oi3KRotW",
  "key5": "2nxWgNDjgEHgsUf27rdbVH6AroWnJWeqiKVbZZQvkgkR3dS5MUWfSAtBtuchg6CnKhHzJ5TLFTaA2sFEUuQind19",
  "key6": "3os8N5vBLZUbYBdhqVHStYigycyuqjJy9CMX8LBY6knkVBvn4Z4BDPrfed3EyasWrb6x5ZAbD2macLEFEbZgEejd",
  "key7": "1wYt1EPpnK65LjdcZ1HFr7ci27EYorpG4tWTaePooGavfzNRE7n9ZpTHFvJbNJJxFsFjzYi8Y32Pt2xK6DACBqb",
  "key8": "4WugLHr3sSbQLtkswsv7zRXw5m8Jnxwf1qxs1nLwN8mgsojH7DtpYDuXHC14B9n6tNxd7gfFwQTsy6Eh46P2vSWS",
  "key9": "4qXLQNGqvRUN6thgQ6jiYVLEmW7Q1eq8LHmFaaAfVsiezRiWFwHUc69KmUfkqRC4266qnBcQ84QyH2NghA6ozzMq",
  "key10": "TwpKzm8qH2RsnbH8SqMwAVdwnaVPQn41GGvKSm77zuJz8Mkg3kEVirCrreXV9smVnh3iER1Rai144rVxtYdfGv7",
  "key11": "2CVfUswZtmgGMqu84XPaWHiwqGyoig11UHSKgh4Dmth1pZaUTjmyy1tj4X6CPju4jBLpgxf7WAYcvWEDJ82jn99V",
  "key12": "o2ecbiuTkc5o6TT1Y7cx4KyJ4YM1SFZ953SkCSAD5Pai2XByh8Y2WDvyxBzWsFZ6e5j6C5KtYjzCdLTTaHAS2iu",
  "key13": "43QGzSv8BSEHqpJ1negmP5jDa5rJ9Pho9Longr1xGUBjLg3wUcNYoZ1kzpVmk5w8J1YbQM1AYjBwM5SsdKQDEhzb",
  "key14": "SYgn6nMJBZ2pReS2S1cqccMoRfX3gtoAmk8uKiTkXPqWKEc8n9WtqwgJmgzfr7NbTw5Q7BJEoiAXvavzyWy99vi",
  "key15": "3kWp4Gwnz8K5EcRko6XyGUsTLepbUz19FfJw9qTiedivbiSjB9ji2wtBFzZeYRXa9oBb3dCo3FUKHpbKTDy1uEHg",
  "key16": "4kAmrBQTSDVRLPsoc3VGN9aVMeMsyj2Uv287kRHsk2apbv5aU8nwDc6TCNHNerAsCANtWY7C6aHzTcADf3cYgYAZ",
  "key17": "3U3C8V3zqG4H4tc671EDgPRVdYu4ZH5S5YzC6Duw977PJA3dU9kMFq4oJG5K5DHPXC9AyAWWfPgwuqQDk7ABUeL3",
  "key18": "2ZHUHwUdYciTPATAgW9NMUovS6K8BPvQdfxzbK412HdthQqbu2MUuN2RvHpMHXuUfiwm8bzoQEwQ56rxmqPvSBpR",
  "key19": "5PhZ4Z1sLKJMCQWXsTp6ArTxUhPFyxNfGW3wJaBZfpC5zLFPZ7FVmHbXDU5HmxS2UDpaByLBm16xU1jMLmBYYpF2",
  "key20": "42rSfd2w1aB6TTLQ5MQordS4iqMZxAZRiFHP7qM2rjrV8s8oXfhRU8RDvn2sw7r2Fg2AoTj8xTA3EXq4pLqnAC4S",
  "key21": "6QtWXR8cD3Z1iEXA6JCP3RfLYftt8M7TTbcorXrmyKjsFkGsWYgZXMgZrqv5zy1rp4D4QTgbqayqAiPejWgCQoF",
  "key22": "3Ha3B6CnLV5oCZwLLskFDqx4EH5u7WHRmv6ZFBddkh3h51vYb3Ur1QVehwX3uZawCLooiAY5TVpGWPMxwjuBESK1",
  "key23": "4uNDXHBKaeLKML82iDtrrVdBpbwhk9MCXKR3bg3s7ATSMozRsvcPeMWoBZaysGvBH8YT7ypvB8qxkkLCGNmBA3B7",
  "key24": "3uyGsKEhSZmbE8J6MXtWwZg98YGHk7kiZPorjF6T3CJc9eLeejD55jXaM2KspuZV7Qkr51ju78xQK4rGtaaZ3Yy",
  "key25": "fnEdfBatbLowZLqtVqgSWVgeJguL2UBTE5bb7bHxpaJSH1gDVYW845iqmRZ6uQpfGDJUGndFAt8rz32mRx1jpS3",
  "key26": "5SSGqUfXyoys87G3mfrqAg6r1EEtQtczLA2yPQzsK96dgcgbonPJroBcqJWgZ2Vi43HLY9XiKKuUS2VpPxd5QBzT",
  "key27": "53S5WAYU3T2qneT7TDUvHA4tzbB1ugkGH3kvaPPJiQ5xPtMaL94iMPKymA4ozcuf4UsFkvxbHjaL6jXtp9PjaTVF",
  "key28": "5YsGHVWfDnkqe6kNn2k7489r83m5MHCfkP6s11PrH1eJJKuF3zcqg1G46skDi41B6guW7ZAjGW4FEs5SffRiyP89",
  "key29": "4FLcWhxbN8maEMwFBo8DeNdZ1BVhyLrJ3qZrsX3aH2exJubXVL3noyZHSHDvvAZpwnGyzEEBcPP3ZxnhQt5KgYcv",
  "key30": "4AfdM33ymnbRyDXBxpxvMUpHf3SmUX4yavd74hzsuiaJ1CWoGgYPShHrGX183GR76i5rmhC5pvkyCdQL59RtU35a",
  "key31": "3GYdjob7mh79mUAo9M6BCMrrs2xC95kgwj1QRR4BP7Gd45bTjeSx5ntKo3eYGqkF5uCW3oghPewmq2gubaEzsVgn",
  "key32": "226JzynPNgJbDwpN1n1M9DmhPVqMcd6oj24aL37DAVHo8iwSFx9wNssseDacQnqjDmJKZo6sAtHG3JGdMumimLzB",
  "key33": "67bzVSjUAi4wJL4V4wndY8DLkrVbDqmqAkVKoBAGjMgrjmsaDjLrGmQJE25gCauNg761vUeiq2CfKc23hesRdyHq",
  "key34": "249gsE1WzonLy8WMEyiryhqRQWNi54UgBL7SuYsWNJbGXpRGzzWpTh2QecvQ6rzqfUBz1ABaCyyar72QF15Mrrjt"
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
