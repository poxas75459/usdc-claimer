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
    "v73UNjwiMdgmJE23pQhJpznct9tKASdGzHCsypphAUcHfDCVzSvUpGzNt4y72fqWRPWQfiUfRdFe1yE6X5ELwWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VnSkgHhcYUcVhXwwnDCVXZjP2f5tW4Rzu5d8wrXoDi9EzDTCcA2CbRuG4vJ5fWj9GNV2KmjkTcUNdPqSq55Lq8s",
  "key1": "4zoZPuHJz3uMLwrVPAjPS6CBuaeg3HjDQBzmBh5RhsWGFVGAXSAH6eGUbuG5Vkx6KsfzaAf4GDNiffj5ZBiduDDr",
  "key2": "4zq7ob8HRiwu448XNDyB8ajGZANTFTMFH2x6dwjS3K8vDiQPU4R5xj7cte2DU4vjvn7tAsKXfDqyTn4FLkyvbbUv",
  "key3": "3EXY9yvQWMxpZTvnV2DmhdHbzvnFNaAmigPM4nAnVFEa8VT8xZXze3ASDQ3QSvhRj1VufjXiJyyLp6YsGCst9HhS",
  "key4": "2VUPJ74QoH4PsZqHJmbPaMsokYYzMaEvuTcpDp3msyjQ5kpEkMv1j98bxaCHwVbSE26FfpQZVzC3uRhowBjGVgD",
  "key5": "VjokBmbmSZFb4htNRkhy8WSRFKN1qqSNJTVEa9dhq8HjFPHNqfXBz9J89vvuDBjwPPCMAeyRF6xuQb1iz4QDD5F",
  "key6": "2mFtsAZ825XTQPJvyD6uEwXUXjGgoLkg2rcwNpjowvHP5MLksqBh1c8g5qDAm3ZGgUR2ZoBJJTM1Bi9MCuBUxL8r",
  "key7": "4oMTjQuxtvPsoRm3TByYE5vQMa2jvhc3v2DpdshTkYn91VF55RU3gEncXzCXvxWLQh7GwTsS5ww9J9LSaRCySvNF",
  "key8": "3m32usBKG6r6XQfiNSNMwTE5WQFDtCjtRkAW9dyetmhzepQZVzimjyg9xBbeywNHYB3MH8ssJuGH7aoQv4724MJN",
  "key9": "24DhjRgs8fKXEdqdLm6HmNgjssfNFK3kNpbRf6f2Y4TWfwkMx1AitkQLSQzjunJqBsG9E8337p3EgjFEFZrmthgL",
  "key10": "5kyE6GyykhUpGEdeRMV4UsVBnkXqjDo2s5vaqF31BiDXqDq2rjNPwEw3bkhiqgnTBjJj2a7K32ur8mnBZ8r38rFC",
  "key11": "5eo9UTYNdq31JMzFzDhhYJdm3PjuM4fyfdmGyDdsLaJTkvrUUW9fiLfT9Wd9kaD6ASeakiksdhWvsvinvdb42rXH",
  "key12": "61tcjrsRVms42BrntwiPKxq3GJH9ERWjLCfrnBbKCnVP28AYKrSddSSFKFXUvq32Wa6GNyvNZA4un7EyXn3i6s1t",
  "key13": "VtF87NZWU7619VeU2LSGhhq5XZ9E5t7pXMyWh5VxRBHqkg3wh2HpxZmxKKi1a5JAXLRTAp6cTTNRhQ2JVbudSnG",
  "key14": "5rf4tN81JvYZ4ANKRjK69vJHiFe3j2eKsLY8cAaHbaCh1wXepnxL4DrVrqJrHKb5DpnqqwZfpozDkutut2RsSEbr",
  "key15": "5N2doVwjsJ1muhjAjLaZKeV86esKNGXcdLqhjNo6Arw4WWeSiJ9xJLpri1SkN8xaP3NxCQveGQr8ZuHFUhmt6UG5",
  "key16": "9TvdiRVqXYeGLge614v3DC7BAkTxstADobE8cg2XUPfZkq8CmzduX47p2qjezaau5U21ZuP9SHvTqMbUayQUmxg",
  "key17": "483q1TGk3SZ1x1vhbkY8WMc22Z3jJzajjSzG14NNngoN8NPWGBBbp1HkhvujLsEVXQpTdK4jW7nz1yEfcB1Y1sWj",
  "key18": "5nXtTpXDgFj13oqq2jm3eLWxeAGkqqjH3a4WMJqMAvAxbon6eUFoRV5wCNyX5HwaY4WGPa1FYWV2f1zJVbbxqAAU",
  "key19": "46QrkrUaiqDK9PZWpHC7WhT7rgzhct5DAdLdnJhG6yVtnPTfxfGSWD1GmAxD9VQpNYcQpomaiH5y6gxXNGqbX1qt",
  "key20": "4TUws1t81PegUjStinQJQT9KS2V62i3GpLWrnWqv6Js7rTVwGTnXJoSEwTrM8XsEUTqh9FhnXxmeRaBuTUbBWTuk",
  "key21": "4ftBv5f9gHexzsmM7MNwwx2pxzFWvE4aG3S25qEKrmsDVfwLE49KDEt8hGVgApgaaTUavMco9shin7Z2i9mJ5Cwc",
  "key22": "4YKpJQhhni6m7NBPMYLJUrEnorBCbzn3JKHCmnwZnTstuBVnpFcxPmvQJUtTR1rSkeZCRwYoXCL2CQPXsvDRjqVB",
  "key23": "5Div84FGdtfac8111TdTJfTs6ikwfL22JvSWvbFsHSYMV22gk9JQBBNkpkZDw8DZhf44B1whAG2TK7kVR35njZaD",
  "key24": "2tUtQQRrMd4EU1bNcjNxeQ6QXM4sL6GpnqdGDhHKCERBmBngQxmWx3QuguzNZo4svKUHsc26VkTsCHNJF6bLccvx",
  "key25": "4MkEjkJ1BJBS3bsnmE94adcfn9XxT43UZz4s1zVbdkSQM1U84rf41YwRDd67GSxS9zk2eruVijCrppgYDcisp47Y",
  "key26": "3hMstMS9HRcMKnsLMX7eA8HDfXfjZ5ETfA4aLHr2ZxMKoCWVCTMS8ocsJgMas4hHAHpGXLBTn2r4XnWs6w2gyZRv",
  "key27": "3TpVBn7TmiHVyZj2Vf63pGK6t3CQnpGQKk3sw9G6rNwEvVKji3fiThQ3VHRNmhAdfrwcmH22UBoA4WFjszs1SHmQ",
  "key28": "2s8cZz7o8QZBQgdcMtTnTPYPvUbZFGj5b1izcFftxCAXeDwpPpRHg5mb2mqF6Uwsf4nJLcetM2CdHJcs6rSAUrGH",
  "key29": "4ya2AGJAPVzeWvFDBmn7GqoYAySctrLZMshexpZZrpJkJ6uUNBLcFnPxJ7vNZ7u69AYs8DnvnazP15WWtgTda7NW",
  "key30": "2cpsJzGz5npSN1S72vG6US5JDDZGhCc82K1w3rUT2FT6Mt71vz3UmSrCRhYrxa4qTdtqabhHCjvJs5vKrCiLeb1d",
  "key31": "5dfgYw81YL2CGFThEsLiqLv7i7YwagRW1zGgkBqSSZRb2WQMJ48UtPmHFoFDv1iGTVdcosyxd7s94QkMRHqDh2Ck",
  "key32": "5f1L1XSNQqr2ZF4VewvkiCBMzuwsQJn4YV9ZVg1raT1rUTqRS9c2aBYnHs4owoxrykqNEHP7g5Q8g3nBNCcy3hqq",
  "key33": "22kfnTsYuoWRot263MHyu8JLVCwDwi8Cmz3r8P9AZxw2T43NqQP9t4HNmCiWq6AyP47xbzxvYRUeK42No3rdP4PZ",
  "key34": "3vVXk9f6cfQhXbGFiBApiu2jP2d91rQJVJN1ixqFAJQtmU8A5hVLm8gjW2HHr9bLoh2kbMEPfzxjK9DhWxETN3CM",
  "key35": "2K3szPtrT3AKzfVzpM53dX9LV3Z6XMDVxSr45kMJt8e8x3XJ5jccYThoAKy4xKs18d7anNtrQSXk3b4ysgXYf3uu",
  "key36": "4SpfokcQ9mkYAa39F2nopwaw9M3hXnYCo5nMSYbe7J3GudLKLAEAS4PK1Z9gDYVyeJFyrZmwyfAR9FMbEwhVJrwA",
  "key37": "5oxLKTPBo3SX9M52uHYh3rXj9rWf3a2ZHZwGrLK2L9kgz2H7K4AHDouJzLbpKFWqG4P7XCSUPMpGmJpgyWD6Hq8p",
  "key38": "2JnVeMyZEfPNSbhbaRKth1CfKwMeNsFGut1CxFXc86BDYH83aeDpULKM1PTSKMRLwdvtp6n6zmkkrGC44gbHwscD",
  "key39": "4uTcPewsdaF3wB4J8RNoqSZRB6FqzX6FWftgYwWrpgRd8cesFMqasydR6UgrgSLa8EUoJV7S66bJNvoQ1NrfppgU",
  "key40": "33ChyqKAcXus4NZHyBmxPGpFN4xC2vBBeY83Wcu77cVwpr88bMHPMe9R8ERb3cPG2X6nRTmsgqxy38HsQv1TTiFa",
  "key41": "3CkLrzcnjFGND9HwEqiZF21qyat9yPRcFUJPKjRt3vPBYVXSyuiREfSAdCRQmQob6CJMbHpLi6yYkbK6yMX3B1xH",
  "key42": "61pzdomAz96aajyGgD2P2GvhgDZv95ES7KcsNSTiLarGchD3bJG4DaHK7hjUTyuPARyKqvPjVceNcGpULStjoQKU"
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
