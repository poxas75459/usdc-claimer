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
    "gk9XhkAWGbFwjen2CgjnFwACnW8kq1BQxvN3HPC9u9ALtuFHhyy1WtZLBuBii1Zzw4JDLBAnD4RFMEg5wQRxvzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F1nArfRDNn2kWtADkJMM3QxCPeoMaHP9itPxft3PuKpqKBGo7uo32guNPsiAoKSfuZbiyZms7vPbThcFhzr9R95",
  "key1": "5HcfksnpwjL6eChhGvxWECQddbKwDvsCGnzrjScv4g9ZVqm6p2tXwda3FN9R9HNFzsTqQrmWtnsAt5dNa2wWFJvp",
  "key2": "5pY5pGzGQSUc1GxNbqd8jwWNyoBDDHrdgYiA1gtmGQKnFK5UqLwM4RQMsNgZi2ym82cck5prM3jGRC5y7j5LEE6v",
  "key3": "2VKC4die6fjxRiWUfWrcn3jp9ziEQFFigQb5UU1ZPwipXWkNR8CQEJdx7kwiYDds7zCmY7cCHknASgvnMUAjqKyY",
  "key4": "5bTjKk6sdM5K3UdgaPS2TWj4eB7oqvhGh35orZYdHjZ13V27dfxa39nzE9u67MH8XDWYWddnTz52uGjrq4QCja5L",
  "key5": "2Q18zgB2aBKWzyAWiLGaNtAPoVcPwW6qsNbTLfJzbYBrt2vRTYqdRZ59Tftd6GSYLCW5C4L1swLUN5B57JHr3L3u",
  "key6": "5pqFHdGfUtKd1gV8Na8Psa5VfcBnd6R6z8WUffrpU16fJUsgr6HbgtwLeYCri5zdHA6VdjKsZXjdfvVQAkcNdCmc",
  "key7": "2pddCatJK2BcXnQniAerpextgZa8E3EFzDmgxiDLqJVPBRVJdi1fUT2G4TtW2JXx1Ft3jTpx7AnSoeSBENYcmkug",
  "key8": "5cH4phHKTe5MmL9DAgFChKsXVZNVdLay3djqi8iKTpu8Tk1qRDA6Vi2arEwvmGWELEJHQ4C8HGX86WUYVZd67jQP",
  "key9": "oSWXAQBdZuw4UvuQNmowsFn6FSjXx4bzFPd1iAE2JvZsB1VttD96aU7A73YnzURQCXqGjNBP71JhLmgKRKF3sWc",
  "key10": "24aiBzJ4LDmbp5dxWp6rb4zN8UznYKfVw6NZJUzJ5ymNAfr2GzvFLRLzmVpaUAy7qGb1tL4yJsXK7Av8JF1wpYtn",
  "key11": "4nhhTBuiJJrwQRXcCwmaBf8UFT8ncNC84dPeFSDmzK9wT3poztakNUfGvQ72Qwpikwqgb1wVH5daPEV6ojoWegsg",
  "key12": "8qcRHnwGeTQvSatTFdskgsa4DvT45akfDED5bwMLyyf3M9syjwWZXLvH8sXsyXVij15SUZgfkZ8pkBaUvdze55q",
  "key13": "23eT9MsdyspnZ6Qhb2fPNiPU431oQFR6bq7apEzpyQHqf9bKjFkir8XZRyTSnhCUEKcUJnAjFNJhKM6WwgsLiLmz",
  "key14": "5AhVdfezrYck5KmRgrFNW2EbKLQrnPtnWS2KFahoFkdnZxtN3xK3oNpbWDVzbmPbPWKYvKgfKjuofTwJvvRnixJc",
  "key15": "21mxHYCdTAUGMvanoBYLAD6j8W9utNbLLAScmm4JFjKS5j9BzL2CxmcyVKEs3i26sb1UXT4Egc4xdXuCWLsHgjVu",
  "key16": "532kbLjbSzL9Fcs37H42jxRGgSCnAmiGkWu7sSD4qKV4qXBYncZeZVXX97buDzrUkJQJLx36acJFi4t6RbymZCC7",
  "key17": "5Zoy2xfBUeW5eEzyq5ctYq7nkkuoiT3nbn64ps9s29YMQK7jUnR54qyuv7t6GNoGyPc6hKMLTCroPdEudnpkMMuj",
  "key18": "23vsshnaJrEcfrXqGLWKyJdh9HF8RGD7KkgRQ3D9LKhtYRHJ4UeXdRAchmGPyDHE9q7Ax3accKsNSU8C5yCu9CTx",
  "key19": "JcZrmxiyL13MjCcyWr6JoirTzNiJMQ3SUJjbWmXyYAbHT9oTjw4qMCE8ohtseacMWVS7yXzbUeb65c1Fet2KhnE",
  "key20": "4eEqCMjSMdQmnDFrz88ZNxAK4zMpCHAUPVz2yUgYWEMAucXkA26r7iCMPnWh7gG8aF5uDveKxHDQuH4pKT2Q9bEZ",
  "key21": "4NYFZmKmCJVJN7zXd5dVBKoh8b5crt5FD1qXLHNWsrKnei8DErbCyg2mvppWrRev2DmcDEcTNXZTsRjsaNgypMZj",
  "key22": "629RHYePXWujRfhZ8HE1HbQVxx1jLmuHXYTYdjxsdDAJaHXAVZAsKy4YtuVXhfrwgUfsweD9abdga1P4H3VZo7ov",
  "key23": "5cqEbStz7KAa31rUL9fkUbapJfWdTXCTsgnBEEHfR9G91PRnFSjZNqfFhygk5nxC3nuk4EEGuo4dTnoxb3vTNDht",
  "key24": "3gEd4RLvFysiBQEoiYAzDjdLssMyKiAosRqEKMFPqkFid1Dh8G4HN5BEyZUc5MLnBejPev8JtHRpRVTnK9w5wpRQ",
  "key25": "38PnhJqBhJEEsiXMmKZUi2vPFP4EJyHYYwY6oCtFKWgtF3RpTFvG7CDjLDKVcz8epstxcdLPiHe376miy6PHaEE7",
  "key26": "3NKYSf73DstjkdeTc2dtyeNrnQx3J2F8vuU3V9ibqAJc3YG2e1bdQpcV6SqCAHqdWZHHVDRqMBNHn539NbrBrgLq",
  "key27": "2uuyaPQRtVwYsFeD9cuwgqKTVXJWveNjHPMCgvQLSfK7ChxhGAnJwGsUQVoBqd1WMx5VdyDfW6qXN3UsL2SZQZ2k",
  "key28": "6i4dkvU6sqJGmM1HAuTCVnx6TcDe3ogSSnvqKRW9q9g3eEx4Pw97LY97AruRBEoe2oS7HfkAn3WBKGWQhv2kL1H",
  "key29": "4qq61mbpPedwSixNbHwRfWSr9kVLcWQV26HeJySrPK9d64w3x6B3WJHErwzR4pVKpRsseU3d63vPny8sZQQA1sgV",
  "key30": "ybfBFd8di22WjxNDURZ3cFy8FZhkXhQQ12teQpYdhr9674wQsB4omHGrXBMDJusqEkZUaBRSWDf8oVamdEqey8u",
  "key31": "54c2evYPmmDErzCGHknaKBfC4BCkAY4JLPmeYWRvYsCCw7saUW1G99vRNcgo1ebFPJgsfZNoWbmjeTasrfduLiXy",
  "key32": "5Zfx3yXi9jeT4P28c3LwhjByR3Gocu1QLMr65trrnepLMVoyzgUgwFWExCcnNbQ4Kw2eD1SuZU8EUgGX4wkufKYv",
  "key33": "5sm3eYzJq5rPMUz4PP8rHMWovL25RW8cTAWErQwxpL1KzsVZqp65dkVG92jQPUkFjhE8GqEtGHE4yfGn15bKSvf8",
  "key34": "2v8e6N81sXAFdY65PHp8o5znLvpDPSYqVsDGeozoavGav3YNwmWAEQZ5aaKucuML4BsEBexAtkKovehqa794xDxX",
  "key35": "4DpNEu3WTGZwwbzPGBi15biqob2WsHJgkKqHrx9s46GgyZzRLwuiRBMVwRgQkm7QJoQcdexfMmMa15AMxr9iMqZg",
  "key36": "2qcktM9GT9osyEtrudhdpEhVCXtdhgW6y38ZXhx3DwJUxtWQaw2TMwgxW4rHud1PqK5QVwiPP5ZJaV6CpC5zUjBJ",
  "key37": "5rG6TS7pxxPFJhxe5MSHjy9XWVCfeTRRfBwtRojyBLcRejcxMGfPVAk5gLLE9Mc5GCvH9e3SDdDsTNmd6nYupE43"
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
