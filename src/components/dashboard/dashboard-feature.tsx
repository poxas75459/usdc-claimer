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
    "5fuhF3F9AVg6pfq2gCnnM8BWyBaA314EvwceV4DRhxPke5CcthPMc2X7K8ta5oYa6X3rn1WkXq4CNMJKUpE5F4uH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ShcLM6E2EBDT3ArsBkacupaCiC6xgzw2cT3A5zYZ4xxcB3VXH9efQFijwdwJbwMbQ2ZVDh8CbjEDuSGzFA7Gjz",
  "key1": "3zq5oHZL8vR6bDzhyNHPnVJQHvvtjTj3cqLT5Y2RWpsi52MG5Lpn8Pufbgufix5jtaMPfQ74i1o719toEWadyoWh",
  "key2": "m6MZ7SyXBzaJ9SsKmyb3ZpQFdRwstx5GyXHYYUY1UuR3yPkNGHkPwLNq4se36cuMVisuyThJoBuYJbrCMEyYEQ2",
  "key3": "4kofgSQdiK1VJhdtKhbE1nwYumRRbGnDYeM39HNrkh98u755V4HyzATvvecf56phb8xdSqJ2xsVr4FhtBTjH3mNE",
  "key4": "8Ewo8dgFJGMTy3nmqD2D1ysuZ7eCCgFCCLY783tQ81uZm5tNeAyoMaYijzPj14jTwdiMSGYr6XSgzjxjyS7Kqtb",
  "key5": "6qQ88JWWNdqGJkozCmEB1qeN97k2v2PFQHEyKLbjsPT3XSKJAZtYYse1ZEErzFxaUVTpcYh52q8GuEuzhKrBRFL",
  "key6": "2MWRrdUZstJ4QixXeVNAeVytp7snokwgZNkarMRYkiha9yp8LgK7aVsSEXBQeMrpMyAB69R2BZ3TrSARrmpYfEUV",
  "key7": "2UtEdy6QCrzwDHVhoaf6qdHxCdVXEsJtTW8mBKbNQ71tMCaimjp2m8jQKyycRF5EWLiEP9rCN7ge2DGyqVfMRAXF",
  "key8": "47Zkz5AJNEGkxtrge2zqkyiqkXYcFdCjsMiHzPn2JP8zMvQMMD5XJ4FeFNWMLknzFiuZiBDRn3ik2XrPPkkoc1nA",
  "key9": "2HaSG2Ck6MQGpJmiGW2ax1YotiegQEyu4icCKDSaFaLLCqBm6SGr8QFYk72HFA8xjrzrTQUs5WMw4XxrUXypcsqF",
  "key10": "2vCgnc7needPngGumqARjYcnqXwdfJknAANMaqQajQneta2oDFdHcCRisyY8b76H83ynZj4ZPXJc6J82o1GjzHGB",
  "key11": "59VBLmKwq8bGMbTrG2zajq5sKPKRThZrCwWr8esGcnXVHbajozxGugZWSiMmzrJnRZWx2CrRXGarq7Ngtjhh2VbU",
  "key12": "649LxeoeZ4vtqi6s3Pijk662DfeiEyeZHgFSkui9f1fb8Zwf2nMkrQV4Xwp1ubANmfD4gmqENfQLXV2hLGgH8bpw",
  "key13": "5BHvogLZKyae5N1iJbgW7LREBtfXMot7gECXDhsm45QHu7cjHKbcnNoqpxUYBVVpZqEgspDSVxDkRhc8eXk3YWVp",
  "key14": "2vmKYz1svmCLkreAYoQCVemWJoTkjgQ2PctSa72JJgdXXmUXULYcc1aMNhUC67o27Wnp1ekyGaCFAjdZaepm2dek",
  "key15": "3sDgEP1MFFCPPbCeUJwtthtmGgP78eyJmCjrwq629g1u3bR8jn4s1kfRFJWmMn1JXtwea5Hg7RWC57Gd75A53W6v",
  "key16": "3nKszQ1cH2oaoEQSJ1wqXL5xwYSQmgpEfsiKmYFhj1jAH6Wo4XYCQKmJDHeBt6PnvREqpnbjs4AUYuyXeLsssVqT",
  "key17": "5dqE3zWBKuEuQgNbAcBN1zHUU6VEk5mdDiFJMjKbPiCouHrDQJ6JUCBX5eBuDqr68x4HD2aa1N1TppQZxcK2shyR",
  "key18": "3qpZxe4r6baANBpjwo69oh1BmvnrLtDA2ECNDXqJ7MxSSpnhive3mnNuG36Qh2e4ef2QDdiUx1Evk1WSZBYV4xzB",
  "key19": "5rCh7JqvQk6bfL3ZKSxba7mTcZd3hZr8GxK9fDt89ria8WDVceFZiXkmTHRV3D2RLCwgfQU3aKySUtixaw4BGcVU",
  "key20": "5sZA4aaVbo6xekZTBi2YcsaVUcnHqkxgonzAVueZXJuaSp6sU3oAu74VWm97PM9GF3Fi6fdHaPmb31nKcDdwQRoU",
  "key21": "5j7UGcBpRs5ZyLzRwmPECGvjSgAa3hAJUhHLBSb5FfDYekZEpEwF5AZVzW73cPau7dSodgm5EjSHFFnssvFAfFQd",
  "key22": "318JqsZSPGTEdbS1ULEff3voVxQBGCEbtrBhACp9vPDVRHWXYtax8LHTGHtuHyHJWynEPDhCb213mM7pdVuXBCUn",
  "key23": "7DwejnZBjfzuZhCof14tpMyJnf6ByqL7GXWRap7xRUZPTKxyemFEDkXNn2Tk55ABJPQd29k5nFcwKkRvkp1KemZ",
  "key24": "3va2Fwmn5mjn9SRzusXFNzksEc3DbicGKqPJMtoeFYQEyiWNfgL4ZvKBu3vxZCLxjAXMwzFcSqiQbPzAF9BD9E1i",
  "key25": "5GQMddkrt1ZL89yXsvCinVuyV2TmXwRR4TXJm4ZpBRhGK9bufi55FziXdwA7fWB4Zjy9h9hEFaAfG1ePNo9RPFmZ",
  "key26": "5zrCPRRBeV5omud8VtUxFS1DYXdhLckQXD3UhD1d3B4jBYiXmP24ArxCBANgrRvGV22MXUawT8qbciBP64YHyWG4",
  "key27": "29qDCUb5L4Q6q4Q6bwzMPCmRPyiTx3eovd4Q4t71Zz1myh2F5cyqprkMJr6FweJMAStMotTLqZmpN24d7upzFWZv",
  "key28": "4JTLo1TZtJK4iZmNPB6SjKXkXGp64yoxLDGqzUop5tdoL2dbE5usGUQPgg1pg1hpQgW5nGiVeewZeXEbYqbhvs1H",
  "key29": "53KKLNRAz8snpmzDq761ek62GFZR6M2u4mFctyru35bvKALGauekoYgvKUBF6FYuxjhKNmukq3RkkCydZmWzNAqu",
  "key30": "4x965WTW2iNBkws1fFJ8ExfEaGvmZEQ9w299fNNferEdBCeAswpuZJdkgYmSua7L2FJk6mFoU34muwyP7TXfdhdd",
  "key31": "3tHyzFPYDVjywS5ZjAiCspitmmNv3FmgcBdb6hvqoNVh3KMCcW3M839Cfh6pEf4UtKbJd3LWe9YFq7VLe1jeV3BG",
  "key32": "3pLLQTNz2xuaW1PYTjk1LQjUDXNr7V8MyucBNu8tiGnXsn3jKVmshpVpLmccuuj5iBv3RcArm7zJWTMTpU5eNyMY",
  "key33": "2rYwxuHZetSYpK4k9jep4VVeC8zsjbzJq2kWcjPhtnatxxKybNtRVSF7r5ehog4F5HX8ndr6h9L4we8r53CxsTQG",
  "key34": "4JvGgcXXdKQLRbiDXmN7F6ehH4x7aM6SGofcyATPKXQbT8JtGM3eKFX2fFaEQZvAbKsnyhPnxnSMit9vWdkDbtog",
  "key35": "36mPMASLUHwXFtQNJPn5ffF8pdgRuFZUhieHuPeC8mHAaq2jydBCe2VErKisVQqDEnUgq6TvETEzvqYAmfR9kp7g",
  "key36": "3hhxUF7ARiBWj4aXSwxcTnko586fXkQcRMvSoNLR7NE8kZ9wuNMJne7xQz7CgrKP9icrxBa8EQoDzadYystyfUFB",
  "key37": "4M9XJ5SjgTSCnKa4zCHzzGAR7h8sWg7eKiMirmHv2oAWp1rLY6J1ZgRBtkPUma2FVA64JYKQeXABtMcwuqCzySxr",
  "key38": "5umui2cfrWMjZ2WHe4MuemZ5mngssWLDJBS84QjSfwQnaeMd7G64Y4os6yu4kuJyPssVfMAcUvtnHkqXnUBzti1j",
  "key39": "3Q15GAVEbGpug4eoqkRZBJboVkcBMg4ciYTCrvQLk5Haqj9rvuS1Z5US1WFdaMiZQmPo6KEAu16b85Bu8QAZyJgv",
  "key40": "3Lmvd7p2Rf5UG2REpUoCnW8KLfYGBxF8sY486cxrodGaMSw7vKkTnKwjcU1aueJS9VZ8QkMhFKVhftp3xTWhp9sJ",
  "key41": "41wuGjwTdpaeEa1ktM5hnVANVv4qUxpRWfWn352QiuxHYNFHr1MHBzW2am6VGpdvmCie2DHrdLMpfjawnHKLNgSf",
  "key42": "arayNJd9d47h6PpfowRHF75vuXJJXr5U9gzqhps3mU5f8S343qWtT895TgygdhwDgAyV6HKFdgLMJSq7xLaQbYn",
  "key43": "45ZywgtXgLoGTm9ST3pFuvpdzvUq63g8ytWDqXE4paS67d7dPkXBuqnLV9kdreKYEVVu4hGhxaCq6ubFALVN9vnm",
  "key44": "4hv1iymnkcQ2hNcr8YgPGJg4Ye6jReaSp79Hb9FzyZjmKZcdxxPsMBws7R1KXq819RQfC4dsRkiUoPfXQknuQVxA",
  "key45": "39zdabKfzXXkRq36oCwtuHvh4SzSTnLGydmS2RE9pZeMPPkP5bpbbCiFSgumzfG87bU37XwpaqLarU2kDwhk2bZW",
  "key46": "5YH2LwQaccuE8uRncBb4tTHerN3NWqu98FbWoPKp8ctGoAatRo8zmMGV74i8jkRWNzz6vVzEqQHub2YmQ7yoG5WJ",
  "key47": "5yLRoeiPNkuBZZQzUYWqWHQxkG76U4FGmTW58zCA1QJGCYJtCbaeWiHULJNZp36J2CxLye4VaW1SMnSzRjboreMC",
  "key48": "3CNYhXeMWBjkJGH7oEmp1zRhgCmVWGeu3m5rRaoP1Beq9X3jCNKdpPNHrjLTdv7P7SdpzPAM4YppW95JSnBkvGkJ"
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
