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
    "5Vzf1BsneErgqTFNCrE65j1cg9fjZLxr16qpUDurffgLa9MCBJhjDuWKFMBKZ9DMX4ihJjAk71Kzby2g2LXipnpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PqHRLuq1HpswHB8HJuEa6xktK7rNE2cH1qrmZFTJq8XqqNcewtbt5k9jCXCTXJeMdzoNTUkHT7chVFHArcKSMng",
  "key1": "4TBTM4DLJfwBjivuBZ7J2YkcFM42BHe46WHoKDPoH7a1VBArYjhHgAdzKWWxnuQDeRs6FocE378KpHGUr3eii1AS",
  "key2": "3km5ekWUVmnd2FhJggKx1P4ttJWgsXAgTK485SDZAjr5y1QELWtoHxLTzhdtqonbKkDvNWQMmWcWSbAGaWPN5qjp",
  "key3": "5yzTw1kgZG7xHPriygzZZe6haNKs77Pv13HA6fENfVctqegCoNxStWnrUCvy1Hp84Tf55hUjo2vu8dhnbhPii8EF",
  "key4": "41UQDCGnujjakQkSjKwB1xpnZTF1MgWxh1u8Dvm6CAdYxzKhBLQZSng3CEXDDix2WUXwXcV1igUHv3ewmcSc8CnJ",
  "key5": "4WaN4Vhbjf1xnW5qD1oXpomZceXvPfjERdcEYhCgu7v1JBC27KjnQVL4dZkDCCQGQcuiEydYadjULsXmsnJ3UpzY",
  "key6": "4i9VcWcS3VM3Lbd5UVqkmS8gfCzA5QEw8DRNn7ogJhKpuC8aSyoDdUvvADXE7Cj9hYYX7j7uHPRm4ifP3Mhgkvpf",
  "key7": "5HEVqMzht4ov74JfVMDwb7fJ6AiDhmJG2JV6bwVFvRXPABsdagVqdmYp1Da87RKarztuS88wvJKDBi8NsXJAJ3WB",
  "key8": "2GTGVaUPNcAwGWGsYxw4UQBZK3LwTc7HmLRWDit3kzr3k7FPJcsXxmZhyN4qGExyE4BVmXngZHuyjU5yiYQ3H8DW",
  "key9": "4JDx7CV3EjJdqNs2BrdSQC7tbd6WQvnKd1eis4Zu8Xk6q3VCGoVEBXp5WBLSCu8hNdMCVh1ozbmPfqzU3BGcFLEU",
  "key10": "2frmn8ebbzCMQAKT438WSqDtSScY8tLDE9ovUko8pXUeHh4NaXKQmTLQJKBXANymHF95kbio2NvQtywHmasrLNcV",
  "key11": "MvJCA3fXRaCkiQdhisKZf15LNP8J9b3B88NzCDBQGmb3h2WJaWGX2EhLnqXJXeHFrM7MxwQTWpopAGvknV7VFgR",
  "key12": "Fq4WRAdFLeuBamxtY2MsAywd7bPpqXD8oD2wY4jgFTpsRoBgRAj2R22TERj3jk5Xw8hkEkkxZ7ySrdML43pwB7c",
  "key13": "3hvoVLgJBLgdM7MUFa37b8t1bhdMEsYKw9dPxUkWRwA9MTTrfo4xW9nF7SvXds5pdbC67LM1sQ9Kd8Q27Y78EftM",
  "key14": "4ch44vbkAeeZpG3AzgsFcyJ2MwfvmoG9iTFMJZLn5SfBAuui1272eeyPNeYExqn7dPQYLuGGR46Zg31MrUHLweLE",
  "key15": "4GLSVR86DK79vT1bfWc9zhgjdXQgwVkWkpnQAiURF6JhVpNfy7gYQD3Xte8ifsQRXktUcqCS8dtnt39WNnEmYvZc",
  "key16": "HfTZxwNr5hcMXsEW3ihBy8zfa9qqESgRNeuPyZeMQQXLngX2GjCnH2pap4xb4iy7YzuhM6LTnMD26sUQx4ttBV3",
  "key17": "CidQUmqewiukCh1ctEKmSAykXNhdDmJqAcxNfxB5MtQEzkifEswCGAXHGwXxRssq9skX2JVfiqA2QMeJDN3fxwR",
  "key18": "5V5mW8pCZT6FPxSuos9hAsJ8MHw8nG3C7eP5aqb6eREawZybYMyviL2CpcjE9Gzf7c8qT2Y3jKDUf9WRThEB8udE",
  "key19": "3Mpb12Cy67AdsHpRnyCa3QAbGBrkkhDLH96wKcVwAnKP5P1H5eb4q2DnGHoJhkTadz9v8Dpa5kgixHoVt1urXCx4",
  "key20": "5Afz4xsVcjwbMxe9H5ZGKCczvRzJvnFsfKXniJADLz3HEdARKH1vx7F5pNZ6tV1Mdn8hSff1uDCA8ZiX8xUe8XNG",
  "key21": "36dkwBhdq7WUf9Xe6bpPXwametbBy1CzqF9DiYtTagLsopm9PBHWwFDmt2swHRAoDGHrMrSBfLWuQ4J4sB4E8ucU",
  "key22": "HHmSGNo8z78pxxn5N66tB8YTrzbBTL1UEapthjFJhVUuVwxYk6kg6mELFCNCq8Um1MjWxq1CfgbpMrEHQqpPnrm",
  "key23": "2wWcgWGxFgUEkoHZ8nb3M9s6dWhYkT7oz7Jc2Ad56jG9F1tZrr4okk324YeayDLjW2zJRNYrdB7wtmxXXGT1Xu8g",
  "key24": "2k4V1NrqPKFUgLpdBkoNgGfmeaSPD4QKvjkQNLSJCPwruqa9k3j8mzSB5DnWetyPccy911vXs7UJxkV3S6L8uv37",
  "key25": "587KvPm2drmfY3KN6L9MGFkzerMWxgny4KzAAHSCsaM72aAHuoxSSC2gb1b9FwvjmWeikD3GiHDpe4mtv79tk3Zj",
  "key26": "4q1LHRtoMUzMLtqePhumRxo1pre23cnSD52Zam1pbf28rDdroLibq6RcreRtHLCcmLNRdzH821kHdr1JjGunSiEP",
  "key27": "4YM19ttjp2uAVbdUMtX5Jne1LMNb1ssNBAZRp1b3UbxLAf7bbzeNYCLQRYFa4ZXz5EtZ3RwbowWVkKxjLBmkQ7Yw",
  "key28": "2WpVrVEYJJqwW5z6PZKXTYV3NEjXwh2HnDuRPdLbrkEfAm4JhcX5A8AYp2YTqir2jdtcvidaitENBhYB2XxooYCP",
  "key29": "5Lmn7RgjybMJFALQs2mKZTDX6f2CSbE9JyL2tRbh57g2tr5WaR9TQgfCKisfDY4p4B6qB3UsYLNthQwV72BQAKdU",
  "key30": "RTfK43giqTTTUDwW3DDR6o8kn8m2CMtakHtbrDofqFiHHQU2Nm7f6xaJ8o85HfkmP9XCh5aKMnboYYjNyykh6zr",
  "key31": "23WCJTmfPid9XT11a62m7NXPQw6HqdweqQi4Si599UMRyuSY2H2GYLwVzuYHZs6Ysd6CLQ4yt2bEev3dUaEvNBiv",
  "key32": "2zFwiAC4SBFFMSZLW8PpLEs7cS5KjNQ9Yxu4uBFRGi9x146Y3Yo5DQWuNis5PGpPmUSaRo6qTCJtbz7jYdfy1YC1",
  "key33": "59xG1CEMtJiPxDRaHrASuudEr9REzfiqefWZ5Phz6GSheBUSeVhWPtGnTtr9DJ1tvbN5msuB9jDQrsySwMCwrQwi",
  "key34": "heyzqUzs5EDLupjnvhqyEVoXsU9Z9JgygfYg3TvQ3sttK7C44T1GKPSUBvCE3b32LgJ2xX72KVC1wNwaq6qxcCB",
  "key35": "2VyXAektV2RLVEDtpDAgmZhtK3ARxs8eaGkUnkFoHbonKfcj9EWKVxWjbReAScZBv4G3WGJyaQQjAiTeupTHvkb8"
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
