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
    "4YmgKDsTeHGgZ8qpwCN3wdPM2qdB3foiTvT8yHik4myeHR66zWVnyAbajHfGCtnd1Rqvb1YVCURzKH23GTVqWGQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vfiSJmZk2Bgvi54HMww8LeExGh5ynMKH8hKZiQWKmJh8kvZFZY9JXRWctDThKYbgJHu8SbgtJn3gmaSHTw983xo",
  "key1": "5THk4X1FaxhimSRMfYhyj5skoACRK51kmofFipSCr4GDaSJxphnoWFhdnEMgV4jMnQuWmBnpVSGx1zCVi64HeWi6",
  "key2": "47514PgQFjahV3MozZcxw7yMsTZmm4haM3SnHRG1qzj7NKPeDN13mLCXdg3DP3k5eTXvDP96GXAnEQPEEScimfEX",
  "key3": "5KTR5husMTnKZhZWcc9273LoEmXnpjkaKuVNTYq6yevnXgrAbAz5bGv5sfPALyjhNxsbw5zxyZJrhd5r24yuNELJ",
  "key4": "2tpsHWff8Fg2DMzwRvWBpiXrcpgJH9NZ3bzPXP4sTG3ZfjZ7f9GHr7V24FxaoCyCQk5aWE39soa9NPcu33FgPrFi",
  "key5": "47tpfjLJq15m29ZpyJccLBeSWXX2P1qQfFpchUQErGKwtY5FwbwQSiHhCkn95s5eWHBZfaGjmLrfZErDEwZv8Fy6",
  "key6": "nE5i5CYTFcCRh7ZCTCzfcyZgVPQd8LHMUbyki1hnfhfawNZhup2Af8kebrK9cuEuKgvkMehvs2z45gRDstvkfoi",
  "key7": "3Lw3PtfKwYp2kmrpBdha9HDEGvcRKuVtTy5roUAB3XV2KQTaoiwKyvK8WjDrJEkNmwB7awKwvHmALJKZpBPQu4UG",
  "key8": "2D2Uowj6KDzXbvrzKurABCLUihPXDDisoBGcxpsuUKK6txR5VCQ1CipDzDZsArqrW2sSweeMrc9GmUpDn7izfB8W",
  "key9": "4Kv6C3H8ddUrFUJnr3Ahs9wKiHV865xJYMiUNEx4CSfUAPqXnVsiuS6ryNoECJFeowFUrXEGtnXJMNFEv813KbH1",
  "key10": "5gXQqpFHdyLbpqhVmXgcxS9kbymJiLcAgJTiMeThU6oK4tehzVWuLfyL16MsMLep8XenCc2FzpWLWizJ5bMenyc2",
  "key11": "3mQF5bcHrUww8XrSU4hCPPj7KvQkKtJjZBWp9gT5KyB3Na3ZrdT76uVPSg3Rdf9NsH6PyPfNttWrMcJ9UAnQwLv2",
  "key12": "3JJ7rteosnoVJteacBuvxTfwmp13EKf5JzPnGidDs46U5KEohUjgcHwSzujuRZnyHbXEv3M6EiXbunpP7jR54c2",
  "key13": "3hGAeYzRngem2gH2K6gfkfe7k8L4BHJZoV922juaUaGabkSCWnqGYZqGCETK2WrCMm4GLMqLyxe4M595sJ41LBQQ",
  "key14": "3RCBckyV7bhWgs3kpuAvJ63dGRs3X6vYxe2PiEXr8FJ5XuotYjT3M33xahixPbiKQpmMNoQG3U9RsSYKhv3kzqRg",
  "key15": "4nEwu2hCfgr41mQaCJoxDXWpzwjRV56T6hzArLwzkiJjnYoz1tpfwxd7iv3WRiMRLu6Ho4uYK15rHRb7GzBBmNw5",
  "key16": "3KrUDTWdm57ReNsFL2bdYu9CBTaxvr9UaF3Bo4M2QcrH23Pg3jwrPXnSiiNS15UnE5Rp9FJRewkTQJ7EfGd9BQdo",
  "key17": "2zDK9iFnJNhX8Toug9ksWriBHNL2viZcnqBWuKDrabvBmiAAo4Pb5iyU7SkHRQV4dCabzxaSqinBUdZczkA8qmqE",
  "key18": "4yTH9ocZGRpZ36GwEcdQLVKFtzPxvHsVPUDSUGF2XTUKbZJZ4R2aa9grLHjj4z9eA9qyyEW6rJF27dPMuocvQ657",
  "key19": "4nnHx82urzFDiZ11cAYGcKwib395wfuTctmo6gWzhmesim4hQMczNwfYRmQoPQY2nHS9phf393wnFm7gcwmtLpBJ",
  "key20": "62Wcm8KCgq6dLutfm8zwGPjNH9F8eJkwxFSMxzqN6YB4tHGb7Gm9KrVDR1S1bCnpZ3YZ3Y2Zy38qMaBrUStQRuU2",
  "key21": "5xWUgzADBdif3gZkEctTzAyf81QhtYW6jt45YTuWHvgbKtKih4WJMocuSQ5nTp8TXjLFSct6auDro9gS6nuxp1uE",
  "key22": "2oQha72J6EJBcsPrUKCAaxJ8b2C4LPd5BrGUz8LF2cGN2awVu78bW5WGNpEkY82KBwkr1mTt8kAyYc9WawfavmH7",
  "key23": "VxekGvexsw7ohHPtapurG1JwaqCxEGz78fjPM8ZZGfdAfxmDJB8wQcgpycFrhuxZpLjLUavMGYGakeRhAu6Jbnv",
  "key24": "3PgA1VgBevikSiqpA9tc1pf7DVyuw8J2BsfcJ1c3nD944xmD8N1BtfGc3sfV8o8ukdBi2CHux9aifn2dzdbj8XLQ",
  "key25": "4VW6C4tw3bvWeXqmyUmryWTf9a5VtPj1PKm489ZYKqBZcHdqpgmnjjhWXFFNdBoEy9UVpyn8ixQFS96sAXGSZ4Eq",
  "key26": "61CmmnyKaidWdJ82NsdnHbCZZK5d1wxJtJLf83jFXFepEvZ8LJDoELohjfoKWxsHjHtaBFRWXVuNQ4hV92J3pxMy",
  "key27": "2R2w68TpkvAFhSEPw6TBmKQaAdwQHVceQJxuQ6gtvHJNFmex1B7oQgs3UP2JLjXNJRF677C6x8BWnfRioe5HM1tM",
  "key28": "2VNuLntH7pU4ciPoQ9GX3JPehiJ82Bzxq6SEp6AcP4KzjUkqq5EzXJUkEdv9PZW6cg9jLWdnzvuQ281YACb6H34R",
  "key29": "2V2YWcEsAVKF3FiSZWTpD658tjzG7ePio4FQw75A6Db8zMjZ8rNpAKKBGAuZTMXuW1DGTkakbR5JQh6yDijuFM3z",
  "key30": "3KxqTtWNjMaAaTsuLEQKnbCYpFDhMbYm57MKzMpWEFv1NTx6LDJ5c9zsxAc5xu7vdybU1Le4g9xa6nB3jiCKdTrd",
  "key31": "4BJsbUxmzs2K6AtXH3sNnU9EUvfJDz3PqbkSLF8DJH1SdzCSzsbm9zRtZHDZcTvEYanQheRtDwZiE7RE13cR9kwZ",
  "key32": "5sgkJc4bkYz1s6gdnNUU7syUSbg77eeT8WuZDuRmjyiCzB1ajE3GAo7comSNYc7cvUTj4KZw8i4QJokrBccDQnff",
  "key33": "5HiEBdZM9pamv32oYBk7VEmtTJN13aXyv48LpBN3AC83jYgaLDxNZY4g5XMD9gJHsXVNjPUT2tpoEBVFMFVzC8BX",
  "key34": "P848y5PuvPKy7SujWQjYC676zgGwibWBfyFquCZq4EBPJyc8KuLT6Rh5KfhmStbY5Rnw6jKoSpubwfx5RW5vYN7",
  "key35": "46vC6nJ6naeGXw6hs22uo2wuCikpmxW9dGFRJawpwBuRMyvuXUhsUabKLvXKkNu1s4JSwuFJ3m6VZVSLy6b2vuAC",
  "key36": "3iXNg1pxuVj2qHKoQiTSMueKkijZg2AhG6cmXeFF3ijmpnoxz1cdqMBuPhSTEZ3AGeEykEzdRUUbCkYq5e1M3Mot",
  "key37": "4fXahNTsWy14haAy8T3QswdB1TPqtxhTS3jNgBxG3VXDhWwcDkCnf73ftfdaexWmhpfK78PmWhiv3ZctDt2VsEwt",
  "key38": "2YMLL4f43nRg7UQvDFHhRsknybWh46LCuk1QQoEKp9ARen5P2ntaXNq77sJ7TvEZpPsafbXxNBm7z9xnY3JptuAM",
  "key39": "5or24p7ghZKSzSbdj2x5UtkRpCKNXE4A6511RUG5SC4mB8T6ewJPdoSF1WGbjtYjXK4gfHoa57sC1iVah75H7ShF",
  "key40": "NK5krhrKhitTWpNrHRzLknJqhdjTbhZJZHnPwYnEGPZRzGi9BVeMPp5caNqbupRRhcatzwQ87wx1592FWYJYfdK",
  "key41": "4guUwnWCLhDNPM7ELrD51BfLnGrXj6PUrkk9Av5j8eAhHWpxp9AUibjBxvV83SaDJbq2N2AtGTHCm2rzrBuqPSbs",
  "key42": "2h8eHTKs6Fdb5DhqzePEUxXqXWjsLPFUN8Dhxg97V3FP7TuNF6V1CRDt2P1sRwSeX1v3SzviZfSAe8oYwjo4Cg5M",
  "key43": "4p3b14qYiPSm4wSaCfCnMRpWyBTZRXtpgGDVryrTd8Gjs5Z6HWNio1b3sarjy6yfnMTXvGc7rAd7VjkmuJZfpJo8",
  "key44": "FR9FGaFVfN1xJby4UCHtcdjJQN4dtvWoWczzNnZR2wdCpBHxzySKjb2dpU2dQQPs4zLFYTvLZ6yY94FWPAFCDBk",
  "key45": "2xJznrK6n9gQPLxBrGT5V3ShvHXSAAjRt7B7CuWe2Ahg1TRPgsqPWNSsLJbncnFWRpTVWyiCXDoZ68Bh96x9T6En",
  "key46": "LtJWNgcsTYeMhJQWwM974BXaCAZhtdwRH3wPaZe9iRnNBN4uvvQx1dyJXHmXRPGZXtxuLXBDN6o8uK7B1bk2jYF"
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
