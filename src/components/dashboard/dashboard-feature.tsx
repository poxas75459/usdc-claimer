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
    "3CAxrJ8s1bnrnAfA3SNKHxovXm1ZzQEZzgaX7YpFjCJdBrCAijak83uG8Hr3iSRPQxfhSXUEKeEucTjRq8gjDwYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VC8NRjKyGgXRhp9CeZbxcB6dNDqsaqEfohZGqFAmYX8nSRe2ke3VxMgm1j6GL6DaWGXjkAFH34bedkjkDNb1vrz",
  "key1": "3wEG4nbpR5aSYT38AoKXHbaCDUFqV1387zsgkqjx9AUAHztyemtasV6gT67tkiPJWgM13nTwH77VAcV9wVVDHk9M",
  "key2": "52f7Rej2hkjmpYN7fwv4QpyUEfCgyC9qxvuLbyw8Hzr6dgtSBN7u7nKiSTApjd66nsxjtfxEcxTvF2uJA8Xy6QD1",
  "key3": "3ExvxqWLMz2kqr8SwaqxGV4W5iaGWYJYHkeuQf5CxPoVEB1jMo6TACMvVPYpUan2fzXMRcapMQ8VEzPupmNgDKjV",
  "key4": "4aygkeSHRYncxHZk3WqNPA9iEfpjAHzvKysJJqiP1ekZmkSFJassUh7W1ta4ipnFA5sZzDCZaQGjjJvtgRc3MFss",
  "key5": "2jtfRmJziP2k2PYyR22amEtgncoM3j2Zm1wVU1YWu7R6XmEq5Yg3EMMMVwa19Vq6Sq6fApSvn8LL44GHFGJPWiBn",
  "key6": "5WJGh5YLga8SNg8cGuh891S27BCU63UxTbMktAUm9HXcccfjwuXi9e9du7aAws8Uyv1KHtLpq7EgEE72WNvyc7ZK",
  "key7": "4gypmSHKXaqmneKkEKYmwgVK4NxCxjio5p7WeGP1r4cnEf91trbeEzUaYqm3oVRCeHctzqJx6BKu49hSqfp4dpon",
  "key8": "2T6hcyd9H9VBXahpCiL629Yx97iTBF5RH39o4dTR4d9YcumKcEDLhN2N2iuzGgzRkP4FYGuTR4x16G8QxHRw5JuD",
  "key9": "5aKBDTSXECQMNTvQdzWju672iBW4nKiWzQhAsWxp6kgxvkmiuLqhXdtLCgbpjVZda1c8ti8D8Uwcbz8QMFvqsVjt",
  "key10": "3J4xbqKiLooPjYp2YY5te13Pg7jb7FqmbtgCwUmmSCtgJBFSdLAHeJoWur7MSGXAT5KrS7ZwxSDxu4ozuq4T4pGp",
  "key11": "3Uc2r2mFw2yhsBdMCgirTWarAPchwGiGwCJatgf3GMGjW8rYctAjkXeKhcH7gmkVAdo5h2NDgK6s3HF5L3akWsdq",
  "key12": "4KoyZh8H9Gdxbos6Gr1KYrXJmk2NjQXnT72Lj4biCSynRe15uSRJKnyKcQTXWv573Z6XCnQDXqYwN82NiNUPstzL",
  "key13": "5eZf7Jw5ESNz4cqsicTmBs1Aah1maTsQtW9R2Zu8djKmR5D6CuTdYAcbuKLVnGtGDVFWDg8BnXf1sAkJ5dyLs7uV",
  "key14": "2ZU9JcUL6fyJm5mfbjg8VgMgezqvb3ZZyS5r19Z8BMvzfzpz4fEHeDpTjPATnmadUsNC35L4zcxdrMbVqJLs8kg1",
  "key15": "eqig6RLWnD3GVdh1rYaN2i2YLePWP9MtVusBM2HT4eyhCY7Rp23DynmCqnmBoYbrHwGYkRQDQ3AYDzvCmvLn5aQ",
  "key16": "4JqVu2sxfGv74jDiJDbZy69TEzLgptRr7tRVfNVwyvV7mHjUKjASkmqxqm9LMJMGKnQZ96D6kr9dAF8URKK9VjZJ",
  "key17": "pp26CnWk3C4oAjKGpgQc8CBwQEuqi2NxFTbYgD2BDAsDHTVed8vcz66bf5Vn8t4D8BhbDRvByG1h1uqt2QPHNCA",
  "key18": "3kGts5f6psMj85rk4yiD4NjKPbE7Gwd1itpBQkXGut1R8vqCgGSTQve24EgmZmZXYikao9kqr51ijskVwrQHL2NB",
  "key19": "5PpACf3fxB3UhYGMA3NJt2ZfPBo3mwTkmA6gu86EEXsCRPN7gR2rhtS94LhzLdtJtW3EZmxjqjhJyuLFQ9muQ8HS",
  "key20": "4DRnQWahrZbdx1FQY5pUfabmQpE7qhwEBz4vedc9ifZB4ftDtfvFg43iRmhN25ctZWfKgXq5F28zkWSJ54tDQ3d",
  "key21": "4xB8NShL8poNEryG3KJtvSkUMbZ88ErZ6Eug7H7X5MF2at6uW3L3iqZ8ptB7jhrgB1rUgzszft2JBCn7Njpm6Mx7",
  "key22": "25Vqcp1FdDgRJuxuyuQjqvoNvv5PBudPUMNYy6PbVxdReS7CwpPnHJobtYpnYBgfHV3iQzoB2wfovPQ1N2KUBAAJ",
  "key23": "5kT3aLVxADnj8AqtNtE3RMhzMav2fBhYGYnmvCtTFyHASUuqVs2vvvZN4wezz8QT4dCw8dSoVWoWCGNeBUT8Fvtr",
  "key24": "4YmgddtK5XeZWgKvYVf9ViNasuEMVMNnbbMnkHHYXpviz8nqzDb1tComBuXZW3oeaQU62vrSrfNe7nkFvRk9Hiao",
  "key25": "3HEgFCJb7Sgo45mnK92njpoAmmnYRi2bseABnc52ZaEbxCuUJ8hH4mWnWjvFCm1bAQ89rsfzzgeMh3zir7ZzDj4X",
  "key26": "qW52adM2aLi7p9oWikQZvfsFGvR4wwracVWYdWoSzEnLKRGJEQQFQxZWMxnKDbBNx915VsEYBuDcr3SD7RLz52x",
  "key27": "wTVqAsCnQg5vM1X54rsC4u2AKmKXTU6gwqrkDj1PCkk1wmAi3GRDqjXGP5FoShpAT2mfjYTguuVHnu81s5B8fq6"
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
