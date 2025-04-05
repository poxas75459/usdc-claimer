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
    "4Ypuu4T4ETiY6zW4DNjgKBoXiYvtebhPCMYtFf8N1i1ToufqcfXyL8ApphWduyovoKAYhKyi1LSjuK16KitCBsYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bvtyyUuCmq3fXZQyQfTx7XqYAR2CWEWzGCVAiDb1hfqyDthvugZdNUZecak3c58D8Mio4QE5C8hJUT1FEZ4QU9R",
  "key1": "5gCB8zhLVcrwv1roNpYxW6yybqETCY4donbpEM2GxrNiFAE25E2DEYHtdxKVePbh7EVoadfEbRnKS1LEorRbRhVF",
  "key2": "2NsvYC9zhd2bdD7qfon5Z6mDkr9EVApi6wyWsbXMAaCJc4Vpnz2u9DhLJZK1Sfv7YffxT8uoZk9VZe1Zmu9oRMa8",
  "key3": "374rBPMHqGXkzDbPBhWe8HDHKn9UNHCJU88z1JahTTNsbtBXVPtSTBuroDsmaQ5ZCUYkSL2D9UPZwdZUmdeCGcyc",
  "key4": "38RVNCZpkZJ7NjeZWFPpi4HVGT8Bz8reoxbYxqpKUuWtaFMRTryvh2ZMK9vUfDChNwsQWxfFZX4qpPohA1UvTr7D",
  "key5": "23WHjUFMFzvHe6cpiLKwThnqTVpMZ8E32ydWbEqukiys4bNHNqvA6Fu79cn5EUvG251SnLstwifsjUKs8wYBZrQ3",
  "key6": "4e4VSdt5RcYAbmPmK3tEvGMHYSFZ37jG1jRQtHszpsbw55rQB34zvKdfxTJJAeM6rqcdvTYatZCATn2bazoVpNEA",
  "key7": "2yRC9Rd1Uq8Gqr3Ve7vtTL41oRMjtYWyU4wZnUdZnSnLBsFPu6SNVctJ27PGHjrapwXnjE6U6Tgo9AUoytWg14NJ",
  "key8": "Ue7UshB8RjRsp2cbwfbLNmC5Kiy6Y49NHcGxYiovd5NbLLgYosamkNCK2iCFo9JU8YFp3HyYesyvD8Kt3hVUJgE",
  "key9": "3tLhVP7thMLn9afcJxSQYWaW6DbvhtG3WuQtG2Y1sufzJkNUKT4ndYbG7G1fuCLcoJGz4pNBDG5bZd63X48LgZiT",
  "key10": "3a79wKjpVTXUXMnqsVujAMTas2sKMf4g1b5dT2Zuxk6vRzUu8CgkbzMhyjLYjKUnREHcGJVkdX9hjVXaABa4XENN",
  "key11": "41bfLbNrwPTpzDwpZ3jTrh4iWotNNgmNMwgAUHeQ1wPAMvkUEasbwxZDhyHnVDUjGaxALUv8P5EgddFd6PDUagcx",
  "key12": "4C4wTWhauXmFTKWnzfQ1dDjhZbAbxV45H554XXuXjPAF7EvguaN787ezBkAg6nQTKuRLL7LeGy9Fc1Z5MLSp4Thm",
  "key13": "2z1RusmYTRD3uHxGHLxiXfJMx2VLcji3E8a1uFAsQsJPGH9Fgj79ZyS35mRJMXVAY86a3mgC2gaP3c7TBNvNwbon",
  "key14": "Utif6fc9fXrumzSVyobzEDCidHWWcEG2b1w2U2rDTS3vdoWq5nMbamndF67pEY9p3HVyixTuLcK3FopbMpaKNPG",
  "key15": "5twZM3JiqrR8Rar3qeVZYL8VezdDgzHtjshybVt4Hf2cJuo6abYCd1Soyoir2JVdZ8MUsAsYaU92JjxRk5N6fPxo",
  "key16": "S7fD3v5Mc1cxZsvKfbWG31x2eQU9spHdiFJUAFsGkNGnviokUzGse3bZn1bKTnf5ErU7BeMXfmEfbfnfB4NgwGt",
  "key17": "4paVx7x1Yg4ozjusVRKhAsmyCaCPw9CqhgxUHkuFCgsmBVhiHXCrv3wLS2iYBMqu79mWoh2sFRPtAAg8cyGpxvw6",
  "key18": "4ptQgZ1V8LjVZ912Tx6S1FQsyBq9TTGhLxdZUDimT6GvW2Wa8drMcdSL87dAumvCrdEhwgp1MNKjtPUmpxHLWBrs",
  "key19": "5Lp7mhj4oCcWL4tB1CSdDHcK1QDwvVTMHENqEjJcgWo8CUBGGHh7SU4N7kw3S2AVFnwi7EYmweZ9SPxmmeS2dqs4",
  "key20": "5MQnHJC9dFdUmBzY4gbJAocxxszuc3sRRBuqCZHaUr2sMn4Mgkn7NLXGhuHE3c96rzBRsCqaTw8MpBzZP8SW7h1C",
  "key21": "G2oz4AX7ueVPGtGYroPpoHa9TR38qmMqZ3LEDGapsZnXytFgLKAwjhnyvEpzDd7mj5r7Z2MUhxf85d89S63CZ9k",
  "key22": "57uhzxrjmfFPjWj1LkwQnLFFFsiYfBboYYLy3VkCeG8q61VNvuYP7hwWdib63T51FGdzmBD62xftNm4cQrddxMPN",
  "key23": "E87iYtwFE9VcjdKKJHxKykoyMewcQjn3Z75jRowRKBJERcfaw3KhKzNauz11GPqQvK9xH7iMPkYV12iA4PTiDW4",
  "key24": "nChUDn7ZPiHBK9iPAxqBiPtNvDkB9pMYHiKKoNqshVkXGyC8mjjL6PZmBfzwDVWVH2tizobyoCPqMfNMMotna7p",
  "key25": "2m7uuRm3zeT2q1kAXBCwgvJvCdr5ftNCWb5NDs43tihKi7jU9YWZX2oVdEMw3sUyLLkDugaP3GUvCMqjiDZJ1WJm",
  "key26": "27nnZpZM4w486LuiZmCdeVMFGPRJKVXNV7yAA8VGTuZA5U6JERz5EaNKEMduiBnpmHC5VHn636wHUpnvMrUDVFDw",
  "key27": "2QymWHWyXQ4WMqK9jBgQzKckjQ5GtDTjtZ91memjM6KgzbiojpvUsB8FXhUryK7mQukVKJrz2hwh5QjNXsAVGFUQ",
  "key28": "2WW5U3Ukz8k6VXXXZ9G27wxVXV8jmiXC8pyeqVv4WmdjxCR22n9f5LVJxyZrJQQBgexVpdEjjMp24NzrckEReKrR",
  "key29": "3ncfBTYYWU4jP97BSCthHfSewXjJyv8KdDtRWGj6zsdP2TA6eCRkH48FnU9GfPdtkp8GndQbNtEntfVBgwHJL2ER",
  "key30": "3CfENP5DCxeqPR59LwtDdDFbFh1nduikxG8fje4QcVTN1KuGuz91LuQWhhwru8f1NNFQthCcjTngtNwcXEKhcvxF",
  "key31": "4MyvQQ61JbrAeLgThLBgJXJhYYc8YpbuEpTuQZCbexU6zqxu6fCNwx44QwjjP7vvtJP7Uu4z5h2XSrbxoqediZ5q",
  "key32": "2TbNRL6PwEQ42DEui4ubLBzKXujqXREnPfnXQDQqAz2LMDYR7zEW4RNp9pEzmjVB1L83uH72DT3rxdjH7ZwMuk7W",
  "key33": "2ybNwZ5RQUo6ByxuGbv5Fgtx9cX5knSLRubHykTx5V5zphWci8mPRxNhaTgPu7uMayfQvPDysGA8qiLWBuqBBYiF",
  "key34": "5H84vHpbdLz6wdGnNxde8vT7vf6LwQ121PBP757H8ieDGhdVFfUGEuu9nEfSHAD1uxiyGkLuJVDTBKEei437fT7q",
  "key35": "x8DyoYNz32YRFUbZq1XAMMwLYj5tBUZCmxpB1q6ttFdmSQHEcwqq78TBTpCacViEsqbJPqkS4Xbps1ED187qdy5",
  "key36": "3FREgANH6ey726QEsiDsBy1pUHLMY69SffrtHWbn5k4McmBfniACxd4AmmevBvdYDKNDQJu8yuk1XpCwZJ4p5dhk",
  "key37": "BieeVgMMjzSkLjNvszJYNCwAwqKfpDMhDksN4C95AVYmHmQVMWExKZYN6RyKBHi8cYJkF8cSQaHfi9X48NAwW3P"
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
