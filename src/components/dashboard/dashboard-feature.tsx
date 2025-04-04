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
    "3YtA3QMojAtjC8SHrt5WurxChPddQmYo3WCgwXtsb8wZnw6MbQw73MMLrRBKLtepBa5M8UxfuDHwTB3QyqHV6EkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FdKafA3HGypPvs6Ayng8k3C6rUcviEByJNX9Zdsy4gpMzq5LC9oFRA3BD1EhrMZXquJVeHpk9PcednSLpgavk3B",
  "key1": "4dB5HKiQA56QRbzLjwQT4zxpCwujuzrLaM4Yx8ma9uB1fzkeAwNMNLjbJjx8xntczHZmQosw5BrQzrkdPqfU8QzE",
  "key2": "3PkACnHvm8kZNMyfmCw4Hrympd5i6NLmno4ts6T75LMUfYKKRr4bMxFTDqRdAkBAGhgwNzqeQsGJGMHvgYmMhJ6q",
  "key3": "rPatCMn4Gu5WGPWaHteSsYY5PW397Pjo1dxUopZFMS3r5vzBEP3qNBYCuER1Ant6Q8R4mEjFCRmuuaB794hfGvi",
  "key4": "4Woun21cmVbeuKi15LBhsNvQXczvQXqDL1Yp8V3HKcVrLLZ2Y1CLCa2vcLQgPTJGBUzYCMfBYEqq25oAZxUNk11V",
  "key5": "2CdvnAVmAKs72kaB1ckRDPH1HJ2q6QeEhaMftjVFSEy7sjPFTs55has8Huu7d77wUw2bCKXY1WEf353xUZQM5x8x",
  "key6": "2FR3hzkALg4i8f7hRrJzPadk2jZtxVuTecZ3NGvAxtrE6BWBtJ61FJtFtJcDkVr11YknvjMm82yV4gnDHkmNS8ti",
  "key7": "5wV5wY1oKcCfLNiRXD9K9x5Hc4AWoV9rjEe6HEY5F6C8tJ8NsjCjvPfxR1B9M7rD1UMFNHoPTjc9BSur1eCNwUCd",
  "key8": "4Wzy6KXmKcecVEh1z12a4zZLCAtR972mP74JxrKNkwk5cXfnDra9bh8XqgnuQyLxMBn1Pa8AemxeC7V3vJngRr4s",
  "key9": "9xJxmv6bLU8PgKVBANnf69XvUeTDgHxxDPSR16xF1FnDDsGS5HZx9bQCeWqDN5xomZuz1U2RtJuJHQzFyzo2cLD",
  "key10": "51cgZ1Y7RquUV3oWtv4wjfsrg7atEg36jUkJaZdCva5XvCqzKVzHPA1cF2pHAnZq53QeExttBaBYuHRPSevW7b7o",
  "key11": "2F4ETAeFZExPoP6G8C9iaLwc2HY1bgb3ToVy6jSwhafdGAwcnpz3ADdXBWikXMvRceRk5VzkELGQ8Nm2ZVSYT9Zx",
  "key12": "62BpNSGqws1m2y3sFBweqVaqWgZDaRQuLzHXJ9P7jjFc3Z4JUpsdHCH5B9rQjesahda54xMUHfAz5Q9qo6twJPUz",
  "key13": "dQucBNvJ4Zo7Qc3TmmH4rT7MpGsu15uF7bVcKhyQ5kDAsS3aCQR1mr7hSeZ7WZ7MNohsfn9gmX6NakqfwxwWYWD",
  "key14": "2XCRs8Bf7H6K1woZ5dWbvR4bTd7QCmtyaoEN47N6i3X5rk956Z8QDcErQ1barEdfZThhCef8QoxyuRTfexiDjjCd",
  "key15": "2yNVHRXYNYkutWnJoxSx9HXNMGFDhibqtqUJ3pCaET643xEHLjmKks7W7xzkkkiDJPtuKKEcPyg4jX5DVgN5UNFh",
  "key16": "atNZJC84t5yBEpfTKLqD8drXMueFemDuQLNQdJ7FbWJrztAg5s2jm2UCEndaE5uiWqPcFzAYwP6KNk4QRKVsB9c",
  "key17": "4tCv51Pjr8dqDxk1VVH8iUMJLF5jwnBQbrYgkrpcJTBSh4tjMMoNGHuJyRzFGQCXtS51o7fkQgJTQAbrmQYQjQ8c",
  "key18": "54ZmWwXh6QNAdP5Hgudqxxwazt5615uDiH8HKtEQ5rZg5di9H7CUWZeRBENL1hzbQAQb8eVgvqccRPoVW1phK6bB",
  "key19": "3CnetfSuZVn5byh8mrAucJypPhzFPFukEvg4SddsuD9KV6qmYKv1UJnqyXfPmy22s1kV9b3YHEhDWCZejBK8xZfS",
  "key20": "3tWEhz5RKuEdzRQ93nMh4fEfowAUiZq3UiAbpnYP3bMxZhoWLEJgkGPTF9AMwLby8jctKDDVUSeRBBWzVERfV7Qf",
  "key21": "4rJ6MQF7QNbsfHpMsNQWrY3qYnTW7xzQS7k5c42ZTCaJKTjvCXc4m4P9zu1Bdc6w2KomfCnbgmKCSGP695hfWF2E",
  "key22": "4ZAcXvJCi85i4o7FSiNvwYFdz1w4yoeL47WET7hywzz9As3PiRuVHVUrbWbrhJJkRrpqDJ9CwNpgXWFfh3Bf5Rc2",
  "key23": "2R1yWgPFjmVvVy4NMwPCgoombiDfKXfgEMgYRANoKTLSfU8vgkj7SRUG8i1ByobeyniP9PQyKEdZAaxhgGE9bfZx",
  "key24": "2kFixE4bAqTW6UGWGoPL2ajpepf8y28qdgQ8TLr1yXWc1GYe5HK8sVU96g2kix72pz2gun7otw4YWkoikhLHfDtY",
  "key25": "jE7UCeJZwV63cA6GXA65eDNWiB9bdMzpqHx9nCGy9WLFNZxySsNcPrBNwxCZLkHgH7wcNrkCakNd6UX9P1yUjBU",
  "key26": "3VbrLusqHrCJwxYNsnyrTSSqUQJa3cQVHPHRq4X5zEBAHiJ4MzBiqMBQBMWnbQZ4sTpazrSfbWaoJmbmbaqGVFqD",
  "key27": "5b5oYMjurmfRYWnx6o1Sjak7VewTM9FYmZiYZ7M11zrdS4TRBBrK4xKemrUat4ajv7xj81BzNmLQsgAsVroEkMvs"
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
