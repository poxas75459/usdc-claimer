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
    "35sq5oNcMXyAbAiTtK5CskvGJE7x8pkhbKVH4BTvY2B912Qo6QYbiicVLZNTzUd97PjGJMG9KdKxVYxbGWTXX7hz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fdHUfp5Q15BzmWv13AsnYpHGVkQCMFb2Bi9UT1m5PgPauyqcNvEx5sQuWosb6R48z1GC4qitBJrSWR8kWR2UYAG",
  "key1": "598oqpKegUSmsyoHAGDULZiKdZF2MSiykvBbxj5KcRUTkHCCLNrKuZG5t6a53qcTmoCvfCmisqgeGnAeDUr78Nyo",
  "key2": "3DhUEAVfSw8CNWrQW2iWRv4ou9KG6M3ZQcozNizU3tpP2x1c7ny21y6PXj1cJMHQZugmE4AABLprap6tTFeEruLh",
  "key3": "21jbFcakijMZPFEs7ktBKraUu3tHmAtHCNe1n8EzsnXoHqR9UqvAoDqk4EfErTibc7QkBExemNdc1PFS19ZvUhvc",
  "key4": "4fkZVnYX64ewJVWxCzrRWbhVu325LnTjbGMmqLuXJyGJapsUC5PcvWfs9i5NFrZ41oAVMAqMM3z5A8wnkwU7u8kQ",
  "key5": "Mu41CYjfGdLuDt3osb1gpuJKVCWHH6B5E3FS3rzoUPK8Z3fFezRtG6DuqPZ26thashNNTWnbXBpqFN78azL7Nbu",
  "key6": "4sLdKoFzNACgaN1DCPJAYrebMFJZycavP1HTfDtbCCiwxVqqAespsP67VsEDckQ2RJRkjcn5vXn5CjjF9Lz16DnQ",
  "key7": "4RonDLiEd7MugipNfbzAbWvQAKiRjKttPStMD6c7o5HgCYF9MUExWXmWqBk2TP9cDHwfsw1RpTdgNK1hGmgMxnX",
  "key8": "2i622Tmt3Ujoji9eWy38HtXo4U22nponBtEqKpYHGiqFzVCbLCSY4s44FZekEtDT3TsbcQxQR8J2QvYXjaSDcb6P",
  "key9": "MhYaRxWipV6gbHQpHzU7jR16D3VpMg5fZt1JJy4NYMzZfrbMPSdoVQNq9hPTMkkG2xTPXFPxEtNybBgmqRduxYm",
  "key10": "2rQ6VvXTiPCHx6AxjPDWy5W2FU3koeRcCeFSPrtL8E8Vhw4j8V7jwNCD3zEfiZmoUabi2MXwxXULHnRJChxj7fAJ",
  "key11": "UQU82P8AzQW6P56t4k4FWTE7QwakFzguwYUxwSkHdT9jtbmXqoSE8u68HcwHruXEfYyCW3pd9R8WtfgLdX3v3Mo",
  "key12": "4FrRbkuMDfPdSjehxj4brrDstJ61xeo26KNUesFZ54frnt3xPpQRmtYJQGpWcaKLHa9r73nYkYNNWoMvhSTJRa1X",
  "key13": "4TQumvVAyJk3J2X72VshYRKVacoiFu6CWypsZ1as7GaadWmDG1b5FtdqmTFMC7jCzsQZyGStW3vbnrCX5tqLz6Gz",
  "key14": "PTEtQZS1WzPsXQsZtRewaTBuk77MUvjkEbhUUqcWuMa9FXCYHZrPYFxsekco81t6UdodxGRL1x9bpJCCX298Yoa",
  "key15": "4bjpgvThc1JfxMWa7AsGnQfAWGAvyXWdFWN9AknwtXAPQVJCcPogQ6Z51ezkCbkLzCE5pmBiXHvyLtM8WkfiYV84",
  "key16": "5VsjhrvtcBLmQbVHZaJLSSRRsySkWu3C2PgUgyetjSx4cpEXpdwHZSjMmMa97otNM73ufH1aZEqYfQHDSGJFZEvj",
  "key17": "2Y94bPiAKGpTUHFKxzhyjB5WxNLayXFEgyLKcNKcAYkEpocZifv6guGhrjB4DR2hKKynNgTWkhrf3yTgGExSe7Ne",
  "key18": "5DpQ3wk2dsS9PdXxRGtiMGK8Sb9cYb2AkKNoupFui6AW28s9SKVdCJKp1W4KdzwKR5PPPef6nhWHnsAMaJzM8tw1",
  "key19": "5Q8GqS3YYPNXbGKRZ27X6nq19d4zMi242atyD32rWa9or5rBSaEemGL8mMd3csDJwUXTyej2FKXxaAATUro57ih1",
  "key20": "R9RcYU6J2BomjKE8KvGRgheXkWXcPrzbHdcgpr9Pez86NwkkrxG9wdsv9RjCqpMeEwfEiMckBcPGsXmvepknAK1",
  "key21": "3Hh2TyAi6yJWUupegZDA2UgjvMwCaTWVfZBZVquqsCUMLAxea5dDLvcbXJbFxu46cpwKHe2Sp92LK2MHQ8zaVxF3",
  "key22": "5aSoSFSPJhXzzQtCFKfD5j3YWnSU2WViTzBeycB6UM9P4ifNDGpvYJ16bUYdJsQAJ19XkRug5NCNfEajPnarsgU7",
  "key23": "6umbtxp7CRir5KX5P5VrjPL1mgPyzrkFGmsYK2CCw8j6AmcV3UTCo47HiakGuMp4qbkhd6Z2nJNRN9Gr4MGtzfZ",
  "key24": "CK6i1EXdTo656TJDLvuPLyZmt8BraEsTBxBRKHaz8zAS5GZTLgHcH1cvdKwUmGjsLeQsARcv7LwrKH87G6nbPcj",
  "key25": "pGMiTKpynjjNGhDGke2pz1xEZvqtyiy2NEuBbH4YkG5iSrGwt8FDNTAQ4yfwEUnfCPSgbc6XvqJEGJuSxmiYQJf",
  "key26": "5CZdPqcVTb25TAw9NS9eddaWFKCiFPAQAgqSZFajuP3CUYT1oU6cDbDmQp2SJ1UqRQUArsJmb6yn6KZKitiSF35q",
  "key27": "3XCpBca4RnoWZ5HDMBSpQ9cJagrtxBC7bXiYb2UVKCMwxXkRZ3p4KCZpSrvc3wrEz1Z3xk6XSv1u2ZdVc8yYGcG5",
  "key28": "Yu9iuavsxMwMRrGhdcNgLtZFbyiuTTui2umiVgbFDhyw9d3cRjBg2aEmteCwj4gUUHmMDCywzHUk9GXnpZPbTW4",
  "key29": "2NfwGhMUUiBCmpNFqcUoQ1wBksKnnqZ78a4BZdLneMVWci8gYe2XBd7ywZYKATXbfC7Wrw278whJnjjV1YH91N6Q",
  "key30": "3KWdww6a8Y2DmubzWpr46BEJmT5BSE5JC4qg42ChrkbbKq8K6Zw8PPB6xUyo8s6yeCsBQ5JyxMes4mS7SuKXfiWy",
  "key31": "3dkBDbZRBSDS8Ua7DVDYJsx6tmFVe4tX3RGKinRVgB6XQho74fpmYs6pFHRkSBeDC9Yd5kiej4PeYg3PQo3wreJH",
  "key32": "3yAQbTxF7buuqCt9JzXx5ovkS1wiiSC2yJy3KK3e7YivSqWwnQip2WyJVRVwQoibVLpf2SiSDfV4AmZPScfUqeet",
  "key33": "3VEyXpYLZBiDgU6tSs8Rcx8c7VAEtiuGRFJE9GCXLaduFrC3qrxRNLm3rPn8BaBGoBP46dmyi9A7fb3imDCiNhja",
  "key34": "2aq1ZuPozrQoctgV2UQQcBRpx4nC2vnhjysoRKkeyM7JRCBYd85h7m2HfXyYCJkq53cbw1rmq4fBz3LapjrwcpJn",
  "key35": "3MT4eWYMozcfhcPWEK9wZ1qS16GfcQEVMkVJjugvrgQDzBzDe3bweD2Z3C9r4UWPy3zNtz637nHd79ewRVmvZ2k8",
  "key36": "3CJY7RTAekP6o1Tr7La3NBojzM7RZupoyx59DFWeEwGqeDNc1X3M7bi3fEVmyBeydXiZ7hX3D4BW9EH3t36zersf",
  "key37": "kzdifyhGxcevBgfRTDZz2YqWfTCVv78wC6VYFgzU1ujr8GR372uns9RuGvocsE775CnvThFgxjRpCEKtFwjnmhv",
  "key38": "2xD72HxPtdAhp8Zy8avBo9DB3QC6RAMz3DRjXwKG8TeFZzqy148tmA2ZnuuyJZGngtRzbRmgtM1HBqeCYLJ6oUH8",
  "key39": "41n55zRPetk4LkNcfVcW2sGP3DqijehFWWQVVMRksiK1UsnSSfLmfXrLivbDGcWoZMbocBRpCXmonwPKm34VP1Xh",
  "key40": "3xgXseZyZwsgSvbeH7G763YPV7tbTfYLJp4D7j2uV3ySH1jk4PVVnxhWi3Ud1SeFKhnscoEyAg749LYUSXy7fVt4",
  "key41": "3J5v7F15v1LdmFTv9LzZ1nuHk3mWFLyTMkKZztZQtZrPU1yvm98r8XefUWzF8KLZgGbc9F3kTMHPNEP2Yt6hcDaW",
  "key42": "5pKdxCEEznj9e9D8NZ3hd5xdysxArhrcoqrdS5LEjcsbw3mo6Hiu8HD4rHo9CQh3K3nnwP51Mhapd3JujEUtLPnZ",
  "key43": "4Co7PiUJbWiuWH2QE7VSxNmkqCEJk86bjCpV7a2fu8KbhSWp5JMiv6h6TPjK9hg3GYLcNTYUqdLRJF8d2bJWWkvb"
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
