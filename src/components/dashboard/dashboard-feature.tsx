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
    "2Kf1TZY27uFv8xokSw8K7ayVyURDALKv3Dr9i52tEskEszmqcz4oEpEzh3aJDS4wth4GyPw223dRG7SzvoEjYtcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31wdHoZAh7d1gH2nSFuetNa88p6ymRtpZGP1ED3uubEqfU1NyywK3nMyyuV3qffYYVQrVQ3zyeUHTaAZM1uU1An1",
  "key1": "AD2GMrE2hfMq48PNHpeMqWqr62H7e9MTxSKxkvaHizm1HkNeUB9PHVAE7WZWvQtW6MqP8nCSdV3aQBJvvLswphk",
  "key2": "4i4N339oMrybmaHQSmTvg2VdcfXbaWqPQxiS2KbUHDixDwdyK9TMc1z31UGgSvXKsDhNE7pYM6sxVBS1sBeCd2yN",
  "key3": "36SemUghyojqu13dqf1RWW86T4dMwL63Hdfv6pL6TzwYoSJeaedDZZxSMWNoTPuqbchqiTwZf1bPWN7t1zg7wP4U",
  "key4": "2o29kSBtJxB2wMme723QwzhrN5QPoouRq9juwBqXDFHihtNKvYaNGCo94dobGZ8MhB1uPAoZsxSzDzuyFjjWeCz5",
  "key5": "42f834dDLkuianD7vAJTdbv7oUgboo4sasvP5qwgZwpAz7NwnKRcSCCQGg7zcVAXSCmgL3dtBEp5o6C58aCBddtG",
  "key6": "2VTsUXnyHYGffApXiL5s62Ugrq6sV2EzHGE1yZkxBhB4p5UokKYWipWWSd1QjtkU2Mc2S8UNr9aDNMMmPiMmqmzq",
  "key7": "3VRVLQFEBPFmJgZTH5JRzCWoC57jiTLJuA8ZQmJF8LNauSJYn1tUjkiB4xxgPwvBB3sSr57xtqdmvnTe4TVLb2Ja",
  "key8": "4WRDLnzW9K4wgxYeskXdcwFbohnnUpdh1VVCddKfcasxvbnVP2cBUv7pnCKT5JKXPBo6HznbUw46kY7wNEQhiSSD",
  "key9": "3cpxSmMUMYxytpLV948FqzijNMdhtv64ZXf4JuPWczt7icoAxU9ZNdD1R7zwKF1kwXs1PbvotsoZtMt9u4Kvj4w4",
  "key10": "rRVqd3qCxhobv2BxL9MU7j8G8yVnRzaskciub5iXC2nWgLEfGsbSYzh5Mo7xGZ3h15XWKkR1S3SDwDs6wN179H2",
  "key11": "31t2eoCaunuECDZ81DyZwtC1VqW9xArhWRxVk3Bv2Agkh5av3LEfYMthJeAfrajZLjhPBMTjCKVTj339ztW38Af8",
  "key12": "67ihTXK736Y1xZ3KD8E5R9oxMX7aaCqpnK71zVHnq8Z6gw8avhWmPPn6VieeePgYiVjcVAh7H4i81EN8JYSao6fY",
  "key13": "3WDE8twauBRUsGMe7Rir4v8cwmQbneGrj6kxsNm8T5E587QEjX64mi2VXjyoJfjqMCNRzPQguvy9TS7oCvxfen3X",
  "key14": "2S1t2y9TDJKhi5vsohnCqSR8wyyuPyE89RXnNwFV485Q6myy716T35g5LZwdcUeDwfbFac9qjhAxgb8PoSgjXykf",
  "key15": "4bj25hbxzuSohovfKEVkqL1bkhFNx9bcjvpjWmkkRBfLHuNxgyMJ2h8r1KfsNo9bLLjpxGmAWM2sTHKrcJnr92Af",
  "key16": "56NaYmNqTb6ydZK65m7o22BARYEwKGzFjeSJQDCe6aw3yBJPMmk9697UAafpBneJpQ5YSFrvCVndYyAm3vfmLwxm",
  "key17": "5ViwdNXGxaYWDBZ9w454uC8phHoXwsn6PNkwYniRmfuJKaeDmPspRB89pr5TvNhZdjtvFHN4hioZLF9jsDbnAVa6",
  "key18": "Ye5MCQpM6v8w6CyqdzMXmPVVDLLzAcXbX9sYMWXVKJUYdkxFLYXEseQLTuVgM24sczQ7u8NeiD2KW1Leq8EbQQ8",
  "key19": "dCjcne1rRFskXMDjo8cyC3yJ6m3YsHFqt9V1861ggF5AnTq9ZhTkuJqhzNZLcd6oi7cy4uvrYufSxKo1DMzsSQF",
  "key20": "257QzfdeAAvbHTL9FHWkiN3aVQB1dSUhxaYiPfFVTBnmYK4beTzePjpesXRviaabuV8BWJsqcBZkrBm837Wusypg",
  "key21": "4bL8WGqpydSHQrU1S2cxNcYCuhx8aeafnx4eDS13Ra2hc6GYWLJoxaknV6hQHeQ1CykUSHUasxS6FRWxJZXtxMqN",
  "key22": "58vStfPZoGtFySqCioTBjwxE5VEN9oYjKzQ8eQt24TdJpPE5rPXoTz1BPTTqnAAYzwV2NxEkFktrnwqAKNxczG1h",
  "key23": "45CxCYnC2fwZPe4SjRFCcpNUGrK6SaTDD7JKmaw1CmpjaSecxUirW2NsUiuMJacei75i1sdcou6gisuXFWU9bKcd",
  "key24": "3eqF4eLggh1zyFwicNfBg37H8P1LFi2ujPeWgyP8pqF5JJNMZRa2wD1cFA9JY1F8HTRGMiLUHMscufz9FS526xHL",
  "key25": "AazyAznqn1xq24jeQGsPPo3jJVb62QFs8Tmnsxm7AhdVjsNegbK939uLZXRi8h1doWiZ7zMQKFJTRFHR6muZ7iG",
  "key26": "3BNYaGXzPhrrdn6FCzjTGJVbpHacX3RoZ2ADdSs6WRGMFLZjDPdgBgUrZmHN1xEGdL4d7yCtFEHLjRmX6ZLkvSvA",
  "key27": "9FvgKEigcqCVrjeRK9hu8rSQGWDy8hubyRMwj4fGcWUzaCki6MHDE76zmgtyZjXdqoERhRXjiPKdUkJeqAHPsni",
  "key28": "5nT88MKuoCSYy81ajMfgfjbBrzzxiyUNJfcJETE7UmmioAqdrW6moTZ89Uaqxvn4BbCazDye5Qggxh8PuxkKrfpx",
  "key29": "22QHxXVm2kxHaUQAf45BUwz7mgFD3ayzdHvjGj1oDX68YvbiimrDyLTbQb8ZzPBx3J2gfBQ54fPNyXGPcUqsiNq9",
  "key30": "5b2YijNYR7UwoA39RhXZxK1EKUtKZabfvSyMhh8KmGzfd6vRASfzZVdXJmSW9c8B4Nw71K1G8F1PYfqS6jt4rdNi",
  "key31": "peB7TiMD4m8C2rkzGXh27iSLsWMiGDTjtT4rwBN2D63P3T9pEJ4Za6UW8PGjJ7epBJrYs9m544MQUA4aoHy5AGk",
  "key32": "4XAQWRTBhyihCCPPaSgv7wSX5DxhtdkcZU5ZymtVgMPUPe8SyfKvaPaBr4buKKCAWC2kqjxKE8FxrpBrP66KUZhx",
  "key33": "2UFiZrLGsJyxdVb7TQWb327Nf7mRsfhrQbZXhW8VsbxXb6QBYUEb2hTpwqdSpYaqjSXE7B48YcP7J6tbLxVRTfqd",
  "key34": "LKJjUEeL7gcSUsKe2koCwwstx6jTdkJbpkRQDfbmfb9m634n1q4ZcepQcgDHxsQSD83rAXA9oZ8xfrT4kBr6mfN",
  "key35": "3mAd2hjyiHUf9sxb5xxPYQYRSJUB4bD8NNdPSry9kQSVnTEj3ZWZ3ZMBFy3GHhjm9bCY2LVAhuw4hbYebxqfJJ2J",
  "key36": "4X7pJGHMvU1dZ4rNFSia1YepvXs5mFLySaMkwua8UBE7BuXm2M6yFTYZNewBFK16rZpEHbQZ3dBjSMuiDKHAiYdz",
  "key37": "5249EuQLsLWVeHvWB2iWJ6aBxiPXtHpCpWqFvrVNQ46YKBm82rGcSGeM7u8mVomFWpxbR7aBJhMe9xpWkb9A6eZm"
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
