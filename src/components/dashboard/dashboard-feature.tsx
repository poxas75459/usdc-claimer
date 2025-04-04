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
    "2g6v6sRaKbUqbugd6AsY7Q4bxmeduwkX8MY8zjKzYbW7HWbcJpoFnF8eDpayBLthZoLBrw2Z7T8rTrNDMGk4ykpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ymvEnjK2edVLDs5ssGPMrJbeQuY88TcjuV2pC1kaehgjMVKW6sA3TGjaNNHMPaUjjibTmTrRcVwtoVz1TXoNqdE",
  "key1": "2u3ddiEyf58xriZaZEcLfHf1cGfys88eBAfZpi6gHmBjNVqvJ9afKi43T6ujvbS63jrp5Ux5ULU43QL9xSNvdLP1",
  "key2": "3V2ujsxtELGXWrvJGb95cuaXc3jCNvJ6PHmj9Md65AkbPfo3JeRHvJmttTEmbDj3W4pZbGKXGmxY9VXgpc44gysY",
  "key3": "2j1r4ztjgsS6g3h5nrGxjn1LYs5mG6oSsZRKZLYdbd8sABHoDbBa6gDRPdsmCTM3MwrAt9NQHAHxBTMdLRx4AXwS",
  "key4": "45akLcyoyJy4ss5yp1iwzm9RoRWeLrFbsRndHy65Qt4UJZKzCzo9bhwcbWN3We5mi7SfHn5BvwDV5wh4GBUxpx4s",
  "key5": "4GifS4BnkWXunW9c9QTA4HGauLkf9jtL7FvtrTb3kWipMS1KXZjTMSMiNgjUzduKpG48JsPZNXBKH8RLiPtyfqwp",
  "key6": "pGVGxHJmqDXEMubPvg8ouKyJqXzEvqCwVaJtQhMGSREuj6Dnmhzp9pkXHv4PDnNjWSye2Ys83Da5cUZ3Zj3APFm",
  "key7": "2jNhSF9Sif2sv1YPbieWc5rnYKSLyUJR6XfYJY4CQKsHvpD8x78S9UADag6NpESCKwJRAmoSU2mPQBwyM65pu2Cu",
  "key8": "5TqN5P5iFzwMApL8nyd6GjAeTuMTwkWJEtuBzM6wNrdEDNZqsJEYd6jGtmQYf2dvix1Yci2aUywSJhqijXeE7Z5g",
  "key9": "2btR35wzXNpykMJeVxA5U48GZcDt35rndyf9PSYw3PyY16dKuCV3pZDSvBgkHiYRxrg79hGFM3nKxAixZVEBqniS",
  "key10": "2PX4XgSdZbE5X5JajrDs3p5Ss9WQpFZRF9BPGqHxZxiuBULiE7t7Xau9ynZkc1vYt7zHLfLTaC7J37wBb2w8DHUH",
  "key11": "3RP3Rusf7vn3xXyiDkzmfkPvwsBDUvBwbgmVPTU14dZQxwDVfjP9N36CsHy5LXV98BVSqF3BSpekR9N8X8pRDWL9",
  "key12": "4zwJNBupQSFa8TWUTaDX1DZcLwppvGRWUhDC3GxREAC2kZYLiZqUQm61tHbreSCQREY978iwQiuacgEckqiSmUcu",
  "key13": "2i2xHQRDkGCjjMpmX3YvpnxKxbE64PCpry4sRvNF7tCrbkzDSpWqvmETex55HFYGZMaWnrqLMTe72koRd4LA8Fqe",
  "key14": "33ASBoc1YWx4uPhwKSkVxaXHwU5JQeHxkNrarWHDPHJTuZtrBVZoanXg38h6fBSfQU5vwuduwYxt3hdnrj2CNhAD",
  "key15": "2k2AFJ8utRyXdSPBYJ4XBF1WrCSpZL4SgG3kKTiEuJR1joRs4vHnwujAxXdKNFehGCCoPZpwKFB5McesMfm91TUD",
  "key16": "4DXv6fxTVQUuDc1dAbVAxvZicToemHoz1SeJHLVrF2XiKqpP5HRjS62m7MuNiaNMULcG8M9Ji4g8GmMiHAnRLHe8",
  "key17": "2myFhi7YvvRBeaJ9jteVNYNXXsGHqSXY3RLGfPVuJCgYkoxZaL45geUkZL82i3APmFxNQ8yywhSSd6rn7EZDK7bf",
  "key18": "5fnxr9z7cDM3eqcCvJeWbWbM8egk9PFrbeqrc676FMJ6rudVDpBdJg4Les1ZXx1qTvZmuqBKZHeGdqRrhpW1shJ7",
  "key19": "zHkEaAN1XbM7RPu7CtjzoWqNRTZThJxYUxfC9KRbm6dG3Uy4ADZTnHWCJ2QV5BVD3kqpahYdFbxkeYYz6KCTwqc",
  "key20": "4MW4YJTVG9WKuCtgDGREuZEXnmxvbvUvFGnWf8sveyavdxDa3aEveARbQFfvwT7e1YKD1DHbhdUfteeQSKVeFPgK",
  "key21": "3tQmQuFfcAdKfB63CUmfgqrTEfuLuJNkjA91yd12vqpBTLDs5DKxtPKicvNu5vP4fux2WB2DU4NkX4Apwc1gCAjt",
  "key22": "2TBWvMH5t2DtDFL2VkutCoBm35y7TYfjf4oFru1jRQXFog9sLUfGNRLqwZNM8oz6ct6kz95mrAUiBStyqvyoxSAW",
  "key23": "5rB4hHXDZ5ppkb9Qf4dxK8BwnipSdpg1WJQsTpLME3ta5DrCdCeLi2dFNfpfQu3nse8SnZLnyCyAfJDmyTuGX3DQ",
  "key24": "63bW3dXpTCrawYo4tEYkKVwF9i7sCbevpPcFovd2mDyxDV8HYo4XV7P1UKPv66JjfQBpFe5cjtcmkRmxJoeDQktV",
  "key25": "4CbNcamDEvkmrixnmwmjZGQ3GogXeciehos1Tc7i4XAadPf4XmpRiKHLTVsZ4nbJr9EYG8dEdNRTtHumJQ8a9WYg",
  "key26": "9CMDDJpED5EyXGE7V7YorEeSWFt7jrUngy9QAT2zgdbsa9dJmHGsBmuqD2VP1Jyqq4fpx1FUUxT4jasS4D6Deze",
  "key27": "5B3iHVZAkrGT6ZsEtZpoQ28oC2xxKN1Hv7z2E6Mu9kJYy1G4TJpXv3aHBZ7yDbLuF7y4LLgpVvzyuXYLwMNA9BVW",
  "key28": "4A5i778wDpGLPAvNxyMKXwxQWk2JSJ7rVfiXmLWjTBqbYfGhbaX6sQk4MzXtKBAQSxbFCTvhsXUHoaZG6aHFqdhN",
  "key29": "nX3E69h11FdsCGTRySMAQr1iwSxH761gjS9Wdvoxr3ZpXnW38LS9iEGHN1YZBCotFycXkTkSapMBJ342js8umSa",
  "key30": "5BinsKHNGrr9qVaWzv3Vo5ANEDqGRrsfnLUgYw83GfLaEjvg1aVWg2QS8cq9KK9absvC249XqEdjqqznKNJKkdo2",
  "key31": "5gNE5EswsHwGNZtDmtM7Qr1nMpshG2MwMNdNzYCjh3Mcq5jNkZM5pmXVUJrz25xxmVmSiVCsPjegunMir6oEN6rA",
  "key32": "2pkZ1Hkqj4kvtaFeRX7bAtPKS2kVzDz4daGvCdhcwzgzZAp9g1krMx8YfQLiybMYUPzxV7vF7wQ7wMpZDhg5vdkG",
  "key33": "3hnAcoDX5YPDWMweDwcNCBiyvwjyWPtqAQW2Noe8AMdpbaQT1wLyUXUpzCwWMdZmgNPRCYovjKUJhyrA8iWiJwSE",
  "key34": "bSRLrtM5WydRURXa3LFSeXJQrSx2n8tHn9tUyHReczm1EGzEZNXXkpytD3czGg8Epqx8nfVk1BebFU9RMBrfutH",
  "key35": "5mshzdbEwVrGWqUJXMLUXUdmjduntquirmiPk8gQMxfn7dii6Q5hasHUzJHVCKjRT41tuH9hrR4TGahXb2FfVTyg",
  "key36": "27nQKM5JHbUb96Dab6yUh1LkQU6H8uYQLdzQZ5UKmjevdM3e7hkrbPaP2AZohAn8jmqZ5t2QtXsBdFgHuykZBxpg",
  "key37": "3Gv4MH8ddSmvMMp4LnCK5gM4MyxQoW9eacQRagkwx47xb6x8yKxgZjTmaRvxsV5TNBEUqCN2XFyqE3eEJhPnTNUr",
  "key38": "5jsS2ztho8ifBDHEXpg91Dr59Q9CZPDvpZeYgVKHjUxiRz3bzD3unH3xng9nNVJUKYWioNfZymPcGCjVfvwqsioG",
  "key39": "3fN6NAJ2GozdT5BTSqbaNa7kgLLFYy3J359k9H5E4KEPntbemw9cXaNdxY5hRHQkMp1Tq3CfXSVDXv2SEUvTXEd7",
  "key40": "49o1bfAKh69wHpKCpYENmVwaQfXc5KcoHcF6vxoUCA8MTRMHN2dYJSqad92P4qzFTtejWrv4RP9k2a6SaUZgZcBu",
  "key41": "B9nDGK5a5tJBnmzi9vFkDd5vJpnwc4mACi6ZFovFwCsWjGXSeyVw7XeGUmfB49GyezFWpGvySX9GJWiYse39ZrF",
  "key42": "5sxuigmJY5keUSPF8meK24RqJ67PDhJKPCMDS4hStGjMpxMLdf9aBuL7AwFjsqT38sQqNh4BMMcYsrujxbaeC6Y",
  "key43": "3oLWwH8eQinvan1fi12fH2XCEPLtLvG7jSb1RpFoNNaLMdVzyGmefEjLvDbt5TogoUT27twAjt4nVEKg1QtcHMbL",
  "key44": "5T1SZhytoCzP7x6sb47rjwjciSDBeLQnnNWwvr8PPhSrffsTvxHB5bE8Ls5HcTqEYQxvdPQhcLMKTDHSiYiSqqGL",
  "key45": "DKnoAe1vP9TnngXmeUiWG6Y9paeWspNwWFja2jdHZyBhui3YVpAbs8frotQcCnsvcXQ6J9rQ4VBSXMnX8FSoKcC",
  "key46": "4X6pmoZ3wpfSZnsKtR8ovfv23aexSZGgsHbtRJ1sCo2PEXfdyCwM9SXGcy2iKgNPMwfFXC4QscEa7N8ZNXKA1PtB",
  "key47": "5XAVAS4rxenNu6f5oNLY5uJgTZMYf1MnMXNvH6BPJRDvPAYwAnLRYzMmCm8g5CifRkMM8UyNDxPB1i8UVmYVC8pT",
  "key48": "2sMGr3DWGUyDBF7SKsJ4rxwr9aLudLBoiQjCaJCsktmL25iHNUWa2Uef4XGdf8cQTBvr7JNJrCmoVdwRgoCUcMVw"
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
