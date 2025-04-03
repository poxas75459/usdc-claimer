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
    "2FBgpf9YF6dq8QnjpjYzPQR68q6EscgsF7iqJpsRYjkYceV4kNpomWqCceMqkeZLqV73CkQMXWiuUdKBW3CWEbQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sM9Z5hin3z99D6W2itjs77iy1C6KaXeu86a3PA7bhkiRJcKcZgZMoYnpdmFq1E3hGzX2ShL65o2DNWfttMoLdUP",
  "key1": "xcffuw13CXUB7C8wmq8Ti8zfDwrNnaiyfB4YTqoVLxUaTvzUzDgrGfoWjXMRKanZq4orqQZjXF6RzWTCjpxYyvS",
  "key2": "4KVvzUtEXqpKtMGRphoQaTP9s33Kuw9EyN6LiCKo4vfzQ8v5gX6bE5KFHAPS9D1chWAAbMgPy3zbbCbphgGChjgz",
  "key3": "4zH3UofyJBrJ19sY8miNEe3af9rcsc5i1Cq5FhqLtnAzGYt3LMbm1bV8gc5NUwnBSCwe9ABmLpBC9wwtQd7Ybvz3",
  "key4": "38nQcMf5sMdrLAHECLionhb7dYbe2LrACZwYCaw4mXMAsU2JERvLgskosgDpFrEZXvbrcQXqx7tBZzqAHh19biG7",
  "key5": "5aCY1Q7uVFHXePM3oCp8PoVXb7YtvENMhtHEvuBX2CV1i53rwPgqMvpWyX6zVPfrrq9Fq6KLPv4nCRADuCSfZ8Gv",
  "key6": "v7PAjXj98PXuhUsFpYv16ViJN2EBXhx2Knp7U6JMzbZZLfAqNVCSwwMijiKd3f9VS8NbkFknAkpMrd94kv39GWS",
  "key7": "3mcUUkxzKNVwAZPo3xpRynaKLsUfxgzufRmxKJczJQru1XaX6cJpbttYgVH9kzNLyUpUMfvAoTPjqYmGbnsiksLa",
  "key8": "4wATrjquqLRyg9Fd6ykmDufyCxyqNVJ4ymx7WSSjFJ9Vzr1vssj4zgsnDkDUV4CLMwNe53LgbWKRsabLYVkjs6Sg",
  "key9": "2y9aPqshKJFfwVvkiH6Hhki8CchwJrdc8Uj7XBMgTNxg7DeTykYDDT78Cryi3whpKZEbg8MoPZWLGvS9asoWYj6m",
  "key10": "ZkkNcQfNmwT6JGMPDNhscGxcxtQUmD3GkKsvZrzxdhTmGGEXANjuA6L7zt6rGin3pm715BAHeU6DPTRbLURZ8PL",
  "key11": "57wdKi1CEQmVpB3gRMvYMAu7aDC4Z1PAtM9e5QW2t9jqfWHsi5TMAJQPAkm3RVePYtiZnbmXkPC1m4mWYbxUGVpJ",
  "key12": "5wz19HouuNMPvLN4HTr83UJGSWzX6euA4C1P2iWsLeXZHTJpGbyuMyoVYnWFSFxYzWhCH8k3LrhaknYqsN28FQRv",
  "key13": "5JQhNNYnkaMYyd4Nov6wDPVCmCeztS6TNmTuVoS2hR2YpZMsS74hrpbEH9GtMbVcDj7WL9Y5dPW8zFmpPCMqbpv6",
  "key14": "cDMMzQZ9QKn35MpaEzXnt95KBAvwPNhvYdof8bx81xrFFcaSRNbmmz5Acb7CEZB5aqcFLrmZtvLddEQAknKidpR",
  "key15": "3VeJCrwi4TPEmYGwoa3n4BVYT9TsNpxaw1BGWBti9thusBkSU8twg1DU2ENqdV2JHhbQPBzu34SQZ79ioAGCKysg",
  "key16": "kVSqdYUn3RPETuJqpYYsXZH8HJ2AcR875rV4TAbJSQDxBofswUSSF7DdqHPmUBdV1nMZz8W7qQKL9Kt4WtX58y3",
  "key17": "5yqAdKSu65bqY1jBjrPoSsVRt21teWeFdn7oV6LfrEdkZ7A7PNZULFJCoPyiYkSwLSDcdxLJdPPoABVasguvaLwW",
  "key18": "4dJJHmgJy48VHhKRAmWVTrENbfhxWEkP3ahVawnMM1K3k4oPGDQ5QCeoKVSrEYU4BxPUSpsxBDir5MWYXg93Sp5P",
  "key19": "4DjGvoFhnwZDtbjxZUJXqq66N6Jk1BHBckaSgnUqLu59Fz6dwG9oRdzzUdsCPmV5wzSKZyczcvbaLxQJsKto7PNW",
  "key20": "3Hqv5RKhqCEEmpmEbdDRnkUyKPnCornPCpTwpPTct2H5nfNrmMouinEz7Tv1wxiCReVQ4dbfSAEB1hutNJcNJcs6",
  "key21": "3G2rHMbwF6FF6gkZjmJ8gBBFvxHsWdkD5V1oMpqizuZMYNYfiRseTaypRFqQS8C5zDuDs6YvmvSZTuP7cqzPCayA",
  "key22": "2L5rNvhNpY623u3B9YyPyMXbcNDESAt22FSJpXioEg12kDNcQtzexFazwQ6Ye3XY68ufNNbSyy5DPzYWCW5r7ASk",
  "key23": "njURJspZDFXkiMy7DjYjdugYCkoo3XEnDkRGhiXLkVCVhwD53vdtswgxzCrQ1mgJq7LPAHUDpGAMdRXmrgMGK8B",
  "key24": "49YJKprAD9Ya9aQ7x2NbJj38PH853rqp475SkyvpEyHKNyb8GTXd6zYwCmNQQZgbWxVjgtKpWYxPFsF5NsJQJLfg",
  "key25": "n6tH7sYPR5BQVSBEqxcLfYy1QEsDequXG2BQbep9eD3EkHTQDJU4xDxAG5vYxeW1pegYSLxk4iUVWMaKDsnmkrw",
  "key26": "3SUXaveiXKkxQM8YDhoDEEjxWL7ugerGmYTXwAXmZHC4DnogdHdNdaHeco5MhDHRehGjA3G1ESPvS3XD18kCbaFi",
  "key27": "BZdUfQd1My9GNLp74frFNs31DykVSigDqee9qPz2NS62UNNcXFzPu3NfsRwSneRk1VjxGTpfM4NsmaKwAiw8dK6",
  "key28": "3CJseZXjEYPHivw7H4SPg3EhLFUiXnWqtu8SybTdRr6aV9vCHHwkgAQvQ872tg1jafxCFY4iVXFinJpv9bTvksH8",
  "key29": "3rsEW2PRkXEGMaPMxVad1EW6kHLjAyX5ya8N3hm5RC8z3RmsNFcBnBGMNCDuHt5ppjccypDTvmESnKP5oD4TdpT9",
  "key30": "3X6hyZU2AwoiKDXLAvSU6md7auF2k9ifLLFTEtPYUpQ4LcFpW3eFwYZJ3cCQhRY1ZEP8R9EJtncDfvqv7okaAHSG",
  "key31": "4zNVDPiW1wdGLBZPPCT62L2Pu1xePik4uzPJRuQ2P2fWUd6iGVxUDVAdUbZMXFiX5avkPv3v2UNm27jonHkR6USh",
  "key32": "3NPzL3PHpwLDWKU4VziEyKSGDSKwxPdQJaG4PEdoTW1q8QcUB4gJrKPWV7DcWjnWXuQPhWjdFRaDu34WKjsWMM8T"
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
