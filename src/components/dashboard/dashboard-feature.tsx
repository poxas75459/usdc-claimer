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
    "2xniqD4Lw54rc7woE89rxvdyw3Tpngrq2RPRg2sMAF8aSJt1UL3kR3BHCeJXeG9SSxcW1GDhWvJLjtA3tSxmR5tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AfJsc2WeeHKhHkJLbowGPbuMuKBVnPErND8k2SCgjUhh1nxe5T6Xy9e8P2ECsttmjwrvHdWy6GNmSiWGPp5idLo",
  "key1": "65io65VNqgpkJjZTaTUCEmPcAr6PPemtZVjgVEXE1p4RnupNFE7dcRioNbg4oLSprHYcz296gUGNGWwY9bMyknL8",
  "key2": "2cs9LvfaHfspHbqx9xx7TVZ9aMSrTQcKzzQ6eQPVngfMkpKmAdUD76vtBf5WHJcREfxwgRwLWuVAr22FZy3g3jE6",
  "key3": "62Y1WJiQQywY4HTm2GL3NFMJ3X5kmQcJzNrzxADM9u1uVB8az5RZbWzGg18AafkqL4dDeRtgCCnGMxehrmMtWCmj",
  "key4": "4c9BNiCXgJEiqjPbXQncPgUySbUbeCrG8DDeey5oNkScv9H8gpvFSK6AFg9iLxGQWQESyUdbfbBu81GwJVQvb1p",
  "key5": "3e4NT3mEs55jevRbdyBtX7G83p461GvMs2FUBTMk99Z1QZq2j9wj7VCBsqjN2k1KRLRowndf69VHiaGQsdWZ1jk9",
  "key6": "JVGR8wwG9t179PpubjYQUZ8ij6fycZMkwxKxobmYfZBPabS6Lk2TgZpdNRbHFRYneYoZHfTGvZqckah6m1dzk9K",
  "key7": "x8RdRimodKy2JqmrAd52X7sDKcHezHotczHtDJeTEkfgdeFhivpB4cn4Sx1iHQdNy1EVgkGZLkRnECKARiQjmE6",
  "key8": "1SKNvtbGu6nXAt4qUBVDivZsibgZFYfJ6Vop97MtwvkwW5U25XQubsirE8K4SJwU4jkFsuNKsEeTvbFgsJBD9y",
  "key9": "4hNomxAbDSBc7wyAYdNyViPP9eguX7tWgtB4cBUN28cBX7hWiECNEQs72qq1zD17dhHLdYbeRA19K1ZTkuQJMKDD",
  "key10": "3NgB7MPpiJDNFaKfgtALMaFWM2WfE1BTLDMqngR6AaJPH8ss6wPXGB8vFaLYotqMXRAcFi79eytid8fKbZFWvgJk",
  "key11": "2nasgXTNsZvYFQTCaUAYxJCMRUPCMVd6nWPiGWNee3nTBCfCsyKJdLGyU5bnFQEL8qYbGg7XkKm1vz6b6VKspMst",
  "key12": "3zpbGohJo6zGCYs9G18QzLvZaCu1tsqPCe8PCdkzeYhbCnuc9HJ7LgEB1LM3kaNR4YYGka1tsktbbLB619Nt7k2N",
  "key13": "3bRz9HDGYcuW6gWpRTfEvWh5hPTAFhxny5Ato2WYbpU7faW1LN8w46WiarrWU4cmBXnzMuZVQzXm9JwHVwZ1qtuY",
  "key14": "dgkMTLM84qFkipkx1NEFcLbGakUR1vMZWWzB8bGBzbYteypYuXRLoTnrRtX7wa1gzaDPzF1wizSrZCmXGiJHpbA",
  "key15": "4VE98kJx4WXue6dmKJdJYXnecXMsbiGoDtL4s3piNV827hF1h9J1FVkjNGnpNaNPE94KrSZYF9F4tf62ynu6cczD",
  "key16": "5kg5MB4xZzxe9qRYEHrcb24gVuRZt5u3nq3EP2NMCn2YQ3Jd2GjXgcuUDXC7Xmv2Diskjst9SsX8XzJ6jwuXxxrW",
  "key17": "GbtBes1j1hZswVerfFFeiJJVo2X8KeFD52jaPbuZsx33xvzeRogXXFVZnZ4tGBn3LpGJJkx1tVwAX7BRZ5dJ6M2",
  "key18": "FibqoWzd6yk7u31Gb5Xd5LXCm9kpugYmFLNy9sUZ5peaqJTGX9xkerc58naTgh7ZwsD227fro3gUuASD9BTerT2",
  "key19": "2MtsE5NdipCLfjQk1K7ogAhmwNCsqUg2EKwivrfbVZeGMH8uGGMekQhXkFxXS3x245nbkE9MZpsr4Gz1e6EoDjze",
  "key20": "5H6RGgHn7wa6Kn2rz6iGRzc2vwVcu8VcGbYsRUHZjRATYsLbJEHdFFK2NACdvF2j7xMVC1YaJLfchRsGeB1jPf3w",
  "key21": "3uKngTj3foiZzPesvaRG7qPHMFGoc2r8XvxvKRmhFWU8sgJKGyZiFhF5FYuu4kD4mA8Gmefyc2gTKeg8JLYss9CL",
  "key22": "5ChyksF84SEiYPvRuTh26CYLHPggj1FThHRcpE2RqsVsNgT2Lb3odjiuFen9ZPVVo7qWfnRfvcFT8HDV672qmzeh",
  "key23": "YGm99tvsv7mpQmU5g9XbbXA446468vC8B5Np9GbZdDoWLLuWKVXV5E4M6CYuyP8HLyDK7SGm2P8yDFbdZet7rnh",
  "key24": "aCgpKxnSxd7ANFMhwr2S2ZR15jb193uvDsvrvZupCMvKCoJqazFTGL9W7Wdc7Q36KaXsh7cBKaQD6fLgXZfb5G7",
  "key25": "3ZuTzTh1KSj3mFsEWUAxrRbFT9PVdhZhX3FcMk6S2REdjgbgf5p9rd8S4NQek4u5woBDyp7XJuoZ3xuX9qVb1Ed2",
  "key26": "aDv4qgzfx8uHMKcCtRLK5U6qmtPkf9wpB7mkMXpf9yu7WxMt21JbofnJ4HAXoxwozUpLDo37uCJyLsoKDhLA18g",
  "key27": "4VpBYce2NscSnUfgicXyEJo4A5qr8HrCqTEXGNxMCRPwup9Svd2smxBK6fgDnbmKGHJV34AJDtz2EqfMYWMmqxDA",
  "key28": "5RvupLU1sjtPuv4DChEg4xzQ9GtVW2xedEUDsw1Y5JFL3AYumwj42mCKfhVALVuvCy7GuvLr3p5Jdis4Xzdc6jYf",
  "key29": "3ZWFmtpHHUuag7gT7PEWzoZtCGBf9ZjQPsEW8o4yemy3bg482P1q1vF3mA8szEUBRj4gqXfUVtZswqRUjiEC9qFq",
  "key30": "3Bv2spzqm1gNeAoqbg3nXrSmPJUAwby2t3AenxNwLz1jpKgcF6TTjMEUJqNubLGV4kHcPBALqCFwjCuV4vDXmT2Z",
  "key31": "2CnnyScp47RDB4uZcNmin2djkAC2Nv71sEg77wxSe3eYTVxSxmuhVKGvnDYiueTayXvX98thE17VxAMPkDSoLLaB",
  "key32": "3z7izYXCFYDPuHdZp75fawScdXz9ed83h9SobsYERG8H65hSupKNw12HkY61DfGpBAEFs6mXH57dGzZx1ry6reEf",
  "key33": "wxJSWU7xBf2AqJjFLJRLM6WUdnPFS1AQHFbvoSzvbEoc5VnKzz88tCG8FfmjTHE1mX7HSBt8Bn29rE8pMrkfFRX",
  "key34": "4wAqrEoLqThrHy8TXTGAqqxfkGuWMUK4tsMT5KKiY8ha2fGiHjzKREmyKNostPr1gBbM6JAGZQ8EfvxrgzEqncf9",
  "key35": "5V9F2Sdwj3QU7QCNgKqNW9ASpiMH8vqeA1FF4Jw2DrQDuJkjHdm9HTb8pw5CtGpGa3BdD6CLAfzM8ry5BinzDfnG",
  "key36": "4YeiwJuiNfDQGQ5MxvVBXavZWwSSALAvkQ7Y3jLqaFsqsyzjiyigngsVTCwdALoLZB2gkV6ERkjdSuXvxGY6NNFy",
  "key37": "32oVrqivtETTv3YvpnVicrzyiE1dZTC9373hYBpfKEPKfwnwZbDcqZRs5Z1TCg4jEGxw3vxQwVBCRQ64phgvkXNS",
  "key38": "vQfSeDMtCR1zsTL8AtqMRV5A5wEkLPi7hEc9hMouT5hNU12zhN2pSMhewxUk21PFCD99HnYGGgc1FhQihSPD3YU"
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
