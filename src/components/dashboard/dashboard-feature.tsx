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
    "4SxfXgi9WUT3JnZsK9Y5G82pFDvbnRgoLTcw2Puxc8WM9hyPXSGbcVjzJdUStPc9tBVXZnJdJNQuyTfGyXZ9yoKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YRxiWAFoHohHUUBXC9wJTLH66KRbNWZYreaTCeX4yUfdpwP68r55s9oDYbiWdYzHTohWcAAtgC4uqbLBUox7WnU",
  "key1": "3Jehx3d383hZzQ7BoU1CPtrqUKF3ftP8yS5ViTEKAFzXnudZh8vTbPFz8PjpCay6ti3Cxtsz3t1AiDT7Mbt8w3dX",
  "key2": "Qhh9NmsetrThyNnMPTcwZekrmTTQEnpebSz3akJKv6jU63v4dboUcNFkZ912PTAuDpv5Yzz65DXg9k9fgvwLZeJ",
  "key3": "4tTe3Hje4Qd2hbj9TNneKQ91edCMsfpqPFYqypxeH681QRLtKinownJ1T9SfFvEashD9NCyyTvHddm29HKKpMv1o",
  "key4": "4jQ9pktaWcA7FNhZzDXusx19Cwn5za5BrY6Z9Uvvz24GimYZrw3EG1GiuuRewiAdiGXrbd9At6min5gtDcFXgqgs",
  "key5": "3oWtjwe3ocvNCX4ATmTgCB1emh26hgzyvYJh8evRX39zx8xGeczwqBCoow6QbhX5dJhsddZvmNKc7BshnL9UMaEd",
  "key6": "2P3smLwS8x2N9qeESDH5x74FGchYZGTE6DYHFTihiZxhU9L3UuHGCv145tr2SXMpBjwPAr4HNhpowSD2StrKEJHS",
  "key7": "h4JjLDUYN4n1RorSkUZWjHxnGWwvN36WLaiNX6KMS8RgDuSJH1wTby9BE9QmdDv1vUbMZ7pdsbZcqEFe9rPWBgX",
  "key8": "LxAmrY6jFTKsxChc1v2pVPy9Vow2oNsb9w7t8w3n4CxRknADbW4Qften9Agc93xA6o54S3GVL8n5fa9N87LfnLt",
  "key9": "3xTrbw5SRDJwxtM97jBzHYJUpUqjXtuzfvWSaFfLqWQxMATGA6pXQ1t87RCyLF5jTQUZamJsnRzLo3goUSEhv8WF",
  "key10": "2b5w1VnpvgzuLuhZ9C2exXFhbyYSm9a3oxoymJacNqnHMrvVaXh3kUrREG3HWTQ1XSDDtgE1eWPpNCdUquFLaBtm",
  "key11": "3j6BDCa5rJhASAWxD8XUePBTNihG7qBZjvjUEa7SFeEGfLMYcJMtd6KHYcR3WujnR72i7FbnxVWVH3czDuuz9u8L",
  "key12": "2c4epm1XCP4WnmXAPShdydFwzXD7RMLgGaLoTTynJZNzR13e33ru7zyaznx3pE5DUjhZMdYwLMsrxR7CLovfLXS7",
  "key13": "4o9QrKEp66Cy8AkWDr8t2ZXYjQsbnudRQ7vHS6bYVpfUR6LgixCDrqaLxDcQoEN67B6cmeGvLL2dRqCaTiVvLfwd",
  "key14": "GmvHmQ4fSexgXc2jrDm3Upz6RA17AVnVdcx7C7QzQsodgpwqVTP2Vaj8s57x4eEFYeNq8zGd58SBvQN2G7X3auR",
  "key15": "4aAGEXECKFQXUnCBRLNNfJYUA8E85sykBAANt31Q7A2vEa55FJ4GaaitTyz1kn7QYvDKqXiM48UR9X8Ad1MFg9rQ",
  "key16": "2UnucU8mj5HXNuQV7VzCnzTguA4w4uC6UFUp4vRN6dYbThj7DAWMxwPYK7nFyRBWHBdv21NVC4KX5mQ3s8ma5TpL",
  "key17": "3kS9EzCdzqkQ8dbF478VTebB5RdfmsuquwnpmR9J5U6eSSoYFhKm41ou4CuQZiFrrRBhPP5VA79a4f2SH15HdYKV",
  "key18": "3vd7ue9XEEEK6rhuguQFcQu9scSQPXH9uwYyj65oRtTtcG9jhqSbrLyXS3qLAHH75vrt2Bb2LJn7nAxj8DwThZWq",
  "key19": "5WtvP96RXGijXzvvTVM6ENSwL4owfwBrDg2RvT9BLyUZuSySR5mwdztpJiD5WR2N3XMBBGTkyi86eombjyvnSEw9",
  "key20": "Ykhe2agYh4v2reCFiapPuPGTB1AajQXLTYTZPgmUxGVbwK2u7ybbYHT7Pgj8ShzrA3yHQ6KtSLmHBprQPKo9cv6",
  "key21": "5t8xqZWPPo7teVu2UDYzboiFNzrZn2q8j9bfFEr1GGgkBjeZyp3uX16CPMp2qgfG2roBaJCE6RK6XMdemUaBAhwg",
  "key22": "5oRGtBRrfyy5Q6AW2pxxY7K7bkRJVY6zXD2zkK8dcTMRXPcV5CETZ6o9FE6oDDnfRNK38BmFHnTV4eTEnN4vx9WR",
  "key23": "ronzVjFDZePw4YG5WWvD7CrLetNERHa6cSkF3iRaT1Zd9GzE5eacsDuSqqnTMnaDHe8qjjHYJmw3UcpNpakE4fP",
  "key24": "2uJfs579zBTt9cn7QrtXKxFiHFcvxY1Ebpqm2ZQxKvxKcBiEDjJ8r2o2qiYUEhbsz8TVD4G5bFZAbr48Heqw9Bxd",
  "key25": "2A9Y15yQXNe3uFRuQrxeLXGB5VHsN4pmCqfgHzNJ1Fa4CjbNT7B3cUwBWxHC9BdzKohZrTZBE52skBep5ujpsqnL",
  "key26": "62u8BGrvFm1KG1ehfiVsiw2X87bgvt3xxboQfHjzv4Eyzv4XTcbVGJaAc4LQ9p1egjcwPuPSanrjw5gkRQViQJur",
  "key27": "22mwgR3KKKUoodJrroakqy9fvibGw1HfF6fmEEAGGnPnw9nzMDCXnnR3ShSBBH1VTXDFMJzrCnsmhwTryrn8o4Nc",
  "key28": "5a7QyXs3eUgCrGCYFtjg2L5JoDFtH1256sXtie9nH3vgq4aaZocwRrhT2njoGMS6La2VKQCLP7BnJqdjNh6QG9eP",
  "key29": "3zNBqDDKrByhu5taCk5EvFX2DLtjPLjuGTKXuWPysDLSWMRqscYrWTnJhdD8T1vnaV1NxiHX7kPCDWQ2WnHNVaRn",
  "key30": "3dwT5sniTxqCZatacsiawvpE9YTjpmqLq3buArroNh1GT5Jf5pEaTm2x1Lz4aMNJVvGutF2UthvTz8DAEJoCi2gc",
  "key31": "3LHaNY8mditDDkD1EPA3rEWF3tTeqPHpKmWg9eGn6auJwzhGQVPHMAnH4Gtn1eDXXJ4GE2j8v9zRztVioxDBn4HQ",
  "key32": "5jmeaFf5Cbz52S2PCosnxJYVxjqsdXiRRxqKMD5Fw8qdC9Wdip98ikEuMq9SuJ7HV8JRMHiXQ8jZyYfDWv9KtrRa",
  "key33": "cHwgcCnqcCWr88g98TL5LD426Y4PQsrsrsTL8WZTeqjRBfezZ6jp4a7mcarMmPdRNqLE2LKrjj6g16yJerz9Gn3",
  "key34": "4fRVHWa82y16yzqfu932xcHZz35biPcjdUsZms2UAmD8X8yGSattEJoNXBkRfYxuyCDVkDvJTMkJ2z5hRLYz3xJf",
  "key35": "3Z3ExuaDRJPk9MyiJvm2TxAvD6ahSY94CEXRB8yJvSgB4EmGiuDkRhtAqbFyVq6QefVzB8KbrxsKWbjLS3oGY4ck"
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
