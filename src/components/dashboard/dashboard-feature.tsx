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
    "jyK7JSUwm6pHPLrEK1mJji8X19Tnp4jspsRtzHw3z5kuLERjZQDZYYPA5qh6vwLdpMZxHfV83Xr3fxoDBPbsMXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uNC2hvhnUdLgpZfAjVejA1XK6pyapZCZEMvTcbwpBJoWSCt6piRiUMARxho8JwD1a3LaNu3doHj2GbcyqZ8ubha",
  "key1": "2eLCS1uWbLhyxsKnRp2FYFEtfDavgePTV93oD2sUMUbthZMn1D6Kj96kTauyhe8ZTPtwXm3F3bvRPkfMamoLcKDG",
  "key2": "NCxnm5xrndfwDzD3y2NiF61VMBPiBy4kGigTw14jphj2fp6ycz1g97kQrZ1kvxSxGvjvZNfssAw2NKR5CEdGiVi",
  "key3": "3fmdmf6gicyX8Z6CMq9LP9xdR9rb8dDkdLCDhQq6FzsncxdLWq4LNr9R9DTzZAigwwzKN33NUKnSBBSLiRoVTsE9",
  "key4": "4CAAVWZvWn7J8qoWXp1VGj5vAwMkfjFEGnqPNBVrH3bxtqstnER5vjLbdtSSW8QzTCBJ8Msww5pGVAPei3kAqieR",
  "key5": "22me4hFjDMYRPQH3LpCC2Jpe2ep5WzMrq7iaZwcivQTymNVFStiVQWRESqPsUuWUN81mmG8RFsgcJcmfjZEpLGCb",
  "key6": "3BEyXHH4APegPmtqBce5aH3uPY349DvpaGkafNrWsNSktBaUi7EbFuXXdUcb9ULG61yLRz3QMrZLFHhti9g6HYeP",
  "key7": "5d6V9aPHb2BAiJqmXuBxCgYcFCfMZELsDbKzEYb25xDUTatXBC6o7EbXsaDHzPjRefvVai1drWJTm4Ft7ery4HT",
  "key8": "2mM85Zi19TY9DkX27iRxhG4Y5pqyPqH2bpm9whRM2NskDBVm4LLqNqng65yVGXrkqcMBqFQwJ7qLFbR2dL4NfVSu",
  "key9": "Q7Nd7FKCwk7sig1KpLSNQ4pxDePhgeyk5HaqTQopVmu7J7bmzQKPiJ77Rr8nRobsM71LsRTJxMFmewEdyEnduAP",
  "key10": "Ri1tsCVYJekqBhtEC7L5dSLBqTyYRZpxnitLcBFidy6aeeEgndrTJ2adMN44NozNDmzj7o6YLmKRpi7TQdLSp43",
  "key11": "cvq2btw4ciqVzCQ4m1KJbqoRnLwtJrAibtE8EjkKCkeRtsPVjBDqBgzzNiUKDdJ8SGzZ2z9TSnR3JKLCmYNGHKw",
  "key12": "N13kesXCBqHBx1A1nAYab4wwTsQjh2RXmyTjTf6rCaNPA8soRKrnu2F25jYjMHfh2CLfQVSFza1UEW5HjZ6ERVm",
  "key13": "2kdbz3oAqFMa5bv4zZMNnGw4v4z12tWc9hnzb76uGoDhFE8Phhu12vWdhZhgqKZECsCVTvbwow4awHz85YEStbj5",
  "key14": "5hZZYh61Jz1oSbyBjDdrQW8H4uALgr17vLfyr4p5hg6Moy1DtfhYfV3N9R71h37TfM86zZCqmnT3iAANtFrNQVra",
  "key15": "3ZoBmfpMNnG3LYK9HrHhiKy1dUpSFNhLiCGiaGzTMi3DPtS5oTfvobYu5mqJMS65xQS997DryVkciPsyG1TvMjZU",
  "key16": "1tX4W69b1W9ieUqtvNsdaPgqBLdr5YX44iCB1fHDhgzKtFCXkHobDiZN2ejDLnzF1JqJpFQ1hgsAzKKKF9idxyN",
  "key17": "yzEWCa4WiE5pXj17w6cQq4gHj9SWTx9rGXT9xKoVnU52AhNTXQb6HMZoPmmMyCAWVRWPX79zm6zqoTqFJxEinfk",
  "key18": "5ZFJPvgcekUK4Rrun6Y1q1LGAYDzbwyiPmBMoKZowfVTo2aktZYaXbrY7qk4638yBgpeQ16tDAPD9gANWL2n5im5",
  "key19": "4Arb3BJYF1YU4aeUCpRMMNZZhKRzXkS1AyPv5JyuYU8snNRH6pZtCLPrDgyESeVjEcNF33JvWhcAVFNV7CS3Q76b",
  "key20": "DZk48i6Rjd5yuxTZ72EYkxRiZRaGzzcgN6WUKToHQ4s6iZGgywL4cbzZBey8ke4AYKRXavn6D8YLXm27iSQKi8Z",
  "key21": "U7hmCq8b4wPHWHNKRfaUiSzc7h4WdfC9SYbHrFJMxZgatVs5wge94HsVnDfYMRM6Gmk3GjDfpDm159VVefcoYyc",
  "key22": "2TechdsexyotG7hZCzJ9zJ99zpPA92LMpJ8CgXfbeisazT4G3oq9E2khBc2Z4vpD1Snnx9wa7AaVHCGGG3Z7AWvq",
  "key23": "3XCwDsLdhfDCMZH3CuZEJPPUPhP5g2W8beWeeZ49E6439JhSWwVcPJTwTK2MRvBD9ZvP4VWL69pViGH1yBynS96a",
  "key24": "KnFhkpzTVNq5oQkBJmstvmDVDFQnccKQ3uGjcSZHgsCU1BjLjPaGhQwG6Niz3xZ3wx9wWanxy8r6uV55hvW7Khc",
  "key25": "5fQv6tMS6pp5NvKoAUFXpUAgPSzfFonBGpktsXsbXd9XWXfB4RgTNMkuZVj8bteH311BfRuMS2sZs4azSmX4Xg2a",
  "key26": "4uLvXicWbcYMNgAthuFQSa2jsZ4w9tB7YuqBrs5aZE8vJMQysGbMVasGo2GNnn3YRJPfVHPVW82pWyH8KH1NpyB4",
  "key27": "3FV232smuUq4somZHkGYqHeoAtmVBhWsNprbzidipA4nZjKSRkvqsD41TonJT3wVJweJLoC7fDd4huQo42yy7wKe",
  "key28": "5SzVNNmc1fqYQGx5nWyrurAdDNvrV6wo7Mm9bkTo3LX49eB1jrWZMpLzKag7ic6uVHHD9SfejBQ8h9coctR1smDP",
  "key29": "5XBUWjscy8bc7YjdUpmJ61cFGhomdR1RHMZEowxvB4Wsz8YsgdmyBbqwHYrLBSyybdE5ZwkLTRCUUzcGPLfUW5JN",
  "key30": "VUmni8qPa8q54MA2g4BETwoUtTz1iysLEUj9Bc5sjjkQDsDavAcpFPXXpf2yDr1WSmWBefstTMGtxwNKjL54p3s",
  "key31": "5LPZ4YS8cLjUmBRP9GQWSv2WKS7ZozYcp5bxqhqakR8A5BWZBWYzjYdsQPF9FRjKbaYFSPGmxPjE9RpwJhPm4DgD",
  "key32": "4iXx9vdbdYUiQcaKGNbJNEz82Ch1MKkpC8VqeNXXPqxZkr4k961eB3vBccMAESXodRuRhHupcJ7JwKdxxrZMWSbo",
  "key33": "NsXu3fn58UACc5bbZbWudzpUdW7tyF56TAvVs3Mi1fRQd2eAF5pKUiEnnJLWJFsEz5n91zjKshHs8AVdUyromHo",
  "key34": "37thP1RaRUcYTfzRnizsgtdpdaDtHX8HDZxjeTSJ8cbbfXKiZAazbxfF2iwKRRKbZ66r5hDhZ1TfTDuSUWnicphy",
  "key35": "2JmLHD6zHcmNDKWmsiqH22HXbhWNBpp7SbFoFabJDiy8kWFTr7Pc2JL9wBNwzvRGb6iq6y1nerN9GknvWUnfdwq7",
  "key36": "2jELBBRCAa1QyUbTG1HPczRWgmp7cbzHXQ51hXNwJCZH4mgKEJc4ASTztwCPf5sZGYUyyzashLAuZWLQXAKUA4vV",
  "key37": "5ZZ2YwXL69sBeerupzPLSvwuw6FgmArfum1TRTPKMoQ7QBzp6vW1R7Pmo8xUvmxkyiSLcaowP7oF2RTXvNF8WwH6",
  "key38": "2ofKLNyBgs4nGvdf5sn5MSsCMWRAefq6kVRGusSgw45VM6w1Vp6DSNFfJLXWVS2o8rBUaRruVmqALRCaMWxuJtSp",
  "key39": "5SKVV5q7m1BPhFyAWxQ6DM1LJCNiLCTagCwYYrnwVFv3pRFAgPiGu5A1WnpVn2WtqUFBrnm58aMt7P1gd7GNjHAH",
  "key40": "4wkf9vRwMJ1SZgPYTRv7zjYx3ntiwC6dPG2dGUGKtAdV8XBJQNPZksUUSZxTFXJ5BFJaYoETyt7BA4oht6GQcqYU",
  "key41": "2Zj8i2U3QLpciidDHFB6ycXG2emTLQhNM1cfmV9vmRTWfc1btnCBJd3w4g6uEbDpvaQvdmkaNAAej7X6fQjJNpDF"
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
