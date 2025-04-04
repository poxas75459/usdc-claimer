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
    "3zNRmsb5MGGCLqCAZ7SHtLNT81UgznLiACo517JRe5GUryyuck8YAoN4HSv735d8dTYNr6k2KPup8fvRkMXLYEdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bCZYSBcL7fEsZNDeFerxg8zb8NunEjw2WyTkWDfADfhywwyREN1E56aotUFKcWjKpn4voSMjUhf4XdDexGruJnV",
  "key1": "2R7umAGUwHyE12Vm3a1g4hvUR1NtLgcnwdun2W5CMGBa5PsYzcun9LkbJNJ2atpMbrPwVfsaeRDgRoviphy68wHU",
  "key2": "5g4tcVXavcT9ZT98D2rTgw2EDwSFzuAKdqkRDWP3oSPyfWt6kfvYhBPif6g62m1WVSiBShdRuF3NQgNsT57PZjon",
  "key3": "33QL2ZkhDPvpGsKuUneUih5zU4vf1wrGnpahUfUihtchP5fWNsEgtTeWGhA6bJb2fBHWiu58ZhFQRGe7uGyjMfap",
  "key4": "5chZLCuXCEab5gUtqgsnUBEzqEhECFM96cQx4CsyYd47PXXdXHLfa3hLx4Mvdw5vkMWZckBDjBJUbad9jgMXR2uv",
  "key5": "2HTwvuuitfFnDUiaSQmiCFgNtLAc8ddeS7i5YM65RsKEgQA9kwaiW2Nod3JvCRRXDPZX2va8uDuvHPR37r5dtDAv",
  "key6": "5vxjysmScQBeJvnLUmvfXFPianixvj8hMTGsEJuB149ppnvTYt6f18nTzXUzxyMEvPCAKZg7XTjC6eHvaQjjhPhQ",
  "key7": "u5jo9iDGgRK3rNN9sGKhGBUFoGDN5sxfu89qKfTHuaDi6j3BWZVz9PrcU687hQHi8Vqvc5tFbZZxwRQtSdSGN1w",
  "key8": "GBs3vkzyWwZNygEDev4UpKJCo6abv8q4v1NfqP3CvE4pReFHbGSoJy3C7x2Vr8xXieQqkt7FBKWJ6ACbdG6vNhX",
  "key9": "2jhPUvUd5k3Jik1CSN9fqkm5qBGh3M64KLDPtgUpJ97J7uiZCbzkpXzYQHT9i8v2MD3kCsaCnwapZqTzezBqje79",
  "key10": "2JhRgo9bbgDC7rtNYo5ayVXGDAKoFYxVmyK4qeSAkm6nZ7NiaNAGWV3e3p6SKEgjUerAuoMRx9Cs2NBWFGXAWUvh",
  "key11": "42LmexrRqRi6K9ncL3Hu622rWxJ5Dy9ZtePkMW2o1xnGhGzCEkfrKvtc2axMyAH8FzceZg7yHXTcrXtwkZY2E6gm",
  "key12": "4tQCLhrHSSQoW6BT2m7nRqtXvmGDG4JmZu9os4daoAC6wUgeuEh8zGGELBkKGZuCZB12rFDJFcoQN162WMm7CYha",
  "key13": "3n1rXoezX7kyQNWrbyvQF12gJUpA8bckF7Ts9bvATLR4Z6eJMy2mScRJbniZt3JeowquzZmiHqMxg9HLzc7sJGzX",
  "key14": "3eY5DeAr7wXP2hzN6FnUqs73aKDVto2xL1BQfroD1GUkURReQDLqtN3JNCDYNUdkBF4fdBrVdqekN4YiojFiGZim",
  "key15": "5mDLZX4J245aqqyMj1T9GinKqaathhJqg2yeedzdJRDch38LrVxK5tsADWEBD6gqPMsfSDycrGF9EBedQDzf3aT6",
  "key16": "QG8EC2Q8Z4TyYZeUaSAU2ZA69XmzE1GrzuoS2KrSgsiCN2QCMcK5fZEmpTJEAwRgjUXF5aBphk8FSfhDMNHqrSK",
  "key17": "3nmALN2RrRuw1CcaKyc6d4XMaMFCordpSUDNiAnb8cXHBkoEzx4UVPGsmtXE3h1b3rzMmqt7nnDEG7RrXMzb4TAK",
  "key18": "21AgCrw97nCwxSrPbJPsGqtNpe8pzp4Wzv46WsEezxbLi99KZdVUwjBK6n7niyU1fn1TVLUGW5V4uNiuCDMbmXLW",
  "key19": "5xbXxtKunLiZCQ7GCY8TAcyWGdbZBxxRXUiAVeJS4uwmLsw6ka3D2q8TvoAi8BHAmwzt8irCnECbgTugnBfSM8PS",
  "key20": "5hon5Xf5F6wCPjDRaD5hCNCsTwhDryBBmfV8VoU86xt2Bvx335c76ehfdNyq38bZWD5w4RoL8g6BN8GA21PPQ67a",
  "key21": "3dnMwBDFxDL7E1nzD2RaGdF7RneYGRWroviZQsG9RD9yRYyNzP3MjzRHdobUktxj8AtBJnXS8qQnCEnjT1X6nNuC",
  "key22": "2cjErQ1qV3f8z9L7h41Ag69sfqnfMy443XTTqLALWWtSpYW3BA3uvVA9ZkNW8Fci8g57HMiTcE7gqMWoDj9b5UxP",
  "key23": "5KHRAdZapikvz2fBr21D1ZVdYUYZ42VCbnPZAD8aP19jdcG3nC42zipZsHxE1Q3G8F1aUrcfgxiBsQ25fE2UL15X",
  "key24": "22ANBPiUdfmKAebB1GsApCJYoNMmfz53eizBeu16fAZVNZbjZRwunj5vzt5VbapYdRUHNoNrJgCKEnDZhkWtwgyv",
  "key25": "BtWdKtEjjmqoHSxgcKKd2WAWQB5EF3jZEUnDYqwKfRAaA5XTMdTsY6CWTLgp84Trk4tTtPj8ZugdDCvyKrbDVGE",
  "key26": "595e6pWXYRYm8QgcQycdbNfQZjt3TSMJLaSGTjGJbbX6FEprFpMLWEUbhtYB4jsuoM5R4JFKLty1bFAPMtv1xspg",
  "key27": "4DQMGKakGSDLeq4h4SW5Bp6pHZFaz4oy8VpYCY8tujLDhhYDVinrowBjSwLrdDi9YpuPZ43nPYU7kWJq6wCpj6Aj",
  "key28": "3KvMYycK4SbYdZdeSjRiyPzUzuuLTUaYm8s3nUgiu14ucrA7Hytg1nVNbRr91VpkhhW5neLKxiDkchE19a8Mz4zK",
  "key29": "4XoxEG52Rdti6UQtuLSCuVHi7fjrpAXWDSYWw64PRgSE2ceybm4NbvEx37argakVwrkEH8s8Xa3ywZfEmoGer38a",
  "key30": "2rbofnm4jTBF2AbqRgUaLoPjFXwCdB2K6eKPptF1jL3xCaxGEkb4kXghswXu6qYT7cyRpde3JjzC2RE1bYnEAJ5p",
  "key31": "28SXvSJSanF6BGb1u3Fd5JyAe7UL3r6DHHwJHSUVubzaVrsqfPU8MeQobtUZHYHm22SFdSj1chxhXCsSVWc9swNn",
  "key32": "5CGMYhWirwyoSgGWtRQZv7deYc7YEXCQrDzMaNfMWUy7Bx9Hz7umAD2BrjfhyMM43PR8mjTG4fTtTFjPCm24dbod",
  "key33": "49cQoDxKkLuNVbA6inwJsUfi3bLb9zbJKiDk3mjDH179mFy4g3vSRNuivcbnyAaCU14y6UJTqWR9mT3TbEDzabhV",
  "key34": "3UPnT5hNLBMvYwQP16DxXvmesaJomXVNU9L25ygwUqXgpDiLqxfEaSt3AKgTZpLR6MFM739yusAPHLcdvviuyPpa",
  "key35": "5ShJAFojQiWUnjZrnxnihJiuBy1QZsFDsQXQ3bwSHzvs2Y46FG6kdxY5BZsMAJEKtw2JwSYhkMXjLeWwSAy9qtSx",
  "key36": "4odGMSgKk113pHsPpzC725UPP7M7r84wRvW3Pb82DguASPeeJHd8R81hSWJKj3Pgr1SRDhpt7pV37s4xmHLKwnT6",
  "key37": "4aaSA38G3mj4sgxxCvcSQkhtggiyAj6Q4ZaQVNjZ5hjnDMzS9An29jcBytoSYGoAz8MQY3DYCc4czCgskmhtspr9",
  "key38": "2qoEQDfxVHpxmHvFkgyzvqdjDGvEFP4N6ToebkicviaFZPGYVFX7SZ8c3nszTuver8wz35QbcVPpg4w9eaqM1hKk"
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
