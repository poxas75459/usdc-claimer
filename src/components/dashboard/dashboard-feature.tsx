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
    "nrLcJ3KmcLzqrFhqziBn7uh6NpdhLnbZTzz4kKvXSXdXNN25KvuDezb7TvJgpbC9NRhzbCNtyr19QWP1bmCUioC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66mDd8R5me95A1Y2NArUwkQ27wzmEsiHJmW4N5CD4AAXQJrQy73drThv36qEPCafARoHLYrCAVM8FvUAvGLPWEPq",
  "key1": "3LSKjtaSVJkZ3QVdVSw6mrezjuniw5GaUp2PjYbeVvFfydeBRHYSJznyJvod1aXHqTzK2Rp2nX7z518s2kYZmker",
  "key2": "5RYYSPZ9JxbEvuUp1iAvG9FoCmLGRr3uxpFUmrHRGw1dgKVgnnQemGUEt3d1qeAV42Pr9QbJZA5rgeU4H6Pahr1s",
  "key3": "43kbvx8yPKEyxhbdUNKBGbXKrrU1SuV82fttju7LapodBSH3YVNHxJ7BaMdiNMKNQJUhYaWZXnjJvcx642Ubo8gb",
  "key4": "YRoyVjf594rhXVXZKQzo35Y4PqN3c3hK3GdxHd27mqNSmGr69T9sFex1q4Krj6qtaDxEP1oC4aqMsEb3eFrBz9K",
  "key5": "57F2vFoX6xQ7uSXRsB5qbd2F219XcuoVJEbQpYSpQc7Amh5b56tGeUYd3ktfyAxyfwML2ZLo8ZdvNJBXtvGomhLz",
  "key6": "2L5ZeyVQPV5VQdhrdNNPBMo2cPrAsbzAWK3bRnaxJsvnh1F3hsVZNUqSzPbnm9vc8cPtxof6AYvcGDxyghF42P6y",
  "key7": "3doCuvAjPAgUeC13fkenyEK89X9B6CQHhGXdSZpeLV3qM5H8AUaBgqDR3rge48itD1wx86nXNK4JiHQyutwTxMg",
  "key8": "25VeGT7r8ZEEeTcKiVvfvTj4CoQuigUA6suaf7bzeNiehy3c5wF8sYhas4smk6mQJdLqzeVSYPvRL8sr6Dj71m2w",
  "key9": "3DFK2JPi4S2KEMYXYBPZZhiP7RrQrT7zv8n8HfpqoZMhZXkSxMHncXhHjQzJ4G13Rhv4r5WdpurG5gwYzKjx5wAg",
  "key10": "Bzrw3QLCobxhxzFkUMBZYT6gGpRCQLkx6PriZ8Pba4ybTu57665z9XSj9AVa3ALNedXvpaJ8dzPFyJqxEhKta3L",
  "key11": "2L9ufQZpAZT4GdHh7rxK2BkPUYYgEAWLwRsv8oCbcvgUnJnDCZn9sBdKquxEwTppYWEAwwSywA1mjFU63k9hgDGK",
  "key12": "KvMUB9SWD86FXG73gRtBqtgr1ZeqFDtGPqibdBJ5xXEc3egikcQj4o4ghsDEbzMfXbzaB9frt6YZo7x3Lvco1UN",
  "key13": "pFrorUqJEyv8Nuf2fZ5fajjReqMyjvuXE9imxvLdXH4fB1BhmcfSapKbhHivc72FoL1Xd5KhBFuGLyRdprMgmPN",
  "key14": "2aCvEDvPkZYXPi6UNx1XcdUt19jhNTSu6Qg4wgQYM7wtswiBEDqgsVdYcG26gZRj4sT4YLjmSrkHNmLxcrABRT6e",
  "key15": "NGarW2SkteioyV15nJoPd7x7cABPQpdxzDRf7VsKbSx7KBoTG2TVpJpt287ob1Fg9QbY3zuxbNosLDMvLjNJYqG",
  "key16": "3o7Srdx1DdAe5HLnD1qpewaZdW2W9aR4BfVBA6NBTggVq8BCqXvhrUY3CYwpc6WeSKp6rbKcPjgMtBPk8kV2iGhE",
  "key17": "4yA3AXQSKhk42V4QUJjEMJimusK9DvUBt9kfmwKPHhpHyS883Kxfkhx3Ms83tr1NF7pz8t2H6YxvxQhazeWErDuE",
  "key18": "EnxjKZSSWZ6NvWevmHPUjL2tLMREkULG1dPyaW9CUnSiDP8jP2eyJph4i8pHDRGJGpDW5hPM4K8TTjfbD3KFUYX",
  "key19": "34xF9QTJj1XAcEd4roLjSKZFArDuccqKULUnmSBzeWUXcVgFx9NibCcLpnmTFT2Jwygn16gWDd5njxFQyUQFjcus",
  "key20": "tgz4XMd1qALwQbMAN1yrPqXSVvFN8QWM2ryZUzYbTF86koto1UJjZLCTDCGSnVfgi4bfHCRktgrtXSp7Y1wv6Ab",
  "key21": "21RsZ9KfdXgExDvU1baUmsnMm3pQYEqTAHWfdBoxHDK66X4sddqrwkoM6BQcYA2RtGp1mkTznXzNA5Mmo5RYTTmn",
  "key22": "4pZ3YRRV9P1E1KJAXXmENzPBsF4JzTULqpjagiapqMW8KmZkqw8fWBwNGsEyQyt3i2jVX2CNz7LQFrm5F9Er4rNg",
  "key23": "2i8efaymu7evXoPXB1stHfoKXBqVLHMzVfDmwidve9PyUs9ppbJy23HMH2XJ5KHoah3pTuZ4ahfeQbPBpkJQ9VMy",
  "key24": "4Ce5Cj8WuFQprpDSExWypHpgHAeGbQ1k5zzHQNsKaNuCBX15qSFbHke4oWE2PZNVneFW4jx6KkT8kuTTbWPZZJ4c",
  "key25": "61nNwUudY1UwnZKRqXbRK2QzvAFpGXS7oRcgPzyv2Y7FCQxZruTm93VtQ6ANEZ3NWRnBeCUYhC9oiHWTZcrJMgxC",
  "key26": "3npQZfQ4oJDCCUxV7DgdH79iMMSGuR4aQ2UzNoQBLQiBpTJptgXu3keW2zkqxNF5VoUau9WzH28vAcqrycZQWVRp",
  "key27": "eimEaWAPoaTtaa7vW5giYFXZ1uN75Td7vsy9pUU4QJTHw1JmN1FKwHm7wMGiEfjeCbDR5PGtkbqxCHNowJXWCWF",
  "key28": "5QHJYeuGXd4EVsq393bKrCFiGBBaSCDeS9vdg7PrUtbwkjqR1P7PKHJVfFDGRt9VJkxZab7fcHsJ4hbQnpeLUMqi",
  "key29": "4uanZiGvBcjQbyv1mTgpeSkPvqS1pBy52krwKHLcxKDK7dP7WtGk1S9xKMRecF6G2aiR9UVYWp2zCxkUG9jqgUe7",
  "key30": "2v5CwwNrJGyjbsB91BVJ2CQUB7tTSSAo8nHMDvJFYUXxnqc55b52aTJ3wmCLFFRGMdhQeaUxokypYX6put3Bv78f",
  "key31": "515BdrvqdPQdHYVHghqttWKgjtFHgAf6FsC31XvgiJS4GRa4dbfrmnNHLDGoFaRxKEYBhEcrjVv2iyD5MpCPTSc3",
  "key32": "2gLStgdjPnhD3QCQvEJsDKMZzNiV7Q6w2yCfB3CYLtRcCjU7PnjATLp367rcneD3qfFHc8qTRYYzZt1qemYcQBuH",
  "key33": "2WddHXrkUrEJVRVobwUdd61qSydy5229KLr24DGAoQQarc5yY76YctVj2u8c3NcQzh4yeLq2t2Htu5repXCq8af8",
  "key34": "GFDq1HMjV9aDJ72NtAz7YzXUckEFks972dRziuRfgDRtf97sgSGjg96mh4jhLsFpsjjdcgozj8ntKjzRs1efZ2T",
  "key35": "41Sa8JK5ZG8PNSVaWQ7gLCok67yLzTXesGLuNpY72ocfFDVeRzyUBqWrrrVEmUj2V3758dzNKewXctkCvwMDb7pZ",
  "key36": "66P2vsAYTn45FKDeho81qhk8eYPQwErUfLdpZtibYAkmejL6oHUKqw3nYKmu3e6PwqTqDQ3vGXQeKxuiQxqrC9H6",
  "key37": "2YJjxStNXnmX6nfYnGgJKbfB3yEjZsAPwPwPFEkEgWKsJoKNCN191Xm9VTi3qTnwPLGLqgC6kF7QHER1bWnKw4yC",
  "key38": "2KP2RAGTU51x9B3ZahTRMCUVg2ZPG3YaDDFDrKgdgX4YgC7GGtZq8XMMn8MCG21rPecW85Ut13QW88yqAveF67uy",
  "key39": "5R8PD5odGXFWeSqDawfqH7knH9MxPU88DxfgRtcZEVwpjkH1ts5wKjhNo4gojFMPBTbpye6pJ9x6HRe68R371Vur",
  "key40": "3ZeSze21bST5tdd6ptabUfBUvdiEX9VSuP1bikRLiKfKpQZUoQz6195oTqpfm8bASfjVpUpJ6VwCfaE7P2R4sSHM",
  "key41": "VkXfXzaJcnDvVkXMCA7drrWs8ZUBo7Ksze4UmcvVvzPvcP9doxUxgGrraRGSfTQ1se5Z9GpE7bGuamW8eTgTiXi",
  "key42": "a3epZLo9CGXP6HRvTkLNE9qnAxvUGaos8v8pxtrSHnH7ToogaUhXT1QbGV7XBjnf5jZMrQpAqNyRkpiUm1ryeaS",
  "key43": "5eqzpBvaCX5PmEe6n3nUhg4x81wWac7bBffTqtAL1Co2cSUayqyh3rVPehg2N8waUyqVh1hYTwxcrEkrqMUzE2st",
  "key44": "rfymFt1ap4z5qzMMTf9PmXECQcdmdCJ9sEg166sgYKCP4BkrCu7QCCVoERW8QEkWYiR4WebruAagcbARuQW3eSd",
  "key45": "2AqGFSXn9RS9uwBEX5vJ8qRCvjBgaqcVzbeD4jNBqQSghzidFpXF3yhXNRiFU4BT1U2WYhZkwbY9GXZjg5iLNzMo",
  "key46": "63XUKpvdNpMq82o6HfFq26UdoZBfVziNU8G6rVCGBLmFpgxhpv3CAXJLQRZUdshdVyJPSYmAw6otXswxaePaYsjm",
  "key47": "4SxuHqRmpFRQF66BxgYVTxFxm1T6ku6fuY3xVAQpaPk7DQz2pXtMSbdwLFDoRCQEzzB2sxicz2fuSnjtAkiKDFov",
  "key48": "5GFK9L44Ev9qBYYZmNGhw5wwKhBVxkEQyifAGv9a3oqbGdnQPJqkJDiH6B7BiFFWoSpjRMEEsXe33AYmuUw1PiBr"
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
