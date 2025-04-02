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
    "2rRvMG5HGnc2dfBPeDhrrbDiA6ySP1uYTMHKwxWvq9sy9gsLgvEr2mP6Xc6QghmDTTeCN54Zrz9koBmmFRaREKCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UZ3k3xEAVWFsz9feh4GjGbMbAfNFRpbksXC6mw5L7egewkEvGr4szoD9zVtLu9Eav1WuuVA2u4CRxYoavTpGasB",
  "key1": "597etX59awkds3rWf5PE5gaSuojS5Uuz4ZQfHFMC7JCW5WRQVEsb6QTCicoeK2nMSrUspDcH9Qzn8TQ97rAoaDUG",
  "key2": "4gCDvpPWeSTGwvU1Q1uEC7ut3sqL5xixzPE3jB2aS81aLjiuhc24e3P9MaG3AzbiPP8xkksLkkkuDgKAnFL31qqr",
  "key3": "65m2MxBaP7qbL6Gn2toQEtM7FVCrmLmQbYNFj7guPrzDEK8EHkKs3vpCcKk4aB9QbXokxBufBxSAn7JW3dLQpkaU",
  "key4": "22LVDWSMr78pHqmbFRevy8DXWk6qrxYNJUXhg9MsaNrhZhJRFSvWMczBfAUPLS6Jbo1DrZPypwukVcvGqiXANuUj",
  "key5": "61AqMjxQ7sCoZTnTJpcEnJXRVLmRQ84hKsog26FXiJVq2Q6hciQwsZm6RvVq2528SH7zQm75KacW3CdwD5vsbmPz",
  "key6": "66d9gJg2dLt8DFuFNXppkWoTHKuxPTG5iQoFMmM5d4qp4Ckstc5j9Kjvkh9LkB8ccocxx26aqgdcYe7NJWVb6eja",
  "key7": "2k2HLTkDxbyYcb82t2nKjC3Px9ZfenAcdt57i6FP8oBgPwuYNCb7FLS63pfT8xWTN9p5wHGLVfD2u4NkEm546Rum",
  "key8": "3c2YTezQb2HLKGnyXEfiVFoUDMG1dSUwwvK8FHeBGGsaZCXaifoGES4f5SCoKC28BYx22JEdUK29ovJHPN63tc17",
  "key9": "XXxjsds6C951LVVBmCKUFctcPu7Uv61n3ewrHMYL4AM9csorAqVgw7ChGdKTeVeaPjhvHAWu1B4GgozN899Wp6E",
  "key10": "3GHK8GYLnrHRGfbitEg7n6uq3HbtXNdpvk3K4FYFjbsBzhjWgRSgPauMTY3BQSQCaVCYCA78LoUwNgcNJzPLhYDL",
  "key11": "Xh5MVWhNbB6PjDrWKxfFUUwu5vv4fDumQimS1XyjWpCKkYNEFK36Fb9ec9NTiFPHRFiRfEmnqv2A4afvPmhB4mh",
  "key12": "66HTrzbQg3UPs7poQwuAkvEChM9RRZQktHYkduaghnBpjuWA5ypKUbYMiv4UrpUBuvfTFKQajrPhjgNFBM6eo4MB",
  "key13": "3WWw82fQPKMGPTmeMoeNobfhUvrX9z44cR9fceRV8x2sfF1BtekdpnbBA4jikqwPTLnFaSKn2Z8pA4pySSKDzTHR",
  "key14": "5nRao1WhR2hJnCwj8ruLWm176FfHCJF243bMPCohrhVNumqXqeU6i9vMw7cEAmAJtySUpw4rxjT6eFazvyjjmLt",
  "key15": "3rPY5drQ3AKSw6suciT9qEzCBGz7z6qeen3anWtmXmJURpSk69guuup6kimdHNKUthD87FsAcdFbdCq8A3c9hUMK",
  "key16": "4qV34i32UhXyhrSEbPdLwCFrtwy8nGPA5oZfcbqwmPc6WsPfudVJ6CUZxpApPgeiVYjLo9phdpj63BN95hFSC1N3",
  "key17": "5mWEJ4k4UbCZJCmqeTrWnPy76byK2gtbzqgKscuwBc3tDSQpP8Vq1DSMPJBUKK4qw3dHn3bKkWm6FuHd8T3TuBUx",
  "key18": "3yRNPJCSEGSj4hXmZBbVZ9KLGS94rdWksRXxwyTYRyQ1pVjHKFRvpMAE7BBwnHdSXpRJjryTipqHhMzH9oH381nJ",
  "key19": "4kGxSQNY7U9td3ZBXmDV3hejwThCC7KP5MhWoJSzPFwBL5gznXvNbGs3y5JKMwypWTKY77uhJ2Nf2NqHxo6gnqsr",
  "key20": "6NxjZ4qCjJ4eyKDzR2yttaQrF2FJ1nLq8yBcFmQnGhYrKScMKDdsCjsEyEb5hi4QHBXxhMB8v1cbYmtem7qjBHY",
  "key21": "3p9EEY3F89mpmvrMBpuArs6Eh9AXX8ZHVGwBG58DdW4mwtgciXi51gdpDeW61pf9FgFCAp2JXx7q3VbD6GiYWcXP",
  "key22": "ReqvA4oHpzDUpQ4jR4Xp4rXT45SLCa9FeBmp4SnWdLvrVF1DQoUghC5y9FeUSqXag8CfVtgy1nuRAVdpt6Wqa2q",
  "key23": "5C2fZHXs21uGjPArPcEq5YzsqBsK73zfdgELvnaBTosvTF4KJBvJKAHevPnBkgEJK5nHD6gZw9wJ1wufVRSBWCRp",
  "key24": "4dQCXEJjRdJpW6JkUgz91npSLY2kx2apagjvJaysE555Qehp4xiNGxyMPNcEFDHXo7bcioAXxkDqrRaa4AzSBmSm",
  "key25": "EFBeBkqGxYDC8uejrXp13xBJoYBo2qGUc5BvrMV5Cj4LiSJxSP9VyNAP4vxosviqC1aC5weBDhb8vJqmDN7qNmt",
  "key26": "2jFfwsshyA3ZMPuc9noqp82jzHnT2qH2B1fMwH9fZiDLtYFL7nDefxJ2pGuJBsr6JLGv841fvUuteY935hKp8yfd",
  "key27": "3S7zEpP2pTsr5t6zWYcFnbgm8YYP2mi1F6qeTZksVuTX83Dk2QQ9rVZLNMLtUC5fRiS29z5GN6V7VgVrZUNJBQrh",
  "key28": "5w943eb83StC2sYR761hvfsPoNiZzTi5dvM2UTrKH8Degu7HUsRCUUP1G2xZDfbDGozVeabB68ASxeQ63Qj9jGaF",
  "key29": "nd59Er1t9oUzb8gFKbudAuhpzsLgPqTxmV3BNybT1da6U6cNEnEQ2Qx8gbQR71DmakTfn7j8385GKedvx5xiXQo",
  "key30": "3uJhigdwseVm4KYyr2rB2CnJLeBk4zYRXAS8k3Xj87hLWfbRDWS41ms9mjsaXsF63njXXtR2nR8GaSDECo3HcRQL",
  "key31": "Bb3BF4bncbuMFVo4W8k6gFLGTetAPrcbAcJgH6TYUWFasPkk9HNMdAJcjjKbztKRzNpB9b7VB648bQB2SE3epLH",
  "key32": "5J6izV8Ved11DfmqxdkH5dp86wHyAXGTfWYWAmC9Xp7rkjW5oDQNxsmMgCXsZdKH9HhCCXqhKsHSKwVkL2teYwM6",
  "key33": "3B1AE3boojdBzERZTxf1w5Avb5Rk96asUiTSS8aG4YU3jxqGNRG2gvAJQy2B4oZENR4PZzzwpaMxkj73QCMe5oke",
  "key34": "5Swf34krpvEp9pBXpB9Qc85z92cYkZuMUapzQkJj9FczdPT8o1KoGgrhNVbkBJSTd1pe5JcqverxQT2MncebsQEE",
  "key35": "QQUFfX1GDVBrbKMBHxfharkcZRestE1AAFPannLRghQvdaAH3KSzdGSofSXMueK7PafWLGi6Z9EpdPJr7fDR7H3",
  "key36": "2zurSsEUYjf8GwSHuEH59LhytoGEPzyh15DD6kSpfsHjhQhJCdGa31r7G1bYathMXCWqfyGSYEnfzwsAE1xvJvZ8",
  "key37": "3AU8ww31wHUz85yEAPNsa8fSK2VisGdEtFQvBDzvfiYaMWriG75KKa1QyijP7gGYMiw9HK6EdwabqsZkEF3uQBow",
  "key38": "5iPwF4KVDaxkJAvaFYPsc9nCFcEHv4pqMCT42Sa4fzBHc14xwvmtctDj4wrhpCzGzBwugMVLo6kZbDLGouRw6ZZS",
  "key39": "dsnpSP7DNPCBi8EcHYhmFv8YaX5VZxHj6j5GRZ4sdM1Hm8Difwez2j8zjAhBs7QCjH6QKuLyhttqTLuXB2va2QU",
  "key40": "47VU6QdAf55Lq1BoTGwdxYzwj4BbB7cGxENQ3gTatRSemDAdJqAbgKDPUTBzdv4JHeeDbTHuJNsjXJnh2qHAaMQn",
  "key41": "3cRFQvXY6TsM4pzwrfv5vMmW8VbWCZX3U1m3eeVtki62DPX1ee6BsDkfLG9fi2zd1ZWEHZoKVZ1EEk7N8nJFSFdh",
  "key42": "4729psk1vMkwvRDMmdGMgnMNfPoMNVE2qsbT4Vi5GWsW8Wg2kRkGk15tCeCj1T8wddDU6G5YUAe2rsurKgjp5Yfs",
  "key43": "2mAAqmjYZgekbj8Y9cLnsangb7biRqFuSbKTG1JQq5eL2fseBmupP3x8VPBopmX4LBXNW3LwD3QjKRBj2ttE6y67"
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
