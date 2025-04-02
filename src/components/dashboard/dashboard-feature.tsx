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
    "5xqhScfGyz5Vm1xHR4qBMeJy24hnSWgn5G1rHQqT6kURt8pP56M9WLsoPwwJPhemprqEUdVTVLYbd76mLZJAWbpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aFT2nasEH9V5F3ixEsiwv2A5QvLbgpYNYRcNqcz6hrFQbqJbnDAqkyMzoVkWYwJE1dDxXriaHvz6FUHoPLHA6cA",
  "key1": "5SVcw9TsidjacD6KaP1jb2Jk81S2tuyqNqubZJWBvv3FjT2drDsDfyWhwL5JHfQEa4sESsae36md641T4rFBCcYx",
  "key2": "41wm2e3kMLzWVNnZSqSP3nQE9scdUXkQ4XL6jgXii5P3yMvr2MUgGZog763GQTWbJiCfu2DHg9jKfiCz9cnTX4CN",
  "key3": "3Jjya6JmXNHTzqpc6iZ3pWUG5qmXpvKLRCiF4CqDDsbCTUWGZEiECdimUSr22pGtc9BrpDofEzktMK1VcoiArx16",
  "key4": "1izFdhomC9BkJ6os21E4GQcfqV2N8RPoi2j4wdG4RLgBuGoBmdm6JgWWLjiFY18sHvLpPa8amrQaBZZzdhEvXmv",
  "key5": "4YWuNrFk3yk7rBZQjSeLz8BsNDVVQaDhXkpsAEjQ6PgZPCAsknZJsrubRSWZ9Rf9d32p7W6SB5wh4SRxjDUuxbLb",
  "key6": "KgTJqfH7XmgaFEkHExMwv9Ho4bv8UKTLUv8TK5rD3fZgx1axHPPBE4LDTXhQDWoa3Fuy7mtVHRfJXopFRmWM6Cx",
  "key7": "4Tujo7pvWm49GdEixfaUAXRn5fi9dBfLhf8ANXZPtEGUzD9BTTRKzLDbDzcMt8xKhZi3wFjs39XR2kWGFkSHs3ns",
  "key8": "2vAHbfadavCNrYRUzdQLocWgP8pFz4Q7RtUqyHRTw2DLgj5dgVcGvyiapaS5d8arxpRC1Y7UJ6SpCdwFG9J6LHLV",
  "key9": "2ydkm5F8YKuFK2biBaXR7ezXpwapVcR8g1qGXDA99krbJ457eLXtXHkAqLkV8pPrMLCbCqCbAwTpMnrHG9Lo5f3K",
  "key10": "5qpsU2cQ9WBxrAkq9m852enQNE8dHcLriLNEUo37FVkjc6P4J44cQCeT8g9yq7k7e25DdMULY2zBiViazmaHQyK",
  "key11": "5VyY74XRZgVG2RfjSAnC83bxVeB2uu7Hfr3nQvAXN4UdfDJ5Mp2svv1wT4iEBVf8Q4VY6Mdo4WkduGajMVgAbCdA",
  "key12": "AJA6yEtFrpdaspK3R9o6ucWhnXqoKEPv6dQ6x5KZqriQG39UWTrjVvttpTB4K6okQzkCwGtxRRyjThqxfSEqxko",
  "key13": "48bh8C7jQRkfeaLmVfsRUykeMikYspzAUxdxuCm8koHKkgvppwMfcbPLKeAtvqHUftTAaQRFaCJgPcWTwKhNKs9z",
  "key14": "2aWBLRuADLti6BiWVbwPqZnxun25YnBf2ZpK7JzsfFiSijVvso1GwWqQKktCBqGEAzSowJ4QpifXqwnrdp8pRJks",
  "key15": "29G8fGiMfMjYgYL3KgsWpRWv4BZZ3r2PYqNV5PqaFSm5wYZ3tmshLtp8Vy3EtbFZ7o2giqWPwGYXt6kcZ5UkER54",
  "key16": "3ceg5L4wq6FTzcP8UTEET236BgeTjG3MWCQG13h9c1dnT1tDfhxuNrCjp4o5zGbPKLtCEsvPqWAvD5L1kcpfGGpc",
  "key17": "5B3JBzU86WJDiwwMVs8t7gHMzHtDspmvZiBKVvGuMNNQCHFmkRxxUvaUfnSgELytQRD97WMYu6KBDkKNEKrBi2HP",
  "key18": "3zdY2tEWF7WF3fB5YYHdQkUuzEaXS8Y5ggetTvS5QSBHCmTzCokX6Km8SAVV39edH4MaGKX6V4CSVepVkNmjnF5k",
  "key19": "42EbzSejuTwjN8wwZd14fvvbGvG5gMhXHm7kV2n6vUDuejn9t2HGQT7wK74wGDTSiGjEJzBMAoFtTbZaHXh1dEcJ",
  "key20": "34otx4sdtcwHwnej5bEUUt6d1No8DBorR5HCwaU2QjkEUfL3iEnSC4LFMf9DXiCKNSH4hSMH8HcAN5LJ829wozHq",
  "key21": "36CW2dtsWJubSRyD4YC2JvnNHD5BpxHmHcNKs51KDztXyqEHHZhbNyGT7r6hEmHguyuXCZ7MLBki5P5prCKR3p5H",
  "key22": "64rUPCdZ3tLtTUj498gbguTYuk4a3i4GmqQMpY7fS1oFFP7CgFt9aYTY2mH3Jfwi8xkxw4C5fkm7g77RWyGD8fbo",
  "key23": "cf6GqR2M2Lnm1q9dpUZxUfJT3wxoS7bNgkjAk9dWDk1sKcVG4RSaTZJv6Mwyf8NQ2NtjKak6peZ8AoEpBfHzJhJ",
  "key24": "SU1fVtsrXfsASwuBipLWnHX6m5ogcE6mqHs51BnqPBvxFrsZYNLTrzBb83ehNdzW5N6vkUBg31wLFuTmKtEbeiR",
  "key25": "28cY7CPKHhYvzT8qT5JDxgga4EtUeWFiAe9BifVC2BbswLRWqVvBBhVk8U9LdZyGagKqbF7LTVQ2qKiQzGHCcMbR",
  "key26": "H132T7Djnd6YxpbmThPfS7rgJoznN3W4qa7MRgEJKRAWymHocZzfez4modepp6CgDWoC1dpTMALxhRmfPJ2D9Ev",
  "key27": "4ewK5RAhR5LVCqsKF8jNoKdW7ktK9jfvJ7v73ai9PSKyCzgCLX8oSViN9YxaYTfpTNSTjqCu1GvVu9hZFbqJPB9f",
  "key28": "5iuTr1ufuRPGCeeZHPGFqAYuFSpPYGUZUcUuQVhEH4MPXTMbZxEgUtPXaq2u1ePXxgPFLNcLJhNXhnhHukeNx7jN",
  "key29": "5EeRq2ss3wC7W2wXUUWo4oKXvkugSLirAjh3akhiPombXqHmfb83CJ6AiQ5MQojQWgCubwMpYBYp4xDEMXh7ifCH",
  "key30": "34Nz4wd3BCZpETn7afYxFtYCKg5gNukcFGvqYA4Kn2ZDrau4h4XUap6vCP2rJMT94LiwdEjkCnwCxzPdVsWPzFgm",
  "key31": "3oEar7dkdxPSzVnh1sriBykFjvg5i8WFV3XJQJp4rT47k8xDPRypeMg9oZLmiSa3mxpse28C33iPCLTDQd2c4spJ",
  "key32": "5UZ1LnXwu2HxYhrUB41ApVtDgEgDadpj8a3TPM6RGyFWBjptiSJus8cccARouTJxYJBEWisYTEsWDopypgjeytMt",
  "key33": "3Uh8KAABGLqxPJUgpLWa2EPdDx7tSJ72gxmJqTZkdsmBHYSZUTGgGQspEaR5o3qrq7oYbwcx1FcubKzfFY9TUwL8",
  "key34": "3p6GBSuW2q2qVnCbG7eFQSYVrr1vnSEKsc1M6aCc6JeeR6a6Urg2EWBxhqUhRbKTk4ekArT363gVLnQvJtuRHEGw",
  "key35": "31jGD2DZggtGrdQChvWiLiHrcVP8z3RQ9dzEXrWf8S9YsQNEE4WjG4jBNNN5ZeztZpvXHvvMEfvvZugwUdRNwXcD",
  "key36": "b4nzCCnFA4JwaBvJm5H5RkBojCtW4RGfC2p335KGBGeJUXLCWJBXmQMJAa28mfWZZ7fpEnTy6LrRR5gviQGk92e",
  "key37": "W1smKehhV7z86A4f2JPmKaQViGS3vspVopoQ1L1fouYaH5QKgz2DteSSbtF5VM4AaJDvXkoa5JFoR9aAsBTeZiu",
  "key38": "2qRSzdfBMxiYfaCQHDREwiRyz2u36mD2zDNzaz8CQRrScV1XTF9QkBsZSro85KfkjwgphoyddzrgrnDGT3hLrQ8g",
  "key39": "55pfWYHcJZM1Wp8M9hfjmgxNUXmz7tJjHjdHNbomLs3uChDjquxotN3afAr5XVzm8pTKdSdod1TdGE1JkMQsPpQL",
  "key40": "4u8d2ZuHZJeXmkKVRviLuHwB49FgeyBXNf7BrvwuRqi4bMRuCmmX1RS1tMXSK9L1A6ac5rZ3LJ8Zs1XLZcPXT6MF",
  "key41": "3nRes6CmuxZYGRpgdhg11kxBeY8Pb62AJYgsSNsCZuwTuiG9LhtRJEGAoin93r88UzUbojGh4HEUMucXeqPSgSEG",
  "key42": "4mgw6yfn3NqL6binw16ATgMagBgmeZ8bThYBsYVijoWFMh6cxoHE56TLDCiHypwg4LgxZf3ayPK1CsjFX5jda8o3",
  "key43": "5StnXD6ZKuKx7V5zShRjBPfFkJfTV3ZivSfmgB3jHCfLu6avxdwEb2Yn1VLmJk778tyEXE9FK9aWFjSdpN1rKqQ5"
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
