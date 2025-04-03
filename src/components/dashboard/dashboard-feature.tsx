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
    "5EnosR3gjtbSt5qUfiAxpzYMduiuH1ygv2eGSAm6SCh56f4pdfudiNb6GRJAigVGqe3EYF5fGhi2BvoxNJHwa1dX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EJ5UQVRvbbmHhAS4pUDqgxsWyvEVN5L9y6R5j8VVG1omeD137QsvpHrtKvu1h1Kjrz2AVKYzSaYjREAt9dxXuWa",
  "key1": "2ZSZP3EzgtfphzXeZHDKSmmBuZ2RyzonR1wG2ZgxcFkcEqVqpE3DLxjgio2AMbWhFAZ9Zez95GZ78nhz2tXDNDMZ",
  "key2": "3QmCGGetqFEcgJJ7KK6QqVnD3wXnakKG38rPouP61wRchhNMcxYKpLEWrqRPN2QcDaQNe4hzv1Ky7koDRa2hSmju",
  "key3": "3F7VoKH4qqCgfZU87Snx67tW9M2E44FaynUYt2nWX45qSyMqKDZ6nGFJXr2srgTJrxsktPUaKKprBUdSQrouFaFe",
  "key4": "3ogpxQ4C4NhGMpjGbTs8btXgGUeAKqFs2tKtwj5yo9KFoAfBwqo3nVEHt9Hzu6hpWDNVSEUVPRNUoiWum46xk1wH",
  "key5": "3nvufEzMGdhC4AhQE153JJepT9RSskRccvsQwyEc2TL93Uf6csBCg7VSURwDon3TUs4q9JntsEZdDS364PFtJpPw",
  "key6": "5tAAVc1vrbob7KMVCnhZGr28cDr8qy64rsdmMvtm2pAqZEkPWT85kJATPZdz1VT3WPZja9c28vAY1CXC7FE8Lfwp",
  "key7": "5Q4gj7P1e6HVSvfNT2D5PHfdrAj72EQ2NaAhQEHRhZJ7jGBsic7u6FdSghb6uqByKVtocTCky2nVi8jbvgaTHQCv",
  "key8": "58oPiqqudHVbQ5NCH8tkakwz9aukJ19oA46AhgUgKgiJnaNpzt9ZFYiFfmhzLhgoLSuXRL7HtcgrbZkzT543sdw6",
  "key9": "6WHpN3S7jDWThwaQjunyDcA6RHfjvG3MqNkYVyAxVacJq2MLLXRTdbtqPFDppveymHA2HEYza6bnw5PLHGixprh",
  "key10": "2PcUNx6r9m92RGh56tu1TWYYXrcpdRe1J8HaieS13ThXhMEyyKVawYmT5j8ZPT2zyoJieJ79yhKB9DsRRTkF817r",
  "key11": "46p5LU79ygnWgPGg3cecGwj9W9GkV6a8hVR79FE7baFxprgggmT3oRiCgyNAJr1xqyq4YPebXJGmMSzMhDahVNqC",
  "key12": "3ZzzT6L2w5shanUddJBjAohjmnmWky7sAvyKTkUKNxwrQbGX8LouFkhS7HYeqAsRFs6RovKFoHoHXUwZeyRvRzC5",
  "key13": "5S17DHTfjVf9c2eqbVNbZkqCUVsQpyq7XeGoDtD4CuG4cesdRV71uJmagMEM7ZKXKQYC4Y21HZn4LgHn1ruHyRd4",
  "key14": "8XEcJSscLCgZ3BGMJBHsYKkwNSLbAZ3baxRDCnvkX4pmDhBc8BC1yuq9QQb2BEG9pZXXDKX14WXkHjVS2ofy1Gi",
  "key15": "4u8UjjMxCamGNe2QTWUqdPYhRKQCwWogsKWLthrAJ1mbNhxazd8vzkDDajZYtMEe9biRHLTvgUtsUnxfvQdB1oSj",
  "key16": "4DQFAaoNQV6meSwv1Wrk8HLDUBUyzJx6cMnu3Y7j9EvacnGbFCNxRRnZP49BW46t9D6kVweF2W17Hvs4qnXUTBnN",
  "key17": "3qRk8eDzxVjcb8rt6ty98nTqdFwcNNiXn233F85aLvu7BcxaGe7kLVSmxpLY8TdZm2Gm5ktPPjYmv9FUC6VwdQm4",
  "key18": "2WkEGDqziTS6k2U6Gj2G3YunCeERs8KQqc558q3VkDn39UeeYafutT2qBNxGMpWBNXx7UV2mQ4cZjgUxtGWA3GYS",
  "key19": "53c3rQgtJHC7X25jVbmoJUPCtQ1RfPprvazhvWpCfyRF6ALnSXyp9PmTQVNLiDwCyEa3EBvJfLDkTbcoZVd1qsDP",
  "key20": "qkLDGGnS8eGBZRg4cZ3zXjUCbkjhTnjC1Y8HAt2GkDfaLjHCqdWkWGtLDPJG3bceTps8FdLv1vvBKjKNzMM8gbF",
  "key21": "5XnRTXEmWwXH9ATGMiQHo2HuiBzsnFZQeCSg8t5bPcUZBVwE97NnRrUvqaUWzzBT3XoZ7STMZjf5FW7ffHC5Brbn",
  "key22": "5mxp1Z36W5ZTgK5MZuFYgNLbxpUa9Ynjo8jxyM3vftATSB8QaNPNAVDqMSvrkbGruU19xTBPvn6r77RCaJU7E5hs",
  "key23": "2p3ythNNBwxaT7FTMk9VnWCuiHuZVjepkZ5426563eULfALg8vAH6XfrxzDqXRr3h78HXYn48bgoG7bsyBTQCZok",
  "key24": "28ySDXprw2PVTFTvhsQXMrSfDST2DZ77dj56KrCKi9BHQrpwgqYQpXUwf4x3yQQRm2BUkRm1Zx78VNCwBR6AEvGH",
  "key25": "51ggh9mBofBwNnwVtjtmdL6MKmFKW2w4oxiiBPmh1Z4YYWA6EgB6cNzdkN13tJcadPtzDQJeWVy2citpFrx5oLd3",
  "key26": "5XzBHkeEuUXSSyJDsaNKWpXoZH4sD5BUHhJVCVXq4oF4vtbowVVjogMLsyp6Z9twNnyrEh4oXLg8UhexFWHsMt7F",
  "key27": "2pWMDdY31XhrJV8HQaPHPYVvonfUMDbvpQs19eRnVEMpkTtbpZcfyLYEta86MXYVqhBeBL9FyjRpRvPjbg1E8Qra",
  "key28": "BfEG8w1ngMBKdNj4gu16YJj1uwHdvHdggjJckGdA31WXATyLH2QL4R882mGVf9gct9xLwPCub1xmGZcsW6NB3q7",
  "key29": "5P6oZ8LCneZQiZ8i9FjZ3dN4qCoRnqckTYEoAWAt6xM7Ckyp7xkv23xe8eM83AXojk5zqePmz2k4cEtYFrZQ7A9N",
  "key30": "2FTmdy6fT1SR4JVNJWXBtXzRSMFn3GrCDVxKS89FqsDXXBr5KmCSSxd6RbV5kbT6GG1UQyAKtWeDYd9dazXtP4rA",
  "key31": "4gWksRne6eV8hps5h7E8EFrgFcyDBxeuGCNwehPAM9nSuHvfZXUFd1PwNB8vAKAeWQQodwWyEzjpwJ4qKd7Gqb1x",
  "key32": "aa9drtknTwSqFuBtULR57aib9thHVs2RzrWv3FSUXh7mwzLazPjPwtqnaTHEkProfXu1yS7jP4rcG8GH2gKED8k",
  "key33": "5BRNJMaEZ9uBvXkcsf8ini9K5cQWhc4ozfKKFwpvwjkrQLKqLPkojdHjwki89DuupWGZxjwsei1jK5aZuWwgMBcJ",
  "key34": "kQRDbjNQPYdhpU1DN9bz5gVtNE13SEcc4XCihezU8FuEVNc19wdH9dAH9ZCc3pd3wSCM1pueyUARb95FRXbbqeC",
  "key35": "5DhBfi58a5UEm3NtJ26NRvJDtqP9ykzQojsvh5Zfwz7rLnmpCTyuTnfTqF9mpuNwq9grNFg6nqrY25HAXTJLST74",
  "key36": "3SoFZAbcReAp5ZGGQTjiqjZYRSL6YJBEZ5dV97JwzvJKVxakAEuussDvVRY582ofyABmHVhWJvnwZnJd4DG5vXLP",
  "key37": "4EGqudBd1rGyuw9hyS6q9vZB4LM85fX8XxEPZ6U8oF218bcqGGqvDntD7Xs4RqrwZdgtAwuiuHpZ3EbFCyjfTh9X",
  "key38": "cq38r5Wk92guxm9YoWVkt5nsp3JpUv4XBFE2DPfDem1DD4efZSqLfzecdjLwaCj4VWW3iUssjaPMvHYzVgmthrk",
  "key39": "2dex3U4whL9W7qCCxgotrWwwdYYSnDukxgTs3Rqbo5YwHoGN49tKCFyn7B8A9xdv5Cyn5TaevLmUan5kmca77bKt",
  "key40": "419UHR3MXfXU7kwZ8VuRavfRuhGNZHDKxJbcVWbsdSkBFiemMiHuMVcTAXT87CbjCnonwVq1LLHzbuqGf7P6AFhS",
  "key41": "3LpdtFnSNo2hdX3FZqr8tqDow9MbUkJ7GCYDuEWpx9cMtf5S1KDuqQmwZEjBs6XALzXvJavr4o9XBoUgxYUHxiw4"
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
