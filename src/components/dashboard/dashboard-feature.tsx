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
    "3HC3LqinhhSsgU8Xi3Jkp14GoYd8x9X1yEgUoPaBGmkLaXzSCAyJiKaKd4G4jdeQHFWBPHFA4rcyz89qwsXoisBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66d41dA89atYPsBxRHPPZdzgAmPSBXMQerb2T8RVXffmKcGWdmnrkpxbTcYmi6rJSEdqwQzj1gsC6eKSYHtYcDyz",
  "key1": "5BBgp4g4QmjRGibNSApfjC1VABVPmxSEhLiJRSi77z74SLpxhsnCj6N9Z93Mm1DKGRwbzbGDhfZwMgHj9jXJpC9d",
  "key2": "3Y9mFe4jbbysP4NNQkLkP12y6UcoPS62Dt2fEPxUQEeubVqvsPL1vsdKziR29Y8LWjBwZZHxkpG1xQNg858G7giW",
  "key3": "2jrfBTUof7A3RNTFhFuwXZuJhW8UhtKiC8haFxDb8aXjw3ciFNCHV8bWo7DusSgf8Ri4w9rgemmzEg2wghMMtnpN",
  "key4": "4yyotDZuHoUBvZVjFFzdMowQWU5vpcEDxhysMofw3CQGYGG9XzugjEnfc9woVjPU7gh1TwoFDxNNPNgyLbQSSR7d",
  "key5": "39PTrXLf65T4ob2q3kDvndrXAs58erWwP7Qhx2WYMC7kzgfHF9qwes2wkhrruB3fK3AeQRWVYqAQQrz4D2MaP61C",
  "key6": "2p4b2hzPw917Xrn8JsU4QwQ51A8eaM1tqHGDSTSGFLizRQK6UdDWxxgde8b2oHHQmrx7Wakm4Y68KGjkjwu6gtMg",
  "key7": "PQzzLWoKQpjvz6u6b9FvYA11aQ7Ay3636b2niYCujuicths4UBaxuBFN7phvF1mCG7AEwcsXxDTdETVG19BdWz5",
  "key8": "4R8H9BTn9ExTmnxfeWxcSAV8iiY432beg5sDLYwXA4nZRbt64vM47muQBNGJuSLaJSLR36A9aeG8gUJhnYYGZnrd",
  "key9": "4i6kSmixCLDggH99WAz8MBjdjUaZ6yh5Zx6hRhK4BVEj4TonU4zGMn8ht7yPmruX6YwEJCJdKGMtMUdbvhwvC6HK",
  "key10": "3eC9uTqNUh8QYPhUdG4dM7gvU1iMoGy5EfqCdYqWoPtV9e1ezcmWuXmoAGVrtygmz6mKhG4VTW85CTzekY9wJZrx",
  "key11": "37gcXLhc7YbSr3rJgnk3vcVxXxZNpXZ3ujvdkHEre5CpLXoojDQTUtaTgLcSfikCprLuddvE7Z2iNmjivBbVqcfc",
  "key12": "2uhCNKUNLJTvF35Gv76oRoC7rvv1GMG4PdCxcmyQbKqr87bWtE3vPFTqZBx7UHz6AoPbjm1L9TowTp4fWfS711Qf",
  "key13": "4LP46mDWAvATrzwqcjPjKwpoSv1j9bNVnNsNYBTLBT4HBTh1Wwyrg1XeBANMqSrigCE7jBQpgKWThpbvn2bbLunj",
  "key14": "2TQc1To3WZHTUFtnMEJMz8Tu6ypk1AP4cx9nS6GN3ZsAcCnuQCjLeMpaLctJwkZw94CmwhvFKskQycSMs9G6Y3Tp",
  "key15": "4kCid9UYzTAfX9sBs3msrZXF4ZqcnTyY6RLX5AchYDrjE27K7dyGkwbdnfSBaL8fFpw5hKp5V2xLj7zZEdown7Ff",
  "key16": "GWXjkjyDdqLZynRyJt9q3V4zmYE5tDoNVaM8FeRkCMiSA9CJzHC17rz4Jo8NymQm1Wxmka4CApac1bZTEs3PguH",
  "key17": "3ixr35icHKgxPD1qo2v6KgQA7c4gAGRyMSkybrHxzNpZ1jydVyVJ1gyHKhMRbMyMJaa4qeedkKVnLiDShAHpuP6f",
  "key18": "2JmG31QC7QjpMoJxJrDGZQRoorHz4xnXjv4QDDoCfeKx1ENjf7ivx4b1pNkjeXQ3BrP2G1oW97bnRLioSTk1SALR",
  "key19": "2TnUuZ2B5TX7vRhZZ7PwBXau9m5LiPVGbKcyZn7BnPmEaGGoQSbtUr3yUCpNVqxKq3FXLde3jqDnUVwMrBe2br5o",
  "key20": "ftVBa86PKdyS3FdDnm3gmFC15bLiL88iwGiC7gmiU1CRx97cybhqgH3dAVgjwVtCHtgiZy8rGUqAJ3JS9Q3FtKB",
  "key21": "5coTSqKoGxqMmeEdGRyxaAasVcAfiAk5Z7V3oqEtpJXYeu2sGkAKZMpvwkKuX9FkdzXqjahy4XJF52ZX9NMM2qo3",
  "key22": "21fYyWk2GqRpe5jaKk8hXVdDZuaKAsnwiDWhajR1DjrEJdNx93yjThKs3mp995MxUBKsuqXo2LMxFxr6XDag9qkc",
  "key23": "5ybFc2zJqxYce4jdTJ59JsW6B2viY9g1K3ZGPNnt98sd9ZqscfCGbQvtb893ZE9zzTigHk3LoT2ZRNGA7YZ76WNA",
  "key24": "5UsTDCk9WxB7qpwwoJyJHvzv7e1B2cuzAEbKL1v79ZoEcSBooXEGFZxfky8VAho85hoe2RpqXdUnR47goQ8UpQmc",
  "key25": "4kGet2CHuKpMpcXWkRQYA6MgGymBuuGFxB8F6QmC1xV7rq1wvoZRy63zCWouG7Sm67xEysemYWdoerdtLRMfcLXd",
  "key26": "3N6j3xESTvok9UEJq5ruQtKjpY7iNDCiNAnL36szZvKYhGq3vBYvYTS7PWTLzTToPm1PgawNjLAkkQ7DorqEjejL",
  "key27": "3HLwuqjPNh9b8ExurrdhVGCbmgkQhwkxkMJc9VtbRa2eBrGFUKj2oWSPMwCdohgQ3RuQEKUTuKepSiFv5Nj4c4vx",
  "key28": "2fA7N5EvXeY7Y7DPMA4gjYTrRV27ipSnzijrdg9EfmmHxG5bDwGvUUDZGYKFxC6FZMwtiPeifo5quurPELbQLsc",
  "key29": "4mrpaaKPk4JijasRrkEjdgfLvU8fvhsNfqkSYqeGB42rZc9hSqhCMhYdAS7woLAysLKbCaL7jiiaxXWNhwtfUrbk",
  "key30": "4jTX4raMCZnWt5P5dre3yPnjHhmEyf4tcPNEmuKGcdM83M9QiJDkgw2KH1u8R1VFAvF4fcngR8CVipvwZrQzfpWm",
  "key31": "24mYBmKkNGTLY8nMVGn5aKSqtoXpBQvGv8fgkCgR2GtmVJK6A9yoNHSdw3rqE2p7HGtcL3UAkrQfVzVafvmztQCj",
  "key32": "3itwtdUdMKg7E2Aiw9BkstE3mSKtCmsVw7rL4c4he35wf3c46iwhNKqhKnZj1ugfAzppbDz9FCzQDuzYKSRVi3ZX",
  "key33": "2isiiHVg8rbMGaf6x1wERnQ3dMeuKo9KeagTYCP1mXbzCpi6stCgPa9H5UNo5oDeLus2Vp4wk2okTNxgxoosRSXw",
  "key34": "5GdVYGwNqoMPqycqA68pAXQ6ThschGnN94XEx1gqPBphMKNtAhDS91cfrbA3LGsvhAjqQKjFY68LAyH2LjbY8tuW",
  "key35": "BzuJcay1XyqxhtjoikUowEN1PgojvPFJmNVnfxMb58N2FwUpF2nogshMX3wd49mwUvFk7ytYRkf2hBdMCyR5HAP",
  "key36": "2do2vTYxQvVAmuGeaFxSJmGidGZ1awxDViWPadiYz5oNANgkPZTeKRtJv6686vwVkJd8LS6AxHUCHP8Mh969yN3G",
  "key37": "5ABA9bdC2ZNnZhHcgTTM7SwgVktk3LTn9eBSz4jvQPtJWcEYrtyVKG5d1XYLea2duRcJ8W6Byp6MopB1JbVtoAU7",
  "key38": "5eVxSbaQmy38nMjvYFM7CWibAQJ3kycmq52XcFiSB8uYUyyo8DoULZst42NzoEc3PbsvXjdXdPhdkwunXTroTCfj",
  "key39": "3pZ1bJ8KzSy6Pmuz1Rcgz1mWgjeCAHs88jZ9pMUGbefw62KaiYpK1VWqnDiQp7T9NSjuDQWciAr3gpzPRsRu1mx2",
  "key40": "65h64q9ThAJh9RifaCibzKaycqeU8gkYxb3UyZ3zhzeN5ytmYFCf2FfYgEfmxnvcfmRppMJ3CsDbvW2MzKyKrqAQ",
  "key41": "4LWkoxLdmRuLsuWhorwdsf2c7d14pbS1thnXq9u7owsJYMdK7g8dyBeqZWsNZLmck46WZo7y1b2S19XxwXUDr1Ra",
  "key42": "4x8a5tFw9k6vM6bC48DDBFTW7qocSGEpbu74Yz3PrKYNngjgMhyirSMtFMNTXprE31XimFmvqMafTB24FKF61iDH",
  "key43": "5G1NCHbDsGR1gYSdJHWMpdSXQ8Gn9gxAuU6JtodfjL7oUnPMD1f3GinknP1fRRqL4PVAt1XMPwickbaVDyJkZqtG",
  "key44": "zJQHHEMrZ8qFUXre2tEr1ou6bKVZhVaPSL2oqo2fmTeTrj18y52D85HUZLz4vvt6otEovFQPamRV4CGLbsX3wmn",
  "key45": "weNBHVLJXAMCTJ5tVKC4g7XwrjhLeyuPgutwxTthdwmaq8uAmzSNnx1mNrST9vvTjwXHZvhjBdpe5ZBppht9TSS"
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
