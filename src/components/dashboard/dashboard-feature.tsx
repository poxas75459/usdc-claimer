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
    "U2F3QxiWESHTHHxbVbmYaeyd9rJBW3vp1mdooG8Lfhe7eFQPWJThGPQyoUhL2RyJuiPeCKGDAYUZ4qxLkkRsgZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rh72qeaDDbKt6txnVmZoScs2SKLFMYirzrNUE2uFXdSzJgtqFCkCfrpYUZg9i9mpiqZ73H4cYG74sDCedpv2LYu",
  "key1": "2brfq4d4tAy4rkv3VRvSoKuz5eWoECJ8i9TcJUKU3hEkX4tC7Z8YkAkHdmSbWYHMNiH4Fmm68PNtEfp18LoUcRcD",
  "key2": "26KA5oedE1FwYLTcch543spV2v2Dd7gx6aGHX196ydxXsoTruNh4nip1xzYVVPc2qeMdRFggcPMTLBQMTgW9WTb2",
  "key3": "5pnoXQta7mrNpuirKbJeG8QB2tpeiZVhDUwHbTM7zu1cEs8ZkhYgkkyUFBhXv88jKmGXwK2rLX5poAq8Sgffaxfg",
  "key4": "66ArGauAV2boCto8udvf7AjV5ed2oPGWkgSbf9jWco3P3Pj7fdVGGiCPXuBqTfWKXoxLfN3GYb7eCbBY7Np87oQ9",
  "key5": "21VjydpP4s9VyybwUT8uocAWtACk7SLLN1isEyuQonm4KDQ9bwjMWo5rKtrtbcbtWZF9kq9uBSCdLjFcgWov1pTV",
  "key6": "gvkQyBLcjiJuXxpqxuPgy6vdHFuA1JxZkeRyftHkFRrkaw1bGc4s3SqxCA6Ybp32pgoh6HU5E2e9myhUVhqPDSw",
  "key7": "fhATuE5uu3BFtxbZWuvGyLgfVPHx4k4n4s2zCKQbzypvvfR9mQMx3fZhyWM8guSaVwV1NTFKAEp5fY1AxvrnBVd",
  "key8": "3zrb2xg76VsBYTc9iXGeVHujgitXwsoCrhCwTwcQYzA4bnS8mZ3DnPYZg6sZXBvP48VgqwR61FkWHLLbHhBKM3G7",
  "key9": "3WHzGVPFj8X2qi5qVQBwTxSjsQeNSYP93mhmRzkRvSceornC3oKHiwKy6ePz3ZWR3CCrBPGAGxK2AEz1b1biki4",
  "key10": "3tAFweduSz4wvQUKhqbHMEfjt7uGxCFkij2dZUa1Wpg9HdKDpht26tm3icTQ5woM9roCMvi75FK6XRv1UEXB7azL",
  "key11": "5vX1QcJmagRzuwkbnrcsdaA3BadU35nrapicsH5RtLkKA7H6RfUgQa9qtAZmkEKU9EtJWSMvd7t1NZ73wBdWML8J",
  "key12": "CDnrZspVzcqgpAcHRWEYvX2aQYJycoJp8kmFQxnZKXBP85uExpsFL39Kf3E7ruAGJjGZNvtDBfaMEGTeJBdbsLx",
  "key13": "3G31PKs2tGEwQ5E7RUPboJgrBTWKSdRfM99KCnBPSevtz6DuRaUyxfGUWakoYecEPCHdC9yXNM4A3CAYTecY8LE2",
  "key14": "53M6Qq7z4Ccu545V5fKoXsusJzZxa89KuA4vnpxSDmHmPemZmtWxEuTnPrWV7hnMW3x5J7BCEgpQNwTgA7Ey4NUv",
  "key15": "4cpHPx6cphJxBn9NPnaoqZ3ePmij48gSELgdaq6foKA3TWegwcvdm8ArMfosPd4K2mbSraDVR5KzTzTFKUpCmHXG",
  "key16": "8NtHgjs1k83cPb4586UvAhRZeocXhgREoxdGuGnvBZuus3G37ZjHqKgrArAiCgATtvezxT3fV997XEfQb2xeVii",
  "key17": "qYzYksxjE1Ad9GKMUBZXGVZQ15BMPoTFtR5ATQVDjNaz11CNmrgsk9rSSYSmSgSn2RY1HiT2f1UwURwbuStpGJw",
  "key18": "4JMTUdp1Q2ic4y3znJ7qYSTx1AePRxiw8Fov6bwDVPMu9qXe18qtYdf1C5TrP6w527PViH2U3PaZaXSVXQMhmrGh",
  "key19": "3CvefBfb3NeRwSKVVJioUw2HK5zZFV6A2bYWzksqc7aqACMELsop4xsa24fioasjM8AdRVF5McP4onRNY1AfGK55",
  "key20": "3JqK5qHh1jTCfZyjL63skMnm7YPEW2QannF2G4gKfaZ1c9D5tQ1WzJfaZGSTLiSTjxne6RqRWD1He5NbTG4PoeTv",
  "key21": "mrsD82b7CTbftgd6AaNwAYTS9fMerH58gB4t1Ghq2m6zgyQUkrTjVAFqPHGv5EYCn2Ea784sKE71CPE9FkKNTxp",
  "key22": "5W26XdivSpkXhgAQMwfJ4R5v9bXsjadXnSPf76RMSZRGeYnrbUhB1BtqTzDHax5hx3Yegdm3NGbFH6NC3dexzree",
  "key23": "2mWX4JFHgvJcrjkqTM256zKe2Ei3dKzVyfPME5GdjC1755vEFK9AccArNobLe2LzNV8CCWvUKiRQWbPfg4FKiSSz",
  "key24": "2JvadE5CeX7EQYH7jKZGzYgSwKmQ3zpRzn2J3F1hwWYSMWHwcCayYveWuASjEAmZBkEumUEajVyUtEafDbVMTHn9",
  "key25": "24BorZTofv7cyGv5BUw41YYkP2zAcGs3ERi8TJWkxiF597U6S46i7VW5s2HF7YH6eHnEU7QW7H7bk1R3tmmQ7kgW",
  "key26": "5DbxHu4Qj5Jbj911B6W6AfdY72NRZKY689rWsbBvrHfzufy8VE2Axq4rGPvFC71Ti7kTbwgDNY4UP921ptvEaDx7",
  "key27": "5Nuw8FwapoWVMjA5KChuGGmfxGCjvBSsEEZr6KiUpzW2JT9m9ZM9dofPXGbfJXpY4RAy5o6vPtN2Dt2jFUKed3uf",
  "key28": "59Z332vAPDK9FG9KbbwQ86FY5qMouUAhjeL8qmZM4N2xH6yUc4hAtFUts8JV6xdnGK3rECmJQ12nmZtWSamjisU1",
  "key29": "3NPs95e4URj9RgqFPevbw1Cnh36Z4cs3BAr5YUBe2Re2uur79aYpXErypxbKvTgtYBGEq37t13TSMQQu7Zm35BVv",
  "key30": "Cs351ukanxyr5iXpexZ71KdH4cCsgJyVqoVsmapiqvU32ToTom4JhqnAuUaZcy6UAkudnvnXg3y621f3izhihea",
  "key31": "42CT4Yf4iJLg9gMzau166BWCnP8d4fnEdZkLhG9f2d8J1BB4YbsV3YfrDmymdQG1jRotYnnLmAZHibWVw8EYSR1Z",
  "key32": "4eiryzSo6MwRtLtyEizqMTMgQY5g9q2D3ynzWBG9vUQkQEUWJFPSfAtG7Hf8nNbDj5dtJSuU3GUq9mPMqsHwtHMA",
  "key33": "Cs7L1hz6pW5tzzf3szceGf2rENteqbBeMboo5rm642zdQC3fYt7gB2RJL54GYWHU1bctHsihhwrEAEw6S9tQoSK",
  "key34": "PQtVoy4thnT6NXmKBWsteVBsZDybHtkEMxxyPizNYPJLBW6XDRgLfd6ZrFy6GJo4nD3nrfBCpZhztXgcE9zAU21",
  "key35": "2Gy9qdq6T4amNH2zqA56nYN8uymnczMRuxoDfabTWMqEFSQbjiNjAo9oEGdyg8XALkAQYTCedDiCiJ67kZsfKcaz",
  "key36": "5ntCv8uExuuVfXqPnMxryZ3jRjmjWCvCXnTUdeKXEGAxZ6Az9GxAWtGchcudBrZ4A5A8Rmvf7FEmVm6w28jG288X",
  "key37": "Vb5HDqd5oJSQRCzqMsQayx9Tsn47jKebgEQWPEkRhCNQj4Bftag6j1LBGFV4ojbJhVJwgVZn84WqoCC1qGqJ4YK",
  "key38": "2Lx3qeDXnckYysuxKm9UkohMy1XYMCrdTQSBE3Hgx1PVhSCKaGgAJXz1xeb87xKKv1NeCiiii75XM28tFXp9NhfL",
  "key39": "xZ7TLMXVD8yMCVbPLLez98veBBj9TbBrHUXekzKyLrpVczsQAUKvQwMEHofMznaHTCuD5EPd5SEjnSgncgaMB46",
  "key40": "5EMax7oedkNSB8M1nBNK8eQpepFpoq1M5mLLb9SYz9mmEoANttxtp7aWzmEh9RxJCZYGoKUEFnTRCDfUmpwb65zg",
  "key41": "3xEmuBioxLtKS2sdzjWvX98YgvJFVkmUEXdY3UciDtFnY56B8B57eXm2978k2Rm7UDbd8rDhN9Bv9aaWdd28rPFq",
  "key42": "3UcnA1RrjafqiceJXbBktZYdUipLb6Ua5bwFRH2DQ2QwCrMZukRZa2uKjM4db48sFamAmV8CpzYz4x5JD7JEgDyS",
  "key43": "4uLRiqQ9iNK3rRokt89crEQwzJTK4a1HXvw7pTJk3T8dd3QdhBYQ9yyCRw9BMZYHgPMThRdyBd36Js6w2RmJk1Ht",
  "key44": "4cYq6UdwDWdUR9PH1aFTLR1uKu7DtwGUP4uu4j867vXEmNPtJEFS5QqpvKAScnLjA8XUDy5GKC2ZJiWuh5ufvZgf",
  "key45": "2zQ7gfDgJrZTp4yiyQDnDhrYDmkjEo4XXoTDQgEiRQhE9g3R3KFaSuoAbL1QeyAx7eS2Evmxj9VR8CwhWAPuA5ER",
  "key46": "qCnSSEsm4cPnr24ozfDnwKmz7nogsccYHRr7Y3yMTpttuJnZ55FYWQ88CyFqMWbwMVx5jmQuh9vWW91mB8H8Krb",
  "key47": "4orBCVFxnLdmnnoihVWkWCSuCeEp5B2uqquMdGCK6e5h45McAPfqusUibBYgxEDbNz2pQLpVNsaA4QB5bRjUpqN4"
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
