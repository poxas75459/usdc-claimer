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
    "3mhDyiHQhUWoAep3ndye4U3poqeajFZjQmR5wmh8KyXi5pFSXitPUwDVdHML4gmwSmneFSWE6qjnBt2sP7K8Nh9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nzGGsdnVYzSZjPRR416we1SEM7GqYW8Db8zSWmNLQmYpChGbUP7TZZL885AqutmVFUHhJtprrQQwnXP4fPSuAtj",
  "key1": "4dyzzCovc6xCVYowTFmYm2PfdsviX9fXpAG6D8Gv7udiT1GHmRh7XamnLZz8vTR4aWiVuphNpD6sNyauyrQSjbKA",
  "key2": "5xZ71nBPrS8cdjthuf4fTk5XVGAv18fvLSZFR5chkEjU6inLDkQb2JXdW4bjmXdfFuSex9Q4yRgu6SmHPKgrL6fY",
  "key3": "25S5rAWfvgnCkXwMZZPgAmhS8pgSQkf3JsbiG1vvkv2uG2qgHtVFtjbyHcTvuHBCsHZYsrMDiQsahEEF7MPFX1qm",
  "key4": "4tQA8bSdUdcAag3DqgRaiDpsyTtkX32NcMfBqyHzkCK6r766JASPTcoiWXQNb2LNmk6myMCYgDB7UbkfNKcg58Ta",
  "key5": "2BgDvreRUEpHxsUwTsLJJBwuTnWDSpB2Gg8LRWyPJfPC4eMsPeWQkDvrcvmn5kDqVTXFUaeN6kgY9NBttf6M9VBG",
  "key6": "4r532qrdGE7QYAKoWBhhdrhZRt6hAJenz6de1r1ZEBZvbaSMCFVCVrzKGGR1Xy9HmLw9vLVigfYhH3T9kxKheUG5",
  "key7": "2ozGDND3xoHCHn9X7mizU9UBy4fEEQimZmZz4ca7vVMcfi1jE99haKQuxqpaYHsn6dnhWXiNYwrr7DzS28dUkPCR",
  "key8": "323G9fHuFTW9nTX1dJ2qZgMfdSRzAKDbnGjwnrbs6RsptNz76awojNH7aamdeH74rYQWEudAfE4hUTvHDMD1uAzw",
  "key9": "KXvP9iWFsXguNkRDJeTWXJzAb3dhSsTj5JyweR2KLVuS69YGYo8zDhJkp4vJ4TaUHTSNscmG3riswkn22Aq4H8j",
  "key10": "5wPKiFgqbzt4kRH2YZHhSjCSXferCnMEgEytHyyhAJdMYDpfZKS3iEWVWXoTvgNxiVjzh8cH2vqwr8ZjuztUGZt",
  "key11": "66oDVgRtGH9RiRaCYCy8QQgMYkv91mJxJe8F2bj5sBeukvMz5e29Nr63TSaBzBxG22nLcShGG59kCj61phFEqj4t",
  "key12": "2Xz9wGbLPzkLwANVTsf6K5LbeHfHu6ANefDVvbKHiJw82veQpYUbwzcAyZB8sisC3sjHvSrFkbnMzi5y2WMMMShY",
  "key13": "4ZBsLdy3HRh8pZwCfvvaVMGhM5nyGvasCd9CJ7YuR9wCrthdVsS93YUdhAJEdcwXYgNmrLBvBWEGGWYGFkf9svgt",
  "key14": "3NMJhi7ENhvbdmUSitNSXzv42NfPUJemRGPE1ceexp91PSHjnkGdid7CLbSKk9g2NUTDWpBy3QWt8qRVKJHQujbL",
  "key15": "5ccrv7RtmYrNsJ6HNczsV79paaBqxbQZz8wU6Go7y9ZkrreKhHDjnnZysnerU9cvdupiqYZGkndX6UteUtizKND6",
  "key16": "23LsW1qF8V33Hf9zcfezFdahg36HC7huv8XFde8uK9G8b9yiEbapNy6y6LunzoiVUWG7r1AoPhPEVMxqZtFNP4Th",
  "key17": "2qszxDL4cYY8WHwtoZiVTnyQE5ssHTiXqJu4fcKZaWtoWGv9eZ3LSTLLy6DvLPDxoFSezRHZY3Ci6Nm6TmdKxks2",
  "key18": "4mNjqkN4nq2gv1ptzoYeDTJNqWkXmQKiiNcwF3V1EQmqkkdVEPPoWqegRupBEvwyrNQPNcw4WN3rMcGoBX5ZTTtP",
  "key19": "4zLbGSBNYGSuxpFjtakiE9uUVXGRs2wN48KY2hjiZv4jEEZvBeVSTy67ADJPQ9kRwu2gy9QhAYx4CSbcmQWZfNeb",
  "key20": "5pzzCysyaUFh5w3NFrjRP73ZjmyurJhT7TcCRdUdNU55Q3FYAVSNLVSNXNx8Be56HVLXreJTjmao5NeJuyr1yY98",
  "key21": "5MFWdNokt4NPR9Kazy55fAWCbcRi3Y3xRVbZARr7P2QPuoDdt4BbTS1mHz1AmUD6XLhJTuLTr6rCLTXymC5af2vs",
  "key22": "5dV6fgo88QboZiGMv3H1TRtcWhArcAXLkJRtvudfLeBfnd5LHh6fQY2rCXNvASJe6Ajg54Q2EqzAXo7RajRXLPau",
  "key23": "5agFV8J6Ns6H3PGAyiARw1gMgAZW2R1bURB9wyTjQFigSPWr13cwvqvxhXDTh35ZUinvTN92AnMP1tRCKrdQsk6Z",
  "key24": "62obfJ1TcseSTeK1AeC2VcgLNWgXbHFy95YRwTdUZpQnZ8ZyFYRF7wcAkUBGQU89q1bdqqbBhqypE8PeMVsUQmrV",
  "key25": "4LTZzDsK4AJLRC5b7zTuAjMF3fyMfweGVsmUkXQ4JH9cB5NJvFDNqZk3VhCiqqqFHgX2qGSnWmceb23V2Sg1rLiW",
  "key26": "2L9XiZtwiHNLcofK2DnUS9qJs8UZwy59j4PKHUth98SVPj3dDnDNQyXZpNkMrfGV6ZQh6yViRzXeXnF5vnm9sESF",
  "key27": "59SbwdtMygLe7B7zg3q14RuJL1zF6rXPEtWw7qD7ME5incgvjGLTshEdTZ4LcwkDG74jEXi7o3uH2K74sc1Druro",
  "key28": "5F3pZLh2NUL8fpXMPoiwY3wdQ6oDSydWXsGEp84E4wMGXRZ2oGpsH4wDQGuATARojfSiZ5Muv33cN9ckxTZn9wL2",
  "key29": "5PqcowF7DsPrPTBCFuwcvoDgfa5jSpeB7zDpuVV54Am5Ttp7th5PSKi1HaEyqqWhnsF8PR99SrMR9enK9Eb119R7",
  "key30": "5eZNxcQg2pTyUwRNP6n4zgMPGSByCxvbTZowsJ1PhzA4LRo2TSczXxSvjNguQs8QT37Uhg3oGbVALn7JAEf2kVZT",
  "key31": "q8GTFZ1vSinLcr9dV2MAbXxeGkWFzYQs72PMjADLBoMaR2a9TmELSLxk872DsYfXM2JY4wZQPKEXo2x5mKpYAhN",
  "key32": "4PwdXanxCsoNMRXTn7BNd5U9yKgnGjEFnUCJstB8ZJ762iTwbdrQig8PfBQYWuHeiyX1XeBMAcRiRjSRwY2eSu6B",
  "key33": "5q9pwVHCwE5GRPgjXWtc12oqckM8dFxfZA6raGSZ7g2bFjNhp8mVgW6GuDoBStKLH5kUAKuyD969cBnzts9UEPwD",
  "key34": "32HsZXimygNbeiQtzMaYiqPLuHiXFTXDrvX673kLDZncxVVnmMgFsec9VEvx45TN1rTJgQNoPMqW74aV4SCBhJkM",
  "key35": "3aJr43UdftmoXRNkSfmKKsoDgJ6WVoSs2Hmc5ExXY6SKBwqVW8qdetnDgDyHSqtYu78E8363WkRSqTWkSo4U1nwv",
  "key36": "5xN2SMLvjHmj8RapbkVReTaSqJM3KYbuWGAg6XNCBAgjovA6dQSfmNrNbDkWjvC8Eq1J84w4NeZGURDH1GXeoNad",
  "key37": "CqBFezfAmSSC8aMc4nYzbeUtoQxhsGV7ESCHP4aDmovTMAh28paxXQVEfjrYUHThTdxMkjyvXVNusXPKN5EohBT",
  "key38": "22HqU7rkqPXjeRKJSXCrMdYWmZJ9mefx71a4nzbQ1mFZhky486m3yLzYxXD2SwA9sZjZ67EoevcKXnxVbmayRYGJ",
  "key39": "7nNUevvF6XoVs3nFg5snkTwGcarxbGzj7TidJVyBBZv31KqakaqiwQsh1EUzWy88CkXD2g17wPazaHdghDjZK7s",
  "key40": "caD3WJLf1Vmwr1UP4VEbqNKhaUVTLDnGskBqJhM1VTbWGqS3rjmx61PT862vfo3vLD68k6f6zm9H3do57uDMMQU",
  "key41": "2DDhwU9VJfQ7pemMtBgiG9gRXdbaGu1ckCyvfwZP8eGbw3G1w3fLXT2xxxCT4zA8L54EgTarmVvpeu1KQfDTAJYJ",
  "key42": "4urXVj3kZNd31YvLhrDiSeRA21u5pfeb2B7rq7Dijzqa8jUBVYV44x7npGP9j2wPTcsQJteerwtYZBrMeK5bWgxe",
  "key43": "4s2tjPgiTYmXcEw8z4hEriZ7s1JzdxhGoL2hmtLBeAjgseH6QunZd81EeC2hmUP3i3sjgMqzgH4SATGg8GAtDbTA",
  "key44": "2o2VojaaAUzAY3L9QhGiCFfbhFFEEHxrzDto1Zr5BzBsTspK2E5SmwLSkiZiCL7oy3BMcGAc9yCRNavayoFGJ1DU",
  "key45": "3SusMqgR1VGi1daRzPYvAq7WWm1pPs7podAXzGVjxcUYeyzEagY8ZrtPpxwFD2rYNYfhF93ayxzGyfcbEbeMyJyk",
  "key46": "qKv4DL3s3vjY42yrWCj7vwZpM4WpANbj2nmJXxVfNdEoamkXASv6MBTT611DYQaXvuibaA1frymLYssAmvH1oY5"
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
