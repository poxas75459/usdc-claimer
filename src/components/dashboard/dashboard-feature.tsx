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
    "3gHjsya9PU7u7Q8reVecHsBdMaH4srFSRKqpRQCqFAg53bQWfLAnCWN4CXbji1HWSr7mekoy3zGKBmaTSvW5pUDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nRfuiZujyEnkWe2ii3kX6pDpmcVu6fgPFuE3oyXHy8ovjin1h1PvLXxZdUz9PQ3txorfA7AnQJk27SvfN7aeDji",
  "key1": "35Ehpf6JFtZcGcjxvmv1Wv1foeq43Mb4zHZMttWdEgCftcqsAAVrSHxK54wjcTk5xfD67Z7sMaNWCXq1f1CLyNjs",
  "key2": "4C2tyEVKqYWiTS7RanXq8iuZpjPktCzjPK4zFXP2fjFqaeKUfaYL4GvAUNWi8ju4XjqNsohci54fC7rJxw4PcQiL",
  "key3": "5B1wxMFuKfzzAivLSZmNCushy2RZHUJY2yUba4xeQ7kaRK7SCWhjr76EG5prJnXBo6c2XLJ33DLqHVoNpVvzxc7o",
  "key4": "2tkPpXsNzQ5aE4crEhrnUmywbMkHRQRDNMSNb5ECvLZMyZxACjnsSdxzQysrjfLt4rVN2bT6GrxJ24dt3541tqxT",
  "key5": "3PfU4iU7JtxtRsBnQ4YNSQpCVbhfGPZfPGaDTqqSNvmAUY7jpiz6oGidzPsqPa3NiAhoAhP5afaV5yom5zJ8UQ9L",
  "key6": "MwR296zLLa13uxGaAidMvHYguPjmQSoyyPeQaRY29xSkTMyaYQM2ivt9JVKs4iPwqJg5EWpZcFdXXnyimw41XKc",
  "key7": "5nhCJXPkNsJcSPjVkUgirSMD97LauJsCxR1xUaXFiep8pKjQ9azNqwUcmdemZ2EKAVTmLWisQExsSeuNCb52Cnjf",
  "key8": "mp1bos3XG4JCmfbUvNYVDHwp7qxYhawoYRfot9GjcpfJHa8d6giUiEposPgtfwwproZXAQn6hR1uQKrSBKzfUvo",
  "key9": "51H1to5D5WbByzeq9JCC8FzfaBz1aN9idKqH939T78H2zEZLDdqmHB3aKuBLGvbx6kqoUQAp3Nu6aTg9TAY5woG8",
  "key10": "4Uapyj8cugMo2ctyLnMgh1g1M5oe4kH7EWZBdZuDneSiZr4NERZASwybFeSj79r7xsQHg4QyQKmsEoYUux1hD19n",
  "key11": "48c5NiuDCVVh29xd334CmEwbqd7mKGdbzDxRbbgJuFGgNsqF8Zr9o9aFteVAeQyWxWN9CVuAxHkHg46wZDfJLJRS",
  "key12": "3fBikHQF6anFL7gCpEee7Ht3ePmVzwmFTGcfv1pcdrTeutmzeK1M5kAnNHbZyVGa5dGZ2fTH1ocdCmE6gTc3ieZi",
  "key13": "275afvSgAECYajrawzV3Lpmx1Yqp2GxDy6MkfLK6pNWMtjYFLkuWzWMFmFT3iwdLKE8WgDPSFZf7Hf5JmnC7yEPj",
  "key14": "w8WFFkjUCg2KeUit2gfMpLjc2ZL9WsoF2DiEEMJ46CUwFHGKpe3J1hMiSHeVNzpBfWShbuxDX3sJzKcdpWHNvij",
  "key15": "39WmumWK5GvvD13MrTQyABNw21HFbHcykcKPypphDBfXgdb6NDVQoJL6Fv2ovdBvLoeR9Y6dBsxfCU7JJEU7zqaz",
  "key16": "EAgk3MiFNxDHjTEBkNDUD77BrvXTLjXqxQuX2tcKcF1yim7JbZvyw33ztydaYbwiFdRwhuTPrZekGUxih7bjQY7",
  "key17": "2CAEfhRkMf2AmkPvCX8XoRifrhW1zoJcqPe3MURrtsrKUNfXAzn7mANA8zx5QiPDPRdU9SrViTzfJhc1xWrPz9UD",
  "key18": "4Zydtg9VUABKQ1MSsFcHGwWVYwfwTpqtfLdxojweKgypihm5fdjgMDrLJB2fS3TxUUThbFa2FY5wTo4n2XCY9rwW",
  "key19": "kxX5peHQeEcyRyzGC2jn1gVZ9AwWaTPoqZs6UzYD61HwjyH7vCnuUz9UbNy8iyn92CWj2XBvKWVdx3HnFYwKYKB",
  "key20": "2HW2WT12bBXLeq7NEwqh4t8T2PNm4LgzwLU7FxbAUC1Tj9Rd2L7c1KiX9qkpdV7wLUHHxQXj6Kf13nu4fvgdJWMh",
  "key21": "hLjmgEaWyY2ag1XFuTmSL7UN6ubdAdSwYLCtiTTtkmTT2KKbQGTLsKhvvATGrarVoy8QDfPdBgeLxcmHHJht9o3",
  "key22": "423z25jY9j7y5edMWZKHmmEmoNz2sz3Cs85dKdDiFwv5iLaWmGoPDQyCHyHsANxoWheLsjgJ8AfnQLtPJXc3xi5a",
  "key23": "7QTfed6D5cg2fPWCKvqTCFxw5dhvjHb2i9nHv71Tod5vZs16QsSJSAxU1s1KhUwbNjsSqDomgnf5gWg8gTvJhaZ",
  "key24": "5CWRruRD1pyiVHrXxzGq91ckkYXMTLfTZ6NKpG3qY4f2KVEugyX4VT9zFY1ptN7FDMfoMFHbDBRYgLkpjnx9fAUS",
  "key25": "4toE2QvPTytDvphNmpMMzN3eahHy4ZeJwd5z4scoPUW7gSrAciueQuAedVa6cmRBoh8bHKcWNJY2QfAGxAFHo16K",
  "key26": "5P4yMbShuELX1ERcYY1RCFsY8CTRDR9tCmUp1VFkBePUfemsN3igzdTdqMEhQFv75nYJg3YEqyRKLizczewP5wZm",
  "key27": "5usLMvuGrSUdsRuA8ExriP6xY6G1MC8cjGYanqdfEZs1XFD8oMgnAQbci57xTD9Qqim5mcr9mKk5a57BHj4UcXNV",
  "key28": "3tqJMNywSfpBb3ZwagWwKxiyYAqzoJrFGoVm9WFAfY3oVsDxrTiDZfnXVkywLqk5dtAFuyyZdD6Aa1ud7f4ts3Ai",
  "key29": "3ocmHhVDZEkbTzN51LNpvZBWDUXP8WpvLcdY79yjTKjCTfXAN5ZodjdVM4rN5uujyTAHrXXrseG1R7HdjeLc3NC9"
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
