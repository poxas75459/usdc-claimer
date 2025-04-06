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
    "5UhKjMvBa9oJKoDNCF3tHt3cBP6Awoce3qRmdL6xwLhhsfDvwMMxmTsBtfYuoZNYBAe79kZqtJVZcAwFRkaXGQJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u21rXcY8578jNPn1MG7ZzWMxuvmifALUdHCgZwsm9CocLcFTcv4BZBuVUcMfwGny4Z9mKKABwfm9Qf487JkWtVw",
  "key1": "2THENy5FTTiXJxh17VCCEhbyQYGw7745J3T2CgpAPnHAhfQeMYiUQHuGQeQiShLF15s66Gr4p3GiYHWLa67Wq71B",
  "key2": "3BKdnJgaVnsUqJ4oQxAFU2bBgZZ7pMw49mMzHpb4LYJxRJ2eUre9dmDHUZbxJqKRezJPQk5eRtGeM1fCbtTZS5FK",
  "key3": "UuaJQESjwupHpm5Nc48qEjGuWJof1Cpo3Ch6veApWf4Qf5QTAAxMFouxGZAHPZaSdpy1yabHT3LdvEra5UgQRqq",
  "key4": "3ae3gMNCX762xpyfLDi8pZvQSdZaqZvwa3sCFohkENVVwWBCDt4X4G8511x3e4wrmGoCzEoehMLCgFc37rB54WyU",
  "key5": "5B4UdZbyHhzMwi4fXqaEQsvaFieyMqjzyQ3oSAD1KhKonEpRqieuoKeRDsmLxtW6xNDuuV7tai8ybge8gwrjnczT",
  "key6": "5wxGqJ2XzmfDCARqh2s5V7bYz2x9tW2SPwohwPxNzNT6WPJtyEboAye8YkPpBx7jhNzDNnXEk19ortDY5EkhTntt",
  "key7": "2QNfJgpAdUwCPH394D4NDsiNPCnyuzduAGgBCR4a76CUDCcMQi4XhECDchBRrvDHE4WQDTgKZsTXzZ8vwobV3mub",
  "key8": "Rd2qPwTCGN2W9suWXSnB9rKurttS5AQrKfkNCq2W3e46UxbMrcBiYcXmnJn9Bp923AZSPziQSUwZsAt1WkLZhHj",
  "key9": "2YCtWTsjAPj1pzbpH9j1viXFZxoFDUJydWmZNFomCwYuuibQLwQFmpzHommSyiqjNx6Guc3b1WcpJ2RWmcSUNycS",
  "key10": "5HJeV4utZAwqKMuNzCTk4TjLapGhWNDo5yGnRNyk3uBidfXx3o1ozwXym5qHvf7WDATf8GeP7rq6eEzbHFkHAWCV",
  "key11": "2EqbpYomBdT8pbLQ99eH2GickWwccySevoHEmmKxXy72u37gZUsEHddcJnc1UdhzVVjmaLCsvbpLsqSxApdT5QoY",
  "key12": "4SrxbqFB9vXV523EiVv8DXUt9FZWXHTWsQycti2LrowvKcwJVZ3DBfuStccShk27qAVDfUyeeyx9AVbRGQt8Ftwg",
  "key13": "3d4DS7NLptsjMGpuuQSZjvnaLeTYivccJwqM5GcibWRDBQ7Sp3bMSiw3k7aBgncmGg9zjUaKcKnv3BfPG53f3PsB",
  "key14": "9bJMYGMF2BZR1qGd3D83wYQ1CxmvG3kjb6jACee5AC6dXHZwW4S8mZ3UqJpgVTsaZu6kQiWXG2j7R6FnDB6LoPS",
  "key15": "2rnabQmTDSn5WHks6zfJ33J8pyKT3kyxDqn3G6LGEswYXWhyDQQCkZNbVeCy4wH5TWR7vS93B6TkgbETVGz3GNoE",
  "key16": "3Ah7gH43jkxAstn3AGwCA9Vw7YR4MhcVvTVpwCKDvPYxNUoiwjZPCEkGc1Lu6WdBj6wNQTY6yphzFjTp5ACiDCEJ",
  "key17": "31MMUnBmutSzjT5BK27MJAzheN7rLZjbpQk39G5ZHxdMr3NDp6ZjSvwCZqcS1cjiVEmwxhsa2FhdQJztoCfhkNBH",
  "key18": "s5BPZ7TMnLEobmz17GPSFr84q9MseJH23AidvbyBUXFB2x9K223JWE6yHuQ4u8Ynvb2Ar1JAUVeG8Eww8krDJSM",
  "key19": "3voE79upfKn1gqja8229GFEMJb8e1pecBCKnFReau9hTA8VwfbP4XZK8YKUCE2zpMeTuq2ugy3AVzSfdQWJzMtgy",
  "key20": "2T8ui8NFDs5b9GL2SoMVfKvWmp3qe5MfwtjSdjyffgGcPvXtd6saiabfhxi6oqhWrV9FiX2inyt3GWKHW6YSsMy1",
  "key21": "372Rp4n4c9eZSTfX6jonQTqovV9rdxETdoKux8UEQSBY5vGimen66RkqV5phvCHTucT1pHY5mJskGG9DyH7fdNqQ",
  "key22": "2SnXWmY4dfJps5EGKJeyDsBnHA5YnznpPQPeSXDLUpTquMy2o9GUUavKR6LbpofrdpSEwWFsn1LUPH8rrAA8n6tK",
  "key23": "5yy9cBKYSVerkKpg5p1fHAo72BKagAW7X3S7zaLW4bZfENTH5wZmogYTwehdF4jwb5z31qdJxG1o6FuWJrwJjpwk",
  "key24": "5Zakq3T2cunr3WkS1iSi64cbRHDqSGhEdWHEuf53VubL34qcgYwt4a3FPEBfAvw18CX2KHhUFxGqViGAq5s1hhRn",
  "key25": "j5FogyoL9zi83DuCDYMkcRUUi1rFws9d1zEhKmqNqb6s6vpw3rU3uzC1zHSzBHwj4vSP4g9SAd2nwb7Es5UEYcc",
  "key26": "4mVLoXwQm7jGpbharupvsHDy45efwCPSK6xaZcyPBGCrMJKx9opdrtyhddxzvvM3yTHzVxBzk2FTfXvFxkLvgCjH",
  "key27": "EQBHnyRbDEquyDFDyGQr82cndTuKFxH27jBQ1tGWmScZPwgqNYG6r7KNRmxM24eNupea9VSPi51wAsR4yxgt15S",
  "key28": "MPHpwn9hJGctiTYcsxps9GjHWrYBr4ZvFQUzwvaoFJHoUUCBdUuu7XmoyvDMKruvRW55gsKGaeSJXLAWuHs5PcE",
  "key29": "6488bRUngopAFcpi7e1h6GRXVCwToAwRiyyZkxdAnJ4JyZoC9zseTo2v4dJZbGQT2ixA5orNKpmhqwSVazYk6M71",
  "key30": "4GXKk49CoesVoDG8fBDGCSMD9UzZhAMWYfoiK6da7sjd8navs4yxZ3aJh1kVBCEZaRYxQrU6b4c2uWcd8AhCBAtR",
  "key31": "5qf5kbTKKmaypBnkjNNaRRbS7zDSHBATEZes6qKxnD9LKu6TxDbVTaMjuBCZ4nqSQAUAV5SYVsWifDw97jFtQYfy",
  "key32": "35YHc32NLwuXGCr6Yyg8D1TiL5Bd39qghyyGPZdP5h8vxs9Gn8pF8VPStKy5GK825DfMiL9Gwt1gC1eTceiPomcp",
  "key33": "4W4Am5dxcExufVK8eRb57qdJrtfsfRbTYa6yUPrSBMmTs94g8pqobFh4VyB3phKjZqUG9wnjJpEezTMsbeM3p93F",
  "key34": "2XuwW1Tr5yK2J11Q6dQSTd3dr6FRXkNQBC4DFDeBxavEv7fRaa4gBciFEnLzSwmF7fZp34GmXSp2faiZCP25xTg8",
  "key35": "52RugXUGXNC7p7SLTdfMijT65oNJGRZNoRqGKCvssfJze8nxG1RXb4YsZwobYRFKmazzjGi82Utixy7uoanuV1tr",
  "key36": "41WTWRamEA4ezKcxWLwQzrcMYog1FCxg458NGNqDrP4Yfiyjqpm4x8jytfcJ2Ja7zb7iF1gF4ak5E4EuoXNLxHA",
  "key37": "C25rtgg8sPLJ1ZJAWGXDd5DgNgzbJVuc4rGnz5CQN3YMX9hczbb1P7TgN7ZSmTpHvRrjKfskHAHtj1XEE6KuiNH",
  "key38": "55rCK6y9L3A6togBNzeTFkrYLJXjccGpb79QP9NWw76MSNhTkjxQNwaGHGYLqaGQQ7XjQB87UtbAysvKWxW55Wx9",
  "key39": "23QoZdZG4akHMYMuDvBVo3au4LCTRQ3euJbApaHBbycu3KaRGDYRohVcG8LLXiSCHEz1JiWnD98imQoYXYq32hdx",
  "key40": "2zTDsUedw9UUqJvuHqf57u8h47f2prXPjwwJsXiY9sfyUzFqz5D5T4NKhccCSxHNcTRujEZLkS5KvwVd7aU3JY1v",
  "key41": "4AAsWwneqDxXXSiPAFH1ESYdxoGTPHRQDvfAWjxbeBkyAFSZXEw2fufCy8dyY8YmSJqvegXchPHchD31Ji1xwaWz",
  "key42": "3VogtkkMfPVADMhtc1iACTREDHPwohaRPfUWtznTkhEef68sPUj6HaEXqmQqtSeKb653zTUjSSahspn1iH1guF5i",
  "key43": "51W4w7PEofjd5R9YtSHGA7KXN9HpmJUKCyHa9uAonUssPDsCJvX7J8sTAkPpfuCWRod7jVdL52pV2ASNmLrbXtAf",
  "key44": "5gKMJeqFeReqojT6ySThMFgF5a6TpUnApeHRxnyiS6avLVsLuypbrf2HWhrDrF8GTffzYijFoENB383JxwNGVKCB",
  "key45": "34oKKbxrrRBKpfY4FMVUdXCVHh4inkp75EkvFovCqkuXSXx9NvZKuzHAfVY6eFxfdp5HvTuy2a9pZhu8TLERXkFA",
  "key46": "D4LTunZRJckHAHNJwwHbs9VXvxoXChi7SZ3Dg3VXXLsQuWiEAY9o3J4iqL2zbL7UFuLCtm4LzSdf1mi5SrBigKZ"
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
