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
    "29T6akQGarorpNh23Bnz8p1CkZueUVoR6LaNEv4MhSJVBbAcUqjp2kuPeK1ehCYe12sc3gtSz6WYJ8DZ4g3TQTEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TpwRZKzMudeQJFzNmherUqtP38KVyp5C9Vs33rgRQTAJVhQfaaMag1dagzBs25Ead6HeMVjpUBqQw1t1AUYJH66",
  "key1": "3D6ABfKN1kaPHKTvJvoTMWVJd7s9LvEcxmNbV8cPo1YdLNdkF5KA9SfBeaS4XguyBB2wnifjwTpZRb2PaLTKvbsd",
  "key2": "4am3okVYzeK7BcgfKj977XBtpRMPn2JnLzjn1oHFxoRunJ2KGHexp87BTrBsT8VZ8wAVLhhBifrQa5rSx1Pkk16i",
  "key3": "3PVzMJ3VcbU8bf6kXNWAJZgf9Vp5agujHXG1YG9Aj42eARb6CGg9ct9vkFvjhXgnKEaYLhpezNK3KgBzswDg9k5U",
  "key4": "S6CeekzqKZeiNm3gy1ivBitEejp5YSm6DRdS7H1w2D8ppPZZabsY9tgKAHg2RD2uGNfwPkWA6f4xTjvksDWW2Ci",
  "key5": "23Ef6Awc67ZTgCSxj8Q2cH7bv3rPCgPqCVmBM5nbN2X7EkBfM5525Wr6AbePj2KTCEEp1wqDBivUabPTN5NR1qt1",
  "key6": "5rkKaDo3bACuRz79cxxy2gvBMpujEuazmJZxnirzDW1RaF4RZX7Y66xff8Vmw2rWhUv6WfsKASt28TmZKxvcjqzQ",
  "key7": "4zmpQfPnCbWLisgXkvSBHwtN3hcnHfD8KhkKUAzV9XA6b5ckcSB8ND9U8gS8MBAJyTo3DqigTibMLpv8djUPqi41",
  "key8": "4dWKYPbcKbnMzNrMPDMhvbLCkXQ5bMnuY2kKzL1KKCEaxQm7yELFTJ5GcpqzstUaAHjCUAcruDB2Wx3zRueYNDbG",
  "key9": "Sc5yXFtg67EHcUumsFnJ61AvrtoP36SNFzEs8GD7eymgxzdnCfLxwFvgsRxFiQnLKJ3szmRB597KobgG15hEB9n",
  "key10": "z2ptAjq47j8vyP1Dho7fvjx21i5hEgFM15y6mu5cdBKozGgUaXgHAtPdBvsLNpijhXySCwozdvyZueB43mfS3Yp",
  "key11": "2SbcBCBwT5i9K5mT8V7NevDppCZhTto4J6kfTDsG9hoqfwoeLFdkEdyBADW1iYKHUug47w7T4yj9nsxrZ1ifofgy",
  "key12": "36mRDAVxKpeABfDmGhFtenV7quRggHxEXJn9wC5WaewRktvtPbox7h9ZGfQsRsY4H8wVhKDyQYUhfn6j1GVCUcL4",
  "key13": "3JKUY6JZBiCDXxtkvsBhutoyyUzFKa4syFDiPCJy5gvob4hfBRQ4oEDm4WovYPte32q8eMPGvBDM9toW7BEeYcY5",
  "key14": "26pr9DeQuD16LjmKm7pujs4ViB8Kar2kvEc79bMufUhxDtUBXC8Hf3K7wxmXbDCbe8hxehRuWYUEraCxnfusm8rx",
  "key15": "wMJigZXihN2VKrGFujr7pNWhGrAi739PoC9ssJCX4bxXKaxg8fc9Fe2VSFL8YzC33TRqsAeNYtrKtR9Jkkwtigk",
  "key16": "3nMAF19v5HYfoKijp7AZ3yZxkBQvUyEuXHFuvcsMghVqzEv9tVbKyrjP2iTeuqXe2paiJnHHY9wHGdhKG9NRJaWj",
  "key17": "5V7dWj1QVdpJtyByS2DAFyNgKXfpT5ZJP4vbYcTypesAXBeWikWRBvw21k6BpmQJ14WTmG8rqVeNmgWP5FevxF7o",
  "key18": "2hJTwPNYoZyWkk3GmN6CC6GSxCBVyq14pPCUNZ7va7kgQuyZMSZesfCZCNTQiBFkr1nWkikFBBm1rzNrE7RCJuR6",
  "key19": "4eKwjxXegqBxHxuLJWGGSmHzGmQwqN7u6DshPGFgnQDrbfHeFosfmLukxoLvQGMyHHcTyqXzJGFdU7AiFmFzUaEH",
  "key20": "497NF3se64iExDq3RVuPwDip7ddtSMgwBL33ZxYQyQFXQs9gVwJbtXUxYWVpuCBpfkDypPpJp8ubTSrxWV9S6PNp",
  "key21": "Unn71DBB3GPNcb6ipuJV2LzKSn9nBqJpy2VwwM3JPggdao4NAZbQ47sETFpZDEwunqZg2kLwJY8HpXwxedUVchk",
  "key22": "2gXMjQGXeSiHnBwaAw94Mgq7ByrdBCHV28xQUpPyQpdjTjzfFpssTPCtFn6DC5xmcGdYV5GNjfChqmfGWyTEVkXw",
  "key23": "WdyANKNQKsr7vnfj3bXSLRz46WYRqCbj8XTt9z8GXpAyWNgY4fobAhWW3vS4YJnddg3SnqZSCJ3S8tj1tx2HUfH",
  "key24": "2dAn3Nev5e4RtMFghy14qYDxFXMHgZRA6nWxGF8iENEgVabsmfxxsbxtjkVTzzCmHFQRGfukruYUTVwtJie9prew",
  "key25": "4gH4VoWtwXQgsR1MwyA4wj19AuN1mXc2quBuPh79LMZdv8wo8HajxDTHPsg3iMtQ7pQE5qVRBH3UQpunYSeqM6jH",
  "key26": "5zewt9UCK9VStPhYp2QFsmtKK5NuS7cjPbgEY6t9c5uvDy9HUbaDpJXsnHDtenANaEShL9YQZA9erZoGgPG2fvES",
  "key27": "58Nv5MmwWGJ3gfPgfiZcU2V5ziojJjmGeL2BaW2hwcA7cDLWhBBREiJzowG622dqkx78eVoHT1TwtbUpdEUFhdqY",
  "key28": "3dcFkwehaPgEg8EQ4qMn46Eou3RvqocLcQ5Wmk1HVFDvJxvkm6gTdt3pfmbJWWgEgzPZhD4NevzpLbSHtTaaoVEr",
  "key29": "zhtgZmXPEdpWPh3QFByNk3uSigvuq3m94LoYf7w27z1Y3DqB9J5GPFV99Q8cranhBiUoWJih8KtHcFmjHsBYeP4",
  "key30": "5uYXJ7xNKAMABib4t2usCKuKaf7jXfPTA2AyJULX7F1QMpR1HeX8SHXjyzdwcckGZAygEYfubiW1B9uYqySpYGJP",
  "key31": "4hkQkHRSwq9ynL7aQAvGJt6hJPQPVx4KNicBAL7DQxMav4p7m84nnDmH6XUufzVzS3ZCAQNS7nxgCMMF58r1cjhj",
  "key32": "4DLZJ7wvzDxqMD99dCSYGRNWt3h6MC4HzbfS8oasSxcbQFtC95hDBfsVvYZ6gppbF7XgbenbN62GtMqz3FUYJPdW",
  "key33": "53AZTVmqSFsvsArFwzKm76nuty1gFLNNiadf2mL7Wf6Dm3CzEqjj2qgwdYf4iUhu1NBq5QiLumYucsPB8EoKTpwt",
  "key34": "2J9RkjPqXyXFTSp9qK9S3RrBvALChnCvS7YmRhce2kFgwU6KE5tReD8KyDygw1sECdJ6GnUMYgU4hig5Q1RDLmb1",
  "key35": "uxkf66QpJ55uApyp233MTJrLdUt7BaUfXqLp4Ui3uvhRMPWecMXkJuvTc1kzm9Rc9g1GKTi1jcYCkRhG7ftU1Rx",
  "key36": "7uWqhsty2Cb8T5aRgT3oWwaRFGZW5YoLfvNA7EeMhvr1a1Mis5iYheXHs1ZUzw8fBxRhHCKxoQHe5qAxoemkTZx",
  "key37": "5XffbtZ6KaHQQBvvvrJ8Vd9b79bGXciLZrj5Wwtxz2yqCFPUfvevNvdQv78z53YjDinbKap4jqvBtXQygPFkCPc5",
  "key38": "2f6UKTroExVTcrK4rhJKbtrBASULcbFh3BnKyZHXhb7VpiRPY7ppzN58HK9mAtKJ91yY2FDHpQQ3fmBkFx7n6e1L",
  "key39": "4scmnJLHEmsMV7J5JXQfrZ8Di8Bc3xYT6ixGd5ttKkFUZ2PiX3kBcuY15LPAGwuSd46s53sU7ebb9wiTiG3uEwST",
  "key40": "3bMb4ThZ5yaCnrfvPVJmtpyfYsXmA2tn42t6NhSov6ynCshQknbrUs2Cc9AkCNTzr5dRzuM7S2SYTNfVZamErqHP",
  "key41": "4GSENZp2WDBa1AKKTa5mPE6wueV7U7idokcnozZbRVHrHsPf6urdJ5VnEaLg1kLYu4gsGANBfa2vX5ni4umwfkzr",
  "key42": "Qeda3T7Yhu1iucVrUucSP2J92RkNJDQwnqZJKqwv864GsHXVTP3LSt38Kj7GyYBeHFDD8YYPd2fZp3cAX7z4uYM",
  "key43": "9P85NRXQH78qaQC1LaDFfih1VCBzPsKDgNQJzoGTjZUwppqGBVA7kWXiV3b87ZKRtPariJ8ipgKmqM5t4Q1MfPn",
  "key44": "3XFeb6cRy3mxAF51pAwnMY2EMcPuN5TT8ek1U42X1j7Y7CmPZhEfPzhn4u3xRbiopUBvuHxga7czJNFW1QErjifC",
  "key45": "4ZZWvHFW56fE7UQFoqBRmMU13UrgDsmdEiCf71aWpEMWoEBbUxjg5YvoBaUAhtiavHemj8wPCkbJT2CcfesnQpHp",
  "key46": "2VYYNHpLnyiNJ95iPk6721w2SdwHKtz1GUBJ48oiq8MH7uWiWsyxSUX3Nu1X3iB68QB728xPcQNcHitmRDSkDPWs",
  "key47": "TNcAGAxYCLDk4gmU86GtUd1wws8cGRGRjuGCACsRPKpuUb7V1hkpKhjB4QuxAwTUHvwWkiAADJH3K76deNeXm8G"
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
