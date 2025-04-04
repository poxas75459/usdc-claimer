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
    "3QgMz3khGQAziPtpoBazM3Aa8TwkK2EkAZ5xQkVQe7TPts5pmHmw9F2XvvfNVbfh9Dh5wFfTHrK25vurrvcMP5Eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sPKMJgUzyrtUnBXNRQHmacQtmTUJXX2kiLnyJVrWamV2B8AUxjg7id6KNnuDn7XPYGgF8mUrM1Kga1rjTnhvBsN",
  "key1": "33ShTGvgUXg4WefXcXvBzirbkQBn7XcHGpkConHubAYrwD5PkvPuxnhUGYdnwUntFnAUTTricHtD1U1k5G2VHjB1",
  "key2": "dGLK7WwaVBF1ePi7dffEGVRPiZdCmBm43xn7hX2DJLS6JWcVf7DRyMUgRCZ8JCBLHLkvZoxBvWtbZTKnSJrt4Pj",
  "key3": "SBWqbMTs8MGXbR8KFNJxA7VHrnvMv16pWCK2ujxX8EppSwyWkMMQ2HPePeUqtoWP2JiNaathFDhFUazPVmjn8Jz",
  "key4": "tafN1eWRQWjFyTYg5tiykCe1NBLpMsABcjaF84s8cfXt9byEeaskuGiWs2higUSzz8DAwkGXXWFkxVK7fxG9HoH",
  "key5": "2b5ybbHx4oJz8BDvu3rzQjwPzmsD5QZm3wQqYQAyCczokaPk2nbxAb1uZfkhQp76X9kEotAoXxr59GZWsvT8dLL8",
  "key6": "2hkWz7qVm4fw53H8WQVSuBJYJ2NsbBw21dqyuaba1FCTgKQWLq41EhHpJCRhcK4aLqn1ePFabH9syVjso52Crzkh",
  "key7": "4d7fh2wLhte8w3U6Hdg5LmVMFSJd8v2JJ7tXXArt8HwTVNfTJFea7DzEKf55kBFEUvJeNEWLrjW6vkacnjtE8iRq",
  "key8": "LEUuzpHz5nR4dTSPvMCz6j6NhEL8q5tbVCNxTT1eMZY6PZ9ZY4dcTvqn3gKpq4GoXB8ygFEz1R6f7fSaezsH85X",
  "key9": "7992sLx3bvgs9zMTPTAs9iJrXBbV5WyKasr6cCQeFqwWV64oKWkckyhFPEfJfAMA8sxBQyeM8oZLrvGJNx7N96G",
  "key10": "385bD2ZbkxjfkELVaErgTDoRyqk2sfpmZx8KJXK68Wc3H2pEkwbJweFG1aV7U7soNqfUMvGDDoCqiSfPpwq3wPT9",
  "key11": "5zbcvNRS7SSp28t4gm2zh2WPNjvH7PzNnyphrtgyNY3Cwkgzkp3vGBd6aK47NE6xuRqXjpKZhaMeUijRCJX5ypCA",
  "key12": "5yBM1GJfThp5cQmYvjfAs2pKd8Ut6sDbzZ6ykBrGupYzwYw2rMCcs7BBobDN1Z25zgSVkAzKog49HAy6wd2bKmas",
  "key13": "5L7f3ZrdMc7StsNkuXLu77DMtFrQPin7CLCeS1YrfaNEFRdd2TuwucgzHRfWeUcB64drvWTtm45KLZ4mjkHxXqns",
  "key14": "AMfFrCL8tYRodPBJByLcssAodJYAspX3jghe7vAs6kchgmkm4L4ueFKV1UL5xcs2nvNpgS2AZsE76XHb69JTZSb",
  "key15": "4dBFhiFybArX1dY8iUiET9V5PCRk8SYT1QPtWjpYRLBtxPePq6e841KE1GS68g8joYxEhqVu5A4NmGdA7XYywKso",
  "key16": "2oyKitqmdp2KR1q958QTqv6w5KYepzzZjJ5hHaa7dfKP8ZZ4eHjSd8t5g7JyZhMU7nJuckNBuHQU6VT2FrwpbJ2R",
  "key17": "4oVBMYZUPWSfRfVhshsvXaKgSySyaMbUFEjoz24GfiAWg1HZabibn84Va3Vvyqg37FJBHJG5ZwEvVfhwVqGb3ERN",
  "key18": "3qXy7ycMzKkwifNuszABGBgRxR39Vcj9GvGnt3naVWKSppT7VoniyedSiv3kR7AhUDyKBjdoP6h1CXPCGkJsf6S",
  "key19": "6Tk9ZXxMVQtDc7WoRK7gkQqrXbERMpXHgnotTwVU5c8t9FhsD9pFQ6JUndxzaFqwcRYcFkRH19XDVAYCMXigbRU",
  "key20": "5VmvVMufsuZjEMdiHHmpqMrbyXGBx4mZEY7CRdMt19dgACesgceLGtsmafzVn5eHmK2qQvNbqajFpd1iXEqpRCum",
  "key21": "4EY9M8p7LZH224qHWwmSTu2eN5W6tEj9bR4g9bft41tF7A6TyidY2uqLvSFksDNUyWWtQHwCUowtm3YWyT8JKeGy",
  "key22": "JyipZYFJopk6x1bBUJBPuTXTah72VnH1mTacLxdjTsubnuWoTdcbo7dQeekUH34WPgDrq5PXDNcbrLCj3ni5xjz",
  "key23": "35FfCMHHMbHaXhxbquZFRuTRdgqimVqc27RfRPaLRcK8xziGyjkJ1ddi1yPX91NB9EWjZFCtDxCVXKMPgw41DSfH",
  "key24": "2KhTqVdQX71V2VprvzqxWGzJ4Ruu6VGBXPJsMjXTp2RMa6hLnQDahyzmoSuy9s5ecm8SvB8TcDXuaW7cjPzC5mQi",
  "key25": "5s9MizNWNxciE8QZrSbq7UEqLigjTWSkoGvZRvDq5mN7FmFBT6peBZBdUwck6ACcJFyMTzVCbtt1Zyq6njosjt6i",
  "key26": "2cRdBPbNxF812GAfHXJ3gfxFNWPDZTgoArdRa1rjQZzGkzizJcZRtUYYwQtPboPuTE7kNQK37JTdRsDFnhp7QBj4",
  "key27": "4SjQ7a61CMgQj6zYtjzRDh7MFFCAEMGBUeeDXA49BNCKqw2jh8Q6nC1vLGvLLDBjmtdMaCBtN3A39ZWM4sXEpMpj",
  "key28": "3XhiuYLivPSDmkysvEn48XfM55pgmQJWMsQCzvzdVo4nVMY8Tdq4eNhqGGkJrm5NbuMpY3uzmXcDrTcvnakRDAHz"
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
