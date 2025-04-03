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
    "39S6f3A8XuXwiSvneyWP8Zrr1UFZ3PpMX7w2BReqP3XsYtCeUXbwkyExyTCbS1KvvGozFWSHBFbwYbcEEYmqSrzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MNqA3SUD8ffG6xAVHktEusD4r6pvSVj8dpCyEVZ9A3kjwcD5w3FifcysTNQ6vZKuVqpCuiKvxvLhtLv8ZUkj3ZG",
  "key1": "4RyC5FY3CuLibcBGTkBHRN2Pw3zMTkQSjon5mGzDZBoMKV3ACkaS6WmT8XXTxXFqnNE3ZNXXmuPjye3mKNjWnicY",
  "key2": "3QmToRdsFGqRPY2tKCtV8zzpcihebd3vZKAqrHh96S8dVBzSQuKQhrsaBNdTYvTjVH47ELYzejD2DnxYmD4KMdxq",
  "key3": "4bSWdKnepHo9U44LAZ5zKLsvRnYsrjJoayoJTufHhBkmVE8onkwPyg8PVRVC9HAECikvud4RVofDBra4Ztp2FzwY",
  "key4": "2ygZAsJ5b11jDYuhhH75ge7LgGSoc1NPu82yWp7mo53kSc4tdW71XDW8L8zUn1uduAqcHnoLXepd345sgK8Fr75f",
  "key5": "d6qYRyho3qhwLR1v8tDs3qC2NEqvLg9waGM1i2ibXnCEsCX9XuTu2YYKgjKistCEo4FyqYFzF29mpTS3uRFmRco",
  "key6": "4c9oWDgRjb8ucz9CYWamaYVunGn3TrAJK5gt7u3ye8v1G7pQS5BPJYjRzzUTgj2A1wLsyUwpbKdkny8CBLNAhpF4",
  "key7": "2zkEoH11Y26nK1GAGKkGBcLG9zzzkXcZxjeFt6a3gcyNvC7gKqELqpRNp2GpYd8A1tFiuZXNMmRPzWhZZESauJQh",
  "key8": "2ETMkLHx5KSpgtVRGnt1LvB7UTEjVMb7hLTVBkshu4nimVYAshoex9hk4ik1zLskcBHY4HjArfL49ovw4DcMK3uH",
  "key9": "3iWDno8rz1R2Ejd3XaagXPbyzBYG5CrVDE31PokMufPzXWE1zsKoPxmusPQvQyem3D6LCWKepNyUC3vVgJ92eju4",
  "key10": "2U32KtpmEj6K85w76RKekSYc8TG7JvaKXH9D9XY281ALRF27TQQzCCaDzaA5cKcr314Vn46HFiaPGiD7YVG9wD3p",
  "key11": "56f8D54Tr5gLMZf5ZMbEAaMzHR9vnbfFVQq48VcsKWqJHdGt71gxLvGPMdpP3Q1nTS9EHVBLZAeuapZ7D4TXufK7",
  "key12": "3gKv62ZqPiHLyefBHYnCgR4XbsszydZT5bzLrx56kEuNVdixGDy8WDbZ1ETGeh6piNNBeczQLefmd6y4hwEmnb3c",
  "key13": "2WVwoSG2zbRho5S1TfJFBYfZAnSEcPzgjkWBYAHQdVeMzTtzVcUFSK8yyYCs9FwLBz8iKy8XB7HMgwrXeF7Cy6PQ",
  "key14": "59YyDAxJ4TpU1pmJCVRawdNXfF8YnmVZVvGzRMzqqx7YXqaNn59bRUPteRmZcTTTHsRymyB2Hz9P3N2gVTfooCbS",
  "key15": "2fQaG1vEpX7yeUMByfuDSGcUeTNi12Wb9iABa5bBHkDYpCPTqPuGWrNHju3ocrD5gqT5AueeGZkGrXCGNXkmDi3d",
  "key16": "2LFuVtzrgdeBMSPq3NZDjDBvqAjGKruSsBpPSYBrxqK1b1BLLpPGQ6u3MgmFCbiZA6BfgRMKuCcPQ9pAd7sVAVaC",
  "key17": "1LVCMyokByGzewpkhZMxVBjwtdEiPAYfbo6h8MKANAoT5T8QCxx1Z5wEfiWtwDig4pscSNcUNXJaFPkgW68rC76",
  "key18": "2PgSafABedfqpNKzF91tX2PU8eJTvKbYe6HPyqkprjvx9JYwQo9xHwGPLFwFNSzJzbYHbZDJcVmUcxRMKaP9gKa9",
  "key19": "4m7JtpjA16qDAhyBuL1h8HoXMRNanJrZzG5CZR8EqdfUtCNabE1Bu4pLyCKhfvDsMfQ1L6KYtzaNM8RxGD7vTXYK",
  "key20": "2iHTMBy5ewxN3EqwK1SjNqvf5QouETuccPphZ3V2TBFrA3GBiKpbeU13jgFqwgcKTSauRKM4ruvi325auBjwn4BR",
  "key21": "2Y1N31SeXRj4MgmkVnJDKKuZnBepdddTBuvS9L7XGBZbeeS3Mo5YBprAfq2kZLM8ei3fHPVx1i4TCwv1HEcKSRkq",
  "key22": "4a47WiQ7Ub7gMogmDqM6voKrkYgLrvh8gLqb5BHhwTHBEx61ugXuE5ePo3VUqJ5RJvqNwMP2adYtoaem6GDKpHRq",
  "key23": "Pdw4CXFkHqVkYRNPpuXDN411Ek2YPSPRViipHreTYqZBR3YBUZCuPbKjgbRykTBqbcou7DgU9NUojeAHjSPqtyB",
  "key24": "5nKvFGJzkPRjMqCqjokre46RdX98ydNzvuH2A1B8sEgLuzpbq7dfQFubGWsegbb8y1W3mRh8oa5anYno5HdNTKUu",
  "key25": "5TjnnCrsAijZzVqXwaJvk6jy2isBptAk5AwtakUGApT4YiLsaqTpeM88iwvNH1KGi4Yn1PK2FeL6AtFwpZ253KAd",
  "key26": "4PkHzoib45aMtK2UYVht2j7KKdarX7Y6qFiuppVbmk2WyVRJxAWqERuhQK95G88gp8NXBRj8m3AwkrP6VyUJpXM4",
  "key27": "3vnVi3WJNeigh2MUTBrTdwEYySw626CoBGTbpovBN9v447ayWB31Dd6CtTZMQ72TDYEXsXfNvBN9X5RpktD2TMfk",
  "key28": "3hmfumVrtX8KGe6skuWJ1pNfFRAh5HipaQmTCVEUKrBhpqZu6oLuFYmP7AS6sWzovHAB8EBBXeFQSYf1kZSGvUTa",
  "key29": "3u3LrYBKfGYPtAKGVnRT6qxjHqfnP7N4U7BgsgtfZL6FYtqeMYyPmA2bKhWh1RbEpRStf11vaoe5mu9FhTybg8cg",
  "key30": "4PhjDKESDsWrGviAHsuD7cV9aK4LR8oDz9yBVzCzcmf98vVxUmwm3KhfQrrAQ9kWATWV28Cs8veJEvVYA2XYNhD3",
  "key31": "555FXmgiuQ6X5SFEZNLiv2kUCP4NKC8zeeyYy6H6XWnTaW6pemHNiSyRBDh1kmQw8PHPFjnoADFpcEUaPQCz3qjF",
  "key32": "4aDCFxXJev6RtANCgCgPt2mRdSGa5Ch8iPpiz2NVpdiFDAzgjHFLMrHdujEMsFCNN9LNAXVPWHiJUM6pnhUztNvt",
  "key33": "4ZrBE7ibnD7FTGhzPHHxzhz486e41UCkRNNKyj4F3WLx1EDuR8vzmCnBHZQB8iSLYALpqtEThyMpjb5u9AarD6Re"
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
