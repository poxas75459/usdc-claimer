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
    "258jwQ7qtAKuMam69XDTXxWvEEamJun3LhhkMdQJXNAHMas6v4ADcDxtasjDge2ZcUJxtmYy3gVLaXwbeP5oAXES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3adYN3i1xWniS6cFkxoPu4AjM4kNVL1Uf2D3pPpgkL7aMz36PWazNZ9oCEfrjdjcRKJnTNdviP3BjwKZV8RnFEnt",
  "key1": "4TwT1KsTUHNv7qfJZwvFWVm64G9vF277F3zhJKTSrAxCdFVSKzFYYMbdb2zUSLVSNMdA5h6Q65tpRfzebantp6Md",
  "key2": "5ubV36uU1TLZgbNjqDKM8VwBHLy5hfuHxcJGYjgxzzs7bGGCzcP94i2UN8GRjSQUuwbmFVSi5adB4yU93fTnpotv",
  "key3": "3X9Sn16r7itmaV4Q8Yg931grCgxvLL6opbWZ6rNYbRAPhcCucLusfL1LiQdZPH6RDSswebaupUnhNqqv8pp3JFRF",
  "key4": "4Qi8kGbaW3XvQhbwRm2Ymxdd9pfvy6SHsVQPJWBzCTNoPhtZkMAgHZDJw1pfsgKGj4rVBqFYTDW9SmvQ8VpTPhgR",
  "key5": "4iFP1AXdVgAXvTAzjor79K1w1bx8p9ucqpES8wDBRMbbVyKjt9a8e6sqAUWmVipL4oPvqRLPYJJcs1UzNXBUZGKF",
  "key6": "5nPCQsRAgEKEHvSSNtA6vU2UaMuGSycVTeYjvKD5EHNLFDmQPZiABH5nUqaKfFVrwk2NzYWsUj6MwqzPeEcwdYR4",
  "key7": "2EyQP2yX2MeExGBJz9jAJnRvD6ordSixM1KVKYddZZh1yTnBHjWwFMXBCfWvMsoKpQTAdCWcVrETcDo3ZczrCnkb",
  "key8": "5s5ZMjPAjp5FMZHXDDAc5k156xPxYBAtxLsqU6Tg4WkRqaUK6RgDf2e3A5zuHVQSrbXhR6EdXfzdLvE6oQLaYxUQ",
  "key9": "3jNTCFnmhoMR3uB7P4izeXLQ3UKtTRMN5jgbTopEtRCLyx35JXYw2Vakuu7FNv3ZjpaeMWrZspqp3N9QgVVUEkji",
  "key10": "3Q74VJApYXkSDvsZx8JbNtopYaoZNNjPUuibabwWz4aKd8M6zTtLKtNsjuArLBePPq8jNDdrBP7VzASJwG12xZXt",
  "key11": "3skvVkLxy99aJWteaMrdWj2PFUcvx3VJLunkymqbfFgdqYhEsGBc83GfqVX5XpEdG9NGYoNLErZauy844YwVATxP",
  "key12": "3rUi3JiucSZ1R5o7S26vvXuED89iRMQ9yDy6bpEouShAxGLYgLr1g4XLSVNeZ3FYQ4Pyo8HtrX3wsvgz8SzjnJ4Y",
  "key13": "3GTRNPw3ZRdThWyhBU17G8yX1Xa6LyLWcURguryU3izxy1aianbbQf9U1FAa9PmGX85yoWETedGHjWJ4fB6joEhQ",
  "key14": "3wGZtNNzhz9kqKT9MVqtLUkoEXeUHqFRX1arocGPKDLvPEjb4NAbHxYS7kP1eRzhscuBTHyjEMMRuek2aZDUr5eJ",
  "key15": "55B673cAv59rzSV7eJTebRb1UU78TrU6ddtKk2MYru3By64GHLPFUiA3QPnYPvFBebANr3pi5MYKqcUcmqBp7Det",
  "key16": "64bKtGbbPSUthK7bHBBctC5vuKjseeQEVrEEHeLo6xCcThf2uWLizUaJCphvFcxSJwpgq1YvzypuE9oNdBrFDAzJ",
  "key17": "5mA5Z5XNZrH4MLg98TXzFfVNdK9xW7GfjShdTNcnFohu9cTCFrrhVjBAT1QjtKRaNLRsmU7Vpbf5BFuYRFSZdyCB",
  "key18": "fooNJ8mwH2KD5TkFF2bTEhVmSm2TznhWtQdG5QoJUBw8jXiJE6YvKGxfyN1AHyR4ShmLTFAfk22azTmBfDrkmFP",
  "key19": "51MUt7ThMin9YTqtWnxk7GYLp9UT1YcPFvNJhYfi3zrxoo38x8iz8zJpVm9YfMrSqRdUCj9c1HFNs5GNfBBYfXbL",
  "key20": "5PeM6WQDtfe4RaZzvRyiuTXKtxLUTUmsA2EM4peuegFgh3Xi86TBbhoWsa3tt9iDRj1d8ULNUm2ErkYNFJq89mLT",
  "key21": "4qpEHRENmkZfd7BpPtSc1z2XpxMbuyzxDABYXHFejp2C22HFXahXnmvwxj3eMrLhB6hgpFcEY9v3PEkXNbPiHGwf",
  "key22": "3tRzZCiSgkP8HtzvfUFuygM8S3NukytL8XiN6dFtAie48DHHxpc3KXGT6cUHLt7ZyVMAzqSUUqJPJ1mWXoRkwBDE",
  "key23": "2BarkQSmmMVXipfzZNJ3KR5WL9Hh3HS79kHskFvhM7q4bZgL66aHSigD3aspwkvUQeQhKevznCD8bAN7hSz4Z9QV",
  "key24": "3pL4y8z9yagTvZv56uCENRpwfq3WozXiLBdocJ8UBkqoptuE1tEopm91B2eVjGRqcTTYZfTrG5Fjos28i4SgFJ4r",
  "key25": "5A5dJS8KQeGmdXNkxeR11jLvfxtujr64db1Zq3HtUiQnSj4HckTBkM9sZGetUXDMMka8EseePepfQSHQkwTG1Qwn",
  "key26": "WbEvMoQiBLGNGQAbuuNPjjAQKvHMukEtuMsFPEwaRtGTT2PKp4y65NwkSRhugmB7TDSbb4pD49gMroByLGv2UVK",
  "key27": "5rKyUy4AqvTXRxFS1z3zZZazK6Reh1uoWbLqew6S18GfTv3NwGxCW9yaNYwpyupfJewTCgtYDsibVvkkcDGsLkYD",
  "key28": "5jZvpnHExj8Sf91QfZRBp56mbeexVvfpA95dvWghzmuowvjP4SSieABH5S8L7TSVUm1VhW6Qxw2zcvDVKbDPnKGA",
  "key29": "62aofstgM37rLzjewPmE5vhdzPfoVvmGg4DbmEq6kvfzATFScHpnw9ipMNo89pfqqY3CnvZVMBF5NzaA4VTLES2p",
  "key30": "5JEDkdXZqZz9wYTBaRQEHrszsvgNbpKja7N6RAvuEcmxgDjpDyz41dnyFUf3AGrm4DHcxFJdAkXEokC1QFHSQTtF",
  "key31": "2AhubUm56fNrFaNPgSkJx64RhaipGk6B23wsKM6xKfvN1owRqyCXDQwGSSyLA4n5hUkjLNBbAHjrzeJoLpXRSDKd",
  "key32": "3QGawC8fUMxeCvnAMQAL8aJois5JbMdaz7J1u2VD3KQW3u8rzRWcqk22vgM9oYtgfenjk4nQh6Jo3yLgwBpPEWwJ",
  "key33": "4yCNScu7tQTVU3jnNdaFzJ8k25anofPRXkU7WcGEb8NoQyrq576EFmLjZtggD7yTwE1pJUbnXUhhhmtmx8DfZTho",
  "key34": "3xJdGGzwTPUaFrgCQr3jmLKgjumGvg73EMa3KR2sk4LCrMAdc45Af4GPJ5XhAJrBKL9Xjs2xuymR1YXmVoKUe2ET",
  "key35": "58Rqe6rc9UWvwH1eAzNZqtTHKN7ySXggF38yGTCcPWgTWdma5c3ycRqz745ajcvHRaesapaJrtAgHdrkJHvJ2Qhv",
  "key36": "jxV1zBFMT1HBZR5baB2iTYkrMncVq6D28EVNHSnC3W43KPPtMrHHmZnQgKtSuyT5NMWNBNmbyWf1Jt956MbEoLp",
  "key37": "rgv4mbS7w8UQWxHvuCXGGzMh5TGMU6eiWuEF4kgsrxp191uA1jNtwNVdjLJ9TC1iZNCtTmWv6fghZ5N9R1rhroo",
  "key38": "3PdXyfDyRXpmNo2k5iVu6igYwdGdZzGt9D8j2x9BzDBTxQGdRRCCGwJmC2sBwLFRJFRkvrzz6JNUhHVot9GXdUat",
  "key39": "5uktBuAbg8ShuCyCyf1dmSBAm8mK7GJ47EcQ1QMvDVNnmQn5WoMHeVdPCy1rJvwvpeCo9tHrNJHiAMpu6Rtuya3",
  "key40": "xg2ogy25yDnTYx213Y4Mxv1JuLCwX8ZjmvEAC6tabRYuHPW11bSaa3fwLGiMy3R7dfMWHsdpQqwUjHdoZjerysX",
  "key41": "3hD3WBNx4QEAMgWpxbov2XMZVKCjmyqD1cZGPxrtuwp3YxN47noLcCGLwht713Xp7vA2YeYiYkfqZFmq1uy5j8mP",
  "key42": "4sgYvt2BYFesykTCNyQsXhhm65JG6ZpvfjxjGeNuh2k99d2j4BrVK5s6AFgEUXBz3ENjfpp2FKqv9zeMdYsZV2DW",
  "key43": "3x9ygwVAoEyWtzW83ZqBz3RkUAKUyXyekAroziiPLoYZkpRtx67EZoyiYNiRh1k13iH3svNGfA1yft78wZcXzUhr",
  "key44": "bnggv7tbjXbp25GDz7fAunpzA44KW1UngWHM8KBHDJpEUJBTVFGutjR9PYHCQTp8bFuStZemHH6vVgjpjMUJmyA",
  "key45": "3CXiLizdQRcP63ScdJ2t4bRB2jgDxyXsvsZk4aBCnAK2aycwuxmoaKxiBUarAcgMfjPLQVPE8zD1HVuhRAk5yxPL",
  "key46": "C8E2guDeKvWXuG7wnZhzoJd1xqgVQK5SxgCTWrw9Vk12SCtDqHZnLUezj9LCV2s8SUvniYnb9TLYRdicf69akfB",
  "key47": "ZbsFCKTpoUWJwDB3oVhPqPnkbEWZaMD82c63LuFDFiWyA2DHgFAX16qv9gJgYWNC51513JAvNop3rBTKPhJtRuc",
  "key48": "4DZ3fj9AANCsAUrQtXP9t6MPTZi4d7LpFjZ1JhCJoskq7QTgSEKhF8gikgd7skGAprTZPwbSwzYV5ZXL3TnWZu9t",
  "key49": "3SnsbFAJB95z8MvjF2oPBPYDN7fsv3DcWYUrsJVYBJAw4PcSSrPp9UuHSLaxLwJ7yNpnuWKc8NPE4Ehzk1UNgmeq"
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
