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
    "4hKATSFFgkwjzmPzdpoP8kdDtFHhEZNThBShkCFarHMVrMkTW31ggzu4wiSYY5ozqb6BPR47rP4LSAof69RwRtJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XiUM5NKmQ7MQRvvxKzWDCtEi3dWeo8Z2TeMEWagjjvRYvScAYta9DzZED3YNT8iXUzUGJysLReAWHKvPNM3H7wH",
  "key1": "2bwSUT9XqbRexMG6S6GeziBPNRKWHZz2ukzyGF7X1ZeHYiZXfxQVE8KbM2kaSwPmZCCsJYmvHGYtceYym2pgCXNA",
  "key2": "59ehNhfjvBd8iR63ibMGZqESL881VV1FS8xypwcErm3Ra4Ga9pz7Dt5qK67gL4ZGSint3DaWdkz4o83Pc3U4PU7E",
  "key3": "3YqL8AVFXEuhwHAhqC4rZfy4q3D4mcJ4D95H4thNtWDhc9mvGStCfWFvD5jgKwo8eJ5WxZVCx1H52Vu21at4Xqqr",
  "key4": "4QPwcq3Jqaku25k4EGtDmEwUxSHbZgZguxSvV5DfNrJrzJKsTdqCvEKod76Eev3VZknY14B6EJZ9D22od4X1xM8y",
  "key5": "3PjJgyY791SVNVS9oYK3hdjJUwRcMaMkVDTpo3xpaACbbM2Q2MuZKk84cC11naKCAFuufSmJ5FKzHMZQ63CCgB1s",
  "key6": "FxbHQ5UMbbamN26BsiLWioVdhzCqfqjNwSoxktya2guS4vAtKea871w6JtayQJxDpVmEyx874JjBfff36hUYRnN",
  "key7": "Ed3yR1zdFKJQXCYCu6eBG7TQQrvLPaK1pB6ANcg8uBcGAtGKh3d13UtobW7KQ2agNnbHp2HM57mab7ecFFJNfpS",
  "key8": "4NkbtidLrgXb3b8cF1o3aE2TbiC4ELFsVxggQ4JL1ECXPBvG7jQ2rZqaAEofHW6e37YKFkMHXg6peNYbmu1VyzXe",
  "key9": "5TwWh21DnawM2b2TPzq7XKSSwqzjAJGKmsatVSGEafrKmyUJZLVQgqPYLWScL1mhLWUXTvBfaEooNT1xqPdQE6jX",
  "key10": "3FJ95CtHQXoPJwrXGaggsM7T7EWPoKQZfbxbzXjU829YjGK6YzCBV6oA36HHYFf6PTTHeEwarddhpteoN9bLAce9",
  "key11": "5XoUBwLXNZ8pTh8CsRyeracftDsaUfaEy71xoWaPC9i2YNEaQuDobvcYqny7REX2PFSh3yoMzu5bA7wgw7JQz1oC",
  "key12": "37JjzeL75u2nsodfJVWQ2Lq4w4MfEsWuH88yL9MGKbTSbYucuSHUoiV7doDn4RsHBvQAXVh44a5bG7RXZuS7KtBS",
  "key13": "4vZrrcxsWuYyA9MxS2qMouQYuT8yzLvJ5m6xht68naapQhMs9oMvwmgntWaCYFhz8SXerwGt2376ZuhimuwFXsoE",
  "key14": "5TJcRuCKgRtZ3zDehjjpB5Cw5rwRMoxKCKuL8vKCvnpKwF6CoQUmA6AGcZzkrKpA5E76WQFNiAfUXnJJN8U71k3",
  "key15": "5hFGNM6MsTGypN9Uy5o3A8DE6VdWSMsfx7DRdqxinej3PZYr7XzJ3ukicgCBySRRAVj4U7othjh4oi2xtoPZHJZC",
  "key16": "je1zxcTNkgUBtr6zMLW5KrSD5kknzYKHzAvnhFjiEjBXYUiCgRAR7yf1Dwq2JVXKfoKkvLt21ZzhJHf1D1mccLL",
  "key17": "2jw6nZcU24c8qw6cnosNmHp4fJ8QaGgGPuBpjCjHVDrPNdvumtFBchErx8fccmuQdY4mtPp7irdkWtNsppWqQy11",
  "key18": "2h2PTbkMX7a8Tw5rwRYCDdeX3TLdpukjmNTWKPFkNwnNEoCBEnmghYV46iE3ruXYbKMu7ankyjHYsZijnibGaNYr",
  "key19": "iTLn47L8HkxoEy8ScdeDyenDW1kg6qFWhuGSFcTStr674CvZWbvWugqqyGP6XaAmQGW7Q71FgdKTPiBfDKWcDqs",
  "key20": "4HgJJDiLMQgQ6oZ6z8rpiGU1rcqkCKbyNVcXtGWKD8x6xz7vP3ujCGiHWH1RTpMBuYTtpH8hU1Keuh7AkvoSkQjb",
  "key21": "2xFxcoRj5W6sxQZUHTANGFxNYUVLZ2q1mcy5zzAG6ds3q5UF7Ev1cUDkEKv8rWocu7wyFfgGWJR7J4jZhJuQRoeT",
  "key22": "3f4yoBY691nZ6yEQpsqs7CmGnvgf3HCVuJeyoUzztPogFzCCb25oW8rHAAXX6NzasZqLXA4vkno2YeqajMP6nq8X",
  "key23": "2ufh9Hha81VDPaNomh9tco7iAjT5Wewqkri3SDfbfoPJzzJm3fEEwBvwZoxgpMQ1djKZGTLTjsSHdpkPSSu76VzN",
  "key24": "63jLq9qhfu8uV2CBRLpCFz175UsTALrFNmvKGwYxoZA4AahNbcG8AXKsouqBAXbxoc4sXghzUpT7gQz2B7YiTWYA",
  "key25": "2kRZ9KyPUbrtzyrkcJxsNpzVUDXwK1Kq9BveLBKYu2GCGX55kg2PETyN3n6NktqfD3LDy4z93ypWn28QGjpVHwi9",
  "key26": "whVUKs8bcNhHWroKG4yD9bcrM4JqoUcxiWxFhGaMQp1NnsqDVVMabk85WMaYWQ4q4iy2ewbLA2f7j9YpxN5WgA5",
  "key27": "5NQupcy2QjqjzNZa9247npLUUkBeXE5QVHktPkJeVtymPUjuBdLe5bMCWAQVA2wnPk36ShLUjFdU5jmGHU5TWANY",
  "key28": "4pveJXAZEzji9ZcLNAywaWKT5L7qdbRMXbS3htj3qKKhS8Zx48GeJgcFBpHoo9UbLBHyGcbupwVhhdT5dPxJPhA9",
  "key29": "5YQbdLHYuX9ZxAddJaufV9eE44yPEFi1dSHk2r34B8KqXCTNonMucEYwgCtB8iNV9PZLenG1fr7kdvDkSjumsGz7",
  "key30": "24RxjnqRyMWDpPeBR9fscdHHrFjdFiS97tNLUjvon5dqd3HCsEJm4Aq1ajqyPkZNoEaiTWV2kxALkg7QnLzPsb98",
  "key31": "41dbXdLpGd3X5dj39s2DuSfeX2iAMuBMmzzj1ceBdaNaCVKbpqtKn1vEaK86r99Y5o7e5SaqnZVgno7wQZuHLbcp",
  "key32": "3QcZWvqhfp6xwr44c66pfWpUGgDL3RDoXkNkLF9gdLmH3Lvqwn1be3UK2dJax2LaTaEXu2bNQ4Ay1FEdwiVUgjGh",
  "key33": "5zqytyqWKfHxw9W2iDtg3dLXucvg9m5ikYaisJ237ZT62wqEdoGqnEbbdgdanjz4LUxfMttsrAC5Z1ryFesuJLdy",
  "key34": "7vLu9W4W9nNvsSLv1yhKCGaKuCYTtTZva7eV4fz4J45Saam9Wiqve5J1JGLTSFdAMQ7zNv28B5Nd4PE1BsW6mkL",
  "key35": "455ko6i4yy9e3LJj2kwL1RKqym2qGBFHiTCyohJnikLmhVsCWMRPuQjXdGbyrbBHFZcJVau75Ny8FD4zSWWXhw9n",
  "key36": "4i851CjzekAdDmFg2EfnHrA3Fw16CqaFKruio33J9TX89pg36tJcUu3gA9bksgwtAd3jXDyb9Ti1rqkkJVKMtFYE",
  "key37": "2NPZAaRdxZUFXSdWVhnZuRyaPiKhg7cqR645hn6vpev5VYWf8dD9t42Zkwrze3ysrH5y1HBZ8UccWErhV8ueQwi9",
  "key38": "b3nTYwSuRgApVLN75PiuQuwUtuDJwpF98pFNirMDYV4q6phx3EPfzUdkrkeNDCHVTRAEgyVMWk3WQ2NucmX82bx",
  "key39": "5f4mTQwvseWKsU8M1YhudrHZ3uaVNGdTKMka8bqEg4EbH9xpq37M8Zgqnrq6tk1YTnVKrBU3SwB8xyWigEn1dhAB",
  "key40": "4wWqDDmrRuvGEhgvFdQwKgcEJhrRtj2QTkhbKjByFiTW68bfJrDNLNrH27C2N4tr8Q2c6JJmtXNHt8f3qhCyqbr",
  "key41": "52Hh8ij5fzEHqDKJieiisuiTJwEqTCQmovV83U7orqzUbsb4DCBQjQumQmYRiUPoRHwDQM5Xd37D9BZVDAeL2dEk",
  "key42": "2pcn66NsYPthzuFS7NekDnPW14Warq7tx1tSA71rKsg8ZaVt9DjaAocQHzXg3MGKFK4Nrr535M9TUFZCYobrA58r",
  "key43": "4msso3TQ8DECK3NC6JiwQFREwgBuVJ8xfmsjYCzKeADFugKH48cCHALcTjTDdAyv5nCumwCwSMTeXEUtLQx6idQS",
  "key44": "5HcVGbQ2ZDD8BiPzKPnz12dtcQuxUxHQ3MhBhuX6KEanNX4zjS5Ju3fJSdnjKWqo6vWtjdn7uchsQboUwahqGS5b",
  "key45": "65G9WGMUn4DhsVo2tX6CCJqZfWjkHKJK346FqRLHUUCZiQxfLkKoxHFgV4QGsdQrWamN5E6qL9F6HfZRZHhLRhYg",
  "key46": "AY2CgXfhkYLCcT1wNuC8nVWUE79zHEjpEW8tyey6cR1NkZgKY2qqdHNT6a25bDywY1Bs45m1h7AorvvqmpbqUS2"
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
