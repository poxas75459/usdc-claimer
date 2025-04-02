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
    "35hx1utaWVtzAw1g6V3A7tk7arbSvw3aCh1tvmyGpccQyYwqhans6TcikwUkuBSEP2WGsCEYytzEd6wBJeEfsfy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q2hmMrgUZmnqLC9M6hNgcZD8hvJdM6wmL8nVRvAGuzcqsK3c4vVfj5p1r7ybp2ez3c4PAdB8KKCZKjNQdXmxqTH",
  "key1": "dajf9kCWMhL2eax5hRaSByJe8hz3zFxigsGgBFXcrru1z5ZyXRrhvQR1mV3WGJoc11MTGoVwaYACKQDvfZiBoHm",
  "key2": "4PvCtCWdSVg5D11XAuR9dG8vzjwCT8b8tB2mWLto9Px7xCUwJkuACeoccTJZThJihH7C7y11zzTo1KQYXJyq68M3",
  "key3": "3TqYgGqZkhofbbFEqEX1B1aP2mdTyGs2KXwUsNXTzgH1rAyL7FuVj4Pxs3sCuZ3kk5uNKkJTccfW6wez9eHwpn4E",
  "key4": "jnKHyyEsmgJXG1ixgA4781Q7hYoCbS8EQxJbzFZL2eFcz6oLckEMe4CzfTsmApv97jPkeEoQiXxMf8wXD1bgtaY",
  "key5": "4qN372sDC3J9fsVUxJfqrbwoQtbWB3FT7KaDAvfPdWofe6h9wWETb84eFfyLQjLZfXTkVeAHLv7MUcGENVxCBdRW",
  "key6": "kYFG12cf8ES5Ui9SpZCykw2xZ9Ckd2L5gyZLutzb9pYSZ8Zy79HR6YQqNDtPLu6rtftxdMhpdZVTyxTgswxy2dd",
  "key7": "4jEnmP1E5Qt3QNHczFDdR11s863LC4iV72RiviJ6wZ7emoGiqn27GSAFX5zmgc6J8ajVfySsSJANzcCAyFc7diVP",
  "key8": "3NHfJfnMuqjkDhXzFoWZ2XduUPQCvM1A5acVExx9vV1Xa9J12b2rHojFZL9kc1NZcLrZ73ydc7PmgxCuhcGY68M6",
  "key9": "2oQ1Hbn6Pj4YfD8nLSMLEnHRN4idXMAjrrS2Z9pdN3JGQxfh6eYK4ChVGUtaZySoZTgsxQ55LHehqkmmgMfQ9dfm",
  "key10": "3WSFYMfGCoK5HejTct2TwL49XAwuCXwQQDvnrPj3bxbKDhdty5FRDMNwS1btdBZpi2i2wfgzLguv4BdbeCHzFaKj",
  "key11": "2rYYsuTbm8ujPytK6Dyr7yreDTFCKoLkW73s1QsS2jjawWfj8y4BLzF2JnNDqNKNLTAkinUfmcbu1kjwNBnMdoKY",
  "key12": "26yCE4ab7q9CLYg6whkQsywVQqn5joULpDtEaRodN6aWmdvcgVK1D5vkBzJqQr1BMTAPpZMxmUvoAMYjnmMAoYNX",
  "key13": "4o2iKutHtb7BvMNufWCMeAQg58DPVmmVJT1rXyti4obkm7pcbM36oSvni8LaFCFvs9B5UkxfjTBycPCcpzH8CZfY",
  "key14": "Lypw6brnJjJ1K3KZixCXBXCvJ3Ui4BrzCXeYXmpDCkNKLhn7rDfF3NmGub6tsceymnRcFLaBvbgXKJ4GEErX5zy",
  "key15": "2RswdWAHjJLBgQaH4wdCpqVXr2BvXYcbQRNcrshKA3Pijhqu2DaVNyBACjEqgP2RrCgz9vZD5bYBAQVsa8yekFXh",
  "key16": "nDza4wF6DBrXTz73eJtCXGPeERX17CszcSj4YigUgR7b17obKCceXwc8yERUd8CYC95auvg2kpPKkbYqvghE61K",
  "key17": "5VjhkX7cnbyx5BQx4JVNMLoeJCfmhvANd3RpTVhnpZzVEcaKxntZarrFBWPaJhfFUwJT7BGfw9ohpvjQ9LqbSsMH",
  "key18": "5F5BNMX1R9ycEFa8FwB9tZxcsTyVqCPgo6LirTsD9r9qaVJ5s1vdeUKLryuQt2VSgT6ivku5eSD1ApTcp6S3T1TD",
  "key19": "45ZydzvNiDvqRmMnBMu1FoQUXfxLWWbvmETNFGpMJPuMYePT5RN1RXrkGeBaXEwCu8ubiS3AumssmfenohRYHRNu",
  "key20": "4egsrPsi3skphBeQHd1iEm8WfDnk3RjmXzUoMGjAixHetFgHgnEx9o4RGxeUNe1FAkZcdhdER2M9JtCW8MzMmWpx",
  "key21": "36uB8rNiZ2gq3nC7PbNr3vKPTskeRYLsbnq3KMfPesWRfafWhv3un6kopLzFmT7BCr7yru9L3RaJo5n8o1yE5QPE",
  "key22": "3qkjQBjJ3x2giMTUWmTyL2mrgPs3uhtgwcCHTxWWG5T7wzqgmegqS6L7kkcH42C4JfUZt2Bzq31zcTBHEa34auYG",
  "key23": "2UGb2HDgAA11NEJzfzpqXbpx6oCbzxJhK9UxGUwyx53q7zoK1T1cNaZvS5T8eD2RnUzTLW2eobP2Cje9twdkzPTW",
  "key24": "33EVdEnWXVAaSD1CaJ1FcKvXL3WDuH6YcYTYh1FiPWDQGWVb7wMqS5xB1dQhkjdPF4Q88DweHm6gQvkTuHcQdRXh",
  "key25": "76xfgRWYDnvPrkYTYhRQ6oomntBjKJ8BQaeuw2Y2MQpEkhsWhLv5CVXTQhH9234FrfM7o7skBf58dCFmtiA5Baz",
  "key26": "4Psst6Hu9PoEnRHSgfNj62SrnvuS8bu1tVirDpUYH5yKgdcZuDhSt3S3n3TSmiFZQBXwRNi1adQ7X6PRGvjHuToT",
  "key27": "4mtrWCPK8Dwvpr9EPyPj6K4Rb5WPqFw3FXWRH5MP4XnymcDtvJUkhvsXH3a36DdLMMT1YKq3yTvCZkfvNpwpsB1b",
  "key28": "4ZomgECrHEmCHpCCKXcvdX7HJGk8A8VQv2SvEDAQHSqAZd1TWFrwpKq2B4t9oW1sSMrtppyszXYAbk2uXf2nP3zT",
  "key29": "5xCmViZLE4ew1tAbiZZUqjbpwy6EXkwWZ6HNmEeFnRgf1dp72adjCyhj9sRdWNNkVcGcdtS4ZDW9N4RCy8FoAU36",
  "key30": "4Qa9C2KJSPtJeZYoBYwaTGCvnUBR7uEd32Q3yBB5Kf7FG9VkwekAJ1aWodxVXKis2A5bu1Xjt5C9gNpamk8QDzsx",
  "key31": "4XgzoF28cB7JNEV2aEikE1wRGva8Gyc9SoLVDswvrULTTDS3tcah6Z4Qkk3DgZ2QsN2CPaoEgkTFVmcBAQTvu93G",
  "key32": "4G98Vmeb36BNdUnHxx88H9gPmbqK8sXiM2yPv42p9LspVd8BZ3cKrxGJVjBoqnmuupEnFk51yWG3te391iJwQimS",
  "key33": "5i4KgBrudSAk7219LhFRL1nSqLxnXanrHEHRyGZhMUp5utR2YmtG6uqLy6Ze7JH6zewvg51bhrsqati4hr3fspmJ",
  "key34": "3hiwysbUbRGvNv7h2N7ts4S1B72N55GZvCZRnTDzFhCYvp3xxFHXSUFvcMSMJA3hZBaXMk76CrWJn1VpJqyFKHaT"
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
