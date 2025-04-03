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
    "4YcNvFNGkSxPiFfEuvEtcXo1kFWpQGA7WxNHTWG5255eMv2oCKVSxutt9zycQtVawTPd8r3v3a3fUwAsiqBbhLgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ffcwL8KuEgaNgecoL9v2H1eWYaLmv2XLuVSKhZKjmnP6sPLjbTg9HVPWhSXTXrcfTq8Dsk4ikwCdiCuySm35K3v",
  "key1": "5BZ6ezZvrRzHZkqv7SEvTAKFWFwWSP6Ydg7oTRpALU5uWQSeFCFxQY6TYz1Xz8icY2DQ6adJLUaEz7wb53kJKEG3",
  "key2": "5ZeVRutAVPHtBRyjBu9FGpcdZdLH4stazgEQm1KvgSVvJqhVzE8h6747jhcWev9WEGH81mwMpZXKR7Pe7dz7XFSo",
  "key3": "59wFZobbBqaXcmtjS7J4G35eShTixG2VVb2xEwCu18R3v2gC2rmddZHLXJitsGaUfV8zTijQuVHMSeUKLQLubKDV",
  "key4": "5Ch56gnExugcxTWxDcmahamYorXaiqFKnYT9HQujoVx918sWErXdJWutjTbQVphwMnQKTqww4pndaGcZtWA2Vp7D",
  "key5": "5aYQ1CBfe7BFWC5NZaWmMiivPyCRy9k5w4YeLGBPcVPmhSpcJg1MkVr68EqHevNXzBV4G7umbHHTh7sZ44mFhM7y",
  "key6": "3gKTxu21WzY5g7cm9UWCHDsBYXaXs7LZ961ULArwPykva7w5i5VvmHn8HrffoPPyrdNaPpSWcckNtLrXiajKDAry",
  "key7": "2vhEfhWi4WktJecLsXbaaDMCum4ohJFuzLZinNcZAVUzf6eBJhzLXANHSNiWeLj8PmvvztkFMg4EUkyWPmfMcRjp",
  "key8": "4FVZivBxw4ozLa9iNV8gckd9pT2gANzxp2caQAPMfaGn4NokvYL7x2GivcNGZx7qvtqWxCjiQFm388WvJS2NfGZ7",
  "key9": "23JWgbP1TJQi4VbruTKWaNqeCBND32usShxW1NDjW1iaXWvFgTueqsqmfKABZy1FAPF2ZBVHek3XbTvLaxmkHKmt",
  "key10": "2Z3UKHCiJcWErH2CRkuKtLM5cHxSR9MuoGpnL8vB5ftcG77mSaC4PBjYk1dAWKjACsfLLsDEQXBQQHiKh7455Rd6",
  "key11": "4WZJx78upyV4E8oP8vQUw2NB7Ar6HQvymYCKFM5CyNMgyDcybEi9eoPCkcnGMXDDenJQkmURcE263L2fQSTP4Udh",
  "key12": "2weaJvLtxDUfpggReEwfjyog4ubv5Md1N3hQdg2CjjbMCb4Kgz1j1sdiU9L44MvZfwToBx4u4pJiXcAZcZvmTNUR",
  "key13": "4jftCM8XFyGJDdz7xFSLqRHib1HjWG6y7hiyLeh1c15vKNj1Xr2FydYBTLt86tFmFq3jwvNsHRYAWLykhLzVszzp",
  "key14": "2Px8GWkE2D62ya4ugKRWKbyJKSEyDYMjjPHg9jad2xiBUUmZWvdWqYUpmWyjrkwYLTtGy2HDoE2KrsfGHhFUwuJV",
  "key15": "3GdHLPS5J8JB9c1uVbsRW1rF6moQPZ5BwMitjr8zPVeowNKskY4czsKY8LQ8EeExThQavrHyBALokvwbb1DBuN9T",
  "key16": "3cha7L2mwzks3qh1iYDQ8qV9ZEA3P8HSg7Mr6nRJ9rTZXQLwfHQnbiioCRiD4kkPpP7i1Q7PX2nGYJSe1FSUpBDe",
  "key17": "2LX3sW8nwM3STN9zQQ5E7fakY3ytaWHYK2u89Q1yH7yeBraBX4HkcSQWiHE1kQYfH2md3QxRdbhtQvsj8fYH4TCG",
  "key18": "RyFBgPe24LSb5oqi4ipMZ2yMBtBYb2VMfWACDy9qfWquCRuvpndRB7huF82NtRDdBsjGrCv2UWjM3BCxGz3aR83",
  "key19": "6mS6W73hypdm4chkHFdyUSox2LFv5gtmKCRB7ijfZjn6vuvqFApG756u4W2Jo53QbffBc2gdCHhmR68k3nQv8Hd",
  "key20": "3d3X8cJLmbxaSfZPBTnkWQrjeYpmLrpXr458RfrYYxNjJ4VRFkPmtHJP9vSz8PYafAaLNzmLFjUqCUzazCS27VVJ",
  "key21": "2aXCkPxFErHntKG22pSxkRZytBxFAQqg3YXcajhJtk46qByVuEFyM3Q1wBS3S4fEoETgssFmPsYMreX5gt5F9yPW",
  "key22": "5CvsjixEhH4Ry2fDKQkDxdeULHgV3vuSsLysGE7fzQmHrVhYz3MKBXnCBEpY5vsSuk3VYhZQqeRGxHyUuMyVj6kt",
  "key23": "3vpihkZBCQ5behhfk79RneeApp3k243yAfXqri2Q7xAdJYo9tLgv1jpPXLbmtSd7XXu4xzyedR67iPLnXvSkJPTH",
  "key24": "2gnzDn5LauMbnvyNgPb4WQ7EQygN12yoiJGD6XgnXYQvZNgCj1Duvt9zNvdh2P17jzRteTDugYTUgAX3HrPHAzXq",
  "key25": "3iqZeDEJv46GQCUwoXh2Vgzx8fp6JjdvaydXU4wwr88Ag5bSRqwKrGDvK2Sxqn4L3DyV4o4G44DjyEFpA7PUk4YN",
  "key26": "2JS6AjX9FvgSQhVxeeZVo4P51qDZrNwT58NqRioTv431Cr9sH7zF9p5qkvtuqs5iB2Tz39siHXe2LkjjiuVcEQiZ",
  "key27": "332hs8NNuvweRTH8qT4gupWQNJ9m8jKtoHyfP6iCbTUaw5EUgoC4nBiPDrzsKfYN6cxBg45nSHAR3pGpCbtDxzJE",
  "key28": "3LasHrZpDTKtWfGnQS38KzaheJ6Y8aCBcs4LKZ8MMiDkjYicm9g8FcbA1karGwuf2ezEp61PezeZN5TuxG2Ey1EZ",
  "key29": "2UKYsdwnu3hEwH7EksvyisD3fejEBxiTZrk2yJGgUoSpUrp1VntGn8p7EzzZ87FoKXVjwBhN9jyArztcCFfuJ92Q",
  "key30": "3dC8F7m6cNHWP5trR5zeza9XBkxxkx1SLd83D89kjYdTG453fs5v4RtUpEc6VnTQvF2GN63fEuMd1ZkvZcdx6kiR",
  "key31": "wMCZ61aNog65hnYrLN3QRcEn1DQk2feARwDWU9ffXToXFhWqvpFwxmPs56K8Qfdvh1AxAaLTgubvTceweYdicbD",
  "key32": "4QnKd2ixoxFFz8uoSybbm8BaiULtQdQRKyw2rp16zjF8xbRHEmMP216nbDrgR2Y6rUuoSxUSywDRbqV9XbABxEvd",
  "key33": "2Qkb4CzmaSUhHsJVrzWjLw7ihPzJxsXWqCixdi1kFLoFn9D5VQa1k3F7mVzDDMCPoVz4KWvuqPhWzwVGFZwsHRBB",
  "key34": "62WTTvMKTTSZLiZUosJErH3oAaHSykswiud1W8JQTxjW6JPtDpj4fN6jqsTFe46cQnrLYQoNCvYDoT2D3TQ7C1GL",
  "key35": "2nna2UMYL8Eh4MAmZxJ8QYodGDLJV8NXvDMU2fjrbrzwstFRncNhcE9d912GUMTgzyuKXweuT7XxXC5vFoWxSBwW",
  "key36": "4QiQ4TixbxBY4RcUMmV3LnHdQxC7mnw8oBrdYmZ3jDCHyqTxhCE83Ra1MYbgERZerZGaHanNmkiksuck23rvXPg4",
  "key37": "ptJnXekj85WRaeW5nnCGrVREmaSWNLaTkTgPyuyEAhQM9Tma6eHcSNRWWTJj2ArDqR4oStmrJHm2buXbxZrQy9t",
  "key38": "5oLKrbDUd435aA2g46noakxmW1N8tAhbdBFqdGTCqeDGpuwCEuo2KmhgfDT9DHti4f1kxVsE33gzBYUBJMEaehk7",
  "key39": "2dgbUbnDhsv5Hvti73UbRp3XhNbBNEQadwUkWCMYKKBnf6sQotBgrtDTwsksvYLbBeCh8apX4VGvKsqJJQagTrNa",
  "key40": "5WfSUco37aiFR91X863ts2gNvoRDF8DpKTpijQ9SHj3Y7DCWXZQrpVzvqf4wSvcj5iyeYtFJAekyfreiGSxYBpb7",
  "key41": "3m1Rz42Dx54CDjA7w8ZqrTJzkt8Qc2tpbLaJjzCHL9wer9zmayCishbdxJSF8jAoD7xovwnLQHNFVruicyArKbXu",
  "key42": "38C7SttYCcYNFKzsxEZoe787RHcrcLeo5XawwysPvz6BB6aARtiAHktQzve26KhHzNEdxXyA81H1GyygT6Lza6Nf",
  "key43": "64PrvfdKALyRWDdBr14U1R28CRLx7dfKrbCbKnC5XQwCKDpiPMDjCb9z95bRSXSDut21zcWzF1ah7Ty3GpntnxL9",
  "key44": "31dWmrTf3UJcPZmFor9HBwNqATtFsAwfja2Rczmzkk3BN5Qr5aqf5SQqG6xscFnfDDtZ8K5fnZxXScTanaM3Z3pZ",
  "key45": "4gBZEhadGkDygUbZ4kDkHBo7wgTn1z8X7VhmatYrEGmwFLN8JjRtYqwpLm7PapT2ssRUnAbuf5tnU5ZF4p79KHAc",
  "key46": "5D1VhNZWh1NP93t2DUGuaMqCs9MQTzJK9ZECapnWYjERgg7H6u8LkmuedC53c5e3RvutUbQPreuQgWCGEyQMgdbi",
  "key47": "3jsaAQJpsMXAHjwQgHXQYN3Zbb7GDfKHamkDshGgepaghVB5NQwDJ3w4vcrtZJQZMqynnEcmqveVGZsKbc1nZ178",
  "key48": "2fmpEKqW53KA21kr2G1ubFegWj7D8JU9RYY2vbsAVeDgyyYvyWMjww28csFqJ93tUgRrUGmFyyBEwtAzatRn3ztA"
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
