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
    "zvaQpAaKhXGeTX6zTZYtVShEm9G3pFXg6haMbCM1KzSgHukcznWQtE2Tm31LgMeG7meYUj4UkARdo86r6o5yPQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HaofizNhN2Sza265D6ptJYHrkZvCCDfLfVz9mGoanqZbs3kZDq6rje94AcaCELscJt3uGqyY5gptVZax8f1vzVx",
  "key1": "4xRjmSKXYjxp2T2PsdC5T7cmK6uRXkvMdJ3YNSpMpe6vbSEB4h1g5fh846g8huhX1JSk37Hd6k2Eip8Sm2EY4THD",
  "key2": "54JqGGRpSZwhPpGfxPBVede7tv5XpEuV3cwc34DtRWGBTXcBCJNEHXPvADbedEN8GWvVKfbyurVi6HE57WMJoprf",
  "key3": "3kHDpcvb9V6SdJAkJLi3QEZkAbSdrrKSLybuCMHpKKp9j3wZxrUw2wGXU3zvq13598RZrvqfkCQinrcDYfWJjjKw",
  "key4": "5sq3wrKSbAtPAKAxbEACmsGyKc5qdrM9nCwMTjTmJf6JpUNotUAsu71BfABCaWw67x7Hvq8hd42xrYjD6PMDFCAe",
  "key5": "4JRaGjHBxmvcTtpfU1MULqeoWQvUXvKneCqTLSaAyxUmzn2u7mzPqRFuSkisB4PqPJnzmpycVG4GWCCBBhx8hn7b",
  "key6": "5Pk55hJSmkGjkTxSyBo15CcqJSZQQkffN2gArBBY2LmRSRBKHjWLhSn9vPVkCfjTqJCb18TwSbmE21m95x2bfo1K",
  "key7": "oazYVvr2ptNo3w7BwXRoc6VyHjuBFMqiLdYXGP8mq7dz5ZghP3SqFXx6m2dmNdtHJK3rdTC4mKDZe2nrCrEWAW8",
  "key8": "ZidB77YYmb2NXRnWMBf2n1bfagu6TT3sBbF9GBBfAFsHX4Xza9UPnL8EEDoWGzFQ67oS4iw1utcCqb8VeprK6Nb",
  "key9": "4tbFBkbuh9hD8RVPe6jHdfJDxD93mPs5Q1mtyis7kgBC1TxMbnaj47TzGTVVFdeSWJz48niHkMTVw13PRFkxDcUr",
  "key10": "NjcGTg33bmPECrTW7bf3xhtiW17abAS34LJXaa9pL9mwd5u9KnJrzEFVJmwLSvbd9kCs74YuHwCcWFJGzA4GNTg",
  "key11": "4oHfycA1xc8rigXb6g35VYDbsEdSgbRBghREVFxvKZyERxUijGjsB2i2QzNhEPBZPnYSMrFXqqaCVhHUGEofuCna",
  "key12": "4bXjfqeSR46QaZ5j1gBqL7iYM5pD7giq7k8wV1xByC99wMkeXDS6CqbUXNzvWHFeQVg8SLMPwEsxboG3fwiJVtZt",
  "key13": "3ZQyGziLLYcLzYfuN2xLY9dSKwU6pKuBtS62H1GNDyoXUB32kx6nUQ3bSLhFspQLTnZC1xRYoM7Jhuj4QN6rPc6d",
  "key14": "5PNi14LCTVT6XXJ8NhsK5z3JebzFazwJoDE6EWya85TnDkcTHrPeKCwypnSuryS2q5WJzQpDonwdf8DSdEDzUxtA",
  "key15": "QTz6vxdnV2ShegaAgqezGaN4ve8ec7LXTJedPJLnwpfMVf75aj91bC5bkV6ezMmpfniro9pRZWWM5RxWU17Y4DQ",
  "key16": "3BkuzKEfLE6HCqoAE5fhnhhhkzEPemRtSZZQYj4GHChxDAzzc3Fhs8a3rhwL4nW8KW5kCXny3s84FayHuhGf3am7",
  "key17": "xYzFgjLoMCs47jyRy9vinSxcm6xNJ1xLPtTVQfYdgmLMpSk7w5f3kQnAdWpKJQvNcYcyEAMVj6wacvruPVKTp19",
  "key18": "7X6eYQJzZVgo9PXqjKVDgzEqQnXNiADVzzG513WCXetrHtV2Ln2iqwRXYF1x4J9PNMCcmm5n5zSqWVYZ8SwZBT1",
  "key19": "2j4h7QU1NoE1t7xDCfaSDDhJ719qvRC5NYhs6BE8HY5wEK9G2QuxGVqiXvA3KecQMYWj6m1i6U2msiFeSjw8oabZ",
  "key20": "dDqGc2ZighuVcmMpqGDhK63b21nGdpksSvjahyhvobuGgvaVnovoE7SVXHJqGqpUTeZZYEJ2cjDWJ441ZAhnPpc",
  "key21": "3JjnNb4SiFdcC9FAWCs5yKDXUgdr6HdUeWAY8xC92gLV19TrqVAkyUUmZ8Vni5WwZXVT2xwak2v1Dow6aKbNW12m",
  "key22": "4noceGuXzBDKEfT459bEay7UtiEuuBsfxnpN5LXTggT16UyeYE5KEULL1jdn64L8ygNeez15F4uXcA5gPkefLs4g",
  "key23": "2BQzcz82ES7HP3tSPDMPDf1rh9ck4WFffW3oFzNUPBuJjSZqwHvq3RU9BD2RwzB67uPjUTf8BEqwVk6ALUnxc2Vz",
  "key24": "59vEQzxujAqFDnNKhMo6H6aRf9Gv7ss5TTBg1bDMLXrewnjSucrepzzy6JGvxZjxM4JDEcE4VDbRDr9Zv6a2K8uW",
  "key25": "4SEETDG7u4zeFr9oEMMMadmrr4tLYqqBVJF2EQeUkb6CuKtiSBa2vjQ4iCQR9SA9tJNpBUxH1SYF4sYADPjHumau",
  "key26": "4SdVVJEnC9nPmVVqjhSG8Rh1WohcdDFu9qXx1nmNAw9bm9UFGnL8ikUvZcuRmEEQTupg6Ph2K5MFvNmoSu4LHsUN",
  "key27": "3FYPXw3e2DwVoBZJM7v8QqCYa6iEXJHEp6KiFdzCpXodxEKyNy4xQQ5yCmUcAj2uu1yR3Yzwvzoy7J3w7JgfTKwF",
  "key28": "ZYNVq5aVN4R37FaiD1DNJgzfWd6MvW7coRJabReDvSVyv1mH1G7WxwmLFy9t6RRKQVppFwoF1yBULYbUGEPWXc2",
  "key29": "3enhFY1y8uNcAfCF6uvZpMrTmhYwe5xQPZvkt4VsgzwFd1rruzFUHzUcEtPw1L69k2pZhNKb12ypVBaqBfTBrr33",
  "key30": "3z6NChcGXDGBra37SNEX4AV1QaX3YcaShQPX1ge411P4HG3fbPzPtLif5dHh6W23XUThRzSrx8WqYgXkHLE5ZDCo",
  "key31": "pMuYLbgPmNLoB86DEnnj2chGPLcrUJovWkf7FHjEMi1FghVomRtLg2sau8HiBGfkjdn2fCpJyc1W8owHGCCzNDX"
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
