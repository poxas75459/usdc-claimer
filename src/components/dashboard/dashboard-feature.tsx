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
    "2Gu2twmAbDHK5KJWbSwniaUV1xYKJyRL6cRGcSFYtHpTKiRM4AX5QzaqMEYnVf518KkCeAmoCuFag33Tgd24vBzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eAE3CvhHsXjTtfeV8waZ6yL69iTwMNQ1NDUrXxApY63JBrZ1wJv5fHRXwiSD8i6P32FMJMR16sVTn6vww4j1Yps",
  "key1": "xYupS4fiZSjUo8UsL9vKedj3vhzR2j3yTKzNTt6c9DT2JVkTmNAMa9kvst1kXUV9eXW5KcSsdM4UMBcqZ1hczj9",
  "key2": "4H2pBuUZHYxbCDaKbdVnfkRM1b5tvjnuw2Q3CzuXPDEHwaVJNSJJVr3xZDbP43v6J1xKBoT7VsUQCRUEkrwLJaYH",
  "key3": "PRu1uKYq5Pe7ZRJ6UKRAamU6pMG6ApEEbWmtSm9TanDxHbsFnVjfhP76GMGJGuRo9bpKB3JVhgEPApC51ewzCmF",
  "key4": "2fWp73FsK63cm2x55YfTHNG5DnoNWPGLTkcDjjM4KRUw3knRHRtQqMp9rHN6yn5niH8oP38aFznX95mS7VreB1QS",
  "key5": "kzXYhWxkk3JAtv6cbEBqQW34LuQUMxqLaeYy3YhMCgRdTu51wo4j3thVdTGBjHpKX3DAFx7aw9kainH3wqF4jQF",
  "key6": "x4LgH42HwpipydKLKHomBNRPXpBtKng4Mgf5qUaN7UgUoRNvoK7VdC2rNLKMdDTLNVWYRMAzVkCY1YCaMV1fx2d",
  "key7": "4G2x4P4ujyTLia6KFowERnCe3j3UAETemf7zr9nn4TPmrgF6azfHxBJaMDbshxn2eicytoX3G2ezRs8WVvq45zTK",
  "key8": "4b5FSUSRBsXKe1Sw5fvcwJ1JgRtdUxaerx5ooByKYsSiZxEMZYevuyGTBB5jH9KTNteJipEM9k5LkhsFgjTmWXsj",
  "key9": "44YWvGG4oPKPoLVGJkvj37Xr66DYsxkawRR5bxY3jajpmsx6onWFAsCnCCsSHMzoWjfjNxdesuCMxie5GUuRiTWY",
  "key10": "2fPcqkvGFLhsg5uEmnFF1rnxjaoMM8ZigVNwbnUWZK2hfFmzCAT1VaE4rtAcovqLsSKy2kcQJbTGaFJj6oVf25Yy",
  "key11": "2LzNbcWndvdDtiahdqX6tRZtV54C9e2TvQ6DLMWBpa1zuQRLRv6s1Bx9u4LYF8hrXJqdBWGZMf2JtGynEoZMioTy",
  "key12": "5ZpUVEbQxr2M2v84faBkTG2QCPL85m5SPTUWYqKm7HW8HrrhVGJbb2kCdXnH62enYj4k3MT7YCDUpjbMc4PQqUy8",
  "key13": "4z7Ren9denY8VBmfQVp79zuktT6YQSKYLTvBfp9HM523ebJQVQRBx4NCBBo3vH1gtRwLF7Zju22N2AgjcDVm2ZKv",
  "key14": "2MpQg7n2RgwG361XPvadVsbg73LwkJkCiroXLzWki9DzGnb4QD2Lwuf3gmYTohKsZFxiHuxAxSsjz5yY8tGdk7B3",
  "key15": "QM3f4rEVz6jrRjkbVLcwbeJL5SMzc51ToNxiqhKB4Z7S5sJEAbdeVpJ342SPcw9D2YP7hcGMmeUPduTrdvWApPC",
  "key16": "md8xRNCXS8K7vfnhJMCAhxrUB2aLG16B717hA92qLwQ4ZFjmATNAyTwfUVyEQuhqSF7WX9aBLwiHVmoNekaQ8HD",
  "key17": "35KgeXDtQnE5i9o4h9qgvRQ2dBwjyH7wyiBmVNsKDvzaXaMiM3zZnvLQnHRNfiMkgWRhLHyyNnGhsg6Fp6i8gQCA",
  "key18": "5GjcFbfhrGwyvHyu1TPbgmCrt8NM7L2RtkXFhZfCWpcgCKBJBPxsAa87P8sDfxxqBNYVxtQsEyPAckX1CkevRja7",
  "key19": "Q2VjeuCeatgxWPU6pLHX3th4iFpaFyqTiArShbu11v8RpDkHoZakwFBN39wiwimXdbKV6GtEGDWPxUt5wP7Wvh8",
  "key20": "VBNxt2ZMYhQRcH4Xs7DjYVuJMefR4ViPLhPHjCRzMrzwQYdgRzDXRtjB8MQmTFEKixgRbnZEyHBXq2HP9dCBgwt",
  "key21": "36DyALbsepb2k1QEQDzC8tGfqaKxG39sHHkZZ667ecefqVZmedcSngnMm81TbRx5GTnfEgkU3nkGiMYFM4MQgU3W",
  "key22": "4jakyb7BdWFi3nqdqGPJBMvcBPT32w7iECseFsZphL5qbGcKgL3fQ7RLiCPn1nnS8aPBvQ7FUTFatFXvdP6e2ZmW",
  "key23": "3Dynwp6dm2d1ahNMvoc5pYaPPmncybqoFH9Jgj2Baw2ppcdg66iNtj7Vvo71WHgsQnz3BeaZV4H4kZ6K6jMzqD14",
  "key24": "WUU5eY2GoxyeCpdJu5BTpCGZBEYx5YtQP6q9fdqNHa58HCb2TqMN37E4Em7FBUmXrhNMe1x3fp6GzdNRwBGA6md",
  "key25": "64djqobCLKSeuKStFzyAW58bma4sa8AAdC5AsDT7yvCKbJLQpXWUJHSgHkyFq56GMuZBsEP1H4McamM8LgQeYVe5",
  "key26": "5Er3SLfBiix7H9MaCGfNtRc3vGM7hodEj577hdBvHPvZrovyFDGb2bANv2SwbNUo5ABrhGGNrayrmtfURsXJccwq",
  "key27": "5DivDhoG2TPXvKz3tQawkVNjz84NHR1PrMDUCGBtNEBGzM4nmFYtzNsVkfjZUMm2TvyW18BzLoiL9B9WXm9aS61w",
  "key28": "5iSuYz8siTNp7SWkpqmeJguk7XrWQFsN5Qzv9xD6w2DPJB3ptSkbVY82Fp9EP1J96U9eVExEJaSDEXB22PztNt4V",
  "key29": "4TbYfGovrqJ9SfQdrpRP1Macbm952bAPnfY1cfBaNdzk4mB9s9WttYCG8nFkw4sjgbKwAtfzXFJmvSp5qeuU5Sxe",
  "key30": "2pAkBWhBxj71K3twXVEevi8ngD4izaKPezKeqygMXdcCLMdvppsqPpVzzj1UNSMPkkBPZH6KmxCAiRTiZLLwiRUh",
  "key31": "2bHd3AWvuhh3VhHtcC1CC6Wk5eFGEWSELyhQrcuoV4LCKihzjshHe7SGhZoQWT78YRyno2UTXHF63JfT1GZDQjvt",
  "key32": "4yv2SpSdnaTBvrP9NX2s5HWAJCcNwFXJKAU1VF3QqsNBqUN6W7Kd2p3wRY6VrKgxR254nbbn535b5Rf7DEnRb7je",
  "key33": "3DASfyW3KvjE7fFma2jAPMRscDz6kfde9bkLBzZbj5jSyHBsfb2qZDR4jhyhGCxTJB832vtd82Gs5Dvhb8sYbedy",
  "key34": "5s6sG9Q1QmbGgQAZ7wviPEYGxboFE4rBUa1w8VX8RE32Ved1nx5hW5za5AzcV874XraBVPQ5SrXfhLerkg2WxGnd",
  "key35": "4r3V9CPVwSpLaKXfG2HC6zwtmNDCExjwsG1MmQRc3ZFb5cjkyGzPwhGqUEuFGjx6DA3j8WPvWwg87RaddoJoLq6P",
  "key36": "4VqSE7tnrCHNJVKZo4PSXYEbbSvA7Jij1EyatGP5hnBjDTKbriAnFyfADYeocJEFiZkWgdEXfmngwMsPSsnbeCCR",
  "key37": "2JU8zpnKJJCJATmnKzDcYmWGyaNwHJYz53J7yBjygkhURxKdt6bTPx3gbwst3Yq3J6nmzxycz7s1XMxyj751fHy9",
  "key38": "5xB5y5roq3pWgrTpecFWzKF87VUZmYbDmMHvJfvb9Vo26bmKtzk7oJSyCG5XxThjaATTyd6FkqsqLURjdmLXATLV",
  "key39": "5ojgzpddVh3dVp3J7cJAQNG71By9CJia92C5ZkVJQeApnjnvWZUoY1hN5eKRznpwDwoPGLJwJWiZyT92KrxkZubC",
  "key40": "3BcWEWWzoUPFVvxLxDGr6cNcMSVpxjd1p5LAFjeNgyfexZgZTXhU2LnJ1QCUtQEDkgAY8CBEAFRnyY3u5kAumkj5",
  "key41": "2eWYfuiogWiUzmjyeAXWyuu5eh1uDKUspCLKYBXTvx2J12Uf8MvdqxUqKsK1y7rUNv34NrT8tHMcFeYP6sE4Jjim",
  "key42": "5F2NZVNB41AhFFa5oSpmHnuAYgRDKADkMAX6Y2RAY3pV5o7Xq4cLjm5n7Pjq3nfMN6UvyEAKfvaHbEiTJN1fo8dS"
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
