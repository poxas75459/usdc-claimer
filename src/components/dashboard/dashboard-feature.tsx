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
    "44WoXht1gGJkrbYuCpt6r7T1gz6PQeYVBtDDn96ZsCGtZqEcidEGgVQeWZQsPV6QSbpg66ScqF791SyGaP3VjqgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rVS1PnFScFgBdRvPHyEWQwYEDemDbS4iLCXiWPmbFP7FqzxFN2gNF9jKVn23WTTDaqGz4MaF3J4VFwR1jpfRnTr",
  "key1": "2snk2tMtSc8DChCNrSQLAQSfvW3cZhg3bMRrBBdFbEnA4sCrfzNjGaZJ8DKo83kPK2JUS5Cq5nSaHGGQTQqpncxw",
  "key2": "3i9kMsq5ZnN8NYESeDd752cgtmPFd7Dfzf577VFC2f4ogABak8ByjjwAGgcwPSDLPhNniKCeLi6yyXW1YD2He9Fq",
  "key3": "4T8NK7NedUZZgsaYtotghUJXHoWjTEEh7ntc1yeayvKMyKyfDhBmYX237EygxRGtPA4tcEmXJqNTov1aYbeDxtzf",
  "key4": "3SNHMpXKpy4cEJmVDczb8Doez9Xgdo5aqdRPFofRfQS2QxHosdSV78QNyf2x9jxSPXBMKcxjcZEpE7hqGZ8EZftK",
  "key5": "676WfNUnGuuPiS3eKmLANCMyRP5huANLTBVPQHkPsRyj7Sakh2hVDZYZY7s8RF8VTL1RPqGxtELdBGfhcoQRdxLA",
  "key6": "3hw8ruirzySMM6nukDde7nBBtJnAefi1SH4s6SQREe7HSGGhuCQT9Zkzph7uuUEzA6DcnvBj32EbWo2RLFFdGQ8M",
  "key7": "62ZiRXmjS2hX1Hm2PL5aDYuq3tG7MdaPefKVGihPWNTMt8qqcuGog9RaXbn9tBRMFEvuP4y7c5i84doRDPzdeUUe",
  "key8": "4NHcAbKpRTLu9JbMSGKjSs25qjhpAZMbxCW7Hwfvd4g7AkrsjJ634VKjPFki2SwbitppA3aRiZmtbduwn2rp8eUH",
  "key9": "5Chrra6xPmHNwNtocRvoJBNC1Ce2YFJoqSVZ4kj16bGc5V7R7E2716TiZDJEuankBf9J7JJ9nf2FwxUx7qkg1StU",
  "key10": "HXWkJZeTRtbRtcdGRcnJssFYUuVctztE6ze1NfBqCcPGwVF2KWFnWkqwx9UzrmxhR1QUVSRjYSbvLjcrXgwXnvP",
  "key11": "RoV3kSS4WE9SoDwueHxEMtrJehFyXnZZRMEjfyqCY8X7Lh8V2cDkpaxfS5cbKYdmLrYEhLAHHtBonEK2EKQwAv3",
  "key12": "4KMdsxvaGGEnoFHDjft8jgLnon54ekjySaT6XDFXvRDDotkoHjMUzmfNWAjmLUgwW2mqFuUGu5bCx9htYyNL2wJ6",
  "key13": "4MmHCQrsgv5QaAUEB4K9apqBBjUUQ8Zdho6exEU5JRw1jjLFps2NWDJKANJpznT2mZC6tKHy79ycu79ZEXkkm3iS",
  "key14": "3SB2FDKNr3CeoWm797hKjSVwdeZda9PLwqkk7zumna9MtFERaYHw68jf3Hh2pvcxwBcuQiqPzL33UsqyLJpCN29j",
  "key15": "4pCvKhBhRCL9A2goJfS4pJ4sjPxFyM3syGjbdymJn1J3fr3vEEmCjR1HMLnXis4bMuejXU1GDzfBrbCT5Hyj29kf",
  "key16": "5JQxcj5XwpN7CQf9Ztve6QHNYbTTJwjwBSf9HCgw36wBCRELeusjrGtoA7j83nVzj3U8RFAFXdWDtZtZJPAxbYBV",
  "key17": "3FD2aMw53ESL2Pva3MYktiuhyVs3itA5WQ2oejnK4bKwEvDErdFmiM3zJK6wPkuTTjjyMsYHMZLj997XbzxYCHVL",
  "key18": "5FAUgS19mjUqA3nEXgKeQw4busP1ZPzEXVpfcFHfQUvtSkbi3UD1o3Sb3KX3vWrhHU3TKBYceuj9bo6gnr62iPMu",
  "key19": "4LNGfcrSBDMPrbdY9QKFB67j3y6NDQyGHG4vUSh7B4hCZjihVjDWwQiXWzVT3UkcAbcHkZGDHS1NGE2CAigaVHX1",
  "key20": "5Jd5E3idrPYerD6Pr8jxqCqPNhCcpTkb98WRfULdCL1gMKeNzwmpP8DZqT2cUqpS5B8NPHsFFTfvTn31EnHeNSyu",
  "key21": "5dURJUVHLmUaYYsFs78CbLu4HF9Nnjew9xCkojixbbhFfSJT5gj2YTxY7WyaGNL9jkWWYGxBiBwAYsN64BCegx64",
  "key22": "2LLCX2r3U6wRQ9oV65s4C4ZcuEySXF49qVQ5NFbRNupcS6fJVPCvLAaTWF2y6ksA9ra7Vj2AEDsrBBsyZBkYAGss",
  "key23": "442CkkSqW1qP5bDyBZUdafzyBQDukr7FGKVrUoWPRBSNBguHJ2aq5Gz5HEshQj1j87k3H91K6kw5a7mTAL3p4YZS",
  "key24": "3Mm9Y5d4ay4UCahxT3BBsrNcJbk5KbwNwx2KPfY5SL5FTzqtz89GRPSF4hwJGMLEdbX1Bh9ovaicBWUS6PuhrQLY",
  "key25": "4VdbiftTf1NYnFqztpfbcE9KbPtdLMZDjTVjwBwX6zRxLCNqpAEurGb9tiKp2k7es5GVFnqWdkp277JAYWvJuAwo",
  "key26": "5Fb5bkwTvpkHDANQwquhWtS9p4hmBji6FXJr4rZHXmWoTFXauwxAirioHj9vMKtSbx94qYD1ctKoeRDnxsF9BpXt",
  "key27": "4AmWBYtJ5oU1eGjfDdWra9QizYGrFnFoYyCiGHQh1YL4b5LNpH4cbnWBGnuvUrhhw7Hm9oiwCkZtSGGFawZXLE9q",
  "key28": "fRm17HRZY3Cc315Qx7nSHd3RmfRuY2F1yifEr8GXKRdf8gHfPQ1r8vriFuNmDzzpDBZ1djEuCvyG2KeRYsdNBYu",
  "key29": "3QvvxzazxAYhc32z2LivT1rbvmb3NqLBF7TMT2ZZYePaXNX95S2XsoEQDsCDLRGoUNW3dhdxNVPfBo3pGjgit3YG",
  "key30": "52QjJeFr3jsBdZEsTiApTxcxYn4pjSsNZSuZ2XELMwyzsjtR51nCPXB6qxxjaxhZT8m2xYZxVuKVGdxfAkM4fEP9",
  "key31": "3wNaBk3CYaPRATtRoPA9j4KQzLGjXnUd2gWqgxZstnNhU3oUjHxk1m3pUyXGN4mys5LW3ThGvMov8cfpj38UPN19",
  "key32": "4dDMZ2judbtTwGs5Pjgs5Fy2QqSj3ffUCffoonYyqTx2VZyWrerhAYNfzAxWUEN4eJLeMkuVUtsCfSZNxfDHv9oR",
  "key33": "5KXYc16kHyJQ3gfp6huFYpk1xTYW56nYPc47iKZmB1V4f8KQfxQbFFY4ARYLNcNqiUhFAN613GMg5pTjKhZvLR8T",
  "key34": "5N1GQ8mJsF8V6Y21mzzu1hZYmVkkEZtyL5kNaXfG9Z6gNzjvKFUwYv3yjQidp5KCuqaQV6u5yKgutYfewHBWT2uP",
  "key35": "2Q2Kh5zk4RfErM5MKFvuW2ci4H4F8T23PnJ9czCq75mjwnkDXTXYD82zZnPxRKCWzWQkvAvx7oHTco9JnbN5Fx3t",
  "key36": "3sevTqBqVMmrmA2BdG1Ff8GTZ5g5KsHydfY829uZtRWH7q78x5hk53q1Z7TsJCV9hSnH5KMMp37KDE4j3wDjQbE5",
  "key37": "5VuzB8miK1sVhTw1GJFDsTfeNb5iKnEQHVJAqNeowBzjvajAV7arPJVd8ADvkr7dPqMApaMtxqMUPZtCKZCYcnA1",
  "key38": "n6d5mGgi7Z5kC1TZTuFiFXuxFuS4dxNH2kBeWFUWjK8xxJnAjLUGaxDZ5wdJ3bMZUdqHkecKuUTMfjaHhYePKii",
  "key39": "2yL4Y6XLyznKh5bFsZMiKAppAa6TjGZkPMg4bgz6EWab93dqB2ndHc9HjPCM3jEvi4ajRG8ut8P13i4sUR78BNN4",
  "key40": "2t28DFSCo9BLcqpJDsUqfa8p3gt7myEavZ7ogemmZmFLzQxqzoEAcDT7W1U8T6yxjiRifSGhKzfdmHD4CuGZbBKq",
  "key41": "3bns6TvybcXk4TqEEfJxd7g3TX21aba76Xr7wBgw5mXQG9iCzYX5FGGSfEAXajK73Teuz1HypJqRuZ29d1AVNW7g",
  "key42": "2xZZkBtiLM7hmSJXoW3SQvz5DjBaN8HykP5nkbRBJcEbzyUtFyjdpwi2WTmgFDLhM5JWba4w5Lx1tSbNU5Ajdzsg",
  "key43": "HzPJyxYCAze3NataDXZeAA8GGZTGWZwzqDginGAA1kKD8NgArfgVkeBmTLtzfSdarF1t4dwSnwReUh3hezhdCEE",
  "key44": "zE5LtfP3HJr3a95nRCus627dXDhvBA4j1B3L2vS1dm9U9PmK5jj4WxwYnJMfZfhRcsciAMPN2dZkUJkhWJNwQgp",
  "key45": "56tDw6ZjFUT9X7R3cqRWR9uJpd3xvxdngbdKA5Dg2fqYhNc92cJ1owiCH356KRRTHZdggMiD9YXWX3WpPjXNg9Az",
  "key46": "5cynY3A2iYDRzx8yqLxv5bhTnyZ6aPTacLuXWUWXTiga3LKad51nbncii1dYJ3DE5Fu3Le3z1GDwSBdvG6vPFdV5",
  "key47": "2oSUNbNph5eghc6MNbKpfFXgvHaXg6wpRdrUVfFRBte92aoXdAuEj4FG25UM2bSHMfqDPJRXLmHY3VuaWVvt1Yp5"
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
