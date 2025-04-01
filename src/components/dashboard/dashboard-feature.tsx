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
    "22tApZ2265zCUKui2eGrQcEupR74kXvCqUiHN9cNf2iZzLQgunjGYvudh39Xt6x7o5nYJStEVzrxkqxp7PQXjVuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uj8gqa1dRS6fUfZ65oJJ7VJCrpqBAryhoPWfpPwenTHkpApt3GwvoZERb1TJLZuYFxiCiVMESta58eGtyMhp11Z",
  "key1": "31qocKcxDtLieMowACGsBkuaN7jTTUcNbCLDXJMTqeWQcMBkgnqLCeJ72jM4gfFLRNq71hAQuN7HXartyDZfAMPe",
  "key2": "Gbyh2VpeWkGyu4En7q9fMCb2Y6BHYB3bB4cPCD9m6QnGqiLXrqG6fbH5RMJjPw6ZDvW9LCgeqpPyserAbVdCFei",
  "key3": "4tHvwYeuaCaPrXcP6VCsaxeewD8rZ6rEgDVdAjRAaCzEX873x3PKPMFsQqrcfhcXon7QU6M7nyVzJ9qgxVGmyyEq",
  "key4": "4NhoKgWnmQcXtZtWNHGozbbd35hSMXS2EmKK2YALY2AVtkgWHSjTsk6AE7MRnR8UNyF2M7XpiYCmZC5zt7VNaxNP",
  "key5": "28VQYu2zL5kp6f8BqbeTbmVS5RGGCjXv5GeWGCk1hyCKLRteXjJG3E3U3QoNMa1iNRcdHLUVZu7vGp4u6rcyiBv8",
  "key6": "5trxJvbMSwUSAjZ49hoZafkP8d2mfADN1HpxWHYXTDfayi1ToiEUJHFPQLF8QGm9KKkoABytCSi4FRmkRKHLxbZt",
  "key7": "4X26Pea4V7HjP5vBuQc5Pr7yaf1WFddETU3FGBZ2XU7jRYW1eg8wjGufeBsNQFH9jKRp17WpdcZzAJTKpVkRgWCB",
  "key8": "DAtxppzFY1mMZWNF94psM5pJ5wPVB9mosXtbDBRs51bbofgsWjLggUjqRMLPKhoYPzSwpMgYLJShMpvxdXzUd1U",
  "key9": "49HPseJtTBs1jN15s4WZ3QG1a1i2UkPfBUzTUSmHvCK1HGTC8nW1ubdtE8dGZgsgkA4o6g75FmboPqZ5z8Row7uc",
  "key10": "5yoUoWWmkFg4aHnM8cyQhHyViSWi6zjXgK1z8ED2EMJ5xVb114fKy8Dm7v36FHyqWCfAwZDk9ADRBbkgvb7qMCKP",
  "key11": "5eoudHdWfuLEqynxhGBh2eLjRt4Akv3TkknSDHMhTSTqNNVUTEjJJWCJuvsAVdsSnSgy6YrtcaKCCs1RVFesrdcG",
  "key12": "5CE6eYSUS3zNB2w9kHonCo4gzPz5N1LBiRhUYFJ82EvmnqS4jtJWkX9twECGxHg2DLDT6k9BJegJ9Nwzw3Rou4vv",
  "key13": "ymxUzd5pwAiypd4twUN3qQ5PMVBv1nBDEvp7CbRTtSQKtY8KX6saeXGExQvCi7NiPom4QCZMKgEyQzGCtQWYHBk",
  "key14": "2aWMejudhJhCNJ4hP2T6cKz5uNcgSnuUCSdasAS89HmPEbgQwDRRyXqKP9G3RDZeRaXzD58VooB8WEHQU5BjTt5e",
  "key15": "5BCFANiUHeTEGJTFunj2WB9Tctnh3ARU3R6cNvA8DEpd4XchTJjXuhu35G4PCnjLBsZgfvYH912PEjXswZkjn3gB",
  "key16": "4HgGdwPUw4SSHJiiqK1iDzTgN38F8MowKij6HHDFjXYkCayi8jXcKCsc79E9kowH9Eic6VVLuTJxEF57vuPaUvn6",
  "key17": "nnjkvwcQjuuHo83DxaRYsf6HzV4NdkEy6USByzQch6rNgnhWkHJAJJKJU2xSzbKQjqH2ks9U8wQeDiytMc9Nw9W",
  "key18": "4rnToYhJ8juAdVkNGNLNzfdLjixsAeQ3r5aD1isVyPjr99zKBrjnSozZT8Mx6eBqVqG4svmwsNNSfX9UXB1RqW5b",
  "key19": "4JashxmaWRnQKfJddf2sG6Lh3pcw4zwbW2gdm67Qxzkj1e26ZzH4PrHbrdchxjv94qRbKQLt267jBaAhECb5eJeN",
  "key20": "4wJCKJ4R9Jkrcos2SDsChRQn2D5dt6K1FiCb4DRaLxa9y13wvhYrUjtrsdLDb4RRARL1wPXiHP7PJULozDmBTujz",
  "key21": "3QDGEoZWP57kYnx9xYEkSUk8UbUQU3D1rsBphUf7YiAYgTDyNhX76YKUBQcETUZjSAJTRBibLAcYY3PFK6t2XnKn",
  "key22": "62bP2o4NBTpZfxcDgyUtFDySEAFFoGdfbnWDFGUEmz5LkVcp7XMdmJTVuizUgnrZWgyjU21f5AgWK7pNzUJgHdTC",
  "key23": "x5qxdiQaJ5b3c1WNdcNb7eiNATazDthpUWCiaMnJ6v28y95gDLReBPf2H22XUnAH8jFzQHGTtSpjjjwx5tz1PHb",
  "key24": "5ihK4kWz5Bwb5HQesVCYSiGM1PH38qr2B4yfGSRv9vB8SHLXq7wSAXZmhS4rQrQjE7jgPcpbJUpdbQmH9hmxoMgU",
  "key25": "4EmQNaHpLc3LpUkVPu4JMh48MU1p6Z8Fc7t7Mj4ZqLn4MdHgAEquKRjuoeaQ7MautajvDP4zxr94d4d5C8BGb7ZJ"
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
