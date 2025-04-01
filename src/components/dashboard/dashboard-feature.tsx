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
    "5CX2yrc4FSQ1LMT7EBtuorCXZ1M7HEHVAeoN6oVrxe4iLzUvbuEwjaBXPE8ebq5vKG9r8oPUT4gESwCGXcyZnKFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HpembnuPguBQZMiNjzbEC6wvC8SJxoTampPWWDcceGdnT6w1YM6zeyMWHpfnnHodcLZEt2DoJwYbr5MqhXdwLRw",
  "key1": "3zixoT5zMxFw4aexuk3Jb5LRjcjrw3BSFEUA6EeuBp2NacT1rbUFeu8C2M1rH5Fq9tZwiAz1SSEoiLeRfoGmwRE9",
  "key2": "4XWthFBziPZ354iSNJ6T3DW88Zp8FudzzAKDcMfVBKG2uQtmWX7hpSdKddm2zjDNU9bZxWELfm4FE9YiZiH3dEKR",
  "key3": "4q1QQRFJP1tqNpMKAeU4MEDSiELPDzJqNFRJ91yhXipFsK41bMG2YGpNvHoZcsiUJLoFjLcCNJwjoKaaCWR5WFWC",
  "key4": "5jjUWoNZHnXBVJPVfzoMPvhDjyZxWvwHPjcWJohcqEqFLQrUssKdyWEnojacBGDZ1jcUccUoNKv1raScvQ9sUBv8",
  "key5": "2cprhcvVENjyF5NDPjzjDihgjwsDk4cmYT8QXWkNrqsvWLrY7v2ezTVky5kczU4DS3wjH2paPmvZW1UR3Nv1rvN6",
  "key6": "2smUY9gvFK3un8xSgnwEfRrNnMgkm6j4nd6xLHsLpf9sCX4W59PGA22FPzMGccT6REPAbAHHzgh5JVRNurvA8Zmf",
  "key7": "TyGfDkksucym862LxdML1sRK2PQqqjwrW1KbCRydZ4hajLa3KcoPdfq4nXCcf7dMv8WukWXn9jgSGzVSUMbji1S",
  "key8": "LMP6hLpdWyxdMyBiJrCcV9We91jrYfhHxWe81GT8Rg7J2s5nqCvWKxiSVbetVcbuz38TjDSqbe1xzFpkjdzjWZV",
  "key9": "5T72DemfexivqFRoRbSmViU89xTaR43TfFu5cWZyTLuRfFVRJ9GWShr83ZMCcTDZf6742dpj7ZJwk3G1QGAaVR5b",
  "key10": "2JJnVGJWHj9JMfFWE7hmPvRFTdd6Wshj5D2M8CQPkFZnK7WwrV3SGkxFJj4xT7Gb7vm1rDaEshhDHS1aKEFZdv4C",
  "key11": "4BWevaMbBsMMG5YpaKqX7XGVJ22S7yVMUH8xgFmjtvfPGxeNt8i2w8EG9F1U35EsrcrxdfhcvgM4DBZmRfixub9D",
  "key12": "5KdCdwYUcDS32cFP91sYyt642sC1xD3Eo6JniYQ5cTCnMQBdqry1WqgaKoD2jE24kay72dwDiGnk8cTunkYzW1vj",
  "key13": "iaPSsTkk33SAMtC1r4tZVg1DZfNe7zLkLtYm62GVcqJzK7r9T8KqUD5mampkVoHGSoqq9sXopa5g4vXFbbJjPfL",
  "key14": "2iWC4sWBiU2W2pWSdRdMATac92ZcSMBh4QVETC57o9eA63YnHKZrXiA5sfp2PU6v3v6dgRcf8YpQt3FLVCSthhgE",
  "key15": "3mtQPEwBCnMCWGFB2388BTNXznh9jDjKerUqDuJrAT8XPGtKLL486Z5mFhyL98j5vYnZGchpiq5Utn8i5ahC8jbK",
  "key16": "xKzBncCaswxCkMJuQdxMLzFn588SCsQ2EVBNtA6H9eyKQ4DgjhkLfxRkm462GeB48S4jENSUsaTdyd2vy4P7pVt",
  "key17": "2aoyQQAdeBWFPYgdUdKG2FK21njTGzsj7UJ1AUoVEAy9qhAabJiWt4GnQvUjcELoyE4r8fzPnPqe5HfbGYoAgshH",
  "key18": "3Hc3jeX7TbaCrYzpDC9WoUKx3MjXaaPdwsJDieYW36zmZnG4CFz9iatqyL35XA4w4fDaUqjzsaiS9CTcoD51b4Z6",
  "key19": "2YsAqjNF9LKTE1effA6KYwqEziwf1JqvurZ6GdyVeFi6nbBc1XcKJvAV4ZVbuabewnkKVQgn82XXZb5Loc8BKH76",
  "key20": "3kxz3aMh6kkFfLZwTUBTVznEuouhTFiL7BiBpB4p94sVoCf1KnmbZPp6ediA1UjTscerozbZb2F9WPEXKRr74ojr",
  "key21": "4dWXMn4wFKPWMGoeGYUUpSaJSfcoV4WBWKFea1WTNNRHEYCNsdicAsVoofD3BpnD2eucTCs6U8wpBPg82eTYmep4",
  "key22": "393zb7VYSeoD3MLRvhU9ZwrQbmQq5KMRDJCwRaobmAsXS9KhB2v3xUaALMnPna3UWb5gKCW1VLJL7LMQH97Xybst",
  "key23": "3mEF1ENXfooRyey7YTJrtnEVYTUTCS3GuooPt4R4x1LB87ci3btCaEEaNMsm9QN6X4oawhHXvxQrGuAKfrMgH71u",
  "key24": "3Kfbn8yQ7Lt1mkFHqwCPf8HfnZPhBSsj21rS5i2JUGkPW127Q3L4VZEKLsLNkuqKVCM9ekfCt6R2VWqiooCS4kzu",
  "key25": "3YGYkegd2AQTMmKRW5vX4LGCyuKuSkt3SQYQSsyYP17mYnKQtnG8BcYwzyfR6htFrCPDXDgaf6RU9xBUgrxGJoM2",
  "key26": "5Y6hthF7uwuytDdcd8hHcEAB9DtUkqm9rhoxE5tPAqf56cim4XGCvvwZeuzUwXGZcTHeY6HGVVnPz6UAZCyNS2cg",
  "key27": "2PuNQeoBkMcfbF6SEfcTjzTcZe5iCnQg63cEayNZ4TG96T9BvaXNr2KfBeHTkp6xymjhh8nGwtEKXbqB3syC1MdV",
  "key28": "2X5PCyyQ8iwW88LHEN55m2MBKmyMTE9KdBhPCZ2b4YiqiKqEFUKocMCwE36J1XBXLU792ocZF8BL8zN6tQSN7PBh",
  "key29": "5U4QUrjAkd1RRFbayNNvx4mRueXQ2qSUKWuGNPqJLMFzo6wwNoGhRnWgiSGRWWsfcbHMfFnzCni5VxhdLLZmRb3P",
  "key30": "2NDtS6xnxgtU7zDKnnqiC3k26o5B9J3GM2nbD2wj1dk8PcRQfRchgsVZUMKx8nrfPAGB67orqGxf9goL2sDkMJ1n"
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
