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
    "3SPPsLXwRJ4HTpaGVJFugJ2FxoRxXcmm4kfGbyPjTb3hnh14XnuVXpoYx2VYCqFXSqHKUsYfgrQ26jV5Ae2RW42s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "216ABi9g93cNgPhoh6t58GVWdLdvpZFYSvw37WqesLArF2YxwHFE6wMNL12Jqn8AZMcwSgm7HxNs8P6DT4qFW9yB",
  "key1": "4aJbYFmRvWK4RU8AKjG9UdN9zp6KbvfHR4DAgG1P7yG2PsL7fjNVvbezGNcq3EXyeRXzsh5psAeFK2RSoCEJkWfB",
  "key2": "2HzLrPmmGhQG8zyqZhDugkHUFv1xosP9Vj8NMqvPet5qN8cZ7UimvAfMCNF7nA3MHGkGiH8BD5zdR5CRsWk1NbN1",
  "key3": "4yPCQQg5c3DLdoNRksz8T3wVxKqsgmmj4yJt4EZZah5BdRwF9cmdLuan8F2LU43SKye162BLqyoLuim3LHFZCv2q",
  "key4": "4Wdnq9PtvmaSycCTLcMaHATaHkwTzpbVAdcHYso6gehd4UZpENj251CicSCDKne7FbPT8RZpmwGxkjMso7B8eJQy",
  "key5": "3Y55nxDkEqmTbwH1QagFDnrrxPdMgkm4DuqQEzfCDKeMUAuKxqFQMpNNyMPKZoq6J6s4coKvUuEpRp11ui5AqbaA",
  "key6": "34zQ2db6WDMh4y3eLE3WqGfX4eERLVE9eHNE8FbVf4NjnRBktawq6dq1nNL8EknnyG3dYdSf8KH9zWXfigS1dVhs",
  "key7": "3cthiGhqLgyrxYD3Q2vvGkgXnKEmC11YY9e81TwZbPCnz1c7LNwmFyrXByjoJCdUssBJrzWpQ9J2oJmLzZNoFHPp",
  "key8": "54vwTsRBQCgXcsWPEmH5rZfdc1wwMhFddeTFudcQhfhMKhooAxxNxkXkdxoURnoGt5EnRoYCaJS8PSg1EkmWk3iQ",
  "key9": "2iHUHdu9yQP3x3igENwRn8urhjxNVABwtxXwQfyAgL7KvuRvmyS1GDxq3sXYbbo93x6EF79LhSz8uteTara5S6uu",
  "key10": "24LW5fRYMi5gnhaKGYB4qApSHLs6jFAe9xhsb98TSBk3uUT6qKqJ55AzurKSmNoHoeUDtjxiznvvKzrU2wR2FnHG",
  "key11": "3NTA4i6hNF8FknCLq2ydjzMxN2ztynDSt34nvfzpA4ku8e3TWjPqPveq9RS57w8ZvaaXVBwQCctEPqTiCVsnu6si",
  "key12": "2wdo1XZpWk95yuEcJEdgwBsnKK9ixFZqFbYVsbkfo6hDV26C25YjA2jfFuZgVP346a98BoDx5zPcA3GjeRfBnDWh",
  "key13": "3TmkokaJ18nVVSi2SHcrGd1tpZVFdrVSkmRABKWhMDZdjkqojeMfq8RmjYRWreCUh9PDAds9JV3ZW5d4nkfBTko",
  "key14": "QP6GJrm141aqFE5rZrp2wEswpYrHBpaP5hqHfQt2xEitqfVBbkYupDPN6e5iu1wd9qvB8Xd2fnLf2HXBYKwdJ6u",
  "key15": "2oko1KTHG1yKLTGtFiwALRaQ5qhq9d8MUnbAYUhAu2oXtbRm7jPgqBfzHtyyxNNYYrKeTZLwRocptxjwQFoshrHA",
  "key16": "hVd5zmmWYNVcanfWsbTepMA3dgE8o85mW57moiyRf4kPFazjRZeajL29YSEVt6povc6hNUnaKxJ31KtB1MGBJe6",
  "key17": "y2KzW1svuUsUW7AH7AjA8tgHLpc1M12Qg27Ya65wtLwhS96PrH8g4ZxsNc2Wvm84bePzEUgfRUeiwNAaPa9BC4x",
  "key18": "2mf7q1U6MBbMVCBuVPYY3fkp3Uw4v7NAQx4GFPh8coZu5x7efAfdgSATxWFhoYhGAC5kNz7m1SiRyobKgxhHaFkY",
  "key19": "4ve4Xusm6kAgNmHJngnFW8Yo79s944ZFZ94iqJyHj6szMPoAdhTkx8vM78ykzkapgYURRELzpKsuUeDmPymZEH3k",
  "key20": "3JLdKWKN8CH9NJrsSBJXQPvF8t29r15qaqPvhUBSg64yfgVDPcX53HCJhHUaQmGUDNCFivGGDWfSnwpQ2JtZCcWB",
  "key21": "hMmv8RCk6Jq4ThfEoe1VPQSNJmSg1MYQtzAfWhTXRxkWJj7oVPdQEM6KyCtFeQ3hLpKcrFFyskgKjDnFNDTziQh",
  "key22": "X6JSz4UWe19pZpmBpfxRs9VDJ5f8qNwCL7gNryVHWAot7fN7uXbrbFyYfmigSudtgRGTRHyCgH2GDC7RXfBCSrN",
  "key23": "5QGtJnCpmo53dAgHerZ4uxqgJxUwa1UwXaTum43hA1kGrECkUVLMtdMgWMF2J9GHjk3o1f9Dume7gW6cPHQVgivx",
  "key24": "3rH33FfPc5X9hrjqhi9KzeeHCibpZYn5DgFPtBWjS1kKJVrdVF2XhWUnfkRKmB3y7mLnyzTPC16pz9ypfEXgrqAk",
  "key25": "5KJg8eSohRToatKECFmn5ywYEJDEV7fGAiAAbtkxKkwcxhSiyCLuTG6feYqHtivnEu7GSaw1xw351LMvnp9762hB",
  "key26": "PU3QdKDfh3AZRUwG7mzzaPhAmSTmx47CGs77onaHFjnoKVsMvz9WdccZVLRvGodQufHgw3J7GZzXK6DCLx6rMeX",
  "key27": "4jiEXQnBiWCVZqrotwWHMv8TuymhfAjDoyZkc2XzjewTJqGxFCSf4h7xeQfYpTsfajp4QGc19QYDGRcxaAuKRMET",
  "key28": "316c1hC2noSfwUTfC5e5rTiPXg7boSb1oX8zgg8RNAhQTksJWGEPFvrMWq1ZXXzcfDdBYgssgQ51PX8m2j97ucxb",
  "key29": "26fEVPUbqNiN4wQYfEYQa19JPK6qy3nxuP78QXS8rFXWYskT3CTUKtzsaG1qMymWp74F2nfnaqjERMjvK1TAXc8i"
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
