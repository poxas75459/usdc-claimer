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
    "4R8wZJUMvKhfBd49Pb8cLUu3FuszrUwkeFQ98jQtSYcfaU6tWEewWge2DX2NU6zU4uJYyyM63CTnJkGyy9yyDwh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iqYQ5epWza7Hs8g58L5mp64GMEgPCxSztzips8JMSsm6Ghtyo9e6S5K1PjTQyg7xkqepeTrTH9ngaf3Qi95vPzb",
  "key1": "2Fmb25FSCXVZ885NZjrCef2fT51zmoVB1mGDnnJxQKPbyhY1HPBZSzGYuUJAjzAayvMVk7qhVbxXMKyMhqjXnFmb",
  "key2": "4q1FXJvzbYPTvR1DyZ1deas3Sg7nF4PeoZvMrBmj36P5wMmoQSAy1RyqCZS2R6TrGHyvABhi5QBffykBabWXv9Yn",
  "key3": "4J6TS8Xy9AG58gvJo5HfCvRyvExRBFVLumUhmECZvXeESrzKo1s2GEgJvLDzFjPFfN9HsQ9KhvKyisnBCMQ1k1xK",
  "key4": "kMdK8ZnFs3gE5hb9RthGgKfMNUZZPy5QY8v8qG4ZzsFn2ekYi5LM7sxDWayN6pGgttjc1NCqEf8fUnG4wEmeACk",
  "key5": "3LpN1JytXc5jFdipwxm4GSUCREPGWWDRXsbKXiDfUxp116Be4VNt7LaqhXtvd6aPh2uNjD8EDfCUkxFJrhRSsRar",
  "key6": "3rM1i1AjnKfXuXsFr7QdjaXtrcXrGXoXogxvUwf2AmX6J9jdvVc7TbAVhUmt1rNhzSRbgeRGSWAqCfYLt8q58qfZ",
  "key7": "59Vvtmd2zKfwsapVaDZ9jduWq6fy2Ti2k3EQbV6zLAYaadxmKGg6tmaQBXjakLGAp8xWyA5YefAp84e5v6mQxdmj",
  "key8": "3xSwVcptEsKHsVPv6MMwsFKVr7nXpB6DrsGgJbNwkjVV5eBMHFJfigkcnbccauFy1ZzKVk2RScaDGQCj7MTiytut",
  "key9": "5saSzp5u8921EySrRVLRUk1JkBZyAn7uvDamtnX4ChxahEj2oCAbNypBdsouZ4HciqLryapYyLeV79x2YSPiRzNB",
  "key10": "2LC48z7oYjpN5DX2kTd1cB1Prh4x38AHet8LQpWsBLdxYXFnRzD3uEaf5zbCYLFSBc1Fy6cnHSfwrBp25nWyjYu7",
  "key11": "3p86LyszPSn2RwiUPUGNfUg5bcQJuvs7arhQRMzS1xVXGdvA3R2Yz2Njj8haPhTZSmga5JKCaacAboRH7w9pFVHD",
  "key12": "5uKXpbRqiT3JrwGJSiDv892hG7ZuarYGw9FFD3ZVgg8icKkJSu1fTWDNkHnhemKN4q6QG3zJQYjuaQtdupBA5qg4",
  "key13": "25XZy14TBgEnRQoRNP8VawsxdG7B9Dqasg5idPhMPot8oDBLJYSAz9nWbC5BudgC1SUFx2fR2scivK9zvVszCiTA",
  "key14": "4Jp5BfXmcPqU4q8FU5ZNHG1LDnx3ZXWp9aEBR8L8tRKwX85eRAmyPzwNiqDmV2ffMmpBB5se6fUmhhyPgHUXeumH",
  "key15": "29F5dxxWuPe39ADFbwLjPKM9Jc3yL1BYJLMyvu3YFEgCyVnZQYEK6NEEuoXdfEcp5m3BZisE6QKTsqxNM6iP8s7J",
  "key16": "iHd8ETLwReEyRZVbgpE2Lzwd8RGah6UwVzxsv3uLnhgjuzwVx8i6x1c1BPr8tLU4vi5ajE87psfgdyq2P4rGBuW",
  "key17": "ADB7DwsGgkNNzHj5rn8iG3wJBAjoQQmR32U3h2xwqDVUBojZcCV8KRbnTWxn474Hstqy2DDnYaBz9fuan8Upq5L",
  "key18": "2kWumxA24cZMLMMuipuPpWDyvpWDPv5iNBwjUSvaGMUbmJmTKya3KF5PUyEuDu5pLWnHXKZqyhf4YQvENjUtF5GW",
  "key19": "45hD9ZfWJCPapcDCjtCj916dC9cR6ydxxeEndzaGgWhw4NjXBqJkLbTrHvLQ9ac5yCAMgegkwzodiWFpn1FjGFk6",
  "key20": "2d7zzr3FVbCrkrU3fvoesSMmsqaRTs6uP49Af23kRAWHpEsBSSf24Gz3ZGduykgFrXzm29Q5BYqsmAp8vscj9Gfa",
  "key21": "5jsiLECPPcu5axjnQE7qSJDCp5CnTa7akdwanx45FPATHFqQ1qrUZFBciC68PyQTzTYDGtLuaqW1mZLPcbgF5ZTn",
  "key22": "3WCZY2aiWeCD51uhuWciqFgDgYb88nc8G4DJbwDHfoG6E8QvkkmmvVw6Auy6Y2Bc3rWYWoKyaJ4gigXtKrji5qvi",
  "key23": "4jcdYs8TDZU5Pbmk88bu2tSBHCsqnt1Y7thPbf1wzQdrkYpJmfo8tfjGVnwYFQvDGG7kTeSrbwz5S8rxvjJG4u9B",
  "key24": "4xjATFbMZpTWmEXNsqJE8doqefcXcruEHBSmymcHVJfkBxM6VTmgXj7j8UPGp2kkDJzKd1x1dhtdErc6HcLtjtLG",
  "key25": "R2Ne5EbPajeWSbJHF7TzhP9Xm3prv7JCDQG9tmoaMGfzdcnJi8N5M4YdG5xyYZQ3kAKvgVMU3oX8eqgnNULJtku",
  "key26": "4wQ1eTLC678DApdVJDxgwwHquGQDTphZnDPKEi87kJ67QrXWqim8hU22VxYcmAaeEz327bGPWSVwFGedWnGXoPfA",
  "key27": "5QeE5T3ADsscrtTxBbrFgqiLQLifpf2CqvbmJhHJBusxmsG7G7UZXXHkMwNTxfFS48E84D3MCQwz75sUDfh7EcNF",
  "key28": "4qpCuVKiLgxQGMAu4VVcmqiuecKcUPzEysNy76xbzNfv3uxRZ7N5dfau7TY3obcNXivC63L9wAvAL8pEB1BqDb3R",
  "key29": "2rsXrrKyCpmzyLXgXRJzgWgG6muVkzspuhHJLdVbA2qt1rKaJTG5BAzksuMeW9KaaLXbkjY6py2Uxp9U2Di7n1zE",
  "key30": "5eXqC1NwefYwzB5WeGHaMathChZ7Pkbozz9ax4j6KsMjP1acDw7VeChXEhgYeNX9bJKJbcmMDQ2L5qzgTXNaLg2Z",
  "key31": "5A48DA2HxUHyTqwiC5LK6mdzEMwSRUB9M737oLA12A3xBcBNSB5woi5AVAVHwZvoVzvbhNu3nTFrdrpzUSzU8dph",
  "key32": "2e8WzgCKCg4wFGMy9DC7C6dhM4WVZ54V1x1nfhGjYRpCt9Ui8VCpffy4C6JMb9b96m7tVezwEBQhafskKL7nAepN",
  "key33": "irhKUvKxC37Ac661wsC7mLynW4pwknLaAUuxmFCQmfXth22CGz1xRrpavDgPSWsBbbgw4JwnWmEoP1HE9RJQzzJ",
  "key34": "5Qj411asLy3QfjZRZ9EdxJAvDtZ1vMFjug2r8aJqKfu9234yPBKQ1LynUG2MT2TXz6QoF3qt6tpeStgbTw6RcxSM",
  "key35": "2913R9QyCpPnqdLbYnQQivFhDCmkVqWFMcRzdVw3DZrfY1uX9SVfAAPAXRL194BQoAH4Q1WfmMmbKwCxPbyEjeqc",
  "key36": "67qGVyhx7uisuCvaxCrvdZZnrLMzj9uTZmTsbfFhRZUdmadUzNzv1Eg8tsDwzYK8ciZSgkbNMa9CQrTt81vQNLZr",
  "key37": "2Fo9ydH7GVuJ8LdUyBuZMQte5FDrbMqjRsfDQpYsu9G8REPerpDnTN3s3sYkfCCAcXobYSPgTGNbhP4hPBaHy7Xf",
  "key38": "3ZKzR67z8CsQ3udAGb4eYyMAkKfftEr6M6bjUrEk6dNihfQ2AtwBtsDpgrdqp8eMkD2Q7Ys3asGk5A7JbxKf1FkL",
  "key39": "53gUjAYRG6WHcTBujAmNvDz89HHXWueemr7Gv3CRGHESrMpFCa5kafJm5orgL3w5g9W4htm2XL4wAmkqjNxERdnm",
  "key40": "39eejnjAjsWZ77mHfBKnRXKmjvzmT2dRWyiS45oZRADo974EkDcGtVFyY8GyQSqHWcTnLykkaZkM4tgomToznDCN"
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
