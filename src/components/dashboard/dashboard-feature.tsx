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
    "M1NSr9CYWwze961HLN7CeuxjFdoYjJbkJqXn9MpRpjkpuBpbtGEftuhBrVMhAZ9PLi2qC2KECg35Bxs9XsbJuuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F5JXhL3e1G232kmLvuKKcZx7E3RLucrqME1mAZZHWxYuJiBfSH4DgYpfqjDZ4ADQSSDej8B3vR8a93TL68k7vPf",
  "key1": "2iNkTf3e6JiYpLwjMVktJSat1VEUvVFH4Uhp8arkVbhHgNNJkPGEfEs7YuB7FGJBVnM5do6dLd7Wv6UZSgVuztfQ",
  "key2": "34TFcBRJuwHhKpydKFP5p8fWWz62K86hfYiUKAkGjCuTfXno3XW77ZkA5FhWTxwmfLaFRB11NedKELHR8JJSCi19",
  "key3": "2YsxjkYACNziPheC9zmHxF5vEdGxeQkVJB5cP9zPyrrVw7QPqAzjHG8yuppA2LexRbJdbdvE2FpFNGWwBZCULV4w",
  "key4": "4VE5TkE2UcMJEusSgYYCrYTRWFaWH8BgRTkbh3PZ4Pob38PTRvR69qZF961LU1g26oGK5VNXh4AidLc2TPiYyGTE",
  "key5": "5SaSBUXQ5XqGcQ1RoCLpNj8Q354rcJ9uCyNyjHMsSHNgTPQpD23PacABsvf6PcJtyY7NHsRyJZu61JhnTdzFQTgK",
  "key6": "5mXymSK5GzYPvWUmmnomoJ1R2xfGNxPj74cc1BVEbGS6Pqq6BVBuuUS71oBn7fbtNmjS5HsRBJs5JeLsQUk4p6JC",
  "key7": "3akGzVNSZGKfzTNNgK3nqZ6brsgvuSHprMqH6LAMuuYiq1d7HMJtVNB6dYyjgBnpyuprZNc5B4kHvmmpgcwfmJqk",
  "key8": "2H83VaKx2D5qB3By28gTvuLXjeJDZ769HUzN4yZEGGpXxsBKCaa1UwNKveW4TZy8jdyLDXNxb3UyKkAFK6xaksC2",
  "key9": "3gzMHq349u5vijZnNme8uFKJdF6LYKg2KmKey2qADpSKjqpxuhnEebDgtQY9Xpt9CzeNSVdDLUdXkkDBx19DUD3X",
  "key10": "3awg9hV5SiEzY83LgruG6uFpzmKtEfdpATCV3DEnge2vGeJVYzZx5cxAuohk2ubrVT4kCNR2WVAJUodiQK9dCwem",
  "key11": "54rCBPNR3ydJWtFK8DSRMtNyYKwzA2oWPQJ3jB47dFcQEBC8kuF3tCYdThVjaB129xcUJz3sYoYKcVrpcBgS9EnS",
  "key12": "NL7EL7Undxe3L2dwMwsTbsYBzLSgMCk6zQSVwrqi5QFGtVRj8pMD669JS69AuWtxgBgE1DhBRbVXKNMyL7HB3sd",
  "key13": "4FWBF1nyoChhLbdAbj8jvaEZvx8ioZQNTVcrbF1unWyBknvgdq1oGEs2ceY312wf2hn7YuLH9pnEA4Jg7UCbz9rt",
  "key14": "426AEveq2J17VyzYtx1soXXtUzfCAji4n9Yf9V7ciPAUgk9N159FNJgQT9bJjNmixfoafbfSN5tWKDdyPKx9e1PS",
  "key15": "31gddzzA82aYm2GKFtsBy5YvgeQVk8RDiAmTWTJapvdVJu2qUgAZLKqJCt8vngwPhfrNE6nY5T3vPX1LUe6JhSKi",
  "key16": "2iv2tVXiYzuhrtvz3LVYsvQbDQxP5uSzzProYrNc6j3QmfdjVUwNMEwecwNz1H5yp96h6zN8yEwsGMmSCDPZ8NA9",
  "key17": "2D3y3iBdMjL9Heoq4xx8RVLFyjyQSfiPScuoRtdPRLmMhiSSTCtZVmvdZKLNAhTu37xRmysSNdEsgLfKQxTYzTBE",
  "key18": "4jasjXAzm5YSqdGFwcZRjxsm4L5mLRMgFUGsdeWDDgumTgbycqwUKvTidk3s8yBzaCo873drGX4k5Wxo4EZVz2VK",
  "key19": "2AQomWdPLVcSvguhzhZ1tX69HXMUq2uKt8yPLnHG9MdRpFoLqboy4tL1DPURZoL4hgbYAg7LXcT43SmHGMqrBt6k",
  "key20": "5p1xrViQbYFRnp3x6dSU8if2SD5nuN4VVxuTCCKaAiAERVJJBjAZcmaSGY7VTD8kan9mfr6xJ5jhBtZH3w7muUQ8",
  "key21": "663Ap8hjzGjowvdoq7nN82HF3Heg1X2hxAyBdx62iEHJzshULbyhNryXZngGNrmDnpBJmuyQvVJswXdkjh9G1TSN",
  "key22": "2ZCCKM2ZBXhaLGKFs3PqtxPgW7zMD2QUHxtCnoJFpkWdv2JQi3CrVLopbuudXurcnhgTnUAeyURGjdxiZgARbYU7",
  "key23": "4QNBA3o2g7woE5K3D5CNBhNSRJ8k3bk4fGLpfDx8uZ47pHaoEQnyDTYqqQK7eMxw8BcFBQUjYiWM49HEGzHofvpx",
  "key24": "3yA6VaTxxgGFKWdUCu9BSmgqbV2ZyXCmq5Vk5ScpJmvJieWowYuYhDoj5VRRYNSk3t2smFUxAViuWqfRyWAXDgji",
  "key25": "2BARMQsizMPSzPVcqhcDUoeJRM7PFPdRruoY3rvsAYnKMr33p1dNNtWGXUEHKcuf2fs5fhLfarWk5W5EVcpGommN",
  "key26": "4s6Ume8767XH5dunM7AmnkW2w8T4zqg5SaPGoR8cFq6eMDP1HjfY3MsYaHyaRZ21FkYnc9sjXMNXDqp2WX9gCdiL",
  "key27": "5H29mgGvyUuRu2W87RYw1JqhpkRcds6R2joEnfNd6v6ABVjGm32RzZYVepMx6FhP7fL7jCBenAimkdL3fddk7ypq",
  "key28": "63XqSHS58sxuw9SoRiBy5UoxDG5GK59YoiqMy4BM6D5ZGJko2yYztDs5s63MLjTZu3nz9s86H9w9n75HzYAkquED",
  "key29": "5wVF3iUZxv8WDzepTX7kWAzeAqv9vgN23s8gDsNhRt4ZNnRuLgY8zFWv29E4pqjzeUNiTcbUQ5zGUL9vuzDiQ47T",
  "key30": "3kfuiHYG53UyThGv8g9HTrDskuYPhU5snmgQFQJaJk9MUxQ5Yw2UJfkvyzTZ6ApYTC5xmWZn39a7ic2BGy9Wy9Er",
  "key31": "uPxvC4RmoJjTF1wu9GQnomFNxFS1cwEygpVCnKii56rLvNpkfjLxmWk5yhfBzef9SM2PQAX1KRbSQkPAJToVzN8",
  "key32": "Wb8Dk2ZUZa1AGKdTSfRCwwLi6pZVw1m45rQKjwZo7kE5sV8Rs9DvnSJ3gDamSCHpdBbhubF5Hma6Y67m9v9jBnV",
  "key33": "2TPcxNcKQ2z1TGDjYRS1LPeMtTenTCkSPQPEUM9a4fjTTNty7ugNAPr6z2HvgxE6S2ruSYcLzD6WAMpDz11Ko6jF",
  "key34": "23JDwzGZy6q3diDTQn4TGBcwGQa7F5ZGJLRcgkofmd9xVd4gwtrorV7rdARgLRUr8mF5ueAYi3KjtCQYfkw1hhSS"
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
