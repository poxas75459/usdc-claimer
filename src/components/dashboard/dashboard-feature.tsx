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
    "4YXmmYQR1NEG3kjdyK2vQ5gNZfFNeERk2736G84SFUEz49cn3GHCZAAnNSFXLHMuqUSHArk9N13ppK8QwjHit3nT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Scgx4HuC8M9WAB5FJP7c4fmLseKaet7UF2rBXsSVijvd9DnhzvT9UQghdbR3A8Ahxw8qFTJNuYMX6cojpBEnwkg",
  "key1": "5ALHr3mRUmaXGCAEKpufqeNHC6SZGSXznyxVw6Wq9WoKckTNS9fTTn1bs7w92YmM8yC5NMaK3VhAMsCnSvPBhQRt",
  "key2": "3QiN9SpT41SPaEyvwFi7ifzrqtD6nZaC9KmPJUuV594g7WaxYs1THFhHzHazoDH84hS3oauYBmY5smD7r6bXPrSy",
  "key3": "5nsw5VdBPvWPP5VH5jL1bHSSqUBT1SWyvrfj8CLsgSib1WKRyyzcWx8NzJW8v6tsrPTmu5czvhvL1HaCzfF3fEDP",
  "key4": "E73a68NwbYX7Si8HJFA64tQSJNCevXahBqN3TReiDvHAXH1hXtCFXauCQ7Qo4wtaEzPXKDE6nwgNr1DjE3uqLpV",
  "key5": "qSCXoh8eBewG4dwXtNQhr3XuGui7Qfm5HuUEcjBmsDj74UocG7hdeaKipBkodq3YzL99hiaHqAo9Bnsfodf4nrR",
  "key6": "FdnwcMTJLtuhSqBDXdcQW44nVoakh44D8ihu8NKkWBjK5AikactEsFo5aTcNEq477esgsnjAESAk8MWRe83sXfU",
  "key7": "iqTmDspQu2cDrnGqzXHaa5nPzS21716pxao1TJFBz9K3cQrxpkTrkawyGyCsCwSdfv3XosLNTf65yywtbVPZ7Yo",
  "key8": "5YUtvj1TZYdBHwAv7oAvFsjCbmTERsPNY4L8FU7uzcUzHrSuhu6GnETEfKFDXXsHwn3Yt7GW8b5u1jfuKjqpGfhL",
  "key9": "3CsqSHHKymZnTFvfzqxHXxTqjkiLuCkaz86Wv8LYy1oaYub9R6f8kbeGz8u13dnH9LubpTgLpPkiP7UGpDQCs3ST",
  "key10": "4Z69eheM279ftNDN1EsAVrj2PxC6RU7rA1MUMPrYqLKHFcH35ff3dYY6kGakxGxpRN2AHmhTdeJv9y7mVuxrZydb",
  "key11": "3judt6BzzZHHzJYQPDsfXT9NEh5mku6pFsnqyv6DKauXECcdciYC94zAMbXBGFvxwomaMwQZmhQx2s7gBgz6oWLr",
  "key12": "4wZSamz7R3GjsnztLEnNQwp54hSByZ5jq8rHJDfbTj9C1jdeh3trRNrP42sWnibtFaDE7ymaw5nT4h4voahjWKMF",
  "key13": "BYLQhxwZjgnJR5zwGFwLePY92FWgrxuSBNJvzegP2AubwNMbVwer9SMc3rqihtMVtgxqr8cC4djvcYPmeseAqba",
  "key14": "3Mi2CC2tnUUa862xQqKw4dWMEZ231aXUPDGTY97dTCG6XgcUDMN9qGiyE6E5fFQvJKENw9adhCi5nz2Z7eNvrmGg",
  "key15": "41Q3EoF385aMt5Cm4uLmrST1rvHgNAsw4ujCkaoUEHKJXFnMHESqF9Ko4EU4HE3SstdnVc9PGXGydcDX6aAHVqj4",
  "key16": "2SrG2yWKaqLHR262mbxWEe9xfeafeefwLk7SZzhzvyhZxmPogisppr4fZQRLtoiJ8EzC4ScKpRgzhbZdBJvxRr3x",
  "key17": "ucRRUtUUsbZPFf5V6Nru5QgwNGGAuQVhNmRZPVmwoCL669MGi9ceg8j8GS3kF2sUa2odzFzkqyHe1F3HKTBRfv2",
  "key18": "5Fd2m8YpS2NMkSQ8Q4oLmGL5sb8U5rEJTsQfLQgCwNhnj4Jf1AP8Ywu34ArKdkmWRBw12fn9p62JeS1zin5pfsRT",
  "key19": "5WQEKYDoWpP69mx9ASJkUBrarg8HN2H1V3yMkZfRthkQUSuWD8i2rrwpGLHLPyj6n1XQtjUCCHwNnaBcfwtCDoR7",
  "key20": "5ffsfsmNo924s1H5rU3CXr9YEWW3QL1Yw5NPJL5irCbKz7u2rAVRTG5yn9fGd2QfcPahSAPF6fDpQR5X9kszreSM",
  "key21": "3r3G9hyQzqXsEYDQhiq48u626ueGtLx3QNttuSNd6pfNGLeVhn61K597XD4sBB92HKoK3oJ1kGRbsVMTQd7bohVk",
  "key22": "XQ4rVRCRQmA7qxr1v52ztCN2UZKxVHja8Aph8myiPjBfLsnoymJtzkByvtjct8qFWyhyFLSx7pgPwSoEtZ3DMmi",
  "key23": "2MJRhwu5SpNcDNmAnJz97pfcD9LExchLrenNiJYiw4nmqSk39frq6HnkGiqfm7RkGiDLWMxeAzt5YxeaWemhy4jC",
  "key24": "46WCvuDoCvrfR3UuhxkkctywJXM1FscgeTNB2NC2qeKpjvns1oZGgFQZ3a9ZNg2chCS1HVEjz7FtdHYzvybNocQh",
  "key25": "42WnEJz1xcpwpbgaf1UWjKixooPfxAtoV7EYgNbcuApYhxtGgqXbCyyYT3NdSCggRFALdj7gw168qA164a6maL4P",
  "key26": "ZrdWWCCryrfpF3KSN4bvFh5kLq5z7gMBr4VpQmZQLcmXmd2zii7zk5Y4mjyMBQf3vSMiW5Ny1PCFM1cr3SYD4Wf",
  "key27": "3eGGDRJ7n5gFFHXLoK4PoSp9Z4eLMxzKNfEygwVyJASKdRPn5Ai8yE1jGErrpHhSsQkrPLRDDfZV55YXkVmaEUdx",
  "key28": "3MSH89mEy3Yeg5UQnPhvCbfUjTMjSC5KN4RZjfCGfbPxV2i9GypLMLWFwpa7kEdiRQANpeg8dV4rBj2rCp5ib1ev",
  "key29": "encyTSRHWpgFy6bsfcjVC7k4Nk6GnkSQ9Hta4RnRMmj2crDzeUsaDaG6uJ71F7oAxj3MfdSZHosJ58NhsmdWTS4",
  "key30": "2W1ozzQTunMs21C3LfRSc4R9Pd63DPWr9PMiiMzW9i1soTS3eKMaG4rmLaMWSCYhgBET3x9jAJ1KEMrUgfxwyPAY",
  "key31": "2E9NhG283k6HFhsNHthVC4Ea6DgsdVg4jYUD2jJST3n75nQeijKrt5DZKRnYNBYDqWawjedJ2TeLG5kU34bkomae",
  "key32": "57ynAKXhgXx2wTtiJetKaXZfMbj6zgxfSEPu4Ki3MNd2b1UH28rstUCJzRjCb8dA3Sgp6ts63z254v2Y9j2jEZCt",
  "key33": "4zBZxdRFwTwJnAVjDJ9ASRFsDtmsFyZh43dDDhtutK9YVWShw1fXRKoiuLMCz9cAzR9qokLRNxUFRpTmFJVcey95",
  "key34": "XB67NJzoFdNXznFNyQpPUmji7q5T7imwChv71TEji267Q3rkgH49bUhPm8uB4cJp8KStfneVJ5M9tPYpKvcFNrs",
  "key35": "43oxREp28CPhidVzZSZpj7PP3JSLvu74JVYPK6mqnT4cwdYjGMrih9EWCm2L5Ao1XfgcmJN7wVUhfiUi25NVQ3s6",
  "key36": "9nYPbP589DvoJbwmVsvWBjpeUExr7G3oRyZjf1NhqXXQJm4XmKwxSCMBhDtqMDLcCanmKBoPbqDBBKm99DGGoxx",
  "key37": "RQU9JVPdaMgZwJzBuvNMPnGeeGgtCN7DPhQP3UMBt7A6pHQ18Tagv1EVnnyVK9HnWRjQjmKvLXxNQbp4QdZUXdM",
  "key38": "3bQBbCD3qTuVKPm679czzTCaQ4HNpMo8z1xDMyf8kt6kd7A9NUXftJX8YDSAHXrJVmsvDDz3Yn98HYGVaNANJ5iW",
  "key39": "2Y5FdBRd44m7a1ekFrxpPTrXkvBPFa75N1h4o6Ye6hCZEkVtBDqESAjcF129YQsXRHQC5dCGwmfANpPkWpRVMcWU",
  "key40": "3hSgDA35cjWZpCn4cGXYFpXeQrFPXYjYjKTakV3bZpo1GBDzaEZn4GcPqgnNbTgtVdAfAriytBFzw91fp7KSqtX3",
  "key41": "2AQ59FzES9FpWADrzth868NPmEXkA17NoSwNwwcvoBe76Sn5bUhDJgQsMcGFLwgvbt1WterCSmGKqGuLePZMdNZW",
  "key42": "3E6BYmLrHGqfLujeuwH4ZqEyRp4rPnzpepd4h88r2DAzzXLVoK1ReGPn83JQGp7ypzBC2Eyy6WVhK7Cw2fnCiBdA",
  "key43": "52tUovAt3C3TUzzkdmKxfx9nDgZHR958KaQwQmyMtaPNewyvowPvagPhmmBarxDibuMCdchdu2ro3m6B76eENJvR",
  "key44": "3i51fVq6L4T5z4cYro4BM6mS5KAaaZwLktBcad9iBpdZgGqbFHq2fJZzmUfncDYhYWWnpNpiNq6xcCXCMGV3EV7u",
  "key45": "5Ywp51Ws6KC1146gYs4QmMm2RjFYaQFmoyT2dX8b4PbVqwasYM2DZAb2BTUjD3A16G1ru451YVHcPN62FriqkXex"
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
