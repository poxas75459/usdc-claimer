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
    "3WmWRaTXwGGmaVa3UndCiKmTvAdn7au4Aim7FW3b416Vc3zXvhtPtqEDT1Jqjj4hBvK64cN9tnRYAmVRzcEgDu3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TNV5Lx4PDkLuwRuLmHVcbsoff5A9Fb8Stpa7N7VSHJCM4UbfU5jnrgS5sco3J8dPbLHtcBRJKTS8g8R8VVEP8bx",
  "key1": "Yy5RV9wb9ppV93ueTS4Z2LrvLUBWYwogt9Rp6dVr9t98MwuHFKRVtfiJyTqi5roktsyZqwDvhyknCJqQibT4E8B",
  "key2": "5DBSTCoPNGBoFrcBRmDjEsdqf6ucogJy93dRDHaDgcdq7AWVGAqK8qxvLy3Kesga4og4bdkyKAvpCNFSe3Ucpcnz",
  "key3": "2ZybMkDHf1inxJitdxoudPGYW7fsYmK9s4nj686X9iaXtMiRd7pDgbHrfJJUetixkb3o9wx2D3qN5ZsgzdTZPuaP",
  "key4": "2FGotddhwrTroQRW2YkATqfBB2wJYRDFC862e6HLoQUmtqip9guPh47g4epcumVfbwuBWgJdPcjMvReErVteD8gP",
  "key5": "472DmbmMNYbJmVWAQTmdHhJPvuHnRwpuhUkgtczT9dNAm4oYtSNWnxPE71sJcfjT1sFUq8whoecMWDECT6QiGvvP",
  "key6": "3pFNyP6NSSMmU2MmqXQ3qQ29MFMMu8scL7gxv7hU7aJRZqMLHaPuqdwJEJZBjAhbSrgsqptjdmYxa98UgvKDwWa7",
  "key7": "3ev2xDTtGF37Kp79CHmYiRXqEyYLmxG6AGhMyE8fPCwogMEk4pFHyu6CzVLevGu5sXa3YLRysD9XjvidjkPFtnjR",
  "key8": "5FjhHcjsLU2Fk9Wxwnt82ZffnvnqJAtG4ot7cfTDdDcvb7VJJ6DKh3sVXiaYrLnrgzAKudUhDqRPojfBRasumYzB",
  "key9": "SR29d7ugJnMN8Ud9184i6QuboAG4MDtZ1Xe7K2mJfL9sq2HT5rGeeXQffqnAZyeCTj6Wapk9J7YK1H9hvTSzmnC",
  "key10": "4T6zVW2Rz7DpJMQU9LD317fDrHDXyFJk7xtocJ1fsEm2GDoizuVRP1cKePCWAABcsZSEtiR6Fa9EFLrt1hDSWJ1F",
  "key11": "3mFTBiGQ1htmxtZyT5yYckpPFcKaQCskVp2erNJr9sNr49SUBgkbpj8w5tZ1pzvkEBvueuVVC5nj7uS5dEHJ42Ns",
  "key12": "5KUYjrfzKJ1ZWMsxK7pEgENF8daiLNhR7pzukjRY3coYrcfxePgQF3xRHMeq7jYoJ9TVTY6Y17VGmP4dcRffjdFE",
  "key13": "2Wwpy7AJyuXCtfMPqt99Siiyxh6GFkSxugsHuCLxGr3eWArBsqx5FbuvLv8TM68ESVkqXv2vCsdzyTEAakf8yA2T",
  "key14": "5ECEy51avpbeczWGE6LhSJ2YAiEc1os9zFcFkR9ohYDumJZQiCavMyVUeFwd1T3DzRYXt24Tk9YKtdX9cpVR22HQ",
  "key15": "2RDHyFR8NJQNi5vCZ299V9YAKcrWM3jtAk7M5LjH5s2idoHp4s3xzztuWsrZziQyab14RzKYsaUsozpxu9MgbEG2",
  "key16": "6jxwVwaDbXaKnhQjWoP1ktrFthBxxPbHEQpdXT3JsQMxaEWN7VNmp9Fd57fJcDsx321Zncw3hYLLo3GkgkH66EY",
  "key17": "389boaFxKzDaWqeEvxfNmtckpESQQ1LXTZhbZp3uQZdgRnYzghFWjjSxJQzh1SuysjtrEdSh4g6FBxZ3UhJXjqg4",
  "key18": "5wtSfdsZfiPQmgM1njTkoKqvCrnkav5ztEmi8awBWWqvedn7oYg3dfBUSJn9wUX3CWAyaGkzAn5my8fSThwD5hH1",
  "key19": "3JgfCJwCxttdou4SLtcDh9LKBoEvFx9WfkaUoS6tBBbbcLdXoswd788WhFV2Kxgdi818JxeC6WReqGZCXmgAvCCu",
  "key20": "5PjC1ZxvBE6pgfGe4aQq331d6tp2kyFVVwQzp5kAju9UJNwrvfqxXHtrU5yRQYsptVVRLe674rTn7B5BLZQbyRna",
  "key21": "3mjjuweg1qXUc6GkiPraosA1docBMeKYHjAedX2PuBz65uwTAF77bsL4dzBs84P1v14xMrfGZtDHR1hGmiRx5xXx",
  "key22": "3H9nCj2oRvt3kr4dszioHHUdspSivz7jtsrbjz9BaTGTzwi8xgEL3ovKgpG29Zf4HR2W9FcyTufPWAuv3tCZ5yJq",
  "key23": "2wxwzVHrb72fsVDuqgEPeoqfJmofB3xStJ8YntL1AMaqdAR7wJ2xXNQeehgKjXviwB21jwGtWTRcAEKBDkLfY2go",
  "key24": "5MU5t1Vpxdxm5WMyS1Mavp5FeqMaxbbJpwzM6qohfHiLQZKhbXSoBbAa5xcrbADyYaeU2idxhVFxAH2WevRPLFWy",
  "key25": "FLjyRzFiP6zfknkVGyeLLRf66kh42sKyBaN9BYFLU8zJgcgt1dfbmxhnmZVSBVjxMvJPVzxH9EjCxMv6xHrTgfN",
  "key26": "2jfx58NJbdwy7RyPJBx3FwixAtE6FqDx19rQMZXTUtLzLZJCJyWsUL69MaRhXqzgMwRnPj3ZG5n3BtCe5Jfm4sb8",
  "key27": "4PwU6QLk6X9LN5DEC7kxJZ47aCsMnQdmHneRcgKd3TL3saEtnp42Ca5EsavRp8UYgMGGV8zbGLyVkSbPyf7UU6im",
  "key28": "2EkA5mNEFB9NgrBy14dYv9JhfdNVfPT1ncxY12xxtYBGe1TyfLruBvGXK3ApWApoe6dzYUaawJaAHZJUXCedvgMJ",
  "key29": "2uRpRgQU7D8mAcRgu5daBfSBefsEK5L9TUzWvG2Mztkdd6dPwazxx8QpkrhQ4w3JVQpXC2yzX5JHg711s3WZFLwa",
  "key30": "3FWXBM7gwHbMvdZB6mGJWorQCHhLYzrt2NWJKmb1jUKZ2oP7t6dQ4N9F8b9gW9kYSj8NmuukPPgkhWfivhMSDwwC",
  "key31": "5Xv4ndk5nqGUJBxpGPRjfdfAnC1DTfRg8Y9YYRzmKKDzx7xueySjs3fommvjTNgcuRBqepBpcEDgs9BnYupFRvq",
  "key32": "3juHexovGSv58tab4sPLFux33X2DgNsGjKUXtgoFHkyshGqguUerX6w5qHx2JjJ89n5xgauY6w5P4qFAUjuDGvXQ",
  "key33": "5gwYs1485Xtpw9QUi1Bj5czVy1HcM2jVkpyiWqTGoyUBTTXF9sFSa8QACSFimUYpqSSCMwQpfqbZiFxzvsP7eEo6",
  "key34": "5Q2N7hie4HpLmbZSmmp1RPoTtFhdsLeExJxKkDXX6oSgF3P5dbLHwApgTrf9pbt5vaUk97ncfB3iQVji96bTakMM",
  "key35": "3J7CaPkmes2jizmjrjFUVu7SC58xAqrTecmfcvFeyii3Haw5Egh2gWpdDcNsi2TcRDnuMDRAdJ8LaPWi5rRD21p5",
  "key36": "5APaivLs63qA1Tpn5Edee1vdUPTRhjesyaaPavv61MfNqnqBiVgyKMArXt4GMy14dxVjGTbnz72yLo4usbb3QH1p",
  "key37": "3e5v4b7Ww6BXZRq4YDJUwmwMM86uri8mtSCR1oKC2AfHBby54KFD2TJwcC6PQwDbMHxVFmFtaQ8jg3wGTL8bjqJv",
  "key38": "5RpHFXo3Rd21ajav4Vi6zzpD6ge2hmh7ZzdfHj3oFbPsXrD9Pt6rsKFgf3HjegDsQHznG6EAoaFvWjedVavsgJbw",
  "key39": "3CDTdMB269YMo7RUCojUkYTguuDjpJx86ETecHFhUtpvRxzcMShjuLyRhJkNEJ6UBH19advcceyENwA7BfyJmBSh",
  "key40": "5DUQPEv6km62CekRCZyFCnbSzpVJZeXNcQ9G3TAi7SihfXbzaxPJP6X1BMHhm5qposeXogVexxXsAuhSbE9y1gnC",
  "key41": "9tiJ5ezNf4GK6FZFdZKMAB8zH88DFgseH45nXjJWqjmJcpF49hDuxNVdca8QzkHcr1bGmVRfZw1BhkkyTNJxcTb"
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
