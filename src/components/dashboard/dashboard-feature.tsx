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
    "2dN8fnHp71Cf2QQqc7Dunffe714cSrsBAGfNYfXqW8WeR88cyb2thqxraQkQwxWkshacTnSbTmtfKisEzbRJscsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WUbt7tPyVXKhPQTiGf8q51eLxZtNje6Efsf7QzvfjdjEiCp74w2huwxqeRmcWXH4Qi2hz8yYbeNftPHNV65Ssts",
  "key1": "3RfwQygqGDNX34szYJNbPG74BmfZeGu8a3p52F1FP4bsx35SNYKHKmJuLzTDaVSc72BKpJ26kEqai6ZZdoy6o4RV",
  "key2": "2HtzULgPKpFevmFzwje9e8hi3QzTRPmqPteM8Xc3RQkA38mjtMidhzwsKdNpBJP3yJjc1TnsD2VceXqcHo5Pu4tM",
  "key3": "4Etv7BMZvY4cubjYH5xrh3kQuo1zWsdXEm7eugsWLv4aWbfpSDs3PkELHmEWNXd9nMbNx2hFsr2b72w5mU95RT1q",
  "key4": "3R26Fk3EeUnmzKUe6NSM38AfLMaUFKKDnp7bStt2mre6TeFqLYvHCKPKVWttTqAnFfrT4r7zs1hmLDucTpyWWd4W",
  "key5": "4V1fckmoL8SKCSP4UiNVkLcxH5E7X1zqcd3y8Kq1R4RmoXjHwfC7kUU3DyPLymCB8CshmeiHANxr4JjP3fKytkbu",
  "key6": "3Hi8snXeH4bV2CW2KaVa3eCpWyCCm84CmeQD9Ev4TGnPaSjzTTB46Ras4bKa5cDte67mmxmg2eutvRfwybcj4BqX",
  "key7": "2L3eq798zfD5y8fhidZhd2EQGWXLZR2bsnBve192VsifWxHyPBg8313Lnx8rLKWRuUixTeGoihtxpu6XsEvf8WZR",
  "key8": "2e2aXueXDjLgNE2SUFdXx3vbZ4UuEj6GCL8WZa83w7AgD7B2TPZ5G6gAHEjEXcrrkMmHme7DU81W6nYjgu3aFsyA",
  "key9": "2GD5FSD8aeqJmDVb9GmniZVFNXTfGwEyrgpNSmbgNuzg5tmnrhtVmuBpESmogV5GQpBeyqPstpYPPgSDNNhUYNFE",
  "key10": "3EJt6vKyRWg7WNdNmbG4EiCiG5PeG4o6HnFWnEQt6aVU1jAq2v85oqz3R6AXAZbcEh3SXPANK3EVhvypQMuX19wp",
  "key11": "47JsctXV8iACXWd8cSHUWXkfhSwGwWdnuJ8Ptsx1iRkmtZgVvoQbecmYVXMrGx1rBJVpyJFB5YbwDveiHvpBkiko",
  "key12": "53SooGuvBfAS6ztoga1oPRMtjikR22fmipt8rFD5z9WYHfs1JMPiD97FSXEdYSVw6UVPAPDuiipAR6aLYTDpYw6A",
  "key13": "3Mk9A5qG3qTHgT1aLYM9TM4swcqtbGJtwtdxAB2JaWsWzkCZ3St3jtp7zFYGGBEw4HAbXLw2ARQT5zKGRdQqn8A3",
  "key14": "iGafJXfRbQAJjFEmRJvNWS4CsrSKUZwwcn416uicvAK82f6wd2W1rLqgKiKYJKtDpe6Lenj9gKNHYbWU6avRfij",
  "key15": "2YqUfWnduKiz7kZXtU8iBu6ApJUbp1z4JQntco9s5tFknCajmKFXHv3DserHRMLPWVGnPSXnbSd3aPCjfk5XrEkz",
  "key16": "2eStkvwDeCt62wpSBq4RUnnccVtHK7ag2VVUMKaJyS7LAncV5TyfRuo3TwMz1Qk6daWQN12X9dP38zsj3szoeiRY",
  "key17": "5xYc1zb6QVqvFz8i4y3oXvVFGBu69tvV4J5R2vXHgR2qgHcGnKp95vzxhWRx4asyePcFtxrtHv3wBADPeb2mbHtt",
  "key18": "KnXcC6rk4jzefkyW4C1oo2tNpmbfykgessA49FKrEGGSN49Wb8FtVgFFKv5t9EJ9ovysNN6PFupAqP61VXgddNx",
  "key19": "67CSHihzMYsCnCAuSSwkJo6neXdubJW5PFZbFE4mAvbA6EHyV6TsccwMSbLxRcdftTsp6u4VK9zrBqLjEiHahqxe",
  "key20": "2Jox3bdjZaa9cW9gJhxnNk3hPyQEP5pXPrKCkujXtrLVaknEo22SY6Gpom5mJtKqUCxsMtWcTLHf2yK9rB7fHSRG",
  "key21": "3ByW4dFiQ7yyjkdyLtv4dvzipbu2bvqFCwCrqm6o7vCd9fvTsU41vDMSQUqvgngGq3yK6QWyB3SeL6aEMK7Jbhkn",
  "key22": "2cLYEiSsFVGm7iC3Q4uxtSxFhMdJcbnU7mYeR1k4soTMbW5dscHaC9SJf9EWHiyeRkXr6cbBav2eUH98ApMqvFyM",
  "key23": "2joWA9n6n2BRX3mHh5poJo7HzyfiCxx2qbr9fRfyLiUnJQkBEcFztBBfzmvP4zFvChm6LgAnB5EQPbqjBfk36pho",
  "key24": "WPFsqgmVBpAWUCixGZbcdxr9L2y8ArTzqEFYRL7dFQQkRf64ZMKd3m8DgzHgRz7sikiDAVQ8ZyuyDKaaNXjg216",
  "key25": "32wu3HLYuWfLZpRE3aEorq1tA9gin1prJMLRKKZNjDJcwE5TXzrtKhoLiUwUhhketg7ZCJzsHMVAQzASUcdRKEzf",
  "key26": "3Aa76xieQh2z1k8oG8HqVzDzVqVthBCQmfrN1sqCi7LAhDLGi4XfmE9jqCEioAa727sjx59VZfK2pcPV1CFCp25o",
  "key27": "5dfMvjSWE7cfowAS196rHEth3N9rncLr9F5un8UyfLBAunLKkr79aRtwXqJKwcVFRkobWMvRJD6m7PcK5CnasQsb",
  "key28": "krtFYJY3YNg6fDq6PvGdeUTu2qeYXxTz8WjscNDsky58oqEQXrRvQ5GHt6gN4gYAUViuhczgzzqfXfhGBqbA5Yw",
  "key29": "2djtYPf6bR5M2T7svXRV3Jner84EURBJ6ngeRtrutWUTgxjCe2yRAX7dparLapyVuVR8BLwBD8fT2SQEnULifTyR",
  "key30": "4WS1TReVDUwTgGPP4GPUvPqCbiqHdMX91yXUYGXDQA3EB8gN3U2Lti513M1R3AVkKoqgyZZ58yBASzFRB7Coyqmj",
  "key31": "5ViAes1MaHUyde9gpeJrQ3JDdjVKoJrQSqWdWagDqM29XzX4QR9wsmc8B3wxDNDcjBFZMJX3MaLdZwCPbp4YWSW6",
  "key32": "2s1PpKtYJALR5ATSYJrS5wqcFJq31ZwpG327VEQ3VK4UvNvbxkzC2P5KjJFj9kvGPnA3d2B6wqhCtQEPz3dydRNj",
  "key33": "LY4HPM7RVaacSZG5wWhm7Zzv1qnjcjuULJp3mnwXqig9LGTjWsJJtmWXjqwdHnMYq2wPg21zcchqpfmQicd99ZT",
  "key34": "w7hzM18AagYxDrpCA112m8zrXYMqwqEkuJjsShv8CDVWVUz4C3UxBkMG5E9psGvNCy6Y3BizEryhGRTtxXdL84x",
  "key35": "3wHbkYweNV75Ge9FWwJPjQYQ26kjnGTk3RrXHAHPBVvs54bzP9pY28MAAiVB3YuL6mPKHHsMyjeTxG2sLBUqfof8",
  "key36": "xEhcV4hAcP8NsVoPYrvAypBGv91ERCmJZuVAbPooRHbeVQQhPr37jv9yBGpZfx3PAG9QRpy5sFmwBarpC9Qbb9s",
  "key37": "4gNo2GM2pSVzCeKMLnazxgPGdsEeNjqjyx6iHfwNxTLw18LJLnFngcV6mM8geDgyUCVkzGrjDvp6MoVH1Wsf6AL9",
  "key38": "5doxY2Quh8UJemdck8Z6qXGF13H8x78pTFUiYjZxXMWN1xGWH6gp9dYgKrmAUiUoZWxS2QDtCxAYtHg4GGve85E3",
  "key39": "3bb28rmJmqZARx4svXmoXy1EjQKhbMop42G11PAYCCreP66JfTMnKQNR2YFyNT9vKngTmHv9Z9eYuRTDaKoyvuDc",
  "key40": "5U2WSyAbCu1GiPhYvFuURB6yTcBp7xZUEfVfk2meHThKLQCgwTzmRs2rVKM4JUK5nuG8Qhtw81Ap8PEuAM3Z3Jnx"
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
