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
    "5AHq8UcZgKfJa4Njwki4zedGZ4hZ5d4bf5wNxbtdvtZsmHVp14e1hERDGoiSH2nyEFFk8Z1p2pfoqrRK49CK3RHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HPC1Bw4X2zCL9gSi6HKU1pZBHfNGL8gTrxpetmbzGr4AY2ZQ7YarVXdg8jmfoywVNU9AmLM5znKPBRSyA8XFgs7",
  "key1": "uaUM1gPoyvdkvrfaiYEE4ptjh5bXFS7phJohnKsA3ckBgat7aD8HoKp9ZLXhe8JDixMF8a9jpKUcW5M5Tzi69TH",
  "key2": "2FNkRUUKfjhwCFPQSApKJt8S4VLiVMsxXmjoYSL2sTGLGMDir5XJhQ8Espa2F6Xca1tRsgLbCHnmCwToEP9hSnTd",
  "key3": "3VY5hK8oE6tH7HQ6zJHgZJNTV16SBM6PFBneT4xHgC6rY4jpZYWSPyta4YNuw8AbBRhTM22An3wd4n4SB3oxcsuz",
  "key4": "3utoY2W7X59UEXgiFAytEsLonZVzEYSVW9P6XMt3i8PoJqinBk6axPgDWijwXubojKNZF1W48Ge5rZhoHTg65JAn",
  "key5": "CaLWGBSDvDCnvyJpKDgTmB4S65zSMtSphN7o1wvFUwButtv2ykWCAWRJCrPPZkw6aHpkVXjphzQmJwMWsdCM5eb",
  "key6": "2ST7ycRS4BT1v1VhVJZJ1wDBY4119TdkpPvMb6M4uuJAGvTTyKyFY5xNK84ukBAvDajbuoWLPzLB5yAaNZoXjyNu",
  "key7": "5ratX4vGbrSedEA2xF1Z7pBEX2WFT9AurhEzqw1RD28smyxjfzQsmqkeBtN4Yzu7FyT5PxuiyXjoxsiXANWGP4zt",
  "key8": "pjHWtLwkjXP724oPbseYa6Ey5XktdruuvvUEC92YiW9b3ZDz5jtYRLrBjmYy3dD89bzamK6sBeGn4JiP3CqaBah",
  "key9": "Q1ke26JsMykz41t4T52E1P9q4w1rBworXMX9tRnhv9grDC9L24w9oaUzpg9Y6AwtVhuVUq67wJ1efDrAczTzAAs",
  "key10": "5o52YyYuXnLsbJazg669ct7FbH9ucbzoCdaChYnnXWf8uqE6Fx6JAMChSAF5xoe82gJ7sJqpxmyZzZApDdTWgBW2",
  "key11": "3EgkymfinDWJ4KJYeuoEXyTqRE24ZxcVaSvXnncVZKPRqAj9vvpj6LYh5pdDHDpyfePnz5FMRmQFDpMAWMaH6K75",
  "key12": "B6M7QyPuxJAv3KEtvw61khTg5wTyfH17Gox3Jp21FBac3E3FzK7rPJxGKrNydYcJPDWQQdgeMQ54VcmbvhVXY34",
  "key13": "ENcGdZFYMnXHwBUH2fv8A2TDPp61yYDTKQTcFb3Cs4usEapCEJLSZ9eGA3L3i915acYyiKkXwVY1DkF4znSChPJ",
  "key14": "5K8qED6yphNEXDgUxGVpp5VVqq1bgGnDSaGw97VCu9eR5rr7wrWn1pE1hABDSieXLYokxtRmy3eSd3sXCTD59jYA",
  "key15": "2wYrfNhGPJFex1cYuvabq8u3QRoFsjKPJ2DDifwfyWqYFa4akycADFbQZgkrcSBTyySfoBQsACz9SNVqpBKRzoDc",
  "key16": "AjcM7BgYMvn6ofivYkMywagtkMBSrmzVZyoeabKveLDFdWfBGwx6ER3KfgJdbXGpzwcLGHJjkZ3SgnKBHXz9PNy",
  "key17": "uh7pQtuDPFJWbApg3U64QYws6caB7kg8enHPDVtTSBro8m1WhwaYnduN8RqgJ4SHZBnN5Zco56yTWYTrGt7GmRN",
  "key18": "42KNRrTvGaufcppt7d3UMVji33embPcqYoWAqy9jPaGrZkpBvyqzVvTMJVFu6xpWBv4Ws2M5wRW2J3hkPeEtHYKm",
  "key19": "5m95hF7HNfeVeapCSH2XYUc828X48nF2wvff43CWXi89ZBopgnsoi1e7UPLv24AXoafReQ4RXydHj4fR1J5pBAkT",
  "key20": "2sjU3ryJeNSSASEnvcZVXQbFcHB9HpYikct44vVt4PxnNazBWMwkmSbcXc4ntN7qboQzzh1dJVSmD8GhbZZqkmAc",
  "key21": "2JWi1AkAQdKRNaieSbZyA3KQ9414symmMPaH319NDacW3m1WzJdBG8Sws4nJsfMorMm78u34rqsnsxPdc9Cis8Zs",
  "key22": "32DKzfJuKAnbsyYtgcpEjoTbgjdD7NXJ6LK3DAuZJjWsMfa7BpwzahUxJnpju3XghxBDbsapGap7HMAGKXXKr1sg",
  "key23": "2dRVsk4BMBLYAZg3h6tLRf8p8Uy6pYdpwG3UJAbMbd4WFX3qFvnv96s2CgVXVM6Copn19P1VJagrx6ZqWwkEobie",
  "key24": "17KrfiogY26KUaKmKth62xxx83se8R3FT28nxgTx5LwhpEn317ugDAguPmYFQSoPHnUd4ERUGabuhRe37rgWJnb"
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
