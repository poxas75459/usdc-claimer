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
    "5aAPjgXpw4syMHk1NNMMD8uiDNE7FSkXSVJmXj9GSjEFbhhqWYk7peWPce8kB6AEz7UQCa5zACXoerA3gF4CRXor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ycBaEXvgDBj7pAvx6JvXAECvjoNX3NtbPK3KuVJxeiJ7eqbA2hcuU1Fx8LxSKKEE9NzvEMLBr1n7g3svSvbEycY",
  "key1": "4SXsJhHrBWFd24ztAbqP3i3kwY9TiPCv362YmsoqPke71pYEZ8o2cvfYzARk6kSSjpi2rY7FrNw4tB7ufHvUktM1",
  "key2": "3U35EH8u8jzFEYmhFnJCBuZa1seb3eeJDNaD9VoJfjGkqTidFA1raAhPzB3xigrQu7MtRSDXtPMsiG7CEQyRL1jJ",
  "key3": "4kKwtiZfBJKt19UEvQguF8bjX2k7ixHx4tucbLu8JRvq19DKGDsqWc8h5FLYxpJNmqBLFKFBeBTq91ZULy1tmqsH",
  "key4": "3bVYVPJ86sP3jKW9dx9r62op3nFtx2wth2uy9ViByx9VuvpaxrGizjoYTX31rQKXKPUVwdyFFw3BxsKF9ahobhGg",
  "key5": "6bKbtHXmsyPiJt8nbfqMSiqvKubtD8zxKUr4oqEjuJ6cusukHAMCHF832KtXzAwCLP5WkBSNx21tUcPBt5ET55x",
  "key6": "2WiVzXGdAtzzkKMdcJm5RCatPcMxpoYKSSWt6Hcxc1gzrGUSbKtAAXKjdn8jN74BXh6ZRayB5DPb745pcptnqpxJ",
  "key7": "B4xC8xzfpkY8dvtYZ8HvC5wKRR7NRbeSTWWM6s4snSaqQXrK8eKLJzSyuZ2oHx9FtsGK4mecu8LhhQaH1oMmBkr",
  "key8": "34Y1Yx6x9Z7sUiuZnXc38NtBBTfwiD9CbFM7rFJXoEcCatEmYpFeTWS2EDRYvLQjSy4gHwEm2pHwdQ1qncSJ8Hct",
  "key9": "2EUqm3vHNkUheuiViVzTfynCvYHLU8p8DjobsXZjaZeJavGgfdgb1gLtaCnx5zoSSHqfMa4apz1NYo2AaUGDcrv1",
  "key10": "58VDcy8W5FeMVjYnPg5Z2414ja1DSf9eQqJVywqKzviTtj9JW3nat5AkDoZ7aNQNkqttHjNFdQqnMKecvcnjqAXZ",
  "key11": "bPrTHqjvJpR2zzyeCLhpyRsaWBKHgJXbp2TC7dc2ijphJRpzvABHo19XgJvc9YzrFpAKTwvaUQBzdHoF9MS7RkF",
  "key12": "3YzU6CZVmjfMVNebTZ7bYcwXWMGRggeQrPLwsbPMCr2AZiFp78UnXfrQtgMfqe2dcA3TEcehoEXKGfb38iMyuGNu",
  "key13": "3ypwe8QygpjkHtszJFWPUetiUaqAZ2pBEqABe6ibJQPiF6W8EgR6THxCgsstcBEyi9WxjGgwayqcZSM3GPhmV2fq",
  "key14": "41GxaGtuHZDNCuwtcNvsTnB8nATaZE7yza1huPdcoLMUYqdQoaFCqiVWTuiCC1hBCJBzEMhfcGYdun3x2e345rgp",
  "key15": "27jGYYSNUMSZ1bnwreFvxMV783SbkpLiUTEiUeJJZbTvQyqpdfY56nmc9oGkQpVigF7ZFB4bAVLh84ywaueA4g71",
  "key16": "4UYcTAePwufCkTJHGfp8Q4SR9kVRn9L2WLykg6kMUTv4vuQefb8iTypHMp4NfRqFVSHtGCgfkpwS1AkHKXBCDyTG",
  "key17": "C9zwMHShmvQsGf1aJuqqYXBaZQCkqhSDxhJa8fuxmH6CLgGGjdG4cdbsZ5zKxP9wGHJxRU4TAGvwX5xGAMkqtt1",
  "key18": "5X5C4N9xGgkdLVaoG1NBALQGMfNuFR9SvSBv4FSM5KeD3xfhDsqM8L7EpU3cP4yoK4yPQjV8mWfkqu2M4KGnYTUn",
  "key19": "5KTN2ozhs8DEj2PFG21fEq3xKZxVNecGzX2K4yLGr8nszax4c6KJFK1WUL8Hm4h6NV2T2MHAU2458SWnonCbtc3F",
  "key20": "2E5uBMoEjhRJKbFakhxqNpMfRrVA1CVDYnwQ5H41oPvMZaqf4zLPfgHJkV7rcMXidj8HLhiC9nwGJn4SyEhhy3fv",
  "key21": "5pa7LZW4xXhpt99ug4Y5M3gjdDfsDzHWocmVwLywGVfopzt7NNfH2FArMVDpkngc2pJWHvmGS3AmmkjLAb97b2Vu",
  "key22": "5YFCc5kuA5AM6Q7MWLDpQU9ENenrSXiUCsA4DkN2qQk7AGunCuM4mE3YhY2e6SvCgueVk1531mzLSKTxuechuDrB",
  "key23": "GPpMsrYXxMM4KwXjYRrdVD6RoabmBo5ZNbyi2uxqijhdZZCDvwAUR1eo5yV3hV4wpUynmDcHwYQfAPzUwchN8qr",
  "key24": "G1GgtV4fxXroiRgy7xWCQAR67seQWPV58ZcSY1PR1eqNHGWk2VUjjV5PFGfupUMPy3xpnU6J7jjH4i11DfhnkVa",
  "key25": "4fKQekhE8AjW1JuWyxv7mzrgBtF1W5Gac77m5GtUfCFTT23aKZFNv41tR7dYoF947HZiJCqC4mtCSs5vQw9WDf1g",
  "key26": "WDk7rh5bXm4Lc2B7iKjzNgMV8Z5c53LVoGS3pm7W8yT3ZxvgyvQhNPkqiQKcUyNZP2dZDfitF11CojMR9gsBbuo",
  "key27": "53DvSxQWxh3VRh7RkNwaHJicYmk98vADXw55Wfg5LbTrSe1E2g4JTN3qJP1sLVkwpNrc2aKw6QENKXeUB3uZb5jb",
  "key28": "wrH72YPn1tLbeXUfy81QKNANjfwJci3XEw4MkuxMpyK6oUUUzMmkkbzA3LVw3N4Sxnd363faXrwVxL5MdUQDktP",
  "key29": "5JhCJPwqWyzijwhEuPeKmmy1XaZ9d4q5eJ6MMNeJeFDczH6zVwLJBCUtm6hkigGcEfhkMCYgX4kdZSEVidU1gyyy",
  "key30": "HRdV439MF68z1DYdAP9TQHzrH2ZsX1XTWWZfvcxsTo16qyA7PCxiTnmH89fTHZ1ELook27gSiqXYH4Wd9w1EthX",
  "key31": "54yonNQwmaC9g4dyx1NGvM6TayzBcKGNbf3UnSQVzDcoJMK3BAQbivFcrPfMqkNGr58TWyjUuZCm5nmwR24GCJEz",
  "key32": "5CF1t8f634Uj7nwCVo2kXQp2RR2WiqZbg8NCK9GXxpPTHWX3ekaHrQ6fmbE3xQRpLdFqpzcwQwspdY2ciavm9jCH",
  "key33": "32PMxoUEbHAjNM5i6LUzXUBaugqYLhvQYdG8vWHCNagKjcHyeLF7NBMpW8Gn5NFKNLoTmJ19GPJHmWLrR9tEEWK5",
  "key34": "4BAMyiYF6QhSj21PZ72WURhba5g35ygFdCiefjPagUSLvWLgEixGLku9M3F41E2PqjPbhqzzoUcmZeVy562imEE1",
  "key35": "jJJ5vcxAWBUX1UygCtcaE31abofwGLLATU8H8zscFvyiwJauNQmL4LxJKZ6dzSYUVSEBopFGUVnF6FhS4K418B7",
  "key36": "5oX7ZX8kqs4ALXjJsP3DG3RVs4Vj9nAsZyoX3ZMUQw7hzoWU4n2M1tN95MEQwLUrPHcXUdiRd3aiukNpwN1bF1ep",
  "key37": "42hvkRrcw94jb59XC66mSUrvsgq358opCgEkmsvFc2VZ9Lsm34HvSRwyL1eUTpEDcdTPKJvs9LXvYHhW8LSz2Aor",
  "key38": "L38qLMt1HAnmkoAAQSTMds9n8ZbQC2zcbvzXaHhFYsKauFU94Lzs3FoAVAxDf2dX5KZsNW7GaWwJ2czXKkJ6PPj",
  "key39": "3eEmJdbfSFjL8mkNUEENR7nxyhBwCGSNBREyoPmGxe3N23fW5Dxn6rEGP5Ze5ATVeiCHBwXpXYPdNAPQtQ2ACQiG",
  "key40": "3sp8f5MY1fT4JPkXyrhBNyMJMzxkgV22wRQPxRaGBCWmF7WRyDcQsbnu5qHffmPrkjbo16qHbzPtZ59oEovnjdj7",
  "key41": "2Mi8dRqyRQMAV7eWXh1gdKDrKpW3ERE1aqMdYcwMa34rgj8UJCauE1pmFSYgznveqXnYhnPJoF9wGnmv3mGMgKYp",
  "key42": "54VJfcMU5qwUY2hBGQZ44fN7TY4oQSABocXqRHVnxxV1GXcfakdbaeWK9UZFeRWuBUk5xqxSMvciS8KLTZCwYw72",
  "key43": "4FVHG2gysA7YV1F2K4nF4AMLNfhNC8Tw9zdevyy5FU5yCYNnNtDxKoddK3xbgyZMteKG8ookRNRrhRHn4Ro3CmiQ",
  "key44": "63nb8nZ97my9NXT9tC2xzx6ryXEx6yb21ZKG9wmSjaBY1YgpR8ZvmxKf8gdGWPWneTUbVtd3kE1mHB1YE53yZTce",
  "key45": "9s7CP7R16zF4nC4yzrEGqEswpip6mrm2baQYRHDdPtXedZKguKyTgtYhwK9ddupt6iVAS7ZpopnQnqUsmvz38Qt"
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
