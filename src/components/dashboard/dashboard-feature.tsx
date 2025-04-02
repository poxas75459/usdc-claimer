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
    "z3dxdYKKPCtPpp6BH5vc8rSxMbeAgL8aHg5sf7gG1DaKYqxNmWER5LDzrfCXihEH1ypwnfcGURvogd5eUKnGGxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HthK7ctBaq1pRMQ5ENxXjyiQ8qzQUBqgYZSBg6SxFEESFgXogGwfeK5dGTZMRx6UVDoCxuJzicYPGyWaS83fJE9",
  "key1": "2rFY2cgT1DtYXGAiysZUvXPCLDZfyEwdVvx6nbR6m7DwgmgrPp9KxMGUvWboHJrYnE5Cxs4Pvv4LqmB9JCrB6XDJ",
  "key2": "4CjYJPUE5JMaGnEiaA22Zf66Pah7utmqWUdQtJs4uiviQdrpvd7ss4x4r7ADV43VfFSezJRQxTrc4FkN1voVY2by",
  "key3": "5YfEMz6E3FywJKDtqcisGkyQKDcEf1K7ZcggQQMvcoyhrUH84gAK2zPK8RukegmR6KdE3fLPvf6XUcdncoukaPKp",
  "key4": "jNLz9VhkFsnq9tmBWX9CcNMEZxj1jpsGVqMpyGb6QXYyTziYhPUuRuFqSGErbrXRRqqMNoo7aR7AZvfwLZ2kVbQ",
  "key5": "5G3xcAxMmGucx1FXoqAn3XWbBLM7xToXZFeUqprhTQfr29kJJg6ComHLKqJNLUEe5EcPAtnn2qa4jqcK7YRnUGAS",
  "key6": "2cC6CwW2yPittVV73L6tKtorL3QcLETzCCmhqyQsK1Ck2aKNUkLrK5gDVoJNLHiQiMLMA5FxS1NPuFDAhdwXxQW1",
  "key7": "3SYF2tmJSnYRYSf3ukE1hAqhaM4HTvZ1VZ96JVs3t7LsKz1n6MDHbz4T1xH59UpbWL4D52ffCM5X6Evpvow9SLht",
  "key8": "36rnfPcfNpnJJWbY8YcbYNnF44tBybXUHojHdYtLyWd729MU8t5CYgc8Zbt6zCqpt1PmKEDgHyNoChrfq7y3LcdR",
  "key9": "43B62vBYDDV7LxsEYj3fJ2rE3FfCE2UvmsZCB9i3E1zt2GFZUg3Zzy2BCQowhWfnnj2312bpKRytGBHTJv8wViKh",
  "key10": "3DVCMxpCJp6XhAGnmqxKsb6RkHvUyHHmrvqgMC4ziF6Eb67V1j42oKFBAAMTnxvTKTMLKZrjBFxkPLdcREh4fMGr",
  "key11": "3aJqP8dCGZWCm6mjnqtcShp8jvWUdJSLrUQvXLzYF3X5ukDykBZsXGxfS3UHUpGQd99HGx69rL2CovjYN3qC8Pid",
  "key12": "5xbN6DBXoEWT96YJHyfdseot53wfw7ggeyXNMVWJivT49SUZ4JJzihjh3f5op4mHmoQhREA8MuCXChEGxnmgkHuM",
  "key13": "2kFV5K2oBafzDN6ga26r6MB3p4gkkMsEUyWKP9WSm8unDmE2jGfz8rjAk2xpZv45wEWQjRhqr6YR62wA8EfJZ75E",
  "key14": "2FeqGiXrksTPuBSyVJ4ePdtrNVC7L3BY6ViYeDWhZDKXTLLRUGUT2wVZVSGKc8noyHjdVSGSt8TUToxALnXVzVeP",
  "key15": "3vpSQdncpEjfcU2rSfCcuMPEW3BjXVTXupHj6ciiCA43VsANdHk41yCnTQdcCMcoKh6jCwPtigKa7xDTaN7pxKNK",
  "key16": "1TUVSCSB5gQKs5eLrMEHBfVW5VTb9bYomRp2kX7nnCMJmdeAFCeMXnt7ShvsgsxPfk4ByESbsG3efvSL9gZ89sy",
  "key17": "CByBsRLXzgxUGB1dNZuozTBfRAfMJgnWVjRTBCoUvBToaxogJFvqoKiNc958SDjWnedSyV3GZZwjpbbwhRiy6kb",
  "key18": "4g721qHQqFBPLppLrCmjMyEaSiJErM3v19h7MwRSUVgNNetdLznHV6k1DcpPVqEt2m9S57sps1LcH4zovuuAHHmq",
  "key19": "4X6MMW7Woc8dHezLZvEkjzirRPQN4dHKXDDfML7tZAGe1D2GwJrUETwxFg27eWRyA1uATZdU6nwEon1J4YdTJNEs",
  "key20": "2u4K7QhKWDPf2CNwZZKUM4VGKfH1Ye7bVwqEcrsn5oUZ2krX89vAD1vLuFPFJfPeQLznSF13LLejnRzmZAdFdzbt",
  "key21": "3GW8m9ifg5Zr3PYmRzxzPdEjpawLy8Z1KCYFM1u1NX6syYvaNwWok9WDqLrEF86ZKSfmbitNrh9tMkz8o2wCGbCk",
  "key22": "32PwQtr7Ab8SxJtU5VRrqJtTkhS2aAxudZykjtHspX2Fk43Qq2uWUsDcbT7GtKJBz6RR6gLzPK7S78CsrJUCUv1M",
  "key23": "4X5fnczjbxtj9p1Bx6o21XWF5UY3naU69Kt9yToTiGjaTnX775rmhuxn1ep4WkQmEYAcdedzsahYVhASDb56gjJw",
  "key24": "5gHPq1Jj6BGXMzKMZGcjxvECCTuZP4vgV6XM3q2KXHrAuncqDB5UUgTp28ayNwruEzcsRhkgrbPoaPNv1PPiKY35",
  "key25": "3bGwqrZ4WEzo6XTeYzBiRyecMJc2RUJB9vVPrEfsRcHhTiFxUi6EjtTjFfMHWMcrqrbgpJoPYLEyiRfG4P7vybXT",
  "key26": "Zm2CipBQUzgSC6Tm79yUEd3wZLaABsEZqkHprASeaFxMmKPy3qNq99hwsrVLVAbyvHjPbN6dgF9zzmR4Ugpy2Ym",
  "key27": "D521NQjcBeYr8zDpsjhBZ2annaePi6AWMGPSDgzfeQGaXk76BePnV8yiXHftumtqeojMZAxiiRvMsZnMByuHusU",
  "key28": "54ULZkzhEauDfGrU3U6QN4e3vrLVzSCpt85exsGuRTv1p3EeVYW1WuT1Q33uNX5RpTmsKJm1B3uzsnRJjDUnbMKR",
  "key29": "uAFh4dPmN2yXA8KW4G8FNARd9seGugsGPtXXA3t8RbRNxahdEZMp6V4ZZEg5JkeJdvMxtMxcumG28yiNMLBN9PD"
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
