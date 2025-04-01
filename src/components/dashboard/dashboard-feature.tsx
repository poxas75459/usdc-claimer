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
    "4bCFqEam6iBHsbHZh4rSfY5St1xQEoe9XoCZmx7q4AsGjtXnQfnxQgMfY26NjNnzbGAJbQg2xD3PweVJc7pzwpC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VfpizLv7mWskoAMeUzi3sUeqg4EJkWvhru1QLEAYVaZbry5ZcTZ31VHXZxozSZzdsJucGk3A2DjuCWkUGz81tH1",
  "key1": "49Kq3xdmJqGvvvnLQn4ee6qeEQhDYW9VkRywVgQYLtb3e6fG5Wky5nP3z8nRZwEco85KXJGxxCZq4urLGaT63V7g",
  "key2": "47vBVNKk3nSdoiRaVbCU28U1382Qeydeyk3QcSEHKP746GsYHdW9nUQCKSpQvkqyPRMJB6EAvpHR5JKXe8YmWiho",
  "key3": "4YN11LWhyByijM51aVdWzXsFapRNEMgg7wsRm3gEF4s6AHGVthYxHwnEZEjjBp6iRjVakbDBnSJBt2Bt9ELNGSsP",
  "key4": "3HJDoStcCuPB9iDNyu6NWUSSdB7ASoyx4QCaWgYYEsPa3YrJosUTuAmSKUTPGyKAZXoznwm4TrHoyQafQeF3Q1xb",
  "key5": "5yNg8pCNoYtkeB13eN9AjVZbLzQqxWF5CKRW8T2jYXJeXMCLzQxXiNNhMnMs2xkNbGKBBbaxzQie1hLJsaVnkUdn",
  "key6": "bCr9CYqs8dNZi9TwyRrrPSLmyGH8VPhkkUaG5TMesowuKEYHLHV2vN9MMF7QSqy3Z2mhcwsLQNtBHoMga9xZcTB",
  "key7": "5oki4hVPXcdz3keY51idvRwjdEkxxSYWiWBgCMzKSZVN9VupwiJ6DQ3faFsqCqzFZW6MaPgxzZ2t8uTjzzRLrAFd",
  "key8": "2RsPtt9j6CYkYh3ctXfKhzowbYmCH66pjjYXBNwbCFuQKtDqziD7AbgpsApKwc4yHyALw9LjeQoARq31wkQZANHR",
  "key9": "VG7QvzgR69xiPQtFRn3Mc2uNFNNuZL5nTpXLPEzey8zsWP1NiDDex121pEsXM4YeWpkWgYbYbokUcgGsm1hqtnq",
  "key10": "VXRQZZJ8yt1zieCJLBTCAcnaqHw5u7LTc7uWNsXD4Ws27dbcHRaxjhysutuWwCpe8XWt6vmZbwywchs4x2QQ75t",
  "key11": "2FmQDQAytMYpYwDN2PP9wALMyA551SR1tf5nBPyyc9Bb7UtsUxmd4vjfFQRJd6FATsnZTgag5BGTbHFqZ9n3oLwZ",
  "key12": "4wFSHJXpRTcSe1GBbkbV2qoS5NiE1mDGHBM9k29UbFRRA5coWSUWH4zZkckWNBqPiq5yLPyxBMxBcbK5HcWo66uR",
  "key13": "2fY1J5oCPGiJRcPHVs8iM7Mmaf1SXfjLTLLP8sArXe8ghH3CXzJkZDincfsjcmbLo7FRoE5vmwQ9qfXGE1hTtZH7",
  "key14": "3Vonyf1wVZupM4fHWaoTPTGS2KrtbsZA9jmCpnL7JN5BtEhg71XP597mok8udFRmJGaMMgeurHLeshm4eAqQAVUT",
  "key15": "2CLu8k1p3GsHySUpkSbgvauzt2uV64MjvMN7i8nJoeyArSeCnWfUMxx7SRj3D16ce5YXf8mukE82XAPgtE77KkG5",
  "key16": "5fwvjCqK5Xjrvhm58necLa29gPF7ScXfJepS59zR3y6p6f8Z8U5cMPoWWn4tzgEYvnGA58ouxCCmw8SfC5uMgzzv",
  "key17": "4kCbm96kW9PoCZPszRNmpxdEzU5NiZfnXJcpbw8osujsQcKV22txoAVxqLv3m59bmDCcdeXmFjWjiiSDngwJBtAQ",
  "key18": "49WM1A4H6f77C6pfp7RWZi8Lty1xBHP6C1Zwjp1jGRndwm4PekBL9RAg9ZgJW6S8bAP9HhSrDkjCvtSKxEZ9jFwi",
  "key19": "5ffijPqaHHrjM93nRQVnH8KbzcaAAisBkwdVBEd5iHa8xMW4uN4P3XrCnNEQ1wzCbBLyu5WY5GFuzxMMFYr3c7iz",
  "key20": "4cGVveB59nJNE5qcb2cbmdiy9tuCydGe7khFpHbZXjpQCKaBFVAUJCry6EzuY3S5car9Pdk3ZuQLnX5x4Jvk8UBX",
  "key21": "3qtzijMxpENUFTCCDkqxFZhmuD9Xgna89rxqNJ7Wz31Up5guixmL8smqBqZQy4LWgsUmK8DXSFums389Jktbj6Rw",
  "key22": "3gkv1d6GNET2Kd2KzkKaXStVe76nuLkrzaV3REPwubRCgSABMRqH84DCEdT94BkepgbcxobHUGFKZpZEtBHhyEyP",
  "key23": "4SvyzT7r4YuAdpk9kiew8fm4a3rwzGUMu1Xmm5QMNqiAwxddufMG5UNGuANereqpP3kQ5uZ7LnoeoXZp9mnyW8NA",
  "key24": "9CJ75kR1kpHXe39aGWYc2BjJ6KV2p4stxLxNazDmvDpj7UVafxWkMGdsXrWFy9vS87MQPDuxJfdUxjZLAPRzCrw",
  "key25": "zGmpdkPs4AZSvxPnpngk1iiVgpid8spw2oxAdjurd9P58WxtWpFTXT122Vm8GtoGMXpyDJFohdrD7jpfCmWrmGq",
  "key26": "5od4DJtVQUbNZquaA9FpooUEEQkpugUhmUKuH97KTg17jTBSzPGADGMquLWeEfpVwWniZ2fjvhuNcQDNLkbu5bjK",
  "key27": "66bXj9CM8efb1WMx8ratMa1enDiQjfk4LmP523gZrGRC4TU4huYFV3dMxX5vpXqJa78bG7UosoB81qnKoytpwRXK",
  "key28": "UUJnbnxuV1D1oBYxGdzYYU7zYiWAGsFdTBVJRMemG1v4ef4Lq5Cz2CkKRbnYgWcWkChsvh37Exc8AzZEBJHqvwQ",
  "key29": "2Em9wJbpGigErrCULhdjDmbdQD5rQM36FvJkJuRERMEvVFSo8Li6Mv6j8EDGetSiRwXvMk1y4WiyXJPw4AnSWv6Z",
  "key30": "3xHxFL1enSGKayqDXngNHUcNac8pyrtgxaapLiihHFy5DNuvHqWJRu9WGRoaD4stX6KpbQbbJZwrCrnMfb9kjeu6",
  "key31": "3Q3C5KJsHtJjW9NfN12ZDoetw2mykqUskZaezKVug9TYwQ6LEL9DMX4HDigaDQmskhbcJc11VdEgXbqqDGKAL6kY",
  "key32": "2A5KfJMD11AjgGwmiu3zyabM4SL8o4mAiEKt8tEJTmR5bWD3iNEQA9LHNHWhD1fsnakvpqaQUY7DkgfYYf26HUDb"
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
