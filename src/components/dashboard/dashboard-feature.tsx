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
    "5T6MGwPm2begbKonrhKWobaqSAhe6UD3PBJievXfbsGNpn1jqprvxWwJUUGDsJf1GbPTHa6uJAxVbHTJifrrbd7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6433XmRJp1aYkrJ6wdsdbJeDC9QQwMNquBKyPNLm6djDdZyHqCXKZCX2A654AeapAprmt3G4gbUFGqbXBn8gbCS9",
  "key1": "3ZfAWb7W64TgFinv4FPoGvU8suAcQi77NL9Nd7vciuQFgtFf78PhBW6ztESBhP4YBMPDPAvqSfh5Eespd4z8bBJn",
  "key2": "514AcP2McsUBnmzzvk1EFfLxQj7WyeS4UpAQ7xsMPTnbq7KqS4aLWYNaxCkHZoHDW5y4jQkFK8eLFUEZe775F44R",
  "key3": "2VwrfDxUEpjxwRK2B7PdCNBdaWVfY29mdM86wXRhCk8CVVRYRkLFy3xDKzpBHtWmHWVrvGQqtDZqJ2tbkgozVfy3",
  "key4": "3m2Wg4AeQZULpryhob86kAjSrFrnR7towBKATu8bKnPQWxPQvu58dz62iNEWZTBH5dqkUwKGhZw1Yq5EPbUzJBeh",
  "key5": "fWXmHAPW7gRzPMh5Xbj4mBvKo7VZnk4TXcjwB32dCvBC3d3AcmomXL4kpin5uMVmQXx9B2AWGyW4noZdGtY81cd",
  "key6": "64VAV4ezqxkMKbEkyVcSQ3UuXZcLLN6jo9XKWnmPRAtNcBspmeodCACWtaoDiJX9kh1AHrzohSMMFR3DpmKmFC8f",
  "key7": "5WYvhhrjuimzgg3KbY3ppbxb3Zebsz29BnUzSp2xjhdkH7sKoiFxKSNhS5pqRZw86RSg6UmfbW7vqvpJDSYWyEBE",
  "key8": "23BNyyqBUBVi2pbWzpdC2WTzYGHSurGXi4i1Yo9pgtqheWz3fMfpmm2MYaeWvpSGi1cbJqoA41xE8oRWE5xYNf5n",
  "key9": "4Vce7ihZSv2EUgBxosUZZ5j6ftS9kXNnRJREKoowEGcN7z8trTQadKzMJNV6sEjqEZWmA1yjtAsaHPsG48t7PHsn",
  "key10": "P3Nh8g8VBxeoJtHDVnt8nLJvzSFAtA8Q48nR79Wc5kQh6EqUaZHvrmicYA5fbGCkwb8SGkNSProaQgJa6Ambq8R",
  "key11": "3e2ByAuK5AQDwRfmTcgtgSBJCY4VLDTBPLjqLrEDBe4mKw7ioRA7umwEMdKsvX3rcgoFixjDFyRUzwuNSb48fCZ6",
  "key12": "5zsNsot3vGhdc9dSiBVyESxt4ySDfeZnGQcqnkJL62F7N7Fue7QiagrKwohWkaJVndkrretUofmSBtmoFxAtHWAK",
  "key13": "2zxYyqafsZBN1q2h8Rct4ipBw3vKHQekaaYcDE7A4j5eDtUFW4KvWh8ySUdrVYLhahbuFukxWEcshjk2zXm8NcAb",
  "key14": "2p2x2hU8H1LvRvzGx264cLp5xbvFjM78zAtSfCYc153yjDVG38GxT4wTNFskD6w7zEyhQfL1pAoqUe5GYVRrtJsi",
  "key15": "2CpXBX5KLxAHsNGtXiWK48zB5oQpgT93ePLiTGEdW1BDXivv6GwGVhVDNzaJdtDZovQMx7dRBhwL6M5dPPp2me7p",
  "key16": "Nt7nyanQKEo4Z7djTiDB7HjMwXddtpRC2xqTz8xG2XUYg3eVDduCmLRDfRzu8NFJGmXnsDgf5SJW4x9pYe1JEWi",
  "key17": "qhMEB8Bv1x9W1CFpeparN7Z9BJiqNgfdb9yZ5qpsgRpXgRpVadkWjtEXBjFXA7n6aJ9wneJs6auUfVDtaE61s7W",
  "key18": "4D3brwFoUD6zZBstWfgAPVcb1wiXKfdEvuVKNx6Va6WRgbEF7WywnVfugAD6cqcwBNN7P45xjhm3tzk5yVhSMBBM",
  "key19": "EDPgssZGeRYTNHHYHt5JADGFZD41U4aSGtRe5qHfqHyFhzaXMsXGGELTHHMoyAH7EhxJXpP3CcAS3Ts1dYZ861w",
  "key20": "37vscXhDxqwZuhU6k1MTStps4YRFpiKc4FRTgoVR6wA1JayYvCgmwhdEuppdferiga1TQ6mYptoySq1ubHGMpwWu",
  "key21": "32FbD24RffHgSfZRNZX8X4UxgnmHUj66odyjtJp3gVqQ9iapmaeNv7CoSEqw1im4UDYfryJgfi9joUEV2yaVVk9f",
  "key22": "5J9B5Q8PbVJkuspWcEeMXKcvNMMa6YhBi9cS4epKkfQynwZsEUjnFPpzzr9sjGAhhqvTSe1ZPf591c516fop29zm",
  "key23": "52xGeG8SoZf5eEVvm44XCynRKAV87uRSamdtvjgMi4Vut1piPC2YFcuu3KMbUwirtjJVuuDW8M2aXMEd9SYh6ZrJ",
  "key24": "2oUCKxv8kDdYktvJrJ9c63nqg4baYQnoMC1ViyK7DN8i7U6omFdneaSBuSrytww2gG24vVBLsNgrSnZPd2G3Ruph",
  "key25": "3NDyhhczW7qz5xCkPhF7MWqcTtrzStLuZXruKpntfjdkWWd9gfCoEhcyBNeN8A96Y7aNdRRkEFRNR6XX91wGzJAA",
  "key26": "4bmVFLryNwAXMkXzJzF6pBCzLWCs5en7ruUoxsXcXwTt7oBvVcpbj2QwvubxeWkqXBd8j2Z7i63G8e2KDBmPCWiD",
  "key27": "2JuArYH3N8rTRUbRwtPfa9jUaJSqLHpVXGMVGZU3JvcBpk9vPsvvZqUTXCH3JosTm3MqKuJn9NcwLiMHAgyPQhG9",
  "key28": "4V6KutWXuivMPjp8cQs2sgCqzby5BBCTyVr2c9R7G4jTXAqEHodH937fBt8wnDP4wRzwRZYS9cDxnFcSnbQg4Z2U",
  "key29": "4vJCzpqSuAfk8uCr6ufMJcY2Ajg137pnAftEPw3ShW5tcxdP6fRVH1G7MocXc5UC6TPSL54g3DwyBsXhdt669v3t",
  "key30": "3yUnUZ8DGCNJ7JLV9MikEP1hygteimYvqVFMBhTKYQenMfpUA6hqWfBMDxN5ncyroX1ZTHcs7fPfbY7isAZNMjuz",
  "key31": "2P8D6gC7gZt5rTQtPPxk7Xf6Fpki9DA9C6GvcaXmAZFsA7KwhK46rDdFDBc1ry6uag7rtQV9LXcpUdgNodRow1LR",
  "key32": "2rz4prA8K4qQy6F55QGvWtVo1JxwUmpdcVVPV599kb2U5eK23MKZg1iwypoQUch4qsoMLCHMT3U5KQz8hyDLgF2N",
  "key33": "qKsATB5qoB6t3VYWRU7TN9C5pjqY1PsmPABKc4np762wi74thLp87KS4H2fiP2ZsNqhfy1RMURNrAbjrCMoZnEA",
  "key34": "49LaSZqppXNsEq4tmygpA5UL3X4t9ebhimrcVTxKizNpwK9u2kmCpX4pRWUX6SACHEoRQrg18pGueJL2JVcFe3VW",
  "key35": "2feTM6tvzh17V9jGp1AeptQA7XVF5MNoCXtX56yvueVXNrnKBi4DGT9j7evS473HMKu1KLFdw4kguneuXG5ELFsp",
  "key36": "4KbctZCSRZq8EDAWWGZxn37mQqjt8djdGWadQRY7DeRdqcDt9NLfoLQfz39qXTTDoSyV9pMPY89ruTpidniA9keV",
  "key37": "2ZzWDUFGtGDaUfg6GcHL65Xq5V2vaK5YtvoTz42UAgTfJfZrhb1U442CEWyijkMFNb1huwS9xMBRxEU85FsEkicb",
  "key38": "3jJUKhTo7dD2yz28EoEjeXHXzFZLhRUwSvZYBWekLtWiDLWQvBhYakZY2sH1pNkz6PeoisEu7Jq2Ca3HJa7PgqX2",
  "key39": "5vqDAq5n75SNoFX9DFvHXPT2F2yM2c6Lu4AmwVB1tXtpiGWki2VJUeWzxzhaYbWp4w9TzvryBEee3S29SntFZfD7",
  "key40": "4D6pwGdd1FWuetYSccWiNkDvCeXzeYqDM6hkEY6e4uFtFmrPebGVoRMhWqwW5HAz1kX1NGomyY7uGMbQbFfpZ889",
  "key41": "2sj3otgMWJsz1sPTtk4p28NzMCk8gWvgPdcAAsYC15VM8wYaiGkkedougi5yYkHwkid7EwHMTMvYKXw1LATXWfcG",
  "key42": "4abd2kQFxb6zf35TqUT8unUPChe6n1Zi7e3GteXMLGN6YNuGPqyjhRTTybfMy7yruHHoxUeoHsMXDJ8PFqULkGSo",
  "key43": "48CdaPDHbgSip9gDGt2XfuP4eHPEZMawtMy8kDjaUhVBLgCpSrAGD6fLQr7dHXJQjcLBpTfVykVnpKVgGxq7WRHH"
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
