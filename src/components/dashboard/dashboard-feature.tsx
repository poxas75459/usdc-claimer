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
    "4oag6xVdfke64fLEc5FwmxykbPpvvzpg7cerf7m395R5et1U2ukeCL5wuq5fXNE57ueTL4TUu4Gja8gCKQ5vqgtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UmYRmtkQe2KtsngbNB1fghaD848KGVzvWvoZu9ZVeZN2zcdhdrmkExXg1t1JeT7n4Fs7TohQo4CZy5hw1zJCnM7",
  "key1": "121BfQJe9iauMp1mfQvivQw4XiddEVKWeTnJJ93nQMo8eiUQUsbQAfyWVxpYew4M6EpCf19Whf4iV6iWF6u1FL9t",
  "key2": "4ExvC8ChyqGiZSQhwwLKCC8ZT3vkz4wtsKyjoTVgmN99stwA9jxf564hbtuXA8Qop9h3tFnE23Ym3CAXC2ZYYQH7",
  "key3": "4jZaqHti1BiHGqMTscDExhRTPxvaXCw8MsPJbfSXhNhST2oUutSDc5p29Eau1rMdh574yt77aRpYv9JpVViymVvA",
  "key4": "3Ww2u4zUFyVgL8a1LaZEiBtRfkFxvB2zmAnCzF5noyUj3ypduZzmaBPw53aV6LsppKEPmh3uSA8hweYPfm7ASKBJ",
  "key5": "5dsFXFcf44FXit9mN94VTyMYuTYLHHxSHDRreNGkjQxxcz4epZdXMx97HqpbBu34668JN8N5gbs894jPoBbDYNdG",
  "key6": "5BdYaTZrBiE7ogisEoCNwmPNwXTCtVcGEH2qcstcYnrTFQssTKj27RTzfJSuzubB5j9P8moCtckFUSAyXfStpDas",
  "key7": "3DCh13nvf5bGCLgRVzZRzhrXsQVjwRgTYtnoDXVRUXmajyHDJj9tRbtmk7TbHw9rC66gRR5De1zvMUD4E1BBNMJU",
  "key8": "5bBANETY5cKLYWmzeGBEJXqXGMtBVmuowJS5yJZERRLYGAe2WdfXoVEaw4iJ88y9s8u6Gb5w6ZhPFNfUVqNaaRKP",
  "key9": "5gUrVXbiw2KmXVg2H5DR9J85HEDd6WjFuBFWBfjPpXczgErAtX7eRwekXZDs4VzCCpyfzn8cPRhEG2T35ue8Quiu",
  "key10": "5mapfyx5yMQ4SxDyjk7PSjNeELLAwfWZHe5qxrehFzBARRwKCzq8aC8PngX65wiXf74xGRSi1G5FJ79Ra99FRG6i",
  "key11": "5NJ8D1taJBNfJzEWunVSoFVBK5m8HaGQU4ZmaNNAS1oE7RyEqse2V3BzazQiKk1BR6CrrHCFYCTDQBeM32t7veuj",
  "key12": "4rPZPi3gsHVaaNKfWRskM5Ppgu8cCL4kY4KzmiEWeAY9oArTDrPxL4o8JxSWQFhdzSANYg3wtSTixa6vN6ekZjU6",
  "key13": "35xjRjkvk5pBNCPX9tzVKFdPyhayhmp4bsdxgFkXFJfCCBiYq5EBbNPdKzu5btUwhB185uJYjVD81yEhrpvvCoT9",
  "key14": "3EeFkK8wmUUn5p9j6YqNG1MBxcE1RzNRk4xe3WYJYRex6wwZdW3dbDWUoD4YXYU1bxRiwejyZEJfQ1F2x6Hpp8hp",
  "key15": "aEwFUZSkBHd1DSd3fkY4pEELUA5nsBPg9GtvazYg98awP1G47cgyyd6BdBLtAVzva4TqA7DrhpHfTDNnLCcDr7D",
  "key16": "3BmUJDYUa9c1MZZzFC5bnmbFQwgf2zMVLRTbG7ALHEvEQyko2ZFz62VNqLhy1KHfZ9uTQXcwoRF3vwfhTe5dgTwD",
  "key17": "YPFHiSDzpN6Dk4qRLXAH7NARLii6FtBD4rnQUAHPqXkTX7BX4uhS92ZubUaL18AsQwADhb9pjzUp5i1BtqbBLz8",
  "key18": "SRkWrRT2pUEx1D9eBEQTfqvV1kpCogh6mNw4PhS3X8tLAUFP1w5RpNpEWoMgmUDCnJNeFibLkvFefkMVJKM93Cb",
  "key19": "2G3Pox4tirTbvULzfST7p4cfQkBWwbnxQwzkG2ZWkQKsyW3KRqHt8dL16Uyjix7eduRJaNMLsiu19uTKzWduZniQ",
  "key20": "3cgugZNzya1b3UqBBnsN6akZ4fREvZoyovxn1hXvoTNikjBiwsz9cyhHEz1V4MdQSDksBLJxtEQwBf2GVYpfVT2B",
  "key21": "4HA6JnN5Xm2wBPUgr7ujd4e5arJYJS2biyeiz2dHMBL3Hobqke48Wv7jx93zNYxC6sYjWPxiwVfXY7PxTU6Ux4Xw",
  "key22": "5Az7gkk1m7zhhAu1jnXYwgw6nwUpxJdWxSx7B8KwGsKKFem1qJeyB9DVcdV869UAweCy9t51eqCvTirZprFmV6RV",
  "key23": "oaX2iPXXzcvJ27YkqtzyVY9Wg1Js5YtZhgddzjChCfFfcbyYmH9qk5rybr4XyQJKeC2Nea7TkoCRCDM2Soyv7aa",
  "key24": "5rtYAqmBaSEmNDHSMk6aDYsDpdCG1MHNW9yrSYrEcrBf5RzdP6qikE14NaeNFqht6YCGpGvF8T1o4rnaBBUkW9pC",
  "key25": "4hhYiPeyfGU43c6AxPnVdJZBdBSU1VmcDAcY6guTDJURa3Z2KvFABJrpz2omURbKwe8TBRq41wwKhiPt5VCRAdp5"
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
