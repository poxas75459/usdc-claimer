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
    "2HQurnru3TqY1pX4qka49e2oYX17Puk1U7qYaQFvgjiei3NKLRZnUP2ec8K4WSRiJg1eaBSs4BAqUUC5aVEC3Ga4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fJYPsmByQdSMQQzvZE3suNQQYgjQLvY4PYQ3nGGRyjejN3jTLwVcK2Pns1DM61mYqY8HicHBBmGYULPaWS5Mybb",
  "key1": "5kQr5M3gRFJugdYVdBigBw4QzENgQVJADdNcpL3Z58i4vafqoHRgP9twdQAtjxVHULB2g1fL5xg91uTneV49hJyV",
  "key2": "4JEzP9qhLnmPZ8XWnx7SQye3xXEMfp4tEUmxiXUdpX9vnFN2Hp54DnZqbCt8QzSceVzFr24DyHZ9ibrhtgbEJz74",
  "key3": "5BsGomB97kZV5ebNC36MoQazzbZqyrz5xwrcwqrsL3AGCFXgAectbrxUfRw5jptHjWuk1h2wucCzWmq4S55EtiBM",
  "key4": "4sPg8BP9wx8wwGrxdGzQ2MCK1GYdYyXtmcoknyWMeSScRDSkAzPMtrFLCDhS72iJQ1HGLG97Md3h4DX2bJtVgc4R",
  "key5": "44iHYKq4PXUrCBJB5cbsZGWoXDhPp1NxxMizFHPt1dSChxZKVS6LEhMC9z69ZDNTLwUBX2voG3dcoN5CfaoGzPc9",
  "key6": "aQbTBcDa4reSaSoNWgosbfxiu1hx88R4cW5Fe7WfadFhpc9mK9K4qmYTZrD8URjJpFM5Eroa2zkgt1BMe6cJeNC",
  "key7": "3ao2AbEJWSkhJtNNnRCsBjVft7cVbUL4mkmoigufniviCaHGDEtfx1JFrSUFNR66tXHnKQ4U7je1khsDQag2jrpy",
  "key8": "ejZhprKAHg5gPM2p4KaZ8QxN18io8MoP1bHAv81ndwt3rfQJtCDZgbVN3GCP1rcJ8HhE7gJM6vFqPsS1JuceD4d",
  "key9": "3P8f1sHs64pXex9NtoJUdkamGhMFj1Q4xv1LiyS8WT7aLkYYdjAdenEvnE7KXDJn6bxP55CfnCm5n9N7AUjYcqZj",
  "key10": "2ZavF4hzA6P85kgC3GsjPyx8x96b2VDWvLmuw1yZNQ9VYugogvnwXXvWr9ZKJedE3T7D3iCJccjfbJ1ZzSgFprhR",
  "key11": "42u3WYgruTmvFmAewMr9KqzBaYzdQm7Xzr27UQrno1GRdESqHbzGFw1V1HBnuc5gYecjBrzfNE934LFA3XLMZDvs",
  "key12": "inyiRL3oaukmFo4rJTsyQjfaxcMtX8em9R4YMVuguBcoMv1iT2sQUUPQLCsMFSgs4ev745ppATXSvF3374QHyd4",
  "key13": "3UrE2MLjgqMKgodL9kNBWL6qvt9wSy2pZ6cGhfzaixrfFwR3XnjESzxLneYnUwUYMBeHp4fqFSHBpUwfnCaF5AFt",
  "key14": "4NwVVeLp8pjk1n5yhE4HgrXfMniAdPgCnTngyRjpAyYWY7HWCEyvZ9W525os4uSAguJLvv99rCoVdJjegRotZDdZ",
  "key15": "4DivX7sXQvoJV4sVgMTQwzptwFARHUckbZ4V7sbXGUYKtAaZP6qnABzgRB3JezCFpaSKFrSrNHsNLPR7EmU3tCpK",
  "key16": "3r6QAsU4jvP5wVpb68DeHL9FnC5UAL82KMcY634fpCsb11RpNvHwjabyxbSmkC7Vh15FLEAg4QMSXXLSxMFNgkfB",
  "key17": "PMKhq4CVcsvWExzciDxdy2hKiBiL3RrNqjacRJMAmnnAUggqBtiK57evnGsDZKiGj3SGV7d5Fcqk7pWMYDoqnFo",
  "key18": "59D8LLatgcHqdijLHVfK9m5Yjvko5pptQee2Zzh2oMXrZRT7mERDAS4iG75nycruUCKXSWMxxvmcMYuqxA4KezE9",
  "key19": "3HnvjY6jnpYBUNKvE2CceoKumeA4suizsi38AJFX6NpQVngZHTXJvP4SJaHhB8TyKfY94RVSZiyxAaTFEcDzA71P",
  "key20": "5ih9a1Ng7HwPoB48rpUDp4rznv87CEHvUk1PFBrx5UGw9HSJLuiqUHeZA2utbeMKVNmhivX1Qyw9PwHFqM8TJu49",
  "key21": "3H11pkRMT7M3pYLeduNMqL45GdiGQGAyoeXaQhDJ7TesvR7w4s6bFhQ1cWUfxUiQrXCpaVdvwvM4JQJ9tV6SHV3Q",
  "key22": "2NyVfAv8tPhihvePrYyTSF8kGUEbtS73tMDyPrFwp9ZcpZx6Hcdym8VTwHAXqXCd13HQ1ZKnpbS4ttQZxm91Cnu7",
  "key23": "5GfWuSiF669xTPpYukgzRn1jCLgDruAvnTAqCmXHA6quXdeb2NHnNce9k5NSx8h98WBCNypj1WHvJCyX6RAKKfoL",
  "key24": "5R9gGcruLsJRsUcuwLYYp18hrCoPJbQg4rLtz2gsLS8EZdFKH7p6QxsEacULzKXuVwdrGb11SJG5QYv9GKc8HP2u",
  "key25": "2xKP647VPkcZ3dtHvJhtB2ymqCJr9uAk6aZy1dDe9YKYjsMACdXtY7whZKhiYYTW8cCrY3ca6F99AJP4tNiPHmzD",
  "key26": "2JXqsKo7vaQeUQp7xzac6xrmhrtQ66ec1AovUUtnrsPeKpnZjvkMYjHRemZoGgiK7Eow37HnKV9HFXdy3tTaatTZ",
  "key27": "27Yzma9zXBbjievXCgsqQHWBWs29U4dDwZ47dXY9AEz7bt6oQ2oDkojVQZ3aciZsyZxZXd5RbyWAEdCSpLEwkvvo",
  "key28": "67AUsgZdoMRVDvWonUZ3KeqYSFr62nczhabM9wb2jLjppCZmbVeEEiDPZcc9yJ6HTVyWJcpWr1cYSdFkwjEzuQQ3",
  "key29": "6147nM9qamoMvWfdg9ZxsPc5ucrZ2UFjQa2ZxjFMajfawVpoSvZa5z53Cd4hCwCH94UCU5CxZSEchson1AU5s7E4",
  "key30": "62Bf6X7ZXvDVUHgsAMmm2LuaeXpXwKy1QrjNNVd36Kx3BrPWAAuRQmnGYLrE8p5KgqHvD2AeDvxKqZ8E6rvhSd3r",
  "key31": "64WBGfnwq6sX97NrvCCNj6YvUZDSVWxsFV5K7HbncYe3zceqWpwBVWffUtPM9tpHiskasCJzhX1L1WtRvGJmaKfJ",
  "key32": "2VmSMwCpRWxQD47LiGHcDpUiTNtWLiUycwYn3Ns9Gg23n8TVcp54uPp1ZAQ8CBYm8u1hJVR6ZgWuiuCX8Wv2RYAg",
  "key33": "5piBjXC9xwdpDfURymUYiNM4Mn1ctowwScEj8y3AQRLFyAeRu1ShZM4xsapkiQRZNo92Xvkd1P9BXPkk4VmFUPoP",
  "key34": "5FUCM7qLKS1GRDmoy4QUEebRbfngLSGQvWWV9j1q8n1DKsUBQJFkhQqej9xz5UwxiLFEJjcnPsDDDVGMXJoynnpe",
  "key35": "2qfRaNrh2GrBqVCRxv6mHW1S2aKQdw8oojFeVZJDRaoi3S7Bk5XqQq7CBAe4yKNQ3ZjnMagtUkZXZGmyUBYkJBEm",
  "key36": "3hFxuHA1jVih7cvqF1tEG3VnQP1RtmGXAWGzVN3SZ7dgjdEzSZTMJX5B5vCzECW6Pakyo8WKKQ4NrbvgGCwL5WkV",
  "key37": "5vFa7NsqwUDDaGtr6xKvvRK2sqeve3Uk5waCsdmFTUqwyigYFh3NWMMWGnridESPvA4dLv6FJe2MDXvPDmtbhp8n",
  "key38": "5oe5K25phTRMXtWCXn6bEdVnhd1rVfyrLKJkNotresm12GEbyUYvUyzyMEkVL8isYiNSB42Qu55dsXoYN2dsvzHq",
  "key39": "5QXg4RcoUasNzqj9oYVPCBsi6ThBFeC1vgTkpjfYqYyjquNnjgdzfS5G7tj9iap5CEVFdZuJLdyB7WpeUk7cSx3c",
  "key40": "bUGtcAZ5rLfqxbSnjsS1YFey1qJWJ9LwtoVXFtGH6iv8TaXo5b2aHGYiQNF12wC6NeoZ3UCGqj4JAebdmuTEbC3",
  "key41": "2v6J63Mp5BYBGChwNFFZLmCFYZsmMiH6MAyMH6wUut7vsLjpWaXZ6kQRNhGC6uZ8VSMx3e6PMvMAeQXdaZR6uRZZ"
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
