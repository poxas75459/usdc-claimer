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
    "38Ck1FVB17EGP9uCbFLWSnKMzb4332weWvjQYsEctvMjfxxispNGc1fKrTiTrRdRDt85GPZuNkeyZYQEUr1DpUga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oRnktVc2hZpZPv9QcmyMWPMY5Srd8mZrLAGSxcPgasTJ8rLrFiCuDTrwfhEiJYHTopDQMJEiC7sqWUvoz3j9rXx",
  "key1": "n3TfQD2SnZ7okq6QKywVpbYLyxzYGnYNegxVqxtk7qGsHZDGUrEuEVgqq2jS3ZFT69ozqQPsW6hgn5N8kHXrwJz",
  "key2": "3P5WUm2a9EtPLdworcobWLsKRKeJnbSsAuqdiSmFELEQe8iZ6a81bZNc5vswgTBYhx7RD9epnWgJMGdJX5joccmm",
  "key3": "47bsiYpqgH6PWeg14Kkq8GtYNpB47rXq8soKxVXVaTswVFbeD7xh6uxLfm6aXnihsZAuhruvR1jNPB1rmZkGLc8U",
  "key4": "24fDWzQQMcqCanJYDER1yXQYDEHjF66MJHTZgWWJbb8J3mDo1nzu5WeXVcwVi5uBMZ2eHdiEHUgKVKEnAQvokqFQ",
  "key5": "3xqSxmZgUesWmMtU6YRPiDyh4KdrwJxPVaNSU9eDcbTVDDiAXFMS1Cb8om5C9MP9aPuTMKFex4NhPPR4iZeG51kG",
  "key6": "28vUAT7ZQqMk4FGeYkpwfG647f3kugFoWdb1H445VTFaErSit4krMEM21E61ZgAhhrHHCx6YxDwEYxAngMUmiBLH",
  "key7": "HNeNKqCT5DpqwjCYrFYCwjDHbt3d3y3sAAEZBVAEiQhdAsMu2ph24rTwLnJUHxpEFy5rG5PH9TvfqQEfcD948Rn",
  "key8": "xbEF7WNV2nZm7wMzPrsmRpDgkZfn7KCLbB5SKx2m6n8ArpEWqqCvf64aPVntsnQBtH9aaggmMn8EtkKsgqvh4gt",
  "key9": "4agS5WVMpPRGw32DCDdkc1oepV8irMaEsPuhcz3D4tEbWo7j2oscjzFbiAxtLv792U3BRFaCV3whPGyB1yXQYvRW",
  "key10": "5NFMwwDvGhqQcE82DXS1hWaEXy2jmtqR3FBrFvAeg3ypnZTReVa2R8rBz41Ar9ETuLFQ1ugXfTPCnjjVtmPXGjn1",
  "key11": "R3mRJMZX3P7yRnk6U4j48nLu5w88ynmwaM5NRatf47wEQuAxaTxuxmpWv1Sc8DuJXo6EprdeAsMme3vHv9CQNk3",
  "key12": "4PRdYftQp72Z6f3oBpAbCxwxGnoYK9QAuG1SsahumQhGGDkLozZ3HFbgLF2u1JPYpk6exC6r1C333pkuMTV5FYJj",
  "key13": "4mE4Gu3hFkbxFSEmAwdUQhvnwMFvT73KYdJ8MwqspLATJba9oKQsw3kU7UT5pQuHXTGWA2jm4BTKaTXLk5H9sKxR",
  "key14": "5TphNV7Wg88xMoQ6Dpkb8TTdLL66GJmehAEfJCJzbrDDWn1hnasSYVg7T5QWA63o5RwjM5qWsqLd1KtYrHez3b1K",
  "key15": "3uDVjb4BFhiLT5nU9wX1wfvZ7TqgzxkXcNnS1Ba76eHRGhp3fsqCq3sY9SkiHVWc4fMEWK4GSR3AtjfXopV3a6YH",
  "key16": "66pTwc1XAgizWfJQh68Qs9iC5G7GYDBSzgQhto59xqGt7ChkFHMbf2fwfDRfsUrtdGmmK3MUTzfTWN3B3XWSLXxE",
  "key17": "2hvPKuczwPRRQYs9jkNgrCP9QeTDbsnw6csQbaye1BgUvj7JZjGkhTHw6yj7TaZJgjYdsT1BEyEUkcwAU5ro17ZD",
  "key18": "5bBcg6Q3kNq3bjVQmu55wyXBtFesC8y9Ad3XeVkN7RcMQNkAQneLe1ifYLDrSnjMQLzgVJbYbktNS4z5Ng8n177L",
  "key19": "3efT5gtgVbZcwREgBnrJYqfP97aLoWTM7EVjuprngLZoREmHWYJDDtQs5HknTkxdpJ1rwcD3V2EPmaGLvhhyJoG4",
  "key20": "2aipaZKsASs1shoBMjxMG5QgYVw8TFz4cPkCJAVW6XkhFJn1M6aKjU66baWz3ni5QH3J4TcV6my6iQibLRCwou5V",
  "key21": "Rs2EyGEu5cAv1opCEzniWFuKXbssU17zfWHtcT9qFvQ4pkY2HBwRUTfbeB5Y2WFmeFKctnWTRMUkRGnRffdtU8e",
  "key22": "5behZhRJnGGwVGos56NL6SfkVcPQotxy71c7u1MXYSY5qFtxQvpZEfUqj1dMS4mixodkc1weMMSTurq6nhMetwV5",
  "key23": "2yBFyNbcXtViYFNRwtdfDhQyjLWkLqummcKdcnmavWTXkPJWr8JsPQsrJieDV6VrmKh97DmXLRTea9UvB4rgazyJ",
  "key24": "3x3ZwDZjCRznRobkXWHbEc5Wmz5pLkEJsyGfDDP34G29YbXYdnjt74Jto65uynFCfdf6gepWZ6LM2EjnNb89sPLV",
  "key25": "2d34D98WQyiTV2C9tQ4LwZyehrZLNYBnYUpQtm3wAm7XMVKAv9oSRGzaaTxJUKv7CgYfpVYF8UxVpDAoSxjBM8iE"
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
