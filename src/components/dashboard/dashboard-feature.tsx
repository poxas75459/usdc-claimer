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
    "syJBScRymhKYdpet3Tsu7P4hQr5QwCwhLDV34J2NDa2tgU8rQYxHqy7sbBnGXpH9nwaUTFgeZNFZPX8pYompYH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vuepiAJK9VdLzwHbqpSkoqeAUYczqBBVfjbtW86nw6Bwa8rQtVY6Yhf5enFfwiGj8tiT8A5MmsAE36SeY73Xbpt",
  "key1": "3g8NyNZ7ivyr6RzEdjLVwvnkqHRB6s8DWMDL34ieAzhdGw6aV2DQJ4DZshyvWpX47bbhoWt4H6sfPpytvM4Ycgp4",
  "key2": "4Jxc4X11vXWP4ThFdiM7GCK3B422J27AdnnT599iBaYucBxde1FoatGwFfHoLteCbzQYafN2FWeVTv8TQeTmoVQz",
  "key3": "44gVTcB99D3nNV7CxE3QKuYHixi4LrerosRfYJCMHyXXjWF8p74PaVYVDCFdnB1F3cYoxi7VrfL9uNcrkqR4Rxzn",
  "key4": "42qtLiQeXSnYig4CzUpmQ95uMRPs3egxS6SYwumQwT46vaZruJVmvwWWPkTzDPxhYX9F8J3XyQ2oVxdu4T35zfp5",
  "key5": "NKwr5k2U64T3afGtEC3Hw8tqNUTPgYk2vd8k2LidFzGmriVmyV112cKvATRFxkatjBJF6tmNanxxVuY6WAojesj",
  "key6": "3tHuaTQqyntmVrFETeeuLjd2hQFFhzrziEGioy2QjwJ1Vg2jhLFEYfJG77BxWAqFgiLgbhxmzkP5qfGWZLhQtqgG",
  "key7": "22aGBnuJ1y9kcWzzQZL8Duab4WVa7xUCFR8yMLemeAN8ih8ZPorvq89SBNq4X5jBQutD3uxJtaCKwVx8c941cnvY",
  "key8": "2BuqN7usAnKYkf931CUJZj5wz4ybKuSizg6V5ANy1PWDza3zqhX4w47qJLRNBKy2DQECSqmnk4XCp9LHAzoS1irb",
  "key9": "4xnoHNzYGRMeUnaAPDaMmWjnSYSVtsUcqy7HKfgJxYkUzGWrsErbjryu2i4gDL8Ea5TP8ViNoGaP1ifjr8JGDjwK",
  "key10": "Z7GnAmUDtbJvhhng4oEZ2mZHJ8BcXJW5nvi13exCLTwPz4cDeReQPZC3aZiHLQGBDHLUGDKRpNgydEKmxBWdPiE",
  "key11": "eD5idi7uGUxCbiHhciqDb65QjRQWWxJAUU5ozLsUbyagKt6PepKi4jDGFhnLzmVK3mBuArf2qhccRaWoRBJb41q",
  "key12": "Egd94FXK1YJCisk2j93tgX7htof3pLVBQSifNUfLaDVN1MffhA8oRUSrKTrgm2QXzNXMnhLVH4REXViV2UqJ1Sw",
  "key13": "sby6KANbtnF7Gw1WxFzeLdKubrCrDAh9RDnUtgbE1q9KHzua8iKAGTQC6PWQfHkvGKxpvLvtkaGkXkWW45k8CTy",
  "key14": "5X6MHoT4YVXHy9DLjN176SaB76zwCkMmJNw8hJmoNPGDEcerXn1piPKyUquQ5Kw58AtsrGk5rYKF5EUdFoLwM4bN",
  "key15": "44YfP4VHf1bCBc2NkxhqE85cWY3Z92vyr2tX5H9b1fZfbkDZJQ62Jn89DVwF3hWAxvRLYeo6CLg91JQzEP6XRTP7",
  "key16": "EFShzpRUuvUjqDZb7Y4j1ponsh25QkAYuCwMKPNQ3mKYFR11CbJj2rNJyRdrnarkXnYptufgCEtSHn8i153yjg3",
  "key17": "X4nJ6AxbACYqXMHPb9XG32SzRfZmuWUWzETpYNULCmLFvfK2q5mEdx6WcVtTgM61AZ2t3DKpaLhvQYCUXeZbTMj",
  "key18": "5J6KwjMGbC8m8xVXZDEZ8qkgh5oySxCrFADvTcs3iqJZHWzuswh7YmohRdbpDemS7KKGo44fmBVCGDd4sCEZteLJ",
  "key19": "5BHTGS2RVz4z1uiQgW2wjwcmJ5EmzcqKtjacYoTUhxkERRhuHw9G37DXoMKR6cPLSUmMNdaSA1kwhzxn54uM3rD4",
  "key20": "4f3VLhaE2sGRTeitoQqY1LsttqUQRhcJZjVYRB2Mcy7mhBF5edzLZk2Uasn6EmHhXjcMtehtD2KJ6bmSR1TW1W1T",
  "key21": "3eVpHm9hL7iRJiagZFkiat4QsDHnhgW3vFSoha7UWcmEtzDFoiHL8CH8JfdEsf5KTbeYjyUAnwBJy219GG7rnjrJ",
  "key22": "B8aKFyZZzArzCG5518FqASCTebqWHZw2v2Dy92ZG5swAxrmB4xeT4aR3xq2CTpU8bGtBt2BJC4q7JDVXngXKiQp",
  "key23": "4W4YBithiHP2bfmMWZEJDk6Moz1UqV1Uqa9Nf1Laggh8iepe9KVMeAUSJPjeSHKigUW2yUC7VUKrwS2FpGLdyuqR",
  "key24": "2Q1TXWcomnoQXF7chSVe3vdcySWxn7hCGjbGEf9kv745ioKo6W5rPgFVdXfwr5KTDXCCXtJQFctSBcuACrJWfdgR",
  "key25": "5px7BLPbUybvDU5CAYw5yrWivPvG1pFzJEr4W2Ht1SBjbn6jL6CBvYVfhK8Hpgm4MhWz6A788qR1mGJfxWUBhHzY",
  "key26": "5ois9rfvPwy7xACKaEtd3uqpCCUKxYdtBRG8PHg6X7KMLZ1caQEZoXuEwpaQCwZCS98LP6Zv5uF9jNHL4uVZ7TJw",
  "key27": "4VbKKVJLyZy6jS8Hhp67R5KiewTKgihsJ3x1szi1Vn985pz6zQmLYhNTADU5U5AxhsMvTPpc2EAYEChBqtxLkQV3",
  "key28": "3p6NtutFKL4hfrknNPBepcnAp59Bnmrb6bFZfMedC3uka6XJfrFbBV6qH57Qoh2Dcsw3xbs8H1GWiEEe9fbhyP4t",
  "key29": "qA1BtRf2L6WVoB22jhtEDoAvyryB7ZQsXbRzw6AL9cYmke7f5RYH3MhsCckwBVQP1BVW5zu4dBeX2rzRgBZ9xMv",
  "key30": "2DKJR7TJecopd1EcRpnR9dLgSbNTWFoHbkiF1qJk3s5iCgNWSs35Hsok7GEJqSr4jTBUzzxX2fFKVZHnsxZArM1f",
  "key31": "2WAGGqqMKNrX1qLVzX1gxAexBw3iFBqtACY4kPPKuY2B4MAFQCsrvLJRnmSzmAP4YQu4axF3QFNdbf24YxFigMhu",
  "key32": "5UNJcKHMaJHxNB7kABskQHHY9ZkfqM7yjoLWViQhSq95dTejC5m3mMAcGZGbyusi6pXMTzPyvRGhyHyENJxREan6",
  "key33": "BmWa1CzjjP971q8h2HFB4DQQV6HDnijZTLiwFPv8sXfpQoNRVQaNHwjHVQUvWxeujNvcj8ZqPqBYaWj2d6KUgUR",
  "key34": "3sq3Zij2Tq3z54HqVivcmRnZXPtxaKMSiRurNyPtSiWxQjQZCSA359oyRQVWC5PZtdzwr2qipbwVJ2BS1QEs4a2s",
  "key35": "3tzrEgrBpXqnM24b8xwi5LB8GyCWAxtPkj4jn1CH7k9s8AFcvMLGeVHAEzkjFcMwjjSDCGybJj8wutkC6QiirejP",
  "key36": "2GcManJwH7S9UFwLkrGGY6GC3ddpvvCA4zUqEkuPYSFX7rWMod4wCE8RHRvCn4Gd2UpjuicMg4PF6Bjfi1SADLYi",
  "key37": "3K6SN6RnBm4AE5jXmL9U5LAiKLivbBtR7uYRUmoQLCKs3k7kJ4WCUjDw28VSqyCtiifnW6gTpe2fgZWn3Gjsyf4B",
  "key38": "2SKcLuC6AorkmmdZVQP4oEiHPdH6uS4So5Nn7HgenWqCxphgu9Wde1CsejRBNBLgcQ3n4L4nTYT6WEBUYWQuyHaY",
  "key39": "MVWtLRiu8PFk4gKwsB9Uj6miBG7GWF13wyqTe8LFekTauLSYwJVhmT6rn5RCU2Bk2wjXvnEW28b37uCDjXceYbE",
  "key40": "5an4cSQadZgePbiaa1m2s6EL3vVpBnTApy41U4pyCJgvhXMMU14hcp2WdscC4ZieTqvzeP1HpqNECjLUaE2YT4yG",
  "key41": "4JfQv5CzM9DcHbczW7z9KcFCN7esouHxSCR13Uta7NouBVSnD3dMABfoNhHkmESTisMhTZLkKSHpcnbhUtQexg4j",
  "key42": "5F3VnDiDErTbehmfEGy89iS4Rn7TX6hyZf8WwqJggdGciPooXDkHXBKiz1ahUR4TbVRmfE4dZLnuqs8N491zoBkT",
  "key43": "vaFe94ChFyi8owDzruKu8fLxxBPPLNPJgqYzUG96xNx8YLdu4y2mW3uEjQLBY1KGYMP7YXJkykEED7bksXYnxTh",
  "key44": "4iPmmZAkPQnmtN1EHppDbb4peksHfynJ2z5J7eT9KSZzQ6mJbLceqDnpCjJAfRQbRdHABLFqZFXJphM2ap4ZCcdk",
  "key45": "2beDs1Nvzwn4VoBfnNCFPv5yunLBXFmJYz7Wt7sQStxtbFyz5WEoco41BpCuVL7A4NSRMkZF8bG7nWSJfxCWFY1q",
  "key46": "2qR48FSuNJJ3UPiJK9EsbHr3eYPXBHoDzbN3rivF8mcJUBipkUFfq4Uvnrg4Na6U2QVJNR99RKxEdkeeihi2kNnX",
  "key47": "4N4opsgZrcc5a21GXmoRU98mQVt77mg5dk49BFAW5iQcPmvhY8iMi6mgVMgHFcab3ZvdMPpEnHdSq3Yt5sNzhMS8"
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
