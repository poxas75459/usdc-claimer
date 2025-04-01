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
    "5vFWpZSfytgAAdK3kH6zSXLFGcD3micDq7qqQA5vDPEAvUsFVwsSSfXNZjYQKxeKmZLJtwX3JpyLHbcGokSMDXtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MzRABNe14JZ6kqw19kjbQ5GSv4EVtDkEg3S8zpqayZ2wQ4hUdXq719LDezBHHhhmjnfVFd6o7PRkXtrgBz8YA1g",
  "key1": "ss2qm9T4RvCmJ1fRef7hY5HXuPYnHFvjmdChTpPkWptsTUio84UaNdCjqVhsHboxZqthrWZW9aTR9xXJ36QRzdP",
  "key2": "43a8cdnAWAy4Cvgq8EfW2Kax5vWPGTw5AqcHhXNUdZQYabWLHwet1EHA9vzkzFnCXtg6j2GRVwWSpCPCoqpe7m1A",
  "key3": "2d6sbr5aiunh9L3NRhje1XpLLZ1F6HMTCjn4LKt8L5GyyGCaYCKcmkh9tzwdzaAKD26B7vhnGQMp5yXTzujaQ3zd",
  "key4": "4s9cFNYMcyVmTrVkusRTDUJvgo2p4ZrzGppA2f1oXTy5iPtgZ3STSxeKMymtH8AhxwvHiUjiTwvpkLynLahKtG1C",
  "key5": "3iWri5MZc5wd8GPNra3Ffs5qKWk29Btr2YwMgW8GoXTjFB4mQgwtcY7Fbd3K6DYmc2o4nZs4u4DgdU57ybghJK7H",
  "key6": "2wd6dQL2tnLzRfMWckU6FyAE1Q85LnpVed8x4dDs3hLiJxZduU7mBcmLYmhD7r6Cu3nJWeeG7xftnt21fbhVv4ek",
  "key7": "3EFsEz3jz9rggrmtgLyHqtGVXeoSS5vQUvDt8nkvvoacRk7v1GVgjLBpxogjc4XeKD1jnkZiCM7B844ACRNwsrac",
  "key8": "4DAuwkXrG7QN7oedK6QPFJJPc4z5sWKhNUDX7BpJAqBkgyF563FRscVQNjxK5CCpZtdwhf7JXyw8z6Y8EqfDV6kX",
  "key9": "3hWXngtFphP9pEM8MUJySFhHToRjSjMzjPkaHdqaD6PUwgE58FQhpzH83CVwB7wGcwT4eb8dFK9Xv6ZTjbDfnVgm",
  "key10": "4hUbJK6CJAur7y3uvXMWwTSLDhisj8GCQ7GjvrnKe1fgqPyMrmv8gcps74hudsBPCebwFuYoMwPYkTwt4EiVJER2",
  "key11": "2TBXxYpZhLU2ZfaYiuGuZh2f6vnetndg1CCkrPKC6iiBHzjTNwU2hBW5HVm2o6czpy4X2XcSDJHAAwxG3sjPAHT5",
  "key12": "2k3URwYoPz7CPfShjqeHGk8n7BSZ1oDPB52gHBUKVDvWEgkyahooLgpeboqqDr8y3r8D7zqjcAqmE9ZrDDr3kypF",
  "key13": "5cVks2s6t4S8h2Ba6oC3NJt8nCNEB5KobGnuk4wiqQCHJazPnkyZdGABtozbuaP5TMPtMf5W6zLUZb8K1r9TvMHs",
  "key14": "5N5ZbPjPFe6YqtHHSA4M2x1hWK2qFf8iH79uifumhdLdcN5AyzjMjwZVka68iwx8DQGCtHwcYtQV8FCeEqCxF4hn",
  "key15": "3rNdMk87waqViAQ72UTWLRM33DsoBh2Xy7U8e3HevCXVPxSGjsau6nSYWAo91CB9HNXbyRQ33udqZasAmCCmJa2u",
  "key16": "53V1swByxgy4FNHcC33CamESDJXPdRx16WtsAgUxQPnQSChxxLLbGCjianPsbaZ7ptoT6U3eacMedN4iE2apaDVx",
  "key17": "3dH2dPxyqsW3iMsvjN7ZpPiKrWMVN7e22fMzo1J35XRSy765eZQUjLkawvbzVXrGTBT57FJJhLfesK1kx6rhgnu2",
  "key18": "wPYrt477P6Ls5pgXdaG4JgMrr46r2vDyFb8bTTidThybkJNhkXfNWQBMByHLD59agiLDjYKKazFN5MBwAT1Rt2a",
  "key19": "4pjRbnykWuwR5QDQK3RFWXWEY1srQkebJFuUBggukCZQKeFpzF4qS3gLh8r4B3FjSb1mZedkMMNEVyXN6XayTVrx",
  "key20": "2MxDnfVdMxx4BWAREb67qJTWdUUBrG4fGF4VrY7gbtowf4nQuZXV964dfa5n2EtpvT8XLxHi46zTQ2zTPWWwBJu5",
  "key21": "456E4GFoH8Wgacm5Zqdys2rvcy2E7eMj7Cw6BaFz2TYTSWV8ys6gFZqQn1Mivj7dHz2HuoESfzLYc46CZqCnYiXy",
  "key22": "96mrZYN6aigSJF2ERZRHfaK26RJLW6ZHaWTZPxzy7THBiJtDj8pnfskyxjw3c49dAqJUMjjHycLGkz6UymXp4Nt",
  "key23": "33Txr9dBcz1rt39KFMEJS3eaoBiNnWMLVMjvwo9V7ckNFL4hfUGZV99jee1d3GYTEtWPArmQx9dpxSee9GSuD82d",
  "key24": "4ajSDFih7jzvbCvRNoJEBjxJhpzXeKh7Zjpt5yPfyGRP9qJRBpiHsnkFmLjrJYMZC7BFV6T6QSweA2RMebT8XEom",
  "key25": "2HQNVmmuu8YQTri1snubFEXWMGb9t9X82nn5e4vXmcyhLJFYbxpCHkj8aKmfzGTsZwVz9s7H38xU7ZyEwvYMxrNG"
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
