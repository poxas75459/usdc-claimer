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
    "2QB3jmiWGvbhdUJw7urgRc79gKMdGUEu1VANzb9ouFsy2xkQWdHTxeSAd7yp4vDDdvpZYMnX5K6qx7FrzmTD9X43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "379fPG58FpfCQFVF7D63uBBQKsQ95aKFZdoJMGesqhqfQ2YRxFkVH8UFzKeVxAixLSZbGewEZbP7C2RccPg1H2j2",
  "key1": "4gzf2G985bjQ5oZf7Fkz214LrB5KHzwo78V3bQrefrosDxCmthLuTRwTphdZjRToPTyzQdX355H3cvFLHJFkTqTn",
  "key2": "3LdoUT6kMTbD1hTBVwwg9PFqRYf733bFed4dDDmD9ctUQVxfB23jJVW5KeFYnW7Dh6MLC5Q4SVmmJ8hNyussGAFU",
  "key3": "3EFxqPXEjK9TkpPY7BfhrUT7N67KFDm83zzqTXnQZd7MCmBvGzJYmQHrpbDjd2Cg3K7Tk76W9P3dfiEnGAqsRTBu",
  "key4": "4X7SV7nw6c6iNRdz6zF7bXwZQ3Y1oJKv7KQeDAKon6Za4W1uhkoSbrBhBfknzTESvgx8QRfmKRvUKkCjiqjKjgYF",
  "key5": "NJD5dURMFZsR6bUmM2J6i4vjZ9rUQDZagdH3EWXK5pYs8J7HDDmqQCEfnLw3UxCyLceCDxDEQWbRcwB3HRaQAaZ",
  "key6": "4DL1PBsq9qJQp5axF1grqyhnHW6m89hrUxLzn8zcLC7YLiVHr8vw7z2dhMzuxpCiumUq6V5APq99qZPgumjKzaoA",
  "key7": "5rh1QcesY2ZyXy89RR8iGsXkjtjPPC1H7GLHAmsNEqHz3EYATJZGrxvcTgmjfuhnGLtXzMLLwMBmzmuTNqBk4iu3",
  "key8": "LoGc8LGZNJsGCxYF9eQqcFFZsLBb4TsqTJUc4RpyEMB5AhHEBczQDKiQuh5XGaUP9N1QwYX8d3r9xDhD9eB2Grx",
  "key9": "vmzoAawKuuQ7qorBieo5PA9Dr44JBUGFbUNkFZS9rhQxz43rxQTkmQ14GdN2qMoTLzJXXEZdkMqwskQYr9K5F3U",
  "key10": "Y7mGL1b7pnCL7JT5QGWUducXkLmLY4j9Y4UijHrW42pfU5Yhxu3rpPoY4XNWnmrCvR3BFdTRzYaL2ErTKCUAsp3",
  "key11": "3Hu8a3cuSMwCLPsiG72D3VE9xjZMkqkDZWCgnC5bDTTtwNEav2UAF7ySqo9qcUr3V3oUH5wyDkXdGKMDov2NmAMJ",
  "key12": "4LqJCdSuq9ZizXdQCw7RJGbk4Z4FZedbDPA8YDQqYGa9zRfMz2ZxxdoKpXZgLtsX82iMdbsjyeWzg1nsVnga2Rys",
  "key13": "AAmmbNXb5r2DCJySehQfVxhSJmUru7F4GoGvLxp37CLqNJTH5XtVcZT2UBG8xSaUzF5b5dkcNho2NcVWzuz6LLR",
  "key14": "2bhAeWP66f4e4RCRuAmh2vbnRrthr4AH8FTcyRB54mnVknFDmNfkn7n5YJ7DAhoPTUNnh7ZLfXJqWCpbvFcjXuwj",
  "key15": "2YBBcTP9KbdK296fzuM5taQ7zhaT7JidGexTtmqrQBpkup8TK9PTEoRSQzzem6Q5f3wBUADg9EDdjZYwTKVFp3GY",
  "key16": "5Dj3iFafe5Ciy5wwtkCicdefcREBX1U3WVZBhehTU8WZU9GAdNYCz6FV1Cy1NBEMNYFhbYTDcRTgZQACV5c9bsGX",
  "key17": "3aTFa37HjwHWzutbogMdeCdtFu9EjdzkHRJE6pD4bPHTPsNQSppoMQUAWcPM9hhu1mNi3StxsXroyJGAdkq6LQ6C",
  "key18": "2wMCNygrwh47ch2BXMbcvvdkeDbcdRhYfhoGUEj1WWgcryq8LNkyyCj85gfqX5xYcoefzWpy72DwAgvAqvKKFgXB",
  "key19": "AE2cVxE3xKriUxPR7PbKTZFD9kEvnmwLeKurxsnWvkZptyRpTtDKy7qiZRp81L3dHw59ecFLvuM3rDJT69i8thA",
  "key20": "3XNs13FHwchUs3rexWE3hcUPyrgPK3tLcVqU9L6qAfirY9Gy43NssMqPeRq8u2WT8syHZ14vFHrfoDg8K5p1jR34",
  "key21": "39Zxx6u9GH5V21P9S3YHeoDRufts8FvNx5hqRmyD2DPTAdfbfjy6rbcDfTQygH6YdAq6jWnU5CR3VZidvXU9m585",
  "key22": "2SBZkGxdn9rvbMWdLrYbGv6yJC1ST9zEXoW4Dx8b6Pgh5GceJMggEQ2vMgZeKtUCRZ5543NpCzot9Aow6RpzCvZL",
  "key23": "5HbqjSf5hTCx3s7uPXEHAJUiggRtEP5g15sa8MiXNM3D5BCBDEfSEx7TgpnjT7gsAhJcHsRZ8CsQhqCDyMpFG1h9",
  "key24": "4dieDS1gfu1aBioq61xPLZpn3DB1agtokmTZHKMpNy5h9rhBEZL6cgKz7frB8EfKM3LMfLdtkzbPkopjHkJKQaKY",
  "key25": "8LtD9RG4Npt8L7DmVQDzJjkKjP97oY9xSiC6XbNzNP7S5oYmTvqwYqZDqukgTQ9zt69mEeJdc6Zv1TLQpKkakRG"
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
