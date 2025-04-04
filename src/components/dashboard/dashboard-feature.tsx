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
    "3zpur2PUs3Reg3wmisfEX2v1WBgD4sEwgwxiKBuHnqUi5K6uJUcdne1X8QvzTmp4Rp4WB4ZAkzErWKPeQYzPR3oh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35RChxTPd5CM6jpVQtN5cWFPrDewTDN5UdyvzfsJGDZDKN11UvMpG84ivGw2PUJaEo5RTYL2zTPHHS2iVVmjwQtS",
  "key1": "2mA9EYtuZfk2pLCx86zUdDePANErgXuFkKdZgx6EQykAJ6Q68nWiAv3Q8NUHVNmgDg13A3wsiXf3qmAYDDuVnDh3",
  "key2": "3uc9YxmZ4do2p6RWSYaBWLTa8a9J2695fMDoF3DEPQnHyRPCX4quxDG9XLt7pqtC3cDMQ3VBnRaa7JrzyP2u7vjj",
  "key3": "5yYYwKQSnWQZyJWLKiKXdLfxTg9c437NzF2Jo2RxsTuJBcYzeYujtc8twZYwjoMRS1M144Lc7HxTy6tcSXoK4L6R",
  "key4": "3tXVwpM2xXiptuzeeeCKdcpSVjQMkpHEoVNepJYyGmVM9vZQpg4RztiSDkrHWwvkHY6Vgv9TZFLCQAAwQ8WPHbru",
  "key5": "3dahUw6DZKu74w8g6yTTNEdQTLs3ArxS39VYkj5vuc8Pd9MWvxVKD94o6Rq8e6AJLuu9hoaZXEzEmax4HihN5vvE",
  "key6": "2SdG7WJkVCsRFfTmNWhb9zbiAWcyRf1ebV6K7jbf5vUBnJwavYggJ6Q8KouEQjNGfBc7SktUpexbWaXqrTvxLNnp",
  "key7": "3rUbCTZsYJeUSyHm4M3e7xty1eM9yEez3jKpTjcYdcnwZ5LmwJE269rSjBWsR2QvTKi4sXqz5tmf5JRPFdVahNyw",
  "key8": "3yPmdhvBySS72WxtsUgerrsa8tVvEKyVHRGuasy3j6vF9A1QKZbNGd6emMoiNraASEjzfKv67TowGRRjLQX2t4Hy",
  "key9": "4fFCqCDwMKoF6oDiddg6peSG3KGSHRtiVaTTnwHjJtJpZgNQiNptQwXQKbJrW2fxoSu8FjsnCXwnKHMtB4PzQA2g",
  "key10": "BJZAwdZP6BvanKyLQxijEdmdEj3maWVY9c3g3xb3dm7kJxoXFc3cScRQLDeDkQC47yWujtS14J24GrJqpWCU8AH",
  "key11": "2s8j56Q9FUThcpR2Eyd8FEcgB8YGhhBoPbvawwfmnzT6gomy4YbRXHEX2VzdFBhGkBRE7vD3TuVP2yM8oJeiwjSB",
  "key12": "u7H5KGaRVNwKVd8pPsmt9D75fUmLRZDa2RHy8UYFkRgcei3UHdpodPQnCxjWKbErmadTePZ4yxW9v9pvrgFfFRZ",
  "key13": "5hkSNXCNxysyC912StjQYwHguT5aec3mxVqg5J8gUQqr15ds2zDxY1yJFhsYHe6Ur3z3UBr3HkogSVYnDx22ZXse",
  "key14": "nZUS7QMhKiawpvMx36Crd29VBTSypbB9iGYENjakB4m36YjUpEQpQXWwJZjxQQdc53KSKQ6v4yjtYhQUdRjQJS6",
  "key15": "3AL78LYMBqL1DCBJRctCFMyCwDUgW7aYq8rGRVSRFjXtodjDZgaquux28KF3peWqrHbXgGGFN1EjnQFJKvYJm4nU",
  "key16": "YHcr2eEyGpGtjrAvDNwfBcB75SE1Xuer8pnq131Ni2nZkchaFDqahoGRuyTkALJgmFvjeSxZcpDE5eXDBmupsu3",
  "key17": "2Nen62GufhDh6fL2vt979L8Krb3nM16Fj3BTd6T8fwbuU3CGdyQXGyo46FyDPpcGLzehfaCz5VBu9yTwvfqHaW3h",
  "key18": "3Pg6ZY3jfGeKC3a8hhC9DcKwCfabaa5oEvpGPQbXdmbD45ANJ9bp5XgzoCury9pPPjRyfniHHSK18bh7n6jZBZq3",
  "key19": "2CmXGM64gZuByoCaeKMX7J4Betq7fWnvjNKZPfq6sjgYgyof3fhZgKeDm4N2eG3mkr6LYpC8CzGgBotsvFgoAGTy",
  "key20": "5zKYCSYbZVhw5Nx5Z2PyfYb7sWmayVu2xMfNSXqvQSWzdZL5DZwSMG9DjWRhEHkhwWktHYsynjNoXBQe8MiVY7PY",
  "key21": "uKaUo6ryj3vxv1jvkT7e3RbVNgNQnxdoS4aUjbp5HgVFWHwb6ui44Qj8qcxsrmQwzEAecUbnPVa8ezNYjTbvpNG",
  "key22": "4ang5BNi7LLShRpRbg5va5kr83Mx7UhNar37nt9H32LbpyUXvP7BNfDpaCH5xBzh9LJGELpanSLP5XRy6cyt7RJS",
  "key23": "2DsL1Q5wL8Pz5nG7SeTh2wBzkHvqjuVZzsMW3sgJmijYG314YAYpa9HbkJ2Qq5kRRjE6gcC93iQwvKe85hQXNKXH",
  "key24": "66HpPWcrZhtL5bK4NK88uMPxAXArbmYGHQ2Rq2xCexrAQJXJSvtQ9FF3VuhEAKFZKHqj3ijxCocSDzfVH3cGM1GU",
  "key25": "3rrBbppRMT2MzDt6MVEGzaSfaML65jLEUUjxvJE1Ggsv7ddNZKPoV2BWvmnYsGM6YSDgb8guhbBgRiexvfcjdWYe",
  "key26": "4NuudnQjkG6P7PJCz5sA9V69ngxJQXQyE1tDfdjAGfsp2zwsAwLXqet1wE7tyZQEV5NADDCjuaL5xK5cEt2TmGGy",
  "key27": "3kRoEnAMqmKjFT6CEL6j7KkhCn2jb2FZND8PHhJitLSf2CgnwwS8eMLRfHfDgQT9arWu7gN4sqCBjpJUGwCEdJdy",
  "key28": "4QPAP9km6aXLaU3AiNyApaePRPMV7QJFi1vR6hzSQZEKYygrEteahdeiaK2dFo2jr3p9WNtwAFZ8p88MwBuEKKa4",
  "key29": "34WoJczKEc7vWM9w1XqgeczthEZkzYxmjv5nFu5f8oXPXg5GKVDZzyNiiTHkfDDxcWL7gcsy99GXAawKYBjotrSL",
  "key30": "5E5WTiMajvu2a4rxvWSSbC7Rkz7WoaqtW4SaJz4EtdsDWf2jzcc4CHF8WJWq7gFskBWr5oeWGb1DKMFz3KoqLGPf",
  "key31": "3sW3jYw8YNSuB9GcFRmunMvi7Zp97gnN1jpHWTjw6vUm6xfqpEEPG2VDg1zUKpuH6zxL989esbFssobFqiA3Bh5",
  "key32": "3mQyCUPU5S7J8kdJuX9qMGpuaCzhMZqSynf6bZnkqumDC1pVwiavmv7uUnREEXq2NEsMQ3w7w8QRYkw8eLVdpBxb",
  "key33": "2tFBkV2BhNjp14Zy1zaD8cg45B8sVgNevtqFuGBqc86EvQQegQLexu5gTFn3ZBLhEsti1sGH2X3VMQkhtSXA7Dmz",
  "key34": "4FCF6gw5LuTjNJpFqjLh86fseCaiD81atBvsCDwK62pFf2w2CYiTTNQhcvtiFq6jWNW6Vp6DC7KR9jsRVJHMvZAH",
  "key35": "25eFyoJxaatpVg1TB6n7kXcCnw3bjeA57TBN6ofMwB9ygTdRwjWzRmVRVspR8Wehh7G3Hn2JmzazowuQgNrMUKTY",
  "key36": "UBnzLQUrLACxd4K4tbnxpMXpLrsvAzW8Cv8WVFQHRPkepiutXHU6ioJ4TXHZPPQhqrfdt9UXLJEwz59ZPyJvHKp",
  "key37": "57e6kmPaMQqrkbXYvxSDuBMhEUA2W4pk3MHnrQTbSP5VwxuPWEsVKUX3xsmVCxydwYKj6H3xz7a6XRtQX7WEdrx5",
  "key38": "41NQAXRoYVsWSDPrtsTay3Nhv4CvK3QLrsDgjz1CvoJ9SsbG8gizR91juXhH7AE2HMDf9yH7MzSK3SzCv8i8Dw7s",
  "key39": "5EE6kgPsgYDA9SPcgmV6YXYEHDxhFWUjXWrjBk2aLQhA28epZTUdLeZ1LCx4Bh1pHvgkNYuMsK1KsJebRs4tSSGv",
  "key40": "3A5RC7Lgq7EgKtqAKcHdW1SxJeo2jkqeGY7C1TRMVUWPAyqPqfttx5DTDvAUi1XGGc82Sb2yXXfYo8AdLRNCKVxp",
  "key41": "dAM6mMyrGUQTjP8aH7T26TyVBxPjDFY4yFDxkrpxefR9TtgxdBJ9v3P3y8c36c2FieY8ripTtcuZenkAEQuEmDE",
  "key42": "57NLLsDWPmKd2MSr9SKTYSX3D2UyESw1te3zpbeBogHJ1yLqK28LSbV2EHTWRhikpSW5iyDe2CqVubF93kU61aAV"
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
