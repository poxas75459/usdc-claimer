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
    "2yD2hy2ukgjyEUzn2dQcKXYU2eXPjqGXQ4tLy1mrAxHqdCz2VEwKgrVYqU1HPvmDWQ56Mb3iukgCTAKo1Whmdx9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8vjQTne6EwR8Y2niV6dpttZEo2qDekbhD9hebLSZDrNG9YNQs9YzgJnQk4eAnt3NYKR3x2QuUU6XLPFcbBFuLTe",
  "key1": "2cBFrSoFPZw9WxvtXhAxzKNGd4tcvytSitJ6EAgp8kZWvf6MtYAvcqcWgsktNvyPXc883vohpJCkzqqSMRq3aymb",
  "key2": "2nSE327KaYD5rdxVwAkGkH3eDFjuucE7axnBNyBnRJ2rf21kn2qa24iqVo8SS4HAV4F4RT6ToDwtnb61bg3kvzg1",
  "key3": "5HwLks8VEEom5qtZCvqdnj1kRkHRFChL1kYoNuqpXx5nogK3LsubTRfewh93Fxc9hhRAZVnjr6DK6Y43mCTzjWvu",
  "key4": "5QnoBbhgAzbP1zXdCjHJjoep99Hj3DghJwaWJubaH8eNhzPX5ibtWJrxFQo9ceNYbjbPvJRrXUMBE7Z6VaYmmd7j",
  "key5": "VgSNs9Xzor8Q6tx2xGfk8vyNQZ6vw1GR3sMGKE4U71C1pW3kSc86W6hFjBASup7vGReAxZa7QcgCJsCw2W7eguv",
  "key6": "4pPzr7HxsZYCDvhcn8XtATFjKUY88KFp94tYD21pu4pd1uBJtvpqAmdZghHdEWuija7N7qiKG4tuWREJmKMniyia",
  "key7": "AkioKVWaPMwLhTDcqC289eLG2ycwzvfAGAFoamdE1YLN3U119dUF8rD4YWwiC3fVGLhGA8KrQ5pQ2BveacP8RZU",
  "key8": "3ZbmsptWg7k6bd7LrDz9enjHpvHkaU8DJajTdfMvvpzELrUPc2gybv8GaQJKvwLChvZAmgwuoiFSXDJGYJ57ASR2",
  "key9": "2vRohDKNEvFeRZvDN2HQvjahDoaq5Gni2tuTacwaE6fbqQkYg2M7WPgfpKurhQr15mqy5FtuwJGfMD7GGK84unmo",
  "key10": "44UbS49XV2ysL8ij5vt7kiQciojmEFcd52ijaX1T5i98y3Ltj9DtVUC5t763Y77wireP5JweFEsVj9RM2XCim95K",
  "key11": "JYzMnxyaSkABGFvQYjWb6ZyE8nGxKCbrXHYW7hJcS7tUrvqyBf6doqVm6cgC3btBEpUs69e8XxfYwew9sKdxrL1",
  "key12": "3CfVAKKPMeN5wuwnSPFJH1rYzawNgkp8nzY24Ttg8UuET9zBrbPsw6GJy7FDcWoR6oJU3KXoYRi6goyucXd951r3",
  "key13": "CZ7YhFwtFVUWepYVWEy8tQsXUGifz8LSzpPXU7x8Fseew6yLXdH7yPhmMuWWQMtxApHwXjkjy2CzgZ1K3anXYqB",
  "key14": "Sa7sojQd9hVcCB9ehNLpGyvAp3y3gzPDSibgTcHbSJTUc7Qf3LyH246cobkxacBehhWsmM6xfbhWZs8QmVuoyc7",
  "key15": "3BBR7zZMeLt6bdG8HfKmrX7p9hTSQZ8E4zM4qx5WCGa5SEJsQwdYPjFoWjiAvF6uADCXzLngUSA5vp8w5nc5uCic",
  "key16": "3AKGLX9DYrJymjc71PbttozWEpYm3nw8QJ2cMmV2a2KBGVkipwnRor3mCTy9fbg9Q1xzCScsmTMpifdQtoPkUUwt",
  "key17": "3Uzn37XEN7Y4fDFjRfjF4594KMMeQCxNfDFJyHEpv6GQ799ptZ71iiChbESiw9DyhVaLqJDWxDR53ypKK2B3VYuw",
  "key18": "3gf5HBXBzfaatvb39agwbwXudDa55uEvPZ6kQizFZ2jRFVMF4ubCLuGfgMBEB8nBnUtUcFwZjxeReDQvK6jwEHgN",
  "key19": "2modVjvUAFkYxi2e8rtv4nmbcA4Zj2HQ3jasST9x8JnjZ8LDpvDFCzaUMSGnCb3nk4gVuSn5xg73vpKN7y778SCB",
  "key20": "5RdPtGDnkCyr5KAbvi7r8sDE6nP5YH9GGSBDyX7vw4SqFPrXYLYSz5yCDX85ZAVKKSpUoWESLqjN919NjvCTspWt",
  "key21": "5nSkCYVWAN9uYhf3Ey6v8hDFtkUFg3LScCXmQGb3tZCEUp8ujbopHU9XhxndM2UTVDETzyKTXE3g3yu6Ew7Pdf9a",
  "key22": "4yLrzWTkvnMF3GhaPp97u8b6oTiTNgyu3S48oyFSV5vXedTy8HhmbxKPe8N5JNPq3NsYbMzJcy3h8cXJK24GaEra",
  "key23": "2UsarJzsctEJaCeo6KwZa3jvxPYCRZojFdKiHjiQDTxV3JkDnNp7P9EyGrq1kdf4qKjxcJQ92xaqJ8JAfXM4q5to",
  "key24": "3PtNg4DZMeVZXV2LZktTv1ytURrNDjgYxLs4KEUM2YsNXpPTrEJ48HPeuUad8tVrKZVG4wCjLtMcQ5S2uV49YMmE",
  "key25": "2jmZdd9BkANcjUxrHQvLoYhH5AZgn9kBTzjKtZGZLr1Apg3BaWRAXxFJcEBddb1vkRQTjiVBTbcyV9LCY2ECr3w6",
  "key26": "4BbhcM5HPSi1JeF7TK6P16ojbwyyTheZgFtgdKj6edBpzH1SC29yetVyjjdyrRPzgwymhL3Vcv9yy1DkQhxP5GsK",
  "key27": "3Ren3QpUJ2UbZ3iE9zT6fJMPXmGWem3JSXHnSvtPjq41DT2a98aRzzknKcgrupFf7PtUuHWZxYzzTiAwSwxdfVwe",
  "key28": "SanaJnw1j3EvSCAE84HwfJpgmNnTAgLeMUMX6h2kiQuzwHWbsCJnSD5wb8MERXYhbFYpjRvHBCL6gUAf8KnUf7i",
  "key29": "5m2oTDWncRySTbiquuUEN7eLmLT9byBcGwRorJVeCKmnWTJMa6gCDFe4q6KX8iePGHSTvGWnT3UJ4mZoBvxvQtVu",
  "key30": "CH7aiFovsTsVKpzW41X9CSrcZueEfz15pziKJPtnUGyjgyrbU7Ts2udmzSk6QdJMCHqngjoR4ANeLweybTkVfqN",
  "key31": "44WLNgtSzyoVBQWGSeRCtm6UifnkvHPFMCYfyD5BmFACtQBCodan219Q7G3pq2rcAw9UYMDhE2RFez62QricPdWj",
  "key32": "Yt6CYBGkPNTECBJs5ScF8BQwhHA9HCG6U55QuUWoLsujcLfYqcgKgHb4my4o7EGVVUnDCWN3ryB1uXYRXnrksgL",
  "key33": "2SVjMSTqoVNSJk2EnjsETLnT1Mi7Je5v953XoRrDKzFtjHbbuCE4WysDwhJrptcKmx9zZYdp6Dfbfh7RFfyrSoRM",
  "key34": "2zWjmCRhETkJRatrovvnS5mdX1zCpD2hCFih3YCuN5rfJL1N9kArnQVST8asNFPRZEs41qwPWPCRZDX6rwQdS13A",
  "key35": "5zGGGivxbANKvHwC9F7eSG53Epe6sA4VpqZhwnhR2DtJXZid9EmLHXxkoNtyDYhQbEMB5obdAt4rsRo5ZitzKcmc",
  "key36": "5GU2hzX2T9GCdSiv9vBfs2he1wYCbJCqJxEqFPG7HHyyXXUDb5v1B9qnXqD4zrAyUPAKb5eArYqQMFdhtCs95Zok",
  "key37": "23vYB6DgxdNct1XMU5ywCfrihHqbtVCRszKs42ifn47GWGCwWMGn9Hq9LnMus3gNUWyVcnLAfpz8EqNDE6JL53Sz",
  "key38": "3Y3odg8BhEqFb5AXsL77gcLnPfg5eD6FHw1Smm1HGbfUxWeenC31YKCMB24oVMk1QyGHjgAWrQB3c6MPicJuLL64",
  "key39": "4DyjkzxTGpV396UXF9J6wHGNPhAk9sFatvR18iNFa9ubzzozhVjmdeotdShtGc2tvJaT7BTLVgETJHgzQhtRt9LX",
  "key40": "3kCLVuc2jkLfbNGmQnN5VGVb7kb8oPmLTtFdupZ8hbdSXWLgGMnTrDgHvZvvHYaviH9XpDFEfCiLfvamMuD1XkWT",
  "key41": "65t3MLAhQnPwVg747i2at2Ht54qunutjo2eGpAy5N3TYwhX3pR2SLX53QD9CJfVXxHAf7QCLr1TprLL2p3j8N67a"
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
