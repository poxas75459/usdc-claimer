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
    "jam3Tv3kXgYtivfjYS1bHNmaNeancALYtpDUGG9RXU1Bm4gEfPraPiEaaLCVPZZLeDXhU8aqEr5yqzrMweBFUh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dd6izCW3ELxSgNWa8cHFvLLwbjhe8YqRJGd6ZSXgwivcHgKY64rxnFFJYs3mAm8UxRB7WRgH86XGezZzfq2FbwH",
  "key1": "2n3jpkCfxn6vVxe5zTpQatY4sCYFrk9Z9cBoHRtCwDLVhiqUVyxHDXfsYWyyAREyjccpt4gMJW5YY9QXTKD5sf3X",
  "key2": "2Enc6gBNx8d1ojhKBqVAx6ezivnRGQbHshjZSzEpunsB6ontmAjniJ48epmNngmfcokV3mrfuuNTtSFEZonPTpWW",
  "key3": "rhpZjdb2dNFpXiptK9gjMPb7pqGmYuwCYK7uZ7nfCRNSBiK9TUShAK3yEXjpdfKBhDKRBacNcgd7pmundPUwc9e",
  "key4": "3CC3AmPoyJynjprLKhfhcv27JLiYcYuCYyaVwaUVAa9AUMif84cAJhnWX6kcNB6UNqbYkkyHLXH47SktQv12KkuS",
  "key5": "2ozmkiWWwNccR5k7jVq6n6jYXEK4eJnL38UCTcumHLPcXyQjsJMeVEn8xp6k9qfUsFcCMWJcdyqKYBNpYqVz46r",
  "key6": "Pi5eEA8cPj7sMzBJWj4v7vSYNWWvesEaXRGrt3acUmoQZbx21sQb3suJ5cJ4wDtKnpVmwhETUm4moYXSHjGm1dU",
  "key7": "1gXaDyowYZHqBKeBHxJY1AcTre8qaRUsGAMyxzkYDKUQGpPw94YvYnTjVkWYj9DZvdjVLTudTKQxbxHuRS2HUii",
  "key8": "4X4AFhAbvYRRTxWc8K2CZ3ReXAK9Gmqys4ZjMUAq2i9VkbicZdqGevDhmojfn9J2c3umGeGuSqrnd8rZVLvRFTtV",
  "key9": "4SAgbDDYw6mco7Zj1WsUkEU6ZqKdRE3wxnvfq5gxDiz29fDPedzvFuAmjicehCQGCe1YMSBWCGB8qHDG67wXbzPG",
  "key10": "4MiUHU6HFgkks4jdN4cP3ZygkZEJ78PCaExANa9c5DinKCom1KqERPPfQUEo15oYZrAsMv9b9ktmV981HgRhUN57",
  "key11": "3RnfSMq6wYtQnqDndyQgT4BaiqEcmns678T2r5aeiji7qXCQcNXjoUBDCzjDwJQikCWgpHoV5QwwRaWwdetubp1X",
  "key12": "2S4HFQZLC1Ae86JFSK4jxnqjM3fWuZrbmSAqVMHkadirnG3gG7hMQCoZPM1wiK1S48yNSaejGheiNfqsmuA2Wxw2",
  "key13": "XGx3koRV2yb9E38tH2ZRHAxbrJktkWQbxHqM8rsdNmpG9ZegjmAvybg4cZwfe1k91XG5NdSCzbAjkjhAcDurFbx",
  "key14": "2p6h4adpGuzrUFF96sxuDeBv1mc9Fy7H61Y57qsBnuw7w3vHeQdDJCBSQTwbatj3WrEDjQ59aZDHrdpz45DXMx9p",
  "key15": "4JGMf2BQ2XYdmi8eTyPHsYaEwXtMCnHpYJwLZitZjPSKFr76mYx3G5hhjPDnNNNYwQ8PDtYU6BNAjppzHZVKUwb9",
  "key16": "4AMXo2NZGnAzzEAqotWutkaAUHWTbfWA88Wsz7qV6LCYBtiSjvuqGXtFaUazL1xvVzd7BHFcuU7WrYniArzSzaF4",
  "key17": "EUkkCBx7S5JDx6HLSxQwsneXpLL977YpepS4nL9q49u5mAdR5PE2XLkYMB8Mz2CC97tXJheYg5gUx2y7aHVzwF6",
  "key18": "9VkrcQb32LDGLfJWR6h2P5k9jucpYWfYN61b5BHjtNELYUu3XDrcxukeMp96rtVYXztxDVaQG81jsNHFt5m3f86",
  "key19": "aDbPLCKEFoWMLVjscniUXQbENh7uegTYABvYFi13s6yMrkPMvuEBejPHHnhheeFANcJjTPz6R9EsrbNtN5YT5RF",
  "key20": "3BCTuNXiSv7VSSr7pf2BY1AjrgrPVXLKF9oYKLoMPUiBojWu4QyFhorsvyDPq4p38azDrLpfaBvygnjyaKMrXLKT",
  "key21": "2M8s4qXQy6K96XECdrr7DmsLBJ1zHCAax6BTDzjx8nPYuCrd1e6DKMTFNRxK4pVxVmr7t4DSoAmA3aaUbJ2JVz7f",
  "key22": "2LCr98nn8TvKDsHRNPmYuKc1rdmdQABhDetviNXQQjqx1aSvGUXXuh7mg5CYT23ugWJWWPz96xU6FCkB93nrsgL8",
  "key23": "3STgcAQ57g51gj6wKjUTSiiZRMxNjmW9nKjVD5vWaenyr8svFsw86WfAH7hn2B1rk9niTLZZU31qadRaaccEJ4pK",
  "key24": "53PYUsXcHmhBsjTdmTK4wF4qVEv6RGVf66Y1rVEhN9zANsrxKGK6bVckh7JahANj2EgGpdNoBiByhauPHbEtHkyx",
  "key25": "3xoFC4aRTkg9J1PHxUkTMPHykgJwLEPh4tUZNucefyaJfTu6f8qPgLRB3DmVuvisidikTHVScGP32pdtLpckRRnp",
  "key26": "3ao999YN5JhhBXArVRSwD3NrgU6M8VaWC9FkzrvhrNk2JJwzpXjnE9n5t6L5GVqqvY9nPVwhnaexH2bvwb8TMwCE",
  "key27": "22rLxTCvQEUuLtExk84gPKiUvYW9EhF9CSGWszaWQqWv3hBvCdqTE4YqHoxcc86nKbzwa2cVb6YtFzxQFNZr9bjm",
  "key28": "aTBfoS8VyTR2YddiRAx8uLQLTvpzv6DMG4ccNjQiXKkG6jEBLU15meBVnLhCiMVUHZFdEjAvQVSQkWRQo38HUH6",
  "key29": "1m9cx77M5LCZt8qf2AMHWvfvQokbyKujkPhz5C56wbpYpHfRB3ic1AteCj7RzyTAYSd4H46d6yuE85b1e6qRvyg",
  "key30": "3dtRmuXpCqCnU5VUDisSNgXRkYPiGjo4D8Nq6mzb73tqcXiyPPE8Vc2s3r6a22iBCSYeTsvBgDU3RAgT8U3U7Uas",
  "key31": "49qSFhQo2sGeJQxJ5u8pjtntZkiwpv4EKV7Kw7biLMw4pUu5w6FzVvtJhnRBYwdn6iarczhPDdRLg7TEbNrxVE15"
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
