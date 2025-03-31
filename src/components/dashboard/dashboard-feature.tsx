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
    "4Zez3tXQvCVm9bs9RLhBfJszBB1Yx9fZdMoTpZ2e89KE6YLLYnTLqbxVP3NMPQC5YHFZiEpNypQt82SnrQ5b4r6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kuk7zoPh2nj21ZpiAYjXaK8UT4KmnExSHr2TKpZFuE2goamVV8LBZn9ag4ayGpyb1Lg9WiyThEk3wVoh6Rs67Fh",
  "key1": "3TRy3si8tH4KinQsTM8oPPBDYauBG6YrvfYcYhZLrKJ4qUkkoVNJzPqT7T4LJeAiGL6ZpULsHAbE8XH76eDKUyWg",
  "key2": "4VM1nN5oE2FnY9kRh1mbytFUR6tJRAZ77Sctyv4Fs6ywXdhvpJkdxDuXstrC36J1uTyTWprdkjcnLv7h9eUnGk9",
  "key3": "2Zd2gfjUh1S69zM35fSk59A6yVZUwSdH5WBXT53yjj23YmRRRDwVRQpezPRjkcqnymATQoww4CjGrvYDvGuW7mkr",
  "key4": "264bnnBEjSA2VcWC31pBt2S6hPixtDwnNCRwwRmtrgTZYu41E8SvSGJEmeK4x9C8MBLsSy89quALLm2gC55SUY4J",
  "key5": "3p1Q9HPMMPjaZoJjCAdkv4qDKSJY5U3niEbDfrJgJixrkggaNUBg4gCHP2tifPfi222dxZ4y3mJd1XcaQ692B3b3",
  "key6": "45o78nFGPkajAQsuGnGa6WDnkAx4t4UuwFirGWYn8gptyRbuncxZENKAy5rcyTp3bTMd8YYAQmKTn4jCKJDWUC5e",
  "key7": "TWGpwUmcZyvz7CQz4Gk6LhBLuY7zrqWXfXktANNb5JY2tyUpUpFAu31CiDmT8DCbxrzEA7zzmHm2kL4PyBLZzn4",
  "key8": "dsJ1XD3fvojwZep2aD5DL3jzwUokbieQnFPxArpCow6jazw9X63KE5GzpHgQ2DTwvHfFsVtQAqr7hBtg81Nwuuv",
  "key9": "3ZeMidQ81Lwo9BKrtush3yEL49uub1QSF1Sb2TjGbtvSHTBHpAa2A9CkyNdY3gw98XdxCQAQSUMXp1gThcYV2nNX",
  "key10": "3pWaB9ERue5BZvtpj4gYEyn1CZcBfshQcy3bf1gtNaZtg4igj4tSq4b3N8H82GzZLoumJx5LuhDTGM6cwHbZqfCt",
  "key11": "t87C7c7Cr694SMNMqVCqLzDFLRwwLRzgWAtbEW23wRmcarWbirpCwidHsELxuMjEcXdPQnhRa2mvv34ws2PzuXs",
  "key12": "pw2a7dbPZSDV1znyKHy5e6GQEibkhVufjvP7eHGZMgkZ7Th9tQp7hSUPcj5bZPeSmPEsTmaoHk9hzvBRyHZBZ3j",
  "key13": "5xKMvfcfHjjoLqvfMfLCkbWKVHTKDBPJWvEJ3v81gAQhEEQUipW2ixaCY2uZVwDMUawoH5CsH88P7BEGgHbPrxSC",
  "key14": "5bxrUvWUMQdJWCx4aEjpJokp49wyLPkkjbL4J5hUNES2X6fUacAJDEbUVBHKFkcPfWVRepjFqTPgUS8aAf7D93nK",
  "key15": "5okgz8gtrR8Gwy7b7fikQT1bvmSNx5XVnShg9rjH7um5hMgUFi3ez4b9KMCYMriCqWzLLdX3TsAHnBznw57XQS4A",
  "key16": "2QUBb3YnHSH36NGPpm2eiYgoYZ5SyGaSozDP6YC94W81tB4pNsnNhbLyci9TAed7vh4P6m2yZYTHLWDmSsWyhBB4",
  "key17": "5S2VfWhcoNXwZ5jd5c9q9QC4JAvzoYdksL12TgZzoRkJw1tEwcEknq4aa4cyrb8AuwupHbcqByhXLWC9npSmnfCY",
  "key18": "4dprGB2YEk5XBRm3VKDqYxe8fzVUsJp6x5FUXQfi3N81RiqHHpDqgBBYDJX53YsVdkc6qYccN3v6ytDrBcmYuVVy",
  "key19": "5G4azp41HbofBfAaEhHyGU7MFZyfXrDxUDdRPictyuHaW9Jwm1MvwW55EbuFwzDWSdCYy5FHa7DKdMqXMFUvidbr",
  "key20": "3VdSnmQbng6Fg5aa4q4B7peaD6vjNa3r9FpCqfSkVQGR6YQWNYo4KKJf3jRJMtJrSPQ8zQfnLhao5C2smTDrZYL3",
  "key21": "2b2rmDMqCQAnfhtsymmErGaW1NwpeVUe8eiRr6hLFXJpQcTTwm6towjZrk3m23N96nMLzKWmHanavLuVoDPEdG7q",
  "key22": "4NFkJymhUwLYKMnYprsV7jbS13mKeBRNf6LHzyNbTHp7L63dKRY1XZTKziW6jEFobdphZ47Rfqq68igQGYCG4dzr",
  "key23": "3Nj8ZgTqwgBnN3W9t7rv5nsZ162a1Jc6hD1w8QZ9rUZATW1ieuTYtDHCqrYvMi9L7W2zPEXakfR8cj4og7cTqC2R",
  "key24": "2Ho9JXBYLwsaJv66hDWZHuhAWydSMaWzh4WGayzKTyjNjy9rbz2wkXtrQrQLBqzEiASHJkcin6LTuQKgzyqdqPiT",
  "key25": "pLdR15cmq3UGXgXefxVnMdV9zneVBvftfeMKMSbmj5AopzpEa1AEJs7ExosUtAPXww1mk1Fv4DxR2FeVygXAxXT",
  "key26": "KuyfmLVnZfmweDPN3zNmM4pkWqQvRmNDJnWTZeq24baVJfYaqA5bKTd4Rhic18ijH6rWAVnJPdmqjdv4g7FxxdJ",
  "key27": "5oqnTsK3zRTxBfHLqXj7qudWDodkFjPKKsKzKZXvMK5jddcTLJkrQLVNQAnWgnhRNVz1gfeJwergAawpHVFSSx9s",
  "key28": "5shevRisyKWLYEXYUgtokPvbWHjiLA4z4WUqtGSpbYmYsRV8qwRhLXZ8YnLuMVA4aK2JMjLeAo4bY67F24Wo4nUR",
  "key29": "4CLADo3dis64zJBCGyc6hxUPDtnkyTMt6VCcfv6Xst78DkimrejRi2MSN5fVpmgDpqToqTvBjPfPMcdZbt7h1YMX",
  "key30": "DHXMJb9YH2BcrA6xGRmgaNjv6Ywee6iGxwv3XMUrDGczZBTjv5D9p7tzYHLDtAAj2aK5jMdXfB4X3MH4hn6iBMV",
  "key31": "2yWu8jW561zwD9j58Xc33oXeG4bcidHTsBYVFM8BWGDjczHSzsjQimNZd74wTmg7foL2MthwbsdY2nUoAibN7T9x",
  "key32": "5z9mcSovykQrhSagAFqtWV6SHcBPmCNQVLaHpatDGYhWR1CouWFd7zG7Xv29Ka9TRsi83zJYgoDhj7Hb1C1N6Tsq",
  "key33": "4ruSNfZrkDvFLZEnyMxLoUg6CR9ozNpqXJ2oQhNUHs5TuaUapAacKDivq6B6bonWkBMgeibh5erzuVXkesvp9LXW",
  "key34": "2Jf2TVwN9e1y5ypiAajRxyXqcVjk2bNDX8tmF4mzReUvosuF9tpFjMAcSi3BG4MoyFjvadxXBoc2TXPZ2JvWWArK",
  "key35": "35wirDYYLkrgy1jaL8VLZ9vm1PtFPrU9vHByRGNDSVAyRATc2N9omakP7sZVoEbjg2AUFeSQXPd5MLAB5ae9K2nr",
  "key36": "FRR65i2V9KFXYRZZsd7asQuWKM6syfdeowZsvNa1MaQ9MSoJ8dRrhNFkcd4z1SNGh7BNaXABLpkLWTnuKjb8AEs",
  "key37": "4cL3SxJrVMfN16mPVXpN4vikbBX1GqrtTV3KQoPwE9ophM4y5ZSTyJhg9LE1nc7j28CpLmotpB4F4pu7Thzz1RSg",
  "key38": "SVHKNgdPCSkQuampkfVLhmz63GK9DVLRSEB4fT6Xdo2a5dLnbfMQYtwfv7mgMpQ8DP8FMSLoNAGrLxSRFv1QUUe",
  "key39": "RcRcFm8RXTh1B7uxaucPnMzHSP2npnp3D4Kj1b2y4nh3BbpNRJBtxPjbWCPQeYMCoRGhxE3QhNhZ1kPT66UpHyN",
  "key40": "2s6mNBDUhvGVPiY4cU4UWbWSxfQ4Cscs8iMXJu17sjgLfiNLGa1N8phPADmDABPEmHJn6ms3nyGq6UbzWXvsK8Ym",
  "key41": "5Q6QjJfBwZ65YvgCWdUWesstcJvcvRNs4JNuV4dyDX6jtn6zLtVPDeMGnc4ezCRHpE9rsX24UB4ieycr42gRQRHn",
  "key42": "5MWmEpRcVbbsgxLDsYj4x7tR6ExwvzxZYUWkwVZe1NZXY4YKjAD2P4cCxzUbQKk9tHoXVXScK4de1kuLy5q1jnbc",
  "key43": "5AQnj8g3wicCkoYz1a3JVJt4C2qBH5uctEKWtbGMDdMuKevc1nQMezHX9XiWg5PvXVEw9znHKDHbewSJhcWFEpVx",
  "key44": "3yktECPwNhhCW7WKYFYo3RzH9oK35kB36YgxdxTivVFpoaSHNi8W29dHHPcYZsNWgGjvqm2qWWmQT5XciobMgS4Y",
  "key45": "Bd9fZrmgpk3K64u24E9sucVQoza8BDDxBKwk2ZTp93Mq6hLQaggHSHDS3ey3CPjfuYE5zRAdX9T598WRwXTUkoW"
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
