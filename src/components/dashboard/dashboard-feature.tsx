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
    "46y62MLzojnyeu3ghEMsVEkc8ce5rMYoxCGh5Ju949mrhE3VW3KEuDnJYnab5G65bj7n1hpm5gemHrJdEwoJq7pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aS4XgdrHPWCn4wKDh2Ps7jcWhti6rSdQjyj4dcBN2cm8xTwcBoqL4edadK9FaRPAwVSPUKcWDJAzwHJP3Y1nkCv",
  "key1": "qcNdV5bCtd8j4zmoAAEDZhncC3gjNLRMDYWjEDcJoHPVeefh8bnN3qgzTi5wT7jGv6hFZ57CnMqQyjJo8LSYfn7",
  "key2": "jbZNfhkA4fSpzaq7xso2xX1ekPfYPFGYMHaKLUNZVVYP2bChsUoAhRmcqHVGvcbAC8hYeYZZnf4z5ntW2kQJFZV",
  "key3": "8fwsodrGnat8T6bdsB8cLCfXPmuMikxz7ZhU21KssHvs5JSYHspDFjxqfAGjeuZvQagq6YdVtCPPkXH89xWpfDb",
  "key4": "TCJmqYTHqZzc1bcZCa3H4bRUuGWDYCWu736TxAUfQerx7So9yCqiD5AjTjAyiCfckiJtm7PcPR1n68SR4B1Ueku",
  "key5": "3NU6GoaHzfxKbbMNuCtokzJztMyDuJHLbLqXUK2yAdco73WjD22uFvFLDSToLeHF6gQcjSAhdMUcfB77dbVhX9cq",
  "key6": "2NGPGDwQmWMiatojnPsXh8FK8XFSZgfsA6ZXgQrv6dcRLwGBg7hQ1ieyi836KSisu3e2Zif6rsq7JmxAgSHwTRRL",
  "key7": "bd4165BmH9m9ZbRF8AND6DZDBUunGVYdnhXQHqQ1xL8gDpi4VoYQ8u5F2vooB3b7jj1Y2LoJLpDpZxjy3goMdpo",
  "key8": "cBGu2KW7Nauh3AntWFjYjqsGUPFLc8uqKrTUavTFkTs5BDBXM1uvENQgNWG2QbQc28ToMAH2kPfXnNhZTtB4R2G",
  "key9": "RSAtqMXfHCcdqfC2GQtZL1EQJMX1rCUuovKDg65uoUH38ZFknyY7Gfr6ACgMguhTgqmzhZbCeDJVx8kmfTYWYKu",
  "key10": "2ohDy46g1hXNonXtT57ELxN4Wvx9FC6SerTaK8PtCZ6dMC5cJpMYsRCBjRSxNQ1AH7L1Tg9eUzX6pFdbbAgcFXMW",
  "key11": "4AfVuvfGpSqPig3cbv6gGvdvmHzVcgPoaKGUzkpEQwU1Nor7ya6LufpUKfuzvddwE866CNRKj3Z1QFjDg9EUUGja",
  "key12": "4neRh9STjZZe5gacPyjR4TUQdf6xuT7ZdyNVPBthQyBdqbPWkwJAtzSby9kxy9WxyRoFpUnhwk3XgX34NEEjJdPn",
  "key13": "3xrL6zrGe5sS7ergBWyBtaXpj5PdTMk9gmXJtFTxWDoS9TJvynTFWiN5CHeJseP3NdEpSeDMjAa6dXRi7J54Nqwb",
  "key14": "qLVHHxV8Jjtz8YnZksHj4Uzx6nH8YtKgU2ZMC2nnNpmodJaoC1UUTPkVikYcZPmHUexxYVEiAPmjs9EQ6iuDVSY",
  "key15": "4vtcBN4abiYzsZWVRuvLupmhFJapMqDPdMxz9R9SQfvE4KHxssyumGY4jHQ71j7um6S4i2tiYj8aKJ5uBWKJFghc",
  "key16": "29cuKG68isZzEsp1fTWxMJeoizKHzXeBTDmL1nfR6SJck9crPn7VgpB4nfzVzY7xen5TtwHtYvhNNG2BqtcHkGTP",
  "key17": "4siGAdepUirw7bhWUbFcd1phRoBTa56Sm4bQjSxdCJWSejSpMhvcEvYwt39U4fm2CDd7RgABsBtSUQ2KU4UfH3kz",
  "key18": "3gS64FW1H3KnsbhJ9JxyFgeccdCYB2NckihBiGQhQtBYz59qbtyifvwhQ3XxSQTQt7xXsVqzyRkYmHcAsN5i4GNE",
  "key19": "3NR9K8bPJRCvFnRNFETYPonj5TdGJbZA3kG5AAPdSsPS5KqQHZQG6KVF82HkubqRfAeeGfBRAMHhLBdzmfny1SJj",
  "key20": "5QkYXmVgzH5ic79oau7YZYCwF5VHkXH1y4sfoGSwqL9ao2AN8HU9M3kqHWTCsf1gKwxoLyo39UDeihNGgi4dzce6",
  "key21": "Ddq52r2MvhNQYSSnyQBCnf3CK3By3YJBrfGQbaRkngApuzxb1xkZwpKpfaD7yqmrhoJUzidcsDxqc8bvt2mp4Gz",
  "key22": "3VpkWuzdGzQ2xcUfcJFtk4xkSzt1MAbQtXUgqTQKjHmH8TjEi4Sbm9TCexHJdFFJ2x6VFxYcyfoUmonQ2NF2hPJ8",
  "key23": "4yM4eJ5XrgcvVbAjQFn4q8nKYwEBr22uh8XTMUgsGLPWZRyto5qT5fXg41H8ukZdmYi2iZTmj8NyAYpiRoESpFHS",
  "key24": "5z6v8TmJSvrpLbZYEiHkEuvJMYttUjfHd5cmvjRbH1fT92AWXxCmcJzvKLoCg5TV1nsVFeJC7GpECM4sAvKfPw5L",
  "key25": "hVDF484Q4YFQhGkJW4kgppLjZN8DPks7nCeZq5tBu687oaZSAtJCQCKjTfLptBAEKYky3RUjKZyowZo6Hujd8u4",
  "key26": "4n5UoQ2CMYXqpWnkuLSggA8WoFvN2An8LnbgnAgX1U3gL6jpg5JqsTFqvutfA5vzbF2t3Ce68zCJdhQqTWvNqsph",
  "key27": "4wc2X479p4Pj8QbTLTCfYkpjjtFoNvUDnLwkJ5PCnuRriiAbAYmMJrKwQzBh8XnE5VsHGLf5Z2MWNcckeTDckq4t",
  "key28": "3myWpndmEcQtrZLXZLmywGcpLEHUbtqrgxjHrUVAMinazdhTWPyH2xHXLkumJHNum3Ky9vCotH55Hi2HU5DDtj3q",
  "key29": "4fwWas1VmndQv37DJsBVTnJVMJ2kRmKJSzyUbcKmySbqV85S1xjLsqGes5eBS6xjSYUYx2HoCVVUfHkLWbZN8yC",
  "key30": "3rtb9cbabPLZk5HTQL4yQQFojy9J1x1mhrmmRsfiTF6Y2XnBY3FUSLXbuAffTc98sAgyWbvdXpSAxH7qvcfAyk1S",
  "key31": "4BiaWgmBpKrMutUPVfquHQ5yDTmn9hiaqRu1o4xVMWz7kYGfJnmnLvvaDzvYFPeLdNqMEqUWSJaYoyaRv9hktfK8",
  "key32": "2PxMGEZzLxTvHeqbDRXzGURphfv1tT6ck78nFyBEqa462KAo8eAGX5zNAujJjWbfCp6zTfY4eaQR1WzQyz19HV8t",
  "key33": "5Duq9rbnt4k3RfgURTqvAaJdPKrFyvhFEZiVruXu6VwQYFXhf2f3Py9STnwZj1wGv6tkbcruGAwEjHCNRimGvUZF",
  "key34": "PVJAYfqKsRtA8Zxwy8VckADjxPRJoZyYwn6xvHCQnQnySGw9ZrkpxPHRzo5rrbkwtFZzbC4NjxRyy5iwa3ifzDE",
  "key35": "5Rjy3EP9PHcR18RSxfgEhboeWYwj8hJjHkFCsu1423j5RX7eowmLAmbFubkoKUxYbRUsXJYCKR2C99EtnDKtRhNL",
  "key36": "5rATrAcRXLXFvojAuJSWXjNbRPjPHMzMwLoSZLpk26cNa13ckycpRmmeuuAhtzHS4XcnQmraBxx3meYk7XFDvuVD",
  "key37": "2WMLPWNxNnhjyNqXd1bk6UXbwBtKjH5dx9j4kRKcWCAd46wEQHwZuiV4PD6PqZGgXqft9QBPDaXohhBMmh9G6Zjb",
  "key38": "4LvMhSxfzFpepxrUTPLVv1jMqRzsh5VXPnyzNiYmeg3tCxHk3hTVFzErJiYckjci747cyJNVKk8uELVFzjQi8BMA",
  "key39": "2eCvhANzJME7H2dwps5oocBxeN3MKLmBvsc1MQnLsEHP85VjY4f6HKjyEyf6xjQ5p8H4aT3W7zoGVEQqf7wS8g9J",
  "key40": "4vpmvbNo37HWVPSHzKXosNoH1gE8saQHgVfvTejJhDcko7idy7tGf8NAoZWb8PfyNAMtzS5LZGkKDxjxP7vH1rQ3",
  "key41": "35RYLTKkxLmSxGoEL5DQ1UwXSDNNjZm8rqQEv1eCLjZgdHPbU61BnymniaANfePVUD6A474XZtMme9wXGp7umEpG",
  "key42": "2nwacHuvY4Meea7aXBr1i7yWth6iNgA5SCTezSVxA6YXEBN97FJwC3rvfLAbn6GpAVd7mmLGK1jTkVqFXKVSpSsH",
  "key43": "3KVLmbpTVxAX3vRaWRbvJdQJrNJdqZcMurwe2HLpgxWUWoyG5Csicc1PVP3Mkw6c83iVQ1UNENThYun3rAvH4Zd4",
  "key44": "3q2LWDieLyKiuQXCbbQcgUwtYULuRvJ1Zs73nZEPBZuvYfgqTrWsVRcB9C6AhcJhdpX6T6uz2oahbmU7SjLfLGrE",
  "key45": "6SC7UAJcPSMdU7zhEBBpvswEzzD3RKDxGdmRnAuRjnm2td4gvSFqjdqiH31hzawKnPvX2DyTDou49pBtEVeAgA7",
  "key46": "5NEpiXFnDxUNyWkqCoytzQ2dHKjzxqkgmMhrqGCMeFtzprCM36S2QZNtN9UczxL7jc2YEH1rkx11TLR4U72dtHp7",
  "key47": "4iLpNWDwzDc69S1vWrN4R548V5Vm47aJCBKQktq5pyhSrhziQXHwrMcDqBYvzsRptLoQ7CG12Yrk7DRGSBVB8NJF",
  "key48": "4G7Fo2a2caPzEUkGVv6BzsJbrEXqBJCD2JsR5riqEk5Dkn1mFzxbf1TcSCbSuch5Qan9k5zimMfswmDfavYbUHxS",
  "key49": "4mnRfUydBW4KnvZGa4yrwPWZsASXr11F11A3MLfG4nUtYqt5Rwru6niguv1mMabauqoSuqj6KdjnEpzvCuReQR8V"
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
