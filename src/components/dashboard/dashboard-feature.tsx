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
    "3h73WiHirL6szYdh8UhpG6QXZ99XtdKA4f2FZREgwztAShHfpRy6iaNFRgeRWwTe4PWtYQkjhZ1dAp5qufsPJXCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XDBCxatSZuWYFXHVcsWeKqsQFSvhAbk43HFfh8S2KwRGBdFb7ndzThhRfW2QLCDV731MKDBzF6Uv1mPvY2675N5",
  "key1": "454FfAtkuZnK9LZS6tKNe7jDn3JHJtbDbkJ6f8bcP1mGHMyczqg3PpiqncBji8PxtmhR93E4hWt7wjSfFPAvq3qa",
  "key2": "5qQKYY7FKePBU5GDvTNUDYUA5fcMfBkprXD6JjZTfUpxD88MVNs7DcGh78nceuzPvm6im6keRbgJ4yEftvSGK74L",
  "key3": "5bi8xdQx2qAuhv2MqEb5nRqCMWY1t6yk1pj1uKiaR4eZXfunTWrQHwh7BBxGPYxJ6Ykmj7eerG8Yk8Z9WVT7vMEc",
  "key4": "2CojaNwbwrCd211qDhTxEzc1nNf6Uj3wPRnqFeZZN4fMBvsV8ubgphkB55THgatQcZ18JvqCN52LxPiwN6f1eSM6",
  "key5": "2Tq8GRG6sC6vmaKspDDojUFbbMrToaRPEF3EkoRBjuTcjsPuuedXX2SRdUSGsR3EzhYwc66DHiBWJhb5Pw7LdBJs",
  "key6": "2xpDSQ5raSVc7E6D7z8a5RmRcsL3Sf8KsVuspEDfghBHkxB2ef7LtcvEs8XEMv2dDJ3MdKSexbkGzkZwtnts8jqK",
  "key7": "2FxZC73RougZVvZvUGx9AGyyhKPWLanb39Qh4fExLHdGooGiCkcp2LMMzAMELG6ZTUaYYD694VqKvsgA8Z83to7R",
  "key8": "3Dy9LDsxb9UkXpE88aMXvCphEGPf7CqHBCuxPk5HoAAaV3gAx7GUewsN1dWEgJ1ZuMXBj9gbtHh9U3i5gMUUCFop",
  "key9": "3s5Ku3AeuiphAVN3f1KzJbDzyfFXsieaMJQdEKhUEUEmufYbKWYa7HJzSZxevEbmQH29C3dneFyvXNgYUyfke7R7",
  "key10": "3rKrYqorBsjX9oE5JLDJCjH4hfgdABZA2eaSs2uPjuEvcZUgfggE35LGme4tNBgyxW6g668NmsoM9pfC9msdkmyd",
  "key11": "5Wfm6YRpSFsb9n97KQbs4kWmt5Ea75WrZkBoT17muGtb5RWTvgHoFRvxxQXeqXDmqjUg5ouMgmBbB2cSEC7bWMTH",
  "key12": "5JwMiWfX5RxPpjaJeLiGHrAx7zE3rQAeacYqxSDJAqBuRSfDxrcmvHnxBEf1mVxw57PRA1a7ntXT5S3whgZG1t25",
  "key13": "3nwiSv5FLuDNMcp1mtWKqHsqBBxpQLdBANtj8JZNbcuVenVV1b1NPKLrWrd4ut3AnotmksBo1q6SEGVbcF7ND44D",
  "key14": "2EVejtBxkTDSX2bpV4iWrBhDqir2eQepMsE9NMdRqCuNT5bgAB19krVKjQgFb24FuXdH3JpGpLQVTn5c9nFEaqx8",
  "key15": "5YPACdb7rMWNSmZ6VKbhW2GaM5cLpxJBXtHrwuPYG2vwGRM5La9ue6sUYuw5Wb5MGmv67viE3bokU8NYHbnYfcYE",
  "key16": "rUE7N8jmQ3Q6CMWPAorUqzZmVZSJy576gHTQXc4FrUKC2kKpPaXTpGmbFgGiHegT6Ehjbgoap66c4mbwPuXgBrQ",
  "key17": "2TN8zYsmFxQyFiV6gDFc8xjxJiePxw63KGSBTBFwurNT3XGVB6PJTkd44YnV4Hb1BwXfBQPMyM8kuVxG1WcVdrm8",
  "key18": "4V1TiprAKRmjTZyivzFA4vdEreJyaGCwLC1zHpnRBPedaUbfmkJhpzZ8KbkCNcPp2AKa3s5yfoRUGXKM9QywhTcy",
  "key19": "REMH1aAutjTKec4iiq6JTvKWWR3Sf3fyc4uAthsq7Sn34JauLcsRer3xA34XtS9srciSKtkXUfXD7aicProNm8B",
  "key20": "22w755atjDJtpNQyqtDbCzTrHhbRSMi54tsP1d161RWc8YxKXbemYVnZYcH6AXuC7dYdiT6oEmNheyJkYJsmxXmE",
  "key21": "59hGiSPtVcxdhzVVRihmmNhJ99BctYQXapkmiXfJ5PY8Uym9cgVjaa9pzGy85CXFGHmRaPgsarTsyGZywtFQPLNM",
  "key22": "59Ca7Wt4QM2fiozfJWKj5FLa2ydoAAJ7ZgznpQYk5jzKK5h8oZUo1adXL1f94Efrkk8zRdaL4boqiY1w2VWQbjk",
  "key23": "5hbEueKDmkwLegKCbp46qzHfFoZBiH366tUUqoBx114vj92XVRpVCjckSnfWXJ13fXxRDmeg79aNxpztWyCmVgsA",
  "key24": "3hBPXP6dNSrVFc3QoNXoQVVpNNM2KE11ppurWBHXKZ9pjX1rAbibPxEUzpEDWJ8XX7R53WLgWc1a5NvJUYnLC3HL",
  "key25": "k4KkHnaiNMvzQ44uDucqaiYd8MYHvwv4NiDvJFAEfxhc8gdi752Fagqbo56RWTU2YicMQfnWgzX2yb2LJDTATfh"
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
