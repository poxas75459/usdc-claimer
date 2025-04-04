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
    "9KUV4swJqp7GsyYs8vd5XZkkU9YvC5W1tJBuFWyry2nyD6pdB12gWG6uMH2gxoHHn9KRTyvZQQqrKVHo6NWYyzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52tmZWCug3DDJTGVhncta2yJav4JvSX7KxsTfTP3BN224akhkMv6ExkC73Va4muSdUD2JgD2me7JSdrSvFeMLqt2",
  "key1": "31hUMsvaH6CF3Y1Ea6BWbtnN5cWLJL5tymRJu6JqTbEztqZwv3CWcfJvu4dZjoD3BWGvXdsYJJBJ2Z8QWHyjiUGr",
  "key2": "26esJcLFsFcwdrY7Ttk17dPuxM9KKHZgXTu17i3yu4YmYWijY1hy8H3brfPELc4re7RQbysGWw9vyqCMjqa1KEFG",
  "key3": "4dfXedc27iz46SsrcZ9HCdPyr4bPm8gKdr3NZQVenZtisy42DRg8CAPCDuxn47vMB14yvR6NjzgnPsFbwoxvYj5n",
  "key4": "5GJx6QicU67zSyekeVNfSK1rzFnfjS75tZQJ9TunZeeNeofomj4dfF8a2WpLoBegWG9fB7SeM3MniDsAHwwhbw43",
  "key5": "5QHYV3W1VbTWcK4k7H2M2KC6e5W31n9yuyDH9CNYwNYtgG1aDogio3qsZ3zsUgieSoWbFvbuVqktddFKXWNwyQar",
  "key6": "2569Lqq5QhSmkDMw88KDcJZecqxLNMGaCiqjcErknSnBw5ujR6jcN9vEugjVn77rvcKDviLo6zZiAxDnSGDp3ejp",
  "key7": "55i4A58D7ngUtnrUmzMsYR4KzB6qM3eFMZ5dze7BXyWz1DMHDSySkdzhJa79LxjqwNHxPmBfSSYGRqEC6TwAuzCb",
  "key8": "2nK2Df2PQzGciWeb4TV2kc7UrJgRzQXnNRMQK4oErot9VxfpjdY1FLRxks5t3Gyv1YFUNBX79Affar8YQFX3D7R5",
  "key9": "32VKU8RAtujGqdtzJf5PdY5BSF9D5innD1RNhuydYNtWTGsNXuRQrT29jQgUSyYobyGNnuuKbaVU9FY5RLo54aLz",
  "key10": "2XZ6SVuvNFyF6ifLevQeZeEQCecMtuwSAxsLZPfrfPHpTc4DNQghbzueZCGbjEhX7Uz81i83NMFQ3VYF7JVdFd5v",
  "key11": "5YUoE58kKLXYMfBHWFdKqphxfRfh37h4bHBPSU5tL1CwpYUk6aoEwXcwJPTwwVeMAw9TmTacgczMX3uMjN8Cdsdn",
  "key12": "QUqLu7ytxxxJmszg1XTwvAS8CNiGWBaz6rddfPq79atVDxP5VpKGkdy5QZ1q6RPjdJVpPR44n1HtmRRTjZxGZmJ",
  "key13": "2xoRFNmevwhBn5uvaeNAsowsV95mZwDyabng4hnErYTH5gpv88iVSV8CkH9Z7fkbuKymA96Wz4EVWizHHD3hd66k",
  "key14": "3VuAWtYxxLN9qgKmXDG8ZikHsqasHEgTx5aXu65shue9cJMPLa2pfTrBo3E7fB12ewcd3MmAVfLbdVNQhHXuf3eX",
  "key15": "49xkhzFg4rYrQfL86hvY85ZyYcqKzjWgFZoomQD2SRLSHu9Df6mikYZSkMddK5og5wSJxE8WmCLWngnpV49KzD4L",
  "key16": "44kfu56eXo72mT3N7cdZJ7gG7GKFyS2UKTcuie2Ez86qhjERQ2zrpeDjVBUovVKTwu3zkkqJzebtXaKEZnrRMMyw",
  "key17": "NJL7iT82Q85dp889DtJpQYFtvqcdWnqNSUQTNaSYycvAs4PC9QrKqopecU1DroGmZSXWkwx6JQpYBoDder7JhYF",
  "key18": "59JRxz2P7ADPEGtuR4E2T8JBiio4iu3r4MiqnTVN8UPpNgwPa3hADASaDkpKDMKcrnTReXrertVwoVoVS6r8Pgh1",
  "key19": "5uSZfd7juEpPUdhiPxBxGMVgP6GCm7v4JEAYokap2CRzT58o6njRbb55q6YB3jUw6F5baBxUxp4TPPYzXHN9b7Hq",
  "key20": "4PsveT6Lnq4WNJfTj5cXJVpFGcnDD8K4PUNvxBpY9Wum57YuUvHprwRB3b6We51rbKHMWwPNPwQ9FbdbbiNgZ9xH",
  "key21": "3diU7L628JW5SYY7aRzWx4GJgXDrmYdF21rhf5jvCfNyvRZXNuqYMj249zvWrtjaTwEPAU1ZnUK6uHxHo2Na1v3V",
  "key22": "AmQGTrXzeGS4bz43ARBApCJ1tDc2hKuojhqhKXjVrtrs9otDUG4p88KcWgVd2pRXbUjJm6btieuHWrTQk3ZzCh3",
  "key23": "23tPFNQLEU2zLZy1T8wsHN8rVgp2KPKtARahW1nmDQxQRGyRGKTjmbiwt9CAzRMfBKEraeUg1He8kXqmYCEK13r9",
  "key24": "2MbM1wXprXydrz2DBz19hAvqT1tRtnN96donA2qnMsV1A1BNKiu2u2jKJvykT3CRxzYpiUW1DVfBTKPhe8JDwTYG",
  "key25": "2KKocVQLbuz6rNYcwm5123Msc1L9yz7JCjHStRUuXJniMfCPDmVGKU1kJXQqdamPJAcxUbN9bgJ2EHx3indLDwF1",
  "key26": "5xqs4xwayC1ygL3L6dt5tu8WbopMMyjQwv7Xv6ttCkdKMZotKaMBjaLwb9j6AF2YPfE5S18rWfxhvbWw6J1riucF",
  "key27": "5eaJ1PAiqRRpdpQxuB18DxXuaQ2TZixJqseHiaTPyKz5nEfvzjcZFKFTah2ArFL6yFzRztGmBbnpKPBCu4MtZevG",
  "key28": "31nLwx37WQMRrCV4DfjYmX7VxH6t1TTeMoh5sPtWdMwWnC9ZHer2CTzHJBTnHm2QdRrKxpp1nxscaqbbL6BXuM3u",
  "key29": "4wpGfAEH4zJr7Uh9rxE46NYup3P31dYBJGz1ZfSTtKxo18sBxYbNLeE5rFRpMkCne1E5GeXEryPZbyUwaypBJjbB",
  "key30": "VjLVcgZV2X86m2jbYvQDUXoXVPdgXAfXBnFLy3hyP6k9Wrm5TdxjLG99wZxcwvPuePRp1XN3f13cJ8MSDQ5g7UZ",
  "key31": "d92vBZkyuLppc5ZZWXyMaxBz8R9k9Lo5rcgYDuCsWjTswmYXrXw6QGtpVUAcvHQ699HyhE4gUxHxggRapkKTAuD",
  "key32": "4YeUTSrUejEunRficjbYFSmbpUGZS6d4tMovmhHeQZSLYekedMSpZ4YJ7bappf5YrnHZ3jBhmyFG6JDA94hSgoYc",
  "key33": "3RgaHSAsEWiFZAd9xLAEYKLUzWTu5XZyirE8m5e5NSaACqR3XAzSFqM1NPnVE5L2nowZA7BUJwnSV7TFkiu26eRj",
  "key34": "EB6jVrDg2QgwmPwtjf7wTwfUatBebngUswVamTLoLdHgwZRmQADM3KzuQ5i7FpcV4QysMDrxBfrAoxf8efJuMRL",
  "key35": "5gcRCWoi9fiiWzt6SDtVCfqPzjQV7v9UV8HJDcA8rnJ5BGWjCGHK9jy3TPv1etuMRsYUzKM34UNpgdnbzYLLc4Xo",
  "key36": "5go2vZSfWZwZfaBjuCPdV7k1ouWb6TPK94LunMEwhc1XJd4ezJy42vWDoJjLg4f1fkFvD3fnKU15f5LNjnSXBiN8",
  "key37": "5Ko786mw1DfoMyez1i6yLiXR3fYzQYL5oT9vEMFHcV3zfSxzWBPC9fVCdLDw2jwMCRCKhH7xPWfYGsqgUa4qj6M8",
  "key38": "3RrQDuDaHC8QSPRzRqYgAdy4Yw2cqMT19RAcBsqmadHD7rPnMXvoygveqfef9gyexNkDUQjbjpchr21MJxu3waX9",
  "key39": "4C4HvRiLTF7rFqMJw29W3Yu8gf1Qf4udGmrEnNtaZpFyyAb8LEi5oYLvbvKs51h8mJnTNiYSqCePZkaDWxdfCZiE",
  "key40": "37FbddeyrmdFMCrgSiJpnco9E6pDD4wdUWgWHYa1e5US9aQvVcpPdH9HBXgA5NFJhaWaAYyJo8tASY3PMuAqVnFV",
  "key41": "5sd5Ht7HmPsUSkCBRU5Wpw1HrkpErNDBfbJw3uKnyfTgmK5m3rAzvgzNr4P2w98xHL467p3n7TwFsYtyRpHeCuPz",
  "key42": "w7B3ieYXMSjWwYRVZALVVMAvV5tMaZ5YYc5fibPrrh3uA7a5KSyeFUEFtUKeztRExMf5Kb6vtpKRnUN9wpYcEDp"
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
