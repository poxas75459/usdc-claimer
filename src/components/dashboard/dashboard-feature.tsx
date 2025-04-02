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
    "4mpMzMzihKc2AUF8iz6yuK9Enr8GRdf6HeGEcnohXKk5zcZUEpqRJDJjZutjsnvSBzezGSUaz4ULn8RFBhSKGxFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LpxARm6skhpbA4cpxQBFQqwzGB7N366bPRD6cDUGbX5dN4mmXKQxPLubnmGFnH7BZyJcdooBMMP51vstX4yG35y",
  "key1": "fzFnNJpD5yyEMG3c4xqqvjZJLFK8Qi752ReHey2R7ctyxhBnSBaik4nFkA5tEHzp518QpR4NBDuT7bqLZDKCfHa",
  "key2": "5mu96WnvhhoG8SS758yT88sqBnTfku4SJAqeAJ3kRgyGLKx7Rarj5HZeSYDQHT8Hnk7KKebaxHJcgvgTsVdXHWER",
  "key3": "2fsLcyYaxuvK7ZvDpUckgUvYABoTRGkf1gCJ96893hkiQxSfxKix1oR7mqs9s9hg9hu3cqM3hUErxU1XNqXzRgNg",
  "key4": "3QZPS6ebUejUZGUhSpTxYTLQs6YpJYNJqybFdUpaWjHzAZkTxvMWpmkULmHoCWtzjfnRGDx49tGKrL3FJao6THq6",
  "key5": "JnzcENeFJmPkG2w9kZRKBKjezL8zGqEUToJyBdMqRj9vqzov8rjdZj6Mu2BC36vGjYRaYUsB3YN4SVQ8SsMi8iK",
  "key6": "2wQhPHz3oPgBsCSfiJyLG5Gp1obvsFAF42QCLU1BqF2ZqqfaTMgectbJpmS6zrMrzEDQG8QjndSLMeuDzHLfdbpv",
  "key7": "3qzEg6HP3RyGJdWHtnLM6kon9WK3GH3xvuBQi3vRjDWqjKeATVujprQjL86jFaiWb76wanoGccgoaCFMer6f5AGq",
  "key8": "4XYonj6K9e6AAdQKqtFqxygqphqLYgFHHMSLFkmrHPPBxJ8VZQZrD8QTa2TzxwH1ygXLQ4GMFUerCbjyvJwcx66V",
  "key9": "3WfPX2VYGyaj5t5wxHCArMge9rBoeMp4TfUT6SGjL37X1egskGw7KuFViqGUsNxQAJXithDBriCGBCiMbYtaucv9",
  "key10": "mH4vrqv4wZWw3jtHhxNKg3SkN6ejARcGSySVfghEt8tQDBifaFTB2h7irmNi9NizVHKskPtx3J2yv7Xx2SYHpRp",
  "key11": "3zQEXYfj8JsHKgP5VqXwTU3h2jp8wkDiAVRGsEDdDsAvhdfhYYECmSgtbx2urxRz6GnQSZcxhunquN2uD2VnUgqu",
  "key12": "3N2JZKKiTDU572EJy61fsSVADNKfVo437Zcre7KMUnZzLwKKN6U7Y9rVuKvQ9vZXMBVrN4dgakgzjET7PgGt8DXF",
  "key13": "3sxM5w27wnpqk83Mj4R183tJCfn2TipKn4WKxEVnwwwV9qYUkdyw4WxTRFcJ8UorkxeHi8VD4hPEaG2fZK3RQ7NP",
  "key14": "4nEQ6rZ3S45TQ3N88c6wTAcPSaiPXsFrNWEYVYK5625XAtPEvvcjJwUTxkHKeSZUfJsNtswCv2gU2Zt9J2EtEL7c",
  "key15": "eh4L6N89N3dWH4Xao7ERh3bgJ3rU1u9VPiA3DcV8ciFyhdEeGLYWw56yKMjYGXDBe894oUgMBvU2nASQT6QQL5N",
  "key16": "5oR7bKSva2wye4ePNeHpDFQtCH2taS51kYiernQTLaVyRahPU53WLyzsDmmAns3K3WRnr5NA8vNYuy7wBuq1fhSZ",
  "key17": "4ZJkkJ3dVC2Qimgbx87bQToNnPvCWG5dVcxjgBLgPqz8mAgExcf4nrTTFuLQ1Crx8PMn541fk1HpLS1rTjyJWDCV",
  "key18": "5f9ChfrZshcvzqprTumjSCahLkfNQfWaXr6a6RXifa7uiGFr34fCQVkxvhvmgyyJtorc6muAUHA1rM2HJ4difS55",
  "key19": "4MEf694dicTKQdQkGQEmKznY9raivFkD2GpKLFoSnSAH3SZenrqv5vxT4ygM12fS5ibSeL9RfFBhsNw2EimZC21q",
  "key20": "3Xd9hisQsTCknaRnmJbuCdvio6GLNZZTYsfAjdvFq29tJtVWDm8UNXqS2fezWWHSzVCj1mXYE3yiQhuHxqEx7oXg",
  "key21": "23kg6KHPbQYe3CD33Tpo6ojZFn91sqh6ptZePmSFcmijRrMThfA8Q1UqpDrovjWsRaKa42YkRD8aMCbYNxgEqUvT",
  "key22": "pKdgwex7EqrDFahBX1G5bYN4QutKLK7FpCXFBkqmKpkRmgWNMoWVJyfJrCoFy7Sz3CMsmnaPo5cU9pC9wZoy5v8",
  "key23": "R7pijST3sBTVM9P3hbRj2Fj6bsVSGSGEacKiJznfx3QjvUSzRjfpAz4oTyAKYXLDqD6TL3KNPvdSWXN2iJpxFJW",
  "key24": "NECQF52CCCP2Ta5SAFqhrZWLExRePJsjURh8CzvARMW575j4CrmMYuzKD3hgCot3nPgesBvgGSixS3DyBMX4bEG"
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
