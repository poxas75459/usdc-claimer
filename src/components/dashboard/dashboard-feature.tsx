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
    "5WQBb4bvaeLvjMKEup9bbRfDKmPYmfHNJRDafgBAEGDtqocJkrSyCAcWipc6zHPKUhohFVZ6UvedB6wGfkPXJMRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2joT1hjBwXYZVKQSb1EgnE479uyCjQr7pDSTxt3cqm2qQ7anGPJ8cDELgTP181RYiBYVq1xEvq3NYyiMYjXtyc4H",
  "key1": "2YkbQEhA3D1yLF9W72sVNBKwhLkz8xekrDnwGoRUPQcuBNRrGh8HDbYD2b2GwtE9Joy7cAeEiDXPoQXAQHTyaEnp",
  "key2": "5TGyjdd8ceWGssrDktmn3xJv79iP5A5UTu2kH8ZdWdKAbVMYgjaTpWV8aGGH22eHTKmDcCRhbBCVSKhny6XN2YBz",
  "key3": "39sYX4KRV1FqvYwxceU8troPmsrtGeXcxHqxkymkqQQcR2jiccmj9M8XpLybw5tSHHiKDZanW2PrEf2VfuSkUP48",
  "key4": "5bRPsKM1YfiifXfGGAtr8pKcyCQQ3qz9JZCM89qCN9Eq1sownbJDvmsGgy65D2ioYLVaKppzZjLBKNWBJd6B8XWi",
  "key5": "48g5nNzfrz6n85s8Hcsk2N467gupUoc9JSRx2y7UF5FTLX9eLMHPX9FA3MEbCXxtY1jPy5cE6xw8GRAZMmGwF3co",
  "key6": "NHMSCjhZXfkqG7YE5RGJvRGVVRMe7KE3NkvEHDkSotPdZBhsyrU1QfAxSvKf6CLgYbTn6JjnRJsE9Zb9Yt3c1tk",
  "key7": "5BzSVqkCsnENi2FusE8Sk5Bpaox8Z7abZCwhSZR4ivJzduWJKbJiwyRyyu8anv9aXPSALECpoGuc9Aao9fufZULY",
  "key8": "32163jwtZme4eTfd1G3ypXUGjMdZtwU79PyqPPtYmrR2GqXR66Tk2YQJSmvZFnjJXatmSEytEUuZ4rasngGtSVU1",
  "key9": "knroMzW3w1QZNp47GTgjHQNCXjj9WyjQyDG1eYTAtqEKt8bwBg5VE6SsntcauXiWJRQiySGaUTkcSukZGabkHtj",
  "key10": "5TZNdtfZJrCG4RcdUXcJjJHwWj8euu5NStWGnkQm69xiQFMYsqcfN7UHtijhNAZKXPzS1Bo1u4q5tJwLCXESEcid",
  "key11": "5z4WFjUyJcgf329pRBVQoLpmbw3oZNXjJTfeh4fzweokdSMm3LJgdhei7ueF3Ns2iwTUGNGTJSxs1ePSfuQn9dwW",
  "key12": "ZPdW2Zg9RMqds6asBNAwKDLzBSTsFTkLVYUpT8fjjXT17QoVdBpLNVf1aBFd6Y4oAV4UxrgBSbZdNFeQ8iT5SHe",
  "key13": "4m8v6D3METAxMn3MFQdf44VnM3VFjux9mZRvWsupPXKxnaPcaH5JG2bBAhTcLc47U3kDBEY91iKGQHEPqp67trnG",
  "key14": "2TmuKe7VhBQLRHPWTpwy1SxMwFJGPyjncyz6GmyUzXRnqMNHX2JgWyLbmirGnjQ2P6P7hMhpaHays7rDmXRVYJfP",
  "key15": "5c1zwNq86rRHs3uoJ4pELnzHdCCMGjJL8LXnxwLHbLV7WFaTyzVAmqyTwYSg3JgUzZ4xgrhEy31ft8YzwjakCont",
  "key16": "2z4YzAwAJYXpKCQmoNazmb1APA3sN21TDNbn2bgczn31yXTcW9QsfSMfkAzYf3zveE5jBGwDDgsCGrJoYzHjFJEp",
  "key17": "3LtqLFnDJYsMPJiDfMoY7amXLuKCxwdxfaPXFoG5NKaaLKXWqCkUai4KTzJLeh1KZ1DqYoz8hjuMGzhzFuPMYBQE",
  "key18": "647ZLHKX2y5feXADCyUgeD6XoD46hSV7zFag2XtpMNt4Vyj6pSGCv5o1jkg2t8AvvVaVMUGaQG588gNpS5TiTKCQ",
  "key19": "63gDU39Ck2HZ3WyWQr6Gp5hBjMheH7nieXMLJZ98ECtKJoKEBn8JQDCTzMXbpNdsGkAmGgE1AgVMSHyMTab6iRLJ",
  "key20": "3n6j3awLHQ1yHgFRseGrTo8yuqcaPStNaTBcPS2GGqaAqfSDP2jFYFGqZPfvkDHS9KGobiUGuLcSvHjuEwjZywFF",
  "key21": "2M9FRDhcTaLseHxJcw6aQHyzi6VJTYXbvHsLPWbdgjqQwDsPCFQNXaYUKPPNk3yKGvcdBdr1x6K7Vou4vaYGjBPQ",
  "key22": "5xoLq9VCpf3TqPZEBGYtSwzPVRo3bmUieixRg9f9rucDtqyFND3EhJhM9XYxA7DWG2kuEfuiiPeZJ7cKACBAUjwB",
  "key23": "5P9QU3RSZ3Mm9YtwpZ2vRzVnkyQ95A69nXRuP96LxpGp1h8oGD8bWH3FP2EH2A1CjVKEZgKKd1MhgWiN8dJkJHoV",
  "key24": "5G6gRPEtDKaPj5jiqhDs9HRm7ufy3GeHaDHA8mpdQmdA1MPaV1PsCa3qTrgXonFkfrn6eK7JGiyN18aNCpjrB8bz",
  "key25": "3tB8bfBwGysFVZBCbAYgCJxe4graQJxFG6jBrVth5pjhKH3V52KfHsfTuq2bk7s4GwAC4tVtmqKUetMzdtfiMxqW",
  "key26": "47rENfciJ2J1RkMZHN5NLCSpoUtvkkrkGkyuvw4aUGw7vGnqeo8QGzTMJUzGPTVhAn6zn5fMaiEN1qetd8s2BoGZ",
  "key27": "FwcetgwMNQFThA3u9hdUq5qmP695uTfKqMY5A5v3CEFtV7Mf7RAZkSGd1Xny3q9zome4PhFBrHuqodf1pt5bi6H"
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
