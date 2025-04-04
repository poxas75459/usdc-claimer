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
    "46kPsuUbPsoH98ZL9LJUDh3Lvkv6m8au5vQna5xrnKPeBYtcSmr7xdaTaKF3y2weGHUdBtAiJBr6R1ctZYc7iF8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nuDFvxLYm4mARHamv7noomCmEkosXRaAsTt1GrANeBhA9gSnhgNUaQd3NwKV6nzcX1J6EHh4dRwGZiVXc1BdHjw",
  "key1": "5Egh3XXSYDECRwUztUvJteRaxURV87kyTLrfnXdx5Gm1fBkTvqdnZyZrRGoV4vhDQHT9nW3X5SvcaD3Jt3EPos7m",
  "key2": "5NkVt7ijdahh8hmKmJZKboexGMZEVDq3FPpLwCtwr4A1rZq715H56YisqGE3tBGuBd4i8ivfsW9F1DajTckqG25b",
  "key3": "2HZsksnRNPVdsYnwcfXJJ5T1NAgpLbfCgyC8HzktM6gYyBKTbnbSUHhdRX1g1tG2Y83gRmgweKn1cXyo9LkkxyqA",
  "key4": "rp9D6rUnNG7AUxVviMGPfFSJDp2fELhUcty7LZiPMX5Mf49QRVZzjC7Ws8ws8WCi4MoBWTXWwWkYuKXdgbDTZvM",
  "key5": "44LVazh5XPxCBSkahVExKjuZxrFgGWU6cXBqPL2UmJb6BmGgG4AwxBqQARWxvyTRY7vTpc1P93SSpXGJwTcBh9eQ",
  "key6": "4nfhvRreLniypBGdy6dFZhoxPFzv76ATpxcNFkbqMotCfB4X3x9f3rCpryaaUdjGg9XmPdaT56gdyeaC8R38wnWd",
  "key7": "4rheL9Mn8EYLZWxHFrirRjX3GTKNtKVEWVWL77HkBUvKPsZcVyPGrXRJgAPZxGx4pxyE2mLToe9Lak7tTwEcYNUo",
  "key8": "2tfb62Rz4G2JTRHf5vUrSnDuWeu45fDFqrQVyQeAmcdU49gycY4fzULpysNjjK2q5UM1vePqNMWWV23sCAiGDMgZ",
  "key9": "2FcwPJdN5MskgeEvj4GrMeWNbZibxRvg41qGBGpSkFM1DxdPH8iESCneS5SaV2j7sJ9RgZXGAqPGAdJnET2prmBK",
  "key10": "5R5wcf1yMHqjvoD77nYwWa38HkbEPxJkA7L3XVBNRduNKzxFEwxJmNufYggi9AdBT3txeXTGLZ1HbH2b5akkxM24",
  "key11": "44K3nJkmDkjrTiYMeGs9UeQ3MYhf9NgYLMw9iTP4xu4ajMZcLZRuF6UAyC7BE9QEKWxyWeaCPJag6TT1dY2NBG5s",
  "key12": "FXRS9Vrv89XHGJqQfu7SvpAdmToYENdJ1AGMcQZmfc5exEKiALnqK4yDUDDQjxSmKBnJAKfbqKKQnvnfTPWKM5Q",
  "key13": "8nkwKjh3fDbFrKNwq6XZKWivMoJWVAj1n9WvjrBPt3mFxtGG9nvatFVkcFe4hS7MZub3MtTj37VJq8ByrDvYHWX",
  "key14": "sJDQPZqVd1VNXUXVxnsxDsjqBKgPpP6Q5GPV6iiPHARGfw1yUvxMExwubb9dysC7VPwJNpv7hv2pABDgwagLHsD",
  "key15": "4YYGFQPpGjuYv2NamcVtJGmK5T3NMGDz2QUeVvfdCGJriMTsbVodTVXEAKnsijfq66CLmhGEb3FRDfvXf2MtXR54",
  "key16": "2qwiNHKDMF9h4Gg9PW2peXLaCNh8aG9gtWx1DnmvxPVCHYTGdb22b1yiPgbp8qr2tWQ6NYj4B1MNDC9D3w1tyBNh",
  "key17": "5RiqYwtaYRfh8qCk3TKD36WR2W3uy35jKVjZaSCnBpnPPWa7WDMeCGN1SwXCVmxNB7nYNxuNvabKVs9NyGDFaqLR",
  "key18": "3E1que6o7ZADT6RVGuZ4XfMKSP5Z7RbDQVBAzfyM5UcMkScKXdn92iwjTLRxV97hffiEumK7jZjfqTYsySv4ActJ",
  "key19": "3F33ve6FF1TENUHeamNFX5npZdW4wTfsNKaKKrHL65dma4npsAMUPFFFes17QPmcpg396xmwUxsTFeEiACDyVVdt",
  "key20": "4H512ijuC6TapedAyiF8jqM8ounJXmeNXNkpdT6Bnf6k3dETA7wXxQXYBEoxEMDsAiYjHnzXV2HpC67Nn4gNBqML",
  "key21": "5hGCGrmZVM4FEFgbXRDP5UQH7RQYg2FaLUQojqomWqYVpfYsEL4tcnZCua4GGQVqPeTJ85kyDxYNxVxGEpS6nxKp",
  "key22": "37jvTkHLcCUebJFoEjfqTpR8knFw81UbL3atgvQ1oAXvmL7MKwMtQxKDWp5TzB1ELK2BG6RXSvrMgKP3Ry1LheCU",
  "key23": "34rxD9rAeJUxJEjcqGPybx4pRQxZWkSZQgw5LJx92fECNXJTqPXc5GDYPKxQyd8J18gytfFymswci46nUpW5kE74",
  "key24": "csu4Hmn2fHFqzdfJ5bvJGMq1pKwRt4fhDSpisbA7FJyZZYpj3ZhgwdiTbzTMEGL3fTFC4mY9eWFykEe4pFB8tSZ",
  "key25": "4uvBfHgn6QR3rvVcz7KCD98T2LAHPiFfY3RqDrfgs77ukYsdQ6FpuGiNj3oPxUnot9PRp8K95jcfgTRGpsoGcbZo",
  "key26": "3gauaofxRAq8XsSzxpi7VTDKGdKndMaqnv7M7GormCswt9f8W6M95nhHd329wteXfyirFURxZyyrcLAEj27jTsE7",
  "key27": "5FBTDffyqKKU43tk2DZJc4nkr1rzMWuGjHiswvkPEnmvVj8nMFCwr2dJbSqV18EV9ezVZCko9r85ofnNpyK8VQnt",
  "key28": "34enue4FSmqJoSnaAyutgRahjosfhX3r3WYBs7cPV8JstgQ2yqSR9eCxDo9rNMnoJJGaELaX1h66D3yX7Dh1dC1e",
  "key29": "5v1SVcpw1DZ9Yxd8dPP2t4wjoYvZr2M4mFdrRFGVSc1dKJXsG2gfoXajyU8TVANpUV8aLLsasnq7wUzAxUN4DYM7",
  "key30": "5QViT5z4vEjN6dqr4XeeEAhRjMEReySZCta8UchrFzsy85iJpgpcqyYS8AbQm4GobujwreX1Rm5NQLtjh3q5P95F"
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
