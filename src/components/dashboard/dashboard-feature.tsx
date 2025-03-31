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
    "vEmQxBYBMV4fso1ynWhqnbrevqpxj7eRR5NUBqwxd51f4qbg19o8RnkeqvKrbJXfxGGJhqyVD9Zr1sYGoYAgi4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GFq5gVAMggYT5WZ6yvyUHtHnLWTxWykwvEVBAdpAkS7rC96fyoBY9F2Cyua4oQyD2JKx5jub9EDMn26HbCSyWi6",
  "key1": "3SHsVXJvL6D92emMTN123QMvNkd9B6pdnqMbWJzHRciFkEfd7aFhfknknmsfHZA6WmLaZ2STUcJSQyAkkaoXUKB8",
  "key2": "59SjhhpktcceRH82AN31iw5AJu41d3sZ5WEEYYYvC66yYNp5USJwLz5qEAsx1L5DQ1zaFwhE1wycKkM4aV3EpQRi",
  "key3": "3VTSuW5dzCH4VMZQ4jyFvwNfTHy2K1U4sF1wnfzLKHVmpotrcSszNVoq3yKB7sJyRxoyiBJStqtZfGTbm1srRL1A",
  "key4": "4RcsmRyygkz9hQyMvfggUJziGyFjtoLRGkwy7UYTffxiRw7gYunsYsDUwJ8Ds4H1tDvxbxBdwPuH7ThgiRATr6no",
  "key5": "65S7qNfW7N5sqYsE8HMZ46RX1dr3PtgXovbbuKKqJnXrxWyAsT8NKpoNd7PFSvuQcXsHkjDcM5FAftqQsHNUzHSK",
  "key6": "3xZQsK7Ftn19GACNHM48quVDoiyKyALdQi9apWcUFDq8FAGVV31zyQZgQ3zUnznN4hGZuLVdYnGdfFwDMq4zLHH5",
  "key7": "2GxCTpSCYR1TxCn7Nb5kAchXhcUjSuBnqeYTyaU6H9rY2gZtQxJm7e8mc4Lc6AmPxK11qDBt1QUkkQx5urW1x7QG",
  "key8": "5dZGoHiucu42sKpNtbTJrkH9vdCXXeCY2eUpTrUk4JvWXLboLWEpwtbnH4mWHYTTn9bPCtKc7izAvricVjhrBQTL",
  "key9": "5zJ8uTuFZtTAVFJUH3k9qvDzjm3QZreXYK5gGuWf2G3H4thHMWLRvakqczpXzuyZLTQdLQE82ZDTANLiGuCAAA4y",
  "key10": "2pQRgM4mFQcDLCo4w4zuE6dUuf5yfm6dNQoZNxr5z2oe2JHV2KSs88Y5XYrw2e1EBcj4DeNdoLhKQqD57HWb7AhA",
  "key11": "3pD8KpSbfNrdTdA3Zkeof5ZrHQubY6yvhSH67Z7oYBoMizsnUJf65tkdMgxRLghpPdecjxTW4zQSczBZSdnHvR4f",
  "key12": "4YChizjLNvveQeWicrjc6gN1oEMN1zB32i6TBB57LprM4DhFxSN6aXMHBFynN5RdTchFUxT9tWgngazcJfxE34fJ",
  "key13": "5h5yJs1kFCJ3RVtqotgmohNPnKtmSScvZ9HeXgaP6ZkgwuistW5SPqm7CFgQEZsv7RG5jt1GbBZsKAftQZzppVVe",
  "key14": "57zEXDRCTfjPVzPYAcCDLUe5EvbtSVsSA8eZnd8uJsSdvNxBHYJiDcb7gHxuQ9eKWiLoQqp4coZRXrYyevu7aVgp",
  "key15": "4tYEfZsuRyDZkR76DKWcvJ83iwZzbf79qaUwRrMPanUmtHttXwMvnqzy7sQRkaDkuJUx2ZwWEKassRCTZwb1iYtD",
  "key16": "5YmTSgk6Y5HZDzEPhpK7Qhg3MQThmkoQPkmn83kpNvZmBuAeZqAWiqLzs5pa8BiwzU9yRbsh4SgqjU7HYKTWh2gy",
  "key17": "5JRTAmbD8a3JShfjGtfRFJ2YK7hwQkCTVNgXK5HdLJRXKhi9Nn5CotgR8o8dHh63gLsrQcJizq8yC42Y73p6xuBG",
  "key18": "24a26h39NWvfNB3KcY9GnqmLKD7EczFqm5rUkLyJfhH6EhRzxHLptqy7dFWwoPXf5VgwJtQY7DvPbBMJy961Z817",
  "key19": "ZYnUPzBdEcSWg3M1fwQurNUyCv4tdUGQGk8zSh7qTWVsB5XXpiVySccJBBH1E5Rnu8DKUCWSR2NohvpbuxVD4nz",
  "key20": "Acd5feXestt5Wq8ysCbcV7M486pw5AUo1HPT43u7MxJ3BPcNRkCPv3mr1mjYkhe72eFFNDS5iRuCE1FMikvPfQ7",
  "key21": "vue8Kdtu64GtZ39u1QLNFHdmqEuTRShC189bUegX8UU7X8ffajvovxLAf7Wi863zgwHVNgSyAkWv1DjheHRdjt7",
  "key22": "2QrrgzQyrCYNEMCLnt7kqVRx1g9DnCyGm4gndNGRBYS8wow8vz49DGzXZ4EHHoGomphrcXfX4cZE4rRLRJf21GVA",
  "key23": "3ikBemu3XLhoteCYWAr8jYr7LBfKzGuHRsnNEgcVcRtahGCKJUTsNbQQfTPEXjHQamgZ7c4ZjmP8YBbvETT18kMk",
  "key24": "2F5BjZMVboNJKS6jPCzgRg6PTRTMQL7ySPma7uYh4VvAxVbnvBsYNjEb7w4T1T5T1GgTv8Jv2PwhiXg864EUM25H",
  "key25": "3Q4zL1hHjWmgfhUG3yrXS51DYZ9JufHPteU2srbUPuCEXYNsNPKZQS3imFnUU6UvgohKTxkYNGNZxJkdCqktvRqz",
  "key26": "3cRn44jv46rsSgihBfY6LrSCbGZgVW7W7dJnNJyjkVNZ8FNWtVxWYRQYFfLs9mFcD3j2YR2CTXpUfYwRaNwY4GNP",
  "key27": "3pzPEmNhc4Ujer9zYfCgLVvXF72EDBT9GzzwVcpc1CULagRcFf7FEdknBCCLiND8XM13BKyp47o8qZ7jMDiuLV6N",
  "key28": "3CtbhJXSBHDUfD3GUKQJhGqKpsPkkEWjDPHsYbEGCf1zBh2jKdMy8SE1Nk2YNAVpsDvnFt4RA3Y1ukWkQEJj5MTi",
  "key29": "3V8W2a994Ee1YK6gb1yM2zV82pGYkGSSpQ4TqFEKd85Sc2KrcFByqC1McgbV7X4gaMshG4AT3R1bXh4WKu1wdEL4",
  "key30": "5LRZVTXHe9dLQsuyBKdPhaUjjtawdhtdGJ8fGQJmiDaZzDpVbmrAHte3yaRnu4LounLhjUvrU8Rpb3LDqfDKijpk",
  "key31": "35K1nw3UejNQxTehKZbyYx6eEHcQ83bWqzfqcj9J4sgqNe5nttEvprtLspyLoqTSUakLb4cndrRzVGitPLiqTAdM",
  "key32": "5iSdJtEvsouBkg5FqQpfatmwAoqwWjfTpD8AccWv1T57K4QKUEPaE8dTYV2mnHqPgPeseMcqiwkqv7GGJjnyvqdJ"
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
