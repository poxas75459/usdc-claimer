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
    "5y5fvRWHPu9J3P7MxupZaFynHHWwZMmbtERbe5sMdMQmx3rAXwrKSxa2ZGvG9oLwbXhsWeJ5gmPX6AgJn76nJyEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KCBjqhTQVFHLDTCQa6Hia8J7pCu2UM6YikgeRkyzq5sWPRmy1c2TDcUWtMZBqU25gQ1mJ7LrwyTtuvsXoKBTvam",
  "key1": "3eTxQBqyM7Q215swaChnhzLhNFRgJsMehbaUxyVquzZUKyHh26G4UXCGN48PHZrdwXNatxuUJhB1ig39cFXHMiKw",
  "key2": "BVYTpX8CeC4rNAxdbb8cn2r11D3tiEzqUiVZUio5aDRLzpWDSge5CH9uVG8qnvZYiRWeEdDcykkXk46cg6WLr8v",
  "key3": "3YARDsbhS3ciSDBvc299VjqnCbtxFzZSt71pScxG4GicHptoNS91VMtHpgjJ4vwVAmy85DciHmKjDcs6pPWLBurP",
  "key4": "3q3bqLozJyCeHrHeRvJPPzRvogkqyE5qzVyVPnaNoWt3EV6RybkReVsJNZz2r1cxx7GKGFZpVFiEqB6fkHiTx6oQ",
  "key5": "1LXzHQ8crUwWTawFEBXVczNJg1a1dNicU3MLBMT3tkkCEG8LMEHB9CrtAC9uR4i148Z2DhbJNEvPBsDQuhXxDLJ",
  "key6": "4bWpDV6aLUT89g42VF5BaB3wpMxGTZUn5wtWjt7SkJbJRGJ6zXC94Nbx2QEh799vnE6zfvK2vmrFHyeujfY9JWKp",
  "key7": "3Bifo7kgc5TmhkB7HQCtJUJp6RrdRQ4jPzKeSXPt4Z3NRvqUATgW3T1x4HiTSHPmaLUFWuRyNKN3gFaeovbxDL3B",
  "key8": "3i2T5FEMrtRsJXP8HGmtGz6QVvhaHjVzMznmDKSHme6V3kmKBfQVgwxYvi5eg9SHL8LmpeG3vCeEc4oj4bP2ztcz",
  "key9": "bQFNHFDZugZmhDAngQMkfA2669BU7bQvQvzmx1azBYymS1DeKYnn725edSB9dD2AVuit3ExbHNAH7dEwAnTtpMy",
  "key10": "3LBULf8A9zqtgZXdhe3YwH2GjnL2r1FhzocGJrfMRtkQakDiqDYJtKRProVZdft9A9rbwendLSBJVWon3jMQT6K4",
  "key11": "44EdK7Qd88bBYs33oSWe1hbFivh4SkNszWUmypTRuVn7QerEiqZcKDhSTgWb9be1MVBxCuHPh8miXbsdgLKMdui8",
  "key12": "3sQqnHQbiTYdFLyRxdGfU2vUKw9LCS5TS4H4ha56rzddUnMHgvgAmuJ67CX5HggAjB28dQc49CjtTeLXFzjKxhN",
  "key13": "5rtr8Mt8Q1KezR6CWCE26y2ASaho1jzvim8XPUmMyocB3mrJF8egG9CbEdpr89BnyDRU6ASseocbf6Ru9t1LLGgK",
  "key14": "32nh1hWzd62bXJr8jvQgcWvUEV9xeKxe55b5KDLMazwMwaojbqBJKBkqQhNfc5N5t1XqKd1AWSRp7Qdfupsb3pXp",
  "key15": "3aq7bBcLEhhnN79janURXDTgkev5J7eeDXWRqyhAbBt1cUknEkzBLiaqNtDDodjU9MduS4J28XukDh3ELUCZj6LD",
  "key16": "T33jtiNv3vxAarBCe2DUaD4YxpM3oRLdYvHLWJnyXq8GKaMRbRXYCxozc62uLe69y8E51f2XAAF7qgoqeHnSFnS",
  "key17": "3HWD2848ocZVt9SghmnpvjVrvV965J4KYJHvyWkViSfeCD1vPdFrmzM8hhV6QbmpDheBbjybdJkMt3LonBxF6D9U",
  "key18": "2f6Lcubhquit3vMiiPTVA6VwXGqkrax1ZsPEu8UkTMw8ipXVgbPzEoquXVgN95jnV6R1WYvFmZukXf367euv69zR",
  "key19": "5FjahfeD3C6TSnsVmKdWisTh1W918JEmk6Hf7MzXox8VJkxjsNptSSpLwzJ1STTbbFxfFHwEK5ia8F3FyxtDTaS3",
  "key20": "4paZH8FAM4QQcq8ob3AymHNpJSNWUsPSPQJRFPf2GJwqwTgD3nJsZEbGKkM6DcaUHGm5g31LMAat4yRutfcZnCkY",
  "key21": "5xUYdXoP7xnUPKU7ZEhegetDHVRjBy1CVRh3ETQRB7ZZD9c38NKrKy1MZUv7sNqtHDArdiYw5c4oEC5PsURfEGef",
  "key22": "56DJT7rs6UVAUaSdPrconXxt6hcX1eS7F59eBH8Jkt2mnqeixmLLYTf8qZ8ymcs4URR1qptDU9bj59C2pJdYPFa7",
  "key23": "4BJHWHzNEDqot3qrrEzfZvMxyD67cwoXJ2c8Ls16PUzAitukp5C3WgeWLNY9oCPDxd4jpFDKAHPtSmRHJa9wo6UN",
  "key24": "3iwfhVsybYxw5iwME1MeBo7dc23CVzGokL6tbrsWGp1Ksxk9kZzic9sz2gzHrhNfTr3591aZBjT7hxx6YWmtC6oC",
  "key25": "3yaW4avkFdtgg9AbhoMvsHFuXYRVBdbFFH3atoeYAPYKWgptdx2UR2TxZ1itrzK8Z8x32J4Jqsmh8cocfBKVuBvH",
  "key26": "2Z9UjbGB544cmnZHpPh9km5Z2m7yzct1nt9AVgoVXSPNT9bGeBRHxh3iGY4VRNwNaU2HwzBvzbgUbrMYyMLt2hp3"
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
