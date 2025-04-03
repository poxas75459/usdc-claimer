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
    "3uaoGS8mj6UWvfMb1AWrzNfCs12rpr6c1Yo7a5tuXDjguovM3gaSjR91tzPG5sRzCWGk8qeEdk6qpnXTmKB1DSpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FHByd8uN4N7xejhURha1mBUX5V6KzcwEYrLHjaUux7tpngJKmXPZWuNg5zUDygCN8N5aE1ZNRTGrJKpjoB2JZZS",
  "key1": "4Ajdh65c3e1vnL6NgQ97PrQuV4LJZa7e5CNq9MgF5urLsRDKH6E2EZyJeo3T2sHNTdu5SM4JfgBaNZ3mFyLx5Bhm",
  "key2": "7g2LsAyaHaUn41bCXvdayuCerZtoHefG1Nm5nTS5L6VnK9ujB5dLUB9SJcwDY4kJFB2MJrHEWiC5DvuMRyBCQGP",
  "key3": "3Xi8kVvxGNWQiYQwdsbN9iSuVoMUk17HGMEASRUXuoK885QBTFtkWaxZp2nkaQcUKGZDUgEusbMp8STiTqK7jmTU",
  "key4": "4g4yZZ6g1TsVjJAR9pxJAirVVDsdk7rLEeryYdEf6X4rLoJPenqKyPAbYexHFjdXePhqJYDZssDcLLsbSXCkWTcW",
  "key5": "qV2KNVGJwPuScQtCb9GHwz8c5TYf54wB87i1ALBF7q7xs8zGQuVNRTvDP22PATzD3WzECG5KKNBaFea1mEYaXUx",
  "key6": "5tnEpQSqV9DAFiwsfPhQg2yeuAnvVH3NGsUTXUhvyJ7JidGXDhmxm5ja1GVpGYoXpgKcKDvg9fSbeiQSHSwgKt4A",
  "key7": "4bTSe9sgCkjwZ6VTkKsC2FjRANdGBEvU21BGPb6bVU9bnkRBXYN4UzPjzGUHMUQACgwtU6RbNjxa9WRs6zdqTApb",
  "key8": "5uHNJiNp2jJ44r1MMAexMVj5CqDiwhKMopnvicXTEQ9wfK1UpLzg8HrXqoaEtZGBtyWkhn4kh8vWi6GKiLRSsx1y",
  "key9": "46k3sNC4uGUb3fhRrHG6isXAPLUfDQ6qTquaYaU3fgSNJa4Tr22pGdJdVzWfqQUg4LcvfcjRgNsCtAynVXXYtbfA",
  "key10": "3NNNdvkpHfrh9LJeCUuyYfeHYXGKN54dXZ7pZxmFEG6ADK9zYUNsFAjMGc8DSMht3hmmbdnMefRZQgZhQpSHrecF",
  "key11": "23HMVR46PSKFf9ck6LX4GizV2iWsXpptfu8AHkSbfKxgWJ3eGccQKFWMCKyJk7JcLUGCSeVHyqQ7cE2h7xESMBab",
  "key12": "iFmxJZZmWLSNjbU4AkNSo2dub6DGs8cnLfDXRpD1iRgbH46zVg1iyx9pSSNFj8iY97cnZtycXFE53ogaovfoWbi",
  "key13": "yNMMuJaZSi3fuNMPZYgt5Gnoj93nYEAauzJSTP9aE8mMefh6op8BQmzhmD3j893p5TEdohrnK3aX7hKLc4pxhVn",
  "key14": "3okXBXhK97fDthXzETwtzpS5CV1poGNSjXpf7CRsWw5NeN63Ad1qADLuuMyhZWQbqynKkRLnBbfNXUPJXesrWxNm",
  "key15": "3gKnVQzJuXHuAaSnuXHBpvhNoDYs7aH17rDaRtHiYkHuD4A69dQxsaxbQctHSPGgsR6KZgKxNHg9itSNhZGvkFB6",
  "key16": "5L7jm6U4jXZC5fCDAqMZK9DaxjohYeTZsKGQY67Abb8Q9JJNP5mr6udHAdXhczQt17rG8w1VgABsLvnP6Ajdp875",
  "key17": "4HiNdLrJP3wXPEfrNN6ZnetwNa3k565FSRU6pe6NvCTDHk9Th5NVE5FDDgqUmDv3xaUw8n7JtDySL5ckYDxALvjE",
  "key18": "4ZF4reMWi5Wui7N8EL7RN32FxgdAhNDrr4DbpKJVSF5pXP2GXXoLw5j7TXVTEN4DBJSfRkaH1YanktYTt4GBJPJb",
  "key19": "66h8DbNTXSRXNfdBYbxAuj1bUFQaA7ABYbLgFtztGEA1hsR6RuNsgfxCtpHYbWJXk24oxqiWoVnT6VgDA7QUyEyv",
  "key20": "3jBLrcKbDUxMdU5wQnDn2KgngdUut3CFqdap27fKRuwcQDjbcg5AUm9qnQe2dPxEJNmLbHczepXmLTCC2RfhPp5D",
  "key21": "3RXAUw5ehZeJkouewFn1Sc6EjeTVyLfZjoLaumGmA33nt1AWRmdFdDWkjDLAMXhq5ngCbqPgGsyB1Huz8ojMZCbM",
  "key22": "3hhE2GmM52V5s8cVEtBm9DiABng1qr8vgA9RuoJtu7LqSw4NKTn8cT1sRgU6uZ7rVDmxBj7vjWYXqzN57ATcCxLX",
  "key23": "2xgm77yLN74FL3GEMxJ2S5vh7WQ8AFAGivypVTozcznCuH5CaF9UhqrfUzyKZPbJZcvE38Liy9jYBAGMx535XHEK",
  "key24": "5KyJd9QprFJpSabpjXoKmQMG5wbsty1iAC9UGTXQBvANfBASToJtKzfHMBwg9GSyEChSzXuXid25FTibSYxfKYjf",
  "key25": "4cuim5tABy9rEPiU9ct6QWN8ABL6Q7UhprGy9s6amyWA2cjGkZtBHSt9rKi78AXbgQht4uBUwYJxunPwZWonFKMR",
  "key26": "EmszhC9Qm3xYXxNa9gv4bJSPNQoJber6WJpFo1KvGnmP5M7fCiJQopak4GshLutbjA1WcA5thNQur4nfrxtD45J",
  "key27": "3aY87SjQbcC1mniCKdgBBsRPJenZikHiJz654KQAA8sUfL2tNQKmDZZiJNnNhSwWxvBDCateViAu5tTQSVwPeoDF",
  "key28": "5PKJZ1b23YrPgajwBZyG1ZifYw6LWXzpK3DFN5U6bRgt4Cwgn7VBu5zCSm4S6WcLpm4RFNwqtW1YQn1evn15A9ra",
  "key29": "67cZSDnXGTFoSkrVvNKKVbu3fXYT4j5FQxQwqRSzCzk2fTDzsnhiy5vsVUVUDgHfdZySoQ1WC7zFkEGuSYw3rfEa",
  "key30": "2EdZXeemhg6Sv3p2HG7X2ERWvUyrmsGEeDaJ87LQ3dbcUwjNwA3mU4ujU437hqtqX79hx2MDC2qC9oysPVUTNkYT",
  "key31": "YQ9k2oA4zZGGKuwhtCmay8H2t1kANjS17esN6bCeDCWt9qhqx4KN2jd2t758YGQ5mV2Ltovwo5nkDYdPBgWpPsk",
  "key32": "28f649eqr69VCnafdRj8pDYeuzAvymYQKaXEU4M2wZkR8tKShsm8nUXes7wmxbB1maDZJ7wF5FDp7NpkJmEG9sk9",
  "key33": "49ohyA3bzt9G7u38mqtfJHYuNmqjuVztABqQMPzx3mkCG7bdHtFkNheHBuFMd8LMQzGvb5MQVZV1VvaTkt8iGhLb",
  "key34": "2oaRfVSAwEvShWFAHqJLhm1dGfN1nqjStupAqqiqpksTDv1g4dsfff6QKRTUKVanrBqMbuFHMX6MvNDjNkcLa4vd",
  "key35": "66tDwbrLmYW9MbxtcWZAjBUat3g5dUFusaqpHjXwwU2kmxCA3347PiKwK5YsEBiPgCszo2e8XfdXRsonjoxJRVAP",
  "key36": "5Fm82XRmzVJvZukYRVHm2uPGy3ihKLaMshaWLruhXf4VXtTXqHWX4fBPkuEMLBTgzgdeeVCg1Cshu3ozGsjFENwB",
  "key37": "3erfGwYhsGXwbTQGvGV1tw8Ktaeixy91tR6AyPwoFsEhsrrph61enNiHRsxsdfZKD6RgZ6qFt1grePNCamADfiPr",
  "key38": "5nk4x1KfUFDyc3WJ1N2cgoJuYBFcFuyMHKZkHEhGJsqBfipG2gw12HCUZcjBcsQCLjJzUwrsgVwcxSuCb1BNn9pK",
  "key39": "4fGGscNr7W5sBTwTMBjMmVYdc2pdZDZtmkqKanMy6ukRAPfT5M1NeQKwnermFujaXGd1hDMTegR93QGdbj4czudb",
  "key40": "4f6SQrSU1VESdAsGhdftSC5svHdTzAnhCnbYpzu8w8WBHjw7GDUF7uWGS2JFzURjddBYeCPvQkfF8TH3rc4NMCMJ",
  "key41": "5RNhdAY2zq44tGSDdcUuaUfLqZti8kqdbuSrCTtWYohD6wpU8cwwEccVynQNzyWtHUsG4Jd3AbrEfLLoyRdy1jth",
  "key42": "468MK2YCiz9kwVwhmNRHvGV2sDCibSJQfHhRoNUCA6GJLYgL9n3NrHmY8o5zx6SdTeWsd9cXbUn2KikemjzjK4gX",
  "key43": "5aK9sapuRjbeAKT9vg8HtN82mahrnKwSzB9MVbAeLfkM5dVwVu6xwXSgK1TS93q86imBysFbRmrQdMLpTLwKtF8V",
  "key44": "fTnZU4wxtgW8Q25Jhc1rGkNdHBs3xsfZp91awpXbbZQjpQTFour1WDMT2rJFw3nyK2NsHxMZit3zGTSGEmYzXai",
  "key45": "361o2Nswf3eEcmYApXp8FquLgqJy6zkPkqbS7ehC9JFw3SS2tEjU7a3A4rGCwSJXFeqoAbcRnhC58Gutxtu3ocfr",
  "key46": "28Vm9wwfcAk6WmT3stSXowVFkvP8UL5UL7EyNbNUCSf67kwN7yCDwwY1XogJXg1VxK2vHQ3h76TGLG6zCdntCCDw",
  "key47": "3PBwrCTL4gMr33nNMAmVekSdtqEi4pQNCyTFjEfGqNbnbxWnGgcnsjfaY7BehJkBEnHxKb5XxC7djDjy8JgdwSpM",
  "key48": "4gRH5dAAv5ByRNswRPN1Uw3zsXDHNuwWs8PTTWGomfhBPFiuEJ4EMGWWvp8L9j3hVB5r77gk9zJ5BGfwR2Sxxj9a",
  "key49": "3TJ2R15FHvGGPvGiG3texYCkqTZZLcoEwfSMtt5xNUBPUv4P2LxBYsxb51CsD3CWoAGwewgJiHDxuSfXapoVseTE"
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
