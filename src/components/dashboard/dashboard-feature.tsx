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
    "3eT1KfFTMgncQNJfxLET9U5RqccnKeU4LrSk5kM9zjXBZdjWoMfsCoyQfLKfhq3BsKEsvKHXFGLRvKNVqYH635Lm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xi83JJvrFRKgeCojQdBRhKM9zGFxUen9b38x7YRYu3KBCuG4tPZqrRQg4tGAA2smqJopKF4wH3vCRK5UFtAh7Rf",
  "key1": "YhWgwDZg9RpszU6UVAjorfB93WXHr2Ux5SXjeextGQDnNxKgfSJfxeS6po8wLrigKkinpHqya3ufxJhY4z67nKj",
  "key2": "n4YUS1nDxGdcMS8GdezJgbWMzeHgAWJru4cvTQS5axnJqijcrqeKE5ao7yr18AcwSvCbdq8KY5TiiUnte1SLZzH",
  "key3": "3qMZ89V89u5LrEQ2NUVNKUcT7PiWUBxGfPX2p5WkmZ6ReA2qEFXEMJJivFE5b3KSkDMNk5iDGJJE329v7bq9uLTS",
  "key4": "2YNevZjxLsM43VTHvxsBkPBR7s3GxBY5CW1dSEdKKGoY4D8Qt2kcfrk81JnZGYLDa8qLDmpdavWEqdvCKwCrMyfz",
  "key5": "2gnqmF51nZAWXiXfAKbCHzJQYgy9UUD6TE95rFoeR8UdrFmEpjo9vr72APfVAzvQVztTRUukrdanemqfPtp8WvPd",
  "key6": "4NaoaQhBEABFKnHJg9S5UpmrvcitcjTHdWbqREJVXb1L6nFg5wiuakkeZEtw5iYFMEGtejSNYAo6RYexmwZhSBXp",
  "key7": "JnW8J6D1CpRSWzoaXJhgdcAKEgv198dSKBeopZKyWKhi1GWU4Yns1zQX4eBqDkhYcCyfin8tPM6rrYadzFvDssH",
  "key8": "KkCLrrD2tL3TKpPkXjm3CeuHmBM4riMqAFYRKLLyRnZb24pqZbBsfwhxNWpAwGAo5bVLqYCcops9n4DMeSvLL4G",
  "key9": "RYGm3juSUjbpw6gRiLeFJRGEnQpae4z7WuoqfdbWYkyC62a5CtyTCy86vuxqCBabsSG2jKmRgcJCoBYiUF2e6mp",
  "key10": "65EYp4mcPgorGuygfCuxxCF4s9pDgzMxLGU1uWNtG8Runku4gh6DtYgJyFvHkuDtSvicamnyA193StGGvvpEzia5",
  "key11": "3eoTZYYCgE3qSSc4jmzAVpyabhBSi8adSjFE8ZqmX33m9Vut4TDMbhCnrMT6WxH2d8BkwnHy4Ahn7njCsSCpvaMi",
  "key12": "3VYq1X8TMYVNpZ8JVBFH5o14MxzrW4WPn29U2bzFF4QVTK8yZFxMsCJkYpdRA1DTMkWdGCGVQSAZ7WbFu2mDSMvX",
  "key13": "5LQaEVhzhpjzGMbqFmeccCp4czq9wo5tqQrjybkv2RvLmqSGPwcprhQCkPzWG2EKrk97U7qkiXqmc5HPBCeX8kkG",
  "key14": "3nitLX3EHNFjPVaDmjgo4BXVyHBBeGnLAyTw3xk8M3Rar4xGdES93X3Lr6qtDRoSxrb4cJ3itT8jZewt7AYnAoZ3",
  "key15": "3m35jPNQYEQBEizoo4kwnaNDjwdmaw99BxF5KT4fyJJweTQuYfwG68eHuaLDufXY4TCBEdaSca4XKd9TNupQ99qX",
  "key16": "63Gt9BAWjEQ1qY9McXHerTFCSak5qqzSo1W6kXXb4VVACLxbZRaGYKN6jvp6DsWUv9F3cUP6fAq9uDLtwgzrVoHd",
  "key17": "4vyF1bCxEn3SGv3uN13twh2hEemN5xNaqb1yFkHdPeifVYXchV1Yb3KYEbL48rVZBCcu2LsSR66Ecv7E5ZPEUCEw",
  "key18": "4GSLokacbHTtFtpQDLUscmzJQf6iA8vRrQnf62NawCnoEndRAT3SzAg2ciWrJXsRpgB2vL8dcYkAMD764Vh9n2hw",
  "key19": "3zXznB83CFvnu8zY5bWJGndRNdynUAnzu5a1saDxbpRjSLSwW8gYE1aNfEYN5XtCkhT4ChExCuC7CCu8N355psng",
  "key20": "3g2PipmVGhVvFH4sy9RE3kQnPtNjvenU6Qn6U4Ty34SZvZbeGE4jRYzvAT9PtbaFomiRPyuw8MCHSq7oqx7qXzTQ",
  "key21": "5omm7x7NE8HyPFHi56XBLBNjzzVBprMNqPhE1HV4GCoUHrgDXdrpw1PV9pVGB7kukj4D1hom7YZkFSsdBrGsNknB",
  "key22": "21JKw9FjRsskNES5dK2RHikTMAWyY5KMBsRSZmzbLbqG92kqZk9sNWWcUfaedPSABavWAM4AJqr3pUmEAFbYqjWE",
  "key23": "5iA4XrJc3dTmoLzfrDDpEk84ErGX1k8LhV4H5hRugoLDNjwkz26Wc7Gc1Wb3mVEDXQLpxuUpD3MuqQRm8pWcib9j",
  "key24": "2AAUo1Hr1taavRDYujHD1oZWmKWFrfZXBKCeZh72LiEinopr6jeUvL96xyQvCLPjC9opkBsMbz1utbBzqvz385go",
  "key25": "3zifY6GvE8MWaVyqu7J7ptyK51yinPhZdjwkX5HiC85TG4wmD3DXnFthZ9Z4dw2Q4nJfP79pJiVpW66tfHq1aSjy",
  "key26": "3J4t23h5tGxuNX9U4im676BbnqGeUjRngaV4UthdXYLYrYY9veYHkiDRAK2wwKbTfNZHcohgPXt7ooaSxMoQtXEf",
  "key27": "27TB7d6KbYyPsD1k9w2RdZytnjPxhDYeJwvERXzrMNaG8hNvGZBJPX5fNygm5QUf1y8sdxaQt5sqwr9vLc3LE78V",
  "key28": "3SFUKQ8B5aS7t8uooJ1YZBUf3rGzBvJR1QMH1rSjNJCxQSUo28oq1tQfFFTJc3kMuiPSQ5ef8MbWFJNULqhPjucP",
  "key29": "3JZcZbuFSZALFVni1EqPiv553BRvHzvyBtEFQ4F1ZkYXArE7xPbjgYePWRASHRFQ8Rs7sDAZN7C9kDJKMZExEFyW",
  "key30": "58UGj9ruRHan4reCG3vpvNExcJcLG97DJQbZoEGFjCrFrXuD3LdJp1Mapgi7ASQxbSCtJpEj2FM9drzcSbamYLUW",
  "key31": "3soG4MX73s2tTmc8omkLjksbwhT1EHaWmyes4zn5B3GHJfpu6dumMc5SeoFpPrF5dL3fwjsMA5KEcyE79nWBcyPM",
  "key32": "4KryV1mMcqn8JXRMcGoCey6sHABCaBnCJMGWkTF8Qvuezumo8dHKvTg28QgWDSsGiGa5rv8afEGez2Ki79TFZGBW",
  "key33": "3U5TbDxcyqxH9kSobvR7C4uJYSKd3SvfBfzSsfjMSFTvmF7dKXyvqiPPufz62MapfKbPFf5j1yz5it1GJP6ZHSde",
  "key34": "2H92HVTzFe9rSkZGYt5unhZkyNEYMwskqMNEomsWdska4pcfBW3pxajCfKuj74UFyswTvNuyJhTB31xDJqyJuJh9",
  "key35": "5TM6fZGaanHsfmAGfmov5iqegqkoNpd74yMrWQ9V7FwkGg4s9yCxCrX8X6g6uDSVMLsHYDbrCaJDBoi2dBVLvxV5"
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
