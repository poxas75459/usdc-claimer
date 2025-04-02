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
    "5vD5f8MqjD4DzLJhyR7YbnA7yT2faADG89QJ682HtP1Y4NEbJY6TpC3mHk8H1ua68Z15zv1SamP6XryapyGByaC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yqmEQNvybKd1SAhDtFPy6TF4jN1KeQ3CkZXCiwnwKETKoFgmyhNEQgL9Zn3JJRdsxvJZqhd6GKTqBJx3yNd3Bt4",
  "key1": "2adtuuH3X93eVzdDuiK39q3xAozddTTjQ2XQ3eRqkXhEuqRFRsFydMtdLauCA7kB9f9BSEogxUEz7v2vtSmYcH4g",
  "key2": "AyVP2PTkB9CDV4mEtKhLgRgfGhEj3bEhaAt7RMQDsgueT4q4TaCzYnxgxi7yzdUYHtndvC7wm8dyZLaoj17UPDZ",
  "key3": "4bmsV4PXEDxuDGembWWyXmCZV6MTU6kwugLUkMoDe2ZSLzok82DHepeoaUMoriDbgSWze5VsWZmbveUBvBxnrNCQ",
  "key4": "3BCve7q6jiM63XpEs8rS84EXzRtS5NNMhYNNq72qFeyjcLfxvxvH1onx7NoscByW5Tgo6hJigMn7vxeuPjSwLtcf",
  "key5": "m658fDA4eQF5h9R4MXHtN7itgrfobh6nFzZHdH5TogNbRMnLWFT1MpEpnp2c5KuggMVXR3En5wGD2dgUH3xCiyz",
  "key6": "4QK42ay7q8XbB7gRd4wqGTSdTDWMNfSqBdtNHorU9HGCe6BkhAXPYEdHkZzFzMy5QB1FyewhGgqcbE5mUgz9nmth",
  "key7": "2ykmsfmW6Yr4r44DxPiELXZHErpqhNAq82oCBgdrLZSe39ov4aShhWpEdevD6i32pGnw7tJ9biqLbPPviHBJ7e5A",
  "key8": "3nMLH1iTgUXRC5iV9DpGfDEVzszHtn7xSD2GwPHxrZA4ipPMTZJfJ8Hd4V4GWQjL9hMdiDTUKQi199rHUqJNgUED",
  "key9": "4kEPsDtwV4UmFWu35YVtd7WUKoB63cesfskP6QpQ3vhiBY41JeNVx9Gty5rXAtpYe99wv4sDTZMhe3xz72uAVTmW",
  "key10": "3Gm6F9iPnti2b1mx5Bs7hTfULmnQwuq5Gk9rjjguCKytVdBQ9ANihgRkFWr6SmNc1VWbJSi2LAXZ3yZBbmkCvk7B",
  "key11": "4iC8aN4JvXqJ5Zihz7AJnN7mx7myzY3JCeE6t6gKa1YFAYiFZx7zGGFQacp5vhRii7RVjGZQA1A1TV5jvk9UgESU",
  "key12": "5m3DGzmwPAgbABWL3EpydiH6MNfEpGXNS3zUv8tJijHCj8Tk6QoQ2DthGBPnGxJVs4kuLVXccE1VhHXheWBABkDw",
  "key13": "tDjYJW2BAVwFCT3xaU66vayzAu1tNw5mwfTVQmtYyeJ8N6ArruCSDvSPDaAgJir1iN8xjzGmLDo3zsh7SDvjYVm",
  "key14": "3BbPQLfdqYv6H37tpmtXMBkziV9E95esyAHaEttWNecNqXpSRCZnm48hvYec7AJGgXaFMX8ZPJ53ZX1CqHR7Crme",
  "key15": "3eRnYw9wfEb1TijxANYe99RX2mkWURDT6atAV68ybSgTKE9j532gk4n7GioCdrEs53fQdmFPd6yYzY1JeVD3NCnN",
  "key16": "533iFdHADEk6o9sr8m3uqBq6yNPp4NtAdXCXEaeJY3npX2HiWLWaJvVT2eRN4DyBEkPTTFLvEwcwsGWUaHmbxDzi",
  "key17": "2TAVmw65yxDxyik2UtHDGEjQtEpKmfx1bS9ix3DeuHRoP6XKZp54Rbqoo6iF4muFLwt3gkEpZjp97rTCdUHyYK5u",
  "key18": "DKRZx8UVMLho81kL4d5ynB79k7k7jYTtyqbmGFppLfMwfEiE7bFC9FEf23xNvJcvmE5yoDDv7GU2DBm1jvzAitW",
  "key19": "2H9Kzi4okw1z7HApnUsnoNQrKRoCpUNUbZXDQA8K59ZAzdEfmB1echenN8RBsnwpva4hz3eJASfJSQUEsbBNNr9z",
  "key20": "3guXjptezSeW3E7BKGez89re4c7GCFbG6RAzs2DaTs4Y5e4xFzohbU4zmhetmntp2Q4xBGMahenTrYkCL15RAUrP",
  "key21": "4amHBndVEBPhkXseEz3U7UCR5rJnD3878c4uM8GymgGB1sYGXoeSr5squE5CQeeZHqfv2imMCoQ9xfGt75RUaotv",
  "key22": "2sBXGsipngz7uXDdFCoZ3pRcKeT4wHN38g1qc3t3GahEPCLnHM3HBNvdRaqbACGAwBM9pPFWGkb9EmfY7LePohnZ",
  "key23": "HK7kqS7mXWgY7f1k58Cdw8X1nHbf6ZYP76D96mj8THdqJu6Sg5C5mGeu64QqjdZqBpDAWKLuU63BtGWaFWRt9do",
  "key24": "2GiR7aDgCpR2CAfU84Fra74TczK5agiW5y24fQCfLgzk8MrvdwG3J2dbV46MSakqfEEAooTqvVxqWaCX6eRcLcNd",
  "key25": "2g83VLze4NQALcgLghKdyTGsTH1zXtehMfUM6UxVK2QgyrYht9s5QVELJgNMEXLrLSeouiDzaomBf97JmDQYx5N9",
  "key26": "E3YuyNEhT3EQbsaMyJDmSmZHdogHZnoPNTzMxT9EzdLZ7WgFCY5jLNs2bs4LGURfQ7WxaSFcct4Hoonbp9tYe36",
  "key27": "3SUhKHkQX7eueCuzcm34VUo4cLeggykJaxXPuAa4KUPTFvGfz8hppcCr6vcSbt8DduuQ6jYuDq16tGVqyo1JGk7t",
  "key28": "2T3eo1RDXE7EAhEj2Fn98rWF1wD64tyJk2DmmtsiBqBk8zGJK6wFkyuw3u1AT5BcNipx8AhNQ4FeXFQztfc5b1fa",
  "key29": "4DqpR9qyDpmRg7F9ACSdestKp5pQprJZxJWrYqkweZjveaFj7qz8oDgy1CaGb7tAM3ndpo4JExmZDYf3FB5WQNjs",
  "key30": "5k4yCeGHm8f4cwoUvV8rQpLJ933TsnRQkP2sdGiDehFFMyHwKLUjtPSjmHabvKPknqTtWgTaZaXC53xxPuSLKgLn",
  "key31": "54VPttQpz8SEv7pXLAZVPwnGuzWYBVEW74RFEdkmQJdmzeXCuD7sszKFwTqQeeEQy27jtqFe3bJN8fywGU5vtooW",
  "key32": "4K9LHE63JCVdS1jb9PFVZxPK38niXvPXk45rCCyf8pLVTk7A1upvHGZvhpqhMGungrby2WeARDeLc6dwJnivKy5Q",
  "key33": "4bFcoYoVzr1o6BVGVMmD5F6wwe4Mp2fz4PRTyxNngdv1GCndpXHkNmasDNrfMbAszW2vwquY8jvUqgUCitTCv7E2",
  "key34": "43tBNeMEKmFD7DfTC4SqzN8KNv5XgyvrVDAfhgTeRiX3Aecg1kXMuvPpaNKNZJKzTAYEjpQLs77zyZDeq6k9UNLY",
  "key35": "5yi9csUZasp3vGVDWyKiNsJquvzJSS4DVEntwyC6HgrEBaCHzPR82Rp9GcHHEBGVFYvKPcawtiYUjy66Bw5MKqS6",
  "key36": "3nn96tPduF2qkD5i4Hf2jPMrvm2AFXr85TxtGLRbgHRrr9iKYcDQwGfsczTEJFWjTDQT5YyaUrXx3pmohKjCa5Xu",
  "key37": "3WyXRoAjioSLNTgFZdT4U7MP3zzZTiUbq6MEv2YQMWciW67YTMuRJk9puFaUVrvbsnkSPr6qLGGNh6J3QKbZhrgx",
  "key38": "4W94uzfkGxQFGEfWy2ZqCiRuJLF5HNMeC3NjTmat2AJTvGCxok27LJojf75S27DjB4wWR8iUFjtGoPYfarne2qag",
  "key39": "KwEjyX6SVFz3VqNZQzGHVn4vzVJPQuAwnDgPKHhLTAbiDfaGFPdsi22bPRXBH25vj7LT43b6MFKtHaxz5tqLE1D",
  "key40": "333rfTsWbYmyJmSgAM47pSwat3cTGsc51ERVcJbRwNf2Us1NQEHBcQwVFRynXEgviUBzPAZRUu9bHreMQqarnQKt",
  "key41": "3fYoWGTzey9XhDaE7pbFYVdW22yFbju9K4Sek9hKQ3eHQJJBjYuPeEcjcqrbYgQhqVqgUAMoP9n6xrtcvbQFK367",
  "key42": "qF9k8BdKzjUfH4aTzNi2t27oHLGafbc1SS1caJ3UHqe2TmAmz1E3rkUGJ4AWM8D4UcJCg6r7tBA1rcomkbY29g8",
  "key43": "5gUqKVcNqAoaEf9fXusnp4BiMoba2WdFPVpEJaYRKVZ2gYDKS3MREAkTWA21X9mBYzWkanjHdsnxCHewZ3gqYJwi",
  "key44": "5fCWZJzPLFaRR2EobkDYWyHYonVxD9ywyBz4KjHqyuA6Yh1TNeyZFe7cS5URksKJtrP6uX9Fen2eUPbLWxDGhRK7"
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
