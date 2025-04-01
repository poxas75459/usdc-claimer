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
    "3H1jkMs9j4RAsr7bzjcjsiML2b1Kx2rfNhtRU2UWKw1xbx9yaoqvyKvJVkxjuDr78d2r2w2hfC2G8pHe7KasunRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y61NG1NEEubmokUj2qbuT4UM8cvopyLZzF9cdv3WGimUg9iDydE6BREYzWoL4FTa4EZfUcYk6wpau323d9LEx34",
  "key1": "5LuRsU9gM1RpByfDgwLp8hnaLS23rXWMSFndhmrRL7xjJP8Rsn7yxmMmyDWU9pHnZ51BSVGg1vjd2Kxso966ttK9",
  "key2": "2BxT52KjdapAT1QVLVGKBt7e2NgBE54mNRRCmTmJvkEJvTwepRgUaWVnsD6Nf1jxpbJPHAoqvsCGwKAqsBaX9gb1",
  "key3": "3uTJXBxjXFZRa5jvTT6ruYzRxf4uf5Lq63J4AUreX4RXshjYbyqbDxv9RiXPEfkwo42jfsEirX72JqgGpjwTh9dd",
  "key4": "2DhTiUJCyobdx9JQubAzh1EBGTdH3sesXAHvgv7jwSdV4HW2KHsSbLczbbUxkrG75v5LLwjwyNLuBTkXXwqUSNSx",
  "key5": "37PrZhFfpQaqQK8ngWA1Nc7QzkLN4rDaRZG8jZXaXxRvGHTMfHbF7LPu4RTmf97uyRAuNr18FX2JJY4zdqG7LBZ4",
  "key6": "2wx7GGzY3K5pegZqjtSLQsdRakVg5wh3u1rJE9F5kYm7u3Zg5x9mcLTaSjvPymdWG7tYhbSonfxTAuXzfjEXCFT",
  "key7": "LtYYzMxeL6XHz7iCwm5CU8ow9QMCPrZvd1ZX5KyQPnx2Cye3yoCLgrW8gjJ3uq3s22HGABihWnCdfVrd12EHwhL",
  "key8": "3LHGhPrEF3pjTDZes5jHLNAXkccQZFZhB3ZAhJL2mBeYdE44nMTBTYpqDRzwese9n1gufi2JkXNjgXYVbBE2u7Pp",
  "key9": "3bdGVtYqxxADUSiaNcDaAjrZBVyDfoF72ekx7EoMSEBvzrVxgjRvRzARWGGSrZTdvKfFWmWqc5h49AVa1gHWBzxM",
  "key10": "4QBt9g4SkSJoBamsDjmbvAmFXZoSa872q6MhtyzfkCA1zRCsRr3atgRxCzfgF83AztDFoLYpKuJ7X6RedooxgHUN",
  "key11": "1XitNThWLB7aL1obvvGGBXewYjZkLuUuu2xBMZQuXKg5syiEttMxsETiKGvWt8XvtzV9sBrhKDkykCvunrZsmtQ",
  "key12": "4weGu5gxwEXxx6n3e1krSr9PQNywYTp94b9zZ1jG77MhrGkSonuQXjtxHyZNJomKyUdXes8iCJTiLdSDd9q67vKS",
  "key13": "3ebRVfJjFLyR6h2SXXwN4sX4kM747aJnezABXn4Uuo48tZFpBEr8jc2CTU9psdwjVn8BPJL8JrwBatSAyfV5nzrG",
  "key14": "27RXbgFvcKP8uJNUQf4A6vQexEbGY3MiVFstdCnUqNmY9qVtzTbDq6Jqquhfdy8kpvztKpapVWBsRps93uiKZ6Zq",
  "key15": "2NhKES2PqoqsP4MBwapnZPaJazkbWEHQTeN1kgVvbiMmY88xq8SKkrMY3ZAkSZwGMEB22iTw1GoB63TE6wKEJVNe",
  "key16": "5PAGoTHjS7j8SAi9Roub5AJveHJTz3QGEiZfXVMbsBCHPsxKiavuVeVt5AwY1BaiNJbQn3jgkgjwMJdQvsfefNCz",
  "key17": "ZLjQ3gxwxNUxDkA2r8X9oYERNyQu5g2L25A63YtUeEMx4FvnTnGPCyfCohxjfwxaafg1PT4jvw2nHeHQshv1fbN",
  "key18": "2s5pCC6fs4xgMFey1YGAdVf92ttwrfTah4c5WdaQMiVqp4cja7bGgZpYVQrv147dFpMcEdFE2wVqmZZzCGwHDzd9",
  "key19": "2jTzLUTHizN4LxLWE8TXNMErJ9nuZ3WrQtpTBCABt6t9FNhEKYokWRgFi6UEWSmrKbXKLf6wuXmDU9aA3k3m6a1A",
  "key20": "4CxComzxF6AXwbD7Wpi7Z8NTKn3MxsPAE3eimJxP5zkF7kKKMuUetb2xxSrmN4uHCsR93eq2yfD4G9wn3WrG3sr8",
  "key21": "5sa9yDmdSCfW6bzWSYaj5NrNZabGgn6ygPnzei2gaf3rn1b1LSwe86jiBP3nr7twvks1MtDSPSksGVy2XrAj3YgG",
  "key22": "5oxNKzo974CN2b1makmhNCqbLAKXVsmAWNdMKmVZCv2JJ5NHUQe6sqtEhVuNPD7PtM9FP5tBw9LsHmSDXgMuT47U",
  "key23": "4gvMmgAjWpPKBXEb8V2mS1cruj7V4CipfYhtH9MGy21VzDXX2J6qTNg6umaU7UsrRvJnwxiJUXNNZxSvXZcnrGN8",
  "key24": "tP2bssnAFmB3gyUjonJxgpvxJgxRpwPcN3E8XpNnrEapomJaApqwhBVVFwBvNBSfQ9NwZatAq18erfvRw43h6eS",
  "key25": "598KYJQkA8F5GtEL9yhGQQmC5LzaPhcivj4uy7i2dS27WYPqKRRb8AmuQYd7z9Lvq7KmsVJCYocLUZHRAZQCJcru",
  "key26": "4UmTmphfLo12kstFLdxuBHWrsAJdumz4YpJTfcRuerk3sN7s9cpycSSedL8kb234cbDk94Ye6ytevFAf3W57Xs59",
  "key27": "49xjfsYB3jUAJhM8U95wDw1hrd2yBkcoRUSgdrsHDpUrmn1UxXjDLxUVkBJFf814SSuLt82iE5KKNKmDtw37DG8P",
  "key28": "QVw4Qshux2SddhufMZRmox8rKBmMd4i2h4zVfGc7jB89x2TSFpyh9KvUipNLpTs8uU8fsyTRZqj43JrWTrniXnu"
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
