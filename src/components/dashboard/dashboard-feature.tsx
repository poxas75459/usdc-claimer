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
    "2JnDBMVv3Yy3Tu2zyeHjmxEZjKQsfa69CX7peTg7MM4GSj3eXgNErEjnm34kbmvvW6EkSydf4TuqhdbqVczMpfLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uE4b8br2eUhDbt6irjin8bLCYsE2v8vvtbu7uyzsZGWreE9kuFFUz6RqfKfjSk4pVzS2gWL59Hzuua99CJUa3NR",
  "key1": "3uC3zSNaYhF9khfbsqvg97ozPyFrQaB8WvJVVzyXYBiVQhEDvyGMXQ4e4a3uiiATuwm8mag6K5aDyC77d2HciWAd",
  "key2": "4wSqtJsRvt56eaM6MYm4QgR3JD9qAKE8PsLNBxpVfHWwLPPAL1Cqtro6QZpBriGjcSEkUQgVBzCQkPGk9dRBCTj4",
  "key3": "eALd3G3r1pKmBQ3f4MbLzfaUoE4itvtEx4iTLs5bkNvc4HduxQmcXPutkY2jUFFJq68TmTuFNDhLzVttDeLuToH",
  "key4": "38BpBz7JzGXuMvRqQzD9RiK1M3vF2SLYv4Fd9TDPea5oXDMGvQZu1iQSo35W9iZc2691siCAfnC4p6gtrdA3FRZk",
  "key5": "3vjHrquqjU6kLHD3N73K1nSpVD9SeZ64HFgWT1DU1Ve5GDKU74oFWrC2Vm3whejhwiND6VRysw5F7oz58LXqvSfu",
  "key6": "46gonaa3Zj69A5CwrgCNUit3jFHssGTHny9TCpVvZwhZRTTd6hEt1L9j8JfMGFprx1Muve1z2Ea63gYDPk252nk5",
  "key7": "53CqPMSH3dXhCqxEcvD8NpMymsmKgbAift3Wb9HwwBiyE482BDNMdVVdJ5qrzKPmcVds2YzigyycspDhaLCu8CM7",
  "key8": "2ySqot8Y6ymWwrWw65UkFkZEb45Wr62uFcGFNqX3kzhYuFDyf3ktffJa7cExteyYZvCd7fLrtauf5aBiSmaEVb29",
  "key9": "2HGXB3VXNE2zbG95v8Prw5ojYZXXkvnjrQxQJ4p3V8teTs62k4zQWJeKVyePBgqvatUB482zpNPJjKjB1RrHzVs3",
  "key10": "4p56fggcCRAo5Z2uRy3onxzZJnDeoa1NfYGaVcBg2PE7VHKt8L78bKV3fkoptP7n17byijRtS7WsFN7pUYH4Es6Z",
  "key11": "4vXqLDmbJC8U1kuKVdZBoidXAyfEBC7ADc4jaGWPuZLJ8ataerikvfDE6VAy8wQCQUmsSkDBKYZeqJMw84zc1KPW",
  "key12": "31WE9QxLhrjdJAu17dwzhd53pvJCE4GGcmwCWjxp8EG3Eh1wzDmKyGYkiT1BPnMuccRgNdZaGb85TPTbXmAW9HqT",
  "key13": "3uJUTi7p1EPehJQHKovWV6ma7PdYNuUdcViqD1GrXqxvNttvQzY6QkYeajMp9rpsjm85uGFw9apxCRgvScZTqnmf",
  "key14": "36Ua9gX4s5ERLMnBfDWgkchyb6ML6dbN7FJKA1pHsMd7UKYY6moGdwoeJCefXRNMxcoGCF11thZb2bNEmdCtz8cv",
  "key15": "47bYcx3eg33RedYSpNxw5fFU7vHuN4dAm9rRYruqw1FoikicqbGUe6LKvjgbY6Ccx9bZQSeVppgV2dp1rnS8sxK9",
  "key16": "11EBgeZ2pjoTsHugRcdURXQXjKKUVnxXL8bhSngv3wFcrWonTKRWZLFMVTkuNsrp4Kxj5AhR1rY3nWkLdTAjupz",
  "key17": "4Q6uN56zRViwjD55qxbgNWiiBYKu6ddEe8k7TeUR5Eu5B78Z7RQ7NJntHbB2NFffHACxvS1U82dabQFcuS4DYduL",
  "key18": "2dSYiiyG59anGK387ELBjywquYNxEqKtinuHByKXJ6tETak95ywu3xPQ2fqKrDe6Zhz5ccN7KWoR7mrBewjoKtPL",
  "key19": "2Y53JwRfBfpxFSeNc5DFsRh7j33MXAUcYnsRj4rzmhTqsN9WkE2ng9iN1cgg4rdoTmSDkEMQrjsESszJakVCuCy7",
  "key20": "54EKmPExjsLzHTD5NKrE18LQ4UWf2jMuy7xArfewdZCTUGgMcmBJ7N5SpJxY3rinXhY3kVf2MN2u8bjUKVrzAfLL",
  "key21": "129KQvcW56E9ZNQmnEHM3oE7YStrMmMMNVbQ8mfETBFJZ3ifgaKDVTiCUb5g6Aqr54ToQZ9cb4iqodvPqZxKSLrN",
  "key22": "3tpikuxL51NjE5G8uzv2gMvHAzguvpFeu87VW5ZGVcVr5XmT85M45B3zbTSSmunTZ9VinE5msHZVjJtJ2U7cFcR5",
  "key23": "2SNrP3fi5TCXWAdcfHigD1pbfqNwDAtB7Kx1t86TBMevFD2naStq8msg6ChrP9cpNq76WXg9eUiXyLYqfK7BCKET",
  "key24": "1zDtU1wCHQNVZaytndyGa8dt3sG6Xhdyvp4s7uHv3me5i1Jy9q6vT6LYxE8yyFsBSorfXCiEyE77AGxmmCs89iK",
  "key25": "3pnSZibeRK9XVyJLu16b5QgmVENCXHbx8ssSpXXfFL9naMrXTZzB8qWNAstLLzRWcRDXazZVL8xa8222i3BwJQkD",
  "key26": "KZFG57Fhw6G34qggUwbFEK7VFKSHadPqhaxuh5vb4VwrQQ5BVPPqiSmEaT2gNas9EZDMhr9KLjjzpJhorRhTFD8",
  "key27": "2oEneiGU5pzrLtdwAKULYdEE8Y1d2zeXyKNqW9CWJHMbxoLKEtMVhDiKc2XE6xzruLsj9X45jxfAxHFxbj2M6NYU",
  "key28": "5NsH2QAaryApvXvpdanYeHSPuY5U45B68oTMe32bfUZUUVHLHLA2MZDAwDVke4Z2cajX5xDjLDrDqHkaCFBvb28B",
  "key29": "4K1tTgmEjW6azVzSp8D4DFnBfsRQ9sXLuB2kQHoMNsGQ1VkiHgCeD84nas1tgSf9crc54nHEHtph6diPCxygGQnr",
  "key30": "3bncCNwUtvEcG3hT1B3doWAL934npuWgtzZBSSH6BCfKmqY5ChTQp6DzAN32taaDcW33fLaEqJF5ur2FiF2d2q6L",
  "key31": "2v9kcCNNS7BD1WZpDH4macqUeTqaLCfYEKFLX6erNPdSDiRktmUuCeLZQ3hUyzpb4k2C8YBj8dbesaDWT92PMFMU",
  "key32": "4pqXKpjJg2wXvgQjVShEEpvHpidCpaM4ZkWMbm1PU32hQ9npCBKX6zmvDLofFAtAmPQkxnix4ryWHuKAyCJ9LjFC",
  "key33": "xftomENm5S5MwqJuncGnZoJRvLQwcZphideivXL6HeeonvTXeeN9PTsbnVReg1nXqPWpFRoymxwCQy8ig5Qn921"
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
