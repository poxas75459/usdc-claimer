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
    "25sEkaWzd3mt1qfoB1NosqMkoECyqiofDvWwk4EK5yD9UeEMw48uJGaJiZBD488MaC3ynYQJafJtvVT7ozUWC8Qo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jksQYnM5LF5okgk7Q2uvhZM7vsM5A4HLWKDYVfHcQSaBZhnDuJy9Xa1EmScWntGEoRodny4cpVciAyYEvDq96S9",
  "key1": "3mVEW9EqqZBmEx8tjLiTBdhEvyzAezfjKFGzve45HFP4DXVnCdcS7dxyLTfeKA3bviJz5xtkg9ZoPt4SSeJJJf5",
  "key2": "5ED3QsyfoiMKRAVBkk6ywpPs7K2pwAcD4qQGztXA78xCWRrbSUu3DAivndgtgRdkVvuiViZxVGgXS2z2U8kBsFPv",
  "key3": "3eDbsmwv59kMKinAZrCyaFzi9VAemEY6wCSJSMSExoX7o4V6U6k2JHf3vsxEcwuD8QY4SHQBxYG58qww6PGF57EG",
  "key4": "5FXoc1vDLiGb9dMNgdKauYL2yD5uPQ6LnTvfshvWjEsGRpEDunTzZM22AjAmKSS8BNbZ31JEu2R4QSRJF7ojEafn",
  "key5": "3HEUTJWxpAa29zSFSezXDsmX1Le5Kcsv1oekiWMkkoQjQBphbwxV28P35xF6jM5b4utgPKAuAV9rXJakREkBhf1Q",
  "key6": "46FZYMYBXZccCjM3opQSnBeq5pgDk34N9CHG7RkYKsCTj9eN3TWsM3piwzbWmBJoTZXxnTPCkGfHUnvv3Dzn9era",
  "key7": "5m6xbME5LS14UyGBqti3tfH2axFTJST9EPT3CoqikY1fX2gEQhWWjH9vEe9cvGRweMoSKCxEBUbms6gXu1YytDjV",
  "key8": "4ECXDD4p5ocEejzm6qbMzW9gTd3zRgpv3RFK39XCw4DhFeX2GB7BXwvLRkBsMcawVetTSQkfXR2YvVCh7HJtSnbY",
  "key9": "5og5XT7DhVf7NhKY7WwsMPcTkZKdG2ezAK8nj5FVFmGcSk9NjrXnEUak1sTGLJFjtUEGC9UBJyzXAQ2pRb6cq6y7",
  "key10": "fXqEqgnoyNpZCgYqc5SmAcmM4jU7HQQJHGGZKXyMBRgn1XCXZFDiLTiQWtbGvXQL8iN4HyKNuXvwBk58NXQvivq",
  "key11": "tijvgNKxtCoTHPbsm9zMQQfdvRHDj6CLxTHdmaH5TqXSJag9VACi8xaeQzrTzwio4CpvL291vcJQJpiHwmGWrPi",
  "key12": "mw3TBMuZphHVQZ8Tu1H4WXG5KDTbmACBiqk9mjRvdFhocppgPyUEReEVvX8ZsT81iXS5ptUuUsAU4nehK7tsYCG",
  "key13": "2B21tgVmkrDPS6mDUVLa6ZhiRmWx2b6G9TgRZCQ59VgQF6fe9CfBNtdRVxKQy3i62D2cUoyZSjvEeFR6szbzmgJA",
  "key14": "EVJagscixdXyJALUPXq8fLvy1Rb98zDM9Bq3DC3MSihzrnuwWEZanQZcx7p9J72kFmXk5kswEo4hqk3Huhbq1WH",
  "key15": "LP4kxiRbMyrBCiRt4Y9abNECPNDkMrTpCdDK7hip1tUVycCtXGUbAQkrVUqvZ6QZjLsGZDB6GtpEgokCmyfvZUk",
  "key16": "p8z12ndTtjKjLsaz54bWeckBcEx7pSChUrkfzoct1QXvTDYK4YHR1LKBTNYAfujF2KzcPY6hdH5JwbQ2bd4dAue",
  "key17": "2gMVKhFuZptF3hiUnYwoYRov8SpAKmtSpEoc1hTSceKRJkbQgaDkPcJqKVxT6AVpaHe8Yp1eDm4s4mzEXwgFRM66",
  "key18": "5HrwyMAVuNrsM1wX7aqcLak3pRqQgvqMGVCHJmWabSFMrSpb6cLPwYqXXLcrZEW3Za72b6QzXxf1SWV6F1666BDq",
  "key19": "5dPYsR3FEmHdHGBKxkmRUcduCXsBCtJabXeDSZD85sJ9TcXGrdfKNDWXLuYDLb5ckcQj7V49TDw6R6M8ENkj8ivQ",
  "key20": "4PskFfFECW2evzVh5BvgdwKtzpcbgfSS8rbjsTf2yka8nx34TB65VCh3e6FR4vmT9miXYAysDXMLkLfnGSCF12hZ",
  "key21": "2A19bB9JWGr6GMyCMtGahuUH995TkF8RuUPoWMK1MPhWfwko9Wo3BLV9FgoKeq4GpTNRzrZq9zEFN62ADJybT4Up",
  "key22": "4cVbL6iNpHij2Ea4rbrHTmZg5zCbNWj7XXdqDmyuju5Sa2hUr7YfCfntZ1mra7SJcmvMtX7drLkWgxgRK2WJvjci",
  "key23": "5fGUzoLT2D9grDYYapPzhhCVdqrxto16drC4sjKt9KhQhbzNHvCd6BsVm6dGzi7Wb16dJSMsGFyhrgyCZvhpU8TQ",
  "key24": "3qVmEx9zYfCbdR5k6ABnV6tQEz9D6ZYG15RPbQhU5q5PiUjcbfzyo4n4fBgzX1GKjt38vjX3f52fCNuL2U7MSWZy",
  "key25": "2CmcUgnKZdqYb9NraF2ULVK25k2QSSj47UWpNAG122M1HPfioPp9yChutpmw19jAhFg9ih1Gbx5urjJCcap56LpD",
  "key26": "2Qkhkr1LAu2UygDno2c5Ztc9qeWhXX2CJGNZzNgBrex7aGBUmAf7g69ZwzKkxFTgsmXhnS8hUhb8EbTFMa6GfbQt"
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
