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
    "2N2D2HBysAcqG4qTpWKT1Rtid8WcLBNFYzAwHSUeCLrXKmcNsPhkq5WHUp46qrMDPfRDR6NDT2CqecDHHPtzW3kA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uiqnUz3Rpa6A1BDh59HWJu2Mij4gue6VwmQKK3HWbmNSQftHoe3egK9NSiVrfsH8ayiH4ct5Gwo44NkaxFqqLPd",
  "key1": "4cpxAV9BrZZV4gQUbexGbQB2oh2d4j2ZKtf6xLHiLoXFbVhhfjb2JGJREkzFXsAfP7Qy9PP9ChfSoAsj2x3xNGgT",
  "key2": "4EppC4zy2xct6WQ9MRD9bTakStsw3F8ii4YeuFn2hxK1rFGi9kvzD2b789qKfY68ADaxaQ9xTYhUqRxU419TG4wE",
  "key3": "5d62cm1PQaVeKmzfuyjehK3hb7q8Rz6Zryuxy81zeSdUM2mKSeV4fsvggSfN9mUGa2JonfyQw1H1GEDZqzKbjAE4",
  "key4": "537ZvajNifQWvjTHbv83EmFRW62q6bJVP5hFE1LrqNYLhqSXVRE3x68WMRHjnciFuroTpShoNsDVDet6fmSaPjr8",
  "key5": "5tCFNL1ZgkwmErT2i9Arf1rtKapadSPWEoMFKvdNFsocg1AT4hZptT2V5VJ2RCN1PGHxDPHDcrsKXH9oBBoZrhCf",
  "key6": "oNB3CLTcHXdcjwZta74BYUjk7YgEGxufXjgPhujgkkBSgfrnoYDGwSitPscrPCqwMEwe2CtBymxB6osaaj6aho1",
  "key7": "rmtXcQ9oiqV4Kr2iKjzFFZQfCpJhfrgtR3bhTRu4sD4AYMJkGUUwWVyDM4dVShYsFyHzyb6oRNfVQfvUKzgWJPq",
  "key8": "3BEhmCgDe5MRmCj8yAqej6so22NJvCLSgMZLapeFDghDZGccYE5GdfFmLZspx6Ftkiy6Pf2wKfMiE7WDvQQzm1SE",
  "key9": "67J9jJoVFwVgiy4o5RufXpmvjytb75T3fxNmzT8Euk7R7QXRdTTJGbN93CXyyChSfRokGgy5om1gmgoRhanBfVV1",
  "key10": "3sxj2j8RNCKy75X5nJDYYsm4fL97EttME55khCG5j3roWLw3FcZCV3BpD9fjrPMWt6jyd8xvkDhC9ESYqWg2h95x",
  "key11": "4a4LQEx7psMFHvDGtJwn7agNWkMVFdwdwEASvpCyENgxxKQ7NkumrZtY1XSENgAbxWjKPgsuDyMNR4qSS89cnENi",
  "key12": "5bLRvVEfkGUFiJeGxDkcdfARR1ptLiJ7UhWPkeEkGwCjmtXY1MdfcJyUURwBrGqDmjb7RRvXitbieYqnU9UbZfoZ",
  "key13": "3xeocZ6RXRaiZSfxTSV1RAqQnPYSPp49RWf4n8HDvwqEEubYD8VEvYXtUdpsX5Fcd835rXj2pR7SuwbGHPV4ebF4",
  "key14": "5mgKt7EbHevZbvHfTQHXh4K2DAFruVxrs4xHEnmM1YVaajoN1HSz5zp1p8BU3WA72hqLUeFrrCEFpaamKauPHRLY",
  "key15": "2cF2vJ5qfTjJWzAWk9q3itxR9S15fveFm7o4YCwn6QhfQGvUZgZDkKGPyfguPeLVe7wfKEyktj9ZwpJVL8sxeBVW",
  "key16": "5nxzYYfrJPi6PHocXPkewjSf2nrMmCVaSNU6roRsnaaaPgB7vu3ZLkcQ7jFhuh8mXSNa3qxkhKEP8zhYqVMc3doh",
  "key17": "3UEgcdbRZB28oL8PwkAD6RLdx87qTzj9aWAd6wP4JM9yWcoPpaBzoHoBicTL9AwXkUJ5VgtZurV9HBU9t63b5erE",
  "key18": "2AJSpPG1wJE2VRaDBYmNVmG4A4SRjhTDrbgi2QfSH2iBgEaofH1nYdnD5tUuGgsLr43UMRnmCV6W3KwGdKSYrj3Q",
  "key19": "5rX1Pu226yKWYVFNg33qJPUbXAjrvchEpUKE7Ake2aC1vuK7sQP81xtjJFkaNU2nua1NrnkRXRtYgVDbQUH1rLme",
  "key20": "5JFZ9sA3aiQT19xzKRNnoE53nwE2gpx2Y5V5qdX5vNXubKDAgYJHt5MctUQUiWe3t3ERZwsydw9rchkxFpHJFU7u",
  "key21": "4NNCn7DWnpKFAJWuGM2ZhuDUBTQtT6qvbBH8tqWkGeYCCs3oEbRxzfmfYWJjgmA9snWqoiFktuKb59CLER5SSu1x",
  "key22": "5p7KoK16hTWGx79zB8nYdcJ1eWsr8ACFzqJ8QV8WeYgwyz4Zgs7E5VqodV8by885Pef3pbdWh69A7eroST49fShX",
  "key23": "4tgnjJpahqE3Zy6M566q7R3osJn23V6MpPepn8apuaKc9pMoU3rsaiJLV56sF5A47nrRMusDYzuE7tMu7NS3HUWP",
  "key24": "3dLio9kuS58AyHgbbHBTKczQM11k2Q9UaLa8ueTZ4zZBdQ9rBosXZWGK2PYQ9PoqmqrMZ7DBUyBkRW5Lu584Z4HA",
  "key25": "Wo4CVabjegL5pmkQP4Hvk3DJxpsNNgwACz17LKzR9G85Aj1KDQqHrrdTLr1MPm8QGeEDarRCWz7kEw7TUBwwZ2H",
  "key26": "4yPrip3ytXAHmPEeF4VTXczjM3bYzFaVNDW7ouEdKgVJi1LVMYyTEVHsKXZdgb7oU5tHCFHrHmnbHiSeitjK1mpj",
  "key27": "65ui1JYBFPz4CPN7sVmJCPCizyodFzXNnoPoBvLgrYD5H6c9fWrQaSnv5XMQQHEn65Wq2ajsXJs6WhijtDFHNqR7"
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
