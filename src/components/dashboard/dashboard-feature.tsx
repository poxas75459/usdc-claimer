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
    "3TY6Lyf4SidMdKUmRTWQmZPEpj1GZFfeqXGYXZhfDADqtqTy14E2x1NvjgLkJjPzFc2qg5xSQCEy8CAQf8ehj2Um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b7tKaAdoeQNahKkjei1tZEDD7iGeH3ty2DqG9E6xLUY7yFi9mr1rCFjGJ4eHiKjnYVP1Kob1zue1QNsA5TrjthQ",
  "key1": "2AMMAHaRfxri1SMxVjN3ADtbyo77oF9GeXnXHQfzkL2eohX2tMqgWTTCd3M9FqhWRxwGBLhy2pKtw6AobBhcba55",
  "key2": "1teBDKYW4WgUz3cdAyabApoYK4dSSdxPcXSpCjRv1hQj2jVyQtiK9g6Qbscix9KLkDDrgdgDwhLKq9f2vgVg6t3",
  "key3": "42KXaJ42czxaYvPF4j1CGALSGZDVwowjVwapXSTjwxSwWcRMFHBwW3Qn5wukFqHdNd9wpwcqyg2xaBGPR2LQvq5c",
  "key4": "4Q7ahqZc6tqxkWBLwUZV7P2mxkWoCgh9skL3y3wpKyKaTNULwpNMNFQjYxucSjBjzdQPvVvHXhaYYPSdivf3RKg7",
  "key5": "2dgkMMqUmefKBdcvd2A6XfntLPp99T5JRqzRGh5i1gXuY886xdpVwbqmo8wuMDGSBKVvdpU5jV1eJHHbR5NyoLdR",
  "key6": "5pLz5kMW5f2wFVGApM9J2ZFQpkB3V9pAvWpMmecFimefgDe978gJaZp9Cn2GQsjMVeEsyx32h1ivGTpjoEj3obCP",
  "key7": "5zH1SWqvSQ3mPhjLsb2mAvjfyyKfGyo3oHoR2g7moYdzqXzc3kLGDi9AxLR2nD9ntCJUc4xG6FQpn9mUNK6zqGGT",
  "key8": "5JGTtYxvKAdd2g54DW9z7daGPouKuUK25d1x8gr3zufq7HFgtXBQZu7NTjFCWxo7ZDZsDnYCheMrmj25tmVQjRSw",
  "key9": "4hZMaQqFLVJLfQxf4Wu8FvxM5KmNwhbmuEKXw53d4uzFxvQzhggNTdxiEk1tsjQeffaB3Yd9iPYKBXN62mq7x7vq",
  "key10": "4AmizZPtyh1e5a55Sj91XsDXPhDPaCk4tEK12b8p2PpGyo2oQohr5oH5yGCJxr5rnmTcc8D8pnmTcHm4EwXnqaDW",
  "key11": "2Aa2udfqjE8JmLoAkg1ZpHHEUBfJe533U6X2ZGXzqwhgemNSv1KxpsLQXmTbasy75qFFhrdQJvL6DRbncQKUsT1g",
  "key12": "4r9s9TYXu9jYeuQt6VpRoDZXuNbcHnBwdZ14BWeNm49Ln1JaNuCLXCMjRjh22pVe5QWKCbbgerMo9aAWVvdvrHDQ",
  "key13": "sjbTNGUKFsVNEnyPygxrdw367o4G3FWvx29kpCvrpAAxqatLaP6jPTukZyjnzQPv5K3yLHdYCXF15VVtVSenq5o",
  "key14": "3P6SsjkiiPDTGonGRaRnr9Y2VcP3zxXVKXUbeUZs5pNjc6oZ6eyD4BrHJpfWiFqSy3r68MpgfBZtwExjxkms8dZD",
  "key15": "2prLsY39AWKinnZcQg742ngdBWJAu92337CG3ftg5EHuMN7R2kn5em8voWUFzvVbnwH4d92RYeebbjX7wmK5G1xJ",
  "key16": "4AnJ5psojAcgGA25UyQmTJpyJzQW2hxf67E9JakZCXDpNiJawGcUDZurVAA9V2JcrmNT7vaiLvqeztdzQ39ihjVo",
  "key17": "43nbmJapPMRyGmsY77fPdnrFUYXenJ3W5LmzweTVEr4yffjWALvNf2WsKLWhGdQ4J24jBGUaCvCVGoJBR5iLdume",
  "key18": "MxUYiQiuhBLQKfZX1VEDoRGfMYbav81EQJLXTSt78ncJyxijXbkV911xMHSschRELxWWPMHmf6WUkUUtPz7s8u7",
  "key19": "2fmrHmTobBa9znCZW5RX5YgfneQhudHoAFUJxgsEuNUUHCiBjuBabe2yPQeXYvd96Hknuy2CCYdGvkRXzyqYSxvG",
  "key20": "whoHiGFXmcrRsmygToca8AwjTaB45XSzT1D5i6LsSCMXywbJ59QVqzUhgNLVVFK92e7FwC1eDuHx9Lw18WPqYta",
  "key21": "XRWhWWoDokvMTrQDRiWa13e2RTA7XL87pYGoUofoKChrzHHjHLLzwMefMnndBnkVSofXKX3MSinqmjgJP2qmPnP",
  "key22": "3r5SFAvQ3wsD7iNWEdu2Tv6xWNDP7Vq35N31FrKqYALLmWPTeKES5wLhs1wkHrs3LrkTuaMUWZYoc32J6AuociHx",
  "key23": "vPLeDrE5hTneWLFDzY35dA3MfurMFmyfShsoTjCKs79ZpHeGJdKJFtzWksyve2gukYYQypHP9RpV2acfjG4E4US",
  "key24": "4nymHF5nAbXQYP9xMsbq1AY44JCKZsQypvVaGmxhtoTLcY8HvoFRXqqZG8NQrQpgpw2Xih87GbCfKhjpwXPT16Pz",
  "key25": "5Gs5bqY5ooiwauedNgS7bK8v1DtxyE6dyCaou6ehHdAALHjBAQtJZ1SrTjGJVaEDEPuQshUeYtns7ZVhxbrwNAk2",
  "key26": "2oFqnrobGP8wDCvpwFtS52yTjBLfotm7H4DE69KAMG8uGEAZJ4qLcJ6JQxB5PNPgVNfyHSy6XHnNC7TGh3j1o5tf",
  "key27": "2cr7gALW9MqxhSXGY2SxH9M6Z9ABwUTthvaQyZ26mEZacegf8HjorLSxtfA39v4wZJhTfRn4zWeNngwEQ24hUCqT",
  "key28": "4xuUdmeisTZpX4j9VXk6i26ZZcSGJGt2MXpmDqq1TpW5xuCPoqUaiSMyozDZ5Do8mxnyDopDWRSYv8TJqXeEHyEf",
  "key29": "4n19VEtNMHtrHJBwsAKrfY7GcgJz26JGnuVb2ND349JTYWXmuv5Cn2p4wGTeEhdSLL7FQUjP9iz8NH1wdzLrdCv9",
  "key30": "3D2NMWWPQdMYjgkaNX9KNQBq5sFX95HVK2P5Rbx8St7qRs4DAooFmuQzk2ed75VbwUDbtji5EcBMgo1jF7ski57M",
  "key31": "2K4iwV5iNATpoq2ueMKRhDPc2M84j22RCMFyYnxkyRMmF7dy7opPkcbV9YAYjxuQvCBsraz8L4HQY2gm8bSzpeEy",
  "key32": "5KNCrhCs1XmnQ6GrPjpYZW3gqnBWrePjRTKZVrg9dB4DqgSZuaZNns7ZdMeFeNFc7YkbySprYKtHrRAKsbpLGPor",
  "key33": "5iKQZMKeeyqNEABo7FvGwp1jdfbqQhTV4H9KgLTsq5k8vwwrSiRaiuqUn3F3nFcidgPSooHbkU8FRXajytNXttqp",
  "key34": "52vJEuCmQjjH31NS6nVmYommdAdFuVvB5UgcMeWuWEEmFzUip3dqsLEUFVqUMcKXwpQzq4dt1bF3rJK97BxXU2En",
  "key35": "4zzpxKqYzGChPYNeBKQALmd2rFHZvdpapT6fkoDT2qcWYUJwNqcQeUmJ2dqtBEKy3wXbaP4jJKUGZnYAWS26Qv9o",
  "key36": "3myv58QqmyfEKqtXPtdmiugQpd6sDb8ASBRWFNydEyXzuc2cQkE3ZopygqbTYLhg73H815AygHr9nxwqoeuGpjZy",
  "key37": "psojfcdckvXBrzPrRTX8eqXFSTy5Y2xPWWJrbTpULGzmY7bM5fsnyMXztQoCAYFgf5cyfUf14SmyEfB62LTKcxr",
  "key38": "2mZ2Kajp1iSuWnvWDpYYSorpwxwpuroWzQGJy3waqDzHT7S11yApTqyZfYnBCMezhGfgVhMxKACKo2dAw3ko7yfJ",
  "key39": "2HQWTLY2YAk4zZKQKMoDGsRiZ8oRbTYaePpeSaoQ2TcAGeJqXKbia8BMPwHA8LTTxtqdsYudhHQUgCJ5B7dtyCNt",
  "key40": "56mkmcZt9QUwEuBiD41ZRUC9xaktLDvyZkE5Br82Vnw6kFttx7nJTCJFZJaQUqJUywx9MV6VNeVMDRZp8Psxhcbj",
  "key41": "5dMnP2D9uZrdQJUtdaTEAyoZDkxvw9ArjGQ9K7rpdv7RTvJH2Wt2fWUK7kdpr4R9mZVqg6WUNyNpQ7PBedh9gXHq",
  "key42": "g3N2i8WV94JmeciqN5B2Tzc4ojnLpFS5kYENMp4pn2dfHSgsNk4LZt1xUd4AhbcnjAt3iShjinMbMQcbV3UzFwo",
  "key43": "2bpbWJMjtawR9pQwMEtXjziiQ2iy1FEmfUxfLW4mShCh9DEmoy7hyrtBrb21J677VShjQbFj738mntFZfG6Hzpfw",
  "key44": "2mce5doy82LuBcErtKKWQqJ8xwKQWj6op2eYjddRxbhT2vrnmQPZxX7WEfd55JMkb34SwAFmjzaBwz9d1wDuc3ve",
  "key45": "2heaiJxxfMwdewti3B2y14fcf2vheqfHBS1yvHnafbNueuowioCRSjDu9WgezBoaTjwURXSuP8S92NzgaKJcmceh",
  "key46": "4KDQnVXjNoPQEFLaz7SfQ1KwQBsdD4pp7s4jCXD9Js4Jr8NKY247ZKin95ahVXnrRLsKSbEm4kNvNCxMQUqM5gGy"
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
