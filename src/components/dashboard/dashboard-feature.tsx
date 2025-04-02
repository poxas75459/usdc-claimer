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
    "3asBCm76bed9Zv3wweTNygMgswuyYyENrkeNBQAZDCHaUAyVE1qn3kqRELgXBufUktmsyFg6X4ss9VCmB1fcJD2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eKyTT7grZrJoko1rReVwmUdAdxJbX3nXtcgLn6vPzBaZjKBBknbrJPRMEHDuNJataPVfTguvNxJ6Q9NW8CoxEDA",
  "key1": "4DzNq271F5kh2d8mMDWJvkxDWUoVzKS9WDtGj8XcfXicSTSfTtnpUhuVUfJH9vSLxeCwY62PWeeksjt8VRaiNNaG",
  "key2": "3YMqbhCAyQuR6uiZuBEBqDGEYezEmxbXNKAuxsA5c3s3f4e29b3zTLrE5tLNyxzE7WbfXKXRmvpjFg1VzMGTmuCN",
  "key3": "5NYH7V4mjweHP4YQGFLes5Yu7bRHrbF76ax614oeGzhwZ7F6c4HrMsKcXfyy8kM8npEvp7V4ozWFMdT1KBzgUBqy",
  "key4": "3mkUWQdFRGjVqcBqcpbGkbhQUHDyqDu9P2VVu3PVWYym9FHY5bar3z2xoCYLN9zwfB55hw4coT4nzNZQm5ACECnd",
  "key5": "2Xfw5QDsxXuYLT9ggYapUXmeLgdNKwCN9oG38S816c1N65Mxnib6u3WJTsWMfNt5zyVh2DJAadduixVwKvAnzYru",
  "key6": "5fz62L62FYk1VGk6ayJyb6dGDxqUePqvaxLbUYi3Vex3MMUPFBL9wsoi3MnW9ihiwJCwJnrQPiaELetbKaXfnzZs",
  "key7": "3XhjU6iALBpJYmsGKajTB6jwX383vmZySwd65nn8NxkkqrDDXkfjsZndqxmK4xPNUtfWBpdov4N8GoFKwS1fouMJ",
  "key8": "oqSrKyNf9wjHWqSDPWu9TkBQu3ssKkgoeZsxVgSgVwdPV3TxALoXA2Jv5qxaUaNTQsR3pHVqHQP7CLMkfwEgVyr",
  "key9": "4hsuBVYg8vUxCTFGTnggBryR7y2sEiVp6o1V9TnUVDBgQb92Dzf3sMjNbsBXivzaPaZDP9jjTvDYjjfQTaRH5K1o",
  "key10": "3QBxXgrSXbWiDjiP6QbZLh4pUT4RLufCPmxt74gTGqtGgFZqw4bGBeXbNdYjCWH5LuhCbbXCYomshjwf5pHhfqwb",
  "key11": "tDTTy4ZACVXxZUUJaCiDJusaARqK3QEZS65pJaVNRK2PCqtyv4qZd2Dikg777oBzZArRsj7XoBs9MJWwwq48rMh",
  "key12": "64GRRBYcT8vs9JyU8R28T5MhXMmjSQvRpbmJ2gZWgTrYqf4TwWbTyBqknsMxvYLA1xrWpKnXKAmXtiFxgD7P6vRU",
  "key13": "5aZQsZWMHttGjNAqnj1aRJ7eM7ccTm6yQrb8ghK1sSxq4jiZmyyYVtebz5uF4VcCv9cNnQjjiqMjCRYfzMmnJSEK",
  "key14": "38BYp7Av3c5B8amgLpEFgEs7hLgmzbpg7FoyMkmLYHBsYQaf44mBrCdhPMMBcumZSxK3KYSyfFF7cXg5QzCv8X36",
  "key15": "4j58kBJJrnmP8zPcoQuz6ZetmXbbRkxrMsHZVYvKow4TJ5FyyBRtHFfrWv4TxBmTEZg7iE1EwGizZzf8YVdhBZiz",
  "key16": "3kf88p8fYDBmMuxMADH69brzJD7JHZj6yvRN5DdFr47RR9xXvBmctPFLiQ4rzDHwaCgYDFAoxi378pddyPu2RkGT",
  "key17": "5qYEwG2u9e8SashnSq5aLVi1C9iZuoC6F4Z2jbigXM4Tik5sRmsXGneJkoBUykLaWt5HUqFMkfnzyEu4n4Jgzfv9",
  "key18": "63cXUHMSbz6o6QniUxWGsGaxHiYfuj5embFmho7deoL4a7WYB55Axmkx1WK2XzBh9Mik1JQkVc3MsQeCKUoGEeX6",
  "key19": "4mA8RrJPgJ4XaiRizPL4mM28rxVu4rdhMu1tK17DnuxmmgPapt3BuT4SdPbn6kzmauZ8zcDvQq5ZVHfeYb6KDLJs",
  "key20": "2CDwSeci3iMv23uZUVCWuo1kzGhGR22hCBWLrx6XceQ2qrQxaraY5WUEy1ymFttp3rcx5cRdW5RbiNtJsn5HJmFE",
  "key21": "5zXu6FHZp9hpRBd88aFn6HBLYxyxvBKXkGZvQVMnB7XDb5nwD3bwcAuvHGQJZw2bkAM3xsbyVJmRKYhm1YineokL",
  "key22": "2d2nfDoJbdt7Z1sh1mKRVGsdgz4HouBrgAUR5rvcF4V6ZhtXCxEqYFk2L98xwDMpcYag3QqqDEEMyBYonU45eqkF",
  "key23": "4KHZrWWcAhxqstSoYhLTEu1ofX5d7i23ZUtcW22AuvoLRa3BXee6YVK4o83aWES4S6zqjvqXEWGmo1GpqGHFKeCN",
  "key24": "4st4PnVSwSRJVvsgRMoBWGzLTcwiWzPxEkLcHBZMGnuSZ8G46bfVa8XEMWqQotdXr3bWaB6v6AbFmg3BLsELM2Yv",
  "key25": "5mb395wbYTxiSHnTAW4VbsZuyhwKEszy5jnhfWMbJaZKEfSbLyFMtFL9c62TzLRd4mdL16nZUQraNn1ZihZ9M8q3",
  "key26": "2ckM6No4AenY17pecfhyBNxKKdSkR4Rz9L1sLzwG6s5j226kU96d2yfWNPRjEuZqNnCJjWFm7zGHLbgDTLSfNdV4",
  "key27": "5g4ZpdZSi8KHDs3t6kZRszuoC4qtRvUA7dAgrkC3BJ5irRntWHk89yWSrQV4ZzHeexTVyWvhEq53oZHHCoKe9Jfv",
  "key28": "5voeYLqWpFkLQydvh7G2XjmbZuvF5EdQc3yVvXeekg7qUpHxYarEAbEF2NRLzKJVRKQMQnjKohEPkUNyXeuKSd21",
  "key29": "2TcJVEP5VtdKc3gRDfQdzGJyryApQCrtChwaJxiBuYQ6rcRTr5QXDGidx2PQutJ2FshZ6MuNSpFMKeoSfMy2mtBo",
  "key30": "23VPuXNgy2DZP3LAaDCxUAwT7Khe8bKTR4EhmDyfqyboXVh16bUwSMBqu9qwuQZg69V56tqKruP8UUmh1C2WD3Dq",
  "key31": "RK1x5gb8AvmuNtbaMoEj68Ebq7ZGjgKDwZvwFdJvLZMa3yPmUQHcvRWsrP9fzmcJ9RrwoQFnapZ3y7j6iicMoxU",
  "key32": "41v9ZnxNue6jLuepbFtTMD3d3HuPazwPjaUnZAxmaZgSvPeHiBZyq7bh4pmGt9Lob7NsBnmWFuxh4SRD9kWhCp3n"
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
