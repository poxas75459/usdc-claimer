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
    "24phX78GiG8YM3dev6Wk75oTFmAQJV9SSeepJgjeWvdZeL1DoqqUx3XP2TLPrzgv5xJ4v2gU5JEs6NLQGsCHPnU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nP42geNDhuoJr6mdH16a8E7MPwTrfadwW9MJkRbpeNQKFDL7pVhGree2DHGFQWxqSjXMWFRiBzMk75cDUkaed2U",
  "key1": "5Ld8qbADSBScLk6kFWf6QT8uLjj7bgoagDWQkGio7W6pF2sSJoujB4jMrdsNLodfYj813PEvMhAgzKfBevW7zGyq",
  "key2": "RVAKqratUSKqaUFDQ5NXJnNcngBMhZzWdcwzZwTTvBrrHWtgCVXwvvnbGfs1gQ6RyyQTevTT5YepK7hgWz6nRvi",
  "key3": "279aiFMjLDsAHpxxb9DwAqn78Ck32cfskSUqxP5qiVeX86gSiPePMXUdhv7YQjLgFqAtLytNGeP1rLXhZFWvgUQj",
  "key4": "5iv24pqAMufextekewsY74K2P4ASPyiBzmAXNvwU2e2RjqxcEQ6VidG6pKqco9QxfXtgjhnGBb9osGU7q1mXkToZ",
  "key5": "2RTfUu1ZZ1mLMYzKgDVHGrZAWo5GDEk7zLByZ3SMoGMapGQ8N6comBD8y56kxC1gSHiUoQ2rdZC4E2dujMvCf6xk",
  "key6": "3gLKUZNpc9op1TQ4sxrwjyqpGsVDGMK14Hg89GR6GtNHnpn64StSDvSRjNZwnwNSu68WL1o7LMbpKriowNStUaab",
  "key7": "K6DwisAySKQeMKQSVzAiVvfym19H8qFuEFwpAzXeygoZruYk2Cyv921p5URNA3GYqSg3NnvYr98t5kC72FoGJWj",
  "key8": "4B5zyLdnthN7NST77HPDip1gBezQQRwmujmjnuSJKhxcFQ9xZrYj6yhMAnFmkKKw2DD1w618848Gj8HwKLYKMGp9",
  "key9": "2vqo6Zi5egQBzdgDKZAv671xrzWPpQx1k6a9tbLvTn7KNmYYGcnGv52xn4gSW6hJw4KjQT3Ff35crKnUygDeoyfh",
  "key10": "2ryKdsT9GWG6nhAZBcSno1BeBJeHpv6cySjZ3qxoEngQj864dJ6ehPkLfJ84DgRemaoJw9dtynkoX7gAKJF2cF3o",
  "key11": "2wKaDwBMBq61Ls4FWmjFRiohCeUQ1vzPi1kW8R5W6QDmAzbGn7Bt75Eqmj61vfSGSBDsui3ovga6zk7doDkMJ1cM",
  "key12": "4YQpjsw1quRxvA8ZgoJdhvEHwmwcqxh5pY8psi4sHLXKtL5Y7ixsFZ31eXeFD5zAxZWFpNsSibmXXzSoXYAUzDbg",
  "key13": "5MfSUoWoTP9F5Kfk9yLdbciKHVHaQiKjAKu2rpzTB9iH6Ub81GSgu4Ad7BN1qauzo634XRTfNyjPhJAarfJKLDgp",
  "key14": "3DxtbUgu5cjvmLuPMK2tFkAhndSAjoREyryhpy4xqQFXeoQWuFFtjEy371cc8bozKpaRMwfTqnxvXwBrsRcvVMUY",
  "key15": "2bf8mbH48H1aJ5biGp1egegerJ6qqpdbqxZbehEwGuxxLLBAr8mvZ62n3fJ2q3DqJXBF9rhf6g1YoegpTqPRLXzd",
  "key16": "4sin1n4KfLei3YBceqkMYqLK1UWxDgtQZGXYwZ1VP8ptmpJQVzsXUAy2fLLEmQ2Fa7dqgpcjmL6oQTuo6A2XjQrq",
  "key17": "4PBv6kYVS6ncPrGhJf2ewF2Xe72L5gyuFghJhWja9uZ3qFTJbsuqTn7BXrYsr8hA8WFoXrkG5PgVZLHpAS6hKLsE",
  "key18": "2xU2FHkaeNA3LFkjHafxpkUnFxjTHXxN5KyRbpvhauzr4pzdXiUXctV9d497XoHqmMW2QdSmygWLjHGE44f44ATM",
  "key19": "4LKHeMWmwxLSyN5LSWLcYrm4KCCDGRMiHkbaoszUXX8uu3SRNBV9utbBe5iwSLAr2JAMwhd3rwmqmMGYeZj22DFj",
  "key20": "58zWNb3eb8mWyFVLxgBwXTHgjLqrcVdHX52NJ658MvM4pzxfdTTfDd1PEjW4if89WZqaLWTKhYUSEcsJvmhzsCsW",
  "key21": "4wTuWj6hpgFiRHAVuTmfWDgAMG3k3R7og9PoYdJXjWHBNHecinVcFMmgoMPT5Lq1kEcdi3DEXBgx7UGfiy4sqPGj",
  "key22": "4cTKckC4V2xmb5UZ4Z7BzNiZVDyKDPEF5df6CTJ7Ar5Mn2qKb6PigZNeUTGUxbaq2aucD8MBdEgbf4qojcRvbawE",
  "key23": "3D8uVWLHueqaLzXx6rbUbjJnBpvUgSGnFvybiv7uGJ48ostC8AQhkMqg6UL9Vd5MpFkcnSLykZqV5doMe4H6CKcV",
  "key24": "4oriz7xiegbDL6fWV2g6U9Bx9FWzBiNufYn5bzgNUPWH5TwZFVqaZ99QBwGwx2hPx4oabhnoQ9FzujJqv9Fdbo7F",
  "key25": "mjxftqjM7BKQ4TabZt4PLAyxgCn3xkPK9ZpajTa1KXADYXH1sxHM643M1pQ6mwmeFmREgAyR8FtUNNYttRjNLaE",
  "key26": "3hLieh6hgZ1rK91oBuyFMPECJ1Q3H8tmtPUxveBJ3LBK7TqNoQ88KxCsKEYYuTREk6cWhy2Td8ZgdzhWYizqGhxD",
  "key27": "2BC1ZXgaKv2aHzSYwRr7SN4xxsCmcN2rbRS583GSoks9JbzwyugsapwDGB9csrU1pDfUFetP4eyNELjPv8UTHKWJ",
  "key28": "Uu6jL6dGX43BKovwXFAGHhU9mBX3byJVEsqeZFiYZEBZtJkiV8L8ahtDLS6VfyP6WEtjF6p8VSNxsbQ3r5Gj1th",
  "key29": "4LTjzqb7tECQcPhwdmMh2uGyNiMK2jftsB7rBcHGAViqPq5uvSbrmyWhTZR8vHeuE7XcWxyr9e9RBqNEWHGzozi4",
  "key30": "4wrpsT8QykejRCxibjJC1zurwWzLoXfsNgNrCsZ19m3vcLwCxbu7EJzbJznDM6CD79JBGpBfi3Rop2UdUBhVnKjA",
  "key31": "24QUtkVJkKKg9EAcp5b8WbCMXq64rNthbB8NhepQNjzfVbUq9mqK9YwEP4FdahSdrr871Ge5RA1cjApXcoPwCie6",
  "key32": "7uxB9Pa9QcvB8ZPqrx3KLudjQMEryrCu7VQVdSHrY3xNDNyy5CTrmPvDxDhG3YNUKTqa1xuG89zdsm71WzctjXJ",
  "key33": "3GcFN9qMb2ph6kwJ3YSZ792fsQu9D7RkzXUMYozmkcM4Dd2NtXk9CEaVQQZQoHyV4zQspEQF66mPusMYtgVhYX3X",
  "key34": "GBRkqZqEEjq8YCVy66v5iMrJ6H8ueM5Umiug3FUjkw9Cqjap9yYCJMHVZcNBrKvKfoNFUfBYVq1S8GNVJqnqXVA",
  "key35": "t66q8DTDrEgqwA3RZMnLHYkkkZeDPsb6zADL1ScM2AvLKeJA1a296ogD6CS1cnFA5LHYjbKy2krxDvpmjDvHhoF",
  "key36": "2Pi7TvitxxLdhaEoL2DU2JnnTCkENwSow4q5KD5iPX4fTynHmU9aD3UoTuru2JGUSGkH6j648eL4ahgCbHD6Wmjg",
  "key37": "4C63JroKuTfWRnD3YN2F6FQSX7nar8ZZAoBND8NKCabnH9zfrejf1AihcZ6emqLa3p4ja65Z8zKSUBKA4sXdzGqN",
  "key38": "3ow8irPCP9L7S6orGgwwwwz3JWPcsMiBBeCgzjK3rKN5rfmVAz7iD3bsL3vyttLzoL6je2UqkdLnBViXTRxn7MPS",
  "key39": "5CvAHjeMq1zRLR1awH61Gty3jsPHA9WMYXGk7u1J3FwmfM4sBp7MhFscFBz8Dz4qhWRLv7Wz32eGuuqGYxJdYJxH",
  "key40": "42RWBh3XCgjNEHAi9KYwCszFXguYqyzQLQnFZaWqo47bXoY3TE5Z9G5LX17jj4XZXykEDwnHkHuknG9RxRh3BKwM",
  "key41": "3Ed85U7g5CDMSCGEWrStrFgPL22xcfZjsoRFyuG8PWkSDocZF8GPEb5yYtvSGouQwTHp2NH1ZejjQp3nvF9MqVR9",
  "key42": "4zHwLNYMPSNUMZCwHo6AhFeHbHp5KKzVTskTiLfyGSPshfuFA5SX7SbyA83LCkNYCoAvaHarsQGbJhTJKWcVkDNm",
  "key43": "2oSuNeULTpkpTk8ibFFgScMn9zmZpgG1HEz2K1o38kzpKDqxwAhnwozN2teUFfQ7jMtzNRP9xbKqQ1rWRsEZgnG",
  "key44": "voEVgrKK4vNvo1Hg3mYXnG889ym4eYR9FybFastqR5AWu7akdW5EP8uRifG8wCk35bwHPBgZgYbWiaEofEYdzWN",
  "key45": "3LxThFTzEBPNLDgQhc4gpNLkQrd6YHWKq95ktiQMWJDz2PRjdybmvTE7RGQDDPih4MTLzo86NYrZQZGGHaedrS7m",
  "key46": "Hn7tUGz9KAtrK9Q1tuQgMiZZf6EMNEkyDzzSrJTCjTjqgyEy1hRKsHVWoYNFNDaqcAfMNsGDi9uyud6TgNAFZcx"
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
