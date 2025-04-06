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
    "4HeieFtCvig8Pq5HapPG5MrJC8sT1yYCZHj614AxwQ64G5X496XPuQMSYUV5dnQWrQBckXt6YwMxZfYi1kJq5Yaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rnv7QNDfcacfMdq7jCvJHjk4CkHguS8FfnVXxGKPyoohXAvozNRxe7AmpW5j4bmWVeqDPaUJ6HGDW9CsAYonmdP",
  "key1": "mftfUhUexoGdrvpiCCydut9Qo7WHDHq7h74FoJUpMCqejnKEGjij6vwV7ZLs1DdZrapVuLBKuj5UjUtnkJrCUuQ",
  "key2": "37ER28uS2EKjPNoyVvMNrSKYCtJJJRMScYQYkPHfmmrxP9fhBKHXQKxxMr4HcTeiTYmCMdkBRPUHckLeAGa1DpvD",
  "key3": "fuA2hLims9PEbBqPb9tT3bZBohj7NpJKCvx2JxeXXDxsJu16wDGzwWV3x7vE6YcXsN35PubHmS2R8ryPmdSQbLs",
  "key4": "5JSTSWpm7xMKoqg2VPKhXJPBYtEUqnbMptt9DyCH8ZR8dVND7nbd9EH1TVmyWUsdN41J3vt3dUFuUMWGWkmjaLJu",
  "key5": "2j2zaExyQZkidbVXqg1SfG3awsk4CsDATMj44AKarmsbNKrFZPFo6BVG5qq4Xf9qkbhfLwnSZYJSZsURCnau7BJq",
  "key6": "36SbGs7gLtdXabztSUUchpGM4hdRwuEhxE2xzuYXxzSkvFUTb4yEgNEAcfUwzJ8o5g2NMUnAFV7uMRr2Yz6GJ5dT",
  "key7": "56wRfshgkNAdLBduVyPURPwXtfmU9LHgAJbHMK3qJS1hrW45tn5t3cu92dnYnhgkCyPBUQaGBRXoEBAsFr5KKD9E",
  "key8": "35t44Mfyjf3vgixUBGRwJA3GSNY9bBh1ZK3A22Ty3gDQ3W1W8mTJ2FoowhGqij14F4xBVN8S4ZJjFNXnUL3dpBPv",
  "key9": "3Pvvbm6xAGLLBAJhtY4Zxc8ZjfXy2xXbk235HijJboXPkhzX41RFXdBis1LubD1Z11CWJRrZBdKUFL1wQSLQB1sA",
  "key10": "EjQq8T4wtsWJo8jFkxoKtgcAaGKD1EVaGUQ4nH24EnHS6KCB5neCczR1A1fq57p6h2iXzWrUERpbmoqKvu5gbMG",
  "key11": "LViANduQgjedc1W6wNaAWq5Uyp5dFSucAQzXGe6727jmdw25wJq8hCC1VVEzEfeH9LeFDybMDpwSbEENLrx9d6v",
  "key12": "2yJiZ6tvrDLDp5pTgq5TuYWocZXtr9WztNCpmus6mSp1KaYXqsgWmBdSUu6RqJsaBXxazp2hrTYUQaJoAMMA7Q9q",
  "key13": "5CSSuNBXXyfs9WQKVKS6vYCu5yGwAhpDh6MpvaMYFr7ACYAVHoGPiyBBrQ4a8DzwTXbFLPP2aW24CNNSbZngBKMm",
  "key14": "5rkJUwotw4MjCWjc82d8bEhjG9nNMP65QrNzwTGHYYoWToHZQrvkeFVjeHCaMeb6av8tHpBNMYejRrHXXFW8zpt2",
  "key15": "2wdVyMELxysvZxoHyNgqeiJmSLba3saoaxAFnUBrhDDKiyLqPG8npdxwtofedKMaS8wmLGaAqXpmUQM8Ee3edrVg",
  "key16": "3xyxNBgX3hSkXZ77r33eaDkqLDq6ChJWDLBeTCUgTVJDEhmT7oCf6P6yuTkZtoJmZ8LuHNxPrBfJwxeVXGwR6ZL",
  "key17": "5ZSuWEoGreYBn5vGN3JcJy5PBqmNgLiAUSNG8N64Ad96S7Eti4cGq3PU5HVRxf4z4LXsr1VJWLpkiEJn2aR3ys3Z",
  "key18": "CPka83D1gDnEqsL9iSceTdpbJaNXVune4TWfnm9eX1MFawH1cPytbk7Lt6zzjwYFqFUR57PHtDo52WLcQMt85pz",
  "key19": "ZckjgemG5Nf8yXTDkPXfRmQymhJdApXeWTGoixPW5fLKBLrb7QzXGca4zzJeevYubVSqHoTaaHZfFhXxVx4ZJj2",
  "key20": "5ouzBV7z9uW5NfxYTB3fdKTWwxU4hj57t8x4eBerwsUH1AvvbBCLAAWB4NzXM4cM6abtPD52bGB3RcVwj5NyCA2q",
  "key21": "3epUeEuviFK5kjMs2eGYVc7mrTm1NLt3rw5BPaGpaVvyTvPdMRPLC3qehjYNRyPuS7y5gipEMtgHkQeQE9E3wfhR",
  "key22": "5FbaWuNXm7wwDzqAfSGmPaTQLYJsMbaBhPNWk5fF39hW7eDQvjtZt3dqdC1SNH75dB7grCGQh2p7Vxu43zMmp4Dn",
  "key23": "GBexU6XyFDnz69Vd4EBGDWQBTbHprpAiiog5sXj1ozTRerFPz6Mr89TDeZ81eMjM4vLhXWeU3zU8mT6Kv6SdGRA",
  "key24": "4eXWNYHaxSLkkXd6AjzirK7VDEJLqihQpSe32zSuWc9YcnTS2E7fFSyjYTqJQUgZhj2VENTugN7jAhvTpG84vQVn",
  "key25": "2QwqNBpfsQN6SFUPbPfqmTb61FY3AU2Vwew76nf1hDio8tg4KKzieR12B1LxCxFQ5HSs8gbtrmhhQf4VCdurzuUd",
  "key26": "25F7ye7WFsPjCg5vWB3r2n9Nmxw7XvBh26xRqZEgrLtcHJcnS62XWe17W7tq4MzV6ZWStL6LmVTjRsNSftkY7q2k",
  "key27": "Lok4LfvZWZ6btVTs2hBAtD2bjrLF2y65e1KbQeKFaLxtp6GS9xQQFPrYb7Lfh67n8teH7BmgX7Rc19LKwmwZ18k",
  "key28": "3bXFiJ43Pv2y9rXmTxwFe5visadMqkDciBrgkHXtmqGznRoNRypg9Ed777wydfBFeNBNqBYei4Z5YfL7Gfm3opaC",
  "key29": "3pfxWLAcUPVVYpHMhrvyTX1RqCJjcxCn2xSVbcorqVjhwZA8eFzoCeYbkroaLusaCwUQAQQsfE97oS2SSXHxRV6q"
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
