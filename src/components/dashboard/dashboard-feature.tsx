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
    "2LMCjojpQGv5MG8bhq88Tsu87zDwZPjJBEoZuW57LevQfR7M7FCWSkCJqcSha8jYpjrhSqXTeZYzVynYWeGtsULb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VU8Nbh3DdUTwbd5QRAaexw3HzGG4mV4eSmNKVGg3UgmsKUcEDQphaKu7uJPLYC2a5b5dB9z29A9osYTNrUaA3DH",
  "key1": "vcfw8BfwhP6X4HtWgeE6DRQVNfpGqRqRVmyC9xFttSc6P5LLqM1uugFdZCEZkvLaBwq8sfmemYtE9cDisde7jvS",
  "key2": "47dVP6XWgQ2odxd18q7tHNoXNmf9SAmWg5Nej3SCVEWKmBAkreHbxQP7K9QwbFjECvzsb95jTdErNDDAzuzK3iyo",
  "key3": "4UYWAa24Q9ZMtQu1oKyupH991sEEto9dEX1JniHfUz9w3GpTBRnHvKjHQPyYa98NUAnb5v5TCcwWv1VsybHTsYDJ",
  "key4": "3jtZgpRkDUVsYLaoxTXcw1AHWXTc1sv8hH4RUkaxQQD8mkKhg6iiVqnd6Tos6Vt39bTM9KmQxAPypxiLFkK2vviL",
  "key5": "5WN5wbNxYCv17PTA5Rr2VnjVWHYqJT2fJXWPrJ69mWqML2XvbQLN6Gs7bZsDx5u2Tiwrs14SnbZVWx9ue7R9quq8",
  "key6": "2gpXFyHe3x2R7tPWJN4LgrYH8UGUcmX9R2qiqtw6shw2uqQEDZLqfxVN1thCNRUBtzF6ywHHv7EzK86UvNRiojH",
  "key7": "4ydNrufEiz1pRRRpsPYaPLRwDkmqHGUojFZCq1ftqogHcGcQqrKmWMCP3WguCJnYg8BpC4H4nKJYrj3muFyxDoRr",
  "key8": "2mmxZG61Nu8sS5PeqNdykJKL8V3uE2um22bxe1JaBCp24NJ9RmtWrzwoi6GRhXbnWFzQcfvA3GytNAYMzy1p8Hf3",
  "key9": "65WnXBE2xnyUNoVdEenFpmKrmTcjUyavWTKzPJEMQuEw67HxzCfpKp47uvN5SdYpsvgDtJfEGFxjQY6J9ihju1Wu",
  "key10": "PbuCGgCV8zmSEXw2RMqvUokHs7VJ2pxAuCwgggah7vKUDQiv8U3c4jzFBJw2BuP5mbe83jojhFdj9NLayvLmBGG",
  "key11": "4Gk3LjHb5HcpLQDb1neTaaiHDSW4qFWAKLH2Ev8uM7nBZRxxJToJ4GqJkmc7LZ5YRapeDoMFUWUbDaYYEB6wNdrj",
  "key12": "2rrfnV8prUxXhwFQZd3LV3475Ci5hQpVuNDRXQrK4oQFvDv2inBBJWKYSapJakPgXVRrTtHX93BDEvaWuUugvzo6",
  "key13": "56seJg1muLwN4CTRsS3rQ4icpkkqMTniedXg3zaS29zJvgY5GmhKtmQ87Zz5VyhmYo9Y6ojL5sidrQaySzLjS7WA",
  "key14": "3Z9hzLm4hXttMA8V8vWLp2AvRGAHnS93nvT7AkMv3vZeGYGACteS7SKw3tahE6Nn5ZsaCX8sCnG4rs5MSsq2ChC1",
  "key15": "5iJgt9jfz1XzVxqmyerVWshPS3KGsHHWXoutvKFerP5UEwviS8HrQxg2gGchRzDJwwESasaDKj6FhPh75Fb6WqGF",
  "key16": "3Y1oBVSiLzrEiKdqXVsngsSD6LoWqXjjegMEuyGanW5kTH6VJ9rhTZHCEhpQsLhQf2mUi1sr1Zkd5ai6PCBoLEzd",
  "key17": "5yxTqAPx3PiWhtu9L6jpwR6M2mgwYTeRucCSqLkU2P47gWLJBxs7UwdLmnUaZ9BFSAtnXWZg9RmiAXjaVhyVUFuq",
  "key18": "5FswDmbXQX5G5eV5RfuQGmmCWSpWNg2MLyUGs9NfXFLKkfSigNuiNcjSSY6mpoXEQL4fcxZhGAEs1H3srD14fc1r",
  "key19": "2yKwZ9QX4kJqUhdwhAqkDPx6yVUyfVPX8FHvMgwqhbUfU7fqYNSjkPoSB5d3DsBsqFV8zvgzGqo7nTbsbYFqm9Dh",
  "key20": "wLvZrC4PuV3KZSfh1zZzxtr7wfTSJguiSMGs9SNPj6vfNGvbfygC9SQgVrTzeJY5UkT576LnoSUFupP8DRX6hVH",
  "key21": "5ycm6en5SJbib1b6b8g2gkbRja3geqbvoqy7H5Nfey4J1aJ8PEG2oUJNJUsWcAneqQ22am6Xc8RCnc6FtYqnPCBq",
  "key22": "32qw8SVNcnRyE9MWzRbdv8hbVVTkf1CgW8f8YiXrRhqAGLsHF5xYJ6cmbw3JrwZcBDrXFUJPjjGya2mfWy4sjj6Y",
  "key23": "5wfQhHHyJ2CKs9tFnuxUr1CNThn44d2bqk6aqHLfTmadC57U6sXukewAmS2M3NsTCWSHGtSv9MjiAayFNpbEjUMU",
  "key24": "xsCz2pc7MDQJ9Y3znPKP2DSee1oArXBH33HPfuAwEfLjUQEn7SxZfi5JosTdoeXLrFu6YyPdZd7UqwDSEqFw87k",
  "key25": "cTKvFWWk6V2XmdLevRwW8jtMJT9XNG2DoqjvqfBasSx4HMR6j5VeKakp5QSKnSnuc8T6CrvEkdqKLrUUTQEpQmo",
  "key26": "2gMJMKK9xxKq4hq8u5ejBt4BLrGE6TjYnxPwTNjqqFnD6yptyUSMpaym6rHvRDc52JmVCUdaFedocyHvzCxsoi8Z",
  "key27": "GLrCUtC8y7CaCLvc2dvQ7tkTbb3Jrj1zFpc5748Mf3y2AnRKNyA7SYt8crGBeFqtEN9pZY2y6ajQKAgzcPWypeQ",
  "key28": "vuF4qE9NWC3a4ryD9AVwTAd17NH8cZsDRbhSjh9Tur7iJuKfmMids9fYE3aXg9s15ha1a4Vgb8as9mUeVjLaPDT",
  "key29": "61KD7bQc2CYfDoF9DjLBis3U6ZxXPxhi64mthMRZ7Vv6RuhkEVorwqqfqDN9ZMVRxA4qRhVNFxW5VGsoM83XmeVr",
  "key30": "65Wjti9TDwiWHYsXkz42SwbKjZXHzw71kYhS7XoAmq1m28Yjod74sYAEGj7TNVo1gf7y3u6F6zqwpxEqgXjFBjo7",
  "key31": "3Nby3fRppSbXLfYxWmgJhtA4qxDhuGEXgzgVXqMyE2ko4T16Skfax6j5Xy6SvnDS455fmADfGrHZyXxxyAHUQJbc",
  "key32": "3X9RahV6cgoFfaJRzbfjih59eSPDKfENXw9GMW9wQhuizfShjGmGJELUrpZBN8APpJvgavAgGP8Ut7GvD1Z9kzR2",
  "key33": "2QpSo47ifRq24hXSQTBvrHBs9rn3PdW4t2WsV3u7swGw3Tr9ZRgdTU7bicuTohshgnvU78FZiDNrz5hiN3VLezdA",
  "key34": "4GMxK1bPe4bUvzLCM18GYCVms172d6mkNKgFjW5eTiaAtJM1dE6pcSzwdyp8kHdkuyJmfivWZTD1ZHLMJvMJvE75",
  "key35": "4J8uwrhVVC4MFv2wgEajxj3LXmyW6bnQF9fm1sRXFBNcwZi9N9xneTs1zmfjqPyG8GtMm2hEsxo4NKi5yU8dpDTg",
  "key36": "4PdGLnhPSYfjewmXVkv5cU5vZdbyxfeVCgXKefs3AquJKjaBRwKH7mKiQWGqxc1CtAfkmUrHd1wioGHdwT7ivt6r",
  "key37": "4R6AorL4BFxoH8JgPZ39G5FRPX1QpARMAD5Kw9vta8UiV9RdUKKdcnRmZU2aVWUMrS4ubTPcKfaERNa7wh4Z61Jm",
  "key38": "WpAmXgH7rWXBxfbUgmpnUth4fXX9MMkrg4Vt3VmSMBtgAyEF5BErqyu2gMuTtTzFbZMi4FrjDysAVuyGLTpQCrY",
  "key39": "3HsDg5SWnKBXbpqH9gtBMctAW8y3B4R1tyi7VGV6PN3JSAcnZYm8VhKQN8j6PWFeq5wgPtUJsXELW8CYTaqizJ8K"
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
