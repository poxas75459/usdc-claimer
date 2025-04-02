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
    "3ox2ebLS3bTKSaU8p4JYq7zXPZBD8qriobep6a2g8oyQcXaKfTQEgAsjnEgz3cSqrD9ybvXftuHQzbHqjZUBiVYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27rMGDdMpSHho4SoNVPZFJ2F869Kk1D95WMCZxwGLmaxiFG9cFbEVbVQDRoW2HEoTCJmMzNSt1whSe1PnorCZTMR",
  "key1": "vyn4saexLiymLuEfMZMnAt7beErPa1BwpjiB9y9Z9nwtPTiuyM3hs9z2k6hvXZ5tG8xegh2jBeb9Lp4dL8Up8zC",
  "key2": "2pAfBLqBJM6j4N3hWxA8hQVPQUxcJAKm4xm6AZV5QNzgr5cVtUdW3vk32ZZWndV8Rpfdctq9WxyBjx2aCpQ1Lx9t",
  "key3": "5q8s8pYpiyKVAxWhdFpYRhjnmJQGkXwpYsD375mjNSVhvQRiJEgScHnwXoz4Di6niuQ4hnRWDmz9RBDj5STvc8Rf",
  "key4": "2LGRBcCyN6ZMDVtVF4XJyMpcShJBEqkGMgY3ZZ4TbyTWqXNu1jhgvh4sQkKtwkv6Q3XBkfkKBJBJxs57evU3CR2w",
  "key5": "47p3q3wYJyK67WrHtQKVDQn9cNrqGxscVfJd3W2aPaUnQstSC3QjPAmBK2U3vY9yM3GeuCcjdFe9j25znarZXNbE",
  "key6": "3owUCjmqMwgd7pAiXy59aZo2HSTCASHgk4UTF9vtwrr52F3K7UfC7z5ekgiC5NiqsbLCDPH1MrCN1TKW2t52GRGu",
  "key7": "4fe269YhchAy5MMvdwmJhcEpP3qCWPDnNDZ6fAwbE9gGUkWxmgDgsNVEqFEYUMMRkXnfxFeCCQQQszwrPTC7ZaBC",
  "key8": "5ARgSYEZtMd4jzaexv4Y82xNZvNTeViM57reudu9Vx9YUVgKHhyt6eXfoGAPYwEQQWCkws1Ptgp9bvGDDrUrYNuk",
  "key9": "4CaGE5prNp8QwcBXFSP6WkJNJ5p4dDAXbQb3vXoScYUXQF5Rqfjmxd5vLKPsEiDsoaNWEA5pUqTntuBaduF2uZ9q",
  "key10": "2A7iDiNYC27Lt7msrFpeG7PWSzVzAd787WSMNkAUHQFTkKeg5wAZc65rX1pikgXP4ZpBuq6tRWAhxE4qz1CZXADd",
  "key11": "nDiF1vRtaAvPpvVAKfgx7AvMj6w44nNhCAfaBHaGZCjFyk6kvTdkRqpPM1Kqrm6ocAXJPCuaSzWzHbpUJvC4hnj",
  "key12": "4McBpn2Pgg6TtczmBqkzAU1Na1kVpqgAxaYrGeoXHNBZeDcXNeMsFft4tm19pZ4Te8Rdsyn3CrzGmZCypPzeQbL4",
  "key13": "5xqphKujJQuWWTcZg3oHTmJJuibgBu6YYM6S22yxXWvRtY4juxA8vBaxw5Y1bcDs1VHb76uyXA3M1dbixQr9qdiV",
  "key14": "246cgpgWj5SX7mdmGryxPBtMr8btChAEedQ4KstNNjZ5JhqT8UqV6MjGAotFt88oH1unTFBudKF6VJcWAKyWMiag",
  "key15": "3c1SwUXajd4sfZr3nY38QY5Jp8xs23HGMt65xRpt5KyCiGUq3xDvwPumRrQ96r81LCN2HVLE7izzDpwpCkLzotgn",
  "key16": "53aAgQLGc4gghzAYgW3bExA6cRKN5M8EPDGETduTacseUBmpqXWt6hrK5E8saB7CVPhSgmYcU3CXvsmodgkqg6M5",
  "key17": "56WqgzmtpjBDbS6pVJuJz7aiQgD5JSj3NJjAiX8tHu8YwjRF71RAMenFXwWZ5v5XZExgZJS4q9b77FMuwsMfA45E",
  "key18": "k3ibm83namsPwsbchfSQorS8s9CaZ5CgpcE7bAYBwwJQY67rD2iuPjUAhck62kdE776vRy3qUbfoSUjweoQTL1D",
  "key19": "4QbDdviv292ZSFh7z3s9EXmN62MhEYaZbp1tm1znrC5Hw4vqPqzFdJqS24GbmjZQfzAMnZKfHtXkCjN4KTJPVYMe",
  "key20": "4mQdFmbkgrYVmMqf5v7BwkMWNNxcezh5U2ARdNtRanB7M1sL8uZFKgbt5UPGLP6q6E4PVUY3EpatNCwid1KCDo7Q",
  "key21": "33gM8rHEChrd5jcRqbonuVPP7Fx8SdZ95mMmuGBz6QZkFQNYvPcPUjJZZ3Hpuped75CMqNJda5HkUBg5rZQi1PWz",
  "key22": "5jsNeH6rcBdzsT5k75LrNiJGcEhjn8F5hKucxD9Q1whFnJzFHkFVgnz6cK9iFFx4J144YpzZiiScKESYR3haCnFK",
  "key23": "4XgbNiRjETy8Ty8JMPAV2LgoZu9NAEJFpbXa8zvMuBe6mS6BWMzuzZkSKyADkxKpMzQxquBAPjt3SDqR7FZSCyAz",
  "key24": "4Qo3kMdJe8qRe6ooF8RrAuRSYmghEgUiM9J56UcazEsoakA1yUosuZWbeAHtiNzLtVuE8jfv67WgzNHBzZugBSMQ",
  "key25": "3MdHLWGzEKU6jKQ1SLW6B4qrzgQKWjZDfn6NHL6WTpy2NzRziUehK5Z3ETHZyJWoyECAAFPHEdvTeMKbsgE7vjmw",
  "key26": "7HVTEsahEktR9es6r94ge7twPNFxbk7fyx8zEDyepvAZ7NUgxAo24Wdk36TUngp9CpxFkQwpo4o5rAc543Mbz3f",
  "key27": "3vKzTbFNTdQfJbryffnC27U6SG2nkH2aoaXerLyXdhw1Q9584eXAjtXtrxDKBQohNgvXCnc9tNnSyboi3VKiW61V",
  "key28": "mmDZMLFnk3dVXB6cU9XhhpjLsJyu9VPDPx5Le7MAn3kw6bZhN5skwG2KCWhZvcKuoypPJCSpRkksPehcyJsMsun",
  "key29": "5LHU7Mk78gMnsDbLAS8ZjBRNs238X5a1bs3hCjb6pREg5nW8Ghs8HQQU2xDtak3ZeVAE5Kfo4GWZ44tUcSgcgLME"
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
