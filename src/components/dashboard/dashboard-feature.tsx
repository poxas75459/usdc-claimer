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
    "3cMtxtkCYpqmNAY4M6hF2zkgWscyEWFLYZCgPhWeVwotkGfEJ6QeJWSkUdyMmJxGsiAf26PKVuuqvsKnL8Qtc7WF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tbv3doWLzP6TXzZufwdWxxEhzMXPHBxB758yxYyGhtotDSzfNgjj29d5DXBfQZxD8GFrmSq9gQMBFe5Ewr8tLcB",
  "key1": "4FeBPnoRui88o8heK63xQKAy2fuEa9GwDXgbDMR56kRMhMsgffKqiywD8xeBJgrcfmaF3R7j3a8LEfm9jgDQdfn1",
  "key2": "3pQbu4ddtNdFcqWDnTWiqp8iq43ax3f2KyJKpP5iVCMFb2F5KdUhKg39dS4xwfrnDPccqVfUtFWvNygPw76L1XkJ",
  "key3": "28HkWxekg3x5xuSZgEqZDZJfmESHAb45typPRKY4SsGGAjeg9UuBwB9sDdGEqSFerLTagDbASPNNgxaFSLyfS5nx",
  "key4": "5ud7BdLkkxjfB7zwEkQcNbD3zabHFiVqrzBsrnNisEx8EEWbBXWewSAxgnJVD9JDkeoD2sULECtbgXL8D31hrrNj",
  "key5": "56C48XJGs6hk3kqa2ZUr9DSYWTQdrnZVp617EFaWBDeJCShKDry2pZx5RYMmAmBCGs2oZHf76EYjVy9dCW56Y4Ty",
  "key6": "3pWoMC4Lf46U1DrTSSZYhiCw9Pyg3NuYkA1WxobPEpeCxhkaFdmbE1MbVMMrzFeDkEkiupUmiEbaLV5a788U4oYK",
  "key7": "WJTE6hVWAfdx397LpwEQwCpiRe7W8Xdp5aFaWzmEK8UPShW2s7bSWHdPEzHfmJuW3tJk3NcU7TCMSxu6Pysu1ZK",
  "key8": "4HhyLZLpLh8XdzXc9Gxfmo1i1Fqc3Cj7MSiEATzqR6EWbp69m4yZsD6Yery2yMGH6khFhb6eFQLUEeo87fnVdu1c",
  "key9": "KaD1BN7uQje68Z1WN3Zerci6hHxzUX1BMQibMwiC7ySMAnK297E7SqbLDsgsXxnnW6KHsvVXCFYdotB8eKoSm4o",
  "key10": "PyLLnrSRdamn3k6f9beatLQYKwU4x3MHny3PzsytF3gJspNgEsMum5B6sTmiLAgyw5Uid796Y8gfGvMwJdTRs1z",
  "key11": "2TkwuY6eV3tN4ivMLQxkuLk5pevLoxM86bBqwX5CLFGmobcGBNmNMH2gvv6FxA2xE36wpjKFwczuwSiKqc7nUR3w",
  "key12": "5Aepf3jampTw8MDoDXUQHNSUt2VV2o1Gq1SghRqvquiZ5UxUdeiRnzrnbnJaF7SE99c81N3hFKCe7QcJmXUF72zt",
  "key13": "264CzwtHhAyxtpcqMYEDYw1a3Lw6BU7y1Zmi5YHzujtWURA7HGLbUE43aMQJ2q8RK6K5TPE4TR3Rdp9Vu6yVxdtF",
  "key14": "4S4Y7a1kLLmHuAJLmzocH36TL3GqbPh5yHa8c4e5TbtDe6bk4uAg9dk1g2ZvWj849FvuQT1WyAx1UmitH15wuP5F",
  "key15": "2nGdg9BXn82UVRMDiGDGfVzzUe2WQNTD9dPoUxRm5dKtg3tdNjEyAkqyPHXLbCt1SZ7NDw6WVg4SpL2HBK1Y8JVr",
  "key16": "5jrBNYNTRxVWeBSiVRR7GpJprpA5uHNX2PuoCUdXxqcTKuvuBGUFe95Bq7QU2qd43PW72axdSvYfRLPawcQBveeJ",
  "key17": "3gYxPrEFgEQa6SAqcAA7FGeHVRpw31akpidPz6YsutrJZKAzKbX7EXuamECCPXCHyGHbAqwvuwJbzbF8qD71DtHN",
  "key18": "5u8VNSGLifPHxKudubFxUJhCmD6Msd8pkHXP4tSzSYFrd9UuNRvbZQJxSVAGwgax8kxCPy2ZytzRMtKyHhaVEzMp",
  "key19": "2GRZVjq79bGZjSW6gwqeA6bq8a6nUa72yjRXeLERceGcm31URaXD8pXY5j9yEWFWz4CZPjTFahKHTHU5kDVTbvfN",
  "key20": "2SqMtnHhxhDX9STiZgPD8YLAasrFCxMVdQo3nj5PzUy351YbVfbovc9LvtLxi2Rs5pke3ci9Ldh9aCxLrTZg5cXR",
  "key21": "2vJkjhMh19X9y3KDE8G7tRP9TF8M9riia97Xkzex6eFAVd3Mm3gS8Yd1xuKwGEykagmMt9SSvo4StFMSjuKS2B3d",
  "key22": "4BJHXZ27y7r2Tbjer5ZEn2KMKdpppt5cTAEkXevodnn4HE59Y8qRV1dGVoj3g6FPh7MjJQb3RcUKLUmPPDv7xxhB",
  "key23": "FDvJ42uXm2DDpm3r5ccTWzGBc66bHMWWoj7ppB4vVqBaisYbbwjQLd147e6JW6Dc2PGNgEbSySSKaSEQifhfffY",
  "key24": "3cajgQZrC2YFAHsS2HxeNRCQ9PdDoV9TrCaySMDuGW1MrcGsmB1GnsD7Aorgixp85eLENpqU6L4zS7QS1atNUXjx",
  "key25": "4QsnAdcHdnisHroycZriy7wQG6DGSdKN9kMDByb281CoWdYaV8HPUVNpRwssd8vMEaLn3zyeiq8u5bmmvjJbw5nU",
  "key26": "5H44N1gWaELuxeATAVC2fz76dPxYmr8do75uLmNkc483UcYLdJL3gT7d4qiCFYHNMxeis7yawQ5Mdkwin2ZTCttK",
  "key27": "h2QhxyDsrSQL2PVDfz4ptMV6bXeKfBCHKhTpDVJmaDxfGsn9z444sNp9HJu2mwEe746Kk3fj6jpYvGXcCb95gwJ",
  "key28": "41mY33WsmSznaHdkY5FJyQmDBRUPq6cavbtdbQSwF4Mn6sVsakqxwgdpoeF6CkVMiUBmCJ3SpDeGbtrMA6vbBnSi",
  "key29": "2QHJHGHXrJroZoMnwVwRJUocmSenFo4TWjrtSbyN6euY4W78wtKj7DoaamVRFWcGpUJfxbZFxuyGqmGz8m5qfHce",
  "key30": "yJ9ij7cjPokPx6edEuirug34BvRm8TTo7ntUu5Dfy37QPx9FT4mvY85Phzve4ZSg6oxp9D1rfzoWSzyb2tPmKYN",
  "key31": "N4Hws8qhs7Xurk9Y6fFEh7RhMBT2mPf9G9SwTwt8FpmJGPn54dbK5zaQDfRWqDpJh4ZnTBwUereQ78XH2Vp2kL9",
  "key32": "95W78QcuMVefMAN8axZqaKg4xir8T5pvcYTEtSCcWf2FYnDRmysKNmrP9uZishTBWZviuJ3MaZuZKAnRBq71HNM",
  "key33": "3pcSXbcZmi37rt7DLmcGxDoTKUkdVWihGuBoy75jxSP7r3rs1HtGXhBQLoVjkVikp5oeNVSmed82AadvQyL7B3Wy",
  "key34": "o9j8KEokx15bbn2EEjSFKxwZ9tAPyyH3Spi5A9sCGEwsyPbPRnwheMWVaXeJmkatxT9WkMkwdYcDFtGLBPyW6PK",
  "key35": "3cnCu2YuknVQECFKsYsPSBTWDzVMTLitBsDiVJAp4jdURSz14JP4GSnRXuVNqzqupsaknWX2kVJiovafeASF3Zj6",
  "key36": "5H3Vg7Y6sogwLFjvLKYY5jx56YLbdU6PBi8GJiAUnLykSCDUepAvFguN2iEJ8s6EQXkyeiAqc52Rxpu2szdMn8uY",
  "key37": "4mHmoFSCi1bMG4mdo2JN6WdA3GB4wBFqQNaxAK82ErBqVNBY5acd2veU5fyZ8vRUUQTxGp6WHTo1fL1aKZ6FnY25",
  "key38": "2kY4quMTmt26df1m6tJzwYVAAw8X3yXZ6QDqxRPTEYth1brEhUsVyC29Bnt6XN37B6dQKW3jCpcmTwqr61ZgmSVR",
  "key39": "3AAoq5EKodxKL6mpdt17pCRpPFLgwMeyuLiETYd9WSnYeKkqWDHYzRU56BDy2GZPXE4YdxWZ9oQgRxw662LUJYzm",
  "key40": "4pioGTXQ5ftGCuQaT2GZAFAFyAanf9R99t6uMrqA9u361nC2YgCsjsPvZmqdKXrZ5t86b78v6DezZZBJPtSDaeeF",
  "key41": "52zHuxh3tu88ZPk3PoRSBWEw2Th2o5sWM8HqNZuqhSNbbHNEYuaMa24MNPNMGSZyqTHcdrA1BD9gyhkiF8sd2xh4",
  "key42": "3bqFLvRvRjb5PCfq9QAiCafpYGJzNeq4bgqami5QMEXWsnQj6hLgp12W9AMbpHgVcqTv3PuSRoTU4STkQqRXCzSz",
  "key43": "5G44K7H2vMdEQG3YY221XATrMYEhHA6d9whtxt6w2eVwBEUroxTW1noDdQj6tChTpfQxtfmVphjsyJxnAbZqa28e",
  "key44": "4bGUK6puctNTCgnJEFn9qukRoL82PeVbij8PYAPCZLCvCRAasiC42mhexFaLqLeyPpuP5SgANKHEDzKcpm9qCweF",
  "key45": "5ZMEEnEk5n6M516XgD6hB8FQ3ceCP1s1kQD8ZLznYMqxZSs3EjzJ4A1PDgHuP6Eq4um5YDkTS2xevJk5x8feSM74",
  "key46": "2Pbbvj4zqLgHTSxWk1FszR1uqRXC2NwNJbGXionknpUgWbkktXMmDnEVMQXQjXg53bRyUFCXfEh4zvjPECRopfiM",
  "key47": "5w2kyBiPPhqJvuEBwNuvQ6ubC5G8GTjj6AACEXxG4pnZGs9iBxtZsSFPe9weYBvD6vBqfM7RdPJxLjAcnopm8G1W",
  "key48": "3Kcxuv3CMhcZZgKQKifRjsPijtR8Ry7ReYJwEGNdtqBHmmhekQ9ywXpodwc3zR5doGZuTprVgz3EsednDT6fJC2U",
  "key49": "8Ri5VqRHpYmZfY8X3wy1HnuN3AcjTZiRcTeZBSFEFxzvTWc8xkAwgnbnqGovwhpZWYbfWf4FcGLRdn6fVSwbadn"
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
