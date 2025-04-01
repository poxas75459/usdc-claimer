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
    "nKE3JqcjFXhatSnBBBwJVJtMsRFuaFcWFcKq1x8VF8SUg145Gjs5HEguLptuKAKHyt4zNH1sayUxywZa79Yj1Wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DoL9NoAM15DdrEWubzXebZoZaJmdRtwtuMYQnxuEWue23YpngwMVqcSaMMhBvDJeQrTC2ejJB1hHLtHKGV4KzWk",
  "key1": "392nxKxVWtTxqjeGnEDxQU6bF38Kg4BJhhmGoeHuPXzsnp9X3NgVT1ftR7DSi7YPnLrg5MSWeDNo1i7t83HUYVkL",
  "key2": "2DJxahFfw1FNHsmN51mcbW2NS9XNNUizSq1J33cUDu9FWPV9CC1AbpXx669fiAVKNNevx56aEGGk9MtRL27NG6ae",
  "key3": "uaM4oXbKsta5k61zpswpWqYQUCGRhNR1RtwibL5KJDcwdCxcQAQrtxqHTSY246TC2ZJGwEF22mu4oPk8KnyGKBD",
  "key4": "aF6Ukiz2Q2tHEQ8hAacvLCZwNUKBguFGjxmzrkUX7tFqsQsTDYKs2wR8ugHwGhiUPhGBcs3yNPouqUPeQdetj2r",
  "key5": "4bxvnq6PwbJK5zB72LvVUEyqsHXevv3gPMNM597wiVoM4e6fHM65eVHVDcJmSp6HtaG5HjGKGkK7FmMAV2UM1LEZ",
  "key6": "4r3Fb9LSTzXEFK4GiaraQ7bJQVvoZ83bn53Kx8pofwfocURqcmCeXcQSEB8Rn1Rem8Rbk8X5KpLSUCGiaD9xqQxY",
  "key7": "PFDDgufXQuFcSbrUVLFnMaLEfHRFqq4uRyEqG3GrpGm2E16D1cSGQctggCYAd1baDvYbtX4f7cKrRbwmquURJXi",
  "key8": "2nQkWLxp4p9YiFBGjHFJiegVdsnVyyYHSvQQ8WZr48tEqUTQyJYbxHDDM9JqSEwD4TaPURevDXx8YFm57iQPN1Fx",
  "key9": "5Ncvbr75T7n4HuixpSG8L1quj7NCi7MVjQichEQ6wJiejun4o2n5m52TVX4Ty2jq8FinaQtwthYs2RBZ9H5ANjrg",
  "key10": "3LZYFBg4aLCVh1jCPRfSuHJ1t3EtKQrpns42fvaYb3p6herT3ZUHvxdsjRisJ53poGPztyN34uniCntH3vXwpFZx",
  "key11": "5NFvtgguVbDTYQ7Qty6t75KyGq68xSSNVXQ2cSXUj3tfxFDULeRDCHhLgeqwdXVdkx9bC5d4WaBFn3LLtQFK5hjD",
  "key12": "3g4FmB4zCpdHDRgyL7sDRMRjw2dVGhoRPKMo5skLbwoRzBvuxkT3ncLymBYGJtdHAtn77s2KSi9twtw66TWVBHbo",
  "key13": "36xeJJTJXf5EeaWaBPDfWpZiYHoTvMtUUxoYG8CN1cE18UZM5PupWkF8a75p5BrqCsmyfjTYXJQdqZHta9FLAhKk",
  "key14": "56dPHwfsh1TMG69AFikfWCpH3teNfmZM51ofgPckbK5xiytnJiAWn7TKZMuEN2M2JxREuzXzVciQo22WSDKw1Xaq",
  "key15": "36xFRLtyU6MHmgmXTijzR7vg2spwe4AkJHCNqhuEuVcCpgxgoSMMJJxpz1c7hPPf6GoUdw6MQSp7vvMhywckZXdw",
  "key16": "64mLR2Sv8iZMC2jFhg5YnEBuhujJYQo7AHskG3RqdrAzw3sfjZx22Xgs2bEiQRBAnPuW1qNgmUStKeuadmfzSR9q",
  "key17": "2HgU85xk73BmMoEX4ZDkm97LikX7H2q148oUWEt9y5F41NT9JibpVkzmj9QyyDiAsbqhBP7MYtvmvqoBZ8sjTj7y",
  "key18": "2WsebXmRD596er1Dnyqd2fMYUrtSSGumhCwUR5sDF1i7BV8dehMJyJHczY2Pfqf4mD6qCKFHtLAeR59euDq9hhj1",
  "key19": "2T42624za4KJV9i99dFoNMtUmtLc6kRXXaf3bL3RK2Ek3Pg38gRXayyj1HCHYxwWXbPxk65d7GdDkgbUmSix2TkH",
  "key20": "49nPaBosjATSpXtMSRTeTuaQGZ2kjFYcyWNAs2CTiYFQ1wZCL6owmfMDxPKtxJHsykyLwGeHcQKAHDRoRAybbQFj",
  "key21": "3pLBy4QLgRreP6AwQ1EEjVc4EsgDXYPY581STdks3i3zG8dE4Y4PbAAaXY5nY2aKakf625sJhw4zWDxvxMToVk89",
  "key22": "3gDrzNejauZLzV7J8gbrLrsoHfNnEDn2cxGBfPU2YqxweW29bXkQFGFeKYwwXUkj6zLPtoJq59rLQNhwn5ALJGfB",
  "key23": "4SfNx4VXtjqVsT65BYeUqeiHbru9ibbS73rPE7CDBZbaz9xehWfuneKEdHGcSD5TFenFsZqQarmTeD3Pa8Vpz4bD",
  "key24": "28qw43MM2HDwbQ1dvmpjp3NZvx14KtVApSMxZRqcuVB4QYxNpv3YGbNXW3f5CLCEgs4wnGkK5fy6HAJFPiDuiYBV",
  "key25": "3JfMXgFrBtL9R5gubmNt2D2CtgPebpk315T8xmofvfBz5yB92cCvUtYFYUmkrjzda6hkPKq78JVKMh4P9SYNZoWQ",
  "key26": "4FMMRK8XuJ9xr48Mo5vPRpxZEeXjCv14aTW4p5yA3g4y6qhc3YW2MhESTZTvMSsmvGxTs5vNDZWGJosCzpL8eF9T",
  "key27": "2yhWf2jfEjjEfMtVVXnUT9TemPmriRaz5YWbW1PqaEaBDNQLMf4nzMNAffLwJ2x2x7smXVsYqeYpDDQb9RU9BzCm",
  "key28": "RsZorc4cCr1uXCbb7aTvXTRfQpTkBPtEkuJz4FutrQ3ihMc17fS8xpio23cB377UWJdAvJx3tRHCKv3sBMbEgnK",
  "key29": "5z5nzTUASZg6685HvhP4wZasZocj6zcx4hYm7riELN3nj7pdJC2iXLdMQ2aw7sycgA3gbddc789MMzUZR86Rk4x6",
  "key30": "2QQ7mAptdUtV6ttkd86sWp7Db6xXuq9QFZUVY8gexG63GPjimtinRfgiUSjVWzGcSExgZyqxaSRzJas9LJtkC6Fx",
  "key31": "4jkM1txoddLbPNrustYtrtXspWdn5bW4XoMrqwThX2BMjpkUd5rn3oRw4AZtnQSPGzg7Gcs58nj2wVMTgFYeH3Db",
  "key32": "5bYfZ3ymXQsHgE9VtbwPrcMqSqfJ8gqj8FUSMZeZNNZe1GvehDovx4vTRoNWqiJfMTVqMEP2QrX46ViYraZR5VwM",
  "key33": "2Rq5QTxgrs5FP5kwf8iumGANExJ73in6aac48SCXCxMkJXmRs6qJ1heGxrHM8MPf4KU7Ze5SbiEozpuEU2ouE7nQ",
  "key34": "tyRUuzhFjNUXQjFJgdhsaxWYNwh7iDDAGPug9yXSdUb8A87cgA89Sy3VUiVCyYLJiYVLnkJivX7iw3sJGzioiv9",
  "key35": "5ieZjHoRSdRmeNvHKNr9DWnt5y45BqwboPqugXpteW95yo3Uf1EKE4ciLXbPEC2zY5GjBWd1MjZKwhGBsgB5yxXJ",
  "key36": "2xTuXhc8bd8AyBE19k3zpKibXz7qJbfmtvyfggMXBj8USiYtuaKHBx1RhgXnVBH4TVfakz5gtnD2bQdWVG6wbAR3",
  "key37": "2GcCVsrupp8xDpSU5QFk4V8iFXU5h2uWL8nPTmqP3ojiX6WrtHb8j3H3d1AutUoeHWhw4Nfv4Tc2bSovTGxPBeJd",
  "key38": "5AJnDEewMEETaefciTNV7sRmPwv6D7JQRHCJ9fHoYWy4vSikwfYNGtSJ6jaJdWSfKw4yjdokxQxiBRH4fTPoebAL",
  "key39": "5AAt3GWLGNizMaVbpoEsNDN9iHE1qkJzzBdv2GcFQ5iZ5nHPwXXbFXYt51SxCkhdhEi5uEkhjWdhxF1ggG78fNW1",
  "key40": "2VRZTi73scb6VbYom2miVFW9f43AXKA1bHdXh69ezS8khHSQDx6sVQpz69ULJtyPUDKgnx2Lqehp8o3i1sFgaLvN",
  "key41": "2cmdtciYMGSaXXQT4ef2UmNnFxUZgQMg8HNE9fJRhBk2fiorYWxnNDfDBFeyiZBez1rQKbzPLgpohsFpeAjydcT7",
  "key42": "AMiNkcYpVKjuasWjXADgAZ5YVy7mfJZHrQTJetbR3bahFSQVVYEoR7M4vMdGoHNcVk92cgVZzQrpZ8KSiMJ97RE"
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
