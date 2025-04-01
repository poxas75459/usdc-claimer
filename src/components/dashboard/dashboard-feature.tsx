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
    "5NrZnoKS1XwgHwFbSuGAF7dfNup43kWwDwpNdMJaXaXaMpGFUpXjtuFb6LH7gnC4L8WV3MArwgAWPfFpNnpNcniQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51htsYAtcmCPEHTRqscGZFGrJscudm11z4r9Qj2DxHb8jx5ppm1hhdbAh36p8xdjLzWJrBqgwwvSe2BPkBKMbG2E",
  "key1": "x2MgmUMEooVSmvWWBYfSejrvoes4APd1i987LzksxVkUb32XRbSRdwbXbN988bNw5ry8o6PQPECWBLGRc5Hy72d",
  "key2": "StLEaai9vRjwz6hj9XF7AvyyRrKQUaXrsgiwKd8DmBkswJ9nGGQdVSzMES1cxPoiXVjF5XkY7NqpX35ASA18hMt",
  "key3": "4azkiMCVNRxp9ALuhe7jFR7oEYRN9DCu7efA431GUQoXoN8b8iD9WqtiFkZk12TSix4mFu6HZsyGJf6J5wwosBhY",
  "key4": "fhf6zijBSigRycYuGoKWdZqyCbcNjp7az1Ph1j3vK1wa5e9khXZUNWFAepRjaakxiMTMuF1yarpuVJ1wn9JVT4z",
  "key5": "2MBRFoPszTtcQgcoAuzmbvsqPrvxjNgGMePqfr9UhbnBq9KsP15t4WbHDfo2tunYwiBRUQH42c3CLhZVeNUmHNdR",
  "key6": "2BFf6LXKUvPifWp1W4FtauMFFfq9RvDMwPbexWqfHJ4ShzLJvZdetgZpk2qmP8PUD6svNt8mR88jFk61iEryetwZ",
  "key7": "4x6Lhqt1KLjmgFeitmum79toyVkhFMdhKF5JWqKu7X7KbWWHKhBBn8bX4RB1C3ndiMdDwFDBWk8fgRk79e73Bkt3",
  "key8": "3XujMqLfthawnbubKimdnkq4eRduo4GT7o96qmNRBA3aZRKgXCPbDoLb5dAdR1Ye9sv1e7Bwhu1auUo1zWGk9Sr1",
  "key9": "4EqzmTRWW96b8dHE2Wf4sFHe9jAThYJfTKRr7hyfE1EUimdWgr8CuMjgw2zmxsXqupDrB1aEEYX8QCZgJbBRqJHE",
  "key10": "5saoBvyzADYgrbcQZxs4bEiQdSPENWe3exEsV9RkgXtfkZL6e6jAY3oZnYsx29yR2brEUVVygq1yAeebxUwACZwc",
  "key11": "26V3hue1SECYseisPBpbNef3aLAVcGUNXfZwiGtwYsq8yfWCbU88iJVDxaeR2WoGddJ5PncNWZSwwG1HAJU7hu7a",
  "key12": "4b4e95J7YE2JkGiyXM6t1GrU9scZkwrRyYB1eAciT8ou9ehocCoCcYj4Ki1pSUj2fpFY2Yx5F24Bvs64zanT9FWz",
  "key13": "2f1vU5o5Q51xbMcqw8c4YVAKEhRdt9v7xCFfBCNnUEtyRm47ySiou1SjZZ5fYGcDnmzCZ2sKze3opfbQZvMGtrV3",
  "key14": "2NEAeMwnYQp7VEReSCvGsB3VL4pqssuAR8Q9SqFcmS7d22o85PnZyCWvzxxDNqNFUeowu87RfU9yUr7Md1SBf82z",
  "key15": "2zxAJj9Rq4QPxLjMKvnHZT9ivNKeoHEZ1yFhF4xqKqBgcJJZLQwq6HtLfwN7RQbbnjScKxf6SHfpVzWtAJSbrLp",
  "key16": "5bNCg4hUKh4o1kafVQjqAQcURUZN3Fwf5veMP3MCx9pYbqCWscHML5D8x74vQAF3mpPVh7Quh9S1QNyyu8ZCr9UH",
  "key17": "5b5PC28g9J6r9dfYtctjzXzM2cCu5A1T8cRzVvqJ4fnRDL8a6mppwZM14ubLfNqFT882F8CMjwGPmKPSXdiE63Wn",
  "key18": "63CYvCGm2swxh3P5Eq6R5C2iARzkeUvHawWAW3gv71iMG2r3Wu2yE65Tp41fb8mD3HxYvm6AXBrDJD3sJcDAMDiN",
  "key19": "3FMGgKCMNEdnoxq3TznTKQf4RsTe2fiE3waYDGwJGbfgS6JsEiUP77oKj4VXoDMB25vK46Sjwx2BufdBzDspiQha",
  "key20": "45rV1FcCH8EDJZuHLznBtmZX7LyJgtGwoFAg3M1NUNUhnmK1aNs5qaMDLZy6wqDTvGv4S6W6YM3JaEXUyEP3EJbC",
  "key21": "phadem2PaewV1Bya4GZ55XkKP9KViMwkP8exT2awn8Hrsoi36mie9XPViXM5HZKgkdcPiz5sAPi5JNuhZ9q6sDZ",
  "key22": "5VRs57V7w8o2pAiPemYsvEdenjqfgAmmS3gFLq5vEM9TGUam2niwPKJ4wfLAeMSrm4VTvbGhUfZXhLU5FisKR4Qj",
  "key23": "4KVRCuobNzX3W5WxVQM3cBkDt5jNz64gCsH7WrazTmEPnpmGLM2B12GBojSMTsHXzZmT1p5hFggPAtySWkdwuKhg",
  "key24": "3FTXMciuuhXT5wB3myuhBj14u71Rii37eBPiFCQahGXGg15Ej6KyzycbisXCyXQXZ8tjhcu977qgca1UwVmgrcjy",
  "key25": "iTUWvSveBcsmR9BCsB32AwQrtJdAC5JQFkiay3Dn1DXVmUmWDatzC7siPp7xWnC6guk5kD64Pm8Ca5MRNjfe33e",
  "key26": "snAGDUXfZhg3z13mhipLoVJBMSrM9so3QEV5oyMVzEGNHUt8kyqizp1acxthgmYznCijyrcEXxzwKLGAxFeBTmP",
  "key27": "5pqeCHSPiThBdi1kjfdAQLogZ3Z75qS2AG1CMYGSweidb5YRaHizbnPHwN6K2HSNxYQrg9gGfEURXrKFb1fmarRS",
  "key28": "3L4si9YdXXVdh2qbyD2vszYAen7V54S7oT2ydpF53HmfP8h8Z6R4ooprmtRVzbcehB8tjie8v2rYbTG5P3wMdoc9",
  "key29": "35RRtsAcTjwZQRaVLNwpH9XVzSthzdD68YHXuHdsuJAAKqaWcucCv9NA3aeZDZm2cHXVSwjfouUEst7YpNN46R2d",
  "key30": "382ooUiFKNgJ1mP1DdGWhKLHCBLb9Nn3Mc78XQFjNEu23W8G542kqGu4PJ3z9YDhgybngHJ5riusnhswcPo322AL",
  "key31": "3UZ2crCkXCtnZEhfaYbY2UenJPztxdqSoA9YhPfuPXRx1NCEk1ppT27fqvXfyYH9p39Fa7nwQBug68kCA2noStFZ",
  "key32": "5yquYEM13SZXFp4TYPP1wBdwX42e1MDwo6HMkMwCBz4fFAFS85Fon3cfRnyjSmmknST4vUV7jciR6KYevmHhn6nd"
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
