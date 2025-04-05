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
    "nJD8GXgCsnrhz6KQj6mo4aYMqbzeHKDyKudbTNy46Ha1a7uxiTuC4yvM2xx1zx9Pn5vmUbCzyBrV9pDDPanyUK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G9kXtCzG6WJ14fc9uwsEPamz9nSf8tZ34g9xpbz8tksgfUVNCnxzas3jFbnsNAMeRXLutgksZa296eSY4sRZybi",
  "key1": "5Wcf5RYNaURZkfxRhPyczkmvEyRxnvXgAyqFGQncfUFasba86WGURcQAmahdSm2ipWQuXdWzGoZRaSEabaLpWekV",
  "key2": "3fvuFYmU9u4PuB83haSe9Fp5riL816rmnAzDUEfDRhCKSFBBNkR4FJbMRDGH3aQmhqXpK2VGR91U3PY9oUh12RD6",
  "key3": "46GGMqwesXpNiXaPLW2kakvFpfgorZ6KRi5xovXrU4iB7FTSbfy5Kg8UDQpRVJDbozucxefTsrqkegU2DtPsH9Je",
  "key4": "2asE4p89Gp3o8wbVpy6YuJAZznKzvqQQw5tqswNLe1oize7Ks9CpEXxrPcU49Ago2QKMdFgSdyyScUG4vyfUs6RE",
  "key5": "5ER6FKM4ytRLaAW9ZFNgRL621LqRiYx2dP8qRnJzozmM9TnXuUak6dK2SUh5cjnJpvQJZ3QYGrosxrCGrPFe5WvP",
  "key6": "ycPgm6GKFvDf7XoEGs1hiJWtutamUSKfL4aQeYjsGg3UXcR9JspCEJC184bS37hMrVhhLVAG3B5AfVy7Ut4gBMt",
  "key7": "3d9ZmnLx4WCyU8hTCFkVQEdrvvoJ4MBJwbm5XngC43xcL2mTuZDGoiSNLAYCRHhMrWTuGWgeomLPnRkjLQEYa2mq",
  "key8": "3zFfD5tFNLU12eu8UETd1gCpJnspXQ1UwmCoEQfSnq7HdPG7u9VcQ1wrQ9U8s4vpsRgKiGv35NzCvf6yKVJYdm74",
  "key9": "2xrfd6L5PD5f6AVJKJENjrLpB3PRahALsdkmNr8KNf3naS5A6i9jrThZH7NYJ48Un6NYYFxhhUwbyo1jtVyako3i",
  "key10": "aPG8pPrrA92dt7qNENijC1ZsRNHUVCgaPFwh5LGdrXAJwtCfGMdag5nvCtzcC75uAYLJmZ8iUMVcNntj767SXmJ",
  "key11": "PQCMQ245hKdhsnChZbjS6Fyeku1CyDqS8FZXP5gxx8bi4BQE1S1W5Vgekv8RoDJExC2bLuzaLhuMSYzdj9sRjoM",
  "key12": "64wU1wNQMfAHkWAhTgWoG6monYJzFE8wVLQiyCxcXthNK6dBEN2hYqefNTfg6o2vDHiE8V3PREFXtVAic12fZhxS",
  "key13": "anKVdPSLSUsTbTquL2Hc7V58r6GD4qFxJn9yK1YtS7yUCoZyCL3NQULCGMwwfo3VFcVfPNvGM6Mr86WCuafX8gX",
  "key14": "29tTNCFFdne1WcFmzBUEiq4WxdTfJtZVdL9J8CkCAA4WBawiuXBovdzvAUQHRGgawiYzWX33BmHXxCgoHved3nzj",
  "key15": "4gt38qX5NZzejAdZcRRP1uDLWb79bzmn7Sca1XX3wGCx99WVvD6Z6v6UsUXme5tuh1tXgjoxkmwQduLMELxnjNzA",
  "key16": "pHuVZCRDcFfTSWBqVaZ9e792iZ84bt6ApCsJVkdGGp3wD3hJxhmaXAgtB4rNYNAazHYTS3aEFTGU1xF3M3f2Gf5",
  "key17": "3XWPtuhd3MRU8WuZPVpbCwAk1VKkHjRS91GXzg6uX7msruiJULyYLKkFedW6nLiDJq4emFDEtH2Rc8Easztehm4C",
  "key18": "4JBJCRJNMZ3tcgbwvVUfe1Qv1RJ8DP2JW1LdK7fyyiAk8sGYhBv4T8c8DG2LoGK7RGideP7Er5a4nwtQmduMkWgo",
  "key19": "4XNAgjVVZ7GZ3WAyZRig1M6R9Lfmr2xCNzzFucjR3CZUESTkooWdJfvgztSNmaKBh2qnzvep1VaxLC6ueGAhhMMX",
  "key20": "2ZVx1DqXooYoXCdvfXuacXbiV9C9XPVNGQ7asXLW2krvoXzGxu1GqT1CWuS6Mc8a2JMJ9RxbYcYGZRGwgZyQ1Mms",
  "key21": "5eoJfuCiHdzJvgiscWqe31jubyEMCnczkSScCGgRxFSC4iVNqQiFeCFUbCVV71LCiZ5UmTUmiCQt15mPykHoq2P4",
  "key22": "4tvBGRpq5gZhuABZfFLq2ao7qWoXNEZtBKNXCBU2n3ZCXauqSd1fdcFgoQSbEFCEWvRBS2cuX5yUNeKizZ46aU5L",
  "key23": "2BDQ7NddyqyKdpQzsB7ygEZ9TG28air6CtZdwCajN1RGCbcEKmKX4fAFhUHgbYqQuP8LaX5wcT2SH9mQDKkjAbFC",
  "key24": "C25xNBPz4BdVYbAQjUQefkExqstBKMzR64NaGksuuS1Fby51N4DJyDjfVJAKDHMzcULPMFE9oGxAWqmK7VyYtSj",
  "key25": "4G59dZ52TzqA2vNn5sa3fjbbhNki8wD9t11jYVSVJP7upd21sXyqgKqba56BhYZZQQFMRa5mnbGJ9pG6F3juC9WU"
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
