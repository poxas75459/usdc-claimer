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
    "5zRUL2TUa6wDX9dBySmDeuA5bfC4zMaueRMG9mGTTJHa1xHyiQgCL4LiCCCG7hbNzFHPx77YLsDPJPYhWt93C78n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aGGnej37VkT4yco8uBzoRuYs3AM54eBosqsg5bAmXSe9e94UfZG1umocgFUcnWs4t3frbG1q698tE34fgBYf8L",
  "key1": "aFQKYeoKSF44dASfc9dUgeMQSwM4hbUCsa3sJKpGHVYVg4xvRboLUCkcSkPLHXHyN6ououPpAUjUNKNTTK6hxhk",
  "key2": "3nqsRnUDPjbjckPXFSvC732n65QFuhaj6A3Sku91da14pNdTKHXtxXV31frRyaYEWK3QHkSJxcgS8RbAUuPuDpoP",
  "key3": "5BmnaX1TrkxsCD8NroDQ3AL244nSTPTti1MqSbjJQrdhCRn4DQPM281BLfjRnhzSyupDmWVEcTNVqhbGNXxYzAiF",
  "key4": "H2hCXF2Qwyeb1KUGSu77HnRBdPsbfiDsVVGQek4aiKdvWMRpeSR4L8HFRxfHkF1HNpWnNFtvKGDBFusMRjuieZt",
  "key5": "3bpAYQGnqE8tA4wTnkfUXvSE1UJsfsBCMAfNw2aExScQ3yoj9qmimKa43SVLjTH6nHXFNfM2RNznpc2j8rkxjzVu",
  "key6": "3NRM43dix7c4PKoeiNCgYa6JzoNWMenw2DovmmCwmPP9j5G9EoqGZXbmYD1ReZfG3upyRRZu5GdxXBWdctXuoKF",
  "key7": "4Hg2JDe9yH1RRrKyUMGGYJBsZi7RqFvVUE9RatY8RMUdZz6SUpVgsj7anDdQN5mducEcE64jVDEYSazdAZxVEva7",
  "key8": "HHkD421ZPurZD26xwhqbvDWdN3rr8wXdhMQbvnoUsowCvCfmKhdyGrJcznkHiBUUBW2pZrAkpaPFHkTtGWMFBuV",
  "key9": "5RQMSmoyXQQs84UuGFn8EB4ngRghMzmLY2bq1P9hJc3YLhb6JT4r7WRVSW6K6JnteD81mnsFb6HKdkh1iukFmy7h",
  "key10": "64JMo4b7q6kXBLeqRMHHV638J7wrhrL1Bg9oK7ikxbAw2zCZaXCkKUbjSr3L9iKarXuhTCihscmQ3GjedeBsb9YD",
  "key11": "44T1ZucpQ3JwGoWAKy2xXewWLXQcq6iw9DzpsmPzR4Q9u5EUCqnHB2pWrYjw4rdCaBFabWDSHjmKGMdQehaMM1YL",
  "key12": "2Qi56xYMjDGdpM6mFFvpWvvCsbJymQTFHQoXsZqCEnu7SAvKxGGVsMh6NC9rxBMVGNuBWqXvq6DTQkw62WPuH2Er",
  "key13": "2xXXivk1ug6ANHd5Yo6k6jDeUgTSiBrAxQgMrhX2DirCe6kki16C4KxuJsNKwtP587QrzRFnffm5NrnTqyYCAQ6Y",
  "key14": "KbXNTRpPusVzqvtqJka3mzXq9PGiB9Visy4zeCtxgc7FRFDy2vJeqmgB1TiqEguUoGedCshoMKsiMTwA4NrEq52",
  "key15": "3HQXG1CzT3T49ExcMgMvofiqdKow8pr4Tc1j2JErDuomdJPRxeHL3keKdEmBvep7EE9yGC5jizzo47ZFhzUbdhcq",
  "key16": "31UybKSeTxtGDUBmq68hC2SRGdbYGcDRvHK3s1vfUcMcXMYANn9frBJsC9pBJujt9Xx1CffMWcatcxYRqkuH93Xh",
  "key17": "2gWpJhaTWwWCoNiJbgutfnta5sjhn4b1i2rtH5RdfDadWMKztjKfbxSf6VFZP2zXB13kC4CaRXt7oNJXSBb2anoo",
  "key18": "2zAERUeHFACHyyJRLAYpeykGDvqwCTvw8g232mbu4z3s9QKDLSsdk6XrEHaHJXERuXyqbi1xyJBng86XXHF6vbsR",
  "key19": "22xTnUx36cDm6a9oVrjLPSreeASfvUWvxcHrCqpLUoeAyhGLuTBDPcvaVMB6bmSohfLgZEgguNNhKeKKGwcyNG3c",
  "key20": "2vzLDhZn2fHTgCef1y1ZdK82tFnkG6MzASZAtH8ygSyQUo6Zgk3t6GPYuZJuJU2JYp3z41MiojrHwaFThmRwmn8f",
  "key21": "3DdoQpCrhsfgzLaGMdM4W5zM12eonGBC58eAXbQ6AKa1mdmCvNgt3mLtjSH6Btp73Zkb4nfQqU1iqduYdcCnT5zZ",
  "key22": "5QTF5HMsUz6vnqpaTUUCrJ8Xw4fXHThtp2eQvtyoxShPMXbBiMwno2LBnqaH7aauPdq1dFXPAqumgdCpRLNvi6t2",
  "key23": "DYsk55TSPPHoBzJi2cWgwKi97ZfbaK2qB1fSJ41M7CfQrtDmRpQtuPzEVDFSwippYqp3nzAiBn4EydMkkPoE8gx",
  "key24": "2QaghodCdusJBRCtXV73bJiCKTRPVj23X7BDmtezNt2tffjdp69Qsy5NymcyGVZq3egHkaZqE5zNAfCoh99jBm6e",
  "key25": "4FaTv7P5regrGgVYbU7Bg4kVNxYiYrXdpaKqhdEAFU6LxKpspP3N6kZiSj9rQu7XBCtaFyoLhxNJRGYsePFmt4j",
  "key26": "5LcP6hRNVKDBxBfceVgpy4hzfx4obhQ3wdPVbjsqDnphu2k2rydXi2ad4VAdw98ux4ZHZvyWgiBSByPYKDzx6jd8",
  "key27": "542bWb8JYNdt44FVavTYm1QHHJTbxa19EzJaif7QodwBwxcf1DQZYzFyhCq9nayn4jxGidjcvtABrPBHMVCU7ZK9",
  "key28": "GivNfgbdQLmpCiEqJGS6HAvZ8fRGfuuJKnpcWGvyNhJn3NazNjmm1zozzoNQKUBWTLvGoiYMVTQLeJX8XMhyu9K",
  "key29": "4i4BtDb3d114SpCyKPtiPjUMpQGGSnEGppdagyB832Pgg7dxUT1yss7ZWPk2K262m3KUzRprjxgA8UbQhxYsHLJo",
  "key30": "4Wv5pvY4fHzXzeccKfkSkKzxajipfjMoTPaFBEmt1GiyjQhw3YSYUNKEwe1wyrniXDRhTLRHAXqBKH11gsfj4kGF",
  "key31": "4s7xRcMhrvSc2ia9BextZaTVmv75NrB81UP2ynfCXzc2SWa8etUr3kr6hk31FodLV3mrrgTpXXJQv74Cr7n2iNYV",
  "key32": "4LDUZK1nchqfeK8wf6HvmkH5Y6eXwVG8W9CbaLXHxYBJYjJ85gTGY8wnoU1DZN1JhzgbH3T3eDWhcNPBVQrPfgaW",
  "key33": "5ZRXh63FmCrFhnSUh1S2JotKMkBtX2oqZyQKK5fHR4Bt9DG93pedX7aTyDmGnhSrxLVtTLAkDkDorcFWtANZ3jdf",
  "key34": "36hD2ghDTn6PuZtnuPBNJXJr9SwxAkF2wj1x1z9eyprZabZaQjrh2pFMpBJQJs2iU6sKyu9umP7R5Cq6fKegEhnV",
  "key35": "65qGqueNWq6kN8Dfwuk7qauNJEqXXWvHXPvAzwD5dZCkeErc2KktSfFbAAaPYb1gUW3MrSjd3RuSyT2rhUcxCV5q",
  "key36": "2VwAHe8xiV7pkFYdeawoTB2wNGRp8rKM91jWJPmZjx1WHvaCEw5XqwREJA2JpN4brLwYFxQEGZ4RwLeFBB4SsTKk",
  "key37": "UVrcrMoD9gfpN1PsiNm9K1Fp3DFwUaDt62LMYoNpzyyGPmXmkESn9KBjZfb4xNCLxoY6w24RynfxdTbjfZgkq4i",
  "key38": "2QKboDWDdNYBcXN8mfn1cH7nuRXr5TLfi3khMtwbwwPQyNQyXJKn4xPULb6i4riernddHC8baFRGKKYYFTD9ayKt",
  "key39": "rhMH43tZWCSgrJcVSZvcE4Ft73g5DG2x2sUXpo4zDVWzWomptYmRyPWuQgaixyYUyBwZn3C4MKG9RgDK3eWEGYN",
  "key40": "3roifk27v7hew8V6xDdA7iSCUfbH6kNYb6bcUvbkUidnqQvdwaz7gcQH6TuFd7gz4mjHBcbmfWymUgubRbkkuYTV",
  "key41": "xsEPg1vHQiuTSgXU733GTT547ajCGbCMGFZh2yEdGPRuv6YAQsdw8ccnCWf4kgMQzEb3HASWSreBqYKnYB7AwtA",
  "key42": "5gPzdfBe5Tb9uErbik2EkFBTPjsNPUmABtxjpHC9Zc1baHNrg4wmzhQn2SVncWQph3zdoq64th8piLC2yiRo48j7",
  "key43": "4cznzjhP39fxgDPFdT9wb5eEg1fzcgpQXGCayPN33JhLnjfehWmtMvJdRxwrRXKujRKWEdRnYNrxri4FhtxiWBtP",
  "key44": "4zMuKpdGZXLFCBNVQzRFhZXbEuBfq3RTF4rE8BUruyttSMs5A2U8oZshFG4BYBAW7epdnQfJrZMaZXEE1mgnXDSf",
  "key45": "4yBzDzrsQs9k1mLPZ4gHCDWvyNyAhchtZBMtuDdmJ3BvckwNJchUUj6TN4wVP8vMbSy8VE6szAF3R35k3GewRRQm",
  "key46": "374GbNX6dY1WeibC2vDisgrbRPSdAhnUJvrtTG8QgZsPiXEjMPt5no3dpHpDwneHGM6xB5zbJCnGBcckQdNiDgAS"
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
