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
    "2QTT6GWbTkjek3D6kMw4dHpJGCdkg3D6mKmG9mkJHhrVHKiPHv2conm9J13y3NiimUjbQBbetwxbx2zaKRWsngHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z42NZ1SzCp35Rb3nK84sRXjRxw5kAtJhqJQj37Ea8hytGFST4YZx4tkRDiFLLZTXivjHd8EbQr9KSNhRFtQzQu1",
  "key1": "4H9JiVjVwRwXx6qxLT6eVqdrjBzkvnDeBrcmtQCX7G94Nn4SiXKJ7oeL8qsxob2CY4KX94UxRFfzhyuGfc95ZDNt",
  "key2": "4Y5Dnkruaep1QFsRqwGJwaRMrnk6ZvKzXwvMxDmE9HeJJUGbucY6cqf54jiQD7ogdQEQZqGE75LoMjnJYcb9qAUK",
  "key3": "4vmWR6FGULLxAyrZsbXP6DmZ7DCEsgUkpF16Coy5ivc1Jb2fNSyh3YVQhxrb2TPEUQqEr87RsyfkZoPkxM1JPiTV",
  "key4": "xHJKNT1jZFgC6j9MpEZYGmT9hQxP5V9M85tCxKqgvBo6m27FHAjKaUYtdD9RJMLU8KmnRYBTTSVgMhjgZ6CRiWv",
  "key5": "2s1fE7dmbc2iyjASMozGg5X2Y1WjyB8ey9tZxxsDGZbbNFkPiBwY87cEreLWc8kduVjv8hfBtuCtx1UfLwrPeEti",
  "key6": "3T5pK7dDZMpJoA1EtbYXs3JmJpBTXQNFGvaDcoAwj2stb5AAegfcf7EjUSdwm52CoWmd3qDDtiHAh7GjHZKdfKff",
  "key7": "3RmfXj99pYAnNK9XjR8MLEHmC4YG5DAxTQjzHvYpDwXUkBxWP5q2xt5myt8NrmepLJ96NCzYoL77VfoQ9xQ14PHJ",
  "key8": "4M7MAZrhoWZKrCvnScgVPpfr1hLVFzpLeNdZGZ7zbKGAsfvyVXd5hBpVPXmVpb3xvtrAGHkCh1yJT7SsQ4xxSnW1",
  "key9": "388WdqM84bjLyRB3wjpGpmp632qxDWKUd7TMrERo8UYVsttgZSWZCVk7FXS5ojbTe7WHMmvqdwtpTwnGzX5YVt1B",
  "key10": "5hMZ7wrdjyoe9AdwKNvbF7Y4N31GU3PohBrXtBvBY7ZH3az1x5hFh5Mfpfnq5CWeJLggzqwyHMxxnAAFqJZfkA6a",
  "key11": "2Z1ZigZwTscASrZs555wx4nQS8NpRxdJDWxrmNRm3WF5rKyuW2ZdtLaKen5UtKxc14VtLsmpJHrAm2P61p99Jg57",
  "key12": "2M9wJEo2nhTVEtdQdBCuoihUhdC4GN1pRp1HWheSuzewKfUVASpkbLAL2xaMkAefozdvsZJS6bnfHGJGPMyNcR1m",
  "key13": "5dcRZdLzHNgkQiiD94SnjvegqEzfZsFsEwcDLTF1Uw5ikmuBaXu61eoqQvA4tN3uavW2HfMfiUZmFfoT9shnP9Yb",
  "key14": "7BrFGT6jtazqHGuavnTeppkGS5jMK78RZrqYsSP4HDVJsjVezgcGo8kC8EHYsu2EzRU1vinuoaAZHbMYsUExvVb",
  "key15": "4DVSzZuHfMG3QdYL1E9YqKcFud5V81ZYVXUTPN5MZPpcSYmtn1tzqdAtqzS3MM3YTB5WEMZsDoU1H9hEHSnbsFCY",
  "key16": "eMB2UwbpshRHkq2nXEHqd4KmttkLuaufCaSxXte4dJWBTmCTXmHGM5zEWvm8kY19E3AZecAVHrvA8CVz2TcsPip",
  "key17": "2WxLfzAw9N3JBNQQrMZcDFZFitqRC7Vvae7RYRSR5Xra9XHcfHcyVURRzeCAgeXpqfHuT6GKKqCXbGjTDBghdcZC",
  "key18": "43iX4EPVP1eh68Ws4EGxveTBcKYxvVZTzDdaW8RP57p9sybgG1UARFuqWBMBRrzExYhckw8yWPW4RWdnMkbytg41",
  "key19": "2mftzKHGUjiZPXQZdiZid3E12sfVN4qRRtWJSkLMLDsY2vrVHkDoXwvF6h9eSngKMKCA1mgKrLLYsQ9z4WQFYVig",
  "key20": "MDHYsRWubBJPG4ZXB1tNfvedmcADR3q3NmhGLxGDLpgdMSSYzVhRaEUYngb5BXYLnZi3tiuso7cKYPs1GuV4tjQ",
  "key21": "5H67oa2RvyfTafUk5ydJ7NuwxoxJQSRhXo9J51MtE1kNddoKSe8F4DH8MTx1DfUjQ1E2w8QmayVHuqrgb6TW4cJh",
  "key22": "CoxsGWD1mHDaCFzy8QKfkabYRtx381n9LU8pTZj8MuD58c5eJPQoM2RuB7oQMUc7tudECPwk4fziT9MfJbXn5pK",
  "key23": "3xCi9uWBbewpp4ftpEnuFSgLc69k5x3g3TYxEQdk8Bu1pNsFmjoW8hSrVtmj6KqZDNZZSe3PJgTPvjYJZzUrrMhT",
  "key24": "PtvzS1PeA87gry4i1x6rHe1SdmNUHZoKUY1rYfNM7p3ckQWC7tLXHTsRWtF6pwDzJMMUd4UVenbpPpDDRaKMqV4",
  "key25": "5zc4X68jwrGAztrMF4ShvvqVPRHqMcvaM5UTimmG5DThofs7KGXSipqw7AdRMdCvMpL9BsYhmjtRjRbeCsfwA2eg",
  "key26": "2M3HMcS59ep5D8N3F7EpH7J2CL6vccYoCKELQpdS2CXTpsuTjfCbhNF3ismPC2N4iZeyzX2oATr6YKQKaBfkjwBW",
  "key27": "28zVpKycAKimde9u3QtKCvvjs3iwR3q9XzkCpPrFzhviEawpx7uXimVYrHMT2bmnkgEqAWhcvE9TXTx6wXZPVvcY",
  "key28": "ePvrbu5uD3asUuXkmm7u4Sh8Qk7GVfGoqCeTJwxNJtNmL9oPz2vmpah8mX2pgUg51vQBp7yEeDQMwDDsjgDTSq2",
  "key29": "3dUBFfnPZrMVpbzgK77ovJ5W5yb6ePLCD9qsV7oD44SggCjjzKNtPp8ApB9ennJD7WB4TGV1QEi7tU8ewgf9fGwr",
  "key30": "YKGfwPDvbR5cA8WEB39Tt8ZXD2GTx1ez3kuF3Wwbz6QJRNeCg3FV3BRGBKJE6rSmTV5MwmkP2QNArNoD8a11sgw",
  "key31": "3vSCaqN5ASwTKjFpEs3yj267zM4bUdrBayoCvPwkKBKtC2CH9ijWnbX8hwWbo6jCzityyXPSnsNqWs25eRGDNkQw",
  "key32": "3uTKYFaBn1ttoqNZbqt9CXUmLmSDbY2ZzDiKRyuMMrvyTnHmwTWDP4YxHmVyUbp3YCmRKM74nNUpSjJiRAUP2GG2",
  "key33": "44jSJRYCvDbXPZ6RX8TEXdMBc7RDTLUVJs14nNWAxNGYRB3kKWivaG7qgeWZCJLeYyjE5cK7Wh2CTW6zPCEsh7xp"
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
