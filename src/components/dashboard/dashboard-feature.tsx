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
    "2Xo2VBdAPCxTh2r5Ww7cEFJd2xvRcu31WwbzAVZAXqvoCCMhAJMrwhx9BPBjvjycLmbhYzaqtnbSGi1G64JY8Jqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56UMnp9deTMzod13tXNTsigKYuT2Xdy77Xp56a8r3x9d1AYvMWY38xivt1iMueur1gDwsbnpQNbKiyDtrcSYBiT3",
  "key1": "5rYeWXxsh6XYkdcq4gGGoSC8kbPUS9CRo19r1yw9uAcVHyeFEEVxFudHXqH81XYzqNv1wXE8nAVwMaNp7wy2JARY",
  "key2": "3HoiRkXdHyYaeJsvDjEU9Xetqvf9V8nVmheRUwbjSbb49ZY5BwKwZUNNgx68Dj9g5XwTBd5eH7zUtts9hJBzwu37",
  "key3": "5xiFRcbhEhpwt14uTnPYHN2jHyNuLTpwuwhwxfiBFsvpME1Uy4rzyhiRrp9LfxwS3AVpN4s3hJfkq1hxZ8KVXXkf",
  "key4": "Abgfbn3uPWvZ5PdSnmGDuVsPx96bxaRnkTgsX5BUPQ1TTE97qbz7xanhb7TrHxmmLhSbEFjMkevxtvS5NgXxCgd",
  "key5": "bwAqwNktxegRaRVGW1W5NXS9u7cWLW9Ff9PBExnTmf2zRGknA8xq7umwjTwBaQKUVBULVP6ijDPpJak1tXg13nD",
  "key6": "J2CjrVinAAdHRQjUuzi7iGKbS4eFj2z2G46RrWSmbzXgLNzDyjkhxAkdV17enDrwukQ8DyrUNV6YgyNjfN8CLTF",
  "key7": "2VkLtXPmZ2vgy5gQAAxyp8GonwjGVQyh71s3rQ1jsSbydkSrsFAeCe2Ck3eqNCBKquzwcbjaxkrsxmxczxurU9GM",
  "key8": "5AgspheC9VvpbCaKDvbtygpkiEBTvVWPvV8yWjDngLYP9vXLwMfoc172adzeHEqPFYhWuGmHTRBci64iYcS6a9Fs",
  "key9": "37axZwWQsmL5xiNnjP2ULdKZjzbSngvB3aP869BfkV6i5MAeCC8bZ3FC8H3KqsJ1PgJ4nEd3Hu7nNJBHA88AkroD",
  "key10": "22bm4cRT3bufpW6cAsJaBBDkYrw3RMNG495NtEzqSKiXWqu9tL6kFqJCfrc14bhU6PnJFKgUPspSg5fnHVKiTPcX",
  "key11": "3CV4FBfnKVnJtfJaphdYheFbzJs1JyDF4ooirLCeemqm7GGVhDJEpnQ4dSEBgP5xLfNN5EoiySBn3nBpQKo9PeBx",
  "key12": "m64SZ6kGN4DNeJckjrAycW5KSUH6nWua2Yj4N43V8Jaoi2G2Zp9CK7GMfiHX1mfevWXFQ26ns93DiVQbqc4mABS",
  "key13": "4ftLHYDWh4JvxqysBiFXMytXpBeZ81EChn5bZS5XMExxmEHcpVZxNLNCwXnhbR8EaMmoYfQ4dt8wVLytoDjaHu6b",
  "key14": "2rYot2EvBLJwMBgpK4DbFkDrQL31tsjNpARRiLfBdykqzQBdApJYb7TYfQzSEAuSqiHoezVsRegqn1dFuJ3BqgWk",
  "key15": "2CZV9GLHynKYxddY7Ma8UP2PPhGWqcxo3u82MhixHXbsCwkK5228R7FXLwaVHwELDu8PvaiggtmMzyMQcd9em53H",
  "key16": "4FKH8wfH5fzLok4WrwegaAbCBKXz64VYGBQrHSnox6oShUwJy6YCx8ebNyhS7M4JEa8dKCZW4M6rNF8w34goEZhy",
  "key17": "heyMotHeFZMkqEHAknYJ5DFXQaLtX2KdWkNkZoTvAgopMU9kSdsF9ENBCdSszhKsLutZC3C1TPM4tk2yDF1KYon",
  "key18": "5rzEyLaDHfxzmASPaGd6vjrqyLox7duzrhWn34oJzUsyLgqcfBQbjaq3sqDLrrFJ3s7jE5X7Nthf8JPdR4PRDXrd",
  "key19": "6UqiS5FZY9J1ayBGumBVKVsK8v9gihBC6vfssZs4WUpdnQ7QVHNttLKsvaFS66girhe6YyLDLjAg8oa4hHeGpU3",
  "key20": "2qPWhMAtZcuVZKUPidH2pnhqe9AQMc2Yzg3SrxDw8BJSbiYhdukwnuWq2fCgyaYDp81F12hTpM836kX29bAq16w3",
  "key21": "3Pi2TrHb5dV1bBUeUQdG2EJqKuakks1T9rXyXHQXrSLLqT2TkpLcosQuaJ2cFpCwbzsnJJDUQY7uuidNDJBRWadx",
  "key22": "5KuWgGCR6buESWL2B868d8u5wu9tSDrVt8vVLozbhcJbBc7ktNibQJoFuBM54KPTa2DDMuAHgL1d5oPQzKxrP7Vy",
  "key23": "6n2rZuDD1kxZS61xyBy5jMBiLZyiVyMBTQRwPUnPEqmNjoms1WiQE1vxyo2eekDr1kXhREMwZUFTb2g3AK1LS66",
  "key24": "38LKK81AknBpWSjNVGvUmcnbpXQ3asGVixwVZipng4FWc5jR6EJRetwVZVab12GnVhrDfEtbFcY5DBzzSnVwVfd4",
  "key25": "HtHj7jsroGXDEQQjfWrao84FPHJFVd2yqTcLDJHwsHdS41mVyVXupBC7nmGbgRHRP8EwY2zBoZVh8MBRvLV4PC8",
  "key26": "ZXqa3CcdJRRKAmuiGjem1HdYkR8s6txxuzSsJqNwfxVLADLF4Z4qVGrFRkhQDGXt4EWh8XU539khdmLjLenW7iE",
  "key27": "3ChEjmooYMc4YeTsxDUj68GSY8vcwVNvGkuaVRTpauSmaZtbFmgqH15YRUrmizJKysQQRvfP9BNa5gjZjvw3Nkxr",
  "key28": "43sdsfRnWeSNXzP47mDz56bbjerBtqmE8GDaDN459wVup1iNHGDcLdWAyhNNNoMaC28duFfmZ3X3ugGK5Tqjb1xY",
  "key29": "29GWkuGf6Lx4DAbtVQ2TmRfyWdXVFmjSSYsYYjBwCZFeyUJ9dXAuD3egCqpeYJkR7j7inWbJqjqEfpbyypZuWmD7",
  "key30": "2bAn2hHuvcgB5i4x1BMpD5zrMaJqgCqZB87f3n6FrFd58LBMJtCVVdot1uciKw9uTSrowighxVBToufXZudmt5KX",
  "key31": "2tghV8dLtrhiPs44JLXZkiHqTRLaR4TyLzo1Nvd5cND85QDVscmueWLkYmcukjVkJB7sQHw3rqomEUMLQjyjv4sh",
  "key32": "25uUGLRPYfsy4Zps4Nz5hCY8auac83VdjNc25PYEAMQyT5G348Gv1WTGDWptbUzzxiN2KqWcU4JM3RBTX29EXJhi",
  "key33": "4JrWhgxz22AfHAy9GxjFKFehWWPqquJxtd5wknjzbQs94DVsyLP36ME3xt9QtRgc2aJc198mnRtF1tPZWsJ2ogW3"
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
