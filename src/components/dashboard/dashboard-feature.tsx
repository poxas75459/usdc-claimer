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
    "YzPfytMdrLvFu9Hyjs6uaqSBq8sk49hrMrEkMLejYgm82dCPu5AHwCrBvgkaztTuVtL3oett8ameW2BTFZCzd4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ujgE9fdX3crtmH5Lt4kPkigZQF1pq4RD8ySi7xVzmVFbRe8pFnrHympvsv28DGwYuVVLJ4NNaqKSy5JiiMSFMiE",
  "key1": "4jnrpyDDQr6K86BSG2UkipV7abNewnU2wGxMpRuCK6QbqxhSFapmEudz1cYZMUj83r4445kLabeQVu6eNFi4Za22",
  "key2": "5tbXMuY2Y3LB2AkUaoid4k29oqdB27LGMbSJ8qm5NmYcoWiRjKrZ6yXaWpYXFr6U2L5rG7BrRTN1x91fDpD36py7",
  "key3": "5L4bjzsBnC6yZCzkGntWCtXqdryj5mXmCG8s1E9p5tQVxUNNsJvBZN2eo3GSSUst6hzJwUMwWaAXfTHxn1MpNiXN",
  "key4": "2WHo1Sg5fEvhKWs8oL4Mfo8wHRCNeDZjMQfeRE9Pqjmd2odAv4edmxJ3cQ55hN1huNRTfhoSzQgqG2wfVviSoLp5",
  "key5": "5aGGPFULuyTuftAWgRcwoYEyQZGBbHducKHzsbe5LYbPGGEuCNgvG8e6MrQKoFLiz7WU8XZrpFqEiX3hvWQU2nVw",
  "key6": "2edw19mxhDYPumu8BNp7Hq3aBcPBvNV7meRCY7LvqY69Coph8xs2AcSMryQ9BjbG7DXV3wma8ysDrQP45JYh2c7a",
  "key7": "42EuHCNnU55yzuccjbEJDaJiykN7HLnkKCHBY8rgt7YwkqWuSTeDLmbgszT8Z9BLVni8oiYTSAh4ggV9vXj8Ypgr",
  "key8": "2ps8TeAK4UYtnz3Da9DK5vzQkpLuf75fdqGjhwmQvUggpXH4uxcCUzCGEC9sWY33g2ZsUPFC5P3RKmbkgoRuMPpZ",
  "key9": "2Ug24wZxB6QdvN66uajSrCQPtypqdGso8cKBdHohdsqn5heTdkP89VQCggiHHykgGAnZVV9j5bh7iEKZedRrreqn",
  "key10": "2uSPXL8xM87ahC482G4mug8VvbjhyshfxQ9GudMeESvtvjbZcc55mPGsCe1A7aN1Zmvk39BxKLpSE6BURSCcoVKK",
  "key11": "hypKaUUA6W953mt1ZTxGCdiETNpgLTyVZUANBVbiXSdAF8ovVEePFRPvMHY8nEueqpLC1PSqQNRzUbbbQDjZ3BS",
  "key12": "5FCi3axHpnXrS2YzYeMuqJBUurg61yr2FMiL3D3mJ5Vwxe5RbqW9jPBPNguyjCjFJMshDRuNEBghaq2eUeTf2m2h",
  "key13": "euVbPxWk7RCqkumznDTKEaHhk1gonuhmuFQNeXtwD7B9YDtzUyy3sPLaf7xmbD286v7k42twXJ2yZMF8kz523N6",
  "key14": "2KeDnh9URDj9UTgb1Pz75mvRxJjvi2KwQ2ZAxdMLZNVnteyFbb68zEsEJtdidthYtkDkLsR7v7eKwfD1mQzwEvEV",
  "key15": "4rA1Zvcq2gYvxP4a9XqHPoJfmY2BdrZPcf1yPEViBVJUSVDHeJZrm7d8zjNoNcgychvPZRc4tqUxue6QBZkgFWtQ",
  "key16": "2naB5TLveSRcWJxNNbTjFB3WMycTtoR9NojQM2XefYtvDuDNNW4C7ggNwF74rCu67FggzPRudSKBsboDFcoow6MK",
  "key17": "2wxB6TsKTuTr97KduXycLzGejjp1TinCsPadf3rDUqoE2fxsaVoDQNoZHUCGdLqRJUxrXuuWj899bARUNfp9tQzs",
  "key18": "3qH8ACuxWsZFdUhtW18tQ6YSDGT7GiunSowTMv7QhTAj7jQXtRoD4f1a88oBFaVDFQDcapNv8TKx9AR5n6kLCCkN",
  "key19": "59LXSYRP8ZmCBzt72pgwJ7qDy5ixjPyBzecybPtiA9bTpJ99kDBPRR2eQNa7nuLgrp48BPrQ34jvxC2LKgP4g9m7",
  "key20": "4wswiKTSzvHDx8Wm28XJBxGZRdqixk6vuwWX5zxACgBYrYzEYQFPKjKazRs5seC6fnLrfH1eGboEu91HG4kfrEsr",
  "key21": "4WY4HXhECtucSmgdUkPws9PMDzQFJ7uc4oUKd2Z53rs31fXQ3AM3kULA2ypYXAYsZNBjSarMPSgSNgoz12arRiFu",
  "key22": "4RJbMGY57MmZ5dHg7eARpz4XMiCEhv5JxErnW6du1TGYumUm7YL4xf69hJDfGhem3JDU5f756hyzhWGNyvkwME1i",
  "key23": "4nx2GXsXtimStqTZqq8MpmjoEBqN3aYJghXePB5afRLGv5J1JTBhgztNoiz4YDEXPujFSDEu1oVp8G8iKy5Suwii",
  "key24": "4JWxWKEqE5vNBGRyGQ4edAsTQVEELPFeG94A2KgXm1abNwxLRCU3sAUJUdoeADNwQ8ygMF6RKKYJbG8dVzxvMKmd",
  "key25": "5aERK1Bks6HvCELVCcmxW44vqNKPvVVowsyFPdLuLVEXHXbhkW8D19wpc4aouV4afWdCPs5ssiXZsMAZg9DLNARu",
  "key26": "5KkAzyWXof8RU5XoP4Rx4wEfA1EsnqmfXiLw1NKMS77J3seWrAra52fFr7xXmN1CbYdJuH9UjxKJwgypz5x7fVSK",
  "key27": "3442uashvUgndMN9etFJAPU77LTG5hfTeVrAhHEHFuhWs1m18vDt4JWU6faAvaEWYbbk7h7aVQ5zsA46WVG8Ys6r",
  "key28": "r48awLw8BhryMXNZPUkok2MnxH2vacexPwEhhpcrdSAHdE6e4AwEzhtcRCGpHsrJPKESdDUv6LwFwmiwLtmzsDX",
  "key29": "2SD14gCL1Bss8xvkAvi476Yk5mJ6ihHAMtoMrSDKSb3tphTLsRJzfdAyURqwAgaqMcticyVvUqdDh5ojUy3g28rf",
  "key30": "4B3rZeZFDdAMtvbQVd4ipDRCaayp7MSUvN2xSh5Jcia5BbFsdkCPScXHDeZYzasN7kWzos5RSPCWRBJHtda7K3Ec",
  "key31": "2gvy8F6PGbzka5LGWUPnfitrW9jYamZEysqMRUJKgKKsBx7njP9iKtkgnfeA3omQ6EaA4jMLajYoJSUfMcLRCzEm",
  "key32": "jtRstSQYp25dS5PHqitDJ9T7ymJ8hvNyw8swcNNYMwPVrjAu29U29bos8ncxbcn7UiRKvHfHxxYgmYTHN8twDVf",
  "key33": "61XVTJXEjWQCxta6YhXLZaQUb19qVztHCLXM9nZaQykDsP4xYeazdWxck4f2c9os8mjq7B9FkV8abwuDBE4nKD8h",
  "key34": "4CFrxAv8G56K4feyDDw8L6iB4zbVecUiq9QHQirZTEKqkDMLV1ysKvPEmeHF8FDHom5KKZgaWKa7WHZdwVTREtHX",
  "key35": "eWmNpc4RXe2YwiL5kio2MhWjX2FNtCfYdL13xjYaVh6d2AJ76Jk1ygnchHdf9X3xpUhik2FztVt9znCr9GvNhMV",
  "key36": "4RFBqPZ6dpomK18Fn7ir65gxEXD7Egs1mgZaruyM6kgzLfmyJNKR11oTmo3qUayA9K4RFkFSwcmCySAyUHa5FeMG",
  "key37": "5yywqqaWvuR5Q3koMn2r7uC4irqQrQKF1ZtAvpRa35X4oAsHTjjYZA4FCVu4JxsrevZxvPV5rbwUGePfzFd5QDmL",
  "key38": "2rhDA7g5CWUP1WLGqabfsTy1T4RVSDSBWXKYixaGP3ZjzRgA3XMBpnmQA8X829Rkig2n1mZYTGuxkRvEu1imrK9F",
  "key39": "2k8eEv98Q5J2KgNUx7XuzFHabCCAcSsr7BBfSUx6cxA29TKoZHD6U8BLSUyFYutDF9giK8jLHYf5BRHeuNNjQFih",
  "key40": "2Czo96z5afgsNBB1GWFGaLgLvLzXBWU2DjMfMyosB1ZF6rfN8rJDAjgzTDAQCh7DWtZZXXQRYRVbfEmrJje3HLBe",
  "key41": "4b2YWTwCvZW6WbSTkKKwF5S95daXH48Nz8Nwbopa31FeaDZY1itTGHuFXyqL5KMySiZ8mpaa5XzufvonT6YosZGb",
  "key42": "4LaPWRedJjsfHfG4rsuz9WnrMUbKLmXN8L2oG6bmnX1QTDejJqUHFUddmVjJK2MHxArZJnWgtoyw6DMkN3TtKz2m",
  "key43": "3wiw4W6vcfiuYL5ezNhheFt8cPRbDEQAtEB2Uy1wSegGyAU67So1czh6afXQcqECig37bKdtnXNk6GjcwJvQCPHw",
  "key44": "2ndegk21rkg95piA33PPSx2gjjpqHaw8uj49Dq8ignWGempx4y1Dfv4bhCLcdGxo81QCFmhD3CTwFUTaXQ3K1PKr",
  "key45": "2tmH2pfgAzRB1sSaDiZCqG3VWMQnsdfySYwZhkMgUYJ6oTuj6tB3Bh7or415fuGAzV9bDGmzXUzDCZUQy6ztmf6J",
  "key46": "4zpMMG5e1PnYkLdjnSTHQG94CMMoqpiMmHFt34wocu9T8LxGbMNSx8mgtU2E2q99oh3zEecEMy9t4RsbWn8P9PWQ",
  "key47": "25jgX3fcRDu8vYoSXR8tF8rBh3YHSR1GQrobTeMuL9g7K5ix9Rf8rLKV1HxUTT6StVP85NYCUvS1wjBoT8WoArhy",
  "key48": "2mW1hTrU2RwXT8W2xKQkguA6GwnXcYGuyqmfLmqbGS8CKuzdb6PpsbognrDeazmbuR9Dj5s5DkJdYsReeh2VqH4J",
  "key49": "3RVXwS8gtDVbNh2DP4qrUeQxF7UzHFjNh8tikBiHMWLpaLnuDZKa7CtLySXEXj2jL2q7nS4k6CJgZ9SDGUaQN9Fn"
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
