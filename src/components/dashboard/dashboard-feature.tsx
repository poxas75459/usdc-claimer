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
    "4ah95CqdGg4y1yKqqCbFMKTUBMa8ZvvEeUPraxohbzhwTXobacgGK8hC78ENNTZ7QTzoiGaWciNrGw2r1BNCVSUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HeupUC4dRiZgF4xNUUHTN75ys7p2oUekRvsYVe1wGqV8bKL6zxRJX9ACg5XrMYtkoCBB2UvsGrRwaDbtuqhRX75",
  "key1": "2nE1SArFwhk1oyHdP1boVn2Cbu85WaBnewWnYbbQ1yFVkCjXsxMuJet1cyk2UrJ8hcug2FN1UdUM9uMM3C6guL2F",
  "key2": "4v5BMyyfthwF2P8xycuSoYxfvjCVDsnvbvwPbFYVeHDjFrJzCXAiKYLuREoiBiD4rsv4BSgj56gBepuDo4KodtHE",
  "key3": "5p7gcbwi2yjLetLz2X9uc9m1m1hgNNPCPoBBPtWWWDSSKYvH1bL5ZppcxSayVXenBE5cD4zpZRPG9yw4kV56Mn8Q",
  "key4": "4naTFpTJhzB38dfC84kvBUXYn9pNafAuAqrN56VkXvW9xpuGobjD6kVuoNmTi298C4sBJsipr3UhtodPiU46cF1c",
  "key5": "1NZi9NFZdDHNzfe2RiwL3JrbBWQfoSbhmDAbBL1tLY3NVRT8LJJYaTERkf9HSDCCMhAKtGu3GQtNFNCyAk3GsDz",
  "key6": "3AqUPjM67f3B7XH5d6Cq2V8hF16B6dLHyUM3DdoUfoNYyNUJcXJLdMnARG4b539Rwvr9wwpSfqJE8UCw4KfFFDmC",
  "key7": "4NDzHFYNnxWXEyuk1yW8VppN4ED5GdP4NmYExsRhHWvJ2iHvFYzUjuL2bYxDBxBxnoLU447VQxYhe7Xz8DHfcGEi",
  "key8": "2YHTjHn45F3gGkXdQtfMfijmEs47UidtPTNor7GXgMm9U4qWA8HE3KA5T99nKt2Hp4G7uJDNzKPsVipTVYmUuuu4",
  "key9": "3zEofyAvyJH3caxqn42nx89WxpzEPtsbCif4KbcS5YCyddPh5mS72A9TiTnd7nxYadEERvRmng1mKTSNSTjJ9Faw",
  "key10": "NJYcwvk2BUYC7i9Mcxxp1iteGcG12u7eKf3M6v2dPuoZ8QduyLAbtixPj6SdAZbvUeU5Hq6t8jVPrPbYss2ckEx",
  "key11": "2kaehXffwcDX5oRH4e1WpMX8DMPxzM4MwUHq2tc5AHpugsFtbYPjmpNrP6EskWtCJz5MoymvD4D8T1wtQpNGHKCQ",
  "key12": "2girtfMp3FTxXXcigh6vjwypENLL93wm2NjDXKdoy1njvsq1DbV7XLvqUGJUdg8NqnfdszFvCyXcwiKbQGWs5Mnh",
  "key13": "2PoVTtCN374EJ6ekoJwbSgRCPtrzh5ohFdg6C4FTp9S7PSjo7uJSc9itNQTQTxAw72VszRDfnzVQTMJnrSf2sT17",
  "key14": "4LC6dtbkf9Ayx6dEXXe7mfkbp5mPCAuSHx4Tb3ZYXmNy9a14MzQFrnLks3gByREQvYrShQaZNbHPRXCsD77SMVS2",
  "key15": "4dT9V6RsUFQNRvQWd8J48KMLqfYefPEo1qkuLCUDFfibSggpi7oeSCXEeDMjMN5f7j5Aj4NbeYycWbXLtb82CN9K",
  "key16": "DwatLvWGry4diPs5hFZFtyUNyREvLKjixEZL1wUnFHNx1ssvnwASwULe8mQ2HvRskntctdWtT7qbroDfgkn7tDb",
  "key17": "2RMNGCjLWVdRtUpRmRi7FwT25W3wNF3D988kcuLroBsdstbd8SnP6k6H94BKBbQA6Q4XabQSiHZKhDqAKsFoFSGf",
  "key18": "2WJzg1crktVVdTkVDvs54uMjyPTzVEDVoEkXV3qngaLr5yYyWs3g9QQyNqGXic8mJi8BF3y3WBJ9yYEnGaKuUStE",
  "key19": "5g1ZU7h528FmajFWQMTMVzN6VGFdudKfvNh4hpVcqrbQmoZeDQ2kdJghSu3cxTVZTPVAF6JVFbTb6V9HBZtxepFF",
  "key20": "4SdVqdVA3Fb24LwQHB4SVsZ9QenaeM26Lgs69P8rQ6aLaNFDUhXijPzooRCpLQignQ1m8HBkc6oFDW1H8mmkP5fr",
  "key21": "4GEJpdQpbXJJ1ALTM7ozqmcqnv9DG2KRQhoepkHvUgGKj1KRcPj98PjD3cAkT1R8zqhWfKmVwRfawNyw6ZLxgAxE",
  "key22": "X43D4ghxkcKYErLL2SrJK8dUH3GDYw19SZFxVbDCqiu4Pc95UK9UBSsinC3hvG25DFZPydmGPnbpjZkq5wJWC5X",
  "key23": "3YRP1uhYYzF9trWEce1gGKPSx19y1n4MtLKtywhMcad7KV94t7kHWPbKAsAZMGTKNP68UhieMM9vuk5jnk2YC9wX",
  "key24": "5JpGd4QRfDGVKTkjifvqGQusvbEvniUmQfZmp3bVBWeB6XLoPk8R8fHaGTstppeNXRtaaewVrmXa1fL7LFBSRhe4",
  "key25": "GKjsqU1BaFQcJmmzM6bxt8RV8an18pg1FTkser3AkpnMKjFZPdArQ38dVy3wbLcXH8NNqiBkNM5TjQ4k1HocgAZ"
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
