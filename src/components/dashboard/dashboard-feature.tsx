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
    "3kNCqxZP6SV5ygPFJ3cvpD7w7ukgTzMFpttRW9nKmd8W5rasGKEMSvjLuwEeJmueHZxTk8nBGxcd2xNiS1V2v4KE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f3B2RCe4J4YdD2FyfW3rDcJ8nPd8T7bFMMfNTbi2a2nV861WJ7CAkCg7eqAWqzcSrqNK8UanSmG2Tf6YFJfqzar",
  "key1": "4MCpGoBy6dz9jnTKS92B1gxauoSX38rkarctVE3o6gT58bstecSzaZwW7oNrCFQf4ou3RemojA1vb1N72ATDMaAp",
  "key2": "3CzJFrgtsitxQWGvqZb2hdeLF8gtuD7bR9aqpErr1iBuZT1Phjzz4xVfVepxuM81ZwgXNTyx4oyuuvZDSiycPBPV",
  "key3": "5MVv7BANgZetQVLDbvbZprnkrurWtgoPh1KoX2HnbvXuECRSQR7aKsok3Av8n3EbK75ubBWig6MpC6Hv6ReSWsgn",
  "key4": "617fzcQ7CsUNKe1BZ6bGz81N7PnYuGdZnJVX26UBZgCUeYJuMHhjH9rbFLavjkpw1CtGfWUDyDZhZ1b748D9tij5",
  "key5": "4p8qRxbY86s96dFW5mwLaBi66fRSdrmHWX5iSZraD8pMMt2gPQ9kdTaX9GUsocjX4ZVtRH1X5iB2XU2EszU4Pohj",
  "key6": "NCajWojrxAeJqd1MWk7BkRimHAnGn89DPEuJHMBswLo1tRjiT23vSwXj8mUuv94dVjJMQc69nUnQULypVEwXKRp",
  "key7": "4uuKTECN6QLM1q7Lyim9UaRe6HuDGtDRZyvhoao44XG3b7oF1WEXbrHMpmhU9hqvMZ8odSN1nfdp6R2DHrCiVeLG",
  "key8": "3TRoY5CQaVmmhEWMSJYr87KTqPLFfDczTZSfqyz4wYj3s1JQQYHfXYKzy4bazyukKDXVT813j4FYDmwQn92vEMNN",
  "key9": "m9cM3kVm9qpwauiXZicKh5Pfpy4iLAbvg7jaLA3Q8ntT81sRApzWLAaDnRK7qLFBefhwQGiqMinJu4JTB2GdoBP",
  "key10": "4V6iP2S4XREj1DycAVtdL3x1bYWtd4aExbZ88oo7ovaxxBWR55Z7i3vbr9q9TztVdwTF3zGnPEMeAwe5UDZKLAUA",
  "key11": "2ywfjh89x4kHfo1Q2KGUewRjX8bumxtwCEyKXioaKSLF6afhaoCqhcKP3YcwYPgAHMscu6oVwGHxzuYjrQE2dn5E",
  "key12": "3DXixPWLbvStS6cJTS4eTo4hkRz9YbqFGMi31rVFafmdUnXweFceBfcarnfzsraFQAmmGUvFmQ3Ge9KyLUP5tbiU",
  "key13": "2ZscVD8NpTutjTp9HnJsqMNcSRr2axd2FRaHjLsgphd7qd34gVAErSttPTco2bGc3thgYJB86xttTaMwbVYLQb5T",
  "key14": "21874pNXM7pinSvt1DDuPsRqRtkmfTmttmoD5KF2SMA8NoA8bNsYYrz9uQiB78XoFY67iKQQNjVQPZV2GfcKEtfJ",
  "key15": "5tUSDqAWe4e4cUUAUb43dwszgKPF1ECtktF3Kk6Qj55wjBCCjoV6sDUfsJ98yw8Tcn6fvoQv3XHc2YJjsc5VKnTX",
  "key16": "5HeBtdjPcfu1yAxUDGV8jHbvWFkijHjwNW5X1pE4SMm3BZa53pJFYMx7cRNP67p2382hMUU7AJryt5nKHXt4xPpB",
  "key17": "4g9gk4suW7HRHfJpsFRU7TZRQZYVr4Wg1bSKrL25P6xJdQp1Ec65eLU1UPPNZ77sk86NSkFTBrkAQwEHQ3gAokXw",
  "key18": "4zH7KLLVCWhdm8G1q5KP9RwqT1k1gBNitVKegZgcGgnv4sjtTK79Tb88Qmz4A3gkvc9QAmS8MMK8GbLR5voeeJak",
  "key19": "4K3f7J4YUBQpdhW4CAhx43h3EKJcX1RACvdHQXwtLhdFkWcD2rMb2sjpkLEVL5TqhSpyVMNtU4dc8vd9H1UswkR1",
  "key20": "3kyGWdGDkTzPCJVkpwQvG2dDZAGYBcnLHvveGsAEydLqemZvHfWm8DPkx5Lk25WBpNNd1wfT7EBPs3WurEq2VzGQ",
  "key21": "58nAyBMftxPkNJqDUYf4CG1cEB6AC8jMBqkXygCcAYVq35y5cXRgkNiUaS3yzPyEWgixP3AqQsyuwDXWW6zd7rc2",
  "key22": "tn98vct3ZqA9sLSffqeD7BPNESmJ6YaHeGVc4wcbtGdzJrUJExDWZfydfq5oSsTnEwt1NowHgpyVXvZdYViAspR",
  "key23": "43LXHxPQ3duMQbRC2LzbCGb2fBpUeeB6ABoxRpPZZQd8VHZPmLV6eauXLw1C8o4GtwCZnJ8wVC42gm3ayWZDndFZ",
  "key24": "gsiTDSBrGipMNHjY5wNZxraP6R42FytigNK8XujYi1iFZmTzeRMEgbKSxcdKqci5zRQhp7Hkwhco23RQeJbrp5G",
  "key25": "5oEybLpUymp9g8EnXiRVT3bzHuA9Sy37C6jCg2m5wUHRUAXRJmbuS7PpjJtLXydZkLf5TL7p8ZYqCHLfaNJ2qcVm",
  "key26": "4amNkAX7eerphQHN93boFqzaX4ar9uEUST4xJ2frMCbSbBv5MLjfRLvPhLPB8ySrbahWGG8Jo3tkpWjQQGgWti8c"
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
