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
    "226wWQqm2gpm6DBbaeAFDZxoRiLJfHBMhC7T76tVEmUM63dKTbEwBhJdFsayKJThgECe6G5Ad2bEkRDsX8toMuzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "656HXMZCMmpWZN37RVBdhWbNoYfVTLvnKkWvrfkE9RyJR6FKRJFtetERV9xQB9mUQ1APiX7nkEaoo2XYkZ4P6xiF",
  "key1": "5WJwo9BHDZ3coJgspedMV1s3FSS3tEoJu8zjbNJ4Rry4nJxS4TKU2d5NRGNYW6gUaqWGwCYdfi8G9XVZ9uwksgZY",
  "key2": "2dPLrWtHu1crCgF95DN9dMZRUBhPhJHjzkjFgbfVMdknqNtJP5kWCXTEojcXFULm6jzHrTexQsswY9BxD22CrXcd",
  "key3": "1SDkQbnNQX9cYPCDnopia4PsPYKnDRkv6Ye4MNMpHHg6qCFfpDydMJcg6T2AjvuVuvEpJKJ667Fd6Wi2oZTtNVF",
  "key4": "3JbugKm2JdHHso1yXW5rcnxAJshQdqBMNGNrCEsYzGaxHwke7bvcpEJa4RQSJEYu9YNckKJbTfrqCEsyeATewCeh",
  "key5": "LisXQqmBQUxGViVei6NfJkkDq1DoqjwThD4oEEpohGCqibWRgxKEoLhwiRGX4oMhmNqkWKK1wJJQ82pggjYbE92",
  "key6": "2aPN8gdm5A4oKdk7tugQ5zdgboKcpqXsi8Meb2wihNxnvz8FzrMUhmbTboVTSba9puQwQyi9ubBGKcA2nWfCnVjN",
  "key7": "5MjUEZTNp2Ub9VgQAKyfdmWDvyHEYewUAmbACLq6pmbQVAhBkYf5iQZYQT5LVuyNXJnQdBGpC5wPi4t2xyhzLLEj",
  "key8": "588CkKtiaSkwEwTkY82p9yXn4bh3TSWA92CLPmPpbrbMjiwmvHCbVoNW2PAbdWVzfvKyj1SKbhALxU2NfmmoXVuc",
  "key9": "YoHyUshPhbVtGELajYTTRB9BrbpZ5UoCLTzeqsWcWA7rzFuuvDZjid7SNrnTGqGJHKPHuhhK5ZFY5RTcu4Dm7YV",
  "key10": "49XQDmovykhD1x6azMP6xiB97Q8GEg35tZsdivYXk3zK4HhWhWh3cGQJDsn84C57ZX7Bm7nsrhW3MTjNSpJhac7a",
  "key11": "D3wWnJu4133CkQD9XAvv81RaDfnyQos6nnyhwdYWWJMEmT8unaXQhxafeWLnt25toeubauXm5VDiQigPHVerdL6",
  "key12": "2AmfF63S8LW8nGM2vyHMHK9856FCxcbrzKgTw67636pGtk12URZ9z45TAWyEZhmjpVbnNUta1oqhh2BDAb1DqvGm",
  "key13": "BSnXKbMNMbq6STxjd2rpkYEFJPu8AcKGpYdzAQvkFNupRVHhNrVy8eRbtDHEct1L3hESKVUSW5fPESA4TzfdGLX",
  "key14": "J8DJsyviZ1Rh3amxY9wWngt5xsK8YG9cYPNJWKjnEXCpktMwkubET1YSqWWSrP3FuwYkNmNKNwtXdtHs8qv4hUo",
  "key15": "2iqcHmvgZkidPFT9GFFebJ1yLNaThJZ6Sjvjd66LR5sb9hvmsE5RRW2u2f9oisZ5jogAo8rDYW7wLQoUaMRNKTYV",
  "key16": "4suwGsmcDLUdUpBJKBdfkexuFKGT5RETEg8FvmSizJzDrBgbtbhAA65aRA3xiLPuxAt4GjB8Qdq2DZ4DPDUnNFtT",
  "key17": "3evdFafzPkLnxhJGDLdAJpMKhU9kmor7J6b1ELPYRoDrBYteUKd9dxVv7jDwYdet3BqUS9quLGXSzRqYbPzbtKiG",
  "key18": "5v1F4LtaJn2AbRdgYgSADVHZmi4UMdwwf3xrXKpgXs16j2Sygx7ZviAgx5n1g3fQ9aSFLV3s6e7cXwQ6Cx78U78a",
  "key19": "5ahUfqA1WKjyaC4zw8WtF6P9mJ5FWtBwv9JHCPDG8SKsQqoJsxaN38Fn3H7RSUSvhFF7ec58P9ffSJRGAwWpLW5o",
  "key20": "4ezACtqYZhCkvjiVoPiSagBiCdweAkRG1aXqoBnLFrRjY6VZ1SjHmLzKFqJ6W1xFcLQh2mRgszS16Bo7yye6oyLe",
  "key21": "3DSa9XU4ZWXyYtAEoiyL41g2nrrpPzJcMZdwoiV9KktSH6T1REWpPoBH6s2jW8DqHyzzrM6pGW5YXwGmRLcFm7JJ",
  "key22": "4UQscomivJ6u3QuLdzSSAt8cnKLML7pW53yLWUZT6eFnY2rV5LCZ7SQeC5ykNb7q1V3ZYYNXgwrXRZDDdiAM5rca",
  "key23": "2Hsbi8XkNXTGwVXAEPijVd9evEL2pqbJFidF82T2kVApQjCYySgR4iyewmaD8gBLX4jzSfWeNmcNTmn5M7v5cfJ8",
  "key24": "2VfyqgDnwCKiR82DPVW2xGNSosf9z7ewx6WoDBu1F9Kh2FSBqV1KKcBcW6hwk5MikQa8XinCUad1uHAGb8LbJV5U",
  "key25": "4ZzLiGhJaobvmEJEeJkRQneupXyJpcJxPSG2vxvM8A4ThfR4sZBmEJxM2PrqmGEWhKPg5dRT6qLYfZMwo86EhMTr",
  "key26": "277pgtTFfNSxTaPS2Sin7WE8AijxtU88i6PUtNYR8xoCcjV9VLwintsUjDsQWVhP8D8pGFY5NugSqdSwSz8KTqHe",
  "key27": "41WzCoxuZs8iatUU1AaEgUVTdBdjVPyYTWkq67RiMyaqsRwbC8QYJWhZsVgypqMDkLyCHfTgW6iZ5UninLJz5xdE",
  "key28": "5XP7s6ANTqoTYwvUFL3uYX2quqhNdMCFRDwDcNM6zD3UciQqwtnPQawojLu9mx9HcHeJTRPy9Y59ySZbv7B83G5u",
  "key29": "5JLZREprJvyZFvXTzKjoRaEZHqaQZEydEo8mDmkN4kGtiv39ywpnvLzG78nxEzLbf7iJXDYa8ESegW52zK8Kdz12",
  "key30": "4VJCy65gPrCpN42u6v8FApQizBZc5PhSpqMwWm3afpNMSHaTETxJDyRWJJ3LFpgob8NNZv3gTYeVCq23BbocPwGp",
  "key31": "5GPTgAJxRrQ4B2ZyEx812FxkLvqpukqU5KMPPsw7zw4yLupHoPkD6hJNaBeh1GpCtLt9mDQBEUewvg6QnTbjriae",
  "key32": "5SvNKTKDEnNw3TqfKLvrkQcS5gQXUWGGKwtPNcySRVeHn8V8p3BCDrHVUcYtupprbLty4dRS41g1jdAgnp7nuFvV",
  "key33": "3bBw83jgKNyUh7y5SaFAyXXs1ZBZKgbtEyqMyFuAMhTNYLjYUhHu7n1UjeRpnwg9MetUmBtgPnHmaBk8PDDnr8hC",
  "key34": "4S4EVMqtaGfHWmGWK4wJGD31rZfoK6kQpHSm4CX9vdRzkVSVEZ5A2tiKfqcu4zcEDifvn6ruNsSYP5M3bkkkurm2",
  "key35": "Hqa2xcboBe9T8zSPa21tN7u1bFCHBNTeCNVM5aCb5KrTTWW3ZyCR1bgf9N7AaLBJnMadCdMbit8aJFDGYQMMQs3",
  "key36": "3HtsqETvWZpA7gdmJuLPez16ryKHTmnG2CZGmGQ3WZDsxACQW3grFEzkmdGqT2U64TrpLAvmi7gbLPEHu7MJ4mmn",
  "key37": "c7MsL12dw87mvBUCrHW45T91ypUGR1TaAXHtztVnGQqfus6VbM6Ww4rEzYAwXS4yxdDLFjxB1tK4t7EwSF7aLqd",
  "key38": "2jGUhNixuR2cUFfViX1P4dJH1BWN4G8fdVvDwuDko4gvHLz88MEPTgAf9biznTAzGFcqHiEg9YSjGBaN2kmkSLqy",
  "key39": "5eUo1Njh9EU8ZwHXqK2QmnybvMskqLhuoqdVuPPHGcsJERTip7J8HaDtofJfCnBMTKY2uVE2XcNDazediWUr8mPQ",
  "key40": "2sM2mtUDxTtevnWynkECJihXmdWWJ8TY6zkbC5FxEgNi5WNa452WNWbxrvczXP5PVfuMhvFAt1msatGNRqVhnFhM",
  "key41": "3qVPX6fYLhNRG1f8wD1WQDKUdQauBosHX21Rjotwid2aB3anmZZhN7tQNefUAoactW3tzrvtp9xNsoLCMMM9KZFR"
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
