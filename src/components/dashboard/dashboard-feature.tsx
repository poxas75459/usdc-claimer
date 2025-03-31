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
    "466E5R7S3jeAZuCe7v6V2qptPNhtr9eWw5ukdC9YbGKqTypULiV7rCuws1jtjuDTiSiF1QuYMKBJV6BtRdpW5HU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T8A9XVtJ5MFEazoswQTY34Vv9ECQCczNJK1PdvaUz2Cu8D39epC1VZEgdr3qWsJVDrp9UZrysMdgrabxTxh93Rw",
  "key1": "6ycVrdw3NPBncwBYSrf61HHJbAyjEMvJ5r8iTNZWVJtoasCUotXaNcntZt3pnrTGdhoWtHZLH9CBL9PpKnp4T66",
  "key2": "3DjSR41Tqqyxp16DUUVHNog1SWczNfrdh7VPD9u45YYN54vJMCEQ9YcFfJn6K8d9j4GhSJgezbVRTusXGz71Xs1D",
  "key3": "kC2vmDBdCMp7v7JgKsp5Ck3tiz4DXBwgNTfE7tCdR5wFMMYiNqN4eHffVHPsMBpQzJbnXCJnWAByJy7hNAczgxH",
  "key4": "3t9jepe4ZdEv2TLhjykoYKELDGho4vRAqi7tRAhpE5vGvtoTF7zMgZEx1JpDSdwifrB1VmvgHgEkLMZMMgtExc3w",
  "key5": "4vbkhRtaAnY3AQ3jLBgvx4ABCt2u5WGMppWV3gCZgkHzYuqVRW8c7EeGg97i2gGw3GcSfvkYu5YRkP8UaRz4NoJ9",
  "key6": "5TnqgZxvFZx4yrf56Xfw2qXedBZfSMYGAu1rEETQRMXpvjBSR8jwHV6uSEbGjYzbeW4cjeXSAN5Y3fTc4F4YpKGo",
  "key7": "29zNFT7S1Vb3pp1KvmyZZJ9NPk5XDeUEXqS7LNWT1jUh4BgyVqdXKNJpUFqxRBiD72YzeiXCEz4uZDQWxLvAAUvH",
  "key8": "YHN2R9uf9FyeDdBLBfXY3w4GEnpQeL12Ho3fX7srA2Q6qZ6C3EncFdLAzCYQvK7RAkDkA3RbzpbxbC7CxczeUsL",
  "key9": "wtb9iLjhLHYfWF6TF8HKVYe4SxT3QGjPQ24yvgdbbUwQVLg18noLkFLYFCAuToMsUwhCumo6moR4z2WtSwCDXxf",
  "key10": "5Tp6essD8juJ2XY6A6fT4bWuSqkwvTUwYhWRmjHCGuuDepgiiQTL6KdzEjwzy6r5Q9nPBYBVYH2hBwrt689i2k8j",
  "key11": "3bpB4sGL8YCBGJD1dedDG9rzXpuTiSpNjtDVhZduTCJuHMHDwFzmrGW3gyYBhZRbrHtYbBZCXe1zRCpfWgSoqcHx",
  "key12": "285tSx91QuAshJk1JUZeM5nXEmNBN1jbMbygtQJZVoQ3bMtET26NBkQ9kTmcBgxFyKDoQNqa9gw4RW85BoWpFk8e",
  "key13": "5EvceRGHapjkhZ4HBipzdMtMsJkKJncALVtGMDVUNwscReeYTyVqbu5dWTPzK2rvqCFQxCXonX7R8smu7Zvy4rZT",
  "key14": "4D2DuKk4tatfmezSyBUXWcTLUotirVpUXrHNkTUYbh79vJeWFBCDW9BPzegt55QfmuDvEDdpK8PBpA73S47Ww2Bd",
  "key15": "5nW3vQyHhHFMhmhyUFp13hFTv5KY5Kp5Boiru5cD7Jn554p26ekE766zDa2zAgyy8YqA4uUGnTnZxJ14bFfSHwLK",
  "key16": "2tZGj8wouqC92pEwrZXrArCJ6xUdn6oJnjWrX161swxYqfEysLDkbBLN2PATndZiJD3FXsVcNtHTci6QTMaYWRzi",
  "key17": "2gj6XQVf92w111yKCe2nWJ9Q7iDSSrU6PTpysah6BPZwCqjuhKZ1Yyyant9uvj3Z6Qaj9K94PMGw5iXVRiqEjssX",
  "key18": "43iekVQf8tym6B5Xx6c3rkcLyc2fxP8gvBF1XvHwwtykJL9FGi59jfcHcd2BFx6VEuhRYWYNUpPbXD9WQspXbnCd",
  "key19": "4nyVV5V4Xr52Gj33j9cd5YaNz6C6SsSPnjM6Dw5nrHy6LvUA1cUyUmm1RGfUBQG5NdJyJYuFRsd9DUwnW1WnsVcc",
  "key20": "5fR7PfZLFCLhKPhDtPxL2Tn7v8gkM8rkbeZsoj9HVeR2GiTYc64YoEp1xgFbSazuDtvyfkCtYGYRku4JbVwDqQ6h",
  "key21": "5AAGkEcaCUxEeKz3SqX6LeRBNvzuo4gSu2SjcXTK3iCNSF5uzUdHzPQpYK2wGDjpnaf8GqaATa4aXfLiZp7gjtZE",
  "key22": "REDiH6tguzFagkphmLa277yCdHDzgWy4PcJELrN4mhqqavkupTKp9cCY5YfcLJb3NojTciUQM6BXBgcZMyXbdV8",
  "key23": "mV9sfZuoa8AJ72dJoKKe4VWx6tE6ERAG9F3W7GDeydLdvQGQGagTQVG9gSuSsf45E7X8HjwMHZK5nFQbg3UMLPo",
  "key24": "GjnrRoPtLNpzCpF5QfcQ9BGqbZwRPgiRFPWgs4wB7dWi3S3wb3abTJBqFE8Nes5BfVYhaochAxhFJZdNUfhSsda",
  "key25": "28HnhwyJ2VmvFKoQPxKfURNpwmh2nAD4WHb3afqTQ3J6Bm156mVnVGupX6oFL4wnnE37TSgBzSQ7UWd2ALHBaohp",
  "key26": "5xo4ifhj1yqjSvFPAPUZ2wvR98nEwzeHtuMjDZnb7KxUB6ULSiBNuWqvvV95W7HsDu6Bi5rjQLVGom1Y4h39Z41x",
  "key27": "57S9pgtvureXQFRY8Hpzm5wqWSQEx1vcZsYZtbrhjXKp5uECF5tnMFVdaGJtEWt4LPsiLDckqn8X3H479TV7nxxq",
  "key28": "4ApYBgamEEGacz3qZ1XiWDfajdKVMV2aJ9sXeHokornjQT1CHgiQMfU4478cJNraCn6YVM4kpD31SbCQNhqUEC1U",
  "key29": "4dWU2xg8WothtDXgYFxGE8fsKDdVhXpPUrNUaS7o4efbXvoxc7EwE8QMc5eJHUDyoyjRKaayUjZh41f2c4e8iaET",
  "key30": "Bn1cHjLE2wpP1TXiwWSVCpQcon42RUvD2Hx36rTNtTG6vc8Vo9pizMbacuHCD7GjhNoYkHU8mXrUaMpZjvoHDi1",
  "key31": "kCEjn1Ca9EMXm2x5okoAHFxHwBskPsTwhXvrnuRBJNkJ51r36iEVoo5B6gZETMofvQaNyS8xHZx53cKQ8qyD5uw",
  "key32": "3yNjxkDqsRtGuP5qvFZWVRgBCasEkTkSzjBZ4oc55fWjVYqwhWTreS7ukMev6g146fzh6aMsoskptnhcX7Bja8q8",
  "key33": "2LzHje53L1jB3wfrWTFNDz4McNyxMdCkt9k6wyeMmxJSd2Jkn99Z7hRht5iPgMKusk5vRy4UqY4QMTp6vLtEWjBS",
  "key34": "34c3W8sp17A2tEg1VgVxxyqUeKQy2bD7s1P2uxDbWZ4JJmtk1pLqWNJmZYcokPJCLo5urTFs2ySnj2YWNxDD9BN2",
  "key35": "wRqTQmTewmyxr1sj7TVHWyN9En5LKXp9X6WJyXem4tWhC8pdCVkv6ABxdg78h2iMcgseLojjAJqbLoeNv5n6DjE",
  "key36": "5Y8eBBUb1KF5GN6X5bBGHezfjx3vB5ejqT1txPhKCzKK9ebHCegFcMxBmUdZ1wPkVYRgDkKCdcFJj36BRaPbBPmq",
  "key37": "25HTS3YLW13Dpk3bcPfRSUgS9AwPPVNMSyYtuuPuXefeYfFwjDcZ6jbGT7h7Ro1Dp4WUHFMAw6ySfNfs5MAB84Ui",
  "key38": "2s4h67QEnwmGwY7X1Zof7EWXtTPiRtDqWHcGr1j4uYcHiGA1vP3UfCrvnxd1KdofV5QsZGsGwR5RusD6vH4kfFsy",
  "key39": "2JRQdx2metceGYbACqAWqbvxVjsZDvw1caM9q9hAD4EgGw5LokQ6TArvsyAigoEHX4ZRQGLc1iYeJ66fnP4JyxA7",
  "key40": "jbpzqmT6g5enFxkuTcTiT1JbupF4MTDWnnZejP4dqKZgmqxNAeTnAkApMK1EWNvsYh3nhPdziNGYMGfV87mtqTF",
  "key41": "2RdnehY1C8sWDYVXPvVi9eATcfsGKP7pkXkGnK9HwFQau2N9k6H1QpLm9xX8gz9VcKn8iiDSebfzbDvuEriqJWLm"
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
