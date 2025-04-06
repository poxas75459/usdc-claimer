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
    "2dMWE7pUbpBMZwdMuWU7AaTpbHpB664ambxDWb8eBVGhtgvxJoQ1XkwNJ7vzLDL5nF3Yj37NCR7RwyQjrjUihskY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42DH2KmfyKvDonTrAgm6zbPQiVMjjhmC1f5vUFQM84ezNyGWwuak57jqo9KTbjP5HbU6QvqSooHAVbxaBrPEpeGf",
  "key1": "5ZpaW4YBsBDzoc56SiiiqYJS1yyXhfnkxbJMJBhiYCmqYX9EBDRz6JikGCpj28Q8boh5iEtspTRdYvZRU7HhsCdU",
  "key2": "3UdP7QbdpcYQdyhNQm6qT96bDvxdeMmb2KQ6a5NWDcphF7H43TwtZc98Mt4dtHeaBKtYZSH9CTXc7wAFNMnVDibc",
  "key3": "3f963mT2iMDvtgdhYFi8ofVueZCyGdy6Uym7apXcZ6d4uxaTGMSw7bmnHHMSeSKmjv3MeZysvLofZGhyHNuzQDaN",
  "key4": "4Mxvsb1m6q69Nft1aW9BXgFKAJHeKK9eE6BimL9LPNnMx3Jmm4NYGKyPLTGQP3MnjhbPjikuGPC2hsh4yRwz8ZV4",
  "key5": "EWCfFqkpjmjCaLvHvMxxa9BfcatB7WFHNyg3VjHo5nbSwXKrmpQWUK43zgKBmvWx8o1HEKpdpE9Qc8ijKQZ4BZR",
  "key6": "5325JXZktA5cZEBghBuT35MjvQzjSnPUEDVxW77ZD9q9R2ciFmsdGDNiNr8qiBVvirYsruxkz7ojvVuf6XuTn9GU",
  "key7": "4MqtF5cPUB4Fa5XqVGD8SDgAQP7XhFFeBB7KyD39y6WUw7TqavvSh8YHMT6hWutgA2bxqFFemjej97cBSentNPaz",
  "key8": "cpqxRG5KJwsC22W6MYXb6zoUtoajdzP6DXMDKQiZQj85itqEuJ3qtzcJSCm1GmyoBzTWnNXAGsk3xKYWNuJjD5t",
  "key9": "5JEZ8LnmAKo9BBHuFKB5KHYenC75ZjC2dSKAtCDBc87qYrHwCR6xmLJUeHEGUVKBdoTi2hPG52TdfLgotdQmr7q8",
  "key10": "5qX13MBGwZXjKYtHivstSvUYuxP6wQJ68bkSegev1tJ89CfBT6q3NhBkZd81yehUPa5AxoG6QLYvzNTqqdE89ULg",
  "key11": "2fXuaPx6upa5eAeykFTubZ4B9qPdMgAwdrFjVMSVvy1u3REYEhPoNSQfbJn3J4NAgbKwWR5P5YfSLmNJEWw5HKms",
  "key12": "5dppdfUtGwbvPSmqPiPdBFKwzgVg23CVT9nyEhXRQrqq25XKMyVFhuXUD7MhxGN7mgnqg1jPWePDNN7Y2ckNjMUz",
  "key13": "2m5BXMdatUoF6dnUVSz42pBfUPNdaYhtLyyrSqwywAGNaDtqGffH6eFsEPM5YjeitekQQ6GF31cg1r7DvnK5fnYd",
  "key14": "ozyZnj3vhBGDwkcac3ouoDA9aQcEyxm9Ahf4U2gedzt2TphDKFwrC43v3QVNywKRFMpaX9Tib8EBk8TW1axGped",
  "key15": "1uvQ3rcfGE82XZkMgMBczT4YGUAKAqdXy1p6xLv4h7X6jsSLEZw15zmqQuRgwLPxj9ncY9wb4G6MeekUW1ybc4t",
  "key16": "2e6SWfhfN83GpMnQCNoS6B6bHzrvPEG7djGBYzpzZdozGvNz2295NcjCdzC2VmCx2zez25KMgNj5d1ve5An8GvmA",
  "key17": "5qxBcAnbBuxRECVEhK5sEVNRg9Q3Q6VPL15q4qyEH9jroVgmW6qTfbouRZ2N5oab3y8mPCEdXa4RDJH8jPzb7dNB",
  "key18": "42yMtKdvX6udQad9Be1EKftaAjHSB6Trbrc9JcaiDBYmAPgi3AbdzqEe92tKfze3JeNfdLqPyov6Mm6nfmZTrc3U",
  "key19": "3yXh3bZKp5cXA9XGN1S2aJKnxzHqdgcY5gv25EYtTvqNgMFgWL8vuJpT1KYjzSjMknpfgkTqhhYZ3p4tmVbcBzEY",
  "key20": "4PkxZuVvT2cBv4qo367KyHyz7mABaxX7o8F7cPd8WHJ5KhbGnEcZX4mg1JDMSNWxavzAqGFn5SrnCJn7dtqSAqVp",
  "key21": "419C1bcXQnj25j2nvq4F4tXeChkwXtpBc4M5E5mKfnCJ63Qcmu7Efcwo6d9MHwo2p6cymk5wH7wHBsW2gtZci5Wn",
  "key22": "2eYgxrLqFBZoGBA38BcGDtSU8rApz3tyPf1ePV6WgiMynFkMo77rkpBdbyvJubePDAKHRBpxb9RyuEVdmqL83w3o",
  "key23": "iSdTaeVjS2Wr4SmhHcfbLUCTr3cEuuN28xRnp7C81o2hBL21ERrSMBLfAJczse3t7waamY1pE6J6hXDnVBSziGN",
  "key24": "48mvFUXkgC8Heud1xguvjVGE6yFN9U5TbX76p3QS1f7qRaPqtVSrCd7T8S1u3ymhS7aKq4NWMbnvZtDyCYqoWmPR",
  "key25": "4ty7UkCoXbCMeAXBFRe4Z1x8g8acv29YJuZJ22qNmAWkaPF7aWL9JzChv8unx9CYjDbwQJwQfXv5jYeKugqzpdak",
  "key26": "vXHQHzrZAYjk5LNL1x1oBnQ42ZjFTnyWB2WJemAEHKS63Ur2nAUKkG9AXSEQKkFyj3Y2dbdG2GSa9KLT86NP4W6",
  "key27": "h9Q82feTeDa4AhSmG1A81RJe9RFyUax5sxkFP5fhPy7vnVUz1oGuLZ8iRkQyCJwMcPmLWLAJHCH48WvkJYx2pgV",
  "key28": "Nk4a68cW56Y6GaTTLUNeuwm1N4bebgxst7AwUAqLYRbtgmcT4s12TzNwwXjQzKmYdSeHWev6sgnxw4MYXpTegPJ"
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
