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
    "2gjWShg45DQTGatnM9fuNSJYrWVmM2nRrL7cuBNjNbX2kDw1e7VCc8GEmifJPD66LfYi78pc3fujbvaiS2q7y4NH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Su1GevnJU9td1z4cTW7nRPD68TTeoJ1XTHFzsT5CXCrWag8zEPdwf1rEucF4CmGLDsYUcsrhAz44ymeb8yC9j71",
  "key1": "2RCWitsT9g8T8ke9tomVAa8ZwrxMpodntYUVWRqsBoQ89wGL34CP7EiV84Dx2TBePReuB3FWdfrzoyexPsqvEAsC",
  "key2": "tSEmQqM7FwBNj68rGgi6SFYk7cBrnCT3MdeCkhej9a4xwJvXVnB9xdbadr5yUv9UxENUGoSanmBWePpmn1UAp7q",
  "key3": "3Ac4Lizt9BJiRmTbW9haoyUKo7vVuyCFubQrhKB2hq95veadn6S9X41vNSea5RGMhjSgG5nBvdxGWrAc3Mier5dP",
  "key4": "65fGaCrYUA5D5fvxQerB5KpPxTkBWmgWzybd92sUcEPAdG1AfWMxbtJuobrSusuaNvKEkJHXBDTj9szPgk7uqBEK",
  "key5": "4BKy3tawr38G1o9QVTXSXc28CGANGAQfwe2XC4vVagpwcUxAw3bpfyioMUT7C37SdHXFHDcAQw4d7dzhMyxcUKe3",
  "key6": "PkbNuiZdurXYeznnAvcJf86ohKSdmWuFjhdPjQfxmGYhGWkv49SSjCPbYT8FD4WErJYJvQKTpCrqz5BTgjpUt5G",
  "key7": "56miWUo2VkxQvqKtsgRzhpoeeyhvMFjSkpfgBBizjen3xCk3CXLhQehFR4u6NQfUy4vch4FadvXqA7cLjF1YratW",
  "key8": "i8RbBcfFVf27RS8WmvRPvYKbSx5ukJy8oLzGpJcLc211PsUpCXDUL7oWrfAS951wSrETRFgWYfVt7izLEwUkb99",
  "key9": "pzFYciZVi9qCYZTFJkv5pzyHgwgrwB37ySrmmQSVcB6GdwVxGyMU4Hf5HZTLGfSi8H4XkjTzvcVjiEgbRCF7axt",
  "key10": "3wGZjj9gHXvAg5CYcVv5ufwK2XdovQJzJLpKH3jRBFhHL31AJswBUukDjskhtVHtxYuN85EsFh2Y41q87MQ8WrJB",
  "key11": "2d5FiL1ieBcYoVUsaHMRQTVaWfb1Uqd4CDqPNCrNj8jBJaPVtNumZZSp7ffW2E5NQLtCyWvgj2FyfDiAAm6fUVGp",
  "key12": "5iNrxUoGHEQgfode9EpeUAwhHhfzgHzv3tcWw9X6TFTF9e67dzMFJNVvU11s5eGnXY392ZZ6ovcQad7Sc3V9jsne",
  "key13": "2hRfo7qqaGgmfDNZ1nby2PbFKbpExhUgSZBethC5deZGycomjdx55xvCVEPKuzVPRHrPQMgKL5jx7PF9ZBGrULnX",
  "key14": "3vQptkxMTbriY5scmdTbocDVxzYXssBjMjXnxBaLxpqBq66TayLUCn9rK4zv8SouXb9F1vVhQ6xCh1sya6EDg6pp",
  "key15": "xTwQZaS23xnnexmzarP31gnaxwKC7fCxwK1ethVZWzTktA3A5MiRN4AFotUSnsqAj26tBrVuXdP5kFw4xxhYFfm",
  "key16": "5wTA3CDAnntPoP5wjD1UTd9ADXXpyhb2Z4xoaY8ydRcWLpViEaFSizBU5kn8KfyJrzENfMppvAyuDNbaYSYf3sBP",
  "key17": "255vQkgWfQ35ZdN2TE1kmsPri3ND5CDfxpwnfK1GU6ptgcqUmSZjzDVG55D8Nj1sPd1fEkm5k53wk3GVpBbc2MUw",
  "key18": "4JW4UuTzep2t5uSAQ124m9SoAW98uZ4xfXYaGDufWmNKGddNFaKtcuFsHFdQbN2NsS7UxV3icW75d9A48mnvpbbJ",
  "key19": "31nE7qSEi87eohxfG4qGbXAt1yqRFyuFoihGogeTxYSNMVBCB7BjL9MmeHn1e2FgjmQc8J4BMyTmsmdGduKjCgbp",
  "key20": "5GhApm61y1tkn9hsjiJnqoSem3zkAMFUteqonW3KeoHDmtJKfV8SXySwGqRj4BxihdPgjdh9WwJtgWa1sE5RCN4M",
  "key21": "33T4ReCufMErwrycT9zGTV3Z1TgCgtdgkX99L7DXgQKBa1thC3nvgUzsGbX9t375w4ajTUQr8GrWchbWfARVmB2m",
  "key22": "49M6uu7NaRzKQXJxAPvCXXZT5dumnKFMW1cfjoK7uiwtzRKq68HKTmhctAb2rVpCZFmRHsNpYjNAgNW91oT9AE9d",
  "key23": "23ntMVx4fgjhoPtDXQa9GBtMzn7ngEfR2Lh6xceMcNVW2U3hj6pSh2g6wTASeqNG23wBdbep9ESLxE6mc6NVjfiA",
  "key24": "2opEJ6X9gjFeg5BQHMPov9B8GvxxPWMRDSuYygxE8aWVWzU3PsZARM2Vw3rwUzcCwCHmkPFgN7prC68SaBYiGjLq",
  "key25": "5CzdMp1tzCg12zAFiTny8bn9VnBYiPQ3QJSerQmrz6AgxjjU8WNdkvvbDhmwbx5H37J7X1bofcXLyqp6ukT9R8LJ",
  "key26": "Zzk1tZtde1VLVrZ1F5fos3sP9Z7RSvD4JNgG8nFVBGhZsjaydLigwPXx5cnH3txy272Q3i5qYDMVe1hwmdYLveQ",
  "key27": "4KBoAFRZjEmD8ZNrGzY8YHz7NkWo5WTSw9yRCgsqoWmSHqxifTjwyyd4JuymWHJXMSiYfvCfvVnxxfbYPd1tPCZM",
  "key28": "5iE8BAqcU32YdtRzyHstXtp8qo5Q6PygFMQxc82MuhvtTzyAVvcW9vZmBDwo6kNgrY96YYrrSHtVMsbdwcSNe8Vt",
  "key29": "2oXjp3fnPRSHrQ4MiQtsWPQZtFU3eh5mRBWy9rAzEzx1Evvhp3fbFLz7jK4me9TtQBwysajuEFuFm9Hu5scoS5xi",
  "key30": "mhYLcjJyLbSE2wQLnn5gbYHvEbpKeg7T52AvQqDcrmJSxQYDAyaABjEkmS9wksJTAAos9rb5F8Jyn5NH4L6ERSi",
  "key31": "5rZEKpAYkk18fNCuf5CpgjQJwJQBikqDwSyyrM8RAbqd8y117FBCFFXU5gdsp1hPX9bx1To5YjvBXDvmdYxmyhHd",
  "key32": "3ibHCtVs9MXyCkZov8HGjU1VWcdRgZgdaPjHUdXspyUW2v31Ap7K3rFhDoSNYvSNw3GPBQZ5sgfN1dkVPRcZA32o",
  "key33": "43W7eAbxWNQeLRk8XLzb2QHnDtbWRsy3KXgYJRKDMcuEe4RdHCdrmgZCZN7hsLqDBm8H1jPRByXtmk4Hu3LPF338",
  "key34": "3c8BZmc7Sq8mbUJ3zZYrq35szMEiLTbsdcDa4ZM9gSsLJidRXKQWQkUbQaP5FEfi553tA7W6C27HBUGTYy3v6C4J",
  "key35": "23W289RVPZenozK5NfuQSgbTxEf3ZVG6FHxXtfDcQrL4n5wiaWs2r4nKfoWZucN5LWWQAAHpogGEx74RLtVPrtQe",
  "key36": "3nAsQvS1bUQSJJCK2AFZqkRNRaamTU87Ghh3zY4Tc4a2Q9cwAP764uTvRm2rb5Um1sffX3sf1UPq3ZYqJ4zJV7wY",
  "key37": "5yfbwa7bRzNMrtWmg11n2Edqnq5vz6bsgUGz1T2GJd8yyKdhPWuZBt8LFDxtroU9qDzw9CBZ538S9kNxMoZ7U2XJ",
  "key38": "1Pf4Fi4jvp1AbLfRc4nmcMWyVKTmNqyS3Sx6StyGiUPtDSJSVxxFdGt22wUiBRuqmxyrCGw9W2qevyFbpcC3zgj",
  "key39": "2r8iABSEAjt9VhEbeGicuKMtvzDuJYCu4SV5nWHuRe51MBT6mrJyJfr2qGrYjP62ZyvrMNLdpQdviw2AmnTDF2GP"
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
