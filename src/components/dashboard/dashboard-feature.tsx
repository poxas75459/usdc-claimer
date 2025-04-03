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
    "5p9EcgMocctD2CFRJ6WGS1L6SpBuo5fUnJroWFMnT4uqbsQbbG2tjbDB5HQdEWP1SgteYjrtUnadWZ5nZkzJZWbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r66Kg8mxvwEMz7Q5M1j8d3qPS2wCRXG9t32yEYFmWGpXcyx3Gd2t6sQFg84PUa6E6CS4646GmwB8Y4bL4bGsvDH",
  "key1": "3oGuvf8PuuyAUME9YRvJ7eZAZzRdhdGbWHzU8un9fXeyFftFeUbc78kZPDcqWp2RqB5weC6pfHpiCFPxqkUsmXV",
  "key2": "4uTwtKePCd6fGB4m36wVwHWiEEzV3oAgRw3FE3kxDvZx3q2rXVJzKZ4YRiuVDNfwqcLRLW4DVQq5XRnVJBaZH8Yu",
  "key3": "4Z7vjL5c4U3D2uzPiqYQTVtqdaqimKWCFCMWd45XnPb959kHBt5ep1YBZPaDsQFFo8msH4bSX8tZ9LvNQkbfBazA",
  "key4": "4HP5pt6WNj8nFUwKc9zW62CfNmBijeNUZjJoYsEGcChHoqu6qhNZ29p55qYHsithg48cRBa1ENenJoAKjUfzMvDn",
  "key5": "33ArMTMV9aGMbqush9dA77Hao4njBhZd6nvypdumkwu72csv2ERhSDaPXVcnF76hhZgvFEQH7pf2ciQahMg1VVbK",
  "key6": "4LxDchT2sBWuAWUkqHiVd4A1Uwp1SxadKj6aKpX1rmqMrcPS2jse3cxbe5n2n44CmcXQCbjFRLqaUtC4Kvp6XrfE",
  "key7": "2NULqQyH9kLVwGB6cUF4wYLipeVT6nSba1JoZECHTyLhLL4XWVMFErUk577Pa6dFk3pQVvi8KXqLRmDgQ1CGVXZr",
  "key8": "3NMSnd6ARgdnzxFTX1YdYxLikJ6mGgbrBbhh5ruLKExNf7dhNVkMsoLwSBgeQuRL3ZjMAFBuD1LDnJgwKWHbTzWA",
  "key9": "29ipWCKnArAig7EGkeWteKVSZ7xmiz9qVVVAKMMvyAnMpZauFsJM82BdVhKfXfLfZ2tJbv7g4GG8VLbtPhkpAPq6",
  "key10": "5DRbuLo6DrQBbCSE6xC2fuvLSneLNN9PkcaQZrtEF2GeXAcgJgWrgGZwikYFALpiQNxjkcgurQc11MSrG26rxU1v",
  "key11": "5nsf7fn3PAhYkSTYM1xrS3Yqs1MZuD4TSWKkk8Gr6SCN1rSKi5MrvBPqRyS1aLLJjbEXiURn3pVMv3MfxXdfdRkW",
  "key12": "TNwRC7o6pd96i7fi7oxETSvP6GLTLQwVcMet1xnYJYwQz8jsMtar3C1FB8ZDf3Jy5D4sKnV1RUPFQwkjuM7ZweZ",
  "key13": "4nB6AHGVorNxQfVVuaPTgFbA4xo5kU1pw1yS1CysPAbDhodbuVTuNvxBKMGX3MSRLRUnwMvminUuJ3eK41NAGGDt",
  "key14": "xyZvMBeSE3ZtSz3i66oE7RooQZa1UVDRqwqdZck38dGjJzNMW4sY9yKUP3vDWLrsSrmVAZaBuGVRfyzDDD4KMyH",
  "key15": "3KVqGE2kYfMnvSjBjGJ3dHGL99H9RsLm2xkJRgbKbES5pstjiRjMkLaPAXCa2yDGRYm5ywJsCE5vEnrzoVP8m5m1",
  "key16": "1MmFoQTi9JPPHCFxAEauwoG4TPuh87cns2jrxHvonriH49DGydNaPkNFWKzGqeSQMvsRn1zaKBLTvnU2ZoABWJh",
  "key17": "GYx5s1vBmTG54ToTMLXx6kH9CX1a95P7zDjcqQoPhkdn1vjigJWib3oozHGLshi5KuW7RcJV252R4EweWsBsceZ",
  "key18": "3EAqoQ2oV96WimKhS1ugvpZW18d7MaKshsiBdQsxjVekBYRdWL5jZPzfHHwLPb7r34y2e9aCvqnLqFgb9xBdtEdk",
  "key19": "3H4fTqjFCe8HQQ11FtSJVJvWzc39HvuUHLychzrGz3iToRt3Fvk2QLYLQ6t93LX5R4sdtpKTM2usd7Qbb8tW2gnw",
  "key20": "bNRsYSjRAb2gh3T7UVyzj2mo7z9y33TH5LcbTAEDwGwkNpnVUdKmCiFJsuUAoF8ALJNX6eqDSR6oit7sNiYJD46",
  "key21": "5kjeV2WnrZcuKjTp8acUJJzU3gEuH59RnJjQyXQJTQwmFsVPH6juZsRJPhubA3VCj6XE4BS3b95hZmyo88aV41iG",
  "key22": "46NK2ENQZGAob8wDYawn82xHVt6X2ny7ybjpCT8cANdw71V7XPGjGeKdSvh8DNGvuTCwC6qWQJRRSMKyN9npcycm",
  "key23": "21qpY5B5z4pXPvrztUmBmNjsjCjQcMPHX6R4DnbfXZBgCZFskyyUczYp2HbfGBFcnoZtYDM8W3F6AErT4PhrRPj8",
  "key24": "4qaMfS74pgrEyV1Y2qi7nGNhokmN5r9K78tPtxzw8qen4N567GpJNDFFWpe9EdMPYZJf6E83TGnuWAbHRv4SAPg5",
  "key25": "2s4aQyyfPWyPRB126oBcx8ydvfP9NzzKMjciSWRdQHJ2fn5N9v3r45cbuuz3wBVfVVcDjwfKmPtSgMZSZ49QjUJX",
  "key26": "NWCtK8D68SQrgLAWmpD43oigoCcmL3zoce5nUvoxVEYT5cdRAUQ33EkDUvUkEqKphAaZtgS9xiFX963CnVquSw2",
  "key27": "2EW1NfzsewEnWBYxPbtHKEQstbAeV92vZokAVgmxTZRnvx6U4o6nDzJUYAYhwrGYBE6gMfpxzXfVEjK83LSceqbQ",
  "key28": "5fg3Qv8yc91yBXyLBJwbWXUBSnyWXS7qBw65UzizX17iA6A3DE2SM2gkd6V4Fen41NTAZ2LPMfyNiVdGLHnitrJu",
  "key29": "2ZBbKxdufmhxmN1aMzntj6qLXXxA9GcP9MYSXyPe5z1c75bFfDAVCZFExQWJhRFhhUQytznQAb5ubrNsXgRdQNa4",
  "key30": "4Ad2puNVkDdA7mM1V3RBPeuGMrAmmeMmbzB5B5Zw1uBaN2qXh8iivCdtnZDdkqwFH9vwqpFsT9ANi5qhjKhv9bWS",
  "key31": "3YVzbQE7vhJQm3eoPmFwW92pVhTsRZN8MqBHbKeF59aTFP3SvyHkAif73xjJafyU3bcwiX6feCz9Ljj1xhc4tV4J",
  "key32": "2FbsKvB5fULUKnAnA96auQj5aiAJnRP4Q6m9T22d9FmuYkRQd1E5z1i1WLFzpajXTKcpcmFqHt5ATQoij4EDhxFF",
  "key33": "21cjMaPyCH9TQp3LxPBSiHt7rNmv86rJd9HnSxF4TgQ6Mdx2zyWs1D3aQ3TkwXbHCANeMFLGaCG8i9iztxS3Gi6p",
  "key34": "SLB1nqkxTvyvujKm9d9WqMXuJ3FuNhAJbyFwoBB4Nuqvz4wK6AQjKWDmndUCvtPwTg2rjxARmqUGSm2jDCE9Bx2",
  "key35": "4m1UrG8dPrv7YaV2QkN2VePzkDPsCYr3ohdsUGhWc7hTzZfrzh3ycQ8AjC2uhYukvcGB9Z9WDX1hVVTr11CbkPna",
  "key36": "3T73nUhhtXZkFdjvQQkagoDnZ6jnF9vK3zH9LYCM77peSnmzeMFtLDgUQdNWx3qZdZQTKnDFGA2b8iDkdmbA2G3Q",
  "key37": "466uDdDsTT3iDKkvhm4cKRcKhSPdMg5EwAe3dhxWxkaMSCWpfPj3v5qw1Qn6ALBB554nktcnume7qyeaNTysBQjJ",
  "key38": "5iexeWVykra7sVLD9m3x4vWQHmLBKBBof7HNaRNfmYzwFT62R6to2fnEGvPWJqozaxmzYMuV9b4suZSYcVmVjtCN",
  "key39": "bxeA43MQVUx7hgb65XFzTe5RGPw9DtzLJjhLxKcZ2mmDWit82MAu7ZBDDjjZV7PuZs7qQagJdXhhBx7xMcPxVyE",
  "key40": "54HC6zUU8PZvqMQbUKsvk5db5Q4EXK1McFKqj9K3RkzkFT7ZvSKCSYEUHFL2ehW4gfCNu3aLXHWZocerc2me3meq",
  "key41": "2ueZ6Qf9jcLMugpG4xDVzuey71gq6sMNMxU3JFLGtthxPGVHitBTwCPvqcevvTjaddKJnikyk9iHEc4WHrHHTEXe",
  "key42": "21ToBGqYLpQyFkZFNxwSDjEasYj6bZjR16fbhTpypETikfwDAjd8H1fYTbF6Uyo94uFhJYGhep73UUNK2g5coMPt",
  "key43": "V36Y1mCJuTTTZbPwUe78LXJhDutMiD6n1QECqpiNd6MzUYtvJAqPw1DSR3VtTvxZepiCPE8jJmdP8shwmDyGD8r",
  "key44": "gmLS872piD7P7zjZkoSPq9RVdpgAbDtb7KFrcKzej9PrsVRQiebqB1nikPSizZkuqXN82EqTJeoxEmaFfT7kNxs",
  "key45": "wU5G9o7jsptrb8EUYFZ5HjyW75993XPvARb2xZ2o1uoPh36fJyPep2cTeZ1MfHEPm7ETv21U3Wh4PrTZkkT91oL",
  "key46": "5cWkytNjjGLf7p43qSCU4RdJ9SUSxBW7GL9kAX7iLvQ4gZPCC3MWWt8ijs7y3ixjSr12bB5DezHkSxYZvss54eT1",
  "key47": "3GusDNJZbobEuU5FKes6rY9o2gFbeyUVNnMbFLfC2DzzE2251PtsYSqRYABzgETv7pEepxv6qbPa3n3AcAYyxQD4",
  "key48": "5cTKd3nge771HsSsKyg3aqrs8wLkYgWCPZ8MPWiuWHcZn49q1zsQjJPgkrGKhcFLtJrbNKDyVpst2MLjbhWdGBc4",
  "key49": "642B7zKSD7PNVyzyZajVBUMViGbxwLqjuTznLC2pgk4UwbzsMKfbitK6EN1dgRc5aXcdk4XMtmANuskc8ayZkHyE"
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
