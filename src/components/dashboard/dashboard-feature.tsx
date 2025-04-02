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
    "2ncB37fAfXH2aJiubUrqYGcpFZLHTi8oGLnkM7JpSi6h6iKP7BRGvGhoPNSXfcQMa2vc3iHKD7Ax3JbgYiftp3ME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ao84QcFNwNWTrVLqaSFmWakUuCScpDpVzd76uhgCkYVzTuFCaKfUP7KUfaMMW5k1naLjzk1bnZ1JJqpXMibim7h",
  "key1": "39wdmJouvhsjKvVSGRZy48G3NahUDgvhVHcCLP2FTHfDmvP51D73p8JuH7HMbx3KjJ54eofnjX4zTNC6fyowrAXp",
  "key2": "66NCEWNjcDWxrpqNrU283gEghdMi9TS34pKjMSYLULXaELeQRtyDbTgzQRnpXtQDj34MP3MZ18mX3JNM5w4TRrF",
  "key3": "2rTCh1ShccNT1qErWxTDBTmep6q968Z86phx4oY7m9cgCtymNKU9WsWPQbcevDxCKSnz5Uyk9NE9Z5qSj7mDtXtV",
  "key4": "2MfSpavrAb56nBpLxwaxcxbtBvr3c1dSLLv3xHqvWGTJ9Bk2RSV57iPUodaeSUaSVfzU2jzFAEqSNSXLbHonMuTN",
  "key5": "VchgE6Ut7EKyT1tHPKFp4L63NY1f9GYbDXnBdnukeqNiSzf8B8X2fxTWpvh8xRPeAY1cdsXbe8nQDy4abz5vRCP",
  "key6": "37GskQYXHAXwPMuavmUPGDDCqnCEyW4hDtK8gtrhLEdkdHjMovGucbvjZMpjSC8axHjZj6i7BahgYVnU4ViTZFWm",
  "key7": "5qwjmrp8ruWFDAJrMgwxTLVqgN2Dahiee2TZv4y1pod6aJ1B91PwouMpNUUiAP7AHYVo3GzAegfH11kQEEuN5tUF",
  "key8": "5tAqzZhsBZ7ZE3qDT8ypTJJnj3fktM2ybjkbS5b4d2w7NAk5sZ11BgedEBFqUZWhEJNUbD2VvxsViQrCiMETrfpQ",
  "key9": "2xyMtxAFqJC7fJw1DrGZyCJZRSFsq46fzQGmjr8ZPdt8iNuAHCr9fCDPcDbNoH8UvZEftdMFi7wiAEUVHrc3T5sf",
  "key10": "4kpfefxxZbdhcFizAaVBsYHqEJzU775MyjaHk9w9RvhcM7CGBZ2jgqvCL7VnSiuwEgph8958wqh2tgBpdTEibWnp",
  "key11": "65WyTiTrpnywAJ3Ja5KzhU9nQTdo6Se1bpikweTQFDUrzKnLTBSUAMgN8SkJBKdivxxLPStnaCLuzmXS943yC4i8",
  "key12": "3wPehJ7fi4hf5KrriTzBuNBp4hBLq1Gi8chsbn79CkVkjZfsQz8MgUXHbh74UJhE3vuSjmunsS527UQDxRfN9gmu",
  "key13": "4V7LLUbCXyrYMWQZkt1fZzxxsupt3scPYAUC3f6z74HysMnz7ekk46XTWLJUSeDz1HWdvhf8Ri3YnKvJPSXLX2bk",
  "key14": "2REieZJbjjUfr1fm2txTE1KqxiqsJtuXwpJXJU9jAqwfkU1uCHg5tauPhXvXLV3d6qQBcjUa7h1HLyBXwadhkUdX",
  "key15": "3NEGBsqbqvn5xmevvua9HkwnjmYcxLc5AtdGBFgCdep51eWki1BRJQWuQxvP5b1dkphcYTezAiYnJz1UN6wC2Au",
  "key16": "4xAFVrWr4zwdeU2cXf1frNyMM8acuRnCo4jFNMKakGVjYoXRWGmWx4txPNiTgXumSNPVCC1dX6dAD5H8AarKWAQW",
  "key17": "v1zBo9JUwUWoKQ2prVjUW8GkhUSJWGufMAVC6kq5qbxhnKVmiyun5DC6kyixiM8Z29g1pwbPkAGSBHHeYMgPqTT",
  "key18": "2KfjjZjd1dFhhsxsGqsddZWcriwojHsEyTHXdM6SdpW76EnQBS9ohQpVHZb1ifwWNVUBVZSFH4kp2zTua99kkPoj",
  "key19": "3tqnZoKw8EPsXRdgj3XymA7oUZ2kzM4hBHu94GpanYZ3xwdmGjh1CSrMJhSY2L8M1smdFiBVbNAYSjBy5v1ckSdN",
  "key20": "319DtiSBQ8iVbtXvP6mUECcTuZafYsUJMYsSAjv53ZmjySEQfj8Eb9NP1w7Mf7psMkkv2vAoUheR3npTTzzKC4Mz",
  "key21": "d7SywXpKjoL8Ro778V4PpKhJQpb9wYwW277kL7V3BG7DH3eXgqYe5UfEe2AcUAMvvQVnNLduEmMNG3mratYhig6",
  "key22": "2qNV74VwNtsc8SfE5UP3iCx3Ruq96AKDYuw2n49cTStkv9GaXwXmVz1HBNWjHJSvfeRn9AVX9ws2H6H6brfCS3wk",
  "key23": "5tdmuB5qFk2rtxT85Ngf4iZsUiexfb8eJZae3bTHq5yb4eAfgF8WTsiMnYvmMbQ6vwWpVF4k8xYRZPGp5roHowYp",
  "key24": "4hnAuufnmLRgGqjwEBT4ynKRd9d7Jt9p4vcR6QsHRZNZzh457cqR9WQKxHA7MfVQUSnxSZY6dzUVj4ihbT6386YG",
  "key25": "5f6oN6KTqNs6dvBGYD7r4KWeyUpQWbZncd8TqSR3L5sYKUzi5SY1gwTkT7fEryBmfsvvLK3QKk8tdqKKRHEyFUHa"
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
