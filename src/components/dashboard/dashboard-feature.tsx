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
    "5PfZVUZSsaMYDYwTNFS3AQ57kmqwMvvq8LzPxmC9mpVpai73YHThpbTj3ESUnP7rhz75PFPKjXKkRUPkd2oWdDSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mRwjxBkHnwWrcjKWvR4WB2wY3esMYHQ811v5evugHqRXd1Kk9UMTKexdQLKExJwUbFcwByfaxNMN8Seteu5gmXg",
  "key1": "4z8m1GVqRKU6xrLZxnN216ATqfNgqB2rSHse2BbyaJ4HhmrCPMYYBvRFXDxbbAUbac6DXd5vA8mah9Yzi5HLSdbt",
  "key2": "24nCQoxkyxA1E27ds4SgBagjymdUZSMx2jvF1Em463Azdtx5qhTaYDmq6UgGqTbifMroJvYCGYRS7wwbzxo8cCiK",
  "key3": "4bujuumTjeUgK6Vo2UqrKqSr5THgQoAEXXtE1gW4xbozrFirqNnshLN8JQmnYjEWnnPg971s9kpmP75qWQecPCb2",
  "key4": "4EeEueus8JebU6u6E26Uz1HSBWgi7dMpRpyHKyGdJfYzCrhaBqpbHzAnpRfQ3MwzGKDy6LMtKx48LNtxkp91vNhf",
  "key5": "4BtC5PbG55KnzqNh6whEiCKt6XrjB9rJQyRs55DdDnobjiHjoPdACgK6smtyATUDeryfr4u52L43jF46G7nciw3i",
  "key6": "94BgoJwAHoYEvHEyadtmUN7HTbLaxKBo7GyBEQN3w77jvYkk5Kv9uJU1ch6vXj1VZ2wfFzGko8ZQhG1gUACQyxi",
  "key7": "63Ty6iWh2YZfaciQJhym8sCZWBfQ7QXNntx98desN3bQYpnLWoA3Cfks11yfmVVzT8WdupFPdnJppNNB8L1DqWsU",
  "key8": "4SP9MtZJWVcwXa27Y4Jwp6BT7gBGUBkFqfiJ1hR4izxMbYYJK6qX3j3J9MQvb6aouG63UGgX5WyTR9Saf8NMvCch",
  "key9": "3eDbnemknjzAwf9KejPUP5ggUUiaxt7tAkACG13bTaWt6aPvtXdWnYMPyfWpdKZXBZpMbQ6kehiEMZ7zF55Zbmac",
  "key10": "5HRtfBJ44QzGMLZ7LmbdNaztp7djWzbpWwHnzVRm49RhzbaG2QvyUJobBRoq5RrwZcYiaFeDWnqQc7PFjiGvNYmH",
  "key11": "33e4jY6qUddnCwVxzxLkYaitducRa31WnUK3VicwWxgk5jbMZYu1dKxutm4EM5Ct55RWCx44wLAmgSvojHJn6ubi",
  "key12": "4VwiQKjvCunXX1UvZJSN4DapJJCypbCYjKo9bzw4nGgNv7a2cLG4ZJnrAEAjJa6rSzb1QSXwFauLR3XdvWwTFBSS",
  "key13": "2dvEZyoukKBXnMvpMVyJcVJiAY56cq27tU4uVk5EeK58rZqxnXdiT4HgkCbcgWPgfV4v3j5Ks1d1WqnfLm7c7cEY",
  "key14": "3U3fCmZjcLGtH3ww8xYjSAeJiYazoXC57f1BLPUL35wqdtFrmSzKWGsxjfH7doSm6j9Pbn2LJYye7vYeTBiDevu1",
  "key15": "5tZ3CQvsRs1HRj2VMKY5e3A3zNgqVYVBCgfYXvBz9GvvX4huckrL2gaCcJFMb4M3MgL4ZrmwUABWdJaGHM2J2cX2",
  "key16": "2LK2iFbNK1URDEzpeTMwNmarmsDz9DLUmRJpQr8uNe4Gvghe6r6p1tF2HJeK7egyzNtBFUMZVPFCXSWXT9CDPDPU",
  "key17": "4gixTMZYoU6JLEhTtfAHXP4iU3zRrez2bgJH4wzXyoeCw53Gd26EzDoM9xc8pS61hqtpi7tanTvfD7LyuVipgzxS",
  "key18": "3sGM78q4QgaArkFEYftRGqCKDyNJNGrvLx1Fu7YYkXd6E64reVAMVeKEtv8P8egTgKojwYeraTJP86cejUxUtDBR",
  "key19": "y5S3jhWcL69HXfvjziXzqzoiewePGGk8nZpqv8QqhncBkJez1B3PhtSnACVi9gfW7m2ENp6imagkQbT2ztwtwcG",
  "key20": "2AHDZ5dWzx6ia7ui5KQYPWaCJeYvzigMDu3e4yvLCAu6L3R4M2HQ6K3kVxtf1c8jPxZEqYKfYayZYznrhS7KVQvd",
  "key21": "2223xmfxs5no6TcybLJ8GVfrk3sDP8dY9LzBCREMQRiazvu2bXhQRxoU3X2G2PV2QVViJcjUVHkMRDc31iphjAad",
  "key22": "k259PqmfiZsKnh1ChihQ9Zo8m7U347s2sotdfTsw6iwRwQzUysRi3UM7BzXu3FZPpcKzTTgtboPXVzKUQ5pd1Su",
  "key23": "ZUGhkpXZ8MmzcYLUDpzjeYhhEvGg9C5ULCdCtyrTXomXGimwSdfEbe8wvaqQFtLmDc1AYPZ3jHc94hjjXUNw41P",
  "key24": "2LEDE6w7CtjV36JodVeZHNaBWCv9Jq2JAGw7XeY3cJ9sDyWrvbqfS7q4oQ6sYCzZBhBTw5LjndZwb4Z2n1Pt64S6",
  "key25": "489mhd1rL8JCJKLnirjHwSACjyQ6KWfSYQUjFsqY9dERgXz6fsGLvjEVopvJ3h2WjCCjrSTdPbrwTq1dC2XB2AfL",
  "key26": "5gj27qudDUwkMgd68actbqZVnkW3ggFkgXnsMk2dx6GBHHS6LnPEKidHswtKJHipxKwSmYztAf2bRpcsEcZe2VmN",
  "key27": "4Bc61PWn2yLvPYjgdUpHwnQJBdbgKbCmDLiyMCDHsRFbD1cZFsSZ4Czrah8LUnRVDttz2EFAGBmYyF31VDQznwEe",
  "key28": "2BQa2i7PsK9WCyzezymNaHkrRNykRfCBifZVzte6C1UkWDtcpusHpJ7h72GSgTwbQFv9pm146xXV7TWtdw6SA8zV",
  "key29": "2KLhtykP3ueiKAHgfhHa48t2ES8m1ktrzsp6bHrT92hHHMFUHpJCKADKiVNjPkwqE1g2tMHnGSh2SpCLcC9v5zgX",
  "key30": "32a1FbJdfodn19JJZQk4psoLR2ajPHVjiWaBrwfMtao6teWcY799ngMLMxMbXeddnLJkWxf7AjGz712t36spZFe",
  "key31": "625ENqe4uN8NLLcZa1H7Z1ycdCKjktn1agu1XKKEcocLryChzpsQBq3NmqiHRPXQcKpLZjW8ngJe5aX6RkxCmCZM",
  "key32": "41zQra3M1v4LuWzgm8nqsUfH6G3uyGxwmKPnv5xPkFzFf1w31ikc57DojETtkhpwE87jx5dAFhUb4gNtgWuTPFSx",
  "key33": "3D3utBJzQ3qAYY8ZHzuiJYCttVjs7TpZSSRdEDRVmoARPhG8bN3d4K4A1xrRyLau2NMLwUiyqvtmejs8riJQ3Qpg",
  "key34": "5YbX8sE6WGiKdfN4tB7FUE4iwy5TGQ7ANg1kWcGE1SUkWya8wACoc1pTj3KChTtBKfgx6Bn3MSJPwTWvTD2Zq2Lh",
  "key35": "3PDhw7uND75dCZSiMbiTQpXzQrw47buUm7jv6RqmouZssEzGDr45F9n92wJZFG9guRCLKibFWiUhZVXAaTVTvvpe",
  "key36": "3hT2VV8ruDA26RnXqTNRk4BcE85HECigHDxQt3yaVQ4pFMMdoDGvG92iD3y96vrmTFkcU2D7vC48UasXdoWi6JeM",
  "key37": "58pkHPRVz5JGJKNZ1BDMRZBU7Y48xmdxc698APZBrdNvf8E9EWzeeVQdzYc3r8Eu1ASbcHm4mhPXFLAfQVZFWGMs",
  "key38": "4u3yHDF2GvpCqTFaUEjNLhU6rNYJyHvAzjgZQ7SVuyNQeNzicpYPZUaUmuiRNcidCgY1h7NvzR5Jjqq5UXEqYSn4",
  "key39": "4qpWsPUBxm35U892iuK5ton1CmHSzoTePLbfEsbdBicU8JTrUD6sRPtg5oXRTrtvSVhS1jRw82RdPbUxxXRxRTCL",
  "key40": "U8HbbeKjRkDkLJgoxdrrqHTSHRmvN3Z999ZnqiqQH8S9QNVDHAnQ5RtXxSPxSf1cBB5umEvueGtEDJZZjPBrYjv",
  "key41": "2xARKKBhXSEH7n5dqMiffVXXR1zhsYH7rQLTi6ZaCFpM6ZfqGeAcnDvdwdMSVpMsEgWQeGA9L6nruw3iiTr7Z6ad",
  "key42": "34pE7ASSuaNgedskR1dt8U1e9k6C5nx7p7tdxa6DZcJegwtodunTEH2GhdYCtXiA94DFKwhKutsMuWbkp7XBRQwA",
  "key43": "67Q4ukQ3D9WMqxYt3o2ADq7g3b9PNgx3BmJLN464DrYjDjRwuxcfx6e8uGoTdfMR5Bwe33QqbUhiVzoSqAwyePuo",
  "key44": "36NVmPQAcjRyz57cWi6DZd2KXkYHp9GeT27BPu5JnsdBbVwaEEj7cVDp1Axwx9SCWsEDDiujtXt1wuAfa5G1SQGK",
  "key45": "4Rpqpc7qPsz1YsHYUW5rcLZvehiW72DpiqFdVce4wE23rGtEDXFJFXK9mNok6n1BdYXukXdmuUNVgFVtpuB7G8gP",
  "key46": "3mts4nXwGDrLZzZUr2282L3rwURvZ5NmWuAZJtBfy5bVKXUVbULa7UabfPeSFvQtKQGGbGzG1LyhUd2aRHe67131",
  "key47": "4HVdtapcnzjJ1zwb3EiMBbhsBNHPijLRTXA31TS9HrYiY84XKTydd1p5WfaMBBHszgeSYSbcuYyvYnTM8QYN4QzK"
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
