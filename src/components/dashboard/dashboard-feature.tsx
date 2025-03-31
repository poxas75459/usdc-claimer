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
    "5FfStUfBRcq57Ki6dy5YjWtuLxMs4SffrAK4d3XQgJAFiXeE3dULi7ViWNs8f8hgALQHLYh8TBx4pZrXHu3RJHPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DuQSHGUPDsyS4qQSdqM7fq8rxd2oxkEB9K6iFLdvJpna66dUeZ2kqkfyGc5cjrQACmxXyjxJ1vfUG7kHfxiXPxS",
  "key1": "YRHazUbhAPHCWsNh77HFSmf2231DeumwnbRzixTm2mG5NnxyeXsAS2a28ky3e19iLDEcMewxjjDqEQMoyq1TBcJ",
  "key2": "34ynvsKAFmkw8rATCfofywTmmZUdFRQUaR86aWucgoJ7sVp6ahzehu3XAd84SX11xfexQbYEr3XH1VdDFri8eggQ",
  "key3": "5ohXHUd2VpLSPgMdrsaTMJykDCLnpX8sq3QYLJod8WKseqJWQiJq7CFAdvNBdReNVHnGCGU7n9kZFZPASNUT5nK",
  "key4": "5Ufqdi4Jif1kWSVKGuPyy9w4x5fVVLRvTS5oH2En5kZPtf6fKcGB6rdcWcPT8xERWqfKnPLLUG155ZXBq7rJtLdo",
  "key5": "2KAoMfgL3ryfE1FiePapxbhtx4LVXBB4FUaGUDbQ6jKHqUXz8cbx3YcTPTWvsQF8BrziV9qiTq9exFd66d4Di9nf",
  "key6": "2vg4Cnk1gF8UHTykVxdbHqHySSFagqj2FFB42qTn1KSiizp2BfdoquiyKNrCcQTW7cZNR76KerVKiCj81bg764GG",
  "key7": "3sE5PRypasZNw1hXsrYvgsyXzaZBTJKt5y67dooJvr3hqpkGFqTog9EqmKreTL6KwqEJX8GNXBTrcjiPEJRi4aKj",
  "key8": "kyTWbyyitrkhBB5Ffo9oUx1kmzyE7aUr4T2n9nNWCUPMWpLvpwFn5BeTiLVeBQz26XT7Te7biuQhgW6UZKkn34j",
  "key9": "yxwofK4dmGxECYU22thuKQQfBSrKN7T9AuMzK7Z5xgchfoWwuSefagCbKZB8taSJJy9m76pju79Sm6xF7iCEXfK",
  "key10": "5ikrA1yR5rirpXWLBeFBpUFtdyco8Jojv2kVzVaz1ueeBZgCtKj7hk99xqoke7FGpMLhLgGxKGfGBTQ6hEWsyydi",
  "key11": "5cVMmScdPk2zzaCCgdVTRcr2wQCHnqrJj5xAZptvuH5Qhwd7tnGyaU6HHRf2CoKLqPgqEaNeyrqvUEPjSyF6Tft6",
  "key12": "2w2g1sQNdB4XWbXBHoMmqaragZh5houpqeeiZRyeTyA5G7ErLAyMtTySSc95uR9f4y3P7nYYA3rCSifuoTtoeJyM",
  "key13": "2yyRYsnpVDHzLDC9n3QDq8HtU4WJV29XxCmJwDMdvd1SoCqKCa4CNGLxiTkAfuZ1zshfDcKX481ARJ5HZCSsJP4F",
  "key14": "4McuFR46tg9CdXSSnVmzv6doNHNEd4RzViVJWm6XHg8BsXjXNpGmgwsUEcwR1HRhzH4WhQJ9k61QVe4o7NynXN1j",
  "key15": "1KraqECvACk7ABQzWt2DrDqvbCZ6ZxY7Nhhy6876uXz1XtyLULWCQBofjBnkNpxP5oUvjyj1b2GLWa7W7kt7q8c",
  "key16": "2H6pL4coaSg7ASSKorMgsDumesmopHq27PNCpAKrjWZPYDZUaKSvp3cpxg9BmcmQsZ84HRWeJDuY8rSeFdNWEWpf",
  "key17": "4oNFwzpHL3EjPX3J7ddNW9t5Q9XZ9CtpNT7bGWf3HEykU6bSrGB46ajp6CcEsQ6vPNMYY4X4avefKaHep8EmvB1n",
  "key18": "9xdaX28AoUpd4vyeGToEK7kFaMkbxnQzKC3qSq8un93kTWraoXnEkvXD9bAftwdTvfewsyjHYFdRrytsYELqRzM",
  "key19": "4mYKxePWxqtCvAZChc5HMenmkgj76YEXtf798SQH4hq2NmFwBWgiZPzJx7DJSpCM1u4UncRv4gAjrr6tL8y5s9v4",
  "key20": "3hoVQbkZUDF7g777HKXvd6LZHaxiCLSjXHfECrMGDZY9qGjKJ7ZYtmQJxpx6JR3Ye7z8im99fLbqmhEmpv6pKpaP",
  "key21": "5Aj9dWDgSSWVfoZsk5PFrdv622AQFysURmjqoeErhRwnWAiatE4w4S5jkwgc5XmEnvNh6Pg7Ro8tDsuGw5vtn7j8",
  "key22": "3Em8Pg2TTweZpsQcvKSv7nzNj4Q3GfXaogPMCy1vBc2Ujfy7kU7AznuiGARotrADaypbe9UctoipF3cohkhmCrtg",
  "key23": "5Qc1CWj6zNSg1WQLiFQ8mPsqG4kULkqhHwaLRrSzwFgmgFTf89oK38DRSP6Afb8UutvckRMMany6KQwEZ7e8DbLX",
  "key24": "Yqi2xxr4uKPVkw7WtNTmgYBGv15RcA2Gc56zm6MoEyu7wD3oYWPcFey98SYyQ3bfccYwgXb2BR9abFKyLvo7mrB",
  "key25": "nKTPPyrH35Rsvmt3MQ7DeDgKcUPkMv5P5fSTSWckgswPgQhdzQiorT3imgLJrjQGkB1xrKk2dBJBMuMaQTKBXaX",
  "key26": "2qM5eBb284Sk7oN7ZgK37UfEGKSJtJviy4i6e74jwetrusHeucAzXMhaDKyLzjcqXoh1Fbnb2KKCV26aV85FA3Mg",
  "key27": "5bBvbKj8wQuw2A9JMrHSgKwHKTfvEE1A5mYEnTUAPqqszDLDuVxKYQVw7HoDyXM3K8C39fBkoQUZLDSugNduAre2",
  "key28": "3Bc8UiYPktxooTwwyKjgGgzGx9XEV1WMjrnvPSH5nPuFE2fTJhRaigLSt1GWXExuqFjfgqgaQE4g3n8QoPF2KJ5c",
  "key29": "45qFgCdgTKcgZismvZf8fNJTXaAJXHpj9yq5Jva3XmG6cm4fxiYjW8ybrPczsnvvAX21ieP19MYMJCN21jiEpufg",
  "key30": "365apvGDtQtni2UnaSwt7KaG4QQCZn5F1WoaGDyUDZkyy37i6c3Y8ujHgfdg3N4uffgG4kjec8B7gLDh9KDrmQCQ",
  "key31": "5GSaeS8xbaBEHdvRAV1XXkxV6PyHrP43N6LwoSXWNZNFPdjM77fXASdBwEcU2ocsyhZ8WzFk6AeSJeHAJZSNMcB8",
  "key32": "5PypQTx7RChQwaCreocUCGgqJZg3htaT7h6SPbRTSgv9TG2KQsgD3JBeaxEhJA7RSAa1ug81TN15hMRv6MVpF8Wz"
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
