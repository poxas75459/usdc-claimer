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
    "2rYYHmnHz7wM2zm3BJP4QPAsKP71tt4giffiaCZeNfrWeCRN6Lo14A228Q9eTXV7bEkcwe6wdNCJanpSx16SMKsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iiKu2HKLR8cMnb6whAzxqCsrpEWvUmCV7a1WyFM4qu7TFS89TVSW374eknSqbZXuxaRHAbNF274sGXijvZpichC",
  "key1": "5CfmBQ3rcocWiSomPjrHXkh9kBRfhDX6Yj2CtmggxSo34i9QgaYL8o8WAgc7W5BV1cfT7ZosR7FSenVosPW3G1bs",
  "key2": "2hre2x8PHX6DqiwjoeS3Zxy4uUUFk8KRP4wj72jFraY1TG2L3MY3ojwqxX7yxfeSMPsf9rKpjq2XNTScaHDaFDQi",
  "key3": "N7NJP9Kz6YvUXdNgzUNt5RNdKMvZbQhXbmK5ASQmDhiboXsRcHAX5FyPwsaajShzZ8oAxSsrTDoFPvV1obXnUSK",
  "key4": "zDMWeQMhpnzoSbW8tLYNQXX3eNw3JiMgAqo89p3NQuzdLsDCzE1AhgVsJeK6pbnzcWHvu5hH5ETQVbBpDKcfbYs",
  "key5": "5qAN1yW9sxM1uComwkNuYpBqJo4B7tnp1fcJY5n1BAHRC38LUA4r87oYKbqTCxk1RgPf47Tpym6tS1ZbqJyAftnS",
  "key6": "3LRiFskPdoPDKSVAUr6E48DBdhoHgE5PjVgKJjkS4Tgmmi7PE4WkG9LMPoSvHpvAcCCDMJQjMAFYV2gxJEmuQteT",
  "key7": "3xW6iqWo5QB1uTKWa8y3i4xjdbruqgr5uanVXH5jTTPTWhgTaLhDkwu78xbcjbfBSYK8aV1dyK9nTRU3Z4Q6doCf",
  "key8": "2Y4Wde3HUQi1qqwxJtg1oErwLnjWTo11hAigX4sXjuCpBgSDzpPP6mgTbD2E57hojBT7YtVfmQXQuDne34iefoSs",
  "key9": "5NA1Dpcq5JARg7GvnTdDxkmqqCcBpjLWLDzwxhh3VRKPJferGbE9wPo1VmZnWYxvLD3quWUtNaetFSbxRvx9fUFg",
  "key10": "wsrTP31u1LDLMfKQf7M1XaYfYhv7ecaHuXjKHkwWHzsLNxUTZV1Zh8jgM4QkAfxdYCrydDd54CCSW76zLZZrspC",
  "key11": "3WT77UBNG3kh8TJctLXzzJcoNayauoWb5kr4odZwCW7FHv6MNtATAZsQXKYDHYWXPpATDr2hCUK7ypeVtRgzLQrd",
  "key12": "4dEwVnJWpuQQSHMBSxFrscT29WBtnoCXNi92ZX4oR3UyosWi5JWMBzritmeB9pRZPQn4NrnYYTiBosE3emFUzWWE",
  "key13": "5ZkpNChcBg5JoMQVaQwUpoQXPXE9vHxPWFVov3u5nmrxXtWDPaXKsRJXarAHpJ2AMXHJd7a59bVZPU3wnD6LxYFD",
  "key14": "2CkZSaxT4HevakZiEiinLYw3TkEwGG4ZA5kj3KFvHhUNZAeCf1EXDs9BUVoBzL8D8teUPJuWSwcWFBLc1N1Qm3tj",
  "key15": "5n9Do1bT8BE1ibCB3odHUyeyCe6uQFh3opxy1yD8uf9UNJVDaR2uZELpUBFSj7U1cbFYTTY4bymVzhCjsVnwP9SR",
  "key16": "US6q17gexn4JQjJLTGKWUjfyVPFnKuPAQVUpMNw6UhPFtpPc7616Q7twEYopi3TMahXXpa9pKY44n1ngbDiMP8J",
  "key17": "otBtwonFGTFL8NzEix5YLedd4vtXye5tjj3hrEX3za6GiraoTrB9GdZaknE14azCe37SPe8xYp1uoR26zZU8pDw",
  "key18": "2wFGGC49Kq6J1oPDPdP3Dw5nQDKCH3aYw5e4xmEY9PWUrqizL453avRgV1Y1K4ke9hubs1ZzgTxyNgm5KofB1VLt",
  "key19": "3tbmGCoGSwWRY75aENAC3BAMkH1ELsx8bMbSUrQJYwumXDAdCBej6q2mzaWsitnDUZo4aene2coBcntCwQCUp5gc",
  "key20": "B6QgDB6E44UBE1WNXELaMS5Nu1N6ThnUQ4yDQBDVpqudNvRRfwb1pfpab9ePMWasyKCJTS7u3d6Z5DJck6WcoBe",
  "key21": "vioPZydBKZjfjq2BxhTdbEn9gnvKFjNUyzpqYzhE5yb34v9JAkD5HHAUTADkqGBp71qzdhQ5bewJ2g6Seax63Vy",
  "key22": "5omCGM1MppJMhc2RjVW56NJyuBeLjqFrsCnSH2SrwTnkvZD5udvsmNNnrkjH6ZBxqKi1UWUj2nE8MozuJFUaHWYM",
  "key23": "ENwuyTkiEcyxgKrJuTcYYsnngDRMD4RpNaV5R5JUMXPLNdHMYXr2CxKdzkCA8daZLtF5QDJaVjUZjpH9fuFzCTZ",
  "key24": "4NHnYq1bnBPZzMdD1mzLYb1XjH4vEKmqob4RtwJJoVCurxVsHL9gQu7y6dR92Lj7H5A6bdLsp3pfBdzj9qMJJPA8",
  "key25": "3RREBdvFLvKPjsniDYRYTXxUhrueExASzptT5Wmz83DSesrG16XKzrxLm1LfG86RP6GZvBwmn11hfaTEXDS1CEC7"
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
