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
    "2WsecyFWNB3jWn8Vnw1YaxArovG2y6ybqeU3bmCcYrQu377gLsarbCR5Y5Y3ic5swU5BG4gJ2QyZsHQJpdUo1y1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NRnse9UMwzLVSTR2Jyg6yrpBb6zVm8fBNV1iVm1Bv5rmviZq5J5T6mRtfvctb6njVTuRBo9gXiZLyRA8PWpwgj8",
  "key1": "4kXG3JVRZNsHG9CuKNakai9PhdUdEvtTMpzaGxV2sZJRuLjqEyaMPFBkwFR8VpN1G8eUgXdw73h4S1U1TR3nRhx",
  "key2": "SExSiPXZY84zMhV6gpzZgPWQS4VQoyZfCCXLhYUJsgDXi57RugBxkk8tDQiKJYagFgQcGA4wXL5P1F9sq9LmyMk",
  "key3": "LDfVTsYM8rDYiBuZmMcvBr2YX8MNWMskjSWFRim5nwz1GbHRq6vUueLGATCPPMkrpnvgzwCPfqQbuo8tUA3HSoV",
  "key4": "Mpqw9d4V3cDhhBTyD6TsYnyR2J9Vnp7TTgxmi2PP7cmBWpXfzrMrxekCqzBiUAn3sriZzxzRpP3kQYYk4fuiWF3",
  "key5": "39EdTQsMrTkRoDo2JT2tpow3soKxHHxHQkYVRy9gzrGHETR5g2YhWGZ72Sb9crAiSmtqQchM7RRoZuEfgJrGr249",
  "key6": "LPszE1ykNSMiAkGkUbmorHt9wraHpQHEVZWALyMkYFnc612TJPPSWaM1wLc7PC7wc6FgfMcRWKupuDh8DPUfx1D",
  "key7": "F7gshpnRqCFcrpoZ4mC4bTWCMBXbnKdiAQGt3XubHyrLGYdMmd4t8woJLf7xipWJyTdGo2xDUid8CGbKUFbMqTv",
  "key8": "SniGp6LBjsBMkQnvc1f6bSU1SXVjwRet4Sm9pfGsm4be713WXtTYpzEEPeUM41nsiZRFjpVWEkEP6raCBa2TibB",
  "key9": "eBEtUrgRSN2ZQoNACBHzPEnFJH1u1aNw1YnW42yYdrSASAui77eduELN4Ho8hDNbw1u8KvMePrkgcNDho6UqQoQ",
  "key10": "4hjtZrZxsQrQE4qW2o6McWMe8veNXovFY5c8dtyB9AtbgcYfgZHXNxUbGQU4nYUh3vQZbUZM2y1959ecspxhypfS",
  "key11": "Dmv9DBHvFwBLv9oQBx5vBCef1qhWk2i8XT3BBAfe6H8JhkbyoHwKRD2FuFAXnA3Hun7JXZKL9hpwGt3ejeqY6qx",
  "key12": "2CnENDmftAFpS1Dy6Wur2da4o18AVAwGeVdQtB4BuTm7nJHEdNTGGpWsJwbiWU55VNKsX5boHuFZfq1E61T38iH6",
  "key13": "4HCZmrSuDWAhBhpzSq72DECwSCt5KiL8TuhaWF6fUywcumVJqpEtQdvgDK5bvFKP6j1rxT4FPatH4EjFyfxWHS72",
  "key14": "4pAc58a4GEsshQsxTUfkdwd5nSHUHoQ7ePRix6dvYqcb7bjTNmbb58RYJqFFgnWwe4jBmqJcdTwpZouBWYqzJPqa",
  "key15": "5uonN2A8oDvRvVHMgtMaNVU7ExSEYZZDu4ggsNiC1trTXvoJhQQTkdxBDN5Cssqebv8DaJFxPQNHdPEoDKcyQ75E",
  "key16": "3Wny2irM2i4HgSTrMWQqbgCnkQwHD1Q9HydtA6qvd4XENSHLDDEuHK3pzhc6yfZTE5vv6avU9pFTynwjXthBMXpg",
  "key17": "3gonZG2GWq8ZzS9UXK4bEG2B2KsdLVitPKz4aWGxVM3tibaN18B3VFrCKgXSpivVyDAPw9ANDDUvCcVddyhzaSfP",
  "key18": "4DqZRrHFiWvpCyLgtosTKYR66k1nL4DzQbzfTXZiAeuPtrRpnCKEGFBv96FvBBxvYuxUjiobPdftELteUPcwQyoB",
  "key19": "2KNmSaCvdPoLZa8xjzmbxu4iscZVysjzFVcY9XRjmaofihksgFVki8ZyvzqaeMvh113kDLSLXwvdyV1hTvttHnBx",
  "key20": "6NTp6YJ2syLoy9CPBVMUPvKuZ8PCUtUAhoyqxX5npkWxvxaMJykB51PVjoCgHi8b3u2Yh1mvjPnJWTRZMZRczx7",
  "key21": "4tbskFp6SCWFFyPuh9smJF7QaHiJG6HaseejfiEbwJHsVpGpLnnAGkjxkWY7u11h7BSJSVFk4TQeTrkVxZbMfb7o",
  "key22": "5hnVksb8vmHrHUw2LnffBJFmcnAPiHS2Gj13yHQuE4CCS82hWjCdK1UuuHi3aSwuNRTDPfgs8gfQdaJr56q9eUhV",
  "key23": "J6Zu3dmujiuH6CBuFM2wUfBTHdbZD3c5PzCz4MvUtQF37Cj1ZwwvRXZeunxfRiatv3MzfcA57dd4jebgWq1WzYC",
  "key24": "3g5d7Jcsbv4BtexGyCXcn7anz7rMpXwH8SVX7vCSZkCCViat5cgRHG4HpkRnr7FLMhnY6k8tUZHhyHTytiRyAzuj",
  "key25": "2yHHdgyusYBC56nAcUf49bWq68XTTSHFT1RLEjZSdMQcaK1PrSemfPdv4ryjFFwZvpBJ7wRWapiFVnoX3L2etuNs",
  "key26": "5Nzz7UUVU2Yo56NPz6U1PCeoGn2eik1w9KfShXDvxcNKZDmHHT9vkNppbfkJgdWxGKu56Rp1GWPCyusiL2tpA7VW",
  "key27": "3fRgSuWdektWtB5rfi3ugsZDHCUaPanqo5Xie3GNajMWgxfCi7opxsdtiFujTJecnsmrqRQtJ6UQD4hbaCHMz4iL",
  "key28": "7tr4HzjYcf3oa8rM2MfATsfA6hNX1eeffK6V62bRXNpBQTxCPdQYtwpyArNXSeJ6asTWoMdiDUarNsAP16rnVZu",
  "key29": "4RaevpN8fRuYJnDzbgrpPy7gPW4847aYjFXu3NX17E32LyAXFqV5x6PJCgPCemLm35b2cX3udkT9YFUbw8EWKavJ",
  "key30": "5Sp8tmDrAie4nmdQXPZ25L5jxh3wjb6dZCRT5FqRrY4EWevjYcsbd8Us2PrKj1s29NUXzu1WWVnk1ekdN1wNNww3",
  "key31": "3V9j5rE6VSpC3U2ZoGKoNaiqzof6ZebjMN9ey3PsQNHFaLn7qnt3zUem66V7ijazZwxSLrD5wPWssqhA4WzsB7nA",
  "key32": "2zWWSX21PkL4LrdT4iYyrWfs7ktt3SQS94VmQrjuwbyCiRjdUKfVg2auFDFqx6S5DupLttvBXjEWBDRTbkThDYZ2",
  "key33": "2JykEXExdggnLyTsBPaah5PxepieQ3t9fMmNeEjCZJMY3o9dXFjS6TRQ1ufJ1DAYwX1jbY6xNqVQprhQk6UUidaS",
  "key34": "2hAb8ri5cLiJdZty5wY47YmcHesGn6NRY8VSTJ4YagT4uW5Tdy33sxvddc9jkLUEEP7Vn4QHMHbWENHuJKyUcsFK",
  "key35": "3GXhBAhasmmzZBG6GjMGwtBmDqDBeFGvBbDnZ1bAKVrptty8LqoaodGY7nzdVMhhGh2E9S8HRSfPJFv6fesEQvMH",
  "key36": "2o9beVAVSj6ytLze1c2qaB4mD7Yv3QE39hPmyGiAorMx8FnuDWydeamRVHvFo6nWcNy4dR3AZYLuyBwAYNdtQAsL",
  "key37": "4o5724dN8EMvPRd2sFnkQnrUp3a4daN75Nx3CSHn7RfGYVrdx5J5eZH6Q3cejbcDZcz4K1k7ZkmHRd8d5HmERZmm",
  "key38": "2ZQmW2QW4aMZorvtXKYyjjiyp7a6pf5wFgMzmR7j2Z7UcPe3Yz9kPSNiyKHnndVxVfUoCL63svJATRbY7eJPtjyK",
  "key39": "5Dwtm42R75u1aK3NXM3kY3a8ELBkyFLCFvR43dFViscAD4hUcmS545um7wdtBV51bzTdhG7yT9dMGLBCz3mzSDun",
  "key40": "2Bo29PrzdYydn5c5GGB6UjAGSAe8QN9LLnCUTnAeAdDRnJeNXFmPgc125vBBuVKiTskMhS6zpU3j5geQ66oenwdX",
  "key41": "3A32vcqTxU6PMabB7WEASa3ZGc8fPHDzmRTsUhQAhGoSSCiMxpNFEFyYxv4YawfwqeyhAShqULT6JwuA2iMFx7My",
  "key42": "bb8pdw3KAhmeLut8kH8hgnNXu8jgV8Wby3wV95DWqN7Eucf16Hjf17W7U8KXbDcB4b98xVg3pULCDZ1jV9SGJpR",
  "key43": "54vesnM6E6kSChvAve7SX5LiEdHzdHQLfuNE6dgqfdy5SnyCaLTghNjPWivi9WRhzbsH5h3u7jVhmsWs1xcjYX1P",
  "key44": "5ogbmyXLJ3h4U5jVFCc8hxGBNzWTdU7czNMy2TxAudnYEjbEFC8juzoV3fSveZkz1XbAR1BbeEHkPnhsyHcSopT5",
  "key45": "5sP295kNWjK1qmWedqQBSaCgYxcUBwmE86Uw3tdu4fxEXpemt1dCuxjaLREA5UyikihSencNpZBEZyRTQzadqCGo",
  "key46": "cjbckEz4eEmqBV7ThTmnSK75fof7L1o3hv3U967gdhiRmXBqNArNhsoDrXds4F4M8a16S6aEUGSSLGBzNLQJXTF"
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
