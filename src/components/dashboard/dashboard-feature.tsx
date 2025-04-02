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
    "2p4Whq5qhd6YeGVBizHN9zv8iyof4asK1Fu8m68Uh92GuG8Hk6MSVxNFbX7ZpS4HRYSo85MfX5ujtt33ky8t8g1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28LWKi3DEaz7XiZP1U3fsbapMZ671n3bpU5Ep2HogEqqCoY4Pqe8DJVhzh1ux9LJ9WwhRZMR81sGXFZWjDiGqPw1",
  "key1": "5uW81X9CPWmqWADEkG9RZZVmW7du4zFq7uUpmD7DRYpyyGxvcmVVZvriptearQStYagxHHQDWZN8FSw9YEKLzzmj",
  "key2": "3qqBwtFmyv4jG9maekMK1FPnd3zLzU5sTTGdKWxV1jocS93joCzUC1QnE6cniRTw8dV75YuMguZFP1pbLhgC6E9R",
  "key3": "2afVbHdDHvfU1bVVbwJwAa9gYaPhMivLfWv348ynyQVmBvVNjrE8x2NTK85X8pD3djZztXFw5BwmRaPDd13L9hoG",
  "key4": "4rgHPTKSP55sZamzxVpUGQLWe8xBb3rpeyB2yYMJ7GaxFs7VwU7neYAVqEJC6uTni8D2VNygo1omxEVs5XtjMPEU",
  "key5": "43T1zB34zWU2LVNPP22hyaf88NzPpDun5Vt1wzbMqdZi1MGRYgDfJzz8ZC5y5j2vnaBK8wUvjLS8n5n9G4LVLb8w",
  "key6": "5Z9XFPxx1mFjUohueHZExvZ1G95v8PTp45uCZfuXkD9PGENf8SL5AD4ZHHMAsc7Q2o6pEZxtZL62qLvV1jTxGrDt",
  "key7": "Lka1uWB41oeYRSNPfmaSM4mA6g9UbVKBEyfaWjnfzQhhnmfBoBpgf9dS4dSp1KMXaxq7q1zs2Lm5hyh9gsqgwrd",
  "key8": "65rMr1gTFrvMrcpvHt96m9btNsMuQ9ND9r7k95afqtoppUDLFzuqrjomS7bSo6DqX5dkP6wPb7ZeWTsdvhpcf8JP",
  "key9": "2LZ5yb8Ep9BWtdTQHza5Jrxb4QnMvmtDNpXGhpjKSVnRA7x7rLCywjyro6he3hfcrk3d2yhbF1uxiLCo63auMhdk",
  "key10": "5syfDyypw5ehFpMTz4iwjPU5KLhZLWKY6vSJp76XXyvznqhRpkRNpHTaTgugxJqSHFjLN3cp1S8JYZQqrpU5pVBr",
  "key11": "E5CoGoDJDFtbW4qpud7tBs1wchoZhPnmaruUNgySZenhrNzXtUa9SFtnkkPc5Gmop91Wdgqra2EAKL9eLmJQSaG",
  "key12": "47WdqP6xiX4YPRNfF6EMHgzRjAzsfdrF3DvNSG5Bb8k4Ag9pnC2Q4dTQge1AiWtqVBYqvJDN515wt8fTb7S4guaf",
  "key13": "4zQ2V7XPiVHC7BW5yp2ugJ3JKoRJK549PcsrasjfmU7gjWUZsA56JuWPDZMnjArgZHuwSkpZwLjJ9uNN923pe23R",
  "key14": "2nU1KcwcLJAeQMdF73XKLgJVSnpsuAgn6ZgvCXSbbhJubos2UqFGXiMF8Hvkawd8m6BKJJXSRf68FT6mPqEKFm7S",
  "key15": "5FBp8YicN1kGAiHMAVMXLYYiVQhr4kiWYgrn7wLkJo9W8YExCLsVhzFAHxU4oK7qoL7rC9FJVNcCnEpgiKf5YxhW",
  "key16": "5fQPZGkKQaYuEQLn4UNGnV3dgs7w6FvmDyUQhG8V4k62cRMNh8eyE5sTZgEiGVd7cLBb26Q1X7oDcBBZrKEmmqTG",
  "key17": "5SYF2s9pmrvzE77KKYP64jKpGgY8r19nevogi7wriHgvF9Zyk2pqwwmQq8yxg274Y2ExQYvx4ExuLCb5ByfyNSba",
  "key18": "4HYCeuBNmmbrVGVqbg6ccocfjC6Jg1n7NdVgdzCnWipPtbW1Dd63967Wzk1TWQt922MENwjQUdQ5fJ2RpYPLF6qe",
  "key19": "3ZP98RhsWjscieRwGwYe8ckQKk39vKQC4opz1XFbzcDUxhDyrWFfmFdgY5vdiGP2uoJ6e1J8y9w2yKjMw51yZQVo",
  "key20": "5DLaPUQAC9vGEX6B3YnrW7jNy8g8QZxuknRTp9773wBx4UAJSKuzkCAXd9CYAf79SYA88BTyKTnceEq97dsieZi4",
  "key21": "4mAiBMerv3QvnBMCsLBWedBMK2NoHY6ULk9ESpJfNZp3wY8V4pKfVTo1sdrXhjKZbbmJXsMgZqbkXFKSznKoMeqZ",
  "key22": "uxyp7MfZa121mPL71hsee1KUGfh2UZN3aGWLRZss7K7BkeKFXzARtk29HpPi1ys5YyJ8wHeyYtZHEeteAE6Yk8a",
  "key23": "5T34uJfJBAM1bNbsrHCkUPw6muaBKg68yZNPxzNfvBw9cSAXtTD4AcR4xVrriZowop5a2yXdLLifAVqytEg1x2At",
  "key24": "3Y5g58wiSZxxNH4kKWroAx38fgPk3pzKheeKTf2zAJbU6cttMxTqz4RymGMvhn4cnyw7a5i3fDzHsPrarZP36Yp2",
  "key25": "2HRi1aKiwFC2yUtob3TLoyVPrfR81gxS7dxsYip6dkTmwHbYigK4EuihBWr2LDf5oedf83CMfAkgWxq6THwMA21t",
  "key26": "5qHoYUqe8UQuiywWHCjPkqT54SCZ7AL2TmneMbCsXjfmdc99hb4dDWKT8HLxv5EaMq477pHGYjem5n4YxkivQhfb",
  "key27": "7S7vXhM1iJgvtYA3szuPkW29i8N8TQxoXXgf3kBWhJJg2jsPS2pBfEKbpYcn9JsFKq662TZ8bVgjq9UDq8e4zFV",
  "key28": "2mG7fvvTzsJjJBnUtChdGAJ4eeGGYATfFnUXtaD8KKZb7xZRhsJBmtEkiU53rvbrEVByJvJGL96ybC4iY646UY1r",
  "key29": "2rRoh88nYPPercFxQcLBcUC2FYGmyXjErGZVgLnbe7zeXQvthXZLK9ogPzWjJVUkZ2yPZQYifnwfS5iZWAvA1iQh",
  "key30": "5sQVTCAcCLgTh2ccdhb9UNSFMGBQsZssf8mfmMcnei1azip9DsWWdX8sbu2SAgV1ZDrXcqUPQCvroqwdqcSpy8f3",
  "key31": "4S4Q2Cte2hXeCR8G64vGbuW3ePtatdiUtCuVGYGmUCcjLaJQ1VoucU9Jo3yFFzmErMnZVhLeWvhokTEvwXZEh59L",
  "key32": "54ZLMjovjrEqH5zgsvuLrs72XCyLgaefBdbNhQ9DuitEdn78Qjv4uSq95EdH1r5UaMiPcXCmqDBfj1CBMZ6NUN32",
  "key33": "dueo76mtN9azdTuXvs4DV5dnW1tX5QzA7ih8ivr3EsmDRUznTBquWhTtznNzNWetdG6gFSddsxvMWgGNEbXCdRH",
  "key34": "55JFWtQ9APqP4prztaG9xFEpL95XD5NxBfWs35QJJKHJxtupj3HMLGxYgftzfohv56hZHwkY1FXHRLQMcQ62oEgG",
  "key35": "5wd9Vs2cAmmk1ACM65BdnSEbu6JAnVQiYfGKUbRh2iKvfe18wZJpPsVbWDYTNaY4mFD7CePPHgSvdHtbFiVUerxs",
  "key36": "d1sxrpKuhXBqZLuZg3NQ7jvGD46gkMiCeiV87wkvgjwVtCQXFuiHDNBZPe2LUG6wVhwoGBt2FRwTbhypUfX7yBa",
  "key37": "3guJRW8rxozDHTa9izdLCxEexsbRm9L1RUSmEXohsHENbuJNh9Eq1Y594BxsxMGYTxzFTM7exeUshqQozjKiqykG"
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
