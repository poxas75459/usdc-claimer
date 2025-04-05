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
    "3CqwxjHAQduGfT5mZ3D2aaXtaJ75zGgJKAnvPcof3eLwPyf5GrcMHC8TCMSypKSuN6egY7ABfYBhuSUrDQhdWkgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hEUJM25FACiY2gnt75tJR4HEGk9tMbZe21QpYCvcpDNDtSQNKrBp5QmCYgtJ4BRp9zrjX7SdFg1E8BxCXvStCHG",
  "key1": "5KZF4TNeoXhTE1oLCQAMEzfNBgbuiQ3Ww3KtqG3KTrBtnhmPnu8g8WxE81fWWG72GmStjZSvz5NMRRmySvDBvnDN",
  "key2": "5e1GLakTxTcEPuR8pix6sqLAgDJRAqVy3AqqRKc4DtCMEeA62e3m6am3H1wBkYgAtSEdfJgmUzBZqWLfpQK64cJG",
  "key3": "5MjwNjiWEswdWCDqDoor42SNvBvnrMQZTRLhrAJJ74rhV9UYNTqSrwT2UYgWQfcWKxdVbPhqYmueYqzsXruqdWHd",
  "key4": "3FHS36kRcdtf6WKiSoLfkaL8B1wue9yzcK2rvTQcfMYPXUWKthmfiEUZUWjeUC5jXAyRY6Yob8zS9ZCYyiU4XUQy",
  "key5": "5VbhBu3TqwZKASQ15WoJ7xs5HwZUPr5Pfskjx9RJityKkVcnueB1TExhFqgg13jAHTYQrYaKVBmLKCKSiBwVXSyj",
  "key6": "jXpDBMfxT4vZdc42V3gY8JfiXejUJuowJCMRrW2KCMorAMvnoS62dkQpsZ2akhtGgiwqZWiEfiXZMRYJfzsr2au",
  "key7": "5R3wU3eVxxMyj7WCdGSyWjyEwA5bh9MxtMY48gs6NGjgkCPr2fruPsEN29Z6CiZatqK1KYtR2jeCE7z2JS9QArxF",
  "key8": "4B2a3ftSiP7G6AdW1a5d4DabJY39YbVTJ1i2frxautEw5iJNgtqdVKa3FfzBwQ6M9UQwqrXGEkVT6HTgyGViRyf4",
  "key9": "5ZVp3AP5dypZX6tktFMT1NB2fx8JFBf2iWJvLH99PUbEPviibueUnDAsa8FGfoxGRVUMQCDXKr2CqPN8FynvkcwJ",
  "key10": "4b9HYrjJeNFFx5u6p4NJUBLatp88afEuUQLzv4Kc4shg4hpj9EVuV4NhK2gkdd9R6oMT4syZjAdkkp7xSYL5WuFv",
  "key11": "zsVC5zretKGvYCvWcNF5vZ53GrbDFey1eJyePykMZLsUK5h4UcJbHzcjPjRmiqT132ACCYbXKgVpxfpGfaoB66j",
  "key12": "3NnQytHzYeY2AARaRLjuqdcmcdh64dAwR5mU8DPLE7nkwuHFvSDtXW8svmUcU9VNHxH5nXsCY1iTXy8xVz9iygxQ",
  "key13": "2mTTKZnzP7mU5hUPrHJDkYkxHu1esUguK3WaHxcgtdnT5AifHF2khMUaZTXGDaovR9c5cxHc32zWygDz1c79phGN",
  "key14": "WYThaLMpj3Mieg7QDGfu4wSbdK6oLdaX6DEv3TT22NfzWTET6Z4pzz2xG6eo6VU1tzm7RzPPu3BdizD8rFEpv9q",
  "key15": "5n1TLqmCiQMpXGoqEMzqRuoXu71qdtR211TaghQd66AHHGFQuqNPfdXgCTgpHKZVD2v85V29XagVvn73DqFv3gmQ",
  "key16": "zE97zDjBTTcg8ckYB44zdnaGPaCYqg2nJkvL9H8wvmpZSroFPztbn4c2XcimJ5j3TkdpySVCrujDWz47iBk69Ly",
  "key17": "5whAYw4hKtKd87qH9HKsAAfADyH3fGdmhtTByRR9WLpXRZ7zE7ofEKGqbkq2fynQbhgcnTZFjvDDcNW8hTXnD4Ke",
  "key18": "5VRtZttycvFAzfRw6PjHVc1tzHP2zfqyDvSsz58ZDV2GZNbwB42cDWdYcAmhmRd37iEsSp7bVHmyf8oGMs6M6LjC",
  "key19": "3b8UXdyiLRteCC1xnRc56x6bqY5L2yqFbNTsZP46JE9TAPVZPdSTsaYfh1KD5HXavcE8BqxttADbV3sD29R1Qqoq",
  "key20": "4KY92NEQauq1wfNfyQKijV8FsmHaEBKx7PyGJjPnW1u9WGoBUwGiRy2GCoivG2kBizUeTWXDzGKz1Q4U8takrdb9",
  "key21": "4yeKkH3E424ExxUPGsHFKRPeV16Vo9Y3ExHPuiTTckAjXPCVSi6KtFkdGGqiQC3LtTawkC6AngXjkPqv6egBdBZL",
  "key22": "38qsxEsRNu8DdW2FCEYFbuoPt6NVWBD8UHjJadjZLGcwrJHovPJ1a5Fc5Ctzhm79RUVNwLXiPVDCEuESEsosT4ga",
  "key23": "ygbjtBecugwMpmQeKYaLvygr8TucYVhESzdsUvy5QeSuvYZhfMLjLQkEmNSNJ6Li2Uj64uTWpm3Lrm8V8yFAp9t",
  "key24": "5LubdW6AdSgkNsngFhxXKrR7xgm7YmWYqWPnyWk4Bfagiyh2c1XDtqkWa9tRUhhg8G2raF6kfGcy2CeRMA1fxHtw",
  "key25": "pGApDKe7ciZQycQQiLC88vyRkXxyUuqeBYsy1BUimmz8kMwD6gMfNcSFnPp36AqAitK4Jew7PNMmohbdTf58cSe",
  "key26": "pvHGxe5LA7JmgSRz9xDaUMgGqhnnPQzEZi2YVRgunLDik1qeJnqeKGTojAiNC9DcUwTXy7BXAkVMUzVCanJ5rvM",
  "key27": "2o8xsTx2ygbH9vV8MZPEXUaVLUwCZCgZAdV77KijTtk938rxVPXhFEQRY92KCo5TE7y1kDEvVnzLDHsrtH52vASC",
  "key28": "5jikm68vVdVyt2EcKpY2YJwYA6DjvpBbqCKoJKu2fdTeqmt4utA7uqEBCrbg4HGcnb3n33ZBeoiCvq3kCaPQVWC5",
  "key29": "3TpgfrpdH9WVYrGXPoV8aYVi737Jv1RJKsyRNabACSLG14PU5qJCH5xLmSu16wjQztDXKuL2YDXwXDSnvJDPScJG",
  "key30": "3wqScnyZmh7LJ8ygdDyMcLQpVLmaco3rMLaUDW3kYhHG6AuQAz7zyDvxoGS69eu4qGvMmKqALDg4jZKBqBovbYu2",
  "key31": "4Hpu5AXTSXkRL52nPz5A6Nh6BvM1eq2fqgnVmQaeLmi1h91UiX5w6rtAR2xL8PSiS4Am4xZ7wfiy4FpqMyprBnSt",
  "key32": "5kMDreqYrMJq4uaM5tE1V8241d6mEZq7cY1Wop5P78Z6pFJEL4S6P4XsuoyPAWznCR5gswvp5ZLVt3AWN751SRyR",
  "key33": "3KCw98wsRr1y5iQE7MfPR2zurD7Ev8kjH3a52uJmrZGkmvjFRCCVNWEFVb9cBQeaXZXZHDVrUmeC1SPXwLvaFjk1",
  "key34": "LvQVj6ZdsQfzswTnWTNbr2WmK71RrFYHqXX2AGg8ykdBf2CZXwbvPEDijY9ZcstVH47X7TucXQohSbsr7ACPh3g",
  "key35": "5nWDyGHxqWABeY6CvBjQkbQAbV3LqJCPjBjGhwy2p66q5rTvfS6tVk3GqjoMvS6skBee9vLNQZTxL9HBuWHWQgHb",
  "key36": "2FgY2y43U72WwEjraRzHqkdVuhmPVaz1Tyt3Bq2CejSBZ8CBoqwEdWAYYEsZaoCfg5kuJZVq9ex1J6h8xPmftbjB",
  "key37": "3hznGnssqCQKy4DKizLN6mNbcqELUaE8VrG9PQ5dSX3RL2hR98ZDnrAbBb3782erYUYHraHJYy1wHYnGpd37nCPe"
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
