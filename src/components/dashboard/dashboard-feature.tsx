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
    "2B6dq8a3DReBaKTBHKjK5cAUiExytiMmriR3vALWBddKby7RigNxQTmeYv1rLfkW36yqDXXfGCFkvMUR61sJHT4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XUEMdfmbiqNADbajCiWU4gqESg1tMRV5SSd7MtGdWLc3oLx1m1AG1GZ8Q8mpLzGqWvBRyt8t72ydApsy9N7gqEn",
  "key1": "5wzmkxi3e7QVSW2phP1kAjpqSYQVgW1bMKvwWrcHDrcipstYdrngW2dMaP77KGoB2JQ7fuRzb3Q9caCL3BYjCgdk",
  "key2": "2UL3YRWkBR3rUrWgoWJ46Mir3C5c39rP4N2pbFGEXY9Ahy2mcWCJjpvKknuap223UtKSKov2gnHgNpsWbFySaBcU",
  "key3": "4r7qxWhXjPfxGgyMNYK7Z2G4FXK9aMEB9gFds8cRT1Cs7Kybw3j8AcVgfTDQEb5BXKQ5kJM4y89Z3rU2tmBBPdhG",
  "key4": "4fJixW775uSJBW8TKt9TnN7LWyaCw6rsVDoW7h3C4j3Xewm7VnHoun2LDRPFKVYeZa3RjbffcwLYkjwd4qVdQsN3",
  "key5": "4bFSC54kqoxH133yjtoN2fTkSin6CBeGfk7pRYbycW9RzwR7Hc32Brf55wC9n7JQnTDAZt4XzVKgeUzdXdYQEYQk",
  "key6": "2XyRGnmXDcP88w2STcidVrbPnATLTa65nYBzXpQXiQ7e4xZqheNwkqH8vcH3oohnAbh2dz4QsCrsWUyAzeczKF1b",
  "key7": "3WqXoHCXim7y677dhwJKH52onS33ei6bWBNwqrtcQLMLw92PzZCYyaK23hsAinjdWy1WG2b4Hwr9JsA8v3WsdANf",
  "key8": "kserfCyxCC3qnx9NU7H99QPJaDtLjUSAiw5xMpbUNVrKvJCv1dZYGTGggrPPtsXw5sZrzT6ZjvhCoGZB23pVi7P",
  "key9": "52NbtvdXhu7XogkD4WywgiPL7inF47FnED653VoUZLtEFbuzqxReNqdkMHkwrHKfoaxBVrHGSD48n41gQVNV1iUL",
  "key10": "2fQxQRBz2KSsbBryi4HsbNpC8CpZtsYP27s7sWioKPcKDTedYhPHrBZqWTcy8bBo3UFEKWgQVHskCPo91wXaNqCY",
  "key11": "2ewc93Zt2FqRPAzpQSfEST3wY5VoZmHUYLZ6rd7ufDXE22eqy2jjsqDhvwQeg9uheHoMxecd2cUA2Agat1zhqh1h",
  "key12": "2pQPhbpteKawAqEgEdQERCTJtd9yBDC6m7c7KMe9yPbMQbRQWbxpPD466pMLdAQ8KTWMrdf3t5x72CVpYpVgTcU3",
  "key13": "5DkYb3ksCX6ahMdCwyEUu2bTQpiTySWPbV6K734jnJc5dS6NprLyX66t5a4pYVDZf48npFLnnxwAGyEZFUKjC8Yg",
  "key14": "49tU6M3hynToRGDrRGWNg6Yjh42KZYRhMzUkeWoihpvKG2eoDgaj5Kdk135jWGaQHGYpVirXUBu7t1P7Jdic9tYo",
  "key15": "35NJWgjWNGjzPaw3Y4n7dKw4Gmwm1sJBK8YqYaJRCVqxxy9mmCVi4ygDtXvRK89FadiNczKBNoHX2D6cjasRvo9q",
  "key16": "4jdxBHjxn5VA9ggVkcipPEVb2q8A2VSTAUax2kHeqQarisDJNvJTDyHSC78iLKkBdtDWGUPbrHTztvCVeuqUG5s9",
  "key17": "5Yu8Zd9pc8xo1Z51PeeHZuabr6JrxLHimKgCJm18u7v96amZBQYXuzvWVhwQSbdmPWUa3wdvWBxhGemX6CuPqBea",
  "key18": "4KSJSsW7iBwfmihtBLeoqF3EXueViGKSwyiMc5Afd4h9orzrmRTFx35YjinbcJaFZgNx23jKHZkcF7ip9L78rb8b",
  "key19": "4LZcpTmFQGgjUgbd616oBfAW1Tsfb1xVzektPi6cgRLCWq5J6ckZYXJNvwp5SDhUqfGEw6j6wKgA8J6oF1p1qSiz",
  "key20": "5xF5j6nEYxDpnXWuL1nBMp7ETfCnQVt5w2wjF9bZshtBHrpKUuknRizwapTJeR5fg6kC1T3grbg2KfWVZqU7jDhR",
  "key21": "3MgesuJBSgdNFWS1zS73U3EbThuW5JRn8ZqTtfgqPu4asPwKdgEZMkBr1HN76FdAm4LT44ZadqsCY3u2GuVeoPKP",
  "key22": "qgVivJmi8hVEszcuqkJa3YBuuV1bDgTxxNLvtzuHycF1goAe1mBnAbDmiMmyarxLoRpKCBb7x4as6DALwt35hPv",
  "key23": "3BUQ8Eq2M4a2bSMft2GeUK3meaK6Wpmcny1nj4oL6UZykQAQKHdAMeviSM1ih5EhDYHgBgKpwM7nGJeCNDopLsHJ",
  "key24": "2Kb962ZonKQ564TDqGipg3tcVh9VZthD26ehSTT2ibLqb8EQLYTdKVBBGNvFrzvqBpjrudJLJt6VNUPay9wTwCQU",
  "key25": "dwtHGCbAbALgysPVY99uRex4CsuSMEqjvuLz31mNhe5ScZJCtacYrowNEBmUFDhTDYXwcsPJ8aZaJv3EhothzqF",
  "key26": "45ngnAyJJaPbdBppqXM82CfhsguMPowCDWEELjh5pmqgPLuN1YPU6GvwM8SfRgWQhnQXB8tyFFi24shHcu73Y1GY",
  "key27": "2hEoVn4QoTLoyFxC9zqCHY4MPdWL4Kp1KxH6fXrkcAY4wcNiMAZmBdZPAFdyJUQjpoLRuYcAR2T2X6TbYScMiqZN",
  "key28": "npf5ZZJg7P3UBRWWM3NfegHWFc7KCzbTy21RxQ6rgWnbHKu2xGdLdM1auEtNKD69PXKJ2HRnxHaNwExTHrFGE2w",
  "key29": "5aFbCm6taZKJ9mgfgARpaGETzDDzgTjNytzaFjnCzYxyR94XaQcLCTYALxMPuUaRy7Z4AtmvMofberF3p141wm8Y",
  "key30": "5AEEspv4GPu7QH2uCPqFJdrCue7zkoz5TNumatE2rU9FknDSteaMvKdg8jkGZX2nmH4VSnn3oDLsAttY1TQ7sCVg",
  "key31": "5qPD7MpuhBShRQJ9TXVHuyQD5nWiGQqMmNR3R14AET6UZfq3LRdvosij7BK7kvW43am2yy4tUMuejv4mczYQLd14",
  "key32": "9PCnSDkmte1zHpc3c1pTdjyeA69jm3fDu3pYz2YLzvt5pdM9DWUuFCuiG74AEWy6xKocYQCkznYdt9JpaAkg9oA",
  "key33": "5wv2eSWRgqPGyqoDsLVCsCeY9G9Yn4nY2u31wpAAYskJ7Ph5f8xjXFMG2ZX4ZCRepRLRkdEidfEYXP5iomXdR86Y",
  "key34": "3UTXjwupqAK8D9uAfqnu2kLUeCdjzQ6goJ3bUtGAD6K2xVuXqrXaPum35Jn4CWC2jKZKxyc2U19ek1SaXU6nE6eX",
  "key35": "57ed4SzP76spoqKDsAe3odUkaZPFJ9pX2H2spjAz1hTeDF5JFnTpAfbdLWfYffPQUoFTVgMjunf6Ty96DjKfq1Ga",
  "key36": "ayjqoaf5yUSWzVuhujYmW3VHNwRzq858X9PHFFivxAExxXGeibDFoQvKccHGtyLK4U9jHuCx8TQ7FjvLbQ8mtS5",
  "key37": "2vsYcuTVGcrTp2Dh4S6C1oDxpQkpEGEenkvCfASJ7PCWQHf7SVioPjzpcwDDe71XxCM8qMYWpL5miiZM5dTyUDx9",
  "key38": "3dzZ4kcgZBRT1H1H6dTGjvtZf97h2oT7S9jypT7dxUwovHwNXEnYe3zgBswTgoHoqqy4Kh5LJRazfM7Pbyq6rEUT"
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
