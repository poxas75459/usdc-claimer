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
    "5HTcC6TPYcn76PoKFpwf3goNTDYU4hituCDYuSSxBwZKbFyQQSAjhGM2Kes1oWzYW6gS5983gHqZFatqpH1PiwuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rp3tAwm684tPWD6GpCyY7srazRFj7FyFJ9C1Uh8nQFudTiq132NB34a1MWVVPN27EVdVDhP7tnf2immQbbuzc9g",
  "key1": "32rYtK3jfZsQaaujg5NaEYqqHrhMgdREjZbFH9RH2b6UPXmnifgDWcVjZgihiKgvitiHM261Nw16SkrnGduHt8CW",
  "key2": "5Bu6jJ14s4bHC7yia8ZmTsSoE29RdBLRPC3dhR9jsJRD8WZhtfbz3yFubHm4L8yLTaBaDdvmgfSk37WB586GPZhN",
  "key3": "5rS5M1CZuV6VuUvEDjUd9LiYJcQqJ3B7JAMWpUVXFzANX5cipj7pezrKp3NJxLbU4jdeex3Q5gKuVdU4qgKTrT2v",
  "key4": "3rSvVX3jTc8cwV3tyog87cgcSVqiNHfuc9DFCY599w7B2NYa6MW8VnhDDuHMDECj2dhpPjk6icLyiktCxGi1WzJC",
  "key5": "4UaHdzz8ukMaB5HkPm8uUQQuN598PfZkFjuAfSfVDs7S1ndAvB2rbeevQxqRzia35wm8ts8YrUNwi94aEmNiSyCR",
  "key6": "2qmw6SSXfKYVKNpZUUEpsyaiTNfK1JkXGcg1bJrwVVA7w9Nyf4NsqiDcgjDWn7hX8LrjFqEgZHZ3aKRm1G4hao7D",
  "key7": "2LNH8jgWkYe8cwXpQwEoGDZUsDUsw4jf1P8ZLxqPbjWRtjoghyPTD5HDpNKbjjC67bcsko7Tt4oUz9RKTcW4j7Ge",
  "key8": "3VgPRikVtgZSR6eUvVL2Gm1xEXzB98pcbEuwYu7qBo4npi4AY5KoHxkXSjqV4542GgmFBktSwiruQvvABETFeznH",
  "key9": "2auTvRL65qrRYRJEAiNfWsnymAHZiMExnf66y1vYCtybKX8eATQeMNpAgmseBgqqMnYACML4mz5BWWYZSY5LJKnb",
  "key10": "dP3qDZj6KaHchtLrmpiB4UgMMhxUBbe2tcb7ycaykwjEEL1N77y8ioFSCmZyJJ5UjanvttLeyMPvCYs74AsnDks",
  "key11": "2uK3MNQ5E2wUEJWYtML73ormtXmK8gon2MoABb6fE4p1QCyXSx56KprnfA4J3THNsYLfNjpMnkPawyo1NEG8eRPY",
  "key12": "Sih6WoF7JPwjwByq1YkNBvRi3hF41rMcHWFqz92gAisaW3m3A5zaMEPGPbH6sF4B5fxvKxz4FtAwnXao1s1deMK",
  "key13": "3EJPiuKtNvVifUDMwnuHbPuv5DE9c7a5k5PH6RHfHyxyk3iNDGVh27PFcCbu85YNfUwVNJVujQWamX1hZY65bM3d",
  "key14": "2Kf6CmxAWodYVb9D69G28GtqfzMkyezzscNnRyStxtnmKc8ESXcfzh8sMibnE992MiYb1bWVPxEKFzccH1iPs6b6",
  "key15": "rWQLPge4rq7V7EEgX1PDw2DDTi2nUX6hC6a1WMHCW8eJZCHpHc5KVsQbV2ConLguA7nTAzAofrbpbmr3zyxPNgn",
  "key16": "3Mwxf5MDSyJBdnHpF3bQy4ZtJ7RmVhm61e1p9rL3gJHXHWRcHUUSdyXxQXwLZvz8JunFc2bejL5bSm9mGnbMyrgU",
  "key17": "dK983sXbr85afGgXns3ZFLw6ZikTGESHFRLCFgNijraLEw6uLhF3StKaLMG3GaUYmvgDwcoaGPDBMsTUdyYqNXg",
  "key18": "9trQyAxbTqGs5aMxsYPW9NEBfj2dnYCvXvq6rLjy8VAVr7VBe1gX1ZcqigzgK3xQSTbSEzyppx1XgvvvCZcYHYk",
  "key19": "4EMtPs35zMdDonHDbhb3GqyqGHNRBoRYNpXvZ6eRPgx5bnYmHvU9LYDtNUvXrh51ftbvT7SXEn6ErTPEcxkF4cJf",
  "key20": "2xx3NEkumTAPsuRzQdpGXbcfSZrfXTk4oJ6gZsWCaLEm5tzseAnEYupr8PCAszXsLaD1Epa3D2wnVC1K1RRZcVbE",
  "key21": "2u3VvtFoyBwgi3nCRNGTV4LJk9iMKZFM6YzjmKbhe76KThDydf3uZj6RD8Xa3sqdnp3FgGkXcB7gELiz5MbQhDpX",
  "key22": "5hJQoPWKQr1Fvg7A424GuVjERotXvMdhUSXwBphD6jp3TFvCDE3ZUjxHKgmENs9dBLRpGzKQsTaoYtTiUmpsX55j",
  "key23": "2WwU9VNea7bcBasD8C41NBknJuhF4KqDMVbqYMoUTUBFapfye1BMXxPaFez8H7WVXybfY4qcQFhb9zQRgm7DyfV3",
  "key24": "5st5m1HBLwizUsNTGeYCw59Ei7eaBBZqDR6KZW9VAqpfJCnc495XGw7oRzbWXoayHqxzq8NbwDS2c6fSMU5goTYV",
  "key25": "5oqkuHNumLFEKw8pXy5vYsazpDgb98YBu1p7qMZRTnHnjcpuyC9RyTmfrX3DqtrCKLR7ch8drAaJYRD1sVcqbnUp",
  "key26": "hmFWiKvSzerSqSzuC1WVMUXKwdiNe7vJoC34n7xnKbqPznM6DHsYjxVYbrfoquvTkTyvJVnHqVdszeiJXMvD9HE",
  "key27": "8nW6uGpBT21DBsdParRRwGKahhsFX9F2BvwqnhEiF24j4XbwJuoJz7CPdDmX5Hkiy7tVayfQxNMGShQsawuMboq",
  "key28": "5d5QQGLFPCs6QHwiVNf8CAHuLaXisSA46s2oc9mdoh1t8AZtvGuNpJSA18prgsLvVeLDbUJB9q77cogwQHbLtzQY",
  "key29": "oLvDd4Qer6Z8uNhPDdmq815TyyxFFiuDn6UzysAtadTS6Pu32nybUuQuSWfYgr3poiqtBbiXSUPYXsR3RT6bkhc",
  "key30": "4P6hutmDrGS8HAAGXgHi1RKpRPXL5g8cyY3wV4yzjB2rvThbjCjxkRAujC6b6izbauudNssNoHYWM2Kjso6GKDay",
  "key31": "2nxS1wk5RNJTK9bLgs8CwK2JVcfVEUL7xsz6hZsc7ewrWtMBpBxvMDRNtaV2Rn8yGCB6sAAh6JhnwGXr48j9USp1",
  "key32": "2Vidvs2UxqJhTvg1BbJVRpmTunjUVfMcaQ1fhaJcWtAWij166FxmpHasywUAcGKWCKbfcrFKz7VtcnziqZxt3484",
  "key33": "fpepFs37oY3Sc8c4Vd6PKNwtim9FQhCG4RnqiFu6RyPA4vtqG3PxCdQiZPGQcgKbrc3rXxN92UnzLeYzPApDn7P",
  "key34": "25THkkFBvh1TNFGyYSc1r6CWaDtTXUXyppJqRc2cMjgwUVpy2pmiqgp4kxegTfRhXGfYoYNv2W1BzWoySWRV1hs7",
  "key35": "3Jjqh2oALSUoUD2Wv6LsrUpX6UmZ92Nsgf41Z49W9PMVZr5Qcs82rff5kr7sidBXSFQBmVGREt63UDHnVePZQg8m"
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
