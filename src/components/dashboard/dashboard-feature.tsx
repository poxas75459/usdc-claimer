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
    "r2wGsURQkf188L2A57QoMXYUPMg8p2H1tYY6wnHpXYEshwRq4oTS3imFpKzU72rGTrG1iBfTujgXyR8aZ2Y6SSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43kbdK5JRRmbzdyJfbkNA5b8Mf75fFjugjLxVrJgCQ4GhhgbwNrXVw3FDYUhEYTfVBqGoPpxFsgbaKTxeiYRdZJG",
  "key1": "4C7Wz3uwU8WNoy6mC17nLbkPJNwtPvwq8bZ3LMtVJQ66NSqHHTwW4EC6v7PqP62kpg1q8nJcu6tGrxygNHc6cNT5",
  "key2": "94XkeMwxktXDnrBitAMqH4Wnsq4YVrrA7HW3KfvDMwSSfeRbb4Bt4Q9zM1FiVduUGTHFmYrDcf6LpdXLxd6kxTx",
  "key3": "4k6DX6DAMQs4VfAHADg5wzYqRfdqdQVBHFgvNyA8hNaGQbyXoGDN77YjUXaqfYNgQZa6Yfnk6kKjPxzthNEkF72M",
  "key4": "2fSB9gpu6Gi2QHBu2eSFAgdVkjb6Wuew4xjG8tufpK5RKtWQ3Hv2mtCWjp64k9XSpB8gCdpPRuP4QPB5GnuQDmpw",
  "key5": "1E73Y9CiTEibpz4kB2FqCYQjB6fNpHCwCm7rrFo2wtaexijG2tk9R8ZTnAM56E91mJroeqJYgvLsW7sT3Qk1zRE",
  "key6": "2ajZBthD7eygWrjgoa2JgoRngsrBeKrwL6Wt5nKhbdqTRrZ66XyY6guMTAHq2LveBAyQqthxGtReV5P3pEkYk4VQ",
  "key7": "3DF5rWBkKbsjQUG9edjvUj11Vv7jPsQ1nkdatZgxhZsZeuCbAZMYkpGTDvdNMhPDKUpaFX4VLcUmziMXksXft1Hh",
  "key8": "4ShJuaZQhN2h2gVz9DLAE59eDs6PdzxrbWg1ksqNXs6rEQRXXvyqxr9rWXuwWhqbutkeC6mYwMo89bWkA8kV2Ewx",
  "key9": "2n6XPLcMpsFt5tPj7hDQhAhwQsF3rkr6WpDETUjwVgn1vDUquzTXCP3RyoE55dYiTgMvVgh3V9MPdNjmTvrDSXks",
  "key10": "4va8B6bsrs8MSfZMjCXwbod19zrKcfcPNKkdKHzQPg5Jmayw3pfz6Uhn8tgbaJ14jqhQR6ZQH6iXaSAMtrqWXmsr",
  "key11": "DDr2kCB1gcwyXMPKA2L7hZjHyPXDHpkvc1aAapLH85tv65WvinDTJPjCpXaa2UbCx2XpLp6Svpy6dsSA6YpVuty",
  "key12": "5tRQr36mWc1xggJmUeGDKFnQpxtKXR38zoaQRJpkCb1azCiG9iDe7jfw7dxiURGmY2zZ3Hmx3ownvt1h145nPBV1",
  "key13": "4FmGP7dvoF8TYgMXAe3GqZLJbB3pbkR36yntwPgizEeuLDE6yLRDKdtc53ctTG5pwMA1LoixA7NnenUyko1jguAn",
  "key14": "3guuJxKrunoWTr2b8buWWsDho7SAfCooevPdNepEYcFcZuN3547ovH7yn7ze8Dko7wrjcafJwAmXJdqXgg6wE7Hs",
  "key15": "2ikP6QyJRFq5fxYe8ZqmbH2gDZw9LHErHDUWsKG3Ayp2USoYoY324cnocJp3weQ898E79Xqb5rgTsCpDq6fAJVqm",
  "key16": "5NtfET9dzKJtKWD9ZGgm1Yx9s6iL3gvG9HjSZenzqoHCzDJCGjzHn7q64X3GnALJEJffuBNXPCMxQcL42TpaUAt1",
  "key17": "5j9mPLBNDdAemYyhJxUYmoj7DabGPyY3drk1TLexFYoVnN41NQ2aDUiex2WWBWw4GqbZ6rjLLfkdxYMYs2YzM3UL",
  "key18": "22bYusdJtG1HVsjfmVNfa7UksqKX9mLP6u2dmDestdPqiyF6pnLUCwcbBgb81Yfa6raiEfbe7RhhKXZsU7Gz9fPv",
  "key19": "3oBL7sFNymhtgBW2dg7RbT3n8R2znSrMHKSzkoNLHy8jJv4uMBWqkgugW2ftPsuntazFExtJU17XeQbaVq8Cnaoh",
  "key20": "39ybUuyFV2LGbHga3PHbqWHkxEnEAzGSWpH1Qx5ut6qWumnKkpcxm6ZpxrQqZNSMbSQQi3SH6NMa7QXo6J4E4mkY",
  "key21": "29kHN2K2AqqvLJCtZMwGbEGkWWebMHVfugcAjhsKyhyJYamBksSHYoNcMu2P4d5AGa6o66tLNHozpARJVMVvcSJv",
  "key22": "AX6dPZMgJYXQhdzniowC2aYixAmNhMNCByQdgkYqkP9tuyr8mHsZWTmvPBRaFtMZVnJfMPuBVcA4MTxv7cseyBr",
  "key23": "4qfuynMFnXLrryybJzkyABz9WbNWPVbuLRPPiyyvcxPg8RG8HXVhHXc3mq2hnggYNzzG9Q99A3cdR6T7yFDYS8qx",
  "key24": "aJrh1LuqoGSioVJd3Wzb1HDRw4p1sKcaH4C1pks7vC5SNzgDmheEqQWDvWkUMRfCrsTRtQWDt46kYaBRakxxvZt",
  "key25": "4D9aUxZfHrbJWTweXVwDj1U7mghGm2esLGSSD3pxv5DTvGCs47nxpQWQtZta1ZeL7hmvTvtyvQZ17Wv5PLBD7x2d",
  "key26": "sPowsZWFcZ8XGAg4RuNhYXPBiA8ZkQMHqyiq86Jmqj4GwXCpRbF1uqJ8uzk3G4zHMksNbrTkGMN1txfSkXAoqrk",
  "key27": "26YGXf3SMEmjrPmQkS6sF7ycrJGHXRoBHm9ctneWmDPvnjNtnzvb6JWZEs3AUysdjJ9bLVemCNTjYp6LmVKJUz5j",
  "key28": "4vMQvkLiJ1BuTXHJQeS8gQAzbr9B1STm6S7Ke7xM2c54BgR3wEP2DpmnkXNcmo2xPepa1CJKBmn83Lf9ncKpHeqk",
  "key29": "2ZAPPVH7rCDc2KtKjMueLPkv4C5HBTyHU5qrGF59cxt6tr6MgetH2zCfFdALKUkvWUNepdTWEDz6KwqgMZpqiiYW",
  "key30": "Ag16jybc65RN7EAvVrqfdjzJ5bgsd87woMqJ7k1Nf931ce4zAofD44s3B3TEL6aEP1cRYTnTXFmek3AQrJmZLJ7",
  "key31": "3unyAtHoy7sdPe4w56E7f6NbGx4iZwBiZJ8rdgdPxnSX6mtUcZ4VDgXomnLrSqwdky6Z6nS9gTcXRcXPW4YtgyVp",
  "key32": "CUQuJRRx92wXEfvQ2btfkPDv39guTq9jf728bVmyaAjQzuK89qDArQJqv2JtFbEQEev1FRZtDd17HACB1WcyCku",
  "key33": "3mMZnedxCU8hh9PYUHnxQGkxM8YHuMRYJfkgVUab17yuWBQLF8vg2hTLcsBeusMKX9nMxn4mottFvWZW7qRgw1yC",
  "key34": "4SZmHvXVPXbSNrCs8WZGc9iYFvEasnTh5bC6THCtJwDV6tSsGYm3gPzW1Nh22qc33SPwjN1eGDP11wg779pKcHJP",
  "key35": "5f5Fok4TjBW7W6v7LLrsTmyGABZyHBok98eyX22HaYwgtuTyse4BNZeCBsWzPnPiSynLJgk1i4mmSZ49UDNHF5Bk",
  "key36": "5LXyowwFLha7h8DETsnZz3iUP6JcJGkTPszhBW5z14Z2MSmm7i2h5aFNuSk1DUmaPAe3TQd8QAppsgKF8XbfVcoe",
  "key37": "5AqoH3baFsN2PXwwJG5FWjkHJGSMpgej3u6rZbAU5TroYn3gA1nnDLdBHmx3MysAxmHsNxyw8zBTs8kMsB4Gkw7m",
  "key38": "4F6vAXnjfDrV7XZetBfGZoMvd3nTj7U8CGpjyn3fEJwq2soqbSwePbKW8TFD3vKs1qgsTy3rtvvX4frwC87PfsMz",
  "key39": "2ejrmoUhoVJW2rUzNrKTxM2ZPxNrcvimyuyUnBWQekJV1tjgmk1iopGCG4dQhnqQJpvp5KyjtLWjDbYo9EYBpYVh",
  "key40": "2KDUes2xVxA2khBLSGryDbpNWTN9pxPYt3d5C7vsJTJHt2cDddKyp5tvgKLbiz38wmwSjhUBajvXEs2JSTFyie5x",
  "key41": "262o5ysvv99j5WCWpSqgixd1ELnb8hYtkBqx8bwHqLc8ii8ifHAxD3AxPMwWBBGKxgU4eQgUJmy8cf464btjwNuB",
  "key42": "5tkB6oaxv1BMtHD47GBYKAqqZ3WXZJhmUgVjZP9ijEfG8sLEVU3SRG97r9YGhveAcyDMgkYFJwsxZUaBMpKZUU6q",
  "key43": "Q8r3naxPDALsK4a3YdygbSmtSk1ftUHdm5V6ZYiaNatHC4p3vaa2JRqt3sFVfDDa5TjAKxaa7EjrYPYUqQuBsbS",
  "key44": "2G8GVzUq6P4To6Dd2dnRzZGWdEnh5bM1WWmaoqLSzLrywFtWT5JtT22GR8u35p7AsBxDCJkoYR9rJScfCSq7Z72H",
  "key45": "5qzQVQm93zTkRudTXbBtmBo3XW48zGvy43rJgWsaHMpdk8xnXdonjoGtX3PacHpWXVDmwiJsMGAxyitymrrdoGaU",
  "key46": "2HFiYZNWv6mJHYC8EN4meeeE7PAeaVav9d3dYW5Z7HVK6qgauQW7GDAs7bPwuH3CKA6QUXETDrNVjR2CMRcnS28J",
  "key47": "2cVn3qc586xXX4H3LrnAWm9UQ9hiZYjt7VQhFN8VRcRz4M5pVEMLawLg91sfqv7Vs3QbUNqDKwJdnfK2Z2G3guCc",
  "key48": "tHJDmuYxvgdzRLPqbNGc2g4UEXS695nT5vfR8T86REs2SWFK2aAUsMoFfbqpnas9ov8UBwWmAQL8rWmda5TBeRY"
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
