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
    "2pv1tVZUDMpwPBUFdtgvLi8DVAavMF9LMeVsqWDHDeXU5eFEAi2jH7WEY1D9wV2CBTSELfbN8e8YHKvuD6uimdyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xdvvd8mx66uH3ckGE9VxsxB694mjaZqfev3DF6BMKtqU3iFiySf9DNafPxc8hp5dHZqHq2gwpVF7owbswiA71kt",
  "key1": "49uPTjiP8JsFu9sMw6a1AGbuT3qXsdAhUcCA8ZwCpWrXyahLbbcyiotQS6DjLqZMeUb1LQN3jrEntgarS6SUfgJq",
  "key2": "ybCCg7wAJ4PmcSNviyTkNcktGjU3zE7WqmBYRDMGaedAAEbiuqNPeD6JSrCQtdVdfhTQ2fx2jWax5mj2JiP48fQ",
  "key3": "4LcKCmkEHFT2Nt9zZ3mNBGueesiY6tmkN8QHAHRmNF6U8qT1zhA9oxLfjabfvMYevuY7zfknhXBUELxswSn31N1n",
  "key4": "3wumBJqwoyC5krBMkTTx3B2DyAHW6savcbBVL6tbEXcCeC7zgWcTNWut3LNAnvRyYXJEteunm1eenSfLBqeKZXFb",
  "key5": "45Ty6kRL6ano1vYpXtSg871nuSj6AX1et7eyihcxGmrpBiThpjhTrM3aV1NciGfhfdW9tYRB8oAuj9xRs8YVyGdW",
  "key6": "4mCkYdg54ARqYYz6JAMQst3bRrk3MmEpbRPpGhwFoLFk6C5bfB9GwBx38VrzcEzNxh2ikiAeUMUYXMnv4e7M6nxN",
  "key7": "4goHqYPiXJCLA6Ne6YZHZKrpWveVVuah4ThuS2rbuSDPrQb2qLcAGt7yZC6qqrByXAG7GKHRReueZFiD4yN4wymE",
  "key8": "Gqh8DpSv8FMiU9JiSKFnW7pQz7Rrs4JuTAFiWDAGTWZ9FpQHUkHsyzKbyLGHWKtRC36vqsR19SKSDwaWu889Xpt",
  "key9": "3KPEHAnZsaR9nyr8RSBAt3FZUmziom8VGRsmQGUt3Wn4cm3oWwJotrqTe17MA7ApyPAqQaJvEA7bxSZDVfPTdqN7",
  "key10": "27HxmrgkwVcHeSvCUWSS6dcWfcMxCjho2xwmd88EZqbDAEBKQpGUVg91ZeAgMVevBPLdCTHdqUrA9XCPoQXN6NbM",
  "key11": "35YmM21u8LgTzYaz763Ty6YshCW1JkVJpXoXGVFYKAjsfj63PRPpkkQ82UsG7pN1scaKQ3kaJ5B2oSBByVr8JHkE",
  "key12": "3spT9wiJ7iKaLLuPy7UbH1dyQA9Y5mXPj1QJiMLLtnNKk8PCTodqQTfDZZ13pMRBcyp78bT4n1xznkZMhHk1JyQH",
  "key13": "41phx719EnZ3XTm2XTZ3JbMFZKB4G7XXgwcFmGFU9zRFci7h6cDuCUW2nWMcJz5N7J4DjbL44fhHg83og4XznA88",
  "key14": "5MxzvRsYrGEbqQvYjFa5JdmxtikTUQN6P4qfeo3NqysFmVSsntMfiUtt4D4ZqjRy9XfG47o9yDBnBC2ANBAecHq8",
  "key15": "4v6zh9a2VHetqBUN6JQCHCPBFfXQJNeYqdJL1Mpv65xWDmSMVU4N7s4hHTwjS6USCWfKf729mEoiP7W5DamVTfC5",
  "key16": "8AZkpwNXpnRm8TS7k8L2zXkDvPW3TNXnCojfmYksStt8FELTdhmM8k57FFuv5VHs78h6wbEu7r3Ue13mdXWcfR8",
  "key17": "4zkU8FtCw4x72bgZUKqpZjQC3B2R8Pmxc4pTPJzX6Bfybtogz97GtPXaZnm4XF2c6M3txpUWToEP7goZTU2m9FXf",
  "key18": "4teouJpjCqXLqzKG4ZAtvJuNz1G2Ng1BZnNgjJJBS3Ssam1sdAXR94TCQ5xddJi1az5yVSZmeTpDdAchh9YdG3pB",
  "key19": "aKeuwHPw4zoRqCnLunDz8iCmVB5M5L5K1SkFUs7S9WUFAaFFkGw81W9mXbiRgmCKS2tKrB2AEHoGUF1Fop7uZTM",
  "key20": "2QkfghPjUcUb7H4r6vo7SR8wKUp2ZXLuSZWoUpdkwSeLTmw7SyV8vG9pwQ32vMboztwrNM4fHPMwDg6HkGeBXfHj",
  "key21": "bcgrrkdJQF1YKfZ91wFUvzemSs9DcVnJvF9vWHB5VrxAgQn62PD3s6gbFxDGcYzxe6FBdGqpCrPLASNBmz5V88J",
  "key22": "2hWKGVgdH82WgqVUzeMkU7uqurLWUx64oMY98pWScV6h5XaBxCmQTpZLhuoFWXnQSVeoWDxgk56NmZWbEBHcKmLW",
  "key23": "3a2vKFv3cnQ5mEoPsLUQKv8TKrp7n7zGUxjAmV3LRu612fkMQw31JvwHzWrh6ndRHu8fuor6zk6nKN7AB8VFCZxX",
  "key24": "28u2PwJUjWxaBf5mTmMiu7ybaCMKDzA2eZW3cVfQNmpr5HzbpQkXXWJBYAhAUDTnAtV34rYLk1tzS1ZTyjZGoTDX"
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
