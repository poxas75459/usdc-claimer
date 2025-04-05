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
    "2MmW1iURYp9Sf8xhd8GAFjMJrD9kZZ6aYCTp7CGCJ3gSRjqpr28wiTE1vf2T7oFDC9GgNxMUQFgRNfRZZP5TMTaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4swAYoTUJTgksbBfLok44S7smSjE426teuLtF2pqm76dSqUNXnpcDcc4pBddom7tujPE8HYj2zc8n5mtW6M7EcM1",
  "key1": "z5YmwdhUQoyzxz8zfLeGF2L6wyPv7Yixwh378rVDqkL6vC14S66Xgn5qzZwgbK4o8BfKdTCXdjS6DxBCKSMPDh6",
  "key2": "2Re62MTTvs8h54SBeHzEitBKABiHJVZjzBcMSze9UFF9dHRHDZpJtnFxNZ4EMB2MiiXZR1zKj69Fuj6XGFztvcQY",
  "key3": "3H2Jwf8S2jNTFQ4m7obyjRi4vZsK4YfKBhgRZFkM8iEz9u1VQo2yEGrEgoCWkEQWRnV7WiVPUZemnbHipsEFgYeR",
  "key4": "23p98fVwnYvYQRvVjBpNu98GFko7dB5SAp55jubbfYmBeLAJ75185k4Ri454s2ae5Q8jwNpSbZ9gNSZeqyGm5G5n",
  "key5": "3stEAhc8LquRX1yaDtZzg4a2Jicg5afLBWcyx31Zvw32EjZdkSmPxZ7L5WtF4S4dh7yaqMsD3ATcPk3Aqk8d8SSd",
  "key6": "5iKYGaj3sdNQLSfv8SkepiYcAWwgJc2oPKTRNweFftDGSHr2vuWB3sHgDeTsceRuZkihX79qWVxj6m5KB4dqX6cC",
  "key7": "3DeUZ2mWYqjiLNaY2SiJzMyWABEJMrKNvwERB93whWqDvH68CvJPrFkusRXhJrfnDeizAwMBDKMeCh5xHZphye1E",
  "key8": "5uAprb8GrzaHjvAuuZidTo58N9L1dLLEEynNa8SYAGsWPyiuwZyHCWYqkbe172FWbK6uJik3uRse9ayayfqU5nJv",
  "key9": "2qmzfdPfZ4Kkr51j8DYSn8UdCq8x931ccEyn6wzofS9NrQ3c4PpAc1dCGYmGNkVv6tPgsgHi8DCs1nc4fTiFUQrZ",
  "key10": "3pmrKRgDj5kng4nmSzbd3N2gcAgj4o7BsZsQo9qTw9WHXkLrrH3mZbecrra7FZaLZZfpbcMD9T8vAXLRgoEoRfGH",
  "key11": "3YAzkPnaRXCTiaKb3rTRkvx7sw1MAtkKzXqD5fzVWrvn1XgzP7rzzKqUJYtNoQgN56hSGgCu5RzvuTNzkJqJedyA",
  "key12": "5uUtCNB277whXN7joUVmhCE7qcHQsJKhJybgEAVhgpFwr9sCUYB7SinfCrtChSrJWBuyh9ysNsrrz2EQxySMEE8U",
  "key13": "39EBMsby7WwmwCwco5EKSAGSpqfE1aC3AcPg7WswBMxeXkQdjYP2rUEntAZwCeJv2kt6NZEn74mAd4A7uYc1xUdz",
  "key14": "3ZDdNhEzw7eePy8ABVoqTZ6GXVc2Xzk3inUSNcfu8pjRey12TmxD4bhTkhpjDo4EJk4ZcUS9eDn18u43WsNb8UhM",
  "key15": "3XSV7h2cJDbh2nkX9fxM7WqapXMoYe7HdUakPj83hTticZVHSxCUtpoZyChxNL4BL9H9BiQrbrxBfrM5em3hiKGu",
  "key16": "2Y5fyPb8iM8xKwPEr8Br1Kk9SzqBMi8wgJWBKgrfYcg8wcpnzLQEw16bv4CoG8NEJpQcHC9YtS17gpAopKXNY2x7",
  "key17": "5JqCAKCmbP7wEYCJ7Ah7s1fMZDzgSzE4E7dTk4nQWyNvuFDACa9uGLrZ6cLAxfkQ2pLi6XmZ35J1NUHDrv8B9ew3",
  "key18": "LBqRJzMyWGRBAgz4NaYq869SDHPDL8MJMb3hbKyJuFGX618HuWtUDjq2yLe4MWctJdmKPrrugragP9XvcwNjvcW",
  "key19": "5yPihDMm6sBTCFxi8Tt5HZoFJWJothPsZUYmQpbebZKQHcu5G54W88XTMVwo7zJtPDaS1E3TUiVuJmvrgk9cYUvj",
  "key20": "8PzSs7bYZd9vZw333GJx164ZwuZjoEaYY7mfVviBgSuwuku54JX2N681ow1FCQe5wY9kgmMTrDiAkEzS1hvGgYU",
  "key21": "2wz1a3NZV3GAdfXXyRxdPACpwiNcjxo8589BAa9JKBcag7wLRP9v51USDJ9U4yeRMoKzVmxuvya7FfRuHH5xTD7m",
  "key22": "2J9HXkgUCdZvy6dYVjYb9zGoR5zVq4jgwQnWWmTojMqpeVKtRCPje63MD7TzNvfqh1W1QzhYhiy5TTPAk9DqMa1a",
  "key23": "4u2xiwkWcsWHGdo3CEtgPACaW4vnRKr59RJomHeFJ57292bixHA7PpP9UrrAcKC6MNwYucR3DE8e9xfnBkBwe4Wg",
  "key24": "iJq3owdqjuyShihMsHx4qf14ffQSGSWQ5QqwBX6HMRLvxdWuYDNomib8Wrb6VR4L3g67KQSD2zUjqnbDAsnNSrW",
  "key25": "5HcNUG56ZddRtmEySEuJAeJR89rjwGK6v1pD8ekHb3b4rCVfnDPjEBqHEjgDYD4X6hhwJzjHRcDWAiHZ5V1ei8Nr",
  "key26": "4Q4f3uLVSvYNBf2Ya8qjtnA6rnkVNUUePxHE8w4HzgvrwTWeMDp5f2Pagsm3xJT99UAM9JQDdUJ7YgsXb276dYYq",
  "key27": "P1vgpDFPa2w1YXd2NWMhKpGi4iNNF6ywcFKU2io59PNcVbVpfe3jHFvDiwBpY97474KyE9kh2joY5eMqx3REiBT",
  "key28": "4d4sCNquVyKqzLvc5LiLwiW4yUceSbXx8XurRvg2KxCvLvhf2namEPgVScKmFAGMLu5A8TRAWKV4pfqxLCLP4qrw"
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
