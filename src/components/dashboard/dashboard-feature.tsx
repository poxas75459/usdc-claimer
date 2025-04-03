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
    "4RT3W1Sh9V3jsXgJMcmES5heRFUrErCrMXRz7G6a9DTEQTtC7QHpGyAeb9K6Nbb54SUqvTGtzk6YKwmwL9AqWqXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HPfSc6M31enHuVk47Z4a2ydWTLx4QeCP4ZJcjHjjZnRPXrcj8E2icpnQvmg3Ri2AfgeWjv4Mhn8hD1ca9h6RCSZ",
  "key1": "4GoWfZSyVAfUXsqbewSYfTCT8hJp25G5yiiCSEN4TBqFLvf5bP58W1XJyPd6DAgMrpvYkDjxgLn1v48tsGkBJeB3",
  "key2": "2scgPbXX91meNLoggv2SFLnqnc8RdAGusyySSGCsFjTJzoGzgEwfJi17gcZrhNzssveBSGZTMTm7CaCCa4p6bdRX",
  "key3": "4ZTDuN2g7VnqsanxtWGUj1s91tnuC5PVtgB51TJrg6MBQSVw88cWefs2EDetXS6RFurstryWw7jhEQrsEkMYJGVC",
  "key4": "27TnA7DHD8qqePZJ9PFunWen1DEj1yU27UPh7ukDCH32GQWPS5Jj7zywKocMzx7ejJXjFTBk6K3J3Bju6tLdPiae",
  "key5": "3CjndXH5gZQgB4tX5TGE8u7C6vChyKrJbLQQeg5cwVCJE78E5BiZTaEjPuT2vxqrMqp93t535vay89LYK2CFHDqp",
  "key6": "xE7FSA8cSauK6BDPnpk1Ke1JzAqCocpDqFMu32J9XdMatyV9VDJ1bPaojJP7hmx7dusAZdtQ6vjiTzgFurxeqpK",
  "key7": "21AQAVtbrvANjxqRaUU9GbeTnLj6Wi6HqqM44NKC1g9uJcUvAyuEW9yh5E51xrkSBCMXHo4oNdpJ5L7j2jakL55o",
  "key8": "2mpqFjSQSZR6X4jDAuLJpnhMQV8dFF3YnevTzMjTiPjuBbbNenUysa5sqgcVsGYbL4h92dRxCSrGgQsqYJmpgAom",
  "key9": "gzWcY5jeux4gbXTuvgnhNaPWHWpZbvy6ErZUyeNCEZ2Qt7Ly3R46FVYYheUZ9nNMUuY25bnGdThubq4dDu78rCW",
  "key10": "5vy4Hevzt2q3hTcTmjecZFsHWs62ApxYsEtHSaqGa6LRKQJLekt5H6HnDZZ6E6GeVeG4AiaPx8JL1pTZewNYsRZK",
  "key11": "51X8nUD4EcFb7oXV23JVUrvWp7HQHbNvVrnKEfXM4ePqLgdkcmqb9iB3ycCxjCq9kTJ4FrfXZTSHrVQ1JsgE6Baj",
  "key12": "4q99nwA4TgtzNYemn8f1HaJf6vcxZP2czVtFQL8iKqfbuLg8vufvd7oS4NRhi9vfh1uZja6HzMgGnJTYNTr3awPe",
  "key13": "5UFsjFWfdBJ4v4zJj1RRwaRfi97kYwoKYoJSTr4M6FFuWtkHxLMSg9U4Stbwzy95haJRqZS9tky1y68XgrnJm2RV",
  "key14": "49dRXhhBWM2c277ewbu1Y9WkAeHKtCQjbnbmAFVU9m7rJpnz6iGZgsTtTPWcY7sbbg3yUDt6UDUserEDzjbCPjM3",
  "key15": "3ZsxkZ6JbrkiuyTUR7VNVp7ED9np8Qw6JKTTYWdAYp1kGqnAVQBD1SinCWiJJJ8gwbrQDGM3Jo1Y1kixXzK1eXrR",
  "key16": "4djRXEkdtkpJVM4axA2JkVYGcRwdzLqtfFqdzksVYfiSiYuBingE8xHsaiRKygydTc3yxoZ9CDng7e3b7ByqYxMC",
  "key17": "BQbEGoZjXKNSSrTPBdq9Lf8Xi9QiegDJxymKS3FELoNh5SXGSPn6VmGNrHi8MCTL7vSQRjT5bqnEefpE5RawH4z",
  "key18": "3KXjYQGVFDsswxe45z9BEReUzq5ZUqkj37JZBcbTf1idmDdE4Km9xv68rRgTQFrCTHZogqVRCaBC7xH9FKFhjMtg",
  "key19": "3yFPLAm77okBkFoqGuX5Yc2b9iTRsSvtZpvZJQP7ZNpwcvLoZEnWGURgAeDBZKH96SjFf2GdYH9HAuK7xACTbzLd",
  "key20": "T3SzXBAV3ypgEKj8gVojctcxe8CJcJCxnNgPNomZoWrqJ5DhMnEnRcDLGHNw51ThtMgoJMjfcyctzLpsMoRGACd",
  "key21": "5FRB4HtuXD4dV5yFDhw7fo2b7fZgB2ZXh8ACFZhmm4xrfqVYNyePXKacZLFNsFxAh8q2HgaeyvmmEgv8oUai3rNi",
  "key22": "38HyBqgvjptqrES99fNZt4pUdvDe3W1q74nrZHoCnY337obCfjm3ZGNDqERstEQYiibx7UBDaXf2aG5meJgqaWCP",
  "key23": "3iB23Qvb43GQArRe5WhFa4YXFNBEDsAzTnZHJFJkxmen35wk51f8k777vX1k74UVCFW26nCWTSfRnnbna6ah8CKY",
  "key24": "2tBZCqLw4hhFE7aRDLsab8V5AaSNMbkPkaNaSkhfG7d6hT7qGkam5n3A4T1psfsZv8RGaq1DVW5aarDpgdYYTcVK",
  "key25": "4T5Vmozkx2RPRfk1yv3bdEPk3bSBDA66KXArRWi69JGkzDJxrsUNVn5uSFAAvWYPfaw711AYdNgpNys2QCNemsUB",
  "key26": "2W86gWUc1c9wer7XPCVNBUhUyckU8R5jDGXxD4oU7CfVU1P3XJNB42NXfVrUqGk1syMAXVZpJVPPRgrin2fh5W2K",
  "key27": "4mQMQC95g5bHJGGwrveNAaHs4qRv7vGfaqrJggWpsaFhuu8SmFj6VvRcj7r7U46PHKxkA7KyXhZR7eqRaC5XXV1z",
  "key28": "2ag8vyKyQsizK2H2rzZaBSSS2UkRLJjgLHHYjCpQU5LUYmsnNpz78ethwYoHMDBScYiD9QJmiUmspZmw98QvdHJh",
  "key29": "5paJfnvv9e1jA6XbyBvVUEKN4XU8GMx7nqRVbKbTjLpzhvPkwh2n3FvbwgzphGdmE7MSGFs1953gaAv4SYgWbDpB",
  "key30": "5Yd6HwgomsnWgGTAhVCrHGZ6DqHzcRrGTW78TzPe4gd3H4tisttPBigVXxJycWww5pjqyyR8ZEy99Fz8ueGniY8V",
  "key31": "3GR81uqABisBsMxXVexbpxBJKbJPTrvr1BrfpAyGgzaX83VpynJ3aK7cesKuLREB71ugRsKib3zxE3fvzE5dVT1y",
  "key32": "2NvUDLkguZUX33BPUW77yupE9PfBw3LxPDxRsF5uBtECnicKLBX2LyA264xsEdr28AENZsgHtapH41YL5APmon4d",
  "key33": "5kkPkU4TfBSg8f6ZEbo34UoogsGzytchhaubpbnHQEUtsASLoe67fdCDw2irSM2zqK2EtZCC83PqSfk3K1iEJuxg",
  "key34": "2Mm6kvR3y385Yu5aYDQxqytW3UnbKs5YdKMJUdxKnEsnHxaXy9dgGzSXWgyFLb4eNSUzZYey556ieKSd2wQuBitU",
  "key35": "6Xf5N7bMxPsnktmFf5Nu3xyQZnfGoiJ12D9p8ECqqQDfJmAS1y2HAizdJuiyYvE8VDUXibVdctLK7Xb2B6iP5zc",
  "key36": "3zkfE9uNKanPeWs9xn4qwY7D27zK7Ug5citb8GFqWffF9JRe75Ew5wB2sQFjAkQntW5ewzPDJyqreGCmPtW5GwvQ",
  "key37": "SZPckiipmNXJz8kLvEGKo73sWBbEf8ZUuohHCemuYmVxvqwUYV9rxHwDrQ35ADzLkdgZGh3FQt5M3NtXJGr3ZJM",
  "key38": "62MHvmuY3AjY3daPooD8YsWwWXZLQvB8z8AK9dDK9F2pmdQGN3u9KHoBpzHiNFd4DRZbviTeaom9i8YH5ZddiorW",
  "key39": "wxGDhC1qmtpeydmd314aUKFrHGSaDHLW56pEh8kZz5zJExvve59pkq9Z1cnVdjoT9gWEGFyVubASfdg7dR3wWAg"
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
