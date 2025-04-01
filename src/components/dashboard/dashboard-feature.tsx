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
    "2aJYaRj7e7qhKau4Fy7FV1zKMaE1f9NetWLZ7icJAzcyTXwJXo2i27NQAJoNZ21z8svfYDefrGX1cudGLh5bRQB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Efvk9gbSZpzEgG94RQakK8Q1VdLkfZJ78aACD2W8muvpY7vXfboxxaYkU3KbNaU3YcKM37QT63N3k8rxFjrGcFG",
  "key1": "579mxYGVyVWUeeUeNhnn9H3nfj6EHicKz4sjshrEZmArqb6Ej8idgTbzLszBEbF6j1D1DUTqS96HuxPBTvZLUD1H",
  "key2": "bTfNoAnDpKMbuE52EceGH77SAMgpN4RBbZoQvo8XU14L9jw6R3iPh49C2wzma1kAoKc2gTEh8vvtk7KR3fx9drM",
  "key3": "62cpdXKFkqcru6kx5ogYmnrZ1rGd8v7pDJReFmqU8ABE7JenguEPBDmaeivZyqCPNjDEHA9mxTgmhtM9bjaMrHv5",
  "key4": "33ubK3xZsvp8ydhVr8bugR15Xa1yPB1FfGGtJcLHRKRPnya27BSp4AhXHd7tFVeyZtQL3J4vbj7R8A9cyiEVV1Kg",
  "key5": "dGqKKxTgeAjbtSFKLeeL7vxKKw7qZ6AEhY2BjR36CQQYz1hz9g72QaQu7dkXNfDXxRHAzTM7qp8i4pHDfQuRGvS",
  "key6": "5Z8AiHRM3S74L5iTYC8e7B3t8YPLavZFsjZmBVuz3dS56hNPUXBDvgj3Pk5SQAe1CkfAeSq5jfdoV82HGYhThjCh",
  "key7": "244KhmRqiaDz1UmpoF9kN5hQFjVPkWmMUQQyvSEvMvvPbS2wEuHhzimW2Jg6dtzsotWtEHm3fckkLUrUanBtLb5p",
  "key8": "24zUJ544rHXd2EjNWx5zpJSLDHtzYtC6qBr4Pk1Gcjigf9itTtsj3tieQhjbWiENe7mqYTfeti5zmg1LyUi8Vim1",
  "key9": "4giednd58Thur213RMJuHSSfQVzySdMbrHct1DwgQym5PThHxf433uaopQXK41Jt41rbHxy6U54sTHKeow319kmP",
  "key10": "2qXcpzNNFFozH9QxooCZYEHURottiW4uWCmMXkjGEbuvkHYsidp8pBsrcaxKYqU9neRXN1Tz9jkKz5BJpi68bVC4",
  "key11": "5QnEx9FgG2VmjE95Zaa9VrJKkCkvCwJS6xQSLS2aG98DYnaHQuEC3D7y4oLr9JFKM8ZTokMycoyFY2ELfqgofiqH",
  "key12": "3iCbNZNPTtAfc7KGJw6ZDEpvUhWmA2XCqGv5rS9qX1zK4vbqf4s3UdM59pX13PDCrMeXjNvSbSNGNNnr2usRzPWv",
  "key13": "3CCW1W6AM6tgE7RFNRP6m3eUnLw83q7gCeEBMMgCcqLGf9NncZBPJ6K9CfFYWuBM4QzGxHT5JHT6GMQ6wZKf2E4V",
  "key14": "4Fxcpncuckwe5Uo6ftw8B3w6VRHX5SHYFHdCBFJ4VYw7D8LH6zaKi9evBauHDgEXh4qva5QMP2TzNB2BGgnbeN3Z",
  "key15": "4Zjv6SDMzWtvv7Qy2qrbTv9MQufg9aLEcgoFec1BG7vnTGsFCjnFmzcfTv4mJhGxppkCLotoHXAqxB28gmvoghjW",
  "key16": "51eWJWLz6oafdM3356dnLstxALwtuppEJcFcRq4HeSJCAijjty3VoeTZpWHARzH9Nj7tRwz7bdM5cyvBMzp4Y8YX",
  "key17": "2k2rdcS9EFrDFTxzaFjLsoob7mc6u9zxJiYK8rnsBqP7HDovngcaVvnbH5tjPEbMPtwDrdicfLPKJ6gWs9WTfRJb",
  "key18": "gfgRAKwCNUbQ8YtdB8ATweBLBmVazeLFobgu4TmQHjhqQYECruSihFuQWWy2tqfUmmNETNFzFawvBeUmsoWPSoW",
  "key19": "5bnQEcynRqVvxfULXpdWUA8umU7s9BFx5ejiPcHjbmkh9xkT3AZKYmhvf6Hrxi6XxswPJMd3FewT65zdDAAMSDAU",
  "key20": "td4qY1AbM1omDUideWRMc7hzjoWdc1v85XSm4eCqRfm83qBVy5qb5vi5KJ2UJC3yiHcPkwoHt1kT6w3u8TDtfow",
  "key21": "2PqMDKiAeZgaz93M2HN9koKgBxS8emw1Cfo8jNowcJXq8dqj1uLuxpcMkfSBo1RxqtGSZ13JjuM9BW2qhp48sWEo",
  "key22": "64mc9zL91J6KbKBL36coQrdB9xDP63rNaZs6vjp6Tq7Df4v3wnuWfijs6VC4FZWkw8YUMMtvEsMrRD9hAkTupFfm",
  "key23": "3gzUTuGFTs8Ua7XYGi5n5KgaArUQve3imYy45czjyW93JnR7hTNYLaLDsZ4qYtr3GvseVd8vW4dpuStQEBP6KSPj",
  "key24": "45JePwFxRmWpJBj4ZX3KM5Ww645BJRxf65MomkDYin8AQNzCbqk4e2jKSYpA2ot7SqJYVhFaDmBvEexTfdAxna7K",
  "key25": "Tt3KYGbuCr8uAo3NsfUrujvuAWCupmsvHfuxfQk8QuHhp1shQtBMR7jiaQJ8zfwuv63FFogKjDFbVhiKb5Jw7RB",
  "key26": "2wzhb49PgPjuNuNqWdT7QAC7dfEfyx4EryWukTRXr3AeJ2hpSs8rc2Fi8xEFbM7GJRyJfu9fxkMuQ2UcsjSsgiTZ",
  "key27": "3Hq9aczENEgHpMGq4aTG7UMQWeY1xVYSxQjg8qe8tPkKNLeHHEKTu6CC4syxCQ2msDsczsTuLeoSmfc8wRkZ9yPd"
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
