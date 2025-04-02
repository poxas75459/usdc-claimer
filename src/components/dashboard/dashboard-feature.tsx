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
    "eRBheKaVAfdTfiRYkS6pbKyM3LgAwjMGtHCCFxf3RZ1Boa6QipCMWGYWFTSoTq2c425Cg8fiLusQ24GJZZ7Ebrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H7Pwe7XTaTAGiTVv3sonBZ6kpSngBFjc8DodkUHepMHRk5173A8cdvVmphUa4o6R8JwConRdDavvwV5wZ2Qt5vj",
  "key1": "5fPXf1hrZEiZngfPyvBbxxkK5dE7iHnmhC57K4TU6HJFne4DyQdE3FZ1jTsgAXXNSAb8FpJuASop2JAUdMEBbszt",
  "key2": "48cv6PKCkwerAfHiqMdnSkSnyDtCuHNLJDwWdZiYLdNELTGw8cY8dfDJppRwdEABnawsPSfmYY8BaKSREZg7MHo6",
  "key3": "5xNyyH73MU6JpNNoqS69KcBAELrcdbaKPCSKmLniTFZqogs6H4zQUfryzKASr2y9w4YxSz5tKKiYLtEu2PsapTcV",
  "key4": "4aB3VoKYEsaspuskZeyaaKzb3hAuWXJnGasr9jfP3VboxuKRZqP24xtm8R1ajHTwtXqsFaZ15qLe5wxXyrJcVTaG",
  "key5": "9FB6GSGw4HQPNBZj5Y9uyXCDy4yDfSaBKuJttd2BVzj4KfRWS6rSqk6jfR2LKpBhmyzq6vzEKoJQugiTbrF4kLd",
  "key6": "63SEapP3SSr8U9qXLcNJPUMZ1JYVAgWYL2c7irB8o7xyNuboADuVFBhSKYE2hoqeAcCC3Vvfin6xCcKPz1DiGM4T",
  "key7": "8VkKK8JgBbG7iFfNpWYsnHAzQ9CEqj6YcJ1v5QF97Gsda5oDbSs3WrvxZjofgw7N6HSe5XTEkC7Qh5snPuQRHYk",
  "key8": "4QNzFo6xkZECKo1VrXh2MR7FMULjBj52t3ZsV7R3s7yJBVGoQwHq2hi8ggyzpLMbF7maF7XmESGUjJbyacbjfh78",
  "key9": "5D6M6bfnsqZSFWNUaBJMqcXG5MZ23wzJpM6wNQE1huGVZbawwSnPxRhyvua4QU1QcxNABKtLyPwNYHn9KjUs4sEW",
  "key10": "cmbBLj22XE8aaJ8dun88m5cwP9A2SBXp6KuaaA2zfiReNbvgEiLFMGphFq9NY442kh6xx4Rfdz8rpZY99Chjvph",
  "key11": "2bw2AfizyMoSJkcgJ2eQThaMKASrkd1BeYxJ4H9Z5KdarikNMQW6czX8JdteF3TDWogWpThCdUdyCaymeaognEzB",
  "key12": "29kid5uuXkg8kjp19ETb6W5PMseTYiKeVenm2qFe2n3oLMZK6nEvxDUsXHXyMdF7eTvETqnwpw3xroT63v7ND9rg",
  "key13": "3Lhcgv2b9fneERBP5mEajSQagHSxtRMThtBH7szeEXyEKRYz2N8wGyzxZPbE8HoL6GpPCs16psbgWTZubkj45aoY",
  "key14": "25EHsruCF7jXgV4ncubhJBBCGPwmqtPvQmJfzJjybkYF3EEymByvvXwSsfz4PtFbvyYZag7YbAH7pQKfNEoNKEpW",
  "key15": "4aakqXawfAZRxba3GgSFXvitKwQyoPfk2CRCrdqmk1CLMqhEYEEgZmWExSfyE1egkcaQKv2zAvbL1nJxNKV9cKiU",
  "key16": "mGdm59F3KPatVctt99s6GKnH24TMVQApouuFg59SZbJHorgXW2vbyL8QmL6TgS2FHQYnuT1ofekxn14qwr2pxPc",
  "key17": "5n6KxLh2driuBXhPTgrBLvpj5R4FRJL1BzqcK2sQ975cnb679sgfP43gAoEU1vvcqPzAH6TAXiF97PLvHKDtkZsx",
  "key18": "5rxusTB6KUvYEQZGWPbmYPmfHUGjGXeS2Qy4Zr1W9Jo4SkcrsAukxpnAyLfeAt2SPLRVQfJB5vYZoeF9DgEtWgX3",
  "key19": "cpUX3srtmssjspHCyUVaS91FzwTs6ZSd9Apifo7BEp2Xa7g8tKjcCTjTdCAr7B8Ag8bZdNgpGgNSz5cixTQBWUw",
  "key20": "xjJhpzFxZFwfKrPucebx2CxVkwm8pqax83RB5QpEeVsA2Ae3RYi3SXYBtwfRgtaRDfdUv6paDGzXjFiRkikka5i",
  "key21": "2xsSMA6xwXMiYJW9PrjQScbGyWtP9XZApaVTkVkaVwduM78sYu1idUFgKkVFwEYxHGKNcXNuTwn3Woi1kJqBQby",
  "key22": "JYVRUHCad1wNSyMiKd1k5a4v5F2jWhtcDqpAZQAYNRsS5c2RR7qDStYzaAdUs7LH7FSfsj6mDemb6Xb5BziqbQw",
  "key23": "V2CeLHxBVSbQUpZHEo3ZvhdzFvumafKHn63wLGvN48Rpcfj2yEDvnqEYY15JJLMTVvGfvpEib1qgDNa8XgbcnTt",
  "key24": "3pK5zWEVEVGSYoVSJYgP3DCWqRdjHMkYLhU72xKcJP3MF8CsV1RKjYK76k33BtSvheZu7YfVNou9N6Z3zGd9frLn",
  "key25": "4veTMyeC1Yo6R8zKZBHUewSEWXXcbKNRCme6gqjpnAdBc5Pn5LXyzSHNu72nx3rG9rsdPnomPMVoZr2UaiZm1tsJ",
  "key26": "34c3suTcvQMdFWLGPui2955ze2RhiK4CqkeQz5JYvDQNBij1v4FYqpJfYcGmSX5QRHQbyQohsby67cvmEud2A2wY",
  "key27": "4XWQjrRRfMoZR8c6svaL94D9jjpEj94Y8LpVWoeHK4zdXYJZyS1ac6YorPGNhMgDK8qCgTbauVj3cTgUzmQNE2ff",
  "key28": "2xwXb2sVG7iRA1JcC2VRjQ8LGayStjKNoJuoH1e8FujpSvjJ2QsdnfQE4F1MTtmrPvqd9ARy9n8kMNMXLvDg41cR",
  "key29": "yujULbmnUdSrwks8bAaVnUqnedoMeuwaMR5WHUeZnYgeiqDtdBLpK5BNBMhtBDBVpogikFaA8SPBugLkK9MX1gg",
  "key30": "2GZoqSsn2T1EwDXaGMVHVWEZxZWBEWyGNwgWztt3f74ityYJyKSUSB8LgXUWY53NVCCVcsLULXnvhjhfuA4jcBUU",
  "key31": "3h724UfH3keRPD4TK9KyikDsoRKn3E5KFMA4ieEY217c7F4U9C7Q7zg7R26YM5Seeh7nquq6ei1BWesdaEPi3j3X",
  "key32": "5xFUTb9BRu8KVCwcnSRQiCa5LJyo49mruW6EnCeWoH9szWNSNtonBLG2DXe9Tyx2jbGhRX2ZSPCYE8nQL51FMJca",
  "key33": "3LrTRjRUvYcnfW8Cfhu1g4ZgDM9SAJUy15gnJ2BbUnwh3yLNGfZzhVVTfBF8WWtc1D47wphqfNVupi5tNXvcwR9Z",
  "key34": "57AjT21MVNDqtYgQM6FQdS8JFJkhoZiaFdNAA6U9GQMazLkFxmaexvkDMUs8tidTRiAnt9W7JWm4m1ex24hLFv3j",
  "key35": "4XuegbHqos4NurgkhrbFBjdJimetbPDTmb4uoAM2eYfCUGWUhPhsVUDGWtAmn4M96vBKXZExr99kDRi16mJNKees",
  "key36": "5HdnYGBhFjRzqiZJkij5djcurG7ZHKfZrZcLdPzSNUMLJFqyxGUozmmvHD84wSDteFZXx2MtgBD5y1xGTArJ9roD",
  "key37": "4HAccADSbQDrcuVtvx1mtQhugdefNfUEgwx8rGhuyPcohZGPdeR68xHaYR47GgDrtFvrMN4wfkJnJp3dmyHekWbh",
  "key38": "3NaZo9LhFemZBSXDdvQmSpUCgavFZwaS6Y65yLHkYHoJetdPRxgA3FJ1C9Sj6DnZqXLCRzXmqwCFHVoxaXoL7KRA",
  "key39": "48b37b5z6JAhKpxqda7ZcsKWYRv5yYzQ1PRMdb49iopQwBBPRpHu3icNETJEv8iVb3T44AazjKCqm6UeQzfR1G9A"
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
