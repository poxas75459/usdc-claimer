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
    "29XsJvN25VLi5wvJ8DVZYhUY8Bp9fwtkBvQ7CdfTs9aCVvAnQYffwJNfr2qXgH6KDCfhRe8wnjnQogE5PzxfCNhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YpB8XNRHZSecHwcaVooCycaKaWHEGS6xtsicxTsiJY8ZcMja4bxubAPoPUc82p29yLz9iq3JsfTi2r2KqXzj7D9",
  "key1": "4ciBZvUE1Qm2BHhhkCFLPdmxWhH5Dm1wjunz7ZxsW8TeNXNxSTbY7PbvHV8mEFbVSixkE4GHaPFJHhbdrTi2z7zc",
  "key2": "3J6f9Ecf1KrcqcWuyodpAv8vyyEmfwgymxwcEzVJHyowR5qLhN6gW16pJdWrDA6e67X2wUZCKQXKSrBt8Zk7BQkL",
  "key3": "43gWFfCQdHriLDpZzpJhDF7w2tRuiJZQs4Hpgj7NxdMaatn16q4Hv7CW5r9R5TFRTFqxEVtFDZ6caus9iVwjoTyG",
  "key4": "2kiQ1Wj8n67Kog2kjg6jiUVAX2hzJA7uTHGYzX221ijghVmTuLgi8EEaRRaDRcp3nMNEz5uW74eeM8huYBioyyRN",
  "key5": "3UEHBph9n6sp8rUE1FvWqTiTkGGjb2Poo1wXwvFW8QHnVqL6P1Veuiz6h2LZKwdvmZzTvv5eUYzd6TZ7NktpvJPF",
  "key6": "5Z8RVpUsUnwQfM1zgFAaTmJ1szRVAEZ7d8xFfrxkFAo8gXr3Sog4yPo8x1XcaPdwaU5y7ZzagW7vTz72fFBRhwk7",
  "key7": "2uagE8dRzdw8axEHin8jg7FoaLUYN2N4MjvXGTP8E1NWmB28HzQaLQrafgVKPQxxhmUccqiqAz5qNvva6tGLpL1j",
  "key8": "2FcTTfAsfDzZHBE7bfxJp7My1UwV4a7rs3huPfNqDQi2YykU22JoeeR4iqkdmjaNYebkzdWbghgSgD4EvtcQMogD",
  "key9": "2YCE4fHkbmHSx4qAVFu8AjPGdf6ZgZaqWExF2bY7tXnGtwE2BgQmtUBzCb3oApWs25nVQxT6M9AUEuHo6oHkSu9G",
  "key10": "3yZNpdmiyMk7dos2GQEHvyN2WYXmSeGbLGkUEYigzJrM1j256bqJ9FJ44AV3gxaA8AzfFCEHPMpF7i3qrRdg15DX",
  "key11": "4Vhftir7Ac892hKc4k4gBPvGDL5DVzNty7Ef1y2aMtFvnMLmg56FV1UpjNEZVeY6hHMztMdBTDx8aQKnifNfsnbg",
  "key12": "4fxvASYNvTkXvStWqMb8JWZNeKsao3rYYS8F98E7faTpjMyb5jdPEY5oEabZuzD3m42sn3zmbQETAF8tehzcjfgK",
  "key13": "5oqC5xTTyXRk73dh2GY6a7yMkqJXYkVgDvZNa77Bt7WWDrWivWxhQvs3Gx5Ln5rmi7C8cMXEn79ix3D55UdvCji1",
  "key14": "5aY7Sg3VmiDTtjA6A8aR9Uz4b3tSCH4WGNuU44Gi4dS2ZpxxJ2NoBUf2A62rGKcbcG24twYekxXa4KsYp4ZrrC2C",
  "key15": "35a9e63kShzi5PHcYrSSqmyw2KGAJoX8j6Kc53wJ9LpYHaC5jtwWYs9nVEV2mY86f4QgPZuiqL7n3M7DjXSvuUVv",
  "key16": "2SShoNRDp9hWiW4hxJzRDfqbL8HFxZimq6VAysYHWMuVvmZgdzDJEVtbNWqaQ2rxGxGLnZthtwGXisifhNTr5XxS",
  "key17": "nKnHiexGvcYiYefdZLXAWRTUyW4uCYMY7qv3eKtxPfMi3WUW5HUfgEpDmJDL9UoGd2xGRMCpcfkLbYdsBfLwzsi",
  "key18": "3RAmXt7XJriCmsVMi5WyDKfp6pxndDkdK2HgeatDzjMXnhutYwri4fabteaoWzbcRiZMwLNug8GNXetkk8DkHmXJ",
  "key19": "2F4M9X13tKWEWhZ92fqLoxx2DH8QxRXzynm8UZgjsPyjs9ukuTH4VhXjyfpjn1dcnu97Jk8fMGfo5fuV7MbMH3ck",
  "key20": "36wXbaYgXWnpoj6BMWV1pGxcUKGiuz8BMn7j5PL9DN3nm6Z4Hc394qBr86SJrTBceN8bopRAMmn6Gq84ctUNegrS",
  "key21": "3d6xahMkhRb6F6TU3SS6LfJATBJUsePJw7gryiyrQsoxSfWiRGbq6yPAXdedoJQydH2jxG8JiiXTHHW7E4Kmwx6T",
  "key22": "4QPsgsg4bk6R2uepVjWdmdWaFsV8NZSewtojLyCuM1G4QJfdQ2sS4vQLRybtio3qQCj1NiSaZzw9qGDSeRVL42xB",
  "key23": "wGuqGHTjPpTYKAmBCbxtVHSxYKYk7Ax6x3d9z1hcaW9nh6PMvBieAsZEcT9ppsry4iZRw3rcfboBVJ8SK7PRxuz",
  "key24": "4GeLa7PCiMmgLDwe1WtUme7sdiycnojyWgrAbJ8652PdxvtfV216CVyuN1a41gC95PNHKrfqP5P2GJKw6PrXEDcC",
  "key25": "4hh9mHiJRvrDFadb1CFtehE9dwn2fuggEYQiPXW25TXChrgGg1DvRQfWCG2CTvtydUQRLcVJmL6Ftth8KndVig56",
  "key26": "2giGYyXRT7eViDZpedk8zQhhRqaZ66ocKo6B8oB2fzttJwxfsd2zBSb96AtwrVsknYJuAyRP5nGFZJe2ji5nGrXQ",
  "key27": "38sCavmmYTpZQVXHNEdyz2vvzenVDUpU6kEd5DwwqiHnBGNCAnP1CuBSA1UfSNF58g4tvsUhueTBn2UsbqtoUr5V",
  "key28": "4x9r9KBwtnfpyjvrivKqenPhnRjt4emPKKYHZtfkvaAC5BvTwuYQ5CzbGYn77sEfKjDR7b61KQSymTS2j9rnhqnn",
  "key29": "UhaQbasaVHSUGFGR37iyz5jpEg9eD1g8AmeuL4x3gt4fngZVceyHiwB5QDwNZb3jmmANiPQA6VinqC5krcBSmEa",
  "key30": "5oaJTyN2D87apS4rBkMUGbkSYz4QERi7eSJ9cEtJkfAmTqohvKMBZR1VhMZJrHwCP4DipAqChPeHAC9BRCjPSUJE",
  "key31": "3wH8rifDSCn7R6bzWQECHyjBm1mCb7GW7qYF1fKhnBHqjHPwTBabqXVv1X9HUZft1ZssSs76japGrJNmFPbPTFoM",
  "key32": "2c6b7FfTtpe4XGkMvnqiCxsWYm3WbAfA9mRcGuzEaVtfHMA7McpLURrWwCx4oGy9ExQTfm3k4oyn9kaybuAUkTcn",
  "key33": "65JBipwk3qfa5J7my5bfQqiKoAELMA3BdgLAkWmMhTZLKuko3QLq3DtySbNgZwkmEz1Sr2hNrvz3uZ5iTUsanu79",
  "key34": "Vgp4w7qiw3MPUhd4oBK6UMjBMxgfZjP3KfSgVHaguSqwHC7Tb8AaPQJujG6RWWYc8iYVeRJRUpnS1Qnjv5o54oy",
  "key35": "h5nHEL2zJPM635DqevSa5neeB81txtbu6sxCUZ3jwWi5ZV4pdSQwmtoqX4XtmgwR2BQZJ25m3TKAgwyWDoK7ZdD",
  "key36": "5CAe5GcyvMUrj6ibhwNCoqfUJVLcwzmu6CgMKKuphJvc8YuarCZZuzqSSiGXCRkS3CoCRCs5qJJKVX8JYvxmnDwg",
  "key37": "gdfLzmdJuWq7HvfGr8YFuXeGJ8TDofduod65ndLXvG8pFs3BYdkjBGgCjXLaYUoGdzsk31LMqNL4WMaaSHfV62C",
  "key38": "3JcAPz8agr9mXRgxPSAJKkjAfWtX1Y8462nNrwjH1Gb27ATbQUho6QVKxCWAuMsZ63GNShuzvncEmeLsePnJYfu6",
  "key39": "4RMxkuuvRwnc1ToWY5QmYTJYoqEX4QtCNg8urFhdNmArhBFd17uauHtYchM1n3RwsWHWqEJgxsWwxDcwXzYCTNGq",
  "key40": "5DBYkTFfUx6RQzcqdhcqqppdggbxMWXKMTDMFGNg1ioCRzNFeXoKzL1tck74L78dYt6P3EFRPTnHRfHg8puCfZsA",
  "key41": "343jBckiHJ4NwSMPNsA169vPF15wG8EydgePi73J73TgtB4a2RLd7tbU9asgvjMB1uogBzpsw25zCzEmBoDkjvh1",
  "key42": "2UqQHUkvLXqSKGXSyGUAVz2Bxfs1nV8xTz68W4r7sxjraoAQTEkoUL8L5jBezZKR2vSpvnxLLTcXs8ERdLvcRBCa",
  "key43": "64cVzTe9rmaKWZfopxvKbsoEpMwXVP3R7jLWEoR8EurcwsPUcFkfarTPN56CdVd7vjsrE6yx48rjRfJa1rXmgKd",
  "key44": "2km5UuvuPg4YfhT39VhzfXfTsqUHxwzihyMRbbuYonoJWJvgCBbJRf3vdq7cvYZoYmzrkzwcnw1DB74M5gJZceqD",
  "key45": "PcMREqLQYuKET1hyJ9j4XfKCDStgMMg7u9n1Ej3tUhS8qXA4rAFcWEwoC2LUi8xJZHCozUVEJsgNWxUaoWDiPuP",
  "key46": "3an3384vKodDScPxdBvD9zuaDfcNRhvjK5P5TNFZCJJMieTeFWPsUdopbo2ENaMFyV6xRu2AGbsZfQzF2gKMsafK"
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
