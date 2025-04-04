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
    "2ruBtPaYatkF9xPuhDr3fuD8WxrjrnzfN1XdWqKVbkZixwgot6UWAP7RCyJ5hkhJJQAuAhAfcDarhLEEMSqpsRrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eXZNW4cDLdxgm93gUXkteXurTMMeZPpZT9Tf94M6pVXxyzXqvX3GXk9igNQQCmFqunYLSySTPHAC7NxNWfp7ydZ",
  "key1": "5LzKttqUdpEZSVMgzz4FTaezqMWDkjoFS83KkLWjxnrQSywGtPYVemnrRkk9rB5unb8mpfmA2mV9Tib7tunEzBGg",
  "key2": "26ZmXJCnhC7NeA7VQeo5wZPf8Pksv9xpsr5ZEL6LexpgLzEfCM18u1faNaq471wVtGFqTV8aZquBiMPdf3F74Mwj",
  "key3": "3bcqQ6i6yJJsVf9qxwANHuvdMG4AcJ8TR2hHY5UvZMrA6yco3UrF6EQ7GMia2C4zQp6Mujgc5ApRQgxU99xrkHkm",
  "key4": "2ZxWTpen6BA6DtKoptat7WGW5YmXU1zP2K9PKcxRERXCGvzbdtQL7zBBNojuUFLjW2P92MPYVFRLZ1qZH49dK8LK",
  "key5": "4NUZo4MyfhsPFStxdnTRw4eR96geN7RmiZXSf1sUbphD5w98PRqjd2EGw9tEHr49p9SA72ACkGjfGbpDiJZf9MPa",
  "key6": "K4ZYuBgqF7ZsrxjRW3N1BwCfput1H6yh6a76YMHujGb9JYv2o1LRGY95iXRGx9JxtZzaT8tYoaxdMcTSYvDiZUZ",
  "key7": "28Vfofw9X7TJhtN9TD3fttNu3uGeKHeBJLFVQXchp12HV5fSj8R7u7TpGzF6KeTTAFeUSt7SpHup7G7nkiB1ScDD",
  "key8": "61BoyJqb6mZh7BzqVGK6VpLF24sMcxYs6idxZGhf6cENVqKGv4H5TkkvJenBH2MKY3pxK4Q5zKvBGaEkFVjFWEEd",
  "key9": "QWZC4xLjKsseYxS8i1JPCMWEJhXvMrXWnSH6Mdj1au3bBrQyncFBXNDeF9YFbQ86jRgDCaJf2ZGbpENLCXBXMW7",
  "key10": "iN7P11WZYMdjV43x44takfUj8PjeRBx5dwjvKd9SYY5MC4f3eg2Jyqkj4ACDSQ57EeWQsZnXHj2SVZGCvhcKafH",
  "key11": "3P66McAxdLEPvn4NoewA4oXeKHAiX3ux6ZUZKoC21W544T64uUtw4f6xM7hEAyyEnYsTcAG8cbodyZ2ZQTXJnXo1",
  "key12": "5YXAGgJgk5zmjeBbUSqvLTwPd3a8HT1hd7fdQK1vMSWkH9KzEoiXtygVu9XfR1T8sa3DR8jsGaNc4nR4dABKgcTc",
  "key13": "zEqWYJF7xGVnmixSPsYsP3XAVfef3FPHHLJhhWzcQg2x46MX9fPyXrB2jEVFtz5A8xd4Snr9tbMWn4kABVE5eeX",
  "key14": "5MsjP2y72kCV7CHuqSQz238u7gJJ8WUob2xEJKE4FwUzufTGbgnezAxXwBW7kzAspZKCVG3pnRT5hg8vsxF3zE2n",
  "key15": "28aLqqzYXc3NAyT72Utm5CZBF5V557i6S3aPFh2Xim58eWGDs7NzPcK3QR5i78aqJnDGvD6EX8H1dbP4xL1sAKdU",
  "key16": "3om3yuDugVbpwmjuktt3q6KeAC4c3NjgLk8gbderJo1XX3tw2WxWfdiG2n6aRXrpEQrk5Xj64NdiGn9WyupJZZNW",
  "key17": "4gYMaJY5w5HhJ7uPDg187ijkXoiziYVj17coxaT5eyqSzz3UcFwEoprLDLo2jf3X3VpmWQghsCE85LtmoAHEv3bC",
  "key18": "2N4SWkDodatXBc1FZ7z5YLBWWME1Zg9S3Z3t4cgqc27GRztRUozNAXr6BGMpTtnG3whQU7fyEVT2PfaGzXnhHN4r",
  "key19": "ByR9kEv6UFTMSegtumM5h7anCEE2db5w2TBKsx2hceq17ZDqZsPLF4atpxDiWiC6j4zWp5iMs6G4TdjTeEjf4ge",
  "key20": "3yKT8ju6xYB63mjiKHcPVKyGh16pn2kLBoLxr6t8xAUJDa855GG1YJRcx39VWxkF6K78zQwGdRC71MAT2NWmuXx1",
  "key21": "4zV3VnbkTHDDkuoJV3jRiQxyYhaVUF1jqtKiu1hcqbHPTdCWuABbH5WHvcJNrSWGVBLp6hnpBgyyjfaf2wKcvSyS",
  "key22": "5iZ1UNuEgjpvp77BRwT4uj9iqG4zUH9kZ5xEvA8VVfR4q9nk6uqo3bxyX9CnAvZAcVDmAGo19KbVxMZDHAtbPwAb",
  "key23": "51MbQs6GEmhZqe3JjkFDXR25PEANU1ChfhavVpARoaymgyNCxdwJNBdZ5jfrc8ApHx3TnkUbdYb2NzZgH6CGZxTC",
  "key24": "3f1kZA353FrGTJyc6aRjRejk6pZxZuCSwAdTnWtYeDkuNKVL4v1aomRJYZnvatmK138MB5Nq1S4XMUCvAkLFHcEK",
  "key25": "3DLkPCxxEiB4Hq6KhUphjK9Rh8RHmJA8WasxbvmJFd3RQwQQdguPbN5ca48TQehkbBCSWCNMkAn9cx3ejYS1LLfX",
  "key26": "45pw6x6tPf14ga3zLRo7C2WvELCRWXTFUkhBCF5XKQTJPmBHyk3N6ZBsLuFKPv1azwRMsbUfHXV4QgVurhihKokF",
  "key27": "52cZc7yPmogJB9JUxFumxnHTMrXeQjof9THBXSPySHHeaQ5CK3afruidh3ZCGWhid1avpZg2ujFqKpRrqVR25F9k",
  "key28": "2c9saPXQTvsxLYGhrVcsqZ7KQcCa3qYQJwxwmEpMh1BTA6qM7jSQwZT4nCe8H2Wg3spf2wcNG7vWBTBdjtsWJgsy",
  "key29": "4jeW8WcS297T87zWiVTR7PcnCSFMQQUgayfojhEP6ikeh5gMpQTyxwExBR8v4Hy25c7787m8R8BKshYGdEj2PACn",
  "key30": "3ufrqKs9q959FWFy46R7CENhpjLu449gBmFN6eRLCpKGNe1zwEbntxns4TLfj1yu25ZVExeUy3vKtTSwFUp7v6Gc",
  "key31": "2WyJ7kuimAvhtpgVMuV9EVjgRszfAP6gtVsMk4ZwRzvw3Xc37moMAHm8Hh7285BCxQ2GMpz7a1QeTtiNsjN3JnnT",
  "key32": "2mMt8kG4t1sBb1QcTSLgjg5TzXaFY6eauRWddejk6363zGme1kNmfhxz2Mk9Z4GWxcDV49dGfJ76w8b1qss1AVkR",
  "key33": "4Wqj2G5yfpdRA7TSJBQ9z9LKypVkTBgJvwCaFQjqrj3vPDBHYfDxdtRgKeWrdHMoNMuGVntdztpanM1KChp4JPgX",
  "key34": "5j6bAMnzx9YTA8yMAZvFSxBG3TS5Ud8fsc21FVaEi9kEAFPFAPTLqrUSMdcSdkH5oZzo4JTXeJMkD8Nr2YmeZC9k",
  "key35": "4Zxmj5aAE3MqPWN84ceQUzLHVJT8a9yt3pdswPKLibrp4PJq9iPfd9ipvXXWLxFrt3K8TT5Y737bk2uV4rMGHDZY",
  "key36": "dhc8YCVhYgJ5tzAPRibeQaRGQn76eU3TpBzfWEg2V34XPVzunk79NQgP5nXUPXPft1e7ANXnNaBAsNd137iMxPD",
  "key37": "2NpoG7pDXjyx8QP6dsiFA1TxDtyKo6mQhD1zdqpJxnxPBjSkKj1ZKsVHvJgLCrdzjeeEunXFgxcXperncDQRiaC2",
  "key38": "r5Esz174DTpNJS2f5Y2g2WXvsgndkM3emFXJrMEtQfbgxu5Phf6nfTyfKzmmtR5muxZL6sMocekCxnZy5veGuEX",
  "key39": "3VryWag8QZuRNFmmMd3Bdc2kgDATasDX6zqvBJYim5afRdzP2P9aKrsZexuNM3dp1Vtdg6XSb6qXBpbHz3D8Luwq",
  "key40": "5vBMsWzG714fWp52PLKYqFVmEUDkDm27bXjNUa2Zg3AojNmuUKET7R7hUuvZ5ktYLcP4aUHJ2Zh2HhMU8aDZHinx"
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
