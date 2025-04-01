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
    "2qvWeiSMhDQBigorrAmVYAG4uRiw8EXu8gi5ZzeLYEjYM39XAZV2NMHWsrHcjaRYPcBx7Y5QeSMZxwPdtkm5HZxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kcTzwpbXimz6Hi5a7cPj2vDUsJepZjwzbH9D8qSzh6TKy23d3rUeyoRzAT3PbXx4jXmFgVAj5mDCm6tBVhXpC2b",
  "key1": "42P7MKXKMx67mb3X6b4TGhTnqBSEkswPeRBHchxVvfNYZaq1xfyivBc2cp3dk1uoCrjFUPDp3eDyBQrbWgiHWoiC",
  "key2": "4B8PLE316FA2E7PDfAG6Njs4brPnrkTJKdee2NBdDVyvzJDr6PQbVKPSJSY9rYbWpPPvCFtBrjmisWDTuQpZJ6c6",
  "key3": "3mXuDSFAUUz3LwSyu6svhxf4LeqvWhL5YxYaPktJs13rFSs1QuWoyBNzEPKPYwGzkHgdA4E5xmouPQT7yehSqM9o",
  "key4": "2FqdXc7SzUkwhiJsdLQq371KCfH7hy36qv272cCC6Ch9tWzyBG4PaKuKwhszwZ7xuqbYPKjRvMSgsmqYZfUTe8k5",
  "key5": "26gEyQc4JhmoyiMZuG57HH2fnK81Rmo5pqbn899agixgi7T99aVhdHeB5Ds9NQygWhYfivzt9sax9UiFM5VRLM9s",
  "key6": "25MqPiyecctWT4YDebn6zhU8fqao4rDAa9tKxcimy1Pd2sp7qG7zjLt1TQ57tNHkKSAYFpMbwXyxMTNVenUdN2PS",
  "key7": "3pEPhLNAJZ6EWbv11WrTNrFKvsiPzQnFYLjwK1f3A8r1vsuHRP5TvU8FJTj56Pjp51hupQcNY24NzpERzHeQ3fYj",
  "key8": "5W4PEgrRke9111F3jDWV2jpgxFD41QDbtx55yR8UCDMmWhts1gDaVjx3GbMBdbmnKYx2N4dtN8fhV5eW2h9QieYW",
  "key9": "2exTBNmnAAwyyAoKWygdUCZgRLLhMaNayyZXUUQ3fwCHDPdUw9zEPZy88RpSKaB9po5jfqQJGzEzpmNnET9gKuUV",
  "key10": "38pcW9C3r4A5n75zdQaqNDR1hLX6AihbBjAv8QAeXRTcGaR2AMu2j2w1ETxv3FkMEjr9D1Z7pubc4TMkLr1kVE4B",
  "key11": "LN5WnjWm5ZrwUh1CkJ2KWVaq2oekUaBApqvKDKU9GGYraSvFTfU57or9JKiLnYCqcFNLe5LfBJx7PXKwqTYo42X",
  "key12": "2Nx71YvntAncn2REmx3kjneVRwh58FY7d9q8d7h94oEGrk2HreFiaCp5sBGKZJKXn43DAzhJczQDjrcC3Zj7K3Pw",
  "key13": "Kut1YHGiWLzahKovmTeGXnF6NokRKQ3T6yommdesUuLpKJ1M9JkYHh8JVQgL4XiMszFFtV7t8yEBtiqa5Gs3k3G",
  "key14": "42VLPeaXGY4qCMzuDv8g2PM6fv8LnbuV9z1TAeiVanUgY3qMdixRhQKbusXcuBjUGPioVjtSapxGUFnjps5J3zHi",
  "key15": "4uHbzWi8KS7tFBdv3MrBs8zSvjpbM4L4wxuUSVfPzmYWPiWqSNuFKUYsiGonAZuXcxhKupXF7k3pcyMJ12sfDQgF",
  "key16": "3yvEBKroa1dfmB5GF9ECWvjQFBgkTKdjHfdbj9PmfY26zh2zHomJGnQRbytQ7SHHPfAWnvf9uUE5CMRgpTPAMpv6",
  "key17": "2B2A34hvsucDUEES5FnibYV19KbBTFJxzn362YZWfHXTxnMPdcAtqQhfXvfccat2hHJoJJoizZBwdqLv5ZL7f57A",
  "key18": "5Fsf3ftyCjoD3Lek66umVfASWPbzSt8huhbA4gM9G6AJNqMjAYzsx94K5Jk8EE1GCD3ttAnnipzSru94pNi7MQBU",
  "key19": "3cty7rCkD7vcdKWm3Rzc3TpfVvTHXGNc4JqkYBmRCQ6PjYFysqdsiDkPtALJMicitnykELSZpMqi8KhByPXHN9uX",
  "key20": "38ixVpZzNe4n79nLLY1cv3GYggjBFHCrCayBY8JJVJ3ajh8vyR9VQgXgmzhuqY2eS6w6vXThzQyhtym4tpmNYvao",
  "key21": "2pxcJnQTy6FTgkxuYyf5BJp6QnMWUp6EuJWQ2wwUVn7sT6r3M1VB1Ji5yhZeXkGycD5EPngxPianVuHuz1DhYfAt",
  "key22": "2P5oUGvkSwZ6VC6SGYtAZjZiqXRYazhc5ciFwNnd7rErACyTCWSezmSrjUL868WtXEzB3KGCQdiKFAnmvSCfuSfW",
  "key23": "3djMXExajZCjfQmx42e8sXKKLzPsZmhjXWPTPJkFMFpdrV6wd6FEerSZ9Q1HSerrAuYWBtKH2xRJXyFUzqXN49YY",
  "key24": "4jpimwnssDN9oAPiGuzz5LB4kGq1XwKydVPK8TWTGhU5BG56q2uqPyEtSPBNuKnJQh9b1tkUVZtGBnXbxCK6jQuc",
  "key25": "f1CBG2zFikRT11zvhznsMSxm3rj3VAYXAr1Bg3b2hv5b4NPf3Xa95rw9jCgxnZh9gthuV4owLQuqGz3QdJcdMV2",
  "key26": "5omPZVGWva3pN7gL3UEZDUwjmX1aEWXx7CCuiC5gDWnkWVNNu71GAu17Agj2cMLFCU84cA7zyyirdruHwMsq11Pn",
  "key27": "L8zp6h7K3cq5FFbEDr489SLoFWxHmYaJ5L9opso2abMiyf5bzGjGLgcQoqgzeQkR1r5zGBxPbB2g15C7d4q17Jm",
  "key28": "3FhzrjCUJ516aZ7pXYfRddViC74uLpi7AGFJMrxvxUG4DHo5TczXqPhxEaDGpGqVA1Shs6quCteV4JNwpLdwPLhE",
  "key29": "364B2Dk63qNQh3ChbVbZcK8maFUoGP3VyMhfwDfGjSnpF3QCpuQpS7uq7YWvgjmn2brqLqPyaaxXGvwqbWo8e6h2",
  "key30": "KNaA7D2iij8gnHGnF5B6sE1kbgPo79UcaeTyenSpnYkRfi1ws5JoTgeC29CL5tUKfsvpA1KVHJXikVFxSRTpgA6",
  "key31": "4Et35D5diJVRV5tfYNHwCRwuQWQ3afkT9PqK3v8YnaWTwMZdiaSLmWr3QHqVNf9BgoU6NFbeDmNzsojSR1DcwnjB",
  "key32": "AEU4KkdzkuCafsR5uYZLza4w4Nm5WQq6LcZEianee9ueX96cQRdXcK7N4vcU1TWmqYSb3ADyDV2dso9xZD4MTqn",
  "key33": "Wz8upV5Ufde8UFhLAACoJjYXNyVqzeyVrwZ5LhhR28hgWbe9zG5tGY7ruPR3kAtkVGeLtS3NWPEnE8qizxLZo5g",
  "key34": "LuCy5F5DzLvSJsASXguVfuVmmPpNDRQoYgVRy2nHRFMDpGbusVfWt2iqTeeye2JJYb2Linf2rCqMeNit9Cx7NUf",
  "key35": "4gT9cXT3A5UMkQm2zUgiCsKxGdabDvvSFhz5kNNin5uqjSZwjuyZoK5DxgCDUWJzScHnK32oRGxSQFvFZiYEgnWu",
  "key36": "4a6hwBcc3TzGqytt4EtRir9CxdEeXdTAcgQ7rz8aqhTFYC99UigmEszeT74XGuDZ7htrzAzDN2qtAa1oPUr4sfHx",
  "key37": "2G47vJYH9znGyS9QJZF2YNjuAjutjqSgncu5vPbJYVFtwQ6dkdU62He4JChh3BkRZmZKTVYmu9TZBNC9eKEmuxJv",
  "key38": "5sYhCR7vGZ8Z3py4H7gmk6F1LjmMUDKHQ7mNQkN5kn7C4DmsCKxaBr1nRG1Z9pTwUSkfdagxnAj9At9CepZpDYrh",
  "key39": "4FkB3b83EUnHdqPbueHWLNpVSoBwARMFo6Xr8SAaQgX9QNDs7To4vdeLFopPFBd5EhFruwAZ8wWfHXZZnvrY5Zmh",
  "key40": "3yAf7vhzNt3YncddXEBjK18gA6WnTZ1fgihiYik6GBsN4VQbkL3dKdQEcELxwDDCDMja2wQM6aDUxxtVByDP7brA",
  "key41": "FTuC9sHa1wYpbF8sbuHiJb7YqSpyMoJZVy95G3hzvE58yFWtPzwMdhMbJkxdF1DswP8XnYLSAxzuobWWS17Tynp",
  "key42": "XAFasfducULUszX11Bd4x49DPHmpVzoZVaCvHRRggX53VtgeJJpDqTmG9DiMQKXFxbFHvEEC3WdHucNUCRDksTQ",
  "key43": "2Jmyvup35wkNA1jmPjFgHE1AFVGohWNwdCWMiYYR8kpPkn9xsHdF4fazGs8DQWXV1xqndMBnMFtGk39TAiRhyRwF",
  "key44": "4Ft6fJ3cUb6AWmwuJLEtaAK5T4c3H2QmkmzdFEZy71b3cus9NYYSbTuHMTHf5PTaohN2AhEy31uDNLxzuinqY7N3",
  "key45": "4bBBGWuDNv8z7b9cFJcxmky1HoAXBfhs4EFuf8FoJmdVEmQqss7m1VAxoC23ymDkpro9bVHr7CbvtxP6a7GH6Uhj"
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
