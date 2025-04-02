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
    "2SVSrw1NM8k2kB7FJnUMioCbNNjgvnq82zf6ZReWJgPPsiYQutHHDh4Tb58vUk6CMw18TiAzrhCz1KZ7TW4LyruW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "373cQWJ5iFn8FD3PMyzoAiibLcSQ1n4yVP71fJyufeKx2SBLUT3Ks7TQPHWj6uAvS7rZCSCCSfvUqhnudFq41DML",
  "key1": "5uJc2QKcSMe2FbvXxeP7BJMphQN1UUA2aBW2DmiyFb7ardWMTYJYR6TeZLcFLJX97EdqPoS5PqaHzyD3PEtfCyBn",
  "key2": "2s76LJ54zeoiKt4ub4xK51NLnDypMEhF8UUbS3xVN4z64BQrjPKS44gkC6Pro3hG1ybSbQC9kPCY24KzpG4N9MVi",
  "key3": "CCFfJztJL3EuRkdpArpsnTAxzAjYYeGZkzirBwdkXcYVBkcZT4jhYkbDEb6d9PcxLQTsPR6auVDC4YvHER9f7vz",
  "key4": "3acbY3Th1xgJpsV3E9zAFmVBHEuHTNV3MPbt711FmZbhzkagSDTsx2VwnQVhPg6g58zxQAJGk8qht8S2HsHN1tBC",
  "key5": "4ywxAXBpJQVMXf7g5aymrTmAgzirNgGCUite7cscQJcZxWSdwa4VmdJcG3Xky8JxtAbmoXFme42xTgciNo5aLC9y",
  "key6": "3gYqgjCHKKkFW78KzTuSsuGv5ucVtdJex8Znev8zBgC8sT6LyhZj3refhmm8tKXr7khsyvrU3mW1hfbpiCG6urjE",
  "key7": "59McSFkmWHSth1ncbCLqR36ksuzPTuo1zDgbXHBELhVnRcveoTW7opb6ovmmsbuVmvoG9m7WsQ5fyvWkJUwYaUwM",
  "key8": "57RF92s1SRyvS3TgCzhpKXccWkgVd1JUDpMNoYtvf2LuQCgUUYoY2wiiPiN9xDpgpaTFVkZBJTTSuYdAUFbr7e8n",
  "key9": "4vKh3RZcUg12Cw1VZnKQHxtQ8UG5LYz3NA9RxRthjVENxaWnkPN8fdtgLgTSiz6E2h4RDcXHFCwtM14QkRjiRy5g",
  "key10": "3BLwAwqt6dEc7N2LpMEYz39sH7hdZA6oY5E7q3KCznF4VRb488UVHzyJxHyQ3yY5DUdE7WsTxEik56AKKtyy8kqk",
  "key11": "4z2zTHTT7h1jb1WMx2PUEnFtr3H9vNdZMWGjDKtcMtQBM1XoQ1SGJENDAgksL66HM7KgdJvmZADr2gaRYRSqiFHJ",
  "key12": "2BitQNzrrmFo1emWPjrcY6yFmRMwN2Kto6nbBkaEWMJrtw5P56azyYcw3MoBGPu14fq3k51gmgv4RjTLEJ7XydAB",
  "key13": "wKieqsKg22DnryTVA4a6YVcYjqaid7J2xgTjYfEgiC3W4bPHgFPNc3jgF1jcFchLP6K7zLysMkBGYhQQfXMguBp",
  "key14": "26kzpKYqbyFeeAfXE6tYjzX9TYELiTWQLkNBcrEFuuTKVGiqMGUoqt8CFBY9KVusDB2wP6JP3Zrf6TPPzW7qxR1W",
  "key15": "2X25WxvgdoActyFT5MqXQQASW7pzkDCKtdsrzPirGoVRXtjDAfaKaJr2oJYaxRPjQkKVw7sB1tDgyhcoNVmvWVN7",
  "key16": "hpEtUcc6uNn51s2BMVJkX35c6jxfe64Xii9fobg8D2FzRJB9GfL3d5qD25yyUDrrNnFcSHNoXraVBEYyotP48K7",
  "key17": "2dfK68bWdG3aTKsntvY46FfhQ8dGGCdUUCm5xQw71UPiWacbAVGn9WC4nmbbmujAyHPqZe2RGMgc3Rgh4tuM1MjH",
  "key18": "3uHfa6ZhyAorxujdCMN1sFJ4MQxHUKnDae5KSBePXEpLC19W8zjCGFShyExyUoieUjmUHm5cF7gb9tKWP5VCDNVT",
  "key19": "2WqjBA2F4J9NvZ7gD2wMK5WfhXdysRPH6jvxTHf4Qct1t9g31UJRB7Ycv8jMfY5ea5yJJfZB742Edrx2hpASozZh",
  "key20": "4sHLCzUUTyxxxRrxRvdr36FV6d65GLBhxJS1TL7ZuyLaDSeecEjNr8n9PjzKoG7wJL44jzxTpDqMXYAqRMEYvcrS",
  "key21": "2iwWj7KDaXTZFMsU4pVRAWrSqDE4SH7aw8h1z14wxJc2sJiW82kB3EgGe9jAsBCjNWX2orvGq47cAiMnMHRK79En",
  "key22": "4WX8ZVJMUNt8qVdPrLyFA3WCyJHMmWb4FP8Rth2hWxN7e5z3f75aAEEBkkmA5XCsaufTXazBHViez7byscKufdm1",
  "key23": "4ohAT3aChudagBUpG3K5auCdGyvD6yxc8x1FQ8v2khT4ijAwJnmpsqGg294doVGAVS1fJNtVL8nwJXuvWAtf6h3h",
  "key24": "oqbDpnBEmJeCivVKhUXRcjGz4y2vUqSkT171CUKsBmjSrwaCeoaSYoJuxQ2bJEJDXZ6WKL8yTgUt8YZsjKT7cqg",
  "key25": "2WR9moy4VqPXCwyHNg7m4jVHnHVBLNPZLA1TNLsttTfuM3viX6rp1ouA9MogVHRXLCRmAxFCwpLjgXk3vC9mysoB",
  "key26": "2eVkhae3wg77V8YpqrGD5rBfxw2Zc43XDeegYH2wC3RpRTjNnjgTXaBcB56FtBZE6CbydyNPNiuZySEXSVoC3VKE",
  "key27": "3ZQos849DRhnkvnPn6Q4QjhWsKk3Pt2do51s2rA6vM6xVqob6cMmkTqyveMkDuW6ASJSHd2yYrhSF4oWWivDTyaJ"
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
