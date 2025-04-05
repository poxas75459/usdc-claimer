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
    "5TSkyjnYreTgfmBUGYmX86qzy2kxQNakDqY7zLwss6zxnd9f7fB47pmMS2rgFSzhCciNJyN6XWsWFB6ksU95ByHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "359TpVNtku2m5YzTp7Bg3NgLsGV1ARdEk3WJNxxHB9s2Vmavd19H7Bx1rK896QskM3nwS5rS4oRzJnRw3aHEhSDL",
  "key1": "YxkrtG3MXZBEjXbjQ2HENrEyrW7HoYDWHiCiaqsmofs8sFEGRTjaGATEckN1faBDXNgnapXuY5ozJvEJHYx22QL",
  "key2": "3fZtEamq7ot8nT5rqxUPSPFTha272mn6FzV9iq7s24EK11KSeLMDfzTuwGeV2Pww9gHYXoasnEJ1YhPwSPsRmHUX",
  "key3": "wPEQc3qX8BTyYfedN4wDFS6vyec74gTUUQvnjiLhXKmUr7xS6oDZfdPJygxcgopdXRfiuLjgpZxPJim54uX8eJh",
  "key4": "4QfppNsfqiDC8NsZPb727SpnpcUXbdKv2psvVESFy29Fyk8VnPRCHY1WsryHuJvdhKnDkCpddcqeXPfGikWnHFzs",
  "key5": "5h2t2XT5hupydP18zP1si7mNk2r3hN78kibqK3mYgw2CanAG27V4dsA7wGLMenk72tJkVWcziNcA2wd4iDbMbmDJ",
  "key6": "hMWPL3k6kDRRPsaAqQSaDTPKquiEGZAL9sFMFFWg19kEs9hW8fcAmsZL2Pum95o1s2iM2fpGtq6cpPW5s3prqxR",
  "key7": "4451zENRMnEpfLtkkqEc4iQJU2bTfqss53pY1gqfLpeEUgZnpFFrS1XhPmbZegcwBgpNT8fzA822rw5so9oZSz3L",
  "key8": "5QoGKjQBuuJsnpovLvuAwvX7gEy55npf3Q9QdtYxUFpRkYdY3Drm4spU24kW4Tbq4a21ZMMEew9U77XGCNKznYB8",
  "key9": "qsy68pSTiZbunYq9C3Rs5SndVbZZv34ERQDRhfboyMbUqnJQWfqd6FRqEUAayCgBWpM5fWusbuUba4HztUChKtL",
  "key10": "2CTzudsK8qqW6vgkrrSR8HLhEsGjb3kJe73bMu5yhbKvU8KXcWx3jBjEFFLad6rfWvK7qNkcapquj29bQymKcx9g",
  "key11": "24sWViLYYBbjK1HDjpZSeaZyiCPEhrcUcKa34Si62b6jD6oJ1v7h5kPxXzLCctNfHR6qyh5stSxfPVo6K6rbcJQR",
  "key12": "CU9JMN2iR4388ayQazTtXgcvynzyb3tomyukcuJ576ekVHPVjnAkyNA1Byx8qqVgGgiC5nVdP1WdCbjkBZryCSZ",
  "key13": "3bHpGVGgPVLYHKbYNixJySQzi3kywf1Dgiyqgee5YbBAKQJLr5R9pGtACi1uvJZpeyAu2nMHDh1SiBPh8b5TBLmy",
  "key14": "5StBJCR4AyVMd4wkUdFMHyCDe1wKpkc7eMPQkZwM38ug2QLR7NEuqaHUXZ6oKisgKAtnZA4C21mrqg3weDVZo1w7",
  "key15": "tnndgCFZSujtadqSEfdDA2qwLaLyUbeMSbucPxbaDJjez1cN3rUKMG9RTe3MNHDmKh8NCZ17WkXgag3QDjf2Fiu",
  "key16": "2TgHXRF9RxTdCSNGdfqQA3tbuAJxdzh6kfnVEMzK5sr8rfsN1th1ZtaeVUAu4oke7giL6WcRBD3q4reqKftpDqWZ",
  "key17": "4nw1pmB8pWeYGJryfvv3mGx5iRM1ddg17Ux8phbqJj69rZKBUhJccczQa3D92tvrhe3HE6BSumahrrj9DbPDapNf",
  "key18": "sbavw7AiH7mw1RspQDjY7w2ikFoH3k2xzKNDkqZ22VkFdT6HXiwuN1u4VWJhLq1Y2r9JUy1PPkWrGVSPUhsrWsv",
  "key19": "cdwGoUu28RZMmb1iNc7ueesGctjRZzLCvanQzxPuCdf2AS5bk15Xdj2BUhuBgirne4mEF1pDAibMMYnDKf3E7MH",
  "key20": "io9rybAgDjCZ4iHbxFRz79q9Lw541ezi6om52FDSuW6EvsbAKuhGHis2SFSoV3fZ1XXL8sJ7h3ixhvCwUEzh9j1",
  "key21": "2qdtD4ucPh98U4MkuPLqnNzr34Bd2Guh92LdRVXdrfXqkugHbz69vUq3yPsoobF5zU8LU2BaBYuU7bmBewAcTA9M",
  "key22": "3BNRsGJXePunXuAKGWD8ihxziaRG1mmzU6ZWhhn46Y5m6fZJwH7RVY2JVSA3j9rVmtrSFDEH3jC6N6E26DwZnKsE",
  "key23": "uLhGSgmUZZGnRAtWuhTqoYjG8cbRqYa9aB4ZozHiGetGMnXLXhRvUzxuCEnggUNv772SW1YDWnGU25QNVnwdwKz",
  "key24": "GHZoFJcZanEG75PAeecT9aLnSaNeipxJGBKSEyGj1MRKLDWg4f8pWzkwNDCBrxbNTnLqR7CuYALLhdSqPv8r5ef",
  "key25": "5CEsm8MHyru9oPJhb4qd53zxKidb9UC9FHfF2RgwN8JPSV7zRpjdE7c2YirF6UMd7N41kMV1ZzprAJhitygjq41",
  "key26": "4gKXrjV4XRazZrdYGskPXT5rJsskQi2u7umSpnD5LsczftVxpKoUeqXuUtKBCRgPdK86Gmw9GtX2v9ccjGu3TZw",
  "key27": "2tQCDxiz1QNNdywmh7j2gNMFwcq6GaW3fwpxrrfHFDNaBMEuHpjQYuLUCm5BbM6FpkWm5iyCT2ST5ZJrKYTBVDpy",
  "key28": "3k9gjgvVYXGWoidKbLxK7jPf9LTuog4XTQ9e6f8JqcTdaCRRKLhpMQpt8Q4GmxLMKMrqTuy7KYxUWNASnfn9h7Lb",
  "key29": "62SvuXPnq45nRPMof9jhk9L8GrcKkHe765hUNgi89Lj1GQU9Dietv3QmP5A7LG1qzUNcXHCMk42xNzAPErcifbC3",
  "key30": "3dgv2ktYWJNBzQi4SQsGA5KQR4furhJYdJhf5WrstG7PJvrKvxfNnLP6s7i56md9UWubKimkvQuLzFw5BNnEh3cT"
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
