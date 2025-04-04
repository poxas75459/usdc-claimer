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
    "5Mn7tRmrmYRZvdJPEAAZKADLfZXPGcdaGQNNEWtAfph127NXXiqDkqrXrjEtkmn44MppKLYicQL9N9RWNNTuF21Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5itxNyuViSvGtKb25iayfom4AppPTZKyGmKWmRoJNT9T1MGPdsXC5r3LBTc5KdSnKvvYWDvw4BWvsedELrTUoaZp",
  "key1": "3we3Cx6brkKGCWww9gsHiFdySJXjRUTSpBVvW8kaTWMLw97STT1V72A5kUiF1cRBdUKNTWoxunzNe9tuVW5UdFub",
  "key2": "37K3ANynv99QsvLD9DfbTiWimF9niizVAn5y7S7WMmHdjb3n4s8Vj5EkGb7c9ho9irJztRN5RntJnWciHET2ACzj",
  "key3": "4kefVFfopW7mJezv3JPohdJEdGcBJGQ88WAo6MRbPyMNU5YGp4TzDpgDpkuvEtnjvy6LJm9c9Sv2qXzG7JBS8Ff8",
  "key4": "4cNU4a13inaPkqSqYxH2as4TJMkJEy1cgveq5cxxfVMMGsoambaLSt2WvLvZ2ShtKNvYeQoFPtH3AU2WCJyVyPtJ",
  "key5": "66pFkzKYYNgsPEcueNotpYAeN6QjG5MJo3adcg2QFEwF5HEe7dmTzGK31Lkckec6YY7ssKxcVeGa5f8EmRkZpFeu",
  "key6": "z3ssmjTzxAYprKMNHn86wJZUm6uT44KUH4GP3HujMM6PtmE7kxo4gwtCACVUeqxjcyFQuUrNvXkgksMaTa1RdWM",
  "key7": "oD9Cak7zw9RMYj68S5NMe1rJLqhQda6cDq6UKWNgNon2vQnASrXUyPaA3zhVtSGjPNfaZVZH1umQNk4PP8DMJGp",
  "key8": "5TbJBMx6DC1pQmGB3XGeYwhfmoCFsAnogPDSCzqH8igAEGT2BBNXmtLir1h6JV3QNXW3gHfbj8M1HGgDvkQVPfyJ",
  "key9": "34DdZY3woSLJ3rkvxC9GujSpUsp3AprdKZnBpuS9ER19f4o1JFwsqxDejTWR8b3VTQR6kzGJEKAfqftaPETqtuTD",
  "key10": "2NEUKPwoXav8JtbcVFwEBY7ogUX4UZWxzZ4JHyXr5AN54ahU9KzZv6mXuPA6JA7Pbze8Utgo8YdAAXNu65Fo5xBE",
  "key11": "4yAK98MLbZStqwUzqQZ6sUHz1L2fRXaK2arcXFgDLSigWUDf66tymw91kkFuuMMt9tzimEtr16uGfLUQd7HmFo6y",
  "key12": "2ArkyJA7AYxrNUtkhfSt9uYxtXA8Q17e8NNJGjwQeoojKzF3MmMPhAhTEPx3541nDdPx4q9qfX47a6KwVea3JYZo",
  "key13": "2rnS3fkNWA9B6h5kaNRp4agjNdQZoHVyCwEB34Mpz7mLAjF5LwkgxrffzQRKAeEe7ST5ShqVLhr5mCuxTQR2EtgM",
  "key14": "2JzRDkjxrpcFn8M4ZkVEUmbUrazk4opgtkkbaRbigZnLMCdV31KCvySqxvuZAsYEF5uwBKgMD9mCUJKk7dP1Va2K",
  "key15": "5wR86CEth92VRS2cJsHPkUiRE1koCCYWyFWb3QpL7PMP5BC35TpFUr4RHbvr9Laiv3QcGXfZQFaWtvpeAPdevJ3w",
  "key16": "1pEbjNfBZfL8oMUzc22WeDUJjNPmN95B2TF7g7xGW2wqNZMVvdbhD6cKJ3JmSwy7dNdWJumwXoKm13Zcv113e7S",
  "key17": "4T9NRA3fAeVYGA1THtH4Azi6RGNuz5ivBDyFUEp9v2QqsrzyzBSCsUwzK8CHeJd76z92kEPjYyDTZov7miR4ijPF",
  "key18": "5s9tnGtEcEipSix9XHg6c7nVS17zm32mjBmBxRwBErpuptwcJo9CbX6NJPWTGSjB9sNuRfowveAvMJ1ziMXdcu4Q",
  "key19": "2JwzCSkztv8Fqjf7NHzDG6Ah9e8junyYDWPTZ2CHWzK5RwA4wBXCDpLRaGH5iYN6wDZ9g9vY7dsgfcu78R6VWUdQ",
  "key20": "5NuQLGFrCo94Gmv6GuXrL7pZkqLSdMGnLvpe9iq187pEkDBMMtc8M5Fczwyk99VwqGrnh8raBS1YEsbztiMEaczj",
  "key21": "4DorCMNTe6ssDbWGy9DuXcmbkmrXUkBrrDa9RzWVGA4Vmfk5N9okkRCSN74Hs21hoCxmiCYH2k1SvhamEupfoyUa",
  "key22": "FrE6jRr8fJ9TgfyARgp8ocXXvK2oGZxYmVv1HzXe14EUsDxjEs7NmeNrwsQrkExQYMfL99P5HvCcTRfqyAh7Kq2",
  "key23": "pGZYV1KorTSAFRfktiuVEKTdYyrLAMPvnAv7P1HWogcGwycTDTaLP1puchN5JkRNaHdu8sbk57WWAYUvyqdwiLU",
  "key24": "31TryGZm1xiBzw9sZJNZQiqrd8ueehh4DHwBqm7PNjk4HY3NSdMK1A4SokLLK6xC1HL96byGtUw13KFzuzKHuv2P",
  "key25": "2oMbm7fbCRGpmqbBsxrxerUEz5CNQiTU1hwLT7vaaXjy5FVb9E6Xd8tQaB1NV62mrVwGRvMuYMewozSf6fd2fxbu",
  "key26": "RLPCcRZpg6P5MGmURdUBSppj3RqdEAFvr9VqwQMjBJGJwZ4QK9KMRL2H7iEkfNCFeEnJpiKZiD6NkcppMWzhcNE",
  "key27": "2HgpQVwK3ENi1FzmMcx83FXt33TBvsHbXSgd4gBtCHdboLmBgTZmYM1wrYzqiZ45sqSTyc6LkjQQzdbopJZVGEf4",
  "key28": "47HGPL713YMPtu2JSsiSiYLWt7BLHGhHW11RgQsExWUPXk8RC8QxywphnEAPJGignV3VVnrvyoNBeYkJ6uyTD4Wk",
  "key29": "5h2eYPPXjQyX6gNQ1poKn85UTqpBVS81AeZLqCnudNjiees852N8DvMKRRdsP9sF7VM6eWQkBxVgmqmW6L48yLfa",
  "key30": "5VF1QPL5GGsTkjKzvnHZAdKiriqq3Z6RiPPvpqb4yBrhHibBSZ8AEcHTtYnC6t3cPNPL1aPF5Upwzd8J1ev3HuWF",
  "key31": "3xsyrbFaHfpCLMXf2aZq51d8jVojVCRoSkfvmKWB3gczkCLPorUpcVBWkuiC84NyJqrcvrJMvjK5DzX8VSC6Mg6w",
  "key32": "EMrsTfZKv9YYG2iPTn6dE7WjyZ3Q37SEMz8mog25HhziTnstBHWK1XYzFzghQaL7ShhbGQKPP3v6g7R2wcKD9iY",
  "key33": "3mwT1oahGZqE8Gbu6jijnxZsFXe5WoH36FjEFVh7gFUisUTNW7x9F8n4TegHu24x92CEzmtwhUhWFgzQqqywJ2x9"
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
