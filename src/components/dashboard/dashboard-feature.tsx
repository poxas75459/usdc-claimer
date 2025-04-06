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
    "4SUtQyAxnbJ86wyivqXY92xKXJ3z3AKAEz88xfFejhu1Gcfr1wZkzAKKp4ha47iiADSWVUSYV7RCW1DqQ5Vw56Np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SwhSeF4yn3qHNmwbmk3qEQHSN784RioiNEiUXt8R9b6Qrjg36To8JGDCW7k2RChWDtUQMK4Dae5fW4jEuCDUFym",
  "key1": "2SRyMzxwBUBe2PZZn6HkNWYhcJvFUtP34sdvwXQaaNPo2YMk8qGto2BomCg1b59TMsQLb5XfHgyrKEPMpyKFGfF4",
  "key2": "4foynX1DNocoJLcHAtw4rdmaMCoSAcWs3rbehY36bWKHmhieCZr4q1DNk8xisBTXgssqvsgDajbTjSWFc4Sio8PH",
  "key3": "4sWJwNc99maNKMCnM7eJTmwpuceMVHTUZKVJaWVdn46RFsMbRZdWPXSpbPMQBJHj8m5sZzsQNat557E1d7Ar3i2v",
  "key4": "3ymMAVpWHdF1ipTDZ2qdu38tbc4N2bjJ4i59sA1roqbKMheUxMv2EHKimHFnr2zqxoJF25gsLCGAcGpAEkKA3EBg",
  "key5": "vqr6oCUR6i7Fmz5hiFzyQvmasYPGmRECoP9Zu8YecVyWga3vJ9XG3RrMnjQ7Ga1Vy9snEnD8E7WbHYUgJGiBr4q",
  "key6": "4xHSGhBnbvZnifAM4G1LLjfDT9RiUfSEUadmBNArJWLBpFVoujaQE4vPLUKA5roV9mHbJC36MjdsbhR1J2Y81doT",
  "key7": "4UYjEV5WmhKKa7Liqn1hmoMF5ne2MxwbraFrJzave2C3GdNUcLqXSzsavvwThxKknSYMuzh71YwMpRyux1zanPgL",
  "key8": "qzWmqVySq9rH8oJJFQBNgJCUFftNN5njZFgMhRVYJQrb4NWAfuBUGrFTkw2YkDtMmQWqiGzLzecQmJThV7cQfTR",
  "key9": "4JuoNKm9n7B3hLxxekztvdfjqYh7ekM9NJnHfvMpU4cxAMPcxnbYqEjpF5DetJsMJtVuzPPfGt3ND4F72PSPuEap",
  "key10": "T56VTy9VRpLbcCCVYJu8AtLgu6zLZYMMbXajv5eY7eqYw39xztGjTFwch2s5xn8MZkP6PKVaMwVjLGx4hxk8zX2",
  "key11": "3Ymt6UzYYxb4UV4vQF7ytKj7HuUQTkyvv7HM6bYG5rgNAVH2hh5mUS87qBsxGpWzYSxef78BsjEEVZAeig4vinjj",
  "key12": "5SqVkNmTnRDNDFymipYRsqMYSicyMCpmXsksDT8rwAXsmuGNWKNmQc8QdvhUNp2arxM8uFC9sPyxC9KeSwxCTiqo",
  "key13": "5Mg1QyT7znevv67qF7szGAdz86KJzoarBoRpGLgGQduBkgsBrcHdYEnLPen8MjD35HXfhtFjHjrQAooEAahiyRgy",
  "key14": "62FNHU78gr4SYTSPCWFsJgCU6DW3CfP2D4BFpULYiBoRtFTiZBAkrDBrYNq3PrVtyWPxBpZzAiWP1rBKcQAvTs26",
  "key15": "4wzKsfqzGqN523gmgU6d4ygHqmYYAEXob9p8qBJsUc22HFbzaNaj33AuasWZaqnb3vGZGk2H9Lj7iwthGKJnBgaX",
  "key16": "5vqYATYT5NkjMQnPU5ToNVEmJZU2fJPfKvuA4aJ2xh5pKoekgGUg8QaMaWNXCqPLF6suNBx7GhC2WSnx2bjLD1kb",
  "key17": "2MhKTa9KD5erYjbzbE1rNUKJkGuo1vLw4752rYejejBWaYdMQRzkXoukrU4XWqXARHaJSQvokuhbQ3TzVA2Hvy82",
  "key18": "2ErbdE75F3C9ow2TXmswr1FKp7ouVHYwUqbMRnFkEohYESbXNFFHdSVshps14DA4KJrH8gYMRMk2SN1A9sqfWBWb",
  "key19": "5P8kXuXEbDyeCSiQGzMdTZGYfRnXmzpJpRp3iE9f9SeTZanzvxr9z5iM5RqGGGv1Jazgj1GsMuxTUrxdBhWSEHkC",
  "key20": "2GyTi4dLpg6jXXStydXQmHhxkkn8hjKo2NJgiE3QwNFmd96hX95ogvqj4P2btJ3afJSe6kzuT2r4sMMFM3BTVSpa",
  "key21": "2cfUtxvC6C2U3bvr2N4HKUrpj3DckZhaeuH4CP3q1HFKVy4PQJu7TYwbMiLVMARoBNJ9MMovGKxhpAaePxmnmhW9",
  "key22": "5RodvxHSXKQzVeT2nxpqBWPEiDU89xQd3gbMtWDRMGGHzYXS4xYybTJQzU5u6dr7grt9PpBPBjLgx7ue4zjKQYj7",
  "key23": "3hGNp77EXwdBdPFrWRnsPgFcFFsVFnsNJgas9UMyfhTMQjZQzuSKw7jM4Fi3Wgt7fPJmZdGyA6ovqSanCKctGtoZ",
  "key24": "Frdzs8E8vGupsPmbYAHuZ2vCDWCS7uJFewWBRDxp6sb3jvxY5UdFn3zSxUU2npE7xGE1PYeKpPLCkotciooe5mN"
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
