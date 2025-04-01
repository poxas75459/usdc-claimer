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
    "3jj8Ry15tRb6h13RwCKeTz877o2JxZKoL5J76QQRiNA7LRhKN3qxo7U24b8XPeQWTXKa5bTWXtHwqJPDLuxS8C4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5osAvugCdcy2vDpVrdb214FEfK2m3fByA8WpuKy2eKj47pirb8sDyhZD4y8vmqBt2W3ezithoxr8h1gAt5Gu3ytf",
  "key1": "3UpsADNAJo5RGjaxwpNszmrk7pX9z5wXsyGScfG9w2vVpQRzRJVXTiKapUGCLK12HGrA49Crxg28dkst9EWmMGuc",
  "key2": "jA3TonjwmXfR2VRtMXqng9pYdS7mStfVfW98kqYjyy8SCAXjo7k55iWPTDtVAwaCDNTP5MDzWQayRsfknkQdMZ8",
  "key3": "3wrB1RmqQmWFwbWZzZk1ESfTuxzk8X5RKYSecDNkoDBauaQZQuWYxe33KSLJKWkrRUbUZ84LjCwAJTaHd3stmCPD",
  "key4": "2DPP62GeDhBHGVtsqBPZU2QBG6jW45xKGzkdPCziCw29E9d8iB9iEuuRw3mkXqQojV2tWiFyK4rgXnQKykjJiAL9",
  "key5": "4kfyAiuhWhb31wqFyWziMvL2kg2tUuThmQZazRBZdM1RCAVeA3dsv89AHNx3KTVgLuqSpwx6aeGmKjPFHYp5DRCh",
  "key6": "WuJhgE9ESfAcBGXiQLx5aqKDJavHd3nutKZi7P9TX9rr6v7q41gks289xSfR3fXrbjUrejsJq9q5ED4xH4mvVHM",
  "key7": "3rThagkPUnHf9KWVTzWmKLEAoLuvJD2idP6383gcmR2hoPJCthWYjqWwtemuceEsyTsXDXChifNyQBotxbGJjkKj",
  "key8": "2YADhAAV9YqgEfn4Z1L9VyZY5WG7MamDZySgnJdHzNgTPfAzbqe3RWFpwu5TjM2kqRTV51TotZV4edMbqpHC6Aoh",
  "key9": "5YTGJoEX9MCEF5hcesM5mSoSEuk1CQwxdkJ3U1TQgKKigcBicjzvhtHBLFQFLYjihWPQGDZFBrqmYwFbtTrBTcMj",
  "key10": "sYsuMMw6DsxieJK9Xm62ECs1ZTAVJtyg6QCUK78vwd7oiEYjr3GXgruwjTEjUFPdpHQLezmLBJgwGh8hvs3whz9",
  "key11": "2tB9wMSSodQYHFUkXgsca81q2Dr7RFKrCRMcY5WNmd9jYsbxJXH4wJuhcmVPoi6Z1oyH8E1X7wGpUexB8we2K3HY",
  "key12": "2tRFmSVCqye2wuEjbzos949YMkwzqrFuBwvDzbKqqJXLvXy9xqGfMwuLj6tZxpsz4P8aQMoH1SWTHEgQ9181Bvdc",
  "key13": "4QsP8bsrCWHHunVjb8uoq9bWGEQ8KvQ8d2cSmVcL6TFm1APsU2GrG38neJSez49EBbRthLZ8RzStE69d3yJtF36y",
  "key14": "49wNQRyjXNfP9hmmFfTaya8NLfQTQbgaqrwNsisuonjEGkDfT1J4Yg9xcfsimkubCRJuJfDuEFyihQnp6WZ6WN1J",
  "key15": "2BFC2CC3gnVAzWpLUg4m7FM8fhF9HU5ZLZGiBAoMtdyUvaLxdBCEwoEvQF6Fh4tG5rUkan2jW5TrPukjuVkDRPWD",
  "key16": "3DBYY8AgxunMCqVoRZjDn5RDukXLQzTthh8WWeXJnKcwd31JEvzd2MJ1ZrKte4GHLUR1cTJNb8f4XSJkZvzVtboB",
  "key17": "3XPyCKQwaJWxR5Asj8rkjmBpWFCr4G7aH7TEpnXCKYMVqSrcHN9vWYW2oMYXpRzWSZxzHj243yX2bJGMUSMoW8PS",
  "key18": "4Ee6hGmsCpxb8LfXuYiKETXdDBKD8xXCSkxKH68NHM2bYx3H5ajXx7mLqMfocSt5b2aSi9uqBKqbb4cZZXd5Drna",
  "key19": "5pK6cWJCNvPhDBZjh2PLkMaXidQfXWdLNfGHW4fNt5HY5tsxagh1MrBRmEocfVV1gZGV7wTVVcKCJpU122d22aKn",
  "key20": "iTmUy7MTs2bv7XNaP8Tk7bh4bJD47KJ9qWwSGwwdd8Sf3MTSQApu5MRBgVgSpsro4L1oi8iH8mD4nZbiFPg9osR",
  "key21": "5DHq1umeue63ACxhDAzcbqfRpiyTU5cRKrU6fDnXmuXVamGBZWJxAt6K83Uo5JcSsbM9FMvRG7k8EyuXdUkjdJYN",
  "key22": "3iVosqrsHFsunEfe5EoaXdU4meCqaFWWcRXpwU6mkctVwLn834ytZWQX4JLMy5YS4ZUV5j3FaXhc5vXHFRJhgYzh",
  "key23": "4sZyXwkKzbFfMygoAv8YJWqqNUmho83M26h432Qyq14zbkC9J527UiyfQpA2TXrb1N1DFpnWxuc17HjtRb9mfSfQ",
  "key24": "4bXbK81mwdxK8GyxVioRiscDRNJhQsKK2ZKumvT2LVThp9X3a2Sf4XX8cpoQrgr5ULYSpa7A4DpCerRLnzCq6dS6",
  "key25": "3y6BJbqz8zFRCFsns4z1ahrytJkrbxTAUykzgGjudNDdKJgHzCmzhHkT5yzU4SvsaQE4uGqVx8vSS2TYP9MChb4A",
  "key26": "2Vcyncr7Rw1fR8Av7ar1Auzt5m3HeXCFroLafRMPvUTuSNm24JtUDRYcwb2qCpjXi2VTVcRzfUKND1fUZmqsnbXj",
  "key27": "65sBSGa1MUD69eLDiVWPHueG4xBdGp7dNCRYQB6buA7Wff6UDbBPJeb2RdBd7uNDs1arW94mXZBcePVik6qKBCy3"
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
