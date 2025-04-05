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
    "67Z1eXP7PMqYcAcSwvz8vCZp41N3pXykN3V15zyamLT1QzceWeFYzPv8YiooqdVBrfAU7CKPyn2KtnyeKz4d7B4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tpmwuQsgu6fyxYdnecf9q2b7uXaC3usZWSTj3VEwA93mhnvqjCZjCV4UXa1QexJvUJ9YDuUdffY5tRajzy88k2P",
  "key1": "2Bqix2hFtw2KvyKhx8Lkz6HvJryQTtKbZFnhRfedF7U4fu2mc5WNdmiZMzKs6EfFTeng1Bxr7ou1hfiY6djWMRSu",
  "key2": "2vEhNRiZHsS45aUBHsB6aDjWFXZwqnd5z2RFCbkwWHx3UmLCDcwbgSZvpMhDpYhY8HeENh8SWfDwLnL75zGoFWWR",
  "key3": "4nDjsH2UafiUUHMJEh6Q2hTixNkn4gzX8t2Wnr1foAtj5Xjob3LeFz95vo3MMLsz9qF57AbLNrqd4UjHxrhio7cB",
  "key4": "286nC9SBbzSYnNhrS16CqMMiPkrAb6yhe5GDrmeenRyxhEthq3gj2rKMpp2Lrbtg3d9gPgZ8Two6Ygfn4DBbnLmh",
  "key5": "2BY2DZx2DMUFnPHs6r6AUBACD1oLGijA2damDktVVCeDQ1ZFGdDt3NaFWEYShywZT42XfGJxKXhFXNLfruBRin2B",
  "key6": "4933UHL9nfX83xmEAqguvUMAtbKFGovws2Bnp2jDuUnH3arZichpBLQGybvm6fvi78JjbrKy8bGmxz2r5VRX9jHj",
  "key7": "X3A6NhDEzykVxeMgpiacdvMnRiCbUq9eGsCwcgPHwXLvmGejAj7xkrsktntfs1oZNf3GfwALTG5ZEof8QERXEwn",
  "key8": "32QwvN6BC6fFwX3sMgcgjgxE4UsuFmGnvQoeRN4EVzHN2FmgHpHatYccqwyvxXbW6dFs33MMWqk3UzenCHWvYEDb",
  "key9": "2ktyRVrhUYqD88mdtE38AhVrtE6vBpZHBJbYVYRcyu816cbqTTjdVp8kcq26dKCX6tb82QzG7ADWhBWbuQRcCcvD",
  "key10": "4pY41XLYPmt76o9KTyp3Qq93DYqjpheHgmahG4So3T99eUxmWnFrj743N26Fc6peickBrb1yCGDtzqbFsB8bEupL",
  "key11": "ZCcSQ22iSpX1txXeHoMpry2JnF6XeonwpS44ANwCKViSzn4bLDxU8SdKY5aL9wuWYx4KVC77KpiWVsfsjQBavHJ",
  "key12": "5SBCaDnav715sVvCAyhdGbaTtnLkvsgUMeR5RdDw3ZbGvrJPHRrBjgi9jkA5cjf9TWCV2Rh6eiz1BAJUFkKo1tVd",
  "key13": "2G3eCHbgB1LwE5yBLT8hFVYbp4n2X5XiqTWh75bvxg37Pab3Qqwkjn7XURhzxL42v5JW47B1M78gCJ4Ebb2nAFzj",
  "key14": "64nVsYM8U3Hvt8HkW56HKyNtzc7x32fgQQtnrQQvC1nNMczdk1siZwz5FfY3S25xKjcMrGoBkoBX5qcTrCsSZsbf",
  "key15": "3Gho2e4rwfyKVqtdhbpcTZ9tawj9dqjknGvkrn8RpWGVAzphChqxgZzGAFvmacgmLPPvuf4S3LmwdbxDXZTEJMZk",
  "key16": "3Jn63HixZFVvKT954r2VrBCJCEJtsSzMjayd9anw2EMFzxyuo8JTBqN7rNf4rvNVMqms6YuzCBwJo3i98Hk3NGDa",
  "key17": "2gJp1eVsSt58krxSNP3eqiWqZJVR3j5bQjUU16k2euBb2it1DGVLNeWeMxFyQyaBAYz4oJuf71DxSXDkLbtEcyUR",
  "key18": "sD4SiqVd7nEB9wVqS7jL27EEbWhaqamV6rrvrHTRHpuiAZ5ji4fyc7AHzqrCQNWRGCUky4UYC1y36ZNNQzkasjb",
  "key19": "5V3iBxpBitEu8rKjx6AnADCeAcCGukcRZ9BVcT2XdgXruz2ZSzoPkiudypYnX3owXhiUsrcA9jTkefEvCZ8EawPt",
  "key20": "2uKhpRhZ6BC444M6erV19YyLbhnuBJW1nxVDsHgYEx5f7fvmHoY4dT85yTRA3nqGJNfPThZWvQTo4rMQcXvJRkyn",
  "key21": "Gj4rzu3XYkt97ekJeH7S4zNRTAAnGEQZ2RPXtorVepPCqxieDhxGPYiaM4gXasXkRidsUMwzBA8oGbK4hDFkj5H",
  "key22": "58e87pcHcF6k67BL3Y6DVK3PLkXhHM7B6d3poN8uTZJ1imbVNXjnFkKcX9Xz1kLH3g776onqTBZ5dpPGnFtYzwGc",
  "key23": "eCsx4gbksUNhsun9JuxAPTtLBrUmERNkfddi1Zccwa59JqT3sDQPGD7nsPXNnVwb1ZATtj2cgkDrrHYHgSkV2nG",
  "key24": "5B2ks84mXvAHK2bv7WD4AEdPgEMDyEqbRaeZWE4Ueg8Rc3x9aCTgJgnfj62pB5g8R4HmN1TTeJ1RzYrBP8HZKWci",
  "key25": "ogfjZQRrpBx3Mf1vimSghPL2PLeofSqyVVEWK1mdZj4jn8Ms8E6u8fetUJ5gRrNrQ8g3Shn7eYzef6ogBgQ1wpm",
  "key26": "3kAzUzbdKQEGJfoEmZpRXKwKoodfn1FYagZu6sG2E3NwNKQZpKjKyHumQHWGacp9wi3dB5fGMxWP1kubXmxbzzfE",
  "key27": "2APR29MKcfgwxQbyx2RoJ1qRm3uF2hvYtJfeAoMgmg6Crs3n17VeWKJ9m2Dju8VdosGjx6BUG2K9KySxVm2xodC2",
  "key28": "5vAKTSCHJGXHvKVUqEwMGP3qMbwm1UFVdWoa3mCCYzXCkd4f6moQVoozQqjjhL1YRgN7PU67xn2yvxxaHgGW2inR",
  "key29": "3aDPA13o4AGh8Q7BDWSdMQyebrT7ryyxwV3D89mBDmKQiFCZT4i9Qae6tMixvyJ7o1QEp6EXSsBvNQnzP5mKktxJ",
  "key30": "2tTLn3tH25EYdNTEpEseza1u4CKMnsxubTvXtSWHRAewfRF1ievqimMVxGswMZGrJaGANt3AjzFtkzPnXcqD78FU",
  "key31": "XPeb5o8jh2rdzHQJ3QoK5WLyoRtXQpfXHbx7DtkQQi52z9AdJ1rMe7b34zt5DHLJ5BAbNH4FvyUNgma31ov2f8V",
  "key32": "4T6BfXhXb4yNJ6BgnxARs161eUFTCq12kSH4TLjezewvqr9tixQTTpaG7G2HYTY9QByDtwwQBvJxJNjotHNajCtL",
  "key33": "4twR73seNRJFosXic8izhLkoJpT4ishWDfswkieuK2ApbGetPmmK81DehSM6LNXbRMERzut2qNScYsbGtT8S8qdb",
  "key34": "537fdymKciAbFuMsAKYRsAUdMHadtaR32LmvmGMLBiYmj3KYwk5b6krawRRy2H9JKmNMBfCUu3fssDiuz1TM4yXf",
  "key35": "oBApjGYRmECxCazz7XjvcUW6q57pnYKaBcak8AbE8BstbMTZKFzA6L8VQ5D9JF6s6gtYW8ax8q9aPQXcZcbnTTw",
  "key36": "4q3M1MJ4GW5GVKGd9ChociUg5GTPGDHNQaSEZC7g8JRh1aW3EjPNXWupNt9GCU8X6g6MUVxKvvSK7Fk3Q4QTnDds",
  "key37": "2ASMsMt7KVD2wJjwwwGgUS7dndAQxwTshg8taVrN3FPgbkrUKKU96r2x6PVFwmiDEh3XMY4EYkitjCPBGLBvPREa",
  "key38": "1JHSyw8W9GNyyc2TYc7beS2sBJjZCzMUcDkD9vRe4vbqQ2rzkuYd2e6wp55HbXeRCKKoJEE3ZxLpzmk7fqjXpz",
  "key39": "Dkrz7AkB4SPg3D41ouokuKEmTmutQVi2x4J7t5STCo73Tn73LewmSgVGgSPwBGZZ5u3mufo1G5rFsBB258CBHyc",
  "key40": "fd2Nv32weeCXmLGthdCEJpoV7Yq3em3d95oF7W8HsunhdpG5N9EV8mahK7K5nBir2b7W84i6asiSS8zrSE5cK2m",
  "key41": "5RdGk9wgcY8cp7sC2a3VKjqpr8RfmbQM4VzpmqgTCyuneRZkzFTR12bgpEG6Udgn94fqjkwHU8fEgsjTixfdf8vp",
  "key42": "2J7qpeAtYydEjDzqqrjgp49tUcLK8u2kRWDeKCekiMrTRZeK8seopCmfHCwURht1hXNihkxHiTcLXSuEoUcArVEy",
  "key43": "2tMr2cJSUA9AqmQ7FuRha4EM3HggQ5bqdP1umpE7tAmmVW7UhXdHTv12TrkBGtesLerVrS4cmqbAEZF8iPPHgD2F"
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
