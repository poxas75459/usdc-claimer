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
    "23cDi8JwsrZyiKbLudVigAHnufkZcU5VxMkNTuH2n5xhUScTxrJbzismCGgmiR2DcdZR53xQZrKRRsQRaTxaFdvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZMHU3Z3WbGzXvdbZ5aviUQ94U9tFHExNEB97kgS5V1UqMXDPwLds6VYEopa7yJMF54wxMuDzfzaz5F9XPEcoqok",
  "key1": "DPdVEUJ1RQMmHkdZbnAdUaZvtddAEkztRnSLv5bTPjFbZXBM3vK6HkhhVQ6qXFfmet6jqAEDtG7Vq8FKASVJ9dt",
  "key2": "46oF9kGVAUBWcPEHvk4NiWckRa1j1bUT1999gk1bCwNZtLfjsxgnNnHuPhWPyqk3ofAsMkmtbC8v41E3xy3Syrgu",
  "key3": "5wKNBb1CeHnG2JPcc4We7e5N13tA4yAPmWYZ8moKNiDXuNzHoyg7mgJcwFkiUQ2M2foLzijvoNA59zoEWvmdPr5",
  "key4": "4p2PuZmUUYwFY34FHHW8oYvwcEDjaY3eemGkHGPbowX5JYs2CHiWBV58Jhfgjf4aTa1Xj1gyJx3d6j2dSESAjsv7",
  "key5": "56zfcyo1dCn8uAser6dKu5ude3X2XQV4X3nVey1VZkYt1c7U9RnLe4zKvsewq3eD1p2A1ph59W35n86KcXBREq1o",
  "key6": "5Auir3pEyw4p5W2wiM9Vi3RxDRkejFsxz2P2cux3KNPTQjXEQoQhamv6Gv2h2xGYwPEwaeVWbRMQX9xgeHFpxf4h",
  "key7": "5crh4TodDDn86YMFRvn189rDGqtuo1SaXC3gCdmvMWkyd6xaqetjzGBtLVwW26Joz2BiUqMp3hX9eRMpCdDdHtSh",
  "key8": "2QiqjnhfkuxEvQ8rr9cJqgTqXfsQFEYbeAnv54LjcqnWJWdUcNqSScQ4SA7e3eFwgAaRscmL4FWTfsHebsSvKWGv",
  "key9": "5BT6KHzgG37Q1B14Ve8s6eeRGDVRNxad5zMFTXRrDhvj7NjbcrEhHRqQBMvEBPWfzj9fXwRRBCETrRihjpcMbSfb",
  "key10": "5SMERiyqwcjTnu8X3ns9avcB5c6dp9R9s1uReLKeBF7FgwAf54uvtztxBUU4cWRF31sLL9AXVbStp4kZByuWsYxK",
  "key11": "75YhJM2mLhyXV2Cy4eVqJXqSvdQWMr3wJd1L1HDiD3xcjbVbFK37vaBA4DAh9FPFSW19LEsfgQDRYAwt4RW2NZ5",
  "key12": "bCm4reRoduvaf3EFctPFZDpAueumQxyxDD3rNiotWtNJkqnqY4wcHDVR4BGQnqWCFyDZzUyj9gEcvKoj9F6B29S",
  "key13": "52vFXioZLRXQiUmV5r2EKWc55L3QJuMocE37A7RCvZGo3kG41qgNsfF3kHktpMALAwuVb3jvQ65uuub8J9wDbhGo",
  "key14": "jFskFGxyMB7YhA6qJYxEBYNgzfuhNTEitfrDkmQxyrxmYELXddevbn7aiHUoSRaJuWzw4ngBoANEYe5DpEovKvL",
  "key15": "5P3CDQZTKiY3fTryeCFMxMRaukGkVRUbq6ks5eHiE8wBHARbzuUiWwmZr1PtTwZin8yCBjfAcv5qLBRKGgzzB9hA",
  "key16": "NeeJfv6u1hBFESAEDjqMKvEBuvymZe1e9TEouXWUJD9stZp5MxKt76WA16FgyLMXN9kSau3RkNShiC6yRNn5zM8",
  "key17": "3wAemqDShgkryX6wDrcoPviGE41BtrW3xs1PkG9VN3L3h6BDkTFRqGv81TAMMzW4R8yDt6TFVy6hcjTz2ofC8Cyd",
  "key18": "2CYKwqpGZ1f7dZoKiYhecrReREEQPwbyD4voLkEprGLpmmGW3PnJ3iaHUGZdeuBqndG62pam7pNkgzv3w5bEDZXP",
  "key19": "SdpkKP933ttxPkUhKuY1gUTy3L5RYJhbvionGN2HNBaNzMwHv1J7Zd3x4sqW7TEk3y6w1TdGZqHSiJzj3Ve2deK",
  "key20": "3szeDmWZooNrSzHVUWuZ9i5Qd3Vgrzqg6nKxjwtdaPow9KVR24AjPrXzkR7R5TkMNquwuMbsw96FmZx7VQ3zCTiq",
  "key21": "5WvWeQr3ymb82jp4nhy7dEAyE69YvDnEmwBGJgCJbAWFSXPJDa5gACe2pqmUuUxpcFTknGttJNFLTeTqQUuvNddW",
  "key22": "5hqxvGLKF91Ye4usXtfyP8C9aZng4yZ6XNo2dpGbAdy3ubzKEP1CqKLDYDZ3jsD3H3dK69BK4AGhLagcN2PzENCs",
  "key23": "4VfzqLJQAjyPxCCq4ccNS7z4figLwagReXmExuzb8GLQGdjLccuicPxxhuVYHHT2swSK2GDUjZ1MwfZ1Jf1TiJGZ",
  "key24": "4u2L9wLvBQrLD7nUsEdSjY5sLevLp3pSDs5ZdVzuNVm4WrTdbAkEdZFGosjD8Nwcx2KcAhd2hCYiBumk1YRBw5HS",
  "key25": "3CWra1c4WGeCXxigi8P8ykWsP4eD4wNrw12Wwcr5XcxDuNpsdMsch7nPZPkCUhW7xorSRT2sMi6uAS4vcZo3nCpZ",
  "key26": "3ESd56TNqpbxECuUcEyN7j355JdsTzXz3qLWaBoqkuny1wjopu3wHAkkA93mh1DssP3gKmPKnFqf5HCgySAE6W2v",
  "key27": "2KueSk91gwvvyjfer4oYwH4q1MB3puvmvxG6hEPdMTo31evopRHUMJZvxNFp5jcwN9jD3RUqGKnxdg12sdDsRmot",
  "key28": "3G7qGdz2TL3GgiXLmUDijuiSiJbnFLrBdgFg4fAsphz5vYohxS3MNYmp4b8A5aFAK3BdimnzPhwbG9g3nVxrVn5r",
  "key29": "41sePdRzp3cmqWf1viLhLbULvCqAGwEQwrvMMfmZu7hjTfeE36DSTgyaYcHCEqd5XcM9aTn7pzDtBdeG3RTCoixC",
  "key30": "4WNGJrS3LyEnB5zwTNnn85n5nsQzUY3JyUx9YD4vTaqYKEM5XZkdaDvsSNYvs7PKP9hCnHgPCjr3oBbfu1zf9uLL",
  "key31": "4VzqMhmMVJvQYRPZB8AMMakqjXSXVVkDuZGsLsmwkpYuUbok8ayxFRgCq6YJjGeyxNn4QySieNnnhi9c2uC31tAb",
  "key32": "5rswHtFU9h1XyUZ7jgbj4TEb8o9GA6m71FPEqDa7aWm3SYpPGezh6L9PHu3vsg8X1KTxbsdA49m1BUQd31tPwSLR",
  "key33": "4tYFbzBeMfVgufJjp3y1McTtV373fKbEFRDXtMv5vQTiB7zfP1TL6vNHkp4pLjp6hJ3XCYezfw2SKc4p58qK46Vk",
  "key34": "4Wu3zCu6Ls8aAc67ZtVdVQQv4djVQiYiK2m12HxwhEQDNgevS85BNfQVSK5GecNrABbEngjfjFKbkPFZRGdcJqQ",
  "key35": "3tsXNguJTRdGaxDupn6Hk45UwpunK3r4g6H4ghuCrApYWAYJgA8pJvdJWmZMqvPGMWhmq2wrzF4v34D2TvKNYJsr",
  "key36": "5wKp1M9bZDGMMWb5nfPMWBvPD1d5pRP7kRGAMy15yid3ZyJwktNQxiumt6WatvQn7gDS92cknJ7tt5o9XiUwUZKU",
  "key37": "5xttG2pn7dK3iyv4RCqoMZWrKTL9TQBMHU3vLxY6XP6xsFqumjkjWVfm9cWHqKNNPLmmTCLiprx87o8p8gDLwyBY",
  "key38": "28MYvtX3LaPfGqnrtTTwT2UipwqoMq9qeEhMDdyQTZZ1xoPtfZzxGvba4rEHXEkfGuEH37X9hkA6DizRdj6Au6pj",
  "key39": "5D7q5CRJrVGz4G17r43xhbC94A4YcG3EYJLLSGNsiba7oVbQJapbXD7z88b2pkhb5yy5zBzwWYpEwWJU1N2KQMQA",
  "key40": "76Smnhqn9v6GUs75GUaEtvACUeNcGjiQwBaCH2nxprC97wWqsm6z5PjHA3Sb71yFS2Crdn5MZtj1TrJbdrdvdp3",
  "key41": "2ctNgEjmGiBu1dTTUuPeeCmYeuLgUfFVJpbpGwg2xpDvSk9hmamNPuPUtK8HonbfPcrNfd62pRFoEahsftPHZCBD",
  "key42": "bRG6L58u4wMnXeSJNk7UVi6w2TQbPSvEn2HZvcBd1KHduL9AUqerJ1C8QNB4TgYw6fpnZYdXaST1bWcPatYRCtv"
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
