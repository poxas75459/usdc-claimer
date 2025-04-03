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
    "4AqinuhnunZkbFL1uNR4jpXzkBci5YFrzwkXQ4PRSskPv7riT8bW7gQ8sckr22Pq81am2auRUcZZRnJd25Dy5SJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YZg12sgnRdrHbDg1narsffLZKvCajtN78tkfJTBSEAprAnMtEj7ShAisjeE7ucc8i8LEAWvR9gpZkeEE3gqAQhn",
  "key1": "vESvQ9eyPwwtBzyeeJ6u1btX8fthf2hM4DrKoq3p5fGfFAfyT932F7hEzQb8tc9cvL6PvqbTDHggTi4dqGWNW5X",
  "key2": "614cZD6t4FapG9Kar94DoYProhCQq7qt3CdhieFMi2eYhu7J2YpNzWgCU9gwLSAFUEnGV4TjRyyXHBht9zMViANA",
  "key3": "32si4Dy8jJgihxrL1Upr9dqPHpnadtHmdwmXr1Ang7Q9wkaXU2T4DY4AVRdkmeqMK5DdYPncnei5SdPFvBHBEypz",
  "key4": "2ADy4dwfi1DiEptsMK7dvktk3AdSZ9WkEVt7ZoPqZw8KcTqSX97RUS75iwptq4Cw6gzXELkzyJHVargH8uqudr3z",
  "key5": "3MFomCXdfuoza5zZJJf53kh5bCYM3RcwUM4cMAqCt5wJ84jLhXD6miD6XCjSdZj6q9f8eKet1WcgUcaZczuf1Tt",
  "key6": "cGhe34dmT8Heb9meNPYWMRUEQpeEkGDAM1zMQmyPu79FDZq37bLY1HikEvvkNZiG9HPed1KZZErdGyaLLyrXDSu",
  "key7": "33yMMG2gCv8eKDwkcv5wuDT3JT6wAieLaV8cDts6zkn196tN4Y1XKTRBiMMebCJgMjjmCtFeFQW2JFzXNPAZmLxn",
  "key8": "2GKyfnsHZizVPLpZ4AuLpet7bSsM7gYzytycHB3wEBsDzqVUetqjVRTB5iVt3iV5VMza87JvW1nQrHNDr9Vtm6Gs",
  "key9": "2nbg7Wu9UssaEZ3JDLHSrbaKv6wFR8kfWwnnRML48NrqDESJodcUQJWKw2DwUJgbKvBALrkMaDkNt7FvB9i13JKW",
  "key10": "5fX8Fxgx52rh6XtgSMXqQprTMg9HxpZd5xu1nxxw5MKWkehXqPM1mVJTmi4P74XLa66hGMQAMh62JkXNLeL8GuUx",
  "key11": "3J62F3aFcJqYE8Wxe2hPk2ZnxYSjx5YBnHdWYc6RjysaSGiNAxLetDzKgptvNiCQkd2RZsqhZo7Yz7QGWeZY8ym4",
  "key12": "62sWEky9skAYcQL8oXynTEGA56v1rvYYovt38GAdjEG5Lhrj44T5daE7ySmCt4zsmyyg5wc4go6Jje9NwLjCHbAD",
  "key13": "4VmgCwSCfuAdSTvxfx2AfdkCXDEspJqavLGASnoBxBMytZHM7koiZ5mnjf71XKYdFLeYoU3C8TWvB9JVYxFDBUW3",
  "key14": "2hKYBGCudTo2etEpuEh1E5CUCPNNBFWUMqa7TpVqvTS4k61Gjdk5gwnnyNuYjYHAUA6PbZU3YvR1ZHobX81rYBww",
  "key15": "66ZntDMifoPKUP5fzP51bkKknp2NoK3Sw3JvfpxUAqLZoJLYKTzo4W4k6jiSPUYyf5EfX6RyJ1bWkcodRkJ6mrsR",
  "key16": "37zZaurNAeiadv1Z3nNEbTCZXoYJA5zJDyfXdyQntfvNwJMZrvuMJUPWV9hLcNwKbiRvNJzfen2f6FjMG7pUpmfv",
  "key17": "34xdCrgkkMnP1f1RyTLHNVe2dBdnyXXqhLDm5ianWxVbYVUjrb7dKeA3ZjXnP7KSDwbawyyQm7JMkvKqkHbbQAB9",
  "key18": "3LCsg5MpfuLQT5X27Pk9jw7PcWKxvWvPmcde7NTJNUg7hxHqgm4EcgNwoem7XDwdnpgUJeH74LBALC2jpCXYhSTv",
  "key19": "3idNJJhULkXVcMt4eiXUdmSavbktffg5m7FWEQ8ha7jZ4ZSYBVdef1J9nN5Pj3vNiYjHH3RS5zqUr2ZGj4r3MMzg",
  "key20": "bArDDCuMKi8nfvgRYTFGVakA1Uinqa9rcw8ow4LcaLSfFWeKv3sVahiPdaWvoRvTkQCPzgFTDk1u9xCebVyru2s",
  "key21": "4qBBoVPDKt1j51gVwRr5qWD8NaFAgsMidM7gvpEMmswqNgRZMTUWgA1nCurPbCcx4tfJxrdKThR6QKLY4RQpTyDF",
  "key22": "3YAafoTETswX4wB4GLbEoQ2eML1WRAgS3NSXvji5diDsbcPtSr46YCBLwaJn2cZooHbXWxv1pzHkxVMp85fnmuWL",
  "key23": "3GxRviDdpXqcf1TCe9N1drogfHwReZje1XUDa4yyj1v21wShnMAsr9DGHNQzEiyBfU6SGwHHavEn2Mo3sRm9Adf3",
  "key24": "2g4nPUfG1dvfmMPUjQTLTNSoPnrSNfsqwWne7LXtvHLXAqgiqJo7MsYMo1c21hwbMzEnqwF1L41CB3texwARHTj4",
  "key25": "2394TbccuxHEqUWnczSPniucjyTjspwCCUXKwMKNNwwt8rPKDJfgtMBkHQ2xcrWHKoc9XXJuSFUnArVRn6Ak4jEY",
  "key26": "4ssVQm4F9YYsUUPeu7k84Bn9Fbn9R32t9wgxBEhJPE6nbDpLmKiv5hwYFXsXoTGzAEU2vJYrs7cTNnYYZQVA6TAR",
  "key27": "nBiweNJqxnfNSkHNLBjNGkYD8Nfv4jgtMKnNKnDiNrStrshg3vTQQqDTLgfeqTB5HQ2ejaZesncTYJ8zJn2o1sh",
  "key28": "gj4PuuEeNHbZonxk7y8jiZeSzaGHwKD5hBD6FHVzeWFaw24EbbD6SZviTHmk7q2aGeVfFugHX9Zc8Jq3cyGMMMP",
  "key29": "z7iZ8DpBs2wTnyAVCwjWLKaqqrUJm8SVJ3maxhQPWpgJt3KPLPGn5jud5pWsNf76ShRkZjVU9gXY3gKkY3q6PEZ",
  "key30": "4oWcSueHGYNS9xeqiruh9PFLwVnxujsi4TmZNjCz9GkGuHdZ5GM4k6z4d5fTULSC17HTJyc3zMYLYkDuZAiU1snf",
  "key31": "ko29J5VtGCtjH1HAHWgenTqiNRvHXis27PCs3bwvYYLiqVaejrXZrjoncJuQaAgsSZEgvwj4MGV28cMZuAcymr1"
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
