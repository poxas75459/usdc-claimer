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
    "2fxitMnYcn2VyQHzpvCC1X9tnmkpK8EHCR69c8NL9MnoQbxXou9fpB26JYS2ztkPD5o6Gmz7eDWxBV9tosGf8rMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s3WZv1sASwxVLGEQzadBLo7ZaitTGx35vQSejWxsqp7c7EGQYpsQNPvSekAvJJptXPqEGBSYGLG4Gib4qDBRnHX",
  "key1": "4qYBCSNY8x3vRmJGqHjYhErbXFBhtbH4DxuZMo3HFvbj3jvkz3cRsqMSdCVGgSfFHeUGyYgujfvMPuhfWseLjEks",
  "key2": "bxbPf9Wxxn1n7WbQRoscsSjvUDiAmvzwGYGmoyLUBCxw6szjwtbaLPt9cBKB9SZuD8PutLxXasQFKNVThBHdhkX",
  "key3": "63J3hKLoL3muxBeMJRFVuC28Kn4CF8UvaEktqfwkTLXdpfVojoA5pnWx4PWTqYCwGu9MbUk8fmVwAd7RJva6Mriu",
  "key4": "qgouETNaEbuCLGJoRg2HJewRAZiT4a11WhLWMbrRvur9qPzmECCn46w46nFwSja7ubS3ydNAuZSjSNJqMfZURAF",
  "key5": "3Ykfpb8ufyqv51WH8DPZxMhZM5itS3uSivnz83CSPd1WQeaXgn4KMLaGQpotxNCK5Ci9PRHB1vY633atsYV6cFCb",
  "key6": "51ygZQ9KtUqSGzDKoKCwK33XgUVh3p37gyzHV2RXfuYSAhJhfxKBUYHmZbo65z12ZZiyEAAUPtogtC155wb8Xw5R",
  "key7": "5mtpUUSHE9rhWeiPDug3f7UHTYmaxyuxJZ7eYGwa9NjLysMJkVNUkoM6Ptt7zbry6GkpYDshFdxm4k5HpTeu4HTG",
  "key8": "5w4dJDKRmbFJrwvbzGfZfc9Yw47AjbGYVtUJTU8HFxBQ228xjotzYtNrqHviinYmoRRcQmH5W9eQ5X3Cpc919aDt",
  "key9": "4wARetjcQZibfrAM5xyWCYXqogk8dgqXR5i5M5HJrHPpAPkvWyRKxUTtTN51VK3eH9f7Vvj84rH7L7ZSXbBnC4tb",
  "key10": "3PFRRcyHKuRHFP7Fjgdk1iDPjZxqozQeo8BebDk8cPGGZZfxES5LpJ74uVuZnxiKMo9zhxZVAfjUDhDyoJZska6A",
  "key11": "B1SLQjFkHjdQdC6X2PFP2e7xosStYpXvwFusa8anB1jw8SLwAQKX5BBDKZvnBkHBABaRuc9RUJMrHhCGys3rdoi",
  "key12": "4VATuwEHHHaJSCozjWDMgGVvwCN1HuxU2LhgzPeGjjvJWwwN4FNfyrNHsmEUG5rmUM5ht4MAWdj8aGAtdtVqxEDT",
  "key13": "sDKmi5oAwjERbSJBq6ACcLUvaYY24n333bwLw5qMGLndbVdEhsortQWvwY2veSoQuWrPwKg1BtV8aaRbNLfGfSh",
  "key14": "qE2QUnQPqQP9fPbR9smj74zMnNpJbh4d8awqtH6SC2SJSaNNv2wfrMoKgprGF8itQ4ebWE6Wwdtv7tMKDrHvWUQ",
  "key15": "45SrxGcF1XwZZNESCAcH5dCd4GuTjqEBowQ1Bfgk4k5HFQY7ifwAxKFHZ2YqttTvrNH1WrTChpgSi8i7uLJ3GLsd",
  "key16": "41nimnPi6poCNV2iXnK57rJkD6Rq4LRkac2h4JDRLpECn86hGLuzyoMuyNaXAD3LQWKg2j1bCJbAhG7ysnPCiNWF",
  "key17": "5fmsEj4ugc9VwMvnryZoAvN6P7PXKbiLqjv6E9HQa1NHSuD8SGhqAg7hEjqz8u3ut8Ges9jK2R49YFfxiQMAgqs4",
  "key18": "3KgjtVY3FoXZgeZTmVTNW5DTk2uHLAkpXLQh1nSxZdGP6X2Ub7HU1VpMZorWrsrtnEpxs7rq3wDDx1bs9AcM19ii",
  "key19": "3fxpbLggSDgKMPnAd7XkfVJawmQKX1S9K4yUxvzbyJAqwKersxYDgPVCsv7uTHwoChcKr4jfrCUdcBSrctVGJYCh",
  "key20": "5FjFDpeDzrhDPB3PGNBK9mwvHVp4mMy4XYnNFCEgikuSx6K2ByBMdLcisD372dkhGeagXLwFotVMZQQNr55Xw7rc",
  "key21": "575XQv6beYppJe3ancSfpQau15iXNmKVrcsdSjYX4PNocFndaBbL925SrUh7ZdHxvGPPwk1fzcwj3V53CnfQdpdp",
  "key22": "3vLw21YUT4rSTdbERzpnegAmoHnzeZDZA4tXBUdbFHUeuF5jVFjghu2wtaM366MpTStUkTrWMcirbcC9uthkR6T4",
  "key23": "VA7YXuJnEiZb2431eMGTjTvd3wfLnNYNPDzrdfwPdciKCox6A96iy8ZYenbb8C8cbhNfMgLUNm2U1fuUcFJWSeT",
  "key24": "2e485npm5aKVbX428otimbpFb88bV191svbqFTbeFDYzRcVGDrNQa72nwYUD9eWxENc8zNki62aCcw7ZEnEhv9Y5",
  "key25": "4XV7sKhZS61jwpzsdHCtvkYPUP8asnaJ2gFFPdcFdge6WsdEPSpJXVTuuEMeKjxyPr2Ks7anYmybuiJbBdk7eevt",
  "key26": "3w6tr8nBwqqdZPR5fLQ6As1YSfgYYmvdUnE4855BiNSc4jM5PS5nZ6H145LPExp1uGmKmnMLc7WktNmHJuNWh9PC",
  "key27": "huht1Mcc3aEhvoYKADGizvzX8c6QgSSFKJNgvWVfgi1jM1LL1AgUjZCn6doQDc6tPvqxFW8GNb12ramWM2HkoJZ",
  "key28": "vky6GBCPh9BhU55eYjjbf9ResnF2w8e6eECDwGo9ntmNLZHTfm1vL7fqembhKRx1jQECWR9N7NAufSCwjed48DM",
  "key29": "2QftdSAgcd1qji5PYUzPEAMynP4nMTfNGDtis9ocygDBYLiv2cphkdznm7kzgXeCRvmCrceXqB2dQmi1HgbMeTvX",
  "key30": "5FxR5k8zQ8bCGdCteDmk5EbnA2jd8gj4S4iBt5xQhZ6aroVfhpvjJEnMLE9XxfMiaYUf3AjhJmXQ5tYj8jP4CbFh",
  "key31": "34jZYFQ3ooFX3WVC7guPDjjTaTCzwCKNvVj4CRPAfBh9WoRs3uHH3gFUMRUYxzbT8dqD3NXErnrztagiYCKpazYE",
  "key32": "4LqmR2ufMdstqLsE9jMPFDuDM9qVuyNqFEgc2E4yU5TiBbieQhpuCNAvWA1JXnR1TzjmcHTmKWP8zmEUjxEj6ab6",
  "key33": "4WwJhNFVCFXqczLehLSyHer4DzJv9Mg3BDTkj5gtMrprNrv9jchDSexdPh7H3xbTxiAGD6Nr3B3joW3wDa9UYFLZ",
  "key34": "3cd3DPsbZfZV34REobEbhgVifgp6aTz3pgN322LuxGVx5hoe3UQgfyCTpfEVm2fqnQLKr6U9JHGGZ8WJgaH2smQk",
  "key35": "2ffhrFQ13xyun1KBMmb11nX4c2WxvcpUAuCmCiZFjTZ3pnWjC1v2AuhaKq79FB5Wc2Zm7Jmkb5GmD9g4LsjvZw5v",
  "key36": "TjoaMyuVGiDW8DGNA1ZPHoGjhVqvmRprrHvCtgyHgu9UB73CWAqZ2bpbTTjF62DehX7QH97J9uywyW6BuimVKu8",
  "key37": "37aPCtfhr5W1D3jL7uHgqgHP9F7o9qD9EtYMhVTQXVBN9xbBjvLsbemKaXm4dVZqNLmy1eCvts9hRCdrHvQKzU2G",
  "key38": "3WUjKoyA5Y6wXq1rhzVSUuNusvzF5sGzfZF6dCtVpbTobDz7EaLmnupgw4R2ULQkHi77BeLtYFtGobBPXDzHas21",
  "key39": "3ebsgwWMd69kjwuBLAv7FXq3FvP4KaQjiD3vVBhRb8AFc77W9KBZVWFr5ywenE95qjcHMiBX95oxiBVFPgy8dqe5",
  "key40": "23uGwQk4Lp3oGMDB7VvUmTjdh7Kd45aU8wmAPKf6AJZ5UFCgwTjKz1vUXzDcgaovPmDrVsKs8tfVdTFUSu9fKSve",
  "key41": "32gna85HXoRjmTH3tUL7MJcfq7UFM8hUWJbkPoVkWAwJSM5G7p8HrKbk4eLWkgJzgJxKBREKCS68gnedmw2YhesG",
  "key42": "4kRU2Ro1weM8dSvFRiMGGw9eEXGyJ1Hase2YKJdCkUSbzCGgweqKNPURAkSsv7e1o1T8iaiDrKKthHD2F6Xo4wzM",
  "key43": "5P15WTb3sK3zC3UYXB2MQYVg4YjmY3tYV7nXMbNgJkg8fnXUfWrRxbhMbpHWnP5MRQPSFAARGJowdA6JgvepAokX",
  "key44": "FCkzBnY1AY1SCQFMWdEvEHbuHSuLsAugPU7KEzFJhC1f1NBtASzdo3CVAXVsp9phTNKJaaN1nGBKnyQW8qTip9q",
  "key45": "EvJCNFmVqMjZTgDGgR6XfCVdauv973dmcaSANkqTwBZdS4MmQZANXXsJrRmzLk4UqjNrn1pM3s6wdLRuV7uA5XY",
  "key46": "3abSu64rtyKJxHqh4wqN4ssw1htmsRfaTjRmK1nkTzyiAspSd4HLp2QR8wzgPyNFb9S5PWicHgQmVoBDueGzsJYo",
  "key47": "33tBmgtAw5HQGxxwb1HuiBBY1e93rAxYmwaQmvrZKVVZ5TuzmJyrJ1wQ4KjopFYrcdAqRSo6guXz6RiwCacurAkH"
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
