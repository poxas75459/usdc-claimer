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
    "3SrLax8ohjzy5YcPd49fTzkTUSSo2u7z74yDSeLif1S9mLkWRrk2GiHp9X2EFJQR5QPwPUFzQnPSFzcqj7Mqcs79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gXGgwYndRdRXe2FJMpBYrdNBy1E3ES3CWWiswbYeVydBbeLLKEnTK61W3PNokgxZPNBLx8gSsMFXMAxbt2BVL5o",
  "key1": "4hJWrK8pSHEhmtqAmwd1eyQD79wNb4QSQWdbC8rqnRxRJZyKNpum4GkHj4D8FGQmaDYRhLVpwjVn8NXprHbBvC9D",
  "key2": "4Sw3cK4jSNiwvsz4jkjwFaMscJ7Y2QKBFz2Mk5G6TfdxaaUgK7ceSJrWjnLu3SCbus5BJpkvEwfej8xdXxySRWG1",
  "key3": "5kbMK2yT99ev33SQbYLUbw9iSZJE3VFbz1GdrES2Gf7B7n2CnprWcMMZedH6ktAh3UjULipgdUAryCy4P7BrrNhx",
  "key4": "4sibZiUiyT9Yz4rk22QjgvRQUJrY37jRK8BFpHp1BSE7F1CmsHTJ8dPcFFn4EBtKEdKi3aAvb656EDeHWxJ1ctdU",
  "key5": "494FpNwjhivTyJrZEtrLTwnLL8Q8KqzXgGSnngXSW6tvAKUKRQehYa7R3xUJD1qb5chkaRzaEy6b4jBTRCDUrJ2H",
  "key6": "5xHhir3vidb2oYwjrQvgn4JrA7Rq5dBTKefjpDA84J2PKarJnE7N5Nwtmt9sEHkZNAm26aK9MBoFHfrqBHA84fMn",
  "key7": "jrLqYGSgJqfUk4WoBZX1dQ9v4YdC15ZyLzV6bPaGteCGmqGWh5WHwA2zuyu7sEtpqm3r4psNyuxcyqxes5NMosf",
  "key8": "57dwgZWiQyzkqKV8zb8N3fwYjmCP4zztcMobfxWvNXDUJLuXuvGpY7UVTYrqJyHgJD4MosnYTE9ckEWkL8zxUBuD",
  "key9": "BU4BbverJWjohYVFGTHYLXXgFjPhkGMj58v9oVHPpT3khuqZRWtndzQGAtWRbTUGygkfBbQtGnoT4yqbDfNsKf1",
  "key10": "4593GqVctdT3XFqCtzA7bWDKvyJ21r8ZZPhcNgHvBcCFgHfYTrUnevD4Fzf1WGXRhdXVQcuu3XfGoqL1gQiFDBbZ",
  "key11": "7VQQuYwUL27G3Kt9Xdr6cnM9NzhZwtUwiMjoLbhDwRTkX2pecJMyDGvL9CHWYgwEurDXxQWK9QZ2RAwCBZvnpch",
  "key12": "3rScQfKh5G27AkRkaxsbBGTDt5PKxQ1DJRmtWkTdW4NmjuDrbtuQcxmJEy5raFCxMQiDkNqkcbrZ4A16xVtuVRQA",
  "key13": "479GNMP1bBBPqpamBwvsejfSFkW53q4VGs6PC4kRdn15boJJLVQJQdLW6aN6Pi6qysdEUxzrXFjz3LU73uL77MZJ",
  "key14": "QReHgxGkZp2vL87AhvfxvEmnQqkhy9dDAPPVgqPj7MA6eGwhH8xBJXihGvuW9n94Y6rnaHZHaEmwz417UUSVtSq",
  "key15": "4esDXg1zzffwfFm5aTjm7g2EazqMp75UgWUdi8cJkPqM2WvKgCGvRNjNLtt73J2rKKmfY3YLfq1P2HcNfXhDGvja",
  "key16": "3AvGbCBWvjJ5Sut67WUm4p4fJkhBHJRPcNHQoc6JXJk6ALwgGcU6up2qRhofSH88MaxAuXu67T1gwE877WboucJ1",
  "key17": "2pssvqv8an1BNFJbRbkEhB4SYGfMbZNDCrn5J9LJEF7c8aoAX9wEXcqUeYvzt4SXUN2nj4fjGq4TChAru5PUfsKb",
  "key18": "5kczSgaHLQKZydUEP89gSPY7cAZoXoBX8bqfZkjiMKN6w7BDXVYzi1Y4TsUSkVWjARE4dQAJZ5XoXFsSRKMVTv6H",
  "key19": "VjwncS1xU1Fz6kjQeQkhAYzGFTctJTsWFxtdGFfTmyd42VUdcL4xMpRuCiDpLhUxMYR9NYgEjC5KviXYGPTcP2e",
  "key20": "3TyxisgRsQqkGG7t2jgisayKnTdTc8xwgkHFAL5FzVPMooSf49nYgjspsjT676fDfmgZmm68NuYmF8wMkYctSejN",
  "key21": "PB9FH1Gj9FHyj4GX4KLTMEMqXqmydUF6C6QykeWdp52sTmJNPkQidVzZLj57MC6P28w7fMvqhfggT7hvF3NjoAG",
  "key22": "4cYM22EqP87JjGbXvXcG87MA8ViP7JqqTWxScAUhcRpFjjcq9HHrbgHgSwuLbaQcC8JEQPwVfKjzP9SjtVLVY4tM",
  "key23": "5fsSEy77YzQAittjTPyc83uyHbBMo6Vy4VKXZ5N2QcETgAoWYzZ5Ua7FsGZeZLD93fyQKKjqo79UQe1b7s996qt7",
  "key24": "5kbERdXVsKa1WrHsSq2G8vYdb8gWZNS2YZtTVWbjYqnujXCjQoXouWq8ceepHqGfUfcSeKbJq1bNKYfgxLxkfQ8A",
  "key25": "4TiwjCsh3G18JcXqkTGrPc3R2yL6tPthmpPKhUACjoYxiLDgt7eMuGAKnxEkdZiNJMs7RpCe5YFn3hpRW5RNh85T",
  "key26": "4dPJChAboRRTLiUpwBSrkj9hwiX1Z1GhFsWCmnNMauU68nuaJKJGANxVqHYvo7c7K6PVA6Rzsgr7yiAQXDiTdKwy",
  "key27": "3t6KGBgAEiQPvhEFb7p8LAUaBfg13ax2weYqZ4cLky1eiN2z7eGZW9Uy3926Zs1D965XgUVpE3P6HufXTNeCAME",
  "key28": "426XUBCjLfzUABndCFPmhFacx5Hg1ihmp7D4Q3ruKCSCs7NFHqMGbWfQ4BzwJ6PgRvvD5mtSbhtiqTmCqXFL4xuY",
  "key29": "4AajxgCzXdAMVJXXeFMe8zpHgA6nzQ53CR9RM4FrR4XjaXsTPxMamMhjX5UXJWTN4ixFdvvTpWw1zXNeoLbqbiWW",
  "key30": "5KrkBPZ8qZFCWdXVEf7shgdQqPLBunz3kMW4qhd9kVdg1cVuKiBW8M1GJN3e28hRyzU9KUKsfPvSBGyABPADnoZS",
  "key31": "4K9Efp3ufUeMALx8CtZj7tztVbnjiCSYvTi8Akq4gt6BnCFPibCjJvPhxwA5HyRTPTuWfkN6vKdmiygU6TouwzzV",
  "key32": "37d1VHc1z8iaxUei3Jhwpg7duHtnitRN8oLgSqk5BRwaqMS7zUpNhMmkQyvaMZo3JthnTSosvaiZD4nsu7Nt8UMv",
  "key33": "2Ma85HLe6n2rbX1CykMEfD618qSnmH9gbR2Qvc58QFmRBXLstgRDdCPDWuzPSnM6iJoyGSdcQVJh82Hgzoftzcyi",
  "key34": "1LMruoYPPVdn3gkDkiSn6m49gpHE1jxCAqnJApXfokT9U8EYntEGQiAYMcitFj4W3i8eXAbyKKjNUHUhq6GUd5r"
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
