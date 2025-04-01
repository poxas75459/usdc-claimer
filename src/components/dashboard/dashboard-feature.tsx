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
    "5hXxRMTCsRCo73BohX9rhnsed57WXaaF33ZZG29vdWW5kFtCmgmntuE4PaHkRi6TWtWTsnnzNUyeekutNuYotJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n2kEZVJzRDoZbosfK2rBiX3buTizGBsREWbAtpTmtCv89wmruFdffd2XBZeYg14Nxmv7FSRHbqsvfZkDN9YovW8",
  "key1": "48yXcR7jsc5bo3H8p7kZr7BAEPB74vbrAiG2S3AQv6XY36qNXa4HsKu5iSRzP3vGxjmdQs8tTBMAferTEaorpqnn",
  "key2": "5UDE9fLswfH2fJ3aggTkspKTwWmCayL3UByMNSksV6L5MWB2AEN4n95sWjW1uucHhhXPRL5npCqveMaKiaNGrtKm",
  "key3": "5KiMZ8GRTBRwG98QmqHut5LdBk45WHohpJ89pxSYGERnZyorsS9HxRWhw37PBihwZ1FJmgJ5HAEAeK9hz7VHC9Y5",
  "key4": "39g3fWgmAAGbbEBjgBdXvKZmhX3fSKYFhLJKxr3yJCKj6AmMBCFAaqE7mfGS35kdQ5NWd8etYiLxT5m8bDZLjcUo",
  "key5": "4oMVPFYXuEPjtijjmfCyDpYhV4QecaJCCoYeBJYFPhjZH3jFvXyx9qSpYiBm1i9aQjZt48AyGzuoUgZ5waSNQi9x",
  "key6": "42NDLVAHeNCAtPqdo1hdQRdCJd51a61Dck4txtsyPan3s6gYtJBS7FoSDJyiEJzjQLDyvCWWL4MsT7C4ti7zwRdV",
  "key7": "ZddxmTL3jaBceAjZxkjFiUEm273rASieRb69C38P1NdowM5L7BEqYzt636LbvtU4QGDUH7ahsgghk9yi27ob1vf",
  "key8": "2mEt8eYsg1DXi3HAkUy6hAitbukUJ6x6LufEPwxyHo4VxddjUd9FhcbhshtzVF5GxGHHSonghfwRjJAi4nSwRCbn",
  "key9": "3ar4op8Vj9XnLFuHx5XBK99zaDj6fzUgqgbCPK7bYbTHgLVkysqYnQwvTqxWH9ThW1PGhv6un3dewkowjoMAv1Z4",
  "key10": "38PMVNqGQcCn3b5JeCq7NUgXBx5afk92AY72x7hewX9oDt8s2BDPMwPCZ9hmGGuRfeoaW6qaRVWApM6iREVbcTmJ",
  "key11": "3XgLNcadUzrBqv7rK8fVN4KzUpMSkXYkZQx85GYr2rbVhnVxpwPRiBdNTQa1Js1aeTF5UtM5tZmnSfzjdG82zvCL",
  "key12": "jV3JhGHBVoxe6mxmwkmEfm9UANzgEd6JHmWg7Y2YoQZmcHakSqmuXhNSR4bUN1WSkYRGjLPnbyHZRmPLN5m2byP",
  "key13": "5M4aKPfGgW6zXzrrMY43jWnbCcwidcuxHKTHti3MKfEjy41kL1Eqz2iAWc7MTWEbDUEUhqJZMtcMMqW7ETVMvsPR",
  "key14": "4hUGtvcSXdenWWE6Y7UHVgQwWSXJmqqokgQMRurSwkXkxt65UuMizZFSvbgWv5Evv425STTGaqgWF8djoRAoMaaU",
  "key15": "3a6CSbKk8hepVWBfb8taoBG9wE9japNgmnXVDxaMykmJYmjir6HCPNjHBfkRxX25FVidJdyxvgtY9FSAPXJW4mmD",
  "key16": "2qWyuF6DZnjcwNL8APP7wGYD6McbtpPeHZekjuifUDBNiA8aWsxbPCRMNXM5a7PAGXHQqpxW79FViA6Sp8Ncir9W",
  "key17": "WL37eLNezTJ7uiFGtMDDRrA2pJLrhggmiFvtkPCWRK7PD3FcjHMrvw5Jcccpb132FMTY4HZqppUXsyoP2AUQNFb",
  "key18": "cr68imXxwwyB3VwLvgHd5nm8HWE66x42xY4m9gay57z9bNeBwqE7FraCrXcKdffv1Ly3uEYYc368QzxCSHn5QzJ",
  "key19": "47PBum3k7P9XgLxQ34XUBmnQQwcWkBQCZH86Sh78E2u5a3nnJxYqxW5UGfm7deuwPvphoTSjF88TUj4QJhmAbo7f",
  "key20": "48CcmCPAgQqwWim5cM1pEbcHfb8m7D575BrebnW27xxh6DUAJ2SCLPEd8V3XDfSSwQRpcmADFyM1p9PmzYknPHqA",
  "key21": "2xUwABNeRpfKdKy5N6eBZALPdoNgSJMnhBniqvxgVdB2UHfNAckjdM7NJBZ91fC2so7raa7KDpND9DBBkooETAHn",
  "key22": "3yJjEJK8srNHTycZMSXAjTopkX5tTQATpBbtX2MX5B3VnZ2cBeRxi1eTcRk27xPujhDdhEBQLKBqLEb9MQCVug7v",
  "key23": "3gF388JEn2p6eRDynfe3kFGw9Zmmuq967gzZ41eW2WCjXZAHP7kHUf7BCXRybxKvfLaBA52CpPagKZb3WWKYtW3j",
  "key24": "3Q7Jjad684DsA5Xhti8gP7TKubkHGAUwcBNyB2q2MeFy2JFRXKbT8cUhZ38URApdBjaWtmB3bNMVR6ai1ZTu2BbN",
  "key25": "5gVAN3sMMBw39KYU7zgQ3PWMCSMW1N4ZK2SR385d9C5pmQ5yP9qemn7gtWyErJZ2K5DXnWiTPbwJmgpDe2E8zPMM",
  "key26": "47JBQdAyZwvMoyeapBUA7fw7vByW3L9hm2tZX7mxjhhcDk596jcjZExrY52H6cQT1cqTGGBeeZpYr8mSLnAYnmxg",
  "key27": "55Z43Z463TU1gfi4KWtE5dPdRWfMKDQFnTQkENbPncbWVjCjt7AYcHNUbS8fYnwvGRMBjoE37azgNcyCG9M4GEtS",
  "key28": "47zSFFoWLqBLvH7vTh5ajoSn23KksA3sZe31RE5sy8NmKnDMLMu2CS7fUh1ETZY7SxicDZCWHmyx29tpDHnzqrSw",
  "key29": "3xHeRYBLMshC1eapFezoxPfUh9jTrYXnFrQSE4x5yT53tgwFBmu9nGmaqzthRKHZtTFY2CGacEvAAkzX167HSY18",
  "key30": "3u22XEbDQS6gSQjaan9xFucQPyeApXT8EkNLiR3DEeXXAUnhpkU317CshmkvhwXm9AbnkJFYCa8pJVBzr3jnMNUa",
  "key31": "QM2Wfv9JKjuLx2GgYT77btV6Yaiye1XqKNJbCdrrrVggW8B99awybuv7SXoSUYLT31deoFT1DD3LnkGLNF2kVgs",
  "key32": "5cszqboVx76BiqTiqKFmqhk11mrZiB1AWUUdTwfykGZEeqhevcZ13gnAMhqpSMrXi4LLUmNPy53McY4HLY1MLXuM",
  "key33": "Sd1gs9U5A1GrLuqB1CFJMoJtdsmNEWPPt2PdsyYukCo6oLymwkFznxGgVKcGLpo8bd1daeisjH9ykrPZbRG7UwR",
  "key34": "XNTE3BYejEWF8Wd7AcK78Wxnk8fZ5QKCD3V5RohasxpApW8W7rkiz9RAKmUXMz9RtgWLtaHmWSEuWVaGDU29n32",
  "key35": "4LmNFJtg4aBAjcEUbAQVE8mcPNQpQk3sGXWfXxpSAtvEMSYBHmnnRrysPHGuUUjd31TV8iJ2yexKF5XZ46CBUAAd",
  "key36": "67B46PDLch4eHpmgoNRPhk1LAWSuzYKqQri4B6fNC6jskbmQjqDLEi6myXC1da67aa42ohxsipPN7fX9xtAtfdSu",
  "key37": "2143YCpxek8gibi6Yb2R4qR3pesC5uKCc73M2atTngeAuPGVNsGvhrcrbkQT99dCAooNnYzWvbFUvPKPwKwhMHt5",
  "key38": "2F3WVdChnG6HkKuFbtmuRiTb8ZgYzex5ydTW8CxnyNyofuatcf9fJDM5CnshtuGGvgXVTq4WypvMTjGThbqWSg3o",
  "key39": "5G9cLN1ficRdJiAB4CLHrsPctZukY59jipAvBmDAn9H3iXNtTetEZsCAf7Nz7CDtfEe92UQxHYhaesW97yP5Au7C",
  "key40": "46oGbT9wWrLFAVxuwSbTzAwU6v66L5nnPuzNoQgEMECGLjYpPhC6gLBC668waJ681Ms6s2XryB6kEGQhBfEEnPyB",
  "key41": "26oJLwkQZMC2LqB2PLUkJ8BxpqykhCNrDWFTVwanderfmYnXTCnQxoz1eDSgLUY2pLrbHY5WzRJ4qXSCEgBFmLcx"
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
