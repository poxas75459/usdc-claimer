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
    "2KZP2ZESypAdJhPjqMs64ZtW8XWSG6EsPtCVXGkn9jQKHqFAE9g9HQzAmz5YL7qepCXnv7Dx6EPmzDtzPT16AhRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sPbZFyGYZJ17b95pMSMyiG3N5CPjnrRQQoz9DNjWLTvBkFB1926meMf6BZUGTn7RQ3ELvgLJNfcSw9Mo7VPScg4",
  "key1": "212GyQkqMeshdLDCuSc47sk9yZRW7U2qEU6AKkzTDK3TxWcdondPaspn4S74F66oMYYSnWaWExMGt8JDQMafzX9q",
  "key2": "39eHG7nXVF8oiTnc4S92jrMSjYZdJNapCfsqzYgTjC3b3CrP9S7DmVnxCCkj9863TaYaQaNB1JS3KLUKo2qiS1ak",
  "key3": "121gPbf4C8QEYnkoAV9FjGiQhfPfq2fqxJWWeekdAZ5wMRbBdkbt8TFXAnT3pasbQLVpWRnTmzTaVPgTkUUFwzvK",
  "key4": "4zJKCa9tA458cDFUYj6QG6Zmbqsd4KYjJ7URSrUqsFvgMSLKeozCmYAwHXXwHpHPnuor7TkjEhVSetQCdKr7FSqS",
  "key5": "CgVmkedvum6ADBGqQSTFk9xtNdhV7fMTreyztLCuP71JiLSW1CPPVHcKgC9p6z1vSpDypBWzBmmwQYEkRNbTDvk",
  "key6": "2usXEzSTAutyZEGyY5XJiCitHKoXiDcwiQ1heSJWbPgqv1ssXQvb2jPWy3B98B4ViY93jTXuibCy13QiU2kPnaKK",
  "key7": "34qAb1CGs7CuNFf46XxekkkMWpXodd8ZYjGJBbYHdFJoQeFbCKoU3RjHrMMoWwZ84BkN2vXiLsst1mXjPBXL4vAh",
  "key8": "5JvymgevwCPHcok5XRugpt1YaDtEsZA69WpCYYMVsJedB5RVpxfNT1RMtV1vt8KX4XBLbH71xCzajpoAUMVfhWsV",
  "key9": "5KxM8jtn373boCgaAjp7mmtHroiUqH1JbdAWvK32bJVunrGtQjUqXNwu9SHh7C55sBzzjLFJw4AwQ1BWtUh6CkYX",
  "key10": "47NEacbgnVBf2jdaib3RfdZb2hkH6g7WCh4KLvZL4AhgsRKKd7VXM1AbsW4ifXoGeJpn7AgGDRVAPCZV9B7owsFJ",
  "key11": "4PPiracvc3ptGsNByjcqT74U91Rzo5d8xbavdH6zKsKm2yLQM5zbY58pkZcAMWz52nfEMwdtr8VngaqPT83udQ9A",
  "key12": "5NEgzgXFUhyUJmuNqZvtHPHDVGLYkFThfow4t78xcsTCQu6Fup58pAiTFJKK2xFum4DBTRxc13KouFw2h83QpqfG",
  "key13": "5rJKnvrxPYmEqTXiUbDAxYhdn2y9sQfzQ4SjzfvvzBAqbxFP44Zky9Px4vhbcjW9qq5hPXN8NJF5wfX1mshq88Uk",
  "key14": "32nFFhDWwc1rmk2TaNLjQKfdGDNV8jQ45SBbmWppnTsA4ZBtMjayFZPfkWyze7erAWrNCUtdTH4115WPv7zaL4NA",
  "key15": "3w3tpgJ1GWd8EpwGd7EJu4J28NjRnPSSbE38xkUJ6sEQZRUYquZZYF6SvJfDs4ihHPe6HqwxRPjmynSutpYwAc92",
  "key16": "2khaqVhhuVCHoVo9m1QYnevEGFCUzCoHj8JoBVuQ7xmHFj8cajdXKByxZYz4GytJp9GRAVTCk7BDqaKgNje5pWMS",
  "key17": "5aVmAEssnxfjwZnbEi64iTHDH6Eb3jgu3Rq1LVon3JwRboscjUtRk4r3R5qDZbHEozzpbi6QKnZbbg6A1FTphnVq",
  "key18": "5E9mHpy93ixeSMBjwZ2SCJi1qk7wMbCL9Qu5cnMGKdiKHd2eL6fnFUwazooERM3e5tFEFAEHeUv3NVU36rAeXtWH",
  "key19": "1rGuS3fmU2Tee7dinjSBgknKiJJVNDzkViccrTC3H5dzvQ8M6HJ6JCAeuSx5s8ohXU82pQ6EMdmvJHDps8iTBr4",
  "key20": "3G3MN9hTB3ytEXkz6hpPCRXzYqHBSfpyKRzkYwWEiQdrLALEMmjhZPJWbKmR4kVAEpYgHfDMDSitt2P1wk3mXUv4",
  "key21": "56EVR9gob5foMHRPPm8j9sETvgZpwVguf29WYaqZfYAhtsucTBv2xBZX3FoEHW6L57aSpX3vyA6Psi3FyPEukczv",
  "key22": "3tmwoTRkKr3BS55KLr3JtNPyW9R4kZVZXDPWg5kF5xiaGkKAfXLZVYfE7MyKfnBQ5dHkZNJ9JhNWZG2M9sit6b9z",
  "key23": "58NG7aaDDKkCQa1vxAsTSniGS7hC3uEdSAhALSBZDp8wFTuznxaSR1nLH7WLESm6uJ7Hg8iXDbsmdrk7HdbZz4rK",
  "key24": "4fGB3fQyozy7FmsBCkkKW9axDL4xRviNuJuPCe4xu4BPtPWbgLDzgNJUXX8KQsSCHZoi8ffzc9sdFXUXgNG3uwJp",
  "key25": "5rJi2Trc5je91hhvRQ5vUXvNzFEgYsHiAhTaxQ4W98gsruLQecR339RYJjTpwytK1q2yj2VYmKbbW5q9nRudSERz",
  "key26": "2K3ASxssMejSzXU2DmrVXMVjDqYxfnuf72uHFyx8gsiCdyy8Ee488n7VSB6hUyT4dnmna5jNv45cQC8TFLpktcss",
  "key27": "AFRQg6dxBEAdw8GQnsgCNktEYx2TxrKS3EW1YyY4qVTzRkoqGqEpmZfbgJ7UDZqAAHp9wfikjFomCcKtcu8RUo6",
  "key28": "2fmL387E7EoJ3DzKxkzaTjdvP8T8rqNxo4XpctZ3YmQvhinsCPevEePN6hWu4TgyLsgBy1DDcDUE7cRUv2txQVnD",
  "key29": "2GhDrLpHbv78dDpH2arrpTGjkka96xTq8CLhKqceho5uj2K3khG3U2aPZfmXVnQ9ytQgjm7Ju1ivxTkoiYn2ic27",
  "key30": "2GwtQ9jy75sKd5oYBRjKEbxYEgn8MYksyJTXDdUDyZ1JTUZ8uFn6GbLLpyKZU2Fj29EsQSaJ4rNebYzSDKPKvtM6",
  "key31": "5q9G9EpsWpjLBbk9Vc1dbmMcU6SBnWJ2hLadm3H5276ZdbQtZUNEHkdn5yNBMnZXNheqoJpe4khdB8tRaDV89N1K",
  "key32": "NGX6aWjbmSW7LcVCcfAKEZfEjgCdkQanCA29eU3u3PCbGg5DdVkvKBz7vmtyGpKf6Sc5kYmJUCL43sKEC6rKzYn",
  "key33": "3GrbZxo1nHvPmz7oEb26EsYvzNAfXRrz6U2nt3YWAecuNVFrctej6gZg1C6Ya9w5mWHsqmFCcXfy1JUaBUdEhRRB",
  "key34": "54uijrXttpbdJcoQynVeg4Jq5BDpCb1NFhyEyeFUCpVtdBAfypfKt4oMSmnT68mw6KNGy3xUTaMDGEaqNiz7NmmP",
  "key35": "B7wBJJpHnADqFWsE96eP9EE4a1Skdm6fcLKQYSaEc3YaGrNkfYxo3K2GUgjS17DfTsmquvTuPQy97hJMwMk7YEC",
  "key36": "3NZ5dfTxazWxCZ9VNheZtXYajYf7oaQhkAkiSU8naEx8ZMuuHJGMgGf7ntRf1ZLt6cLTJBNQHpwShvitMaSqDSYd",
  "key37": "cXSCDjy5ZwiPzTT16v9AqzEyigNtnHdgSQdrgsUjKYkrQfVBPAs4nwcUWvhmN1ig5QRQckSoMnzsnxXi5VAPJfd",
  "key38": "2VZWz6nNmF31GrxhpowEAohQW2sYABzznyNgLorePntafqdqXp9t2knnSJiH1K2S1g86PaXjDBZwatddajJjNbLt",
  "key39": "5eEo7kQqgaxAycGKuVsXszzyCko93sLrxk1G6qNUhTTfGJaCSRPYE9gX19QpvreAgUj2i1aSwhPtmdSxW4KvWm45",
  "key40": "B2NQa8wkxK7bnif7LiK4EVtrCf8AH7AzWrvVdmB2oHVE8eaJZZPbZ5jWgpfu8G8amg2vhEGmKrdtAHnargWzeAh",
  "key41": "5gPTmANn9p5Raao8Eftv3FTbCNrithB39wGTNpUY9e6x4p1P29f2MK53JUxf4PFaxZCvAnhxx7Q4ehSCX6buHTVA",
  "key42": "3sn69Dd3k1RbyCenv7AtXirQHjKCLHEG3NfFWm2FznxCLZupRd7CJHdyY6q1hYH3ESkQcZoWxbaLuGJ2AxRi21wC",
  "key43": "ghPZXxzCFppgtJ4SG73sv2cuADUnoQTg5CZE453zt48RZzf3YXRhzaDAZh4xMMuMSipH33GvRzJqU6sBcuWHXqo",
  "key44": "5Aw85VjhaumYxUG1FyzUTCroyeek6NkNBdtsrt3NcQgLBwKDsnjwKwXGoDJmvbVaF2fm1zm5KzEWTrCqSmz6zSgz",
  "key45": "G5JJ3CVK3B2raE1bDdSdQnHVoz4AUrysbr2WAwwZDkN2jFwuiXqmwrtdeJX8DhhEXvYwNLSSYUWwzuG9ukjNTqY",
  "key46": "LHshfj8HZNtFNvvdpZtgtUG4oKLRomV5kpgeMfNqQ2oTtsaTXeC6oU4VeTyhbE5QuHF3oZHd6dVq1eZzev2SuFz",
  "key47": "52K4YsEDUBGWzixmLwEG63hkx3Qd95xsceyrDcWxTXcNj18GEumVZmVfjKJtUvvzb1iUWZ63ybCH8JrS1X8YRXBv",
  "key48": "61L2tFhk9yUQ9v25Kpk6TLuQPQtrmk2HeYQNNTKerbviQjNc5nzy5Dp3K1txDft1kg1JadcdfHmspJtm1VUU3nyK"
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
