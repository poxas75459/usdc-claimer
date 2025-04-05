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
    "2MrGnWJmFin6nf59UnDZj3SfFMa5LC8JkTBsLeuYenPr1eLqcnpgievegUaues2aAz5uUSfPRdLbvV2Gyy9w6Sro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ME8CjzxHz4CVQzM7FE28joYq6uQUvJYgu7wckd9aQyykHrd4yAe2mAkRprKGX4mFNt7h1LKDSwY6czK4q3iA6eo",
  "key1": "cRRCYmto2ttY8zfCHJSwAVKj2u53RZJA5N93aA3nVgtypQT2nbzKZe1h9JnmdshvioUbtBkQwGbsw9vTCoAwBoc",
  "key2": "2fLymYMsVgy2gi9L5rULQaZR9syjZYx28e2jxjoGkgf1t7yyxHqHCDgfJrPAFfVVyxPvaQP7UZVQSXJT2k2qKetc",
  "key3": "ohPLkyq7jVmoFLTCo2tDc2LpjW9Zme1VjQy3jA6LPD41P7otSrae72gGNzZKfJJM6kp9C53hA6TQoMuVNHfXfhM",
  "key4": "62omHXUxurBey5AYLUao5dXtj7qkqRSm2sNcrYFK8ebtf5Y4W5EwxorfeN1GBpXKv86AevaiLoxE3cjoVuDt2zF2",
  "key5": "aM6dRfgW86eZjwFz8UDftrGKS9RWFPWeahrJDY9odPYnhsFw1PscoBjsmUjkJQxk63RMveL86DeqfjwyAUyECpE",
  "key6": "5cDLjNbEKGeAcai47wLV7J4oBJL6ESToGKRtha6B12griT2qrVmQYYfM4BETCsaghV7iBBSXmJBEg2ny1VZpMszJ",
  "key7": "2ZtaMB6vozevAPw8kJbR9W7BatRWidqaUd5Zynsx6UDj2kbzS2zGE6r3woxjDmKnMPxkZPs2CKbf7LignD1pGxvg",
  "key8": "2Dkt9U6rV7vJAiAzSafmWP3az8NzXcae7ssaUyDRfvjJ1yHSNzvNXStGtyEtidrgb9Q5y4jfCE4bdEXwRw83ei7A",
  "key9": "35MNqZdZheHxomtbw4bKSnz8nJHa5Gp8EmsVEJNaDQ1jFvZ881tXRh7TNiD8VoG1ADqihET7VBMEn8VCzKXGFUot",
  "key10": "26Q95W2zCyaZZUEcJMjZC4yuY2bW2ihc1R8GbVPMBxPNAUmGo4EvRSHdunuKJ124vCtwnaMNkhwAjcJbpeHUMutq",
  "key11": "4qseYQNbErMv5ESojZ26A3KErjzNFH7vqtrYSzMJVdEGHJ68Wdk1JwukMeszFVbUmXLbNPbxBU9XeD7aw6UV6csj",
  "key12": "2GrrJQaH6cAC28SRAR7z8h78DSKCUkSKJcAyLFgFpJXxX3zZQwP8e9tTs4G3kcvJgzXfeoSGc54aeJ1iLP3BqEwX",
  "key13": "2PiWvDRmvgbLB1DuKLVSgyYUBjtPBBSXHW1PJj3vQ1oxnpprpZr1c2Uc4cTRrai5R2cFVSgiQWBZYCyxVpr7Cd1v",
  "key14": "4p15CNMpz4tHvWS6i5sKC5bRBmtDKPUYHtah7YHHwwthw3vuCixfP3n7H6NkRLV47HVBnfPrdz2i5vkuWaA74jCV",
  "key15": "34aFYfhs1SGLcWyqKjtjtvAWCTVf81EgK9yxU5EUnyQh7AS8vWU9swXhYry2Rec4DGVFcMj17QAYxBL4obYNRvfN",
  "key16": "2Wdfp9fwLnXPfa72wQdRxswYR9vei2o54iiJxTcyzoWwYLZAmZ1X28Ed83mFoyqijvxsGYYM6GB8SSoZdd44RVQJ",
  "key17": "4YiLMpFTEFawfzhYmWp4dmSyE6c4wPoPSuNn9gCtHJb8w6vWLodMvc1u4CfepL3QCoEqm7SzdWiibqUsTPogKGYX",
  "key18": "3itKWBvhpi1xnkcxNnz5p3zs3UxxhZvGDYX2cYbHAqhXpJguEEmAvYh9qE1Zuhvu7BeFqWMarvZ2oL7tGWZ2YdXe",
  "key19": "5Et4SsrhMnBHfU35pjqs8DXy6ywGQcfmjcNqa5L7wjdoFCiZHrcnBvh61cTmUsM9M3cW5dqdTtPKZrcBna9X4s6E",
  "key20": "5rTLPkNMmMZk1mbhjNTHvkq2VAkUA96Hh6L5AuWtAtj4Rn2H2pr5pM9JE66FPeXs2zFptfWZSxvQdx6xRJ34fRyG",
  "key21": "WwW3oN9iLMWDRXzsaTPCSn5S19K5qnNcCZeoemPkGChxCk9ii2Rq8mv92CdUXy48tUUahSc3JDiRR8X4F3iXNzX",
  "key22": "341LrvmdK6bGmRrzrh3FLTjkSFKbnQ1CXBPSstVwKboHpZRktSEjADnLKZmXUKXEC2vGHRAgmHQFEx6K5fevicVE",
  "key23": "5ic79SwVfWX4eiKmgwne7s5aPsqUhfMfmQ4N1Nr13TChC22XENStL1AAiE2v2KrvWjMMXgarfEKxyS5LVAz7BcZJ",
  "key24": "2dooA8z5TR4fNKev413R1muvpvM2PzZja7wHm5qzuyM7YrGCeBf8tmgg8aDnwj35V4Jz4zcbmznBD6hFCumgtbkG",
  "key25": "4st1GWSt8gfUKRhZydRNXkHQ3sUjXjwzCekpPVoFMmUKobm9k5HHX9Koukv9uQtfxe591RTpU74CCYE6SZvdES5T",
  "key26": "4WaYH1D7qWyeDL2j7KtKCFc1MzGBMe7SEzgL1m56vq5RZUEVuK1sgw2Arcsxck8Gsmg6jUJ9ww5KbpUxQXrHybY9",
  "key27": "417Gowme8pDsTX22hqRxpcjPYHKiQDabBmoo5NKYpEEwBM3WuP3ku2p9GLD47KvuUhe1iN2WxWW4eU5KAsLjoiwC",
  "key28": "3SaVjtcPaMTCA72zkfpkGoLFX42DpCGF5Q5r3Lug8bx9fKbGw82HLMh3gj9DK5Pnq7wJSmzxoQFCXjpEju1Nz7Fb",
  "key29": "62vxvQpshzGCTRezfsvzwUqAM73rSBUDvqetSSnMzFbiM3ax2zAAV5WFKA8QWmpvAWcwLaW8xEr1nuBjuCp9GdRG"
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
