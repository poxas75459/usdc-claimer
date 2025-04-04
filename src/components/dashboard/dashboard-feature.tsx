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
    "5WgcqUyggHm1BUq4Cf7S3vzS9Pb9h67Dkip5yCtdtF8LkUCXx4kPksZtwfAKuCBAt1eRXczgF39UAX9WqbGbKJKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uMwCBgajcqy4MvkE7eBF9wKjDt4Rvi7MM89aa96HXQD9eZ6tTGkb2b7aR81jWykxXPsEMZJnixXJch1uVnriq5y",
  "key1": "2PCwgJRtBgLPVqD6iquRcYVGreH4169T4gUPiZDGhbmatNSie7VEmVSFMBJEykShWwtnyV7xDsq1bumohtyihnq8",
  "key2": "G8yP52J4z1QnxNZoxzj7Rp4VjvrsY5Sz9XDSSyu2in3sb6FRUAdFcJ7DqHiTPo6AoG5iXiUpdyU1UvXHkosjTCb",
  "key3": "4age8USemXkuii7QbSAUAPS2gTSCtLC6gndpJd7BnJDYgWwnpgTLJ8EZJZU8yFGWpLJ2EeVGsfUpYak1e2mQeAGm",
  "key4": "4rm66a9JRaTW4zGb6uGaebeBgPoFdcNJ7s3BUtFg6rr2mEpGZQLZKrSCgo37mdmViwdVwbuaUozzq5Wu1BVQi4iV",
  "key5": "2rSPhTGvVoVPcqHj2KhuS2KPPaUGktnFwa7yGmLKw49DvgKQKXF9im1qqEJ4MdShZtC8XcY5CD7XKzHCqjA7HcMh",
  "key6": "41nEkhoYfCTawEG7ikGJXa3KcnLsFjZohsuR8puYB1nPW22QEadW4dmwZB4J7YpFF3B14ANkKC8mt2kgm81bNc8y",
  "key7": "5KDPgQRB8VjRozsd6UYJygBAy1vjQNrhMJRDnj9HnKnGDvq7Fq6usYRFfkU7pRDqNGn5MLVp6LxsSLTCw9GrUafK",
  "key8": "2sehXeHfpqA1n4XxYbzHjtCGoHbRsgXV4UTEmLUgQgbJLzNawXx2wpMUnAGCyJ8VQMxMCmNsrPHxuyRVVGyggrNg",
  "key9": "5yx6NiKu9JjqtnKjajKqmSUF8JVJcETDG6AXFbwsKVLuUDTF6AoiK7suuExGJqQYBhoRmbmmtkQqqevkwXcBZvAU",
  "key10": "3LuEw3gdJHoUvnU75o9M9kUXm7hrkkXZ4HFFaU1JWGmvLSMtHmy67ranDhFbSoJfVdNKjx3qw2wh1uh9k4oyYBqB",
  "key11": "3RdGCrG1Xu7NcAiXNWpwbVpjX4i96Zdpt8eER4jMkN3dwCfskwMKKkSTkwZPyeivPoKaXf9n6RVHsHb4RYBpAYze",
  "key12": "p4zPo6fe1VSejpGihcnmdQLcAsXHCPYEaxXvAbtwhWGCTdia7MUJMdN1AiFNcC2ocmdjauS9LknMNwXjKjFGDkh",
  "key13": "4ZBctTd1KC5ZLP2Z4PBdVMW9STVKqWNEXjaUkSo9gJ6tWKHZJ1T7pBgor7DGGavAG4pVPbL3oTcPeLGapr9d9DCK",
  "key14": "2au652htaq7UiVzsLDXNWx5bTGzqdEcWcDZ2pTTM38wPqA26E2GeyNxxDB23AkfUzGuyWGtqAWX9xSbuqsyaPYcw",
  "key15": "27hpp7s3GAm2XXgDy4FkZhS4pXhzB1YMDWeUUEPWZS9fgH4H9LTyGKUEW4cEaTDtLjiiJH6Pg1EUWqacFjwxEp7k",
  "key16": "5HikVuAv2HtKSu4bBVYtJuePZULkx9UCtZhw6eixRkCjEoJPBcGRwLk1AfpJmTxMNmmdod9TJxw9yg4HkbzBnZ4y",
  "key17": "5iXW68WoghM2bFkR9p9EVtNY4hdCiojshYcwF9UkGDdQThRPdSnzpojBdPaFVLRvRz2v1BD5VS6AcNv2mYZjt9rR",
  "key18": "25JTA5jdSHYHXtB4a9AyeLMsYLyVz2D7Dj5gRHjsrs9vt8Rm5G7udtyEmFoady9UWK4MiMVE77JTc9ASZLcXRf6E",
  "key19": "3ohxfZZCRXsZzW99AmzyqhBEZgwo3rFW97dDRg1mpVJQAeCJnAHZsHuQZJcyZ5FcvabwVHdQ2HJcdy6zJwqsem4o",
  "key20": "34Q8aCg5gHnJmxWWyujc6XHCu4Vodrsk5sfxSiv25HisinaU6ZNVAL2M3DsraJEEeJreY16EHZsfqpGPvBTz1cqy",
  "key21": "2GyVV7PMXq6wfRGRmrrEMmuFgGMY7EQgeBdh4Sxu599xDUcPjTJdzuani3WYKZ1GskUuFWCfPdhgmSNv9gDUvQ7E",
  "key22": "3MevfGNmB9KRx1hCoSFJJBKQQnPSWRg9KaB1gDRbDgfpue81i5E78Xj1ze9qMMSuFx97h7TQnkji4Mx5v9fiD22p",
  "key23": "5oq4dQh2rQoNXhZJtXQfGV8NjArquSiCR9f3Fb48gmy2V7vNPj18aoLPLm5nFm6YZhidZfdayKcGsTy7Zy7s8gfk",
  "key24": "3MYzxYU1FvE24F4yJz8KNDcQFSmtPhT6UAMZ6FrFR85AToymNXGGZMtCZJSwonaQZSqXAAY2q3hogmG5ReTTELwM",
  "key25": "48KPwdbHfCMboU3THfGA2ieZgqjePa1nKMgYzpofjLZ7WHqhgLqASTfS3raXbJVaSqrpw7MVmkWkYJ3B89XFKbp6",
  "key26": "5TydYZXFaagsR35xgDEmXtV8sAH39fFSFCUjFHeaxiqGaNC1SADxDk9eRY6ZqdScm6HW1UKa48Qw6GyBLCd4cjjR",
  "key27": "4aScKMgbfSHz6grfzWUf4smecTY32xkC3kftW6nPHnqPzSWeT11hmMbhfG6zgmR9FMHm85Jnaoq5jeM3RrasCDhn",
  "key28": "2eLePBFp3Wr67JF4mCGtKpBB8gAMbkMjMRYoqjeNGxiDgK7h49PaJ9aMJsKme5ghj8TswMfnFYN8HKPcXZU5in7x",
  "key29": "65x2DJMt1rcd1KMm3M1Xgr2FBMTmAkE99GyUowkvLA3dPsUUFfceNeRTw2Mz586owz4UGZPgfSjyn8fyyFxHBs73",
  "key30": "uMDFHG9t3Z4ya9zwtKUbzE5StkRxmXR1TCdqtoZob3tNmB1Jz1kZHFhb2ZwxoiTuakSHXofcPEN4iMdgZ8KcAHA",
  "key31": "4jF1R1EvLUh89WL4HDWwrD9x2vRcaRUYytvuKEA4qeo8Q5mXqJrnP8SDdFvuTMGPHkPezFJsSiH2zFMErF93wjoP",
  "key32": "4WcwyHocjZ1Z64PTeWRBSCzQgs3mS9NAx71yjSCAVfWHtWeJS2CDNc1U642jn6sQ7qrdy18TzMzBhWUnGEpeWRgt",
  "key33": "5niS4CJYHHD9AtWLQnFstyabjX5CAddn7LEAw4Quj8X6XmZqYTNi6XfTEazGYdA5nvSRbZueLtzvoANBhA6TRyT8",
  "key34": "4aGFVS1hjgjcrDkfNTTLpx6E9UHaFK481MWcds9rj53XRixAZfsPhHLuVipeKAFL1KYGXuaDtWyYLmmDUE8URk7T",
  "key35": "rbZ75Uo5PiSkYkpxZenZDkgi9tSQfimG8kx3d84MRs1Tf8jYMZpV8EUBufy9UALcue7yW1WixuVLkENhrd4S1Da",
  "key36": "5nPp29Qruemcwg6GNoGREWsuDCRiYFHcmbhnSKePFr3qThuXdY2iGafqWfzKVd94kgGUconmHVSDrMpWTxuimDor",
  "key37": "DvsxQmZmconqkBr9zuV5cuAv5g4cKFCFDfY4NjWNiRHtCL56AAohFzJvkC5e9x2ZvpnMeN6guPN6L2aGvi6M9W2",
  "key38": "2jNpifqF5TT74DdkfQHXpHshYfZRoPVXmHiQRUosVxz85XYMKvCefQuDBr76nKVLzVJiQubdUGj35qAYSTNUxmcQ",
  "key39": "4u7PjWwQAhXSTWP7apx9MuU6juu9RtCu8Zz3jYYUpeSs7cAXtNpLTx5Gmy2nTcv6PaREJwyoZ9cqZM7STjk88tq8",
  "key40": "3WiTotKzFjhwKYHrREjLAhjTkNUaYzLSKo28AS6exJefKdR2UZq92QLf6b3WR8CejMzsRvV4jMRqVaLMFok9Pba5",
  "key41": "2p1wEm7X3VLwKpzvcyncyXjYS27np5rj27nWX1FStuc8kTw9Hey7vUMzJzB1mFpD79wd7RUxeTSQ8zPyGYWQm9T4",
  "key42": "DZLfYPkPRxmMtGrZaWjsRnbBrNa7BwAn44e41rp8kpGwdjsrr58B6guZtwXD7y5R3qqXUuXYosES2JFGGhdNt83",
  "key43": "5p4CfdPnwgNxeH1VtkExUWeWHNfvAUKkUULseMuYWP23qgNs22kskXevaQXNXqhz5W3JUuTvmP6NBARrCYwecD5U",
  "key44": "2wqV6pJkTthUu9C86J7XPTVc2yT3yMfP1mzrRPfrYfvwuhBwGfipFXN1bQD6au6QoKKzXym9pTMTKHAnHgq5X7u9",
  "key45": "3synNX5J71Y9TVwjBMmBE3pZNm28V93zo2yPd9AWpMT9guf3LMR2q6Kj5idbKXJZAAGMFoRPB34cJPaVLCBA6v5r",
  "key46": "5dDViJ4Cb7cgLyb1Zi2Ufpc2BpCMytP4ujNSBgyzmYPMYkLZmEzHGeyJuMteMPoFfeEofRX5WTcQKE4GXN6TdsQd",
  "key47": "2jKNS6hNY7jyj98R2HgPQCBBT4DMBgv8TGRkW1Mk3s3MCK6EARKPPBT1QNRYWPGnZWCkn1us69otcACoFjtovatD"
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
