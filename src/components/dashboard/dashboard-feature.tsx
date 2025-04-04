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
    "5KE92uZvHRn2eg8ai5nEd2WjAq8HEGfmE6cPmWJJnrQZvBLXj24kwd3cxDJ5a8g3DRpyziwVNuH7h63SAMXq6aCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JUSMsRyWLZyqs755PcrFKNjGhTa27i8KEPBSYBZMtASCdxSh4fD1HgxR4dQ6PcfQAkuRwjJf9Lo1ZVB9oMWr7DS",
  "key1": "4QGU84mPWy333iDYThDKFi2hxBvMfUBP2fW3Qw83TcbcfMYWoJ1UuMDbk7R5BZNVST68ifDWkRn7LWnvkCdbivzz",
  "key2": "5xNaDnVEBsffcfmk7Js8zCi35TezZiAVPix1LSAeow6pK5ckRCzM8V6pXQF5i8qqwwzQ9muVaDELKHFVvSHdHAMy",
  "key3": "5zuXwhuEh7TTSR7rQafULyGRJJHpySjSmoTj8WcPu7UxawXh6YQ2CJKaPCdvoa1KwkPK4w4q2QfHkXwAjqf7oAPJ",
  "key4": "8bgcuuQVKQj2N6HefWe46wuaUDz8ACJn2w6BhrzjztjRFr4q7C6JJq5cT1xJKGNpj79oxWqz4wzgUs5mJnmVcGp",
  "key5": "55bFuPy1mRaWuxy2q7dCdCCTRCdJHj5xhRcwfX7S6avddnfrfvEKdiPvQvAj12AkE58FRVtXRf3fTeCjtj8YhmwN",
  "key6": "vnuA8rLdxARezLcmgn5rXSezNzADAS2bUnw9WxLTD5iwsYEBAvgo7Qguj5vZgCPMmKR7FUAi8RuQFsjMb6BDvMn",
  "key7": "5Y278S1wai9HdK4humsJQM1ozsjdMPCsRoWxatDpCpaYZyjVYEukjTMGuaBvp37HVrQCXnT7nB4Ab54HRnBxLnPy",
  "key8": "3hnP3KKzFnfcSaSSmtBoPRpayXXNfZUMny3Qujm5gVXTcZBqt8dT6RD6AcD8iZP9R53PzvQEut2B3J4SY1cZMpdn",
  "key9": "35Tn1YDimxxN2nKM5ZY4FLBkspxcSiPZUFLmBvHYKV2uHz93pUExBnSmKetwjDsbx7eQi6mueqqXoYP78DRMH9y4",
  "key10": "cF2tS6nSZwrYX7ak4aA3VrXG4anz4nfamCo4y57fS48rXxZVULs9PqKVMhz1TPgrkGHdxjUVS8qHngjajqYZoWR",
  "key11": "2FpYhBdB5VgMJ6RBtMExRPmuqkKrhezhTVYEnDeppfHFSbFhk7KePfBUSujeyXYoAkBEjkS9q57EBWd9BdzQV61c",
  "key12": "5nezn3S3T7hCNo8eE6voJBfqoJ6a3JSd7ABo3eRU94AUECewXWj94jGJvg33nVK4ewf26tGEm73iHjPwS1JsotC4",
  "key13": "35fLvErRznqSCVWRSca87ZGF6YpEoU37Lju8j8mH5FpR2bzr5dcW48LGvtRtjwoTMn9pmyZtZrq4uV4pj16iX9d9",
  "key14": "2q2vmL96c4ZvgWghtPNpwXVYQd2WKaQ2YUtgkEc3kUMwUXToXpfpRouSkEU9YcJzD6HFTWukC46inK8TiUKr3c97",
  "key15": "AGyi2UuFhCwA4dMeuTWqKTNuK5JZTQGRh1kq1B39AzZbxvuzspidKRccBGP4WHvx6m3btDhMdtRWjk6RvGyRVkt",
  "key16": "3b4LjDanBJuHjwvvKbJkYBPT5nG5RojNk1K9QKckHEiSsy5oz7MXxJp44LWSvqyhTGZcnuHZmHudHv8hjgKSwV4F",
  "key17": "3KJZQHHvQmViwdAoJ4z94zJELBCPbS6URZZnbHywbwwGmDTFGsqmAV4XDiJdFiATSrSpaCxjzEZkXBLCdHAgM8cm",
  "key18": "3pcGRgGLvKhCXSS2cATruFwbscwBTkEMunohaT9AiD7SxcVsyKdoJ1YJJvjSs8wKes349zW9iLgHnivXFRMFAp8L",
  "key19": "3i9YtcBFyvmE1or5qi5jYmR28AUM7Y66MffRuGmGsSHmNhJUBffVLALPgUSXp3mdyEeN3SBeTZAassiRGAjfDANp",
  "key20": "GBsNYNX84vforTVNdusueT494ZBKkoxANDxixy1j6ZFc56Ty713PxfvQK5tcyA7SgLp116JRMZ129tAEFpTwkiR",
  "key21": "zbpsK36uRGaNi4YFEF9wpqT7ZYGZn41uNAPfdtLQ6K1aJuLTAXF4aWUnmtHivdvDNwmCVKo9JJDSacTUcEZUga1",
  "key22": "4tz1iNUohtF7eyJeJyfmcfaoEtW6kAe6iYFG7ucJpYvDCaEddN3mkeG3HsiufvEGfiYdS2FdsEN9sYfvQGfFQp8P",
  "key23": "3BrhD6ZDgueohbFqfdqnSA28TPGGm6WKGYvNNa7Q6Kkbz4D8cHy5tubt2h1g57NwEyby7QWaEJF4CXUY23wEGqNE",
  "key24": "5qssCQAXZNM3GWzgKqHdpG2Mudf1Z9sqUN4J6WgdhpzhcsSY7bsMn7XQG8VpkjNXRNCr6HZZEeVDRd3avsfKsqFr",
  "key25": "5UJGV7o1UN6YEAjvSve1SNC9tTftyfgRDA7RCeCfaLn68Q3axwpf7rkYV1LwgSW62TbcZKNTri3tF7NdAJwsNg5f",
  "key26": "41CZXvhbXd576sYJbnd5i8G4JwnYFcobatBroWN8jiyrQCz7CPd5jKGAQKtyrokjp54gsagriv4EH6zzcYJnkPTb",
  "key27": "3GEibktZBMwiXsKMXZAs17KXhT8TPQPpAgUvUErNqL71GLogeDyJHdK8Bk8bZGXQPxPde1vDoy2cDEnyzEDCWh9o",
  "key28": "3jk8MYQJVwsTZSs4G82qFAeEXfuHHq119CP22tmErQgEcJbMTfo3cKERQdD6C3N46EeMvKFw3d1SJcN1AM5Q3o7R",
  "key29": "231STf18gBvtxgn1sKBHNMEP8tjkxr2ZRjxEX2Y8UQKktYW4dkuhSxMWT7Kiwh8L5v8gBj8LMgv9YGQK2eCqgWNQ",
  "key30": "yGcXmzLXEDdouxzkoVd6ExdpUL4J9CKQviDVmepCLMRhjvs3En7XU2NeTLdYm8uuenMX5dDgryd1KPfhxeEH5hL",
  "key31": "61ktxafo7vjGMjjYG2U8KsiVrydJLV7NvtQXzgBKYd23N2GmhV7tGwWfM4N7RsMM4oyvcww6mU6h5iq9k6YGtZoX",
  "key32": "5is3oKj9gZYyyRNMqSYsN62Ha6CwJXSpEr7EnrA4XfVqGCsQoL7a8JWzMkXjffDMSAc6uxS5ecVtaFSkqJDWN6Q2",
  "key33": "2s6zxNwQHwpzJJm82wpAkuxu2kLnAoG6NKFt62bwUjypBYTtgBQWz95QZZip9YJfGb3L4o9bBLAvTqL3QZ7979Vz",
  "key34": "6197LRkYRcNhpNkyPzKBqPmVxgGxRRYFbvWn4rhEwb2XqVmpPJ1YKr4PG4UaB9AcUTxSemPYEeyeeHxGfD42UTHk",
  "key35": "61A5DJie1mMiNbkB19ihZN8kLE9DDsWPaYRWxNjh74tMG9Vtw8cSNsRCbTT7rSJcuoA2EUp5jeTNcoyQPCNQr64R",
  "key36": "4Bfd3KRgVvfdk5awbbn3mGhhNfK4StQ1AaWmBHoaJUzY1G2APmh6X1ywWmgLq9qM9Qr6s59yXRMuCkjKc1eDMZ35",
  "key37": "3TsiUDi2wSAs5YTXwTMdMdWPgkXoP41Uwquw5oXUKvpw4dBVwiUMenfaCD8F2Jp7QevA1P7CL8WzjwBrhxB3i1z4",
  "key38": "4gjRKH9c4HMWFWmn3ttV1Ez25APHpbiCoAg7BbNEi6M5ZrTguF2zTFp8vKXNfHPeXrCz484ojigLYAbegdV6XGp6",
  "key39": "3Tf2HwD4jrsEgzMrhM3mxVYuEr7ATj2pee77AnmT672vmpuVSw5w2Bg6cgrvh4zNvQnQgeLGuZnteSiamNu4WAQf",
  "key40": "5jFpbpjewAvoN8VrhQGVBPsBdkQHBEvh7b5Ktx5NivDqSQwNY8AbzXcKyqj7xsewmaWPJNP5iVeRvnXgRDxGHKup"
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
