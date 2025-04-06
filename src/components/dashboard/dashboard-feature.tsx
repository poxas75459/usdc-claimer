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
    "5pBLaaKiMv7pvcnXGvRUi4AcG3va6n7eoiqHPZqh77kgRarudQs4Acijw8f3PGs3APUzV9QjofSLQ3d1RXQUJhmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LwsbWNZfMMYvpUy2Bdg1T37xfJtsQR46DRVU3W7FiwJGfLAk9nzPA4TosHSD51vxcHsUKAyzMVSiVNoTw2uE6PE",
  "key1": "37djRsAxmdgdzjUTKBXCV2Q77g6Hk3x3gLAbeqNUMFoTefzSfaP51rJWreKP9sbddnzXMgX7Lx5mN7wNkWPNkEA5",
  "key2": "g5LRF54wz9YSMcuUojwGrD8g1Q1KaLBnNhHdeUin2RPvvoz1gMPyYhJvtiUTjCascshpN32mBMqw7Z7ToeU514j",
  "key3": "bgc3NmKw6489oPsdik6jafjXBGGHMYqtdr5sSbMRmU6npkgQ8iwQV3P6QDTxZeXrPuXyaqyiTjj86YbowpvFwu2",
  "key4": "3A8Ter23yc5r9Sp26uSddgkmPVCqgQx2jSiVRGJKC8UatdjjRcATkcn9GUbX19KA2saWz6hkrhu7qkEsoYLncfHN",
  "key5": "2Szgk9QcBjGhPJFAA8oZtsEvHwcFw7Btaor215M7HA4aoe9YMfLTgYGvT9oVAPES3S4UoFpv8MBNQrLHKabVmyDC",
  "key6": "daqQ4VEhsSqA3EMiDimPbk5nHcPdQ6a1R9J3raoMTrkgK79ifGhVc6FcQsM6SQzKcwCt5VcL2tVbjiG4cWkXFej",
  "key7": "LVwqJzGsqCeT5a6qrqcEPftoW7eJV5d1nmy2Hiq2DBGKm7d97kCJew2RkRrGuA6Dci38xRch4jLgW2vqjT5waSs",
  "key8": "4hv33p2km6NzRYeS1JiqcRJERwVkihq61QL3Vdk2gkxpYx52Z1ixgKwoqwaLvZFmZM5XXxvnopykpM58CdtzyskU",
  "key9": "28uWcgLmXmCMscE9HctMU6G4XfBxYeCzkMLASSTfb8H3Lqi3LhmNL1YbBUwt7zH2fHPAGiRaEP7JZASNEdkrwYds",
  "key10": "3KYBpV5wyQYJJgRKqzN9awaATb94NnCBbcv6dPtsmbnnR7v3SvRqjzQGo99HAn2qF6ZQ3Fm8zoTR3XKiSctHEXmd",
  "key11": "39NCSDnPEvo91UustdXXjz97TK8QZHUjpYejgWadXZPqHQDBUJmQuTcM4Fg6nnPGZpcU6pnr96izVDVJHRDwqw57",
  "key12": "4drkNXDrf4gYfPeXiWLB5NaZEk8inF8NqcgJGYUovbYNbHhbu4EqXu1CCEsBtuTpLp5SQnuqaXPtKuhFX4tPDRf1",
  "key13": "48LJSG81LSeKpQPWEGUnC2fnzkvZHuUW4MKymkVMS5tXcP5zzAxCrLYzewKW9gH1kT1kjUGH1mzsPjsqWT97XRvX",
  "key14": "4wzM6EDoBkiqLQMLoCtVnMQTHKEzejAKWJHm1xJvuFnhhzJkVbVgbqHjjHvNhM39JBUikCdwKkqSms9zbpgKygmV",
  "key15": "672rZw9dN7ATVXdtRyQVt63p8aShCFZsWoTm65JBuqVaCJoA27ePCAjUWJxfNkrRj9nuQ3fGngpuc1E2GcSum1qu",
  "key16": "21bKNP4rrythw1BLDDzpdUmGwsHGWnu2d9CY6LjbWcxU12rLCoePdkXSgaXKt3rXviGQifpXxnmKmbehrxTVX4H2",
  "key17": "3p7wuayPCr6qg1qyP7w3rk71bPXCuSZToQWMWBkQi1VxDtn3brNQU1ncfhC6bDRk2aNR7rkQc5PjshgwMLNL7k3w",
  "key18": "9QRSoo3mXFmNx1N8uJaGLvpG3cPewqXi7sHCMqiHCa5u6PXvG6nJ8BPJMPjM7bbN3wxbJooCPvnc2SfCgRVMttB",
  "key19": "PvCfDqxvy481YEUzRRxC5gqbnZGaCoRW2ey2xNAhR2PYy7BLbh3z19H2v9wqLsd8MrcdCnUBqYhssN9TUJy3Gcz",
  "key20": "LLRMqkwYK4q4axHL1qX5ySHDQLTRXT8gFtYochrdAcJKEMzYMo3gcpZPcyiatUV5zVMYbzHC9hxGu4wSmALTKT5",
  "key21": "5Q1sPrhc5bPkD6MTXKf8ke4RqRAdnk6yWTarZNZ7Qxhkr6B5gyAwQdbTw4NQyAmKHLJRW72QSEwwb1uv4w3E3YEp",
  "key22": "5Uvk53LZiaDRGgu6D6DcZoeKRTHSsSCuWyAv4zVhjJQTLZoVvKEqnq43GfwCuYcAFoBxgpV34TVcoaafiSFJE1aZ",
  "key23": "38rbjFypvAQyR1peaA3PiyrL2B8mms9NaxFBjy4GMHeSi9ufWJW6U5CmCUwV8PgyNPpHGWqFLFspKFqTioDzNPof",
  "key24": "4Dzk9iaxEtGn3KUh8C245JP7Q41wGwurDHasSH5xAiHBM1uyrdaAjeNFJVThghmefKNu3hDg9RAJHkTmm9PxEqAB",
  "key25": "NkqoThNYJXMJ38q95zXumbmDmHpSAaHDxF5S6eBcSsT9aBbvB7MW7GBpHijpat69VWy3hVuWin7649jNejduu54",
  "key26": "NmfmmZbeMNVesQYGvnNUwykjtXMY72dsKPEMUEAiFSkaJVsK7KfZvkmB55j3QuKAHqK95aouhcDaun8mnvZFXac",
  "key27": "5iK9NEwjcemmupeB2Xh241D1FEUBqoicTbvgNHBWWpz2YVWWNxxtUGrMh9QwBhQrTXa5gV6BC38jNcS1n5oSK4vQ",
  "key28": "647WbYxt6EVoHkZPdNYwNFrgpzRQDNL5Jo4K4zvREx5GwJnDfdyfbrhdRBrPYeH9ELPxjwM8e915EsSc1KzYCCmT",
  "key29": "5jZaTS9ADTQG7Y29qzyC3cANE9WhVmNiyjxEKS8P1RdTuLLgWMsCDKHdhvM8p3TifFxAd15cUSVqBAADBtWEdbWJ",
  "key30": "5YENpSaSDyZ4WrfEgwdU4v2LGMAvxaSy7dzxkMrjCQN3jbTdKUFyU543fUeNCrwNCUcCedtEdWqwjkUG4GqrQTSu",
  "key31": "43gUUfm7rnYDRZvKaGArCSvRsiAHG3JY7Z61w94ejz6QXuSxJkhsdWBKEaVWG2tQPNjswub2iUWHNjopCCfPWYqF",
  "key32": "3Jiub7zGuXh1dAfnJj5NzA21yJhmSjyGp6kp3CPrGZ4aKMVx7gmYnbFReHKB72BavAUpaa1cte9uDBos2egfyai",
  "key33": "3JheSGnfu3qamRXfQr3hgYws3zkvW2H1vt89m8yNspa5V3mqdZZfzSMEbP1K3GWm59cmJYFAmyAjyaBsEu5MhDH1",
  "key34": "2SEiJHMocdqhjL6YoR3rnT96VG2tEyQR7UKDmvGcRLwdxANS96wA3ADvpD3UC94vG9oL8zqoXWSTid19chAFnKta",
  "key35": "5hProBmvaujNYZXMX6hmprv19tdrHMzqANqwhSAGvzCL7ohicqj6j2gkP6k8aKPVfZbhJKrK5K6Z4JhzDZ1yLzpf",
  "key36": "ChLRQmpzQRufTC93G354eYWy5j26f9zqQxeQEMRVLv3eRcaJt8YZGovKUnTdk1raxLatKg1t7GKhAu4hBNrSdRw",
  "key37": "5qLTd7YYC5HGWnTPz8pWtFnzkQqbEYybbKZZKxJQRMA53LsR7mJWfizt7rLGnKkWn68B6mvA4X6q13Tz7ZdwAePq",
  "key38": "2PQ5Amc6HhqspPjzUdRq9ckvVBRLBwjV5CmRpWZ4hLcfL2bedXpSe29diYoyiyQyoDumjQA3uJgCX9ASo3NdknAa",
  "key39": "gZEKzPMoQzXEwW5UM1GcUPkXPRhTU4iMTGkgM1F8a8jCqkbZmiG2QnJeV5mrwDhZWr4MAaJh6zUUR5F6p7uEuSA",
  "key40": "f3LsHc11QkpHNtFhgy6mSZKbGEwivTxgDCZs6UmUp4ouGe3HU4J3htK1H3ddWzKCsJvFF1WWXyN59ZGfXnnHMWc",
  "key41": "5EbGW9RU2SEy9vqCAviyGjYqP2pyQtNjtGhfrFFWYYMnr1Nv95BrNebyguGVFMsAxi5h7CT9w59n2xwJ7N1e1Lcz",
  "key42": "4NNsBCNLTQT5ULdsdKQ7tcUtgd2vNWuySPBJwwg8uwzfKT3rywHQDW8WbsPVgcfbB8P3pCSEcAZUr4JALLQ1X8vx",
  "key43": "4XYfg8MCVGsyzPnkvmfi7FQJuYZkdLCCtUHkuCJgqBoSHkCFxvznnHqW961iFt8PbjF2VZrriatiuh8Bk5xGb967",
  "key44": "3BDHuF8VwR1sGAXgzqky2rY2XLPftssfGGuwvSviWQC9UG3cm5RNvoNRwpX2jPsEcXtqN9CbkDAGanxCSpinJbqT",
  "key45": "2FCq4fTMWaP9UopQTXjMxtxzfcj29TEyMXchL7iDW73rRFuNnsE8v3YsEJRy9QcXm65jiKJFnZGY7MwRwLVgMj8B",
  "key46": "5h7G16BMEsnFiD5aXH8Nf4dRkDpQDCYuU5S4t1hbKT4LCNC1t5UtSugynMTQ2xAisMmvEsZkKBjXnEtAEV2G5YNf",
  "key47": "3mnMY3eeiXLVMorvvfcmMY12AE2WdNszpguY7MBdp4oxvVc33hmrgxasWd4Y9ZE1raPzzvuyQ7Be92t3JxH4Z48U",
  "key48": "2667GntqL7wJKpFNsovKGXiJwyyYFt3kecZY2NNo7jM5zJ45Mw5MgxmVRBJKUhdydHnNZ4BYERoenMoHpxNHs8U5"
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
