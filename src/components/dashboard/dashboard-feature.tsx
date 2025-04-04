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
    "Ez14Dgh5Scx6y7eVCmwycqfBecwuVSLBgwP1soqBziZhwTBLBAwAnwGoutmsV9Aw8r6YeKxLW7xewobYd3Hc3Qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gqvqYZ9Ys3E3E5W7f1Vasfpa7ooEXY9UV7GjwXRRNyT6YnYWreucCeshdAPxNHCJv82rMfK5QLhxu643L3sVU1A",
  "key1": "5oU7Pqe8XEW4RGU5GiaCrciXUN69J63VWL6fgA68ptTL2vphFFK1bTu75NE3p1GuTS1Kyj4EAyNWUuf2ty6w11Vd",
  "key2": "buJ4eyuKb4YFCy4Bw4qo16VCQurBRZfBRT4nwaShALqubjhNwKhF2wsudvMtyLmAT25WCkWG6YzkGvGnA7LLHy7",
  "key3": "5rQNHPwPhy1i5o6YbCfYUP7FZWnboCeMmDyWF8pFopCYBFtBqgyYxopK5WkM2XZxZiqQtWmS1V93jExs1qF4RCjh",
  "key4": "qwUEPMndGcBB9y7u3ZYDaPsrbWrzKiBdCn2iEYFjniEojJeXJST6yEXAqM2tR1vp9m8UW6kkY8bm3HPAVcP23Dt",
  "key5": "347tp3JobRjsTHndBqAaBQSMTUs17M4HJcRNYNjZ8uXLHap2iAbDggbpZCAU5rtDnNz8w9CM68CEJNZsNznbUWEF",
  "key6": "3DqCFiDJ9UuR8aZWYLah9LA47L8kDcFaJEaaFdQjzFFXeiyADZXDnxNgN69VgJaptoHozDuHVh8g31SWFgceVUB3",
  "key7": "3uSCgSaPyMg6GCxHJjWrPtRAGC1m8eBHFC9CeUXujKswtcmMEjR6phsSo215hLfk6CCvpLPpQ8HruWa4epT61TxH",
  "key8": "5hqhng7EybnNFcfX4WmkMyJbSznRmTeGKbVWuECCTK8ZjpjntcrMFkhZDfxXXsRDRqivExBxFDn1EXeFiVpVcVAR",
  "key9": "44r2c15zQ4nAuavzj1ZtSmuAyZicPiMnCDNu49kLwVVoXsE1tzHaR8hsWkGwP6NahQPaXPBYK3sESsPjwvCSzD8d",
  "key10": "2d4M7pJCYnHqYFnTU8uNf6zTv68vvSLJGDNfDeaj7vkD3ik5xgR3LsUVQTemGmyz5s3Zhs2WzhjYkNy2rLFj5ZBD",
  "key11": "4AidAGVLdcsFzMt86sGQnMbpVrGQoGkvJx3hjtb18aSWLFa4uLKUsjJj8D5QVTzLX7akg3cSqmHVoNGrFsrJnSKV",
  "key12": "5u8TxgDV8qnYVtJNodsSkogQnAJWUT5A4anGAayPxuBzFXUbyKK3WeGq6o25o8TKaQiwh55PRk9BMCqc9DzVDWnh",
  "key13": "4RT5wFwQjDZ51818BN3KGuvhUbzt6L19NafvvwRrVRF42GivSbRMPo74wUsGnYcyU9tcopNdrHutzoEweoQtmEoZ",
  "key14": "5G2e71rWgWVDRnSi1F27MhjmCviyfZQL4VavP7JRKJPMLVmdYYUr3gvCQbWPmcu1iNC2HFa8gBRXSnD9iaKV8Dsh",
  "key15": "4y1iRZN9XNMZeDiSaCjG7ZKDgWabwhHRRNEQXiMimmKJ4TMbC9GrTEvGuF77eXKeFX12vMX4x1P2bzyUoTjPUPFp",
  "key16": "52xg3QNw27Z9BfWNwMJDvNG54coXqr8AQwa7HepX8sawQ5bqW4p6VtdDhf1UovQa1SS4T9QnHxoBSukSPg8v9uFf",
  "key17": "xH7XUDDj8WDDmUpdMDCsa4Tfat9Ny3Z9QCGoZcZ49pkYHqNSdN8HF89YVbGA8eKfbxzGVrsXC1WTK3bSMyoDSJh",
  "key18": "5dLZSRZGhdDjrGQ6X49Bxkgr89S49wD4sHHjoo8Qq9fFMFZScjkUxYcc5MPvTaMYEApFcwdKWGFwN73wxCvTa643",
  "key19": "44SpdvPv3RwN7f2WbHxd6EyZnRwr3urruLjJC6YKgdNvjyHBt3X8nFMQZTBgwjGsWp1y4FNJbtdujKHR9mANy9S7",
  "key20": "2WxQBiT8tdpUBJ2JbZv868x47BDQTYYJn8EjPGaRvW44JZW2t2GZkgt83twzj79fJRRr2fkNceqBNPBH4fk4Tcxw",
  "key21": "2vN1XbEvEbCdK3rjgMHvNkGpnJerW1MeWqERLPdEa1foTLq8EYApL7A6RSuLPzFYviafL1NWhhE2NqsCSxipHaHt",
  "key22": "2KSYa2XBCUF7b94LuGKjpnnHKUd8oChzGq8EHV8ML92Ksk865sVxDyuyG7LFGWaBdxBrhivpvK4ueywGWYPSRH2q",
  "key23": "3LXd24GzM1iyPGc8pQ85AMquV7xPyaCnPuHaSyZuqkYhGkhDK8WWHEQF5L43X8TuDaLBcuX4JmUCNz6kJ7gCCWcU",
  "key24": "4fDv6uuDt9Kik3BUKMN1kznCtaj6CeFmcuDnroYdVSRq7mrYAdNzc7ykJVMzQ9S66KhwtvAYqYLXKt9rQE27RLWt",
  "key25": "2hoqEEjPv8LQMrN8szRG4LyMTqWjynutt15d9cUQgYWDyT5eaWYVcwjS67drbGcpYCAc5SnKxL8g2ZoQdZqxDBLa",
  "key26": "5gr1rUPWLhTKEvCRVTkZ25opUHLAQPRNt9CtqwpH3AVid32SJ1WgNsxbQvZM5AsbreNMKp5oZQNzJkj5q6PNJ2vV",
  "key27": "3v54VqL7apog13YWKYJ5gY4ygB1yDbw5j2dRpxTNghopCmSuLRDowH5VJZivZgGQegAbEi1wcwSCb7H1TjMvfG1g",
  "key28": "F2iaEW6Uen5HSSBTrcfhyoWDiqcSgeNegxTBqGmhw1dJ15sRQnDNtdcog7AQiiFMfcMsG3KXRNuRkAHyeP8yMwB",
  "key29": "KkeLGYHNyn9PcAPZgmwtPpSyWUcr7uhesFF3sy4q3GR3EBujT8RknjEsJrSFt5C85GyAZDmuDANpgNfoWg7cMeK",
  "key30": "4Uh6BNx9riPKFt429YzfHseDVK3XhBAzwnLBsgXSdBc5Bh5HmHKxBLA5BPR4Fpq41QccGdUyiD626UsGAweyXYVe",
  "key31": "5nWXhnvmWwYTvDwKqej2ZLu7kq2HcyELMhEy3JC8gazzVsChf6ECLWZzR11J6PF88hJD4uy3kWNqizHSE5WUyo8T",
  "key32": "39Bgr4Stny7ui6LNn56Nc46xmSS1x5utN1xCbKK47ZDVWAiz4Qx4t3bGR855rNaBUkYqHQufLPonY4WqWAi6Vwiy",
  "key33": "5o1yMLbiyh7hfaPpSMQG3fxpFeRCXw7TQkaHau3A351RzS5grucj79EFuRCBJUxj61wsxEhLt4DQ19fWwNf1CVPU",
  "key34": "555UEb17aJ17GjWDkurLDaTJUY9Am4GAv7ojMP3JGP4HbnvZvyFKFuzMeL74JGddnUgo8c8xAQtLP8FPZ4w13qJ1",
  "key35": "2APGWaP7CggcBcTHGPXP4DQT4Zmstrcz7VgWVzaMVkAVYuxfFzAfFTSc4ijRACJHYHqQjTJWTzsARyFVqnJx4Pht",
  "key36": "HrLMKyCrLucDwKpZ3VeDg7ZbwUqGpZHa2MR8gPBV7bRHttpiq2JVdeERweigmYjmRjuWzdaQ54kPT2fW1KTH5Jg"
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
