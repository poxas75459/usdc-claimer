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
    "Kfbjjvq7M3ugNYNDo6Qzazj8Q6Tj6unZSY5sgbCpPP4ntPTXPs2Z1bHmduHAmfHJvSzD9QaGsvQBEYyxPd8k2t2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "633wi7RsMaaVGN4A99k6KaaCPFqLqscaL27CDXM6tTSckK1XJCxVVicQ5RzASByvrZA4RdhkT7m1dKXHrt4ntwDX",
  "key1": "5xu6v6A7Cu2xFsqDu6FmSXuPEGdrGhNvLKBBNm9Yb5DNeS66x45gvipSCpkPTGR2gB44PPqpW7UwBA2cNBrC7fpu",
  "key2": "4JHJCQzMWm9U74hGjWk9Ftf1GZyRMYbvdJ9quM2qUAjH17kQMR1GHndmNGmb1yURJNT5JHh72DGT6xfbNNBKtpZW",
  "key3": "4fmFun345xvgar6A6QYBRd2a2zpU7YaQGs3qUuHtWbzGChMLyasT9TBW5xBcTnnMceetwTyPDx931V1Bj7tNkzBh",
  "key4": "5ryynJJchMBStaMhHpN8Leppi5NsKmZHZEgN3TXSzrXNRc1kFVHET3hy5CTVHVkBHNXmf26TEApcJtFEDEfs9yqZ",
  "key5": "2LbM4HSjKYg5eKb9KrzzJeQ4eWoZgfgmGWxJ97trZzkhRbqwvc1gZf4nQNhCBGhMZFyAPwz5uCf7xL6ivZALc7zc",
  "key6": "57UKjZffGRtymHdDhkBdgEJrkkdXDm7CeoG4EoZrEtuxcBYfo73jKYu8gkPFkpKSbwQZGs1yrKW2wLXHDXfcpb2i",
  "key7": "2mH5pFfmBkg5KxUFTqrgesCC6VSzRDgShCd54c7xXHCM2EED5gsztKnGhgqSsavBAwpi5t9B5pdP3sTc84irKiT4",
  "key8": "2K3gw52Zz67xBWjbe8h1NZxJUC2sQzqtiiNMNgSrcrBppLyhURqbkh5WfkmLXBsHFaTZVhgzzPDW2YMwjtwePV43",
  "key9": "3vzhrKoFzkTog5gXXZYnpgpu4V3EvCyduKZntjnwC4yT3uUqLrUyb3xNo78eDACBM7VUvVdvyy5teeSMPZfbnDcE",
  "key10": "2cgQ76oopuip9DCqvU8gPUvJYWETrMBQWT7p9xPGRqdshx4r7cTxtg2rwhgsKrEgxQYDnvU7Kf3T7ZC9wbtuW9mg",
  "key11": "5FaUyq2S89wdydjpuc9Fzn3ztfJYkEpt4vSGW99Y3t9UCzbLdPkYeZKpTFXeuB56XsshyHNu33n5LAVHwcgfwT5s",
  "key12": "2rnpQd4VU3PjHWgErep55Bh4Y3qxZwjd5x9Yw3hjqXVYBxdypU1oMPwPMYEof2dSLKdbTuA2GqMbkcWEQuMVYpf",
  "key13": "4GGZn68Qzf5tGUZ2P5c65bNQ8HNV87oao11uy172eT3bybaYRVFZavQKLsXEeW1dtfLvW5zYrvT2xgJU2sphJQT",
  "key14": "3R3mNfq7C4o64MWSMFHDz3FoXuxXDJVx74JWeAoyf5QF5LobXdNoRJQSc1pRafWwsPv4vbnyBpU1h5fXpLbsMVFB",
  "key15": "29uYdgqceA99xtEUPnMe7eDa1joQzEtiEzRUxE7VJXJxP9Yvkzch5zka4cDwnkwTyWuzvv14yDTKbL9my7zLEyNz",
  "key16": "5yy7NERT5dgBQy2xR8DKJ21G2pjczJPYR7UrafK3YrnNZn98RPu1TijjuZSyr6qWk3B3PkwbnB3dShGXQTTFAYQt",
  "key17": "55QjhPtXgTiKw4dTGbjAqNt6jgmabKHtKGjfA6PejomQUJkfVECfn1FmqtFahX4Urkop6B3CSpAHzGW5tLjq7FCL",
  "key18": "4MRQgr9MbeDxyYMtWcMyfb9VzvGx9GGKhuBkuHUWbvrpdtSj8eB1eNsAPcJrfHCqhL3Bk2RVmXAbKp4Rmkc2rFRY",
  "key19": "bvqw93APnRZadVAP8mXCgE3yLSjmcdqn7mosvLYm9nvbsvs8jdixGUtNP6LbLCcMwmJgfRS3zb6ZXbWjsjDyppQ",
  "key20": "3T4GBYiS8pp7amMJi7vUJp3CR6K1T9pkxXdhTFvhUN3fp52zyq9LvY3mm25W8tCZniDNxuzhMLyNa99kP5hFYXig",
  "key21": "5jWN29tNFz4pQ8jBSiHRmZUyJBb6E3JdG5cGjRFnEVF5uGjaqRb6cCoeyNmA2xDshjMQrv7PDPcBAFYoFiqvnKaj",
  "key22": "2VmUjNaKCXZB9SW5AmSbMDszZYbzkcJtF9HC9LJeFkydHywGQvo1kD5ZYFEjjsM6T8nF9YesgNuTHaB1q2VdsG89",
  "key23": "4QM2GTohPnwwGvptM696WRn9mn8sTS7vgzemvW19kuLrZRn21oUtFK5Xux4mdWJmFf5zHsAsj4EJcF9to3TT3gsC",
  "key24": "57QU3PRMWsNcXRnfpt49SfvCJPJhu6gQCRmtvMpxgXepMrdzLSUX14ge1fhbacuXsTBMqgb3KnsMHxMo3b3D3Ua8",
  "key25": "5YvehWcrTEEfCaxSSYhJw7aTR2Lv1hLvnuUE5upjSJC3H7zh3wYfbcGiEVW9BCLekzTjYzgZ4gp1aZ4s75G6RpFo",
  "key26": "3XpbX39UhECWGaHHtJddiwCPqX5yvMqkREqdGhW8xKhtNoPQHx57HNmTREbSP9J1ra8R1jy8dz1arNg2SaGZTYgA",
  "key27": "3kw35ad3QHfz3fjwXnXMGtRpHEWL9ybWuiVtRwHVXC1D5wEYThVKmpdGdj2qq5Rg3mjrkcs2SbTt5ZrJtnMs8Qj5",
  "key28": "6pxov3MeiBHYHku7pZs4ocZVf4iPKLC8XGZWfmmqpyA9RH2eZr1uAnw8Q5m8G1njsQuBtJWyM4h1oyYmEGdZ45t",
  "key29": "4EVoj7SaHL54swCUYD2sLK8FHwvEjt3tpeoJbFzpyKB7ZPgEuDo6mMQXmebGwUM5yVaar8jcwYLiRuUGDFoJmXs4",
  "key30": "2SbEgUiBPMc1B6eYjiTs3i7FcBCASXfXqjwVEvVocgs5h64jgmrVY3YLogcUD4xaNJELf8drfbSV83D8yJUWCKXg",
  "key31": "2Vi5vU65kjBuNnNtVMsLwDh2yGNABnvQGNYdgmR39mMQjvrECdQLT1kFKBoYrBraQHSWnLHzm3EzqJPYL3zr55JW",
  "key32": "62SCJp2EWscZwtyzZvAeV8k3uttshq15EvgQyU9P36KYojnaGem4BasRwS1NPLmwiiNaEJRsfGTwMdvJP22JbhyM",
  "key33": "2TCpbAzK3qXVy3qWqZaJZvYvetmRUnudgn3QMu4yBYgPXN9Y9kL1AoYVYndRMbWumG6AVqhVKxuAMibex2dcq1KA",
  "key34": "5baA4gKMJ6y5PU2BWEfFfVdUek123U6VY16GSbtdpyH2VvbvJ92Hykr8RoH3tnjmEuEtKHY9Cgj79kRzjxJr1Fjt",
  "key35": "dL5d3QiZ5zVYLyBWpGQeZiUWN6fuafpRgZtWPFpARUqKntSpafYWsdJpKQWaQsk6ZYrPUGYAcsbyM98EkLL1Xis",
  "key36": "2WG3YjSTxCGmoRcWgw6rNm3Kg44BRJ4TKtpBTsk9kQkJrNoUcnAGt6tZBUNAt9gVCou7yqUTCcUj4Bj5X5pr2rwC",
  "key37": "3N2S8usbzxw7vgurm1JEKUkJJynur8Jijgmyp8CoVd69RPRxpzdALU2VsK1dN7q5dqJM7GTDn89sgUzQ7u1PYBmu",
  "key38": "44Vi7tLJ4DAZRfcgz6hEJCs6iUxHTRzhoUuNZMjSnmbKgvciX158f7isXCNLupbaFBdY4fP17dDJDAfTTGeFj6zX",
  "key39": "MRTD1TQJV7TZc72ZFcyXuZnmLNxGZ4gSH2ab2dQqhh4xpCWgwQxQbZhC4rwXk7LqAcaSh5zzPPzbuji2FmCbcGA",
  "key40": "4RHW2vj2aEgJfqnfX7d6PcdvXvVMUxYwbEp5Qz4DER2Rk8nS6vBtwc7RpG1R7kwzbRgFuSrWNYbSW7UnEcqAhrfc",
  "key41": "5rcxYTmd7eXHJHZD9Bed8TovLgucmGTdm1awRMAEFuswoG5Q4GtHp5wsrGuaCeNfsjDtT5eG5hocZN3dJ3da8WCb",
  "key42": "2hxF8Mz4LAQWFCaQzhQYrXmb3gNoVer3dVYFTuGSjui6pJU1deGH7SDDUBidDzG6L3DAqHBjXzojb2VtphnJ7yT8"
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
