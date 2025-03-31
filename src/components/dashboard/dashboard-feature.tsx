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
    "5DFqF1NXvP6Wrq3MhwoK8YdPp2PwsYNq89YQKfRicMT6eE7FqcHHQcqXtCgzKDmkuaHrN6xaQ43je8mWM6Egpj8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vNXeQsKUgNQDC2iWsGLhGkVNcKjg58dqMDr6JRjMAZJ84n2f5Roy34T5LNQajS5CmmkNbgTHd9uKUqBmV8VxTPm",
  "key1": "gAstcqngy9oXH624VXCpajCtvRzoqaWbajXBXAhKZQwT4sGj3x5TKGdMheLjgYCHHHU6Wu3An3BM81LbgetSG5T",
  "key2": "M39SeJSpcGwa85n9u8H9UhUKtvbsV1aD8zYLrZNpmSkncM1pu4F6xy1DG3BUZht69MLmGoUu5gwE7HgZTnKxjvE",
  "key3": "43Wy4X7rt3BbHMCDA4pvptiNxG6qamPMdv3wyY4f2uE6z5p9emBRxbELs4xwqnTGHyATkE3zvzf2vkiko1mfjKgn",
  "key4": "2NXRFrcFnz9UzDG6ESZUdpKG2k5GgfFdsDshdzT9MrVQVjEoaxTW4BrP4AQzoHqVyMinBTGdNK94rRBXbaCmiijs",
  "key5": "JB13ovwviL7XZduWznbTxRGLQhToxBHjeeMyQ8ix8BdXgUuCNi2Zfaf15tEWjLGL6TEbmnu6mfbDpSboLmS8XcF",
  "key6": "4rodW4F5JkwbN2L1TVoeeRWXHo7iY4DZAgJ2fkT55WVRHb2sq1HRV5pfsMaYfCJiZGW1yzJ5MMb6ajVhD2HMrfQR",
  "key7": "2qmq1jW4f7BEBy8QAXiZBCKfNVZgLd47kfnKZu6mMbwCfSLngwUfexyvePsrSYERKidxG8Vq4EHE1y696W7RMNVm",
  "key8": "4D97TJ9EHHzq8f8ZsPWkNJQZMkFN8b775fofQZ4nstaWjpZoxp5hDKJHuQoyFqsm5vNi4s9DC5w1ESqLkLBvT9ef",
  "key9": "4myHfjyguL4mf6cb1ouh4NSsVjjUV9iyGxF9nyEUjXtSJiGFgpYjVfGdsm9pQRCdH4caEuGnCFvNhQy38tuTLK98",
  "key10": "4GXerVZ2HA6jQR4iQ5Nt6eQUuvw4tzbsXxkDJpk2PPjjUb14syFE2mSejy4DC5LTNHoBY6f2pWynTPZHKAmGF7SY",
  "key11": "5KLVYcmB8Vny2Hpps7ZqEuYwM8Vgw5WS65DFngh1RGS4v7PNpLQWBcHVywiH8A6JzpJdva198cnfiX6Hr3f8RZwV",
  "key12": "5hu4wdA71PRVMyf2cv12x6Kwt25W32JZZqJ3JgKSmJsu7GCJsaYezUrdBujM3DmDDm7qcEYeqtqmrnzbHYEqrTSu",
  "key13": "4VXUAae6bCYcgRvuBtj6ZXxyXKMrJDaqnHyeEs1Q18AkeFE2YM9yqXR6JPfBwjsorZDg6Q1pHrEidUnWMkTJoMzQ",
  "key14": "m1ghq8gUazT9ZNN4aGdz7eErxrMfZfiz3RbnhZw6JhoqJY78HGHqYCXs21zso11PiNvzy97cRhh1GQh4xFKQn7d",
  "key15": "5jKwNdJ1LFmVfDgif9VHf5iLGHQuoHrkSC5qryvT146as4YtsLPZAZp8sQgsdMPS1BDosDXXN7sqrmo7MBuEPsdS",
  "key16": "2xnP1JhTsRjKJRXgqzicgQkNaDDMb3Y97tA7r9FLHUN1WwFBEBSLYGyDYdEGm8EsgqHbbS5TSA6khuJ4Cfkrscbp",
  "key17": "BWxpwxHyUMzRobnt983Hyjh3TYVewrfgEtsiHs2ztpc2EMQKLWsWhhoXV9fxAWWX6sdHeEobiUBGnJEimgWhajT",
  "key18": "3MGj1ctTm9v5oKsg8GZg5mwUsVE9ejdaNmNBbihCnvd7pJAHg6HxbWLFGpoBcXcdR1tH97wbkCGbYEohuqBHXh1W",
  "key19": "3u9pYYwcg7a4DUd2WKb46HLgQJ1SCXDmxRAsQXy1BUDdwcFFebBGXBvJZySucqVNCn1YgBqZYmb7JwmaJVMHZaWJ",
  "key20": "4GuEq1B33e2R4hM3BAuqkrfL9ouceWohVE4LMzPv1fBYY9RRVgofFTN8kRDh5sNYXEAEbjr1JP3p79WD693fZcxU",
  "key21": "2m22sjdtr8LJNFr1hSAfgkB5wtRUS4n9ax2VAmMTP16MX11Bhbt4K9GZJPUtTKtcByRofb8MZ2g9THbov62UyesZ",
  "key22": "ooxfMDv6zWN2hGQz31rP34m4VvPTe7VBBHepVcfbpvVGDo4pKqTLAqmgGJdN7M8CMGx67LEnX8MckMKeRqkZ3ST",
  "key23": "3JDVeadHd7J3LWJHQAWJc4x6ePurZkfLFWi9MZQNhxQrvVZi9Y5sHk9QSMymuqFGgVMbUBgRscBJyytvLBvRTtef",
  "key24": "3jYqrFkXjRekCMHdP4JoepP7fTS4dzxDLMgmW9Fsy9nY8QKZpvbCzRzqKWv83XF79a2br4HrnKrq56NoQmBpKJzz",
  "key25": "3GyAfMykFDnYNHSvyDVcwwYAJvRbQyMErcbbDQtKajfxUTjBXCz11WxM68vhHn9oCYXGG5tPBcQivxC2cXhHmMHK",
  "key26": "3KfJ6vsw5Cfv1of1osoCQHkPoqf2FzLBCNymGYA5U3ojHdhu2y8CtfwFZiN1JUPo5gCzVQEL3QdM3b1C1kiP6WfA",
  "key27": "2tWaJeXwZVqznJ1fq2mZEZ6ffdoD44eCeThVbqaehvBpHvdYPKvkGb769VPqrLGr1UbXgKEfmkXtENSgBQyqJZHb",
  "key28": "3nYKirpwwTEFDECfHv4AiCvze7sudYWQEgmcqyMWDSLtxTgb7pS65XbZP9pNo6sTCFhE1gyRoqfqmdfkT8ECcnv9",
  "key29": "3dF6yLJSB6ngQHeD1aTwrGQvtTpp5jGnwnLHKnPQkZ5CE7sNj5SBYwQkNAwNryVPiRR3QFGMaheAMUHhv6RKonWa",
  "key30": "4Jn2Jy3weKJh6KrjFWvas1vah3hzNrp62kEc164QKAxUuPMxq1egu73NHFymVbtbKSZ2RJJDS1RG7yGRW3EgGevo",
  "key31": "59cN9VqRhVcwNRmqmziGXewfYggTLiDc5DM7qRbtbnhhkzJrrGiee9WioGCxg6MTEG6DLz9jrvbD9ZRAy9jnVV3y",
  "key32": "4UJmZMVYQfLPjoz7qyDgsmJLJBJSAcNRCbiRPBBXqmJtKYkruSDGUZwyhGACU2aqCx8zscAxA8NfmsmE2X6eozrm",
  "key33": "2GrCXDB5KyMMfpxBUfcNm9XxzEzNV9dzKRZpiu9jCD2CoxWriZthoxq29A1GQFf3nwtrRmtS1X1cidtBxTzXYvb",
  "key34": "61vjmqXtd55PwgCt4uZLJXhBB95MdhJkqXAcjEYy8hKVv7DCPPNNEwWmuhXS1msqJZW8CN3woJHs58B23Nquu4Cw",
  "key35": "igpkg8Q9kyXNjqdkhcfamywFSaGRmFeqyGHVCT5b5JbaFDtTPzVYZzCw8V5ipFRBCq8wwUrNzsKbojEfhHarSeF",
  "key36": "577Ku7y4SHvvKbXsfVaubBAK38uKy9niHE43PybBFQC4wS5QGSNho8fLBq2ZMgcbAg9gUP56HEAfZdT94AqewMcu",
  "key37": "4D6Ec3XU1ZPn9Co9vwwBwdKTmk8ffP7uDSny9WVod1x1PuKrqsbKyCS1u2RXrMAJAeU2UpsDgiyvWbA2a4BKzaP1",
  "key38": "5Pnxhy273b6kmBm1YWCfjyh4JkEhYjBb3FXt5yHt6PTvx5XzjkdbHr1wUczVrmmZE3M1bz8D4vrPnNVwYogvCu5t",
  "key39": "4Ax7kHuYc8oVJLuuqhx9PeY88EY2Tic2Ng9gWhWwGj7XYEapcea7JYMQ63yL2TJo5J6RfMv2zEcPsNQxFFPShCoQ",
  "key40": "66wFD1AVdtgU8iUjjBTJeFxvs8BCTYun7kzJkCyi67ftLwc365x75DXZWY9rKZ18qmJz5tbegtEPq9hNH5fZP7Vh",
  "key41": "Sg32SNgpcqHqP444xB41CMm3GdbR1iTVXhQkYp8etQGdk5soHJxwSDJygu6rFXcFhMuuby2D6uGpE3iNRKFEXwD",
  "key42": "i4xppKFFqEiDWX7tHLeV6c1VADJHibVY9men4nEXQuN7rmyR37R7rMDpUYSJmcF6SZRdYaeYC7dHoV8qyiDoUUb",
  "key43": "5XXfxkc2gWckPycLguCzh6cqh8MfFNjATrSFU6FahPzAiAisHc8Hct4ok5BPpkqvKkob4nzXUCfFAKArCbpWmWR4",
  "key44": "4tYxgakFBGog3qE9WHCb16QKknGS9imQALUuSC4NpCou7gBdcFYHALStcUWKa7xH2yp8c2uMezfw4LgJWc1tHZGR",
  "key45": "SRux1SMRZUTMnsAZXFPQTUSzac64TSCGY5vkvQooSwtpF7npM7ojUtiKnSm941HcSono7Eqf83v12SAKEJNRRpd",
  "key46": "vuehhpBTqSuchaWC3ojZmgKfnTEwVLHbyXLcpJhcunV6aNLVDgNJXF3HbVuSW9cG39Lbeg6yjPDf2QkUABZSpwf",
  "key47": "52ZnjUtJNCKz3ZYDzpWNemwHbVvxRKhriibY5ogCZhEZdvoJGcQibq78Q7Sf4QczCuTwh8NSUh4ffrjQvZDDjwhc",
  "key48": "5uzhVBLojLhoQ8ParUjQGkErBtuhxeT7FdubZW9aXYB6WvS6VtsXUVXKohDX1745pKqsMQEbndtxiqFG8hZyHdhc"
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
