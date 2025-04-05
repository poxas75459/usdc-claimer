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
    "5bETsNFDNdxwZxSARUfcDktrLXcZ7iG1igtKHbKWZ4J1EJFGoeLw8GdS4ZfwgBDmJMymkvEF9f3iCDak1Tj1ERPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fDWrcS2xKXH62AUn4Hi2YJoK39EtNx2y6XAArFN1jKdsVdryYiDxCHyzbQATJ2xaZnEscY1z3r5zTdmnQYdyNFo",
  "key1": "2SCk64AExo5jxzfmcXJrWewdDzbsDhzm9AnpcHGsX1bhsBCv5gHjAfD6ZSsqZtGAZ3snSti9hrV6zk2KRmNbyJAq",
  "key2": "4hk7gZQ24bFJywRDW4oE6QuiESksanv2J6RxsxtGy8fJiKS9dTkiV4rpZrAiZyi94vUPzqq5g36cdThLaEgA1sSJ",
  "key3": "3P3g3YHc2Cgn3eDvFfDfm1aBrTwBZsUWzEZGBGDT9xW2i4FruVjjBE9m5jpmXiP1gZHWYJkqz1kpu9apcjqmALkS",
  "key4": "5dLKcGwJmNGozUhzG9zmmJwd4ZefepmVxDBf1iJckwvBHQh8yiHb2dVpYeRzEkB12Qbsyz92qbBu4dFc2W84YDVs",
  "key5": "5UcDDYyKNADf62rr5KJdeBZS7sJPXipteWDz3bSKY7f1iQ5RQZAVn5KPxhudruP7YV8bdHGe8DuwWmp3efwoCeEU",
  "key6": "438zsCQX38buL1fxFxMJrkkqmv87bZ7o3YtSdEjuyaRVFyF55sTdK87iDn1puKBcTU6FA4NPoH8sa5dqwEzvz79z",
  "key7": "5MBWboV6YJgtpkQNQ18dUxvw8wt1QkLbZBT4hFfdus71PMMq3Ko6T1P6P2CwoKaWRbCq2U8quZApEsFGsWCaswCM",
  "key8": "4WMk7zKETYsVGGVBtkCNr9KsowtsuiKf58bK8Fx3az9gRSaxKs7gHUoYixB3tCzKTW2moEk7TEE8zXL2PnMZe6fW",
  "key9": "2edAAjZVTxX3CTRY2m7ou9E9m5WK6QG1ABUrWcvnxfRveaoE5BLnhHF7GsDjdhrtGBPnUs7f82BGG4WTeHpLzpAU",
  "key10": "3dpPuKY54X76L1Hp5QXv6ox5zfdLaBiPikr823ghFjHQUjVjrvWek9A4e7vheGFfWCkUnn6vMdufuQhRieHao7L5",
  "key11": "65gZEB6Mti9u2u8YwRvo7njxSoN1MV3vXteVQCvLaL1ZoyxgcJcpAoYUguj9m5y3ui1g2SqM1HqwuRqW6bjbHXaJ",
  "key12": "WMoUJA87cUKjy8NMuqDtigRB7zpBr6PjYHw5CTVSyuL42ksXWxszkXfZ7MHbMWnSM1gDjUEwVa1wDWAJ9xsZWKZ",
  "key13": "3rR6QPPsWMtxi2uy1ah4XTfbw7TYmKZ8MepERyitZ73fHDsXPF9bHa4Wfs6KL15H9y5383kHPHprve2xCAVwdAiW",
  "key14": "5umY9KPof9Y84RR8UdsvbihBoRpv6bKEz2zjb3NG3FUktV4oyrEsXNk6df5H92GJA33rJYC1Zw59E4Yc6P2FiUuV",
  "key15": "2uVxiZfrASjhjcfEbDhqBNw3p5hy335FibqMLXEMkhYVFUoroGWrh3cbgev9vYvHDprrVLL9jaMRfFhgwvRQ995U",
  "key16": "p3yMYxjyGhWxmHsA3Nqd7oCZPsXQ6kcwoMmqUfx53MzHvmBrw4bZrv5tBobDNq7HF6tqAw7zq2oVyeAr18eWWnY",
  "key17": "5bCsWYFWwpdLfWae7PS8xYLW74sR6ByW6QWYZHq5szHxbhM4mBcEBmHSPLbQmrvTapdz4RpRgXN3VJQU9r1ZfRXb",
  "key18": "2AdRLtHtXn27K7bsHw7ku4EJZNV3VB74wnLrjjygNrsdhrtfhNyZJsEyqA8SCvJ1x2LM4VQFfS5XX6C6TrAZmqzj",
  "key19": "3tXMqy2nQSXcNDPJaBQqXUDbJg1eZ7SbGvVnqxyZEVdSLveZ5G7FHgpy7WxWfGDDrRwmWPzwdpmgbfdobPsEVfFX",
  "key20": "253hnVj2Y1JA1bqp5G6L4cw8zdxyakJGwxchHFCJk2ErmPPqW95QDunSDW7JzYtCD21HENQ4iAXgitojmCiKV6Jz",
  "key21": "2nwCK2FpM5EizwSaVzUEaXHfDAWANQaHA7Sb3WR7FY8Shf7R5yNdCahrtDtB6SvS1ACwjRQytoD41RnacfA1CYsh",
  "key22": "4evdqF1Ldsi46QGbtyaED9UEKeHSGBPwtjkqzt5hr93AkU9JJhzQaUWrLdt4HhWjVWrkA1zZHCYMs4Ab9zPSch6B",
  "key23": "5SW4VRFYXKFZNZYdboGdDoqZRyBqpUkVth98pds5urKUZZS9V1GwDNVxzaShQbTGiCkpitTQGr4LYtgR97w8uEbR",
  "key24": "4r6yuhoDVQaiCNbWUSykSXZaGFEnBEh3Kc3dEp1QewuoAUjB9Qp36MJ2vRqv31DXXGfXky1VU1eDkTzpGNRWPw3t"
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
