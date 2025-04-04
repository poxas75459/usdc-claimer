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
    "2G5RVZ5oF25NFbssqbGrycAfiim2KAvyx6sLQGnpp1CZQpXgKPXfjezDwhjwcpsgauoVmr1Zzzb1rxUvmiQWkFHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vfWBEvg5oGSGw5qv9FRZfFqnJmBjdpzMD5XNUvycTvZRJeruy53sE5MZafCN1iQZ8uDJGmE9bYBtkMrmVU7UGQL",
  "key1": "4wsG73nNSD6T7cCv4wh2muXo3sPxtZ4rodJuSjBt3FaLnXigchCS3ZpQFZpfrkqv3FRd3fXF7UuBED7wPzUU329e",
  "key2": "65CBCnBwpvMDbKG2vD9WmkKZvLgQkdvqgFgaZLiUQtzNqJvYmcHWPmAkvbjrq6BsnUmPqvU8KjgkekV1wMzZgVnt",
  "key3": "3Cqac8YaEWQD29hBP8QhG6ZX94oKHVNqVb8vvooXXA5TGknLd3JUJ9bMVzuBy2TRVnhenNqK7gWctr7gwYofoGSB",
  "key4": "5CQNqCz3H6MCY79PeGn2GdBgqcUEiebsi5w5t8gPnMADpy6txqzEprr8jQLkoD24DgtxtfPBw7QWbkNa8q3tqtD4",
  "key5": "74BTzSuPkE2QoeEcn3vx9NBY4zqpYwEH5MMYbTjXrYJrhE3jQgyiT2Y2ZEmeLoBnvjGMuEUv4VZWtetG5NfZLvU",
  "key6": "44y63aKkoauvtQyqpn6vHCcLn8hvkGKeQTzN6getqKcwVfxcCBDSCVKQfMshWMxXAY9ux6FSwSzHxGxNsgXjitMz",
  "key7": "4wBKbFZaYUStjoQ15KRzzzFvwiHkjiNqF7CTXrUvuER7LPB9TuZhpYUJ8dzUMr99RbGtF1m49rC4pkmrG3K5yLLw",
  "key8": "2DDDUzkoMCTdznEQLh8c7Swp8mUMTWtwskNHEcyoW2xuuEJAh7rShUQp4v6AnEfXVVU9sPctajoRE52ZTWLFdXmE",
  "key9": "BQzGkPxv2LyBA19UdyzHfCTRS2t2VgeZH89McpNXhN5WMgecsDZApy6q1BxNpnfvuScZJGHVAMUkpndvH4ntDPq",
  "key10": "SKjSKqnrLz6R8G8cvMK8SeSfp621PJzDKicC9wgpAXgbXsaXztHqPkgET1dwHUMYyyzbCGHynMWZPxDGgHfS4ki",
  "key11": "5utkxao1d14rSwiHwmbbJt5qWwZPdXnsXiZjHJPiqMTxZ1H83aPD14P6bu7aCUeXau5uWShnz5vySbRo36DUJrwp",
  "key12": "2a7fSQ5QNBXzgWwKnp9qsVwVoQ1NNiWMt7jJKPEZZ9m6scQesRGXiBgygWZwz9Nx3re375G8w9eL8NBoJMv7xrUY",
  "key13": "3i24HTPjpfu782CKJge2FHqo83dpMAaKPqbxmKt4WzHEX7fduJtVx59vwhTx87fJRqXDhka1sCmaAnPY5pwDn3dL",
  "key14": "23LcNe7HdtM6DKXtZumHtT7VNimXDAUTcYnBahnvFdE7EXUhT6Jum4VL27WDogfv2Hoo2fqvNMvGAVSS39wbbHPM",
  "key15": "2g3RDn3yYjSCL8crpq76K5aQgGo9hi8Tu4cMrbsZqZRYPrk2o8t9sYymijoVGddx9MK5oxUT4RRSKReitcQ91S4b",
  "key16": "Y8rZPWn6maJKQV3aeVVsGKrW1mNFrxRRoi7s4FC3szpGCmFnLcN3SBsR9DtaLZgYS3ZN2ugekbX96zZuHVKNJXk",
  "key17": "4iRCq3ZmwQa7j9e2jQ7vsxbejHXNxoPE94jEF3ABKHrCgjTksTeyx4P5X5BsCAWjPNhtvo3vVLfXogwGbSN8Hf4P",
  "key18": "3mxTn9PShKnvqvM3Na8b23STAgiHfdx7f5KP4bHCUD6mT2cc5brkT6mbkr6Dhg8hsyrq1F33veNDtjNEJ5E2tdPd",
  "key19": "66H4TpvuCRkCtUwMq5PFw5nBfT3TgnHB1w7nSjRYgbJM4Fs8vTY2eHwhhCsNHwWvRcYPHnVrgNkqMctqUCENSZJz",
  "key20": "3861MnEhcGpgr9nosxC8WYeLB9yTHAMjRP9aVd2ctJqqTcTTRrumJWbSwjWufSzMwPFiqsEMirTt5TdbwdsAUiZH",
  "key21": "2tx3n6oEzQVpz3kczVFTGUJczP1wF2DgBiCP1tuPdfSCUoDXzV8j288wiCmftVTtPYbEygcPc6RiTuo39rBhBZ2b",
  "key22": "5TvQW1MKz1gVL9fKZAfXH9VAnKbKtPoAqmpkNGM1ZPY4mM1u2FAdbNXQApHezj9qqAZraDcnyJ3piU3Sge5HU5cQ",
  "key23": "2qBYTgpC4C1WMfNqhcKvq9a3VyEgabXptRb2mhMBuEyWhNJZqc6XNpLHqFokouhmpoSFvLHNMr91TrKYN3Fceck4",
  "key24": "2fJcYZ77xRd9LxxBoghochNRPbkJM8o97fabhkP7YTTbj6rniK34MhMHKmq4CMQoL2cKFFPmZazXbS9ct21w5D3M",
  "key25": "SuA46kMUczaz6wSARbzhv8j7UYj98ytwM6pEEudA9kMCWijhYgo84Pv61xbesU7ftkKrKueievEbq1vYGCjn3t5",
  "key26": "2JLXqQfzk8z3UFm8NCmSr9EkL9ZChxAC1B442GdpZsdYZx18KDsqjTSa589HPrYbhBU34FVtvNs2TzXjvxuo65Lq",
  "key27": "3PRv4mu8SeWLnxGGa5Zd8vhgQ6tNVL1RkcUexP5PboHqmP36yCRNmGkWALr9tYMJYbNTomWNRkWnaWR8mxHRFYiA",
  "key28": "Qab9BtNsTVSY4RyJ1dNYJWkHmHjzc94JVUotXgSnA2feptNoDEWaxUrPjHBfz4c7PKXwHEi36AUwc9SSufFG6tN",
  "key29": "2Lv2ubPzR33yVRFYuEDqmraaYtHRWywekEPv3Tny8xe1WoD6XBUrZWQ3KKY9Apbhe74vVQB1kGeXgFEDWkgLmA9M",
  "key30": "3rLWeXEzXUNEY5P2HDxz4cHzWZ8WiuqRuK4Eb4YRxzmbBuwjMPca2VYzq8ScXhsNsoed6AxXBPJ3Fc8Pne8VC3kR",
  "key31": "5MUd2oUVzqT3QNwdrfaXw1aR9FeTpNEvUe4DSogPjFKM6Q9ctMCB25VNTMb2LK7G3chAYVgGmFAiHcSQpSZdqzgN",
  "key32": "5tdKGLpwuHBELEau3JEPsv3webanriZL5smUnEUqsL5oduS2yGtqLiPV1UB8wFhLBpZxJJRojSLbFGxDc4T7jjYU",
  "key33": "2AKLrKzehCKUN7Lanhq7aUEwgz8iCBCeczGDqKkzAQfDxagq8gQgw18AgixgwTXfnZoDPJ88ESpBSJUYtr3FgVFa",
  "key34": "5ysbPMLhPjDunjJRqSiJK6YYQJExeGjoZEjK89zkMHLrpzQZKT9GBUHgPVYkKgYoFxWzTWKboQSDCqFvccGwuCox",
  "key35": "3cMsJhH5CZGquGe74KLDXFEE16ER5Ea7dmoKQtRmmcp8bvq2JJHBMSX4SrmfvcKiWCwcp5WWLFNydQ5JbMcAHGMt",
  "key36": "3KSKfWgcyEYvitAgSv9TWpHY76HGX3AKuGyEMHjekXHpFKQFjZvHskPqyfdrmHb1YwkF7iumxWQEC4pNUPWHzK38",
  "key37": "4T2DiUyGVHHou7KeR7G699KHyZFDp787LDkHJV7VPjQcLQhodC66MuC5PFk2RS8s7hXzSBRyybqQs2vfN6owGJPE",
  "key38": "a4JYFwkqhSa1hK7rf3KiDRyHJY7EjWciieurXXJn4EoAfQTShfwkEA98msZCDyYoJeZeHM3NkHDCKnryhDmE1W4",
  "key39": "54az24aAE3VtFm53JUsxSxhHb9e2HADXgUTi18NpHcY934ezYuPZVk3EWVLnikhBdSiMfTKWT8SbFr72AdaAuNPa",
  "key40": "MfVUKqX3bAbcTac5gRAhwH71zf2hbEopoPyVkPkKpVqQA3rYvVD2mmHNgYwHXDYnHanFkxniqZRQMFFkLMrmeHh",
  "key41": "4orHxGRrXbAhp2yYNA5xgkY2idPUzwXDB5GW5QTTU7BHid1iDVtVUnvt35gexnhpEv83q9xh5aj4L3HCAXiQrcXQ",
  "key42": "hiS53B53C7qH1mVCLtWumGhEzAAsExE3sM3RzE8DoESnHoEE1x2DNNCFn8ooq2S2mWxkocbT9KQsQRjkJw6hNnE",
  "key43": "5Xhh9T8TW2FjA7jqjEh3AWVWmZydUrYnEdq1AbRNKXTmmptYrH2dmm5WX27aRxivNTcxR43L7VXSY9TEhPvRNv1e",
  "key44": "5CnZ5vVKh5xxkaRcUBcWKwjJZwhu92z9hvM6uHcKDtqZBUv87aa56YAEqtTAsG9n4yVUykCLWc7wotWZvshMUPFV",
  "key45": "RqQmgBSPcdnuzrcnCaPaj8PbginmnLdZhXfUYsKiwjVwQszGfgBD1wKWCQkc1uHW1Kgy5JPWD4ufz1WMUdz6VeV",
  "key46": "XLvzrrHxFZfcwm45YPogkYLqXPTmYTVzXjgXJ3qCPYYeLSovEqEiNCgms7bE7g7XMPgci1NUroGNt4uJbM6Lqkd",
  "key47": "26chA6RD3xe5tsZfUUoScWRKDQP2ju4GnZGFrsDotXBR7vNWkaKve7ZSJHrzDn6V9cUFghzxaemVPCG6itYC3Z9w",
  "key48": "2AgrhNaRV4fViugecrcX7RyZBVsHgnBhE4Ld1PavcWvQrZ8CAgeU1M4kxgj5fvnfawewGcRXMLtUAQBW8oFbKNXS",
  "key49": "5B6yBrus8CrtRZCoC7zywWydzq5H5JdvL4U65dC6wvWqe5fUrjhtuuTqPaufdqZfvNu1YFDH64t4cUC8GWsntVs5"
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
