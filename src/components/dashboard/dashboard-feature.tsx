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
    "66urf9L8eStEdHZ86aqJ46a7WifYore6oCbX3wdiARB2nDCD2LdCJwvDwkyCZK4ZdEfJFzbbkcbtUSwNRCVJCtFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JJVtWicshS54rmPAZtcwUf9jje74aPC1Ji1EWFpZ3saqeqen7uc1L7EVMFdgpBmQKpxnbhWUAb5tDYCNh3gWkwR",
  "key1": "QyLcCqg1TEHNKq1TuLveNeEPKYQXR6KaGMeNqY9xfQHNLtviMt5D6ZDYiSAjfcwb2qaeSZpU4X4mDi4o3MDqsWZ",
  "key2": "2r1Kz7qgHcUodHM5bpeX1zPQsEWxt4ngKUGC1K8WaU5xhw2AmVsik4Wkt2SMsCVadGkq3vMcFqay5gUWnyXYPFi",
  "key3": "5vcnizXx6TbJTbeMmU3RoKsHrdYLFRBZky31JedsWvPMiQMpUPTJRvCdwZHpBe6NaXDmo9sNK6Bc4ebsEUyFbpDf",
  "key4": "5PC3avCLV429wUCKZikTSxG2cwVZamYBmxDfZQZeQvvpKrPUhkwmZpadXqxjiXwqUFU6LUEjLYDZXdjZicJwcy1V",
  "key5": "4UVpEXWLopAaV6ft2wFVPGvGTXC2X5V5Zcf5hkwFbSe1Egvo7DjFWbqaUHGJCmCLMi5WQiTJTKiiMNr2TZ7CYJf5",
  "key6": "3ebkXhc3Sx2ZxATEzQqs6UEg7WaVywMWyuQnEfrnngKEydmz7Z3BGDyMKqQQ9H8F5mZfyeXwdbeXYprF3Yi5GtFR",
  "key7": "5CsquGSZcLWpWCdeNQbiS2Sfz5mBwPuZsPrFVwrp434Hq5dQPXhqyDLKnnUsssijfWaLnuiKUGGPepq4LNrprDYi",
  "key8": "663SahPTzyscwjXRrgxVjHkUiwDia8Vz534DKRDbbRAfdAriwwJpau1WzDaENj72PzkmkHzt35Li5X69QZoq9NUT",
  "key9": "3wPVZ1x9HvnjJ7JH2A4cyzeSjbxakwnxaPJF948BZoy89Hr3iuy31o2JbJkS8PHmnDZtKXRSyvRYEsLeetwNNpbU",
  "key10": "4wr5twCvr6oScv8ZqSXNiJLoEURwJSt7QeE8cUmBxpCznYcnLMV8NQKoarWkh3tJXWrXUt69GDJWCQazvqnnCe2Y",
  "key11": "5E9YYzdYSZvMZYBc82LW2br5rn2SJH99WA5VTZ6JznmSwtcT47MCpntxYRvG4UmTT7mUwqYzQXsdmoAPfDG91px2",
  "key12": "64YiRDS79NLbpmDKfe7R1ctJ1aWUbMXCkDxcBt7PDduZXpxSrUJyUFcuwdciRG1hHbAC1EFQG4etp3v1YUvKEP3F",
  "key13": "22j1TUi24PGEzggknuGutcRLmhwe7jrpGsyUWHnDhSCbLGRx7a36PyTYhPTw1DdZ3VAijtcAKo7hHPRi3bixhfDa",
  "key14": "4wQpHgceBZK1rd38eHVhi8GmVm5UVhpUSXENxfYtpdryHyxN7BZRBt1fjTin8W3Q4DXNipv8oej2KzUhLSPRDLLg",
  "key15": "zdG4iZaQyy37xRjizq2f5AVHdaZ1Yef6Tbd3mSnmh8oNnU2oqmQrLNXnuEijsvzkoMDpHzgmiEXsCU3jGkPzSaC",
  "key16": "3tHQWTgHpRbomCRgUpydbKQWB5sMifYvjmPkHFpVebjBUGzghXnuwGD9Ks1VqhmSn9DzBWfwZeMDEyzLcf6VoGRf",
  "key17": "2rAXnTNtB66nruqQDh6SxrrLGoZMCo4QYSddLBxW5VALjYCKxRLTGR4KiKdTG6cDksspvz2EHvXqDYsJvvdnmJNb",
  "key18": "3yy2ySJirF4oPQQo26vKxZkC38c7izbScviyXFHBzmgt5XTXvD2BbiBjsy2r6SRJcUTYNDHuRvFmFt9VnWCsoaaj",
  "key19": "8PSi9yMidE8cY7EmSQmLzQV8PykVu3rddWVnxtoCUP47A5jAuweiAUnVHomvkRhrtY4ps4uUp6u427wQLuHemm2",
  "key20": "3JiLuECfDYofCqeZUh8h48YdNuSQCqXhYhaRJ2vLUVWev3Q48yL6dFobgP3ycVCGhPvN6beJYzoz6oN6BFfxVnEB",
  "key21": "2H8oDKKD1FYes843PM1MqUxx6EFC5mZykTYbQCVm6JymXKCDQEAoddAyxBQmoPGwCyZaVAY7dQL4ueeznv9RJBMs",
  "key22": "2GHSerxnHW9YCTrnUrSfieEX27CjsxX6awgn3pXyhXjmVjSpocvP8sgote9g1C5xREdJzns2C4omhLitT9tcuzPW",
  "key23": "5o8wzE2tcgogVtTiFZMrqR7RTxUGjT1DeAwssKy6amiMxAynitQc1kq45HLhE1qDfZYdMnjJZa7nADXb256VjGtj",
  "key24": "57vux8HZMZajB6vu8bNfLLnNv1udNwzLbXs2qCBo4aqwRi69PDHC5YLNdBuiNejjPSR8CGm6hwpXsBz4aQdAgoEr",
  "key25": "2jewqU6tjwLXN5Dn3uEuqzfgBwR7FK9tevTw1BdEYx2Cbx34UKqT8AWeNqmEKXFr2qbs9YvesKjdG9jn43arqc6D",
  "key26": "qydXAfTmv2HJc1VrFBrm68cbxXo5u47ECfyGKopmK9LAf5MRckBd7ZseY8sLxPet2tGjWyNwAK7eqhLRCuq2PTh",
  "key27": "3BifJESxtv7j8b9MUJc1LvWm6RhXZeEgnxFRJ852WJve8p1fK62M1QZ3UMmGEyjfeEJeG6nx1bGELJStBiFARtkN",
  "key28": "66z28JkKY1Bh8BP6vTK4xnLicfHfSjTQfPESojjW4yTGZdTwbCSw6185Ea1aEWKu4KbdYxPRp3qrpNnCbK1drsgW",
  "key29": "348bL7KbnVryuiVEqvVu31yfMVrkt75RASY61gBJmLUv9KeUk59gN3GVokg2YvDbveNvL3DXZwbY55woZrfny5EJ",
  "key30": "3SfSKmGKotbTDzoBNwKXVN3g5bJJu8d43CYmddsnECfRQXXZGEh1EKLH8udLKwAwxD1wWUCWop6b5ZHxijcAGA3A",
  "key31": "53ZrwSCUPeFjzU1G77RNtaMHtrmGWjqpWLdbSLYUpSAbuTPqzM7pvxEERrk9yB8qaWmMtNvzKRX3gB4xT6nAsvmd",
  "key32": "65fdp2RqfV1B2ffKdL2EAeUXz7WxJRAkF3KLmY6F1e5DFTo5YnEK3pdbEVve6vt7vB7SDmrULyArfpFbC7nLPXqw",
  "key33": "fETVpgEHRGcVJ47fs4NxzzYcBUhfUDQD25SvQ4SAKdQ7fgpwjdngu6x8Gm8buwCdxXDtmYffpA2okt2QQHZvhhJ",
  "key34": "22QAfrmgzJbe5ADCy5bSdtr6TZ8YXbZSaiGpVnAWmnzQBHXjxnztH79FDuWFRiH7yP7DF2BKBwCcdQH3QdqgpRsF",
  "key35": "2Fv5skXbVMLUBHVa2jGi6b5WkjM8dpgif6mQmAYYMii1dFPNM7k9Hq2p11U98yaiS413wHrNoA4pYvy7KFS7MnUh",
  "key36": "35zyoagJ4ETkPj8tnw8hp5S2FejhBp7cRk6JHhU5QpaxaHBCYbY7KLkL25cHHZDYLuXfGDFR9P6A1uvZJnEVt8gj",
  "key37": "2XcwFy5jxYv63H3AQ8yMZfHw3gPZNGmJ4Coig529k7ZPsgUYmUPs6FiVDXNSuRNftvrEh8yxcSNvihEDW8QoGqXw",
  "key38": "2gpBxAH7TVBu6wDdMSuydzijNgztLf48hEAvWBVrSvZAXuAgUc9a7zestbMyMSiacs4R3DzG1aZ5qsjqB6xEgx5A",
  "key39": "5rTPK1qy7oEk7e9UB1a9LXH5F3LZ9xF2cn2t2KBG85FqVjRGaE7XYFqDUgfQ8QYMHYxERVdNC6mv2anKwu2hNNeH",
  "key40": "2pGRqpHBLvvHDSJRKyTGipoHSVkQogXg6HgsUAwBe4bXHK5aymkoAuzdR1RCHEXcJRdSsSgjMuxmieLUQtF1P8zv",
  "key41": "5WdXL1zLEJp1VT6z7HgxfaBNnGtAcU73toSPtmyV1jSgqjrasFRuN95vmRNEerZKYbSAU7iruFrP43PTtrtsjxbn",
  "key42": "2ZXJNwsvCk9GXt3mqCETR6pLy4wpJUZ8Mhv3AVcEBywabGX6odNwjBwHrcR3ZmRRUwuAuzXiq7cMwqKSAsckzjLi",
  "key43": "2qeRaFyAcHhqSFucBvpgjuU87JExVvSAXM9XJsbjCVz2LfQxj9gPS3DDLRXi1mAuypQ5m3gdxHGt5ADTXGuApZLX",
  "key44": "24S39wm5b3fg9Hf3Rx7V3566cHctBexSjaEvoV9qLb586Wrq9fNxk7wDkj6BYnbTkE45AAsPHGUmgYR71irQdmgQ",
  "key45": "2Q7xqvdT15zwbWZK94Z8VdEY72aSNx7xnP4Z3rJBkNVFFqNSbzabZnahS1UoiMvr5cpYH3C1EoXniV5YsXzPdDsT"
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
