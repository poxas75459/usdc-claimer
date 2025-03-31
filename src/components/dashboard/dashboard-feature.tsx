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
    "34vFD56w8j3Jfpv1VFuwm9ubxvkbhGd1EDpuW6rY3eTs8nxYiVsuFVoweygCSbpb4PCBm8yt7uR1v68mUnkWBKyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bupszJxuYAnqetxWYjdUYwdbwmigxHUghgvg1pCExX9t5x72HQGwwRrvJgeLMVj5Q983cpyLTLZPeUMMn75QtBX",
  "key1": "jZUyqmaV8f5CnUrgxcWpxY6wMNdAVQx38YR2rRvz5hhGUJ2bjmUjyZ6L6Xe7jntX4QQdjf1NigddYokHwB8tW5f",
  "key2": "5cmtU2A6eK8ruRh4khyvDvmQ5899AgSUfFjSLj4LUbit6gbjfi9doh9br6WCqEkJxr1PrmmcsxcymKkvq73Dr4eX",
  "key3": "4hZdP4BusGKKqTVSh8sm3TwfTAcm1rn4qZ6dKuf3C9oM1r9MoESM3JqYByZw1myqg7Gqv79HgV6AwGadP4Ntcbff",
  "key4": "29jLDuJ9o8P6f8epqYd5zrG2f9nakTUZeHznbPp5iqWK2USzb6EYsGvcqDrFruEpkTSY5XQPKgpDLohmWccPLjPD",
  "key5": "Q3igKhJpGEy5hCXh59CaZbxFW9BTJAFV4UrEt1RNUQBDDHBDRHrsp3Rye2rwKHibHsS6DY5JZXiXruobZc3LdRx",
  "key6": "zyYCtkYsnTK3agSFFRpAtJFMiPupm1ueVVbndD93cNaUyN3goDcTUthkm98v4vo4hGJDyybKCq3fhJSZNkLbGDj",
  "key7": "3fUum4ivjccnabC1KQBsxiq7rJjLP1sQeLBafvnHbYMsgYM1874vgUeRf9YfB4WwnBqAc8R74SBN714GQsoq35ES",
  "key8": "572NNnbp2RuEcDJMWHKMsjjnNoWsJsz9MHXT6RVvPuBDxsawe9Bc3ApXwnybQeEMaYR9Q47ntX1cyAjNLPZq5N6i",
  "key9": "bhh6CUBnvnADuuDp1VTPyzCp992uTbnF1MF1i9CvtADeroBRJTDCnc15DGJuunb4cjxRV9d1KpndQUASkXdLkXX",
  "key10": "tzcnkJiBd6bA5XfpffTtJQuWuuNdPodVw9KmgfGJFCAm9ttJ25t2zYn1VyxN7dcwQz6tdKrm1BUSBMNoiTXEWbB",
  "key11": "5tQFcrUPu6zCKmJpeLpdgpvCnrg66u3iNnjLJ7wtZx8ytCm9rcUGKbFbC5xEzHYrCMjHJtpPMg8rZwXx8MnxNbVY",
  "key12": "4JwgS13BKJLFM6V2cMtPNju1vUxzZ1vZ25dWuE7QCnUEqM19msz6EkViFed4zjLgbyMar1rcqbuyJ1XPmsvE9XyE",
  "key13": "4KBu7VaQyUub31y6hUjRkviXWGiXSPRj3H8gDcZSiHkwdHYMRfL5BB79QmamaheYBP9zy8XPNfioBgWMh6YF5fat",
  "key14": "63Wa4QzQa9zAfmyjjDP1ZNuR4Y9RWAnqxhqJYoB1KGpuspkYJRB6S6cdGuVCKYGseKmWkkcStdth9Vy5HokZ6jA6",
  "key15": "2HpDQofRVcmbiTYoFvsQ7m3a6R4csHyELoNGTgbpZgv9XaD7ExmQwi18xQPfucAsTquWK7krkH3caJwMzPjNjpro",
  "key16": "5EEqeKNPej2GisBAHf7q5u1H8pWSLdFErsV1z3V5Jx5JnEGtavhM1NGk9NDpMrqgvgALAMtUDUZn9HjcdVCiP3g7",
  "key17": "2URrSY9fie6nvBH6mFRfFTtivvNG9wH6tcoFwiK6BNY1rXe2zWmnJDdCTVQK6EDzEJDLyGT4QejDWs8NAU5RXQB9",
  "key18": "2GwRJX9nCxt3hU9kBirdpXWqRGetekNpHgbn6WA4Md4PxwRZFHJ9xDbeYdyFDnQCyHuffRzDdFszweA2UBX5LUrG",
  "key19": "4A66j3X1Fx6jbiSwtdR441gVjTbB8jfSvkQM3QTPYnBcG5URMm7ayiqfmcKqZDmih6QtiiLxaAZjNSdNdHnQoszR",
  "key20": "47H5MLZnawoZkdfDKQLBPYYQPJhfKxL9HcXHJ7A1KS1d6GpN1ZkjFxqhw1vcvWRfxuRJkgrTy14BjWuB9GZkJMQF",
  "key21": "4cMoViC3HFqb9ZUov4Hq6eGCPKgdkZEWQURDhEk2274i38XX7UpLvaq1nAVVnzDE6PTxtU8yNdbaDWchkkoX53zt",
  "key22": "5v2CfwTQ35qyYTcZVd8ANrS86XfUYNdSbKQ6Ys5Wgh3gFaqeW9DFzi5ufVtui1YN3PFTNgW9VpebST1XyKEAUJYc",
  "key23": "2RUuayvRZ5nbzbry2heCaqfPgTtuWzh9GhhSX2wMUusjqck3YTtjgQ1NCnz3Y95qWjRRgSmSaHpJswy3pVNymFVq",
  "key24": "5Y2KWtyNr9z7zCtT3aDzsRGJMYJFZBjLizWyyMmjxmMcMuaxh3NH7fNGwP3QC6tkoWmEwddN6kiC8tzJ8aXhJGeM",
  "key25": "2VFm9unxVqizss3vryC2twVdpubLG4YPcqzUYUoxZf4ir1S7Vr5tJwR3xvW9t8KGnS3rHMRRZyMrzc3CYFpqtXaf",
  "key26": "Q2eorc64AMXQ35pYMtyn9jKdKLYYuvHiKoB32JBZrktC2ADE6VaLxBzBj26ouyMPjf2jZukodXrKG1Vfa1ibqPw",
  "key27": "2bAwER2d62oNvYZP9veSJPjW2YiBHHt62ec7cFMgLVDa6XhQjqi8kZWV1s2Y7XjuMSRhoCoYuMgYKRauvCoLsCBm",
  "key28": "3Riq1CVJHQsJ79HSA9958U66RWHWNkbo8XTW8eh6s5jDLVvA9kEAapQfczcYJgk2CsCAAVikgZJ8Vwi5aY6QbSGP",
  "key29": "2f1Xx1fvRAWzt1kUCshesfpjXgysnsrawR7pVXQMUjy7puETP6vxieVSGxsaaT355vqMK3GNNjXYHd77RCvMRVpR",
  "key30": "XD2nQWSXSoNwJaAMbqshTNxiZXeQqjbeP3bRb7VCmaJZBL2Eo8mdkyBWYbMTEeLyviQoyJ5uGhX7DxPm3PbprLX",
  "key31": "3oN8j5BAZcUte7ysPkETrRj6uXxRrZ4oDR13yd3NZjA8zZfg27E3kJyRbrQnoL34xEJy3MLCtd1sP77XGFx5bBEk",
  "key32": "4CbuG9MKibRjAfKaqM9HGy2a4Xyj2dMFDsP7cZ8KkTGKtN9oAJp5EXhihEF8ZaMoiVosUrQgJCngkkmvoiT6DcRB",
  "key33": "3Zsw1Nvn2mFhrhXGBFh2nGMC8Li9Nvk3Wd9VJaSZDyRhyKRowXRKVGLZ3QpgDxW237EoiiTnZjW77gLfsbNKTRXh",
  "key34": "4KFXUUgc22dxqkiYaoUgw8zbjTHDtmabJSQmDUgYJ398fR49cE6GsbDRSptNtwhHK4rZuaJDt8cotee8SvJ5b97V",
  "key35": "2eDREEd7rSivkPUPygjZff3nxCKP7g8ioyLUhTkR5Vbd4tYj25H6dtvvgtvXuP8gz7W2nnT9zoNJ5yab8sgiY7Sg"
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
