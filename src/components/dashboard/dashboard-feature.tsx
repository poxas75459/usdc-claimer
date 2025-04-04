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
    "56v5kVcPqXWZs19rsupDJVSeUYHZ29khfd1VsH3cwvDfb3rstrmFgjXh1hCUs5353DE7oKYgq5XoXVAhBBbSxi2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dsy18Wx7A27EvBVPEgNHxxD3j5LznmpRgQGs76hgWX3G9q2YQrRT5v2NETUEr1AkYcBJuZRHL986J36mMg8QMj4",
  "key1": "2Po9EtcbH68S8oEQ9RUhr4UMgKCwBaAU8fRRvNPaxcsnqjrKgzFp4BC6PqXsN5yG62VTnc1nA1Tr5nVUXpBp1wzy",
  "key2": "5grQDtLiNoQcNyo27avsGAU6G7GvTmnXMYD7g98xHeJsq1bYvoEM7DqCcrf8TT7kAYi5GgpNnjzXVDoBCWBesh7g",
  "key3": "2nuJh3MofSPhUpWHL2z4zyYv1c8xE94w2KvfC5zm2qcFcqGJnBkjwfFhCvDC7U8AnDz3Azf6XMjPZx3sAMdhUR5D",
  "key4": "vtWKJ7q6QpZBK2c7ict4ZRC3bxufX9F8B8tFDYYGxr4zXqzQEn6WXLFEw31oRKzodCZtFRdfecsXfdCLFGipniv",
  "key5": "3NsQqUAatePzoQLVZhtdDgFxYvsSAuRHDcRR1kTgLWNKB3qhsqQCqk57PebrfNeNTQWB1FXXWYQVuAdzSVMpw483",
  "key6": "3ucw9km9bs7P6FQSeJRft4mSDWcUumKimj9dtuxQGTtBcXbEoYYAic22mv6oVuXDJ4RKiuVGYGJHiL9sS4SwdqdG",
  "key7": "WceqaPQHkUPC4tSeQZDbSmeJXMDPKc1PFNJX4rv9A3tmcCyJXtQLAbp4cDa5U1unLdcx6d8iZ24QDvTXabH92iY",
  "key8": "3UjSB55wXPr92BwtGjgBgKjQ1K94mBXzn5LDirzMPP4t7Hdf8AHGdZH677dkZcGBQ8zycqmJnFcS8Q92vbsWPjbY",
  "key9": "7cyC8AZWPjGRBhP6GRFaiA6Y9m8RBZ8DcybJ5U3WUtnRWKxsJdbRUaBhmhqBjeVFxYtaVLJwQ6UVsFXR4nf4aHT",
  "key10": "5hWDk85wxRBuoYue1fZMv2MGBhDi8WQmh4z52xzD6XxPw4HaSsE2bAF81UA3cRk53ddvJxvqgDbh3EXivUtTBriL",
  "key11": "36jugCPnGN5ogtJzCjLzBCVfpmDrpCjgt49viogHygDC5YLZBQR5mPVUfioUzC4ZxYqGZsCWM8kFSVE1WLeBAgwB",
  "key12": "4NRH2ApuuErYE6hGuTGX19uAD9oWQ9Yq8bKa2BwzyEz6LbYowRBcj67Sauxx95ohf1vRtcvGZGjvxu7NbeGwXhYm",
  "key13": "5MErm5o2GxQcL3zexL6dH2fvGJG2Awqjp36AjT8VwQUbnrePjDF5cL4Jo37etjAzwcgYDgH8m4cbcHfGKxShWeCi",
  "key14": "53Cj75uWPs3tH5aANxvf77tJCgusna5yktj4WNAZ1csj99V8qsxpjPJGESipWYMMSaApibgRRZLqPXnGV2aKc9ti",
  "key15": "2titMWEzrA9p8bheYM2EAKrfAW8g36NM8Abgd22NGGmc2cnSMtWHiHthzgFw1eCaWxFQHG1p9WMjBqDfCzTzfTVz",
  "key16": "5p66iaKcyQL52KQzEe1o52NnWrjJKAyvsE6bfjhjiBCRFoG4ssqotM9grxgugU6GfEVXcFgEooyEaugmhAFyLbJ5",
  "key17": "4XjZ77vWSifVuv9bWDy4ADmsedK5ZEvBuCdGDa9L61cBGfsnsJpxYcKk58CuxqUDpLCcbnd1AFrPjrQJSwAK9jbv",
  "key18": "3njbnDGYin9cxaAgWqR7TxQ8CxXk6HDErXzG2wQBh1Na51aKye739v7h5upPF8XGKdvNPSp8c8Ri9TEW6Fc9JZxL",
  "key19": "5J22hZ1L2sETqgwECMa7CizUqkFwJ1RDDBuC4ETKAbPMT3kPk7dLptYP2RCKCbitBg82beYi8NGe7DQY3uFUGp8h",
  "key20": "jCwCJN473mTsxtidtWAexh3B6edpBgiQpfwwEha1ft2E1WnVpoHFc2ZPEZnZxg3hQ4drf6QYmyXxV1gm9vWPNJp",
  "key21": "3piMmuWfBb3VUgr1KgqU4h74w9ckdCwmaY5KQxJCUoBB11tt9pDHt1zgqKQ3koZpAAHidcPQC1v1ay3DkJYBjFVz",
  "key22": "4SqaVCDfR6iN1NtErXSKSsCjrWs3uk8mGNADyHCRuCAQ8bnwCXpXNTmNJEBXtU5m4PWXtnFxbjUTonCnmy1Ngnfd",
  "key23": "5B2qeZvGgL3mWMCKTSbpBtswbYcTCTGRpGMW9pZQ3jByULM5Prp3L9GfEzmK9hhpFmHiHxCMsK8mTFrtWqrPqEWV",
  "key24": "bMZGBoRq7BmVARgW93JwYTjw6shARTX1Ua5kmC4LoSiCbtpBkfZtgfBfmxouC1xQjkZzqJk6uoR5NHGGnk7rKES",
  "key25": "2K3uCdup3V369Hx2DzeDC8xxqmhSerF2pRysgjkVRaq8rrk1KPW4H4sYgD2ZojQP3uK1YQnMg6WoPhhhjogGwq9y",
  "key26": "5YEqzdLutnCLCPP6LiyzWpo9nfECEPHPUiH83TVFK4QzdPN8j1Er4eSdXj3QZAPGZfC3UWbG9VA5ZgMNqFqimohf",
  "key27": "4pQkFGvFejudrU4ruAFjcG45vNwZgmsKqZLPFPF1NczevNYSRrQxDmNR4kcjfakHqLwdB7ARBGxadfHjLVLSWvgS",
  "key28": "2RZSUbhD84PCJoraATKyP2cC8y6vE6jZPKbxnHiuNhkVzNXuJaYTg46HNtvBj7GphmfwkQxMAzaD8B4ua5uNybo7",
  "key29": "wTSUqAqwACc8WurtpgPWTp89rUiMPT87ogxe3vPPJtiq7SsYLyuPjeC7zrL7KVj9P5kyCU3GJRZKhzHAUb184XD",
  "key30": "44Efdg1kygG7p1wPCdV1a8cYjgCLsghiDN3x1xB56cvk1Ax5uw1ETy5k6Wgh1soDSjQdrpHL3cCAYSvjo2gzut13",
  "key31": "5dE9nAfpsidsgQwAgviebA9gjaUqKF2uLnELhfWPQvn6zwThULt4F2mmibgezMYWzWHJPe5JgoPKMZHChsjFgkR",
  "key32": "2hLHr2KkPqexH1bEzaqMCfw5Kr9bRJTEQfhbQwpaV9Qj4ZmWEE8txpjBt4hFZEjUqZSuW79mZKYkBrWWY6HdRCkt",
  "key33": "2DcjcFfMmyufB5G5Av8UEi4MNWKqhYwZiBjwj3SY8erHDdpxoXNkUDTS1Xx6oxQmDRH2NqaQmYBKCnquTvcaGwL3",
  "key34": "38YdCz4LqbcZH5gSxyLeueR2NqyAkTRmEKoA28uUUtpMvtiHipf2DT9cioFieLrn8CWLg7tXqTCqQ9WrF2as9qjx",
  "key35": "qriQP9N6btHQ5DDq22iEZiW3nEvEuwyeSqUYGrMo4PVa23nHgikoBqJmqZwkMW6PiCaFya1rP4Y75zG3nwEppjQ",
  "key36": "3pDmfWU3wjPSrXmZvxFUBprUoiuHxDYuk5aXN4pZf5Z37H9ZixjThFGhxtzx3pNTikw1S2L278SuFZKvLKMqLMHd",
  "key37": "nGAjQRvV78MxZFLprttfQCLVh1KtwHPqgzk9Q831mZ1sEu7psAknnFm9eqygYBMa9v5CeBihJc7tkgmXLwLsMds",
  "key38": "5CrQQzsgk3BGWPHiWiRaefQ4GutdhFPwjpdaoUYazg74SYS4sZjqnHZVsSWBr7rjhV2cqkQ67LPYQszSdvVqGwcQ",
  "key39": "5NJYNpnceTPEy3hdVcoJC8D4GfFnnj4xVK9dFQWxn9MdycvungpHXcsBCsSobys1MdZTsNnzM9HiG94raYDowzGJ",
  "key40": "4BELF7gMJNoo6dxxxJ1VACdvAcVmFAsg9QVeoEG43nU78fPyk8Kzm63UckgtCRTu6Snx31Rav63NQ3DKF53WrFHq",
  "key41": "4BbKJ1TEtFtPyMhEvMF8sgS3Rgs1aH8WsZPCCvaEtXWQnRaruWqD7ZYYctW21cgivcKXSAM4dtHajGBwJjmtLm2E",
  "key42": "3911ctjenPqigo7pHKeTcDpMsexuKkRidETBxKVT266sn9VrTea3kypjPRvaqELKedNoJ6HjD3pCX61ggW5xowYq",
  "key43": "5wh2zFExEKvHA9CZG753vv3og6WQGyMZ6x6CyibxCPtEFLJY8uFJp139gdoaRirC5n1oHAzmxuctsQTQoih31NrJ",
  "key44": "KuXPPjPtk18YanhDgFUqbA5KYaEeyUN6MPCx9h2i5Lm89zC69RzXrGTqKJSWo7Eixq5zbj61h9qVNo4XT44PnRB"
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
