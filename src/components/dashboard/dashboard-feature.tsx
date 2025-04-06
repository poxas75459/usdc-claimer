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
    "4fshevtx2eyPPivmdQjJgmvCusFr1QQK1eQWaUTt8kDxrUf1aGvpaBUhV4ouwUfRa4N46Equyv5QaZ8rxhSX7EV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rZpKX3Wy57K7mQNX3PyHQQpWQD7YYHzZd2JBdfTv7zpmoQ5Yc9vkTXvyhXDGvGShrikQp6aQLx52Pdp83wCH3Fm",
  "key1": "3RSSq7FLBt9kxbECMaK6uKQaRg4U98ZZnxoXFwCSqEoPTt9SZBDLrsNPMyr4Zo2N72AVZy3Pxr6jryfPNe29Fnyd",
  "key2": "3ECHTsLYVY3zbnn4iuR9cgTCE7XLueWo3kb7dBp3XudthEPUbXkke75pFW32QVhsLHMm4AXsrXggP8gpzdC3nSMc",
  "key3": "4XcbLLacBnsZ1cycA6WbuKpkQiD83W3JZAYQQpv4N3rSawMvZRQsUQeQ37WKJRJHMwPsiNbKPLyP1RnPYQxJNhr2",
  "key4": "oBnRARY858MaeRK57m8MV4HAidjovcV4sPVCQcyMNnGn6ofYUv4n6s3qTsiycnJWpTeAVoMdt53ZD3mRXH8xisY",
  "key5": "Xf77HdnqBUrSfUWjWpGy6MryZxw8yfrvySKuX7eCHzr9PW7HTxK7ciQQxJFajrF4TNXDK7Tw6LhGjkp47zTbhwe",
  "key6": "3VYgmQmCpxJYMjMAu3BgsoQ9MFTpXZgJvQk5oKnnTDrsmbyNZi3bbnUuDpVYto5UiP8fLD9CA9gBZsd6Z4qdNNXC",
  "key7": "Q1KiyGZ16MrFVB8PmsVywTmtZZw7igAxHsryNwDmr3Has8osBbPp7nbAxuZjtUGWghzYEivCCNLUq3Mp5ksNXV9",
  "key8": "3QSS85dwNxuuBacQ22mwvcr6ELnCyPXSpjzyVfPxVoovkjAyHUZNsGzLjkLRuYJfsgLP8c5CQ6YK5Yh8qqtqWmSA",
  "key9": "2rjB6Ti8m2XJr7oBgH6eNNNdPaLeRjYtQsj4fBWKFeWNGEFfLQBovVGedWvrZUsc6s19JsYirrKLFVG8GDgesLRW",
  "key10": "5d8BBNK6d9gNWbhz2YUAW6LzqXnaA1piDJpHFx1gQ4yeKnXfpG9qGJaYbAN4HHHmzxAoUKcCQEzVRNSRv5qgiFS8",
  "key11": "4A7RnEWYYCajcmKYBUuVhLpUZ95bKprzGvc9MQ19V4ZFd628VbaX3d5GqKAq2JeEmkfBDMJp74VkdFKHCYxKeSER",
  "key12": "2Pz3xFB36AWvhWopQeQAzViT5qZNtDjgPB2ZsyZGuaM4zWTYJQ3gxa3SSPQz97rQLCmaHxepp8c582MRVjF6saW",
  "key13": "4aqQbxFbakLW9CLMdJLQ4FYrWR8T93h7c4ARo3ue91iFze92VFZyJGNCybDfFVFz4HNr7YP1C4xQGTweahb9MREP",
  "key14": "2MofwTRRbXsTr7rLBAeKBp7yPXG8TKT3CaxUbpcNpgpub1VKazjS8eg67qs3jL1anEbXsP8wQYbhAqb2GiyhTYGM",
  "key15": "26ztZwptQdzCwec5h5rVgFRujz2wRDgbMZ7yqufyeDYLPsX3J9r7SYvSbX3Y3oVvbhWzkPLGYcFS5ALiJoKux972",
  "key16": "aTmBnbfTkhkjhpzYPZy6L6BcqBjQTHmcX9APRtCBfoJRjcjrzHH6Hz8HZa5V2TsnmQyQX41CLtUAaDYfYdmTP95",
  "key17": "5W3SiWxoADG1b3ohEYMXK2ggBdS36LwPVo8fzUPGQk9aofSsUbRBPdNbMZfWT1386auNTqsfYPD3znLAayjAAiFU",
  "key18": "36PHuC6uP2jbpug9UyZo5hRXqjvtpD6VrKtuZbdJsSqc6G9fkpb29sAf5o4Sfj91kQHDPouPbHJaB4oK7Vzfi2mj",
  "key19": "3XVsPMEiAqzrHVPSgxiWtPGgaZApMZSLQRvpea4HKf6TrGx57xBnTb6iCzVpbjgemnz3c6fC3iGcLs7J5Bqfze1g",
  "key20": "EGYMVAHgTNNcTMUJCfQyGHUcGn6P45bitj2Z14ysuX35W4cpYpDPq7qRbv6nuoRj3yQrmmr3fecxbct9UipFpyk",
  "key21": "kKZ43D8jRGqutfuBFPGZkzqNrJqNv44p75ndLPw9Bki53sswH9VamvMFduHiXjw26gWfbfBxon1DUyQKHJ3FoRV",
  "key22": "2Dv9VLGwz6VNDXUuN8NyZxq5VRL6kFMjgQWikZMkabGzgcyytdKmBEnJPHPH9YFdmyQt8cXqHkgPuQ9Licy9Rvqe",
  "key23": "bKjTjtEzEUyWbxngnf8Sku4GyJ1LJRWvrvxB6rDe4J1H36m623ed7W6hFtn7WyRy931zd7gFTyNHpJ86wZ7sNLA",
  "key24": "Yy2uMX1FAcEzfo414rwhzamuYp1TDEnMRuirsTmvFqxuYBQoQXKURG5CXfUQFkBRExinzCnSMjecCUVAJpYkE4U",
  "key25": "4uCbbnyfkfishE53cp7LuPpvDyXLLQTGJe9Ag5TMcpEJcDuy72ttV7cCh2efG3jceKstMJNv88di1PKp4A9tw2JY",
  "key26": "66yLWj16J7oXA6cYaauNkL4rrM7NcB58EMtZpcLgyJTDhcDSZRzMfY3i6SZsSd7GL192cPpBwG9fDiBtHUeCPSoC",
  "key27": "4i3yg9deYwZx2jeniqyCkQbeVmFT2oxhs1fhZhRGsHbdN19WSJsUfMBdJU3aZREWxko6qqEhS5esWKRjmKfgMrFc",
  "key28": "3uJ6oqiWXfRUdQj1qnowTFEyqitQy652DiTLfFP5ZSca9xaFkb1VsMyEN1UvxPA3H18yUjByTGFBsXuDYesPzWqN",
  "key29": "59ngwpFzfZcyse5hgAkGtvpmHPR5NmYqSjRdKnjVXKnP5cnP8o29qfXmkLGYJwqACJvRfaytoTKkHE3Jz8b9mvQj"
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
