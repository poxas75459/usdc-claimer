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
    "67cbHtfy5zxCqi13iF5DfUEQ4rYgATDC6KzvDe3uxNYZBpSt7fTS9ctL9JUiiDpB6KvFqtjLH2qV8wdUVHTzEocA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c6fMb6WauYufTt9JXfe2EP5HRisJAZj7FZCgErwwJog1aSFLHx6PueZ1hExzZeJ41aXRGawDit4QVDqumVFtwiR",
  "key1": "2KMDwZV88LGD4BYp1GQwL46bz7ouCMXGnpNakiNf9aSVvQx853eUqtLeZmhvKd7qkEM9g243DGaCWdzVgx2L9dZ9",
  "key2": "wS16P54wJspfsvi57kC78syRwmkX34N4eFVgTRudXAZExeGXCUYXBaX4dfFJVyvcRLTUtjn78m6Zcjq1vWgCz8Z",
  "key3": "3yQ6v5YLg6gw3Cn2BPq9f3cEj8jshLExCyDkunqVXCZeKSpHU459ynG6fhWbn9T5WtZ3rnNXqqWqWjjGBisZdUgm",
  "key4": "4U9Vbrb42LREhWjQ8wNeucu46dAh75DVMNgRPUtDjjKAKBzTRuqtDQmGxV28EVT6UN5iz1SWDg7uzbKa9W7AEw41",
  "key5": "QuzhqbSgv4G3DBgydMQ5bQeRzSUYKSwQ2S147ePtpVXGcJ6xfCro7dsAEPNbG5GAYaTd7vL5YQuEaAubHQykrwY",
  "key6": "2pmjUTJr7WuuZTDHgV58aAB4wr3zKnNxskBxN6QwBm9fzLEaeA2trxo4Qvy76kY3SWrHnaNvzM2hYKCrYkvoAn9E",
  "key7": "22NEcLNAH7wqza8PARpmu2c6XtGpJpMR5ZnPvomiNC3wUXmuqvAaUe8zhPcztTqjkgwiUG7S2TTJfqQ3exukHzpN",
  "key8": "RFKhhyrqG7w14PSyW27i99U7pGj4XV3Tc17xuLMDYA8ut3HQ7aT6Zwafvisr1Zropt9wd8hCUZMRY3TF9BjSfsN",
  "key9": "5uL1Qu7scuEPX48E16sCyHAVdVhbJ1AbkWdH8qEQyfuWBBULGQreiASeXqXMGmF6vWCTK5mGBN3i86fGKKvngB5t",
  "key10": "5acx5HRcWSXXUefi7RNsd6PcfdB8vhmyfPyR5K5M7KNTqiV2L7p1QUAsuXFssWpmZNWbqsNRXsWbSjF5kjXhUh1L",
  "key11": "eKKtZTZNAP1wBz27j6QbmKTAFvDbcLkgFxggrpyvanwKgmu6hFxWUfpM3WJb6oX3jA9HSQaMHwBpHym1ugHSVB6",
  "key12": "4K8G3aNLkSKDLGfLrEhNn1bu6RuK54sju2hJCfDjuHRg16RS3sPqMazUYcisMzAb42hLvpkxiqN6rMJEuQDavnw7",
  "key13": "5L2CNL1rSorHSKiDjYKrd2eLtuJ399iNbfs6rjqXbE1zcP9ZwXpU8MZwNbXn3q2G6dfRGEQDZq2CAUWpPx78Xuh3",
  "key14": "2dYBStVrJjWnJXJjdAsWfQxiLCZzHupPisCvu9E6i1mBsazzHBS77sz317nSmoPcKf45tPfzY6bv91GWLMU2QfsQ",
  "key15": "iwe7NNvfGwWAdJvHoVCS9znvA2GNS3reuewthBP9tSSRGnuHCydJWt9DkMMruuJ8aQsyxaUkJXKhbwAk6czodjN",
  "key16": "3SwucYrZo13e3JX2sNze6VunNvcDAJT9fZwQF7ZW5vbgkf1xkHqHp4DEvPp3kdnfLaNDyTua7txgD1zvQD8LZSaX",
  "key17": "2h3YNgu69veFgk9bQgm9tLWkZ2R8nsDmC9n4TWcVRimpQ7jq1bqdQAyuo1meCqBzHuE7L63YbsTyjoCakwiVxaNV",
  "key18": "2Ya3xRRuX2y5Ged6REs8aV3HXDJYLvYsK6NHYjTCQfERagtMtjFSKXoZ2DFmKWB7UC1uwtKE8kEPqDg6XCdtKFqT",
  "key19": "2bTGEe1ZKRPRPpaVSb6SYstSCQGz5DvWdaC5nj4RjJ7gB46z1jhTuCRMvz6Dxu7WtN1bkZv77d3jUwjMgYmJCNiE",
  "key20": "mZV47haeWuCdxfM6CYf2hZvgs64pPUYQ8pCrXtwYdhGinMcvWj6Ehn8oDTNSLdFabqnP9NBEc8GqJMZk13SU8Uu",
  "key21": "SNHitdLof6VfQGo9KLCpAchosecqPTXAXDYVUrSFir5XEWUZopqTV5LBYkXAaWETR5YD5emoYQsvuGKdVFpXhKS",
  "key22": "62xsx8XwY2NTiNa7XsRFr4aRdGPLCie55LKxrS3KkyBDUaiU6V8uVTUMVwYRajTku7jmkYWeYKUnAEF2WUzicgdV",
  "key23": "4PF82Bav8xaFKAHgkS4mawgCwLyGYE5P53PRNSqxgxwSvWudpWGRXQv6dGo2pp4EBGTfiLXfRsFbhc8ZHBa8aE1E",
  "key24": "5qhcccWeiY7aDNmKFk9j9WrAxfQJqeq1Hw8kJVF53vTh96X531hkK72cE9nW2VxAejRSmBj7iJYQRVaX1xCFfuPC",
  "key25": "45Q4FTDP5PYGpJWxSBqHe7pVQvio4FEzcF8HJVB8Reux2E6UNJMShERtdLZn8ndqDpUwocya9gj2HkPu8sbu1WH",
  "key26": "2q9nJoikZcJJADboBuwxsGTk3s93gAdLXAcKFsKqALJKzpHvM9MpusqfiY5841pU49qYfJqdxVwf17YyL262DQA1",
  "key27": "ooZAfq5jrheKGhdPD8vfmUn2Z5wLJMrE7ankUWq8CDqHjPynJkEDTHZrxzyR5QekoproqFXQ1gX4jpDYaUWJ3vv",
  "key28": "2ukrRjaAKp1ZV1X4JsitGdRtRqi8mUeR8HEBJ3gMdHYM7iip1qh67fdrtK1iVxL2dJER3iw9ePtt7ptNoJ722jxG",
  "key29": "5HMoiC4ZiDux3yYHcKTWUKVr2pGasWQouLKZB9qZRtGw5qYBytdPXfndSP6BX1Tnx4uYYXjZCbvzC6iKQb49piNX",
  "key30": "5VnyzokXD1oCHMR5BchxLvewxuPFF8JonDS2nyxF11jpXpww4DhaVA3ztdqMHPgrAfTK292Sj4TgQ99aNcgu9xfA",
  "key31": "41HqCHMzkKh2XXCDoZX9SDAPUuJg9JNFySrLmXwfYvrnA5R42cPhLNxV6MGmzM5xFHFGiwdPUtsx7Xi5WCwSU5qM",
  "key32": "2vHW4hydQqRZ9gW4G687HqDMcicFZyya4pwtt3qXRvNYJNYhPQdPue8ru2Xxa5pAGDuu4AEzEU3TzEb4PTMgYUeG",
  "key33": "Lyouox8x3EGzRjNJeT52ZAhsx1C9hL3T6haZZvNoVfqMWyFCsdcV7VCdZSMyHKXdi58w5zmDAK9ELnFc4H8bDT2",
  "key34": "2hponFD1oiqnx7QAbtcckxcmP1SHjumQZbrUM7XJCH1CtudMwC6FdzEaL31128Zu7qKuQfKfH1ivqSf3i3eftfjK",
  "key35": "2sfBEG3Fz5YedY1Jky85xEntRdS1oEu3MRVz2pEFhyV8s1YJSqdnYhhaiwwBrqH9zvWEBubY4P94HJkeqN13FtBS",
  "key36": "2DYoBzo6nv5JYmHmu9ExfJHM4FfMybYKM5Tm1s9L3d72afvqnbXXxdzHLRvt9nrNzTVrzBALauxePTR7bAoeHKSh",
  "key37": "2XDH7yDzBQLTL5wjxX9PnrPjUkutpiEcD4NoWGP4UqTz3XpZTNN3zVFqvvVxN13mUa8M3qrFt4239AZG4xHyQkUV",
  "key38": "61djRDYxJEHXFNeLdCh7AHaLTwgDTCrTTNi7MwCkHirGhgniXEwvPkL7g39QFvMK69GgrSE6MKkgvXMPFtuuUYeQ",
  "key39": "62fhRJFtULmG6amxSwAAY6eA2FnCdaMPeJYE77F7onv23rfmV2GwS4gN1YZ3MAz9w4smzoFSMhs9JPWBCgpHF6Aa",
  "key40": "278BYsxFHKSqL75zT1MMRM3S3zyoSCSEnyNt1LmVPYzBJpi9LjEymUagsWd5K8GUsfxnWTG5p5sHhfVVXKYjFVex",
  "key41": "3FS5cYpmrH5NhSaZbwhRUH514XgmQnPLZohDxSFXhZ7Mh2YqPXcJxWKuofcCYUL3gdJ6W8UpzPUov3rwx5Tbobba",
  "key42": "3PRvUJTdRQdT4SQBgqkmkV2APUe4JmtRQs4i2Pi9Zk5bBwH5zTDGN3GBq8V6Fykfw33MLg6GunjRBvBsH5e2vC7L",
  "key43": "3ioKLDMFaaxWcBUCTzicf72gjVBVmPaQoo48RotT1Z2oAQ7b4CnPfwQw5i9KGTT5C2M4VJbvCancGWt2HLwPwxf5",
  "key44": "6fzevqPuaSHbwKMBetSSWq5Vgb4qCo9zcPoLvMFgL3ozRrTXuhUKceFB4eyBLfBbzQHq8MLjrrMxyxywBuLKgJY",
  "key45": "3qzG9hHXRW1cMk4hJGB7cmnmWmsEirtutNpKkXMCoX4BHvK61p9qQ7pjh6NDfq3ueUPJEfE8DRHnSrjnGc4ptKnP",
  "key46": "MyyrhGquFSDT2Lo3KT9Dcab9k1UrsuybVvwKUydXcGNE54uMynyo3CsS3WXxGVeYsWc4Jmc351tV6FxmHg1wk1F",
  "key47": "5APgxsnCyxqaTZvuwzLRktUhmHDcgiyT9yaZwQyvLyH1YkYq57sN8huA4pXM6gDc6DSJLDqRBGZsNTqgvPmkDUu6"
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
