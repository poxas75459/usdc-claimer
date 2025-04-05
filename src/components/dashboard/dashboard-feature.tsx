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
    "bJcqmHN84pktJGy12g6j4XG7Uh3uYJuAKvyCf65SuFvTowsngJZVTGAEBoJuG1vdMqYz8pRs9k1p3AnzGaReENe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57K3WwHzvnVxdQjSvvCrzKZZKf665Ztd5A4Mhvce7EBQ1ZNsTYPX5YRpEgXgNEAN6gVLespzrhU6NsaCRAcLfZYV",
  "key1": "5Td6nWYMeaPwRvm7SEyYWuJBZx4iU4cvmMxsFnzRmWVuDHJhymn2FoDnbKDk89nX4KW38SyadFR8z4D3VgaWAA4f",
  "key2": "4LH4BwcZebxoo3SR6PE7DD2L1DTxwhZHq96xTLypBVbwpjTGd9Rgg5r9gAMUt5Zp2tvRtYXz87Jg9WoXs5fNhhw6",
  "key3": "jZ1cafkjUhhb5jtGcSKMtEL4fJ8hHhrrnZPamDAmHrAB7PccBXKsvCjecnsr61wZEXdg7LYTXFnxTfns3vNP5Sb",
  "key4": "2GYfxD9iEBTmxzq72UBTHUYRWiCugG9cLn6Bam5pWQ9rbu436QtS6kWgeR9AwSgDVk8BQgHPvpkVArncfszZwfyT",
  "key5": "4FBuRuXh7GhmSt69n2RCmmXNoRdki8WcTrBKEdWZPXSPJ4FbFrg83tXH5GCZsXK64kCQeYX121pvu8AF3YtYyZum",
  "key6": "VHkmoFrzbLjg2Kwo8HbjeK7yE1fFUoFmKSmiAPZLpZi6oanoBaJoHf4Ppqk5tVX1N2P6N9cG6qPxL7FHqiZMCae",
  "key7": "46NkxH8hg3MRYyXb6GczjFHqaCwVozcWSNDcLr361iYAixwQYhqgqtXwPA6sLsmB2s39aDHaADAba2uK1FBnSzRL",
  "key8": "4dvGP8G3CY2DPN2V9SUDFvJAYd2e7ABzMFk4aLfGXLPpLMqh6JAw8vtKhk5BiWZd5dRpFXm2TrArFz8ZmgyATpx7",
  "key9": "65sbEsGKk1oxRAUdf1BYbfAgBn2MC8KJUkHeiQxNVSQriT6snLewaBUVoLTwsbnQGSvmt6g9eF2qvyAg1CtxKEDZ",
  "key10": "2TuvXgnXuGs6dTdhENxaAxs13wvx9gfWLVink4EBP5z3C88GFjUMcKUe5MSarCADQWDxFjV25BiHGJubu2XawpmB",
  "key11": "5w7P9UWrJfpvdueigdyoCRmERJgPeWskjguzUHzoevRTJYgwio2mwipXWbDZxiatBgpdfHvtzgp57jSF6GiMPyjy",
  "key12": "5PTJpfFVLasDQwL3qfE1YkxCu5WSVEZNT6u6SUy6K8FSY5fX9os6oJYmQsCkkcEF9LMbRhEm3Kot5NSxKUU5yA9T",
  "key13": "38UyyegreoQervYAtHuhQNwYgonJhodPCLA5ykEYuu4HdQZjwaTqestpVghtYrMciATHtV5bXZXb6SnZmcsQLXFp",
  "key14": "5jDzJr46HBbKDm2S3TFrwkqNVfPqpnY3YBYpgqVw4zHSLCr4yTdgjWhsVuUsQLNxvMgjVeFGQMoZPezyB9nuUwiy",
  "key15": "TaFL4qroxydPph8LZbCMDBt5gWqw7pAdQ5Rh4szrt4cXZZZkdrVC18E15mftHws1YcH64Bdxxog48dFTr9XHVCF",
  "key16": "3gC4QCkBwRQo2YXnKmF9jZi9oSUqjwCnEgWFT6J2CyC6VZBdfKkaCzBWPvbbEZnYAeqXcxF8wQDiYyFE7Qq86duG",
  "key17": "65t8BDUPo5XQGUjQmEnrMibEZsnyGJZh7rSnBZaf5i8N2VTuqkwRYuugiaJQVp3HdnBMowGrkjpprDwFQe1nRwVy",
  "key18": "2CMMGsFwR2Sbjcv772qtPCtK3cnEm9BErKfEwuqHu6auvevkzC3Tg3Brp6rWiiy24ZcvzjxuZpYu8iA3Wd9W1D9W",
  "key19": "5ttXe78EB6pcwqG3DfDPjHeaByue3Pgb9Y9fYKVirUyRZEYLckM1fpRPpJGafbZmhv7sqNmTAAsG4TYdV4ktE3nP",
  "key20": "sJEGwy1jdUGxEP9tvaBLS2RYFtyMneUygiHrGCZ9NLi2pj3Ufk61b8BZHmVugB1bmTikT1VD2PLyPJ7oZthjwNq",
  "key21": "4zRb1bqqKLWe4gk7dAJmP5SVP6fniYWYnq8DY2M48ctFGJRN5uAmdZ7nLhnqMtai2vQtQkdNJrzM1BGbqH4PfNnk",
  "key22": "65BBvBW21phDLuhPzoHbBUkLRQcXqc6msHiF35X7Huw2VYHbMcSWjewtzYUv6SNucwuWYAbixR7NcbHPFRkoBpxx",
  "key23": "3m6XLkZMqW51vEbe6AjKRizmrgDjdDMTYBgnW877zNg3S6PTXEj5T16xPi3n6nWf8ZXYczjGhfCdrnsV6kfNQa6R",
  "key24": "3wWYRNNovVNTLSTK162E8ghWvM7gtWtvcFb6TuCkQYUic6usR7bYoHCjnWaqmBTXe9RqqXESoV7QsRT4r2BXAear",
  "key25": "4WTDPVCNxzHDhWwehxrGsEYFgekiDDrnyv3k3FcBdQQ3f1MKKhd1F2Q16Xjb687Pt7zaYSXHwDmNDWUNUkR6LTq2",
  "key26": "3wbJ521cPj2BXwH6v4VqtzWHAJGtAaFadCX1sXHtx11pMfAKQepCWKTBLkJn17vg7UNfVXRK7FkqQng5f8Mse2sG",
  "key27": "tQzEaHNXFb6iSYHsRQ7pcEABz7CLgtBHiUXao1NLHdxKKiXiBEfky7UCC383Gy9ebwApvnppS3kYfP8EAXQi4un",
  "key28": "2vBx5P14fNFMekSgnEFJqF4977b6ZNzX6xQ9gbbMMvLUSieTRUw4iPm7MaSKkkh6E8ZL6ftkFLxVTLodtPYCAjyE",
  "key29": "36gZshmpaKAVy5LqTxAbykmwhxoZv2eSy6ES9Guk8LDHcYYvGvZ6q77oSVUHg7msgLFPwMsA4sFmsXZEQotmzhMC",
  "key30": "JxfuNLjq3NQ4Li8dq9tRonEZNFxYvYbGHrR3cooUiLGvqVDjXz8oaE886rb1aFV4c8GUZdkEEJze3ShfsKyXkAV",
  "key31": "37wzNo6DUGjEXyqMNp9fsV9F5XJyT6PsaAhrBqRLUu3oLLvuhpgaMV8WuzT8HqqVoXNzjhRLMV5kPxdvRovwzsYg",
  "key32": "5G8ixXUPZkPKuAMfgUoi4Y94D4GaBMTqZ6iaQRgqzgorZodFSqEu9kMvz7nxaffQkjNhoQDGb66zniEwjimiCYzW",
  "key33": "2aVfZaGjJQtZ16K9s3Zp8GNN7ZW7nTf2npoCb5Z4EPww8f1MtyX2y1SmGPnDpnRpdt8tnkZLGrUZAvdRiC14P2sx",
  "key34": "3fT1YiP2187XwgvhkDz3ghRUtsp8QNZSbpveZJrfutKJTZgY8xGPfC8QeeGv2umCCY1dNXbSoPpjrGUxmQYbciZg",
  "key35": "5maaqsRvY77h4hQsuEFYaMj52aN7wyJKeM1JRUQC6zyuf6AEWpuZz76LGLEbEJLw7HQ2VeyZ2oyjMs1kYXhWfmWs",
  "key36": "5YwgXKyMX2sq4twvmrNZrdihmwvPMjLuNoD86qXja8J7C6b3dCzsZm2hJZHsrnYwAYYhYM6bhCUjqrefrY3ZMVj9",
  "key37": "64f2tWE8tcBgHsPf6agYkJhEK66mnrCjBzarDeDE2ZMhsQYKcKxWprocqpTcAq4uFHqD4kWwXUVhqYkfTrjYmVsQ",
  "key38": "Fm6hZPN1SXNDjeX1xzFNsfkA1iWY8EqwcEhXEZ2374YgWXE6sXPXxCzutJfk9PALtQVGWGEzbVzMajvc9Qqbr68",
  "key39": "8VjQFyAPThauFWfWKp2RDpRK22QbksbNczX7zpBaaZnpEQS7CFuVEoZJsbMsREGXeuZKKhb6XFq11QANfbiBzoe",
  "key40": "5tcM4iA33WEj3SnYB8jGo5iaos73jMh9KJcW8YxcziraL1PgRXMZeW4ceKUekF5udKp6JhBx9saX1LhqZWL4VNgC",
  "key41": "2nGApmPF87onk6VGLQtzYTsU1srcudbKqnTa6AEs2AkyWgNH9YkbPYuWiYpzRTU4LEkLf8qLeZHrkjjMZER2NfsC",
  "key42": "4V1WjHu8k1khdCTjFDSqLDrAaTWR5C3RWXs4hJSj5YbbcWU3wgW3S1LgvZ7FqvtBuAXUV2j64TAFf4mRBeHreByv",
  "key43": "DcYCukrod86pgq3T7wrjTqvAApknSskEyzU5u4FxiZkJodgM6gKBykDbLAuiriJ6ghdhraAZuVom11d258h39Cu",
  "key44": "4PH8npyLxZsxmQXxmaCKRWY3SJZ8evujTv9cZ66Kd21WUQeaHrMyHQ1BxujN4g9wcWC4Y1iaqjA1xTmvMhLnWaBZ",
  "key45": "5CRiV9Vih7RkbLkt2QtvEeAq9vRXVDH7Mk9cxyvj1Z3XkeNooBqywrT9cAUXv98bUKoSaYi4TsXt9iL8WtgPfe7S",
  "key46": "3AQBejBeCAxzecNChG9gapKMaWQssTmgeLQxWe7H8coW9cJPxaH1HqKhrvZd9xSKokW1yPBYFWV4ZGQEW4oz1NFy",
  "key47": "2TQL6ArL6jy1GbS8L4s2RbbnBzsfpf38TB2UTxrQqJQCd81uShUsAgGcUH3ZU2i47rJ9phtXbggp9n8gwnniMtF5"
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
