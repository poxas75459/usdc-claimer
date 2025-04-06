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
    "3WSeKQVuvybKEw3Vvai2uicTPWT7B6UzVNwGihfry1EEiMdAVNjGS93rgxQ1yheMhTVTBHxaPCsnBAQnxm36nu9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31yDSmCUsC3E4CeaHw3ST3uydA1sJd1wA1e1VmifyjsTheTc7q3CpmQNsxqG8YqL2MZgkeDnTKmUr1RGRvpuNZ7C",
  "key1": "3mdfkN59aSPHv65DXwL8qJRzQ83JJC4h7LsRseRLvhadhgbHPS9NMHGqAVFjqJkYaAK9Q7sPNwV7i1ELfEXNN9SG",
  "key2": "54G8NSwR1mc6U72JhCs2TJme1fMgiHb4NV6LYmu1Wf81RYuJWFcBhFxcRTrqmqzixak5Zg2ucFBZ8Xj7CTvKnsqh",
  "key3": "br7YeJZXS8cZhsTTGQ9uxsPVKFQDxEaUASRf5BVwGCJwYiCXBFCcuFyUkGGwDbsgvcZCHrPmzzPAiq1BbJrEwGb",
  "key4": "2PigyGa3zux28c2vRAoQwh9qsg4Wrdm3s5bKVwtbyN3s21jxcLoKgFQrWumnEhMT5hY13AXrH2gP8zV5abGvLxR",
  "key5": "38f1jM89ZHpncZUZ5KF1tbZ6bbaXPMVdPgLVdpTnGdipYwWyycxyXefuENbxp7qegRvDj5FzV6icqsG6asaWZALp",
  "key6": "36baTbyTUZkjsdLtFsM9SfXVgEHQtx54U3jvv5UbqGuC6epjaPEuszQ76K3GQJgEEtGNvQdkEgtAcrHLbKieRvAJ",
  "key7": "vJbcuzWRxjjngN5fcNaUcU8ECbsAfbGZ96DETG2S1NNeUkugbzoSDavANrDdGehxUcW52GvqS18GjGWfeBxtiaU",
  "key8": "sss9JshQxnMJCvxcyP3ZPb4qkvtfTBMyHFBwUBZJN3WGupMCZsLmW8s48Cqtuz4NN8LJUiS4hHnMxpuNKbbDGoK",
  "key9": "yaDifEc4fCXQzi7fBpZsr4nvfkwdn8FthsUpvtcRosUZdbyGAMAG2nWGH1ajDtSv1c9APUwNhgnjPJeEfeBcxmD",
  "key10": "3MQsNHmvrXMidr5b6UbH7aW8TXhJJnKL1ppjyBvo9WPiqB3tHocrT5qDLizpMFonJ8DuNdYJRosc9xP1bYCDtrGh",
  "key11": "55gHH6JVdpE9muFJR4bG83QswFkMwaA2sWwtR9ouB659T88pThXyv37xrsbpBh4XyR1tXabuUQ9UnG6xvRM7krqn",
  "key12": "5bVUtUMTTTZ6mVi6dSftBQ2DVxiyrir7SptubrJEUqormobwJmrhZAUyfZxdJ7Ta1gwqMVc3svGBUKsoJhBVdq7N",
  "key13": "4kSJ28Hkzdbtq9Xb8ikU2niSPJfovJhiUCBrj7DPLtDxEVdTG5wNvQvnDwagBM3wnXiZ38ZjJ6D5fpuzNN8mSAJA",
  "key14": "47iXmE7yMJ93PY5pVoW7FgE8dR1qmMFHefPi81WoteZoycTTcLMzNierS2biFALMDEExSYpAT7LrQQSLngozCk7a",
  "key15": "5HroNUs8VVfd8fBDS8KFLLrQJJVoDDWT6WjfeWoVmU1bZv8drWxsU4UbxYcP7WchWLL2BjaQLRxuqmxVVD4WKVtk",
  "key16": "2hZ3W3ed9KWe83Lb7mpUTjATqh8AgCxS32dxqoroRBp5362o95F3AHwsWUs61yHw6XevhkKbb9QvWNwWGfze1KQK",
  "key17": "AZ9tXFPNmVJ5GEXKWKHkgX17QQ83XAdZTjw8QPWyoykoSyWvVrV7xeJkeZr9UjSV9XWK1nJkbF5V4DC8cmXUxyz",
  "key18": "5zVcRpDARkK6TCSavGge3P3Uo4KnGRved72kieYeXnDww8eChf5eDEbCaDbghvfGQqQqeoWF6maHr5m96VC89TDp",
  "key19": "2KM5i4jHHCb3eqeQX5wxTuSTwsyeVvWHLCVGQ5MrNFK9gAx4S8dZJxcJni9CxqjMu5stJjJd9i6nqSrrRvrnBevL",
  "key20": "3suWehAarUbFAXm941Jn8k6wWDo3oQD6LUwachVVzMScHvGdi7ycW1yMiwXy3bBTASy5tjLBvjLi6eGoCaD5wif1",
  "key21": "3vhZgMVEeoyY3UvvZFNRtThkn4JGw5bGCaunMK5XYLeCzvy8dFQ8kpv8syBmWBa9Y628s6VstZQej6aB66kLd7HK",
  "key22": "2Wg1xgdQhgA79hJjBKa1nDCr91jogv5sHXwi4qyWZsunSVHZKPQzmpRPbrcrwsz6uAbc2DqACi7VsUktz6JzZkak",
  "key23": "4f5g7b3S9oKyCk4vdX5rzKo8wdCw5FXFqt22zyAyw5W6UiLmGYR2jDZXjNaYuTKSQ6hdgDehJNa5XnqXhNdYjyBL",
  "key24": "2582Gg3ppFdBAShPmbyEHaUmiWugTZZR7KfkAof42khM6BiRgMeqtm2Hde1m5quvjTS9ZY7PBbAZFb3pJNtmFkQQ",
  "key25": "1psHkeueKDpn65Kx49LooDMX7BLBqZ4psjHkUdfU5AvGduXxuqkMee8q9a7SmqPgN6wzoDyp96prCQLLiqhZz4r",
  "key26": "5hvWDY38hM7HzA16Q8HkWyZRD717TzhUkykryn9FD85FWBGaWVe6NLqiUwQJ92W5ca4QbNGWBHgy4ZJASaJZsBmg",
  "key27": "NmB5DEav8mtXRDQHygqhbAZuUtRC4wF87m6TcbLEr6xApAjbtaYdv6hNMRhzB1RDYm1DwNqtj9iUyNhCFkhBDmu",
  "key28": "5Z2GxTxEYLpLzd5bcx2LjvR5PUzuqTAeCYMDk8xFfMadYxrxWv1tRYjvErknSfqj7gNQqWbGXWUi7mdoMharoevw",
  "key29": "5teksGzRZbw6pMvKKJkcxVBLkir42Vukbp6N7GuE7fFCefA3AMHQ3KVXtCyGgZnh6hPLTUaGEjvn3PY3hCthti6f",
  "key30": "3ntXQgYFGcpLFCVpo41f6eiBS453MiRkaGKN7JHFXMuym9GNdzc9t8HZNzZZUYpyGbAHiWr3YgvCbZfeuYAxRTGS",
  "key31": "39shE95a7EfnXXzJvSx3ftepDbxWq3LcJrBqVQdSg1ZX37xjXgr16pJMLBWPqqJEmwEcVnsKgaRsF56iuyYToYAE",
  "key32": "47C4zqEy7GJFs7ttn6xrVjvw4XQTK9UfhKDbDGPrT4B8hJUEyoL5J5BbiMuG2oBN3o7mf84VhAdjNndigK82qDGf",
  "key33": "2GLnufkPGJtZM7EHjbGs672LdxKLck7BLDK2yXSgtEssCt5pdr5EpbgD59Tf7nHZJRwLbZaXCuvGBsrFJ9ka7PtY",
  "key34": "3ZQZDunE5aiH1M5RhaACeTxWbudmdBebCdu4qxk2hTo3iAdXRC6o6v5AruPGwg3RaY6s2TT82hwqFsHfpYAyR4sY",
  "key35": "5MT74R8kxcY3WrrL8kdBwcubEAbojaQJ8qM6PbQ45c17YESBG85xqZ1WvkuC5LEWYSh3foiTCRCnjfeMakrUYWAC",
  "key36": "4qtdQEpsHtut9eYmYqfG7dSCWaPeMEPxmWXWu3QUAWmtJTctRKVtoBXCcc4BcKWCeiy5vaGoSF6hBeyMR4XKVZ7m",
  "key37": "4uYPyLXBnThS9Xxx1XUJsdWtRF1KyEg669LrmC6wQEo5N2r6ZLPM8UPHfuqTvGPxCYgHypKEMyizh1Hy1yVfNYnX",
  "key38": "4RyhDYrpEjazkFdoYWj2KYjmFJrk2yrJ9hJ492P43ze1zxoHnJRcKD1QWVMLeYMNkiaLtGAwZ9RKrN8ZHELbDgRK",
  "key39": "2KkmcpPXW9qWGwPamng1ksz39waiKwA9NB5L9xwKx9gwKG4fQJQ3agAfHTciwB7NHnNti1aTupTrYrXJRMBvG3sj",
  "key40": "61xrUMUZPADbd6Phx76Uaw6YHYekHVVKvgV2SUUCTxEgViuDpd4P8FcATYoWHFgwYGFmDjiYPU8gZyEm5kAkad4e",
  "key41": "5cj9PBAT351HVPy8HTsr8KM3Dey4TaWZ6uDEYfEcT9N9xNtjLnLLah6CxrBPhpXFv97dSArtmnj3evgY7JUdvVzw",
  "key42": "3vPEPbnF28AFYuogv8DUs1wi3KAXRtG3GiNvRChRNDSaUy3QWQpXuBWVmLLTEDo3sKgTbr96P4A6AKNjqDfP9F6j",
  "key43": "2KmBV8cA9e89R3tbLexknMyvDqPbSLajFcQ8H9pA5HdGL6PRm9VpjqygJWNuc8CgSjDMqkxwU7of9xQG1h9a6EjY"
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
