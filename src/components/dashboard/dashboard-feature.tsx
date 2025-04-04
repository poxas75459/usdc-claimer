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
    "eVactjo78H9DJfQHi11bvU9adwu4jKM2nhvsn7hczkB7W15MGzzPRC62FXdJ52rXuDosKexFtzQng7G1d4k2SGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ny7TkTURNwcjrrbwaF5p7BntFBwjetPJkWTvg5nbSHm7L8XDrtBfo3d6nnQiFRvTiJo1HMxPk4QM82gJZ95R5Zf",
  "key1": "25MLhvuWQ9ZRGBZ9Doee9jM8V1kP3Carwr4eGnVAoWFH72wgi6FPv7An5DNe7xjqxj5Wx6cbps7xG8P5aKvAe94p",
  "key2": "5JpZBUUa4kVnDBpuUrBRTqTD7fBMdkMeBUURUZ2Vmjdf1k947sHiEdxam6h5UYkDhnzP9mPtb4Zh7FjjbY5NFLzy",
  "key3": "2vWtUwosjePgYEhu1sxF7HETB9KjrgrxgHUhN679jeJ3sGMqAQVm3Luun36a1ziVjvbaZzYw6opykxweg5NGqarr",
  "key4": "3MMjthHwUaok8QsfxzN4Y7fUwjhp4THeKd3Z11aGpKBiq5x42L7JcGiVoDggegifyvALjuPKaz51aSwExKHr4jMu",
  "key5": "azLmGd3HMJCbyJtkw1aRKjYXJEH3iA9FrnrZjvp2rExAsKCh48t2F4cf43PtG7u3e43Ab2sYXfeGoTeX8DqHEAL",
  "key6": "4NtwfZPdEJBRKVWUyNAL5nHmy9Zxkiy5d11hYAC766iwg4w8MUZCUC73tMp5JZuiZsKf6rPThEfGkVvnVPvb2toq",
  "key7": "2wwzgU4R97jDwiHuAg8xWiJYEWg2rNTp6ZZ3XGhC8BMawZK5JzbvnLfmegZCbCLoJTh2cc2eEMMAX6qu18JB9ev3",
  "key8": "SVGA6n7JiXHNo3Pf6CRFg9gQaeGMUZMsXCdvHmQUpxesnW4PAeAE6ihB2YmmSeN2dkT4RrUtuNyvuHGwknojUD5",
  "key9": "5M3As4jMAhM5e7Hip6rGC9h7PSoNde2fqrjTtNKwndffB2jSq5iPHYawsBxmsaG1dFsUvPc4j5evSB5SNePGTZEQ",
  "key10": "KX6cHrxPYS2f9emTZZrvCnE33J5oXhnDT2iiM6VBBUvN4BzfXvuxdfCZB92Fer8GwQfkMGFsT7T6WQLFAtHY9bw",
  "key11": "4n4tBLFMBaLB2sGj83KNWsPrL1s7hvpMD65tyENdWjcVqqr5Gwp6sFJE8dhUgFj1uigobpcht7Yp38E4vatcYtE3",
  "key12": "5XWqNJs3Ze6GbfkDK3QLwFKr9ektn1cFzFpMDnea4AZSaWckUZ7t7FSmrToCQSQG9D93CXDWW5Lx8TUj4ahda4VX",
  "key13": "2ccoRvdwnkNfKWK35n5Tzwrk2LYSHPYyZpqmLo9YLS25FDvNTKCKafNeEM8zMDmRBRJfGBeWiEhx7GL1cP95VgGM",
  "key14": "4wrzhBPcJyRBvHx3URukrZyx5ZjznSSfyeDmc2sd4pFtzdVSmktdwhZjxqCs6jxYseYRnTMw1yGzxthupd8ZqZ2B",
  "key15": "4S5crXgcU2RAdnBHji3SykYmhfBbztSXyABrmNQFdPSGjPS73xATGjMHuSC5Ym4yAQki1yCLh5M11tMw7c22XiRa",
  "key16": "3fYob1ozKrVrmUKXZYzpZ376V6YynGc87m8rDAemAR8GMphRL7QqqxQeouf1RnQYNgkFnnRgJxycG4MR1gYEyKvf",
  "key17": "32b9iGaKQ8Ga2Agy58QyV9yLamdWkurdfjRy4u3VFzLM8aPUf9f37u1kXSLWZEeXSag15EcNps2Wf5N58M36j1q3",
  "key18": "3rKwqzp1yjpuZr2p8hyKoeFpYtebomshAz49UU5D5mHCqpxc4PxzAeWZ9UbX4y8qG14aYZ3HDyLZH7RERJqZm959",
  "key19": "2gyTyyPL7uaxyfCftHGbHewi2CtmoVpkx4u84a7hz8WpNDxPUrH7DEhkwPEK7j4yrCNUmmGYBvph8fWPPoygJQNo",
  "key20": "4QDNEJTxHY9yT94tjFdr3baHz7CF9HpuvfYFvn4en5AmmjeT7dNa4ngis7Xduks1FjnsENFvz6vh7xQghXRCqyWT",
  "key21": "4qqLYzTMCEKevRB9SDi2T1WmnSwChwa4cdSMDcnQ5gFb1aqZAEDuZqJcYMwBEiJCrsLxknmV1joJJboL2HzvtAx1",
  "key22": "2UcWuU21wduSzffoeqTA676LYVE2uvEoA6i8k8vPzkYs4EbPwFeD9gZBs4osgyuM3q7aRTcsw8CNXx1eZjGx3626",
  "key23": "4sWJkT4eHN7C8Fs7TWYJs4hBDZy2q3pSAujyFVv2eTRpk5d9cKArHMaLutoZTMgdRGdpUjjyFCc4DUzX9uYR4cuM",
  "key24": "4E6Ss5GxUnx1x1iCqafGdARNiAk35QhK21r8RDvjXsiyjwRuZHdVs8iHEJZyTTkq7T6JPSgT4VfrDUnfoedQYpoA",
  "key25": "5bGkCJp4FimobpF2GRtsDeSskYhr84MunaGYhF4LWB9cmnPuoGCy61j8EoybDPmoLtx4Sor2RNFG44dD9uCe1Bb6",
  "key26": "4Fs4ds9W16trba6KRYNiMvhrgT4pTq2VFVQZ5qKDJe58xLCt9ygaR1yTWqjYT6dW8Cn8N9P1J4EVrJty3bv89sEe",
  "key27": "49eKCnUDqcnN9sC4CGKRkf9Negmk3YfyrioiuEZGf3Sot9z52tRcVLdKNmSPo22RfkPo3NNHxBMqM2cBSBSaNqjs",
  "key28": "5G6uF6p1wC25v9PMEvzKBUkQZtkTP2Hn41DWgpV9LZqQhtiatWscFGeXNZ77wo8vNjqzYQeMhLih97aQukvn3VaC",
  "key29": "WUJPXvNRF7r4n72uaCRfUvC1WUX2LLvzqaPLU7SLgwtqeJU315dgyNn9WnwKK7jaTyZ2hh1eCXn264sgnwPqrVv",
  "key30": "2s4CaHUkii2dV3r9pNmDVu7RS9aqKFfwRbqNYV2NFmgtXNPnpDLGqinvra24MMZvJv65Z9H3BJ7ZVexyxj3QMoKM",
  "key31": "3xyUdXWXEPQiuC9mUizjYLYL8Z96yg9f98ZuX5gB8byajuRSctRfxWXMVx6Z8rRbmXQkxQ5y7G81PAMEADT5Db94",
  "key32": "2oTpitueA8v1Go7gsp8Qw98pJ44KmpsQxSfwR6FNHaAN2SKLSZbAR9pxZL7yUVbqqf7yAV2GFF1FeWZY24GeCh4o",
  "key33": "23oJumhB3a2zN3zvykPPcEHuoAZA7fqzu6UMkV7S6jjWFL6AvPFozfA7jqtmYsAdbqwkDr3MoYjaAcpjvurwdgNu",
  "key34": "21dKejrXK6tNVzNKbuidqGedsfoDsh3f6WDoTqh8xGDs1Vv1xBMxAd2viZxhPYK8frP2rmWWm1eBKjZ3b5cE4YRS",
  "key35": "5VRhQiuuCR733YAqS6NJyo3oKZ2pjEC3D79hyDX8tguf7puurszjxmNZizYtnr2itzuANdGU2gQRf5eX8auLBKqj",
  "key36": "2vPT2s7KaTRJJhXBseoqZdZZHEpbFwvuopHeuw5T3SjYh45hW3BNdHSjmFM76T9Kn7yBLo8Fv4ZNwzytufMFmLcD",
  "key37": "5o27KehmBvBejYb8AbqxxMV81GSLDAGPd2nnvsWD7yMEhPf1bCBykBYiaXCa2yDL2QzoPfEN3yN2ATHFjVD1TqWb",
  "key38": "3nWFf2rjUVbEQKY6PKoGepifZrGYMJ8YtXD6jVYfw6LVLDwjVhvNGwufURFQHcDQippqT266fhNSGpn8B6J4Xk2C",
  "key39": "3resPJxgxwNtRLtBnFUNE1gHciGQtvrbkTHCE1csR698epKYFLdnhLA2oeWFCmstXpASqY9VPJDTZoRYMygcgzLF",
  "key40": "3HKmNHxmELWSTR9wrvky4hmxtFk3vmG8QR8SygKg16PZnHy8gbn4wLAfnrsBwhLqm2Vs4pgf7NwJCJ73Bn4nA9Yq",
  "key41": "3ziYeqHji5uLrFuw21Doeav7TBUhtKV9N7ML6D1kERZpVnmn77j26JohvmcdM1AvpGpNZsUvv6cWqUmuUAUXCQbY",
  "key42": "3eyAkugiPwfmRUcwvfz6MHWTjU2oEx9nGP2XpjYWeGx2tdeaqUSNtUFD6krP3rMtGogaewpHdEUQmzGx8TNXDNo8",
  "key43": "ZVeX1LLyCp1oQYwFov7WQtQHFpj528UAtU6QazFh6fkYxegGW1KTTAeV3kuQ9ZRcXuvPGTNwKRvCM7xpFHy5gQa",
  "key44": "5xRvoPfBesQJqCY3k6fZBvyzxvLmpw7fvWQePBwFzhsyw2Wcff3PKyhKHyENDLepLHSDzZpXeaLUc8MZYMfhyu99",
  "key45": "4mrya8VQAhtvpkyvU5Eua1oNVFE4yKovoZ5sAXt6r923BGTLtZok7Sp48eWUJkezjPoCzZceWWAVLVrujpks6QRy",
  "key46": "5c4b2jhWgc7bKoozrxseDQdZfwQFNccd8A7XUsd9b4srN78M7JYfvHLMhxvLLd2pr9TmojB6VeP9iHBJRerXVchV",
  "key47": "37H3BCoH1HqHRV93XjZ2nc8oguLQd3zpPc3tPkCwcz8vC5CWKomAGTH8pSpzYZdafASkfgudq86JMYjq7JrcMLp1",
  "key48": "MVEBfjU5YMrV56FnUKbZpRiNZDh4P6gZLqc3ztq8mc1gZPzuubFz8zEN6jRrKH2bGPq6NPQPJcDeo5krTiHEKfY",
  "key49": "rtkz9BpFagJCUJnGSfezLH1kPTpN4ZbrRQwMhsQEUk51q4aSErYZPsgmonuu6dF2jVhGxZ21B52DbebSTR8vsjS"
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
