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
    "DDpvVggKiBxg2RtA71svrMpBVoYNJZ5kdfMuiJhHFmsRKswd92NUEtfPTGW6VsHaqS1vMTnRcEamVmUkVzY5Kkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HrcPapZ2pb8XtgK7up8EubtWc3a5nLfEcViWkqyTDnnL3kp3z7Z3Kt6Wo2LKPL7ahuc513EWNaVqpnkPvnYz8pd",
  "key1": "5uw9TVn8mwEg6GPPJiouxtHBQQUdPfWb4q39jPk11asQkCXoBoWMwjBT84hkBm2ftdKpap2ee265a3eqrfccbWNU",
  "key2": "21dWGoUFXxc5yrpNucGCq7VbDtdoCWnNzJdvoyipngNAM2hT1GVkHDjUfpFqicAcHe1hqg4ZDDxMJBvzoPUt5fAM",
  "key3": "g5W8Z7RxC8pnHE4ZMDdFEXH3QnPiGB9HNABTPkBW6F68rHcY2vNUNZUMqsUgXNiaTXfr5153rxsGDfUBkHjhnGv",
  "key4": "CaiDBuaceZph8A6ZNQiabCzBUtupytXNRuvnepCCbdxXHpU92jsqScFJ1yHXFDVkakW157A1jSnzZfC5r9WGoX5",
  "key5": "67bRyhYYS713brtsxqANfkLWq1fWShtpEYwBFqXexJawp9UvrePdmB8eLMH6rC1jRMGvEwuduBBPke1LV2FPnF5J",
  "key6": "2eDtrnvpizHXUiPMyD3WMu78Q2aZWmtrhJVwQx66mTxdGZP3uDJijKweBZKj5cJgnuDEbFCdT2H92S4vRdJYTdJA",
  "key7": "3qLSwsMZYNkK8GuMb3a4dWtf6XfNJDbzGarM6YurYzJYafwkdNajuxFiUTT65KHsppWub6Yv6whRXoioCGXzVHm6",
  "key8": "4E3yeeNFQohsxUuhY21yac2jfeDmwPMAZQvGb9ciKhY5ibk2WeCHkeFtVfcTVDXr1h24HAW1AW4jTjPad4QiVFeB",
  "key9": "3US2RQ4cp9JVS56gWRK9Tp85isxYZcoLnDdBPtFGmv2qEXJqnBzyCPeEpVwPvg4Q1icTKv2QkhT3eh9sviKeRYRq",
  "key10": "4r2LRvbq4QgqJQta4K2hSMxfxEe4g5qbm3kpDyDdKbYRRTk2t287veLGS9FwGWKkRZ6Sh228mxPeCZuvJzP8czyx",
  "key11": "VYqBmuubhkCPVpPnNwRyXQhT1HrV4q6EKnpv5dQsTkW9gMvR1eMgwpZNZcFVTgpkSZzf8wAD9VBmLVmzAdpW94e",
  "key12": "RXCeMkqb3f26r8s4sKZ6r2GVFVupRGwzcJSeK8UHLW6soDZaRpAdVfptyDcUYopNG95C1qxK8Bjjb3NJZa1Tzmn",
  "key13": "3kmFwo58Fx2vSSuL8PNEtiQRkCEAZZqjxQfoQ6CgakGP5jjs3Q9u2XYiv51QdhBfdPVcExYzJ5N3bHdmyUkEMtL",
  "key14": "2viZxe7NS1HHUfN18AtkkF4KjUfwTwKG6V5zxXL5QPD4XxoVh2Neojgcph5MnDbRCEQjzUoX7gRMZBgLcpy3LcFn",
  "key15": "5wVFjLtTJ8ZMxtEz4EJVzU7gb3bNpvB6n7k8mXKTJbY6j8FPQG7zgucbwrp6Q54qMWndpSo6oLNmbtL8RCkMsXva",
  "key16": "qhhGSEC7zEr8KWA7oyahZME5KxctuYkWNeb3aDySajqtH4HAjSnKCrYAAAzNNvxY5VDts2Frih9eFmaayZqHpM7",
  "key17": "4g2aCrV9QmBKAoKz8Hu5nNKRSwUvQX3aQ1TEPw4qd3zx8qJLymTYZhRQFfTp1y4ARddLB267xkTMKw6umEJ5qZMZ",
  "key18": "4eofyFVKkaPQU4PAktwpc7oNCdS2GGM5EUTgHGhvB4pBzZ4kczsmGnBevcbEjGy3jJdEb2PdxqsLPb1rnfaeJH2o",
  "key19": "5sWTwhF5zWi4aKws16F2VBscBeGwCCSJPAh61K3G5BMnSKrxW7AyRy3qucBXhR4xX5LCornuVULRHSmZ66EJ11tx",
  "key20": "2VytkVW18SBEEfeTaz87cy9Y4QwV6Ucj5fRWdMubcEg8sndy9n4s1VN6EKc2HkR1Nx1xbwgRDchxbtr6ZF9CyVEu",
  "key21": "2JPDivtairbjcTNMoQvGoVqZD3y7uLZKdUTFqFcgxEZVS7Niz4m1t6PPG8PFuQAneGprBdZEes3NUGsDWMARvcEi",
  "key22": "5kJn7h7oYkpHTqhSLdZrAJdrC3XP6hLB3fvD7yhKMBQ1P582a1HbrgJYcFw7HGLfJtfyFcAZTnJF8fHfCUyABYRd",
  "key23": "2Axf11GkSpQGu6HGFGtkpmtBCxezZCQHq8zTbiuzmLgR9FCrYLkRqTU2YBgVxRSYGQ8mM1exr5yeyTBD7SS6iqi3",
  "key24": "4HVJzDX6oaR2iH3PvL2GK2FGume2wWvdcNMqzQZUvJWbgJ8wPZi1Ntr1KAdtkmxECYW7km8RjQcZWo2QT9g4K41G",
  "key25": "3HwtXV3SREtS1VJxCD6oiHpxw3iyfNXGCnPwfsekv3U5vaQb1xgZysxASjQnBGYdTZct5dUW3YMPwY2HGdttGqd1",
  "key26": "3nophx55X94vzonVE2c5zUrpv58N2LqVapcVDQrkGpURLRC7FFrpNrpVwXGYYrzr43CoFoSY3Tz1dCy1QrjKP7q9",
  "key27": "3BKnFwMFJpXyLTidFMhZkXPBiKLZ1GshhR8qCiMx7v4EAbkUwNHWhkEY927sQtZ4w8Ygn99u25tWySBvnx68PrFS",
  "key28": "3mYoKzUVBxuMc85PGSkkZXRJLZDrVBM7z3NHoCBGQhFnkKiSFbFWM8mVRMzKq1LBtPMv6Wo48CbytXfjM1jZWeaB",
  "key29": "67DZuk49By6iejoQg2YHPRJ9Z4oknjfJvDEAmeSbGyfrWfU6yq2zKKNkdTRYf7VkQcBBk5w4XnTfVGyX31Y2CN5M",
  "key30": "2WJUqazkLJ3y5Mx47423DCEurBMBcr6ZVSWkeKwpLtHs5YsSws6x4yWPSiPaxgAgJG6Ki8hrZuyZzvyLiS7jSqRc",
  "key31": "3nzTnV2D7tA6fD51Dm3JFLeL8FKAAqUMhwSDCUsCexWQiDaAF9XZ9weBpSKpfJ54XAwBwxk27sNLz6z8oXFbwGGQ",
  "key32": "YfQGHUoC6SFjyJoasFcyYgPnAKBviLSgSPty7UgbwcvQowkTWBU4tqkqx8aQzRr6c47immXsVGc1TdYwhtKwwgk",
  "key33": "2RErpoPKJnE1n4MbXhGmFr8wVBHfj3tgYRb3915ZQXe2EMFDCdP4mn5JXhnbmm9kzgdc58FD5fauLNSdvr4YYpoV",
  "key34": "3FA7vDGCkH5bm6fvHXjtphaVaPEYjTfENDbFf1LKUDURdGbvAZighyMoUZC5tJbrzfqdQ1e1BvqWvinTuLqxMCNe",
  "key35": "4WBL9b7EM9bAQgbeJZRG7ZKGtvL4iXimKv2fEHdhan8wB8ZECXpD4b7iE61EMPUS9jpQn89RtGCxLFtsD8dv6xX2",
  "key36": "56qSxKKB7SjNgY8pmrH6BtEtoJFDb4yKPNGgJHASxAXb8EUJxxjrEd93TnEnM4HLWmd8ZeuXp5DSDP8Me6VcunJy"
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
