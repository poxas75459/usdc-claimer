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
    "5e7b6DpkCuuVyQhCNbEc4FiGZnex2aab19xf8wnchWhFPFavFbA1e7f22CgyWYYSPSBzX8sZAoivv3rzzA48uE4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UAES6Bjw3af2cQWPnj9imieQYVhy57bMp6XDE3JeXFaCE1oH8PpqBt13CkoAFRq5Es7NChyQEz83eghCoj18E9B",
  "key1": "3VD3efW5MuAkEKjrVNGc5qd7vpcjdLA4Xuzhws6yrQEBJkTH6ST1oSQFvB7Lx7XwhrmTvjAyuin7Fg5qqheFSTop",
  "key2": "4srnqaGRs7qFQgae7DzLqaYcYfQDv8QT5G27cxvynUH9tEkTsRF7CdWyexLDuVKXLAPKxARGi9kfkZzBVKJ4cAes",
  "key3": "3GtR1ci3m7RiPT9RLY1LCEXJi4KkoTSZ4BKQkHZgSGAeDNW61wWaK2P83iVJQQBt5p3vByQBWxv9aEFn9QY3Ey1T",
  "key4": "3ykYgMeWQMR8eQq7CFubGe3TDH61nRByaLCAU4Er2gL6Pc4dyxxncqum9LyLGttPYNPGcERZLXijbA8wabzw7wQR",
  "key5": "3Mq84VXNPrC4UqWUifmzTN5VH4yUQZAKNdJiKxYMCvMMQBsGPuG2RhzDtjzZrKVGmLCGjykFg2NdGoeD9zt5bHoF",
  "key6": "51EY7Z3Ui3BE7ogvtmF3niYnuivR1Np6opyDHKTXy1UibVLjkCRZhghE48ZWpdkH3jXv8hvE9pvT4iZXXR6S7GkF",
  "key7": "5NXMYQrBnDBYLX9NDBXTt1tczDx8EE3h3KK9P372MRoVhBMr799Z2ZJWTtmch936wKTfuxgi7kCDEpBeUHYLQh1B",
  "key8": "4uyojQYJuZMBa17XHrSwt1eEgB1f33Adbc1RboGL1rKhP3UnheG8QVQSdGyK62QFa1TTrnyKH6shxBANFQQAyyhK",
  "key9": "3WfWkixayh1ZTgeRiXtFLTtheFbQVkBwZNNQeTGCWZFaEUaX7VNkm9QxrhsENW2SGXjxyjnQoqr15DWDh4bqnN3d",
  "key10": "C6fukvRLyFzJPKTC9LrVYk6wM7SHwqccZXHaAM5mLmkLxxtRqCctuAZMGxu6Z8WpVGgNCqrV4HDg68xnmCr1g5p",
  "key11": "iB7ZgsRfVpvyGXegb9Mnf5X67TLnpLkT3BhSkTS85E84S2scjJqy4NVkA84AqimtzSRvP98CKNbEcwXto2QdfEb",
  "key12": "351yCerhM9AmtMHYw7scFUhCqfSpsxGFQQJ2AW7R9B4u1fLdXwwng7fe519PEsB3UVo4XwBJ7PiJhoJKhZZCGVf6",
  "key13": "MP8oTwL3Z6yqiPKL4tU41oRSWCmcS6Nnj16pos1rV1U7AbHSoirR2RnG9apfV2oZf91mSLgFkPWVHaZQRh8VjWy",
  "key14": "3A1T5X5xhgeCXXHbg97PuFc9QLi29dNLpJxjp3VxN3D1seP29ueZ9oioSW1FYZzkVSGyaYUJN4mLhCP3MpjXsPPe",
  "key15": "5M8GMJP4r9cXcAZVZRUNjAYtpR15uJqg6VaEmJGCqibULjLGLoJ4yd6tmNqEeEcjN5aXUkmtPw6XSDtBmydQ65N1",
  "key16": "5HzFL3UUaDutUGkimkJCWfhPQRp2rehSUVvWyExYd6TJTS1R5zgrM6754PTqbnc1xXRZd3vhVXSsN5kjXvp4N9yZ",
  "key17": "2rcEBNmeZEcuJA6XV2M54pM2ShDyEZuLpWXqKnqKHNrTPAcZ3f2FhL6vi7QUNKAVcnuu99hNp4ymuGRh5hup24V4",
  "key18": "2sw2LLp8S6PPWnMF6YrLZsnTBG8NrBfmKVTBnNtrMv3eXKZESzz1rMJFC2pMzgrK9LabfNbnNL3kvZJcVYm4FFBB",
  "key19": "QAmPCE54JoWfL4c6TbFe6oT8qBNz3RiyFGZUh4z4G1r3aVJBxsCPXZHEDRWWALRdD5Lnaoap8JyBwTLRMmgQrGK",
  "key20": "3dxoghpavYAEQ6PwXeCyp98Dx8oETmKvbumzuqyLTazsViHtXWtrA1HrQU2k6QLJPGnU69BgrF29LdqogmUahCXb",
  "key21": "55aMYPcdN1mLs2m2QYT3jvFGGwub37EgVZTPSvcxAZUPNxc4RuL4CADzGDCikVDsn8QuZb5dCcfyhsVdSatvbMA1",
  "key22": "5HJMNXyCwdnmpDtajooGk8TU89a9ZLigh33w1VJ8gUrejSv18oRYLst1diMAy6C9xLtT7M2BiazEExzmCRvNBm7H",
  "key23": "rvvXrvd8RLexgSC71iecXasjttY84fzCYo9zw3ZaTS6yDRCAtJpJ9V1Koqyb48ifaUkwraRmvhFTWXyMphUKCYH",
  "key24": "3mw9AYfkuYSkWUdk3QRYpPtQPnvU661eqKaovBADih4Gd1HqXs8b2i9PPEXZt1Ho76awNQEFmx39i7bk44kuh1US",
  "key25": "4AWiPTgQ2YSKGjd2GZJAZv2FLNpcrMp9eN7UKYySMQBWCkpvqUnkXyYmjBV7mDxdB6knZosqMN4cHTNPXFosFL4w",
  "key26": "9uVMPb6TT7z1b5Ckh74kjrtzXh9aaQygz1ZWNkDLk4fPpQWEoP36RH5X3w1eN3SVWe2z7ccB84a3WwKZC9E9fKz",
  "key27": "5fjTGZJ2kx3uFBQEr35HgUKWq84MXMTMpe1c1FrFuzEvebmYuVon6kBmjbu9Rxk6kbwYGG2biRrRK9ERVfgpaQJv",
  "key28": "3gLTeMks7dry8eq2cEWFJiqPYLWuErWWWU1BJPrGNdkgSemuKT7KGh5qzCFFkHS2931HTBi6PrVEijWQMwNMgpjj"
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
