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
    "5FnU5L3w2E7Lm1Hfszcdjfu8gywaeSFCFxCMupMdHG9YhXXGDDkMTZ7bz87hVa1BEArQ4hKLvgwZBaos9Vxkt5R6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NGNgZh98ZT3XzjfBnvekN6Gp5QLGXfdfShNMqvrmhkVPBr7cjPX3Npe2Uw3Rt98LntkKb2k4yL9f1DzJKR9s8Sb",
  "key1": "4s6HtNXsW2UyYazoKDQEs2LdNZarSpQSoyJNjr1b8ieZ8qRsXwdcs5J8aktMo85BiFHyF3n5qrj1eYvXtj94uaKc",
  "key2": "4Cy5iWrTVbMeriCTHqxi9SERiX3zAfi2G2Uqxfve7a7eRZyejw6SMryNacz4M36A9akPNhH6zAhiph3PgFopkRZJ",
  "key3": "4NRoLDnjZnWyxBqU1GgLmW5SBnFJEfW1c6FSBHxGxk8NzX2NjZ3fpFk2nwysWYewK632i8kxtitfj6UiUhwyBUjs",
  "key4": "2w5xfZxeLHN1fjWkMvhYXhXeAh1sXDmJXjrA5YT9Y9kJodcPmQ2PorF9JtLtdKzDPHLVRAhidgoPhzSnceyF13Mr",
  "key5": "5rMXFkiEXdQNBvU5jDCLh7cTZtJ556mn5ZoD7Cbg7YNjZwGDAPGb5tSvp8buspn5iHDtZdWQHgGxrvBJHQ1HZKAq",
  "key6": "3PqfDPVUpitmxin7Qzu8nrRCnH5rkigmbJ6WqKpukhHxz3CA2Mma1PvHcv6R1ekx1TL3jW2YhSP2jp3RLRy7Hr9p",
  "key7": "kwrP91D5vUNFeBCN6BJsKRm688B6o6w3RPQsndnBoSijt7o93VEBwqpNDgFyWEEJ8H3YkPaQ3Kt76afnGvA9Ab9",
  "key8": "531G6p4gTXyKrPuX44WxUASBG7LbYGmgRbuxmAFM19RD9D5iKXLX6ShMeACeTBzJewkwTgPnF1oaT371DRM8HnhL",
  "key9": "WTKWGVSNpBeE6Lhuf1zmYfHxZdDPCm1XvrEiEZ4NDj1WrbEfBC4JJMrmKFteBGKTN1EWeHu44qJybLvX9ZezmWt",
  "key10": "2WLnhBhRiK93KweNV7X8c5nkHuBxM4VBnm8jkrD23cBsEnF2LVCNfA5Bhn8cuepy4fjNwWEfyJjTVmqX1SjKGnEh",
  "key11": "VEiKi4vNw7ZeirRKQ4L64eT14xT5gez3cUJuDECL7wWb68DMwbowPbXQwXmFW8gnEd43EzvQcNn3giueSRPxx6C",
  "key12": "3M52oXsZWKVFHw8trBDvYtrpqoVPEPREWnVhcWi3DjjMzF4SUwwHTc61AFVYPWapns3p67dz3bRkMx1mMkAbsjfX",
  "key13": "3Vnu1UFq2v6xuQmBEiYkz5sLsaEaEjBhhyjSCbp5ACg25APWEzUonfMo3XYuTPa7qUiQ7Vz3UNeNibmvheE2rqBG",
  "key14": "4Nmx1AHnDfwtozWiaN5SaL5iSp85xDb46o1GDNNLrcC8CcEwjwBbJnEhsjAy61H2bujFKc78aFgZDMhu5eMtXG5Q",
  "key15": "touVZaPKH33WkXXuSQqfGvtYfDwQf3Brdw4kLvBXhYwiYk1MxtXGDodPCJLRLfYQVNgqSMfz8rWuuoiu889UWLy",
  "key16": "8MARtuCpre2ZrvyUsGn3ei7Jgsgv8MghSMuynBFWwKN882KSQUeAuUhC5g6QF4fTPyz1CVwkZuSXwDsRCGmE3gk",
  "key17": "3fscV6e5EBaTW7xYeaMdRetZcxwevtcML5CzuciLJ8KAY7taARhpr5QPBxbqvdWw7yzg8CSqYD83QPkRnubN4xUV",
  "key18": "26i6ufw7DrFtyszCyM9mAuSEXdkdyhZZgeh21zPdpN2Mf39yfAu2Ar9iio1JhUo4Y73zbtrR2mV85BHszyBn8pPz",
  "key19": "3n9b7gHi3uJ1MDXAGyksT7ajwki3Saa8a366GLRaxwUShg7DcMRgypKkbgyCNm4VUwA7LkM7FErJmK8ZoSdw5Ejd",
  "key20": "MWhgDYsDeuB551w1eocYirzyhodq168PcbPgnz55t3MTFVs6JqhHbf8xVAyTe5gBrNwqJnj2u4jHuXyng3BX4EU",
  "key21": "55UxXshCdu7fVcJVP5L4YgGx81XhqiaLiEPnabz1J9djnMaXYMAVfyfcBNyGdvo85VUrajAT4R7ocgHcU7t26XFu",
  "key22": "QwzJpcqWsaaiLDY6CBAEHGji6Bib9byi6njvMiA3QLb4zpPXzEUhE1hagdduXWMGztVMrXqesSr7uDSdbteSCCB",
  "key23": "XjxJykzuC9iHY52ukVS96Csy8YSNV5ySr7NujNjKJs3ze6rGYxrwvrD2way7GdAmyfVN8V6uiHS6qRY3WFDFLiW",
  "key24": "5QQ8eVr9ke5cy5EbDsFSSNVYWq2rGg1kBYh5gtHHdusf34MeP5b7z5Hy1H9gW7YZFr33LfQ1Mf6susguvjytJgA9",
  "key25": "5JKRf2WKMCHKssXkokJRdRWK1ZZWroZS3p7va3EdMiRPj4nQuSTFua3PoT9dVTbripzM9v2BxFCsBaJEnZTJZEAp",
  "key26": "5GxkTBxbH7as6EdGq6QMLjjSS87dxisyDY7twKkfPWFDbdkBEweHFjwYzxRKzjYdhsVSonqKWYAWJs9ZZnLS4X7P",
  "key27": "3AWW1Nya5TT1Cc5SpP2zMyMJmKNAhRynN2iTNMmkRvrKH4jH2Mqc4XxNGnHe2ezCuJu63KMLenwtnpiAAQ21NvTW",
  "key28": "29UgDZUCCcy1RmeQ4WRkgmpjLRyiHWKdbXCveUp5XDvSohnqaLme1FrBFjUT9DrZchC3b4TkRd5F5BcXE7s7yrKh",
  "key29": "bnRphyAqPSBmMogg7qbRhaKWSX44gZqyJ18aV9N18KTvYsKT1Di9ExA4NgdjQbqZ4AnrgKeka6kh2EdHGCsyCPZ",
  "key30": "MRuWmvCv8iLb9cdSessAif153gQhTVykuSqjXCKBuL4SFcae9j3TATkV5gAESXQLTYjrNjPWqXNr7TWo41xovu2",
  "key31": "4SfnyxFqXAQ7pN43UH59rVPt5UbWTsyQCS1HFHt8f8FvKU7K7DmS5uUQgv5grQ5ndCskfaxrsdgteWpkogZTGhyb",
  "key32": "4nwwcAg66ezB2ajrbW8A9McrhRvGitkpubZSYjTErZ4Dnea8ik8H12u5n4GFmVxEvSwcwvcEz9ZVDroW2Z3J12DC",
  "key33": "5CshxgHA4qAnWmAJbhzzDPp9yWfNWFPq8ci2F27MB8YyN3p73TBq7Z6fRKLN9qjQQ8nAPDYbPXDnAhnE5roKfJ21",
  "key34": "2y8JZfNM2LQ8VCkKXDHV47HoRZSL9YgawNTSTYiZYcZPMuUQTPH3m3devebKYmAhqEahnDWYvQKhamCpsrngTpnr",
  "key35": "3f6o1zJYxxAg4EhPCc1mhAK6PDHTM539ccC94MxazkyLAAbzd8hABo5uSuA4c9YN1i2ATzseo8nqZY7LUPDzHLtU",
  "key36": "2ek6jNhFfrsQp62KBLis2snNbXVg9UzCpfdXEegzBFLNrPa8DyhzQL6oZ1vhvshh7NeGvzYYADrJRm5hsHVXWPWy",
  "key37": "5d12QRdQdfFMMkmkfL4QWEEmQmfH6i2vTXyqoRNUgPKHA6QoPtoTcumka8A8hUvwbwiAesuC7Bok6Lj6Qac2uUsN",
  "key38": "2LxFq6mpnnY2TJKcLefP1GfzTSFzN6AWMwFWXWNyDLuUnbDn3PeNkgEM7KjWbYHKADRKf73b4u3iDsM39pbbTRu9",
  "key39": "5V6Sx259sE1Qvg9JaSBVNqeC4n3FHmLrEGCVwaNH4yQByM5vU7S8sMV6Jtk76zjUcxKRA7rVhbNCPsqVWsHbSU5P",
  "key40": "2xxPXyf4mdAhJTQhY8M5cL6jySPefPxddLypekdYSo9seRBQeuWLsULyNnAY3r8NevML867rpCe1TKvYDCGU6QQS",
  "key41": "4eiTjZtekZmHn2igpb8gGz79NX2kTyDcF2VRtuM4XaVUhrQPhwarn6sJcKmRru8HLbR8UW7Rgz7KGfY6y4UgrvKm",
  "key42": "4SEbfnuoQDgXRJGNDwiTeqNfS2s3yDuQdKG5Ai9uutjCF4qeTdwfkiRxfAsdY8dic8M6cgsmG4H2UbBqQqA7vue4",
  "key43": "3hz853odNTZgWzJ54JL3wf5TY5MCQErJ9fV9dJdyQJhruyfTZpkESaL2qQPBrjKBcXPFjzEKrrxeVKptK6vmbeDn",
  "key44": "54u3ejzJm3nj7tC7t8y4P2x8nBNWb1xJt2vXt12DVP9bGYAybuVkZVoTKwA5fVFLUfJnpR4bf9n9E9XDFFbmk6XE",
  "key45": "3umv2QT7ApitXPP7btaGk47dUxhxRSVVHzV5bacDGmGowKTxTTZaBFLcUR8fThyfR4XMeNpGe7vpKJPij5jxjCJN",
  "key46": "2dZ4UhRKHbBvP9NBvo1fobfxJLh9iqEp2LGqRVLvDHGpCE5kg53cEfZo31tmt1jUXqEjzx8DZkeTh8fpAukxcMpJ",
  "key47": "56nTdEmEuzxMutYywLTcf2bLU6Sm57wFLaNY6xPEgu6Ln9j8czHheu7kZF4fMb1FTgs1eNydrB4ASCDXsVWeLvvV",
  "key48": "27LDF4TXY82j279Sjg6Cg2gdJtyz9TXZ6nc9i1s1N624HuXw9jSgsd2J2Jp3SaQt9a4KBAH8vMjMqytAwHKpCHEY",
  "key49": "4yQTZhbfyjxBTAi1eHUiVWKJHMxqYsCo9G4mxmuc4msWsXjbuCSKwrocYjDPg3f4EXCULaiY3WUsyUqrowPyJQoD"
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
