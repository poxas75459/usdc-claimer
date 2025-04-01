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
    "2jBRb7Js6TWbZPV1wZUT8H58JsECagjZgM96zqZkt1fpNHeKbJp4uNyhJUk1ypNRFEH836SDAWx1UrmSv5hPYd1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RGn5Q4ZVwZ6i41e2wuLsCf54i6rSGMtpVYjTd8NXPob9Qtyb1JpFRJ1BBoxKHbdnXtzXhN7w882s8u2SfpB9bqm",
  "key1": "Y1dmxd7MDB1D3McgUo1Pdknobv1yH7L3pRMvvdyWdWRNRfrdyu7qMsbXxSGYscTTWvBsJ9FVFg3HigzbRBU2XZA",
  "key2": "4rmVQrejXFAMNnqLCQsaiP2TpxRQShTFckPfvrC44wvfc2ydZpMDC4vo9sqKsXz9mmKxpw1gKTqNBoZUDfKTRZw6",
  "key3": "5cyiD5LhAtdPqX7SYQmmUuhixKggxhup8zTDSzhDECiTis36kEfCsBcC289wUGBLq2DdEnT4kTq8i4bq1WMbSDqm",
  "key4": "wS1qJ7W1xwrHinPTgGVUfEsnr7s6ApGAypA3B9pj8BySXKWiVQYHzFgYpwySgpZ9YUSucuwWedEfYkGZag5xvLk",
  "key5": "nNskbZt4SqH4Dr6B9F1qA89EnFkTZQmbDB4piUyocu3hhrq3M6298yfyUNhANpDVaWs5uqzWGCMEzd4B1ftAVp2",
  "key6": "29qPBFSCwevtJaVmRG3X2q5Qy5MdLw7VfKBb8WkCukBJwa6p4LGxj6pR44tFReXt7eZEwy4xviHqGhrvhjixtfdU",
  "key7": "x4CvEiu49D538DvAarDqzbt5gDHjQxN3koyUydNKGM4Wb6UFimXF4eSLGBcgXKJT4i7dYA2eMoP65MtWsCkYjT5",
  "key8": "5mzD45izPyGTMEcxLBLaphqC2zbjp5SWLGbrGdT2S8aQdByWe3cW5LRCXVQ9oW64eksaWyZMoEv8yD6Ha8DGjJte",
  "key9": "2YQwDqVuDwLwzzbCUJwp6Td25pNnTMJZTcRqHHuk6fp9kP1AmjjoxwPXy7TfNLGfBJpJ9zTzeWbxVzfQXX1AaKmv",
  "key10": "4HSMdGaSqxDBVbqYtT6FcWUTTkronqWT7FJ4daVX5rt1YHRV1dBJS4Q3nWjprrfpfC4AxmkEjAtzrMfJHoYFiKV4",
  "key11": "4te7i55eXCXQxuRfqHtHY3HFQgoAengGRVHgZiMgrhWzA5MKtSF5JiA3utvaUtJN1rxv5x3sknGhWpAkeUxXWhu1",
  "key12": "STnHtC8fT9mAnJxxTWHnQyBAeNCaCvM1BVaNmxyE5C1C2zaRzJQVY9wDjmmiNHEJJEipYbq51X1z3mDQaM1izvq",
  "key13": "62SqDNDFWpGQ9WAusy4VPVL3uPQj6i3QPFNUdQcR3y2nagXsBXd73GhypdpTnn3YrKLedsD5oN41oSq8wRvMuXek",
  "key14": "63Qy9CCAVHF51DsckRA4ycw82r4B2qCkMBv4QrhpUxkhtiRqcDjoYyFKbYfh3L6MkEPguJSpRaC2jwXrouSY2UEu",
  "key15": "29ApsJyxDJD86heW74P2dNTPzscd35qPupiKBtyoCXA1Z5kbXTbKHsyMWWTzvWfEt6CagrckhXywVowhjWdx1gNr",
  "key16": "3NjppihPpPLzQ2Ezdz2ehfZmnBfrjCy8vCz7y4cJuSZkmfRse8SAhMNQqAHiWQejCu63dFeMSifQPmurRArUzaEm",
  "key17": "NDr46vLdbGA7ffZzS6vrdyvM6wRxonXDrYEsdqtSXxgEoQrcQN32h2b5xENVPWAW8GoTaFdaDsCVMx5AiE7cpbh",
  "key18": "WYiEtS8aDVstaeTWQ1U6KizKjfCx8Syjzfr5Aacmc3WvZPAMxawdyzxZHSfccY5cuPQN6ArVt3W3AX8HBJZWZoB",
  "key19": "2zVqizmuApqCSgXvkyNG25BAzi5kMaYBhzbEjh8j5bMuYprzpp1tBMyJD4yzFs4inNwXWZgeiRYF22BZKRZGLBMq",
  "key20": "vXcSqjDArEidpSifYKWb2BwEfbgatKGM1fUWq8poaZRFKuKUSSyawVEYARV4dPudYD4bq2vyeiF3vJRC8zx9RfW",
  "key21": "3zGeup1KZCoJWtTRCnQMgqo33pbJzCrfSVPo3Gfb3yLJWwDNMRWtjNzt9aa8qq2ZSN1NC7FLSSW5qEMYX5s4Phar",
  "key22": "5tKV92y2WDToQkidu4S3izihmiwA264nar7S4KmbXJETS71hFWiPn3iGk7EHD3wWKrzcr4vJuaHaKEWXSpiDb23N",
  "key23": "4PxkJthfdZgA7sPJrnN92zKQiEsv5RvaZDrJ7tz3yp98HAZ14umvixeWK1Ht8ALSbJZFtj8R6hMfcBKLJKdn9LCh",
  "key24": "3YKDigo7jK2nVRYSjks9cdMRQm1wGmRsVnUCkGTxi3kznBixR6Z4DXiZAqZewxpeF2UXgPvK5whqXofF7WVszPP5",
  "key25": "3kWQf2ZBPKTaKxE1Psmg4YvpobnXKCZ82DaNy9rkjhRHqqfe31mjg333T5F7suQ5YKNZUifhP5TnNEXanr3jVEPv",
  "key26": "45qvPRE8YKVCXfaE1SQnSF9F8kXrpWmqVnESsetbKLvGY88fZQ3qEwVjHQco3v16dUHrB49YjeHPwUERqjtzPusf",
  "key27": "3NJ47cNKQykviMT88vA7QfWQM1EWgxB3cGBdCitomp8gwhUp9Wjn8tb4XdDbbAXvVif1Gsz7CoKHRyGdJtCbpec4",
  "key28": "3j8VGh6Z2kVMMzijsuvThaBkYrhkRVUYzPKjeA5bmQNgHgvxrj3Y2rT7VK3PG7Smywg3rfXM1Wbm8GHQYPWees75",
  "key29": "2v35iFaVpqCXcyEVyZKjnpbGM6HT7viDZ1ucFzQMMGpZnq2HM6w6td4ZDmSNfRtk6H7hmp1iovCG4bfokaYgvNEf",
  "key30": "2HEewQcZe5AK42K3ryJNfCmiA5fUw63k8YmQ6sLjMGwfchc29nJXvxGuQcRNUXZ4n2rPPXHqaiwCpWW6CoUjn6hW",
  "key31": "4tytUy2WjdsR64RT2iuQR5YEWUEc12o8TTuYXyTtnPpWd3QiCx79WxndoHPaEQAitZsG12WEqsSDupNc3qbxRcB3",
  "key32": "41hGGLttk9jP2ZQrmyfKEaeLDMATSsseD4vqHn2tpt5wbRNBYKcH1JGoqPNKDyp6pP3EUyT3WJkdrq1XwEFTwwPi",
  "key33": "358jVSkXdtgAtcyFvX4HVA3iB674RC352F7vXAf6v41HHrJg2vGHD4GCyhAFmQW4wrCm9eMbmrZTMdh2XAatPrmX",
  "key34": "3MLZXvKZ35MeRdASZPVKUNKLPaecrbEUhtFLrxjhBwgbdPeo63jWe1RjiVv9Py3MbeexoG9XYdmjHrBq6yQHHV2i",
  "key35": "4sCqoqXaR5Z6PNenYy1YHpMo7F8yBoRRbZ5zJ8Mgjvv7E7ubKR1mcZgyr2DNyx9U6WxjjsJzCfJfkJqgeYo9GTBz",
  "key36": "3t2bZbt9dbGWtGg5kofdidpd1DxSrHCxSsSnGPiZsMGyg2WwfxECvSkicUz6Xc8Ka1XMqPXHqzWHXhDPL8esGyNL",
  "key37": "3sx7t7WQHgbuh35YLdTLdM3ty7CKJAEGFWwDkZoMr9aq2VzWpJQek6ts78UTsatHpsMiceSNjGvuVaiYQJqembd8",
  "key38": "65Z2w1xYr5brwNXh8Lu7NBqCXT25AgB3srkvGamkxy7hpLPQmUDAgT5rZrRipBGf9qcdXJ4qWs1qgcYLdKq43WW6",
  "key39": "2EP1gvNPYcDTXux3w6sDoU1QmeiGxajHgbEbEHWzWwAo3og2WzqdgpeGf4fJ3hsxd4Eu76jL8SG1b8Zmg184hG4V",
  "key40": "3Q2WvwiLA9zXJAyZu5NcbGW7cQLmoa1iTtSPdZ9jkv6GWuXnYFSwkJT5vJfpogL2XkpxoJupRgoJtEwxBWsa1Uzi",
  "key41": "3XKsNjnDzuqSbFzFMDTmoRyAKCzGnyVHJ9E44vaRhwiSMHpDhPr6LEAuqMD6fxSqv9LKsNcjPxwzjvqsn9q69vb1",
  "key42": "21GYyHX2NZ84WyxxautbAiDBaB3tterZXTZmFExY45QWrpt19v1Unxi54SLfA5vuhqnSPc1YzJ7gg71uD5b6B1hg",
  "key43": "458wS2M37x8hSe35cA7AAGAEEDwNuXhkjBwBRHyXNDDZAYLVrHQcGNyWdW9qZmASmGavrBi8XJ3JHuAqJJLNfDQk",
  "key44": "2nyQeWc2MDAYJMf7QWkSEjxRRuvuPHj7iCYz24EgFLECticpCLTBdadC4uj9C485KyQpsqAjHVKa2YeRhgY9ToRT"
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
