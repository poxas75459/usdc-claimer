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
    "4reD1yZVuurti9zdhwK6UJUkxkG5DP3Fwpggzdkkdq9L4m4AB1kaEKKAMvmfhocFrSA4of7th8n2JTB2E3fErNnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B8t4nSftpH6Zvz3Cif7BgtSaaACjv3QZTRohpfVcC9ukY6vvfvMkfH3NzBo4rPAiRAymratrN8tHwXUQ6qXFwye",
  "key1": "Cd2zphiqvpHFx3mg4h9H1rMN4hTFHz2q3C98CvMCt8LNQvJ2SRUAkVNfiT53q4bSrjpSHbKeaEEpyjDTGiojr6v",
  "key2": "4NBvr3h5JL7D2Ey8Cofoxqveh8M1ENJ3tnF9HcvChNRhwz6ogHxfC5hdYcsCxDhKAtvtvQjvdfDmgfLjT9YHr95q",
  "key3": "V944QJUQG5AEtP8L9ojMuCCZEPBF3xPKMdqhJQmJCg53RyH1zwJR3LagRjJHwPU8HdddvrrgSHgkMcHdzbZWkzq",
  "key4": "5Fv2mcuffv7NCafTSictp5kWbKSsXHN87R78NDXgKop6hTUvqD8EHyBkEJwK1Dq2WtwLZzTYXj5iGfzJ7iRs2eVC",
  "key5": "bN5eaihShgUBvr4TU99Maav5PfhfHsuLrehiHei43LKL7d8HKge2WaYnNFfXMs5ydi86D9dvF6GZALPFj7j9rGT",
  "key6": "5i1rkP7Z8XLHcYyZNrCfuaZh17Vitxuu6hx1ARqJgQCUPY7s1RMW9KYY57SCUEmCtmprXRw39etckrfyx36GfyRB",
  "key7": "fBeKkv945f5GL9aqyrpU2AZzyygGeRhNzpgDkEqjr3uk35XS5P9xdaY9c7PGQDQ5UvkTzo3sWeSFkkcCNZZHNpB",
  "key8": "3xjgdG6SwKFHrLgL4i2PbUAVRqW1XfwH4Qukzvvxn2t6MJg1Dug1QhaysqgyTqUzyeLTs493n1Ev7FxV6EvSQdYq",
  "key9": "4wTNmMXFg5pEnQLUjjkqBrtVWJekwiSCooSYgePSMH8ws7JxSbUc2pgnnpVekmwx63wS9k84WMmVB2xZJW5Gu11e",
  "key10": "65uCJ6nbpF7Pi9k2dupn68H6oNjaVwyvbtmHk6ZLidymniTG84TZPeWhT1xebDgzdepCpappePvBLm8BNrsENhFP",
  "key11": "2zvueGo6Wk7zpVBJs21KLxYhaQ7hdydLMtsdPmhihkXjJywzdQY2Bx4i3675W6TiFhftpShpv5jjq7pA1HAiacM3",
  "key12": "3V88T9vVTyafxEviGz2LwXbAUcccNDL4DLhWUTwTvXBZghZ31HZKgPNUQJfEcCqWwzq1cjoXoL2VeF2cFdWatj5T",
  "key13": "3Fz2kLLpn3WYD9NxZiFcqCQ6JfT3A2EdDKmmcb3AWAoVjszuC4MiBqwnBbpJBLFw2uhUdPVS3w2vT1JGffbLkSzD",
  "key14": "jt7tEPuRG7BD7Zng9CjhptZ2kbrUqTdzZ28HWia2e2R9TbnNnbiXpZxpq3eGxwuo1RiPNf5YpmPk4wTKx6gWp2a",
  "key15": "2EGiXzBf54DQKBcSiin1EqHY8bDWoJpMVGVQZxm4gBTGNUjrcDgm9xJzjx9i2iT67VtqoTSyiKyK4erwnRqhHyXw",
  "key16": "GDxccMEhmCt4JZTPzrv5gLAhd4NyDTng4LqsybmRF5ftrdZX5pGkAp2oS4fk6m92AMkn4RHTWq2KwRGL4NZx8X8",
  "key17": "2BQWCTkFf7PSf2PAynJ6nijB639sWaasGbaaFZBPeSKKGsPqdu7cvE4RBbfEeTQVdrgBYxk8Wb1HcfRQp8oGGoyS",
  "key18": "w7PADGuvLq6kc3N52NW7jYqkZenYFt7ZJf6uKSWRJWHwYPsHzJGjaommaiHANZtAowcC8dDbJzwgoEfJeaCVDgj",
  "key19": "1AMWNwAmP9dCKvDRQ5MKqNmoL22EEiNSNkuTnSLp19ZALYn9e3cJq6HyfQUT72pckG4T7f7qUn4iHpa3QDBzCQ9",
  "key20": "2nCSzDLXc41pGiGuq5NfVK8m4V7DaoHLAHEd4DuxBQdaPTnbP7akZxe1ZEbj4cNMumRXSnYwJPwEr8MkTVMB9Fj5",
  "key21": "4tYJuqaEB9bBJzQ7HZPuJN1WKkZLEHALUFgbSHvoP2s9TCNURGqio6eWehpRNgocxXwpUFM5TaB5i3znJ77xc3nd",
  "key22": "2jK3piK4tZb2vHoZtrxWVc6JVNjQmeo62LdmyUiTCto4q32JymLXVDzVYh4nxsA3MFzRT9nvbG5iw2Bw3CoeDiZW",
  "key23": "GQpetQHSyA2QetgCrSDQiEf3QyeL2Vvhbmw5nJskK881PMgkQCcpL3R3hoRXRxSBW7D8RFnKrfqgoUvPB6AEEpo",
  "key24": "5DVuEtma3eGBkeAjA7YaGo21hjnaUL6oqvd5UV3YPj2PTxXroEDt6iXTAVo1gj9Cr2LiXKdxcLWsXmdcQ1yhzp4s",
  "key25": "2gzEqyYhyXJFSTYHJ6ERhgqrH5FmB4QNzfSmDUwg8ZG6gXPxoxLhr91ivzspqgawPWTHgWJ9PYPWnUJNFcPt15DC",
  "key26": "4Cxjm6cW5zBHfs544wDXyJPaj7Z5Xw8RkSR47sUo3emz2VBpLVWRxJ4jDPGDLoj3Xy3tTPUCLLqJAbdcmZW2svqp",
  "key27": "483f3YqikXG6jLQWkKuA9pU9cFVjm1s2WFY1d8EQwNBm8H1fnsdwb5DmxviuQyjzikPbyb8zaAT4qsmsy7kJuB38",
  "key28": "5u3dr2XX9y6Hx7pKN1XdFamb44UTtq5LDMTkvrmUa8AgFv6HD6PA6cbSzFKSEYRzqr5uZsSdEVMTd9rtfLvuK4Z6",
  "key29": "3D4FGdWVtnCkSZUmqyLq5qqr3KSVaYt8aVXh6tTiq14QhuqraE6eJ1RqtrcXfkYamje89uyexR5NiBTB1DDYQQJP",
  "key30": "AkGDj9gPBBNFayoSvDhcPP1ZbqSj6wtxifbMaDjuqge4t45N7aXBgi3vnadZ2Ci8S75RnTo7LrV884EJRhWSCft",
  "key31": "3M6HDGc6gb4Det6EabYxi5NuCE3YEpLSuz3uLmuBqyBSfRf8XDedyLgUWnRRABhTXQc5covRdfBqK2RUdFdGCynd",
  "key32": "4M4DkiygmmT9ZfjFRXC9bW4afdhGHsijYLUWuAobnLABtnTBMV58Sqv4ZohvMBUU1HWJ9xF7KjjTSwWDmAnhdUbx",
  "key33": "4bxzar1i3X4Qcms1jH4jqjLtQouJcdUNPV5V3zKevginXCEi9syfAFHPJ3MWYv3P7NhJqfbXpb3McyGdA91uaEZR",
  "key34": "46RvoRYAwLz6EhXVHEq3mEbjGGQExiZaRLVkFdSs6PpuQKuGqDenKHMyaBEGSqaqCsGJtZcUnuwBnVADLAwo2x7p",
  "key35": "g9x9ccM5gXc9WcKgk8ad6AfHDm5VhcxRBQ3mpCCt8r9RMnnJcM8ZpnY7YxGkUeBpLh2iR4rGxTAbMfrubfDjXDn",
  "key36": "3vunfnUuFt1iFkGcdy3TMAwDLBn6H8dpyiG2zXt8Ujg8Tjg57EzBnimKABXDNapH8wmC5pcbAmTd7LeDomtZoy7s",
  "key37": "4Jv3SNFkvriLuTCnugK7Fy56PyaKnDhDaW7eiph3AAjFc2g7J3TVREGbq7k9C3xhXBcsmrJWUK8wVEau9Hz1ti1j",
  "key38": "5XGpMVwYLy9oX68GCLayJnZjsbYYyfFMrfjupBh12FcyWRJQMTWPxDskEk1t5yLCBZgZ3k4cCbfhjCjx2Xcx1btU",
  "key39": "og6PcnSs1zd7hg7Ad9YYrZSPouTLBGan4vhFuTi5QrUQnWNvr78A9LnKQLSiS4x8uvLrKoXqfZmfUCPMNmEFVTh",
  "key40": "3sDEa3kV9y4cmppYCUe8uEFgNkeDryPPJuMUyev4xS5ygS7WpPjNQxf4icW6xmCztGPvqbBS6oqcgM2C2JWdhWQ5",
  "key41": "4nQwj7RcZPTGf1cEC8RN9kTPaCJ48GzXzbpaVmpvzA7TYnxbZna9QHFvE2tte14Q4DL8tJAVR7kt35QH1tmVhgwb",
  "key42": "3N14C9EvvAyNpkgJdYiKdxc3QcQRyzMNmS7u5vvPKDbqxTtnu7336KgJCgxKqiAufrLmjydYro89VzoWXBkVytdR",
  "key43": "2UYPSCCt7UVBCz3t4pgodtzYfk35XCPRevDXMDikyWpSgAKQ3HVRgemuKkUYMNWsFf36ubgmXVLj6XGPLMpDhHt5",
  "key44": "YrvW8HtTqTX9PzDYVYhGWuKf73xoViXAZoTjWFvT72xftEexGnx6AzJv6qDJnkoHeTruYP4aBdZVQvr9Fb6bfT8"
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
