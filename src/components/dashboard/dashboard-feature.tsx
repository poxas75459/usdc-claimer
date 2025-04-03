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
    "2Z61V6Tsb1MH8Y91dHSKhv2oBH6Rwothx463DmFd7ANeonBgihvSiLgtH7aSFg4VpLoh8ck6Tqcj7biaWYuZ8WBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5apvNfDKaYnzXNG5hRDbYREPicSjkQA8vu4H9rXnFVfs2a6SHrC4g36bLqpaqQedYGT5aTo8vvvRP8ynb1gerUha",
  "key1": "fhr4RxSRxUDQ1K3ioHxapE7ysxhoJ7hu6vfvKBFYv2VzkmtJPRVWsb9PRzzrxKDJiRzmD6UiyhJ1eL529jK5JUh",
  "key2": "4sh2uG43Ak5RAmUAGuEFsEbbdDmLG7DVTBjJmnyZobFYYniB2rMXQ9EHTzFfMHQot6EafiraFJnEx3yDtzLcgK57",
  "key3": "2xGZfKQddcZYddhvWdyqAc6smHK5cEAVVjv14asvtgqznPbrVfkK5d268WWvxrf7oHsQVqdk77f8p6QJN8x5bXwk",
  "key4": "2R42miKprpxsPhhaJdDGZCuPA1S2tapiDEV8rKfj8fBEjcrqng6ZqF4Xo2eHckKJLpEAFxWxPk8qGBLNgE8NToiX",
  "key5": "4G7hKWBaygUvn7sGHbaG4rfnhrFhshDYG9ZLK5d3m7gMK6ZGK4zEBMw6ZXYMYVYE3f99vg5LY6m53FEjpYnBJjJs",
  "key6": "5odGHssmcFMw7sQUWqCi3AatyFQ1tPpGDgnyHuWTAwzKgURj9cHeBmzSnhtEHQxNhXcJSPKPdPv7VyabZZxqymrD",
  "key7": "4HprRPQn1Y312xm8q4BDTKSEdSqiYbhnnyLaTSVnTbt1Y7UosD9utJa1WXH8E9x9B4oG1jrxJ9Etosy7wixb8bD5",
  "key8": "2WiSkSNj4fjbWDQQvsdihWFR1DxnnV66bUsaEmkRVnQoCDmoYCnLUiV11g3ypS6ZMWZLeWdiTdjHLDhsBkSx3KPP",
  "key9": "46ajPZD2prsAWgQSD5LW1MPMG63kL2dfjT6a4ba4Jp8bWYdhrdpvB5FmDHYbAHZgwvMuBUjNmNtar71GgGmUAW7R",
  "key10": "3cXbpvWFrKRrS5vUxdT6mEmJuLipJ2BedTqSderZvrx5Nm6FzTvyaQocaMvXxHgdKcFfzYdN2Kcc2pntoJsdrkJU",
  "key11": "4p9QktxdJGdnY3YhJDzjrNe7XxpnFXsZZtaVKe3W31LHFaznoTpuCGS792VrAaZyJ8NfafsTQWm8BiLB8vVx3fAf",
  "key12": "5PEpZCn9CsCxdH3vsAjppXjMhAVpFhCFWvkHygy5HP4MuGL7rcASvUChezoK62T3JR4D5TgNJP84gm8xkDvYu95u",
  "key13": "4tNjRHswiS37xTpBYbrWPuncsmxZBLxeNs3CW4b97g3kKz3vCpqUhD6QRXthwpSN2TtS67nuPLFE13f5dAbyxLk4",
  "key14": "3EhL1BjNtVdaxdnh9kVx2Y4jqk52jEnyNjnDVKe2GC6wWx3VYvJySvsNuK3fhPrTmT654wyiZJErgMp8NW8A1WhX",
  "key15": "4FrQozsmePqVLz9FwhhM5XoqsEEJjgPCysQFKZDVVNfiUYqBs4qtADJn1zcT4wrwxLaVfEzDXwZ9dcYjJaJCMgHM",
  "key16": "42zVX1pfiYWKRZSws6em7WYHyDdKinGxfjYx33VTtmPZrMowGPA2Eph2rrZJ3rJtSV5fsGPCg466EAoQ3PP9UYmR",
  "key17": "445f1js3121UqnKbW1rp6bJiS33bg3iEDs3jBgo4MM4eLnr7qMehrRKR4oiqQySEx7PwfqmtY3xaqx5hXV46tiWx",
  "key18": "5KDhkmdAYtDmZ1i7NQpiB2PgSB6L4jcoVciwCUXcdLgzyUbq6UigfYMxzbYzFPK4VoujS776SZKQsFS7ZM4YSoMh",
  "key19": "5CFwDS6nSmfhvP1zdoRk9zis3bbauDmMhpRPdFm6HhUirFhiwtukFXnbn1TiF6wYMRd8p7mwWVS2q9qytRCfDMLP",
  "key20": "3o1GtwFaFHBsoQtZTLdjBSsC2i5FoGogUqkbneFWu51AfmBfy3qdHFQvE2jQeTindQk7MX5rv6LbujeBu1Gf4Wbv",
  "key21": "3oL23waA6KJ9y6epSnNkQZtqafCemfykPBTUXAcSEAtMDotSKzw5jpcgaGSXCky8GfNWiLiEfy2wodsVdGfCGCZ7",
  "key22": "5jUY9V75y3Q6Zoo3cgZyYwwvaCQNvMmdnuRakdQKsQE4EKbGNK11UNrekRrE99vWqPWPfgUhw1M8C39pbN758pe2",
  "key23": "3etLPBAATHQWhf4qSPDKMBu9uPwR7s1WxxpAAqRj56ynaxqC2ocda8566Z7QXGPfphbaED3JGooHyQD5Z25ukGg5",
  "key24": "2cPSAN68fP83464dJiuJsoH2hB329y4cZF3oQbX3CxMaVpieuHv2MDX79jrSk9YZGtEG9HyNbsgGssRA1UYQ6iJH",
  "key25": "5xRQRFtps9r4BN8sGCT5CbPZZe6mKBMWgSKpQ2F7e81ooCwpbP55Bvf7hjks1CPjZPdWjWa5RTaprHS1EXNhi2TZ",
  "key26": "3GNQqswWgooj7WoHzJNDPyXnKmUdB8qdasNLihi7g7ejQxJHK53CGKDMJVKG3mAorjYZqTPURbAMoSsBHvbjEkrT",
  "key27": "3DMy7rnetEeoTmSmJepfFaEytiDxsWNhoovKi5x4zcxg6ZCkeXtrRKM75Kr2nD2zg9HAWzbuAuxrcd36XsNLv8Tu",
  "key28": "4M1HyUvgwFv7vTwaLPtV7aYpTgyfz1J2AgcqnT6zJJjWY7GtB7J87LuZS3cobgYBo9UmViQ8do7EBtdJR43GsWgo",
  "key29": "5Gj69ykK3sZSFMrhNuq1kkWxHz8qoLZQPffx35GXP8pYeumaXQ5yYBRHYriGPka7yNLfdWzjE7penSdhdzHv7xB",
  "key30": "4VDccRcTCYeVVZkZ4XxEU9XboogmKzpjyo994ua1FMXLCszZ68RsF4oCZqrVigiCyh8wTZ4SHCNbRwE6jJXonjJw",
  "key31": "rhNi95Ny32MhdoZANmayDt4P5ovtJSnW2DNo9aMwTu6gysxvBmDBDVdbi26PskWTBMdsdamZiRNEQJYb5cyNi25",
  "key32": "62xCYX24ePFbwyrwd31CwF6RKzf98GHuAaLZagtmxQWRfT2zb8S8r3MUnqoSRF4TXUrLZThKxRf23pPAwENgMQxA",
  "key33": "4BZkcJkn9LXtqEXkxMEPSuhSs2iyGCq3Ha764pJx1mmCXyb7K7c84vMChMC5ehXrvidkMhJPH6YeG9n9sJn5kE2v",
  "key34": "2oCThp6HxL5164WoWaBaG2brTErw84HE3T9SXz31pjXAu8gwwS45hP23dyhzkRoXqCuLyeDnGnC1NZZuZD9vWdYw",
  "key35": "zQGvLHPLGmbiZPWxRsaeA7R93cpC1knpbTmpFRqaKSPh1MTBmacBBC9Fjavc1onsZq4hsrfepHim3bsnRy64C1W",
  "key36": "2iKqMbqJuAv3XM3TGhL9MyvKzc4StNQDs7WYD26NRacuA3yUdWV7Bztu3sNSre93FPrHN8xwxoUQKLTPcnsJm5Xk",
  "key37": "2u7L2jSJFXWuAvUsvXhgMcncNv3Ndw97LQnWoxkHWdpTRhzvTZaCvPoUEgyeM6o6AjoB7isJJQe12ohnsobyVT42",
  "key38": "5DJHNMRLUGMutujbt5wrLE79ZD8RWu2afLnoJ7UQPvk7V59gL8LcbSKYLue8pq5rdKLthmZAW4LgrFoAVFcVuVzD",
  "key39": "5LS1KtFHW3erhdsHu8mYwBRRspdynRZTbYJjgDsPpTFv53eQjTwoqqXd9qDfv7zsuSVhQhQP4G8WpXmqPPBwFka",
  "key40": "CSATwUhgU6YAJpRn65rrNiked64H8XthxVCcioZ6AZkU9pB4DVeNwoz8dLbi6LFLSMLL6MU5VXWZ7qB4AQUyccu",
  "key41": "4uUaoca382wjBR8Sds4acr6XfdQm5kqyqcajFy33mzgjt3syz29dRhPP1Fx8AQHe52fvEuczXMamwxikBF7kVnCZ",
  "key42": "433KYc8WkkP77Amt1KknnL4AGidALiBZsfQJRCDGrHUp6FPh53tEMnjAbgVS3VfruhYoHusM4jGPTEk6zD2UnSFZ",
  "key43": "3j1XWMKaKheR71XLfeitiQhnK2HPoyiiWkidLC3Q7L2PC7d1DVNotBf5A8kWw1SQw4Ziicq6PzkcxrsxXWduM1Qh"
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
