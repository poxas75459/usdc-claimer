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
    "2YGj1sfSaJqtjzhHmXP3ed4ukV3u4BLXEGfKJ544zwYjeixTAuC8BFNZgVkSyfSoJ48xNvQY5J1J4MK4HKTMBLwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EBDuoyCfAbsNcZHcPu8DjkEQD6XxKb4G6ApCn1omz4cz38NsgxwJs7iMyWHf19Usra3WdoRsScRpWDzWLztirfk",
  "key1": "4ZQZtxtjJjZec8TBq5ZvERXMCdi523rkgi2o5RmRTMiR1iUT2kMNQmpqW7axy9yWJfsKkinap9FavYAkEiAEdABo",
  "key2": "5LchqY2w2kJZEJkVWMr365ohVAKc7RKB5SyobaEQSJGaDKmaigcQF2RjqARVN7f9QEpX3Vc4NBMaM9xznxuUVW7x",
  "key3": "CQsXj4kN9qYnXWmf57VDGkvah3LR9vEJ8DdvqxdhQtygKjWiY4TBuMpPWitKAZDW91a5u69MsAJKwVyoEuPVEwZ",
  "key4": "hEPwTmUn6gArnPQ6nLQPFCVAWV5dwzY569mij7v17VTprXLkjdgq7nXhx9LqtSN9M1gUfQNpEop9u96kt2BDxhZ",
  "key5": "yMutBtj9HQDQHRV6qY3MuxoMJCvzxdwytUsj5fk8pFtCSZ84wbxxxqGyfwAMJoUkqdPgKYg1nXj5txTTvFvVDKV",
  "key6": "4P4nAFLkg9UFxAdtVJ5p6rHT4QZRBX9rDWG2xASCvgup3aqDrtqsjMPd5ScVGfsuTjWpf8WeY3mYFBT9PC3awojN",
  "key7": "394S6FJWL4QGNjCFNksgdVUwZ3e4x2DPEXm7afJoQZ7JrBHadwtN8YhnScUqGBYCzbsajLLB8cF6wL3tWF8wLUuv",
  "key8": "MAfYP83MMa7EdQcE58HRDNLHXktZJNLjLdJ96RTmXcF6TacVuJenDZNxeYUr5hNTqqwDdkbNw8PdPoLFVdDZHyg",
  "key9": "43tcDwkpKT4R96RGrgrvYaPDaoKVLMtb6uFN7W837sHJQ39bFgjPgtiocsX6wuGJNywnF1CRFq9uceTyGW33ZwfE",
  "key10": "2wuEtxoHAicMU4jPtz8U7hdhD7EV6dPpLnJUb4gJGppVtzi64m96SEkKknsDjxf8bwpmympVMJofw2ZBK7QJeJE3",
  "key11": "5aQckUA6PmNebLHdTZwLmHUc5gu1e6kMBGQZUCVxHTtxWdsMyqzik9RxgFGGqcDmLR4ypHLvmsfTNhcx6UZDQxmb",
  "key12": "5PTYTimfbLX8RG3tkVKccTkC1xXDoMsGu8yoJRM2bfzHcLXGfHhYovbmxSudisNnbUmTuUkzCw74xe5WLAS1meHa",
  "key13": "5bB9AQ7m1iZwNz2VDiNZyGj5evUpmP4EZuecGofJGTDFK9GMcvajzKX3ABzwgaR5XUoJRSTjt4MjbNbvF9cpjmVG",
  "key14": "gJGmTXDywfXPQDYc3296rsYfE8gJXUcuf7Xu8mhyJP2ErLtKV6FLGTXeg6mEgeAvNHt4hpoYrBNSJ1p6W6KjojD",
  "key15": "hyj5wgvNXLZiCdv9KKzS6VqMrYqLaicdYs3fPxDHTKBwfXZ7F6BigXpyfuYUyUG4WhkpCHaqeEA7vWfg9VPit2X",
  "key16": "4funP3GR2HK4rckHrHCfUw9zdxvYZq2HSYEWEjwZs8822yEgw5STCRNWhKakysPAZTNPNw97aBTvdrFPDSiicnaz",
  "key17": "31sdw9w69hRjcRTBLp9pQ39D6LUB85K1cgv7jzLfVLNMLd92PLCjmQ3tfEve1inzzvzixi1zg4FcTCv6gfEUrXg7",
  "key18": "59qo8fC2kDj6vDUMPZg6mQksqnh578YQio2DEn8h1Tj48gE1ELT4JVxdmH5BJYMi1YHfcVkFis6fy42KR2SJshe5",
  "key19": "3GbnUSUx37oyRRupMBAtdhJBpfsnrKeBrtDo3pRUgSd1tJnLpbXGek7yzhadr8U7zpmZdK7z6BbqyJXu87BAvoBS",
  "key20": "2Sv7caUkpv8nuMtCNterqh53LvNTpeCFDiV9EsehETsyAnCHsk27Erq1nJLkw1cvufxViJwUzzHueNYtiarDK4Ja",
  "key21": "SjD1QY9ETjmp4wQR5DUDJSJ1Phfb1gpmGQocV2wLNrQAbDBcssWhCnsQkKU6zBazUe28rqKcdEZQNKiYjWVy6TW",
  "key22": "3kv2VY2iUGiWfY7BiQdTQZTkBiN9Byn2MWc3EV7ju7KQYHYvKDsP78ZHM1NDth3arnhdKm7bJ4BTtTDHGzCQiU7B",
  "key23": "4Y17J9G5m9UiocxxysAVQpHyabg31vUkJ1SbpuoboPGTp1jzLKPzRFFXoXtEjXABgB8xe11NGAi22tS5WjfRVccM",
  "key24": "TrWL46P5PQKiKrtv1YftTr4T6CQdidPhoQKQBdw7MzX2iGgU4CAmEXGp6UdBNzsL1isLkPoBPeX6rfsCm4irYHy",
  "key25": "5VWjGNzTBbTEFETHKuHJtWQjXdDYUvrhGfYjBDzEhSM5fGXVDJxKvEiVEitvEt82BriiAC6cN22ZZDKebRKo7Lsw",
  "key26": "3N46w4iWTjD7isBvNHN28Bws3Jv4i1eZF5tc7UpgiZp3CZJFDaLT8WRuN6kHRLACXSTRaZ17LHTFW9epWSmVctqQ",
  "key27": "EA3tpR5VgBmhvKMyN2AcboSifS5ioiLNAfoQCWbq6Y9Xu7aPnpGuKDPoAz8xCBcct6tH2wr71UUHhHckvbXDhmY",
  "key28": "3sdqJGdsp1NuwcqRuFvxwZJV2MfRqevxJj1nBV4LyeC4KQ6pQeAtQy962Lsa5guo97fWfjAs1sdVXENfm46jVJbU",
  "key29": "LLyjY8Qm4Hzb2rXcENMBLN9hdYtRHuta2i8rjSDB2BAWPPxe6PuzpMpTsgVd54t6WkmwAjEaapL2jLLDnwEL1hL",
  "key30": "3qPZVbyb2RnoStSaQbC1MuB4qQSTnfGSTbpmYwsooKe4zsEHVdUHkyhGai8X4zVKjz3jpNS3DCxwQhMydLoPU3dE",
  "key31": "2fpyJXdRNUWxf3xxDmrczcTbD76BceSncYezh8sggpohoswyBQRZp2ooiU6Yf6FSPMkRvn9PswB1FWzCY9t9t9Wf",
  "key32": "4BRmPbWnAjnFspB2Pm9MYUsqiaGhjJTrdbhYFnqqwjW3YBAJPEZaji7CbZeVpfb5qNeNmyycQTjZ7nfgeLdgXDbp",
  "key33": "5cGan8W6fYAJ6sw8Hz6JMRNWBf2SicrjPt6VcWcTuutwz2e3neBmpaEiVUp4gZYGoG9GipCxp94RmRA6dfHXnNdE",
  "key34": "2pxXMVbEkCpntHrMCM6eic3Kyx2JoafWzTLa24FGXFx7GG5RMnw9eLNUBth1MY1Hk8b7gK9szhUsZ57LZU15cKut",
  "key35": "5bPTzz5DJ7RR1ZQugQBZF3K3HoZmZTXTvEHLh2F6HJih6k6dTWhiFUtsUHfKnaXvoffPeZxhNh5ZJaF1UT9KBPED",
  "key36": "4VD6GE3VTPz9hF4TsAKGzDSbnjAz3ELRB6TXYbcmE5PcPX9pFEJ8SaQYfAuyqnHr9CmCwchNZbDxmoWw77KNJJd6"
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
