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
    "32mnAe289H74qobgTSTYMd2QvZJV6rxHFn9TR7BYwGN7HUt8cfXa82mvsNYRjqnz1QP1ah139xBgQVEtMLhik95x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2om7uG6AUaHuAMp12h75cS5nGF55WiB9YmS4jhbDnQCThBVGsmrWozphTJs5hgNj1eZ2uWcA3x1Kp7RBcqqqbC6s",
  "key1": "4pkPEBEKdXKvohSSGPq2Nb77iBcTeELTHYLyx1BkRgpBLkbcGcHeMN4Ua5BenNWfK7u13xpaQYqtWvyMtxAYcNJW",
  "key2": "3PXaeCB6zZXHHgx5yGRSSbNxjZJGxtC1KfjXLhQheTFHpAK8UrajVuRSJ4nKac8jSndqKnUtZY4PSqEYzHyot7TP",
  "key3": "N5AERT1r1TmwFKfZzxLvJBuGjvMWfcPy7kpYc37R3fomXwcnJk2oPwFgKb1RBqGjNm63ZNLQ8ewsrom8qJ2vsNw",
  "key4": "5YTrvCP9ocXnWMNdDrC5D2R2gg3GPVrV6C4TTgPUCSKHBQoUwU5UbUYHc94RMKMEDxJaQE8h6JQJ7JpbcDaPSxRW",
  "key5": "5cR157P7fVUZ3uMr3C86hP4tG9LnqsWk5QdCJiV5g2Mpba23eEEqWqKdyKgxbAaqsgSpcdv37A4r9hxExztHofg3",
  "key6": "65DaNjQYrqi3U15mu1XyizAHuL8rhLmb463HxQf8Qqob8Mw6Ndm3aVmF11bJmwC1ak7BxwM3QtrFpbfRNCxPXi83",
  "key7": "m3aqERAwNxptXzX9N9N2v79XAD4Saypax7YU6wxSzbfwvwpU5rYCFddneRFnP9VPy1yk4rTtKuNwbEqptNCkcrU",
  "key8": "4GrPeMQHUhprNv6x23CJopQU4zSNJWvqsutsEvX9AyxAUcA7gWc4jk7ZMbGeLKU8eFjGHCWMWyZ12Xzg9GuEtzsL",
  "key9": "5m2ih6iCduK93tUWaVRLh1PksmuwSmjpZRUB4iiLYkspkQXN9XjP9gWASZYMLa2dUXLu3dnkKe9xFRYcZuubfYrn",
  "key10": "2MsMWNZG1XnV9kDLkcQmKufDGw823fGV54KXPTf3FE356BwYTqjHPqg7AKZPpc6mTZDMNstaixydB7qAdQi7dbi7",
  "key11": "5YTw4tJXBVy9vfhVYL7KJ76XmKFU28svxs11Qxk6zCimdHxePADi9GpecdfbQ1Mw7u9CfJqK12yJ2AKVo3kCYkGN",
  "key12": "48KwC7kZp4Kbjd6yKKDkWHA4LZv918d3Smt9eg1HNJeuAi5eYy7h3a4aMqBZx38iCFBJPHrXPt64DxQ2bFiRnLeE",
  "key13": "3hz7hVMQr5ghUZK3esKJzTF4PayYAGzZBaz7uMzqxV5tRYNpzr13ruZPNnnmReb45xN8rSDJ6KDKnecRUGBULJ2Y",
  "key14": "4f6sdd9k1vm18pmD79DoD9DQyyJG4Ht65FzECm3pPmKoUFjqwN8QuagwE64nTySZJnCNTBpMh62JrbcjJrEDifmb",
  "key15": "3VQux7aFMs8g8kjKTBMwVnd8bJ8HfaNDqxG6k2BPyTwnhWYXfCWNjsYJCoERxsB98HG79j2zwxdJ28VXmTzheHWE",
  "key16": "yQ7NZU1wvno23oWMLvzXDKiuVAAKRR3iXkKmeyDUGZkPA3Crx2WCWS7vo9A3brcSVp3wok5ct8oxJkBwKWG7LJL",
  "key17": "2f9nF4ry96MX3oVQAngaAkEEyvmeBw2MeqyerVvMjvbhrTHSBLDAjGNUsGo57Cmx3Qxi6tjxWtGtUEFD9CTKde1H",
  "key18": "3xk7PehFEecBnz3kZKbcssurFBfjUvrqGQE97iUm9f453tFtbv1EmhLZpCh2oYqRkfxzBAbf314mmL368ZzkxH9A",
  "key19": "57n3bjB2VRXMkG2BFSA3S3Ct3G4FzHWeFr1TSiadEnH9i26L8XJpbRiMCLXbeCBnqpwfgpMTkR8PE5CJCK4yH6Ri",
  "key20": "3qtE3aXEipwbzb3tQdT9Nd3te4MsNmaQXhSisTvHHngJZfneffyPp9qZUP9L2QTy8mT5MdJNdR8t1miJSjvFWRCi",
  "key21": "4i7sDxX36TC4A67E69CRB61r5aovXkPN66SQkjpdJFt9KAKVnJBdo3A2REiw4z2tXhute7ix6otTgU2tTF9yBPr2",
  "key22": "4DgiG9im3ognTdnobyXaf4Jm693QEuPz673mRE3GEYegg32145zVmHEP2jEHW6KH3gx3hhbSQMmSaWYyXV4jhSaf",
  "key23": "5hYAJ3D43D7KT33f9VsxFupwhnRrHA2Z2QDCzUL5P7XtA1YkCR72ArhRGGDcwWsxBhwohVbDq1wEYLTWHzZSutjK",
  "key24": "4PwK1Dp7xMg5e9knRsP7RDD8UQhTiHUkqKjRp83b3a7UM6PVmyoHeZk5S1cE4yzXJWG955FJFo2RKnF9oxekM8Xs",
  "key25": "5pvi3GetePVWH3M3hVAFTESrrvRsa75HZDEpXqRGRHum9vUs9wydfRdEUgGvwgVBFHqNHa7np1BYYUxc8TcDdnnk",
  "key26": "4KZFEyAKBFLsjDAubXq9uxdb2WP55KtrzWAQkoTBM89fbzvP5b4webNsgedhUkXS3997XphjEoSrgbvMQ586ZFL3",
  "key27": "3w5QqHnpao7yKJ2GW6xPcqqedGqeNKuK7dac8CatAvVscd6Xt2sYSuynWJdxtwWE4ovPo46J9i4rbyRciecWoYyc",
  "key28": "J3tLXzqdRmmdAkLHm5pr869hKT3whc5qkeWz7uVXebhGDVM9PcetKQ9HrcXMdpjKaPsE15Tpd4tJXburCybhswi",
  "key29": "3M8W1Fhwj4xfK9WZUz1vcYUahYW1shArHZerRpPMR46daxDiCwquav74KZFD2LfhJwbKJHfkxLhqFrGuJeBsFJAw",
  "key30": "63RgfnShYAVW9t4rDSXasPbGYBBCUrFT6ae59Tox93hYygatswCrruVjAXSHoVJoSe6tdnkZpaL2VYLVePJwNpzG"
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
