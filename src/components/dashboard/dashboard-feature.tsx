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
    "5d949nVLjTqcYtCu59wQfL6nWcb9rdrNY28zRatZc6LwX7XbULpPKVqdqBrdtgxFHLJc2GTVsoWB7DqqVMfQDouV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AaA8ReSiscsESpD95goDySpUPp2NtR6iZ76F4SCzDcCiHsuy1CoMEAhZq3YdLerd2Ani6keq4PnYYdiFHHZPv8C",
  "key1": "5sfFFZeTK4rJjbKpxzC4rqe1AKQ6AY7fKwsoyZmaEEupdf3URzkBKVqpXdZQvnRfbemphSrhYSnnXNxPqX2tkrYG",
  "key2": "3z6qCEmFWRnTvqSTTDzVPePJXaYCxxUE564azP67y3HUfWbSwZiVRkd8xzBLv7VFVWkmwSrNBmEk4WW4bqLmXFpd",
  "key3": "3TeLkg24chXtxZXyp6yC6H5u5uwrMABgiDb9FCvAcsRvfAaBT7Xb1n4Beydw8w6z26m16jw2iPNP2bGdg4Nyj3Pp",
  "key4": "4uEJbRnZHnyuP6VRcLazvoba1Gsy7bgJdq1qtUpsqyF7Y9CV4XMagPYLGqQYWakPjReuZqaBGgJ9Ahe7UUAwXLhb",
  "key5": "Nr4A6PeNLcqWnsj6nEmWuayJkNJ4Hb9CUgaP6WTZaqx6r2HcHTKk8Qyur4RrEEpDuPrsipUEi8xZ99j2XcZr7TK",
  "key6": "4Zd5TeVS62XuvK4uMUdWQKsA4Xv7tVko6eR4jTSUownK9YzAMbwWeV88A7G7vjdAsq3jCobqrhNnbSPu9QfLxNKF",
  "key7": "5ugQuSMMLkh5UXiLsZEJyy36ooDc3hCqZmLDRfjJLaJjet1M6ZdnFgvYoNd5DQ8DaoHPbFa2VnNkjd1ETpcyfXAL",
  "key8": "5bUx4Nez6jd1q96xfo5Co4kFzigpGSNJvhmnFNppgwFUvMdMR5XvP6wptw1EQaSAUkLH7HQdJo7hUcfgt5jvHUxW",
  "key9": "5WfN7v56qLsS3YcEPTGobAiBRuYmyQ6QhaRhMgWjwvjyRh8JhXbhSADwF9GGpnjd4ABdpaxu852HbBnQmKgPwcFs",
  "key10": "5kHV7MqwAnAA3mvrorXbykCCfXGb7EHqFooJ6dSWgcBN9EAPbpe8r84L9bRzTMCftfyQyF8XX9q8prK59Msx4dqP",
  "key11": "5S2h9RA2aHewSi6BPQ884Zz1Qd5g1V4jmVPBb81xGJQY71W1CbvmkkTJUrVNZrpiQGjTkdSRiJDVbpQsAvqPJDti",
  "key12": "3HRKXgGmvMRwRhy5DBEmTXRZ5FhcuhN4xAW4Fkb958tLkp5fV9pejtA7CYEnNikN9AKEuQHnft8rbhcX4YXPRThg",
  "key13": "2oC5Cr8dYAcMGqqETmA2uyJ3ChJwhFNeKWRtbaWspWPgpJ8KXVszk54VCK2q1v9yjKH9ZoSB7tMszKUKyafGG63m",
  "key14": "3xsdUG2Dxbugft7aCAGcfnnXJqcLatUo917qR6L6eR8gBMVRFyfgCAseXAmaBzb6GGLovWQy53UPg2dHNVFEuk99",
  "key15": "Hfm9CwpaGsB966Bahd1Rm8LC155tgXj7cpnCHTkXBDjnrywCmu9a9AdTSwSYdjwapPZwoQfqeoPQYfc6ZGhVAWi",
  "key16": "4mY6NXguGzSPXyq83JCvi9BRrU2SarkhbKabjW6iKBAXCafwZfJECeX4vhjD4ZC7Ue5qUM6nfH9MPubyqiAZKg5j",
  "key17": "5rLAenVbTzAdmsSRMHBYBkptbXK3dunAoB9QwDWLezofmUDdEu3oBbo6NT6pqh41hzZNBcsaY7G7Woy4g5bfE1hL",
  "key18": "5LeiY1EAZ9TFpjcu2v6XcfmWqT2XQhANYFiGoMTamnhgwMCqJqbyDLwNVHwfo249o13mPj5HrKJUGP7DrKasgiLS",
  "key19": "5iFk6oAt3ReMivUatiFfZ2a7RBB1igfQCqmzgyzDXKnW8qBEHmaed3rBHWmFYixar1vVqBhPrrkpWrxvfWefaAtq",
  "key20": "3gCURH6uvo6nmRe4LXvckyxiFHqXEB5aHTNqwa1TZgxhxgUy1gPty7SLgLEFLXZGCCgaBMYMhpXQAjdNrRgwdQHc",
  "key21": "3CEAhTCvjR5E9mgvwq3ihPemEUt5fk2dwgXuPWifvZJs4Bn5cutA82qvYqFVqKYCDqQTV1QVrMvbtXgDh2YG3ppR",
  "key22": "SuFbkgJ1FN21JLPBLeTwWdSK8Kp4KBV4bZF4t1jJSuFfkb8DxkqJQv1hS8HjhbFGBE2FL2BYrysdQc4VEEyDyEt",
  "key23": "2FjAktULzCe2qBBbZsuheH5DgJ57ZQDow7PvNtgE8KdjbkUeRDyNWkyZ4qVJrrosTp5M3yperLH2MSdGgHQuwycm",
  "key24": "4TeDW7nJc1mofAvoyreZoDRXv3ZdqU7DgCRXoyxeYhJNKcy6Z8pm8kjb3CRkNtzqfDHmQB75mZaedeTdSG4PyfbX",
  "key25": "2JpF1i6KBGNVNHUzdDPMRAqgtezYzD6NdfqK78iJ4gMVqY3dEJnL7QqqSWenqhsu8kLc4p7zZ8SjX2Va3XR6pLTi",
  "key26": "4EmeMWPYLxArqVV9RsuDtHu3F5ZNneQQQSke8o6MQUGg1F3MN8pz4NMhpdDzWJVfDnmBYsbwHvXkXtbNjrUPsZHf",
  "key27": "4FBWoDghCB5rR5b75dsn9knNe8Maw58tH1tgrBSo8cthWJST7PEF3kFBdZXtJhRT1CtDtFq3eqUog1GunkwjUhEQ",
  "key28": "5DJsrA5KivoprMqJfvUiYUwQ4a1MPVrZvvud76eRcVdzmqstkp8v1ezuew1Zw1XJVhFxneq1VVoCxzsSPGAnEPN9",
  "key29": "4bGGvrVyhoVXkyVSz5eSqUgVF72DerTrKEUS6CQ3hJfubHBZZxqueYGQjb6Bb9qr7ZYXZ6CMgY1Zdf7HyC3TL34i",
  "key30": "2nEwf1PFwqcSwfepU3G1nZbPj7Ve62HXjYGADnJXmbtBcFX3tWAYnML931Kc8Mu7k8uByGs5kCMbDKUKmmAwTyUa",
  "key31": "3YAsu9QpQrRKDHn359ZkUNYWWSG3hgSfQGUWL13Pe46M9EVhZtsiiNf9f6iG94fMXq7XFEbm9ECJp1XpLx8ULfJw",
  "key32": "2JYEefy8ovxfkhTMt4tXTjmJYTgPX1Sv3nWkHg1AjChG9WGzgymGLkmqV3kMZ7QNFmYsY4m7yNGros3YHZn1Gqzx",
  "key33": "5PSkLV6o4Crdygqd85zdYSPSmH1j31BDMjD9p9REMup5oebK8JptQV8gvYFT9pyyxvffgTsw3pHVapZVZbBUVph2",
  "key34": "4x4no7qE2cRPDk7EV3gvWu7X4hbFWuB6QHe6tDFZu8aefEmWSRQHqgRHAATgnHphdENc6iWGjVyW2mmtwb2cdgbC",
  "key35": "5vRbTVSvsfzCCRX83uUn2fSL5fAQcZ7zymCYfZPjUfEe5SFJ4tqZjJLxzgrZC3fDWPq88FFqf2x5s33AFq6oeQP7",
  "key36": "2nnHYhmP2VBYtcWESyDDfeJBgD6BhmKtHLAKntZwiAAKCsrZzbdwpXnBaK8an6UUC1nGAkCD1N2Ve2aAhufJ5kNc",
  "key37": "3AZp8Uyu5eG8WjuFcF1yWxV7eMSfYNUtaWh7zKEPNvtJbhniB4yfYKuj1nnxKAafQop1xutdwiv9czcyz4d84yjB",
  "key38": "iatd52miGcDb9Yd3wjJe6XgEyY1bdcFbQrqjrBySN9qwJQSuHJB3oMuEC88bvPRhLS8eVhYXnmYDt8KnroFuqLN",
  "key39": "4ZschesnqTRtBdjSV4cZchz3cm6eanEwGG4HteD8y8NzKuSvwLvCPsBi4JdiTTdPdZ7uj7vW3ViqTWzNjNX82FHE",
  "key40": "5xP16fxuZvXhnx48mXzBuBZcLc2hYAtFsjQ4tDPc8jq8SEptRjKgdtyvEUaBHUU8nF67VDhktAHNBtEG673NoWYA",
  "key41": "4H4nc2GLeLxkzpe2HseYdDAjp5PSAnQa3Ve4AMjUwngPNgCGSZXC22C2G2tEUeXCFsbas3ASQuxhHnDhswCzuV7B",
  "key42": "3dcPqdUFzaywHhroBuecm74MAzDWfSccqxyxMMtdLiH8S1w5ghS6dPRK2imHiBQqN8fmuoQr4AdGpArGH97eJdoL",
  "key43": "2yAK3AtdaTypKERxNMVaAZqUnJ5wH2A8mPmDGn8bfHp5RbLvP5YYvwAkBteq984KB8BeowWXYAvojMzHNHwzyqa3",
  "key44": "39ZMHrPn43ciXp3W3A2mnPKYnhNFTwzNk1nqzxkJM6DVEaT6FgQ2hSHavUgrng4DnrNT4wvbMDzAKyc7sH2JJ4yA",
  "key45": "5Ddhrucpk1u6nUBgdueF4Dg7rJBCM1K37JthhzESGrxWSFgZVYeXvzZR9otFdcPETTEAq1nBcpspqcZGx9tXPEZt",
  "key46": "2eASCa1w1SCxCXysBCxyr88zGezma4oUnC3iBftsiPXmviRhU1nyrzEoKALGfgfpuqGM5b2uy3sggAzFLnSQvQ84",
  "key47": "xHxuSqK8ThTmiVHMUAJetTPNGjmv8iE6h31e81nYXT6bdhb6FegTNoBHjpvjiwW1XXmdiYSJusGhPmMrcmTeFno"
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
