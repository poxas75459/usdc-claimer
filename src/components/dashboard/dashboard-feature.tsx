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
    "3ksCpnp17HKER6u7Sd69x1Ez4pbLRVVkiXK9VHZZn3MzAkeifz5fjy9vZg3yFNB39qXjHQRDgnoKd4oUgCsq8nx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s2SKfSsRkR91aoTwx1bxqmH9Apc74mQVCtkywTXcd3gCjRHKBRN6SPoesPTAJNJm8oCFFVVA8YCupu2dyupBAnn",
  "key1": "3ogk51NkKAY4sivcaA3CgeaoYurBP5qTUrg94G5ejvubUmhcbvcwMccLi4XkwrTmvDDpzbd4CNrHQGvobvCkT8ij",
  "key2": "pTi3QcZgkiyhqXD9Fv1HeMCXVe5deHCUNnbWTb8YyBS3xNDj9qVVemYKzbZKKhD65b6Pah7YrGiUxVgKVJ64Rxt",
  "key3": "5EnTLahDbpAa9r4bDvtPqFHWxr7HHcVnUZQLbHKonbGTuQhmxU5tz8Rd2RLuVo3j6e9xd6NPTzxKv4Ko7o2JuGvg",
  "key4": "xeUMA2DYgwaWxvUd9tkzhDiDH4KQ2ftzad34Ctb6i6bJUJQTXcoitRMZFZ8wDRhKhLHNrCa8AkdvBjdfMpixMRq",
  "key5": "2bi2B9M95FcPXTTTZSenMnokFYsd1dRK4btQxbbD8wpcTGSAZZYQh5yvj689CbmYZc4sbY4Gt4VF3jy4dGufh8aR",
  "key6": "5SqggXbVie44coicUgs4ppoC1717ooY8YhDhdDHHgYs49AqSuTpKVqUdbq3MincEGFmYYuP6VzCHzD5dqA6DwFZ7",
  "key7": "sXFaCeLsb1hGyXHDwFotsF2ppZN8mTEyrpZbHqTu2N8aDM6kb8Ub2fTJBdT7AUe8frgUjsgLrsbhfezdvBykNad",
  "key8": "5RNrKyHSYTCRS4EddoLWxRehpfNFM5SEtxZRJegeYdXf6wAj9RwSBJDzzp1EPMZtih2LKvwqBHaRyxcg58ACw2fQ",
  "key9": "5T3XhwrM8queunGJdE5z3yAthLtjDKtT2v6ZJoqyWbLnp5LxUqLLte51hPkBuPkbkBB7jK3wCFTuH3f6NgDWgENG",
  "key10": "3LoikAKB2JJEGsyPWponrp4FvG6NWGVhQaned26usT49hA5kidjVrQzLuPQH7LjE1Tu5UuYWvCHuoa9jg92m8swW",
  "key11": "5fwpjNSoAZyjWjP79UgmZUckYzm7weRmiESTCVdoEuUJYR3pTKXqXn44yqdonwc84VjorUqkmpL2g7cFPpD563Ak",
  "key12": "2qEuTCphgdmn8X6ZxduYVzyY6aNSCdTiBvT2AQSDJk3hdejYTtH1rvKjM8BNu4HSD8zCD3uULhk3bkcQnsZFqjEi",
  "key13": "2V7JHi4pSM25bYKEXPzv4jcVjDj3R64GKyUgXaGqz1wY6Zg3NPybokzKbcXVJZXM62FPmE76vgcHAyzYPoBVcL3Z",
  "key14": "4wnNpe4XsUswkW5EbR51n4GTLxj4jr4SJSm5JHfnuTM8bk9UUWrTQWLCgQbnTntEKFDYjBvZTkmytKpLJ7oBUNta",
  "key15": "Gr75Ea1H92Z3BshM9W7yeEX22EoDuLd9c9RxZtq7Dp9vvRgAeGs6VRAzP3QbJu9KYn2LETJxDUTCzrCKVbzp6jN",
  "key16": "41MhLNB4VH9cMWCEMuwFB9RrqWZjxDpGJhgQQDnsadyEzZr4xM9DqVnjoVixxThKgoJcobpU8QbLuHDWvv6FKHXM",
  "key17": "2ULxZEkHLLkouyDqPzzvDxDJfDTFASFnhuMrbNYyeKJdc1Lr8erRhNJpGmKZUU1uyvmtKHTbNmgC3egEZ1HZUB2H",
  "key18": "jDcRWiFQjpisbWPyLT8v5VUPkuTfg4PXG8Xerz8BcbABdHRVqSxPxT1bcDScNAgFCq29HEPUsYDHtTkeGAF3A2S",
  "key19": "jrnwDRqevKc2wizZkr445wrsAJnquVJP9NcyeqLqVd8P5AuwPi9xzvDSF4GuyTGyeQps1EGkxgntpQyrnEFhw83",
  "key20": "3uuPFKKAovy3LGoRfBNoc4b3xRkhLf74BMB4yCXzZtjdsM8LsHoDKxHEWocoXh2NRWozkFBXgTzj6NCv1Ej7bs5n",
  "key21": "5hDWLHfNDGqPa3xDDVFJqXvaSixsYjZjXr4WfU5k9Fgn3b9Twt4JzSFDXTjuV8hEdTxYwENb26Dy8grpdfTYp8cg",
  "key22": "3MdT9yNVgrP5PoVXohbHpBKqbxksENTx6AZyPtQWjuGbadcBwuyVc2Ta484paE6DrWy9WF2j3sWejLKRFQKz5MSW",
  "key23": "2rCzuhqLnnyu3X4ni8CByuzEq1z7EAZnXBqzG6HPiM7Agd63qz575LD84pZpQDWXKcpSmBuPzM9CSTYEhCbCHaE6",
  "key24": "4sb1sDP1ZQuMdKXkev5HjfZtdkzGi24ovAVr67sAhRD4G2oAMxhj1Lp1Y2xkqgAp99hp59aK6wUbEC7Vx9nBavww",
  "key25": "ggBXbqV965JFATTKJ9GoXyWJuB2JeXe7XJUAaBCq8QT1VKfcSVsEVTtzqsEtpbokxPLcJXCDSJ1hLDLKn7khrCQ",
  "key26": "54EWwYFsy7qmAXYYP2mu3PV88nnQqCbx426T51GN5m5hRsTpMMkhL42ib8HePaDw2anhNxY44uaf2WrNvovUh2n2",
  "key27": "3uiKdnpM4eJbmhrjEN6FiM2CuQJFJN7vUMZJ78LRQdgmd6So8Cn6eDskLwfqsxU7Am6uUVsSTMPnEyKXdGrjKWCx",
  "key28": "zma5PcVfarrhCbtCDbKZP1jPhMRiaML5GuTqaEsA6sbUTGbjDwTPdxBje2uoXXpbFa9Fkds6bcyPwojoLgiCaAC",
  "key29": "YT7q2yW1N2eHtNFFZCuqTx9rNnx84UgFMEogPGT5nBFnBa4vRN5gsWv4m13o1BAs1ukKWJQzXhe3TwELMQP66D9",
  "key30": "4ZGtkLr1N9sNCRDZwYDRmcN5zzERDtZERyMUmqtWSSd4uGDueZgyvzdsh9v3Wf3E67gbZ3dJykdetb4nSwZGKLUF"
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
