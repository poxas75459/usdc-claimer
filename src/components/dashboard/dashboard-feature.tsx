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
    "5GBCHTtyoVdsiTRPdMacydwYDQFqtR7V3aEngJpsAicNrtkP4p17ekCaoN4iBeinKXw85XJztoLuBBzX4LyTJBnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UT3pmYGqrJs4D9et5oa48EnycLU1mctWydukTt6WQKJ4h4RcP2LSUCWaFqaBU8YMyJg9LwTxEiyUL9qKARyECRF",
  "key1": "5MTopHFfeaQ66vbyc7xcXLb3kz5ZXcVhtQqUkAkjZ9L4JeBECYcVEbYBomuQX4KPVWoQMTMsR2dYkym9cAg1aQih",
  "key2": "LmGKN8nrwYbiGsrFtDLrADYXCPkZSwYBjfRqSKgpeAkws9Dr93u1ANS16CyYbDDCr6U7b8pJKaQuyfNNjJ3FDYP",
  "key3": "4PuEEAqr7dV4Cy5ox5FjKnjrPFUgqckJTgGgCjJjrDBq8spkCKqZhp5nZd4tRRz4Wo3oPVLxXqygnpp3G1erAC4e",
  "key4": "4NL4JmeXFFXQjCJCGG8g3oRg7h3B4jUyFiyvxrCqKe8usjALpLYEimXaKJUgDPXwuJaQP45XyoczrkUTBi6d3c5J",
  "key5": "5DUKLGGEf96GH4t9zKirwv6rTgBehj1FwPFUgncou4HcHy1NTtBYwdMkfbuWxAed443DDBWGmtoqAmq5hh6s18z5",
  "key6": "45zoRKiyts14i6hCyQoVzVkRwLDPm5PG1qpieDKNHC5Xs3kQkBYSNDE2DpLknEXLhxdpkuYECT9EhAqnRFhhBrbp",
  "key7": "4zAyonwauHQyxhZnGvdAwyYGhte8JGNtB3Adw5RmE2nmU5QuHgNMJ8gSjbqiwUqrVgrYViLk9xtH3FL2nizgZv2q",
  "key8": "41pa4aBk5rbpFRVKUoXWT3r28N8Fomtz4wsiTraa2PYQ7oAVVbEG9JBbRp7JABiFG7LuU23i2TZz6NMAgdB3pueb",
  "key9": "4HnNynSQMcVn9WPiDo2KBQ7nEyLSWwUC1oVuBTc9Lvof8ZYy26o4VK9BGPBF1rpUAPnogTD6nbbXPpdVtGyuyKiK",
  "key10": "2cRbmm7qD6VwGrVhg3BNosmrtgDN5knUEQo1yjRzVRqBgTdPrWpeubgw96nWfz6YGBM6Ln7qVJMwrhjhgasfJPaS",
  "key11": "5yuGvV6yi5izcZko1yqXvHUXX5nCJBopZHMJpkUPNZCUDuXbA7HJkLNkVrdPrruhvCirNPt8WEmmyRkZ3F5EgKkg",
  "key12": "3128rtcbbghR9J8eZJSZvmhKPTPnFVc2QS4dkA71oR7JZjmy1dQLNbeMsNSEBpm6oRjAkSXjdX9RNJvFt78Kmss9",
  "key13": "48choCS8G2TGWhcrCHLtqJy59jxNQwuYyHBajCVtCF47juHBy1hvNToqncnto9rkjzdFwfN16p5Fjben5NcrUQYs",
  "key14": "2KDHDURNHL6pT4kCCA5ZHT6wL3bi4cuStpKWQwnND8Q9MmDLGqwcFnLPcNB5MAq2N3zdzLpiaGvciUMqJ93prWYp",
  "key15": "5hFKR4ZD7wsBCWTrDBy9hEbP1Ua8MGgjxUKX34HtfPqsr47Y7Ek4cQznzTK6xPyNAcvuCHENzWYNt3vCRNLCtvqC",
  "key16": "5nJ1G83er3uLGkAxJtwdcwpLYmUD8mvgbU9Ai4n2EfNuX9fPoPsrFAtXK19QvJaxc7a9E5PYwD4B2bwuKrFoizFe",
  "key17": "4errfT7Rbh4uHWU3R3Zm3qZBMCKtWpuYQTsQJsZzNTZPKrBrnAJAhQtniQawPxXW4B7WfmCNbT2AaFhZ1Wn4T6Se",
  "key18": "33vr2Q8ekVrJ8FRLPQqyydvcYAw6ejZP3MTvscnMpKjakLZAcawzEFGjXXW12FzL4QTMNixSNs8to5S4cS8BwPDC",
  "key19": "ztt6drzkWiTqgghcMKV574BX49NFZMQSEMsicd5KoWQkunPtHcQs59BASePh49m2eS7ZvpStTZsquBu4KfnJ4v1",
  "key20": "3Sn1vmweWwVpiCPaTLqJFDi5o3ip8WePCy3MCzevkZXGGYvqsbJUiqK8cjMsmfAuTC1ySGWmRtXLhzH7amGCWMHw",
  "key21": "54sSHXXYLhJdsACSoJxvN8QNj8K8znZzY9kvRVriG7B3abyEQ6DWJtrARUMcFBcQz3hCQTFdvaggm46vnkRmf9ij",
  "key22": "3BiWnNhCR8pGvcMrEg2suMnZeqpNzk4wPRXqeEyS7V8QEgYpLWvL5fiuwx35qEMqiDd33GV1gineYw8FT1A2Gapz",
  "key23": "2XorVjg39Jc3Ywx3KjBHRpjykm5ao4PcVkfcaS5Cm72RGBE1CjYd6HzAkNK9cD5Lpn3YtB8sVjanMyteXVfgb8WD",
  "key24": "2872e5g19KvFta6iLg5GKqt5dKegqWRdai7QWetbAKuuBwAWGKUdMC4j2gfmwcmZv5bUvQgKq5TEuHgcpFW3mTCc",
  "key25": "37hvuNisSYQbnysrbNWouAWQMhQtygiMzzQFoaLdiYKfUTUpkpPTz7gutLLoJ8wG4ieNcm8k8czhuFAv4iNQYnjT",
  "key26": "C4YvpQhLsCCcgKmSfJCL2GPCF4RzyPAfRJTW9nVzoaasxaopf7W3ruUv6rrxmaaPx9eJNJxrN7CA5PWHnjMkSsg",
  "key27": "36QBrUPtvmgijuKYNCyTVKoUXUpkUk42hTnwSLarFDg4CaRGkuRTSXpsTsQPd3B5Eyi8JYFk7okussvGtRaR4nzv",
  "key28": "2GcHY5vwnwE2p7qBmbjR7ngJB6KxifhTCKn1jPFh99Kpn2gs7P7nk9zktuYL2YYTtiyQNxzKvdjqPrGJpSp9gnhN",
  "key29": "5UcssiM3wtzZhiREmqR33F7GgqUwmWL9wvqjAbRJ9NFHvz45bJvnGtmSyJEXLiXytyajH59rPhm57BkVGp87okCg",
  "key30": "3euFuA4Q59BVYFszeYnHoWXcQMszHCMpFXj9rr4Rv9SwxttYP7XdamPQBYYvj1oP4gf71f7ansGVUfZmaTjrnn9g",
  "key31": "4uRv7e7zdbfC2ABVNBFVA2BbikvCTgxgBT4oSWkvdrWmY52k75MREacWgEpqPXSF5M35gfJWsBZmcMVd7X8DFGN8",
  "key32": "7rXak4e9nSNhCbxSeNem7bwRZGyP4sjTnQn1VmYyj9Nrnfw6WGricEVfefnXw3NAFHPWFaRQ2newNdmiM8juJYt",
  "key33": "3ubSxWUNyaWdERWx2XVSYrQE3MoKFCEDbDM3G1jFJrL2QxDNRbdWs9UD5HJ2WkRySKy8kDeDfG1i1VdueT3Lum8j"
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
