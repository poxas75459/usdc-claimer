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
    "3evVjsc1goRsYGh9uZRSF4jVBWUFUXMzSuP97WzUuT7bKxskMbPUW7RF1EKK8SvykXBiMnFHGhRGXBVFbQeBbqNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hYWYBYxKJdmZpj3dpcjKbB12vp1tj7KcddfZwzNyqNprmXwGFjLfSCMRnBSWWPSJi9syzSrQPrnxG2cRVAcpSVv",
  "key1": "4KHe1KXvPJ8mb1bwwXxsqNHRf4A9EZgH6NFzuhb8JrLi9Lya9QodXxAXchqqhEtmp9fkgKzmv57xvztjvpWAbZiB",
  "key2": "4u5Ntq7Wu2QuvFK2jngbtc7H5dS2UJyT45nxTB1XtEA7QsTuaMHRKqwRkSfYUvJASihmhHmqrQegp1XEmS3FgKG9",
  "key3": "3yh99iV1WD6yZett7v6WbwPyiMwYappCbyDkp3mmsjAuMGFUhPjRvhiE1MnoSqpcmAv33V6dXMWP2sQb5sc9hgeR",
  "key4": "2FTxZwNPBTeKpewFnKJ1NqmPZQjMq4tcvXkTBuvL2Kg4zchs6bszMviuXGn8EobTKMMHeaFatWodvCc7Ko34MGwa",
  "key5": "2UyYWU2hL7noEHcKcGCYx9GMZpQ3xgp2rnMX6p8oYXBSYbk3CAkurM1qzzVtaLV7TQ1GYqUnh1vq8gRtLtJC4TzB",
  "key6": "2VhmBxYWLkAnJFEsWjb1F8Qv7LCVRrSuMUxng3JxcHAbz2eJitCUKA2npFJUEkxigEKesfFjwd15Dmz7UYoaRMwU",
  "key7": "5D73uLPSd3RSweyTK2KsSuRLgPsU8GcEQqdvdX6TXY2W7u29CEyMgzxy9PHbY2g7uALCE8H3M9Rvg8AWvEeQQDD7",
  "key8": "2N7WySAmiH7DgBXzBiJjT8kTSfDCqCG3T8t67UBzHPuxXaM9zr2REgiTYUpPupzm2cEfihbuXnKinRy6RDgi3JbT",
  "key9": "3SwTXMyhakN2UPQhDasxukYBdiWXU8JGwFYhauzsiNCXk8nrPm6Q42E4yZfLtjB2cCkBEq8nDB2b6MtY4c89KU1R",
  "key10": "3dfiDDrqQydzaPbAJf9PGX1XbsrBwctZSq7EAQJWAjsTqe37fTdBar23KpENyHWjMJdb5pP823fimRcBSKq1QtMC",
  "key11": "4SXCxzmFL9pNsgJk558ZeCv5jdqGBB1UXNpXv8X77EzaTZaRanB7z2tKP2UFRMAmtjhGaE8aKSaishw12NTECHrE",
  "key12": "2QJEw7TxgaG1QoUiCeg57kVTtKv5Ew7zdAns7oqAejnuNRgcPK3RXUjsC5xJZpgua7Pk6ZLq91dZFgUJBKJRjd67",
  "key13": "3dggYT924v2SigEhtjy7EPV8So5aduVy1ruyQBAHGi9rpMkLBEYpMy79gMX15h9e8FKT1quBxPLameoa7bEP7iw",
  "key14": "3tSHAwqL92v9JeWg3HKQYEqBJZF73efZ9peNfptMk6KLYopoWjAYBkHaa1yrHbY8VoR7k3zHtiuT8hPYJGkQfycr",
  "key15": "5SFX4gR7PC9LcXz3bgiEspoqCr1X64q5os57Kj5FZdi47LCrhqRY4bKgKoc8mZm9JyukxjGHaPhw2RwqcMYdbrew",
  "key16": "4WahzPHZepEXppdWhaxSwp4R7BnQGsDuD8CtSktx7anGpqYrA4KF4Ws8xdqmKYUENfEXHAoPhk9eMcN8nTgfa4uM",
  "key17": "3BPQyXW4oFSv75RbCG721RPHaotA4euxdXWp5Y39sUgnmCQrFV39169zZzsZsLnNwXRzRPikdwHPzfnYLF79rKHc",
  "key18": "5Ew2U2QQhNzjEmgumKq69Ece4SQnCYf8at4P8rtVHqcojv814M3i4LS29jJtNVu7nhNwouhhPqfYudKuLqJhEScQ",
  "key19": "4bctiU9ixeNYiuf2Lmzq1s5nL1SBKC8wLboYHeDv1t5FvppZj62dVXcg18gtVmoh6nhvPDJzENuZBa1HdHA2Wm9a",
  "key20": "4ZN1dxrhSeMvd36KvPvtYH62KJeFac6LcKTpHFUqaGrwNBdYLStE3ZKhDPvFacQhUNw7XaSX5M2uan2zCmC9bbmK",
  "key21": "2xPwaWEZW4CzMijcGR7UgTVKQb7MMhc1z2j2jwBDSe9A9JzxvkaqtUeLtKAPAd4RfdU6xaS86Fqu3FzxYJCJsosa",
  "key22": "3bx6gSAcdBXybWzPrimHx3p8kkDx4r6NUneKXCSeEUZi1oAZyJQSoqRWSSaHMF3EfYDhBNd7eHLcCrAELJj9HowD",
  "key23": "2uuaRrcmtnW3igQ3arCuepupZKZSng4nxkZjHHZQFc39fy2SEdfS7352ANdijTmtjTjpSCF5g6GX6LbEFsDQqaDi",
  "key24": "6ytuuGMD688EYWnggSn9dDfUrYFpbFkfdpx83usKBQmYjW1sL9YoYZatea83mo44cCpRkguKTwTmaEi6NuZG2Kw",
  "key25": "MzcrEmMqJdkwS46FXuEUzfApWWD6zqY7kCHvAvrJL8DDNRiur3mYf3oYFvDt4TyEe38EThcueGjE99CywUW9vNX",
  "key26": "na3pKCouEgVWzSqEP5LgXAKn4d2Ym39G1eKzfuMucwnj5W6wky5cVtNjN4a746JaC23woiCLvEjW8pkzL1oerQw",
  "key27": "3uFuDg5LBGY2aKc2eSLcq9pQabbUGUShVwMzA6LVSfpCrg71bwiUSCvJ5U461wtPo7xUw3HAnjNLBzF8JhEaKu2v",
  "key28": "5oS1FSFXxHsJCma4jC2fWUWPmKQXB6vaWFuZyrsE8qDYCvjp4tTpPHW3JeEU5bNdLH2HKWLht6CW3knKbegpT6Wj",
  "key29": "5BhrXmqJyuwAMDsjAxYHnU3yiPmDMPeoBNJRyJJQQX8geEmXHZC5f1puFTYg7vb266rNhLQD8SdX4tSGMg1SEPA7",
  "key30": "ezTcCgymAp3hBy4uuRUi98mFkAPSbDXcpZg94SeastrF1EunD6cqbCNj1nsDSUsij9pQUiQFr1TtJ9UNcQixktJ",
  "key31": "2X5GBWjiuonx8oq5Nm2AJEU1Zv3Gyy13GvtB8cbfiD2HFpBC3HZhabHpHAdGYSVQFtzyiKu3BEmUCNcZMjetWnao",
  "key32": "3kyAkBLyQqRtTwndgDBit1VQLbUGfYkUxQKFm2C4Ydp3fX5ZmnBbngcjPxG1D7UBpLpUykUECCmCLBh5AXreA8nF"
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
