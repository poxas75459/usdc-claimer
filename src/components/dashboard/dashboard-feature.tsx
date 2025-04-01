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
    "4wy1EvLZBUFHvkDuFtp1wwzVDsZvuTnrBXSCkQ3K3UvmGf71RBiRmMuDtPP3YjWL34WQvFF6bsfBuy8QX3nyKknz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JumgmqnkjLzqjErvGfev141f456EL2Z3gw98uBrGKLjzTM1W8AaYjo5hrq3TFbHKmVfWGNuxSXn8X7xk2mfeCaC",
  "key1": "9xDb2ZPiBiAXBrfnC9HtpTjUahJGB3zmacJKq5Sf1k5aATZ3AAK3Hex1StmKRSsWLU8yyF42BMtrcULRiLTT9QE",
  "key2": "jL2xdb6NLmBUYM8yCQC5xNy4A9kkbnKWvdWsyAV8JkdeAKB2FzKFUNoDd9F5AaHg9GE9MkmtRaBMnnXeNu1hiZb",
  "key3": "NG8zwqofA1RoamZKs9H3v5HaLrw4KW35P6JXxnvCkTBRkexLEUJ2dXyM7ZGXJYfZaPsYmeXT6ayEfSj3NuNi9LY",
  "key4": "2cdu8B6Nv99d79c9YPnXt5xLJrnkRMByiP77aw4okMoVd1xwPTYXPfBKgztsMt44WdHSeabAgJr6bJs8VbAwg4uc",
  "key5": "59pE2f79ncdzgbTbwSLU8S79g6w8maSGxaM9QaXcC587TQCqvkMtHpD57VGHDoAzZtTrJq1Td5iVqJx2dQGwoehq",
  "key6": "2CLXmrAiiXiJq5Dj3EZ5z11wtAHDKEKZTz2ZPpJ9V4AoywEubQYUi3AbLWA7tqqhnTrbXQPXhWCW93nCjYCReA8B",
  "key7": "3g4KLt9ycJFAqJXFEPX7PvLDpMuenX8b4CVaBGKE2pjg8ANtyqbnAcEChxiG4PdCtbNqPV3e2utDUDihDAityXo1",
  "key8": "2GDcdzgz5po5nkyNJnbrQuFsQJ4awhh9FfrVZjQFWYGK1FPVZCmgmg2PnoiaS83543wgaLZGXwzkjGvPjfS42rwF",
  "key9": "DA2ddFjZvNxayCQCzHuTKjRW7WS5Wiwa79Xin8yJ4RkKZCtgPmX4FZTeZFeGNDwHPQgTmnm4nMCjk3iYUe31Qnn",
  "key10": "3MMXbrvkkPuRPmMz9Rc7vCXaqQR8WpdX74QmjgtF785u5nJv83A1EHAhBwAe2udoMNQ45daiLVy3wg52UKn17rSy",
  "key11": "5LdxBMfUbJEp85HwewGWeQ5dxeVtq3yvEcpNX1gU3VNZc13U16SA7z5cQ6cRKQH5dQGnyyQBGdGQ1t3k5rDMoBLo",
  "key12": "3XRFTiVpuDg3MrXV9FjA9aLchNxsvNL7q4kgJ8tBCEoT3Qc5zVDevi6oT5eVVW6nNQcqs9WrzYtFkFxD1L4euCRH",
  "key13": "9hw9yN55KHkwTSPQ7rwaY7j3tfYn4jnwLstf6tCJH46Z2DRYHNGuSEGmpzzC9jJohA4iF5mJfWcRiGJFkzkDT3m",
  "key14": "VEed5m6j5ps78tt85kdDDzPoXqrnfUdJboonDMmWqFGEypmKoqfraeFeowvEyoiaW1qoa44zu4ujb62F5fnGe3e",
  "key15": "tS4twBcPQ3BzQZgrh9CzuMdney9bQcvZpVoHwJg1577D5GqxVs8CJanoZPumqYch5TLA9vg93MHUnX5ZSxixbJA",
  "key16": "497HGooR5ZTbpiNmmBQSj9xqgR1WoQ7msJTAa31DvU6Uuk4RF75CyrC184fjtxak3cUF4j7y9ret5koQkBrCgtwT",
  "key17": "2euBAkyfuTQ4v487fxFdgND1SwkqhSRKzi5r1z22cbD7NrEqmpor36ZKnWMKqmg6KDq6EJNyBLQiePLbehbSnirj",
  "key18": "61UYFNHcmNcg8T5wWYwGEjNeo8xrw5tpmK8zMW5bephxYvhgrMSpoVyfsuCWk2VpFX17BAd8qBiXdCSyNPSGH6Pp",
  "key19": "3LAmDXRvEK7S1r5Ndfe7NRXHEToq1S283WVzg5M2878Yk4M9DsqPZwDcJEcx8K7KMZfZZFr8XmBpgxXAphqdkeTp",
  "key20": "4geTnktWbhsiK3HcUNyofoyBjHpxDButmxpmVzew1V2KXPHZSh5uEcVXaW9PeAudjGfEunHL88FsiV7WnKLnf9Zc",
  "key21": "4FizbC3Atg7pVUGY7hE2zC8qzTwhUoicfo1eQaHSspU6EDVZqis2b6sQFwisUonXg4993SAGjeyjBQn7XGo77q8s",
  "key22": "66AM25WCifTr75BUytoM4ZDJjdGEzNgpLQLFU12BXVWU8HjVRS7F5jjb7CRkcXPEu2sQe9ZWSMFQvQVm7DDYvJzL",
  "key23": "54LtNSSBQTQY95uD2yWQx8HkLJBS2E6nB9gnQ2ZPDzpLkRFrVF4NiJHC81Hruz5AP3oWrbzLS9UrkQ2nsJSPPzb7",
  "key24": "5J3DxB6X7AYTR5H9FcPzU33HLgXj8uiRVSDQBMBWXkgNunvBVuZEaVp3mv4MtaQidyCrNBiLdESB9yaBzMnM4NJe",
  "key25": "4j9iFJwqw2MGdbLu7LVykJA4jyECMkHQNpcAUPDTkPj4dSGK7piYPXS8AuFAztzRabTSugkRLDcUucwR2dkfU2Xr",
  "key26": "hiN3XYJA2kLKZrbZiw7PzDhnA43wo1NgbXMLYG2Q4otcdhfWHsieq4KyTXoz7LAvWhaP3orvMdMXbrZxquwfSRP",
  "key27": "28nfoF2gyw5LT59Hmh8Mf8gzEcn2LpRRZwaGdZnMwsPiDuhVybU2ChAh1d5X2UPEogzPjqjbDHWybB3bwm3pgHvP",
  "key28": "3ztNwDdf5utUJR1i2thZJDmgwmJJUYhxPFao9aGvpHyq2yBH1c35FvLYnfxPQoVMYKYg3SxnMQJ4xzrupAXXPKnQ",
  "key29": "5ttfc3D9FfWKCsaZVaJUQVZuDk7jJt3RWVCZdeXC47cvywYbZevARzL1qvarBXJUnNmEvRpSsAeDEEwhMYiuhjKL"
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
