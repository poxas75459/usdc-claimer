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
    "2ieoFJbX96Tqzu4uQsjMF3Yrhni12z3FTWKYkEadcUi6VeusXznzCVvDR2qBymyvjuaGPcPysLFRYk1jiJWSxwoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hap6u3owKMjez5NLrpEQaDBYvpVSz7LaQUBvh4Y4uytN8SKH1vRTQFaL9ZEYNNgfMuHsPMa4GK5fozj4KWhH2z4",
  "key1": "3inJBNZ2VnKZP1nct1CJ3WX5S8trkriLKXnWuuCjQuDXgicocwm2rwhgnVCwNfV3tXSu4Kn1ook4eCkFANSuNmuG",
  "key2": "56dj5FHSN1yUDXufVzQ7zUxhdv7Q4DaZhGYELm8yr48c9sBM22MnGUMoyvyEwBKWxs72uxVAQM15ZGxFGAFD8Hmf",
  "key3": "3GYeHp7H7te6HtwjhoLBA9PZbHLPD5rNyURvsoiNa7ZbLSuqw8fq9bw5kB4A5tEd2wz3xXvWVwCA8sLQZGXx4xPn",
  "key4": "2mHwnyk1SkAZSBTJc5JnADJUCtxn5fbkvMWynQHoERQoWRdRuCcinJGQDZnkbkGjqHDvGhMA2YkaJPMaav4wwvQC",
  "key5": "39nwkxCSv2Y6hDzWTCi2GCkc518xhE4nEGWQi3xDc1muYRxuaGP9sn1NArpJbXbDh5AY3zXNgtpMpHEnHga6rUoP",
  "key6": "1XJmdDDQ76cGUxyTKiYKGwfVmNWVQvSuvBpRi3xBF3ECnrhJu6zsFeLbj6VwTZsWVSBSK2NFuxF1wThDjcabLAp",
  "key7": "2eP8zkhc6rfVnpteXUvysgJVaNYSrGdRHmgxvCw9FFvhXU1baLBm6P2PbyJTT6qzHHrB2F9wz4waVHwwo4NebBk7",
  "key8": "WJJgaC5sm6AqKBYfkXyigTaGzUpz4fUC7yCppzsb5t6uhLubgn1uUfF1XMJZJGCs5aLVPWkFWkSQTWwkp25ssLA",
  "key9": "XzqUwWF6ZJvTALwDrvpMSYxoBBVk7Wyxgk3XzB6vJuUriMF76sK4awC2B8DcQYFdRnedQoJ46TCJ5pimx58o55B",
  "key10": "61a3p4TPnu2teTgrWnDFEwYNvPoPweEfdWHcDumTyzrFV94ZU51VXGNZbK3hQPDrVNKWeZzEj7HkqNdfay88JVbx",
  "key11": "ttQqjQiP3ivCtSdqSibexD3egvnAsbA66i3rMWkSE8JK5ii5B9xQHEg57tnsHdgx5yhJnZPkSeitRr3bbLprXXE",
  "key12": "5nkC5bcvsAkPinNMiiVkXBXkWi3juwyBQuSTg8Z7ge7QVDzzebGVHUySGshtQ4aNBjAPG4w3ditJZk6h5GKJ5c7q",
  "key13": "2429MRUSiU56a6A859v8r89hy4mLynwKtCRZLVevr3ghygM3vLk7eSnZJi4wMf8PHWPTrsD8ftvomCByuJqggsqN",
  "key14": "3hTbBWpZG6NoJPdJQEZYNKEsDEm1VaSBk1bppF6MAuNCDRSnqGVytU5kCuvCX2fWgGJ7No9osGA2VQ85YjC5LS33",
  "key15": "5hXNhwgXxf7zzvEWz9DFLvwtzrUVajqn93tLb2vbN7yKeCcyPJAUaVQDdur2AcWUkJZ7nK3pwFNdYVTD1dnNsmwc",
  "key16": "379T2KLZC6cAVDfZYqUKUEYGkDCDVuxtBDMufBLxHCoaWmtfTLpJvqRMS1UXNt6FPLRFezm6wp9seMSrojUXDHWE",
  "key17": "ZoNgfWFLD3qZUtKgURmJsq36ooyaXUiEP5juKvo9mLioQbwrvE78fREo6WVCgiUMPmqvWoPKdy34g4hpoR6vaad",
  "key18": "XSWRHuwUWhtcWuAdMqTA2jP2ZCga3i7Yew9kxDu7q1fd8ku6zaFbM8asqZcDN7tzRpMX3rPvoQbkwWLbx81CTSE",
  "key19": "WcbXWsRtxHD2gkVSjUJP3qkigK7JsuuhyJCf6NhN2gDRfb5eV66gTLBtZVKc4vchiUhhSJDoxvvjprXsrYMkA5y",
  "key20": "2tmBJpJNtGicgk5KqZpTLt1KXSHZYioKwm7afEfdU5j8bGmadUCn6RAT9W2QB2r5gbrrLWQWxZhT1troAXQjATtB",
  "key21": "5siquMXpYQ7yd99hkxwcmqKtq8zrSTgdzMqZZteRj2sAfqFb8riVve7FUZGCViu7fN95tMQpfn59oL93yjepG1wd",
  "key22": "5KuJCMKcMkcmuAnA34J7vUqwXojdFBDmZr9mwDBKsuAMvVMnNSaqgeyyC6XUAm5Mu39D7tpKFdJqJvg77bVw59XJ",
  "key23": "4t5bt8ssmrShavaUXMKrqHvzvuSx9d1sCojEZVSRpFSUTAobrCJPBcheGqTiyXZqtM9ArMbZVHh8FV6wuFoXAZBH",
  "key24": "9TNkDgC4wJBmdgqq3ptvCMvntk92e8Rk7mFKRePDRsueJkLWQPHYT5ExMFbLWdaLns7jxn9WuJ9cq417eJ4hzLp",
  "key25": "4BDyp327T1yq8aoLzMJWmpGPGeMd4FiqAojZZ1XsFkxQabEdqmZy3egUDkYfL7mRJyDNkkakoDtbUaBeMCJCEZiJ",
  "key26": "5XnvqPoaWanPtcLaS1BtYkNq6mc1tDGWEcL7DyLBVupaADs53K8FuZeu484Vo3txtuuAGA9oRRHHH1VCDRrTpiZn",
  "key27": "3ZucLqwvwh8ZKkd73QiTYPbu38u3NEunbHCyBzP1HY7Yf61XgdwjVoNnLf5kKwXYw7kEcxvW2joL4uKRHK6AsxPR"
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
