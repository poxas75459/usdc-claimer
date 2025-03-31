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
    "2Dt8LuT2tYsZdDbF9FTRnmnKm6ThiywkwtDQqqvE6w6Qm8KAXCWxRpxQseftTDWtx5DNbJbqK1CZtAnaLck7Ga8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WgCmYEH8NYYJDkdLPMAebieBv8eWDrQ7spRkSKMz9jNxkAXkKWfJxNz5oiv9BA1dbGnKHZrkjJLQCdizskrbtn1",
  "key1": "z7eSuYtHvs6KXsHbVMvbiRk4sh8QKrbzqQujbEV22y9amX8sMRAoPy8bY6zMq3PWRPJR79PCCYCEjApnQrMpEBT",
  "key2": "3yNwr6HSxS14h3WKFcpYzpQoLNwBjz6s1K25tiLDRBM4h8CRQzWqxzSyGH6uk5fJf7edGXk83Fwa81FSfaYVSUBP",
  "key3": "3rUDQhbW2qdfydUnT6FtaS5zJcia8FNc19HfLy2vy3e4MyXGWdNucCqQmUyz6bbknuk7STiDDixoQmMpJPYsfEct",
  "key4": "2zwm5evSAGzpvVRjYFFjVkGijQqJYcTYK4vUGqFyji79kxNM47RXnXzeRzHL3wtXfW8LM7Hk8FUhzX33oM1VTvGg",
  "key5": "g364YMb5FfZXByzR1ti9JTnwEao3xG71LYwiLTQTWeGd5XbUqvhifZWCgk3xeLf2oroNYxXvWQFA4qc7UEiD431",
  "key6": "4e2rtqTPpuoURvZL6guMR9uRxS36JmzLKw98VKqRL7yrJSj6LXJhGoqicUpnywkmoYhdPdZos3RvoVQEWMEfPCkE",
  "key7": "2uSniNKc1EYwpRfGGgghcsQcFXVLCXVtTFZic4GNdJH6TXMwkRDH3XqJXsif7hrg663QLHSyRRe87wWMQCZzZ2oS",
  "key8": "5tj59Mv4zANpFQzFNk2392MD87oUNjVAYas8LjvZ1YGrvsWJ1Dtqr49RPp3K4pJU5zKbv1sqaUteUPkcj9Fgi6SP",
  "key9": "4rMKj7prjK4E4WTvAfKhNRo68wrm2ca7umwcPXe2UUKoGHFES7AmQWhSYVSPPNU84cSSivAPKaDLWRtiBveJxGjP",
  "key10": "5gEDpqAsx2XPvuJfnTzqn2XsA1yFhxJdqzY7o7tfqVugtmg5vpXjFCToNXwH8tKRSqkpDut8UpAXF3JLUYecVd5",
  "key11": "BuhokZxgsTw38TS8eP2H1KqWf2wmnUcFZHrVUA4s2NqSoFioakQjy9Fnd449gn32jYdr1X8BQo57vG4PwYRhkYY",
  "key12": "Ua1pEEA9q53B2Beu2wXgAtfJQiA4nMQWLUshvHsmc1tCW2LzS4U4tktMXSfwkWUz5gUJRhxTFAJQ7qixBZuaLiM",
  "key13": "5ZNVj3pxT9PXeQV9jRE2p9w9pa6NQbWezyFU8b5XQvMFruJMZ2q4M9D5rGp4VQNi8pvMMqC34UbkRToPqpdkLfEu",
  "key14": "jXXS72zqooNcgFpSdA3C1T9jwcMH3YB4UvBTYzA73y5ENuKWjbu15SDoWiyBt3Uj9uGXMbNotycuhAjW85EQDqC",
  "key15": "SThBaVET3VJvENVuJnXm6jkK5up8xWBYfuHDAsWTrn1Jukj2z6Ka9NxbtL2jfe8q5jF9RgaJVTZpyYkv2wPEUmu",
  "key16": "4bMUntYjYsqXrGu6tivwGgwufBc57dRMEsZLMRJVYW81EKfgxz2uish9oBNpwp64ZfGD3DHHAJDfphwe5ywQC9PC",
  "key17": "5t7qYGekjDgULaigNfJ24vTrDvh4tak3HspHXH4vXXiRgRGEcQKK5DPRTZP2oQF7AopBTLUFR8QuAfVy1UVm617D",
  "key18": "2Ta6qEkZ7SpgEvCX1vybhrGPQbRYJVxDJcZLznahSiYyFcMPN9xdfkMqXZGzaRhqj2C9yCf7SHdVBy17C144QkL9",
  "key19": "m52nxDPby8vfU4k4VkN8fKatye3qQVVceUenjcQfx2tcbJW6TNBkMaWbNNqkhjBeE2wMzZcaBZCYVhrkQmJDJqN",
  "key20": "5YPtqWzugF7V4f682fbdJpbVFcEKSdHFeVYdBR33ZvCzcegq6XzHdcsdkDfut9VaqQfdDiYtZQLPJx2ysCivn6Rc",
  "key21": "z2DZ91wvjEaqmz5gQaACW27i3PBqub7qhQPBbSjL45ikZuoQeuMFaSJyeWsZTGCc39qDjyEqHDM43E4cemqtJ7h",
  "key22": "33rzi3cixVRV1RzgnXauKM1Hh2H1EUpCdUcauYNPVYTh4A349cRSEx7g7gNwpGUEufv6rKytWkatZu6EKeuvJn79",
  "key23": "5REBVBDGW6fvytrHRWkETAPTBTR6PufSWh44genoAVLCMjMYStqvT1jbQmfyGf9xjYNV4BG1tEwhtojxC44twEnX",
  "key24": "AjTTu5JLdhH43TCFeZ4QgWEC4hisH3wrHNUi4qS5mv7uQPhbD3SX5xRCRv9qVDNEwLXJvJwRBsPBqvoAagTVE7K",
  "key25": "4whVSWRtWJ94LrW8iRmuX7G8ToaP17FPWZoj3pRYHq6mf4EgW9KEMp5tQ36MkqzhoivUeKvjSApR6Zb388xKpWqN",
  "key26": "5fBC5mcL1BQKp2gK1XxWmZhsCtLWesJbgCrwrnXmwtMncqanAN4WALbGfroxzmUJJsXxgTakhnWMkDob9UVy48h2",
  "key27": "23rCGCk1Fa8E6M3ErfPD6zHzj2PeKxEGTPpnf3Bdcs47dcjCGroFiidYhMmUfFirhvbiVY9CAGQZbq64XKytq1kL",
  "key28": "onmKrktH1Pxry9r2zXKd1kZE86diZQw6w2uCjamvUJ2p3sk88DkN7BfH5hXp7adUoYWk4CNAfvBMdQ1imx6GQxk",
  "key29": "9DmR5RAsoqJBxVn3tqufNWFwCF7h65DNxTrEwwagW9ds1wtJhBPe9RdFF3YWcnzhCr11VxXQ4oGudqSyNByhKr2",
  "key30": "3M2PnCFaHaiyY5pbmNuAnmrsGYnfvGjG7XpAcWoUDTjwAeC2aXLjReyBhdqDBgvZJqfG3dWdDTrjSmztwPcCo4vx",
  "key31": "3d5xfsuvTe5TnLGYDhrs1YyotAf52rckruQBJpSdrtgUK9xhnaQDfKybCHhoMB4fYoBAgXMxBAdkmdrWGdKrrNaJ",
  "key32": "2eLb4h22tUKsfzsB3fdfrkU1zGWEbGQTGnwT2gUz3mcAUsJpuPQSzHPx9x9E5yycZ9bgezagpPw44RxsvPSSuhfd",
  "key33": "35UnX3H7VniCBxdBX2XKbxUEPkqvDU3RWLgDtNyN7XTejg2MjT3zQJnFUUYYU4LGGjYsCVUrog28AjHu562BjJVn",
  "key34": "5uDJXc1cUjgYkEMXQ72YtUQfpJoZbDPv8nvNyQTsTkiUESB2KPV18kNuXrX6QkttCU7BjqQfqiDKv73kZWmmkExV"
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
