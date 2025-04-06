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
    "3eLDLNTZaRT4Kmqx1eHU54hxh9xLinpvn2z8H92KurDoauFXWqntDUv3xaHCLTvnVjZ3MW2UeBB5yCQ3gWwbBjBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v46fWePBzV9JKbAueJRz88ZogoWnJjJ77tYfUCSH8iv16ouuGxGxegnQnPy4HaeDiQu2NKBLrm7cQ6a6PFVc3Dg",
  "key1": "BFspL9hDy2aASm8rfHeeGQQqLumotGc8RRwfX6ZTseuDmMufA4aSFgy8ARqi7EcSRKgiW6yGr2TTEEsTKGYvQhw",
  "key2": "3atJkg2Fb5kaTNzMbEMQ9JBmW153PRqL8DhftA3DkXefzhUkEsD9mapNtM7cbXmdYivMz6xYfjPTPmvzLKso14yo",
  "key3": "27PLwcTmFaZFzKsfMdXmiUKAnZQxPa7Bygf68EM3BcLPthkKpoLfU2Z7Ft94xZN6GEkUxYReHHsZc5di3sXesnrP",
  "key4": "Yy9tSn9FXvT8vNXs13vdBUDk4e7M3rFyuFRXKWXKCKMPqCfCgomPYpPDEfnaHhLH7AxTyg9AFnogsDv5JkUX3xs",
  "key5": "2ZdWDT4Y7SnKJqibbKXYwfbc24F9yr83YNRW3f93zRniWZM1RYgWB7MhsArFHa5vkT3neYbKFD4oB4taYmb1npi4",
  "key6": "3gDRMRNB7JRJ6Ch56mmM6oWB3WNrC57j1azU672nYga47HUwoVPQU54Yj8X6N5moKANEsh3KM84YqaxctwpPnySg",
  "key7": "8776T8AgieZHiEmfCDn7p5b9YMRGxaJgpbYp5qTaLwK8DmibmbJBCTW6zADga7Xf3hF92bhgfVvCFiHd7kL1y4H",
  "key8": "3aBvspSTwKT73Tn9X8pGC6qeX9GRHGw3EpsDcYRT2A43qu3UwRopy6SkKNU4SWPMG2jPEJyteCpH3sNrsWWgbW2H",
  "key9": "4MHaWQSmcDE5TsdiJfHPuukm71UnqBZ6qn5GBqekXZu1PiqawuPkqcsremaYWW3tCgkQgFoh5GNpkzu4D3Uisbdf",
  "key10": "66UscRYCV5SFxuaZxixF6rbCq8Egm5Co53aYFiB5a1bnyznA3yWdvTtPJsexLaqehWHx1SWnhseFWkAZ8DSVwN7E",
  "key11": "3cXgVuHZTGQ6WzKuosksorRCSezTMvXgFBPZpdYqfuPGL9EgmzEp8tgmfKkDbrBvCzR5PySBtj1dC2EHLcSZSLQw",
  "key12": "2ZXREcVYJ169Y9K3pfktuVQf4LphP9hPsaGdeTZo7kmyqnaJy6ihhZPCP2zzpsHmHFFatoZ14HTwShgq4rQgrKJC",
  "key13": "5DuecuXnMFKaShpfvHQPisDUW5dR3yDuJyKTEkdiem8WmJdrFiLH3VSoPsnXjrP7nwmzEcCo4G7Bbq9okrcE3npp",
  "key14": "4G9KCrwnoShnrzEq8TQxtkUm6pUmbvArgsYRcEx64BKS8rcqe1zePdA1HsuacRjPQcSTPeRsYb4RCvUqxZjwTCQd",
  "key15": "5yLhqx8Skn6esTAiVeBtvk1VXsLkaJMY97pJGG6z8KGQw9sfYvbgAoaSDFeo8r9Qa1amq63mEtStsFCybyggBpPe",
  "key16": "3g1HHsCwCYM8YkpGKse7WL5nVHgcZ1DtERLSg1RKJHnbS1WPGdP1EVPsFRCwN9PJxfLn44ryoYvN5M74A1jPpjiB",
  "key17": "5hNGiRPPeDskVDN6TyJgzkKxgXWtaiyufQUpeiqopNAGx4GBqfptMtBJ9ygV5zL4YY9XawdUoF8LZbZviPTnc6x5",
  "key18": "Lx2fa2kDt5jpaANKAbZfNvjLpHBeSWWcqeNzo1yBNphpfVazmGs9eCXEoMMF2uiTfaa1NqVvEmw4xsWtWhuQFVB",
  "key19": "4AGMPrZ9aNxtjqbqHnm3ixqBRNZ7h2w84J7WV1wB1EBWfqcURrQsx6R79Ku8yRUaNKSUwda2onTXax9gYe8WZcKz",
  "key20": "2frNkWJGfqbK7JRfU7KpSA1c5YjXYnaEqHuFnWC3XJmpeVkja7pKxV7dZKHvzjbkpBpZJktAZeJPrkCYx1LD6RP2",
  "key21": "2YDbutNY2Df6XAKnRCSmxpZw2crizAbpo7kDnEz3dD7bmzTfhfrrsuYnYM9HQUkpwrEUknbodVFxBbFkVqCLYLiF",
  "key22": "4wTe3k8fZgX4XtaQYsJuAASHUGZtsmChJciySfwwdozKUrS2p6UEtmnwKDU2FZ4iCQ1e7JMSooqFxEFbbGMxuupD",
  "key23": "2uFRMsLJaf6uBVEh6vajcynGJg3jfesGCMmV58xCmoPSTQUQTU8J5eKkRzEbfAgGefCJL8d5ZdHWPmzzm1Fco794",
  "key24": "2mTUeNuEA7pqxgejKQ8WNQvPhdzJanXavth1swrTsBGUo1eqnXCGyLAV3vS78VdE1wfJg6xm5xc3QrnAc44rw73A",
  "key25": "wbJmvSSHNmyjS9XVhQJvtWZUFL2S9jAPN6Z9Utrbm3RbEUtU4ynmPTSQ4iEJVBCqPV4crJtbF7hAj9365VkYfQw",
  "key26": "SzyRatNAbyE7HMAAr2TfA7RWVsBfbGvp9hJcS2rVwmTdavU473dFFZ65aTA1pRxHhBtZsmMATKzk1cG5FGP1GBQ",
  "key27": "5ptgq7h8nTsFmzWXGFLUofEi3trrQCVYn2gnwbYLsEA5ZqQKXw3XtHqJyiqewiJjCsCsjpm5D9vGJVJ8jw9fhH1o",
  "key28": "33faxGScB3qWhRg399jPAffDVNL2ENx5bphnTMjK9VfnmjWMjTg2aUaF52P8g3JhXtjuKgeHsALj1vAxuKJW3ha7",
  "key29": "4xFkFgpcB9x7cJQL2KKkszMcyyFhdPM4DFwvpXsbnH1U2aFcC2f44aBaUnvduy2HcqS1mbyxW3Myw6j9E53EuvEm",
  "key30": "5ziPxAbx4oBevWsaAWgLvKHUShWYsJqaVikApemxP2VVKRXSomJ3hJwXt3DBW6eTpcqPpm826G52pepzYxxvbcxK",
  "key31": "3H6nuaM7JAwFim5nhW6CRqW3GkDU7duq5YzWsEP5KmfGC7WY5TGmGg6VHebWj35bcKg35F7YNJDQVonX5vaBb1gU"
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
