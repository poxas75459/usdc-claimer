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
    "29sdjtcUEz77MySQ4hyBZiw6upDFPvn8jWiA7Rs843vPoAQxVcWhs8ajU74UcKTb5uAKC2WgQKmUSxhWoJzphccb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ckfUiz12n2UNVbu9PF6bZBmVWpFKWPoxeVhBEg6PSLVMdQtsTxi2fJGFETbNYMxQqGZUQR7zi3Z4qt5T7eLP9MY",
  "key1": "2uHt9RWqc9BYZf9zRvWGVdEKtnqoWfULWccbEK6z9guay7AdYuEUyxPb6jArRaNzQaxE4s72GPuU8iDQcxx2kecn",
  "key2": "4GswZtxgwh742R56sYULDVHoG3UagLkT7NescJCmHC7u2jtDEep9qyJ5gS56gxSR6TA4LHwwvWRciYYdff7XqBJR",
  "key3": "3c5xLyyCMhsEWgMiNRTYiQqbk7dr3hrqMD3t2fh5mivrkqrd5HYv6Lp9Qe6hcgNaQHtAX534BNFdvQzsCQR4Yctn",
  "key4": "acDFRntfrXbeJWLm7RJPGWJu7eHfn3y4pYZd1qBdc8ntpikrn8hsDeQNUkjbnE5GN31mZm7nXt3cdPk7Hpajkh9",
  "key5": "2pgAYUg95sGyd6MMn5oDUqbg4zeirb6P9cwVLqk6N2iu9MchkeSh2g4psiZLjkwV1S1VnSuBa7sWfcFRoLJkFd8r",
  "key6": "5Cc4632geE5GmKC9oDq2KuQEikX6yANycKk7CPTgsmwYot9qbUDERyLEj1Ze8gCCjaNxj7UK2eH7ZyYShQ72EVcL",
  "key7": "4bEDtct72pNisi5FhmwS75C1BRu1YRZ2nyD9iuK12U4wFdkqdKocHnXMp78UTkDRFQqKTsSoKi3EhyBvV9hKERQ7",
  "key8": "5QiqDsmGuy8FBDLirqabXL1j4f32Gi2iztFoRqeFPqtkkjkeDDU1fC2ddvYa6Xh416WJmoZr4ThdVtZ6mVsdLzsY",
  "key9": "2y2SkMCg4PB2WCsvUnobGYrLuArQ14hCGR7ikDi39vAY9x3gdUEMiM3V2JH2hTuqScAMU6JjJv5wtfMY6y9R6FtJ",
  "key10": "3DocVEHtSdwZLGYenEMGjcoNqV2hbd7BWb3a1jpu2ng6Z9YsSLzDsFWXMipVWF6hdn7U6g7McjbBip4QQQexVLbP",
  "key11": "2jRPbQa5AxYnrdLbFrKY5nG5zJAmkRCCir8qRF3BfYVtHA3otxPUZoyszJFyAdj7zepVDwcWCvwR3ZtQvmyy7jpH",
  "key12": "5edHmuMVe5KWVUUuc3voeAWDiMzDd1c1DjTjMtMSJitxHeCbG84vhG1PXot3AEz89QxnTWaYBrRNTNjhZtu3kJgT",
  "key13": "2iD2hqh9vciij21TAq9G1VhwhtvnMnZy46yDvXAsEubbfig6Z4r2k5gK2nZEnjit6PxmUQjrTEpn3Jf8fDkPoZVE",
  "key14": "3U7YajmMDSjskPRWjoZK72uDbeSqYvRKpfWuZmd8RL1UB2V1p8jpTecH7B5uDgYDPfw1Kg1t2fAJRVYpyp7WoPFm",
  "key15": "37kPqzpkjdTEoaUR3DpsRFcwaTg9ZoWikeHfq9G3rw9FoUpLVnAsvJbJv9ngqNLHxpJZtrrkNpKRLetRSCPNTgLw",
  "key16": "v1Aa54L4vopAiCC9KfVeycofupCUW73asujJ6qU1576HpoSMJZaXg8uCBb1XqCkSBjJik1R61LCpsCrfRC4vNwt",
  "key17": "3zY7jcW9H3ipqefpGaRtXwgafjwaajWxC5vGxknBgvgPLj8eE5QYSXYNwyu7HgseBZW1uMU4KDjNb6WvWpiUJUUj",
  "key18": "3GyXs6cPrtQQHjBCztGdJHwKfKDiUi1h2JcTNBJQidR7CWJx8KLS1nXga145w4vZstmp3CKvm3kSB1Wf1iADVSqv",
  "key19": "4rWe1N1JMKYmSPHME5opmvjP5JPDNPRHM93FMTQPG19A8tyqxmk63i2pVQ4fRcvVLNwyHRChGe3fjp95HtHUB5qM",
  "key20": "4i5YXvzLDi4B6rsSZ9SZBWxZrwrJLjbdoQMmxyztMM2Fawd7QC3bCR69DRM5dmaKbKsJgudAYXf3UwJjLh5zmTSR",
  "key21": "4hF1nCPFpEJGsyoJVNq7DzBub7SZy86tN4Z4odu2hzF3i6Bc3tG7km3CirHgN6x7aLby6aozyxjGJXLEz2F8jz28",
  "key22": "5uW4S8hLDpfn3rwbEMfxTepst4ZCX7kRc5TESvkGdsicpj3TSQyKbV1MwUWS2vvtqboXRrzrVdnzLwHfrEXUUmQp",
  "key23": "3mwJWrfj5aeSfKr37L49Wb27yzQB9T2E79osK38JPj8N5HvnRUDNqJcEq6vikf8RVJB45QsVM6up4WQX3ap8ErFo",
  "key24": "4dvD63EuoSmkN16djLamjBrrX7QvdAiv8H7z7HCNmCtvFLcabHqweYAdnD6AkcV2R7BFxD5T95Zgs7beR5n5oYK2",
  "key25": "4xD4rHDUPdUmaYesVXZ1vqsRhMyjp3fSEvbau8KoU3a8jtck2upGAiiFQWjrsbcuLmivpzQkp345pVM3imAWq626",
  "key26": "31VixpyWe1qt7hNFtmamBnLekdRf6uepzUTPQKBpVtQqRogJGEtJo1tT4JZhpDDK5arh8TsneTZRXm9wpyUb8hbs",
  "key27": "2LN1D1mKCG75sQZjrN3mQoNDugSL425hvK1jwhuAs4cRj3SwJzggiUY4WRymp5SWSc271NHxAGVjkmMr9nNCZRaE",
  "key28": "2FUev3Kh5gLMTxwoC2hpCqwKh5H79x9ytx7LfanMj6TQK2Fd1aoKjBices216rEk34WvH4U4AfKMuVY7dxcxjCmB",
  "key29": "35YpM5xCMNk8BYCp6AFHqPJuDfXXyx9pFgbhKhK4NgikVpThgkJz2wTCsYfzKL7RbzMBVuXmPJiz3FCxEGuVbMNG",
  "key30": "3SPgyQtcfvDm3iVd5pt7MCVckVQzkSoMuBSLDUkc39VqLgD9NkeUzkSp8gWrEEu6pMj2mXHN3gRpxrbaJKADKSJ5",
  "key31": "4eR84wUUU6w4WbH85AuqDnZzGPNLaZCBFJJxUvfzgbdCXkG6AnUV7YJ87ngibaMjwq8Box8N3gtfwzCTeJaVnHwE"
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
