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
    "5A8kgrJA1pxGjsWhUsh38BzpgJySZjX98p6wXGuJBmvJi2EzZfaiAv7mb4uJFGJ7BpU3JmDY6pmZENdNyBfvFQdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MUHs1yoGxzkRHXymKcUcPgzaxVDDa2yMGqBWLRicLNX3W5WNJH6RaF1MExBsqkURxu9kuUFJX3Lyi9oS1yedhng",
  "key1": "TzyC87A2ZcbRZ7Qrip7CdmHhqS1xeBsWBJiFxdAg3zDpQUeY273UBmwCt3jnEL7NTMt1Je7Eyzqbp239RU7YHvB",
  "key2": "THn69u4WWn1ry35wM68kGQCG4jsiXSyopTFuAoJYSwrfjon9Yqi59J1JgMXnUCsoeyFMaZifitztwbDBwk6Zzbe",
  "key3": "497EnoCR2a6SupW2V1TohcLVY5cvPMDVQL2k5E37ESknAyUy3DEjkp79EtJ5f8BTmwYAq4hKvCF4vo3ah4UFSvMA",
  "key4": "5shgCTEuoW58XM9vFHTZuRv5hGYcU2PzbCM3urhvKXNUZKVs4j8nwUXyhqGQejRjT2rmcdXuuEN8m2v6NdmUSpaZ",
  "key5": "5Hpy7ubYZXpMedcsteKXbjwe4KRi5DV8ehojhtF6FyQ7coePVhncUGnrcJwnueZduyAnP3v53YtSCpjCmJyzAkMU",
  "key6": "C4GjE2coHAMrx9aqc8K1jBB19sEDN442tT6gz2MXCkjPdLxWCnYe6U7XpFbMLpJ6Q55G1eXLiu1NetnbHJYr9GJ",
  "key7": "3rHZGAw2ZFsoVGcyLdNJGWqfR4cNsBnAm3TinMB6u1tG6uyZ8RwFmxoRdE29xr8MnkqnQb5LaXXKtbVsTXssnQo7",
  "key8": "31cPGRFAhLJw7bbBG82FQ53YuB9Ru8iz54FQZDRcRH4LriKYKhWiFciTtBXq9VYQHiV6kg8Mf8T513U2Sk7hpLSb",
  "key9": "CFvCaW7HXuwQ5GdwuGCPiVVWLGoZ2KZbPeujanqE8KE96iRKgrpPeAEySHLryDTdnqHBJBZMwt2BaozPoSBXcvV",
  "key10": "4RKuCYHFLA1xxM5BU6TxGY1PgFhLvoLcC9dzsen5h5jMUCgAbx5eQosxF5iRh6SdQB2wjqKWY5RH2xBpy9NpEJ66",
  "key11": "35gpKELcZNGcrx496eTqtgWAkAQDEeGGBo3FhLETChptBbcKnGWeS9ZdjeyDFMZLZWpeQ17etLevphuPBzM4PEUr",
  "key12": "57FJDKebvxxdW6M97Vnm97g3fzxtJd44jJWbbG63oLDy5nBPzwiykpZmdHCwV7bUG1B1fofa7w6YuGVjYmJRgEN2",
  "key13": "2ViFggfy44BqAc5DSETJsViXvbz4Rz6Ep5yuiuPkA6LLXDmeWkfKnYV6X43rDmqPHZLeFqHh8QohLHxNaUSvySL",
  "key14": "uyRdzTX869Xe4tpKQkBLaQ7MDr1PUaVfYdrA2DobG7HYCNtcZGkqxESxbyfJhWsASbamVAr9LkVAJ4xoMYdnxNp",
  "key15": "bEY3eiaYW58qFHL91TcJYziX534UB94vdrBJmMXWmjSe2U7J1iQaGEox3CNn8NA2vJWbQQhvE8U6oDi5M4bftKn",
  "key16": "2pejBkyvcC8HX3sHVovGagnQfw1D6D2jtppXzBXJuBQq2HLPyZ9eFugje6wGhoCmWDZyXfTuR1kUqmf1im61skW1",
  "key17": "H1XashKtmx5cs4AcTyvVu2AetndARW7ci3ZKeurBL97cKATDazDGxMZdwyt7mCRmcurEUybcykdGqVBGQSfzJwS",
  "key18": "61oMaHTdUiqTPENGbvLYeCvCfHa15EYPfYQ7P4wKsp1v1Vdf6fGNG55gojJ1fuAjnMCBswP56CEPVPwPbmiPrz6a",
  "key19": "4H3LbTzhG8EZDfHWcz3qkxFFyopg4wvCLMV3eH8rixRcXje9TmFihzgBT7htnUYEaBDo3BBkN4t6ricJ5yKbMhRx",
  "key20": "3nHPxdCZXSek3D1BddjRXGSQsCjoXoGpnZww3f1R34w8tmtRkh9rXNCu1ZVjuotkJ5T1zUte1VbPwwbL7j7oQUd5",
  "key21": "eMe1Z1neNhJnbJNYUjvRicRs3QCwdMaCYWymz3P6qmf8RasrEqDizeqvtjwZWwpdnnhWrcrBapGu6msUcVy1Rek",
  "key22": "4kGPhyDFD5tf13G7o1qFL7CJaNqddYKg4DkmwYJb3SN6pSLi9Tw2Rz4M646zn2QseKfVeugZT27Tu3qVmgygzWGW",
  "key23": "2bAfvZVvV4eejBpfQPS5aRJC3Vyz64tiZCk7jKWoCCBS6Ka7Qjx2cjDTp78v5mRWGuDhZKoVK515bE9dcKZ41pqJ",
  "key24": "b52az3Y7fFki7r51dsLMstciWX6APfBwtk5rcUrm4qrwJdDfpPhDy2dNLkVUPS2bjmBDvhhjkLd7sE1J81UJZVi",
  "key25": "4ZyjDMru5xATrHgTegst6RHK4G2GcqcvfXFusY4ENdLyZEdWXBJPpg7jhhUCCxnKeHsLan4oDspEMmyDYK1A2Bb8",
  "key26": "3GWVfyB2MUxPiawKGs8tEXMr1aRHJHfoMZrCppp1DooSeYPNfKfHGungsHRnpVBgcZe6CnyjGFNTf9Qa8UAc6Nhm",
  "key27": "4Do1fcECAo3NcjCckSG3zi3UQ9j45Ueqb1aV8Gm6omKNcLeCWxBdRXstvS62DDAPskBzRQbgvNATeCMVeswRmRn4",
  "key28": "2ucghNdszU6oCFgR6XeMp4CHDh9oUArS83KpWMHJLSsfa4nH4UyggaNh5fjchaaqdn1zYi6qU22VX3YRvTUa7NLx",
  "key29": "58K66gGoxJmoQKyMDh39uBbnZHP5AAULmsugJPcCh2vS9sfssjRjKVUiNkw6VBCrYKLctS41wFMBRzV4NTsdiH9A",
  "key30": "25Hoxct5TgJ5FqpZoe1p1pHyRmseQDVqbfWj8nDyjMta3JzEVZaj474ZWDYVLR13c9jV72QGAoQU3vRitBuR2nZ5",
  "key31": "NyXJu2wbbNRJz1uR1hqihMgMZCE2GgW23DvdBNM56JsAPSQ4LwbwCH1rRwANoXe59ULLScid9g5VUAcxPRUvsc5",
  "key32": "2BsVwZyqXvQgbpGoLRrMthxHZyKLZcdfzVB1aBMrgXSGanvpUDzf3UmYLs6CfnkCLcDkZf4c1pVrrSkbta4gQCq4",
  "key33": "4DXmhDwHUjN4qSEEkBzf7u3i48TQT8ZLd4L8rZd5GJ5wuk1A3pZrqJ7E1AiS8vC3rF51e8JA26ae7obBB6NFDBn4",
  "key34": "5eH2cb9uLU52CQQR7KHQcdsE234z24BzqasFzKx9QhzD7KCBzHFvPdseEx2sZTHNsoETpKFMzPXrvJ9xWCPUN9tv",
  "key35": "5TDsCSXWFitLyLc3HVZuVTXEvmrhq17V7vKTt8tn8fvPnfkSJnoGhms7hnJC1A7KpyQMirwUi6J8E1RWSeepa3eq",
  "key36": "3HqPacBqXyg34kDEyry8kHaAQ8Ls3BFsyYFGJmXNs6aJzGhQsBdhh6kBxtoxfCiTp4UrvaGYEhhnWFNA6aoc38XC",
  "key37": "RS8Yb4TuD1Sf1X22fGoTBgfPHygLy1ohrnsCHNWYoUXuL8dsMEbZkqC6fHAatE3jEDrH5SJ2FwZArs2BfZCmbjC",
  "key38": "4bcLCTqEuukJtPU6PJhcX4CUAfrB7vRwvpZX53a2eGHZXUMaHr7UNT7cKcafvksNqZnkuYSLWGDBWiMcgDquop9J",
  "key39": "3urXMabY62JH4Udn7nPdJEQvwKrjdWTM7wGt1SqtvGfNsVoFZFBqeHCCTYZ6D1cTwMZ3ViiENPJp2k3SwuhQs4do",
  "key40": "4obNrgwiFV3Gw7r4MVumUeJiaBoohYUfix2ujHNZNbdeJCmQHAjXkdBU8xxHLkFebZCJ4g4XsbdnoKQqSf6JbrYx",
  "key41": "4PjkQbGpzTGFZvsN8z7KJrhtWS5NtJjmCmB62wWtVxaCR5WH7hadUCx2Z8AQy3vfpsVTUVbBADtpduthXwq5BjpB",
  "key42": "UE3FZCP37E7K5b8QAcatLs5A9XV7rnJmBWbFerdwTwNmBEeos4ATA4mTvTuw2C3qiS1PTKh7nwUgxHGeqSg9cgR",
  "key43": "3B4TVRfqrEaCK6BdueUF6tUraJt4NpXsHYQMVcDstuyr3JQWHdqjowhVvYMUybbNeRYDgAd4aYmSMhH9siqVPwUm",
  "key44": "3oV6NQAbWm1zymQmdQ3i3q9DB2fWVMy1hcus7BsLnfUJZXDSG5Ejn5fPsQNx5K696aXKRrVXsXHfTsyZynYog7D9",
  "key45": "4wmmFp1RSPXiJxT5qz1PZDSjrDTwPUUeKX3jNdXQMUvPbJqGkn2bv6KHSK7Tf4C5LruwHyFE4XfZTARDvDZf39GT",
  "key46": "dZJbUM1E5cJvtosebp5iBwZenyEHdkpo6D6Xvfw8ee6uv5VU6v8tV2zWzYuJ7ZWPXf8FWHQTP19brgK2UPcBaUu",
  "key47": "3FCzm4FWboeKY7DPuHemi8evEWmiHdR66KnSn9zNMhhPqgjgeXf7osFftWyjSbvijQiXorYRZ5qZa55hRHLYUY6X",
  "key48": "4frNWMkAbztEkqeUVE7asqZWNjCzykBPTR5CawpgUzuguwghko3tDyjx93qmFNVpvrhYPVDwPSmebScvLcccf7V9"
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
