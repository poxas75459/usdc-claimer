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
    "5SZub11bX3XhyLVtkjMWuXcgneyh9E6xBejU1o3c3K8HfHNcx7PLnx3SLg26qpiPVxFDcKy69M6HfPaFSc8tyYLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2THBtpWfwXfspshs39dv5KRDWpMUzsWcya61ybFCcczAUr6hHqzxhdLD4nzXw4HiHU2K6VfDZjfFWRg61JKUnDSg",
  "key1": "5SFepAm8hR3a4LNbPqWsTyLsuJvhmR4hpwyqqBtJtiiiaLeeUfqPTjsysS9hpnffW832sM6cAfoiqEe68d3XLUHj",
  "key2": "2CT7aAR7gdszRTJoQtQQ3KCQT9JybAsbfzp3DmwsjCYLC9oz69SDbcJp6vcPevrwQ2tv5BJn5u141BhZifQpBp55",
  "key3": "k5KCMFcxGRNMgYzjPs1oYBWZTjmeSsTsq5EDawpaDe34Mk4hZCo6nzBgB6mifpT7pZzKXeXmiZbqfgfmZZva26r",
  "key4": "3m4okUBHsh7Q85ZTLESo9AeT6JF1QPBV9KvRsNUPUUkDjreWHENUZ23wYPN56PdAPJDhZmZfRJ5ofivp5HkUGETS",
  "key5": "uh6dpoZfZru6s7pKL8kwea1iFK2asUxmM1JYJTZrLuAAoy1anJ152DBPYCexKVworWvGVoyyp1BugxZR7xz8Zvr",
  "key6": "5W58pfSUnEYbYenssFZQaH3hZ7BLPoon7fHTNzkG8uddPDDGy3RyDoVWTC6WYPYC1FTPgxoJxHpecruo6bpWHapo",
  "key7": "4yir4ept1RTP8bhEkJZNZRLswkJvCiDTSZgCVH1beL128yqbYi35aCv1EfW1z9HsEyEZ2saQTDDgjekqbJoYqzyY",
  "key8": "MXFuSbnALpaSs5Sz3FwA4an53Qty1oa3faptrizyXSqfF7h2dbbw314b1tbsv3hM9afeaVrHQncEPes8AJYTc1V",
  "key9": "4xzpwMxQEs8qGcAvQjXmdqHD5heLpEALMz3ohoSHEX1YpJ6tYeRwUdtkDdzgk6HxwEGSGQLPv3T6muE31Ef8tn3V",
  "key10": "2gU3XKVHr4SFMADSETf3FWJTu4EHhkLcbM4A9jwBUrnNLjDGLs8YEmd915Dui19ZbPKZUkTTVvvrMwNcfRyUTJnA",
  "key11": "3pMf7mTdmQ5HTw5vj8gQJM55mrnspv3uMx2MxS2r9dzFDtRxt3Pr6KLbfd3WYGnesUXNZW3Gt8WjoR96zDyvs9R3",
  "key12": "4Hp3JEGkzMhbYaK6N1xmeba86wFhbXqbHvjH2s6i3EQjqUoTQWxzTig1JhCACYSXhS8ASiHvPZcJ18c7AYvurQsq",
  "key13": "5MZ8NohcKsvKczGifqF6CXmVGBLmNmh1jJpaY46ZNUzzohmQXyqJD4CF2EovcrQ4FfwUPAGQpUU5wAwBJ4GAhVAb",
  "key14": "Rmn3pfFJi5oUv5nnjhuy41AFVL8k63fnyRA7sirPFnJCswPqQJz7RAGnAhoAeMgfzJfwPbCAwxCQLgg3Aq5pR6R",
  "key15": "DQiwhsnLPP3PozGvyeKVXv1tnCb8bPbKv2hJyBji3CBsbNE5ewyHXAR54Ht24Xt9u8cYPAAdt6CBof9oNFXGWKQ",
  "key16": "24Rv5vPad8zdDzpXXztmqkN2SW1gw5W1pCK4qnov72fGF9UAafVn85gtWAWy7js7h3FWLN8XKYMSWfL3AXe3Bauu",
  "key17": "5Gqh83QSoK52PyFfLKE8drDHoram6tFZtmNBQQktpfa3ZYh6Gmb5hVLjib49mFQUSs67uAMsgnv8QsLrB712znym",
  "key18": "5tNp2LzrtivPsr4V5tHVRGAzJnMuKWSMFusnVAvbXqGaGzGaQgBVBj2YoYWc6xvehgobuQMFanCyyaS4zAj8TMoB",
  "key19": "21YtoPa82WoW9Ccu5JDyUouMusxYWQib4kXDP8KDMzqfACqdeyvmSfPSW2Pf6cmDEhKRbb5SsGBaY7cPJtAV29PM",
  "key20": "4DWVfSUmUXXFovQU7FuKPZJM5Q5za13hFc9DMhA8jceXHfisGaQG2H5gUYSxaanAxWNt5RZHuAFjaDNWMkkspq1a",
  "key21": "Nb5KEsfNF6doMibFaaK6b9FKCQTrunMPqorzNmd4wz7tkPzAytHAuxa3eqM7PRhB4V5eF9BH61tLpR9c6M1RFsH",
  "key22": "3KKGSwB68bd3REAcmaeHapHgt9Pb39qJfp6EatU7UW2WTdarSDAXsCXhxAw7AC6hobJejiVZdkyNUj1b1td7Nixk",
  "key23": "32xennaMRAu1mhjACKL78eiVY9dZcg1tYF68EM93cmHi3WJTdmd32cgFKuMnbwPXS79jHUvd5AK8kdyL9Dew1Su",
  "key24": "2UBNZDPdVyJbDQVEvBkrDpucNK3BqHQyVfej4a3Mg13fdSK7iyXVvJJz9r5nE9vpsecvaoV1p4FawRYau3FJ6mHe",
  "key25": "21FNzrCrPuEd5Ag18quqjBG7Vd53WwxLsN2zAmd2di4vf1z7ZVwS6cb42aL3UsXecuuSP8zquwWi758gkkbin1Ef",
  "key26": "36Gc1UqSUPreNC4PTT8MV4JwC3vicHDUUjXjTHghnkK1HeQNwYA1ENoLeqNacfaJLCsU7cUeXGB1mr5MmpyYqHaq",
  "key27": "5FXG3ppcW7jj8zJRJx14CtyM8RwgnRRpVXYpCgDWkHctpdtYeaB1wwrUXpz2BiixWCtpmv8WBAABnYVtd9V87qH1",
  "key28": "4Ujs3g2KVN5JSi9VadjqstpuCwG7Cd727sRccAYSpp6uGzzPPsSmErxyfm3XiDz2tjHwGmmizZP76qQEPwXExzva",
  "key29": "2VR8onqD97yvahSpvnNNt92CNh6NKJp5BDqqufkFKtyuNphwD9e7EF6FSevKiH1NWub1eHvBkorbbKKBF6JD5pXM",
  "key30": "3NBWn7MGCUZh3Cn4nJUR7Uq1QxNicm5htZbTjx3ej9RHt8RELS6uZPhobALQ1AewQZjGLMeRRZz9ohCvFnYta4sP",
  "key31": "3X1NaxBzfjZzHmxhMx7siLAEcQ2M5HK98nwkEUiGxvhPQjLqhwVvTVAyJUckorYLLNpVEi7u4udXsMiJCKnDnJQw",
  "key32": "2uJGZvcBUkyUnEaKEbGBsBpcuueHMXk4AQDHQdBA2XV2V3jFVyPBNak3taX6yZJo7NwtJtdhMHMs8bT8y3wqehZv",
  "key33": "4mfHyBvybz6p1nuTbCftdKUNXCKuMhK2q8pY9wGTqyuPseKSmmALap2Va8GN82DYjtgHee5UWr4qN7sZvVkUmheB",
  "key34": "4uTfezt4ea1JsWEJh6ABE5U9ncSMrpSUt2aFLSk4p2JmJpY7jVcrbrgxX3eUzLycN2LDkv6DG7BTBQoUDfQQCNoM",
  "key35": "3xn83Bj76esRoqxypG5UqoGkftXcj3PCCYYAqRsKrSZmTF6SaEKPYBcNRxDvtcqbZVJrr2jVXBVEqxDxFfHb353N",
  "key36": "2NVA1GmSCsmGyZX4aXS9XxvmZPpMERtQm6G5BHAJqGgoMC5SqvxMqwQSxQGZi5yM5jcw13RuDaUeQDTmyaYo3NuV",
  "key37": "5NCSE6DDRAaSQqp7x9cTayC4DPtRatfVLXk6kNPScqUN69teEtuqj6FTzWFTPi8JRVTiFtPGfswwofj3HoHMqVrX",
  "key38": "f2U8MJEWsrfZnAXQQWgMdvbzEPNESNCGCfHZGduWnzAva7huikZgA4z69AeQKwgktUoMrk3xYs4F2Cx5YP1fwYk",
  "key39": "2vXQDK8RHTgFsTuRTfextTU6ST86RBoHnFMRxALFCycBPgZ2vyuTDQXP3DBkfPM9b179gRcEQttaHhd6PMstC3f8",
  "key40": "2Q13gCuhcu5j2kRXjU2NtJsCiqq52ErfRAeg3XMxiBhRnwvTHaP7P8LePFkJieUoBmXmTGjs1JuPSPBHQh895thE",
  "key41": "fP3MQM5CWzC3GyezC2pB5inWPDD8sz4VS4rkHJgvD2EzNmz7WAGruNZyS67GJodbfXjbYrWXHWVQJjTJw8fJ9Nn",
  "key42": "5xqgWugh5fUhZaRm8NNhfXYAGy5Y4fbWstGwBXpjPqRQnv3BKVnfbAiCT8A4QmBKVCneESRWThT8cGBj8ateuQsP",
  "key43": "648N3yQ9EvjmaprS3CpBVqaUSWFmFgHhvugYwQxuyQ2vWX9an5gwbCT9ipgXie2joaLywzZPZ5rx2kCqxU1TX479",
  "key44": "3BcJA2fkxmi1FHECZmW4J8eZdQyVZym6jSPYBQCNbSioquzbfnXi3mDxTXEb2HMpaxdsak2y2VSW9e2wXBeNqfju",
  "key45": "5JKS5rC99w7mgeQswvhVynokB24zJcxbCVyPitdnACoPDghtCoKWbBmauYqTGP8Mqu9LWJFc4RXzetDyR8CeoLvr",
  "key46": "4xXBFdmhoMBpkDPYJku15517UJ1zLT94qeo8pB4QGK8NXTRm9T2eSLESfTQ9HJiP6eVWNhxPNXEVZ5uz5mNQu79H",
  "key47": "QkB8BCAM1riXYtyWUgzNpgLZp4XcMPYcvWZmVWoUNLVQbjhf74BDLKJDFzHGtKLHoGrjzoqvWqqjpTcpgacne46",
  "key48": "3DsLp6im8AJhcZDFh7CWmba7wXuDiBhdzJDCF5YAdkadP5JM82ThQFdeFB6x8Rfad2Hn4FzWbNe2LZXDTJLw2rB7"
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
