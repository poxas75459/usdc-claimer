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
    "DDQob9YJnQGp9coXqvkRLV8H3xr5J5K36dnZhAHu2tee6pJs9QWhS4BtqD9riyWV9Kh28NvkgcTY7p9X5DvVJzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eLMiUNsjRuizJy1PedLbSHDy42S82Uby9fMxwrejQJ61dZbLpsS1iiVTMxPYpBUzJfmrBaJyVZhK6CGVEymWUvC",
  "key1": "2bpMfjzNXPt9U7SKnckxQx1k9x6zoDiwVfQTHgrTC5E9BQLMJx6J8M9wLKk7CrUpjNxDUm8JDnbRfBKePptbWcMk",
  "key2": "3JmQW7grk32cmszLZjtinfwhRfNL5h5z6mRwn8Y1zicpF8NAoPMnmNUX3mV4Ugyz4HxkK28efafqfWQwLCoV9Sz4",
  "key3": "H3jjxxWhV3NGNNiaStjDeTFNVNxVaW5qxwQMP4A57ZSpLfE5jypn1qGvSfMZUvdEzTwuuHxADaRVBHwtcL1hcsv",
  "key4": "PFMihF3VTZ9xmDi7UtBRehpU5DkvEXZgk5oXm1K24czdDiaKhpWebKtSXopfwmoBm43CrPHWNKtLD6hTPUJu8xm",
  "key5": "5axYsEXe93QfP7ctsQUhyXAwmMjr2oGmDfCKdXUzN5nTysTnDnC7QGk6WxEAudHPX4mNda5rwYiRLKqPsGDfXYNK",
  "key6": "2EhjRWYEvPtmHm2bTEz2EKCiDbhPzxQpnjD6feTfEVRV785N88FwJJWAQwMy7nqx6G68P1kRnobQ6BPrT9SP35n3",
  "key7": "3cp9m6JeNWczvPAh5qdUtFQrWAqE89JFKAApSeu5nA6taNFiG8BJgkSiZLKSZ8mc73UG2dfBdL3PWNUhf9KjVJjg",
  "key8": "526temUrphjjQE5WJ1dtiGYeWo9AHRKLhhYa5YzCdxnLwVYVceySnW1MfaaRSxKf2qhnvXF6FZbchxa8Zi6yDpms",
  "key9": "2rrtS82AuqZYhFeLwXNENKdq4FFA96dLGF3tYyrmYjVPpNzmeHSD9enJosBBhfPiGi13SZpu4PczDNMu9u8TyjGk",
  "key10": "2wF45TpbMssPUN3hzSNArsDxAER3Dgz9Qz7SXLegMn11s2cVVjDbQTRAqfdU5nb9i5qYjz991S9fRzwB3HKjpCLR",
  "key11": "4xx4z61Zyx64rEG6dkGaUnX9s9uzJTvUshfyTxCVzVUQBk9U5kwmmbxrAaMuU5mmUbGfctAb3rnKNfcniFPFrcCr",
  "key12": "5bbjkqMsFyoHrbWPCM63CXtiaapU8yK8Cpgvkn8Gtxb9gA4KuD23WPcCwxKvMB6wmdUe4MwUaPbBdS5P13Chk5U2",
  "key13": "2yvU95hvjhDMgUTHUcVz9p4N1msu1dgfa2R7BtdSmPJhdagAE8ZQbVVrib5SGDhaVoeD2bvPMCSZsZJaKfTMbHfo",
  "key14": "4zVa5chRkDVerCDj1bNSBwnAhFX16LS9DaarnLL1BrKammMeV5zHybcvPPhajL89okC9qf4hKDG5wb8jnDK5FqEy",
  "key15": "3bPoC5G41sVGgcEr7zSvCcNxwYBVA9io7cXu4226Vr9uabf84FYZszvxvuKGHfrABFbhPMGnow5hfgnNiZh45hh2",
  "key16": "d63w5iCbHSHiAo9BQT6DZmGXFRP8xZ9Sw5iBh7qqRZJL6ZgDEsHVT99feoquu5641pfuv8QtYyaoKkvBS2NDR6b",
  "key17": "2v4rpsLseHvJQiELauxAoxe2PhcxBmhbosgp2SxsHYJFWyvZc3RvCwQpCCn1qGv7SYFrJRMpXiYdC32AibEtZxR4",
  "key18": "5XnNiioDfvmtcPKjBT6NrTPUi9ED2pdtgEfiyhnMLDwZVZg7VewBMJgT94B6XCyL9N6oXza1XuXFFGfMwV4Gfeif",
  "key19": "3zciSr3Z8pGVmZgcNkwK8yzoaC8255eQJXB8bN6CkuA8bcAHy4ms6N8bL1bgB9avHXgx4Bg5hGj1SGtKGJeehKct",
  "key20": "5EreJyGywGbCf9RZJGWqWvZu4xYZPhn7AV4oi7VSnnBYUc9dAKNGKWMazvyzXF4RBXLiKA84e4tS8mtSHutf5NY4",
  "key21": "4BbcZxoJJHZo6ieGXr5388x2JCBDEQEVqSUv8mtkWGJBP3RfDRvpGTSUnER9CCeYA7PtjNMaczSMBfQAHtFVkXfw",
  "key22": "2a6um9P8pvmZ1QW4e9C37abyDXdZT47aghW4s7m29hFLp9EuVim75Jh2kL8zBHiFBSP5Zxw4cZcNmXYEq4zcC9hM",
  "key23": "2bDSUumcJUcwDGCoVGbwbGHPX4mYH8G18CT2jALeAFSJYSXWKAQNcBvtsiqJMNzskTokw1pr2of17a4qxjHCtAG2",
  "key24": "4BPwTiyD3oEEYXhqUdzufA6ry2gVVTCmAZtS2XViWELDKvQ5wKFqaEb9wkNiR8PPjq3kaRr1sxen1x8DudCWyXyb",
  "key25": "ierWT46W7zf8TuonThAptVU3r44miEmXknnCoPT96KKKuaggh1tuADWeRGwuVyWXqsAF4GmWVNGxN5vHSSB5eQm",
  "key26": "2D7d4Wq45gXnP3BFBqtQphyvgzfqBuwMvJDUt8CrqQ8ERRMZRrpCR8HququUiQvgvS6CGAdVyLtF18muQ5MTnNfR",
  "key27": "2T1NRd7ENCsBNn6L6Ki6zuwKaj6zv6jpTeMHuAYgCTFcTqjx71VK5zHnoFsmCDAQpT5vibCjgMLgzoS59v4Xoh3i",
  "key28": "5uSZKCf6pG8uy9DzB4fv8SV8H8QoqzrmgLtNK1ngWQM2LYtjuRBRWyQMJ8VCi7WysrkrCDtJMFz8L69cU2MqjR1H",
  "key29": "Mei9g9MNJsSvkeBWpTW96bms3K3FcSBdun7z7kK5RjNE8GHv4R1b6TcvzBPURFosaJS9HAEnSaeQ5o2FTnxUHvb",
  "key30": "uKMJT8q1KW27QqCZukvAZeGApfQfZ5od5WyN2wR1U4HvywhgNAhq4hfHb7xc9Kx1Dbb3h1UphBbyzh1niyXjTLN",
  "key31": "3roRk1GFG7krKeAeGKTq3ZuiZUrXKm2UpXBd19ebrg75WXWAXihxogKvCYCs1qDtuD7uBE3PMakh7dv7WsuyGZyx",
  "key32": "3e9GnoyhWgVm8orBPzmnuvpDyH3KmWGxbWsk7pneD7dbCHwx9z5aDmiJEicDhYo1qmzikqpHTTThdf5NY3CyaeVE",
  "key33": "4uAewRAJowui2gsne33B31BNLPHwVMqjgK69fPRo6PeXg3XAFbCLHGuZ9nBP2zdZMVHRYvy4Lhaf2DsrY5aeWjo6"
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
