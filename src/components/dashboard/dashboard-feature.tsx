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
    "2PrYdjZXLm9CHdYaep5Ts7a7X4kJqVQjgkAf7hfbP1dTCutyWHqNG4wwyhjWK2B6VJkvGT1pCLSzoKKqujSQLrhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34oB2Sg8jT2mU2REAtyRMTEUTSX5uRxAsU1PGpU1fwZjEHzegPZPtCSXFQsMsKEZkZ65ueWps9ayxBPyPGe52GGy",
  "key1": "3Z1wkYbspc1b1yuqJ2GjuiLgY55XpS2yWLQFee4JvNLuqjbPvrpCax81Pc5HSPf3tKGKDRhaHfR5MNNxGQKbVVvX",
  "key2": "3cxp3Meo8YXsKwPmhSTmiAkemeN5jyRi6EKMntaGroxPchZAKrpNtdYdkJ1w1eCHCJAWeytVYVNYcZqoTwuxi43Q",
  "key3": "2muFgUyHzSG7puY9tKgA2tMqefEK13BrE26Lpr8ra16Ha9azvLKLTyBn5aKNaQ8tW2Ekao35X9ivm3Yg6JurnQYo",
  "key4": "2zLExZVX5uPpqZKWFBkYn8dV1oVgWd1TkNmUoQ6HPffRExTxMQEhGZHvni82uTVt323Df4ftCKmxvX7bcuuQFSwT",
  "key5": "3n3Bb15vtiyJ5rsnUJXSoBDZLfxj6HTNYhGnNueZfJvH3R1CT4eykr8bVUcHaAp2WW2zTv25WxVUX6YBJPWkfMye",
  "key6": "5jcgd3DnQQLVinumgqNfQLTihZGAV73CpFuGQ7rzcS5kUzHAXQadZoMwgk5Qj5bqp6JweqaPfxhKJF89uidvYVSt",
  "key7": "37ZYbPMXCXijZd2u5RgJ3kqfupHW6A6BSQYBDxcUaNt8xkmnzCSiWEFg6EsuEHwi5XdT364shjNzH4uRSHYbchV5",
  "key8": "3fYkCdCMCqikbyFiPTUGmZAqbRoiSobgWNETKaXvxDjsQ4TLS8S4KGUKKXfBj7AgZJb6d52BDKbKtEdbewZdmiaq",
  "key9": "4mPqxTKxGsrUpkEkPqtaPzTs3B8c4jSzWNsu5GqoNwCYtDo4jXVLhHk9nQs4zJQXXtdWbSDdVb6XYftrMcaXtW3s",
  "key10": "3j5z2C51598gHjtNf2SUP8hCny3f2u3har6vx1RJS83otcsXRwSmy49TNq1BWfZ3ue362vDbaNcjKwwX5xrx8CmY",
  "key11": "h341eSF9efJEQtV2ADa18XDBc4uz8UBJosXESfo9aUFkyJfDLhSwMzdUPdJ48QRytnUBi6GDeAK552xVpQCcUp4",
  "key12": "2mrquawPt2oEFNNwRRPMRxbTWmxb25HYjwcini4p7RsvBWS3BjLMLKGdWxevikou5vgM6Jm1nBUC9jgjpazKqq6V",
  "key13": "4gSjX5sSYJj4ZBFAuvoQeFEkkCp4BwZNsxbb73ER83zUYiMNB1r4LmV2gdKLLW28EjAVdhmSJTqYU1oNnYqg9iMx",
  "key14": "3JgDe9Fzx5WXemKAkT7qK3rituFNhTxMVmVWxpwjgm74wRaKGYtnL45YHdzSb3cpGdtTxqhWwAr52D6i3yBkVgvi",
  "key15": "34Ew1EawNhMZfEs434EhtmhCQziE7eRCbSQE4rQpqdxRSunsee56T2v2pfCCGNYaThmYb3tvjik5Sccr8F4pzwoM",
  "key16": "45emvt9ju7ueGKDEKnWDqfNW9Px1Ms3WkmYLmuFwbUfG4dnHA5hWorhHJH9x6TUaThb6pwzFM6nTNMvo1MmtLYvv",
  "key17": "2LYB5iFyG1soSosjt3qFC4qCMyNi72gYNqwiygvFhouJyoaqrQFyqCVb3v4E6TJZ7RTP6mD9s7VRwQPb6jk5XPiw",
  "key18": "AXmpNWrwSfjDYXmKigDDRFgGC6jL4ueRVWDHNv7eqN7uAgS7nevk8GXD58tQp4sWdfw5bgRg5Tm3J45Hw3Z87uQ",
  "key19": "2i8eTnkfTYcmyJYepJeXtEm4yXccs9wXd9CGrGTUMXME1g3E1fFBR754HUDQrNJ6pQyEPTNTCkezH3TmhfxdTxXn",
  "key20": "d85miSnqa9JxG9vWeAd7d6esU213d9tckFFk2jZgpvmx4UbRnGEKY7GJaHqLqCd5bqYacEu5NfWiBeH6ZvXPg2g",
  "key21": "5EsLL5x2DDrXtfZ98CXVAya9N7DuXRTrKTGtf8XFVf5nW6PVv6Kzx1hAdri54N3DpsfggYfYkpAKxf9a64z97Th3",
  "key22": "jyLF4XbhtWfjunTgYLvZTDCeNWa48tWK72nvBZh32DQP4g774GhdZW2u7ondB4wwo3QWrVAFASV9W1DJE9dfhB8",
  "key23": "gxgdxnhDNkhUWWsbzvoigdmRPUdfNakNXk9caEq3enjaMj9bbxe2D44WZUBFXGfBxJEPKDhhDSWkz5zRRWnTxqb",
  "key24": "5jSrrHJzhtpzXWNLQXwVtwtoBDUxc8MvZxEnh5wVBn43Td6637c3AU8rH3pm9fYNtqb5HJEz5ckhsqZ1jGrcxzCy",
  "key25": "3H5ZQfSUnKqMQEjv2z6Es2C2qSUDtdeMLQBRvgHv3cuqez9coqdGseXcBe2CxArTUTYtT8F4erAq5ebJ95GAoy28",
  "key26": "5oMUNSvo5LwEp1XJucpZPv7LrCPMAk4EYph61PnZvLaXBZYEpULa8FW2DWQygdajSuvXHTm4LHvEqAJJ9VviuCH8",
  "key27": "QunquKt38N4BUk3Xcz6KpPVk3JWCPAkn6MRCrMsXhmcv4vks5jw51YKrDQZT5v6t1E5BMLwm1oArBRLPqmAr9RU",
  "key28": "2NunkvvT678wHvv3JsdAgcgJrbX7A9NkGGvXGCzF6uuUvYXgAZGqJyfZ1w5AAbJ3zHjDqFJcqo2nyMWStUakyrS2",
  "key29": "65rYp7FR9F3Hjx3oYiUT6t9yYZMWDJeJ8NMkGrKy6D6xRMQmRdpRB5fqpfsM3svar4C2d8tsTDywgaEMGzJUpVsj",
  "key30": "4bMzY9z8LcrHS37TiT8Yzd5PeYwS14nd2wniD6W3VxyWLcwFCKwhR9vwf6CepHMG2DPHGFNRFMHHhsoyXcMJp6Ns",
  "key31": "nUzSaQK21nLnJzHq4BsfkuSEJvFin1JCASkk5qZmzx9X6AYgisv8TwB1zYFknYN4BMgiX6d92wAiYnzDsPg7dyy",
  "key32": "5QHxUbaVQuBc3HpEy3KTY4b9bqo3rXTHGnMMBqit2UV2j4WQRrxXxQo7iwEPGS8jxA9LzYWoX6EtbbnZtuDaDxcq",
  "key33": "61mYhAYmYCb8EymurAGTnMhGzD8emJLuwybLZMtrcAMaWakWfgedFZAuvVhiVXon4YBewYJv6eqZSpSv8UA2H1Jt",
  "key34": "4WyDAnTmJ5xpFSXFgcwWXGQND7CA4t5EVsPf3SqX1bCPeyTzSsL4JQYQugiqi6ZByxxMwm5pK1idkVC55tBcQG9o",
  "key35": "5vptcxoy8zJhdN6tZp2N7h7DvHGte5h4krLNjBmSF22172vnNoWmX875udjuU5rLdUMXp58V5VNwsz79GmeRcP6C",
  "key36": "2i6WNLDMK88v2uSmTp1xoMLbMcheegaLjYvLN9Jq9rWhaBG22rhPBqHPQGYCiQhLzhrCz2uUfwSEHdyiKMBgvk29",
  "key37": "2RZbT9S1wkg34DSKL3aX1a8UKR8xu8xJibjwej5f83FEiaA4Ec7DYHVWpyZ69b9eieAPTty4p7QbswThaprPmGdc",
  "key38": "5gbXxPcXMo8GF7wTHnuWuk9ard3w9YUzX1pXdt1NFUdRg3xeXzfKFg56cYQU78zGHsdssoqjgJ9BbHj6dAsBvcLo",
  "key39": "3n3ohWtcZuVaNuk6Cp7a3bNNMhqrVWgkH2jvqV5u4f8gQMT5DUPA6HiXjBYSaJh5mhYtyk1nK4bAB5ZwkTtUwuWV",
  "key40": "fCTRv7fMRQKe7LoD22Whi2vajcak8g8MHZP61pV6dTc3hw18bJijSF7Husa9hTZb55iXMRKmg2HkuWGp1S9gwsj"
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
