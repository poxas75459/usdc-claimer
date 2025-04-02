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
    "2Vqxht1ZiHn1VHBEdUJwj5H8uttbKEtjnC3jkJkg3g2VmZN3drwD83ge72M28zqXNgnBa1M2S8XAxXDUXWhkuhXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bGd4skFzH2XxCn7yMtJvbaoUFDPc8Qd4y4pXvfmRXWqbSSHEvqaHtuvFiExq1rW1Gmj3K6YvvEeatptxn5PPg5j",
  "key1": "2nCwQtLajaa4Uo826iK2i21XFaBU3CCG8ntZQvznPmdUhdoZNKt9JhkU5jEuGY4bHeqQukcE7KjvbyJWyRt2QjDE",
  "key2": "2kRxDuLsbr4W8zix4eJdYsumZxiVFVEoS7tfhcTCDt4REaoRw4uL1Pj92F8o5uSs1tUKun5FvudHyxvd7r3ZF2aC",
  "key3": "J4SgMy3q5RvSH8t9cMuYRSC7Mt7hHkzUdtUFvBCrwDuPHzacWaYQ3M72FzsB1rqxLq3hdMZFjfJTPogZMfL1dW8",
  "key4": "51yrpyhsnfKAFVBcXkz6gfHmH4zokWHP9Y94Wy5KYyZBf5sfoYVboc7YLd2WW3WimHRXyBeUzndX2KKuoTQJnNN9",
  "key5": "2uNyBmwf6WETaPSBRyT5Fr4QVjUFDM5GZR7GF2LNjzpSqAWJQF1p11tSmWw47b8uGJMJULeGAUFhdiDFDBnVdprc",
  "key6": "4zBwVgRnDeekUskmCj4gKcx1VQa3bNNkT4RB3tDW49zaFCNmBwhDL2J2UavHG5RFAhEb2bzTU41ez1K7LHCsL6vp",
  "key7": "63JQeStbjYNLBcAC4mA6336VqXSmpwHbnwmLgYqP787B7tSYsNSVa111gXvBBQ6nETRus3xfPDnSVapEa9bgwpNz",
  "key8": "4eXAUsyCSuWqfd8Mq7rfGg1NjwERbQ9YtYD8GNjiJtTaQmVNKag1N1bRu4fyLYBsMmZiA6BjURTPQ2DXSVvhxxbT",
  "key9": "7xhjZW7neLdnDgbBt6nRWW9QuwZTjvUuDP1LqbmKPS1zhpMyBQTS6T7CCh1LgwYq8mLcgP7sLUGH2LheZ61bXru",
  "key10": "4sHTaG1iqLHxaNjm68fLf6CFmPTr247zzJ1LWy76AZrxSTecJFpB28T1jmaYfWVR5v4AQGf4L1ZLyDTc3NVAWoUW",
  "key11": "41bJpkqVgMAwP36F6XEz3sWTf6GCz53QrvDtPshz3FVXQ1BN1p7D1jco1yBrftRUCyNeuqpkLAEw7g2haFELKvg7",
  "key12": "2YAHfdqqCS8kUCDkWXHnZfTLMMdHXUCfFch1CcCdnLf5erHR7dULp7rDe3PuwzsFUqHBjSeM9QJjNYvXtamLw2Uq",
  "key13": "5nrSsiLYHWbVw1uLVrf7nXoYPbvNomG6PbB3e7v33SMeRjxWKHmvTkfJAnppm7Uxio9HfkCd3Q6aboq3zJecm79i",
  "key14": "2Zjm9uSbRxvw9FDXonA7LHTK9Y9CgnqFCZnG3wwpMXJS1q9M3rA6mrSTWXRZD2DKfjQCaUv4tW8fmS282yGejwfr",
  "key15": "5Q728G1Afr5byh8qV4nTUXZHoZBgWtkeQDe2scPBaSmTMR5yESe1jbESDMAnfnnQNvCQWj2NWdzwYTnfitaKRnGu",
  "key16": "By1xwVZojYV4CP4MAd2R6bpXntynJB6nNytiDaZZwJGyZuaYZC4J28pxJmZ9kFQCAV1yPxbYrjjEQUkfJX4qh13",
  "key17": "47ucyypJAL2uQWRbnqS9fDQN92tcSam8gym1zaM8RQypj4qfnopG4N5ts6Cwj6idRApqsxTCunrWbiywXrHp5zRw",
  "key18": "4S49tNxL9TnCR7jQR8XU7o8JxwcwjsjephKxEJZSx326jFnBgbavPLYP7iD8reXMhqYrDg7TALXFrUG1DebjvBXQ",
  "key19": "4tcXBs1sq12nqK6A2jBSFwfcbWhFJcAdK2HWXzT7noxFjLRcLHK3BUdmaNFa2XQWJsHpXjAnKYC6QVgpkTyG4Gp5",
  "key20": "4Hh1GPECPbHTVFRtKVXCDDYP4BmXnDbVf9otPWKDRHsPVQSE3dx3ErT1rWs6MxxRWXMy4JR2JkYHC3ifvjQFeNSL",
  "key21": "2qVn61hPf4MCwz5XZL2sJHddYg6rGBdf6nRYZM2WHhMEaEJup6o74UTY1yAHW5fx2DzTe1oTGt7ci4yLdVg664tf",
  "key22": "zRoYNeNyMZLn3amDYkUzQBXHottrybxm33hX91YdC89XDSPWUfsnA3ViEevtFe4Nd4cre6eg5LkNrzVPTNPEi9C",
  "key23": "4CDBGj3o6ieaXaLjsfKpzVj7bcunkJNXPjxh6PFaoanBSS8WSfmng9C5j21PhMMNFodJsCxsMBssDrhuWLFYthux",
  "key24": "3X3wLLfsiwzPsj8mDJHv8FFtXUBbrP4DACxs51hKGuiJoehMEzdhRvcakdAEJx9NQVFmLRCqpUUiREkkjnxGucJF",
  "key25": "2fV3WUSNEXy5zBdY1mZCvAJ4aYsTUasuD2NT7232nYEFEd9cX6iXGjAQNtJPiuefD55P2n3aVgHe8Uahe1o34n5t",
  "key26": "rmcQyqs3KFvhQHxfExKFdrcTZsZ3znb4bngE3AyK3eHJxSHu1sLSEVg2vWwp5kmxXvaGzf2zYHEMEGUqfUnV95Z",
  "key27": "2oZZ4dgTw3cjReAtZmwgjLk8fHC5UEmofkMZ4FXqeAKdsMgVA55mmdAfA5UNJ6RebbqGU7djEVsRpzW5dqqB1TCs",
  "key28": "4A6ziVTTf5fGoZKvEqRApCw4FyQpRKTJ2ceEkLBfswDmQDRj7Yxo4L6kxq8Cdoh8F7edBQ4Gy3JypsYjWWqihHce",
  "key29": "LC7bX5Z3TgGYhG273zEgetc6Gh74fp1bhRaRayrDPFs4yfe9mDJ3M1aDz8zRgDfzEDvtx83LsZaGsMYRF4kCwXT",
  "key30": "kqXJv8RD1bpkdEZS24PuVVRDQuN65AYwAkmCByS6U6UvWuSKHfo7UKE4MrthLZP8DwFv4tWqLc1gG9HnXP9tqmA",
  "key31": "2wCjEem3hsAgBZfUozUxT433MUCQHzP17KA4cSjdLVw3EZ1LFZGYUMQ9FAe4jo7VqweamyFSTJrU6AAwDjjQXmdG",
  "key32": "4jmrTRXBMeipKmL6jHXHvQQkJu1883S1SYZjbTgcd3aKw8daiua5EFRpAvRcYs3U7XU3ttMYwT8dC6zEdnpRCQCz",
  "key33": "8BT8gwVcPXdFmBnqgFfFfZJAgdpsxB2sM3t1zAJ7g4fV1rFWtDHwPk5rSqa9WY2M4j5kBfGhNN6K2rTHiw1Xkbk",
  "key34": "3wTudFNyeLorAsujAeuUuqdAPYUPaeNq1VeaR6WFm6tCHxGEwHgasMGzJqJxpMCkFSwZSabJGmHWgcyFAr8ZbCp7",
  "key35": "4WgSH3qVEPxUB6BE4WRZeimVuaNac8QUM5Wkhe8ecYaREJzjgr4vKAbYvv8TS4Z5kguo37eZGwQ97pcBr6NdUVdC",
  "key36": "2W9kVxYGCK8NQjYi6iEzbvdhCnfs3ZZgp9d9qq68vjqdmy7C9dncEkf5DEDFnBgapx246p1jkeZ9VoRpMRFfyGeC",
  "key37": "3KhUjV5BUCpxNVtZKKwWhP8261Bk8CmBmZHz6seRA6zRUGravbXc14UzKiNcPpUrbVbu78o7AFhJ4Kx2t3iECyug",
  "key38": "211qe4VZpakMUm9vhtZUQntH8bXGjnojvwxfoa7cCuuMyvKhhN7xh52VyndVAM5gng4BrzCZ3qUaCVsTaaBrj3Z1",
  "key39": "QXf5bDvbp42WdyWCycQNinPpPBxArUuUiAQDxfpntcvz527gwpGABZzGrpzUaQ93QT5Qdj51yzJ2xCwRGsk3rhJ",
  "key40": "4BHibEPmKcVfSUHu2NY8qNq75HJz79GRBHfE1Stc74faccEy4z9MZgoKYQMSeoqt8yyNZT8kGG8C96MJgTi93daM",
  "key41": "5Z17xHtWJ6vmDfJHDDzd1nZMS1AkA7EWQPmrj86uHaQN3qHuSXtsA5XzvAcgbR6gHHV8w36bAUhMbFBcPnBtxKpD",
  "key42": "6fTnpzGmt1QeUxauGPq97fJyKFdUhsoSRYGMRkhAQpYUaH1b1Z8EuAMEYJb4zPvekvNgcQsRoAPdPkEJZbmT3mZ",
  "key43": "3tuTpewmpa71sLVrmmHjNkwPCcGgxmTWJqS8Kp2CqcB442V1wLF93Nr2uFyuggNDPFabpgEiLxswH7AHmqmWp88Y",
  "key44": "4okRRtX3LN61RdbnXfU2ena9e1pSx295AP2Acs8j2BjiWFVMY3wTS5iNqk7A8rTfbJM5nrvQdnJeA3GzC8qwBqng",
  "key45": "rP4emNPV1TZsQ9hH6rveeMob1wfx3dWaYKa3SRxpkNre5SHHg8UKcCmPcMSf6pPhKo7wDXv25rnHwzXZ9zXknB5",
  "key46": "5wRfhbT7f3J1n5C2PHXPQmsEm46nDTNpuRwCGoDXeEsXpzUzWcocGmzHTsq64UPuwRgbdWiSKeLdNZpsa9UGtdbD",
  "key47": "RaFzcccyJmmaCJAfiC4iWaPnFDnoSKxwS1uKKZ2vysVq5vn6haFAn9wnCmW9MH7d3scQrau7nxLRB1V9a5cgVqY",
  "key48": "4H5a2197Q4s2tQ6hgTPAkN7x81DwbwW87v8vy41j2L7UnYC3Br7CN3q5eu7n1qmRbZZaXZSwk7N4fN4bX2tXSKkP"
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
