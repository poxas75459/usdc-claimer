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
    "niPKHicnUsWhpesB5i9Q3iPh9VqZvz16dYhje5XHRgrWeo6JyzArHX8HWCUv1Rofr5o87H4WLrQZ315NpFzzpkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NKmQGopWNUZK8o7i8XCPmKhDCrpU2sHvYxinbNrbVSNcwMTJn8PaEmTZ5B4o6FaP7TnhCw3qdi2Ah4tHpv87cWH",
  "key1": "5emVNjAvMaMYW5QYN8mUZ3VDdp4QXxWPCzaCNAhGFxQjWgdRK3md4k9axK6deGSffqnmde1UmHr7ms1UAJXaCeSe",
  "key2": "4yeDsyUSWFzP3GgHNoJzvMLHcDi7qxEB1eucWzQbucPpGadE8j9KoPkLuHBJo3UuExCkKm8jZ1Lu5rgtf8n8saNy",
  "key3": "2MyyRRAQAdGVFduc3s3YqwLmFJmBieNVAHQzajdKqwUeuEW6auYoqEyeMhKvaQXy4bxnpizAP8Z8kq3jpJzKEhK",
  "key4": "3D5sc3uTDZELo4cTNmKZJEccfz6XXYymz9pEJsZHqFM1Tyjg6GECZ42FQXCNN4MEF3aL5fJ6w8ghu23mitFJf3pr",
  "key5": "32y3xXJCvJZNaQprziF3VTZDgxHpeoGnoCwKCa94ZwF7FX6m9gs2tYWqxDEzvpXbtEyortdnLQ1dMFHZs3BFW2ta",
  "key6": "2invVsmgRksuHfa4X7N9kjREUGAHv6FeFa11KQpJLXksG1hiAZjcazodZRZ9ir3qeBHC4EcfBw2fC4HvJiPZ1yJZ",
  "key7": "5sHH1GyBxCMGecyxwXgyktgGsnKRgoNFnt5UnTBrKVSf3PyuNhT68ew3t2dCZQXUBg8vfJMURSzk7cw3nVq71fT3",
  "key8": "2HPvfwM3wQJZXgsw9JP7kntG8F8cLvWwupNzigKnWb9hHySQrr383K1tgcLNu3Thvazeq1tzLYtfnX4sWPqnK5uQ",
  "key9": "3ZihqaLNEoT1JfnN1HkQE91zYWb4sbHsmiTzym7F5o5baXwUTbMmpyVEAFtac7q251cxu7pBBxRpM4w7iJJmipkf",
  "key10": "BV846wY3wda85CCU4y5k28pMjG6Nfr6znSshJTywNZrnxryBaVT8rxQb7Erdxqtga9hVmwXVHHanYT6Vy7T2t8n",
  "key11": "2AvVt87qLrrw6Q4x1SWLknTeoYniFxMNBBpm6NVpEt3TnfQ1n32ANPmh4HqENLhAHE2yoLe8T6immrd77EsqBpGL",
  "key12": "5VFWSkr22b5fFoFoH323kcJLt8mTSzty5UoWpekBfnU3bYUQjCCXyyxAjtSVUThW7kxAbv3AgcbKViCGhjtEx2if",
  "key13": "3ftGem2oSJxxJueC77xbgZdDtaXR5p7zcWz9W6fg7q38GFuctBo7Zcik67N53CMCxkp1nbfRyhh2xttY95xp58TC",
  "key14": "665VTxyEEbBgD9dLm8q9zog7fWw91VhfimQ2nstr8mdQr2zbXXFzSLaKskPUrJ6gZdQngExJrSapFUfsYQr2DDvJ",
  "key15": "3qdL5ddxHLZnAzoet27T1NQ39wNS5gSg3QSbdBgwqA9M5tXCaSdTzWmhya7B2JVW3ovyEh2HyJuSNPj5bQ3yVkVx",
  "key16": "zWSsS8wEfijCK2x7YCYXx4MNswka7sVLKUCKt3z44akd9diVyqcFXujt9AukSnKsFmuLi39k6e4WxXSjzXdWdgX",
  "key17": "47YNQtqWBFr49oDBDE8QDWPoW6LKbdVw8owDKoXsAqdBznfHS36j8wQBw4cyT9ZVHDn4Jj8PFEz8fW8CuePyWb3G",
  "key18": "3tnpZBYMhaEeE6Hu25fcXSQHVWs8eJUYXmAxa1UH43DBFxYEpqHnLGD6oFBXQ44VgS7HtSbS4Prqv4pHjjaFWb1S",
  "key19": "2VjqehtsDXqraVosJ7QhEz8JKf8msV2S1sbLbyJvPD6rmPrn245Wz1yxHn8n5Wbj2wd92SCJy6okecBNANMUcYTS",
  "key20": "5YaU7XAaUQGfMx6LhqdoNTfSDutVtTG5rjiENzwkGcC86rpAcYb46fFnfi97pmhAGhZuYJxEjHpYJyZk7XCEqhaU",
  "key21": "KxaHjxXHLcYWb5fzE1xhf5cPPBAmSJKUiByXL72FZwGMs1vQW8eXosduwnmqHme8yjK4LgSNE3vrTa3msCvwT8P",
  "key22": "2yXgB3CyaTvPrtv9RGJ1ANbt3SCfMpGm34m25PxxZewvTuE4pA9CTp9kveEXCmERUcX6sbhaFLzmriCkZ7PknsLT",
  "key23": "3Fv2QdE6Fuhq6Hk4YGJJhYhMoGagJWunfKKVzNs3UhDbEwMs8sTNRMjMCQoTR3Hon7uJLvTgJTGLk3rJPsmzJnqs",
  "key24": "5Li4TvSTR2ghcDicm1ApwkYahrcsqZ8t9QfuRnhvQpa3eXixJ9NMg7Hteo9vjZhEpQRwKwK5UoSjpgAHrHZf2o9i",
  "key25": "4V2q7FA4pF2Q2LKbkun6cBrWKzmhP68az9Q96XAJkmoWPJNRRfVATXUiw7ttP6D3uw1yDyLZxyJgDVkuefzZ7FfL",
  "key26": "CsjwJddhi698jefEM5yTnGLtnBWhaz1hR9EQLiXraTUR1ST9ggxmcshUDZEw2V5FRkC81Dke1pVbGBD8i8f2BRQ",
  "key27": "E9kETcCzoAntn4HEvctTu6XFu5kxTpsSwkNmc9qgXA1VCg51DWTn1Mb8xn6HhifVYBuP9we42usoNK46AkRcHRQ",
  "key28": "57HmkwbJpRUFvVPwNCcSp9KD46HzqG7B44xxQFLB82R36zSeWzXfAq5z1ZUdrSn9rjuQDJ7aey8ty2a6SnTzBAUd",
  "key29": "3DRNF8BukuUPD9T7Zk2tJLx9JHsjRt5uLNu4nJtcnJjrgHaPgsFfCRwwTdbsYF1nSRyDYxsVe79dRKuR4sk6kYqV",
  "key30": "5M7VGConPRVkJSLUT8iPbq3KHrkyYMRYYF4qwK89g7dVtwMy8E2SvLYqdKHtpjZoaZemcyt15BpxukHBTAVmXB5N",
  "key31": "5jeC3wwcbzLLaNxw4kGLbNDN726SkM2Fj4UyfRmPnaH5AYSwCMHMZVMtktru6gu7Doys1DJ17VcLVPRDSTSZ94cz",
  "key32": "21GU5d14fVpNfSqVg4znc2vyo2RzbAXfoZ7BukTL1JXky2oiQfEwu5SpHRMo6FK4Zk58Epk7VrnpNKqi7GUPzff6",
  "key33": "15AtnsQ563jpCLZCkG3Krdwdpx8GjpMvZBcruKtgU1yUfFYREAzCGAFV9V8gP8LVCa41ZhTaTDXUQ9oRcuSep2c",
  "key34": "2dhguMq7C43zb6Ve8tWjJeFkqLdhRMHnHnXwaW963tFw2ZcvoXBcfhG9LCZQsQVJJt3sEPLYoJEENFudQd14ZHA",
  "key35": "QftXGByYrAxbtaaSVxbBaVRp7zYvU18CyA2BCPA7kcBSueGDAnzuQZK9692DeNuCTt9Wg8BLWxjApAJjZkjyCjk",
  "key36": "9eK9wesXWzgRbiCsWVT7yjmYsd5xuzTz8qUMkWzDmP8rieK7hAB2G9pqBX1ehUDz17TMqah4idLd6PfRigUkjs5",
  "key37": "5kGtk61WfQa2oSQqmNMiFf1ipqPAY2AVNJz7XQYneTjxAK521GES1P7qM9x7pixYW1WqqtjTRgNyBWmN8VsrTfd1",
  "key38": "2UF69vS3KqLCwrC9KS4SR2ZXpD4GpjXorETvooAGn9wj2pHdiHPeJ54wmNvESow49b9iunzBMRoi2TNzgwMYuZYj",
  "key39": "2dL3xkQZQ2n7fuk9Fa8oxwFbHbbBtYN7XUyV8nfu4NWTr7AtM87YF8TA6ezMfPkNk3SanAuihivqNkDvJVqobitB",
  "key40": "373uq1tsKr2dAyXn4UPNkzj94TotPbEXhzz4mRjaQ7Ed9WxZ6Nd56vS99bRgzqVCGFjhXTvLZPyY2xHD2ASJ7EJm",
  "key41": "3s9FHJC9XxSDytuAUujhqAUhaVT5KFKhrVyTWwGwzqSvUe8HBWjRSC4P8x2we1n8ucZmni5YhQMbzqxr457w8eQb",
  "key42": "3s9Gt9WFELu3cfGJMWPYEijhAftXHeFZQXkgkQ1tx6fZWzedjkZxQBnQznRkcYfAWqBkHWDhcGh3zcB8AqYC1Z9S",
  "key43": "4RD5zWmz8KLsnzz5vmQMXGotS6D45MWTz91tmkWpsW8xduUekgapVEbPaSETNHuj5w9yoZLNnipnU66KTbHedKeR",
  "key44": "4ZyonyyGpHAjdnuiYHAwrXj2CUKQzYpxyFxGZinrkSN3LNnN3kgDxK3NVRqkgFJ5b9xyK4jpXhAv3qzybi1VtkAF",
  "key45": "54m7MUqkWSt5ULPpDA5ipxsSS6HGfDKAyHDvVtqC2XgcyQeQA8rFbpfBcrVfgzwQC7b1eua9VogfxxeqRFrznUFG",
  "key46": "5HL869pQx73VapQtZkrHotT7Jvd99hLPd26qM5dp3bvErojbgbhVLSMgZaUxzxZnXZJZ8zgAto7nTpvyP5aZzU8D",
  "key47": "4B25xUadqFYAe95ftSPEA1UMEYVb3U7y9rVuZj4wD7Xh6ZLRw6xxiXVsFhSrGRnfu4RHDbFrq18seb2nYwSXPDXs",
  "key48": "38NkVbkyfG2gvqRdUXAm43cMMxsuHQLyfBgVGcKeDmCX91vdisNXUnAX5FxK16x3kenT1ABgq4p9zM3EqaTKaczT",
  "key49": "y643RD8TgLxxLCZwHg9uUs8q3zrbkhbwW4ckJvPrU2oPLbu5TVYWvsgU8hRMYtNLUuWx2P9hZ1uDDuMFccq8nDM"
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
