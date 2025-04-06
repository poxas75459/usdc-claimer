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
    "96gQwGHw8kj59zBeBpDAM5fwWQqNWJWitcFUZEsSrfPkFUjxhJecDzy9vtCbXM4274kokTznueowyvue6bcixiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sRBY7jkmFfJDEzTJiDHxF6qjopmsihwcLK4rJyhrJ5DU7Mo3gQFpH3KKjcbNTZxacpiDRtiuhcCHndPJ568QfTQ",
  "key1": "4bNiKbVZEvy3XLU1Qf5K8coGhPW7zi5G9EAAtrUZZWJCjW3XEKFBCyswuHWAa4ckJgW1qrHfcBBpSoNWbix6TQDf",
  "key2": "4yuKWSgaYdUPrGT7Ttb1dojke1U2RCpXqD12cNbxncrkYnPCCq6B7awbeQmByzeTD9FYZ4FC9ZG7jPEnEYjX1FVR",
  "key3": "5mePwPvFm8rdcuQj8qXRvmWLgLGQ54LuuFDTDxm7YJynh17YwCYyb67q8vbBKZ637rkPadaUL7pQHxkEQ6W8QB21",
  "key4": "4bNTCrZaVwd5ovFq4W8o6ax9c3umhQuXwpVoTXs5BvZyeJF1k5WtML18k6RYXFYcqBCyrk8YXuQMzgVvPnBDbT9L",
  "key5": "22Ymw7eKx8HtbUJmnUjfAk6sJn9DJu3XW6rFnP4wrsC5u2uwHBKEcPNfPeUF8pDveebxwP5CzSnVtUQmB5wFtk34",
  "key6": "5wCm5Q84pWox6wqp1FwdPywGYKatMMc4H3Ny4zSKE4SzGLcsU2DAXAz4TVfqjeVGQtNtSuZv4ovirM5c8ksaFn65",
  "key7": "2N3kL1cY8EwAfonYkrwSmCjaqR5MxnXB75RCovjsss9B2tsJXCZGjjz3DGxQwHQF86VQiVEvNXNuHcHEgBFJsEj4",
  "key8": "5MgPfHKR39TgiEVzZMj27F6hhTDzSrptCfMLkWGDeCv4K1asJyUgLaKS1Xa6xzZ7vyiqdexRAtTBgLyhP6iJ9Kq3",
  "key9": "5SwCXt1Ax6GcRZZbdssMqVeARcTQ6RbGa7dLPHGCjNN7fzQQp6gbU4VF6UTwPZnyNf2Xfcvbx9pvYdujHweUrxB1",
  "key10": "35CzkAC9Eu4YjoiumiDsHpWk5MJifgPxzUgtNwD5J1iDBh4bqoXZMQCvqEUB72MEAu7dUWLYWmgQUseX5Ha64gdc",
  "key11": "3p6wgV3qiapPEbezLXPFfAARRcCv93WvWMw4BCqATW4zxev9z8PK1WB9ecMf56iSh6xok36dNDMWxvorgLd4jqiv",
  "key12": "5kEHinEwT2Zdd63VcfEGM4sUAZUwpr9xoiFU4P94226wW7yDArGXcdLRiGbvdyJoLzdVrr3kM9eviMVJSg36ZUTo",
  "key13": "mCLj7cvXu3Kg1beaWqUURiU2GTJ7JM44jwyqTPD8b5taUXCYoaRfsLnieS6bSMBGgn3sm6xwGq4fshNzZoJU2NP",
  "key14": "669m3yA8W7z8MCfbm6BNg6zjBFZqWRufhaTDCucV6bUGjpQzf1tFHRaWha9gmgfbaseGF22MB7VX65kvh812jTBH",
  "key15": "2iotVuUduf5DEybNqdEnWUYJFWPAp1nudNaWqNCEYzW9a46UGpwWDiLUTYwSWasTpcChtMTzRJ3JevC23rTVeEru",
  "key16": "Ai2sNFmrFjjKNQV2W5kR7wdFHHmAFMgiVXjGNzfSYa7cvPYqb8pL7uPjLYh7xMyPDwweUCq4PVBJmweGPKQas5d",
  "key17": "5WsBqiyz7STHoxVeLJ2zQx4b6UpV8vMy7Z56JSpxrGGKj1F8dcF6tNn5dmCea5zvBWJq2vm7NsQaLVyWxcQwTjT1",
  "key18": "2wKpBoRxPRtbpPVvaEaeZBRyUMqXg39mBZ1TzkVPgVKAyF9VD72Vs97VC5XrZTfgPFKbaYDdZMLN7Zy2f8dLVUpi",
  "key19": "rauuA8vpCsBt89srGyB4ZwquMwjqpC8D7weGqfZFdCvkGNzHtQHCg2GW2Nz7haVv1S1gQDLvp9ZTqZ7CuSQpybv",
  "key20": "2t5V58pu8wEboVQbCBW1AHGktdipyZPTHsTk2tZ6N33F2K9wFU926ZgULhgwhc9MfzTAzCRrur1m5kgC5UhEgNuw",
  "key21": "5uwZY54PiLDwdiHkUZ3483aQDBCWfYVnExL6392SN8J7S9HoMuwPRV3dLDrGHhbjtHJeAXDhFGmuJDuBn4kuYiJB",
  "key22": "4DFA7n8NxAHjD4okV5yQMiK3NPW1K5gemj4WCzZHLVizGVrJMtX3VEBPsWMW98HGbGHdTaWxLACgVKjXP88U5FCp",
  "key23": "4p3CeZGDmbypunRWgxiazxp5AUZtGuEWQbVGnHdoXxskgFWrLqgf2y5Ty9Mh93BsvsrZpaKkVtFVQy7eNKfNBB2p",
  "key24": "3JZnc5rCvguEyCMCWkwkKJP8DZUrJUDutRhwQcqQ6PFmyifba9Th6GwmyGYrxh8qSCkothREna8Ry6uFvHS2LrZy",
  "key25": "3gaEQRZ5Bu45SgK63dPrBPVJjUN2k8xYc64bqBq7LTJeUhauGXdRQXXEwpiGBsPL15zwCySbcRbG6T371DJFnaQc",
  "key26": "2RswN3yLFZhx2mUs2K1k9s7AE8dhyFpbkZet2TytvFohUGSpefLX6eafQhnRN6bgBErUxGb2TxxQPswvW5GM7ebt",
  "key27": "Aq3z5cj1G1ozFW1xxVJzSVcq4GZBU4jMF1FfzL8ziHnKKEfJJSVdvyF9P46HkVg5DuDjCunzFcdVzofNNqtQtJV",
  "key28": "5cRBZ8sSQpjdsqoAHhgSbMuQmcqUVfF24mKMKfJzjxytR7iNSyxKtq3WUeLEsqy7SfY2BHGaHcsVyhpNkCUGrFxM",
  "key29": "anDd9Nh6MFVSoABTCBAxW6moz689Ff2dpPxgFojRUVSb61E7AQ2uuyp3PMfBDmob7UUr4ghgcKBPBw8Qk3Y71FS",
  "key30": "2N51AwDwHNNAGBkmGECrDQyJro7EoktRUjZGhwaXLGy9yjpDjFozYiTckTTGQfpHBhkgUAAUSLpS8qMLmWHyYQDQ",
  "key31": "3pZqi8DoNkSNub8rSq3vxKHhscC4jbcjJ8um8p3ugTVu1Etgsze1Vt3aQa78MsTKEARCtaXLBkYYWtYp2rEgVNm3",
  "key32": "5GZiuxVynHZ7DgnAp7uugsdn5zBEKawc5zWtXRm1wBJqjmtKeuAfLzRQ9gsPrvdSFQVtjuppcicXeiSmzVYRHyQT",
  "key33": "58pnwEfyTaZyXWByKtownDmPF7ed4K2zPUApt8bePXo5XHNf7BVYUxg64qYXSmLr2Hgb7mQvJ9WQJSoTU3Ky2vF5",
  "key34": "4KhcFWJeZX4LD3CZjL3A5BL5ESfkwq6Bk4ycApyudSStSbg4bwfHmQCGxDAq1TPXhpp7Vg2qn3Ts6JwxDwWkue3c",
  "key35": "5swWyiJZq5bJyHK5kxwP5oGdkGDMFRK2F1JjT6pgYrG57j7zrMs63qywaSxdtstQBxpqJb87jFUYgkaCstRy9bG3",
  "key36": "3BfVJ183rZM9h26rfiRoRaornmQCsCNFRvvnxMh58xULcWKR6sDa7ZmBdhmZG2MyctGMdcZaCdKwcksU5mBd93pg",
  "key37": "4JonvTPWL7hGT7N1i8dyqa4az1izSDmRMAVp4mFJcyhu4CtssQmE2dKSYtQydicQAFb4vpgqbBoKCsewKhFDYhFc"
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
