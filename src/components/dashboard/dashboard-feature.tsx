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
    "3pHBSkwb15Kx3yHTJTdstxfEQ6x4bzbDkVd3Xx5fZWA39tuACzUhr6zQQdm75ur9Ay2Vqp949Bv3Ae9F7Jyie8da"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g7DjYE77nBzoEesstSCjoTHh2RXx1rkwitfS8k1VUs1VpMpKaLuy9F9dSgJrz3KhWgKL7CE9vSNncHofWMFK7tS",
  "key1": "5HZY4xkTt1N3pm1aE7joWVsB9cytCqXbmbg9N5sTySq7yCpAjcCVCV9Mm4L55Msy9LDKgjjtCy16as7cg58BUau6",
  "key2": "31wwjKPm9aiKVWRrDiP7NTaHJN8nQApPQp35bYJKNqNfZpJ2f9epF7qoXHJTWTSgBRDRqp8Lrn6yxZGtUvK5Abpj",
  "key3": "w677GMRwMoZg1fe1nmtDKVSJ4xRgnmcBBoYHeU2eJ7SMoqWNx2as4nUJbLHHP96T2ubAWiSCQ1vPtyUGcSiqrpn",
  "key4": "3YKthhAv6d3FnFhDHQhy5K1rLQwW7Gw4AJHti4b9yjg7Kj5XBSMKEq661u4VCXo1PvpH2dY7WjYJfkisrh4snP1N",
  "key5": "544gCfLhdPwaj8LkFXVB9snTHLoTMwdhAxnxijhAmFzMTUegbb3F7mrJ9qvLRC8VgHC3WvCJsE1J9oj9jQfsB2Vh",
  "key6": "n3Yr7AdjU7zgGGiwkj8aFE13HvLRiJMFuSp3NrgfJnGRAUT4EHCtyxC68c1mWruKhVXu4F325osBgzJp5PT7CT5",
  "key7": "4kTj4C2o2Y9dQrn9PqjeptDtLK7qqSbGLMwxu3yLz6y2orZ6gWRCNb3hWDTAxrzaJg43fAyeA1Ex8xjHTTjonFnP",
  "key8": "4n1P7zH96F1SV9PgLcrSuEhVBcq3GBiVapbbfD6JpsVaVz2twK7vJj96t4Wg3GRXcCxvTqBLh64yjbN6JzTxuCKM",
  "key9": "5D5astJFe5Vpcm8pL5yWVeX1qAeUmc5qCRLm8jj5xan2xz5FxsA7LqdKMkYXZD8Wi7d9LN5bDigiNvH9pMsGRiWY",
  "key10": "55CqGZ3KgoTKLgAHvv9VQiBhjRiXLiR6BUgzr7GjgmAbSz1VgvzrTF4ps4bJWN1S6jxAmLNRduam2ZGScy8hfdSH",
  "key11": "3muhN34hXguFbCx9kkzFHMnQpmkvaaSMS83mQuWTe3j9krvnJ75sQYbtzwaW5EqrpsqksN1F1Gi1XD9dk7izt82w",
  "key12": "3xm4u8J9BJ2CQShMLrX6Tu4EPgu5tmsGreiYrpkVaFM8zjrjhnREnR9oq8p6akADJBZcyGKQN99MsQnTPqf8tjHt",
  "key13": "339fsvUcNqGjXXhVJuQCB2eBtyGCwkv6hpfu7EjEHP3BJRKj1gHZHMazLyR7eec17DVVm1QbrBgrTXZe86QGnhDX",
  "key14": "3tPxh1FR6wiDgYHquKmc7Yrvb5tVduQRXFe6XrgWxvETBp6GdVpUXzt3gUp6n9c4Ccn2pBEKdG1iZrraFmGvMUMf",
  "key15": "3APojXSybuGUFuJm6o3DK7fw5jUvQ5FQBAsJn4C5AohQzXp3ge6Yev5wP2rbB6MySiQUDQeXn4uehVbikB4QZFeM",
  "key16": "5zeBc22kLKGecyFxBETWJLaUTb6faPiLUpRWvXA8nJm2Kbor7zaLnQcaXH98eUvCuMJhmvxGmCTtuBHm7qRsBefB",
  "key17": "2fSPiKiyFSxNsMK5Myd7goX7iHDFB8YCW6HfypEaVpJ6nHYfLmvYkroifYJttBEwyf3pqsCe3N9BYwKGqvbq2UEj",
  "key18": "4Soe5WWYGK4GfDDUMDj1csf1Djs6rm3ssV8r6Jfkk4y9Gm9BMhiHspFcytr9KTQ5Chgy7vahRLcnCQcB34fJdCTF",
  "key19": "5p6LHkK2nN89SrzEX6sP8pVFR9EMnMoMnUkpqJDgVosbsCxcuS59YVJyyYFhuyscRuD77gNdBw82mo9KwvVAhFke",
  "key20": "4FCkL1i25Nmw86JEFri1BY3WeFh9L4bnV54g6AG5rPy1129MTsfioy6PwaqQxocUsDVz9xYD8cZ3iki3FEWKmFuw",
  "key21": "51PNt65cnSfrhoEDnvPrQLpgDgqMn4x9ZVRtXJF7akrNutunJiTAFJTZfKCztGZehTTprVdReFxRUyowcjDq84xb",
  "key22": "4ESymHq9NHfHsNnCrYGAB3kbooNVofxKWPB4keHizHuEKL3GXvPQQgusoUg9op3kL78Z5a7XpDmK41EsXXb22btm",
  "key23": "oA9CRuvEUzBdnPQQNcunat1PgMpjmQEViDCYJBZGLHkTQ5dWNc6QPyCYPpyAHxvQekRGWUk7761pc2CWm16Djne",
  "key24": "3yfnwg92w3VFDP1xUCZtXGKPnNLwHsJuujYaEW2un8kQD4TEeh9pq6Unxy4y7bK73P1ae9EQ4cLVfKwSEjLcneiT",
  "key25": "3BF14oeh5L2nqaaxFzUu18zUQu7YQMKHW1y9Z2FUfM8i4z3pNG1R4H3XKTQM2wVmyMpXUiQkWQyf7FKMANE3EAei",
  "key26": "2fsPj9Nr1hx1XmXhRCFV5RZ1uwcrN4hHBBiKDqF448MxidLPYLpYrac8qEeWKgN1me4qbf3GoZANeNhjPgC3ySp7",
  "key27": "4j3mMAHwX9ova3eoZSfaH8C7LbtM8vz724PiK4nHVkzmdC3Ay3suzLYvSK8CJr3PXgUV69H25bvHmCCYhdLGNDXN",
  "key28": "GJ2gCXGPHqv9NeEsCyJAHe4VTnsAyY5iQyfZx1ajVyTHFYKECUve9soiTvaFGDhFxEmpnDkudNKzL34mWmfZveP",
  "key29": "tfTEKBrQZbBPxYSba31jNK5j383yRM2LspkeSUWU4P7HNq2AiVTmmgAwNAxz8MPBf2H8NME3P4QtrbUiKFMWhQy"
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
