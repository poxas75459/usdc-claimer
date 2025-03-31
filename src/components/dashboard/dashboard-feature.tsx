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
    "5Wz6bEgvHWks7cPwyawwbeRdE8nKYpjKVnCSiq9xDazBTT4ZH3b7U8zaoZuM72VQyN5qMw5BqEt8NuM5y5hDfRnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yPFg4iqPY6CpqSG8uwE82XqnvjcC1j1MNpKmoXcCY8tH5CzxDscm7j2ZoyDtrbDUJPAEakaeE1nV1NKsHY2vJDa",
  "key1": "3JzzHhrSmjtkeqBkHrKg2YSS9yMsAxkQ1g8qqbeNVZfsm7LizPB18pke1eaJribk4FjJALVqL9dMXSCNNJZbmRxH",
  "key2": "3KUSctugWagCgQ6X3LUcieAMKRgzHHthTXEEYEiMwbcbdPu4dcJRV9aPQySim8UJH6wVq1LAmaM9g1SaU1T4VQQD",
  "key3": "5K4QmfphwCoFHHGVaPhj6pVHtTCWNVbRvy7vEC4NruSiPj9yZmaXhWuJhwSGZptUAPbzqC2y4MpdwTnX9FGsbXam",
  "key4": "4QmC2GXizWK5s6v4jkuyTEiGS2KAPuGrr8bzwnk4sL5zh4HYvZ9bLk369qg665u8jvPkYZwSboo4kZM6M33nu86H",
  "key5": "1Ha99aj3J2T5yerKoAs7UbZKqXN9djnQejVpYHef8DVYJLa6syS9NqkFbqATX2GzUpgy8FB1mmDpYTi45sHdNBJ",
  "key6": "pNY9iWwHc1fHnG5MezmJ9kbszxKpWAKZKvhJmKv58pJgk8Q3XCvqHDMpBUgiUT4CVtGvqTMEKEbh7X7ELDm5XQu",
  "key7": "ycLZLABbuGJ7mvH1RYHgBbz9yWk1Rv5Xvq9qCAGKqKZzvJrz3nfgCzfJnSWNqDav75Zo2fUaZ9PbqqDRpFca1ji",
  "key8": "2VDRd2cibNCJjMKwCRENRKrnMMmfdsfMC9bUDXuxr1NHdnYZYJpiuJPN1ayfhpxcLKVW1u2PTLZ28wv2iuMhTtQJ",
  "key9": "2V2CKuVoc7yWsG1TMpYX32FaKtTybzufrkfJHMnW2db5CJyDZtreFYwfj7vQ3dJCYhuSk6jtYSUKTqnhsnUw6c81",
  "key10": "56vKwPCzWqihqxn93pJyuqYjj994HrmxFB2y4wM8JaYqHNXPMmw7JVJXE2NMZp2chbFUqQVKjBujEwKvaYYUFjMj",
  "key11": "5Mzx4usza47fXfewepHz9odZwe9fJyrVKBYV87bFVi7Bu81nMJtXD9MEA2KziTknsxtxeFiftKFUjnafNQtNX8j",
  "key12": "46R7TBHyGoz3Dcx713a1jeVa91D6AHp3QUZ3ZTAfgwJdZ23Gp5KX5pf1kJyuoPHrnYxJWE57wSVKTrTDEdEDfbjw",
  "key13": "5xvn7ia2SbZLTHx435m3coLdwyddDVZFn5vNuGA4DJTjv31Px8MbJrZrgDmSfhjFURLqzja6cgBkxf4zQoFBhnp1",
  "key14": "5FobkLg939P8Jzp6jjRKpW6wfYLYG36G4jR8d3aPPS4vQ7W6GxaSPjNQujtEtshQRX1sdYtU2yhxEo3b7SLszUTG",
  "key15": "5wUi7zsagWsoJLtEE4PM5NVqbDTJccnFgk1DN21Mv5YXoQh7NNvBX8yRuTiAwoBaz9MWPzTHGhcne18VCFqeGY5N",
  "key16": "GsWwRzpAWsCA5o7oT9spQYqufZtc4KXqSj6mvHYVuNUS3M898J5fzAuD44BEQYdTQcpNJtfqnXMQA8d2pQtNYSw",
  "key17": "5hzavGxcMDXHMkPHpTsYwjT9wWYbwqW74YfhsSzyPvr5JWUf9X1XsuMkX1syqXxKkKmFmhC8KC55Ue6ip6xnTKH7",
  "key18": "2JEBfgy1cuR7upceWj7UHm8W4Y7QPMnq2EeVSVLNtndFqucLEDC5DyjvpRKpRZ8mj2Mz4YZVq86KsXP3wqu4CaDh",
  "key19": "25m6cDtpSHvPc5bifzztPhqKXLFqA6dskni4JU2Wnipxy1h7tWQUUcDx9Cf2tYETu1n1e8Ad7PmqwpPyG6T2Hxbr",
  "key20": "dXw4iu9TSWfqBu7GWhmZDbnMdP9Vn1uXK6dyn5doJgcTThDPjLadQHNUHaVNSe894AZ19rDcqtqTkq5KDANKvim",
  "key21": "NwqN8Wxe11AjUAoaqcKffK8NuMiNSffEMXGsJkVPw4p1RAamUhQFg3ToA66FFurqZQXw5HyKqUbTB6b5277r1HK",
  "key22": "2HgFyWvpvF2JwJVoQkM8iNowrvjWtG9rwSMKrJdMXf1aGsgJku4piMGSKVTC2MnDV7dbh2pdfeFvMEcauGwe3bwK",
  "key23": "eSsPRK3Do9SqtywWLWmTHHgAGUHEjxmfPiux5jHUQumHR2khdNE1wux7AbB1i5d3otfa5fFEPVs5YG7rDNiP8bj",
  "key24": "5feM1oq92uPRqTVHig1RRHXnPUEw5Kgn4fcBvyxGR4oRnRwdTkYszgs5d4VbUKm1ZqKLvKCyvLP8oikL1oRqXaDZ",
  "key25": "5AXWLyTmguWoQEtCtnt9U4Kjw8WgSF61VNqttECAbiRLit7G7M3CjNRSWsXyNgNKKaMYiRnBy686mWXnfgLHY131",
  "key26": "5XN47Mq1Br9LJBpFmyJes2nyXxQVyRocJXLnM6zjLk5czpQT4sndzhJ8i1mM75kM8xhjzNJuwYMCQ9BvapfAXrj6",
  "key27": "3sZ1zokUCEkh5mWkuNzfoZndct3BwpP8UKtmUVdDkHvrf21L64izUbWpF22F1x357czwPXdwFtB4TgkLqqzt9umo",
  "key28": "46Z1Ro2TbkEetLaiBDAhc2h6MYkukgyzMcScksW6VGxQZjQwAoAvGw7yFpvVifgAc2PP4ym5j86cSUR5T68MFr9N",
  "key29": "uP9zq4hKtaaTXpnsa9Laz4UsckESqdLwegUh6poHZcxGzigDqWjXNFSxVZz5t3mB236AW64FjRuCQBkY3z1baFf",
  "key30": "2ph7bsLMrXf3FiF6fvDkZrPjPBpiqUh9pKxCRvbwa1JyJN1QMmPueJh4UMvVErSeagAsJ54epPnG5LcWd2SWApxF",
  "key31": "3WwKPBoBgzvdn47Gs8EbJxGuXJPwf2Q9HJgnVmuAwXB8B95jkQeAZymhixsBRTUdYHF19ipGnzbbddLWATgk4znm",
  "key32": "34NJbVJzUknAhhxpbJihTWufMNcT8LQRwC7EtHEX2hCnreiv6xtuTFkmZQZiHmUoe4q8U89SeCaYp1YXPeR5X6KS",
  "key33": "2v834sf6WcvKfxxhyzLu2FqLSwb3MNneqLqpt9ktUV6BafKAf1PvSm4dc4jjX4FMgvYrEnbeSGjz26W5wXefiDck",
  "key34": "Vws1moSy6Xfgqzsgy98LV7M4JX72CMaTn4k6Mj7rA91KEEWmfaTqwXxm33kuoy3qQySxn2JNHMi9hP6q9v6XYy1",
  "key35": "2g8vz82pJsn2UxpBL57QWjrce8t5sa6QnMWfuVGgkZGeQ3BWJjKYFBjybifxv8nQwbaXZbGcRDER1xxYAhLAryzY",
  "key36": "3Rbw5r5UEuc6FzgtmFejm2BWiUHNdeQkc26qooVrAfBfPRMSLqodC63N4xcmyn13BWLjMLNwetB3wMLbz7AUugxG",
  "key37": "2RooZ8ixUpNxL6q3xnb3vubixXMJxyRHVnK7fEyeJMtZetWkDqLq77q7S7A7d3eK9FU7CVzBFKLiAdRDJDuRFfbo",
  "key38": "32UeWr7nVZ6ho1cS2MXP2i7RWPW2BB2qichpZehvTo6V331d2nd5BHsxGw7NwdXJTkrQyuQGTwg6vsbp34BEogAn",
  "key39": "Aci2EbCDrpnJ4nL3rJpMBySrEcj6MAJeVE3K1mpS5X8rFszLszmZxE3KPX17YRR1Hpr2Fgtggx5yB2NUed1Zguv",
  "key40": "5MZ2GQiVH8fRzTDX2yqoDxqYyLAk5PREi35svrRFzwJgeLdMhgFghLjjaUHQh4NaQtawS1XdtYByuHczEb24YoMk",
  "key41": "4ztaHKuyusDm6XMNRZfBRrQ3sNUPEeB3MkK3oHzmCM9AbNTxN4NdLSNNQBhmnD4VKVd4aqGcVWFVKHeFVvxw17so",
  "key42": "5KoLuMTDhchzrn4NF2CqYrEoFha7D29DaLMgVPabatGxRxdgSr8cRLjPmJ2EUgTv8JiGJ7rwxbfxtE1r2WMm3kdq",
  "key43": "4y4ocJtRV87s1HSWgoKHM8LDjN9RJd6Z6xLCLddNFFV9WfGW3JvsXwYnNH9CeRPwtQC2cYm7SsVX7PxofZLZXTZD",
  "key44": "372ufuRiB11TGWiFQtqjkuWKks7LX1xbeK8pHoHeQ7fWtjZgeWAWKom2fvZTsoJ3PxSSMKsFaxAzenbn9JJ9Pb82"
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
