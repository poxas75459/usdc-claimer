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
    "xyjLADEW5mRNP9BpDtwx46Q2KisVMPvAaSp9dzgsJR6G6C6EA7kvNJLoVUBsf42ZSKpAY2ifDNhQFKuiaDaJTtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3shsVbznxiww5XnLqn793XBFfJ1YeALbQGhwr5fRr85S3fNVLo7wDMGk6pNr3AjwSbbw44ktc7pEkxXDJeJaFrfV",
  "key1": "2rbouiYobgJkpga6zbVLDJZopkFro5veELdiZ4fS4iuVV8L7SjU4boCWECiiBw7qLUELxQTPxDRoUkwKUbBbHJSJ",
  "key2": "3uMZhNYMtAT4UnbB9PNZzVbbDe6CizaS1S6mpYK89s1fbmbPKyRNtwTB5LUSX2UEdFYp2xyJFzPPNiNCDmfkJB1G",
  "key3": "63Xs5nDSeSNcQ8KVT5Bgb8P5uDeM2fVedgXDNWR2mdmgDvDkjHrCptKs7jjo3c6ZCmuZxuidgtYQeAYT5hb1hae",
  "key4": "RN6vuUPRqXfo5SAgJVbbbmXyFJrhuoijSxGBDkWAxJriCYdWoU18AHLhEhwuoJpesFFsc7yzzEUJGedn4Seo7e4",
  "key5": "5A4WSfryWSaoYzhpm5DencZaLzNnwpxEag6mv7RLnYUB1nPKU6yKJ45CqH8qwiPniekL1E97zjBpVvvAC3SXMEFR",
  "key6": "2hPaYfDEWrAwMzsWcoWFLK2KwtHC8Lenrr5Wx7nBhVRj3ns3bCm2G4USnccvCBjG5GmP7aYVc6NDQHbQAf5nyCHR",
  "key7": "5k1uqppDeMszoTPaUJ7iYF6hZvwCHu7xz2LZmtEAimhzERHGTvPcEoyVMrHkmYGymNJV9m9LeJXBRN8pkrhk8Uxz",
  "key8": "4WFBqfdYDWJrXmy45GEg6cgygNccz5wsQoLQFyXftWikaaXbNkHVwReSG9Px5osbfxgjCh53722pkdyVvwxyGqJ",
  "key9": "5yi7Lv7D74zmvbmyELqDxajz41Ef1Y6UoZp8qjQ2SVc3QPeMp2R8XANJiwDVTuA66SVu7qqm2h7QkynDZv4aBdEb",
  "key10": "3iZbzbwTQC8J7YS8NDUPHZJzgf7zPao7bVMUFoPjSmN2vFUHhx52Si42yvT319qWZ6QyfrrV4wFwYRtYS1cRBEJB",
  "key11": "64vRrqM2WTujt8gguaEL5YzUS9hmCUtnFJfxDyJNcmDKWeXhwqYtSDCDk3VTKzVSwRBrBLgqJmbyBLUdkhN516rZ",
  "key12": "4AecVu3KMoHnKV3TrVHTy7wkcp19MPLQ4TxkoGCJGKJtW2jdSQ3TZoLi15JJm6HiqMESd1UFfEQEU6HjHeH95u31",
  "key13": "5vx2vfmivDCrvnof8ZM4c2LTnVwcEbZK8ZmVAjfx38vb5z1Zb69tXgGRChKBYr4LHSvLWdFZXXuMV77uAQvpxNUC",
  "key14": "y1sG4FNGWukjxiuDPxrp9ATE2rWiu6QeJRdU3tA3yCANg1Muq2pF8Dih1m6FLbKzdvPtnSqSjiJjJBb72u4im4D",
  "key15": "4jfE4H3WufanSM1ezYNFx7eKu2od4LY745BsVqJrppw5cmfJCdCnf8AmM5KdKTPfrJFWGLoYUXgQr4tj3EWZoJFz",
  "key16": "48XNpkPbsGYE5tj9uSm3E6FGGgAUU1wgc6R21XEcKYhp9UyPmqNLvuV572cTRqea3xraiJhzrggFuHzHBPucfvqh",
  "key17": "4fzBvqxBw79ZamCiNeQQnK5QtxibDL35u6weggdkARmr775SwaWF89ykA3ex4g3NDD6JWMrzUa5BsAkTTnWuvTav",
  "key18": "4aHzETS4zkhW54NM2RxF36HuuN4Kd6Z159sqdSGDuoPW37TLzNef8SdukMni6bqLNwdDfJZmiFW9Jjg5prX7UZvd",
  "key19": "5fCYj8pRYCSXSsRYJxaYLgW5itjYfotnsA4qpyiZdcZYp4L7ZctFNNPGqTmxznHwi5xsFPbMLaoRyVEeH1PHLH25",
  "key20": "3EkRcWtShGWz27Qct47mNyqP6zLAAk3sSrFpnLMCcgSbNLu4bqpCKAi9GgYQuRzRxb1VXXxVdqmy2idMMHyfUdoz",
  "key21": "3fJz49R222eMmgqYqyRUdxsP5EdSvXPix69DD7M9wyyXbXdP7SGBGC5WUk4Mqe54g6CTqbCqazg9H5Gucf7pccuL",
  "key22": "3E3dRtGUTJcGGYVTfeBVTCNkeBamSD5bGkhoB9A6F9rBtc8dihKzgxn67e2F49zhwZ44GxiFX3Kfvybci6ULKD8C",
  "key23": "3prxjHNjH3iwi7AJQfWaQM4fgnx6DC5icjXec5f6ZTbjbBPTWnqbR6yKmgfk4Sp4Bqv7xD77Pj2o85JRDQjra6HJ",
  "key24": "QRiVB98orpFr6KBvcZd7bmXRHug3tQSobgwJmtDUeuSYvjgxk4tKiS7q5peVuMb21ENnukbJEn2KN41P8J9hyhU",
  "key25": "52MoMFSDkYp88gDmR75EkBbWzhzeubd9VzNxy8ie5UCZuCGuizUBRK3axfhSc5sMg2jSwdbKRVivSxSBQ9L5tnJV",
  "key26": "4tQDipadxreL4bfvs78kpWtXGMGixVKLzPqcdzQCiqLxG8Ahrb7Tbu4MbGZhjXNFHjZTWsrY2AS5sqAybmagD8Aj",
  "key27": "37UF5ki23P4AgCTLNCVBaySrRa4KE3jJLTwunXSgAxAzzSU8r2fYaKZirDqt26AhE3BmfbErY1eVQcL5E2hUWAse",
  "key28": "4q33rK4cwi5Pi7cwJeQ2NQjBbC7WPQa1aiBLmqW8rnufwku7RfiMENgijQf6d62wXQEWyYhGF6hz2itZtiAkgaKc",
  "key29": "5yrtJFceQ5PR3HahbTYT7o69mdZSHNbE7ZcrU34ev3RKfgUTE8jSbvUkFCVfw3THakwte86AfocFhxon4TpWhiFs",
  "key30": "2s1kRwqmTsJY3tNSnGntYJndHaDGU9NQ8voLc58PMMZ2foUG2Hr6KArTMoU2PNqhiHVaSBjqvew6Fs9sMBFcfPNY"
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
