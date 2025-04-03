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
    "3hkLHKnjC8Mhg5GhNDf2dVHHpQvNo4gdeVfHuy5TZnoUW1hXJwqez3WKvqEdVsbSgeKgNiNTYiaioGEWSDrPgLRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pye8EPDN2CgTuwP2XB6V2Pz3aEHnxJSdSipYftmhgnGcmnQjYMPzYkkbJcZX6H5sGXoTsAEnEVoC5fgQr1PBYA9",
  "key1": "33tBDBcZfafJL7SCA18x2eLiXwBBPBnMp63fR8ReeG9gKspjCzR2LZapKV2Af3peXxVa46QhNycgyo7HzfFpK9M4",
  "key2": "2LuBy1BvmvewogVyue1gaSFKFJKUuLNULTMmtkkqWMZ8Sxzi1oS6CV25BqBSt3ZjQtkPUUbE1W5YiU3hsupgFLK6",
  "key3": "2adniCG3wkcGvGSUHR9EB67DT4pPutUXhgMu9PsxGvjHN8Te4yY9nyMN8wC2jdbQ97hECq5KuuvqWWsAXezCLET9",
  "key4": "4yx5EMcadnbGqMqF3tGZjysRG1E1qY3fyoYHkksjEwrQTSBYX6qnQ8E1h4Ta9p2sLUXjpHVLGufxmFZGxMCJ2yAu",
  "key5": "2P1h4TDBpxcxagHwnuFLvhYjyTpWCqWCV7PU5wtRuRpEiNvtxsjXcP5anoBmfBXaxXNv6wE83sBRRUnmodA7jcTV",
  "key6": "5WHWbUCb272aZG3kmaor5p8756SzNm5mNZxNjgwfdBsxEgBC7yhDnEEWjGqumicQMnfnt3WtCEVdp69V2mVAYMA7",
  "key7": "53ZdxJs4YzDekEgTdXUwA7UoUZhMJ3N6ejM6Cx9y7x6uEoaCxZ7SsErHyC15iRNtC3mFhpPd38GjqWgkQ59S6F7g",
  "key8": "36ms6mrqUr3uwd39yeG3iQddTMEt5n62oVkYSgNRxaE2twsQGYKftFEaQZcLZvs3LpheQm1fsi6fsEj2CAwqwdTE",
  "key9": "4BYEVRNHUZmJjKoLYJcG7usdn5ivFpiXp3u6wmKGDXPuZCP9P5UbrWHy5qwLtzg8zKUtscRfst6dPUSBvQaW7MCp",
  "key10": "2BuqGDWUBHiMvd53dM2a2P8r5X9Dv6MbA1M7YsjfCXHzfRwyyJWe5DPNUhb7XZA9kUP2pXFEZRQQ5MvHCeP25Esa",
  "key11": "3F8Lztom5vDhZt12k8vVUsfKa1Vigko1SqUix7qazxZsrfoesoD9fL94Bm9X7TQB7ezzw4JsNP6iwZ3i5BN5Wvxx",
  "key12": "2hok4HsYBNLJbAnCNuv7dQGYNhFhGiyaKUhyL5PTPNkiixRXMJPR5pGkkQozAXo4U9cxe9oqGsAgSYMjL29Ckjzc",
  "key13": "2Tgv7zJaGH99C58ix7z19myUqnCe64DLqAqp5Uid5NzTNzrma38kQ1ZCeuTWdWQkunYVYHWQUdN3xn7WaCbE1SUb",
  "key14": "4P2wPa1pt7fZNhr7xdwWhBkgRkU2SzBmunPHzQdRdgUb4TUhJLyqZhz2iBDGorWLJHvkVeJsNJwoaShvrVCLM2D4",
  "key15": "4YadNxdenvG1PMRrPpY9scWmU8mQaxszRy43JXuRoCK8HbvLgzTK6g18ZURwPXxrPGm6diYJdFiDGkv4RgS2bj6V",
  "key16": "5yT2C8RptyqYnjYzpurW64rVdb18S4t3T99C4sW8jFprfxcdYvjCpNrstDsM6V5FtJyGQ98c7bKXcLhXCASkQVGn",
  "key17": "fVtFHtSvAbgPmxhcDXja3WnFecivnJeXndy3iEoS1ksLeTYRaKppT9m5qikhQU4oh1dnU48ziUDGxM97r91Y3LA",
  "key18": "5wwf2fX6w4M8hbBD9QEHZgDv8FAPcYLFLpP1twxHng3pFQgFLNcdSD7RnP568wCrN95z2XjfUpMKEGE6KwfBQ8zG",
  "key19": "4PZmU3bsVjF2LJnzGdLxMVtYVpUW6MFqrNhixmoutJuPuvR4sH7BJVHsCzNzuJa4RJDYNRx7QvAQDtcrgJMPiRwk",
  "key20": "2BPnLLwvbjDRGkD3gqzmeDgRNZJ8awoee8xdPnvxTdsFqMW5RZmycnjCGyY62L3mSTuHqUCzs5RpiiB9moxEUm3k",
  "key21": "5iiWPLuGBZ1JWnDhyPamwgmUbhhuxoD2jhbVtYKmkPGy4jCCKsfAHsQd13mbQTRYwuTdxoEeS2P8jsVEJA3MTvxf",
  "key22": "2QhXijsdw5K6Fu1vHbJj2wmbmziMNWj16xXtH5RYeedw8B9cHTPRHVMtwkKzKWooPF6SAsUZ7ikKoSPz1NoSHasn",
  "key23": "27xGfCaHBzsFVy1Xg4sxdWWANfAF3cYvijhFD1kdQEZK2Ab7UshDMbRqpmA5m2FjYemw2rNzVrADNa9RgnzuJKii",
  "key24": "3AyTbGYR8Ehs146iZsfce6QQoNUYobA7Bnk3UyhRgaDzgUHrGVLWK1jNa9nSCXKZsJ3jdwtCiJAPv1T6DFvajt36",
  "key25": "4Li8P9wXmCGqMde8B8itvZupWM8Qjd56EUior1rKWqA19Hmzj2rQhSmw7EoTzfFLsNH6SeCkqkbWbCpaQmcpvyft",
  "key26": "5M56BcyUUTJpacwUSB9eUEMH2yaLVgraJQmmriRvR9a9sX8jisdGNM3mi81TeG2AV2j7zExZjReX3FWzaSVdGUVL",
  "key27": "5qoVkKfz2WwkDycA7tFCFWsU7ocyHL6zmU8ju7iJEGWVk5b5CYt4tbqioc7A36cd4jB6sZMWSYF1i1YN4T21WHqW",
  "key28": "5S8anafsVDXUcmLP5ZqM45jGr27nek8TXs7s57w9iz4cAGmb3MYW3FhMtKtxnGfUrXpCvAGLhNKPKoxvWNhxDut5",
  "key29": "3p1Pfkv9tTuR1SVcwfRUysyZf293kKRVsisWCkukL5LbBY3CwrsuXqgcbg31Yjh4nRuiZjUFDhzX9LrcQJ11GRqK",
  "key30": "5qmQxTdvxwiP8s4DoG2VvKDFFrKu22KthiHkUuebfhiJFeUm7v9YHQR8b8qptkidej2eu7iykdEGUyzo5SGuxRC1",
  "key31": "28rLe6hZrK3S9gLtv7UD9KaWtXaq1QUwZep9ZecWvGqPkDxBUiUurfXwwEtRXze9qCTwKiqKeKCLeQay6hBQUQiQ",
  "key32": "5aUKuayhPzvaQXqoCf1z3ikUBcD45v9cRZzAm859sjC4t8nx4Zxfeyu1uG3n4RYxn2u4MNeVhkUcZH8AjGAUoBpM",
  "key33": "23rTtb5NPm3gvA5drhNWS2aWNjkRS3wzMy6BEHsF1qSB9UUtuikA53DS51poNAGS4F16zzYUrGT95y2tZSmLMKRw",
  "key34": "4Y5BWrRvvfddvTFLGH5PQ5KJU6oDYiqM3DtRvhs2NAohNudjm3p3C4yrwFM4HgwrAXzPVonUnwQNUrGu8MErET4z"
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
