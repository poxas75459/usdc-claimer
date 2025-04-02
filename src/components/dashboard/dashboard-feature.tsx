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
    "Ua2zBy2Ts552kWYguZHxontikqE58rBU7iWgtHvNqpTgNJ1jjD3n1wKpE76yCgY5FcsvSGhcVEYrbmbRVQsJsEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "svNc9zcJmv5CrDXQFxfMYyodxhogHnCdq4ctzUPWMXLSBLLKAMYHH4pz2Mgcn4sbp3VsLdGW7CxfZwQptTRBs3b",
  "key1": "5o1u4yDTVE3DjaptqRW97SeGT337vw7ec2x8sDKjP5tGhN1zZ7ShPLA5mKZsd5RDfGfxEi3d5c1yaBR3AAXEq4UD",
  "key2": "SmPFWTHHHhUDGMkekxK1vaobsVXTBV5TpT7RRetciF6UgGmEGateKEQ6gYiiVmY1LDspgnTzzG9q1MhoQWbw3F5",
  "key3": "2byYoZoga9Kbx4mtoiEPGVgMw49Fr9skoEtENMTfC4NDbuduGCkfz6sUfi4MaB7DtBceGoU3fg7SwnyKYZ5Xkzt9",
  "key4": "3PeFCzRnqGryecYPYpdLjNzg2tuz44VFzHUSAAWcr7LqpjFYqL3tXHmrxMppA2M7DYCCUxNa3k1oq8SvRDpVvqbm",
  "key5": "3V1PRTLWtSMCmtsse7AM25uy5zW6mqezzbUn71zQYokeGqh6ViadgRTHgSt2ZXxNaRPPvWwDsk7ou9GznEdyxkJ5",
  "key6": "6JTF2VJ3zp1mmVRT8CheywaDgJ2agkJTBV6oGzByDn4LPupUzD2RKgD4QkLtYo4Hh2XUaW7GPDuXo8r8sPY8i8z",
  "key7": "2vnhXCcrud61eAbsrVGJWduFvZPT5XUGNxTTUDbjPSoDDsdCFMTEwekuFun3PWZvqJP1UQ26m1Lkx5asNArbbTNq",
  "key8": "5YPgRbju5YGGVkoyjBF1sgr73Eeo7iHioGuruzJLaSTjFgLRTUx1HxTqhwSNaAbymWvQMqNQQnLbrna54e68joJt",
  "key9": "45cHpYVMnSLmzEB2HG8mRq45HGprvPDHVUqUJZYJyaXBAmr5o19tQq9HVYJCmGeGxFx3HCvcrM4xo5Y6hEKe5kRU",
  "key10": "5vmSxBnAMgVTJbrLG3VqLaK3z1khJcV1BPXgcQftynWTYvYnKfXE5DoRgtJ2X3XaRK1uvbuuiVs59MxYQWECbcqV",
  "key11": "3Ne4TFpMsqagaX4gw9DSgr19DxgWKyGae8RDF9wuLkQ6qJafwLXfdN6GgWpas2HSzeEG19oM6XRipQkvWTmKaV6b",
  "key12": "46Ldf9ePDUps61xDRzasavz2JL2H9h6TtWY3FymztnkPnqMpenPK5kKqeiVVyMp4tXT2D1t82tkZDN8c7mBkxAge",
  "key13": "3wbzm23oSfYhekZ8DeaVFePg6K3E29hFu7jyrpPS5twCHtRrVdFQnL6QFkLuZsUzsrBGhw6TiKcosRjQ9FdfPoSn",
  "key14": "kUJViL1FKi6YaRs89DrknuF7q6K1g49ZwGTYhrHNG7ezbj2Mj1ESUGbJZGSiX3jmsPu6eTsN7P6nsW2rvab44yr",
  "key15": "4uoA9qjGS6w5H6rhXKi7NWzyX3AoX8j3WW79Fijvv9vAhCPoa5zwcqSVS8bxqSvGcs7xEGkQRUndppWK8qFKgqVZ",
  "key16": "fXWP1ckxV2rp1DkwxK7rM2tDb8X5Z5WNGpdELPkcRx29XhCNzehTYRGJvZJXoxzUDoBQ2ZVWLx9zEoMvgbFiRsd",
  "key17": "33xWf1kNJsLKSzHfEtSGJHF53hKHASXJb5PBQ2cnxtj7XQGS4v8Ri6ZX8KtTs9LRJ6kHXM4vDaa5aro7pQZEfYit",
  "key18": "61XVBk1Eb1W1rsWMiBgEDathS2BgAdEBCaLH2AVTFWVqbFEdCFzFMEVrfdPcdmqRqGRo3nereaNJFYjR9Hk9L5kX",
  "key19": "4vBzw4AmnrcFjq7T4QsAQwQKtgcuyBbdeK49powsJfC4cQrv8ZTeYdtTYScdGV5bqf3srPpKB4K3Y6gakTMnojew",
  "key20": "4KzJxXkprQcxtt8kxKhiHe7WXS1MqAcxX3iCKibtMAdgMei4DfSXHgp9LF7PZZUdUG3i5ggdRuu34D3YPFG4atDc",
  "key21": "3B6UdvDZb6TSyRXuNZVspP6d6DvNrPiqBHVUhpXeuUvi1W65gz1CAQdcdqayKLMmymWkqgUJsAf8JfDKESThnoun",
  "key22": "3qyQQCZKGKdJBtmyuSFBYoqgi3ymHWh97w6RPy6iWRKgyiukfaqTSt6n89ZBaNoNgHvSLAUdCJBnF7cr3Kfp17yd",
  "key23": "3yDVK88632N33pDckEmyKXwAEDicVw7bhfpkkCaDM7uh6WhdR9FnaFs9o74g4GCuRMeRyQqGfrKGQrDf4Md9k6XY",
  "key24": "5bgPuZpfQCtF2X6dwDaKk8thXrfqDrBpMMuEXhJe71RzeKYhw1MtDzAnMCRunqorLeqTnGw9W5ZZtKrmVTpnj7Mk",
  "key25": "ruhwdfhcGMc5Zy9j7SNKYZEmmzn1TU68CEMFgcKnvJo5JTeugaMJEaeigZsHn8FP7Ws3QEAVd8LX6bWtmbxpDee",
  "key26": "3HnPRJPJmMa8Mupy87AKTBPxCYerUiXCxK8aFeFHzNreELC1GF4avBJKqm7uwMEkVESniGBBEnGfFqo6KBC6KMTR",
  "key27": "5DbRYfUwtGbWd3C9xhmHroFm5tN3EJAKz8uTxAMjYCrkErDBGTNwGyb8nydpS4PUXK57CSTinNqoHfk233EEQ9Pd",
  "key28": "Vyxtb1eyMAPyzdNczAMbkWKwfAz5vCQDMq8gr5sq2cYehBdSULFSjEpALy9hXLY1CihWWjgMfsDdqSbQ9UwrJVY",
  "key29": "2yQVQYrgEQYDLmnLQPubLXwzeCD6WMDCjQXtt5oZGs8brunseJ4XPBeJt6o1v9anjpYqMfo4mjPjQ3mMSu2airfH"
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
