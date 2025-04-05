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
    "sXTxMQzwsjeboawhB3n6ZLidrfnmHgeKN8XJecC8dCJrHFm9pDXzT1kAPjvYfSgJudr1QVXTAuCwxk9crThMRWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dKM4RXkLZ43Ue2rYHSpH6eF4N2jxcuFQ3nXjeGA3HjFRP6SEWBva7yD5LhEHgmAu4qpCAoABF4qAdXPwpDyJ81o",
  "key1": "njmXJNuLaqNHSTMm2sd87kUTze2JGUQG32Gvrh6Cr2w4643dtxfWEy6fWyuM7bymDaDTzWju2Z5AMUja3XnNRtt",
  "key2": "4jmUW5vdLmtMdhSqUioJdxQXZmPuvTziWkoFw5TZVMZkbU8v99bgte6qbW2J1h7q4CaLdwR8HhsLGCCwMQX2jNS4",
  "key3": "3c8EpjGTwqqKsBtutmw5MXTpek6R86HLK4SoH6vE8d4fktvifx3w3Y2rsPCzoGjYVJ1xcNsP2GdKdeTknt7XTe3t",
  "key4": "wSXCMZgJk2wk7ZHLYH6aRf6MuvqRa1pnbq5fch6yngRJwp8jEoDf6H8kyRxUam4Kug1wtz9Dg3ghpcVxHzXdDdf",
  "key5": "2igNrdCV6AVFghLPGysrPnc7MQWo9Mj5kVxipDF2nREy9pekZTAUFiLmNeEHCpdW6JETxKbNgEczAongDZbub61H",
  "key6": "Sh4WgZQUGh4NPeTNibXscFBXF4XST2VvS1WAeYzbkAEgzLxqqEn1YjGmfg7QPvrTgJ3tdT19A18fzBuwZkqbGrg",
  "key7": "3Uw8xP9jWcvUqdJCT23PbVv3wPKc7yPrSAfERmnzmHk212rbmfVRmoJgrv3VWMj32fnSDycpWFEE4JJfm1ohAaiW",
  "key8": "3bXPJoU4uSi6M3AYJ8wWkKQwpSf3Qy3FVXjKDwBUpw5NDjdk3ATHKZ5PDiMuXpiVZdiugxvaYTCLhUycYKouJGqR",
  "key9": "2jaYoKe8rJdaPvyovZssUWvWH7hx81PxhBfgze9j7Zx9FkBueuPfDVFqUbP8vunomZfwvfcJMBq8eLMrF92aHtDW",
  "key10": "2eiDx7Uof2CkxYvEzU8p3u6Kv1aHshCFimZ5p6BpkJ1BPHYA4KKe7zfy8csQpfTsshhputRfnWKZUXghhKKUwYeb",
  "key11": "kAJ7ak2cZCtLmtweXqVk6zpwSY3Edq87ZoDK7nBg3MmKCqUJagcxS2BuJdUE42ZD4wze5GpwzSohfzhENfw9HZM",
  "key12": "3NbZuTHNhk91okVvVGz77QZPzdgYC2377b41Caswm6iYKYVaWFA222TucZLjN1B3Ke7x4bnmUmyqjUJ9qhaLeQPZ",
  "key13": "dPhrz8sgwDWb6WLnTxPewCk3WSysHgDrbs96YjX6erZ4GWG6rMzNAympgceFXUhxBSPfZnGmWX7pp1aXQcVb3n9",
  "key14": "3ebWKPh5t6udrzCDXGts8Jgz6btTwus26u3Zmwchxe2BgnghUsDmUB4buzM4xecR27onAsL9z8mxj9YSEUbAA7rW",
  "key15": "2AVt3gkzhUnwFFq2ahP6c5Fm4vxf97Tp4AhoaPX7HbtxAHFCnknoCJirVXDtbCRnthDHSjtenjiGwUSNmMXPfY1w",
  "key16": "4R9Qz6ddXv1PQREYFYM4594eGV2UnyfESae3XusoHVUtQRemASRt6Cit5LbL3e8bFFuQWC5cHW897Ysg6H1TMseP",
  "key17": "4hLsbwm5EmyLk9jsLyn4LsVVrEVMC5hurTCFoJixMvcx8dcCo3v6xjEYcWxmsn96RUrYeMTPhzjPF5uPGm8uvoLs",
  "key18": "Di6V5SoTMt7xuLz6Gos9NAHHwMAqHFN92srmTDWbCUFxCpaAGa56u5ShbJB6hVNiuHAvYCDoZj2BvEDu6yKCaJk",
  "key19": "5M1PftgiiqM5PjLYpYVcWoACSkJKvDwiq5CEPAm2mhN44aQZfhnpHgMY8KhTSCF2GjgPvmikrYkVXN3qrcwPGPgL",
  "key20": "qaJWqoehx2vYJUYqYrpxALqqLPuWVhcJZNnkwt7qeejLWntLrwZ7Uan6oovfkyBF1njJ7vd2oJRyqaKi57tefgn",
  "key21": "3aaxVmMit3D7nXe41UbLUVHrNEyuqA4RwTDjFWNKKzUfhFKejPHxnfpRET5mY1zpC8TVGMVNdQnDZc4iMgdZVbmv",
  "key22": "2dD8exBbCPvnuYKNbgy2fm92s3i5VxR7deXiSDuQWSZPuqJVmMScfcrgBzRcT2VVeuiz83wQUEAxogJfqktag8PL",
  "key23": "4PRQgQK3rMVi5amGpjkq6fsQTic931HfnCbxsVTtuPzhNUvGFzDFsqiq2mFojKaTiLrWZXZNEdo2irwgHF4QVE3H",
  "key24": "2VCNQBYG3FqsyHj7xfuBGM5gr2RV9xkbKjWeNSS7eyTduvMxCC17kiP9WxwGLeGQrEt4V4Q9Lz89yDEqYfjze6LS",
  "key25": "4JFgprDJz3g6B1G5ey9RAyAnpGj4V11bvTU8moJu78u7YNoJTomT1oEW7jj2ACWZsfDRy1Zzq3XsXirdXYTFBYCK",
  "key26": "4McSqT9qVZYhtj1ZBF8qiWpZx36AfMa1awgW3oL3djXbQ9Da36kwSg8zQMqhJHsjQFNjJpRdS5crGgyqh5pVjwBy",
  "key27": "2tUFrhkGRTBYNMN9dJnvyAKFYQLwkFyHhD1QUnYi2CJdADdMqhqnA1Ej6VEKr86KM12fcqJNaZ7vmZBKMq3sAmZo",
  "key28": "4StbXoromd7XWJpkQBStU9AUTwNfuHVJ5RvjSntxT8f28wsPmhYrvCdNEptHfMH6DmjEz5yfbzRythLZgspZ6smM",
  "key29": "3ayof1DrVmExFaiLZypaFU5ovgj2tzbRN23fkhgT5Cdqo9iGE6UNQYtcEML6AAMRk6uMKM3RYDDAT3K6zoYYthGF",
  "key30": "3E4a3qswyYSaeWDyA9EGyKqd8soDkeSWrayRPNMt7XJ2CNMY7YdWmSvJVgtLkwSnQMhYUSPcEVsfTSahvhv3eVzG",
  "key31": "2at28KBSG3Lakho2rP1mv2ovNMNrhqQpAJAWtwtj5QNfDih2DVUkhENiVTJxjwwSy3SbTKBVrSuBbhs7HX4DV8Fu",
  "key32": "3wvPgpWobXDakR9oshV5hZZsXUBj8yw6MhUyVq9N36UCyDxbyuPKyrPZcgdoXoou4aZ2cc9ZX4BHsbdMtVnH4zWo",
  "key33": "3S8zJbvaTXVFh6qMfZnYBzos6qiHHPEoEcTyddd3dcQAzFsNdzDh66MJst4H2SPAagNiiAEMFVsFwJFPX9LrVmpS",
  "key34": "2SJHPHovDhQeMwPQ3RdQZ7eKr13mvKpHm6qiBWz8dSmmfxsqB5So1Nsrt1ur6EgPo7kzPFWeqj54sKEdfcsvFjUV",
  "key35": "26YQH3bXiNz4A1jhaLRyW9JvG1vxL5k3rFm4j2PVKoBJMBGshe5pYGc5CHduqSJYWrXys1GpwWS3sfWJ1irJKr8H",
  "key36": "4cwMRt44KstXPaCEEBfx6B8inXM3HKgoBSNQTpFAXFhVujjUYRXPtR2PpckvKKnQZHADASTdbV2Ty3V7vU6A8WgQ",
  "key37": "2T5VFLpgzqPRTmftTHESEoRB6Ysfnm2r9vNFjuNcYViQx9BKpc2dEroKrueBqwNwkMMpvH2sHTTEP5HHAPuFrodt",
  "key38": "4pYoNc86yt1JfjRsL59DCfq34EcpVBRb2qycap9XvoJZuEnREnnc1mEP5qkXge27jmZakS8jx7ztYqh9zt5iz5qZ",
  "key39": "4rH3knCR6iHprm3nFVmP8CdJgtiajkxvXVPCJsXQFhT592XC7YcRSaPvj8axbWcdbz2kVz111B7TBZ7AF8y2UXES",
  "key40": "4EY3K5gJAfjSpe5BoGiGcshogwb681CQz8GVFp4egiV6GCi4v7FYNgJp2LEEjNVa19hn1mrMU5XzH76HWrnRYaMr",
  "key41": "4At4FrugjnZtg5AheoVpiDypnk3g3x786t97iK93jA3Xh7xGpqAhnAK1s69Mmbugm6KkHZQkF8GZFjxwHyYobVfG",
  "key42": "2LaFzxakh1nqMt8jjXhPCaFYPRFsuoKFMvSNU3qKxhGB8BDMfVQeRt31jTdytf9KgZnxCqwrf3EFTr5kLND6MEh6"
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
