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
    "4egefFBz8HmNqqnmTJSaGif8EWj647MySZ929po3mkBU3ArcYMJTYbqDpn6DLzoRNngmyBqqkuQnqsYVz5Qgtm5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sqacLthvo2CqkjWUS2Hh1tvM9UsDj93QsQMbi1bUNPoUbXSGtyHVxirT7TzpUJ7DEHbRffFxCcDsmJWrLHPg4vF",
  "key1": "4yXeywMdFWvPxtTwtpU3ME3jHbVNXWApkgsEYuaThKUQPrvPFrzr9MQqeZV2tnyy1XE5j6rEvkC5GfRCuHYhnUeq",
  "key2": "2wWd8r823AZ5JrYxDW4rGtXjv1aVF84duEiVSn2XLKncCYbUZrwZr4dRvMaUsZFCZNuF68Tc5ycHhrM88QBrsfEB",
  "key3": "4UBLuD72RqVCCXcmB2gMZ2fkqoAtSHbhBqMDWFBdy7dPZSW3hoSNbjTAa2WM6jSNjtEEceWeVUpB7CteNLXy2uZP",
  "key4": "CjLoTD8KffztXE5sh2e4AUEiCZNCXDSTezrFktaSMK69jWJxpEACJpVCA1auEr3EciPSeQAaeivETdR2XXRqeHS",
  "key5": "3v1Ra8wh6xLutXecbYRFR7no8GAGAQf5uW7oad3ng8fzL7MQtr854wkzGG2k68YrwS1MoShutT9Zkjf9MgcBurjq",
  "key6": "2q4gtAKgt7hWqhVM4g27cZfZ7C97DBxJhoFt6uiDNNSahEmUDftRjctPKVYzKtaEShiXvjfq2dgMQzXuMaiNzpU9",
  "key7": "25ThwJiCNaCSb92wuXNGSthHFjYLJUys6vJ52v7SUPsJfc5hByERDAcmtcArQrepNKeCuy4B6yXJQG46nci6djNs",
  "key8": "4zojam8SdqugGpxyzZddzFB3DxLytaAa7aRp9oakC1nVEM698ED4xxT7F6H8EMgA1DtjquKCFEudX6qtXowKH5C9",
  "key9": "5MNwdCPYPgBFDbMJod1FFdSVT79TgYNwSpgjv4pVdt42HiqHMCP5V7PFqEgDZRyS887MvFaFi5vB2VrakyJcog99",
  "key10": "2bwZWagUMSyMhzhtuPcaPyfzoukX5345XxSw6aRedPKp6R3ymoGr5BTe1A3zxrSYZyusX7F86MNt7Jn42TkQJxiq",
  "key11": "4CtnM5Pcr72bVJq6PrnmzgS89uK1srApQM5GxwvMBALfCM1NSob6XKAVjo4GdqQSD1AxeL9KZmLoKkSKcoPvXiMd",
  "key12": "k4QLp35L6ibDDB7pz8Ji9f1xjtgkk1Dfxa5LKyikqo7pgT25235m7UECy8gAn7PDVLAyRkWFD9HPk4qSR8a1frn",
  "key13": "4UsEhEwezJCQBMv69zdRoMmSWNuHcJmPFsVFyAfzpreA9Sr4hKy2qXGohMfRvCXyRhHzHUZa8SjuCpEuLXAGJefN",
  "key14": "3Wbo7kZh6AKRR4YgDru1vzNZwyRuLEyr8KxiG44uDXy6nYPPmFcMkF4yaobcwU3kdC5JDKhgugKzzutdrAE3Gzth",
  "key15": "2HXy7cKM85KQwpk27mENXDBebZb2Vtq2VbYYVQryuDQscwMndtBmyoGYhUMCHTrLiPgGu3NsXSjCThvyxJLh7NuY",
  "key16": "657a8rJnDiJuAvy6a9E4yqAXET1sPwAKsTLfdpMpyALi4jmnMsBr9bbZqfXZnvAvdFYV1JnMRPxhWQXBEv9Wvq24",
  "key17": "4NNk9fLHYZWsbvWhhXkLvTE9WsQPdnJbtZ8CVTrhLHvL9tbCN6Me2K1YhwruwjiJ925yPGGFC68uzzEt8cuBEgyX",
  "key18": "cYj81okUYM1Gove7SdYsZJ4gRW9wQWtxKZV4ZXJBjcYL2axMcwNUEJkmbdPNuEMHvaLpsUSW9yRabPo4UDQQ59S",
  "key19": "3rWGqdFahnE8kDKquRQi3QA1n2XkZnhUDaur7MmGMy6EZfjGQqE2sWMx8j1AuKyuzyoizBU7EbAxttWdb4ebBBEz",
  "key20": "2VJYXWtYRBWxVg7LvfR2Zy8orWdCzQ7e8aL98jUaDexpu8CLDdsiro2LofgpppZ5t5qoL5JZKMuaCv2QF2LzwWwQ",
  "key21": "5CnM8DfypvGvk4Zd1fyxzbKRi1WM8Njqmu84fazp9JsMWHDoXMDKvE9nEajoG2AK8yovctrdiNoAt2eWkUWJHZiB",
  "key22": "3Dv8ithXD8e4M6rxDKkRfxZ4TQBieCkDvyG4KWbEKkU8YT9yZhnWhC9TdfxCreV8dqNsfnDdNx3ZQLrPiLJwZb3G",
  "key23": "cbxGfgtAaDt54myqKHB6J1jdi6B6N61e325kJcdwwktW84kPyYT42JPPVyMP1YvsTGhVpsDD7UZ1BY5AihHLvYm",
  "key24": "5VLtiyvorC1spocKwhYhu2SAW8uzhdddfsjKjgkx6AeHw88tSgwCPy64UJLZFwAg1ce6z4P8Dw7A36wXk3JnKqhV",
  "key25": "3Qp2DxXccUHUBHXgShCsw84DYcCapHVwCAdXtgufUhaY8KYFoHUNEUDPRwUFLuSSKTfVJ6njdptLBHWC1CewByxC",
  "key26": "2MvxxgU74Y13QRFjdY6dEoCwxSf7keiKnNaLhVGgDs6M3dDsbtdRt4hYAfNqbJppzSn1WiwuHEd8dbfVV16XARiU",
  "key27": "55uDUorJ4WrLUct4nT2YgxhB4W4ANiHdLLhyCM2AHNTRnjD8zjNtPS2q5dnJyzu8Q9ckt3kyZRWMmZMytEXnoeLX",
  "key28": "58AeK6VsArjY9PGE4B15kBemYZJ9oQGUxUFdoRzbqXsKhh6NSDqjujX6hPtFFEmhhdXi8uJgot2btacV2ZMpFLpH",
  "key29": "nzUqyFBbtNskVT8Em4rxLPhjwo51USW6Y7cP4eLzbMw71vnJ4B3JFNoiEQju5VkCxdopGuTE3PBS2XHvkywXuHK",
  "key30": "WFsDCGWkisiTADm4ctJqU8yDJ33Bxf2rJr2FY1CkVe3x6yeWNhpeWcb7SxzA5DSYUd2d6DZHZ1wjfMoo2EhmzZm",
  "key31": "2GrRb2KQ4ffX5Q2q51Jiohp9t67N5HcaQZJP8AdEgd4wsQ1aXzR2JaSsuNhfKTdXyygyYW4pSxduj6k5XBbKEwof",
  "key32": "5igfK6jQfts6JMaQgj6W3CB8jRL6d7rxj6F1mC7TYGKwsyGeTTpYDX7MCRUKeFF8DQbRQN2bMpyVp2WFrvmSWS21",
  "key33": "4eNDNoFNYR1BLMS8f1SJhqePEY4bx3xwU5TYrGjigrMfv9exnVWcpNVKRCh1cGGZdfDj4ZVdz6PdLKpsUijre4H7",
  "key34": "4PTaDCLGp76SiD5ce6u2vxFhTEErMVjjh5js9pJwzSrtqcY6aMyfVErYnGErmP6AbQdP2Esrnik46PswrDgzzhgG",
  "key35": "5vu9v3SGun5UDFiQbWYUNPJ9FYdRLbrucA3QYB41tBhP4SpxEk4TAXswrMF1MzvbwN27oSfVKNUcjzFfBhNFDZrX",
  "key36": "f4JRJ16oS949kZs4WTdkrrX4ckAMouDqXvfWEzxfFk9e2DvTYtJyoFnzdw6nEpKhNZcBMf7Gx6zzHVTRHnRYPwV",
  "key37": "2Ta5uNVLYYqFhVfomhgCkWhvzrKzYmQaPMWhZvbj8aNKaKKsWdQJpGkFY8Eg8U1g55BXncBnNqjVt5o3MShpz7UY",
  "key38": "33aWS517ofyUMpTgpmeNrPMmkrRYp6mkyNcW9eBJLnRMybLCAasJBPEondr7zdiBNytjXZozg4pP1TaK4wtnNA4W",
  "key39": "4KGk7Fyhb3BwFEav5GWvjqFfPQLniCeFQQLUh1EEbownb3UF5SqXkYgL9b8wrKMqQFiawZQbhyeG5FV6q7rZTr8S",
  "key40": "4kg3crEt76cj1JYqLUuEEWxaTKwrLzThKab5UZxkPungzY24soUq3ZR8sA4rHefvmrYvgrwaek1h7XzMc4vPxhJn",
  "key41": "35UgKYMYjqYtSEj2L6FUNXWQyHyB5hTBDCM4tf559uipg4Jez8YBm2QbiCsGkZQgHqd1wgHnMuUkNhLATf7SDDZB",
  "key42": "38dxSC38HAHmii8HEZwBaPBUa9x7E2L7d13Vun8YnRnQ6DRL1sfCW7LDgbVXHddaRsaECaPoP8beVeYYFPHAMJHL",
  "key43": "66XA8mBvPKtUGW8YTKXVLQ3zSLBKFr51157jzbkvK6eTa5GjbBVJixJdLDLJ2DWMyq3LDXFAhN2928Quiw4rRNRv",
  "key44": "66aSs7TFgPQH27NwijVcNxSqAt6k6CSJKVEZnMJDRiEdWo6VH64BorrwcwhipZbysfRk6pPu51adxXPE6ZRskvwt",
  "key45": "3LfUoYvyBWtVzRQPpnmPnUD8uSsqCR7MpT6gToVynTSvmqkJUDkvQ7j5ivsTv8SfEb7HxJVjA4y24yWUtwuntTcK",
  "key46": "5ywWQuDyQNaWqiS1bK4RzzNurb6FwdyjHtTXne2xzFwvEbfuoRZuyNbVHE4mHFETyrvzmffFf7iuewXkYqsx6wZp",
  "key47": "3MYp4pYjqbowYqygmnGxuhtZ4JsxWFJgnz2Z4xSjBU95ZopNC5ajJeMnrYZSHNT4mBMQBMP9AdpTK8bWKGrsg6PA",
  "key48": "4UnWW98vmD2mwQXZMZKV2kkdXGGS6P1uSMpVsRgs61tesZNNzPimDnAaoqSefKv7G6Wv48zwPmQSRrJJSQHMM5rz",
  "key49": "cRn2yX4SRRHfPxmoGPNMpkemAeUhkBPApiwwhdvStkgeLMiKJh9w8ednPey5SWkiRZaQcn4QEyKZZd6yXbdTNMY"
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
