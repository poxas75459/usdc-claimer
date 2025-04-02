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
    "25kPHskqzB3zh7r5LNGUUpeNFekxRmo9vpMYsurLFU7QzPGg2nU5by366ZrvCdaGKk3EAtmpsvY9WjbxvLSzqvgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w4SvEDydYWXMFsY1YRQx7myMAosBSTerTL8ZdehwmtepMUm8ocaNi9v7dzHhwR41hPZtJxSPYQAEwWp9LY86T47",
  "key1": "Ubdtvo68wtwY8J2mK3sfcyMV1HocesE7hYugPzYQEQHpQ78Gtp81u6njU8k5YE53Ei7HBfcD2d8rnf2GFKqjTUM",
  "key2": "3oXu2n3pbgQzkruB19xfzjKY9u3rcMonT6TyHKagFtNQ8rAzgqsqsHG7AR3crEbmDaAnNCYmwYKjg7oA5NjexYyR",
  "key3": "4q2Nzwh5axs4dp5BWeCBNcKbw2RygjyX8kSBCEEqeT7FxEA1EEccnpi4wFjPDVov1CqjqVhtFKgh8RHfbjW7hdtq",
  "key4": "2NJiBWWH1wzfNpbL7vzHXMZVXBiv7rcVNXTMZyErkDFLXqzYztQx6UL7y8xD9UoCq99sACKgSorytMumwGwaJMoc",
  "key5": "5MFFQY7mjKj5uBPCaNHC2Jmy5cCQaHMWgaV3YkWtFzuPUjYzVQegcMkcKZf1QmuwqLPpivzYcNSJUSqskDQoBQ8E",
  "key6": "3c9AxNrCiPMmSPqzMe82b2uEj9CJXUkaQVLkLQci5k9EoNwuu98AmnnLak8VgyYymSSsuUqtshzt7hkAHzMgVvw7",
  "key7": "5ZRb2b9bXMcTe5zorcSjDSXc6GaaLtQxseB1uN2ym9CK4RerqzMAqJWfr82nh5itjdvnMajqXwJHMrSnp9cD6wLQ",
  "key8": "3s3zMtM1nCs9qgYYPvyNZ9RCyDjAs6J61DPC8j4XoWye3bRSgPXpGLtCzboxxBFamBXuavb5DsKuDVmFfoEzSx9S",
  "key9": "2kk6QCXHLVAUyH9Nx12wJ2PnA1Sk6ffxTtCeNt13ToonJF5g4vrTEVGt1fQcnXh9i6cvtwZiB9BCX7Fdwkw95HCk",
  "key10": "2RnnFdXjA845sS8whnzQSVAQDG2GVEHELWEXNZ2Wp56dr8sDZL2QjguntrYRuotXDNumVbYYwfYgJFTWFkWR9LT3",
  "key11": "5jH6p8aR2eV4dgChm5f1DtKE2RzqjwJ8QveykoFZzQwRfooYWwnnSQCCKMoTQovgd2qseJNEsd6hcMuJiqoS1MhR",
  "key12": "4X8M3SNT6PPK1C7jQse4xX9XFHvPHVuezzswnn8wKh3FV5u7AQqpVogEur3o1xSK7kjxnyDA1cUMuefnseA8eQNm",
  "key13": "2wLFdUn7UqiFRQYGxiaUGjmcHUMk1mr74Tdzr7PGUYp6k5sdW7njAaTguF9ipvcDoU332XKAE3shGcvGYnB5hmFZ",
  "key14": "3apYgv6pg4PGvs9yG3is9L7nMAZtdvRKnsfNZSux2RjHxb8v2g7aavAqgjkLftHEBd6UGtv2jCQk3cazm41xkoYL",
  "key15": "65WNkQhQWX2vJXnUwnqr2vFCafBzfn9H7TYJZHoZddX3KLH1f8VwLbyD1ubpXtkytHLnrxUenPEmYustCJGYHZyk",
  "key16": "52262nA5ZNd3hR6NH9R5aTEDrsuxe3qxGqeAtC5vxivr7t9efc3wCdPCiENLuFu566LkQg3CMpwqATNnKrKA2AQK",
  "key17": "231BpfkMkww8C8skPSJH1vXmJC4kZuwPvmDteeibYKqjVTVzhdB8sF7cTuaApQWxgpGyZPhmnz9bwqvf68619nJd",
  "key18": "4vJnKKqQMKRmt6zi1D7XmXY2NggoEwgoutduKMgNDUJQgUirqezsm9a5akyRVrxToJVa5ggxCKxt9DbG1nGnCjQF",
  "key19": "46iWc7P8YnmzxDEXDpKcYy9TLTa85ZJHz8ixS624JzM8RzXp5TxjG263UuwNq53YsQkc5ua2G1PhNP5Axey5fzVB",
  "key20": "2fPd22AdYHNSodQyhCzr72hpPupFtQhinuFyPnv4dM4q7tFKUzonqT7YvG9iJckdZd8HGE7uXmx84zcei56VEz9Z",
  "key21": "r33J1F8kcq4WNuSqDmcMEjyxAjfJZWX6zz8MYEgCwm5jvhZVvHTaxgctoK6WHa5UQZ6VCdAamhs7otuDTJUageu",
  "key22": "PW4GcN9XaBpQfFJtjirYQqmAsoQRqAQe33huCMbQ5T4emUxrGRRVLC2RpH6kRZLoSqFHGrmcRupZgQS67BjQzK1",
  "key23": "4XUwe7WCQkJ5pUJGWKBx5QJgFYDKc2bb25rh4EosmySDN74JoF8roiNmd7bZPq7segY399KcYRLB7LvL7x1ygBXt",
  "key24": "5T8cDAYMxzTfJrMA4PnZ6SUE5eHGWYWqpDa2vUnyRd4xYZPnDW4FaSiaUSJbQpqjoVQJ4ThhYFkzmj1v843AQx5r",
  "key25": "CNTWauERFB2oKJYDb9tbeszpdpQkUHxJJy6QZn2SMzukYzwasWHJ9H5a4mMNhYmg6TAxXf8LeUoYmcaWh63mMTa",
  "key26": "4wQGdFZpqwvaHAXeRvdAviDed9CtF6sNhZVmdVb1naFfHWXBv9Uv2ijxizTkCexSBsLW7EacGeHsefzH1tb59gsF",
  "key27": "3DHHVzT3M15oHFUxABX8NBAFYUCd4xydepQWtFb65gNvnugiFdFwUzkycihWCJgJXZjjFAdSAkaJDo4Dj7AWwUZy"
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
