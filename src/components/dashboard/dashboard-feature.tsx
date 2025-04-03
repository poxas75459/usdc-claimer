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
    "5M3h5481LBGQEiNZTfc5oVBjT68Hma73SY4BUb73oZ9Y1F2MeHE7YGJhUDsw8uuMAFH6t3Pg9xE4XJfUFqepvigo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QJC2gHAiDxjaq1cwUgN95ueoYqf61aEKVAnpyKSYDWBHYdB47yXbXcFTXJfEkScBBuUSfUdYNUzumijYy9RCvQo",
  "key1": "4MfcGwjGsze61jS3vkPRSNUoAbwTBhNa6QRnMNoczY68xz5s2jv4QKyrNRTCZ2i1Uf65HYS2p48XAvVxq8xRbSU1",
  "key2": "3H1Jp1x4bQtWMgV853MNmdm8cBkEUqrEUdMsUbeZUGmDxqYtaJsfqBdx8Qrv2gbzt7jnExzgKcMHqf5wem6cY8Qi",
  "key3": "2yBvK8JexxcqWA67rBx2eFVcMDQmYgjRoTt3jL7QpXGzT5tjXnrf9FJTmYbV5SkV2S5mMLZSyVDevvgmxN68dwVr",
  "key4": "59PvXGnJPecXpmSZdAqotdQvSykUagDULxL7gKanZdUvNhwspB18owt7znMfJiiTD4YRh2srzRy25hNWqT57jtip",
  "key5": "ktwkEKHraqJG3rezKoypJUHpPM4Skrt9Raa5TXMuACqLKhzCU7PS72osykjf8Nnhxpb1UvSSfQ1xKtKu2HvAesE",
  "key6": "YVC47az6DWf9b8v1RqsNRLnSfnecW4qMX21Kp9BsHq77TW6ggWKd7Goey47kKQAgnhBibKv5F4uZZ8SuisiEsRe",
  "key7": "5FGjqJ3igJNfjRac7E5Gb2evvJcWoDv5RLJC6jDk5nPbaATjZPNE5tLvrsL8ck7cctTmEBLrndw31xUpr8ZVhLKL",
  "key8": "3U6N8QvuvRj6huHFmGuJkatyFJNpvWL1NxYKeVAKH62gSRcy7ZUmMfQFREX5JtpQsALCnsZLyeHy9aif5PagD2Am",
  "key9": "2ugptzHRLsbuz5FabgVtThV2e1jmfc8ZK2MQHFtroGJKAWw9S1cmCFsPiFHCZR184oASNpD2YFmaSxrc8tUsbFxN",
  "key10": "22u3uJg8XWFiifEB35Yj16qBsZr57Q9CTD2fsom45k1ghfdkrYYbKRr7RDgxHJ6tjJea1yspd7Wfi7yWbFG4cW3v",
  "key11": "2eqLF69BjoLzifNyASGMyBgiFHn8pZHzsjrSyQMBKoe1VTAd91q9EPBUvJs6NuSoftqCVaw9C9kJj9FHiEhoEWcg",
  "key12": "5fdTnTZW1fiqvm9Pos7MsBQXxymDLQ96bNEwgcWCL4WkgxnYJCaMpEGbW11Zsqo8myuMftfdQNU1oRgFbQAuLSHP",
  "key13": "5nxKjQXivYiR5H7a5FZY8Nyycc262kEHb5KDcLxsf6AABYgVG1TUzC3deN4A5S2boBzQuYTX1U8RLbMETie1EuF6",
  "key14": "4L6sihCJtPQeYi5bcd9UtnCWqjhK4brJnUwsbksWRk8ZiaCSy3keFAqdgSiSosL7qiJHrHLNcLEcUe3RFKkAHBLH",
  "key15": "FCmVThigt5v35QDNRomF3VG8Gt5CHGPsuZLjYd7a5wDw6bHeYe6DSXu7ykwVkaxqVJ6YfjT7xQkwDpM3tjRxTE8",
  "key16": "3WSg9CuD18Sm4f9VQN7LJg6V8tHpEpNFfgQw9N2r9PjyVF7deWtftESoWjf9KsBiyoxxXXssLQ7ySnoULs77k9Hg",
  "key17": "5o36QYxJcdVPYBGapjA5HpjdxmRy2phfQ9A2geuaumFK28u43PLTSJeFUceJLuqNtr6Jis8ePH7LphkhLqrgTG5o",
  "key18": "3A7VUqNfFRTmSmS8zNrYXp5HmWo3MkYCEUgNd3z4BwhD4E7Uwh2XdK4g3E4hqnA1f1GnqfPdWU4BkK95VijypMjG",
  "key19": "ZoGCypmR6DTGRqqyMoDc5pgENxY1pufGWF5qyrt3B7Za2cHMKD4rk9nwcZB1uqzqGa295pa5ttLGK2VPn6UsZ68",
  "key20": "pRZ63KED9fXvSUby1VghJ2hKCiREyFid82aFE8oTQDKYdARcbCEqK8tgDw9ERRjDU881UK5esn9XLB8SemadMV3",
  "key21": "5wZxFrNL1Cg5uqbf68X1HMMTQ4ZSCuadDhiJp9UmGDpX5Xt729RgJ3u6WMSM1dP8gAJRBUZG1VFnZmK2ciA5x1QY",
  "key22": "fqkXPjKPptKhV9QBeZ3dQ11cV5PcLfpxEXbrYjBxuME3M9xwvVTKWDf5zAUhTm8Hu4L8eWKCuFoCdeqizYwAGwV",
  "key23": "4mQQP7zxPNVXHUeVRP8RSasuZCLRRomtxgANPkVETr4RggCC94RomNWUVPAnGpEcVodyuUgfTQ6H37HJmrncMbco",
  "key24": "39nWjaCSnAZF4BctWjCqVawke5PMz4ng6akoJkr6mV7Dwqw4As18UWAUZD47ELMSxDg1j8KmCVs6q1yATHPsaWnP",
  "key25": "MzeXd3V6odhjzKFCEtNStzHYnkFHkRrH1v9Me224sdeGZ4ooShfkAZiwPkeP1kSHqrQ7F8bq8Tggf9qAGFHo3BT",
  "key26": "2VMD1rcMBrMYRmEK5PdMG3fDwVUyjxnaubXuLcqTzthyYxoAYstN4isiojN6HZsxQsiNzJT3cFLAC25RGHK1LBPe",
  "key27": "2uXjY4sEh1ZmWT1f5LxxpQSsy8NCnArihSDQVHsDtS4gMqMAXeJE3dtquhMp9jxDrfu7rwKYt6pjhfLfiB3hk3AJ",
  "key28": "56dVG4sWwMAxudFob1wiePJWuXswvnLniFgqp86MsAgDveWfoSXi4Azs9ipYTnBuvTsAjULbNzrToUVvZS5q5mfV",
  "key29": "66EEfYZgfFyAqx4vxWNjCkraS8QdLt14ZE9zRA5FoA68BTvaszdPPPWMdZbM1PtHgtzXTCrHFve7MyeZKPRR3ef7",
  "key30": "3Y8F1H25Ab5tv7F1vHz17xmuqk6QNs3PYuUg5dvRGh2YvcTe3wyBGAD4rv3xTUMQz9RuMYnCT4VU5Cuq1pZfd1ue"
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
