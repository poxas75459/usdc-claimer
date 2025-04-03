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
    "29haDdTEdQ5NhE477cG6H3J4EniZs3s59itdT8GxRFwpV71eLCSqXAK59VRwXcNCQdc6zZTWtQSoogVJmuAutAVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g9DdbpPpemw8n4s8S2wSqYTo8cyZnkdAGVJ5bzCKHzzycTeDdbxdJcdzJjbyQsR2695E4mwWe1PYNZb5FUgSw87",
  "key1": "4X85sJMtSYNCEj59WDtEZHBrLzpqSohm4UhRm7ai2cvqmmc25VHjRcmtEh3GPWYZB12RSxgXTFeHSixwkLGmF2wa",
  "key2": "3AFfHkPjcx24ZKw9SrixtuRZFw9VH6AVoEBWcKw3FSuLymmpHuB3ZcaPvJH9WgyeQPqVRk3m3ntTEVawNAtJaKHn",
  "key3": "3AkZ4ea3AE57FP1BdLHix385gxYycPshRCdPCtAkkznEAhAiTgajbmku2fRBrrVeCgAwt2d6ZwZfsXnYDoaDdVCC",
  "key4": "mH1JxGYJdenNN1R8GyQF5ttJm65d9RrfgeLu1aTJFqakbGxVAWW2XTiDBAQ6ec6YScesPLFfyKdyxFQ5V5WAvUx",
  "key5": "2EXFpdq4YfsZ1hBEFV5SC4ne3uRLkv4gPBQZNkGERa69z4cLf7VbJJzo9EnnRWEQA7VLoVDqTrxRVMCaAu9om7qr",
  "key6": "H8iPvm1SLyizEjSmM1wh7jXoswjsFgN2KZCwgvTmMihjrXdty1bYxRZvPgwZQ4Ty9bjNv136y8j2gMt25rKtmZx",
  "key7": "2scEuk1irj5PdNbx9Guh5W4p7yDT65YVtxnjEYfV6tgR6WUvJBe2QXpVkKWFkWwp2a1easyJv4Uw2bapDuNwRFH6",
  "key8": "364ijqsrq96YEhnM6okseukENGby1HjAMmD8UqbiQXVbKi8QNGagcubifdGSYB74c9JNncZ79jqz3jqRbCisqDjW",
  "key9": "5edXBt7C76Y3gWwPQK8z9zdM7ptziPFZqNBMmypPkuyGd3MBXLggiPUSRha17kV4tGyegxrR6ZEZYjgUQ61NNaeu",
  "key10": "TvT7xPF9g6TUMa9FVkkSekmmMTW3XVeJsyWtnnZRZtfGXYBNy3dnEZJjtN6jyZjGb48SNp9u9SdxMQonUwCuLND",
  "key11": "2wV46N95e37BbZpu5UU79eZJo4j2jNTPXAMDVhSgG6K8Gvyr4e8AX9sdoccyhzxmogzFSrwuy6jfegVbWALzNo1y",
  "key12": "J9nYGaCSnorfkYsANPuah828aVqno4HgnN6nE57yDc5Du26RaiFjVRDePBkeJzr6hLBwQSCJvJYF52ZwotWNybt",
  "key13": "4D8reAjiQH9aRDY31VwDktWtwTWKVmx2SeXpeEA7tVEm19ZGS5kLw93xGPBTNSivQEqYrNEzL3rzQSpFrMHW9eYL",
  "key14": "2sWDSCoQsp2A8q2t8XrkTdoGyPcH36jFypP1TYkbUS7sdj2vniMv8jugrKzMJEY8njV979B2knJZ6vPxJ7GhY6ry",
  "key15": "5AofWzLmN3ueUExDuiJM3y7PvVhpHQFJyaquvmn29TNXLuGQ144EHXLzvNXnX5Ga6cqkhqrywWivhuom1SxxUfoL",
  "key16": "hpTHsbEH96fnZko7tBBd3HjXu9ra2FEpwgy9WdD4A8odoJcZUrYrta5VNbjTwsFjSf8UzTRGifEuVaamBfRBdjk",
  "key17": "3DPnBnV1vbMpLioer92vk7aB819sTC78VJge6LWbgjJZyad5RnqXsYPRreUPSDgKFma6QKpjueo6S7XfHBaqkQ8R",
  "key18": "5BAvkAT888ryry8qVzjmHGVTqCNwRbsAySfbN3DqGtF4cu12a5Nah5fk1arcwRaHJq59VrLg9HAxszUMbbKakSF4",
  "key19": "5juLVMzzeUTb9Sd3K1p59PKpVjaVRR4rcNcEMmikC7F8d4vKHpqKnZdXy6XBVqANfNDWcxaVVBzYikpWHm7iVpX1",
  "key20": "2Z58as7uBP4RwwX84a9ShzZMueWfrnt4CCXz7uUvWB5vNQK477Fu2XVgfWnvyKUSe2n2NCgNt12TM5fMNvSScB8h",
  "key21": "3ywUB5ZwVL89W6wCzZDCPy53N9KtS3mij6MYH6y8WpwwLrTGmqzHiPUmRFZinyTovmMbFCzbHYKD4YhpTF8gXtqW",
  "key22": "5PCmFJM76XnTqiDtkeQSCFgcYws6nK9VpbRp3fSszndvXhbMT8BTNKCh5CeRxnoKRA1iNw8dvRmXLeC3h3oyW5Ec",
  "key23": "3ZBXCDjEYx6MpAmakL7rvMKuxGsAzcAkAaaKj3kEUbwhdgQg53EwF7gJFj8FCZzLK1iQvwmyGfvSbN5sk8pwv2we",
  "key24": "29vRQLJDVh2cCtL1JbQV7UqagcMroyPfdx2Nu2cfRJVrPj4uFGNaKdoFcuMrHsCRRZdQioWTUiUWRjAvXMXYtq41",
  "key25": "4bbYkfsB7v3h7YmbHic1bQMNDXBB2kRbsoEBB6jJ63uBcyZVxETusEaZC5gMubHTG9c3ZXLbFPmkE9atDNnt2vvt",
  "key26": "2vPi9WuNe2SFFtRxtENAehZpDrgNLPFmhnobPSKDjH78sUepEA7kYToJeV5NiHReQN59Nf72eVUZsyiNQWK8EWFr",
  "key27": "ewWHix17NyTXH1GNJUXRFFSeRgbgWx9zAf69i5Q3rubJusd2qH3iJ4ttxY8piTqxSuW5xbN91Z5fdKgQVomZske",
  "key28": "2rqrmxVHKgCV9hAtPTbSJ3mjnLwBvS36abxb7kapvCHGHeVT6ZWG9x8r31ZRZS1WVwPTdvzkXy6KqRwrwuKGChze",
  "key29": "wyY6uBC5XfpTcnv1Dg99G57aA7sRBrHtLwJtcpHiFNHB7cZxcvkBkuxRBiNgAim77h51drBrrtsy9iJag81cU3m",
  "key30": "dFXUSzYvu4ikb41eMvCyoLXjvRkpXkBTkjakrchpvHhCd55vt9ucoxQ6NTPuC7gLPwiaM84FsM5qmyzUFGycZdB",
  "key31": "3W3XsjMa8UFYLwZfYCBU9nm13HuFLk7SK7gyfQXwhdb6tcLZKBa69DdKf3VaLK5eRcaZ4Ewm2nwn8LdfGS3ZvBNK",
  "key32": "5g6fVm3TSskPLwRZxSjjNhSGtqNtuaKAAVkaCYCXKzvoFS6Xgp48dj69qz5srtgJMovsQ6BrMsmeMt19zYyjzyTa"
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
