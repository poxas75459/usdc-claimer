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
    "4JysUp7L5DewJR7FkFLRfCA3diXpnJHUdqWu335kXDvH2VHfYXXTqoeKALGPzDmjkuKmgWNqamPB9HjhrBic9S8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24xBvjQ29MQznTmi5bTrsVEZ97iGxnpZgR7Fq3HQwEdL5ZWaaN3xy8hFy38KLkSoDFUZLp9JvkPd1Pu1NYHDKrXm",
  "key1": "4a3wgzsnAVzySgKn4uBkdBdLUssgwubdGHwobX9vPeWYiQFSt3RsPvL6BYo61apuouyP6SfFawwotGwa8tAzYFzD",
  "key2": "27JVz4DDGjSjdU8HATQMoqbPeNksKY74GGhPBvnM8GsHXjr4E4d8fFanpRfxJM6HHEqvBpm3k6b49goKG8GM43Pk",
  "key3": "3TQSPC8GXAH5Za9dxoT2FTmcz1Pji4wPtHnLL5n8wcdAc36QEUny5HdTjmhnB4MhmdWE4gut5pCR7wVbWQgt2Pzi",
  "key4": "SjiiSdWynGtymDNtaL6FTP6H4acGENzaVj4TcTPrxw1R4aiAZL4tEvshjZoEZ2id7zX56JEHC8KtNTXpsYvLFGE",
  "key5": "5wBkvmopxL6DpLa336FpeyqXVLoZh3ax3SakcsdZz5HLXZ9JbG7FjRCSgjfA3gWmWf91aMadmAUwzMK2Gsn3mGhM",
  "key6": "26b48FyAZrn9wHKKyCtdNoEUZerRMu242zVk87jNELayHzjWeqkkiFnVGYwf2yz5xGeop9WDUUzpbUexbdH79ojd",
  "key7": "25D9GFGCErG4zMVn2Ac63MnZ4kGysq1mpP69eXYCbQ38aFXRV8QGMKJNXBQpVaGi2jmo5hCTXjcL2eEkCnPhS5WC",
  "key8": "vZa8n2NiCgroV8JHCUgFs653WLMxeTuCyVvueVyMWX2uuHgrXqNHf6H7NzKrn6J837iHLxc89p3HnMcncBZ71WW",
  "key9": "3UxSNL7ggyPRbZeWLZdQn7ptpK5f31SdoPvFTpCgri2pXBaX5Lk36s3uxFxdSpbAkkw6T2JeDDtQh2VjNzXeo4Ym",
  "key10": "5bcFRmzpZxfuEzDRnFVM1Vkxhat2M3B9JF5gWjK63T2LKu6sLX8EcNYkZRZQjoT49Y1imHJSKpoHqPwYgjhQ21cJ",
  "key11": "2RXBNiTf9rwsbWmPJquggyoZcKmMVMrPgspwnLyZY9JkxfDQ38r7PPjCrztLF4yg4QkgHpTvbfMLsxk3yhqTzJyp",
  "key12": "wreQZYk58qchknZ1xtr3ASmV7fc4B6d8bDyqtRxUdei5HgCJH5nVDWC7JRQMJQRH1L99bTGZitQJMyGGQDrBpBG",
  "key13": "4msvcVNVGQjo4vyamqfx8GppCkyf47Tj9eBD23a2EZK6QNKRYNUoaJjsg5U85MFF4KMNCZNWANxLnxK23BybTMNp",
  "key14": "4UgrgVuaU8EnmUWskXf44pFZwjKGrPCT3QCQNCi3f8wuH6es6gsn4HAVThXg9zJoTfuXAfUKBdfGXCJHzbCZVM6M",
  "key15": "2X35hFaYi9ZUBeBm52yRcCSy9hoDS7b6V85s1SXZ9sVonCe1Z3N61UFkEJUoEGbhKZ8o9HYZW7skic7ERGmyvmLC",
  "key16": "5CLtUpvCRsrCt5tufF6fctw8qwErM1sk1QNK8j2ePbck1JipHRPPCNcuPFg1LeAHXaHAggHVGZyVPkr1aT4rQt1h",
  "key17": "4fd7jXsaz2ktpBHFN8iHVs75XYAJVnzr8uDH7t1SPy9XRoETbWZjywjTG6axnigUhjqn1D6pozzCZaqFgYyZocDB",
  "key18": "3cQTqJce1YhuVRrbSzjUZq8aS7tA1MWMPw6Qv1ixBwKTQap2S75WEND6vPDCFdRLuoReZPgZsFtSVgmmvVskCjUU",
  "key19": "4ufXSFvNW84iLf3ShkHfmXzPbwSazMCSLEi7kPNrDCZwGa3jNmXam7HtnQyxipEhvWrTTifvqEt1qmbJqqdjgY7x",
  "key20": "BxPRNLamdXQB2eeFMaWGjXWXpMmaEMqWyfZNwNpNtPHbqXRrGcXdFg3hXDHUtbVLEp6csSe24xUWyoQmBjkDiyG",
  "key21": "2C5MB4kaj725dDHvMi5fCkatskLwdsGPpzuebBZBjy4o4d7od7WH7WJnNKoWqd3MFjQ4VSN7fiX9kfoFV6Mnwyww",
  "key22": "o3APR4xA1QptJynQRjeTDRrqsHYkjTa5LsjujfN2VpyPcZWEe2FtXpcXWxNA52KSVvYogk4mCY971errKHpRHZU",
  "key23": "35fqf2G6z8SpH2JWH5qJ9eGiWcQTyaR1d7TgKcAq3AgQ7c4nhVM7cxPkKudL5uUWu4PinJsjXiof8gWhk3EMVVvj",
  "key24": "5ep1njnj9R2Ne2mCxwDhaq8KmcJwd2oKSGpkJcPmR6LGjREsre6cuHNSvPuhQiGn8oBw5SJ83i9nZ39hy7RaCSdh",
  "key25": "3JCELY1ckJWbeHdqmX87aWw4aoD2Sppb4hSjsK2b8Ngq4vJVppuwaoD1CiNwQSybiYzsHyi4mxpdAr56d2Xsnz3N",
  "key26": "4dQNsBfkxU7REYSxgVkZMu9RUbraHtGHpGunjdCUrxvrnU5TNumeYYmFzK36uiS3Fcg3RZzeUygvydyWcvNcUqts",
  "key27": "49ykKQvrzb49ZnghbHqVmyt5TqTz41F1MXqfzgCn8qwZRxMfmN2NNhraptqiXGEYANcHCy1aXfiiQuqEgWpvHcZa",
  "key28": "zsxwA96pcFCPteRAHVeSEfPVooG5MkMNrGBhkDyu6aQmWoDZm4fnL8jzMWrvbq1X8jUnyphHSSZW7i452pqwnFN",
  "key29": "iQTXaHW7NUnx77fqoAQsVrsjSg5SMkBMG1qa68CzXm9i4qEwBGynW7hqv255PNjwCM5SfdVy2Le4Zj7RsioPS78",
  "key30": "nHqjsJYLU7CVP6M2nUyBp8KsP9KrSbi4p61Uu6KADSTBfucN5oerBewLM6thn67qAYBJTiZZbH5sz2wL6By2xwj",
  "key31": "3mZpPcJ5zysA77dfoXWFuu3xfCLnbW8J3hGQU4hRmnkmQVMJgzCnyenZhgBz8cJCrZqzriNJeCm8KCUHLcP7MRZ5",
  "key32": "2795fMweaGw2sJMz7RWjKtvXCR77gXu9ffGsBXx3SC1zsHBZkBPrKPF1KVSa1AVwktS62DRjE55gYWNFodBxLRYZ",
  "key33": "5CVbdk79uoAxETrnFtuyKkon57sqYsCCUuM2ZHj6H4GwDGFLCnJw8bbTfUrvEJS3WVWkrqtACkqkyJELHkufvo1"
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
