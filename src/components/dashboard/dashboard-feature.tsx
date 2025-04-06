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
    "5y7Nt5vkowpjBJZqjjHVPg4sqaPrsy3C5nquSPLU2Ma4PvoqQU8t3JBXgdnVeEJKJrqWhP3hUVZsAmXpobcgG7RR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RAModaeBhpfTBR4Tb3qaSKZeDfEFUYJc2YSEiDuXZMS1pbKjQUYyQaMWMY4G1cRgx38pwgaX7Uih1HCcyMwXiWg",
  "key1": "5TFCXTpBuCKPkuHCtmzcFchcA1JPuy9y9Pk8GiSNPAKS9Jc9rifTTy5fYAY7r91uQczXzgh7zjEwVWTDCPoDV2QZ",
  "key2": "QNCDwAeKPAovtNUGZNjw9wwK5WTLtUb8P9VATxbfygsDrkfrpz14hBN3figBK8oheZkmusdSgVXfpa1u91s2f4c",
  "key3": "39k4hhXhy6QLnKC3aFcs9R6B1hyjnFbKPjszGmVyHKS7oprWGWGcYedbBWGvqmpfBnGPfMTgG2QhH4Y9DUaJKAMB",
  "key4": "gPgH7qYUDTiPHREA3sbt4yHoiHTAM4aR9DrD1qtRAKQszyhzDXjYyapvjk6kTuzSKYyN7om2hKbVktQ2z1mL5WQ",
  "key5": "39URWJ25MmEUeQe8cZ5SQvBeTQDLVE9xaXvQ8EYQ2kSGYRiGjeXpbHuKzgFe7z6DVfYAZGum6d1BTFWFCrxQvbZN",
  "key6": "cUeDkVqHCwPz75UikSigNxiicKTtH3dZdRW2iaTKCPPCnwJoveTyEounVxD5n8GSTdN5NQhbJMpMdubyZRpqKBh",
  "key7": "4HXchJCdyUgVwjvGGzC5nbaD5ZjKLLLEKEJNMngFBoCQAuSmkPNvo6xn286BoJGunSPjJjyXWamM76UPfzT1nTWa",
  "key8": "4PPP61H2ipaYCSQTFE4kbgCPhkwNkSG3KsJ8gZXS65zt8YrJs4dQJdKvoieb4yDzaUScS92p22fLxLG8tAzffmfZ",
  "key9": "4Yp8xurDgpi3PSiUHEgRk5tfYmG3sm4sG26tQrRoJnCsfDBj9ahYmx6UD2bPtdsYUfVyMSKgGyjqrgGN1vgQFpHv",
  "key10": "yXvjCLp6wEQSD3xWYqnmTWX7E6zwwJjsWmXV6tu8aKSFpRoyq6fXjzjh7vMstwiiQ7v1fsSZJRbWvFL7SQX6QHL",
  "key11": "23pLkhBVob78sTCtoLHfJNzUy13gSi8fi97ACUnKi4x4aEib1gd1azHHAsrZ5GGahGh7UdaL2i4gZPmecELGgt8u",
  "key12": "5KX1DUdrq6W2ULtphiyJS4h435cgfbKKNf3BTd52d2WzQZZi7kTgHck9LSPo1FTDnhFC4MwVCo1DoWA6cvppC1Dd",
  "key13": "4eDTDF6iMT5d6ue52ZcadYPQrXc8K2wYCWxCP9PoPAVf6whNcHUmZRQ98JjPzXzQY4TvxJpTKr87FowhzcC2bZah",
  "key14": "sXTdCooWL6auM6EsxgEbs2YyoTc18m8DbgzCDmJyVNoVnwAJbHBx3iwWumy91Nge7UPoG66UmBuUQQ529MhHiXV",
  "key15": "2iNEFGTdehYNfHyLMSaDVQ2BGqynGEsFinRMu2qPRMUqZ84DMeS7VrtMAgw43gQyf13WkoiHGXdpCEHzXRMCa49C",
  "key16": "2dsa7ewPkXdxZDJY2JZophGRQQ4NrGEhTCREnBB1q4ciygbQ5uGrJXW8nwg2fKKp6QyqwtMWDrV8tysurG7jimRT",
  "key17": "2euDTg2mogNReRZZ51MTgeqU9ChCDp9cgcBLQ7hxSyVfYNbnL8qmuEL3z4cr3FokpVLvx8pTkAfRcZAWHT23h2EV",
  "key18": "2Am3oYGn3QG5Lzxgep826S9PkEZDV8k7DmwAN3bBrXAxhJ5aVDcmKv5ZjzfmAZvtNtitMHDMEdC4jBpc75rkvY2U",
  "key19": "3f9KrQhJGRah1BnSQZgLyeD4SUPVN5zERaKpSEXALBDyRWNXHFW7N1SR35WcsfFqJ9RXCSaocZw5oXSLxL6h5Hi5",
  "key20": "4fEPkBSVX9fV5N1dSh5m2QFZBTp8CXvE1dDkZEThL8FNae2txazJevTqYhRmbhzuss5Fr7zS8ZdRswwnUaPvWDRw",
  "key21": "4JX4AK8agYTGDtDbBCSiYB5XNjVRJ9GxzrzCsVuoN9yFFGwDF49qDcZehhaWVie9sFSrdb3ySBYRsv9bKVCnCCWH",
  "key22": "4CBVa2rYeoGDHZbHsmikMYmCr3T11SeEQUAfo2AqVFQp2qeaf9EP6JLHGdTktEAN57bTccFV2aykAs13RsScJGPp",
  "key23": "iUrANGWMe8sDzEN6ZnAeqr7zeZtSjjBgp67usBERdYHCxWxNF1wA8y466kLaGYAYeUJaunS1icXFzeFuFP7mQan",
  "key24": "2P18vyHZYmEce7vXJkWfaoaYhLrS5CoA7YkZQow3UKbt8qurpBaWLwhNnVACksE3D2kZxEivZJ3SF8umH5kZrxJ2",
  "key25": "4EZXvxEAV8p84RGXwATc43uvVqeDiepaomUPWAfoxQS5Vx3Uq5PLF35DiNNyCjQ9u4PRRmqatZFgHHrvoZFdv7gS",
  "key26": "4ryGf5VJ2eQ7xGPUKpedxxK4M9Ye6HZJxdHfaqAmv3sjefy3Dz2XrUfkx6smYUdBZgAoGafpWmKUkBSvXka9jBde",
  "key27": "ARoYTJjd8xC5Fzt4Z6CCetJcQwWAiWipXomy4eRkrU7xBP3KEzvpica3dsnvJqi6VBajABYWe2g7R5K63nUktLK",
  "key28": "52NUjG2mTR36VyVQ88sNT7ydrYMv9iakYGoDKh381jYAQDvtMTHHX4pDNSLYUhagtUPneJFp95qqwn2m1CuMmthD",
  "key29": "61YTCrcHD9rNyMVwtgWgJ8CiVX6afc5QSaQa6cY4s5WCpT4UC2YZJtuFomzmrbz9EnVFXfef96a2stuQeb3eu8xE",
  "key30": "V9YeY8x1eAugnrgwwA9oGqoEQwAuz1CGXnMucrvGfeYH4EgsG1Jhko2iHWhc79RE6NmbikoVLaK9iTcK7YKyXaC",
  "key31": "3D6hvm65Pr1L4wgfTXvL1aQyqmrdrMMSqZJZfWGPn4pXDwyA23Ya3VAr3YptLegj84mQWht7WSP196GKF4fPR43q",
  "key32": "5BVug9haG41ahT91gGFCqE4SbsJZsQwhbXeGJYzoXAUFSLPn6WaZruPTGX2JapFU2Cr5zvvSPLueWVaWJgCJuq36",
  "key33": "bhEQLL7suoF1UAV3Gm7DbABD82qXGTyohmfFLDN5vhV1eejkuaFwAGvpaywnkX9UXFeevKWqMh126AaXBebFKmh",
  "key34": "29mynjwAmKLzN1AthWGszb1qgRXXMTeVFeKHE3B11vU7YyKLHh7XJURbaEmjpjRkzmK2EPEAtRiHRfchgmjCQHEE",
  "key35": "4Zx6i61yMkaH7iPmbEKXGqg6sTKHe7Yq9PnLpDQtnZvtDJ4QAoiEYnD491nMFKkBmRVyrH6P2uQYSqzbW35Lx4HB",
  "key36": "1EKKMrGmZPWXp6kMmo6Wgux29sLavcXdnEChiJqBH2KirBfQ7HWrcpU52Y8vYfVkSWAcBzxYPViGYoenB9Gp8wh",
  "key37": "3vvKMLSWa4r5P6ttnfDcYMHjEUdiqFs4G2jxmMtYS8ZXpB1w8BAPLyPkNhcLgteVA5to9CpeqbwHEwT2a5nR2oLq",
  "key38": "2PuF8gSakcZkokxfDy6GYnfgqapU8vYYYgJbPCVvGH9ao8GAD9NLARQK6aabVXuTcK95bkwec5x1TPRTBPDjqAVB"
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
