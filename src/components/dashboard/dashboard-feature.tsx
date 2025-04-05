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
    "5ryXYX74x2wTjGNdBefZ5MAGA6qdvfeCK4y6k5VbuejSTXNxwT52LXENK7VWJPTWmTrK5aAzhRVkLhSnMdpmf5ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xvGovkaodxrTBbaVHopA8Rg2T1oQhCvuVYaxQHKUoA8ezkyjECYyVkWEQS5zvA7A7JWeUk1LTh47DkgRwHMrvnW",
  "key1": "5WDtrFxxsPWbCP61yCMZE515Q8XjnV58BpmW7njtRaoHDV29agujxuZwN9r4kBbM4qkqkiaKCJ46Emy15S1DZzSZ",
  "key2": "54GepNa2KuFJxdie3Gvt6dEfjGdHcL6WkVwqZb2NqCpmJHjEVERDVzReD9QQvxr9Y57V77wqGmCUFoeoY9Mf9Eex",
  "key3": "4abZ4msBp3wcujVUMsttfgR5Z3tdXDQmx385fC7XQeNzThRSkXVyMRKvJHTU2gYhVkkETHYTZUJ3WfYhZgPNoW1G",
  "key4": "4AzwFAebrXjDtJxhU2NH4K23DF9aw8D5c7UkyhF5ZwzgXjkGe9sVucwG75gZoZ1nwwig8jD6WaKLQmphXB7rpfBX",
  "key5": "4bVKFPL26LbL4ajZHvUXZyPGdsUXQidRWtbyhfqiQabT1Xgx1f955y24foEc5ipb3J8GQdVa8dZDSp274564aLWT",
  "key6": "4rWb9nhBoFFYGESd2LB5m1xN783vcoS4YLGSDmjdqXQKAgMnqcbVE1UzRBRr3bALBiJsXdEs9QnsQf7SEbEKLce9",
  "key7": "4uBhZFoBy5dmTMEHcRYoVf6dqcHkvsdMjHxpufDWRajpnvoxWnd3D5NqKHUbuEgSJHcQ32yN3vR6xpyhpeRu7Qoe",
  "key8": "3gPSiLjM4b3hAPhmzrERLV79tGuTcPBrsg9nJXDKf9pjT7VwkWxD4TVdpdJaTQ9eyTv5u53XdPfy5N85bFaWgsoF",
  "key9": "5P4GgtmMQZ3i4UKR51oafoHMfdCvGQx2MY7gGPy6M4ps6Cc8RQtavNdLcZ6HpqnkDSAtmWegUQboA3BVr4yWHuQC",
  "key10": "4X6dsbRNHqAwbpr5EzGcWAADq2ufQE4rrMNqDMojspVwm2MgYc7xqR3zWksgGJy7AxjgVcfXcZ8SFU7kz4eBW3HM",
  "key11": "2Y5oWMnU3cMLFZ45RiBHF6aKzTbqToHxpsW468Wi4N8EhGub13ChcwdRwmp9g2BQjQqAaMXRvnaRBoV2tYqicLES",
  "key12": "3jYtFuZN53YHGH8rCWuCbHVsrT8uTjhNHJDriD5YmsqFWgyNy2ixkdGviELCAPhgWBdRLqHvRvcdYnqaBVDsKENo",
  "key13": "3XeeAttALMtd1wcmQwMhEzrXZYtkRE1S8EA22jRypBXtWxJX1jQ7zip9cZWsueAix3cNHnnwrXFGYGnTarsSr1iu",
  "key14": "4bv4VCpEZW2eDfWjsivmLC4qUHvuUiNm3Sohd4wFtDBxBuq9kVCQfykcHP7ZTEK9NydeZ73oeZgYYohWH5NgDhyf",
  "key15": "3hd5eAfpj9BhfpUDaUzmo3Z6bgUDxkxhdregr4H3dBirWKrCc5HPG1rrRZxwKfTdx8moHbaePqcTm1Pq98FMQ8Qt",
  "key16": "4FNtXLittrySTv6zyeudkBnuC8tSHdscEJXvf6v7D1PMs3RxHgQKey8YDRFsCyjLWCz3om73RFgZ8prRRDofZcFW",
  "key17": "4wRsnAF79A4YNhGcNHLa62BTkPMmewVVENUUE3kQovEomPK9jBBFwsuVAQKEu8LLSVHsoPGMRF1pVe7z7cA395Y",
  "key18": "axjCoLopfw27aSdzzkhnH6eVMCXWtGWVaD6PYFPACketdmbgn7vMbnsxWKZir9QweeH7pyzYTwEz2iGJFYh67ox",
  "key19": "2gGLounWGjSZJHbg8v9wUa2QWnZSLFm7VzQkDdBxeAw3Fh6nyhj7FAx6XuTbg3A15UD733HWJNv7NsQHQ6of92Nj",
  "key20": "2j7dh4Zui6s6J1xqPCA84oHKYiyVsJzGkGX4fjihLXfBBHCgDnaepicZrpE97icbftmXZ7ZaQJx5B1AhFzyxcr77",
  "key21": "5ZWkGDFPqntgKB8GCWaNLR8N8inNVaevcT7d8gnGcN93he27HMWL26bwdeRiCg4yBFa4vv9nCJwh2A5nsg6BkA8e",
  "key22": "2Acc9NnCX2QYn9ie8HzbAXCArLuwZ697BjcRMRnTm1fZqkAVY9qMPU4reoQPdNb7JgGi4LsUFuJc1nSPhN6Qumw2",
  "key23": "2D89rqvVTpFHA15of5JLdBSw3S2gbbTT1Fiz285oXs8kfCF5KUpqHtHfPC5gyWFvPngeBLxYF3Rqv1XBZsN12MbX",
  "key24": "35GZqdvUzy2Tp3V78rvyLZJaQ7i1LinGgEvn3GxN2X4peeJjYBJScTKrQbFqhkc2gZqHFVbQxUMVD1g4L35b8ypq",
  "key25": "3uC8Yk2cg7tU9RJqYFz9DLSRBgDTNJMkNmAZzTFCmLQ2SAEW4fV333eMQcKm3pWjJPwNo6AK64CbA7HtSLCyeAYW",
  "key26": "5Ubmhve8XjnNKnd5DK4VxZWb7d7Q4Q9WiCfJfrwqtLqFSWzz1Ats58HSxNixxUWkPrHiWzz78dz57GxQvdAhEpn3",
  "key27": "3JfJ36tD4pV61P54HzU72Fi2yBFNvwZ2NxREdhpC2XRCWUXABRwjKnkFr6ocEnbff5DMHecKVuNXRRw2srTJPgpP",
  "key28": "5zmLuunkmuCidF9becwYjQptvJqhqCXXzYF2YccBCi6tLR2FP2nXgvMFPPwaA4smuzcRcEuszqi6zN2dA9qgadCt",
  "key29": "5MANhBEwb6pMHWCRdLvdnmcK9gYXQMA6XDypE8BP7ruVb3vYurMB4fc4hbrGfniWMSECgEF52n9bunFTUFfZcBSd",
  "key30": "4oBU965KtA7TvpxWPJV72a8y5ard2o8EHHzqcChbm1pZHoigJnHmf6HZntSEJPeSgbxg3oooaxCjNAWNX27oTXEv",
  "key31": "3eznqh4SRi4jupNkUUDhHNLA7ksMH61R7pJC7oSYwnxXmC25BTRzd4kqFZMGZkUdZ7ztx7Z6YH3vgC7jPkQtJgqo"
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
