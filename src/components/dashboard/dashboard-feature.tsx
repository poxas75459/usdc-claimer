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
    "5QjXjzciULjMvjKSYuYr1diz1MuM2GC77uN2kSTrcQcttrcTHJnQ6QNyhPyYVL1eCU51VHguiAns3j2WBkfgHieJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39rfLg9SDycy4zTrXtfrNyE6qB2ZYfoyt2kajsnNSfumop5sBtoUpdeqWMkEYB8hUnohDhW9FXLyc5uXMjbyhHVk",
  "key1": "323bhuj65C7qzaEsVNQN2etx7ADJjDmn9FQ9aLxvLPeQA9q6WQ1y2FBY172etTzYuAV19SDTzdSbvrMZxguV8iEJ",
  "key2": "4Z3zjzCUzygMxT319Li5QG5bvNZVtcSSkAryNhBW4QxSjh48hQgiGp6WRdPRCtAGihtus33Z7Mozp4paxRwfKUyD",
  "key3": "3tew5RXeRLmaKCp84Hm5Fnn6WbDztE9CDdxZSFJ7Ua8YP4y4oC8Rm2Echh2xNMdktH6Zfqu6sLmJ1bq9yTK7BZ5e",
  "key4": "FPQb8svhAAaoAi9hDfMDjoY2vfgVyk4mJzrAcqPw8jM5RBTT6WtXSHTPaSfUiN2qM97LRyKi9PbKkT2ZBESnMDn",
  "key5": "2WYyUEW5WLKWTnJoxQD8fGeUwaiYQYxHri5jDY1SjEyVp7Fgss3f8J5zB6hxRKa3U7AKXiadPmyAMfDrqfJnnTWj",
  "key6": "4kaoavvT716nRG2xpZU46owXp3SxzA1FX1jUAF1RAcoRguuKLtWP7DtiyYQfT2LjypLGkJwJZJ9VdUoMKfVEntNP",
  "key7": "2qsKmk3dYVo1m7Gq3Nor229NTH6vEL9T1E73LHvw1Xb6eZamoQnt7ezxDZeK9KV54N9zHSgKZWcQhXiz6TbscMth",
  "key8": "5L4qyPidMhoUhwUWTAVNhUN5x2m3h3xhqjnjkrBynvGVNk59RFhbv5NsLr2BogFneyKEmUf9sqvvW4Y1puoMuZRf",
  "key9": "5dHqqFyqSqnGq77AmZqexqDCMozzREuvsTX6Se3qAFzzmuxkhWgxdgUrqk4fHiz9N4L87jM48P9RiamkG5oqVewR",
  "key10": "2jHJ4tFtc6VK4RtVU6ZGMqKkTdicwPEXktWHh1W8nMYZsFjuuaHuPJgXwWWcgKTJkykxDA2YQKMfs1uEtVWboLWx",
  "key11": "33ZQeWje1mgY4bhv92VqV1w9oA92d1WBvsQSXy4gbpxeuREVdgfykyka1hdHtLVWn6osDPUz8mehtdyXKPDhDHe",
  "key12": "tdyUx8rMjmseHUKowZSVkQQn6kTDGnDe96k48xzheeUKXLgcc8udRMF9CMqJgrFciBrwhW4N4oFEezU68cME27F",
  "key13": "yx7ZgDVcRt7udB1Kgt58vLvE1iLLbVAptDAsojpqMW3ruyzLQcBgZ82mAMvBiF8qMYtaSTGJPQLWQYCAujfjsF8",
  "key14": "pHRdPrj9DEETQSgCziWcorkpE89UcNp6nUKcmvt5oUvUDjP6n8avHTDRs1VAJDn3SutR9b6fsahGibWUa9Yxn3B",
  "key15": "3zn2spsvS9d4Es3eKhm9ZxXF2VvhrgQu7xC7WCeXAZn6SZdMkaApWMgwJEa9Wcw4eU3MfmPp4MHvVveytjn221z7",
  "key16": "2TUjNrgL1nNrNZkdtt4CdCwCSevDs9UBkmU8nQb1JPkDnvnaceUfVXBf5xY2iqBvWUcwLsTT3MQrVowJYewvteVt",
  "key17": "5bi9pAEtjJqgheVcuuiXXKfvmuEWpns6t5C54nXg7GBctJu2mvTpuDFfFeWbSHjqCDcEF2vebd2dWfHnc5nT93BG",
  "key18": "2Z3RJ2bRdS3HTDjnG6aqPAeHjxrx1pYZ4fsD8rNUUh2uxqsd8TEUCf3uoq4FWUsWamJTAfRU1oxW6fF9NbEi9VB2",
  "key19": "2MnUoPax7ZL7VLuLpbpBGsFppTePbGUyf1ScCBPd7ueWRqWVXXLqvxgyZNtAJKLWEvj93kLwwotbHRauLadtXpM9",
  "key20": "57twrT2ZcUpQuCSaeCya4PWRNwn1tLCT6QNc7mZLASkWyrDB6aM7SACA4ZmLZxuLomshJraR2NawD3DnorqDkwp5",
  "key21": "3vy4mJM1skdSNUnUEeNx4uKC8EvhJWXth7PRQ1tzpKTiARTRRAGXTDsp5UfaGK21q7stTFj5WBjEvJ3Cd4wSBFfh",
  "key22": "6CcqMhjyTzUhNZRfe5JQ53wN5vUa3wdjSJ7LWAJBBiWDLRN7QyC1g7LJW55B1qxw7Ss4DeXNERwCRkdUNEfTXHd",
  "key23": "4M1QKHTLxcGocfRkkrTVTkfAM8SgY52yUygSkcsqELkjQuWWWZQ1ahwtyBa1aQN3zdT1T1Knms6wcKxEuhcYKePe",
  "key24": "2JPSZXZ2Y1d2EbRS7rb2fZavMuwv4fP2ZNHygTLDXkYMRsT65tsjmXVgcmTLzYZ3qCQwgW8PqFDQGEaCmrAoApx5",
  "key25": "h6ac4LpaWQHu6nWJoUGSkKLhf2hzSeWk39SrUMaouKjbdFo1ZLMJ1ktiSfSAzbMhrqQpkbCYvuxxdKatNXLVPnE",
  "key26": "5e4kQgVcqs1CC4GySuKSJR28dLMZYMSQYkzbQW1F8NBhaqYPRcYsNJ5rZh3ySkZtUJfeESK8Gg96N8UUAV2D5L3i",
  "key27": "XxfkLiswiHn9gjWQBxfaoP88s3wtDR8xoxkHwkdsqhMuN4UDjx6JiTo8wvvasAkkYrh8RrvEXCcKP97EZngoroe",
  "key28": "bLrBYPizH78RSqm3oxFndjAiN4AWzN4M2BeE2V93ZhDUrv5SzLTG9Z3MDUno2kLKxRnDG7Vtqb2HtxfJxHF35cY",
  "key29": "3tx2sYc3X2SJkSPCg9fia354H6AL4jpobL1z9cj5Djdt8kgNpj4JBwjJuuPoLanMQFFuoRRaJd79vM3GNBHYt3rB",
  "key30": "4mr61Acm5uczztVbyjRhjiTsKceHtRELvRMcfWgtQ8zJBmmBee8HdVyzFgeagCifzpgrU2EXQ7GSFapPkgrJSRRH",
  "key31": "JaCzrG4kAhLmEoYyQiQPFNBXEqrM2heWUoNUxqVvAvPM2JjnZo3M5VY2rGMy166pAp4dMYdrAWWRNLYLKeA5RYF",
  "key32": "2Vt3c85GJ27FmjetT26dRv3siwDavFPBVn9D6nuxPYASRG9HoWRLA62iDzvV7RAYWFo8HRR69HsZHTcwjjGJEcxt",
  "key33": "2Xj97k62ecoLKCgyGFbTVFMNonpb11LNznohyQznsNzexxYR2pMY2SbXhq7GyRacrfUXEGoBppoUUBPBeEuCKcKV",
  "key34": "2FqZqzLs941XTSYFXBCWcu5o3GcnpKb8JKTrkfMhQ8z6uZSeWHy7NmZXxMSjCtwtmVUaRyAJjkB8ocNde9vb4Hep",
  "key35": "2nUdJnaHUgEici5FvQM8RQTzLQ3eYajGuVA9zdQiJkYH3D2fQCXeFBUBLhTUTWcNmDMddToCx8DMuSPHcTpp8GP4",
  "key36": "2jVZpgHVgznYj7DvjoXc32ocy2WrQgcpisvKZnRGUbzVtvirdq9JDofTFDyGHaMFqw5SMSERAgYwdP6DY5LGiBc3",
  "key37": "2sqACg5CAyEN3QB5gvnqiuXxyYN5M8B7DCAjJ7cMoautVKgTKJ6HsVmXzfgY7e4DYs6M8GFCubVS6KR2ipSWiEXZ",
  "key38": "bzBNfGPoZM2cokCWq6cn21GJqyD9jta3EVV6EFKgcjeB5GXxKQa8ZdiHLKn1kXSC6ojXuwNDj62NzsH7hXDajJX",
  "key39": "28D7yXoiKFHABdoar2nz78Qn1tMxxUsUKQeGJP9GzC2xPeB1dnYgC7MUQK9DwfbnJTXtsWoJaTUGwxnErCL3vgZm",
  "key40": "3nhaJb6Hp2CYoWi86e8ibqUCgev1uxiViK3GP3gaaLiETPmX22gWXSC8PNDs3NfGqJfX8rhvVXmsQQrSLxtNFhGQ",
  "key41": "53t33xxbTwkRVbhdCtUSZqseTaNLiik7E8Dv4ULbpteTB2ZW8yxcKXg1g8k1Yqc1M5hBpC34Rwm9HhTUX2ymyf71",
  "key42": "4GhXtewhp5KPdr7sZGqtWLd8DQVfJiTECMPZ9hVKUEQLHxHLZTReczthsj6fffxv63ScZtoVu9nobhiRs5RG8Khz",
  "key43": "2hbgPjVby2Ti5nw6YnErMzejL5kFqpryfuYVj3DMiMf8xvyQDxeychZWK3zWo2eyv6u6MWfvbQzMs18whZha5L5L",
  "key44": "2FTXzHDhCcuUUVfKnXV4uAALRwU7HmyrMpcpzig3CnuxKNHqWLqNDgBzkyVaWb75vCmzvghFujCSoGHm6XVfMPq3",
  "key45": "3qxgsQvfEMopSEfK3aDTYim2mQmEzitDDi8cCbW7i6e3jJx9Ys3PrtB5EsQAUYbvj3M7mGFB2v53YHVdbcH1RyT7"
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
