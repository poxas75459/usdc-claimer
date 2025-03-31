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
    "2MzRbjENgodvKmfgdFr7Yk6T6qVX8sKS1vNd6x6MdQjaSA4Bq9bzxbjjBq2nLx9xgL9bQAM2E8i89MWv1tMxcqAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EG8bWAWxPv3dcindnXun4scNY8JENzEDfUkCasWL8YkfScNMX27N17wcmjMiwYWP15KE1AF34dXasxG9AZ78E7L",
  "key1": "F4GWx3EpYsurhUszBLqgX8HoBi6Vu5jNQ1DsF2959YLKkW3qBjojQgX8WxXu1eKocAE7AparPb3PHesDT3Eqg3C",
  "key2": "5jP9TZc4AF5mebhVzw54AErdAxfASxT324LawCs5D91wZ51JGJh52LVygFfJDvYBeD5BPEYuYqJ9Nj2vFnmoD5u9",
  "key3": "UWWmhs6V8VB82FqrbG14MpMVTe4xRjVGsDHF8Ny9Mog4gKBC3borRNaXXpF9njfDyT8cvqnt2MqwCBgkJK7DkWq",
  "key4": "2US2mv1fV7A8dsuZsFsMpFVHwckC8L8A8qMLNmRi5W4ETYWJ7yw9btSJCxedqjyqxFe5Dnof78mbUq8FJSToy9Bu",
  "key5": "2neLrvuipXyfUHXnCeBTd91H6gTp4RFnNiM1Y4QEcudTKPz91hNiY2MDDNrLupiNcp6QL18hNPDwsNRjQgF84pVf",
  "key6": "3rSRnJJB26hKNRKCkwU9ykq63qi4oeBJKh7Y3kBw1aRkyfSwBw3ckW1ZbeGNF5zWuWcxWdnUQfQxefC3LRfjgVbE",
  "key7": "3vGsKpW4sViuKMGdZnnfmwGMgTZRrnqEkAw3oNLfdhC54BgNnWPSDEs7Nz6daTjKGq4h7Hqtv9tgippAVUe9sPXZ",
  "key8": "48ixHDZAyCAFKdBMHtaNeH4PwZf9abbFjZR1k2hBDhvSM5ZZZBxfSM7CJKzPNbrGpWTFkZigAni1zLUyBGrLoPfD",
  "key9": "3SQSPMR8JcZvasbWNdH624HCLtEtmuz21CHkKSkAaKHRa3w93u9SJ2qBhwC8jzd8MAi1HTSMn2GkPJjwCn17kMqt",
  "key10": "3Bv1fsU9Ur9MV4KCHxRHtRYBLTEAH7Zzp3JB9TWxbrKRLCk7vTqesstMtSufRRRXwwqTtLahiMxpiRzUMhxFqcmn",
  "key11": "2V9fxXXYfr892zthvQkPs4gKfYmnZcDBB8qDuATA8tsmLimjjQDj8iyJhACEjW6b87ebFcwov4hRUK5nRtR2UDeg",
  "key12": "56LnnUtumChZCBwz2W3c1z4Rf9Duh1Fj7vk9TsythNSgYk52LrysmS82pFHJBrgsExFSymNzDFLytfto5m6Mv6un",
  "key13": "5ruxAPJgJ1DbCPD6F5tP56AmcUGD7x3NoNFsypkEKFVNzmW3UECjdYEQpFMq1qJWLFs7XHcomVMLnEwRbfngRnv8",
  "key14": "ws6VvAwqHBehqw16Mv9MkUEcPfiq4WHQ5GGMUejq2PNkGSL6FzQrG1uCRj9Wmks68ynnoCcUKHA7v5tyRQC7QuN",
  "key15": "caJCH2TuUhz1pDgyVSRcghYvMruEVaPx9PHbNc7V8S6n4siKbMDaJc5giv4Tf6HDgUgkTRiJ6zkBi5zh4yuA8Nu",
  "key16": "4c2qBAzhYw2SedH81R82m3WpeG8rycYE159hokuTr1wkevpKwFgEbGZwZ6A6vtqmrMnTttPGKcykacVeEs39vwqm",
  "key17": "2BLLDesktFTKwKYoX2WVrt9A7QR6g8E5c9mbtuWhXgqVMhHABE2X89egzeusKkd96mpUhHbxcEvrVNapfkZXLHQH",
  "key18": "4Xqm6c1wmaMbPjeiFariBR1o2UXPLZy2BQdySC1YbHA46QYrH5v2mQE9ePXrqZpBbrSZ4n8WqDwP1JhHxi3SQJKS",
  "key19": "4MmJQMuVuBuVeAAzPezQgZqKkjEUgrkHNY4xRjPnpmYrscXoib2HZh1ZecoFacbu6Goj1cTN2Q7iDGRVVxepN764",
  "key20": "5bdhR55dQcQSAZRw4UYp5DDBNSgB5D6avSfH4YQWK3AteqthgoQ9zsQTWVrnEPzdERQSvK5aNz4nqLbYCmQE6mSh",
  "key21": "YfN9aPfqYASqmBuJGhFRJwv1DuRwz7z8idfWfaDVqLhHZbgCAQoLfku9v6arcEmJ986oBPsYzG23ipXN1fLjkjJ",
  "key22": "3EBkW1awMVVc8VVARun77uSMWiwePfvtibd7oCNurBieazAErFkjSpNHdcRYEEWSUnQfMy3tWVEwYFgHxGbPwAiz",
  "key23": "2rJMc8Kby3CrVUitUiWYJdYzr5oZQhsTbWxdLUPdKw9A9rkdYPjERSPBVmxPjyMSNDZC6PUCisKLK3Fo5Gm6wqFq",
  "key24": "24NXmfzk8CNdpfjWY565yhfFBkbjKm9XNDTqEuXCbZpRbU684c2315LZ34YRJnAPT7Zf9SpbnCjM9ZJjMDzkHFdu",
  "key25": "5VpVVdcfVd67Rq7sxkkbRXRsnHwbyCNUXRoLB8QBketKTfWmFDN6Po41MhpA5fZpDoy1Pjrj9pNt5opq6Ug4Ewnm",
  "key26": "3eQhQU3aNQtSpjAT8yGiUZkC9yjSLsKeWKf3Mc45uB97y1TRFv2FTqmLUSSBRHUJikLdEMGeWdQgUZxhhPLEobMV",
  "key27": "CENhsyXBj3XRT5YLYVJkPNP8Cq9QgYNu6drWEEMb3N3ACB6ExoEjHTCAvSwPKEr7HdcMaRrDzQ8yHpm2nzgiLyU",
  "key28": "uexF7sp7jPvHxnUy3K72uz4CRnPiD6q73zFWVmj9E2rp9KeADHDrqjCmV69dLEuJHpAVuFAWzX4MBdaZSgb3Ph9",
  "key29": "2dd2rEJ9kYN4V1S7pHcABuuKSA6Xe2jCGmAtAUSeYvYnSdGCrMhvx9kaFSTSdXw1UECUFBEukjcFA6crPGM33tp2",
  "key30": "5aY6doYJPo3SpCKAYoivr3vT2vxosvLrHdDDbjF2RnuJ4iHnobJs8XobgYvGtHWMvxwiVxsCJutfqtBETjhzENPH",
  "key31": "4wTFZWf83PnSvZiFW3bzMcsgCADaTqvgdsiDxatK8GR35X39xqJRQ9byZX7TGAeCHLf3MwBZwLSJ8A9ZWUc4jqUX",
  "key32": "5b3gXi8bjjW7BEiqkUVoQH3gghVHwiTg38myB3f3m4VLJmWyNULAMBjryWAG3XBVF3wsyorUParB3yuTmt5JaQ5q",
  "key33": "3AmYu1grWnDxi5SxKHC7z7uVZNyeH6z9UPEqNgLfebQGp1xryGtaz2sNrUZhxApc5pjDbADHEBD3NRz8ESSDVmp9",
  "key34": "5D6DDCgvhhmfyTmJHM2mAQLYTDqbp4KRjMvEWuMTnB4gc8H2yW2XUiAoipw1nqQZW9NvwRmgpZZeHqiMhVWDpxcM",
  "key35": "3RkvfS7hMJv6kA6hCGUdgUJR8Kc6SmAS8LdLQ5w3Bv6fSUqMWw8AS7BnfbfEVwJ9uZ2NEw9jrckfmrKPkdyaWbFy",
  "key36": "2amKfNT8x1agHWemLH9kqhdR7txigFgoj2UkAkC4VHQJ64RvLJ27KMYMrtgVoWgfkQvqaXvGe75bcwMvAFAo8vTV",
  "key37": "5n6oFU1HBf1JSx4vK2oHNpvfiZa3maq8qhUnddbrAwLN42sshKFrhudPXa95VQBANpMtxq1asMefYrKUaArGxi5b",
  "key38": "3WwguRzNiEeamaEDQnPpK5woA547PWLhCHkymzjVAbNzpFxeuzGWmFgE2gCj1mJrKFxKqDm1St6AkDFAoQDp7uLG"
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
