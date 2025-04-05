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
    "5tkVLvbwmUiNpdpmwDziikLhuxoAf3FweX6iRGKr8exiLo1Udp1RvfJ9kKEj7g7XH6q4WHtD4sNusd4WPdabhgJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eNAmTszWZLFRdqoCuURmWrsfUE4zAfZbjiskZXugqa6u8jxSuvHZJQLtqQyLP7pnG5LtttyniKSnE5Nvu7Dexjv",
  "key1": "hx6sgvd1WgMzJodds4Z84AwSFcP2K3nXCsh2bBkBKzrLmQogsVY5oGCo8wkrdLAdgummunnry16Y3cfcJazdUZH",
  "key2": "4BPohKxXn5zW3A4KWtp1fhVtnidzb68XCwKaV7KiAE7HN7VUErZZUA15c9EH6b8qtQcddAbpSRXqy3bBdYBum48j",
  "key3": "2djhArAhYTushRVpU6U1xkpbs1A3pQ9stiK1uFLsT45NJR89grt4tQ8sqW1LNj1GR7XcJnm8Kh6wYHb6fS3LvZZt",
  "key4": "37vhsZfNtTJCbt62kgkseLA9apeneTG7xh34KzggNibLz8aWpLh9RnT47krPWQ5MdkcKGGtfQG3A9tqZfnAtJZYP",
  "key5": "5Q8TGvwGawaWTAnV6MS1WgNHZUPWGSEaLBo6z4j8LQ2dq1aErdeejpwnanA1tCziJpxjtjbntHyVzpugzCidUfCL",
  "key6": "5Pd519ZAZPiux6sdZJDKyZ3XaHS8oGknxARouGrSpDuMvNNR2fVvyAHZuB6zvsqSXjoXvVQM2usFuQicKu6vMMS4",
  "key7": "6nBazUECm1auu6RtqCVdCtT2obykanEDL3Vb5uT3PMqDLcZgPgnyKhJ5ojrAcZQV1ftzkPCVFs5bmiLdewFwhFo",
  "key8": "2jAjeS5NwbW5wpQkSR2Hg1cSumf8zekfN4xRyFf9iksf18jfA8gF8f2gxxbs2RySwVwkUJkCASSxR3JowcDExcBd",
  "key9": "347FbbSi9ziaw29S874VNX96ss9FspC5FNxbWk3kRnShfkjVcX1GpNpKA7USPXEVHRbZN7YJCvs7pVYi9upQUCXi",
  "key10": "46pTEmMqZsVbaQzEqYz2Y5jZNrz3Af75vZtkP5gpby7o3dcxqDyk1z41wRpg3s7Q4mGKE3Wwy8mw5Dkr7Wtfqu31",
  "key11": "4zfM1LSJT8ZKKoN6tD1LfUJU3An2DueLca9u718bfAUy6ihceG6nufKg1d2Uq97ioBANpiJRisYeXtav3p35YPCK",
  "key12": "4EYyXeeYoJU3WtWm3gjmb4n73QndKRncm6mznVDv15cwyDQYHBSeot1UE2GrtL5xiH8Ci3eiuDVQG8djzJRb9i6",
  "key13": "uLcmCvRxUb6z5xj6zsfKHWJGY337Etum7X5gywRCwwpRWKMKqe6nk36CRBefgvBvVbuidvoPKkBjqeAs6Q8Rugm",
  "key14": "qyXMs7vN1jwUau8e9hNZh4upRK9XEqkTaC9VHyvXccZQDbJKxnJ5Lx3YPLKUvLL2kmRd3ykhZGBYgjuihbvqaSP",
  "key15": "46WdNucyypt6DQJj6ENugQcyDYjRBR59SvkdYVf8hBks26ui1hbzZuYvvtvnPQ7f55Mt78WqpxV4zVo5iZcW4nZa",
  "key16": "4wsaXvQXEu26vbhqKbcC11R3ULv8HDDdMnhaSFPbrRR4GqC6E9u2CUbiHd1aGFjyWB48mEnhPpghqwzFwYNRWBgb",
  "key17": "5VN6iDDvZDrVP4LRMGhKHAWGDJ7h3hRbwNAfcFPkGVsztVc1HrhRcpXyD7qeZkmK8mCnsLW1oVbUnXwm6rEWBtX2",
  "key18": "44byvXac13fjhpQZKwLZPVozTmzWgH5U9URRrfx8KmWAotD7rnxN7axPXNcFjAPmswqqdvzjjvCD2NtuHT91nALo",
  "key19": "29ASoy6V6X926yFFF5gjsUX4B5hUsyjFftgH8sYs882rAD5JMcRHnLxudqfmvke5PT5nDU4opRJJjAxHeUxEpjX3",
  "key20": "4nPV3jukjm2Tw95MsXrinWS3t9nJAozRG7bufFwYAYzPt7udapss44cDS7peKVM2NwKduceuwyG4tGAhkLyqRFS4",
  "key21": "a6uXuAjdTo9taz5KaUWvVbXRSGsHS3WRfjGxR6JkYXYyDTtSWQAsNy2ave5mcabq9PyzYxwkk5ycp7XmxMz8e6X",
  "key22": "5NhSH45BZkKayHN7dRigdvcbJWVZUd3xvp28rf8Z2deTLFJK3U64K1nFuEvTaHtVBAssny8yAacgwEMCxBgJq2a1",
  "key23": "5LegCjBswrT84cCMz2fCaN4zNfVCaETAKyedTdrBW8bLM56vwMQcMAxWCgbwBu5BBtiJEfnbRVskRjcGTUmGNnVu",
  "key24": "4AHUYbBRYQCRwZfnTLr2pTYR6dUiGrGLmJ1LaryXXPGWxFF1d7oSQJt1vgQ7d19w9MohFiZ2iAhZZ783bvgDKAL6",
  "key25": "3jTKmnF1enoD7KZff3e3gRRxEQc4y9m4e1eEty8r1xqBFwdQELVgMP8894Meaca3pJZJ3tzykH8dr2wa1vyfFjzw",
  "key26": "5YN2wuhmRG4hHy8XtQE1tayGhNoipgpjQ8JnV2HGhRcCz1tX3RhciXBrtwvk6VdronAY2qD4hVnbYwHEEJ9asbpL",
  "key27": "2jVHBVKc9Djm4efSxRo62NErasjQdhTSXri9KMnczQS6KnpvmQeTkFzywvR1hsXAviHneQktNfZdqXUWdbpHNX2H",
  "key28": "CirhEePZpi1h3Ft385s8AEUnbwK2jTwUysDP9YSh8TYFhtM3Am1U7VbrkNiEMPW6NJi8oFfnMp73iMzHea65dXD"
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
