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
    "57aiUWMS7LB7GpFYVo6d9HVkif8dXoGjHA3bMKyckwZPYntcp8tt3PdBYM2Hqvrf4RSaD6rRBsXiwfSWrEZTYRtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sZfrCLA78TsAEp3S3rtdWnzmnBseVicLmb7HT1xCHaDsCDAMfpi1yi871CaiiMqk9WLMfQbBY2PsJdPzRE4Dazy",
  "key1": "66hk8vkw4vscP3YxgHk4VTtnVWYsZzTDEnTFi69jhug1cobCJb5YkV8sZkGRHGLSvCu2W992yuvBszK2hRdTiyy8",
  "key2": "3rvYiNLm3Kkg61wqCsvJPyNzW5nsPeUz6bUjVt4E77gLVXT2R3EJxEkE9oCiRteTbwKg6eQJEJx7Xpn1NZVdQfpx",
  "key3": "65tqGNoRaFScF2S1FGpNQidedceBVV6qPCgRgiMAsQJDBtjSu7MvZHwEPu2TFUUaMyis67jJAWbhA8WR9Jjw1SX1",
  "key4": "3Keh9ozUmz8AQC2TDWvrCQH3BVpQ2ctyupDBM1D4inzVTR6KowKsvt62dyTMSx2acvAaCy1VXhUDetgkgRYcAdmU",
  "key5": "eoGp1fpDYFB3s3e2G8Z1aAeHDzywq5QS5yC7Ns65qymyPsf1quncgdrwg8izA2KjyLdeRiE1oSsAavoUNMDBLRq",
  "key6": "2ghREaTZSw2opivEt2RW7Fkccon9UTFr67s9do1DwfXsYgCVH1DEBY5L2oGLrtrFKo1Cb6urQ5P3757K1CjBQpL",
  "key7": "4tSKLfsECNVSXzLQPJZbHjo3XHceEjbkFmrvUq7EyU1dz3bpbrVPzQkkMG1TzzXxVsNLynjeiaB6bpE4JEqJ6sXK",
  "key8": "2887PWa8LmDQiTeYdRMpgRQw4LZqDHCCQZheaLezwaBvhJ8mAZCFGLiCMa89P8aK7bMuwQtGe2ozHp6yA6eK2ag7",
  "key9": "66vWTVQML9RamzDguUWchX6UVhSKTEY6rnjkHNacjSRmcXMoyTYdEs6EA1U8EA5RD51WYA3PdKf11NgHVbVKPzLM",
  "key10": "iP5byaXe5urfLr769FK6zL6KJFVwgU2KTiKhkijjvK33NFbiRkh1VCupPuEpiSnTir8Qv7F1oDkxAJgGE81Mc6L",
  "key11": "274DR5neX725JiCh5Fsf7TKjLhMrN9KHV8tpNtKAmHY3MDWETFEGvKd4hSAkVqdc94LSgZVC5LB3dWEjPXUjYjYX",
  "key12": "mgfD9WcrXHZT6rzhym6a5zy4UNsrjg2FpxEy6scYsyEH5BkD5A6FDGUcn3Thf6Zpdsw7r3FtxvS5xUSrF8Q5Rcz",
  "key13": "2Nw3KDRZYCqDXGqh6BRojpzKwe7DLzcKox7fYtkv5R1hNTfB9XjuYK7pBxQGEjE5Cp6xSSfagLjH16P7bwi5AfV1",
  "key14": "idGnS4dkwnYxvqJbDKcSnbJz9VHbUhxsoPrKJAHhchmBPVq9kb6vVUeZJAALo3R5esNaJrZmn6Tnsnv4X3WGfYK",
  "key15": "5UUVderAWeLbycYafw6Bed1rCPyW2pvx1h3S6bGnijqsN4JXquEFVEVDz4DdsTTWYT1W6a696yWHVcfznXP2mbpj",
  "key16": "3tYy1HaNJCE8bjQvWdDWiMAebTyyGAux7AHSxPvcZNNPixfSEZtNeeVeFzi8T7aPz6xaGJx9x97rpMWmVNkC9HGw",
  "key17": "2N5iemH3ycGgGko69HFAL6AmvRutEM4Ehrxgudi4J4qCHxdDAKuHJZQQo3HNfgRgLzfEfZku14eNgw2se3EniD8a",
  "key18": "2YT1FPrp1bVaRNkzXiWpGpk8pfZM5Fz24TLqoYzfpEHRJpepJ7iTtdERo9nGQv1KtQQGUZACMaASdXqVqddAyg3i",
  "key19": "4KqGZ1gDg9jYUPkTspBUNgTTEKaoTtRViggEBKa71S6XmQSTvEyoooumm2J1y3UmmsEriLLWa4huQgj6c4kMFu9N",
  "key20": "3gMM5WTncLbtbd9t1f6R9dpFVvoecfCE2tFe2FePKMgo2Cugty3sogkfJgLMfawXUbJnWXWURrYP5m862BWJeuAH",
  "key21": "4t9KcDpBRPY4AVkEtHdfQmjHpbTgPnNWmRhGjJPEb6sSk9qFfENUGThFS9b9rKtYXZTTMxcng13Ef1o1ZT7nZ88q",
  "key22": "4RDdEjymhkT83hQw3pHVXrvBLvStPn6KEryn6FXxgYz5bH5Rhq7oFQ6ETwyvDzJGUpEqQmq2Q2qhmV4DFKnAPamx",
  "key23": "5MBN1z4ksyybwEa8GrUFPfaq3wCSA7s2ytusZ5XVqz4RzctuKek2fRU54vGA6X8anS46PMRm7i6YtbE1WnYSADmk",
  "key24": "4YJB2dJdoJmEscC9EEMvKu5xCUUAkow62njeXP4EV6K1WbQFtVdMstDF7TgLbQGdKio5oM7MjQR42yjqXdKuDH7s",
  "key25": "46h22KpUCQ6M4QPSfuHUQrbe8DvPUP7C3fpmNDwCvgWxtamjjYi8mGj7CF14gSR7Wc1Jc9cMHasaWkvrB5kGfbVA",
  "key26": "Qrq9nFzrtMHLMJHpasH4JuypXHHDBtbnz7zYdXXLEYHw1kENszzKhZJfZNZspDs3GP33YZepqqXebziWGPacTeY",
  "key27": "5ThgpkqZnzAE1gEn3ZZJkXaeNFVMP24nonETsqa6g1C2WuPaZHB4WD3e9GwYthHhELuUskwpHmrpQY1tbTUTDSw4",
  "key28": "2BMYg77vpAn3vD5v4Bifz8asSmMsiwVFMgMUVVi4BV8TMK7w2VzykQC7FFzHBt333nSQQVRrhYY7Y27Ze4bNRmEc",
  "key29": "3B9NdaZoH3B5EsxqxJRWpMGMek6H6HjVnWXGeQJR1b9XDUiKxGPfHATDAdER7Dk4qfBmLke54uc771zhVctUZ9Xs",
  "key30": "3pGFyX2wZRwRxva6R2433oWiFNgXddzSc3oyHX5a6TSMoigHjQ9wknoJ1ZKFyJP9mQ2LuhTQK9AkdJAJ3JCnjkUF",
  "key31": "4JaNuvKf8vRPg32nMV5TEmFpjxQPV3FonUhVRW9EqVWrqwiEoQL9QXEy7pSZrZrubVe9U9o5FprpkLu2ZSvD2Vy3",
  "key32": "394DFgoAajMg5AZDyCs7LgmQeKu1Qi1y4YFvPf1vsM4fk9wSVj15NMbC7SCJSs5SgDcFzbpJtgT78dY2AqtRFDtX",
  "key33": "2xPpqHMBuFT8TGeGHzJNsQpVtnCicouQDthQySmCfyUkGPxUrHX32AX3Go5sLAmPTCxqcTyEeqzDUd8QgJt6H8DR",
  "key34": "4W8RtBAQV2TtcMCeWQkj7KHQEVKspgX6K5WDGnQ4jnqGTTRtB71zHSf43wFhtbzj4xxqCYuUgFhL857iojaMj8iz",
  "key35": "3QDwTpDF8TCvuaJ3jC28bbczVo2goHvSk2Ak5LjANxG79UtRzVysYNjo64RTwALcDvTgoL5pthwGn9oJ5cU5SkK4",
  "key36": "3TPu8sSmDZESjYu5ESBEmU3TJfDXEqPWRa7dU2a2Ch496R39uGvqrPXPeUZCJYEpxMQRYbSbVTC97kfe68wxqSky",
  "key37": "4CP7y2jGXPcPBqoN5ZypRLamRjroDoGUNCj5sCggTp12vbMWFtgi6NWUtefBWBjQxKwT7Q9tWEYKBctwgz2gnMTR",
  "key38": "4bL7suD2Nt4Zxhn9J8kQMn2kjPWvhZWygiuwxb5kxZbLsV1zm4a4R4NVroeoz6PnpUXvfH2FxSPQvWAjUZhMUd9N"
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
