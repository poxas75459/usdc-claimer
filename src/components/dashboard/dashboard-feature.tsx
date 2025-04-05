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
    "3puEeckKNGwVsGdWK1JZumqjR7PwVy2UoV7hiJ3LEKz2xEHqHDQ8pbkrk6Ac8Fitpmoev8tw1i4N9FwTjQ2RSWbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xdyFL2eXHTjtyM2eiebZGHZG3Nrae3RR7jQXSBPPsWSEJpoMktRyZ7u2ckLHmhTTDLRLuhaBwQmD4AZ3LVvTp15",
  "key1": "3xXvvXKMsCtvxGAUaWd8RQJVjSRiiWegdwnbpwUSbTjxqY3NjpKH8gRzjNUsCDpPfM2Pvf6q3ZWoR2xJSozjHV4n",
  "key2": "2NFqRJzz6yHBKjPYXyq7d3sTjQw5gzZJg8B2ExPMxDj357V4PUGdYgTfbAD2uAsVCrhBPhk29MWmPCCKAQ7Lp3QG",
  "key3": "2Fa1saiPSqX77wonmBtQ4DD2jhEqrzCej5M59eb1oZEXY6w7V4DA4k2BvdhhT3TLNfG6TxJzRSq7hA9Xd6EbxXnG",
  "key4": "2gmBF1rDZRahZAMb3HR25P722cw6Jk7wKpU43YLM7Z9D3N2MhGU1UQn7A1zB1LQPwi9mQCqwsrxndb6GHQxAx53z",
  "key5": "45AGFgxZA3dBC9qhum8azTEiYYqpYJNULyVJgaPTccNQQjfMAMPNuTNDaBb5TgV8u3GDZ6gRppcq7VmL1bStAHGD",
  "key6": "4i1fgzbjpGTvjqnNehoZxzfFd9crEUn7Ui9mRXd6V8LiUhLwpJs8ec1XrZbo8xfs8sZJ1dRJKdf6oLkiRJW5KaJn",
  "key7": "2SFFStX3jGptFfZdzqEnpRKkFBVNnpSeqvq5zWmPTZdjUsfuWuVaaPk9rq6Rgq6u22LCq4ZarWsftVkpccvXnfa6",
  "key8": "5izi7w5hNVZ4Bp7yQ5zpdcmMhg96kbNtTA6STir3aPqmtshSWzNLK1aMAd3hxRuAn38hTdhNVWeD5aKDMA5qehDB",
  "key9": "2a819n8zay5wKy3tya7z3FGGiVeqtxchPVkgTmC15N1Ht1HT1k5GZZxYZmKU7itWmBsAEiSHjU9u6piTjEGrjncc",
  "key10": "2J3GcX64uu77T4rNDMxGxXohciSTCy8NigWd5bXjYY3vPt3zykEarJ72N4TnqBmPfVoKnUfUUYY8624pq86ugQZ1",
  "key11": "2pyFy1hecKrw57A3RYjWaRQDu9n47XhsZyoWwzBwkPyecpD6AWDqWQqFbT7ATBvhSK4mMxnQxkbvrD6Rf9hYGSdB",
  "key12": "2dqZHVS4roJDVVTneWE964nyRxNjYDJNFEE5LZiqSMedFdv82zTK4YJ11a26EFbmCmqh9PV9pVaFFKXbaouBUiB2",
  "key13": "2EJxzoGTrT5EYNCACRUTpu4LufKb8bJYupKt1tBgmpr2xh6VfkRjZhqd1SjZcDrFNKp6fGeX4dBsTJSh9Ea7WrVe",
  "key14": "3KurcDpK8k427UahFVCfBfFxpCgXRqsgsoXNpXrUpPoDTU36XJmYkV4GQpQFeBw7W83yDBStqzRJYHYqEKYyuQmf",
  "key15": "3HeQGJUBWaxaTpFoLtqfUBMijqLnbanuhwqcWWrYfVY6LoJQougSvM9QB62EDJ6Hw7EabHJYcjdtL7WuXytkR3nM",
  "key16": "22viSgEByq6tu4S2axtkyqah6bTbTPeXPiFgQgAfvnY2RBDKyDRHU9XxMqzPjvf7GduannSTF5bbGDjz1TLAum1p",
  "key17": "4cnP1pzWpA2Se85Bzz6fhTXgtJURGUwQh6pii6XP9EcsQ9FhBfUFCZ3mXutEV486aPvzMCfNbuvhvFUnm5CXs336",
  "key18": "4mw1vaGW5dRscykDNdecri1Dwpwzgod1NXbRBG98y21Rh2LvYtDV4cztiqEq6YESx8EzDFQoLMq4t1QsBcB1YWx5",
  "key19": "2nsuwYjHzS38hbbktMFAxKyngjVCgJcLDnnKqjhRcjZ8C9syteB1xy7jLG8PHc5CtTPXanQRXZ3gbaLhJuJcF6YN",
  "key20": "YebDt1WuPiCUn8p4fp79vd4WCyt9uYakT7qrGsvgoVtL8Kzu1u7L7Un2SJMo9kNwSWxNEKyy5xpMNfRafEot4E7",
  "key21": "2HigWBNyjSztHXQwZUV4Rc83A92QGguFnBwQiGAL2egG9XbpHRYMgMCkjbJTdFoEPSLxvHy98DgY5RZtNwZTHpcg",
  "key22": "4qtfc6mnxigYdrCvyFnmLThv7XkmZMsV9ST6gr5sxJbraoNnR4EtCBPkBMVWmHnCbMi8N1Vvjo4okAsRRtRyewjE",
  "key23": "5WHzhM6g9sW7Svc236TDrebnJDfYWaog7rrPKE41m9FWfypFfy7kmKg3fsK43QToHqBQnawfvZRTCxWdkMqj9jy1",
  "key24": "33seHBcsQopkJJodm3baoGdxGHz2nZb6m1LmaWK5qoqUWMgMjFnpgnm7zHAqN7VCMH8uqE6XFC8sHyqTAZcxvF2Z",
  "key25": "61pfSFFEwgdf6NuyT4ioCahc9P1nvbf6eMde1YK5GWUMSdNoEBaurSYu66ZtjSK6xGVxaxpPxebqnnuLt1FcBSn8",
  "key26": "JHuzUAYf3FDAfTCNTV9eiyYJg8fS1Pxzmc1UMqUS5gMvA1w9DrWMfwqZ4D36U1xZcc4pJiqHXyymUe5vPLb5MCB",
  "key27": "2RYywTkGDY4kDSjJQjBHUJ2UMYvCL312zHw9mZpyCHAcCuwcUeXmQDHm5FDpVkEcs8TTLHeRaVJjXMZmajRXsCH6",
  "key28": "2mdVZK7ELzyY1xYP4VEWWhitB6uP6P9DkRDG5fAD6VnrYz7fcbHR1raCn9sPbjW7iwcLGyZiTeDV2iSAosCdr8Zt",
  "key29": "5SYJ2knkZsJBFwyHtYx6gCVsyg1w7TQGAt2U7UAubb2oXnivc1JyGzcgzrj4KNWLoYmVG7DWRQ3nbsix4FpHMpwo",
  "key30": "4q6wZmzfoTZpA7LDgupNY8EhpE6Ca7tA2gRRjFDSPs5zjnZCNSjKjkqCbmv4j8Xv2eCXur72c1hEUeG7jPTLDDrX",
  "key31": "46hqqPg7euQnstPtvNeL2PbU5bEw5vZTYtAEJdBsmFKbSahmQsEzawnkXuQpttQg8PpUKivkKt6enPanp91Rq4d1",
  "key32": "3kXna9H8qjzaeUP1CwFaoHJ5waBmTgEtZQjaQHdwCXX97zxSPCihWuz8ZsemVTVe3GEr4QfiA9aSa796qa4jPPb9",
  "key33": "uvqSqEtSEXtCzbAJWKFY8DmUgzkXCDQMYCo975giFBPnDZ3ipSXKAmHUjDvRyHCVqn9eB9KUbkZyZo7kXBNPnj1",
  "key34": "2Fun6TnRB5qRq5JgtUXAvAA8QjksyJRcbCnDhEG7Qz2E1ufgbJVV23tpancUsnmZ18DXnXNG6hESFao9NQNzvSD9",
  "key35": "77aCbTiy9CLXnBRSSgBmueeNFAis1G6D6xyuvm4Nq4JSvukCBaJJjuQh22YNJepbk744Gn33vBchy8ZmdLTqG6n"
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
