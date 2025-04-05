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
    "5CPHZGo4Mo3kirE1uxTu4KDbsEonG4pGfVtt7gSrTVLihdWS2MLq36roRST3b1bmijUPPFpesYCNcwmFnErKZBK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gCoHah65rJ4qUMGSjxfTWdjvJrxFHt5HoW5jT1mwX4WF4FCJuGNjXTdtPEHER35hm3DRKkGnxZpa3q2TEBy5R4J",
  "key1": "48bCG5Nm9Wmgh887xHbFMo1YYkuBvqf98F4M7UUVwtyAUd3GzbBVtEatL5gbP7p8M5QuFe7ZZugXPNKpnbKGvoBB",
  "key2": "3WsjRnXJkTRumsG9dKCp5C2zWTYo1yAru5jyXQePBmRQfAKK9Ljp6g2kehAxEiLnC4nT2YHV33rtW7wZnjy8oahU",
  "key3": "33vdXmmmMrn2JWdh9431iBWDKhPdL3b4PcAEMwyrh1EzZDrAFn8GDFnzBboiqrfwMUtqgMNKdYwzZvWkQtLAYxAe",
  "key4": "GXzm1w41cp3fNLkDMZfy5E9VC6QXwMFACxwgu72FQyBL18QCtSLmacKLCbgZcwfEiZowW4dLo8Lka6yZqzkrpsU",
  "key5": "123eLmK8DvCCuBc5Ut8dVxKVNtxczQmcPNQE8cLv1LEQiZjYajyTi6guWFc33LkEfG8bWEKSQWWD7W5XeSFAQwL7",
  "key6": "5Mb8dpFqD2wnQhqmnD911hasrgu8rKjz6nuyaT7tKGabCD2gNZoAt5G4eika1aKZzv4oQEmnDanDnRSDUHboD3A6",
  "key7": "26wb6zRumXPR8pahEc4rSmV4BN7bMPzqcxzEdzTeGParogECqBYatSZYTWAM7AMBfwqK5WnXeGZWCQugJatBCNm3",
  "key8": "qYQXvTNpMLRgmvzvCvKCfejf2vqf77TwPJ7MiyopdLb4z15fDL2Mgh8Jrj2iPxXvbvbWMoYa9tdU3jmuvcsQiLC",
  "key9": "66qYRqParobZ8UUGT8XrozNSYmSGoh6jnfD83SDKsP8NRLEFXYbJ68kPZo8U5EY6xGEyPafFLq1zyVcZ3MBVZn1C",
  "key10": "5xf7336sViXPapWJVww92hv2wRoCVbH1bShqCm7mturx3qtFWWPh2QB1ukS1CoFNwpocEc7UdyswBDkyPodfPX1M",
  "key11": "3eEDq3LAL5Gjosouqj9cPxJ7Vtg2YAnGFcqCd8okX7kECQJY7jKFeA2gaxJn7CGTEc93kEJXGnDjLyjF2NbX93w2",
  "key12": "2VmEecC7K9QrcArfzkUmU22rvkhkFU4JManVL4hstvi7puNDqzEBEKwdztAJ9v7iNgBd9ei52SBnodXARdqNguQB",
  "key13": "3RPNv98h7PTUcPBTFUPjCJo4UNaCftmeTEM5nsLJTE2wCjSdJMyL1R43d78GbiSBArU8LPLcoDDSWMYSECFDj4X5",
  "key14": "2By46X25xhAYc5azr99nQg6bnsT21WEXxvyv5ME5HVPWAGehqa6gxj6Lf6WSPiEuDbr7bZyLqonJknFsgWSvDjJt",
  "key15": "ShALpSwzGsJkMDWmFT1LNavHVQtLnkVpLFewwQG21A6YXFnSzZeXGYhMQxPSnYxcsubFSZStTaGrmCaZNxKRmig",
  "key16": "BJTzchtGuYTP42qyMHFqZH6YDHT6Uk1ffznjqDeu7ToTENP68b7vwoaY6JSTmqFihmEMJsqCU6wrjAQmczaHsbs",
  "key17": "5U9irvJBGp2v17eAT87qNxTBjh8fwkhfxd3Cp4VGSFfRDRVEyrgRLpxDWN3oDgKTshkh529QayDfrWfzgisWyDVj",
  "key18": "3n89VRM3bWD9asUwT4aX2Qsn8p98kKA5xHTbzPcc3rUySQN5754wqZLYTnSwCRBxfRwZzgu3FJ8ko75nJahhH2kt",
  "key19": "KJjgJhvLr83xvA1x78tYrx14nbz949KnZNzBScQSFdzrFMfciAHfBRoKKsqcKLyuzbbACgTrmyoXgeeRaCjQi5c",
  "key20": "4fHW7NScKTJhUxsYukrS19dKSweFqBFMQDLvNWBEZWWMvYJnvf3J8TL3mspuCM5qT1BnThcTqVttCZWFncNHXNv7",
  "key21": "4pc6UMP9nUXMJfPrPYbdxdvUHHDATaJV3W8hbnQcX7ryPoXEqkXc5W28nneyfqnkzz23DG1zLDT3Y4MApXJhwbCK",
  "key22": "37JBiqFM6a8BCjfg3YYSrThiKJPH5o5bXEVzSLk3ZLeEpgG8mf8gpeb1V1YAE1Vjckaw6PMYLdnLUXZtx8b5Gci3",
  "key23": "XTtw58o5E8ksoneQc11J8P4vTK6VjVAZqyJzEh44aKbvJKK2fr66yH9KpiRuchcnj4xogZ5FEMasJJuWZvdN312",
  "key24": "5q97JQ9tc3E1TdNGLqoeTWay2BAP8xFG4ZHM3CvBmMLngQkQ8qpAnqJVPFKmChWmmcNqPqbHh4FyetzxFyAbZfxx",
  "key25": "2ryUZoFKdVELGiYYvySYQBChV3Xzw75MTQccQJHHooiedezmSx2kgaiDQd1gb2671qW9QWPneW1SKJXDTo3VtPxA",
  "key26": "4DxinJFtgQ3g4uZFGMDPpQWSrF4SGhvzCpTyvgeAYHphMbqk9ga3bXsCrB5MsB6Ks1fgQVuSU9kGLqRn4TbRRujs",
  "key27": "3CsZFxVSoKx6SpFaQwvRTD5o3RCqwFzyrxo6tZ3uzNjcM2xFMxpH2sUtVkJVbFpXVhiCtjfP7w8c5k8x63PugkZd",
  "key28": "5DhQ2p7UXdAaowBRyxmnfXG4oGFC5gNVb2h3mdYy3QYgkKi77fuJF53QLr6xJ5Dmh6AvX9fm7YteX8Ewya6vV2V3"
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
