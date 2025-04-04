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
    "3LWxZAgmLFKffP7qDuXBbMPZxMHdeenrtuDrczHvDo4ZGDEia9mASREk1B5m1TRv9YBdfJHMSxUERCJc1zqzDPen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hme6cc5wbGuoKLJKJd3mKff3Q2z72E2WeaUFi78DfA3gemNbLAv5Qj8ZB3HGuKecR5SWrcLQd4aNZpDkyGFc45v",
  "key1": "4QJT5ph6oPPMc3yZQVhESwFrg62WqUGv6ef3BqrAKU2EEddQcDBgLYrymNPhSWkoot7A5vJui48XJAiqh3LuEnEU",
  "key2": "23T4JqLHtvRxifFEfXryPJcAnsWXQG618mdtSwPnCerRZrgMxhoUfse7tvAz8bttGtqFTtZAdpSHSKYseLhxSe7k",
  "key3": "45cjz6vwcE4tQhVQB4ANyH3n5qgAUBpaoLstVWMGfYp4cnGYo3nxGnewSzaAd4LUpvddmk2ELmNCCYHHNVfNcvrj",
  "key4": "359Yjs249j7QqYy4tv6oHvj2wifn8JzTCyUfr83JWyRcncV5bPBQEwgQb9e4KvcWPsxXHZiCM7sZZwT2J8ZwdPdr",
  "key5": "4hg5p2hDknceqJjc6CEd4TSdqFjXT4nasEbk377DWYH6igCGbXLhz5ZKJHH1d72WgEYYJxGGkvbJ7q7gCZCsns5T",
  "key6": "SCSydp1RymWC7GC5Ty1TMmV4qEbyGzz2oSGv4jRW1iXypTcCMbbGbZGNWoJ5Fd8Xt33vASFmfqKfZjTy3REAFEN",
  "key7": "5JMdmvv6R8LHsuNMisx6wLLZBjABE1hHzGC1t2K69TcXbwdf24zFHxpzxdLBwSURKfARhZxcfW4Lfsspd46Xveei",
  "key8": "2GovpTsrZm9kCAiWMfjGzq7hDaYThEEiS8DLwDwe6eFzWX7pcA78D8sASD3BNHbPkKmEa6wby6681jinFVX5sfeq",
  "key9": "3yBrWaD187ggWaqxxZgog6UYe2B8i3Zj4poFo2Tmvmgzx617ap36pnfHHaFtkskYepKofuND7cphrPDxrngr1T23",
  "key10": "cDeDMFfFqv4BSoSSchLuMrT2ZXxZKhxJ8oQWTKdBm6JKzb44KtHipbBbDjhm8HTqbY49K79AMNU9FgKP3VzFqkK",
  "key11": "tkgHmcH8bFCCzG4PyJioYDn4bDy9pkCYu5cJ9McyXZx3YP6yc9Tz4tYzs2FfacFn88UPbevopHGZ5yidSmphHSy",
  "key12": "4StiTQeyRcjqwGYaYEFwSVwgvKmVr58BqBTKp9Rg6TtpcCdLc8j9bDnJFXSqt12j9euQKST4kp3eWwChCxPHemYJ",
  "key13": "3U8y5w7kk7xeyZKoXEf7vJa7k22R9ahqWhYz8gQyyoKJZc2ih2TeK6jABNcvxmPStUfwYkivNfnooZo7njXzmMCm",
  "key14": "j9rzh7rGBXhoCQaKJdZ2gLrv5kuUH1BbYjcCGc6xdQFV89KgMJpcebetvF5UGUhHqjfBYR39hmZP8Hs1LY8URC4",
  "key15": "34RGjFV3hUx7CzGfvMBDNw2imKZYbNoUF9RcYM22vzKFWz7Pivfo6xdydXoZDXDC9P9WnZGAoJ2HLHEYSX46FdqS",
  "key16": "58ipdvAEi922pJCag1xPKe9gpZtz4HqJp8tks7RYStoAKArKhYNJA3ko3HbppzmFgMv4LqxW7nb1RcUXEWiP8WQs",
  "key17": "p5VUUDN2nkR3kPsEYU44T9HUDYmYSnmPEEXQoTNW3edt5P5aWSQ5Dw29sST9cUKwQVRsHwp8rAzX8D6yYsPiVcn",
  "key18": "5SQVMdBhuZdf3d6txg3hhnt6zj2hfPEJastNwynojncnBW9f52Tsjh9naAaBhhXT6Qy1T7WectKbCE2wTEdGMfd9",
  "key19": "481n73V8iR2nmkRY3p9NwSD8GZNbgnbamSpV9KTsMqxgbWoWiru2467tWX5s68x5TuVZ8Ngrss2iL9ZcAipYrSCo",
  "key20": "2qLCACGYTMHJQBoZeRyiHXZEiCH9nWzu5ZXjVnEg7wo1ooYKywtc7WZaYwHYk3JBC9XXQTSNMYNy1XbWijubTV8t",
  "key21": "41b2d3c2eiyprnqREihAy8zgbGaNde932sDuE4HazDPHyhmjUDfCpkAwn2nFE2Z4JJwWTSkhKYDCvyNox6YYJxve",
  "key22": "47qCBzagWLmUQvZzmzSbJnuEw7yJMHcqVCjC6v6mah6nXxED2tDjE5EcGb8Sgr21JRWmkP75Xeijh294Em43G1bh",
  "key23": "4m29VCPGNN2jVyjQd6abs243ckZcDsu3ZMLQyiwq7A6wgHZngaPQRidyqM8FXpauJ2GTGEdCGzPfT4cYbSbEaLjp",
  "key24": "5pRxCjhLHBqCdSzdAPgFw3MLmsJinHMSWXT6vYiysoWbe6FBq2W67tFRE3Ji5QbtFtqBiyvgNYgbBCXypU75zT9Y",
  "key25": "2GWjxsu1pFSwRveXkGPF8XTUHXk3btQKb6SAi4i3oCxDWr9oAqucHhisb5wfTfZX2e9vwNsmDweTPVx7yFjDTtVz",
  "key26": "5hupZheYmb5g2y2uV9xkGMvaANbQzgeFqEDzaFLkRj6As7tS81EEJfzhiHYxjbnjfny37X2fNkBx8R7owLkYWBpJ",
  "key27": "5CKMPYU9brhvr8LGt9jYz1eecjKVT5xxn6KPfSqoVqb5cSUcWH3urvyVUhPbKwWFnVrF3bZY6Pt44BpNQ94kbK7d",
  "key28": "3CdAfZh82vpU6DQzx5ZASUDXaGyMaKfG62yosZBbJj1RHD22isvaDFvrU8USXacUSA6iYYJdNDU2qtyWtZ2WxvW",
  "key29": "2z4jMhXc2WvzijQMWx9sxT198CvTa7C34kinpv5tUJyAr5HB9Joxxvofx7GnEh21Po8GB3BZEijjgjqGaNjuV4Qw",
  "key30": "ADQ4T27Y5Lmzeb47uVmCovSELMJhTxLdyxhb4iq4yNvgY6gwdRJjTjquuSfzFAnr9kF7NJLcxbJZpQT4a43tsGn",
  "key31": "d8QtEHeJH4rgTrVhct5XHjztfHLEUBqm8RWuDDpGuV3Y72EDSzVhtn7HWCnAPzPyjk5FnTTwxeUV1wjXopcxrDP",
  "key32": "5E5kE6bMMreDQZuyvRq3gp1sfmVGV1x4gS9Ebfe4SyXw4ePJCsLg41KHecHcEGj3ZuhNsDE4CzuBtBfX4vBryRi6",
  "key33": "5TZQCna7WuwrjCdnNQssSvZvfeXX6Z7aNy3myiLrYrqJ5nFuskeMVutkJZk78WjAksuoscjsNXUq24sQHuEshBzh",
  "key34": "4nF8pMDsZMX4L6feRaD2zwJ78hUYVvXed1GNRjsWjL3qmxQcREBv7B8xcq79Wn5GXVqEYep9UHfu7hEfhki4HH8p",
  "key35": "4GV5jC13aa5d99z3DNugwvvuewhGoX15wivCVFZqkW61guWYaS2PVc2xcktdZxJLxghjhmna3RYmqhXW435e3Jjd",
  "key36": "51ZCRQAUEbWiVQhkJz66Zz8VvSKqULnEyrweeDJWpGnga1xSqeNWArVWaUEniHpmNCLNT1owmKHGbytiDFSCF7q2",
  "key37": "3bRviUYubvSNTEuiBXxBL2kyr6YotKGG5ELYU3JhTbdfXSCf23qGVyCV7qaHPRFXRjrcWyVQ8rV6r7iEEfURCVps",
  "key38": "3iBVwh8tyxrGoU4TFPr9KvQwazqWo3kF8EDdgDmPd6E1LFpZVCQCQu3otxGnhkxVjD5Sipft1EdPwKouZb1VrrER",
  "key39": "2ymm9aZMGfJyZ6jWLLFP3wJ7zzkeCoqrDQFzvzaDEjkMJZgGdBNgdGWApvBcQVcTdSKZtVp1Hn45ecwvddm4rZBU",
  "key40": "2kDw9ckG6TVJFEvjRFFr5PKXX6SySCP6Bg5fS9fJ1tTqM22avaLehDUo22LGdfNQHaAe3e4QvzXjg5qxmgAXpkGH"
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
