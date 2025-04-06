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
    "4yNS2LXfdmsCfnLxtTxjCgMkcXQyi2PRuqjdWNbwLfvMQxepnx2yyMp48bTsbbrbaiquaQ6mMa4aH2g9CS2FbgmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fhWNd5AgdJrhB8SoTpjP6LrEVrUs4o1NcitUtq4vyJkSWNNZy3mGwA314U4xReKwWR8RWhUuGE8LWcR5Ce2cq1x",
  "key1": "2fmcgiUi8S6EMF3QLGjMG2YZwAAcNwrVoeU3xm71VEAJ5hsdyvqKesKA8Yh6BfrnK1nAfUdtFt5KnE4si576zfUk",
  "key2": "2inxMBNvSnCzDooZP2c2KS2dW59LqE7UPestnsyt8NZME6toRvWaKWCQdJRKpFVpZTdMVcuT48YGhEUKnkY7SKKp",
  "key3": "jxndPiNaryqgPE6G2e1PnSThePd6nFvjXtPwA6B75CsmHHEVmsC2X4yeh8xCioNY5QekidseXwB23eA3jDfbUBE",
  "key4": "23pYVPxET1hGH3itVVeyTJsoqhhhTmTQBMwhXB2MNU7HyjEpaYbMrXDGDdNzVDoaed7GU16xeiReTV6pnsmbM9UH",
  "key5": "2Spi2LwLKg1SJwCMa5ndYBeFi7k4bHoLzPU2WBnPaXxg8hN9P4Nrvf5n8TGnfnJHd7Nfmdt1Zm7GSbw9nZojPood",
  "key6": "4CGFKbTzJwghiPxTSxjSAbc3gghEkWW1fPTPPEPQPpjGfuNAepq4w8DPy6zMkTtnG85dv2zkpRL8TnzP3U1uU1yY",
  "key7": "5h8DDvUoJerqQaXXQT1hVCGQPDH2jRXUVwQsGyfYKfwuBv3oVnn9GMsgrsbEsfU4d3UNPgQ41Lf1Hek6DNdhdUEa",
  "key8": "SbQdGTPkKpUHdc2RTXSMhQwUYtxDiqtZie5CKP5hj8pSKrfJ9eBjwSHEhPrFHtohKDF1bh48ZyBv2VxRBGcvnZc",
  "key9": "4Nki9aR81vtFDnCD85Ta7qR6Yik9Kz3LkTGWyCz9jbF6dLV9mDvubbXMDsJa3NJq9jyPk8SoyC8wVp8m9R4hJ4HF",
  "key10": "1yhUpJD8kmUzLNYE1YdYEhBtXAdt6pKb3APi1gToVQkkgcNHEwievydX6BVhaU81exUtMYBKnjKazuBqdpQf4BH",
  "key11": "4aPiZ9SRRD7DFEwrZBeJGEQHsqxC7AhKau9FXXtq1jV8ZacetJHcfxTeWVmrkzpoCqrZbPxKuZZmXZbUJ4VxFBF3",
  "key12": "2TnB68wa83QKTvRTnL2KN6mjxxa8bc9R6bbpHz88TGEQUS4RDDoqDAaJvSGDZt8bzJoNL1fz9cn7AhpypgCditog",
  "key13": "226zAE66xeNEMXRFqdHSuSciaUbnHypeiQnewSLT4bEi3Xv5fS9oVaEj6dvrEpriuReyCFufQEaZWeRBfeJEeE94",
  "key14": "mtho2VPjfaBysVfvoLZJ67C1fiH6SSQ8aNgxV6ETh2bfJLgo2921aJNbkJdq7yRDQAPWUu8SJQYjkvfXT28QnyG",
  "key15": "36XB9X3m8PtXjtAzhbh7bVSSCNcmGKuJYisM287BAUAf929PrfZE2nawFY8aSzmWxFq6DhV2qykzNpCu2RcAG2KD",
  "key16": "21PBKM2Rh4jBRwtTiM8QtohpXGp63aneDudpm6C85f8QiLybD3b2ETJehTitp8bnF2KxuCpKJZS8e3CZYauZMd2M",
  "key17": "38ojyeRMaVHB8zYRoLPbq3S13W7Byrw2VRaFJ2PYPjgEwn5PeEXzit5uTCpziJ3wzqd9Zh34Hwbmjejd13KubAfS",
  "key18": "5qBWPz688kvZSP9nmH3x22d5WGPfxPg8MEBqztriHBKw4F76uGYpJ37tee6NLocNddSX9uqi4Kqr67JVKtLEC72n",
  "key19": "3EK2eVQQKpxGWNbYSZC53QUqrFabMfUsujMWfDmrco1yn7RMTvfjeKy2JH5BkwAATGBXwnfJuFq4RviGi8uAnrXS",
  "key20": "vsE2qhjgNkccomoKRp9m95DK6hETw6Vdpen5HiALddkf6cDcreY9BzLQuT5vYXAVyxuD9oaKsbpMHxY3ny9JZra",
  "key21": "4enimp9hmCzr9qDYd3hJTpzmvciBRvvZrLwwPdXxfKjDd1DTGQq8pZnhenTwZVdYu3FusXDsznd98zGfryfNY3pF",
  "key22": "4hVQ3dT3k9g548E1UEReo3wBkZqMkUXSDrNTBmwcWQhtjpjCy1PBh7rB1YyBAPVeySDSUQLtKDpmgEMPTeqp3Xyf",
  "key23": "5NFugsHaQhiBkMGjUTrNTrUWTNH3DWTnVMPEWtdnBTn5UTNoftuupwuynUmSyrBG4RzpchUuJXcsyZDqwctqutxD",
  "key24": "26YHo3wk7cb5QBE8y5wUkVM6jk6EoxyPCxv7n3v7Cdqnj5d7H5984fpJT8Sqyug65RTLzSdSL6zYc5E5EGrJxUpv",
  "key25": "2WC3Che1pmrtfJJwFJ1RaTqgrgDQ8Usj9Hv5mBbFppBiuxBhe9r6j3aKqCbSNkwryh6i5hh7tEbsatn6UxwQLhrA",
  "key26": "3es5j5BU5CXHoRdzQz7f6EvimxnFVS6auHJWJovkPXzqXuG8dj6wuyF9EaPFAPAyejXAXDi2NWrhpbpvCGLxJHuy",
  "key27": "4KNxnqivaBXrNzgWej1Cnr2mXp2KxHocsrkuwAkZt7fs7f5Z3gb1ZeouDWHrDMMSKfYsjBYdKREyXLhD1hr7FpJq",
  "key28": "4Bwd3GVYZap1uASzuXecSZFGLRmWYuwTwRotLamX1jPRCtxkuyeG93cFJQbB5gheafZvNwhCUxJ87mTJkJXQY9CW",
  "key29": "4kv7TLmBrNEEkLRgjaVAMAUfV2CxszpG5NKdWck5P7qKHUzT1v7FaLNcEzpbJxfETKjegJpA7eTnPp3CL5imGbji",
  "key30": "5XEKxfJh6eoW7i64EVZTgbTuwdnvY9M8ZhsatWacm5758xeukjXz6JjawPhbHdY4D5uEzGU4K7kFembzmKf9cSZZ",
  "key31": "55kRFm5ZNfT4wn3kZ9gR63EFm91Uj8bnCfUAYJqBDLPJsZDY6miMKG3ZEnA7ZCMXyBUbMoGEFW4Du2cpircuzBpf",
  "key32": "rZXyKPJxrBBeiUFfMqQyh2S9MFYXcyhJTWn8X8S1gCg7pfTa7XoARUYbg2NoxxYZ6EdG3Zq1p3nykT8iT38jCMx",
  "key33": "29sNd32qi6Qys5jJqsQCQ6Mpp9yLxtEvgN5uw9s5ZaweYHzVu5RThorphuax5VFV6XupHqG2HKNNytY7EzArNd9X",
  "key34": "5bNF3u3NezFyTNwsvpY9RmEer6XW2RJY8e16VoLZeFSZ4rUT37rCXF3QwnrjBKqBnUgWqWC84omH6Xge56Pz5owW",
  "key35": "36uju3cXNop8NtbwimB8di4NRY82NMTzEUk39DHNysrPdXhamJ66Bewd8NF8gU9q579bsBvNtaHXJ6WK31AbWkBN",
  "key36": "2iJ7bh5jSJyawKg6SAFJJKAM11PtsK41o5QJ4t1MXpXAf8rvSb91ctCXXZr8z6hq6Ydz8i9ANnXCtKDEgjo9p6R",
  "key37": "3jvQncg3MVJwYHp4Qn7G3ey9wJzbwrkxXhxtW3gVGmDXgKKPAfhX7kMRn6Q6TrRojUMDaFzp34k4J9JpWyVmTC83",
  "key38": "3BvGGtwNwdxP39Nt31y2kjjcudApqY2xjamwoyM8tWQfXS9AtCrxP2d4bmH4jUYrfegtRsydJeHPRRuBm6eqpjga",
  "key39": "3a8UT5iLwQa1UTs6mTyrmKw8jHAUCQqCRcEr7THVoMu51V7nEZa4k6Pfcs6W11oA7UPhduXEzxiVzPEmnN2NkL2D",
  "key40": "4mdZ1YJQXNKrGKTwPPuTCE1sTkim13nVy5oGxxjzKaPRdSr8XFAiTdbmobBbXhyxBRoQhUzNn3VECRfXedmR2gRJ",
  "key41": "n2fEQciuqbKygbi6228UjjcCAmFVEhp34HnBqJ6xQ9e8ozVPYio52WUAsL96gujPzJR7jdXHVrPejnf4tPdqrLe",
  "key42": "23oY6Eo4TMgJpCmQkWeGrGHKCi6nYajayYs8cXyi32x6F9k2NMrB9vDdr4oUk41f9VqD2m62fjAT7Wyxm77BMvmZ",
  "key43": "5cHAgiPzKHFBycm58ra7dL1xNpqEuQMPSEasZ7T6NDdgHg9aSgwHDG4S99XoPRrifYsG8g8mKNDWLcMsPxZac8c7",
  "key44": "JBDutHYb9XBdp5A9wFdxFhoF7Msv5Vp1n4UUNXe3pgUriTJrZyZvBEPSRoLsYHt1x7uVDbB9jNee5GMmfpHPU2F",
  "key45": "hFtGsGyUWZgvcBL48WVZD9YgDtRgeL3quRRcx3Dc1PAbj9qGtEduTsqoK8SY38PcfPpNooa3SfvwjxreQ8M7cbx",
  "key46": "4Sh7PN8D26Vq96QNbJ3TFoBnNZbvytHzqztv8mw556Fy8ffj9q2NuXRiAUuwQoCjsYmbkuPGEfpNPH7ZyKW9NLDF"
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
