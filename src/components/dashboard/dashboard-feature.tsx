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
    "4vmGPSbkDUaxHYc2U6Jjqm56hcn2h1vDMjJGByJVpnuofaUet867K5h3ouzFGPT5p4J9GSpLJPT9wJpc99mbrFjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32RqSD55dmm8mqfohWiTHAr5uXZFvAoGQ3ViykXs8Zn3XhoWMP7nJUfEp5uRgLx8gKiPbRQySWQSMK8pFnz8ghAo",
  "key1": "8bwUjrCPUNSiatQEFWeKpSs7yMqU2GEShbmTUifi3h4snYwe1rCrPGJ1LQKzojkuqNnaE1wAbjaWi9WbyfgPzCS",
  "key2": "5Xz6scsRcPqQgibgLkPB1yviJSj3JspsuXeFMU1eG2xxcicfmQLvjK9EyAY1FrmBZEGNHhK94DXXFBDMtibrZFbd",
  "key3": "ByAUYAaBPL6qgDo2ZEPBSXxifpiqZqUtdDzLF83Txf8o7HaLHX8a3CB25QRv7V79EsiBxrzrd4acVx7TmTLzcjQ",
  "key4": "3hALLNnhwWxxCxuZDkPbzjLqDqUbFPSMeDXS4eaL5YVmihNU8vJVxuUdS787DATrzXMkUu8o6weZjqhP1yGmwyAr",
  "key5": "Nun2fVonw9UtXyTztzHGDT5sz6QepchJoGdRt7EHXARMj7gzbTVVP8rgYXmHAfUowXN9jo7Ftdg42tf3UdradZc",
  "key6": "48XfnvAhzjyiJKBYNv2d2VX3QQzRf7aFSt9FGque8gecjJe9UNKQ5C2KTTiMDFAqDei5oTwTeowa2xxssAoo962k",
  "key7": "NUKrW8iR5DXTUdeNQKqBtWh5pYwLwZceQHBsVvWb6RhcLjtV1nRbxCuZUVGu9c5qcfXtVWGaU9kooBvnDoBQoPC",
  "key8": "51ni1dMeY7yPbDsnXX8tF1uGZjwv1c4eTkA3jbKDd5rNS8nNAGyoYYgTuQwyZa56U2eTmevWHu4PEcfcaLpeSUwJ",
  "key9": "4nZNCGCcFyPS1YA8LkKxWakssFULocHpWESygqEANRc6mDr57weoH8tngaqhaTRhVPqo2ogNwGciGdUad9rnFThT",
  "key10": "9GwynPoKLiCnpqNTLGALAoicg9Y4xqT74c868FvsJEWVnK42jV37NTr2zcecgBMdBKie3Y9fTMdsAWUKuQtj3J4",
  "key11": "Y9aWJ9rnQiv6iKyuqPweQjzYjGh9A969ZvgcMep6gdEk3TDYz2Hib6fBMNqKrS5o3rtbY8HgmCVWgUuaYw8zHce",
  "key12": "3nLapbZrejFByBTAigsgoHApoBPaXY5RDTeuARUJ5X3imCFAhWYgbmNoDivNy7h8uJsxjbWTMhVGDjwUSkLJQLzm",
  "key13": "4EXm5xZFUmLqg8cranvqNYa2uXrwgsycEiKVdNnotddEadkeTeeYjXXd1FHPw6TVU85muic9fBWbyUyR7pLRBKaW",
  "key14": "4ZJmNovMYW3eY567CbxSbm15hHARRpYbRJCXu6GfDkeacoj73RcXp4uSzJuRUJC5Rc38QgCsiH7f33TtDL4rmwgx",
  "key15": "2rkZnyY9Dzcj4pFvzHjNrixQka5t9LEKrnnwFofWNXk3gqNiZEjDjBEmj3BisVVq8H6qvwUQkyzqnoELS166N6XM",
  "key16": "4NDNDeM3Bnf42x3a6A5irTXFyGaDkJYXeYUTwoCSZ3Rg6bKTv1gFT1KxQ7QWn49kQinHsbZRuvFqqM6aP1GkUXfE",
  "key17": "21rjzcjixywmhQjK4DBH1rPDMJBqr1KMrLN9S6vF6UZHKgBeuGjoZR2af68B3nTvJFfARpQ6gEx3J9cwpcAY8p3i",
  "key18": "5kBvVGYiY1Ac2Tr6T3HnAqZ4ZJLqGJ65tS7V8RAxSj4pDWLyrff5GWb5YjYMTwFY9hRJ7Rb3BzXyejZJCWNC6Lr9",
  "key19": "4xP2cQziEw4ix88ihV9uKDqJYvE7XoGAZttQXq7M1ZZjt2BzRMC2UXMWZpSoVjF3Fd2vt4a8jbUJRYQt2CLLVSxW",
  "key20": "53dkfDTMB6n3Cfkh2zH5RCyBKRaTtzBKYPvLWzU2aySd7VAhDubLf7RmDkHztdSFy2f3Ejqi9SZxBtfHurDRHZ8b",
  "key21": "2qH5dDhdVMKzMDA6y6bdUHek4xQV61stxsH2ZKKUnwvMdTTtXgus7ujtsXUko53unGo4D5UJn2sJRSKTvqEjfDTR",
  "key22": "2sa4HS8jCEWfWg7q7KCtNhQqUNcc98mnJux5XYcmZ6wfxH8sAr1s8rdsik32ambnaV5nw9aKTBizCtpVsetoBnaY",
  "key23": "58mW2ry3jzUaEM1J7SLocNhhJCq78tjqoNq1nmohrbfE65YVEnKGh3PAFBheJG18YSKfFeXt2AaYH43DrXDBMBwu",
  "key24": "62sc7ca5DevcAdBKWVraxmSqSLtHVCZpnMrHcjuk5FrgCcdseMnm4Kt6Gk2c5DXozJU4wv2VpnRqBYg5VSYNjrdF",
  "key25": "3vaN8ULudWSRjMR8vD8XSB3BQ1xWZUTcp7LVmmJezMajHmeyriKauzi9JztSahVxyjw4uWm5JY9hRSqFBcBsyrq",
  "key26": "4g9mLsvULPoY5ei3jk4bRi2CWHcftFJPpzxp2x8HpXjttKdJ2WFnvAoL8xwbQaszWkgM68XnvTYtjMkY5qFbARr9",
  "key27": "5ZNf6nwRKJUnpjRw9fUsxcUG6tzShwCpRUhtcGpvMh9nqVnjSbF3uYnAVWW83Fp7G337JupqkrNrdmnQ6fW4JBNX",
  "key28": "TvqzzRnxvGGkBM4JeoPMAYyDz7GVWdwKnm218naHT6RpsZdxuCdHNHmPJYrxNeybHi6izzZJDTCbkheqPABBVEo",
  "key29": "4H4ArfM8LCexXLRACGPGNhc3549s2hhBBYDQ1GW2tXFHq5br6k3NKgcix7Fmz4DvC3mJrV4phdKuZnSqYATkzMPG",
  "key30": "XWVmZTMpVaAeqwteeaXH74Q5CbmwXeTXnc2Ndeb7AUBG1rzjsPUHmQCX4aRTf4EZxjFpa9hho2XAw42rRkFkjJg",
  "key31": "39mBDuHaXRhPCiKnnnyVqxPdWmefqQsMHwKryc1tx6F2mhJBQ6k9zTBmrG4jjw9fjG3sbvv18yxNChpxd68bCFTG"
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
