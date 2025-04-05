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
    "43Rq4aeS484w8g2B9cWCkspn1AG4XXJedRAqPQrJupo2HA9oJmJy9YbFaxwndZWVyDgPMQpsQFHs1oGnWgzVL8S3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BMcaUPbU8p1cAnZ77r8wDYC1ZPvviSeCAnm9ubmsCRoghTgv19EWYUyd6dCN1DJhazWVq6sJ9r3nPRW97KrGvs2",
  "key1": "5tMdbuUBd1BsPLjLHgBj67ZmhsfJA2rtKz3qeSVCoci5S6AqwX6jHGjB3o6QXdWuYhFixk6Mf1kyPqR74Ef61sYf",
  "key2": "5gTzCobn3i2g2JFQzbWhnQRBMRLVHy4kf1LBEdbjZaa6aFTwnbMLJ7tvvNzzwXvJynqxiCwumfSGyZ95GFWeFs4J",
  "key3": "oMZ4KvsHWEbou93JfnLELyttYwFz2RnYJ4JLHMFKqSwe4T8X6BGCSiquoSKEEhvka6gvsX1Xs42HxhKHbDwKuFT",
  "key4": "3J9iHai5Anr43P4tRwAftrfEHetFAJW5noAiWYus4n7KiFe4PnenNYXFv55WHZuf4npuauRdEYLRGUBuuGKrYJEg",
  "key5": "2KzUNbA5KJvD4Z2gQPtYpp7KDsqY3VG2JCTRAtdek5ePfQ8zU32tqSFxxxhzZDaCorq4y9vRTuCiWwbUMDzdaqqY",
  "key6": "3tfF5Woo49p3fPA9sQ4tBwi51qWDogissMoMB6KT4XfU57yKBWMsGqrwsxJDGdp1Xh42gPJ4oYPS4Se8GFRu2XeB",
  "key7": "48cbjQY1mJrLWnNcPFzYaEjoG3f9qKrV6cyN335r7PbBmK3HPLH5A7dUN5s56ixpJKnyE7ZPtDTDbJz9gzjugH49",
  "key8": "2Cjg5xdczEHYu7nd1L4GkSd5CZaNDyTErB4CmVerqjPPrGWPZCRQR2KPErCzvuyjstHctjGCPM3xuoJRRmDnpaE5",
  "key9": "327kDBov2qvZLR9nC3nwGoDtyxVQVbsds1wiTLjTFiJkiiFTHqyEhgSqJkYxhDXLZbSjYSeeCZJrDaGuJDNdtg3q",
  "key10": "2KkEsTpfDnSg633DtEmZYgoRM39rXVXHXdJo4PsDEazSBjB6EfHsQ9pS1HkLLWeZocWKCRnNN1SHRWZuy9t1YWKr",
  "key11": "2fwS5gB9E4CZ96677CJxHN3NXN2JVQ1p5ftzGfRaM5mpAG4ZpzFVJ1NB1siUY3q13aMRTkLgayoBPRPeD3EbcY8b",
  "key12": "54SwA5D1oU527uqFTev3EDiCkPodSRcE3nfygxDM66gv9uPrBZ65iMHZWJHase8GqvkxAWBKpaxyPHpdFuEvB8sp",
  "key13": "vSMqTF2q95u4pCfvz2ERy6Z5ToX6dF7u1RrB6iFC9vaSY4Qw114g97vhJ1CQZ48krrCxhB5aqZfWNVFrVTSPpQK",
  "key14": "2zFGuWHiWsdenWAMV6mFXnyHCkK4rxCz1gf62kYmchD1PtPJuAGQZB8ma88RUiRXCUreZqbaFSBx9AgBahT4ANB2",
  "key15": "25eivCAWXXeeSSyGtenUxDeib4xQqFHZaUwjhkg5wt65AWPaCWng3TXLtWvRKiksQNsou5uQds94TVXh4ryv1ePF",
  "key16": "5oFnxpeSmEnsmBdUWpm1Jwu97sXQorpGcMLerpFWiRgCQNUBofTYAfYyA3VX26Zz6DrkkVXMxgMgeod7mPzNQEyy",
  "key17": "5DE6voJp98pXGBD3g6x8WFgvQSPX8afwFdfPHCv4sMbCnnbbngmQCH2sb8e47KTrx6pCQPNG5KQguHwrGxwsDY5o",
  "key18": "mmzCZEjTqacSNwsEr9oyWfPrTjaMWP91QMQsNYegAHit1vFxY1EvBfNKnGhTTCpzQYPVHfup3tem3sFYhi9cMXw",
  "key19": "57iosV2A6UTgFQjD7zSnvPwFbspUAaAwCFpHfGpp8UkZ57uRM9b3fvKqSGG6EWZvE5M6paxjgRsnVNV4qt4MUyR1",
  "key20": "3engufCAMWpHbkrWJUeaJa3YpW7iz8jp9LPSofCRrzAzGwVytP1GH5NdwzK3fFUUZ5HYLFpFkCa3CspzmNGWCTmr",
  "key21": "eHGT481K36miSMFhY5EZFY3RcV1sQjPVYD1CJA6UQZNTmaj8GvFu5YmTfn7gnsT4oj7ihqKdurB2ZahX7DPTW1h",
  "key22": "wRqvY5dgmYfSoJRVfaEgw1UCc6TH7CGpFq9WDUt3hg2XS1oQC78mKJG1v88zfjwRdgLvDXXBxaWi9P244f9hZ8V",
  "key23": "5HGjZtt4N53j6H4JsyubY9pFjwqNa27NJAfKJYVz7bQNSWwoF3fewnB9mnsJorQERzriwQUP9qqk1XTj9LFmj1hF",
  "key24": "3izfeN629RZmSpHMgiuyL6CwfFjDbJ1xhnCwXQEqaeeqAnHPkVsoxaSCwLWrmiFuJBSouXRxMH5ePYoU4W9sm3yQ",
  "key25": "2k5vyGzMuBvxLxxZ1jsz9C13KCmgp1LTd3tHDwFeycddpZ2961tXHG9fnpNFCqtwsHDVrGtb268QSxaBEbmJRsHC",
  "key26": "Q66jtDmooDFLqfYaGBmrpDeKjpAi9TQa7koTis1DjEr5x9Uu7CesUjWUaFETse38x4tFL2EEpHdVwSh8xgyMxD2",
  "key27": "5W78tLyPs6qsvtiirrz7V9kRACxT2qCkkeyiTS8EBVcL1gKrb3WDMkqKnpH1AE3N6XQkgo83p1xzi1AYYtSMUib7"
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
