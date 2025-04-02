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
    "2QeL9bbvwzA3eavnHqWuz2dzkjzU3TWwcanVHQbkJXBMRaYfQ19s6MUAMXHLbtoV9asvDkn1qfZ9vcRujRMXyUqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m9jNggzLe2vRaTmyDaHmvfk2E5w1F2bt8yv2C7t8sFzHPprfHR5qRT5T3UgwkV4o1fXTDQcD2YEb8k2NbaYtun4",
  "key1": "3n2UKNwcMgUnQiXADoyK5Qns6EfQgZUJpby7WA4RnMwzVqpBr1ZjHb91vP9xZEmZeEMHnobxj9MFVf7PwuZa7uNi",
  "key2": "67qk4rqE8kCUmZG9pFAcjYq2V6nqP9TDnkgWKKVrJhDvkZZ3zRtBzBa9mnRuR6z4QxYFxxYvizAEcqvRn9N2ENaw",
  "key3": "4N19E8kEAPqUof5Z819rMyT3BoShVCS6tv6dKsmwhFCvwK2XzFqTPxgxbRc91mk2cUk8bitm54tSo9TKeKtCTTw",
  "key4": "HkTR1fb1pHiwNqwfZrrdXWNJDDtkyxanbHtr5iKB4471djvgC9HkVonykLESZXoyu7WWt6arbXr5SkZg3MzTKVt",
  "key5": "4yvsVUxjwJ9goGEAUhdYwoSA3CPs5MBUWfsxEnt1v2rPuKRRX8HnqGvuwo6Khu8VPgRT2J7kYsrrCNiRuv3MHBkv",
  "key6": "5Dn5mYHwYhbqK4kkNtgtHbVxoHB9B2DyGba2XqEmjJ7nWKxPoSeoHsJ4gnH3mbXNaercL72wr7Ek5C92m64eeuaV",
  "key7": "5TeEe7XqMSmk8Q2dbF8uV2uYFtn9C5AbZZdTCVbkG4BhFHy8PEMXxHu7vwcJXMtXF5FRjNYYBkDCQdegi7xMMjKh",
  "key8": "3jmUTp2UrSWeTYq8GyWUQKgCavsyD1aEbKUNVgaqZ7dkthdELKspiCYNukfP9Y4avv4WHuxuk7r3wMP3bbpVUbig",
  "key9": "2K7gXF5r5sjX5VRReQgu2uRHC93ojz1oVUb4NnNKcEXJBmJs9pHS7cpw1tJx4XCu9ACPFLbirnD6wZY7iichHds6",
  "key10": "2DbqstyykszVnQoH2XSLvmmNE3wuPQPT4Je8a1KBBHQdZJTVkfzeTitMimyWXmYi38Za9fNAREvPSJkxwY1PUKek",
  "key11": "4kghFUd27rcu51VfKeSgSSwpftVMFqArvkPXSiSKNbjzST8SEWKT9qzD9GPpaexQP2G34FFhxmsLNnLCakDJ4TSm",
  "key12": "34sb12MydpUw7F4WiG2pfjsXPvSoLBoXaavFab6k5MgYoB42vYEZ8d6PZ1HndzkpqzbRBuVmrivR44jkz3n49p9e",
  "key13": "47ELTrBxYD4vuXqKzu4eD6R4scdLp3yLyjpRAADUEPhwvY6Y7emmynPNPmmiwFDrQZXW1fseXJzJ4pLXoiPsPXgp",
  "key14": "3R4dQ77STE8iV7ernwsyi5WcTrGB2qXzcogYBWJ6LU2hqvxerXkRe7GpwHH63bpisN8rv2THQvt4AiZXkNBAVR7G",
  "key15": "32T8AJVJXvYucUDb1VhSa6xpRGMN3NvmRc3HaRk6y5kRaVhMmRRUJEY5hQqGDTqP84SNeyQjEAWoXCvXLuNGwggW",
  "key16": "5dPQEjHB5TSpkFcu8LoUM1TJGntnqRmhSmfCYD9g1sw5u27W6Kk7dK5weciqfJknKJnvuYKRxLBCgC5mAUuj2i8J",
  "key17": "3Lxe5YsWEX1PDEWMXyeBYr1MwwyJA8N7PSdXSiPVYxzyvn6djAuuBSHPcZQZRccupmo17gLoSW7egqE9K1ZT8ebH",
  "key18": "4m9z6qBPqSE1FCCE7fPMc3yPiTNREjDc3zdNn4hdFs21audJWEaWDkjesWujykMXV1KXFgbcKB3LjqAKGmK5pGbp",
  "key19": "2w16ZvKEd6ReGfztWXejgmfiSeieymvpiiG5u1Y7Vf9SDZUKsdZdQWYbUuA2EL1wqaNCYuV2bAc6hYR6DB93Q3nk",
  "key20": "5wj1jqGCwhK3zyu9LA8Lxpqe1NZ9SC6KaTEuBn4ZhN9CHWdvnCXJAKtQgWR22d6onaiGMMb76eZRxvwjR5X2FnGQ",
  "key21": "3wRZow4E2DsQX59tZ4JryHSacAK7u7K2kRR9nwyq9h1EQaEjahYG7sqjEFqvDRaSR2cMjVPLL1oKMMwFqi41PjJL",
  "key22": "3DBjrVGzy8tgbp3gQSif2f8R2pm8rePqPnQVALnuV3cbVJJdAjrKreAZpszWmMhE7rMDY4cvsfrtrz6Pt131gHoM",
  "key23": "5sSj7YKxJem6eucUXbneCsrBWXEXueKFtomGBpkoNV9DoEbDPo3spCZ2uYyLXkNsE4YhUEiPZMiPQPFnE1dr2mu3",
  "key24": "5keyUwy3TDsyVtL27rHHHMNH8gUSotNjfJNhJELvGKNgZwJm4xPQqb9LerPRaXrDktxy4G1LVVyoVTP16cQkgTTB",
  "key25": "p3QJG1XkisDNgVKy6M8uqszknA89YKQJvYAKUaCVjpuN7cu7eZSdSBzVJPdWRpuQ59bcd6uGGihaPR9CwGVFu37",
  "key26": "2V4zSKZvYgZnstUimJtNS8a2u26TuKqjE956wDuNBh6rVaArHWyPBdaZegUUaL5bVymDSe8KGRp53LakAC6Fjv9h",
  "key27": "4rVyoDxFUDf5QrDT2aEN7jEtkTNA5NxpWn7EV48fuHQff2r5jWZo8pFFb5EGMAHRfQZh6MN3y6FWfMLetLemij5t",
  "key28": "3PZgS9SkpTebL66bGNuL34jLmBmgfF67Z8hwRxAMLEWeyo7Wxu99RspMCYYQcgm5jehFPFVkMYqZsY2U1cNhrrkD",
  "key29": "5Jk3LnZhWn2YgkmhiVxygvf8XjwcdVMYtPJBrvo1LV8onTFVyFZEiox1LBLj9tx5iuLFsTSWFZyrtPVFX2JB2SjA",
  "key30": "4j4RPxcqzXoAaW34Vf4c5q8Xp2n7hyFReMoGtx3sogAMVnRtbpM9TmqVW2yyMNBnwb98nnbfKMCVY7vJefXbc8nz",
  "key31": "2Kx4dXnjaTuWuKk1DH18y1yNSg8M6YdyjF2WmGqAt4VefYWrVSygBxaUKtUhDtf67AKHMo9qG2o4CVcv4PrB16V9",
  "key32": "4pj49EdfZ8tVzibCfvELf5uYsRVRCuNCXcpaLPgp4oMC2UbsNfJhK5iMpWXkwCGgpoojiSs2FAQyWmDSLZtufaa8",
  "key33": "1XfDyNk8FEM7ykuDsGw35tezxYkmWBDD1FnncnX2W22Nzg73zULS4k4U7XX2Fpq6k4EDy8JvCXmu2ZRdSckeu6s",
  "key34": "2cAkLBgFeZiGSW3Sj1cjJHJksn97KphDvV9JDzsZbSdjXRaowszkTz9ztmu8tcUF7DcnxuVvDLm7R41dh4wbVybL",
  "key35": "48iyKhfDikRq5UTMCJ8Me7rS8ydkddYUfya1UAci9DHS56VG8vkcjVsYF9TiaQKW8KG9fLGXbvR28yFRAsJpF1yG",
  "key36": "3zHsUhtp5JRxWK976eidAbaLeTqNjhtW28ZkcsxdQrAPZGFKS7jyWe6Bgs6askmouY9GVgWfoJxMcbTZ68uff3G",
  "key37": "5mctz9iC151SFMfh6QejzMXWUyAq7jDJEk8xZTqYvWVBkh6u1zv5VHQtP6PrzFKvisT22UzbZYoZsUdtacaRqiCr",
  "key38": "qDFgmHi155bEADDsqcEsZB34Yt3FHSyukN7sHFXGUfc5uJjuZrScye6VQH3cB57bBBk9p9ZmS2T2VsY8E1GiDmk",
  "key39": "53QGgdcKXvi1wgpPU5WefNYqz7LPFj59t5c4wSBvpC8N4ngWXp47WLAMBztEmWRajq7BLwv2778Ai8Dh7UJ4P4tk",
  "key40": "3px91Abf9L8bh4zmbCqHxuUnr2xAdKXmMYeKPWCa4pKnT2g6aqsQ32DBzmFXcgJPBGhny2FkEAYUHMoWgfQLuSxg",
  "key41": "3S1E4oBhH9onuhfyzu15Ldb8DBFoVHFtnCahCbYCJwooBo6EZVJZULhVQRq5KdCGQWoyq2HjSMHEsRvfZk3w46Et",
  "key42": "2MrtnviiNWrcYeFZU83XpJ6rtXVGcpfV51wTCwJJuCrzY8c8GAKyjHHGCTpkJ3HUFy8fCws1proxy3LzC5itoxLg"
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
