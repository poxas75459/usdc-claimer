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
    "4Z8P54DGLq8LSaheZjE2wfJ1n2fdfto3z6LsrCygi6A6QFy9yCfRSqQE2dSrJdkpD5LYGkm8Ak5QBjkq5aL3j3ra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66xVVu8yHDaBX4JaZiHqN1fmkFMxzYaNXXP7WQHKQXV7eyEPKwQjsRW7kMtQJnhdCGFCB7rzBP6vqFsxLp3cYZx6",
  "key1": "2LYwa3U99ye9Q5Q57RQfXb6JZQjZjyDQug542Pp34M7fuR47BGdhBTuQzKJihYQLT2ee7tjdno4DbyMvyTfRf1Yt",
  "key2": "34ptQJtpFSkHVf7EAaSmuB5RrcZBcFGLj2zMpeyyevtwz7zPtmtV4PCsvrXduDbPE3WaqLRdpK4cEAjUcBrqh4mm",
  "key3": "4TXuyzRaQMxSiLMwStGyqZPNZdi9CxgzVuV5CiQqzZWpyKD2K1txj49y299M6ECwgX179JiySCeyqbUozpKMZT5S",
  "key4": "5PVQ4tpc82eKGb4ca8i4sd4pjMmybuwAXsMV3JJbws6huoGr48xxS2775UhqYkN85M1Lybcu7GNNWG39qqn4CoS5",
  "key5": "2zaqFjq82RecNNvEded3uXK9oCMn7hWNXdHUmYMHzG6hC5aSP3hPk9jcTD3Scie19pLDzqVdnzB6QLfkPeMBWWGz",
  "key6": "QfmPcBuHCGphdoUMv3Um7ygdpz7aa9TphJtTKKSFWupf3vxt7AmoTU2CCb5qT268wWkF1CJQgXQQ5ijokpbrFus",
  "key7": "4Rxy4Z9uTiAsetMTKcttmFLcFexUKFQ9arwj23mMqw5fPPYbpQEgoThPDiXaYkzZ5QLP24M9ucRYShfnFLL7tYTp",
  "key8": "5qfEMxqxkJutuRYxkgRgDgeQHp4YqSJiR4eYL3keHJtnVRVU7QEX7wvj35E2EM2CN8aZRUqYYnuitMEAaoE587iX",
  "key9": "7pPmd2qETdR8JmmcG6MsR1PrTEXRu4tazdtdU49NiNVzv9TmN8CGdbxHGa37USKAwWWsbx38yZmzrJb7P4Wbq1Y",
  "key10": "3QyTWxh6p1fpTuZkCfp5YumkTGDC14dEMjGuhtdMLJh4pgZenRW6YAvoxC6CGnwiiWAAFMskWp8gx3ujijYwT3rM",
  "key11": "3Ys3EpxnUGEqRopqJF4t4PP7iTmiqZ31f9cXSekubZ2QnC4k71DxphvHbZQDLASEL93ZNP85DaoJyRA4caVUGCMy",
  "key12": "3uh1m75MWPMeGkAxBJwPYPbHSvbkXkR1QESHxfGQYGeg6QuuB7gUKN3297g22ziQDrxdr5aoi3krSCdZ6oUb7hVb",
  "key13": "CYDRCZUbJCmbHfcTKjVAYEQBGvnn2pBcd5UEqcwqzkceQT98YBRe8kjbn8CKxEYorzF1p2r3HPh97ERZeTrCVep",
  "key14": "5QZb1AeMateNdB38reaZDc96xTFszJJD6hUeCy513j3bSJPkKFhY4eXkeNrRoYYo3gLPkE78TuGr2z138yuJogUz",
  "key15": "2JEL6mmivcKDmcaAsPEamxP9wo2McUo45dD9itRuwoxu24aMvsC7TSiSLc2sFnojSUs7WyxZoguuFgcrLAFMTuh9",
  "key16": "4xxekLgAf5QMzKnE9UvmoqFh5XZjB4yACf6AtcyjSfGgqspykza2PHE1iYPc3w2KEdmVxsYNWUmqEaY5fWdfyoEZ",
  "key17": "58rWg5z2DDZdozjUKqHDmzh6c9eNZFzSunJ1pmYUVkuHDrgo2yJekcyYxjH4GNpdrjDAQx5X8YQJ2R425BiDWAD3",
  "key18": "5Au9qB3sUHMA1sWs1iFtn3PGWQ5T1ATUiTc6vsaHujWpucHToshtm2qcjcrXKqfKuCvT2sXg3udAtaK2YhgbDb8o",
  "key19": "Q7wh2VFjyDSZ3etJBQJ421VPb64kx2YjUxwYQFbLCkVbRZTA5ran5YkTRM6bmwDPwpKsD44guze3MhHK7C5tViR",
  "key20": "3aLBDn25553HSEWLu5f4Vaqkd9m9Zvf6AYhCsrkHxDYsAs4L23hQUQRnDHYrr254WErrUsPtUrPgzqbrQC3FeKPe",
  "key21": "3ynETrfSruASxJ1GA4g4J6v9op4kjbcUmFi5bCuFWCPfTPBV5s5t8tn1KABKYjVyo9gihcKp1TwuCB3GgDUHJfxR",
  "key22": "629VbLTNk5ofkNDum1drHv9oeGbXKvZWVp3su5aNYgArPSLdZ1AZ1i1YFZJAU83n2P6bgrXEnrgy8Gdu4mP25rak",
  "key23": "3ifxu9obwTMEWnAXr8YfNjUiUpdtNnpPfmp5CozaDJorkK3rd3bAGHPm7E82MxcaX73xCMghPsPk9deXw9QWgfW",
  "key24": "4XuhWu1NX9XtU7pxr7oC5fAztoVRtMz3BtAw1cNL4NT6mCLXbqMMk8cqcLXAR8nptNoTazWWHpEt4BNyyqqJiPA6",
  "key25": "5iQPpEqEHNjmDep31TJZP4UvVHKG3C4kFHmhFa3Jm5aAaK49FQcvWqWEfceAi4g4BpffwdRviLVFM7tUPpi2ciHJ",
  "key26": "5w5n7YS9rPxbEy9P81jPnLJix8wwrt3jaNCPMTBu9GXnSZAtNvXEkjRxhb7EN3h9nKajqNFdvSzuTYz9VBNhCbwi",
  "key27": "hHinZV22AQYbCubdJu6LVmPRF5qYKqPW8ncXR6qq6cX4XH8E4hgxCF3LAp62g1HcamtfEyKK8jHRtr1NDFXzLYH",
  "key28": "4hytFiTuxksuRneDZtrRNubedDDTW5KdkLAnXSrHGYVG8gfgtGdBTUqB1Jg2ehFtCocMpBnkFZRrxv51H7UnxGjt"
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
