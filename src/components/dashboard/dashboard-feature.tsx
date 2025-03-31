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
    "2TkB5PdtzHS9KBu7HYdMKsvhKhUksidgVKxQ4GGXq9ohT5pe3VHUKETtGd4onZoYVxXM8NjMrGGGPzP4LAuzR5pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qwm68hjeUSTRpfdSCcMY9XEHJNsN8tXMkE2Fmw3G9Edii5mnjhPtbAWqSNGbwPrE7U6nYuLFuzxRp5WieUjSadq",
  "key1": "3C9ST1EAnitVkQ32tfddKKECPvrUs9dkm3xtqMbb6mrjDuJqKQDRbmmRMasgTef2fGZEZ4PUzEmJc8Rtmn9Bv3LA",
  "key2": "61SFmHGPwKh96FAaZdCg1i2LUPiUucv7RB6X3LA54MRGarmnrUrWSHDts3sa4idNPcGqvXY6PmuWMWtQ5KT1Z4MH",
  "key3": "4utsN1QukqvqLKHX6CUNAecXKqgZP34cdNVa7JEvepZbaks77Tb3z7VifSZ4hFPa8W4geazAQBkDCobdRmhFzXWn",
  "key4": "393iJxsHPKhMBdcgvfF6PsBGvFYXGunz5nHfFMowFsdooz5VKxLCF8KCuqAmjT4iaf5764RG2jrGJrvzdRS2MB3o",
  "key5": "26R4UxogWSKkMKWotMJJiwBGPMzyuuLB67iSqp9h3MXP2YCjABLtYdEKn8PMjAtBioJHjSizh8WkvqfzvPNxduYJ",
  "key6": "2x5Kf7zRUs87wwsU8qrDUETTKxPvvzvLT1pG1jUL9v7ttKuQbpehZEdzGvQFCdo1YFuuH9dCBEVAD93dgYPDXiRn",
  "key7": "2iScRCYU5H6mrvhwzP4ERzukCnpfcFAWD76socFnm5Dzh6MZSNeTRVZx97znSrqeaoqYQwwCWLy5QFfcykmTtKtb",
  "key8": "3YsSwDqADxF7FyacU4e7UQaNGFQcqwUN9Yo6cnGEdEGieEDXebdfa7W8LktJyn8JTbhHLJD44dXbVjmfeNjTxi5J",
  "key9": "xEgQwiCzrbYKWSMSxyi3dDsJ79GU2inLFDxq4xu49e3ZLWka9UiyFpHRGGZsSW2A1T1HgCLD27g7JXMLJY84FzQ",
  "key10": "3cnrZKrUNLn1xRRDFQSBUCaxECupqGJPVdG85Q3KS1pGLfXVFAqrnU9FgnnxwWg6oDfuThVCcNihJHqWy2sGVWWB",
  "key11": "4cziBJvQVVCs4CD8ebcdordQmHDWZdNw1eixpt8Z5JMnyAfGJN2kcwJUKrJBiaAceDxYzP3hkG7dBqtDKfDSgbPY",
  "key12": "3hNGfYdZQCHqBhhk6nBRApN4yiYU3Cop2fCEKgiagCHurdTu2VYr9b75jjj9iifrMywTvm79hRFJfy5iYmKuJwkC",
  "key13": "3gtSmZBjybKBLpd5iBQAR2GWTFZE1JVg1ya8eXzLhKBc22qZz97HrWkTPPiJtyLTJP3Eo4aYTCKPm4Q97DgnSyct",
  "key14": "4kYUB1QaxM4reTxhSgwYZJ7GCZZncgbCZGYgaNjt4ch8AJCTERFyxnZaJbSphz3CDbw3Y5RY5EJyaLdLP3bBKHtt",
  "key15": "5bWqd36ohqzvDMJaSzcWXVe4M8u9LbZ92nYyjgjzzqjzdehxaEAEjNr3hLtJ1Y3wygDx6QbVRuiGEWmt5s8HZigC",
  "key16": "2nv4WUMDeJHdpvazT99wwfT4NAM2Sjmc9xAxotqzWZVppMDrN6jcvRJ6UeZKLbSNPwpTHe8ZJggiL6CfwcuKDcxh",
  "key17": "3S1eVvHF7wxLnVQwND2efY65UuubhC3LW7oLBR8553frCin8n7CuRvXvYmupXWRMs5SpjQ1PFuWDvByNYTSV8UZ3",
  "key18": "3PBdX97wz3SVWMVsc6sTkQM8KPGnVhALs93aamZP5A41GEPtxHtHezbpJuEGftxCiKFg6ftGv5z2joQS3QTFMC7N",
  "key19": "5K4YXKDLBJHaT26uEjHszoKWYZLTqrdFRKWfZy65o3pzyCyJyiB1QWa5k6Pdch3Y6ePDYtcDEtjLJKCrH9scRfVF",
  "key20": "2LU1jbDNS8YnMJg5oUbHzYAsHyVu8p6ASy5vTkzQU1paUHrw4QESSLhTf69Y28vrx6zitpbqxwFFjHdbQhAEjbb3",
  "key21": "62WUHiXDYB4d1GvnN3MAtH2nhrSRYynKAUXTebUvhV7h6DVLzTHLRAPN4zsZeXaffaqgvGi4Soqibz6PiAt8KXg6",
  "key22": "4Mf5z8oTewJbf72XXaLy4rhxbUErA8kDh4bfSmfE3ip5gXbh2uKkPJF3bRTKq7wqxDnpVnyLcoYyNM3FbkeJng7X",
  "key23": "2H3vgj9eSoMdf8mizwHS9PH4sHqvop4JMm6ZhF3PwTPG9jsrudJYdj6PTkwZozEpLeXspA2TfbURrkw9knUsjchQ",
  "key24": "3BwRrEEDsxEBn4oGFCru8qTLEgoBiMJrXqDixnjQcmYpArBwMDRrBsYDQUndSRMDmGvFe8yEEcmqebUUMoTEnia6",
  "key25": "47rny37eSoFKzFSMbjuSEGC2Dauw9pQ2aVzRuwUGye9S6NZdfcEeJheBj3251GMxFbrC81KP4RxGacwHKUmrPPAZ",
  "key26": "RwJAqMVyZxSgWufoYkNNaeYMaejuYvFVBMABHkYQeUdcgNiwkkEErSzLjCQCBNHAgCb3RuN7atsjXDiozXKNBD4",
  "key27": "abRrJqctVBPFiPLRrHFYHf9U9yQZcrk5zStVHQnPQULPTdcR5JyD7DZ7aJUHdXyawNTp1ymkqy2aCEgjL6J2XR6",
  "key28": "4oSBZfxZEP3ZnVZ5ZL4cxzKYTWHWd5yVStostDs6YnLN8PjaFSrueBFtg4dCkZJrkeBWPd5o1WrJWR5U2Z1uEB15"
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
