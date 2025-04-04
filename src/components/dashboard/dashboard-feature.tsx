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
    "3bvGyVHHHATcEChdu66crW9MEEPtxv98pmLdsfWtquB7C9Aoj3V33eF4hp7UKLKX5rpSxnaxZ5nqgpjro4YgpbkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LMGaVSjmvSri3qpAnMqReQNCyXpEkWspdc4Y8jirRU1muJqY1THgUTdUPyxo8zqUTWveEYkEBYqiyYeNr9A7UZo",
  "key1": "4bcBG7XEUwzmDfUTwwprJvrnEfzSmX9RKar7vb8Bh3bCbpfbgvjg9frYEDoJQA8kwXJVi9F1WauNLTDRrrfq7ZV7",
  "key2": "2ZT4WMSubuiJbYA4bxvU4pkNMZsNKLickCDR7XypE7wT1BeHEmVFfFLTqBb3ra4y6SLZHYwpcDXYkAmRFH1UXu5n",
  "key3": "2BeeYy6EvmSVrKKSqUS9qJPHezezFBhahp94VaaTdFaQLAZfBzjKc16BoWRJdKeZi1skiF9Sqn1QrEx1y3usQfJj",
  "key4": "Lgzj4eiALVufrbpNup61SJAsLyG8ZNkRVNi3t1iv1KxtYtjZUHjuNdKAZe3r6q2AoQRTrAvzftw2qyBjrpK45Sk",
  "key5": "57dSeHjWSvw6nVn6b6BmNXEdhoCXsoEvUHDrh9P2aMPaNJStEnheRnx9nEmTN7PY7pGdVX4H3b3RbKnX7Wg5vC64",
  "key6": "389fmqgxbtvomJRJebwpPDCtJRxw9JnUNCrCfqmFzFHkFKRNFjAjPbeLh7tkpGYiELbnuk8D9Ys5attkeEWq3SdG",
  "key7": "5B3EJzxwWLgpGNwX11NMQnADSXYaUfK7xfkJfqMA4mABZTYNfjQ7Qqwf4PEu7HtnM5kT4iaBAaFeUbaN5NcYGhhD",
  "key8": "5WHbBjcaEStRYHAZb7FGdpFR7oBvXhsp93ai5VVsu3MrncfGYoFrZj9NQzBsuPH52AuUwaG41w6sBNpaDczkEpLC",
  "key9": "5uUPW5xw6haQPTtTnjcbUsx5n5xqGg8vMmTmpqgBqtu2V7kE8Y7g4cUru9nv58S3NzN9q3u2Df477TgcWdUbtNei",
  "key10": "65ZE6Dd9Y9NMWkf82aHBJLumKppcQGvq1CYLm894TZ32heoUfrXX6bwvQ2tjVPkam6wGmVVPEH5i62D2YwgsJbnr",
  "key11": "4ZK5GsDqjWy7QVsVvWVTKTyv87GUuSdRje48EeY4PueznGJVu3gaygoSKFrDrogg4gE2eYNPQyUFcuSr1FGEqDhT",
  "key12": "4MvJi4fGh6s22xMSgPpsWQ8WVboTSxPTkpjoKPBiU62vj2V765PKdjNnkpacBq2AkvkFh2cnoMGPYQ23mikvy2mN",
  "key13": "2MncdZUVihKGqF4Vt3Sa9xPbG8pJQPSASBTVuZxJacvWsCdNLxN64GxVY739PvjkSmZ8mNSX3o5ubQj2F6D8WS1",
  "key14": "DV2sjsS4pUawjPbqqFwJxdS6Fdws4auUVHTfk1VFuKkPvoNxnvMgbQyPiup5MKiWZUCAUbXG3b6mLxuenp4nVf6",
  "key15": "5q7gUrazWZ6aQ1eMam5oq162utBsUWU7y7w2tntHJQ1PHgcpL1DZJDjVcHhJXfmo8WtpbY8uJvHF6Sj8F53qEfUM",
  "key16": "hE1NCPSxb944qfcF2swbXCb7iwwZ21SuqGWsM7RGdvB5axMp1vLBbEWxaHbSA8qXdaPQK7G7obNA7PnjQCCi6c9",
  "key17": "4yLa346cm1WYvXpxD51QicRjCX4MeH2AYkVxzQz7t3hvGmJhZtPa1LniXmgPFLQfodVqc7NsevZuQuFrjCCUyWpv",
  "key18": "4gaxWM6Uviyfm6arePCRQC4y6sQf5uNpHaeZFdDAt2rhxcvKcp1Frrnx7J4UzPFHEgAxooYneuktsa3X66wnMMo6",
  "key19": "2kSsE4EZxDqfrANXX6i49fi9qr5JxNtsjAFFndo73Yi9zhbxzKSdrWYoJnzB38n4jC9NLybc8LAxiTStuwtSsLrH",
  "key20": "5WUKr5gybzZSxa3a5rv7CWzTSNJiGdjErs18zdUQYBA2gQdwCirvD35yDV8Ri89TaodpA2avGdPZLnnz84XzhqkM",
  "key21": "32uckeBwnjPyTEfAfwsarina76XTTva26BBfxGA575CifHbEfNEzH9JPnog34Mh82dXU7RMfZm6NbyK2qj13H8m4",
  "key22": "3g1Gf6etW9KPQMiz88Ne6QbB32z9hbj2pTtPGWH1gNK2AbBnn9k1BRbmWYgnPbt7jmfr3nffSVE7mr2DvAoe7WCN",
  "key23": "aLgDohUZu6X82i7GgVcLZEAd4sPXWR5YrDpPikKqkyPedLgNZgFeaW3naCTBQdSSmLrkiGxyarDGiR2pyYedePj",
  "key24": "4x782KiaYRsdrff7vmuoerLJLUWmkBSm5qKcNvfPtnSfPkkMYr52myDrYAsG3tQCrsRqadBYG64p76KTYUjSLs23",
  "key25": "21wDThfmLKvNym67Jy2MAmCV2ZFecHS5gWNfDXYcrkat7CQmh8uYNogELWr9rXoUActyf9KHAobt2bFhGbCrYxgc",
  "key26": "463scWScfNdJmtyUgrNsgpA96R2BcF8GupazpxJ1GpDi4eESLQ85jeuFXNHW22W2ScLPnRa6x8ZgV2jYfpLmg3kP"
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
