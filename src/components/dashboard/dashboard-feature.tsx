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
    "3PD1GuF9E6ezTwk6mXYWbTUpcU2YkmD4rkQXtjDj4Fo8d7J7uF96JCTLasJoVGspF7Mac6Mo9h44vYXcHXt32NjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RDhQhTwj3S2QcGh8ZhUUTU67Djz4iNXmAdzkhD5tMqoQW9UJgCnPu89e59T8TgJHdbeMTwC4QjcJ8fdyi2qSUC2",
  "key1": "3Yua8fLSKg3nuC1YVcX1JDMLw6hNH3scrfC3mz8F7LAAXvB9KdADYn8XyLhhCnY2mD8K3wrzwBiBdXoN9ErLKuNF",
  "key2": "2DUZm69ZqfMBJ33Ze7KnNN4qvwGebBvtnRjqp2LVPgNXn8wdoyskHXKWL13wQfWqVtXvCdRL1HA1hiWK1sxEAHfF",
  "key3": "4bcnmgog1YYrDthrCLJqpA9ypLGZrwZtAGKfjfubMi4ZgD7jKyzxZ11FWayHdEbC2vDj8idoq4Qi9aKHk7DX7Kum",
  "key4": "2qYSXVMkoKkBGFTXiakcoFDTvYTGpdtnYVkaTB2AHks3ZfE99DnjnSSwnpksEQEGKZm6Tyb7FJcpBAF4Sp2hfrWb",
  "key5": "3jQT2Bzcvm3fFMDPNeuvNb6mhrPcqgPPzPbzzaFuzD215VVCNj6nCjuUAz78apLYTnn7TjUPSv8SnCjAUvFiWcEv",
  "key6": "29yQinSfk5HCKvsjSTKVzEMS5uWkR3gTtLqM7zVRaiEMoxkLVZgfjhKhBuhYtV8Ka96vbZoDPbc3rjyZQMpdnzxJ",
  "key7": "yNSTgz9oeG1fiT38jsB96Yn5n6PUBJyP772ynpSqPh7J2eT71yz96gqVqwQjhM7s1K3XPCk6sT6kRLhdpP6D7w8",
  "key8": "2LKeTmPgggAPnE6s4oQzbwLUPkftQ4Xhg1jGBdRGCG1CSCzGbNrwCwmFZgPM5a1xhzuBdqSA5UztwB483vFVG3z8",
  "key9": "jskPGk2hprYHFMZqAdgt8HkkcH2CdjBM67x7p5CksH6idcQDMog5MfzwQavNPgMJLi6JxC9JUDGi6oVkGgoMAS3",
  "key10": "5yDunBKn5sX9CtY3BefWp71VRUCsrLGFThPydLDcEZg7JmVTuvss6z5Vjgh1HZGhS4aep26bDwgi4b3aeQFG1m9c",
  "key11": "56WDFRyVdCJ5gF5RHx7nZt8ezxQinCkSjqXcU9EFmmkpzPVGL2gzNwbjkNnFjJv7vy1WX4kDNJtfckVvgCCZgKDJ",
  "key12": "4JUSL2qqkFN3sGuGsr4y18B8xQzSEoUN1sxnfDNhiqmhPWhyS3UTMeM8nM1K4o2gF1xwRGfwrBhSqrwGMkNHXph8",
  "key13": "5uznFcitz6oycDD6VU8RjtduFL96b1NMdv41PAQwDA5jt5LB9hduxLokoaZt1z1dFbG1h2QBK19qjWXDdPqBiwSc",
  "key14": "6vu4oxKpa1Ecma81ZyBL5qera6mSZhG2PwqmdYikZD4itKbtAoBZCjwmTU87YMMp2Ri4U3qzTCSN57PZD6VA4SP",
  "key15": "xNmsNJwEPBRfKMKWhdDDkqLSyurjGPiESXAmDxtPJuksPGcKFYU2XfnNHxicX1TTpWtu3eHZoLY2Sc4FKaCbK9r",
  "key16": "2AWcweDstey7fHhBeQi2LwrDXBzQa1eJ7F1bAbAsDmGDyNufNNkVmuqWW4kc1jFGQN1inVTp1yxAxrtcKeyihnGp",
  "key17": "2uwhDoi7ctvzsnnESB14HUNuELKDD4t48MmWo6GR75iLgdiHvLbToUuDKcKUd1D25T3kG98A9NBQgPXq1ABWKoP",
  "key18": "32CnyJp6GECco4Qk2dyinEoubx3mC4JpGWpcPiu4tHKbLY1zFKSLVKe3LLmLScXfTRJXfS7RhgsF1mMhHuk5zmcA",
  "key19": "pNKtMy1Kn7TYUje7MhsiMzto9AciMgFzvycWWvqra7PiAoGmLoEYg7E8xVyvpyJGQxkFr4zFe9FMoeM14HQGTFx",
  "key20": "22DD1Z8DJuwXzAyLXaKFZL6yTzbShnTtsQSvqMRq8PZisCP61RA8AkT1CmioVgQvyHzwCeoPcUrMxMZsrUy6brfm",
  "key21": "toj4r4M3rmRiUnBuMsbxMqJhemXp5Ks9bJoEetPsY1JmfhfF4oCLYnTTVHtKb7gaC4i5edH5568e8sYSpf3qcdD",
  "key22": "4S59WGc833UVvnc3P5HcdghsNqEduYC8jaTLjZeX9HHebrBsUq21oA5hsJKXnp15TRKHQw4UXTaCcudi4Tuf64Wh",
  "key23": "3NRhQ8B3FpiRpmpGbo5BBcYAkrNC2VM5Vyc7JxJg4EFKcCnwybuH5rpfbZpNVveioMPUJNwRWQunJ8qJs2gdqf4h",
  "key24": "2nB3UUtsVT9uGKSsdDqA45iCbc8diGsgZKNRcM35tbsj4Spn7gpMAGVHgx9s26ZuTobZQAnvkihJ8p43ywy6Z5Zr",
  "key25": "4tc34jFPGxVmPirm8gUPUvZhtRkiTrweDQcNWFbmJoUL7H4wjWW4Amc4jLjnYcoZEcuqjBcrwki8ULjkRHtbJwej",
  "key26": "ARAG6K33XiPLGU6m7S7hTDtT4sxyV6SK8MVUKDvh9KDm8r1tBwkf1sTdTeCTJqLAvsP7ZMaqiPvUEH7L6cTAwoi",
  "key27": "5mXwkt8ZhVh2SArffy5w6MK76Pyzue6H36iURrzNzRAKynZjH9aTyBQSzZCvWRZ41a4JLQzwttHVVTPCdEHYV9fp",
  "key28": "5FN6YhwUiwahm1ovxoHywZGPArDBQ3xgosbAh4MzHuPGZwSQ6RYFzKqwTGtMwtPiC39QVm2qs74X8ALhv9Dmt1eF",
  "key29": "FeEvnfMNfLCvqNbSofMfzFS8qkzC7VuuncYBfZi4q9wweHXVNex9PNtfigTvBZoSdpj9Kc8VasRdwWd64cXrznq",
  "key30": "3FVcAMiGijjgkwNVJ6E9NCfbj3hRUfLRL9F4y8K7VcRVwe6JraP4vAjvAut5xcrGanbuaix9a1gDzQtiyVLjNxQr",
  "key31": "55m4KnhjtdnixY7eCATejH5tehDUQ5KJE69J8ZjvjEGb2M3Y4TFDJZMF6VKBFtjuizrqPtSvmpj4eTQZPRZ7jM5r",
  "key32": "2BtBXCKDfbna3RXHbHhnRdrgWA78jZXaqV3Vj7tURysNWNYGWm1vTHnGRgn5L9pXzSrkEw1fsLNxxBp7WNzKmnyy",
  "key33": "5knppHPCD2syMoniJMy5Fv6bcPq6HejyBRg8VjjQZsquNgaHcyayzbBvRQnPnGszEk3jGFsb7hT9o41P8EkGLA97",
  "key34": "kuaTpD7UfhvDDTcULqvEL1k4QyKRsXdEVRhuwx9Cz241Xisztz6QYd1ddqeJ76GMpmj23dLsPd8ba8mn7q6S1UE",
  "key35": "xyK7CXcXiXKsYoy2U3HYgHdUcGL66B9R5G8QwHdVJhkjnbynAt6rZ3fv3pN2gDootLNG6xgZ8s5hkjtXT3zgxRt",
  "key36": "3uaqRsBC8W5geuFJ4HDD3gJEnc2x9NCWeWhj9LeT6HLVdNUrX2EoFfgmaydS9vjspk6L58KKMorLJojLc32h2eno",
  "key37": "2CrQBw9vgMpewzKy7u42a5eCCQkAbYDcXXyTdXhm1sTU5aKzCpuTerw6y9uCEptjGPYMdunEwLcjZxcwt8iz91sH",
  "key38": "46o8w2Pvw2DuhXgUjVB57sWimePgReCPBHi2GrPPUyystGEQ1VtXzkUD9nuuQxJ9G9s5uemHUDT9UQKYSyZH8go4",
  "key39": "XVVvTyXMcy72gL3ShbvEoQeiwfoWMHdy2WEWM6FRMTyPPg5zGz3fuHX8n7U8WfJaUkUoc6qTbrBh5wfxaBEFN3y",
  "key40": "4JCEpzTfAFTYkgqZcQnKr5txho4hgMwRwq9yZKcF4yotW5qLW4nK61uZX9wFq94Ssagau8Df8gm9aBqzpjCtJjs6",
  "key41": "42rGc1UPAkhq1Wzwz9Fk6pQPpPuFEJHqH1WtNdrHxBZRhNUHwUyr2Ro5oFkCnem7bYUYBaqXoJi9oefFZw7jLYJs",
  "key42": "3aiEDeqyqd3Uvkgaihie4xH6NrxrUtwmaCRjxoDfpGHmYg15h5AcZXHxJyTqYFvzPALgwzVsN68vKva7u9UpB1Lz"
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
