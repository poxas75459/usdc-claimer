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
    "3nisVELg2MDXDVZVuY8Ms3c9Qw7TSpLNpHxDTKmt7KCqF15wC4H2zXLaaEiC8yGEemUcvB2BYyj3qGpjW397m2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4obSVn6qViDNvLGN6tD3ZYU1x9Re5BL91LV2GozjTZ4WjqPrL1sZDfAmNMza1WLpHnu6ZpSZQCN6hUuWE5v7wdkG",
  "key1": "3hQfRgGYCeBJKRVaJohFx7HiCzsyN2M9Hx36K8WoeC5Lb3KLCrrudun2Tm7DvVysLgs67ia7F3ABQcHhuu6yxwim",
  "key2": "457DsMKtDR2Yxa6Ht6Mr7D2JYr1LBRy3jAAqX4SH6uQcfAYg3KLcnDpTNvZEKLq7rVpDMpFxEi7D8pqV9FVQKyWE",
  "key3": "643HirKqQvGvcMm4emhjzZ3eHUafVM4ndr6so1sj35RCTVw4xBgpi8zGrZrWY1oQhS4PDLLrmrmTHdL1qPfiCewq",
  "key4": "5bbEPVjh7eDjfX3HyVkQ97opCPT7DR3TDakkPutNtToXCtRddRtivJSY7ahbr5dRWh2863poeKyZRyqEakRyA7jJ",
  "key5": "32KfiZUdYmAfAyobyfoC36EQTzU5hvofrKdTpBo1jfC3UsfpAn1HuKtidK335m7k37Nkfc3FWksEhkD2BnknNbFz",
  "key6": "36H1XmAXvGmWNjWhGQtXNcao5YhXKDzocbeNsN9ZePMMcdPorAHrg7kT3iQB18Ukh1jfP4Mgu2zWTpZVvKwYKcE5",
  "key7": "2VNKnFB8B9jHX7HrtXj5JoA1BCrwXp416X8HXs1PNAA9vuukQy3LPpu5jwD43y38iTukvcb6abHABdPre13gQoun",
  "key8": "4TSWsC9UwhJywCphTZzuT8bQTJ3YC5x18hR7fXpa7h81eTLTH8aJGhDwr38AwSQBYjmkaguoN6JHyCSGX2WqsHmS",
  "key9": "5XKkogys1JorZa4nVHnnd6659njEMymMSoHmzXK618ZwyYUXnDwpup2VVoKWUPBgJmLPpHCEHym7wCrRnAQ4H1uG",
  "key10": "2prnX6g9TAkpRWgiFZb68KQjwdGupMv5da3tJn79YDiMzXrH6PNrfdhcq2um5frC9DUEpUCHhuNCZwZ69LmGevYw",
  "key11": "LTkPiqVovy5vzjm1pCh3AQxFtDERAmnypvnpHuXLPWbS9J97SDE969Bai6S8HcCbQzC9nwuC3abaNt15AWNPpp8",
  "key12": "5cvaucbGLCcK5vzWQWbavvhk1WjcWZan6kksa6RS98G3h4XadK9D9krKGNFhLGApdA5mqDXmZJxSbu2HutCBqD6t",
  "key13": "2rFR915wUPKVFTKZ9kg87kbKD63YwKDwoquZsVAyS6F9qgJx6FMZ6XRhjDjzUc6QkbFEWkSbfHMChV7GhULqLkGp",
  "key14": "3eETbV3jkG6CS2bj4hLo7yVPBVT7rJUFMpa5x5UEBxSgP99RyyzRxQgLfqaEejtKdee66FmicAzQunc4nGJPSnG4",
  "key15": "3w3SaxLDqt8ex27QK6x1YX9QMS5jiGV2Y1emQFJHK56yJRWgGC3af6gp4oZ5JLJYnKKYRFnYFZ4xy7aGaTQVze2Y",
  "key16": "42HbKxeJqq2Km4Vv8erkNMZ72aCwbv5LeWt9x4mQdYHgS8sG7ber3KK5xU7hVmpBsnFpYd8u21tyV3LczKiESYMv",
  "key17": "5GVN8xmNXyxZVpvK3QbDJ2ctqPRdXxMMm7HpaUPfkipuKzjAT4eorAVN2gUPHYDnjpMrJtCfG7Gxkbqn597aJCkX",
  "key18": "3yxThB8aC6Ho55teM4Ma3DDrecL9c9eVS9mnnExJpj9Q8F5zKnz5hpKewBxM7z3t99gp8vQEGCFoNTcPzUcmUiDc",
  "key19": "5o6nbJjcqAj4aPCrQDzei8VnXTUfwzAhR9PQaEYZ7JdsqqGrW8xDT54vgZFJ5ovkeEscbWSLMWAe9wnp5YuoetEo",
  "key20": "3RKFMNh5ZCsdmkkn8MF2sEHHLypVjbdHLEVBH1zbPetCQJ46av7XrXq6WJjQSefYZLnLxNkdCP9DRr4gfS2qTa4x",
  "key21": "Q2M1LQhZx68uR5WuP62rBCr5TwoqKv4jKpLtnbf7G3jsG5iqcCJRVEW45m1uCZzxecEeLs8nPMV38Y8fyQwfE5t",
  "key22": "QL4DVSdaeYJd7MnJ7Skv9K2LSDS3aBsGbcyZtazx5ggABdEE6xDBiStx2fxBv5mFgfQ7nVQ9vqiKycaas4aCf6G",
  "key23": "553CdCFd9o53ch7ttiAd7D7SP6usbxH688BqoFYtujgZ8Do3y7toYFsYZDBiwkdirgGqKgbPE8TArrVdnSFzJjZC",
  "key24": "4ExcugCR89TQNkE57P3v32rLBcEgik9474mgbgTtrqhP9HLjqH6V5h47j4wF4UzpC8FPFRchsTAwLqtQx4hAPEVQ"
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
