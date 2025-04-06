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
    "5yHSgyp4twseXwpUJGDek9XcR8UVqgameiC5KgiTAscptJKCfWkKxikzwcYPixfbMQp3RM6rmXtwG47SWd1sHTqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tWdJcnCw2P457sJJKqz97gsESa5wsC4p8Wq349ANMqUcxYb8RnZqrfVGAsD8Mz3E3RAeoJqDkYB2qjNNE6ozaBr",
  "key1": "4pngGUKTaKoxCU6nWshxtZPawrgTjGNh7qNKaGUaCwgJQwV9SoVi8tPT9PscBHLggJaZ1uy63moDJEynEmMr32LB",
  "key2": "5NfmyZBJgna8jnfUBod5z48onpajhLeyEtbmkj6SHri361HXJyt1F3zhxHHPu3TX11EFrED5tDa4bPnwY9FPreZ6",
  "key3": "4vJoSY8Zm5UTyy44QkRwfN53Xp2JuHNQKrayEuHKcNhSiX9g7WFYsj2iFsRGyGr87dZMoc3GAdTgwcVvmbhG1og",
  "key4": "29QQeKXChK6gnwGjWGFkyWXSRjxpkpY2B7cZFsrYpKFPTzmn2mRRdo5DyynebHAL7EnrCKnoU4xVTVde9XDTXAvJ",
  "key5": "ifLrh9anN71xZPHVFc6V3vsWcKNQf6VqLS5Ct17zkex7qqqTiLYrdXEEcpBkKZvShhRde5jzt74wxv93dbj3nyo",
  "key6": "2rBud2PHfkSQp31A93c8PGMnfxdFn8Fs51rzMG1NUdxB2HncM6ABvwDAqu3GSNL2vm3pU8pEiZzGryq2DyQyuHqe",
  "key7": "3Rst1Kc62UxDRjR6UVqAVrWVSer4SbzDoWiMCzB8yiV95kjDP8JZC7Zk4rKCY1t7QHyGZgsFo1cF9fWZPhBTND6i",
  "key8": "4pC13P2B4vZkyhZQhePBKZZM8skrSrJ5Twrk8gF2r7rivXFj6jYoZiexbEnRV4FphVVGEKkFuqPAMJ42VckNYyzs",
  "key9": "ekEZZTHwQ6rnR27H8oEpNXqP15CpPM8FvNLb9JEVkv95wPt3hBf8QohTsT2gBsbZUJR133iK5R74Rv9mXbsmdE3",
  "key10": "2bnZrs8W4ThBVjNtxoJa8QuLvDZMj9dSGYMWeveT5ThQ7pWk9DXMJZYt6WMooi3Hrxc5EahbqnDNKTvnFsD8SaWu",
  "key11": "3Gn6RRCX72WHhdWajz6SvjZ4PS9FiGgVYVYrs84LhyEtUHmJjF78XitauNB8aiFtkmPDFq6qxRXocypJYzeQdHbo",
  "key12": "Tyy8uMa8frQY1vwe4WRzPfhPu6N9bJ3CxZxd3M4STXVtP6UgicL14piVE1WkmLNSGDnd7VAGwyXuicn5ds1NjVv",
  "key13": "3SUVEs27JzZHrDWu4tjcL9C4PBr4YJCCBqYhWSMVsCe5Euq4KkKt1SHXSoVWxAzctx1xVfvpd2gVY41GPVtDxFBz",
  "key14": "uiaycKEZzTYoBRb6zsofyPzm9E6UmgdyMK4vxLWik3BziK2VeH74NHvjtGBYwzGAQzW9kjoXHjcXKFAMVBtn8GK",
  "key15": "4Ps37Ht1zRE2Hq8R7dmXcn1LAtR4oJaCvoGs8cfiwyUZNaJnFxfp7djEgnPFEAd5BxzbunGPHAhHPTTV5SqE223K",
  "key16": "28DAHhZ7JRCZFLnDXZhoMnNYnHDc4ofXJ7RcCqU58Spt8fvXgcaNtXESMnxY8MHcuSeMy18yLcyEYvLv1FivV6JE",
  "key17": "31FAFX7WMkkjM1A56GgkPRUMFdeuHwh7Gf32qr9TAwgHYDAe9ZmifezrPsxsfKZ3wzppxEc32TLg3Cm6ez42KX7u",
  "key18": "2hK6eeTqg8rsNRhXEoWnhzd5bZmkEW64iUN1y88HrYqtxLM2ubWqJqHyo7G7h7BVez1VhH93Bh6P5Bq89g75PLVc",
  "key19": "52jG8RxWXJfp1YSFNyaXBLk8QZGSXVhxsqtwS5qFQrFkiWzjSavcxVKRKV16jnPUBuZMom2Fpcth4rarEe49uqAK",
  "key20": "41YStS9SeGvzFUZpvWtVdwBDdXgUm29CCdubeTAzRzEYrhMwQR97rjthsTEC6rgHs7EnqB4dG6UCJc3Q46h73Jjn",
  "key21": "2PiUqgUu1ZnSrrwDLZzsx8Rmq3fs3KdyccUBYpwbgAwKPzfBYTDjLM33EK2SMBTTsTZ9idVUrTMGztsR1re3Fxp1",
  "key22": "5YEQToFqXKetkQKYikQEWmsqpFhxbHiW6JJ3P4hptbr8WCWTBKgLZRLrinqJNDkoTeY7Fwjn9ZLZe66joZ54VemE",
  "key23": "54V5QUDPRTh3PknFQietb1ZCerUAM6c4TGDyVcEVPi574pMJscMiVytit9WHu8Hcqm3QxRP5XQQ47MgqM14Mmbxh",
  "key24": "4uo63NeL9f7zBCRjHygxY576x3UzsJ1dWJGji29Ed9aXxGTHSfwwN2AhAHiv5GaXsYFTA1KBu1SYXUEibL5aGnRc",
  "key25": "Hat6PGsoRzwd2Cs5HNQo68dpQ1x1hgkJdWTc9Fj1tPWXvGHfBbPMi7wThLys82BrHL75EZCjqKDyjqmtfLWzxYa",
  "key26": "57553VY3VrYh1gwSUx2ryQVrVviKmDv4jCDCZoDLEsMh45XkZ2ocx3kazE6MpQqNyiBDytSeRyMjtyCNHoX9tktU",
  "key27": "4oRdhqmwDhQDKiSqkXm2T2kNiNqDRFvyCgajHkzbY6pRQHsgKsktk2pQ2tvEZgEfvUg23nx6MJ8GxdT38Uo4bfkM",
  "key28": "5uL3H2KdrYLsZHXnbYH4KU6yao2PEH8phZGKBcaUoXdBQvVvtZ6779NzUraqiiw6rUD9JmJ9bVvB8CpsAoRxR1jQ",
  "key29": "3Pg8ju2AgePXQjMBCEcrscYmaFk4cjCsha3G7Uow1QkdaMLLsWo8VgYp1EMvFN4vohtXbipvbAKPEXPDehUA8KVz",
  "key30": "3VRzLLk17QXyqeqLq7ZziLkk9CxjuqUWjvs9WvJuKgeWk3Ed3azRRdznB9BWyjxPXMZwmoVqA3bjPD2qGiTVb3Up",
  "key31": "3RcVN3A6FLw9H9jSBvs21CXv8WcQmv1DEZg73vXtAjkBorf6B9mB461NDH4zLrb7wRoSZPYeN36vbi37P1A9SViv",
  "key32": "2phuZxXVCYLRgEcZWXXDJSLbtPjQQz7D7FRstpi4EnvSA1DpVW3aupQLtRyzgcP6FJAbQAr1N6QdvybkohzRZiuB",
  "key33": "4aX7FHKtJPLfyDaqXDU5uQ17ZquTkhwA7A7btQJvDAdFZzNCwv2HohBSdrmr5LhWQXaxT4f3oDRJFj4H9oAKaRCQ",
  "key34": "4ofFCGTEcLcRMseCV63fhgKb2kdmBNmyvjGUajL94MA5W5P9xuBMytt7ekCWPCvRa5sENk4QQ9fv38LTeDxsFPg1",
  "key35": "5g8js34dudnVAch2StzH6eRYSWUEibJ2bfFV9QoizXoKDYmvGAKwp5UJfmaAp9JtpYd9WFCPPDNwCvRuYFBUwi7T",
  "key36": "9MNDkTEKNBNzFjh89PZYWgdV64Rp9Aca8sMGBJ9VYgJW2v3eXBYr8kvQxyBVyms8Xas9dYdKkQ86Ba9geVMZt3T",
  "key37": "2njhoZnPZDNJmGnuAnGTb5Johu7UZCTA6LsvUm5qDs9SvTbH7GMU1kw7Ngq3TYBXZZHzx4wrSbmf7u43U98uUfzc",
  "key38": "5FcWJ3x1ezQEf5gtWjY8yrXDNAkwK1ri4WRZ9zcP4VN68bggE1bQyDEhid72R8zWitwvPzciaoAgzhEkxwYpUxkM",
  "key39": "8Af16U34vfzkw3tPhR4QDfvAFQtQv1iwfk82gQ3doVx6577x7BTh75AGYL4StKDj9X4oM9JnzJQomZu3Fm24fvX",
  "key40": "4Td3zDeetDcNcC75VnqfLvxjkYWneB6ozybFMZzeb3VrA9t6SrPsUUHWxiKM1VqWp822cwyhUHEe74svNUjcqzkK",
  "key41": "NNSUHZYgJpJXTNmmzCQtDiH1jEtmn6eiMZ2Q5GuGtZqZbPMsQ78FHwD37SgKNa4JZ6UkDJKq8LgwBYo9544K4Du",
  "key42": "3X9PFZYUvsYnFZdvMonuqb4qdhKcRM93gTHoA5XosB9ynxu9ZHegGBKkkGDvMPernMWoAxjCKd4sg7qyCLeZmypv",
  "key43": "5pY1a6gjykmB93De6KJFGij4bRqu884e9G9uVn4XFTQgtmUjgJBY8aEBUxXySjon2d29EiR6AsvmLaay5pMqdKac",
  "key44": "4zzYpxFfPYjrunrUBuQrQw2FSe6d6xAe3S1yBDEW3Hinoj6BDP5PNCrsQg2yRqGL1E8ea67kJVscr24gSMbKh31V",
  "key45": "Gg5pbQ2hTcTp3CTdq4njaTxCb8u3h9wJ2X1qXL5wB2GiUsvzZTEnoQgFF3ZKXSoBpknfdQBJQziZ8EWMDZo97EY",
  "key46": "2JCmD4on1BesYovcy6iXVVUKxyM5KjpebJ9YifBor9GAx3N5pz2xZcSU8k5JYgQr1xYBdE378hGUCDUTrrG6FAMZ",
  "key47": "4qB2uQxkUyz1UWLYtvrqSUhigWEGj6xfLhXZaG3CuxH9aSRwCTXBoys7uyuQRF5jrsT1nWC1PtPb3edbn4KANDMo",
  "key48": "kQ3mFGUtbmyQZ2gtkSTZwufpGS3qXf6JvHMdVhGTN7ME3AzeBZYQL3QPxfJk1aPg2Bh8kw4pDgquJukPtf7WEp1",
  "key49": "55pJc1TpMQyBcp1175FwvjVJimmdXsMUjyWSi1HcqVGK4CDxTSCZZp8hrHteMfJGCtZePadVYBekntem5DXubdsg"
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
