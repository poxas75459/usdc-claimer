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
    "5sHgUs4dAxxCiNGvLNq7PJtdMoys99qTg1ud9KgrEbDrLxrjp7jQQEycVhSGDU33p7tgNi3ZPHtpTVQpnJ6amhoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ixrnKHYQc5z3vwGU2QR3Mk2nvHgLF4uh83vmPJdThshXAUYkduZ2GLudN4SAnWk8K3PyrXYWTreYtsijzz5DUrS",
  "key1": "HgC4LvFg3PNM6XM4ahHwHJ6fjdz7m1AXTN8LfpLuUEpEFnNjRRUecrpQbkSJtb1pVVDqWm9WDBLcRiWq162FV8N",
  "key2": "2tCSXscqD6itDrFoMymHQbe3khJFf6GRTZdx4p5frdsE3i9VoqYEnaLZhS7yt1D1KTCbjvcj81NKM72Q6DpiLR6U",
  "key3": "34uTmE9ZbPHx7cjiZztbgbic8psyAkJ25keb68xLa55WMTWjjH4wVbhHRMBvuwcTscaPLFMhrK1ViVUiTWsqqQz6",
  "key4": "wXPim3kamkkoyYag2Tj8xpJEUSaA3TxgbnNw5AYhUw2oqhFvLKhQZmiBLLYwW4JZD2yZXUv7xGof2XM7jwkrF2J",
  "key5": "4kZDmnZogFa2XoEzAd3x1TxQUgWdWXSRXGdx2egW48MuSFXjAGYbQ1iH76c1pDS4mnyDeAP8B6eRCLgC2epzvj8J",
  "key6": "2hy7abYNKkuqAA6M6RomfQ9pUVNoMdtrvsd8TvgqRY9VAskBWkEuP8mN7fkZobKRWBw2CrECkFHAEmUvHML5XMQm",
  "key7": "4bUdt1MoirC1tKKAmV7KYKT9JZoRgvfzCDxRabyoKkKuVKFukbqZHgVgSNrs8D3Wn7thqSJxGGmby83nt4F7M6Tf",
  "key8": "548NEpFRmUoaFW8A7NeXDRBo61k9ziZEMAFBjt8qYRLtRskfLQyRfLE4kGwCmxJmj4xjTv2JbmTNekLPBfvCVRPz",
  "key9": "2a1bRLxcqDEtR6TE8TRHNMPyFL37dEvMmXgmFeCyMhjBb9ibg6WUurUtMs1umrjpsBM7AMbRYpWMeWQsfresbScs",
  "key10": "4pYrHNBHZw7n6KkRND7rW91sgji1MocRjgAYXh6kdnGJNbSUuMcAB8aZHWnfdt3ZDsnoqcdkYm7PPJ2CJqyXWHqo",
  "key11": "4rT2gfGNTsV1AK9Zy4ftcqAHDZN2Uq3zy56wHc8beR2txjBgcAx37h17tR2JL8VhGkSgmiHwW6n4xC5s5dGSSr5u",
  "key12": "5fwwFSrNu1FRCFs18YokWYEpRqf22HQDLTkXPgS3QXNRH6jPNnAe63YGc4g81j7F797MdtKwg2EZwGUWMJYtWXgp",
  "key13": "2L3prKfmfgA9HdAxD6PZfoAUyXqdukUfQ5j3gVqgySajKKFByFr2Qdmqap9dEcQmvCxFkUDsYHjKK6QUdp3JPmmD",
  "key14": "29dd6UzDPzRY61E4YSDaCDxfcCQhWYkqnYrKJ1qACkPsP9tVq1K4f1nwUxRQu4AbGDDv7pyUcCzeAY47k354Pmm5",
  "key15": "2ByY3FuLG68Z7URgPcCjok5gjYXk4Tk2Mep2fWFLUSQXMwkmGXunf4gYLsPW6Jdw7atqBQFEDHjTUSSPm316DXKM",
  "key16": "4SsuLniLC3fH92UsARtXBLUDSKwZSTCjajGNWm3AWAnHrh4KdDdp1uG4cTTSRE7qLcVvjrkga7Xj6NWgtANodHhd",
  "key17": "3H5nZztDHbUWwNJKQ3NGN4unt3daWH9mt3G7JjujMo7kGiWLJyByE7cNQVpkA5MJB12fGH7NsnEkqtEwwiNhaUr6",
  "key18": "61GT8uNGLwFTEtrZMzANd5mStTT7KVKBMGHFt6rjGMHfkTy19adVwPdA95YYVhN2PaoCS5YsEaPxHVmyeoLWzgPf",
  "key19": "51wctPRQ536FuYDHhh1VWxkZErDdCNrbxW9TKRYDgopHXqkVnpZzEjeQsuP5k3GZK63VKBVq2FQa7pN6FvwNc6si",
  "key20": "2SQBYSE5EgZRNhsFCYAyeKd7n51izwYuZp8q2Wc9VoC29vcMc7i2tzuVTdgSPxb3oAfS8FRbzq4JUFpPWps9ysVg",
  "key21": "4j1dqujmCZgkF6z3W8Z8CZD4fk3dv6QymWsvo3znqYFPjwwFHwxA5ro1JHRBwHv7RyoTEJEXRSvn3ShTpLLyc1zw",
  "key22": "eK5y6zy9WFKtc8LDHd8czdNa7B7hcgeR5UnDN8NFkXzNRRGVPjfi1ELxwLAxBFV4H1qNjP1zXqPsn8FYgmVeZB6",
  "key23": "64pbeGPh2WEW8Mke48SAPAsqHEsVqiYnjqsax9HGAX7HePV6eoZMCz1hLMvuXofPaqpBedCKQBCrJSD1JtfBj4jF",
  "key24": "v5PCYsV6XXgrGQcBzQDNdM1xPH5wP2FCDGMfoLorp2ARACYF21GScA7jL8bdT8Ao55ETz4PVJYczWQEVwCcXqNC",
  "key25": "3GZgpwtyBaJ6kF96HoBFVWYdfftpxut2ZKwdgBxQhC6NAE2HNw2QbUQQdvjousxHiEbdQvrfKCB6pn2E5vZcxCNA",
  "key26": "5ddgDUyt8R46yvNHXxWrJqq28SYeMPngGSRTc7oxy1ikTRzj7eKYLxGV3QYrnTYe1C4Rknhfn3HKSRY2SKenpVGb",
  "key27": "4k75rWFMus9wD69L5o87AGFrb6XRADnv5769DTi8DZpUhNFa2uMtA2jzzkJDq5npHSLoe2noCrHExF3pMYGct6zs"
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
