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
    "57jAJhfk5kYJLjQ17GHNYhbVAPk36sebjNXXk5e6vGsFv5WEeH2ZYc4CSjL7JDN5f22ZoTuLMiLgGaekgVWExGHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i3nHj8iug615m9iVT8zTs5y1dxp3wqJuYwxYw981DWkhjgymJVVswniYhAnRoguMxywgxjo93NBSt5tA8jGiXo3",
  "key1": "4cFxgkgPcxqyZC5WSs3iGfn2MBNzuUKt9EFdgnEN6Pd7KTG3Ah1qiScN5xQwxuKfgQ2eYhNsYmxvpCqyrdGDRRcs",
  "key2": "3ZvbatJupnuBLq3v3eqBcUWfsxdfSJ1zuzhBvZjrwr4jdnyrNPLtmNf86vsh1cQ36Q45uTY7DVSdxUvD37B2u4g7",
  "key3": "3NvvVK84xhzqtVd8GHBgMbFEYNT1JfEfyUfwwJqYYHeN1PLRvqP1sjmmVLDu1W8vE5LZpntQYrvMGvSoDPFjaSp3",
  "key4": "2GB97LZG8HLXvKgRYi12jKoYQ9c6ERhSyAviMcJvi3LiSAR4KPojV72Lvzq65rJ8nqJy45YdVrYEtSKaBk4UDYuQ",
  "key5": "vd9ibKVAdB6uXXYEhyX9GysmPxneLHmyigE1LKDz3FDxt7vM2kKLVAy2rsVPqqbsj1viuP4yYkCcnFzupgSrvcF",
  "key6": "HsWbK4NZcq44qLGnjzGyCKLSdRxJ98yumUAGTaFsN3gCXaXAS481Qugf3dV4ybeSoxRSGd8a4vswqRojTueoiQF",
  "key7": "iV31ZjvPEtxdk9jHFm9gvRaZoy3PZpfTh3vyAysXoSEvuDfDdvmiyGZSZyxPgNTjQ1HojfuEXAGemGK1MZwsU1R",
  "key8": "5JTLSM6r6T8qt4pTFsu22NCMX5uSgJFpKpzL3t6HDRAN3A32taDGEUy1r7Hk5AJETtEivw2xunkFqaxYJBFSM8Q7",
  "key9": "3xVuX6VC7Yb7EUE71VfV6XD5LP81XmFQQfNrz6o299yM1L9szJ3KyvtDLz5LppzL6n5fncJuakgFaA9NyE2NbA1u",
  "key10": "Y8wJWNqQPBzh7Nvi4n3CkV4mL7yuDQvvzLfw2d6EkRD6kyLs6da5FCApppxnKce1iacAxtjHZqSggvvktZrTfwx",
  "key11": "3rx3NZ2w54cgMqzuaz3K4twUmtvNMAFckg4a4ksAB7VhvfpwGCq855c6wzJiLjL4yBvLh6UaqmPabozFU5QzAUxa",
  "key12": "58TfJj2M3c2nGuyDQjSbtDoY8wtiFoWygRQe8q8uKb2ZuzfgAcKiFapzrJMdAT27myPuxavsYLPmsA3JnBUVseV3",
  "key13": "5CmamN4B1WM2WPrCNXfp3zzG1pjtB7L21PeQLNnm8QKgECjiVUG4AZwGeTA2sh7aDh37ecQat22PkKXXG8LmbzjT",
  "key14": "5x7YaUo8VjiK9t8F7X2jtWttHeB21yAD1qhAkSojsZykZedgPaJAY37kLgbYjDFYC2w423ocaLFWyFwyQUU2CkJf",
  "key15": "5is5KVG728KYMPqCJ4FYmXs4G1S6mRg6PoPiBDdu3Gf7hbTDNGxTC3sBh6pWaFZswPV1k7Ui6qFjTugDJyHssWdF",
  "key16": "3LW2AtD7ZiGJoZePEoz8wzBz31aWuTEKjnXmhVxQdShxX5Si8Pfvd6CH9VPRUwXezW72VshqP2gPv6DRUU6TYpwL",
  "key17": "wNAsUyiovLtQ1Lxpk5bSWzuU2dR6dtb2AUT5vYuunFYKs5q1r9zVU2qybmXjenuziBjKzAraoCbWqeZGNLUWwv1",
  "key18": "2SJ4sV7rLd9z26vf1qbS7Hxn8Co7JMg6Xuj5H1d3u4znP4YwjUuPmbZzk44cPoU3QhQBGXaxWSLvMiewJEsPXA2H",
  "key19": "2iY6irqnKbE58JCe9GZfD1MgQbxeGSD397cwR5dLbNVreUHfAcomcrdDMGo5BjkVyARkrrDjPXoeWf5cmizM7kXs",
  "key20": "4n8mdr7FfbYkGQSjivLJSKQz3unYpsFZFyeyA2AqTjcbqtnmSKNAyd9uEbvbpDR6Mu7BqxXsBX6D9ddotTocmGe7",
  "key21": "3mWEtgUoKDC5hES1c9wpfrqwJXHHtVSsNEGsjCzygVYvCwa9WyZiXU9SkLLRWDUdcLQNuitgKbZViDYVQNp4MVCu",
  "key22": "58sRWhJEqVQR6gfkvKYPq4YpMCJ3MbeyCa3HLRdCMHsPkgC6xeXsk64ABH5Dy6upvvPci2WJ3q42xKg2JSu7Ns7z",
  "key23": "5ERQjdQ8CPvgk4n4jiGUscmKe7UVyd7vqYuEzSSsWMZAQ3Jqut7kqViadMXX7DjY3edG88jLEtQRozvfh8k9Q1ee",
  "key24": "NvvtQ9bLtQAMCeFw7cgAknziGVSHdhF6TLidFnd72FUdHCEo3yF9skueC6PsNEs21xY2VNrHGqEeaw58GyCouwa",
  "key25": "24purBs7Qh7SSNGjfSx8RzLr7Xn9zePtsUwPrFsHDLHynzHeGE597g6DhLdPZ68HJeFQAmGbzEVcQ13boVZTXm3u",
  "key26": "8AUhBe7EUiVPJHvDBeN1bLAr93fuwYB339kzj5JtULz56wGpSHXBgZTGWzU4vaM98xsy3Cmq5C8MWM8aiAyNaQ3",
  "key27": "gyHz7CGgXhRjosg91qf8XHGgLoEL6mH74MeRCWdkZo3Cd36DF2h7zkTowzZite5WCKJNyikctmRxF2cY1VD3bcB",
  "key28": "4JF3fcnR3hNxscrX3LEDYuhV6JKraZ8GHQSWn5V4Z7H6Pnahr46tSrpsCY4kkJNdhC3Swvoq7ckPj4dna4rcMsdE",
  "key29": "2eiGXnnm6zHY9BjbnisaNZQ6zC44q4BGdoBKSHshs4uCJEytf5wEW7jAU1oYtSYagRKHXJwDttvfqqSA4BNu8JrC"
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
