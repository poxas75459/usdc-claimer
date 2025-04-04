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
    "577aZ2mdGdCqePtSzSguDPdSqk9jDrstXF9wippQhoogfaD2Btwrg8PaY6w2jP2GpedrFTUaZKywNdFzprcX76tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PBeufJJZH4KqwfKPwHdhtFeC3b59Ve4RaPx4jd6iXpTu5r2wWuYzGAJ9D72Md9nJq5Ek8Sv6rpKtj8uuyWqj7yn",
  "key1": "5jmyHY4WiL8wxL8TPikW6LXtVqymsVtVtes2WbDtKUE1vfn975F5bWSTFYdgfQXM5Fea9TBKEV1dcdmr73yad4DA",
  "key2": "4JjCBMYAmjsujfTVpiTiY9zZZys1sTi1Qy41FmxZv9MiKC8Zr1MVfzyLc2doiAmnoF9dubVxJWLb3JKSbqqFQStc",
  "key3": "2MR1pxMyL1FK72Wb1hp7AQTToxB8362hvete2A235nPH2ciCDyb68vh8CevwjsebWftoV4ujbsjgLzmaato1hoZe",
  "key4": "2RHq2WsmrUmgvsHdPn9xHNduK4SCZXGjTrefJAcNzsNCDMvwrvL1B8Q2zLCHw5nPcKNVdFUbpgH47FhznDLgMLUk",
  "key5": "3iBx6emC1iWrKpDZXaCxASyxrEpqiiZBNnxmB8rs1aZrL4B8Cem2AbdXGqQzTiv6rxmF7ELGB1xLcj66V8r82SSi",
  "key6": "4DykW4zgFCBCtWvGVbmTBFRkRGsUpexxKQNxDYE4w7uNHyTkzHKqT7beiWCrK8QkvUukNVtiCYGhTmtmoBDGXxgt",
  "key7": "3a1EibDmVeEi4JvzA8h6koEw2N98tZ8v8A7CCtD9gV7zygXikAkjYRfgDuPnxUHrvb5E8hn5gQ9gEZ4meN5HSvEa",
  "key8": "2FhsafYhCaY6j93rJk36WYNWsjTHkuFwnKn5pqRQSovSfvbbTNPzq6HAT4q1WEpxaYRpVLethrDVPify8XGiUfZB",
  "key9": "2DwqpFv8pgQEc41bL7AQ1ZepGAyd3ZCwjTeRhrqZPyGnrVVfn1BvrFUpfKvvh4Mjp9a4PcFAuFFJCuRi8yps4J5g",
  "key10": "5G1TmaXPeez7rrcsnfe6ZWSpYdMx7fzkNU97Kc9ZjTARwEyWaVYHhcwd57GnE4FM12Jv8CqDtNBu1XL8fjMccuRy",
  "key11": "4YaM1BwQapmqVZkokV523TGNHnA3fFUGZBe1X5f4nnw3UNhpg9V8KVrFWrHMcn8ttSvD9wSVJ5FmSQMf1L9eV9w1",
  "key12": "4nNBfSkuFxoQNzR7HxVV8b1iGzftXh2cVfAHvkFq6Q9R51YYazHMWPDJH1JZjBvGVk5G4yjjXFMR4HfvaPTT6jNK",
  "key13": "5ee7HVLFa7he8o5yzBXCJMY6rgHv1nhpfqwqCSGJYBzDFyeHqAztf63akM3FwzdY5HUQuKvt5XeCh5hYL8xdmaqE",
  "key14": "55KQyAqvezTrmco9vLKBg4XCNqBBEjfciwj2EPz9WMRwKg3xannYbKZC2rnZMuZ77xgADWXRBVwkjq9id81J7j2W",
  "key15": "4LsR9KnNSMFnJAe9GFcBaB7tQxiVWiDdnc2rPpFG4AmZthm7mBMnNvxjdqFneSKou2RAq2pyw2WHGWEqsk77PfUd",
  "key16": "3i1GXcLwb8QT23gv112oBA38ft86wC3oVmxDm3PDpJJJKnRHYma2D65ks133R1HCpLh5WivcJbLCmvq4xYL7agMV",
  "key17": "3Qt3pKi7qZJU9nt2sRvbcU2YFcGvTGLsDJzp6tt4JMbi9oGZNVCzX4ngceJXKXkkFeev1i6qR5wqsqK23RLNgSBE",
  "key18": "5jGkCAK69BczYQRK3VCpDbsu4HP862FZubEu666WuFLo7gxy6eurLsY4hkEbHuaEBk7CpXRSbZDKnTENmLiRwDjT",
  "key19": "5WsvMEXVgLbXwKiQq6g4yhLGU9Et9JpUPfmiyFyWbpoPDmpPwPbcyVbfFXT5aFLmTjDynEpsJcGehKSe2r1v3vyE",
  "key20": "3NKTGr3thLQmQQYXP4UnK2WXQj1LQTNTAzXtEv63qqhPgPxrcAJ3GhztX2R8LnM441KePGfp4BqxqSVUMNngQEp",
  "key21": "4jZuLeyD5iNC2HGjrF6eaVUX2aXxAXsRWHYrpq8GgmZcjnkbviLsZmTjuzq2FfAHS7xzNN6ndKyredWd7DViZnPo",
  "key22": "478E27opq3i3aQgC3DPBxdtuY3R86AZFsF721raZpKVSvZ4N4arMdcEio5Kt2veVedZVqegWhZcdNeBva7HrDdg5",
  "key23": "C8TPpetg7xxVWmvbhA3UbuUjtu7UKYuFj6Sqm5f747ZJP9YjMqUgwEkgnQnsgym4e8McoTq8UTEbg7DTNrenTyW",
  "key24": "4TobDQHq4EzywV8Qjc7XRLiKu2fWRBokXianixAcXxRSpELWP39b9k7Cq8pzQaVMgLfpRJctrC4A5bQ7bfugA8nB",
  "key25": "2g2zz7gBdpWgmjHPB1mVNok4uhgvdeqjkn1u1u1YxbWSrGKbvtwYzELSGYzm7YKuBh5xopSWCj1LDTDRr73Kej7T",
  "key26": "2gsBzk3eMBqZKbstAt1SFTgbpHVbfCZyrDbg5YFZaZYUGkVdc9QZezR5r9L3bx2BipyCUehfJTKjziSoStvdYFRG",
  "key27": "gM5kBQKfU8fGdcVkNAYe8tFhZxBaDvYZAgnSoHzPe2nMKvWETR2eMeDRaFbq6DbRAZmf2XEtRRhwRmd572gaw6g",
  "key28": "42JAV9SUVJVzvfY7onHBjCSBPbGQeJBo4Dn98UwMRJi4EphTz9VPBJJ5UdEG4sD56iKWF7PZf95qMmrniTRzS3k4",
  "key29": "2WqRd4qrhokpYJRbwaQiVefEfgQVB9nisfBn7CqnC55CPtvw9pD2TZomipffkuuLUuBYHfF3tkqAxHfEem1eehXr",
  "key30": "5NoUbRZEJ6uvGbJv1DcNp1MRnLZuaRr3zz2SfZC1K2zPUw4MqkWPVVVCXNk4Z11CatMUXhrsKhTfaiMboqRtFoVh",
  "key31": "NH9sF8s2icyJvWtMKwSb9aMbeCo1oQxRVKXoDzMBQCow7MC76e4EpUuTLmhxRgAfJaX24CRNcwd1NtehwmJ1fw1",
  "key32": "QeuxxyEDE4aNnxNUjfUDxKrVWBamAuWQHbv6qrbHcJoqV4JR9iSuSByUc1AcpNukHExhJrNsbpXbQJK73vei5x4",
  "key33": "5wws76rdQrKePS9KboxUUYQLK5mTUqyrTXgYk6XaWHvn4Q7HwP45bEoAcnN76aWFwt2TZRTir3LGnicjgWqXDLs3",
  "key34": "nLbi8RsSXxatNRNp7JtP9zRRxNKPW7XmHzAojo2GMgS23WrupShA99vZwxF4wKfojPuf3HiseSVoUs6XhGyPGX6",
  "key35": "FL7oBNANzRZEYMhf5T8JLwdHYVTV17SYs5yGvC4vyM6Hrg1nygkpJSwoNWQbkwfzmWbckPPsr3uLc52zm3bASQL",
  "key36": "4Eo7Wdc3swVU8e9FA3W444fr7ndWn7SS54MYypfUoXPVA1AvvZ29Mk1TRad1WP2xr9ToLgv9GAZZrRMSn1GJmTiX",
  "key37": "5CLXPA9iTK3PRP7dL5SK8iZMpekhBGQTHsVpPJ5s4QnowgMBhvZNgufk72tAxckmznQU3UCfydq6jFGro4TuNaAN",
  "key38": "5ifTAgMFsxkU7H8GHVcJ3QJ19ktUGiduKvoputpKhAKXmm6BNfUmjnecUzvadhceszXPywHtHv9nnmkhE9e1Koug",
  "key39": "3nuZkLdDcXzWgZME5UPC7vfg5yJiZSWotJdTGLE5WgSCCPMNYeqnPX4pqMi7WgvEGyBxhHsguHBJMHEgXUMge2RB",
  "key40": "532N7BqKJJmo5xyKzLyK2cabjTpwZuV3aTDSyjBNvdUFb5mhJZ9jMXfF2Hrps2eYpWSB7xm1qLz5iS9DgMDeNNeN",
  "key41": "2AbspphgC7aY51frNfcG1EADj77chbwPyJgTHRFNbKhK18DnwaK8zBVFnpzyTx5KhTHGnY6TdFAraRHXNkHCEtgJ",
  "key42": "37dYihqg5VJKfjwLP8RB16kKsS3QUfbZiQXXNCtwq7CmvyTKwGebi9CDhMcEWriyE3oK5oi41sPcNwm3U2DUuG14",
  "key43": "47WQhC9fWzDprtTXCHV93u7piPV9h5ATJhTdze7EtVkYKBZa948WPBbPvKA4911h9m28EH5y8C8RnhXRZoR6UtyQ",
  "key44": "5FHgmD9HQZkmBykmiteFE1qFuQ3JY1LSLbK1Y3U4GeKjEUwwke8wQHAPWRxnY65f1MgCXJFHYn4KLjvQFBQ2MzVb",
  "key45": "5NkpSumRd3USWK1PHnQJJMZoAnuTeCdVmD67FmS1NCyBwmuqfGn5gB6TCQJvSEDdfqt6B6cWURGSn7FnVuh3QsAt",
  "key46": "5BLrDhsX3QzKNTgzuw7RDjB4QMSsMTFiKYgrfMBwBhfb1754QEYueTcr9iU9xFCv5UZV1BzA2ocTffekpra7u5aQ"
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
