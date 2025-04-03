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
    "5sVVQ99J6guSLJu9zvXf8tCSJLv9ber2okUrj28WTeTgydkeTNHugKydgPaRQf28cX4JBXFcsTvTChk2LZVZ5SXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uiZhTNKBFZ3NWWpK1M2PXfLM1UWz29WZ6tYCL181nkDZRizSQMW6i2UcPeC7p3i77STqUMs6CtKspA6dyCfwTSE",
  "key1": "4LuHjyExhS3kaV16p5FqvCcXxY5eXGC12fJEEnKg7KbTk7wrFLpEoBi7qep1vLg4AMJwyfhoQz9hHGrMR9DfjoSd",
  "key2": "5BMAUzAnhspDbHPoXZP5Vmq3DvpYmEAz4pS1boWhESEikwRKpQExad9EJBHU3hCdhQSbzHRMGuTNFdhbgATY8ETJ",
  "key3": "oFqFiDjT55FcgGYtD4Kv1gZVGgVEZu5QCMU6C9ezb7aWPwQrkVqnE2bQU4jYmDhmmTMCTGxqXmFEfuG8hZMVNJq",
  "key4": "KWXmKb1ftjbosRKquxn1uWGVha7ibysjw67q9kKqPXMdD1YTy1cKUUxEvnbJ8sv7Hnbth84pa48Xvj4w2dR9PiA",
  "key5": "2G2NFiKrHx65jXGRiyGX2VbiYLLTqQjguZbBmw92WkEQcE42pH4FFHwYL1LJLL6jbG48Sictkve9MQSetoPWw9GM",
  "key6": "63skEamP4JmBsCjAHVnLtK7PiSUuuV36EU8VQV7y2oNAZPAfHLh8vz9Dp1cu6p4W1p3uf1zC1PDuz7ETVHvsH5cR",
  "key7": "h4wuggctbN3zDwfjqUAxsSVF2z4coSCCi1gpn66ckBzcR3WLHx79taEBUcaXjbTuucxDnvREK6p1QrpXjrndQy3",
  "key8": "3Tzy15g1tUEuD9yPkPgpF2rE59hETF1iyfrxh3zDFtvZTXVWo1eJ7XrXu7eGu46M78TAkdYZ5b4zeZBpHjtDx5SQ",
  "key9": "KLNRs7rvEHwAfThNuGBYidy7fTL7zsYsdNZXpAXAhWDF54ae4Q4P6dz2knSB8mFGXDwFeqh7vBZrDKPrveinTFj",
  "key10": "3FtaYET7PVV8Jj8jqTk2Kd4uBYhtdfXT6yGe6a55ENPR512ZeJih8HM9neUE6R1JjsKFzsR5G2B7R8bDnRgKmc9X",
  "key11": "4wGokvcYNEY2Ruc9LejPRWdw1t8rmqTr5ErYCKzCsXDKdineuZFsLFfGS6HRfeRJj9AMxRrW6HR3eusTSm1CP6VK",
  "key12": "TG2vN3cq5jkpeW8uLEvX75N2TYF8WcG1xX4y1kLGXU8qvS3XBbc7xkjWXxcvdMLZiW3uBFkNqoGW6FywWFEtkhd",
  "key13": "Wp4WYjEYztcbQTznY1w8YByie31uouMfy4B3FubHPfeKbVuofV9XgRnu2sdZkJeNSs4A3aRbGAYeHpoQTKeABxj",
  "key14": "2orYSec59JY1qcBEML26H6R5WcAGhbNTkb19FaJkgfbARL1fdwrFR24Ta2q7GMCMoyquA7wLoUSS7ihenXvCgraf",
  "key15": "yW49AN33T2HL62rZ9DxMju39XRZ4B1JXNkJsJdLtMe8jd3QsD9nHiJP4DFQepAG1GqxALhArpKAq11rnLzg6G25",
  "key16": "4pKqtTofUYr9JAor9gMfSmnpMHvmRpQZaHGLQvGzo2Wh26L8ZDPGAZKFPvPPwDpQrZHA2Ts1GnZzeoBi9wbNy4Gt",
  "key17": "2tP4NEA9BE8Y1W7squpWrcuSFmtvZeMd7Y2CBU7UZiwqpUxnodBecVLHaPU5BJUFLXhDTFqvcwBMhxp65dek6sBj",
  "key18": "3nwSxcktfHCxieEKD8b5vYTWCXGKJUi3v5WWayQPDy6agKEyck6rqY8JAqekNJcpmsdQA1kPUuiH15ARVUevyi7z",
  "key19": "4NDc1dkRR4M1pNe11mNxDJR8cBfL4uAmDdg2X3Rb48BSdPmGVUHSyhAtBFuZiMDFasj6QimJtjHZFYPyFTpWfzHf",
  "key20": "4xqnSPJQjEGV3cHKLzqgbuSz2KePjoz1da9YZXcCrjfV2PmTakgLdKrgevRHHEBUg5sW9SBNMvquBicF7xzjXTUm",
  "key21": "2fvBJv3F3imQFsz8qi1sMLdHu2hu9RvQVxhRaxGUuUcWUT6vjH1f8C9mveQCAxv84KfzXPHwtEYKNJonb3QZdjGm",
  "key22": "2BC9EM4ZWxD9asekMVtf2G4KK426QVoX7ApHTU6ux7dGAzAfymB2VnEDJeL7rQLPe7DWC73UtDVhTfp4UAWY8r5a",
  "key23": "4FWJmqiZMQFM3D54EYuCRrbaiGzNV9HPfEi9U3NkDxFWyHnvtrLi9kvp5FYATH3v85PMcvCmfS2PmhNqXfMhexN7",
  "key24": "TxThBo39jH9REsfQztXqJUzHpm3ZEMUSBMg2SBu3sDgWsTRk1LiXaZGoKCDYFLDRhihzpJh5hE9QSud7Rv1Ly1o",
  "key25": "2STeoKZ2v6njjWykBmxTYJUwqhF3bSu8qoqkvmVyN48AZSdgCKd6Fqek6P1JZqD2ap7gPNu3SQ8do6NSUbBkz8ra",
  "key26": "2Ks6QHjJtjoSAuXkxz9Xm4t45MUTFBHkTUnAxk4ZJqqCnCYvmZcSNmo182Vr3L1N26eoqVshgrMg27LygQnmEXX"
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
