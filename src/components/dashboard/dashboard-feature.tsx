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
    "2asgGh1LMUSi9gbQqC5MrPmxvFr3ayRFfLpEZhBVpCUhsjMYeXtrkMUQA8hj4seAoVNd4Ej62uX3Bvvcdkj3pDnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55GCHH8cVEaowaQGT1377Lv7FByirf5LWk1eq3FkGXT4u2snZjxNv8fEE5z5sL2CsTRRP3xm1QKiSVGxxNNo8wig",
  "key1": "234rVX4FgQCtsU4KHbNs87fwXMnAKQZ92H9zF6xqE1MSwFLzUe76PqZywz2TMh18rud9FMYDBEF6vx8uqXubcfZY",
  "key2": "3fLpAGjmguM1JDtCCqmMVKy9Jyd57c2UoZGLqvEYegQaWRHjMmJQ4neR2k1Vwud8WP8JLHsf97auWv54cB7ReDjY",
  "key3": "4emeNMTBNGdvTcbcokk1dMygUd7Er38p6Y8gHRVUW6FovFJ9XVmvVWNvZ2eHo3vr6brrmRVNFXiqPHJG4TA6FMcu",
  "key4": "5zqc3c3cMCNqEx9t96BUoMApTBKFaTk5vTybz8aJiWKWdHAFtmj1Eyauk6MwT6cEsFeqaJ16m2xVPtGdJ3Xwb8Td",
  "key5": "28K9KoGH7SpAhaDhHJBTGnWeDFMCwRSh6H7ZfMs4LFQBxSsNU4DeLnsmxiDbUs4hw1vU53Kfae1UrvGGXbK4tzhF",
  "key6": "2Jmx831rE8Lr7PgwSbCNQdH1ZhWnTPgJdSAnYqAYvhqjKzvF2AKiUZgUJnEFoCcgBUYZdCVA7mkrK2WMuYF3J49z",
  "key7": "29SK7QT8sj1wALjork3p7mTHsmsGgMYTAFrRuS62Dzhkn7rTkBg1te6wHp9Pdc557cKg3MxJLoCzvctdo5SdYs7E",
  "key8": "W888jNXJ2ZcnwhwRfnq5REXBd6fo7u2agMMehUypSNw65cGWaucRnmoDYg2wThwx4Zp3t4NmtnrmCy9WwXRHNoi",
  "key9": "xKoXmbJHguPrUo5n3kmfQUbqjWmVkxj3RkLscT7LuEX3KA7hJapZHmr9fK4VabN5WWRtExnUfmx9RtYAEHvnb5p",
  "key10": "3JGPN3GxrX97V6Gkihe4VZ5pQHVSQT72hHcATKewXPXJzmKP45gjJst3uYPVMhXFQ2kWccCsqooqUAxmZTU5eQk3",
  "key11": "5iAL5vyy9upH8qH4WYCryDM1yVLTUBNLpjdJPBJuty2pP9Vad8r25dG4Ph2M4WhgE9fqTs76mNWU944Wpw4F99sv",
  "key12": "5pTiwP1XiP8DacqRGrAfe2657CDLBeJNXq88SU721rRcaZFtfmzYszX7MXhX6EnEYpvkTYp8A7RUr4yuqq4MM1fb",
  "key13": "8vkGMToZHsFXj5x6G8cMUozUdooA2MMANTmea67a1fYoNyEA1g9afhwJM9newd9vrjnZXP2wdAwhv4r8iCXTWAc",
  "key14": "3tVgYwkHVzCbVth3FfptnMMQ4Ee6CrXpQKc72NCFK6YbK7bJVdhuRECm4YZw4Mn4sAEf7XuKsVAC9nTxcSBiuYp8",
  "key15": "2ZT3cLqtdWgjzaBY5u57Ak2JBJUCiCLww5BJ2YLgUf2mgYjhTdSnVyjFP2WHx7LDsDipkxcATXQxZ2PGzWVspVco",
  "key16": "5AVqt8pXMxh14MGHvvaGupRPxrMLd3gadVnkqyfaddXUQCz8QgJxJoyU2PZCJfDXgqLn4XQ41wc8S3GSehnMFVGa",
  "key17": "5wSLm3TP1R5kUupQQfah3kTD8rDJSxPRdGM75nMJzDYWivAFnvHySFrd9UhnvWQNcqJNiuvNX1JsFmBrKR2q1nqT",
  "key18": "27PEty44okLtrdt7McD9Zc1Ux5SaFUGAMB4Y8CcL6uWfodp42ojojyQE3fa1ixKaX46jbtZN37SLXs5NHqg34ErS",
  "key19": "5mzqGUXMhYvmmk2fc3FegrbqmUMGz2G8tuM8pawcFTPiKaBRXsoCC9eeePP3oMKyBDUMBCFKCdWXehc1EPw1pT8K",
  "key20": "5kE4fgFo9xfEJpD3SERXjh3yN6TSXyibEUJ3MxSBQgJyHNxtsNvmF43uRV6MoWn752ft72yk2t6ooBG2iJCRs4hM",
  "key21": "4yJC8UKDGKRvZkudCV4cXavc3DGvkxVYFRyS5Xkdr2Kz7iBYJYib3MsWWZGgk97icU6ThM5uA4uXrbbWwX1FEh37",
  "key22": "nZ2MGRZqVKiJ2nLAdxJu2DgJjuRpEqd86HJdYgrrwNWLzJYTi1A167tBYxTKGXgFrp1ofJcn7n72Um6LkGtpcRr",
  "key23": "5c8UfwPWXadHbVsTcX3JU21reNbuizA2trgk3mCVMewqY9YCG8EPHgoCbHZam3EMxPrUDi9xcSRXxHzVirBG1oZx",
  "key24": "3H53x8t6NK6pMqV9SvxZVYYgjoQ77Uzkf718Qs3Mx8GmDH785QWfgsFf821Fb41LQMWVrTbDqZbNgy8PTYyGigNv",
  "key25": "4WCzT2fLJ7bhgTsgYCZFr26VMDG7jESTB5uthXMu7JJp7QKDuFXysktCTwUBoW7WHSGQYxNgX3bwk5c7GK9EUBux",
  "key26": "38UMdDdkAih53LTVVaut31TaCnFMFPV4f4dp1cJsjDYKys5cRwCc5WRu1NEZ8Abykd1b74Xrh4LKG4U7KQcDJsko",
  "key27": "Hefs3GHQvy4pc2K1QQ3dSasCdqV5ZQ3qZzf447n2akZBZKj6LZ9p5Tp6BArNLCDYSGqVZxA23ninVNaNHESFikN",
  "key28": "2g2qHT5ruk7yg8BepumAH5gz6De58vnugKgQGxmuGuHMCExHHCsoaMqEqStabJcFoXcRvUmVQGosXmkGCfXBfv4h",
  "key29": "5gdEiuZRw9s1ykzcfKFxjFUeEnAMd25SNnpSqdCV1T29Q1fANXacdQxz7JEjAq7wZoh52N5uzKXtuG7AbapRGFdG",
  "key30": "tuoenFTuffmRjeY4WgpSGT1CurbQCz4HXnrWP1D3E4dgnEJpKGYVE7zhhdMP3LNBKQGWbPvqiUn2qhFAdW1cmxe",
  "key31": "wcpen4sRpE29wcyL58WYVkscqmrrDAoAMkTt43FuW5Qgu54VHLAAXbHpp84qacrw6o31aEKqQXmXzP6dSfaiWw2",
  "key32": "4Spof7SYCgLaxYtt52kBXLJbG7ZCgzZC9Y59a39T4qm8cdy1cwywhyEKVX5XVVdLX8vBfT18Jxv9NHegnHsS4Tmn",
  "key33": "36VZzSfCHK9VGR5TgrPow72cLKKsZ9Xa66qpLvm5YiyPiNoK3ULqZZjnChRwXoDVYmaJL9QjG8tNWKUux85S34dN"
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
