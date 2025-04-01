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
    "3KV7fXauiK2txVCQTy3Wa3emscjG9uECENP82eXT3Vh3JWXQBCVpHM8Js6dZeMTRUxTX4YjpWvTDrsW9WvYpHQ8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23tCdDtjwep5u5S3WX9KVt2zjuJMn3X7pJtUX2FVntRxQiuZFX7ZHeB47tLkLi3K9dbTEQm2HH1JRsSgkZAfpcy1",
  "key1": "628WGT6SFhdFoYQqFp3qbY3MCnfF2zbLAiJa1yj9v9Yk4UFSgmPR4PEkLCF4TCL2agmJtLirLavizFWx1rHqBDDB",
  "key2": "441gwhQXEzggQ1riP2aSkQCDqYJ51nUe23TgB76zzwsVkjqpS89rPApL85XHgNGnW6j9YVZWggAz9VKJKh1VKnu2",
  "key3": "22bJgv5tEZ1sgsDKHxChnU5gFGtP1gaWkYYSNHn5HSYgP9RoVHiXXxSynvZejEBAzmZ8cT9WNSXFtj9b3UrY59Er",
  "key4": "5GBY8C7A3UjusUJH6vvYryF7QC2VFpjre7cMZ38qhG4rP8dsDMeGFKFHTYPSLD3VK7c7Nd4mVrvkVaGE9pEjGF9k",
  "key5": "3W64FTpkEuWsTwzFNTXNTQB5M2MZKBof8KWjVH6VgGhNKkGanQHgkwsxTZi12jo9Pisz152gJVHsBQvPke7N7KLm",
  "key6": "4nUEgw2gZzQhymKnFa4iS7zHtTjbU1GL5XsBK8ymtHECCxDtXatsXy1jKfNyjCufrk8cBE8KFTi4YTBSjxCoqRVC",
  "key7": "7gfXycMJ6DF1JDAsgYAfCBoaJP8ZEzvQgSeFkrMXiUF8hJkg61depkXR4qM9tNjoJ2vNjGaYuJjh1Vb8ALi7BhR",
  "key8": "3F7xxvNN1eWNvRHtuMNcvP6TcQKxpv4GFrUGaFpcb61DH2LRCxjMkHjbFVRt9CP3VDgA75NdwrRi51g2f84u8Udj",
  "key9": "3BtfTNJeb5TsxEsa4ydBe9uPqMW34HWsAKNowyNVGddaanHoubpDuMtzARpFA2PgrtVhHBPX3ahwNoPcYM4qxxDP",
  "key10": "3dvPfavJqRoXDxwBNoEFqvNmXM6nwJVvx5uWVTR4mHGHG9z18MWkeSMS8qQPPz69evG4TFiZ83f83YjPZrXrzFvp",
  "key11": "2iGiL8t6KVc39iBhDh8fQdbZkPxuiQEHTGbee6gH2GmvZJJ9CRG9n5QwmKPhTnJezpRUKT9QZ5R2SNo11ftHT1dg",
  "key12": "3FC3zVGoUKGpEknApRQohaJJX3ddY8yWvg4QEc8quGzSRKkA1jTTgSXZyBSVEkFxpHCQF3cg7LwNgC9JVQMzV3jP",
  "key13": "yErQLxFZswEhVnVGUH3nmedooRyMVPyFrG32U9XGb4o9utgetBjqL8UQ4g98LW9iMzBYgyG1Gh6SF26V5NGr6nc",
  "key14": "2GXH495g7a7z4yGbP16SkDD5LX9QwyDQGuyvBMN7jENPPs6CHRXYypCy1Ab8hAkP965ynavTYEDT4S8kPeSXEYNi",
  "key15": "51rrnhVMpyHE1xQtDKAP7VPokN2TwuaEkpC5cmMkzDDBLEQpAV6adhwCX3jDyZiniuytWd2wGSBseS1joQ2LnhWR",
  "key16": "2RvjAgSvkMaHoNRwCZSgwbwTRrNHuCPMtLoF3KprPaJjpkTCSnmrdhCNHVEYwCZRGasNKBGKzDM7XHFTqWDik6YG",
  "key17": "PJTsF9naLo3jmd9WKKtxzu86me3xhcbMAGEQfQ1XUpfMrZUkXFM6HPBuViWALAU7yeJH6biXNr4oESBpFppirmU",
  "key18": "4vBAAiZAbAsAqTvYMWSYDKxhMEkn7A7SD3uCggmzL8pBNmtG5wpdvz7boZBXmrLyP6Es6XxqdrvbJK4cgGAkoMP4",
  "key19": "4iBhJPKRJrijr8nzQJdajYY5S8c9d5jDsTMZuriJDE6v3z48CgrHsszXpjHKcVC6GF5qw7b5uL4SGRXwgQQL8abH",
  "key20": "5hThqbTEJmow5Pi6MGc56uh896qi9ysPqvZhfJzJSG2iipcMgZshhugLHS5LV5or9hRgMYvjAWoGgu1nQYEpMAL7",
  "key21": "TLVfLX38rFRjbceb8fy1bJWWN3S7egxXHt2TqjgFKjCWX7E4EAZKvhGD4g6KX691N4s1ZudaQd4KviN4B1vpMgo",
  "key22": "4azfgmHfhaESZTCQQRS6BqUmAV1pq8bzuHQ9Yxq4U8gTxMfEDfSvyDf7zpkpBskyS4YTPVigx5wmUFce7mwE9ZTZ",
  "key23": "5UuM64hPDD2Q9BKiDZekzvAfcBPe5jNzDTdWj1eWLYrgWrZcmfdjF92FQ5snaQ34sACDnCeWwhCtizFWwY4AKwiq",
  "key24": "2kuFnSrA4KnV5NzNh2DGEFUB6reCjWnJXVUjUPYa1hAz52rhqYseUBwoKRJHk8JRcy59TG8TJhpSd26HdnMp3Neb",
  "key25": "2PtJftAoUC2WmKkg9B5gZfvfteJirpdrhqnthxYBP82NZYahVyHs1mw9caCNUXH4EvqR7veVipaddDdofdXTtmqW",
  "key26": "3ntVKCG89b2S3rNx5cxQA5uK9eNrWQRqrDssdetUEEv9MdXdYjnAdg56zdcpSbdgnrMLLDbLV75FEUFdZbuSjEdZ"
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
