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
    "44B9LNasUnhNb2ks3fgfZmuFJwz12qAPHumeT7a2ofD8CTBfNYLswFPFRqzDGSFdarXbksBpsngHkpqtkU3FmYTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FnVAwamMY8bKEykLtuf7UFqzeoFs5g6sdWVKuav7JrVo1GjW5HJL6om7i3uFYPW4KysTZzGnFNx5YMBMnuhCFqw",
  "key1": "eRvBxYqRjmiJPqQ8MVrFTHaD58FYbsAwW2EtFcc4Aa9UPgubjMJDbjwe7stiYcVW9ziVCz6D2Hn7RFj3tzyur8j",
  "key2": "5yFkDMNCXR3adXSatrrEotsEhPstjQZSBAaaGCze27wpUXw3qkoDYTF9QGa6MqyJNMxfb7SPEZa6qUAosXznvhqN",
  "key3": "nHQtBGLjkBzCGNAq2FQZYfkj7trBgn9Ldzt2BpdPv6Sv1dtqSg5KzjF86YUjACNzEm4c6ogP2o3jXeUXyJjsVpn",
  "key4": "GMwL56yzNDkgaM7uYmSwa5vimrQeGPAPAunzRo7RLqxFrvnemCbi3ywBfbfgkk1p2bdAE1aRDkYGFcHsT4Gam3q",
  "key5": "4hN6RWoXkkHrESXNdHLXqc9Q65LG5dChEThkFWc6ugxgp4gtbhJorYN6AZLLLnrpQ4PhBwxU99gFxtMtJBYqXg9w",
  "key6": "2dpGdR3p8NVWsUBi54xBGWVLAM1oc95xQ19NsjFzd38fPdz4WnX1vg1cSiuLcHBZoevJL2nNcFzHqhBGKQukKWFL",
  "key7": "fcgN3qGXALxsLVZ3vHExxQQz8KenHvjef8NraqdmLpm9vTFQLxsNjTHhEPWN1seAgmYkr6gvc6rXD1qDNdsgRg8",
  "key8": "2Njbf7ggYrGJ1XGc6JTfhFL2g8RrsdrUSai6uW5hL2vvjMeVGMSjrCjACR2HQwpQJZgTKtegpAUdntkAnTr7AEhJ",
  "key9": "vQTr59uqBmibFPa1DVez2oTiWtchEVzW8cMoec8GFm2k9GBKFoJy1V9gfZtLubVHWPvkqntfsdAhoYV1xHxKX1Q",
  "key10": "oEnfm9pNRyfjikre3TTng9KeVuR3PgMxGLGAAWbM9NnG8PPP9bHLX63gLPzKiLTYsJhjGRJpVVZGvPCKn8AQrfz",
  "key11": "4Pk8jSWs7HFtGUfmND6Y5fyHnt6BRRq2LS8vHFVZmsTiaoahmhmj7p8KFDLy6wLB52L4tyhLmgHAn8H6CAQRVWZv",
  "key12": "5RkfuEX4wiNwRQ6sgd8NXAMN4SKz9q5nRwNyFSnuhr3Unr7SqFUSRMnbduvz3HYNZ9U7F6y24hrS6DmoMQtdBivV",
  "key13": "3ZqekX82oXopE3yTAcfSFPJjMswSovdrNGxkX5tuLCU2aMsMnx78tbty8miZ1eHjuhPLZykm4bqdxcK4yUUhZXcW",
  "key14": "4nyeE6w6K9xW3GD2oGYMENptcnZMrD4Vhnym323sYgYVdio4CH1GvsqL8rwffbMYEMCqFw47d7PPLf8MpzgU5zQ8",
  "key15": "5rkRYH4BGdpLcWtwPXQ96kfPiAFCKaDc3aj7KnsC1jj5NQAxBbENrT71N3GfLnSxStXQXVSfdMthN8JybroFjLiJ",
  "key16": "4TcCjpjStj6MCdWzKbqSyR92iSj6EY1phraJ4hWNuLBGV4qctyRiUj5sKdsFBPHtHxdHREr82ug3c4oGJk1pE4sG",
  "key17": "21WSvgSPrs5gFuWjsw152tNBDTHSwo6LSMMmo4EPgG2Sx43eLmsctGm24ZJ8H7kD2Gv435bR4MhHt2zHyf4qxduF",
  "key18": "VSmnbRLuZbMHNWh4JKvSB5XjLrbReH5qy3VbuGGenEyNgKUNKyVdaGBM53fqVRsvcbbxNAprRcyfpJR7VufK3EB",
  "key19": "2HGpDzUsx8G6qh8Xf3adV7wh35HL9ZdMEUCe5v1RD5Va6RYhB26TxdVxtyVQNbv5tHTbRi4cSXhCKJwmuauJ655Z",
  "key20": "7ZLrbvGes9EtgQdXWyKGvxghnVzmPmYNPMPwHx2DGBEPDLyoM1if3mXAH7TiybxmRxBLTQMdbKXSWgKBxGGgK5c",
  "key21": "3JVwRJGVNNKuZZBvDUtBrAhFQGjXueeJt2xDjRQ5wLGzM44rT3mDYXi1X9GL8nYRpwm8qUtuvQcaoY3T4VaE3KZ4",
  "key22": "4MB9fQqHRDZpXm6D84NkNSgwWpY4CAWbX1n14B5J9CqEg7or3qXWjR4NSXPsWmQSZJE1XWbwzyVwQyYoznBQUMJ8",
  "key23": "4js27mAqyNxqELJzcsyczW5Svpq7BdbcTzP3vnrDmEuaP9RxXNGS448jokYsi9BU4ZpgKTs6ttrrPaRpAXJXM4y1",
  "key24": "3FGVYRfoGyqEuUX1KAFWoPTtwRUhTqvNjfm166akwuaKFwLvEYV7TrG2J7xkbxupZhwWmCyAk4DZj8mxPWkpsPCH",
  "key25": "38YxsTCjQkyUVcLRtDXGiRoBN6PwJiA3W3rSXS3wf67XRdUFXf5wrsf7D7S5henAjpXodvG3CDQAD7CPDwLj8pP2",
  "key26": "3gF1V6kj7exJLHTrko5bLiTorULsFHcJMuaYZQ9KmwAF99EDQxkgGgzSL9oCy47hreew7oSdKYiMRdPwo4oA1kdA",
  "key27": "2RV3mVLFxQ3VjEbn91eD17U1gux3SBDf112UQ9K5M4K1wmrZbK2ziPadWQpwZBzU6Kp4q6xvDzUfVZnnZiUFA8Gb",
  "key28": "3MyV1jNcU6mHAMSMBxrFbh67ZiQFxNZRsrKrAEXTurB2678tqs9ZMtRj6jBnfowtCcZRyDub43XwqNreW4vYTUax",
  "key29": "a4DzmEB8gX5bS32eC4gY3ef3dBeEk9iChASftcbARcJ6fZiEkXL2qVE97ywVYt2m38TZiTMYNh4eXmeszwUHt6E",
  "key30": "4WhervUahHvBk5iKVZzCwwArvZBdCA76eM69KbfXZmzGi13PSq5GHSa6XwH5JQehwXsz9jBADBnzEAwTdgxT3iyb",
  "key31": "op9VpZgNN72L4d1EnWrqgcMhW2kcduBm2uYoqGQ3XTmmcvVfmZZdHG3siQjmQMEvsGxpYfiVmQD9vqA7HBzVo1Z",
  "key32": "eKgiStAs5TqkMvftaAwjBapwUEhAjvqWeYouTG1a2FESdsk6RLF2Z67FZ6SYYCFHNmf9c1hKnYTwjartKsoi7hT",
  "key33": "2TN9yqEAGigAbCFBQ1rUvChUoR6chP7HNmq7YF6izUi8QM6BED9eJ9FNr4vRNXhtWdVXpAA2Eu42KSSuTgRAeDG",
  "key34": "svNARrPhmzKR2Tk6ZzVtL23VJecKqKCPCjtnzeVnqeTuuNkaF4khn7ZL8rzgK8H4wZRUdqyErLsUEYq4jSmk1UW",
  "key35": "3Y27FsWJyAoffFStsiknA5d9zJkg856XWjVo1MRxn1EHerwyuxxgBdvmgLCAd9cRugCQ1fgTdQEGs8BHm8HSP9TX",
  "key36": "4nCJRjoLQCkTHVx8ouFXfu3Unq1BNgkBRamJkJH3aF9XPDbqCKCeJ1ToBqNe5ruqqBJFhdpz25QznmvFPYakQiUt",
  "key37": "4SreFrnT2F5biQNvrNs7CjF3CuUu7pLCtyH2Ns5H9ADJDsstpPB4x1JKDNJExdE3iZJBJqCkonJwxadt6VjTcs2v",
  "key38": "5fh6QaXCGUL4HL39VQCQZUHgcWekbWddvnfxbxgDFAkJAcLe68Ht5ez4VE5Kv674o7nvnFiBd6WfjYi6ziN6qVMk",
  "key39": "2fpPC6LZU7hPupSN1CR6MQfjvZ7ArRmNg9jZycWHmCsw14NWGJASBeRk6NYM6ScWR9dGVpuVzYERzoyhqk442fbv",
  "key40": "3CEJWk7xTkJ958rsxzdWmwQvGYwFxd1W48Q2BvViR547WyvvY7xSbgHKkY6NzfZQpurAnyWEHUgo13oqWbm16f9Q",
  "key41": "5KVxhqyVhpSYURMthMs4sQMdio33sXobTLy8apEXNPRZ9qThoa5PZZuUaUM9bAmPpWKkRsb2KihAZiLiJjqiWA2K",
  "key42": "qBXaktzn5qz4sh56nVSviziLSzhBryzMaR2idgdV5YPhyTnq9C185bBWVgMPtGoN5VHAnXQSMLnY6cjNcihWp4A",
  "key43": "5sMWock6hT7EL2Wn1n3r5RenV4Npj8iaLbHqqKnGJ2YgTNQvEKr4g9QV8arhaFj5ZHz8uk3JeXxn39aUUUXWR7sx",
  "key44": "5oNDXr23iez1PXvwj98U89kkukqXttMDGN5esqYEb7bFkAQCiBPN19pVqugVCHNvCZPunKESqgSBzHUYob8Aadms"
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
