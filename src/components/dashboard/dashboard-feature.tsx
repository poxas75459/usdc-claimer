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
    "5hhjv9HTfAWd9tu3Uw2EQg6NYLsqv32ArY4iX3PdMjYtAfvih5wr7zfDUEo8b3tWcsrkpBNz1sHFubzZAyiLnjjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kgozQKiGLiXc8Pfkp2eDHTY7eczV11wJicMXydA2aED9s9UwNtv84SwYuJhefmvP7TxYiFe9yiaDayWX6UjYPNA",
  "key1": "2DuS6wF9Etz6VTGf8oKexJFphWeUKiPii7r4n7VJkNbreUBAvVm1UfD7eqL3EDzLVWidJR8qpLrDuHodoKZjmpd2",
  "key2": "4VgDvRUYrw2sQhNqMCnNQYs5CWZVaXs4mrY2EzPcGcBRrnMs2nM85oNgKWJCik38HWbVAVwGTWr1MTC4Xj1auFg2",
  "key3": "2ey4oZXUwpAegoLQfpZGMud5RYfCd9sJPzJoqep9q9AyyZ6XcjD8iAngu5ogSs8yfP5ZmaaBeseHNYB8vSNerTWW",
  "key4": "3qvscKikjuC2gEHuLh6scDNGNTYmA7c69wXGTWewkdMi2vgrKTwZ4eR5mvhsPkPWyj43Z6vUdbjoyDDDtbY8LJvz",
  "key5": "JMNDPDWxtHe19R7JeBpWftnRcxU4atwBhetcP23UykWVzs6b4jt9vgwm9nWMkHHjixyU6FdqERT9sNh8eeeeyVa",
  "key6": "3aUefBq1FZThyG26KrfRhUZZFY5jadPQ8UTL9obZrgRHTygB2hQvQsMtNq1x126MwKZ6LWi2K7TpX36bxhrBbABE",
  "key7": "4CYqYcw2ztTnh2SVFyoghkZPq4CkrouKQg92eKfDewN3DVVpovcSpjxhq7QUq13FJqgPQuqDPmSD7XJxJmpHPgxH",
  "key8": "RYqg7NHS448tC3nhNWabo3c6m3MziBaCBaj47yYW8V3Fq4sMHWAJDvWC1R5eZwGaLFDJFRyoxPCgCkKP224TXce",
  "key9": "5Qg3HBA8jHrafpBwDyUQHUvxCo4kq1H9afB1koUteb2q62wmRJnorKjPsUNAxi21gqyo9NLzfcLS5HFyeJcVuX22",
  "key10": "4FeWwAi4Up4R19K9o1MD6mam5JPWdk6yuvKUGBsCsaNJhcCEZBT77HNHLKu2mrA7M66h2PRsqJAGtwFkJeKYWvmC",
  "key11": "577tUCG3YLxGvoGtGMJkfKqWToUfEzqKzpGTG9o31MipsDvuw7jE3bvddZqoeHJUjFuW2RuXuxjgWTVzXbRu1RbC",
  "key12": "5uHKVhAck4dtsvhZnBPNT8hX42xdRybDA11PruW3SwMDMG4ftTJW7RExxf4vXiFbESN7AbTNC1gsgycfGkBdzpjs",
  "key13": "2arStBG6FvRJmAfN1kC1DQzvZ85vHvcscBvr2RmWkvZ917qHjbWXDxFMDREYVB3qGqcjG55Mbitv43mMdU6gxNzp",
  "key14": "2WobsE5gXacJtB8CnJGvjAj83NtBZXEbtUPeHsNo5fUV4wJBkbLa9v9GqByfEy9hPQnzTDY5hqBwakD2UJuaFpEL",
  "key15": "2TLEtCYAVCgWRHU6LY6DXAtjcZZejpbKVwQwkt2kFqi5faFHdpJu893JWUE63Csu4sRVXqWC1oY8zN2SwhCFvnZZ",
  "key16": "5qejoqJbFPvuJp4by3XpoGVTuWCnGA1SGzYndNpYq8vgQNncUk3oC1SY2kAY9EX64Tn7M3YfnvcuPwouezuhkGdx",
  "key17": "5jxHV12kS9dnPiAg6ESQRruNhc43HyrYxM6BkUop8erHnik4E9H96SgvyENXDqdadDyB6yquz8LfnnYtfLVAxeDb",
  "key18": "3jj6NrmdHRbEupgqxzxDdzFtyKpiHhm9qi8bXpem1F1ZnjL71DyANFBzfWNvzNj7TuJ7uANgL5jRSvPqoYUWCnHA",
  "key19": "5PFyYqtoyyudmjXaVDnqBRBZG1hmwNzHFipbzJctxeDHZPcy7pgN97rDsop8ZsXrZ4MkYtxkR1q99wYW9PtD71Zt",
  "key20": "4zV4WJhNFTxE2uAgfxsFTYprBGCphB28Nrtq5BTXJtk3DsSioHvbUEPA6ERrXvb6xzDmwQBw1TrLcrHvTUoB6pgC",
  "key21": "mHfT8AwkreqEv41gTe9je2WTgcXjbm8wfZtthjAxHXTfKBp3zgwFmtmVKLoSfccurDZCZAYhiikKHQr5JqSxm8Y",
  "key22": "46LXy5gvJgMDNTDa84x9y9Q1HFNXdfR8w2m2oodaRhFLdHFFMkaV23cALobhGU7TD7Fm7w2cWf3JYBmrnDNDX9r2",
  "key23": "4FvZojQkKcKZxheVZWBdiMTRNqFsPAQx9fG2jTKYeJHxbZCjge2pBBbtLqA9gYhpUadmcTikbCJWiFLvAHUbcLzd",
  "key24": "BYSapGbfEGkjfm5ekQo7cqRbU8Z98wC3PKtiKzcV7oykWuuQVpUGKXfDzeu6zw6uSBHbrpnBvFJ5ieQ3qHjCVY8",
  "key25": "3aKnnKB9ZTqp7SM3As2v8fRhVLDsqnsctPuFR5Qnm4qVnZcugGdtCWYgHnjjPgfUUnurHNQ3tAjyaoeQjazZivoK",
  "key26": "5NmDd35hdvrovjLgkiBQRKKovqrTCmbKv8oK362nr3u7ySsjVWmsEABeT6G5qciHNyib85T92MosKa7Ed1k11LHH",
  "key27": "5HutkFWDTBsZ4tzzK6rGEtgZvT63eiPRSTutBYWRmrbUdthzTVcMGkFyRneEWsShoiaWf56euTzecJaj1oADd8i3"
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
