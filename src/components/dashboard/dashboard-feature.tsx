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
    "B6FLjURaixochKB8TERzh4oyUg4foor3FDE2ngNuE5kqjjTUudkCsocQwwzc5guGfCj7c4KwGyZ9QSHrECtHEVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qi4AaHop3fkeTDZxWRknAnRMHj5qbnCH6WNPFVVz8itbr4k75EVPKTdDNEt9uJwpc3MgdDNJ5R5Lx575eeTLCaB",
  "key1": "2uy2NiQ71rGrXXZrSzoNiQP3WJ4M3sfgUYgaiBGyzmAwn1e78smtjUJfNgvvdpqPPszhZD3HgZGgGTwHo9KFjmrr",
  "key2": "GGrhVoLi2PMQ7JUUgMaegLU6JaqbZQ9DMbtFhGQPbTP5P5FQLXrHCm8UMUKEXopb4KvjsbAG6WcC5TT46iVvvZa",
  "key3": "3RS3dTw333EBgUwLeBdFMCkW8f5apk4GQvRCWXokkGKbEgcwvCY6QaQ4Uj3LXQRFjG8LKrAEdx2Hifj4hPNvkbbv",
  "key4": "4DSD8UNyryNV8YCS8nmH9yJYL55fSsdThcfNi2aywhwsX1qQ79KrEiqsaod2V1zWTSciqNgbF3UPEtzRsNhED6NH",
  "key5": "5VdnsqkLJs3AJABJVqkFp1bgCVQdGCdd7v9jyFsiatSJXTPisKWSqAjb4QS7ELnu65QT42hY5NQC76DbahBikZsv",
  "key6": "5bNieqV4YpBa3Q1858r81S8FvTp9uy1boMj4TkGbEzzwZqY7GKfyGVX2Q2rKgPyfNbtUjiSQbTrWtiLCHf8YczAR",
  "key7": "iAseoQzQVCU2aXiMCpMhZwmBdeBc8c7UUA84r4BEFokqcjdEiF4Fah9zSAdbJYS3pXZyFkATi9NfZba1U2ccBhd",
  "key8": "5TUaPtGJiQdeiQthFgjhch7ZjLnmNX8VKrwgbjVdRFdqqMZooa7rfqfoc3gUJrazEjNYfH3zCJqanprmA15Kkjmq",
  "key9": "21M37keFEgW5F9fYEPEj5chofxa1Xi1Q8hmEEkbGquHCp1aKas5iCrhp6UGoinKvAb2hn1bTjJiB5atFa4MhqkZT",
  "key10": "3vPnbB2Ro76m5FVA33YnbfTstPG6QoVK5vzAhnJZ4EhbmkAk9EYiLLa9ws98zJriPFHy9ymad9xKYYs5myUbWyCK",
  "key11": "5cx4nJzeLqZF8hECUcZkQwpGKaewDMofQ6i1GECzGig562xjS7CtJ3YjJTkUGmB1BFk3CK7YySmBfKXfkoRQS4KN",
  "key12": "4FTcoiRcrZ4B9NTtiGz1mM5VYoyFtJnbYAt5GgLHzbvRjXyc5AK4u3WSYMvTiRTsCaxkNB1CZfFDsMb4FW238mfY",
  "key13": "3WFMH6zX4xbLXLPGceQDMmKxoiYK8WxgpkatzNFok1FAwnjWeCoHYguqF7Hhnj16TCrJpSXNfWCdHhyDgFXhwRvH",
  "key14": "2cAnU1yEEvrRYwwaUZwXNYvNCxUUxzVGVC82ZwFth18exnBRpeeYyd4MF8tn5pB6GSPX1ScEQXGym8d2P8Ei1cgW",
  "key15": "4Am38G6ZdvsEQBz8zq6vj73LUmEL4iNZcYGH733BJt2FKYg7sJwypRS49QfnDEXM3NdLz1S3WY7bUZgXtNBmmCwk",
  "key16": "DUVWyixQoq1VxnY397iFvYaXurZegRgBxb5p3LS3kE2x24R9PLfaeSgjUyVntZu7eV8YB9JWt8CxcMttDQKnR9J",
  "key17": "3M6TvMg6iQignYX4GzteP5F7EM83EvAqStqtVETdjs9swb2ZsiKiWcBeqnHe1T88Y9mWSfAdZXb3LJaYJEBpk2SJ",
  "key18": "5nLu55prPoYqKyp1zR9WKM2BKi4n8zBFXqK9Qrq7teiBxYrFvti2PcE47c56behg3KHRFKCLKH2bv1sq5T6wjZjM",
  "key19": "4Ymjit3jbpM2YGRppKpBr9THWqDkmpAcQfRTKwyoYJ9mvZy9U7H74tbhwPUummu2MsHBQmqu7jcaTjdcQ1x1zBxK",
  "key20": "dpmeJqX4mJ2jtdLFFLNqLawxb2jdeA77d55SmeTsm3UksBxDjssLxSYDBFBuy4dam6dauu2DXW38Bb4EAcwYAyw",
  "key21": "2f51Bp8WSn1dHB8NrApgRnCJXwjgGYxYYm3HJuav85Gs2k17PmuVbRbURsrFC6GKf6jkE9nqydMNARCrMobyjv9e",
  "key22": "44qsERjztqRJU2BgyrZySLQtmuASEYetubSdSX8rLbAKBm7q4DeFaHfvbdSHGnQEh3dBAyARARwyFv6P7Paj4Krx",
  "key23": "41QkzB7kmR6zDPfxoY8ZohmPqsJmxfm1FZUeYCwWC82SFxxRyaB3Tx8gQaivo6vbHbCufGUPc7ust97B7b1QhYXy",
  "key24": "3CudydSkD7GkTdxx3eTqmstEpZJnzFKRcHFNv8zHwaSfedvarUpyLjMkhTtJnfjjvisUwkP8myRsdRbP6NLtdtYN",
  "key25": "3p11nBAcLq7XPUoqrQzohLQ7JcpUpUFmRQqsQnXSscAAeUwA9MghodomW8S4QX54qYr6ahkUepMHZXkEtvCutAeh",
  "key26": "3fNTkNemwekx4XWsJwzhAdZ4RnfdR5T3jJ6jYRKUQMTo3GBuY3pLQXy6Mpgux5G9jvqpLkvqd1qF9NWKirvMfZRi",
  "key27": "593W9xhtw22eUvv2q3MABobcxD7USEMqHtvXLn22DCvKTfwWqUKzCh7BzXGJo5xkYeb1F3BT5g634PUu16bXBTxL"
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
