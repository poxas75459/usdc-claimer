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
    "2LuaCjF1p2HdP5ExBpnJMYRsiHR4SyRxgyUuPdskhggPGq6fS4d915Sg4CDg9XczzT7T1zJFeSahz6Rbqp8vHTPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jVspvA4dboi2tVAofdUuKu7tWY4TMB21St5VjqsHYCTPPiS8aEW9WJXA7Y4YyWJsbsJVwYwdTZCjMEyjz1FFA77",
  "key1": "5HfVDGmy9NCYkdQU9ASReA5otB2r5E27FWhJYnC9Ni7PwCypMPz8uAPUwqMsbiFU5PsQfvDMX55bqRo7oH8FfT7x",
  "key2": "4X4GbfTzmaGcqJy1t7SjPuGECKAoqfzH5SZEK5NCU9713m3xhWUpNK7giaRFbhGuh3VkBim8XbgsjoCoPsGnZ6ec",
  "key3": "5jY2yvKrYAGXnUqbWZ6AUYsnhKVmpV2Hf58i3KoGNEBamfFR2oHqPKLLfR5PKkt3KL6serYQCVFA86CdS789WoEE",
  "key4": "4vHmakUpt8mEHbqRBR7Ha4GiCzGe9Peqa5zwhxz7aRNYJSaB557nLN7WCyxYz98eHMTQWDw6wj7dodkLn2DSh6ug",
  "key5": "iwvmXmZ9tcfB7YCQCu4TY9ryT87tuGkE6FuUiSDofXeWPp182WsSLq4j47PisuwHudAZNAwisz22vc73RsDSLAZ",
  "key6": "4m6qAaQRAJwsnGG1WugJAUQqATQqctJ8UdVU84MU65oLtBwjUkb5VYPwkEcFiGV6chdLsLaFtCTLFw4wvqfAGpUX",
  "key7": "gaJHmxC9RNHQiWsRv32c3TPkXXNocimv2uaMoYk37eHuqcrRvQTcmh1tWWDY1V93vhE4iA7odLQRWkp7t4uibUz",
  "key8": "2osDgojCTuodmrL2hBz8zXkk8CJo4SErXf7JwngWmBzgqVAf2edx2NwLUk2x15FRn57gPBH8spc4DkExrzykUFM8",
  "key9": "4BFt9iG4fnkSJ26gKoT3XmoGPQKfeSNSFrxHX7yu1shVg5ciyFb997MztCxapE2WEs7D3xXdUw8pRjFjkHvc1E2B",
  "key10": "5RirXg1azxfTuRUbncVVkXjRDKAyHE8aQg9SMMG95kdgQmQp2fHBimvQ6yVMWVqUUwvhR87zjK5PSUCc8NZVjNvt",
  "key11": "2hUKBn3pRVuKU2bSFqESimmmzLHffeiHVBZZvr156F5859RzpPNyy49pR2HgjcpKCqvwPoyqxkQ9bUs9x5Q9Pu2t",
  "key12": "4Y2txTCCbgpEkFesZeemieWwDnqGMsWGb75Krv7DDncmcah3X7wuCibsrJafEWcKAZPZdigu47CvC9bwVcq1L9b5",
  "key13": "3E47yzE6gT9qT9Ds1LuKdtjm9NZvCLK9L57mr9HjfpSvKn7DA5xhB5f7C7SKHKKQmGvDToSR6wUKifBVhrnA3QuC",
  "key14": "2MPLoqv2rTZWpqMbh6vkXFmsnZgFxrr7cgQeVwaS2jmKC4pSkVYiFtdcLU7mbWpa5jEDDyzBtG7qptuyxuXsbqyn",
  "key15": "5s2ameZVbnqrpRVQV2NX6LaDmDoJrzLgkgXov7oSRym5RZ12bD3sX6977yWy5eyPCvZiELM3yK215XBSPdCpkTYq",
  "key16": "3M5effoKaaRBxu4iG7TASrRDNvppfQowXrFSM7yVZUeBmrPZffN94y7eR3Z5xiM1cHkDKMWmA5tPxShPS1xAKuRf",
  "key17": "3ux31UdPtidriAfezpp5gCCnNFHs1VuBRxVwCUKyhp3LcyZUuzu8ekfA4fL5BUwQiBKqzBSRRa4YDs5mnpxexbLw",
  "key18": "5i2pEc88zJmnvmM2Wxby3m6MsBzbgmGtNSF8ptWc615V6pnjpgYJ3Rp4g9KLrJ8gn5cyk9FnQEcE3NCSM3SAYW4Q",
  "key19": "28FE9Rp6FdZiZ7BG1D1aCcpr4f1NhwP5XVz6gLSXm1vacQGc65mWBJLGLFziLnos64KJaE8576bwyK1iY5UMdqSk",
  "key20": "4yZ3gJh4mVnYr8phzAuF2VKBHzEMrz989WT5sfqR7GvY2PLACeVvS46FkZW82sRviDN5ryQ7sAGUdh9KN6d6HF2X",
  "key21": "2aWMWDzGaP1QvTpYPxqw5XiMo7TopexDUYULT5bJFLg3X8Sqw9TFRfUYeM6AVxNuKGCuCf9tGCRBFyj7ujQNMqBR",
  "key22": "5K3ESBtMwazAfQ4pbceqTkdyhDPMQ6wzzkr7UKTg9Ee2c8e4Vs4n4v8Hrdf6SA7gTLipDcqGMVdzc3ye75qxUxtH",
  "key23": "2Y21zR8z8ZN6UDQPtrKMS7EPY8Zxy85QmkDBE4ySsKAjyJdi4vWphhbAcgimDqE1uEfDQviexQBp9BWR6LRLRMy2",
  "key24": "2tLRqZugPqrzSsEBqHzvD6gWC5DDmzyfrwDAEpgxzUuuLmr2i5uiVM1UYgFStdM9ZKnTTWBjMBZmhyUMhbXHdjSM",
  "key25": "3brKKvzfYXiuLKuDKYY11LzUCecbovwCnEgfApMZdQeS7bbxt9FBZY46CHiZ85xgru79DyipBXFm1BRzVHZeDYMg",
  "key26": "3N7gMZVhgL6hKzk2THpRj7AgGnxSWjX2aHUgGn6WoRC1t1ftwwKvpMXSdvdgJLupz9zbjTN5eefp4rUUHfM19Kdh",
  "key27": "3yBs2d9tewc9Tpj2gMau2FSDNESM8h4DszoDSWvw8nGC73L4qYbcje2XhBF5it1R5eP5EswMZYptxNtwDNLaHNAW",
  "key28": "2hfeEjugn2roGzxrDWWfBkUxuvpq4FMoEQvgEP7bqYpauw3SXBSH4TX9WgXDYAHzS6T1hdvpSgL5isShVmRYd3qc",
  "key29": "5kEXMWiTxwRiJPk1MksTm73KNSK8xvAdMnez2yzWKK7gN8yhUiEEsUmV6NaySVxHYqZP7btgbfbuKcoYhdHzn8to",
  "key30": "4yXAS5pv7rCkvNU5BnUqGJGCNFYwA3dYd95eP2SwNHpwAAHeCymUs4DE6n93yxyRYmXUfxySW5DnLNEVzTpTDLnE",
  "key31": "oeNRGozmTwjuseFyvHsqkWFGRErk2NV2AAJ4FPf7LZKop4Q4iwot2a7Ya2H5F5YNegXGhb1pM765JkdLiUSBsu9",
  "key32": "49o1yDnECx4D8BCT5fuowCsova3kHkiUJKyc2kq6yhgrxWzpiywmoj7sijLktpfH5WPVqX9GtbHk1H3WoQDh8YF5",
  "key33": "5wuCiDrE7hjiZibq631L25UfhivJJzDq59sKXZJSvM9YoBqWxWREmL1eVK3e1cQHXZYzHCvErhGnzESt6yr8sWeX",
  "key34": "56RHj5kx21FWeCrrFkkRX71ewfz2GFrwM7LwedMvGQJkAxhdJMCHkKZfKp3YA3xkT8A8dd6xq9KUL7tGFypXwxxf",
  "key35": "3qWjVmdJvDRjKA6Wp3dyrUv1yesaHkLDB8HR2BSCgizb9v7PJNy74JRXYaSZ2yc3hK8AiuxTaeftB2sdECjeB9op",
  "key36": "4r9NsvUQzXrkAs9FiR8jLY9eoB8QEDgchHJj53vJGZN27wB7Muf12AhSXXRtCHtXwsTfReGVfzhkJgC7aGZWbmVR",
  "key37": "3hMaCk3gzFsUqW4nzMSaz6mPeKXbSwixsjRpyV75tKFzHm9aKhyaibcZ8X2tTN6HcF7K53KKX4rYgQDh1eXcVF4K",
  "key38": "4bpNzABu95FooJNg6jpaHsrQFppTBmikEqYaZToUWjEycXnPv8L6ubKa1hL3FUdqCb1eZdMMCDkUeLefiHemMihR",
  "key39": "47BttmpNNMjbAQR4Nj47ZGtvHM5B1i9yufqJVFmjneVbdQ1yrF2aNYA1U4kTiiezGwueX6tBaVZTx4HHtckcBdbv"
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
