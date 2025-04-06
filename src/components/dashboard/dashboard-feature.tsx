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
    "5bkeoaWNtvm2r92Ui1Q68efzghizYneZsGykj6sVjaBMTtZoyuFV3HJF6E83o5gjEvLUKaeWg6Gma24a3A89tqTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D2U7Pihyzt73UQwZbT3VXUNPewk1RhgJwrAiyRUoUf3hjY9Ap2xADiKegiqyhLtrC97GscnXCht6wCKc8y7yXxM",
  "key1": "4fBaTUcvMAXDFraCjc79XFbw8SZxp1E5xitUEFTNkqEBCdCakWbwEJxTghzhVxoRhzeRQ6LqMdrKaSP8hfVk8GBJ",
  "key2": "5PrDLKifqbCgya1chnumMeN2vW5L78eipkPgycYMrgrsvgAxkd1FCaXLXwyiAiGYWYqwLH2uP49EKzG2RT4Gp5H8",
  "key3": "5Zra4ziW3RRVqu79GvtoAdb6auedYDKDiZ79S4kaCjFwo5P7XKL3WhCtuw3xq4JUH1pA3nVmphcoPr197QRNx5Gp",
  "key4": "4DmDpayVWXYk723xUr3reTNQpRBPTJFbqD2X7XCkXtFGZXjCDdNuRBsaep7iTwQxhTaNLKAGSMN23xVri5NsizT5",
  "key5": "5FNekQ3LcPury1YEiJR5S4uTBYESSM4mMV9F8pP5X1AJtoyubyScFPPY25Jeo3LpT2p9rqNmve9rHtiFMAPJtvKF",
  "key6": "2A7QWLAPVCqWhftuhMzBxVooeW8SSoe714C3Pb6iQQLbfrCjcU1x7hrNuQJnaWeDbUpgtDHd4PydVG1FYj7EToRg",
  "key7": "2Y7eGTDnobqkY9cB4YstLavPsZsHPSfnk36vJdBQzovVufk6jEfgAm3AL4awUquwctbWpPcQzanfsSDqfZK9qKpv",
  "key8": "2iQxS6DyK1tntSRS7qv6HCWHwcCrSak2ie8NvQKsBiUu6w5eWHkJnBVo6EUquGhoRbovkaBQhL8g7Wy4htCe4kgk",
  "key9": "2NQfEp56U3usksGw4Xgzr2trYcUbAtJe4xgsYYAhgV4iLiMCi23PnZtUR2pBBtqjvnoAeuBm6dVC3aDgWMNQNqSB",
  "key10": "5BUukyhetWGaX6c6aEWDm24prKKP7KTEoqCc5LPRLPQneSim8u2hZKffw594yWGeye8yMiQYeBgZpmJVAzXmx4Qp",
  "key11": "4Ug7sBbYJwnwCirr9BS3riWrM5DP3uPGD7whgYu9QXcArhWGoqyYbKWNSTyaJKjMECAdM6AnxsYS7TejwxbLdn91",
  "key12": "2z2Vh3WLKjwk1BMoMjUqJry1fuC2rxwPqzu5rGpoH17iKyiDXRTt8ZyupbF36sCK1Gipj4xszv37vnazg7qwgjX6",
  "key13": "4w1tWradXwnBi7kD5WneEnq2vnoCPBE33KA8ivWvWpLz9jDKcdNXMafwPTJeGMoFbhSwDoqygwL1vGa5NQXaHYQD",
  "key14": "GNvX5Up66y725vbAVFToo3bGBWyURXSDkX4rzBo4nSx1F6t8NxKBq1FWXEm93bS7osxjBc28F91jqSWeZWi81Vh",
  "key15": "3xcPgW2cffwZ6Ady5Evet2qhJUcMegmfX6xoPo5SYLK2sMjT3JM2jR5hcVUAyP6Y1q5zc64qcbNGoqL8tUxJkEzT",
  "key16": "3xAz5bDWzKRf2PoGbtSWfGJwRcELe8raC9qD5WcPf1tQWcv45cycuW49fAV4ZsDkUpNDTTyQUYg9cXHK39CWZMkX",
  "key17": "35Y1aFzfPs1QV61XeU134ZfyY79QUbSx6LL6tDvBrtKYSnMAFBDENFfEUJrSWo3LVLLoYL5MpnFFa5apfaVg3rXv",
  "key18": "fgRLzCyeDktpojAuPP5HpDQFGwdEd762W2AvP3L2Z8eR4mDGVKYFKKnZGTUNpwr2ndbHHf84awDLVYMCXd6KoRU",
  "key19": "2iSXhQHNwhLNwLproh8xYku9DJtk8jbKHB8gz9kQCWhWzYPDyB1eZomn2dqdMh2NY1uiaS1Ge8TabCCAjCjjjHwW",
  "key20": "5guGV4smRCDsCCwoJGBSXqgQJW2nwEs1pSpyCaLQjWcpRR2Lzv579faBxDnTc8cB131idsLLE6sTL2aKpgyYoeTH",
  "key21": "5jc2LnDyg4r5VAvVJFQcmFUGVnMQZ9tJJmDTiBGYCwjFRjjtKqdzauZUrR4XE5buTHp3RGUv1VRVyrXsSQcBkXC6",
  "key22": "2mUNhNTrxUy53GdrVh35bDgf7TdQmofebmVJrMvuSSYJtVRu7DJzextzYcdesLBkMah52tkCLKZSZkvAYzopTkfP",
  "key23": "5uMg2sjaXkjB9cxKxt5ehuyAZDNW2E2NicH39J2SGxoT35DJPfoYexQ5vKyY87R3NE2kR8NDjnEy2wEQ3nsufeuz",
  "key24": "3GPqEAaTD4gKhS5uo7ETC19ATkUJouf7jUuQ5DBRaAJ91eKuKqiGN5tMDNE4gg51MEkXX4qAr9EtG16aEMNBDuA8",
  "key25": "3dpfLkhQTh4A6W5sMg3HqA3gYYFyZShXk7892n2ayW7LZw1boEkCYUyJ2pYna67GhJ29dzp2AvqUrbweGb2RGPjK",
  "key26": "3z5eT42DfoRK9eUC1ffgvkTbaQRLhgGSz9dXTviJGsfQyRVpzzaos4SNfb5minzdsY7DF4jYaZ6oCUpcPMo5XEMG",
  "key27": "4BDJggXzSrQb96dBmdEQGwg6p3Hyufxqw4HTojU2v4zffBLkTbynxSRmDpkvgLX9QEMdbfU2CPwAtE2nEYPtNd5K",
  "key28": "KkqnXVaSgskjmnBzurcCXaGLgM8Tjceq4uNR4enaAGQiGZgYMLxzwSkW57xxaBPMEkHB29sAretRcnXUuyCWqZD",
  "key29": "242EuV8U64wzqiUzyASQ2AVzSBW6QaV9hdgNTht7s3wg7vuPYHgxiMo8AtTZ7YfoiLWiLj6n72eY7XTwGYY8S3Jy",
  "key30": "GuufMfijVmGDxZWujVjpwY6GyczHCfMD8AXeK1mya47yihXeQeRdUbZNjziy78cBCm8sbnw9okmQc96nFfpP7sH"
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
