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
    "5EUSAeU1VwhHGvf6ptrvHqpiNYzCQSLanuBkcsygaiRYYGdCdhC9jgay3MU2GEgyEcMe5jHVukGSxppuzGjkHDZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xUYj6isDNSmeyua3T5tnWS9Mq29MogfCfMeniMWU5seMmHDfNUW3TkPyPUJCagWiixYTAfUwHNXFufqS77r4KjR",
  "key1": "ejxR7Lwc7KzA3KQFukoneDSXCC8UPrUvxtEoAqCZqKEFccphGDPv1Kq9gXgYCGjTkbwcBjrQMUM5z4ofDQoBNHq",
  "key2": "3ZDX6KQ6cHbSboFDbUSjFpMFuxV1pZovjKDeWVFkKB9mnGh7rkRriHYdgbUaHVR6uFMBg559Y8rZUHoLyCSz4Tg5",
  "key3": "5BX4zDBYTp4eGB7B1N2u4AXTbTXFxM8pfqE6Q86PmbYmUMDxmMGYvzb3FvhE3iiWg7NThmyAoUf4zg4YSZgDv7X9",
  "key4": "2tngia3P4mBz4fFKAi4yENQxbhPhs78Nm7o3chgL9VQkJimryWvLodYo2HWE6ZrP938EphaQB6j2eYSeG89LEJtX",
  "key5": "2somRVFNuHnuFQJhThVDT6sPNpo62ArTAo5of213TNCYYZftTVHCRdQv9Vdo86xQEGN73WM1VX4qDXs3JA7hZjLg",
  "key6": "3fVK9P68knnrrxn2Cqhy5bWD4hYtCQvJmdiYq2KghyYHft4Y5zYTkLniKLfkaPK4WuiCnJV5RR6E1yEkG6anamRF",
  "key7": "3Gm4UcSweXcNqroFU1fk7ctiS1S3UZaX37Lg18o8fPtFiqoNwoZzk4kHDC8vnJgQ5zTfeTopmMiriVpqbfQGJax8",
  "key8": "5KaGuBvpDwKFHZgackZptX27pG9xicsmvjHAJrk4CYBbzg1mdpsdXmQqrUJHqsFwkTQdnDGmgwqULQR3sUgJqEa8",
  "key9": "FjmkjFXGLEbppfyFwbUCp5DMiStXz5rFxZmh9djW4S6vuZBNRfLKg6Da93wqhiB3zzvHGK5aQjW7v6TudotcvKz",
  "key10": "5bS3xQiKb13X5cSyWmzrGwLDscX6SHBWrkZ3V4FBzzv75Eo9Psz11kM6KjCSuxuBvUjYkVAKeeJHwxJX1jrMYPYK",
  "key11": "4d7WjE2pCxBgsvPRjUu2TuGBo3kL2rEBeFVE4em38BVq1bozoUuGPoNy9KuxqDdErd1kxQuGLBZRjUkb17WRUJ2R",
  "key12": "3Ui4t1BfSxzxYNynqtN1djCgEYeGa1JrwDLodv8bnky5HDcwSPrrjtuuBbk4FpKPVL5VM58NAnLYvd1TxJKht1bd",
  "key13": "3i7Uub2X2AnF7FZroebAhXWVncgy4xwmbzDMrTp7wDcpMQdaMkXV5ErkPwvs1zUib7CLwoipEsW19CXWNYHKSnmF",
  "key14": "47wuxuzS4Uovw5qDzajHQoyiGh4tgqBpgtkA2eshbXofXVqvrTyo9i6m59jwXPCY9Fh8UxGkmv1VgFynrS1GzTWH",
  "key15": "33qanZ6fsAg13HpPksCL5UoNWUCcpe9LBWuoda5AQiaCHA9KSvp6kbBfMe7Bor1RDkjXhWxTfgQj2Kac9pVUAzy6",
  "key16": "2cBEoF1hEJR5bz3XqAc4TbDNnULBcnGkALzU5FT5CWC5vJ4mUKKSA7bsUHuzUxpmfd75WSULGVbDBMsULc3wjiUQ",
  "key17": "4m1knyLnmcSKGGiisVqnJCiJv4R1xKkG5mqUGd2QFQQbVHqP7Vvhx79hTwJHTgdizMH5j5KTpsZxjQxGjbGjxz9N",
  "key18": "3XXS5yddUuP64DvDabT3Pqo73jGzJBk45BJQuiF4QL58y9xbDj8Zyqmw4KG5CYnT2Jk8ikMYbgnLzUuRbAwM8N2i",
  "key19": "2pf4FgrSAvoCnfXgA2D65rJ5MmuEoFiNEZEU84SqipheWg1c4FHMGeRvaNdRXKKDYuogRxGWHGdVByxEa9eC8HZf",
  "key20": "3zvUr8AjTepvwKaJ1bvctt3TFdyJXXLBgmMhNfSbwcW48kF6J92Dp8rXVgPwRmfqzQUsa8pYZbtbvuJPgKEwGzt4",
  "key21": "5wmSFLJrP3HvEnAuP2QdEPC9avURNEaJNGRYnduP9gY92GPpzDJeA3uCbFm486V8svQ2uHnxfxkufBFDuspCJNd9",
  "key22": "2vTMi2i8WMVdrNd92ucxBZJeGSQrzKmif5ATAHF8ahmbtuUfHQys95XtcGzAJDke7EujhJ6sK73i1Z147YkFXHMh",
  "key23": "kDTVQvNuoic25DGG8Ni8Vr1FV9xfzu7NRcVtA9dvBSBNRhPqjFsTseGsqc1cZuFDA1pGsXeE5pZVsarkcwDdmrt",
  "key24": "5yzWasrPYK7qPMMqscCRsR2Mpy3mifHyGk5LAqMok35jx15kjNvpwasa2CgZTsb4YaCmKWaWpNmHpWEghKFxENt6",
  "key25": "4NtTaQrK3RjSSRrp8ZKXCuAgebKrNShJdvEq69iuATdL8raU39t2S4Ck7q6yoUNqPU7BBZcFJgirsFjw6mBHBuxu",
  "key26": "2zQ3JFxCRKxthmxZuEZpYw1QoJm5kDjNoypmNEdwRN5Fgxx3LMaba1XHerz2aAu3m8AsSn4DLVcqFKTFKV4baWhp"
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
