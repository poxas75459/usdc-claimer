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
    "R75qQ3MtxaGVnArYEV1aef9pGvLAHajWhz4aLpBNCZ7juHgD7DGedE8pYJNFAWY8t1T5VXLPmKZiGnnJKBXjosf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VTEJZyEA4EeaijmQzJakTea2kmSe5eAJZrSSHmtxUghBk7MTAzfCv8frSyBaGJV7A7AJ69e6i5gZ65WpouZmdvh",
  "key1": "4juPhHHysR8LsrdavHUvnvuVFoHGkPXF7uFUngnRGD3LCz9EF68f8hYSW8yHVmbRrB3nCGuK6La4UBia3ERsHKWd",
  "key2": "5tautvk8URAB5N69cntkdgR32x3sVmMXRzVLYgMmChKxdpssKP22dxMKk9n9kzHuJLJnbFuJb3g16Akh4cwrgnsy",
  "key3": "4vogriYow4ySF9iMiDTuAR2WFvXRuaZMuRNtZYTEfJA4NhbZWfeYBAQUDPzqAyuWa5sPFSvFsDe5XWRSLbLoQ5Rb",
  "key4": "35HShoNpnEKYWqLFUJSpRkXKVB3pdgGXb1BXjpJuXhcpxjXZ5drRRVrFMwZYmyWMbdtQTMhrxSpGz5x1ycPt1Xhf",
  "key5": "LVjHvmDk3L4WsFscbCRVh4i7eKiQVPd2EXBnhBWqXSVkUieVW5q1PL3suvAaaHjgPHEe1hK5RgeuGSRjUZuoSEo",
  "key6": "2Qh3qt6QTh1Ry9DrQ1o5DL7GS9z7xYTzukxPTd3z1Fu1CA4qzjPnPtSLnkMf4CSvktCt52726xpW94F3JUz3Ebxa",
  "key7": "5uyK7JKez97t8wLNsriidxzrtyHf1rJHZoqSsF1GUmE3KVW84QgFNjPa9CGVZBYXo1wnLifg2JFPbc2N7rx5j2vv",
  "key8": "2JPV6yQbViAzhFdqfwjX1UeRg6aDMPHyoGpuqg1kNzNvxXNajPUBKTbdiXvy7W4U9DBj2b5qTSqvoTdNd5iYUMJF",
  "key9": "3vFTRUoyk1tFCi3oAaG22UwZVoa6mEWshnHhUwkufth5oL7uD9ndqRxapQo7qhFspZD59WYRvhxE8mRSXvuUMpud",
  "key10": "5CXZr8Cx8hHQ8UTH3y7DjQrSziSz1NEjvAQvjiayoP55t1SX5JPbUcXoxxz5RNXSW2e9vVoBvo2y3zdYNTQLS7H5",
  "key11": "5YifLTpHgKccoN6wJxFixHLeTHykzKAeisGZea596M6KG8NeRP4jYdU3zHk7sthfBJDtZxM2anobRH9TsCAqkLmb",
  "key12": "2HBsEA1ZGPPZkg9Pc7ajvxjs6T4ZbMEjBFWzvgqEjafHXtsjMHWd9SXcJ9NkUmkmkt78istnZ65vFq6BpggBZmRW",
  "key13": "Tnpbs6GmWWWAqe7Gpt6y4FU6gagH2E6NpmRLmwq4X3BiqhJ8adHT4x4H67oVsSKAPiEtED1cMgJoa5eT9i3nCoz",
  "key14": "3r3UgxmGDV2WKJu6E94Co5T5hvMLUu5tfh1sPD6kkgajYvkSxPYUyzdj3ZrLHrVR8KrN6g9rSm8zF2QQuibFFzHz",
  "key15": "4VL8E97xy8LSiqwq8DTN1ZMY3gMDKMJLZxx6ZmGx3VtB6vA9eTDYtrQ1iCxHnnijVH8m9ZwxTFu5FPpW4YzhHadu",
  "key16": "JxvdBytW82DoV5Sdkenw9P4FSDBBTLfo8TmJYLRYk4n2Kha4bgkbv5e7GYhZX6ciHa4s1eQgAYB1YSfksk9tQ3Q",
  "key17": "2qMkXy229pvyrHk628Vf4gZz1jSjG6Gxmk7mZ9txF2ou946Baw7B9AJ9zMXyn1WHmPthRq5uE3ncQzbcc2NHSsBv",
  "key18": "5zQJvbBhiR7LxvyqxMy3Q7TN1ndUWc2jB9hHd7CVzHHiXVsNqmiRBoMZEzfsL52PprdAueR84avxzaaajzjeqErK",
  "key19": "52sPKXLhfammV2D5oPvp5p4UCBKpkk3mr9T4BEsWWbC6sWmzrsnEEfv1ca8BS7mjVZGBGQR9UKtiN6i4QY4BACEn",
  "key20": "5jxhTkX12EKwmX4zpoVU6efMW3H4VkB7ZzvbYYu1RvL8RxRVu2a3boFWr6mxYaodvP81aRQ4JYqTsb4Lej7J3vqm",
  "key21": "5haEJCn6kzHWGT3kdsTa58nXTAeMbGrqvruYThXfAkvEsi6EkvGR35A1qvwSe1p3DRByCU9ufn3QfnEMos2HkUug",
  "key22": "C11PM5j8Vn6s3LAhbNf5bm5cG2NVcTyBA9aZUE4wmUwBJ662Qvrozk9TMRtcXkvtrBwh97bM2tUzzoeaehhKSkS",
  "key23": "39FrjfpvDu7FxMVxrm5vJ6moqbiB9fsPprSf7cDvsHNGt6KVfGHRuqppCGFWUbV6hdE5C2m2Fok16URrjTAabQTK",
  "key24": "2xKPromqA9YHKJqAbFrAHXtXMBzi2CdaFybvRfi6LEzN77Xm4YvgdQKwZEU3vYS4M9hJtrJgUVHATT3THVJicseV",
  "key25": "3eRexHEysNBTm7Wc9G6GzRCiW2uvAQKftRPFCijK8EtE9r46Ug4Vy418FovW8DxDJDK8s2M1EkXw2WzDtavfeVgu",
  "key26": "4rj5ZCNc4qgtB4BFuwuAaNRYuAUK2Ne7TqmSTaoJqXFLS2s2wUDzJUCB3k7emMDM8jvnko9RuDyjen5a1Bxw5XUJ",
  "key27": "f2kQbukEV2xq8xeyacLpAtUCu4h85tmXnc4Tfia2zvwz5jFn1uwSB1qPko4V6XvHSdN9BSqo4M6fsKsQ3rHVQUG",
  "key28": "3mjynQDFTpDyXrPi5yqLzNoErmP7h3Trrq3fgGWFWHEAKRXVnHDBu7hBkce54A43ptaSGzFFW8CpEYUrmYWwpfdc",
  "key29": "uqSuyjsB9UD5BWJqYdNSRF9mnsRr7p91znzyvVPtRofE9eDDY3KSr7Agx7u1wZjDkeZAUSGHnE1NYwPkGJ1FPkk"
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
