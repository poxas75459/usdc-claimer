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
    "4varxEq3ShqZzbig3CZprx5LACNtM2JQwVhTivR24xePad7FoZq1KMoZre2EyaFvQv6T1ViGkk8di8gHNBLwsqqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BipX52HS4wnkYES3rtPdKBGkapLWNV5KVGTsdxxoHrf5eXHUmLazLRqGuVcP38faHMZm1gWRvwVUJn2fYbkygYP",
  "key1": "vaxNnFojsuD6hgjma646hkDPrA1gutyjVzBJHtKEceNZuKDAyfoN7kgw8ChnDbVC2hRuYUCxLo65mWRmUbh8yEJ",
  "key2": "3uZ7Bz7YRHmML4TsygcyN4xxJPJUpPtBZVZToKNKVWvK5BtdtbarGGsLsvig1P8jDahSFDHsEsvGys6UbtU9xSuf",
  "key3": "4cNs1ci2w3CsQdn7P5EjH8JTKuQ1kjww2zedTenvq8VqTyMewZcFwmEV6Fcf1tiBz7N3UropivGotWcouxsHRVUf",
  "key4": "3cQ7WjineuTFcRrx3kja6DChRV97ePNv2YMYmyWn4wy2CjH8NKzShqwnL48hd2rjwGhcvq49Qf2m11MvQfpUpzrg",
  "key5": "2CjXtJvCj62rHT8rqQgccUxVZ1t4teuJeyPVkB3S1C2fo1MBUKqgH8rqWovoAgcmktdU6MVBxmTf38Ypt4F7oUw5",
  "key6": "w5sQCGj3YEX8KXNFkkrfXwJYjbiHja1xd6of9zxxhoLh7SkiPpmcMSVdaoBGNKGbTPve5qzwxAhwAfzGE3gfHNY",
  "key7": "2Pz5fjFBZnZ5CD1hJVpF9jyRRvSLrdxZzH8rYRsmcoAqpPhMwziWesRuj8mEnjcXUuseMjoCWKcm7BckJYwK7aPc",
  "key8": "57zuE5TekjBf8NawA5ZDC8zYmtvA5jS2Q6RMHD5rPML6CRCrgYX3FNquzyikkhXUY7voFdPSj9WnxwbJDiYp9XVk",
  "key9": "2KkDcVBXj3TnZ5xCofmrP2pAmytz8eenTkghiwJx67ba4QLTVZ9rMX1rAdjAkXZQp62ELqaSbB3HCy3d2bDQD3SC",
  "key10": "394ktpa7sjhyjit8UuHYzD9CduG36xbhYzYVnzdYqSWBUkfzvHgme2i3yszzZrGCnJjXmbVBGgWJahttyeGX7tun",
  "key11": "5qayZth5F3kSzaP9nwmQg24qSSfmDfio66DEqwCxCvJTj8PnYaDg5driJ8ijSMZbRV1iF5HtkZkCnAHMvpQTz4mv",
  "key12": "FJxV1YdX5ebZkvt4nFruczAx4NGUZGWgWpLdtCqTYHBB8NKqTjp32Xz1PWmsnQS6wueVCgVcX29YJrhpcii2ZHZ",
  "key13": "5L52jBL4S4M1pruNpLbrGULsSyLW4wNt5s2F1s7nJPnJ2GYdumXYx1Rt67LDB56dsAQhQqkSFHjfsxeeg3p31dn5",
  "key14": "3qz13D5reV56mqrFo5egebDyn51uT59Z2AyQZzNi8iRL7KZXZ5wmwqD8znjdx385Ni9eZ7fwjGStbzj2F5F12Sz",
  "key15": "3wz5X2ngkRGz3hmTtuJYdvESHkA2TsVEoRx8Mddxzc4n6aNXokxVeeVFd9JeYW48aQjbDCEjrxUfAwY9mjALNavT",
  "key16": "5hcxRdnSPvLYv9vhSvMkokGme978f8GMT16Bm5rqeSvYxEEZ8Fz1uSfDCYZsZsdmVvRfQZEZ3m7hatr4apsVh447",
  "key17": "5MeCMDxhY6M7dLaSoKg3arx1vMEfkhLpeWY1MrzQqKDQAyxttg2d4NRyt1admEoz5rtxvAhexddDbx1aFfqiJVP",
  "key18": "2KArGKK6giD7pfwCyWGzYtH5yaJjdafppooAtcki7ezD7JvCDkLnBGWDLomeA3rFRdzazjMbibbZuCd45xz4fGYj",
  "key19": "3SHDJyNTb7uHxwwRtqxvP9uJKXZydqfY5tiE97j5v7WmwE5LHcGnqyWCpZwJLmTXf9MZFhjsMXwqTbchGeV9KFE",
  "key20": "2uNU42N6hEnNWrTthe8PWRNDYVgHeb25KquaDGSCWTEYFpQNXpHQgx8wx4W3zmwR2b2VDjyNRYvX8Wh4nViSe3jo",
  "key21": "2mfkfbkG7dn8FgwQBayehShA4Y15j2UPoCfLDkky8h416TZhkTaDKQJvE1WbT4UCQxCXtbFn4ch81rxNZ5NS97Qe",
  "key22": "2QywQo8szqSndTrhufVjUSdJDpHF7fFDDfE8HEeq4REvmWGHgZbob9W8tUbgqPNSpiswRw9nZPnMuQxp63dGdm6r",
  "key23": "5559mZYJnCytBLDahu9dzxd2dYaWr1aj4Cbtofixd6dELqKwgD2tkQPoBWxLeXj8d1WHWHjbAF6cWeAmWaawbkwn",
  "key24": "5tYcGFf7CPZrbRndBJt9PHK3Kw2YJEBovWiLJwKrQETFo8Rc6j9vqmTDf9RyYEH33XV1xyGE9smtUaNXA8VxoMt7",
  "key25": "26Udc31MBbwPHbYezGQKSZqvef3rbUJZasnCD1fnxX7VAGFYdDsTP2m2mW59e3d8NEbAoaG8cpoCSha1zUFH7vxF",
  "key26": "LSEvdPi8UrsRgdTtx3XjqkN9shJJVyWsmSdyXePG6muACEWxbDBMnZbhzxLcgGENHhZpCuVqwPmUkwVuS9ynvHJ",
  "key27": "4jTz3nvWkEwnotVHkXye8Bxg4LSueTTSMjnP1VsBQNFoqFgzDPF95AmnBN631LyNWXyvv6qvGMy9Gb3ZLppbNRhN",
  "key28": "3wvDBpdj1euKyKg5DxndpKVPJBFoPNocWVtbPHjTt2KqXB8UKASK32sG8b9s6AdBCBDMC7e4fZSwE24KjtZSqdiv",
  "key29": "3ipj2fKKpwzk9Ld18T3wk6i1syCHLst348UrKS2bcvYNjfuwMiVVpVtieYhFjoRoLjvuxMV4xPfAW3BpM2L5WzEY",
  "key30": "MRPk1cCUvVjEh1qGtwLemEXrUd98NG2ynVj8KpPpxshNgtdnVVroeSozr6osZK8ouHN2zewmazxFMRV9WqT4SFf",
  "key31": "saxJdqzmYG9FCRWsJFu5Fjj753Sn8yh56szp1mUqgT9LHP1CEvtsSbaSCFA2ajtHN2hZU1pv3fZihQgybMc71Nv",
  "key32": "3niDT8RZSrNtDLYUvM3tSWxPh1BNEU4hqDmqTWC2MLNa1LauR3u49G9EhBbY5aa6F8RNbcuwQSu8Jsh2oVF7nve7"
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
