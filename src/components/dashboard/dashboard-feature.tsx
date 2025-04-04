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
    "2tq9hbRfq28uVD3ahhjm4mLssX2n2SJeAcXVuj1RPz1maYdpp2n5Woz81c6HiC46zK432Rp4Ys8cHNUdSNui3Xqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s7Ln41sd5mb5Z4B3tXNyWoNuMaf1ZH1kidj79sutzgXVVYRxrcWKnYqu69HuWJNA4eJQFK2NmtthX3DD6NCp3jR",
  "key1": "3UWkfWWQri4ToQ15bZPLgUots9DWC7r59K8cCTc8Rei1BCWKDW9Y8iTRFES6JU5h7PqDQzrxj9QJRSDsn3bD72Lt",
  "key2": "3MXGMCEorkvEjkZFn1bmfNtvGkQEcLWt23oCmizB66CXnNJ7xSrUgsyPbAVYLUGYvNnGNPoqFEhico7crdEBpxdg",
  "key3": "2wxRP8t2ga7wwaHbgKtpddMg1UDhWBgNbKfavUExX43wARiLJ7dA13DyJqhydHyCcxWL7TLfV3LYrpFRhqHzCrfz",
  "key4": "2jha2QBbnLFKGghRfPdpDV16qZ7tQD2ESHyv4QkDu6VSC8rZFdwKeYSNe32oCiauKWzfacvks9TzthpT1dXLoXoJ",
  "key5": "3KCg4eqXiEdzXUDmeQa9vEajFMAnP5R2za3jmnmrQsAiUxRv3VDVUHwEDVREuEoq1BmUgR6N4vSDZdJt29JF9w3U",
  "key6": "1dSHwG3H6briA13b8gVy9jwtj5KDM3jFCkPWAZJdu5wvZ8KmBqY3mL7RBqPTSnEnaB9yFjQnhPyYgMcFQeAd5PX",
  "key7": "36FY5Cyh9D9vJK2ZWKDsfvEha8S1iQLddswefUEW6uaQJyS4e5U5NSsRzmwYgjDLaTz6chi4vYoum7Wak5UyGi9f",
  "key8": "2QpKqdY5KC4ASW8owx32a5W3pCjfDPdoWHBqizMuCYtSRKofAhKqrpfTsL6eKo8f58gBXkbd3WUUXqqfcUVaLdo9",
  "key9": "3indkY6Vvd8ZHX2Wt6XDwDeZ5mXgieYwvYAknMwfXg6nYp1ZdKZHm1ix9s98srAbFre22JxaYK6Xw899ETieGMXY",
  "key10": "2wi4ZV4i4RA7YiYnyWfkAUMS24JFSnR41yfLu9pd6VVhQkCacUeknHpGY9xhGgdAduzKSyaepGVCEEfUphDuRt4d",
  "key11": "vhkWEjXLWNKL9ksyd3LTs4LCF4DJZBj672P4o5KGiYyRWtfXMp4M888vMXNPTPSReAjW8s9xFEvUXihfMZWdhVm",
  "key12": "3Z1zQrFG4ATnaNF6nWexCptVUByLHXJqLTU3akTisLRD11tXYG9DhuywDyvaarDFcgpeZger3fxN3uLkEq8NNfrG",
  "key13": "tgqtCjpaEA5513wF4tNB3rNLpvjKitb8TAcXP9xUgKgEW2QkwJaAqVbeMwHgVL2dw3csziHCCTVzYns5XDsAngu",
  "key14": "62chCGmYDGi1VW2EJ5V7c41kN5idHcbZMLsBmdhvCoeDBG2rMq42x1diku9A4GJr8fuhLQsMGt4EufFo2Pg3iyof",
  "key15": "26cGWSmeerSikDjP3GW8LggyKeEct8cVD7fPw2eXSvH58iwidpwh5MkMHjYRkDuyMcU9Dz8V83MGVSKhBa3AXzzu",
  "key16": "3aYQXDbH5E3SiEcYquN86cncYm8Ncz5G3a4LaMdjaEodGNQ6rkJHJf4DXMXR62jznmR7KoU5o6pw2nPzYVqZmQrj",
  "key17": "553Eh4b5y7a3ainXb1NrDcPWbSDgAkgam8id4yWFuaQgLq2nTdXCNr1spf2ntPs2EZtdcgEmqj7Q9gWfBYPH2WqL",
  "key18": "4ay6QGos3JxpYLZQpUG1gCcaP1um7SUpqHY5mx5ZvuRkPPmLYVV9F32rm1vTNoaceEbPgci6f1HcUUf7XnwjJcKY",
  "key19": "2RgQmX7kD2ZTUiN8PMzGxNCfi279Vp1LGYHr3qimptR8weoWijBMfv4aev7Z5eoGVye4Jk6fCs4wELu8B4V5yqyu",
  "key20": "2VS3hhcYQ1i5k9JfwjeCrwUawjwiGdfYShyRYDQmxC27rkdvhAT8Zfxa1w1madKUwNaCTUb7UbcaSjwa272VBx3V",
  "key21": "4aiif5nsfBo1zWyUdfw9fGvA47YiSqbktbPiLtQgmtYdriF3eSXfmbavYBMGRiigJwViHW5TAwYKoV4hR7GuLzTD",
  "key22": "63FLN71JF9dEsbkvDkw6znHKmtwyRoNGzLjN6eig3kNsbrqjXXHFR34obC6NA2iGAxaKi4pQNP4BEi4U35cnZdy9",
  "key23": "4oSMJVHH5YM6GpycBBVXPajeVtygKmGMER9kaS8u9n31gbraEo71CXEd7qRhfitJWApEsBt6wvqjWRQU9yBik5eg",
  "key24": "TfovAkrmCSfmtsZK8MUnCkeN7zbfpsAeH3CZYV9raZSCKKWQ13ZknwLPkMQKHxP1UYLFPkQM7NSg747Em614B3a",
  "key25": "64z1ZhqYVzkN8bHixJKUyvLB1N7Y5kz7tSEqgJH6BR9CrdBKVxaWKqJtBYv8fg3XG2yi4FVn2k7eDJwgUcgztSp6",
  "key26": "5gFPwLqjR2CmtDmteuDTb7PMAREpe2aYCxCCbYVU5yUEZ1yZbq6NLVYjfSV93P62osrNTedqSB33WBQiazT44SPr",
  "key27": "4Nw31YaDDCdB8WeK2UVEsVvQff7sGkEsSxJd6UXgHyZkRphhaZvtmQHTzhJkt5yMTAHJAeakpyezFyMr4vGZ5ndQ",
  "key28": "4RGVdwpMhCd6yK2iPdgFQ9zZshmQZbSBpcWGsrWCmEtYhogMSNzq4yDhS8VnMUFkYYBqrUPZetpt9NSc4QrxWCAd",
  "key29": "4sg4zTxGtueUAFitP2obZpJjpby8eZjrCrXyoAQjvDq3Cd1VumkL9ZZn8Y5YU9eCLMDAjm7o2LkidtQ1YxRXQhKH",
  "key30": "3ccE8d1Tgth457Q4wS98jymVpe2u23wBjZ2t9j7YX19jENoHGWGjbjn1Ej5BNRMa5QfijTpmdrCP1SsfDV8kfsC",
  "key31": "4eSzZ7uPnisJZEStRsWeNsfwQNx2q6GKzQ9ZU6iuUyRHTBsUXPU1nKMjKaJTi1e5tjnHrNxF24g42L1kSQe7Rf5o",
  "key32": "2ZzpsKQXYcsXZoBZhv38bT9QQwbKqxpeaKuke6EAHWnMtEFStaC43VKjdPKKmEGgPB2iGQVY96vMj8n9zPBZmRUv",
  "key33": "2sySRPWb3FfTQioG9iRrv6viKMMLCkYNiy6figvDyqjxo1VK1NQwFzL6CeAcssNoWKBrhGvfNQGqLyo9gdRfiLpW",
  "key34": "4zwAETCmaY2nmgHYtLC8rQMjo4RthFdFVB5mDfi9H5qPGeHTzvZteUq2WVyiwaonzV3YFZEMTjVvdbjfMMfKoxkR",
  "key35": "UQSa3tVgGzmgKkghtSsAfjU37fFXYfUmjhWMxcZfD8ApDU5EwqG2egCrScv4i82nM1LyQhNuvYYBYpKn1QtDJWs",
  "key36": "45Q7wfdNiyeKp6QzCpKagWUwdXXucja27HkE2wiBXa6JiML81QeoYpY1C9NcZvBdTYzy8ejRjvDCrynKHoFRyueE",
  "key37": "5XiKhiKo7J9QBeL3wC51Y6pja7kQSbb8STPhcyss9URfQhE5qgm3mEygU3eukrM6PnWmsbbVCnDGwKcJ29ygsrzb"
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
