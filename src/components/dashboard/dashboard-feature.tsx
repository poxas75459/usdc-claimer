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
    "2cnNDjj2FEtjt3zdTxafY66bQqMFmJsktVqqdaXRfV1jiSzYkfA6M8uZnsd1tXbSue1SBsYz48WPTvM1YGA8aoZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Edxdm1tziJhzJ3Np8ndvZB3zDg5FxxRFXJu4sLtdj5qrjEi3GVP6bL1up4YHpDfm2gZzPaewSNS8j25PH4KkNYT",
  "key1": "3AZs4NqZk414jvsqfyqZrMeJvqXMM6ZAgSDz8yFxnYKmu6RfR4UUFHR2bpnXCBvA3AcKBsYk59xhmJpWt2Fcctc2",
  "key2": "3DcHAdZna7XvnwHQTLVLW1gGu53Yzx7dsLEAFEcByBtQLJwZNdxeF8LUhASnp19yYTE1SxGZoAyDZLkK1fT2inv1",
  "key3": "3MqRNrsPzF8sUPrnnoKa3KrrMyYWQ2nBwwLmdUVoA9q9MvtyXZ8ZxhxzPDAPazjmUpLRzzLAVGSwhYt6CFd7yYZN",
  "key4": "a9tuvyjfkKqrHBewrSRWx1ZNHV5ccrHAKb4EBuqMcd2E2gmwzskZ1MPgGVQbrPcE6vmExqwwcwgAawuDDEyFckg",
  "key5": "66y3h31SGk9c8h2kRtGyMaPxJgKNCQ3H4dA9xsBgQprVpYvZztH14TRpJPoP8V2eTzEWUCaRR2tkRJRWHpKTeV8o",
  "key6": "53TyhEgN4fu3zzXkayVmw4zuPgpXSK9rdnw3ZZdMhy1vV4eAgkt2g8BvhPGJAxpcdr86YgFyzHUWxUAySFAiikKV",
  "key7": "2uJZVDVMBQe3GhQLJsN22yoxrjeXJABefoNQPhQoYGz4PSYQ4nbNVBK81m5G3kjeaZogtCPvrotG1WUGhxJ1ytcD",
  "key8": "5ZBjUK1RGHDnPmHWfUboXbdvpvtqCYxPn3xBNNdSvkhER16cEc6vKEkyf7Q6sdjtTt8f7w28kFWWhAQNyyse9sik",
  "key9": "2yTxC7X3xX4PkR1cGBfk76EoQ843S38jhYXG3odEJtqQXsu9LKSp8Tq5wak7BWmQ988pfMhcwqECF8Ww5DbFQ3vx",
  "key10": "5Yu4YnmsiTuTbhptZnGB52WYHBh3UFZhuCfyZP3yUYapLGsYbT4ePfo8qUVR8w5WDTGeKoM1YrAcxbUYmATWJY9X",
  "key11": "33sKc8Tnexod65PmKJygqGvkmY6peQ9sLHXJwyc5WeGf2PGrQrSFogVsQxh4FhNzTrTH58Z7kyoGSTVHnKiTVjkp",
  "key12": "4uMRkf6EW3pwbiCpGUsBPHSKGvEq1A7sNZAY5NTao6icpAHxjxnfZGohZZ8SJSBzZS9U1nGmoTJjMWUz23Kpx4Wn",
  "key13": "56F7SypT4cno5vEchsbKrzQPnjEqr25Hy1ZGdMcVH58C6gKpKTeczcDxdyYXggpMtzEbumDnXd8BB6ihF3QgcEZ9",
  "key14": "5kK2uRwCj6jaZgHBN6QVSYYjGQKjBe9aNP7rewVcWVrNUNe674JFWqQuwTyBfkU8rfsQf6QWVTcustj91wUSAddH",
  "key15": "5gEkPyyr8dLTZw9dEKKmqW2N2HV3khZmfDb1NpeVpx1DtkhuBRJrFvDH7vzpodsBtBxU6iWzrNeqkrr9S6zwRNVH",
  "key16": "61zmoxhNY8pzSsNmD5w6SDgkwsMenCtcw2uW6SXqHn3GKccWktTa1UgDW3vZDx3d7hq7U5aMtQjPJ7paSEBnSbTs",
  "key17": "5PLqu7VvNDPeyXsf6ye5BVjwgLs8H9KmnhgE2GTisCqs7Cy1dPLk7o2Z4qQ8XvceqnBoHw3mhDpPbyXRuLXLRxTH",
  "key18": "4D9VqrQL5wtbhHFe3pcUtbLKuKLtiXxDq9bY7mp1WawVS65vqHxpZk9aamJU65QpyhWraPY6i1cznTJRLxJbbHVs",
  "key19": "5XU8RrBPzAPqVEqGysFBeD6E44XrexUxhERQunqYqzHhSa8TSqubqWGumjoXcFUmXRa7JRVMMPanKEnRrCf8wpgL",
  "key20": "3FLMJ1b74FjcFYDvKXgNWjX4whsGdbtZop5zRCMJjcJzQfbQ6ZZX6dEG6McPq7Wi7cxBNE7E3boARFyrFfNpYm7m",
  "key21": "4xAUSCRWJaZbV5zh6bZ7mjPgG8Ge8Hionk9WPPES7bBe6S8E3xCPpp7aH1fofaNH4tB3orP8j9MaP7oU4GDUgpCg",
  "key22": "4R4F8Mu3PD9CVFqcNaSFThqNsAbL7kLfYi7CNn5HNb8aboF82hbir9J7PaApHMWNjLmvzkT4BNR4zdfVx3Vs2Etm",
  "key23": "5jtMbqwxDHWE7u14ZjbE1VtZmi55ATGkVvYRC65qWbZmAy6MJDjLLDyURG8BrNxFbchxouqaUKfwdk8nBYyiYEHd",
  "key24": "3TWzJ3aKEdaCXBKeEkjsAnAMopqznVrjyhgMrxEjyY4sLH2rgX6vf2A71RUQo3usrbp2oEFu7hyZBA48cnZ532pE",
  "key25": "5rW9Boo7h7p9mBfyjYM1QwmmE1M3R3gWZeJyAjFcv5sAMhk6e7m43yByEpvUTTTy6sJbcNMAs35HK9dAsHC3pmzu",
  "key26": "37qSDuDbem6z9uY3JaJv3xsmvpHA5Xp1W6KYwySVcRb8PMXFA8ze8qC4JDRezjHmn5hpHuBuQ6c1ewD7UacsYaMg",
  "key27": "38W6BRuaqrzchDihFm8YVvDagwLLtpBUY3LwLRbwG6awGWCNkDVMZ2FNn7CNf2u9utoB1p2Qzrck3Pbmf2mKYeaN",
  "key28": "3ZeC1v14uk3L2BGMcMySiiZ96ZidCP3QXjzuBJCyNucKPpQbhQd4eCd2j72tXUAbks6PhU7Cgfmw2uLhBMAG67vy",
  "key29": "5jL1ugMEe4XFkEHgQMzCmBoNHPPXhQfQi2ofiuN832EYG5t3KdtsVm3742xCyEEHRj5hfRXqHZJdnXSJrGJP9mBp",
  "key30": "22JvQAeX7YGFvYxaCJgmzHCi16xiW9cLrQEufEUe9As2zHQCgcZAJqGTeoCyCdPHvLQaQAcRbwLBpSSfPSYZ1Vfh"
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
