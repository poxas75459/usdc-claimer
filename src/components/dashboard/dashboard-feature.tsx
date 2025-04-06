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
    "4HePG16D8gJV7pSQv9rRKuCKS7hMbxzcxTN97pFNiV1VvasZ8xDVFsv1nKEQJc5zbNRD6aPpJr8Mj7Lhq6Vd1aAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2953dXv8JkYnzwvAerb98kES6Lk1JNgUgcqzhJV3wFBYVVJqJh91PkLd2wS7MxhoRXy8tWqypg9bokkFqy2uWCsv",
  "key1": "XwAww1PHaui3CbthPFejekpdXRQ8Zv77zc7CrbXBPSaCBEUhg8C5mjb4kdx8wQB3KwPhdjRQqjShFwHb7AWPbfY",
  "key2": "4g9rFmwVeZXniiHzsQH22FL8nq4z3DEzz94fbsWZthNNb2Jq3wXfVpntMhdC4S4qUmchqDuB2GoGYLzfc1wYsy2F",
  "key3": "2gEtZPPjAWUQC9ZdDvFYRSRcR1d4DkxsuAKQ8DWePxALXvqyUWcw6gSunNuRF3oP22nJDER2YUbU4h1C7eF3VMkc",
  "key4": "28JLAvLZKnirMUmpsgUEVwSjjtACZ9TNAfyHpscTUp9nd41fLS9R6Ph1VimSqnyqTEeYq2GDf2q3mRuYqvEkszJb",
  "key5": "3ygYPUvvULxNwQ1ACEEq7aH6X36f4a4N9VrArR7xnh4j34oUb6zsnXwDDZNcPfu7tMyG1ehqDuP2w9todhWaui8x",
  "key6": "3HmJahXjDN9fNBppGd4bad1Z8NhW4eTBNjKbRm3WYanGK7dusENfv9xEDL5r2CB4X6jsAKU1RCCzMdnxf6jeeB9z",
  "key7": "k11pNxErz2qcHa8uGNNee2m7hnkmrGszPSFzCboXJU4anV8a7tp36agMGD9o1qdMhVLrsuu7KtQtLg5bBhiLF3u",
  "key8": "41H9bLWGmL98x7JJSnQiEYfDks5jTz86hLnpQe3zwNrWdAg3wAdzZU6cvcdyfGNTs7iXLpg9JHrSQnhfaMehCWLK",
  "key9": "4EzEX6gqgoYwMHpdv54kocQvj9k5u3NZq3FLzHJ93nfVBW7FvL1dzpMNQZCcudH2y1BikMo3v3qVk6ssKCiyCESw",
  "key10": "B8yvCcbTxVB4wATFUDrMyiXRqQU5NVLKC9PQvzXEz7q1HfW17qbNAHFeeGzGUQSQuLRtPnrgoZTbomAUJPKW3Bt",
  "key11": "j2gXQce9ZP7Bz6mjZ7ZwWyub42GZgwaXigCyRRiNM5X25gKFAtNhgacgEgaWUpqK2UbViS1ReC7wbBgunZMUKFM",
  "key12": "4xf9n3hCWGZZK2CBoURhiSiMRCpkKj5k9SfbYmDbMgvxr8ZJc4YP3jjP223qxtnkPVoUEuYEdNwPwA5w46VHgq9h",
  "key13": "iF94TRSaSUSQiTsSiKUqx6R9Pt9aY9tDiSBzzsaR5V1LtXji1h53r66h8LpjwAeQvS3cD7pwty94MUgbr3mJgGV",
  "key14": "5RMdKAWkqzn2zjCsrWgPPAzdsky6efNyqGx4rD93ttST9nvKeaSg2ERN9ZRVKS7GPwCEXPsht2RVvtJT2xJrNP4r",
  "key15": "3amWddunq2Su3daYdFEQX5EYHBJs52gVJDbBQWC4CeVTRXQjCAsDdUGxjfxyEzX1ebkt5q3wtvYdU2Cx24BUHh83",
  "key16": "62hkSyNqMxRizRuovjS4SGPQWf6hNMTj77N8DD3SAn38hoDcCJAutdHm4detE3cypUpwRyAD36AsEgsTYsAbyjJr",
  "key17": "64K7mZXEEHz7mugtnTa8YegURpymh522ZujeKHP68Pt8WutZWzMfZsocBxwNbXH85kgQryfMcEodXMfAZ2mUhD7G",
  "key18": "5kJxJv2H3HoENQETH4V8oAGc21SQxCfMwAzFTHyEBmjHvRAxntpiNy5ocuhXcmiqCcy48oZNPctv9CwUMDr1QxtE",
  "key19": "2kqBBDbwxwpZdj5WDFdPFj73tpTJd98ST238D8x8SsWf7tDtS69GGi9D9iDwwDGFTLfzTmGGMwBCDyCRtmq59Vo3",
  "key20": "5tbfZS9EyZtYdiown7Ux8FACPMw6aGWjhvoz2zqSq4Nso5zXxmeJhyX2VAquQtGE4da4xjmKJoiMe2FhVKnHFQZ9",
  "key21": "47eJPVwmGq96Zj6Q9sCwoA473ZvfhHa9FpP8jirekUpqPjeQELCoiSGWw3myTwJJ9E7UbQujPfmo1r1hPDEqJL4K",
  "key22": "2xZsBqcRq8XFygvgobduSCRNPVwdv878HxaxKuoQ1PsSHik2yxC1f1hbS3BgAZc9ny37B3XNamDP83PtnemzCwfD",
  "key23": "3dt7sCBQqzVFUmq7BHhUyZM7BzooVYHZm5ujiXa7Wa8AcKAJChCHTCLHhLyAa17YjEbHhMfHAc29Zn3Gygo1kxpV",
  "key24": "4y8DbinXR9vWzFKbV65cUW5tbbFxcaq4tyN6fwypqZ7XuTrHoJVygAxnHmbRGiiPZ7jupcX1q32mrxBVXwg8j84R",
  "key25": "JCMbC7sV91rGtsFM19LP8sZ1hoELwkshArAxV732yD9v9Q3722BaA7bxDuSHqRRLQLp6ZVNwr1mbW6RedExZrHk",
  "key26": "2r2oGCekpfAhUv6TWVhzeGdZFx8bD33G4Hg89tZgfEWrFuNiAmqc91EnKSCttuxhVpVnJvtzQCvS5vfcqLteSJJk",
  "key27": "243ocufzpGK4woiF6UyFHWaLqcMgp7T9gX6tJcxgHod7pF3yZUkKt1itTqcjzawbPc7DLfZdqiFpJKBtoYk7Cadb",
  "key28": "2v9vhd6yRcGQEQjHmjX2Y16uhkT6oKJMDB2nDxSQ3k9U6148G1joXs6ADAhNJVEwSGsj9zkjSyUZfMvcASWhjbyK",
  "key29": "5yYrScRCGUDrLvxRsvDtyqjnBzfMBbMueWc4X9cyRMf67Q6f9nWep5BtSc8YcAsx7KAVaJ9pdrjisyixs5tMBTj",
  "key30": "4xJWH9sDmhHqmc5cRtvECrjJvr2EavYQhe2NntFzvJd4PzfmWThBXcHQ4tjYTCG5kLWE7sN8C9kLZnfsDUmGY5pt",
  "key31": "2tpuiTxnN7nmtWgCp8qauWM3uFQgCvm3cpBJ6GkeT2Uc4MkCok4FZp7ijniooN5HruBZ37k5EkvtNxhfW7idrCkr",
  "key32": "4xWu7cF5n4juMC7R7W9qpZeFWdy8dP7KvjUJ5CYhLDEYCBVwscp1S4XRW7Fw3VJCVYFdGjCq8oaZEgTs2snKkcvN",
  "key33": "3BtXc128dbmv4BzFUsTdRH3y3AfW7HQQT3x9mgWGcs5fnKxgms5rFQK4BknpkBpWFwfxT6SMwHJL2KvwyubRRmZk"
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
