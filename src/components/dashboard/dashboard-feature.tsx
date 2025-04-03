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
    "4KNTtgjYUFx4qwth4PuxMmdqh5iqBMcWQFQ7peRPrJxPWvszVR2MCwgbwtaLPEByvdN6vbMmC3J4s6gFdiPWtnjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a2aan2JcEcAAos61nQgaAcxY32DGPcUtB7hnKWZgHs2PAHHnKdvswULDrv6rMsMbCPt75bjfqrteoLyBQS8Nezb",
  "key1": "3Av5gkZgWaFrkszmMjtSZgzPgXmKY9HFCXu71f67RsCasg4LZCrTL1vBfZg3EwdNvCCYs223AJiU27BNTJVTwgPT",
  "key2": "3GbPXuTkhMCjWWLXx86Vpj6SvMG1YHQ86SEU2L92Gpdx3qgzSG6kQc66PhTZ9MhSLkfvcKMYt85KCNVBjy2abcQE",
  "key3": "58UBKYn3yrCzETvgYos68SeoML1qS2JqjNGZiR91nBZNdtUWwZZNKTVUo3LCivXXUsSqMmDmhnYN79CjcPRLhh93",
  "key4": "3jwihCfhN5Rbnw7QDRasoinwt2rt4jf6vXYpNTNjtQ41Jrd8u9bYEzsVPU8pF8GxFt9GwAYecnJJxarFbTDiURYf",
  "key5": "3KLsYu5AsiS6hkD6DjbJtSbVouM1Fj8kfViDtE1Jebk9uXBmHZUbpJhvrbrJuMhaCd1zCq9QufzY9tmcGtXoPKVa",
  "key6": "2uJwi4gknQTK88gnqAUNK5zZuGY6wkB8vgztfUGCqLjtooEU89WLNYgDzUCsypsPRJdMm23iBiDoDmr5dfKjF1oy",
  "key7": "3zr3yfrWssByB1CFgZ23UD2kSKTcx6Gua9rzQ275mfGngjZRN2KN9ytSA3NpbQ49b1cWnEurrqC1X2s74RYbSQLc",
  "key8": "4h9y2i1MMf2R56H4yQeCpruK87QCZb3SLir2ivFs4N6TgG16V46FunjYoDiSJRwDgk3UMhNK8CZTLUwygmrYN7ef",
  "key9": "32truo7zdkTM6eBFFp5UgTnous7brkNzvW6N3mAo3LvS76eqS6J9jkTWQJ2ShC1mgPRbn72rbNKqLacKvkUT4mcQ",
  "key10": "h1Uk26R7yFEpcGZsr1dWL3MscCFEJJDCHyvsNwjb1aCpUYbbyrh8Ws9T1vMm9XV575ngJ4oPnYdNGLjZsvrZ3jy",
  "key11": "2Mo7DPeNR7u5aqbzGKig92JNv5thaEQx93BMvcpU3v3PvifVmMetn7taRPbFE9d6aCcfmECPnus1h6X6pAvaGyk9",
  "key12": "g9DqmMqyaCVrftWuSdx4MQSbYbd42YpJZibypyvjVF5W2VZshED3deBW775BZGvEMNctCopQvCF8PQMSK3YpEFA",
  "key13": "3w1zhLc8CqbPP1rfPLWyAMVJbZJcpy3QqCxVvTBRE3vDmhrUMCMJ5CHD5HugjTAdJyRnaW96nmGDpZmyt8u2pPT1",
  "key14": "2LaHewT5xykGcRc7qsnZsHQz6utdCgTh29ke1vTCENePnB3UYpuTeezDRKfm3eqLS4SeseUrw1VmXBTbszNvYQqb",
  "key15": "2DGiuUe9cGfZzKkody1JarFk6sNAyxvmLG2iPdzZtT1phT6NQWPTAGomxMr4hWGApAkasaBxGsdbPehz1ACXZjfn",
  "key16": "5GpsUDPQiDBuqwh3BUVetcyjjBK43yBApyaUyHmcvMRRchchWW1GiJzzjtbXi6KMa4C8QXgRCsDVfQGwj77fqK65",
  "key17": "4uN6Jp8NXmh5QBvAvHi7BgjdNdcsemd7vU3jd2tr8Jy7fEdk8Vm9fHLBMGBGrJcZswkA2ybusf7e8Ey8uYDQfomi",
  "key18": "2qwsDho9MCbLfXgXdRjwCYAhAn2BsBKrKQXARAATSUoY3FwCvNm5uWoK8mV9HFPvDHs9mnkefbEkPZCo7FLJotws",
  "key19": "2MATumpUk8EES8UfoXqne6kfRNtM5Mn7kBSD5efEKzXY5mtMKNKCwJW8bFp4ZqkRBVsdJ1YXZttKLKp5nggW9SYv",
  "key20": "3ZdNsREXTCPoWRmqrKRcDA4N3iGswk5xeBvJX8Hoy8i3RjcoYLugA7mg9KS4UwKNoiMtJ4inHbo9iARGLLP3E38j",
  "key21": "5eopUCNVPJMoFypQnsQKDgwNUiixjs2jyeFacEXH7SxcH7J1fTsXrirCNRt73uRizsNNEg3FBbMW8XtSfgkmTm6o",
  "key22": "3xqL1Toy6xbhc5Lx6tGfBU4een5aQnxWjxzeQon5XxGeAnzi1g7wMaHbh5cafmmBUnwLhapXg9M5U21sfFJRhJyz",
  "key23": "Uasi2Huy4MHwDX8FcmG9RhFG9WdGTNtkPnTgUojxPuDyj4hUBFVYrBFB19ugQA6fbcKJP9FKDTCbPe9hCsMGzPd",
  "key24": "23vdd86BRPHyKw38YaLUJWAL8KJdw4ZG3TJakxcxs8yA8rWFaHN4GzNAnc5VK7sNAm3obiKpebURRg3THV6NMoFQ",
  "key25": "4W4tQbZoMStbtidHNzq7G4rC5DN9MpPY8p4G9zRu2wbPaMSbTKGSifdAGjWBEJSfh7TJ4TrdBeUxhJPz64amV3T2",
  "key26": "2AN3SuAvSPCiMYZDgUnZTCnCubV1FkBa5DDRQ2qPdR2sZGqw5qxhfYoVXsDh7rBTq4uXrF4AVHew8s87QXnLjvaN",
  "key27": "3omyynyGCHTBhBdyqjbLcCtTcvbhxCqK7fh4nPpigRTSN9vhcDgmTH8vc19g5TyFEAvzytCfSB2GiuConkqbkYbu",
  "key28": "4AcJ4JFHPYGJZJEqewXCRVhhvvgJmECdVpgGm3m4gYvinDLHLQzzjxjFYPQZ1ydnfxWSsEKmDACxqTY19DwdEecH",
  "key29": "vrt3e7Rcno2EWaXqG1u5AhDUfuxH2wvQsm7q5m4PoKiKvu5PCAY3MvuF2hazqePqZsR4PQvtABaU5i1vcykgbSR",
  "key30": "5mnFyHnLiPmt3RiWcygtFsbmpjkwUroGv6oGHo4Hk1PQwNaL9vfTrhYDkmsg8GLmVpD9yMz6AXkb5GHHuq9S16Ea",
  "key31": "gB6V3EyiNDpJqD4LQL8S1a6zT85gKwbT5VHpFhA5JeQFfYcb5vw97VgaXh1uVeBBzMuw3j8J2Rrp8aYtKvEdYkD",
  "key32": "2Jqq425rS9vjnF33HdnKoYUyHxEhxX645uEtMUwLoCPNWYsFhmxrFwN2hyQLoLMfdiV3dXNHRt5iCGYdWtAu1Gvj",
  "key33": "61vaaQ79cXTNvoHNcF3SsvJQyjQ6ikCVRPqYC2tuQpo5UuPQDuZUmBzjh7ymFDVfhDpwGeghm5B9hUkrovjwM2vE",
  "key34": "2dXPVy9NpnNiBPPNbd2aJvXhFpFzh6HFJknrdANLzPBD5f9HRaWyeFR18mDWPnajWpeiMME8jAQU8xcBwStQ71AV",
  "key35": "2HGDjeqbKdG2feL9iL5nGpRRpZsXAoaQXjWEv4uUL2gu3TPmd1WhFSB92MzHxTgJhWWTXQUQLNDzJaihbE4nWng3",
  "key36": "5HR3RWWai8agFDowLbmk5NZ81rg3ajkNFwg8XLAaZmMdiku4b64vHULtzq3FzYaszatmhxAYy5kAmoXrfPeVBDRp",
  "key37": "2gneYLH7BiyNq2vVsiQsc4RaH3n9kiDgPweLCD2CoDQTzSf3DcXbzNCfNYRxhJBvER4Ta4L1iJu776YjZ4tCyEuG",
  "key38": "QdGaEUkhojgXvu8pbfBQZaesiaXfT6uo4LR2KbUuGZU6D3pRKbchpHzyuimU3KgMiEh4g5veQcbz1dfLihd5RUw",
  "key39": "JuRthPDahJNFeVvx7cCoBLmSuTYoJYStzTcdS7fJSPaRyHem5Q1buDz3QPCavypDEa8fbidDdyFVL68FBDHHa3G",
  "key40": "4iMwfr8M1CBi4dLhsGfWRRJn53KCQh86AVzR2Ypbma4N7tiEhAZoDSWbdZCqJFucsVEVbFsDASELgPsm8V9387K3",
  "key41": "wDZoJuNmXHq3RAuDdf9NEd9pDMng6T37LAUsXpy6CknqyKor9KyKRQKji8DPKK538KSvntcAkbuyLSjupjZLuo4",
  "key42": "4M21HRsUd7fcLxVtgyD5Mr3Vh9XnmwpVN895pu46Faa7ApCpUYPnJUUtLVEjpenV7mTd3R1AHjKQE49w57otHFGy",
  "key43": "2CVJ9Ej8AmCZBcWvsudNfRfh9FqaP56oHX8f8WCNYMH2QijhchbNQH6GmK4akred33YtsGcyPJ6QjSdMPh32txcY",
  "key44": "4izV6iGRaLMU4nGcmGndsvmcWSZogHHfXHW7xtmgi9Mo3HoopayGGdWUd5jEHphFVNHioMHMdyB8AsP5ssLsXkEm"
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
