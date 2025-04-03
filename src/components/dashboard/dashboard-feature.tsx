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
    "4WgmgBpmYNCVUC5fbXFfhGwzAxSGsHRqcKUZ5atsj7vk9C3ZRfKWUNQvdRyzBY53RWRDBxCQRD4DDVMquwT9H93v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DTHK6PSRk9XKMcfTF1NVwSshXNcoc1krFXAgvCxNnoD8tZZSprkppnRi3qcoGxfYfr2yMigH1RtbXR4LfW1XRDb",
  "key1": "2hmV2bFRiAciopQhDx4TLkheqnLvehWaBAYxEGdhtEM9bC1HeqseZWZbHYv5rLEbDUk4RwgZk5vadPhsnuct8gfc",
  "key2": "242xxLQwiwD3te2dFAzhGZQPwHP6sfLDwy4qBLV7qtBszhyJ4Ku4CaxWCA3UFrxiKaYRV3wezs8WwcgxaXjEpKjq",
  "key3": "3642x62Yw4DYyr6PaZ6nPGmxuQ9RfijFzadRmkt8TAnwnL3v5apyk4o7R2b48zncjpbXFcx79KSQ8dQhNWq3FPkU",
  "key4": "2qujqHru4UaXKyB5LVSQRhjQzeu6ZeBLjBRyHSNPzxtZNGC55u65Bis5EdwoCcti8szUjT2Mkn3BFh35cWmQyC5h",
  "key5": "664EEka2Sx1rifKvr1kMLgHTuD8K1MAXqtFsypBMzGkadBEZCXJ4K4n4S72GZuBCJGFf5nJ7sPitC9bTHKMae1Wq",
  "key6": "GiFEh4DcoCH1yya9gKqVbcVR8RZMzq1Xi6y422gNXKSDEURoFUH7cLEdcAAGHPmYCMBvqYLixtbjUrUhE94bd2E",
  "key7": "2rk7WuQhWW37SR9KuBe7mwTnXAvQYLw1J2G767fzeqyyGR97dwr64zoPFb7fsh3XcYXfv6yy3oE3PZAqPb5Sr9Ku",
  "key8": "4FxaaoGWPq4FPmFpf8X68qtTzxenMYGrBoyKm6rQux5rwpTxTo8B4Dj4neV6ig1KWJ3wkKcFTXiUNt8Kvnq8g73X",
  "key9": "4RPPSaGB7tELxKXanVsHk7nafket4q5d8uffcAzuKuWGab3nsejPRXhwfiRpNfDUYKy64brdA1QkLQMq8oEVeukn",
  "key10": "2CWN6C8JNwEBYXGXEQxLGXGTBh3yrY7KnCRuTzV9MoZxxe6mpNiJ8RyfjeWjVbNhwiLkE1VGp84ah4k9NpQVMRf3",
  "key11": "y2Ec1Eub4WkWEeRM3RCVojwyLWB8j8WBQk7vSFAbXAJBt8yhn6svSNrbqyBVqAnufBBPWM9Aq1pyn9JDuuAbAmu",
  "key12": "MT79Kf7vHfK4nZrGuivpjTskWEKcykzT4R1pmEpHRdCGwtWyM9qfYRpGyGTrktXvPbaRuz87XizGBer4X3FYqJw",
  "key13": "3cxUcjhETDE9rq5EwYep3zk4vqbCLLE5eThUJB1NmvZE7vqnnHrqSANH68quwT65LTbLy6wet1Pa3bj1GbAFnj3t",
  "key14": "3U2w85dqYYBhqv2ay3uiBV6tVpvraJob7CXgM6RauXMm2uEDybprY8rbwvWXSUuVDxHnXaNWM6X6a5bV1aQUJUTm",
  "key15": "yNWnG4b6QfZvf4jZQHahr7HkbtQ8wSPZVt12xTtFVaJ5ni2ZiS3RJZTGgWuW7EgKxEtqWwMvHKHqx1KMKEcMHt4",
  "key16": "339Sy238qxf394auXkLcpVC7bH5VVVRNYFJh3zYAaLinDpchPgJRcAyCuiWZhFiHikm1UYeQ87XSe4UtNu7fyvae",
  "key17": "2x7eBtRfL5BY7fyFQ93dqpi7Asqa8q1EbgVzBTBHW8vRraZWuR9mkamLBEsRWhj6oELkDzDTFJHWuPxAqacvAgdQ",
  "key18": "3Npxapj9aFpKNJ8yHhSZLKPdsLkgGhs8eXG6stjuVqkAYxLeCwNmc9NCCSuqdkcpoghpNwWSZPUAS3UkuXePzT31",
  "key19": "pFmRAa3YJVjPShnFHKBQGHexiaPqVdbwUo2snXhuAYYreMqgWwbjLAq949Hb65MgfUD5nVgpt1u6TK6VYskFEAR",
  "key20": "3FMatqyn5e4yPtRkyuKGFqR9F6bUkHT3UWogJbtQeiZSiPJYWzxkXKk8hRKwE7JUA5LrYbV4MCJcwQq33XLG9tA9",
  "key21": "3PAGnDrX9gCfJmPseSZyrmYQVxFtn737qQkp7C5RJZy3UXSB1nSUNGgBHALQPYF8ych8ryaLjV9S6s5v9pkMFo3s",
  "key22": "2cos2FDyY2MpT271SD5mNNKBuEkvJsMHLnFyn6FMMkFDmbmTZP2m1AAgPKjqSaCKX14sMYDt9c7qURKNLK9iaoK4",
  "key23": "2BtJ4F8waVkDjjYYgTv9kqUfktUx19znPfmBJU55ewMQLQbddJpW33kDra1C2iQX8Nj94jCRtEgYfvd6iHDqTtSZ",
  "key24": "z7nwtMoqu61AMET6CZaW9tBaAQcZE2NiSSLyag5Xm3oM3WU5eVXJ7iqxynazJscNxXm5fAVFJ5XKrveSSZwzaAk",
  "key25": "5eEXh8fvsX26S6UWeUAbcLUuik1Z6bBsuyvGQ34BRbdeabTvA91esr3nRRiVZQ1DChY72sQWbsTQCQCeEUoPGyso",
  "key26": "ud9cNt3zsLZHvVWQ5XnrMzwSN3AyTeU2yLwPzJyUUzBR3vsSPdCrE6XHHd92eHZEaSMEh9XC4HXiePKJnQBWdeu",
  "key27": "5jFBNJmiz8WsCV6EWgAFi5mZRX2W7xD7fDN92MEQbW3GuWUBWugv5rzVeLSJs8YP4VbXhUP9U47dyX6YZLxsuecg",
  "key28": "3UFsVWtNnwV2X9cZXSsFnE1rtNiMDRoKu5oEqyMrgonpZEF6ZShCXxCtDu6KiysHZ7fwhbvZT8ptJwybbTnQzP4b",
  "key29": "5dH1eVvm4PzKe88nU8won1Krbv1ajoWEXG3hUpkxXp5E9i5Gr8MuNBbeDxgnZtg6xfiBfFM7N5QEJmUnbcdFQCmz",
  "key30": "2wwFkpT4hcKopKLSQbB3tMGsHFPmo18yjEykGdsM7TXSi2XFwU1MJ7XswE7GcTAb5j3GNGXiDDZuVhZGxrsXEEPe",
  "key31": "3iz1XsFVt6gRd8iuFrrVkNjkFKMZ9frkNm8Afi97Giu3ZLiS5Q3LoNWEiJkREJMAGRDU3VacC9C8vueWJSYfC7U2",
  "key32": "3cR4AaxbJLki4bpR77BW3sNY4NiegYvtFkPxYzWh5bWsEevMvem7vqErxgpS6nBLhhmB8JRTFS11qkBSA5in62RN",
  "key33": "5kiEmxFQafVLUYho2oCRyT9RJAnNpgvyQnia5fMjayPbabh8kg3xQkKDUMKqjG9GXx6BXQyANrUXcVMcYvit9kxB",
  "key34": "4MZKCJkvXm4GPnpTWsLA9vXGMypTXRvTNXnQMJgBp9SEoZLVsLM7aMCLhwMJq27aEUafw2rfp3YEq2uWey5EeopX",
  "key35": "5Rm9VtUDBjNQkbXE3EiQ72qnQ9LXFgpdxog4n2BHVApVeaKtDxcaMjs1AYVRZQcL5qtCqhDCr1FswjSEWZb9pufV",
  "key36": "45zg4MQ2XTm6w3BTtvBjL19EMj8T3BrAoBYnYsiMCtfK7SLGpexk9KpKEgtuHPrfJTDaoTFjTm1usSWRsfpCNKUR",
  "key37": "5spHxHLpVNodaYXT4Kkia6CHsHUdmDrJo592F6VkegXxyaTgJaP7SDintSkFigUEZYadiWYLFP6jz7uACK8whU2a",
  "key38": "2UUjkSHGoP1U3jNU5FMF3YYZndtb8bqXUxpZEarkmdRYq8CFEMT2vjZmhjiypXPNJrMPNjPo22hPYsZgY7RAwKtc",
  "key39": "56Gdo5RqCzNrVZFgoZdCetMzCrgtKtUVcmcqLBkBjv5qA47JrHX9vq4huMrjkk9dAnW36Gfax75cC4maeeFbK8qe",
  "key40": "3x9JLpwTGMLqXYsu7kWfVnLMVxmhacanRXdXRtfYXNvBPkz66nGMQfQWsWCGWPmmtKZUHAGBYmtb14bv8oPhY99i"
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
