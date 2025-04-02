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
    "3viiw5b6H8QCUnYFkrnDMCsKPnuveBj4x4jC4sCq7v5AaLM256V1yL4SGgdrHb2cz74TuWqhh1SgpYZRzRbZ7gy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FAT2BXAiozuG1Mffd5VbDMQxpsRZpff1QVam42CL3C94sKbqa2cZ8wgAQwrvJmq8UbZCZJvqamrQw2fSvLaNPYK",
  "key1": "4nijHtXfh6mFAuKiZCCQj5fVVP9amoPKBGQSnFNuhg2cXeTKvZrHLCbMBmmZHA2aG46PYDNqrtqxtB9cRq7aMcSZ",
  "key2": "3NWARx6uB1BeNiSdVhYa3CGAieEhn3TV2pXXuWgDvWNtnh6MdDM3TZnj3miCKBjzCVioUo9MnWxM79pBY9PXvARJ",
  "key3": "5bJjKrcP4HWUoRozVAJRsECDKjzfKBUCJczuH5YaNHEudYpnHviqYfs8RyrNCUvduVJzSx986srJqdh7ZdzeqETu",
  "key4": "5cGL2wd9mvwS5vAC6LGNZ3PbfdVb59J66VZKXvSqfXWsVRENJpqZjADssoMrZrYNGuboHN6F3WkPcVMiEayk8bkj",
  "key5": "4ofFbdxBSi3sygtUZVagMw3cjXs2qp5fEo4QGzB49GqX9iny4cTX8Zofk8uSLrD6chrqroifzbGVMUiMNorVenBS",
  "key6": "azHrWzSaHDQX4ikQC1XrNTdKiAHgEVE8o2u5udbZKeqAuY5KCKRAntTad2t4hz6GCAHaiJnqzQreHgxC8AqwHZv",
  "key7": "3KsWAxPJnqEZjKqms8jLpPi589vhiSRnxmHBTaMFMif1okw3EekpN3MCjodJD3YLMhnwCYXqxLF2kXWjVwUDZsT1",
  "key8": "2pwvAEEjdPjBsrzoqFtnVDnA3YzRagHw77Dys96pMhxB4T1u3jpBh6cbPZ5cDk4pAPyhwNoRyCH8jkaMFJjaMMap",
  "key9": "2tGGpacjzz8rvi9LupCEXxhhSdN5ri2NzGKwJM5vYUniocTYGTTXeFRL2uHv3RUhx5Kz7yRHkFnd8fJuc3n4XahG",
  "key10": "3r6YRXuwDHBg3azMQsFQvZgmDPumjrW54CRcUKC4XsPJSBqtAGZ8UJVi3GWPJvmSzMYZ6uGwkFd2JwGFAWxgpGN8",
  "key11": "4pLKoDpW7HUYK1GVLrP9zDaH8XocyRKqjiFUFK2CaMgVzFNSncXnV9XAgAZJRSB5gunaSDMAdscuA5aYhQASNhYe",
  "key12": "52KaMFsQ1Hq9wKVKJtjW1mtm9VM1Ma3MQ4bY778VSmkpGvcBoNANhme2CpjVhcaiyjbxHr9J24y2faPsrKay4VnB",
  "key13": "mM1fv6Srdc97PNKo6m8q8EkQdPsMJ4nG7gy8pU4uB5reTWRnybQPrEAahBNZyd213fEAnHXiAJqnmbGydqYdsYy",
  "key14": "46mkykfJ6Hk7QxrXn2ekftWV6QtXsrCD3GgPcEEekzhySDg7Nh1pe9UAvJhpS5EhRYVSbg4Wf2a7UwaHuxtG14CF",
  "key15": "2c6T4RhbxSyTFacFwkRBvyTV9QrH4LojdNZGR5rB4XbrRNUHhmVzLPvRU7hkJCvCRSRUNTJPddK3pYj7jPNAhVsq",
  "key16": "mu7FkZA4PT9idkrDSQvJM8PfzYUQawLeTjZzW9xQ8pMGpiEDCHcYm4BAiiS7uDvspNu2GZWwZmpqfAR489SWcC8",
  "key17": "4Mko6NT7BQmsVkyZbWqhydPsUhw1tXW1eGMfu8CsDEfkcgGtH1MQFstJQUPR5PZ8Bh2GtmsbdbPc53BSS6Fz5epq",
  "key18": "2NksbrhoE1mvQcJJJQ7XTNJu5TrsXRmwFTu654muh3TABE8bYxL2An1ZeMJr7yy4EckUWa2ySP8DDYzyDmDw9Yws",
  "key19": "5VYEPuR9Y7LARjvnut1VZLgxq9rsEajCPLq2bQhv5JE7QmC2mvPf8bnB4zHuyAf8piwMc94kPCupVmRETGGiZBbN",
  "key20": "4U5BhPxiethPsk7qvaUbwXGuAHN6a4KVHQjDvxq6BynD5efmsYq8nvXiwoDEZd453TTfE6b3d2Fhs5tCEVF3uew7",
  "key21": "24EDk3LuACSzPcAHYhyepCM8R6u6qR1z47oqvUgnXFRyrZ2NdmLTthwrvc1J8jG7qDn3XSbEsMTLPcHAp8Z3utZX",
  "key22": "62SRmr4XPNhovF4NRvN9P7VMggKaBSn6DdGL4sGNAjp1zy4sye1BxmvUuANChk3jRQTTHkdEyQmLLxFpKwL3Cn61",
  "key23": "NoYTmMfHE9KBhncDq6EXPMcww1AfpU9V37emK8yVk2zuThvJVkZgYAuFiJHx88eXEU2MYhPqbiDgHVkSyvp1r5Q",
  "key24": "4awUykFxubSxEjbfuH6DAdxK6dm9sxqQcZLWjhxDVyLKCvxdVF3CcnGjdPTpKnzyu9oriGUfunrk2TrPfUXdFAcn",
  "key25": "5kCRa2687MPh1w6zrkGG78a2B3nJXhGo6a7ERCBAtzpuuNf7TnYaJBepZozkc4AaZepV2cpNUTCp63HWTK7NQXej",
  "key26": "2rpNR9oFq1f4scztgK5a89TnsRFwiYgV9eLMiyfFvs7F683MoqXMZep4vsJoibF9PGsntjrGrsPmWZEtm13XT7uy",
  "key27": "3Rr46v3S94QRuxM4FBhyxMKxh1CdU3iYCG1ZpSbQ2RyFW13xibX4rSEEAhVAJf7npkkkFKiFj8RTr35oDqmuhCGK",
  "key28": "29Hj3CnrYSQgjso4671G9SRqB3M19AvgxWV7Sutc8buD2QD8xPewGiCjLQLYyeu2sFVifYJ9CqkCYBB3Bsurxbb7",
  "key29": "3rqefTaVy1baxbz81EJpVWjd7PA8qn6p8YqwXwGAAxE67nFVWTdevPJuAs8HdyjooYJwwL13yzmnJpcquVREK6j8",
  "key30": "aixUCyc8bcTFnqERUNJKXQ4tBKKPFmXwda7RnDFPdoF1h5GSHzL8SYjknqc4wXkG5uat8Fc8cZ2jkNxDY84w5qX",
  "key31": "anTF8Xjr3kSQH2mpEzbsLUazrWMGxEvBN713MvyFrT2JvdgUx36hgTdtMG7FSVAr5g3o8BrdoNvRQyiDd12Bd9u",
  "key32": "5qQ2QW2NNXBtA8zCx2pj8s638hug5CHT6itR5t3SHrzAZoki1yVdFcJ12k1Nf9hgtrxKbaQYPqegVGNweGk4tKFo",
  "key33": "5YLhLHVwoyw2uTGUmjmhxVbf1ETja39qyZR7ZUqkG3BHUa6jLuEDGioqajXHv71XPYfoMPSf8eA3uyEQVyKufh3T",
  "key34": "41VqkBPXUPCu2Kj7MtdM5R7LqcSywmU6xh4TssQ9gFhtdYHEKhHnmiTdAG4nqFMAbxi8FEcZ4dLm12ebzKrKy8Gv",
  "key35": "2KpccSFF2wGbMv1XoZUVQAM9bV6RubT13ekTmXvTdm4REgrNAcSeGyyEpMS5bpkQBF3XHCnLcAWrxCHAHMvQ6JNx",
  "key36": "4Z5X3wGviEpdQU9oX1B9TL7jhRQ3dQ9tujnJ76WwwGdcLCStktwFrYum3ZSHwVuNNBmuNFSk7Bep5Msu1vcaLWc3",
  "key37": "cf4x5UpxJszi5zD5brXFbECNvMT5MnkdtEXgnehJDCsnMfxANYqz96jqRbDACBvW7vpKTwDK9gh3QMgmcrxupet",
  "key38": "5Cwzpg8Bh4HyUG14GN6HYqfi5AX9zRzT9XujbcUHqJ9eZdSTfgWzQo6aS6anKUUcPr9VDpFXKJDHwkN6cnpbK4of",
  "key39": "2e8ySpLYhfZdv7ZvUu2EeFrsYH3G5zyQwV7yeWWYS42AoGYqipNX1Gsm9NNmCBFMdFP1viRpCsNf1pKSkpPNgDVe"
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
