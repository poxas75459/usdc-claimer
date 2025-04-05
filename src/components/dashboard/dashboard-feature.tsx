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
    "4BV1F6Ubhgf3ip2eRTeqe2Vgn4th67cLVBaXSbjb9D3YsnSk8P9fQHak7hV7SC7qsgWGoXQU4bK1U4CYEPoWrVEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eyZzw96moCHmNwgLi8MRzKLFLDrL9C1qEPGu4j5EinBbdcZtvL7wPfkjQzqftohzhuuVWeqeQVWe2Zscc6m2PjC",
  "key1": "3d1LLBzAw2QvDouygE9YC1f4HxWCnhMatg31LMfg3efRpoXTNFiCp5aTfcYUYzjqDQsXaofa8oAWEAD539Hhtt9V",
  "key2": "WEJY7xoWGvYX8c5CFxGWcysXDmWURmRx4H5X4gf3moZq4uPKkYqntSaFgESYGHQDGMyrd8yCUWsjJYWZYLEF6jx",
  "key3": "5yQtuSiJYnMZudjHogmqwXpDQacVAStxnYkZo4WqNKaP49zHBZ9NbwssmpZvuTW3vE8i8KMyRJqvwxrcmi6a9JmW",
  "key4": "5P9z1KQ3bt6CCPKVG8DogfYz5jc2cbHPhG4r97yZj62mLZXNeSqc7SgWzGWPSoTNodkyQ5eNTVcosJyQ63U6RXBe",
  "key5": "37WzWy79CHXeBs71RC26PmLr8sfS2E6ejw1LsMKtHZ4dFG9a4UtELZHHegzz6gn26H89gSAtKK5hVDm5tvWeBshR",
  "key6": "3vM4isu4mMqz8JzjfWCMawa95UUtPHhRmgC5eNw8BBPgUjcdCHN1BZCT8vQkLJsyNMyzpqswe9tQXJPEeenehqFS",
  "key7": "5pHcHyhb1F3EEToGbZwXcTGPnneGQb9BmrEMLaeXEFgyHfpYAZAnPvgK2Wa2iJF429LS6dcmJ8PMVtyoeJmK4qv7",
  "key8": "4kbySBNxjmon2bGBfMuGgfFumFDPyRS6mGUVc8d6wR2vBMSM4cQD6GzVw1ASgzpeeFEKjVkLJpinV1ND6RMETyKN",
  "key9": "35tWnUNSgndzpJHtKBw3vpuYNevUK2Nq2BSRqgLjRmZRjiFixTu4YDqcHng9UFW1wyb7rLmbks9aja2reRpCAG9m",
  "key10": "4nACWeuXhNSUoz8iBPhPMd5KiypQ8TaeB8xYbyKkhY5n1Wd3u2NnkEHSyky9JGNhTRch8n4voV7X5aLHEoYkfu5k",
  "key11": "5wMDt9E6Gzy77P5Z8fUeMfEZBkjq8MQ58sLnZSE355fXtxZFbMvgVzvQVxqKREk2axVpkgFxprpD3pfm8v7Xxpjt",
  "key12": "22uM5cpSYCk3r34AaECsE2tCBsR1VT6hYyuo227Gjsev9nYoWpUbJcKoUEGvUL3k9gfUuyhwAJUWEaLxBd27YEPA",
  "key13": "279wjRnS4TfcEq9xYEt6W7KCCZQ6NZ8nsGx3sCwTP2xszUas8G3S8EbfP7ptf5ganUYhkZVRYFzpFpvp8w5VmLjt",
  "key14": "4fGomKc7w4MDLwbgzKMq8cwaWK3jtW59xyjSscXeCuAMv27MWrMMpfAiWvixnUkJdveZoRRcL119vi2UuycMt6Yi",
  "key15": "57LoXP95kk93USZJK7uL9c1Mg2UDsekwS6JVeH6p1GW4VKytUvBqYEzW71cZSUZgz1omFyXFTShZsnhXMSU5bBM5",
  "key16": "V4NGyTGirnPem9RsAHhGXY9thLdQsobEG4oarQTLXg97DwyjDJCtBzGek4iSjq9q7beDCbieg4mL1b85EPenG24",
  "key17": "4NQQPZ9C6UD9RRfgkmu9dEvGntEANZ6qhn2yfQcbs9Sob9AZjAdQWApqG1w1DohiktP2pBdcEzEfa4gLbQD8YhAo",
  "key18": "66k7xgT2Dhe264MdjhaNS5wiULEos1PJcWiNcnxBex4QuhED8Q22hTihgyyvY9umFAggYePmicTRMBgxYJm3aaug",
  "key19": "66WD2uBA8aWybkwD7PmRHwhtXYNgLcePn6L4pMimeN82kox2SZxPYkFGkaYJn9wD4h3XzA1GoGsYcjwxDvJ3Qyod",
  "key20": "5ZYveopdB6HPA8CAcsurUnF16wLvFvN96nD47hPY6ai1z4WrgkJkLmrRnGT7axbZPGRxL4exysqeeZwxEWCoiUG3",
  "key21": "4o1GQ28YUmKojL4BABEZmLhDBqbErWuYssAr3HD6SQgtqHFXPtn5muk2LU6SpjrmvRsaz5dkn9sM6q6XFSBT7orR",
  "key22": "3hKk6BTFxGHzj1527uVc7ykRakZykB4WHrNdmFptKRzvynqeXpaqLKMM3qyUtCdDgq725JQ4BXjFK9DqTM27k88w",
  "key23": "2q38AqDiXnrWt2a6bxgJNdnbFDhwSxN1Ess23gy49vpKcfFLp9L2hxzaJJRcGZatCXsc9wRSSaQeHi2H4igtept9",
  "key24": "npSuTdj1dyoSMguLpvrKuFex3krqSm3LL6LPk2jTHLiJM2H87JwLb449iiauMjaDdQ8w2XkAXCbJf8hhb13Hiq1",
  "key25": "5RqKW9GzvY67ZiErk562i9C5NrfLr4LzvaKnG9Gd85gzPndeMYN2oGswQCD7Rbuf5cap1jb8A3MLahJCFLTQJvFp",
  "key26": "2aWiAJ7CMQgbCAvTXiaXR3VXmsXbGZ9Zq3E2BNSxFpx9vF3i9qTjRthM6t617cq1PgnwsUBB3E2Tc1KnNtma5Gym",
  "key27": "4cAXaFjhNfF2iYaVCXMP6U1nJZutLWtL7KAZg7dGkS7qujLkB9yziLG4BFU5xKF44bV6ps957GzJ388GBPXJXJyQ",
  "key28": "4VAJs3JfRdpnLbo8ubjPJqoRmibwe6y9QqYwDpVL2vaN9io4diwCV9dokgdRY1AiD48y4wpMPfMKP2iBR7Y3NCtE",
  "key29": "4DfFFX7ThSJiPqb5HF9it97yFpk4KAM3rQMXnSUSeREmjXWfh8ysRyCR4afATiEV57o9hD5Y1BEwKLDNpKbpBHWu",
  "key30": "rW3LC55JxJC17JNcHQv1znCJAa9QaBtTa9mvo6GZLhuVVVo3L6hvcUrpCbfEuRyQteMQ4emM4SY4gae5tA8j13T",
  "key31": "3JveWAXAdUBXhjNjgbrTKyzC3KFnGGBgieVNvrTiA4zCwioNC3haFQEUbgBgnU26564GLtqeQyRFyZBzMHBeZ2tp",
  "key32": "3DfZk1Kpyf13zmWDgR2jJrLEV3CuQ85J1ck4sNyrmVG9A2q2bztq2pLr7XGECXHtfStJrSerwWEuE4z93dxPE9DU",
  "key33": "2wsnDqrs8RHbjQb14SR9bzRk69n2stXhUnQPf3fE6ooAaGHVr2eE8qAN6p48rFNNg7tgDxUe2WsKRJ6X8sKQazjg",
  "key34": "5aNWfhW8QNYKHrz224XhzpBLjWKMWhehZoZeQs1jiQYj3jjbRJuCmDn2NAKP45mMxnJmkqt73UymTajbR8curZni",
  "key35": "qfK4wBLQ3m6vHAZFf29A3k3RPNK2NoGFZWJERmuXpwGxg8942r1NhSptfpXpLKNiNX2jb9wsrynVAD5AtmVe24s",
  "key36": "5g2GvtVzDVSQQzqcchCBzVmwZoExtZy7vn7wyaMZGYSf4DtSUb7Ssmd62QgZ1BgGRiV5kMgQNQREJYHsVSe2UKeo",
  "key37": "2nq5rHydYJ5YBekNXs4VHrcxYZHsX6Tu5cQWpdZHqnfRVk5idMsTBfiPJyvo27uNNUJbFsKKJZ6wqbmn9ZfZBvC1",
  "key38": "5FABosojK7UNGr6GqTJP1Lc6e4r8vJKQjNMyUkVCNfXCedKD1aZPATivQ1VMpt1hRQY1Qmta15edsbSzMnP9xtQT"
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
