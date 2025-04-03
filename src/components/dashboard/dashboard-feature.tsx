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
    "2Z494NBBtT89UAxcMbVq7U4JHEouhayF3GajL1cTiNRGyJ7DGuKb8pX84a31Tvc5UEtSqWEKry2jDNh78XMD5ehi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eo4tCZimZQkZKPfpW4ZWEWNfkRweZcJmR7VTYiGTqNqR36BN9iEsYra3XTNUNXwJLMH8pj77dxFvgDXud6EB7qL",
  "key1": "5F54v3FPrDpUr8NUMTcA8P8vh2K3pTkJofTyAgekdTLMi3QPkHoi4Uv2zFDqiS6S4wYkv2AuF2vqdRLxyWovfUsT",
  "key2": "4ZddVYUAhQuB3Ay7gMLofKy43LLraGYuvyLbWnaiPZ6n7rLJmqcAJiLVnTqzaLz5m1BubDqGmTA86HK4zNW88Mwd",
  "key3": "2jf3qvb8RXS12siBQ5CSZKpoZcaH5JgJASYYwg59XqRqA74QD84WY8gmEkaUEswm5Jd6fPXJb8ZMYmYw674RrMTc",
  "key4": "2wfLAKGw5ywC7APV78w8q6eaSeL5mzCU6PGfBggcGjD5rENFnDrP5pmJPCpPJKHcfNqvXhsjX2bDSp1kzX49KmcG",
  "key5": "4283DVrxhwTAuzqn2QboJ9dKJrScV2Qt2toeCwiTgxfkEE8Dnqz2KqVXguNGtyLgxKWRYUfNnoFe6pV6HFYs3FYU",
  "key6": "4qKbbj3yodVoH9BkYHNpGs9Ubrhvj86FHvKTLbDy6jCqCv9x8ps2Q8toRoFRs2nyA8M3L3htBY4CzjbmbTPfEcd5",
  "key7": "mVqEYV6m87Ji96rPFysY6bBnMVEhiEzpfGKYS9TtMfFZvwrZwpLetU5QGF7mxbVy9fDWcq3eHRn6EaCENs2Nebc",
  "key8": "3q81onyCFRDgKFrR9XyUhGcj1n8d9cSvtNzgYNa8gAJ3bjeJJcTdwZYwg6KR2trzcXaxedpT5zdPce7GtS4y7krf",
  "key9": "YkJuBPrhBYu5gn7FDKUvvY7y7tnCCgKpEfy9WEyntf145TAqTmDFkWdEE7fQv6jEzjpUXferCdyexQW7wF6o7pL",
  "key10": "3xq1p9iQPGTjsLAydtKCzSLUsTivjP3WFsg6d7CmDebcKQvEpv64xjZ2fGqbMN2Mj8NcKZw6DxaFzGdsJP7vHqX7",
  "key11": "5bJUvYkhebnTtAFQthLNktEfFZh4F67TKhZP9qwuWLkJjRJJQQt2s2vM77evSKw2pvUmH7oiai3J3SRvt47cTsgK",
  "key12": "4DrkhHKLJMdqEvATTya5vSSymvXp9dHNH6jqRri6D2FX98hjChcaweYfeBJ8bmCKwoHiZdb6ayU1HYLXAkdDYU6J",
  "key13": "5xFN2oghkz97kCwKZG1xNMkTXZgLrwMvEfrehGGebk2ntjoRF9pA52nUV1zG5gW8FURctYoDyyNAujRQNDu8S3ng",
  "key14": "3RXTf9baUNt6gnbmY3xp6HHGnY3MRAxxiM2cWsvxNJKfySkWSwxjnw7AoJhGG8urQzDmeknFtCWFnWNoSjpLaRMd",
  "key15": "2CCM4G5mbVmfPqbcGwexy1WRsbuKvPmVr8AH5GyhLMiQ4VXTKetAXYsmpnzhUYTYBSH6Dnuav3Sg5Hx5FzbAj28y",
  "key16": "5qZWmAKmD1kJDV4KgrXw7JwRJneKXpofoS12TwbhVWEAR1rSjzjT3geqEgBbxdFdFAjq28cywKFYHkZLyi1ymGTw",
  "key17": "5jtNc6zAfgkdCqH5zzwhaxdbAsssmTisgYM2TReRdBoQ21pV5j1NBXK8XRWRqcoGbDrsxyrteCieUS3gb5Qt4U9Z",
  "key18": "5AFHtXz1UPrHRvzW2f5vqdzPQcqXVWD6iFV7hxP258mwJoX9jmExT8YKuzuR1e6Guf4toTS48hQwF5v7nD5TpLTx",
  "key19": "32pdSzkRUpHji3uFWwK6qy7vWXxobSXzq48BzmYWs8mztTN8AsVteRCWGddmREgsSVbk4DCVcjW5ReU3t7foFAAE",
  "key20": "5JB2BLScgSc2q3rT2mVs11tKn6Zwi8T2yNzaxdSqAiFDEDTqD2LMAnci1PBgEWZdVZJykRgehnVFxb7y69MbedKB",
  "key21": "Mbq3yY7QzGXPHgDWEJ3AnQ461dVn3PM2GAA3mibvJWojxcBANQW7eJJpJzLYNmHQqJedyquVDHuF2Xapx2ZTsCd",
  "key22": "2B7GfDax9ZdR9cJf7asYTz2VdVrNpd1fZNyFSyQFC45wPutD15Vr2xQD6QNNcXMWsH146trr13gCsiZtcN7Bcaa6",
  "key23": "1Q3HyjvPTAKEtsKWRNtwa5jiGu6Nx9kpCTMqRfo4xGCtazMYa4U81rRviLvRsJ5wheoWyVNNW6oHWgjeRvhioMs",
  "key24": "AfsPhov4ctyRuhtGzhTk1wGLDNMZdt5TZDSqNVtgi9oCsTG4GFmkucn9DfpV4m8ere6TbRNBQpdSJp1TEFtauko",
  "key25": "2VHGofkLx9RnTYg1R9MRRTkrvxqvs6VCbumeNBxgkd85qFqmENFZWDq4ZDDfK7pFhGp7riUetZX7MhoBtbDpHDkm",
  "key26": "3wexKNqYajgjT5Cxda6BgQsXtL98cp9msGWua24mWpr9EPLL6XWr3ps4BtPqxPjQCGKJwvuvvJikCqbtzWvNs375",
  "key27": "3RXsdruWN2HYNmWEDX2kRToNn9sJwNmvR3TM2n4NaBn5udHAdjNPZwaBrNYUHGJhdhCz7Ttt1x3A2naqYrA7yDAU",
  "key28": "3rodqZzSoqMjwZxXDLbHy1NRTyzfyCqLjWwNkmzqzqf62egUyW7YCj2xyZaBuvW3CJDjDcLu7xqtanMTAiGbEZss",
  "key29": "5KURywQ4TcoyMdnzyw51D2GbhfVqwKLcsZqESeyY56MWdNz8eSUe4TbtKyq554z42rkRLnbjVhvxJ3VuvzcpK8Vc",
  "key30": "2EFSDHGz3Yqd3nATA4JjmySDM5hz1NxTWaQ3Ph6x4dvNNzgxp9hS667vT4bGogUb8wpS9Uk4dfTawwf5oSN411Kq",
  "key31": "5BnaJNL83y8dTb1THorq1P6FFUWc3f67jTuesvB5KL2xsgZYziN14AFVkSU3Rwjh1TR9QaCr45WU9vpBczWyPXR1",
  "key32": "66TjMxN18i3RU32JndY6Wjg6WXp7vSfYyu3EZ6e7Hyj3TiLN9qrRV5bAhV9MePYfdRGCXh7kCriZUvHFvKbvU4vf",
  "key33": "525rcPjfbtNjhz3a7NvvpDhhK7UuqaKyE7qfq42UqcaBuxf3qgEdbWSbExdmdajr1pmzk36874RE69p9m4rw95uP",
  "key34": "44o2XhB4sajra1Mt8CZDYFpqHMMt9v8bdRvPAFxL3hJfgwrT17sVeeVm4d2a5aBCojLBbAfFFN9iy1uUXoUpTMta",
  "key35": "JLFBVcbaV4pnavkVmZj9idgpQ7igCw6wBo4WfqLDhhFEpmvvZ9uDJC9u9sFTachEEu6Rd9W2qpMWhaYRuu1qw3Z",
  "key36": "3hpi5tL8w317GYQn7j8AoSTTkXaasiecoSLdcCGhvoFuVnUFzvNqMcfD3J2Kgw8SZZb3Lpt6LeMCTgfsAN7VafE3"
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
