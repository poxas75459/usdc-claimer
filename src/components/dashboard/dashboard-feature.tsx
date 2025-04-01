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
    "V3ScxbkzXS1Es1BtJ6gsxYt5vYhXrBcjMDYewcypLdXXGzhrPjW2RN6JpPsZCjCaxa5Ky5raZqzrrA7BwvYiQ33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3odJbgXAukcoNbbAZkXSmKK9nToHYWTguTYyZQVRecu4eLSsr8NH6kZPDLAj8pRRW5MY5Z7KDH9ECRdgPZGJczT9",
  "key1": "gY8S6VK2piqbvQRp4JHe2n147pox78JyiSCNqUYFEuHRfaBuJAscFNMMT7tFkaj4rHhjRGsM82C8Sz3rTXhXdR4",
  "key2": "32umRxUZEp6He6cjEAMeUuWYXLCeL5fzVehetNe1Wg4Uxrs7FjMDiJKHhZSq28bDPZujnxCoczXy54vnhN5kUFbb",
  "key3": "3QdK5dgpScXJ6ppCMXZBoRycNQsfiJ22KaQQ6EzrKbHqAwf2XyKafHxPKzTDtyNrBYacTDSJXrRssxYon5reqnwD",
  "key4": "nMfCyvYGygmYXoStXD2RvQ7cpuu4ktJ6TCwu1pufXr1hjjC63xRmJdeQSwQuKm6WntQL6bkf7bw43YK3oGCt9jf",
  "key5": "2cWivLjYc4N2NP7siLCvzvh8HwYXPg7LhmqXkmahXqczMJAkS8W9ecRebTrrQJijciqjifkyoJ25iiGWm3u335qN",
  "key6": "R54ei3BAqyuoG5XDiuGrKXsbdgur9Fzq4qYfy3cfeuwPuN5NjN3TRizuK9rEyoSDMqZbtqf1rTQh4rizPE6WbwF",
  "key7": "5nd2HGAycgwXaxgytG9MZi5sVQcMfg9kEL7xZK2HV777E9UkPGEUJSctzpxWDD7ZBR36KNoqHvT7EggCkj2Gc8Uu",
  "key8": "5RLNobLcpz2eEkFZTJ1se7pt8qQDvgwwffgTTFqD1UcDnxnTGNBjEHCDQyRQGaPSRJScMdsh7xDaVVznsdDoCRkx",
  "key9": "2iGxdteRey31bRLtoR5JA5ne8imMNPp1dfBH11gbNru6nS9CTwK5BJoJeH4a13vka9wC77cudJ1D1PV5XCVsv9Hd",
  "key10": "44QUmAVj4bGXsWm1ZFidB2R1TCAtJDnNedFYcwdtqEEBboTNMoj8wCZFd6YGPTPKWHJCWjxrSQbD3EKJA9ZzySTh",
  "key11": "2gf7A6iyoqnceHCBRiyDr2nBRq8bDJkcW6s5Up7pvrDWcXDcEKcHsmS7LB7kJBjk1X7Wgz7WWFLTg4ijkjvg87ad",
  "key12": "5TUjUXCoEma4gZk9wZk7yGCXZYsfdp19wya8pkQizsBQ98AhGr7evqkqHEYCaLb17mFNjbHmCHWcHQLSxGBy1tge",
  "key13": "3egjism3pkij3i6mHfB8ZLGS5bNMdTrutRimjEkWmxDzxVZ2s86jXPWSCHb2A8auV5w4anvLHC8u444zDRz4wTfi",
  "key14": "2TDYLFdNZ2o1JQFVyxn7qFoQWSNRR8bjP5ooykoZCmxxjyKpwGHCk1Wm76r8Ymqp1Azs43cZ9V3JSd1f9fC8rabt",
  "key15": "5c2mWrJxVmxouDSwkWgpaLrsgCYHZGJiWwJrMSE1GPtpUjGCQrr7cPvSmXLwAQD4Dn8W8TrkDN8gVZGfavLapKKf",
  "key16": "5QsdUTxtw1uHaBACMuub2dvBm3sNbc1QJZveYmmgbneUebGFaoAb3Z9j6eZaKXNdJng6CBW8QcUVVLK4AF9fevXT",
  "key17": "4WtNVtiaV2ymDniMF9d7V8eGAf8fLeUpdt7isYyoT9Pb6yzMeMinzg1n1UfGsjCmyUYYJ37vxa6AXXdvUdpMbs2d",
  "key18": "38cCvKgKz7YmwwviazGNMS9XVJKfAPbHcg8UXDZjML6AoEcznvztTLeJXQj7LJnuy5Kb556iA6tRgsnv2sr1GuSo",
  "key19": "5du5nQing4t8drXSN87sNVMx2MWS32Tf4mxvjmNY7T7hktJoWJefTdWG6aLDtSQPn1V2oiARGWvxFm7XehnSzhea",
  "key20": "4QrtstTqZHTB5b7MxatN3iTYqohSbAFut8iDq9mTZudcfrQynNjgCny5aRDmZeFBwGpkVyCZAdy1VS6NoFCuyQn1",
  "key21": "2yfbk2nYdPJbHNSzBrCoo31rWBV1Bgu7gL26BU5hYWdcqpkskjGWoJtFy5NkSy6g4Uw6SbVGihJ86v8JscECEAGJ",
  "key22": "5Ahn9g3JCYryFE5AbTVMfPbXMaBZ7TK3YiLTBGyue3DpHzPYPDdXgbXsScNL2medvttPSsroh64Ctew6yFYVsGjU",
  "key23": "5Waj1bxpXmSLvoLRBEKML5hHBirsemkGbnjAMErt2xccEUDcLHEQrEMSKA2L6rp3CBmRNpTyxjJyWwANLEz83p2Q",
  "key24": "4Vqf6g5FuSb8N2BHiL9gJrUKhF8SGNPVHJ1oQun8HfPZgg62t5LbQQsPrUtjdK4K8XRmv7TxLiUeNWapoirHswmX",
  "key25": "44spfp42M7hkeMApnHdGt4ARQNAJvwxjC11YZJATHomLFC9mHnHY8RzdMivmTjN3Y4Hz6dRFAA7eeryeGKHpoqqX",
  "key26": "3CArmpc8kpmatokVbqNE8ytcJuzBRTHnMUBzA6Q3wb6JewNE9wzzznrr2a9EDiuaF3WoCwFW92kxHfp7qTkWqRUw",
  "key27": "4qkJ69NSoFC9W4XZDLo7d4vtBN7ZiFKZKnrWRntntXo9gmuFXbWZRYHQSPftnXUUjxecing2tGQcvtjXq5yFxo4T",
  "key28": "HLrpbkLB34Mq5JbCvZUBg4soWprY8KaPb2dmB9zGCJGEcLx498TwJAJVbVbEQud697QYZCXoVKdwF4jS8N3DLwn",
  "key29": "4VjymRgwYB1ovxFhqsmAUs86wqprUXNZBy3XNinivvzBM8RoaMc5vWFe6BZFZyJpmYKB9KXvA7YxPzojQjxAHdmP",
  "key30": "5Bb2MiXmwd33o8TqeYqENF75JvUfqtTsjdUfwL9ybnE94F232W6n9k8Roo6Y1HeRXwLEAHjSV7A4tQo2Dn2JSnx5",
  "key31": "3KtgjposGrxZFANg3zSa1mas6CX3jMVEjdZJowksQ2vQt5x2tNKy1s41mUiDgVhMiWCsTB6j8AVbeiJXnGCzLsz5",
  "key32": "43pf6xVWjvUVCacjp8REkMwgqueHPXAuBix4YNLgfvYavFbkA3ACXHQwVWdYvUbepxK8x5Rgmje21G4T8t5dJT1H",
  "key33": "4JtPbMnXaeyGN9zeey5UoVJNkCBjcff5wTvdVWNeBZajPq6UVzhv242NzoLa9ZnszZoUkjwVhD2d1ZPPohck9yKk",
  "key34": "62DDA5rH73p578KZV6hyEUBHwR2do37aQvsEaL14buAE35vzNa47jpvdkqnoLtvZytAoyyWWpLe2bxNvWUaLEQ8f",
  "key35": "ZscMTgSCVG4sHn6e7n6AswT1kyp1imQgcwCboWE4N4imUJebUC77ZFX8gzipDYUwdjstzbDMmMgGiMVJd353Sq3",
  "key36": "3FgVAyGy9RPknrKNbiYBtXNf1dxwuuBHsjCx6vbkco1bNCBbRC7kCr7UvAjhGJdGhi15F6yBqDkv9e1CpbeJyDdZ",
  "key37": "4Jk9QY6ZRBPA3xH523p47qDDVPSoxGX6xaeuz3BEEz4nqbZCdkouAVoTYLZzsGQVmoEXQRYLhPw6ngr9n5pPHE4T",
  "key38": "2Gw3vwEnZLXL3ETfVjNXRboAtXkWRe81g8xyBC65d9kRmXRz9J7Rg8H69HiuYn4VVW4ogJ6A7g7VyGmpsHkZ7Vos"
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
