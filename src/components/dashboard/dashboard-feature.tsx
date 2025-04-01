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
    "fB6yhVX7a71LspUU3nfP6EVtg1wMoNGYwQPjRiCm5EQxXfX7eLvMUKe3PPiTggHAwxiuvW3yoTkdPDointGS3e2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36jYZ629TDm9KTZNpWj4fGsx55kLFjpj2kwwJxdxfYfE7tQbWeqjYmUeJ7zJnkU47RhWJRU7ZzEamRvm8nU7uyFt",
  "key1": "3evo42PyyhrNEFBz1i3dmFCH15BHv1b14M3E52oSWRF1m6jm4RxrysHoXEzDrxwUqBWYaXUhySMXpA8MQehidWMJ",
  "key2": "Br1Y8g7kL6wQbmMs3FeRioNBjiuxaFro22oBE6Un3U1V1jZcanK8ghXZkte64sRLMzxBT2Sv7AMwmDFA7sYYGgF",
  "key3": "SwHCTnrD4iYgA6UE1uuqWzjVR3fkL2TLteRJgxPypFyAWLUExGGPZS8zXBsV7a6s3hTwLtRaQQnKAodfTxvGTT3",
  "key4": "tv5ytTdTa8VAaDzc2GUfyPHRmEk3vehyZCiZZLE7XqKpdxPfgVaGLo16GQDGhF5usaDvz1ECu6kTiNuMrworVU4",
  "key5": "4htnF1opKuDS5LbDgrMB1ZJHDo3At33CaxQDHsVUzXP1wJjY7Ax2JiBZrmJGn3tPyz4iUkAxBtLxtxALoVUJW2yN",
  "key6": "4QcRuU9ebdQLfm4zSXGzcfrFdCtnSaghLv2ZGMtimnbjmzkF9koirwJFyJRj7ZdD8qnhLjrd8j7tM2RKZedam6uw",
  "key7": "2PzHE3j9dNBwuXndH2ehEEbuUHcz5Dbnvwt3NmvSe17w46KjW24wzvakdSfkXRbTB5anizbXZghkbuHWzKRiE4zJ",
  "key8": "RdgR6yjAkFTEafpim97REoVXWky1JcSqWiEGX5eTE8wwFJmP6rec4ehBNt7yjQ1rAKvj2Pq4n33ngrzqmg3i3k5",
  "key9": "3G5zuQV3VqXHguTsaBjuteebGLNqRSBgojpgPLnUL9KYb3MwCmLzQCRbADWwLv8byC8Va4F92J7kqNWiDqascMWe",
  "key10": "4E7NzkBLkXVP9TrUDAqJN8WpXPwRmMkjYczHz2uLpFc84J6YATbCjYANU5gunp61tGkGc8WhmCpE1sVi2KAujihz",
  "key11": "5CJZ6GBuA7VjBFVL6LtW1kj6ZbaUc8K5h65BvBnDiEyMLUUV8TTKMypXE6d5eyZpzWRbB3cTGhhxCJxPBciCbaR1",
  "key12": "62nqqeupor8yAcqZuRvLbMg6Gd848vEMsbRJv5eJYYfpTqGxqka8CUL4mkuCqtnNhqTjuwPxf1fqf95QQsoMfb6c",
  "key13": "3T4oiXR7M5fTxxyPZjsUv1i5B5rwTVf8q41oVpxFvcoVamRwPHHp3Q7LcCQo6yhtjAj3XtjwBGwgozEFUjvcLGLr",
  "key14": "3Li5V4vtiTxoC752WkKu3cQjpufKc4pvwZ3cxazNGToH8se73YkKtt3YvdJWH1mh2PAaKkNUxBVfyzTPY3XBzyLH",
  "key15": "5X9EhcWPuCqAGsqFG1Gi6Xnz6eef37EVow8rvaJHm1cuRy2vw9bGCFj6qNCChfS58ixZJB9VDFmdYm81MfvtFrA3",
  "key16": "4mAN6JZMmyWhUdzxKgETsNMnsHJoTrrn2nGD3BRC2HvnhNSJxAWq4WwSdpewVv8A9xvNb8NYWws4nBmmqYTWvMs1",
  "key17": "4wxndbFhasi9rBo2J3JzbZCZez4NGwK6wnDYBkV8hbX2WWB9C42vuLsUXG2JhwpUq5YAfAQHcDBZVKYAKR9yUazC",
  "key18": "PBCBRp26EUCruWKthrmmdY96ukMKNxfqvTdS7jwRusvaJ9BfVxo87SBuPBwJ3gaddP6Vcr3CYZR1X8Vbj3UCYLE",
  "key19": "3tsH93qGqKsCtHXccpH6cdedKxoE2Gnc8LjrD1aYh1oEoj7mGcapZEeT9hjmjyyq1byPkba3QSXPLFJngRxhEZrK",
  "key20": "4qk9XafwRnmY3qU1ZDQoTUPro6Gv7JJzdzLm9ATAHssJcyNjX2wm9LN8gzR81Q9ri8Sn4CveghiFhD3KXzcigEc6",
  "key21": "2d9ijByDeXSQQMNffghL2zZBfg5QzkNaoedNee4Y83NUxV1eij5s51VZDv3snmmBoTbsotPCcTnTX8Sz7qqrxnPV",
  "key22": "XZpzWCvnY6Li9WNXpD6Vgsnr8XZbHBBybWYvHuxNR3m6QQTrJj1CfUrB88uNHHnxsRYd4uBgr2M7eGB2h4UVoHm",
  "key23": "63yryB1F37dN6qFwXoweqANtPX429WmrYptenhpVJ9RXwWNqH5W7iPzYZdnQnSbWmUpmp59nDve6uFRMwhY5uQNt",
  "key24": "3VrDxEKYY1AXhSjZaqq8A1DX7e9U54Jyj833RKXPZUjxT4ztDGwxbwcKpG864uNxuAtx5gCSsiYepXGyCrm5TjLW",
  "key25": "2XPZgwpPZSpsN6SYNseJAiFLbXowaUPcAXK3pmSwk7i9UdeR5SWJ1KnGMCLZJjxtVB5ADFAMVX7x8JFiYRRVWk4G",
  "key26": "5qGw3xdYxJzdjunSjPruLCkEVVrw6bsQq3A9k6tFZs6y129pPW6vcAP23118yiS7WPnX9hevS7jaRdjamX9gjgPX",
  "key27": "2wF3Qg5AzNpTqUdGqYimPADHCvqvHCxf1swvqd1SZzuiBbnBbqKZsmYXpzz9uk4broTwxfmJoxe1QMu6HeHkR1jw",
  "key28": "EiPXcyXr6pBCCue4Thn8ofmYqdBwJzCEGpa2z9CcB5ciRtHosxbQ3bfAm8RosynpG98LUP3rLeBVAw8iTSwL6bf",
  "key29": "45dCRbJ3eFrH95NqGf1fbyWMmpyEUrYbdeDLr54AjSinv78qEL6GqVcfaYdMashF4Wqs67KECnPWk2CW8iGfXZsH",
  "key30": "2LCZKmu4KwL59CRv2s8TE872PDNzg5956NVqj3XrUeA9598gbyFmLwmiT9Ku7r7LGi21EtvK7SYjgrXVgTk9FQSC",
  "key31": "34EX7cim2AnxCJqNJhy1XT941nkyVeg7qUGRBnDHwA8cNeZ5KnXjtVX2RK7aAb5ZJdMpCmqbf9KBhp1yW6BK6nbA",
  "key32": "3Xrcx5dhTs9S7iTL11WbteDBddEHCQpignBdEfV1JK4APZzNrC5KmTNrjF6aNAmXZbzMyAWJNMHyMBwHwCM4h41U",
  "key33": "3gT1Y7mt94qSHreHKhN3m6BjuKgxEeyW4Lt36UERNNXrUf9Ek6UHWNqu3htze3F82TUMuhoM3D7JXfu6cGGgbDQ1",
  "key34": "2Fg1a8hgc91yRuytecZAGmXcZzMTJAj8G2qdJb4Z8W1N8BWXBfEV1dvReXtZGZ4WvTCaPnsVzKW4f3jdV1XCi4J5",
  "key35": "4bawrHr9SySY4QFUFV1ELnxqXhoA4LvsDjyXmgFcTrfLzsKstvjjuPZ9BwgEy4ku1j33yp5Pd2ywSjy2M8qWFH57",
  "key36": "2KGSEDfxfdFoH4okpuWS4qixCX4qAJ5hK8TVfjhGHreiUZ8LjXjqcHotZ2DHHnP7vGrC5ogxfawQvAx3ysg77WsH",
  "key37": "4gzQvTqGe82KXWTmButrt3K7ofy6GGqQKBoKwWJ7MBRRs3iRx26pPH3KKRHdYfBJFweukM9UrGGNWVbKXhFb2uzY",
  "key38": "2sE4SVCyV2iSZET3TE5fAAWVEP9hxYhEDP7rbKnHogRKZhyJKfzKgyN2pJ5meMBg3vujECo5epHSJw4Zu1QLzw1c",
  "key39": "25L9UfTdzumgMiFKr5VUpMQch69JUfp461HRvsfUPRWF5E1vSMLsWqvk5AQbekLmmppNpMZsar1s6Y9mgwyXHpm9",
  "key40": "iMXiQqbE661czpt48fiPjJQcyyrRw2kqLbdXSKU8NpaoPsqYFShCVHpHDL3Qx8X2KMBmW5Rtf93MKUJTUKXcfPr",
  "key41": "3auUXDTTTGaoMqW82HmM1kKmf5C7xHdzaaTuzxf76Hic4MbGWZfyFbSZUQk9MHXZcChtWB7sUa27mzNAs4bNxhqD",
  "key42": "5a9p1B9pqhLEM3L629bz6yKwhz2uHZZ8TnqikuFhfrXG4xsGT5nwuWvx5u1MN687MRnL5ThAd7UPSq1qtgipq3d8",
  "key43": "1L8btH9MMjgvJcuqM2rtAU31uNPosZrc6zQz5BFXFcgxzQDsLKrAwzZBsuvdqSPyPySG2DG4sSMXDq1KMYR7PAx",
  "key44": "3TgVbWmWFoYMDAZC96QLCbBnMD9B1MNSRG5DBzuuKD1tbyDHbveWENRMHrMyUD6pJVPht3fRHCAMv9WMufmFeMaG",
  "key45": "8RVitUdjGAGJMCJ5djeoL7D7ZpTXnPvJxFBJ14jPdjRP4QahkJUmK6V8VZMSEuj9nQMhuoWTeU8zrNBtNNo6CcP",
  "key46": "2gtxW1skR6VtsNgfch2oeWyEVNm1hffiNpEgyLwRJvfjYP4x8Fi56NK9u3CFXhM8Cejn3bBeCdeaQ9djfHMmKcuJ",
  "key47": "2HuCZHbfKPtwFz8ogy1BWfswL39d2RwjLufx1pBQFU4Ei7TfQSvHBMoV7wuvHMtnNX1aPNPBGiTxRGnHtVffYtDb",
  "key48": "37of7EwCU3vkW6TPt4DBModXsZryw5aPoHdomtD186SgS82W5i1h9zKGRtr1YF85NNTx59pfkbPCtCvEoGtys3fp"
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
