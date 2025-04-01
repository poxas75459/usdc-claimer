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
    "3DqeTyMRXqg8V5kmijXEYdMEjB9L9awHFkuEfDqFsRTuQmvVcGXuRmtGXdTTNvowH4Yndv7A3jyk3qyisAhCRUyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57TJndpgrokkieYS75L7g3cu1jTNEroNc6HPZFWU6Bx9YcnqMwsQWPJ1sdC9UB9cekeFbfx5TvSe9ftJe3HP7JW7",
  "key1": "3hsLSSNYuuTsEiZYN3wpXo6qjTybMLXDtbnXWxUUfp59giztsdXGbew1FRQXCau7TPAmbhgASQYASPRax6h1dewR",
  "key2": "3x5v2EBYvsdNhthEoL3FSDKcqPQ83Y3U3ZCKJp6ErFh4oJJrrkyW9Ypd8NJNGYBwTZTAZBMuPLgwKnFFDaKKgnPL",
  "key3": "EaS67D68bXucmSn7VThvrfAM97PW112ZkvpmsBA7B4KwSj7Fz5Sv4wgX3JZHWH32j4KKfTpTtQoNDien9sMaDKB",
  "key4": "2ScxWdyQ2LNdcigiS5tPGBxFHmCtKwopSQhCtawuW3hb8ofxyqb47eSK6y1Ki3SzZ8eoskQQw8EQXr5hKmESb2ia",
  "key5": "3YcPNgPyDiimg7GSUtbwNMPZh2i4QFj1JGPgcypnXKF7GmXcmVX5TQEy4czsLvPrhVVorQicGupB6d1UKEgzQrrG",
  "key6": "63JFryfxreCFnS985BSSF5nUXtjAz27yNfcshzcKdTyis3hTWJ16DbbBrRoc3HrEfsUNFQPdnbtX98F4VH8WXkpJ",
  "key7": "351ZjP7EidaDUQXrm5zCZFX7BJQ9nUUwawfzfw9mzHPkvr6bUxy2fG4jJikmquuWciTc1Hn5igdPD3FUkfXMNwV9",
  "key8": "MCZeUJQzeqvoooVjJBb1KUpaqSBnN6gRZAEpdhgDwLJTsJPwCbYN8EcCVZRN7GJjUJFXRyJF9SKVPkc3MStZy9c",
  "key9": "4JNKeXVjni2YEQ5WVhNk9iSHDo3nzcozJfkKf7mxheZWLThfLoPj6AvdRzTmJxy793MSQk4y2P3eosrXgsueJ6ko",
  "key10": "5jZ2CyajdAgXaJuBSPG9tptuzMgNnZV88yfTi5CXiUBzCPysvrYqwAWRPFxvmFVcaHcPy5aWsRYxVcPPCjsz7pU",
  "key11": "5a9rbMFpqXoZtp3uSFEcgET44X6qox8Y9qXCpjHuCCPXE6QjFbmr27hKCEXhAGNWgrWqeA1QzNHFukEzsLUnfdj5",
  "key12": "PBFNupBZNAYytCj1t68BFqp1vnQudtvrHZGCRL1kDxiLmJi3iqx5ZvW4yqhPYrjMc71V2pBko579CFZfV5Ygon9",
  "key13": "5NnoSgXdYsmYomERSKLWgxtRycxCSBnK4qmQpQ88EDsCeRyNyF6J52jP1nttMGRB2R7zzM4XaYdgCi11NnCcwN78",
  "key14": "shvTv4z45GYDP2LLH9PDiAXJmYRynSgqPQk8A3hssmcafFDtGGGWCJwuo9s9eqpoaqUZkSG92sXoWfgFciaVcGV",
  "key15": "3myK4azKfAKVEVpHBYMcihVNJuaQBRyuRQgj1rXkiVhNSwPnVEQWbgw8PWutR8DqK2g9AB8kRzt8u99Yp4ScgqiZ",
  "key16": "4wthLDNUvEQBqmMRxUotDMpTTyNag7EFNRtDQaGAKcQkS8ttQEvq4arp1GBRk1fUpG3WGUdvbP7AFg9xaAweLH4x",
  "key17": "3BB8eKJvTm9D96Q4pR3QDStQRaZhkBpQoPzjiGifegXmzQhEe7aCmMWA6EuoEuZ3RDomQaPhPYgH5XFu3VpbUj34",
  "key18": "UnhDpvoYp4nefso9gN4Z1s8wdvetSXoGpvw4v5q3xb4ZTBcfHvzfQ7ckArJ78BRJ8L86wyJVoEtPtdRXavFrnYu",
  "key19": "D8hLKqUYEyfYeqcdgvpyeNBztSugucwfXczy3RDVkRgLbnNeE4vzp48atkbka9rKy8gWVemWyyGQyEoYXUG26kA",
  "key20": "v8aqwcLp3vVVNDettiCXJPyPX6GvzU4HjEvNs84vp5jQU1He1U2fDMGPyJB4WdP6AVhQ2zLwjQbNDz5eRRnN4DM",
  "key21": "2qyheyE26iy5efA6T9r3wVLUroei7f6ncFeWF9yGmAHsLqMNwybsPCHhngMtXuqw2vdkNP1ZhwbgnKpySir5CkcF",
  "key22": "3R3hbv3cWTLXEyMddjmuZuPKCpGfSHYFfp1aKdosA4fKpkFcBWWJQX25ZxYJw7fuH21eGwFm2MPX9eqY4X574CG1",
  "key23": "55PeiyD7CARdGYywySwYQBo3WgSUXanDLRwoRNJ1Ts5hHQnwe5Fh1dLEgzrjNuL7TcExe56RMa2B2ZoHJDhLyfiF",
  "key24": "3fvePojRYj6qZP4ywpRiAL75FdhR1nu7QcvzMzQ1Bm3VKHJTyeMgepu8xo5bagBegqm8GjAwc7qciigGFVB6erQj",
  "key25": "3KSxroY8EqQrGm2L5Ykt37vZD6uF96S5SnEFP64SGxVJaxDSGT5jjRwkRS4aiK7hCUiD4DLAbuJPzwybZMVkYfvr",
  "key26": "3Wv45bSZ49wrnupLszyCDSuTJsJM62HcWifghdB8QTRPK2oyC68wrr8qaJvGkjvVf3j1akmXoFYPGqwzWa7Uj4yK",
  "key27": "3QGzoRuSKsuBraooLrHZULBSbynHXdw24f1DdQa5pd94yMweNnN941j9NjZPu3KFQqSoFRuF2kSpsVVP17JsQsw4",
  "key28": "3DW498XTA7iZMoCa63VZMbqzc8uCgxDhGePyG9vS1UhqmmYJAKMiYgY85yaTzjUT4pV8ASgKHtECjdtWQ8by1x2s",
  "key29": "4CSfNZXTV4fVJGmFCnbzQNU1cJWiY6W2KBNCWBQo7baxMs5UFy6QFBktks2FeSynFcpwSwD8CbgBK7bfYdTcbjdn",
  "key30": "4VMBycvK2PB8CoDyXNZ1iTtq5fmmWq3Ti352myyDsjbXJL693BVZ38JEuKCTrWJqLDyJNLgFGhVogrTeAun1bwV8",
  "key31": "4PW7YVmKCjtnQyPSpyGLaceJh8Hn8NFwYT1okJ6fYoYs1pLuiHEoALTjAAkrKAAN2XdNgcRWFJsh7Sz76v9iQqEF",
  "key32": "4UC7L1etHX4MrXXnGTN86vw3MiCLoMuLi6mVTFUCTYBJhsdatDNvgF2dD61XJHm95zjjMBcB6CNeWCPpqSqoXMGL",
  "key33": "zUVXrbF4ABi6bkyHuwNRemYR4ydvP9kekadT8P7yA4WNZ2y3ZyULtHMAcGsKmUHv2g7q1eB8avkGiqdgE6wRi5t",
  "key34": "2ndJFtH76XU836WcgsDthKgHMXgGRNgaF9t5DD3oeicJiuy7W6THkrB5pZBxt9uBb3PsubfVNRew3hE3mA2FbRN8",
  "key35": "5tTVHQAUzqDKuc3qimUjr2zbSWeaUve4VxYtWjrvHLh6icdfmPmJWMPjuLChnV5k4JKDE84yUeapSSojPnBRnh7m",
  "key36": "4dYae7UN7WCma9R43p3vFDAgcq7Wd57VU4HPMbbV7HsBXZrNqv72WBHaULmGqLM7LwTJu8wuGQYCouDasBQhQZNj",
  "key37": "28Srtji3KyDGwrqUoiHMa2UBcibKMo3n9dicpjUk1dFP7VNDhFBQAdKBhZHftbnkv5tcWwdCUmT5sv8WZ4vJnd7z",
  "key38": "4mjqUx5nqgSkxV7Csob7uNp8q8TAQDFWA241WtfUKJQAdbAgGwc1XkrBrgnd5iZfJKsgn2aEBFVoRhzDTaLv639r",
  "key39": "5Uu5Ei1i92bK8RppqxYGWoA382T3wGuvDnQr22JT4KwKHxfErXb7pfuGSARcQ9SGdzhoMjXNTarVKQ6XvUNqEzii",
  "key40": "4TnBXaxb659QLxjkWC2Sku7TvQ4UmZawX64JUv3yXAFaGTAy6XeKaoUHghju3AqRRUhbNKZaR1QvweEzDkwyf3ap",
  "key41": "663rL6x6biVWSCKvVS4gBvXdUHSkhFqx2CnWisZvidab22oPsDkPeRQHSdvx3aPWNuRZp5DD3GepaBiFzNSursWu",
  "key42": "BWLLByHx8NHQKVH5ucCRb7n7MLf6pVAuqwozuZxGePxHKD8LuERLTZS7FVzxgjxsnZBA5deZWQQ5q8mXDFD28SL",
  "key43": "e4Eh68BcwSoP8GFcvHHcKLYTWpNX44o3YbqiMzsPMDtzW99V4gaPFFf9M7bPUkg4r12nKBxMESTqm6xMCAhSFWU"
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
