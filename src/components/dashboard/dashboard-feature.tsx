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
    "4KeXoQvZjygC9u2Y9Xz69cdn44qs6Y1pUk6uxGuR2iv6GKdnhv4oumJypF4EdFJ3xK8bnrAj3j8aZa1D5Pq2CjVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PUrTXGzv5VSEP5eQEHXTEtttZP6smPFYfnkML5pUgrUbhxog8b3UnGiFS8ML5DGqZygFvRuzjzAtDTp8N1bK5dk",
  "key1": "2uKzjAQBgQwQ7eubYvMvvGvpaofutvsm48ZjWTfXwJnyfCeXLkY34oN7woDrjuxucqhKiYXC43dLPPz2MJ8dD34a",
  "key2": "3mxJgVkUPd3NamTnU5t4LEXaguBWxd4NGig1zwtDbVLs5kHwm581fg9ghbEsQbbCMnJ7WiivUTU83E55E4sBrGrz",
  "key3": "T2x8pbZCGuJna96FxT8U6AmSSJ6UfyY6CBQPQSoHZNMzGL62SvTYwQrigJLZb4w4JLBqyYCTtSKwozBzwMtompL",
  "key4": "58pYXkgX67zHfQ1rgyusNq9EXqDLUwnxcUBF7Mj5j2XYXt5Y3nH6mGkkATAFzvh3nNGKSkKGzjrmfqkgNkhKZvfG",
  "key5": "5sZVXTqcQ3qUvYKSxetpsa26dPYuqhJwRuu6QCsFvyDdp9yds8XUw945nKmsDJRSQ8g1HHYdG9TqTQE6HMd2uUqu",
  "key6": "4DqS5LbNd9Gha1VVde9vsVTUpgxyf6e9gGjoMSPXKSKtRz5b3emiEdXWNXErzEe61nanTZGDeT1LuRZxoPaLYrMw",
  "key7": "344ruSpCCBqaxA6Tn5JHJcgW8ZvppS3rFnEASehjtTnP68h1NysY9S2dar1LELHSbhUgrZXwEV2UqKAcQRxAqQ7a",
  "key8": "2Nc3b8YbdfJxF95S7fRzh1RYUr2KmFfp1zEt7STNAmXSRpEGKR95tFYfPehxhRMzrGfgPzKMqvAX68VyvUwFo6iP",
  "key9": "2e9h2qmjgRFj18Bf17eexRRdMxtDxzzcvXNbJZT4n54tqBntVEB1gNiubaKAGyTmzYKD56HPVaF7nuwfW2wCTsHz",
  "key10": "2egPms4LavDUCZ7m16oTAgAxNeuixtHSyWXH15Ek2scSegpDtVf28h61hXcDATyEfM3yhygNryyLtm6CxyEPL95s",
  "key11": "5C3zn92j5aGdfc4F5jfYfZnBteRkoXSvt6TifLugTQJZ5FarhktTDAz9vkoLX94rcAs4jTKRP8isUSrSLo4ebjkF",
  "key12": "4cwEmteeFgf6NVM8rvqR6SRoKyZdBvv3cCFkafMeU7uTsxebwbFQuEEvDQEtpFPKYjm8Mhukt4ZQnus9JURZkzLy",
  "key13": "2UQNcSBdFE88TGa2Fj3LwovZ9LojwU44WGPfXiUgVQ8wpwHokJ33WNgV82wkQftCrohrVe5Z6i3Czy9fXmDGBGS8",
  "key14": "3hRTqMoAUfkaHhECVY9saYmAqMzimFU5T9XWoZd8fQ8nFEjTfLcJvNzxnS7M6y6Fue1biEPWzYDi7ZHuo6Vagnb",
  "key15": "3Gij3B8s9qEKT93U6KwF4Sd5oYFiWaDecDQQgNcLuvitweyiXNHGDq575cLwGvXAvfB1kfeon47EYpmYyXAYZrEM",
  "key16": "5BDBu1PWatZevjkU5odNcDCv3xaJ5tzoLArUYqKsGPYpkBd8qhnbT4bswccvv5Us5ZVTWMSVHTnj6M96DPqrSE34",
  "key17": "FoSDtyjKCnepfgmHWGnqAVzfrm9yigWCWSUaaCeenxeZqQRugTU94eo6w7Ks2Anzgk9t2dag55yEsT7gnaRzGGH",
  "key18": "bBokTikV9BW84WSvtu3uQ33gch62HTffuGmYEz1UkeR2PmxR1rpjUaAYPE3ya1pM3ytATog9SyZTZbhqRASFxqa",
  "key19": "RHrBMi4URrAzZKsMCeV4SaJ4b4rZ4q7D7SSeM9qdw4bxMaM6ynhKybhMrjQXzoM8gWHCha4f3wJLtTDKXS79uRL",
  "key20": "eSmM879UiXX2KMUfCK7LJaidqteKtjFDC3ocYXCS8JzQq8L3dzYTtVN6jjB5bHai98YDAv2cEuERu8iEf5jgZUQ",
  "key21": "dKXjmWgXc5Sy575NGCpRvwTMrGgkg4vQkQma1TBFiqmFAFSXkZxc6NiBYXtTXpdRJi2FYEnw6hxxXoUKorvyrpX",
  "key22": "3nHZ3QHmTHRMCLCgZZo1xRpehQ8qKqTS7krZyLB6y1QVYQQmQffzSzHH4CcpdtwRNoPKJWMbTgZh4TypAD9Mvow9",
  "key23": "fy8YgpoSBtAgFcL7ptSHhYCJpVyz72x29ZNdzAAsJVFYCHHu7heW13VMDZbtQ3kLG1MuYf6VxSsAm2ujrauk3TN",
  "key24": "398PQN5NQNGJGXQQrKMAupHhhzShxdzytnRjs8XwgfrHna4qrcNpd86PEMn89wQ73XFcT5k7CNiDsDRUhD4WAKgD",
  "key25": "229zkAWJEDjHtzfCW5bCDqtHCf92MUf9FgtwH4ZBnPaZ4kxnLGzQHfQzxb9LZycDKHwJrr9rFHw9ETgSFJm4rqkB",
  "key26": "23iWYANFG3MrjYSRSHPf4gAvVp9v7zzbZ3eB7vEZT7mA5nB7Xa6NTwDa776N35adPJt4STzmpsLaA4KVbRzFcJ36",
  "key27": "5P2rMg7HHcvwLQuZXVY5v91mSrWtakHq9jxxnpKbJv9NhqVaGekuzycBZ5foEtGf9yTHLvtUsStGQKkmx8pWwF2n",
  "key28": "4SzYMUcgLAXbRXZiPErmeWKMVBcWrVsEuaVhgtGn3TvvwRQq8by6gdBXU4Vw1BkmSVJG2gz1wQaZKom3PKfv4QBE",
  "key29": "39NewzdyFiJgXn4T9Exa1pE416D5McKuSJF9PWnNTyWHEny47KZ4KMJvGDAJBeVUk9pdECWGvVBTBeHQ1F4TwxDH",
  "key30": "5VkcLk7DzU3BN68BvYL3v2RS9r1Dy7APUw5LDkoWpsYjGNbgL2EGxvsSDtnocsQbfm4x2MX63mUQ3awsF8r7166U",
  "key31": "cv5AmXE1YViCSCS5RD4QnLQ9pE9rDRhJSZLQooLQUuEEvYrzuk9P1qiwthPwVeo3hoSCTo9YCjKk9fDNiBALiA5",
  "key32": "4vKRRkz3kxPRzEQFgLnFMUEj2EsirvH9icASG9hpt162Up7DaLYGoZSGLMR9mP7zM2Ba3szxW7PvRHZwZQAGZ8XS",
  "key33": "5cJexwMbZ92kZBwVPzgbXD47NdCYoq8B2cXnarfDKmcbLfyMEkLQJjGKh7yNqmW7gdYB1G5HKSUE7qzWroxKCaxB",
  "key34": "5cUzGY14hVJ7nh7wXURWVEfsS7XLzJ71Kk5PUE4a9u1DfqgWSySdq7FtuvHGGbDr1tfKkMrH7gXKMzpXkkU5ALBZ",
  "key35": "4BdFNQbYSCP6hjiNv1ZXSkDRCwgBtu1VvPpHs4n8wZPTd7LbTTb8rmFNynZzK6gr3iQtwteHfyQVQYV4crL1T6mL",
  "key36": "4R9u41kVYf3qcShx4Zfh7BzBHENquSRFEbUgLUW3k4wjPJUbZCeC9ZBziCevEXicSpdtXfs52AsTj3q7PwMkqEkD",
  "key37": "2ERpesF4Wqxjs5txiusvXkYcFzbovU4hMnypY13XisaJgrdVvdUjU6gerpH4ofCpKwFLfy45mjTiW8ZSmZEs9d16",
  "key38": "3tgK5C8r2ngov4R3Fake1SC3sow9a8468CEwSBkpNDmxDhDjNBQYo9ZADafhNP9EfYgJr7KhyNEf5LTr3ZTdJPMp",
  "key39": "3gVWt6tQ5HETQhNMbUtvrJn1cz7kV4GncDmCCzuDzXa4cFgdj6xDfVZaTp8xnzYfmF1ACtmgQqn96C9Zu5gsTfv2",
  "key40": "4Ctn6fBFpnfp95DJpXbLZbXWtLpncr8TAq9onV1VFPNg8SeTpQfvRR8pXcUE3iebiq7rouRfM4HP8Bg2QN4JTkFA",
  "key41": "2DuahmsZB16yyRE6GgPYimE2y8PYjqhoTr5UcHtSwmDqQghLK5gpGE3gq1rGBa3XK3xBhcw8jksJX8mh1RZkfS86",
  "key42": "3b8Udggivy6phKMCFTCbcfmwp3WfgL56dNR3qiKyzYJNCVsZsirsX8KPmNQF3v3gvb4iaJWGt1LK7jtgrrLvUJFw",
  "key43": "355DtgJBuoniPcfRduxGjR1a65u1ZTffFVbBcnvpsDTSVpvndDd14No6JXz9W6dVaiUjqHPYcyFDxx2sYNjfwHgF",
  "key44": "26Ti9ZXwmKviUDt1MSfFxDgaPumQPYC9ExZQ9b9PWKjPoUPoqc6z9uBis3MfG9sSGoUSVKBmMNUHX6xrnn8PMK5s",
  "key45": "AwxqD8QUS2WrKKy6pCTqdQxuNsTeHSrXbYBPawRGFARF26mu5JnCXT7xKzzzgJWcvxpVDhWLPkbpn3x4g7K89Ha",
  "key46": "3s9ejvJYpa1QCjv9TUJxRj7EiCSTaoLPp2nLNp7bNzJy5UEGTN2YEswaGnyJArujT1xx3gxqTDDdtzAFqp8ojeqt",
  "key47": "4j3SSugWrkM8ucsKfYsSjtz7tg1XafKvxcztY6wPBSYjL7Pz9qf6yHbWZ6ZYzvFoxjqm2LbP2MByqjD5f67pcnAM"
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
