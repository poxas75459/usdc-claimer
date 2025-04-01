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
    "3mM7G66mG6ejDviEA46gFnZFCfm1xxbhk3ffj3Lr6z7Yr4Kgk85GzAcyvnvjeh2azNWgUuuMpVcWexRCmpktcjcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T6wxMcqo3PgreeiYV9Djs6oEHAeLsJmJe4VQnx4iLQWkqnuj9WC76JDYrP3nVNdd6fUQLwzZ2EmfzeLeSwjgVkv",
  "key1": "4UTqwz8P7iqHZsbMYdzPhaWkH93RzkGo1kzrEsd8DFBsCHxhBwEPU9T9DG8H5jhmwxKBvEwtPW4JEXHHc5Amz1aS",
  "key2": "4s3gtmQtGzKDdmtJ9au7XpddmiBtLLw7nQ1L3BvhQb8weBTWHZvHsnYaPHUvpZESemPxbMgtTEDdvx42Pfd3JsCZ",
  "key3": "3bEMLd6P9Aj6SGfLykyQ1ASvYGnJX8eGgKjNduJ6sv5xmXPPQsa3udaCkRzJFbgQ9z5UhZhLMVcoaMpFRSvkKhhr",
  "key4": "47RjbnEXfrYDLXEZxeoNmEhaP1oa4WizFJyeihLmGVEbbddUR28n9o515hJqewWZcGijZfrN58xFnsgeJQXBUGaG",
  "key5": "3ZVL72PueG1H9RA5EGqAdxJ93eJ3wF7zNTMnHnaDPGyU1uSUp5uMhFoi71kyvsuTE1Q5DzNPN1jeP7qXQkA24Lfk",
  "key6": "3xnHyAvNRcr2EP5rvurUm1nQxQ9vKGH4xEhsygiWJ9toGLQm5E8KpQ4qcpnykv49ERukkFeZ1HXr9Zj151vZvMbr",
  "key7": "5Cw6hZkT5xqq4hSoYzT88DhPfJVeR3Q7fMhPdYugcJmNyv8pvTrW4vNNAf5ysJjcfCW9c1JnaLSYmwE3aA8ZsoL3",
  "key8": "44ZFncfbbBLjqAQRj7iD7YLjFvJN3JHFXi84hEajC1buowvAFTej9BRJK57h5MFCb5vedBtb5qpDEUaV8yVz7dzp",
  "key9": "5HVpC3uufSTAA1SCdbHgtAmzosF8gtMmFVS17SBjavtDJKTPq4JhhVpC9PD5u44WwhguV9pM9RCcEuo5nkkVXH6Q",
  "key10": "2ddLzmq1zvg36u8di9qpeW3F7vYWhxXUKYE8XkaqEWDQzGnvLj3B3ohyA52Leqaah4RYRAkw6iGWgjn52oFUCCLJ",
  "key11": "6nQT4hwJbWczLxbwkf76b9NUPghimr5geKRNksUsSeWwBLSv7GtsUf6cGnYw7d7GfPZHUMYpJCEPQE7rysRW7z7",
  "key12": "4JJHykSSHs9vuSL1PkTx2WkcLpUSytwr6XoQzVXjDZiqosqwK1RHJhzuoybhZKX9EzCxPEbhyLuyqj6hscRfpLew",
  "key13": "64GgJw6d4wpnVBJFAfs9wt17RgJJTyWAkWr8xJiMCfszGdvtbRZ7sTVbkSNCsuMk9rju4tDdgxqA61PZnVEQ9uUx",
  "key14": "2RkRwzQtkcCMaPPK2qLCZKnsCgUEZjgUq9owT17es9rHFSX3f6fHwnMrKiJrySkiRLVz46iBeZnfkuuMahchpC2a",
  "key15": "3enYuKPHHnvjzXAb3tShLkgZroPLtRuyNUKRh1ZwHesWnkrZgBPe7mwaiRisja2K9mhy1Q4AZE7zVGsr4ASokoUU",
  "key16": "5Kg55fL945bEF2nqb1tc1WgxQAUKhhXUz5M6fAxDzi6vz8wMHLt3jP1BHThGEPBdCKCfqAT9ZYyzqPsPj1zvwaxw",
  "key17": "3bqbAQZ2za6oXYdFMzjCM51FAhRPev9XPAuWCHedK8RTXhMGdCYatxdwzBvvkwXDVsunYcKnMZo6iGShGYdUyscB",
  "key18": "3nRsFCoLr34vmB4hoeWutyjKoMXR7D4u8ZAKAG47SsZvJrYoPEpsFgWEmQgVTmZnsZC3KqLGUyMJHyayPjbdi6Cd",
  "key19": "4B8phXEi8rR7iXBm2QrzSFus6x1LFEk6j3B2Ajbk94ejJg8KAWbKVVeZEq2qTduABcaYQj6WER2fK3CiyQgUcyzo",
  "key20": "5SWhmPvLX8G8JpL7tRzxntkdSurPBNA3SzazwH4MZ6pScAsDPoxN9r81mFLpPnpw66xx29Wugpmpxxq69sW9pmw7",
  "key21": "b8LmAs1X5oDHM8KiWf4LBRk9j579Yiyj8J3JYfEXzhfHZu1ijJAHcLbZS4shSZgB9hk9ugKPD1DxTJCPATkGmRq",
  "key22": "3ByusNoGfqMaZyQsPtjFejhYMVBSyX1KZiorYgK354zUyUgCWuuExNzMEkDt9YeboHeQj77dsvSrdXAjwNAST8Hd",
  "key23": "pxy18YSQA68S93SVnu7RSwDdwPYhZtDPvF7ZoKsgN4XghEJGfgNMigMMyUEWHuaYZbwXvXCKQbMdHomqkGdAHnG",
  "key24": "23ymvvuvM7SUUkjScU98XS5a6NKnZ4Lq3FcNFNGTNhd9dJUf5pD7DW4ZxPEcp1UqfhKGgASL1aWM4SPvseQxGHR6",
  "key25": "S5kofKF52xDhpYGA8VfgjuvGsVc1RPNHkfQgsMjVqxG3nbMSonQczQtyMxGD1NBf1K16bHoWHLB5i6yNV3uD4ft"
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
