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
    "LdP24L1tcT8t7bD2Yv9W7R1eiQaddbDDEnWPonDLRuExov6Tn7eAkW2Gn57DSD2eGEYByLtwoYwzFajL7C2rbuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26BtyDfgTTvAAbHhMiMZ1A5uMsZqcfxGsXQJPn9ghYPdXw8ZNedB7oq6ZjQyLszgVZ3LsJP7keRdGDuFRoZekq66",
  "key1": "3ooRZefbGNKDSMLVMQLbSJCcTqa1by5qf481mj4BrDYd4mD8RLg9Lp5maW36cXpnheuFPZ72ArfH962cPRL2oidp",
  "key2": "2suC35xravrSVcBmW4ZkRE5TQ2i5pv8f2Wj3ky8eyy1kP8Umz7hszMi7RNkgJEHahQZuCCqNivwBRroWXZJ38MhD",
  "key3": "2eEM9k44Yheamf6ZH5hNtkpLpkauvmtHeSWPvJLo4WqD1otmPGGYKMXJ54iKWocYdH8AhiGTNARQbJqWf1VFk2fK",
  "key4": "57zEp6L6QzjLSHbXfK6iet6vKqDkmeUzbsZ73htE4jnBPYPau8Lz51MQJQX6DRrzZVQ4FMijkgJTbS8y74dNRVpv",
  "key5": "4Tv4QXMqHxc21MrkDunHVDLsnfg8GNUzLWc9UK8i7d7G3jGpmqu38wp9aYy1PhsD82B5E51hxxDTKxL8YVeSc7tA",
  "key6": "3JqTZSTNVWD26GqE4Z63HF4kWtmN1Vxh396KwMVnoB5KwEi9PPqCxfs8Ntn3L6zkmLSDGSQpzyabUyXTcwJSKk79",
  "key7": "2WqavxWc3iuEz8ZPSxHKxNmRigK9LyBZmNViEoP96WLuw13VUSSEuTsfxPWc3DV2y1SJgMEEphHfHZdhQz2QyYRT",
  "key8": "3k9LPaXTd7GC78HAWx8PPhPKrwRcZBhsgZnHaj1njRvhH2W6LFQLSn46PZfwbP2p7iuNteEPAjsBVrsbHbGPyQ9S",
  "key9": "4qrcVzL1X96qfvNqZeWCeQw7KMv4sS7A8kYVBDVpqoPCEEg5GqeFUmxLqjXsTEoi6DrScVTwojiD5Fes5AX4SBJh",
  "key10": "4RtMMEG6Ntbaxd5MetFLG1DZSPu7CqAmVPJ4zoRPQJzdw8K5n7tj1btqVzUKDZwiEb1JCHooUyH6HGKpKjDrgrEu",
  "key11": "78Lzx3n14jv12nLgSWqTzdBqfpQqCUbatQ1UqJmk2zp3NLLDr3CfWsBaiNn2wiX5SgNjz4tvth91Xxy6KvbLjCo",
  "key12": "3d7cGvB9PnpekzGF5GbhhYXWtC6JVzUu938FYhycRHdZh7F64c69ayVWhT9o2nCqAXQTfagpe246ehKaqNbC2YwD",
  "key13": "2u93TTvJT9Ry7gaDXCdvv3YzQu3w9rWMJXwpehqY4Ve81C1BTePRXqVUv6P7GfZZgv7Ev7UJJd8jnFXvUXM1hx1v",
  "key14": "3HiAKmwUfnVpa5xDeZABVy2XfGNWuQzEtCBjiVRSNHeZ8yQXwukQb8FZRXXTwtNU5EAj935ZirK2bs4hRHGB9x2N",
  "key15": "3kz7AJ4akxK9LfJEaeQPkGHrGEFiWWY2q2QhLM5EZ4aTmCrKTQSqArdnsmmcv2fbxKHMr5t2wh6t8Pgy68Rx3hwa",
  "key16": "4p6HykC6NBZpeVYbz39G9AdouFYp3XZAjJwFeXVUQgtkCWVmxZ9pFwy9ZhjxEGLvzTTEBzfqjk8ujv7yrJqvVcfL",
  "key17": "4Nt2y3wPgaxwMKY2f1ru8XumqcF6D2W2diBt4eUz3xfVEcxmbkNcN4ApSWY6PSesZxjsZposViAqt8qZhhL3i8Tt",
  "key18": "4wKWP7JfHZKA7KYrqy5Bre6YQ2erGmHELVs8vwvhXnKGoBD1WZNVq8qBE646FyA1MgsZzftHoeCpDZS18RExsdDA",
  "key19": "QsMXs1FAiqfbad1zhQ37yqhQBCaSrrKeLTyPcKxd24wYLWBbULTFkGKsWgbj9xZxVfMetPdHEP8DvFA5WcJoLJP",
  "key20": "4Tg1dQ4qUM9vUYKjoGB4RMJx6ZygQGD54Qw7rEgKVKAiGV6Af5CC6Fyceb2N92Zhwg58yUUxzeVje7SwG7p95LJL",
  "key21": "4Auoiid9cvT5axHuBGFpxXji4Z3uAsMWG1Lvz4vedKExrdEGqPwCccVTrkhJk7EWpt9wYzGG8vUS5AEkb61figaL",
  "key22": "34G5poK8XKDjT55Y3EgytDyj7F4RHVKyZDH7VuJzjoh4QRjwSNocwENKooW8d6HqTYzkZxLpNvfGttZ5FEqRbuUw",
  "key23": "5NpwVrRbTpFjf8phWDkpWfUbWpHSdJxpdN5mXotqZshRCSZWQuGXKz9C9x2QMkzDTVSm66PcneTo9FR8P6zzNVtg",
  "key24": "3V2kQoqGXCQRKPnmwFzXRcKnzZYtNH6czBr6CK5AuQXjuqeiDVE8VMtQ9NnuMgNoKrcPSPFHb1AT2pTa2EmQ7HuU",
  "key25": "2n3H7kHALLyBtzB3dG2iBabPZUdMZuGzhp8btDqwkD7KsNE44Nkf1wv9kJZz8MPoRURnjWuVHVeXgfvJaWENYFyz",
  "key26": "4YLVtpTki2E8ttWLi8E7xW7uXQDZG9d23KqU6yz1ytgeLZtVwYfvka9MmcGZYRSAeCk4fLHDLBnXKXA6NApJSwvb",
  "key27": "deS3DkkDr2wZrJ1rRqhmeGnXWsjgsuJcH1pntxCKcMTSi7LmXCZhKrLcJPxmT9HP7htZZHD4YBcGFD987r5WypV",
  "key28": "2vcNZ37yQT7togqVLqficG2QPhXkJhdD1ShydAcsDWRGHG3mW29iGMsL1AZio3RQ7YvAmQrGT6R1iUmWDBFuJsqg",
  "key29": "3ZByHCzo9f3sDLi85vSRVvhfZV4BfJqudCGNEojHKN1sqbbQUNQJMGYnt2T5cTVQrmhCXEJR3mFLQuG8RrSDz4cP",
  "key30": "DkXgh2D9nBofR4sfw3isvDigwaGULHfTLP6YQY8sxeQYyXUek7CcWdEbRMNJmQvDhUJnvnWWZ8SP5HxaPBUGET4",
  "key31": "4oNWptpfJxuz5t2BKoMyooF4YktkGVLJjEZizqWY3nWvpPnxFNMNeahTBiyDKBSoM6ctomomoqeFvgLHUK7SLSdu",
  "key32": "dYhbUL74e6uHuwGj3duJ82hzzBRVEzCWahWomtPtyAKykLKgxe6VHUwo5ooQcb9DQPHDmr4PU235HqwPfwo6iST"
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
