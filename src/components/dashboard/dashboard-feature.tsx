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
    "5zBxRPWDBwdRVfwM8uEwHjUUvdbXD9ZdnLA2N65maChSTnL9x24b7aSyQjWuydst4AeCoEuQohGXziFBxaH8LaHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RVwiUGh7aF1bsHHCu1Fg9SH8R5EfRmWLSKTyAwVjf26QToK1wGjNZQXQqHDPwi7z6pKMLbQPRM5uSawqk9iBGb4",
  "key1": "5okhqSbvnjexgw5bQbyCNCh3rB739hufc58NwZLpz8TjJB4bM8E7a3NecHedzQf4vqDugYrDHiP2NvNKMDEpvHuU",
  "key2": "22YdV7i7Xc8ZNNvVcZmEt6YgsGJGEy7qn3qoLRCCSjd8Ci7Pmf7rSsKcjcV1gX78JWwRyT7deg4rsSJoAxdENUFy",
  "key3": "JrTARrSCyqzVcmfGgnLX5fA5c6NKVms5fojhVAm9WYtaqWgyw8oqPCn4HHzC5FNiXNj3RnHgHJsMoEcwg8NfeAf",
  "key4": "rb9oJuGkhwkHaqd1Hwxt4dnbt2tps5fU7jT5593gGE1VW9aXfk9cZqXKpgEe7hmDNfDpAaNzYFdEtKHfyefLbxv",
  "key5": "42fU4igkEnrJby365op2PxXHxBsfgcboBuVHgw4e376HZVipU3rLf7iZ94GoHUhuXnnEGu1hRy12xEzNSsqYucoT",
  "key6": "4JqN1xq3gwf84HixKec2BkLzAKy9toTrDhiFhSJMtx9bUrDKSZrn2FzoB7jmrdbnKZhoT69nrZ1yiG1Xmp8jiZVJ",
  "key7": "2TjbniAeTK5E8bASQKPukZXGkn2727g6ab9AxCamNsNoSWyMULxwptM38Jfb8RefvMvabQgLFQeotyZL7WdRVtXN",
  "key8": "29ChtnJC7VmPu7i54qr6PTFPgaHC17LhFDAPRyjYQGgdsGVUswxMNLARuHEGwHRKkEdQhqnpDBDqFasaj9wNxKup",
  "key9": "3oPy9Lk4hT3PESFZ895G1JEbFwCEViPvuZWdnmVWa14p4a11TgGKNVBCdw7HSgRzN6WDd9Fx4fbsGcaDzfQ491G1",
  "key10": "5eTRafYhzFfcQdpcmZyQXiKq1JdCvM714LGhQSvZL5MdAmpSDengyyZJvw4MnjPYAp6RRDynvaPd9cDYuxPm2WfU",
  "key11": "4nLL6rYhXKSSiaedesz3PmK9FK36vSK4TFtw2BPZwZsygbpfSGu5xeBX2SbyUjCBXybFkVYuBB9vjVL7W89no4hY",
  "key12": "4LJwRo8abitY7aRgBbwvpwq2K7Z28HuxzsdPvPuKxQcyfmrUcasEG7nCgT5fDgYTnNRAPcWwoi5rGxCHkdHkZJmk",
  "key13": "4dh9ZJyftkwQRheXeEQUydWypc7WDfWvZQFf1RutJgA2pJ2FCCNmkijFd1MfQjSoAh2ELNDtw5vkzbGr3YqYuZm9",
  "key14": "2JwtAqpvqZmqG9rydJU3gChtxHZtsEtb1yRC6BYfGuN4aKyp11LErcovoS5hVsJ47EKmsQc5f3LaYYjJTaAE9pyj",
  "key15": "QojALS5ighW1siWuQ5G4M3L6WJPyUczeYmazkxRxYLmtR5pTuo7gnehBDRE9v739pqv52ddK8CNgQL4MqZeGyHe",
  "key16": "3NzegHJXYDm9CzhvtE6HTz2wcChDix6weF6UDchb8Y5Riy7T4mHxynzXcKjzh4aY1SwBopYPWD4UjsAtPpVBYdjF",
  "key17": "64CvoWiw8yPHQy8Fq8sNcviBp6C7r95EuWqHeJCQxjKTXrAmPY23WGAFR2vEwtXMXe3DcT1gSPSHB6wwuL4TQdUJ",
  "key18": "5QnDmKbygPb4yBiPkHbYgPRt5ThZ1Mep93bTTnG7zHudzxaDeSTDKScJRVqy7gwu8UTVpyta6cBR1cKsyYvoAQLW",
  "key19": "3WGKkAdHHPVcUDWfPtHNLS77u1fiTXsSHAjgx4xYzA2tZpwxPbTS4W6rSaueJBUKZ9U6c8uf1nTfogmGYn8Jtuqp",
  "key20": "28VLgsPW2BnJC1g3pG9fvVfKyYCVZ6cY1YEHm3ZGXgXJSPpCUpAYuVLUQv3y3XwAhiFqMXpEJr786w1T4xq4BXzd",
  "key21": "2D6YxGEdvr2GWKxoa6ERdpDSPna5oSQMbVyk99Xryvc9iBLgQDNTU6YsFshrUKY9DiTpE4QFbrfnHgVNYEAjpHgA",
  "key22": "3CyRcnFbozsVgBXUdWPoevKnjVvmtVAHGb8H1TXTNFUDP5AqHarYZwkgBQvWvBziH1gzqbuWJFEj2bCCPzcfBrhH",
  "key23": "4iMBiDVitCNCWgnYom5m8E9AQgv69yi8ZZ3obx9Sf5VKRKy1HsRciHx4uLbC9BaeBmpXPqksT5bT774zUbmThwb",
  "key24": "5Wov19GerNM4p8gdhhTrxYRc9y2M9nKs5TPTkd8BaVx72JFuUv9TAWUAQ9JhS9syeWw54DSmoRtQQDN7dvxm6HWB",
  "key25": "4BwChrGcMx6jdDZxrTaZuEJjDbpnv2ChdytYKNoueqMxWWqhG74WYqUF6X7CzXqPbShhaoJDdWvXmj3nKQ91vgd3",
  "key26": "3kBbQVzsrfoxLGDfZ5QoJhCE8b5hxgZU7WiX9uGKrGazpdXjDS1Azs2Rjqg8f2xDtJE5qvtap5ZjwsYKWNNYCpVW",
  "key27": "3ZrVuBJJXEcXVP2eLADCcmYf6rUpYbbkEybBexCM2QpnS73VuPrse9GpVpQs442HcvZxe52EReZAu4xc6xcnhmMd",
  "key28": "5EDJbecCWMNLdYQmCBPwsJdhR5R6hjp4rWQsvTqWErHGXKyJTBnFrQqgvf1uo5zXZPXw5dtW7ohGu8JJjkwKHAV1",
  "key29": "2HMUUtfUcog21efMXdJUoWTQbZpjhwPPTn67bnBEcSPjKZegMniyzHmXSAPCekTF1t4ezbzebSajv2CDZb7mjPfy",
  "key30": "41Uh3YxAUtZrRRNH9v3561pennAbcbF7afype8z3oHbwAhx1aL9TecQsinKkp8bK4iJhTXyq3peo13YcB9c19d89",
  "key31": "4FLoAKrHUcVpjvcZCzevQqkYDXjMtViYA88jFHMudbyEoBF6LckX2uLqJxWKDofJtrprHLx4HotgAmu8vWwyykgz"
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
