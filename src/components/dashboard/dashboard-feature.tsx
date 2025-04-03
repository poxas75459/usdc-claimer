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
    "Wn6oKyh1EiRGV4aHTXuUmVVNMpf9rSf22hVofPXSyD4WUqu8hAQ9Tvq5cKhXjG6iuVNwC1tW6DnSSTm4ziTjqhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i1JyUQ31tD1qbcFj3m2pgrmdoAxmLbZ4kpFyz9zAfnjeXqeMD4Fp8YaQd3K4ZB5bbCavicziEoizuHeLLHL7Dmo",
  "key1": "2j78o4FVrxqQid9tFMnojpN9zNmsARyideR1dPJkrKZivQYtTy1da2TmwkZFxi7Z5CmcyeZ1qi8eAjJyYWnNsRsE",
  "key2": "oRx5BPRM6cXavWGbL6pxmbYwFUbpy79DafBbVS7anAFhX7fRZpoKXM2VaVHa2szeX2vgcdK95Qb3b62e3QLHrEC",
  "key3": "MSoHRSckMeuB5XUYcqe6e4VABX6t9oeS58iqi7Bz2EAJK73oNvpXmqY9x4ZjWxbzrqEkXMeBjEQdThpnqx9DsLo",
  "key4": "2Sf9VLc66JzihzkQ6vYYHAgr4L58Dptm5dpzFNgUua7pVCb3X1XPrif2UcQ4xVfY9C6a4gEAU5pTuJjfiuJmnjpf",
  "key5": "3xkofoTULSLo6vqUXSB6kQdKZZjkPZ3M4XSL4dUSYpHoRZdR5yYfbDK6t7S5wkY2mwdHonM4HhgE2qQ6YDQ9xd6U",
  "key6": "2JEsNFfQpvGMrP6kSMbwv8nxcEqBH4VgLs3Qz7w1pG7d35qgtnbtnZsFCN48deAvpjcSgeR9oh7FnUrTvLoEQGff",
  "key7": "59LjFkK8VkjT3E8VXSMSrtp7o1BBiVYTSZty2d7HmgX7cA2j5r6Zn5byLq7RqA8hajuFewUKzc1PJn5HsstFpzNh",
  "key8": "3g2B8RRyEbax63Aq7Z9VZtECqt8K618RfdasS97YuDV9dVDTFySrUuYmD8Cr9N28sR4MLweKinLFKBVGox1Dq5gm",
  "key9": "5iod9QqcxQD5NdLPui5srd4g5rW6nVPRx1qgLpbnjdKoHBFqFewzvh7CBPhHL86n8cXkqrRk5KGejcA8VzVEodz7",
  "key10": "3E9kLxGZwL9vA9nNjnsDQDUHjoatHuVv1nqLQB6yug22uemAb2WFceKCjMFsHSdyLZWotTyvtSiE311atybYPqqq",
  "key11": "4Z8QP6TZtpwvwRG11GuzGDAizH6VkKs9CXVt6SpSuB6Y42QaYRb3iSLFHgfvMhr5fUxNYTeFP3tnuPF5udJxpgTM",
  "key12": "2cTcsWydqnVKT5PRKwtHNrwS9KNw1u6Ycoeo2ZT7YrNxSrdU51LW99fA5aeqUaqQ8mL5TaE9UTaUVhPhmzkBsPFY",
  "key13": "5PnUciAxss4mTjfHzcwoTqVqF3tjngxeb14sFvrraHroGxRNeBuqTj1nH8x3CCpjpw1Gt5CDCdaE1ZounQdY3Tmc",
  "key14": "qjB92uTokrRERFe2wAvUvHnAqEGrJrLUAFTvHCvWazjn5tRPHoeFoxwtzUPWx1iYFJyCtUKxUHKzvLZJ6oqtiMA",
  "key15": "3p1UoakJDPQa1egAK4VrDbzYCsJghWWucAPiT6h3cgcQYDw9A3bpATbTHGFiVKpe3d8ohJQnRofDcSGdJk4jkLMG",
  "key16": "3JJxADNVeZpiRfk4ufVSu1nNbQM7h7P1GwFQdamDUsUyu5DcAhM4oTzGgD5wjf24vQ9ApgLhrW5RLKcbrHSYGtwZ",
  "key17": "5RPyqdKYKJyUt7CKHwLdvPcqC3NzN3BZkUGndzCrdcRD3h1hVebuKH162zR8tJotoWY36s7z47w1xtcMMQ8zoiNV",
  "key18": "46nj51WyS7A7XzjeuhePRbUT24oMhAy3F31EJ2Pk8dqr3Jo7JY6aw3gv4ohziT3SrracYq2y8YM5Bsf6bGrscJci",
  "key19": "4TLdSukaPxk6qNWrB979VaPYCuAW8EgiEHnHPiX5ifz75uTUAM63jNqY9enPoGqGMjkyhbBpYy8wJvdX22V29ZiF",
  "key20": "4Qgdodco1s3opTyVeXCjSPtP8gBu71SExuJK8sJjz4Yg4Hj9tNwfGaWnqjMoeEF9ox4v9ePKdx4HLEMtP8XPxtf",
  "key21": "CF1eVFQCFxGd6MFxr4TR1ZbN8mLbZNAsXXfxB4TDHzkGqc84UQGrUsLR4YudoWXtNJXXnUM1A8ffj1BnSWm8CJU",
  "key22": "4KFXzW8obmeSohUwpuiBfWp8XP4vZZaxukq4cUCWnzs5XxB2Lg35QfFEFPrnnmkBoFEmResC5i6ApwC3ugEm6g3d",
  "key23": "23Qzu5i61ociie9pBxrum6TgSgTQNbybW1fu6TDFrcNYMu2vTTv4qhXtczsrfscybaZcYAvAH5RmNtuB4CCypNcU",
  "key24": "3hahEX1PntdTpmZMyoSvv7MQqimLRRhfT7FBYLn22eNXcQuk2wA6NHMfrqTP9qfcdehvDBiBEgZiWy2So8oVAWnd",
  "key25": "5nhq4wPBnvdhQoAKhrrX1srB81GZ2Au95aGQWrF9pYDk4zc4AtzjYzZmwyS2ukCAaj3CVMoQ1Qf8pYnQbop4FrB8",
  "key26": "4GvE8CB4Vg9jz1MUTBjNSHFqbGRTt1zg6NppEEdx2ENZhESz1PKgm3jHEVh4w1UdnVvd4eEpqhDLA7KY24ADuPX4",
  "key27": "4FPJuWUmCZ4Z9WF2czTKdh9Kc69U2M1BJrRoMdQUCgo9GadCMW1BRNrqiaZDdSwXvbri3cGhzLc8VVGjGTuMzL1g",
  "key28": "5dhbuvascBHBSo2wWhwx75Mj2BferBNJtAKRDvewRYDdGbKwSWGhZPwaj7UvR6pckLLuGLEXjNCbu3dYYMjcD4f7",
  "key29": "51uGm598HxrxHj2QCoEsf5s6pVPiqsYPEK1fxgcE2CBDYHfaZTEnGgbwKjJZ1BGCjbHgWGj3q1ydNphhGwEUbDtv",
  "key30": "3NtPvVRM1J1vMe5xac1uJfHjbE8Fi2qyKZHLzvkvMPciPt15zZ3XPq77NkEkCYrMhUcFpMfPQ7yeDms5i4F9A33x",
  "key31": "5X31Sgtw5HB2q3QCtMy6rJ29FenZt8m6FX4xpmLuMSJhDPTmfM9CGBdnnbaXyHyMH6cLufTWh7k2kyEtRboWjr4D",
  "key32": "oonpC1ZQSEY6E7f1qNurWnXT1WbFuVL3Rh69n3vaktHgDMGr1Hts7Htqy8BU21GtxdtGXEJDmY4nYnFysfk6XTx",
  "key33": "5yyUWDNM1LvCy65gC5xFZdsJ3p1n2aDshTAKeUG1wfZpzNKdAqVU625jEhg9MY1VeF6WhjNvwTvD7HD2VVYssKpw",
  "key34": "5eW9Kf6yzpYAv6MzndkSTMpNwRbNHM6PtKMWkJbi5NCPVfRVcE2r9mEF5RdRn4XCDu37DvpZn3pVZCMRZdicHoaa",
  "key35": "64Qdp8mZWTvz45J7vyrashDp7vrr8MCunYD9NnyqbeLntg2M9528eFGnghEJ3qE4WRFscHT8bicVwQMZFTwty1vA",
  "key36": "62avjn7zVD4tGoXmtudXCXnyDujLqqyVLdijji6aNgqGYyTxFbxaJiY9yDrXs5qEH6uCsZG3iAHqVfSoNgjarb87",
  "key37": "2ZBo1yU5vtXQfXYwXsfCnSERbjPukpkLMtBZJEzgZLyqzySzaM1RVPg8RwFxCykUBAbqNuYoujpkcjUfMYyKFJSr",
  "key38": "2sN21WWoc1D6vbqigR6wGJ1rPuFsMZRuipxZjdqngjttHKYy4ESDCN6xskTm2Nxp2oALybTWiosEEivB5REjWyBn",
  "key39": "3pZx3hNRB6YkownLbGATrSWTW7nXAHvpSwuTBrN7fV8Dm63mYCygHQif9qk8VwxYRAMvWrCApQE8wkrDpQtbW5sx",
  "key40": "5MobRcjCpDEH6pirXwXEmEv5qsejahfqmc8f7A3CFuuTVh7kuzEB59ifcaNLtQqdJBL1AvEtZMwCmiP81dfKmjHP",
  "key41": "2jHzW1dmiuimPkDwYoNxtCUeu42SCJ4W3we9iCvsJ6xRJ83uCmzBz2ck4hSYp4SXaDWWeNxpsb1hXuU33TRcP9vz",
  "key42": "5m9kLDouz1bJrDkm66FUq4toURE9aePZwBvTUTmWE645f37v6pYbG3Ao5Xsd4nHxJ51YDtS5UXYjfqK5KwbR28Bn",
  "key43": "4VUzC5AckoHsVCNZy82BUPm2Ebymy79RrEJrEaXbsaTyLMh677Ykk2oDKmnRmT3XDJAooo6ffswDQKaFeCQ8cBw3"
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
