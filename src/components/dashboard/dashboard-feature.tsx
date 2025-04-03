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
    "3LC6PTvWtwnUFMuHmTSt8xgY4TQeowirc9hyyyq1X4fZHRg97JwaDuBEhjEWDkgFqgGfGPXLFkEqVCg5tCCBP16n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vXY5DzVEJKt8kDSt6WS1qEfaToBecwTwxvzsE5XEEqRMB9jBK9mxpkvBZ7opu4Y6vMDWZ2JFxaJA3G4xazfmzcG",
  "key1": "3otsrbrc6eLBeiMC5bq8XR7abJv7szrXxzC6wneV4PfPviRSFJYWHohpmmquuBUtf1SFQCfgTe5joHbD5NSc9F2c",
  "key2": "4j7ciZWE1yXNAkshoGBJSEQdW5nznPUVKpfDbfdXy3DcV6QNeV1BrmoQvoVYUiuHfppfZm6Kmmj1upG7DCx4hk9c",
  "key3": "2cPwSst3ek1rzTMUTyBaeu9KaweXeWyZJxYcLY9xcq3sA8X247gcA5VcosxscqXhBAFRrGnJB4uzQfnCxnkreZWS",
  "key4": "9QwutuRLRCkFidN8aa6HS9SfNQzgpwPSBvKnCFT7J6h251Zfu7FedmvYArqJYuv6Nbn2n5bJcqQtrZXrRu5uGRx",
  "key5": "4yc3Zh9fpLJQQvhSHHcz518f5stZL4JqepmptNhLm4Su88GCNR5KNENXHzXbHT372iA5JPzUpCKVpZfhYpKNYctn",
  "key6": "4v6tTS949vsFpTzdxa9ccLsxkKDnzic82ycZ8T5oT7SVE4x7WDVif4FJGUUA1kwgQzC6fpkLu9RyEAJPc8dyisYN",
  "key7": "3Zp33DdmQbN4UWBtNA7bVzUXonehsBQawpm6KHQyGdgimHKT5pgUkCBwTWgRGniqUac2EZUg7BnvHQaVgHv465kg",
  "key8": "2bYX9aPAsFNdunvyiu5cm8xNrUGYN5ETXtufdWvc2i9TjGq3QXzCCEQGpvysfU33sx2MZ2oxX2Ut9UPUYcibcG2A",
  "key9": "61M4ThGtdjTz2QbffdtTeLJxoNE4Wf93hdvxMesywXm4V3Ud8ztznDP3c5ejsGaTqapzC7baw5NmkWPjwarmJxjh",
  "key10": "3eYysRsYUY1mCD1tPhVswdXCjVDmuygvk36zGNSrG4PTrZkW8PPbYF3qihp7vSZZiepi2tz5ExeNu2Jb9ZCH9f8s",
  "key11": "39Qmo7gBCKGxGG4ig75CGupdfibe5ru3seM8WYDbF4kZv4aFjS5Go3gstJ3tL9u5ybkm7DFhSjSt7HFHiqTzhMFU",
  "key12": "RcMGdqvwJEvtDhwM9B3NeRMStXUBnFt88JoPiQ7pbS1bWgjCnSoCU7KkgNkQE29eMmipqWD9hkJ4b3PwYLpytM8",
  "key13": "3JKGBCFoJoyFMjmessXYXjCyCkBJijKPdTvWiFYxiDvJcdpa2itAcJybejuUj6st6o85qjkiaZsVgmHMpH67vxut",
  "key14": "2naEJ3tBDhWhC2d4aKmGhkUWA58m6VsSP1zbYuJGfmbEZnuH4H9VjZH89AQpbxL9rvLeqnC3oqbHuoAx6TXFG6MJ",
  "key15": "2qKao8TYAM7BVphVfaqz7TdwwLRdkZYDiwmGeWkn3NpNyrgjr1Xxg6xNEFTmNjeCcUYNGFQfGsV9gGdrdVeAG4Rv",
  "key16": "4Qzj1h5C4tK2ogrSXHeAGtxS7QkmPhLTxokqJBPo139LM4VXhDxDTTVdukjXuQrofdmiA3Esv93b3NEQS6Z6cYBn",
  "key17": "uMgaDKTEHWLb76bfkxNNZwgkuftUcJomHLRMFKSWPfdRq6rvEdpG8Dm3Q4Sy3yj1PBQryKVq5WFNp3e39d7EYhh",
  "key18": "2hbRWssNwQAqFhXJydurzL6Qi4cjHfSbXqxDY4TCTDxNN8rZVSZApuL4APHk4NEC3iBErcqSmuTGBhTbajgw5eZe",
  "key19": "r1Dicyw8SwGZ1VyQdT1ofYHpw4AjrMRYRP9RywA1FVzGKoPs1TMAacdpRd5JYpNrEAPJeNS4eP51fytPLRrTXbx",
  "key20": "3U5uEzsWbcKwuq2hHLKTbAfTibPTP7fhnMmgosRUXDvHKLMV9bbuKXXvPWENmDGakWiwVDrRvi4amPgkNTXSSkB3",
  "key21": "4VvPVUynYdaGiGJ398BLDsrYd83DBJAN3a1ewhxKZw1mG8JPbxovHKYtHdaPQVjkMbJzTMhqHMTYUQSRchK4bayg",
  "key22": "4gyRCa86veWFgfkiztxdkNWXqDG7Kr2W4Fh56C3cWgAyaLw1CsJNLpy5vEzYxxfgwwbs5XbRGDE1mB11S9z824hF",
  "key23": "5hST21Zx8x2raVyY6vLq4kxx5cT9vMryjxVPPmeFH1rwt2mAYnsqHoMfxXxWkpezAEgubiBZsTdTy1XGFb3JVwd6",
  "key24": "3ch7BKpuBm1j9urTMQqRcAo31F7Fd8iBJoDFxQCGDQjWhR2oZ1sadT1eTrjWW9QM5Joxcjs5KJA2n8fSpyxnvF3a",
  "key25": "5PgMLCeerzcFiRG6oe2vMnNc31kppS8doVu3eBPusL8GGwZGbDjsYiPtVPV18R5CPktXYGgYhkHbMhHqcuPgMuNK",
  "key26": "4THZsQUyboAE4kRYYu9emAwSLvyKU7uieUF6fCXRK2t5t5CiR7RZ2hsb5zg5SjRKLHoD8LdCRx9Cgig7xv4uBG2S",
  "key27": "Vkb894wd2VfC9Lq3ZMMwAY8W75gzwf652zQ7hKLs8ckfQnf7AUmxEKJsweTLF8jsAPrNN8BexR6Amx5i3ZdLAns",
  "key28": "45DCEjjZQ5wuatYN7rEoEf6LeTzpirgCoRhBmCiw25eQ32yvvj2Ae6RZZNeQG3cKpTTtSUPYvF4esT6prDF6Enjg",
  "key29": "4G4DieBCMNH8QjWi65ZbAVJZF1SNmz2hs9mBMjMFZ185YtG7FNoCVmMNVRQ3a4YgMgegcCg9kszsVBv8WtuT9u4K"
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
