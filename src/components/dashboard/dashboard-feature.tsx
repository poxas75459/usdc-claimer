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
    "3MmjzzM8J3RrKe2pjGCZzmQCF7yZUkKhf7dFEEveQr67WcC6sbubZibrUJ8r2zgiQtCP5epA24Dc15u9L3MKvscT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t9PkjaiwiErciDjha3fdggpPHunqQrhV8LVoKkYMe4uqbPGgHgLQxZqALTZYQ7FG6CTFKX1Q8oTkYs6m7Thbsff",
  "key1": "3qy6V4PfqXeY8V9tKxZJ7PLoTT1CH6srPCnE3ZhMucSxTuWTFi2UB5ecx1zKhZyGSRMYdpZdSD2wHt9EhatZtaeX",
  "key2": "323sMgjaM4ETgvWRMWxpFnvDWnfHoBHtxPbx3HMkHkAe4MhLa172zzp4oHJTdEWrBJCANUYxxAyaEDc3yCwqUenU",
  "key3": "3YqwvHUhmnaV21dAjmoFMN93ESt9JB314N6B7wfknMhV1Qdaa2fKywsyJ1SycfRQbqL5iNDqq1LRVKkoAGV7vuvT",
  "key4": "RLSmnfoF9sTKkbyTFTc7auuay6CghcpD6yZd7Ewas49AhfFF2mNizR5s9kEbP1TBPsdxZd2B8Ywuon9BNvqXxvx",
  "key5": "4x3ycxuymx6Dx3fGkVMpuLL3nL6ynZVe2VdA1v5nununKNTJVoNDAHgLUNYJEmcDw2AfhNBj2HV8NSm3dMSvfNxZ",
  "key6": "2mapW6qBMktgxfmTQVAXZk6F8qx4nWJ18Epkw5K4hwgz2SGdFhTBo2pgnwxKCGAnBxMq8PFSzrcDTcfQQfysPSXe",
  "key7": "3vqsduDZJpQyxtc2N5jC9ghCchTU4PSvtwUFFkEjvsmdtvh3fki3XpoqrnyK1RR3oMeR7LrLc3pPydgkY52bQeY5",
  "key8": "2tpgp4UNasndAFEvwSWa2TQUDLEM5zZMLB6d8LgycvYE5W53nE1LVFEaXCiE7gJkKxLTc5scwuHjrpUUT56PrW29",
  "key9": "2i5wmc61yoGyPVkU8G7JQbwrbd42Gn9J8e8CRE96AayCmnrrq9qcq5Eqep1eHRM8wvm1vLRXVbkVuNYM1UhMEUtF",
  "key10": "3Qzykii3SeWAjTmRt1PCvJH9WxfuiHpHKVfTGrKAt8WWWr2n2Tzn99bJQSmsDwzwsp7QwvTvPK26gihLaCdkRX7A",
  "key11": "etRz4PuUpvkc1Zd6WiuKNhPNCvqpSDcxuBTkmq873qGUHYtEkfagP6yM9exVg5NB81DQZ6BVP4VFtvkux6okM9c",
  "key12": "51DJ3T1k86YaZkhDx3TkPjEQoGxLZPi1TarZh9np64PuVS7aNDpMFA8YemSd9MyUfb45AjDRt9GmGDnkwJKFzZXM",
  "key13": "2ajvUaGFCY9V42hmHs5AtedTcJ8x3tzJhoztC1CCfQ5RMJLsPmkvXbRHBLvNLRwESu6cZbzJiKs4CpVHKVf7M966",
  "key14": "ELUffvVTi5THGmwrQPZR7WcLvGiLoQBiSxjGd2EvaeW2EikB9ZEv26THCVWjzeTTVVjeoPZUxe9h4xoLiT415zk",
  "key15": "4SWhgv16Y2TewUuVfNNFAsjRnh1NeUdnueaBN6Z4sPB3MwnpKsG9cGGMntZJ2ADP82h6Ur6ipndypRPLcCmvNsVa",
  "key16": "448rGLFpyr9RSPopZ1tmVz7moWy9aJSk9VwsjXht8zKGExZzoP79R9mcNeJqpNMmvk1Chjqr5CvF7W5AnTL7b4M",
  "key17": "3oxkvPbWGszPfeLJTYBmQ3U1RoFJQz66DxkXQB15vbVH73K3HtRHszbou4ivr5F61TvWR68ykY7fdf8Jza19yQg1",
  "key18": "3xUdZjeNgRXNFJ4aBRH5owY2znsVtAnGkX4WNd9fUbSujaPEEykwKp2i65eow4TeMmp87naoGATjoT7Mt8TRhrtu",
  "key19": "5K3dKJBpFBbH3MD1u2NrJT9pYb3JhPhgLsJ1zeScFAJch18xu8FsMXixkXBsu6keKyWMUt2BhChLJ9DNHwSuQe7o",
  "key20": "4VCp6sLjzW5MNpiS794tYhBnYmciXoF6gskono81a6wVp4huoLCW1rUBN3jaZxz6rMw51Gpp6tYKpLSvk6e3GStQ",
  "key21": "2294BuhVNa6WGt3gXi69xZZM5XW2X1t7QVSJ8qLm72pnRuBGdbkPYz4oPYhLt3xgxhSFuxzRZJeprkpQvmiXDyPQ",
  "key22": "2hdcGGETy3MyiL9BYvroqcAK3XQefj4zohVyU4dktkBovc4oPGBLAnAPSL98qFx9sB5RpQAbuUME5mjrL7Q2CANM",
  "key23": "28yqp2QqEgKiFP8xiPPy6ve73pDfgW5sbyqkvyPDyPQTy8KN9dnpqdskRLiuUPYoBai8FirmpG7FCFruqJXhhwE2",
  "key24": "3x75RbG5Bexs4UPNbZgLfYVk56aMKzEwKo6Pn6Ekm7K7Wkf1AVhWVnoNcXC8FBbh5wLgfKtvAbtUTgT7FgjodSDT",
  "key25": "5hTCiKbyJoHaujrGoRmTwWFQpzu8LNZs24VEnBoyE7kGGaAnYfkQZc2GbPJZfr7tsMRU4YFE9jByV8ToqoJ7gB5e",
  "key26": "5GkLddZ9ztSXr8dzvj5YKkshoXVTgsGNU5fMY3X3o45NY6DdgYcLN1RGiaPHa69Sdp4omdsWe62YD4MSwa8ytJtb",
  "key27": "52RztdwmDBBMKJSWRnbwVLWk1mtRv73m8Jfcmr1zXdwcZRS7sEcc8wp5eSXLQYksccZRXU3gfEmyXTfEH1VQWDF3",
  "key28": "4RiTmBDK3aG9k1L5nQsguRv4uLpJdqkDYQ3jWjp6JN4RdtjFnD4TQMAysUdu1Q9Fmv8fwE1iAcsmNnGoWzBRgP1t",
  "key29": "5Gti82GzKwGpDxMW412cAka82AGwmMwGpwqoPxKYSQNpQ1C89iiPYX66q4PvJ2pv3EMy8V7Z6aQqXQXZu6VGQk5w"
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
