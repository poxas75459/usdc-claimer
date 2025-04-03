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
    "4172v7ZQ83gXKjqPkSDGSgh3mwFxihBhx27Tu7RBt2fGnUKcXrSdy1rWFcNh1p1ZQNYS6sgETc1AX4X5CWMYkf6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hEhjz3bfSmi47wNcZQGxuXNeEBEDf5UZa5GviDMoABkgW73NWVsyTzbeKgwanVAAMsxu6kR9ME66BmvMsW6TEqW",
  "key1": "i1M8AWLudw6UZBL17R2GWPzxHF7vjWNzw6PBG9pDkcKcsivFhruehNUqSavYTwqhi5CmEpmG6k1BJDrN48P73zx",
  "key2": "3bVEHqJrD39e94VqVJaEqdS1hunSw1VNRMQ2XE8eYBRyT4N6x6oz32iSpNMoGrfA9WBb3W17y6HSkbuk3SmtaMQq",
  "key3": "4EF4oQPtPwF3pUxi28PDiJFkT4wxQutSVhs9e5ScExAGEokdR58oRhjbxvPAF1JzLEeN49sZbcunZCfkR3y28u6c",
  "key4": "3YADEz74YofQAK3W8G4td8QXCuwXU855V9snzp8FnzgfUHkW6DVD254M3USDpUAhdmhvJ3q9ygKCgrXBcDqCpnbV",
  "key5": "3PRugTWqz7q9hRoELXXuRV8SMKo8UJyW7mJyAUDeRCC5YrsF9VhAuHZnfJZf3yX6NG2YPicxqxcncbcRdCcggMqS",
  "key6": "47GDTQEpJjZbsrbE11HtA99tDPVsNptCkRTvQ1e47UNrL7B8RHNGQDbZDtvsD6RFXvWpHx7BdaYTTJ6FccXsamEb",
  "key7": "5oiSbx2P3ktjmehRcmgWkiMHc8S6MbmyFxHYbvYGBkKo2EqVtpiCD3vxdh6Rpb8mSYeefCr1ULEmRYz1Mb3FJWfC",
  "key8": "2cK6A8WuwEgxQAihvxrHpko7ka5R4XBaNQBN1GURTQ8AVKgEf9hc29Udv4jRiCf5abpmUsQNBomeadTCQJk6RUW9",
  "key9": "3vrNqsRSoYAnFdfcBaGHpUvR1qj9rA8xee8QcX5STucpS1Tv6wpGyktPeerAtGiJ3RwsWcvQXfK8qozbcjw9miLa",
  "key10": "3qz5s9iTaicoE1jZcGyS82EhDfjRVFXVRtSKZTUE115Fom6TUvmUcji7Yz3cF7fAU3TCsbuL4t9YG3YZFodqW8Fs",
  "key11": "37Gpv6N4KyeFJpjDCf5acJpGyrnjojyL5peKfF9sz1S3gWcfuMMSMRqiTQSBxSdqEkezzFznYKzXMUBGm5NAVsUf",
  "key12": "LZF7oQCMudPrrSKb15ZqMcRbEwsERtjc3rvGJ8XtQFumNTFtmaFdVbgGVWfVtwzAtpPnUxXuRerj4YaKUmHczVE",
  "key13": "5Bq1AGPn4Bra4xhdpqEDVujXH39QN6etsHsjQxoq7pNP6r8ZfQmnrBA8WosYdKMh6ALDK2Ts5kmtG6ZvGPw53GQJ",
  "key14": "s8ktMEXqQMhAYLoUkHcyXmigTiW9wtRcdN48BU8Z5KCRZr3TxBsmuJFBCbiecsvVfXmY2TeRZdKLMPdgU2H8mNx",
  "key15": "44tdQHy5HVN3xc83MGPXb9zTpuBNzViGfMKHi1im5Egxxg5ou6swnbApV42cnVnTY7YBX58uAtY45AR76owGj8jq",
  "key16": "KT33moTGQfjKowEW2rs7bx2tUWzi44CcnVqtKd5vk1bpiQCP2VuPnv5ENbfi6bgCNumpuytCC76sygih6A3UShr",
  "key17": "55R7st9439UfGxTyj61UmYfum2kByWq5YyKYiLbGWmxEyWvp9jZHtnowbpQjNKjnFJUuf1pB5HF2N497wSxunGgN",
  "key18": "5Rtd8ZuvHQcc5Xc9PCqM9ow9CEPcjVBjuEFT1uFjGMBWawEji6nocNA7Kcsu8KWdjo9TvoweiuXUMyNWavDCtjNp",
  "key19": "2YtNM5ckgCs4cE5ievUCcqTGw3ckFcqYD5LLnUd4LNnt99fAWuDVYNAMXSKKU3t9Uy2dpw7m2FG4dNtvieqG3FKM",
  "key20": "3RWA2oDgsMULd4d1gMifE6UewYgs8vLVUuVrzhju8FUVqVjw3wb5Ks12qxCPvjUACa1redAWcqcNc3mzzv8QbuDW",
  "key21": "4gfTjfeMqvi3jJUMqQYCpduE1dY47BdEHUTgwsghL64QeH6rtWuWEXR9GKpxvyvfS4M2ot96BZaY8T4Bc9SzSwA7",
  "key22": "4zWis6KzcBkfjPzaEe442dAdLSw9erhTWjpaU3HyieK2HGdoMshbZ8QeqYgFYBVH2yWvjaHKx4U8M74v3DkwrEQu",
  "key23": "iA7EwtBzrTkYkzhdeKRzy7FgHqLhaFAmpKhTa6AD6m2BLLCh93QqHxEaoxjvfHULs8TKkeWtLcbsEBs8Tx5YLfZ",
  "key24": "55ZirvkCbvxQsTE17BmxAnaNM9UzN7HErgVRaxCB9JziuCwCiqbwguFS1RtQbzBRiMbkqW63NyiygAW8ZLJmbyGQ"
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
