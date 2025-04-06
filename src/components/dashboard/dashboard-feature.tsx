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
    "4pxmDv5fqcvqDXsWuW6QpNQg8xdKXWEYbgPLBmkynej1EKtCFkDygwAZT9swsDxLvoK99552YBiGNYsqpzdLHrYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xo9Vdae18i35t5x2oExiKiTJuG6kokYtG2x5uQrBaUraaqVgQx54kMxBrnpkn3NpuMJCioQdTD5sjkCcLBZ3VMN",
  "key1": "677imjEQ5P5jMCJUgwMXFMmftaraSBDV2DTa8gW8PmprM2USDs42qZQgC6z7mHjgMCscRd1i7tZBGrQzN9wYSPh4",
  "key2": "2GriBWFghHUnDG7JEBw1yEWNY98xJ37UDdG4wnYDGokGC11vdxWbMauCyV3ubVWpPWergqsQWa2iHkPbdjvMjHw4",
  "key3": "28arNVmhBxMefWX68p4KitJUuwybYpvX5v1kzKxibYCbasyCYBBEnWPTdcSDe8fMjkrNtr7MHci6EKY2vknXmPHY",
  "key4": "4NypbKibW5T1Atmd9cvt31QdgYtLrNFUk8SR39Zcn1gDZaNSWyeCL3rK18tZzqudpmNiTZXDjqN2fZHehazcyUhw",
  "key5": "5r92W1wHqQnV4BvjiruoALTE83jrYimYjmPb8ToaMgfoAicTWxsYZABKvTkBKGFjStzxjniJKzXxmZfgvAJeoqQ1",
  "key6": "5aRsP5dABD853McWTnnJMbQ9ejTMdtS334S4xGiMaKUoY8WbACj9wiiA4Kz3dk669WepufzsuG1fzhJQ5CpQp2cA",
  "key7": "53xiu1wejGxEiFHAWqQPLHHNZWkFiv9N2orEgEvWUdKwKPLajHjwoXk2QNdHcdZjZVRf1x4mubHf3f8Gx2qLWbD1",
  "key8": "2a3Q7r5NAuTX71MG4pdFsGnMmUtibiYXLMHcnkEzeka8kxFXhV2yAkJpjGwnm4oQhYLy8ySiLYNh6wwYFHsG8Mgf",
  "key9": "5RNsNYzAbsPnesfkTjbXAmnsKDxLb2iGsqvwdGiVAz792cfuMmYrPWcJJRo9ZyrqWcwjUmKhn5FjoQycBsG4Uc1F",
  "key10": "2NC59gZc5RBBNamEqVjaaJmdZC2RK2QhJPG3vmqzv2t3vhXuL6UWKfXYXTLV6dJS1JjKpw2DfpyNcicuhsjeDtyL",
  "key11": "2gZoxdikV6J9TUydLwGS5yX6mMyJyhfTx4qRL7CskcgcEHfXjKvS3zSzr7Gei5z6xE4nvXpuEZp7o9E8TXt6U7D3",
  "key12": "vfCjcDazTbCkr7cnCd71FRxDBVe3hitEctgDFNAJLECgsFQaQqmKKtXniA5D5p9NeNQ2tm8kKAqgWt6tur8dvR8",
  "key13": "4p28xZLiR3Bjsc5PwPGkXSwi5xyuH9Wvq6Z4tk1hVkc3qUnVeDDCfZNzfvqX5jjf4X7QwQd725QmbAdrZxdCbU9T",
  "key14": "4BftgpPpxyyvLr1Drdujr5U7UYwbMrAL2j2rt5ZZSLYz96qpbGS18kRUxa99647JgoU6m47a64gqbs47GLvnFN9f",
  "key15": "4pB81RtZi6P28BK6DR3ArM8XUNpHcQgU6hNCt2ueNCbf6mCrXUbMQSjNnkGMSGBE1TA4JWKkpQMXeYQ8PPtqZ8Vc",
  "key16": "2YKbfUUdv4XhGu2rQcB2LEP1KXWLQH5ZGfZx4iWCtPruVP2EiPkYCgCqptTvg6f6Ah2NKa7wfePgcK6UwFmwNdYH",
  "key17": "4C9DiAtWG1puQEaQpx5HqHkM1BLK8C3BwY8faWL27UwehPRqjBXpE6VGabMpSuYW54Q1PJmvbfeSMTrptRJZcyPX",
  "key18": "38GvKWuG9ikY4GnXXGtcyFmuKPjMQQcensR8ZuVcA6DKfpYt4EyhAaq5ZEiMPsLqViC9dGCWJ7xZfxamAhYSWfHD",
  "key19": "pr3R5qJLLHV55yudAWjTt6GCHKGFXxF2NJfM8FbMSntWY8kH7giyLNAfofidYgNH3gKKgpibJjaDyauh5ZBctJY",
  "key20": "Gx2wrW75eDaEPwJnSzVqapDjfpxVkouZcWiq4sXfjidWN1ouYJ2Zwg1fiRLqRytvgLCdC8EXB3ZCTMV1bZUYekq",
  "key21": "2fmj6VRTRJoHpYhr6QtgfkZ4cXfoAnMmywWut3DnQJvctqR7L7pGXyKaS4tSMuwVYvYLSikvfCCP2ZD4MHUPTsc7",
  "key22": "WsSV9xBCNJEsoDSUvnLNqNyXh2yoaaP6AFENnrt5GfGFTLphNgQiPAJkJnRGAsX3qBPzCDTc8iMpJWqbxd5tWPv",
  "key23": "2SGiSw4JeTr43DVjrJ5vtHgmzZmG8Ac7JdJ3Ehm9ecpb5L7KkzkhskX3rgFymEx3JiJYwT4VpbMuzvn4R4j6mNVa",
  "key24": "MkXem7qmvLt2PdZZBESGhcgPPBBZbCpPBYm2NkJhTsLDHGauZQKrCHTnc6YeKdAdoaRJi8pkRLyLLADgp6D1s6Y",
  "key25": "ghjV6zyKUsa4b4EYrbUYGErbT2sVwRMSSWbjQ9q8fw9xD1fAdWtdBRmdzTRXTKb55Jr31YPeAJVEpacUGF4GaAo",
  "key26": "NHGG7qoXdBJXsh7v1zZciULg3WDPAz6VDdEzFocCnikT3hiGNdoWEjRXANCtXr5osVmNN7bmF981cg28MgmpvYL",
  "key27": "2ZxPS5uKgg8xAAeuxZr8CYdR3dqHcTiudqi3MXWYwjiG41UEvKy1qfW9T3qamHo4h627JtGuhye71QniQN8hv9tf",
  "key28": "oLVvJ8ZY1hnbP1CMQNEQxFRsnxHf3iiBNYZeqabnSBe4CmsNvuoVsyiaW1VAYPDSuWLrFjrDUSdKtG1UoMPDJhA",
  "key29": "2gyS42e8Pt5t9CmPHNJ9JidGY4VaBPq1bEZQEdrohQVjr4tQ6EV4sZGrNBKFUQfvZRzLLRTVfobQK3rirs1MvaiT",
  "key30": "5V94seK5M6pL8QX7giCQ7mR4Tb7oSTvn3URgp1MKbhnSBEWobc4iiAkh4BjkvBTgyvFvphfcfDT5LLQh7KgQq1rP",
  "key31": "4CTwwTP83bp4KuY3hMYDsXJEfxqidPgRYsGVEoBgyjbbf1644RF96qx2XGQdaBB23HBbXAg6z3gWviGAYtRUPtER",
  "key32": "3E9yAjW7gqpdd3XG5W1snHr9nHqAtv9vfLn7Np4p8ds8sBVfAvtGVqhPco3skRoPkGidTo98TMstYr4dmCjwtsza",
  "key33": "5Cn16TCjR4mw1a1Z4i4Gc9VEodNHo9C9bZqHVpdJVBrJDpn8Kwwu5JQ9wqbXrJQp7Aw9RCKvi41XpQUrfaWsgYDH",
  "key34": "4Pz81yxbQfN8U65KHeXcXXuiwuzYCcqJ5kDPiHwtdbQn83EWHa3zVNeDbDVLVMQQNFGeKbnoHYrLNKRHNrRfFPnT",
  "key35": "TR2g6riV4yQ2Uf8cahKemiM7AfiSdAHuB3zqsXhSgZB9KLfcRUftWqBcN2EymRavkk4SnZ8BEhTofN9h3HdnR34",
  "key36": "4pMeDqdnLbLf7FVMbmcTKYK1imuri7CtCP7nSqD742MuTyXTWt66QnB9X8qpFhJupqvoWZjpNCMPxuMXRgCtCqfM",
  "key37": "2EJgxpThokKsYdwFEJx4wwZ6bSL3TciipS7CSz6fxTbSqbTEDSuUwbESzU179Cwjh5qi3wMrxTY8iq21PCzAnzxe",
  "key38": "1e5zrvC8VKHuocQtaW8vM9yGAoScZkQ7xmL8sBDtfgNURV3rZG9AKwC8pDfkd3KsWyBxnQRfVPi9u5TiDZKmxZN",
  "key39": "5uSDzMYDqWypBkJbTT3nwEfFvDwq7tynzrNeNLGGrkBvZAhaNvVyLHoqVmwavvBsyv73Wxr5Rfri8KtLY1crENX5",
  "key40": "2b3PD4GiR7acc3MxQw7C7QNJ6DQSq26nRGyWxXMBvKXkTm6TwDGjTtJrmHnbXo3ioSkRspukMK3RtfCczNkmSfAT",
  "key41": "2Es1c3vc1u8vM1Y8y2o3G1v46J2pDydFwvwiCdKi7Pi3576t4tDaLdYBrStrCveBvkA1GRw2ZdqK6a7R2M7ePDQo",
  "key42": "3FwGZBhJhaYfoBahcdMvngUg8b9WtAXSXqeji4VBuQ6iyVKdBAPQvYxQ4G1kKomPBpeD8uZvFsfwE6tNmsX356hF",
  "key43": "3N3nccaZ4HqUffvN5Ciwmk61kTk5couNvwQr4z25cx2gFx23a6PMPRePioX68HWcYpD5PZv3PLn6nA3eTA251Tjg",
  "key44": "i7Ec7WP6y8r5qkkpDJ3QUbnmJaXNJaV4j6JmFny7M4Eg9tCDG6XYUzevP28Zybrv4kE4ebTpEZxK7XSmuhRtD7e",
  "key45": "4HckUcmBfrNzuX4u2ov3Qw8uNrNHkESpq8p2LiybRy96HY4pz5z1d3dqAEUupE77sVFMkqDj1MNfb5sgzi5jFBwy",
  "key46": "43oAyDo3mvvp3NfWzXzmUXqKKSfzjYZESFsj9aqbTc7wyDEQmKmAeTAgWXNLfZKtsK6WiUi9s2qVemsS2cwxBRt3",
  "key47": "58o8b1VVbT8VbUT3MFzTS8Wv4ZAFQorBgppyv9qSMhjk75dJdS5jhqtUMvq566TXjp5UJfUx4hJV5P48ic5E9SdG",
  "key48": "zVEnxdTkhPU64qvz8cJG1NbBvmrNTmaeDWAB2tDTRGET1MyLUPzrcQoXAYk7GwejHcyyXTAfqyUSzbu8T5p9MBB",
  "key49": "cj34tJhPwkhAE5tyR3j4sX6xydJNyBQqzpoHzyam9uqAEfxZrPdp2M1LDeqjr8TMoJWQ6pnGP9MH9NdQG3v6xZE"
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
