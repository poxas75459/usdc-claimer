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
    "2LysXtJETyUai4YhT2noNdeKbJYGAQ9aUDV3tXjypZKUKVhPvtMvmmyD5x1Kovfnd5ZDYpLuNSnjtbWzG8CD2Kbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63uH1JKMSGHgEaMKADAVq2HjuAMowgmXSuBVQ3Dk2PUB7VjKhYMBezFD7Cx6JpteHkgUjUGTrCb6NRFevcKZ3UV7",
  "key1": "53YSN94cCZmNi6YmemPhYTCenDNTaQvd1Hcxv1Sf9vBcpKvM1mDeEZP6nNCiyMuGvQBPP5e48xbaCN6gL9yvgceW",
  "key2": "uzCddPZVibxMprq8k2x5doWpbo5tbJxMrpmpPRmsrrW38VhuCLK6ZJWdUfohiYp9foUar4i4kaoK3vAS2gRNtjR",
  "key3": "whfd58bnPU5sx9FBuhqUh7GoZQM8DgsaYARDETqVFBrBsVR5Br5GkFCrerDCJeq3nW4PKbW653xrQhX1kXN7reE",
  "key4": "qnzBn1swCzHerNTxt9GASN3a2oXTEEaueHPjkRaWYcAas88HaGHnbz9Y84m33EUiYgCRGPrdq9sY3JfbufsMwSS",
  "key5": "55eT7bFxTaW5Yov91Z4y1czFqwazp4PzLJbP57daF23otZ8Qfmhj39FdJxG79y9oa1SGFesXpLw9MRxqErPcCpLZ",
  "key6": "3zJNThD2NJrxyTvsGCFW3wdCHeovELZJigF5cmFzrqnxgGYjFfUq9zZkVdHBsE9MLGvu2EMDzMivh1nes73YwzbZ",
  "key7": "4Q12RspcRdBonp6U4fMNfSoz1E3oXaMhsJ23mtGh9inuoo9pDXkWDujo3sK96GLjR65DHevjwqYuYYsaWmwYU8fp",
  "key8": "UV94vrcGTfu1yr66TUoA6KJiLUEsaHqhUQrctDsu1d1DSzneFGf9EKqekxDGMbuzoCuJc3mt8tsHVD8LrZddjQm",
  "key9": "4finLKi9BTorirB9wCAcSfTiG92xDvJ5ib68TWFkU32aUTU6D5kkxEZHwknV2BRs99bEXtoUUx9iL38LkRaoEBig",
  "key10": "4PhqbTfswuCGbRKKHafDUszb8vKU8vjF3YJ2KBKHJFHqTvqyoWww6r4V3DTConYdCXADokuSW21y7nNBTrDnj5Pd",
  "key11": "3JGUy91DGsipWmkYCE7JTsdy7vp1MeR38LtwEX61KHPhsrGRiSSAFWPFnjTcAvwfRAEdcKQ7auh9mDyBG8PBDgvQ",
  "key12": "UKa22bsnaWRYnebunGPm5RV5P58GFzD5JSPAVWHBbLKE4hNZcZVpFXCmHdzzSe63fbRyHksdgb58nHm9md8jfVU",
  "key13": "575T7sCbDbjA2XmcRvYo662KjzumvSFUVvfgrKCQyCM8bTD3zx5D5X4H8F92CsbdNGD9rJGb9jaFGrjpr31LuCx9",
  "key14": "95fb18ySwNyakt5w5xkFuvBHRXxh6zHHQcfcMec7MCmFcnTHqyvWRKEQUAwsfiiFeopFbVKyvwdm9oErpTCf7Kz",
  "key15": "37igQcJ84CWMYaV8LjtjxGu8Nof3S8sjeHTXAoJDHpJsw6A6wuYmDxzZ3t7qqWGcLYGET8BniazXNxeZyp7MjXty",
  "key16": "2TPurK5FCLyc9kTxeMixNphWj3MnXGy2wEx6gB8XhiSZWMz63P6Yv8inY2wJtL4c6KEsFew8YKwKQNRGP4pv3DjL",
  "key17": "adT6a8oGutcpTNeqLpJNnWD1hd1axkYephFVCuKLTkMMaJTA3Juq4Vd3g4JDt4zhyeWpffy98bPSJByqjfUSAPG",
  "key18": "54EmVxQakuNDpQSeivgswo7Ha4Y4D3jc1pvavRD8XesKwQdupmsPHkaRfG6AEAULWq1aKXQPptS285BFdbrJ6yQV",
  "key19": "5fqfAoETLH38wfcN4BVV246V4GpvAiz9G1qgJz7KWCG8d7Pm2CCbwtd79CFtWjshaLVkPPaoH5QjA9FwBJ84JquA",
  "key20": "ifczmx9knkwkzyRFhhayftRcBRQeJWuNViQVHuCmuAMhWDipYCwhrfMK6tLvC4yEajQRmDkCKQkvstCxJJDxM7N",
  "key21": "ZxoHGDz3kBNvCp7BT4eSMJiKtyh64SksmEUR2BdVb7nWVtxGnDgNZebrThtE7SNgBnwjBntHedaxXPZ2nY1K1Eb",
  "key22": "qErYnqNQXfVdpSQdNm4mNr3Pmx3dD11638CEb9v4ai2M7QC87sS8JqqAe3cvZzZmqdc3W8SEQyvx8GD3LyhN1P3",
  "key23": "3QeMTzrpMP9BVN8mAYfo54Xtud9jT7oq6Hi2NAQVPtcrCwFKG4a5b2cww94WEvCCMr6js2Dxjpg3s6qrTcrgtVH",
  "key24": "4cDHTmRdczPmgQnbMcHa8W7zMVYkDMbSTjBf41ZJDQiFN4WwY7M32qjiYiqUhdGD5WPy1Y7dgXQtoUzxQMScbgP2"
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
