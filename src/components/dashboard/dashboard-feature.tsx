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
    "2SYL6LRBr11pFLX8qmzHwTZ95mKurmrUm4jhPpHis6GrJ9Ej8KpJtZMk2HCfRpCPRHFN4Nbq6ofJWUHMhYDMZVXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vrzkkVC1gHgD6Hpdyz7pN5c8kvdRYU8AsMcsYGLUoo4wpvCy6FWH6X57daXtKcEzGWX243KXAzeF6uJX6NPk6Df",
  "key1": "yfwT7pg3rNPtd3XvtPN6qd5Gg784D16sL53DxS8dU2ADxQui2atP5MF6RSxGiEoXvmxuU5xJzvF9QZ5kMbTLiz6",
  "key2": "4AL1gzFMxSbUqnbRZefhzUCWfmrxuJNJ96HJ117EorJgaDrnDxnscF5bWc94PqBvn8TckBEuAXwUciitCFV5BrGa",
  "key3": "4WzgQR8qh2srPGCh2Rv8cYgqDveBiZNbdtR9GAnTiXyZh7Vp3ZSsvccemFGQgTsnpxDsdz85TYGyirw8fSUTaa8z",
  "key4": "23VxwLm9SQ5sYSUJBs32qh11v4e9gatoa5zLita6ahH1AomqV9Sb7SstqhfS9oWjzLfBFfHsTD84J8XQTwkDy68T",
  "key5": "2Nm2DXUnQDAyBzxzdk874bSyK8Pb44t84iEi5CDBB2BTuADVPHeT22JNeBztZqk65APJFisGqpQjEujH4myYiCXU",
  "key6": "4UR6b3EMqkNrrPRKm168ac2LwfZMGWdMXCqTKaynta652RmKYQzyreBdFzhb4m7iGzP9z5rZ7RLVC5pa2kPCNYk7",
  "key7": "3NkkTMNngr7wxRGeEBjV6pQyD5LtTFVyiApyJ6abjjyAc7Y32vC6eZneJaQBtpwmKQFiV8AdBHCyFxDfY61GdYVP",
  "key8": "V1UGe5AnUxEDA8pdj5n8T4YRvHu1evZqyQ29M3eWmaWwwYs1niosmc83EkaCtbVrK6mxhm8xs2AnTjiDTSrvpon",
  "key9": "5urAiR89BZ8fjRKumir4gWrgbXWK1HumG2LzB1r1821HNeoL4CPnrTwi8QiQ5ciJQLWnovLN9N62TcH5jY1FFNJw",
  "key10": "4iVp1DoeYEV7c7cJFRhs9377odRdWKGadPzyRFrcdnYYXucR99sZNPNJJUSWiF5eG9spu3dg53b6w3kbSgz2wjrJ",
  "key11": "AfKukD4hHy94XNTwvGDZVQTRZA2PyuzF4pqcL1JMo3XJGk3SQG7zBh57FKQKm9pDzpgTsUwXDFYjE1RWHH5X7Cg",
  "key12": "MCcu4eMG3ZwvGNqT5mKT93jMvEzFRgfC1NqK2XhgiqQtw3nifgdZHQTePfzjgQ6iuUM9ZKEX6qNEusYXjhPQJMP",
  "key13": "4Xfm6W81utQcRxFy96CLqwfMtYNn3iS2ET7VaPF4kCwLyHMJkoNVn23fM96MPuecTvcyqVcGzDngEEbACjydfYB3",
  "key14": "fX2Y14zuPXgdzD1MdpP1hnshB68odaUXZBywKQvCjYdWAZ3Pqn5vhkLkmKhnDB7pessN6BBmW8raTzmwWjW3dcq",
  "key15": "52k4uJade9yRNzrumnTrQPf9WAGzZ65BGQSMfZVvjGib3XNnrHU4UbCnyMATvuuveEuXwXVKNpjeugTLFfxvT7kK",
  "key16": "2X71mdwMPiZyeyDobadH4jZPvRMhNE6NWsJqjwhm3Z3jvnDADb8rgazhpNPCsykShAbHCsdZJJbfxtP62fgy3Zit",
  "key17": "4f46mDyL7uH3ZD2cqKXtia2DHAT77BFUoN25YucBNvgRkfgwPwt4N27wuWKPXiVcJQohCYJP67z6yfaf6Lmt6rwN",
  "key18": "4aDwK8jRfwJhjbtAoUzkBUrJVb8KPcC1Vgm4VdyBqv2iiZBFwHqYM17ZhaZAdupo4vkHLLdrCYj1hbjDE4h2W5du",
  "key19": "CbNdzVg4Jkw8E6oTbSsBFq57T8FnbfvFpo6EJwceVr1u7GY1wZRtgsjC5KsrPDPSipJhLBWeD1sGDHbJzF6M2hp",
  "key20": "vHx51mSzb12PbT6JRTSaEYbxhtVZ4iJbvEdUkcwt4JvtvditoXNxyowCAZUCKPN2VM41Hi3pq5vSmE1WxjX7b8u",
  "key21": "LuUq4uL7aGPba3CQaR8bZSdPALkqk3nMDVkZojhd4NKP8rNjvcUBjHe18Z1kEViGRWSrxf9CGV1j1tu4EM7H87x",
  "key22": "5FcE3gYyTssKF44PpZoRmZ5giE2Cgp4dDKohQDGNDjW59j9WYXieV2uUvSxDo3hvzGJ4wiTHa2Ehh8dWEDpJrdtw",
  "key23": "54RNSrHR4QFJeoqRpQPeJ4a7YJ9AiWiFA1gT95vnzkhw5ei5HvkZhJvgWSAmia8XkMNn1Pb1DvTujNvSBXkV6UGm",
  "key24": "3DzmPdjd7oYsASQAs2RyEzHQqCc5CnzvBvghASYRqeoYtHWzNeTXsMLAatjx7djDFSZY9zY1nuFzZCfzgEhgk5vM",
  "key25": "5wfA2AWz71NBAToy1GQjXiC5juxaDSjpqnvzkLT2TKA2d55QV7vQk9rpdSfRUNAqazmPmCvVHkjpvdqQ6sZ82YiM",
  "key26": "2kbAGtMrC6tvdqudH8WGS2wp7AX38szJ87v2YNwSeFbP52H91wsuKcXZTb3egtwM7CPGQcX7zjJjz57QceosP9Wx",
  "key27": "3E27Vhtq4LSxdZEVG7YfDDsEPZQcj2XNcFiGw1sDrbEWsqf4UMp3auUotNtc9DRd3dL2rrxfUUSXZFFrnyTyL8u3",
  "key28": "5JXDwuti6gWTxuGaH6VbMpAHqfcS1cpwWpuG19C3HFhB2E5Fjzx7nW4qSpdS5zuK34STpXRcGo1g3BotZYNSaanc",
  "key29": "3WFJtTAr2GBJqhh8ziCHGNBdbvYiBjGApeTDNE6WJHJCnyw9Aqg6iYBai56onckazxPY7xZyjShZJG1UHY6Vnhh5",
  "key30": "zkiQP52jc69adjL4RZtunFrduQqvMVeqH2sHhSgbaT1LgfG2fN7pv91kbauxuroabrMi3JySTJrRPV8RA1h8Uau",
  "key31": "2STanPn1tp675mnmXT9NV3QwkD4C2rxZUMoNzJVDoY4r1tdkp3wDtng2ZogrUvU2anwQ3cwB2Brwy2saWUv1Y8Js",
  "key32": "4Z9WQuunKsmVuLNeuTkKsNG1KNb3rs8xxmVg9FEzoj6dPpbMQhVde6zzDPPC4Nee25fy7cSACYAwMbvJuemRdgeS",
  "key33": "3mxbE61hWuMueGSXvAnwGQY6mZpSxiRmNLrYuhmwLEzsm51UBccXvxJiXju86XxQY23XYVV4UHRcvPTDSmymvTsV",
  "key34": "2xSNR4q3Q8CkE8KUYyvThr852Z4rBip62Ndq7u9HFrofWjCNnQJfYSGL6fKdHzxmiZNADreEbFRhzFuCGZhjmZkP",
  "key35": "4gzCokA3iUr6USj5TaKECRm6hifbTLot5BtWcnJycRViWRmn69v1rkwsffUb1eRci7SbeDk4SjG2F1zjfMf6fyBq",
  "key36": "2T1rGRUz6uPHQRoiwKUDbwLaHzaNimQgxVZ1KMe4eLM5f6NZicoyu2VUVa39FLKKFEwCE8QzxxLH5qxEwHXEmYWi",
  "key37": "316sWQDFJNyi4uStKd7eAArMq88hy46njwqfCHGV1Ck6UfjuQ5BwJ63vjfY14nPj2wjb9brWy4mpRFDdW5M63Zrd",
  "key38": "5zD6NTConzQrqRL2NfMQviAttfnHAQ1W7efkYLHyuPf7y4yCbFsF2KvjrmFG7f3PAz3swhwaQStzBAdgPrwHrvJb",
  "key39": "2CatDV5yqpvKqrMFPpWURQBijCvAofzpg6aFJd4ee4pTv7DMthtikrETfVYX6hTPyerGdiEDxmGByCwXwW7AXCAE",
  "key40": "NsGXz5sM5oV2LhAFYWQim7bW6PCDm1T1X8psEgLjGJwW5P4FTpjaTSoTAWyjoRWiZoQsgw3hfxqG1v1CY2pVLVG",
  "key41": "3V4n2VtJXN2EWcEnAjqDW2FQjn7GxBFbmRe5DSazMxA1QpDyzCWiuxFhqDstu3zANkhpH1WnB5q2cmL596bazt9a",
  "key42": "61tBCjPwdoREV6xeaZiqQdni6cu4gz97vqfbP42oJ8v7d1gndqE9bJApcP6itkmSxh7aZT31Wu7Er8tepz67BVZP",
  "key43": "2QLX5QtWUYxQWp7LqfUKzhpvTvtJq6HXSsZknqEkMSgEFQKQSxBj2VDqyU33SvNhDJFQ3hXAzwNgBoLGsEoJYNKn"
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
