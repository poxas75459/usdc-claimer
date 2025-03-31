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
    "3tvhDGj6NQyT9mQcoLNqXZHX4cwEuPr6snvojEHP7YmLTApyFsZG6mWW7nf5Ucw42gw5TUuGW8VzJApmUQzQYCKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wi84JPQk2Xk4jeK7mLzLLCm4fbrVspDKQh53MzyeXg2yYw62GqjvAAAZFGHjUq4LVve1JVU3bupcYoENuyHYA15",
  "key1": "5JzhmoY916zADwt4MKAUg1k2ubDTnDrD7kCcdappx5ndJFpgL12SxrMTg9PrS9vh8JR5fHcD5C218R7GyT4A9j8B",
  "key2": "4rxbaDDE2xtY4W7tfa58p2tsbKfpJAxWuVL8zhCpomtsfoTGsEThvhn9f2DiGQS2TY4kw41y3vNes8CJxGEdGpBf",
  "key3": "5wsjtJVhpiW4iCiHDkx4ATkvZ4w9Wot9NTPnoRfaLBDoaoJnpmqGd3Jp3VoqtbMsCid9y5ZUotUGGHZEzuAVpRaH",
  "key4": "5jqZRpdj2sDqSHn7hjGfpGy4JVpEsyugcyWLYy5AR79sjqMx4T9RpfAbEfr5En8zYPFYa66gefEqX7y2ffFgX9We",
  "key5": "45Rxw9PLAMdRznTSkcuFpbjq6QnRWutEyVDfxWbHy4NEG7sC8kqkss6V918AS32o35nk9yAAv7mekDWp6oKkjD6a",
  "key6": "yVv2XZXzi9tUhA1ccc7dgFUzTFWDJAxPaKotE64gmgMMYc2CSttSDqYuHaVVconVKn2c78UCquzxxJcbQws7n56",
  "key7": "3ocouj1V22gwLno9bEfDemUPCB3kYpNRPiTsKdMRxfnx3dNwz4F4jXWeh4rftTY6tB95kHUbRqgdfJ5iVfWAvw8s",
  "key8": "5KUbtS2DnaamqecTDqE6Y84NCKc4K6baPnjUw4YtRi4UTA1XEsGyAW6bKDvgxpyc62t8MPUhm4dhK1d8yRWcScyQ",
  "key9": "5nvbKADjZqDGmTZDEvGEyFViHADGKRMRrfG6mcmnbbpoM5n2pznR7v8syr4E9MfDxRaikMVdYy25XrB25X6G2JH2",
  "key10": "3tpKVrYKaHiwJKzyRLKZd82g2fCLzbB7LpsAj3r2jyDyxLEtWeshqJq7bkRucqhHKX6uDB55TVjwhm6cypV1bshm",
  "key11": "2fDBX9zD4ueqc4Sb3toZh1uenbn6DVGYcK5yX8ovFNA5zrME1ffSUFtTBNX5btqcdL1cPUqxSePMBQYV37pvphcH",
  "key12": "3iHBctZLpvvuahPoRvRRyvaj8aY9G6eYbtoFMpcHzpF98mc18xQdnGkixH3pGSDRGxzNuhtTTyqdhEFnmucdJF5C",
  "key13": "yV5mX6pUftCE6sjn42HfZ7RTZ8L2LFpWCwQLZzF61rwhYft3CdQhasCb9FLmt6PrhTfZKcgbk64M8ptTjz3WyAh",
  "key14": "5hEkkd4rXAaq5badK9rV7EYsjpbkLrxFS8SZKd6yH5fGTLQ3Q5aqeuYG4S4moF8avVfenaxGQQw2y3vDWX69ahdZ",
  "key15": "5TcMSgYQoTbzG99MW41qx4Xkw7VVGWdr6EranJJ2FEWmFHzCSKt1C5T8ipseahCckkoCD8SSh1ZnQRh9mBpstnah",
  "key16": "5M3TLWRNUhrYnTJ2iPALQ5iMSGqduxiJnh6ef3ozhBHMoqG9tFqhqwKXko4sBXh2LCNeLWYbGFyYSD8z6DPvExkb",
  "key17": "5o2DUxCpEVAFHVFzaH25CBpkPXNc15AToMx95SvMv67AHA1mQfT3ZbA4XdgW7JkjX13gdW3hSqTfhemmkGUfGxYb",
  "key18": "4bW98EuDyAVkGpYFEPoHe8feLqZSQacyRjD4Ms1qhEr3LLoC7kua2xMgeu73JZaoyJxqN83wGMmZqBS2ahGtz18Y",
  "key19": "5s2ZvZhnajreUusehxSzzyCvajx2VJ1UoZxpeHHGJHrhpMun79n6872EX9aa3ykmjQXsg225J6U7RP3NEmhZcWZ5",
  "key20": "4WaT3eAGafLwXJZLN74bqK79izzBNtexxeYoauXsbcjS5YmbSo1RyULmZKdoGQt7d582C72yqokGtnhGMJiz3JnE",
  "key21": "HzqeEbJp6pNdUTXHfXraeJHgB7BthTWUPXKapy1CFL4d1rKsGja6D7VcCjuikvq2MZF5BVvhMhEr4vyxi4jbBjb",
  "key22": "6Bf8gMW1HovZsaDeMCgqL7JqSUk7QwM5jiyu1QSiLhBqiyXRNYCRwB7m3tUk6iQ7eEVwLfRnkKdXXCCW6ew2s6n",
  "key23": "4n4GRYz43VpGW3BQcYUS2tLwHSmiiBoebymdy9sjwrE7tfbUA8NWpNbDnQ5mUK2T5hqR72pqWUo9uKw4SGEBpQSp",
  "key24": "3TaoZL3yUv399RPf9FYhkFcTyM3dTmX7myUan4PpBDHdKYxBJdKg9i3PS36LWsmhqyvGEnKbDHXiagdvc3DvHs3",
  "key25": "2jcc4YX11Kyq2aCogYwMFWmXZeoTka6uP564jQGDdXxdhD4sihfHYvTUSjocpJsxZPksAUJfGUyqrwR5D7MhW6Mq",
  "key26": "2tuQv3Y7w1TbWQpZuDvuwksierBRWTTjsewjsE4c5gNXfqTZ72N59CBkPgK71QU1LodxsxAVJha3N7SekdEVZRY1",
  "key27": "2RQu8GsfJ7yUZ9tQ1gjXdUVrq2mYWM75QYPvRS25PwbX9bu4xCpUpTf6k4q1VjRU7w75PmmVTkB75QGMV5VY6RUd",
  "key28": "JQvLQjNHdPuCqXSFAKvr3wNBD6bZXxNnbvuEX4XNpgEUrwDGYuyNmDScSYVqWFBUhuqj8Wfe1YswzmsvU4MBGmr",
  "key29": "2w8TzQLvMXVoVK3B5CgfwuHgtS8HfmFgTETKQg7QoXbEkK1XPNYSmwao4E4kfPF34aVSK96cQru6UnzPCRsqHyyG",
  "key30": "4FDtRcomgU28uENrcDDymAGZuwYH9ALExPRWENKxd2D4BXcg3TQ3yqCU44NjihVNnUQq7YX9tUkY9qQn2xU2L6rL",
  "key31": "5sLP3vEgZg4LNeKyJhRAJiVGtEotq5b154jHTDLb2wQdcL5EXQqa57NuyAUUQxmfXJm7LQNnEtH3yxuDdZERp2Q3"
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
