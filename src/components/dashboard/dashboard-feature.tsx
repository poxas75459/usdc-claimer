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
    "5VJe13w9hVanAmVFgycgCgk9493vCEPB7PdKwBnbHXK9gK62p7kT5QY1C7yAjQe46pdDQYyMAMRPdgdWvXPT86rm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53avVwQmP3epoZfQCTPFk39qtKKHVNgKybHS22Zpuhi3U1FxL8ZVZwTo76w2u4ztjRsBg6XHy2K98oUEnj2wLQ45",
  "key1": "5joKhUbgyEv65harrwBieErVbyKsFkKKBQeB1iSkncjbhwYxA9jJrUirhedL5YaVf3aqKVA4EVCNnHkB15vqmQi",
  "key2": "3qiksafrPYkDz5Dkxm5SGpLCuw2RZxr9HBpx6U7iWWqpepTvjRocC7wyaBMCPpgin11hyFgVhzFfCi17K9LQjnkN",
  "key3": "4fQQWcM9yaMQ8BajpBcVYpt9aavoGkV2uFArcubQUnZP1jCL9PsZKH7FNZbbJyd3d4n5feDK9pZaN8BfFPdYdBP3",
  "key4": "3KFoSwgx2nZciG2UJ6ySxwPNXEmttP1jtS1nQTjU2yPGngt43EGmujNrb1vkB5o3oQToujV61VNygm4t4LMoVWn",
  "key5": "5zzUxssDSk1QkFxwCKXnVEtPoD39zYzTJLPyN35aoLhiaXX11UYnMLtHgeiy3Ly9WErW2PhhvGnY1EGy3Bkz37v",
  "key6": "nF8gVfHfV6xfpTVxWs5nCY4AU3qZGGQf1V4TAgpaHeSn5MAcwJdnuMKPK5e1kGMf2dhxAFNY4QuE1SZ6NVuzxU4",
  "key7": "KLMBPHDzxJy8YYT3Y8v4dKD116aZQqWbXBns8mHPoyvUjZnvuXey7sua3SA5X3C5h3f9DgxRzu2op1LEAd9LNa4",
  "key8": "4rnFQTXmKQf6hatYrmEJGJG48S6uK9ASDbZHX3RCAM6h2q5SYmEZH9RdRyFjDMhpyJhs4Mb4ZXvnzDtFUoTX8EXM",
  "key9": "4Aukp3umeGqmP6c3s3YuRWEkDT2FWUUeHKCz2m9Y18aeSmv3UpuGmADYU5aJaso7GdUFh23zXcT1hgzUx1nZg6F7",
  "key10": "5Gv6LGp9RwPWQrBXKjXpGiHYmS8C6u8SoB22Nw4FGsdDfE4MdSHG25gms8Rwy53HmAaPH1sNbVrhFQ5G3iViAcxP",
  "key11": "fs1awiKFcbbwR2sfEcT7a2ppH2FqR8mkKrwpb3ZoSBRF7TfxeJBJDiKyQAWnsvz2cTdpq83AuxhzNNs7iFfFXMq",
  "key12": "2FqVULMk16cJKDy6QcGbr1GeJsqr698rviFwKdT2vwL4S6X64g1oE9YThkikRUGtRaxvpois5okrCcamymCjWp2k",
  "key13": "5wnDcQi1wmcDemFdXwjeGQ4j8qPeE2BL7yx5JsUV3jrUzbdaRMkgNj8nXppbQsn16a3CWch9ihuRTMr2gZbgUhc2",
  "key14": "226Tt15Z7nTmnt4xdDVDF1uGaQNJjdJVv8ZXcdBaYZT1obU4WZasN1wp6NY4KgWDT4yNMQ8tfSuDgRNzQpYfxkbs",
  "key15": "3Uxr7YVeNkKfLimuaNFBHzkUvQTKBQnV8MequRRP65oigpXqoQt72M8vQTxagwb7Pg4oi6mJPprT72Vn4QdWg5gH",
  "key16": "4woZvZtHiU8mjBQnmuKzQjg8L3TTfTuLeyJizx7PSAsq2XuyTmqTZxRuiwz2e6fwES8huhdDuBAVq1dqf8h3bqXU",
  "key17": "4gbhUuXqmtpFWWZiwbnqat99vpM2cCT3LDRiF6bXU6jRjiZ6Gkpu3mP3q11VVM34knHwXHgfFHrQixL3Z6KKqZqs",
  "key18": "nUoe2LiiCeZpfC2Bn45gU88uKS8Xq4xs6cNEVJR4pGhDSoRtxpMA7MiQ7hmGA1gpWutrr8xTMqdDKCFbzVYjbdQ",
  "key19": "43rknewoJ8sMJitHKArY2zyHZkdbtWUHkGvxBtgRYChALHTvoa2d6k4gcFpz39PX2RxJPUew8VRqg58W95xnTJp9",
  "key20": "iRi4wCJEoDp72gDDhsVq6jwS4vd1BbbN1nHjhtXTTfosAR54Yb82Bd5p5kpUFio2AkNka2PKSHLGFZ6HjpatWSc",
  "key21": "pHWAHuY9J52WWwTiungkAjWv9FR22vE8PufP465ydfVTB8Z7D3w4ZjDmScZnKDQxQSUVsCwSj5t7KqGg95TfrQB",
  "key22": "5gW2uDUWvQSvXgJfwwvPsX99HAWDHitAa66HbVbnTkLCBWiaiKbm9x6wR5NecDm7dGSWzapFA3ATcb5bcjsjLVpj",
  "key23": "126MF5hgCh7CB3rWNvfaBHZe3sJQXy6FggAvbTEk1YzyaeSNYJQ2FmCVcmEE8uk1hFArpqy5VPAfxvxpaHksiuqg",
  "key24": "3bLCMzDgxDskWnZDAVpHAiXBbtvjaXPaakHFn94zYf7xbiTNq8AryxM3vEAL1WvH1Sfbp7yiyZzD9gToiHeJJU5u",
  "key25": "39Ec8rXfNSSTWcasP3fBE4mGx78NoqL3ncLNmbf8aJNv4z9d6MGN4gKFVQtNDWHN6zGg7rRuuxjk7tCgbVc8wZrR",
  "key26": "4FcAaFo339QFgezd36xxskrm6tLRQDoJ7e2JJaTTsPLvt28p49RvLoNx35zLF5E1d49egzAfJC69koh9P4ss5NUC",
  "key27": "3DTmu5uTb27xFBS3G5HRUPYFZUdkkAV4FxtSu3x4GG9sANFKbKjrWzkb8bavbE4gWEymSYJgdgXweVQqUT9qpArM",
  "key28": "4mupSiLdutAQ9aEhB8FjWg7mJQd81yGid3eNGvjJiZN9XtgAEhY7xgCVWQzvC6tRf2EXwq2zG9556b2xBKR1mzrF",
  "key29": "5Md6EbmZ2dwKQoCNpFGZiKQ72FZGg57tApwAa5hhoexV33wiazXAwYWKta5zEMs6YgAYiFL3XzptagdzGgFLE6pP",
  "key30": "2F9Ds9QtGqNmFjkhoCWRFbBkBG3i9d2v9iuujA6MeR9UzBZcVC5kz2TUM4zbPDrKyuHSVXui1FmjLCusWAhDoZwF",
  "key31": "3oS2H9VHbQV4yLjuhKUMMV39mJQD65JZbxoZBNdWSJQ4ARtRB6Mq7tBxhZnWAqBVcVq3tt8WaLYpR71hZMhrpkgG",
  "key32": "5j2s5vnuKNqR385jm8dwio89uveSsLoxuRAq981saR4tWNXo1TJPagJgrrEmPXsbiFLyydbCXrSaoorqjXqE2woM",
  "key33": "4rR5wUyMGwcXnYShfhRY8Ukcr8GwNHeCZjhgxkQJSJfMqL5wLkR3URpafAj3YW1JaKPZyH4DrZ2vXPCUV7yBSgtR",
  "key34": "5qgzwnGucGWJ8beNSSUF5824oNQZWxJodKGLTQNQLcdstYE1ytoczc9Vgc52VBQ1M7jz3GoQBpu9T9Y5MQ1S8TzB",
  "key35": "2xKvMHxhKCzKcDafAGDaHE2g9F1Y5mPs8owUbbYNeHqBw3P3t5Zij1PdXuj3esrhPTbNTG5HV9muUTbBM9t3McD9",
  "key36": "gPuCmvCjDCbADTgFvziJi6y4XjZ8YbALD6bqFvhKkXuPrXqEFDdJPnsU86iSgPGg643uhSg56Am5uhpv2UuUpZS",
  "key37": "5k4SUKyMVUgLC4E3Vi6NUjKS64c7mDGBQGULpvKSii75weYtSSHA3n6tjdodJZax7UrQQMN12AFtUcbEtFik3UxU",
  "key38": "2fiNZukXfi6qUDtosxbaptvswRPaMLJmivdvhHGPALQVUq2XR6t4hqxTBghQdrk9Gfwafycb2jRMz4TQ3VP2ZVaD",
  "key39": "57SVEMUC5yqknsstKpqytgGKE74KCfXuam9jiPxHuWJJsK2oc771i4d6Zc7kPtpJMTaQGQGTJwsJpodjwvq1NVVA",
  "key40": "5QLRd6oxbjudUg8b89QmghMRTfWHYoYN2M2Lycqn7j7qQJ2X9imMfU9VPNk8s2SVb9ZgLGPmJ5s2rSKZswj3yXj5"
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
