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
    "2RVGgL93hN2UG36WGTqDuhGUS2VC5MFKhXjvR7Qh3GPDw24vBsDS38zWQ2W25c6FXY5rnxVPFKYuC8otfMcE9989"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iCfxPbFgLRT18Ah5cyArDVrNJ8EQfJz5qmG8MmdT5JkqDoN3CF5ksC4REaFvcm3uRJ6keDajxwWpFS2kgcAY9Ar",
  "key1": "2Pr7unEDoZ27JVr1equU5qCdmLqKhvsvJGcRNdHPsCrDsy4n7Jh4T9EruHN78ovxXLMLNuehGTAEEFY9CEXuGkAA",
  "key2": "4VM1pDXRPxie39GbJpX1hns9mdnmSbWShmsk25PLfzQHXF4ri4M8nzkhCK7WVfEhA2HXKeRNS5G57tuSiJAcVLT5",
  "key3": "tgaaE1Q9fC6XGh2SkLj2mJ8UHErZZEhRjS78EESrEA6FJM6DjayTb2xfewPTcE4uwsQNyE1rQk9fXNbZDjpsnSy",
  "key4": "4CACGVqggvzGksF9eD2VeWjwStDytNZKiGzcBqLh6jHAQFovErvjDk3D7EMjnqNtqXE6sY87bcHFycBqgX9J3brF",
  "key5": "2SLZrNcDo5Dr7arpqy3Ajg99bvV5NKXov4FuXP6KUdUmJyxiJ3wG9SEsVVWfCvsFUKo1GtNa5ActB24v6CgnUmvM",
  "key6": "51rjkWboAS22kww2toL2eJSLyxQV4RWvyZ7tvamoE5arkbSXKkjH831cgkJpQMt58xbg4NtPd6wPNh37UhWGFxJh",
  "key7": "2Z6jWkHSCvz1GjY7pbJTCAg9KYcjk9bLEFTXLq7KJKRrt9Jw7HwUjyBpfxg6dNjnR1Xj5KB1mcobnQgsMYRF6LUV",
  "key8": "BR5Nug2khVwszGnoWBLEArdmMm588QXyvyfe6wkMiVHoWjnjqZaBQDHxuYDttxKLWPjQzWbi1qt5RusvDR1JFNi",
  "key9": "2xwwFzRV6a7tZvz13coXATdLDSqujZ2ivSap7ybqJGqpxsm4xg1QP2NKsqBcVBgdhTRcNqH1VQ7muXVCJbHRUUs1",
  "key10": "632yc9sDHMdJZpi1CAcJufXi23LYy4whSPDowZxuu4pviU4TjAsxZY2zBnp6fukQ2WQFZQer3KeHyBAK9Xt2byPc",
  "key11": "SLR43HtYLjBUKr7DVBTrZzBrk3d2VxerCKdWfLscVf5ZvnW3ocurPxNRtrfnVeGA5r9qsfeVFdCFaCpjnpyiGM9",
  "key12": "3wt35mFYF6ijAsjQZ8dAoDcKdh2oeHj6nancMivdiDjHnRQfhjtaguZ2bKwfNTwBkYtvgAXd4abqmbCs9zm6fnsB",
  "key13": "5UoQLvGR8ox22ixArh37MKwP4pZM2r3YyacTYPG5iQvBKUKpLvX1aty3kbcMTfenP5pe8S29bEPsKeZF8yJ5QrfN",
  "key14": "4kgZ7T5nNwDFKbhhEcg1ArCRGErrV9qRvJE8dRifz5c6heEsvzcCJY5rFcQxT8pFY8KUeqL92wVMEM7XDjuBBLM4",
  "key15": "2teKEqwpd5waRP8rjN2GoD99BAfuXckJmjjH5HEhKq5HEqEngX7gMrxVAsMPqQdzo8B7R9ZbmMqHffhKUV8vBZsy",
  "key16": "2FBFmYCCWVfmoEAUC3YJU4t6q2ZDWf9Jg1YDFus9MwMQ7Lg28HpumCbUfbAM5serkKszh3jLxAxfXa94quB7ywkD",
  "key17": "4R3DsjhK5rPrkxQ62ZeMaBuyAVoHBYA7cb8WRCH3dQ7KmpCtBa58q1j36QvutpJnX2L5Z14piuxMbot36xA6xWiP",
  "key18": "2VZ2yrQfVDgV3Lbt51iamZ8BqaXr2u8cJwQsYQjiH114U4ENanvrGbokFRLE1uSD7NjvycAa1vCkZFbs39CeJtuT",
  "key19": "31yrMA6Qxujz4yjrHbG844pjvaU4tZSenZtUJCUYhoh3HXfA66pZdzRu4Kbddf35s4H1uQXimFb2uqbxS7cNUEfK",
  "key20": "63229pDk31QkGN1TYbKoqBjhduGocCtAYZzFZvcqXzPQXwkAp2tpfPGoPFLHdoPfZseLGXQP8yo6sLEQaLVint4P",
  "key21": "y63XNPXWE6uthcJQ8fiqKaLLNnZNuidxNQ3Rr5jZkT6fKe9d6v4tMfTPFFKNxVLTsghH9aRCfUoVoTTWyHayxqM",
  "key22": "4WY4fgVRNRG7SsEZvxj6omKY4HZmhAkTRcBiLFYCqVsWe39UHnTMtsPWZ3SHHrr5qB31ht1faxrxSb9NeRf5WG6X",
  "key23": "3cDy2tsV1HKRSg7MtnxTw82t2cNpzb4REVe6RGPr9PDa2w7QooJQKvgduBv8kqhjErsmN2vbG9EqQSq3Z9h49MwH",
  "key24": "ZZu2vWQBkuKeKFfoMoRye1QaBXgmyq1Y7CjtYoMTsxpyh9LmtN1EeV5g4Fbtw1CEFMtbRw4yiMf8hc5XpgJqCx3",
  "key25": "9mjFH5GGHYHeeeUKjixwDRSfHHLyDBnCFBShVzem1ExNFRBwecdVYBJ4goHUf7bCy2nVaexvXegfJjQwbkTDiW3",
  "key26": "YDqteQvpxHHcchVnGoHN3nEx7uTMmu4aZu8jhpfCuDbahAdnVxyChC6EYw56xJgvepSo5DSh8cQZ5DG2Wt31JKQ",
  "key27": "3ZYa73NVvJ2DWog3pGAvND2K2N39jdQz2UELWbeJS3enFaHK89eS5FyZjWCRSrzCkuAYEL6KURerQ3Hk2fqeWMuZ",
  "key28": "2jKeqZGXzFMtiHArbdFANX2f9BvzrKSCau9etiD9ZrSGNJxw3nEvRr6CgptpjG7typfLBESXjCTy5Bbeq5CryDwg",
  "key29": "2aDAfwrNiLZfHWFBtMSCLZqrb7yUSq2upapQDbA2p3HXFHcNERr5nXJRfrJ8aYGsGWjs9J37bT2rFSLK1W2k21Y9",
  "key30": "5b18cKGwxa3aWEUiGQGSn6uwcF7DqTDHxqtGxA7fDuZ5zuuQcyvMU6T19vK5c7AP2qD5FYmmsKijn5iidYEV6ezv",
  "key31": "DXiuAEEW9RV1CmDn5PhS2K4JtSyEasXzqnqawFun1up4mrjmDgAw8wFegxBik9iqUoqNWgqTHj5WRikp4WoJx2Y",
  "key32": "i29dfbw95LHBdmHGYGB2764mqUYNUManb3V1YvAqncsA8ogh4FdkpzRc66XnxsfKae8HAyxyMHFJZ6stFU5RGnL",
  "key33": "b1u6HoEwKpLcGKZeh8fhD11uHeD2Y4oracXmrzkmHGhDGow2eZDuUy1qXmNYqhqHVD6w4sf9kJRoU8ZkG4gkjtR",
  "key34": "98vbQTuZUK6rpApDVfWQ5GSj37xxb8rTh56RjQ4tEbyVejhMEzMoJGAspZ4zNTqhBwKDLDi86tJSd6z1D5tSvXa",
  "key35": "3zrF6zJfQysjxvXqjHjpqiVj2m42wkfsAqekAaQQNge1X3EWbDJbWvJSD1mFPBx4my3GVeRFB7gdfxkeNhaiS2SN",
  "key36": "M4VgC71d8JCNmnwB3xXpHSJnv8GxHxBPXZpppPQAkeNdmn8qg7ALzmUQRf3rJF6ieRDZwWeWzVQsp8EhFTtnRX5",
  "key37": "s85CA2QRm7DKg3e6Zud4q1ujjteoa2YbK4fng2dWBjSVZ3i7AhBdYafKbNZU8xCcjy1MMF52UJdxbYif7Y9LHUx",
  "key38": "2u9fJcJNtiUaasVhWxBRqXWVtdqP9sEM3Ehyuuud7KSBKimEJTNHgsbRAJ2KPiPjEXYkT5pfoGDocM8qGjnnR9vk",
  "key39": "44qcmtyYQRSAGPGQsyKaqRxfbXjBLmKhiYmTP5FptDTxaScbnSw5RoDFLsN4rvboX4iZqWmk7JtATVwJQmDrdkeG",
  "key40": "3HKJyxxLQG8bSrKAkTyy1NZi4dr54ArYRvGZyxj5k5pWxNLpPKb2h3mnp7EF9TDB4VmWqaFe5FX2xbEbVGiLVA1p",
  "key41": "qjP5qJCjuWFsD857CnkpYKmnApUbTX1LGPaCoQJKGqLbGvgysxeKth16bkprFtgavwKNrwix836ejVsmJ9SjEtg",
  "key42": "4RA3wNSPNQmWf6QgVhMe7kxQSxsgSXXaGxErHMQLGytTniHzmY7FKcW9HyZaEyfy8PjkVdDCg7FCQWmoxTVhdqJr",
  "key43": "61FibKfYXMakRXYv4XVxLRArctKcgSnd9FDpkL6Rw9zA6GS2BoRDHeVKkfUfgN51tBU7pKPHV5GrSTA4gaJVFSvG",
  "key44": "w7deg649qhjM5zRGBCD725msPgqeSXzdJtLWP1WWz6uXzmJXhG17eD4dGAB3gtKToX7aPhL3fjzqw85zBAi7mF3",
  "key45": "5UvMXHzkfsY4MNQ6smbqPyjvc4kagYcCEkH5wi3Jwiyy29BiAkPz35b494AjXcxw7nc4933UFn697Gzg4S7VBspQ",
  "key46": "3AtdSZrDqNmZAXpN3QwhfkgTvvN7yP83Gyvoj77tibbugRgP7Dp59vXTkFACpA5HWYdPN6Pq3r4QgWXSbEHEvGYj"
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
