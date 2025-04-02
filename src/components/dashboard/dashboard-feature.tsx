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
    "2hNvVGwXZy8G5NUPUbrrr5rwCfVka3j7tQPorD42wsnLyAb6rY6qKHHctUucvLH7LDPZmaHYrmAsMZTE5YxwKfNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28LeHihvz2f1GXNruRZv3m2hjSjKoug8whLwtTrNUZ2p2evwjyn4X34Cjqz3PFJNm9mzmwm3ZeQUU5Wbr7xejpju",
  "key1": "2dZNxvb4Btsr4u2SssXJYpTYMVbUQ4kwxJG66SNJbL192NgGQgQtLAgUQyzGLL8T8RkKU9GCVR78quTjdaRnif42",
  "key2": "125Sada8WeCxYRSUHyrZw7pERjsW6sFMxjwTK4mpTLzopSNAV48YDHyoQgBDYcWfuS1pehG4WHQJf9zr7hB2mUNo",
  "key3": "5aJK88c8wbcNtCu81aLv6AkdQW4KSP3ymzM59aM68D2GG8yJmHtKTndqCRcvQHh8kuY9oVzHeJStLr5k7g6jC6Ln",
  "key4": "4B1BtmsHugQnbvqDfHiLFjvjKid1auYue25J229ua9wRpqnv1K9PnHxTB2tbuHyzyRMiLBRWjkub3nphYSAnFMm",
  "key5": "1JSigP6BCV4CgQLJFpAxWoButNR7o8Go64kG8T3hKjpaxRCBh53Jv46hm9LkNoz7EvJJxN8vTNXWvocP41TGx9t",
  "key6": "4kMf8AMn3GHGqcwzHsTiiwNWqg4YuXgChpqb6mCYBiTmwokvvnNmqpRfa5nQruXhgMDz1h6oYj3Gk6DERDxckTxc",
  "key7": "4Y8Us5eJPaRonf6pxh9Dt2SGo15zVfPpCyRRuwKG99YP4JmnkdL6pCxRHYEXD2SFM6mkycJ5HwFdoxWB9geJ1gNY",
  "key8": "49oiNo6wLVhdK82Sa5qDEgxadxXxLdUNrSBEMaxQ8Ath5EmVLvfgCYZkanNsS369GU65gucb8wPtUNHbHNkgxDoM",
  "key9": "pNYUpYmqAJbXPGDbaigF5jns347jF3ThG7T2z7XufyTWpKvwTd71iUgJYjZaEK94WrBW3ENrNigKYLLPX64cTmG",
  "key10": "4iEpLbAk8c2uhpgvoLVY2FDXqThRwoZFqqHTKe1FfWeoKsHrz3YDyA7FCYVdYZvuPEo44RctSJvbcfiwZheCH7AH",
  "key11": "skr3X7iLqDbqRGQahTS3eDgTSdrjVtNK8zJMsFwXJxXZcTHEe9Q7psQJtF5PVjcXsPFMUYe8eQ7f13dZekuuB18",
  "key12": "45Dh5eY3CWVkN5heardj9cTS5YNvTPT2MWsbM7oYQGPxgeEvVstajHrcBtfmhzMTwF3bU9kWvHJHHChD2bn1dJZx",
  "key13": "YNqT2YaqSwngt3GkBJyk4J3VGRMnuLAPiM6RojGnbgdBrJFZTwQT6P1vNACxBfLaWZk9aDj4LAXUPjfmT5A4x86",
  "key14": "1gxscmaCy1kAdcisvNoTWK5Y2GRmo25ev3A1pcFcm545QB9zeHGcbd2vaPASymK2FbKeLxDn9NBDEVq33exTv4a",
  "key15": "2EsAYD3p8nttnEw2S9HzzBG7g74ahyL44NXebAvgk9PvJMjYFtJAU27ut38HkjMigb6vCMH3gtoMamZY4VKuHtUR",
  "key16": "3irTB9xcpzSgzUsUJJnBMkpQZS361yXicD3rvKTpHxaNRLdkLvDD8e5bMzAvjDqqD4TWSfTUuJ71MUmxYn5aszJ2",
  "key17": "4kxWC52CAEPrh9ETbbyFvJL4EAU77BV3SR4rT3H8Kc9hBouB5R8xSNfMikCzc2YqhUoev5mpGhjo2RF2JLeFb74c",
  "key18": "5reVCHYejVRKpFK47SSgPWkywHrNgDNCRtCfHCcfPh6PHmhBgsBKqYxCtP86dk2Uqk6qwRGSEngLqk5Lptuq9q6p",
  "key19": "jAufmt9Vz6ZNtSfocf5hVtDJcVJFDjZv4gFHqHju6ZxMTHXjtgyVM4JwHCvGX1vMz1aKX8E2VZkZwnCcEF345YF",
  "key20": "2VVagxddRK5LGqeRadzA235ZC59yq9oAqTyhQDrWpfqJshaSweCYSE9x7Xua846iA5N2M2Y6Buuc64tvkEHKJa2",
  "key21": "QH88STvsFiPUa4M4vUWu8wR4Q5Lqw4UrYFuA5WvAAuxpHbXJhAbUkuiz1Qj1mE64r9RcYzwjxZc7LGw5D89E3gj",
  "key22": "2Y1dNSNU7o1ak1RHWmaj12uY7VLxeRQCuSjSWa8BTLcMAiRLVB7sJezk69x1rrKiQBkbLqPKSJnqVYsCykmHPvta",
  "key23": "ecPFehaYrWSqWY8VVyj5YTJW4QN3VNQqfcZWnLL6jhZqoWqxTzWiLCTofnpmidWgMW18U81UnEhUUdXoZ4VkJN8",
  "key24": "5jtyG1TENyrdM9VgssUk9s8NGLtZ9BRe5ozEk6m8wBo4xQkZU3ixqEZmb3wrLacZk6BreJ4ben6pYEjX5RXRXgRD",
  "key25": "igtK8dpUJAe77Lq9w4iyGrmtM1NtWkWsNPLWcYRRWYnvg8iavr4XvxPADUVjkztczXgHwp2oWwTdTqgZykmuegz",
  "key26": "5cHV2MRRuKbXZL5B98np1JHkiVYiByXBFh9ppMM6X2bqWhqZ6DAoNr4ewXfXQwVpAbH5rHfwSaK4S8LUjKqbNuc4",
  "key27": "5axA1msp1pkyr7N7nw2pi5TrsLk4ag6TByR7Ywqd2nHBSXA9dfTx4dNyeKYFykgThiWpJFp3zUag2y4d5KXR4Pkt",
  "key28": "24N5bSjwpKcGMDgTbz61uhEh8hgaPjEpYt4QqWiqANWaeLxmMRLhPC5eqtAbjJXM6xEWUoXh7MU2BW9s4YPMRvUX",
  "key29": "3kExEqLfBoZgwriyHp3eDVkdjNEHjBEUmvxFL1NCzYef5Leqg64jSpqJuSq1dC5mMHTDHqPtsHt2p6GBAkpwEtqU",
  "key30": "58xLFzGDrcGYPMuW9furLDhEcRaA2pmed6dCEPsbAmXFvCTCFX8M4Xe2S5LLTfK3L4Znmhe67xpcSjpDBPRSPiv5",
  "key31": "3wf5cS9qYYGVNTNdz6SYZTcRuTiB6P96FSpAE8SW5duPbL4nawyciAaUKqst7LwMH8EL4r4nntpusCVuQghL6UVG",
  "key32": "2smGE2NtVaoYiRYLDCKEEuTLhGR4RfMAHNpYkwtNbwgXnXARCxzDuXTuFAQBwBrEcu9QZB9Q2LPctH71KgJTfZwN",
  "key33": "5Zn6Yfuq4UxkHYpLbKUnZjmzqk35nG2CipGYpniPGxWVD1na9T1GkMEqjFeffQtBEAVTf7ySqTUSnQk7vRf38TFj",
  "key34": "3D4gHiQ8qNXHniQe38UkdqZnRFXzbTp2jtJG1VTLmhSdK7GZTGivr9uBRGKq7HB4oWe1tZqzKS1dqu4d3kuevxuw",
  "key35": "35GBNiSsD6UhR7XC7Evdp1d5rNjfc55gKAkoaNyC7T1YrfQAZocQu8Q3KpQ268rLPqV2kAUXm2sKtgtavRtA4t2x",
  "key36": "2pWFsQ6H8BfD6SGVsV8MNLo6juu7H9Rqj3ZzKsEKDvr77bFQrPctjMG8xURh9CvJ6uXy2884zzfZCjpbhWY18gv4",
  "key37": "NGLXAEhpdJg5Hq5M3gaeEqNo8RQfmkhtwb4Rgi6h7eFatPTzBGGeQ9EG9PQmHxZBB3BQcTbUYcB7u4T123dyHRo",
  "key38": "494Bbqyso7zTyVmgwUZAhwhcQ2RAppHfTkbcPTZeyF2e1tJf5qQSUAW8AirHTxzbHok7dCsW5DczMxHsxVUEQzLP",
  "key39": "28wgCPnTsgsUqnUpEtVkHvxS1XvAX2Y3ghEvFMvfr4hxf7WDmxSptqr58Azb6eFeJ2mjfG9CekFmjbTP7RBJcLGx",
  "key40": "3ACNQDvkNHVqhevZJhmVsUdUvuK747UKH8vfCCykSp4iVCdtjSkRAiB7tA4twjcEjEwj7b2REnbyeVjbYWFkjkef",
  "key41": "4dKGy93WTKufLMYWZrhsb14GQE19puN6ztBHTLus9M45PoEXAnP92hU9pa5454cTBmqVAsTX8ReTXo9cE2GCADKS",
  "key42": "3hhbzjT43D7rsGSjkUvWxFBA5ynTy7a81KVTAoCu1tDfDawCgee9epnZakGbL7KfD7ekZtz6HpRgExxhEBTGcvwH",
  "key43": "2cigyUZwvQDx9R2BV4zLHfDfqo7oKKvrU9Y2ScdGRLLeLaBE5QtysiVknnCsQShndZrUQiH5pdoYvGnwz9VBDpcL",
  "key44": "47KEDKxd7bYNhvLPkPb2NxBETfkdjZtLXFjw2tow6hvQz9q7DNB3QQhyAB2nwV1XEfKzUj175gNraBaVfnQyCSEc",
  "key45": "2AQ6bq8ggCUBPYQvDvg4JPZ5DYJfCdRJToZZxGgJRfA24R7EDzVPvULoxbPv5HCeEgbDpCS1EnuNAVNN4GFCwUqr"
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
